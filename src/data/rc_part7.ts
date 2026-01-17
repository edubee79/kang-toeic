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
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "CHART" | "TEXT_MESSAGE" | "FORM" | "BROCHURE" | "INSTRUCTIONS" | "SCHEDULE" | "INVITATION" | "ANNOUNCEMENT" | "ADVERTISEMENT";
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

Follow the pictures and begin the assembly by placing the main part on its side. Please overtighten the screws at first or you may damage the wood or cushioning. Please visit our Web site to obtain maintenance tips and register your product for warranty coverage: www.indoordelight.com.`,
                        translation: "조립 설명서"
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
                        translation: "이 정보는 어디에서 가장 발견될 가능성이 높은가?"
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
                        translation: "어떤 종류의 물건이 논의되고 있을 가능성이 높은가?"
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
                        translation: "회의 일정표"
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
                        translation: "일정표가 암시하는 것은 무엇인가?"
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
                        translation: "위니펙 시간 오전 11시에 대해 무엇이 언급되어 있는가?"
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
                        translation: "브라이언트 포이어 브로셔"
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
                        translation: "브라이언트 포이어에 대해 무엇이 언급되어 있는가?"
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
                        translation: "앤디토스에 대해 무엇이 암시되는가?"
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
                        translation: "문자 메시지 대화"
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
                        translation: "오후 1시에 Ms. Chi가 'Sure thing, Mina'라고 쓸 때 가장 의미하는 것은 무엇인가?"
                    },
                    {
                        id: "154",
                        text: "What will happen next?",
                        options: [
                            { label: "A", text: "Ms. Chi will get new site coordinates." },
                            { label: "B", text: "Ms. Chi and Ms. Lim will be out for a while." },
                            { label: "C", text: "Ms. Evers will share a recipe." },
                            { label: "D", text: "Ms. Lim will begin taking measurements." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "다음에 무슨 일이 일어날 것인가?"
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
                        content: `This season's excellent weather has yielded a substantial harvest of fruits and vegetables. In many cases more than growers may find buyers for. Those of you wishing to help produce in need or community organizations can do so by visiting Jossy Farm and Garden's Web site (www.vigraft.org), where you will find our list of drop-off locations.

If you need us to come to you instead, please contact us. We will reach out to one of the many independent drivers who have kindly volunteered to transport and quickly distribute your food donations to vetted groups that need it. Check our Web site for more information about this service as well as for insights into topics related to farming and gardening in the Northern Great Plains region.`,
                        translation: "공지사항"
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "For whom is the notice most likely intended?",
                        options: [
                            { label: "A", text: "Farmers" },
                            { label: "B", text: "Professional chefs" },
                            { label: "C", text: "Truck drivers" },
                            { label: "D", text: "Supermarket managers" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_PURPOSE",
                        translation: "이 공지는 누구를 대상으로 하는가?"
                    },
                    {
                        id: "156",
                        text: "What does the notice indicate about the weather?",
                        options: [
                            { label: "A", text: "It caused transportation delays." },
                            { label: "B", text: "It included heavier rain than usual." },
                            { label: "C", text: "It was frequently a topic in the local news." },
                            { label: "D", text: "It was beneficial for crops." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "공지사항은 날씨에 대해 무엇을 나타내는가?"
                    },
                    {
                        id: "157",
                        text: "What service does the notice mention?",
                        options: [
                            { label: "A", text: "Staffing for local businesses" },
                            { label: "B", text: "Food collection and distribution" },
                            { label: "C", text: "Farm machinery repair" },
                            { label: "D", text: "Gardening workshops" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "공지사항은 어떤 서비스를 언급하는가?"
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
                        content: `We are delighted that you are joining us for today's event. — [1] —. We ask that you adhere to the following guidelines to ensure that all attendees have an enjoyable experience.

Upon entering the venue, please put any and all electronic devices in silent mode. Ringtones and lit screens are very distracting to both the performers and your fellow audience members. — [2] —. Moreover, audience members are not allowed to make an audio or visual recording of the performance.

Bags and other items in the aisles pose a safety concern. — [3] —. If your bag is too big to fit properly under a seat, consider storing it in a locker for just $2. — [4] —. One of our attendants will gladly assist you with that.

Thank you for your cooperation.`,
                        translation: "행사 공지사항"
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "Where most likely is the notice posted?",
                        options: [
                            { label: "A", text: "In an airplane" },
                            { label: "B", text: "In a concert hall" },
                            { label: "C", text: "At a restaurant" },
                            { label: "D", text: "At a post office" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_LOCATION",
                        translation: "이 공지는 어디에 게시되었을 가능성이 높은가?"
                    },
                    {
                        id: "159",
                        text: "What is stated about large bags?",
                        options: [
                            { label: "A", text: "They can be put in a locked box for a fee." },
                            { label: "B", text: "They must be left outside the building." },
                            { label: "C", text: "They will be inspected by an attendant." },
                            { label: "D", text: "They must be stored under a seat." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "큰 가방에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Please refrain from making phone calls or texting at all times.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `To: Camille Ayala <ayala@esplinelectronics.com>
From: Masae Adachi <madachi@sweeterspecialties.com>
Date: February 12
Subject: Event order
Attachment: Sweeter Specialties Request Form

Dear Ms. Ayala,

Thank you for selecting our business to provide baked goods for the Esplin Electronics conference event in March. We are honored that you chose us for a fourth year in a row. As we will provide a chocolate vanilla cake for each of the ten venues you indicated, and we will deliver a custom-baked multilayer cake on the following day. You are billed a total of $1,280. Please review the attached order form and return it to me within seven days.

Regarding the cake you ordered for March 30, our head pastry chef will produce it according to your specifications. In fact, he created a sample of the complete recipe earlier today—almond crème cake with fresh raspberry filling. We have judged it to be a delectable treat, and we are sure that you will be pleased.

If you have any concerns, just send me an e-mail. As always, we value your business.

Masae Adachi, Owner
Sweeter Specialties`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the main purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To request confirmation of an order" },
                            { label: "B", text: "To adjust some delivery dates" },
                            { label: "C", text: "To announce the expansion of a business" },
                            { label: "D", text: "To promote new dessert products" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 주요 목적은 무엇인가?"
                    },
                    {
                        id: "162",
                        text: "What is suggested about Ms. Ayala?",
                        options: [
                            { label: "A", text: "She has received a professional award." },
                            { label: "B", text: "She has worked as a pastry chef." },
                            { label: "C", text: "She has been a Sweeter Specialties client in the past." },
                            { label: "D", text: "She received a positive recommendation about a chef." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Ayala에 대해 무엇이 암시되는가?"
                    },
                    {
                        id: "163",
                        text: "What is indicated about the multilayer cake?",
                        options: [
                            { label: "A", text: "It has been a best-selling product with clients." },
                            { label: "B", text: "It is the most expensive cake at Sweeter Specialties." },
                            { label: "C", text: "It is baked for Esplin Electronics annually." },
                            { label: "D", text: "It is a new flavor combination for Sweeter Specialties." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "멀티레이어 케이크에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "164",
                        text: "The word \"judged\" in paragraph 2, line 3, is closest in meaning to",
                        options: [
                            { label: "A", text: "criticized" },
                            { label: "B", text: "settled" },
                            { label: "C", text: "determined" },
                            { label: "D", text: "described" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_VOCABULARY",
                        translation: "'judged'와 의미가 가장 가까운 것은?"
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
                        type: "ARTICLE",
                        title: "Great Dishwasher!",
                        content: `I never had a dishwasher before. After remodeling my kitchen, I finally had room for a compact dishwasher. I did a lot of research, and the Dish Magic 300 seemed to be the best choice. It was pricier than other models, but all of the reviews were excellent. So, I decided to spend the extra money. I have had the dishwasher for one month now, and I could not be happier with my decision. Most importantly, the dishes come out sparkling clean, no matter how dirty they were going in. Also, the machine is so quiet, you do not even know it is running. Lastly, it is designed to use water efficiently, which is very important to me. Overall, I am very pleased with this dishwasher.

