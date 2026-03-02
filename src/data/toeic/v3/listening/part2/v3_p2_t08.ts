import { Part2TestSet } from '../../types';

export const test8Data: Part2TestSet = {
    testId: 8,
    vol: 3,
    title: "Part 2 Real Test 08",
    questions: [
        {
            id: "v3-p2-t08-q7",
            text: "Who is covering Maria's shift at the clinic on Saturday?",
            options: { A: "Yes, click on the check box.", B: "Cover the pot on the stove.", C: "Alexi is going to do it." },
            correctAnswer: "C",
            questionType: "Who",
            translation: "토요일에 병원에서 마리아 씨를 대신해 누가 근무하나요?",
            translation_A: "네, 체크박스를 클릭하세요.",
            translation_B: "가스레인지 위의 냄비를 덮으세요.",
            translation_C: "알렉시 씨가 하기로 했습니다."
        },
        {
            id: "v3-p2-t08-q8",
            text: "Would you like to meet the new clients?",
            options: { A: "It was made of wood.", B: "The new setup process.", C: "Sure, I have some time right now." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "새로운 고객들을 만나보시겠어요?",
            translation_A: "나무로 만들어졌습니다.",
            translation_B: "새로운 설정 과정요.",
            translation_C: "물론이죠, 지금 시간이 좀 있습니다."
        },
        {
            id: "v3-p2-t08-q9",
            text: "Here's my presentation proposal.",
            options: { A: "About an hour ago.", B: "Thanks, I'll look over it shortly.", C: "Did you like your present?" },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "여기 제 발표 제안서입니다.",
            translation_A: "약 한 시간 전예요.",
            translation_B: "감사합니다, 곧 검토해 볼게요.",
            translation_C: "선물이 마음에 드셨나요?"
        },
        {
            id: "v3-p2-t08-q10",
            text: "Do the city buses stop in the front or the back of the city hall building?",
            options: { A: "A city council meeting.", B: "There's a stop in the front.", C: "A monthly bus pass." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "시내버스가 시청 건물 앞쪽에 서나요, 아니면 뒤쪽에 서나요?",
            translation_A: "시의회 회의요.",
            translation_B: "앞쪽에 정류장이 있습니다.",
            translation_C: "버스 한 달 정기권요."
        },
        {
            id: "v3-p2-t08-q11",
            text: "Why is the ceremony being moved indoors?",
            options: { A: "It was nice seeing her there.", B: "Because there's rain in the forecast.", C: "I'll hold the door for you." },
            correctAnswer: "B",
            questionType: "Why",
            translation: "왜 기념식이 실내로 옮겨졌나요?",
            translation_A: "거기서 그녀를 봐서 좋았습니다.",
            translation_B: "일기 예보에 비 소식이 있기 때문입니다.",
            translation_C: "제가 문을 잡아드릴게요."
        },
        {
            id: "v3-p2-t08-q12",
            text: "I just love the taste of coffee, don't you?",
            options: { A: "About five minutes ago.", B: "A teaspoon of sugar.", C: "I always drink tea." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "저는 커피 맛이 정말 좋은데, 당신은 안 그러신가요?",
            translation_A: "약 5분 전예요.",
            translation_B: "설탕 한 티스푼요.",
            translation_C: "전 항상 차를 마셔요."
        },
        {
            id: "v3-p2-t08-q13",
            text: "Are you interested in a freelance translation job?",
            options: { A: "An interest-free loan.", B: "Please don't touch the walls.", C: "No, I'm too busy these days." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "프리랜서 번역직에 관심이 있으신가요?",
            translation_A: "무이자 대출요.",
            translation_B: "벽을 만지지 마세요.",
            translation_C: "아니요, 요즘 너무 바쁩니다."
        },
        {
            id: "v3-p2-t08-q14",
            text: "Could you send me this month's maintenance schedule?",
            options: { A: "I'd be happy to.", B: "No, he left in January.", C: "You should use the stairs." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "이번 달 유지보수 일정을 보내주실 수 있나요?",
            translation_A: "기꺼이 그러겠습니다.",
            translation_B: "아니요, 그는 1월에 떠났습니다.",
            translation_C: "계단을 이용하셔야 합니다."
        },
        {
            id: "v3-p2-t08-q15",
            text: "Doesn't our firm reimburse travel expenses?",
            options: { A: "Yes, but only flight and hotel.", B: "No, Friday doesn't work.", C: "It's arriving at Gate 206." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "저희 회사는 출장비를 환급해 주지 않나요?",
            translation_A: "해주긴 하지만, 항공료와 호텔비만 가능합니다.",
            translation_B: "아니요, 금요일은 안 됩니다.",
            translation_C: "206번 게이트에 도착하고 있습니다."
        },
        {
            id: "v3-p2-t08-q16",
            text: "I need to stop at the pharmacy on my way to work.",
            options: { A: "It's a large dairy farm.", B: "Her résumé was very impressive.", C: "Oh, could you buy something for me?" },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "출근하는 길에 약국에 들러야 해요.",
            translation_A: "큰 낙농장입니다.",
            translation_B: "그녀의 이력서는 매우 인상적이었습니다.",
            translation_C: "오, 제 것도 좀 사다 주실 수 있나요?"
        },
        {
            id: "v3-p2-t08-q17",
            text: "Why are we meeting to discuss the budget?",
            options: { A: "Have you seen last quarter's sales figures?", B: "Next Tuesday at two o'clock.", C: "I'd like to, but it's expensive." },
            correctAnswer: "A",
            questionType: "Why",
            translation: "예산을 논의하기 위해 왜 만나는 거죠?",
            translation_A: "지난 분기 매출 수치를 보셨나요?",
            translation_B: "다음 주 화요일 2시에요.",
            translation_C: "그러고 싶지만, 비싸네요."
        },
        {
            id: "v3-p2-t08-q18",
            text: "When does your flight land in Los Angeles?",
            options: { A: "Yes, it's finished.", B: "I'm flying into San Francisco.", C: "They bought a plot of land." },
            correctAnswer: "B",
            questionType: "When",
            translation: "비행기가 로스앤젤레스에 언제 착륙하나요?",
            translation_A: "네, 끝났습니다.",
            translation_B: "전 샌프란시스코로 갑니다.",
            translation_C: "그들은 땅 한 필지를 샀습니다."
        },
        {
            id: "v3-p2-t08-q19",
            text: "How do I sign up for the accounting webinar?",
            options: { A: "You can do that online.", B: "No, it's not too far.", C: "I like the Web design." },
            correctAnswer: "A",
            questionType: "How",
            translation: "회계 웨비나 신청은 어떻게 하나요?",
            translation_A: "온라인으로 하실 수 있습니다.",
            translation_B: "아니요, 그리 멀지 않습니다.",
            translation_C: "웹 디자인이 마음에 드네요."
        },
        {
            id: "v3-p2-t08-q20",
            text: "What kind of food should I bring to the company picnic?",
            options: { A: "They hired a catering service this year.", B: "Yes, Barbara will be at the meeting.", C: "A park on Grand Street." },
            correctAnswer: "A",
            questionType: "What",
            translation: "회사 야외 소풍에 어떤 음식을 가져가야 할까요?",
            translation_A: "올해는 출장 뷔페 서비스를 고용했습니다.",
            translation_B: "네, 바바라 씨가 회의에 참석할 것입니다.",
            translation_C: "그랜드 가에 있는 공원요."
        },
        {
            id: "v3-p2-t08-q21",
            text: "Where did you put my copy of our project proposal?",
            options: { A: "Actually, only the charts are in color.", B: "It's in the file cabinet.", C: "The company newsletter." },
            correctAnswer: "B",
            questionType: "Where",
            translation: "제 프로젝트 제안서 사본을 어디에 두셨나요?",
            translation_A: "사실, 차트만 컬러로 되어 있습니다.",
            translation_B: "파일 캐비닛 안에 있습니다.",
            translation_C: "회사 소식지입니다."
        },
        {
            id: "v3-p2-t08-q22",
            text: "How many more deliveries are we expecting today?",
            options: { A: "It was a great turnout.", B: "I can wait for them if you need to leave.", C: "No, it should be less than that." },
            correctAnswer: "B",
            questionType: "How",
            translation: "오늘 배송이 얼마나 더 올 예정인가요?",
            translation_A: "참석 인원이 아주 많았습니다.",
            translation_B: "가셔야 하면 제가 대신 기다려 드릴 수 있어요.",
            translation_C: "아니요, 그것보다 작을 것입니다."
        },
        {
            id: "v3-p2-t08-q23",
            text: "When are we handing out the employee survey?",
            options: { A: "On a scale of one to ten.", B: "Have a seat in the front row.", C: "Probably at the end of the quarter." },
            correctAnswer: "C",
            questionType: "When",
            translation: "직원 설문조사지는 언제 배부하나요?",
            translation_A: "1부터 10까지의 척도로 요.",
            translation_B: "앞줄에 앉으세요.",
            translation_C: "아마 분기 말에 할 것입니다."
        },
        {
            id: "v3-p2-t08-q24",
            text: "Would you like me to send you samples of the fabrics we have available?",
            options: { A: "The hotel room is available.", B: "They built a brick wall around the garden.", C: "I saw the pictures on your Web site." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "사용 가능한 원단 샘플을 보내드릴까요?",
            translation_A: "호텔 객실이 이용 가능합니다.",
            translation_B: "정원 주변에 벽돌 담을 쌓았습니다.",
            translation_C: "웹사이트에서 사진을 봤습니다."
        },
        {
            id: "v3-p2-t08-q25",
            text: "Her contract ends next month, doesn't it?",
            options: { A: "I'm sure it will get renewed.", B: "Please sign at the bottom.", C: "The employee orientation." },
            correctAnswer: "A",
            questionType: "Tag",
            translation: "그녀의 계약이 다음 달에 끝나죠, 그렇지 않나요?",
            translation_A: "분명 갱신될 거예요.",
            translation_B: "맨 아래에 서명해 주세요.",
            translation_C: "신입 사원 오리엔테이션요."
        },
        {
            id: "v3-p2-t08-q26",
            text: "Should we open the store at eight thirty or nine on Saturday?",
            options: { A: "Since it's a holiday, let's open later.", B: "I've never been there before.", C: "That sign on the door." },
            correctAnswer: "A",
            questionType: "Choice",
            translation: "토요일에 가게 문을 8시 30분에 열까요, 아니면 9시에 열까요?",
            translation_A: "공휴일이니까 더 늦게 열도록 합시다.",
            translation_B: "전에 거기 가본 적이 없습니다.",
            translation_C: "문에 붙어 있는 저 표지판요."
        },
        {
            id: "v3-p2-t08-q27",
            text: "What kinds of audiobooks do you listen to?",
            options: { A: "Could you turn the volume down please?", B: "Yes, an auto repair shop.", C: "I like mystery novels." },
            correctAnswer: "C",
            questionType: "What",
            translation: "어떤 종류의 오디오북을 들으시나요?",
            translation_A: "볼륨을 좀 줄여주실 수 있나요?",
            translation_B: "네, 자동차 수리점이오.",
            translation_C: "전 추리 소설을 좋아합니다."
        },
        {
            id: "v3-p2-t08-q28",
            text: "How long will it take to receive a confirmation e-mail?",
            options: { A: "It shouldn't take more than a few minutes.", B: "The construction noise is getting worse.", C: "The color will fade in direct sunlight." },
            correctAnswer: "A",
            questionType: "How",
            translation: "확인 이메일을 받는 데 얼마나 걸릴까요?",
            translation_A: "몇 분 이상 걸리지 않을 것입니다.",
            translation_B: "공사 소음이 점점 심해지네요.",
            translation_C: "직사광선을 받으면 색이 바랠 거예요."
        },
        {
            id: "v3-p2-t08-q29",
            text: "Where should I have the workers stack the cases when they arrive?",
            options: { A: "Tomorrow at the latest.", B: "I'll be there to supervise.", C: "It was a challenging legal case." },
            correctAnswer: "B",
            questionType: "Where",
            translation: "상자들이 도착하면 작업자들에게 어디에 쌓아두라고 할까요?",
            translation_A: "늦어도 내일까지요.",
            translation_B: "제가 감독하러 그곳에 있을 거예요.",
            translation_C: "어려운 법적 사건이었습니다."
        },
        {
            id: "v3-p2-t08-q30",
            text: "Would offering more specialty breads attract more customers?",
            options: { A: "Please turn off the lights.", B: "No thanks, I've already eaten.", C: "That could get expensive." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "특색 있는 빵을 더 많이 제공하면 손님을 더 많이 끌 수 있을까요?",
            translation_A: "불을 꺼주세요.",
            translation_B: "괜찮습니다, 이미 먹었어요.",
            translation_C: "비용이 많이 들 수도 있겠네요."
        },
        {
            id: "v3-p2-t08-q31",
            text: "Who's going with you to the technology convention?",
            options: { A: "Thanks, I'd appreciate that.", B: "Management budgeted for only one attendee.", C: "It's a great product." },
            correctAnswer: "B",
            questionType: "Who",
            translation: "기술 컨벤션에 당신과 누가 같이 가나요?",
            translation_A: "감사합니다, 그렇게 해주시면 고맙겠네요.",
            translation_B: "경영진이 참석자 한 명분의 예산만 잡았습니다.",
            translation_C: "훌륭한 제품이네요."
        }
    ]
};
