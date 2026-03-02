import { Part3Set } from './types';

export const test4Data: Part3Set[] = [
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s1",
        contextType: "B2. 주문 / 배송",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_32-34.mp3",
        questions: [
            {
                id: "v3-p3-t04-q32",
                text: "What is the woman preparing for?",
                classification: "DETAIL",
                options: {
                    A: "A holiday raffle",
                    B: "A grand opening",
                    C: "A retirement party",
                    D: "A charity event"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q33",
                text: "What does the man say he can do?",
                classification: "DETAIL",
                options: {
                    A: "Rush an order",
                    B: "Apply a discount",
                    C: "Include some free samples",
                    D: "Set up a product display"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t04-q34",
                text: "What does the woman ask about?",
                classification: "ASK_QUESTION",
                options: {
                    A: "Payment methods",
                    B: "Store hours",
                    C: "Return policies",
                    D: "Color options"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Hello, you've reached Custom Gifts. How can I help you?"
            },
            {
                speaker: "W-Br",
                text: "I'd like to order 200 mugs with my café's logo. We're doing some promotional giveaways for the grand opening of our second location, so I'll need them by next Friday."
            },
            {
                speaker: "M-Cn",
                text: "Oh, that's soon. But I can make this an express order so we'll make that deadline. It'll cost a bit extra. And you'll have to e-mail us your logo."
            },
            {
                speaker: "W-Br",
                text: "OK, that's fine. Can you tell me what color mugs are available? I'd like to give customers a choice."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s2",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t04-q35",
                text: "What most likely is the woman's profession?",
                classification: "DETAIL",
                options: {
                    A: "Sound engineer",
                    B: "Travel agent",
                    C: "Actor",
                    D: "Musician"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t04-q36",
                text: "Why is the man calling?",
                classification: "WHY_REASON",
                options: {
                    A: "To ask the woman for a favor",
                    B: "To offer the woman a job",
                    C: "To purchase some tickets",
                    D: "To recommend a colleague"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q37",
                text: "According to the woman, what might cause a problem?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A billing error",
                    B: "A schedule conflict",
                    C: "A visa requirement",
                    D: "A mechanical failure"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hi, Paloma?"
            },
            {
                speaker: "W-Br",
                text: "Yes, this is Paloma."
            },
            {
                speaker: "M-Au",
                text: "Hi, it's Takumi Sato, from the International Orchestra."
            },
            {
                speaker: "W-Br",
                text: "It's good to hear from you, Mr. Sato."
            },
            {
                speaker: "M-Au",
                text: "The committee and I listened to the recordings you gave us. Your performances at the Galveston Festival were fantastic."
            },
            {
                speaker: "W-Br",
                text: "Oh, I'm glad you liked them."
            },
            {
                speaker: "M-Au",
                text: "We also enjoyed your interview. We've decided to offer you the position."
            },
            {
                speaker: "W-Br",
                text: "That's wonderful! There's one thing I should let you know about, though. I saw that rehearsals for the next season begin in July, but I'll be traveling in Japan during the first week of July. Will that be a problem?"
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s3",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t04-q38",
                text: "What kind of event is taking place?",
                classification: "DETAIL",
                options: {
                    A: "A trade show",
                    B: "A job fair",
                    C: "A fund-raiser",
                    D: "A grand opening"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t04-q39",
                text: "According to the man, what did a client request?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Projection equipment",
                    B: "Vegetarian meals",
                    C: "Additional parking",
                    D: "An earlier start time"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t04-q40",
                text: "What will Fatima do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Locate some keys",
                    B: "Process a payment",
                    C: "Make a phone call",
                    D: "Check some seating arrangements"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Hi, Emiko and Fatima. Thanks for coming in early to set up for this evening's event. This is the first time JMA Technologies is hosting their annual fund-raiser here, and I think it'll really increase our hotel's visibility."
            },
            {
                speaker: "W-Br",
                text: "Of course. What do you need?"
            },
            {
                speaker: "M-Cn",
                text: "Well, JMA has a new AV equipment request. Initially, they wanted only a podium and microphone, but now they'd also like a projector and a screen."
            },
            {
                speaker: "W-Br",
                text: "I can set that up now."
            },
            {
                speaker: "M-Cn",
                text: "Thanks, Emiko. Fatima, while she's working on that, can you make sure the place settings on the tables are all in order?"
            },
            {
                speaker: "W-Am",
                text: "Sure–let me get the seating chart layout so I can check each table against it."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s4",
        contextType: "B4. 일반문의",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t04-q41",
                text: "Where is the conversation most likely taking place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a vegetable farm",
                    B: "At an electronics store",
                    C: "At a motorcycle repair shop",
                    D: "At a grocery store"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t04-q42",
                text: "What does the woman ask the man to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Describe a phone",
                    B: "Show a receipt",
                    C: "Contact a manufacturer",
                    D: "Speak to a mechanic"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t04-q43",
                text: "What information does the woman give the man?",
                classification: "DETAIL",
                options: {
                    A: "The price of an item",
                    B: "The name of a supervisor",
                    C: "The location of a product",
                    D: "The size of an order"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Hi, I think I lost my mobile phone while I was shopping here yesterday. The last time I remember using it was in the frozen food aisle. Has anyone turned in a phone?"
            },
            {
                speaker: "W-Br",
                text: "Let me check. What does it look like?"
            },
            {
                speaker: "M-Cn",
                text: "It has a green protector case with a picture of a motorcycle on the back."
            },
            {
                speaker: "W-Br",
                text: "Ah, here it is."
            },
            {
                speaker: "M-Cn",
                text: "Thank you so much. Oh. How much are these canned peaches? I forgot to buy them when I was here yesterday."
            },
            {
                speaker: "W-Br",
                text: "They're two dollars."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s5",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t04-q44",
                text: "What field do the speakers most likely work in?",
                classification: "DETAIL",
                options: {
                    A: "Accounting",
                    B: "Engineering",
                    C: "Education",
                    D: "Agriculture"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t04-q45",
                text: "Why does the man say, \"It won't take that long\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To request the woman's permission",
                    B: "To convince the woman to meet",
                    C: "To provide a time estimate for an audit",
                    D: "To correct a misunderstanding about a project"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q46",
                text: "What will the man likely do tomorrow morning?",
                classification: "DETAIL",
                options: {
                    A: "Lead an employee orientation",
                    B: "Present at a board meeting",
                    C: "Talk to some colleagues",
                    D: "Read a company report"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hi, Claire. Do you have a few minutes this afternoon? I'd like to show you some of the new changes we're proposing for our accounting software. I think they'll really help our clients."
            },
            {
                speaker: "W-Am",
                text: "I'm a bit busy actually... I have to finish this budget report for the management team by five o'clock. Can it wait until tomorrow?"
            },
            {
                speaker: "M-Au",
                text: "Oh, it'll only take ten minutes, I promise. It won't take that long, and I'd really value your input before I present the changes to the rest of the developers tomorrow morning."
            },
            {
                speaker: "W-Am",
                text: "OK, then. Let's head over to your office."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s6",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t04-q47",
                text: "According to the woman, what do the results of a survey indicate about a company?",
                classification: "DETAIL",
                options: {
                    A: "It should create an employee award.",
                    B: "It should provide free transportation.",
                    C: "Its employees are happy with a training program.",
                    D: "Its employees are concerned about the environment."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t04-q48",
                text: "What does the man say he did recently?",
                classification: "DETAIL",
                options: {
                    A: "He accepted a job offer.",
                    B: "He read an article.",
                    C: "He downloaded a schedule.",
                    D: "He met a sales goal."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q49",
                text: "What does the woman suggest?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Hiring a consultant",
                    B: "Changing a venue",
                    C: "Modifying a production process",
                    D: "Recruiting volunteers"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Irina, do you have the results from our latest employee satisfaction survey?"
            },
            {
                speaker: "W-Br",
                text: "Yes, and based on the comments, the majority of our employees want us to make the company more environmentally friendly. Apparently, they feel that we don't do enough to promote recycling efforts."
            },
            {
                speaker: "M-Cn",
                text: "Hmm, that reminds me about an article I read recently. It said that eco-friendly companies tend to have higher employee satisfaction rates."
            },
            {
                speaker: "W-Br",
                text: "In that case, why don't we bring in an outside consultant? We can hire someone who's an expert on finding ways to promote sustainability."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s7",
        contextType: "A4. 재무 / 비용 / 승인",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t04-q50",
                text: "What type of event did the woman attend?",
                classification: "DETAIL",
                options: {
                    A: "A theater performance",
                    B: "A grand opening",
                    C: "A professional conference",
                    D: "A retirement party"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t04-q51",
                text: "What does the woman imply when she says, \"That'll be quite challenging\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She wants to apply for a new position.",
                    B: "She does not think she can meet a deadline.",
                    C: "She will need additional funding for a project.",
                    D: "She admires a colleague's plan."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q52",
                text: "What does the woman say she will do now?",
                classification: "DETAIL",
                options: {
                    A: "Speak with her assistant",
                    B: "Print out her résumé",
                    C: "Order some food",
                    D: "Make travel arrangements"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Sofia, how was the graphic design conference in Sacramento?"
            },
            {
                speaker: "W-Am",
                text: "Very good. I especially enjoyed the sessions on customer service. I think it'll help me serve our clients better."
            },
            {
                speaker: "M-Au",
                text: "Great! By the way, have you seen the latest expense report for our design department?"
            },
            {
                speaker: "W-Am",
                text: "Not yet. Why?"
            },
            {
                speaker: "M-Au",
                text: "We've already exceeded our quarterly budget. We really need to restrict our spending now. So I'm asking everyone to come up with ideas for cutting our department's expenses. Could you write up some ideas by two o'clock today?"
            },
            {
                speaker: "W-Am",
                text: "That'll be quite challenging."
            },
            {
                speaker: "M-Au",
                text: "I know you just got back, but this is important."
            },
            {
                speaker: "W-Am",
                text: "OK. I'll talk to my assistant and have her clear my schedule for the rest of the morning."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s8",
        contextType: "B4. 일반문의",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t04-q53",
                text: "Why is the man calling the Springfield Community Center?",
                classification: "WHY_REASON",
                options: {
                    A: "He is looking for a backpack.",
                    B: "He is researching a historical place.",
                    C: "He is asking about a meeting space.",
                    D: "He is interested in joining a club."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t04-q54",
                text: "What does the woman warn the man about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A busy time of the month",
                    B: "An early store closing",
                    C: "The cost of an event",
                    D: "A missing document"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t04-q55",
                text: "What does the man ask about using?",
                classification: "ASK_QUESTION",
                options: {
                    A: "A library",
                    B: "A message board",
                    C: "A mobile phone",
                    D: "A projector"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "This is Springfield Community Center. How can I help you?"
            },
            {
                speaker: "M-Au",
                text: "Hi, I'm with the local historical club. We're looking for a place for our monthly meetings."
            },
            {
                speaker: "W-Br",
                text: "OK. We have a few rooms that community organizations can reserve. When are your meetings held?"
            },
            {
                speaker: "M-Au",
                text: "The first Saturday of each month."
            },
            {
                speaker: "W-Br",
                text: "Oh, that's a very popular time. You'll have to reserve the space well in advance."
            },
            {
                speaker: "M-Au",
                text: "No problem. I'll do that. Also, I saw that you have a message board at the front of the building. Can groups use it to advertise their events?"
            },
            {
                speaker: "W-Br",
                text: "Yes. Notices can be posted a week in advance."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s9",
        contextType: "B4. 일반문의",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t04-q56",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A cafeteria manager",
                    B: "A hotel receptionist",
                    C: "A laboratory technician",
                    D: "An interior designer"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t04-q57",
                text: "Why will the woman visit the man's business this afternoon?",
                classification: "WHY_REASON",
                options: {
                    A: "To perform an inspection",
                    B: "To select a product",
                    C: "To learn a new skill",
                    D: "To interview for a job"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q58",
                text: "What does the man recommend that the woman bring?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Some measurements",
                    B: "Some photographs",
                    C: "A handbook",
                    D: "A business card"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Hi, I'm calling because I'm redesigning a hotel lobby for a client, and I'd like the reception countertop to be made of stone."
            },
            {
                speaker: "M-Cn",
                text: "We have slabs of granite and marble here in our showroom. You can stop by and choose the one you want."
            },
            {
                speaker: "W-Am",
                text: "Great–I'll be there this afternoon. Also... how long will it take before the countertop's installed?"
            },
            {
                speaker: "M-Cn",
                text: "For a basic rectangular shape, it takes a week to cut it to size, polish it, and install it. If you have the exact length and width, we can get started as soon as you make your selection."
            },
            {
                speaker: "W-Am",
                text: "I'll bring the dimensions."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s10",
        contextType: "A5. 교육 / 트레이닝",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t04-q59",
                text: "Who most likely are the program participants?",
                classification: "WHO_LOC",
                options: {
                    A: "Sales recruiters",
                    B: "Prospective clients",
                    C: "Building inspectors",
                    D: "Management trainees"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t04-q60",
                text: "What does the man ask about?",
                classification: "ASK_QUESTION",
                options: {
                    A: "An office location",
                    B: "A budget amount",
                    C: "A length of time",
                    D: "A list of attendees"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t04-q61",
                text: "How should the participants communicate a request?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "By making a phone call",
                    B: "By speaking with Ms. Park",
                    C: "By sending an e-mail",
                    D: "By filling out a form"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Congratulations! As top employees at NGR Industries, you've been selected for our Future Leaders Program. In this program, you'll be rotating through jobs in each division to learn everything about our company. Now my colleague, Ms. Park, will continue."
            },
            {
                speaker: "W-Br",
                text: "Thanks, Margaret. This rotational program is critical to becoming a successful manager here. Oh... there's a question in the back?"
            },
            {
                speaker: "M-Cn",
                text: "Yes, thank you, Ms. Park. I was wondering how long we'll spend in each department."
            },
            {
                speaker: "W-Br",
                text: "You'll work in one department for about two months and then move to another area. Preferences for first assignments will be taken into consideration. You may indicate your preference on the form in front of you."
            }
        ]
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s11",
        contextType: "B2. 주문 / 배송",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_62-64.mp3",
        questions: [
            {
                id: "v3-p3-t04-q62",
                text: "What kind of products does the woman's store sell?",
                classification: "DETAIL",
                options: {
                    A: "Kitchen appliances",
                    B: "Sporting goods",
                    C: "Luggage",
                    D: "Bathroom furnishings"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q63",
                text: "Look at the graphic. Which model will the man buy?",
                classification: "GRAPHIC",
                options: {
                    A: "Country",
                    B: "Classic",
                    C: "Premier",
                    D: "Deluxe"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q64",
                text: "What is the man concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A price",
                    B: "A warranty",
                    C: "The installation",
                    D: "The quality"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "Welcome to Smith's Sports Equipment and More. How may I help you?"
            },
            {
                speaker: "M-Au",
                text: "Hi, uh, my brother and I often go biking in the mountains, and I'd like to buy an exterior bike rack for my car."
            },
            {
                speaker: "W-Br",
                text: "I can help you with that. We have several sizes available. What carrying capacity do you need?"
            },
            {
                speaker: "M-Au",
                text: "Something small... one that can carry up to two bikes, but no more."
            },
            {
                speaker: "W-Br",
                text: "Here's a list of our models. We have just what you need."
            },
            {
                speaker: "M-Au",
                text: "OK. Is it difficult to attach to the car? I hope it's not too complicated."
            },
            {
                speaker: "W-Br",
                text: "Don't worry. It comes with detailed, step-by-step instructions to install it."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_04/Part_03/p3_q62.png"
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s12",
        contextType: "B2. 주문 / 배송",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_65-67.mp3",
        questions: [
            {
                id: "v3-p3-t04-q65",
                text: "What type of business is the woman calling?",
                classification: "DETAIL",
                options: {
                    A: "A catering company",
                    B: "A laundry service",
                    C: "A flower shop",
                    D: "A furniture store"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q66",
                text: "What does the man say his company is known for?",
                classification: "DETAIL",
                options: {
                    A: "Its prices",
                    B: "Its locations",
                    C: "Its reliability",
                    D: "Its products"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t04-q67",
                text: "Look at the graphic. What time will the delivery be made?",
                classification: "GRAPHIC",
                options: {
                    A: "6:00 A.M.",
                    B: "7:00 A.M.",
                    C: "8:00 A.M.",
                    D: "9:00 A.M."
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hello. This is Vogel's Laundry Service."
            },
            {
                speaker: "W-Br",
                text: "Hi. I'm calling from the Happy Stay Hotel on Forbes Avenue. We're looking for an outside service to wash the hotel's bedding and towels, and I've heard good things about you."
            },
            {
                speaker: "M-Au",
                text: "I'm glad to hear that. Our customers will tell you that we're very trustworthy—we're known for our reliable service."
            },
            {
                speaker: "W-Br",
                text: "So... what time would you be delivering our clean linens each day?"
            },
            {
                speaker: "M-Au",
                text: "It depends on the location. If you take a look at the online delivery map, you'll see that you're in Zone 2."
            },
            {
                speaker: "W-Br",
                text: "Oh, I see it now. That would work. The housekeeping staff doesn't start until nine o'clock, so that gives us plenty of time."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_04/Part_03/p3_q65.png"
    },
    {
        testId: 4,
        vol: 3,
        setId: "v3-p3-t04-s13",
        contextType: "C3. 일정 변경 / 취소",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_68-70.mp3",
        questions: [
            {
                id: "v3-p3-t04-q68",
                text: "Why does the man want to change an appointment?",
                classification: "WHY_REASON",
                options: {
                    A: "His car broke down.",
                    B: "He has to attend a meeting.",
                    C: "He has a family event.",
                    D: "He has to wait for a delivery."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t04-q69",
                text: "Look at the graphic. Who will the man see on Friday?",
                classification: "GRAPHIC",
                options: {
                    A: "Dr. Fontana",
                    B: "Dr. Miller",
                    C: "Dr. Smith",
                    D: "Dr. Yang"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t04-q70",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Answer some questions",
                    B: "Visit a Web site",
                    C: "Make a payment",
                    D: "Drive to an office"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Hello, Midtown Health Clinic."
            },
            {
                speaker: "M-Au",
                text: "Hi. I have an appointment scheduled with Dr. Miller for two o'clock on Wednesday, but I need to change it. I have an important client meeting I need to attend."
            },
            {
                speaker: "W-Am",
                text: "OK. What time would you be able to come in?"
            },
            {
                speaker: "M-Au",
                text: "Well, I get out of work at five o'clock, so any time after that is fine."
            },
            {
                speaker: "W-Am",
                text: "Dr. Miller doesn't have anything past four o'clock this week. But there's an opening at five thirty on Friday with a different doctor?"
            },
            {
                speaker: "M-Au",
                text: "OK, that's fine."
            },
            {
                speaker: "W-Am",
                text: "Great. Let me ask you a few questions to be sure that none of your information has changed."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_04/Part_03/p3_q68.png"
    }
];
