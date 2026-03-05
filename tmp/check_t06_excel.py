
import pandas as pd

excel_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'
xl = pd.ExcelFile(excel_path)
sheet_name = xl.sheet_names[5] # Test 6
print(f"Sheet Name: {sheet_name}")
df = xl.parse(sheet_name)
print(df.iloc[20:30, [2, 3]]) # Q71-80
