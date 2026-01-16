import pandas as pd
import math

input_file = 'hackers_vocab_raw.csv'
output_file = 'hackers_vocab_final.csv'

def classify_vocab():
    print("Reading raw data...")
    # Raw 데이터를 읽습니다. (헤더가 0,1,2... 형태)
    try:
        df = pd.read_csv(input_file)
    except:
        df = pd.read_csv(input_file, header=None)

    # 전체 행 수 확인
    total_rows = len(df)
    print(f"Total raw rows: {total_rows}")
    
    # 58행이 1개 Day (사용자 파일 구조 분석 결과)
    rows_per_day = 58
    
    classified_data = []
    
    # 데이터 순회
    for i in range(total_rows):
        # 현재 Day 계산 (0부터 시작하므로 +1)
        current_day = (i // rows_per_day) + 1
        
        row = df.iloc[i]
        
        # 한 행에 3개의 단어 그룹이 있음 (Left, Center, Right)
        # 각 그룹: [No, Word, Meaning]
        # 인덱스: Left(0,1,2), Center(3,4,5), Right(6,7,8)
        
        groups = [
            (row.iloc[0], row.iloc[1], row.iloc[2]), # Left
            (row.iloc[3], row.iloc[4], row.iloc[5]), # Center
            (row.iloc[6], row.iloc[7], row.iloc[8])  # Right
        ]
        
        for no_val, word, meaning in groups:
            # 유효성 검사: Word가 비어있거나 No가 숫자가 아니면 스킵
            if pd.isna(word) or pd.isna(no_val):
                continue
                
            try:
                no = float(no_val)
            except:
                continue
                
            # 번호가 168을 넘으면 데이터 아님 (비고/메모 등)
            if no > 168:
                continue
                
            # 분류 로직 (User Rule)
            target = 0
            detail_type = ""
            priority = 0
            
            if 1 <= no <= 40:
                target = 650
                detail_type = "Headword_650"
                priority = 1
            elif 41 <= no <= 68:
                target = 650
                detail_type = "Basic_LCRC_650"
                priority = 2
            elif 69 <= no <= 136:
                target = 800
                detail_type = "Intermediate_800"
                priority = 3
            elif 137 <= no <= 168:
                target = 900
                detail_type = "Advanced_900"
                priority = 4
            else:
                detail_type = "Extra"
                target = 0
            
            if target > 0:
                classified_data.append({
                    'Day': current_day,
                    'No': int(no),
                    'Word': str(word).strip(),
                    'Meaning': str(meaning).strip(),
                    'Target_Score': target,
                    'Priority': priority, # 앱 내 정렬용
                    'Source_Type': detail_type
                })

    # DataFrame 생성 및 정렬
    final_df = pd.DataFrame(classified_data)
    
    # Day순, No순 정렬
    final_df = final_df.sort_values(by=['Day', 'No'])
    
    print(f"Total classified words: {len(final_df)}")
    print("Sample data:")
    print(final_df.head(10))
    
    # 저장
    final_df.to_csv(output_file, index=False, encoding='utf-8-sig')
    print(f"Successfully saved to {output_file}")

if __name__ == "__main__":
    classify_vocab()
