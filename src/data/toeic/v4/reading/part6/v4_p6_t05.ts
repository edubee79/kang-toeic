import { Part6TestSet } from './types';

export const test05Data: Part6TestSet = {
    testId: 5,
    vol: 4,
    title: "Test 5",
    passages: [
        {
            setId: "v4-p6-t05-p1",
            contextType: "P2",
            docType: "article",
            guidance: "Questions 131-134 refer to the following article.",
            content: "Grocery Chain to Host Event\n\nLEIGHTON (October 8)—Ohale Foods, one of the region's largest supermarket chains, is seeking to fill almost 100 open positions. For that reason, the company is holding a ___131___ event on October 20. Job opportunities exist at all fourteen of Ohale's current stores. ___132___, Ohale is seeking employees for its new Westside location, which is still under construction. ___133___. \n\nThose who ___134___ the event should bring copies of their résumé to the Grand Ballroom of the Palace Suites Hotel between 10 A.M. and 7 P.M. No appointment is required.",
            translation: "식료품 체인에서 행사를 주최하다\n\n레이튼 (10월 8일) — 이 지역에서 가장 큰 슈퍼마켓 체인 중 하나인 오헤일 푸즈에서 100여 개에 달하는 일자리를 채우고자 합니다. 이러한 이유로, 이 회사는 10월 20일에 131 채용 행사를 열 예정입니다. 현재 14개의 모든 오헤일 매장에 일자리 기회가 있습니다. 132 추가적으로, 오헤일은 아직 공사 중인 웨스트사이드의 신규 매장을 위한 직원도 모집합니다. 133 이곳의 개점은 11월 중순으로 예정되어 있습니다.\n\n행사에 134 참석하려는 사람들은 오전 10시에서 오후 7시 사이에 팰리스 스위츠 호텔 그랜드 볼룸으로 이력서 사본을 가져와야 합니다. 예약은 필요하지 않습니다.",
            questions: [
                {
                    id: "v4-p6-t05-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "manufacturing",
                        B: "hiring",
                        C: "political",
                        D: "sporting"
                    },
                    correctAnswer: "B",
                    explanation: "앞에 부정관사 a, 뒤에 명사 event가 있으므로 빈칸에는 event를 수식하는 형용사나 복합명사를 이루는 명사가 들어갈 수 있다. 앞 문장에서 슈퍼마켓 체인 오헤일 푸즈에서 100여 개에 달하는 일자리를 채우고자 한다는 것으로 보아 이 회사에서 '채용 행사'를 연다는 내용이 되어야 문맥상 자연스럽다. 따라서 빈칸 뒤의 명사 event와 함께 '채용 행사'라는 의미의 복합명사를 만들 수 있는 '채용'이라는 뜻의 명사 (B) hiring이 정답이다. (A) manufacturing은 명사로 '제조업', (C) political은 형용사로 '정치적인', (D) sporting은 형용사일 때 '스포츠의', 명사일 경우 '스포츠'라는 뜻이므로 문맥상 어울리지 않는다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t05-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "If not",
                        B: "After all",
                        C: "Additionally",
                        D: "For example"
                    },
                    correctAnswer: "C",
                    explanation: "앞 문장에서 현재 14개의 모든 오헤일 매장에 일자리 기회가 있다(Job opportunities exist at all ~ stores)고 했고, 뒤 문장에서 아직 공사 중인 웨스트사이드의 신규 매장을 위한 직원도 모집한다(Ohale is seeking employees for its new Westside location)며 기존 매장 이외에 새로 개점할 매장을 위해서도 직원을 추가적으로 모집할 예정이라고 언급하고 있다. 따라서 '추가적으로, 또한'이라는 의미의 (C) Additionally가 정답이다. (A) If not은 '그렇지 않다면', (B) After all은 '결국', (D) For example은 '예를 들어'라는 뜻이므로 문맥상 적절하지 않다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t05-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "Its grand opening is scheduled for mid-November.",
                        B: "Most applicants had prior experience.",
                        C: "Its appointment of Linda Okumu as its CEO has surprised analysts.",
                        D: "Local competitors cannot match its prices."
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 앞에서 아직 공사 중인 웨스트사이드의 신규 매장(its new Westside location)을 위한 직원도 모집한다고 했으므로 빈칸에는 이 새로운 매장에 대한 내용이 연결되어야 자연스럽다. 따라서 신규 매장의 개점 예정 시기를 언급하고 있는 (A)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t05-q134",
                    questionNo: 134,
                    text: "Select the best answer.",
                    options: {
                        A: "attending",
                        B: "to attend",
                        C: "attended",
                        D: "are attending"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 선행사 Those를 수식하는 관계사절(who ~ the event)의 동사 자리이다. 기사가 발행된 날짜는 10월 8일(October 8)이고, 빈칸 뒤 the event는 앞에서 언급된 10월 20일에 열릴 채용 행사를 가리키는 것이므로 미래를 나타내는 시제가 들어가야 한다. 따라서 가까운 미래의 계획된 일정을 나타낼 때 쓰이는 현재진행형 (D) are attending이 정답이다. (A) attending은 동명사/현재분사, (B) to attend는 to부정사이므로 빈칸에 들어갈 수 없고, (C) attended는 과거형 동사/과거분사로 답이 될 수 없다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t05-p2",
            contextType: "P3",
            docType: "instructions",
            guidance: "Questions 135-138 refer to the following instructions.",
            content: "Thank you for your purchase of an Ajaz Water Filter Pitcher. It is a wonderful solution for water that tastes great! To improve the effectiveness of the Ajaz Water Filter Pitcher, we ___135___ priming the filter before the first use. ___136___. Then screw the filter clockwise into the lid of the pitcher until it fits ___137___. As you use the pitcher, remember that ___138___ water flow is a signal that the filter is becoming clogged and will need to be replaced soon.",
            translation: "아자즈 물 필터 주전자 구매에 감사드립니다. 이 제품은 맛있느 물을 위한 훌륭한 해결책입니다! 아자즈 물 필터 주전자의 효능을 높이기 위해 첫 사용 전에 필터를 활성화시켜 주시기를 135 권장합니다. 136 이를 위해 3분 동안 차가운 수돗물을 필터를 통해 흘려보내세요. 그런 다음 필터를 물 주전자의 뚜껑 안에 137 꽉 맞을 때까지 시계 방향으로 조이세요. 물 주전자를 사용할 때 138 약해진 물의 흐름은 필터가 막히고 있으며 곧 교체되어야 한다는 신호임을 기억하세요.",
            questions: [
                {
                    id: "v4-p6-t05-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "tried",
                        B: "recommend",
                        C: "consider",
                        D: "started"
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 아자즈 물 필터 주전자 구매에 감사하다고 한 것으로 보아 이 글은 제품 구입 시 딸려 오는 사용 설명서임을 알 수 있다. 따라서 '첫 사용 전에 필터를 활성화시켜 줄 것을 권장한다'며 고객에게 제품 사용법을 설명하거나 권고사항을 안내하는 내용이 되어야 적절하므로 '권장[추천]하다'라는 뜻의 (B) recommend가 정답이다. (A)의 try는 목적어 자리에 동명사가 올 경우 '시도하다, 해보다'라는 뜻이고, (C) consider는 '고려하다', (D) start는 '시작하다'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t05-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "Our filtration system will be redesigned within the next year.",
                        B: "Water use may be reduced by running your dishwasher less frequently.",
                        C: "To do this, run cool tap water through the filter for three minutes.",
                        D: "There are 150 liters of water in the main storage tank at all times."
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞에는 필터 주전자의 효능을 높이기 위해 사용 전 필터 활성화 작업(priming the filter)을 권장한다고 했고, 빈칸 뒤에는 그런 다음 필터를 주전자 뚜껑에 맞게 조이라는 지침을 설명하고 있다. 따라서 빈칸에는 필터를 뚜껑에 끼우기 전 준비 작업에 해당하는 지침이 들어가야 연결이 자연스러우므로, 3분간 수돗물을 필터를 통해 흘려보내라는 지침을 설명하고 있는 (C)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t05-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "extremely",
                        B: "highly",
                        C: "tightly",
                        D: "steadily"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸은 '(모양, 크기 등이 어떤 물건에) 맞다'를 뜻하는 동사 fits를 수식하는 부사 자리로, '필터(it)를 꽉 맞을 때까지'라는 의미가 되어야 하므로 '꽉, 단단하게'를 뜻하는 (C) tightly가 정답이다. (A) extremely는 '극히', (B) highly는 '매우'라는 뜻의 강조 부사로, 주로 형용사와 부사를 수식하므로 동사 fits와는 함께 쓰이지 않는다. (D) steadily는 '꾸준히'라는 뜻으로 문맥상 적절하지 않다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t05-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "diminished",
                        B: "diminishes",
                        C: "diminish",
                        D: "diminishable"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸은 that절의 주어인 복합명사 water flow를 수식하는 형용사 자리이므로 과거분사 (A) diminished나 형용사 (D) diminishable이 들어갈 수 있다. '약해진 물의 흐름'이라는 의미가 되어야 자연스러우므로 '약해진, 감소된'을 뜻하는 (A) diminished가 정답이다. (D) diminishable은 '줄일 수 있는'이라는 뜻으로 문맥상 적절하지 않으며, '약해지다, 줄어들다'를 뜻하는 동사 (B) diminishes와 (C) diminish는 품사상 빈칸에 들어갈 수 없다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t05-p3",
            contextType: "P3",
            docType: "policy",
            guidance: "Questions 139-142 refer to the following policy.",
            content: "Returning merchandise\n\nAbney Home Products is committed to providing outstanding service, and we guarantee the ___139___ of all the products in our catalog. If you are not satisfied with a purchase, call our customer service line at 339-555-0177 to request a return authorization code. The service agent ___140___ you for the invoice number from the package insert. ___141___. Please be aware that Abney Home Products is not ___142___ for postage on merchandise returns.",
            translation: "제품 반품\n\n애브니 홈 프로덕츠는 뛰어난 서비스를 제공하기 위해 전념하고 있으며 카탈로그에 있는 전 제품의 139 상태를 보증합니다. 구매 제품에 만족하지 않으시면 339-555-0177로 고객 서비스 라인에 전화하셔서 반품 승인 코드를 요청하십시오. 서비스 담당자가 제품 안내서에 있는 청구서 번호를 140 요청할 것입니다. 141 제품을 반송하실 때 반드시 승인 코드를 포함시켜 주십시오. 애브니 홈 프로덕츠는 상품 반송 시 배송비를 142 책임지지 않는다는 점에 유의하십시오.",
            questions: [
                {
                    id: "v4-p6-t05-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "condition",
                        B: "object",
                        C: "explanation",
                        D: "preview"
                    },
                    correctAnswer: "A",
                    explanation: "상품 반품 정책을 설명하는 글이므로 '카탈로그에 있는 전 제품의 상태를 보증한다'는 내용이 되어야 적절하다. 따라서 '상태'를 뜻하는 (A) condition이 정답이다. (B) object는 '물건', (C) explanation은 '설명', (D) preview는 '사전 검토'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t05-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "asked",
                        B: "is asking",
                        C: "has asked",
                        D: "will ask"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 주어 The service agent의 동사 자리이며 알맞은 시제를 골라야 한다. 앞 문장에서 구매 제품 불만족 시 취할 수 있는 절차에 대한 설명으로 고객 서비스 라인에 전화해 반품 승인 코드를 요청하라고 했고, 빈칸이 있는 문장은 전화를 받은 서비스 담당자가 하게 될 차례를 설명하고 있으므로 '서비스 담당자가 청구서 번호를 요청할 것'이라는 내용이 되어야 한다. 따라서 미래 시제인 (D) will ask가 정답이다. 참고로, 현재진행형인 (B) is asking도 미래 시제를 대신할 수 있지만, 가까운 미래의 정해진 일정을 나타내므로 해당 문맥에는 적절하지 않다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t05-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "Our employees have software training and are skilled at resolving problems.",
                        B: "To cancel a furniture delivery, please call within 24 hours of ordering.",
                        C: "When you send back the product, be sure to include the authorization code.",
                        D: "The catalog has sections for kitchen goods, lighting, appliances, and more."
                    },
                    correctAnswer: "C",
                    explanation: "앞에서 제품 불만족 시 전화로 반품 승인 코드를 요청할 것과 이때 서비스 담당자가 청구서 번호를 요청할 것이라며 반품 절차를 안내하고 있다. 따라서 빈칸에는 제품 반품과 관련된 다음 절차를 안내하는 내용이 들어가야 자연스러우므로 제품 반송 시 승인 코드를 포함해 달라고 설명하고 있는 (C)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t05-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "responsibly",
                        B: "responsible",
                        C: "responsibility",
                        D: "responsibleness"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸은 be동사 is 뒤 주격 보어 자리이므로 형용사나 분사, 또는 명사가 들어갈 수 있다. '배송비를 책임지지 않는다'라는 내용이 되어야 하므로 '~에 대해) 책임을 져야 할'을 뜻하는 형용사 (B) responsible이 정답이다. (A) responsibly는 부사이므로 빈칸에 들어갈 수 없고, 명사인 (C) responsibility(책임)와 (D) responsibleness(책임감)는 주어인 Abney Home Products와 동격이 아니므로 오답이다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t05-p4",
            contextType: "P2",
            docType: "memo",
            guidance: "Questions 143-146 refer to the following memo.",
            content: "To: All Employees\nFrom: Marina Papantonio, Safety Liaison\nDate: November 12\nSubject: Safety Training\n\nIt is time once again for our annual safety training workshop. This year, training will focus on digital safety measures, like avoiding scams and protecting against cyberattacks. Our technology experts already have installed new programs throughout our company's information system to reduce risk. ___143___, we all need to understand how the programs work and what to do when a problem arises.\n\nTo accommodate ___144___, several workshops will be conducted throughout the upcoming week. You can register for any one of these ___145___ on our company's intranet page. Just click on the link for \"Safety Training.\"\n\n___146___. If you are unable to take part in any of the scheduled workshops for any reason, you must inform your supervisor.",
            translation: "수신: 전 직원\n발신: 마리나 파판토니오, 안전 연락 담당자\n날짜: 11월 12일\n제목: 안전 교육\n\n다시 한번 연례 안전 교육 워크숍을 할 시기가 왔습니다. 올해 훈련은 사기 방지 및 사이버 공격에 대비하여 방어하는 것과 같은 디지털 안전 조치에 중점을 둘 것입니다. 우리의 기술 전문가들은 위험을 줄이기 위하여 이미 당사의 정보 시스템 전반에 새로운 프로그램을 설치하였습니다. 143 하지만, 우리 모두는 프로그램이 어떻게 작동하고 문제 발생 시 무엇을 해야 하는지 알아야 할 필요가 있습니다.\n\n144 모두를 수용하기 위해 다음 주 내내 워크숍이 여러 실실될 예정입니다. 당사의 내부 전산망 페이지에서 이 145 세션들 중 하나에 등록할 수 있습니다. '안전 교육' 링크를 클릭하십시오.\n\n146 등록에 최선을 다해 주십시오. 어떤 사유로든 본 워크숍의 어떤 일정에도 참여할 수 없는 경우, 상관에게 반드시 알려야 합니다.",
            questions: [
                {
                    id: "v4-p6-t05-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "If so",
                        B: "However",
                        C: "Otherwise",
                        D: "In that case"
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서는 기술 전문가들이 위험을 줄이기 위해 이미 시스템 전반에 새로운 프로그램을 설치했다(Our technology experts already have installed new programs ~ to reduce risk)고 했는데, 빈칸 뒤에서는 우리 모두가 프로그램 작동법과 유사시 할 일을 알고 있어야 한다(we all need to understand how the programs work ~ when a problem arises)고 했다. 전문가가 아니더라도 우리 모두가 이와 관련해 처리 방안을 알고 있어야 한다는 서로 상반되는 내용이므로 '하지만, 그러나'라는 의미의 (B) However가 정답이다. (A) If so는 '그렇다면', (C) Otherwise는 '그렇지 않으면', (D) In that case는 '그런 경우에는'이라는 뜻으로 문맥에 적합하지 않다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t05-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "itself",
                        B: "his",
                        C: "whose",
                        D: "everyone"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 to부정사구 To accommodate의 목적어 자리이고, '모두를 수용하기 위해 워크숍이 여럿 진행될 것'이라는 내용이 되어야 하므로 '모두, 모든 사람'을 뜻하는 부정대명사 (D) everyone이 정답이다. (A) itself는 재귀대명사로 주어와 목적어가 동일한 경우에 쓰이며, 소유대명사 (B) his는 목적어 자리에 들어갈 수 있으나 '그의 것'을 나타내는 대상이 앞에 언급되어야 하고, (C) whose는 의문사/관계대명사이므로 품사상 빈칸에 들어갈 수 없다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t05-q145",
                    questionNo: 145,
                    text: "Select the best answer.",
                    options: {
                        A: "sessions",
                        B: "positions",
                        C: "conferences",
                        D: "competitions"
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에서 모두를 수용하기 위해 다음 주 내내 워크숍이 여럿(several workshops) 진행될 예정이라고 했으므로 빈칸에는 워크숍을 대신할 수 있는 명사가 들어가야 한다. 따라서 '(특정 활동) 시간[기간]'을 뜻하는 (A) sessions가 정답이다. (B)의 position는 '위치', (C)의 conference는 '회의', (D)의 competition는 '대회, 경쟁'을 뜻한다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t05-q146",
                    questionNo: 146,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Cyberattacks are on the rise.",
                        B: "The training is held each summer.",
                        C: "Please make every effort to sign up.",
                        D: "Last year's program was canceled."
                    },
                    correctAnswer: "C",
                    explanation: "앞에서 모두를 수용하기 위해 다음 주 내내 여러 워크숍이 진행되며 내부 전산망 페이지에서 '안전 교육' 링크를 클릭하면 등록할 수 있다고 했고, 빈칸 뒤에는 참여할 수 없는 경우 상관에게 반드시 알려야 한다고 했다. 앞뒤 문장 모두 워크숍 등록 및 참여에 대한 내용이므로 빈칸에도 워크숍 등록과 관련된 내용이 들어가야 연결이 자연스럽다. 따라서 등록에 최선을 다해달라며 워크숍 참석을 권장하고 있는 (C)가 정답이다.",
                    classification: "p6s"
                }
            ]
        }
    ]
};
