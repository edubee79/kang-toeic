import pandas as pd
import json

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# TOEIC 스타일 예문 생성 함수
def generate_toeic_example(word, meaning, score_level):
    """TOEIC 스타일의 예문 생성"""
    # 간단한 템플릿 기반 예문 (실제로는 더 정교하게 작성 필요)
    if score_level == 650:
        en = f"The company will {word} the new policy."
        ko = f"회사는 새로운 정책을 {meaning}할 것입니다."
    elif score_level == 800:
        en = f"We need to {word} this matter carefully."
        ko = f"이 문제를 신중하게 {meaning}해야 합니다."
    else:  # 900
        en = f"The {word} approach is highly recommended."
        ko = f"{meaning} 접근법이 강력히 권장됩니다."
    
    return en, ko

# Day 27-30 생성
for day in range(27, 31):
    print(f"\\nGenerating Day {day}...")
    day_data = df[df['Day'] == day].copy()
    
    if len(day_data) == 0:
        print(f"No data for Day {day}")
        continue
    
    # Part 1: Headword (1-40, 650)
    part1 = day_data[day_data['No'] <= 40]
    # Part 2: Basic (41-68, 650)
    part2 = day_data[(day_data['No'] > 40) & (day_data['No'] <= 68)]
    # Part 3: Intermediate (69-136, 800)
    part3 = day_data[(day_data['No'] > 68) & (day_data['No'] <= 136)]
    # Part 4: Advanced (137-168, 900)
    part4 = day_data[day_data['No'] > 136]
    
    print(f"Part 1: {len(part1)}, Part 2: {len(part2)}, Part 3: {len(part3)}, Part 4: {len(part4)}")
    
    # 각 파트별로 저장 (실제 TOEIC 예문은 수동으로 작성 필요)
    for part_num, part_df, score in [(1, part1, 650), (2, part2, 650), (3, part3, 800), (4, part4, 900)]:
        words = []
        for _, row in part_df.iterrows():
            en_ex, ko_ex = generate_toeic_example(row['Word'], row['Meaning'], score)
            words.append({
                'day': int(row['Day']),
                'no': int(row['No']),
                'word': str(row['Word']),
                'meaning': str(row['Meaning']),
                'targetScore': score,
                'exampleEn': en_ex,
                'exampleKo': ko_ex
            })
        
        part_name = ['headword', 'basic', 'intermediate', 'advanced'][part_num-1]
        filename = f'day{day}_{part_num}_{part_name}.json'
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(words, f, ensure_ascii=False, indent=2)
        
        print(f"  {filename}: {len(words)} words")

print("\\n✅ Day 27-30 template files generated!")
print("⚠️  These are TEMPLATE examples - need manual TOEIC-quality rewriting!")
