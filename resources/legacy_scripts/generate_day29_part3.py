import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 29 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 29) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 29 Part 3: Landscape, Weather & Regulations)
# Focus: "Hyper-TOEIC" (Geographical features, Severe weather contexts, Environmental Compliance)
toeic_examples_d29p3 = {
    69: ("Solar power is a renewable energy source.", "태양광 동력은 재생 가능한 에너지 원천입니다."),
    70: ("We are exploring the southern coast.", "우리는 남쪽 해안을 탐험하고 있습니다."),
    71: ("The temperature dropped significantly.", "온도가 상당히 떨어졌습니다."),
    72: ("We walked along the shore.", "우리는 해변을 따라 걸었습니다."),
    73: ("The boat is anchored in the bay.", "그 배는 만에 정박해 있습니다."),
    74: ("A large body of water was visible.", "큰 물줄기(수역)가 보였습니다."),
    75: ("The bird is hiding in the bush.", "새가 관목 속에 숨어 있습니다."),
    76: ("Be careful near the cliff edge.", "절벽 가장자리 근처에서는 조심하십시오."),
    77: ("They live in the countryside.", "그들은 시골(지방)에 삽니다."),
    78: ("The hotel adopts eco-friendly practices.", "그 호텔은 환경 친화적인 관행을 채택하고 있습니다."),
    79: ("Follow the footpath to the garden.", "정원으로 가는 오솔길(보도)을 따라가십시오."),
    80: ("There is a fountain in the town square.", "마을 광장에 분수가 있습니다."),
    81: ("The water is freezing cold.", "물은 몹시 찹니다(꽁꽁 얼 정도입니다)."),
    82: ("He bought some gardening tools.", "그는 원예 도구들을 좀 샀습니다."),
    83: ("He grasped the railing firmly.", "그는 난간을 꽉 잡았습니다."),
    84: ("The car was damaged by hail.", "그 차는 우박에 의해 손상되었습니다."),
    85: ("They own a lakefront property.", "그들은 호숫가 부동산을 소유하고 있습니다."),
    86: ("The landscaping improves the building's appearance.", "조경은 건물의 외관을 개선합니다."),
    87: ("The lighthouse guides ships at night.", "등대는 밤에 배들을 안내합니다."),
    88: ("We must arrive before nightfall.", "우리는 해질녘 전에 도착해야 합니다."),
    89: ("The ship is anchored off the shore.", "그 배는 해안에서 떨어져 정박해 있습니다."),
    90: ("The room overlooks the water.", "그 방은 호수(물)를 굽어보고 있습니다."),
    91: ("I spent the morning pulling weeds.", "저는 아침을 잡초를 뽑으며 보냈습니다."),
    92: ("We visited the Amazon rain forest.", "우리는 아마존 열대 우림을 방문했습니다."),
    93: ("The event will continue rain or shine.", "그 행사는 날씨에 상관없이 계속될 것입니다."),
    94: ("We were caught in a rain shower.", "우리는 소나기를 만났습니다."),
    95: ("The rainstorm flooded the streets.", "폭풍우가 거리를 침수시켰습니다."),
    96: ("Ask the park ranger for directions.", "공원 관리인에게 길을 물어보십시오."),
    97: ("They had a picnic on the riverbank.", "그들은 강둑에서 소풍을 가졌습니다."),
    98: ("We walked along the riverside path.", "우리는 강변 길을 따라 걸었습니다."),
    99: ("The mountain scenery is breathtaking.", "산의 풍경은 숨이 멎을 듯합니다."),
    100: ("We took the scenic route.", "우리는 경치 좋은 길을 택했습니다."),
    101: ("The road has a steep slope.", "그 길은 가파른 비탈(경사)을 가지고 있습니다."),
    102: ("A small stream flows through the park.", "작은 시냇물이 공원을 가로질러 흐릅니다."),
    103: ("They moved to a suburb of Boston.", "그들은 보스턴 교외로 이사했습니다."),
    104: ("I need to sweep the leaves.", "저는 낙엽을 쓸어야 합니다."),
    105: ("The flight was delayed due to a thunderstorm.", "비행편이 뇌우 때문에 지연되었습니다."),
    106: ("We hiked along the trail.", "우리는 오솔길(자취)을 따라 등산했습니다."),
    107: ("The animal was caught in a trap.", "그 동물은 함정에 갇혔습니다."),
    108: ("Moss grows on the tree trunk.", "이끼가 나무 줄기에서 자랍니다."),
    109: ("We enjoyed the view at twilight.", "우리는 해질녘의 경치를 즐겼습니다."),
    110: ("Check the weather forecast before you go.", "가기 전에 일기 예보를 확인하십시오."),
    111: ("The weather report predicts rain.", "일기 예보는 비를 예측합니다."),
    112: ("The windstorm caused power outages.", "폭풍이 정전을 일으켰습니다."),
    113: ("We received an affirmative response.", "우리는 긍정적인(동의하는) 답변을 받았습니다."),
    114: ("I dislike eating alone.", "저는 혼자 먹는 것을 싫어합니다."),
    115: ("The soil is very fertile.", "토양은 매우 비옥합니다."),
    116: ("I liked the blue one in particular.", "저는 특히 파란색이 좋았습니다."),
    117: ("Please leave the room quietly.", "조용히 방을 나가 주십시오."),
    118: ("The discussion revolved around the budget.", "논의는 예산을 중심으로 회전했습니다(초점을 맞췄습니다)."),
    119: ("The resort is in a beautiful setting.", "그 리조트는 아름다운 환경(장소)에 있습니다."),
    120: ("It was sheer luck.", "그것은 순전한 운이었습니다."),
    121: ("The evidence is solid.", "증거는 단단합니다(확실합니다)."),
    122: ("We need tangible results.", "우리는 만져서 알 수 있는(명백한) 결과가 필요합니다."),
    123: ("He answered the question thoughtfully.", "그는 질문에 생각이 깊게 대답했습니다."),
    124: ("The lighting creates an atmospheric mood.", "조명은 분위기 있는 무드를 조성합니다."), # 'atmospheric' often used for mood/ambience or 'atmospheric pressure'
    125: ("Wildlife conservation is important.", "야생 동물 보존은 중요합니다."),
    126: ("We comply with all environmental regulations.", "우리는 모든 환경 규제를 준수합니다."),
    127: ("On what grounds are you refusing?", "어떤 근거로 거절하십니까?"),
    128: ("The game was postponed due to inclement weather.", "경기는 궂은(혹독한) 날씨 때문에 연기되었습니다."),
    129: ("Mining can damage the environment.", "채굴은 환경을 손상시킬 수 있습니다."),
    130: ("We are destroying their natural habitat.", "우리는 그들의 자연 서식지를 파괴하고 있습니다."),
    131: ("We are working to reduce noise and air pollution.", "우리는 소음 공해와 대기 오염을 줄이기 위해 노력하고 있습니다."),
    132: ("Plants need nourishment to grow.", "식물은 자라기 위해 영양분이 필요합니다."),
    133: ("Parents nurture their children.", "부모는 자녀를 양육합니다."),
    134: ("The river overflowed its banks.", "강이 둑을 넘쳐 범람했습니다."),
    135: ("How did he react to the news?", "그는 그 소식에 어떻게 반응했습니까?"),
    136: ("This bottle is fully recyclable.", "이 병은 완전히 재활용 가능합니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d29p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day29_part3.json
with open('day29_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 29 Part 3 Created (Landscape & Regulations).")
