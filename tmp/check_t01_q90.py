
import pandas as pd

excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
xl = pd.ExcelFile(excel_path)
sheet_name = xl.sheet_names[0] # Test 1
df = xl.parse(sheet_name)
print(f"--- Publisher Answer (Excel) Test 1 ---")
# Q90 is in columns 2 and 3
# Index for Q1 is 0, so Q90 is index 39 in columns 2,3 (since 51 is index 0)
# Q90 = 90 - 51 = 39
print(df.iloc[39, [2, 3]])
