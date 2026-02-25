import { Part3Set } from './types';

export const test1Data: Part3Set[] = [
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s1",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "32-34",
        questions: [
            {
                id: "v3-p3-t01-q32",
                text: "What is the woman preparing for?",
                classification: "DETAIL",
                options: {
                    A: "A move to a new city",
                    B: "A business trip",
                    C: "A building tour",
                    D: "A meeting with visiting colleagues"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q33",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "An accountant",
                    B: "An administrative assistant",
                    C: "A marketing director",
                    D: "A company president"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t01-q34",
                text: "What does the woman want to pick up on Friday morning?",
                classification: "DETAIL",
                options: {
                    A: "A building map",
                    B: "A room key",
                    C: "An ID card",
                    D: "A parking pass"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi, it's Martina from Accounting. I'd like to reserve the main conference room for a meeting I'll be leading on Friday with colleagues from our New York office." },
            { speaker: "Man", text: "Sure, that shouldn't be a problem. What time is the meeting?" },
            { speaker: "Woman", text: "It's from nine to eleven A.Μ." },
            { speaker: "Man", text: "OK-I'll block off that time slot for you. Do you need any special equipment besides a laptop and projector?" },
            { speaker: "Woman", text: "No, but I'll need the key so I can go in a little early and set up. Can I pick that up on Friday morning?" },
            { speaker: "Man", text: "Absolutely." }
        ],
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_32-34.mp3"
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s2",
        questionRange: "35-37",
        contextType: "A4. 재무 / 비용 / 승인",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t01-q35",
                text: "What task is the man responsible for?",
                classification: "DETAIL",
                options: {
                    A: "Writing a budget",
                    B: "Reviewing job applications",
                    C: "Organizing a company newsletter",
                    D: "Updating an employee handbook"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t01-q36",
                text: "What does the woman want to do next year?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Organize a trade show",
                    B: "Open a new store",
                    C: "Redesign a product catalog",
                    D: "Hire some team members"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q37",
                text: "What does the man ask the woman to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Order some business cards",
                    B: "Write a press release",
                    C: "Provide some additional details",
                    D: "Set up a meeting time"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            { speaker: "Woman", text: "Satoshi, have you already started working on the budget for next year?" },
            { speaker: "Man", text: "Not yet... but I do plan to start it in the next day or so." },
            { speaker: "Woman", text: "OK, perfect. I'd like to add some new engineers to my team next year if we can afford it. I thought one might be enough, but I realized we'll probably need three to handle our company's new contracts." },
            { speaker: "Man", text: "No problem. I can include that in the budget. I'll just need the details about the positions, including the job titles and expected salaries. Could you send that to me?" }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s3",
        questionRange: "38-40",
        contextType: "B2. 주문 / 배송",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t01-q38",
                text: "What does the woman need a suit for?",
                classification: "DETAIL",
                options: {
                    A: "A job interview",
                    B: "A fashion show",
                    C: "A family celebration",
                    D: "A television appearance"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t01-q39",
                text: "What does the woman dislike about a suit on display?",
                classification: "DETAIL",
                options: {
                    A: "The fabric",
                    B: "The price",
                    C: "The style",
                    D: "The color"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q40",
                text: "What does the man say that the price includes?",
                classification: "DETAIL",
                options: {
                    A: "Some accessories",
                    B: "Alterations",
                    C: "Sales tax",
                    D: "Delivery"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            { speaker: "Man", text: "Welcome to Business Suit Outlet. How can I help you?" },
            { speaker: "Woman", text: "Hello. I'm interviewing for a job next week, and I wanted to buy a new suit." },
            { speaker: "Man", text: "Congratulations! Do you have anything particular in mind?" },
            { speaker: "Woman", text: "Well, there's one in your display window that looks nice. But I don't really like the color..." },
            { speaker: "Man", text: "That one only comes in black. But we do have suits in other colors that are fashionable and appropriate for business." },
            { speaker: "Woman", text: "OK. I can only spend 150 dollars, and I'd like a style similar to the one in the window." },
            { speaker: "Man", text: "Let me show you some suits in that price range. By the way, any alterations needed for the suit are included in the price." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s4",
        questionRange: "41-43",
        contextType: "B4. 문의 / 안내",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t01-q41",
                text: "What kind of a business does the man most likely work for?",
                classification: "DETAIL",
                options: {
                    A: "A legal consulting firm",
                    B: "An architecture firm",
                    C: "A film production company",
                    D: "A book publishing company"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q42",
                text: "What does the woman say she is concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "The length of a project",
                    B: "The cost of an order",
                    C: "The opinion of the public",
                    D: "The skills of some workers"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t01-q43",
                text: "What does the woman agree to let the man do?",
                classification: "DETAIL",
                options: {
                    A: "Submit an application",
                    B: "Speak at a meeting",
                    C: "Review some books",
                    D: "Measure a space"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            { speaker: "Woman", text: "Ellenville Public Library. How can I help you?" },
            { speaker: "Man", text: "Hi, I'm calling from the company Grover and James. We're interested in filming a scene for a movie in the lobby of the library. Its historic architecture is just what we're looking for." },
            { speaker: "Woman", text: "Well... we actually had a film shoot in our library last year. And the thing is... they said it would take one day and it ended up taking three. I'm concerned that will happen again." },
            { speaker: "Man", text: "I understand, but this is a very short scene." },
            { speaker: "Woman", text: "Well, we have a board meeting here next week. I could give us ten minutes at the beginning to give us the details." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s5",
        questionRange: "44-46",
        contextType: "D3. 건물 / 시설 유지보수",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t01-q44",
                text: "Who most likely is Axel Schmidt?",
                classification: "WHO_LOC",
                options: {
                    A: "A store manager",
                    B: "A construction worker",
                    C: "A journalist",
                    D: "An artist"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q45",
                text: "What renovation does the woman mention?",
                classification: "DETAIL",
                options: {
                    A: "Some walls are being painted.",
                    B: "Some floors are being replaced.",
                    C: "Some windows are being installed.",
                    D: "Some light fixtures are being repaired."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t01-q46",
                text: "What does the woman encourage the man to do?",
                classification: "DETAIL",
                options: {
                    A: "Visit a gift shop",
                    B: "Send a package",
                    C: "Wait for a bus",
                    D: "Take a photograph"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            { speaker: "Man", text: "Excuse me, I'm looking for Axel Schmidt's painting titled The Tulips." },
            { speaker: "Woman", text: "Unfortunately, his paintings aren't on display. But it's just temporary-we're putting new flooring in that gallery. If you come back in a couple of weeks, the floors will be done, and you can see all of Schmidt's artwork." },
            { speaker: "Man", text: "Oh, that's too bad. I really wanted to see that painting." },
            { speaker: "Woman", text: "I'm sorry about that. But we sell items featuring that painting in the gift shop. You could buy a souvenir so you could enjoy The Tulips every day!" }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s6",
        questionRange: "47-49",
        contextType: "A2. 프로젝트 / 업무 진행",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t01-q47",
                text: "What does the speakers' company most likely sell?",
                classification: "DETAIL",
                options: {
                    A: "Electronics",
                    B: "Clothing",
                    C: "Food",
                    D: "Automobiles"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q48",
                text: "Why is the woman surprised?",
                classification: "WHY_REASON",
                options: {
                    A: "Some software is expensive.",
                    B: "A color is very bright.",
                    C: "The man has completed a report.",
                    D: "The man bought a new car."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q49",
                text: "Why does the woman say, \"The slides are available on our company intranet\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To request assistance reviewing a document",
                    B: "To recommend using a document as a reference",
                    C: "To report that a task has been completed",
                    D: "To indicate that a file is in the wrong location"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hey, Dmitry. Are you still working on your sales report? Collecting all the data from the car dealerships in my region is taking me such a long time. Especially because this year management wants additional information on vehicle purchases, like model and color..." },
            { speaker: "Man", text: "Are you using the sales computation software? That's what I used for my report, and it worked really well." },
            { speaker: "Woman", text: "Oh-you already finished it?" },
            { speaker: "Man", text: "Well-I'm done collecting and analyzing the data, but I'm having trouble with the presentation. We didn't get any guidelines for that." },
            { speaker: "Woman", text: "Remember Julie's presentation last year? It was very impressive. The slides are available on our company intranet." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s7",
        questionRange: "50-52",
        contextType: "A3. 인사 / 휴가 / 근무",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t01-q50",
                text: "According to the woman, what will happen at the end of November?",
                classification: "DETAIL",
                options: {
                    A: "An executive will visit.",
                    B: "An employee will retire.",
                    C: "A product will be released.",
                    D: "A study will be completed."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t01-q51",
                text: "What does the man want to know?",
                classification: "DETAIL",
                options: {
                    A: "Where he would be working",
                    B: "When he would be starting a job",
                    C: "How to get to an office building",
                    D: "Why an event time has changed"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t01-q52",
                text: "What does the woman say the company will pay for?",
                classification: "DETAIL",
                options: {
                    A: "A work vehicle",
                    B: "A private office",
                    C: "Moving expenses",
                    D: "Visitors' meals"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            { speaker: "Woman", text: "Thanks for coming in, Omar. You might've heard that Rosa Garcia is retiring at the end of November. This means her position as director of information security in Singapore will be vacant. I'd like to know if you'd be interested." },
            { speaker: "Man", text: "Oh! That would be a promotion for me. Well, hmm. I'll need a little time to think about it and talk it over with my family. I do have a question. When would I start the position?" },
            { speaker: "Woman", text: "The first week of December ideally. We'd pay for all your moving expenses, of course. If you decide to accept the offer." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s8",
        questionRange: "53-55",
        contextType: "A2. 프로젝트 / 업무 진행",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t01-q53",
                text: "What industry do the speakers work in?",
                classification: "DETAIL",
                options: {
                    A: "Manufacturing",
                    B: "Agriculture",
                    C: "Transportation",
                    D: "Construction"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q54",
                text: "What does the woman say a project will do for a city?",
                classification: "DETAIL",
                options: {
                    A: "Increase tourism",
                    B: "Generate electricity",
                    C: "Preserve natural resources",
                    D: "Improve property values"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t01-q55",
                text: "What does Gerhard say needs to be done?",
                classification: "DETAIL",
                options: {
                    A: "Permits need to be approved.",
                    B: "Employees need to be trained.",
                    C: "Materials need to be ordered.",
                    D: "Inspections need to be made."
                },
                correctAnswer: "A"
            }
        ],
        script: [
            { speaker: "Man", text: "Maryam, did you hear that our construction company won the bid to build the river dam next to Burton City?" },
            { speaker: "Woman", text: "I did! This is such a major project for us...the dam's expected to produce enough electricity to power all of Burton." },
            { speaker: "Man", text: "Right. Say, do you know when construction will begin?" },
            { speaker: "Woman", text: "I don't, but here comes the project manager now. He may have a better idea... Gerhard, are there any updates on the dam construction?" },
            { speaker: "Man", text: "Well, we're going to have to wait until all the permits are approved. It'll be a while before anything else can happen." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s9",
        questionRange: "56-58",
        contextType: "B2. 주문 / 배송",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t01-q56",
                text: "What does the woman imply when she says, \"I don't have much to do\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She has time to help.",
                    B: "She plans to leave work early.",
                    C: "Her computer is not working.",
                    D: "She has not received an assignment."
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t01-q57",
                text: "What does the man notice about some medication?",
                classification: "DETAIL",
                options: {
                    A: "It needs to be refrigerated.",
                    B: "It has expired.",
                    C: "The dosage has changed.",
                    D: "The supply is limited."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t01-q58",
                text: "What does the man suggest doing in the future?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Installing some shelves",
                    B: "Confirming with a doctor",
                    C: "Increasing an order amount",
                    D: "Recommending a different medication"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            { speaker: "Man", text: "I have a question about a customer's prescription-he's... oh, I'm sorry. I see you're busy." },
            { speaker: "Woman", text: "I don't have much to do." },
            { speaker: "Man", text: "His doctor prescribed a 30-day supply of this allergy medication, but I noticed we only have enough on the shelf for fifteen days." },
            { speaker: "Woman", text: "Our weekly delivery arrives early tomorrow morning. Go ahead and give him the fifteen, and ask him to please come back for the rest. It's allergy season, so we're selling a lot of that medicine." },
            { speaker: "Man", text: "Then maybe we should increase the number of bottles in our next order from the distributor." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s10",
        questionRange: "59-61",
        contextType: "B4. 문의 / 안내",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t01-q59",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A travel agent",
                    B: "A bank teller",
                    C: "A lawyer",
                    D: "A mail-room worker"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q60",
                text: "What kind of document are the speakers discussing?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A user agreement",
                    B: "An employment contract",
                    C: "A list of travel expenses",
                    D: "An insurance certificate"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t01-q61",
                text: "Why must the document be revised by the end of the month?",
                classification: "WHY_REASON",
                options: {
                    A: "To be included in a personnel file",
                    B: "To use in a merger negotiation",
                    C: "To meet a production deadline",
                    D: "To avoid paying a fine"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "Man", text: "Good morning, Ms. Davis. We've received comments from your legal team on the terms and agreements for the travel rewards credit card that we issued." },
            { speaker: "Man", text: "Could you explain the revisions we need to make to be in compliance with the law?" },
            { speaker: "Woman", text: "Sure. The problem with the agreement is this: it doesn't disclose to users that if a card isn't used for a year, the account will be suspended." },
            { speaker: "Man", text: "Oh, that's an oversight on our part. We're glad you caught that." },
            { speaker: "Woman", text: "We don't want to be fined by banking regulators, so all cardholders will need to be notified by the end of the month." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s11",
        questionRange: "62-64",
        contextType: "B1. 불만 / 문제 제기",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_62-64.mp3",
        image: "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q62.png",
        questions: [
            {
                id: "v3-p3-t01-q62",
                text: "Look at the graphic. How much did the man's company charge for its service?",
                classification: "GRAPHIC",
                options: {
                    A: "$4,456",
                    B: "$1,300",
                    C: "$10,200",
                    D: "$400"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q63",
                text: "Why does the man apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "Business hours have changed.",
                    B: "A price was wrong.",
                    C: "Some staff arrived late.",
                    D: "A request could not be fulfilled."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q64",
                text: "What does the woman like about a venue?",
                classification: "DETAIL",
                options: {
                    A: "It has a nice view.",
                    B: "It is conveniently located.",
                    C: "It is tastefully decorated.",
                    D: "It can host large events."
                },
                correctAnswer: "A"
            }
        ],
        script: [
            { speaker: "Man", text: "Ms. Giordano, it looks like the last of the wedding guests have left. My staff's going to start packing up our dishes and loading the van." },
            { speaker: "Woman", text: "That's fine, thank you. The food was delicious. My son and his new wife were very happy with your service." },
            { speaker: "Man", text: "I'm glad you enjoyed it. And, again, I'm sorry that some of our waitstaff were late arriving. They said they drove right past the turnoff." },
            { speaker: "Woman", text: "I understand. The venue is difficult to see from the road. I really like this location, though, with its view of the mountains from the gardens in the back." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s12",
        questionRange: "65-67",
        contextType: "B4. 문의 / 안내",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_65-67.mp3",
        image: "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q65.png",
        questions: [
            {
                id: "v3-p3-t01-q65",
                text: "Why is the man surprised?",
                classification: "WHY_REASON",
                options: {
                    A: "A popular band is coming to town.",
                    B: "The woman plays a musical instrument.",
                    C: "The woman was able to get concert tickets.",
                    D: "Some musicians scheduled a second concert."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q66",
                text: "Look at the graphic. In which section does the woman have seats?",
                classification: "GRAPHIC",
                options: {
                    A: "Section 1",
                    B: "Section 2",
                    C: "Section 3",
                    D: "Section 4"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q67",
                text: "What is the woman doing this weekend?",
                classification: "DETAIL",
                options: {
                    A: "Practicing with her band",
                    B: "Entering a radio contest",
                    C: "Moving to Boston",
                    D: "Attending a party"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hey, Thomas? You like concerts. Any chance you're interested in the local band showcase this weekend? I have two tickets that I don't need." },
            { speaker: "Man", text: "You got tickets to that? That's surprising! I heard that they sold out in just a few days." },
            { speaker: "Woman", text: "They did, but I actually won these in a radio contest. That's why I'm giving them away instead of selling them. Good seats, too. Right in the middle, close to the stage." },
            { speaker: "Man", text: "Sure, I'll take them. Thanks! Why can't you go?" },
            { speaker: "Woman", text: "This weekend is my parents' anniversary. My sisters and I are planning a party for them at their home in Boston." }
        ]
    },
    {
        testId: 1,
        vol: 3,
        setId: "v3-p3-t01-s13",
        questionRange: "68-70",
        contextType: "D3. 건물 / 시설 유지보수",
        audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_68-70.mp3",
        image: "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q68.png",
        questions: [
            {
                id: "v3-p3-t01-q68",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A maintenance worker",
                    B: "A property manager",
                    C: "A real estate agent",
                    D: "A bank employee"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t01-q69",
                text: "Look at the graphic. Which name needs to be changed?",
                classification: "GRAPHIC",
                options: {
                    A: "Tanaka",
                    B: "Zhao",
                    C: "Mukherjee",
                    D: "Tremblay"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t01-q70",
                text: "What does the woman say she is going to do tomorrow?",
                classification: "DETAIL",
                options: {
                    A: "Fill out a registration form",
                    B: "Meet with some neighbors",
                    C: "Order some furniture",
                    D: "Make a payment"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "Man", text: "Hello. Bellevue Apartments Management Office. Can I help you?" },
            { speaker: "Woman", text: "Hi. I'm Azusa Suzuki. I'm a new tenant here, and I live in 2A." },
            { speaker: "Man", text: "How's everything in your apartment so far?" },
            { speaker: "Woman", text: "Very good. One thing, though... When can you put my name on the building directory? It still says the previous tenant's name." },
            { speaker: "Man", text: "No problem. I can send someone over now. Unit 2A, you said?" },
            { speaker: "Woman", text: "Yes. And, I'll be stopping by your office tomorrow with my February rent check." },
            { speaker: "Man", text: "OK. See you then." }
        ]
    }
];