— Anna Yakovleva`,
                        translation: "제품 리뷰"
                    }
                ],
                questions: [
                    {
                        id: "165",
                        text: "Why did Ms. Yakovleva choose the Dish Magic 300 dishwasher?",
                        options: [
                            { label: "A", text: "It was less expensive than most models." },
                            { label: "B", text: "It was the largest model available." },
                            { label: "C", text: "It was rated very highly." },
                            { label: "D", text: "It was the same brand as her other appliances." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Ms. Yakovleva가 Dish Magic 300을 선택한 이유는?"
                    },
                    {
                        id: "166",
                        text: "The word \"running\" in paragraph 1, line 7, is closest in meaning to",
                        options: [
                            { label: "A", text: "adjusting" },
                            { label: "B", text: "controlling" },
                            { label: "C", text: "moving" },
                            { label: "D", text: "operating" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "'running'과 의미가 가장 가까운 것은?"
                    },
                    {
                        id: "167",
                        text: "What is indicated about Ms. Yakovleva?",
                        options: [
                            { label: "A", text: "She cares about saving water." },
                            { label: "B", text: "She recently moved to a new home." },
                            { label: "C", text: "She bought the dishwasher a year ago." },
                            { label: "D", text: "She remodels kitchens professionally." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Yakovleva에 대해 무엇이 언급되어 있는가?"
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
                        type: "ARTICLE",
                        content: `Skyler Airlines employs more than 20,000 people from all over the world. We're growing fast and have many positions available. — [1] —. So regardless of your background, there's probably a place for you on our team. Skyler employees enjoy free or discounted tickets to fly to any of our destinations for a fraction of the average ticket price. — [3] —. We offer competitive salaries, tuition reimbursement, a mentorship program, and a generous compensation package. — [4] —. Annual paid vacations enable a comfortable work-life balance. It's no wonder that Skyler Airlines was named "Best Airline to Work For" by Travel Vista Journal three years in a row.`,
                        translation: "채용 공고"
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "For whom is the information intended?",
                        options: [
                            { label: "A", text: "Skyler Airlines employees" },
                            { label: "B", text: "Skyler Airlines customers" },
                            { label: "C", text: "Potential journal subscribers" },
                            { label: "D", text: "Current job seekers" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "이 정보는 누구를 대상으로 하는가?"
                    },
                    {
                        id: "169",
                        text: "In the information, what is NOT mentioned as being offered to employees?",
                        options: [
                            { label: "A", text: "Payment for educational expenses" },
                            { label: "B", text: "Free airline tickets" },
                            { label: "C", text: "Opportunities for mentoring" },
                            { label: "D", text: "Paid days off" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_NOT_MENTIONED",
                        translation: "직원들에게 제공되는 것으로 언급되지 않은 것은?"
                    },
                    {
                        id: "170",
                        text: "What is mentioned about Skyler Airlines?",
                        options: [
                            { label: "A", text: "It flies to the most destinations around the world." },
                            { label: "B", text: "It is planning to merge with another airline." },
                            { label: "C", text: "It has been praised by a trade publication." },
                            { label: "D", text: "It has replaced its seats with more comfortable ones." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Skyler Airlines에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Our openings cover a broad range of skill sets.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "TEXT_MESSAGE",
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
Assuming we receive the summary soon enough to incorporate its findings into the slides, should the three of us schedule a trial run through the presentation on Thursday or Friday?

Maggie Lorenz 9:24 A.M.
Let's try for Thursday afternoon. Then we will still have Friday to make any necessary changes.

Alan Woodson 9:25 A.M.
Fine by me. I'm free after 2 P.M.`,
                        translation: "온라인 채팅"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What are the participants preparing?",
                        options: [
                            { label: "A", text: "A product launch" },
                            { label: "B", text: "A sales presentation" },
                            { label: "C", text: "A research study" },
                            { label: "D", text: "A training session" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_MAIN_IDEA",
                        translation: "참가자들은 무엇을 준비하고 있는가?"
                    },
                    {
                        id: "173",
                        text: "At 9:22 A.M., what does Ms. Lorenz most likely mean when she writes, \"let's not overlook that\"?",
                        options: [
                            { label: "A", text: "The team should remember to obtain the report." },
                            { label: "B", text: "The team should verify some information." },
                            { label: "C", text: "The presentation slides need to be revised." },
                            { label: "D", text: "The headphones should be tested again." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Lorenz가 'let's not overlook that'이라고 쓸 때 의미하는 것은?"
                    },
                    {
                        id: "174",
                        text: "What is suggested about Mr. Harven?",
                        options: [
                            { label: "A", text: "He works in the research and development office." },
                            { label: "B", text: "He will attend the presentation on Thursday." },
                            { label: "C", text: "He designed the new headphones." },
                            { label: "D", text: "He manages several partner stores." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Harven에 대해 무엇이 암시되는가?"
                    },
                    {
                        id: "175",
                        text: "When will the participants most likely meet?",
                        options: [
                            { label: "A", text: "On Monday" },
                            { label: "B", text: "On Wednesday" },
                            { label: "C", text: "On Thursday" },
                            { label: "D", text: "On Friday" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "참가자들은 언제 만날 가능성이 높은가?"
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
                        content: `For small-business owners, it can be a challenge to stand out in a competitive social media environment. Successfully reaching your target market involves knowing how and where to promote your products in a way that is effective and memorable. The Savan Business Center offers support for business owners who need a lift in doing just that. For over 50 years, we've been helping entrepreneurs grow their sales through insight of current industry trends and understanding of our clients' unique needs.

Let us help you get more organized in creating effective and far-reaching social media content. Our latest webinar, Focus Your Social Media Presence, will cover topics related to making your business stand out. You can sign up on our event Web page.

Date: February 5
Time: 10:00 A.M. to 11:00 A.M.
Event Web page: https://www.savanbusinesscenter.com/socialmedia`,
                        translation: "웨비나 초대장"
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
                        translation: "Savan Business Center에 대해 사실인 것은?"
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
                        translation: "웨비나에 대해 무엇이 언급되어 있는가?"
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
                        content: `Dine Out Darville, which runs this year from June 22 to 28, is the perfect chance to try a restaurant in Darville for the first time or revisit one of your favorite restaurants in town. You may even visit multiple restaurants during the weeklong event! Twelve popular restaurants will offer special four-course dinners—including a cup of soup, a salad, a main course, and dessert—all for a reduced price of $30. Reservations are highly recommended. Dine Out Darville welcomes hundreds of locals and tourists each year, and you do not want to miss your opportunity to get a great meal at a great price.

Visit www.darvillebusinesscouncil.org/dineout for a list of participating restaurants.`,
                        translation: "행사 공지"
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
                        translation: "Dine Out Darville에 대해 무엇이 언급되어 있는가?"
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
                        translation: "할인 가격 식사에 포함되지 않은 것은?"
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
                        content: `DADE (July 11)—Rainsy LLC announced yesterday that it is moving its headquarters to Dade.

The data storage and analytics firm currently based in Salt Creek, Rainsy has clients that include some of the country's largest credit card companies, online retailers, and software providers. Rainsy helps businesses manage and understand their customer data.

Rainsy is not planning to close its current offices in Salt Creek. However, the Dade location will become its new base of operations, as several members of its executive team will work there. The company's chief executive officer and chief financial officer will relocate to Dade along with approximately 50 percent of the company's workforce.

The office of Rainsy's chief technology officer will remain in Salt Creek, as will the account management team. The company's new Dade offices are located at 12 Glacier Parkway.`,
                        translation: "기사"
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
                        translation: "Rainsy LLC는 무엇을 하는가?"
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
                        translation: "누가 Dade에 근무하게 되는가?"
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
                        content: `Michael Liu (9:43 A.M.)
Hi, Jana. I'm at Biz Plus. The paper you need is out of stock until next week. Will another color work?

Jana Bhat (9:45 A.M.)
What are the options?

Michael Liu (9:46 A.M.)
They have yellow, green, and pink in the brand that you prefer.

Jana Bhat (9:47 A.M.)
I really need blue. Are there other brands of blue printer paper?

Michael Liu (9:48 A.M.)
Yes, but they're all a darker blue. They also cost more.

Jana Bhat (9:49 A.M.)
OK, forget it. I'll place an order online.`,
                        translation: "문자 메시지 대화"
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is suggested about the paper Mr. Liu is shopping for?",
                        options: [
                            { label: "A", text: "It is light blue." },
                            { label: "B", text: "It is inexpensive." },
                            { label: "C", text: "It is sold exclusively at Biz Plus." },
                            { label: "D", text: "It has been discontinued." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Liu가 찾고 있는 종이에 대해 무엇이 암시되는가?"
                    },
                    {
                        id: "154",
                        text: "At 9:49 A.M., what does Ms. Bhat most likely mean when she writes, \"OK, forget it\"?",
                        options: [
                            { label: "A", text: "She wants to check her budget." },
                            { label: "B", text: "She thinks Mr. Liu should not purchase paper at Biz Plus." },
                            { label: "C", text: "She believes Mr. Liu should not place an order this week." },
                            { label: "D", text: "She plans to cancel her order." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Bhat가 'OK, forget it'이라고 쓸 때 의미하는 것은?"
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
                        content: `20 May

Neil Croft, Director
Queensland Libraries
13 Hammocky Road
Brisbane QLD 4003

Dear Mr. Croft,

I have read your inquiry about offering financial management courses at libraries across Queensland. — [1] —. The Society for Financial Management Advisors (SFMA) welcomes the opportunity to partner with the libraries to make basic financial management information more widely available.

You proposed that SFMA members could lead introductory courses at several library branches. — [2] —. SFMA members have offered similar courses to recent graduates, people changing careers, and first-time investors in the past.

— [3] —. If you have a list of library branches that would host the first series of events, I can suggest facilitators who work near those libraries or would be willing to travel to them. Do you have a general profile of the expected attendees? — [4] —. That information would help us tailor the courses to audience needs and interests.

I look forward to meeting with you to develop a plan. Please contact me by telephone at 07 5550 1344 to set up a time to discuss the courses.

Sincerely,
Roberta Otney
Roberta Otney
Chairperson, Society for Financial Management Advisors`,
                        translation: "편지"
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "Why did Ms. Otney write the letter?",
                        options: [
                            { label: "A", text: "To welcome a new library director" },
                            { label: "B", text: "To register for an SFMA finance course" },
                            { label: "C", text: "To confirm some educational credentials" },
                            { label: "D", text: "To reply to a question from Mr. Croft" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "Ms. Otney가 편지를 쓴 이유는?"
                    },
                    {
                        id: "156",
                        text: "What is one thing Ms. Otney requested?",
                        options: [
                            { label: "A", text: "A library membership" },
                            { label: "B", text: "A list of course instructors" },
                            { label: "C", text: "The locations of some libraries" },
                            { label: "D", text: "Mr. Croft's telephone number" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Ms. Otney가 요청한 것은?"
                    },
                    {
                        id: "157",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"This is something I would be happy to arrange.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `The difference is clear.

Take advantage of our limited-time offer:
50% off all eyeglass frames through 30 September

Other advantages available today and every day:

• Free eyeglass fittings and adjustments

• Money-back guarantee if you are not completely satisfied

• More than 500 locations in shopping malls throughout Canada

• Low-cost vision checkups by licensed opticians

To find a store near you, visit www.clarovision.ca/locations,
or call 416-555-0122 today!`,
                        translation: "광고"
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
                        translation: "광고가 만들어진 이유는?"
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
                        translation: "Claro Vision 매장에 대해 언급된 것은?"
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
                        translation: "시력 검사에 대해 언급된 것은?"
                    }
                ]
            },
            // Questions 161-163: Letter (Double Passage)
            {
                id: "p7-t2-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t2-s7-p1",
                        type: "LETTER",
                        content: `Rossery Building Corporation
2710 South Exmouth Drive
Singapore 188509

1 April

Elizabeth Balakrishnan
Bala Home Furnishings
416 Holliton Drive C2
Singapore 793801

Dear Ms. Balakrishnan,

This is a reminder that the one-year lease for your space will end on 30 April. Please contact my office at 1555 0124 to make an appointment to renew your lease. There will be a small increase in rent and fees because of rising operating costs.

Updated charges upon lease renewal:
Monthly rental         S$1,800.00
Parking space fee      S$50.00
Cleaning service       S$10.00
Security fee           S$35.00
Total monthly charge   S$1,895.00

If you are not renewing your lease, please notify our office by 15 April. Plan to vacate the property by 5 P.M. on 30 April. There will be an inspection of the property, and there may be charges for repairs or damages beyond normal usage.

Kind regards,
Alexis Tan
Alexis Tan`,
                        translation: "편지"
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the purpose of the letter?",
                        options: [
                            { label: "A", text: "To explain the fees for equipment installation" },
                            { label: "B", text: "To offer a discount on a service" },
                            { label: "C", text: "To provide information about a lease agreement" },
                            { label: "D", text: "To request a change to a property amenity" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "편지의 목적은?"
                    },
                    {
                        id: "162",
                        text: "According to the letter, what must Ms. Balakrishnan pay for each month?",
                        options: [
                            { label: "A", text: "Furniture rental" },
                            { label: "B", text: "Office supplies" },
                            { label: "C", text: "An inspection fee" },
                            { label: "D", text: "A parking space" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "편지에 따르면 Ms. Balakrishnan이 매달 지불해야 하는 것은?"
                    },
                    {
                        id: "163",
                        text: "Who most likely is Ms. Tan?",
                        options: [
                            { label: "A", text: "A repair person" },
                            { label: "B", text: "A property manager" },
                            { label: "C", text: "A cleaning person" },
                            { label: "D", text: "A security company employee" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Tan은 누구일 가능성이 높은가?"
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
                        content: `To: lkhoury@britelyauto.co.uk
From: khagel@qualiview.co.uk
Date: 14 April
Subject: Your proposed changes

Dear Ms. Khoury,

Thank you for forwarding your proposed revisions to the contract for Qualiview Ltd. to be your wholesale supplier of automotive window glass.

First, we will gladly agree to an extension of the contract term from one to three years. Secondly, I am not sure what more we can do to address your concerns about packaging materials. We use custom-built crates and innovative packaging to reduce the risk of breakage during shipping. While we will replace any goods that may be damaged in transit, we do not agree to pay an additional penalty fee in the event of such damage.

I would like to discuss this further with you next week; however, I will be out of the office through Tuesday afternoon. Would you be available to meet before 11:00 A.M. on either Wednesday or Thursday? Friday is also possible. Please let me know a convenient date and time for you.

Best regards,

Karl Hagel
Qualiview Ltd.`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "Why did Mr. Hagel write the e-mail?",
                        options: [
                            { label: "A", text: "To report damage to an item" },
                            { label: "B", text: "To finalize a purchase" },
                            { label: "C", text: "To request a product sample" },
                            { label: "D", text: "To negotiate a contract" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "Mr. Hagel이 이메일을 쓴 이유는?"
                    },
                    {
                        id: "165",
                        text: "What is indicated about Qualiview Ltd.?",
                        options: [
                            { label: "A", text: "It sells its products online." },
                            { label: "B", text: "It makes windows for cars." },
                            { label: "C", text: "It has paid penalty fees in the past." },
                            { label: "D", text: "It recently redesigned its shipping crates." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Qualiview Ltd.에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "166",
                        text: "The word \"address\" in paragraph 2, line 2, is closest in meaning to",
                        options: [
                            { label: "A", text: "respond to" },
                            { label: "B", text: "think about" },
                            { label: "C", text: "greet" },
                            { label: "D", text: "deliver" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_VOCABULARY",
                        translation: "'address'와 의미가 가장 가까운 것은?"
                    },
                    {
                        id: "167",
                        text: "When is Mr. Hagel available next week?",
                        options: [
                            { label: "A", text: "On Monday morning" },
                            { label: "B", text: "On Tuesday afternoon" },
                            { label: "C", text: "On Wednesday morning" },
                            { label: "D", text: "On Thursday afternoon" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Mr. Hagel은 다음 주 언제 시간이 있는가?"
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
                        title: "Shipping Disruptions",
                        content: `SINGAPORE (6 June)—Recently, the demand for international freight space has been outpacing the availability of shipping containers. Partners in the shipping industry have been discussing ways to address higher costs for goods being shipped out of Asia ports. A drop in the production of rolls of steel, the raw material that containers are made from, has further complicated this situation. — [1] —.

Some exporters have considered the more expensive option of air freight, but companies are still faced with a difficult choice. — [2] —. They must either ask their customers to accept shipment delays, or substantially raise customer prices to cover the cost of expedited shipping. Either way, suppliers risk triggering customer dissatisfaction.

"We are working with business partners, investors, and government officials to discuss solutions to this problem," said Henry Lam, a spokesperson for the household goods producer QET Group. — [3] —. "It's going to take total cooperation of all stakeholders to find a solution."

Not all companies are suffering, though. For example, Fezker, the producer of athletic apparel and footwear, has implemented strategies to better overcome this situation. Fezker has successfully refocused its efforts away from exports to western countries and toward expanding its domestic and regional markets. — [4] —.

"We moved quickly, so the shipping container shortage has not caused a significant impact on our profits," said Fezker CEO Nuwa Lee.`,
                        translation: "기사"
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is mentioned about shipping containers?",
                        options: [
                            { label: "A", text: "They come in different sizes." },
                            { label: "B", text: "They are in short supply." },
                            { label: "C", text: "They are made from a variety of materials." },
                            { label: "D", text: "They can be used for long-term storage." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "운송 컨테이너에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "169",
                        text: "What does Mr. Lam say is needed to resolve the situation?",
                        options: [
                            { label: "A", text: "A sharp increase in the number of customers" },
                            { label: "B", text: "A relaxation of government restrictions" },
                            { label: "C", text: "The development of new technologies" },
                            { label: "D", text: "Communication between affected groups" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "Mr. Lam이 상황을 해결하기 위해 필요하다고 말한 것은?"
                    },
                    {
                        id: "170",
                        text: "What type of clothing does Fezker produce?",
                        options: [
                            { label: "A", text: "Rain jackets" },
                            { label: "B", text: "Sportswear" },
                            { label: "C", text: "Business suits" },
                            { label: "D", text: "Work uniforms" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Fezker는 어떤 종류의 의류를 생산하는가?"
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"These markets are supplied using more readily available truck and train transportation.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "TEXT_MESSAGE",
                        content: `Gary Wendel [7:40 A.M.]
Good morning, team. Can you share the current status of your projects, please?

Jing Yu [7:42 A.M.]
I met with the client last week to confirm the start date for Phase 8 of the Palisade project.

Robbie Zuniga [7:43 A.M.]
I am headed to the job site now for the Riverview project. The rain last week delayed pouring the concrete for the sidewalks. I will check the conditions this morning to see if the situation has improved.

Gary Wendel [7:44 A.M.]
When will Phase 8 of the Palisade project begin?

Jing Yu [7:46 A.M.]
We will break ground in March and plan to have the building completed by November.

Gary Wendel [7:47 A.M.]
That's good news about the March start date. I am sure the client is happy about that.

Gary Wendel [7:50 A.M.]
Robbie, let me know what you find out about the site conditions. Perhaps Nathan Burry can help at the site. He's our most knowledgeable concrete finisher.

Robbie Zuniga [7:55 A.M.]
Actually, I'm meeting Nathan at the site this morning, so I'll get his opinion on when we can pour the concrete. The rest of the project is on hold until we can do this.

Gary Wendel [7:57 A.M.]
Keep me posted. I don't want to rush it if it's still too wet. At the same time, the Riverview project is already behind schedule because of equipment problems and late delivery of building materials.

Robbie Zuniga [7:58 A.M.]
Will do.`,
                        translation: "온라인 채팅"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is the purpose of the online chat discussion?",
                        options: [
                            { label: "A", text: "To request a budget increase" },
                            { label: "B", text: "To review project updates" },
                            { label: "C", text: "To schedule a team meeting" },
                            { label: "D", text: "To announce a new hire" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "온라인 채팅의 목적은?"
                    },
                    {
                        id: "173",
                        text: "What is indicated about the Palisade project?",
                        options: [
                            { label: "A", text: "It is behind schedule." },
                            { label: "B", text: "It will be completed in March." },
                            { label: "C", text: "It has multiple phases." },
                            { label: "D", text: "It requires a concrete finisher." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Palisade 프로젝트에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "174",
                        text: "What problem does Mr. Zuniga mention?",
                        options: [
                            { label: "A", text: "A worker is unavailable." },
                            { label: "B", text: "A client changed a request." },
                            { label: "C", text: "Weather has caused a delay." },
                            { label: "D", text: "Equipment has been damaged." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Mr. Zuniga가 언급한 문제는?"
                    },
                    {
                        id: "175",
                        text: "At 7:55 A.M., what does Mr. Zuniga imply when he writes, \"I'm meeting Nathan at the site this morning\"?",
                        options: [
                            { label: "A", text: "He has already followed Mr. Wendel's suggestion." },
                            { label: "B", text: "He needs Mr. Wendel to contact Mr. Burry." },
                            { label: "C", text: "He thinks Mr. Burry may be late." },
                            { label: "D", text: "He wants Mr. Wendel to join the meeting." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오전 7시 55분에 Mr. Zuniga가 '오늘 아침 현장에서 Nathan을 만난다'고 쓸 때 암시하는 것은?"
                    }
                ]
            }
        ]
    },
    {
        testId: 3,
        title: "Test 3",
        sets: [
            // Questions 147-148: Advertisement
            {
                id: "p7-t3-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t3-s1-p1",
                        type: "ADVERTISEMENT",
                        title: "Medillo Shoes Celebrates Twenty Years in Cape Town!",
                        content: `246 Breda Place, Wynberg, Cape Town 7800
021 555 0149 | www.medilloshoes.co.za

Does your job require you to stand all day long? Get the support you need! At Medillo Shoes, we specialise in comfortable, supportive footwear that is stylish and suitable for any business or medical setting.

Visit us on 10 May to receive 20 percent off your purchase of one or more pairs of shoes during this anniversary event. Should you need assistance finding the best shoes for your professional needs, our footwear specialists will be on hand to help. Schedule a free consultation at www.medilloshoes.co.za to avoid a long wait.`,
                        translation: "광고"
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
                        translation: "5월 10일 Medillo Shoes에서 무슨 일이 일어나는가?"
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
                        translation: "Medillo Shoes에 대해 무엇이 언급되어 있는가?"
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
                        content: `To: Sales Team
From: Neil Cullen
Date: 10 April
Subject: My schedule next week

Dear Team,

I will be out of the office next week, from 15 to 19 April, attending the conference of the National Technology Alliance in Glasgow. While away, I will check e-mail and voice mail infrequently. For any urgent matters, please contact my assistant, Christina Choo. If you have a specific question about the Ezenx Industries account, please e-mail Mya Soroka. I will be back in the office on 22 April and will see all of you then.

Best,

Neil Cullen, Director of Sales and Marketing
Shallok Technology`,
                        translation: "이메일"
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
                        translation: "이메일의 목적은 무엇인가?"
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
                        translation: "Ms. Soroka에 대해 사실일 가능성이 높은 것은?"
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
                        content: `Notice for residents and contractors working in Bryanton

Beginning on Monday, July 1, the City of Bryanton's Building Permit Office, located at 912 Fir Avenue, will be open from Monday to Thursday, 9:00 A.M. to 5:00 P.M. Applications for permits will no longer be accepted on Fridays or Saturdays. The average processing time for permit applications will remain three business days. With this change, the city will lower its operating costs while maintaining its high standards of service for residents.`,
                        translation: "공지사항"
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
                        translation: "Building Permit Office가 하는 변경 사항은 무엇인가?"
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
                        translation: "공지에 따르면 변경이 이루어지는 이유는?"
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
                        type: "FORM",
                        content: `https://www.riverthamestours.uk/order/confirmation

River Thames Tours
Thank you for reserving a River Thames tour with us. We are eager to welcome you aboard. Each tour lasts 3 hours. Your tour includes a luncheon served at 1:00 p.m. Please consult our Web site for a menu. Should you have any dietary restrictions and like to request a special meal, please contact our customer experience manager, Martin Torma, at least 48 hours prior to your tour.

This reservation also entitles you to a 10 percent discount on a walking tour by Edgerton Walking Tours—just provide your confirmation code when booking.

Name:                    Lewis Califf
Purchase Date:           18 April
Confirmation Code:       H102057
Tour Start:              1 May, 11:30 a.m.
Quantity:                4
Total:                   £180.00
Payment:                 Credit card ending in 1037

Please note: Boarding ends 10 minutes before departure time.
Tours cannot be rescheduled.`,
                        translation: "영수증"
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What is indicated about the river tour?",
                        options: [
                            { label: "A", text: "It is one hour long." },
                            { label: "B", text: "It comes with a meal." },
                            { label: "C", text: "It can be rescheduled." },
                            { label: "D", text: "It sells out quickly." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "강 투어에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "154",
                        text: "How many tickets did Mr. Califf purchase?",
                        options: [
                            { label: "A", text: "1" },
                            { label: "B", text: "3" },
                            { label: "C", text: "4" },
                            { label: "D", text: "7" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Mr. Califf는 몇 장의 티켓을 구매했는가?"
                    },
                    {
                        id: "155",
                        text: "How can customers receive a discount on a walking tour?",
                        options: [
                            { label: "A", text: "By making a reservation online" },
                            { label: "B", text: "By paying with a credit card" },
                            { label: "C", text: "By requesting a coupon from the captain" },
                            { label: "D", text: "By mentioning a confirmation code" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_DETAIL",
                        translation: "고객들이 도보 투어 할인을 받을 수 있는 방법은?"
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
                        type: "TEXT_MESSAGE",
                        content: `Michiko Saunders [8:06 A.M.]
Hi, Jacob. Are you on your way to the office?

Jacob Kwon [8:08 A.M.]
Yes. I should be there in about 25 minutes.

Michiko Saunders [8:10 A.M.]
OK. I was just starting to print out the design proposal for the Dansby Group, but we've run out of paper. And we don't have another delivery of it coming until Wednesday.

Jacob Kwon [8:12 A.M.]
I see an office supply store across the street. It just opened for the day.

Michiko Saunders [8:13 A.M.]
Fantastic. Three packs of paper should be enough.

Jacob Kwon [8:15 A.M.]
OK. By the way, when will the representatives from the Dansby Group be coming to our office? I could also pick up some coffee and snacks for that meeting.`,
                        translation: "문자 메시지 대화"
                    }
                ],
                questions: [
                    {
                        id: "156",
                        text: "At 8:12 A.M., what does Mr. Kwon most likely mean when he writes, \"I see an office supply store across the street\"?",
                        options: [
                            { label: "A", text: "He needs help finding a building." },
                            { label: "B", text: "He can purchase some paper." },
                            { label: "C", text: "He will look for a new printer." },
                            { label: "D", text: "He is going to negotiate a delivery schedule." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 8시 12분에 Mr. Kwon이 '길 건너편에 사무용품 가게가 보인다'고 쓸 때 의미하는 것은?"
                    },
                    {
                        id: "157",
                        text: "What will Ms. Saunders most likely do next?",
                        options: [
                            { label: "A", text: "Reschedule a meeting" },
                            { label: "B", text: "Prepare some refreshments" },
                            { label: "C", text: "Check on an arrival time" },
                            { label: "D", text: "Revise a design proposal" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Saunders가 다음에 할 가능성이 높은 것은?"
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
                        content: `Kipbank Business Services
548 Sycamore Lake Road
Green Bay, WI 54301

April 2

Madeline Omar
Passionflower Interior Design
1556 Deer Run Road
Green Bay, WI 54301

Dear Ms. Omar,

A business owner's days are filled with juggling the wants, needs, and demands of customers, staff, and suppliers. — [1] —.

Let Kipbank find the right solutions for your small business so that you can focus on your products. — [2] —. Kipbank offers checking accounts, corporate credit cards, business loans, and payroll and bookkeeping services. — [2] —. This fall, we will also offer financial planners to our team to help you and your employees plan for your futures.

With our corporate credit cards, Kipbank customers can take advantage of money-saving offers from selected hotel, office supply, and air travel partners. — [3] —. These deals are automatically applied to qualified purchases. And the business owner can place spending limits on each card. — [4] —.

Please call us at 920-555-0122 to set up an appointment or just stop by when it is convenient. We look forward to meeting you and providing your enterprise with superior service.

Sincerely,
Thomas Piskorksi
Thomas Piskorksi, Kipbank Customer Concierge`,
                        translation: "편지"
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "What is suggested about Ms. Omar?",
                        options: [
                            { label: "A", text: "She is an accountant." },
                            { label: "B", text: "She works for Mr. Piskorksi." },
                            { label: "C", text: "She operates a small company." },
                            { label: "D", text: "She is a Kipbank customer." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Omar에 대해 무엇이 암시되는가?"
                    },
                    {
                        id: "159",
                        text: "What is stated about the credit cards?",
                        options: [
                            { label: "A", text: "They come in a variety of colors." },
                            { label: "B", text: "They require an annual fee." },
                            { label: "C", text: "They include discounts on certain purchases." },
                            { label: "D", text: "They can be used to buy personal items." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "신용카드에 대해 언급된 것은?"
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Everyday financial details only add more distractions.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `OTTAWA (22 May)—Waldenstone Business Review has added a new category to its esteemed international business awards this year. The Waldenstone Corporate Prize is awarded to a business with the foresight to develop strategies that help ensure the company's long-term viability.

This year's award was presented to Carila Corporation, a major player in the electronics sector. Under the direction of CEO Atsak Kakar, Carila Corporation went from near bankruptcy to a high level of profitability in just three years.

"Winning this award was very gratifying, not just for me but for the entire company," Mr. Kakar said upon receiving the award. "Everyone has worked extremely hard to get this company back on solid financial ground. The long-term solution has brought exceptional value to our shareholders."`,
                        translation: "기사"
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the purpose of the article?",
                        options: [
                            { label: "A", text: "To profile a newly opened business" },
                            { label: "B", text: "To analyze a trend in the electronics industry" },
                            { label: "C", text: "To highlight a company's achievement" },
                            { label: "D", text: "To discuss changes to an employment contract" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "기사의 목적은?"
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
                        translation: "Carila Corporation에 대해 무엇이 암시되는가?"
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
                        translation: "'solution'과 의미가 가장 가까운 것은?"
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
                        content: `As a Commbolt customer, you've come to expect the best in reliable high-speed Internet, straightforward pricing options, and top-notch customer service from friendly professionals who are responsive to your every need. — [1] —. Unlike the competition, we promise to never lock you into inflexible contracts or suddenly raise your monthly bill without notice.

At Commbolt, we know you have options when it comes to choosing an Internet service provider. — [2] —. To show our gratitude for your loyalty, we are offering a special limited-time referral bonus.

The way it works is simple. — [3] —. You can use e-mail, social media, or even text messages to tell everyone about Commbolt. When a new user signs up using your code, each of you will receive a monetary credit. Receive $10 when new referrals sign up for a monthly plan, and receive $20 for a plan costing $60 per month. The best news? — [4] —. There is no limit to the credits; the more people you sign up, the more money you get.

Your unique code is XA4R177.`,
                        translation: "광고"
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
                        translation: "광고에서 언급된 Commbolt의 장점은?"
                    },
                    {
                        id: "165",
                        text: "What is the maximum amount a customer can earn when one referred person signs up for service?",
                        options: [
                            { label: "A", text: "$10.00" },
                            { label: "B", text: "$20.00" },
                            { label: "C", text: "$45.00" },
                            { label: "D", text: "$60.00" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "추천인 1명이 가입할 때 고객이 받을 수 있는 최대 금액은?"
                    },
                    {
                        id: "166",
                        text: "What is true about the Commbolt promotion?",
                        options: [
                            { label: "A", text: "It may not be posted on social media." },
                            { label: "B", text: "It does not provide credit for more than three referrals." },
                            { label: "C", text: "It is expected to run for a full year." },
                            { label: "D", text: "It rewards both new and existing customers." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "Commbolt 프로모션에 대해 사실인 것은?"
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], or [4] does the following sentence best belong?\n\n\"Just share your unique referral code with friends and family.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "ARTICLE",
                        content: `https://www.sarahscatering.com

Sarah's Catering—What You Serve Matters

Sarah's Catering is a family-owned-and-operated company. The company was founded ten years ago with a mission to provide the highest quality catering services in our community. We work closely with local growers and use only the freshest ingredients. Our menu items can be adapted to the client's taste or dietary needs. For example, we can prepare vegetarian, vegan, and gluten-free options.

We provide catering for birthday parties, wedding receptions, corporate meetings, business holiday parties, and many other types of events. From planning the menu and preparing your food to engaging servers and cleanup staff for the event, Sarah's Catering has it covered.

Sarah's Catering can cater lunches in your office for a minimum of twenty people. We offer delicious options to make your group's meal a satisfying experience.

We're here to serve you! Ordering is fast and simple. Visit www.sarahscatering.com/quote to request a cost estimate for your next event.

What people are saying
"Sarah's Catering was very easy to work with, and the food was delicious! Everyone in the office commented on how good the food was." — Glen Liu, Perkins Real Estate
"All the food was perfect, and the staff was the best." — Annie Pierce, Kania Marketing, Inc.`,
                        translation: "웹 페이지"
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is indicated about Sarah's Catering?",
                        options: [
                            { label: "A", text: "It uses locally sourced products." },
                            { label: "B", text: "It is twenty years old." },
                            { label: "C", text: "It specializes mainly in weddings." },
                            { label: "D", text: "It has an online dining menu." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Sarah's Catering에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "169",
                        text: "The word \"taste\" in paragraph 1, line 4, is closest in meaning to",
                        options: [
                            { label: "A", text: "preference" },
                            { label: "B", text: "sample" },
                            { label: "C", text: "experience" },
                            { label: "D", text: "flavor" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_VOCABULARY",
                        translation: "'taste'와 의미가 가장 가까운 것은?"
                    },
                    {
                        id: "170",
                        text: "What is mentioned as a service provided by Sarah's Catering?",
                        options: [
                            { label: "A", text: "Entertainment planning" },
                            { label: "B", text: "Cooking demonstrations" },
                            { label: "C", text: "Cleanup after meals" },
                            { label: "D", text: "Rentals of tables and chairs" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Sarah's Catering이 제공하는 서비스로 언급된 것은?"
                    },
                    {
                        id: "171",
                        text: "Who most likely is Mr. Liu?",
                        options: [
                            { label: "A", text: "An employee of Sarah's Catering" },
                            { label: "B", text: "A professional event manager" },
                            { label: "C", text: "A customer of Sarah's Catering" },
                            { label: "D", text: "An assistant at a marketing firm" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Liu는 누구일 가능성이 높은가?"
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
                        type: "TEXT_MESSAGE",
                        content: `Marcus Steuber [10:41 A.M.] Are we still planning to have the author video conference today? I haven't yet received a meeting invitation.

Brinda Rajan [10:42 A.M.] I do have the meeting on my calendar. Let me forward it to you; it appears our editorial assistant didn't include you.

Marcus Steuber [10:43 A.M.] Thanks, I just received it. The timing doesn't work for me, though. I have an appointment with Hazel Luong to discuss the printing issues at our Singapore plant.

Brinda Rajan [10:44 A.M.] Could you postpone that? The new author we're working with really needs your guidance on the final book design and formatting. You're our most knowledgeable production editor.

Marcus Steuber [10:45 A.M.] Let me check with my supervisor. I'll add Mr. Borg to our chat.

Joshua Borg [10:47 A.M.] Hi, team. Marcus, you should prioritize your appointment with Hazel. I'll be visiting the plant next week, and we need to have some viable solutions before then.

Brinda Rajan [10:48 A.M.] OK, I'll contact Ms. Benoit to find out if she can meet later in the day, then.

Marcus Steuber [10:48 A.M.] That would work. I'm free between 4 and 6 P.M.`,
                        translation: "온라인 채팅"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is the main topic of the online chat discussion?",
                        options: [
                            { label: "A", text: "Hiring a new employee" },
                            { label: "B", text: "Scheduling a video conference" },
                            { label: "C", text: "Reviewing a book manuscript" },
                            { label: "D", text: "Visiting a production facility" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_MAIN_IDEA",
                        translation: "온라인 채팅의 주요 주제는?"
                    },
                    {
                        id: "173",
                        text: "What does Mr. Steuber need to do in Singapore?",
                        options: [
                            { label: "A", text: "Meet with an author" },
                            { label: "B", text: "Resolve a problem" },
                            { label: "C", text: "Hire new staff members" },
                            { label: "D", text: "Tour a new facility" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Mr. Steuber가 싱가포르에서 해야 할 일은?"
                    },
                    {
                        id: "174",
                        text: "At 10:44 A.M., what does Ms. Rajan imply when she writes, \"You're our most knowledgeable production editor\"?",
                        options: [
                            { label: "A", text: "Mr. Steuber should receive a promotion." },
                            { label: "B", text: "Mr. Steuber is the best person to help the author." },
                            { label: "C", text: "Mr. Steuber has worked at the company the longest." },
                            { label: "D", text: "Mr. Steuber should train other editors." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오전 10시 44분에 Ms. Rajan이 '당신은 우리의 가장 지식이 풍부한 제작 편집자입니다'라고 쓸 때 암시하는 것은?"
                    },
                    {
                        id: "175",
                        text: "Who most likely is Ms. Benoit?",
                        options: [
                            { label: "A", text: "A book author" },
                            { label: "B", text: "A plant supervisor" },
                            { label: "C", text: "An editorial assistant" },
                            { label: "D", text: "A production editor" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Benoit는 누구일 가능성이 높은가?"
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
                        content: `Zippy Petrol Mart
M64 Motorway
Leicester
0113 4960423
23 May

Biscuits          £2.00
Fruit cup         £0.95
Crisps            £1.10
VAT               £0.81
Inclusive

Total             £4.86

Sign up for our Zippy Club rewards card.
You could have earned 4 Zippy Club points on this transaction.
Points can be used for discounted merchandise, car products,
phone accessories, and more!`,
                        translation: "영수증"
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
                        translation: "5월 23일에 구매한 것은?"
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
                        translation: "영수증이 Zippy Petrol Mart에 대해 나타내는 것은?"
                    }
                ]
            },
            // Questions 149-150: Notice
            {
                id: "p7-t4-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t4-s2-p1",
                        type: "NOTICE",
                        title: "Coming Soon: The Best of PBQ Radio",
                        content: `During the week of April 21–27, PBQ Radio will be hosting a best-of-the-decade program. The most popular tunes by recording artists from the past decade will be played all day long. Both well-known and lesser-known recording artists will be featured. We plan to showcase each artist's top works.

In addition to featuring the best music of the decade, we would like to highlight our region's businesses. Advertising time is available for professionals. Let your community know that your business is one of the best in the community! You can request a shout-out for your company from a program host, or our professional marketing team can write and record a 30-second advertisement.

Visit www.pbqradio.com/advertise for details and pricing.`,
                        translation: "공지사항"
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
                        translation: "공지사항은 누구를 위해 작성되었을 가능성이 높은가?"
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
                        translation: "PBQ Radio에 대해 사실인 것은?"
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
                        type: "TEXT_MESSAGE",
                        content: `Frank Jabati [11:12 A.M.]
Hi, Maxine. I'm running late with this delivery today. Could you contact Ms. Dibello to let her know?

Maxine Larsen [11:13 A.M.]
Sure! I know that she is eager to get those new items. She says she needs to set up her kitchen properly so that she can prepare a special meal tonight. What time do you think you will arrive there?

Frank Jabati [11:15 A.M.]
I'm not sure—the road I was taking was closed for repairs. The detour road has heavy traffic.

Maxine Larsen [11:17 A.M.]
Sorry to hear that. What's your estimate?

Frank Jabati [11:19 A.M.]
Maybe around 1 P.M.

Maxine Larsen [11:20 A.M.]
OK, great. I will get in touch with Ms. Dibello to confirm that she will be home at that time. Then I'll get back to you.

Frank Jabati [11:22 A.M.]
Thanks!`,
                        translation: "문자 메시지 대화"
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
                        translation: "Ms. Dibello가 구매했을 가능성이 높은 것은?"
                    },
                    {
                        id: "152",
                        text: "At 11:17 A.M., what does Ms. Larsen most likely mean when she writes, \"What's your estimate\"?",
                        options: [
                            { label: "A", text: "She must verify the distance of a route." },
                            { label: "B", text: "She wants to know how much traffic there is." },
                            { label: "C", text: "She wants to know a delivery time." },
                            { label: "D", text: "She has to calculate a delivery charge." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오전 11시 17분에 Ms. Larsen이 'What's your estimate'라고 쓸 때 의미하는 것은?"
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
                        content: `To: Janet Hubschmann
From: customerservice@readymadeofficesupplies.net
Date: September 3
Subject: Thank you

Dear Ms. Hubschmann,

We here at Readymade Office Supplies are excited to welcome you to our Customers Count rewards program. Your account number 41120 is now registered.

Be sure to enter your account number to earn points on all your purchases from our Web site. You will earn one point for every dollar you spend on qualifying purchases. Redeem your points on your account page for rewards, including free two-day expedited shipping, special discounts, and more. You can still order via mail from our print catalog, over the telephone from one of our helpful representatives, or by visiting our retail locations across the United States and Canada. However, those purchases do not currently qualify for the rewards program.

Have questions? Please visit https://www.readymadeofficesupplies.net/customerservice.`,
                        translation: "이메일"
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
                        translation: "어떤 종류의 구매가 리워드 포인트를 받는가?"
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
                        translation: "프로그램의 혜택은?"
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
                        content: `Native Plant Society Headquarters
161 Sussex Street
Sydney, NSW 2001

15 April

Yasmine Harabi
247 Kooljak Road
Perth, Western Australia 6280

Membership number 4290

Dear Ms. Harabi,

Thank you for your continued support as a society member. Given your recent move, your membership has been transferred to the chapter located in the city of Perth. We will be mailing a replacement member identification card within a few days.

Unlike the chapter in the city of Canberra, the Perth branch meets the first Saturday of every month, so your next meeting will be in three weeks. If you have any questions, please contact us weekdays between 8:00 a.m. and 4:00 p.m. at (08) 5555 0145.

Sincerely,
Leticia Davis
Leticia Davis
Membership Department`,
                        translation: "편지"
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
                        translation: "편지의 목적은?"
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
                        translation: "Canberra에 대해 무엇이 암시되는가?"
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
                        translation: "Native Plant Society에 대해 결론지을 수 있는 것은?"
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
                        content: `https://www.greenroofplus.com

What Are Green Roofs?

Green roofs are an energy-saving option for office buildings and homes. A green roof is one that's covered with grasses, flowers, or other plants. It lowers heating and cooling costs while increasing a structure's aesthetic appeal. This Web site is designed for sharing ideas, photos, and resources to create and maintain a green roof.

Planting a rooftop garden is a rewarding do-it-yourself project, but special waterproofing and other preparations require the services of an experienced contractor. Costs vary widely by region, roof size, and complexity of the garden you want to create. Be sure to get estimates from at least two contractors.

If your contractor determines that your roof can handle the extra weight of soil, plants, and irrigation, ask about the project's timeline. Small, simple rooftop gardens may take only one week to complete.`,
                        translation: "웹 페이지"
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
                        translation: "웹 페이지에 따르면 웹 사이트 방문자가 할 수 있는 것은?"
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
                        translation: "녹색 지붕에 대해 언급되지 않은 것은?"
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
                        translation: "'handle'과 의미가 가장 가까운 것은?"
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
                        content: `Martino Technical has been providing live sound-mixing services for more than 30 years. We use the latest technology to produce the best sound.

The majority of our clients are heavy-metal and classic-rock musicians. Before they go on tour, we rehearse with them to ensure that the sounds are perfectly blended and balanced. In addition, we create recordings for them that they can post on social media to promote their shows.

Our sound-mixing engineers are known for their experience and professionalism and make bands sound just as good during live performances as they do on their records. They have worked with many popular music groups, including The Feakes, Firebrand, and Cellar Cats, and make bands sound just as good during live performances as they do on their records.

Contact us by e-mailing information@martinotechnical.ie.`,
                        translation: "광고"
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
                        translation: "Martino Technical에 대해 무엇이 언급되어 있는가?"
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
                        translation: "'promote'와 의미가 가장 가까운 것은?"
                    },
                    {
                        id: "163",
                        text: "What is NOT stated about the live sound-mixing engineers?",
                        options: [
                            { label: "A", text: "They create promotional materials." },
                            { label: "B", text: "They have considerable expertise." },
                            { label: "C", text: "They travel abroad frequently." },
                            { label: "D", text: "They have degrees in music." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_NOT_MENTIONED",
                        translation: "라이브 사운드 믹싱 엔지니어에 대해 언급되지 않은 것은?"
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
                        content: `To: Employees <employees@bonahoornenterprises.com>
From: Marcia Noh <mnoh@bonahoornenterprises.com>
Date: November 14
Subject: November 28 event

Dear all,

On the evening of November 28, there will be a formal dinner to honor our company president, Mr. Bonahoom. At the dinner, we will express our appreciation for his leadership over these past twenty years in making Bonahoom Enterprises a successful company and a great place to work.

This event will be held in the private banquet room at Chez Bistro and is intended to be a surprise, so please avoid mentioning it to him. Those few who are involved with the setup should arrive early. All other employees should come no later than 6:15 P.M. in anticipation of Mr. Bonahoom's arrival at 6:30 P.M. We expect the celebration to wrap up no later than 8 P.M. — [1] —.

There is no need to bring a gift. — [3] —. We do ask, though, that you find time this week to sign a card for him. It can be found at Ms. Mueller's desk, inside an envelope marked "November 28."

Finally, you are welcome to bring one guest with you to the event if you wish. — [4] —. Kindly RSVP to this e-mail so we can get a complete count of the number of attendees.

All the best,

Marcia Noh`,
                        translation: "이메일"
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
                        translation: "이메일의 주요 목적은?"
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
                        translation: "이메일에 따르면 대부분의 사람들이 도착할 것으로 예상되는 시간은?"
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
                        translation: "카드에 서명하고 싶다면 어떻게 해야 하는가?"
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], or [4] does the following sentence best belong?\n\n\"The senior staff will be presenting a commemorative plaque on behalf of the whole office.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "TEXT_MESSAGE",
                        content: `Colin Wikander [10:23 A.M.] I have reviewed the draft of the new client questionnaire, and it looks great overall. I would make the question about bookkeeping strategies more open-ended, though. As written, it may lead respondents to give simple yes or no answers.

Midori Sakai [10:24 A.M.] That's a good point. We'll need to fix that. I also want to add a couple of questions about how financial and tax reports have been handled in the past.

Ela Hamidah [10:24 A.M.] I could look at the bookkeeping question to see what I can come up with.

Colin Wikander [10:25 A.M.] Well, it's four pages already.

Midori Sakai [10:27 A.M.] That's true. I'll just wait for Ela's revision of the third question. Then Jack Neligan can put a draft of the form up on our Web site.

Colin Wikander [10:28 A.M.] Is it true that we are not planning to collect any paper forms?

Midori Sakai [10:30 A.M.] We might do that, but digital collection is preferable to avoid the lag time of waiting for our clients to print, fill out, and scan the forms to send them back.`,
                        translation: "온라인 채팅"
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
                        translation: "작성자들이 일할 가능성이 높은 회사 유형은?"
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
                        translation: "Mr. Wikander가 질문에 대해 제안하는 것은?"
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
                        translation: "오전 10시 25분에 Mr. Wikander가 'Well, it's four pages already'라고 쓸 때 의미하는 것은?"
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
                        translation: "Ms. Sakai가 종이 없는 양식이 더 나을 것이라고 생각하는 이유는?"
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
                        content: `https://www.trehospitalityassociation.com/discussion/tunisia

I have been a member of the TRE Hospitality Association for many years, but until now, I have posted messages only on the Greece and Egypt forums. — [1] —. This is my first post on the Tunisia forum.

I am looking for recommendations for a janitorial service on the island of Djerba. My company is opening a hotel there. Our hotel will offer 80 rooms with two restaurants on-site. — [2] —. I would like to contract with a company that can provide about four full-time custodial workers and housekeepers, plus an additional five workers on an as-needed basis for large events on our property. — [3] —.

I may have met some of you previously at one of our hospitality conferences. If so, please remind me. In fact, I attended the most recent one in Rabat. — [4] —. I would like to reconnect!

John Karikas, Director of Development

Synecdoche Hotel Group`,
                        translation: "웹 게시물"
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
                        translation: "웹 게시물의 목적은?"
                    },
                    {
                        id: "173",
                        text: "What is indicated about Mr. Karikas?",
                        options: [
                            { label: "A", text: "He recently joined the TRE Hospitality Association." },
                            { label: "B", text: "He has posted on multiple forums." },
                            { label: "C", text: "He manages hotels in several countries." },
                            { label: "D", text: "He attended a conference in Tunisia." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Karikas에 대해 무엇이 언급되어 있는가?"
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
                        translation: "Mr. Karikas가 고용하고 싶어하는 사업 유형은?"
                    },
                    {
                        id: "175",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"It will be the largest property in our portfolio.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
                    }
                ]
            }
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
                        content: `Owl and Moon

Buy one mattress, and choose one of our beautiful rugs for free!

Use the following coupon code when you check out at owlandmoon.co.uk: ESSZRS4T.

Our mattresses are shipped directly to your home and usually arrive within one week. Try out a mattress for 90 days, and if you are not happy with it, send it back for a full refund. We also offer low-interest financing for two years on all our furniture.`,
                        translation: "광고"
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
                        translation: "광고되는 제품 유형은?"
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
                        translation: "회사에 대해 무엇이 언급되어 있는가?"
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
                        content: `To: Demarco Hines <d.hines@worldmail.com>
From: Soon Yi Park <customerservice@thebestbags.co.kr>
Subject: Item F208 (canvas overnight bag)
Date: 19 June

Dear Mr. Hines,

The Best Bags canvas overnight bag you ordered is not currently available in the colour you requested. There are several options available to you.

1. Cancel your order, and we will gladly refund your money in full.

2. Select a different colour. That item is currently available in light blue, dark green, and dark gray.

3. Choose an item of equal value from our Web site or catalogue.

4. Wait until the item you ordered is back in stock in light gray. Allow three to five weeks.

Please let us know which option you prefer. We apologize for any inconvenience.

Thank you,

Soon Yi Park, Customer Service Agent`,
                        translation: "이메일"
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
                        translation: "이메일의 목적은?"
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
                        translation: "현재 구매할 수 없는 가방 색상은?"
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
                        type: "TEXT_MESSAGE",
                        content: `Christie Moroff [9:47 A.M.]
Good morning, Ren. I just stopped by your office.

Ren Nomura [9:48 A.M.]
Then you already know that I am not there today.

Christie Moroff [9:48 A.M.]
Yes, your new office mate—I can't remember her name—told me that you just started working remotely on Tuesdays. I was looking for some empty binders.

Ren Nomura [9:49 A.M.]
That's Cheryl. I thought you had already met her. Are there any binders in the supply closet?

Christie Moroff [9:50 A.M.]
No, I just looked. Frank has ordered some more, but they won't be in until next week. I need two or three of them now.

Ren Nomura [9:51 A.M.]
Check with Cheryl. She is really helpful.

Christie Moroff [9:52 A.M.]
OK. I will.`,
                        translation: "문자 메시지 대화"
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
                        translation: "Mr. Nomura에 대해 무엇이 암시되는가?"
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
                        translation: "오전 9시 51분에 Mr. Nomura가 'Check with Cheryl'이라고 쓸 때 의미하는 것은?"
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
                        content: `Cortica Bank

Please fill out the following form to open a new bank account.

Is this your first account with Cortica Bank? __ Yes  X No

Existing account number (if applicable): 190-37580

New account type: __ Chequing  X Savings  __ Investment

Name: Frances Wilkes

Mailing address: 17 Jones Street
                 North Sydney NSW 2060

Phone number: (02) 7010 8624

E-mail address: fwilkes@myemail.com.au

Initial deposit amount (minimum $500): $1,500

Would you like to sign up for electronic communications? __ Yes  X No

If you select "Yes," we will contact you via voice mail, e-mail, or text.
If you select "No," you will receive monthly paper statements in the mail.

Please note that accounts take up to two business days to be established. Your funds will be available after this period. You will receive your debit card in the mail in up to five business days.`,
                        translation: "양식"
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
                        translation: "Ms. Wilkes에 대해 무엇이 언급되어 있는가?"
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
                        translation: "은행이 Ms. Wilkes에게 연락할 가능성이 높은 방법은?"
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
                        content: `Construction Superintendent
Jones-Richmond Construction (JRC)

Founded 25 years ago, JRC is a full-service general contractor serving clients throughout Winnipeg and the surrounding area.

Responsibilities:
• Report to senior project manager
• Manage on-site construction activities
• Ensure compliance with safety regulations
• Negotiate purchases and contracts
• Establish construction schedules

Qualifications:
• Minimum five years of commercial construction experience
• Willingness to travel to job sites daily (usually within a 50-kilometre radius)
• Strong written communication skills

To apply, submit a résumé and cover letter through www.jrc.ca/apply.`,
                        translation: "구인 광고"
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
                        translation: "Jones-Richmond Construction에 대해 무엇이 암시되는가?"
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
                        translation: "건설 감독관의 책임으로 나열되지 않은 것은?"
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
                        translation: "광고에 따르면 성공적인 지원자가 가져야 하는 것은?"
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
                        content: `To: All Sledgehammer Gym Staff
From: Lucas Sledge
Date: September 15
Subject: Payroll changes
Attachment: Form

Dear Staff,

Thanks to your dedicated work, word of our little gym has spread. Over the past twelve months, enrollment has significantly increased and so has our teaching staff. Although this growth is wonderful, having to process the payroll by myself has become rather burdensome. Therefore, I have contacted Trumball and Company to provide direct deposit of your wages into your bank accounts. — [1] —. Consequently, you no longer need to deposit your paycheck yourself. Also, you will now be able to get your pay stubs and tax information online. — [2] —.

To allow for these changes, I am asking everyone to provide me with the necessary banking details. Please complete the attached form and bring it to the office with a voided check no later than September 25. — [3] —. The new process will take effect in October. — [4] —. Please let me know if you have any questions.

Take care,

Lucas`,
                        translation: "이메일"
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
                        translation: "새로운 급여 시스템의 혜택으로 언급된 것은?"
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
                        translation: "Mr. Sledge가 직원들에게 요청하는 것은?"
                    },
                    {
                        id: "160",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"If I am not around, please see my assistant.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        title: "Aussie Coffee Fair This Weekend",
                        content: `SYDNEY (4 June)—Coffee will be the main attraction this weekend at the Aussie Coffee Fair hosted by Homewares, the country's top kitchen appliance manufacturer. The event will be held at the Harbour Expo Centre.

The two-day event will feature a variety of coffee-oriented presentations by coffee growers and roasters, food writers, makers of kitchen equipment, and chefs. Foods and beverages will be available to view, taste, and buy at booths throughout the centre.

Sessions will feature demonstrations on cooking with coffee and tips for brewing the best cup of coffee, as well as information on nonfood uses for coffee. In addition, culinary experts will be on hand to meet with coffee enthusiasts for discussions designed to help them create a true coffeehouse experience in their own homes.

Entry to the Aussie Coffee Fair is free. However, registration is required as space is limited. For information and to register online, go to www.aussiecoffeefair.com.`,
                        translation: "기사"
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
                        translation: "'top'과 의미가 가장 가까운 것은?"
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
                        translation: "박람회에서 정보 발표를 하지 않을 사람은?"
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
                        translation: "박람회에 참석하기 위해 사람들이 해야 하는 것은?"
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
                        content: `From: melissa@grandgrainsbakery.com
To: elinaorero@webmail.com
Date: October 28
Re: Desserts

Dear Ms. Otero,

I just followed up with our baker about your request to have an assortment of desserts instead of one large cake for the party you are hosting at your home on November 7. We suggest ordering from a new menu. The cost for three desserts is between $10 and $12 per person. Our most popular desserts are the mini cheesecakes, the berry tartlets, and the fudge brownies.

I know you are using a separate caterer for the lunch, and they will help serve and clean up after the party. You also mentioned that you were considering whether to put the dessert table in your backyard or inside your house. Just keep in mind that if you order the cheesecakes, they should be left out for no more than two hours. If you give us very specific instructions about where to set up the desserts, our staff can leave them in the appropriate place without disturbing the party.

Once you make your dessert choices, simply let us know how many guests you expect, and we can take care of the rest.

Melissa Luhya
Grand Grains Bakery`,
                        translation: "이메일"
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
                        translation: "이메일의 목적은?"
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
                        translation: "Ms. Luhya가 미니 치즈케이크에 대해 언급하는 것은?"
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
                        translation: "'disturbing'과 의미가 가장 가까운 것은?"
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
                        translation: "Ms. Luhya가 Ms. Otero에게 요청하는 정보는?"
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
                        content: `To: Cheryl Futrel <cfutrel@zephyrmail.com>
From: Lydia Matsuda <service@candella.com>
Date: June 9
Subject: Home decorating

Dear Ms. Futrel,

Thank you for your interest in Candella Interior Design. — [1] —. We are proud to claim that we are the oldest and most successful online design consulting company in the region. We welcome you as a new client. — [2] —. From modest country homes to urban apartments, we do it all.

We understand from your original inquiry that you intend to sell your apartment soon and are primarily interested in how best to present it to prospective buyers. Here's how our online services work. After completing an online questionnaire, — [3] —. Next, you will be matched with an online professional interior designer who can help you with wall choices and paint colors, window treatments, and floor coverings. You will receive a room layout plan and a personalized list of ideas for furniture and accessories, with all products available for purchase online. — [4] —. As a special bonus, from now until July 1 our online retail partners have agreed to offer a 10 percent discount on products purchased through our links.

Finally, you will be glad to learn that we charge not by the hour but by the room for our design ideas, with the average price being about $275 per room.

We look forward to hearing from you and working with you soon.

Sincerely,

Lydia Matsuda`,
                        translation: "이메일"
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
                        translation: "Candella Interior Design에 대해 무엇이 언급되어 있는가?"
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
                        translation: "Ms. Futrel이 아파트를 재장식하고 싶어하는 이유는?"
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
                        translation: "7월 1일에 무슨 일이 일어날 것인가?"
                    },
                    {
                        id: "171",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"The answers will give us a sense of your taste and requirements.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "TEXT_MESSAGE",
                        content: `Darius Wilkins [11:09 A.M.]
Hi, Ms. Clarke. This is Darius from Roto Bicycle. I promised to check with you before servicing your bicycle.

Lauren Clarke [11:14 A.M.]
Thanks. So, what do you think?

Darius Wilkins [11:15 A.M.]
In addition to the regular maintenance service, I suggest a drivetrain cleaning and new brake mechanisms.

Lauren Clarke [11:16 A.M.]
OK. What does that come to?

Darius Wilkins [11:18 A.M.]
Our comprehensive maintenance service, which includes the same gear and brake adjustments as a regular maintenance service, plus the drivetrain cleaning, is $140. Add $70 for two new brake mechanisms and pads and another $30 for labor charges. So it should come to around $240 altogether. Shall I move forward?

Lauren Clarke [11:21 A.M.]
Wow! That much?

Darius Wilkins [11:22 A.M.]
Especially with that major bicycle race you have ahead of you.

Lauren Clarke [11:24 A.M.]
I know. I guess we have to do it. Please let me know when it's ready.`,
                        translation: "문자 메시지 대화"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is suggested about Ms. Clarke?",
                        options: [
                            { label: "A", text: "She is a professional cyclist." },
                            { label: "B", text: "She recently purchased a bicycle." },
                            { label: "C", text: "She plans to participate in a competition." },
                            { label: "D", text: "She is a regular customer at Roto Bicycle." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Clarke에 대해 무엇이 암시되는가?"
                    },
                    {
                        id: "173",
                        text: "What does Mr. Wilkins recommend?",
                        options: [
                            { label: "A", text: "Replacing some bicycle parts" },
                            { label: "B", text: "Upgrading to a newer bicycle model" },
                            { label: "C", text: "Purchasing safety equipment" },
                            { label: "D", text: "Scheduling service more frequently" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "Mr. Wilkins가 추천하는 것은?"
                    },
                    {
                        id: "174",
                        text: "At 11:18 A.M., what does Mr. Wilkins most likely mean when he writes, \"Shall I move forward\"?",
                        options: [
                            { label: "A", text: "He wants to know if he should begin the work." },
                            { label: "B", text: "He wants to know if he should order parts." },
                            { label: "C", text: "He wants to know if he should contact a supervisor." },
                            { label: "D", text: "He wants to know if he should schedule a delivery." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오전 11시 18분에 Mr. Wilkins가 'Shall I move forward'라고 쓸 때 의미하는 것은?"
                    },
                    {
                        id: "175",
                        text: "What does Ms. Clarke agree to do?",
                        options: [
                            { label: "A", text: "Pay for the recommended service" },
                            { label: "B", text: "Pick up her bicycle the next day" },
                            { label: "C", text: "Provide a deposit for the work" },
                            { label: "D", text: "Wait for a cost estimate" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Clarke가 동의하는 것은?"
                    }
                ]
            }
        ]
    },
    {
        testId: 6,
        title: "Test 6",
        sets: [
            // Questions 147-148: E-mail
            {
                id: "p7-t6-set1",
                questionRange: "147-148",
                passages: [
                    {
                        id: "p7-t6-s1-p1",
                        type: "EMAIL",
                        content: `To: <m_castillo@rapidonet.com.ph>
From: <no-reply@rapidonet.com.ph>
Date: 19 June
Subject: Rapido Net

We have noticed some activity on your account. Your secret-question option for password recovery was updated at 3:16 P.M. today. If you initiated this update, no further action is necessary. If not, we can help you secure your account. Call 919-555-1066 to speak to an account representative.

If you would like to remove the secret-question password recovery option, you may use a verified e-mail address or phone number to access your account instead. Make the process even more secure by setting up two-step verification. Just ask our representative how.

Thank you for trusting Rapido Net as your Internet service provider.`,
                        translation: "이메일"
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
                        translation: "이메일의 목적은?"
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
                        translation: "Rapido Net에 대해 무엇이 언급되어 있는가?"
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
                        content: `To: <luberville@futuremail.co.uk>
From: <support@globaltech.co.uk>
Date: 23 March
Subject: Residential service

Dear Ms. Duberville,

Thanks for your order. We are very pleased to have you as a new customer and are contacting you to request that you set up an appointment for one of our representatives to install a Global Tech modem at your home. Please go online and select a 30-minute window out of the four we have posted to your account.

In preparation for our visit, please clear the area on the wall where you would like us to install the modem. Setting up the modem will take just a few minutes, after which you will be able to enjoy our service.

We will use the phone number listed on your account the morning of the appointment to confirm the visit. Let us know at this time if you have any questions for us.

Sincerely,

Gordon Mackey
Customer Service, Global Tech`,
                        translation: "이메일"
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
                        translation: "Ms. Duberville이 계약했을 가능성이 높은 서비스는?"
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
                        translation: "Ms. Duberville이 선택한 시간에 무슨 일이 일어날 것인가?"
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
                        type: "TEXT_MESSAGE",
                        content: `Katrina Finton [1:46 P.M.]
Hey, Steven. I am moving to a new apartment soon, and the landlord requires a letter verifying my place of employment and my income. I have written up the letter. Would you be willing to sign it today as proof that I work here at Carrino Agency?

Steven Khen [1:48 P.M.]
Double-check with Ariana Seltzer first. The human resources department usually has a form they can provide for you.

Katrina Finton [1:49 P.M.]
I tried that. They don't have a set form.

Steven Khen [1:50 P.M.]
No problem then. Bring your document over.

Steven Khen [1:51 P.M.]
By the way, the meeting about the Zaine Company Web site was moved to 3:00 P.M. You already have all your designs for their Web site ready, right?

Katrina Finton [1:52 P.M.]
I'm all set.`,
                        translation: "온라인 채팅"
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
                        translation: "오후 1시 49분에 Ms. Finton이 'I tried that'이라고 쓸 때 의미하는 것은?"
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
                        translation: "Ms. Finton의 직책은 무엇일 가능성이 높은가?"
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
                        type: "ARTICLE",
                        content: `http://www.marilisprofessionalcoaching.com

Marilis Professional Coaching: January Events

January 15 at 4:30 P.M.—Job Search Support
Learn about the latest tools and techniques to help you find a rewarding entry-level job. Topics include the best Web sites for job announcements and how to use professional organizations to get job leads.

January 16 at 4:30 P.M.—How to Market Yourself
To set yourself apart from other candidates, you have to effectively communicate the value you'll bring to the company. This session will help you successfully promote yourself to potential employers, both in person and through social media.

January 17 at 4:30 P.M.—Interview Strategies
Get tips on interview rules, common questions, and the process for what you need to do before, during, and after a job interview. This session will be interactive, featuring mock interviews with attendees.

Go to www.marilisprofessionalcoaching.com/register to sign up for any of these low-cost events. Note that all January events are virtual.`,
                        translation: "웹 페이지"
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
                        translation: "웹 페이지의 목적은?"
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
                        translation: "웹 페이지에 따르면 1월 17일에 무슨 일이 일어날 것인가?"
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
                        translation: "이벤트에 대해 무엇이 언급되어 있는가?"
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
                        title: "Eaton Development Worth a Look",
                        content: `by Marcus Watanabe

"Ideal residential developments combine twenty-first-century convenience with small-town charm." That is the philosophy found in the brochure of the Homestead at Eaton, a recently completed housing development just outside the town of Eaton. — [1] —.

The community has wide streets, sidewalks, and three small parks surrounding a central square. The square features a café, a grocery store, and a few shops. In the northeast corner of the development, there is an activity complex that includes a movie theater, and swimming pool. — [2] —. "This means you never have to leave the community unless you want to," said Marjorie Solomon, sales director. "Once you visit, you'll realize why so many people are purchasing homes here."

While never leaving your development struck me as an odd idea, the Homestead planners deserve praise for creating a very attractive place to live. The community planners have obviously prioritized the environment. Natural habitats have been carefully preserved, and homes and other structures have been designed to conserve water and energy.

Model homes are currently available for tours. — [4] —. Open homes take place 12:30–4:00 P.M. Saturdays and Sundays. Alternatively, appointments can be made by calling 856-555-0129.`,
                        translation: "리뷰"
                    }
                ],
                questions: [
                    {
                        id: "156",
                        text: "What is indicated about the activity complex?",
                        options: [
                            { label: "A", text: "It has a variety of desirable features." },
                            { label: "B", text: "It is currently under construction." },
                            { label: "C", text: "It has low membership fees." },
                            { label: "D", text: "It is located in the central square." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "활동 복합 시설에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "157",
                        text: "How can a prospective resident learn more about Homestead at Eaton?",
                        options: [
                            { label: "A", text: "By viewing a model home online" },
                            { label: "B", text: "By requesting a brochure" },
                            { label: "C", text: "By visiting the community" },
                            { label: "D", text: "By calling a current homeowner" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "예비 거주자가 Homestead at Eaton에 대해 더 알 수 있는 방법은?"
                    },
                    {
                        id: "158",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Homestead, however, is more than just a pretty place.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `From: Stefan Fonsman <sfonsman@kayhoaconstruction.ca>
To: Rita Palore <rpalore@palorecement.ca>
Subject: Palore Cement
Date: March 2

Dear Ms. Palore,

Thank you for sending your estimate for the cement work on our apartment project in Smithville. The narrative accompanying your bid answered all of our questions, and my team was impressed by your firm's previous work and references. Your company is my first choice to take on the project.

Nonetheless, I still need budget approval from my director, Anita Cho. Your proposed price is a bit steeper than anticipated. I will be speaking with Ms. Cho about this tomorrow morning. Based on your company's reputation for outstanding work, I am confident that she will sign off on your bid.

I expect to get back to you by March 4.

Regards,

Stefan Fonsman
Kayhoa Construction`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "159",
                        text: "What is one purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To introduce a new owner" },
                            { label: "B", text: "To acknowledge receipt of an estimate" },
                            { label: "C", text: "To invite team members to a presentation" },
                            { label: "D", text: "To ask for additional work references" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적 중 하나는?"
                    },
                    {
                        id: "160",
                        text: "When will Mr. Fonsman meet with Ms. Cho?",
                        options: [
                            { label: "A", text: "On March 2" },
                            { label: "B", text: "On March 3" },
                            { label: "C", text: "On March 4" },
                            { label: "D", text: "On March 5" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Mr. Fonsman이 Ms. Cho를 만날 날짜는?"
                    }
                ]
            },
            // Questions 161-163: Announcement
            {
                id: "p7-t6-set7",
                questionRange: "161-163",
                passages: [
                    {
                        id: "p7-t6-s7-p1",
                        type: "ANNOUNCEMENT",
                        title: "City of Altamesa seeks election workers",
                        content: `Who is qualified to be an election worker? Almost anyone, including homemakers and professionals, as well as those who are unemployed, self-employed, or retired.

Requirements:
• Available from 6 A.M. to 1 P.M. or 1 P.M. to 8 P.M. on March 5, June 7, and November 1
• Is not a politician and does not live with or work for a politician
• Is 18 years of age or older
• Is comfortable interacting with the public
• Is organized and detail-oriented

Workers must attend a four-hour pre-election training workshop on March 4 and will be compensated based on their title:
Election Assistant, $18/hour
Election Clerk, $20/hour
Election Chief, $22/hour

For details or to apply, visit www.altamesaelections.gov/apply.`,
                        translation: "공지사항"
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What information is included in the announcement?",
                        options: [
                            { label: "A", text: "Rates of pay" },
                            { label: "B", text: "Work site locations" },
                            { label: "C", text: "The application deadline" },
                            { label: "D", text: "The training workshop's start time" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "공지사항에 포함된 정보는?"
                    },
                    {
                        id: "162",
                        text: "What does the announcement suggest is a requirement for being hired?",
                        options: [
                            { label: "A", text: "Interest in politics" },
                            { label: "B", text: "A high school diploma" },
                            { label: "C", text: "A voter registration card" },
                            { label: "D", text: "Good communication skills" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "공지사항이 고용 요건으로 제시하는 것은?"
                    },
                    {
                        id: "163",
                        text: "What is mentioned about the training workshop?",
                        options: [
                            { label: "A", text: "It is offered three times a year." },
                            { label: "B", text: "It is led by an experienced election official." },
                            { label: "C", text: "It is required for all election workers." },
                            { label: "D", text: "It is available both online and in person." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "교육 워크숍에 대해 언급된 것은?"
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
                        content: `To: Jihyang Lee <jlee@myemail.com>
From: Robert Wang <rwang@frontstreetbank.com>
Date: April 2
Subject: Is VIS for you?

Dear Ms. Lee:

You are now able to enroll in Front Street Bank's new Voice Identification System (VIS). VIS is a fast, convenient, and secure way to access and control your bank accounts by phone. — [1] —. For example, you can make a payment on a Front Street Bank credit card or loan payment. You can check your credit-card transactions by saying "recent transactions." You can even transfer money between accounts by saying "transfer." Discover all the ways VIS can simplify your banking life at www.frontstreetbank.com/VIS. — [2] —.

Your voice identification is stored securely by Front Street Bank and can be used only with Front Street Bank. Call 615-555-0189 to set up VIS for your accounts. — [3] —. If in the future you no longer wish to use VIS to access your account, simply call to have one of our customer-service representatives delete your identification file.

— [4] —. Thank you for being a valued Front Street Bank customer.

Sincerely,

Robert Wang, Branch Manager`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To welcome a new customer" },
                            { label: "B", text: "To report an account error" },
                            { label: "C", text: "To confirm approval of a loan" },
                            { label: "D", text: "To promote a new service" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?"
                    },
                    {
                        id: "165",
                        text: "What is indicated about VIS?",
                        options: [
                            { label: "A", text: "It provides voice access to accounts." },
                            { label: "B", text: "It can be used at various financial institutions." },
                            { label: "C", text: "It requires customers to pay a fee." },
                            { label: "D", text: "It is available only during designated hours." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "VIS에 대해 무엇이 언급되어 있는가?"
                    },
                    {
                        id: "166",
                        text: "What should a customer do to cancel VIS?",
                        options: [
                            { label: "A", text: "Visit a local bank branch" },
                            { label: "B", text: "Make a telephone call" },
                            { label: "C", text: "Complete an online form" },
                            { label: "D", text: "Send an e-mail to customer service" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "고객이 VIS를 취소하려면 어떻게 해야 하는가?"
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"You can perform numerous specific tasks.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        title: "Thumbnail Publishing Ltd.",
                        content: `Four new titles in the Enterprise series have just been released. Buy one, get one 50 percent off when you purchase from our Web site by November 30 (excludes shipping). Order your copies today!

Maestro by Christine Menon
A biography of famous executive Haruto Yamada, with insight into how his career influenced business governance. Paperback €14.99

Working Under Moonbeams by Chang-Ho Jin
Commerce in twentieth-century Korea as illuminated through interviews with former trade company employees. Hardcover €22.99, Audiobook €8.99

The Connections Unseen by Mai Quang Vinh
A collection of transcribed lectures and archival photos from Gloria de Leon's 40-year career as a professor of business administration. Hardcover €25.99

Flashback by Jack Olivier
A former Australian trade commissioner recalls the highs and lows of his diplomatic career in this engaging memoir. Paperback €14.99, Downloadable e-book €9.99`,
                        translation: "광고"
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What is the company offering to customers?",
                        options: [
                            { label: "A", text: "A coupon for a specific author's books" },
                            { label: "B", text: "A discount for ordering two books online" },
                            { label: "C", text: "A reduced price for shipping" },
                            { label: "D", text: "A free copy of the publisher's catalog" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "회사가 고객에게 제공하는 것은?"
                    },
                    {
                        id: "169",
                        text: "Who is Mr. Yamada?",
                        options: [
                            { label: "A", text: "A government agent" },
                            { label: "B", text: "A career counselor" },
                            { label: "C", text: "A biography writer" },
                            { label: "D", text: "A company leader" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Yamada는 누구인가?"
                    },
                    {
                        id: "170",
                        text: "What feature is shared by all of the books described in the advertisement?",
                        options: [
                            { label: "A", text: "They were written by the same author." },
                            { label: "B", text: "They can be read in digital formats." },
                            { label: "C", text: "They focus on business topics." },
                            { label: "D", text: "They were translated into several languages." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "광고에 설명된 모든 책이 공유하는 특징은?"
                    },
                    {
                        id: "171",
                        text: "What book includes historic images?",
                        options: [
                            { label: "A", text: "Maestro" },
                            { label: "B", text: "Working Under Moonbeams" },
                            { label: "C", text: "The Connections Unseen" },
                            { label: "D", text: "Flashback" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "역사적 이미지를 포함하는 책은?"
                    }
                ]
            },
            // Questions 172-175: Text Message Chain
            {
                id: "p7-t6-set10",
                questionRange: "172-175",
                passages: [
                    {
                        id: "p7-t6-s10-p1",
                        type: "TEXT_MESSAGE",
                        content: `Priyanka Kapoor [9:41 A.M.]
We need to talk about the upcoming family physicians conference in London. Where do we stand?

Alonso Gonzalez [9:44 A.M.]
I've already purchased airline tickets for all of us.

Priyanka Kapoor [9:47 A.M.]
Great. Scott Harris will arrange our shuttle from the London airport to the conference venue. Will our mobile phones be functional outside of the Wi-Fi zones?

Alonso Gonzalez [9:50 A.M.]
I've researched our mobile phone provider's international plan. It offers the ability to call and text but provides limited data options with slow download speeds.

Brian Kim [9:53 A.M.]
Let's buy international SIM cards before we leave. We can get the prepaid cards with high-speed data and unlimited calling and texting. We won't have to worry about being connected to Wi-Fi.

Priyanka Kapoor [9:57 A.M.]
That will solve the problem.

Alonso Gonzalez [9:57 A.M.]
Good idea, Brian. Thanks. Now let's discuss meeting up for our meals.

Priyanka Kapoor [9:59 A.M.]
Each day of the conference begins with a continental breakfast in the lobby. Let's meet there in the morning. I know of a great place for dinner, so let's plan on 6:00 P.M. the first evening. We'll decide about the other meals later.`,
                        translation: "문자 메시지 대화"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is the purpose of the text-message chain?",
                        options: [
                            { label: "A", text: "To plan a business trip" },
                            { label: "B", text: "To discuss a presentation" },
                            { label: "C", text: "To review a conference schedule" },
                            { label: "D", text: "To evaluate a service provider" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_PURPOSE",
                        translation: "문자 메시지 대화의 목적은?"
                    },
                    {
                        id: "173",
                        text: "What does Mr. Gonzalez indicate about the mobile phone provider's international plan?",
                        options: [
                            { label: "A", text: "It is more expensive than purchasing SIM cards." },
                            { label: "B", text: "It does not allow Internet access." },
                            { label: "C", text: "It has some limitations." },
                            { label: "D", text: "It requires advance registration." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Gonzalez가 휴대폰 제공업체의 국제 요금제에 대해 언급하는 것은?"
                    },
                    {
                        id: "174",
                        text: "At 9:57 A.M., what does Ms. Kapoor most likely mean when she writes, \"That will solve the problem\"?",
                        options: [
                            { label: "A", text: "The group will have reliable phone service." },
                            { label: "B", text: "The group will save money on the trip." },
                            { label: "C", text: "Mr. Harris will arrange transportation." },
                            { label: "D", text: "Mr. Gonzalez will purchase the tickets." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 57분에 Ms. Kapoor가 'That will solve the problem'이라고 쓸 때 의미하는 것은?"
                    },
                    {
                        id: "175",
                        text: "Where will the group meet for breakfast?",
                        options: [
                            { label: "A", text: "At the airport" },
                            { label: "B", text: "At a restaurant" },
                            { label: "C", text: "At the conference venue" },
                            { label: "D", text: "At a coworker's home" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "그룹이 아침 식사를 위해 만날 장소는?"
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
                        title: "NOTICE",
                        content: `As part of our routine maintenance of Selino Apartments, all public areas of our building will be painted according to the following schedule:

• Stairwells, first and second floors: 12 April
• Hallways, first and second floors: 13 April
• Stairwells, third and fourth floors: 14 April
• Hallways, third and fourth floors: 15 April

The elevators will be available during this time. Please use caution, and do not touch any wet paint.

Management, Selino Apartments`,
                        translation: "공지사항"
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
                        classification: "P7_INFERENCE",
                        translation: "공지사항의 대상은 누구일 가능성이 높은가?"
                    },
                    {
                        id: "148",
                        text: "When will work on the stairwells of all floors most likely be completed?",
                        options: [
                            { label: "A", text: "On April 12" },
                            { label: "B", text: "On April 13" },
                            { label: "C", text: "On April 14" },
                            { label: "D", text: "On April 15" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "모든 층의 계단 작업이 완료될 날짜는?"
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
                        type: "ADVERTISEMENT",
                        title: "Jin-Hwa Grill",
                        content: `Serving the finest Korean cuisine in northern California for over 30 years

Come celebrate the reopening of our newly remodeled restaurant on Lakeside Drive! Purchase any two dinners and enjoy a complimentary appetizer platter during the entire month of May.

Valid only at Jin-Hwa Grill, 4104 Lakeside Drive, Oakland, CA. Coupon does not apply to takeout orders. Visit www.jin-hwagrill.com for a list of all our locations, hours of operation, and menus.`,
                        translation: "쿠폰"
                    }
                ],
                questions: [
                    {
                        id: "149",
                        text: "How can people receive the benefit from the coupon?",
                        options: [
                            { label: "A", text: "By placing a takeout order" },
                            { label: "B", text: "By spending a minimum amount of money" },
                            { label: "C", text: "By ordering two meals" },
                            { label: "D", text: "By attending the opening day celebration" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "쿠폰 혜택을 받으려면 어떻게 해야 하는가?"
                    },
                    {
                        id: "150",
                        text: "What is mentioned about Jin-Hwa Grill?",
                        options: [
                            { label: "A", text: "It is celebrating an anniversary." },
                            { label: "B", text: "It has more than one location." },
                            { label: "C", text: "It recently began serving Korean food." },
                            { label: "D", text: "It has expanded its hours of operation." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Jin-Hwa Grill에 대해 언급된 것은?"
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
                        content: `To: Binda Gil <bgil@opalmail.com>
From: Neela Balay <n_balay@celebrate.com>
Date: June 18
Subject: Follow-up

Dear Ms. Gil,

Regarding our telephone conversation earlier today, here in writing is the change I would like to make to Saturday's delivery.

I am requesting that you now deliver the flowers to the Grand Dining Room at the Kaltan Hotel instead of the Saji Banquet Hall. I apologize for this last-minute switch, but the banquet hall manager contacted me just last night to inform me about an electrical system malfunction that will require a weekend repair. Since the office party I am planning cannot be postponed, I have had to reserve this other venue.

I would appreciate receiving the delivery by 4:00 P.M.

Best regards,

Neela Balay`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "Why did Ms. Balay send an e-mail to Ms. Gil?",
                        options: [
                            { label: "A", text: "To reschedule a weekend business trip" },
                            { label: "B", text: "To invite her to an office party" },
                            { label: "C", text: "To request the services of an electrician" },
                            { label: "D", text: "To confirm some spoken instructions" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "Ms. Balay가 Ms. Gil에게 이메일을 보낸 이유는?"
                    },
                    {
                        id: "152",
                        text: "What does Ms. Balay expect to receive on Saturday afternoon?",
                        options: [
                            { label: "A", text: "Flowers" },
                            { label: "B", text: "Tickets" },
                            { label: "C", text: "A signed contract" },
                            { label: "D", text: "An updated cost estimate" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Balay가 토요일 오후에 받을 것으로 예상하는 것은?"
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
                        type: "TEXT_MESSAGE",
                        content: `Ae-Cha Kim [9:16 A.M.]
Good morning. I have an issue with an order I placed on the Winter Wear Web site.

Kelvin Long [9:18 A.M.]
Good morning. How can I help you?

Ae-Cha Kim [9:20 A.M.]
Well, I ordered some gloves two weeks ago, and they still haven't arrived.

Kelvin Long [9:21 A.M.]
I'm sorry to hear that. Did you get an order number?

Ae-Cha Kim [9:22 A.M.]
It's ADF193.

Kelvin Long [9:23 A.M.]
Thanks.

Kelvin Long [9:26 A.M.]
This is very unusual. The system is showing that the order was fulfilled. I'm not sure why it hasn't left the warehouse yet. I can have another pair of gloves sent to you with rush shipping, at no extra charge.

Ae-Cha Kim [9:27 A.M.]
That would be great! Thanks!`,
                        translation: "온라인 채팅"
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What problem does Ms. Kim have?",
                        options: [
                            { label: "A", text: "She received the wrong order." },
                            { label: "B", text: "Her order has not arrived." },
                            { label: "C", text: "An item was damaged in transport." },
                            { label: "D", text: "An item is missing from her order." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Ms. Kim의 문제는 무엇인가?"
                    },
                    {
                        id: "154",
                        text: "At 9:26 A.M., what does Mr. Long most likely mean when he writes, \"This is very unusual\"?",
                        options: [
                            { label: "A", text: "He is frustrated by the slow computer system." },
                            { label: "B", text: "He is sorry about taking so long to answer Ms. Kim's question." },
                            { label: "C", text: "He is surprised about the warehouse issue." },
                            { label: "D", text: "He is confused about which style of gloves was ordered." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오전 9시 26분에 Mr. Long이 'This is very unusual'이라고 쓸 때 의미하는 것은?"
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
                        content: `To: Jessica Yu <jyu@myemail.com>
From: Customer Service <cs@velascobank.com>
Date: July 15
Subject: Customer account security

Dear Ms. Yu,

For security reasons we need our customers to review their contact information with Velasco Bank every year. — [1] —. The deadline to complete this update is July 20. — [2] —. You may check your information on our Web site at www.velascobank.com/myaccount, or you can do so on the Velasco Bank mobile app. Simply log in to your digital banking account, go to "Settings," and then go to "Contact." — [3] —. Review your phone number and e-mail address to make sure they are both up-to-date. Then select them as your primary contact methods. If you are not yet enrolled in digital banking, we recommend signing up online at www.velascobank.com/myaccount.

— [4] —. If you have any questions, please visit any of our branches or call us at 410-555-1000, Monday through Friday, 7:00 A.M. to 5:00 P.M.

Thank you,

Velasco Bank Customer Service`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To inquire about an account closure" },
                            { label: "B", text: "To inform customers of a change in banking hours" },
                            { label: "C", text: "To ask a customer to confirm personal data" },
                            { label: "D", text: "To provide information about a bank deposit" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?"
                    },
                    {
                        id: "156",
                        text: "According to the e-mail, what should a customer do to register for digital banking?",
                        options: [
                            { label: "A", text: "Go to the bank's Web site" },
                            { label: "B", text: "Contact a customer service representative" },
                            { label: "C", text: "Visit a local bank branch" },
                            { label: "D", text: "Install a mobile app" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "이메일에 따르면 고객이 디지털 뱅킹에 등록하려면 어떻게 해야 하는가?"
                    },
                    {
                        id: "157",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"This can be done in one of two ways.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "ADVERTISEMENT",
                        title: "Sumner Woodcrafting",
                        content: `Sumner Woodcrafting of Memphis, Tennessee, was established nearly 45 years ago by Kiran Sumner, with the goal of providing personalized service to customers seeking high-quality, handmade furniture. Now semiretired, Mr. Sumner still takes orders and responds to questions himself through the company's customer-service telephone line at 901-555-0185 on Thursdays and Fridays. Sumner Woodcrafting offers a wide selection of custom-made bedroom sets, tables, desks, cabinetry, and more—all made from high-quality solid woods.

Prices for handcrafted furniture are naturally higher than for furniture that is mass-produced in a factory. Because our master crafters do exceptionally fine work, our customers never regret spending a bit more for pieces built to last for generations.

Note that it can take up to two months to create a piece of furniture once it is ordered. Delivery fees are based on distance from our workshop. Unpacking and setting up the furniture is an additional $50.

For photos of our workshop, artisan biographies, customer reviews, and ordering information, please visit us online at www.sumnerwoodcrafting.com.`,
                        translation: "브로셔"
                    }
                ],
                questions: [
                    {
                        id: "158",
                        text: "What is mentioned about Sumner Woodcrafting?",
                        options: [
                            { label: "A", text: "Its prices are highly competitive." },
                            { label: "B", text: "It offers free delivery in Memphis." },
                            { label: "C", text: "Its founder handles telephone inquiries." },
                            { label: "D", text: "It allows customers to tour its workshop." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_DETAIL",
                        translation: "Sumner Woodcrafting에 대해 언급된 것은?"
                    },
                    {
                        id: "159",
                        text: "The word \"fine\" in paragraph 2, line 2, is closest in meaning to",
                        options: [
                            { label: "A", text: "small" },
                            { label: "B", text: "sharp" },
                            { label: "C", text: "skillful" },
                            { label: "D", text: "agreeable" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_VOCABULARY",
                        translation: "'fine'과 의미가 가장 가까운 것은?"
                    },
                    {
                        id: "160",
                        text: "What is suggested about Sumner Woodcrafting's products?",
                        options: [
                            { label: "A", text: "They are extremely long-lasting." },
                            { label: "B", text: "They contain both natural and human-made materials." },
                            { label: "C", text: "They often require assembly after delivery." },
                            { label: "D", text: "They are usually ordered for offices." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Sumner Woodcrafting의 제품에 대해 암시되는 것은?"
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
                        content: `COLLINSVALE (28 March)—Over the last decade, instability in the pricing of raw materials has become the biggest concern for manufacturers. The issue now surpasses recruitment and technology, which had previously been ranked by businesses as the top two concerns respectively.

The reasons are not difficult to understand. For electronics manufacturers, materials typically represent 20 percent of all expenses, while makers of processed food can spend anywhere between 40 and 60 percent on materials. Thus, even a 10 percent rise in the cost of sugar can dramatically affect a factory's bottom line. Companies that can temper the impact of price increases can lessen the effects of market volatility, but even the best forecasting cannot anticipate every change in the marketplace.`,
                        translation: "기사"
                    }
                ],
                questions: [
                    {
                        id: "161",
                        text: "What is the article mainly about?",
                        options: [
                            { label: "A", text: "An improvement in manufacturing methods" },
                            { label: "B", text: "A recent shift in consumer preferences" },
                            { label: "C", text: "The introduction of environmental regulations" },
                            { label: "D", text: "The changes in costs faced by producers" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_PURPOSE",
                        translation: "기사의 주제는?"
                    },
                    {
                        id: "162",
                        text: "Why does the writer mention electronics manufacturers?",
                        options: [
                            { label: "A", text: "To illustrate innovation over ten years" },
                            { label: "B", text: "To show the impact of global trade" },
                            { label: "C", text: "To explain recent staffing difficulties" },
                            { label: "D", text: "To make a comparison between industries" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "작가가 전자 제조업체를 언급하는 이유는?"
                    },
                    {
                        id: "163",
                        text: "The word \"temper\" in paragraph 2, line 9, is closest in meaning to",
                        options: [
                            { label: "A", text: "set" },
                            { label: "B", text: "toughen" },
                            { label: "C", text: "moderate" },
                            { label: "D", text: "combine" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_VOCABULARY",
                        translation: "'temper'와 의미가 가장 가까운 것은?"
                    }
                ]
            },
            // Questions 164-167: Announcement
            {
                id: "p7-t7-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t7-s8-p1",
                        type: "ANNOUNCEMENT",
                        content: `The Lowenstein Bookstore in Mission Bay invites you to this month's book discussion featuring author Hilda Flores. The event will be held on Thursday, April 10, from 7:00 P.M. to 8:30 P.M. Ms. Flores will talk about her new novel, Grinding the Gears. — [1] —. The latest adventure in the popular Inspector Swenson series, Grinding the Gears finds the beloved inspector investigating strange equipment malfunctions at a national physics research laboratory. — [2] —.

Ms. Flores will discuss the background research she performed while writing the book. — [3] —. A question and answer session will follow the presentation. The event is free for all to attend. — [4] —. The bookstore requires that attendees register at least one day in advance.`,
                        translation: "공지사항"
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "What is being announced?",
                        options: [
                            { label: "A", text: "The opening of a new bookstore" },
                            { label: "B", text: "A presentation by a book author" },
                            { label: "C", text: "A book describing a research project" },
                            { label: "D", text: "An upcoming movie based on a book" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "공지되는 내용은?"
                    },
                    {
                        id: "165",
                        text: "What type of book is Grinding the Gears?",
                        options: [
                            { label: "A", text: "A nonfiction story" },
                            { label: "B", text: "A biography of a scientist" },
                            { label: "C", text: "A collection of short stories" },
                            { label: "D", text: "A mystery novel" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "Grinding the Gears는 어떤 종류의 책인가?"
                    },
                    {
                        id: "166",
                        text: "What is indicated about registration?",
                        options: [
                            { label: "A", text: "It closes on April 9." },
                            { label: "B", text: "It requires payment of a fee." },
                            { label: "C", text: "It is optional but encouraged." },
                            { label: "D", text: "It cannot be completed online." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "등록에 대해 언급된 것은?"
                    },
                    {
                        id: "167",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Part of her fact-finding involved interviewing government scientists.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `To: Customer Service <customerservice@kishintech.com>
From: Dmytro Petrov <d.petrov@silkmail.com>
Date: November 5
Subject: Assistance with Kishin XT20 digital recorder

To Whom It May Concern:

I purchased the Kishin XT20 digital recorder to record several days' worth of conference presentations. Now, after my first day at the event, I am trying to transfer the audio files to my laptop, but I am not having any luck. I have followed all the instructions in the user manual as well as the tips found in the FAQ section of the product's Web page. I have even tried alternative cords and the laptops in the hotel's business center, so I do not believe computer hardware to be the issue.

I am supposed to cover the remaining two days of this conference for work. My business partners expect me to return with as much information as I can. The Kishin XT20 digital recorder is of no use to me if I cannot properly share the files. Can you please help?

Best regards,

Dmytro Petrov`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "168",
                        text: "What problem does Mr. Petrov have with his device?",
                        options: [
                            { label: "A", text: "He cannot move audio files to his computer." },
                            { label: "B", text: "He dislikes its appearance." },
                            { label: "C", text: "He is unable to prepare files." },
                            { label: "D", text: "He is unsatisfied with the sound quality." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "Mr. Petrov가 장치에 대해 가진 문제는?"
                    },
                    {
                        id: "169",
                        text: "Why does Mr. Petrov mention a Web page?",
                        options: [
                            { label: "A", text: "To suggest that an image is misleading" },
                            { label: "B", text: "To explain that he obtained additional information" },
                            { label: "C", text: "To recommend changing a product description" },
                            { label: "D", text: "To inquire about compatible accessories" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Petrov가 웹 페이지를 언급하는 이유는?"
                    },
                    {
                        id: "170",
                        text: "The word \"cover\" in paragraph 2, line 1, is closest in meaning to",
                        options: [
                            { label: "A", text: "protect" },
                            { label: "B", text: "contain" },
                            { label: "C", text: "extend over" },
                            { label: "D", text: "report on" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_VOCABULARY",
                        translation: "'cover'와 의미가 가장 가까운 것은?"
                    },
                    {
                        id: "171",
                        text: "What is true about Mr. Petrov?",
                        options: [
                            { label: "A", text: "He volunteered to try some equipment." },
                            { label: "B", text: "He is currently traveling with his business partners." },
                            { label: "C", text: "He will share conference material with his colleagues." },
                            { label: "D", text: "He will soon receive a new laptop from his company." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Petrov에 대해 사실인 것은?"
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
                        type: "TEXT_MESSAGE",
                        content: `Kristin Burton [8:16 A.M.]
This is my first time posting on this small-business forum. Has anyone here experienced problems when ordering from Atlara's credit card readers?

Marcos Menke [9:04 A.M.]
Are you referring to the little unit that attaches to your mobile phone or the larger, stand-alone tablet model?

Kristin Burton [9:30 A.M.]
The phone unit. I started an online shop using the Atlara Web hosting service and added pictures of the necklaces and rings I create. But most of my sales are still in person. So I just need a way to accept in-person payments when I'm out at fairs or markets.

Marcos Menke [10:19 A.M.]
Just go to www.atlara.com/pos/hardware and add what you want to your cart.

Kristin Burton [11:21 A.M.]
That's the problem. The system won't let me order it. I get the error message "Your account cannot be verified."

Suzanne Shroer [11:52 A.M.]
I think I know. You have to upload scans of your business registration, a government photo ID, and a statement from your business bank account.

Kristin Burton [12:23 P.M.]
I already did all that, and I still got the error message.

Suzanne Shroer [12:33 P.M.]
If that is the case, try logging back in and following the process again.

Cindy Acosta [1:05 P.M.]
You probably need to call the support line. I found them to be very helpful with my issues a few months ago.

Kristin Burton [1:10 P.M.]
I've spoken with three people already.`,
                        translation: "온라인 채팅"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What does Ms. Burton sell?",
                        options: [
                            { label: "A", text: "Clothing" },
                            { label: "B", text: "Jewelry" },
                            { label: "C", text: "Furniture" },
                            { label: "D", text: "Artwork" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Ms. Burton이 판매하는 것은?"
                    },
                    {
                        id: "173",
                        text: "What problem is Ms. Burton having?",
                        options: [
                            { label: "A", text: "She cannot access her online shop." },
                            { label: "B", text: "She is unable to purchase a device." },
                            { label: "C", text: "She received a damaged product." },
                            { label: "D", text: "She was charged an incorrect amount." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_DETAIL",
                        translation: "Ms. Burton이 겪고 있는 문제는?"
                    },
                    {
                        id: "174",
                        text: "At 12:33 P.M., what does Ms. Shroer suggest that Ms. Burton do?",
                        options: [
                            { label: "A", text: "Try the ordering process again" },
                            { label: "B", text: "Contact her bank" },
                            { label: "C", text: "Upload additional documents" },
                            { label: "D", text: "Visit a retail location" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "오후 12시 33분에 Ms. Shroer가 Ms. Burton에게 제안하는 것은?"
                    },
                    {
                        id: "175",
                        text: "At 1:10 P.M., what does Ms. Burton most likely mean when she writes, \"I've spoken with three people already\"?",
                        options: [
                            { label: "A", text: "She has already contacted customer service." },
                            { label: "B", text: "She has received advice from forum members." },
                            { label: "C", text: "She has discussed the issue with her colleagues." },
                            { label: "D", text: "She has met with Atlara representatives." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "오후 1시 10분에 Ms. Burton이 'I've spoken with three people already'라고 쓸 때 의미하는 것은?"
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
                        content: `12 Tilton Street, Tenafly, NJ 07670
www.zoyasbasket.com

Do you love all the products at Zoya's Basket? Here's a reason to love them even more! Sign up for our reward program and get up to 5% back on everything Zoya's offers! Use your cash rewards in the store or online.

• Vitamins and supplements
• Nut and seed butters
• Jams, jellies, and fruit spreads
• Whole grains and cereals
• Health and wellness products

We ship throughout New Jersey. Shipping is free with a minimum $35 purchase. Please allow up to three days for delivery.`,
                        translation: "광고"
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What is one purpose of the advertisement?",
                        options: [
                            { label: "A", text: "To announce a sale on discontinued products" },
                            { label: "B", text: "To ask consumers for feedback on their favorite items" },
                            { label: "C", text: "To encourage consumers to join a reward program" },
                            { label: "D", text: "To advertise a special offer on fresh fruits and vegetables" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_PURPOSE",
                        translation: "광고의 목적 중 하나는?"
                    },
                    {
                        id: "148",
                        text: "What is indicated about deliveries?",
                        options: [
                            { label: "A", text: "They require a signature." },
                            { label: "B", text: "They arrive within three days." },
                            { label: "C", text: "They are free with a coupon code." },
                            { label: "D", text: "They must be scheduled at the time the order is placed." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "배송에 대해 언급된 것은?"
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
                        content: `Host your next business conference at our five-star hotel on the beautiful Messenian Gulf. Our facility has spacious meeting rooms overlooking the sea and the picturesque beach. The hotel is the perfect setting for a corporate retreat for your staff. Enjoy a team bonding experience while taking advantage of gourmet meals, great views, and first-rate entertainment.

Contact: Helena Samaras, Hospitality Manager
hsamaras@grecianterrace.com.gr
+30 2721 093365`,
                        translation: "광고"
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
                        translation: "광고의 대상은 누구일 가능성이 높은가?"
                    },
                    {
                        id: "150",
                        text: "What is indicated about the Grecian Terrace Hotel?",
                        options: [
                            { label: "A", text: "It just renovated its dining room." },
                            { label: "B", text: "It is under new management." },
                            { label: "C", text: "It has several locations." },
                            { label: "D", text: "It is near the seaside." }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "Grecian Terrace Hotel에 대해 언급된 것은?"
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
                        type: "ARTICLE",
                        title: "Cozilete Slippers\nSocial Media Report for December",
                        content: `Metric | Results
Number of posts this month | 8
For each post, average number of times the post was viewed | 223,648
Average number of individuals who viewed each post | 87,122
Average number of advertisements for Cozilete Slippers per post | 1
Average number of times a link to an advertisement in a post was clicked | 24,015
Average total interactions per post (number of likes, shares, and comments) | 674

Data for corporate internal use only`,
                        translation: "보고서"
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
                        translation: "보고서의 대상은 누구일 가능성이 높은가?"
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
                        translation: "보고서에서 언급된 것은?"
                    }
                ]
            },
            // Questions 153-154: Text Message Chain
            {
                id: "p7-t8-set4",
                questionRange: "153-154",
                passages: [
                    {
                        id: "p7-t8-s4-p1",
                        type: "TEXT_MESSAGE",
                        content: `Keri Mohan [12:40 P.M.]
I'm nearly done readying the jewelry orders for shipment. I've inserted a packing slip and business card in each box. Should anything else be included before I seal them up and drop them off at the post office?

Sujay Rishi [12:42 P.M.]
Can you put a Rishi Gemstones magnet in each box?

Keri Mohan [12:43 P.M.]
Certainly! I'll do that right away.

Keri Mohan [12:50 P.M.]
Oh no, we're running low on shipping labels. I can order some more.

Sujay Rishi [12:54 P.M.]
Actually, we have an entire bin of them. Check the supply closet. Let me know if you can't find them.`,
                        translation: "문자 메시지 대화"
                    }
                ],
                questions: [
                    {
                        id: "153",
                        text: "What does Ms. Mohan ask about?",
                        options: [
                            { label: "A", text: "What to include in some boxes" },
                            { label: "B", text: "When an order will be shipped" },
                            { label: "C", text: "How to safely package the jewelry" },
                            { label: "D", text: "Where the business cards are stored" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_DETAIL",
                        translation: "Ms. Mohan이 묻는 것은?"
                    },
                    {
                        id: "154",
                        text: "At 12:54 P.M., what does Mr. Rishi most likely mean when he writes, \"Actually, we have an entire bin of them\"?",
                        options: [
                            { label: "A", text: "Ms. Mohan can give away the magnets." },
                            { label: "B", text: "Ms. Mohan can reorganize the supply closet." },
                            { label: "C", text: "Ms. Mohan should not order more labels." },
                            { label: "D", text: "Ms. Mohan should not go to the post office." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "오후 12시 54분에 Mr. Rishi가 'Actually, we have an entire bin of them'이라고 쓸 때 의미하는 것은?"
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
                        title: "Twin Lakes\nThe best place to live in Tielersburg!",
                        content: `Please join the staff of Twin Lakes for our monthly resident information meeting.

Date and time: Tuesday, March 21, 7:00 P.M.–8:30 P.M.
Location: Community Center conference room (across the hall from the rental office)

Agenda items and presenters:
1. Property enhancements: overview of plans for fence repair and new landscaping in the pool area—Mr. Abgarian, groundskeeping and maintenance supervisor

2. Community garden: details for garden plot sign-up and annual biggest tomato contest—Ms. Kantor, events and activities coordinator

3. Water main work on Huron Street: progress update—Mr. Carter, Department of Public Works, City of Tielersburg

4. Utility rates: discussion about the rise in quarterly utility fees charged to Twin Lakes property management by the city—Mr. Underwood, general manager

5. New business: creation of Resident Advisory Board—Ms. Davis, leasing and resident relations manager

6. Questions and comments

7. Adjournment`,
                        translation: "공지사항"
                    }
                ],
                questions: [
                    {
                        id: "155",
                        text: "What most likely is Twin Lakes?",
                        options: [
                            { label: "A", text: "A group of shops" },
                            { label: "B", text: "A gardening center" },
                            { label: "C", text: "An amusement park" },
                            { label: "D", text: "A housing complex" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "Twin Lakes는 무엇일 가능성이 높은가?"
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
                        translation: "회의에서 Mr. Abgarian의 역할은?"
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
                        translation: "Twin Lakes 외부에서 직무를 수행하는 사람은?"
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
                        content: `The following is a partial list of rules you must follow while in the laboratory. Before beginning work in the lab, all workers are also required to read our most recent safety manual and complete our basic safety course. Please contact Mr. Kang if you need to complete these prerequisites.

• Wear mandatory lab coat, goggles, and footwear.
• Follow directions on posted signs in case of an accident.
• Know how to properly operate all safety equipment (fire extinguishers, eye wash stations, etc.).
• Know the location of all emergency exits.
• Refrain from eating or drinking in the laboratory.
• Report any unsafe conditions, accidents, or spills immediately to your supervisor.
• In an emergency, exit immediately, call emergency services, and then contact your supervisor.`,
                        translation: "공지사항"
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
                        translation: "공지사항의 대상은 누구일 가능성이 높은가?"
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
                        translation: "Mr. Kang에게 연락하는 이유는?"
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
                        translation: "실험실에서 일할 때 명시되지 않은 규칙은?"
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
                        content: `To: All staff
From: Liza Chu, IT Department
Date: June 8, 1:13 P.M.
Subject: Network issues

Good afternoon everyone. — [1] —.

At 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building. — [2] —. We quickly received reports of printer malfunctions, missing network drives, difficulty loading e-mail messages, and other problems. — [3] —.

We have now stabilized the situation, but if you should still encounter these or similar issues, please attempt first to address them by restarting your computer. — [4] —.`,
                        translation: "이메일"
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
                        translation: "이메일의 주제는?"
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
                        translation: "Ms. Chu가 이메일을 보내기 전에 일어난 일은?"
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
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
                    }
                ]
            },
            // Questions 164-167: Text Message Chain
            {
                id: "p7-t8-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t8-s8-p1",
                        type: "TEXT_MESSAGE",
                        content: `Sunisa Sommer [1:30 P.M.]
Hi Raphael and Hamed. Can either of you tell me where I can find the laptop that's usually in Conference Room B? It isn't on the cart with the projector.

Raphael Luongo [1:32 P.M.]
I used it for my presentation on Monday, but I left it in the conference room.

Hamed Gabr [1:32 P.M.]
I believe Martin Dabliz was going to ask someone in the IT department to look at it because it wasn't working properly.

Sunisa Sommer [1:34 P.M.]
Got it. Do you know if a repair ticket was submitted?

Hamed Gabr [1:35 P.M.]
I don't think Martin knows all the IT procedures. He's only in his first week.

Sunisa Sommer [1:37 P.M.]
Right. We should make sure that information is included in the employee orientation materials.

Raphael Luongo [1:41 P.M.]
I don't see a ticket on the IT site. I'll reach out to IT and take care of that now.`,
                        translation: "문자 메시지 대화"
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
                        translation: "Ms. Sommer가 동료들에게 메시지를 보내는 이유는?"
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
                        translation: "오후 1시 34분에 Ms. Sommer가 'Got it'이라고 쓸 때 의미하는 것은?"
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
                        translation: "Mr. Dabliz에 대해 암시되는 것은?"
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
                        translation: "Mr. Luongo가 다음에 할 일은?"
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
                        content: `To: Lindsey Galloway <lgalloway@sportsupplies.com>
From: Samuel Bains <samuelbains@exertreks.com>
Date: August 16
Subject: Exertreks boots for winter activities

Hello Ms. Galloway,

I am sorry I missed your call this morning. The answers to your questions are given below.

We here at Exertreks have recently completed the development of our Winter Hikers. Like our waterproof Trekkers, they are waterproof, but the Winter Hikers are most appropriate for use in extreme cold. The boots are lined with a proprietary material that is highly effective at retaining body heat. They are also durable, light, and comfortable. For orders of 50 pairs or more of the Winter Hikers, the wholesale price per pair is $65. The recommended retail price is $89. We can deliver your order in two weeks.

Presale reviews of the boots by experts in outdoor sports have been enthusiastic. You can expect the Winter Hikers to be a big hit with your customers this year. I look forward to hearing from you soon to answer any other questions and to help you with your first order.

Sincerely,

Samuel Bains`,
                        translation: "이메일"
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
                        translation: "Mr. Bains의 이메일에서 암시되는 것은?"
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
                        translation: "부츠에 대해 언급되지 않은 것은?"
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
                        classification: "P7_VOCABULARY",
                        translation: "'hit'과 의미가 가장 가까운 것은?"
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
                        translation: "Mr. Bains가 Ms. Galloway에게 원하는 것은?"
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
                        type: "ARTICLE",
                        content: `https://www.hurnhamhistoricalsociety.org/news

Tuesday Evening Lecture Series

We are pleased to announce that our third annual lecture series will be hosted by the Hurnham Heritage Museum on Tuesday evenings over the next six weeks. — [1] —. Each guest speaker will focus on objects from the museum's permanent collection. — [2] —. The first lecture, on June 15 at 7:00 P.M., features Georgia Hinds, head curator of the Knowles Art Gallery. — [3] —. Ms. Hinds will use a writing desk, a chest, and a household table to discuss what furniture can reveal to us about the lives of the first Hurnham residents over 200 years ago.

The lecture series is open to the public and includes free admission to the Hurnham Heritage Museum. — [4] —. The Fasseller Café, next door to the museum, will stay open late on Tuesdays to accommodate lecture attendees and the general public.

Posted on June 8`,
                        translation: "웹 페이지"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is the purpose of the Web page?",
                        options: [
                            { label: "A", text: "To advertise a new museum" },
                            { label: "B", text: "To announce a series of talks" },
                            { label: "C", text: "To describe a historical collection" },
                            { label: "D", text: "To promote a restaurant" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        translation: "웹 페이지의 목적은?"
                    },
                    {
                        id: "173",
                        text: "What is indicated about Ms. Hinds?",
                        options: [
                            { label: "A", text: "She is a museum director." },
                            { label: "B", text: "She works at an art gallery." },
                            { label: "C", text: "She is a furniture maker." },
                            { label: "D", text: "She owns a restaurant." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Hinds에 대해 언급된 것은?"
                    },
                    {
                        id: "174",
                        text: "What is suggested about the Fasseller Café?",
                        options: [
                            { label: "A", text: "It is inside the museum." },
                            { label: "B", text: "It recently changed owners." },
                            { label: "C", text: "It usually closes before 7:00 P.M." },
                            { label: "D", text: "It serves traditional Hurnham dishes." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        translation: "Fasseller Café에 대해 암시되는 것은?"
                    },
                    {
                        id: "175",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Admission is free, but seating is limited.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
                    }
                ]
            }
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
                        content: `Monday through Friday from 11:00 A.M. to 3:00 P.M.

For only $8, combine the soup of the day with one of the following items:

Turkey Sandwich – Turkey, avocado, tomato, lettuce, and mayonnaise on wheat bread

Vegetable Panini – Sourdough bread filled with tomato, cucumber, spinach, and mayonnaise, then grilled

Mushroom Chicken Cavatappi – Chicken in a mushroom, celery, and onion sauce, served over S-shaped pasta

Vegetable Wrap – Fresh tomato, cucumber, and carrots with hummus (made with our secret recipe) on flatbread`,
                        translation: "메뉴"
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
                        translation: "각 점심 스페셜에 포함되는 것은?"
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
                        translation: "Carina's Café에서만 구할 수 있는 재료가 포함된 메뉴는?"
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
                        content: `This workshop helps fitness professionals become certified aqua instructors by providing them with the skills to design challenging and effective aquatic classes. Join instructor Desbonte Smith for a full-day course to learn a sequence of pool-based workouts that will motivate your students. Mr. Smith started his journey to instructor certification by taking classes at Valley Floor Fitness. He is also a professor at Wilkinson University.

The workshop costs $99 and will be held at Valley Floor Fitness in Missoula on August 27 from 9 A.M. to 5 P.M. For more information and to register, e-mail Maya Cramer at certification@valleyfloorfitness.com.`,
                        translation: "광고"
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
                        translation: "'design'과 의미가 가장 가까운 것은?"
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
                        translation: "워크숍에 대해 언급된 것은?"
                    }
                ]
            },
            // Questions 151-152: Text Message Chain
            {
                id: "p7-t9-set3",
                questionRange: "151-152",
                passages: [
                    {
                        id: "p7-t9-s3-p1",
                        type: "TEXT_MESSAGE",
                        content: `Hyun-Jun Cho [3:27 P.M.]
I'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M. A friend of mine is coming to town then, and he's only going to be here for one day. I was wondering if I could switch shifts with you. I can work on Sunday.

Stephanie Duchemin [3:29 P.M.]
Saturday is good for me. I hope you don't have a Sunday like last week. It was so busy. All the doctors attending the medical conference were checking in at the front desk.

Hyun-Jun Cho [3:31 P.M.]
And I heard that all the accountants from the other conference were also at the front desk reviewing their room charges at the same time!

Stephanie Duchemin [3:32 P.M.]
The lobby was certainly bustling.

Hyun-Jun Cho [3:34 P.M.]
Thank you for helping me out. I haven't seen my friend Kai since we graduated from university.`,
                        translation: "문자 메시지 대화"
                    }
                ],
                questions: [
                    {
                        id: "151",
                        text: "At 3:29 P.M., what does Ms. Duchemin most likely mean when she writes, \"Saturday is good for me\"?",
                        options: [
                            { label: "A", text: "She prefers to work morning shifts." },
                            { label: "B", text: "She is able to do a favor for Mr. Cho." },
                            { label: "C", text: "She will attend a conference." },
                            { label: "D", text: "She would like to meet Mr. Cho's friend." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오후 3시 29분에 Ms. Duchemin이 'Saturday is good for me'라고 쓸 때 의미하는 것은?"
                    },
                    {
                        id: "152",
                        text: "Where most likely do Mr. Cho and Ms. Duchemin work?",
                        options: [
                            { label: "A", text: "At a hotel" },
                            { label: "B", text: "At a university" },
                            { label: "C", text: "At a medical center" },
                            { label: "D", text: "At an accounting firm" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Cho와 Ms. Duchemin이 일하는 곳은?"
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
                        content: `To: Madalena Navas <mnavas@cordovacreations.com>
From: Hugo Jones <hkjones@sunmail.com>
Date: April 2
Subject: Thank you

Dear Ms. Navas,

I enjoyed speaking with you about the associate manager position last week, and as I mentioned, I am very excited about the possibility of working with you at Cordova Creations. I wanted to let you know that I have received a job offer from another company, and I have to respond to that hiring manager soon. I realize it has only been a few days since my interview, but if it is at all possible for you to update me on the status of my application before the end of the week, that would be very helpful. I have long admired Cordova Creations and would really like to be a part of it. I am hoping to hear positive news from you.

Thank you,

Hugo Jones`,
                        translation: "이메일"
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
                        translation: "Mr. Jones가 이메일에서 언급하는 것은?"
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
                        translation: "Mr. Jones가 주말까지 알고 싶어하는 것은?"
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
                        content: `BUSAN (15 October)—As international shipping continues to increase, companies that transport goods between countries have found themselves competing for expensive space on container ships. — [1] —. Delays in getting goods to factories and into stores have become more common. — [2] —.

As one of the largest importers of building supplies in the country, Hibiscus Supply is particularly vulnerable to these issues. — [3] —. To avoid potential shipping problems, Hibiscus Supply has decided to operate its own container ship to export products overseas. — [4] —.

According to Hibiscus Supply president James Koh, operating the company's own ship should improve efficiency at ports and decrease overall shipping costs. Says Mr. Koh, "The cost to ship with freight companies has doubled in the past year. By shipping our products ourselves, we'll be able to avoid passing shipping-related price increases on to our customers."`,
                        translation: "기사"
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
                        translation: "Hibiscus Supply가 판매할 가능성이 높은 제품은?"
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
                        translation: "Hibiscus Supply가 자체 컨테이너선을 운영하려는 이유는?"
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
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        type: "ARTICLE",
                        title: "MEMO",
                        content: `To: All Accounting Staff
From: Jennifer Snow, Senior Manager
Date: January 8
Subject: Pedro Allende

Please join me in congratulating Pedro Allende as he prepares to enter his new role as full-time administrative assistant in our accounting department. Mr. Allende, a part-time clerk in our mail room, completed a certificate program in computer support at Lander Vocational Institute last month. He was first hired by our company as a delivery driver, a role he held for two years before transferring to the mail room.

Mr. Allende's first day in the accounting department will be Monday, January 11. We all wish him well!`,
                        translation: "메모"
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
                        translation: "Ms. Snow가 메모를 보낸 이유는?"
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
                        translation: "'prepares'와 의미가 가장 가까운 것은?"
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
                        translation: "Mr. Allende에 대해 언급된 것은?"
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
                        content: `Cainerley Corp. of Napier, New Zealand, has an opening for an experienced machinist to work in our 15,000-square-metre fabrication plant, which produces custom tools and machine parts for a variety of industries. Requirements for the position include:

• Ability to collaborate with engineers to fabricate tools and machine parts
• Familiarity with specialised equipment
• Skill with doing precision work based on technical drawings
• Comfort working with metal and various other materials, such as wood and plastics
• Ability to work both independently and as part of a team

To apply, please send CV and two references to jobs@cainerleycorp.co.nz.`,
                        translation: "광고"
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
                        translation: "광고를 게재한 사업체의 유형은?"
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
                        translation: "광고에 명시되지 않은 재료는?"
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
                        translation: "직무 요구 사항으로 나열된 것은?"
                    }
                ]
            },
            // Questions 164-167: Text Message Chain
            {
                id: "p7-t9-set8",
                questionRange: "164-167",
                passages: [
                    {
                        id: "p7-t9-s8-p1",
                        type: "TEXT_MESSAGE",
                        content: `Lanie McGinnis [7:16 A.M.]
Good morning, Kelly and Matthieu. I removed the Funfair promotional signs from the park entrances, but I think I forgot one at the north gate. Could one of you check to see if it is still there?

Kelly Sen [7:18 A.M.]
Hi Lanie. I might not be able to get there earlier this morning to help put pamphlets and other materials on the welcome table in the main tent. But I could head over to that entrance now since there are other volunteers here who are filling up.

Lanie McGinnis [7:19 A.M.]
That would be great, since I'm going to be on the other side of the park at the south entrance for a while. I'm meeting some representatives from the city parks department.

Matthieu Herman [7:21 A.M.]
I've got it, Kelly. I just arrived at the north entrance and will take down the sign we hung here. Lanie, what would you like me to do with it?

Lanie McGinnis [7:22 A.M.]
Perfect! Can you put it with the others behind the welcome table in the main tent? I will pick them up later today. We can change the dates and use them again next year.

Matthieu Herman [7:23 A.M.]
Will do. Here's to a successful fair!`,
                        translation: "문자 메시지 대화"
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
                        translation: "작성자들에 대해 사실일 가능성이 높은 것은?"
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
                        translation: "Ms. Sen이 하고 있던 일은?"
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
                        translation: "오전 7시 21분에 Mr. Herman이 'I've got it, Kelly'라고 쓸 때 의미하는 것은?"
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
                        translation: "Ms. McGinnis가 Mr. Herman에게 지시하는 것은?"
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
                        content: `Service Levels and Capacity: Zealandia Airlines provides regional service among four cities. In each case, average flight capacity exceeded the company goal of 85 percent.

On-Time Performance (OTP): For the purpose of measuring OTP, flights are considered "on time" when they reach their destination within fifteen minutes of the scheduled arrival time. Regional airlines are subject to fines when OTP drops below 50 percent. The following chart shows Zealandia's commendable OTP rates for the recent fiscal year.

City | OTP
Kelton Falls | 52%
Grangerton | 68%
Satcherville | 79%
Barbour City | 64%

Proposed Expansion: Zealandia Airlines provides regional passenger air service and is seeking to expand its fleet to begin providing commercial airfreight delivery. Establishing this service is a component of a five-year growth plan and corporate vision. The airline is currently in negotiations with aviation authorities to explore options.

Terminal and Service Improvements: Zealandia Airlines is participating in discussions with airport management about comprehensive renovations to its passenger lounge and café and has offered to commit $5 million from its budget to the project. Company executives have also finalized a plan and committed funds to overhaul its rewards program. The initiative supports the aim to be a leading service provider among similar airlines and capture an increasing percentage of the market share.`,
                        translation: "팩트 시트"
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
                        translation: "'exceeded'와 의미가 가장 가까운 것은?"
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
                        translation: "팩트 시트에 따르면 Zealandia Airlines에 대해 사실인 것은?"
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
                        translation: "Zealandia Airlines가 미래에 제공하고자 하는 것은?"
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
                        translation: "Zealandia Airlines가 승객 서비스를 개선하려는 방법은?"
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
                        content: `Northeast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains, many of which are more than 40 years old. — [1] —.

The company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times. — [2] —. The trains will be capable of traveling at speeds of up to 130 kilometers per hour and will produce far less pollution than the current fleet does.

Logiens also promises an enhanced passenger experience. The train cars will have panoramic windows, improved ventilation, and wider aisles. — [3] —.

Northeast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement. — [4] —.`,
                        translation: "보도 자료"
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
                        translation: "Logiens Transport의 역할은?"
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
                        translation: "보도 자료에 포함된 정보는?"
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
                        translation: "Northeast Railways가 사용하는 선로에 대해 암시되는 것은?"
                    },
                    {
                        id: "175",
                        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Each reclinable seat will have an individual power supply and USB port.\"",
                        options: [
                            { label: "A", text: "[1]" },
                            { label: "B", text: "[2]" },
                            { label: "C", text: "[3]" },
                            { label: "D", text: "[4]" }
                        ],
                        correctAnswer: "C",
                        classification: "P7_SENTENCE_INSERTION",
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
                    }
                ]
            }
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
                        content: `Building 1
Harris Toddman, MD
Lansin Diagnostic Labs
Smiley Dental Offices

Building 2
Freel Primary Care Physicians
Rally Star Physical Therapy Associates

Building 3
Lee and Associates, Internists
Kare Medical Services

Building 4
Lurie Pharmaceuticals

No Truck Access
No Soliciting
No Trespassing`,
                        translation: "표지판"
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
                        translation: "표지판이 있을 가능성이 높은 곳은?"
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
                        translation: "표지판에 나열된 사업체의 유형은?"
                    }
                ]
            },
            // Questions 149-150: Text Message Chain
            {
                id: "p7-t10-set2",
                questionRange: "149-150",
                passages: [
                    {
                        id: "p7-t10-s2-p1",
                        type: "TEXT_MESSAGE",
                        content: `Darion Gaines [11:16 A.M.]
Sonia, the sink in the third-floor break room is clogged.

Sonia Pinkerton [11:20 A.M.]
Again? That's the second time this month.

Darion Gaines [11:22 A.M.]
One of our sales associates got it unclogged last time, but maybe we should call a professional this time. Should I contact Mr. Green and let him know?

Sonia Pinkerton [11:23 A.M.]
The office manager? I think it might be best to call the head of maintenance, Tammy Toska. She can probably get someone out to fix it pretty quickly.

Darion Gaines [11:24 A.M.]
OK. I could reach out to her.

Sonia Pinkerton [11:25 A.M.]
Go ahead. In the meantime, I'll put up a notice to let everyone know they should not use that sink.`,
                        translation: "문자 메시지 대화"
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
                        translation: "Mr. Green은 누구일 가능성이 높은가?"
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
                        translation: "오전 11시 25분에 Ms. Pinkerton이 'Go ahead'라고 쓸 때 의미하는 것은?"
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
                        content: `To: Ramdeo Khemradj <rkhemradj@topofthehill.jm>
From: Kerensa Mayne <kmayne@topofthehill.jm>
Date: 17 August
Subject: Information
Attachment: Latest draft

Hi, Ramdeo,

Please take a look at the latest draft and let me know what you think. I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes that you and your kitchen staff will be introducing next month.

I haven't updated the prices yet though, as I haven't decided whether we will need to increase some of them.

I'm sure you agree with me that the design firm did a great job upgrading the kitchen and making the dining room brighter and more inviting.

Kerensa`,
                        translation: "이메일"
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
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Khemradj는 누구일 가능성이 높은가?"
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
                        translation: "이메일에 첨부된 것은?"
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
                        content: `Date of Application: 1 September

PERSONAL DATA
Name: Arturo Rami | Address: 10 Beamish Street, Werribee, VIC 3030
E-mail: arturo.rami@amail.com.au | Telephone: 03 9555 3744

EMPLOYMENT DESIRED
Desired position | Assistant Store Manager
Available start date | 20 September
Preferred location | ☐ Seaholme  ☑ Werribee  ☐ Port Melbourne
Preferred status | ☑ Full-time  ☐ Part-time  ☐ Temporary

EDUCATION
Educational Institution | Diploma/Certificate/Degree Earned
South Bank High School | High school diploma
Dymocks University | Bachelor's degree

EMPLOYMENT HISTORY
Employer | Position | Duration
The Garment Barn | Sales associate | 2 years
Aliona Marketing | Assistant manager | 3 years

EXPLANATION OF INTEREST IN THE POSITION
I flourish in a fast-paced and demanding work environment, which my most recent employers are known for. I expect the same is true of Page Turner Booksellers, which tends to be quite busy. Moreover, with my bachelor's degree in retail management, I believe I am well suited for the position.`,
                        translation: "지원서"
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
                        translation: "Page Turner Booksellers에 대해 암시되는 것은?"
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
                        translation: "Mr. Rami에 대해 언급되지 않은 것은?"
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
                        content: `Donovan Auto Lube (DAL) is the first choice for residents of Knebworth who want to keep their cars running smoothly. We provide oil changes, tyre rotations, and routine inspections. Our team of certified auto technicians can service all vehicle makes and models. Customers may schedule an appointment or simply drive up to any DAL location curing our business hours of 8:00 A.M. to 6:00 P.M., Monday through Saturday, and 11:00 A.M. to 5:00 P.M. on Sunday.

This summer, DAL offers a special promotion: a 5-quart oil change, oil filter replacement, and comprehensive maintenance check for just £15. This offer is available at all DAL locations throughout Hertfordshire. It may not be combined with any other promotional offer. The quoted price does not include value-added tax and does not cover any additional maintenance, repairs, and parts that a vehicle inspection may call for.

Visit DAL for all your automotive needs.`,
                        translation: "광고"
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
                        translation: "'running'과 의미가 가장 가까운 것은?"
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
                        translation: "Donovan Auto Lube에서 서비스를 받을 수 없는 시간은?"
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
                        translation: "프로모션 제안에 대해 사실인 것은?"
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
                        content: `Kasem Ngam is a renowned speaker and author from Nonthaburi province in Thailand. — [1] —. Immediately upon graduating from Sangsuwan University in Bangkok, he joined Chamborn Gas & Electric (CG&E). Over a period of 25 years, he made a name for himself as one of CG&E's most dedicated and respected employees, even gaining national and international recognition. — [2] —.

Mr. Ngam currently runs a consulting firm that he started four years ago to help businesses develop innovative new technologies to power the modern world. — [3] —. He is the author of numerous articles on a variety of topics, including solar panels and increasingly makes lighthouses. — [4] —. His honors include a Pax Award for his book Biofuels, a popular textbook on biofuels, which has been translated into several languages. His forthcoming book, Pricing Our Power: Funding the New Green Energy, will be published in May.`,
                        translation: "전기"
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
                        translation: "Mr. Ngam이 일할 가능성이 높은 산업은?"
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
                        translation: "Mr. Ngam에 대해 언급된 것은?"
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
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `WILLETTVILLE (March 8)—Tanney's Discount Mart (TDM) announced today that it will hold a job fair in Willettville later this month. The company, headquartered in nearby Lyter City, is looking to fill 300 positions at its new distribution center, set to open here next month. In addition to seeking warehouse and supervisors, the company is looking for positions in the processing, stock inspection, and maintenance.

"TDM's distribution centers use modern automated systems, which creates a big need for qualified technical staff in particular," Kent Siler, TDM's president, said in a press release announcing the job fair.

The event will be held from 9:30 A.M. to 6:30 P.M. on Thursday, March 20, in the ballroom of the Twin Ridges Hotel. Details can be found by visiting tdm.com/careers.

"This recruiting event will help us find the staff we need to meet the anticipated growth in demand for our products," said Mr. Siler. "TDM continues to expand its position in discount retail. So far this year, we have opened three stores, and we have five more slated to open by the end of next year." Mr. Siler noted, moreover, that TDM offers competitive wages for full-time and part-time employment.`,
                        translation: "기사"
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
                        translation: "TDM의 새 유통 센터에 대해 언급된 것은?"
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
                        translation: "채용 박람회에 대해 언급되지 않은 것은?"
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
                        translation: "Mr. Siler가 TDM에 대해 언급하는 것은?"
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
                        type: "TEXT_MESSAGE",
                        content: `Rashaan Little [5:40 P.M.]
Hi, Amanda and Desmond. Earlier today I learned that the town has hired our company to demolish the lighthouse.

Amanda Richards [5:43 P.M.]
So did I. I have mixed feelings about taking down that structure, though.

Desmond Williams [5:43 P.M.]
This is the first time that I'm learning about that. I was out of the office all day today.

Rashaan Little [5:44 P.M.]
How so, Amanda?

Amanda Richards [5:46 P.M.]
Well, given that business has been quite slow lately, our company needs the work. Then again, the lighthouse has historic value: it has been a major landmark of Burlingate for 100 years.

Rashaan Little [5:48 P.M.]
I realize that. But the company can't afford to pass up this opportunity for the reason you mentioned. Besides, lighthouses have largely become outdated.

Desmond Williams [5:49 P.M.]
Not really. There's always a need for ships to get warnings about dangerous locations. Lighthouses have served that function for years.

Rashaan Little [5:51 P.M.]
True, but modern technological equipment exists now that simplifies navigation and increasingly makes lighthouses a thing of the past. Anyway, let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job.`,
                        translation: "온라인 채팅"
                    }
                ],
                questions: [
                    {
                        id: "164",
                        text: "In what type of business do the writers most likely work?",
                        options: [
                            { label: "A", text: "Building construction" },
                            { label: "B", text: "Shipping technology" },
                            { label: "C", text: "Corporate accounting" },
                            { label: "D", text: "Historical preservation" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "작성자들이 일할 가능성이 높은 사업 유형은?"
                    },
                    {
                        id: "165",
                        text: "What is indicated about the company the writers work for?",
                        options: [
                            { label: "A", text: "It recently purchased ultramodern equipment." },
                            { label: "B", text: "It has experienced a decline in business." },
                            { label: "C", text: "It is regularly hired by the town council." },
                            { label: "D", text: "It has been in business for 100 years." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "작성자들이 일하는 회사에 대해 언급된 것은?"
                    },
                    {
                        id: "166",
                        text: "At 5:48 P.M., what does Mr. Little most likely mean when he writes, \"I realize that\"?",
                        options: [
                            { label: "A", text: "He knows why Mr. Williams had been absent." },
                            { label: "B", text: "He recognizes the significance of the lighthouse for the town." },
                            { label: "C", text: "He understands how important the company is for the town." },
                            { label: "D", text: "He is aware that Ms. Richards knows much about the town's history." }
                        ],
                        correctAnswer: "B",
                        classification: "P7_INFERENCE",
                        translation: "오후 5시 48분에 Mr. Little이 'I realize that'이라고 쓸 때 의미하는 것은?"
                    },
                    {
                        id: "167",
                        text: "What will the writers most likely do tomorrow morning?",
                        options: [
                            { label: "A", text: "Advertise new job openings" },
                            { label: "B", text: "Attend a town council meeting" },
                            { label: "C", text: "Go on a tour of the lighthouse" },
                            { label: "D", text: "Start planning for an upcoming project" }
                        ],
                        correctAnswer: "D",
                        classification: "P7_INFERENCE",
                        translation: "작성자들이 내일 아침에 할 일은?"
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
                        content: `If you are considering redecorating the windows of your living room, dining room, or bedroom, Contempo Spaces has the perfect treatment design package for you. — [1] —. We will help you put together the right combination of shades, panels, drapes, and valances—all perfectly tailored to fit your windows.

Here's how it works:

• First, one of our style representatives will come to your home and measure and photograph your windows in each room.

• During that visit, our representative will show you samples of the many styles of fabrics and finishes available in our product line. — [2] —. Or, you can opt to visit our showroom after the home visit and make your selections there.

• One or two days after you've made your window treatment decisions, we will send you an invoice, listing the cost for materials, installation, and labor. The quoted price is valid for thirty days. Upon receipt of payment, materials will be ordered. It usually takes from seven to fourteen days to reach our store. — [3] —.

• Finally, we will contact you to schedule the date and time of installation. — [4] —. Depending on the size of the project, installation can take two to eight hours.`,
                        translation: "브로셔"
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
                        translation: "브로셔의 목적은?"
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
                        translation: "송장에 나열된 총 비용이 며칠 후에 변경될 수 있는가?"
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
                        translation: "브로셔에서 설치에 대해 언급된 것은?"
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
                        translation: "다음 문장이 가장 적절하게 들어갈 위치는?"
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
                        content: `To: Morgan Tebele <mtebele@newsom.com.na>
From: Esme Mukaya <emukaya@skyleopard.com.na>
Date: 21 August
Subject: Offer

Dear Mr. Tebele,

Whether you are refinancing a loan, training personnel, or marketing your financial services to other businesses, fast Internet access is essential for bank managers like you. Sky Leopard Communications delivers just that, thanks to its highly advanced pool of technicians and dedicated workforce.

In fact, a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors.

The reason: in addition to our state-of-the-art Internet infrastructure and our outstanding pool of technicians, we offer the convenience of Internet connectivity through our High-Velocity Internet Access (HIVIA) service plan. HIVIA provides download and upload speeds that are three times faster than those of our closest competitor.

Sky Leopard Communications offers new customers and those using one of our other plans the opportunity to try HIVIA for free for 30 days. To subscribe, visit us at www.skyleopard.com.na or call us at 061-987-555. If at any time during the one-month trial period you are not satisfied with this plan, you can unsubscribe from the service at no cost to you.

Sincerely,

Esme Mukaya, Sales`,
                        translation: "이메일"
                    }
                ],
                questions: [
                    {
                        id: "172",
                        text: "What is the purpose of the e-mail?",
                        options: [
                            { label: "A", text: "To promote a service" },
                            { label: "B", text: "To request a payment" },
                            { label: "C", text: "To announce a survey" },
                            { label: "D", text: "To confirm an appointment" }
                        ],
                        correctAnswer: "A",
                        classification: "P7_PURPOSE",
                        translation: "이메일의 목적은?"
                    },
                    {
                        id: "173",
                        text: "What is indicated about Sky Leopard Communications?",
                        options: [
                            { label: "A", text: "It is based in Namibia." },
                            { label: "B", text: "It recently hired new technicians." },
                            { label: "C", text: "It provides training to bank managers." },
                            { label: "D", text: "It is a member of NASO." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Sky Leopard Communications에 대해 언급된 것은?"
                    },
                    {
                        id: "174",
                        text: "What does Ms. Mukaya claim about HIVIA?",
                        options: [
                            { label: "A", text: "It is faster than other Internet services." },
                            { label: "B", text: "It is the most affordable Internet plan." },
                            { label: "C", text: "It is available only to business owners." },
                            { label: "D", text: "It requires special equipment." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Ms. Mukaya가 HIVIA에 대해 주장하는 것은?"
                    },
                    {
                        id: "175",
                        text: "What is suggested about Mr. Tebele?",
                        options: [
                            { label: "A", text: "He works at a bank." },
                            { label: "B", text: "He is a current customer." },
                            { label: "C", text: "He responded to a survey." },
                            { label: "D", text: "He recently moved to Namibia." }
                        ],
                        correctAnswer: "A",
                        classification: "P7_INFERENCE",
                        translation: "Mr. Tebele에 대해 암시되는 것은?"
                    }
                ]
            }
        ]
    }
];






