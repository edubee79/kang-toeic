import { Part2TestSet } from '../../types';

export const test3Data: Part2TestSet = {
    testId: 3,
    vol: 3,
    title: "Part 2 Real Test 03",
    questions: [
        {
            id: "v3-p2-t03-q7",
            text: "Where is the closest coffee shop?",
            options: { A: "From nine until five.", B: "It's down the street.", C: "Just a few office supplies." },
            correctAnswer: "B",
            questionType: "Where",
            translation: "가장 가까운 커피숍이 어디인가요?",
            translation_A: "9시부터 5시까지요.",
            translation_B: "거리 아래쪽에 있습니다.",
            translation_C: "사무용품 몇 가지만요."
        },
        {
            id: "v3-p2-t03-q8",
            text: "Would you like a morning or an afternoon appointment?",
            options: { A: "The afternoon, please.", B: "She was at her annual checkup.", C: "I can bring in the paperwork." },
            correctAnswer: "A",
            questionType: "Choice",
            translation: "오전 예약과 오후 예약 중 어느 것을 원하시나요?",
            translation_A: "오후로 해주세요.",
            translation_B: "그녀는 연례 검진을 받고 있었습니다.",
            translation_C: "서류를 가져올 수 있습니다."
        },
        {
            id: "v3-p2-t03-q9",
            text: "Are you having trouble with your Internet connection, too?",
            options: { A: "He'll take a connecting flight to Paris.", B: "We should double our order.", C: "Yes, I can't access anything online." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "당신도 인터넷 연결에 문제가 있나요?",
            translation_A: "그는 파리로 가는 연결편 비행기를 탈 것입니다.",
            translation_B: "주문량을 두 배로 늘려야 합니다.",
            translation_C: "네, 온라인상에서 아무것도 접속할 수 없네요."
        },
        {
            id: "v3-p2-t03-q10",
            text: "Who's that sitting in the lobby?",
            options: { A: "That's the new summer intern.", B: "The armchair is comfortable.", C: "My hobby's photography." },
            correctAnswer: "A",
            questionType: "Who",
            translation: "로비에 앉아 있는 저 사람은 누구인가요?",
            translation_A: "새로운 여름 인턴입니다.",
            translation_B: "그 안락의자는 편안합니다.",
            translation_C: "제 취미는 사진 촬영입니다."
        },
        {
            id: "v3-p2-t03-q11",
            text: "What did Simone say about the project proposal?",
            options: { A: "She said she liked it a lot.", B: "The other projector's broken.", C: "Right, I heard about them." },
            correctAnswer: "A",
            questionType: "What",
            translation: "시몬 씨가 프로젝트 제안서에 대해 뭐라고 했나요?",
            translation_A: "그녀는 그것이 아주 마음에 든다고 했습니다.",
            translation_B: "다른 프로젝터가 고장 났습니다.",
            translation_C: "맞아요, 그들에 대해 들었습니다."
        },
        {
            id: "v3-p2-t03-q12",
            text: "Would you like a free ticket to tonight's play?",
            options: { A: "Which team won?", B: "A short intermission.", C: "No, thanks, I have plans." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "오늘 밤 연극 무료 티켓을 원하시나요?",
            translation_A: "어느 팀이 이겼나요?",
            translation_B: "짧은 휴식 시간요.",
            translation_C: "아니요, 괜찮습니다. 계획이 있습니다."
        },
        {
            id: "v3-p2-t03-q13",
            text: "Isn't that new restaurant supposed to open soon?",
            options: { A: "Yes, in a few more weeks.", B: "No, I prefer Italian food.", C: "A great lunch menu." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "그 새 식당이 곧 문을 열기로 되어 있지 않나요?",
            translation_A: "네, 몇 주 후에 요.",
            translation_B: "아니요, 저는 이탈리아 음식을 더 좋아합니다.",
            translation_C: "멋진 점심 메뉴네요."
        },
        {
            id: "v3-p2-t03-q14",
            text: "Why is the flight delayed?",
            options: { A: "The prices are all displayed.", B: "Because we're waiting for a storm to pass.", C: "Two hours and forty-five minutes." },
            correctAnswer: "B",
            questionType: "Why",
            translation: "비행기가 왜 지연되나요?",
            translation_A: "가격이 모두 표시되어 있습니다.",
            translation_B: "폭풍이 지나가기를 기다리고 있기 때문입니다.",
            translation_C: "2시간 45분요."
        },
        {
            id: "v3-p2-t03-q15",
            text: "Who's organizing the bowling league?",
            options: { A: "It starts next spring.", B: "Stack the bowls on top of the plates.", C: "By alphabetical order." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "볼링 리그를 누가 기획하고 있나요?",
            translation_A: "내년 봄에 시작합니다.",
            translation_B: "접시 위에 보울(그릇)들을 쌓으세요.",
            translation_C: "알파벳 순으로요."
        },
        {
            id: "v3-p2-t03-q16",
            text: "Did you submit the expense reports?",
            options: { A: "There's a lot of data to review.", B: "The team we saw last week.", C: "That's not as expensive as we thought." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "지출 보고서를 제출하셨나요?",
            translation_A: "검토해야 할 데이터가 많습니다.",
            translation_B: "우리가 지난주에 봤던 팀요.",
            translation_C: "생각만큼 비싸지 않네요."
        },
        {
            id: "v3-p2-t03-q17",
            text: "Aren't we all getting new business cards?",
            options: { A: "No, you have to request them.", B: "An upcoming conference.", C: "I just bought a birthday card." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "우리 모두 새 명함을 받는 거 아니었나요?",
            translation_A: "아니요, 당신이 직접 신청해야 합니다.",
            translation_B: "다가오는 컨퍼런스요.",
            translation_C: "방금 생일 카드를 샀습니다."
        },
        {
            id: "v3-p2-t03-q18",
            text: "How many people did you interview?",
            options: { A: "The company newsletter.", B: "I've prepared some questions.", C: "Three candidates." },
            correctAnswer: "C",
            questionType: "How",
            translation: "몇 명이나 면접을 보셨나요?",
            translation_A: "회사 소식지입니다.",
            translation_B: "질문 몇 가지를 준비했습니다.",
            translation_C: "세 명의 후보자요."
        },
        {
            id: "v3-p2-t03-q19",
            text: "Sales of our strawberry ice cream rose by ten percent last month.",
            options: { A: "Yes, it was very cold.", B: "Get the fruit from Fresh Fruits Farms.", C: "I had no idea it was so popular." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "우리 딸기 아이스크림 매출이 지난달에 10퍼센트 상승했습니다.",
            translation_A: "네, 매우 추웠습니다.",
            translation_B: "프레시 프루츠 농장에서 과일을 가져오세요.",
            translation_C: "그렇게 인기가 많은 줄 몰랐네요."
        },
        {
            id: "v3-p2-t03-q20",
            text: "Can you help me log on to my computer?",
            options: { A: "Sorry, you'll need to call Technical Support.", B: "A password with both letters and numbers.", C: "That's a useful software program." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "컴퓨터 로그인을 도와주실 수 있나요?",
            translation_A: "죄송하지만 기술 지원 부서에 전화하셔야겠어요.",
            translation_B: "문자와 숫자가 모두 포함된 비밀번호요.",
            translation_C: "유용한 소프트웨어 프로그램이네요."
        },
        {
            id: "v3-p2-t03-q21",
            text: "What time do you think we'll leave the zoo?",
            options: { A: "Please go through the west gate.", B: "Fifteen dollars for adults.", C: "Some of the exhibit lines are quite long." },
            correctAnswer: "C",
            questionType: "When",
            translation: "동물원에서 몇 시쯤 떠날 것 같으세요?",
            translation_A: "서쪽 문으로 가주세요.",
            translation_B: "성인 15달러요.",
            translation_C: "전시 줄이 꽤 기네요."
        },
        {
            id: "v3-p2-t03-q22",
            text: "The artist has signed the paintings, hasn't she?",
            options: { A: "The opening ceremony.", B: "On both walls, please.", C: "Yes, she did." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "화가가 그림에 서명을 했죠, 그렇죠?",
            translation_A: "개회식입니다.",
            translation_B: "양쪽 벽에 부탁드려요.",
            translation_C: "네, 했습니다."
        },
        {
            id: "v3-p2-t03-q23",
            text: "How do you like traveling by train?",
            options: { A: "I'm looking for a fitness trainer.", B: "Well, you know I hate flying.", C: "A round-trip ticket to Busan." },
            correctAnswer: "B",
            questionType: "How",
            translation: "기차 여행은 어떠세요?",
            translation_A: "피트니스 트레이너를 찾고 있습니다.",
            translation_B: "글쎄요, 제가 비행기 타는 거 싫어하는 거 아시잖아요.",
            translation_C: "부산행 왕복 티켓요."
        },
        {
            id: "v3-p2-t03-q24",
            text: "Would you take charge of planning Pablo's retirement party?",
            options: { A: "Blue, red, and yellow.", B: "Turn the volume up please.", C: "What's the budget?" },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "파블로 씨의 은퇴 파티 기획을 맡아주시겠어요?",
            translation_A: "파란색, 빨간색, 노란색요.",
            translation_B: "볼륨을 좀 높여주세요.",
            translation_C: "예산이 얼마인가요?"
        },
        {
            id: "v3-p2-t03-q25",
            text: "You hired the new assistant director, didn't you?",
            options: { A: "A wonderful new film.", B: "They were running a bit late.", C: "I haven't even met her yet..." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "새로운 부국장을 채용하셨죠, 그렇지 않나요?",
            translation_A: "멋진 새 영화네요.",
            translation_B: "그들은 조금 늦게 도착했습니다.",
            translation_C: "전 그녀를 아직 만나보지도 못했는데요..."
        },
        {
            id: "v3-p2-t03-q26",
            text: "Should we put the advertisement on the first page or the last page?",
            options: { A: "The first page, definitely.", B: "He bought a newspaper.", C: "Last year in August." },
            correctAnswer: "A",
            questionType: "Choice",
            translation: "광고를 첫 페이지에 실을까요, 아니면 마지막 페이지에 실을까요?",
            translation_A: "단연 첫 페이지죠.",
            translation_B: "그는 신문을 샀습니다.",
            translation_C: "지난해 8월에요."
        },
        {
            id: "v3-p2-t03-q27",
            text: "I've finished the building inspection.",
            options: { A: "To my work e-mail address.", B: "Did you find any problems?", C: "On the seventh floor." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "건물 점검을 마쳤습니다.",
            translation_A: "제 업무용 이메일 주소로요.",
            translation_B: "문제점이 발견되었나요?",
            translation_C: "7층에요."
        },
        {
            id: "v3-p2-t03-q28",
            text: "When is Pierre scheduled to pick up the steel pipe?",
            options: { A: "No, I'm sorry about that.", B: "That should be interesting.", C: "Well, the truck is gone." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "피에르 씨가 철제 파이프를 언제 가져가기로 되어 있나요?",
            translation_A: "아니요, 죄송합니다.",
            translation_B: "흥미롭겠네요.",
            translation_C: "글쎄요, 트럭이 이미 떠났는데요."
        },
        {
            id: "v3-p2-t03-q29",
            text: "Why am I not authorized to download this software?",
            options: { A: "You'd better check with your manager.", B: "Two million so far.", C: "Is he a famous author?" },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "왜 제가 이 소프트웨어를 다운로드할 권한이 없나요?",
            translation_A: "매니저님께 확인해 보시는 게 좋겠습니다.",
            translation_B: "지금까지 200만요.",
            translation_C: "그가 유명한 작가인가요?"
        },
        {
            id: "v3-p2-t03-q30",
            text: "Where do you park when you drive to Dr. Li's office?",
            options: { A: "An annual medical checkup.", B: "She thought it was the best treatment.", C: "It's more convenient to take the bus." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "리 박사님 사무실에 차를 타고 갈 때 어디에 주차하시나요?",
            translation_A: "연례 건강검진요.",
            translation_B: "그녀는 그것이 최선의 치료법이라고 생각했습니다.",
            translation_C: "버스를 타고 가는 게 더 편해요."
        },
        {
            id: "v3-p2-t03-q31",
            text: "Aren't we getting a digital sound system?",
            options: { A: "She recently promoted to manager!", B: "You know how long the approval process takes.", C: "Because the store closes early tonight." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "우리 디지털 음향 시스템을 도입하지 않나요?",
            translation_A: "그녀는 최근에 매니저로 승진했습니다!",
            translation_B: "승인 과정이 얼마나 걸리는지 아시잖아요.",
            translation_C: "오늘 밤 가게가 일찍 문을 닫기 때문입니다."
        }
    ]
};
