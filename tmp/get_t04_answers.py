import pandas as pd
import json

file_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
df = pd.read_excel(file_path, sheet_name='4회', header=None)

# Standard format: Question numbers are in columns 0, 2, 4... and answers in 1, 3, 5...
# Let's just collect all digit-like keys and their values
answers = {}
for r in range(len(df)):
    for c in range(0, df.shape[1], 2):
        q_val = df.iloc[r, c]
        a_val = df.iloc[r, c+1] if c+1 < df.shape[1] else None
        
        try:
            q_num = int(q_val)
            if pd.notna(a_val):
                answers[q_num] = str(a_val).strip()
        except (ValueError, TypeError):
            continue

sorted_answers = {k: answers[k] for k in sorted(answers.keys())}
print(json.dumps(sorted_answers, indent=2))
