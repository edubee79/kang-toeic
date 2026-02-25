import { Part2TestSet } from '../../types';

export const test10Data: Part2TestSet = {
    testId: 10,
    vol: 4,
    title: "Part 2 Real Test 10",
    questions: [
        {
            id: "v4-p2-t10-q7",
            text: "When will the office furniture I ordered arrive?",
            options: { A: "By Tuesday at the latest.", B: "Our newest clients.", C: "I've already bought it." },
            correctAnswer: "A",
            questionType: "When",
            translation: "제가 주문한 사무용 가구가 언제 도착할까요?",
            translation_A: "늦어도 화요일까지는 도착합니다.",
            translation_B: "우리의 최신 고객들이오.",
            translation_C: "이미 샀습니다."
        },
        {
            id: "v4-p2-t10-q8",
            text: "Is your flight tomorrow or this afternoon?",
            options: { A: "In-flight snacks.", B: "It's this afternoon.", C: "At baggage claim." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "비행 편이 내일인가요, 아니면 오늘 오후인가요?",
            translation_A: "기내 간식요.",
            translation_B: "오늘 오후입니다.",
            translation_C: "수하물 찾는 곳에서요."
        },
        {
            id: "v4-p2-t10-q9",
            text: "How often does the research team schedule training sessions?",
            options: { A: "The team leader, I think.", B: "Some new software.", C: "Every other week." },
            correctAnswer: "C",
            questionType: "How",
            translation: "연구팀은 교육 세션 일정을 얼마나 자주 잡나요?",
            translation_A: "제 생각엔 팀 리더인 것 같아요.",
            translation_B: "일부 새로운 소프트웨어입니다.",
            translation_C: "격주로 잡습니다."
        },
        {
            id: "v4-p2-t10-q10",
            text: "Can I pay my bill with a credit card?",
            options: { A: "Sure, that's fine.", B: "I don't believe him either.", C: "The gas station on your right." },
            correctAnswer: "A",
            questionType: "Request",
            translation: "신용카드로 결제할 수 있나요?",
            translation_A: "물론이죠, 괜찮습니다.",
            translation_B: "저도 그를 믿지 않습니다.",
            translation_C: "당신 오른쪽에 있는 주유소요."
        },
        {
            id: "v4-p2-t10-q11",
            text: "The project proposal still needs work.",
            options: { A: "The other office.", B: "No, it's still not working.", C: "I can help you with it." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "프로젝트 제안서에 보완이 더 필요합니다.",
            translation_A: "다른 사무실요.",
            translation_B: "아니요, 여전히 작동하지 않습니다.",
            translation_C: "제가 도와드릴 수 있습니다."
        },
        {
            id: "v4-p2-t10-q12",
            text: "Where do you plan to stay during your visit to the city?",
            options: { A: "I thought the building had twelve floors.", B: "Oh, just to present at a conference.", C: "At a friend's house." },
            correctAnswer: "C",
            questionType: "Where",
            translation: "도시 방문 기간 동안 어디에 머물 계획인가요?",
            translation_A: "그 건물은 12층인 줄 알았어요.",
            translation_B: "오, 그냥 컨퍼런스에서 발표하려고요.",
            translation_C: "친구 집에서 머물 거예요."
        },
        {
            id: "v4-p2-t10-q13",
            text: "How did you improve the processing speed?",
            options: { A: "That's a question for Silvia.", B: "What's the speed limit?", C: "I don't like to swim." },
            correctAnswer: "A",
            questionType: "How",
            translation: "처리 속도를 어떻게 개선하셨나요?",
            translation_A: "그건 실비아 씨에게 물어봐야 할 질문이네요.",
            translation_B: "속도 제한이 얼마인가요?",
            translation_C: "저는 수영하는 것을 좋아하지 않습니다."
        },
        {
            id: "v4-p2-t10-q14",
            text: "Do you take exercise classes too, or just dance classes?",
            options: { A: "The instructor teaches in the mornings.", B: "These shoes fit perfectly.", C: "I only take dance." },
            correctAnswer: "C",
            questionType: "Choice",
            translation: "운동 수업도 들으시나요, 아니면 댄스 수업만 들으시나요?",
            translation_A: "강사는 오전에 가르칩니다.",
            translation_B: "이 신발들은 아주 잘 맞네요.",
            translation_C: "댄스 수업만 듣습니다."
        },
        {
            id: "v4-p2-t10-q15",
            text: "When will the new coffee machine be installed in the lobby?",
            options: { A: "No, it wasn't expensive.", B: "The front door is unlocked.", C: "Within the next few days." },
            correctAnswer: "C",
            questionType: "When",
            translation: "로비에 새 커피 머신이 언제 설치되나요?",
            translation_A: "아니요, 비싸지 않았습니다.",
            translation_B: "앞문이 잠겨 있지 않습니다.",
            translation_C: "며칠 내로 설치됩니다."
        },
        {
            id: "v4-p2-t10-q16",
            text: "The new marketing director will be hired soon, won't she?",
            options: { A: "Didn't you check your e-mail?", B: "It's about ten minutes from here.", C: "No, a little lower." },
            correctAnswer: "A",
            questionType: "Tag",
            translation: "새로운 마케팅 이사가 곧 채용되겠죠, 그렇죠?",
            translation_A: "이메일 확인 안 해보셨나요?",
            translation_B: "여기서 약 10분 거리입니다.",
            translation_C: "아니요, 조금 더 낮게요."
        },
        {
            id: "v4-p2-t10-q17",
            text: "I really need some help with the presentation graphics.",
            options: { A: "Insook can do those for you.", B: "A conference in Chicago.", C: "No, in Research and Development." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "발표용 그래픽 작업에 도움이 꼭 필요합니다.",
            translation_A: "인숙 씨가 당신을 위해 그 일을 해줄 수 있습니다.",
            translation_B: "시카고에서의 컨퍼런스요.",
            translation_C: "아니요, 연구 개발 부서에서요."
        },
        {
            id: "v4-p2-t10-q18",
            text: "Who can I talk to about scheduling a haircut?",
            options: { A: "Will you be available tomorrow afternoon?", B: "Not too short on the sides, please.", C: "Thanks, the scheduling software has been helpful!" },
            correctAnswer: "A",
            questionType: "Who",
            translation: "이발 일정을 잡으려면 누구와 이야기해야 하나요?",
            translation_A: "내일 오후에 시간 되시나요?",
            translation_B: "옆쪽은 너무 짧지 않게 해주세요.",
            translation_C: "감사합니다, 일정 관리 소프트웨어가 도움이 되었습니다!"
        },
        {
            id: "v4-p2-t10-q19",
            text: "Did you already prepare the agenda for the department meeting?",
            options: { A: "We should close the windows.", B: "It was postponed.", C: "I bought them at the department store." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "부서 회의 안건을 이미 준비하셨나요?",
            translation_A: "창문을 닫아야 합니다.",
            translation_B: "회의가 연기되었습니다.",
            translation_C: "백화점에서 그것들을 샀습니다."
        },
        {
            id: "v4-p2-t10-q20",
            text: "Do you take your coffee with or without milk?",
            options: { A: "The coffee shop on Bayview Avenue.", B: "I prefer drinking tea.", C: "We'll need to place an order for paper." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "커피에 우유를 넣으시나요, 아니면 안 넣으시나요?",
            translation_A: "베이뷰 가에 있는 커피숍요.",
            translation_B: "전 차 마시는 것을 선호합니다.",
            translation_C: "종이 주문을 해야 할 것 같습니다."
        },
        {
            id: "v4-p2-t10-q21",
            text: "Why are you installing new software?",
            options: { A: "Because our current software is outdated.", B: "We rented a large stall.", C: "I'm going to wear a jacket." },
            correctAnswer: "A",
            questionType: "Why",
            translation: "왜 새로운 소프트웨어를 설치하고 있나요?",
            translation_A: "현재 소프트웨어가 구식이기 때문입니다.",
            translation_B: "우리는 큰 판매대를 빌렸습니다.",
            translation_C: "재킷을 입을 예정입니다."
        },
        {
            id: "v4-p2-t10-q22",
            text: "When will next month's cost projections be ready?",
            options: { A: "That portable projector was recently replaced.", B: "An unexpected surplus.", C: "I sent an e-mail a few minutes ago." },
            correctAnswer: "C",
            questionType: "When",
            translation: "다음 달 비용 예상치가 언제 준비될까요?",
            translation_A: "휴대용 프로젝터가 최근에 교체되었습니다.",
            translation_B: "예상치 못한 흑자입니다.",
            translation_C: "몇 분 전에 이메일을 보냈습니다."
        },
        {
            id: "v4-p2-t10-q23",
            text: "Would you ask Tae-Joon to help set up the product display?",
            options: { A: "Several kinds of headsets.", B: "No, I can do it myself.", C: "I can't see the bottom line of the chart." },
            correctAnswer: "B",
            questionType: "Request",
            translation: "태준 씨에게 제품 진열 설정을 도와달라고 요청해 주시겠어요?",
            translation_A: "몇 가지 종류의 헤드셋요.",
            translation_B: "아니요, 제가 직접 할 수 있습니다.",
            translation_C: "차트의 맨 아랫줄이 보이지 않습니다."
        },
        {
            id: "v4-p2-t10-q24",
            text: "Which version of the contract do you have?",
            options: { A: "He's a general contractor.", B: "On the second floor.", C: "The final one." },
            correctAnswer: "C",
            questionType: "Which",
            translation: "어떤 버전의 계약서를 가지고 계신가요?",
            translation_A: "그는 일반 계약업자입니다.",
            translation_B: "2층에요.",
            translation_C: "최종본요."
        },
        {
            id: "v4-p2-t10-q25",
            text: "Why isn't Ms. Pérez here yet?",
            options: { A: "No, I can't hear anything.", B: "Company headquarters.", C: "Because she's meeting with her manager." },
            correctAnswer: "C",
            questionType: "Why",
            translation: "페레스 씨가 왜 아직 안 왔나요?",
            translation_A: "아니요, 아무것도 들리지 않습니다.",
            translation_B: "회사 본부입니다.",
            translation_C: "매니저와 회의 중이기 때문입니다."
        },
        {
            id: "v4-p2-t10-q26",
            text: "I heard that our company might be merging with another one.",
            options: { A: "Oh, I didn't know that.", B: "A good-selling product.", C: "Akira told me to put it there." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "우리 회사가 다른 회사와 합병될 수도 있다는 소문을 들었습니다.",
            translation_A: "오, 그건 몰랐습니다.",
            translation_B: "잘 팔리는 제품입니다.",
            translation_C: "아키라 씨가 저에게 거기 두라고 했습니다."
        },
        {
            id: "v4-p2-t10-q27",
            text: "Could you ask the next patient to come in?",
            options: { A: "It's in the cabinet.", B: "The waiting room is empty.", C: "They're both studying nursing." },
            correctAnswer: "B",
            questionType: "Request",
            translation: "다음 환자분을 들어오라고 말씀해 주시겠어요?",
            translation_A: "캐비닛 안에 있습니다.",
            translation_B: "대기실이 비어 있습니다.",
            translation_C: "그들 둘 다 간호학을 공부하고 있습니다."
        },
        {
            id: "v4-p2-t10-q28",
            text: "Are the blueberries ready to harvest?",
            options: { A: "I'll try the strawberry flavor.", B: "We have a view of the beach.", C: "It's not summertime yet." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "블루베리를 수확할 준비가 되었나요?",
            translation_A: "딸기 맛으로 먹어볼게요.",
            translation_B: "해변 전망입니다.",
            translation_C: "아직 여름이 아닙니다."
        },
        {
            id: "v4-p2-t10-q29",
            text: "How long will it take us to get to the theater?",
            options: { A: "Tickets for the performance are sold-out.", B: "At seven o'clock, I think.", C: "Actually, I don't have a preference." },
            correctAnswer: "A",
            questionType: "How",
            translation: "극장까지 가는 데 얼마나 걸릴까요?",
            translation_A: "공연 티켓이 매진되었습니다.",
            translation_B: "제 생각엔 7시에요.",
            translation_C: "사실, 전 특별히 선호하는 게 없어요."
        },
        {
            id: "v4-p2-t10-q30",
            text: "Are you going to send a report or give a presentation to our clients?",
            options: { A: "We enjoyed their talk.", B: "I'll probably do both.", C: "Twenty people attended." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "고객들에게 보고서를 보낼 건가요, 아니면 발표를 할 건가요?",
            translation_A: "우리는 그들의 강연을 즐겼습니다.",
            translation_B: "아마 둘 다 할 것 같습니다.",
            translation_C: "20명이 참석했습니다."
        },
        {
            id: "v4-p2-t10-q31",
            text: "When should we hang up the posters for our conference?",
            options: { A: "Sure, my car will be fixed soon.", B: "Next to the main entrance.", C: "The design still needs to be finalized." },
            correctAnswer: "C",
            questionType: "When",
            translation: "컨퍼런스용 포스터를 언제 게시해야 할까요?",
            translation_A: "물론이죠, 제 차가 곧 수리될 겁니다.",
            translation_B: "정문 옆에요.",
            translation_C: "디자인을 아직 마무리해야 합니다."
        }
    ]
};
