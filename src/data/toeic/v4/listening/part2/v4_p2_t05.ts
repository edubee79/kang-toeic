import { Part2TestSet } from '../../types';

export const test5Data: Part2TestSet = {
    testId: 5,
    vol: 4,
    title: "Part 2 Real Test 05",
    questions: [
        {
            id: "v4-p2-t05-q7",
            text: "There's a meeting in the conference room soon, right?",
            options: { A: "Yes, it's for the whole department.", B: "No, put it in the closet.", C: "The rent is too high." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "회의실에서 곧 회의가 있죠, 그렇죠?",
            translation_A: "네, 부서 전체를 위한 회의입니다.",
            translation_B: "아니요, 옷장에 넣으세요.",
            translation_C: "임대료가 너무 비싸요."
        },
        {
            id: "v4-p2-t05-q8",
            text: "Why hasn't the mural in the lobby been painted yet?",
            options: { A: "Red and yellow.", B: "Please pick up the ladder.", C: "Because the artist is out of town." },
            correctAnswer: "C",
            questionType: "Why",
            translation: "로비의 벽화가 왜 아직 그려지지 않았나요?",
            translation_A: "빨간색과 노란색요.",
            translation_B: "사다리를 좀 치워주세요.",
            translation_C: "작가가 출장 중이기 때문입니다."
        },
        {
            id: "v4-p2-t05-q9",
            text: "Do you prefer writing in the morning or the afternoon?",
            options: { A: "My publisher requested edits.", B: "Thanks for providing a solution.", C: "Mornings are usually better for me." },
            correctAnswer: "C",
            questionType: "Choice",
            translation: "아침에 글을 쓰는 것을 선호하시나요, 아니면 오후에 쓰는 것을 선호하시나요?",
            translation_A: "출판사가 수정을 요청했습니다.",
            translation_B: "해결책을 제공해 주셔서 감사합니다.",
            translation_C: "보통 저에게는 아침 시간이 더 낫습니다."
        },
        {
            id: "v4-p2-t05-q10",
            text: "I suggest we paint the waiting room light blue.",
            options: { A: "Doctor Park has an opening at three.", B: "That's a good idea.", C: "I prefer the red jacket." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "대기실을 연한 파란색으로 칠하는 게 어떨까요.",
            translation_A: "박 박사님은 3시에 시간이 비어 있습니다.",
            translation_B: "좋은 생각이네요.",
            translation_C: "저는 빨간색 재킷을 더 선호합니다."
        },
        {
            id: "v4-p2-t05-q11",
            text: "Did you know that the music school is closed on Sundays?",
            options: { A: "Forty dollars an hour.", B: "No, I didn't know that.", C: "I saw the piano recital." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "음악 학교가 일요일에 문을 닫는다는 걸 알고 계셨나요?",
            translation_A: "시간당 40달러요.",
            translation_B: "아니요, 몰랐습니다.",
            translation_C: "피아노 독주회를 봤습니다."
        },
        {
            id: "v4-p2-t05-q12",
            text: "How do I find the office manager?",
            options: { A: "The receptionist would know.", B: "Desk lamps and headsets.", C: "Twelve euros." },
            correctAnswer: "A",
            questionType: "How",
            translation: "사무실 관리자를 어떻게 찾을 수 있을까요?",
            translation_A: "접수 직원이 알 것입니다.",
            translation_B: "탁상 전등과 헤드셋요.",
            translation_C: "12유로요."
        },
        {
            id: "v4-p2-t05-q13",
            text: "When did you place the order for the lumber?",
            options: { A: "Yes, it's a great place for hiking.", B: "It's out of stock right now.", C: "The warehouse on William Street." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "목재 주문을 언제 하셨나요?",
            translation_A: "네, 하이킹하기에 정말 좋은 곳이에요.",
            translation_B: "현재 재고가 없습니다.",
            translation_C: "윌리엄 가에 있는 창고에요."
        },
        {
            id: "v4-p2-t05-q14",
            text: "Where is the new packaging machine?",
            options: { A: "Ten packages a minute.", B: "We met last Thursday.", C: "We decided to keep the old one." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "새 포장 기계는 어디에 있나요?",
            translation_A: "1분에 10패키지요.",
            translation_B: "지난주 목요일에 만났습니다.",
            translation_C: "기존 것을 그대로 사용하기로 했습니다."
        },
        {
            id: "v4-p2-t05-q15",
            text: "I'll be out of the office this afternoon.",
            options: { A: "An awfully long commute.", B: "OK—I'll update your schedule.", C: "It's right down the hallway." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "저 오늘 오후에는 자리를 비울 예정이에요.",
            translation_A: "정말 긴 통근 거리네요.",
            translation_B: "알겠습니다—일정을 업데이트해 드릴게요.",
            translation_C: "복도 바로 아래쪽에 있습니다."
        },
        {
            id: "v4-p2-t05-q16",
            text: "Are you taking a vacation once this project is over?",
            options: { A: "Yes—I'm planning a trip to Barcelona.", B: "This is your second time, isn't it?", C: "Blueprints for a high-rise building." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "이 프로젝트가 끝나면 휴가 가실 건가요?",
            translation_A: "네—바르셀로나 여행을 계획 중입니다.",
            translation_B: "이번이 두 번째 아니신가요?",
            translation_C: "고층 건물의 설계도요."
        },
        {
            id: "v4-p2-t05-q17",
            text: "Let's post the sales report to our team's Web page.",
            options: { A: "We're sharing a taxi to the airport.", B: "I can do that.", C: "A recent hiring decision." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "매출 보고서를 팀 웹페이지에 게시합시다.",
            translation_A: "우리는 공항까지 택시를 같이 탈 예정입니다.",
            translation_B: "그렇게 하겠습니다.",
            translation_C: "최근의 채용 결정요."
        },
        {
            id: "v4-p2-t05-q18",
            text: "Which airline are you planning on using?",
            options: { A: "The usual one.", B: "A one-way ticket.", C: "Yes, you can use mine." },
            correctAnswer: "A",
            questionType: "What",
            translation: "어느 항공사를 이용하실 계획인가요?",
            translation_A: "평소에 이용하던 곳요.",
            translation_B: "편도 항공권 한 장요.",
            translation_C: "네, 제 것을 사용하셔도 됩니다."
        },
        {
            id: "v4-p2-t05-q19",
            text: "Where's this shipment of parts being sent?",
            options: { A: "Around five thirty this evening.", B: "To the assembly plant in Dublin.", C: "Just half the order." },
            correctAnswer: "B",
            questionType: "Where",
            translation: "이 부품 배송물은 어디로 발송됩니까?",
            translation_A: "오늘 저녁 5시 30분경에요.",
            translation_B: "더블린의 조립 공장으로요.",
            translation_C: "주문의 절반만요."
        },
        {
            id: "v4-p2-t05-q20",
            text: "Who paid for lunch?",
            options: { A: "I just ate.", B: "It closes at five.", C: "Alberto did." },
            correctAnswer: "C",
            questionType: "Who",
            translation: "누가 점심값을 냈나요?",
            translation_A: "방금 먹었습니다.",
            translation_B: "5시에 문을 닫습니다.",
            translation_C: "알베르토 씨가 냈습니다."
        },
        {
            id: "v4-p2-t05-q21",
            text: "How many employees work in your department?",
            options: { A: "I don't mind taking notes at the meeting.", B: "A couple dozen, I think.", C: "It's seven meters long." },
            correctAnswer: "B",
            questionType: "How",
            translation: "귀하의 부서에는 몇 명의 직원이 근무하나요?",
            translation_A: "회의에서 메모하는 건 게의치 않습니다.",
            translation_B: "내 생각엔 수십 명 정도요.",
            translation_C: "7미터 길이입니다."
        },
        {
            id: "v4-p2-t05-q22",
            text: "We should leave for our training course soon, shouldn't we?",
            options: { A: "We still have a few minutes.", B: "There's a map on the wall.", C: "Two sessions per day." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "곧 교육 과정을 위해 출발해야 하죠, 그렇지 않나요?",
            translation_A: "아직 몇 분 더 있습니다.",
            translation_B: "벽에 지도가 있습니다.",
            translation_C: "하루당 두 번의 세션요."
        },
        {
            id: "v4-p2-t05-q23",
            text: "Isn't there a limit on travel expenses?",
            options: { A: "To fix the vending machine.", B: "One hundred dollars per day.", C: "Next to the travel agency." },
            correctAnswer: "B",
            questionType: "Negative",
            translation: "출장비에 한도가 있지 않나요?",
            translation_A: "자판기를 수리하기 위해서요.",
            translation_B: "하루당 100달러입니다.",
            translation_C: "여행사 옆에요."
        },
        {
            id: "v4-p2-t05-q24",
            text: "When should I tell the director that I'm interested in the management position?",
            options: { A: "Yes, we're extending our business hours.", B: "Didn't Andrey direct the play?", C: "I'm not on the hiring team." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "관리직에 관심이 있다고 언제 이사님께 말씀드리는 게 좋을까요?",
            translation_A: "네, 영업 시간을 연장할 예정입니다.",
            translation_B: "안드레이 씨가 그 연극을 연출하지 않았나요?",
            translation_C: "저는 채용팀 소속이 아닙니다."
        },
        {
            id: "v4-p2-t05-q25",
            text: "The layout of the footwear department has changed.",
            options: { A: "There's a charging station in the cafe.", B: "Yes, a three-bedroom apartment.", C: "The store has a new manager." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "신발 부서의 배치(레이아웃)가 변경되었습니다.",
            translation_A: "카페 안에 충전 스테이션이 있습니다.",
            translation_B: "네, 침실 3개짜리 아파트요.",
            translation_C: "매장에 새로운 관리자가 왔습니다."
        },
        {
            id: "v4-p2-t05-q26",
            text: "Can you look at this month's revenue report?",
            options: { A: "The news program is informative.", B: "I have some free time tomorrow afternoon.", C: "He started that position in July." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "이번 달 수익 보고서를 좀 봐주실 수 있나요?",
            translation_A: "그 뉴스 프로그램은 유익합니다.",
            translation_B: "내일 오후에 시간이 좀 납니다.",
            translation_C: "그는 7월에 그 직무를 시작했습니다."
        },
        {
            id: "v4-p2-t05-q27",
            text: "Why haven't the windows been replaced yet?",
            options: { A: "Not too much wind, no.", B: "Look in the filing cabinet.", C: "Did you see the cost estimate?" },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "창문이 왜 아직 교체되지 않았나요?",
            translation_A: "바람이 너무 많이 불지는 않아요.",
            translation_B: "파일 보관함 안을 확인해 보세요.",
            translation_C: "비용 견적서를 보셨나요?"
        },
        {
            id: "v4-p2-t05-q28",
            text: "Isn't your suitcase going to be heavier than the permitted weight?",
            options: { A: "the building permit arrived today", B: "there are seats in the lobby", C: "I'll have to pay a little bit extra." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "여행 가방이 허용 무게보다 더 무거울 것 같은데, 그렇지 않나요?",
            translation_A: "건축 허가서가 오늘 도착했습니다.",
            translation_B: "로비에 좌석이 있습니다.",
            translation_C: "추가 비용을 좀 내야 할 것 같습니다."
        },
        {
            id: "v4-p2-t05-q29",
            text: "Who manufactures the engines for our machines?",
            options: { A: "Koji is in charge of supplier contracts", B: "I'm sorry- the storage room is full", C: "that's cargo airplane" },
            correctAnswer: "A",
            questionType: "Who",
            translation: "우리 기계용 엔진을 누가 제조하나요?",
            translation_A: "코지 씨가 공급업체 계약을 담당하고 있습니다.",
            translation_B: "죄송합니다—창고가 꽉 찼습니다.",
            translation_C: "그것은 화물 항공기입니다."
        },
        {
            id: "v4-p2-t05-q30",
            text: "Should we meet at the department store on fifth street or the one on Grover Lane?",
            options: { A: "let's ask Patricia first", B: "no, I don't mind", C: "how much does it cost?" },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "5번가에 있는 백화점에서 만날까요, 아니면 그로버 가에 있는 곳에서 만날까요?",
            translation_A: "패트리샤 씨에게 먼저 물어봅시다.",
            translation_B: "아니요, 게의치 않습니다.",
            translation_C: "비용이 얼마인가요?"
        },
        {
            id: "v4-p2-t05-q31",
            text: "Which band is playing at the club tonight?",
            options: { A: "there's always a comedy show on Thursday night", B: "yes, I've played the piano for many years", C: "their number one hit" },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "오늘 밤 클럽에서 공연하는 밴드가 누구인가요?",
            translation_A: "목요일 밤에는 항상 코미디 쇼가 열립니다.",
            translation_B: "네, 대는 수년 동안 피아노를 쳐왔습니다.",
            translation_C: "그들의 1위 히트곡을 낸 밴드요."
        }
    ]
};
