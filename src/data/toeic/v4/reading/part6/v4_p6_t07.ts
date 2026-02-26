import { Part6TestSet } from './types';

export const test07Data: Part6TestSet = {
    testId: 7,
    vol: 4,
    title: "Test 7",
    passages: [
        {
            setId: "v4-p6-t07-p1",
            contextType: "P3",
            docType: "e-mail",
            guidance: "Questions 131-134 refer to the following e-mail.",
            content: "To: Naomi Richter <naomirichter@mailcurrent.com>\nFrom: Watanu Sakamoto <wsakamoto@RHNimports.com>\nDate: 23 November\nSubject: Follow-up\nAttachment: Logistics coordinator description\n\nDear Ms. Richter,\n\nThank you for coming to our office to interview for the assistant import manager position last week. We were impressed with your credentials and enthusiasm. ___131___ we are moving ahead with another candidate, we would like to offer you a different position that just became available: logistics coordinator.\n\n___132___. The attached document contains the detailed job description and pay rate. This ___133___ has not yet been posted publicly. If you are ___134___, please let me know by the end of this week.\n\nSincerely,\n\nWatanu Sakamoto\nHuman Resource Manager, RHN Imports",
            translation: "수신: 나오미 리히터 <naomirichter@mailcurrent.com>\n발신: 와타누 사카모토 <wsakamoto@RHNimports.com>\n날짜: 11월 23일\n제목: 후속 제안\n첨부: 물류 담당자 설명\n\n리히터 씨께,\n\n지난주에 수입 관리 대리직 면접을 위해 저희 사무실을 방문해 주셔서 감사합니다. 우리는 귀하의 자질과 열정에 깊은 인상을 받았습니다. 131 비록 다른 지원자로 추진 중이기는 하지만, 지금 막 자리가 난 물류 담당직을 귀하에게 제안드리고 싶습니다.\n\n132 귀하의 경험과 기량은 귀하를 훌륭한 적임자로 만듭니다. 첨부된 문서에는 상세한 직무 설명과 급여율이 포함되어 있습니다. 이 133 기회는 아직 공개적으로 게시되지 않았습니다. 134 관심 있으시면 이번 주말까지 알려 주십시오.\n\n와타누 사카모토\n인사부 부장, RHN 임포츠",
            questions: [
                {
                    id: "v4-p6-t07-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "Rather",
                        B: "Although",
                        C: "Similarly",
                        D: "Consequently"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 뒤에 오는 완전한 절(we are moving ahead with another candidate)을 콤마 뒤 주절에 연결하는 자리이므로, 빈칸에는 부사절 접속사가 들어가야 한다. 따라서 '비록 ~하지만'이라는 뜻의 접속사 (B) Although가 정답이다. (A) Rather는 '오히려', (C) Similarly는 '비슷하게', (D) Consequently는 '결과적으로'라는 뜻의 부사로 절을 연결할 수 없다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t07-q132",
                    questionNo: 132,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "There are several other internal applicants.",
                        B: "Unfortunately, the position is no longer available.",
                        C: "My assistant will schedule your second interview.",
                        D: "Your experience and skill set make you a great fit."
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에서 지금 막 자리가 난 물류 담당직(logistics coordinator)을 제안하고 싶다고 했고, 뒤 문장에서 첨부된 문서에는 직무 설명과 급여율이 포함되어 있다(The attached document contains the detailed job description and pay rate)며 물류 담당직에 지원할 것을 권하고 있다. 따라서 빈칸에는 귀하의 경험과 기량으로 보아 훌륭한 적임자라고 설득하는 내용이 들어가야 자연스러우므로 (D)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t07-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "opportunity",
                        B: "authorization",
                        C: "application",
                        D: "capacity"
                    },
                    correctAnswer: "A",
                    explanation: "앞에서 물류 담당직(logistics coordinator)을 제안하고 싶다며 일자리에 대해 설명하고 있으므로, 빈칸에는 이 일자리, 즉 취직 기회를 지칭할 수 있는 단어가 들어가야 적절하다. 따라서 '기회'를 뜻하는 (A) opportunity가 정답이다. (B) authorization은 '허가', (C) application은 '지원', (D) capacity는 '수용력'이라는 뜻이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t07-q134",
                    questionNo: 134,
                    text: "Select the best answer.",
                    options: {
                        A: "interest",
                        B: "interests",
                        C: "interested",
                        D: "interesting"
                    },
                    correctAnswer: "C",
                    explanation: "be동사 뒤에서 주어인 you를 보충 설명하는 주격 보어 자리로, 문맥상 사람이 느끼는 감정을 나타내는 형용사가 들어가야 자연스럽다. 따라서 '관심(흥미) 있어 하는'이라는 뜻의 과거분사 (C) interested가 정답이다. (D) interesting은 감정을 유발하는 대상을 묘사할 때 쓰이므로 문맥상 적절하지 않다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t07-p2",
            contextType: "P2",
            docType: "notice",
            guidance: "Questions 135-138 refer to the following notice.",
            content: "The Oakville Horticulture Club ___135___ a plant sale on Saturday, 9 September. The sale will be held from 9:00 A.M. to 4:00 P.M. at the Oakville Community Centre at 478 Hill Avenue. There will be great deals on hanging baskets, grasses, and herbs. ___136___. We ___137___ have a delicious selection of fruits and vegetables available for purchase. Enjoy live talks and demonstrations ___138___ the day. For more information, visit the Oakville Horticulture Web site: www.oakvillehorticultureclub.co.uk/events.",
            translation: "오크빌 원예 클럽에서 9월 9일 토요일에 화초 판매 행사를 135 합니다. 판매 행사는 오전 9시부터 오후 4시까지 힐 가 478에 있는 오크빌 커뮤니티 센터에서 열릴 예정입니다. 매다는 꽃바구니, 잔디, 허브를 크게 할인해 드립니다. 136 가장 좋은 물건을 고르시려면 일찍 오세요. 137 또한 다양한 맛있는 과일과 채소도 판매합니다. 하루 138 종일 라이브 간담회와 시연을 즐기세요. 더 많은 정보를 원하시면 오크빌 원예 웹사이트 www.oakvillehorticultureclub.co.uk/events를 방문하세요.",
            questions: [
                {
                    id: "v4-p6-t07-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "host",
                        B: "hosted",
                        C: "is hosting",
                        D: "has hosted"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸이 있는 문장에서 판매 행사의 일정을 공지하고 있고, 뒤 문장에서 '판매 행사가 열릴 예정(The sale will be held)'이라며 미래 시제로 표현하고 있는 것으로 보아 행사는 미래에 일어날 일임을 알 수 있다. 현재진행 시제는 가까운 미래에 정해진 일정을 나타낼 때도 쓰이므로 (C) is hosting이 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t07-q136",
                    questionNo: 136,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Come early to get the best selection.",
                        B: "Plants help make your home beautiful.",
                        C: "Join the club for a discount on local garden tours.",
                        D: "The community center was just renovated."
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에서 판매 행사가 열리며 일정 상품들을 많이 할인해 준다(There will be great deals on ~ and herbs)고 했으므로, 마음에 드는 물건을 골라 살 수 있으려면 물건이 많이 남아 있을 때 오는 것이 좋다고 권하는 내용이 들어가야 자연스럽다. 따라서 좋은 물건을 고르려면 일찍 오라고 권장하고 있는 (A)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t07-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "later",
                        B: "also",
                        C: "nearly",
                        D: "merely"
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 여러 상품들을 크게 할인(great deals)해 준다며 행사의 특징을 언급하고 있고, 빈칸이 있는 문장에서 다양한 맛있는 과일과 채소도 살 수 있다(a delicious selection ~ available for purchase)며 행사의 또 다른 특징을 언급하고 있다. 따라서 비슷한 한 내용을 추가로 언급할 때 쓰는 부사가 들어가야 적절하므로 '또한'을 뜻하는 (B) also가 정답이다. (A) later는 '나중에', (C) nearly는 '거의', (D) merely는 '그저'라는 뜻으로 문맥상 어울리지 않는다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t07-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "within",
                        B: "forward",
                        C: "following",
                        D: "throughout"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 명사구 the day를 목적어로 취하여, 빈칸 앞의 명령문(Enjoy live talks and demonstrations)을 수식하는 전치사 자리이다. '하루 종일 즐기라'는 내용이 되어야 자연스러우므로 '~ 내내, ~ 동안'이라는 뜻으로 the day와 함께 '하루 종일'이라는 의미를 만드는 전치사 (D) throughout이 정답이다. (A) within은 '~ 이내에', (C) following은 '~ 후에'라는 뜻으로 의미상 부적절하고, (B) forward는 부사/형용사/동사로 품사상 빈칸에 들어갈 수 없다.",
                    classification: "p6v"
                }
            ]
        },
        {
            setId: "v4-p6-t07-p3",
            contextType: "P3",
            docType: "letter",
            guidance: "Questions 139-142 refer to the following letter.",
            content: "July 2\n\nDear Mr. Arakaki:\n\nI am writing to inform you of scheduled road maintenance on Briggs Avenue. Beginning on July 15, Briggs Avenue ___139___ reduced to one lane from Elm Street to Bay Road. ___140___. Although your ___141___ is not located in this section of Briggs Avenue, traffic on most of the street will move more slowly than usual while work is being performed. You may ___142___ consider advising your employees to take alternate routes to work during this time. The project is expected to be completed on or before October 22. Thank you for your cooperation and assistance.\n\nSincerely,\n\nAmalia Villalobos\nDirector of Transportation\nEnclosure",
            translation: "7월 2일\n\n아라카키 씨께:\n\n브릭스 가에 예정된 도로 정비에 대해 알려드리기 위해 글을 씁니다. 7월 15일부터 브릭스 가는 엘름 가에서 베이 로까지 1차선으로 축소 139 될 것입니다. 140 동봉된 해당 지역의 지도를 참조하십시오. 귀하의 141 사업체가 브릭스 가의 이 구간에 위치하고 있지는 않지만, 작업이 진행되는 동안 이 도로 대부분의 차량은 평소보다 더 느리게 이동할 것입니다. 142 그러므로 이 기간 동안 직원들에게 대체 출근 경로를 이용하도록 권고하는 것을 고려해 보셔야 할 것입니다. 이 작업은 10월 22일 또는 그 이전에 끝날 것으로 예상됩니다. 귀하의 협조와 도움에 감사드립니다.\n\n아말리아 빌라로보스\n교통국장\n동봉물",
            questions: [
                {
                    id: "v4-p6-t07-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "was",
                        B: "will be",
                        C: "can be",
                        D: "has been"
                    },
                    correctAnswer: "B",
                    explanation: "편지의 작성일이 7월 2일(July 2)인데, 7월 15일부터 시작되는(Beginning on July 15) 도로 정비(road maintenance)를 알리고 있으므로 미래의 일을 나타내는 (B) will be가 정답이다. (C) can be도 미래의 가능성이나 추측을 나타낼 수 있지만 이미 정해진 일정 안내에는 적절하지 않다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t07-q140",
                    questionNo: 140,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Briggs Avenue is only two miles away.",
                        B: "The event will take place on Elm Street.",
                        C: "Please refer to the enclosed map of the affected area.",
                        D: "However, all city services will close during this time."
                    },
                    correctAnswer: "C",
                    explanation: "앞 내용에서 브릭스 가의 도로 정비(road maintenance on Briggs Avenue)로 인해 7월 15일부터 일정 구간이 1차선으로 축소될 것(reduced to one lane)이라고 했고, 뒤 문장에서는 정비 작업이 업체가 위치한 인근 도로까지 미치게 될 영향을 안내하고 있다. 따라서 빈칸에는 도로 정비 작업이 이루어지는 구간 안내와 관련된 내용이 들어가야 글의 흐름이 자연스럽게 연결되므로, 도로 작업 구간을 확인할 수 있는 지도를 참조하라고 안내하고 있는 (C)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t07-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "mailbox",
                        B: "school",
                        C: "signage",
                        D: "business"
                    },
                    correctAnswer: "D",
                    explanation: "뒤 문장에서 공사 기간 동안 직원들에게 대체 출근 경로를 이용하도록 권고하는 것을 고려해 보라고 조언하고 있으므로, 빈칸에는 직원들이 출근하는 장소를 나타낼 수 있는 단어가 들어가야 한다. 따라서 '사업체, 회사'를 뜻하는 (D) business가 정답이다. (A) mailbox는 '우편함', (B) school은 '학교', (C) signage는 '신호 체계'라는 의미로 빈칸에 적절하지 않다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t07-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "fortunately",
                        B: "instead",
                        C: "likewise",
                        D: "therefore"
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에는 사업체가 공사 구역에 있지는 않지만 작업이 진행되는 동안 해당 도로의 차량 이동이 느려질 것(traffic ~ will move more slowly)이라고 했고, 뒤 문장에는 공사 기간 동안 직원들에게 대체 출근 경로를 이용하도록(to take alternate routes to work) 권고하는 것을 고려해 보라고 했다. 두 문장이 도로 정비 작업으로 차량 이동이 느려질 것이므로 다른 도로를 이용하는 편이 낫다는 인과 관계를 나타내고 있으므로 '그러므로, 따라서'를 뜻하는 (D) therefore가 정답이다. (A) fortunately는 '운 좋게도', (B) instead는 '대신에', (C) likewise는 '마찬가지로'라는 의미이다.",
                    classification: "p6c"
                }
            ]
        },
        {
            setId: "v4-p6-t07-p4",
            contextType: "P2",
            docType: "article",
            guidance: "Questions 143-146 refer to the following article.",
            content: "Franklin Planetarium to Move Downtown\n\n(June 3)—After 48 years in its present location on Mayfield's south side, the Franklin Planetarium is moving to a new home. Construction is underway on the downtown facility, part of a complex that includes the new Natural History Museum. Both ___143___ are expected to open to the public next September.\n\nThe current planetarium's main attraction is a 300-seat theater, where visitors can view projections of stars and planets on the dome above. ___144___ a larger theater, the new planetarium will feature an upgraded digital projection system. ___145___. Visitors will be able ___146___ the night sky more clearly and explore other planets and galaxies through new, interactive displays.",
            translation: "프랭클린 천문관, 도심으로 이전\n\n(6월 3일) — 프랭클린 천문관이 메이필드 남쪽에 있는 현재 위치에서 48년 만에 새로운 곳으로 이전합니다. 새 자연사 박물관을 포함하는 복합 단지의 일부인 도심 시설에 공사가 진행 중입니다. 두 143 건물을 모두 내년 9월에 시민들에게 공개될 예정입니다.\n\n현재 천문관의 주요 즐길 거리는 300석 규모의 극장으로, 방문객들은 위쪽 돔에서 별과 행성의 투영을 볼 수 있습니다. 새로운 천문관은 더 큰 규모의 극장 144 외에도, 업그레이드된 디지털 투영 시스템으로 특색을 갖출 것입니다. 145 또한 세 개의 단기 전시물을 위한 공간도 있을 것입니다. 방문객들은 밤하늘을 더 선명하게 146 보고 새로운 쌍방향 전시물을 통해 다른 행성과 은하를 탐험할 수 있게 될 것입니다.",
            questions: [
                {
                    id: "v4-p6-t07-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "trails",
                        B: "buildings",
                        C: "campuses",
                        D: "performances"
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 새로운 천문관과 자연사 박물관을 위한 공사가 진행 중(Construction is underway ~ a complex that includes the new Natural History Museum)이라고 했으므로, 빈칸이 있는 문장에서 내년 9월에 공개될 예정이라고 안내하는 대상은 천문관과 박물관을 지칭하는 건물임을 알 수 있다. 따라서 '건물'을 뜻하는 (B) buildings가 정답이다. (A)의 trail은 '산책로', (C)의 campus는 '(대학) 교정', (D)의 performance는 '공연'을 의미한다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t07-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "In addition to",
                        B: "In particular",
                        C: "In agreement with",
                        D: "For instance"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸은 명사구 a larger theater를 목적어로 취해, 콤마 뒤 완전한 절(the new planetarium will feature an upgraded digital projection system)을 수식하는 전치사 자리이다. 새 천문관의 특징으로 '더 큰 규모의 극장' 뒤에 업그레이드된 디지털 투영 시스템을 추가로 언급하므로 '~ 외에도, ~에 더하여'라는 뜻의 전치사 (A) In addition to가 정답이다. (C) In agreement with도 전치사이지만 '~와 일치하여'라는 뜻으로 문맥상 어울리지 않고, (B) In particular(특히)와 (D) For instance(예를 들어)는 부사 역할을 하므로 명사구를 절에 연결할 수 없다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t07-q145",
                    questionNo: 145,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "There are currently three other museums in the Mayfield area.",
                        B: "Attendance at the planetarium has been up in recent years.",
                        C: "Planning for the new planetarium began five years ago.",
                        D: "There will be room for three short-term exhibits as well."
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에서 새로운 천문관은 더 큰 규모의 극장(a larger theater)과 업그레이드된 디지털 투영 시스템(an upgraded digital projection system)을 갖추게 될 것이라고 했고, 뒤 문장에서 방문객들이 밤하늘을 더 선명하게 보고 새로운 전시물을 통해 다른 행성과 은하를 탐험할 수 있을 것(Visitors will ~ explore other planets and galaxies through new, interactive displays)이라며 새로운 천문관의 시설과 그로 인해 누릴 수 있는 혜택을 나열하고 있다. 따라서 빈칸에도 새 천문관에 추가될 시설에 관한 내용이 들어가야 자연스러우므로 단기 전시 공간도 갖출 것이라고 안내하는 (D)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t07-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "to see",
                        B: "will see",
                        C: "who saw",
                        D: "by seeing"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 앞에 형용사 able이 있고 뒤에 명사구 the night sky가 있으므로, the night sky를 목적어로 취하면서 형용사 able을 수식할 수 있는 준동사가 들어가야 한다. 형용사 able은 to부정사의 수식을 받아 'be able + to부정사'의 형태로 쓰여 '~을 할 수 있다'를 뜻하므로 to부정사 (A) to see가 정답이다.",
                    classification: "p6g"
                }
            ]
        }
    ]
};
