import json

print('='*80)
print('Day 29 예문 샘플')
print('='*80)

parts = [
    ('day29_1_headword.json', 'Part 1: Headword (650점)', 5),
    ('day29_2_basic.json', 'Part 2: Basic (650점)', 5),
    ('day29_3_intermediate.json', 'Part 3: Intermediate (800점)', 5),
    ('day29_4_advanced.json', 'Part 4: Advanced (900점)', 5)
]

for filename, title, sample_count in parts:
    print(f'\n{title}')
    print('-'*80)
    
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for i in range(min(sample_count, len(data))):
        item = data[i]
        no = item['no']
        word = item['word']
        meaning = item['meaning']
        ex_en = item['exampleEn']
        ex_ko = item['exampleKo']
        
        print(f'\n{i+1}. No.{no} - {word}')
        print(f'   뜻: {meaning}')
        print(f'   EN: {ex_en}')
        print(f'   KO: {ex_ko}')

print('\n' + '='*80)
print('총 20개 예문 샘플 (각 파트당 5개)')
print('='*80)
