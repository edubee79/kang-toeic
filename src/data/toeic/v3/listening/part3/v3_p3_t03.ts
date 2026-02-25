import { Part3Set } from './types';

export const test3Data: Part3Set[] = [
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s1",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_32-34.mp3",
        questions: [
            {
                id: "v3-p3-t03-q32",
                text: "Why is the woman seeking a temporary position?",
                classification: "WHY_REASON",
                options: {
                    A: "To become familiar with local opportunities",
                    B: "To gain experience in a new field",
                    C: "To have more scheduling flexibility",
                    D: "To focus on a specific project"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t03-q33",
                text: "What skill does the woman have?",
                classification: "DETAIL",
                options: {
                    A: "Accounting",
                    B: "Event organizing",
                    C: "Team management",
                    D: "Computer programming"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t03-q34",
                text: "Why does the man tell the woman to come in on Wednesday?",
                classification: "WHY_REASON",
                options: {
                    A: "To complete some paperwork",
                    B: "To visit a job site",
                    C: "To fill out a survey",
                    D: "To present a certificate"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Thank you for registering with the Zimmerman Staffing Agency, Ms. Vogel. Why are you interested in finding a temporary position?"
            },
            {
                speaker: "W-Br",
                text: "Well, I moved here recently, so I thought your agency would be a good place to find out about local companies. I don't have a business network here yet."
            },
            {
                speaker: "M-Cn",
                text: "I see. Your résumé says you have computer programming experience. That skill's in high demand."
            },
            {
                speaker: "W-Br",
                text: "Yes, I did programming for five years at my last job, so I'm very comfortable with it."
            },
            {
                speaker: "M-Cn",
                text: "Excellent. We should be able to place you with an employer shortly. As part of the process though, please come in on Wednesday to complete your paperwork."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s2",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t03-q35",
                text: "Why does the man ask Rosa to go to Montreal?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "To meet with a client",
                    B: "To attend a trade show",
                    C: "To train for a position",
                    D: "To oversee a construction project"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q36",
                text: "What does the woman ask permission to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Take a coworker",
                    B: "Change a flight",
                    C: "Postpone a deadline",
                    D: "Increase an advertising budget"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t03-q37",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Prepare some sales data",
                    B: "Order some business cards",
                    C: "Make a phone call",
                    D: "Go to lunch"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hi, Rosa. I'd like you to attend the annual technology trade show in Montreal. A lot of other electronics companies will be there to showcase their latest products."
            },
            {
                speaker: "W-Am",
                text: "That's great! I appreciate the opportunity. Can I choose someone from my team to take with me? That way we'll be able to visit more presentations."
            },
            {
                speaker: "M-Au",
                text: "Yes, that's a good idea. I'd recommend asking Taro to come with you. Why don't I call him to see if he can come to my office now and discuss it with us."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s3",
        contextType: "B4. 문의 / 안내",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t03-q38",
                text: "Who is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A lawyer",
                    B: "An electrician",
                    C: "A dentist",
                    D: "A banker"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q39",
                text: "Why does the man apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "Some documents are missing.",
                    B: "Some equipment is not working.",
                    C: "An assistant is late.",
                    D: "A policy was not explained."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t03-q40",
                text: "Why is Ms. Yamamoto asked to fill out a form?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "To update her contact information",
                    B: "To set up a payment plan",
                    C: "To request some records",
                    D: "To opt for paperless statements"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Well, Ms. Yamamoto, your x-rays look good. Your teeth and gums are healthy. We'll do a cleaning at your next appointment."
            },
            {
                speaker: "W-Am",
                text: "Thank you, but I... I thought I was going to get my teeth cleaned today. I made an appointment for x-rays and a cleaning."
            },
            {
                speaker: "M-Au",
                text: "I'm... sorry. Whoever scheduled your appointment must not've explained our policy. For new patients, the first visit is an inspection and x-rays."
            },
            {
                speaker: "W-Am",
                text: "I see. OK."
            },
            {
                speaker: "M-Au",
                text: "Ms. Yamamoto, please schedule a cleaning for Ms. Patterson."
            },
            {
                speaker: "W-Br",
                text: "Of course, I will. Before I do that, I see in your file that we don't have your records from your previous dentist. Would you please fill out this form so we can request them?"
            },
            {
                speaker: "W-Am",
                text: "Am sure."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s4",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t03-q41",
                text: "Who will the woman give a presentation to?",
                classification: "WHO_LOC",
                options: {
                    A: "New employees",
                    B: "Government officials",
                    C: "Potential investors",
                    D: "Board members"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q42",
                text: "What does the woman ask the man about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Adjusting a microphone",
                    B: "Turning on a monitor",
                    C: "Connecting a speaker",
                    D: "Using a camera"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t03-q43",
                text: "What will the man do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Check a manual",
                    B: "Give a demonstration",
                    C: "Ask a colleague for help",
                    D: "Look for a tool"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Hi, I'm from the IT department. You wanted help setting up for a teleconference? I can answer any questions you have about the equipment."
            },
            {
                speaker: "W-Br",
                text: "Thanks. This is an important meeting. We're looking to finance a new project, and I'm going to present to some people we hope will become investors."
            },
            {
                speaker: "M-Cn",
                text: "Well, we'll make sure the technology will work smoothly."
            },
            {
                speaker: "W-Br",
                text: "This camera will automatically move to focus on whoever is speaking, right?"
            },
            {
                speaker: "M-Cn",
                text: "Yes."
            },
            {
                speaker: "W-Br",
                text: "But there will also be times that I want to control the camera manually. Can I do that?"
            },
            {
                speaker: "M-Cn",
                text: "Sure, you can do that on the control panel. Let me demonstrate how it works."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s5",
        contextType: "A4. 재무 / 비용 / 승인",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t03-q44",
                text: "What is the man concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Venue availability",
                    B: "Product efficiency",
                    C: "A project budget",
                    D: "A guest list"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q45",
                text: "Who is Stefan Vogel?",
                classification: "WHO_LOC",
                options: {
                    A: "A furniture designer",
                    B: "A photographer",
                    C: "An accountant",
                    D: "An event planner"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q46",
                text: "What will the speakers do this afternoon?",
                classification: "DETAIL",
                options: {
                    A: "Review some plans",
                    B: "Consult with a graphic designer",
                    C: "Choose some colors",
                    D: "Survey other team members"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Ms. Gupta, do you think you could divert a little more money to the spring catalog?"
            },
            {
                speaker: "W-Am",
                text: "Isn't your budget the same as last season's?"
            },
            {
                speaker: "M-Au",
                text: "It turns out the cost of photography will be higher this time. Our spring footwear collection has lots of new colors and designs, and some old ones are being discontinued. About half of the photos from last season need to be replaced."
            },
            {
                speaker: "W-Am",
                text: "Oh, I didn't realize that."
            },
            {
                speaker: "M-Au",
                text: "We could try to find another photographer, but Stefan Vogel always does such a good job."
            },
            {
                speaker: "W-Am",
                text: "And we should keep him. Let's look at the plans for the catalog this afternoon and see what revisions can be made."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s6",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t03-q47",
                text: "Where do the speakers work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a hardware store",
                    B: "At a construction site",
                    C: "At a factory",
                    D: "At a hotel"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t03-q48",
                text: "What does the man mean when he says, \"And the rooms are so close together\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "Some renovations will be finished quickly.",
                    B: "A work schedule will be revised.",
                    C: "Noise levels will be a problem.",
                    D: "An architect should be consulted."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q49",
                text: "What does the woman hope to do before June?",
                classification: "DETAIL",
                options: {
                    A: "Take inventory",
                    B: "Order new uniforms",
                    C: "Test out some technology",
                    D: "Prepare for an inspection"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Did you hear about the smart screens that'll be installed in the guest rooms?"
            },
            {
                speaker: "W-Am",
                text: "I did. They're supposed to make it easier for guests to control the temperature in their rooms, schedule wake-up calls, order room service... things like that. And installation should only take an hour in each hotel room."
            },
            {
                speaker: "M-Cn",
                text: "But they're going to be using power tools. And the rooms are so close together."
            },
            {
                speaker: "W-Am",
                text: "The guest rooms are mostly soundproof. I just hope we have time to test the screens out before our busy season in June. I don't want to deal with complaints about them not working."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s7",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t03-q50",
                text: "What type of product are the speakers discussing?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Pencils",
                    B: "Backpacks",
                    C: "Sneakers",
                    D: "Folders"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q51",
                text: "What is the woman frustrated by?",
                classification: "DETAIL",
                options: {
                    A: "Some customers wrote a negative review.",
                    B: "Some equipment is malfunctioning.",
                    C: "Some team members are unavailable.",
                    D: "Some packages have not arrived."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q52",
                text: "Why does the man say, \"The school year is starting in three months\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To request some time off from work",
                    B: "To correct an error in a schedule",
                    C: "To express interest in an assignment",
                    D: "To emphasize the need for urgency"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hi, Mei Ting. Do you have any updates on how the designs are coming along for our new line of school backpacks? The factory will need those to begin production."
            },
            {
                speaker: "W-Br",
                text: "I'm a bit frustrated, honestly. The design team originally planned to meet this week to make final decisions about pocket sizes for the backpacks, but... Irina's been at the School Supply Convention all week and Samir's out on vacation."
            },
            {
                speaker: "M-Au",
                text: "So, what are you planning to do? The school year is starting in three months."
            },
            {
                speaker: "W-Br",
                text: "I was hoping to get some advice from you, actually... since you used to lead the design team."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s8",
        contextType: "B1. 불만 / 문제 제기",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t03-q53",
                text: "What does the women's company sell?",
                classification: "DETAIL",
                options: {
                    A: "Construction vehicles",
                    B: "Power tools",
                    C: "Wood products",
                    D: "Home appliances"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q54",
                text: "Why is the man visiting the company?",
                classification: "WHY_REASON",
                options: {
                    A: "To interview for a job",
                    B: "To revise a contract",
                    C: "To investigate a problem",
                    D: "To make a complaint"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q55",
                text: "What does the man ask the women to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Lead him to a specific location",
                    B: "Provide him a discounted service",
                    C: "Demonstrate a technical procedure",
                    D: "Explain a company policy"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hello, I'm George from McKinnie Environmental Engineering."
            },
            {
                speaker: "W-Am",
                text: "Hi, thanks for coming. As you can see, we manage a large forest here. We provide lumber, plywood, and fiberboard for the construction and furniture industries. These trees are our business."
            },
            {
                speaker: "M-Au",
                text: "And lately you've been noticing a problem?"
            },
            {
                speaker: "W-Br",
                text: "Yes, several acres of pine on the other end of our property... the needles are all brown. They look really unhealthy. But we can't figure out what's wrong."
            },
            {
                speaker: "M-Au",
                text: "I'll try to determine the cause. Might be a nutrient deficiency. First, I'll conduct some soil tests. Can you show me to the site? I'll follow you in my truck."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s9",
        contextType: "B2. 주문 / 배송",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t03-q56",
                text: "What is the woman renovating?",
                classification: "DETAIL",
                options: {
                    A: "A kitchen",
                    B: "A swimming pool",
                    C: "A bathroom",
                    D: "A garden"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q57",
                text: "What service does the man's company provide?",
                classification: "DETAIL",
                options: {
                    A: "Landscaping",
                    B: "Waste removal",
                    C: "Safety inspections",
                    D: "Concrete mixing"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q58",
                text: "According to the man, how is a cost determined?",
                classification: "DETAIL",
                options: {
                    A: "By number of workers",
                    B: "By project duration",
                    C: "By weight",
                    D: "By area"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "How can I help you?"
            },
            {
                speaker: "W-Br",
                text: "Hello. I'm doing some renovating at home. I'll be replacing all the pipes, the sink, and the bathtub in my bathroom. The pipes are lead, and the other fixtures are cast iron. They're all very heavy."
            },
            {
                speaker: "M-Cn",
                text: "That's no problem. We'll bring a dumpster out to your home, you fill it up with scrap, and then we'll come remove it when you're ready."
            },
            {
                speaker: "W-Br",
                text: "OK. So, is payment determined by the number of days I keep the dumpster?"
            },
            {
                speaker: "M-Cn",
                text: "No, we'll weigh it before and after and charge you accordingly. Here's a list of charges by kilogram."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s10",
        contextType: "B4. 문의 / 안내",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t03-q59",
                text: "Where does the woman work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a museum",
                    B: "At a movie theater",
                    C: "At a newspaper office",
                    D: "At a photography studio"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t03-q60",
                text: "Who does the woman say she has hired?",
                classification: "WHO_LOC",
                options: {
                    A: "An engineer",
                    B: "A musician",
                    C: "An interpreter",
                    D: "A scientist"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t03-q61",
                text: "What problem does the man mention?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Traffic noise",
                    B: "Late deliveries",
                    C: "Uncomfortable seating",
                    D: "Inadequate lighting"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Finley Science Museum. Can I help you?"
            },
            {
                speaker: "M-Cn",
                text: "Hi, I'm calling about the asteroid lecture at your planetarium this Friday. I represent a group of people with hearing impairments who'll be attending the lecture."
            },
            {
                speaker: "W-Am",
                text: "Oh, yes. I've already been notified, and I've hired a sign-language interpreter. Your group has reserved seats on the right side of the theater, so they'll have a direct view of her."
            },
            {
                speaker: "M-Cn",
                text: "Great, thank you. One more thing—at similar events, there've been problems with the venue being too dark. Could you make sure there's a spotlight on the interpreter?"
            },
            {
                speaker: "W-Am",
                text: "Absolutely—I'll be happy to arrange that."
            }
        ]
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s11",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_62-64.mp3",
        questions: [
            {
                id: "v3-p3-t03-q62",
                text: "Why is the woman calling?",
                classification: "WHY_REASON",
                options: {
                    A: "To compliment a staff member",
                    B: "To schedule an appointment",
                    C: "To criticize a policy",
                    D: "To check on an assignment"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t03-q63",
                text: "Look at the graphic. Which drawer will the man probably check next?",
                classification: "GRAPHIC",
                options: {
                    A: "Drawer 1",
                    B: "Drawer 2",
                    C: "Drawer 3",
                    D: "Drawer 4"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q64",
                text: "What does the man say about some processes?",
                classification: "DETAIL",
                options: {
                    A: "They are described in a training program.",
                    B: "They take too long to complete.",
                    C: "They meet regulations.",
                    D: "They are easy to learn."
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "Hi, Hiroshi, it's Natalia. I know you're in the middle of completing the internal audit of our company's manufacturing processes, and I just wanted to know how that's going."
            },
            {
                speaker: "M-Au",
                text: "Almost done. It all looks good so far. There was one thing... I can't find the retired work instructions, you know, the old paper copies."
            },
            {
                speaker: "W-Br",
                text: "The old work instructions are all in the green filing cabinet in the office. The drawers are labeled."
            },
            {
                speaker: "M-Au",
                text: "OK, great... The new industry regulations are pretty strict, but, like I said, the processes that I've checked so far are all in compliance."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_03/Part_03/p3_q62.png"
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s12",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_65-67.mp3",
        questions: [
            {
                id: "v3-p3-t03-q65",
                text: "Where do the speakers work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a restaurant",
                    B: "At a hotel",
                    C: "At a travel agency",
                    D: "At a marketing firm"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t03-q66",
                text: "Look at the graphic. How much extra money will the man receive in his next paycheck?",
                classification: "GRAPHIC",
                options: {
                    A: "$400",
                    B: "$300",
                    C: "$200",
                    D: "$100"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q67",
                text: "What does the man say he will do with the extra money?",
                classification: "DETAIL",
                options: {
                    A: "Fix his car",
                    B: "Give it to his parents",
                    C: "Put it in the bank",
                    D: "Buy a new phone"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Hassan, thanks for your help motivating the other servers to collect surveys from customers. We collected over four hundred responses. The owners are going to use the feedback to make some changes to the menu and the table settings."
            },
            {
                speaker: "M-Au",
                text: "Your incentive of a bonus certainly helped persuade all the servers. I collected 63, and I know I'm looking forward to having a little extra in my paycheck."
            },
            {
                speaker: "W-Am",
                text: "Any plans for how you're going to spend it?"
            },
            {
                speaker: "M-Au",
                text: "Actually, my phone is really old, and I've been wanting to upgrade it. The extra cash will help with that."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_03/Part_03/p3_q65.png"
    },
    {
        testId: 3,
        vol: 3,
        setId: "v3-p3-t03-s13",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_68-70.mp3",
        questions: [
            {
                id: "v3-p3-t03-q68",
                text: "What is the woman planning a celebration for?",
                classification: "DETAIL",
                options: {
                    A: "A business merger",
                    B: "A colleague's promotion",
                    C: "A product launch",
                    D: "A company anniversary"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q69",
                text: "Look at the graphic. Which day is the man attending a music festival?",
                classification: "GRAPHIC",
                options: {
                    A: "On Thursday",
                    B: "On Friday",
                    C: "On Saturday",
                    D: "On Sunday"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t03-q70",
                text: "What does the woman say she will do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Purchase a gift",
                    B: "Decorate a room",
                    C: "Make a reservation",
                    D: "Send an invitation"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Satoshi, I'm planning a staff party to celebrate Lena's promotion to director of marketing."
            },
            {
                speaker: "M-Cn",
                text: "That's a great idea. When are you thinking of having the party?"
            },
            {
                speaker: "W-Am",
                text: "Most people said they'd be available around five on March twenty-second. Does that work for you?"
            },
            {
                speaker: "M-Cn",
                text: "Well, I have tickets to a music festival that night, but the festival doesn't start until seven on the twenty-second, so I can come for a little while."
            },
            {
                speaker: "W-Am",
                text: "Great! I'll make a reservation at the new restaurant on Baker Street right away. I know Lena has been wanting to try it."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_03/Part_03/p3_q68.png"
    }
];
