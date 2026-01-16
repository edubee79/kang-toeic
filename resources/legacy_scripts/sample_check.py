import json
import random

files = [f'day{d}_{p}' for d in range(14,31) for p in ['1_headword', '2_basic', '3_intermediate', '4_advanced']]
samples = random.sample(files, 4)

print('Random Sample Check (4 files):')
print('='*70)

for fname in samples:
    filepath = fname + '.json'
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f'\n📄 {filepath}')
    print(f'   Total words: {len(data)}')
    print(f'   First word: No.{data[0]["no"]} - {data[0]["word"]} ({data[0]["meaning"]})')
    print(f'   Target Score: {data[0]["targetScore"]}')
    print(f'   Example EN: {data[0]["exampleEn"][:50]}...')
    print(f'   Example KO: {data[0]["exampleKo"][:50]}...')
    
    # 모든 targetScore 확인
    scores = set(item['targetScore'] for item in data)
    if len(scores) == 1:
        print(f'   ✅ All scores consistent: {list(scores)[0]}')
    else:
        print(f'   ❌ MIXED SCORES: {scores}')

print('\n' + '='*70)
print('Sample check completed!')
