import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 4 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 4) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 4 Part 4)
toeic_examples_d4p4 = {
    137: ("The company promises a seamless transition to the new system.", "그 회사는 새로운 시스템으로의 매끄러운(문제 없는) 전환을 약속합니다."),
    138: ("You must submit the application to the HR manager by noon.", "귀하는 정오까지 지원서를 인사 담당자에게 제출해야 합니다."),
    139: ("He succeeded in securing a major contract for the firm.", "그는 회사를 위한 큰 계약을 따내는 데 성공했습니다."),
    140: ("Processing these applications manually is very time-consuming.", "이 지원서들을 수동으로 처리하는 것은 시간이 매우 많이 걸립니다."),
    141: ("Accurate bookkeeping is essential for financial reporting.", "정확한 부기는 재무 보고를 위해 필수적입니다."),
    142: ("The manager had her hands full with the upcoming audit.", "매니저는 다가오는 감사로 인해 몹시 바빴습니다(두 손이 꽉 찼습니다)."),
    143: ("Please dial 9 to make an outside call.", "외부로 전화를 걸려면 9번을 누르십시오."),
    144: ("Employee motivation is key to higher productivity.", "직원의 동기 부여는 더 높은 생산성의 열쇠입니다."),
    145: ("We are analyzing the performance of newly listed stocks.", "우리는 새로 목록에 오른(상장된) 주식들의 실적을 분석하고 있습니다."),
    146: ("We must prioritize customer satisfaction above short-term profits.", "우리는 단기적인 이익보다 고객 만족을 우선적으로 처리해야 합니다."),
    147: ("Audience members were asked to sit in alternate seats.", "청중들은 한 자리씩 건너 앉도록 요청받았습니다."),
    148: ("You need written authorization to access these files.", "이 파일들에 접근하려면 서면 결재(승인)가 필요합니다."),
    149: ("We cannot proceed without your written consent.", "귀하의 서면 동의 없이는 진행할 수 없습니다."),
    150: ("He is just a business acquaintance, not a close friend.", "그는 단지 사업상 아는 사람일 뿐, 친한 친구는 아닙니다."),
    151: ("We need to consider the social dimension of this problem.", "우리는 이 문제의 사회적 차원(관점)을 고려해야 합니다."),
    152: ("The CEO issued a new directive regarding safety procedures.", "CEO는 안전 절차에 관한 새로운 지시를 내렸습니다."),
    153: ("Discerning customers prefer high-quality ingredients.", "통찰력 있는(안목 있는) 고객들은 고품질 재료를 선호합니다."),
    154: ("The hotel lobby was elegantly decorated for the gala.", "호텔 로비는 갈라 행사를 위해 우아하게 장식되었습니다."),
    155: ("An expectant crowd gathered outside the stadium.", "기대하고 있는 군중이 경기장 밖으로 모여들었습니다."),
    156: ("Her contributions to the project were invaluable.", "프로젝트에 대한 그녀의 기여는 매우 귀중했습니다."),
    157: ("The new marketing strategy propelled the company to success.", "새로운 마케팅 전략은 회사를 성공으로 나아가게 했습니다(몰아갔습니다)."),
    158: ("There is a growing realization that changes are needed.", "변화가 필요하다는 인식이 커지고 있습니다."),
    159: ("Passengers can recline their seats for better comfort.", "승객들은 더 나은 편안음을 위해 좌석을 뒤로 젖힐 수 있습니다."),
    160: ("The library serves as a repository of knowledge.", "도서관은 지식의 저장소 역할을 합니다."),
    161: ("The managers returned to their respective departments.", "매니저들은 각자의 부서로 돌아갔습니다."),
    162: ("The applause broke out spontaneously after the speech.", "연설 후 자발적으로(자연스럽게) 박수가 터져 나왔습니다."),
    163: ("Don't waste time arguing over trivial matters.", "사소한 문제로 논쟁하느라 시간을 낭비하지 마십시오."),
    164: ("Please turn in your badge at the security desk.", "보안 데스크에 배지를 제출해 주십시오."),
    165: ("The restaurant is famous for its romantic ambiance.", "그 식당은 로맨틱한 분위기로 유명합니다."),
    166: ("He has an aspiration to become a CEO one day.", "그는 언젠가 CEO가 되겠다는 포부를 가지고 있습니다."),
    167: ("She did a creditable job managing the crisis.", "그녀는 위기를 관리하는 데 있어 훌륭한 일을 해냈습니다."),
    168: ("An eminent scholar was invited to speak at the conference.", "저명한 학자가 컨퍼런스에서 연설하도록 초청되었습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d4p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Remove Note from word if exists (e.g. "seamless(=without trouble)")
    word_cleaned = row['Word'].split('(=')[0]
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': word_cleaned,
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day4_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 4 Part 4 Created.")
