import pandas as pd
import re
import os

def get_excel_answers(test_id):
    file_path = r'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
    sheet_name = f'{test_id}회'
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    answers = {}
    # Expected columns are No. and Answer
    for i, row in df.iterrows():
        try:
            q_no = int(row['No.'])
            ans = str(row['Answer']).strip().upper()
            if ans in ['A', 'B', 'C', 'D']:
                answers[q_no] = ans
        except:
            continue
    return answers

def get_code_answers(test_id):
    answers = {}
    base_path = r'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/toeic/v3/listening'
    for part in [1, 2, 3, 4]:
        file_path_choices = [
            os.path.join(base_path, f'part{part}', f'v3_p{part}_t{test_id:02d}.ts'),
            os.path.join(base_path, f'part{part}', f'v3_p{part}_t{test_id}.ts'),
            os.path.join(base_path, f'part{part}', f'v3_p{part}_t0{test_id}.ts')
        ]
        
        target_file = None
        for p in file_path_choices:
            if os.path.exists(p):
                target_file = p
                break
        
        if target_file:
            with open(target_file, 'r', encoding='utf-8') as f:
                content = f.read()
                items = re.split(r'id:\s*["\']', content)
                for item in items[1:]:
                    q_match = re.search(r'q(\d+)', item)
                    if q_match:
                        q_no = int(q_match.group(1))
                        ans_match = re.search(r'correctAnswer:\s*["\']([ABCD])["\']', item)
                        if ans_match:
                            answers[q_no] = ans_match.group(1)
    return answers

test_id = 6
excel_ans = get_excel_answers(test_id)
code_ans = get_code_answers(test_id)

mismatches = []
for q_no in range(1, 101):
    ex = excel_ans.get(q_no)
    co = code_ans.get(q_no)
    if ex and co:
        if ex != co:
            mismatches.append(f"Q{q_no}: Excel({ex}) vs Code({co})")
    elif not co and q_no in excel_ans:
        mismatches.append(f"Q{q_no}: Missing in code")

if not mismatches:
    print("All match!")
else:
    for m in mismatches:
        print(m)
