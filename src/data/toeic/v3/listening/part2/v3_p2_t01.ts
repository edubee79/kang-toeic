import { Part2TestSet } from '../../types';

export const test1Data: Part2TestSet = {
    testId: 1,
    vol: 3,
    title: "Part 2 Real Test 01",
    questions: [
        {
            id: "v3-p2-t01-q7",
            text: "Why was this afternoon's meeting canceled?",
            options: { A: "Room 206, I think.", B: "Because the manager is out of the office.", C: "Let's review the itinerary for our trip." },
            correctAnswer: "B",
            questionType: "Why",
            translation: "오늘 오후 회의가 왜 취소되었나요?",
            translation_A: "제 생각엔 206호실인 것 같아요.",
            translation_B: "매니저님이 사무실에 안 계시기 때문입니다.",
            translation_C: "우리 여행 일정을 검토해 봅시다."
        },
        {
            id: "v3-p2-t01-q8",
            text: "You use the company fitness center, don't you?",
            options: { A: "Yes, every now and then.", B: "Please center the text on the page.", C: "I think it fits you well." },
            correctAnswer: "A",
            questionType: "Tag",
            translation: "회사 휘트니스 센터를 이용하시죠, 그렇지 않나요?",
            translation_A: "네, 가끔씩요.",
            translation_B: "텍스트를 페이지 중앙에 맞춰 주세요.",
            translation_C: "당신에게 잘 어울리는 것 같아요."
        },
        {
            id: "v3-p2-t01-q9",
            text: "Do you have the images from the graphics department?",
            options: { A: "OK, that won't be a problem.", B: "A high-definition camera.", C: "No, they're not ready yet." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "그래픽 부서에서 보낸 이미지들을 가지고 계신가요?",
            translation_A: "알겠습니다, 문제없을 거예요.",
            translation_B: "고해상도 카메라입니다.",
            translation_C: "아니요, 아직 준비되지 않았습니다."
        },
        {
            id: "v3-p2-t01-q10",
            text: "When are you moving to your new office?",
            options: { A: "The office printer over there.", B: "The water bill is high this month.", C: "The schedule is being revised." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "새 사무실로 언제 이사하시나요?",
            translation_A: "저쪽에 있는 사무용 프린터요.",
            translation_B: "이번 달 수도 요금이 많이 나왔네요.",
            translation_C: "일정이 수정되고 있습니다."
        },
        {
            id: "v3-p2-t01-q11",
            text: "Would you like to sign up for the company retreat?",
            options: { A: "Sure, I'll write my name down.", B: "Twenty people, maximum.", C: "Can I replace the sign?" },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "회사 야유회에 신청하시겠어요?",
            translation_A: "물론이죠, 제 이름을 적어둘게요.",
            translation_B: "최대 20명입니다.",
            translation_C: "간판을 교체해도 될까요?"
        },
        {
            id: "v3-p2-t01-q12",
            text: "How often do I have to submit my time sheet?",
            options: { A: "Five sheets of paper.", B: "You need to do it once a week.", C: "No, I don't usually wear a watch." },
            correctAnswer: "B",
            questionType: "How",
            translation: "근무 시간 기록표를 얼마나 자주 제출해야 하나요?",
            translation_A: "종이 다섯 장요.",
            translation_B: "일주일에 한 번 제출하셔야 합니다.",
            translation_C: "아니요, 저는 보통 시계를 차지 않습니다."
        },
        {
            id: "v3-p2-t01-q13",
            text: "I can buy a monthly gym membership, right?",
            options: { A: "A very popular exercise routine.", B: "The exercise room is on your right.", C: "Yes, at the front desk." },
            correctAnswer: "C",
            questionType: "Tag",
            translation: "체육관 월간 회원권을 살 수 있죠, 그렇죠?",
            translation_A: "매우 인기 있는 운동 루틴입니다.",
            translation_B: "운동실은 오른쪽에 있습니다.",
            translation_C: "네, 안내 데스크에서 가능합니다."
        },
        {
            id: "v3-p2-t01-q14",
            text: "Have you put price tags on all the clearance items?",
            options: { A: "Yes, everything's been labeled.", B: "It is a little cloudy.", C: "Where is your name tag?" },
            correctAnswer: "A",
            questionType: "YesNo",
            translation: "모든 재고 정리 품목에 가격표를 붙이셨나요?",
            translation_A: "네, 모두 라벨이 붙여졌습니다.",
            translation_B: "약간 흐리네요.",
            translation_C: "당신의 명찰은 어디에 있나요?"
        },
        {
            id: "v3-p2-t01-q15",
            text: "Don't we still need to change the newspaper layout?",
            options: { A: "Down the hall on your right.", B: "No, it's already been changed.", C: "A new computer program." },
            correctAnswer: "B",
            questionType: "Negative",
            translation: "여전히 신문 레이아웃을 변경해야 하지 않나요?",
            translation_A: "복도 끝 오른쪽에요.",
            translation_B: "아니요, 이미 변경되었습니다.",
            translation_C: "새로운 컴퓨터 프로그램입니다."
        },
        {
            id: "v3-p2-t01-q16",
            text: "What's the total cost of the repair work?",
            options: { A: "It's free because of the warranty.", B: "I have some boxes you can use.", C: "In a couple of hours." },
            correctAnswer: "A",
            questionType: "What",
            translation: "수리 작업의 총 비용이 얼마인가요?",
            translation_A: "보증 기간 덕분에 무료입니다.",
            translation_B: "사용하실 수 있는 상자가 몇 개 있습니다.",
            translation_C: "두어 시간 내에요."
        },
        {
            id: "v3-p2-t01-q17",
            text: "Where can I get a new filing cabinet?",
            options: { A: "All of the cabins have been rented.", B: "I'll put the tiles in the corner.", C: "All furniture requests must be approved first." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "새 파일 캐비닛을 어디서 구할 수 있을까요?",
            translation_A: "모든 오두막(캐빈)이 임대되었습니다.",
            translation_B: "구석에 타일을 놓을게요.",
            translation_C: "모든 가구 요청은 먼저 승인을 받아야 합니다."
        },
        {
            id: "v3-p2-t01-q18",
            text: "How do I reset my password?",
            options: { A: "By the end of the month.", B: "You should call the help desk.", C: "Thanks for setting the table." },
            correctAnswer: "B",
            questionType: "How",
            translation: "비밀번호를 어떻게 재설정하나요?",
            translation_A: "이달 말까지요.",
            translation_B: "헬프 데스크에 전화하셔야 합니다.",
            translation_C: "상 차리는 것을 도와주셔서 감사합니다."
        },
        {
            id: "v3-p2-t01-q19",
            text: "Could you check to see if that monitor is plugged in?",
            options: { A: "I didn't send them yet.", B: "A longer power cord.", C: "Do you want me to check them all?" },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "저 모니터가 연결되어 있는지 확인해 주시겠어요?",
            translation_A: "아직 보내지 않았습니다.",
            translation_B: "더 긴 전원 코드입니다.",
            translation_C: "모든 모니터를 다 확인해 드릴까요?"
        },
        {
            id: "v3-p2-t01-q20",
            text: "Is the new inventory process more efficient?",
            options: { A: "It only took me an hour.", B: "Yes, she's new here.", C: "I'll have the fish." },
            correctAnswer: "A",
            questionType: "Indirect",
            translation: "새로운 재고 관리 프로세스가 더 효율적인가요?",
            translation_A: "한 시간밖에 걸리지 않았습니다.",
            translation_B: "네, 그녀는 여기 처음입니다.",
            translation_C: "생선 요리로 할게요."
        },
        {
            id: "v3-p2-t01-q21",
            text: "Would you like some ice cream or cake for dessert?",
            options: { A: "Because I'm hungry.", B: "Yes, I liked it.", C: "I'm trying to avoid sugar." },
            correctAnswer: "C",
            questionType: "Choice",
            translation: "디저트로 아이스크림이나 케이크 좀 드시겠어요?",
            translation_A: "배가 고프기 때문입니다.",
            translation_B: "네, 좋았습니다.",
            translation_C: "당분 섭취를 피하려고 노력 중입니다."
        },
        {
            id: "v3-p2-t01-q22",
            text: "Who's doing the product demonstration this afternoon?",
            options: { A: "That bus station is closed, sorry.", B: "I'm leaving for New York at lunchtime.", C: "Let me show you a few more." },
            correctAnswer: "B",
            questionType: "Indirect",
            translation: "오늘 오후에 제품 시연을 누가 하나요?",
            translation_A: "그 버스 정류장은 폐쇄되었습니다, 죄송합니다.",
            translation_B: "저는 점심 때 뉴욕으로 떠납니다.",
            translation_C: "몇 가지 더 보여드릴게요."
        },
        {
            id: "v3-p2-t01-q23",
            text: "Your presentation's being reviewed at today's managers' meeting.",
            options: { A: "I didn't have much time to complete it.", B: "Next slide, please.", C: "That movie had great reviews." },
            correctAnswer: "A",
            questionType: "Statement",
            translation: "오늘 매니저 회의에서 당신의 발표 자료가 검토될 예정입니다.",
            translation_A: "완성할 시간이 별로 없었습니다.",
            translation_B: "다음 슬라이드로 넘겨주세요.",
            translation_C: "그 영화는 평이 아주 좋았습니다."
        },
        {
            id: "v3-p2-t01-q24",
            text: "Don't you carry these shoes in red?",
            options: { A: "I'll lift from this end.", B: "There's a new shipment coming tomorrow.", C: "I have time to read it now." },
            correctAnswer: "B",
            questionType: "Negative",
            translation: "이 신발 빨간색으로는 안 나오나요?",
            translation_A: "이쪽 끝에서 들어 올릴게요.",
            translation_B: "내일 새 배송 물량이 들어옵니다.",
            translation_C: "지금 읽어볼 시간이 있습니다."
        },
        {
            id: "v3-p2-t01-q25",
            text: "Would you like to have lunch with the clients?",
            options: { A: "About a three-hour flight.", B: "The first stage of the project.", C: "Sure, we can go to the café downstairs." },
            correctAnswer: "C",
            questionType: "YesNo",
            translation: "고객들과 점심 식사를 같이 하시겠어요?",
            translation_A: "약 3시간 정도 비행입니다.",
            translation_B: "프로젝트의 첫 번째 단계입니다.",
            translation_C: "물론이죠, 아래층 카페로 가요."
        },
        {
            id: "v3-p2-t01-q26",
            text: "How about hiring an event planner to organize the holiday party?",
            options: { A: "I think it's on the lower shelf.", B: "Sure, I'd love to attend.", C: "There's not much money in the budget." },
            correctAnswer: "C",
            questionType: "Indirect",
            translation: "휴일 파티 기획을 위해 이벤트 플래너를 고용하는 게 어때요?",
            translation_A: "아래쪽 선반에 있는 것 같아요.",
            translation_B: "물론이죠, 저도 참석하고 싶습니다.",
            translation_C: "예산이 넉넉하지 않습니다."
        },
        {
            id: "v3-p2-t01-q27",
            text: "Isn't that carmaker planning to start exporting electric cars?",
            options: { A: "Yes, I've heard that's the plan.", B: "A ticket to next year's car show.", C: "Congratulations on your promotion!" },
            correctAnswer: "A",
            questionType: "Negative",
            translation: "그 자동차 제조업체가 전기차 수출을 시작할 계획이지 않나요?",
            translation_A: "네, 저도 그것이 계획이라고 들었습니다.",
            translation_B: "내년 자동차 전시회 티켓 한 장요.",
            translation_C: "승진을 축하드립니다!"
        },
        {
            id: "v3-p2-t01-q28",
            text: "David trained the interns to use the company database, didn't he?",
            options: { A: "Actually, it was Hillary.", B: "An internal audit.", C: "He's good company." },
            correctAnswer: "A",
            questionType: "Tag",
            translation: "데이비드가 인턴들에게 회사 데이터베이스 사용법을 교육했죠, 그렇죠?",
            translation_A: "사실 힐러리 씨가 했습니다.",
            translation_B: "내부 감사입니다.",
            translation_C: "그는 좋은 동료입니다."
        },
        {
            id: "v3-p2-t01-q29",
            text: "Who's responsible for researching the housing market in India?",
            options: { A: "The senior director is heading up that team.", B: "Every morning at ten o'clock.", C: "Yes, it's on Main Street." },
            correctAnswer: "A",
            questionType: "Who",
            translation: "인도 주택 시장 조사는 누가 담당하고 있나요?",
            translation_A: "상무이사님이 그 팀을 이끌고 계십니다.",
            translation_B: "매일 아침 10시 정각에요.",
            translation_C: "네, 메인 가에 있습니다."
        },
        {
            id: "v3-p2-t01-q30",
            text: "Have you arranged a ride to take us to the convention center, or should I?",
            options: { A: "Unfortunately, there isn't an extra bag.", B: "I don't have the phone number for the taxi service.", C: "We've accepted credit cards before." },
            correctAnswer: "B",
            questionType: "Choice",
            translation: "컨벤션 센터까지 데려다줄 차편을 준비하셨나요, 아니면 제가 할까요?",
            translation_A: "불행히도 여분의 가방이 없습니다.",
            translation_B: "택시 서비스 전화번호가 없습니다.",
            translation_C: "전에도 신용카드를 받은 적이 있습니다."
        },
        {
            id: "v3-p2-t01-q31",
            text: "These purchases should have been entered on your expense report.",
            options: { A: "No thanks, I don't need anything from the store.", B: "The entrance is on Thirty-First Street.", C: "I thought I had until Friday to do that." },
            correctAnswer: "C",
            questionType: "Statement",
            translation: "이 구매 내역들은 당신의 경비 보고서에 기입되었어야 했습니다.",
            translation_A: "괜찮습니다, 가게에서 필요한 건 없어요.",
            translation_B: "입구는 31번가에 있습니다.",
            translation_C: "금요일까지 하면 되는 줄 알았습니다."
        }
    ]
};
