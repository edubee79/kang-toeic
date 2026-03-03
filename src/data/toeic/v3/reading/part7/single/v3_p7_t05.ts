
import { Part7Test } from './types';

export const test5Data: Part7Test = {
    testId: 5,
    vol: 3,
    title: "Test 5",
    sets: [
        {
            id: "v3-p7-t5-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t5-s1-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: "**Yummy Good Foods**\nIs nutrition important to you?\nDo you like high-quality, natural products?\nAre you short on time?\nThen consider our healthy, nutritional meals shipped right to your door! Yummy Good Foods is having a special one-time offer. We will send your first week of delicious meals from our Healthy Meal menu with complimentary shipping!\nGo to www.yummygoodfoods.com and enter code: **BetterHealth4Me**.\nOffer valid through June with your first monthly purchase.",
                    translation: "**Yummy Good Foods**\n영양이 중요하신가요?\n고품질의 천연 제품을 좋아하시나요?\n시간이 부족하신가요?\n그렇다면 당신의 집 앞까지 배송되는 건강하고 영양가 있는 식단을 고려해 보세요! Yummy Good Foods에서 특별한 일회성 혜택을 드립니다. 저희의 Healthy Meal 메뉴에서 첫 주간의 맛있는 식사를 무료 배송으로 보내드립니다!\nwww.yummygoodfoods.com에 방문하여 **BetterHealth4Me** 코드를 입력하세요.\n6월까지 첫 월간 구매 시 유효합니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q147",
                    questionNo: 147,
                    text: "What is the purpose of the advertisement?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To promote a store opening",
                        "B": "To attract new customers",
                        "C": "To announce a new menu",
                        "D": "To report a Web site upgrade"
                    },
                    correctAnswer: "B",
                    translation: "광고의 목적은 무엇입니까?",
                    explanation: "특별 한정 혜택(special one-time offer)과 첫 주 무료 배송(first week... complimentary shipping)을 통해 신규 고객을 유치하려 하고 있습니다."
                },
                {
                    id: "v3-p7-t5-q148",
                    questionNo: 148,
                    text: "What is available through the month of June?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A diet analysis",
                        "B": "A sample recipe",
                        "C": "A free delivery",
                        "D": "A magazine subscription"
                    },
                    correctAnswer: "C",
                    translation: "6월 한 달 동안 이용 가능한 것은 무엇입니까?",
                    explanation: "지문 마지막 문장에서 6월까지 유효한 첫 구매 시 무료 배송(complimentary shipping) 혜택을 언급하고 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t5-s2-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "**To:** All Residents\n**From:** Dan Madsen\n**Date:** 20 September\n**Subject:** Georgetown Marathon\n\nTo all Thompson Towers residents:\n\nThe 25th annual Georgetown Marathon will be held next Saturday. This year, for the first time, the race will turn off of River Street and proceed onto Elmont Avenue. So on Saturday, there will be nearly 5,000 registered contestants running along the stretch of road that provides the only access to our Thompson Towers parking garage entrance. Unsurprisingly, Elmont Avenue will be closed to all vehicle traffic between 7:00 A.M. and 10:45 A.M. This means that residents' cars will not be able to enter or exit our parking garage during this event. If you know that you will need to use your car during this period, we recommend that you make arrangements ahead of time for either leaving early or parking elsewhere.\n\nFor more information about the race, including maps, registration guidelines, and alternative parking locations, please go to www.georgetownmarathon.co.uk.\n\nSincerely yours,\n\nDan Madsen\nProperty Manager, Thompson Towers",
                    translation: "**수신:** 모든 거주자\n**발신:** Dan Madsen\n**날짜:** 9월 20일\n**제목:** 조지타운 마라톤\n\n모든 Thompson Towers 거주자분들께:\n\n제25회 연례 조지타운 마라톤이 다음 주 토요일에 개최됩니다. 올해는 처음으로 경주 코스가 River Street에서 Elmont Avenue로 방향을 틀게 됩니다. 따라서 토요일에는 약 5,000명의 등록 선수들이 우리 Thompson Towers 주차장 입구로 통하는 유일한 도로 구간을 따라 달리게 될 것입니다. 당연하게도, Elmont Avenue는 오전 7시부터 오전 10시 45분까지 모든 차량 통행이 차단될 예정입니다. 이는 거주자분들의 차량이 행사 기간 동안 주차장에 진입하거나 나갈 수 없음을 의미합니다. 만약 이 기간 동안 차를 사용해야 한다면, 미리 일찍 출발하거나 다른 곳에 주차하는 등의 조치를 취하실 것을 권장합니다.\n\n지도를 포함한 경주 정보, 등록 가이드라인 및 대체 주차 위치에 대한 자세한 정보는 www.georgetownmarathon.co.uk를 방문해 주세요.\n\n감사합니다.\n\nDan Madsen\n관리 소장, Thompson Towers"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q149",
                    questionNo: 149,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To encourage participation in a race",
                        "B": "To warn of an upcoming road closure",
                        "C": "To reschedule a tenant meeting",
                        "D": "To announce a construction plan"
                    },
                    correctAnswer: "B",
                    translation: "이 이메일의 목적은 무엇입니까?",
                    explanation: "마라톤 행사로 인해 도로가 통제(Elmont Avenue will be closed)되어 주차장 이용이 불가능함을 알리려는 목적입니다."
                },
                {
                    id: "v3-p7-t5-q150",
                    questionNo: 150,
                    text: "What is indicated about the Georgetown Marathon?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It has close to 5,000 participants.",
                        "B": "It is being held for the first time.",
                        "C": "It starts on Elmont Avenue.",
                        "D": "It includes participants from Thompson Towers."
                    },
                    correctAnswer: "A",
                    translation: "조지타운 마라톤에 대해 나타난 사실은 무엇입니까?",
                    explanation: "지문에 'nearly 5,000 registered contestants'라고 명시되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t5-s3-p1",
                    contextType: "P3_MEDI",
                    docType: "INFORMATION",
                    content: "One reason that corrugated fiberboard has become such a popular material for shipping fresh vegetables and fruits is the ease of labeling the containers. Information such as the brand, size, and grade of the produce can be printed directly on the box after it has been formed. Although this method, known as \"postprinting,\" is the most economical way of labeling fiberboard containers, it is limited to only one or two colors. Full-color graphics can be obtained by printing the information on the box before it has been formed. This method, known as \"preprinting,\" costs about 15 percent more, but many supermarket managers prefer it because customers are attracted to the colorful displays, which leads to increased sales.",
                    translation: "골판지가 신선한 채소와 과일 운송용으로 인기 있는 재료가 된 이유 중 하나는 용기에 라벨을 붙이기 쉽기 때문입니다. 제품의 브랜드, 크기, 등급과 같은 정보는 박스가 만들어진 후에 직접 인쇄할 수 있습니다. '후인쇄(postprinting)'라고 알려진 이 방법은 골판지 용기에 라벨을 붙이는 가장 경제적인 방법이지만, 색상이 한두 가지로 제한됩니다. 풀컬러 그래픽은 박스가 만들어지기 전에 정보를 인쇄함으로써 얻을 수 있습니다. '선인쇄(preprinting)'라고 불리는 이 방법은 비용이 약 15% 더 들지만, 많은 슈퍼마켓 매니저들이 선호합니다. 고객들이 화려한 디스플레이에 끌리게 되어 매출 증가로 이어지기 때문입니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q151",
                    questionNo: 151,
                    text: "What is indicated about corrugated fiberboard boxes?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They are easy to label.",
                        "B": "They hold more than other containers.",
                        "C": "They keep vegetables fresh.",
                        "D": "They are used less often than other types."
                    },
                    correctAnswer: "A",
                    translation: "골판지 상자에 대해 나타난 사실은 무엇입니까?",
                    explanation: "지문 첫 문장에서 'is the ease of labeling the containers'라고 언급하고 있습니다."
                },
                {
                    id: "v3-p7-t5-q152",
                    questionNo: 152,
                    text: "Why do store managers generally prefer boxes with full-color graphics?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They can be cleaned and reused.",
                        "B": "They come in a wide variety of sizes.",
                        "C": "They are often requested by customers.",
                        "D": "They increase customers' purchases."
                    },
                    correctAnswer: "D",
                    translation: "상점 매니저들이 일반적으로 풀컬러 그래픽이 있는 상자를 선호하는 이유는 무엇입니까?",
                    explanation: "마지막 문장에서 'leads to increased sales(매출 증가로 이어진다)'라고 설명하고 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set4",
            setType: "Single",
            questionRange: "153-155",
            passages: [
                {
                    id: "v3-p7-t5-s4-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: `**ADMINISTRATIVE ASSISTANT**\n**Position Summary:**\nNaidu Rai Electronics, one of the world's leading manufacturers in the telecommunications industry, is seeking a full-time administrative assistant in our Jaipur office.\n\n**Responsibilities:**\n1. Provide administrative support for members of the product design team, including travel and expense reports\n2. Schedule appointments with prospective clients and designers\n3. Maintain files, process documents, and compile reports\n\n**Required Qualifications/Education:**\nSenior school certificate mandatory; business school certification preferred\n\n**Skills:**\n1. Strong interpersonal skills\n2. Strong organizational and planning skills\n3. Software proficiency\n\nTo be considered, e-mail your résumé and cover letter to **s.mohta@naiduraielec.in**; candidates selected for an interview will be required to take a basic software proficiency test.`,
                    translation: `**행정직 비서 공고**\n**직무 개요:**\n통신 업계의 세계 선두 제조업체 중 하나인 Naidu Rai Electronics에서 Jaipur 사무소의 정규직 행정 비서를 모집합니다.\n\n**주요 업무:**\n1. 출장 및 비용 보고를 포함한 제품 설계 팀원에 대한 행정 지원 제공\n2. 잠재 고객 및 디자이너와의 미팅 예약\n3. 파일 유지 관리, 문서 처리 및 보고서 작성\n\n**필수 자격/학력:**\n고등학교 졸업 증명서 필수, 상업 학교 자격증 소지자 선호\n\n**보유 기술:**\n1. 뛰어난 대인 관계 기술\n2. 뛰어난 조직 및 계획 능력\n3. 소프트웨어 숙련도\n\n지원을 원하시는 분은 **s.mohta@naiduraielec.in**으로 이력서와 자기소개서를 이메일로 보내주시기 바랍니다. 면접 대상자로 선정된 분들은 기본적인 소프트웨어 숙련도 테스트를 치러야 합니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q153",
                    questionNo: 153,
                    text: "What is indicated about the job?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It involves working with product designers.",
                        "B": "It requires frequent travel.",
                        "C": "It is a temporary position.",
                        "D": "It has been available for several months."
                    },
                    correctAnswer: "A",
                    translation: "이 직무에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "주요 업무 1번에서 제품 설계 팀(product design team)에 대한 지원 업무를 수행한다고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t5-q154",
                    questionNo: 154,
                    text: "According to the advertisement, what must a person do to apply?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Provide a client list",
                        "B": "Forward school transcripts",
                        "C": "Submit a résumé",
                        "D": "Send a reference letter"
                    },
                    correctAnswer: "C",
                    translation: "광고에 따르면, 지원하려면 무엇을 해야 합니까?",
                    explanation: "마지막 문장에서 이력서(résumé)와 자기소개서를 이메일로 보내라고 안내하고 있습니다."
                },
                {
                    id: "v3-p7-t5-q155",
                    questionNo: 155,
                    text: "What will an applicant do at an interview?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Answer a telephone call",
                        "B": "Take a computer test",
                        "C": "Submit a writing sample",
                        "D": "Compile a report"
                    },
                    correctAnswer: "B",
                    translation: "지원자는 면접에서 무엇을 하게 됩니까?",
                    explanation: "면접 대상자는 소프트웨어 숙련도 테스트(software proficiency test)를 치러야 한다고 언급되었습니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set5",
            setType: "Single",
            questionRange: "156-158",
            passages: [
                {
                    id: "v3-p7-t5-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "WEBPAGE",
                    content: "URL: http://www.moorecountylibrary.gov/seminars\n\n**MARKETING BASICS**\nApril 15, 6 P.M.\n**Moore County Library System, Newburg Branch**\nPresenter: **Sal Quatrochi**\n\nDo you want to learn how to effectively market your business?\nCome join us for this informative class, where you will learn how to:\n\n• Determine your target customers and what motivates them to buy\n• Choose the best ways to reach your customers\n• Identify your competitors and stand out from them\n• Get the most out of your limited marketing budget\n\nThe class is free, but registration is required and begins on March 1.\n\n**Marketing Basics** is part of Moore County Library's new ongoing series, **Marketing for Small Businesses**. Join us for our next class, **Digital Strategy**, on May 6 at the Lancaster Branch. Registration will open April 5.",
                    translation: "**마케팅 기초**\n4월 15일 오후 6시\n**Moore County 도서관 시스템, Newburg 분관**\n발표자: **Sal Quatrochi**\n\n사업을 효과적으로 홍보하는 방법을 배우고 싶으신가요?\n유익한 이번 강의에 참여하여 다음 방법들을 배워보세요:\n\n• 타겟 고객을 결정하고 그들의 구매 동기 파악하기\n• 고객에게 도달하는 최선의 방법 선택하기\n• 경쟁업체를 식별하고 차별화하기\n• 한정된 마케팅 예산을 최대한 활용하기\n\n강의는 무료이지만 등록이 필요하며, 등록은 3월 1일에 시작됩니다.\n\n**'마케팅 기초'**는 Moore County 도서관의 새로운 정기 시리즈인 **'소상공인을 위한 마케팅'**의 일부입니다. 5월 6일 Lancaster 분관에서 열리는 다음 강의 **'디지털 전략'**에도 참여해 보세요. 등록은 4월 5일에 시작됩니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q156",
                    questionNo: 156,
                    text: "When will the Marketing Basics class take place?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On March 1",
                        "B": "On April 5",
                        "C": "On April 15",
                        "D": "On May 6"
                    },
                    correctAnswer: "C",
                    translation: "마케팅 기초 수업은 언제 열립니까?",
                    explanation: "지문 상단에 'April 15'라고 날짜가 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t5-q157",
                    questionNo: 157,
                    text: "What topic will NOT be covered in the Marketing Basics class?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Identifying potential customers",
                        "B": "Showing how a business is different from its competitors",
                        "C": "Choosing a graphic designer to create advertisements",
                        "D": "Spending marketing money efficiently"
                    },
                    correctAnswer: "C",
                    translation: "마케팅 기초 수업에서 다루지 않는 주제는 무엇입니까?",
                    explanation: "잠재 고객 파악, 경쟁업체 차별화, 예산 집행에 대해서는 언급되었으나, 그래픽 디자이너 선택에 대한 내용은 없습니다."
                },
                {
                    id: "v3-p7-t5-q158",
                    questionNo: 158,
                    text: "What is indicated about the Marketing Basics class?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is taught by a marketing professor.",
                        "B": "It is one of several classes offered to business owners.",
                        "C": "It is designed for corporate executives.",
                        "D": "It will be offered again in the near future."
                    },
                    correctAnswer: "B",
                    translation: "마케팅 기초 수업에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "이 수업이 '소상공인을 위한 마케팅(Marketing for Small Businesses)' 시리즈의 일부라고 언급되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set6",
            setType: "Single",
            questionRange: "159-161",
            passages: [
                {
                    id: "v3-p7-t5-s6-p1",
                    contextType: "P3_MEDI",
                    docType: "WEBPAGE",
                    content: "— [1] —. The Melbourne Colton Hotel is pleased to announce that construction of the new Yarra River wing is now completed. — [2] —. This new section offers extended-stay apartments, which are ideal for executives who are relocating or for people on company travel for more than a week. We offer furnished one- and two-bedroom apartments with a living room, work space, and full kitchen. — [3] —.\nWe offer:\n• Different levels of pricing for housekeeping\n• A variety of low-cost Internet and phone plans\n• Conference facilities that can be booked for a minimal fee\n• Short-term gym memberships at several nearby fitness centers\n• Complimentary coffee served each morning in the lobby\n\nThe Melbourne Colton Hotel is close to transportation, tourist sites, and shopping. Contact reservations@coltonhotels.com.au for more information or call 61 3 7010 9921.\n— [4] —.",
                    translation: "[1] 멜버른 Colton 호텔에서 새로운 Yarra River 윙 공사가 완료되었음을 알려드립니다. [2] 이 새로운 구역은 이사 중인 임원이나 일주일 이상의 출장객들에게 이상적인 장기 체류형 아파트를 제공합니다. 거실, 업무 공간, 설비가 갖춰진 주방이 있는 1~2개 침실의 가구 비치 아파트를 제공합니다. [3]\n\n제공 서비스:\n• 하우스키핑을 위한 다양한 가격대\n• 다양한 저가 인터넷 및 전화 요금제\n• 소액의 비용으로 예약 가능한 회의 시설\n• 인근 여러 피트니스 센터의 단기 체험권\n• 로비에서 매일 아침 제공되는 무료 커피\n\n멜버른 Colton 호텔은 교통, 관광지 및 쇼핑몰과 가깝습니다. 더 자세한 정보는 reservations@coltonhotels.com.au로 문의하거나 61 3 7010 9921로 전화주세요. [4]"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q159",
                    questionNo: 159,
                    text: "For whom is the information mainly intended?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "Business travelers",
                        "B": "Tourists",
                        "C": "Hotel staff members",
                        "D": "Construction workers"
                    },
                    correctAnswer: "A",
                    translation: "이 정보는 주로 누구를 대상으로 합니까?",
                    explanation: "이사 중인 임원진이나 1주일 이상 장기 출장객(people on company travel)을 위한 시설임을 언급하고 있습니다."
                },
                {
                    id: "v3-p7-t5-q160",
                    questionNo: 160,
                    text: "What does the hotel provide at no charge?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Housekeeping",
                        "B": "Internet",
                        "C": "Conference rooms",
                        "D": "Coffee"
                    },
                    correctAnswer: "D",
                    translation: "호텔에서 무료로 제공하는 서비스는 무엇입니까?",
                    explanation: "제공 서비스 목록 마지막에 'Complimentary coffee(무료 커피)'가 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t5-q161",
                    questionNo: 161,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"In addition, optional services are available for extended-stay guests.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"또한, 장기 체류 고객들을 위한 선택 서비스들도 준비되어 있습니다.\"",
                    explanation: "아파트의 기본 시설을 설명한 후, 하우스키핑이나 인터넷 요금제 같은 추가적인 '제공 서비스' 목록이 시작되기 전인 [3]이 가장 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set7",
            setType: "Single",
            questionRange: "162-163",
            passages: [
                {
                    id: "v3-p7-t5-s7-p1",
                    contextType: "P2_OFFI",
                    docType: "TEXT_MESSAGE",
                    content: "[2:11 P.M.] Frank Stern:\nHi, Petra. A customer wants 1,000 glossy color posters, double-sided. Any chance we can do this today? If not, they might take the job elsewhere.\n\n[2:12 P.M.] Petra Kitzos:\nProbably not. We're backed up with a big job for Noble Architects. How about first thing tomorrow?\n\n[2:12 P.M.] Frank Stern:\nI'll ask.\n\n[2:13 P.M.] Frank Stern:\nThey want to know if it can be done by 10 A.M.\n\n[2:13 P.M.] Petra Kitzos:\nSure.\n\n[2:14 P.M.] Frank Stern:\nThat's a relief. Thanks.",
                    translation: "[오후 2:11] Frank Stern: 안녕 Petra, 한 고객이 유광 컬러 포스터 1,000장 양면 인쇄를 원해. 오늘 바로 가능할까? 안 되면 다른 곳에 맡길 것 같아.\n\n[오후 2:12] Petra Kitzos: 아마 안 될 거야. Noble Architects에서 들어온 큰 작업 때문에 밀려 있거든. 내일 아침 제일 먼저 하는 건 어때?\n\n[오후 2:12] Frank Stern: 물어볼게.\n\n[오후 2:13] Frank Stern: 오전 10시까지 끝낼 수 있는지 알고 싶대.\n\n[오후 2:13] Petra Kitzos: 물론이지.\n\n[오후 2:14] Frank Stern: 다행이다. 고마워."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q162",
                    questionNo: 162,
                    text: "Where do Mr. Stern and Ms. Kitzos most likely work?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "At a shipping store",
                        "B": "At an architecture firm",
                        "C": "At an accounting office",
                        "D": "At a print shop"
                    },
                    correctAnswer: "D",
                    translation: "Stern 씨와 Kitzos 씨는 어디에서 근무할 가능성이 높습니까?",
                    explanation: "포스터 1,000장 인쇄(1,000 glossy color posters)에 대해 대화하고 있으므로 인쇄소(print shop)입니다."
                },
                {
                    id: "v3-p7-t5-q163",
                    questionNo: 163,
                    text: "At 2:14 P.M., what does Mr. Stern most likely mean when he writes, \"That's a relief\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He is grateful to Ms. Kitzos for working overtime.",
                        "B": "He is no longer worried that his company might lose a client.",
                        "C": "He appreciates how quickly Ms. Kitzos responded.",
                        "D": "He is glad that he does not need to come in early in the morning."
                    },
                    correctAnswer: "B",
                    translation: "오후 2:14에 Mr. Stern이 \"That's a relief\"라고 쓴 의도는 무엇입니까?",
                    explanation: "주문을 오늘 처리하지 못하면 고객이 다른 곳으로 갈 수도 있는 상황이었으나, 오전 10시까지 가능하다는 답변을 받아 고객 이탈 걱정을 덜었기 때문입니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t5-s8-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: "Houkcomm Eyes Downtown Roseville\n(April 22)—Houkcomm, one of the state's leading telecommunications companies, will likely establish operations in Roseville. Houkcomm is reportedly looking to open a Roseville office as part of a new venture for the company: an expansion into the digital media industry. Houkcomm spokespeople have not offered any details on the plan, but two architects involved with the project confirmed that one proposed office building design would accommodate over 100 workers. The likely location for this soon-to-be constructed building, according to these sources, is a property adjacent to Behr Square in central Roseville.",
                    translation: "Houkcomm, 로즈빌 도심 진출 고려\n(4월 22일) - 주의 선두적인 통신 기업 중 하나인 Houkcomm이 로즈빌에 사업장을 설립할 것으로 보입니다. 전언에 따르면 Houkcomm은 회사의 새로운 벤처 사업인 디지털 미디어 산업 확장 계획의 일환으로 로즈빌 사무소 개설을 검토 중입니다. Houkcomm 대변인들은 계획에 대한 세부 사항을 제공하지 않았지만, 프로젝트에 참여한 두 명의 건축가는 제안된 사무실 건물 디자인 중 하나가 100명 이상의 직원을 수용할 수 있는 규모임을 확인해 주었습니다. 이 소식통들에 따르면, 곧 건설될 이 건물의 유력한 위치는 로즈빌 중심부의 Behr Square에 인접한 부지입니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q164",
                    questionNo: 164,
                    text: "What is Houkcomm planning to do in Roseville?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Offer a new telephone service",
                        "B": "Lease space to subcontractors",
                        "C": "Relocate its headquarters",
                        "D": "Open a new business division"
                    },
                    correctAnswer: "D",
                    translation: "Houkcomm은 로즈빌에서 무엇을 할 계획입니까?",
                    explanation: "디지털 미디어 산업으로의 확장(expansion into the digital media industry)을 위한 새로운 벤처 사업을 준비하고 있습니다."
                },
                {
                    id: "v3-p7-t5-q165",
                    questionNo: 165,
                    text: "What is true about Houkcomm?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is the only telecommunications company in the state.",
                        "B": "It is currently leasing space in central Roseville.",
                        "C": "It has recently hired more than 100 new workers.",
                        "D": "It already has a major presence in the state."
                    },
                    correctAnswer: "D",
                    translation: "Houkcomm에 대해 맞는 사실은 무엇입니까?",
                    explanation: "지문 첫 문장에서 'one of the state's leading telecommunications companies'라고 하여 이미 주 내에서 주요한 위치를 점하고 있음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t5-q166",
                    questionNo: 166,
                    text: "How did the reporter most likely obtain information for the article?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "From a press release written by Houkcomm representatives",
                        "B": "By interviewing employees of a firm that is doing work for Houkcomm",
                        "C": "Through public documents and construction permits",
                        "D": "By attending a press conference in Roseville"
                    },
                    correctAnswer: "B",
                    translation: "기자는 어떻게 이 기사의 정보를 얻었을 가능성이 높습니까?",
                    explanation: "프로젝트에 참여한 건축가들(architects involved with the project)이 해당 정보를 확인해 주었다고 했으므로, Houkcomm의 외주 업체 직원 인터뷰를 통해 얻었음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t5-q167",
                    questionNo: 167,
                    text: "According to the article, what is likely to happen soon?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Construction will begin on a new building.",
                        "B": "All Behr Square residences will be purchased.",
                        "C": "Houkcomm will negotiate new supply contracts.",
                        "D": "Manufacturing jobs will increase in Roseville."
                    },
                    correctAnswer: "A",
                    translation: "기사에 따르면 곧 일어날 일은 무엇입니까?",
                    explanation: "곧 건설될 건물(soon-to-be constructed building)에 대해 언급하고 있으므로 건설이 곧 시작될 것임을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t5-s9-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: Takeshi Ishiguro\nTo: All Sevastya employees\nSubject: Update\nDate: December 13\n\nDear Sevastya employees,\n\nI am writing to give you an update on this year’s sales so far. — [1] —. I am happy to report that currently our sales volume is up 20% from last year. This is due in part to the fact that we have been very successful in expanding our international reach.\n\n— [2] —. In Brazil, sales increased 57%, which can be attributed to the Rio de Janeiro Fashion Show where our evening wear was featured. A similar trend emerged in Russia, where sales were up by 32%. — [3] —. There we anticipate sustained growth for the rest of the year, especially in our winter apparel line. We also saw sales growth in the United Arab Emirates (UAE), but growth was a modest 10% due to fierce competition. That said, in this market, sign-ups for our credit card were strong. Finally, in Korea, where we have had our most successful international market launch thus far, favorable news articles about our products drove very strong sales.\n\n— [4] —. Thus, overall, it’s been an excellent year so far. I am confident that our new program, which offers discounts to customers who invite others to shop with us, will begin to boost sales growth at all locations.\n\nSincerely,\n\nTakeshi Ishiguro\nVice President of Sales",
                    translation: "발신: Takeshi Ishiguro\n수신: 모든 Sevastya 직원들\n제목: 업데이트\n날짜: 12월 13일\n\n친애하는 Sevastya 직원 여러분께,\n\n올해 현재까지의 영업 현황을 업데이트해 드리기 위해 메일을 보냅니다. [1] 작년 대비 현재 매출량이 20% 증가했다는 기쁜 소식을 전합니다. 이는 부분적으로 우리가 국제적 영향력을 성공적으로 확장해 온 덕분입니다.\n\n[2] 브라질에서는 매출이 57% 증가했는데, 이는 우리의 이브닝 웨어가 선보였던 리우데자네이루 패션쇼 덕분에 가능했습니다. 러시아에서도 비슷한 트렌드가 나타나 매출이 32% 증가했습니다. [3] 러시아에서는 남은 기간 지속적인 성장을 기대하고 있으며, 특히 우리의 겨울 의류 라인이 기대됩니다. 아랍에미리트(UAE)에서도 매출이 성장했지만, 치열한 경쟁으로 인해 10%의 완만한 성장세를 보였습니다. 그럼에도 불구하고, 이 시장에서 우리의 신용카드 가입 건수는 매우 높았습니다. 마지막으로, 지금까지 우리의 가장 성공적인 국제 시장 런칭을 기록한 한국에서는 제품에 대한 우호적인 기사들이 매우 높은 매출을 견고하게 이끌었습니다.\n\n[4] 결과적으로 올해는 현재까지 훌륭한 한 해를 보내고 있습니다. 지인을 초대해 쇼핑하도록 하는 고객에게 할인을 제공하는 우리의 새로운 프로그램이 모든 지역에서 매출 성장을 촉진하기 시작할 것이라고 확신합니다.\n\n진심을 담아,\n\nTakeshi Ishiguro\n영업 부사장"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q168",
                    questionNo: 168,
                    text: "What kind of business is Sevastya?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A travel agency",
                        "B": "A magazine publisher",
                        "C": "A clothing retailer",
                        "D": "A hotel chain"
                    },
                    correctAnswer: "C",
                    translation: "Sevastya는 어떤 종류의 기업입니까?",
                    explanation: "이브닝 웨어(evening wear)와 겨울 의류 라인(winter apparel line)을 언급하고 있으므로 의류 소매업체입니다."
                },
                {
                    id: "v3-p7-t5-q169",
                    questionNo: 169,
                    text: "According to the e-mail, where was the company’s product seen by an audience?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "In Brazil",
                        "B": "In Russia",
                        "C": "In the UAE",
                        "D": "In Korea"
                    },
                    correctAnswer: "A",
                    translation: "이메일에 따르면, 관객들이 이 회사의 제품을 본 곳은 어디입니까?",
                    explanation: "브라질 리우데자네이루의 패션쇼(Fashion Show)에서 제품이 선보였다고 언급되어 있습니다."
                },
                {
                    id: "v3-p7-t5-q170",
                    questionNo: 170,
                    text: "According to Mr. Ishiguro, what will likely bring increased business in the future?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Television commercials",
                        "B": "An expanded credit card program",
                        "C": "Company-sponsored contests",
                        "D": "Referrals from customers"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Ishiguro에 따르면, 무엇이 향후 사업 성장을 가져올 것으로 보입니까?",
                    explanation: "지인을 초대하는 고객에게 할인을 제공하는 새 프로그램(new program, which offers discounts to customers who invite others)은 고객 추천(referrals)을 통한 마케팅입니다."
                },
                {
                    id: "v3-p7-t5-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n“Here are some figures from around the world.”",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"여기에 전 세계의 몇 가지 수치들이 있습니다.\"",
                    explanation: "전반적인 매출 성장을 언급한 뒤, 각 국가별(브라질, 러시아 등) 구체적인 수치를 나열하기 시작하는 문장 바로 앞인 [2]가 가장 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t5-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t5-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "TEXT_MESSAGE",
                    content: "Lynda McCann (1:08 P.M.) Hello, Bernadette and Harrison. We urgently need to schedule a team meeting, so we can get working on our project.\nBernadette Ecco (1:10 P.M.) Sure. Are you wanting an all-marketing-staff meeting? Let me know if I can assist.\nLynda McCann (1:12 P.M.) No, I was thinking of the O'Neil project, so only the three of us who are on that team need to meet.\nBernadette Ecco (1:14 P.M.) Okay. I'm free either this Wednesday or Friday during the early afternoon.\nHarrison Miller (1:15 P.M.) I thought I had been reassigned to the McMillan project instead.\nBernadette Ecco (1:17 P.M.) No, the final slot on that team was filled by Jacob Aikens, since he's worked on similar projects in the past, like the Greller project and the Allford project.\nHarrison Miller (1:18 P.M.) Okay, I see.\nLynda McCann (1:19 P.M.) I'm available on Wednesday and Friday as well, but only before 3 P.M.; I'll be meeting with the sales team on Wednesday at 3 P.M. and the research team on Friday at 3:30 P.M.\nHarrison Miller (1:21 P.M.) Wednesday won't work for me, but I could do Friday at 1 P.M.\nLynda McCann (1:23 P.M.) Sounds good! Bernadette?\nBernadette Ecco (1:23 P.M.) Perfect! I'll reserve the small conference room for us.",
                    translation: "[오후 1:08] Lynda McCann: 안녕 Bernadette, Harrison. 우리 프로젝트 작업을 시작할 수 있도록 긴급하게 팀 미팅을 잡아야 해.\n[오후 1:10] Bernadette Ecco: 좋아. 마케팅 직원 전체 미팅을 원하는 거야? 도움이 필요하면 알려줘.\n[오후 1:12] Lynda McCann: 아니, O'Neil 프로젝트에 대한 거라 그 팀에 속한 우리 셋만 만나면 돼.\n[오후 1:14] Bernadette Ecco: 알았어. 이번 주 수요일이나 금요일 이른 오후 시간대면 괜찮아.\n[오후 1:15] Harrison Miller: 난 대신 McMillan 프로젝트로 재배정된 줄 알았는데.\n[오후 1:17] Bernadette Ecco: 아니야, 그 팀의 마지막 자리는 Jacob Aikens가 채웠는데, 그 친구가 예전에 Greller 프로젝트나 Allford 프로젝트 같은 비슷한 프로젝트들을 한 경험이 있거든.\n[오후 1:18] Harrison Miller: 아, 알겠어.\n[오후 1:19] Lynda McCann: 나도 수요일과 금요일이 괜찮긴 한데, 오후 3시 이전이어야 해. 수요일 오후 3시에는 영업 팀과 미팅이 있고, 금요일 오후 3시 30분에는 연구 팀과 미팅이 있거든.\n[오후 1:21] Harrison Miller: 난 수요일은 안 되는데, 금요일 오후 1시는 가능해.\n[오후 1:23] Lynda McCann: 좋아! Bernadette는 어때?\n[오후 1:23] Bernadette Ecco: 완벽해! 내가 작은 회의실을 예약해둘게."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t5-q172",
                    questionNo: 172,
                    text: "In what department do the writers most likely work?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "Sales",
                        "B": "Marketing",
                        "C": "Billing",
                        "D": "Research"
                    },
                    correctAnswer: "B",
                    translation: "이 대화를 나누는 사람들은 어느 부서에서 근무할 가능성이 높습니까?",
                    explanation: "Bernadette의 첫 답변에서 'all-marketing-staff'를 언급하고 있으므로 마케팅 부서(Marketing)입니다."
                },
                {
                    id: "v3-p7-t5-q173",
                    questionNo: 173,
                    text: "To what project are the three writers assigned?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The O'Neil project",
                        "B": "The McMillan project",
                        "C": "The Greller project",
                        "D": "The Allford project"
                    },
                    correctAnswer: "A",
                    translation: "세 사람은 어떤 프로젝트에 배정되어 있습니까?",
                    explanation: "Lynda가 'O'Neil project' 팀원 셋만 만나면 된다고 명시적으로 언급했습니다."
                },
                {
                    id: "v3-p7-t5-q174",
                    questionNo: 174,
                    text: "At 1:18 P.M., what does Mr. Miller most likely mean when he writes, \"Okay, I see\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He understands that he was not moved to another team.",
                        "B": "He recognizes that he did not come to a meeting on time.",
                        "C": "He accepts that he is not going to meet with a client.",
                        "D": "He acknowledges that he did not complete a task."
                    },
                    correctAnswer: "A",
                    translation: "오후 1:18에 Mr. Miller가 \"Okay, I see\"라고 쓴 의도는 무엇입니까?",
                    explanation: "자신이 다른 프로젝트(McMillan)로 재배정된 줄 알았으나, Bernadette의 설명을 듣고 자신이 여전히 현재 팀에 있음을 이해한 상황입니다."
                },
                {
                    id: "v3-p7-t5-q175",
                    questionNo: 175,
                    text: "Why was the meeting scheduled for Friday rather than Wednesday?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Ms. McCann has a commitment with another team on that day.",
                        "B": "Ms. Ecco's schedule is very busy this month.",
                        "C": "Mr. Miller is unavailable on Wednesday.",
                        "D": "A sales team will be using the conference room on Wednesday."
                    },
                    correctAnswer: "C",
                    translation: "미팅이 수요일이 아닌 금요일로 잡힌 이유는 무엇입니까?",
                    explanation: "Harrison Miller가 수요일은 안 된다(Wednesday won't work for me)고 말했기 때문입니다."
                }
            ]
        }
    ]
};
