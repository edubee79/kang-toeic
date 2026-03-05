
import pandas as pd
import json
import os

file_path = 'toeic-data/ETS정기기출3탄/ETS_1000_3_LC_Answers.xlsx'

try:
    # Read the excel file
    # We might need to handle multiple sheets if each test is in a different sheet
    xl = pd.ExcelFile(file_path)
    print(f"Sheets: {xl.sheet_names}")
    
    all_data = {}
    for sheet_name in xl.sheet_names:
        df = xl.parse(sheet_name)
        # Display first few rows to understand structure
        print(f"\n--- Sheet: {sheet_name} ---")
        print(df.head(10))
        all_data[sheet_name] = df.to_dict(orient='records')

except Exception as e:
    print(f"Error reading Excel: {e}")
