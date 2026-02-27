import { Part7Test } from './types';

export const test3Data: Part7Test = {
    testId: 3,
    vol: 3,
    title: "Test 3",
    sets: [
        // Questions 147-148: Text Message Chain
        {
            id: "v3-p7-t3-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t3-s1-p1",
                    contextType: "P7_CONV",
                    docType: "TEXT_MESSAGE",
                    content: `Jun Kambayashi [10:12 A.M.] Rachel, it looks as if Mr. Tanaka's flight will be arriving 30 minutes earlier this afternoon. I'm on my way to pick him up.
Rachel Newman [10:13 A.M.] The staff are excited that he finally is going to be working with us here. Do you think the two of you have time to stop here in the office before the end of the workday?
Jun Kambayashi [10:14 A.M.] Probably. And I agree; Mr. Tanaka has done great work at our Chiba branch.
Rachel Newman [10:15 A.M.] So I've always heard. It would be nice for him to get a quick tour of the lab and meet some members of the team before our welcome dinner.
Jun Kambayashi [10:16 A.M.] Sounds good. Since flight schedules can be unpredictable, I'll keep you posted as I arrive at the airport.
Rachel Newman [10:17 A.M.] Perfect. See you later.`,
                    translation: `준 캄바야시 [오전 10시 12분] 레이첼, 다나카 씨가 탄 항공편이 오늘 오후에 30분 일찍 도착할 것 같아요. 제가 모시러 가는 길입니다.
레이첼 뉴먼 [오전 10시 13분] 그분이 마침내 저희와 함께 이곳에서 일하게 되어 직원들이 기뻐하고 있어요. 근무 시간이 끝나기 전에 두 분이 함께 사무실에 들를 시간이 있으세요?
준 캄바야시 [오전 10시 14분] 아마도요. 그리고 저도 그래요. 다나카 씨가 우리 회사 치바 지점에서 훌륭하게 임무를 수행했잖아요.
레이첼 뉴먼 [오전 10시 15분] 저도 항상 들어왔던 얘기에요. 다나카 씨가 환영 저녁 식사 전에 실험실을 빠르게 둘러보고 팀원들을 만날 수 있으면 좋을 것 같아요.
준 캄바야시 [오전 10시 16분] 그게 좋겠네요. 항공편 일정을 예측할 수 없으니 공항에 도착하면 알려드릴게요.
레이첼 뉴먼 [오전 10시 17분] 좋아요. 이따 봐요.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q147",
                    questionNo: 147,
                    text: "Who most likely is Mr. Tanaka?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A new laboratory owner",
                        "B": "An important client",
                        "C": "A transferred staff member",
                        "D": "An airline pilot"
                    },
                    correctAnswer: "C",
                    translation: "다나카 씨는 누구이겠는가?",
                    explanation: "뉴먼 씨가 오전 10시 13분 메시지에서 다나카 씨가 마침내 우리와 함께 일하게 되었다(he finally is going to be working with us here)고 했고, 캄바야시 씨가 10시 14분 메시지에서 다나카 씨가 회사의 치바 지점에서 훌륭하게 임무를 수행했다(Mr. Tanaka has done great work at our Chiba branch)고 했다. 따라서 다나카 씨가 다른 지점에서 전근 오는 직원이라고 추론할 수 있으므로, (C)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q148",
                    questionNo: 148,
                    text: "At 10:16 A.M., what does Mr. Kambayashi mean when he writes, \"Sounds good\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He is pleased with the dinner arrangements.",
                        "B": "He likes the idea of stopping by the office before dinner.",
                        "C": "He appreciates Mr. Tanaka's professional reputation.",
                        "D": "He is glad that team members have completed their work."
                    },
                    correctAnswer: "B",
                    translation: "오전 10시 16분에 캄바야시 씨가 \"그게 좋겠네요\"라고 쓸 때, 그 의도는 무엇인가?",
                    explanation: "뉴먼 씨가 오전 10시 15분 메시지에서 다나카 씨가 환영 저녁 식사 전에 실험실을 둘러보면 좋을 것 같다(It would be nice for him to get a quick tour of the lab ~ before our welcome dinner)는 제안을 했는데, 이에 대해 캄바야시 씨가 긍정의 의사를 밝힌 것이다. 따라서 (B)가 정답이다."
                }
            ]
        },
        // Questions 149-150: E-mail
        {
            id: "v3-p7-t3-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t3-s2-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    title: "E-Mail Message",
                    content: `From: jenkins@ourmarketfocus.au
To: hardesty@gallusmail.au
Date: 11 August
Subject: Workshop Notice

Dear Ms. Hardesty,
This is to share an important change concerning the 18 August, 4 P.M. Marketing Skills Workshop. Because many more attendees have signed up, we have changed the location of our event to
The Rill Inn; PERTH
Please acknowledge you are aware of the update. I would appreciate it if you could treat this request as urgent and reply as soon as convenient. Should you have any questions about participation, you can e-mail me.
Thank you,
Andrew Jenkins
Workshop Organizer`,
                    translation: `발신: jenkins@ourmarketfocus.au
수신: hardesty@gallusmail.au
날짜: 8월 11일
제목: 워크숍 공지

하디스티 씨께,
8월 18일 오후 4시에 있을 마케팅 기술 워크숍에 관해 중요한 변경 사항을 공유하고자 합니다. 많은 참석자들이 추가로 등록했기 때문에 행사 장소를 아래와 같이 변경했습니다.
더 릴 인; 퍼스
변경사항을 전달받았다고 알려주세요. 본 요청을 긴급으로 처리해 최대한 빨리 답신해 주시면 감사하겠습니다. 참가에 관한 질문이 있으시면 이메일을 보내주시면 됩니다.
감사합니다.
앤드류 젠킨스
워크숍 주최자`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q149",
                    questionNo: 149,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To cancel an event",
                        "B": "To announce a new venue",
                        "C": "To recruit new workshop presenters",
                        "D": "To request volunteers for a workshop"
                    },
                    correctAnswer: "B",
                    translation: "이메일을 쓴 목적은?",
                    explanation: "첫 번째 단락에서 중요한 변경사항을 공유하고자 한다(This is to share an important change)고 한 후, 변경된 행사 장소(we have changed the location of our event to The Rill Inn; PERTH)를 알려주었다. 따라서 (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q150",
                    questionNo: 150,
                    text: "What is Ms. Hardesty asked to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Share the notice with other attendees",
                        "B": "Choose a convenient time to meet",
                        "C": "Confirm receipt of the message",
                        "D": "Update her contact information"
                    },
                    correctAnswer: "C",
                    translation: "하디스티 씨는 무엇을 하라고 요청받았는가?",
                    explanation: "두 번째 단락에서 하디스티 씨에게 변경사항을 전달받았는지 알려달라(Please acknowledge you are aware of the update.)고 요청했으므로, (C)가 정답이다."
                }
            ]
        },
        // Questions 151-152: Advertisement
        {
            id: "v3-p7-t3-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t3-s3-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    title: "Advertisement",
                    content: `Virens
Come to Virens for the best televisions, phones, tablets, and more!
Grand Opening Celebration featuring comedian and DJ Declan Gibb from radio station KYX 93.8
Saturday, October 2, 10:00 A.M.-8:00 P.M.
234 Morris Avenue, next to Mike's Pizza
Complimentary snacks from Sarah's Bakery—home of Sarah's delicious pastries!
Bring this ad for $5 off a purchase of $10 or more.
Valid throughout October.`,
                    translation: `비렌스
최상의 텔레비전, 전화기, 태블릿 등을 찾는다면 비렌스로 오세요!
개점 기념 행사
라디오 방송국 KYX 93.8의 코미디언 겸 DJ 데클란 깁 특별 출연
10월 2일 토요일 오전 10시-오후 8시
모리스 가 234번지, 마이크 피자 옆
사라 베이커리(Sarah's Bakery)—사라의 맛있는 제과들이 모여있는 곳—에서 무료 간식 제공!
본 광고를 지참하시고 10달러 이상 구입하시면 5달러를 할인해 드립니다.
10월 내내 유효.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q151",
                    questionNo: 151,
                    text: "What type of business is Virens?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A pastry shop",
                        "B": "A radio station",
                        "C": "An electronics store",
                        "D": "A pizza restaurant"
                    },
                    correctAnswer: "C",
                    translation: "비렌스는 어떤 유형의 업체인가?",
                    explanation: "첫 번째 단락에서 최상의 텔레비전, 전화기, 태블릿 등을 찾는다면 비렌스로 오라(Come to Virens for the best televisions, phones, tablets, and more!)고 했으므로, 전자제품 매장임을 알 수 있다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q152",
                    questionNo: 152,
                    text: "According to the advertisement, what will happen on October 2 ?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Declan Gibb will perform at an event.",
                        "B": "Two businesses will move to new locations.",
                        "C": "A new product will be launched.",
                        "D": "A coupon will expire."
                    },
                    correctAnswer: "A",
                    translation: "광고에 따르면, 10월 2일에 어떤 일이 있을 것인가?",
                    explanation: "두 번째 단락에서 코미디언 겸 DJ인 데클란 깁이 특별 출연하는 개점 기념 행사가 10월 2일(Grand Opening Celebration featuring comedian and DJ Declan Gibb ... Saturday, October 2)임을 알 수 있다. 따라서 (A)가 정답이다."
                }
            ]
        },
        // Questions 153-154: Web Page
        {
            id: "v3-p7-t3-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v3-p7-t3-s4-p1",
                    contextType: "P4_MARK",
                    docType: "WEBPAGE",
                    title: "Office Nature",
                    content: `http://www.officenature.com

Want to boost the health and morale of your employees? Office Nature delivers a box filled with delicious food right to your break room.
We focus on the following.
• providing natural treats such as nuts, granola, and dried fruit
• working with local farmers to provide the freshest options
• reducing impact on the environment
• offering foods at reasonable prices
Just choose your selections and delivery day, and a fresh box of healthy food items will be brought automatically each week. First-time customers receive 10% off their order with code YUM.`,
                    translation: `http://www.officenature.com

직원들의 건강과 사기를 증진하고 싶습니까? 오피스 네이터(Office Nature)가 귀사의 휴게실까지 맛있는 음식이 가득 담긴 상자를 배달해 드립니다.
저희는 다음 사항에 중점을 두고 있습니다.
• 견과류, 그래놀라, 말린 과일 등 천연 간식 제공
• 지역 농부들과 협력하여 가장 신선한 제품 제공
• 환경에 미치는 영향 감소
• 적정한 가격에 식품 제공
원하는 제품과 배송 요일만 선택하시면 건강에 좋은 식품이 담긴 상자가 매주 자동으로 배송됩니다. 첫 주문 고객은 코드 YUM으로 10% 할인을 받으실 수 있습니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q153",
                    questionNo: 153,
                    text: "For whom is the Web page most likely intended?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Farmers",
                        "B": "Business owners",
                        "C": "Company employees",
                        "D": "Office Nature staff"
                    },
                    correctAnswer: "B",
                    translation: "웹페이지는 누구를 대상으로 하겠는가?",
                    explanation: "첫 번째 단락에서 직원들의 건강과 사기를 증진하고 싶은지(Want to boost the health and morale of your employees?)를 질문하며 관심을 끌고 있다. 따라서 광고 대상이 회사 경영주(Business owners)라고 추론할 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q154",
                    questionNo: 154,
                    text: "What is indicated about Office Nature?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It delivers healthy snacks.",
                        "B": "It offers weekly discounts.",
                        "C": "It makes its own baked goods.",
                        "D": "It grows its own fruit."
                    },
                    correctAnswer: "A",
                    translation: "오피스 네이처에 대해 알 수 있는 것은?",
                    explanation: "첫 번째 단락에서 오피스 네이처가 맛있는 음식이 가득 담긴 상자를 배달한다(Office Nature delivers a box filled with delicious food)고 했으며, 세 번째 단락에서도 제품과 배송 요일만 선택하면 건강에 좋은 음식이 담긴 신선한 상자(a fresh box of healthy food items)가 매주 자동으로 배송된다고 했다. 따라서 (A)가 정답이다."
                }
            ]
        },
        // Questions 155-157: Magazine Article
        {
            id: "v3-p7-t3-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v3-p7-t3-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    title: "Spotlight on Geiger Travel",
                    content: `Wanting to combine his passion for exploring places and cultures with his career as a corporate travel consultant, Marcus Geiger founded Geiger Travel Management (GTM). Now, ten years later, the company has offices in the United States, Canada, and several South American nations. It crafts itineraries and facilitates travel and accommodation arrangements for business professionals.
GTM also offers its clients secure, high-speed computers, conference call systems, and file management software through an agreement with Balefire Electronics, located in Mumbai. "We owe a lot of our success to Balefire," says Mr. Geiger, "because their services enable our clients to work efficiently wherever they are."
Mr. Geiger is optimistic that further growth is on the horizon for GTM. Two additional businesses, Apura Airways, based in Paramaribo, Suriname, and the restaurant chain Triggerfish, headquartered in Bridgetown, Barbados, have agreed to enter into strategic partnerships with GTM in August. And looking to launch operations in Europe, the company is currently in discussions with Krokushaus AG, a hospitality company with locations throughout Germany.
For more information about Geiger Travel Management, visit www.gtm.com.`,
                    translation: `가이거 트래블에 세간의 관심이 집중되다
장소와 문화를 탐험하고 싶은 자신의 열정과 기업 출장 상담가로서의 경력을 결합해 보고자 마커스 가이거는 가이거 트래블 매니지먼트(GTM)를 창립했다. 10년이 지난 지금 회사는 미국, 캐나다와 남아메리카 여러 국가에 지사를 두고 있다. 비즈니스 전문가들을 위해 일정을 짜고 교통편과 숙소 마련을 돕는다.
GTM은 뭄바이에 있는 베일파이어 일렉트로닉스와의 협약을 통해 보안이 확실한 고속 컴퓨터, 전화 회의 시스템, 파일 관리 소프트웨어 등을 고객에게 제공하기도 한다. \"저희의 성공은 베일파이어 덕분이죠.\" 가이거 씨가 설명한다. \"이들의 서비스가 저희 고객으로 하여금 어디에 있든 효율적으로 일할 수 있게 해 주었기 때문입니다.\"
가이거 씨는 GTM이 본격적으로 더 성장할 것이라고 낙관하고 있다. 수리남 파라마리보에 있는 아푸라 항공과 바베이도스 브리지타운에 본사를 둔 음식점 체인 트리거피시, 이 두 업체도 추가로 8월에 GTM과 전략적 제휴를 맺기로 합의했다. 아울러 유럽에 사업체를 열 것을 고려해 현재 독일 전역에 지점을 둔 접객 서비스 업체 크로쿠스하우스 AG와 논의 중이다.
가이거 트래블 매니지먼트에 관해 더 자세한 정보를 알아보려면 www.gtm.com을 방문하면 된다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q155",
                    questionNo: 155,
                    text: "What is indicated about Mr. Geiger?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He regularly goes to Mumbai for business.",
                        "B": "He has overseen the expansion of a business.",
                        "C": "He decided to become a travel writer ten years ago.",
                        "D": "He used to work for a hospitality company."
                    },
                    correctAnswer: "B",
                    translation: "가이거 씨에 대해 알 수 있는 것은?",
                    explanation: "첫 번째 단락에서 가이거 씨가 가이거 트래블 매니지먼트(GTM)를 창립했다고 한 후, 10년이 지난 지금 회사가 미국, 캐나다와 남아메리카 여러 국가에 지사를 두고 있다(Now ~ the company has offices in the United States, Canada, and several South American nations)고 했다. 따라서 가이거 씨가 세력을 확장했음을 알 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q156",
                    questionNo: 156,
                    text: "What service does GTM offer?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Booking hotels for executives",
                        "B": "Leading cross-cultural training workshops",
                        "C": "Providing translation services at conferences",
                        "D": "Furnishing overseas branch offices"
                    },
                    correctAnswer: "A",
                    translation: "GTM은 어떤 서비스를 제공하는가?",
                    explanation: "첫 번째 단락에서 GTM은 비즈니스 전문가들을 위해 일정표를 짜고 교통편과 숙소 마련을 돕는다(It facilitates travel and accommodation arrangements for business professionals)고 했으므로, (A)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q157",
                    questionNo: 157,
                    text: "GTM does NOT have an agreement in place with which company?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Balefire Electronics",
                        "B": "Apura Airways",
                        "C": "Triggerfish",
                        "D": "Krokushaus AG"
                    },
                    correctAnswer: "D",
                    translation: "GTM은 어떤 회사와 협약을 맺지 않았는가?",
                    explanation: "두 번째 단락에서 베일파이어 일렉트로닉스와의 협약이 언급되었고, 세 번째 단락에서 아푸라 항공 및 음식점 체인인 트리거피시와 전략적 제휴를 맺기로 합의했다고 되어 있다. 하지만 세 번째 단락에서 현재 크로쿠스하우스 AG와는 논의 중(is currently in discussions with Krokushaus AG)이라고 했으므로, 아직 협약이 체결되지 않은 상태임을 알 수 있다. 따라서 (D)가 정답이다."
                }
            ]
        },
        // Questions 158-160: Press Release
        {
            id: "v3-p7-t3-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v3-p7-t3-s6-p1",
                    contextType: "P3_MEDI",
                    docType: "NOTICE",
                    title: "FOR IMMEDIATE RELEASE",
                    content: `CALGARY (2 November)—Yves Vernier, the Chief Information Officer of the Tearson Corporation, announced on Monday that 200 robots will soon appear in Tearson's grocery stores. The robots, which are all named Bailey, will be used to locate areas where boxes or bottles have fallen and broken, spilling cereal, juice, or other substances onto the floor. The robots will report the spills so that the locations can be cleaned by store employees before they become safety hazards.
The robots were tested in Calgary, where Tearson's head office is located. During the eighteen-month pilot programme, store managers consistently gave the robots high marks. Although the robots have been used in the company's warehouses for several years, this will be their first time working in stores and interacting with customers. All Tearson stores should have the robots by the beginning of December.
For more information, visit Tearson Corporation at www.tearsoncorporation.ca.`,
                    translation: `즉시 배포용
연락처: 셰릴린 스티븐스, sstevens@tearsoncorp.ca
캘거리 (11월 2일) — 티어슨 사의 최고 정보관리 책임자 이브 버니어는 지난 월요일, 티어슨 식료품 매장에 200대의 로봇이 곧 등장할 것이라고 발표했다. 모두 베일리라는 이름이 붙은 이 로봇들은 상자나 병이 떨어져 깨지면서 시리얼, 주스, 기타 물질 등이 바닥에 쏟아진 곳을 찾아내는 데 사용될 예정이다. 로봇은 유출물을 보고해 이들이 안전에 위협이 되기 전 매장 직원들이 해당 장소를 치우도록 할 것이다.
로봇은 티어슨 본사가 위치한 캘거리에서 시범 사용되었다. 18개월의 시범 프로그램 동안, 매장 관리자들은 로봇들에게 일관되게 높은 점수를 주었다. 로봇이 회사 창고에서 몇 년간 사용돼 오기는 했지만, 매장에서 일하며 고객과 상호작용하는 것은 처음이다. 티어슨 전 매장은 12월 초까지 모두 로봇을 갖출 예정이다.
더 자세한 정보를 보려면 www.tearsoncorporation.ca로 티어슨 사를 방문하면 된다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q158",
                    questionNo: 158,
                    text: "What is the topic of the press release?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "The promotion of a company executive",
                        "B": "The use of technology in stores",
                        "C": "The launch of new product lines",
                        "D": "The relocation of a company's head office"
                    },
                    correctAnswer: "B",
                    translation: "보도자료의 주제는?",
                    explanation: "첫 번째 단락에서 티어슨 식료품 매장에 200대의 로봇이 등장할 것이라는 소식(Yves Vernier ~ announced ~ that 200 robots will soon appear in Tearson's grocery stores)을 전한 후, 매장에서의 로봇 활용에 대한 정보를 제공하고 있다. 따라서 (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q159",
                    questionNo: 159,
                    text: "What can Bailey do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Clean a mess on the floor",
                        "B": "Create labels for products",
                        "C": "Find areas that have spills",
                        "D": "Locate items for customers"
                    },
                    correctAnswer: "C",
                    translation: "베일리는 무엇을 할 수 있는가?",
                    explanation: "첫 번째 단락에서 베일리라는 이름이 붙은 로봇들이 상자나 병이 떨어져 깨지면서 시리얼, 주스, 기타 물질 등이 바닥에 쏟아진 곳을 찾아내는 데 사용될 예정(The robots ~ will be used to locate areas ~ spilling cereal, juice, or other substances onto the floor)이라고 했다. 따라서 (C)가 정답이다. 참고로, 로봇은 위치를 알려주고 직원이 청소를 하게 되므로, (A)는 오답이다."
                },
                {
                    id: "v3-p7-t3-q160",
                    questionNo: 160,
                    text: "What is suggested in the press release?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A pilot program in Calgary was a success.",
                        "B": "Tearson stores will be renovated in December.",
                        "C": "A warehouse earned high marks for safety features.",
                        "D": "Managers will be hired in several stores."
                    },
                    correctAnswer: "A",
                    translation: "보도자료에서 암시된 것은?",
                    explanation: "두 번째 단락에서 로봇이 캘거리에서 시범 사용되었다(The robots were tested in Calgary)고 한 후, 시범 프로그램 동안 매장 관리자들이 로봇들에게 일관되게 높은 점수를 주었다(During the eighteen-month pilot programme, store managers consistently gave the robots high marks)고 했다. 따라서 결과가 성공적이었다고 볼 수 있으므로, (A)가 정답이다."
                }
            ]
        },
        // Questions 161-163: E-mail
        {
            id: "v3-p7-t3-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t3-s7-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `From: Helen Dietrich <hdietrich@morphospublishing.ca>
To: Alia Cervantes <alia.cervantes@gotomail.ca>
Date: 3 March
Subject: Practical Gardening

Dear Ms. Cervantes:
I am sorry to report that next month's issue of Practical Gardening will be our last. After 62 years of monthly issues, we at Morphos Publishing have decided that Practical Gardening will be among the periodicals that we must discontinue. We plan to redirect the resources gained through cost-cutting toward growing our book publishing and instructional video production businesses.
We are grateful for your support as a longtime subscriber to Practical Gardening. For the remainder of your subscription term, we hope you will allow us to instead send you Flora Discovery, our popular publication about wild plants. However, if you would rather have the balance of your subscription account refunded to you, please contact us at (822) 555-0127.
Sincerely,
Helen Dietrich
Subscription Manager, Morphos Publishing`,
                    translation: `발신: 헬렌 디트리히 <hdietrich@morphospublishing.ca>
수신: 알리아 세르반테스 <alia.cervantes@gotomail.ca>
날짜: 3월 3일
제목: <프랙티컬 가드닝>

세르반테스 씨께,
다음 달 <프랙티컬 가드닝>이 마지막 호라는 사실을 알려드리게 되어 유감스럽습니다. 62년 동안의 월간지 발행 후, 저희 모포스 출판사는 <프랙티컬 가드닝>을 폐간해야 할 정기 간행물에 포함시키는 것으로 결정했습니다. 비용 절감을 통해 얻은 자원을 현재 성장세인 도서 출판 및 교육용 동영상 제작 사업 쪽으로 보내려고 계획하고 있습니다.
<프랙티컬 가드닝>의 오랜 구독자로 성원해 주셔서 감사합니다. 귀하의 남은 구독 기간에, 야생 식물을 주제로 하는 저희의 인기 출판물인 <플로라 디스커버리>를 대신 보내드릴 수 있게 해 주셨으면 합니다. 하지만 구독 계정에 있는 잔액을 환불 받고 싶으시다면 (822) 555-0127로 연락 주십시오.
헬렌 디트리히
구독 관리자, 모포스 출판사`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q161",
                    questionNo: 161,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To apologize for a delay",
                        "B": "To promote a new product",
                        "C": "To announce a cancellation",
                        "D": "To address a billing error"
                    },
                    correctAnswer: "C",
                    translation: "이메일을 쓴 목적은?",
                    explanation: "첫 번째 단락에서 다음 달 <프랙티컬 가드닝>이 마지막 호라는 사실을 알리게 되어 유감(I am sorry to report that next month's issue of Practical Gardening will be our last)이라고 했으므로, 월간지의 폐간으로 인한 구독 취소를 알리는 이메일임을 알 수 있다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q162",
                    questionNo: 162,
                    text: "What most likely is Practical Gardening ?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A film",
                        "B": "A book",
                        "C": "A Web site",
                        "D": "A magazine"
                    },
                    correctAnswer: "D",
                    translation: "<프랙티컬 가드닝>은 무엇이겠는가?",
                    explanation: "첫 번째 단락을 보면 <프랙티컬 가드닝>이 월마다(monthly) 나오는 정기 간행물(periodical)임을 알 수 있다. 따라서 잡지라고 보는 것이 타당하므로, (D)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q163",
                    questionNo: 163,
                    text: "The word \"balance\" in paragraph 2, line 4, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "amount remaining",
                        "B": "stability",
                        "C": "increase in cost",
                        "D": "production"
                    },
                    correctAnswer: "A",
                    translation: "두 번째 단락, 네 번째 줄에 쓰인 \"balance\"와 의미가 가장 가까운 단어는?",
                    explanation: "'balance'가 포함된 부분은 '구독 계정에 있는 잔액을 환불 받고 싶다면(if you would rather have the balance of your subscription account refunded to you)'이라는 의미로 해석되는데, 여기서 balance는 '잔액'이라는 뜻으로 쓰였다. 따라서 '남아있는 금액'이라는 의미의 (A) amount remaining이 정답이다."
                }
            ]
        },
        // Questions 164-167: Online Chat Discussion
        {
            id: "v3-p7-t3-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t3-s8-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Lindsay Pokora (2:15 P.M.) Hello, Mr. Kopalinski. I need to place the monthly office supplies order. In addition to the regular items, can you let me know if anything extra is needed?
Craig Kopalinski (2:17 P.M.) Let me check with the other managers. Kaitlyn and Jeffrey, do you have any requests for office supplies in your departments?
Kaitlyn Daley (2:18 P.M.) Yes, we need more whiteboard markers.
Craig Kopalinski (2:19 P.M.) And how about accounting?
Jeffrey Carden (2:20 P.M.) Nothing here.
Lindsay Pokora (2:22 P.M.) Markers? I just checked our inventory and we still have a box in the supply room. Do you need a special kind?
Kaitlyn Daley (2:23 P.M.) No, just regular black markers. Three boxes should be enough. I tried some markers from the box we have, but they seem to have dried up. A group of new employees will be starting next week, and we'll need markers for the orientation and training sessions.
Craig Kopalinski (2:24 P.M.) OK. Lindsay, in addition to those markers, could you please order a new chair for the second-floor conference room to replace the one that is broken? You'll need to look up the model number. Thanks.`,
                    translation: `린지 포코라 (오후 2시 15분) 안녕하세요, 코파린스키 씨. 사무용품 월별 주문을 넣어야 하는데요. 정기 주문 물품 이외에 별도로 필요한 게 있는지 알려주실 수 있을까요?
크레이그 코파린스키 (오후 2시 17분) 다른 관리자들에게 확인해 볼게요. 케이틀린, 제프리, 부서에 사무용품 요청이 있었나요?
케이틀린 데일리 (오후 2시 18분) 네, 화이트보드 마커가 더 필요해요.
크레이그 코파린스키 (오후 2시 19분) 회계부는요?
제프리 카든 (오후 2시 20분) 없습니다.
린지 포코라 (오후 2시 22분) 마커요? 재고를 막 확인했는데 비품실에 아직 한 상자가 남아 있어요. 특별한 종류가 필요하신 건가요?
케이틀린 데일리 (오후 2시 23분) 아니요, 그냥 보통 검은색 마커요. 3상자면 충분할 거예요. 가지고 있는 상자의 마커들을 써 봤는데 말라버린 것 같아요. 신입사원들이 다음 주에 업무를 시작할 거라서 오리엔테이션과 교육 시간에 마커가 필요할 겁니다.
크레이그 코파린스키 (오후 2시 24분) 알겠습니다. 린지, 마커 뿐만 아니라, 2층 회의실에 고장 난 의자를 교체할 새 의자를 주문해 주실 수 있나요? 모델 번호를 찾아봐야 할 겁니다. 고맙습니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q164",
                    questionNo: 164,
                    text: "At 2:20 P.M., what does Mr. Carden most likely mean when he writes, \"Nothing here\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He has not heard from Ms. Pokora.",
                        "B": "He does not need to place an order.",
                        "C": "He does not have extra markers.",
                        "D": "He has not checked the supply room."
                    },
                    correctAnswer: "B",
                    translation: "오후 2시 20분에 카든 씨가 \"없습니다\"라고 쓸 때, 그 의도는 무엇인가?",
                    explanation: "코파린스키 씨가 오후 2시 17분 메시지에서 데일리 씨와 카든 씨에게 부서에 사무용품 주문 요청이 있는지 물었는데, 이에 대해 카든 씨가 없다고 응답한 것이다. 따라서 (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q165",
                    questionNo: 165,
                    text: "What problem does Ms. Daley report?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Some presentations are too long.",
                        "B": "Expenses in the office have increased.",
                        "C": "Some office supplies cannot be used.",
                        "D": "The conference room is not big enough."
                    },
                    correctAnswer: "C",
                    translation: "데일리 씨가 알린 문제는 무엇인가?",
                    explanation: "데일리 씨가 오후 2시 23분 메시지에서 신입사원들이 업무를 시작할 거라서 오리엔테이션과 교육 시간에 마커가 필요하다고 했다(they seem to have dried up). 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q166",
                    questionNo: 166,
                    text: "In what department does Ms. Daley most likely work?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Accounting",
                        "B": "Human Resources",
                        "C": "Purchasing",
                        "D": "Shipping"
                    },
                    correctAnswer: "B",
                    translation: "데일리 씨는 어느 부서에서 일하겠는가?",
                    explanation: "데일리 씨가 오후 2시 23분 메시지에서 신입사원들이 다음 주에 업무를 시작할 거라서 오리엔테이션과 교육 시간에 마커가 필요하다고 했다. 따라서 그녀가 인사부(Human Resources)에서 근무한다고 추론할 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q167",
                    questionNo: 167,
                    text: "What will Ms. Pokora most likely do next?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Locate some information",
                        "B": "Review a training document",
                        "C": "Conduct an orientation session",
                        "D": "Contact department managers"
                    },
                    correctAnswer: "A",
                    translation: "포코라 씨는 다음으로 무엇을 하겠는가?",
                    explanation: "코파린스키 씨가 오후 2시 24분 메시지에서 포코라 씨에게 고장 난 의자를 교체할 새 의자를 주문해달라(could you please order a new chair ~ to replace the one that is broken?)고 한 후, 모델 번호를 찾아봐야 할 것(You'll need to look up the model number)이라고 덧붙였다. 따라서 포코라 씨가 요청에 따라 모델 번호를 찾아볼 것이라고 추론할 수 있으므로, (A)가 정답이다."
                }
            ]
        },
        // Questions 168-171: E-mail
        {
            id: "v3-p7-t3-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t3-s9-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: All staff
From: Jan Merchant
Date: October 15
Subject: Reginald Carmen

Dear Colleagues,
It is my pleasure to welcome Reginald Carmen to Edmonton Engineering Consultants, LLC. — [1] —.
With his expertise in engineering and education, Dr. Carmen will be a valuable addition to our distinguished staff. — [2] —. Upon graduating from university, he spent six years designing telecommunications systems for AstroPart, Inc. He comes to us directly from the Glasse School of Engineering, where he spent the past nineteen years. While there, he served as a full-time professor for ten years, teaching advanced mathematics and various special courses in engineering. He was then appointed president of the school and served in that position for the remaining nine years of his tenure. — [3] —. During that time, he led the team that redesigned the school's electrical engineering curriculum. — [4] —.
Dr. Carmen's first day will be next Tuesday.
Jan Merchant, Director of Personnel`,
                    translation: `수신: 전 직원
발신: 잰 머천트
날짜: 10월 15일
제목: 레지날드 카르멘

동료 여러분께,
에드먼튼 엔지니어링 컨설턴트 유한책임회사에 레지날드 카르멘 씨를 맞이하게 되어 기쁩니다.
카르멘 박사는 공학 및 교육에 전문성을 갖춰 저희 훌륭한 직원들에게 귀한 보탬이 될 것입니다. 대학을 졸업하고 아스트로파트 주식회사에서 통신 시스템을 설계하며 6년간 근무했습니다. 그리고 글래스 공과대학에서 지난 19년간 계신 뒤 바로 저희 회사로 오시는 것입니다. 그곳에서 10년간 전임교수로 근무하며 고급 수학 및 다양한 공학 특별 과정을 가르쳤습니다. 이후 학장으로 임명되어 나머지 임기 9년 동안 해당 직책을 맡았습니다. 이 기간 동안 학교의 전기공학 교육 과정을 다시 설계하는 팀을 이끌었습니다.
카르멘 박사님의 첫 근무일은 다음 주 화요일입니다.
잰 머천트, 인사부 이사`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q168",
                    questionNo: 168,
                    text: "Why did Ms. Merchant send the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To announce that she is retiring",
                        "B": "To provide details about a new employee",
                        "C": "To welcome a distinguished guest presenter",
                        "D": "To publicize expansion into a new line of business"
                    },
                    correctAnswer: "B",
                    translation: "머천트 씨가 이메일을 쓴 목적은?",
                    explanation: "첫 번째 단락에서 회사(Edmonton Engineering Consultants, LLC)에 레지날드 카르멘 씨를 맞이하게 되어 기쁘다고 한 후, 그에 대한 추가 설명을 이어가고 있다. 따라서 새 직원에 대한 세부 정보를 제공하려는 목적이라고 볼 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q169",
                    questionNo: 169,
                    text: "What is indicated about Dr. Carmen?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He has experience designing communications systems.",
                        "B": "He worked as a consultant for Edmonton Engineering Consultants in the past.",
                        "C": "He mentored Ms. Merchant at another company.",
                        "D": "He graduated from the Glasse School of Engineering."
                    },
                    correctAnswer: "A",
                    translation: "카르멘 박사에 대해 명시된 것은?",
                    explanation: "두 번째 단락에서 카르멘 박사가 아스트로파트 주식회사에서 통신 시스템을 설계하며 6년간 근무했다(he spent six years designing telecommunications systems)고 했으므로, (A)가 정답이다. 참고로, 글래스 공과대학은 그가 근무만 했던 곳이므로 (D)는 오답이다."
                },
                {
                    id: "v3-p7-t3-q170",
                    questionNo: 170,
                    text: "How long did Dr. Carmen teach at the Glasse School of Engineering?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "6 years",
                        "B": "9 years",
                        "C": "10 years",
                        "D": "19 years"
                    },
                    correctAnswer: "C",
                    translation: "카르멘 박사는 글래스 공과대학에서 얼마나 오래 가르쳤는가?",
                    explanation: "두 번째 단락에서 카르멘 박사가 글래스 공과대학에서 10년간 전임교수로 근무하며(he served as a full-time professor for ten years) 가르쳤다고 했으므로, (C)가 정답이다. 학장으로 근무했던 9년은 가르친 기간에 포함될 수 없다."
                },
                {
                    id: "v3-p7-t3-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "D",
                    translation: "[1], [2], [3], [4]로 표시된 곳 중에서 다음 문장이 가장 적합한 곳은?",
                    explanation: "주어진 문장에 인과관계를 연결하는 부사 thus가 있으므로, 앞에서 먼저 고객 교육 과정을 재설계할 적임자(the perfect choice for redesigning our client training modules)라고 판단한 근거가 언급되어야 한다. [4] 앞에서 카르멘 박사가 학교의 전기공학 교육 과정을 다시 설계하는 팀을 이끌었다(led the team that redesigned the school's electrical engineering curriculum)며 관련 경력을 설명했다. 따라서 이 뒤에 주어진 문장이 들어가야 자연스러우므로, (D)가 정답이다."
                }
            ]
        },
        // Questions 172-175: Web Page
        {
            id: "v3-p7-t3-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t3-s10-p1",
                    contextType: "P4_MARK",
                    docType: "WEBPAGE",
                    title: "Bridge Street Housing Project",
                    content: `http://www.bridgestreethousing.co.uk

The Bridge Street housing project will transform a site that has been vacant for many years. Once completed, the multi-unit, eco-friendly complex will offer high-quality housing at prices that are affordable to individuals with low to moderate incomes.
Planning for the project, which is being coordinated by the city's housing authority, began three years ago. The goal is to revitalize the neighborhood and ensure that residents have access to safe and sustainable living spaces.
The project is being completed in several phases.
• Phase 1 (Building A): Site clearing and foundation work (Completed January)
• Phase 2 (Building B): Structural framing and roofing (Completed April)
• Phase 3 (Building C): Interior finishing and landscaping (Ongoing; expected completion August)
Building C will include several community amenities, such as a rooftop garden and a shared workspace for residents. Applications for housing will be accepted starting September 1.`,
                    translation: `http://www.bridgestreethousing.co.uk

브리지 스트리트 주택 프로젝트는 오랫동안 비어있던 부지를 변화시킬 것입니다. 완공되면 이 다가구 친환경 단지는 저소득 및 중산층 소득을 가진 개인들이 감당할 수 있는 가격으로 고품질의 주택을 제공할 것입니다.
시 주택국이 조정하고 있는 이 프로젝트의 계획은 3년 전에 시작되었습니다. 목표는 지역 동네에 활력을 불어넣고 주민들이 안전하고 지속 가능한 주거 공간을 이용할 수 있도록 보장하는 것입니다.
프로젝트는 여러 단계에 걸쳐 완료되고 있습니다.
• 1단계 (A동): 부지 정리 및 기초 공사 (1월 완료)
• 2단계 (B동): 구조 프레임 및 지붕 공사 (4월 완료)
• 3단계 (C동): 내부 마무리 및 조경 (진행 중; 8월 완공 예정)
C동에는 옥상 정원과 주민들을 위한 공동 작업 공간과 같은 여러 커뮤니티 편의 시설이 포함될 것입니다. 주택 입주 신청은 9월 1일부터 접수됩니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t3-q172",
                    questionNo: 172,
                    text: "What is the purpose of the Bridge Street housing project?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To build a new office park",
                        "B": "To create affordable, eco-friendly housing",
                        "C": "To renovate an old shopping mall",
                        "D": "To expand a local park"
                    },
                    correctAnswer: "B",
                    translation: "브리지 스트리트 주택 프로젝트의 목적은?",
                    explanation: "첫 번째 단락에서 다가구 친환경 단지가 저소득 및 중산층이 감당할 수 있는 가격으로 주택을 제공할 것이라고 했다(the multi-unit, eco-friendly complex will offer high-quality housing at prices that are affordable ...). 따라서 (B)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q173",
                    text: "Who is coordinating the project?",
                    questionNo: 173,
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A private construction company",
                        "B": "A local university",
                        "C": "The city's housing authority",
                        "D": "A non-profit environmental group"
                    },
                    correctAnswer: "C",
                    translation: "누가 프로젝트를 조정하고 있는가?",
                    explanation: "두 번째 단락에서 시 주택국이 이 프로젝트를 조정하고 있다(coordinated by the city's housing authority)고 명시되어 있다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q174",
                    text: "What is currently happening in Phase 3?",
                    questionNo: 174,
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Site clearing",
                        "B": "Structural framing",
                        "C": "Interior finishing and landscaping",
                        "D": "Foundation work"
                    },
                    correctAnswer: "C",
                    translation: "현재 3단계에서 진행되고 있는 것은?",
                    explanation: "목록의 3단계(Phase 3) 설명을 보면 내부 마무리 및 조경(Interior finishing and landscaping)이 진행 중이라고 나와 있다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t3-q175",
                    text: "When will applications for housing be accepted?",
                    questionNo: 175,
                    classification: "P7_DETAIL",
                    options: {
                        "A": "January 1",
                        "B": "April 1",
                        "C": "August 1",
                        "D": "September 1"
                    },
                    correctAnswer: "D",
                    translation: "주택 신청은 언제부터 접수되는가?",
                    explanation: "마지막 문장에서 주택 입주 신청은 9월 1일부터 접수된다(Applications for housing will be accepted starting September 1)고 했다. 따라서 (D)가 정답이다."
                }
            ]
        }
    ]
};
