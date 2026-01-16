import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 6 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 6) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 6 Part 1)
# Theme: Culture, Events, Media, General Society
toeic_examples_d6p1 = {
    1: ("Please use the break room to rest during your shift.", "근무 시간 중에는 휴게실을 이용하여 휴식을 취하십시오."),
    2: ("The art exhibition will be held at the city museum.", "미술 전시회는 시립 박물관에서 열릴 것입니다."),
    3: ("A famous celebrity will attend the charity event.", "유명 인사가 자선 행사에 참석할 것입니다."),
    4: ("The concert will be broadcast live on television.", "그 콘서트는 텔레비전에서 생방송될 것입니다."),
    5: ("He had to improvise a speech when the projector failed.", "그는 프로젝터가 고장 났을 때 연설을 즉흥적으로 해야 했습니다."),
    6: ("The new restaurant is very popular among locals.", "새 식당은 지역 주민들 사이에서 매우 인기가 있습니다."),
    7: ("We would like to thank you for your generous donation.", "귀하의 관대한 기부에 감사드리고 싶습니다."),
    8: ("The university is engaging with its alumni network.", "그 대학은 동창회(졸업생) 네트워크와 교류하고 있습니다."),
    9: ("You must present a valid ID to enter the building.", "건물에 들어가려면 유효한 신분증을 제시해야 합니다."),
    10: ("Admission to the museum is free for children.", "박물관 입장은 어린이들에게 무료입니다."),
    11: ("The annual awards banquet will take place next Friday.", "연례 시상식 연회는 다음 주 금요일에 열릴 것입니다."),
    12: ("we are celebrating our 10th anniversary this year.", "우리는 올해 10주년을 기념하고 있습니다."),
    13: ("Safety training is required for all new employees.", "안전 교육은 모든 신입 사원들에게 필수입니다."),
    14: ("Ms. Lee will succeed Mr. Park as the new director.", "이 씨가 박 씨의 뒤를 이어 새 이사가 될 것입니다."),
    15: ("The museum has an impressive collection of ancient artifacts.", "그 박물관은 인상적인 고대 유물 소장품을 가지고 있습니다."),
    16: ("The charity is holding a fund-raising event for the hospital.", "그 자선 단체는 병원을 위한 모금 행사를 열고 있습니다."),
    17: ("Production will resume after the maintenance is completed.", "유지 보수가 완료된 후 생산이 재개될 것입니다."),
    18: ("The latest issue of the magazine features an interview with the CEO.", "잡지의 최신호는 CEO와의 인터뷰를 다루고 있습니다."),
    19: ("I would like to renew my subscription to the newsletter.", "뉴스레터 구독을 갱신하고 싶습니다."),
    20: ("The error appears to be caused by a software glitch.", "그 오류는 소프트웨어 결함으로 인해 나타난(발생한) 것으로 보입니다."),
    21: ("Children must be accompanied by an adult.", "어린이는 성인을 동반해야 합니다."),
    22: ("This is a limited edition of the book.", "이것은 그 책의 한정판입니다."),
    23: ("The instructions are specifically designed for beginners.", "그 지침들은 명확하게(특별히) 초보자들을 위해 설계되었습니다."),
    24: ("The donor wishes to remain anonymous.", "그 기부자는 익명으로 남기를 원합니다."),
    25: ("The company is committed to providing excellent service.", "그 회사는 훌륭한 서비스를 제공하는 데 전념하고 있습니다."),
    26: ("The seminar was very informative and helpful.", "그 세미나는 매우 유익하고 도움이 되었습니다."),
    27: ("The audience applauded enthusiastically after the performance.", "공연 후 청중들은 열광적으로 박수를 보냈습니다."),
    28: ("The author will be signing books at the library.", "그 작가는 도서관에서 책 사인회를 할 것입니다."),
    29: ("Please note that the schedule is subject to change.", "일정이 변경될 수 있음을 주목해(유의해) 주십시오."),
    30: ("This shop specializes in selling antique furniture.", "이 가게는 골동품 가구를 파는 것을 전문으로 합니다."),
    31: ("The editor is reviewing the manuscript for publication.", "편집자는 출판을 위해 원고를 검토하고 있습니다."),
    32: ("Exercise is beneficial for your health.", "운동은 당신의 건강에 유익합니다."),
    33: ("We are preparing for the upcoming conference.", "우리는 다가오는 회의를 준비하고 있습니다."),
    34: ("The library lends books for a period of two weeks.", "도서관은 2주 동안 책을 빌려줍니다."),
    35: ("The current economic situation is unstable.", "현재의 경제 상황은 불안정합니다."),
    36: ("We source our ingredients from local farmers.", "우리는 지역 농부들로부터 재료를 공급받습니다."),
    37: ("The store offers a wide variety of products.", "그 상점은 다양한 종류의 제품을 제공합니다."),
    38: ("She is a strong advocate for environmental protection.", "그녀는 환경 보호의 강력한 옹호자입니다."),
    39: ("He is a regular contributor to the magazine.", "그는 그 잡지의 정기 기고가입니다."),
    40: ("The result defied all expectations.", "그 결과는 모든 예상을 뒤엎었습니다(저항했습니다).")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d6p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day6_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 6 Part 1 Created.")
