
import json
with open('src/data/vocabulary_final.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
qualified = [d for d in data if d['word'] == 'qualified'][0]
with open('sample_qualified.json', 'w', encoding='utf-8') as f:
    json.dump(qualified, f, indent=2, ensure_ascii=False)
