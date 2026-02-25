import { Part2TestSet } from '../../types';

export const test3Data: Part2TestSet = {
    testId: 3,
    vol: 4,
    title: "Part 2 Real Test 03",
    questions: [
        {
            id: "v4-p2-t03-q7",
            text: "Why is there no flour on the shelf?",
            options: { A: "Because it's out of stock.", B: "Those roses smell nice.", C: "No, the other cake." },
            correctAnswer: "A",
            questionType: "Why",
            translation: "왜 선반에 밀가루가 없나요?",
            translation_A: "재고가 다 떨어졌기 때문입니다.",
            translation_B: "그 장미들은 향기가 좋네요.",
            translation_C: "아니요, 다른 케이크요."
        },
        {
            id: "v4-p2-t03-q8",
            text: "When will the catering company arrive?",
            options: { A: "At four o'clock.", B: "Thats a delicious flavor.", C: "Many vegetarian options." },
            correctAnswer: "A",
            questionType: "When",
            translation: "출장 뷔페 업체가 언제 도착할까요?",
            translation_A: "4시에요.",
            translation_B: "정말 맛있는 맛이네요.",
            translation_C: "많은 채식 주의자용 선택지들이오."
        },
        {
            id: "v4-p2-t03-q9",
            text: "When's the meeting scheduled to start?",
            options: { A: "At a networking event.", B: "I started this job six years ago.", C: "Right after lunch." },
            correctAnswer: "C",
            questionType: "When",
            translation: "회의가 언제 시작될 예정인가요?",
            translation_A: "인맥 형성 행사에서요.",
            translation_B: "저는 6년 전에 이 일을 시작했습니다.",
            translation_C: "점심 식사 바로 뒤에요."
        },
        {
            id: "v4-p2-t03-q10",
            text: "How much will the repairs cost?",
            options: { A: "I have two pairs of shoes.", B: "Around 200 dollars.", C: "The restaurant downtown." },
            correctAnswer: "B",
            questionType: "How",
            translation: "수리비가 얼마나 들까요?",
            translation_A: "저는 신발 두 켤레가 있습니다.",
            translation_B: "약 200달러 정도요.",
            translation_C: "시내에 있는 식당에요."
        },
        {
            id: "v4-p2-t03-q11",
            text: "You went to the dentist this morning, didn't you?",
            options: { A: "Oh, I've already had breakfast.", B: "Yes, for an annual checkup.", C: "Let's take the bus." },
            correctAnswer: "B",
            questionType: "Tag",
            translation: "오늘 아침에 치과에 다녀오셨죠, 그렇죠?",
            translation_A: "오, 저는 이미 아침을 먹었습니다.",
            translation_B: "네, 연례 검진을 위해서요.",
            translation_C: "버스를 탑시다."
        },
        {
            id: "v4-p2-t03-q12",
            text: "Where should we put the new printer?",
            options: { A: "In the corner by the stairs.", B: "The third page of the document.", C: "A reusable ink cartridge." },
            correctAnswer: "A",
            questionType: "Where",
            translation: "새 프린터를 어디에 둘까요?",
            translation_A: "계단 옆 구석에요.",
            translation_B: "문서의 세 번째 페이지요.",
            translation_C: "재사용 가능한 잉크 카트리지오."
        },
        {
            id: "v4-p2-t03-q13",
            text: "What type of plant do you have in your office?",
            options: { A: "Whenever I sit at my desk.", B: "Thanks—I just bought it.", C: "One that doesn't require much water." },
            correctAnswer: "C",
            questionType: "What",
            translation: "사무실에 어떤 종류의 식물을 기르고 계신가요?",
            translation_A: "제 책상에 앉을 때마다요.",
            translation_B: "감사합니다—방금 샀어요.",
            translation_C: "물을 많이 주지 않아도 되는 식물이오."
        },
        {
            id: "v4-p2-t03-q14",
            text: "There was a sale at the furniture store.",
            options: { A: "No, it wasn't in storage.", B: "Did you buy anything?", C: "Some old receipts." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "가구점에서 세일을 하더라고요.",
            translation_A: "아니요, 창고에 없었습니다.",
            translation_B: "뭐 좀 사셨어요?",
            translation_C: "오래된 영수정 몇 장요."
        },
        {
            id: "v4-p2-t03-q15",
            text: "Can you show me how to submit a tech help ticket?",
            options: { A: "Let me send you the link.", B: "A broken power cable.", C: "No, over ten minutes." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "기술 지원 요청서를 어떻게 제출하는지 보여주실 수 있나요?",
            translation_A: "링크를 보내드릴게요.",
            translation_B: "고장 난 전원 케이블요.",
            translation_C: "아니요, 10분 넘게요."
        },
        {
            id: "v4-p2-t03-q16",
            text: "Where is the power button on this device?",
            options: { A: "I've never used that model before.", B: "Ten euros per hour.", C: "We charge more for color photographs." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "이 기기의 전원 버튼이 어디에 있나요?",
            translation_A: "저는 전에 그 모델을 사용해 본 적이 없습니다.",
            translation_B: "시간당 10유로요.",
            translation_C: "컬러 사진에 대해서는 비용을 더 청구합니다."
        },
        {
            id: "v4-p2-t03-q17",
            text: "Do you want to take a walk now, or would later be better?",
            options: { A: "A nearby lake.", B: "I'm free to walk now.", C: "No, I don't use a fitness tracker." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "지금 산책하고 싶으세요, 아니면 나중에 하는 게 더 좋을까요?",
            translation_A: "근처 호수요.",
            translation_B: "지금 산책할 수 있어요.",
            translation_C: "아니요, 저는 피트니스 추적기를 사용하지 않습니다."
        },
        {
            id: "v4-p2-t03-q18",
            text: "I ordered some new equipment for the factory.",
            options: { A: "The news program on Channel Ten.", B: "Great—I can't wait to use it.", C: "The car dealership." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "공장용 새 장비를 몇 가지 주문했습니다.",
            translation_A: "10번 채널의 뉴스 프로그램요.",
            translation_B: "좋네요—빨리 사용해 보고 싶어요.",
            translation_C: "자동차 대리점요."
        },
        {
            id: "v4-p2-t03-q19",
            text: "There's a nice place to rent on Mercer Street.",
            options: { A: "I just renewed my current lease.", B: "It was a great show.", C: "A standard rental application." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "머서 가에 임대하기 좋은 곳이 있어요.",
            translation_A: "방금 현재 임대 계약을 갱신했습니다.",
            translation_B: "정말 멋진 공연이었어요.",
            translation_C: "표준 임대 신청서요."
        },
        {
            id: "v4-p2-t03-q20",
            text: "Is the heating system working?",
            options: { A: "Yes, that's my Web site.", B: "A five-kilometer run.", C: "I just called maintenance." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "난방 시스템이 작동 중인가요?",
            translation_A: "네, 제 웹사이트입니다.",
            translation_B: "5킬로미터 달리기요.",
            translation_C: "방금 유지보수 팀에 전화했습니다."
        },
        {
            id: "v4-p2-t03-q21",
            text: "Isn't the roadwork in front of city hall finished yet?",
            options: { A: "I just finished my conference presentation.", B: "A lot of traffic in the evening.", C: "No, they still have another month to go." },
            correctAnswer: "C",
            questionType: "Negative",
            translation: "시청 앞 도로 공사가 아직 안 끝났나요?",
            translation_A: "방금 컨퍼런스 발표를 마쳤습니다.",
            translation_B: "저녁에 교통량이 많네요.",
            translation_C: "아니요, 아직 한 달이나 더 남았어요."
        },
        {
            id: "v4-p2-t03-q22",
            text: "Who will lead the new-employee training today?",
            options: { A: "we're using a recorded video.", B: "yes, right after lunch.", C: "classroom 124" },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "오늘 누가 신입 사원 교육을 진행합니까?",
            translation_A: "녹화된 비디오를 사용할 예정입니다.",
            translation_B: "네, 점심 식사 바로 뒤에요.",
            translation_C: "124번 강의실요."
        },
        {
            id: "v4-p2-t03-q23",
            text: "Is the safety inspection scheduled for this month or next month?",
            options: { A: "I thought I saved the file.", B: "The factory supervisor.", C: "It's this Wednesday." },
            correctAnswer: "C",
            questionType: "Choice",
            translation: "안전 점검이 이번 달인가요, 다음 달인가요?",
            translation_A: "파일을 저장했다고 생각했습니다.",
            translation_B: "공장 감독관입니다.",
            translation_C: "이번 주 수요일입니다."
        },
        {
            id: "v4-p2-t03-q24",
            text: "When is the harvest festival taking place?",
            options: { A: "It's a week from tomorrow.", B: "Sure, I can take it.", C: "The park next to the art museum." },
            correctAnswer: "A",
            questionType: "When",
            translation: "추수 축제가 언제 열리나요?",
            translation_A: "내일부터 일주일 뒤에요.",
            translation_B: "물론이죠, 제가 가져갈게요.",
            translation_C: "미술관 옆 공원에요."
        },
        {
            id: "v4-p2-t03-q25",
            text: "Was your new laptop expensive?",
            options: { A: "Do you have a new password?", B: "I had a discount coupon.", C: "On top of the cabinet." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "새 노트북 비쌌나요?",
            translation_A: "새 비밀번호가 있나요?",
            translation_B: "저에게 할인 쿠폰이 있었어요.",
            translation_C: "비품장 위에요."
        },
        {
            id: "v4-p2-t03-q26",
            text: "Why don't we go on our camping trip next weekend?",
            options: { A: "Yes, that table lamp is quite nice.", B: "Should we go left or right?", C: "I have a performance scheduled with my band." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "다음 주말에 캠핑 여행을 가는 게 어때요?",
            translation_A: "네, 그 탁상 전등 정말 좋네요.",
            translation_B: "왼쪽으로 가야 하나요, 오른쪽으로 가야 하나요?",
            translation_C: "제 밴드와 공연이 예정되어 있습니다."
        },
        {
            id: "v4-p2-t03-q27",
            text: "The workshop for this afternoon was postponed, wasn't it?",
            options: { A: "At the post office.", B: "I haven't checked my e-mail.", C: "A ticket for two o'clock, please." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "오늘 오후 워크숍이 연기되었죠, 그렇죠?",
            translation_A: "우체국에서요.",
            translation_B: "이메일을 확인하지 못했습니다.",
            translation_C: "2시 티켓 한 장 주세요."
        },
        {
            id: "v4-p2-t03-q28",
            text: "How were our production figures last month?",
            options: { A: "they produce electric cars.", B: "nice o'clock in the morning.", C: "we were closed down for a week." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "지난달 우리 생산 수치가 어땠나요?",
            translation_A: "그들은 전기차를 생산합니다.",
            translation_B: "오전 9시 정각에요.",
            translation_C: "일주일 동안 문을 닫았었습니다."
        },
        {
            id: "v4-p2-t03-q29",
            text: "When can I see the speech therapist?",
            options: { A: "a one-hour session.", B: "just a microphone.", C: "how about tomorrow afternoon?" },
            correctAnswer: "C",
            questionType: "When",
            translation: "언어 치료사를 언제 만날 수 있을까요?",
            translation_A: "한 시간 세션입니다.",
            translation_B: "그냥 마이크입니다.",
            translation_C: "내일 오후는 어떠세요?"
        },
        {
            id: "v4-p2-t03-q30",
            text: "Aren't you picking up the clients from the airport?",
            options: { A: "a product demonstration.", B: "no, I believe Tomoko is doing that.", C: "he prefers an aisle seat." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "공항에서 고객들을 마중 나가는 거 아니셨나요?",
            translation_A: "제품 시연요.",
            translation_B: "아니요, 제 생각엔 토모코 씨가 하고 있는 것 같습니다.",
            translation_C: "그는 통로 쪽 좌석을 선호합니다."
        },
        {
            id: "v4-p2-t03-q31",
            text: "How was your morning client meeting?",
            options: { A: "it's great to meet you", B: "no, over in conference room two", C: "the contact is now officially signed" },
            correctAnswer: "C",
            questionType: "How",
            translation: "오늘 아침 고객 회의는 어땠나요?",
            translation_A: "만나서 반갑습니다.",
            translation_B: "아니요, 2번 회의실에서요.",
            translation_C: "이제 공식적으로 계약이 체결되었습니다."
        }
    ]
};
