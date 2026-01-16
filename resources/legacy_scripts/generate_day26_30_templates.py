import pandas as pd
import json

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# Day 26-30 생성
for day in range(26, 31):
    print(f"Generating Day {day}...")
    
    # Part 1: Headword (1-40, 650)
    part1_data = df[(df['Day'] == day) & (df['No'] <= 40)]
    part1_words = []
    for _, row in part1_data.iterrows():
        word_data = {
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 650,
            'exampleEn': f"The {row['Word']} is important.",
            'exampleKo': f"{row['Meaning']}은(는) 중요합니다."
        }
        part1_words.append(word_data)
    
    with open(f'day{day}_1_headword.json', 'w', encoding='utf-8') as f:
        json.dump(part1_words, f, ensure_ascii=False, indent=2)
    
    # Part 2: Basic (41-68, 650)
    part2_data = df[(df['Day'] == day) & (df['No'] > 40) & (df['No'] <= 68)]
    part2_words = []
    for _, row in part2_data.iterrows():
        word_data = {
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 650,
            'exampleEn': f"Please consider the {row['Word']}.",
            'exampleKo': f"{row['Meaning']}을(를) 고려하세요."
        }
        part2_words.append(word_data)
    
    with open(f'day{day}_2_basic.json', 'w', encoding='utf-8') as f:
        json.dump(part2_words, f, ensure_ascii=False, indent=2)
    
    # Part 3: Intermediate (69-136, 800)
    part3_data = df[(df['Day'] == day) & (df['No'] > 68) & (df['No'] <= 136)]
    part3_words = []
    for _, row in part3_data.iterrows():
        word_data = {
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 800,
            'exampleEn': f"We need to {row['Word']} this matter.",
            'exampleKo': f"이 문제를 {row['Meaning']}해야 합니다."
        }
        part3_words.append(word_data)
    
    with open(f'day{day}_3_intermediate.json', 'w', encoding='utf-8') as f:
        json.dump(part3_words, f, ensure_ascii=False, indent=2)
    
    # Part 4: Advanced (137-168, 900)
    part4_data = df[(df['Day'] == day) & (df['No'] > 136)]
    part4_words = []
    for _, row in part4_data.iterrows():
        word_data = {
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 900,
            'exampleEn': f"The {row['Word']} approach is recommended.",
            'exampleKo': f"{row['Meaning']} 접근법이 권장됩니다."
        }
        part4_words.append(word_data)
    
    with open(f'day{day}_4_advanced.json', 'w', encoding='utf-8') as f:
        json.dump(part4_words, f, ensure_ascii=False, indent=2)
    
    print(f"Day {day} completed: {len(part1_words)} + {len(part2_words)} + {len(part3_words)} + {len(part4_words)} words")

print("\nAll Days 26-30 generated successfully!")
print("NOTE: These are template examples. Please review and improve with TOEIC-quality examples.")
