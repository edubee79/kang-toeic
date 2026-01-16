import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 13 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 13) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 13 Part 3: Intermediate - Customer Support & Service)
# Focus: "Hyper-TOEIC" (Strict Headword Usage, Business/Service Context)
toeic_examples_d13p3 = {
    69: ("I bought a loaf of bread.", "저는 빵 한 덩어리를 샀습니다."),
    70: ("The manager handled the affair discreetly.", "관리자는 그 사건(일)을 신중하게 처리했습니다."),
    71: ("You can find the item in aisle 4.", "그 물품은 4번 통로에서 찾으실 수 있습니다."),
    72: ("The noise began to annoy the customers.", "소음이 고객들을 짜증나게 하기 시작했습니다."),
    73: ("Repair service is provided at no charge.", "수리 서비스는 무료로 제공됩니다."),
    74: ("Extra sauce is available at no extra charge.", "추가 소스는 추가 비용 없이 이용 가능합니다."),
    75: ("He is on another call right now.", "그는 지금 다른 전화를 받고 있습니다."),
    76: ("They wore ceremonial robes.", "그들은 의식용 가운을 입었습니다."),
    77: ("Please follow the rules for your own safety.", "안전을 위해(당신의 안전을 위해) 규칙을 따라 주십시오."),
    78: ("This meeting is a follow-up to our last discussion.", "이 회의는 지난 토론의 후속 조치입니다."),
    79: ("You can get a replacement for the damaged part.", "손상된 부품에 대해 교체품을 받으실 수 있습니다."),
    80: ("Use a handheld device to scan the barcode.", "바코드를 스캔하려면 휴대용 장치를 사용하십시오."),
    81: ("Let's head toward the exit.", "출구 쪽으로 향합시다."),
    82: ("Please hold the line while I check.", "확인하는 동안 잠시만 기다려 주십시오(전화를 끊지 말고)."),
    83: ("Check the details just to make sure.", "확실히 하기 위해 세부 사항을 확인하십시오."),
    84: ("Put the leftover food in the fridge.", "남은 음식은 냉장고에 넣으십시오."),
    85: ("Please look through the manual carefully.", "설명서를 주의 깊게 훑어보십시오."),
    86: ("Payment is due on delivery.", "지불은 배달 시에 해야 합니다."),
    87: ("Ask the pharmacist about the medication.", "약사에게 약물에 대해 문의하십시오."),
    88: ("We are targeting potential customers.", "우리는 잠재 고객들을 겨냥하고 있습니다."),
    89: ("He used a prepaid card.", "그는 선불 카드를 사용했습니다."),
    90: ("Please fill out the questionnaire.", "설문지를 작성해 주십시오."),
    91: ("The company issued a recall for the product.", "회사는 그 제품에 대해 리콜을 실시했습니다."),
    92: ("I need to return a phone call.", "저는 답신 전화를 해야 합니다."),
    93: ("The price is ridiculously high.", "가격이 터무니없이(우스꽝스럽게) 높습니다."),
    94: ("We cannot take back used items.", "우리는 사용한 물품을 반품 받을(도로 가져갈) 수 없습니다."),
    95: ("Help me troubleshoot this computer problem.", "이 컴퓨터 문제를 해결하는 것을 도와주십시오."),
    96: ("Stay tuned for more news.", "더 많은 소식을 위해 채널을 고정하십시오(맞추어 놓으십시오)."),
    97: ("She bought a new wardrobe for work.", "그녀는 직장에서 입을 새 옷장(옷)을 샀습니다."),
    98: ("This watch is water-resistant.", "이 시계는 방수가 됩니다."),
    99: ("The adverse weather cancelled the event.", "악천후(불리한 날씨)로 행사가 취소되었습니다."),
    100: ("They had an argument about the bill.", "그들은 청구서에 대해 말다툼(논쟁)을 했습니다."),
    101: ("We sent the files as requested.", "우리는 요청대로 파일을 보냈습니다."),
    102: ("The car has a manufacturing defect.", "그 차에는 제조상의 결함이 있습니다."),
    103: ("The results were discouraging.", "결과는 실망스러웠습니다(낙담시켰습니다)."),
    104: ("Security will escort you to the exit.", "보안 요원이 당신을 출구까지 안내(호위)할 것입니다."),
    105: ("The exterior of the building is modern.", "그 건물의 외관은 현대적입니다."),
    106: ("For further information, contact us.", "추가(더 이상의) 정보를 원하시면 저희에게 연락해 주십시오."),
    107: ("The meeting will go on for an hour.", "회의는 한 시간 동안 계속될 것입니다."),
    108: ("She graciously accepted the invitation.", "그녀는 우아하게(자비롭게) 초대를 수락했습니다."),
    109: ("The location is inconvenient for parking.", "그 위치는 주차하기에 불편합니다."),
    110: ("We need an instant solution.", "우리는 즉각적인 해결책이 필요합니다."),
    111: ("Customer loyalty is important to us.", "고객 충성도는 우리에게 중요합니다."),
    112: ("Please refer to the manual.", "설명서를 참조하십시오."),
    113: ("The event went smoothly.", "행사는 순조롭게 진행되었습니다."),
    114: ("Honesty is a valuable trait.", "정직은 소중한 특성입니다."),
    115: ("The software is user friendly.", "그 소프트웨어는 사용하기 쉽습니다(사용자 친화적입니다)."),
    116: ("He is willing to help us.", "그는 기꺼이 우리를 도우려 합니다."),
    117: ("We sent the sample at one's request.", "우리는 요청에 따라 샘플을 보냈습니다."),
    118: ("We are not responsible for breakage during shipping.", "우리는 배송 중 파손에 대해 책임지지 않습니다."),
    119: ("He paid her a compliment.", "그는 그녀에게 칭찬을 했습니다."),
    120: ("We need to cut back on expenses.", "우리는 비용을 줄여야 합니다."),
    121: ("Even now, I remember his advice.", "지금도(심지어 지금에도), 저는 그의 조언을 기억합니다."),
    122: ("The wiring is faulty.", "배선에 결함이 있습니다."),
    123: ("The survey covers the general population.", "그 설문조사는 일반 대중을 대상으로 합니다."),
    124: ("She wants to make a complaint.", "그녀는 불평(항의)을 하고 싶어 합니다."),
    125: ("I would like to make a request.", "요청을 하나 하고 싶습니다."),
    126: ("We will make a response soon.", "우리는 곧 응답할 것입니다."),
    127: ("I need to make an appointment with the dentist.", "저는 치과 의사와 약속을 잡아야 합니다."),
    128: ("The product fails to meet the standards.", "그 제품은 기준을 충족하지 못했습니다."),
    129: ("I mistakenly deleted the file.", "저는 실수로 그 파일을 삭제했습니다."),
    130: ("The park is for people of all ages.", "그 공원은 모든 연령대의 사람들을 위한 곳입니다."),
    131: ("Post a notice on the bulletin board.", "게시판에 공지 사항을 게시하십시오."),
    132: ("Take the car to the service depot.", "차를 서비스 센터(창고)로 가져가십시오."),
    133: ("There is a stain on the shirt.", "셔츠에 얼룩이 있습니다."),
    134: ("We are trying to trace the package.", "우리는 소포를 추적하려고 노력 중입니다."),
    135: ("The tires will wear out eventually.", "타이어는 결국 닳을 것입니다."),
    136: ("Ensure the machine works properly.", "기계가 제대로 작동하는지 확인하십시오.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d13p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day13_part3.json
with open('day13_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 13 Part 3 Created (Intermediate Service).")
