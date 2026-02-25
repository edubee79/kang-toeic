import { Part2TestSet } from '../../types';

export const test2Data: Part2TestSet = {
    testId: 2,
    vol: 4,
    title: "Part 2 Real Test 02",
    questions: [
        {
            id: "v4-p2-t02-q7",
            text: "Have the machines on the factory floor been cleaned?",
            options: { A: "No, not yet.", B: "It's in the shipping container.", C: "I just put it in the trash bin." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "공장 바닥의 기계들이 청소되었나요?",
            translation_A: "아니요, 아직 안 됐습니다.",
            translation_B: "선적 컨테이너 안에 있습니다.",
            translation_C: "방금 쓰레기통에 넣었습니다."
        },
        {
            id: "v4-p2-t02-q8",
            text: "How much will the budget increase next year?",
            options: { A: "About 10 percent.", B: "Three hours, I think.", C: "At the bank's main branch." },
            correctAnswer: "A",
            questionType: "How",
            translation: "내년도 예산이 얼마나 증액될까요?",
            translation_A: "약 10퍼센트 정도요.",
            translation_B: "제 생각에는 3시간 정도요.",
            translation_C: "은행의 본점에서요."
        },
        {
            id: "v4-p2-t02-q9",
            text: "You're going to water the plants before you leave, aren't you?",
            options: { A: "I walked the whole way.", B: "Yes, right after lunch.", C: "In the breakroom." },
            correctAnswer: "B",
            questionType: "Tag",
            translation: "떠나기 전에 식물들에 물을 줄 거죠, 그렇죠?",
            translation_A: "저는 내내 걸어왔습니다.",
            translation_B: "네, 점심 식사 직후에요.",
            translation_C: "휴게실에요."
        },
        {
            id: "v4-p2-t02-q10",
            text: "Aren't you going to schedule an eye doctor appointment?",
            options: { A: "Those glasses look nice on you.", B: "I already scheduled one.", C: "The seminar is three days long." },
            correctAnswer: "B",
            questionType: "Negative",
            translation: "안과 예약 안 하실 건가요?",
            translation_A: "그 안경 당신에게 잘 어울리네요.",
            translation_B: "이미 예약했습니다.",
            translation_C: "세미나는 3일 동안 진행됩니다."
        },
        {
            id: "v4-p2-t02-q11",
            text: "I'm going to try to fix this printer.",
            options: { A: "You're right, it doesn't fit.", B: "Double-sided copies.", C: "Are you sure it can be repaired?" },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "이 프린터를 수리해 보려고 해요.",
            translation_A: "맞아요, 맞지 않네요.",
            translation_B: "양면 복사요.",
            translation_C: "수리가 가능할 것 같나요?"
        },
        {
            id: "v4-p2-t02-q12",
            text: "What should we do with these brochures?",
            options: { A: "A trip to the seashore.", B: "Yes, I found it already.", C: "I'll leave them at the front desk." },
            correctAnswer: "C",
            questionType: "What",
            translation: "이 브로슈어들을 어떻게 할까요?",
            translation_A: "해안가로의 여행요.",
            translation_B: "네, 이미 찾았습니다.",
            translation_C: "안내 데스크에 둘게요."
        },
        {
            id: "v4-p2-t02-q13",
            text: "Has the policy meeting been rescheduled?",
            options: { A: "We have lots of desk calendar designs.", B: "Yes, it's happening tomorrow instead.", C: "This soup I ordered is delicious." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "정책 회의 일정이 조정되었나요?",
            translation_A: "탁상 달력 디자인이 많이 있습니다.",
            translation_B: "네, 대신 내일 열립니다.",
            translation_C: "제가 주문한 이 수프 맛있네요."
        },
        {
            id: "v4-p2-t02-q14",
            text: "Why don't we stop by the office cafeteria on our way to the workshop?",
            options: { A: "Sure, we have time for that.", B: "A full-service buffet.", C: "The topic is professional networking." },
            correctAnswer: "A",
            questionType: "Why",
            translation: "워크숍 가는 길에 사무실 구내식당에 들르는 게 어때요?",
            translation_A: "물론이죠, 그럴 시간이 있어요.",
            translation_B: "풀 서비스 뷔페요.",
            translation_C: "주제는 전문적인 인맥 형성입니다."
        },
        {
            id: "v4-p2-t02-q15",
            text: "Have you tried our famous pasta dish?",
            options: { A: "We need a table for five.", B: "Yes, it was delicious.", C: "I'll try to make it on time." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "저희 집의 유명한 파스타 요리를 드셔 보셨나요?",
            translation_A: "5인용 테이블이 필요합니다.",
            translation_B: "네, 정말 맛있었어요.",
            translation_C: "제시간에 맞춰 가도록 노력할게요."
        },
        {
            id: "v4-p2-t02-q16",
            text: "Who's the opening act at tonight's concert?",
            options: { A: "Could you turn up the volume?", B: "A jazz singer from France.", C: "The position has been filled." },
            correctAnswer: "B",
            questionType: "Who",
            translation: "오늘 밤 공연의 오프닝 공연자는 누구인가요?",
            translation_A: "볼륨을 좀 높여 주시겠어요?",
            translation_B: "프랑스 출신의 재즈 가수입니다.",
            translation_C: "그 자리는 채워졌습니다."
        },
        {
            id: "v4-p2-t02-q17",
            text: "When do the product demonstrations start?",
            options: { A: "The schedule was e-mailed last Friday.", B: "Some innovative features.", C: "In room 202, I think." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "제품 시연은 언제 시작되나요?",
            translation_A: "일정표가 지난주 금요일에 이메일로 발송되었습니다.",
            translation_B: "몇 가지 혁신적인 기능들요.",
            translation_C: "제 생각에는 202호인 것 같아요."
        },
        {
            id: "v4-p2-t02-q18",
            text: "I tried updating the Web site, but it didn't work.",
            options: { A: "That date works for me.", B: "Usually our online reviews.", C: "Just send me the changes you want." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "웹사이트를 업데이트하려고 시도했는데, 안 되더라고요.",
            translation_A: "그 날짜 저에게 괜찮습니다.",
            translation_B: "보통 저희 온라인 리뷰들이오.",
            translation_C: "원하시는 변경 사항들을 저에게 보내주기만 하세요."
        },
        {
            id: "v4-p2-t02-q19",
            text: "Did you hire a new welding specialist?",
            options: { A: "The parts back-ordered.", B: "Yes, he starts tomorrow.", C: "No, it should be higher." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "새로운 용접 전문가를 채용했나요?",
            translation_A: "부품들이 이월 주문되었습니다.",
            translation_B: "네, 내일부터 출근합니다.",
            translation_C: "아니요, 더 높아야 합니다."
        },
        {
            id: "v4-p2-t02-q20",
            text: "How was the color palette for the lobby chosen?",
            options: { A: "Blue and orange.", B: "It was fine, thanks.", C: "I wasn't involved." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "로비의 색상 팔레트는 어떻게 선택되었나요?",
            translation_A: "파란색과 주황색요.",
            translation_B: "괜찮았습니다, 감사합니다.",
            translation_C: "저는 관여하지 않았습니다."
        },
        {
            id: "v4-p2-t02-q21",
            text: "When are we ordering more supplies for the office?",
            options: { A: "In the storage closet.", B: "Next week on Monday.", C: "The new desk looks great!" },
            correctAnswer: "B",
            questionType: "When",
            translation: "사무용 비품을 언제 더 주문할 건가요?",
            translation_A: "비품실에요.",
            translation_B: "다음 주 월요일에요.",
            translation_C: "새 책상이 멋져 보이네요!"
        },
        {
            id: "v4-p2-t02-q22",
            text: "The battery for the water p-rip is going to be solar powered, right?",
            options: { A: "We're still in the planning stages.", B: "A hundred and forty dollars per year.", C: "Yes, I'd love a glass of water." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "물 펌프용 배터리는 태양광 발전을 이용할 예정이죠, 그렇죠?",
            translation_A: "우리는 아직 계획 단계에 있습니다.",
            translation_B: "연간 140달러요.",
            translation_C: "네, 물 한 잔 주시면 감사하겠습니다."
        },
        {
            id: "v4-p2-t02-q23",
            text: "Where can I buy a charger for this laptop?",
            options: { A: "Around three o'clock.", B: "I can order one for you.", C: "A limited return policy." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "이 노트북용 충전기를 어디서 살 수 있나요?",
            translation_A: "3시경에요.",
            translation_B: "제가 하나 주문해 드릴 수 있어요.",
            translation_C: "제한된 반품 규정요."
        },
        {
            id: "v4-p2-t02-q24",
            text: "Do I need to reserve a meeting room?",
            options: { A: "Yes, let me show you how.", B: "The service is good.", C: "My slide presentation." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "회의실을 예약해야 하나요?",
            translation_A: "네, 어떻게 하는지 보여드릴게요.",
            translation_B: "서비스가 좋네요.",
            translation_C: "제 슬라이드 발표 자료요."
        },
        {
            id: "v4-p2-t02-q25",
            text: "When's the new department director supposed to start?",
            options: { A: "It's an hour long.", B: "Ms. Pavlova isn't retiring for several weeks.", C: "No, that department's upstairs." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "새 부서장은 언제 업무를 시작할 예정인가요?",
            translation_A: "한 시간 동안 진행됩니다.",
            translation_B: "파블로바 씨는 몇 주 동안은 은퇴하지 않을 것입니다.",
            translation_C: "아니요, 그 부서는 위층에 있습니다."
        },
        {
            id: "v4-p2-t02-q26",
            text: "Should I deliver these pizzas, or will you?",
            options: { A: "No thanks—I'm not hungry.", B: "Ten dollars for two.", C: "They're being picked up." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "제가 이 피자들을 배달할까요, 아니면 당신이 하시겠어요?",
            translation_A: "아니요, 괜찮아요. 배고프지 않아요.",
            translation_B: "두 개에 10달러요.",
            translation_C: "누군가 가져가기로 되어 있습니다."
        },
        {
            id: "v4-p2-t02-q27",
            text: "This month's shipment schedule has been revised.",
            options: { A: "I couldn't find them either.", B: "Which dates have been changed?", C: "Two dollars per pound." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "이번 달 선적 일정이 수정되었습니다.",
            translation_A: "저도 찾을 수가 없었요.",
            translation_B: "어느 날짜들이 변경되었나요?",
            translation_C: "파운드 당 2달러요."
        },
        {
            id: "v4-p2-t02-q28",
            text: "How much will the repairs cost?",
            options: { A: "The work is covered under the warranty plan.", B: "Yes, it's also available in red.", C: "In about two weeks." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "수리비가 얼마인가요?",
            translation_A: "그 작업은 보증 플랜으로 처리됩니다.",
            translation_B: "네, 빨간색으로도 나옵니다.",
            translation_C: "약 2주 뒤에요."
        },
        {
            id: "v4-p2-t02-q29",
            text: "Why don't we provide more samples of the wallpaper patterns?",
            options: { A: "The newspaper is delivered daily.", B: "An interior design course.", C: "There are plenty in the binders." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "벽지 패턴 샘플을 더 많이 제공하는 게 어때요?",
            translation_A: "신문은 매일 배달됩니다.",
            translation_B: "인테리어 디자인 강좌요.",
            translation_C: "바인더 안에 아주 많이 있습니다."
        },
        {
            id: "v4-p2-t02-q30",
            text: "Can you give me a tour of the property this afternoon?",
            options: { A: "Sorry, I won't have time until tomorrow.", B: "It has a very modern design.", C: "A house on Maple Street." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "오늘 오후에 건물을 좀 둘러볼 수 있을까요?",
            translation_A: "죄송하지만 내일이나 되어야 시간이 날 것 같아요.",
            translation_B: "매우 현대적인 디자인입니다.",
            translation_C: "메이플 가에 있는 집입니다."
        },
        {
            id: "v4-p2-t02-q31",
            text: "Who's scheduled to test the product today?",
            options: { A: "We're waiting for confirmation.", B: "It's a great album, right?", C: "About six weeks ago." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "오늘 누가 제품 테스트를 하기로 되어 있습니까?",
            translation_A: "확인을 기다리는 중입니다.",
            translation_B: "정말 멋진 앨범이죠, 그렇죠?",
            translation_C: "약 6주 전에요."
        }
    ]
};
