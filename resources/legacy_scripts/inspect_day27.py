import json

print('='*70)
print('Day 27 Detailed Inspection')
print('='*70)

for part_num, (part_name, expected_score, start, end) in enumerate([
    ('1_headword', 650, 1, 40),
    ('2_basic', 650, 41, 68),
    ('3_intermediate', 800, 69, 136),
    ('4_advanced', 900, 137, 168)
], 1):
    filename = f'day27_{part_name}.json'
    print(f'\n📄 Part {part_num}: {filename}')
    print('-'*70)
    
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f'Total words: {len(data)}')
    print(f'Expected range: No.{start}-{end} (Target Score: {expected_score})')
    
    # 첫 3개 단어 샘플
    print(f'\nFirst 3 words:')
    for i in range(min(3, len(data))):
        item = data[i]
        no = item['no']
        word = item['word']
        meaning = item['meaning']
        score = item['targetScore']
        print(f'  {i+1}. No.{no:3d} | {word:25s} | {meaning:35s} | Score: {score}')
    
    # 마지막 3개 단어 샘플
    print(f'\nLast 3 words:')
    for i in range(max(0, len(data)-3), len(data)):
        item = data[i]
        no = item['no']
        word = item['word']
        meaning = item['meaning']
        score = item['targetScore']
        print(f'  {i+1}. No.{no:3d} | {word:25s} | {meaning:35s} | Score: {score}')
    
    # 예문 샘플 (첫 번째 단어)
    if len(data) > 0:
        print(f'\nExample (first word):')
        print(f'  EN: {data[0]["exampleEn"]}')
        print(f'  KO: {data[0]["exampleKo"]}')
    
    # 검증
    errors = []
    
    # Day 번호 확인
    wrong_days = [item['no'] for item in data if item.get('day') != 27]
    if wrong_days:
        errors.append(f'Wrong day numbers at: {wrong_days}')
    
    # Target Score 확인
    wrong_scores = [(item['no'], item['targetScore']) for item in data if item['targetScore'] != expected_score]
    if wrong_scores:
        errors.append(f'Wrong scores: {wrong_scores}')
    
    # 번호 순서 확인
    expected_nos = list(range(start, start + len(data)))
    actual_nos = [item['no'] for item in data]
    if actual_nos != expected_nos:
        errors.append(f'Number sequence mismatch')
    
    # 필수 필드 확인
    required_fields = ['day', 'no', 'word', 'meaning', 'targetScore', 'exampleEn', 'exampleKo']
    for item in data[:5]:  # 처음 5개만 체크
        missing = [field for field in required_fields if field not in item]
        if missing:
            errors.append(f'Missing fields in No.{item.get("no", "?")}: {missing}')
            break
    
    # 결과
    print(f'\n검증 결과: ', end='')
    if errors:
        print('❌ FAILED')
        for error in errors:
            print(f'  - {error}')
    else:
        print('✅ PASSED - All checks successful!')

print('\n' + '='*70)
print('Day 27 Inspection Complete')
print('='*70)
