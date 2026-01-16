import json

print('='*80)
print('예문 품질 비교: Day 21 (수동) vs Day 29 (자동)')
print('='*80)

# Day 21 (수동 작성)
with open('day21_1_headword.json', 'r', encoding='utf-8') as f:
    day21 = json.load(f)

# Day 29 (자동 생성)
with open('day29_1_headword.json', 'r', encoding='utf-8') as f:
    day29 = json.load(f)

print('\n📌 Day 21 Part 1 (수동 작성 - 고품질)')
print('-'*80)
for i in range(5):
    item = day21[i]
    print(f'\n{i+1}. {item["word"]} - {item["meaning"]}')
    print(f'   EN: {item["exampleEn"]}')
    print(f'   KO: {item["exampleKo"]}')

print('\n\n📌 Day 29 Part 1 (자동 생성 - 저품질)')
print('-'*80)
for i in range(5):
    item = day29[i]
    print(f'\n{i+1}. {item["word"]} - {item["meaning"]}')
    print(f'   EN: {item["exampleEn"]}')
    print(f'   KO: {item["exampleKo"]}')

print('\n' + '='*80)
print('결론: Day 21은 실제 TOEIC 문맥의 자연스러운 예문')
print('      Day 29는 "Use X correctly" 패턴의 무의미한 템플릿')
print('='*80)
