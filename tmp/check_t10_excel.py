
import pandas as pd

excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
xl = pd.ExcelFile(excel_path)
# Test 10 is likely the last sheet
sheet_name = xl.sheet_names[9]
print(f"Sheet Name: {sheet_name}")
df = xl.parse(sheet_name)
print(df.iloc[20:30, :]) # Check some rows around 71
# 71 is 71-51 = 20 in the second column set?
# Wait, 51 is index 0. So 71 is index 20.
print("\n--- Rows 20-30 ---")
print(df.iloc[20:30, [2, 3]])
