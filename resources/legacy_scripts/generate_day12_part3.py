import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 12 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 12) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 12 Part 3: Intermediate - Manufacturing Operations)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Business Context)
toeic_examples_d12p3 = {
    69: ("The cables run underground.", "케이블은 지하로 연결되어 있습니다(흐릅니다)."),
    70: ("The final assembly of the product is done here.", "제품의 최종 조립은 여기서 이루어집니다."),
    71: ("Please fasten the strap securely.", "끈을 단단히 조여 주십시오."),
    72: ("Can you give me a hand with this box?", "이 상자 옮기는 것 좀 도와주시겠습니까?"),
    73: ("The model will go out of production soon.", "그 모델은 곧 생산이 중단될 것입니다."),
    74: ("I will serve you in a moment.", "곧(순식간에) 모시겠습니다(응대하겠습니다)."),
    75: ("The maintenance cost is high.", "유지비가 높습니다."),
    76: ("We changed the makeup of the team.", "우리는 팀의 구성(조립)을 변경했습니다."),
    77: ("Much to my surprise, he agreed.", "놀랍게도(내가 매우 놀랍게도), 그는 동의했습니다."),
    78: ("We sell not only electronics but also furniture.", "우리는 전자제품뿐만 아니라 가구도 판매합니다."),
    79: ("Please pack away your tools after work.", "일이 끝나면 도구를 정리해(치워) 주십시오."),
    80: ("The team performed remarkably well.", "그 팀은 놀라울 정도로 잘 해냈습니다."),
    81: ("They built a scale model of the bridge.", "그들은 그 다리의 축소 모형을 만들었습니다."),
    82: ("The machine is making a squeaking sound.", "기계가 삐걱거리는 소리를 내고 있습니다."),
    83: ("This device is a wearable technology.", "이 장치는 웨어러블(착용할 수 있는) 기술입니다."),
    84: ("Keep your workbench clean.", "작업대를 깨끗하게 유지하십시오."),
    85: ("The novel was adapted for the screen.", "그 소설은 영화(스크린)를 위해 각색되었습니다."),
    86: ("The doors open automatically.", "문은 자동으로 열립니다."),
    87: ("He handled the equipment carelessly.", "그는 장비를 부주의하게 다루었습니다."),
    88: ("Keep combustible materials away from fire.", "인화성(불붙기 쉬운) 물질을 불에서 멀리 두십시오."),
    89: ("The room is fitted with air conditioning.", "그 방에는 에어컨이 설치되어(갖춰져) 있습니다."),
    90: ("The items are reasonably priced.", "물품들은 합리적인 가격이 책정되어 있습니다."),
    91: ("We need to reform the tax system.", "우리는 세금 제도를 개혁해야 합니다."),
    92: ("His representation of the facts was accurate.", "그의 사실 묘사(표현)는 정확했습니다."),
    93: ("Technically, you are correct.", "엄밀히 말하면(기술적으로는), 당신이 맞습니다."),
    94: ("Call a technician if the computer breaks.", "컴퓨터가 고장 나면 기술자를 부르십시오."),
    95: ("The project was utterly successful.", "그 프로젝트는 완전히(전적으로) 성공적이었습니다."),
    96: ("The weather adversely affected the crop.", "날씨가 농작물에 불리하게(나쁘게) 영향을 미쳤습니다."),
    97: ("We sell agricultural products.", "우리는 농산물을 판매합니다."),
    98: ("This juice contains no artificial flavors.", "이 주스에는 인공 조미료가 들어있지 않습니다."),
    99: ("Age is irrelevant to the job.", "나이는 그 일과 무관합니다."),
    100: ("The method is simple but crude.", "그 방법은 간단하지만 조잡합니다."),
    101: ("The price of crude oil increased.", "원유 가격이 상승했습니다."),
    102: ("We ordered custom-made furniture.", "우리는 주문 제작 가구를 주문했습니다."),
    103: ("The company plans to downsize its workforce.", "그 회사는 인력을 감축할(규모를 축소할) 계획입니다."),
    104: ("He loves buying the latest gadget.", "그는 최신 도구(가제트) 사는 것을 좋아합니다."),
    105: ("This idea is a real gem.", "이 아이디어는 정말 보석 같은 것입니다."),
    106: ("The hospital has a backup generator.", "그 병원에는 예비 발전기가 있습니다."),
    107: ("Apply grease to the gears.", "기어에 윤활유(구리스)를 바르십시오."),
    108: ("The two reports are identically written.", "두 보고서는 동일하게 작성되었습니다."),
    109: ("In the event of fire, use the stairs.", "화재 발생 시에는(화재의 경우에는), 계단을 이용하십시오."),
    110: ("We are in the process of hiring new staff.", "우리는 새로운 직원을 채용하는 과정에(진행 중에) 있습니다."),
    111: ("The suits are individually tailored.", "그 양복들은 개인 맞춤으로 제작되었습니다."),
    112: ("The integration of the two systems went smoothly.", "두 시스템의 통합은 순조롭게 진행되었습니다."),
    113: ("He works as a line worker in the factory.", "그는 공장에서 생산 라인 근로자로 일합니다."),
    114: ("We sell made-to-order curtains.", "우리는 주문 생산 커튼을 판매합니다."),
    115: ("Please make an arrangement for the meeting.", "회의를 위한 준비(수배)를 해 주십시오."),
    116: ("We cannot make an exception for you.", "우리는 당신을 위해 예외를 둘 수 없습니다."),
    117: ("The results will be made public tomorrow.", "결과는 내일 공표될(대중에게 공개될) 것입니다."),
    118: ("We aim to increase market awareness.", "우리는 시장 인지도를 높이는 것을 목표로 합니다."),
    119: ("Please stack the boxes neatly.", "상자들을 깔끔하게 쌓아 주십시오."),
    120: ("The doctor is on call tonight.", "그 의사는 오늘 밤 대기 중입니다."),
    121: ("The company is on the edge of bankruptcy.", "그 회사는 파산 직전에(막~하려는 찰나에) 있습니다."),
    122: ("He was hired on the spot.", "그는 현장에서(즉석에서) 채용되었습니다."),
    123: ("This battery will outlast the others.", "이 배터리는 다른 것들보다 더 오래갈 것입니다."),
    124: ("The factory increased its daily output.", "공장은 일일 생산량을 늘렸습니다."),
    125: ("Safety measures were put in place.", "안전 조치가 시행되었습니다(마련되었습니다)."),
    126: ("If you have a query, please contact us.", "질문(문의)이 있으시면 저희에게 연락해 주십시오."),
    127: ("We sell ready-made meals.", "우리는 조리된(기성품) 식사를 판매합니다."),
    128: ("Technicians will reassemble the machine.", "기술자들이 기계를 재조립할 것입니다."),
    129: ("They refine oil into gasoline.", "그들은 석유를 휘발유로 정제합니다."),
    130: ("This painting is a reproduction.", "이 그림은 복제품(재생)입니다."),
    131: ("He works in the manufacturing sector.", "그는 제조 부문(구역)에서 일합니다."),
    132: ("They settled on a date for the meeting.", "그들은 회의 날짜를 결정했습니다."),
    133: ("We need to sort out the problem.", "우리는 그 문제를 해결해야(정리해야) 합니다."),
    134: ("This fabric is made of synthetic fibers.", "이 직물은 합성 섬유로 만들어졌습니다."),
    135: ("We offer tailor-made financial plans.", "우리는 맞춤형 재정 계획을 제공합니다."),
    136: ("Upon arriving, please register at the desk.", "도착하자마자 데스크에서 등록해 주십시오.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d12p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day12_part3.json
with open('day12_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 12 Part 3 Created (Intermediate Manufacturing).")
