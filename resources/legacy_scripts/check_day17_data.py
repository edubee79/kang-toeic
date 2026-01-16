import pandas as pd
import json
import os

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# Day 17 데이터 추출
day17 = df[df['Day'] == 17].copy()

print(f"=== Day 17 CSV 원본 데이터 ===")
print(f"총 단어 수: {len(day17)}")
print(f"\n첫 10개 단어:")
for idx, row in day17.head(10).iterrows():
    print(f"{row['No']:3d}. {row['Word']:20s} - {row['Meaning']}")

# JSON 파일 확인
print(f"\n\n=== Day 17 JSON 파일 존재 여부 ===")
for part_num, part_name in [(1, 'headword'), (2, 'basic'), (3, 'intermediate'), (4, 'advanced')]:
    filename = f'day17_{part_num}_{part_name}.json'
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"{filename}: ✅ 존재 ({len(data)} words)")
        print(f"  첫 3개: {data[0]['word']}, {data[1]['word']}, {data[2]['word']}")
    else:
        print(f"{filename}: ❌ 없음")

# 비교 검증
print(f"\n\n=== 데이터 일치 여부 확인 ===")
for part_num, part_name, start, end in [
    (1, 'headword', 1, 40),
    (2, 'basic', 41, 68),
    (3, 'intermediate', 69, 136),
    (4, 'advanced', 137, 168)
]:
    filename = f'day17_{part_num}_{part_name}.json'
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
        
        csv_part = day17[(day17['No'] >= start) & (day17['No'] <= end)]
        
        print(f"\n{part_name.upper()} (No. {start}-{end}):")
        print(f"  CSV: {len(csv_part)} words")
        print(f"  JSON: {len(json_data)} words")
        
        if len(csv_part) != len(json_data):
            print(f"  ❌ 단어 수 불일치!")
        else:
            print(f"  ✅ 단어 수 일치")
            
        # 단어 비교
        mismatches = []
        for i, (idx, csv_row) in enumerate(csv_part.iterrows()):
            if i < len(json_data):
                json_word = json_data[i]
                if csv_row['Word'].lower() != json_word['word'].lower():
                    mismatches.append(f"    No.{csv_row['No']}: CSV='{csv_row['Word']}' vs JSON='{json_word['word']}'")
        
        if mismatches:
            print(f"  ❌ 단어 불일치 발견 ({len(mismatches)}개):")
            for m in mismatches[:5]:
                print(m)
        else:
            print(f"  ✅ 모든 단어 일치")
    else:
        print(f"\n{part_name.upper()}: 파일 없음")
