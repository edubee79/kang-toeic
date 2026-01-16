import pandas as pd
import json

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# Day 29 데이터 추출
day29 = df[df['Day'] == 29].copy()

print(f"=== Day 29 CSV 원본 데이터 ===")
print(f"총 단어 수: {len(day29)}")
print(f"\n첫 10개 단어:")
for idx, row in day29.head(10).iterrows():
    print(f"{row['No']:3d}. {row['Word']:20s} - {row['Meaning']}")

print(f"\n마지막 10개 단어:")
for idx, row in day29.tail(10).iterrows():
    print(f"{row['No']:3d}. {row['Word']:20s} - {row['Meaning']}")

# JSON 파일 확인
print(f"\n\n=== Day 29 JSON 파일 데이터 ===")
for part_num, part_name in [(1, 'headword'), (2, 'basic'), (3, 'intermediate'), (4, 'advanced')]:
    filename = f'day29_{part_num}_{part_name}.json'
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"\n{filename}: {len(data)} words")
        print(f"  범위: No. {data[0]['no']} ~ {data[-1]['no']}")
        print(f"  첫 단어: {data[0]['word']} - {data[0]['meaning']}")
        print(f"  마지막: {data[-1]['word']} - {data[-1]['meaning']}")
    except FileNotFoundError:
        print(f"\n{filename}: 파일 없음")

# 비교 검증
print(f"\n\n=== 데이터 일치 여부 확인 ===")
for part_num, part_name, start, end in [
    (1, 'headword', 1, 40),
    (2, 'basic', 41, 68),
    (3, 'intermediate', 69, 136),
    (4, 'advanced', 137, 168)
]:
    filename = f'day29_{part_num}_{part_name}.json'
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
        
        csv_part = day29[(day29['No'] >= start) & (day29['No'] <= end)]
        
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
                if csv_row['Word'] != json_word['word']:
                    mismatches.append(f"    No.{csv_row['No']}: CSV='{csv_row['Word']}' vs JSON='{json_word['word']}'")
        
        if mismatches:
            print(f"  ❌ 단어 불일치 발견:")
            for m in mismatches[:5]:  # 처음 5개만 표시
                print(m)
        else:
            print(f"  ✅ 모든 단어 일치")
            
    except FileNotFoundError:
        print(f"\n{part_name.upper()}: 파일 없음")
