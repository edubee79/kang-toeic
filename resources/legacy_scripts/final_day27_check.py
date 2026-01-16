import json

parts = [
    ('day27_1_headword.json', 650, 40),
    ('day27_2_basic.json', 650, 28),
    ('day27_3_intermediate.json', 800, 68),
    ('day27_4_advanced.json', 900, 32)
]

print('Day 27 검사 결과')
print('='*70)

all_passed = True

for fname, expected_score, expected_count in parts:
    data = json.load(open(fname, 'r', encoding='utf-8'))
    scores = set(item['targetScore'] for item in data)
    
    count_ok = len(data) == expected_count
    score_ok = len(scores) == 1 and list(scores)[0] == expected_score
    
    status = '✅' if count_ok and score_ok else '❌'
    if not (count_ok and score_ok):
        all_passed = False
    
    print(f'\n{status} {fname}')
    print(f'   단어 수: {len(data)} (예상: {expected_count}) {"✅" if count_ok else "❌"}')
    print(f'   점수: {list(scores)[0] if len(scores)==1 else scores} (예상: {expected_score}) {"✅" if score_ok else "❌"}')
    print(f'   범위: No.{data[0]["no"]} ~ No.{data[-1]["no"]}')
    print(f'   첫 단어: {data[0]["word"]} - {data[0]["meaning"]}')
    print(f'   마지막 단어: {data[-1]["word"]} - {data[-1]["meaning"]}')

print('\n' + '='*70)
if all_passed:
    print('✅ Day 27 모든 파트 검사 통과!')
else:
    print('❌ Day 27 일부 파트에 문제가 있습니다.')
print('='*70)
