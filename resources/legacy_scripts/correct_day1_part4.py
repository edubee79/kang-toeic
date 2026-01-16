import pandas as pd
import json

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 1 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 1) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

# Correctly matched examples for actual words in CSV (No. 137-168)
toeic_examples_p4_corrected = {
    137: ("Her teaching credentials are impressive.", "그녀의 교육 자격 증명은 인상적입니다."),
    138: ("I have firsthand experience with this software.", "나는 이 소프트웨어에 대한 직접적인 경험이 있습니다."),
    139: ("The hiring committee will make a decision soon.", "고용 위원회가 곧 결정을 내릴 것입니다."),
    140: ("He speaks French and German, not to mention English.", "그는 영어는 말할 것도 없고, 프랑스어와 독일어도 구사합니다."),
    141: ("We meet on occasion to discuss progress.", "우리는 진척 상황을 논의하기 위해 가끔 만납니다."),
    142: ("He was rejected for being overqualified for the entry-level job.", "그는 신입 사원 직책에 비해 필요 이상으로 고학력이라 거절당했습니다."),
    143: ("The screening process acts as a filter for candidates.", "심사 과정은 후보자들을 걸러내는 필터 역할을 합니다."),
    144: ("Production creates a lag in delivery time.", "생산 과정이 배송 시간에 지연을 초래합니다."),
    145: ("Please put my name on the waiting list.", "대기자 명단에 제 이름을 올려주세요."),
    146: ("We are looking for a detail-oriented person.", "우리는 꼼꼼한 성격의 사람을 찾고 있습니다."),
    147: ("Please review all documents pertaining to the lawsuit.", "소송과 관련된 모든 문서를 검토해 주십시오."),
    148: ("The decision was questionably legal.", "그 결정은 합법적인지 의심스러웠습니다."),
    149: ("The meetings are held with regularity.", "회의는 정기적으로 열립니다."),
    150: ("We need to replenish our stock of paper.", "우리는 종이 재고를 보충해야 합니다."),
    151: ("For the sake of simplicity, let's use the first method.", "간단하게 하기 위해, 첫 번째 방법을 사용합시다."),
    152: ("She has a stellar reputation in the industry.", "그녀는 업계에서 뛰어난 평판을 가지고 있습니다."),
    153: ("This tool is versatile and easy to use.", "이 도구는 다재다능하고 사용하기 쉽습니다."),
    154: ("She is adept at handling difficult customers.", "그녀는 까다로운 고객을 다루는 데 능숙합니다."),
    155: ("Against all odds, he succeeded in his business.", "모든 역경을 딛고, 그는 사업에 성공했습니다."),
    156: ("She has a good command of Japanese.", "그녀는 일본어 구사력이 좋습니다."),
    157: ("Salary will be commensurate with experience.", "급여는 경력에 비례할 것입니다."),
    158: ("All employees must be computer literate.", "모든 직원은 컴퓨터를 다룰 줄 알아야 합니다."),
    159: ("His eagerness to learn impressed the manager.", "배우려는 그의 열의가 매니저에게 깊은 인상을 주었습니다."),
    160: ("Please familiarize yourself with the safety regulations.", "안전 규정을 숙지해 주십시오."),
    161: ("Employees receive a salary increment every year.", "직원들은 매년 임금 인상을 받습니다."),
    162: ("Strong interpersonal skills are essential for this role.", "이 역할에는 강력한 대인 관계 기술이 필수적입니다."),
    163: ("We should be mindful of the budget.", "우리는 예산에 유념해야 합니다."),
    164: ("He is the preeminent expert in his field.", "그는 자신의 분야에서 독보적인 전문가입니다."),
    165: ("Preliminary results show a positive trend.", "예비 결과는 긍정적인 추세를 보여줍니다."),
    166: ("A bachelor's degree is a prerequisite for this course.", "학사 학위는 이 과정의 필수 조건입니다."),
    167: ("The probationer is learning the ropes.", "수습 직원이 요령을 배우고 있습니다."),
    168: ("The manager spoke sternly to the late employees.", "매니저는 지각한 직원들에게 엄격하게 말했습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    ex_en, ex_ko = toeic_examples_p4_corrected.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day1_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 1 Part 4 Corrected.")
