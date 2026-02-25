
import json
import glob
import re

def re_merge_with_full_metadata():
    # 1. Load Original Data (The 1500 words backbone)
    # Since I don't have the original backbone file separately anymore (it's in the final), 
    # I will work on the current vocabulary_final.json but reset the metadata fields 
    # for words that have a corresponding Sinagong entry.
    
    with open('src/data/vocabulary_final.json', 'r', encoding='utf-8') as f:
        final_data = json.load(f)

    # 2. Load all Sinagong Data
    sina_map = {} # word -> list of sina entries
    sina_id_map = {} # id -> entry
    
    for f_path in glob.glob('toeic-data/sina_voca_*.json'):
        with open(f_path, 'r', encoding='utf-8') as f:
            day_data = json.load(f)
            for d in day_data:
                word = d['word'].lower().strip()
                if word not in sina_map: sina_map[word] = []
                sina_map[word].append(d)
                sina_id_map[d['id']] = d

    # 3. Enhanced Merge Logic
    for item in final_data:
        word = item['word'].lower().strip()
        
        # Collect all possible Sina sources for this word or its derivatives
        sources = []
        if word in sina_map:
            sources.extend(sina_map[word])
            
        # Also check if any of its derivatives were Sinagong headwords
        if 'derivatives' in item:
            for dv in item['derivatives']:
                dv_word = dv['word'].lower().strip()
                if dv_word in sina_map:
                    sources.extend(sina_map[dv_word])

        if not sources:
            continue

        # Aggregate Metadata
        usage_notes = []
        grammar_points = []
        all_collocations = item.get('collocations', [])
        collo_texts = {c['en'].lower() for c in all_collocations}
        
        # Track which words were sources to build a richer "similar" or "derivatives" list
        source_words = set()

        for s in sources:
            source_words.add(s['word'])
            
            # Aggregate Notes
            if s.get('usageNote') and s['usageNote'] not in usage_notes:
                # Prefix with the word if it's a derivative source
                note = s['usageNote']
                if s['word'].lower() != word:
                    note = f"[{s['word']}] {note}"
                usage_notes.append(note)
                
            if s.get('grammarPoint') and s['grammarPoint'] not in grammar_points:
                gp = s['grammarPoint']
                if s['word'].lower() != word:
                    gp = f"[{s['word']}] {gp}"
                grammar_points.append(gp)
            
            # Aggregate Collocations
            for c in s.get('collocations', []):
                if c['en'].lower() not in collo_texts:
                    all_collocations.append(c)
                    collo_texts.add(c['en'].lower())

        # Update the item
        if usage_notes:
            item['usageNote'] = " / ".join(usage_notes)
        if grammar_points:
            item['grammarPoint'] = " / ".join(grammar_points)
        item['collocations'] = all_collocations
        
        # Ensure Employer/Employee case:
        # If the word is 'employ', make sure its derivatives are rich
        if word == 'employ':
            # Force similar/expansion to be visible
            item['similar'] = list(set(item.get('similar', []) + ['employer', 'employee', 'employment']))

    # 4. Save
    with open('src/data/vocabulary_final.json', 'w', encoding='utf-8') as f:
        json.dump(final_data, f, indent=2, ensure_ascii=False)
    
    print("Re-merge complete. All metadata aggregated.")

if __name__ == "__main__":
    re_merge_with_full_metadata()
