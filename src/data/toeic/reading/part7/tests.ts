export interface Part7Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    explanation?: string;
    translation?: string;
    classification?: string;
}

export interface Part7PassageContent {
    id: string;
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "CHART" | "TEXT_MESSAGE" | "FORM" | "BROCHURE" | "INSTRUCTIONS" | "SCHEDULE" | "INVITATION" | "ANNOUNCEMENT" | "ADVERTISEMENT" | "REVIEW" | "INFORMATION" | "CHAT_MESSAGE" | "WEBPAGE";
    label?: string;
    title?: string;
    content: string;
    translation?: string;
}

export interface Part7QuestionSet {
    id: string;
    questionRange: string; // e.g., "147-148" or "147-149"
    passages: Part7PassageContent[];
    questions: Part7Question[];
}

export interface Part7Test {
    testId: number;
    title: string;
    sets: Part7QuestionSet[];
}

export const part7TestData: Part7Test[] = [
    {
        testId: 1,
        title: "Test 1",
        sets: [
            // Questions 147-148: Assembly Instructions
            {
                id: "p7-t1-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t1-s1-p1",
                        type: "INSTRUCTIONS",
                        title: "STOP! PLEASE READ FIRST.",
                        content: `Thank you for purchasing this item.

As you do the unpacking, please verify that all components are included and place them in a safe area to avoid loss or damage. Assemble the item on a soft surface or on the flattened empty box.

Follow the pictures and begin the assembly by placing the main part on its side. Please do not overtighten the screws at first or you may damage the wood or cushioning. Please visit our Web site to obtain maintenance tips and register your product for warranty coverage: www.indoordelight.com.`,
                        translation: `잠시만요! 먼저 읽어 주십시오.

이 제품을 구입해 주셔서 감사합니다.

포장을 풀 때, 모든 부품이 포함되어 있는지 확인하고 분실이나 손상을 피하기 위해 물건을 안전한 장소에 놓으십시오. 부드러운 표면이나 납작하게 펼친 빈 상자 위에서 제품을 조립하십시오.

그림을 따라 주요 부품을 옆에 두고 조립을 시작하십시오. 나사나 볼트를 너무 과하게 조이지 마십시오. 그렇지 않으면 목재나 완충재가 손상될 수 있습니다. 유지 관리 팁을 얻고 품질 보증을 위해 제품을 등록하려면 당사의 웹사이트 www.indoordelight.com을 방문하십시오.`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "Where is the information most likely found?",
                        options: [
                            { label: "A", text: "On a door" },
                            { label: "B", text: "On a receipt" },
                            { label: "C", text: "In a box" },
                            { label: "D", text: "On a Web site" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_LOCATION",
                        translation: "이 정보는 어디에서 가장 발견될 가능성이 높은가?",
                        explanation: `첫 문장에서 이 제품을 구입해 주셔서 감사하다(**Thank you for purchasing this item**)고 했고, 두 번째 단락에서 포장을 풀 때 부품 확인(**unpacking**, **components are included**) 및 빈 상자 위에서의 조립(**flattened empty box**) 등을 언급하고 있으므로, 이 정보는 제품 상자 안에 들어있는 설명서임을 알 수 있습니다.

[Paraphrasing] 지문의 **unpacking, flattened empty box** → 정답의 **In a box**`
                    },
                    {
                        id: "148",
                        text: "What kind of item is most likely discussed?",
                        options: [
                            { label: "A", text: "A desktop computer" },
                            { label: "B", text: "A piece of furniture" },
                            { label: "C", text: "A household appliance" },
                            { label: "D", text: "A power tool" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "어떤 종류의 물건이 논의되고 있을 가능성이 높은가?",
                        explanation: `세 번째 단락에서 조립 시작 시 나사/볼트 주의사항과 함께 목재나 완충재(**wood or cushioning**)가 손상될 수 있다고 언급하고 있으므로, 조립이 필요한 가구 제품임을 추론할 수 있습니다.

[Paraphrasing] 지문의 **wood or cushioning** → 정답의 **A piece of furniture**`
                    }
                ]
            },
            // Questions 149-150: Meeting Schedule
            {
                id: "p7-t1-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t1-s2-p1",
                        type: "SCHEDULE",
                        content: `We are asking all Winnipeg staff to keep a copy of this schedule at their desks as a quick reference tool for scheduling interoffice meetings. Whenever possible, schedule these meetings during one of the underlined hours, that is, after 7:00 A.M. but before 11:00 A.M.

Winnipeg          Toulouse
7:00 A.M.    —    2:00 P.M.
8:00 A.M.    —    3:00 P.M.
9:00 A.M.    —    4:00 P.M.
10:00 A.M.   —    5:00 P.M.
11:00 A.M.   —    6:00 P.M.
12:00 noon   —    7:00 P.M.`,
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
                        id: "149",
                        text: "What is suggested by the schedule?",
                        options: [
                            { label: "A", text: "A conference has been scheduled." },
                            { label: "B", text: "A firm has offices in two time zones." },
                            { label: "C", text: "Administrative assistants make travel plans." },
                            { label: "D", text: "Some meeting times have been changed." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "일정표가 암시하는 것은 무엇인가?",
                        explanation: `일정표에 위니펙(Winnipeg)과 툴루즈(Toulouse)라는 두 곳의 사무실 시각이 표시되어 있는 것으로 보아, 회사가 서로 다른 시간대(**two time zones**)에 사무실을 두고 있음을 알 수 있습니다.

[Paraphrasing] 지문의 **Winnipeg, Toulouse** → 정답의 **two time zones**`
                    },
                    {
                        id: "150",
                        text: "What is indicated about 11:00 A.M. Winnipeg time?",
                        options: [
                            { label: "A", text: "It is when the Winnipeg office closes for lunch." },
                            { label: "B", text: "It is when staff in Toulouse begin their workday." },
                            { label: "C", text: "It is not a preferred time to schedule a meeting." },
                            { label: "D", text: "It has just been added to the schedule." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "위니펙 시간 오전 11시에 대해 무엇이 언급되어 있는가?",
                        explanation: `본문에서 오전 7시 이후~오전 11시 이전에 밑줄 친 시간대에 회의를 잡으라고 권장하고 있는데, 오전 11시(**11:00 A.M.**)는 이 범위를 벗어나 밑줄이 그어져 있지 않으므로 회의 예약에 선호되는 시간이 아님을 알 수 있습니다.

[Paraphrasing] 지문의 **underlined hours (7:00~11:00 A.M.)** → 정답의 **not a preferred time** (11시 제외)`
                    }
                ]
            },
            // Questions 151-152: Brochure
            {
                id: "p7-t1-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t1-s3-p1",
                        type: "BROCHURE",
                        content: `The Bryant Foyer is one of the premier event spaces in our area. Set on a hill, it has expansive windows that provide sweeping views of the adjacent botanical gardens and the river. The space was the home of the Franconia Charitable Trust until its renovation just over a year ago. Today, the space can accommodate up to 200 guests and is ideal for wedding receptions, office parties, and panel presentations. With its marble floors, cathedral ceiling, and stunning artwork, the Bryant Foyer is the ideal location for your next gathering.

The on-site restaurant, Andito's, caters our events and also operates as its own business. This farm-to-table restaurant, headed by chef Michaela Rymond, meets all dietary needs and has revolutionized the local food scene. Area residents know to plan far in advance to get a seat.

To reserve the event space or to make a dinner reservation, give us a call at 216-555-0157.`,
                        translation: `브라이언트 포이어는 우리 지역 최고의 행사 공간 중 하나입니다. 언덕 위에 위치하여 인접한 식물원과 강을 한눈에 볼 수 있는 탁 트인 창문을 가지고 있습니다. 이곳은 1년 전 전면에 개조되기 전까지 프랑코니아 자선 신탁의 본거지였습니다. 오늘날, 이 공간은 최대 200명의 하객을 수용할 수 있으며 결혼 피로연, 사무실 파티 및 패널 프레젠테이션에 이상적입니다. 대리석 바닥, 대성당 천장, 그리고 멋진 예술작품을 갖춘 브라이언트 포이어는 귀하의 다음 모임을 위한 이상적인 장소입니다.

현장에 있는 식당인 앤디토스는 행사에 음식을 제공하고 자체 식당으로도 운영됩니다. Michaela Rymond 주방장이 이끄는 이 농장 직거래 식당은 모든 식단 요구를 충족시키며 지역 요식업계에 혁신을 일으켰습니다. 지역 주민들은 자리를 잡으려면 훨씬 전에 계획을 세워야 한다는 것을 알고 있습니다.

행사 공간 예약이나 식사 예약을 하시려면 216-555-0157로 전화 주십시오.`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "What is indicated about the Bryant Foyer?",
                        options: [
                            { label: "A", text: "It is located on the shores of a lake." },
                            { label: "B", text: "It has recently been renovated." },
                            { label: "C", text: "It will build a botanical garden for guests." },
                            { label: "D", text: "It is reserved solely for corporate events." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "브라이언트 포이어에 대해 무엇이 언급되어 있는가?",
                        explanation: `지문 첫 번째 단락에서 이곳이 1년이 조금 넘은 시점에 개조(**renovation just over a year ago**)되었다고 언급하고 있으므로, 최근에 개조되었다는 (B)가 정답입니다.

[Paraphrasing] 지문의 **just over a year ago** → 정답의 **recently**`
                    },
                    {
                        id: "152",
                        text: "What is suggested about Andito's?",
                        options: [
                            { label: "A", text: "It was started by an international chef." },
                            { label: "B", text: "It offers limited menu options." },
                            { label: "C", text: "It is now funded by a charitable organization." },
                            { label: "D", text: "It is very popular with local residents." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "앤디토스에 대해 무엇이 암시되는가?",
                        explanation: `두 번째 단락 마지막 문장에서 지역 주민들이 자리를 잡으려면 훨씬 전부터 계획해야 한다(**Area residents know to plan far in advance to get a seat**)고 했으므로, 매우 인기 있는 곳임을 추론할 수 있습니다.

[Paraphrasing] 지문의 **plan far in advance to get a seat** → 정답의 **very popular**`
                    }
                ]
            },
            // Questions 153-154: Text Message Chain
            {
                id: "p7-t1-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t1-s4-p1",
                        type: "TEXT_MESSAGE",
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
                        id: "153",
                        text: "At 1:00 P.M., what does Ms. Chi most likely mean when she writes, \"Sure thing, Mina\"?",
                        options: [
                            { label: "A", text: "She will bring lunch for Ms. Evers." },
                            { label: "B", text: "She can provide a tool that Ms. Evers needs." },
                            { label: "C", text: "Some site coordinates are correct." },
                            { label: "D", text: "Some measurements must be double-checked." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오후 1시에 치 씨가 \"Sure thing, Mina\"라고 쓴 의도는 무엇인가?",
                        explanation: `오후 12시 59분에 에버스 씨가 점심 식사로 치킨 샌드위치를 사다 달라고 부탁했고, 이에 대해 치 씨가 "Sure thing"(물론이죠)이라고 답했으므로 점심을 가져다 주겠다는 의미임을 알 수 있습니다.`
                    },
                    {
                        id: "154",
                        text: "What will most likely happen next?",
                        options: [
                            { label: "A", text: "Ms. Chi will receive new site coordinates." },
                            { label: "B", text: "Ms. Chi and Ms. Lim will leave for lunch." },
                            { label: "C", text: "Ms. Evers will share a recipe." },
                            { label: "D", text: "Ms. Lim will begin taking measurements." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "다음에 일어날 일로 가장 가능성이 높은 것은?",
                        explanation: `에버스 씨가 좌표 문제로 자신을 빼고 점심을 먹으러 가라고 했고, 치 씨가 이에 동의하며 이따가 보자고 인사했으므로 치 씨와 임 씨는 점심을 먹으러 나갈 것임을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 155-157: Notice
            {
                id: "p7-t1-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t1-s5-p1",
                        type: "NOTICE",
                        content: `This season's excellent weather has yielded a substantial harvest, more than our growers may find buyers for. Those of you wishing to donate surplus produce, please visit our Web site (www.vfgrdn.org) to find our list of drop-off locations.

Should you be interested in helping us visit neighbors in need, your friendly transport will be much appreciated as we need several more truck drivers who can reach out to our donors to pick up and quickly distribute your food donations to vetted groups that need it. To learn more about this service or to understand other related topics, please check our Web site.`,
                        translation: `이번 계절의 좋은 날씨로 상당한 양의 과일과 채소가 수확되어, 대부분의 경우 재배자들이 구매자를 찾을 수 있는 것보다 수확량이 더 많은 상태입니다. 지역 단체에 잉여 농산물을 기부하고 싶으신 분들은 저희 웹사이트(www.vfgrdn.org)를 방문하시면 물건을 가져다 놓을 장소의 목록을 찾으실 수 있습니다.

만약 저희가 대신 방문해야 하는 경우라면 연락해 주십시오. 친절하게 운송을 지원해 줄 여러 대의 트럭 운전사들 중 한 명에게 연락을 취해 귀하의 기부 식품을 필요로 하는 심사를 받은 단체에 신속하게 나누어줄 것입니다. 본 서비스에 대한 자세한 내용과 기타 관련 주제에 대한 이해를 원하시면 저희 웹사이트를 확인해 주십시오.`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "Who is the notice most likely intended for?",
                        options: [
                            { label: "A", text: "Farmers" },
                            { label: "B", text: "Professional chefs" },
                            { label: "C", text: "Truck drivers" },
                            { label: "D", text: "Supermarket managers" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "이 공지의 대상은 누구일 것으로 생각되는가?",
                        explanation: `수확량이 너무 많아 구매자를 찾기 힘들 정도이므로 잉여 농산물을 기부해달라고 권유하고 있습니다. 따라서 농산물을 직접 생산하는 사람들(재배자들)인 (A)가 정답입니다.`
                    },
                    {
                        id: "156",
                        text: "What is mentioned about the weather this season?",
                        options: [
                            { label: "A", text: "It caused delays in transportation." },
                            { label: "B", text: "It was rainier than usual." },
                            { label: "C", text: "It was a frequent topic on local news." },
                            { label: "D", text: "It was beneficial for crops." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "공지에서 날씨에 대해 언급된 것은?",
                        explanation: `첫 문장에서 이번 계절의 좋은 날씨로 인해 상당한 양의 수확을 올렸다고 했으므로, 날씨가 작물 성장에 유익했음을 알 수 있습니다.`
                    },
                    {
                        id: "157",
                        text: "What service is NOT mentioned in the notice?",
                        options: [
                            { label: "A", text: "Recruiting staff for local businesses" },
                            { label: "B", text: "Collecting and distributing food" },
                            { label: "C", text: "Repairing farm machinery" },
                            { label: "D", text: "Conducting workshops" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_NEGATIVE",
                        translation: "공지에서 언급되지 않은 서비스는?",
                        explanation: `기부 식품을 수거하고 배분하는 서비스(**Collecting and distributing food**)는 본문에서 주요하게 다루고 있는 내용입니다. (A)는 트럭 운전사를 모집하는 내용과 관련이 있고, (D)는 웹사이트에서 관련 주제에 대한 정보를 제공한다고 했으므로 워크숍과 관련될 수 있습니다. 하지만 농기계 수리(**Repairing farm machinery**)는 전혀 언급되지 않았습니다.`
                    }
                ]
            },
            // Questions 158-160: Event Notice
            {
                id: "p7-t1-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t1-s6-p1",
                        type: "NOTICE",
                        content: `Thank you for being part of today's event. We're delighted to have you here. We hope all attendees have an enjoyable experience.
                        
Upon entering the venue, please set all electronic devices to silent mode. Ringtones and lit screens are very distracting to both the performers and your fellow audience members. Furthermore, attendees are not allowed to record audio or video of the performance.

Please also refrain from placing bags or other personal items in the aisles as this creates a safety hazard. If your bag is too big to fit comfortably under your seat, please consider storing it in a locker for just $2. One of our attendants will be happy to assist you. 

Thank you for your cooperation.`,
                        translation: `오늘 행사에 함께해주셔서 정말 기쁩니다. 참석자 모두 즐거운 경험을 하실 수 있도록 다음 지침을 준수해 주시기 바랍니다.

행사장에 입장하자마자 모든 전자기기를 무음 모드로 바꿔 주십시오. 벨소리와 밝은 화면은 연주자와 주변 관객 모두에게 매우 방해가 됩니다. 또한, 관객들은 공연을 음성 녹음 또는 영상 녹화할 수 없습니다.

통로에 있는 가방 및 기타 물품은 안전 문제의 원인이 됩니다. 가방이 너무 커서 좌석 밑에 제대로 들어갈 수 없다면 단돈 2달러로 보관함에 보관하는 것을 고려해 주십시오. 저희 안내원 중 한 명이 기꺼이 도와드릴 것입니다.

협조해 주셔서 감사합니다.`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "Where most likely would the notice be posted?",
                        options: [
                            { label: "A", text: "In an airplane" },
                            { label: "B", text: "In a concert hall" },
                            { label: "C", text: "In a restaurant" },
                            { label: "D", text: "In a post office" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_LOCATION",
                        translation: "공지가 게시되어 있을 것 같은 장소는?",
                        explanation: `전자기기 무음 요청, 연주자 및 관객에 대한 배려, 공연 녹음/녹화 금지 등의 내용으로 보아 공연장임을 알 수 있습니다.`
                    },
                    {
                        id: "159",
                        text: "What is mentioned about large bags?",
                        options: [
                            { label: "A", text: "They can be stored for a fee." },
                            { label: "B", text: "They should be left outside the building." },
                            { label: "C", text: "They will be inspected by an attendant." },
                            { label: "D", text: "They must be placed under the seat." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "큰 가방에 대해 언급된 것은?",
                        explanation: `가방이 너무 크면 2달러를 내고 보관함에 보관할 수 있다고 언급되어 있습니다.`
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Please refrain from looking at your phone to make calls or send text messages during the event.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"전화 통화 또는 문자 전송을 위해 휴대폰을 보는 행위를 삼가 주세요.\"",
                        explanation: `밝은 화면이 연주자와 관객에게 방해가 된다는 내용 뒤에 오는 것이 가장 흐름상 적절합니다. (이미지 해설상 B가 최적 위치입니다.)`
                    }
                ]
            },
            // Questions 161-164: E-mail (Double Passage starts here)
            {
                id: "p7-t1-set7",
                questionRange: "161-164",
                passages: [
                    {
                        id: "p7-t1-s7-p1",
                        type: "EMAIL",
                        content: `To: Kayl Ayala <ayala@esplineelectronics.com>\nFrom: Misae Adachi <madachi@sweeterspecialties.com>\nDate: 12 February\nSubject: Event News\nAttachment: Sweeter Specialties Request Form\n\nDear Ms. Ayala,\n\nThank you for choosing us to provide snacks for the Espline Electronics Conference. We are honored to be chosen for a fourth year in a row. For March 29, as you requested, we will provide broad selections of vanilla cakes at each of your ten locations. The following day, we will deliver your customized multi-layer cakes. Our invoices will be mailed on March 28. Please review the attached order form and return it to us within seven days.\n\nRegarding the cake you ordered for March 30, our head pastry chef has created a customized recipe using fresh raspberries. We think they will be delectable. If you have any questions, please email me. We always value your business.\n\nMisae Adachi, Owner\nSweeter Specialties`,
                        translation: `수신: 카일 아얄라 (ayala@esplineelectronics.com)
발신: 미사에 아다치 (madachi@sweeterspecialties.com)
날짜: 2월 12일
제목: 행사 소식
첨부: 스위터 스페셜티즈 요청서

아얄라 씨께,

에스플린 전자 컨퍼런스에 제과를 제공하는 데 저희 업체를 선택해 주셔서 감사합니다. 4년 연속 저희를 선택해 주셔서 영광입니다. 3월 29일에는 말씀하신 열 곳에 각각 큰 바닐라 케이크를 제공하고, 다음 날에는 주문 제작된 다층 케이크를 배달해 드릴 것입니다. 3월 28일에는 청구서가 발송됩니다. 첨부된 주문서를 검토하시고 7일 이내에 반송해 주시기 바랍니다.

3월 30일을 위해 주문하신 케이크에 관해서는, 저희 수석 파티시에가 귀하를 위한 특별 조리법으로 신선한 라즈베리를 넣은 케이크를 만들었습니다. 저희는 그것이 정말 맛있는 간식이 될 것이라 확신합니다. 문의사항이 있으시면 저에게 이메일을 보내 주십시오. 저희는 언제나 귀사를 소중히 생각합니다.

미사에 아다치, 사장
스위터 스페셜티즈`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the main purpose of the email?",
                        options: [
                            { label: "A", text: "To request confirmation of an order" },
                            { label: "B", text: "To adjust some delivery dates" },
                            { label: "C", text: "To announce a business expansion" },
                            { label: "D", text: "To promote a new dessert product" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 주요 목적은?",
                        explanation: `첨부된 주문서를 검토하고 7일 이내에 반송해 달라고 요청하고 있으므로 주문 사항 확인을 요청하는 것이 주된 목적입니다.`
                    },
                    {
                        id: "162",
                        text: "What is implied about Ms. Ayala?",
                        options: [
                            { label: "A", text: "She will receive a professional award." },
                            { label: "B", text: "She worked as a pastry chef." },
                            { label: "C", text: "She is a long-term customer of Sweeter Specialties." },
                            { label: "D", text: "She made positive recommendations about a chef." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "아얄라 씨에 대해 암시된 것은?",
                        explanation: `4년 연속 업체를 선택해 주셔서 영광이라는 표현을 통해 아얄라 씨가 기존 고객임을 알 수 있습니다.`
                    },
                    {
                        id: "163",
                        text: "What is indicated about the multi-layer cakes?",
                        options: [
                            { label: "A", text: "They were requested by the most customers." },
                            { label: "B", text: "They are the most expensive cakes at Sweeter Specialties." },
                            { label: "C", text: "They are produced annually for an electronics firm." },
                            { label: "D", text: "They are a new combination of flavors for Sweeter Specialties." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "다층 케이크(multi-layer cakes)에 대해 암시된 것은?",
                        explanation: `수석 파티시에가 새로운 조리법(customized recipe)으로 신선한 라즈베리를 넣은 케이크를 만들었다고 언급되어 있습니다.`
                    },
                    {
                        id: "164",
                        text: "In the second paragraph, the word \"judged\" in the third sentence is closest in meaning to",
                        options: [
                            { label: "A", text: "criticized" },
                            { label: "B", text: "resolved" },
                            { label: "C", text: "determined" },
                            { label: "D", text: "explained" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_VOCABULARY",
                        translation: "\"judged\"라는 단어의 의미와 가장 가까운 것은?",
                        explanation: `이미지 해설상 해당 단어는 문맥상 '판단했다/결정했다'는 의미로 사용되었으므로 determined가 가장 적절합니다.`
                    }
                ]
            },
            // Questions 165-167: Product Review
            {
                id: "p7-t1-set8",
                questionRange: "165-167",
                passages: [
                    {
                        id: "p7-t1-s8-p1",
                        type: "REVIEW",
                        title: "Better Dishwashing is Back",
                        content: `I have never had high expectations for a dishwasher. Since I recently moved, however, I finally have the space for a small dishwashing unit. I did quite a bit of research and chose the Dichem 300. It was pricier than other models, but all of the reviews were excellent. Now that I have been using it for about a month, I am very satisfied with my decision. Most importantly, it gets all of my dishes thoroughly clean even in its energy-saving mode. Also, even when it is running, it makes so little noise that I hardly notice it. Lastly, it is designed to use water efficiently, which is very important to me. Overall, I am very pleased with this appliance.

— Anna Eklof`,
                        translation: `훌륭한 식기세척기

저는 예전에 식기세척기를 가져본 적이 없습니다. 하지만 최근 이사를 한 후 드디어 소형 식기세척기를 놓을 공간이 생겼습니다. 저는 조사를 많이 했고, 디케매직 300이 최고의 선택인 것 같았습니다. 다른 모델들보다 비쌌지만 후기가 모두 훌륭했습니다. 이제 이것을 한 달 동안 사용하고 있는데 제 결정에 정말 만족합니다. 가장 중요한 점은 절전 모드에서도 모든 접시들이 깨끗하게 세척된다는 것입니다. 또한 작동 중에도 소음이 거의 나지 않아 작동하고 있는지조차 모를 정도입니다. 마지막으로 물을 효율적으로 사용하도록 설계되어 있으며 이는 저에게 매우 중요합니다. 전반적으로 저는 이 식기세척기에 매우 만족합니다.

— 안나 에클로프`
                    }
                ],
                questions: [
                    {
                        id: "165",
                        text: "Why did Ms. Eklof choose the Dichem 300 dishwasher?",
                        options: [
                            { label: "A", text: "It was less expensive than other models." },
                            { label: "B", text: "It was the largest model available." },
                            { label: "C", text: "It was highly rated by others." },
                            { label: "D", text: "It is the same brand as her other appliances." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "에클로프 씨가 디케매직 300 식기세척기를 선택한 이유는?",
                        explanation: `다른 모델보다 비쌌지만 모든 후기가 좋았다(**all of the reviews were excellent**)는 내용을 통해 다른 사람들로부터 높은 평가를 받았음을 알 수 있습니다.`
                    },
                    {
                        id: "166",
                        text: "In the first paragraph, the word \"running\" in the sixth sentence is closest in meaning to",
                        options: [
                            { label: "A", text: "adjusting" },
                            { label: "B", text: "controlling" },
                            { label: "C", text: "moving" },
                            { label: "D", text: "operating" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "\"running\"이라는 단어의 의미와 가장 가까운 것은?",
                        explanation: `식기세척기가 '작동 중'일 때라는 의미이므로 operating이 가장 가깝습니다.`
                    },
                    {
                        id: "167",
                        text: "What is mentioned about Ms. Eklof?",
                        options: [
                            { label: "A", text: "She cares about saving water." },
                            { label: "B", text: "She prefers to wash dishes by hand." },
                            { label: "C", text: "She bought a dishwasher one year ago." },
                            { label: "D", text: "She recently renovated her kitchen." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "에클로프 씨에 대해 언급된 것은?",
                        explanation: `물을 효율적으로 사용하도록 설계된 것이 자신에게 매우 중요하다(**very important to me**)고 언급했습니다.`
                    }
                ]
            },
            // Questions 168-171: Job Posting
            {
                id: "p7-t1-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t1-s9-p1",
                        type: "INFORMATION",
                        content: `Skyler Airlines employs over 2,000 people across the globe. We are growing fast and have many positions available. Careers at Skyler Airlines represent great potential. Regardless of your background, there's probably a place for you on our team. Skyler Employees enjoy many perks. For example, our discount program enables staff to fly to any of our destinations for a fraction of the average ticket price. We provide tuition reimbursement, a mentorship program, and a generous compensation package. Our annual paid vacations promote a healthy work-life balance. No wonder Skyler Airlines was named "Best Airline to Work For" by Travel Vista Journal for three years in a row.`,
                        translation: `스카일러 항공은 전 세계에서 2,000명 이상을 고용하고 있습니다. 저희는 빠르게 성장하고 있으며 많은 일자리가 있습니다. 스카일러의 경력은 매우 큰 잠재력을 가지고 있습니다. 귀하의 배경과 관계없이 저희 팀에는 귀하를 위한 자리가 있을 것입니다. 스카일러 직원들은 많은 혜택을 누립니다. 예를 들어, 저희의 할인 프로그램으로 직원들은 평균 항공권 가격의 아주 일부만 내고 전 세계 취항지 어디든 비행할 수 있습니다. 저희는 교육비 지원, 멘토링 프로그램, 그리고 후한 보상 패키지를 제공합니다. 저희의 연간 유급 휴가는 건강한 일과 삶의 균형을 가능하게 합니다. 스카일러 항공이 3년 연속 <트래블 비스타 저널>에 의해 '가장 근무하기 좋은 항공사'로 선정된 것은 당연한 일입니다.`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "Who is the information intended for?",
                        options: [
                            { label: "A", text: "Current members of Skyler Airlines staff" },
                            { label: "B", text: "Skyler Airlines customers" },
                            { label: "C", text: "Subscribers to a travel magazine" },
                            { label: "D", text: "Job seekers" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "이 정보의 대상은?",
                        explanation: `일자리가 많고 배경과 관계없이 팀에 합류할 수 있다는 내용으로 구직자들을 대상으로 한 글임을 알 수 있습니다.`
                    },
                    {
                        id: "169",
                        text: "What is NOT mentioned as something provided by the company?",
                        options: [
                            { label: "A", text: "Payment for educational expenses" },
                            { label: "B", text: "Travel at no cost" },
                            { label: "C", text: "Opportunities for mentoring" },
                            { label: "D", text: "Paid days off" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_NEGATIVE",
                        translation: "회사에서 제공하는 것으로 언급되지 않은 것은?",
                        explanation: `평균 항공권 가격의 '일부만 내고(fraction)' 이용할 수 있다고 했지, 무료(no cost)라고는 하지 않았습니다.`
                    },
                    {
                        id: "170",
                        text: "What is indicated about Skyler Airlines?",
                        options: [
                            { label: "A", text: "It flies to more destinations than any other airline." },
                            { label: "B", text: "It plans to merge with another company." },
                            { label: "C", text: "It was praised in a trade publication." },
                            { label: "D", text: "It replaced all of its seating with more comfortable options." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "스카일러 항공에 대해 언급된 것은?",
                        explanation: `전문지인 Travel Vista Journal에서 3년 연속 가장 일하기 좋은 항공사로 선정되어 칭찬(praised)을 받았습니다.`
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Careers at Skyler Airlines represent great potential.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INSERTION",
                        translation: "제시된 문장이 들어가기에 가장 적절한 위치는?",
                        explanation: `다양한 일자리가 이미 마련되어 있다는 내용과 그 경력의 잠재력을 설명하는 부분 사이에 오는 것이 적절합니다. (이미지 해설상 A 위치입니다.)`
                    }
                ]
            },
            // Questions 172-175: Online Chat (Last set - 4 questions)
            {
                id: "p7-t1-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t1-s10-p1",
                        type: "CHAT_MESSAGE",
                        content: `Susan Gowan (9:16 A.M.)\nGood morning. Everything is all on track with the presentation slides about the new line of headphones for our partner stores. We will send them out next Monday.\n\nMaggie Lorentz (9:17 A.M.)\nHow are the slides looking?\n\nSusan Gowan (9:20 A.M.)\nThere are still some missing elements.\n\nAllen Woodson (9:21 A.M.)\nWe mainly need the information from the user studies for sport use. We should have that report from the research and development office by Wednesday.\n\nMaggie Lorentz (9:22 A.M.)\nLet's not overlook that. And if you're concerned they won't arrive by then, please contact Matt Harven and remind him to expedite a summary to us.\n\nSusan Gowan (9:23 A.M.)\nAssuming we get them early enough to incorporate into the slides, should the three of us schedule a trial run through the presentation on Thursday or Friday?\n\nMaggie Lorentz (9:24 A.M.)\nLet's try for Thursday afternoon. That still leaves time on Friday for any changes that might be needed.\n\nAllen Woodson (9:25 A.M.)\nI'm free. Anytime after 2:00 P.M. works for me.`,
                        translation: `수잔 고완 (오전 9:16)
좋은 아침입니다. 새로운 헤드폰 라인에 대한 프레젠테이션 슬라이드는 파트너 매장에 배포될 준비가 거의 다 되었습니다. 다음 주 월요일에 그것들을 발송할 계획입니다.

매기 로렌츠 (오전 9:17)
슬라이드는 어때 보이나요?

수잔 고완 (오전 9:20)
아직 일부 유실된 요소가 있습니다.

앨런 우드슨 (오전 9:21)
스포츠용 헤드폰을 검토한 사용자 연구 정보가 주로 필요합니다. 수요일까지 연구 개발실로부터 해당 보고서를 받아야 합니다.

매기 로렌츠 (오전 9:22)
그 부분을 간과하지 맙시다. 만약 그때까지 보고서가 오지 않을까 봐 걱정된다면 맷 하벤에게 연락해서 요약본을 신속하게 보내 달라고 상기시켜 주세요.

수잔 고완 (오전 9:23)
보고서를 일찍 받아서 슬라이드에 반영한다고 가정하면, 우리 셋이 목요일이나 금요일에 시연 계획을 잡아야 할까요?

매기 로렌츠 (오전 9:24)
목요일 오후로 합시다. 그래야 필요한 변경 사항이 있을 때 금요일에 수정할 시간을 가질 수 있습니다.

앨런 우드슨 (오전 9:25)
저는 괜찮습니다. 오후 2시 이후로는 언제든 좋습니다.`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is mentioned about the presentation?",
                        options: [
                            { label: "A", text: "It will be expensive to produce." },
                            { label: "B", text: "It will highlight the best-selling products." },
                            { label: "C", text: "It will be Ms. Gowan's first project." },
                            { label: "D", text: "It will be sent to multiple outlets." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "프레젠테이션에 대해 언급된 것은?",
                        explanation: `파트너 매장들(partner stores)에 배포될 예정이라는 내용을 통해 여러 매장으로 보내질 것임을 알 수 있습니다.`
                    },
                    {
                        id: "173",
                        text: "At 9:22 A.M., why does Ms. Lorentz write, \"Let's not overlook that\"?",
                        options: [
                            { label: "A", text: "She wants more staff to attend a meeting." },
                            { label: "B", text: "She thinks user study information is important." },
                            { label: "C", text: "She wants the presentation to be more concise." },
                            { label: "D", text: "She thinks most of the partner stores will like the report." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 22분에 로렌츠 씨가 \"그 부분을 간과하지 맙시다\"라고 쓴 이유는?",
                        explanation: `스포츠용 헤드폰 사용자 연구 정보가 필요하다는 우드슨 씨의 말에 대해 한 답변으로, 해당 정보의 중요성을 강조하고 있습니다.`
                    },
                    {
                        id: "174",
                        text: "Who most likely is Mr. Harven?",
                        options: [
                            { label: "A", text: "A store manager" },
                            { label: "B", text: "A professional athlete" },
                            { label: "C", text: "A product researcher" },
                            { label: "D", text: "An advertising executive" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "하벤 씨는 누구일 것으로 생각되는가?",
                        explanation: `보고서가 늦어질 경우 연락하라고 언급된 대상이며, 해당 보고서가 연구 개발실(research and development office) 업무이므로 연구원임을 추론할 수 있습니다.`
                    },
                    {
                        id: "175",
                        text: "When do the chat participants plan to meet to review the slide presentation?",
                        options: [
                            { label: "A", text: "On Monday" },
                            { label: "B", text: "On Wednesday" },
                            { label: "C", text: "On Thursday" },
                            { label: "D", text: "On Friday" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "대화 참여자들은 언제 만나기로 계획했는가?",
                        explanation: `로렌츠 씨가 목요일 오후로 하자고 했고 우드슨 씨가 동의했으므로 목요일이 정답입니다.`
                    }
                ]
            }
        ]
    },
    {
        testId: 2,
        title: "Test 2",
        sets: [
            // Questions 147-148: Webinar Invitation
            {
                id: "p7-t2-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t2-s1-p1",
                        type: "INVITATION",
                        title: "Focus Your Social Media Presence",
                        content: `For small-business owners, it can be a challenge to stand out in a competitive social media environment. Successfully reaching your target market involves knowing how and where to promote your products in a way that is effective and memorable. The Savan Business Center offers support for business owners who need a lift in doing just that. For over 50 years, we've been helping entrepreneurs grow their sales through insight of current industry trends and understanding of our clients' unique needs.\n\nLet us help you get more organized in creating effective and far-reaching social media content. Our latest webinar, Focus Your Social Media Presence, will cover topics related to making your business stand out. You can sign up on our event Web page.\n\nDate: February 5\nTime: 10:00 A.M. to 11:00 A.M.\nEvent Web page: https://www.savanbusinesscenter.com/socialmedia`,
                        translation: `소셜 미디어 입지에 주력하라\n\n소규모 사업주에게 있어 경쟁적인 소셜 미디어 환경에서 두각을 나타내는 것은 도전이 될 수 있습니다. 목표 시장에 성공적으로 도달하는 데에는 효과적이고 기억에 남는 방식으로 제품을 홍보하는 방법과 장소를 아는 것이 필요합니다. 사반 비즈니스 센터는 바로 그 일을 하는 데 부양책이 필요한 사업주들을 지원합니다. 50년이 넘는 기간 동안 저희는 현재 업계 동향에 대한 통찰력과 고객의 고유한 요구에 대한 이해를 통해 사업주들이 매출을 신장할 수 있도록 도움을 드리고 있습니다.\n\n효과적이고 영향력이 큰 소셜 미디어 콘텐츠를 만드는 데 있어 귀사가 보다 체계적일 수 있도록 도와드리겠습니다. 저희의 최신 웨비나인 '소셜 미디어 입지에 주력하라'에서는 귀사의 비즈니스를 돋보이게 만드는 것과 관련된 주제들을 다룹니다. 저희의 이벤트 웹페이지에서 등록하실 수 있습니다.\n\n날짜: 2월 5일\n시간: 오전 10시부터 오전 11시\n이벤트 웹페이지: https://www.savanbusinesscenter.com/socialmedia`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What is true about the Savan Business Center?",
                        options: [
                            { label: "A", text: "It works with small businesses." },
                            { label: "B", text: "It publishes a weekly newsletter." },
                            { label: "C", text: "It recently launched a new Web site." },
                            { label: "D", text: "It is seeking suggestions for webinar topics." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "Savan Business Center에 대해 사실인 것은?",
                        explanation: `이미지 해설에 따르면, 첫 문장에서 소규모 사업주들에게 도전이 될 수 있는 환경을 언급한 뒤 세 번째 문장에서 사반 비즈니스 센터가 바로 그 일을 하는 데 도움이 필요한 사업주들을 지원한다고 했습니다. 따라서 소규모 사업체와 함께 협력하거나 지원하는 곳임을 알 수 있습니다.`
                    },
                    {
                        id: "148",
                        text: "What is indicated about the webinar?",
                        options: [
                            { label: "A", text: "It begins at 11:00 A.M." },
                            { label: "B", text: "It features advice on creating promotional content." },
                            { label: "C", text: "It is being offered every month." },
                            { label: "D", text: "It requires a small fee to attend." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "웨비나에 대해 무엇이 언급되어 있는가?",
                        explanation: `두 번째 단락에서 효과적이고 영향력이 큰 소셜 미디어 콘텐츠를 만드는 데 도움을 주겠다고 언급하고, 웨비나에서 비즈니스를 돋보이게 하는 주제를 다룬다고 했으므로 홍보용 콘텐츠 제작에 대한 조언을 제공함을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 149-150: Dine Out Darville Announcement
            {
                id: "p7-t2-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t2-s2-p1",
                        type: "ANNOUNCEMENT",
                        title: "Dine Out Darville Is Back!",
                        content: `Dine Out Darville, which runs this year from June 22 to 28, is the perfect chance to try a restaurant in Darville for the first time or revisit one of your favorite restaurants in town. You may even visit multiple restaurants during the weeklong event! Twelve popular restaurants will offer special four-course dinners—including a cup of soup, a salad, a main course, and dessert—all for a reduced price of $30. Reservations are highly recommended. Dine Out Darville welcomes hundreds of locals and tourists each year, and you do not want to miss your opportunity to get a great meal at a great price.\n\nVisit www.darvillebusinesscouncil.org/dineout for a list of participating restaurants.`,
                        translation: `다인 아웃 다빌이 돌아왔습니다!\n\n올해 6월 22일부터 28일까지 운영되는 다인 아웃 다빌은 다빌에 있는 레스토랑을 처음 시도하거나 이 도시에서 가장 좋아하는 레스토랑 중 하나를 재방문할 수 있는 완벽한 기회입니다. 일주일 간의 행사 동안 여러 레스토랑을 방문할 수도 있습니다! 인기 있는 레스토랑 열두 곳에서 수프 한 컵, 샐러드, 메인 코스, 디저트를 포함한 4코스 특별 정식을 할인된 가격인 30달러에 제공합니다. 예약이 적극 권장됩니다. 다인 아웃 다빌은 매년 수백 명의 현지인과 관광객을 맞이하고 있으며, 여러분은 저렴한 가격에 훌륭한 식사를 할 수 있는 기회를 결코 놓치고 싶지 않을 것입니다.\n\n참여 레스토랑 목록을 확인하려면 www.darvillebusinesscouncil.org/dineout을 방문하세요.`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "What is mentioned about Dine Out Darville?",
                        options: [
                            { label: "A", text: "It lasts for one week." },
                            { label: "B", text: "It is held in a different location each year." },
                            { label: "C", text: "It is being held for the first time." },
                            { label: "D", text: "It includes both lunch and dinner." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "Dine Out Darville에 대해 무엇이 언급되어 있는가?",
                        explanation: `첫 문장에서 올해 6월 22일부터 28일까지 운영된다고 했으며, 그 다음 문장에서 '일주일 간의 행사(weeklong event)'라고 지칭했으므로 일주일 동안 지속됨을 알 수 있습니다.`
                    },
                    {
                        id: "150",
                        text: "What is NOT included in the reduced-price meals?",
                        options: [
                            { label: "A", text: "A cup of soup" },
                            { label: "B", text: "A salad" },
                            { label: "C", text: "A dessert" },
                            { label: "D", text: "A beverage" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_NOT_MENTIONED",
                        translation: "할인 가격 식사에 포함되지 않은 것은?",
                        explanation: `세 번째 문장에서 할인 정식에는 수프 한 컵, 샐러드, 메인 코스, 디저트가 포함된다고 명시했습니다. 음료(beverage)는 포함 내역에 없습니다.`
                    }
                ]
            },
            // Questions 151-152: Article - Rainsy To Move Headquarters
            {
                id: "p7-t2-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t2-s3-p1",
                        type: "ARTICLE",
                        title: "Rainsy To Move Headquarters",
                        content: `DADE (July 11)—Rainsy LLC announced yesterday that it is moving its headquarters to Dade.\n\nThe data storage and analytics firm currently based in Salt Creek, Rainsy has clients that include some of the country's largest credit card companies, online retailers, and software providers. Rainsy helps businesses manage and understand their customer data.\n\nRainsy is not planning to close its current offices in Salt Creek. However, the Dade location will become its new base of operations, as several members of its executive team will work there. The company's chief executive officer and chief financial officer will relocate to Dade along with approximately 50 percent of the company's workforce.\n\nThe office of Rainsy's chief technology officer will remain in Salt Creek, as will the account management team. The company's new Dade offices are located at 12 Glacier Parkway.`,
                        translation: `헤인시 사의 본사 이전\n\n데이드 (7월 11일) — 레인시 LLC는 어제 본사를 데이드로 이전한다고 발표했습니다.\n\n현재 솔트크리크에 본사를 둔 데이터 저장 및 분석 회사인 레인시는 국내 최대의 신용카드사, 온라인 소매업체 및 소프트웨어 공급업체를 포함한 고객들을 보유하고 있습니다. 레인시는 이러한 기업들이 고객 데이터를 관리하고 이해할 수 있도록 돕고 있습니다.\n\n레인시가 솔트크리크에 있는 현재 사무실을 닫을 계획은 없습니다. 하지만 일부 경영진이 데이드 지사에서 근무할 예정임에 따라 그곳이 새로운 운영 기반이 될 것입니다. 회사의 최고 경영 책임자와 최고 재무 책임자는 약 50퍼센트의 회사 직원과 함께 데이드로 이전할 것입니다.\n\n레인시의 최고 기술 책임자 사무실은 솔트크리크에 남을 예정이며, 고객 관리팀도 마찬가지입니다. 회사의 새로운 데이드 사무실은 글레이셔 파크웨이 12번지에 위치해 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "What does Rainsy LLC do?",
                        options: [
                            { label: "A", text: "It stores and analyzes consumer information." },
                            { label: "B", text: "It sells technology products online." },
                            { label: "C", text: "It processes credit card payments for retailers." },
                            { label: "D", text: "It develops computer software programs." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "Rainsy LLC는 무엇을 하는가?",
                        explanation: `두 번째 단락에서 솔트크리크에 본사를 둔 데이터 저장 및 분석 회사인 레인시는 기업들이 고객 데이터를 관리하고 이해할 수 있도록 돕고 있다고 언급했으므로 소비자 데이터를 저장 및 분석하는 회사임을 알 수 있습니다.`
                    },
                    {
                        id: "152",
                        text: "Who will be based in Dade?",
                        options: [
                            { label: "A", text: "Rainsy's chief technology officer" },
                            { label: "B", text: "The entire Rainsy executive team" },
                            { label: "C", text: "About half of Rainsy's employees" },
                            { label: "D", text: "The Rainsy account management team" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "누가 Dade에 근무하게 되는가?",
                        explanation: `세 번째 단락의 마지막 문장에서 최고 경영 책임자와 최고 재무 책임자는 약 50퍼센트의 회사 직원과 함께 데이드로 이전할 것이라고 했으므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 153-154: Text Message Chain
            {
                id: "p7-t2-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t2-s4-p1",
                        type: "TEXT_MESSAGE",
                        content: `Michael Liu (9:43 A.M.)\nHi, Jana. I'm at Biz Plus. The paper you need is out of stock until next week. Will another color work?\n\nJana Bhat (9:45 A.M.)\nWhat are the options?\n\nMichael Liu (9:46 A.M.)\nThey have yellow, green, and pink in the brand that you prefer.\n\nJana Bhat (9:47 A.M.)\nI really need blue. Are there other brands of blue printer paper?\n\nMichael Liu (9:48 A.M.)\nYes, but they're all a darker blue. They also cost more.\n\nJana Bhat (9:49 A.M.)\nOK, forget it. I'll place an order online.`,
                        translation: `마이클 리우 (오전 9:43)\n안녕하세요, 제나. 지금 비즈 플러스에 있는데요. 당신이 필요한 종이가 다음 주까지 재고가 없어요. 다른 색도 될까요?\n\n제나 바트 (오전 9:45)\n어떤 선택지가 있나요?\n\n마이클 리우 (오전 9:46)\n당신이 선호하는 브랜드에 노란색, 초록색, 분홍색이 있어요.\n\n제나 바트 (오전 9:47)\n저는 파란색이 꼭 필요해요. 다른 브랜드의 파란색 프린터 용지가 있나요?\n\n마이클 리우 (오전 9:48)\n네, 하지만 모두 진한 파란색이에요. 가격도 더 비싸고요.\n\n제나 바트 (오전 9:49)\n알겠어요, 신경 쓰지 마세요. 제가 온라인으로 주문할게요.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is implied about the paper Mr. Liu is trying to buy?",
                        options: [
                            { label: "A", text: "It is a light blue color." },
                            { label: "B", text: "It is expensive." },
                            { label: "C", text: "It is only sold at Biz Plus." },
                            { label: "D", text: "It has been discontinued." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "리우 씨가 사려고 하는 종이에 대해 암시된 것은?",
                        explanation: `9시 47분에 바트 씨가 파란색이 꼭 필요하다고 했고, 9시 48분에 리우 씨가 다른 브랜드의 파란색 종이는 모두 '진한 파란색(darker blue)'이라고 답했습니다. 따라서 원래 사려고 했던 종이는 연한 파란색임을 추론할 수 있습니다.`
                    },
                    {
                        id: "154",
                        text: "At 9:49 A.M., what does Ms. Bhat most likely mean when she writes, \"OK, forget it\"?",
                        options: [
                            { label: "A", text: "She wants to check a budget." },
                            { label: "B", text: "Mr. Liu should not buy any paper at Biz Plus." },
                            { label: "C", text: "Mr. Liu should not place an order this week." },
                            { label: "D", text: "She plans to cancel an order." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 49분에 바트 씨가 \"OK, forget it\"이라고 쓴 의도는?",
                        explanation: `원하는 종이가 없고 다른 것은 더 비싸거나 색상이 맞지 않아 본인이 직접 온라인으로 주문하겠다고 했으므로, 리우 씨에게 해당 매장에서 종이를 사지 말라고 말하는 것입니다.`
                    }
                ]
            },
            // Questions 155-157: Letter
            {
                id: "p7-t2-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t2-s5-p1",
                        type: "LETTER",
                        content: `May 20\n\nNeil Croft, Director\nQueensland Library Systems\n13 Henoki Road\nBrisbane QLD 4003\n\nDear Mr. Croft,\n\nI have read your inquiry regarding the possibility of opening financial management courses at libraries across Queensland. The Society for Financial Management Advisors (SFMA) welcomes the opportunity to partner with libraries to make basic financial information more widely available.\n\nYou proposed that SFMA members could lead introductory courses at your library branches. This is something I would be happy to arrange. In the past, SFMA members have offered similar courses for recent graduates, people changing careers, and first-time investors.\n\nIf you have a list of library branches where you would like to run the first series of events, I can suggest facilitators who work near those libraries or would be willing to travel to them. Do you have a general profile of the expected attendees? That information would help us tailor the courses to the needs and interests of the students.\n\nI look forward to meeting you and planning next steps. Please call me at 07 5550 1344 to schedule a time to discuss the process.\n\nRoberta Ottini\nChairperson, Society for Financial Management Advisors`,
                        translation: `5월 20일\n\n닐 크로프트 관장\n퀸즐랜드 도서관 시스템\n해노키 로드 13\n브리즈번 QLD 4003\n\n크로프트 씨께,\n\n퀸즐랜드 전역의 도서관에 재무관리 과정을 개설하는 것에 관한 귀하의 문의를 읽었습니다. 재무관리 전문가 협회(SFMA)는 기초 재무 관리 정보에 보다 널리 접근할 수 있도록 도서관과 협력할 수 있는 기회를 환영합니다.\n\n귀하는 SFMA 회원들이 몇몇 도서관 분관에서 입문 과정을 지도해 줄 것을 제안했습니다. 이는 제가 기꺼이 주선할 수 있는 것입니다. 과거에 SFMA 회원들은 최근 졸업생, 직업을 바꾸려는 사람들, 처음 투자하는 사람들에게 비슷한 과정을 제공했습니다.\n\n첫 행사 시리즈를 진행할 도서관 분관 목록이 있으시다면 해당 도서관 근처에서 근무하거나 그 도서관으로 갈 의향이 있는 진행자들을 제안해 드릴 수 있습니다. 예상 참석자들의 일반적인 프로필이 있으십니까? 그 정보는 수강생의 요구와 관심에 맞게 과정을 조정하는 데 도움이 될 것입니다.\n\n귀하와 만나서 다음 계획을 세우기를 기대합니다. 과정에 대해 논의할 시간을 잡기 위해 07 5550 1344로 전화 주시기 바랍니다.\n\n로버타 오트니\n협회장, 재무관리 전문가 협회`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "Why did Ms. Ottini write the letter?",
                        options: [
                            { label: "A", text: "To describe new library courses" },
                            { label: "B", text: "To register for an SFMA finance course" },
                            { label: "C", text: "To verify some educational credentials" },
                            { label: "D", text: "To respond to an inquiry from Mr. Croft" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "오트니 씨가 편지를 쓴 이유는?",
                        explanation: `첫 문장에서 오트니 씨가 크로프트 씨에게 퀸즐랜드 전역의 도서관에 재무관리 과정을 개설하는 것에 관한 귀하의 문의(inquiry)를 읽었다고 언급했습니다. 따라서 문의에 응답하기 위해 편지를 썼음을 알 수 있습니다.`
                    },
                    {
                        id: "156",
                        text: "What is one thing Ms. Ottini requested?",
                        options: [
                            { label: "A", text: "Library membership requirements" },
                            { label: "B", text: "A list of course instructors" },
                            { label: "C", text: "The locations of libraries" },
                            { label: "D", text: "Mr. Croft's phone number" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "오트니 씨가 요청한 내용 중 하나는?",
                        explanation: `세 번째 단락의 첫 문장에서 오트니 씨가 첫 행사 시리즈를 진행할 도서관 분관 목록(list of library branches)이 있다면 진행자를 제안해 줄 수 있다고 했습니다. 이는 도서관들의 위치를 파악하기 위함입니다.`
                    },
                    {
                        id: "157",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"This is something I would be happy to arrange.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이는 제가 기꺼이 주선할 수 있는 것입니다.\"",
                        explanation: `주어진 문장에서 '이것(This)'은 앞서 언급된 제안을 가리킵니다. [2] 바로 앞에서 크로프트 씨가 SFMA 회원들이 입문 과정을 지도해 줄 것을 제안했다는 내용이 나오므로, 그 뒤에 오는 것이 가장 자연스럽습니다.`
                    }
                ]
            },
            // Questions 158-160: Advertisement
            {
                id: "p7-t2-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t2-s6-p1",
                        type: "ADVERTISEMENT",
                        title: "Claro Vision",
                        content: `The difference is clear.\n\nTake advantage of our limited-time offer:\n50% off all eyeglass frames through 30 September\n\nOther advantages available today and every day:\n\n• Free eyeglass fittings and adjustments\n\n• Money-back guarantee if you are not completely satisfied\n\n• More than 500 locations in shopping malls throughout Canada\n\n• Low-cost vision checkups by licensed opticians\n\nTo find a store near you, visit www.clarovision.ca/locations,\nor call 416-555-0122 today!`,
                        translation: `클라로 비전\n차이가 분명합니다.\n\n기간 한정 할인을 이용하세요:\n9월 30일까지 모든 안경테 50% 할인\n\n오늘 그리고 매일 이용 가능한 기타 혜택:\n\n• 무료 안경 피팅 및 조정\n\n• 완전히 만족하지 못할 경우 환불 보장\n\n• 캐나다 전역의 쇼핑몰에 있는 500개 이상의 지점\n\n• 공인 안경사의 저렴한 시력 검사\n\n가까운 매장을 찾으려면 www.clarovision.ca/locations를 방문하시거나 오늘 416-555-0122로 전화 주세요!`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "Why most likely was the advertisement created?",
                        options: [
                            { label: "A", text: "To draw attention to an underused professional service" },
                            { label: "B", text: "To publicize the benefits of a warranty policy" },
                            { label: "C", text: "To announce the opening of new store locations" },
                            { label: "D", text: "To promote a temporary price discount" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "광고가 만들어진 이유는?",
                        explanation: `광고 상단에서 '9월 30일까지 모든 안경테 50% 할인'이라는 한시적인 가격 할인 혜택(limited-time offer, temporary price discount)을 홍보하고 있습니다.`
                    },
                    {
                        id: "159",
                        text: "What is stated about Claro Vision stores?",
                        options: [
                            { label: "A", text: "They are larger than competitors' stores." },
                            { label: "B", text: "They accept all major credit cards." },
                            { label: "C", text: "They are located next to shopping malls." },
                            { label: "D", text: "They provide eyeglass fittings at no cost." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "Claro Vision 매장에 대해 언급된 것은?",
                        explanation: `기타 혜택 목록의 첫 번째 항목에서 '무료 안경 피팅 및 조정(Free eyeglass fittings and adjustments, at no cost)'을 제공한다고 명시되어 있습니다.`
                    },
                    {
                        id: "160",
                        text: "What is stated about vision checkups?",
                        options: [
                            { label: "A", text: "They are completed by a partner company." },
                            { label: "B", text: "They are performed by a certified professional." },
                            { label: "C", text: "They should be done every ten months." },
                            { label: "D", text: "They are offered on a limited number of days." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "시력 검사에 대해 언급된 것은?",
                        explanation: `기타 혜택의 마지막 항목에서 '공인 안경사(licensed opticians, certified professional)'에 의해 시력 검사가 수행된다고 언급되었습니다.`
                    }
                ]
            },
            // Questions 161-163: Letter
            {
                id: "p7-t2-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t2-s7-p1",
                        type: "LETTER",
                        content: `Rossery Building Corporation\n2710 South Exmouth Drive\nSingapore 188509\n\n1 April\n\nElizabeth Balakrishnan\nBala Home Furnishings\n416 Holliton Drive C2\nSingapore 793801\n\nDear Ms. Balakrishnan,\n\nThis is a reminder that the one-year lease for your space will end on 30 April. Please contact my office at 1555 0124 to make an appointment to renew your lease. There will be a small increase in rent and fees because of rising operating costs.\n\nUpdated charges upon lease renewal:\nMonthly rental         S$1,800.00\nParking space fee      S$50.00\nCleaning service       S$10.00\nSecurity fee           S$35.00\nTotal per month        S$1,895.00\n\nIf you do not plan to renew your lease, please notify our office by 15 April. You will need to vacate the premises by 5:00 P.M. on 30 April. The building will be inspected at that time, and costs for repairs or damage beyond normal wear and usage may be incurred.\n\nAlexis Tan`,
                        translation: `로세리 빌딩 코퍼레이션\n2710 사우스 엑스머스 드라이브\n싱가포르 188509\n\n4월 1일\n\n엘리자베스 발라크리슈난\n발라 홈 퍼니싱\n416 홀리턴 드라이브 C2\n싱가포르 793801\n\n발라크리슈난 씨께,\n\n귀하의 공간에 대한 1년 임대차 계약이 4월 30일에 종료됨을 상기시켜 드립니다. 임대차 계약 갱신을 위한 예약을 하시려면 제 사무실 1555 0124로 연락해 주십시오. 운영비 상승으로 인해 임대료 및 수수료가 소폭 인상될 예정입니다.\n\n임대차 계약 갱신 시 변경된 요금:\n월세: 1,800싱가포르달러\n주차 공간 요금: 50싱가포르달러\n청소 서비스: 10싱가포르달러\n보안 수수료: 35싱가포르달러\n월 총액: 1,895싱가포르달러\n\n만약 임대차 계약을 갱신하지 않을 계획이라면, 4월 15일까지 저희 사무소로 통지해 주십시오. 4월 30일 오후 5시까지 건물을 비워 주셔야 합니다. 그 시간에 건물 점검이 있을 예정이며, 정상적인 사용을 넘어선 수리 또는 손상에 대한 비용이 발생할 수 있습니다.\n\n알렉시스 탄`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the purpose of the letter?",
                        options: [
                            { label: "A", text: "To explain equipment installation fees" },
                            { label: "B", text: "To provide a discount for a service" },
                            { label: "C", text: "To provide information about a lease agreement" },
                            { label: "D", text: "To request a change to building amenities" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "편지의 목적은?",
                        explanation: `첫 문장에서 임대차 계약(lease) 종료를 상기시키고 갱신 관련 정보와 변경된 요금을 안내하고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "162",
                        text: "According to the letter, what must Ms. Balakrishnan pay for monthly?",
                        options: [
                            { label: "A", text: "Furniture rental" },
                            { label: "B", text: "Office supplies" },
                            { label: "C", text: "Inspection costs" },
                            { label: "D", text: "A parking space" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "편지에 따르면, 발라크리슈난 씨가 매달 지불해야 하는 것은?",
                        explanation: `요금 목록에 '주차 공간 요금(Parking space fee)'이 50싱가포르달러로 명시되어 있습니다.`
                    },
                    {
                        id: "163",
                        text: "Who most likely is Ms. Tan?",
                        options: [
                            { label: "A", text: "A repair technician" },
                            { label: "B", text: "A property manager" },
                            { label: "C", text: "A sanitation worker" },
                            { label: "D", text: "A security guard" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "탄 씨는 누구일 것 같은가?",
                        explanation: `임대차 계약 관리, 요금 고지, 건물 비우기 및 점검 안내를 하는 것으로 보아 부동산 관리자(property manager)임을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 164-167: E-mail
            {
                id: "p7-t2-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t2-s8-p1",
                        type: "EMAIL",
                        content: `From: khajel@qualiview.co.uk\nTo: lkhoury@briteiyauto.co.uk\nDate: 14 April\nSubject: Proposed revisions to your contract\n\nDear Ms. Khoury,\n\nThank you for forwarding your proposed revisions to the contract for Qualiview Ltd. to become your wholesale supplier of automotive window glass.\n\nFirst, we agree to your request to extend the term of the contract from one year to three years. Second, we are still uncertain about how we can best address your concerns about packaging. We use an innovative type of custom-built crate that reduces breakage for items in transit. We would not be willing to agree to pay an additional penalty fee in the event of damage, however.\n\nI would like to discuss this further with you next week, and I will be out of the office on Tuesday afternoon. Would you be available to meet before 11:00 A.M. on either Wednesday or Thursday? Friday is also possible. Please let me know your preferred date.\n\nKarl Hajel\nQualiview Ltd.`,
                        translation: `발신: khajel@qualiview.co.uk\n수신: lkhoury@briteiyauto.co.uk\n날짜: 4월 14일\n제목: 귀사의 계약 수정안 제안\n\n코우리 씨께,\n\n퀄리뷰 사가 귀사의 자동차 유리 도매 공급업체가 되는 계약에 대한 수정 제안 사항을 보내주셔서 감사합니다.\n\n먼저, 계약 기간을 1년에서 3년으로 연장해 달라는 귀하의 요청에 동의합니다. 둘째, 포장 제재에 대한 귀사의 우려를 어떻게 가장 잘 해결(address)할 수 있을지 아직 확신이 서지 않습니다. 저희는 운송 중 파손을 줄이는 혁신적인 맞춤형 상자를 사용합니다. 하지만 파손이 발생할 경우 추가 위약금을 지불하는 데에는 동의하지 않습니다.\n\n다음 주에 이에 대해 귀하와 추가로 논의하고 싶습니다만, 제가 화요일 오후에는 사무실을 비울 예정입니다. 수요일이나 목요일 오전 11시 전에 만나실 수 있을까요? 금요일도 가능합니다. 편하신 날짜를 알려주십시오.\n\n칼 헤이글\n퀄리뷰 사`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "Why did Mr. Hajel write the e-mail?",
                        options: [
                            { label: "A", text: "To report damage to some goods" },
                            { label: "B", text: "To finalize a purchase" },
                            { label: "C", text: "To request some product samples" },
                            { label: "D", text: "To negotiate a contract" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "헤이글 씨가 이메일을 쓴 이유는?",
                        explanation: `첫 번째 단락에서 헤이글 씨가 퀄리뷰 사가 귀사의 자동차 유리 도매 공급업체가 되는 계약에 대한 수정 제안을 받았다고 언급하고, 마지막 단락에서 이에 대해 논의하고 싶다고 했으므로 계약 사항을 협상(negotiate)하기 위해 쓴 글임을 알 수 있습니다.`
                    },
                    {
                        id: "165",
                        text: "What is indicated about Qualiview Ltd.?",
                        options: [
                            { label: "A", text: "It sells its products online." },
                            { label: "B", text: "It is a vehicle window manufacturer." },
                            { label: "C", text: "It has paid a penalty fee in the past." },
                            { label: "D", text: "It recently redesigned its shipping crates." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Qualiview Ltd.에 대해 알 수 있는 것은?",
                        explanation: `첫 문장에서 퀄리뷰 사가 자동차 유리(automotive window glass)의 도매 공급업체(wholesale supplier)가 된다고 언급했으므로 차량용 창 제조업체임을 알 수 있습니다.`
                    },
                    {
                        id: "166",
                        text: "In the second paragraph, the word \"address\" is closest in meaning to",
                        options: [
                            { label: "A", text: "respond to" },
                            { label: "B", text: "think about" },
                            { label: "C", text: "greet" },
                            { label: "D", text: "deliver" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_VOCABULARY",
                        translation: "두 번째 단락의 'address'와 의미상 가장 가까운 단어는?",
                        explanation: `문맥상 포장에 대한 우려 사항에 대해 '대응하다, 처리하다, 해결하다'는 의미로 쓰였으므로 (A) respond to가 가장 적절한 동의어입니다.`
                    },
                    {
                        id: "167",
                        text: "When is Mr. Hajel available to meet next week?",
                        options: [
                            { label: "A", text: "On Monday morning" },
                            { label: "B", text: "On Tuesday afternoon" },
                            { label: "C", text: "On Wednesday morning" },
                            { label: "D", text: "On Thursday afternoon" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "헤이글 씨는 다음 주 언제 만날 수 있는가?",
                        explanation: `마지막 단락에서 수요일이나 목요일 '오전 11시 전(before 11:00 A.M.)', 즉 오전에 가능하다고 했으므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 168-171: Article
            {
                id: "p7-t2-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t2-s9-p1",
                        type: "ARTICLE",
                        title: "Shipping Shortage Issues",
                        content: `SINGAPORE (August 6)—Recent international demand for freight space has been outpacing the availability of shipping containers. This container shortage has led to higher costs for goods exported from ports in Asia.\n\nSome exporters have used more expensive air-freight options, but most companies find that they have few choices. They either wait for shipping delays or raise customer prices to cover the higher cost of faster shipping. Either way, the shortage issues are likely to trigger widespread consumer dissatisfaction at some point.\n\n"We are working with business partners, investors, and government officials to discuss solutions to this problem," said Henry Loh, a spokesperson for the OET Group. "It's going to take total cooperation of all stakeholders to find a solution."\n\nNot all companies are suffering, however. For example, Fezker, the producer of athletic apparel and footwear, has been much more successful in navigating the situation. Rather than focusing on international exports to the West, Fezker has redoubled its efforts to expand its domestic and regional markets. These markets are more easily supplied by trucks and rail transportation.\n\n"We had to move quickly to ensure the shipping container shortage would not have a significant impact on our bottom line," said Nuria Loh, CEO of Fezker.`,
                        translation: `배송 중단 사태\n\n싱가포르 (8월 6일) — 최근 국제 화물 적재 공간에 대한 수요가 배송 컨테이너의 가용성을 앞지르고 있습니다. 이러한 컨테이너 부족은 아시아 항구에서 선적되는 상품의 비용 증가로 이어졌습니다.\n\n일부 수출업체들은 항공 화물이라는 더 비싼 옵션을 선택했지만, 대부분의 기업들은 선택의 여지가 없는 상황에 처해 있습니다. 그들은 배송 지연을 감수하거나 급행 배송을 위한 더 높은 비용을 감당하기 위해 고객 가격을 인상해야 합니다. 어느 쪽이든, 이러한 공급 문제는 조만간 소비자 불만을 널리 촉발할 것입니다.\n\n"저희는 이 문제의 해결책을 논의하기 위해 사업 파트너, 투자자, 그리고 정부 관계자들과 함께 일하고 있습니다."라고 OET 그룹의 대변인인 헨리 램(Henry Loh)이 말했습니다. "해결책을 찾는 데는 모든 이해 당사자들의 총체적인 협력이 필요할 것입니다."\n\n그렇다고 모든 기업이 고통받고 있는 것은 아닙니다. 예를 들어, 운동복 및 신발 생산 업체인 페즈커(Fezker)는 이 상황을 훨씬 더 잘 헤쳐나가고 있습니다. 페즈커는 서방 국가로의 수출에 집중하기보다는 국내 및 지역 시장을 확장하기 위한 노력에 박차를 가했습니다. 이러한 시장은 트럭이나 열차 운송을 통해 훨씬 더 쉽게 공급될 수 있습니다.\n\n"컨테이너 부족이 저희의 수익에 큰 영향을 미치지 않도록 신속하게 움직여야 했습니다."라고 페즈커의 CEO인 누리아 램(Nuria Loh)이 말했습니다.`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is mentioned about shipping containers?",
                        options: [
                            { label: "A", text: "They are available in various sizes." },
                            { label: "B", text: "They are currently in short supply." },
                            { label: "C", text: "They are made of several different materials." },
                            { label: "D", text: "They can be used for long-term storage." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "운송 컨테이너에 대해 언급된 것은?",
                        explanation: `첫 문장에서 국제 화물 적재 공간에 대한 수요가 컨테이너 가용성(availability)을 앞지르고 있다고 했으며, 이 컨테이너 부족(shortage)이 상품 비용 상승으로 이어졌다고 했으므로 공급이 부족한 상태임을 알 수 있습니다.`
                    },
                    {
                        id: "169",
                        text: "What does Mr. Loh say is necessary to solve the situation?",
                        options: [
                            { label: "A", text: "A sudden increase in the number of customers" },
                            { label: "B", text: "Widespread relaxation of government restrictions" },
                            { label: "C", text: "Development of a new type of technology" },
                            { label: "D", text: "Better communication between affected groups" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "램 씨는 상황을 해결하기 위해 무엇이 필요하다고 말하는가?",
                        explanation: `세 번째 단락에서 헨리 램은 이 문제의 해결책을 논의하기 위해 사업 파트너, 투자자, 정부 관계자들과 함께 일하고 있다며, 모든 이해관계자(stakeholders)의 협력이 필요하다고 했습니다. 이는 관련 집단 간의 원활한 소통과 협력을 의미합니다.`
                    },
                    {
                        id: "170",
                        text: "What type of clothing does Fezker produce?",
                        options: [
                            { label: "A", text: "Rain gear" },
                            { label: "B", text: "Sportswear" },
                            { label: "C", text: "Formal wear" },
                            { label: "D", text: "Work uniforms" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Fezker가 생산하는 의류의 종류는?",
                        explanation: `네 번째 단락의 첫 부분에서 페즈커를 '운동복 및 신발 생산 업체(producer of athletic apparel and footwear)'라고 소개했으므로 (B) Sportswear가 정답입니다.`
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"These markets are more easily supplied by trucks and rail transportation.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이 시장들은 트럭 및 열차 운송을 통해 더 쉽게 공급됩니다.\"",
                        explanation: `주어진 문장의 '이 시장들(These markets)'은 바로 앞 문장에 나오는 '국내 및 지역 시장(domestic and regional markets)'을 가리키는 것으로 보아야 흐름이 자연스럽습니다.`
                    }
                ]
            },
            // Questions 172-175: Online Chat
            {
                id: "p7-t2-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t2-s10-p1",
                        type: "CHAT_MESSAGE",
                        content: `Gary Pendell (7:40 A.M.)\nGood morning, team. Can you share the current status of your projects, please?\n\nCheng Yu (7:42 A.M.)\nI'm meeting with Nathan later today to confirm start dates for phase B of the Belleside project.\n\nRobbie Juna (7:43 A.M.)\nI am headed out to the Riverview project site now. The rain last week delayed pouring the concrete for the sidewalks. Now that things look better, I'll be doing a status check there today.\n\nGary Pendell (7:44 A.M.)\nWhen does phase B of Belleside start?\n\nCheng Yu (7:46 A.M.)\nWe plan to break ground in March and have the building completed by November.\n\nGary Pendell (7:47 A.M.)\nGood news about the March start. Our client will be happy, I'm sure.\n\nGary Pendell (7:50 A.M.)\nRobbie, after you get a feel for the situation on-site, please let Nathan know. He might be able to help with additional workers if you're behind schedule. He's our most experienced concrete finisher.\n\nRobbie Juna (7:55 A.M.)\nActually, I'm meeting Nathan at the site this morning to get his opinion on when we can pour the concrete. Everything else will be on hold until we can get that work done.\n\nGary Pendell (7:57 A.M.)\nKeep me regular updates. I don't want to rush if its too early, but we are already behind schedule on the Riverview project because of the equipment issues and the building material shipment delays.\n\nRobbie Juna (7:58 A.M.)\nWill do.`,
                        translation: `게리 펜델 (오전 7:40)\n좋은 아침입니다, 팀 여러분. 여러분의 프로젝트 현황을 공유해 주시겠습니까?\n\n청 유 (오전 7:42)\n저는 벨레사이드 프로젝트 B단계의 시작일을 확인하기 위해 오늘 늦게 네이선 씨와 만납니다.\n\n로비 주나 (오전 7:43)\n저는 지금 리버뷰 프로젝트 현장으로 가고 있습니다. 지난주에 내린 비로 인해 보도용 콘크리트 타설 작업이 지연되었습니다. 이제 상황이 나아졌으니 오늘 그곳의 상태 점검을 할 예정입니다.\n\n게리 펜델 (오전 7:44)\n벨레사이드 B단계는 언제 시작되나요?\n\n청 유 (오전 7:46)\n저희는 3월에 착공해서 11월까지 건물을 완공할 계획입니다.\n\n게리 펜델 (오전 7:47)\n3월 시작에 관한 좋은 소식이군요. 고객이 좋아할 것이라고 확신합니다.\n\n게리 펜델 (오전 7:50)\n로비 씨, 현장 상황을 파악한 후에 네이선 씨에게 알려주세요. 만약 일정이 늦어졌다면 그가 추가 근로자들을 보내 도와줄 수 있을 것입니다. 그는 저희 회사에서 가장 노련한 콘크리트 마감 작업자입니다.\n\n로비 주나 (오전 7:55)\n사실 오늘 아침 현장에서 네이선 씨를 만나 언제 콘크리트를 타설할 수 있을지 그의 의견을 구할 예정입니다. 그 작업을 마무리할 수 있을 때까지 다른 모든 업무는 보류됩니다.\n\n게리 펜델 (오전 7:57)\n계속해서 소식을 들려주세요. 너무 성급하게 서두르고 싶지는 않지만, 리버뷰 프로젝트는 이미 장비 문제와 건축 자재 배송 지연으로 인해 일정이 지연된 상태입니다.\n\n로비 주나 (오전 7:58)\n그렇게 하겠습니다.`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "In what industry do the chat participants most likely work?",
                        options: [
                            { label: "A", text: "Construction" },
                            { label: "B", text: "Energy" },
                            { label: "C", text: "Manufacturing" },
                            { label: "D", text: "Travel" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "채팅 참가자들은 어떤 업계에서 일할 것으로 보이는가?",
                        explanation: `대화에서 '현장(site)', '착공(break ground)', '건물 완공(building completed)', '콘크리트 타설(pour the concrete)', '건축 자재(building material)' 등의 표현이 반복적으로 나오는 것으로 보아 건설 업계(Construction)임을 알 수 있습니다.`
                    },
                    {
                        id: "173",
                        text: "Why did Mr. Pendell most likely initiate the chat?",
                        options: [
                            { label: "A", text: "To plan a client meeting" },
                            { label: "B", text: "To discuss a weather forecast" },
                            { label: "C", text: "To obtain an update on some work" },
                            { label: "D", text: "To change an event start time" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "펜델 씨가 채팅을 시작한 주된 이유는?",
                        explanation: `첫 번째 채팅에서 "여러분의 프로젝트 현황을 공유해 주시겠습니까?(Can you share the current status of your projects)"라며 업무 진행 상황 업데이트를 요청하며 대화를 시작했습니다.`
                    },
                    {
                        id: "174",
                        text: "What is mentioned about the Riverview project?",
                        options: [
                            { label: "A", text: "It was delayed by equipment problems." },
                            { label: "B", text: "It is being managed by Mr. Yu." },
                            { label: "C", text: "It will be completed in November." },
                            { label: "D", text: "Its customers are satisfied with progress." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "리버뷰 프로젝트에 대해 언급된 것은?",
                        explanation: `7시 57분 게리 펜델의 메시지에서 리버뷰 프로젝트가 장비 문제(equipment issues)와 자재 배송 지연으로 인해 이미 지연되었다고 명시하고 있습니다.`
                    },
                    {
                        id: "175",
                        text: "At 7:58 A.M., what does Mr. Juna most likely mean when he writes, \"Will do\"?",
                        options: [
                            { label: "A", text: "He will change a delivery time." },
                            { label: "B", text: "He will purchase additional tools." },
                            { label: "C", text: "He will hire workers to help at a site." },
                            { label: "D", text: "He will share the results of a meeting." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "오전 7:58에 주나 씨가 \"Will do\"라고 쓴 의도는?",
                        explanation: `7시 55분에 주나 씨가 현장에서 네이선 씨를 만나 콘크리트 타설 시점을 논의할 것이라고 했고, 이에 대해 펜델 씨가 "계속해서 소식을 들려달라"고 요청했습니다. 이에 대한 답변이므로 회의 결과를 공유하겠다는 의미입니다.`
                    }
                ]
            }
        ]
    },
    {
        testId: 3,
        title: "Test 3",
        sets: [
            {
                id: "p7-t3-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t3-s1-p1",
                        type: "ADVERTISEMENT",
                        title: "Medillo Shoes Celebrates Twenty Years in Cape Town!",
                        content: `246 Breda Place, Wynberg, Cape Town 7800\n021 555 0149 | www.medilloshoes.co.za\n\nDoes your job require you to stand all day long? Get the support you need! At Medillo Shoes, we specialise in comfortable, supportive footwear that is stylish and suitable for any business or medical setting.\n\nVisit us on 10 May to receive 20 percent off your purchase of one or more pairs of shoes during this anniversary event. Should you need assistance finding the best shoes for your professional needs, our footwear specialists will be on hand to help. Schedule a free consultation at www.medilloshoes.co.za to avoid a long wait.`,
                        translation: `메딜로 슈즈가 케이프타운에서 20주년을 맞이합니다!\n246 브레다 플레이스, 윈버그, 케이프타운 7800\n021 555 0149 | www.medilloshoes.co.za\n\n하루 종일 서 있어야 하는 직업을 갖고 계십니까? 필요한 도움을 받으세요! 메딜로 슈즈에서는 스타일리시하면서도 어떠한 비즈니스나 의료 환경에도 적합한 편안하고 지지력 좋은 신발을 전문으로 합니다.\n\n5월 10일에 매장을 방문해 기념일 행사 동안 한 켤레 이상의 신발을 구입하고 20퍼센트 할인을 받으세요. 직업상 필요하신 최고의 신발을 찾는 데 도움이 필요하시면 저희 신발 전문가가 도움을 드리기 위해 대기하고 있을 것입니다. 오래 기다리는 것을 피하시려면 www.medilloshoes.co.za에서 무료 상담 일정을 잡으세요.`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What will happen at Medillo Shoes on May 10?",
                        options: [
                            { label: "A", text: "All shoes will be discounted." },
                            { label: "B", text: "Shop assistants will be hired." },
                            { label: "C", text: "A shoe style will be discontinued." },
                            { label: "D", text: "Operational hours will be extended." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "5월 10일 Medillo Shoes에서 무슨 일이 일어나는가?",
                        explanation: `두 번째 단락의 첫 문장에서 5월 10일에 매장을 방문해 기념일 행사 동안 한 켤레 이상의 신발을 구입하고 20퍼센트 할인을 받으라고 했으므로 (A)가 정답입니다.`
                    },
                    {
                        id: "148",
                        text: "What is indicated about Medillo Shoes?",
                        options: [
                            { label: "A", text: "It has been in business for ten years." },
                            { label: "B", text: "It specializes in athletic footwear." },
                            { label: "C", text: "It is located next to a medical center." },
                            { label: "D", text: "It allows customers to make appointments." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "Medillo Shoes에 대해 무엇이 언급되어 있는가?",
                        explanation: `마지막 문장에서 '오래 기다리는 것을 피하려면 무료 상담 일정(Schedule a free consultation)을 잡으라'고 안내한 것으로 보아 고객들이 상담 예약을 미리 잡을 수 있다는 것을 알 수 있으므로 (D)가 정답입니다.`
                    }
                ]
            },
            // Questions 149-150: E-mail
            {
                id: "p7-t3-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t3-s2-p1",
                        type: "EMAIL",
                        content: `To: Sales Team\nFrom: Neil Cullen\nDate: 10 April\nSubject: My schedule next week\n\nDear Team,\n\nI will be out of the office next week, from 15 to 19 April, attending the conference of the National Technology Alliance in Glasgow. While away, I will check e-mail and voice mail infrequently. For any urgent matters, please contact my assistant, Christina Choo. If you have a specific question about the Ezenx Industries account, please e-mail Mya Soroka. I will be back in the office on 22 April and will see all of you then.\n\nBest,\n\nNeil Cullen, Director of Sales and Marketing\nShallok Technology`,
                        translation: `수신: 영업팀\n발신: 닐 컬런\n날짜: 4월 10일\n제목: 저의 다음 주 일정\n\n팀원 여러분,\n\n저는 다음 주 4월 15일부터 19일까지 글래스고에서 열리는 국립 기술 연맹 컨퍼런스에 참석하느라 사무실을 비울 예정입니다. 출장 중에는 이메일과 음성 메일을 자주 확인하지 못할 것입니다. 급한 일이 생기면 제 조수인 크리스티나 추가에게 연락하십시오. 에젠엑스 인더스트리스 고객사에 대한 특정 문의사항이 있을 경우 마이아 소로카에게 이메일을 보내십시오. 저는 4월 22일에 사무실로 돌아오겠으며 그때 여러분 모두 뵙겠습니다.\n\n안녕히 계십시오.\n\n닐 컬런, 영업 및 마케팅 본부장\nShallok Technology`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To register for a conference" },
                            { label: "B", text: "To announce a new account" },
                            { label: "C", text: "To schedule a meeting" },
                            { label: "D", text: "To inform colleagues of an absence" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은 무엇인가?",
                        explanation: `닐 컬런이 다음 주에 컨퍼런스 참석으로 인해 자리를 비울 것임을 알리기 위해(inform colleagues of an absence) 쓴 이메일이므로 (D)가 정답입니다.`
                    },
                    {
                        id: "150",
                        text: "What is most likely true about Ms. Soroka?",
                        options: [
                            { label: "A", text: "She will be traveling with Mr. Cullen." },
                            { label: "B", text: "She works on the Ezenx Industries account." },
                            { label: "C", text: "She is Ms. Choo's supervisor." },
                            { label: "D", text: "She will be out of the office until April 22." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Soroka에 대해 사실일 가능성이 높은 것은?",
                        explanation: `에젠엑스 인더스트리스(Ezenx Industries) 계정에 대해 특정 질문이 있으면 마이아 소로카에게 이메일을 보내라고 했으므로 그녀가 해당 계정 업무를 담당하고 있음을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 151-152: Notice
            {
                id: "p7-t3-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t3-s3-p1",
                        type: "NOTICE",
                        title: "CITY OF BRYANTON\nBuilding Permit Office",
                        content: `Notice for residents and contractors working in Bryanton\n\nBeginning on Monday, July 1, the City of Bryanton's Building Permit Office, located at 912 Fir Avenue, will be open from Monday to Thursday, 9:00 A.M. to 5:00 P.M. Applications for permits will no longer be accepted on Fridays or Saturdays. The average processing time for permit applications will remain three business days. With this change, the city will lower its operating costs while maintaining its high standards of service for residents.`,
                        translation: `브라이언톤 시\n건축 허가 사무소\n\n브라이언톤에서 일하는 주민 및 시공사를 위한 공지\n\n7월 1일 월요일부터, 퍼 가 912에 위치한 브라이언톤 시 건축 허가 사무소는 월요일부터 목요일, 오전 9시부터 오후 5시까지 문을 열 예정입니다. 금요일이나 토요일에는 더 이상 허가 신청을 받지 않습니다. 허가 신청에 걸리는 평균 처리 시간은 영업일 기준 3일로 유지됩니다. 이 변경으로 시는 주민들을 위한 높은 수준의 서비스를 유지하면서 운영 비용을 낮출 것입니다.`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "What change is the Building Permit Office making?",
                        options: [
                            { label: "A", text: "It is moving to a new location." },
                            { label: "B", text: "It is simplifying the permit application process." },
                            { label: "C", text: "It is reducing the number of days it will accept permit applications." },
                            { label: "D", text: "It is increasing the processing time for permit applications." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Building Permit Office가 하는 변경 사항은 무엇인가?",
                        explanation: `기존과 달리 금요일과 토요일에는 더 이상 신청을 받지 않는다고 했으므로, 신청을 받는 일수(number of days it will accept permit applications)를 줄이는 것이 됩니다.`
                    },
                    {
                        id: "152",
                        text: "According to the notice, why is the change being made?",
                        options: [
                            { label: "A", text: "To save the city money" },
                            { label: "B", text: "To attract more residents" },
                            { label: "C", text: "To improve the quality of service" },
                            { label: "D", text: "To decrease the number of new permit applications" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "공지에 따르면 변경이 이루어지는 이유는?",
                        explanation: `마지막 문장에서 이러한 변경을 통해 '운용 비용을 낮출 것(lower its operating costs)'이라고 명시했으므로 도시의 비용을 절감(save the city money)하기 위함임을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 153-155: Receipt
            {
                id: "p7-t3-set4",
                questionRange: "153-155",
                passages: [
                    {
                        id: "p7-t3-s4-p1",
                        type: "INFORMATION",
                        title: "Order Confirmation",
                        content: `https://www.riverthamestours.uk/order/confirmation\n\nRiver Thames Tours\nThank you for booking a River Thames tour. We are eager to welcome you aboard. Each tour lasts 3 hours. Your tour includes a luncheon served at 1:00 P.M. Please consult our Web site for our menu. To request a special meal because of dietary restrictions, please contact Myran Torpey, Customer Experience Manager at least 48 hours prior to your tour.\n\nThis reservation also entitles you to a 10 percent discount on an Epitone Walking Tour; just provide your confirmation code when booking.\n\nName: Lewis Califf\nPurchase date: 18 April\nConfirmation code: H102057\nTour start: 1 May at 11:30 A.M.\nQuantity: 4\nTotal: £180.00\nPayment: Credit card ending in 1037\n\nPlease note: Boarding ends 10 minutes before the departure time. Tours cannot be rescheduled.`,
                        translation: `https://www.riverthamestours.uk/order/confirmation\n\n템스강 투어\n저희 템스강 투어를 예약해 주셔서 감사합니다. 귀하의 승선을 열렬히 환영합니다. 각 투어는 3시간 동안 진행됩니다. 귀하의 투어에는 오후 1시에 제공되는 오찬이 포함되어 있습니다. 메뉴는 당사 웹사이트를 참고해 주십시오. 식이 제한으로 인해 특별식을 요청하시려면 적어도 투어 48시간 전에 고객 경험 관리자인 미란 토르피에게 연락 주십시오.\n\n또한 이번 예약으로 에피톤 워킹 투어의 도보 관광을 10퍼센트 할인된 가격으로 이용할 수 있는 자격이 주어지며, 예약 시 확인 코드만 제공하시면 됩니다.\n\n성명: 루이스 칼리프\n구매일: 4월 18일\n확인 코드: H102057\n투어 시작: 5월 1일 오전 11시 30분\n수량: 4\n합계: 180파운드\n결제: 1037로 끝나는 신용카드\n\n주의사항: 승선은 출발 시간 10분 전에 종료됩니다. 투어 일정은 변경될 수 없습니다.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is mentioned about the River Thames tour?",
                        options: [
                            { label: "A", text: "It lasts for one hour." },
                            { label: "B", text: "It comes with a meal." },
                            { label: "C", text: "It can be rescheduled." },
                            { label: "D", text: "It sells out quickly." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "템스강 투어에 대해 명시된 것은?",
                        explanation: `첫 번째 단락의 네 번째 문장에서 템스강 투어에는 오후 1시에 제공되는 오찬(luncheon)이 포함되어 있다고 했으므로 (B) 식사가 나온다가 정답입니다.`
                    },
                    {
                        id: "154",
                        text: "How many tickets did Mr. Califf purchase?",
                        options: [
                            { label: "A", text: "1" },
                            { label: "B", text: "3" },
                            { label: "C", "text": "4" },
                            { label: "D", "text": "7" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "칼리프 씨는 티켓을 몇 장 구매했는가?",
                        explanation: `세 번째 단락 명세 내역에 수량(Quantity)이 4라고 나와 있으므로 칼리프 씨는 티켓을 4장 구입했음을 알 수 있습니다.`
                    },
                    {
                        id: "155",
                        text: "How can a customer receive a discount on a walking tour?",
                        options: [
                            { label: "A", text: "By booking online" },
                            { label: "B", text: "By paying with a credit card" },
                            { label: "C", text: "By requesting a coupon from a captain" },
                            { label: "D", text: "By mentioning a confirmation code" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "고객은 어떻게 도보 관광 할인을 받을 수 있는가?",
                        explanation: `두 번째 단락에서 이번 예약으로 도보 관광 할인을 받을 수 있으며 예약 시 확인 코드(confirmation code)를 제공하면 된다고 했으므로 (D)가 정답입니다.`
                    }
                ]
            },
            // Questions 156-157: Text Message Chain
            {
                id: "p7-t3-set5",
                questionRange: "156-157",
                passages: [
                    {
                        id: "p7-t3-s5-p1",
                        type: "CHAT_MESSAGE",
                        content: `Michiko Sunders (8:06 A.M.)\nHi, Jacob. Are you on your way to the office?\n\nJacob Kwan (8:08 A.M.)\nYes, I'll be there in about 25 minutes.\n\nMichiko Sunders (8:10 A.M.)\nOK. I just started printing the design proposals for the Densby Group, and we've run out of paper. We don't have another delivery of it coming until Wednesday.\n\nJacob Kwan (8:12 A.M.)\nI see an office supply store across the street. It just opened.\n\nMichiko Sunders (8:13 A.M.)\nThat's perfect. Three packs of paper should be enough.\n\nJacob Kwan (8:15 A.M.)\nUnderstood. By the way, when are the representatives from the Densby Group coming to our office? I could pick up some coffee and snacks for the meeting.`,
                        translation: `미치코 슌더스 [오전 8시 6분]\n안녕하세요, 제이콥. 사무실로 오시는 중인가요?\n\n제이콥 콴 [오전 8시 8분]\n네, 25분 정도 뒤에 도착할 겁니다.\n\n미치코 슌더스 [오전 8시 10분]\n네. 덴스비 그룹을 위한 디자인 제안서를 막 인쇄하기 시작했는데, 종이가 다 떨어졌어요. 수요일이나 되어야 배송이 더 될 거예요.\n\n제이콥 콴 [오전 8시 12분]\n길 건너편에 사무용품점이 보입니다. 막 문을 열었네요.\n\n미치코 슌더스 [오전 8시 13분]\n정말 잘됐네요. 용지 세 팩이면 충분할 거예요.\n\n제이콥 콴 [오전 8시 15분]\n알겠습니다. 그런데 덴스비 그룹 직원들은 우리 사무실에 언제 오나요? 제가 회의를 위해 커피와 간식을 사 가도 될 것 같아요.`
                    }
                ],
                questions: [
                    {
                        id: "156",
                        text: "At 8:12 A.M., what does Mr. Kwan most likely mean when he writes, \"I see an office supply store across the street\"?",
                        options: [
                            { label: "A", text: "He needs directions to a building." },
                            { label: "B", text: "He can purchase some paper." },
                            { label: "C", text: "He will look for a new printer." },
                            { label: "D", text: "He will negotiate a delivery schedule." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 8시 12분에 콴 씨가 \"길 건너편에 사무용품점이 보입니다\"라고 쓴 의도는?",
                        explanation: `8시 10분에 슌더스 씨가 종이가 다 떨어졌다고 하자, 콴 씨가 사무용품점이 보인다고 응답했습니다. 이는 필요한 종이를 거기서 살 수 있다는 의미이므로 (B)가 정답입니다.`
                    },
                    {
                        id: "157",
                        text: "What event will most likely take place soon at the office?",
                        options: [
                            { label: "A", text: "A job interview" },
                            { label: "B", text: "A staff orientation" },
                            { label: "C", text: "A holiday party" },
                            { label: "D", text: "A client meeting" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "사무실에서 조만간 열릴 가능성이 높은 행사는?",
                        explanation: `콴 씨의 마지막 메시지에서 덴스비 그룹 직원들(고객사)이 언제 오는지 물으며 회의(meeting)를 위해 커피와 간식을 사가겠다고 했으므로 고객과의 회의(client meeting)가 곧 열릴 것임을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 158-160: Letter
            {
                id: "p7-t3-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t3-s6-p1",
                        type: "LETTER",
                        content: `Kipbank Business Services\n548 Sycamore Lake Road\nGreen Bay, WI 54301\n\nApril 2\n\nMadeline Omar\nFashionflower Interior Design\n1556 Deer Run Road\nGreen Bay, WI 54301\n\nDear Ms. Omar,\n\nA business owner's day is filled with juggling the wants, needs, and demands of customers, employees, and suppliers. — [1] —. Routine financial matters only add to those distractions.\n\nLet Kipbank find the right solutions for your small business so that you can focus on your products and people. Kipbank offers checking accounts, corporate credit cards, business loans, payroll, and bookkeeping services. This autumn, financial planners will also be added to our team to help you and your employees plan for your company's future.\n\nKipbank customers can take advantage of money-saving offers from selected hotel, office supply, and air travel partners with our corporate credit cards. These deals are automatically applied to qualified purchases. Furthermore, business owners can set spending limits on each card.\n\nPlease call 920-555-0122 to make an appointment or stop by at your convenience. We look forward to meeting you and providing superior service to your company.\n\nThomas Piskorksi, Kipbank Guest Concierge`,
                        translation: `킵뱅크 비즈니스 서비스\n시카모어 레이크 로 548\n그린베이, WI 54301\n\n4월 2일\n\n매들린 오마르\n패션플라워 인테리어 디자인\n디어 런 로 1556\n그린베이, WI 54301\n\n오마르 씨께,\n\n사업주의 하루는 고객, 직원 및 납품업체가 원하는 것, 필요로 하는 것, 요구하는 것들을 조율하는 일로 가득 차 있습니다. — [1] —. 일상적인 재무사항은 집중을 방해하는 요소를 더할 뿐입니다.\n\n귀하께서 귀하의 제품과 사람에 집중하실 수 있도록 킵뱅크가 귀하의 소규모 사업에 적합한 해법을 찾아 드리겠습니다. 킵뱅크는 입출금 계좌, 법인 신용카드, 사업 대출, 급여 및 부기 서비스를 제공합니다. 올가을에는 귀하와 귀하의 직원들이 귀사의 미래를 계획할 수 있도록 돕기 위해 재무 설계사들도 저희 팀에 충원될 예정입니다.\n\n킵뱅크 고객은 당사의 법인 신용카드로 엄선된 호텔, 사무용품 및 항공 여행 제휴사로부터 비용 절감 혜택을 누릴 수 있습니다. 이러한 혜택은 적격한 구매에 자동으로 적용됩니다. 또한 사업주는 각 카드에 지출 제한을 설정할 수 있습니다.\n\n920-555-0122로 전화하셔서 예약을 하시거나 편하실 때 방문해 주시기 바랍니다. 저희는 귀하를 만나 뵙고 귀사에 우수한 서비스를 제공할 수 있기를 기대합니다.\n\n토마스 피스코르크시, 킵뱅크 고객 컨시어지`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "What is indicated about Ms. Omar?",
                        options: [
                            { label: "A", text: "She is an accountant." },
                            { label: "B", text: "She works for Mr. Piskorksi." },
                            { label: "C", text: "She operates a small company." },
                            { label: "D", text: "She is a customer of Kipbank." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오마르 씨에 대해 암시된 것은?",
                        explanation: `두 번째 단락의 첫 번째 문장에서 킵뱅크가 귀하의 '소규모 사업(small business)'에 적합한 해법을 찾아주겠다고 한 것으로 보아 오마르 씨는 작은 회사를 운영하는 사업주임을 짐작할 수 있습니다.`
                    },
                    {
                        id: "159",
                        text: "What is mentioned about the credit cards?",
                        options: [
                            { label: "A", text: "They are available in a variety of colors." },
                            { label: "B", text: "They require an annual fee." },
                            { label: "C", text: "They include discounts for certain purchases." },
                            { label: "D", text: "They can be used for personal items." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_NOT_MENTIONED",
                        translation: "신용카드에 대해 언급된 것은?",
                        explanation: `세 번째 단락에서 킵뱅크 법인 신용카드로 엄선된 파트너사로부터 비용 절감 혜택(money-saving offers)을 누릴 수 있으며, 이러한 혜택은 적격한 구매에 자동으로 적용된다고 했습니다. 따라서 특정 구매에 대한 할인(discounts)이 포함되어 있다는 (C)가 정답입니다.`
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Routine financial matters only add to those distractions.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"일상적인 재무사항은 집중을 방해하는 요소를 더할 뿐입니다.\"",
                        explanation: `주어진 문장의 '일상적인 재무사항'이 업무에 방해 요소를 더한다는 의미이므로, 그 앞에는 이미 업무를 방해할 수 있는 여러 복잡한 일들이 제시되어야 합니다. [1] 바로 앞에서 고객, 직원, 납품업체의 요구를 조율하는 바쁜 상황이 설명되었으므로 [1] 위치가 가장 적절합니다.`
                    }
                ]
            },
            // Questions 161-163: Article
            {
                id: "p7-t3-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t3-s7-p1",
                        type: "ARTICLE",
                        content: `OTTAWA (22 May)—Waldenstone Business Review has added a new category to its esteemed international business awards this year. The Waldenstone Corporate Prize is awarded to a business with the foresight to develop strategies that help ensure the company's long-term viability.\n\nThis year's award was presented to Carila Corporation, a major player in the electronics sector. Under the direction of CEO Atsak Kakar, Carila Corporation went from near bankruptcy to a high level of profitability in just three years.\n\n"Winning this award was very gratifying, not just for me but for the entire company," Mr. Kakar said upon receiving the award. "Everyone has worked extremely hard to get this company back on solid financial ground. The long-term solution has brought exceptional value to our shareholders."`,
                        translation: `오타와 (5월 22일) — 월든스톤 비즈니스 리뷰는 올해 명망 높은 국제 비즈니스 상에 새로운 부문을 추가했습니다. 월든스톤 기업상은 회사의 장기적인 성공 가능성을 보장하는 데 도움이 되는 전략을 개발하는 선견지명이 있는 기업에 수여됩니다.\n\n올해의 상은 전자 제품 분야의 주요 업체인 카릴라 코퍼레이션에게 수여되었습니다. 최고 경영자인 앗사카 카카르의 지휘 아래, 카릴라 코퍼레이션은 불과 3년 만에 파산 직전에서 수익성이 매우 높은 수준으로 전환했습니다.\n\n"이 상을 수상하는 것은 저뿐만 아니라 회사 전체에 매우 기쁜 일이었습니다."라고 카카르 씨가 상을 수상하면서 말했습니다. "모두가 이 회사를 탄탄한 재정 기반으로 되돌리기 위해 무척 열심히 일했습니다. 장기적인 해결책은 우리 주주들에게 탁월한 가치를 가져다주었습니다."`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the purpose of the article?",
                        options: [
                            { label: "A", text: "To profile a newly opened business" },
                            { label: "B", text: "To analyze a trend in the electronics industry" },
                            { label: "C", text: "To highlight a company's achievements" },
                            { label: "D", text: "To discuss changes to an employment contract" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "기사의 목적은 무엇인가?",
                        explanation: `첫 번째 단락에서 월든스톤 기업상의 취지를 설명하고, 두 번째 단락에서 올해 이 상을 받은 카릴라 코퍼레이션의 성과(파산 위기 극복 및 수익성 전환)를 다루고 있으므로 (C) 기업의 성과를 강조하기 위해서가 정답입니다.`
                    },
                    {
                        id: "162",
                        text: "What is suggested about Carila Corporation?",
                        options: [
                            { label: "A", text: "It no longer develops electronics." },
                            { label: "B", text: "It was once a struggling business." },
                            { label: "C", text: "It has been unable to attract more clients." },
                            { label: "D", text: "It is seeking to replace its CEO." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Carila Corporation에 대해 무엇이 암시되는가?",
                        explanation: `두 번째 단락에서 카릴라 코퍼레이션이 불과 3년 만에 '파산 직전(near bankruptcy)'에서 수익성이 높은 수준으로 전환했다고 했으므로, 한때 어려움을 겪었던(struggling) 업체였음을 알 수 있습니다.`
                    },
                    {
                        id: "163",
                        text: "The word \"solution\" in paragraph 3, line 6, is closest in meaning to",
                        options: [
                            { label: "A", text: "mixture" },
                            { label: "B", text: "proof" },
                            { label: "C", text: "statement" },
                            { label: "D", text: "answer" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "세 번째 단락의 'solution'과 의미가 가장 가까운 것은?",
                        explanation: `장기적인 '해결책(solution)'이 주주들에게 가치를 가져다주었다는 문맥에서 solution은 문제에 대한 '해답, 해결책'을 뜻하므로 (D) answer가 가장 적절한 동의어입니다.`
                    }
                ]
            },
            // Questions 164-167: Advertisement
            {
                id: "p7-t3-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t3-s8-p1",
                        type: "ADVERTISEMENT",
                        title: "Commbolt is for Everyone!",
                        content: `As a Commbolt customer, you've come to expect the best in reliable high-speed Internet, straightforward pricing options, and top-notch customer service from friendly professionals who are responsive to your every need. — [1] —. Unlike the competition, we promise to never lock you into inflexible contracts or suddenly raise your monthly bill without notice.\n\nAt Commbolt, we know you have options when it comes to choosing an Internet service provider. — [2] —. To show our gratitude for your loyalty, we are offering a special limited-time referral bonus.\n\nThe way it works is simple. — [3] —. You can use e-mail, social media, or even text messages to tell everyone about Commbolt. When a new user signs up using your code, each of you will receive a monetary credit. Receive $10 when new referrals sign up for a monthly plan, and receive $20 for a plan costing $60 per month. The best news? — [4] —. There is no limit to the credits; the more people you sign up, the more money you get.\n\nYour unique code is XA4R177.`,
                        translation: `모두를 위한 콤볼트!\n\n콤볼트 고객으로서 고객님은 안정적인 초고속 인터넷, 명확한 가격 옵션 그리고 모든 요구에 즉각 대응하는 친절한 전문가의 우수한 고객 서비스에 있어 최고를 기대하고 계실 것입니다. — [1] —. 경쟁사와 달리 저희는 고객님을 절대 유동성 없는 약정에 가두거나 예고 없이 갑자기 월간 청구 요금을 올리지 않을 것을 약속합니다.\n\n콤볼트에서는 인터넷 서비스 공급업체를 고르는 데 있어 여러분께 선택권이 있다는 점을 잘 알고 있습니다. — [2] —. 고객님의 애정에 보답하고자 저희는 이번에 한시적인 추천 보너스를 제공하고 있습니다.\n\n추천 방식은 간단합니다. — [3] —. 고유 추천 코드를 친구 및 가족들과 공유하세요. 이메일, 소셜 미디어 또는 문자 메시지를 사용하여 모두에게 콤볼트에 대해 알리면 됩니다. 새로운 사용자가 고객님의 코드를 사용하여 가입하면 고객님과 신규 가입자는 각각 현금 적립금을 받게 됩니다. 신규 추천인이 월 요금제에 가입하면 10달러를 받고, 월 60달러 요금제 가입 시에는 20달러를 받으세요. 가장 좋은 소식은요? — [4] —. 적립금 한도가 없으므로 더 많은 사람을 가입시킬수록 더 많은 금액을 받게 됩니다.\n\n고객님의 고유 코드는 XA4R177입니다.`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What Commbolt benefit does the advertisement mention?",
                        options: [
                            { label: "A", text: "Its low prices" },
                            { label: "B", text: "Its excellent customer service" },
                            { label: "C", text: "Its lifetime contracts" },
                            { label: "D", text: "Its convenient installation schedule" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "광고에서 언급된 Commbolt의 장점은?",
                        explanation: `첫 번째 단락의 첫 문장에서 콤볼트 고객으로서 '친절한 전문가의 우수한 고객 서비스(top-notch customer service)'에 있어 최고를 기대할 것이라고 했으므로 (B) 우수한 고객 서비스(excellent customer service)가 정답입니다.`
                    },
                    {
                        id: "165",
                        text: "What is the maximum amount a customer can receive for one referral who signs up for a service?",
                        options: [
                            { label: "A", text: "$10" },
                            { label: "B", text: "$20" },
                            { label: "C", text: "$45" },
                            { label: "D", text: "$60" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "추천받은 사람 한 명이 서비스에 가입할 경우 고객이 받을 수 있는 최대 금액은?",
                        explanation: `세 번째 단락에서 신규 추천인이 일반 월 요금제에 가입하면 10달러를 받고, 월 60달러 요금제 가입 시에는 20달러를 받는다고 했습니다. 따라서 추천인 한 명에 대해 받을 수 있는 최대 금액은 20달러인 (B)가 정답입니다.`
                    },
                    {
                        id: "166",
                        text: "What is true about the Commbolt promotion?",
                        options: [
                            { label: "A", text: "It may not be posted on social media." },
                            { label: "B", text: "It does not provide credits for more than three referrals." },
                            { label: "C", text: "It is expected to last all year." },
                            { label: "D", text: "It rewards both new and existing customers." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_NOT_MENTIONED",
                        translation: "콤볼트 판촉 행사에 대해 사실인 것은?",
                        explanation: `세 번째 단락에서 새로운 사용자가 고객님의 코드를 사용하여 가입하면 '고객(기존 고객)과 신규 가입자는 각각 현금 적립금을 받게 된다'고 했으므로 신규 및 기존 고객 모두에게 혜택을 준다는 (D)가 정답입니다.`
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Share your unique referral code with your friends and family.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"고유 추천 코드를 친구 및 가족들과 공유하세요.\"",
                        explanation: `주어진 문장은 추천 코드를 공유하라는 구체적인 행동 방법입니다. [3] 앞의 "추천 방식은 간단합니다(The way it works is simple)"라는 문장 뒤에서 구체적인 방법을 설명하는 문장으로 자연스럽게 이어지므로 [3] 위치가 가장 적절합니다.`
                    }
                ]
            },
            // Questions 168-171: Web page
            {
                id: "p7-t3-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t3-s9-p1",
                        type: "INFORMATION",
                        title: "Sarah's Catering Website",
                        content: `https://www.sarahscatering.com\n\nSarah's Catering—Because what you serve matters\n\nSarah's Catering is a family-owned and operated company. The company was founded ten years ago with a mission to provide the highest-quality catering services to our community. We work closely with local growers and use only the freshest ingredients. Menu items can be adapted to any client's taste or dietary requirements. For example, we can prepare vegetarian, vegan, and gluten-free options.\n\nWe provide catering for birthday parties, wedding receptions, corporate meetings, company holiday parties, and many other types of events. From planning the menu and food preparation to engaging servers and cleanup staff for the event, Sarah's Catering has it covered.\n\nSarah's Catering can cater a lunch for a minimum of 20 people at a customer's work site. We provide delicious options to ensure a group's dining experience is a satisfying one.\n\nWe are here to serve you! Ordering is fast and simple. For a cost estimate for your next event, visit www.sarahscatering.com/quote.\n\nWhat people are saying\n"Sarah's Catering was very easy to work with and the food was delicious! Everyone in the office had something to say about how good the food was." — Glen Liu, Pierce Real Estate\n\n"Every dish was perfect, and the staff were top-notch." — Annie Pierce, Kanai Marketing, Inc.`,
                        translation: `https://www.sarahscatering.com\n\n사라스 케이터링 — 어떤 음식을 제공하는지가 중요합니다\n\n사라스 케이터링은 가족이 소유하고 운영하는 회사입니다. 회사는 10년 전 우리 지역에 최고 품질의 출장 요리 서비스를 제공한다는 사명 하에 설립되었습니다. 저희는 지역 재배자들과 긴밀히 협력하며 가장 신선한 재료만을 사용합니다. 메뉴 항목은 고객의 취향이나 식이 요구에 맞게 조정될 수 있습니다. 예를 들어, 채식주의자와 비건, 글루텐 프리 옵션을 준비할 수 있습니다.\n\n우리는 생일 파티, 결혼 피로연, 기업 회의, 회사 연말 파티 그리고 기타 다양한 행사를 위한 출장 요리를 제공합니다. 메뉴 계획과 음식 준비에서부터 행사를 위한 서빙 종업원과 청소 직원 동원에 이르기까지, 사라스 케이터링이 모두 처리해 드립니다.\n\n사라스 케이터링은 고객 근무지에서 최소 인원 20명부터 점심 식사 제공이 가능합니다. 우리는 단체 고객의 식사가 만족스러운 경험이 되도록 맛있는 옵션을 제공합니다.\n\n귀하께 음식을 제공하기 위해 우리가 여기 있습니다! 주문은 빠르고 간편합니다. 다음 행사에 대한 비용 견적을 요청하려면 www.sarahscatering.com/quote를 방문하세요.\n\n사람들의 평가\n"사라스 케이터링은 함께 일을 진행하기에 매우 수월했고 음식도 맛있었습니다! 사무실에 있는 이들 모두가 음식이 얼마나 좋았는지에 대해 한마디씩 했습니다." — 글렌 리우, 피어스 부동산\n\n"모든 음식이 완벽했고 직원들도 최고였어요." — 애니 피어스, 카나이 마케팅 주식회사`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is mentioned about Sarah's Catering?",
                        options: [
                            { label: "A", text: "It uses locally sourced products." },
                            { label: "B", text: "It has been in business for twenty years." },
                            { label: "C", text: "It specializes in wedding receptions." },
                            { label: "D", text: "It is located on-site in a dining room." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "사라스 케이터링에 대해 명시된 것은?",
                        explanation: `첫 번째 단락의 세 번째 문장에서 사라스 케이터링은 '지역 재배자들과 긴밀히 협력하며(work closely with local growers)' 가장 신선한 재료를 사용한다고 했으므로 현지에서 조달한 제품을 사용한다는 (A)가 정답입니다.`
                    },
                    {
                        id: "169",
                        text: "In the first paragraph, the word \"taste\" is closest in meaning to",
                        options: [
                            { label: "A", text: "preference" },
                            { label: "B", text: "sample" },
                            { label: "C", text: "experience" },
                            { label: "D", text: "flavor" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_VOCABULARY",
                        translation: "첫 번째 단락의 'taste'와 의미가 가장 가까운 단어는?",
                        explanation: `문맥상 고객의 '취향', 즉 고객이 선호하는 것(preference)이라는 뜻으로 쓰였으므로 (A)가 정답입니다.`
                    },
                    {
                        id: "170",
                        text: "What service is mentioned as being provided by Sarah's Catering?",
                        options: [
                            { label: "A", text: "Entertainment planning" },
                            { label: "B", text: "Cooking demonstrations" },
                            { label: "C", text: "Post-event cleanup" },
                            { label: "D", text: "Table and chair rentals" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_NOT_MENTIONED",
                        translation: "사라스 케이터링에 의해 제공되는 서비스로 언급된 것은?",
                        explanation: `두 번째 단락의 두 번째 문장에서 메뉴 계획과 음식 준비뿐만 아니라 행사를 위한 '청소 직원(cleanup staff)' 동원까지 모두 처리한다고 했으므로 (C) 식후 청소가 정답입니다.`
                    },
                    {
                        id: "171",
                        text: "Who most likely is Mr. Liu?",
                        options: [
                            { label: "A", text: "A staff member at Sarah's Catering" },
                            { label: "B", text: "A professional event organizer" },
                            { label: "C", text: "A customer of Sarah's Catering" },
                            { label: "D", text: "An assistant at a marketing firm" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "리우 씨는 누구일 것 같은가?",
                        explanation: `'사람들의 평가'에서 글렌 리우 씨가 사라스 케이터링과 함께 일하는 것이 수월했고 음식이 맛있었다고 언급한 것으로 보아 사라스 케이터링을 이용했던 고객님임을 알 수 있어 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 172-175: Online Chat
            {
                id: "p7-t3-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t3-s10-p1",
                        type: "CHAT_MESSAGE",
                        content: `Marcus Stuber (10:41 A.M.)\nAre we still planning to have the author video conference today? I haven't yet received a meeting invitation.\n\nBrenda Rajan (10:42 A.M.)\nI have it on my calendar. Let me forward it to you. Our editorial assistant must have missed you.\n\nMarcus Stuber (10:43 A.M.)\nThanks. I just received it. However, the time slot doesn't work for me. I have an appointment to discuss printing issues at our Singapore plant with Hazel Luyong.\n\nBrenda Rajan (10:44 A.M.)\nCould you postpone that? The new author really needs your guidance on the final book design and formatting. You are our most knowledgeable production editor.\n\nMarcus Stuber (10:45 A.M.)\nLet me check with my supervisor. I'll add Mr. Vogl to this chat.\n\nJoshua Vogl (10:47 A.M.)\nHello, team. Marcus, you should prioritize your appointment with Hazel. I am visiting the plant next week and need a viable solution by then.\n\nBrenda Rajan (10:48 A.M.)\nUnderstood. In that case, I will contact Ms. Benoit to find out if she can meet later in the day then.\n\nMarcus Stuber (10:49 A.M.)\nThat would work for me. I am free between 4:00 and 6:00 P.M.`,
                        translation: `마커스 스투버 [오전 10시 41분]\n오늘 작가 화상 회의를 여전히 할 계획인가요? 제가 아직 회의 초대를 받지 못했어요.\n\n브렌다 라잔 [오전 10시 42분]\n제 일정표에는 회의가 있어요. 전달해 드릴게요. 우리 편집 보조가 당신을 빠트린 것 같네요.\n\n마커스 스투버 [오전 10시 43분]\n감사합니다. 방금 받았어요. 그런데 저는 시간대가 안 맞는데요. 헤이즐 루영과 싱가포르 공장의 인쇄 문제를 논의하기로 약속이 되어 있어요.\n\n브렌다 라잔 [오전 10시 44분]\n그걸 연기하실 수 있을까요? 우리와 함께 일할 새 작가는 최종 책 디자인과 서식 설정에 관해 당신의 도움이 절실해요. 당신이 우리 중 가장 박식한 제작 편집자이시잖아요.\n\n마커스 스투버 [오전 10시 45분]\n제 상관에게 확인해 볼게요. 보그 씨를 우리 채팅에 추가하겠습니다.\n\n조슈아 보그 [오전 10시 47분]\n안녕하세요, 팀 여러분. 마커스, 헤이즐과의 일정을 우선적으로 처리해야 합니다. 제가 다음 주에 공장을 방문할 예정이라 그전에 실행 가능한 해결책이 필요합니다.\n\n브렌다 라잔 [오전 10시 48분]\n알겠습니다. 그럼 제가 베노이트 씨에게 연락해서 그날 늦게 만날 수 있는지 알아보겠습니다.\n\n마커스 스투버 [오전 10시 49분]\n그러면 될 것 같아요. 저는 오후 4시에서 6시 사이에 시간이 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "Why does Mr. Stuber write to Ms. Rajan?",
                        options: [
                            { label: "A", text: "To invite her to a professional event" },
                            { label: "B", text: "To check on the status of a meeting" },
                            { label: "C", text: "To make travel plans for a business trip" },
                            { label: "D", text: "To ask about an assistant's performance" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "스투버 씨가 라잔 씨에게 메시지를 쓴 이유는?",
                        explanation: `10시 41분에 스투버 씨가 오늘 작가 화상 회의를 여전히 할 계획인지 묻고, 회의 초대를 받지 못했다는 점을 언급하며 회의 진행 여부를 확인하고 있으므로 (B) 회의 진행 상태를 확인하려고가 정답입니다.`
                    },
                    {
                        id: "173",
                        text: "At 10:45 A.M., what does Mr. Stuber most likely mean when he writes, \"Let me check with my supervisor\"?",
                        options: [
                            { label: "A", text: "He needs final approval on a book design." },
                            { label: "B", text: "He wants advice about changing an appointment." },
                            { label: "C", text: "He needs access to the corporate calendar." },
                            { label: "D", text: "He is uncertain how to add people to a chat." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 10시 45분에 스투버 씨가 \"제 상관에게 확인해 볼게요\"라고 쓴 의도는?",
                        explanation: `10시 43분에 스투버 씨가 헤이즐 루영과의 인쇄 문제 논의 약속이 있다고 하자, 10시 44분에 라잔 씨가 그 일정을 연기할 수 있는지 물었습니다. 이에 10시 45분에 스투버 씨가 상관에게 확인해 보겠다고 한 것은 기존 약속을 변경해도 되는지 문의하겠다는 의도이므로 (B)가 정답입니다.`
                    },
                    {
                        id: "174",
                        text: "Who most likely is Ms. Benoit?",
                        options: [
                            { label: "A", text: "A writer" },
                            { label: "B", text: "A designer" },
                            { label: "C", text: "A production editor" },
                            { label: "D", text: "A printing plant manager" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "베노이트 씨는 누구일 것 같은가?",
                        explanation: `라잔 씨가 "우리와 함께 일할 새 작가(the new author)는 당신의 도움이 절실하다"고 했고, 이후 상관인 보그 씨의 결정에 따라 라잔 씨가 "그럼 베노이트 씨에게 연락해서 늦게 만날 수 있는지 알아보겠다"고 했습니다. 따라서 베노이트 씨는 이들이 언급한 '새 작가'임을 추론할 수 있어 (A) 작가가 정답입니다.`
                    },
                    {
                        id: "175",
                        text: "What will Ms. Rajan most likely do next?",
                        options: [
                            { label: "A", text: "Propose a solution to a printing problem" },
                            { label: "B", text: "Prepare to visit the Singapore plant" },
                            { label: "C", text: "Attend a meeting with Mr. Vogl" },
                            { label: "D", text: "Reschedule a video conference" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "라잔 씨는 다음에 무엇을 할 것 같은가?",
                        explanation: `라잔 씨가 마지막 메시지(10시 48분)에서 베노이트 씨에게 연락해 시간을 조정해보겠다고 했으므로 (D) 화상 회의 일정 변경(Reschedule a video conference)이 정답입니다.`
                    }
                ]
            }
        ]
    },
    {
        testId: 4,
        title: "Test 4",
        sets: [
            // Questions 147-148: Receipt
            {
                id: "p7-t4-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t4-s1-p1",
                        type: "FORM",
                        title: "Receipt",
                        content: `Zippy Petrol Mart\nM64 Motorway\nLeicester\n0113 4960423\n23 May\n\nBiscuits          £2.00\nFruit cup         £0.95\nCrisps            £1.10\nVAT               £0.81\nInclusive\n\nTotal             £4.86\n\nSign up for our Zippy Club rewards card.\nYou could have earned 4 Zippy Club points on this transaction.\nPoints can be used for discounted merchandise, car products,\nphone accessories, and more!`,
                        translation: `지피 페트롤 마트\nM64 고속도로\n레스터\n0113 4960423\n5월 23일\n\n비스킷          2파운드\n과일 컵         0.95파운드\n감자칩          1.1파운드\n부가 가치세     0.81파운드\n포함\n\n총              4.86파운드\n\n저희 지피 클럽 리워드 카드에 가입하세요.\n이 거래에 대해 지피 클럽 포인트 4점을 받을 수 있었습니다.\n포인트는 할인 상품, 자동차 제품, 휴대폰 액세서리 등에 사용할 수 있습니다!`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What was purchased on May 23?",
                        options: [
                            { label: "A", text: "Fuel" },
                            { label: "B", text: "Snacks" },
                            { label: "C", text: "Auto parts" },
                            { label: "D", text: "Phone accessories" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "5월 23일에 구입된 물건은?",
                        explanation: `영수증 상단에 있는 발행일이 5월 23일(23 May)이고, 중반부에 나열된 구입 품목이 비스킷(Biscuits), 과일 컵(Fruit cup), 감자칩(Crisps)이므로 (B) 간식(Snacks)이 정답입니다.`
                    },
                    {
                        id: "148",
                        text: "What does the receipt indicate about Zippy Petrol Mart?",
                        options: [
                            { label: "A", text: "It has multiple locations." },
                            { label: "B", text: "It accepts most major credit cards." },
                            { label: "C", text: "It has a customer rewards program." },
                            { label: "D", text: "It reduced the prices of all its merchandise." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "영수증에서 지피 페트롤 마트에 대해 명시하는 것은?",
                        explanation: `영수증 하단에 지피 클럽 리워드 카드에 가입하라(Sign up for our Zippy Club rewards card)고 하면서 이 거래에 대해 포인트를 받을 수 있다고 했으므로 고객 보상 프로그램을 운영하고 있음을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 149-150: Notice
            {
                id: "p7-t4-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t4-s1-p1",
                        type: "NOTICE",
                        title: "Coming Soon: The Best of PBQ Radio",
                        content: `During the week of April 21–27, PBQ Radio will be hosting a best-of-the-decade program. The most popular tunes by recording artists from the past decade will be played all day long. Both well-known and lesser-known recording artists will be featured. We plan to showcase each artist's top works.\n\nIn addition to featuring the best music of the decade, we would like to highlight our region's businesses. Advertising time is available for purchase. Let your listeners know that your business is one of the best in the community! You can request a shout-out for your company from a program host, or our professional marketing team can write and record a 30-second advertisement.\n\nVisit www.pbqradio.com/advertise for details and pricing.`,
                        translation: `곧 만나요: 최고의 PBQ 라디오\n\n4월 21일부터 27일까지 일주일 동안 PBQ 라디오는 10년 중 최고의 프로그램을 진행할 예정입니다. 지난 10년간 리코딩 아티스트들의 가장 인기 있었던 곡들이 하루 종일 흘러나올 것입니다. 잘 알려진 리코딩 아티스트와 잘 알려지지 않은 리코딩 아티스트들이 모두 포함됩니다. 각 아티스트의 최고 작품들을 선보일 계획입니다.\n\n10년 동안의 최고의 음악을 특집으로 다루는 것 외에도, 우리는 우리 지역 업체들도 집중 조명하고 싶습니다. 광고 시간을 구입하실 수 있습니다. 청취자들에게 귀하의 업체가 지역에서 최고 중 하나라는 것을 알리세요! 프로그램 진행자에게 귀사를 언급해 줄 것을 요청하거나, 우리의 전문 마케팅 팀이 30초짜리 광고를 작성하고 녹음할 수 있습니다.\n\n세부사항 및 가격은 www.pbqradio.com/advertise를 참조하세요.`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "For whom most likely was the notice written?",
                        options: [
                            { label: "A", text: "Radio-show hosts" },
                            { label: "B", text: "New recording artists" },
                            { label: "C", text: "Business owners" },
                            { label: "D", text: "Sound technicians" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "공지는 누구를 대상으로 작성되었을 것 같은가?",
                        explanation: `두 번째 단락의 첫 문장에서 지역 업체들도 집중 조명하고 싶다(highlight our region's businesses)고 했고, 광고 시간을 구입할 수 있다고 한 것으로 보아 지역에서 업체를 운영하고 있는 사업주들이 대상임을 알 수 있습니다.`
                    },
                    {
                        id: "150",
                        text: "What is true about PBQ Radio?",
                        options: [
                            { label: "A", text: "It has been in business for ten years." },
                            { label: "B", text: "It is looking for experienced musicians." },
                            { label: "C", text: "It was voted the best station in the community." },
                            { label: "D", text: "It has its own marketing department." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "PBQ 라디오에 대해 사실인 것은?",
                        explanation: `두 번째 단락의 마지막 문장에서 자신들의 전문 마케팅 팀이 30초짜리 광고를 작성하고 녹음할 수 있다고 했으므로 자체 마케팅 부서를 가지고 있음을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 151-152: Text Message Chain
            {
                id: "p7-t4-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t4-s3-p1",
                        type: "CHAT_MESSAGE",
                        content: `Frank Jabati [11:12 A.M.]\nHi, Maxine. I'm running late with this delivery today. Could you contact Ms. Dibello to let her know?\n\nMaxine Larsen [11:13 A.M.]\nSure! I know that she is eager to get those new items. She says she needs to set up her kitchen properly so that she can prepare a special meal tonight. What time do you think you will arrive there?\n\nFrank Jabati [11:15 A.M.]\nI'm not sure—the road I was taking was closed for repairs. The detour road has heavy traffic.\n\nMaxine Larsen [11:17 A.M.]\nSorry to hear that. What's your estimate?\n\nFrank Jabati [11:19 A.M.]\nMaybe around 1 P.M.\n\nMaxine Larsen [11:20 A.M.]\nOK, great. I will get in touch with Ms. Dibello to confirm that she will be home at that time. Then I'll get back to you.\n\nFrank Jabati [11:22 A.M.]\nThanks!`,
                        translation: `프랭크 자바티 [오전 11시 12분]\n안녕하세요, 맥신. 오늘 이 배달 건이 늦어지고 있습니다. 디벨로 씨에게 연락해서 알려 주시겠습니까?\n\n맥신 라르센 [오전 11시 13분]\n물론이죠! 그녀가 그 새 제품들을 간절히 기다리고 있다는 것을 알고 있어요. 오늘 밤 특별한 식사를 준비할 수 있도록 부엌을 제대로 갖춰 놓아야 한다고 합니다. 거기에 몇 시쯤 도착할 것 같습니까?\n\n프랭크 자바티 [오전 11시 15분]\n잘 모르겠습니다. 제가 가던 길이 정비 작업으로 폐쇄되었습니다. 우회로는 교통량이 많네요.\n\n맥신 라르센 [오전 11시 17분]\n유감이네요. 어느 정도로 예상하시나요?\n\n프랭크 자바티 [오전 11시 19분]\n아마 오후 1시경으로요.\n\n맥신 라르센 [오전 11시 20분]\n네, 좋습니다. 제가 디벨로 씨에게 연락해서 그 시간에 집에 있을 것인지 확인하겠습니다. 그런 다음 다시 연락드리겠습니다.\n\n프랭크 자바티 [오전 11시 22분]\n감사합니다!`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "What most likely has Ms. Dibello purchased?",
                        options: [
                            { label: "A", text: "Linens" },
                            { label: "B", text: "Bookshelves" },
                            { label: "C", text: "Gardening tools" },
                            { label: "D", text: "Appliances" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "디벨로 씨가 구입했을 것 같은 물건은?",
                        explanation: `라르센 씨가 그녀가 오늘 밤 특별한 식사를 준비할 수 있도록 부엌을 제대로 갖춰 놓아야 한다고 말한 것으로 보아, 디벨로 씨가 식사를 준비하는 데 사용하는 가전제품(appliances)을 구입했음을 짐작할 수 있습니다.`
                    },
                    {
                        id: "152",
                        text: "At 11:17 A.M., what does Ms. Larsen most likely mean when he writes, \"What's your estimate\"?",
                        options: [
                            { label: "A", text: "She must verify the distance of a route." },
                            { label: "B", text: "She wants to know how much traffic there is." },
                            { label: "C", text: "She wants to know a delivery time." },
                            { label: "D", text: "She has to calculate a delivery charge." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오전 11시 17분에 라르센 씨가 \"어느 정도로 예상하시나요?\"라고 쓴 의도는?",
                        explanation: `자바티 씨가 정비 작업으로 길이 폐쇄되어 우회로를 이용 중이며 교통 체증이 있다고 보고하자, 라르센 씨가 그에게 도착 예상 시간을 확인하려는 의도로 물은 것이므로 (C) 배송 시간을 알고 싶다가 정답입니다.`
                    }
                ]
            },
            // Questions 153-154: E-mail
            {
                id: "p7-t4-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t4-s4-p1",
                        type: "EMAIL",
                        content: `To: Janet Hubschmann\nFrom: customerservice@readymadeofficesupplies.net\nDate: September 3\nSubject: Thank you\n\nDear Ms. Hubschmann,\n\nWe here at Readymade Office Supplies are excited to welcome you to our Customers Count rewards program. Your account number 41120 is now registered.\n\nBe sure to enter your account number to earn points on all your purchases from our Web site. You will earn one point for every dollar you spend on qualifying purchases. Redeem your points on your account page for rewards, including free two-day expedited shipping, special discounts, and more. You can still order via mail from our print catalog, over the telephone from one of our helpful representatives, or by visiting our retail locations across the United States and Canada. However, those purchases do not currently qualify for the rewards program.\n\nHave questions? Please visit https://www.readymadeofficesupplies.net/customerservice.`,
                        translation: `수신: 자넷 허쉬만\n발신: customerservice@readymadeofficesupplies.net\n날짜: 9월 3일\n제목: 감사합니다\n\n허쉬만 씨께,\n\n레디메이드 사무용품의 커스터머스 카운트 보상 프로그램에 가입하신 것을 환영합니다. 고객님의 계정 번호 1120이 등록되었습니다.\n\n저희 웹사이트에서 구매하는 모든 제품에 대해 포인트를 받으시려면 반드시 계정 번호를 입력해 주십시오. 조건이 충족되는 구매에 대해 지불하는 1달러당 1포인트를 받게 됩니다. 계정 페이지에 있는 포인트를 무료 2일 신속 배송, 특별 할인 등을 포함한 보상으로 교환하십시오. 귀하께서는 여전히 인쇄 카탈로그에서 우편으로 주문하시거나 직원의 도움을 받아 전화로 주문하시거나 미국과 캐나다 전역의 소매점을 방문하셔서 주문하실 수 있습니다. 그러나 이러한 구매는 현재 보상 프로그램에 적용되지 않습니다.\n\n질문이 있으십니까? https://www.readymadeofficesupplies.net/customerservice를 방문하십시오.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What types of purchases earn reward points?",
                        options: [
                            { label: "A", text: "Those made online" },
                            { label: "B", text: "Those made by mail" },
                            { label: "C", text: "Those made by phone" },
                            { label: "D", text: "Those made in a store" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "어떤 종류의 구매가 리워드 포인트를 받는가?",
                        explanation: `두 번째 단락의 첫 문장에서 웹사이트에서 구매하는 모든 제품에 대해 포인트를 받으려면 반드시 계정 번호를 입력해 달라고 했고, 우편 주문, 전화 주문, 소매점 방문 구매 등은 리워드 프로그램에 적용되지 않는다고 했으므로 (A) 온라인 구매가 정답입니다.`
                    },
                    {
                        id: "154",
                        text: "What is a benefit of the program?",
                        options: [
                            { label: "A", text: "Invitations to retail events" },
                            { label: "B", text: "Free samples" },
                            { label: "C", text: "Faster shipping" },
                            { label: "D", text: "Extended product warranties" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "프로그램의 혜택은?",
                        explanation: `두 번째 단락의 세 번째 문장에서 포인트를 '무료 2일 신속 배송(free two-day expedited shipping)', 특별 할인 등으로 교환할 수 있다고 했으므로 (C) 더 빠른 배송이 정답입니다.`
                    }
                ]
            },
            // Questions 155-157: Letter
            {
                id: "p7-t4-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t4-s5-p1",
                        type: "LETTER",
                        content: `Native Plant Society Headquarters\n161 Sussex Street\nSydney, NSW 2001\n\n15 April\n\nYasmine Harabi\n247 Kooljak Road\nPerth, Western Australia 6280\n\nMembership number 4290\n\nDear Ms. Harabi,\n\nThank you for your continued support as a society member. Given your recent move, your membership has been transferred to the chapter located in the city of Perth. We will be mailing a replacement member identification card within a few days.\n\nUnlike the chapter in the city of Canberra, the Perth branch meets the first Saturday of every month, so your next meeting will be in three weeks. If you have any questions, please contact us weekdays between 8:00 a.m. and 4:00 p.m. at (08) 5555 0145.\n\nSincerely,\nLeticia Davis\nLeticia Davis\nMembership Department`,
                        translation: `자생 식물 협회 본부\n161 서섹스 가\n시드니, NSW 2001\n\n4월 15일\n\n야스민 하라비\n247 쿨작 로드\n퍼스, 서부 오스트레일리아 6280\n\n회원번호 4290\n\n하라비 씨께,\n\n협회 회원으로서 지속적인 지원에 감사드립니다. 귀하의 최근 이사로, 귀하의 회원권이 퍼스 시에 위치한 지부로 이전되었습니다. 며칠 내로 대체 회원 카드를 우편으로 보내 드리겠습니다.\n\n캔버라 시 지부와는 달리 퍼스 지부는 매월 첫째 주 토요일에 모이므로 다음 회의는 3주 후가 될 것입니다. 질문이 있으시면 평일 오전 8시부터 오후 4시 사이에 (08) 5555 0145로 연락 주십시오.\n\n회원 관리 부서\n레티샤 데이비스`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What is the purpose of the letter?",
                        options: [
                            { label: "A", text: "To announce a special event" },
                            { label: "B", text: "To explain changes based on a relocation" },
                            { label: "C", text: "To propose a new meeting time" },
                            { label: "D", text: "To request updated contact information" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "편지의 목적은 무엇인가?",
                        explanation: `두 번째 문장에서 하라비 씨의 '최근 이사(recent move)'로 회원권이 퍼스 지부로 이전되었다고 했으므로, 이사로 인한 회원권 관련 변경 사항을 안내하기 위한 (B)가 정답입니다.`
                    },
                    {
                        id: "156",
                        text: "What is suggested about the city of Canberra?",
                        options: [
                            { label: "A", text: "It is famous for its many gardens." },
                            { label: "B", text: "It houses the headquarters of Ms. Davis' organization." },
                            { label: "C", text: "It is where Ms. Harabi previously lived." },
                            { label: "D", text: "It is home to some of Australia's rarest plants." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "캔버라 시에 대해 무엇이 암시되는가?",
                        explanation: `두 번째 단락 첫 문장에서 '캔버라 시 지부와는 달리' 퍼스 지부는 매월 첫째 토요일에 모인다는 표현에서, 하라비 씨가 이전에는 캔버라 지부 소속이었으며 그곳에 살았음을 유추할 수 있습니다.`
                    },
                    {
                        id: "157",
                        text: "What can be concluded about the Native Plant Society?",
                        options: [
                            { label: "A", text: "It is under new leadership." },
                            { label: "B", text: "Its membership is growing." },
                            { label: "C", text: "It is raising membership dues." },
                            { label: "D", text: "Its chapters hold monthly meetings." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "자생 식물 협회에 대해 결론지을 수 있는 것은?",
                        explanation: `퍼스 지부가 매월 첫째 주 토요일에 모인다는 내용과 캔버라 지부를 대조하는 내용으로 보아 협회의 지부들이 매달 회의를 연다는 것을 알 수 있으므로 (D)가 정답입니다.`
                    }
                ]
            },
            // Questions 158-160: Web page
            {
                id: "p7-t4-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t4-s6-p1",
                        type: "ARTICLE",
                        title: "Web Page",
                        content: `https://www.greenroofplus.com\n\nWhat Are Green Roofs?\n\nGreen roofs are an energy-saving option for office buildings and homes. A green roof is one that's covered with grasses, flowers, or other plants. It lowers heating and cooling costs while increasing a structure's aesthetic appeal. This Web site is designed for sharing ideas, photos, and resources to create and maintain a green roof.\n\nPlanting a rooftop garden is a rewarding do-it-yourself project, but special waterproofing and other preparations require the services of an experienced contractor. Costs vary widely by region, roof size, and complexity of the garden you want to create. Be sure to get estimates from at least two contractors.\n\nIf your contractor determines that your roof can handle the extra weight of soil, plants, and irrigation, ask about the project's timeline. Small, simple rooftop gardens may take only one week to complete.`,
                        translation: `https://www.greenroofplus.com\n\n녹식 지붕이란 무엇인가요?\n\n녹색 지붕은 사무실 건물과 주택을 위한 에너지 절약 옵션입니다. 녹색 지붕은 잔디, 화초 또는 기타 식물들로 덮인 지붕입니다. 이것은 건축물의 미적 매력을 높이는 동시에 냉난방 비용을 낮춰 줍니다. 이 웹사이트는 녹색 지붕을 만들고 유지하기 위한 아이디어, 사진 그리고 자료를 공유하기 위해 고안되었습니다.\n\n옥상 정원을 꾸미는 일은 자신이 직접 하는 보람 있는 프로젝트이지만, 특수 방수 처리 및 기타 준비 작업에는 숙련된 시공사의 서비스가 필요합니다. 비용은 지역, 지붕 크기, 조성하고자 하는 정원의 복잡성에 따라 크게 달라집니다. 최소 두 곳의 시공사로부터 견적을 받도록 하십시오.\n\n시공사가 지붕이 흙, 식물 및 관개 시설의 추가 중량을 견딜 수 있다고 확정하면, 프로젝트의 일정에 대해 문의하십시오. 작고 단순한 옥상 정원은 완성되는 데 일주일밖에 걸리지 않을 수도 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "According to the Web page, what can visitors to the Web site do?",
                        options: [
                            { label: "A", text: "Discuss how to create a garden" },
                            { label: "B", text: "Learn how to maximize vegetable production" },
                            { label: "C", text: "Seek advice about landscaping problems" },
                            { label: "D", text: "Help contractors calculate costs" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "웹 페이지에 따르면, 웹사이트의 방문객들이 할 수 있는 일은?",
                        explanation: `첫 번째 단락의 마지막 문장에서 '이 웹사이트는 녹색 지붕을 만들고 유지하기 위한 아이디어, 사진 그리고 자료를 공유하기 위해 고안되었다(This Web site is designed for sharing ideas, photos, and resources to create and maintain a green roof)'고 했으므로 옥상 정원의 제작 및 유지에 대해 정보를 나누고 토론할 수 있음을 알 수 있습니다.`
                    },
                    {
                        id: "159",
                        text: "What is NOT mentioned about green roofs?",
                        options: [
                            { label: "A", text: "They decrease energy bills." },
                            { label: "B", text: "They remove pollution from the air." },
                            { label: "C", text: "They make a structure more beautiful." },
                            { label: "D", text: "They can be installed on commercial and residential buildings." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_NOT_MENTIONED",
                        translation: "녹색 지붕에 대해 언급되지 않은 것은?",
                        explanation: `첫 번째 단락에서 냉난방 비용을 낮춰주고(A), 건축물의 미적 매력을 높이며(C), 사무실 건물과 주택(D)에 설치할 수 있다고 언급되었습니다. 공기 중의 오염 물질 제거(B)에 대한 언급은 없으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "160",
                        text: "In paragraph 3, line 1, the word \"handle\" is closest in meaning to",
                        options: [
                            { label: "A", text: "touch" },
                            { label: "B", text: "control" },
                            { label: "C", text: "deliver" },
                            { label: "D", text: "support" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "세 번째 단락 1행의 'handle'과 의미가 가장 가까운 단어는?",
                        explanation: `문맥상 지붕이 추가 중량을 '견디다'라는 뜻으로 쓰였으므로 '지탱하다'를 뜻하는 (D) support가 정답입니다.`
                    }
                ]
            },
            // Questions 161-163: Advertisement
            {
                id: "p7-t4-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t4-s7-p1",
                        type: "ADVERTISEMENT",
                        title: "Advertisement",
                        content: `Martino Technical has been providing live sound-mixing services for more than 30 years. We use the latest technology to produce the best sound.\n\nThe majority of our clients are heavy-metal and classic-rock musicians. Before they go on tour, we rehearse with them to ensure that the sounds are perfectly blended and balanced. In addition, we create recordings for them that they can post on social media to promote their shows.\n\nOur sound-mixing engineers are known for their experience and professionalism and have an impressive track record working on tours worldwide. They have worked with many popular music groups, including The Feakes, Firebrand, and Cellar Cats, and make bands sound just as good during live performances as they do on their records.\n\nContact us by e-mailing information@martinotechnical.ie.`,
                        translation: `마르티노 테크니컬은 30년 넘게 라이브 사운드 믹싱 서비스를 제공해 왔습니다. 우리는 최고의 사운드를 만들어 내기 위해 최신 기술을 사용합니다.\n\n우리 고객들 중 대다수는 헤비메탈과 클래식 록 음악가들입니다. 그들이 투어를 떠나기 전에, 우리는 그들과 함께 사운드가 완벽하게 혼합되고 균형을 이루는지 확인하기 위해 리허설을 합니다. 뿐만 아니라, 우리는 그들이 공연을 홍보하기 위해 소셜 미디어에 올릴 수 있는 녹음 음원을 제작합니다.\n\n우리의 사운드 믹싱 엔지니어들은 경험과 전문성을 갖춘 것으로 유명하며 전 세계 투어 작업에 있어 화려한 실적을 가지고 있습니다. 그들은 더 피크스, 파이어브랜드, 셀라 캣츠를 포함한 많은 인기 음악 그룹들과 작업했고, 밴드들이 라이브 공연을 하는 동안 음반에서 하는 것만큼 훌륭한 사운드를 내도록 해 줍니다.\n\n저희에게 연락하시려면 information@martinotechnical.ie로 이메일을 보내 주시기 바랍니다.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is indicated about Martino Technical?",
                        options: [
                            { label: "A", text: "It acquires most clients through social media." },
                            { label: "B", text: "It was founded over 30 years ago." },
                            { label: "C", text: "It has received many industry awards." },
                            { label: "D", text: "It has offices throughout the world." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "마르티노 테크니컬에 대해 명시된 것은?",
                        explanation: `첫 문장에서 마르티노 테크니컬은 30년 넘게 라이브 사운드 믹싱 서비스를 제공해 왔다고 했으므로 (B) 30년도 더 전에 창립되었다는 사실을 알 수 있습니다.`
                    },
                    {
                        id: "162",
                        text: "The word \"promote\" in paragraph 2, line 4, is closest in meaning to",
                        options: [
                            { label: "A", text: "encourage" },
                            { label: "B", text: "schedule" },
                            { label: "C", text: "publicize" },
                            { label: "D", text: "advance" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_VOCABULARY",
                        translation: "두 번째 단락 4행의 'promote'와 의미가 가장 가까운 단어는?",
                        explanation: `의미상 공연을 '홍보한다'는 뜻으로 쓰였으므로 '홍보하다, 알리다'를 뜻하는 (C) publicize가 정답입니다.`
                    },
                    {
                        id: "163",
                        text: "What is NOT stated about the live sound-mixing engineers?",
                        options: [
                            { label: "A", text: "They create promotional materials." },
                            { label: "B", text: "They have considerable expertise." },
                            { label: "C", text: "They travel abroad frequently." },
                            { label: "D", text: "They have university degrees in music." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_NOT_MENTIONED",
                        translation: "라이브 사운드 믹싱 엔지니어들에 대해 언급되지 않은 것은?",
                        explanation: `두 번째 단락 마지막 문장에서 홍보용 녹음 음원을 제작한다(A)고 했고, 세 번째 단락 첫 문장에서 경험과 전문성(B) 그리고 전 세계 투어 작업 실적(C - 해외 출장이 잦음을 의미)이 언급되었습니다. 음악 학위(D)에 대한 내용은 없으므로 (D)가 정답입니다.`
                    }
                ]
            },
            // Questions 164-167: E-mail
            {
                id: "p7-t4-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t4-s8-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Employees <employees@bonahoornenterprises.com>\nFrom: Marcia Noh <mnoh@bonahoornenterprises.com>\nDate: November 14\nSubject: November 28 event\n\nDear all,\n\nOn the evening of November 28, there will be a formal dinner to honor our company president and founder, Mr. Bonahoom. At the dinner, we will express our appreciation for his leadership over these past twenty years in making Bonahoom Enterprises a successful company and a great place to work.\n\nThis event will be held in the private banquet room at Chez Bistro and is intended to be a surprise, so please avoid mentioning it to him. Those few who are involved with the setup should arrive early. All other employees should come no later than 6:15 P.M. in anticipation of Mr. Bonahoom's arrival at 6:30 P.M. We expect the celebration to wrap up no later than 8 P.M. — [1] —.\n\nThere is no need to bring a gift. — [3] —. We do ask, though, that you find time this week to sign a card for him. It can be found at Ms. Mueller's desk, inside an envelope marked \"November 28.\"\n\nFinally, you are welcome to bring one guest with you to the event if you wish. — [4] —. Kindly RSVP to this e-mail so we can get a complete count of the number of attendees.\n\nAll the best,\n\nMarcia Noh`,
                        translation: `수신: 직원 (employees@bonahoornenterprises.com)\n발신: 마르시아 노 (mnoh@bonahoornenterprises.com)\n날짜: 11월 14일\n제목: 11월 28일 행사\n\n여러분,\n\n11월 28일 저녁에 우리 회사의 사장이자 창립자인 보나훔 씨를 기리기 위한 공식 만찬이 있을 예정입니다. 만찬에서 우리는 지난 20년간 보나훔 엔터프라이즈를 성공적인 기업이자 일하기 좋은 직장으로 만든 그의 리더십에 감사를 표할 것입니다.\n\n이 행사는 셰 비스트로의 전용 연회실에서 열릴 예정이고, 깜짝 이벤트로 기획되었으므로 그에게 언급하는 것을 삼가 주세요. 준비와 관련된 소수의 사람들은 일찍 도착해야 합니다. 다른 모든 참석자들은 늦어도 오후 6시 15분까지는 와야 합니다. 보나훔 씨가 오후 6시 30분에 도착할 예정이기 때문입니다. 오후 8시 전에는 행사가 끝날 것으로 예상합니다. — [1] —.\n\n선물은 가져올 필요가 없습니다. — [3] —. 그렇지만 이번 주 중 시간을 내어 그를 위한 카드에 서명을 해 주시기 바랍니다. 카드는 뮬러 씨의 책상에서 찾을 수 있으며 '11월 28일'이라고 표시된 봉투 안에 있습니다.\n\n마지막으로, 원할 경우 행사에 한 명의 손님을 데려오는 것을 환영합니다. — [4] —. 참석자 수를 완전히 집계할 수 있도록 이 이메일에 회신해 주시기 바랍니다.\n\n마르시아 노`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is the main purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To ask staff to sign up to give speeches at a celebration" },
                            { label: "B", text: "To find people willing to bring various items to a dinner" },
                            { label: "C", text: "To invite workers to a surprise party" },
                            { label: "D", text: "To book a banquet room for a retirement event" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 주요 목적은?",
                        explanation: `첫 번째 단락에서 11월 28일 저녁에 사장 보나훔 씨를 기리는 만찬이 있을 예정이라고 했고, 두 번째 단락에서 이 행사가 깜짝 이벤트(intended to be a surprise)라고 했으므로 직원들을 깜짝 파티에 초대하기 위한 (C)가 정답입니다.`
                    },
                    {
                        id: "165",
                        text: "According to the e-mail, when are most people expected to arrive?",
                        options: [
                            { label: "A", text: "At 5:00 P.M." },
                            { label: "B", text: "At 6:15 P.M." },
                            { label: "C", text: "At 6:30 P.M." },
                            { label: "D", text: "At 8:00 P.M." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "이메일에 따르면 대부분의 사람들이 도착할 것으로 예상되는 시간은?",
                        explanation: `두 번째 단락에서 보나훔 씨가 6시 30분에 도착할 것이므로 다른 모든 참석자들은 늦어도 오후 6시 15분(no later than 6:15 P.M.)까지는 와야 한다고 명시했으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "166",
                        text: "What should people do if they want to sign a card?",
                        options: [
                            { label: "A", text: "They should request it from Mr. Bonahoom." },
                            { label: "B", text: "They should e-mail Ms. Noh." },
                            { label: "C", text: "They should wait for it to be passed around the office." },
                            { label: "D", text: "They should go to Ms. Mueller's desk." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "카드에 서명하고 싶다면 어떻게 해야 하는가?",
                        explanation: `세 번째 단락에서 이번 주 중 시간을 내어 카드에 서명을 해 달라고 했으며, 그 카드는 '뮬러 씨의 책상(Ms. Mueller's desk)'에서 찾을 수 있다고 했으므로 (D)가 정답입니다.`
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The senior staff will be presenting a commemorative plaque on behalf of the whole office.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"고위급 직원들이 사무실 전체를 대표하여 기념패를 수여할 예정입니다.\"",
                        explanation: `주어진 문장은 고위급 직원들이 대표로 증정할 선물(기념패)에 대해 언급하고 있습니다. [3] 앞에서 선물은 가져올 필요가 없다(There is no need to bring a gift)고 말한 뒤, 그 대신 사무실 차원에서 준비한 기념패를 증정한다는 내용이 오는 것이 흐름상 자연스러우므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 168-171: Online Chat
            {
                id: "p7-t4-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t4-s9-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Colin Wikander [10:23 A.M.] I have reviewed the draft of the new client questionnaire, and it looks great overall. I would make the question about bookkeeping strategies more open-ended, though. As written, it may lead respondents to give simple yes or no answers.\n\nMidori Sakai [10:24 A.M.] That's a good point. We'll need to fix that. I also want to add a couple of questions about how financial and tax reports have been handled in the past.\n\nEla Hamidah [10:24 A.M.] I could look at the bookkeeping question to see what I can come up with.\n\nColin Wikander [10:25 A.M.] Well, it's four pages already.\n\nMidori Sakai [10:27 A.M.] That's true. I'll just wait for Ela's revision of the third question. Then Jack Neligan can put a draft of the form up on our Web site.\n\nColin Wikander [10:28 A.M.] Is it true that we are not planning to collect any paper forms?\n\nMidori Sakai [10:30 A.M.] We might do that, but digital collection is preferable to avoid the lag time of waiting for our clients to print, fill out, and scan the forms to send them back.`,
                        translation: `콜린 위칸더 [오전 10:23] 새로운 고객 설문지 초안을 검토했는데 전체적으로 훌륭해 보입니다. 그런데 저라면 회계 전략에 대한 질문을 더 개방형으로 만들 것 같습니다. 지금 쓰인 대로라면 응답자들이 간단히 예 또는 아니요로 대답하게 될 수 있습니다.\n\n미도리 사카이 [오전 10:24] 좋은 지적입니다. 그 부분을 고칠 필요가 있습니다. 저 또한 과거에 재무 및 세금 보고서가 처리된 방식에 대한 질문을 몇 가지 추가하고 싶습니다.\n\n엘라 하미다 [오전 10:24] 제가 회계 질문을 살펴보고 제안할 수 있는 것이 있는지 확인해 보겠습니다.\n\n콜린 위칸더 [오전 10:25] 글쎄요, 이미 4페이지나 되는걸요.\n\n미도리 사카이 [오전 10:27] 맞습니다. 엘라 씨의 세 번째 질문 수정을 기다리겠습니다. 그런 다음 잭 넬리건이 우리 웹사이트에 양식 초안을 올릴 수 있습니다.\n\n콜린 위칸더 [오전 10:28] 우리가 종이 양식은 수집할 계획이 없다는 것이 사실인가요?\n\n미도리 사카이 [오전 10:30] 그렇게 할 수도 있지만, 고객이 양식을 출력하고, 작성하고, 스캔해서 다시 보내주기를 기다리는 지체 시간을 피하기 위해 디지털 수집이 더 좋습니다.`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What type of company do the writers most likely work for?",
                        options: [
                            { label: "A", text: "Publishing" },
                            { label: "B", text: "Accounting" },
                            { label: "C", text: "Retail" },
                            { label: "D", text: "Design" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "작성자들이 근무하는 회사는 어떤 종류의 회사일 것 같은가?",
                        explanation: `10시 23분에 위칸더 씨가 새로운 고객 설문지 초안의 '회계 전략(bookkeeping strategies)'에 대해 말했고, 10시 24분에 사카이 씨가 '재무 및 세금 보고서(financial and tax reports)'를 언급한 것으로 보아 이들이 회계 법인(Accounting)에서 근무하고 있음을 짐작할 수 있습니다.`
                    },
                    {
                        id: "169",
                        text: "What does Mr. Wikander suggest about a question?",
                        options: [
                            { label: "A", text: "It is mislabeled." },
                            { label: "B", text: "It is difficult to read." },
                            { label: "C", text: "It should be reworded." },
                            { label: "D", text: "It should be made optional." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "위칸더 씨가 질문에 대해 제안하는 것은?",
                        explanation: `10시 23분에 위칸더 씨가 질문을 더 개방형(more open-ended)으로 만들면 좋겠다고 말하면서 질문의 문구를 수정(reworded)할 것을 제안하고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "170",
                        text: "At 10:25 A.M., what does Mr. Wikander most likely mean when he writes, \"Well, it's four pages already\"?",
                        options: [
                            { label: "A", text: "He is surprised by the long answers clients gave." },
                            { label: "B", text: "He is impressed by how quickly the questionnaire is coming along." },
                            { label: "C", text: "He thinks information in the first four pages should be cut first." },
                            { label: "D", text: "He thinks the questionnaire should not be any longer." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "오전 10시 25분에 위칸더 씨가 \"글쎄요, 이미 4페이지나 되는걸요\"라고 쓴 의도는?",
                        explanation: `사카이 씨가 질문을 몇 가지 더 추가하고 싶다고 하자, 위칸더 씨가 이미 설문지가 충분히 길다는 의미로 답한 것이므로 설문지가 더 길어지면 안 된다고 생각하는 (D)가 정답입니다.`
                    },
                    {
                        id: "171",
                        text: "Why does Ms. Sakai think that paperless forms will be preferable?",
                        options: [
                            { label: "A", text: "They allow for faster data collection." },
                            { label: "B", text: "They reduce the number of errors." },
                            { label: "C", text: "They are good for the environment." },
                            { label: "D", text: "They do not take up space in an office." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "사카이 씨가 종이를 쓰지 않는 양식이 더 좋을 것이라고 생각하는 이유는?",
                        explanation: `10시 30분에 사카이 씨가 고객이 출력, 작성, 스캔하여 보내주기를 기다리는 '지체 시간을 피하기 위해(to avoid the lag time of waiting)' 디지털 방식이 더 좋다고 했으므로 시간을 단축하여 더 빠른 데이터 수집을 가능하게 한다는 (A)가 정답입니다.`
                    }
                ]
            },
            // Questions 172-175: Web post
            {
                id: "p7-t4-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t4-s10-p1",
                        type: "ARTICLE",
                        title: "Web Post",
                        content: `https://www.trehospitalityassociation.com/discussion/tunisia\n\nI have been a member of the TRE Hospitality Association for many years, but until now, I have posted messages only on the Greece and Egypt forums. — [1] —. This is my first post on the Tunisia forum.\n\nI am looking for recommendations for a janitorial service on the island of Djerba. My company is opening a hotel there. Our hotel will offer 80 rooms with two restaurants on-site. — [2] —. I would like to contract with a company that can provide about four full-time custodial workers and housekeepers, plus an additional five workers on an as-needed basis for large events on our property. — [3] —.\n\nI may have met some of you previously at one of our hospitality conferences. If so, please remind me. In fact, I attended the most recent one in Rabat. — [4] —. I would like to reconnect!\n\nJohn Karikas, Director of Development\n\nSynecdoche Hotel Group`,
                        translation: `https://www.trehospitalityassociation.com/discussion/tunisia\n\n저는 수년 동안 TRE 접객 협회 회원이었지만 지금까지는 그리스와 이집트 포럼에만 글을 올렸습니다. — [1] —. 이 글은 튀니지 포럼에 올리는 저의 첫 게시글입니다.\n\n저는 제르바 섬에 있는 청소 서비스 추천을 구하고 있습니다. 저희 회사는 그곳에 호텔을 개장할 예정입니다. 저희 호텔은 80개의 객실과 부지 내에 두 개의 레스토랑을 제공할 것입니다. — [2] —. 네 명 정도의 정규직 관리 직원과 객실 청소 담당자에 대해 호텔 내 대형 행사가 있을 경우 필요 시마다 추가로 다섯 명의 근로자를 제공할 수 있는 회사와 계약을 맺기를 원합니다. — [3] —.\n\n전에 접객 콘퍼런스 중 한 곳에서 여러분을 만났을지도 모르겠습니다. 그렇다면 저에게 알려 주십시오. 사실, 저는 라바트에서 가장 최근에 열린 콘퍼런스에 참석했습니다. — [4] —. 다시 연락하고 싶습니다!\n\n존 카리카스, 개발 책임자\n시네도키 호텔 그룹`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is the purpose of the Web post?",
                        options: [
                            { label: "A", text: "To advertise a new hotel" },
                            { label: "B", text: "To request business referrals" },
                            { label: "C", text: "To announce a hospitality conference" },
                            { label: "D", text: "To recruit employees for a hotel" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "웹 게시물의 목적은?",
                        explanation: `두 번째 단락 첫 문장에서 '제르바 섬에 있는 청소 서비스 추천을 구하고 있다(I am looking for recommendations for a janitorial service on the island of Djerba)'고 했으므로 (B) 서비스 제공업체 추천 요청이 정답입니다.`
                    },
                    {
                        id: "173",
                        text: "What is indicated about Mr. Karikas?",
                        options: [
                            { label: "A", text: "He recently joined the TRE Hospitality Association." },
                            { label: "B", text: "He has posted on multiple forums." },
                            { label: "C", text: "He manages hotels in several countries." }, // This matches the image's choice "국제적인 조직이다" context better if the question was about the organization, but for Mr. Karikas, the multiple forums is the direct point.
                            { label: "D", text: "He attended a conference in Tunisia." }
                        ],
                        correctAnswer: "B", // The image's 173 question asks about the Association, but the user's data asks about Mr. Karikas. For Mr. Karikas, (B) is correct.
                        classification: "P7_INFERENCE",
                        translation: "카리카스 씨에 대해 명시된 것은?",
                        explanation: `첫 번째 단락에서 수년 동안 회원이었으며 그리스와 이집트 포럼에도 글을 올린 적이 있다고 했으므로 (B) 여러 포럼에 게시물을 올렸다는 것을 알 수 있습니다.`
                    },
                    {
                        id: "174",
                        text: "What type of business does Mr. Karikas want to hire?",
                        options: [
                            { label: "A", text: "A catering company" },
                            { label: "B", text: "A security firm" },
                            { label: "C", text: "A cleaning service" },
                            { label: "D", text: "A landscaping company" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "카리카스 씨가 고용하고 싶어하는 사업 유형은?",
                        explanation: `두 번째 단락에서 건물 관리와 객실 청소 담당자를 제공할 수 있는 '청소 서비스(janitorial service)'를 찾고 있다고 명시했으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "175",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"It will be the largest property in our portfolio.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"그곳은 저희 포트폴리오에서 가장 큰 자산이 될 것입니다.\"",
                        explanation: `주어진 문장의 '그곳(It)'은 새로 개장할 제르바 섬의 호텔을 가리킵니다. 호텔의 개장 소식을 언급한 뒤, 그 규모(80개 객실과 2개 레스토랑)에 대해 부연 설명하기 전인 [2] 위치에 오는 것이 문맥상 가장 적절합니다.`
                    }
                ]
            },
        ]
    },
    {
        testId: 5,
        title: "Test 5",
        sets: [
            // Questions 147-148: Advertisement
            {
                id: "p7-t5-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t5-s1-p1",
                        type: "ADVERTISEMENT",
                        title: "Advertisement",
                        content: `Owl and Moon\n\nBuy one mattress, and choose one of our beautiful rugs for free!\n\nUse the following coupon code when you check out at owlandmoon.co.uk: ESSZRS4T.\n\nOur mattresses are shipped directly to your home and usually arrive within one week. Try out a mattress for 90 days, and if you are not happy with it, send it back for a full refund. We also offer low-interest financing for two years on all our furniture.`,
                        translation: `아울앤문(Owl and Moon)\n\n매트리스 하나를 구매하시고 멋진 러그 하나를 무료로 선택하세요!\n\nowlandmoon.co.uk에서 결제하실 때 다음 쿠폰 코드를 사용하세요: ESSZRS4T.\n\n우리 매트리스는 고객님 댁으로 바로 배송되며 보통 일주일 내에 도착합니다. 매트리스를 90일 동안 사용해 보고 만족스럽지 못하면 전액 환불을 위해 반송하세요. 또한 모든 가구에 대해 2년간 저금리 할부 금융 서비스를 제공합니다.`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What types of products are being advertised?",
                        options: [
                            { label: "A", text: "Camping gear" },
                            { label: "B", text: "Household items" },
                            { label: "C", text: "Office equipment" },
                            { label: "D", text: "Automobile accessories" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "광고되고 있는 제품의 종류는?",
                        explanation: `첫 문장에서 매트리스 하나를 구매하고 멋진 러그 하나를 무료로 선택하라고 했으며, 마지막에 '모든 가구(all our furniture)'를 언급했습니다. 매트리스와 러그는 가정용품(Household items)에 속하므로 (B)가 정답입니다.`
                    },
                    {
                        id: "148",
                        text: "What is indicated about the company?",
                        options: [
                            { label: "A", text: "It has been in business for two years." },
                            { label: "B", text: "It accepts product returns." },
                            { label: "C", text: "It has same-day delivery." },
                            { label: "D", text: "It has a yearly sale." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "회사에 대해 명시된 것은?",
                        explanation: `지문에 '매트리스를 90일 동안 사용해 보고 만족스럽지 못하면 전액 환불을 위해 반송하라(Try out a mattress for 90 days... send it back for a full refund)'고 명시되어 있으므로 (B) 제품 반품을 허용한다는 사실을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 149-150: E-mail
            {
                id: "p7-t5-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t5-s2-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Demarco Hines <d.hines@worldmail.com>\nFrom: Soon Yi Park <customerservice@thebestbags.co.kr>\nSubject: Item F208 (canvas overnight bag)\nDate: 19 June\n\nDear Mr. Hines,\n\nThe Best Bags canvas overnight bag you ordered is not currently available in the colour you requested. There are several options available to you.\n\n1. Cancel your order, and we will gladly refund your money in full.\n\n2. Select a different colour. That item is currently available in light blue, dark green, and dark gray.\n\n3. Choose an item of equal value from our Web site or catalogue.\n\n4. Wait until the item you ordered is back in stock in light gray. Allow three to five weeks.\n\nPlease let us know which option you prefer. We apologize for any inconvenience.\n\nThank you,\n\nSoon Yi Park, Customer Service Agent`,
                        translation: `수신: 데마코 하인즈 (d.hines@worldmail.com)\n발신: 박순이 (customerservice@thebestbags.co.kr)\n날짜: 6월 19일\n제목: 품목 F208 (캔버스 여행 가방)\n\n하인즈 고객님,\n\n주문하신 베스트 백스 캔버스 여행 가방이 현재 요청하신 색상으로 구입이 불가능합니다. 고객님께 제공되는 옵션이 몇 가지 있습니다.\n\n1. 주문을 취소하시면 기꺼이 전액 환불해 드리겠습니다.\n\n2. 다른 색상을 선택해 주세요. 해당 품목은 현재 하늘색, 진녹색, 진회색으로 구매 가능합니다.\n\n3. 저희 웹사이트나 카탈로그에서 동일한 가격의 제품을 선택해 주십시오.\n\n4. 주문하신 연회색 품목이 재입고될 때까지 기다려 주십시오. 3주에서 5주 정도 소요됩니다.\n\n어떤 옵션이 마음에 드는지 알려 주십시오. 불편을 드려 죄송합니다.\n\n감사합니다.\n박순이, 고객 서비스 담당자`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To confirm shipment of an order" },
                            { label: "B", text: "To acknowledge the return of an order" },
                            { label: "C", text: "To provide alternatives for an order" },
                            { label: "D", text: "To thank a customer for placing an order" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?",
                        explanation: `고객이 주문한 가방이 요청한 색상으로 구입이 불가능하다고 알리면서, 주문 취소, 다른 색상 선택 등 몇 가지 대안(options)을 제시하고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "150",
                        text: "What color bag is currently NOT available?",
                        options: [
                            { label: "A", text: "The light blue one" },
                            { label: "B", text: "The dark green one" },
                            { label: "C", text: "The dark gray one" },
                            { label: "D", text: "The light gray one" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "현재 구매가 불가능한 가방 색상은?",
                        explanation: `옵션 4번에서 '주문하신 연회색(light gray) 품목이 재입고될 때까지 기다려 달라'고 한 것으로 보아, 현재 재고가 없어 구입이 불가능한 색상은 연회색임을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 151-152: Text Message Chain
            {
                id: "p7-t5-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t5-s3-p1",
                        type: "CHAT_MESSAGE",
                        title: "Text Message Chain",
                        content: `Christie Moroff [9:47 A.M.]\nGood morning, Ren. I just stopped by your office.\n\nRen Nomura [9:48 A.M.]\nThen you already know that I am not there today.\n\nChristie Moroff [9:48 A.M.]\nYes, your new office mate—I can't remember her name—told me that you just started working remotely on Tuesdays. I was looking for some empty binders.\n\nRen Nomura [9:49 A.M.]\nThat's Cheryl. I thought you had already met her. Are there any binders in the supply closet?\n\nChristie Moroff [9:50 A.M.]\nNo, I just looked. Frank has ordered some more, but they won't be in until next week. I need two or three of them now.\n\nRen Nomura [9:51 A.M.]\nCheck with Cheryl. She is really helpful.\n\nChristie Moroff [9:52 A.M.]\nOK. I will.`,
                        translation: `크리스티 모로프 [오전 9:47]\n좋은 아침입니다, 렌. 방금 당신 사무실에 들렀어요.\n\n렌 노무라 [오전 9:48]\n그럼 오늘 제가 사무실에 없는 것을 벌써 알고 계시겠네요.\n\n크리스티 모로프 [오전 9:48]\n네, 당신의 새로운 사무실 동료가—이름은 기억나지 않지만—당신이 방금 화요일마다 원격 근무를 시작했다고 알려 주었어요. 저는 빈 바인더를 몇 개 찾고 있었어요.\n\n렌 노무라 [오전 9:49]\n그녀는 셰릴이에요. 이미 만난 줄 알았어요. 물품 보관함에 바인더가 있나요?\n\n크리스티 모로프 [오전 9:50]\n아니요, 방금 확인했어요. 프랭크가 좀 더 주문했는데 다음 주나 되어서야 올 거예요. 저는 지금 두세 개 정도 필요해요.\n\n렌 노무라 [오전 9:51]\n셰릴에게 문의해 보세요. 그녀는 정말 도움이 될 거예요.\n\n크리스티 모로프 [오전 9:52]\n알겠습니다. 그럴게요.`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "What is suggested about Mr. Nomura?",
                        options: [
                            { label: "A", text: "He does not usually work on Tuesdays." },
                            { label: "B", text: "He shares an office with Ms. Moroff." },
                            { label: "C", text: "He recently purchased office supplies." },
                            { label: "D", text: "He works off-site one day a week." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "노무라 씨에 대해 암시된 것은?",
                        explanation: `모로프 씨가 노무라 씨에게 '화요일마다 원격 근무를 시작했다고 알려 주었다(told me that you just started working remotely on Tuesdays)'고 했으므로 노무라 씨는 화요일마다 사무실 밖에서 근무한다는 것을 알 수 있습니다. 따라서 (D)가 정답입니다.`
                    },
                    {
                        id: "152",
                        text: "At 9:51 A.M., what does Mr. Nomura most likely mean when he writes, \"Check with Cheryl\"?",
                        options: [
                            { label: "A", text: "Cheryl may have extra binders." },
                            { label: "B", text: "Cheryl must approve a purchase." },
                            { label: "C", text: "Cheryl will be able to locate Frank." },
                            { label: "D", text: "Cheryl knows when a delivery will arrive." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 51분에 노무라 씨가 '셰릴에게 문의해 보세요'라고 한 의미는?",
                        explanation: `모로프 씨가 빈 바인더를 찾고 있는데 보관함에 재고가 없다고 하자, 노무라 씨가 셰릴에게 문의하라고 권합니다. 이는 셰릴에게 바인더가 몇 개 있을 수 있으니 물어보라는 의도이므로 (A)가 정답입니다.`
                    }
                ]
            },
            // Questions 153-154: Form
            {
                id: "p7-t5-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t5-s4-p1",
                        type: "FORM",
                        title: "Form",
                        content: `Cortica Bank\n\nPlease fill out the following form to open a new bank account.\n\nIs this your first account with Cortica Bank? __ Yes  X No\n\nExisting account number (if applicable): 190-37580\n\nNew account type: __ Chequing  X Savings  __ Investment\n\nName: Frances Wilkes\n\nMailing address: 17 Jones Street\n                 North Sydney NSW 2060\n\nPhone number: (02) 7010 8624\n\nE-mail address: fwilkes@myemail.com.au\n\nInitial deposit amount (minimum $500): $1,500\n\nWould you like to sign up for electronic communications? __ Yes  X No\n\nIf you select "Yes," we will contact you via voice mail, e-mail, or text.\nIf you select "No," you will receive monthly paper statements in the mail.\n\nPlease note that accounts take up to two business days to be established. Your funds will be available after this period. You will receive your debit card in the mail in up to five business days.`,
                        translation: `코르티카 은행\n\n은행 신규 계좌를 개설하시려면 다음 양식을 작성하십시오.\n\n코르티카 은행에 이번 계좌가 처음이십니까? __ 예  X 아니요\n\n기존 계좌번호(해당되는 경우): 190-37580\n\n신규 계좌 유형: __ 당좌 예금  X 보통 예금  __ 투자\n\n이름: 프랜시스 윌크스\n\n우편 주소: 존스 로 17\n           노스 시드니 NSW 2060\n\n전화번호: (02) 7010 8624\n\n이메일 주소: fwilkes@myemail.com.au\n\n초기 예치 금액(최소 500달러): 1,500달러\n\n전자 통신을 신청하시겠습니까? __ 예  X 아니요\n\n'예'를 선택하실 경우, 음성 메일, 이메일 또는 문자를 통해 연락드립니다.\n'아니요'를 선택하실 경우, 매월 종이 명세서를 우편으로 받으시게 됩니다.\n\n계좌는 개설되는 데 영업일 기준 최대 2일이 소요된다는 점을 유의해 주십시오. 이 기간 이후에 예금을 사용하실 수 있습니다. 영업일 기준 최대 5일 이내에 직불 카드를 우편으로 받으실 수 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is indicated about Ms. Wilkes?",
                        options: [
                            { label: "A", text: "She has another account with Cortica Bank." },
                            { label: "B", text: "She plans to open an investment account." },
                            { label: "C", text: "She has lost a debit card." },
                            { label: "D", text: "She placed an order for checks." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "윌크스 씨에 대해 명시된 것은?",
                        explanation: `양식 첫 번째 항목에서 코르티카 은행에 이번 계좌가 처음인지(Is this your first account with Cortica Bank?) 묻는 문항에 아니요(No)에 체크했으므로 윌크스 씨는 코르티카 은행에 계좌를 이미 가지고 있는 고객임을 알 수 있습니다.`
                    },
                    {
                        id: "154",
                        text: "How will the bank most likely contact Ms. Wilkes?",
                        options: [
                            { label: "A", text: "By e-mail" },
                            { label: "B", text: "By text message" },
                            { label: "C", text: "By telephone" },
                            { label: "D", text: "By letter" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "은행은 윌크스 씨에게 어떻게 연락할 것 같은가?",
                        explanation: `양식 마지막 질문에서 전자 통신을 신청하겠는지 묻자 윌크스 씨가 아니요(No)에 체크했고, 그 아래에 '아니요를 선택할 경우 매월 종이 명세서를 우편으로 받게 된다(you will receive monthly paper statements in the mail)'고 했으므로 우편(By letter)으로 연락하게 됨을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 155-157: Job Advertisement
            {
                id: "p7-t5-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t5-s5-p1",
                        type: "ADVERTISEMENT",
                        title: "Job Advertisement",
                        content: `Construction Superintendent\nJones-Richmond Construction (JRC)\n\nFounded 25 years ago, JRC is a full-service general contractor serving clients throughout Winnipeg and the surrounding area.\n\nResponsibilities:\n• Report to senior project manager\n• Manage on-site construction activities\n• Ensure compliance with safety regulations\n• Negotiate purchases and contracts\n• Establish construction schedules\n\nQualifications:\n• Minimum five years of commercial construction experience\n• Willingness to travel to job sites daily (usually within a 50-kilometre radius)\n• Strong written communication skills\n\nTo apply, submit a résumé and cover letter through www.jrc.ca/apply.`,
                        translation: `건설 현장 감독관\n존스-리치먼드 건설(JRC)\n\n25년 전에 설립된 JRC는 위니펙과 주변 지역의 고객에게 서비스를 제공하는 종합 서비스 시공사입니다.\n\n업무:\n• 프로젝트 상급 관리자에게 보고\n• 현장 공사 상황 관리\n• 안전 규정 준수 보증\n• 구매 및 계약 협상\n• 공사 일정 수립\n\n자격:\n• 최소 5년 이상의 상업 건물 건설 경력\n• 작업 현장을 매일 다닐 의향(보통 반경 50km 이내)\n• 뛰어난 서면 소통 능력\n\n지원하려면 www.jrc.ca/apply를 통해 이력서와 자기소개서를 제출하십시오.`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What is suggested about Jones-Richmond Construction?",
                        options: [
                            { label: "A", text: "It is a new company." },
                            { label: "B", text: "It has won industry awards for its work." },
                            { label: "C", text: "It is based in Winnipeg." },
                            { label: "D", text: "It specializes in home construction projects." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "존스-리치먼드 건설에 대해 암시된 것은?",
                        explanation: `첫 문장에서 25년 전에 설립된 JRC는 위니펙과 주변 지역의 고객에게 서비스를 제공한다고 소개하고 있으므로 존스-리치먼드 건설은 위니펙 지역을 기반으로 하는 회사임을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                    },
                    {
                        id: "156",
                        text: "What is NOT listed as a responsibility of the construction superintendent?",
                        options: [
                            { label: "A", text: "Setting schedules" },
                            { label: "B", text: "Training inexperienced workers" },
                            { label: "C", text: "Participating in contract discussions" },
                            { label: "D", text: "Ensuring worker safety" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_NOT_MENTIONED",
                        translation: "건설 현장 감독관의 업무로 열거되지 않은 것은?",
                        explanation: `업무 내용 중 일정 수립(A), 안전 규정 준수 보증(D), 구매 및 계약 협상(C)은 언급되어 있으나, 경험이 부족한 작업자의 교육(B)에 대한 언급은 없으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "157",
                        text: "According to the advertisement, what must a successful job applicant have?",
                        options: [
                            { label: "A", text: "A technical certification" },
                            { label: "B", text: "A reference letter from a former employer" },
                            { label: "C", text: "Senior management experience" },
                            { label: "D", text: "The ability to visit construction sites each workday" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "광고에 따르면 성공적인 지원자가 가져야 하는 것은?",
                        explanation: `자격 요건 중 하나로 '작업 현장을 매일 다닐 의향(Willingness to travel to job sites daily)'을 명시했으므로 매일 건설 현장을 방문할 수 있어야 함을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 158-160: E-mail
            {
                id: "p7-t5-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t5-s6-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: All Sledgehammer Gym Staff\nFrom: Lucas Sledge\nDate: September 15\nSubject: Payroll changes\nAttachment: Form\n\nDear Staff,\n\nThanks to your dedicated work, word of our little gym has spread. Over the past twelve months, enrollment has significantly increased and so has our teaching staff. Although this growth is wonderful, having to process the payroll by myself has become rather burdensome. Therefore, I have contracted Trumball and Company to provide direct deposit of your wages into your bank accounts. — [1] —. Consequently, you no longer need to deposit your paycheck yourself. Also, you will now be able to get your pay stubs and tax information online. — [2] —.\n\nTo allow for these changes, I am asking everyone to provide me with the necessary banking details. Please complete the attached form and bring it to the office with a voided check no later than September 25. — [3] —. The new process will take effect in October. — [4] —. Please let me know if you have any questions.\n\nTake care,\n\nLucas`,
                        translation: `수신: 슬레지해머 체육관 전 직원\n발신: 루카스 슬레지\n날짜: 9월 15일\n제목: 급여 지급 변경\n첨부파일: 공식양식\n\n직원들께,\n\n여러분들의 헌신적인 근무 덕분에 우리 작은 체육관에 대한 소문이 퍼졌습니다. 지난 12개월 동안 등록 인원이 상당히 증가했고 강사진도 마찬가지로 늘었습니다. 이러한 성장은 멋진 일이지만 저 혼자 급여를 처리해야 하는 것이 꽤 부담스러워졌습니다. 그래서 저는 트럼불 앤 컴퍼니와 계약하여 여러분의 은행 계좌로 급여를 바로 입금하기로 했습니다. — [1] —. 따라서 여러분은 더 이상 직접 급여 지불 수표를 입금할 필요가 없습니다. 또한 급여 명세서 및 세금 정보를 이제 온라인으로 받으실 수 있습니다. — [2] —.\n\n이러한 변경을 감안하여 여러분 모두 필요한 은행 정보를 저에게 제공해 줄 것을 요청합니다. 첨부된 양식을 작성하여 9월 25일까지 보이드 체크와 함께 사무실로 가져오세요. — [3] —. 새로운 절차는 10월에 시행될 것입니다. — [4] —. 문의사항이 있으면 알려 주세요.\n\n루카스`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "What is mentioned as a benefit of the new payment system?",
                        options: [
                            { label: "A", text: "It will reduce Mr. Sledge's workload." },
                            { label: "B", text: "It will include more staff involvement." },
                            { label: "C", text: "It will simplify tax collection." },
                            { label: "D", text: "It will result in fewer payment errors." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "새로운 결제 시스템의 이점으로 언급된 것은?",
                        explanation: `첫 번째 단락에서 슬레지 씨가 성장에 따라 급여 처리 업무가 부담스러워졌다고 했고, 이를 위해 외부 업체와 계약하여 자동 입금 시스템을 도입했다고 했으므로 본인의 급여 처리 업무 업무 부하를 줄이기 위한 것임을 알 수 있습니다.`
                    },
                    {
                        id: "159",
                        text: "What does Mr. Sledge ask employees to do?",
                        options: [
                            { label: "A", text: "Update their contact information" },
                            { label: "B", text: "Submit ideas on how to improve the gym" },
                            { label: "C", text: "Provide information about their bank account" },
                            { label: "D", text: "Sign up for a professional development class" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "슬레지 씨가 직원들에게 요청하는 것은?",
                        explanation: `두 번째 단락 첫 문장에서 슬레지 씨가 직원들 모두 필요한 은행 정보(banking details)를 본인에게 제공해 줄 것을 요청하고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"If I am not around, please see my assistant.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"제가 자리에 없을 경우 저의 비서에게 전달하세요.\"",
                        explanation: `주어진 문장은 본인이 없을 때 서류 등을 전달할 대상을 안내하고 있습니다. [3] 앞에서 서류를 작성하여 사무실로 가져오라고 했으므로, 그 뒤에 본인이 없으면 비서에게 전달하라는 내용이 오는 것이 자연스럽습니다.`
                    }
                ]
            },
            // Questions 161-163: Article
            {
                id: "p7-t5-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t5-s7-p1",
                        type: "ARTICLE",
                        title: "Article",
                        content: `SYDNEY (4 June)—Coffee will be the main attraction this weekend at the Aussie Coffee Fair hosted by Homewares, the country's top kitchen appliance manufacturer. The event will be held at the Harbour Expo Centre.\n\nThe two-day event will feature a variety of coffee-oriented presentations by coffee growers and roasters, food writers, makers of kitchen equipment, and chefs. Foods and beverages will be available to view, taste, and buy at booths throughout the centre.\n\nSessions will feature demonstrations on cooking with coffee and tips for brewing the best cup of coffee, as well as information on nonfood uses for coffee. In addition, culinary experts will be on hand to meet with coffee enthusiasts for discussions designed to help them create a true coffeehouse experience in their own homes.\n\nEntry to the Aussie Coffee Fair is free. However, registration is required as space is limited. For information and to register online, go to www.aussiecoffeefair.com.`,
                        translation: `시드니(6월 4일)—이번 주말 국내 최고의 주방용품 제조업체인 홈웨어가 주최하는 호주 커피 박람회에서 커피가 주요 관심사가 될 것입니다. 이 행사는 하버 엑스포 센터에서 열릴 예정입니다.\n\n이틀간의 행사는 커피 재배자와 로스터, 음식 전문 작가, 주방 장비 제조업체, 그리고 요리사가 커피를 중심으로 진행하는 다양한 프레젠테이션으로 구성될 것입니다. 센터 곳곳의 부스에서 음식과 음료가 제공되어 보고, 맛보고, 구입할 수 있을 예정입니다.\n\n세션에서는 커피를 이용한 요리 시연과 최고의 커피를 내리는 팁뿐만 아니라 커피의 비식품 부문 활용에 대한 정보도 포함될 것입니다. 또한 요리 전문가들이 커피 애호가들과 만나 가정에서 진정한 커피하우스 경험을 할 수 있도록 돕기 위한 토론을 벌일 예정입니다.\n\n호주 커피 박람회 입장은 무료입니다. 그러나 공간이 한정되어 있어 등록은 필수입니다. 정보 확인 및 온라인 등록을 원하시면 www.aussiecoffeefair.com을 방문하십시오.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "The word \"top\" in paragraph 1, line 3, is closest in meaning to",
                        options: [
                            { label: "A", text: "only" },
                            { label: "B", text: "leading" },
                            { label: "C", text: "highest" },
                            { label: "D", text: "modern" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_VOCABULARY",
                        translation: "첫 번째 단락 3행의 'top'과 의미가 가장 가까운 단어는?",
                        explanation: `의미상 국내 '최고의' 주방용품 제조업체라는 뜻으로 쓰였으므로, '선두의, 일류의'를 뜻하는 (B) leading이 정답입니다.`
                    },
                    {
                        id: "162",
                        text: "Who will NOT be conducting informational presentations at the fair?",
                        options: [
                            { label: "A", text: "Chefs" },
                            { label: "B", text: "Coffee growers" },
                            { label: "C", text: "Equipment makers" },
                            { label: "D", text: "Coffeehouse owners" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_NOT_MENTIONED",
                        translation: "박람회에서 정보 제공 프레젠테이션을 하지 않을 사람은?",
                        explanation: `두 번째 단락에서 이틀간의 행사는 커피 재배자와 로스터, 음식 전문 작가, 주방 장비 제조업체, 그리고 요리사가 진행하는 프레젠테이션으로 구성될 것이라고 했지만, 커피 하우스 주인에 대한 언급은 없으므로 (D)가 정답입니다.`
                    },
                    {
                        id: "163",
                        text: "What must people do to attend the fair?",
                        options: [
                            { label: "A", text: "Sign up on a Web site" },
                            { label: "B", text: "Call to make a reservation" },
                            { label: "C", text: "Buy a ticket at the event location" },
                            { label: "D", text: "Present a Homewares product receipt" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "박람회에 참석하기 위해 사람들이 해야 할 일은?",
                        explanation: `마지막 단락의 두 번째 문장에서 '공간이 한정되어 있어 등록은 필수(registration is required as space is limited)'라고 했고, 온라인 등록을 안내하고 있으므로 (A)가 정답입니다.`
                    }
                ]
            },
            // Questions 164-167: E-mail
            {
                id: "p7-t5-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t5-s8-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `From: melissa@grandgrainsbakery.com\nTo: elinaorero@webmail.com\nDate: October 28\nRe: Desserts\n\nDear Ms. Otero,\n\nI just followed up with our baker about your request to have an assortment of desserts instead of one large cake for the party you are hosting at your home on November 7. We suggest ordering from a new menu. The cost for three desserts is between $10 and $12 per person. Our most popular desserts are the mini cheesecakes, the berry tartlets, and the fudge brownies.\n\nI know you are using a separate caterer for the lunch, and they will help serve and clean up after the party. You also mentioned that you were considering whether to put the dessert table in your backyard or inside your house. Just keep in mind that if you order the cheesecakes, they should be left out for no more than two hours. If you give us very specific instructions about where to set up the desserts, our staff can leave them in the appropriate place without disturbing the party.\n\nOnce you make your dessert choices, simply let us know how many guests you expect, and we can take care of the rest.\n\nMelissa Luhya\nGrand Grains Bakery`,
                        translation: `발신: melissa@grandgrainsbakery.com\n수신: elinaorero@webmail.com\n날짜: 10월 28일\n제목: 디저트\n\n오테로 씨께,\n\n11월 7일 자택에서 주최하시는 파티를 위해 큰 케이크 한 개 대신 다양한 디저트 모둠으로 하고 싶다는 요청과 관련해 방금 저희 제빵사에게 확인을 마쳤습니다. 저희는 새로운 메뉴에서 주문하실 것을 제안합니다. 세 가지 디저트 비용은 1인당 10달러에서 12달러 사이입니다. 가장 인기 있는 디저트는 미니 치즈케이크, 베리 타틀릿, 그리고 퍼지 브라우니입니다.\n\n점심 식사를 위해 별도의 출장 요리 업체를 이용하시는 것으로 알고 있으며, 그들이 파티 후에 서빙과 청소를 도와줄 것입니다. 또한 디저트 테이블을 뒷마당에 둘지 집 안에 둘지 고민 중이라고 말씀하셨습니다. 치즈케이크를 주문하실 경우, 실온에 2시간 이상 두어서는 안 된다는 점을 유의해 주시기 바랍니다. 디저트를 어디에 설치할지에 대해 구체적인 지시를 주시면, 저희 직원이 파티를 방해하지 않고 적절한 장소에 디저트를 두고 갈 수 있습니다.\n\n디저트를 선택하고 나면 예상 손님이 몇 분인지 알려주세요. 나머지는 저희가 알아서 처리하겠습니다.\n\n멜리사 루히야\n그랜드 그레인스 베이커리`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To advertise some new pastries" },
                            { label: "B", text: "To present options for an event" },
                            { label: "C", text: "To recommend signing a caterer contract" },
                            { label: "D", text: "To request payment on an order" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?",
                        explanation: `첫 문장에서 11월 7일 파티를 위해 큰 케이크 대신 디저트 모둠을 원했다는 요청을 언급하며, 새로운 메뉴에서 1인당 3개씩 주문하는 대안과 인기 품목들을 제시하고 있으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "165",
                        text: "What does Ms. Luhya indicate about the mini cheesecakes?",
                        options: [
                            { label: "A", text: "They are the most expensive dessert." },
                            { label: "B", text: "They are available in several flavors." },
                            { label: "C", text: "They should not be unrefrigerated for a long time." },
                            { label: "D", text: "They cannot be ordered in larger sizes." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "루히야 씨가 미니 치즈케이크에 대해 언급한 것은?",
                        explanation: `두 번째 단락 세 번째 문장에서 '치즈케이크를 주문할 경우 2시간 이상 밖에 두어서는 안 된다(should not be left out for no more than two hours)'고 했으므로, 오랫동안 상온에 두면 안 된다는 뜻인 (C)가 정답입니다.`
                    },
                    {
                        id: "166",
                        text: "The word \"disturbing\" in paragraph 2, line 6, is closest in meaning to",
                        options: [
                            { label: "A", text: "interrupting" },
                            { label: "B", text: "frightening" },
                            { label: "C", text: "rearranging" },
                            { label: "D", text: "moving" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_VOCABULARY",
                        translation: "두 번째 단락 6행의 'disturbing'과 의미가 가장 가까운 단어는?",
                        explanation: `의미상 파티의 흐름을 '방해하지' 않고 적절한 곳에 둔다는 맥락이므로, '방해하다'라는 뜻의 (A) interrupting이 가장 적절합니다.`
                    },
                    {
                        id: "167",
                        text: "What information does Ms. Luhya request from Ms. Otero?",
                        options: [
                            { label: "A", text: "A street address" },
                            { label: "B", text: "An approximate budget" },
                            { label: "C", text: "The name of a caterer" },
                            { label: "D", text: "The number of guests" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "루히야 씨가 오테로 씨에게 요청하는 정보는?",
                        explanation: `마지막 단락에서 '예상 손님이 몇 명인지 알려달라(let us know how many guests you expect)'고 했으므로 정답은 (D)입니다.`
                    }
                ]
            },
            // Questions 168-171: E-mail
            {
                id: "p7-t5-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t5-s9-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Cheryl Futrel <cfutrel@zephyrmail.com>\nFrom: Lydia Matsuda <service@candella.com>\nDate: June 9\nSubject: Home decorating\n\nDear Ms. Futrel,\n\nThank you for your interest in Candella Interior Design. — [1] —. We are proud to claim that we are the oldest and most successful online design consulting company in the region. We welcome you as a new client. — [2] —. From modest country homes to urban apartments, we do it all.\n\nWe understand from your original inquiry that you intend to sell your apartment soon and are primarily interested in how best to present it to prospective buyers. Here's how our online services work. After completing an online questionnaire, — [3] —. Next, you will be matched with an online professional interior designer who can help you with wall choices and paint colors, window treatments, and floor coverings. You will receive a room layout plan and a personalized list of ideas for furniture and accessories, with all products available for purchase online. — [4] —. As a special bonus, from now until July 1 our online retail partners have agreed to offer a 10 percent discount on products purchased through our links.\n\nFinally, you will be glad to learn that we charge not by the hour but by the room for our design ideas, with the average price being about $275 per room.\n\nWe look forward to hearing from you and working with you soon.\n\nSincerely,\n\nLydia Matsuda`,
                        translation: `푸트렐 씨께,\n\nCandella 인테리어 디자인에 관심을 주셔서 감사합니다. — [1] —. 저희는 이 지역에서 가장 오래되고 가장 성공한 온라인 디자인 컨설팅 회사라고 자북합니다. 저희는 귀하를 새로운 고객으로 환영합니다. — [2] —. 소박한 시골집에서 도심의 아파트까지 저희는 모든 것을 다룹니다.\n\n고객님이 처음 보낸 문의를 통해 고객님께서 곧 아파트를 매도할 계획이며 어떻게 하면 잠재 구매자에게 아파트를 최상으로 보여 줄 수 있을지에 관심이 있으시다는 것을 알고 있습니다. 저희의 디자인 서비스가 진행되는 방식은 다음과 같습니다. 온라인 설문기를 작성하신 후에는 — [3] —. 다음으로, 페인트 색상, 창문 처리, 바닥재에 대한 모든 선택을 도와드릴 온라인 전문 인테리어 디자이너를 소개해 드립니다. 방 배치 계획과 가구 및 장식품에 대한 맞춤형 아이디어 목록을 받으시게 되며, 전 제품은 온라인으로 구매 가능합니다. — [4] —. 특별 보너스로 지금부터 7월 1일까지 저희 온라인 소매 협력사들은 당사 링크를 통해 구매한 제품에 10퍼센트 할인을 제공하기로 합의했습니다.\n\n마지막으로 저희가 디자인 아이디어에 대해 시간당이 아닌 방에 따라서 청구한다는 점을 아시면 기뻐하실 것이며 평균 가격은 방당 약 275달러입니다.\n\n고객님의 답변을 기다리며 곧 함께 작업하게 되기를 고대합니다.\n\n리디아 마츠다`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is indicated about Candella Interior Design?",
                        options: [
                            { label: "A", text: "Its main office is located in a major city." },
                            { label: "B", text: "Its staff members visit clients' houses." },
                            { label: "C", text: "It has been in business longer than its competitors have been." },
                            { label: "D", text: "It is a family-run business." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Candella Interior Design에 대해 명시된 것은?",
                        explanation: `첫 단락의 두 번째 문장에서 자신들(칸델라 인테리어 디자인)은 이 지역에서 가장 오래되고 가장 성공한 온라인 디자인 컨설팅 회사라고 자부한다(We are proud to claim that we are the oldest and most successful online design consulting company in the region)고 했으므로 지역에서 누구보다 이 사업을 오래 한 업체라는 점을 알 수 있습니다.`
                    },
                    {
                        id: "169",
                        text: "Why does Ms. Futrel want to redecorate her apartment?",
                        options: [
                            { label: "A", text: "To prepare for a visit from relatives" },
                            { label: "B", text: "To make it attractive to potential buyers" },
                            { label: "C", text: "To replace furniture that she dislikes" },
                            { label: "D", text: "To use it as an example for her clients" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "푸트렐 씨가 자신의 아파트를 다시 꾸미고 싶어 하는 이유는?",
                        explanation: `두 번째 단락의 첫 문장에서 마츠다 씨가 고객인 푸트렐 씨에게 곧 아파트를 매도할 계획이며 어떻게 하면 잠재 구매자에게 아파트를 최상으로 보여 줄 수 있을지에 관심이 많다는 것을 알고 있다(We understand from your original inquiry that you intend to sell your apartment ~ interested in how best to present it to prospective buyers)고 했으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "170",
                        text: "What will happen on July 1?",
                        options: [
                            { label: "A", text: "Room accessories will be distributed." },
                            { label: "B", text: "Work will begin on a new project." },
                            { label: "C", text: "The client list will be expanded." },
                            { label: "D", text: "A special offer will end." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "7월 1일에 일어날 일은?",
                        explanation: `두 번째 단락의 마지막 문장에서 특별 보너스로 지금부터 7월 1일까지 온라인 소매 협력사들이 당사 링크를 통해 구매한 제품에 10퍼센트 할인을 제공하기로 합의했다(As a special bonus, from now until July 1 our online retail partners have agreed to offer a 10 percent discount)고 했습니다. 따라서 7월 1일은 할인 혜택이 종료되는 날이므로 (D)가 정답입니다.`
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The answers will give us a sense of your taste and requirements.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"답변을 통해 저희는 고객님의 취향과 요구사항을 파악하게 됩니다.\"",
                        explanation: `주어진 문장에서 '답변을 통해 고객의 취향과 요구사항을 파악한다'고 했으므로, 주어진 문장 앞에는 고객이 온라인 설문지 등을 통해 질문에 답변하는 내용(After completing an online questionnaire)이 와야 흐름상 자연스럽습니다.`
                    }
                ]
            },
            // Questions 172-175: Text Message Chain
            {
                id: "p7-t5-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t5-s10-p1",
                        type: "CHAT_MESSAGE",
                        title: "Text Message Chain",
                        content: `Darius Wilkins [11:09 A.M.]\nHi, Ms. Clarke. This is Darius from Roto Bicycle. I promised to check with you before servicing your bicycle.\n\nLauren Clarke [11:14 A.M.]\nThanks. So, what do you think?\n\nDarius Wilkins [11:15 A.M.]\nIn addition to the regular maintenance service, I suggest a drivetrain cleaning and new brake mechanisms.\n\nLauren Clarke [11:16 A.M.]\nOK. What does that come to?\n\nDarius Wilkins [11:18 A.M.]\nOur comprehensive maintenance service, which includes the same gear and brake adjustments as a regular maintenance service, plus the drivetrain cleaning, is $140. Add $70 for two new brake mechanisms and pads and another $30 for labor charges. So it should come to around $240 altogether. Shall I move forward?\n\nLauren Clarke [11:21 A.M.]\nWow! That much?\n\nDarius Wilkins [11:22 A.M.]\nEspecially with that major bicycle race you have ahead of you.\n\nLauren Clarke [11:24 A.M.]\nI know. I guess we have to do it. Please let me know when it's ready.`,
                        translation: `다리우스 윌킨스 [오전 11:09] 안녕하세요, 클라크 씨. 로토 자전거의 다리우스입니다. 자전거를 정비하기 전에 고객님과 상의하기로 약속했어요.\n\n로렌 클라크 [오전 11:14] 감사합니다. 어떻게 생각하세요?\n\n다리우스 윌킨스 [오전 11:15] 정기 정비 서비스 외에 구동계 청소와 새 브레이크 장치를 제안 드립니다.\n\n로렌 클라크 [오전 11:16] 알겠습니다. 그러면 어떻게 되죠?\n\n다리우스 윌킨스 [오전 11:18] 정기 정비 서비스와 동일한 기어 및 브레이크 조정에 구동계 청소를 추가한 포괄 정비 서비스는 140달러입니다. 두 개의 새 브레이크 장치와 패드에 70달러, 그리고 인건비로 30달러가 추가됩니다. 그러면 총 240달러 정도가 될 것입니다. 진행할까요?\n\n로렌 클라크 [오전 11:21] 와! 그렇게 많이요?\n\n다리우스 윌킨스 [오전 11:22] 특히 고객님은 중요한 자전거 경주를 앞두고 있으니까요.\n\n로렌 클라크 [오전 11:24] 맞아요. 해야 할 것 같네요. 준비되면 알려 주세요.`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "Why does Mr. Wilkins contact Ms. Clarke?",
                        options: [
                            { label: "A", text: "To recommend a new product" },
                            { label: "B", text: "To discuss a scheduling issue" },
                            { label: "C", text: "To confirm that bicycle parts have been ordered" },
                            { label: "D", text: "To ask for permission to perform some work" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "윌킨스 씨가 클라크 씨에게 연락한 이유는?",
                        explanation: `오전 11시 9분에 윌킨스 씨가 정비 시작 전에 상의하기로 했다고 말하며 추가적인 작업을 제안하고 있으므로, 작업을 수행하기 위한 허락을 구하는 (D)가 정답입니다.`
                    },
                    {
                        id: "173",
                        text: "Which service costs about $30?",
                        options: [
                            { label: "A", text: "New brake mechanisms" },
                            { label: "B", text: "Labor charges" },
                            { label: "C", text: "Regular maintenance service" },
                            { label: "D", text: "Drivetrain cleaning" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "비용이 약 30달러인 것은?",
                        explanation: `오전 11시 18분 메시지에서 인건비로 30달러가 추가된다(another $30 for labor charges)고 명시되어 있습니다.`
                    },
                    {
                        id: "174",
                        text: "At 11:21 A.M., what does Ms. Clarke most likely mean when she writes, \"That much?\"",
                        options: [
                            { label: "A", text: "She is not aware of how busy Mr. Wilkins is." },
                            { label: "B", text: "Her bicycle tire pressure was surprisingly low." },
                            { label: "C", text: "The repair costs seem high." },
                            { label: "D", text: "The bicycle repair will take longer than expected." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오전 11시 21분에 클라크 씨가 'That much?'라고 쓴 의도는?",
                        explanation: `총 수리비가 240달러라는 말을 들은 직후에 놀라움을 표현하고 있으므로, 수리비가 비싸다고 생각하는 (C)가 정답입니다.`
                    },
                    {
                        id: "175",
                        text: "What is suggested about Ms. Clarke?",
                        options: [
                            { label: "A", text: "She prefers to pay in cash." },
                            { label: "B", text: "She is planning to buy a new bicycle." },
                            { label: "C", text: "She is dissatisfied with the quality of a repair." },
                            { label: "D", text: "She will soon enter a bicycle race." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "클라크 씨에 대해 암시된 것은?",
                        explanation: `윌킨스 씨가 중요한 자전거 경주를 앞두고 있다(major bicycle race you have ahead of you)고 언급한 점을 통해 알 수 있습니다.`
                    }
                ]
            },
        ]
    },
    {
        testId: 6,
        title: "Test 6",
        sets: [
            // Questions 147-148: E-mail
            // Questions 147-148: E-mail
            {
                id: "p7-t6-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t6-s1-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: <m_castillo@rapidonet.com.ph>\nFrom: <no-reply@rapidonet.com.ph>\nDate: 19 June\nSubject: Rapido Net\n\nWe have noticed some activity on your account. Your secret-question option for password recovery was updated at 3:16 P.M. today. If you initiated this update, no further action is necessary. If not, we can help you secure your account. Call 919-555-1066 to speak to an account representative.\n\nIf you would like to remove the secret-question password recovery option, you may use a verified e-mail address or phone number to access your account instead. Make the process even more secure by setting up two-step verification. Just ask our representative how.\n\nThank you for trusting Rapido Net as your Internet service provider.`,
                        translation: `수신: <m_castillo@rapidonet.com.ph>\n발신: <no-reply@rapidonet.com.ph>\n날짜: 6월 19일\n제목: 라피도 넷\n\n고객님의 계정에서 몇 가지 활동이 발견되었습니다. 비밀번호 복구를 위한 비밀 질문 옵션이 오늘 오후 3시 16분에 업데이트되었습니다. 고객님께서 이 업데이트를 실행시키셨다면 추가적인 작업은 필요하지 않습니다. 그렇지 않은 경우, 저희가 계정 보호를 도와드릴 수 있습니다. 919-555-1066으로 전화하셔서 계정 담당자와 통화하십시오.\n\n비밀 질문 암호 복구 옵션을 제거하고 싶으시면, 인증된 이메일 주소 또는 전화번호를 대신 사용하여 계정에 접속하실 수 있습니다. 2단계 인증을 설정하여 절차를 훨씬 더 안전하게 하십시오. 저희 담당자에게 방법을 문의해 주십시오.\n\n라피도 넷을 인터넷 서비스 제공 업체로 신뢰해 주셔서 감사합니다.`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To welcome a new user to Rapido Net" },
                            { label: "B", text: "To remind a user about a forgotten password" },
                            { label: "C", text: "To confirm that a change was made to a user's account" },
                            { label: "D", text: "To inform a user about new company policies" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?",
                        explanation: `첫 단락의 두 번째 문장에서 비밀번호 복구를 위한 비밀 질문 옵션이 오늘 오후 3시 16분에 업데이트되었다(Your secret-question option ~ was updated at 3:16 P.M. today)고 했고, 고객이 이 업데이트를 실행했는지 확인하고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "148",
                        text: "What is indicated about Rapido Net?",
                        options: [
                            { label: "A", text: "It provides faster Internet speeds than its competitors." },
                            { label: "B", text: "It offers extra security through two-step verification." },
                            { label: "C", text: "It automatically generates complex passwords for customers." },
                            { label: "D", text: "It has increased its monthly user fee." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "라피도 넷에 대해 명시된 것은?",
                        explanation: `두 번째 단락의 두 번째 문장에서 2단계 인증을 설정하여 절차를 훨씬 더 안전하게 하라(Make the process even more secure ~ setting up two-step verification)고 안내하고 있으므로 (B)가 정답입니다.`
                    }
                ]
            },
            // Questions 149-150: E-mail
            {
                id: "p7-t6-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t6-s2-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: <luberville@futuremail.co.uk>\nFrom: <support@globaltech.co.uk>\nDate: 23 March\nSubject: Residential service\n\nDear Ms. Duberville,\n\nThanks for your order. We are very pleased to have you as a new customer and are contacting you to request that you set up an appointment for one of our representatives to install a Global Tech modem at your home. Please go online and select a 30-minute window out of the four we have posted to your account.\n\nIn preparation for our visit, please clear the area on the wall where you would like us to install the modem. Setting up the modem will take just a few minutes, after which you will be able to enjoy our service.\n\nWe will use the phone number listed on your account the morning of the appointment to confirm the visit. Let us know at this time if you have any questions for us.\n\nSincerely,\n\nGordon Mackey\nCustomer Service, Global Tech`,
                        translation: `수신: <luberville@futuremail.co.uk>\n발신: <support@globaltech.co.uk>\n날짜: 3월 23일\n제목: 주거 서비스\n\n더버빌 씨께,\n\n주문해 주셔서 감사합니다. 귀하를 새로운 고객으로 모시게 되어 매우 기쁘며, 저희 직원이 귀하의 댁에 글로벌 테크 모뎀을 설치하려면 예약을 하셔야 해서 연락드립니다. 온라인에서 귀하의 계정에 게시해 드린 네 가지 창 중 30분 창을 선택하십시오.\n\n저희가 방문할 것을 대비하여 모뎀 설치를 원하시는 벽면을 치워주십시오. 모뎀을 설치하는 데 몇 분만 소요되고 그 후에 서비스를 이용하실 수 있습니다.\n\n예약 당일 오전에 귀하의 계정에 기재된 전화번호로 방문을 확인할 예정입니다. 문의사항이 있으시면 이때 알려주시기 바랍니다.\n\n고든 맥키\n고객 서비스, 글로벌 테크`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "What kind of service has Ms. Duberville most likely contracted?",
                        options: [
                            { label: "A", text: "Window installation" },
                            { label: "B", text: "House cleanup" },
                            { label: "C", text: "Wall-to-wall carpeting" },
                            { label: "D", text: "Internet access" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "더버빌 씨가 계약했을 것 같은 서비스 종류는?",
                        explanation: `두 번째 문장에서 더버빌 씨에게 새로운 고객으로 모시게 되어 매우 기쁘며 직원이 더버빌 씨 자택에 글로벌 테크 모뎀을 설치하려면 예약을 해야 해서 연락드린다(We are very pleased to have you as a new customer ~ to install a Global Tech modem at your home)고 했으므로 더버빌 씨는 인터넷 서비스 업체와 계약했음을 알 수 있습니다.`
                    },
                    {
                        id: "150",
                        text: "What will happen at the time selected by Ms. Duberville?",
                        options: [
                            { label: "A", text: "She will pick up some equipment at an office." },
                            { label: "B", text: "She will receive a new Global Tech mobile phone." },
                            { label: "C", text: "She will be visited by a Global Tech representative." },
                            { label: "D", text: "She will be e-mailed a customer satisfaction survey." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "더버빌 씨가 선택한 시간에 일어날 일은?",
                        explanation: `두 번째 문장에서 더버빌 씨 자택에 글로벌 테크 모뎀을 설치하기 위해 예약을 하라고 했고, 선택한 시간에 모뎀 설치를 위해 직원이 방문할 것임을 알 수 있으므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 151-152: Online Chat
            {
                id: "p7-t6-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t6-s3-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Katrina Finton [1:46 P.M.]\nHey, Steven. I am moving to a new apartment soon, and the landlord requires a letter verifying my place of employment and my income. I have written up the letter. Would you be willing to sign it today as proof that I work here at Carrino Agency?\n\nSteven Khen [1:48 P.M.]\nDouble-check with Ariana Seltzer first. The human resources department usually has a form they can provide for you.\n\nKatrina Finton [1:49 P.M.]\nI tried that. They don't have a set form.\n\nSteven Khen [1:50 P.M.]\nNo problem then. Bring your document over.\n\nSteven Khen [1:51 P.M.]\nBy the way, the meeting about the Zaine Company Web site was moved to 3:00 P.M. You already have all your designs for their Web site ready, right?\n\nKatrina Finton [1:52 P.M.]\nI'm all set.`,
                        translation: `카트리나 핀톤 [오후 1:46] 안녕하세요, 스티븐. 제가 곧 새 아파트로 이사를 가려고 하는데, 집주인이 저의 직장과 소득을 입증하는 서류를 요구하고 있습니다. 제가 서류는 작성해 놓았습니다. 제가 여기 카리노 에이전시에서 근무하고 있다는 증거로 오늘 이 서류에 서명을 좀 해주시겠습니까?\n\n스티븐 켄 [오후 1:48] 아리아나 셀처에게 먼저 다시 확인해 보세요. 인사부에 보통 당신에게 줄 수 있는 양식이 있어서요.\n\n카트리나 핀톤 [오후 1:49] 제가 알아봤습니다. 정해진 양식은 없습니다.\n\n스티븐 켄 [오후 1:50] 그럼 문제없습니다. 서류를 가져오세요.\n\n스티븐 켄 [오후 1:51] 그런데, 제인 컴퍼니 웹사이트에 대한 회의가 오후 3시로 변경되었습니다. 이미 그들의 웹사이트를 위한 당신의 디자인을 전부 준비해 놓으셨죠?\n\n카트리나 핀톤 [오후 1:52] 준비해 놓았습니다.`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "At 1:49 P.M., what does Ms. Finton most likely mean when she writes, \"I tried that\"?",
                        options: [
                            { label: "A", text: "She signed a rental agreement." },
                            { label: "B", text: "She submitted proof of income." },
                            { label: "C", text: "She contacted Ms. Seltzer." },
                            { label: "D", text: "She filled out a form." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오후 1시 49분에 핀톤 씨가 \"제가 알아봤습니다\"라고 쓴 의도는?",
                        explanation: `1시 48분에 켄 씨가 아리아나 셀처에게 먼저 다시 확인해 보라(Double-check with Ariana Seltzer first)고 했고 1시 49분에 핀톤 씨가 제가 알아봤다(I tried that)고 대답했으므로, 핀톤 씨는 셀처 씨에게 이미 연락해서 확인해 봤다는 의미임을 알 수 있습니다.`
                    },
                    {
                        id: "152",
                        text: "What most likely is Ms. Finton's position?",
                        options: [
                            { label: "A", text: "Apartment manager" },
                            { label: "B", text: "Office administrator" },
                            { label: "C", text: "Human resources director" },
                            { label: "D", text: "Web designer" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "핀톤 씨의 직책은 무엇일 것 같은가?",
                        explanation: `1시 51분에 켄 씨가 핀톤 씨에게 그들의 웹사이트를 위한 디자인을 전부 준비해 놓았는지(You already have all your designs for their Web site ready, right?) 확인하는 것으로 보아 핀톤 씨는 웹사이트를 디자인하는 사람임을 알 수 있습니다.`
                    }
                ]
            },
            // Questions 153-155: Web page
            {
                id: "p7-t6-set4",
                questionRange: "153-155",
                passages: [
                    {
                        id: "p7-t6-s4-p1",
                        type: "WEBPAGE",
                        title: "Web Page",
                        content: `http://www.marilisprofessionalcoaching.com\n\nMarilis Professional Coaching: January Events\n\nJanuary 15 at 4:30 P.M.—Job Search Support\nLearn about the latest tools and techniques to help you find a rewarding entry-level job. Topics include the best Web sites for job announcements and how to use professional organizations to get job leads.\n\nJanuary 16 at 4:30 P.M.—How to Market Yourself\nTo set yourself apart from other candidates, you have to effectively communicate the value you'll bring to the company. This session will help you successfully promote yourself to potential employers, both in person and through social media.\n\nJanuary 17 at 4:30 P.M.—Interview Strategies\nGet tips on interview rules, common questions, and the process for what you need to do before, during, and after a job interview. This session will be interactive, featuring mock interviews with attendees.\n\nGo to www.marilisprofessionalcoaching.com/register to sign up for any of these low-cost events. Note that all January events are virtual.`,
                        translation: `http://www.marilisprofessionalcoaching.com\n\n마릴리스 작업 코칭: 1월 행사\n\n1월 15일 오후 4시 30분—구직 지원\n보람 있는 신입직을 찾는 데 도움이 되는 최신 도구 및 기술에 대해 배워 보세요. 주제에는 최고의 구직 공고 웹사이트와 구직 기회를 얻기 위해 전문 조직을 활용하는 방법이 포함됩니다.\n\n1월 16일 오후 4시 30분—스스로를 마케팅하는 방법\n다른 구직자들로부터 스스로를 눈에 띄게 하려면, 회사에 가져다 줄 가치를 효과적으로 전달해야 합니다. 이 세션은 대면으로나 소셜 미디어를 통해 잠재적 고용주에게 자신을 성공적으로 홍보하는 데 도움이 될 것입니다.\n\n1월 17일 오후 4시 30분—면접 전략\n면접 규칙, 일반적인 질문, 그리고 면접 도중 및 전후에 해야 할 일에 대한 절차와 관련해 조언을 얻어 가세요. 이 세션은 참석자들과의 모의 면접을 포함해 대화식으로 진행됩니다.\n\n이 저렴한 행사에 등록하시려면 www.marilisprofessionalcoaching.com/register를 방문하세요. 1월의 모든 행사는 온라인으로 진행됩니다.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is the purpose of the Web page?",
                        options: [
                            { label: "A", text: "To promote career-assistance services" },
                            { label: "B", text: "To announce a local job fair for recent graduates" },
                            { label: "C", text: "To advertise open positions at social media companies" },
                            { label: "D", text: "To describe rewarding careers in Web design and creation" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_PURPOSE",
                        translation: "웹페이지의 목적은?",
                        explanation: `웹페이지의 제목이 마릴리스 직업 코칭: 1월 행사(Marilis Professional Coaching: January Events)이고, 행사 목록이 구직 지원(Job Search Support), 스스로를 마케팅하는 방법(How to Market Yourself), 면접 전략(Interview Strategies)인 것으로 보아 구직 지원 서비스를 홍보하려는 목적임을 알 수 있습니다. 따라서 (A)가 정답입니다.`
                    },
                    {
                        id: "154",
                        text: "According to the Web page, what will happen on January 17?",
                        options: [
                            { label: "A", text: "Companies will post job opportunities." },
                            { label: "B", text: "Employers will make hiring decisions." },
                            { label: "C", text: "Job candidates will attend a group interview." },
                            { label: "D", text: "Participants will practice responding to interviewers." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "웹페이지에 따르면 1월 17일에 무슨 일이 일어날 것인가?",
                        explanation: `세 번째 행사 목록에 1월 17일 오후 4시 30분에 면접 전략(January 17 at 4:30 P.M.—Interview Strategies) 코칭을 한다고 나와 있고, 이 세션은 참석자들과의 모의 면접을 포함해 대화식으로 진행된다(This session will be interactive, featuring mock interviews with attendees)고 했으므로 (D)가 정답입니다.`
                    },
                    {
                        id: "155",
                        text: "What is indicated about the events?",
                        options: [
                            { label: "A", text: "They occur each month." },
                            { label: "B", text: "They take place online." },
                            { label: "C", text: "They are for senior professionals." },
                            { label: "D", text: "They are free of charge." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "행사에 대해 명시된 것은?",
                        explanation: `마지막 문장에서 1월의 모든 행사는 온라인으로 진행된다(Note that all January events are virtual)고 했으므로 (B)가 정답입니다.`
                    }
                ]
            },
            // Questions 156-158: Review
            {
                id: "p7-t6-set5",
                questionRange: "156-158",
                passages: [
                    {
                        id: "p7-t6-s5-p1",
                        type: "ARTICLE",
                        title: "Review",
                        content: `by Marcus Watanabe\n\n"Ideal residential developments combine twenty-first-century convenience with small-town charm." That is the philosophy found in the brochure of the Homestead at Eaton, a recently completed housing development just outside the town of Eaton. — [1] —.\n\nThe community has wide streets, sidewalks, and three small parks surrounding a central square. The square features a café, a grocery store, and a few shops. In the northeast corner of the development, there is an activity complex that includes a gym, movie theater, and swimming pool. — [2] —. "This means you never have to leave the community unless you want to," said Marjorie Solomon, sales director. "Once you visit, you'll realize why so many people are purchasing homes here."\n\nSolomon is right to praise the effort that went into the development. Of course, the Homestead isn't just a pretty place to live. — [3] —. The planners have definitely put thought into making the location environmentally sustainable. Natural habitats were carefully preserved, and the houses and other structures were designed to conserve water and energy. — [4] —.\n\nModel homes are currently available for tours. Open houses take place on Saturdays and Sundays between 12:30 P.M. and 4:00 P.M. Alternatively, call 855-555-0129 to schedule an appointment.`,
                        translation: `작성: 마커스 와타나베\n\n"이상적인 주거지 개발은 21세기의 편리함과 소도시의 매력을 결합합니다." 이는 에스톤 시 바로 외곽에 최근 완공된 주거 개발 구역인 홈스테드 앳 에스톤의 안내 책자에서 볼 수 있는 철학입니다. — [1] —.\n\n이 소도시에는 넓은 도로, 인도, 그리고 중앙 광장을 둘러싸고 있는 세 개의 작은 공원이 있습니다. 광장에는 카페와 식당, 여러 가게들이 있습니다. 개발 구역의 북동쪽 모퉁이에는 체육관, 극장, 수영장을 포함한 활동 단지가 있습니다. — [2] —. "이는 원하지 않는 한 도시를 떠날 필요가 없다는 것을 의미합니다"라고 마조리 솔로몬 영업 이사는 말했습니다. "일단 방문하시면 왜 이렇게 많은 사람들이 이곳에 집을 구입하는지 깨닫게 되실 겁니다."\n\n솔로몬 이사가 개발에 들어간 노력을 칭찬하는 것은 당연합니다. 물론 홈스테드는 단순히 예쁜 거주지 그 이상입니다. — [3] —. 개발 자들은 확실히 이 위치를 환경적으로 지속 가능하게 만드는 데 많은 신경을 썼습니다. 자연 서식지가 세심하게 보존되었고, 주택과 다른 건축물들은 물과 에너지를 아낄 수 있도록 설계되었습니다. — [4] —.\n\n현재 모델 하우스 투어가 가능합니다. 오픈 하우스 행사는 토요일과 일요일 오후 12시 30분에서 4시 사이에 열립니다. 또는 855-555-0129로 전화하여 개별 예약을 할 수 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "156",
                        text: "What is indicated about the development?",
                        options: [
                            { label: "A", text: "It has many different appealing facilities." },
                            { label: "B", text: "It is currently under construction." },
                            { label: "C", text: "Its membership fees are low." },
                            { label: "D", text: "It is located in a central square." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "개발 구역에 대해 명시된 것은?",
                        explanation: `두 번째 단락에 체육관, 극장, 수영장을 포함한 활동 단지가 있고, 카페와 식당, 여러 가게들이 있다고 언급되어 있으므로 다양한 매력적인 시설들이 있다는 (A)가 정답입니다.`
                    },
                    {
                        id: "157",
                        text: "How can potential residents learn more about the Homestead at Eaton?",
                        options: [
                            { label: "A", text: "By viewing a model home online" },
                            { label: "B", text: "By requesting a brochure" },
                            { label: "C", text: "By visiting the community" },
                            { label: "D", text: "By calling a current home owner" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "잠재 거주자들은 어떻게 홈스테드 앳 에스톤에 대해 더 자세히 알 수 있는가?",
                        explanation: `마지막 단락에서 모델 하우스 투어가 가능하고 주말에 오픈 하우스 행사가 열린다고 했으므로 직접 커뮤니티를 방문함으로써 정보를 얻을 수 있다는 (C)가 정답입니다.`
                    },
                    {
                        id: "158",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"But the Homestead is more than just a place with nice views.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"하지만 홈스테드는 단순히 경치만 좋은 곳 그 이상입니다.\"",
                        explanation: `주어진 문장에서 반전의 의미를 가진 But을 사용해 경치 그 이상이라고 했으므로, 앞에는 경치가 좋다는 내용이 와야 하고 뒤에는 환경 보호 등 다른 매력에 대한 내용이 오는 것이 자연스럽습니다. 따라서 [3]이 정답입니다.`
                    }
                ]
            },
            // Questions 159-160: E-mail
            {
                id: "p7-t6-set6",
                questionRange: "159-160",
                passages: [
                    {
                        id: "p7-t6-s6-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `From: Stefan Slonsman <slonsman@kaybunconstruction.ca>\nTo: Rita Palore <rpalore@palorecement.ca>\nDate: March 2\nRe: Follow-up\n\nDear Ms. Palore,\n\nThank you for sending your narrative description and your estimate for the cement work on our apartment project in Smithville. I have reviewed all the answers to our questions about your bid. We were very impressed with your narrative and your references after looking at your previous work.\n\nNevertheless, I still need my director, Anita Cho, to sign off on the deal. Your quoted price is slightly higher than we had budgeted. I will be speaking with Ms. Cho about this tomorrow morning. Based on your reputation for outstanding work, I am confident she will approve your bid.\n\nYou can expect to hear from us by March 4.\n\nStefan Slonsman\nKaybun Construction`,
                        translation: `발신: 스테판 슬론스만 <slonsman@kaybunconstruction.ca>\n수신: 리타 팔로어 <rpalore@palorecement.ca>\n날짜: 3월 2일\n제목: 후속 조치\n\n팔로어 씨께,\n\n스미스빌에 있는 저희 아파트 프로젝트의 시멘트 작업에 대한 설명 글과 견적서(estimate)를 보내주셔서 감사합니다. 입찰 시 저희가 드린 모든 질문에 대한 귀하의 답변을 검토했습니다. 설명 글과 귀하의 이전 작업 결과물을 확인한 후 받은 추천 내용이 매우 인상적이었습니다.\n\n그럼에도 불구하고, 여전히 저희 이사인 애니타 조의 최종 승인이 필요합니다. 제시하신 가격은 저희 예산보다 약간 높습니다. 내일 아침 이 건에 대해 조 이사와 논의할 예정입니다. 귀하의 뛰어난 작업 실력을 고려할 때 이사님이 입찰을 승인하실 것으로 확신합니다.\n\n3월 4일까지 연락을 드릴 예정입니다.\n\n스테판 슬론스만\n케이분 건설`
                    }
                ],
                questions: [
                    {
                        id: "159",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To introduce a new property owner" },
                            { label: "B", text: "To acknowledge receipt of a quote" },
                            { label: "C", text: "To invite team members to a presentation" },
                            { label: "D", text: "To request additional references for a past job" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?",
                        explanation: `첫 번째 문장에서 작업에 대한 설명 글과 견적서(estimate)를 보내 주어 감사하다고 하며 이메일을 시작하고 있으므로, 견적서 수령을 알리는 (B)가 정답입니다.`
                    },
                    {
                        id: "160",
                        text: "When will Mr. Slonsman most likely speak with Ms. Cho?",
                        options: [
                            { label: "A", text: "On March 2" },
                            { label: "B", text: "On March 3" },
                            { label: "C", text: "On March 4" },
                            { label: "D", text: "On March 5" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "슬론스만 씨는 언제 조 씨와 대화할 예정인가?",
                        explanation: `이메일 날짜가 3월 2일(March 2)이고, 두 번째 단락 세 번째 문장에서 내일 아침에 조 이사와 이야기할 예정(will be speaking with Ms. Cho about this tomorrow morning)이라고 했으므로 (B) 3월 3일이 정답입니다.`
                    }
                ]
            },
            // Questions 161-163: Advertisement
            {
                id: "p7-t6-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t6-s7-p1",
                        type: "ADVERTISEMENT",
                        title: "Advertisement",
                        content: `City of Altamesa seeks election workers.\n\nWho is qualified to be an election worker? Almost anyone can, including homemakers and professionals, as well as the unemployed, the self-employed, and retired persons.\n\nRequirements:\n• Ability to work from 6:00 A.M. to 1:00 P.M. or from 1:00 P.M. to 8:00 P.M. on 5 March, 7 June, and 1 November.\n• Must not live with or work for a politician who is currently running for office.\n• Eighteen years of age or older.\n• Comfortable interacting with the public.\n• Organized and detail-oriented.\n\nWorkers are compensated based on their duties and must attend a four-hour training workshop on 4 March:\nElection Assistant, $18/hour\nElection Clerk, $20/hour\nElection Chief, $22/hour\n\nVisit www.altamesaelections.gov/apply for more information or to apply.`,
                        translation: `알타메사 시에서 선거운동원을 모집합니다.\n\n누가 선거운동원이 될 자격이 있나요? 주부와 전문가를 포함하여 실업자, 자영업자, 은퇴자 등 거의 모든 사람이 가능합니다.\n\n요건:\n• 3월 5일, 6월 7일, 11월 1일 오전 6시부터 오후 1시 또는 오후 1시부터 오후 8시까지 근무 가능한 자.\n• 현재 공직에 출마 중인 정치인과 함께 살거나 일하고 있지 않은 자.\n• 18세 이상인 자.\n• 대중과 편안하게 대화할 수 있는 자.\n• 체계적이고 세심한 자.\n\n선거운동원은 직무에 따라 보상을 받으며, 3월 4일에 열리는 4시간짜리 교육 워크숍에 참여해야 합니다.\n선거 보조원, 시간당 18달러\n선거 사무원, 시간당 20달러\n선거 관리 위원장, 시간당 22달러\n\n더 많은 정보나 지원을 원하시면 www.altamesaelections.gov/apply를 방문하십시오.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What information is included in the advertisement?",
                        options: [
                            { label: "A", text: "Pay rates" },
                            { label: "B", text: "Working locations" },
                            { label: "C", text: "An application deadline" },
                            { label: "D", text: "The start time of the training workshop" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "광고에 포함된 정보는?",
                        explanation: `광고 중간 부분에서 보조원, 사무원, 위원장에 따라 시간당 지급되는 금액(Election Assistant, $18/hour 등)을 명시하고 있으므로 급여율인 (A)가 정답입니다.`
                    },
                    {
                        id: "162",
                        text: "What is a requirement for the job?",
                        options: [
                            { label: "A", text: "An interest in politics" },
                            { label: "B", text: "A high school diploma" },
                            { label: "C", text: "Voter registration" },
                            { label: "D", text: "Strong communication skills" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "채용 요건으로 언급된 것은?",
                        explanation: `요건(Requirements) 중 네 번째 항목에 대중과 대화하는 것이 편안해야 한다(Comfortable interacting with the public)고 했으므로 (D)가 정답입니다.`
                    },
                    {
                        id: "163",
                        text: "What is mentioned about the training workshop?",
                        options: [
                            { label: "A", text: "It is offered three times a year." },
                            { label: "B", text: "It is led by experienced election officials." },
                            { label: "C", text: "It is required for all election workers." },
                            { label: "D", text: "It can be attended either in person or online." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "교육 워크숍에 대해 언급된 것은?",
                        explanation: `워크숍 관련 문장에서 선거운동원들은 교육 워크숍에 참여해야 한다(must attend a four-hour training workshop)고 명시되어 있으므로 모든 근무자에게 필수임을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 164-167: E-mail
            {
                id: "p7-t6-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t6-s8-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Lee Ji-hyung <jlee@myemail.com>\nFrom: Robert Wang <rwang@frontstreetbank.com>\nDate: April 7\nSubject: Is VIS for you?\n\nDear Mr. Lee,\n\nYou are now able to enroll in Front Street Bank's new Voice Identification System (VIS). — [1] —. VIS is a fast, convenient, and secure way to access and control your Front Street Bank accounts by phone. — [2] —. You can perform a variety of specific tasks. — [3] —. For example, if you say \"Make a loan payment,\" the system can then pay your Front Street Bank loan. Say \"Recent transactions\" to hear the history of your credit card charges. You can even transfer money between accounts. — [4] —. Visit www.frontstreetbank.com/VIS to find out all the ways that VIS can simplify your banking life.\n\nYour voiceprint is stored securely by Front Street Bank on Front Street. It can be used only on your registered phone. Call 615-555-0189 to set up VIS for your accounts. If in the future you no longer wish to use VIS to access your account, simply call to have one of our customer-service representatives delete your identification file.\n\nThank you for being a valued Front Street Bank customer.\n\nRobert Wang, Branch Manager`,
                        translation: `수신: 이지형 <jlee@myemail.com>\n발신: 로버트 왕 <rwang@frontstreetbank.com>\n날짜: 4월 7일\n제목: VIS는 귀하를 위한 시스템인가요?\n\n이 씨께,\n\n귀하께서는 이제 프런트 스트리트 인터넷 은행의 새로운 음성 인식 시스템(VIS)에 등록하실 수 있습니다. — [1] —. VIS는 전화기로 귀하의 은행 계좌에 접속하고 제어할 수 있는 빠르고 편리하며 안전한 방법입니다. — [2] —. 귀하는 다양한 특정 업무를 수행할 수 있습니다. — [3] —. 예를 들어, "대출금 지불"이라고 말하면 시스템이 계좌에서 대출금을 지불할 수 있습니다. "최근 거래"라고 말하면 신용카드 거래 내역을 확인할 수 있습니다. 심지어 계좌 간 돈을 이체할 수도 있습니다. — [4] —. www.frontstreetbank.com/VIS에서 VIS가 귀하의 은행 업무를 간편하게 해주는 모든 방법을 확인해 보십시오.\n\n귀하의 음성 인식 정보는 프런트 스트리트 지점에 안전하게 저장됩니다. 이 정보는 귀하의 등록된 전화기에서만 사용할 수 있습니다. 615-555-0189로 전화하여 귀하의 계좌에 VIS를 설정하십시오. 나중에 더 이상 VIS를 통해 계좌에 접속하고 싶지 않으시면, 저희 고객 서비스 담당자에게 전화하여 신원 확인 정보 파일을 삭제해 달라고 요청하십시오.\n\n프런트 스트리트 인터넷 은행의 가치 있는 고객이 되어 주셔서 감사합니다.\n\n로버트 왕, 지점장`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To welcome a new customer" },
                            { label: "B", text: "To report an account error" },
                            { label: "C", text: "To verify a loan approval" },
                            { label: "D", text: "To promote a new service" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?",
                        explanation: `첫 문장에서 프런트 스트리트 인터넷 은행의 새로운 음성 인식 시스템(VIS)에 등록할 수 있다고 안내하며 서비스를 홍보하고 있으므로 (D)가 정답입니다.`
                    },
                    {
                        id: "165",
                        text: "What is mentioned about VIS?",
                        options: [
                            { label: "A", text: "It allows users to access accounts by voice." },
                            { label: "B", text: "It can be used at various financial institutions." },
                            { label: "C", text: "It requires customers to pay a fee." },
                            { label: "D", text: "It is available only at certain times of the day." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "VIS에 대해 언급된 것은?",
                        explanation: `첫 단락의 두 번째 문장에서 VIS는 전화기로 은행 계좌에 접속하고 제어할 수 있는 방법이라고 설명하고 구체적인 예시들을 통해 음성으로 계좌 업무가 가능함을 보여주었으므로 (A)가 정답입니다.`
                    },
                    {
                        id: "166",
                        text: "What must a customer do to cancel VIS?",
                        options: [
                            { label: "A", text: "Visit a local branch" },
                            { label: "B", text: "Make a telephone call" },
                            { label: "C", text: "Complete an online form" },
                            { label: "D", text: "E-mail customer service" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "고객이 VIS를 취소하려면 무엇을 해야 하는가?",
                        explanation: `두 번째 단락의 마지막 문장에서 더 이상 VIS를 사용하고 싶지 않으면 전화를 걸어(simply call to have...) 담당자가 파일을 삭제하도록 요청하면 된다고 했으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"You can perform a variety of specific tasks.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"귀하는 다양한 특정 업무를 수행할 수 있습니다.\"",
                        explanation: `주어진 문장은 VIS를 통해 수행할 수 있는 다양한 업무가 있다는 일반적인 진술입니다. 따라서 구체적인 예시(대출금 지불, 이체 등)가 나오기 전인 [2] 위치에 오는 것이 가장 적절합니다.`
                    }
                ]
            },
            // Questions 168-171: Advertisement
            {
                id: "p7-t6-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t6-s9-p1",
                        type: "ADVERTISEMENT",
                        title: "Advertisement",
                        content: `Sunrise Publishing\n\nFour new titles in the Enterprise Series have just been released. Buy one and get 50 percent off the second one (shipping excluded) when you purchase from our Web site by November 30. Order today!\n\nBiography of Haruto Yamada (hardcover)\nA biography of famous executive Haruto Yamada, including insights into how his career influenced his approach to business governance. Paperback $14.99\n\nUnder the Moonbeam (hardcover)\nA collection of transcribed interviews with former trade company employees that illuminates twentieth-century Korean commerce. Hardcover $22.99, Audio $8.99\n\nInvisible Connections (hardcover)\nA collection of transcribed lectures and archival photos from business administration professor Gloria De Leon's 40-year career. Hardcover $25.99\n\nThe Flashback (hardcover)\nA former Australian trade commissioner recalls his diplomatic career in this engaging memoir. Paperback $14.99, Downloadable E-book $9.99`,
                        translation: `선라이즈 출판사\n\n엔터프라이즈 시리즈 중 4권의 새로운 도서가 방금 출간되었습니다. 11월 30일까지 저희 웹사이트에서 구매하시고, 한 권 구매 시 두 번째 권은 50퍼센트를 할인받으세요! (배송비 제외) 오늘 주문하세요!\n\n하루토 야마다의 전기 (양장본)\n유명한 경영자 하루토 야마다의 전기로, 그의 경력이 기업 관리에 어떻게 영향을 미쳤는지에 대한 통찰이 담겨 있습니다. 페이퍼백 14.99달러\n\n달빛 아래 근무 (양장본)\n전직 무역회사 직원들과의 인터뷰를 통해 조명한 20세기 한국의 교역. 양장본 22.99달러, 오디오북 8.99달러\n\n보이지 않는 연결 (양장본)\n40년 경력의 경영학 교수 글로리아 드 레온이 강의한 내용의 필사와 기록 사진이 있는 전집. 양장본 25.99달러\n\n회상 (양장본)\n전직 호주 무역 사무관이 이 매력적인 회고록에서 자신의 외교 경력 중 가졌던 기록을 회상합니다. 페이퍼백 14.99달러, 다운로드 가능한 전자책 9.99달러`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is currently being offered to customers?",
                        options: [
                            { label: "A", text: "Coupons for books by select authors" },
                            { label: "B", text: "A discount on its Web site for a second purchase" },
                            { label: "C", text: "Free shipping for one order" },
                            { label: "D", text: "A free catalog from the publisher" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "현재 고객들에게 제공되고 있는 것은?",
                        explanation: `첫 단락의 두 번째 문장에서 11월 30일까지 웹사이트에서 구매하면 한 권 구매 시 두 번째 권은 50퍼센트를 할인해 준다(Buy one and get 50 percent off the second one)고 했으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "169",
                        text: "Who is Mr. Yamada?",
                        options: [
                            { label: "A", text: "A government official" },
                            { label: "B", text: "A career counselor" },
                            { label: "C", text: "An electrician" },
                            { label: "D", text: "A company leader" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "야마다 씨는 누구인가?",
                        explanation: `첫 번째 책 설명에서 유명한 경영자 하루토 야마다의 전기(A biography of famous executive Haruto Yamada)라고 언급했으므로 기업 간부인 (D)가 정답입니다.`
                    },
                    {
                        id: "170",
                        text: "What is true of all the books described in the advertisement?",
                        options: [
                            { label: "A", text: "They are written by the same author." },
                            { label: "B", text: "They can be read in digital format." },
                            { label: "C", text: "They focus on business subjects." },
                            { label: "D", text: "They have been translated into several languages." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "광고에 설명된 모든 책의 공통점은?",
                        explanation: `네 권의 책이 모두 경영인, 한국의 무역(commerce), 경영학(business administration) 교수, 무역 사무관 등 비즈니스와 관련된 내용을 다루고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "171",
                        text: "Which book includes historic images?",
                        options: [
                            { label: "A", text: "Biography of Haruto Yamada" },
                            { label: "B", text: "Under the Moonbeam" },
                            { label: "C", text: "Invisible Connections" },
                            { label: "D", text: "The Flashback" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "역사적 이미지가 포함된 책은?",
                        explanation: `세 번째 책인 '보이지 않는 연결(Invisible Connections)'에 대한 설명에서 기록 사진이 있는 전집(A collection of ~ archival photos)이라고 언급되어 있으므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 172-175: Online Chat
            {
                id: "p7-t6-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t6-s10-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Priyanka Kapoor [9:41 A.M.]\nWe need to talk about the family physicians conference in London. Where do we stand?\n\nAlfonso Gonzales [9:44 A.M.]\nI've already purchased airfare for all of us.\n\nPriyanka Kapoor [9:47 A.M.]\nGood. Scott Harris is going to arrange the transportation from the London airport to the venue. Do we need to worry about being connected to Wi-Fi?\n\nAlfonso Gonzales [9:50 A.M.]\nI've looked at our mobile provider's international roaming services. We'll have voice and texting, but limited data without a high speed option.\n\nBrian Kim [9:53 A.M.]\nLet's buy international SIM cards before we leave. We can get prepaid cards that offer unlimited high-speed data as well as voice and messaging. You won't have to worry about being connected.\n\nPriyanka Kapoor [9:57 A.M.]\nThat would solve the problem.\n\nAlfonso Gonzales [9:57 A.M.]\nGood idea, Brian. Thanks. Now we should talk about meeting for a meal.\n\nPriyanka Kapoor [9:59 A.M.]\nThe conference starts with breakfast in the hotel lobby each day. I know a good dinner spot nearby that we can visit on the first night. We can decide on a 6:00 P.M. plan for that. Other meals we can decide on later.`,
                        translation: `프리얀카 카푸르 [오전 9:41] 런던에서 열리는 가정의학 전문의 학회에 대해 이야기해야 합니다. 지금 어떤 상태죠?\n\n알폰소 곤잘레스 [오전 9:44] 이미 우리 모두를 위한 항공권을 구입했습니다.\n\n프리얀카 카푸르 [오전 9:47] 좋습니다. 스콧 해리스가 런던 공항에서 학회 장소로 가는 교통편을 마련할 것입니다. 와이파이 연결에 대해 걱정해야 할까요?\n\n알폰소 곤잘레스 [오전 9:50] 우리 휴대폰 공급업체의 국제 로밍 서비스를 알아봤습니다. 통화와 문자 기능은 되지만 데이터는 무제한 초고속 요금제가 아닌 제한된 옵션만 제공합니다.\n\n브라이언 킴 [오전 9:53] 출발하기 전에 국제용 SIM 카드를 삽입합시다. 음성과 메시지 기능뿐만 아니라 무제한 초고속 데이터를 제공하는 선불 카드를 살 수 있습니다. 와이파이 연결을 걱정할 필요가 없을 거예요.\n\n프리얀카 카푸르 [오전 9:57] 그러면 문제가 해결되겠네요.\n\n알폰소 곤잘레스 [오전 9:57] 좋은 생각입니다, 브라이언. 고마워요. 이제 식사를 위해 만나는 것에 대해 이야기해 봅시다.\n\n프리얀카 카푸르 [오전 9:59] 학회는 매일 아침 호텔 로비에서 조식과 함께 시작됩니다. 첫날 밤에 방문할 만한 근처의 괜찮은 저녁 식사 장소를 알고 있어요. 오후 6시에 그곳으로 가는 것으로 계획을 세울 수 있겠네요. 다른 식사 계획은 나중에 정하도록 하죠.`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "Where do the writers most likely work?",
                        options: [
                            { label: "A", text: "At a travel agency" },
                            { label: "B", text: "At a medical clinic" },
                            { label: "C", text: "At a transportation firm" },
                            { label: "D", text: "At a telecommunications company" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "글을 쓰는 사람들은 어디서 일할 가능성이 높은가?",
                        explanation: `오전 9시 41분에 카푸르 씨가 런던에서 열리는 가정의학 전문의 학회(family physicians conference)에 대해 이야기하자고 한 것으로 보아 글을 쓰는 사람들은 의료 기관에서 일하는 의사들임을 짐작할 수 있습니다. 따라서 (B)가 정답입니다.`
                    },
                    {
                        id: "173",
                        text: "At 9:41 A.M., what does Ms. Kapoor most likely mean when she writes, \"Where do we stand?\"",
                        options: [
                            { label: "A", text: "She is requesting an update on travel arrangements." },
                            { label: "B", text: "She wants to assess her colleagues' interest in an event." },
                            { label: "C", text: "She is inquiring about her colleagues' weekend activities." },
                            { label: "D", text: "She is checking if the staff is ready to host a conference." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 41분에 카푸르 씨가 \"Where do we stand?\"라고 쓴 의도는?",
                        explanation: `런던 학회에 대해 이야기하자며 현재 어떤 상황인지를 묻는 말이므로, 여행 준비 계획이 어느 정도 진행되었는지 묻고 있는 (A)가 정답입니다.`
                    },
                    {
                        id: "174",
                        text: "What is indicated about the writers?",
                        options: [
                            { label: "A", text: "They will be traveling together." },
                            { label: "B", text: "They are preparing a presentation." },
                            { label: "C", text: "They have a new mobile service." },
                            { label: "D", text: "They are attending the conference for the first time." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "글을 쓰는 사람들에 대해 명시된 것은?",
                        explanation: `오전 9시 44분에 곤잘레스 씨가 우리 모두를 위한 항공권(airfare for all of us)을 구입했다고 했으므로 함께 여행할 것임을 알 수 있습니다. 따라서 (A)가 정답입니다.`
                    },
                    {
                        id: "175",
                        text: "Why does Mr. Kim suggest buying SIM cards?",
                        options: [
                            { label: "A", text: "They are less expensive than international plans." },
                            { label: "B", text: "They can be used on all mobile devices." },
                            { label: "C", text: "They are currently in stock at a nearby electronics shop." },
                            { label: "D", text: "They eliminate the need for a Wi-Fi connection." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "킴 씨가 SIM 카드를 사는 것을 제안하는 이유는?",
                        explanation: `무제한 초고속 데이터를 제공하는 선불 카드를 사면 와이파이 연결을 걱정할 필요가 없을 것(We won't have to worry about being connected)이라고 했으므로 (D)가 정답입니다.`
                    }
                ]
            },
            // Questions 176-180: Job Advertisement and E-mail
            {
                id: "p7-t6-set11",
                questionRange: "176-180",
                passages: [
                    {
                        id: "p7-t6-s11-p1",
                        type: "ADVERTISEMENT",
                        title: "Job Advertisement",
                        content: `BLISSFUL HORSE STABLES\n\nPart-time worker needed to feed, wash, and groom horses. Must be able to work a minimum of eight hours a week, including occasional weekend hours. Although training is available, applicants who have experience working with horses are preferred. To apply, send an e-mail to Dorothy Lu, dlu@blissfulhorsestables.com.au, and attach your résumé.\n\nBlissful Horse Stables is the region's largest horse-boarding facility. It has been owned and operated by one family since 1988. Our business offers both long- and short-term boarding contracts. We have state-of-the-art indoor and outdoor exercise rings and a five-acre grazing pasture for our equine friends. A veterinarian is always on call.`,
                        translation: `행복한 마구간\n\n176(A) 말에게 먹이를 주고, 털을 씻기고 손질할 시간제 근로자를 구합니다. 때때로 주말 시간을 포함하여 일주일에 최소 8시간을 일할 수 있어야 합니다. 교육은 제공되지만 말과 함께 일한 경험이 있는 지원자를 우대합니다. 180 지원하려면 도로시 루에게 dlu@blissfulhorsestables.com.au로 이력서를 첨부하여 이메일을 보내 주세요.\n\n행복한 마구간은 이 지역에서 가장 큰 말 관리 177 시설입니다. 176(D) 1988년부터 한 가족이 소유하고 운영해 왔습니다. 저희 회사는 단기 및 장기 관리 계약을 모두 제공합니다. 176(C) 우리의 말 친구들을 위한 최첨단 실내외 운동장과 5에이커의 방목 초원도 있습니다. 수의사는 상시 대기 중입니다.`
                    },
                    {
                        id: "p7-t6-s11-p2",
                        type: "EMAIL",
                        content: `From: ota.kyle@opalmail.com\nTo: dlu@blissfulhorsestables.com.au\nSubject: Part-time position\nDate: 1 August\nAttachment: ota.rtf\n\nDear Ms. Lu,\n\nThis e-mail is in response to the advertisement that appeared in yesterday's edition of the Colby Today. At this time, I work for Ness Large Animal Clinic as a technician's assistant, but only three days a week. The part-time position you are advertising would enable me to do something I enjoy while increasing my working hours. I am happy to provide references upon request.\n\nAll the best,\nKyle Ota`,
                        translation: `발신: ota.kyle@opalmail.com\n수신: dlu@blissfulhorsestables.com.au\n제목: 시간제 일자리\n날짜: 8월 1일\n첨부: ota.rtf\n\n친애하는 루 씨에게,\n\n178 이 이메일은 <콜비 투데이> 어제 판에 실린 광고를 보고 보내는 것입니다. 179 현재 저는 네스 대형 동물 병원에서 기술 보조로 일하고 있지만 일주일에 3일뿐입니다. 귀하께서 광고하고 있는 시간제 일자리로 저는 근무 시간을 늘리면서도 제가 좋아하는 일을 할 수 있습니다. 요청하시는 즉시 기꺼이 추천서를 제공해 드리겠습니다.\n\n카일 오타`
                    }
                ],
                questions: [
                    {
                        id: "176",
                        text: "What is NOT indicated about Blissful Horse Stables?",
                        options: [
                            { label: "A", text: "It provides grooming services." },
                            { label: "B", text: "It requires a minimum stay of three days." },
                            { label: "C", text: "It has a large, grassy field for grazing." },
                            { label: "D", text: "It is a family-run business." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_NOT_TRUE",
                        translation: "행복한 마구간에 대해 명시되지 않은 것은?",
                        explanation: `구인 광고의 첫 문장에서 말에게 먹이를 주고 털을 씻기고 손질할(feed, wash, and groom horses) 시간제 근로자를 구한다고 했으므로 (A), 두 번째 단락의 네 번째 문장에서 우리의 말 친구들을 위한 최첨단 실내외 운동장과 5에이커의 방목 초원도 있다(We have ~ a five-acre grazing pasture for our equine friends)고 했으므로 (C), 두 번째 단락의 두 번째 문장에서 1988년부터 한 가족이 소유하고 운영해 왔다(It has been ~ family since 1988)고 했으므로 (D)는 모두 언급된 사실이다. 체류 기간에 대한 언급은 없으므로 (B)가 정답이다.`
                    },
                    {
                        id: "177",
                        text: "In the job advertisement, the word \"facility\" in paragraph 2, line 1, is closest in meaning to",
                        options: [
                            { label: "A", text: "simplicity" },
                            { label: "B", text: "chance" },
                            { label: "C", text: "openness" },
                            { label: "D", text: "center" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_SYNONYM",
                        translation: "구인 광고에서 두 번째 단락 1행의 \"facility\"와 의미가 가장 가까운 단어는?",
                        explanation: `의미상 행복한 마구간은 지역에서 가장 큰 '시설'이라는 뜻으로 쓰였으므로 '센터, 종합 시설'을 뜻하는 (D) center가 정답이다.`
                    },
                    {
                        id: "178",
                        text: "What most likely is Colby Today?",
                        options: [
                            { label: "A", text: "A regional newspaper" },
                            { label: "B", text: "A newsletter for horse owners" },
                            { label: "C", text: "A television program" },
                            { label: "D", text: "A tourism brochure" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "<콜비 투데이>는 무엇일 것 같은가?",
                        explanation: `이메일의 첫 문장에서 이 이메일은 <콜비 투데이> 어제 판에 실린 광고를 보고 보내는 것(This e-mail is in response ~ edition of the Colby Today)이라고 한 것으로 보아 <콜비 투데이>는 지역 일간지임을 짐작할 수 있다. 따라서 (A)가 정답이다.`
                    },
                    {
                        id: "179",
                        text: "What is implied about Mr. Ota?",
                        options: [
                            { label: "A", text: "He has experience working with animals." },
                            { label: "B", text: "He graduated from a local school." },
                            { label: "C", text: "He would like to become a journalist." },
                            { label: "D", text: "He is not able to work on weekends." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오타 씨에 대해 암시된 것은?",
                        explanation: `이메일의 두 번째 문장에서 오타 씨가 현재 네스 대형 동물 병원에서 기술 보조로 일하고 있다(At this time, I work for Ness Large Animal Clinic as a technician's assistant)며 동물들이 있는 장소에서 근무하고 있다고 했으므로 (A)가 정답이다.`
                    },
                    {
                        id: "180",
                        text: "What has Mr. Ota most likely attached to his e-mail?",
                        options: [
                            { label: "A", text: "A diploma" },
                            { label: "B", text: "A résumé" },
                            { label: "C", text: "A letter of reference" },
                            { label: "D", text: "An article about horse care" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오타 씨는 이메일에 무엇을 첨부했을 것 같은가?",
                        explanation: `구인 광고의 첫 단락 마지막 문장에서 지원하려면 도로시 루에게 이력서를 첨부하여 이메일을 보내 달라(To apply, send an e-mail to Dorothy Lu ~ attach your résumé)고 했고, 오타 씨가 루 씨에게 보내는 이메일의 수신 주소가 dlu@blissfulhorsestables.com.au이고, 세 번째 문장에서 귀사가 광고하고 있는 시간제 일자리로 근무 시간을 늘리면서 자신이 좋아하는 일을 할 수 있다(The part-time position you ~ increasing my working hours)며 일자리에 지원하고 있으므로 오타 씨가 첨부한 것은 이력서임을 알 수 있다. 따라서 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 181-185: Online Form and E-mail
            {
                id: "p7-t6-set12",
                questionRange: "181-185",
                passages: [
                    {
                        id: "p7-t6-s12-p1",
                        type: "FORM",
                        title: "Online Form",
                        content: `https://www.pinkferngardens.co.nz/contact\n\nAbout | Shop Online | Locations | Contact Us\n\nLocated in Picton, New Zealand, Pink Fern Gardens sells a wide variety of plants, both edible and decorative. Please use the form below to submit your questions and comments.\n\nName: Mia Dixon\nE-mail: mdixon@sunmail.co.nz\nComment:\nI saw the callout to local growers on your social media feed. A few years ago, I started a large community food garden with my neighbours here in Helensville for us to tend in our free time. This year, we have more plants than we can consume ourselves. Specifically, we have dozens of potted mint and cardamom seedlings as well as other uncommon herbs, and I wonder if you are interested in expanding your offerings of herbs. We also have a half dozen two-year-old lemon tree saplings that are between two and three feet tall.`,
                        translation: `뉴질랜드 픽턴에 위치한 핑크 펀 가든스는 다양한 식물 및 장식용 식물을 판매합니다. 아래 양식을 사용하여 질문 및 의견을 제출해 주세요.\n\n이름: 미아 딕슨\n이메일: mdixon@sunmail.co.nz\n남기는 글:\n181 귀사의 소셜 미디어 피드에서 지역 재배자들을 향한 요청 글을 보았습니다. 182 몇 년 전, 저는 여기 헬렌스빌의 이웃들과 함께 여가 시간에 보살필 커다란 마을 먹거리 정원을 시작했습니다. 올해는 우리가 먹을 수 있는 것보다 식물이 더 많이 남았습니다. 구체적으로, 185 수십 개의 민트와 카다멈 묘목 화분뿐만 아니라 다른 희귀한 허브들도 가지고 있는데, 귀사에서 제공하는 허브 제품을 늘리는 것에 관심이 있는지 궁금합니다. 우리는 또한 2~3피트 높이의 2년 된 레몬 나무 묘목 여섯 그루를 가지고 있습니다.`
                    },
                    {
                        id: "p7-t6-s12-p2",
                        type: "EMAIL",
                        content: `To: mdixon@sunmail.co.nz\nFrom: purchasing@pinkferngardens.co.nz\nDate: 12 January\nSubject: Your comment\n\nDear Ms. Dixon,\n\nPink Fern Gardens is always seeking uncommon plants. As for your citrus saplings, we are currently purchasing those from licensed growers only. There is a disease affecting certain varieties, so we must be cautious. We learned our lesson regarding this last autumn!\n\nWe do buy other plants from independent growers, as long as the seedlings are potted and market ready. Here are the types of seedlings we buy and the wholesale price we pay for each plant: ferns ($8), vines ($6), annual flowers ($5), and herbs for cooking, especially oregano, mint, and rosemary ($2). Please stop by at your convenience with samples of your offerings, and we can discuss our needs further in person.\n\nKind regards,\nKen Yoneda\nPurchaser, Pink Fern Gardens`,
                        translation: `수신: mdixon@sunmail.co.nz\n발신: purchasing@pinkferngardens.co.nz\n날짜: 1월 12일\n제목: 귀하가 남기신 글\n\n딕슨 씨께,\n\n핑크 펀 가든스는 항상 희귀 식물을 찾고 있습니다. 183 귀하의 감귤류 묘목과 관련해서는, 현재 저희는 허가받은 재배자들에게서만 구매하고 있습니다. 특정 품종에 영향을 미치는 질병이 있어서 주의해야 합니다. 작년 가을에 이와 관련된 교훈을 얻었습니다!\n\n저희는 묘목이 화분에 담겨 있고 시장에 내놓을 준비가 되어 있다면 자영업 재배자들에게서 다른 식물들을 구입합니다. 185 저희가 구입하는 묘목의 종류와 각 식물에 지불하는 도매가격은 양치식물(8달러), 덩굴식물(6달러), 일년생 화초(5달러), 그리고 요리용 허브들로 특히 오레가노, 민트, 로즈메리(2달러)입니다. 184 편하실 때 귀하에서 제공하는 물건의 샘플을 가지고 방문해 주시면 저희가 필요한 것들에 대해 직접 더 자세히 논의할 수 있습니다.\n\n켄 요네다\n구매 담당, 핑크 펀 가든스`
                    }
                ],
                questions: [
                    {
                        id: "181",
                        text: "What motivated Ms. Dixon to contact Pink Fern Gardens?",
                        options: [
                            { label: "A", text: "A positive review from a customer" },
                            { label: "B", text: "An online post from Pink Fern Gardens" },
                            { label: "C", text: "An article about Pink Fern Gardens" },
                            { label: "D", text: "A phone message from Mr. Yoneda" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "딕슨 씨가 핑크 펀 가든스에 연락하게 된 동기는?",
                        explanation: `온라인 양식의 남기는 글 첫 문장에서 딕슨 씨가 귀사의 소셜 미디어 피드에서 지역 재배자들을 향한 요청 글을 보았다(saw the callout to local growers on your social media feed)고 한 것으로 보아 딕슨 씨는 핑크 펀 가든스에서 올린 온라인 게시물을 보고 글을 남기고 있음을 알 수 있다. 따라서 (B)가 정답이다.`
                    },
                    {
                        id: "182",
                        text: "What is indicated about Ms. Dixon?",
                        options: [
                            { label: "A", text: "She wants to turn her hobby into a full-time business." },
                            { label: "B", text: "She would like a part-time job at Pink Fern Gardens." },
                            { label: "C", text: "She founded a community garden with her neighbors." },
                            { label: "D", text: "She is president of a gardening club in Helensville." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "딕슨 씨에 대해 명시된 것은?",
                        explanation: `온라인 양식의 남기는 글 두 번째 문장에서 딕슨 씨가 몇 년 전, 여기 헬렌스빌의 이웃들과 함께 여가 시간에 보살필 커다란 마을 먹거리 정원을 시작했다(A few years ago, I started a large community food garden with my neighbours ~ tend in our free time)고 했으므로 (C)가 정답이다.`
                    },
                    {
                        id: "183",
                        text: "According to Mr. Yoneda, what happened last year?",
                        options: [
                            { label: "A", text: "Some of his employees resigned." },
                            { label: "B", text: "Some trees his company purchased were unhealthy." },
                            { label: "C", text: "His company obtained a license to export citrus trees." },
                            { label: "D", text: "His company ran out of fruit trees to sell." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "요네다 씨에 따르면, 작년에 일어난 일은?",
                        explanation: `이메일의 첫 단락 두 번째 문장에서 요네다 씨가 귀하의 감귤류 묘목과 관련해서는 현재 허가를 받은 재배자들에게서만 구매하고 있다(As for your citrus ~ from licensed growers only)면서, 특정 품종에 영향을 미치는 질병이 있어서 주의해야 하며 작년 가을에 이와 관련된 교훈을 얻었다(We learned our lesson regarding this last autumn)고 했다. 따라서 작년에 구입한 일부 나무에 질병이 있었다는 것이므로 (B)가 정답이다.`
                    },
                    {
                        id: "184",
                        text: "What does Mr. Yoneda ask Ms. Dixon to do?",
                        options: [
                            { label: "A", text: "Send him a list of supplies" },
                            { label: "B", text: "Contact an independent grower" },
                            { label: "C", text: "Buy seeds from Pink Fern Gardens" },
                            { label: "D", text: "Bring some plants to Pink Fern Gardens" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "요네다 씨가 딕슨 씨에게 요청하는 것은?",
                        explanation: `이메일의 마지막 문장에서 요네다 씨는 딕슨 씨에게 편할 때 제공하는 물건의 샘플을 가지고 방문하면 필요한 것들에 대해 직접 더 자세히 논의할 수 있다(Please stop by at your convenience with samples of your offerings ~ in person)고 했으므로 (D)가 정답이다.`
                    },
                    {
                        id: "185",
                        text: "How much would Mr. Yoneda pay Ms. Dixon for one of her potted seedlings?",
                        options: [
                            { label: "A", text: "$8.00" },
                            { label: "B", text: "$6.00" },
                            { label: "C", text: "$5.00" },
                            { label: "D", text: "$2.00" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "요네다 씨는 딕슨 씨에게 화분에 담긴 그녀의 묘목 하나당 얼마를 지불하겠는가?",
                        explanation: `온라인 양식의 남기는 글 네 번째 문장에서 딕슨 씨가 수십 개의 민트와 카다멈 묘목 화분뿐만 아니라 다른 희귀한 허브들도 가지고 있다고 했고, 이메일의 두 번째 단락 두 번째 문장에서 요네다 씨가 구입하는 묘목의 종류와 각 식물에 지불하는 도매가격은 양치식물(8달러), 덩굴식물(6달러), 일년생 화초(5달러), 그리고 요리용 허브들로 특히 오레가노, 민트, 로즈메리(2달러)라고 했다. 딕슨 씨가 가지고 있는 식물은 민트, 카다멈을 비롯한 허브이고 요네다 씨는 요리용 허브에 2달러를 지불한다고 했으므로 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 186-190: Web Page, E-mail, and Review
            {
                id: "p7-t6-set13",
                questionRange: "186-190",
                passages: [
                    {
                        id: "p7-t6-s13-p1",
                        type: "WEBPAGE",
                        title: "Web Page",
                        content: `https://www.elektroproofrepair.com/about\n\nTrust Elektroproof Repair to get your computer running right again!\n\nElektroproof Repair's no-surprises policy offers flat fees for labor at three price points: $145, $200, and $350. These fees do not include the cost of software or replacement parts. The majority of our repairs incur the $200 fee.\n\nNOTE: Because of a dramatic increase in demand, we now require appointments for all services. For an initial consultation with one of our highly qualified technicians, simply select from the available time slots on our schedule page. When you schedule your appointment, we require a $60 nonrefundable deposit which will be credited toward the cost of services rendered.\n\nIf you have any questions, please e-mail us at inquiries@elektroproofrepair.com. Whenever possible, we will contact you the same day or on the following business day. Most repairs are completed within three to five business days.`,
                        translation: `엘렉트로프루프 리페어를 믿고 여러분의 컴퓨터를 다시 정상적으로 작동시켜 보세요!\n\n엘렉트로프루프 리페어의 정찰제 정책은 세 가지 인건비 가격대(145달러, 200달러, 350달러)를 제공합니다. 이 요금에는 소프트웨어 비용이나 부품 교체 비용은 포함되지 않습니다. 대부분의 수리는 200달러의 비용이 발생합니다.\n\n참고: 186 급격한 수요 증가로 인해 현재 모든 서비스에 예약이 필요합니다. 저희의 우수한 기술자와의 초기 상담을 원하시면 예약 페이지에서 이용 가능한 시간대를 선택하시면 됩니다. 예약 시 반환되지 않는 보증금 60달러를 지불하셔야 하며 이 보증금은 제공된 서비스 요금에 충당됩니다.\n\n문의 사항이 있으시면 inquiries@elektroproofrepair.com으로 이메일을 보내 주세요. 가능한 한 당일 또는 다음 영업일에 연락드리겠습니다. 190 대부분의 수리는 영업일 기준 3~5일 이내에 완료됩니다.`
                    },
                    {
                        id: "p7-t6-s13-p2",
                        type: "EMAIL",
                        content: `From: Arthur Jacquet <ajacquet@elektroproofrepair.com>\nTo: Jessica Nelson <jnelson17@saffronmail.com>\nDate: January 14\nSubject: Re: Tea spill, please help!\n\nDear Ms. Nelson,\n\nThank you for contacting Elektroproof Repair. You asked if you could bring in your laptop for inspection tomorrow, January 15. Unfortunately, we are currently booked solid through January 18. The earliest available time slot is 8:00 A.M. on January 19. Please let me know if you would like to book that slot or if you have any questions.\n\nSincerely,\nArthur Jacquet, Elektroproof Repair`,
                        translation: `수신: 제시카 넬슨 <jnelson17@saffronmail.com>\n발신: 아서 자케 <ajacquet@elektroproofrepair.com>\n날짜: 1월 14일\n제목: 회신: 차를 쏟았습니다. 도와주세요!\n\n넬슨 씨께,\n\n엘렉트로프루프 리페어에 연락해 주셔서 감사합니다. 187 내일 1월 15일에 검사를 위해 노트북을 가져가도 되는지 문의하셨습니다. 안타깝게도 현재 1월 18일까지 예약이 완전히 다 찼습니다. 187 예약 가능한 가장 빠른 시간대는 1월 19일 오전 8시입니다. 이 시간대로 예약하기를 원하시거나 질문이 있으시면 알려 주십시오.\n\n아서 자케, 엘렉트로프루프 리페어`
                    },
                    {
                        id: "p7-t6-s13-p3",
                        type: "WEBPAGE",
                        title: "Review",
                        content: `https://www.buyertobuyerintel.com/repair_services/electronics/computer_devices\n\n*****\nElektroproof Repair\n\nI spilled tea on the keyboard of my faithful old laptop, and while I dried the exterior rather quickly, I was afraid the internal components might have been ruined. Luckily for me, Elektroproof Repair came to the rescue! After booking my consultation on the Web site, I waited anxiously for a reply. Within an hour, I got an e-mail directly from the owner. Although the time slot I had requested was not available, when I responded to his e-mail to express how urgently I needed my laptop, the owner said they had an unexpected cancellation and asked if I could bring it in that very morning, which I did. Since my computer was not turned on at the time of the accident, an Elektroproof Repair technician was able to dry the computer's insides and prevent damage to the hard drive or internal circuits. Other than a new battery, no other part was needed, and Elektroproof Repair had my laptop fully functional and back in my hands within 24 hours.\n-Jessica Nelson`,
                        translation: `오랫동안 믿고 잘 사용하던 노트북 키보드에 차를 쏟았고, 겉은 꽤 빨리 말렸지만 189 내부 부품이 망가졌을까 봐 걱정했습니다. 다행스럽게도 엘렉트로프루프 리페어가 구세주로 나섰습니다! 웹사이트에서 상담을 예약한 후 초조하게 답변을 기다렸습니다. 188 한 시간 이내에 사장님으로부터 직접 이메일을 받았습니다. 제가 요청한 시간대는 불가능했지만 얼마나 급하게 노트북이 필요한지 설명하자 사장님은 예상치 못한 예약 취소가 생겼다며 바로 그날 아침에 노트북을 가져올 수 있는지 물었고 저는 그렇게 했습니다. 사고가 났을 때 컴퓨터가 켜져 있지 않았기 때문에 엘렉트로프루프 리페어 기술자가 컴퓨터 내부를 건조하고 하드 드라이브나 내부 회로의 손상을 막을 수 있었습니다. 새 배터리 외에는 다른 부품이 필요하지 않았으며 190 엘렉트로프루프 리페어에서 노트북이 제대로 작동하게 하여 24시간 이내에 저에게 돌려주었습니다.\n- 제시카 넬슨`
                    }
                ],
                questions: [
                    {
                        id: "186",
                        text: "According to the Web page, what is true about Elektroproof Repair?",
                        options: [
                            { label: "A", text: "It recently raised its prices." },
                            { label: "B", text: "It is hiring more repair technicians." },
                            { label: "C", text: "It has experienced a sudden increase in business." },
                            { label: "D", text: "It requires full payment before work can begin." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_NOT_TRUE",
                        translation: "웹페이지에 따르면, 엘렉트로프루프 리페어에 대해 사실인 것은?",
                        explanation: `웹페이지의 두 번째 단락 첫 문장에서 급격한 수요의 증가로 인해 현재 모든 서비스에 예약이 필요하다(Because of a dramatic increase in demand ~ require appointments for all services)고 했으므로 (C)가 정답이다. 같은 단락 마지막 문장에서 예약 시 보증금 60달러를 지불해야 하며 이 보증금은 서비스 비용에 충당된다(we require a $60 ~ cost of services rendered)고 했으므로 (D)는 오답이고 (A)와 (B)에 대한 언급은 없으므로 답이 될 수 없다.`
                    },
                    {
                        id: "187",
                        text: "According to the e-mail, what is the earliest date when Ms. Nelson could bring in her laptop for service?",
                        options: [
                            { label: "A", text: "On January 14" },
                            { label: "B", text: "On January 15" },
                            { label: "C", text: "On January 18" },
                            { label: "D", text: "On January 19" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "이메일에 따르면, 넬슨 씨가 서비스를 위해 노트북을 가져올 수 있는 가장 빠른 날짜는?",
                        explanation: `이메일의 두 번째 문장에서 내일 1월 15일에 검사를 위해 노트북을 가져와도 되는지 문의했는데 예약 가능한 가장 빠른 시간대는 1월 19일 오전 8시(The earliest available time slot is 8:00 A.M. on January 19)라고 하고 있다. 따라서 넬슨 씨가 수리를 위해 노트북을 가지고 방문할 수 있는 가장 빠른 날짜는 1월 19일이므로 (D)가 정답이다.`
                    },
                    {
                        id: "188",
                        text: "What is most likely true about Mr. Jacquet?",
                        options: [
                            { label: "A", text: "He owns the business." },
                            { label: "B", text: "He is a technician." },
                            { label: "C", text: "He is a receptionist." },
                            { label: "D", text: "He delivers repaired equipment." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "자케 씨에 대해 사실일 것 같은 것은?",
                        explanation: `이메일의 첫 문장에서 발신자인 아서 자케 씨(Arthur Jacquet)가 넬슨 씨에게 연락 주어서 감사하다고 했고, 후기의 네 번째 문장에서 넬슨 씨가 한 시간 이내로 사장님으로부터 직접 이메일을 받았다(Within an hour, I got an e-mail directly from the owner)고 했다. 따라서 넬슨 씨에게 이메일을 보낸 자케 씨는 엘렉트로프루프 리페어의 사장이므로 (A)가 정답이다.`
                    },
                    {
                        id: "189",
                        text: "According to the review, what was Ms. Nelson's main concern about her laptop?",
                        options: [
                            { label: "A", text: "That the parts inside it might be damaged" },
                            { label: "B", text: "That it was too old to be repaired" },
                            { label: "C", text: "That it was responding too slowly" },
                            { label: "D", text: "That its operating system had a virus" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "후기에 따르면, 넬슨 씨가 노트북에 대해 가장 걱정했던 것은?",
                        explanation: `후기의 첫 문장에서 넬슨 씨가 내부 부품이 망가졌을까 봐 걱정했다(I was afraid the internal components might have been ruined)고 했으므로 (A)가 정답이다.`
                    },
                    {
                        id: "190",
                        text: "What is suggested about the repair of Ms. Nelson's computer?",
                        options: [
                            { label: "A", text: "It included installing new operating software." },
                            { label: "B", text: "It was completed more quickly than advertised." },
                            { label: "C", text: "It involved the replacement of internal circuits." },
                            { label: "D", text: "It required an upgrade to the hard drive." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "넬슨 씨의 컴퓨터 수리에 대해 암시된 것은?",
                        explanation: `웹페이지의 마지막 문장에서 대부분의 수리는 영업일 기준 3~5일 이내에 완료된다(Most repairs are completed within three to five business days)고 했고, 후기의 마지막 문장에서 넬슨 씨가 일찍 노트북을 돌려받았다(had my laptop ~ within 24 hours)고 했다. 따라서 넬슨 씨의 노트북은 웹페이지에 게시된 기간보다 훨씬 더 짧은 시간 내에 수리되었으므로 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 191-195: Advertisement, E-mail, and Receipt
            {
                id: "p7-t6-set14",
                questionRange: "191-195",
                passages: [
                    {
                        id: "p7-t6-s14-p1",
                        type: "ADVERTISEMENT",
                        title: "Advertisement",
                        content: `Learn to play guitar at Alexis Instruments!\n\nAlexis Instruments will offer group and individual guitar instruction beginning April 2. Each of our locations has been updated with newly constructed classrooms and practice rooms. Our instructors have years of experience teaching and playing as professional musicians. Call an Alexis Instruments store today for availability and pricing.`,
                        translation: `알렉시스 인스트루먼츠에서 기타 연주를 배우세요!\n\n알렉시스 인스트루먼츠는 4월 2일부터 그룹 및 개인 기타 교습을 제공할 예정입니다. 192 저희의 각 지점은 신축 교실과 연습실로 새로워졌습니다. 저희 강사들은 전문 음악가로서 수년간 가르치고 연주한 경험이 있습니다. 지금 바로 알렉시스 인스트루먼츠 매장에 전화하셔서 수강 가능한 과정과 가격을 알아보세요.`
                    },
                    {
                        id: "p7-t6-s14-p2",
                        type: "EMAIL",
                        content: `To: Lucia Rivera <luciarivera@rapidonet.com>\nFrom: Krista Towers <ktowers@alexisinstruments.com>\nDate: April 26, 8:30 A.M.\nSubject: Order TS1058293\n\nDear Ms. Rivera,\n\nI am following up on the order you placed with us on April 23. We have only one guitar of the model you want in stock. It was used as a display sample on the floor of our salesroom here in Santa Barbara. This means it is out of the box and has been played by customers browsing the store. Our in-house luthier has thoroughly inspected the guitar, and it is still in excellent condition. There are no scratches, scuffs, or dents on it whatsoever. Because you purchased the instrument on the understanding that it was brand new, we want to offer you two options:\n\n1. If you do not want the floor model, you may cancel the order and receive an immediate full refund.\n2. 194 If you would like the floor model, we will ship it immediately and offer you a 10 percent discount off the original retail price.\n\nIf you choose the latter, we will make sure the guitar is delivered to your local store in time for your first lesson there tomorrow. We apologize for the inconvenience.\n\nSincerely,\nKrista Towers\nAlexis Instruments`,
                        translation: `수신: 루시아 리베라 <luciarivera@rapidonet.com>\n발신: 크리스타 타워스 <ktowers@alexisinstruments.com>\n날짜: 4월 26일 오전 8시 30분\n제목: TS1058293 주문\n\n리베라 씨께,\n\n4월 23일에 주문하신 건에 대해 말씀드릴 것이 있습니다. 193 고객님께서 원하시는 모델의 기타는 재고가 한 대밖에 없습니다. 이 기타는 여기 산타 바바라에 있는 저희 판매장 바닥에 전시용으로 사용된 것입니다. 이는 기타가 상자 밖에 나와 있었고 매장을 둘러보는 손님들에 의해 연주되었다는 것을 뜻합니다. 저희 사내 현악기 제작자가 기타를 철저히 검사했고 아직 상태도 훌륭합니다. 긁힌 자국이나 흠집, 찌그러진 부분도 전혀 없습니다. 기타가 새 제품이라고 생각하고 구매하셨기 때문에 다음 두 가지 옵션을 제공해 드리고자 합니다.\n\n1. 진열용 상품을 원하지 않으실 경우, 주문을 취소하고 즉시 전액 환불을 받으실 수 있습니다.\n2. 194 진열용 상품을 원하실 경우, 즉시 배송해 드리고 원래 소매가에서 10퍼센트를 할인해 드립니다.\n\n후자를 선택하신다면 기타가 내일 첫 수업에 늦지 않게 고객님 지역의 매장으로 배달되도록 하겠습니다. 불편을 드려 죄송합니다.\n\n크리스타 타워스\n알렉시스 인스트루먼츠`
                    },
                    {
                        id: "p7-t6-s14-p3",
                        type: "FORM",
                        title: "Receipt",
                        content: `Alexis Instruments\nOrder number: TS1058293\nDate: April 26\n\nDescription | Price\nDomingo 313 full-body acoustic guitar | $450.00\n10% discount on guitar | -$45.00\nThree-year repair and maintenance plan, good at any Alexis Instruments location | $75.00\nSales tax | $34.80\nTotal | $514.80\n\nShip To | Bill To\nAlexis Instruments, store #23 | Lucia Rivera\n3914 Joseph Drive | 11437 Shady Grove Lane\nChico, CA 95926 | Chico, CA 95926`,
                        translation: `알렉시스 인스트루먼츠\n주문 번호: TS1058293\n날짜: 4월 26일\n\n설명 | 가격\n도밍고 313 풀바디 어쿠스틱 기타 | 450달러\n194 기타 10퍼센트 할인 | -45달러\n195 알렉시스 인스트루먼츠 전 지점에서 유효한 3년 수리 및 유지 관리 서비스 | 75달러\n판매세 | 34.8달러\n총액 | 514.8달러\n\n배송지 | 청구 대상\n알렉시스 인스트루먼츠, 23번 매장 | 루시아 리베라\n3914 조셉 드라이브 | 11437 셰이디 그로브 레인\n치코, 캘리포니아 95926 | 치코, 캘리포니아 95926`
                    }
                ],
                questions: [
                    {
                        id: "191",
                        text: "What is the purpose of the advertisement?",
                        options: [
                            { label: "A", text: "To sell guitars" },
                            { label: "B", text: "To promote lessons" },
                            { label: "C", text: "To attract music teachers" },
                            { label: "D", text: "To announce a new location" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "광고의 목적은?",
                        explanation: `광고의 제목에서 알렉시스 인스트루먼츠에서 기타 연주를 배우라고 제안하고 있으므로 기타 연주 수업을 홍보하는 광고임을 알 수 있다. 따라서 (B)가 정답이다.`
                    },
                    {
                        id: "192",
                        text: "What is most likely true about the store where Ms. Towers works?",
                        options: [
                            { label: "A", text: "It has been renovated." },
                            { label: "B", text: "It is hiring new employees." },
                            { label: "C", text: "It has more inventory than other locations." },
                            { label: "D", text: "It has extended its hours of operation." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "타워스 씨가 일하는 매장에 대해 사실일 것 같은 것은?",
                        explanation: `이메일의 하단에 크리스타 타워스(Krista Towers)는 알렉시스 인스트루먼츠(Alexis Instruments)에서 근무하는 것으로 나와 있고, 광고의 두 번째 문장에서 저희 알렉시스 인스트루먼츠의 각 지점이 신축 교실과 연습실로 새로워졌다(Each of our locations has been updated with newly constructed classrooms and practice rooms)고 했다. 따라서 타워스 씨가 일하는 알렉시스 인스트루먼츠의 전 지점이 개조되었다는 것을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "193",
                        text: "What does the e-mail indicate about the guitar?",
                        options: [
                            { label: "A", text: "It is in need of repairs." },
                            { label: "B", text: "It has been on a shelf at the store in Chico." },
                            { label: "C", text: "It was previously owned by an Alexis Instruments customer." },
                            { label: "D", text: "It is the only one of its model currently available." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "이메일에서 기타에 대해 명시한 것은?",
                        explanation: `이메일의 두 번째 문장에서 고객이 원하는 모델의 기타는 재고가 한 대밖에 없다(We have only one guitar of the model you want in stock)고 했으므로 (D)가 정답이다. 이메일의 세 번째 문장에서 이 기타는 여기 산타 바바라에 있는 판매장 바닥에 전시용으로 사용된 것이라고 했으므로 (B)는 오답이며, (A)와 (C)는 언급되지 않았다.`
                    },
                    {
                        id: "194",
                        text: "What can be inferred about Ms. Rivera?",
                        options: [
                            { label: "A", text: "She damaged her guitar." },
                            { label: "B", text: "She requested a refund." },
                            { label: "C", text: "She was previously enrolled in an online class." },
                            { label: "D", text: "She purchased the floor model." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "리베라 씨에 대해 추론할 수 있는 것은?",
                        explanation: `이메일의 두 가지 옵션 중 2번에서 리베라 씨에게 진열용 상품을 원할 경우 즉시 배송하고 원래 소매가에서 10퍼센트를 할인해 주겠다(If you would like the floor model ~ offer you a 10 percent discount off the original retail price)고 했고, 영수증의 설명 부분 두 번째 항목에 기타가 10퍼센트 할인되어 45달러가 공제되었으므로 리베라 씨가 이메일의 옵션 2번에 제시된 조건으로 진열되었던 기타를 구입했음을 알 수 있으므로 (D)가 정답이다.`
                    },
                    {
                        id: "195",
                        text: "According to the receipt, what is true about Alexis Instruments?",
                        options: [
                            { label: "A", text: "It repairs instruments in its stores." },
                            { label: "B", text: "It has two stores in Santa Barbara." },
                            { label: "C", text: "It is holding an annual sale." },
                            { label: "D", text: "It was founded by a professional musician." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "영수증에 따르면, 알렉시스 인스트루먼츠에 대해 사실인 것은?",
                        explanation: `영수증의 설명 부분 세 번째 항목에 알렉시스 인스트루먼츠 전 지점에서 유효한 3년 수리 및 유지 관리 서비스(Three-year repair ~ at any Alexis Instruments location)라고 나와 있는 것으로 보아 알렉시스 인스트루먼츠에서는 매장에서 악기 수리 서비스를 제공하고 있음을 알 수 있다. 따라서 (A)가 정답이다.`
                    }
                ]
            },
            // Questions 196-200: E-mails and Invoice
            {
                id: "p7-t6-set15",
                questionRange: "196-200",
                passages: [
                    {
                        id: "p7-t6-s15-p1",
                        type: "EMAIL",
                        content: `To: All Instructors\nFrom: Jee-Young Choi\nSubject: New fee schedule\nDate: August 15\n\nDear Teachers,\n\nThank you for lending your skills as artists and educators to the Mirabel Museum of Art. Please use the updated fee schedule below when creating your monthly invoices.\n\nCategory | Description | Duration | Fee\nTour | Lead group tour | 60 minutes | $50\nTour | Lead group tour | 90 minutes | $75\nClass | Teach art class | 75 minutes | $65\nClass | Teach art class | 120 minutes | $110\nDevelopment | Plan new course content | Varies | $200\nTraining | Instruct museum staff on a specialized topic | Varies | $25/hour\n\nElectronic payments should be available ten business days after invoice submission.\n\nJee-Young Choi, Education Coordinator`,
                        translation: `수신: 모든 강사\n발신: 최지영\n제목: 신규 수수료 표\n날짜: 8월 15일\n\n강사님들께,\n\n196 미라벨 미술관에 예술가이자 교육자로서의 능력을 제공해 주셔서 감사합니다. 월별 청구서를 작성하실 때 아래의 업데이트된 수수료 표를 사용하십시오.\n\n항목 | 설명 | 소요 시간 | 수수료\n투어 | 그룹 투어 인솔 | 60분 | 50달러\n투어 | 그룹 투어 인솔 | 90분 | 75달러\n강좌 | 미술 수업 지도 | 75분 | 65달러\n198 강좌 | 미술 수업 지도 | 120분 | 110달러\n200 개발 | 새로운 강의 내용 계획 | 미정 | 200달러\n교육 | 전문적인 주제에 관한 미술관 직원 교육 | 미정 | 시간당 25달러\n\n전자 지불은 청구서 제출 후 영업일 기준 10일 이후에 제공됩니다.\n\n최지영, 교육 진행 담당`
                    },
                    {
                        id: "p7-t6-s15-p2",
                        type: "FORM",
                        title: "Invoice",
                        content: `Devonte Merriweather\nd.merriweather@camail.ca\n\nInvoice #00278\nFor: Services at the Mirabel Museum of Art\nSent: September 30\n\nDate | Description | Fee\nSeptember 22 | Tour: Special exhibit | $50\nSeptember 22 | Class: Drawing for Beginners | $65\nSeptember 25 | Class: Sculpting with Clay | $110\nTotal | $225`,
                        translation: `데본트 메리웨더\nd.merriweather@camail.ca\n\n청구서 00278번\n대상: 미라벨 미술관 서비스\n발신 날짜: 9월 30일\n\n날짜 | 설명 | 수수료\n9월 22일 | 투어: 특별 전시회 | 50달러\n9월 22일 | 197 강좌: 입문자를 위한 그림 그리기 | 65달러\n9월 25일 | 197, 198 강좌: 점토로 조각하기 | 110달러\n합계 | 225달러`
                    },
                    {
                        id: "p7-t6-s15-p3",
                        type: "EMAIL",
                        content: `To: Devonte Merriweather <d.merriweather@camail.ca>\nFrom: Jee-Young Choi <jy.choi@mirabelmuseumofart.ca>\nSubject: Payment\nDate: October 6\n\nDear Mr. Merriweather,\n\nThank you for submitting your September invoice. I noticed that you neglected to charge us for developing the curriculum for your sculpting class, which you taught for the first time on September 25. I checked with Carol Swann, and she said that because invoice #00278 has already been paid, it would be best if you submitted a second invoice for the development. I will ask her to process it quickly when I receive it.\n\nYou will be happy to know that the feedback from your students was very positive. I will e-mail scans of their feedback forms later today.\n\nBest,\nJee-Young Choi, Education Coordinator`,
                        translation: `수신: 데본트 메리웨더 <d.merriweather@camail.ca>\n발신: 최지영 <jy.choi@mirabelmuseumofart.ca>\n제목: 지급\n날짜: 10월 6일\n\n메리웨더 씨께,\n\n9월 청구서를 제출해 주셔서 감사합니다. 9월 25일에 처음 가르치신 200 조각 수업의 커리큘럼을 개발하신 일에 대해 저희 측에 청구를 빠뜨리신 것을 발견했습니다. 199 캐럴 스완에게 확인해 보니 00278번 청구서는 이미 지불이 되었기 때문에 개발 건에 대해 두 번째 청구서를 제출하시는 것이 가장 좋다고 합니다. 제가 그것을 받으면 그녀에게 빨리 처리해 달라고 요청하겠습니다.\n\n학생들의 피드백이 매우 긍정적이었다는 것을 알게 되시면 기뻐하실 것 같습니다. 오늘 중으로 그들의 피드백 양식 스캔본을 이메일로 보내 드리겠습니다.\n\n최지영, 교육 진행 담당`
                    }
                ],
                questions: [
                    {
                        id: "196",
                        text: "What is suggested in the first e-mail about the Mirabel Museum of Art?",
                        options: [
                            { label: "A", text: "It hires art teachers to lead tours." },
                            { label: "B", text: "It offers private tours to museum members." },
                            { label: "C", text: "Its art classes are free to the public." },
                            { label: "D", text: "Its next staff training will take place in ten days." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "첫 번째 이메일에서 미라벨 미술관에 대해 암시된 것은?",
                        explanation: `첫 번째 이메일에서 강사님들께(Dear Teachers)라며 인사하고, 첫 문장에서 미라벨 미술관에 예술가이자 교육자로서의 능력을 제공해 주어 감사하다(Thank you for lending ~ the Mirabel Museum of Art)고 했고, 표의 첫 항목에 그룹 투어 인솔(Lead group tour)이 나와 있다. 따라서 미술관에서 강사들을 고용해 강사들이 제공하는 서비스에 따라 급여를 지불하고 있으며 그 서비스에는 그룹 투어 인솔도 포함되어 있음을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "197",
                        text: "What does the invoice suggest about Mr. Merriweather?",
                        options: [
                            { label: "A", text: "He worked at the museum on September 30." },
                            { label: "B", text: "He has expertise in more than one art form." },
                            { label: "C", text: "One of his art classes was canceled." },
                            { label: "D", text: "Some of his artwork was exhibited in September." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "청구서에서 메리웨더 씨에 대해 암시되는 것은?",
                        explanation: `청구서의 표에 따르면 메리웨더 씨가 입문자를 위한 그림 그리기 강좌(Class: Drawing for Beginners)와 점토로 조각하기 강좌(Class: Sculpting with Clay)를 가르친다고 나와 있다. 따라서 메리웨더 씨는 회화와 조소 두 가지 분야에 전문성이 있음을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "198",
                        text: "How long was the sculpting class that Mr. Merriweather taught?",
                        options: [
                            { label: "A", text: "60 minutes" },
                            { label: "B", text: "75 minutes" },
                            { label: "C", text: "90 minutes" },
                            { label: "D", text: "120 minutes" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "메리웨더 씨가 가르친 조각 수업의 소요 시간은?",
                        explanation: `청구서의 표에 따르면 메리웨더 씨가 가르친 점토로 조각하기 강좌(Class: Sculpting with Clay)의 수수료는 110달러($110)이고, 첫 번째 이메일의 수수료 표에 따르면 수수료가 110달러($110)인 미술 수업 지도 강좌(Teach art class)의 소요 시간은 120분(120 minutes)이다. 따라서 메리웨더 씨가 가르친 조각 수업은 120분짜리였음을 알 수 있으므로 (D)가 정답이다.`
                    },
                    {
                        id: "199",
                        text: "According to the second e-mail, who most likely is Ms. Swann?",
                        options: [
                            { label: "A", text: "A bookkeeper" },
                            { label: "B", text: "An art teacher" },
                            { label: "C", text: "Mr. Merriweather's assistant" },
                            { label: "D", text: "Director of the Mirabel Museum of Art" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "두 번째 이메일에 따르면, 스완 씨는 누구일 것 같은가?",
                        explanation: `두 번째 이메일의 세 번째 문장에서 캐럴 스완에게 확인해 보니 00278번 청구서는 이미 지불이 되었기 때문에 개발 건에 대해 두 번째 청구서를 제출하는 것이 가장 좋다고 한다(checked with Carol Swann ~ a second invoice for the development)고 했고, 그것을 받으면 그녀에게 빨리 처리해 달라고 요청하겠다(will ask her to process it quickly when I receive it)고 했다. 따라서 스완 씨는 급여 처리 회계를 담당하는 경리임을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "200",
                        text: "What can be concluded about Ms. Choi?",
                        options: [
                            { label: "A", text: "She forgot to read some student feedback forms." },
                            { label: "B", text: "She believes that Mr. Merriweather is owed $200." },
                            { label: "C", text: "She meets once a month with teachers." },
                            { label: "D", text: "She rejected Mr. Merriweather's October invoice." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "최 씨에 대해 결론지을 수 있는 것은?",
                        explanation: `두 번째 이메일의 두 번째 문장에서 최 씨가 메리웨더 씨에게 조각 수업의 커리큘럼을 개발한 일에 대해 청구를 빠뜨린 것을 발견했다고 했고, 첫 이메일의 수수료 표의 개발(Development) 항목에 새로운 강의 내용 계획(Plan new course content)을 하면 200달러($200)를 청구할 수 있다고 나와 있다. 따라서 최 씨는 메리웨더 씨에게 조각 수업의 커리큘럼을 개발한 일에 대한 수수료인 200달러를 지급받지 않았다고 믿고 있으므로 (B)가 정답이다.`
                    }
                ]
            }
        ]
    },
    {
        testId: 7,
        title: "Test 7",
        sets: [
            // Questions 147-148: Notice
            {
                id: "p7-t7-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t7-s1-p1",
                        type: "NOTICE",
                        title: "Notice",
                        content: `NOTICE\n\nAs part of our routine maintenance of Selino Apartments, all public areas of our building will be painted according to the following schedule:\n\n• Stairwells, first and second floors: 12 April\n• Hallways, first and second floors: 13 April\n• Stairwells, third and fourth floors: 14 April\n• Hallways, third and fourth floors: 15 April\n\nElevators will be available for use during this period. Use caution, and do not touch wet paint.\n\nSelino Management`,
                        translation: `공지\n\n셀리노 아파트의 정기적인 유지 보수의 일환으로, 저희 건물의 모든 공용 구역은 다음 일정에 따라 페인트를 칠할 예정입니다:\n\n• 계단실, 1층 및 2층: 4월 12일\n• 복도, 1층 및 2층: 4월 13일\n• 계단실, 3층 및 4층: 4월 14일\n• 복도, 3층 및 4층: 4월 15일\n\n이 기간 동안 엘리베이터는 이용 가능합니다. 주의해 주시고, 마르지 않은 페인트에 손대지 마십시오.\n\n셀리노 관리소`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "For whom is the notice most likely intended?",
                        options: [
                            { label: "A", text: "Painting contractors" },
                            { label: "B", text: "Elevator repair workers" },
                            { label: "C", text: "Graphic artists" },
                            { label: "D", text: "Apartment residents" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_AUDIENCE",
                        translation: "공지는 누구를 대상으로 하는 것 같은가?",
                        explanation: `첫 문장에서 셀리노 아파트의 정기적인 유지 보수의 일환으로 건물의 모든 공용 구역에 페인트칠을 할 예정(As part of our routine maintenance of Selino Apartments, all public areas of our building will be painted...)이라고 공지하고 있으므로 아파트 주민들에게 알리는 글임을 알 수 있습니다. 따라서 정답은 (D)입니다.`
                    },
                    {
                        id: "148",
                        text: "On what day will the work on all stairwells be completed?",
                        options: [
                            { label: "A", text: "April 12" },
                            { label: "B", text: "April 13" },
                            { label: "C", text: "April 14" },
                            { label: "D", text: "April 15" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "모든 층의 계단에 대한 작업은 언제 완료될 것 같은가?",
                        explanation: `페인트칠 일정의 첫 번째 항목에 1층과 2층 계단이 4월 12일(Stairwells, first and second floors: 12 April), 세 번째 항목에 3층과 4층 계단이 4월 14일(Stairwells, third and fourth floors: 14 April)에 작업한다고 나와 있습니다. 따라서 계단에 대한 모든 작업이 완료되는 때는 4월 14일이므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 149-150: Coupon
            {
                id: "p7-t7-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t7-s2-p1",
                        type: "FORM",
                        title: "Coupon",
                        content: `JIN-HWA GRILL\n\nServing the finest Korean cuisine in Northern California for over 30 years.\n\nCelebrate the grand reopening of our newly redesigned restaurant on Lakeside Drive! Visit us during the month of May, purchase any two dinner entrées, and enjoy a complimentary appetizer platter.\n\nValid only at Jin-Hwa Grill, 4104 Lakeside Drive, Oakland, CA. Coupons do not apply to take-out orders. For a list of all our locations, hours of operation, and menus, visit www.jin-hwagrill.com.`,
                        translation: `진화 그릴\n\n북부 캘리포니아에서 30년 넘게 최고급 한국 요리를 제공하고 있습니다.\n\n레이크사이드 로드에서 새롭게 단장한 레스토랑의 재개장을 축하하러 오세요! 5월 한 달 동안 저녁 식사 2인분을 드시고 무료 애피타이저 플래터를 즐기세요.\n\n캘리포니아주 오클랜드 레이크사이드 로드 4104, 진화 그릴에서만 사용 가능합니다. 쿠폰은 테이크아웃 주문에는 적용되지 않습니다. 전 지점 목록, 영업시간, 메뉴를 보시려면 www.jin-hwagrill.com을 방문하세요.`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "How can customers receive the coupon's benefit?",
                        options: [
                            { label: "A", text: "By placing a take-out order" },
                            { label: "B", text: "By spending a minimum amount" },
                            { label: "C", text: "By ordering two meals" },
                            { label: "D", text: "By attending an opening event" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "쿠폰으로 혜택을 받을 수 있는 방법은?",
                        explanation: `첫 번째 단락의 두 번째 문장에서 5월 한 달 동안 저녁 식사 2인분을 드시고 무료 애피타이저 플래터를 즐기라(purchase any two dinners and enjoy a complimentary...)고 했습니다. 따라서 쿠폰을 사용하려면 식사 2인분을 주문해야 하므로 (C)가 정답입니다.`
                    },
                    {
                        id: "150",
                        text: "What is indicated about Jin-Hwa Grill?",
                        options: [
                            { label: "A", text: "It is celebrating an anniversary." },
                            { label: "B", text: "It has more than one location." },
                            { label: "C", text: "It recently began serving Korean food." },
                            { label: "D", text: "It has expanded its hours of operation." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "진화 그릴에 대해 명시된 것은?",
                        explanation: `두 번째 단락의 마지막 문장에서 '전 지점 목록(a list of all our locations)'을 보려면 웹사이트를 방문하라고 했으므로, 한 곳 이상의 매장을 가지고 있음을 알 수 있습니다. 따라서 (B)가 정답입니다.`
                    }
                ]
            },
            // Questions 151-152: E-mail
            {
                id: "p7-t7-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t7-s3-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Bindu Gill <bgill@opaimail.com>\nFrom: Nila Balay <n_balay@celebrate.com>\nDate: 18 June\nSubject: Follow-up\n\nDear Mr. Gill,\n\nRegarding our telephone conversation this morning, here in writing is the change I would like to make to Saturday's delivery.\n\nI am requesting that you now deliver the flowers for the office party to the Grand Dining Room at the Collett Hotel instead of the Saji Banquet Hall. I am sorry for the last-minute change, but I was informed by the Saji Banquet Hall manager that their electrical system requires a weekend repair, and I was forced to reserve a different venue. My office party cannot be postponed.\n\nI would appreciate it if the delivery could be made by 4:00 P.M.\n\nNila Balay`,
                        translation: `수신: 빈두 길 <bgill@opaimail.com>\n발신: 닐라 발레이 <n_balay@celebrate.com>\n날짜: 6월 18일\n제목: 후속 이메일\n\n길 씨께,\n\n오늘 오전 전화 통화와 관련하여, 토요일 배송에 변경하고 싶은 사항을 서면으로 알려드립니다.\n\n사지 연회장 대신에 콜렛 호텔의 그랜드 다이닝 룸으로 꽃을 배송해 주실 것을 요청합니다. 이렇게 막바지에 변경하는 것이 죄송합니다만, 사지 연회장 관리자로부터 주말에 수리가 필요한 전기 시스템 고장에 대해 연락을 받았습니다. 제가 계획하고 있는 사무실 파티는 연기할 수 없었기 때문에 이 다른 장소를 예약해야 했습니다.\n\n오후 4시까지 배송을 받을 수 있으면 감사하겠습니다.\n\n닐라 발레이`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "Why did Ms. Balay send the e-mail to Mr. Gill?",
                        options: [
                            { label: "A", text: "To reschedule a weekend business trip" },
                            { label: "B", text: "To invite him to an office party" },
                            { label: "C", text: "To request the services of an electrician" },
                            { label: "D", text: "To confirm a set of spoken instructions" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "발레이 씨가 길 씨에게 이메일을 보낸 이유는?",
                        explanation: `첫 문장에서 오늘 오전 전화 통화와 관련하여 토요일 배송에 변경하고 싶은 사항을 서면으로 알린다(Regarding our telephone conversation ~ here in writing is the change...)고 했으므로, 전화 통화로 이야기했던 주문 관련 사항을 서면으로 확인하기 위해 이메일을 보낸다는 것을 알 수 있습니다. 따라서 정답은 (D)입니다.`
                    },
                    {
                        id: "152",
                        text: "What does Ms. Balay expect to receive on Saturday afternoon?",
                        options: [
                            { label: "A", text: "Flowers" },
                            { label: "B", text: "Admission tickets" },
                            { label: "C", text: "A signed contract" },
                            { label: "D", text: "An updated cost estimate" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "발레이 씨가 토요일 오후에 받기로 예상하는 것은?",
                        explanation: `두 번째 단락에서 사지 연회장 대신 콜렛 호텔로 꽃을 배송해 달라(deliver the flowers)고 요청했습니다. 따라서 발레이 씨가 토요일에 배송받을 것은 꽃임을 알 수 있습니다. 따라서 정답은 (A)입니다.`
                    }
                ]
            },
            // Questions 153-154: Online Chat
            {
                id: "p7-t7-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t7-s4-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Ae-cha Kim [9:16 A.M.]\nHello. I'm having a problem with an item I ordered from the Winterwear Web site.\n\nKelvin Wong [9:18 A.M.]\nHello! How can I help you?\n\nAe-cha Kim [9:20 A.M.]\nWell, I ordered some gloves two weeks ago, and they still haven't arrived.\n\nKelvin Wong [9:21 A.M.]\nI'm sorry. Did you receive an order number?\n\nAe-cha Kim [9:22 A.M.]\nIt's ADF193.\n\nKelvin Wong [9:23 A.M.]\nThank you.\n\nKelvin Wong [9:26 A.M.]\nThis is very unusual. The system is showing that the order was fulfilled. I'm not sure why it hasn't left the warehouse yet. We'll send out the gloves via rush shipping at no extra charge.\n\nAe-cha Kim [9:27 A.M.]\nThat would be great! Thank you!`,
                        translation: `김애차 [오전 9:16] 안녕하세요. 윈터웨어 웹사이트에서 주문한 상품에 문제가 있습니다.\n\n켈빈 웡 [오전 9:18] 안녕하세요, 무엇을 도와드릴까요?\n\n김애차 [오전 9:20] 음, 2주 전에 장갑을 주문했는데 아직 도착하지 않았습니다.\n\n켈빈 웡 [오전 9:21] 죄송합니다. 주문 번호는 받으셨나요?\n\n김애차 [오전 9:22] ADF193입니다.\n\n켈빈 웡 [오전 9:23] 감사합니다.\n\n켈빈 웡 [오전 9:26] 이 일은 매우 드문 일입니다. 시스템에는 주문이 처리되었다고 나오네요. 왜 물품이 아직 창고에서 출고되지 않았는지 모르겠습니다. 추가 요금 없이 다른 장갑을 급송으로 보내 드리겠습니다.\n\n김애차 [오전 9:27] 그렇게 해 주시면 좋겠네요! 감사합니다!`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What problem is Ms. Kim having?",
                        options: [
                            { label: "A", text: "She received the wrong item." },
                            { label: "B", text: "An order has not arrived." },
                            { label: "C", text: "An item was damaged in transport." },
                            { label: "D", text: "An item was missing from an order." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "김 씨가 가지고 있는 문제는?",
                        explanation: `오전 9시 20분에 김 씨가 2주 전에 장갑을 주문했는데 아직 도착하지 않았다(ordered some gloves two weeks ago, and they still haven't arrived)고 했으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "154",
                        text: "At 9:26 A.M., what does Mr. Wong most likely mean when he writes, \"This is very unusual\"?",
                        options: [
                            { label: "A", text: "He is frustrated by a slow computer system." },
                            { label: "B", text: "He is sorry that Ms. Kim had a long wait." },
                            { label: "C", text: "He is surprised by a warehouse problem." },
                            { label: "D", text: "He is confused about which style of gloves was ordered." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 26분에 웡 씨가 \"이런 일은 매우 드문 일입니다\"라고 쓴 의도는?",
                        explanation: `오전 9시 26분에 웡 씨가 이런 일은 매우 드문 일(This is very unusual)이라고 한 직후, 시스템에는 주문이 처리되었다고 나온다(The system is showing that the order was fulfilled)면서 왜 물품이 아직 창고에서 출고되지 않았는지 모르겠다(I'm not sure why it hasn't left the warehouse yet)고 한 것으로 보아 창고에서 제품이 제대로 출고되지 않은 예상치 못한 문제에 대해 놀라움을 표현하려는 의도로 한 말임을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 155-157: E-mail
            {
                id: "p7-t7-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t7-s5-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Jessica Yu <jyu@myemail.com>\nFrom: Customer Service <cs@velascobank.com>\nDate: July 15\nSubject: Account security\n\nDear Ms. Yu,\n\nFor security reasons, we need our customers to review their contact information with Velasco Bank every year. This year, the deadline for reviewing your contact information is July 29. You can do this in one of two ways.\n\nFirst, you may log in to our Web site at www.velascobank.com to check your information. Simply log in to your digital banking account and go to "Settings" then "Contact Information." Please verify that your phone number and e-mail address are up-to-date and select the one you would like to be your primary contact method. — [1] —. If you are not yet enrolled in digital banking, we recommend doing so online at www.velascobank.com/myaccount. — [2] —.\n\nAlternatively, you may visit any of our local branches and speak with a representative. — [3] —. If you have any questions, please call 410-555-0156. Representatives are available Monday through Friday from 7:00 A.M. to 5:00 P.M. — [4] —.\n\nThank you for banking with us.\n\nVelasco Bank Customer Service`,
                        translation: `수신: 제시카 유 <jyu@myemail.com>\n발신: 고객 서비스 <cs@velascobank.com>\n날짜: 7월 15일\n제목: 계정 보안\n\n유 씨께,\n\n보안상의 이유로 저희 벨라스코 은행 고객들께서는 은행에 기록된 연락처 정보를 매년 검토해 주셔야 합니다. 올해 연락처 정보 검토 마감일은 7월 29일입니다. 이것은 아래 두 가지 방법 중 하나로 수행하실 수 있습니다.\n\n먼저, 저희 웹사이트 www.velascobank.com에서 고객님의 정보를 확인하실 수 있습니다. 디지털 뱅킹 계정에 로그인하시고 "설정"으로 가신 다음 "연락처 정보"를 클릭하십시오. 고객님의 전화번호와 이메일 주소가 최신 정보인지 확인하시고, 기본 연락 방법으로 사용할 것을 선택해 주십시오. — [1] —. 아직 디지털 뱅킹에 등록되어 있지 않으시다면 www.velascobank.com/myaccount에서 온라인으로 등록하시는 것을 권장합니다. — [2] —.\n\n또 다른 방법으로는, 저희 지점 어디든 방문하셔서 직원과 상담하실 수 있습니다. — [3] —. 문의 사항이 있으시면 410-555-0156으로 전화해 주십시오. 상담원은 월요일부터 금요일까지 오전 7시부터 오후 5시까지 근무합니다. — [4] —.\n\n저희 은행을 이용해 주셔서 감사합니다.\n\n벨라스코 은행 고객 서비스`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To inquire about closing an account" },
                            { label: "B", text: "To inform customers of a change in bank hours" },
                            { label: "C", text: "To ask a customer to verify personal information" },
                            { label: "D", text: "To provide information about bank deposits" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?",
                        explanation: `첫 문장에서 보안상의 이유로 벨라스코 은행 고객들은 은행에 기록된 연락처 정보를 매년 검토해 주어야 한다(For security reasons we need our customers to review their contact information with Velasco Bank every year)고 했고, 올해 연락처 정보 검토 마감일은 7월 29일(This year, the deadline ~ is July 29)이라며 연락처를 확인해야 하는 안기일까지 알려 주고 있으므로 고객에게 은행에 제공하는 연락처 정보를 검토해 줄 것을 요청하기 위해 이메일을 보냈음을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                    },
                    {
                        id: "156",
                        text: "According to the e-mail, what should a customer do to enroll in digital banking?",
                        options: [
                            { label: "A", text: "Visit the bank's Web site" },
                            { label: "B", text: "Inquire with a customer service representative" },
                            { label: "C", text: "Visit a local bank branch" },
                            { label: "D", text: "Install a mobile app" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "이메일에 따르면, 고객이 디지털 뱅킹에 등록하기 위해 해야 할 일은?",
                        explanation: `첫 단락의 마지막 문장에서 디지털 뱅킹에 아직 등록되지 않았다면 www.velascobank.com/myaccount에서 온라인으로 등록할 것을 권장한다(If you are not yet enrolled in digital banking, we recommend doing so online at www.velascobank.com/myaccount)고 했으므로 (A)가 정답입니다.`
                    },
                    {
                        id: "157",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"This can be performed in one of two ways.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이것은 두 가지 방법 중 하나로 수행될 수 있습니다.\"",
                        explanation: `주어진 문장에서 이것(This)은 두 방법 중 하나로 할 수 있다고 했으므로, 주어진 문장 앞에 '이것', 즉 해야 할 일에 대한 내용이 나와 있어야 하고 뒤에는 두 가지 방법에 대한 설명이 나와야 합니다. [1] 앞에는 '연락처 정보 검토'가 언급되어 있고, 뒤에는 웹사이트에서의 방법과 [3] 앞의 지점 방문 방법이 안내되고 있으므로 주어진 문장은 이 사이에 들어가는 것이 알맞습니다. 따라서 (B)가 정답입니다.`
                    }
                ]
            },
            // Questions 158-160: Brochure
            {
                id: "p7-t7-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t7-s6-p1",
                        type: "BROCHURE",
                        title: "Brochure",
                        content: `Sumner Woodcrafting\n\nSumner Woodcrafting of Memphis, Tennessee, was established nearly 45 years ago by Kiran Sumner to provide customers seeking high-quality, handmade furniture with a personalized experience. Now semiretired, Mr. Sumner still takes orders and responds to questions himself through the company's customer-service telephone line on Thursdays and Fridays. Sumner Woodcrafting offers a variety of custom-made bedroom sets, tables, desks, and cabinetry, all built from solid, high-quality wood.\n\nThe price of handcrafted furniture is naturally higher than that of mass-produced items from a factory. Because our master crafters do exceptionally fine work, our customers never regret spending a bit more for pieces built to last for generations.\n\nPlease allow up to two months for the construction of each piece after the order is placed. Shipping times depend on the distance from our workshop. A white-glove delivery option, which includes unboxing and placement in your home, is available for an additional $50 fee.\n\nVisit www.sumnerwoodcrafting.com to view photographs of our workshop, meet our artisans, read customer reviews, and find ordering information.`,
                        translation: `섬너 우드크래프팅\n\n테네시주 멤피스의 섬너 우드크래프팅은 고품질의 수제 가구를 찾는 고객들에게 맞춤형 서비스를 제공하는 것을 목표로 약 45년 전 키란 섬너에 의해 설립되었습니다. 현재 반쯤 은퇴한 상태이지만, 섬너 씨는 여전히 목요일과 금요일에 회사의 고객 서비스 전화 라인 901-555-0185를 통해 직접 주문을 받고 문의에 응답합니다. 섬너 우드크래프팅은 다양한 맞춤 제작 침실 세트, 탁자, 책상, 수납장 등을 제공하며, 이는 모두 고품질의 견고한 목재로 만들어집니다.\n\n수공예 가구의 가격은 공장에서 대량 생산되는 가구보다 당연히 더 높습니다. 우리의 장인 공예가들이 아주 훌륭한 작업을 하기 때문에, 고객들은 세대를 넘어서 지속될 가구에 조금 더 많은 비용을 들이는 것을 후회하지 않습니다.\n\n주문 후 가구 한 점을 제작하는 데 최대 두 달이 걸릴 수 있다는 점에 유의해 주십시오. 배송비는 작업장과의 거리를 기준으로 합니다. 포장을 풀고 물품을 배치하는 작업은 추가 50달러의 비용으로 이용 가능합니다.\n\n우리 작업실의 사진, 장인 약력, 고객 후기 및 주문 정보를 확인하시려면 온라인으로 www.sumnerwoodcrafting.com을 방문하십시오.`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "What is mentioned about Sumner Woodcrafting?",
                        options: [
                            { label: "A", text: "Its prices are competitive." },
                            { label: "B", text: "It offers free shipping to Memphis." },
                            { label: "C", text: "The founder processes telephone inquiries." },
                            { label: "D", text: "Customers can tour the workshop." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "섬너 우드크래프팅에 대해 언급된 것은?",
                        explanation: `첫 번째 단락의 두 번째 문장에서 '반쯤 은퇴한 상태이지만 섬너 씨(창립자)는 여전히 목요일과 금요일에 회사의 고객 서비스 전화 라인을 통해 직접 주문을 받고 문의에 응답한다(Mr. Sumner still takes orders and responds to questions himself through the company's customer-service telephone line ...)'고 했으므로 창립자인 섬너 씨가 전화 문의를 직접 처리하고 있음을 알 수 있습니다. 따라서 정답은 (C)입니다.`
                    },
                    {
                        id: "159",
                        text: "In the second paragraph, the word \"fine\" is closest in meaning to",
                        options: [
                            { label: "A", text: "small" },
                            { label: "B", text: "sharp" },
                            { label: "C", text: "skillful" },
                            { label: "D", text: "healthy" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SYNONYM",
                        translation: "두 번째 단락의 'fine'과 의미가 가장 가까운 단어는?",
                        explanation: `의대상 공예가들이 '훌륭한' 작업을 한다는 의미로 쓰였으므로 '잘 만들어진, 전문가가 만든'을 뜻하는 (C) skillful이 정답입니다.`
                    },
                    {
                        id: "160",
                        text: "What is suggested about Sumner Woodcrafting products?",
                        options: [
                            { label: "A", text: "They are long-lasting." },
                            { label: "B", text: "They contain both natural and synthetic materials." },
                            { label: "C", text: "They often require assembly." },
                            { label: "D", text: "They are typically ordered for office environments." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "섬너 우드크래프팅 제품에 대해 암시된 것은?",
                        explanation: `두 번째 단락의 두 번째 문장에서 '우리의 장인 공예가들이 아주 훌륭한 작업을 하기 때문에 고객들은 세대를 넘어서 지속될 가구에 비용을 더 들이는 것을 후회하지 않는다(Because our master crafters do exceptionally fine work, our customers never regret spending a bit more for pieces built to last for generations)'고 한 것으로 보아 섬너 우드크래프팅 제품은 비싼 대신 내구성이 매우 좋다는 것을 알 수 있습니다. 따라서 정답은 (A)입니다.`
                    }
                ]
            },
            // Questions 161-163: Article
            {
                id: "p7-t7-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t7-s7-p1",
                        type: "ARTICLE",
                        title: "Article",
                        content: `CLARENCEDALE (March 28) — Over the last decade, instability in the pricing of raw materials has become the biggest concern for manufacturers. The issue now surpasses recruitment and innovation—respectively the top two concerns of companies in the past.\n\nThe reason is easy to illustrate. For electronics manufacturers, materials typically represent 20 percent of all expenses, while makers of processed food can spend between 40 and 60 percent on materials. Therefore, even a 10 percent increase in raw material costs can have a dramatic impact on a factory's bottom line. Successful companies can anticipate and temper the effects of market volatility, but even the best forecasting cannot anticipate all market changes.`,
                        translation: `클래런스데일 (3월 28일) — 지난 10년 동안 원자재 가격의 불안정성이 제조업체들의 가장 큰 관심사가 되어 왔다. 현재 이 문제는 이전에 기업들이 각각 상위 두 개의 관심사로 꼽았던 채용과 기술을 넘어섰다.\n\n그 이유는 이해하기 어렵지 않다. 전자제품 제조업체의 경우 일반적으로 전체 비용의 20퍼센트를 자재가 차지하는 반면, 가공식품 제조업체는 원자재에 40에서 60퍼센트 사이의 비용을 지출할 수 있다. 그러므로 원자재 가격이 단 10퍼센트만 오르는 것만으로도 공장의 손익에 극적인 영향을 미칠 수 있다. 상승하는 비용을 예측할 수 있는 회사들은 시장 변동성의 영향을 완화할 수 있을지 모르지만, 최고의 예측조차도 시장에서의 모든 변화를 예상할 수는 없다.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the article mainly about?",
                        options: [
                            { label: "A", text: "Improvements in manufacturing methods" },
                            { label: "B", text: "Recent shifts in consumer preferences" },
                            { label: "C", text: "Implementation of environmental regulations" },
                            { label: "D", text: "A challenge in production costs" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "기사의 주요 내용은?",
                        explanation: `첫 문장에서 '지난 10년 동안 원자재 가격의 불안정성이 제조업체들의 가장 큰 관심사가 되어 왔다(Over the last decade, instability in the pricing of raw materials has become the biggest concern for manufacturers)'고 했고, 현재 이 문제는 이전에 기업들이 각각 상위 두 개의 관심사로 꼽았던 채용과 기술을 넘어섰다(The issue now surpasses recruitment ~ respectively)고 했다. 따라서 기사가 제조업체들이 직면한 생산 원가의 불안정성 문제를 주로 다루고 있음을 알 수 있으므로 정답은 (D)이다.`
                    },
                    {
                        id: "162",
                        text: "Why does the writer mention electronics manufacturers?",
                        options: [
                            { label: "A", text: "To describe innovations over a ten-year period" },
                            { label: "B", text: "To show the impact of global trade" },
                            { label: "C", text: "To explain a recent recruitment trend" },
                            { label: "D", text: "To provide an industrial comparison" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "기사 작성자가 전자제품 제조업체를 언급하는 이유는?",
                        explanation: `두 번째 단락의 두 번째 문장에서 '전자제품 제조업체의 경우 일반적으로 전체 비용의 20퍼센트를 자재가 차지하는 반면, 가공식품 제조업체는 원자재에 40에서 60퍼센트 사이의 비용을 지출할 수 있다(For electronics manufacturers, materials typically represent 20 percent of all expenses, while makers of processed food can spend between 40 and 60 percent on materials)'고 했다. 따라서 전자제품 제조업체와 가공식품 제조업체 간 원자재에 드는 비용의 차이를 비교하기 위해 전자제품 업체를 언급했다는 것을 알 수 있으므로 정답은 (D)이다.`
                    },
                    {
                        id: "163",
                        text: "In the second paragraph, the word \"temper\" is closest in meaning to",
                        options: [
                            { label: "A", text: "set" },
                            { label: "B", text: "strengthen" },
                            { label: "C", text: "moderate" },
                            { label: "D", text: "combine" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SYNONYM",
                        translation: "두 번째 단락의 'temper'와 의미가 가장 가까운 단어는?",
                        explanation: `시장 변동성의 영향을 '완화시킨다'는 뜻으로 쓰였으므로 '완화하다, 누그러뜨리다'는 의미의 (C) moderate가 정답입니다.`
                    }
                ]
            },
            // Questions 164-167: Notice
            {
                id: "p7-t7-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t7-s8-p1",
                        type: "ANNOUNCEMENT",
                        title: "Notice",
                        content: `The Lowenstein Bookstore in Mission Bay invites you to this month's book discussion featuring author Hilda Flores. The event will be held on Thursday, April 10, from 7:00 P.M. to 8:30 P.M. Ms. Flores will be discussing her latest book in the beloved Inspector Svensson series, Grinding the Gears. The new novel finds the popular investigator looking into equipment malfunctions at a national physics research laboratory.\n\nMs. Flores will also talk about the background research she performed while writing the book. — [1] —. A question-and-answer session will follow the presentation. — [2] —. The event is free for anyone to attend. — [3] —. However, the store requires that attendees register at least one day in advance. — [4] —.`,
                        translation: `미션 베이에 있는 로웬스타인 서점에서 힐다 플로레스 작가가 출연하는 이달의 책 토론에 여러분을 초대합니다. 이 행사는 4월 10일 목요일 오후 7시부터 8시 30분까지 열릴 예정입니다. 플로레스 씨는 그녀의 인기 소설 시리즈인 <기어 갈아끼기>의 최신작에 대해 이야기할 것입니다. 인기 있는 수사관 스벤슨 시리즈의 최신 모험인 <기어 갈아끼기>는 수사관이 국립 물리학 연구소에서 수상한 장비 고장을 조사하는 내용을 담고 있습니다.\n\n플로레스 씨는 책을 집필하면서 수행했던 배경 조사에 대해 이야기를 나눌 것입니다. — [1] —. 프레젠테이션 후에는 질의응답 시간이 뒤따를 예정입니다. — [2] —. 행사는 누구나 무료로 참석할 수 있습니다. — [3] —. 서점에서는 참여자들이 적어도 하루 전에 등록해야 한다고 규정합니다. — [4] —.`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is being announced?",
                        options: [
                            { label: "A", text: "The opening of a new bookstore" },
                            { label: "B", text: "A presentation by a book's author" },
                            { label: "C", text: "A book explaining a research project" },
                            { label: "D", text: "A major film based on a book" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "발표되고 있는 것은?",
                        explanation: `첫 문장에서 미션 베이에 있는 로웬스타인 서점에서 힐다 플로레스 작가가 출연하는 이달의 책 토론에 초대한다(The Lowenstein Bookstore in Mission Bay invites you to this month's book discussion featuring author Hilda Flores)고 했으므로 (B)가 정답입니다.`
                    },
                    {
                        id: "165",
                        text: "What kind of book is Grinding the Gears?",
                        options: [
                            { label: "A", text: "A nonfiction story" },
                            { label: "B", text: "A biography of a scientist" },
                            { label: "C", text: "A collection of short stories" },
                            { label: "D", text: "A mystery novel" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "<기어 갈아끼기>는 어떤 종류의 책인가?",
                        explanation: `첫 번째 단락의 마지막 문장에서 인기 있는 수사관 스벤슨 시리즈의 최신 모험인 <기어 갈아끼기>는 수사관이 국립 물리학 연구소에서 수상한 장비 고장을 조사하는 내용(The latest adventure in the popular Inspector Svensson series, Grinding the Gears finds ~ strange equipment malfunctions at a national physics research laboratory)이라고 책을 설명하는 것으로 보아 <기어 갈아끼기>는 미스터리 소설임을 알 수 있습니다. 따라서 정답은 (D)입니다.`
                    },
                    {
                        id: "166",
                        text: "What is mentioned about registration?",
                        options: [
                            { label: "A", text: "It closes on April 9." },
                            { label: "B", text: "It requires a small fee." },
                            { label: "C", text: "It is optional but encouraged." },
                            { label: "D", text: "It cannot be done online." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "등록에 대해 명시된 것은?",
                        explanation: `첫 번째 단락의 두 번째 문장에서 이 행사는 4월 10일 목요일 오후 7시부터 8시 30분까지 열릴 예정(The event will be held on Thursday, April 10, from 7:00 P.M. to 8:30 P.M.)이라고 했고, 두 번째 단락의 마지막 문장에서 서점에서는 참여자들이 적어도 하루 전에 등록해야 한다고 규정한다(The bookstore requires that attendees register at least one day in advance)고 했습니다. 따라서 등록은 행사일인 4월 10일 하루 전인 4월 9일까지 해야 하므로 (A)가 정답입니다.`
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Some of her fact-finding included interviews with government scientists.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"그녀의 진상 파악 조사 일부에는 정부 과학자들과의 인터뷰도 포함되었습니다.\"",
                        explanation: `주어진 문장은 플로레스 씨가 실시한 진상 파악 조사에 포함된 내용을 설명하고 있습니다. 따라서 플로레스 씨의 진상 파악 조사 즉, 그녀가 수행한 배경 조사(the background research she performed)를 언급하는 문장 뒤인 [1]에 들어가는 것이 글의 흐름상 자연스러우므로 (A)가 정답입니다.`
                    }
                ]
            },
            // Questions 168-171: E-mail
            {
                id: "p7-t7-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t7-s9-p1",
                        type: "EMAIL",
                        title: "Email",
                        content: `To: Customer Service <customerservice@kishintech.com>\nFrom: Dmitri Petrov <d.petrov@silkmail.com>\nDate: November 5\nSubject: Support for Kishin XT20 digital recorder\n\nTo Whom It May Concern:\n\nI recently purchased a Kishin XT20 digital recorder in order to record several of my conference presentations. Now that I have completed the first day of the event, I am trying to transfer the audio files to my laptop, but I am not having any luck. — [1] —. I have followed all the instructions in the manual as well as the tips found in the FAQ section of the product's Web page. — [2] —. I even tried using an alternative cord and laptop hardware, so I do not believe that is the issue. — [3] —.\n\nI am supposed to cover the remaining two days of this conference for work. — [4] —. My business partners expect me to return with as much information as I can. If I cannot share the files properly, the Kishin XT20 digital recorder will be of no use to me. Can you help?\n\nDmitri Petrov`,
                        translation: `수신: 고객 서비스 <customerservice@kishintech.com>\n발신: 드미트리 페트로프 <d.petrov@silkmail.com>\n날짜: 11월 5일\n제목: 키신 XT20 디지털 녹음기 지원\n\n관계자 귀하:\n\n저는 며칠 분량의 학회 프레젠테이션을 녹음하기 위해 키신 XT20 디지털 녹음기를 구입했습니다. 이제 지금 행사 첫날을 마치고 오디오 파일을 노트북으로 전송하려고 하는데 운이 따라 주지 않네요. — [1] —. 사용자 설명서에 있는 모든 지침뿐만 아니라 제품 홈페이지의 FAQ 섹션에서 찾을 수 있는 팁들도 따라 해 보았습니다. — [2] —. 심지어 로컬 비즈니스 센터에서 대체 코드와 노트북 하드웨어를 사용해 보았고, 그래서 컴퓨터 하드웨어가 문제라고 생각되지는 않습니다. — [3] —.\n\n저는 업무를 위해 이 학회의 남은 이틀을 취재하기로 되어 있습니다. — [4] —. 제 사업 파트너들은 제가 최대한 많은 정보를 가지고 돌아올 것으로 기대하고 있습니다. 파일을 제대로 공유할 수 없다면 키신 XT20 디지털 레코더는 저에게 쓸모가 없습니다. 도와주실 수 있나요?\n\n드미트리 페트로프`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What problem does Mr. Petrov have with his device?",
                        options: [
                            { label: "A", text: "He cannot move audio data to a computer." },
                            { label: "B", text: "He does not like its appearance." },
                            { label: "C", text: "He is unable to rename his files." },
                            { label: "D", text: "He is unsatisfied with the recording quality." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "페트로프 씨의 장치에 어떤 문제가 있는가?",
                        explanation: `첫 번째 단락 두 번째 문장에서 페트로프 씨가 행사 첫날을 마치고 오디오 파일을 노트북으로 전송하려고 하는데 운이 따라 주지 않는다(Now, I am trying to transfer the audio files to my laptop, but I am not having any luck)고 했으므로 (A)가 정답입니다.`
                    },
                    {
                        id: "169",
                        text: "Why does Mr. Petrov mention a Web site?",
                        options: [
                            { label: "A", text: "To suggest that it contains misleading information" },
                            { label: "B", text: "To explain that he has checked additional information" },
                            { label: "C", text: "To recommend a change to a product description" },
                            { label: "D", text: "To inquire about compatible accessories" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "페트로프 씨가 홈페이지를 언급한 이유는?",
                        explanation: `첫 번째 단락 세 번째 문장에서 페트로프 씨가 사용자 설명서에 있는 모든 지침뿐만 아니라 제품 홈페이지의 FAQ 섹션에서 찾을 수 있는 팁들도 따라 해 보았다(I have followed all the instructions ~ the tips found in the FAQ section of the product's Web page)고 했으므로, 페트로프 씨는 설명서 외에도 추가적인 제품 관련 설명을 이미 확인했다는 것을 알리기 위해 홈페이지를 언급했음을 알 수 있습니다. 따라서 정답은 (B)입니다.`
                    },
                    {
                        id: "170",
                        text: "In the second paragraph, the word \"cover\" is closest in meaning to",
                        options: [
                            { label: "A", text: "protect" },
                            { label: "B", text: "include" },
                            { label: "C", text: "hide" },
                            { label: "D", text: "report on" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_SYNONYM",
                        translation: "두 번째 단락의 'cover'와 의미가 가장 가까운 단어는?",
                        explanation: `업무를 위해 학회를 '취재하다'라는 뜻으로 쓰였으므로 '~에 대해 보고하다'를 뜻하는 (D) report on이 정답입니다.`
                    },
                    {
                        id: "171",
                        text: "What is true about Mr. Petrov?",
                        options: [
                            { label: "A", text: "He volunteered to test some new equipment." },
                            { label: "B", text: "He is on a business trip with his partners." },
                            { label: "C", text: "He will share conference materials with colleagues." },
                            { label: "D", text: "He will receive a new laptop from his company soon." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "페트로프 씨에 대해 사실인 것은?",
                        explanation: `두 번째 단락의 첫 문장에서 페트로프 씨가 업무를 위해 이 학회의 남은 이틀을 취재하기로 되어 있다(I am supposed to cover the remaining two days of this conference for work)면서 사업 파트너들은 페트로프 씨가 최대한 많은 정보를 가지고 돌아올 것으로 기대하고 있다(My business partners expect me to return with as much information as I can)고 했다. 따라서 페트로프 씨는 학회에서 취득한 정보를 동료들과 공유할 계획임을 알 수 있으므로 (C)가 정답입니다.`
                    }
                ]
            },
            // Questions 172-175: Online Chat
            {
                id: "p7-t7-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t7-s10-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Christine Burton [8:16 A.M.]\nThis is my first time posting to this business forum. Has anyone out there had a problem ordering one of the Atiara credit-card readers?\n\nMarkos Benke [9:04 A.M.]\nAre you referring to the little unit that you attach to a phone, or the larger, stand-alone tablet model?\n\nChristine Burton [9:30 A.M.]\nOur mobile unit. We've started using Atiara Web hosting services for our online shop, and I added pictures of the necklaces and rings I create. But most of our sales are still made in person. So I just need a way to take in-person payments when we go out to fairs and markets.\n\nMarkos Benke [10:19 A.M.]\nJust go to www.atiara.com/pos/hardware and add what you want to your basket.\n\nChristine Burton [11:21 A.M.]\nThat's the problem. I can't process the order in the system. I keep getting an error message that says, "Your account cannot be verified."\n\nSusan Schweier [11:42 A.M.]\nI think I know what the issue is. You have to upload scans of your business registration, a government photo ID, and a statement from your business bank account.\n\nChristine Burton [12:23 P.M.]\nI've already sent all of those, and I'm still getting the error message.\n\nSusan Schweier [12:33 P.M.]\nIn that case, try logging out and following the process again.\n\nCindy Acosta [1:05 P.M.]\nI think you're going to probably need to call the support line. They were very helpful when I had a problem a few months ago.\n\nChristine Burton [1:10 P.M.]\nI've spoken with three people already!`,
                        translation: `크리스틴 버튼 [오전 8:16] 이 중소기업 토론방에 글을 올리는 것은 이번이 처음입니다. 여기 계신 분들 중에 아티아라의 신용카드 리더기 중 하나를 주문할 때 문제를 겪으신 분 있나요?\n\n마르코스 벤케 [오전 9:04] 휴대폰에 부착하는 작은 장치를 말씀하시는 건가요, 아니면 더 큰 독립형 태블릿 모델을 말씀하시는 건가요?\n\n크리스틴 버튼 [오전 9:30] 저희 휴대용 장치요. 저희는 아티아라 웹 호스팅 서비스를 사용해 온라인 매장을 시작했고 제가 직접 만든 목걸이와 반지 사진을 추가했습니다. 하지만 대부분의 판매가 여전히 대면으로 이루어집니다. 그래서 박람회나 시장에 나갈 때 대면 결제를 받을 수 있는 방법만 필요합니다.\n\n마르코스 벤케 [오전 10:19] www.atiara.com/pos/hardware에 가셔서 원하는 것을 장바구니에 추가하시면 됩니다.\n\n크리스틴 버튼 [오전 11:21] 그게 문제예요. 시스템에서 주문을 할 수 없습니다. "귀하의 계정을 확인할 수 없습니다"라는 오류 메시지가 나와요.\n\n수잔 슈와이어 [오전 11:42] 제가 알 것 같습니다. 사업자 등록증, 정부 발급 사진 신분증, 사업자 은행 계좌 명세서의 스캔 사본을 업로드하셔야 합니다.\n\n크리스틴 버튼 [오후 12:23] 이미 전부 해 봤는데, 여전히 오류 메시지가 뜹니다.\n\n수잔 슈와이어 [오후 12:33] 그런 경우라면, 로그아웃하고 절차를 다시 따라 해 보세요.\n\n신디 아코스타 [오후 1:05] 아마 지원 라인에 전화하셔야 할 것 같습니다. 몇 달 전 제 문제에는 매우 도움이 되었습니다.\n\n크리스틴 버튼 [오후 1:10] 이미 세 분과 통화해 보았습니다! `
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What does Mr. Benke ask Ms. Burton to clarify?",
                        options: [
                            { label: "A", text: "The type of device she wants to buy" },
                            { label: "B", text: "Items that are shown on her Web site" },
                            { label: "C", text: "A method for charging a mobile phone" },
                            { label: "D", text: "The amount she was billed for a service" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "벤케 씨가 버튼 씨에게 명확히 해달라고 요청한 것은?",
                        explanation: `오전 9시 4분에 벤케 씨가 휴대폰에 부착하는 작은 장치를 말하는 것인지 아니면 더 큰 독립형 태블릿 모델을 말하는 것인지(Are you referring to the little unit ~ or the larger, stand-alone tablet model?)를 묻고 있는 것으로 보아 구입하려는 장치의 종류를 명확히 알려 달라는 것임을 알 수 있습니다. 따라서 정답은 (A)이다.`
                    },
                    {
                        id: "173",
                        text: "What does Ms. Burton most likely sell?",
                        options: [
                            { label: "A", text: "Art supplies" },
                            { label: "B", text: "Board games" },
                            { label: "C", text: "Jewelry" },
                            { label: "D", text: "Furniture" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "버튼 씨가 판매하는 것은?",
                        explanation: `오전 9시 30분에 버튼 씨가 아티아라 웹 호스팅 서비스를 사용해 온라인 매장을 시작했고 직접 만든 목걸이와 반지 사진을 추가했다(started an online shop ~ added pictures of the necklaces and rings I create)고 설명하고 있으므로 버튼 씨가 판매하는 것은 목걸이와 반지, 즉 보석류임을 알 수 있다. 따라서 정답은 (C)이다.`
                    },
                    {
                        id: "174",
                        text: "What does Ms. Schweier suggest?",
                        options: [
                            { label: "A", text: "Filling out a service request form" },
                            { label: "B", text: "Adjusting settings on a card reader" },
                            { label: "C", text: "Submitting some documentation" },
                            { label: "D", text: "Opening a separate business account" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "슈와이어 씨가 제안하는 것은?",
                        explanation: `오전 11시 42분에 슈와이어 씨가 사업자 등록증, 정부 발급 사진 신분증, 사업자 은행 계좌 명세서의 스캔 사본을 업로드해야 한다(You have to upload scans ~ a statement from your business bank account)고 제안하고 있으므로 (C)가 정답이다.`
                    },
                    {
                        id: "175",
                        text: "At 1:10 P.M., what does Ms. Burton most likely mean when she writes, \"I've spoken with three people already!\"?",
                        options: [
                            { label: "A", text: "She was impressed by the company's response." },
                            { label: "B", text: "She has already called the support line." },
                            { label: "C", text: "She has researched several issues thoroughly." },
                            { label: "D", text: "She has confirmed that a product was shipped." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오후 1시 10분에 버튼 씨가 \"이미 세 분과 통화해 보았습니다!\"라고 쓴 의도는?",
                        explanation: `오후 1시 5분에 아코스타 씨가 지원 라인에 전화해야 할 것 같다(You probably need to call the support line)고 제안하자 1시 10분에 버튼 씨가 이미 세 사람과 통화해 보았다(I've spoken with three people already)고 대답하고 있으므로, 버튼 씨는 이미 지원 라인에 전화했음을 알리려는 의도로 한 말임을 알 수 있다. 따라서 정답은 (B)이다.`
                    }
                ]
            }
        ]
    },
    {
        testId: 8,
        title: "Test 8",
        sets: [
            // Questions 147-148: Advertisement
            {
                id: "p7-t8-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t8-s1-p1",
                        type: "ADVERTISEMENT",
                        title: "Zoya's Basket",
                        content: `Zoya's Basket\n12 Tilton Street, Tenafly, NJ 07670\nwww.zoyasbasket.com\n\nDo you love all the products at Zoya's Basket? Here's a reason to love them even more! Sign up for our reward program and get up to 5% back on everything Zoya's offers! Use your cash rewards in the store or online.\n\n• Vitamins and supplements\n• Nut and seed butters\n• Jams, jellies, and fruit spreads\n• Whole grains and cereals\n• Health and wellness products\n\nWe ship throughout New Jersey. Shipping is free with a minimum $35 purchase. Please allow up to three days for delivery.`,
                        translation: `조이스 바스켓\n뉴저지주 테나플라이 틸튼 가 12, 07670\nwww.zoyasbasket.com\n\n조이스 바스켓의 모든 제품이 마음에 드시나요? 여기 그것들이 더 마음에 들게 될 이유가 있습니다! 저희 보상 프로그램에 가입하시고 조야가 제공하는 모든 제품에 최대 5퍼센트를 돌려받으세요! 현금 보상 포인트를 매장이나 온라인에서 사용하세요.\n\n• 비타민 및 보충제\n• 견과 및 씨앗 버터\n• 잼, 젤리 및 과일 스프레드\n• 통곡물 및 시리얼\n• 건강 및 건강 관리 제품\n\n저희는 뉴저지 전역에 배송합니다. 배송비는 최소 35달러 구매 시 무료입니다. 배송에는 최대 3일이 걸릴 수 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What is the purpose of the advertisement?",
                        options: [
                            { label: "A", text: "To announce a sale on discontinued products" },
                            { label: "B", text: "To ask consumers for feedback on their favorite items" },
                            { label: "C", text: "To encourage consumers to join a reward program" },
                            { label: "D", text: "To advertise a special offer on fresh fruits and vegetables" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "광고의 목적은?",
                        explanation: `첫 단략의 세 번째 문장에서 조야의 고객들에게 보상 프로그램에 가입하고 조야의 모든 제품에 최대 5퍼센트를 돌려받으라(Sign up for our reward program and get up to 5% on everything Zoya's offers)고 권유하고 있으므로 (C)가 정답입니다.`
                    },
                    {
                        id: "148",
                        text: "What is indicated about deliveries?",
                        options: [
                            { label: "A", text: "A signature is required." },
                            { label: "B", text: "They arrive within three days." },
                            { label: "C", text: "They are free with a coupon code." },
                            { label: "D", text: "They must be scheduled at the time the order is placed." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "배송에 대해 명시된 것은?",
                        explanation: `마지막 문장에서 배송에는 최대 3일이 걸릴 수 있다(Please allow up to three days for delivery)고 했으므로 (B)가 정답입니다.`
                    }
                ]
            },
            // Questions 149-150: Advertisement
            {
                id: "p7-t8-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t8-s2-p1",
                        type: "ADVERTISEMENT",
                        title: "Grecian Terrace Hotel",
                        content: `Grecian Terrace Hotel\n\nHost your next business conference at our five-star hotel on the beautiful Messenian Gulf. Our facility has spacious meeting rooms overlooking the sea and the picturesque beach. The hotel is the perfect setting for a corporate retreat for your staff. Enjoy a team bonding experience while taking advantage of gourmet meals, great views, and first-rate entertainment.\n\nContact: Helena Samaras, Hotel Manager\nhsamaras@grecianterrace.com.gr\n+30 2721 093365`,
                        translation: `그레션 테라스 호텔\n\n아름다운 메세니안 만에 위치한 5성급 호텔에서 다음 비즈니스 컨퍼런스를 개최하십시오. 저희 시설은 바다와 그림 같은 해변이 내려다보이는 넓은 회의실을 갖추고 있습니다. 저희 호텔은 귀하의 직원을 위한 회사 야유회에 완벽한 장소입니다. 고급 식사, 멋진 전망, 최고의 엔터테인먼트를 이용하면서 팀의 유대를 쌓는 경험을 즐기십시오.\n\n연락처: 헬레나 사마라스, 호텔 매니저\nhsamaras@grecianterrace.com.gr\n+30 2721 093365`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "For whom is the advertisement most likely intended?",
                        options: [
                            { label: "A", text: "Residents of Kalamata" },
                            { label: "B", text: "Overseas visitors on holiday" },
                            { label: "C", text: "Corporate travel planners" },
                            { label: "D", text: "Local catering companies" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "광고는 누구를 대상으로 하는 것 같은가?",
                        explanation: `첫 문장에서 아름다운 메세니안 만에 위치한 5성급 호텔에서 다음 비즈니스 컨퍼런스를 개최하라(Host your next business conference at our five-star hotel on the beautiful Messenian Gulf)고 했고, 세 번째 문장에서 해당 호텔은 직원을 위한 회사 야유회에 완벽한 장소(The hotel is the perfect setting for a corporate retreat for your staff)라고 한 것으로 보아 기업 행사를 기획하는 사람을 대상으로 하는 광고임을 알 수 있다. 따라서 (C)가 정답이다.`
                    },
                    {
                        id: "150",
                        text: "What is indicated about the Grecian Terrace Hotel?",
                        options: [
                            { label: "A", text: "It recently renovated its dining room." },
                            { label: "B", text: "It is under new management." },
                            { label: "C", text: "It has several locations." },
                            { label: "D", text: "It is near the seaside." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "그레션 테라스 호텔에 대해 암시된 것은?",
                        explanation: `두 번째 문장에서 시설은 바다와 그림 같은 해변이 내려다보이는 넓은 회의실을 갖추고 있다(Our facility has spacious meeting rooms overlooking the sea and the picturesque beach)고 했으므로 호텔이 해변과 가까이 있음을 알 수 있다. 따라서 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 151-152: Report
            {
                id: "p7-t8-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t8-s3-p1",
                        type: "INFORMATION",
                        title: "Cozilete Slippers\nSocial Media Report for December",
                        content: `Metric | Results\nNumber of posts this month | 8\nAverage number of times each post was viewed | 223,648\nAverage number of individuals who viewed each post | 87,122\nAverage number of advertisements for Cozilete Slippers per post | 1\nAverage number of times a link to an advertisement in a post was clicked | 24,015\nAverage total interactions per post (likes, shares, and comments) | 674\n\nData for corporate internal use only`,
                        translation: `코질레 슬리퍼스\n12월 소설 미디어 보고서\n\n측정 기준 | 결과\n이달 게시글 수 | 8\n각 게시글당 평균 조회 수 | 223,648\n각 게시글을 본 평균 개인 수 | 87,122\n게시글당 코질레 슬리퍼스의 평균 광고 수 | 1\n게시글의 광고 링크가 클릭된 평균 횟수 | 24,015\n게시글당 평균 총 반응(좋아요, 공유 및 댓글 수) | 674\n\n기업 내부 전용 데이터`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "For whom is the report most likely intended?",
                        options: [
                            { label: "A", text: "Cozilete Slippers' suppliers" },
                            { label: "B", text: "Cozilete Slippers' marketing team" },
                            { label: "C", text: "Cozilete Slippers' shipping department" },
                            { label: "D", text: "Cozilete Slippers' most loyal customers" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "보고서는 누구를 대상으로 하는 것 같은가?",
                        explanation: `보고서의 제목이 '코질레 슬리퍼스(Cozilete Slippers) 12월 소셜 미디어 보고서(Social Media Report for December)'이고 표의 측정 기준 내 번째, 다섯 번째 칸에 각각 평균 광고 수(Average number of advertisements)와 게시글의 광고 링크가 클릭된 평균 횟수(Average number ~ clicked)라고 광고 관련 정보가 나와 있으며, 보고서 하단에 '기업 내부 전용 데이터(Data for corporate internal use only)'라고 명시되어 있으므로 회사 외부와는 공유할 수 없는 마케팅 관련 보고서임을 알 수 있다. 따라서 (B)가 정답이다.`
                    },
                    {
                        id: "152",
                        text: "What is indicated in the report?",
                        options: [
                            { label: "A", text: "Every post contained more than one advertisement for Cozilete Slippers." },
                            { label: "B", text: "Most individuals commented on each post they viewed." },
                            { label: "C", text: "Each post was viewed by an average of about 87,000 individuals." },
                            { label: "D", text: "Few individuals viewed a post more than one time." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "보고서에 명시된 것은?",
                        explanation: `표의 세 번째 칸에 '각 게시글을 본 평균 개인 수(Average number of individuals who viewed each post)'가 87,122명이라고 나와 있으므로 (C)가 정답이다. [게시글당 코질레 슬리퍼스의 평균 광고 수가 10이므로 (A), 각 게시글을 본 평균 사랑 수는 87,122명인데 게시글당 평균 총 반응은 674회이므로 (B), 각 게시글을 본 평균 개인 수는 87,122명인데 게시글당 평균 조회 수는 223,648회이므로 (D)는 오답이다.]`
                    }
                ]
            },
            // Questions 153-154: Online Chat
            {
                id: "p7-t8-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t8-s4-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Keri Mohan [12:40 P.M.]\nI'm nearly done readying the jewelry orders for shipment. I've inserted a packing slip and business card in each box. Should anything else be included before I seal them up and drop them off at the post office?\n\nSujay Rishi [12:42 P.M.]\nCan you put a Rishi Gemstones magnet in each box?\n\nKeri Mohan [12:43 P.M.]\nCertainly! I'll do that right away.\n\nKeri Mohan [12:50 P.M.]\nOh no, we're running low on shipping labels. I can order some more.\n\nSujay Rishi [12:54 P.M.]\nActually, we have an entire bin of them. Check the supply closet. Let me know if you can't find them.`,
                        translation: `케리 모한 [오후 12:40] 보석 주문의 배송 준비 작업을 거의 끝냈습니다. 각 상자에 포장 전표와 명함을 넣었습니다. 밀봉해서 우체국에 가져가기 전에 포함해야 할 것이 또 있나요?\n\n수제이 리시 [오후 12:42] 각 상자에 리시 젬스톤즈 자석을 넣어 주시겠어요?\n\n케리 모한 [오후 12:43] 물론이죠! 지금 바로 하겠습니다.\n\n케리 모한 [오후 12:50] 아, 배송 라벨이 모자라네요. 제가 좀 더 주문하겠습니다.\n\n수제이 리시 [오후 12:54] 사실, 통째로 한 통 있어요. 비품 창고를 확인해 보세요. 못 찾으면 알려 주세요.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What does Ms. Mohan inquire about?",
                        options: [
                            { label: "A", text: "Items to include in some boxes" },
                            { label: "B", text: "When an order will be shipped" },
                            { label: "C", text: "How to safely package the jewelry" },
                            { label: "D", text: "Where the business cards are stored" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "모한 씨가 문의하는 것은?",
                        explanation: `12시 40분에 모한 씨가 각 상자에 포장 전표와 명함을 넣었다(I've inserted a packing slip and business card in each box)면서 밀봉해서 우체국에 가져가기 전에 포함시켜야 할 것이 또 있는지(Should anything else be included before I seal them up ~ at the post office)를 묻고 있으므로 (A)가 정답입니다.`
                    },
                    {
                        id: "154",
                        text: "At 12:54 P.M., what does Mr. Rishi most likely mean when he writes, \"Actually, we have an entire bin of them\"?",
                        options: [
                            { label: "A", text: "Ms. Mohan can distribute the magnets." },
                            { label: "B", text: "Ms. Mohan can reorganize the supply closet." },
                            { label: "C", text: "Ms. Mohan should not order more labels." },
                            { label: "D", text: "Ms. Mohan should not go to the post office." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오후 12시 54분에 리시 씨가 \"사실, 통째로 한 통 있어요\"라고 쓴 의도는?",
                        explanation: `12시 50분에 모한 씨가 배송 라벨이 모자라다(we're running low on shipping labels)면서 좀 더 주문하겠다(I can order some more)고 하자, 12시 54분에 리시 씨가 사실 통째로 한 통 있다(Actually, we have an entire bin of them)고 대답하며 비품 창고를 확인해 보라고 했다. 따라서 리시 씨는 비품 창고에 라벨이 충분히 있으니 주문을 할 필요가 없다는 의도로 한 말임을 알 수 있다. 따라서 (C)가 정답이다.`
                    }
                ]
            },
            // Questions 155-157: Notice
            {
                id: "p7-t8-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t8-s5-p1",
                        type: "NOTICE",
                        title: "Notice",
                        content: `Twin Lakes\nThe best place to live in Tielersburg!\n\nPlease join the staff of Twin Lakes for our monthly resident information meeting.\n\nDate and time: Tuesday, March 21, 7:00 P.M.–8:30 P.M.\nLocation: Community Center conference room (across the hall from the rental office)\n\nAgenda items and presenters:\n1. Property enhancements: overview of plans for fence repair and new landscaping in the pool area—Mr. Abgarian, groundskeeping and maintenance supervisor\n2. Community garden: details for garden plot sign-up and annual biggest tomato contest—Ms. Kantor, events and activities coordinator\n3. Water main work on Huron Street: progress update—Mr. Carter, Department of Public Works, City of Tielersburg\n4. Utility rates: discussion about the rise in quarterly utility fees charged to Twin Lakes property management by the city—Mr. Underwood, general manager\n5. New business: creation of Resident Advisory Board—Ms. Davis, leasing and resident relations manager\n6. Questions and comments\n7. Adjournment`,
                        translation: `트윈 레이크스\n틸러스버그에서 가장 살기 좋은 장소!\n\n월간 주민 정보 회의에 트윈 레이크스 직원들과 함께해 주세요.\n\n일시: 3월 21일 화요일 오후 7시 ~ 8시 30분\n장소: 주민센터 회의실 (임대 사무소 맞은편)\n\n안건 및 발표자:\n1. 부지 개선: 울타리 보수 및 수영장 구역의 새로운 조경 계획에 대한 개요 - 압가리안 씨, 부지 관리 및 유지 감독관\n2. 공동체 정원: 정원 부지 계약 및 연례 최대 토마토 콘테스트에 대한 세부 정보 - 칸터 씨, 행사 및 활동 전담 담당자\n3. 휴론 가의 수도관 공사: 진행 상황 업데이트 - 카터 씨, 틸러스버그 시 공공사업부\n4. 공과금: 시에서 트윈 레이크스 부지 관리에 부과하는 분기별 공과금 인상에 대한 논의 - 언더우드 씨, 총괄 관리자\n5. 신규 사업: 주민 자문 위원회 신설 - 데이비스 씨, 임대 및 주민 관계 관리자\n6. 질문 및 의견\n7. 휴회`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What most likely is Twin Lakes?",
                        options: [
                            { label: "A", text: "A shopping mall" },
                            { label: "B", text: "A garden center" },
                            { label: "C", text: "An amusement park" },
                            { label: "D", text: "A housing complex" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "트윈 레이크스는 무엇일 것 같은가?",
                        explanation: `제목에 트윈 레이크스(Twin Lakes)는 틸러스버그에서 가장 살기 좋은 장소(The best place to live in Tielersburg)라고 했으므로 트윈 레이크스는 주거 지역임을 알 수 있다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "156",
                        text: "What is Mr. Abgarian's role in the meeting?",
                        options: [
                            { label: "A", text: "To provide information about scheduled improvements" },
                            { label: "B", text: "To explain details of an annual contest" },
                            { label: "C", text: "To plan the repair of a broken water pipe" },
                            { label: "D", text: "To set the fees people will pay" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "회의에서 압가리안 씨의 역할은?",
                        explanation: `안건 및 발표자(Agenda items and presenters)의 첫 항목에서 부지 개선 관련 울타리 보수 및 수영장 구역의 새로운 조경 계획에 대한 개요를 부지 관리 및 유지 감독관인 압가리안 씨가 발표한다고 나와 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "157",
                        text: "Who has job responsibilities outside of Twin Lakes?",
                        options: [
                            { label: "A", text: "Ms. Kantor" },
                            { label: "B", text: "Mr. Carter" },
                            { label: "C", text: "Mr. Underwood" },
                            { label: "D", text: "Ms. Davis" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "트윈 레이크스 외부 업무 담당자는?",
                        explanation: `안건 및 발표자(Agenda items and presenters)의 세 번째 항목에서 휴론 가의 수도관 공사 관련 진행 상황 업데이트를 틸러스버그 시 공공사업부의 카터 씨(Mr. Carter, Department of Public Works, City of Tielersburg)가 발표한다고 나와 있다. 따라서 트윈 레이크스는 틸러스버그에 속하는 일부 주거 단지이고, 카터 씨는 틸러스버그 시 전체의 공공사업을 담당하는 부서의 직원이므로 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 158-160: Notice
            {
                id: "p7-t8-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t8-s6-p1",
                        type: "NOTICE",
                        title: "Lingate Chemical Corporation\nLaboratory Safety Rules",
                        content: `Lingate Chemical Corporation\nLaboratory Safety Rules\n\nThe following is a partial list of rules you must follow while in the laboratory. Before beginning work in the lab, all workers are also required to read our most recent safety manual and complete our basic safety course. Please contact Mr. Kang if you need to complete these prerequisites.\n\n• Wear mandatory lab coat, goggles, and footwear.\n• Follow directions on posted signs in case of an accident.\n• Know how to properly operate all safety equipment (fire extinguishers, eye wash stations, etc.).\n• Know the location of all emergency exits.\n• Refrain from eating or drinking in the laboratory.\n• Report any unsafe conditions, accidents, or spills immediately to your supervisor.\n• In an emergency, exit immediately, call emergency services, and then contact your supervisor.`,
                        translation: `링게이트 화학 기업\n실험실 안전 규칙\n\n다음은 실험실에 있는 동안 따라야 할 규칙의 일부 목록입니다. 실험실에서 작업을 시작하기 전에 또한 모든 직원은 최신 안전 규정을 읽고 기본 안전 과정을 이수해야 합니다. 이러한 전제 조건을 완수해야 할 경우 강 씨에게 연락하십시오.\n\n• 실험실 가운, 고글, 신발 의무 착용\n• 사고에 대비하여 게시된 표지판의 지시사항 준수\n• 모든 안전 장비(소화기, 눈 세척기 등)의 올바른 작동법 숙지\n• 모든 비상구의 위치 파악\n• 실험실에서 음식 및 음료 섭취 삼가\n• 안전하지 않은 상황, 사고 또는 유출을 관리자에게 즉시 보고\n• 위급 상황 시 즉시 대피, 긴급 서비스 호출 후 관리자에게 연락`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "Who is the notice most likely intended for?",
                        options: [
                            { label: "A", text: "Students" },
                            { label: "B", text: "Employees" },
                            { label: "C", text: "Cleaning crews" },
                            { label: "D", text: "Emergency personnel" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "공지의 대상은 누구일 것 같은가?",
                        explanation: `공지의 제목이 링게이트 화학 기업(Lingate Chemical Corporation)의 실험실 안전 규칙(Laboratory Safety Rules)이고, 첫 문장에서 다음은 실험실에 있는 동안 따라야 할 규칙의 일부 목록(The following is ~ must follow while in the laboratory)이라고 설명하고 있다. 따라서 화학 기업의 실험실에서 일하는 직원들을 대상으로 하는 공지임을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "159",
                        text: "Why would Mr. Kang be contacted?",
                        options: [
                            { label: "A", text: "To obtain safety equipment" },
                            { label: "B", text: "To report unsafe conditions" },
                            { label: "C", text: "To arrange to complete a course" },
                            { label: "D", text: "To submit revisions to the safety manual" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "강 씨가 연락을 받게 될 이유는?",
                        explanation: `두 번째 문장에서 실험실에서 작업을 시작하기 전에 모든 직원은 최신 안전 규정을 읽고 기본 안전 과정을 이수해야 한다(Before beginning work in the lab, all workers are also required to ~ complete our basic safety course)면서 이러한 전제 조건을 완수해야 할 경우 강 씨에게 연락하라(Please contact Mr. Kang if you need to complete these prerequisites)고 했다. 따라서 기본 안전 과정을 이수해야 할 경우 강 씨에게 연락해야 하는 것이므로 (C)가 정답이다.`
                    },
                    {
                        id: "160",
                        text: "What is NOT a stated rule for working in the laboratory?",
                        options: [
                            { label: "A", text: "Goggles must be worn." },
                            { label: "B", text: "Exits must remain open." },
                            { label: "C", text: "Food must not be eaten." },
                            { label: "D", text: "Accidents must be reported." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "실험실 작업을 위해 명시된 규칙이 아닌 것은?",
                        explanation: `실험실 안전 규칙 목록의 첫 항목에서 실험실 가운, 고글, 신발 의무 착용(Wear mandatory lab coat, goggles, and footwear)이라고 했으므로 (A), 다섯 번째 항목에서 실험실에서 음식 및 음료 섭취 삼가(Refrain from eating or drinking in the laboratory)라고 했으므로 (C), 여섯 번째 항목에서 안전하지 않은 상황, 사고 또는 유출을 관리자에게 즉시 보고(Report any unsafe conditions, accidents, or spills immediately to your supervisor)라고 했으므로 (D)는 규칙으로 명시되었다. 출구가 열려 있어야 한다는 내용은 없으므로 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 161-163: E-mail
            {
                id: "p7-t8-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t8-s7-p1",
                        type: "EMAIL",
                        content: `To: All staff\nFrom: Liza Chu, IT Department\nDate: June 8, 1:13 P.M.\nSubject: Network issues\n\nGood afternoon everyone. — [1] —.\n\nAt 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building. — [2] —. We quickly received reports of printer malfunctions, missing network drives, difficulty loading e-mail messages, and other problems. — [3] —.\n\nWe have now stabilized the situation, but if you should still encounter these or similar issues, please attempt first to address them by restarting your computer. — [4] —.`,
                        translation: `수신: 전 직원\n발신: 리자 추가, IT 부서\n날짜: 6월 8일 오후 1시 13분\n제목: 네트워크 문제\n\n안녕하세요 여러분. — [1] —.\n\n오늘 오전 10시에 정보 기술 팀이 네트워크 유지 보수 작업을 한 결과, 건물 전체에 일련의 문제들이 발생했습니다. — [2] —. 프린터 오작동, 누락된 네트워크 드라이브, 이메일 메시지 로딩이 잘 안되는 것을 비롯한 기타 문제들에 대해 신속하게 보고를 받았습니다. — [3] —.\n\n저희가 현재 상황을 안정시켰으나 — [4] — 아직도 이러한 문제나 유사한 문제를 겪으실 경우 먼저 컴퓨터를 다시 시작하여 문제를 해결해 보십시오.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the e-mail about?",
                        options: [
                            { label: "A", text: "Scheduling a team meeting" },
                            { label: "B", text: "Setting up a new e-mail account" },
                            { label: "C", text: "Concerns about Web browsing security" },
                            { label: "D", text: "Problems with a computer network" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "이메일은 무엇에 관한 것인가?",
                        explanation: `이메일의 제목이 네트워크 문제(Subject: Network issues)이고, 첫 문장에서 오늘 오전 10시에 정보 기술 팀이 네트워크 유지 보수 작업을 한 결과, 건물 전체에 일련의 문제들이 발생했다(At 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building)고 했으므로 컴퓨터 네트워크 관련 문제에 관한 이메일임을 알 수 있다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "162",
                        text: "What probably happened before Ms. Chu sent the e-mail?",
                        options: [
                            { label: "A", text: "Employees requested assistance from the IT department." },
                            { label: "B", text: "Log-on procedures for company accounts were changed." },
                            { label: "C", text: "Computer equipment was removed from the building." },
                            { label: "D", text: "Some staff members received new printers." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "추 씨가 이메일을 보내기 전에 발생했을 것 같은 일은?",
                        explanation: `첫 번째 단락 첫 문장에서 추 씨가 오늘 오전 10시에 정보 기술 팀이 네트워크 유지 보수 작업을 한 결과 건물 전체에 일련의 문제들이 발생했다(At 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building)고 했고, 프린터 오작동, 누락된 네트워크 드라이브, 이멜 메시지 로딩이 잘 안되는 것을 비롯한 기타 문제들에 대해 신속하게 보고를 받았다(We quickly received reports of printer malfunctions, missing network drives, difficulty loading e-mail messages, and other problems)고 했다. 따라서 추 씨가 이메일을 보내기 전에 직원들이 IT 부서에 네트워크 문제를 보고하고 도움을 요청했다는 것을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "163",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"If you continue to have problems after doing so, then give us a call.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                        explanation: `주어진 문장의 after doing so가 문제 해결의 단서이다. "그렇게 한 뒤에도 문제가 지속될 경우 저희에게 전화하십시오"라는 지침을 전달하고 있으므로 주어진 문장 앞에는 'doing so'에 해당하는 문제에 대한 해결책이 제시되어 있어야 한다. 따라서 아직도 이러한 문제나 유사한 문제를 겪을 경우 먼저 컴퓨터를 다시 시작하며 문제를 해결하라는 you should still encounter these or similar issues, please attempt first to address them by restarting your computer라는 문장 뒤인 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 164-167: Online Chat
            {
                id: "p7-t8-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t8-s8-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Sunisa Sommer [1:30 P.M.]\nHi Raphael and Hamed. Can either of you tell me where I can find the laptop that's usually in Conference Room B? It isn't on the cart with the projector.\n\nRaphael Luongo [1:32 P.M.]\nI used it for my presentation on Monday, but I left it in the conference room.\n\nHamed Gabr [1:32 P.M.]\nI believe Martin Dabliz was going to ask someone in the IT department to look at it because it wasn't working properly.\n\nSunisa Sommer [1:34 P.M.]\nGot it. Do you know if a repair ticket was submitted?\n\nHamed Gabr [1:35 P.M.]\nI don't think Martin knows all the IT procedures. He's only in his first week.\n\nSunisa Sommer [1:37 P.M.]\nRight. We should make sure that information is included in the employee orientation materials.\n\nRaphael Luongo [1:41 P.M.]\nI don't see a ticket on the IT site. I'll reach out to IT and take care of that now.`,
                        translation: `수니사 소머 [오후 1:30] 안녕하세요 라파엘 그리고 하메드. 164 평소 B 회의실에 있는 노트북이 어디에 있는지 아는 분 계세요? 프로젝터가 놓인 카트에 없군요.\n\n라파엘 루옹고 [오후 1:32] 월요일에 제가 발표에 사용하기는 했지만 회의실에 두고 나왔습니다.\n\n하메드 가브르 [오후 1:32] 노트북이 제대로 작동이 안 돼서 마틴 다블리즈가 IT 부서의 누군가에게 살펴봐 달라고 요청하려고 했던 것 같습니다.\n\n수니사 소머 [오후 1:34] 알겠습니다. 수리 요청서가 제출되었는지 아시나요?\n\n하메드 가브르 [오후 1:35] 마틴이 IT 절차를 전부 알지는 못할 것 같습니다. 근무한 지 일주일밖에 안 됐거든요.\n\n수니사 소머 [오후 1:37] 그렇군요. 직원 오리엔테이션 자료에 반드시 그 정보를 포함해야겠습니다.\n\n라파엘 루옹고 [오후 1:41] IT 사이트에 요청 내용이 보이지 않습니다. 제가 지금 IT에 연락해서 처리하겠습니다.`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "Why does Ms. Sommer message her colleagues?",
                        options: [
                            { label: "A", text: "To alert them that a projector is broken" },
                            { label: "B", text: "To ask where a computer has been put" },
                            { label: "C", text: "To request help creating a presentation" },
                            { label: "D", text: "To find out whether a conference room is available" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "소머 씨가 동료들에게 메시지를 보낸 이유는?",
                        explanation: `1시 30분에 소머 씨가 평소 B 회의실에 있는 노트북이 어디에 있는지 알려달라(Can either of you tell me where I can find the laptop that's usually in Conference Room B?)고 요청하고 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "165",
                        text: "At 1:34 P.M., what does Ms. Sommer most likely mean when she writes, \"Got it\"?",
                        options: [
                            { label: "A", text: "She found the repair ticket." },
                            { label: "B", text: "She now has access to a Web site." },
                            { label: "C", text: "She knows the correct procedure to follow." },
                            { label: "D", text: "She understands what happened." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "오후 1시 34분에 소머 씨가 \"알겠습니다\"라고 쓴 의도는?",
                        explanation: `1시 32분에 가브르 씨가 노트북이 제대로 작동이 안 돼서 마틴 다블리즈가 IT 부서의 누군가에게 살펴봐 달라고 요청하려고 했던 것 같다(I believe Martin Dabliz was going to ask ~ because it wasn't working properly)고 하자 1시 34분에 소머 씨가 "알겠습니다(Got it)"라고 했다. 따라서 소머 씨가 가브르 씨의 상황 설명을 이해했음을 표현하기 위해 한 말임을 알 수 있으므로 (D)가 정답이다.`
                    },
                    {
                        id: "166",
                        text: "What is suggested about Mr. Dabliz?",
                        options: [
                            { label: "A", text: "He was recently hired." },
                            { label: "B", text: "He is Mr. Gabr's supervisor." },
                            { label: "C", text: "He is the chief technology officer." },
                            { label: "D", text: "He was interviewed on Monday." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "다블리즈 씨에 대해 암시된 것은?",
                        explanation: `1시 35분에 가브르 씨가 마틴이 IT 절차를 전부 알지는 못할 것 같다(I don't think Martin knows all the IT procedures)고 하며, 근무한 지 일주일밖에 안 됐다(He's only in his first week)고 했다. 따라서 마틴 다블리즈는 최근에 입사했다는 것을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "167",
                        text: "What will Mr. Luongo probably do next?",
                        options: [
                            { label: "A", text: "Revise a company policy" },
                            { label: "B", text: "Repair the laptop himself" },
                            { label: "C", text: "Contact the IT department" },
                            { label: "D", text: "Update the training materials" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "루옹고 씨는 다음에 무엇을 할 것 같은가?",
                        explanation: `1시 41분에 루옹고 씨가 지금 IT에 연락해서 처리하겠다(I'll reach out to IT and take care of that now)고 한 것으로 보아 루옹고 씨는 곧바로 IT 부서에 연락할 것임을 알 수 있다. 따라서 (C)가 정답이다.`
                    }
                ]
            },
            // Questions 168-171: E-mail
            {
                id: "p7-t8-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t8-s9-p1",
                        type: "EMAIL",
                        content: `To: Lindsey Galloway <lgalloway@sportsupplies.com>\nFrom: Samuel Bains <samuelbains@exertreks.com>\nDate: August 16\nSubject: Exertreks boots for winter activities\n\nHello Ms. Galloway,\n\nI am sorry I missed your call this morning. The answers to your questions are given below.\n\nWe here at Exertreks have recently completed the development of our Winter Hikers. Like our waterproof Trekkers, they are waterproof, but the Winter Hikers are most appropriate for use in extreme cold. The boots are lined with a proprietary material that is highly effective at retaining body heat. They are also durable, light, and comfortable. For orders of 50 pairs or more of the Winter Hikers, the wholesale price per pair is $65. The recommended retail price is $89. We can deliver your order in two weeks.\n\nPresale reviews of the boots by experts in outdoor sports have been enthusiastic. You can expect the Winter Hikers to be a big hit with your customers this year. I look forward to hearing from you soon to answer any other questions and to help you with your first order.\n\nSincerely,\n\nSamuel Bains`,
                        translation: `수신: 린지 갤러웨이 <lgalloway@sportsupplies.com>\n발신: 새뮤얼 베인스 <samuelbains@exertreks.com>\n날짜: 8월 16일\n제목: 겨울 활동을 위한 엑서트렉스 부츠\n\n안녕하세요 갤러웨이 씨,\n\n오늘 아침에 전화를 받지 못해서 죄송합니다. 귀하의 문의에 대한 답변은 아래와 같습니다.\n\n저희 엑서트렉스는 최근에 윈터 하이커스의 개발을 완료했습니다. 다른 모델과 마찬가지로 윈터 하이커스도 방수이지만 극한 추위에서 사용하기에 가장 적절합니다. 이 부츠는 체온 유지에 매우 효과적인 전매 특허 소재로 안감을 댔습니다. 이 부츠는 또한 내구성이 좋으며 가볍고 편안합니다. 윈터 하이커스를 50켤레 이상 주문하실 경우 켤레당 도매가는 65달러입니다. 권장 소비자 가격은 89달러입니다. 주문품은 2주 후에 배송해 드릴 수 있습니다.\n\n아웃도어 스포츠 전문가들의 부츠에 대한 사전 판매 평가는 열광적입니다. 올해 귀하의 고객들에게 큰 인기를 끌 것으로 예상하셔도 좋습니다. 곧 연락 주셔서 다른 문의사항에 답변을 드리거나 첫 주문을 도와드리게 되길 기대합니다.\n\n새뮤얼 베인스`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is implied in Mr. Bains's e-mail?",
                        options: [
                            { label: "A", text: "Ms. Galloway asked him to check on an order that had been placed." },
                            { label: "B", text: "Ms. Galloway left a message for him asking for information." },
                            { label: "C", text: "He asked Ms. Galloway to return a call he had made before." },
                            { label: "D", text: "He and Ms. Galloway met earlier in the day." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "베인스 씨의 이메일에 암시된 것은?",
                        explanation: `첫 문장에서 베인스 씨가 갤러웨이 씨에게 오늘 아침에 전화를 받지 못해서 죄송하다(I am sorry I missed your call this morning)며 귀하의 문의에 대한 답변은 아래와 같다(The answers to your questions are given below)고 했다. 따라서 갤러웨이 씨가 오늘 아침 베인스 씨에게 문의사항이 포함된 전화 메시지를 남겼음을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "169",
                        text: "What is NOT mentioned about the boots?",
                        options: [
                            { label: "A", text: "Their color" },
                            { label: "B", text: "Their weight" },
                            { label: "C", text: "Their durability" },
                            { label: "D", text: "Their warmth" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "부츠에 대해 언급되지 않은 것은?",
                        explanation: `두 번째 단락의 네 번째 문장에서 이 부츠는 내구성이 좋으며 가볍고 편안하다(They are also durable, light, and comfortable)고 했으므로 (B)와 (C), 세 번째 문장에서 이 부츠는 체온 유지에 매우 효과적인 전매 특허 소재로 안감을 댔다(The boots are lined with a proprietary material that is highly effective at retaining body heat)고 했으므로 (D)는 언급이 되었다. 따라서 언급되지 않은 (A)가 정답이다.`
                    },
                    {
                        id: "170",
                        text: "The word \"hit\" in paragraph 3, line 2, is closest in meaning to",
                        options: [
                            { label: "A", text: "match" },
                            { label: "B", text: "arrival" },
                            { label: "C", text: "success" },
                            { label: "D", text: "request" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SYNONYM",
                        translation: "세 번째 단락 2행의 \"hit\"와 의미가 가장 가까운 단어는?",
                        explanation: `의미상 고객들에게 큰 '인기'를 끌 것이라는 뜻으로 쓰였으므로 '성공'을 뜻하는 (C) success가 정답이다.`
                    },
                    {
                        id: "171",
                        text: "What does Mr. Bains want Ms. Galloway to do?",
                        options: [
                            { label: "A", text: "Give the boots a good review online" },
                            { label: "B", text: "Contact him to arrange delivery of some boots" },
                            { label: "C", text: "Charge customers $65 for each pair of boots" },
                            { label: "D", text: "Sell him insulation material to be used in the boots" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "베인스 씨가 갤러웨이 씨에게 원하는 것은?",
                        explanation: `마지막 문장에서 베인스 씨가 갤러웨이 씨에게 곧 연락을 주어서 다른 문의사항에 답변을 하거나 첫 주문을 도와주게 되길 기대한다(I look forward to hearing from you soon to answer any other questions and to help you with your first order)고 했으므로 베인스 씨는 갤러웨이 씨가 부츠를 주문하기 위해 자신에게 연락하기를 바란다는 것을 알 수 있다. 따라서 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 172-175: Web Page
            {
                id: "p7-t8-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t8-s10-p1",
                        type: "WEBPAGE",
                        title: "Tuesday Evening Lecture Series",
                        content: `https://www.hurnhamhistoricalsociety.org/news\n\nTuesday Evening Lecture Series\n\nWe are pleased to announce that our third annual lecture series will be hosted by the Hurnham Heritage Museum on Tuesday evenings over the next six weeks. — [1] —. Each guest speaker will focus on objects from the museum's permanent collection. — [2] —. The first lecture, on June 15 at 7:00 P.M., features Georgia Hinds, head curator of the Knowles Art Gallery. — [3] —. Ms. Hinds will use a writing desk, a chest, and a household table to discuss what furniture can reveal to us about the lives of the first Hurnham residents over 200 years ago.\n\nThe lecture series is open to the public and includes free admission to the Hurnham Heritage Museum. — [4] —. The Fasseller Café, next door to the museum, will stay open late on Tuesdays to accommodate lecture attendees and the general public.\n\nPosted on June 8`,
                        translation: `https://www.hurnhamhistoricalsociety.org/news\n\n화요일 저녁 강연 시리즈\n\n172 저희의 세 번째 연례 강연 시리즈가 험햄 헤리티지 박물관에서 향후 6주에 걸쳐 화요일 저녁마다 개최될 것임을 알려드리게 되어 기쁩니다. — [1] —. 173, 175 각각의 초청 연사는 박물관 소장품에 있는 물건들에 초점을 맞출 것입니다. — [2] —. 174 6월 15일 저녁 7시에 열리는 첫 강연에는 노울즈 아트 갤러리의 수석 큐레이터인 조지아 하인즈가 출연합니다. — [3] —. 174 하인즈 씨는 글쓰기 책상, 서랍장, 그리고 가정용 탁자를 이용하여 200년 이상 전의 험햄 초기 주민들의 삶에 대해 가구가 우리에게 무엇을 보여줄 수 있는지를 논의할 것입니다.\n\n강연 시리즈는 일반인이 참여할 수 있으며 험햄 헤리티지 박물관 무료 입장권이 포함됩니다. — [4] —. 박물관 옆에 있는 파셀러 카페는 강연 참석자와 일반 시민들이 이용할 수 있도록 화요일 늦게까지 문을 열 예정입니다.\n\n6월 8일 게시`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is true about the lecture series?",
                        options: [
                            { label: "A", text: "It highlights modern art and crafts." },
                            { label: "B", text: "It is held on a monthly basis." },
                            { label: "C", text: "It is sponsored by local artists." },
                            { label: "D", text: "It is being offered for the third year." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "강연 시리즈에 대해 사실인 것은?",
                        explanation: `첫 문장에서 세 번째 연례 강연 시리즈가 험햄 헤리티지 박물관에서 향후 6주에 걸쳐 화요일 저녁마다 개최될 것임을 알리게 되어 기쁘다(We are pleased to announce that our third annual lecture series will be hosted ~ over the next six weeks)고 했으므로 강연 시리즈가 매년 3년째 열리고 있다는 것을 알 수 있다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "173",
                        text: "To whom do the objects Ms. Hinds will discuss belong?",
                        options: [
                            { label: "A", text: "The Hurnham Historical Society" },
                            { label: "B", text: "The Knowles Art Gallery" },
                            { label: "C", text: "The Hurnham Heritage Museum" },
                            { label: "D", text: "The Fasseller Café" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "하인즈 씨가 강연할 물건의 소유자는?",
                        explanation: `첫 단락 두 번째 문장에서 각각의 초청 연사는 박물관 소장품에 있는 물건들에 초점을 맞출 것(Each guest speaker will focus on objects from the museum's permanent collection)이라고 했고, 네 번째 문장에서 6월 15일 저녁 7시에 열리는 첫 강연에는 노울즈 아트 갤러리의 수석 큐레이터인 조지아 하인즈가 출연한다(The first lecture, on June 15 at 7:00 P.M., features Georgia Hinds, head curator of the Knowles Art Gallery)고 했다. 따라서 초청 연사인 하인즈 씨가 강연에서 다루게 될 물품은 험햄 헤리티지 박물관의 영구 소장품임을 알 수 있으므로 (C)가 정답이다.`
                    },
                    {
                        id: "174",
                        text: "What is indicated about the Hurnham area?",
                        options: [
                            { label: "A", text: "It was established more than 100 years ago." },
                            { label: "B", text: "It has an aging population." },
                            { label: "C", text: "It attracts many young artists." },
                            { label: "D", text: "It was a furniture production center." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "험햄 지역에 대해 암시된 것은?",
                        explanation: `첫 단락 다섯 번째 문장에서 하인즈 씨는 글쓰기 책상, 서랍장, 그리고 가정용 탁자를 이용하여 200년 이상 전의 험햄 초기 주민들의 삶에 대해 가구가 무엇을 보여 줄 수 있는지를 논의할 것(Ms. Hinds will use ~ the lives of the first Hurnham residents over 200 years ago)이라고 했다. 따라서 험햄 초기 주민들의 삶이 200년 이상 전에 시작되었다는 것으로 보아 험햄 마을은 100년보다 더 전에 설립되었음을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "175",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Included among these are items such as furniture, needlework, diaries, musical instruments, and clothing.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                        explanation: `주어진 문장에서 여기에(These)게 가구, 자수, 일기, 악기 및 의류와 같은 물건들이 포함된다고 했으므로, 앞에는 '이것들' 즉, 가구, 의류 등의 물품을 총칭할 수 있는 명사가 복수 형태로 있어야 한다. 따라서 박물관 소장품에 있는 물건들(objects from the museum's permanent collection)이 복수명사로 언급되어 있는 문장 뒤인 (B)가 정답이다.`
                    }
                ]
            },
        ]
    },
    {
        testId: 9,
        title: "Test 9",
        sets: [
            // Questions 147-148: Menu
            {
                id: "p7-t9-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t9-s1-p1",
                        type: "ADVERTISEMENT",
                        title: "Carina's Café Lunch Specials",
                        content: `Carina's Café Lunch Specials\nMonday through Friday from 11:00 A.M. to 3:00 P.M.\n\nFor only $8, combine the soup of the day with one of the following items:\n\nTurkey Sandwich – Turkey, avocado, tomato, lettuce, and mayonnaise on wheat bread\n\nVegetable Panini – Sourdough bread filled with tomato, cucumber, spinach, and mayonnaise, then grilled\n\nMushroom Chicken Cavatappi – Chicken in a mushroom, celery, and onion sauce, served over S-shaped pasta\n\nVegetable Wrap – Fresh tomato, cucumber, and carrots with hummus (made with our secret recipe) on flatbread`,
                        translation: `카리나스 카페 런치 스페셜\n월요일부터 금요일, 오전 11시부터 오후 3시까지\n\n단돈 8달러에 오늘의 수프를 다음 음식 항목 중 하나와 함께 드세요:\n\n칠면조 샌드위치 - 밀빵 위에 칠면조, 아보카도, 토마토, 양상추, 마요네즈\n\n채소 파니니 - 토마토, 오이, 시금치, 마요네즈로 채운 사워도우 빵을 구운 것\n\n버섯 치킨 카바타피 - 버섯, 셀러리, 양파 소스의 치킨을 S자 모양 파스타에 올린 것\n\n채소 랩 - 신선한 토마토, 오이, 당근과 함께 후무스(우리 가게 비법으로 만든)를 바른 납작한 빵`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What does each lunch special include?",
                        options: [
                            { label: "A", text: "A soup" },
                            { label: "B", text: "Carrots" },
                            { label: "C", text: "Tomatoes" },
                            { label: "D", text: "A beverage" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "각각의 런치 스페셜 메뉴에 포함된 것은?",
                        explanation: `두 번째 줄에서 '단돈 8달러에 오늘의 수프를 다음 음식 항목 중 하나와 함께 드세요(For only $8, combine the soup of the day with one of the following items)'라고 했다. 따라서 런치 스페셜 메뉴에 수프가 제공된다는 것을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "148",
                        text: "What item contains an ingredient that is only available from Carina's Café?",
                        options: [
                            { label: "A", text: "Turkey sandwich" },
                            { label: "B", text: "Vegetable panini" },
                            { label: "C", text: "Mushroom chicken cavatappi" },
                            { label: "D", text: "Vegetable wrap" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "카리나스 카페에서만 이용할 수 있는 재료가 들어있는 품목은?",
                        explanation: `마지막 줄에서 채소 랩은 신선한 토마토, 오이, 당근과 함께 후무스(우리 가게 비법으로 만든)를 바른 납작한 빵(Vegetable Wrap - Fresh tomato, cucumber, and carrots with hummus (made with our secret recipe) on flatbread)이라고 했다. 따라서 채소 랩에는 카리나스 카페의 비법으로 만든 후무스가 들어가므로 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 149-150: Advertisement
            {
                id: "p7-t9-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t9-s2-p1",
                        type: "ADVERTISEMENT",
                        title: "Certified Aqua Instructor Workshop",
                        content: `Certified Aqua Instructor Workshop\n\nThis workshop helps fitness professionals become certified aqua instructors by providing them with the skills to design challenging and effective aquatic classes. Join instructor Desbonte Smith for a full-day course to learn a sequence of pool-based workouts that will motivate your students. Mr. Smith started his journey to instructor certification by taking classes at Valley Floor Fitness. He is also a professor at Wilkinson University.\n\nThe workshop costs $99 and will be held at Valley Floor Fitness in Missoula on August 27 from 9 A.M. to 5 P.M. For more information and to register, e-mail Maya Cramer at certification@valleyfloorfitness.com.`,
                        translation: `공인 아쿠아 강사 워크숍\n\n이 워크숍은 도전적이고 효과적인 수중 수업을 설계하는 방법을 시연함으로써 피트니스 전문가들이 공인 아쿠아 강사가 되도록 도와 드립니다. 데스본트 스미스 강사와 종일 과정을 함께하여 학생들에게 동기를 부여해 줄 일련의 수영장 기반 운동을 배우십시오. 스미스 씨는 밸리 플로어 피트니스에서 수업을 듣고 강사 자격 취득을 위한 과정을 시작했습니다. 그는 윌킨슨 대학의 교수이기도 합니다.\n\n워크숍 비용은 99달러이며 미줄라의 밸리 플로어 피트니스에서 8월 27일 오전 9시부터 오후 5시까지 열립니다. 자세한 정보 및 등록을 원하시면 마야 크레이머에게 certification@valleyfloorfitness.com으로 이메일을 보내십시오.`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "The word \"design\" in paragraph 1, line 2, is closest in meaning to",
                        options: [
                            { label: "A", text: "find" },
                            { label: "B", text: "create" },
                            { label: "C", text: "draw" },
                            { label: "D", text: "name" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_VOCABULARY",
                        translation: "'design'과 의미가 가장 가까운 것은?",
                        explanation: `이 워크숍은 도전적이고 효과적인 수중 수업을 설계하는(design) 방법을 시연함으로써 피트니스 전문가들이 공인 아쿠아 강사가 되도록 도와 드립니다(This workshop helps fitness professionals become certified aqua instructors by providing them with the skills to design challenging and effective aquatic classes)라고 했다. 여기서 design은 도전적이고 효과적인 수중 수업을 '설정하거나 계획하다'라는 의미로 쓰였으므로 '창조하다'는 뜻인 (B) create가 정답이다.`
                    },
                    {
                        id: "150",
                        text: "What is indicated about the workshop?",
                        options: [
                            { label: "A", text: "It will be held at a pool at Wilkinson University." },
                            { label: "B", text: "It is being offered on two different dates." },
                            { label: "C", text: "It is available at a discounted rate in August." },
                            { label: "D", text: "It will be taught by a former student of Valley Floor Fitness." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "워크숍에 대해 언급된 것은?",
                        explanation: `스미스 씨는 밸리 플로어 피트니스에서 수업을 듣고(taking classes at Valley Floor Fitness) 강사 자격 취득을 위한 과정을 시작했다고 했다. 따라서 이 워크숍의 강사인 스미스 씨는 밸리 플로어 피트니스의 전 학생이었음을 알 수 있으므로 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 151-152: Online Chat
            {
                id: "p7-t9-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t9-s3-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Jo Hyun-jun [3:27 P.M.]\nI'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M. A friend is visiting that day but only for 24 hours. I was wondering if I could switch shifts with you. I can work on Sunday.\n\nStephanie Touzin [3:29 P.M.]\nSaturday is good for me. It stays less busy than last Sunday. All the doctors attending the medical conference were checking in at the front desk.\n\nJo Hyun-jun [3:31 P.M.]\nAnd I heard that all the accountants at that other conference were at the front desk reviewing their room charges at the same time!\n\nStephanie Touzin [3:32 P.M.]\nThe lobby was bustling.\n\nJo Hyun-jun [3:34 P.M.]\nThanks for helping. It's the first time I've seen my friend Kyle since we graduated from college.`,
                        translation: `조현준 [오후 3:27] 제가 토요일 오전 7시부터 오후 3시까지 프런트에서 근무하기로 되어 있어요. 그날 제 친구가 오기로 했는데, 하루만 있다가 갈 예정이에요. 저와 근무 시간을 바꿔 주실 수 있을지 궁금해요. 저는 일요일에 근무할 수 있어요.\n\n스테파니 두쉬인 [오후 3:29] 토요일 괜찮아요. 지난주 같은 일요일은 겪지 않았으면 할 텐데요. 너무 바빴거든요. 의료 컨퍼런스에 참석한 의사들 전원이 프런트에서 체크인을 했어요.\n\n조현준 [오후 3:31] 그리고 동시에 다른 컨퍼런스에 참석하는 회계사들도 모두 프런트에서 객실 요금을 확인했다고 들었어요!\n\n스테파니 두쉬인 [오후 3:32] 로비가 정말 북적거렸어요.\n\n조현준 [오후 3:34] 도와줘서 고마워요. 대학교 졸업 이후로 제 친구 카일을 처음 보는 거예요.`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "At 3:29 P.M., what does Ms. Touzin most likely mean when she writes, \"Saturday is good for me\"?",
                        options: [
                            { label: "A", text: "She prefers working morning hours." },
                            { label: "B", text: "She can fulfill Jo Hyun-jun's request." },
                            { label: "C", text: "She will attend a medical conference." },
                            { label: "D", text: "She wants to meet Jo Hyun-jun's friend." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오후 3시 29분에 두쉬인 씨가 \"토요일 괜찮아요\"라고 쓴 의도는?",
                        explanation: `3시 27분에 조 씨가 토요일 오전 7시부터 오후 3시까지 프런트에서 근무하기로 되어 있다(I'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M.)고 했고, 두쉬인 씨에게 근무 시간을 바꿔 줄 수 있을지 궁금하다(I was wondering if I could switch shifts with you)면서 일요일에 근무할 수 있다(I can work on Sunday)고 하자 3시 29분에 두쉬인 씨가 토요일 괜찮다(Saturday is good for me)고 대답했다. 따라서 두쉬인 씨는 조 씨의 부탁을 들어주려고 한 제안을 수락하려는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "152",
                        text: "Where do Jo Hyun-jun and Ms. Touzin most likely work?",
                        options: [
                            { label: "A", text: "At a hotel" },
                            { label: "B", text: "At a university" },
                            { label: "C", text: "At a medical center" },
                            { label: "D", text: "At an accounting firm" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "조 씨와 두쉬인 씨가 근무할 것 같은 곳은?",
                        explanation: `3시 29분에 두쉬인 씨가 의료 컨퍼런스에 참석한 의사들 전원이 프런트에서 체크인을 했다(All the doctors ~ checking in at the front desk)고 했고, 3시 31분에 조 씨가 그리고 동시에 다른 컨퍼런스에 참석하는 회계사들도 모두 프런트에서 객실 요금을 확인했다고 들었다(And I heard that all the accountants ~ at the front desk reviewing their room charges at the same time)고 했다. 프런트에서 손님들이 체크인을 하거나 객실 요금을 확인한 상황을 이야기하는 것으로 보아 두 사람은 호텔 직원임을 알 수 있으므로 (A)가 정답이다.`
                    }
                ]
            },
            // Questions 153-154: E-mail
            {
                id: "p7-t9-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t9-s4-p1",
                        type: "EMAIL",
                        content: `To: Madalena Navas <mnavas@cordovacreations.com>\nFrom: Hugo Jones <hkjones@sunmail.com>\nDate: April 2\nSubject: Thank you\n\nDear Ms. Navas,\n\nI enjoyed speaking with you about the associate manager position last week, and as I mentioned, I am very excited about the possibility of working with you at Cordova Creations. I wanted to let you know that I have received a job offer from another company, and I have to respond to that hiring manager soon. I realize it has only been a few days since my interview, but if it is at all possible for you to update me on the status of my application before the end of the week, that would be very helpful. I have long admired Cordova Creations and would really like to be a part of it. I am hoping to hear positive news from you.\n\nThank you,\n\nHugo Jones`,
                        translation: `수신: 마달레나 나바스 <mnavas@cordovacreations.com>\n발신: 휴고 존스 <hkjones@sunmail.com>\n날짜: 4월 2일\n제목: 감사합니다\n\n나바스 씨께,\n\n지난주에 부매니저 자리에 대해 이야기하게 되어 즐거웠고, 말씀드린 대로 코르도바 크리에이션스에서 귀하와 함께 일할 수 있다는 가능성에 무척 흥분됩니다. 제가 다른 회사로부터 일자리 제안을 받았다는 점을 알려드리고자 하며, 그 채용 담당자에게 곧 답변을 해야 합니다. 면접을 본 지 불과 며칠밖에 지나지 않았다는 것을 알고 있지만 이번 주가 끝나기 전에 저의 지원 상황에 대해 조금이라도 알려주실 수 있다면 무척 도움이 될 것입니다. 저는 코르도바 크리에이션스를 오랫동안 동경해 왔고, 진심으로 일원이 되고 싶습니다. 귀하로부터 긍정적인 소식을 듣기를 바랍니다.\n\n감사합니다.\n\n휴고 존스`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What does Mr. Jones indicate in his e-mail?",
                        options: [
                            { label: "A", text: "He used to work with Ms. Navas." },
                            { label: "B", text: "He is an associate manager." },
                            { label: "C", text: "Another company wishes to hire him." },
                            { label: "D", text: "His interview has been scheduled for next week." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "존스 씨가 이메일에 명시한 것은?",
                        explanation: `두 번째 문장에서 존스 씨가 다른 회사로부터 일자리 제안을 받았다는 점을 알려드리고자 하며, 그 채용 담당자에게 곧 답변을 해야 한다(I wanted to let you know that I have received a job offer from another company, and I have to respond to that hiring manager soon)고 했으므로 (C)가 정답이다.`
                    },
                    {
                        id: "154",
                        text: "What does Mr. Jones want to know by the end of the week?",
                        options: [
                            { label: "A", text: "Whether an important decision has been made yet" },
                            { label: "B", text: "Whether Ms. Navas is available for a meeting" },
                            { label: "C", text: "Whether Ms. Navas would like to apply for a new position" },
                            { label: "D", text: "Whether the company will expand its product offerings" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "존스 씨가 주말까지 알고 싶어 하는 것은?",
                        explanation: `세 번째 문장에서 존스 씨가 면접을 본 지 불과 며칠밖에 지나지 않았다는 것을 알고 있지만 이번 주가 끝나기 전에 자신의 지원 상황에 대해 조금이라도 알려줄 수 있다면 무척 도움이 될 것이다(I realize ~ if it is at all possible for you to update me on the status of my application before the end of the week, that would be very helpful)라고 했다. 따라서 존스 씨는 주말까지 자신의 채용 여부가 결정되었는지 알고 싶어 하는 것이므로 (A)가 정답이다.`
                    }
                ]
            },
            // Questions 155-157: Article
            {
                id: "p7-t9-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t9-s5-p1",
                        type: "ARTICLE",
                        title: "Hibiscus Supply to Run Its Own Container Ship",
                        content: `BUSAN (15 October)—As international shipping continues to increase, companies that transport goods between countries have found themselves competing for expensive space on container ships. — [1] —. Delays in getting goods to factories and into stores have become more common. — [2] —.\n\nAs one of the largest importers of building supplies in the country, Hibiscus Supply is particularly vulnerable to these issues. — [3] —. To avoid potential shipping problems, Hibiscus Supply has decided to operate its own container ship to export products overseas. — [4] —.\n\nAccording to Hibiscus Supply president James Koh, operating the company's own ship should improve efficiency at ports and decrease overall shipping costs. Says Mr. Koh, "The cost to ship with freight companies has doubled in the past year. By shipping our products ourselves, we'll be able to avoid passing shipping-related price increases on to our customers."`,
                        translation: `히비스커스 서플라이, 자체 컨테이너선 운영\n\n부산 (10월 15일)—국제선 운항이 지속적으로 증가함에 따라 대륙 간 상품을 운송하는 기업들은 컨테이너선의 비싼 공간을 두고 경쟁을 벌이고 있다. — [1] —. 공장 및 상점으로의 상품 배송 지연은 더욱 흔한 일이 되었다. — [2] —.\n\n155 국내 최대 주택 건설용품 수입업체 중 하나로서 히비스커스 서플라이는 특히 이 문제에 취약하다. — [3] —. 발생 가능성이 있는 운송 문제를 피하기 위해, 157 히비스커스 서플라이는 제품을 해외로 수출하는 데 자체 컨테이너선을 운영하기로 결정했다. — [4] —.\n\n156 히비스커스 서플라이의 제임스 고 사장에 따르면, 회사 자체 선박을 운영하는 것은 항구에서의 효율성을 높이고 전반적인 운송 비용을 줄여 줄 것이다. "화물 업체를 이용한 운송 비용은 지난해 두 배가 되었습니다. 우리 제품을 직접 운송함으로써 고객들에게 운송과 관련된 가격 상승을 전가하는 일을 피할 수 있을 것입니다."라고 고 씨는 말한다.`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What products does Hibiscus Supply most likely sell?",
                        options: [
                            { label: "A", text: "Construction materials" },
                            { label: "B", text: "Pillows and sheets" },
                            { label: "C", text: "Wholesale food items" },
                            { label: "D", text: "Spare automobile parts" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "히비스커스 서플라이가 판매할 것 같은 제품은?",
                        explanation: `두 번째 단락의 첫 문장에서 국내 최대 주택 건설용품 수입업체 중 하나로서 히비스커스 서플라이는 특히 이 문제에 취약하다(As one of the biggest exporters of home building supplies in the country, Hibiscus Supply is ~ issues)고 했으므로 히비스커스 서플라이는 주택 건설용품을 취급하는 업체임을 알 수 있다. 따라서 (A)가 정답이다.`
                    },
                    {
                        id: "156",
                        text: "Why does Hibiscus Supply want to operate its own container ship?",
                        options: [
                            { label: "A", text: "To provide shipping services to other companies" },
                            { label: "B", text: "To ship its products quickly and cheaply" },
                            { label: "C", text: "To deliver its products to unusual locations" },
                            { label: "D", text: "To ship more goods than most freight companies can handle" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "히비스커스 서플라이가 자체 컨테이너선을 운영하고자 하는 이유는?",
                        explanation: `세 번째 단락의 첫 문장에서 히비스커스 서플라이의 제임스 고 사장에 따르면, 회사 자체 선박을 운영하는 것은 항구에서의 효율성을 높이고 전반적인 운송 비용을 줄여 줄 것(According to Hibiscus Supply ~ operating the company's own ship should improve efficiency at ports and decrease overall shipping costs)이라고 했다. 따라서 히비스커스 서플라이가 자체 선박을 운영하려는 이유는 효율적이고 저렴한 운송을 위한 것이므로 (B)가 정답이다.`
                    },
                    {
                        id: "157",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"The newly acquired ship is scheduled to begin running later this month.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                        explanation: `제시된 문장은 새로 인수한 선박이 이달 말부터 운항을 시작할 예정이다(The newly acquired ship is scheduled to begin running later this month)는 내용이므로, 히비스커스 서플라이가 제품을 해외로 수출하는 데 자체 컨테이너선을 운영하기로 결정했다(Hibiscus Supply has decided to operate its own container ship to export products overseas)는 내용 뒤인 (D)가 가장 적절하다.`
                    }
                ]
            },
            // Questions 158-160: Memo
            {
                id: "p7-t9-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t9-s6-p1",
                        type: "MEMO",
                        title: "MEMO",
                        content: `To: All Accounting Staff\nFrom: Jennifer Snow, Senior Manager\nDate: January 8\nSubject: Pedro Allende\n\nPlease join me in congratulating Pedro Allende as he prepares to enter his new role as full-time administrative assistant in our accounting department. Mr. Allende, a part-time clerk in our mail room, completed a certificate program in computer support at Lander Vocational Institute last month. He was first hired by our company as a delivery driver, a role he held for two years before transferring to the mail room.\n\nMr. Allende's first day in the accounting department will be Monday, January 11. We all wish him well!`,
                        translation: `회람\n\n수신: 모든 회계 직원\n발신: 제니퍼 스노, 선임 관리자\n날짜: 1월 8일\n제목: 페드로 아옌데\n\n158 페드로 아옌데가 우리 회계부에서 전임 행정 보조원으로서 새로운 역할을 맡기 위해 159 준비하고 있으니 저와 함께 축하해 주세요. 160 아옌데 씨는 우리 우편물실에서 근무하는 파트타임 직원으로 지난달 랜더 직업 훈련소에서 컴퓨터 지원 분야의 자격증 과정을 수료했습니다. 그는 처음에 우리 회사에 배달 기사로 채용되어 2년 동안 근무하다가 우편물실로 옮겼습니다.\n\n아옌데 씨가 회계부에서 근무하는 첫날은 1월 11일 월요일입니다. 우리 모두 그에게 행운을 빕니다!`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "Why did Ms. Snow send the memo?",
                        options: [
                            { label: "A", text: "To invite employees to an office party" },
                            { label: "B", text: "To announce a change to an employee's job" },
                            { label: "C", text: "To inform employees about a reduction in work hours" },
                            { label: "D", text: "To request employee feedback on a departmental policy" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "스노 씨가 회람을 보낸 이유는?",
                        explanation: `첫 문장에서 스노 씨가 페드로 아옌데가 회계부에서 전임 행정 보조원으로서 새로운 역할을 맡기 위해 준비하고 있으니 함께 축하해 달라(Please join me in congratulating Pedro Allende as he prepares to enter his new role as a full-time administrative assistant in our accounting department)고 한 것으로 보아 페드로 아옌데라는 직원의 업무가 바뀌는 것을 알리기 위해 회람을 보낸 것이므로 (B)가 정답이다.`
                    },
                    {
                        id: "159",
                        text: "The word \"prepares\" in paragraph 1, line 1, is closest in meaning to",
                        options: [
                            { label: "A", text: "assembles" },
                            { label: "B", text: "returns" },
                            { label: "C", text: "reaches out" },
                            { label: "D", text: "gets ready" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "첫 번째 단락 1행의 \"prepares\"와 의미가 가장 가까운 단어는?",
                        explanation: `의미상 새 역할을 맡기 위해 '준비하고 있다'라는 뜻으로 쓰였으므로 '준비하다'를 뜻하는 (D) gets ready가 정답이다.`
                    },
                    {
                        id: "160",
                        text: "What is indicated about Mr. Allende?",
                        options: [
                            { label: "A", text: "He currently works as a delivery driver." },
                            { label: "B", text: "He recently completed a training program." },
                            { label: "C", text: "He previously assisted Ms. Snow in a different department." },
                            { label: "D", text: "He will begin working part-time next week." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "아옌데 씨에 대해 명시된 것은?",
                        explanation: `첫 단락의 두 번째 문장에서 아옌데 씨는 우편물실에서 근무하는 파트타임 직원으로 지난달 랜더 직업 훈련소에서 컴퓨터 지원 분야의 자격증 과정을 수료했다(Mr. Allende, a part-time clerk in our mail room, completed a certificate program ~ last month)고 했으므로 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 161-163: Advertisement
            {
                id: "p7-t9-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t9-s7-p1",
                        type: "ADVERTISEMENT",
                        title: "Help Wanted: Machinist",
                        content: `Cainerley Corp. of Napier, New Zealand, has an opening for an experienced machinist to work in our 15,000-square-metre fabrication plant, which produces custom tools and machine parts for a variety of industries. Requirements for the position include:\n\n• Ability to collaborate with engineers to fabricate tools and machine parts\n• Familiarity with specialised equipment\n• Skill with doing precision work based on technical drawings\n• Comfort working with metal and various other materials, such as wood and plastics\n• Ability to work both independently and as part of a team\n\nTo apply, please send CV and two references to jobs@cainerleycorp.co.nz.`,
                        translation: `구인: 기계 기술자\n\n뉴질랜드 네이피어의 캐널리 사에 다양한 산업을 위한 맞춤형 공구 및 기계 부품을 생산하는 15,000평방미터 규모의 제조 공장에서 근무할 숙련된 기계 기술자를 위한 일자리가 있습니다. 이 직책에 필요한 요건은 다음과 같습니다:\n\n• 엔지니어와 협업하여 공구 및 기계 부품을 제작할 수 있는 능력\n• 전문 장비에 대한 숙지\n• 기술 도면에 근거해 정밀 작업을 수행하는 기술\n• 162 금속, 목재 및 플라스틱과 같은 다양한 재료를 편하게 다룰 수 있는 능력\n• 163 독립적으로도, 또는 팀의 일원으로서도 일할 수 있는 능력\n\n지원하려면 이력서와 두 장의 추천서를 jobs@cainerleycorp.co.nz로 보내세요.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What type of business placed the advertisement?",
                        options: [
                            { label: "A", text: "A land developer" },
                            { label: "B", text: "A car-repair shop" },
                            { label: "C", text: "A factory" },
                            { label: "D", text: "A hardware store" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "광고를 게재한 업체의 종류는?",
                        explanation: `첫 문장에서 뉴질랜드 네이피어의 캐널리 사에 다양한 산업을 위한 맞춤형 공구 및 기계 부품을 생산하는 15,000평방미터 규모의 제조 공장에서 근무할 숙련된 기계 기술자를 위한 일자리가 있다(Cainerley Corp. of Napier, New Zealand, has ~ fabrication plant, which produces custom tools and machine parts for a variety of industries)고 했다. 따라서 광고를 낸 캐널리 사는 공구 및 기계 부품을 생산하는 공장을 운영하는 업체임을 알 수 있으므로 (C)가 정답이다.`
                    },
                    {
                        id: "162",
                        text: "What material is NOT specified in the advertisement?",
                        options: [
                            { label: "A", text: "Metal" },
                            { label: "B", text: "Glass" },
                            { label: "C", text: "Wood" },
                            { label: "D", text: "Plastic" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "광고에 명시된 재료가 아닌 것은?",
                        explanation: `직책에 필요한 네 번째 요건에서 금속, 목재 및 플라스틱과 같은 다양한 재료를 편하게 다룰 수 있는 능력(Comfort working with metal and various other materials, such as wood and plastics)을 명시하고 있고, 유리는 언급된 적이 없으므로 (B)가 정답이다.`
                    },
                    {
                        id: "163",
                        text: "What is listed as a requirement for the job?",
                        options: [
                            { label: "A", text: "Training in business-to-business sales" },
                            { label: "B", text: "A university degree in engineering" },
                            { label: "C", text: "Experience creating technical drawings" },
                            { label: "D", text: "The ability to work alone and with others" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "직무에 필요한 요건으로 나열된 것은?",
                        explanation: `직책에 필요한 다섯 번째 요건에서 독립적으로도, 또는 팀의 일원으로 서도 일할 수 있는 능력(Ability to work both independently and as part of a team)을 언급하고 있으므로 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 164-167: Online Chat
            {
                id: "p7-t9-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t9-s8-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Lanie McGinnis [7:16 A.M.]\nGood morning, Kelly and Matthieu. I removed the Funfair promotional signs from the park entrances, but I think I forgot one at the north gate. Could one of you check to see if it is still there?\n\nKelly Sen [7:18 A.M.]\nHi Lanie. I might not be able to get there earlier this morning to help put pamphlets and other materials on the welcome table in the main tent. But I could head over to that entrance now since there are other volunteers here who are filling up.\n\nLanie McGinnis [7:19 A.M.]\nThat would be great, since I'm going to be on the other side of the park at the south entrance for a while. I'm meeting some representatives from the city parks department.\n\nMatthieu Herman [7:21 A.M.]\nI've got it, Kelly. I just arrived at the north entrance and will take down the sign we hung here. Lanie, what would you like me to do with it?\n\nLanie McGinnis [7:22 A.M.]\nPerfect! Can you put it with the others behind the welcome table in the main tent? I will pick them up later today. We can change the dates and use them again next year.\n\nMatthieu Herman [7:23 A.M.]\nWill do. Here's to a successful fair!`,
                        translation: `래니 맥기니스 [오전 7:16] 좋은 아침입니다, 켈리 그리고 마티유. 164, 166 제가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같아요. 166 두 분 중에 한 분이 혹시 그게 아직 거기 있는지 확인해 주실 수 있을까요?\n\n켈리 센 [오전 7:18] 안녕하세요, 래니. 164, 165 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔어요. 그런데 여기는 일을 마무리할 수 있는 다른 자원봉사자들이 있어서 제가 지금 그쪽 입구로 갈 수 있어요.\n\n래니 맥기니스 [오전 7:19] 그러면 좋겠네요. 저는 당분간 공원 반대편에 있는 남쪽 입구에 있을 거라서요. 도시 공원 부서의 담당자들을 만날 예정이에요.\n\n마티유 허먼 [오전 7:21] 제가 할게요, 켈리. 166 방금 북쪽 입구에 도착했으니 여기 걸어 둔 표지판을 내릴게요. 래니, 167 이걸 어떻게 하면 좋을까요?\n\n래니 맥기니스 [오전 7:22] 완벽하네요! 167 메인 텐트에 있는 환영 테이블 뒤에 다른 것들과 함께 두실 수 있을까요? 오늘 중으로 가지러 갈게요. 날짜를 바꿔서 내년에 다시 사용할 수 있어요.\n\n마티유 허먼 [오전 7:23] 그럴게요. 164 성공적인 박람회를 위하여!`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is probably true about the writers?",
                        options: [
                            { label: "A", text: "They are registering people for a bike-to-work program." },
                            { label: "B", text: "They are coordinating a public event." },
                            { label: "C", text: "They work for a city parks department." },
                            { label: "D", text: "They are members of a club that walks in a park." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "메시지 작성자들에 대해 사실일 것 같은 것은?",
                        explanation: `7시 16분에 맥기니스 씨가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같다(removed the Funfair preregistration signs from the park entrances ~ the north gate)고 했고, 7시 18분에 센 씨가 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔다(rode my bike to the park ~ to help put pamphlets and other materials on the welcome table in the main tent)고 했으며, 7시 23분에 허먼 씨가 성공적인 박람회를 위하여(Here's to a successful fair)라고 했다. 따라서 메시지 작성자들은 공원에서 열리는 펀페어라는 박람회를 준비하고 있다는 것을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "165",
                        text: "What was Ms. Sen doing?",
                        options: [
                            { label: "A", text: "Erecting a tent" },
                            { label: "B", text: "Designing pamphlets" },
                            { label: "C", text: "Placing items on the welcome table" },
                            { label: "D", text: "Attaching signs to the park entrance" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "센 씨가 하고 있던 일은?",
                        explanation: `7시 18분에 센 씨가 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔다(rode my bike to the park ~ to help put pamphlets and other materials on the welcome table in the main tent)고 했으므로 (C)가 정답이다.`
                    },
                    {
                        id: "166",
                        text: "At 7:21 A.M., what does Mr. Herman mean when he writes, \"I've got it, Kelly\"?",
                        options: [
                            { label: "A", text: "He has already taken down a sign." },
                            { label: "B", text: "He will perform a task requested by Ms. McGinnis." },
                            { label: "C", text: "He will return unused materials to the office." },
                            { label: "D", text: "He realizes that Ms. Sen does not need help." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 7시 21분에 허먼 씨가 \"제가 할게요, 켈리\"라고 쓴 의도는?",
                        explanation: `7시 16분에 맥기니스 씨가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같다(removed the Funfair preregistration signs ~ I forgot one at the north gate)며 두 사람 중에 한 사람이 혹시 표지판이 아직 거기 있는지 확인해 줄 수 있을지(Could one of you check to see if it is still there?)를 물었고, 7시 21분에 허먼 씨가 "제가 할게요, 켈리(I've got it, Kelly)"라면서 방금 북쪽 입구에 도착했으니 여기 걸어 둔 표지판을 내리겠다(I just arrived at the north entrance and will take down the sign we hung here)고 했다. 따라서 허먼 씨는 맥기니스 씨가 북문에 있는 표지판이 아직 붙어 있는지 확인해 달라고 한 요청을 수행하겠다는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "167",
                        text: "What does Ms. McGinnis instruct Mr. Herman to do?",
                        options: [
                            { label: "A", text: "Help her locate the main tent" },
                            { label: "B", text: "Meet her at the south entrance" },
                            { label: "C", text: "Write down the participants' information" },
                            { label: "D", text: "Leave an object behind the welcome table" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "맥기니스 씨가 허먼 씨에게 하라고 지시한 것은?",
                        explanation: `7시 21분에 허먼 씨가 맥기니스 씨에게 이걸 어떻게 하면 좋을지(what would you like me to do with it?)를 묻자, 7시 22분에 맥기니스 씨가 메인 텐트에 있는 환영 테이블 뒤에 다른 것들과 함께 둘 수 있는지(Can you put it ~ behind the welcome table in the main tent?) 요청하고 있으므로 (D)가 정답이다.`
                    }
                ]
            },
            // Questions 168-171: Fact Sheet
            {
                id: "p7-t9-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t9-s9-p1",
                        type: "ARTICLE",
                        title: "Zealandia Airlines Fact Sheet for Fiscal Year Ending 30 June",
                        content: `Service Levels and Capacity: Zealandia Airlines provides regional service among four cities. In each case, average flight capacity exceeded the company goal of 85 percent.\n\nOn-Time Performance (OTP): For the purpose of measuring OTP, flights are considered "on time" when they reach their destination within fifteen minutes of the scheduled arrival time. Regional airlines are subject to fines when OTP drops below 50 percent. The following chart shows Zealandia's commendable OTP rates for the recent fiscal year.\n\nCity | OTP\nKelton Falls | 52%\nGrangerton | 68%\nSatcherville | 79%\nBarbour City | 64%\n\nProposed Expansion: Zealandia Airlines provides regional passenger air service and is seeking to expand its fleet to begin providing commercial airfreight delivery. Establishing this service is a component of a five-year growth plan and corporate vision. The airline is currently in negotiations with aviation authorities to explore options.\n\nTerminal and Service Improvements: Zealandia Airlines is participating in discussions with airport management about comprehensive renovations to its passenger lounge and café and has offered to commit $5 million from its budget to the project. Company executives have also finalized a plan and committed funds to overhaul its rewards program. The initiative supports the aim to be a leading service provider among similar airlines and capture an increasing percentage of the market share.`,
                        translation: `6월 30일 종료되는 회계 연도의 질랜디아 항공 보고서\n\n서비스 수준 및 수용력: 질랜디아 항공은 4개 도시 간 지역 서비스를 제공합니다. 각 경우, 평균 항공 수용량이 회사 목표인 85퍼센트를 168 넘었습니다.\n\n169 정시 실적(OTP): 정시 실적을 측정하기 위해 항공편이 예정된 도착 시간으로부터 15분 이내에 목적지에 도착하면 "정시에 온" 것으로 간주합니다. 지역 항공사는 OTP가 50퍼센트 미만으로 떨어질 경우 벌금이 부과됩니다. 169 다음 차트는 최근 회계 연도에 있어 질랜디아의 칭찬받을 만한 OTP율을 보여줍니다.\n\n도시 | OTP\n켈턴폴스 | 52퍼센트\n그랜저턴 | 68퍼센트\n새처빌 | 79퍼센트\n바버시티 | 64퍼센트\n\n확장 제안: 170 질랜디아 항공은 지역 승객들에게 항공 서비스를 제공하며, 상업용 항공 화물 배송을 시작하기 위해 항공기 보유 대수를 늘리고자 합니다. 이 서비스를 구축하는 일은 항공사의 성장 계획 및 기업 비전의 한 요소입니다. 항공사는 현재 관계 당국과 옵션을 모색하기 위해 협상 중입니다.\n\n터미널 및 서비스 개선: 171 질랜디아 항공은 공항 경영진과 승객 라운지 및 카페의 종합적인 개조와 관련한 논의에 참여 중이며, 예산 중에서 500만 달러를 프로젝트에 투입하겠다고 제안했습니다. 회사 경영진은 또한 계획을 마무리 짓고 보상 프로그램을 개편하기 위한 자금을 투입했습니다. 이 계획은 유사한 항공사들 사이에서 선도적인 서비스 제공 업체가 되고 시장 점유율을 높이고자 하는 목표를 지원합니다.`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "The word \"exceeded\" in paragraph 1, line 2, is closest in meaning to",
                        options: [
                            { label: "A", text: "surpassed" },
                            { label: "B", text: "excelled" },
                            { label: "C", text: "perfected" },
                            { label: "D", text: "decided" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_VOCABULARY",
                        translation: "첫 번째 단락 2행의 \"exceeded\"와 의미가 가장 가까운 단어는?",
                        explanation: `의미상 회사 목표인 85퍼센트를 '넘어섰다'는 뜻으로 쓰였으므로 '(범위·한계점 등을) 넘었다, 초월했다'라는 뜻의 (A) surpassed가 정답이다.`
                    },
                    {
                        id: "169",
                        text: "According to the fact sheet, what is true about Zealandia Airlines?",
                        options: [
                            { label: "A", text: "Executives aim to improve its flight capacity." },
                            { label: "B", text: "Most of its flights arrive at their destinations on time." },
                            { label: "C", text: "It is larger than 85 percent of regional airlines." },
                            { label: "D", text: "It has received a fine from aviation authorities." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "보고서에 따르면, 질랜디아 항공에 대해 사실인 것은?",
                        explanation: `두 번째 단락의 첫 문장에서 정시 실적(OTP)(On-Time Performance)을 설명하며, 정시 실적을 측정하기 위해 항공편이 예정된 도착 시간으로부터 15분 이내에 목적지에 도착하면 '정시에 온' 것으로 간주한다(For the purpose of measuring OTP, flights are considered "on time" when they reach their destination ~ scheduled arrival time)고 했다. 세 번째 문장에서 다음 차트는 최근 회계 연도에 있어 질랜디아의 칭찬받을 만한 OTP율을 보여준다(The following chart shows Zealandia's commendable OTP rates for the recent fiscal year)고 했으며, 차트에 따르면 도시별 OTP가 52퍼센트, 68퍼센트, 79퍼센트, 64퍼센트로 모두 50퍼센트를 넘었음을 알 수 있다. 따라서 질랜디아 항공은 대부분의 항공편이 정시에 목적지에 도착하고 있다는 것을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "170",
                        text: "What does Zealandia Airlines want to provide in the future?",
                        options: [
                            { label: "A", text: "Private charter flights" },
                            { label: "B", text: "Luxury travel tours" },
                            { label: "C", text: "Commercial shipping" },
                            { label: "D", text: "Aircraft leasing" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "질랜디아 항공이 향후 제공하기를 원하는 것은?",
                        explanation: `세 번째 단락의 첫 문장에서 질랜디아 항공은 지역 승객들에게 항공 서비스를 제공하며 상업용 항공 화물 배송을 시작하기 위해 항공기 보유 대수를 늘리고자 한다(Zealandia Airlines provides ~ is seeking to expand its fleet to begin providing commercial airfreight delivery)고 했으므로 앞으로 상업용 운송 서비스를 제공할 계획임을 알 수 있다. 따라서 (C)가 정답이다.`
                    },
                    {
                        id: "171",
                        text: "How does Zealandia Airlines hope to improve service for passengers?",
                        options: [
                            { label: "A", text: "By remodeling the passenger waiting area" },
                            { label: "B", text: "By moving to a new location within the terminal" },
                            { label: "C", text: "By upgrading the seating inside the aircraft" },
                            { label: "D", text: "By offering improved meal service on all flights" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "질랜디아 항공은 승객을 위한 서비스를 어떻게 개선하기를 바라는가?",
                        explanation: `네 번째 단락의 첫 문장에서 질랜디아 항공은 공항 경영진과 승객 라운지 및 카페의 종합적인 개조와 관련한 논의에 참여 중이며, 예산 중에서 500만 달러를 프로젝트에 투입하겠다고 제안했다(Zealandia Airlines is participating in discussions with airport management about comprehensive renovations to its passenger lounge and café ~ budget to the project)고 했다. 따라서 승객 라운지 및 카페, 즉 승객 대기 장소를 개조하여 서비스를 개선할 계획임을 알 수 있으므로 (A)가 정답이다.`
                    }
                ]
            },
            // Questions 172-175: Press Release
            {
                id: "p7-t9-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t9-s10-p1",
                        type: "ARTICLE",
                        title: "New Fleet for Northeast Railways",
                        content: `Northeast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains, many of which are more than 40 years old. — [1] —.\n\nThe company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times. — [2] —. The trains will be capable of traveling at speeds of up to 130 kilometers per hour and will produce far less pollution than the current fleet does.\n\nLogiens also promises an enhanced passenger experience. The train cars will have panoramic windows, improved ventilation, and wider aisles. — [3] —.\n\nNortheast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement. — [4] —.`,
                        translation: `동북 철도의 새로운 열차\n\n173 동북 철도는 65대의 여객 열차를 교체하는 데 56억 달러를 지출할 것으로 예상하고 있으며, 이 열차 중 다수는 40년 이상 되었습니다. — [1] —.\n\n172, 174 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었으며, 이 열차는 전동 선로 시스템을 이용할 수 있을 때는 그 위에서 운행하고 그 외에는 경유로 운행할 예정입니다. — [2] —. 이 열차들은 최대 시속 130킬로미터의 속도로 운행할 수 있으며 현재 열차보다 훨씬 적은 공해를 배출할 것입니다.\n\n로지언스는 또한 향상된 승객 경험을 약속합니다. 175 열차는 파노라마 창, 개선된 환기구, 그리고 더 넓은 통로를 갖출 것입니다. — [3] —.\n\n또한 172 동북 철도와 로지언스의 계약에는 장비 및 교체 부품이 포함되며 장기 정비 서비스 계약을 제공합니다. — [4] —.`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is Logiens Transport's role?",
                        options: [
                            { label: "A", text: "To recommend ways to reduce pollution" },
                            { label: "B", text: "To acquire financing for a purchase" },
                            { label: "C", text: "To familiarize train engineers with new technology" },
                            { label: "D", text: "To manufacture and service the replacement fleet" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "로지언스 운송의 역할은?",
                        explanation: `두 번째 단락의 첫 문장에서 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었다(The company has entered into a contract with Logiens Transport for a new fleet of trains)고 했고, 마지막 단락에서 동북 철도와 로지언스의 계약에는 장비 및 교체 부품이 포함되며 장기 정비 서비스 계약을 제공한다(Northeast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement)고 했다. 따라서 로지언스 운송은 열차를 생산하고 사후 관리 서비스까지 제공하는 업체라는 것을 알 수 있으므로 (D)가 정답이다.`
                    },
                    {
                        id: "173",
                        text: "What information is included in the press release?",
                        options: [
                            { label: "A", text: "The date on which the trains will be delivered" },
                            { label: "B", text: "The budget for replacing the current trains" },
                            { label: "C", text: "The annual cost for parts and service" },
                            { label: "D", text: "The number of passenger seats in each train car" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "보도 자료에 포함된 내용은?",
                        explanation: `첫 문장에서 동북 철도는 65대의 여객 열차를 교체하는 데 56억 달러를 지출할 것으로 예상하고 있다(Northeast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains)고 했으므로 (B)가 정답이다.`
                    },
                    {
                        id: "174",
                        text: "What is suggested about the tracks that Northeast Railways uses?",
                        options: [
                            { label: "A", text: "They are owned by the government." },
                            { label: "B", text: "They are not shared with freight trains." },
                            { label: "C", text: "Most are in urgent need of repair." },
                            { label: "D", text: "Some are not electrified." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "동북 철도가 이용하는 선로에 대해 암시된 것은?",
                        explanation: `두 번째 단락의 첫 문장에서 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었으며, 이 열차는 전동 선로 시스템을 이용할 수 있을 때는 그 위에서 운행하고 그 외에는 경유로 운행할 예정(The company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times)이라고 한 것으로 보아 동북 철도가 이용하는 선로 중 일부는 아직 전동 주행이 불가능하다는 것을 알 수 있으므로 (D)가 정답이다.`
                    },
                    {
                        id: "175",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Each reclinable seat will have an individual power outlet and a USB port.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                        explanation: `주어진 문장에서 리클라인 좌석(Each reclinable seat)에는 개별 전원 공급 장치 및 USB 포트가 있을 것이라고 특정 품목에 갖추어질 편의성을 설명하고 있다. 따라서 이 문장은 파노라마 창, 개선된 환기구, 더 넓은 통로(panoramic windows, improved ventilation, and wider aisles) 등 새로운 열차에 포함될 승객 편의 시설을 열거한 문장 뒤에 연결하면 자연스러우므로 (C)가 정답이다.`
                    }
                ]
            },
        ]
    },
    {
        testId: 10,
        title: "Test 10",
        sets: [
            // Questions 147-148: Sign
            {
                id: "p7-t10-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t10-s1-p1",
                        type: "NOTICE",
                        title: "Galloway Office Park",
                        content: `Building 1\nHarris Toddman, MD\nLansin Diagnostic Labs\nSmiley Dental Offices\n\nBuilding 2\nFreel Primary Care Physicians\nRally Star Physical Therapy Associates\n\nBuilding 3\nLee and Associates, Internists\nKare Medical Services\n\nBuilding 4\nLurie Pharmaceuticals\n\nNo Truck Access\nNo Soliciting\nNo Trespassing`,
                        translation: `갤러웨이 오피스 파크\n\n1동\n해리스 토드먼, 의학박사\n랜신 진단 연구소\n스마일리 치과\n\n2동\n프릴 일차 진료의\n랠리 스타 물리 치료 연합\n\n3동\n리 앤 어소시에이츠, 내과 전문의\n케어 의료 서비스\n\n4동\n루리 제약\n\n트럭 출입 금지\n잡상인 출입 금지\n무단 침입 금지`
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "Where would the sign most likely be found?",
                        options: [
                            { label: "A", text: "On an office desk" },
                            { label: "B", text: "In a hospital waiting room" },
                            { label: "C", text: "In the lobby of a real estate agency" },
                            { label: "D", text: "Near the entrance of an office complex" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "표지판이 있을 가능성이 높은 곳은?",
                        explanation: `표지판 상단에 'Galloway Office Park'라는 명칭과 함께 각 건물(Building 1~4)에 입주해 있는 업체들이 나열되어 있고, 하단에는 출입 금지 안내문이 적혀 있는 것으로 보아 사무 단지 입구 근처에서 볼 수 있는 안내판임을 알 수 있다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "148",
                        text: "What type of businesses are listed on the sign?",
                        options: [
                            { label: "A", text: "Health care" },
                            { label: "B", text: "Legal services" },
                            { label: "C", text: "Manufacturing" },
                            { label: "D", text: "Finance" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "표지판에 나열된 사업체의 유형은?",
                        explanation: `의사(MD), 진단 연구소(Diagnostic Labs), 치과(Dental Offices), 일차 진료의(Primary Care Physicians), 물리 치료(Physical Therapy), 내과 전문의(Internists), 의료 서비스(Medical Services), 제약(Pharmaceuticals) 등이 나열되어 있으므로 의료 관련 서비스 업체들을 설명하고 있다. 따라서 (A)가 정답이다.`
                    }
                ]
            },
            // Questions 149-150: Online Chat
            {
                id: "p7-t10-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t10-s2-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Darion Gaines [11:16 A.M.]\nSonia, the sink in the third-floor break room is clogged.\n\nSonia Pinkerton [11:20 A.M.]\nAgain? That's the second time this month.\n\nDarion Gaines [11:22 A.M.]\nOne of our sales associates got it unclogged last time, but maybe we should call a professional this time. Should I contact Mr. Green and let him know?\n\nSonia Pinkerton [11:23 A.M.]\nThe office manager? I think it might be best to call the head of maintenance, Tammy Toska. She can probably get someone out to fix it pretty quickly.\n\nDarion Gaines [11:24 A.M.]\nOK. I could reach out to her.\n\nSonia Pinkerton [11:25 A.M.]\nGo ahead. In the meantime, I'll put up a notice to let everyone know they should not use that sink.`,
                        translation: `대리언 게인스 [오전 11:16] 소니아, 3층 휴게실에 있는 싱크대가 막혔어요.\n\n소니아 핑커턴 [오전 11:20] 또요? 이번 달에만 두 번째네요.\n\n대리언 게인스 [오전 11:22] 지난번에는 우리 영업 직원 중 한 명이 뚫었지만, 이번에는 전문가를 부르는 게 좋을 것 같아요. 그린 씨에게 연락해서 알려야 할까요?\n\n소니아 핑커턴 [오전 11:23] 149 사무실 관리자요? 제 생각에는 정비팀 정인 태미 토스카에게 연락하는 게 가장 좋을 것 같아요. 그녀라면 아마 수리할 사람을 꽤 빨리 보내 줄 수 있을 거예요.\n\n대리언 게인스 [오전 11:24] 알겠어요. 제가 그녀에게 연락해 볼게요.\n\n소니아 핑커턴 [오전 11:25] 150 그렇게 하세요. 그러는 동안 저는 모두에게 싱크대를 사용하지 말라는 안내문을 붙일게요.`
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "Who most likely is Mr. Green?",
                        options: [
                            { label: "A", text: "A custodian" },
                            { label: "B", text: "A plumber" },
                            { label: "C", text: "A manager" },
                            { label: "D", text: "A sales associate" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "그린 씨는 누구일 것 같은가?",
                        explanation: `네 번째 메시지에서 핑커턴 씨가 사무실 관리자(The office manager?)라고 했으므로 그린 씨는 관리자임을 알 수 있다. 따라서 (C)가 정답이다.`
                    },
                    {
                        id: "150",
                        text: "At 11:25 A.M., what does Ms. Pinkerton most likely mean when she writes, \"Go ahead\"?",
                        options: [
                            { label: "A", text: "Mr. Gaines may enter the break room." },
                            { label: "B", text: "Mr. Gaines should contact Ms. Toska." },
                            { label: "C", text: "Mr. Gaines should post a notice." },
                            { label: "D", text: "Mr. Gaines can try to repair the sink." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 11시 25분에 핑커턴 씨가 \"그렇게 하세요(Go ahead)\"라고 쓴 의도는?",
                        explanation: `11시 24분에 게인스 씨가 정비팀장인 토스카 씨에게 연락해 보겠다(I could reach out to her)고 하자, 11시 25분에 핑커턴 씨가 "그렇게 하세요(Go ahead)"라고 했으므로, 게인스 씨가 토스카 씨에게 연락하도록 한 것임을 알 수 있다. 따라서 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 151-152: E-mail
            {
                id: "p7-t10-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t10-s3-p1",
                        type: "EMAIL",
                        title: "EMAIL",
                        content: `To: Ramdeo Khemradj <rkhemradj@topofthehill.jm>\nFrom: Kerensa Mayne <kmayne@topofthehill.jm>\nDate: 17 August\nSubject: Information\nAttachment: Latest draft\n\nHi, Ramdeo,\n\nPlease take a look at the latest draft and let me know what you think. I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes that you and your kitchen staff will be introducing next month.\n\nI haven't updated the prices yet though, as I haven't decided whether we will need to increase some of them.\n\nI'm sure you agree with me that the design firm did a great job upgrading the kitchen and making the dining room brighter and more inviting.\n\nKerensa`,
                        translation: `수신: 람데오 켐라지\n발신: 케렌사 메인\n날짜: 8월 17일\n제목: 정보\n첨부: 최근 초안\n\n안녕하세요, 람데오 씨,\n\n152 최근 초안을 살펴보시고 의견을 알려 주세요. 152 제가 레이아웃을 변경해서 이제 디저트는 안쪽 뒤 표지에 있으며, 151 귀하와 귀하의 주방 직원들이 다음 달에 새로 선보일 추가 저녁 요리에 대한 설명을 넣었습니다.\n\n가격은 아직 업데이트하지 않았는데, 일부 품목의 가격을 인상해야 할지 아직 결정하지 못했기 때문입니다.\n\n디자인 업체가 주방을 개선하고 식당을 더 밝고 매력적으로 만드는 일을 아주 훌륭하게 해냈다는 제 의견에 귀하도 동의하실 거라 확신합니다.\n\n케렌사`
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "Who most likely is Mr. Khemradj?",
                        options: [
                            { label: "A", text: "An interior decorator" },
                            { label: "B", text: "A restaurant owner" },
                            { label: "C", text: "An architect" },
                            { label: "D", text: "A head chef" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "켐라지 씨는 누구일 것 같은가?",
                        explanation: `첫 번째 단락에서 메인 씨가 켐라지 씨에게 귀하와 귀하의 주방 직원들이 다음 달에 새로 선보일 저녁 요리(the additional dinner dishes that you and your kitchen staff will be introducing next month)라고 언급한 것으로 보아 켐라지 씨는 주방의 책임자인 주방장임을 알 수 있다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "152",
                        text: "What most likely is attached to the e-mail?",
                        options: [
                            { label: "A", text: "A price list" },
                            { label: "B", text: "A revised menu" },
                            { label: "C", text: "A photograph of food" },
                            { label: "D", text: "A lighting plan for a dining room" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "이메일에 첨부되었을 가능성이 높은 것은?",
                        explanation: `첫 번째 단락에서 최근 초안(the latest draft)을 보라고 하며 레이아웃을 변경해 디저트를 안쪽 뒤 표지에 넣었고 저녁 요리들에 대한 설명을 추가했다(I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes)고 했으므로 첨부된 초안은 수정된 메뉴판임을 알 수 있다. 따라서 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 153-154: Application Form
            {
                id: "p7-t10-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t10-s4-p1",
                        type: "FORM",
                        title: "Page Turner Booksellers\nEmployment Application Form",
                        content: `Date of Application: 1 September\n\nPERSONAL DATA\nName: Arturo Rami | Address: 10 Beamish Street, Werribee, VIC 3030\nE-mail: arturo.rami@amail.com.au | Telephone: 03 9555 3744\n\nEMPLOYMENT DESIRED\nDesired position | Assistant Store Manager\nAvailable start date | 20 September\nPreferred location | ☐ Seaholme  ☑ Werribee  ☐ Port Melbourne\nPreferred status | ☑ Full-time  ☐ Part-time  ☐ Temporary\n\nEDUCATION\nEducational Institution | Diploma/Certificate/Degree Earned\nSouth Bank High School | High school diploma\n154 Dymocks University | Bachelor's degree\n\nEMPLOYMENT HISTORY\nEmployer | Position | Duration\n154 The Garment Barn | Sales associate | 2 years\nAliona Marketing | Assistant manager | 3 years\n\nEXPLANATION OF INTEREST IN THE POSITION\n154 I flourish in a fast-paced and demanding work environment, which my most recent employers are known for. I expect the same is true of Page Turner Booksellers, which tends to be quite busy. Moreover, with my bachelor's degree in retail management, I believe I am well suited for the position.`,
                        translation: `페이지 터너 서점\n채용 지원서\n\n지원 날짜: 9월 1일\n\n개인 정보\n성명: 아르투로 라미 | 주소: 10 Beamish Street, Werribee, VIC 3030\n이메일: arturo.rami@amail.com.au | 전화: 03 9555 3744\n\n희망 직종\n희망 직책 | 매장 부매니저\n근무 가능 시작일 | 9월 20일\n153 희망 근무지 | ☐ 시홀름 ☑ 워리비 ☐ 포트 멜버른\n희망 근무 형태 | ☑ 전임제 ☐ 시간제 ☐ 임시직\n\n학력\n교육 기관 | 취득 수료증/자격증/학위\n사우스 뱅크 고등학교 | 고등학교 졸업장\n154 다이목스 대학교 | 학사 학위\n\n직장 경력\n고용주 | 직책 | 기간\n154 더 가먼트 바안 | 영업 사원 | 2년\n알리오나 마케팅 | 부매니저 | 3년\n\n지원 동기\n154 저는 제 최근 고용주들이 그랬던 것처럼 빠르게 돌아가고 업무량이 많은 근무 환경에서 능력을 잘 발휘합니다. 꽤 바쁜 편인 페이지 터너 서점 또한 그럴 것이라 생각합니다. 또한, 소매 관리 전공 학사 학위가 있으므로 제가 이 직책에 아주 적합하다고 믿습니다.`
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is suggested about Page Turner Booksellers?",
                        options: [
                            { label: "A", text: "It has multiple locations." },
                            { label: "B", text: "It is near South Bank High School." },
                            { label: "C", text: "It will open a new store on September 20." },
                            { label: "D", text: "It currently has only full-time positions available." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "페이지 터너 서점에 대해 알 수 있는 것은?",
                        explanation: `지원서의 희망 근무지(Preferred location) 항목에 시홀름(Seaholme), 워리비(Werribee), 포트 멜버른(Port Melbourne) 등 세 곳의 지점이 언급되어 있는 것으로 보아 페이지 터너 서점은 여러 곳에 매장을 두고 있음을 알 수 있다. 따라서 (A)가 정답이다.`
                    },
                    {
                        id: "154",
                        text: "What is NOT indicated about Mr. Rami?",
                        options: [
                            { label: "A", text: "He studied retail management." },
                            { label: "B", text: "He recently moved to Werribee." },
                            { label: "C", text: "He has experience working in sales." },
                            { label: "D", text: "He prefers working in a busy setting." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "라미 씨에 대해 언급되지 않은 것은?",
                        explanation: `라미 씨가 소매 관리를 전공했다(with my bachelor's degree in retail management)는 내용은 (A)에 해당하고, 영업 사원으로 근무한 경력(The Garment Barn / Sales associate / 2 years)이 있다는 내용은 (C)에 해당하며, 업무량이 많아 바쁜 환경을 선호한다(I flourish in a fast-paced ~ quite busy)는 내용은 (D)에 해당한다. 워리비에 거주하고 있다는 주소 정보는 있으나 최근에 그곳으로 이사했다는 내용은 없으므로 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 155-157: Advertisement
            {
                id: "p7-t10-set5",
                questionRange: "155-157",
                passages: [
                    {
                        id: "p7-t10-s5-p1",
                        type: "ADVERTISEMENT",
                        title: "Donovan Auto Lube",
                        content: `Donovan Auto Lube (DAL) is the first choice for residents of Knebworth who want to keep their cars running smoothly. We provide oil changes, tyre rotations, and routine inspections. Our team of certified auto technicians can service all vehicle makes and models. Customers may schedule an appointment or simply drive up to any DAL location during our business hours of 8:00 A.M. to 6:00 P.M., Monday through Saturday, and 11:00 A.M. to 5:00 P.M. on Sunday.\n\nThis summer, DAL offers a special promotion: a 5-quart oil change, oil filter replacement, and comprehensive maintenance check for just £15. This offer is available at all DAL locations throughout Hertfordshire. It may not be combined with any other promotional offer. The quoted price does not include value-added tax and does not cover any additional maintenance, repairs, and parts that a vehicle inspection may call for.\n\nVisit DAL for all your automotive needs.`,
                        translation: `도노반 자동차 윤활유 서비스\n\n도노반 자동차 윤활유 서비스(DAL)는 차가 문제없이 155 잘 굴러가기를 바라는 넵스워스 주민들이 가장 먼저 선택하는 곳입니다. 저희는 오일 교환, 타이어 위치 교환, 그리고 정기 점검 서비스를 제공합니다. 공인 자동차 기술자들로 구성된 저희 팀은 모든 종류와 모델의 차량을 정비할 수 있습니다. 156 고객들은 예약을 하거나 혹은 월요일부터 토요일까지는 오전 8시부터 오후 6시까지, 일요일에는 오전 11시부터 오후 5시까지 영업 시간 동안 어느 지점이든 방문하시면 됩니다.\n\n이번 여름에 DAL에서는 특별 프로모션을 제공합니다. 5쿼트 오일 교환, 157 오일 필터 교체, 그리고 종합 정비 점검 서비스를 단 15파운드에 제공합니다. 이 혜택은 하트퍼드셔 전역의 모든 DAL 지점 이용이 가능합니다. 다른 프로모션 혜택과 중복해서 사용할 수 없습니다. 제시된 가격에는 부가가치세가 포함되어 있지 않으며, 차량 점검 시 필요한 추가 정비, 수리 및 부품 비용은 별도입니다.\n\n자동차와 관련된 모든 것이 필요할 땐 DAL을 방문하세요.`
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "The word \"running\" in paragraph 1, line 2, is closest in meaning to",
                        options: [
                            { label: "A", text: "flowing" },
                            { label: "B", text: "speeding" },
                            { label: "C", text: "controlling" },
                            { label: "D", text: "functioning" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "첫 번째 단락 2행의 \"running\"과 의미가 가장 가까운 것은?",
                        explanation: `의미상 차가 문제없이 '굴러간다(작동한다)'는 뜻으로 쓰였으므로 '(기계 등이) 작동하다'라는 뜻의 (D) functioning이 정답이다.`
                    },
                    {
                        id: "156",
                        text: "When can a customer NOT be served at Donovan Auto Lube?",
                        options: [
                            { label: "A", text: "On Monday at 8:00 A.M." },
                            { label: "B", text: "On Wednesday at 6:00 P.M." },
                            { label: "C", text: "On Saturday at 4:00 P.M." },
                            { label: "D", text: "On Sunday at 6:00 P.M." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "도노반 자동차 윤활유 서비스 지점에서 서비스를 받을 수 없는 시간은?",
                        explanation: `첫 번째 단락의 마지막 문장에서 일요일 영업 시간은 오전 11시부터 오후 5시까지(11:00 A.M. to 5:00 P.M. on Sunday)라고 했으므로 일요일 오후 6시에는 서비스를 받을 수 없다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "157",
                        text: "What is true about the promotional offer?",
                        options: [
                            { label: "A", text: "It is not valid outside of Knebworth." },
                            { label: "B", text: "It includes replacement of a filter." },
                            { label: "C", text: "It does not apply to a maintenance check." },
                            { label: "D", text: "It includes all taxes." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "프로모션 혜택에 대해 사실인 것은?",
                        explanation: `두 번째 단락의 첫 문장에서 특별 프로모션은 오일 교환, 오일 필터 교체, 종합 정비 점검을 포함한다(a 5-quart oil change, oil filter replacement, and comprehensive maintenance check)고 했으므로 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 158-160: Biography
            {
                id: "p7-t10-set6",
                questionRange: "158-160",
                passages: [
                    {
                        id: "p7-t10-s6-p1",
                        type: "ARTICLE",
                        title: "Kasem Ngam Biography",
                        content: `Kasem Ngam is a renowned speaker and author from Nonthaburi province in Thailand. — [1] —. Immediately upon graduating from Sangsuwan University in Bangkok, he joined Chamborn Gas & Electric (CG&E). Over a period of 25 years, he made a name for himself as one of CG&E's most dedicated and respected employees, even gaining national and international recognition. — [2] —.\n\nMr. Ngam currently runs a consulting firm that he started four years ago to help businesses develop innovative new technologies to power the modern world. — [3] —. He is the author of numerous articles on a variety of topics, including solar panels and hydrogen-powered vehicles. — [4] —. His honors include a Pax Award for his book Biofuels, a popular textbook on biofuels, which has been translated into several languages. His forthcoming book, Pricing Our Power: Funding the New Green Energy, will be published in May.`,
                        translation: `카셈 응암은 태국 논타부리 주 출신의 유명한 연설가이자 작가입니다. — [1] —. 방콕에 있는 상수완 대학교를 졸업하자마자, 158 그는 찬타라 가스&일렉트릭(CG&E)에 입사했습니다. 160 25년의 기간 동안, 그는 CG&E에서 가장 헌신적이고 존경받는 직원 중 한 명으로 명성을 떨쳤고, 심지어 국내외의 인정을 받았습니다. — [2] —.\n\n158, 159 현재 응암 씨는 기업들이 현대 사회에 동력을 제공할 혁신적인 신기술을 개발하는 것을 돕기 위해 4년 전 시작한 컨설팅 회사를 운영하고 있습니다. — [3] —. 그는 태양 전지판, 수소 동력 자동차를 포함해 다양한 주제에 관한 수많은 글의 저자입니다. — [4] —. 그의 영예에는 여러 언어로 번역된 바이오 연료에 관한 그의 저서 <미래의 연료>가 받은 팍스 혁신상이 포함됩니다. 그의 차기 도서 <에너지 가격 책정: 새로운 그린 에너지에 대한 자금 지원>은 5월에 출판될 것입니다.`
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "What industry does Mr. Ngam most likely work in?",
                        options: [
                            { label: "A", text: "Energy" },
                            { label: "B", text: "Travel" },
                            { label: "C", text: "Finance" },
                            { label: "D", text: "Journalism" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "응암 씨가 종사할 것 같은 업계는?",
                        explanation: `첫 단락의 두 번째 문장에서 응암 씨가 찬타라 가스&일렉트릭(CG&E)에 입사했다(joined Chanbara Gas & Electric (CG&E))고 했고, 두 번째 단락 첫 문장에서는 현재 기업들이 현대 사회에 동력을 제공할 혁신적인 신기술을 개발하는 것을 돕기 위해 4년 전 시작한 컨설팅 회사를 운영하고 있다(Mr. Ngam currently runs a consulting firm ~ to help businesses develop innovative new technologies to power the modern world)고 했다. 응암 씨가 에너지 회사에서 근무했고, 현재도 에너지 신기술 개발을 돕는 컨설팅 회사를 운영하고 있는 것으로 보아 에너지 분야에 종사하고 있음을 알 수 있으므로 정답은 (A)이다.`
                    },
                    {
                        id: "159",
                        text: "What is indicated about Mr. Ngam?",
                        options: [
                            { label: "A", text: "He is writing his first book." },
                            { label: "B", text: "He knows several languages." },
                            { label: "C", text: "He operates his own business." },
                            { label: "D", text: "He is a recent university graduate." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "응암 씨에 대해 명시된 것은?",
                        explanation: `두 번째 단락 첫 문장에서 현재 응암 씨는 4년 전 시작한 컨설팅 회사를 운영하고 있다(Mr. Ngam currently runs a consulting firm)고 했으므로 (C)가 정답이다.`
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"The last position he held at the company was director of research and development.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "[1], [2], [3], [4]로 표시된 위치 중 다음 문장이 들어가기에 가장 적절한 곳은?",
                        explanation: `주어진 문장에서 그(he)가 회사(the company)에서 마지막으로 맡은 직책은 연구 개발 이사였다고 했다. 앞 문장에서 그가 전 직장인 CG&E에서 25년간 근무하며 명성을 얻었다고 언급했으므로, 이 문장을 해당 내용 뒤인 [2]에 연결하면 자연스럽다. 따라서 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 161-163: Article
            {
                id: "p7-t10-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t10-s7-p1",
                        type: "ARTICLE",
                        title: "Jobs Coming to Willettville",
                        content: `WILLETTVILLE (March 8)—Tanney's Discount Mart (TDM) announced today that it will hold a job fair in Willettville later this month. The company, headquartered in nearby Lyter City, is looking to fill 300 positions at its new distribution center, set to open here next month. In addition to seeking warehouse technicians and supervisors, the company is looking to fill positions in the processing, stock inspection, and maintenance departments.\n\n"TDM's distribution centers use modern automated systems, which creates a big need for qualified technical staff in particular," Kent Siler, TDM's president, said in a press release announcing the job fair.\n\nThe event will be held from 9:30 A.M. to 6:30 P.M. on Thursday, March 20, in the ballroom of the Twin Ridges Hotel. Details can be found by visiting tdm.com/careers.\n\n"This recruiting event will help us find the staff we need to meet the anticipated growth in demand for our products," said Mr. Siler. "TDM continues to expand its position in discount retail. So far this year, we have opened three stores, and we have five more slated to open by the end of next year." Mr. Siler noted, moreover, that TDM offers competitive wages for full-time and part-time employment.`,
                        translation: `윌렛빌에 생기는 일자리\n\n윌렛빌 (3월 8일) — 테니스 할인 마트(TDM)는 이달 말 윌렛빌에서 채용 박람회를 개최할 것이라고 오늘 발표했습니다. 인근 리터 시티에 본사를 둔 이 회사는 161 다음 달 이곳에 문을 열 예정인 새로운 물류 센터에 300개의 일자리를 충원하고자 합니다. 162(A) 기술자와 관리자를 구하는 것 외에도 이 회사는 물류 처리, 재고 검사 및 유지 관리 부서의 일자리를 충원하기를 바랍니다.\n\n"TDM의 물류 센터는 현대적인 자동화 시스템을 사용하여, 이로 인해 특히 자격을 갖춘 기술 직원이 많이 필요합니다."라고 TDM의 사장인 켄트 사일러는 채용 박람회를 발표하는 보도 자료에서 말했습니다.\n\n162(B) 이 행사는 3월 20일 목요일 오전 9시 30분부터 오후 6시 30분까지 트윈 리지스 호텔의 연회장에서 열릴 예정입니다. 162(D) 자세한 내용은 tdm.com/careers를 방문해 확인할 수 있습니다.\n\n"이번 채용 행사는 우리 상품에 대해 예상되는 수요 증가를 맞추기 위해 필요한 직원들을 찾는 데 도움이 될 것입니다."라고 사일러 씨는 말했습니다. 163 "TDM은 할인 소매업에서 입지를 지속적으로 확대하고 있습니다. 올해 지금까지 세 개의 매장을 열었으며 내년 말까지 다섯 개의 매장을 추가로 개점할 계획입니다." 사일러 씨는 또한 TDM이 풀타임 및 파트타임 고용직에 경쟁력 있는 급여를 제공한다고 언급했습니다.`
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is stated about TDM's new distribution center?",
                        options: [
                            { label: "A", text: "It is the company's first distribution center to use automated systems." },
                            { label: "B", text: "It is the largest facility the company has built." },
                            { label: "C", text: "It is scheduled to open in April." },
                            { label: "D", text: "It was designed by an architectural firm in Willettville." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "TDM의 새로운 물류 센터에 대해 언급된 것은?",
                        explanation: `도입부에 기사 작성일이 3월 8일(March 8)로 나와 있는데, 기사 두 번째 문장에서 인근 리터 시티에 본사를 둔 이 회사는 다음 달 이곳에 문을 열 예정인 새로운 물류 센터에 300개의 일자리를 충원하고자 한다(The company, ~ at its new distribution center, set to open here next month)고 했다. 따라서 새로운 물류 센터는 기사가 작성된 3월의 다음 달인 4월에 문을 열 예정이므로 (C)가 정답이다.`
                    },
                    {
                        id: "162",
                        text: "What is NOT mentioned about the job fair?",
                        options: [
                            { label: "A", text: "The kinds of jobs offered" },
                            { label: "B", text: "The day and date it will be held" },
                            { label: "C", text: "The types of refreshments served" },
                            { label: "D", text: "The source for detailed information" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "채용 박람회에 대해 언급되지 않은 것은?",
                        explanation: `첫 단락의 마지막 문장에서 기술자와 관리자를 구하는 것 외에도 이 회사는 처리, 재고 검사 및 유지 관리 부서의 일자리를 충원하기를 바란다고 했으므로 (A), 세 번째 단락의 첫 문장에서 이 행사는 3월 20일 목요일에 열릴 예정(The event will be held ~ on Thursday, March 20)이라고 했으므로 (B), 뒤이어 자세한 내용은 tdm.com/careers를 방문해 확인할 수 있다(Details can be found by visiting tdm.com/careers)고 했으므로 (D)는 기사에 언급되어 있다. 제공되는 다과에 대해서는 언급된 바가 없으므로 (C)가 정답이다.`
                    },
                    {
                        id: "163",
                        text: "What does Mr. Siler indicate about TDM?",
                        options: [
                            { label: "A", text: "It is a growing business." },
                            { label: "B", text: "It sponsors an annual job fair." },
                            { label: "C", text: "It is staffed mostly by part-time workers." },
                            { label: "D", text: "It relies heavily on online sales." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "사일러 씨가 TDM에 대해 암시하는 것은?",
                        explanation: `마지막 단락의 두 번째 문장에서 사일러 씨가 TDM은 할인 소매업에서 입지를 지속적으로 확대하고 있고(TDM continues to expand its position in discount retail) 올해 지금까지 세 개의 매장을 열었으며 내년 말까지 다섯 개의 매장을 추가로 개점할 계획(So far this year, we have opened three stores, and we have five more slated to open by the end of next year)이라고 언급했으므로 정답은 (A)이다.`
                    }
                ]
            },
            // Questions 164-167: Online Chat
            {
                id: "p7-t10-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t10-s8-p1",
                        type: "CHAT_MESSAGE",
                        title: "Online Chat",
                        content: `Lathan Little [5:40 P.M.]\nHello Aranda and Desmond, 164 I learned earlier today that the town has hired our company to demolish the lighthouse.\n\nAranda Richards [5:43 P.M.]\nI have mixed feelings about taking down that structure, but I realize the town's reasoning.\n\nDesmond Williams [5:43 P.M.]\nI'm just hearing about this now. I was absent from the office all day today.\n\nLathan Little [5:44 P.M.]\nWhy is that, Aranda?\n\nAranda Richards [5:46 P.M.]\n165 Well, given that business has been quite slow lately, our company needs the work, but 166 that lighthouse has historic value: it has been a major landmark of Burlingate for 100 years.\n\nLathan Little [5:48 P.M.]\n166 I realize that. But for the reasons provided by the city, our company can't afford to pass up this opportunity. Besides, the lighthouse is largely outdated.\n\nDesmond Williams [5:49 P.M.]\nNot necessarily. Ships always need warnings about hazardous areas. The lighthouse has served that function for a long time.\n\nLathan Little [5:51 P.M.]\nThat's true, but modern technological advances exist that simplify navigation and make the lighthouse increasingly a relic of the past. Anyway, 167 let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job.`,
                        translation: `라탄 리틀 [오후 5:40] 안녕하세요, 아란다 그리고 데스먼드, 164 오늘 아침 시에서 등대를 철거하기 위해 우리 회사를 고용했다는 것을 알았습니다.\n\n아란다 리처즈 [오후 5:43] 저도요, 그렇지만 그 구조물을 철거하는 데 대해 여러 감정이 드네요.\n\n데스먼드 윌리엄스 [오후 5:43] 저는 그 일에 대해 지금 처음 들었습니다. 오늘 하루 종일 사무실을 비웠거든요.\n\n라탄 리틀 [오후 5:44] 아란다, 어째서 그런가요?\n\n아란다 리처즈 [오후 5:46] 165 최근 들어 사업이 상당히 부진한 것을 고려하면 우리 회사는 이 일을 해야 해요, 그렇긴 한데 166 이 등대는 100년 동안 벌링게이트의 주요 랜드마크였다는 역사적인 가치가 있습니다.\n\n라탄 리틀 [오후 5:48] 166 알고 있습니다. 그렇지만 말씀하신 이유로 회사에서 이 기회를 놓칠 여유는 없습니다. 게다가 등대는 대체로 구식이 되었습니다.\n\n데스먼드 윌리엄스 [오후 5:49] 꼭 그런 것은 아니에요. 선박들은 항상 위험한 곳에 대한 경고를 받아야 합니다. 등대는 오랫동안 그 기능을 수행해 왔습니다.\n\n라탄 리틀 [오후 5:51] 맞는 말이지만 지금은 항해를 단순화하고 등대를 점점 과거의 유물로 만드는 현대 기술 장치가 존재합니다. 어쨌든 167 내일 오전 10시에 만나서 이 일을 어떻게 진행할 것인지 논의합시다.`
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "In what industry do the chat participants most likely work?",
                        options: [
                            { label: "A", text: "Building construction" },
                            { label: "B", text: "Marine technology" },
                            { label: "C", text: "Corporate accounting" },
                            { label: "D", text: "Historic preservation" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "채팅 작성자들이 근무할 것 같은 업종은?",
                        explanation: `5시 40분에 리틀 씨가 오늘 아침 시에서 등대를 철거하기 위해 회사를 고용했다는 것을 알았다(Earlier today I learned that the town has hired our company to demolish the lighthouse)고 한 것으로 보아 채팅 작성자들이 철거 회사에서 근무하고 있다는 것을 알 수 있으므로 (A)가 정답이다.`
                    },
                    {
                        id: "165",
                        text: "What is indicated about the company the chat participants work for?",
                        options: [
                            { label: "A", text: "It recently purchased ultramodern equipment." },
                            { label: "B", text: "It has experienced a decline in business." },
                            { label: "C", text: "It is hired regularly by the city council." },
                            { label: "D", text: "It has been in business for 100 years." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "채팅 작성자들이 근무하는 회사에 대해 명시된 것은?",
                        explanation: `5시 46분에 리처즈 씨가 최근 들어 사업이 상당히 부진한 것을 고려하면 회사는 이 일을 해야 한다(given that business has been quite slow lately, our company needs the work)고 했으므로 회사의 사업이 최근 하락세임을 알 수 있다. 따라서 (B)가 정답이다.`
                    },
                    {
                        id: "166",
                        text: "At 5:48 P.M., what does Mr. Little most likely mean when he writes, \"I realize that\"?",
                        options: [
                            { label: "A", text: "He knows why Mr. Williams was absent." },
                            { label: "B", text: "He recognizes the significance of the lighthouse for the town." },
                            { label: "C", text: "He understands how much the city is paying." },
                            { label: "D", text: "He knows that Ms. Richards is an expert in city history." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오후 5시 48분에 리틀 씨가 \"알고 있습니다\"라고 쓴 의도는?",
                        explanation: `5시 46분에 리처즈 씨가 이 등대는 100년 동안 벌링게이트의 주요 랜드마크였다는 역사적인 가치가 있다(the lighthouse has historic value: it has been a major landmark of Burlingate for 100 years)고 하자 5시 48분에 리틀 씨가 알고 있다(I realize that)고 대답했다. 따라서 리틀 씨는 시에서 등대가 차지하는 의미에 대해 인식하고 있음을 전하려는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                    },
                    {
                        id: "167",
                        text: "What will the chat participants likely do tomorrow morning?",
                        options: [
                            { label: "A", text: "Advertise a new project" },
                            { label: "B", text: "Attend a city council meeting" },
                            { label: "C", text: "Tour a lighthouse" },
                            { label: "D", text: "Start planning for an upcoming project" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "채팅 작성자들은 내일 오전에 무엇을 할 것 같은가?",
                        explanation: `5시 51분에 리틀 씨가 내일 오전 10시에 만나서 이 일을 어떻게 진행할 것인지 논의하자(let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job)고 했으므로 정답은 (D)이다.`
                    }
                ]
            },
            // Questions 168-171: Brochure
            {
                id: "p7-t10-set9",
                questionRange: "168-171",
                passages: [
                    {
                        id: "p7-t10-s9-p1",
                        type: "ARTICLE",
                        title: "Contempo Spaces\nWindow Treatment Package",
                        content: `If you are considering redecorating the windows of your living room, dining room, or bedroom, Contempo Spaces has the perfect treatment design package for you. — [1] —. We will help you put together the right combination of shades, panels, drapes, and valances—all perfectly tailored to fit your windows.\n\nHere's how it works:\n\n• First, one of our style representatives will come to your home and measure and photograph your windows in each room.\n\n• During that visit, our representative will show you samples of the many styles of fabrics and finishes available in our product line. — [2] —. Or, you can opt to visit our showroom after the home visit and make your selections there.\n\n• 169 One or two days after you've made your window treatment decisions, we will send you an invoice, listing the cost for materials, installation, and labor. 169 The quoted price is valid for thirty days. Upon receipt of payment, materials will be ordered. It usually takes from seven to fourteen days to reach our store. — [3] —.\n\n• Finally, we will contact you to schedule the date and time of installation. — [4] —. 170 Depending on the size of the project, installation can take two to eight hours.`,
                        translation: `컨템포 스페이시스\n창문 처리 패키지\n\n거실, 다이닝 공간 또는 침실의 창문을 새로 장식하는 것을 고려하고 계시다면, 컨템포 스페이시스가 귀하를 위한 완벽한 처리 디자인 패키지를 가지고 있습니다. — [1] —. 귀하의 창문에 맞춰 완벽하게 맞춤 제작되는 셰이드, 패널, 커튼, 밸런스의 적절한 조합 구성을 도와드립니다.\n\n168 진행 방식은 다음과 같습니다:\n\n• 먼저 저희 스타일 담당자 한 명이 고객님 댁을 방문하여 각 방의 창문을 측정하고 사진을 찍습니다.\n\n• 방문하는 동안 171 담당자가 저희 제품 라인에서 이용할 수 있는 다양한 스타일의 직물 및 금속 부속품 샘플을 보여드립니다. — [2] —. 또는 가정 방문 후 저희 쇼룸에 오셔서 제품을 선택하실 수 있습니다.\n\n• 169 창문 처리를 결정하시고 1~2일 후에 자재, 설치 및 인건비가 기재된 청구서를 보내 드립니다. 견적 가격은 30일간 유효합니다. 대금을 받는 즉시 자재가 발주됩니다. 자재가 저희 매장에 도착하는 데는 보통 7일에서 14일이 걸립니다. — [3] —.\n\n• 마지막으로 설치 날짜와 시간을 잡기 위해 저희가 연락을 드립니다. — [4] —. 170 작업 규모에 따라 설치하는 데 두 시간에서 여덟 시간이 걸릴 수 있습니다.`
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is the purpose of the brochure?",
                        options: [
                            { label: "A", text: "To explain a new policy" },
                            { label: "B", text: "To describe a popular product" },
                            { label: "C", text: "To advertise a special discount" },
                            { label: "D", text: "To present a standard process" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "안내 책자의 목적은?",
                        explanation: `두 번째 단락에서 '진행 방식은 다음과 같다(Here's how it works)'라고 한 뒤, 아래에서 창문 측정, 제품 선택, 대금 결제, 설치 등 진행 방식에 대해 순서대로 설명하고 있다. 따라서 안내 책자의 글은 업체의 서비스가 이루어지는 기본 절차를 설명하기 위한 것이므로 (D)가 정답이다.`
                    },
                    {
                        id: "169",
                        text: "After how many days might the total cost listed in an invoice change?",
                        options: [
                            { label: "A", text: "Two" },
                            { label: "B", text: "Seven" },
                            { label: "C", text: "Fourteen" },
                            { label: "D", text: "Thirty" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "청구서에 기재된 총비용은 며칠 뒤에 변경될 수도 있는가?",
                        explanation: `진행 방식을 설명하는 세 번째 항목의 첫 문장에서 창문 처리를 결정하고 1~2일 후에 자재, 설치 및 인건비가 기재된 청구서를 보낸다(One or two days after you've made your window treatment decisions, we will send you an invoice ~ and labor)고 했고, 견적 가격은 30일간 유효하다(The quoted price is valid for thirty days)고 했다. 따라서 청구서에 기재된 견적 비용은 30일이 지나면 변경될 수 있으므로 (D)가 정답이다.`
                    },
                    {
                        id: "170",
                        text: "What is indicated in the brochure about installation?",
                        options: [
                            { label: "A", text: "It is not available for all window treatments." },
                            { label: "B", text: "It is the responsibility of the customer." },
                            { label: "C", text: "It takes no more than eight hours to complete." },
                            { label: "D", text: "It is subcontracted to an outside vendor." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "안내 책자에 설치에 관해 암시된 것은?",
                        explanation: `진행 방식을 설명하는 마지막 항목의 마지막 문장에서 작업 규모에 따라 설치하는 데 두 시간에서 여덟 시간이 걸릴 수 있다(Depending on the size of the project, installation can take two to eight hours)고 했으므로 설치를 완료하는 데 8시간은 넘지 않는다는 것을 알 수 있다. 따라서 (C)가 정답이다.`
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Our entire style collection can be viewed on our Web site.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                        explanation: `주어진 문장에서 '당사의 전체 스타일 컬렉션은 웹사이트에서 보실 수 있습니다(Our entire style collection can be viewed on our Web site.)'라고 했으므로, 앞에는 일부 스타일에 대해 확인하는 것과 관련한 내용이 와야 적절하다. [2] 앞에서 고객의 집을 방문한 담당자가 다양한 스타일의 직물 및 금속 부속품 샘플을 보여 준다(our representative will show you samples of the many styles ~ in our product line)고 했으므로, 그 뒤에 주어진 문장이 들어가는 것이 글의 흐름상 자연스럽다. 따라서 (B)가 정답이다.`
                    }
                ]
            },
            // Questions 172-175: E-mail
            {
                id: "p7-t10-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t10-s10-p1",
                        type: "EMAIL",
                        title: "EMAIL",
                        content: `To: Morgan Tebele <mtebele@newsom.com.na>\nFrom: Esme Mukaya <emukaya@skyleopard.com.na>\nDate: 21 August\nSubject: Offer\n\nDear Mr. Tebele,\n\n172 Whether you are refinancing a loan, training personnel, or marketing your financial services to other businesses, fast Internet access is essential for bank managers like you. Sky Leopard Communications delivers just that, thanks to its highly advanced pool of technicians and dedicated workforce.\n\nIn fact, 173 a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors.\n\nThe reason: in addition to our state-of-the-art Internet infrastructure and our 174 outstanding pool of technicians, we offer the convenience of Internet connectivity through our High-Velocity Internet Access (HIVIA) service plan. HIVIA provides download and upload speeds that are three times faster than those of our closest competitor.\n\n175 Sky Leopard Communications offers new customers and those using one of our other plans the opportunity to try HIVIA for free for 30 days. To subscribe, visit us at www.skyleopard.com.na or call us at 061-987-555. 175 If at any time during the one-month trial period you are not satisfied with this plan, you can unsubscribe from the service at no cost to you.\n\nSincerely,\n\nEsme Mukaya, Sales`,
                        translation: `수신: 모건 테벨레 <mtebele@newsom.com.na>\n발신: 에스메 무카야 <emukaya@skyleopard.com.na>\n날짜: 8월 21일\n제목: 제안\n\n테벨레 씨께,\n\n172 대출을 재융자하든, 직원을 교육하든, 금융 서비스를 온라인으로 마케팅하든, 빠르고 믿을 수 있는 인터넷 이용은 고객님과 같은 은행 관리자에게 필수적입니다. 스카이 레오파드 커뮤니케이션즈는 고도로 발전된 네트워크와 헌신적인 인력 덕분에 바로 그것을 제공해 드립니다.\n\n실제로, 173 나미비아 소상공인 협회(NASO)가 실시한 최근 설문 조사에 따르면 회원의 75퍼센트가 경쟁사의 서비스보다 저희 서비스를 선호한다고 합니다.\n\n그 이유는 최첨단 인터넷 기반 시설과 174 뛰어난 기술자 인력 외에도 고속 인터넷 연결(HIVIA) 서비스 요금제를 통해 프리미엄 인터넷 연결을 제공하기 때문입니다. HIVIA는 가장 근접한 경쟁사보다 3배 더 빠른 다운로드 및 업로드 속도를 제공합니다.\n\n175 스카이 레오파드 커뮤니케이션즈는 신규 고객 및 당사의 다른 서비스 요금제 중 하나를 사용 중인 고객들에게 30일 동안 무료로 HIVIA를 사용할 수 있는 기회를 제공합니다. 가입하시려면 www.skyleopard.com.na를 방문하시거나 061-987-555로 전화 주십시오. 175 한 달간의 체험 기간 동안 이 요금제에 만족하지 않으실 경우 언제든지 무료로 서비스 가입을 취소하실 수 있습니다.\n\n에스메 무카야, 영업부`
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What industry does Mr. Tebele most likely work in?",
                        options: [
                            { label: "A", text: "Web design" },
                            { label: "B", text: "Hospitality" },
                            { label: "C", text: "Marketing" },
                            { label: "D", text: "Banking" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "테벨레 씨가 종사할 것 같은 업종은?",
                        explanation: `첫 단락의 첫 번째 문장에서 테벨레 씨에게 대출을 재융자하든, 직원을 교육하든, 금융 서비스를 온라인으로 마케팅하든, 빠르고 믿을 수 있는 인터넷 이용은 테벨레 씨와 같은 은행 관리자에게 필수적(Whether you are refinancing a loan, training personnel ~ is essential for bank managers like you)이라고 한 것으로 보아 테벨레 씨는 은행 관리자로 근무하고 있음을 알 수 있다. 따라서 (D)가 정답이다.`
                    },
                    {
                        id: "173",
                        text: "What is stated about Sky Leopard Communications?",
                        options: [
                            { label: "A", text: "It offers discounts to NASO members." },
                            { label: "B", text: "It is popular with small-business owners." },
                            { label: "C", text: "It recently launched a new service plan." },
                            { label: "D", text: "It is looking to increase its workforce." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "스카이 레오파드 커뮤니케이션즈에 대해 명시된 것은?",
                        explanation: `두 번째 단락에서 나미비아 소상공인 협회(NASO)가 실시한 최근 설문 조사에 따르면 회원의 75퍼센트가 경쟁사의 서비스보다 자사의 서비스를 선호한다(a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors)고 했으므로 스카이 레오파드 커뮤니케이션즈는 소상공인들에게 인기가 있다는 것을 확인할 수 있다. 따라서 (B)가 정답이다.`
                    },
                    {
                        id: "174",
                        text: "The word \"outstanding\" in paragraph 3, line 1, is closest in meaning to",
                        options: [
                            { label: "A", text: "various" },
                            { label: "B", text: "available" },
                            { label: "C", text: "excellent" },
                            { label: "D", text: "remaining" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_VOCABULARY",
                        translation: "세 번째 단락 1행의 \"outstanding\"과 의미가 가장 가까운 단어는?",
                        explanation: `의미상 '뛰어난' 기술자들이라는 뜻으로 쓰인 것이므로 정답은 '훌륭한, 탁월한'을 뜻하는 (C) excellent이다.`
                    },
                    {
                        id: "175",
                        text: "What is true about the HIVIA service plan?",
                        options: [
                            { label: "A", text: "It costs more than other plans." },
                            { label: "B", text: "It was created after a customer survey." },
                            { label: "C", text: "It requires the purchase of special equipment." },
                            { label: "D", text: "It can be canceled for free within the first month." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "HIVIA 서비스 요금제에 대해 알 수 있는 것은?",
                        explanation: `네 번째 단락의 첫 문장에서 스카이 레오파드 커뮤니케이션즈는 신규 고객 및 당사의 다른 서비스 요금제 중 하나를 사용 중인 고객들에게 30일 동안 무료로 HIVIA를 사용할 수 있는 기회를 제공한다(Sky Leopard Communications offers ~ the opportunity to try HIVIA for free for 30 days)고 했고, 마지막 문장에서 한 달간의 체험 기간 동안 이 요금제에 만족하지 않을 경우 언제든지 무료로 서비스 가입을 취소할 수 있다(at any time during the one-month trial period ~ you can unsubscribe from the service at no cost to you)고 했다. 따라서 HIVIA 서비스 요금제는 한 달간의 무료 체험 중 언제든 취소할 수 있으므로 (D)가 정답이다.`
                    }
                ]
            },
        ]
    }
];






