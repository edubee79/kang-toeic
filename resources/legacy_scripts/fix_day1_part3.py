import pandas as pd
import json

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# Day 1 데이터 추출
day1 = df[df['Day'] == 1].copy()

# Part 3: 69-136번 (800 LC/Part 5,6,7)
print(f"Day 1 Part 3 (No. 69-136, 800점) 생성 중...")
part3_data = []
for idx, row in day1[(day1['No'] >= 69) & (day1['No'] <= 136)].iterrows():
    word_data = {
        'day': int(row['Day']),
        'no': int(row['No']),
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 800,
        'exampleEn': f"Example sentence for {row['Word']}.",
        'exampleKo': f"{row['Meaning']}에 대한 예문입니다."
    }
    part3_data.append(word_data)

# 기존 파일 덮어쓰기
with open('day1_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print(f"✅ day1_part3.json 수정 완료 ({len(part3_data)} words)")
print(f"   범위: No. {part3_data[0]['no']} ~ {part3_data[-1]['no']}")
print(f"   첫 단어: {part3_data[0]['word']}")
print(f"   마지막 단어: {part3_data[-1]['word']}")
