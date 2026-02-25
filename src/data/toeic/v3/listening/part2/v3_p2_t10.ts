import { Part2TestSet } from '../../types';

export const test10Data: Part2TestSet = {
    testId: 10,
    vol: 3,
    title: "Part 2 Real Test 10",
    questions: [
        {
            id: "v3-p2-t10-q7",
            text: "Where's the marketing department?",
            options: { A: "Are the shoes on sale?", B: "I've been to the farmers market.", C: "On the third floor." },
            correctAnswer: "C",
            questionType: "Where",
            translation: "마케팅 부서가 어디인가요?",
            translation_A: "신발 할인 중인가요?",
            translation_B: "전통시장에 다녀왔습니다.",
            translation_C: "3층에 있습니다."
        },
        {
            id: "v3-p2-t10-q8",
            text: "What time does your flight leave?",
            options: { A: "At nine in the morning.", B: "Only one suitcase.", C: "That's a great destination." },
            correctAnswer: "A",
            questionType: "What",
            translation: "비행기가 몇 시에 출발하나요?",
            translation_A: "오전 9시 정각에요.",
            translation_B: "여행 가방 한 개뿐입니다.",
            translation_C: "정말 멋진 여행지네요."
        },
        {
            id: "v3-p2-t10-q9",
            text: "Who reviewed the order forms?",
            options: { A: "Today at noon.", B: "The manager did.", C: "Sure, I'll sign for the delivery." },
            correctAnswer: "B",
            questionType: "Who",
            translation: "누가 주문 양식을 검토했나요?",
            translation_A: "오늘 정오에요.",
            translation_B: "매니저님이 하셨습니다.",
            translation_C: "물론이죠, 제가 배송 서명을 할게요."
        },
        {
            id: "v3-p2-t10-q10",
            text: "How much do the tickets cost?",
            options: { A: "It's on the coast.", B: "The concert was great!", C: "Twenty dollars, I think." },
            correctAnswer: "C",
            questionType: "How",
            translation: "티켓 가격이 얼마인가요?",
            translation_A: "해안가에 있습니다.",
            translation_B: "콘서트는 정말 좋았습니다!",
            translation_C: "제 생각엔 20달러인 것 같아요."
        },
        {
            id: "v3-p2-t10-q11",
            text: "Would you like to have lunch with us?",
            options: { A: "They don't work together.", B: "She called yesterday.", C: "No, thanks—I already ate." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "저희와 점심 식사 같이 하시겠어요?",
            translation_A: "그들은 같이 일하지 않습니다.",
            translation_B: "그녀는 어제 전화했습니다.",
            translation_C: "아니요, 괜찮습니다—이미 먹었어요."
        },
        {
            id: "v3-p2-t10-q12",
            text: "Should we discuss the merger tomorrow or Friday?",
            options: { A: "He's a vegetarian.", B: "Tomorrow is better.", C: "A few weeks ago." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "합병에 관해 내일 논의할까요, 아니면 금요일에 할까요?",
            translation_A: "그는 채식주의자입니다.",
            translation_B: "내일이 더 좋겠습니다.",
            translation_C: "몇 주 전요."
        },
        {
            id: "v3-p2-t10-q13",
            text: "Why are you still at the office?",
            options: { A: "Because my meeting ran late.", B: "Please leave it with my assistant.", C: "The room at the end of the hall." },
            correctAnswer: "A",
            questionType: "Why",
            translation: "왜 아직 사무실에 계신가요?",
            translation_A: "회의가 늦게 끝났기 때문입니다.",
            translation_B: "제 비서에게 맡겨주세요.",
            translation_C: "복도 끝에 있는 방입니다."
        },
        {
            id: "v3-p2-t10-q14",
            text: "Doesn't the art exhibit open today?",
            options: { A: "No, not until next week.", B: "Sure, you can leave it open.", C: "Many local artists." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "미술 전시회가 오늘 개막하지 않나요?",
            translation_A: "아니요, 다음 주나 되어야 합니다.",
            translation_B: "물론이죠, 열어두셔도 됩니다.",
            translation_C: "많은 지역 예술가분들이오."
        },
        {
            id: "v3-p2-t10-q15",
            text: "When did Takumi start working here?",
            options: { A: "I think it was a year ago.", B: "Since my computer isn't working.", C: "No, he retired last month." },
            correctAnswer: "A",
            questionType: "When",
            translation: "타쿠미 씨는 언제 여기서 일을 시작했나요?",
            translation_A: "제 생각엔 1년 전인 것 같아요.",
            translation_B: "제 컴퓨터가 작동하지 않기 때문에요.",
            translation_C: "아니요, 그는 지난달에 은퇴했습니다."
        },
        {
            id: "v3-p2-t10-q16",
            text: "We still sell this brand of washing machine, don't we?",
            options: { A: "I appreciate the help.", B: "Yes, there are some in stock.", C: "Adjust the temperature setting." },
            correctAnswer: "B",
            questionType: "Tag",
            translation: "저희는 아직 이 브랜드 세탁기를 판매하고 있죠, 그렇죠?",
            translation_A: "도와주셔서 감사합니다.",
            translation_B: "네, 재고가 좀 있습니다.",
            translation_C: "온도 설정을 조절하세요."
        },
        {
            id: "v3-p2-t10-q17",
            text: "Haven't you finished the report yet?",
            options: { A: "The deadline's been extended.", B: "Usually once a week.", C: "That would help, thanks." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "아직 보고서 안 끝났나요?",
            translation_A: "마감 기한이 연장되었습니다.",
            translation_B: "보통 일주일에 한 번요.",
            translation_C: "그러면 도움이 되겠네요, 감사합니다."
        },
        {
            id: "v3-p2-t10-q18",
            text: "Do you want to fly or drive to the trade show?",
            options: { A: "The new French film is showing tonight.", B: "That's a positive trend.", C: "Where is it this year?" },
            correctAnswer: "C",
            questionType: "Choice",
            translation: "무역 박람회에 비행기를 타고 가실 건가요, 아니면 차를 타고 가실 건가요?",
            translation_A: "새로운 프랑스 영화가 오늘 밤 상영됩니다.",
            translation_B: "긍정적인 추세네요.",
            translation_C: "올해는 어디에서 열리나요?"
        },
        {
            id: "v3-p2-t10-q19",
            text: "Who's leading the focus group meeting on Friday?",
            options: { A: "In the second-floor conference room.", B: "John is making those assignments.", C: "At the management seminar." },
            correctAnswer: "B",
            questionType: "Who",
            translation: "금요일에 포커스 그룹 미팅을 누가 이끄나요?",
            translation_A: "2층 회의실에서요.",
            translation_B: "존 씨가 배정 업무를 맡고 있습니다.",
            translation_C: "경영 세미나에서요."
        },
        {
            id: "v3-p2-t10-q20",
            text: "Why don't we create some videos for the interns?",
            options: { A: "It was very creative.", B: "Sure, let's work on that.", C: "A review of our television show." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "인턴들을 위한 영상을 좀 만드는 게 어때요?",
            translation_A: "매우 창의적이었습니다.",
            translation_B: "좋아요, 같이 시작해 봅시다.",
            translation_C: "저희 텔레비전 프로그램의 리뷰입니다."
        },
        {
            id: "v3-p2-t10-q21",
            text: "Prackwood Bank has extended business hours today, doesn't it?",
            options: { A: "My extension is 204.", B: "Small business loans.", C: "Only at the Main Street location." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "프랙우드 은행이 오늘 영업 시간을 연장하죠, 그렇지 않나요?",
            translation_A: "제 내선 번호는 204번입니다.",
            translation_B: "중소기업 대출요.",
            translation_C: "메인 가에 있는 지점에서만요."
        },
        {
            id: "v3-p2-t10-q22",
            text: "When do concert tickets go on sale?",
            options: { A: "They're already sold out.", B: "At the ticket office.", C: "That's a good price!" },
            correctAnswer: "A",
            questionType: "When",
            translation: "콘서트 티켓 판매가 언제 시작되나요?",
            translation_A: "이미 매진되었습니다.",
            translation_B: "매표소에서요.",
            translation_C: "좋은 가격이네요!"
        },
        {
            id: "v3-p2-t10-q23",
            text: "Has anyone volunteered to organize the reception?",
            options: { A: "The event's been canceled.", B: "Sorry, I don't have a receipt.", C: "It is a well-known organization." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "환영 행사를 준비하겠다고 자원한 사람이 있나요?",
            translation_A: "행사가 취소되었습니다.",
            translation_B: "죄송하지만, 영수증이 없습니다.",
            translation_C: "잘 알려진 조직입니다."
        },
        {
            id: "v3-p2-t10-q24",
            text: "How do I turn off the copy machine?",
            options: { A: "I still need to make a few.", B: "Try the traffic light.", C: "I will call a few mechanics." },
            correctAnswer: "A",
            questionType: "How",
            translation: "복사기를 어떻게 끄나요?",
            translation_A: "몇 장 더 복사해야 합니다.",
            translation_B: "신호등을 한번 보세요.",
            translation_C: "정비공 몇 명에게 전화해 볼게요."
        },
        {
            id: "v3-p2-t10-q25",
            text: "I'm calling to make an appointment with a physical therapist.",
            options: { A: "Yes, that is my home address.", B: "A lot of exercise.", C: "Your next options are next Monday or Tuesday." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "물리 치료사와 예약을 잡으려고 전화했습니다.",
            translation_A: "네, 제 집 주소입니다.",
            translation_B: "많은 운동요.",
            translation_C: "가능한 다음 시간은 다음 주 월요일이나 화요일입니다."
        },
        {
            id: "v3-p2-t10-q26",
            text: "Our fabric shipment hasn't arrived yet, has it?",
            options: { A: "A large number of orders.", B: "There's a printer on my desk.", C: "I'll call our supplier now." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "원단 배송이 아직 도착 안 했죠, 그렇죠?",
            translation_A: "많은 수의 주문 건들요.",
            translation_B: "제 책상 위에 프린터가 있습니다.",
            translation_C: "지금 공급업체에 전화해 볼게요."
        },
        {
            id: "v3-p2-t10-q27",
            text: "Did you send all staff the revised vacation policy?",
            options: { A: "You'll need a visitor badge to enter the building.", B: "Our computer system has been down all morning.", C: "A two-week trip to Boston." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "모든 직원에게 수정된 휴가 규정을 보내셨나요?",
            translation_A: "건물에 들어가려면 방문객 배지가 필요합니다.",
            translation_B: "오늘 아침 내내 컴퓨터 시스템에 문제가 있었습니다.",
            translation_C: "보스턴으로 떠나는 2주간의 여행요."
        },
        {
            id: "v3-p2-t10-q28",
            text: "What's the telephone number for Primavera restaurant?",
            options: { A: "It's closed for renovations.", B: "Chicken or pasta?", C: "Our supervisor is expecting his call." },
            correctAnswer: "A",
            questionType: "What",
            translation: "프리마베라 식당 전화번호가 어떻게 되나요?",
            translation_A: "수리 중이라 문을 닫았습니다.",
            translation_B: "치킨 아니면 파스타요?",
            translation_C: "상사분이 그의 전화를 기다리고 계십니다."
        },
        {
            id: "v3-p2-t10-q29",
            text: "Could you represent our company at the recruitment fair this week?",
            options: { A: "Five new interns.", B: "Thomas said not to get him any presents.", C: "I always enjoy meeting new people." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "이번 주 채용 박람회에서 우리 회사를 대표해 주실 수 있나요?",
            translation_A: "신입 인턴 5명요.",
            translation_B: "토마스 씨가 어떤 선물도 사지 말라고 하셨어요.",
            translation_C: "전 항상 새로운 사람들을 만나는 것을 즐깁니다."
        },
        {
            id: "v3-p2-t10-q30",
            text: "The engine's been making a strange noise for the past hour.",
            options: { A: "We'd better go find some oil.", B: "No, I'm not going to make anything for the party.", C: "Let's turn down the volume on the TV." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "지난 한 시간 동안 엔진에서 이상한 소리가 나고 있어요.",
            translation_A: "가서 기름을 좀 찾아보는 게 좋겠어요.",
            translation_B: "아니요, 파티를 위해 아무것도 만들지 않을 거예요.",
            translation_C: "TV 볼륨을 좀 줄입시다."
        },
        {
            id: "v3-p2-t10-q31",
            text: "Where can we buy a microwave oven for the office kitchen?",
            options: { A: "Yes, I really like cooking.", B: "My office is located near the kitchen.", C: "There's one in the storage area." },
            correctAnswer: "C",
            questionType: "Where",
            translation: "사무실 탕비실에서 쓸 전자레인지를 어디서 살 수 있을까요?",
            translation_A: "네, 전 요리하는 걸 정말 좋아해요.",
            translation_B: "제 사무실은 주방 근처에 있습니다.",
            translation_C: "비품실(창고) 구역에 하나 있습니다."
        }
    ]
};
