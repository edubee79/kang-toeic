import { Part7Test } from './types';

export const test10Data: Part7Test = {
    testId: 10,
    vol: 3,
    title: "Test 10",
    sets: [
        {
            id: "v3-p7-t10-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t10-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT_MESSAGE",
                    content: "Brycen Bodine [1:07 P.M.] Hi, Avichai. I finished the upholstery on the sofa and chairs for Ms. Levin. They look great! It’s such a nice fabric. Which order should I work on next?\nAvichai Rosen [1:14 P.M.] Glad to hear it. I promised the Chens their dining chairs by Saturday. By the way, the Metropolitan Design Show on June 14 has been postponed to July 7.\nBrycen Bodine [1:19 P.M.] Oh, then I can’t make it.\nAvichai Rosen [1:22 P.M.] That’s too bad. I’ll need at least two employees to come help. We’ll be showing our office desks and bookshelves.\nBrycen Bodine [1:24 P.M.] I’ll ask Rita and Tom if they are available on that day. Unfortunately, I have a family commitment out of town that day. I’ll get started on the Chens’ order now.\nAvichai Rosen [1:25 P.M.] Sounds good. Thank you!",
                    translation: "Brycen Bodine [오후 1:07] 안녕하세요, Avichai 씨. Levin 씨를 위한 소파와 의자 천 갈이 작업을 마쳤습니다. 보기 좋네요! 원단이 정말 멋집니다. 다음에는 어떤 주문 작업을 할까요?\nAvichai Rosen [오후 1:14] 다행이네요. Chen 씨 가족에게 토요일까지 식탁 의자를 보내주기로 약속했습니다. 그나저나 6월 14일에 열리는 메트로폴리탄 디자인 쇼가 7월 7일로 연기되었습니다.\nBrycen Bodine [오후 1:19] 아, 그럼 전 못 가겠네요.\nAvichai Rosen [오후 1:22] 아쉽네요. 도와줄 직원이 적어도 두 명은 필요할 텐데요. 저희 사무용 책상과 책장들을 전시할 예정이거든요.\nBrycen Bodine [오후 1:24] Rita와 Tom에게 그날 시간이 되는지 물어볼게요. 안타깝게도 저는 그날 외지에 가족 행사가 있어요. 지금 바로 Chen 씨네 주문 건을 시작하겠습니다.\nAvichai Rosen [오후 1:25] 좋습니다. 감사합니다!"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q147",
                    questionNo: 147,
                    text: "What will Mr. Bodine most likely work on next?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A sofa",
                        "B": "An office desk",
                        "C": "A bookshelf",
                        "D": "A set of chairs"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Bodine은 다음에 무엇을 작업할 가능성이 가장 높습니까?",
                    explanation: "마지막에 'Chen 씨네 주문 건을 시작하겠다'고 했고, Avichai가 Chen 씨네 '식탁 의자(dining chairs)'를 약속했다고 언급했으므로 정답은 (D)입니다."
                },
                {
                    id: "v3-p7-t10-q148",
                    questionNo: 148,
                    text: "At 1:19 P.M., what does Mr. Bodine mean when he writes, “I can’t make it”?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He will not be seeing Rita or Tom.",
                        "B": "He will not be able to attend an event.",
                        "C": "He will not be able to meet a deadline.",
                        "D": "He does not know how to build a piece of furniture."
                    },
                    correctAnswer: "B",
                    translation: "오후 1:19에 Mr. Bodine이 “I can’t make it”이라고 쓴 의도는 무엇입니까?",
                    explanation: "디자인 쇼가 7월 7일로 연기되었다는 소식에 대해 답한 것이므로, 해당 이벤트에 참석할 수 없다는 뜻입니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t10-s2-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "Thank you for downloading the Spumoni mobile phone app!\n\nAt your current basic membership level, your ability to save recipes is limited to five per day. If you would like the freedom to save unlimited recipes daily, automatically generate shopping lists, create weekly meal plans, and track nutritional data, you can become a premium member for just $2.99 a month.\n\nMany users find this small fee to be money well spent, as the premium features save them time and enable them to make healthier meal choices. Visit our “PM Community” Web page to view real testimonials from our premium members.",
                    translation: "Spumoni 모바일 앱을 다운로드해 주셔서 감사합니다!\n\n현재 고객님의 기본 회원 등급에서는 레시피 저장이 하루 5개로 제한됩니다. 매일 무제한으로 레시피를 저장하고, 쇼핑 리스트를 자동 생성하며, 주간 식단 플랜을 짜고, 영양 데이터를 추적하고 싶으시다면 월 2.99달러의 프리미엄 회원이 되어보세요.\n\n많은 사용자가 프리미엄 기능이 시간을 절약해주고 더 건강한 식단을 선택할 수 있게 해준다는 점에서 이 적은 요금이 아깝지 않다고 느끼고 있습니다. 저희 “PM 커뮤니티” 웹 페이지를 방문하여 프리미엄 회원들의 생생한 후기를 확인해 보세요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q149",
                    questionNo: 149,
                    text: "What does the notice encourage users to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Share their own recipes",
                        "B": "Submit their own testimonials",
                        "C": "Upgrade their membership status",
                        "D": "Download a recent software update"
                    },
                    correctAnswer: "C",
                    translation: "이 공지문은 사용자들에게 무엇을 하라고 권장하고 있습니까?",
                    explanation: "월 2.99달러를 지불하고 프리미엄 회원(premium member)이 되라고 권하고 있으므로 멤버십 업그레이드가 정답입니다."
                },
                {
                    id: "v3-p7-t10-q150",
                    questionNo: 150,
                    text: "According to the notice, why should users go to a Web page?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To take a virtual tour",
                        "B": "To see a sample meal plan",
                        "C": "To compare ingredients from similar recipes",
                        "D": "To find out about people’s experiences"
                    },
                    correctAnswer: "D",
                    translation: "공지문에 따르면 사용자들이 웹 페이지를 방문해야 하는 이유는 무엇입니까?",
                    explanation: "웹 페이지를 방문하여 '다른 회원들의 후기(view real testimonials)'를 확인하라고 했으므로 타인의 경험을 알아보기 위함입니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t10-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: Barry Winters <bwinters@kerwinecs.co.za>\nTo: Marta Prigarina <mprigarina@ymw.co.za>\nDate: 23 October\nSubject: Office cleaning\n\nDear Ms. Prigarina,\n\nWe are glad you have chosen Kerwine Cleaning Services for your office cleaning needs. Our janitors will arrive at your facility with the commercial-grade equipment, tools, and products needed to complete all cleaning tasks quickly and effectively. You have already confirmed a starting date of 30 October. However, you have not yet confirmed whether you will use our services weekly or biweekly. As soon as you let us know, we will draw up a contract for you. Please note that we are currently running a special promotion. If you sign up for six months of service by 31 October, your first two cleanings are free.\n\nBest,\n\nBarry Winters\nKerwine Cleaning Services",
                    translation: "발신: Barry Winters <bwinters@kerwinecs.co.za>\n수신: Marta Prigarina <mprigarina@ymw.co.za>\n날짜: 10월 23일\n제목: 사무실 청소\n\nPrigarina 씨께:\n\n사무실 청소를 위해 Kerwine 청소 서비스를 선택해 주셔서 감사합니다. 저희 청소 직원들이 모든 청소 업무를 신속하고 효과적으로 완료하기 위해 필요한 상업용 장비, 도구 및 제품을 갖추고 귀하의 시설에 도착할 것입니다. 이미 10월 30일을 시작일로 확정하셨습니다. 하지만 저희 서비스를 매주 이용하실지, 2주마다 이용하실지는 아직 확정하지 않으셨습니다. 알려주시는 대로 계약서를 작성해 드리겠습니다. 현재 특별 프로모션을 진행 중이니 참고해 주십시오. 10월 31일까지 6개월 서비스를 신청하시면 첫 2회 청소를 무료로 해드립니다.\n\n안녕히 계십시오.\n\nBarry Winters\nKerwine Cleaning Services"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q151",
                    questionNo: 151,
                    text: "What does Mr. Winters ask Ms. Prigarina to confirm?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "How often to clean her office",
                        "B": "When he should arrive at her facility",
                        "C": "Where her office is located",
                        "D": "What products she prefers"
                    },
                    correctAnswer: "A",
                    translation: "Mr. Winters는 Ms. Prigarina에게 무엇을 확정해 달라고 요청합니까?",
                    explanation: "매주 이용할지 2주마다 이용할지(weekly or biweekly) 아직 확정하지 않았다고 언급했으므로 청소 주기가 정답입니다."
                },
                {
                    id: "v3-p7-t10-q152",
                    questionNo: 152,
                    text: "How can Ms. Prigarina receive two free cleanings?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By prepaying for services",
                        "B": "By signing a contract for six months",
                        "C": "By changing her starting date",
                        "D": "By using a discount code"
                    },
                    correctAnswer: "B",
                    translation: "Ms. Prigarina가 어떻게 2회 무료 청소를 받을 수 있습니까?",
                    explanation: "지문에서 '10월 31일까지 6개월 서비스를 신청(sign up for six months of service)'하면 첫 2회가 무료라고 언급했습니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v3-p7-t10-s4-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: Marcus Keller\nTo: Angela Jenkins\nDate: Friday, 2 November\nSubject: Postpone call\n\nAngela,\n\nUnfortunately, I have to cancel our planned afternoon phone call at the last minute—I hope you get this e-mail in time. Could we please reschedule? This was my mistake, as I somehow double-booked our appointment time. In fact, I am on my way out the door right now to keep the other appointment—a meeting with a high-priority client. I apologize.\n\nWould teleconferencing on Monday at noon work for you? Also, prior to our meeting, could you look further into any grant opportunities that might be available for the current project? Meanwhile, I will ask Leona to calculate more accurate budgets for some future initiatives that will need funding. That will allow us to be more productive when we meet next week.\n\nBest,\n\nMarcus Keller\nO’Connor Small Business Foundation",
                    translation: "발신: Marcus Keller\n수신: Angela Jenkins\n날짜: 11월 2일 금요일\n제목: 통화 연기\n\nAngela 씨에게:\n\n안타깝게도 오늘 오후로 예정된 전화를 갑작스럽게 취소해야 할 것 같습니다. 이 이메일을 제때 확인하시길 바랍니다. 일정을 다시 잡을 수 있을까요? 제가 어찌하다 보니 일정을 이중으로 예약하는 실수를 범했습니다. 사실 지금 다른 약속인 중요 고객과의 회의를 위해 나가는 길입니다. 사과드립니다.\n\n월요일 정오에 화상 회의를 하는 것이 어떨까요? 또한 저희 회의 전에 현재 프로젝트에 활용 가능한 지원금 기회가 있는지 더 자세히 알아봐 주실 수 있나요? 그동안 저는 Leona에게 자금이 필요한 몇 가지 미래 사업들에 대해 더 정확한 예산을 산출해 달라고 요청하겠습니다. 그렇게 하면 다음 주에 만났을 때 더 생산적으로 논의할 수 있을 것입니다.\n\n안녕히 계십시오.\n\nMarcus Keller\nO’Connor 중소기업 재단"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q153",
                    questionNo: 153,
                    text: "Why does Mr. Keller say he cannot meet as planned?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He anticipates a late return from a trip.",
                        "B": "He has no new information to report.",
                        "C": "He decided to take the afternoon off.",
                        "D": "He discovered a scheduling conflict."
                    },
                    correctAnswer: "D",
                    translation: "Mr. Keller가 계획대로 만날 수 없다고 말한 이유는 무엇입니까?",
                    explanation: "일정을 이중 예약(double-booked our appointment time)하는 실수를 했다고 언급했으므로 일정 충돌이 정답입니다."
                },
                {
                    id: "v3-p7-t10-q154",
                    questionNo: 154,
                    text: "What will most likely be done before the meeting?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "More financial information will be gathered.",
                        "B": "The meeting location will be changed.",
                        "C": "Another person will be invited to attend.",
                        "D": "A marketing plan will be modified."
                    },
                    correctAnswer: "A",
                    translation: "회의 전에 일어날 가능성이 가장 높은 일은 무엇입니까?",
                    explanation: "질문에서 Angela에게 '지원금 기회(grant opportunities)'를 알아보라고 했고, 본인은 '예산 산출(calculate budgets)'을 요청하겠다고 했으므로 재정 정보를 수집하는 일이 일어날 것입니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v3-p7-t10-s5-p1",
                    contextType: "P2_OFFI",
                    docType: "DOCUMENT",
                    content: "Gracio Store Comment Card\n\nGracio Store is seeking to make your visit with us a better experience. Tell us about your visit to our store today so we can improve the way we serve you. And each week, one comment card will be drawn from those submitted to earn the customer a $50 store coupon!\n\nCustomer name: Huy Nguyen\nE-mail contact: hnguyen@brightmail.co.nz\nDate: 4 May\nReason for your visit today: Shopping for a gift\nComment: I was shopping for a friend’s birthday. Ms. Davie, a sales associate in Accessories, greeted me and asked me questions to narrow down my gift search. She even offered to hold some of my bags so that I could shop more easily. She directed me to a colourful display of silk scarves and told me about the various places they were produced. The one I chose ended up in my planned price range too.",
                    translation: "Gracio Store 고객 의견 카드\n\nGracio Store는 고객님의 방문이 더 나은 경험이 되도록 노력하고 있습니다. 더 나은 서비스를 제공할 수 있도록 오늘 방문에 대해 말씀해 주세요. 매주 제출된 카드 중 하나를 추첨하여 고객님께 50달러 매장 쿠폰을 드립니다!\n\n고객 성함: Huy Nguyen\n이메일 연락처: hnguyen@brightmail.co.nz\n날짜: 5월 4일\n오늘 방문 목적: 선물 쇼핑\n의견: 친구 생일 선물을 사러 왔습니다. 액세서리 부서의 영업 사원인 Ms. Davie 씨가 저를 맞이해 주셨고, 제가 찾는 선물의 범위를 좁힐 수 있도록 질문들을 해주셨습니다. 심지어 제가 더 편하게 쇼핑할 수 있도록 제가 들고 있던 가방들을 들어주겠다고 제안하기도 했습니다. 그녀는 저를 화려한 실크 스카프 진열대로 안내해 주었고 그것들이 생산된 여러 장소에 대해 설명해 주었습니다. 제가 고른 물건은 제가 계획했던 가격대에도 딱 맞았습니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q155",
                    questionNo: 155,
                    text: "What is indicated about Gracio Store?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It has recently opened.",
                        "B": "It is training new sales associates.",
                        "C": "It wants to improve its customer service.",
                        "D": "It has organized a competition."
                    },
                    correctAnswer: "C",
                    translation: "Gracio Store에 대해 명시된 사실은 무엇입니까?",
                    explanation: "지문 첫머리에서 '더 나은 서비스를 제공할 수 있도록(improve the way we serve you)' 개선하고자 한다고 언급했으므로 고객 서비스 개선이 목적입니다."
                },
                {
                    id: "v3-p7-t10-q156",
                    questionNo: 156,
                    text: "The word “drawn” in paragraph 1, line 3, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "sketched",
                        "B": "picked",
                        "C": "attracted",
                        "D": "described"
                    },
                    correctAnswer: "B",
                    translation: "첫 번째 단락 세 번째 줄의 'drawn'과 의미가 가장 가까운 것은?",
                    explanation: "매주 카드 한 장을 추첨한다는 문맥에서 'drawn'은 '뽑히다(picked)'의 의미입니다."
                },
                {
                    id: "v3-p7-t10-q157",
                    questionNo: 157,
                    text: "What does Mr. Nguyen write about his experience?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He bought several different accessories.",
                        "B": "It took him a long time to find a gift.",
                        "C": "A manager answered his questions.",
                        "D": "He was able to stay within his gift budget."
                    },
                    correctAnswer: "D",
                    translation: "Mr. Nguyen은 자신의 경험에 대해 무엇이라고 썼습니까?",
                    explanation: "고른 물건이 '계획했던 가격대(planned price range)' 안에 있었다고 했으므로 예산 내에서 쇼핑했음을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v3-p7-t10-s6-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: lcho@cuvacorporatetraining.com\nTo: all_staff@cuvacorporatetraining.com\nDate: Monday, April 12, 10:53 A.M.\nSubject: Special notice\n\nDear colleagues,\n\nPlease be advised that the Customer Security System (CSS) installed on your computer will be automatically updated this weekend. Specifically, the update will be taking place from midnight, Saturday, April 17, to midnight, Sunday, April 18. — [1] —. Your device will restart after the update has been completed.\n\nThe purpose of the update is twofold. First, it will increase the security of our client information. Moreover, it will improve overall system performance. — [2] —. As a result, you should notice improved processing speeds and less unplanned system downtime.\n\nPlease note that following the update there will be a change in the appearance of the CSS log-in screen, but this change will not affect the log-in procedures.\n\nThe tech support team will be available to answer any questions you may have before and after the update. — [3] —. By Thursday, you will receive a link to a training video with explanations of the new features that will become available with the update. — [4] —.\n\nBest regards,\n\nLeana Cho\nManager, Technical Support Team",
                    translation: "발신: lcho@cuvacorporatetraining.com\n수신: all_staff@cuvacorporatetraining.com\n날짜: 4월 12일 월요일 오전 10:53\n제목: 특별 안내\n\n동료 여러분께:\n\n여러분의 컴퓨터에 설치된 고객 보안 시스템(CSS)이 이번 주말에 자동으로 업데이트될 예정임을 알려드립니다. 구체적으로 업데이트는 4월 17일 토요일 자정부터 4월 18일 일요일 자정까지 진행됩니다. — [1] —. 업데이트가 완료된 후 장치가 재시작됩니다.\n\n이번 업데이트의 목적은 두 가지입니다. 첫째, 고객 정보의 보안을 강화하기 위함입니다. 또한 전반적인 시스템 성능을 개선할 것입니다. — [2] —. 그 결과, 처리 속도가 빨라지고 예기치 않은 시스템 다운타임이 줄어드는 것을 체감하실 수 있을 것입니다.\n\n업데이트 이후 CSS 로그인 화면의 모양에 변화가 있을 예정이나, 이 변화가 로그인 절차에는 영향을 주지 않는다는 점에 유의하시기 바랍니다.\n\n기술 지원팀은 업데이트 전후로 여러분의 궁금한 점에 답변해 드릴 것입니다. — [3] —. 목요일까지 업데이트와 함께 제공될 새로운 기능들에 대한 설명이 담긴 교육 비디오 링크를 받게 될 것입니다. — [4] —.\n\n안녕히 계십시오.\n\nLeana Cho\n기술 지원팀 매니저"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q158",
                    questionNo: 158,
                    text: "Why was the e-mail sent?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To motivate employees to increase their performance",
                        "B": "To instruct employees how to install a computer program update",
                        "C": "To obtain feedback about some new security procedures",
                        "D": "To alert employees about upcoming changes to some software"
                    },
                    correctAnswer: "D",
                    translation: "이 이메일이 발송된 이유는 무엇입니까?",
                    explanation: "주말에 있을 시스템 업데이트(Special notice about CSS update)를 직원들에게 알리기 위함입니다."
                },
                {
                    id: "v3-p7-t10-q159",
                    questionNo: 159,
                    text: "According to the e-mail, what will employees experience after April 18 ?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Better quality Web cameras",
                        "B": "A different CSS log-in screen",
                        "C": "Faster technical support service",
                        "D": "More comfortable keyboards"
                    },
                    correctAnswer: "B",
                    translation: "이메일에 따르면 직원들은 4월 18일 이후 무엇을 겪게 됩니까?",
                    explanation: "업데이트 이후 '로그인 화면의 모양에 변화(change in the appearance of the CSS log-in screen)'가 있을 것이라고 언급했습니다."
                },
                {
                    id: "v3-p7-t10-q160",
                    questionNo: 160,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n“During this period, some functions will be limited or unavailable.”",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n“이 기간 동안 일부 기능이 제한되거나 사용이 불가능할 수 있습니다.”",
                    explanation: "업데이트가 진행되는 구체적인 시간(토요일 자정부터 일요일 자정까지)을 언급한 바로 뒤인 [1]에 오는 것이 가장 자연스럽습니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t10-s7-p1",
                    contextType: "P2_OFFI",
                    docType: "WEBPAGE",
                    content: "https://www.electronicsplusexpress.com/returns\n\nElectronics Plus Express Return Policy\n\nAll returns require prior authorization. Please call during business hours (Monday–Friday 9:00 A.M. to 7:00 P.M. and weekends 10:00 A.M. to 5:00 P.M.) or e-mail Customer Service with your return request to receive a return authorization code.\n\nDefective merchandise may be returned within 30 days of purchase date. Any new merchandise may be returned within 14 days of purchase date. The original box and packaging materials must be included. If you need to return the item by post, the store will issue and e-mail a postage-paid shipping label for you to print at home and attach to your parcel. The cost of your item will be refunded once it has been received.\n\nCustomer Service contact information is as follows:\nPhone: 1-800-555-0176\nE-mail: cs@electronicsplusexpress.com",
                    translation: "https://www.electronicsplusexpress.com/returns\n\nElectronics Plus Express 반품 정책\n\n모든 반품에는 사전 승인이 필요합니다. 영업 시간(월-금 오전 9시-오후 7시, 주말 오전 10시-오후 5시) 내에 전화하시거나 고객 서비스 팀에 이메일로 반품 요청을 보내 반품 승인 코드를 받으시기 바랍니다.\n\n결함이 있는 제품은 구매일로부터 30일 이내에 반품이 가능합니다. 모든 새 제품은 구매일로부터 14일 이내에 반품할 수 있습니다. 원래의 상자와 포장재가 반드시 포함되어야 합니다. 우편으로 제품을 반품해야 하는 경우, 매장에서 가정에서 인쇄하여 소포에 부착할 수 있는 선불 배송 라벨을 발행하여 이메일로 보내드립니다. 제품 가격은 제품을 수령한 후 환불됩니다.\n\n고객 서비스 연락처 정보는 다음과 같습니다.\n전화: 1-800-555-0176\n이메일: cs@electronicsplusexpress.com"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q161",
                    questionNo: 161,
                    text: "For whom is the information most likely intended?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Customers of Electronics Plus Express",
                        "B": "Customer service representatives",
                        "C": "Repair technicians",
                        "D": "Shipping department employees"
                    },
                    correctAnswer: "A",
                    translation: "이 정보는 누구를 주 대상으로 합니까?",
                    explanation: "매장의 반품 정책(Return Policy)을 설명하고 있으므로 해당 매장의 고객들을 위한 정보입니다."
                },
                {
                    id: "v3-p7-t10-q162",
                    questionNo: 162,
                    text: "What is indicated about all returns?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They are only received at store locations.",
                        "B": "They cannot be processed on weekends.",
                        "C": "They require an authorization code.",
                        "D": "They are not accepted after 14 days."
                    },
                    correctAnswer: "C",
                    translation: "모든 반품에 대해 명시된 사실은 무엇입니까?",
                    explanation: "지문 첫 문장에서 '모든 반품에는 사전 승인이 필요하다'며 '승인 코드(authorization code)'를 받아야 한다고 했으므로 정답은 (C)입니다."
                },
                {
                    id: "v3-p7-t10-q163",
                    questionNo: 163,
                    text: "What is mentioned about return shipping fees?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They are calculated based on the weight of the package.",
                        "B": "They are listed on the company’s Web site.",
                        "C": "They will be refunded to the customer within 30 days.",
                        "D": "They are paid for by the company."
                    },
                    correctAnswer: "D",
                    translation: "반품 배송비에 대해 무엇이 언급되었습니까?",
                    explanation: "매장에서 '선불 배송 라벨(postage-paid shipping label)'을 발행해 준다고 했으므로 배송비는 회사 측에서 부담함을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t10-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT_MESSAGE",
                    content: "Kelli Wethers [2:15 P.M.] Hi, Mr. Easton. I want to remind you about the dinner meeting with your client, Mr. Kasai, at the Magnolia Grill this evening. Mr. Kasai will be coming directly from the airport. Anna Kwon from our marketing department will be joining both of you.\nAdam Easton [2:31 P.M.] Thanks, Ms. Wethers. It occurs to me, if he is coming straight from the airport, what will he do with his luggage?\nKelli Wethers [2:33 P.M.] Don’t worry. Kyle Friedman is picking Mr. Kasai up at the airport and dropping the bags off at the hotel. I’m adding Kyle to this message now in case you two need to communicate.\nAdam Easton [2:34 P.M.] Sounds great. I can drive Mr. Kasai back to his hotel following our meeting. It would be a nice gesture for such a key client.\nKyle Friedman [2:36 P.M.] Heading to the airport soon, Ms. Wethers. Just text me later if I need to know anything more.\nKelli Wethers [2:40 P.M.] Good idea, Mr. Easton. A taxi for after the dinner will not be necessary then.",
                    translation: "Kelli Wethers [오후 2:15] 안녕하세요, Easton 씨. 오늘 저녁 Magnolia Grill에서 귀하의 고객인 Kasai 씨와 저녁 식사 회의가 있다는 점을 상기시켜 드립니다. Kasai 씨는 공항에서 바로 오실 예정입니다. 마케팅 부서의 Anna Kwon 씨도 합류할 예정입니다.\nAdam Easton [오후 2:31] 감사합니다, Wethers 씨. 생각해보니 공항에서 바로 오신다면 그분의 짐은 어떻게 해야 할까요?\nKelli Wethers [오후 2:33] 걱정 마세요. Kyle Friedman 씨가 공항에서 Kasai 씨를 픽업하여 짐을 호텔에 맡겨주기로 했습니다. 두 분이 연락하셔야 할 수도 있으니 Kyle 씨를 이 대화창에 추가할게요.\nAdam Easton [오후 2:34] 좋네요. 회의 후에 제가 Kasai 씨를 호텔까지 모셔다드릴 수 있습니다. 그런 핵심 고객에게는 좋은 제스처가 될 것 같아서요.\nKyle Friedman [오후 2:36] 곧 공항으로 출발합니다, Wethers 씨. 더 알아야 할 사항이 있으면 나중에 문자 주세요.\nKelli Wethers [오후 2:40] 좋은 생각입니다, Easton 씨. 그럼 저녁 식사 후에 택시는 필요 없겠네요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q164",
                    questionNo: 164,
                    text: "What is the purpose of the online chat discussion?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To review arrangements for a client visit",
                        "B": "To choose a location for a company celebration",
                        "C": "To give invitations to a dinner event",
                        "D": "To arrange a taxi for some traveling colleagues"
                    },
                    correctAnswer: "A",
                    translation: "이 온라인 채팅 대화의 목적은 무엇입니까?",
                    explanation: "고객(Mr. Kasai)의 방문과 저녁 식사 일정, 픽업 및 이동 수단 등의 준비 상황을 논의하고 있으므로 정답은 (A)입니다."
                },
                {
                    id: "v3-p7-t10-q165",
                    questionNo: 165,
                    text: "Who will go to the airport?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Ms. Wethers",
                        "B": "Mr. Easton",
                        "C": "Mr. Friedman",
                        "D": "Ms. Kwon"
                    },
                    correctAnswer: "C",
                    translation: "식당으로 누가 공항에 갑니까?",
                    explanation: "Kyle Friedman이 공항에서 Kasai 씨를 픽업한다(picking Mr. Kasai up at the airport)고 언급되었습니다."
                },
                {
                    id: "v3-p7-t10-q166",
                    questionNo: 166,
                    text: "What is indicated about Mr. Kasai?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He prefers to dine at the Magnolia Grill.",
                        "B": "He is an important customer.",
                        "C": "He wants to get to his hotel on time.",
                        "D": "He is confused about driving directions."
                    },
                    correctAnswer: "B",
                    translation: "Mr. Kasai에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "Adam Easton이 그를 '핵심 고객(such a key client)'이라고 부르며 직접 운전해주겠다고 했으므로 중요한 고객임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t10-q167",
                    questionNo: 167,
                    text: "At 2:40 P.M., what does Ms. Wethers most likely mean when she writes, “Good idea, Mr. Easton”?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She thinks that a dinner meeting should be informal.",
                        "B": "She believes that a hotel selection is appropriate.",
                        "C": "She does not think that a client has a driver’s license.",
                        "D": "She agrees that a client should be offered a ride to a hotel."
                    },
                    correctAnswer: "D",
                    translation: "오후 2:40에 Ms. Wethers가 “Good idea, Mr. Easton”이라고 쓴 의도는 무엇입니까?",
                    explanation: "Easton이 고객을 호텔까지 직접 태워다주겠다고 제안한 것에 대해 찬성한 것이므로, 고객에게 귀가 차량 편의를 제공하자는 데 동의하는 것입니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t10-s9-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: dcloeten@rindersbusiness.co.ke\nTo: staff@rindersbusiness.co.ke\nSubject: Information\nDate: 25 October\n\nDear Rinders Staff:\n\nOur company is growing, and I am pleased to welcome new staff members! Those in our Nairobi office will get to know Mary Gichuki very well. She will be the new office manager there, beginning on 1 November. Some of you met her last week when she visited the office. She will be replacing David Alberts.\n\nAnila Pillai will also be a new face in our Nairobi office. Ms. Pillai will be an administrative assistant, and she will greet visitors, answer the phone, and perform office duties. She will work on Wednesdays, Thursdays, and Fridays from 10:00 A.M. to 3:00 P.M.\n\nMark Karunga, who has worked in the Nairobi office for the past fifteen years, is being promoted to senior accountant and will work in our new Mombasa office beginning on 15 November.\n\nI will soon be sending another e-mail alerting you to more new faces in our offices since we are still hiring personnel for the Mombasa location. We hope to have all positions filled before the grand opening in November.\n\nSincerely,\n\nDeborah Cloeten\nVice President\nRinders Business Systems",
                    translation: "발신: dcloeten@rindersbusiness.co.ke\n수신: staff@rindersbusiness.co.ke\n제목: 안내\n날짜: 10월 25일\n\nRinders 직원 여러분께:\n\n회사가 성장하고 있으며, 새로운 직원들을 환영하게 되어 기쁩니다! 나이로비 사무소 직원들은 Mary Gichuki 씨를 잘 알게 될 것입니다. 그녀는 11월 1일부터 그곳의 새로운 사무소 매니저가 될 예정입니다. 지난주 사무소를 방문했을 때 그녀를 만난 분들도 계실 겁니다. 그녀는 David Alberts 씨를 대신하게 됩니다.\n\nAnila Pillai 씨 또한 나이로비 사무소의 새로운 얼굴이 될 것입니다. Pillai 씨는 행정 보조로서 방문객 맞이, 전화 응대 및 사무 업무를 수행할 것입니다. 그녀는 수요일, 목요일, 금요일 오전 10시부터 오후 3시까지 근무할 예정입니다.\n\n지난 15년 동안 나이로비 사무소에서 근무해 온 Mark Karunga 씨는 선임 회계사로 승진하여 11월 15일부터 새로운 몸바사 사무소에서 근무하게 됩니다.\n\n몸바사 지점 인력을 여전히 채용 중이므로 곧 더 많은 새 얼굴들을 알려드리는 또 다른 이메일을 보내겠습니다. 11월 개관식 전에 모든 자리가 충원되기를 바랍니다.\n\n진심을 담아,\n\nDeborah Cloeten\n부사장\nRinders Business Systems"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q168",
                    questionNo: 168,
                    text: "What is the main purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To describe some staff changes",
                        "B": "To discuss some new office procedures",
                        "C": "To contrast two company locations",
                        "D": "To report on recent office visitors"
                    },
                    correctAnswer: "A",
                    translation: "이 이메일의 주요 목적은 무엇입니까?",
                    explanation: "신규 채용, 후임자 임명, 승진 및 전근 소식 등 직원 인사 변화를 알리고 있으므로 정답은 (A)입니다."
                },
                {
                    id: "v3-p7-t10-q169",
                    questionNo: 169,
                    text: "Who will be working part-time at Rinders Business Systems?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Ms. Gichuki",
                        "B": "Mr. Alberts",
                        "C": "Ms. Pillai",
                        "D": "Ms. Cloeten"
                    },
                    correctAnswer: "C",
                    translation: "Rinders Business Systems에서 아르바이트(시간제)로 일하게 될 사람은 누구입니까?",
                    explanation: "Anila Pillai 씨가 수, 목, 금 특정 시간에만 근무한다고 했으므로 시간제 근무자임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t10-q170",
                    questionNo: 170,
                    text: "What is NOT indicated about Mr. Karunga?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "He is an accountant.",
                        "B": "He is a recent hire.",
                        "C": "He is being promoted.",
                        "D": "He is being transferred."
                    },
                    correctAnswer: "B",
                    translation: "Mr. Karunga에 대해 명시되지 않은 것은 무엇입니까?",
                    explanation: "그는 '지난 15년 동안 근무(worked... for the past fifteen years)'했다고 했으므로 최근 채용된 사람(recent hire)은 아닙니다."
                },
                {
                    id: "v3-p7-t10-q171",
                    questionNo: 171,
                    text: "What does Ms. Cloeten indicate about the Mombasa location?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is her new workplace.",
                        "B": "It has not yet opened.",
                        "C": "It is fully staffed.",
                        "D": "It is larger than the Nairobi office."
                    },
                    correctAnswer: "B",
                    translation: "Ms. Cloeten은 몸바사 지점에 대해 무엇을 언급했습니까?",
                    explanation: "11월의 '개관식(grand opening)' 전에 자리를 다 채우기를 바란다고 했으므로 아직 문을 열지 않았음을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t10-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t10-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "WEBPAGE",
                    content: "http://www.finnertontheater.com/aboutus\n\nThe Finnerton Theater\n\nThe Finnerton Theater is Grenville’s premier cinema for independent movies, documentaries, and film classics. — [1] —. Locally owned and operated for over 50 years, the theater retains its strong connection to the city. Once a top entertainment destination, it later persisted through years of economic stagnation and urban decline. — [2] —. An anchor for neighborhood revitalization and growth, the Finnerton Theater now serves as the backbone of the city’s thriving Riverside Arts District.\n\nIn the last half century, the Finnerton Theater has become a destination for film lovers from throughout the region. Attendees from cities as far away as Nesterport and Belmere come regularly to enjoy the theater’s unique ambiance. Over the theater’s history, more than 1,000 movies have been screened and dozens of others have premiered. — [3] —. The Finnerton Theater has hosted events with critically acclaimed directors and served as the stage for renowned public speakers. In the past decade, it has served as the host for the Greater Cincinnati Film Festival, the Midwest Documentary Fest, and the annual Clearacre Conference, which is sponsored by the city’s largest employer, Clearacre Tech. Five years ago, the theater was added to the state’s register of historic places.\n\nTo this day, filmgoers continue to frequent the Finnerton Theater whenever film releases are screened. — [4] —. And despite the ever-increasing popularity of online film-streaming services, ticket sales at the Finnerton Theater have risen continuously since its listing in the state’s register. It is a true cultural gem and a source of civic pride for local residents.",
                    translation: "http://www.finnertontheater.com/aboutus\n\nThe Finnerton Theater\n\nThe Finnerton Theater는 독립 영화, 다큐멘터리 및 고전 영화를 상영하는 Grenville 최고의 영화관입니다. — [1] —. 50년 이상 현지인이 소유하고 운영해 온 이 극장은 도시와 강력한 유대 관계를 유지하고 있습니다. 한때 최고의 엔터테인먼트 명소였던 이곳은 이후 경제 침체와 도시 쇠퇴의 시기에도 끈기 있게 버텨냈습니다. — [2] —. 인근 지역 활성화와 성장의 지지대 역할을 하는 Finnerton Theater는 현재 활기 넘치는 도시의 Riverside 예술 지구의 중추 역할을 하고 있습니다.\n\n지난 반세기 동안 Finnerton Theater는 지역 전체 영화 애호가들의 명소가 되었습니다. Nesterport나 Belmere처럼 멀리 떨어진 도시의 관객들도 극장 특유의 분위기를 즐기기 위해 정기적으로 찾아옵니다. 극장 역사상 1,000편 이상의 영화가 상영되었고 수십 편의 영화가 이곳에서 첫선을 보였습니다. — [3] —. Finnerton Theater는 비평가들의 찬사를 받는 감독들과 함께하는 행사를 주최해 왔으며 유명 대중 연사들의 무대가 되기도 했습니다. 지난 10년 동안 Greater Cincinnati 영화제, Midwest 다큐멘터리 영화제, 그리고 도시 최대 고용주인 Clearacre Tech가 후원하는 연례 Clearacre 컨퍼런스를 주최해 왔습니다. 5년 전, 이 극장은 주 역사 유적지로 등록되었습니다.\n\n오늘날까지도 영화 관객들은 영화가 상영될 때마다 Finnerton Theater를 계속 찾고 있습니다. — [4] —. 온라인 영화 스트리밍 서비스의 인기가 나날이 높아짐에도 불구하고, Finnerton Theater의 티켓 판매는 역사 유적지 등재 이후 지속적으로 증가해 왔습니다. 이곳은 진정한 문화적 보석이자 지역 주민들의 시민적 자부심의 원천입니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t10-q172",
                    questionNo: 172,
                    text: "What is the purpose of the Web page?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To announce an upcoming film festival",
                        "B": "To discuss the opening of a new theater",
                        "C": "To promote a recent film release",
                        "D": "To profile a local movie theater"
                    },
                    correctAnswer: "D",
                    translation: "이 웹 페이지의 목적은 무엇입니까?",
                    explanation: "Finnerton Theater의 역사, 역할, 현황 등을 소개하고 있으므로 지역 영화관을 프로파일링(소개)하는 것이 목적입니다."
                },
                {
                    id: "v3-p7-t10-q173",
                    questionNo: 173,
                    text: "In what city is the Finnerton Theater located?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Grenville",
                        "B": "Nesterport",
                        "C": "Belmere",
                        "D": "Cincinnati"
                    },
                    correctAnswer: "A",
                    translation: "Finnerton Theater는 어느 도시에 위치해 있습니까?",
                    explanation: "지문 첫 문장에서 'Grenville 최고의 영화관(Grenville’s premier cinema)'이라고 언급되었습니다."
                },
                {
                    id: "v3-p7-t10-q174",
                    questionNo: 174,
                    text: "What is indicated about the Finnerton Theater?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It will move to a new building soon.",
                        "B": "It has expanded its concession menu.",
                        "C": "It is where a yearly conference is held.",
                        "D": "It is the city’s largest employer."
                    },
                    correctAnswer: "C",
                    translation: "Finnerton Theater에 대해 알 수 있는 점은 무엇입니까?",
                    explanation: "지난 10년 동안 '연례 Clearacre 컨퍼런스(annual Clearacre Conference)'를 주최해 왔다고 언급했습니다."
                },
                {
                    id: "v3-p7-t10-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n“Amid a changing cityscape, it continued to evolve with the neighborhood around it.”",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n“변화하는 도시의 모습 속에서도 이곳은 주변 지역과 함께 지속적으로 발전해 왔습니다.”",
                    explanation: "도시의 쇠퇴를 겪으면서도 버텨냈다는 내용과 지역 활성화의 지지대 역할을 하고 있다는 내용 사이의 흐름을 잇는 [2]가 가장 적절합니다."
                }
            ]
        }
    ]
};
