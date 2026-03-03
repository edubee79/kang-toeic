import { Part7Test } from './types';

export const test9Data: Part7Test = {
    testId: 9,
    vol: 3,
    title: "Test 9",
    sets: [
        {
            id: "v3-p7-t9-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t9-s1-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: "Wayne Rental Available\n\nA sparkling two-bedroom, one-bath apartment is available in the village of Wayne, fifteen miles from the center of Bowling Green. Situated in a mid-rise building that is ten years old, the apartment is convenient to shops and cafés and within walking distance of the train station. The oven and dishwasher have just been replaced, and a fresh tile countertop has been installed in the kitchen. A new washer and dryer set is next to the pantry. The monthly rent is $950, including utilities. Sign a one-year lease and you can move in as early as August 1. Call (419) 555-0145 to arrange a tour.",
                    translation: "Wayne 렌탈 가능\n\nBowling Green 중심가에서 15마일 떨어진 Wayne 마을에 깨끗한 침실 2개, 욕실 1개 구조의 아파트가 매물로 나왔습니다. 10년 된 중층 건물에 위치한 이 아파트는 상점과 카페가 가깝고 기차역까지 도보로 이동 가능한 거리에 있습니다. 오븐과 식기세척기는 최근 교체되었으며, 주방에는 새로운 타일 조리대가 설치되었습니다. 새 세탁기와 건조기 세트는 식품 저장실 옆에 있습니다. 월 임대료는 공공요금을 포함하여 950달러입니다. 1년 임대 계약을 체결하시면 이르면 8월 1일부터 입주하실 수 있습니다. (419) 555-0145로 전화하여 둘러보기 일정을 잡으십시오."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q147",
                    questionNo: 147,
                    text: "What is suggested about the apartment building?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It is under new management.",
                        "B": "It has a large parking area.",
                        "C": "It is close to public transportation.",
                        "D": "It was constructed one year ago."
                    },
                    correctAnswer: "C",
                    translation: "이 아파트 건물에 대해 알 수 있는 점은 무엇입니까?",
                    explanation: "지문에서 '기차역에서 도보 거리(within walking distance of the train station)'라고 언급했으므로 대중교통과 가깝다는 것을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t9-q148",
                    questionNo: 148,
                    text: "What is NOT mentioned as a new appliance?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "A refrigerator",
                        "B": "A clothes dryer",
                        "C": "An oven",
                        "D": "A dishwasher"
                    },
                    correctAnswer: "A",
                    translation: "새 가전제품으로 언급되지 않은 것은 무엇입니까?",
                    explanation: "지문에 식기세척기(dishwasher), 오븐(oven), 세탁기와 건조기 세트(washer and dryer set)는 새것으로 교체되거나 설치되었다고 언급되었으나, 냉장고(refrigerator)는 언급되지 않았습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t9-s2-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "We appreciate your purchase from Drapes-A-Lot!\n\nFor issues regarding payment, exchanges, and returns, please contact your nearest Drapes-A-Lot retailer. For help with damaged or missing parts, instructions for do-it-yourself installation, or questions about your product, call Drapes-A-Lot customer support at (713) 555-0101. Representatives are available to answer questions Monday through Friday, 9:00 A.M. to 5:00 P.M. Before calling, please have the following information ready: your name and phone number, the purchase order number, and where you made your purchase.",
                    translation: "Drapes-A-Lot에서 제품을 구매해 주셔서 감사합니다!\n\n결제, 교환 및 반품과 관련된 문제는 가까운 Drapes-A-Lot 매장에 문의하십시오. 파손되거나 누락된 부품에 대한 도움, 자가 설치 안내 또는 제품에 관한 문의 사항은 Drapes-A-Lot 고객 지원부(713-555-0101)로 전화해 주십시오. 상담원은 월요일부터 금요일, 오전 9시부터 오후 5시까지 문의 사항에 답변해 드립니다. 전화하시기 전에 성함과 전화번호, 구매 주문 번호, 구매 장소 등의 정보를 미리 준비해 주시기 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q149",
                    questionNo: 149,
                    text: "What does the notice suggest about Drapes-A-Lot?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It does not offer installation service.",
                        "B": "It does not accept returns.",
                        "C": "It provides online customer support.",
                        "D": "It recently opened retail stores."
                    },
                    correctAnswer: "A",
                    translation: "Drapes-A-Lot에 대해 이 공지문에서 알 수 있는 점은 무엇입니까?",
                    explanation: "자가 설치 안내(instructions for do-it-yourself installation)를 제공한다는 내용으로 보아 별도의 설치 서비스는 제공하지 않음을 유추할 수 있습니다."
                },
                {
                    id: "v3-p7-t9-q150",
                    questionNo: 150,
                    text: "According to the notice, what information is necessary when contacting customer support?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The serial number of the product",
                        "B": "The store location where the product was bought",
                        "C": "The credit card number used to make the purchase",
                        "D": "The e-mail address of the customer"
                    },
                    correctAnswer: "B",
                    translation: "공지문에 따르면 고객 지원부에 연락할 때 필요한 정보는 무엇입니까?",
                    explanation: "전화하기 전에 준비할 정보로 '구매 장소(where you made your purchase)'가 언급되었습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t9-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT_MESSAGE",
                    content: "Keith Odom (10:15 A.M.) We're almost finished trimming the bushes and trees around the lobby entrance. We'll trim everything in the back garden after lunch. While we're in the front, though, we're going to weed the flower beds.\nRebecca Truesdell (10:18 A.M.) I thought they were cleaned up earlier this week.\nKeith Odom (10:20 A.M.) Remember it rained. We couldn't get to the weeding on Wednesday.\nRebecca Truesdell (10:25 A.M.) That's right. Yes, please finish out front first. We have two large parties scheduled for tomorrow, so we want the hotel entrance and grounds to look good.\nKeith Odom (10:27 A.M.) Okay. This should not take more than an hour or so.\nRebecca Truesdell (10:28 A.M.) Let me know when you're finished in the back garden. We're expecting the delivery of some new patio furniture later this afternoon, and that will be set up as soon as it arrives.",
                    translation: "Keith Odom (오전 10:15) 로비 입구 주변의 관목과 나무 가지치기가 거의 끝났습니다. 점심 식사 후에 뒤뜰 정원을 모두 정리할 예정입니다. 전면 구역에 있는 동안 화단의 잡초도 뽑겠습니다.\nRebecca Truesdell (오전 10:18) 이번 주 초에 다 정리된 줄 알았는데요.\nKeith Odom (오전 10:20) 비가 왔던 거 기억하시죠. 수요일에는 제초 작업을 할 수 없었습니다.\nRebecca Truesdell (오전 10:25) 맞아요. 네, 일단 앞쪽부터 마무리해 주세요. 내일 큰 파티가 두 건 예정되어 있어서 호텔 입구와 주변 부지가 깨끗해 보였으면 좋겠거든요.\nKeith Odom (오전 10:27) 알겠습니다. 한 시간 정도면 될 것 같네요.\nRebecca Truesdell (오전 10:28) 뒤뜰 작업이 끝나면 알려주세요. 오늘 오후 늦게 새로운 테라스용 가구들이 배달될 예정인데, 도착하는 대로 바로 배치할 거거든요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q151",
                    questionNo: 151,
                    text: "Who most likely is Mr. Odom?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A hotel manager",
                        "B": "An event planner",
                        "C": "A building inspector",
                        "D": "A groundskeeper"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Odom은 누구일 가능성이 가장 높습니까?",
                    explanation: "가지치기(trimming bushes and trees), 제초 작업(weeding) 등을 수행하고 있으므로 정원 관리사(groundskeeper)임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t9-q152",
                    questionNo: 152,
                    text: "At 10:25 A.M., what does Ms. Truesdell most likely mean when she writes, \"That's right\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She requested that some trees be trimmed.",
                        "B": "She confirmed the guest reservations.",
                        "C": "She remembered why a job was not done.",
                        "D": "She understood why some furniture had not been delivered."
                    },
                    correctAnswer: "C",
                    translation: "오전 10:25에 Ms. Truesdell이 \"That's right\"이라고 쓴 의도는 무엇입니까?",
                    explanation: "Keith가 수요일에 비가 와서 잡초를 뽑지 못했다고 설명하자, 그 이유를 기억해내며 동의한 것입니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v3-p7-t9-s4-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: "SAFT'S BOOKSHOP\nMoving Sale\n\nFrom 23 September through 30 September, Saft's Bookshop at 312 High Street will be selling all its store fixtures, furniture, and equipment. This includes the beautiful antique bookshelves from our main storefront window. Don't miss this great opportunity to purchase gently used items to furnish your own store. We are offering items at amazing prices and are even willing to negotiate.\n\nSaft's Bookshop will reopen its doors at 4900 Bundar Street in February. It will be significantly more spacious and feature a distinct interior design. Please be sure to visit us at our new location.",
                    translation: "SAFT'S BOOKSHOP\n이전 세일\n\n9월 23일부터 9월 30일까지 High Street 312번지에 위치한 Saft's Bookshop은 모든 매장 집기, 가구 및 장비를 판매합니다. 여기에는 메인 쇼윈도에 있는 아름다운 앤티크 책장도 포함됩니다. 여러분의 매장을 꾸밀 수 있는 중고 물품들을 구매할 수 있는 이 좋은 기회를 놓치지 마세요. 놀라운 가격에 물건을 내놓았으며 가격 협상도 가능합니다.\n\nSaft's Bookshop은 2월에 Bundar Street 4900번지에서 다시 문을 엽니다. 새 매장은 훨씬 더 넓어지고 독특한 인테리어 디자인을 선보일 예정입니다. 새로운 위치에 있는 저희 매장을 꼭 방문해 주시기 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q153",
                    questionNo: 153,
                    text: "What is indicated about antique bookshelves?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They will be moved to a location on Bundar Street.",
                        "B": "They have been on display in a shop window.",
                        "C": "They are in poor condition.",
                        "D": "They were built by a famous designer."
                    },
                    correctAnswer: "B",
                    translation: "앤티크 책장에 대해 명시된 사실은 무엇입니까?",
                    explanation: "지문에서 '메인 쇼윈도(main storefront window)'에 있었다고 언급했습니다."
                },
                {
                    id: "v3-p7-t9-q154",
                    questionNo: 154,
                    text: "What is suggested about the new Saft's Bookshop?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It will be on the same street as the current location.",
                        "B": "It will be open seven days a week.",
                        "C": "It will be larger than the old shop.",
                        "D": "It will retain most of its staff."
                    },
                    correctAnswer: "C",
                    translation: "새로운 Saft's Bookshop에 대해 알 수 있는 점은 무엇입니까?",
                    explanation: "새 매장은 '훨씬 더 넓어질 것(significantly more spacious)'이라고 언급되었습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v3-p7-t9-s5-p1",
                    contextType: "P2_OFFI",
                    docType: "NEWSLETTER",
                    content: "Birch Hill Center for the Arts Committee\nSupporters' Newsletter\n\nThe committee has been hard at work this year! We are close to reaching our goal of building a community arts center that will serve all the people of our lovely town of Birch Hill. Here is what we have accomplished so far.\n\n• In January, we completed a community survey about what activities to offer in the new Birch Hill Center for the Arts.\n• In February, we completed a feasibility report and narrowed the potential building sites to three possibilities.\n• In April, we submitted our project budget proposal to the city council for approval.\n• In May, we interviewed several candidates for the managing director position.\n\nDuring the next two months, we will:\n• Select our new managing director\n• Choose the location for the center\n• Complete the construction blueprints\n• Finalize the construction budget and timeline\n• Draft our events calendar\n\nAnd this fall, we should begin construction on the Birch Hill Center for the Arts!\nAs always, we welcome your input on the process. Please send questions or comments to our committee at project@bhca.org. If you are interested in serving on the committee, please call 952-555-0128.",
                    translation: "Birch Hill 예술 센터 위원회\n서포터즈 뉴스레터\n\n올해 위원회는 열심히 일하고 있습니다! 아름다운 Birch Hill 마을의 모든 주민을 위한 커뮤니티 예술 센터 건립이라는 목표 달성에 가까워지고 있습니다. 지금까지의 성과를 알려드립니다.\n\n• 1월: 새로운 Birch Hill 예술 센터에서 제공할 활동들에 대한 지역 사회 설문조사를 완료했습니다.\n• 2월: 타당성 보고서를 완료하고 잠재적 건립 부지를 3곳으로 압축했습니다.\n• 4월: 시의회 승인을 위해 프로젝트 예산 제안서를 제출했습니다.\n• 5월: 관리 이사직 후보자 여러 명을 인터뷰했습니다.\n\n향후 두 달 동안 할 일:\n• 새로운 관리 이사 선임\n• 센터 건립 위치 선정\n• 건설 청사진 완성\n• 건설 예산 및 일정 확정\n• 이벤트 캘린더 초안 작성\n\n그리고 이번 가을에는 Birch Hill 예술 센터 착공에 들어갈 예정입니다!\n항상 여러분의 의견을 기다립니다. 질문이나 의견은 project@bhca.org로 보내주세요. 위원회에서 봉사하고 싶으신 분은 952-555-0128로 전화 주시기 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q155",
                    questionNo: 155,
                    text: "When did the committee send a proposed budget to the city?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "In January",
                        "B": "In February",
                        "C": "In April",
                        "D": "In May"
                    },
                    correctAnswer: "C",
                    translation: "위원회는 언제 시에 예산안을 보냈습니까?",
                    explanation: "지문에서 4월(In April)에 예산 제안서를 시의회에 제출했다고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t9-q156",
                    questionNo: 156,
                    text: "Where did the committee gather information about what activities to offer?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "From a survey",
                        "B": "From a report",
                        "C": "From a proposal",
                        "D": "From personal interviews"
                    },
                    correctAnswer: "A",
                    translation: "위원회는 제공할 활동에 대한 정보를 어디에서 수집했습니까?",
                    explanation: "1월에 지역 사회 설문조사(community survey)를 완료했다고 언급되었습니다."
                },
                {
                    id: "v3-p7-t9-q157",
                    questionNo: 157,
                    text: "What is someone who wants to join the committee directed to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Complete a questionnaire",
                        "B": "Send an e-mail",
                        "C": "Visit a Web site",
                        "D": "Make a phone call"
                    },
                    correctAnswer: "D",
                    translation: "위원회에 참여하고 싶은 사람은 무엇을 하라고 안내받았습니까?",
                    explanation: "서빙하고 싶다면 전화해 달라(please call 952-555-0128)고 기재되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v3-p7-t9-s6-p1",
                    contextType: "P2_OFFI",
                    docType: "ADVERTISEMENT",
                    content: "Patton Advertising Is Hiring Now!\n\nWe are seeking motivated, enthusiastic individuals to join us in our design, finance, and IT departments. Previous experience in the advertising sector is useful but not required.\n\nOur Work\nHere at Patton, we've designed advertisements and created marketing strategies for a wide range of clients. This work has included designing logos and Web sites, as well as creating ads for local radio and a national billboard. Under the leadership of CEO Amie Adesina, we're looking to expand in new directions and tackle even more exciting projects.\n\nSome Employee Comments\n• \"In my first six months as a designer at Patton, I've already had the chance to work with several clients and even lead my own team. The work isn't always easy, but if you enjoy a fast-paced, challenging environment, you'll really thrive here.\" Thomas Kuti\n• \"I've been working as a legal consultant at Patton for just under a year now, and I've enjoyed every moment. There's a fantastic working culture, with generous employee benefits including a gym membership and paid time off for volunteering. It's the best company I've ever worked for.\" Sabina Hussain\n\nVisit our Web site www.pattonads.com/careers to see vacancies and apply for jobs.",
                    translation: "Patton Advertising에서 지금 채용 중입니다!\n\n저희 디자인, 재무, IT 부서에서 함께 일할 의욕 넘치고 열정적인 인재를 찾고 있습니다. 광고계 경력은 우대사항이나 필수 요건은 아닙니다.\n\n저희가 하는 일\nPatton은 다양한 고객을 위해 광고를 디자인하고 마케팅 전략을 수립해 왔습니다. 로고 및 웹사이트 디자인부터 지역 라디오 및 전국 빌보드 광고 제작까지 폭넓은 업무를 수행합니다. CEO Amie Adesina의 리더십 아래, 저희는 새로운 방향으로 확장하고 더욱 흥미로운 프로젝트에 도전하고자 합니다.\n\n직원들의 한마디\n• \"Patton에서 디자이너로 일한 지 6개월 만에 벌써 여러 고객과 협업하고 제 팀을 이끌 기회를 얻었습니다. 업무가 항상 쉽지는 않지만, 빠르고 도전적인 환경을 즐긴다면 이곳에서 큰 보람을 느끼실 겁니다.\" Thomas Kuti\n• \"Patton에서 법률 컨설턴트로 일한 지 1년이 좀 안 되었는데, 모든 순간이 즐겁습니다. 헬스장 멤버십과 자원봉사를 위한 유급 휴가 등 관대한 직원 복지와 함께 환상적인 업무 문화가 조성되어 있습니다. 제가 다녀본 회사 중 단연 최고입니다.\" Sabina Hussain\n\n저희 웹사이트 www.pattonads.com/careers를 방문하여 채용 공고를 확인하고 지원하십시오."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q158",
                    questionNo: 158,
                    text: "The word \"sector\" in paragraph 1, line 2, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "portion",
                        "B": "industry",
                        "C": "region",
                        "D": "operation"
                    },
                    correctAnswer: "B",
                    translation: "첫 번째 단락 두 번째 줄의 'sector'와 의미가 가장 가까운 단어는?",
                    explanation: "광고계/광고 산업(advertising sector)은 광고업계(advertising industry)를 의미합니다."
                },
                {
                    id: "v3-p7-t9-q159",
                    questionNo: 159,
                    text: "What is Mr. Kuti's job?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Designer",
                        "B": "Lawyer",
                        "C": "IT technician",
                        "D": "CEO"
                    },
                    correctAnswer: "A",
                    translation: "Mr. Kuti의 직업은 무엇입니까?",
                    explanation: "Thomas Kuti는 자신을 '디자이너로서(as a designer)'라고 소개했습니다."
                },
                {
                    id: "v3-p7-t9-q160",
                    questionNo: 160,
                    text: "What is true about both Mr. Kuti and Ms. Hussain?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They enjoy volunteering in their spare time.",
                        "B": "They think everyone would enjoy working at Patton.",
                        "C": "They are team leaders in their departments.",
                        "D": "They have worked at Patton for less than a year."
                    },
                    correctAnswer: "D",
                    translation: "Mr. Kuti와 Ms. Hussain에 대해 공통적으로 사실인 것은 무엇입니까?",
                    explanation: "Kuti는 '첫 6개월(In my first six months)', Hussain은 '1년 미만(just under a year)'이라고 했으므로 두 사람 모두 근무한 지 1년이 되지 않았습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t9-s7-p1",
                    contextType: "P2_OFFI",
                    docType: "LETTER",
                    content: "31 July\n\nDr. Shamalie Mowatt\nCornwall University Hospital\n22-28 Victoria Avenue\nKingston 6\n\nDear Dr. Mowatt,\n\nIt is a pleasure to recommend Mr. Renaldo Silva for your nursing programme. — [1] —. Mr. Silva has served as an assistant to our two on-site registered nurses at Summer Camp West, four days a week for the past two summers. The young campers have grown quite fond of Mr. Silva. They appreciate his kind but dedicated approach to wellness. — [2] —. He is patient and nurturing, and I am confident that he will succeed in a nursing programme such as yours.\n\nAs a nurse myself for more than three decades, I have worked with young professionals in various settings, including large hospitals, small clinics, schools, and, for the past several years, exclusively at Summer Camp West. — [3] —. I therefore strongly believe that Mr. Silva will be an active and successful programme participant.\n\n— [4] —. If you have any questions about Mr. Silva, please feel free to call me at (876) 555-0140.\n\nYours sincerely,\nBenita Oliveira",
                    translation: "7월 31일\n\n성함 제위 Shamalie Mowatt 박사님\nCornwall 대학 병원\n22-28 Victoria Avenue\nKingston 6\n\nMowatt 박사님께:\n\n귀하의 간호 과정에 Renaldo Silva 씨를 추천하게 되어 기쁘게 생각합니다. — [1] —. Silva 씨는 지난 2번의 여름 동안 일주일에 4일씩 Summer Camp West에서 저희 측 공인 간호사 두 분의 보조로 근무했습니다. 어린 캠프 참가자들은 Silva 씨를 매우 좋아하게 되었습니다. 그들은 건강에 대한 그의 친절하면서도 전념하는 태도를 높이 평가합니다. — [2] —. 그는 인내심이 강하고 보살핌이 지극하며, 귀하의 간호 과정과 같은 프로그램에서 잘 해내리라 확신합니다.\n\n30년 이상 간호사로 일해 온 저로서, 대형 병원, 소규모 클리닉, 학교, 그리고 지난 몇 년간은 오로지 Summer Camp West 등 다양한 환경에서 젊은 전문가들과 함께 일해 왔습니다. — [3] —. 따라서 저는 Silva 씨가 능동적이고 성공적인 프로그램 참가자가 될 것임을 강력히 믿습니다.\n\n— [4] —. Silva 씨에 대해 궁금한 점이 있으시면 언제든지 (876) 555-0140으로 전화 주십시오.\n\n진심을 담아,\nBenita Oliveira 드림"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q161",
                    questionNo: 161,
                    text: "Who most likely is Dr. Mowatt?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "The owner of a summer camp",
                        "B": "The director of a training program",
                        "C": "A candidate for a health-care position",
                        "D": "A professor of human biology"
                    },
                    correctAnswer: "B",
                    translation: "Dr. Mowatt는 누구일 가능성이 가장 높습니까?",
                    explanation: "Silva 씨를 '간호 과정(nursing programme)'에 추천한다는 서신의 수신인이므로 교육 프로그램 책임자(director of a training program)임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t9-q162",
                    questionNo: 162,
                    text: "What is indicated about Ms. Oliveira?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Her child attends Summer Camp West.",
                        "B": "She has been employed in health care for over 30 years.",
                        "C": "She works at Summer Camp West four days a week.",
                        "D": "She supervises nursing staff at a hospital."
                    },
                    correctAnswer: "B",
                    translation: "Ms. Oliveira에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "본인을 '30년 이상 간호사로 일해 온 사람(nurse myself for more than three decades)'이라고 소개했습니다."
                },
                {
                    id: "v3-p7-t9-q163",
                    questionNo: 163,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"As such, I can attest to Mr. Silva's professionalism and his compassion for those in his care.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"따라서, 저는 Silva 씨의 전문성과 그가 돌보는 이들에 대한 동정심을 증명할 수 있습니다.\"",
                    explanation: "Silva 씨의 친절하고 전념하는 태도를 언급한 뒤, 그것을 증명(attest)한다는 내용이 이어지는 [2]가 가장 자연스럽습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t9-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "DOCUMENT",
                    content: "Sky-High Roofing\n\nWorkers doing construction or repair work on roofs face multiple potential hazards. Ladders, skylights, and physical exposure to the natural elements involve risks. Stay safe by using commonsense practices. Follow these guidelines.\n\nDress for safety.\n• Wear long-sleeved shirts, even in warm weather, and keep your wrist cuffs buttoned\n• Wear long pants without cuffs, as they can snag on roofing material and catch debris\n• Wear work boots that cover the ankles, and replace boots when the soles show excessive wear\n\nUse personal protective equipment.\n• Wear gloves that cover the wrists, making sure there is no gap between the top of the gloves and the bottom of the sleeve cuffs\n• Use protective eyewear\n\nBegin the day right.\n• Review the work plan with all members of the team\n• Check the condition of ladders and all safety equipment\n\nI confirm that I have reviewed and understood these guidelines.\nSignature: ____________ Date: ____________",
                    translation: "Sky-High Roofing\n\n지붕 건설이나 수리 작업을 하는 근로자들은 수많은 잠재적 위험에 노출됩니다. 사다리, 천창, 자연 요소에 대한 신체적 노출은 위험을 수반합니다. 상식적인 관행을 실천하여 안전을 지키십시오. 다음 가이드라인을 따르십시오.\n\n안전을 위한 복장\n• 따뜻한 날씨에도 긴소매 셔츠를 입고 손목 커프를 단추로 잠그십시오.\n• 지붕 자재에 걸리거나 파편이 낄 수 있으므로 커프가 없는 긴 바지를 입으십시오.\n• 발목을 덮는 작업화를 신으시고, 밑창이 심하게 마모되면 교체하십시오.\n\n개인 보호 장비 사용\n• 손목을 덮는 장갑을 착용하되, 장갑 윗부분과 소매 커프 밑부분 사이에 틈이 없도록 하십시오.\n• 보호 안경을 착용하십시오.\n\n올바른 하루의 시작\n• 모든 팀원과 함께 작업 계획을 검토하십시오.\n• 사다리와 모든 안전 장비의 상태를 점검하십시오.\n\n본인은 이 가이드라인을 검토하고 이해했음을 확인합니다.\n서명: ____________ 날짜: ____________"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q164",
                    questionNo: 164,
                    text: "For whom is the document most likely intended?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Ladder manufacturers",
                        "B": "Clothing designers",
                        "C": "Home inspectors",
                        "D": "Roof installers"
                    },
                    correctAnswer: "D",
                    translation: "이 문서는 누구를 대상으로 합니까?",
                    explanation: "지붕 수리나 건설 작업을 수행하는 근로자들을 위한 지침이므로 지붕 설치업자(Roof installers)가 정답입니다."
                },
                {
                    id: "v3-p7-t9-q165",
                    questionNo: 165,
                    text: "The word \"practices\" in paragraph 1, line 3, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "regular actions",
                        "B": "physical exercises",
                        "C": "professional businesses",
                        "D": "performance rehearsals"
                    },
                    correctAnswer: "A",
                    translation: "첫 번째 단락 세 번째 줄의 'practices'와 의미가 가장 가까운 것은?",
                    explanation: "상식적인 관행(commonsense practices)은 통상적인 행동 방식(regular actions)을 의미합니다."
                },
                {
                    id: "v3-p7-t9-q166",
                    questionNo: 166,
                    text: "What is indicated in the document?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Sky-High Roofing specializes in solar panel installation.",
                        "B": "Homeowners are responsible for marking hazardous areas.",
                        "C": "Clothing that covers the arms and the legs is essential.",
                        "D": "Roofers must attend a company workshop."
                    },
                    correctAnswer: "C",
                    translation: "이 문서에 명시된 사실은 무엇입니까?",
                    explanation: "긴소매 셔츠와 긴 바지를 입으라는 복장 지침은 팔과 다리를 덮는 옷이 필수적임을 의미합니다."
                },
                {
                    id: "v3-p7-t9-q167",
                    questionNo: 167,
                    text: "What is NOT mentioned in the document as a safety measure?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Using safety glasses",
                        "B": "Using earmuffs",
                        "C": "Wearing sturdy footwear",
                        "D": "Performing equipment checks"
                    },
                    correctAnswer: "B",
                    translation: "안전 조치로 문서에 언급되지 않은 것은 무엇입니까?",
                    explanation: "보호 안경(safety glasses/eyewear), 작업화(sturdy footwear/work boots), 장비 점검(equipment checks)은 언급되었으나, 귀마개(earmuffs)는 언급되지 않았습니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t9-s9-p1",
                    contextType: "P2_OFFI",
                    docType: "ARTICLE",
                    content: "Public Works Challenge\n\nCARBERRY (April 15)—From its inception, the Carberry Public Works Building has met with little appreciation from the public. When architects unveiled the blueprints for the structure, longtime residents argued that its bright colors and angular shapes did not blend well with Carberry’s distinctive redbrick buildings. Local concerns even sparked the creation of a social media group, whose members urged residents to voice their opinions at town council meetings and in other public forums. — [1] —.\n\nIn the end, a more conservative version of the original building design was drafted and the grand opening was planned for April 28. — [2] —. However, the owners of nearby buildings started to report drainage issues caused by significant water runoff. “When the property was an open field with grass and trees, excess rainwater was quickly absorbed into the ground,” explains Trudy Molina, owner of the Axios Office Building. “Now water pools up and floods adjacent parking areas during heavy rains.” — [3] —.\n\nAccording to town manager Bert Montiel, the unfortunate result of the building project was unforeseen, and construction engineers are working swiftly to correct the issue before the Public Works Building opens. — [4] —. A team has begun the installation of additional gutters and connecting drains to divert the water to the neighborhood’s underground sewer system. The work should be completed in time to celebrate the building’s opening in late May.",
                    translation: "공공사업국의 도전\n\nCARBERRY (4월 15일)—초기 단계부터 Carberry 공공사업국 건물은 일반 대중으로부터 거의 환영받지 못했습니다. 건축가들이 건물의 설계도를 공개했을 때, 오랫동안 거주해 온 주민들은 건물의 밝은 색상과 각진 모양이 Carberry 특유의 붉은 벽돌 건물들과 잘 어우러지지 않는다고 주장했습니다. 지역 사회의 우려는 심지어 소셜 미디어 그룹 결성으로 이어졌고, 회원들은 주민들에게 시의회 회의나 다른 공청회에서 의견을 표명할 것을 촉구했습니다. — [1] —.\n\n결국 원래의 건물 디자인보다 더 보수적인 버전이 설계되었고 4월 28일에 성대한 개관식이 계획되었습니다. — [2] —. 그러나 인근 건물 소유주들이 상당한 규모의 빗물 유출로 인한 배수 문제를 보고하기 시작했습니다. Axios 오피스 빌딩의 소유주인 Trudy Molina 씨는 \"이 부지가 잔디와 나무가 있는 개방된 들판이었을 때는 초과되는 빗물이 땅속으로 빠르게 흡수되었습니다. 하지만 지금은 폭우 시 물이 고여 인접한 주차장이 침수됩니다\"라고 설명합니다. — [3] —.\n\nBert Montiel 시 관리자에 따르면, 이러한 불행한 결과는 예측하지 못한 일이었으며, 건설 엔지니어들은 공공사업국 건물이 문을 열기 전에 문제를 해결하기 위해 신속하게 작업하고 있습니다. — [4] —. 한 팀이 빗물을 인근 지하 하수 시스템으로 돌리기 위해 추가 배수관과 연결 배수구 설치 작업을 시작했습니다. 작업은 5월 말 예정된 건물 개관 축하 행사에 맞춰 완공될 예정입니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q168",
                    questionNo: 168,
                    text: "What was the subject of initial complaints about the Carberry Public Works Building?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Its size",
                        "B": "Its design",
                        "C": "Its location",
                        "D": "Its purpose"
                    },
                    correctAnswer: "B",
                    translation: "Carberry 공공사업국 건물에 대한 초기 불만의 주제는 무엇이었습니까?",
                    explanation: "주민들이 건물의 색상(bright colors)과 모양(angular shapes)이 기존과 어울리지 않는다고 했으므로 디자인(design)에 대한 불만이었습니다."
                },
                {
                    id: "v3-p7-t9-q169",
                    questionNo: 169,
                    text: "What is suggested about the town of Carberry?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It is postponing an event.",
                        "B": "It is seeking a new town manager.",
                        "C": "It has multiple projects for next year.",
                        "D": "It has fewer residents than nearby towns."
                    },
                    correctAnswer: "A",
                    translation: "Carberry 마을에 대해 짐작할 수 있는 것은 무엇입니까?",
                    explanation: "원래 4월 28일이었던 개관 일정이 5월 말(late May)로 늦춰졌으므로 행사를 연기하고 있음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t9-q170",
                    questionNo: 170,
                    text: "How will the town address Ms. Molina's concerns?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By improving the signage at the Axios Office Building",
                        "B": "By reimbursing her for a utility bill",
                        "C": "By directing water away from an area",
                        "D": "By expanding a building's parking area"
                    },
                    correctAnswer: "C",
                    translation: "마을은 Ms. Molina의 우려를 어떻게 해결할 예정입니까?",
                    explanation: "배수관과 배수구를 설치하여 물을 다른 곳으로 돌릴(divert the water to the... sewer system) 예정입니다."
                },
                {
                    id: "v3-p7-t9-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Dozens of people did just that.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"수십 명의 사람들이 바로 그렇게 했습니다.\"",
                    explanation: "앞 문장에서 주민들에게 의견을 표명할 것을 촉구(urged residents to voice their opinions)했고, 수십 명의 사람들이 그 촉구에 따라 행동했다는 내용이 연결되는 [1]이 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t9-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t9-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT_MESSAGE",
                    content: "Reese, Tamara [1:30 P.M.] Thank you for contacting Green City Tours. How may I assist you?\nChambers, Curtis [1:32 P.M.] Hello. I am writing about Yorke Corporation's upcoming trip to Vancouver. I believe that Green City Tours has arranged for all meals to be included for the participants. Is that correct?\nReese, Tamara [1:33 P.M.] No, the terms of the contract specifically state that \"Participants will be hosted to both a welcome reception and a farewell dinner. All other meals are to be covered at the participants' own expense during the program.\" Please let me know if there are any more questions you have about this trip.\nChambers, Curtis [1:35 P.M.] That's disappointing! Our previous employee trips have included all meals. Could I be connected with a supervisor? I'm quite certain that this option should have been included in the contract.\nDiaz, Marta [1:37 P.M.] Good afternoon, Mr. Chambers. I apologize for any misunderstanding concerning Yorke Corporation's contract terms with Green City Tours. The contract was created in accordance with the requests of Franklin Wang, your company's CFO. It was his stipulation that intervening meals not be included. We could make recommendations for some other dining options.\nChambers, Curtis [1:40 P.M.] That's OK. Thank you both for your assistance. I'm going to consult with Mr. Wang about the situation. I may be in touch with you again soon.",
                    translation: "Reese, Tamara [오후 1:30] Green City Tours에 연락 주셔서 감사합니다. 어떻게 도와드릴까요?\nChambers, Curtis [오후 1:32] 안녕하세요. 곧 있을 Yorke Corporation의 밴쿠버 여행에 대해 문의드립니다. 참가자들을 위해 모든 식사가 포함되도록 Green City Tours에서 조율한 것으로 알고 있는데, 맞나요?\nReese, Tamara [오후 1:33] 아니요, 계약 조건에 명확히 명시되어 있습니다. \"참가자들에게는 환영 리셉션과 환송 만찬이 제공됩니다. 프로그램 기간 중의 나머지 모든 식사는 참가자 본인이 부담해야 합니다.\" 여행에 대해 더 궁금한 점이 있으시면 말씀해 주세요.\nChambers, Curtis [오후 1:35] 실망스럽네요! 저희의 이전 직원 여행에는 모든 식사가 포함되어 있었거든요. 관리자와 통화할 수 있을까요? 이 옵션이 계약에 포함되었어야 한다고 확신합니다.\nDiaz, Marta [오전 1:37] 안녕하세요, Mr. Chambers. Yorke Corporation과 Green City Tours 간의 계약 조건에 관한 오해에 대해 사과드립니다. 본 계약은 귀사의 CFO인 Franklin Wang 씨의 요청에 따라 작성되었습니다. 식사 사이에 있는 식사들을 포함하지 않는 것이 그분의 조건이었습니다. 다른 식당 옵션들을 추천해 드릴 수는 있습니다.\nChambers, Curtis [오후 1:40] 괜찮습니다. 도움 주셔서 감사합니다. 이 상황에 대해 Wang 씨와 상의해 보겠습니다. 조만간 다시 연락드릴 수도 있습니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t9-q172",
                    questionNo: 172,
                    text: "Why does Mr. Chambers contact Green City Tours?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To plan a trip for new employees",
                        "B": "To question a credit card charge",
                        "C": "To inquire about the details of a trip",
                        "D": "To provide emergency contact information"
                    },
                    correctAnswer: "C",
                    translation: "Mr. Chambers가 Green City Tours에 연락한 이유는 무엇입니까?",
                    explanation: "식사가 모두 포함되어 있는지 확인하기 위해 여행 세부 사항에 대해 문의(inquire about the details of a trip)하고 있습니다."
                },
                {
                    id: "v3-p7-t9-q173",
                    questionNo: 173,
                    text: "At 1:35 P.M., what does Mr. Chambers most likely mean when he writes, “That’s disappointing!”?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He does not agree with the restaurant recommendations.",
                        "B": "He is frustrated with being unable to attend the trip.",
                        "C": "He does not think Ms. Reese can answer his question.",
                        "D": "He does not like some contract terms."
                    },
                    correctAnswer: "D",
                    translation: "오후 1:35에 Mr. Chambers가 “That’s disappointing!”이라고 쓴 의도는 무엇입니까?",
                    explanation: "식사가 모두 포함되지 않은 계약 조건(contract terms)이 마음에 들지 않아 실망스럽다고 표현한 것입니다."
                },
                {
                    id: "v3-p7-t9-q174",
                    questionNo: 174,
                    text: "What most likely is Ms. Diaz’ job?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Customer service manager",
                        "B": "Vancouver city administrator",
                        "C": "Travel blog writer",
                        "D": "Hotel concierge"
                    },
                    correctAnswer: "A",
                    translation: "Ms. Diaz의 직업으로 가장 적절한 것은 무엇입니까?",
                    explanation: "Curtis가 관리자(supervisor) 연결을 요청했을 때 응답한 사람이므로 고객 서비스 매니저(Customer service manager)일 가능성이 가장 높습니다."
                },
                {
                    id: "v3-p7-t9-q175",
                    questionNo: 175,
                    text: "What will Mr. Chambers do next?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Prepare a welcome speech",
                        "B": "Research a historical site",
                        "C": "Speak with a colleague",
                        "D": "Sample some food items"
                    },
                    correctAnswer: "C",
                    translation: "Mr. Chambers가 다음에 할 일은 무엇일 가능성이 가장 높습니까?",
                    explanation: "CFO인 Mr. Wang과 상의하겠다(consult with Mr. Wang)고 했으므로 동료(colleague)와 이야기할 것임을 알 수 있습니다."
                }
            ]
        }
    ]
};
