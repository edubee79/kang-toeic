import { Part6TestSet } from './types';

export const test06Data: Part6TestSet = {
    testId: 6,
    vol: 4,
    title: "Test 6",
    passages: [
        {
            setId: "v4-p6-t06-p1",
            contextType: "P2",
            docType: "advertisement",
            guidance: "Questions 131-134 refer to the following advertisement.",
            content: "Estella Guitar Lessons: Play with the Best\n\nWhether you play acoustic guitar ___131___ electric, taking lessons with an Estella Guitar teacher is the best way to improve your ability. With years of experience crafting playing techniques, ___132___ qualified instructors can tailor lessons to focus on the skills you want to fine-tune. Receive a customized learning plan to set goals and overcome the challenges that cause many players to get discouraged. ___133___. An Estella Guitar teacher will help boost your confidence.\n\nAt Estella Guitar, we believe that playing music is a way of expressing yourself. ___134___, we will help you go beyond the familiar chords and riffs to develop your own identity as a musician. Ready to get started? Visit www.estellaguitar.com/lessons to get matched with the right instructor for you!",
            translation: "에스텔라 기타 강습: 최고와 연주하세요.\n\n어쿠스틱 기타를 연주하든 131 전지 기타를 연주하든, 에스텔라 기타 선생님과 함께하는 수업은 여러분의 실력을 향상시키는 최고의 방법입니다. 연주 기술을 다듬어온 다년간의 경험을 가진 132 우리의 자격을 갖춘 강사들이 여러분이 세부 조정을 원하는 기술에 초점을 두어 맞춤 수업을 제공합니다. 목표를 설정하고 많은 연주자들을 낙담시키는 어려움을 극복하기 위한 맞춤형 학습 계획을 받아 보세요. 133 학습자로서 여러분에게 가장 좋은 자원은 여러분의 발전 과정을 지도해 주는 전문가입니다. 에스텔라 기타 선생님이 자신감을 높이도록 도와드릴 것입니다.\n\n에스텔라 기타에서는 음악을 연주하는 것이 자신을 표현하는 방법이라고 믿습니다. 134 이를 염두에 두고, 익숙한 화음과 리프를 넘어 음악가로서 자신만의 정체성을 개발할 수 있도록 도와드리겠습니다. 시작할 준비가 되셨나요? www.estellaguitar.com/lessons를 방문하셔서 여러분에게 맞는 강사를 찾으세요!",
            questions: [
                {
                    id: "v4-p6-t06-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "is",
                        B: "or",
                        C: "likely",
                        D: "from"
                    },
                    correctAnswer: "B",
                    explanation: "Whether는 부사절 접속사로 쓰일 때 등위접속사 or가 뒤따라야 하며, 'whether A or B'의 형태로 쓰여 'A이든 B이든 상관없이'라는 의미를 나타낸다. Whether가 이끄는 부사절에 빈칸이 있고, 문맥상 '어쿠스틱 기타를 연주하든 전자 기타를 연주하든'이라는 의미가 되어야 하므로 (B) or이 정답이다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t06-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "our",
                        B: "ourselves",
                        C: "ours",
                        D: "us"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸에는 뒤에 온 명사구 qualified instructors를 수식하는 인칭대명사가 들어가야 한다. 따라서 명사 앞에 쓰여 한정사 역할을 할 수 있는 소유격 인칭대명사 (A) our가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t06-q133",
                    questionNo: 133,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Contact a technician for questions about repairs.",
                        B: "A high-quality instrument will help you to perform at your best.",
                        C: "The best resource for you as a learner is an expert to guide your progress.",
                        D: "It took them several years to master their instruments."
                    },
                    correctAnswer: "C",
                    explanation: "앞 문장에서 강사들이 학생이 조정하고 싶어 하는 기술에 초점을 두어 수업을 맞춰주는 맞춤형 학습 계획을 제공한다(qualified instructors can tailor lessons ~ to fine-tune)고 했고, 뒤 문장에는 선생님이 자신감을 높이도록 도와준다(An Estella Guitar teacher will help boost your confidence)며 기타 연주 실력을 습득하는 데 있어 강사의 역할을 강조하고 있다. 따라서 빈칸에는 학습자에게 가장 좋은 자원은 지도 전문가, 즉 강사라고 언급하는 내용이 들어가야 앞뒤 연결이 자연스러우므로 (C)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t06-q134",
                    questionNo: 134,
                    text: "Select the best answer.",
                    options: {
                        A: "So far",
                        B: "With that in mind",
                        C: "On a different note",
                        D: "At that point"
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에는 에스텔라 기타에서는 음악을 연주하는 것이 자신을 표현하는 방법이라고 믿는다는 내용이 있고, 뒤 문장에는 음악가로서 자신만의 정체성을 개발할 수 있도록 도와준다(develop your own identity as a musician)고 했다. 두 문장이 인과 관계를 나타내고 있으므로 '그 점을 염두에 두고'를 뜻하는 (B) With that in mind가 정답이다. (A) So far는 '지금까지', (C) On a different note는 '그런데, 주제를 바꿔서', (D) At that point는 '그 시점에서, 그러한 관점에서'라는 의미이다.",
                    classification: "p6c"
                }
            ]
        },
        {
            setId: "v4-p6-t06-p2",
            contextType: "P2",
            docType: "policy",
            guidance: "Questions 135-138 refer to the following policy.",
            content: "In-home delivery takes approximately one week after an order is shipped from our warehouse. The actual time may vary based on the location of your ___135___ and your availability for accepting the item. Vernico Furniture will work with a carrier ___136___ an appointment that is convenient for you. Typical hours are Monday through Friday between 8 A.M. and 5 P.M., ___137___ evening appointments can often be arranged. Upon arrival at your home, the item will be placed in the location you desire. ___138___. Assembly is included as well.",
            translation: "자택 배송은 주문이 창고에서 발송된 후 약 일주일이 걸립니다. 실제 시간은 135 거주지의 위치 및 물품 수령 가능 여부에 따라 달라질 수 있습니다. 베르니코 가구는 귀하에게 편리한 시간을 136 잡기 위해 운송 회사와 협력할 것입니다. 일반적인 시간은 월요일부터 금요일까지 오전 8시부터 오후 5시 사이 137 이지만, 저녁 예약도 종종 가능합니다. 주문 상품은 집에 도착하는 즉시 원하시는 위치에 놓입니다. 138 포장재는 모두 제거됩니다. 조립 서비스도 포함되어 있습니다.",
            questions: [
                {
                    id: "v4-p6-t06-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "garden",
                        B: "records",
                        C: "residence",
                        D: "organization"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞 문장에서 주문이 창고에서 발송된 후 자택 배송에 걸리는 대략적인 시간을 언급하였으므로, 집의 위치에 따라 실제 배송 시간이 달라질 수 있다는 내용이 되어야 적절하다. 따라서 '주택, 거주지'를 뜻하는 (C) residence가 정답이다. (A) garden은 '정원', (B)의 record는 '기록', (D) organization은 '조직, 단체'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t06-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "to schedule",
                        B: "is scheduling",
                        C: "as a schedule",
                        D: "that scheduled"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 앞에 완전한 절(Vernico Furniture will work ~ carrier)이 있고 빈칸 뒤에 명사구 an appointment를 목적어로 취할 수 있어야 하므로 부사 역할 혹은 형용사 역할을 하는 to부정사가 와야 한다. 문맥상 '~하기 위한 목적의 의미를 가진 (A) to schedule이 정답이다. (D) that scheduled는 '약속을 (과거에) 잡은'이라는 의미가 되어 문맥에 적합하지 않다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t06-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "if so",
                        B: "when",
                        C: "though",
                        D: "in the meantime"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 뒤에 완전한 절(evening appointments can often be arranged)이 왔으므로 부사절 접속사가 들어가야 한다. 문맥상 '일반적인 시간은 오전 8시부터 오후 5시 사이이지만 저녁 예약도 가능하다'라는 내용이 되어야 자연스러우므로 '~이지만'이라는 의미의 (C) though가 정답이다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t06-q138",
                    questionNo: 138,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "When buying a home, location is extremely important.",
                        B: "Refinishing furniture is a form of art.",
                        C: "Furnished apartments can be found online.",
                        D: "All packing materials will be removed."
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 앞 문장에서 주문 상품은 도착 즉시 원하는 위치에 놓인다(Upon arrival at your home, the item will be placed in the location you desire)고 했고, 빈칸 뒤 문장에서는 조립 서비스도 포함되어 있다(Assembly is included as well)며 가구가 배송되었을 때 제공되는 서비스를 열거하고 있다. 따라서 두 문장 사이에도 마찬가지로 가구 배송 시 제공되는 서비스 내용이 들어가야 적합하므로 포장재를 제거한다고 언급하는 (D)가 정답이다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t06-p3",
            contextType: "P3",
            docType: "email",
            guidance: "Questions 139-142 refer to the following e-mail.",
            content: "To: Thao Pham <thaopham@amail.com>\nFrom: Leena Montoya <lmontoya@academemedia.com>\nDate: April 17\nSubject: Subscription\n\nDear Mr. Pham,\n\n___139___. Your subscription to Medical Innovations Quarterly has been canceled. ___140___ May 1, you will no longer receive the print edition.\n\nWe hope that you will consider once again becoming a ___141___ of our publications. Academe Media publishes many high-quality scientific journals in addition to Medical Innovations Quarterly. Should you wish to subscribe to one by May 31, we can offer you a two-year subscription at the annual rate. Visit www.academemedia.com/shop and enter the code DOUBLE ___142___ checkout.\n\nIf you have any feedback that could help us improve our products or services, please call me directly at 212-555-0122.\n\nSincerely,\n\nLeena Montoya\nCustomer Service Manager, Academe Media",
            translation: "수신: 타오 팜 <thaopham@amail.com>\n발신: 리나 몬토야 <lmontoya@academemedia.com>\n날짜: 4월 17일\n제목: 구독\n\n팜 씨께,\n\n139 귀하의 요청을 처리하였습니다. <분기별 의료 혁신>의 구독이 취소되었습니다. 5월 1일 140 부터, 더 이상 인쇄본을 받지 않게 되실 겁니다.\n\n귀하께서 저희 출판물의 141 독자가 되는 것을 다시 한번 고려해 주시기를 바랍니다. 아카데미 미디어는 <분기별 의료 혁신> 외에도 많은 고품질 과학 저널을 발행하고 있습니다. 5월 31일까지 구독을 희망하실 경우, 귀하께 연간 요금으로 2년 구독을 제공해 드릴 수 있습니다. www.academemedia.com/shop을 방문하셔서 결제 142 시 코드 DOUBLE을 입력하십시오.\n\n제품이나 서비스 개선에 도움이 될 수 있는 의견이 있으시면 212-555-0122로 직접 전화 주십시오.\n\n리나 몬토야\n고객 서비스 관리자, 아카데미 미디어",
            questions: [
                {
                    id: "v4-p6-t06-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "Thank you for your timely order.",
                        B: "We have processed your request.",
                        C: "This is a payment reminder.",
                        D: "Please contact us to update your information."
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 뒤 문장에서 잡지의 구독이 취소되었다(Your subscription ~ canceled)며 5월 1일부터 더 이상 잡지를 받지 않게 될 것(Starting May 1, you will no ~ print edition)이라고 했으므로, 빈칸에는 잡지 구독을 취소했다는 내용이 들어가야 적절하다. 따라서 '귀하의 요청(구독 취소)을 처리했다'고 언급하는 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t06-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "Starts",
                        B: "Started",
                        C: "Starter",
                        D: "Starting"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 쉼표 뒤의 완전한 절(you will no longer receive the print edition)에 시간 부사구 May 1를 연결하는 자리이다. 문맥상 '5월 1일부터 인쇄본을 받지 않게 될 것이다'라는 내용이 들어가야 자연스러우므로 '~부터, ~부터 시작해서'라는 의미를 나타내는 분사구문 관용 표현 (D) Starting이 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t06-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "distributor",
                        B: "producer",
                        C: "reader",
                        D: "teacher"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞에서 귀하의 요청을 처리하여 출판물의 구독이 취소되었다고 했으므로, 해당 문장은 출판물의 구독자가 되는 것을 다시 고려해 달라고 요청하는 내용이 되어야 적절하다. 따라서 '독자'를 뜻하는 (C) reader가 정답이다. (A) distributor는 '유통업자', (B) producer는 '생산자', (D) teacher는 '선생님'이라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t06-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "until",
                        B: "upon",
                        C: "without",
                        D: "next"
                    },
                    correctAnswer: "B",
                    explanation: "명사 checkout을 목적어로 취하는 전치사 자리로, '결제 시 코드르 입력하라'는 내용이 되어야 하므로 '~ 즉시, ~하자마자'를 뜻하는 (B) upon이 정답이다.",
                    classification: "p6c"
                }
            ]
        },
        {
            setId: "v4-p6-t06-p4",
            contextType: "P3",
            docType: "information",
            guidance: "Questions 143-146 refer to the following information.",
            content: "In a commercial kitchen, all refrigerators are required to have a thermometer that ___143___ from 0°F (-18°C) to 220°F (104°C). To prevent the growth of bacteria, refrigerated foods must be stored at 41°F (5°C) or below. The head chef is responsible for checking these thermometers throughout the day to ensure that the kitchen is in compliance at all times.\n\nAlso important to consider is ___144___. Thermometers should always be located in the warmest spot in the refrigerator. ___145___. This location is also appropriate because it allows the thermometer to be easily ___146___ as soon as the door is opened.",
            translation: "상업용 주방에서는 모든 냉장고에 0°F(-18°C)에서 220°F(104°C) 143 범위의 온도가 있어야 합니다. 세균이 자라는 것을 막기 위해 냉장 식품은 41°F(5°C) 이하에서 보관되어야 합니다. 수석 주방장은 주방이 항상 규정을 준수하는 상태일 수 있도록 하루 종일 이 온도계들을 점검할 책임이 있습니다.\n\n144 배치 또한 고려해야 할 중요한 사안입니다. 온도계는 항상 냉장고에서 가장 따뜻한 지점에 위치해야 합니다. 145 이곳은 보통 문 안쪽입니다. 이 위치는 문을 열자마자 온도계를 쉽게 146 볼 수 있기 때문에 적합한 점도 있습니다.",
            questions: [
                {
                    id: "v4-p6-t06-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "ranges",
                        B: "ranger",
                        C: "ranged",
                        D: "ranging"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸은 선행사 a thermometer를 수식하는 관계사절(that ~ 104°C)의 동사 자리이다. 상업용 주방에 필요한 온도계의 온도 범위를 설명하는 내용이므로 현재 시제를 써야 한다. 따라서 (A) ranges가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t06-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "size",
                        B: "safety",
                        C: "reliability",
                        D: "placement"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 앞에서 냉장고에 들어갈 온도계의 적정 온도 규정을 설명하고 있고, 빈칸 뒤 문장에서는 온도계가 있어야 할 위치를 설명하고 있다. 따라서 빈칸이 있는 문장은 온도계의 온도 외에도 위치 또한 고려해야 할 사항이라는 내용이 되어야 뒤 문장과의 연결이 자연스러우므로 '배치'를 뜻하는 (D) placement가 정답이다. (A) size는 '크기', (B) safety는 '안전', (C) reliability는 '신뢰성'이라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t06-q145",
                    questionNo: 145,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Remove them carefully.",
                        B: "This is typically inside the door.",
                        C: "It should be kept cool at all times.",
                        D: "They can also be purchased in bulk."
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 앞 문장에서 온도계는 냉장고에서 가장 따뜻한 곳에 위치해야 한다(Thermometers ~ in the warmest spot in the refrigerator)고 했고, 뒤 문장에서는 이 위치는 문을 열자마자 쉽게 볼 수 있어 적합하다(This location is also appropriate ~ opened)고 했다. 따라서 빈칸에는 냉장고의 위치에 대한 내용이 들어가야 자연스러우므로 이곳은 냉장고 문 안쪽이라고 언급하는 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t06-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "sold",
                        B: "seen",
                        C: "repaired",
                        D: "removed"
                    },
                    correctAnswer: "B",
                    explanation: "동사 allows의 목적어 the thermometer를 보충 설명하는 목적격 보어 to부정사 to be 뒤에 수동 형태로 들어갈 동사 어휘를 고르는 문제이다. 앞 문장에서 온도계의 냉장고 속 적정 위치를 언급했으므로 이 위치는 냉장고 문을 열면 온도계가 '쉽게 보이므로' 적합하다는 내용이 되어야 연결이 자연스럽다. 따라서 (B) seen이 정답이다. (A)의 sell은 '팔다', (C)의 repair은 '수리하다', (D)의 remove는 '제거하다'라는 의미이다.",
                    classification: "p6v"
                }
            ]
        }
    ]
};
