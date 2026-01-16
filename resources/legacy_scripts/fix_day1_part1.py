import pandas as pd
import json

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# Day 1 데이터 추출
day1 = df[df['Day'] == 1].copy()

print(f"Day 1 총 단어 수: {len(day1)}")

# Part 1: 1-40번 (650 표제어)
print(f"\nDay 1 Part 1 (No. 1-40, 650 표제어) 생성 중...")
part1_data = []
for idx, row in day1[(day1['No'] >= 1) & (day1['No'] <= 40)].iterrows():
    word_data = {
        'day': int(row['Day']),
        'no': int(row['No']),
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 650,
        'exampleEn': f"Example sentence for {row['Word']}.",
        'exampleKo': f"{row['Meaning']}에 대한 예문입니다."
    }
    part1_data.append(word_data)

# 기존 파일 덮어쓰기
with open('day1_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print(f"✅ day1_part1.json 수정 완료 ({len(part1_data)} words)")
print(f"   범위: No. {part1_data[0]['no']} ~ {part1_data[-1]['no']}")
print(f"   첫 단어: {part1_data[0]['word']}")
print(f"   마지막 단어: {part1_data[-1]['word']}")
