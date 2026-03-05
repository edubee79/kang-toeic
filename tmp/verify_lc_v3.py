
import pandas as pd
import json
import os
import re

# 1. Extract Publisher Answers from Excel
excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
publisher_answers = {}

try:
    xl = pd.ExcelFile(excel_path)
    for i, sheet_name in enumerate(xl.sheet_names):
        test_id = i + 1
        test_key = f"Test_{test_id:02d}"
        df = xl.parse(sheet_name)
        
        test_answers = {}
        # Items 1-50 are in columns 0 and 1
        for idx, row in df.iterrows():
            if pd.notna(row[0]) and pd.notna(row[1]):
                test_answers[int(row[0])] = str(row[1]).strip().upper()
        # Items 51-100 are in columns 2 and 3
        for idx, row in df.iterrows():
            if pd.notna(row[2]) and pd.notna(row[3]):
                test_answers[int(row[2])] = str(row[3]).strip().upper()
        
        publisher_answers[test_key] = test_answers

except Exception as e:
    print(f"Error reading publisher Excel: {e}")

# 2. Extract Project Answers from Source Code
project_answers = {}

def get_answers_from_file(file_path):
    answers = {}
    if not os.path.exists(file_path):
        return answers
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # More robust regex to handle quoted/unquoted keys and flexible test IDs (e.g., t6 vs t06)
        # Using [A-D] only might be too strict if there's whitespace.
        # Let's search for id blocks and then find correctAnswer within them.
        
        # Split into blocks of questions roughly
        # Each question typically looks like: { "id": "...", "correctAnswer": "..." }
        # Let's find all id strings
        matches = re.findall(r'"?id"?:\s*"v3-p\d-t\d+-q(\d+)".*?"?correctAnswer"?:\s*"([A-D])"', content, re.DOTALL)
        for q_num, ans in matches:
            answers[int(q_num)] = ans
    return answers

for t in range(1, 11):
    test_key = f"Test_{t:02d}"
    combined_answers = {}
    
    # Part 1 (1-6)
    p1_file = f'src/data/toeic/v3/listening/part1/v3_p1_t{t:02d}.ts'
    combined_answers.update(get_answers_from_file(p1_file))
    
    # Part 2 (7-31)
    p2_file = f'src/data/toeic/v3/listening/part2/v3_p2_t{t:02d}.ts'
    combined_answers.update(get_answers_from_file(p2_file))
    
    # Part 3 (32-70)
    p3_file = f'src/data/toeic/v3/listening/part3/v3_p3_t{t:02d}.ts'
    combined_answers.update(get_answers_from_file(p3_file))
    
    # Part 4 (71-100)
    p4_file = f'src/data/toeic/v3/listening/part4/v3_p4_t{t:02d}.ts'
    combined_answers.update(get_answers_from_file(p4_file))
    
    project_answers[test_key] = combined_answers

# 3. Compare and Report
report = []
report.append("# LC Volume 3 검증 보고서 (출판사 정답 vs 소스코드)")
report.append(f"일시: {pd.Timestamp.now()}\n")

total_mismatches = 0
total_questions = 0

for t in range(1, 11):
    test_key = f"Test_{t:02d}"
    p_ans = publisher_answers.get(test_key, {})
    s_ans = project_answers.get(test_key, {})
    
    mismatches = []
    missing_in_source = []
    
    for q in range(1, 101):
        total_questions += 1
        pa = p_ans.get(q)
        sa = s_ans.get(q)
        
        if sa is None:
            missing_in_source.append(f"Q{q:03d} (Not found in source)")
            total_mismatches += 1
        elif pa != sa:
            mismatches.append(f"Q{q:03d}: [Publisher] {pa} vs [Source] {sa}")
            total_mismatches += 1
            
    if mismatches or missing_in_source:
        report.append(f"## {test_key} - ❌ 오류 발견 ({len(mismatches) + len(missing_in_source)}건)")
        if mismatches:
            report.append("### 불일치 문항")
            for m in mismatches:
                report.append(f"- {m}")
        if missing_in_source:
            report.append("### 소스 코드 누락 문항")
            for m in missing_in_source:
                report.append(f"- {m}")
    else:
        report.append(f"## {test_key} - ✅ 정상")

report.append(f"\n---")
report.append(f"**총 검증 문항: {total_questions}**")
report.append(f"**총 불일치/누락: {total_mismatches}**")

if total_mismatches == 0:
    report.append("\n🎉 모든 정답이 완벽하게 일치합니다!")

with open('tmp/lc_verification_report.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(report))

print(f"Verification complete. Total mismatches: {total_mismatches}")
