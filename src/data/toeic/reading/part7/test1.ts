import { Part7Test } from './types';
export const test1Data: Part7Test = {
    testId: 1,
    title: "Test 1",
    sets: [
        // Questions 147-148: Assembly Instructions
        {
            id: "p7-t1-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t1-s1-p1",
                    contextType: "P6_RULE",
                    docType: "INSTRUCTIONS",
                    title: "STOP! PLEASE READ FIRST.",
                    content: `Thank you for purchasing this item.
As you do the unpacking, please verify that all components are included and place them in a safe area to avoid loss or damage. Assemble the item on a soft surface or on the flattened empty box.
Follow the pictures and begin the assembly by placing the main part on its side. Never overtighten any screws or bolts, or you may damage the wood or cushioning. Please visit our Web site to obtain maintenance tips and register your product for warranty coverage: www.indoordelight.com.`,
                    translation: `이 제품을 구입해 주셔서 감사합니다.
포장을 풀 때, 모든 부품이 포함되어 있는지 확인하고 분실이나 손상을 피하기 위해 물건을 안전한 장소에 놓으십시오. 부드러운 표면이나 납작하게 펼친 빈 상자 위에서 제품을 조립하십시오.
그림을 따라 주요 부품을 옆에 두고 조립을 시작하십시오. 나사나 볼트를 절대 너무 과하게 조이지 마십시오. 그렇지 않으면 목재나 완충재가 손상될 수 있습니다. 유지 관리 팁을 얻고 품질 보증을 위해 제품을 등록하려면 당사의 웹사이트 www.indoordelight.com을 방문하십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q147",
                    questionNo: 147,
                    text: "Where is the information most likely found?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "On a door",
                        "B": "On a receipt",
                        "C": "In a box",
                        "D": "On a Web site"
                    },
                    correctAnswer: "C",
                    translation: "이 정보는 어디에서 가장 발견될 가능성이 높은가?",
                    explanation: `첫 문장에서 이 제품을 구입해 주셔서 감사하다(**Thank you for purchasing this item**)고 했고, 두 번째 단락에서 포장을 풀 때 부품 확인(**unpacking**, **components are included**) 및 빈 상자 위에서의 조립(**flattened empty box**) 등을 언급하고 있으므로, 이 정보는 제품 상자 안에 들어있는 설명서임을 알 수 있습니다.
[Paraphrasing] 지문의 **unpacking, flattened empty box** → 정답의 **In a box**`
                },
                {
                    id: "p7-t1-q148",
                    questionNo: 148,
                    text: "What kind of item is most likely discussed?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A desktop computer",
                        "B": "A piece of furniture",
                        "C": "A household appliance",
                        "D": "A power tool"
                    },
                    correctAnswer: "B",
                    translation: "어떤 종류의 물건이 논의되고 있을 가능성이 높은가?",
                    explanation: `세 번째 단락에서 조립 시작 시 나사/볼트 주의사항과 함께 목재나 완충재(**wood or cushioning**)가 손상될 수 있다고 언급하고 있으므로, 조립이 필요한 가구 제품임을 추론할 수 있습니다.
[Paraphrasing] 지문의 **wood or cushioning** → 정답의 **A piece of furniture**`
                }
            ]
        },
        // Questions 149-150: Meeting Schedule
        {
            id: "p7-t1-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t1-s2-p1",
                    contextType: "P5_FORM",
                    docType: "SCHEDULE",
                    content: `We are asking all Winnipeg staff to keep a copy of this schedule at their desks as a quick reference tool for scheduling interoffice meetings. Whenever possible, please schedule these meetings during one of the underlined hours, that is, after 7:00 A.M. but before 11:00 A.M.

Winnipeg       Toulouse
7:00 A.M.  —  2:00 P.M.
8:00 A.M.  —  3:00 P.M.
9:00 A.M.  —  4:00 P.M.
10:00 A.M. —  5:00 P.M.
11:00 A.M.  —  6:00 P.M.
12:00 noon  —  7:00 P.M.`,
                    translation: `모든 위니펙 직원들에게 사무실 간 회의 일정을 잡기 위해 빠르게 참고할 수 있는 도구로서 이 일정표의 복사본을 책상에 보관할 것을 요청 드립니다. 가능하면 항상 이 밑줄 친 시간 중 하나, 즉 오전 7시 이후에서 오전 11시 이전에 회의 일정을 잡으십시오.
위니펙          툴루즈
오전 7시    —    오후 2시
오전 8시    —    오후 3시
오전 9시    —    오후 4시
오전 10시   —    오후 5시
오전 11시   —    오후 6시
오후 12시   —    오후 7시`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q149",
                    questionNo: 149,
                    text: "What is suggested by the schedule?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A conference has been scheduled.",
                        "B": "A firm has offices in two time zones.",
                        "C": "Administrative assistants make travel plans.",
                        "D": "Some meeting times have been changed."
                    },
                    correctAnswer: "B",
                    translation: "일정표가 암시하는 것은 무엇인가?",
                    explanation: `일정표에 위니펙(Winnipeg)과 툴루즈(Toulouse)라는 두 곳의 사무실 시각이 표시되어 있는 것으로 보아, 회사가 서로 다른 시간대(**two time zones**)에 사무실을 두고 있음을 알 수 있습니다.
[Paraphrasing] 지문의 **Winnipeg, Toulouse** → 정답의 **two time zones**`
                },
                {
                    id: "p7-t1-q150",
                    questionNo: 150,
                    text: "What is indicated about 11:00 A.M. Winnipeg time?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is when the Winnipeg office closes for lunch.",
                        "B": "It is when staff in Toulouse begin their workday.",
                        "C": "It is not a preferred time to schedule a meeting.",
                        "D": "It has just been added to the schedule."
                    },
                    correctAnswer: "C",
                    translation: "위니펙 시간 오전 11시에 대해 무엇이 언급되어 있는가?",
                    explanation: `본문에서 오전 7시 이후~오전 11시 이전에 밑줄 친 시간대에 회의를 잡으라고 권장하고 있는데, 오전 11시(**11:00 A.M.**)는 이 범위를 벗어나 밑줄이 그어져 있지 않으므로 회의 예약에 선호되는 시간이 아님을 알 수 있습니다.
[Paraphrasing] 지문의 **underlined hours (7:00~11:00 A.M.)** → 정답의 **not a preferred time** (11시 제외)`
                }
            ]
        },
        // Questions 151-152: Brochure
        {
            id: "p7-t1-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t1-s3-p1",
                    contextType: "P4",
                    docType: "BROCHURE",
                    content: `The Bryant Foyer is one of the premier event spaces in our area. Set on a hill, it has expansive windows that provide sweeping views of the adjacent botanical gardens and the river. Built in 1897, it was the home of the Franconia Charitable Trust until its renovation just over a year ago. Today, the space can accommodate up to 200 guests and is ideal for wedding receptions, office parties, and panel presentations. With its marble floors, cathedral ceiling, and stunning artwork, the Bryant Foyer is the ideal location for your next gathering.

The on-site restaurant, Andito's, caters our events and also operates as its own business. This farm-to-table restaurant, headed by chef Michaela Rymond, meets all dietary needs and has revolutionized the local food scene. Area residents know to plan far in advance to get a seat.

To reserve the event space or to make a dinner reservation, give us a call at 216-555-0157.`,
                    translation: `브라이언트 포이어는 우리 지역 최고의 행사 공간 중 하나입니다. 언덕 위에 위치하여 인접한 식물원과 강을 한눈에 볼 수 있는 탁 트인 창문을 가지고 있습니다. 이곳은 1년 전 전면에 개조되기 전까지 프랑코니아 자선 신탁의 본거지였습니다. 오늘날, 이 공간은 최대 200명의 하객을 수용할 수 있으며 결혼 피로연, 사무실 파티 및 패널 프레젠테이션에 이상적입니다. 대리석 바닥, 대성당 천장, 그리고 멋진 예술작품을 갖춘 브라이언트 포이어는 귀하의 다음 모임을 위한 이상적인 장소입니다.
현장에 있는 식당인 앤디토스는 행사에 음식을 제공하고 자체 식당으로도 운영됩니다. Michaela Rymond 주방장이 이끄는 이 농장 직거래 식당은 모든 식단 요구를 충족시키며 지역 요식업계에 혁신을 일으켰습니다. 지역 주민들은 자리를 잡으려면 훨씬 전에 계획을 세워야 한다는 것을 알고 있습니다.
행사 공간 예약이나 식사 예약을 하시려면 216-555-0157로 전화 주십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q151",
                    questionNo: 151,
                    text: "What is indicated about the Bryant Foyer?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is located on the shores of a lake.",
                        "B": "It has recently been renovated.",
                        "C": "It will build a botanical garden for guests.",
                        "D": "It is reserved solely for corporate events."
                    },
                    correctAnswer: "B",
                    translation: "브라이언트 포이어에 대해 무엇이 언급되어 있는가?",
                    explanation: `지문 첫 번째 단락에서 이곳이 1년이 조금 넘은 시점에 개조(**renovation just over a year ago**)되었다고 언급하고 있으므로, 최근에 개조되었다는 (B)가 정답입니다.
[Paraphrasing] 지문의 **just over a year ago** → 정답의 **recently**`
                },
                {
                    id: "p7-t1-q152",
                    questionNo: 152,
                    text: "What is suggested about Andito's?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "It was started by an international chef.",
                        "B": "It offers limited menu options.",
                        "C": "It is now funded by a charitable organization.",
                        "D": "It is very popular with local residents."
                    },
                    correctAnswer: "D",
                    translation: "앤디토스에 대해 무엇이 암시되는가?",
                    explanation: `두 번째 단락 마지막 문장에서 지역 주민들이 자리를 잡으려면 훨씬 전부터 계획해야 한다(**Area residents know to plan far in advance to get a seat**)고 했으므로, 매우 인기 있는 곳임을 추론할 수 있습니다.
[Paraphrasing] 지문의 **plan far in advance to get a seat** → 정답의 **very popular**`
                }
            ]
        },
        // Questions 153-154: Text Message Chain
        {
            id: "p7-t1-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t1-s4-p1",
                    contextType: "P7",
                    docType: "TEXT_MESSAGE",
                    content: `Joan Chi (12:39 P.M.)
Hello Mina. Are you almost finished with the field measurements? I'm getting hungry.
Mina Evers (12:40 P.M.)
Sorry, Joan. I'm afraid you and Ms. Lim will have to go to lunch without me today. There's a problem with the site coordinates. This is going to take some time.
Joan Chi (12:51 P.M.)
Oh no. Should we bring something back for you?
Mina Evers (12:59 P.M.)
Get me a chicken sandwich.
Joan Chi (1:00 P.M.)
Sure thing, Mina. See you in a while.`,
                    translation: `조안 치 (오후 12:39)
안녕하세요 미나 씨. 현장 측정은 거의 끝나가나요? 배가 고파지네요.
미나 에버스 (오후 12:40)
미안해요, 조안. 아쉽게도 오늘 당신과 임 씨는 저를 빼고 점심을 먹으러 가야 할 것 같아요. 현장 좌표에 문제가 있어요. 시간이 좀 걸릴 것 같아요.
조안 치 (오후 12:51)
아, 이런. 뭐 좀 사다 드릴까요?
미나 에버스 (오후 12:59)
치킨 샌드위치 좀 사다 주세요.
조안 치 (오후 1:00)
알겠어요, 미나 씨. 이따 봐요.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q153",
                    questionNo: 153,
                    text: "At 1:00 P.M., what does Ms. Chi most likely mean when she writes, \"Sure thing, Mina\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She will bring lunch for Ms. Evers.",
                        "B": "She can provide a tool that Ms. Evers needs.",
                        "C": "Some site coordinates are correct.",
                        "D": "Some measurements must be double-checked."
                    },
                    correctAnswer: "A",
                    translation: "오후 1시에 치 씨가 \"Sure thing, Mina\"라고 쓴 의도는 무엇인가?",
                    explanation: `오후 12시 59분에 에버스 씨가 점심 식사로 치킨 샌드위치를 사다 달라고 부탁했고, 이에 대해 치 씨가 "Sure thing"(물론이죠)이라고 답했으므로 점심을 가져다 주겠다는 의미임을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q154",
                    questionNo: 154,
                    text: "What will happen next?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Ms. Chi will get new site coordinates.",
                        "B": "Ms. Chi and Ms. Lim will be out for a while.",
                        "C": "Ms. Evers will share a recipe.",
                        "D": "Ms. Lim will begin taking measurements."
                    },
                    correctAnswer: "B",
                    translation: "다음에 일어날 일로 가장 가능성이 높은 것은?",
                    explanation: `에버스 씨가 좌표 문제로 자신을 빼고 점심을 먹으러 가라고 했고, 치 씨가 이에 동의하며 "이따 봐요(See you in a while)"라고 인사했으므로 치 씨와 임 씨는 점심을 먹으러 나갈 것임을 알 수 있습니다.`
                }
            ]
        },
        // Questions 155-157: Notice
        {
            id: "p7-t1-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t1-s5-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    content: `This season's excellent weather has yielded a substantial harvest of fruits and vegetables, in many cases more than growers may find buyers for. Those of you wishing to donate surplus produce to community organizations can do so by visiting Vosey Farm and Garden's Web site (www.vfgrdn.org), where you will find our list of drop-off locations.

If you need us to come to you instead, please contact us. We will reach out to one of the many independent truck drivers who have kindly volunteered to transport and quickly distribute your food donations to vetted groups that need it. Check our Web site for more information about this service as well as for insights into topics related to farming and gardening in the Northern Great Plains region.`,
                    translation: `이번 계절의 좋은 날씨로 인해 상당한 양의 과일과 채소가 수확되었으며, 생산자들이 구매자를 찾을 수 있는 것보다 수확량이 더 많은 경우가 많습니다. 지역 사회 단체에 잉여 농산물을 기부하고자 하시는 분들은 보지 팜 앤 가든(Vosey Farm and Garden)의 웹사이트(www.vfgrdn.org)를 방문하여 드롭오프 장소 목록을 확인하시기 바랍니다.

대신 저희가 방문하기를 원하시면 저희에게 연락해 주십시오. 귀하의 기부 식품을 수거하여 이를 필요로 하는 검증된 단체에 신속하게 배분하기 위해 기꺼이 운송 자원봉사를 해주시는 많은 개인 트럭 운전사 분들 중 한 명에게 연락을 취할 것입니다. 본 서비스에 대한 자세한 정보와 북부 대평원 지역의 농업 및 원예 관련 주제에 대한 통찰력을 얻으시려면 저희 웹사이트를 확인해 주십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q155",
                    questionNo: 155,
                    text: "For whom is the notice most likely intended?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Farmers",
                        "B": "Professional chefs",
                        "C": "Truck drivers",
                        "D": "Supermarket managers"
                    },
                    correctAnswer: "A",
                    translation: "이 공지의 대상은 누구일 것으로 생각되는가?",
                    explanation: `수확량이 너무 많아 구매자를 찾기 힘들 정도이므로 잉여 농산물을 기부해달라고 권유하고 있습니다. 따라서 농산물을 직접 생산하는 사람들(재배자들)인 (A)가 정답입니다.`
                },
                {
                    id: "p7-t1-q156",
                    questionNo: 156,
                    text: "What is mentioned about the weather this season?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It caused delays in transportation.",
                        "B": "It was rainier than usual.",
                        "C": "It was a frequent topic on local news.",
                        "D": "It was beneficial for crops."
                    },
                    correctAnswer: "D",
                    translation: "공지에서 날씨에 대해 언급된 것은?",
                    explanation: `첫 문장에서 이번 계절의 좋은 날씨로 인해 상당한 양의 수확을 올렸다고 했으므로, 날씨가 작물 성장에 유익했음을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q157",
                    questionNo: 157,
                    text: "What service does the notice mention?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Staffing for local businesses",
                        "B": "Food collection and distribution",
                        "C": "Farm machinery repair",
                        "D": "Gardening workshops"
                    },
                    correctAnswer: "B",
                    translation: "공지에서 어떤 서비스를 언급하고 있는가?",
                    explanation: `지문 두 번째 단락에서 귀하의 기부 식품을 "수거하여 배분(quickly distribute your food donations)"하는 것을 돕는 자원봉사 트럭 운전사들에 대해 언급하고 있으므로 (B)가 정답입니다.`
                }
            ]
        },
        // Questions 158-160: Event Notice
        {
            id: "p7-t1-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t1-s6-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: `We are delighted that you are joining us for today's event. — [1] —. We ask that you adhere to the following guidelines to ensure that all attendees have an enjoyable experience.

