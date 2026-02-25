
import json
import glob

def fix_and_upgrade_metadata():
    # 1. Load All Sinagong Data for reference
    sina_data = []
    for f in glob.glob('toeic-data/sina_voca_*.json'):
        sina_data.extend(json.load(open(f, encoding='utf-8')))
    
    # word -> full_entry_list
    sina_lookup = {}
    for entry in sina_data:
        w = entry['word'].lower().strip()
        if w not in sina_lookup: sina_lookup[w] = []
        sina_lookup[w].append(entry)

    # 2. Load the Final Data to fix
    with open('src/data/vocabulary_final.json', 'r', encoding='utf-8') as f:
        final_data = json.load(f)

    # 3. Process Each Word
    stats = {"usage_added": 0, "grammar_added": 0, "collo_added": 0}

    for item in final_data:
        word = item['word'].lower().strip()
        
        # 3.1 Metadata Harvesting
        all_notes = []
        all_grammar = []
        all_collo = item.get('collocations', [])
        existing_collo = {c['en'].lower() for c in all_collo}

        # Check for word itself and its common variants / derivatives in Sina
        to_search = [word]
        if 'derivatives' in item:
            to_search.extend([d['word'].lower().strip() for d in item['derivatives']])
        
        # Collect from all related sources in Sinagong
        found_sources = []
        for s_word in set(to_search):
            if s_word in sina_lookup:
                found_sources.extend(sina_lookup[s_word])
        
        for source in found_sources:
            # Usage Note
            if source.get('usageNote'):
                note = source['usageNote']
                if source['word'].lower() != word:
                    note = f"[{source['word']}] {note}"
                if note not in all_notes:
                    all_notes.append(note)
                    stats["usage_added"] += 1
            
            # Grammar Point
            if source.get('grammarPoint'):
                gp = source['grammarPoint']
                if source['word'].lower() != word:
                    gp = f"[{source['word']}] {gp}"
                if gp not in all_grammar:
                    all_grammar.append(gp)
                    stats["grammar_added"] += 1
            
            # Collocations
            for c in source.get('collocations', []):
                if c['en'].lower() not in existing_collo:
                    all_collo.append(c)
                    existing_collo.add(c['en'].lower())
                    stats["collo_added"] += 1

        # Update item metadata (if new stuff found)
        if all_notes:
            item['usageNote'] = " / ".join(all_notes)
        if all_grammar:
            item['grammarPoint'] = " / ".join(all_grammar)
        item['collocations'] = all_collo

        # 3.2 Cleanup "Similar" and "Derivatives"
        if 'similar' in item:
            # Clean: No self-references, no redundancies
            cleaned_similar = []
            seen_words = {word}
            for s in item['similar']:
                # Extract actual word from "word (meaning)" or "word (pos)"
                match = s.split('(')[0].strip().lower()
                if match and match not in seen_words:
                    cleaned_similar.append(s)
                    seen_words.add(match)
            item['similar'] = cleaned_similar

        # Specific Case: employ / employer / employee
        if word == 'employ':
            # Ensure these are prominent
            extras = ['employer (고용주)', 'employee (직원, 고용인)', 'employment (고용)']
            for ex in extras:
                ex_w = ex.split('(')[0].strip().lower()
                # Use seen_words logic or just append if not there
                if not any(ex_w in d['word'].lower() for d in item.get('derivatives', [])):
                    if 'derivatives' not in item: item['derivatives'] = []
                    item['derivatives'].append({"word": ex_w, "pos": "", "meaning": ex.split('(')[1].strip(')'), "isCore": True})

    # 4. Save
    with open('src/data/vocabulary_final.json', 'w', encoding='utf-8') as f:
        json.dump(final_data, f, indent=2, ensure_ascii=False)
    
    print(f"Update Complete. Added {stats['usage_added']} usage notes, {stats['grammar_added']} grammar points, and {stats['collo_added']} collocations.")

if __name__ == "__main__":
    fix_and_upgrade_metadata()
