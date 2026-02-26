import { Part6TestSet } from './types';

export const test09Data: Part6TestSet = {
    testId: 9,
    vol: 4,
    title: "Test 9",
    passages: [
        {
            setId: "v4-p6-t09-p1",
            contextType: "P2",
            docType: "notice",
            guidance: "Questions 131-134 refer to the following notice.",
            content: "Sky Air First Pass\n\nThank you for flying Sky Air First with ___131___. We hope you enjoy your flight.\n\nYou can take advantage of our best prices on future flights ___132___ purchasing a Sky Air First Pass.\n\nFor a ___133___ annual fee, you will get special discounts, seat upgrades, and the use of our exclusive travelers' lounge. ___134___. Ask your flight attendant for more information and an application.",
            translation: "스카이 에어 퍼스트 패스\n\n저희 131 스카이 에어 퍼스트를 이용해 주셔서 감사합니다. 즐거운 비행 되시길 바랍니다.\n\n스카이 에어 퍼스트 패스를 132 구입함으로써 향후 비행편에 대해 당사의 최적가를 이용하실 수 있습니다.\n\n133 저렴한 연회비로 특별 할인, 좌석 업그레이드 및 당사 전용 여행자 라운지 이용 혜택을 받으실 수 있습니다. 134 또한 우선 탑승 혜택도 받으실 수 있습니다. 더 자세한 정보와 신청서는 객실 승무원에게 문의하십시오.",
            questions: [
                {
                    id: "v4-p6-t09-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "them",
                        B: "theirs",
                        C: "us",
                        D: "ours"
                    },
                    correctAnswer: "C",
                    explanation: "문맥상 '우리(Sky Air)와 함께 비행해 주셔서 감사합니다'라는 의미가 되어야 하므로 전치사 with의 목적어 자리에 1인칭 복수 대명사의 목적격인 (C) us가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t09-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "at",
                        B: "on",
                        C: "by",
                        D: "to"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 뒤에 동명사 purchasing(구매하는 것)이 오고 있으므로, 수단이나 방법을 나타내는 전치사 'by(~함으로써)'가 들어가는 것이 적절하다. 따라서 (C)가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t09-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "lowers",
                        B: "low",
                        C: "lowly",
                        D: "lowest"
                    },
                    correctAnswer: "B",
                    explanation: "명사 annual fee를 수식하는 형용사 자리이다. '저렴한 연회비'라는 의미가 자연스러우므로 형용사 원급인 (B) low가 정답이다. (A) lowers는 동사, (C) lowly는 부사/형용사(천한), (D) lowest는 최상급이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t09-q134",
                    questionNo: 134,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "We hope you will fly Sky Air First again.",
                        B: "You will also get priority boarding.",
                        C: "Please find your seat immediately.",
                        D: "The flight delay will be minimal."
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 Sky Air First Pass의 여러 혜택(특별 할인, 좌석 업그레이드, 라운지 이용)을 나열하고 있으므로, 빈칸에도 추가적인 혜택을 언급하는 내용이 오는 것이 자연스럽다. 따라서 우선 탑승(priority boarding) 혜택을 추가로 언급하는 (B)가 정답이다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t09-p2",
            contextType: "P3",
            docType: "article",
            guidance: "Questions 135-138 refer to the following article.",
            content: "CJOK Radio Show Welcomes New Staff\n\nQUEENSVILLE (7 July)—Local radio station CJOK announced Katherine Dees as the new producer of the popular show Out and About in Queensville. Ms. Dees is now ___135___ for coordinating schedules, booking guests for the show, and managing media relations.\n\n___136___, the station hired sound editor Virginia Thacker and production assistant Reggie Dietrich to support Ms. Dees in her new role. ___137___.\n\nOut and About in Queensville, which has been airing for 30 years, is performed live weekly from September to May in the Orpheum Theater in downtown Queensville. The show ___138___ musical guests, writers, and storytellers for an hour of weekly programming.",
            translation: "CJOK 라디오 프로그램, 신규 직원 환영\n\n퀸즈빌 (7월 7일) — 지역 라디오 방송국 CJOK는 인기 프로그램인 'Out and About in Queensville'의 새 프로듀서로 캐서린 디스를 발표했습니다. 디스 씨는 이제 일정 조정, 출연진 섭외, 그리고 언론 관계 관리를 135 책임지게 됩니다.\n\n136 게다가, 방송국은 디스 씨의 새로운 역할을 지원하기 위해 사운드 에디터 버지니아 태커와 프로덕션 어시스턴트 레지 디트리히를 고용했습니다. 137 이러한 최근의 고용은 프로듀서 에드 에반스의 은퇴에 따른 것입니다.\n\n30년 동안 방송되어 온 'Out and About in Queensville'은 9월부터 5월까지 퀸즈빌 시내의 오르페움 극장에서 매주 생방송으로 진행됩니다. 이 프로그램은 매주 1시간의 방송 동안 음악가, 작가, 이야기꾼들을 138 출연시킵니다.",
            questions: [
                {
                    id: "v4-p6-t09-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "responsive",
                        B: "responsibly",
                        C: "responding",
                        D: "responsible"
                    },
                    correctAnswer: "D",
                    explanation: "be동사 뒤에서 주격 보어 역할을 하며, 'be responsible for(~을 책임지다)' 숙어 표현을 완성하는 형용사 (D) responsible이 정답이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t09-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "Even so",
                        B: "In fact",
                        C: "For example",
                        D: "In addition"
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에서 새 프로듀서 임용 소식을 전했고, 빈칸이 있는 문장에서 추가로 다른 직원들의 고용 소식을 전하고 있으므로 '게다가, 추가로'라는 의미의 (D) In addition이 적절하다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t09-q137",
                    questionNo: 137,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "CJOK was founded 60 years ago.",
                        B: "These recent hires follow the retirement of producer Ed Evans.",
                        C: "Ms. Dees was born and raised in Cedarburg.",
                        D: "CJOK has more than one popular show in its lineup."
                    },
                    correctAnswer: "B",
                    explanation: "앞에서 언급된 일련의 신규 채용(recent hires)의 배경을 설명하는 내용이 오는 것이 자연스럽다. 전임 프로듀서의 은퇴로 인한 인력 보강임을 설명하는 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t09-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "gives",
                        B: "marks",
                        C: "features",
                        D: "holds"
                    },
                    correctAnswer: "C",
                    explanation: "프로그램이 음악가나 작가 등을 '특징으로 하다' 또는 '출연시키다'라는 의미가 되어야 하므로 (C) features가 가장 적절하다.",
                    classification: "p6v"
                }
            ]
        },
        {
            setId: "v4-p6-t09-p3",
            contextType: "P3",
            docType: "e-mail",
            guidance: "Questions 139-142 refer to the following e-mail.",
            content: "To: Sandra Barga <sbarga97@hjmail.ca>\nFrom: Artie Romanche <service@northwestbags.ca>\nDate: 12 July\nSubject: Order number 71280\n\nDear Ms. Barga:\n\nWe received your recent order asking for your name to be stitched on a Klamath Kool handbag.\n\nWe are, ___139___, eager to complete your order. Unfortunately, our seamstress who fulfills personalisation requirements will be on leave for the next three days. We wanted to let you know that her ___140___ will cause a delay in shipping your bag.\n\n___141___ for the wait, we would like to offer you a 10 percent discount on your current order. Or, if you prefer, you can opt for free personalisation on your next order. ___142___. At Northwest Bags, we strive for 100 percent customer satisfaction!\n\nSincerely,\n\nArtie Romanche\nCustomer Service Representative, Northwest Bags",
            translation: "수신: 산드라 바르가 <sbarga97@hjmail.ca>\n발신: 아티 로망쉬 <service@northwestbags.ca>\n날짜: 7월 12일\n제목: 주문 번호 71280\n\n바르가 씨께:\n\n클라마스 쿨 핸드백에 이름을 바느질로 새겨달라는 고객님의 최근 주문을 받았습니다.\n\n저희는 139 당연히 고객님의 주문을 완수하기를 바랍니다. 안타깝게도, 개인 맞춤 서비스 주문을 담당하는 재봉사가 앞으로 3일간 휴가를 갈 예정입니다. 그녀의 140 부재로 인해 고객님의 가방 배송이 지연될 수 있음을 알려드리고자 합니다.\n\n기다리시는 동안의 불편을 141 보상해 드리기 위해, 이번에 주문하신 상품에 10퍼센트 할인을 제공해 드리고자 합니다. 아니면, 원하실 경우 다음 주문 시 무료 개인 맞춤 서비스를 선택하실 수 있습니다. 142 고객님께서 선택하시면 됩니다. 노스웨스트 백스에서는 고객 만족 100퍼센트를 위해 노력합니다!\n\n아티 로망쉬\n고객 서비스 담당자, 노스웨스트 백스",
            questions: [
                {
                    id: "v4-p6-t09-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "still",
                        B: "besides",
                        C: "of course",
                        D: "nevertheless"
                    },
                    correctAnswer: "C",
                    explanation: "주문을 받았다는 앞 문장에 이어 '물론 당연히' 완수하고 싶다는 의지를 강조하는 문맥이므로 삽입구인 (C) of course가 정답이다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t09-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "absence",
                        B: "arrival",
                        C: "request",
                        D: "investigation"
                    },
                    correctAnswer: "A",
                    explanation: "재봉사가 휴가를 간다는 앞 문장의 내용을 받아, 그녀의 '부재(absence)'가 배송 지연을 초래할 것이라는 의미가 되어야 하므로 (A)가 정답이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t09-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "Compensated",
                        B: "To compensate",
                        C: "For compensating",
                        D: "It is compensation"
                    },
                    correctAnswer: "B",
                    explanation: "문장 맨 앞에서 '~하기 위하여'라는 목적의 의미를 나타내어 뒤의 주절을 수식하는 부사적 용법의 to부정사가 필요하다. 따라서 (B) To compensate가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t09-q142",
                    questionNo: 142,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "The choice is yours.",
                        B: "We appreciate your review.",
                        C: "The bag will look great with your initials on it.",
                        D: "We are the only local retailer offering custom services."
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에서 두 가지 보상 옵션(이번 주문 할인 또는 다음 주문 무료 맞춤 서비스)을 제시했으므로, 고객이 원하는 것을 선택하라는 의미인 (A) The choice is yours(고객님의 선택입니다)가 가장 자연스럽다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t09-p4",
            contextType: "P2",
            docType: "article",
            guidance: "Questions 143-146 refer to the following article.",
            content: "Sehelec Announces Wind-Solar Hybrid Project\n\nMUMBAI (15 March)—Sehelec Ltd. announced it will begin construction on a 500-megawatt wind-solar hybrid power ___143___ outside of Bangalore, India. ___144___. Sehelec expects to begin operations within 24 months, and it will sell the power to Indian energy giant Novaseon Industries.\n\n\"Our contract with Novaseon to provide ___145___ power moves us closer to our long-term corporate goal,\" said Sumit Varma, CEO of Sehelec. \"Our objective is to achieve a capacity of 20 gigawatts within five years. Doing so will make us one of India's largest green power companies. And that, in turn, will help the country ___146___ its carbon-reduction target.\"",
            translation: "세헬렉, 풍력-태양광 하이브리드 프로젝트 발표\n\n뭄바이 (3월 15일) — 세헬렉 유한 회사는 인도 방갈로르 외곽에 500메가와트 규모의 풍력-태양광 하이브리드 143 발전소 건설을 시작한다고 발표했습니다. 144 이 시설은 태양 전지판과 풍력 터빈이 혼합된 형태로 조성될 것입니다. 세헬렉은 24개월 이내에 가동을 시작할 것으로 예상하며, 인도의 거대 에너지 기업인 노바선 인더스트리에 전력을 판매할 예정입니다.\n\n\"노바선과의 145 재생 가능한 전력 공급 계약으로 우리의 장기적인 기업 목표에 더 가까워지고 있습니다.\"라고 세헬렉의 최고 경영자인 수미트 바르마는 말했다. \"우리의 목표는 5년 내에 20기가와트 용량을 달성하는 것입니다. 그렇게 함으로써 우리는 인도에서 가장 큰 친환경 전력 회사 중 하나가 될 것입니다. 그리고 그것은 결과적으로 인도가 탄소 저감 목표에 146 도달하는 데 도움이 될 것입니다.\"",
            questions: [
                {
                    id: "v4-p6-t09-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "plant",
                        B: "planter",
                        C: "planting",
                        D: "planted"
                    },
                    correctAnswer: "A",
                    explanation: "풍력-태양광 하이브리드 '발전소'라는 의미가 되어야 하므로 '공장, 발전소'를 뜻하는 명사 (A) plant가 정답이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t09-q144",
                    questionNo: 144,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Windy conditions can cause damage to tall buildings.",
                        B: "The facility will consist of a mix of solar panels and wind turbines.",
                        C: "Electric vehicles have fewer emissions than other vehicles have.",
                        D: "The pace of upgrades to India's power grid slowed slightly this year."
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 언급한 'wind-solar hybrid'가 어떤 방식으로 구성되는지 구체적으로 설명하는 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t09-q145",
                    questionNo: 145,
                    text: "Select the best answer.",
                    options: {
                        A: "renew",
                        B: "renewers",
                        C: "renewable",
                        D: "to renew"
                    },
                    correctAnswer: "C",
                    explanation: "명사 power를 수식하여 '재생 가능한 전력'이라는 의미를 만드는 형용사 (C) renewable이 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t09-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "understand",
                        B: "explain",
                        C: "block",
                        D: "reach"
                    },
                    correctAnswer: "D",
                    explanation: "국가(인도)가 탄소 저감 목표에 '도달하다, 달성하다'라는 의미가 되어야 하므로 (D) reach가 가장 적절하다.",
                    classification: "p6v"
                }
            ]
        }
    ]
};