Upon entering the venue, please put any and all electronic devices in silent mode. Ringtones and lit screens are very distracting to both the performers and your fellow audience members. — [2] —. Moreover, audience members are not allowed to make an audio or visual recording of the performance.

Bags and other items in the aisles pose a safety concern. — [3] —. If your bag is too big to fit properly under a seat, consider storing it in a locker for just $2. — [4] —. One of our attendants will gladly assist you with that.

Thank you for your cooperation.`,
                    translation: `오늘 행사에 함께해 주셔서 기쁩니다. — [1] —. 모든 참석자가 즐거운 경험을 할 수 있도록 다음 지침을 준수해 주시기를 부탁드립니다.

행사장 입장 시 모든 전자기기를 무음 모드로 설정해 주십시오. 벨소리와 밝은 화면은 연주자와 다른 관객 모두에게 큰 방해가 됩니다. — [2] —. 또한 관객은 공연을 오디오나 비디오로 녹화 또는 녹음할 수 없습니다.

통로에 놓인 가방과 기타 물품은 안전 문제를 야기합니다. — [3] —. 가방이 너무 커서 좌석 아래에 제대로 들어가지 않는다면 단돈 2달러로 보관함에 보관하는 것을 고려해 보십시오. — [4] —. 저희 안내원 중 한 명이 기꺼이 도와드릴 것입니다.

