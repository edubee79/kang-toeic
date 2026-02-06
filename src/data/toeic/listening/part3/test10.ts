import { Part3Set } from '../../../listening_types';

export const test10: Part3Set[] = [
  {
    testId: 10,
    setId: "p3-t10-s1",
    contextType: "B4. 문의 / 안내",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t10-q32",
        text: "What is the conversation mainly about?",
        classification: "WHAT_WHICH",

        options: {
          A: "A product launch",
          B: "A grand opening",
          C: "Some investment options",
          D: "Some travel plans"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q33",
        text: "Why has the man been busy?",
        classification: "WHY_REASON",

        options: {
          A: "He has been working on a presentation.",
          B: "He has just returned from a family vacation.",
          C: "He is organizing a conference.",
          D: "He has been assigned a new client account."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q34",
        text: "What does the woman suggest that the man do soon?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Make a reservation",
          B: "Review some sales data",
          C: "Use a voucher before it expires",
          D: "Speak with an adviser"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Jung-Soo, are you ready for your conference in Greenville Shores?"
      },
      {
        speaker: "M-Cn",
        text: "Yes, I'm leaving tomorrow morning."
      },
      {
        speaker: "W-Am",
        text: "That's a great city. Are you doing any sightseeing before the conference?"
      },
      {
        speaker: "M-Cn",
        text: "Actually, I've been so busy finishing my presentation that I haven't looked at what there is to do."
      },
      {
        speaker: "W-Am",
        text: "Last time, I did a walking tour of the historic district."
      },
      {
        speaker: "M-Cn",
        text: "That sounds interesting."
      },
      {
        speaker: "W-Am",
        text: "It was! I used Greenville Guides-I can pass on their Web site. Just don't wait too long before booking-slots fill up quickly."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s2",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t10-q35",
        text: "Where is the conversation taking place?",
        classification: "WHO_LOC",

        options: {
          A: "At a bakery",
          B: "At an employment agency",
          C: "At a farmers market",
          D: "At a restaurant"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q36",
        text: "What does the woman ask about?",
        classification: "ASK_QUESTION",

        options: {
          A: "An upcoming event",
          B: "A project deadline",
          C: "A delivery service",
          D: "A job opening"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q37",
        text: "What does the man remind the woman to do?",
        classification: "DETAIL",

        options: {
          A: "Register on a Web site",
          B: "Send a document",
          C: "Update a budget",
          D: "Change an address"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Welcome to Patterson Bakery. How can I help you?"
      },
      {
        speaker: "W-Am",
        text: "Actually, I noticed the sign in your window advertising a temporary job for a baker."
      },
      {
        speaker: "M-Au",
        text: "Right-we always need extra help during the summer months because many employees go on vacation."
      },
      {
        speaker: "W-Am",
        text: "I see. How can I apply?"
      },
      {
        speaker: "M-Au",
        text: "Let me get you an application form. You can fill out the form here if you'd like. Just remember to e-mail us your résumé later."
      },
      {
        speaker: "W-Am",
        text: "All right, thanks!"
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s3",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t10-q38",
        text: "Where do the women work?",
        classification: "WHO_LOC",

        options: {
          A: "At a bookstore",
          B: "At a computer store",
          C: "At a food market",
          D: "At a publishing company"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q39",
        text: "What are the women worried about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Opening a branch office",
          B: "Competing with online stores",
          C: "Finding a new supplier",
          D: "Hiring enough delivery drivers"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q40",
        text: "What does the man recommend?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Advertising online",
          B: "Attending a trade show",
          C: "Adding food service",
          D: "Offering a home repair service"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Thank you for hiring me as a business consultant. What sort of advice are you looking for? I know your bookstore is already well-known in the community."
      },
      {
        speaker: "W-Am",
        text: "But a lot of people are shopping online these days, and we're worried about our ability to compete."
      },
      {
        speaker: "W-Br",
        text: "Yes, we think that's why fewer people are coming into the bookstore these days."
      },
      {
        speaker: "M-Cn",
        text: "I see. Have you considered making a significant change to the store-like adding a café?"
      },
      {
        speaker: "W-Am",
        text: "Interesting. We probably have enough space in the back of the store for that."
      },
      {
        speaker: "M-Cn",
        text: "That way customers could come in to browse and have a cup of coffee."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s4",
    contextType: "B4. 문의 / 안내",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t10-q41",
        text: "What kind of products do the speakers sell?",
        classification: "DETAIL",

        options: {
          A: "Cleaning products",
          B: "Car accessories",
          C: "Kitchen tools",
          D: "Garden supplies"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q42",
        text: "What does the woman mean when she says, \"He's probably waiting outside\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "A customer needs help immediately.",
          B: "A manager wants to discuss a complaint.",
          C: "A store is unusually crowded.",
          D: "Some instructions were confusing."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q43",
        text: "What do the staff sometimes forget to do?",
        classification: "WHEN_TIME",

        options: {
          A: "Restock inventory",
          B: "Sign receipts",
          C: "Hand out flyers",
          D: "Mention an upcoming sale"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hey, Taro. A customer just bought five bags of our Super Boost potting soil. Could you carry them to his car for him?"
      },
      {
        speaker: "M-Cn",
        text: "Can I finish organizing the flower seeds on this display first? I'll be done in a minute."
      },
      {
        speaker: "W-Am",
        text: "He's probably waiting outside. I told him to pull his car up by the entrance."
      },
      {
        speaker: "M-Cn",
        text: "Oh, OK. And he already paid, right?"
      },
      {
        speaker: "W-Am",
        text: "Yes. Just be sure to sign your initials on his receipt once you're done. It's something we keep forgetting to do."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s5",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t10-q44",
        text: "Who most likely are the men?",
        classification: "WHO_LOC",

        options: {
          A: "Teachers",
          B: "Bakers",
          C: "Electricians",
          D: "Doctors"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t10-q45",
        text: "Why are the men frustrated?",
        classification: "WHY_REASON",

        options: {
          A: "Some work will have to be redone.",
          B: "Some tools have been misplaced.",
          C: "Some staff members are unavailable.",
          D: "Some supplies have run out."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q46",
        text: "What does the woman want the men to review?",
        classification: "DETAIL",

        options: {
          A: "A revised budget",
          B: "A meeting agenda",
          C: "Some design plans",
          D: "Some contract terms"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hi, Paul and Mark. Uh, you've already installed the electrical wiring in the new classrooms on the west end of the building, right?"
      },
      {
        speaker: "M-Cn",
        text: "Yes, we're almost finished. Is there a problem?"
      },
      {
        speaker: "W-Am",
        text: "Well... there's just a last-minute change. The school district has decided that each classroom should have a projector mounted on the ceiling."
      },
      {
        speaker: "M-Au",
        text: "That's really frustrating. We'll have to redo some of the connections so that we can run wiring through the ceilings."
      },
      {
        speaker: "M-Cn",
        text: "That's going to take more time. Maybe another week or so."
      },
      {
        speaker: "W-Am",
        text: "That's OK. Here are the new blueprints for the classroom design. I'd like you to look them over and let me know if you have any questions."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s6",
    contextType: "B4. 문의 / 안내",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t10-q47",
        text: "What does the man want to do?",
        classification: "DETAIL",

        options: {
          A: "Renovate a building",
          B: "Create a community garden",
          C: "Install some new road signs",
          D: "Move a business to a new location"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q48",
        text: "What problem does the woman mention about a project?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "It will be noisy.",
          B: "It will be expensive.",
          C: "Finding available space may be difficult.",
          D: "The approval process may take a long time."
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t10-q49",
        text: "What does the woman suggest the man do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Apply for a loan",
          B: "Check a city map",
          C: "Collect some signatures",
          D: "Post an announcement online"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Thanks for agreeing to meet with me, Mayor Jackson. I wanted to discuss the possibility of creating a community garden in my neighborhood. It would be a space where we could grow flowers and vegetables."
      },
      {
        speaker: "W-Br",
        text: "Great idea. But finding a place for it could be a problem."
      },
      {
        speaker: "M-Cn",
        text: "Not necessarily. There's a vacant lot on the corner of Main Street and Linwood Avenue. It's city property, and it's been empty for years."
      },
      {
        speaker: "W-Br",
        text: "Well, you'll need to have the city council approve a request like that. I suggest you start a neighborhood petition. If you get enough signatures, you can bring it to the city council."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s7",
    contextType: "A5. 교육 / 트레이닝",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t10-q50",
        text: "What industry does the woman work in?",
        classification: "DETAIL",

        options: {
          A: "Finance",
          B: "Farming",
          C: "Advertising",
          D: "Hospitality"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q51",
        text: "What did the woman do recently?",
        classification: "DETAIL",

        options: {
          A: "She received an award.",
          B: "She opened a new business.",
          C: "She invented a new product.",
          D: "She published a book."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q52",
        text: "What will the woman most likely discuss next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Choosing an appropriate software program",
          B: "Preparing for a job interview",
          C: "Deciding on a program of study",
          D: "Improving networking skills"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "It's been great speaking with you on our radio program today. I'm sure our listeners enjoyed hearing about your career in finance."
      },
      {
        speaker: "W-Br",
        text: "Thanks for having me! I especially enjoyed sharing passages from the book I recently published, Choosing the Right Finance Career."
      },
      {
        speaker: "M-Au",
        text: "I'm glad you did. Actually, a listener just sent in one more question for you. Let's see... Isabel from Rhode Island would like to know your tips for choosing the right finance degree program. Any advice?"
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s8",
    contextType: "A4. 재무 / 비용 / 승인",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t10-q53",
        text: "What kind of business do the speakers most likely own?",
        classification: "DETAIL",

        options: {
          A: "An architecture studio",
          B: "A restaurant",
          C: "A real estate agency",
          D: "An accounting firm"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q54",
        text: "What does the man want to order?",
        classification: "DETAIL",

        options: {
          A: "Furniture",
          B: "Office supplies",
          C: "Food",
          D: "Lighting fixtures"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q55",
        text: "Why does the woman say, \"I just checked the account balance an hour ago\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To offer an excuse",
          B: "To make a complaint",
          C: "To provide reassurance",
          D: "To express surprise"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Priyanka, are you looking forward to the new restaurant opening next month?"
      },
      {
        speaker: "W-Br",
        text: "Definitely. It's about time we opened a second location."
      },
      {
        speaker: "M-Cn",
        text: "Yes! I was looking at the layout again, and I think we should order three more sets of tables and benches for the outdoor patio."
      },
      {
        speaker: "W-Br",
        text: "Good idea."
      },
      {
        speaker: "M-Cn",
        text: "But I'm worried about placing the order right away. I know our bank account was used for payroll earlier today, so we may not have enough funds in that account to cover the costs."
      },
      {
        speaker: "W-Br",
        text: "I just checked the account balance an hour ago."
      },
      {
        speaker: "M-Cn",
        text: "OK, I'll go ahead and place the order."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s9",
    contextType: "B4. 문의 / 안내",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t10-q56",
        text: "Who most likely is the man?",
        classification: "WHO_LOC",

        options: {
          A: "The woman's former landlord",
          B: "The woman's professor",
          C: "The woman's relative",
          D: "The woman's previous employer"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t10-q57",
        text: "What does the woman say she will do soon?",
        classification: "DETAIL",

        options: {
          A: "Return to her parents' house",
          B: "Apply for a job",
          C: "Pick up her belongings",
          D: "Begin coursework at school"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q58",
        text: "What does the woman ask for?",
        classification: "ASK_QUESTION",

        options: {
          A: "A house key",
          B: "A copy of a certificate",
          C: "A reference letter",
          D: "A colleague's e-mail address"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Hello, Gerard. This is Patricia Santos calling."
      },
      {
        speaker: "M-Au",
        text: "Patricia! I haven't talked to you since your lease ended last year. How are you?"
      },
      {
        speaker: "W-Br",
        text: "I'm doing well, thanks. I've been staying with my parents in London, but I'm about to start trade school in Glasgow."
      },
      {
        speaker: "M-Au",
        text: "Oh, congratulations!"
      },
      {
        speaker: "W-Br",
        text: "Actually, that's why I'm calling-I found a new apartment that I'd like, and the rental application requires a letter from a previous landlord. Could you write that for me?"
      },
      {
        speaker: "M-Au",
        text: "Yes, of course. What should I say?"
      },
      {
        speaker: "W-Br",
        text: "It can be short-just say that I'm a quiet, clean tenant who paid rent on time."
      },
      {
        speaker: "M-Au",
        text: "No problem. Just text me the contact information."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s10",
    contextType: "B4. 문의 / 안내",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t10-q59",
        text: "Where most likely are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "In a government office",
          B: "In a television studio",
          C: "At a bus terminal",
          D: "At a construction site"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q60",
        text: "What does the man mention about the Lansing Bridge?",
        classification: "DETAIL",

        options: {
          A: "There is a lot of traffic on it today.",
          B: "There is a beautiful view from it.",
          C: "It now has a walkway.",
          D: "It is temporarily closed."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q61",
        text: "How can the listeners find out more information?",
        classification: "HOW_METHOD",

        options: {
          A: "By visiting an information desk",
          B: "By requesting a brochure",
          C: "By checking a Web site",
          D: "By calling a help line"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Thank you for listening to Channel Three news this morning. It's time to go to Hao Nan with our traffic report."
      },
      {
        speaker: "M-Au",
        text: "Thanks, Sameera. While most commuters are seeing a fairly smooth ride this morning, crews have begun repairs to the Lansing Bridge, and it's closed to all traffic. Drivers can take a detour on Canal Road."
      },
      {
        speaker: "W-Am",
        text: "And when is construction expected to be completed?"
      },
      {
        speaker: "M-Au",
        text: "It's scheduled to wrap up by November seventh. Head to our Web site at NewsThree.com to learn more about the progress of the repairs."
      }
    ]
  },
  {
    testId: 10,
    setId: "p3-t10-s11",
    contextType: "C3. 일정 변경 / 취소",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t10-q62",
        text: "Why is the man calling?",
        classification: "WHY_REASON",

        options: {
          A: "To confirm he will teach a class",
          B: "To complain about a recent class",
          C: "To inquire about class supplies",
          D: "To request directions to a community center"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t10-q63",
        text: "Look at the graphic. Which class are the speakers discussing?",
        classification: "GRAPHIC",

        options: {
          A: "Knitting",
          B: "Painting",
          C: "Sculpture",
          D: "Drawing"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q64",
        text: "What does the man plan to do in Chicago?",
        classification: "ACTION_NEXT",

        options: {
          A: "Go to a graduation ceremony",
          B: "Attend a wedding",
          C: "Complete a certification",
          D: "See an art exhibit"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hello, Elmbrook Community Center."
      },
      {
        speaker: "M-Cn",
        text: "Hi, I'll be attending the class that starts on Friday this week, and I'm wondering what to bring. Details weren't listed in the class description."
      },
      {
        speaker: "W-Am",
        text: "Oh, the materials are always provided. But please note that classes don't start until next week."
      },
      {
        speaker: "M-Cn",
        text: "Really? I'll be in Chicago next week-my son's getting married. I'm afraid I'm going to have to miss the first class, then."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_10/Part_03/p3_q62.png"
  },
  {
    testId: 10,
    setId: "p3-t10-s12",
    contextType: "A4. 재무 / 비용 / 승인",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t10-q65",
        text: "Where do the speakers most likely work?",
        classification: "WHO_LOC",

        options: {
          A: "At a car rental service",
          B: "At a market research firm",
          C: "At an electronics store",
          D: "At a trucking company"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t10-q66",
        text: "Look at the graphic. Where do the speakers plan to start advertising job openings?",
        classification: "GRAPHIC",

        options: {
          A: "On job-related search engines",
          B: "On social media sites",
          C: "On company Web sites",
          D: "In online newspapers"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q67",
        text: "What does the man say he will do later today?",
        classification: "DETAIL",

        options: {
          A: "Propose a budget adjustment",
          B: "Attend a training session",
          C: "Write a letter of recommendation",
          D: "Approve a timeline"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Thanks for attending this planning meeting. As I explained in my e-mail, since the company's expanding its fleet of trucks, we need to figure out how to recruit more truck drivers. Any ideas?"
      },
      {
        speaker: "W-Am",
        text: "I did some research. This graph shows where people most frequently search for jobs online."
      },
      {
        speaker: "M-Au",
        text: "Hmm, eighty-four percent use job search engines, so it's good we already post our job openings on those. But, look at the next-highest category. At sixty-six percent, it'd be worth investing in."
      },
      {
        speaker: "W-Am",
        text: "I thought so, too. We'd need to increase our recruitment budget, though."
      },
      {
        speaker: "M-Au",
        text: "I'm meeting with the rest of the management team later today. I'll mention our need for extra funds."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_10/Part_03/p3_q65.png"
  },
  {
    testId: 10,
    setId: "p3-t10-s13",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t10-q68",
        text: "What is the woman having difficulty deciding on?",
        classification: "DETAIL",

        options: {
          A: "A color",
          B: "A fabric",
          C: "Storage capacity",
          D: "Strap placement"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q69",
        text: "Why was the company's logo redesigned?",
        classification: "WHY_REASON",

        options: {
          A: "To reflect design trends",
          B: "To celebrate an anniversary",
          C: "To appeal to a wider audience",
          D: "To avoid a copyright problem"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t10-q70",
        text: "Look at the graphic. Where will the company's logo be placed?",
        classification: "GRAPHIC",

        options: {
          A: "Location 1",
          B: "Location 2",
          C: "Location 3",
          D: "Location 4"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "The design for next season's backpack looks nice! What materials will you use?"
      },
      {
        speaker: "W-Br",
        text: "Well, polyester for the body of the bag, but it's hard to decide what to use for the straps. Any suggestions?"
      },
      {
        speaker: "M-Au",
        text: "How about cotton canvas?"
      },
      {
        speaker: "W-Br",
        text: "Hmm. Yes, OK. That would create an interesting texture contrast. Perfect!"
      },
      {
        speaker: "M-Au",
        text: "By the way, remember how we commissioned an artist to redesign our logo in honor of our company's fifty years in business? Well, the new logo is ready. Where would you like it to go?"
      },
      {
        speaker: "W-Br",
        text: "Last year the logo went on the left side pocket. But for this model I'd like to do something different, so put it on the top flap."
      },
      {
        speaker: "M-Au",
        text: "No problem."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_10/Part_03/p3_q68.png"
  }
];
