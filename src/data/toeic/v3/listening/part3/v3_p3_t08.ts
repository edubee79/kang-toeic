import { Part3Set } from './types';

export const test8Data: Part3Set[] = [
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s1",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_32-34.mp3",
        questions: [
            {
                id: "v3-p3-t08-q32",
                text: "Where are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a museum",
                    B: "At a public library",
                    C: "At an art supply shop",
                    D: "At a botanical garden"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q33",
                text: "What type of pass does the woman qualify for?",
                classification: "DETAIL",
                options: {
                    A: "Student",
                    B: "Local resident",
                    C: "Senior citizen",
                    D: "Tour group"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q34",
                text: "What will the man check?",
                classification: "DETAIL",
                options: {
                    A: "A ticket",
                    B: "A receipt",
                    C: "An event schedule",
                    D: "An identification card"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "M-Cn", text: "Welcome to the Trellisville Museum of Art. How can I help you?" },
            { speaker: "W-Am", text: "I'd like an all-day pass, please." },
            { speaker: "M-Cn", text: "Sure. Just so you know, we've introduced resident and nonresident prices for the museum. Do you happen to be a resident of Trellisville?" },
            { speaker: "W-Am", text: "Yes, I've lived here for more than twenty years." },
            { speaker: "M-Cn", text: "Wonderful. All I need to see is a piece of ID with your address." },
            { speaker: "W-Am", text: "OK, here's my driver's license." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s2",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t08-q35",
                text: "What type of business does the woman work for?",
                classification: "DETAIL",
                options: {
                    A: "A construction company",
                    B: "A real estate agency",
                    C: "A law firm",
                    D: "A medical office"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t08-q36",
                text: "What does the man ask the woman to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Reschedule an appointment",
                    B: "Forward a telephone call",
                    C: "Send an invoice",
                    D: "Provide a refund"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q37",
                text: "What does the woman say a business has recently done?",
                classification: "DETAIL",
                options: {
                    A: "It has updated a payment system.",
                    B: "It has purchased new equipment.",
                    C: "It has renovated a room.",
                    D: "It has hired temporary staff."
                },
                correctAnswer: "C"
            }
        ],
        script: [
            { speaker: "W-Br", text: "Hello, I'm calling from Dr. Park's office. This is a courtesy reminder that you have an annual health checkup on Friday at two thirty P.M." },
            { speaker: "M-Cn", text: "Oh, I completely forgot about that. But... uh... my car needs to be repaired, and I'm taking it to the mechanic on Friday. Could I reschedule for next week?" },
            { speaker: "W-Br", text: "Let's see... It looks like we have only one appointment available at ten A.M. next Wednesday." },
            { speaker: "M-Cn", text: "I'll take it." },
            { speaker: "W-Br", text: "OK. It's scheduled. When you come, I hope you'll enjoy our new waiting room. We've recently remodeled it to make it more comfortable." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s3",
        contextType: "B4. 일반문의",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t08-q38",
                text: "Why is a street blocked off?",
                classification: "WHY_REASON",
                options: {
                    A: "A tree is being removed.",
                    B: "A car is being towed.",
                    C: "Some charging stations are being installed.",
                    D: "Some holes are being filled."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t08-q39",
                text: "What most likely is the woman's profession?",
                classification: "DETAIL",
                options: {
                    A: "Auto mechanic",
                    B: "Musician",
                    C: "Park ranger",
                    D: "Teacher"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q40",
                text: "What does the man suggest the woman do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Purchase an electric car",
                    B: "File a complaint",
                    C: "Postpone a meeting",
                    D: "Drive to another location"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "W-Am", text: "Excuse me, sir. Are you part of the road crew that's working here? I'm wondering why I can't turn on to this street." },
            { speaker: "M-Cn", text: "The street will be blocked off until five P.M. while we put in some charging stations for electric cars. Once they're installed, people will be able to charge their cars while they're parked here." },
            { speaker: "W-Am", text: "But I'm already late for a recording session, and this street has the closest parking spots to the music studio. Plus, I have to carry my guitars there." },
            { speaker: "M-Cn", text: "I'm sorry, but if you go to the next block, there are some open spots there." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s4",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t08-q41",
                text: "Where do the speakers work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a grocery store",
                    B: "At a cooking school",
                    C: "At a restaurant",
                    D: "At a food-processing plant"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q42",
                text: "What does the woman ask the man to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Make some deliveries",
                    B: "Open a cash register",
                    C: "Label some products",
                    D: "Clean some machinery"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q43",
                text: "What does the woman imply when she says, \"we open at seven\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "The man must work quickly.",
                    B: "The man should take a break.",
                    C: "The man unlocked the doors too early.",
                    D: "The man is mistaken about a schedule."
                },
                correctAnswer: "A"
            }
        ],
        script: [
            { speaker: "M-Au", text: "Good morning, Ms. Osman. I arrived a little early, so I already swept the aisles and I'm in the process of restocking the frozen foods section. Is there anything else you need me to do to get the store ready for the day?" },
            { speaker: "W-Br", text: "Can you also open up the second cash register?" },
            { speaker: "M-Au", text: "Sure, I'll do that as soon as I finish restocking the frozen vegetables." },
            { speaker: "W-Br", text: "OK... Remember, though, we open at seven." },
            { speaker: "M-Au", text: "Got it. I just have a few boxes of vegetables left." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s5",
        contextType: "B4. 일반문의",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t08-q44",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A graphic designer",
                    B: "A sales person",
                    C: "An auto mechanic",
                    D: "A human resources executive"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q45",
                text: "Why is the woman worried she might not be offered a job?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "She missed an application deadline.",
                    B: "She has limited experience.",
                    C: "She is competing with other qualified candidates.",
                    D: "She did not perform well in a telephone interview."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t08-q46",
                text: "What does the woman say she will do on Thursday?",
                classification: "DETAIL",
                options: {
                    A: "Call a recruiter",
                    B: "Tour a factory",
                    C: "Sign a contract",
                    D: "Update a résumé"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            { speaker: "M-Cn", text: "How'd the interview for the graphic designer position with Hackley Motors go?" },
            { speaker: "W-Am", text: "Very well! They called me back for a second interview." },
            { speaker: "M-Cn", text: "Wow, they must've really liked you." },
            { speaker: "W-Am", text: "I think so. But there's quite a bit of competition. A lot of qualified people are applying for this graphic designer position, so I really need to do well in the next round of interviews." },
            { speaker: "M-Cn", text: "I'm sure you'll do great. When's the second interview?" },
            { speaker: "W-Am", text: "Thursday. I'll be visiting the factory and they'll show me around." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s6",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t08-q47",
                text: "Where does the conversation take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a bookshop",
                    B: "At a supermarket",
                    C: "At a furniture store",
                    D: "At a craft store"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q48",
                text: "What is the purpose of the man's visit?",
                classification: "WHAT_WHICH",
                options: {
                    A: "To have an item appraised",
                    B: "To film a commercial",
                    C: "To deliver some supplies",
                    D: "To conduct some repairs"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q49",
                text: "According to Margaret, what can be found by the entrance?",
                classification: "DETAIL",
                options: {
                    A: "A shopping basket",
                    B: "A brochure",
                    C: "A light switch",
                    D: "A plastic cover"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "W-Am", text: "Welcome to Sandelman's Rare Books. How can I help you?" },
            { speaker: "M-Au", text: "Hi, I have this first edition book that I'd like to know the value of. I called yesterday to confirm that you do book appraisals here..." },
            { speaker: "W-Am", text: "Yes, my colleague, Margaret, assesses the value of books." },
            { speaker: "W-Br", text: "Hi, I'm Margaret. I see that your book is in... fair condition. Where do you store it?" },
            { speaker: "M-Au", text: "I keep it on my bookcase at home." },
            { speaker: "W-Br", text: "I ask because it looks like it's got some sun damage. It's a good idea to use a plastic cover to protect a book like this from exposure to the sunlight. We have some near the entrance with the other maintenance products, if you're interested." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s7",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t08-q50",
                text: "Where does the man most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a hotel",
                    B: "At a post office",
                    C: "At a travel agency",
                    D: "At an office supply store"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q51",
                text: "Why was the woman unavailable for two weeks?",
                classification: "WHY_REASON",
                options: {
                    A: "She was on vacation.",
                    B: "She was moving to a new location.",
                    C: "She was traveling for business.",
                    D: "She was without phone service."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t08-q52",
                text: "What does the man recommend doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Filing a complaint",
                    B: "Visiting another location",
                    C: "Making reservations online",
                    D: "Downloading a mobile application"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "W-Br", text: "Hi. I'm here to pick up a package. I found this notice on my door indicating I missed a delivery." },
            { speaker: "M-Cn", text: "OK, let me check my computer. Hmm, apparently the postal carrier tried to deliver it three times, but no one was home to sign for it." },
            { speaker: "W-Br", text: "Oh no! I've been away on business the last two weeks. I just saw the notice yesterday." },
            { speaker: "M-Cn", text: "I'm sorry, but it's already been returned to the sender." },
            { speaker: "W-Br", text: "I understand. Is there any way to avoid this in the future?" },
            { speaker: "M-Cn", text: "I'd suggest downloading our mobile application. Then you can track packages and receive delivery notifications online." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s8",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t08-q53",
                text: "According to the speakers, what has recently been completed?",
                classification: "DETAIL",
                options: {
                    A: "A map",
                    B: "A brochure",
                    C: "A hiking trail",
                    D: "A memorial statue"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q54",
                text: "What do the women suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Expanding parking areas",
                    B: "Organizing an art festival",
                    C: "Changing a bus route",
                    D: "Offering walking tours"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t08-q55",
                text: "Why will Priyanka post a public notice?",
                classification: "WHY_REASON",
                options: {
                    A: "To identify ticket sale locations",
                    B: "To encourage people to vote",
                    C: "To request volunteers",
                    D: "To announce some winners"
                },
                correctAnswer: "C"
            }
        ],
        script: [
            { speaker: "M-Cn", text: "Great work, both of you, on the new visitor brochure for Silverton. The pictures you selected for it really highlight the town nicely." },
            { speaker: "W-Am", text: "Thanks. Now we can spend time focusing on other ways that our committee can promote tourism in Silverton. Priyanka and I have a suggestion." },
            { speaker: "W-Br", text: "Right. We think it'd be a good idea to offer walking tours of the city center as a way to teach visitors about our town's history. We could ask for volunteers to run the tours. I can post a notice about it around town." }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s9",
        contextType: "B4. 일반문의",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t08-q56",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a cosmetics company",
                    B: "At a home appliance outlet",
                    C: "At an art supply store",
                    D: "At a textile factory"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q57",
                text: "What does the man say about some new machinery?",
                classification: "DETAIL",
                options: {
                    A: "It requires very little maintenance.",
                    B: "It is easy to learn how to use.",
                    C: "It has made a process faster.",
                    D: "It has not been installed yet."
                },
                correctAnswer: "C"
            },
            {
                id: "v3-p3-t08-q58",
                text: "What does the woman ask the man to prepare?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "A price list",
                    B: "A meeting invitation",
                    C: "A handbook",
                    D: "A report"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "W-Am", text: "Enzo, have you looked at the latest production numbers for the Shimmer Bright moisturizing lotion?" },
            { speaker: "M-Cn", text: "Yes, our production is up by nearly twenty percent. And not only for the lotion, but also for some of the lip glosses and nail polishes." },
            { speaker: "W-Am", text: "That's great to hear! I was wondering how it was going since we upgraded the assembly line machinery." },
            { speaker: "M-Cn", text: "The new machinery has definitely sped up the manufacturing process." },
            { speaker: "W-Am", text: "I have a meeting tomorrow with the management team. Do you think you could prepare a status report that I could share at the meeting?" }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t08-q59",
                text: "Why did the man miss a conference?",
                classification: "WHY_REASON",
                options: {
                    A: "His plane was delayed.",
                    B: "He was busy with a project.",
                    C: "He was not feeling well.",
                    D: "He missed a registration deadline."
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q60",
                text: "What does the man recommend the woman do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Edit a press release",
                    B: "Consult with a coworker",
                    C: "Hire a marketing expert",
                    D: "Review a departmental budget"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q61",
                text: "What does the woman mean when she says, \"I ran out of handouts\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She was unprepared for a presentation.",
                    B: "A coworker made an error.",
                    C: "A presentation was well attended.",
                    D: "Some information can only be found online."
                },
                correctAnswer: "C"
            }
        ],
        script: [
            { speaker: "M-Au", text: "Hi Mary. I'm sorry I didn't make it to the biotech conference last week. I needed to finish an important project." },
            { speaker: "W-Br", text: "No problem. You know, I met a reporter at the conference.... She's really interested in our company's new medical device. She's going to interview me about it this week for a science magazine." },
            { speaker: "M-Au", text: "That'll make the marketing department happy. You should reach out to one of our coworkers in that department." },
            { speaker: "W-Br", text: "That's a good idea. I'll talk to Megumi Ito." },
            { speaker: "M-Au", text: "So how did your conference presentation go? I know you were worried about attendance. You said you probably prepared too many materials for a small crowd." },
            { speaker: "W-Br", text: "Actually, I ran out of handouts!" },
            { speaker: "M-Au", text: "Nice!" }
        ]
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s11",
        contextType: "B4. 일반문의",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_62-64.mp3",
        questions: [
            {
                id: "v3-p3-t08-q62",
                text: "What will the speakers ask about?",
                classification: "ASK_QUESTION",
                options: {
                    A: "A refund",
                    B: "A seat change",
                    C: "Food options",
                    D: "Internet access"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q63",
                text: "What do the speakers want to prepare for?",
                classification: "DETAIL",
                options: {
                    A: "An employee interview",
                    B: "A meeting with potential clients",
                    C: "An annual safety inspection",
                    D: "A product-testing session"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q64",
                text: "Look at the graphic. What platform will speakers go to?",
                classification: "GRAPHIC",
                options: {
                    A: "Platform 3",
                    B: "Platform 9",
                    C: "Platform 12",
                    D: "Platform 17"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "W-Am", text: "Hi, Alberto. I couldn't get us tickets next to each other, but we can ask the train conductor about switching our seats when we get on board." },
            { speaker: "M-Au", text: "Oh, good. That way we can prepare for our meeting this afternoon. These could be really important clients for us. If they sign this contract, it'll definitely expand our business in that region." },
            { speaker: "W-Am", text: "You're right. I'll ask right away if we can switch. Let's see... our train leaves at nine twenty-four. Why don't we head over to the platform now?" },
            { speaker: "M-Au", text: "Sounds good." }
        ],
        image: "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q62.png"
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s12",
        contextType: "C3. 일정 변경 / 취소",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_65-67.mp3",
        questions: [
            {
                id: "v3-p3-t08-q65",
                text: "Who most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Landscapers",
                    B: "Photographers",
                    C: "Architects",
                    D: "Real estate agents"
                },
                correctAnswer: "A"
            },
            {
                id: "v3-p3-t08-q66",
                text: "What will the man do after he leaves?",
                classification: "DETAIL",
                options: {
                    A: "Have a vehicle repaired",
                    B: "E-mail a contract",
                    C: "Return some equipment",
                    D: "Go to a bank"
                },
                correctAnswer: "D"
            },
            {
                id: "v3-p3-t08-q67",
                text: "Look at the graphic. Where will the woman put up a sign?",
                classification: "GRAPHIC",
                options: {
                    A: "At location A",
                    B: "At location B",
                    C: "At location C",
                    D: "At location D"
                },
                correctAnswer: "B"
            }
        ],
        script: [
            { speaker: "M-Cn", text: "Hey, Lisa... I just talked to the property manager, and she's very happy with the new trees and flowers we planted." },
            { speaker: "W-Am", text: "Great! Does that mean we're done for the day?" },
            { speaker: "M-Cn", text: "Almost. We just have to water the new plants and pack up our tools. Can you do that, though? I need to head across town to the bank to make a deposit." },
            { speaker: "W-Am", text: "OK." },
            { speaker: "M-Cn", text: "Oh, and please put up our promotional sign. The property manager is fine with that. Can you put it up at the intersection of Hill Lane and Meadow Street?" },
            { speaker: "W-Am", text: "Sure, I'll do that." }
        ],
        image: "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q65.png"
    },
    {
        testId: 8,
        vol: 3,
        setId: "v3-p3-t08-s13",
        contextType: "B4. 일반문의",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_68-70.mp3",
        questions: [
            {
                id: "v3-p3-t08-q68",
                text: "Who recommended that the woman subscribe to the Portsville Times?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "A professor",
                    B: "A friend",
                    C: "A colleague",
                    D: "A relative"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q69",
                text: "Look at the graphic. Which subscription option does the man recommend?",
                classification: "GRAPHIC",
                options: {
                    A: "Option 1",
                    B: "Option 2",
                    C: "Option 3",
                    D: "Option 4"
                },
                correctAnswer: "B"
            },
            {
                id: "v3-p3-t08-q70",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Confirm an address",
                    B: "Choose a password",
                    C: "Provide a discount code",
                    D: "Process a payment"
                },
                correctAnswer: "D"
            }
        ],
        script: [
            { speaker: "M-Au", text: "This is customer service for the Portsville Times. How can I help you?" },
            { speaker: "W-Am", text: "Hi! I'm calling to subscribe to your paper. My best friend recommended it." },
            { speaker: "M-Au", text: "Well, please tell your friend that we appreciate her recommendation. Now, we have several options to choose from—are you interested in having the paper delivered to your house?" },
            { speaker: "W-Am", text: "No, that's not necessary. I prefer to read articles on my tablet computer." },
            { speaker: "M-Au", text: "All right, sounds like you just need online access, then. Our digital subscription is nine dollars a month." },
            { speaker: "W-Am", text: "That's perfect." },
            { speaker: "M-Au", text: "OK. I'll just need your credit card information to begin processing your subscription." }
        ],
        image: "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q68.png"
    }
];
