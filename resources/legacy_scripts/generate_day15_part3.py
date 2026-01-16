import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 15 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 15) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 15 Part 3: Intermediate - Agreements, Legal & General Business)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Part 3/4/7 Contexts)
toeic_examples_d15p3 = {
    69: ("The volume of trade has increased.", "무역량(부피)이 증가했습니다."),
    70: ("We hope to close a deal by Friday.", "우리는 금요일까지 계약을 체결하기를(거래를 성사시키기를) 희망합니다."),
    71: ("New regulations complicate the process.", "새로운 규정들이 그 과정을 복잡하게 만듭니다."),
    72: ("Dial a number to reach the operator.", "교환원에게 연결하려면 번호를 돌리십시오(누르십시오)."),
    73: ("The high cost is a major disadvantage.", "높은 비용은 주요한 불리한 점(약점)입니다."),
    74: ("We need to focus on customer satisfaction.", "우리는 고객 만족에 집중해야 합니다."),
    75: ("I haven't seen him for ages.", "저는 그를 오랫동안 보지 못했습니다."),
    76: ("This brand is a household name.", "이 브랜드는 누구나 아는 이름(가정의 이름)입니다."),
    77: ("I have no idea where she went.", "그녀가 어디로 갔는지 저는 전혀 모릅니다."),
    78: ("Make sure to lock up the office.", "사무실을 확실히 잠그십시오."),
    79: ("I need to make a deposit today.", "저는 오늘 예금을 해야 합니다."),
    80: ("Do not make a mistake on the form.", "양식에 실수를 하지 마십시오."),
    81: ("Sales reached a peak in December.", "매출이 12월에 정점(최고점)에 도달했습니다."),
    82: ("Can I get a rain check on that offer?", "그 제안에 대해 다음 기회로 미룰 수 있을까요(우천 교환권을 받을 수 있을까요)?"),
    83: ("We rent out equipment for events.", "우리는 행사를 위해 장비를 임대합니다."),
    84: ("Please sign the rental agreement.", "임대 계약서에 서명해 주십시오."),
    85: ("The road surface is very rough.", "도로 표면이 매우 거칩니다."),
    86: ("The author receives a royalty on every book sold.", "작가는 판매되는 모든 책에 대해 인세(사용료)를 받습니다."),
    87: ("The cracks run in several directions.", "균열이 여러 방향으로 뻗어 있습니다."),
    88: ("The loud noise scared me.", "큰 소음이 저를 겁주었습니다(놀라게 했습니다)."),
    89: ("We are ready to sign a contract.", "우리는 계약서에 서명할 준비가 되었습니다."),
    90: ("We are under a contract with the supplier.", "우리는 그 공급업체와 계약 하에 있습니다."),
    91: ("We worked hard to win a contract.", "우리는 계약을 따내기 위해 열심히 일했습니다."),
    92: ("We reached an agreeable solution.", "우리는 기꺼이 동의하는(만족스러운) 해결책에 도달했습니다."),
    93: ("Please call out the names on the list.", "목록에 있는 이름들을 불러 주십시오."),
    94: ("He gave a convincing presentation.", "그는 설득력 있는 발표를 했습니다."),
    95: ("The problem requires a diplomatic solution.", "그 문제는 외교적인 해결책을 필요로 합니다."),
    96: ("We strive for equality in the workplace.", "우리는 직장에서의 평등을 위해 노력합니다."),
    97: ("The company follows ethical business practices.", "그 회사는 윤리적인 경영 관행을 따릅니다."),
    98: ("Do not hesitate to contact us.", "주저하지 말고(망설이지 말고) 저희에게 연락하십시오."),
    99: ("In contrast, last year's sales were low.", "반대로, 작년 매출은 낮았습니다."),
    100: ("He was instrumental in the project's success.", "그는 프로젝트의 성공에 중요한 역할을 했습니다."),
    101: ("We need to lengthen the table.", "우리는 테이블을 길게 늘여야 합니다."),
    102: ("It is time to make a move.", "행동을 취할 때입니다."),
    103: ("I hope I didn't offend you.", "당신의 기분을 상하게 하지 않았기를 바랍니다."),
    104: ("They have opposing views on the issue.", "그들은 그 문제에 대해 대립하는(반대하는) 견해를 가지고 있습니다."),
    105: ("The origin of the product is unknown.", "그 제품의 원산지(기원)는 알 수 없습니다."),
    106: ("We need a rational explanation.", "우리는 합리적인 설명이 필요합니다."),
    107: ("He received recognition for his work.", "그는 그의 일에 대해 인정(표창)을 받았습니다."),
    108: ("His refusal to cooperate was disappointing.", "협력을 거부한(거절한) 그의 태도는 실망스러웠습니다."),
    109: ("His tone was slightly sarcastic.", "그의 어조는 다소 빈정대는(풍자적인) 것이었습니다."),
    110: ("Only selected candidates will be interviewed.", "선발된(선택된) 후보자들만 인터뷰를 할 것입니다."),
    111: ("It was sort of a strange request.", "그것은 다소(말하자면) 이상한 요청이었습니다."),
    112: ("You surely understand the situation.", "당신은 분명히(틀림없이) 상황을 이해하실 겁니다."),
    113: ("The news came as a surprise.", "그 소식은 놀라움(놀라운 일)으로 다가왔습니다."),
    114: ("He seems uninterested in the offer.", "그는 그 제안에 흥미가 없는(무관심한) 것 같습니다."),
    115: ("They made a verbal agreement.", "그들은 구두 합의를 했습니다."),
    116: ("It is a virtual certainty.", "그것은 사실상의 확실함입니다."),
    117: ("We can negotiate within reason.", "우리는 온당한 범위 내에서 협상할 수 있습니다."),
    118: ("We seem to be in agreement.", "우리는 동의하는 것 같습니다."),
    119: ("Lawyers will draw up a new agreement.", "변호사들이 새 계약서를 작성할 것입니다."),
    120: ("Please check the enclosure in the envelope.", "봉투 안의 동봉물을 확인해 주십시오."),
    121: ("The generation gap causes communication issues.", "세대 차이는 의사소통 문제를 일으킵니다."),
    122: ("I have difficulty finding a job.", "저는 직업을 구하는 데 어려움을 겪고 있습니다."),
    123: ("He resigned in an attempt to save face.", "그는 체면을 살리려는 시도로 사임했습니다."),
    124: ("This gift is in appreciation of your help.", "이 선물은 당신의 도움에 감사하여 드리는 것입니다."),
    125: ("The book is finally in print.", "그 책은 드디어 출판되었습니다(인쇄되었습니다)."),
    126: ("In summary, the project was a success.", "요약하면, 그 프로젝트는 성공이었습니다."),
    127: ("The company offers lifetime employment.", "그 회사는 종신 고용을 제공합니다."),
    128: ("The program helps low-income resident.", "그 프로그램은 저소득 주민을 돕습니다."),
    129: ("Several companies will make a bid.", "여러 회사들이 입찰할 것입니다."),
    130: ("We make a contract with a new supplier.", "우리는 새로운 공급업체와 계약을 맺습니다."),
    131: ("We have enough stock on hand.", "우리는 가까이에(수중에) 충분한 재고를 가지고 있습니다."),
    132: ("This is a replica of the original painting.", "이것은 원본 그림의 복제품입니다."),
    133: ("The rules are too rigid.", "규칙들이 너무 엄격합니다(완고합니다)."),
    134: ("You must pay a security deposit.", "보증금을 지불해야 합니다."),
    135: ("The files are organized in sequential order.", "파일들은 순차적인 순서로 정리되어 있습니다."),
    136: ("The successful candidate will start next week.", "합격자(성공적인 후보자)는 다음 주에 일을 시작할 것입니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d15p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day15_part3.json
with open('day15_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 15 Part 3 Created (Intermediate Agreements).")
