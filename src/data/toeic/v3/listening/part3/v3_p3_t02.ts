import { Part3Set } from './types';

export const test2Data: Part3Set[] = [
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s1",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_32-34.mp3",
        questions: [
            {
                id: "v3-p3-t02-q32",
                text: "Why does the man want to buy Ms. Jefferson some flowers?",
                classification: "WHY_REASON",
                options: {
                    A: "She was promoted.",
                    B: "She won an award.",
                    C: "She is moving.",
                    D: "She is retiring."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q33",
                text: "According to the woman, where is Greenwood Flower Shop?",
                classification: "DETAIL",
                options: {
                    A: "In a shopping mall",
                    B: "In a train station",
                    C: "Next to a café",
                    D: "Across from the library"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t02-q34",
                text: "What does the man say he will do before he leaves the office?",
                classification: "DETAIL",
                options: {
                    A: "Fill out a time sheet",
                    B: "Send an e-mail",
                    C: "Finish a budget proposal",
                    D: "Arrange a meeting"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Hi, Anusha. This afternoon I'll be meeting with our financial consultant, Ms. Jefferson, for the last time. Since she's retiring next week, I wanted to get her some flowers. Do you know a good florist?"
            },
            {
                speaker: "W-Br",
                text: "The place I like best is called Greenwood Flower Shop. It's located just inside the train station, on the right-hand side."
            },
            {
                speaker: "M-Au",
                text: "Thanks. I just need to finalize this budget proposal, and then I'll head over to the station."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s2",
        contextType: "C2. 호텔 / 숙박",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t02-q35",
                text: "What did the man just do?",
                classification: "DETAIL",
                options: {
                    A: "He upgraded a flight.",
                    B: "He arranged for a rental car.",
                    C: "He prepared some presentation slides.",
                    D: "He made a hotel reservation."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q36",
                text: "What does the man remind the woman to do?",
                classification: "DETAIL",
                options: {
                    A: "Save her receipts",
                    B: "Bring her ID badge",
                    C: "Sign a form",
                    D: "Arrive early"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t02-q37",
                text: "What does the woman ask the man about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A bank",
                    B: "A post office",
                    C: "A restaurant",
                    D: "A conference center"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Ms. Weber, I've just booked the accommodations for your trip to Melbourne next week. I found you a hotel within a mile of the conference center."
            },
            {
                speaker: "W-Am",
                text: "That's great! Thank you for arranging that."
            },
            {
                speaker: "M-Au",
                text: "No problem. And remember to keep your receipts—you'll need them to get reimbursed."
            },
            {
                speaker: "W-Am",
                text: "OK, I'll do that. Oh, and does the hotel have a restaurant on-site? I'll be working in the hotel a lot, so it'd be convenient if I could eat there."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s3",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t02-q38",
                text: "What industry do the speakers most likely work in?",
                classification: "DETAIL",
                options: {
                    A: "Television",
                    B: "Fashion",
                    C: "Home furnishings",
                    D: "Advertising"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t02-q39",
                text: "What does the man suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Providing tours of a facility",
                    B: "Opening a branch office",
                    C: "Designing special fabric",
                    D: "Installing brighter lights"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t02-q40",
                text: "What is the woman concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A plan would be time-consuming.",
                    B: "A color is too bright.",
                    C: "Some sales figures have declined.",
                    D: "Some supplies will be expensive."
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "Antonio, I'd like your input about how we can make our spring athletic clothing line more original."
            },
            {
                speaker: "M-Cn",
                text: "How about designing some geometric patterns that we can have printed onto our fabric? That would set our clothing apart from other brands that use muted, solid colors."
            },
            {
                speaker: "W-Br",
                text: "I like that idea, but I'm worried it would add a step or two to our production schedule. We have several hard deadlines coming up soon. Let's try designing one patterned fabric for this season's line. If everything goes smoothly, we can do more next season."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s4",
        contextType: "D2. IT / 시스템 오류",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t02-q41",
                text: "What problem is being discussed?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A company manual contains some errors.",
                    B: "A shipment was not delivered on time.",
                    C: "Some materials are missing from a cabinet.",
                    D: "An e-mail system is not functioning properly."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q42",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A computer technician",
                    B: "A security guard",
                    C: "A warehouse manager",
                    D: "A sales representative"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t02-q43",
                text: "What are the women most likely planning to do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Sign a contract",
                    B: "Attend a training",
                    C: "Go to the airport",
                    D: "Revise a presentation"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "Hi Yoon-Ho. Do you have a minute? Anita and I need your assistance with our e-mails."
            },
            {
                speaker: "M-Au",
                text: "Sure. How can I help?"
            },
            {
                speaker: "W-Br",
                text: "The system seems to be running very slow. We've been experiencing long delays in receiving e-mails, right Anita?"
            },
            {
                speaker: "W-Am",
                text: "Yes. Since we have deadlines that are very time sensitive, can you look into this right away?"
            },
            {
                speaker: "M-Au",
                text: "You know, several people have already called us at the IT Department about it this morning—it's our top priority now."
            },
            {
                speaker: "W-Am",
                text: "Thanks. We're on our way to catch a flight now, but could you please call us when it's all taken care of?"
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s5",
        contextType: "B4. 문의 / 안내",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t02-q44",
                text: "Where does the woman work?",
                classification: "WHO_LOC",
                options: {
                    A: "At an amusement park",
                    B: "At a fitness center",
                    C: "At a bicycle-tour company",
                    D: "At an automobile dealership"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t02-q45",
                text: "Why is the man unable to make a reservation for next Thursday?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A calendar is fully booked.",
                    B: "An employee is on vacation.",
                    C: "Some roads will be closed.",
                    D: "Some equipment will be replaced."
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q46",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Pick up a brochure",
                    B: "Make a down payment",
                    C: "Provide a membership number",
                    D: "Write a customer review"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "Paniz Outdoor Tours. Can I help you?"
            },
            {
                speaker: "M-Cn",
                text: "I'm from Alderman Associates, and I'm calling to book a cycling tour of the city for my colleagues and me. There are eight of us, and we'd like to go next Thursday."
            },
            {
                speaker: "W-Br",
                text: "I'm sorry—we'll be closed next Thursday. We're replacing all of our bikes, and it'll take a few days to get them ready to ride."
            },
            {
                speaker: "M-Cn",
                text: "Oh, we work nearby, so we could go another time."
            },
            {
                speaker: "W-Br",
                text: "Great. So, what about the following Monday—June third?"
            },
            {
                speaker: "M-Cn",
                text: "That works. We have a membership with you already, so you should have all of our information on file."
            },
            {
                speaker: "W-Br",
                text: "In that case, just tell me your membership number, and I'll make the reservation."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s6",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t02-q47",
                text: "Who is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A news reporter",
                    B: "A photographer",
                    C: "A fashion designer",
                    D: "A translator"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t02-q48",
                text: "Why does the woman say, \"The issue is already being printed\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To apologize for an error",
                    B: "To provide reassurance",
                    C: "To indicate a schedule change",
                    D: "To decline an offer"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q49",
                text: "What does the woman ask the man to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Come in for an interview",
                    B: "Appear in a feature story",
                    C: "Travel for an assignment",
                    D: "Post some information online"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Ms. Khan, this is James Wilson, one of the freelance photographers for your magazine. I'm calling about the September issue."
            },
            {
                speaker: "W-Am",
                text: "Right. I know we're using some of your photos for the special spread about homes in San Francisco."
            },
            {
                speaker: "M-Cn",
                text: "Yes. But I have a few more shots I took this weekend when there was a beautiful sunset. Would you be interested in looking at those?"
            },
            {
                speaker: "W-Am",
                text: "The issue is already being printed."
            },
            {
                speaker: "M-Cn",
                text: "Oh, I see. Sorry to bother you, then."
            },
            {
                speaker: "W-Am",
                text: "Actually, I'm glad you called. We're opening a position for assistant photo editor, and I wonder if you can come in for an interview. I think you'd be great for the job."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s7",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t02-q50",
                text: "What kind of business do the speakers most likely work for?",
                classification: "DETAIL",
                options: {
                    A: "An automobile manufacturer",
                    B: "An insurance company",
                    C: "A county hospital",
                    D: "A construction firm"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t02-q51",
                text: "What problem do the women mention?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A building site did not pass an inspection.",
                    B: "A vehicle needs to be repaired.",
                    C: "Potential clients have not made a decision.",
                    D: "Some vendors are making late deliveries."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t02-q52",
                text: "What does the man recommend?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Offering a discount",
                    B: "Changing suppliers",
                    C: "Forming a committee",
                    D: "Closing a branch"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Emiko and Susan—could you give me an update on the negotiations with the city to purchase insurance through our company?"
            },
            {
                speaker: "W-Am",
                text: "Well, the city officials expressed interest in buying insurance for all of their emergency vehicles, including ambulances, through us. I sent them a quote, but unfortunately I'm still waiting to hear back."
            },
            {
                speaker: "W-Br",
                text: "I've been working on the account with the city parks department, and I have the same problem. They haven't committed yet, either."
            },
            {
                speaker: "M-Au",
                text: "Hmm, we could offer them a reduced first-year rate. That might motivate them to make a final decision quickly."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s8",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t02-q53",
                text: "What has the woman volunteered to do?",
                classification: "DETAIL",
                options: {
                    A: "Try out some new products",
                    B: "Purchase beverages for a luncheon",
                    C: "Lead a workshop session",
                    D: "Organize a hiring event"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t02-q54",
                text: "What does the man ask the woman to sign?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "An employee contract",
                    B: "An attendance sheet",
                    C: "A participant agreement",
                    D: "A service estimate"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t02-q55",
                text: "What will the woman most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Set up her computer",
                    B: "Go to another room",
                    C: "Have some lunch",
                    D: "Make a phone call"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Ms. Moreau, thank you for volunteering to participate in this product testing session."
            },
            {
                speaker: "W-Am",
                text: "It sounds interesting. So I'll be testing out some new designs for drinking mugs?"
            },
            {
                speaker: "M-Cn",
                text: "Exactly. We want to test if our mugs are easier to drink from than traditional mugs. Before we begin, could you please sign this agreement form? It states that we can use your comments in our marketing campaign."
            },
            {
                speaker: "W-Am",
                text: "Sure. But I have one question... Do you have different beverages available? I don't drink coffee."
            },
            {
                speaker: "M-Cn",
                text: "Oh, definitely—you'll have several to choose from. OK, now let's go join the other participants. Please follow me to Room B."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s9",
        questionRange: "56-58",
        contextType: "A4. 재무 / 비용 / 승인",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t02-q56",
                text: "Where most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a hair salon",
                    B: "At a catering hall",
                    C: "At a laundry service",
                    D: "At an energy company"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t02-q57",
                text: "Why does the woman say, \"they don't have as many clients, though\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To express pride in her company's growth",
                    B: "To explain why an expense is so high",
                    C: "To suggest that a strategy should continue",
                    D: "To question the accuracy of a client list"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t02-q58",
                text: "What will happen later today?",
                classification: "DETAIL",
                options: {
                    A: "Some supplies will be delivered.",
                    B: "An inspection will be conducted.",
                    C: "An employee meeting will be held.",
                    D: "An expense report will be submitted."
                },
                correctAnswer: "C"
            }
        ],
        script: [
            {
                speaker: "M-Cn",
                text: "Hi Irina, are you all finished styling your client's hair?"
            },
            {
                speaker: "W-Br",
                text: "Yes, I cut and blow dried it. She's all set. Now I'm going to sweep the floor and wash some towels."
            },
            {
                speaker: "M-Cn",
                text: "Thanks. I wanted to mention something... It seems we're all using too much electricity every month. I'd like us all to start thinking of ways to reduce that expense."
            },
            {
                speaker: "W-Br",
                text: "Oh? I didn't realize that was an issue."
            },
            {
                speaker: "M-Cn",
                text: "Well, the other salons I own spend about half of what this location does every month."
            },
            {
                speaker: "W-Br",
                text: "Hmm... they don't have as many clients, though."
            },
            {
                speaker: "M-Cn",
                text: "True, but I still think we all need to make changes nonetheless. We'll discuss it further at the employee meeting later today."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t02-q59",
                text: "Which industry do the speakers most likely work in?",
                classification: "DETAIL",
                options: {
                    A: "Tourism",
                    B: "Agriculture",
                    C: "Education",
                    D: "Engineering"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q60",
                text: "What does the man say he is concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Expenses",
                    B: "Safety",
                    C: "Competition",
                    D: "Space"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q61",
                text: "What does the man agree to do?",
                classification: "DETAIL",
                options: {
                    A: "Apply for some funding",
                    B: "Do some research",
                    C: "Organize a business trip",
                    D: "Assemble a work crew"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Thanks for meeting with me today, Diego. Our firm's been contracted by a ferry company to design a hydrogen-powered boat. They're hoping to cut down on their carbon emissions with a boat that runs on clean energy."
            },
            {
                speaker: "M-Cn",
                text: "Hmm. A hydrogen power source is going to need a lot of space. Since ferries usually transport cars, I'm concerned about where we'd place the hydrogen source."
            },
            {
                speaker: "W-Am",
                text: "Actually this ferry would give tours. So it won't be carrying vehicles, just passengers."
            },
            {
                speaker: "M-Cn",
                text: "Then maybe we could store the hydrogen on the deck?"
            },
            {
                speaker: "W-Am",
                text: "Possibly. Could you research that before we meet with the ferry company?"
            },
            {
                speaker: "M-Cn",
                text: "Absolutely."
            }
        ]
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s11",
        contextType: "C1. 항공 / 교통",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_62-64.mp3",
        questions: [
            {
                id: "v3-p3-t02-q62",
                text: "What does the woman remind the man about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "She used to live in the area.",
                    B: "She needs to stop at a store.",
                    C: "She attended a seminar last year.",
                    D: "She has just bought a new car."
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t02-q63",
                text: "Look at the graphic. Which exit will the speakers take?",
                classification: "GRAPHIC",
                options: {
                    A: "Maple Road",
                    B: "Carter Lane",
                    C: "Berk Street",
                    D: "High Road"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t02-q64",
                text: "What will the man ask his coworkers to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Cancel a reservation",
                    B: "Save some seats",
                    C: "Sign in at an event",
                    D: "Print some materials"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            {
                speaker: "M-Au",
                text: "Dolores, thanks again for offering to drive to the technology seminar. I'm not very familiar with the city of Hartsville."
            },
            {
                speaker: "W-Am",
                text: "It's no problem. I grew up in downtown Hartsville, remember? I know the area well."
            },
            {
                speaker: "M-Au",
                text: "Oh—that's right. Does it take long to get to the conference center from here? I know it's on Carter Lane."
            },
            {
                speaker: "W-Am",
                text: "Well, usually not—but the traffic report earlier said that the exit to Carter Lane is closed for repairs. We'll have to take exit eight. It'll take us about twenty minutes longer to get there."
            },
            {
                speaker: "M-Au",
                text: "Well, in that case, I'd better call our coworkers and ask them to save us some seats."
            },
            {
                speaker: "W-Am",
                text: "Good idea!"
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q62.png"
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s12",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_65-67.mp3",
        questions: [
            {
                id: "v3-p3-t02-q65",
                text: "Where does the conversation most likely take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a hotel",
                    B: "At an accounting firm",
                    C: "At a doctor's office",
                    D: "At a school"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q66",
                text: "Look at the graphic. Which bin will the man use?",
                classification: "GRAPHIC",
                options: {
                    A: "Bin 1",
                    B: "Bin 2",
                    C: "Bin 3",
                    D: "Bin 4"
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t02-q67",
                text: "What does the woman suggest?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Using a cart",
                    B: "Waiting for a confirmation",
                    C: "Giving an assignment to a colleague",
                    D: "Rescheduling an appointment with a client"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "W-Br",
                text: "Good work helping the office go paperless, Kentaro. You've scanned and shredded everything that had any personal student data, correct?"
            },
            {
                speaker: "M-Au",
                text: "Yes, so now we can get rid of the rest of these old documents—class schedules, information sheets to parents—all of it can be recycled. The bins are out back, right?"
            },
            {
                speaker: "W-Br",
                text: "That's right, behind the gym. But don't try to carry all these boxes; they're too heavy. I brought a cart over from the maintenance closet for you to use."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q65.png"
    },
    {
        testId: 2,
        vol: 3,
        setId: "v3-p3-t02-s13",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_68-70.mp3",
        questions: [
            {
                id: "v3-p3-t02-q68",
                text: "What type of event are the speakers organizing?",
                classification: "DETAIL",
                options: {
                    A: "An award ceremony",
                    B: "A grand-opening celebration",
                    C: "A foreign official's reception",
                    D: "A fund-raiser"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t02-q69",
                text: "Look at the graphic. What time does the man think the music should begin?",
                classification: "GRAPHIC",
                options: {
                    A: "At 5:00 P.M.",
                    B: "At 6:00 P.M.",
                    C: "At 7:00 P.M.",
                    D: "At 8:00 P.M."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t02-q70",
                text: "What information does the man suggest adding to the invitation?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "The name of a sponsor",
                    B: "The location of a concert hall",
                    C: "A Web site address",
                    D: "A list of performers"
                },
                correctAnswer: "A"
            }
        ],
        script: [
            {
                speaker: "W-Am",
                text: "Riccardo, could you take a look at this invitation? It's a draft I put together for our upcoming fund-raiser. Your feedback would be helpful."
            },
            {
                speaker: "M-Au",
                text: "Sure. Hmm... It looks good, but we should have the live music start at the same time as dinner. Otherwise, there'll be very little time for the band to perform."
            },
            {
                speaker: "W-Am",
                text: "You're right. Anything else?"
            },
            {
                speaker: "M-Au",
                text: "Let's add a line at the bottom with the name of our organization, since we're sponsoring the event."
            },
            {
                speaker: "W-Am",
                text: "OK, that's an easy addition."
            }
        ],
        image: "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q68.png"
    }
];
