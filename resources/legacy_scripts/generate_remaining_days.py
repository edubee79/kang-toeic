import pandas as pd
import json

df = pd.read_csv('hackers_vocab_final.csv')

# Day 25-30 생성
for day in range(25, 31):
    # Part 1: Headword (1-40, 650)
    data1 = df[(df['Day'] == day) & (df['No'] <= 40)]
    words1 = []
    for _, row in data1.iterrows():
        words1.append({
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 650,
            'exampleEn': f"Use {row['Word']} correctly.",
            'exampleKo': f"{row['Meaning']} 올바르게 사용하세요."
        })
    
    with open(f'day{day}_1_headword.json', 'w', encoding='utf-8') as f:
        json.dump(words1, f, ensure_ascii=False, indent=2)
    
    # Part 2: Basic (41-68, 650)
    data2 = df[(df['Day'] == day) & (df['No'] > 40) & (df['No'] <= 68)]
    words2 = []
    for _, row in data2.iterrows():
        words2.append({
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 650,
            'exampleEn': f"Learn {row['Word']}.",
            'exampleKo': f"{row['Meaning']} 배우세요."
        })
    
    with open(f'day{day}_2_basic.json', 'w', encoding='utf-8') as f:
        json.dump(words2, f, ensure_ascii=False, indent=2)
    
    # Part 3: Intermediate (69-136, 800)
    data3 = df[(df['Day'] == day) & (df['No'] > 68) & (df['No'] <= 136)]
    words3 = []
    for _, row in data3.iterrows():
        words3.append({
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 800,
            'exampleEn': f"Master {row['Word']}.",
            'exampleKo': f"{row['Meaning']} 숙달하세요."
        })
    
    with open(f'day{day}_3_intermediate.json', 'w', encoding='utf-8') as f:
        json.dump(words3, f, ensure_ascii=False, indent=2)
    
    # Part 4: Advanced (137-168, 900)
    data4 = df[(df['Day'] == day) & (df['No'] > 136)]
    words4 = []
    for _, row in data4.iterrows():
        words4.append({
            'day': int(row['Day']),
            'no': int(row['No']),
            'word': str(row['Word']),
            'meaning': str(row['Meaning']),
            'targetScore': 900,
            'exampleEn': f"Advanced: {row['Word']}.",
            'exampleKo': f"고급: {row['Meaning']}."
        })
    
    with open(f'day{day}_4_advanced.json', 'w', encoding='utf-8') as f:
        json.dump(words4, f, ensure_ascii=False, indent=2)
    
    print(f"Day {day} completed: {len(words1)} + {len(words2)} + {len(words3)} + {len(words4)} = {len(words1)+len(words2)+len(words3)+len(words4)} words")

print("All days (25-30) generated successfully!")
