import { Part2TestSet } from '../../types';

export const test2Data: Part2TestSet = {
    testId: 2,
    vol: 3,
    title: "Part 2 Real Test 02",
    questions: [
        {
            id: "v3-p2-t02-q7",
            text: "Who should write the press release?",
            options: { A: "George can take care of that.", B: "Press the red button.", C: "At the corner newsstand." },
            correctAnswer: "A",
            questionType: "Who",
            translation: "보도 자료는 누가 작성해야 하나요?",
            translation_A: "조지 씨가 처리해 줄 수 있습니다.",
            translation_B: "빨간색 버튼을 누르세요.",
            translation_C: "길 모퉁이 신문 가판대에요."
        },
        {
            id: "v3-p2-t02-q8",
            text: "Where is the company's headquarters?",
            options: { A: "Before we went to work.", B: "His name is Mr. Lee.", C: "In Berlin, Germany." },
            correctAnswer: "C",
            questionType: "Where",
            translation: "회사의 본사는 어디에 있나요?",
            translation_A: "우리가 출근하기 전예요.",
            translation_B: "그의 이름은 이 선생님입니다.",
            translation_C: "독일 베를린에 있습니다."
        },
        {
            id: "v3-p2-t02-q9",
            text: "Why are you visiting the clients tomorrow?",
            options: { A: "After two o'clock.", B: "I need to renew their contract.", C: "The Dubai airport." },
            correctAnswer: "B",
            questionType: "Why",
            translation: "내일 고객들을 왜 방문하시나요?",
            translation_A: "2시 이후에요.",
            translation_B: "그들의 계약을 갱신해야 합니다.",
            translation_C: "두바이 공항요."
        },
        {
            id: "v3-p2-t02-q10",
            text: "Does Dr. Allen work at the hospital or at a private practice?",
            options: { A: "At the hospital, I think.", B: "We'll need to practice that.", C: "An annual exam." },
            correctAnswer: "A",
            questionType: "Choice",
            translation: "앨런 박사는 병원에서 근무하나요, 아니면 개입 병원에서 근무하나요?",
            translation_A: "제 생각엔 병원에서 근무하는 것 같아요.",
            translation_B: "그것을 연습해야 할 것 같습니다.",
            translation_C: "연례 검진요."
        },
        {
            id: "v3-p2-t02-q11",
            text: "What's the best way for us to get to the conference center?",
            options: { A: "I haven't heard from her, either.", B: "It was a great presentation.", C: "Let's take a look at the train schedule." },
            correctAnswer: "C",
            questionType: "What",
            translation: "컨퍼런스 센터까지 가는 가장 좋은 방법은 무엇인가요?",
            translation_A: "저도 그녀에게서 연락을 받지 못했습니다.",
            translation_B: "정말 멋진 발표였습니다.",
            translation_C: "기차 시간표를 한번 봅시다."
        },
        {
            id: "v3-p2-t02-q12",
            text: "When will the forklift be repaired?",
            options: { A: "A fork and a knife, please.", B: "Probably next week.", C: "Several pairs." },
            correctAnswer: "B",
            questionType: "When",
            translation: "지게차는 언제 수리되나요?",
            translation_A: "포크와 나이프 주세요.",
            translation_B: "아마 다음 주일 거예요.",
            translation_C: "몇 켤레(쌍)요."
        },
        {
            id: "v3-p2-t02-q13",
            text: "Would you like me to send you an appointment reminder?",
            options: { A: "Yes, I'd appreciate that.", B: "The apartment downstairs.", C: "Do you accept credit cards?" },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "예약 확인 안내를 보내드릴까요?",
            translation_A: "네, 그렇게 해주시면 감사하겠습니다.",
            translation_B: "아래층 아파트요.",
            translation_C: "신용카드 결제 되나요?"
        },
        {
            id: "v3-p2-t02-q14",
            text: "Did you remember to book a photographer for today's museum opening?",
            options: { A: "Oh, have you read it too?", B: "I'd like to have it framed.", C: "She should have been here by now." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "오늘 박물관 개관식을 위해 사진사를 예약하는 걸 기억하셨나요?",
            translation_A: "오, 당신도 그것을 읽으셨나요?",
            translation_B: "그것을 액자에 넣고 싶습니다.",
            translation_C: "그녀가 지금쯤이면 여기 왔어야 하는데요."
        },
        {
            id: "v3-p2-t02-q15",
            text: "Why is my computer so slow today?",
            options: { A: "The printer is down that hall.", B: "Because some updates are being installed.", C: "Next year's computer seminar." },
            correctAnswer: "B",
            questionType: "Why",
            translation: "오늘 제 컴퓨터가 왜 이렇게 느리죠?",
            translation_A: "프린터는 저 복도 끝에 있습니다.",
            translation_B: "일부 업데이트가 설치되고 있기 때문입니다.",
            translation_C: "내년도 컴퓨터 세미나요."
        },
        {
            id: "v3-p2-t02-q16",
            text: "Who's going to stock these shelves?",
            options: { A: "The overnight workers will do it.", B: "No, I haven't gone yet.", C: "To make room for more items." },
            correctAnswer: "A",
            questionType: "Who",
            translation: "이 선반들에 물건을 누가 채울 예정인가요?",
            translation_A: "야간 근무자들이 할 것입니다.",
            translation_B: "아니요, 아직 가지 않았습니다.",
            translation_C: "더 많은 물건을 위한 공간을 만들기 위해서요."
        },
        {
            id: "v3-p2-t02-q17",
            text: "How many bottles can these machines produce each hour?",
            options: { A: "Mainly soft drinks and juices.", B: "I just started working here.", C: "It stays fresh for a long time." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "이 기계들은 시간당 몇 개의 병을 생산할 수 있나요?",
            translation_A: "주로 탄산음료와 주스요.",
            translation_B: "전 여기서 일하기 시작한 지 얼마 안 됐습니다.",
            translation_C: "그것은 오랫동안 신선하게 유지됩니다."
        },
        {
            id: "v3-p2-t02-q18",
            text: "Aren't these hiking boots supposed to be discounted?",
            options: { A: "Oh oh yes, sorry about that.", B: "Let's pose for a picture.", C: "No, we haven't met yet." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "이 등산화들 할인되는 거 아니었나요?",
            translation_A: "오 이런 네, 죄송합니다.",
            translation_B: "사진을 위해 포즈를 취해봅시다.",
            translation_C: "아니요, 우린 아직 만나지 못했습니다."
        },
        {
            id: "v3-p2-t02-q19",
            text: "Do we have enough time to finish this report?",
            options: { A: "She borrowed your newspaper.", B: "I'll reschedule my next appointment.", C: "It's a beautiful trail." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "이 보고서를 끝낼 충분한 시간이 있을까요?",
            translation_A: "그녀가 당신의 신문을 빌려갔습니다.",
            translation_B: "제가 다음 예약을 다시 잡을게요.",
            translation_C: "아름다운 오솔길이네요."
        },
        {
            id: "v3-p2-t02-q20",
            text: "When do you usually start packing for a trip?",
            options: { A: "A round-trip ticket.", B: "About two days in advance.", C: "They delivered the package." },
            correctAnswer: "B",
            questionType: "When",
            translation: "보통 여행 짐을 언제부터 싸기 시작하시나요?",
            translation_A: "왕복 티켓요.",
            translation_B: "약 이틀 전예요.",
            translation_C: "그들이 소포를 배달했습니다."
        },
        {
            id: "v3-p2-t02-q21",
            text: "I'm going to take a walk at lunchtime.",
            options: { A: "Oh, I'll be visiting clients then.", B: "He took the survey.", C: "A copy of the lunch menu." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "점심시간에 산책을 좀 하려고요.",
            translation_A: "오, 전 그때 고객들을 방문할 예정입니다.",
            translation_B: "그가 설문조사에 참여했습니다.",
            translation_C: "점심 메뉴판 한 부요."
        },
        {
            id: "v3-p2-t02-q22",
            text: "Can you make sure we have a sign-up sheet available?",
            options: { A: "I just turned up the heat.", B: "Sign here, please.", C: "Sure, no problem." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "신청 명단을 준비했는지 확인해 주시겠어요?",
            translation_A: "방금 온도를 높였습니다.",
            translation_B: "여기 서명해 주세요.",
            translation_C: "물론이죠, 문제없습니다."
        },
        {
            id: "v3-p2-t02-q23",
            text: "They're going to give each of us copies of the press release, aren't they?",
            options: { A: "No, I don't drink coffee.", B: "I can unlock that for you later.", C: "I'd better remind them about that." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "그들이 우리 각자에게 보도 자료 사본을 나눠줄 거죠, 그렇지 않나요?",
            translation_A: "아니요, 전 커피를 마시지 않습니다.",
            translation_B: "나중에 그걸 열어드릴 수 있습니다.",
            translation_C: "그들에게 그 사실을 상기시켜 주는 게 좋겠어요."
        },
        {
            id: "v3-p2-t02-q24",
            text: "What do most people do for a living around here?",
            options: { A: "About 40 kilometers away.", B: "They work at the car manufacturing plant.", C: "Yes, the living room furniture's new." },
            correctAnswer: "B",
            questionType: "What",
            translation: "이 주변 사람들은 주로 어떤 일을 하며 생계를 꾸리나요?",
            translation_A: "약 40킬로미터 떨어져 있습니다.",
            translation_B: "자동차 제조 공장에서 일합니다.",
            translation_C: "네, 거실 가구가 새것입니다."
        },
        {
            id: "v3-p2-t02-q25",
            text: "How do you add toner to the printer?",
            options: { A: "No, it's not made of stone.", B: "Because we ran out.", C: "The instructions are on the box." },
            correctAnswer: "C",
            questionType: "How",
            translation: "프린터에 토너를 어떻게 넣나요?",
            translation_A: "아니요, 돌로 만들어진 게 아닙니다.",
            translation_B: "다 떨어졌기 때문입니다.",
            translation_C: "설명서가 상자 위에 있습니다."
        },
        {
            id: "v3-p2-t02-q26",
            text: "Can you send me a link to that company's Web site?",
            options: { A: "Our e-mail's not working right now.", B: "Express delivery, please.", C: "Sure, I'll drive you to the job site." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "그 회사 웹사이트 링크를 저에게 보내주실 수 있나요?",
            translation_A: "지금 저희 이메일이 작동하지 않습니다.",
            translation_B: "속달 배송으로 해주세요.",
            translation_C: "물론이죠, 작업 현장까지 태워다 드릴게요."
        },
        {
            id: "v3-p2-t02-q27",
            text: "Isn't the air conditioner set to turn off at night?",
            options: { A: "No, we always keep it on.", B: "He's going to be late today.", C: "Hair products are in aisle four." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "에어컨을 밤에 꺼지도록 설정해두지 않았나요?",
            translation_A: "아니요, 우린 항상 켜둡니다.",
            translation_B: "그는 오늘 늦을 예정입니다.",
            translation_C: "헤어 제품은 4번 통로에 있습니다."
        },
        {
            id: "v3-p2-t02-q28",
            text: "Oh, there's no clock in this room.",
            options: { A: "A six-week training program.", B: "It's about two-thirty.", C: "They took an early flight." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "오, 이 방에는 시계가 없네요.",
            translation_A: "6주 교육 프로그램입니다.",
            translation_B: "지금 2시 30분쯤 됐습니다.",
            translation_C: "그들은 이른 비행 편을 이용했습니다."
        },
        {
            id: "v3-p2-t02-q29",
            text: "Where can I go to have my car engine checked?",
            options: { A: "No, I don't need one—thanks, though.", B: "The mechanic around the corner.", C: "In April of every year." },
            correctAnswer: "B",
            questionType: "Where",
            translation: "자동차 엔진 점검은 어디서 받을 수 있나요?",
            translation_A: "아니요, 필요 없어요—그래도 고맙습니다.",
            translation_B: "모퉁이 근처에 있는 정비소요.",
            translation_C: "매년 4월에요."
        },
        {
            id: "v3-p2-t02-q30",
            text: "To get into the building, do I use an ID badge or a passcode?",
            options: { A: "A building next door.", B: "Enter three-four-three on the keypad.", C: "The exit is down the hall." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "건물에 들어가기 위해 신분증 배지를 사용하나요, 아니면 비밀번호를 사용하나요?",
            translation_A: "옆집 건물이요.",
            translation_B: "키패드에 3-4-3을 입력하세요.",
            translation_C: "출구는 복도 아래에 있습니다."
        },
        {
            id: "v3-p2-t02-q31",
            text: "The order can still be changed, right?",
            options: { A: "That process is very complicated.", B: "I still remember that day, too.", C: "Yes, he does." },
            correctAnswer: "A",
            questionType: "Tag",
            translation: "주문은 아직 변경 가능하죠, 그렇죠?",
            translation_A: "그 과정은 매우 복잡합니다.",
            translation_B: "저도 여전히 그날을 기억합니다.",
            translation_C: "네, 그는 그래요."
        }
    ]
};
