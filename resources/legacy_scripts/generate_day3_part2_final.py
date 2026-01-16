import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 3 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 3) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

toeic_examples_d3p2 = {
    41: ("Please give me a sheet of paper.", "종이 한 장만 주세요."),
    42: ("Here is my business card.", "여기 제 명함입니다."),
    43: ("The printer cartridge needs to be replaced.", "프린터 잉크 카트리지를 교체해야 합니다."),
    44: ("The cafe is open daily from 9 AM to 6 PM.", "그 카페는 매일 오전 9시부터 오후 6시까지 엽니다."),
    45: ("Please edit the document before printing it.", "인쇄하기 전에 문서를 편집해 주세요."),
    46: ("Could you hand me that file?", "저 파일 좀 건네주시겠어요?"),
    47: ("Please fill out the form in order to register.", "등록하기 위해 양식을 작성해 주십시오."),
    48: ("He is working on his laptop.", "그는 노트북 컴퓨터로 작업하고 있습니다."),
    49: ("Please wear your name tag at the conference.", "컨퍼런스에서 명찰을 착용해 주십시오."),
    50: ("The manager is currently on vacation.", "매니저는 현재 휴가 중입니다."),
    51: ("There is a paper jam in the copier.", "복사기에 종이가 걸렸습니다."),
    52: ("I have a lot of paperwork to do today.", "저는 오늘 처리해야 할 문서 작업이 많습니다."),
    53: ("We installed partitions to create private workspaces.", "우리는 개인 작업 공간을 만들기 위해 칸막이를 설치했습니다."),
    54: ("Traffic is heavy during rush hour.", "출퇴근 혼잡 시간에는 교통이 혼잡합니다."),
    55: ("Please sit in the reserved section.", "예약된 구역에 앉아 주십시오."),
    56: ("Please change the bed sheet.", "침대 시트를 교체해 주세요."),
    57: ("Please clear the items off the tabletop.", "테이블 윗면에서 물건들을 치워 주세요."),
    58: ("I received a telephone call from the client.", "저는 고객으로부터 전화 통화를 받았습니다."),
    59: ("Please throw the paper in the trash bin.", "종이는 쓰레기통에 버려 주세요."),
    60: ("The conference room is upstairs.", "회의실은 위층에 있습니다."),
    61: ("He acts as if he knows everything.", "그는 마치 모든 것을 아는 것처럼 행동합니다."),
    62: ("She speaks French as well as English.", "그녀는 영어뿐만 아니라 프랑스어도 할 줄 압니다."),
    63: ("Please be aware of the safety regulations.", "안전 규정을 유념해 주십시오(알고 계십시오)."),
    64: ("He is known as an expert in this field.", "그는 이 분야의 전문가로 알려져 있습니다."),
    65: ("It is likely to rain tomorrow.", "내일은 비가 올 가능성이 있습니다."),
    66: ("Please provide me with the details of the contract.", "계약의 세부 사항을 저에게 알려주세요."),
    67: ("This is the latest offering from our company.", "이것은 우리 회사의 최신 제품(제공된 것)입니다."),
    68: ("I prefer to work on my own.", "저는 혼자사 일하는 것을 선호합니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d3p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day3_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 3 Part 2 Created.")
