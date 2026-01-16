import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 3 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 3) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# PREMIUM BUSINESS TOEIC EXAMPLES (Day 3 Part 3)
toeic_examples_d3p3 = {
    69: ("Before driving, please adjust the rearview mirror for better visibility.", "운전하기 전에, 더 나은 시야 확보를 위해 백미러를 조정해 주십시오."),
    70: ("We recommend making an advance reservation to secure a table.", "테이블을 확보하기 위해 사전 예약을 하시는 것을 권장합니다."),
    71: ("I will arrange an appointment with the director for next Tuesday.", "다음 주 화요일에 이사님과의 약속을 잡겠습니다."),
    72: ("Important notices are posted on the bulletin board in the lobby.", "중요 공지 사항들은 로비에 있는 게시판에 게시되어 있습니다."),
    73: ("Please call back during our regular business hours.", "정규 영업 시간 중에 다시 전화해 주십시오."),
    74: ("Many customers were confused by the misleading advertisement.", "많은 고객들이 오해의 소지가 있는 광고 때문에 혼란스러워했습니다."),
    75: ("I have to run an errand for my boss this afternoon.", "저는 오늘 오후에 상사의 심부름을 다녀와야 합니다."),
    76: ("We would like to extend an invitation to our annual gala.", "저희 연례 갈라 행사에 귀하를 초대하고 싶습니다."),
    77: ("You must get a permit from the city council to host the event.", "행사를 주최하려면 시 의회로부터 허가를 받아야 합니다."),
    78: ("Please hand in your resignation letter by the end of the week.", "이번 주말까지 사직서를 제출해 주십시오."),
    79: ("Employees are entitled to have a day off on their birthday.", "직원들은 자신의 생일에 하루 쉴 자격이 있습니다."),
    80: ("After dealing with customer complaints all day, I had a long day.", "하루 종일 고객 불만을 처리하느라 힘든 하루를 보냈습니다."),
    81: ("Mr. Smith was chosen to head up the new research division.", "스미스 씨가 새로운 연구 부서를 이끌도록 선정되었습니다."),
    82: ("We are in a hurry to meet the production deadline.", "우리는 생산 마감 시한을 맞추기 위해 서두르고 있습니다."),
    83: ("The files should be organized in alphabetical order.", "파일들은 알파벳 순서대로 정리되어야 합니다."),
    84: ("You are in luck because we have one seat remaining.", "좌석이 하나 남아 있으니 당신은 운이 좋습니다."),
    85: ("I will leave the decision up to the marketing manager.", "결정은 마케팅 매니저에게 맡기겠습니다."),
    86: ("Please leave your contact information with the receptionist.", "접수원에게 귀하의 연락처 정보를 남겨 주십시오."),
    87: ("The directory contains a listing of all local businesses.", "그 디렉터리에는 모든 지역 업체의 목록이 포함되어 있습니다."),
    88: ("I need to make a call to our supplier regarding the shipment.", "선적과 관련하여 공급업체에 전화를 걸어야 합니다."),
    89: ("Please make a correction to the invoice number.", "청구서 번호를 정정해 주십시오."),
    90: ("We need to make a final change to the proposal before submission.", "제출하기 전에 제안서에 최종 수정을 해야 합니다."),
    91: ("Please make a note of the conference schedule.", "컨퍼런스 일정을 적어 두십시오."),
    92: ("Her presentation made a lasting impression on the investors.", "그녀의 프레젠테이션은 투자자들에게 깊은 인상을 남겼습니다."),
    93: ("The committee decided to move ahead with the merger plan.", "위원회는 합병 계획을 예정대로 진행하기로 결정했습니다."),
    94: ("The CEO is currently away on a business trip in Europe.", "CEO는 현재 유럽으로 출장 중입니다."),
    95: ("Team meetings are held on a weekly basis.", "팀 회의는 주 단위로 열립니다."),
    96: ("He traveled to Singapore on business last month.", "그는 지난달에 업무차 싱가포르로 여행했습니다."),
    97: ("Changes to the schedule will be handled by the manager on duty.", "일정 변경은 근무 중인 매니저가 처리할 것입니다."),
    98: ("Please pick up the phone; it might be an urgent call.", "전화를 받아 주세요; 긴급한 전화일지도 모릅니다."),
    99: ("The cleaning crew will scrub the floors tonight.", "청소 팀이 오늘 밤 바닥을 문질러 닦을 것입니다."),
    100: ("Please seal the envelope before mailing it.", "우편을 보내기 전에 봉투를 밀봉해 주십시오."),
    101: ("Please speak into the microphone so everyone can hear you.", "모두가 들을 수 있도록 마이크에 대고 말씀해 주십시오."),
    102: ("It is dangerous to speak on the phone while driving.", "운전 중에 통화하는 것은 위험합니다."),
    103: ("Customers had to stand in a line for over an hour.", "고객들은 한 시간 넘게 줄을 서 있어야 했습니다."),
    104: ("I will take a message if he is not available.", "그가 자리에 없으면 제가 메시지를 남겨 드리겠습니다."),
    105: ("Technicians had to take apart the machine to fix the problem.", "기술자들은 문제를 해결하기 위해 기계를 분해해야 했습니다."),
    106: ("Please contact your local utility provider for service outages.", "서비스 중단에 대해서는 지역 공공 설비 공급업체에 문의하십시오."),
    107: ("The company has acquired a smaller rival firm.", "그 회사는 더 작은 경쟁사를 인수(획득)했습니다."),
    108: ("Businesses must adapt to changing market conditions.", "기업들은 변화하는 시장 상황에 적응해야 합니다."),
    109: ("The HR department administers the employee benefit program.", "인사부는 직원 복지 프로그램을 관리합니다."),
    110: ("She performs various clerical duties in the office.", "그녀는 사무실에서 다양한 사무 업무를 수행합니다."),
    111: ("There is no conclusive evidence to support the claim.", "그 주장을 뒷받침할 결정적인 증거가 없습니다."),
    112: ("You cannot delete this file without administrator permission.", "관리자 권한 없이는 이 파일을 삭제할 수 없습니다."),
    113: ("He made several editorial changes to the manuscript.", "그는 원고에 몇 가지 편집상의 수정을 가했습니다."),
    114: ("We faced an endless series of challenges during the project.", "우리는 프로젝트 기간 동안 끝없는 도전에 직면했습니다."),
    115: ("The product is expensive; furthermore, it is not durable.", "그 제품은 비쌉니다; 게다가 내구성도 없습니다."),
    116: ("Mr. Jones will handle the inquiries in my absence.", "제 부재시에는 존스 씨가 문의 사항을 처리할 것입니다."),
    117: ("He made the mistake on purpose to delay the process.", "그는 절차를 지연시키기 위해 일부러 실수를 저질렀습니다."),
    118: ("We plan to expand our business to overseas markets.", "우리는 해외 시장으로 사업을 확장할 계획입니다."),
    119: ("Customers perceive our brand as high-quality and reliable.", "고객들은 우리 브랜드를 고품질의 신뢰할 수 있는 브랜드로 인식합니다."),
    120: ("This email serves as a reminder of the upcoming meeting.", "이 이메일은 다가오는 회의를 상기시켜 주는 역할을 합니다."),
    121: ("The project will cost roughly ten thousand dollars.", "그 프로젝트는 대략 1만 달러의 비용이 들 것입니다."),
    122: ("We continuously strive to improve customer satisfaction.", "우리는 고객 만족을 향상시키기 위해 끊임없이 분투합니다."),
    123: ("The manual has been translated into several languages.", "그 매뉴얼은 여러 언어로 번역되었습니다."),
    124: ("The shareholders' meeting will be held in the boardroom.", "주주 총회는 회의실에서 열릴 것입니다."),
    125: ("All applicants must appear in person for the interview.", "모든 지원자는 인터뷰에 직접 참석해야 합니다."),
    126: ("The price includes all taxes, including VAT.", "가격에는 부가세(VAT)를 포함한 모든 세금이 포함되어 있습니다."),
    127: ("Please ensure that you arrive on time for the appointment.", "약속 시간에 맞춰 도착하도록 해 주십시오."),
    128: ("There is no need to panic about the market fluctuations.", "시장 변동에 대해 당황할 필요는 없습니다."),
    129: ("Your payment is now thirty days past due.", "귀하의 지불금이 현재 30일 연체되었습니다."),
    130: ("The deadline has been put forward by two days.", "마감일이 이틀 앞당겨졌습니다."),
    131: ("We regard safety as our top priority.", "우리는 안전을 최우선 순위로 여깁니다."),
    132: ("I will return your call as soon as I get back to the office.", "사무실에 돌아가는 대로 답신 전화를 드리겠습니다."),
    133: ("She has extensive experience in secretarial work.", "그녀는 비서 업무에 광범위한 경험이 있습니다."),
    134: ("Ms. Lee will take charge of the accounting department.", "이 씨가 회계 부서를 담당하게(책임지게) 될 것입니다."),
    135: ("He is willing to take on responsibility for the error.", "그는 기꺼이 그 오류에 대한 책임을 지려 합니다."),
    136: ("The team threw their effort into finishing the project.", "팀은 프로젝트를 끝내는 데 온 힘을 쏟았습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d3p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day3_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 3 Part 3 Created.")
