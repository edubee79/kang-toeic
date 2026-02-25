import { Part2TestSet } from '../../types';

export const test5Data: Part2TestSet = {
    testId: 5,
    vol: 3,
    title: "Part 2 Real Test 05",
    questions: [
        {
            id: "v3-p2-t05-q7",
            text: "Where is the parking garage?",
            options: { A: "The local park is nice.", B: "Behind the office building.", C: "During his commute to work." },
            correctAnswer: "B",
            questionType: "Where",
            translation: "주차 빌딩이 어디에 있나요?",
            translation_A: "지역 공원이 아주 좋네요.",
            translation_B: "사무실 건물 뒤편에요.",
            translation_C: "그의 출근 시간 동안에요."
        },
        {
            id: "v3-p2-t05-q8",
            text: "When will the design team meet?",
            options: { A: "No, I ordered five.", B: "Sometime next month.", C: "On top of the cabinet." },
            correctAnswer: "B",
            questionType: "When",
            translation: "디자인 팀은 언제 만나나요?",
            translation_A: "아니요, 5개 주문했습니다.",
            translation_B: "다음 달 중 언젠가요.",
            translation_C: "캐비닛 위에요."
        },
        {
            id: "v3-p2-t05-q9",
            text: "Should we consider Anita for the accountant position?",
            options: { A: "Yes, we're reviewing her application now.", B: "Down the hall to the right.", C: "The box is open." },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "회계사 직무에 아니타 씨를 고려해봐야 할까요?",
            translation_A: "네, 지금 그녀의 지원서를 검토 중입니다.",
            translation_B: "복도 끝 오른쪽에요.",
            translation_C: "상자가 열려 있습니다."
        },
        {
            id: "v3-p2-t05-q10",
            text: "What are they building near the shopping center?",
            options: { A: "On the eighteenth floor.", B: "An apartment complex.", C: "I shop there on the weekends." },
            correctAnswer: "B",
            questionType: "What",
            translation: "쇼핑센터 근처에 무엇을 짓고 있나요?",
            translation_A: "18층에요.",
            translation_B: "아파트 단지입니다.",
            translation_C: "전 주말마다 거기서 쇼핑을 해요."
        },
        {
            id: "v3-p2-t05-q11",
            text: "How did you like the meal?",
            options: { A: "I like that idea.", B: "By taxicab.", C: "It was excellent." },
            correctAnswer: "C",
            questionType: "How",
            translation: "식사는 어떠셨나요?",
            translation_A: "그 생각 마음에 드네요.",
            translation_B: "택시로요.",
            translation_C: "정말 훌륭했습니다."
        },
        {
            id: "v3-p2-t05-q12",
            text: "Why did the manager e-mail you?",
            options: { A: "Yes, I'm sure.", B: "Because she wants me to work late.", C: "Do you have any stamps?" },
            correctAnswer: "B",
            questionType: "Why",
            translation: "매니저님이 왜 이메일을 보냈나요?",
            translation_A: "네, 확실합니다.",
            translation_B: "제가 늦게까지 일하기를 원하시기 때문입니다.",
            translation_C: "우표 좀 있으세요?"
        },
        {
            id: "v3-p2-t05-q13",
            text: "Will the prototype be ready in time for the trade show?",
            options: { A: "That's a wonderful TV show.", B: "Yes, it'll be finished.", C: "It's in Chicago this year." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "시제품이 무역 박람회 때까지 준비될까요?",
            translation_A: "정말 멋진 TV 쇼네요.",
            translation_B: "네, 완성될 것입니다.",
            translation_C: "올해엔 시카고에서 열립니다."
        },
        {
            id: "v3-p2-t05-q14",
            text: "Our office building is locked on the weekends, isn't it?",
            options: { A: "Right down Franklin Boulevard.", B: "Just bring your employee badge.", C: "To visit with some friends." },
            correctAnswer: "B",
            questionType: "Tag",
            translation: "우리 사무실 건물은 주말에 잠겨 있죠, 그렇죠?",
            translation_A: "프랭클린 대로 바로 아래쪽에요.",
            translation_B: "그냥 사원증을 챙겨 오세요.",
            translation_C: "친구들을 좀 만나려고요."
        },
        {
            id: "v3-p2-t05-q15",
            text: "Can you deliver both of these orders during the same trip?",
            options: { A: "It arrived in good condition.", B: "Actually, we had a very nice trip.", C: "Sure, they go to the same part of town." },
            correctAnswer: "C",
            questionType: "Negative",
            translation: "한 번에 이 주문 건 두 개를 모두 배달해 주실 수 있나요?",
            translation_A: "좋은 상태로 도착했습니다.",
            translation_B: "사실, 우린 아주 멋진 여행을 했습니다.",
            translation_C: "물론이죠, 같은 동네로 가는 거예요."
        },
        {
            id: "v3-p2-t05-q16",
            text: "Do you want to purchase a laptop or desktop computer?",
            options: { A: "I have the model number here.", B: "Yes, in the top drawer.", C: "At the new furniture store." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "노트북을 구매하시겠어요, 아니면 데스크톱 컴퓨터를 구매하시겠어요?",
            translation_A: "제가 여기 모델 번호를 가지고 있습니다.",
            translation_B: "네, 맨 위 서랍에요.",
            translation_C: "새 가구점에서요."
        },
        {
            id: "v3-p2-t05-q17",
            text: "What did you think of the company newsletter?",
            options: { A: "About two pages long.", B: "It had some interesting articles.", C: "Please seal the envelope." },
            correctAnswer: "B",
            questionType: "What",
            translation: "회사 소식지에 대해 어떻게 생각하시나요?",
            translation_A: "약 2페이지 분량입니다.",
            translation_B: "흥미로운 기사들이 좀 있더라고요.",
            translation_C: "봉투를 밀봉해 주세요."
        },
        {
            id: "v3-p2-t05-q18",
            text: "Can I help you move your furniture?",
            options: { A: "He bought a desk last week.", B: "I think I can manage on my own.", C: "The furniture store on Grove Street." },
            correctAnswer: "B",
            questionType: "YesNo",
            translation: "가구 옮기는 걸 도와드릴까요?",
            translation_A: "그는 지난주에 책상을 샀습니다.",
            translation_B: "혼자서 할 수 있을 것 같습니다.",
            translation_C: "그로브 가에 있는 가구점요."
        },
        {
            id: "v3-p2-t05-q19",
            text: "Why did Mr. Harrison resign from his position?",
            options: { A: "Two weeks ago.", B: "It's just been signed.", C: "He found a different job." },
            correctAnswer: "C",
            questionType: "Why",
            translation: "해리슨 씨가 왜 직무에서 사임했나요?",
            translation_A: "2주 전요.",
            translation_B: "방금 서명이 끝났습니다.",
            translation_C: "그는 다른 일자리를 구했습니다."
        },
        {
            id: "v3-p2-t05-q20",
            text: "Which client are we meeting with tomorrow morning?",
            options: { A: "They talked about the upcoming merger.", B: "Just a light breakfast.", C: "The Greendale Company representative." },
            correctAnswer: "C",
            questionType: "Which",
            translation: "내일 아침에 어느 고객과 만나나요?",
            translation_A: "그들은 곧 있을 합병에 대해 이야기했습니다.",
            translation_B: "그냥 가벼운 아침 식사요.",
            translation_C: "그린데일 사의 대표입니다."
        },
        {
            id: "v3-p2-t05-q21",
            text: "Weren't those lightbulbs replaced recently?",
            options: { A: "Yes, we just changed them.", B: "Actually, this isn't very heavy.", C: "It's on Fourth Street." },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "저 전구들 최근에 교체되지 않았나요?",
            translation_A: "네, 방금 교체했습니다.",
            translation_B: "사실, 이건 별로 무겁지 않습니다.",
            translation_C: "4번가에 있습니다."
        },
        {
            id: "v3-p2-t05-q22",
            text: "Who knows how to start the conference call?",
            options: { A: "Alyssa can do it.", B: "The conference registration fee.", C: "Yes, we've got them all." },
            correctAnswer: "A",
            questionType: "Who",
            translation: "전화 회의를 어떻게 시작하는지 아는 사람 있나요?",
            translation_A: "앨리사 씨가 할 줄 압니다.",
            translation_B: "컨퍼런스 등록비요.",
            translation_C: "네, 저희가 모두 다 가지고 있습니다."
        },
        {
            id: "v3-p2-t05-q23",
            text: "What should I do with the extra training materials?",
            options: { A: "Leave them on my desk.", B: "No, they shouldn't.", C: "Around four thirty." },
            correctAnswer: "A",
            questionType: "What",
            translation: "남은 교육 자료는 어떻게 할까요?",
            translation_A: "제 책상 위에 두세요.",
            translation_B: "아니요, 그러면 안 됩니다.",
            translation_C: "4시 30분쯤예요."
        },
        {
            id: "v3-p2-t05-q24",
            text: "It's raining quite hard outside.",
            options: { A: "With an umbrella.", B: "I can drive you to the store.", C: "Yes, that was difficult." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "밖에 비가 꽤 많이 오네요.",
            translation_A: "우산과 함께요.",
            translation_B: "가게까지 제가 차로 태워다 드릴 수 있어요.",
            translation_C: "네, 그건 어려웠습니다."
        },
        {
            id: "v3-p2-t05-q25",
            text: "How many servers do we need waiting tables on Saturday?",
            options: { A: "Yes, you can leave it on the floor.", B: "At eleven o'clock.", C: "We have a party of 25 coming in." },
            correctAnswer: "C",
            questionType: "How",
            translation: "토요일에 서빙할 직원이 몇 명이나 필요할까요?",
            translation_A: "네, 바닥에 두셔도 됩니다.",
            translation_B: "11시 정각에요.",
            translation_C: "25명의 단체 손님이 올 예정입니다."
        },
        {
            id: "v3-p2-t05-q26",
            text: "George, will you call our clients back?",
            options: { A: "The information pack.", B: "Yes, she'll be back soon.", C: "Anna left them a message." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "조지 씨, 우리 고객들에게 다시 전화해 주시겠어요?",
            translation_A: "정보 팩입니다.",
            translation_B: "네, 그녀는 곧 돌아올 겁니다.",
            translation_C: "안나 씨가 그들에게 메시지를 남겼습니다."
        },
        {
            id: "v3-p2-t05-q27",
            text: "Our quarterly sales results were lower than expected.",
            options: { A: "It's an easy hiking trail.", B: "We do have a new competitor.", C: "A quarter of an hour." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "우리 분기 매출 결과가 예상보다 낮았습니다.",
            translation_A: "쉬운 하이킹 코스네요.",
            translation_B: "새로운 경쟁 업체가 생기긴 했습니다.",
            translation_C: "15분(1시간의 1/4)요."
        },
        {
            id: "v3-p2-t05-q28",
            text: "When do you want to work on this new project?",
            options: { A: "I haven't been trained yet.", B: "Yes, he got a full-time job.", C: "I completely agree with you." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "이 새로운 프로젝트 작업을 언제 시작하고 싶으세요?",
            translation_A: "아직 교육을 받지 못했습니다.",
            translation_B: "네, 그는 정규직 일자리를 구했습니다.",
            translation_C: "당신 의견에 전적으로 동의합니다."
        },
        {
            id: "v3-p2-t05-q29",
            text: "I'll be happy to take pictures at the company retreat.",
            options: { A: "Some coffee and desserts.", B: "Yes, a digital camera.", C: "They hired a photographer." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "회사 야유회에서 기꺼이 사진을 찍어드릴게요.",
            translation_A: "커피와 디저트 몇 가지요.",
            translation_B: "네, 디지털 카메라입니다.",
            translation_C: "그들이 사진사를 고용했습니다."
        },
        {
            id: "v3-p2-t05-q30",
            text: "These all-weather tires are very expensive.",
            options: { A: "A fifteen-minute drive.", B: "They'll last for a long time.", C: "Let me turn it on for you." },
            correctAnswer: "B",
            questionType: "Statement",
            translation: "이 사계절용 타이어들은 가격이 꽤 비싸네요.",
            translation_A: "차로 15분 거리입니다.",
            translation_B: "아주 오래갈 거예요.",
            translation_C: "제가 그것을 켜드릴게요."
        },
        {
            id: "v3-p2-t05-q31",
            text: "Why aren't the trainees in the computer lab now?",
            options: { A: "Didn't you get a copy of the updated schedule?", B: "Yes, at the next station.", C: "There's a repair shop on Lancaster Avenue." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "왜 교육생들이 지금 컴퓨터실에 없나요?",
            translation_A: "업데이트된 일정표를 받지 못하셨나요?",
            translation_B: "네, 다음 정거장에서요.",
            translation_C: "랭커스터 가에 수리점이 있습니다."
        }
    ]
};
