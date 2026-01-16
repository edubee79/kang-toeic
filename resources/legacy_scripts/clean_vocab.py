import pandas as pd

input_file = 'hackers_vocab_raw.csv'
output_file = 'hackers_vocab_clean.csv'

def clean_data():
    try:
        # 헤더 없이 읽어서 컬럼 인덱스로 접근
        df = pd.read_csv(input_file)
        
        print(f"Raw data shape: {df.shape}")
        
        # 3개의 그룹으로 분리하여 추출
        # Group 1: col 1, 2 (index 1, 2)
        # Group 2: col 4, 5 (index 4, 5)
        # Group 3: col 7, 8 (index 7, 8)
        
        # 컬럼 이름이 0,1,2..로 되어있으므로 iloc 사용
        g1 = df.iloc[:, [1, 2]].copy()
        g1.columns = ['Word', 'Meaning']
        
        g2 = df.iloc[:, [4, 5]].copy()
        g2.columns = ['Word', 'Meaning']
        
        g3 = df.iloc[:, [7, 8]].copy()
        g3.columns = ['Word', 'Meaning']
        
        # 위아래로 합치기
        combined = pd.concat([g1, g2, g3], axis=0)
        
        # 결측치 제거 (Word나 Meaning이 없는 행)
        combined = combined.dropna(subset=['Word', 'Meaning'])
        
        # 이상한 데이터 제거 (Word가 'Word'이거나 숫자인 경우 등)
        # 엑셀 헤더 등이 섞여있을 수 있음
        combined = combined[combined['Word'].str.contains(r'[a-zA-Z]', na=False)] # 영어가 포함된 것만
        
        # 중복 제거
        combined = combined.drop_duplicates(subset=['Word'])
        
        # 정렬
        combined = combined.sort_values(by='Word')
        
        print(f"Cleaned data shape: {combined.shape}")
        print("Sample data:")
        print(combined.head())
        
        combined.to_csv(output_file, index=False, encoding='utf-8-sig')
        print(f"Successfully saved to {output_file}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    clean_data()
