import { Part2TestSet } from '../../types';

export const test1Data: Part2TestSet = {
    testId: 1,
    vol: 4,
    title: "Part 2 Real Test 01",
    questions: [
        {
            id: "v4-p2-t01-q7",
            text: "How old is this building?",
            options: { A: "To ship some materials.", B: "About ten years old.", C: "Company offices, I think." },
            correctAnswer: "B",
            questionType: "How",
            translation: "이 건물은 얼마나 오래되었나요?",
            translation_A: "일부 자재를 발송하기 위해서요.",
            translation_B: "약 10년 정도 되었습니다.",
            translation_C: "회사 사무실인 것 같습니다."
        },
        {
            id: "v4-p2-t01-q8",
            text: "Can you come to my jazz performance tonight?",
            options: { A: "I'm sorry I was late for the meeting.", B: "Mostly just local musicians.", C: "Sure, I'll be there!" },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "오늘 밤 제 재즈 공연에 오실 수 있나요?",
            translation_A: "회의에 늦어서 죄송합니다.",
            translation_B: "대부분 그냥 지역 음악가들입니다.",
            translation_C: "물론이죠, 갈게요!"
        },
        {
            id: "v4-p2-t01-q9",
            text: "Which apartment submitted a work order?",
            options: { A: "It's what you did for a living.", B: "Submit your assignment here.", C: "It came from the tenants in B23." },
            correctAnswer: "C",
            questionType: "What",
            translation: "어느 아파트에서 작업 요청서를 제출했나요?",
            translation_A: "그것은 당신이 생계를 위해 하던 일입니다.",
            translation_B: "여기에 과제를 제출하세요.",
            translation_C: "B23호 세입자들에게서 온 것입니다."
        },
        {
            id: "v4-p2-t01-q10",
            text: "Will you contact the vendor about changing our delivery date?",
            options: { A: "Of course, I'll take care of it.", B: "An e-mail receipt.", C: "Could I get change for a dollar?" },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "배송 날짜 변경에 대해 업체에 연락해 주시겠어요?",
            translation_A: "물론이죠, 제가 처리하겠습니다.",
            translation_B: "이메일 영수증입니다.",
            translation_C: "1달러짜리를 잔돈으로 바꿀 수 있을까요?"
        },
        {
            id: "v4-p2-t01-q11",
            text: "Why was the maintenance worker here?",
            options: { A: "No, he didn't.", B: "From three o'clock until four.", C: "Because a light needed to be fixed." },
            correctAnswer: "C",
            questionType: "Why",
            translation: "유지보수 직원이 왜 여기 왔었나요?",
            translation_A: "아니요, 그는 그러지 않았습니다.",
            translation_B: "3시부터 4시까지요.",
            translation_C: "조명을 수리해야 했기 때문입니다."
        },
        {
            id: "v4-p2-t01-q12",
            text: "Did management make a hiring decision yet?",
            options: { A: "Put it on the highest shelf.", B: "The personnel department.", C: "Yes, they chose Jacob Borgman." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "경영진이 아직 채용 결정을 내렸나요?",
            translation_A: "가장 높은 선반에 두세요.",
            translation_B: "인사부입니다.",
            translation_C: "네, 제이콥 보그먼을 선택했습니다."
        },
        {
            id: "v4-p2-t01-q13",
            text: "Do you want to eat here in our cafeteria or go out?",
            options: { A: "He went there yesterday.", B: "Well, maybe a sandwich.", C: "Lets eat here." },
            correctAnswer: "C",
            questionType: "Choice",
            translation: "여기 구내식당에서 드시겠어요, 아니면 나가서 드시겠어요?",
            translation_A: "그는 어제 그곳에 갔습니다.",
            translation_B: "글쎄요, 아마도 샌드위치요.",
            translation_C: "여기서 먹어요."
        },
        {
            id: "v4-p2-t01-q14",
            text: "Didn't you e-mail the employment contract to Mr. Patel yesterday?",
            options: { A: "Yes, I would agree.", B: "No, I'll send it now.", C: "Check the employee manual." },
            correctAnswer: "B",
            questionType: "Negative",
            translation: "어제 파텔 씨에게 고용 계약서를 이메일로 보내지 않았나요?",
            translation_A: "네, 동의합니다.",
            translation_B: "아니요, 지금 보낼게요.",
            translation_C: "직원 매뉴얼을 확인해 보세요."
        },
        {
            id: "v4-p2-t01-q15",
            text: "Our division's picnic is this Saturday, right?",
            options: { A: "There's a lot of rain in the forecast.", B: "Sure, I like salad.", C: "At the end of this corridor." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "우리 부서 야유회가 이번 주 토요일이죠, 맞나요?",
            translation_A: "일기 예보에 비가 많이 온다고 되어 있어요.",
            translation_B: "물론이죠, 전 샐러드를 좋아해요.",
            translation_C: "이 복도 끝에 있습니다."
        },
        {
            id: "v4-p2-t01-q16",
            text: "Would you like coffee or tea?",
            options: { A: "Just water, please.", B: "For a few dollars more.", C: "A fifteen-minute break." },
            correctAnswer: "A",
            questionType: "Choice",
            translation: "커피로 하시겠어요, 아니면 차로 하시겠어요?",
            translation_A: "그냥 물로 주세요.",
            translation_B: "몇 달러 더 내면요.",
            translation_C: "15분의 휴식 시간이요."
        },
        {
            id: "v4-p2-t01-q17",
            text: "We achieved our sales targets this month.",
            options: { A: "That's excellent news!", B: "A few times a day.", C: "To the end of April." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "우리는 이번 달 매출 목표를 달성했습니다.",
            translation_A: "정말 좋은 소식이네요!",
            translation_B: "하루에 몇 번요.",
            translation_C: "4월 말까지요."
        },
        {
            id: "v4-p2-t01-q18",
            text: "How often do you travel for your job?",
            options: { A: "It turned out well.", B: "Yes, I did find one.", C: "About once a month." },
            correctAnswer: "C",
            questionType: "How",
            translation: "업무상 얼마나 자주 출장을 가시나요?",
            translation_A: "그것은 잘 해결되었습니다.",
            translation_B: "네, 하나 찾았어요.",
            translation_C: "한 달에 한 번 정도요."
        },
        {
            id: "v4-p2-t01-q19",
            text: "We should hike the Wildflower Trail today.",
            options: { A: "This seat is available.", B: "I didn't bring boots.", C: "At the visitors' center." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "오늘 와일드플라워 산책로에서 하이킹을 해야겠어요.",
            translation_A: "이 자리는 비어 있습니다.",
            translation_B: "장화를 안 가져왔어요.",
            translation_C: "방문자 센터에요."
        },
        {
            id: "v4-p2-t01-q20",
            text: "You've booked a hotel in London, haven't you?",
            options: { A: "Very enjoyable, thanks.", B: "He usually takes the train.", C: "Yes, I made a reservation last week." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "런던에 호텔을 예약하셨죠, 그렇죠?",
            translation_A: "매우 즐거웠습니다, 감사합니다.",
            translation_B: "그는 보통 기차를 탑니다.",
            translation_C: "네, 지난주에 예약했습니다."
        },
        {
            id: "v4-p2-t01-q21",
            text: "Are there any tickets left for tonight's concert?",
            options: { A: "It's sold out.", B: "He's a concert violinist.", C: "They already left." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "오늘 밤 공연 티켓이 남아 있나요?",
            translation_A: "매진되었습니다.",
            translation_B: "그는 콘서트 바이올리니스트입니다.",
            translation_C: "그들은 이미 떠났습니다."
        },
        {
            id: "v4-p2-t01-q22",
            text: "Haven't you used this software before?",
            options: { A: "Can I take your order?", B: "I haven't had the chance.", C: "About 40 dollars." },
            correctAnswer: "B",
            questionType: "Negative",
            translation: "무선 소프트웨어를 이전에 사용해 본 적이 없으신가요?",
            translation_A: "주문하시겠어요?",
            translation_B: "그럴 기회가 없었습니다.",
            translation_C: "약 40달러요."
        },
        {
            id: "v4-p2-t01-q23",
            text: "When is the new blender going to be released?",
            options: { A: "Only with fruits and vegetables.", B: "In the kitchen cabinet.", C: "The prototype is still being tested." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "새 블렌더는 언제 출시될 예정인가요?",
            translation_A: "과일과 채소로만요.",
            translation_B: "주방 찬장에요.",
            translation_C: "시제품이 아직 테스트 중입니다."
        },
        {
            id: "v4-p2-t01-q24",
            text: "Who's picking up our clients at the airport?",
            options: { A: "They decided to drive.", B: "At terminal 2.", C: "It's a marketing position." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "공항으로 고객들을 마중 나갈 사람이 누구인가요?",
            translation_A: "그들은 직접 운전해서 오기로 했습니다.",
            translation_B: "2번 터미널에서요.",
            translation_C: "마케팅 직무입니다."
        },
        {
            id: "v4-p2-t01-q25",
            text: "Where are the red roses that came in this morning?",
            options: { A: "About three liters of water.", B: "No, I didn't check out the sale.", C: "I needed some for a large bouquet." },
            correctAnswer: "C",
            questionType: "Where",
            translation: "오늘 아침에 들어온 빨간 장미는 어디 있나요?",
            translation_A: "약 3리터의 물요.",
            translation_B: "아니요, 세일을 확인하지 않았습니다.",
            translation_C: "큰 꽃다발을 만드는 데 몇 송이 필요했습니다."
        },
        {
            id: "v4-p2-t01-q26",
            text: "This film has been nominated for several awards.",
            options: { A: "Why don't we go see it?", B: "After the announcement.", C: "He made a great speech." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "이 영화는 여러 상의 후보에 올랐습니다.",
            translation_A: "그 영화 보러 가는 게 어때요?",
            translation_B: "발표 후에 요.",
            translation_C: "그는 훌륭한 연설을 했습니다."
        },
        {
            id: "v4-p2-t01-q27",
            text: "Who's interested in starting a car pool program?",
            options: { A: "Thanks, but I can't swim.", B: "Clara's already organizing one.", C: "It's a very interesting article." },
            correctAnswer: "B",
            questionType: "Who",
            translation: "카풀 프로그램을 시작하는 데 관심 있는 사람이 누구인가요?",
            translation_A: "감사하지만, 전 수영을 못 해요.",
            translation_B: "클라라가 이미 하나 조직하고 있습니다.",
            translation_C: "매우 흥미로운 기사입니다."
        },
        {
            id: "v4-p2-t01-q28",
            text: "Where will I teach my workshop this month?",
            options: { A: "We just sent an e-mail to all instructors.", B: "Five to seven months.", C: "Yes, it's a beautiful building." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "이번 달에 제가 어디서 워크숍을 가르치게 될까요?",
            translation_A: "방금 모든 강사에게 이메일을 보냈습니다.",
            translation_B: "5개월에서 7개월요.",
            translation_C: "네, 아름다운 건물입니다."
        },
        {
            id: "v4-p2-t01-q29",
            text: "Why are we moving these sweaters to the back of the store?",
            options: { A: "In the new shopping mall.", B: "Yes, they come in other colors.", C: "Our spring merchandise is arriving soon." },
            correctAnswer: "C",
            questionType: "Why",
            translation: "왜 이 스웨터들을 매장 뒤쪽으로 옮기고 있나요?",
            translation_A: "새 쇼핑몰에요.",
            translation_B: "네, 다른 색상으로도 나옵니다.",
            translation_C: "봄 상품이 곧 도착할 예정이거든요."
        },
        {
            id: "v4-p2-t01-q30",
            text: "Would you be interested in working on some of these contracts?",
            options: { A: "Thank you for meeting me.", B: "A contact lens prescription.", C: "I have very limited time." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "이 계약서들 중 몇 개를 검토하는 데 관심이 있으신가요?",
            translation_A: "함께해주셔서 감사합니다.",
            translation_B: "콘택트렌즈 처방전입니다.",
            translation_C: "시간이 매우 한정되어 있습니다."
        },
        {
            id: "v4-p2-t01-q31",
            text: "What type of job are you looking for?",
            options: { A: "No, at ten A.M.", B: "I really like working with computers.", C: "Just a résumé is needed." },
            correctAnswer: "B",
            questionType: "What",
            translation: "어떤 종류의 일을 찾고 계신가요?",
            translation_A: "아니요, 오전 10시에요.",
            translation_B: "저는 컴퓨터와 관련된 일을 하는 것을 정말 좋아합니다.",
            translation_C: "그냥 이력서만 있으면 됩니다."
        }
    ]
};
