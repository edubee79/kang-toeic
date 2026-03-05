
import pandas as pd
import re
import os

excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
xl = pd.ExcelFile(excel_path)
df = xl.parse(xl.sheet_names[0]) # Test 1

official = {}
for i in range(50):
    official[int(df.iloc[i, 0])] = df.iloc[i, 1]
    official[int(df.iloc[i, 2])] = df.iloc[i, 3]

# Files for Test 1
files = [
    'src/data/toeic/v3/listening/part1/v3_p1_t01.ts',
    'src/data/toeic/v3/listening/part2/v3_p2_t01.ts',
    'src/data/toeic/v3/listening/part3/v3_p3_t01.ts',
    'src/data/toeic/v3/listening/part4/v3_p4_t01.ts'
]

results = []
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Regex to find correctAnswer
        # We need the question number from ID to match official answers.
        # IDs are like "v3-pX-t01-qXXXX" or similar.
        # v3_p1_t01.ts: "v3-p1-t01-q1", 2, 3, 4, 5, 6.
        # v3_p2_t01.ts: "v3-p2-t01-q7", ... q31.
        # v3_p3_t01.ts: "v3-p3-t01-q32", ... q70.
        # v3_p4_t01.ts: "v3-p4-t1-q71", ... q100. (Note: t1 vs t01)
        
        # Using a regex to find all correctAnswer and find the nearby q number.
        # For Part 4, id: "v3-p4-t1-q71"
        matches = re.finditer(r'id:\s*["\']v3-p\d-t\d+-q(\d+)["\'].*?correctAnswer:\s*["\']([ABCD])["\']', content, re.DOTALL)
        for m in matches:
            q_num = int(m.group(1))
            code_ans = m.group(2)
            official_ans = official.get(q_num)
            
            if code_ans != official_ans:
                results.append((q_num, code_ans, official_ans, file))

# Some Part 1 IDs might be "v3-p1-t10-q1" but in T01 they should be "v3-p1-t01-q1"
# Let's adjust regex if needed.
# The previous match might missed if quotes or formatting is different.

for r in results:
    print(f"Question {r[0]}: Code={r[1]}, Official={r[2]}, File={r[3]}")
