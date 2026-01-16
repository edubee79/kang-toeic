import json

files = [
    ('day27_1_headword.json', 650),
    ('day27_2_basic.json', 650),
    ('day27_3_intermediate.json', 800),
    ('day27_4_advanced.json', 900)
]

print('Day 27 Quick Check')
print('='*70)

for filename, expected_score in files:
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f'\n{filename}:')
    print(f'  Total words: {len(data)}')
    print(f'  First word: No.{data[0]["no"]} - {data[0]["word"]} ({data[0]["meaning"]})')
    print(f'  Last word: No.{data[-1]["no"]} - {data[-1]["word"]} ({data[-1]["meaning"]})')
    print(f'  Expected score: {expected_score}')
    
    # 모든 점수 확인
    scores = set(item['targetScore'] for item in data)
    if len(scores) == 1 and list(scores)[0] == expected_score:
        print(f'  ✅ All scores correct: {expected_score}')
    else:
        print(f'  ❌ Score mismatch! Found: {scores}')

print('\n' + '='*70)
