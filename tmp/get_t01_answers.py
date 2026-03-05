
import pandas as pd

excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
xl = pd.ExcelFile(excel_path)
df = xl.parse(xl.sheet_names[0]) # Test 1

all_answers = {}

# Questions 1-50
for i in range(50):
    q_num = int(df.iloc[i, 0])
    ans = df.iloc[i, 1]
    all_answers[q_num] = ans

# Questions 51-100
for i in range(50):
    q_num = int(df.iloc[i, 2])
    ans = df.iloc[i, 3]
    all_answers[q_num] = ans

print(all_answers)
