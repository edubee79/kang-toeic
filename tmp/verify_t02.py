
import pandas as pd
import re
import os

excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
xl = pd.ExcelFile(excel_path)
df = xl.parse(xl.sheet_names[1]) # Test 2

official = {}
for i in range(50):
    official[int(df.iloc[i, 0])] = df.iloc[i, 1]
    official[int(df.iloc[i, 2])] = df.iloc[i, 3]

# Files for Test 2
files = [
    'src/data/toeic/v3/listening/part1/v3_p1_t02.ts',
    'src/data/toeic/v3/listening/part2/v3_p2_t02.ts',
    'src/data/toeic/v3/listening/part3/v3_p3_t02.ts',
    'src/data/toeic/v3/listening/part4/v3_p4_t02.ts'
]

results = []
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.finditer(r'id:\s*["\']v3-p\d-t\d+-q(\d+)["\'].*?correctAnswer:\s*["\']([ABCD])["\']', content, re.DOTALL)
        for m in matches:
            q_num = int(m.group(1))
            code_ans = m.group(2)
            official_ans = official.get(q_num)
            if code_ans != official_ans:
                results.append((q_num, code_ans, official_ans, file))

if not results:
    print("Test 2: All answers match.")
else:
    for r in results:
        print(f"Question {r[0]}: Code={r[1]}, Official={r[2]}, File={r[3]}")
