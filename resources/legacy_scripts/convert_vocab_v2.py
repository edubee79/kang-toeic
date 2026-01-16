import pandas as pd
import os

# 파일 경로 설정
input_file = '토익노랭이 단어장 엑셀정리.xlsx'
output_file = 'hackers_vocab_2024.csv'

def convert_excel_to_csv():
    if not os.path.exists(input_file):
        print(f"Error: Could not find {input_file}")
        return

    df = None
    
    # 전략 1: openpyxl 사용 (xlsx 기본)
    try:
        print(f"Attempting to read all sheets with openpyxl...")
        # sheet_name=None이면 모든 시트를 dict 형태로 반환 {'Sheet1': df1, ...}
        sheets_dict = pd.read_excel(input_file, header=None, engine='openpyxl', sheet_name=None)
        
        # 모든 시트의 데이터프레임을 하나로 합치기
        df_list = []
        for sheet_name, sheet_df in sheets_dict.items():
            print(f"Reading sheet: {sheet_name} with shape {sheet_df.shape}")
            df_list.append(sheet_df)
            
        if df_list:
            df = pd.concat(df_list, ignore_index=True)
            
    except Exception as e:
        print(f"Failed with openpyxl: {e}")
        
    # 전략 2: xlrd 사용 (xls인 경우)
    if df is None:
        try:
            print(f"Attempting to read with xlrd...")
            df = pd.read_excel(input_file, header=None, engine='xlrd')
        except Exception as e:
            print(f"Failed with xlrd: {e}")

    if df is not None:
        print("\nOriginal Data Sample (First 5 rows):")
        print(df.head())
        
        # 컬럼 확인 및 이름 부여
        num_cols = len(df.columns)
        print(f"\nNumber of columns found: {num_cols}")
        
        # 보통 [단어, 뜻] 또는 [Day, 단어, 뜻] 등의 구조임
        # 샘플을 보고 판단하기 위해 일단 Raw 저장
        
        output_raw = 'hackers_vocab_raw.csv'
        df.to_csv(output_raw, index=False, encoding='utf-8-sig')
        print(f"\nSuccessfully converted to {output_raw}")
        print(f"Total rows: {len(df)}")
    else:
        print("Error: Failed to read the Excel file.")

if __name__ == "__main__":
    convert_excel_to_csv()