협조해 주셔서 감사합니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q158",
                    questionNo: 158,
                    text: "Where most likely is the notice posted?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "In an airplane",
                        "B": "In a concert hall",
                        "C": "At a restaurant",
                        "D": "At a post office"
                    },
                    correctAnswer: "B",
                    translation: "공지가 게시되어 있을 것 같은 장소는?",
                    explanation: `전자기기 무음 요청, 연주자 및 관객에 대한 배려, 공연 녹음/녹화 금지 등의 내용으로 보아 공연장임을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q159",
                    questionNo: 159,
                    text: "What is stated about large bags?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They can be put in a locked box for a fee.",
                        "B": "They must be left outside the building.",
                        "C": "They will be inspected by an attendant.",
                        "D": "They must be stored under a seat."
                    },
                    correctAnswer: "A",
                    translation: "큰 가방에 대해 언급된 것은?",
                    explanation: `가방이 너무 크면 2달러를 내고 보관함(locker)에 보관할 수 있다고 언급되어 있습니다. (A)의 locked box는 이를 재표현한 것입니다.`
                },
                {
                    id: "p7-t1-q160",
                    questionNo: 160,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Please refrain from making phone calls or texting at all times.\"",
                    classification: "P7_INSERTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"전화 통화 또는 문자 전송을 위해 휴대폰을 보는 행위를 삼가 주세요.\"",
                    explanation: `밝은 화면이 연주자와 관객에게 방해가 된다는 내용 뒤에 오는 것이 가장 흐름상 적절합니다. (이미지 해설상 B가 최적 위치입니다.)`
                }
            ]
        },
        // Questions 161-164: E-mail (Double Passage starts here)
        {
            id: "p7-t1-set7",
            setType: "Single",
            questionRange: "161-164",
            passages: [
                {
                    id: "p7-t1-s7-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Camille Ayala <cayala@esplineelectronics.com>\nFrom: Masae Adachi <madachi@sweeterspecialties.com>\nDate: February 12\nSubject: Event order\nAttachment: Sweeter Specialties Request Form\n\nDear Ms. Ayala,\n\nThank you for selecting our business to provide baked goods for the Esplin Electronics conference event in March. We are honored that you chose us for a fourth year in a row! On March 29, we will provide a large vanilla cake for each of the ten venues you indicated, and we will deliver a custom-baked multilayer cake on the following day. You will be billed on March 28. Please review the attached order form and return it to me within seven days.\n\nRegarding the cake you ordered for March 30, our head pastry chef will produce it according to your specifications. In fact, he created a sample of the complete recipe earlier today—almond crème cake with fresh raspberry filling. We have judged it to be a delectable treat, and we are sure that you will be pleased.\n\nIf you have any concerns, just send me an e-mail. As always, we value your business.\n\nMasae Adachi, Owner\nSweeter Specialties`,
                    translation: `수신: 카밀 아얄라 (cayala@esplineelectronics.com)
발신: 마사에 아다치 (madachi@sweeterspecialties.com)
날짜: 2월 12일
제목: 행사 주문
첨부: 스위터 스페셜티즈 요청서

아얄라 씨께,

3월에 열릴 에스플린 전자 컨퍼런스 행사에 제과류를 제공할 업체로 저희를 선택해 주셔서 감사합니다. 4년 연속으로 저희를 선택해 주셔서 영광입니다! 3월 29일에는 귀하가 지정하신 10곳의 행사장 각각에 대형 바닐라 케이크를 제공할 것이며, 다음 날에는 주문 제작한 다층 케이크를 배달해 드릴 것입니다. 3월 28일에 대금이 청구될 예정입니다. 첨부된 주문서를 검토하고 7일 이내에 저에게 반송해 주십시오.

3월 30일을 위해 주문하신 케이크에 관해서는, 저희 수석 파티시에가 귀하의 사양에 따라 제작할 것입니다. 사실, 그는 오늘 아침 일찍 신선한 라즈베리 소를 넣은 아몬드 크림 케이크라는 완성된 레시피의 샘플을 만들었습니다. 저희는 그것이 정말 맛있는 간식이라고 판단했으며, 귀하도 만족하실 것이라 확신합니다.

문의 사항이 있으시면 이메일을 보내 주십시오. 언제나 그렇듯, 귀하의 거래에 감사드립니다.

마사에 아다치, 사장
스위터 스페셜티즈`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q161",
                    questionNo: 161,
                    text: "What is the main purpose of the email?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To request confirmation of an order",
                        "B": "To adjust some delivery dates",
                        "C": "To announce a business expansion",
                        "D": "To promote a new dessert product"
                    },
                    correctAnswer: "A",
                    translation: "이메일의 주요 목적은?",
                    explanation: `첨부된 주문서를 검토하고 7일 이내에 반송해 달라고 요청하고 있으므로 주문 사항 확인을 요청하는 것이 주된 목적입니다.`
                },
                {
                    id: "p7-t1-q162",
                    questionNo: 162,
                    text: "What is suggested about Ms. Ayala?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "She is receiving a professional award.",
                        "B": "She has worked as a pastry chef.",
                        "C": "She has been a Sweeter Specialties client in the past.",
                        "D": "She received a positive recommendation about a chef."
                    },
                    correctAnswer: "C",
                    translation: "아얄라 씨에 대해 암시된 것은?",
                    explanation: `4년 연속 업체를 선택해 주셔서 영광이라는 표현(**chose us for a fourth year in a row**)을 통해 아얄라 씨가 과거부터 계속 이용해 온 고객임을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q163",
                    questionNo: 163,
                    text: "What is indicated about the multilayer cake?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It has been a best-selling product with clients.",
                        "B": "It is the most expensive cake at Sweeter Specialties.",
                        "C": "It is baked for Esplin Electronics annually.",
                        "D": "It is a new flavor combination for Sweeter Specialties."
                    },
                    correctAnswer: "D",
                    translation: "다층 케이크(multilayer cake)에 대해 언급된 것은?",
                    explanation: `수석 파티시에가 새로운 조리법(sample of the complete recipe)으로 만든 아몬드 크림과 라즈베리 소의 조합을 언급하고 있으므로, 새로운 맛의 조합임을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q164",
                    questionNo: 164,
                    text: "The word “judged” in paragraph 2, line 3, is closest in meaning to",
                    classification: "P7_VOCABULARY",

                    options: {
                        "A": "criticized",
                        "B": "settled",
                        "C": "determined",
                        "D": "described"
                    },
                    translation: "“judged”라는 단어의 의미와 가장 가까운 것은?",
                    correctAnswer: "C",
                    explanation: `이미지 해설상 해당 단어는 문맥상 '판단했다/결정했다'는 의미로 사용되었으므로 determined가 가장 적절합니다.`
                }
            ]
        },
        // Questions 165-167: Product Review
        {
            id: "p7-t1-set8",
            setType: "Single",
            questionRange: "165-167",
            passages: [
                {
                    id: "p7-t1-s8-p1",
                    contextType: "P3_MEDI",
                    docType: "REVIEW",
                    title: "Great Dishwasher!",
                    content: `Great Dishwasher!

I never had a dishwasher before. After remodeling my kitchen, I finally had room for a compact dishwasher. I did a lot of research, and the Dish Magic 300 seemed to be the best choice. It was pricier than other models, but all of the reviews were excellent. So, I decided to spend the extra money. I have had the dishwasher for one month now, and I could not be happier with my decision. Most importantly, the dishes come out sparkling clean, no matter how dirty they were going in. Also, the machine is so quiet, you do not even know it is running. Lastly, it is designed to use water efficiently, which is very important to me. Overall, I am very pleased with this dishwasher.

— Anna Yakovleva`,
                    translation: `훌륭한 식기세척기!
저는 예전에 식기세척기를 써본 적이 없습니다. 부엌을 리모델링한 후에야 비로소 소형 식기세척기를 놓을 공간이 생겼습니다. 저는 조사를 많이 했고, Dish Magic 300이 최고의 선택인 것 같았습니다. 다른 모델들보다 비쌌지만 모든 리뷰가 훌륭했습니다. 그래서 돈을 더 쓰기로 결정했습니다. 식기세척기를 사용한 지 이제 한 달이 되었는데, 제 결정에 이보다 더 만족할 수 없습니다. 가장 중요한 것은 접시가 얼마나 더러운 상태로 들어갔든 상관없이 반짝반짝하게 깨끗해져서 나온다는 것입니다. 또한 기계가 너무 조용해서 작동 중인지조차 모를 정도입니다. 마지막으로 물을 효율적으로 사용하도록 설계되었는데, 이는 저에게 매우 중요합니다. 전반적으로 저는 이 식기세척기에 매우 만족합니다.
— 안나 야코블레바`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q165",
                    questionNo: 165,
                    text: "Why did Ms. Yakovleva choose the Dish Magic 300 dishwasher?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It was less expensive than most models.",
                        "B": "It was the largest model available.",
                        "C": "It was rated very highly.",
                        "D": "It was the same brand as her other appliances."
                    },
                    correctAnswer: "C",
                    translation: "야코블레바 씨가 Dish Magic 300 식기세척기를 선택한 이유는?",
                    explanation: `다른 모델보다 비쌌지만 모든 후기가 좋았다(**all of the reviews were excellent**)는 내용을 통해 다른 사람들로부터 높은 평가를 받았음을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q166",
                    questionNo: 166,
                    text: "The word “running” in paragraph 1, line 7, is closest in meaning to",
                    classification: "P7_VOCABULARY",

                    options: {
                        "A": "adjusting",
                        "B": "controlling",
                        "C": "moving",
                        "D": "operating"
                    },
                    correctAnswer: "D",
                    translation: "\"running\"라는 단어의 의미와 가장 가까운 것은?",
                    explanation: `식기세척기가 '작동 중(operating)'일 때라는 의미이므로 operating이 가장 가깝습니다.`
                },
                {
                    id: "p7-t1-q167",
                    questionNo: 167,
                    text: "What is indicated about Ms. Yakovleva?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "She cares about saving water.",
                        "B": "She recently moved to a new home.",
                        "C": "She bought the dishwasher a year ago.",
                        "D": "She remodels kitchens professionally."
                    },
                    correctAnswer: "A",
                    translation: "야코블레바 씨에 대해 언급된 것은?",
                    explanation: `물을 효율적으로 사용하도록 설계된 것이 자신에게 매우 중요하다(**very important to me**)고 언급했습니다.`
                }
            ]
        },
        // Questions 168-171: Job Posting
        {
            id: "p7-t1-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t1-s9-p1",
                    contextType: "P4_MARK",
                    docType: "INFORMATION",
                    content: `Skyler Airlines employs more than 20,000 people from all over the world. We're growing fast and have many positions available. — [1] —. So regardless of your background, there's probably a place for you on our team. Skyler employees enjoy many perks. — [2] —. For example, our discount program enables them to fly to any of our destinations for a fraction of the average ticket price. — [3] —. We offer upward and global mobility, tuition reimbursement, a mentorship program, and a generous compensation package. — [4] —. Annual paid vacations enable a comfortable work-life balance. It's no wonder that Skyler Airlines was named "Best Airline to Work For" by Travel Vista Journal three years in a row.`,
                    translation: `스카일러 항공(Skyler Airlines)은 전 세계에서 20,000명 이상의 직원을 고용하고 있습니다. 저희는 빠르게 성장하고 있으며 많은 자리가 마련되어 있습니다. — [1] —. 따라서 귀하의 배경에 관계없이 저희 팀에 귀하를 위한 자리가 있을 것입니다. 스카일러 직원들은 많은 특전을 누립니다. — [2] —. 예를 들어, 저희의 할인 프로그램을 통해 직원들은 평균 티켓 가격의 아주 일부만 내고 전 세계 당사 취항지 어디든 비행할 수 있습니다. — [3] —. 저희는 상향 및 글로벌 이동성, 수업료 환급, 멘토링 프로그램 및 후한 보상 패키지를 제공합니다. — [4] —. 연간 유급 휴가는 쾌적한 일과 삶의 균형을 가능하게 합니다. 스카일러 항공이 트래블 비스타 저널(Travel Vista Journal)에 의해 3년 연속 '가장 일하기 좋은 항공사'로 선정된 것은 당연한 일입니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q168",
                    questionNo: 168,
                    text: "Who is the information intended for?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Skyler Airlines employees",
                        "B": "Skyler Airlines customers",
                        "C": "Potential journal subscribers",
                        "D": "Current job seekers"
                    },
                    correctAnswer: "D",
                    translation: "이 정보의 대상은?",
                    explanation: `일자리가 많고 배경과 관계없이 팀에 합류할 수 있다는 내용으로 구직자들을 대상으로 한 글임을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q169",
                    questionNo: 169,
                    text: "In the information, what is NOT mentioned as being offered to employees?",
                    classification: "P7_NEGATIVE",

                    options: {
                        "A": "Payment for educational expenses",
                        "B": "Free airline tickets",
                        "C": "Opportunities for mentoring",
                        "D": "Paid days off"
                    },
                    correctAnswer: "B",
                    translation: "회사에서 제공하는 것으로 언급되지 않은 것은?",
                    explanation: `평균 항공권 가격의 '일부만 내고(fraction)' 이용할 수 있다고 했지, 무료(free)라고는 하지 않았습니다.`
                },
                {
                    id: "p7-t1-q170",
                    questionNo: 170,
                    text: "What is indicated about Skyler Airlines?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It flies to more destinations than any other airline.",
                        "B": "It plans to merge with another company.",
                        "C": "It was praised in a trade publication.",
                        "D": "It replaced all of its seating with more comfortable options."
                    },
                    correctAnswer: "C",
                    translation: "스카일러 항공에 대해 언급된 것은?",
                    explanation: `전문지인 Travel Vista Journal에서 3년 연속 가장 일하기 좋은 항공사로 선정되어 칭찬(**named "Best Airline to Work For"**)을 받았습니다.`
                },
                {
                    id: "p7-t1-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Our openings cover a broad range of skill sets.\"",
                    classification: "P7_INSERTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "제시된 문장이 들어가기에 가장 적절한 위치는?",
                    explanation: `다양한 일자리가 이미 마련되어 있다는 내용과 그 경력의 잠재력을 설명하는 부분 사이에 오는 것이 적절합니다. (이미지 해설상 A 위치입니다.)`
                }
            ]
        },
        // Questions 172-175: Online Chat (Last set - 4 questions)
        {
            id: "p7-t1-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t1-s10-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Susan Gowan 9:16 A.M.
Good morning. The presentation slides about the new line of headphones are almost ready for distribution to our many partner stores. We are on track to send them out next Monday.
Maggie Lorenz 9:17 A.M.
How do they look?
Susan Gowan 9:20 A.M.
There are still some missing elements.
Alan Woodson 9:21 A.M.
We mainly need the information from the user studies that reviewed the headphones for sport use. We should have that report from the research and development office by Wednesday.
Maggie Lorenz 9:22 A.M.
Yes, let's not overlook that. And if you're concerned about the report not arriving by Wednesday, please contact Matt Harven and remind him to expedite a summary to us.
Susan Gowan 9:23 A.M.
Assuming we receive that summary soon enough to incorporate its findings into the slides, should the three of us schedule a trial run through the presentation on Thursday or Friday?
Maggie Lorenz 9:24 A.M.
Let's try for Thursday afternoon. Then we will still have Friday to make any necessary changes.
Alan Woodson 9:25 A.M.
Fine by me. I'm free after 2 P.M.`,

                    translation: `수잔 고완 (오전 9:16)
좋은 아침입니다. 새로운 헤드폰 라인에 대한 프레젠테이션 슬라이드가 여러 파트너 매장에 배포될 준비가 거의 다 되었습니다. 예정대로 다음 주 월요일에 발송할 것입니다.
매기 로렌츠 (오전 9:17)
슬라이드는 어떤가요?
수잔 고완 (오전 9:20)
아직 누락된 요소들이 좀 있습니다.
앨런 우드슨 (오전 9:21)
스포츠용 헤드폰을 검토한 사용자 연구 정보가 주로 필요합니다. 수요일까지 연구 개발실로부터 해당 보고서를 받아야 합니다.
매기 로렌츠 (오전 9:22)
네, 그 부분을 간과하지 맙시다. 그리고 만약 수요일까지 보고서가 오지 않을까 봐 걱정된다면, 맷 하벤에게 연락해서 요약본을 신속하게 보내달라고 상기시켜 주세요.
수잔 고완 (오전 9:23)
그 요약본을 슬라이드에 반영할 수 있을 만큼 일찍 받는다고 가정하면, 우리 셋이 목요일이나 금요일에 시연(trial run) 일정을 잡아야 할까요?
매기 로렌츠 (오전 9:24)
목요일 오후로 해봅시다. 그러면 필요한 변경 사항을 수정할 금요일 시간이 여전히 남을 것입니다.
앨런 우드슨 (오전 9:25)
저는 좋습니다. 오후 2시 이후로는 시간이 됩니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t1-q172",
                    questionNo: 172,
                    text: "What is indicated about a presentation?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It will be expensive to produce.",
                        "B": "It will highlight some best-selling products.",
                        "C": "It will be Ms. Gowan's first project.",
                        "D": "It will be sent to multiple locations."
                    },
                    correctAnswer: "D",
                    translation: "프레젠테이션에 대해 언급된 것은?",
                    explanation: `파트너 매장들(partner stores)에 배포될 예정이라는 내용을 통해 여러 지점으로 보내질 것임을 알 수 있습니다.`
                },
                {
                    id: "p7-t1-q173",
                    questionNo: 173,
                    text: "At 9:22 A.M., what does Ms. Lorentz imply when she writes, “let’s not overlook that”?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "More staff should attend a meeting.",
                        "B": "Information from the user studies is important.",
                        "C": "The presentation must run smoothly.",
                        "D": "Partner stores must be notified about an upcoming report."
                    },
                    correctAnswer: "B",
                    translation: "오전 9시 22분에 로렌츠 씨가 \"그 부분을 간과하지 맙시다\"라고 쓴 이유는?",
                    explanation: `스포츠용 헤드폰 사용자 연구 정보가 필요하다는 우드슨 씨의 말에 대해 한 답변으로, 해당 정보의 중요성을 강조하고 있습니다.`
                },
                {
                    id: "p7-t1-q174",
                    questionNo: 174,
                    text: "Who most likely is Mr. Harven?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A store manager",
                        "B": "An amateur athlete",
                        "C": "A product researcher",
                        "D": "An advertising executive"
                    },
                    correctAnswer: "C",
                    translation: "하벤 씨는 누구일 것으로 생각되는가?",
                    explanation: `보고서가 늦어질 경우 연락하라고 언급된 대상이며, 해당 보고서가 연구 개발실(research and development office) 업무이므로 연구원임을 추론할 수 있습니다.`
                },
                {
                    id: "p7-t1-q175",
                    questionNo: 175,
                    text: "When do the writers plan to meet to review a slide presentation?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "On Monday",
                        "B": "On Wednesday",
                        "C": "On Thursday",
                        "D": "On Friday"
                    },
                    correctAnswer: "C",
                    translation: "글을 쓴 사람들은 언제 만나기로 계획했는가?",
                    explanation: `로렌츠 씨가 목요일 오후로 하자고 했고 우드슨 씨가 동의했으므로 목요일이 정답입니다.`
                }
            ]
        }
    ]
};
