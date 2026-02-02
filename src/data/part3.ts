export interface Part3Question {
  id: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  classification?: string;
  translation?: string;
  translation_A?: string;
  translation_B?: string;
  translation_C?: string;
  translation_D?: string;
}

export interface Part3Set {
  testId: number;
  setId: string;
  questionRange: string;
  audio: string;
  image?: string;
  questions: Part3Question[];
  script?: { speaker: string; text: string }[] | string;
  translation?: string;
  contextType?: string;
}

export const part3RealTests: Part3Set[] = [
  {
    setId: "p3-t1-s1",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "32-34",
    questions: [
      {
        id: "p3-t1-q32",
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
        id: "p3-t1-q33",
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
        id: "p3-t1-q34",
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
      {
        speaker: "Woman",
        text: "Hi, it's Martina from Accounting. I'd like to reserve the main conference room for a meeting I'll be leading on Friday with colleagues from our New York office."
      },
      {
        speaker: "Man",
        text: "Sure, that shouldn't be a problem. What time is the meeting?"
      },
      {
        speaker: "Woman",
        text: "It's from nine to eleven A.Μ."
      },
      {
        speaker: "Man",
        text: "OK-I'll block off that time slot for you. Do you need any special equipment besides a laptop and projector?"
      },
      {
        speaker: "Woman",
        text: "No, but I'll need the key so I can go in a little early and set up. Can I pick that up on Friday morning?"
      },
      {
        speaker: "Man",
        text: "Absolutely."
      }
    ],
    testId: 1,
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_32-34.mp3"
  },
  {
    testId: 1,
    setId: "p3-t1-s2",
    questionRange: "35-37",
    contextType: "A4. 재무 / 비용 / 승인",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t1-q35",
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
        id: "p3-t1-q36",
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
        id: "p3-t1-q37",
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
    setId: "p3-t1-s3",
    questionRange: "38-40",
    contextType: "B2. 주문 / 배송",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t1-q38",
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
        id: "p3-t1-q39",
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
        id: "p3-t1-q40",
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
    setId: "p3-t1-s4",
    questionRange: "41-43",
    contextType: "B4. 문의 / 안내",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t1-q41",
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
        id: "p3-t1-q42",
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
        id: "p3-t1-q43",
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
    setId: "p3-t1-s5",
    questionRange: "44-46",
    contextType: "D3. 건물 / 시설 유지보수",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t1-q44",
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
        id: "p3-t1-q45",
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
        id: "p3-t1-q46",
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
    setId: "p3-t1-s6",
    questionRange: "47-49",
    contextType: "A2. 프로젝트 / 업무 진행",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t1-q47",
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
        id: "p3-t1-q48",
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
        id: "p3-t1-q49",
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
    setId: "p3-t1-s7",
    questionRange: "50-52",
    contextType: "A3. 인사 / 휴가 / 근무",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t1-q50",
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
        id: "p3-t1-q51",
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
        id: "p3-t1-q52",
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
    setId: "p3-t1-s8",
    questionRange: "53-55",
    contextType: "A2. 프로젝트 / 업무 진행",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t1-q53",
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
        id: "p3-t1-q54",
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
        id: "p3-t1-q55",
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
    setId: "p3-t1-s9",
    questionRange: "56-58",
    contextType: "B2. 주문 / 배송",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t1-q56",
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
        id: "p3-t1-q57",
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
        id: "p3-t1-q58",
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
    setId: "p3-t1-s10",
    questionRange: "59-61",
    contextType: "B4. 문의 / 안내",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t1-q59",
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
        id: "p3-t1-q60",
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
        id: "p3-t1-q61",
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
    setId: "p3-t1-s11",
    questionRange: "62-64",
    contextType: "B1. 불만 / 문제 제기",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_62-64.mp3",
    image: "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q62.png",
    questions: [
      {
        id: "p3-t1-q62",
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
        id: "p3-t1-q63",
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
        id: "p3-t1-q64",
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
    setId: "p3-t1-s12",
    questionRange: "65-67",
    contextType: "B4. 문의 / 안내",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_65-67.mp3",
    image: "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q68.png",
    questions: [
      {
        id: "p3-t1-q65",
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
        id: "p3-t1-q66",
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
        id: "p3-t1-q67",
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
    setId: "p3-t1-s13",
    questionRange: "68-70",
    contextType: "D3. 건물 / 시설 유지보수",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_68-70.mp3",
    image: "/images/part3/q65-70.jpg",
    questions: [
      {
        id: "p3-t1-q68",
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
        id: "p3-t1-q69",
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
        id: "p3-t1-q70",
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
  },
  {
    testId: 2,
    setId: "p3-t2-s1",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t2-q32",
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
        id: "p3-t2-q33",
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
        id: "p3-t2-q34",
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
    setId: "p3-t2-s2",
    contextType: "C2. 호텔 / 숙박",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t2-q35",
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
        id: "p3-t2-q36",
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
        id: "p3-t2-q37",
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
    setId: "p3-t2-s3",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t2-q38",
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
        id: "p3-t2-q39",
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
        id: "p3-t2-q40",
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
    setId: "p3-t2-s4",
    contextType: "D2. IT / 시스템 오류",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t2-q41",
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
        id: "p3-t2-q42",
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
        id: "p3-t2-q43",
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
    setId: "p3-t2-s5",
    contextType: "B4. 문의 / 안내",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t2-q44",
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
        id: "p3-t2-q45",
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
        id: "p3-t2-q46",
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
    setId: "p3-t2-s6",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t2-q47",
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
        id: "p3-t2-q48",
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
        id: "p3-t2-q49",
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
    setId: "p3-t2-s7",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t2-q50",
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
        id: "p3-t2-q51",
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
        id: "p3-t2-q52",
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
    setId: "p3-t2-s8",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t2-q53",
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
        id: "p3-t2-q54",
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
        id: "p3-t2-q55",
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
    setId: "p3-t2-s9",
    contextType: "A4. 재무 / 비용 / 승인",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t2-q56",
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
        id: "p3-t2-q57",
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
        id: "p3-t2-q58",
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
    setId: "p3-t2-s10",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t2-q59",
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
        id: "p3-t2-q60",
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
        id: "p3-t2-q61",
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
    setId: "p3-t2-s11",
    contextType: "C1. 항공 / 교통",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t2-q62",
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
        id: "p3-t2-q63",
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
        id: "p3-t2-q64",
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
    setId: "p3-t2-s12",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t2-q65",
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
        id: "p3-t2-q66",
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
        id: "p3-t2-q67",
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
    setId: "p3-t2-s13",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t2-q68",
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
        id: "p3-t2-q69",
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
        id: "p3-t2-q70",
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
  },
  {
    testId: 3,
    setId: "p3-t3-s1",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t3-q32",
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
        id: "p3-t3-q33",
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
        id: "p3-t3-q34",
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
    setId: "p3-t3-s2",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t3-q35",
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
        id: "p3-t3-q36",
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
        id: "p3-t3-q37",
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
    setId: "p3-t3-s3",
    contextType: "B4. 문의 / 안내",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t3-q38",
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
        id: "p3-t3-q39",
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
        id: "p3-t3-q40",
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
    setId: "p3-t3-s4",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t3-q41",
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
        id: "p3-t3-q42",
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
        id: "p3-t3-q43",
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
    setId: "p3-t3-s5",
    contextType: "A4. 재무 / 비용 / 승인",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t3-q44",
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
        id: "p3-t3-q45",
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
        id: "p3-t3-q46",
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
    setId: "p3-t3-s6",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t3-q47",
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
        id: "p3-t3-q48",
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
        id: "p3-t3-q49",
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
    setId: "p3-t3-s7",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t3-q50",
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
        id: "p3-t3-q51",
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
        id: "p3-t3-q52",
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
    setId: "p3-t3-s8",
    contextType: "B1. 불만 / 문제 제기",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t3-q53",
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
        id: "p3-t3-q54",
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
        id: "p3-t3-q55",
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
    setId: "p3-t3-s9",
    contextType: "B2. 주문 / 배송",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t3-q56",
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
        id: "p3-t3-q57",
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
        id: "p3-t3-q58",
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
    setId: "p3-t3-s10",
    contextType: "B4. 문의 / 안내",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t3-q59",
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
        id: "p3-t3-q60",
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
        id: "p3-t3-q61",
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
    setId: "p3-t3-s11",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t3-q62",
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
        id: "p3-t3-q63",
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
        id: "p3-t3-q64",
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
    setId: "p3-t3-s12",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t3-q65",
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
        id: "p3-t3-q66",
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
        id: "p3-t3-q67",
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
    setId: "p3-t3-s13",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t3-q68",
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
        id: "p3-t3-q69",
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
        id: "p3-t3-q70",
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
  },
  {
    testId: 4,
    setId: "p3-t4-s1",
    contextType: "B2. 주문 / 배송",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t4-q32",
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
        id: "p3-t4-q33",
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
        id: "p3-t4-q34",
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
    setId: "p3-t4-s2",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t4-q35",
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
        id: "p3-t4-q36",
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
        id: "p3-t4-q37",
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
    setId: "p3-t4-s3",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t4-q38",
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
        id: "p3-t4-q39",
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
        id: "p3-t4-q40",
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
    setId: "p3-t4-s4",
    contextType: "B4. 문의 / 안내",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t4-q41",
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
        id: "p3-t4-q42",
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
        id: "p3-t4-q43",
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
    setId: "p3-t4-s5",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t4-q44",
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
        id: "p3-t4-q45",
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
        id: "p3-t4-q46",
        text: "What will the man likely do tomorrow morning?",
        classification: "DETAIL",

        options: {
          A: "Lead an employee orientation",
          B: "Present at a board meeting",
          C: "Talk to some colleagues",
          D: "Read a company report"
        },
        correctAnswer: "C"
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
    setId: "p3-t4-s6",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t4-q47",
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
        id: "p3-t4-q48",
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
        id: "p3-t4-q49",
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
    setId: "p3-t4-s7",
    contextType: "A4. 재무 / 비용 / 승인",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t4-q50",
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
        id: "p3-t4-q51",
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
        id: "p3-t4-q52",
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
    setId: "p3-t4-s8",
    contextType: "B4. 문의 / 안내",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t4-q53",
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
        id: "p3-t4-q54",
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
        id: "p3-t4-q55",
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
    setId: "p3-t4-s9",
    contextType: "B4. 문의 / 안내",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t4-q56",
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
        id: "p3-t4-q57",
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
        id: "p3-t4-q58",
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
    setId: "p3-t4-s10",
    contextType: "A5. 교육 / 트레이닝",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t4-q59",
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
        id: "p3-t4-q60",
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
        id: "p3-t4-q61",
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
    setId: "p3-t4-s11",
    contextType: "B2. 주문 / 배송",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t4-q62",
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
        id: "p3-t4-q63",
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
        id: "p3-t4-q64",
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
    setId: "p3-t4-s12",
    contextType: "B2. 주문 / 배송",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t4-q65",
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
        id: "p3-t4-q66",
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
        id: "p3-t4-q67",
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
    setId: "p3-t4-s13",
    contextType: "C3. 일정 변경 / 취소",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t4-q68",
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
        id: "p3-t4-q69",
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
        id: "p3-t4-q70",
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
  },
  {
    testId: 5,
    setId: "p3-t5-s1",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t5-q32",
        text: "Who most likely is the man?",
        classification: "WHO_LOC",

        options: {
          A: "A photographer",
          B: "A journalist",
          C: "A florist",
          D: "A caterer"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q33",
        text: "What is the man concerned about?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Contacting his assistant",
          B: "Locating a conference room",
          C: "Moving some equipment",
          D: "Printing a document"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t5-q34",
        text: "What does the woman give the man?",
        classification: "DETAIL",

        options: {
          A: "Some keys",
          B: "A parking pass",
          C: "A mobile phone charger",
          D: "A cart"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hi! Welcome to Gonzalez and Partners."
      },
      {
        speaker: "M-Au",
        text: "Hi, I'm from Federov Portraits. I'm here to take the staff photos for the firm's Web site."
      },
      {
        speaker: "W-Am",
        text: "Oh, great—we've reserved a conference room down the hall for the photo shoot."
      },
      {
        speaker: "M-Au",
        text: "Thank you. There's just one thing... I have some heavy lighting equipment to bring in from my truck, and the only free parking space was several rows back. Do you have a cart I can use or"
      },
      {
        speaker: "W-Am",
        text: "I don't, but take this parking pass. You can use it to park in the VIP spot right by the front door."
      },
      {
        speaker: "M-Au",
        text: "Thanks, I'll do that now."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s2",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t5-q35",
        text: "What will be constructed at an airport?",
        classification: "DETAIL",

        options: {
          A: "A runway",
          B: "A parking area",
          C: "A storage facility",
          D: "A fueling station"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q36",
        text: "What is the residents' biggest concern?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Money",
          B: "Safety",
          C: "Noise",
          D: "Traffic"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t5-q37",
        text: "Why has a new meeting location been chosen?",
        classification: "WHY_REASON",

        options: {
          A: "It is available on the weekend.",
          B: "It is closer to public transportation.",
          C: "It provides more space.",
          D: "It costs less to rent."
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Hi, Barbara and Nancy. Now that our design's been selected for the new parking area at the airport, we can move forward to the next step. Barbara, do you have any updates?"
      },
      {
        speaker: "W-Am",
        text: "Yes, so now we need to consider residents in the surrounding neighborhoods. A preliminary survey showed their biggest concern is the potential increase in traffic."
      },
      {
        speaker: "M-Au",
        text: "Nancy, do we have a meeting set up at city hall for residents to discuss those concerns with us?"
      },
      {
        speaker: "W-Am",
        text: "Yes, on October second, but in a new location. The room at city hall was too small for this purpose, so it'll be held at the high school auditorium instead."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s3",
    contextType: "A4. 재무 / 비용 / 승인",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t5-q38",
        text: "Who most likely is the woman?",
        classification: "WHO_LOC",

        options: {
          A: "An event organizer",
          B: "A marketing consultant",
          C: "A department manager",
          D: "A travel agent"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t5-q39",
        text: "What did the man order for the woman?",
        classification: "DETAIL",

        options: {
          A: "A computer tablet",
          B: "A credit card",
          C: "Some furniture",
          D: "Some office supplies"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q40",
        text: "What does the man suggest the woman do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Save receipts",
          B: "Return a handbook",
          C: "E-mail a client",
          D: "Consult with a supervisor"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Thanks for coming to see me, Helen. How are things going in your new position?"
      },
      {
        speaker: "W-Am",
        text: "Great, Taro—thanks for asking. The management training that Human Resources provided was very helpful."
      },
      {
        speaker: "M-Au",
        text: "Good. Since you're now part of the management team, I requested a corporate credit card for you. It just came in—here it is."
      },
      {
        speaker: "W-Am",
        text: "Thanks. I should use this for small day-to-day expenses in my department, like office supplies, right?"
      },
      {
        speaker: "M-Au",
        text: "Correct. By the way, for bigger expenses, like when you're traveling to a conference, you'll need to fill out an expense form when you return. So it's a good idea to save all your receipts."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s4",
    contextType: "B4. 문의 / 안내",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t5-q41",
        text: "What will the man do next week?",
        classification: "ACTION_NEXT",

        options: {
          A: "Meet with some customers",
          B: "Attend a conference",
          C: "Go on vacation",
          D: "Move to another city"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q42",
        text: "What does the man want the woman to recommend?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "City tours",
          B: "Transportation services",
          C: "Hotels",
          D: "Restaurants"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t5-q43",
        text: "What does the man say he will do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Look up an address",
          B: "Check a bus route",
          C: "Pack some equipment",
          D: "Activate a credit card"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Hey, Martina. I'm going to a conference in Los Angeles next week."
      },
      {
        speaker: "W-Am",
        text: "Oh, that's where I'm from!"
      },
      {
        speaker: "M-Au",
        text: "That's why I mentioned it. I'll probably be too busy with the conference to see any sights, but at least I can eat some good food while I'm there. I was hoping you could recommend some restaurants to try."
      },
      {
        speaker: "W-Am",
        text: "Of course! Do you know where your hotel is located? That way I can recommend places that are nearby."
      },
      {
        speaker: "M-Au",
        text: "I don't remember. But the address must be in the confirmation e-mail from the hotel. Let me pull it up right now."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s5",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t5-q44",
        text: "What does the woman want to discuss?",
        classification: "DETAIL",

        options: {
          A: "Job candidates",
          B: "Vendor selections",
          C: "Customer survey results",
          D: "Computer system updates"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t5-q45",
        text: "Why does the man say, \"The report's only half a page long\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To confirm some details",
          B: "To express disappointment",
          C: "To ask for another assignment",
          D: "To refuse an offer"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t5-q46",
        text: "What does the woman remind the man about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Checking a social media account",
          B: "Unpacking some equipment",
          C: "Making a reservation",
          D: "Going to a print shop"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "I wanted to talk about the results from the online customer questionnaires we sent out last week. I know you've been exceptionally busy, Mario, but have you had a chance to look at the data?"
      },
      {
        speaker: "M-Au",
        text: "Yes. In fact, I just finished the report. I'll present it to the sales department later today."
      },
      {
        speaker: "W-Am",
        text: "Already? Fantastic! Did you want me to look it over before the meeting?"
      },
      {
        speaker: "M-Au",
        text: "The report's only half a page long."
      },
      {
        speaker: "W-Am",
        text: "Ah, OK... Oh, I wanted to remind you to book us a table at your cousin's restaurant. The sales team wants to go there after the meeting tomorrow."
      },
      {
        speaker: "M-Au",
        text: "Sure, I'll do that now."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_47_49",
    "contextType": "B4. 문의 / 안내",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "What city department does the man work in?",
        "questionType": "DETAIL",
        "options": [
          {
            "label": "A",
            "text": "Parks and Recreation"
          },
          {
            "label": "B",
            "text": "Water Management"
          },
          {
            "label": "C",
            "text": "Transportation"
          },
          {
            "label": "D",
            "text": "Education"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q48",
        "text": "Why is the woman calling?",
        "questionType": "INFERENCE",
        "options": [
          {
            "label": "A",
            "text": "To report a fallen tree"
          },
          {
            "label": "B",
            "text": "To ask about city-job openings"
          },
          {
            "label": "C",
            "text": "To find out the cost of a project"
          },
          {
            "label": "D",
            "text": "To inquire about a tree planting program"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q49",
        "text": "What does the man tell the woman to do?",
        "questionType": "DETAIL",
        "options": [
          {
            "label": "A",
            "text": "Review a policy"
          },
          {
            "label": "B",
            "text": "Make an appointment"
          },
          {
            "label": "C",
            "text": "Complete an online form"
          },
          {
            "label": "D",
            "text": "Contact a different office"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Mount Alifan Department of Parks and Recreation. How can I help you?"
      },
      {
        "speaker": "Woman",
        "text": "Hello, I read about your tree planting initiative, and I wanted to learn more about it."
      },
      {
        "speaker": "Man",
        "text": "Sure. Our department is now offering residents the opportunity to have a tree planted on their street in honor of someone special. It's part of our city's new beautification project."
      },
      {
        "speaker": "Woman",
        "text": "That's great. How can I make a request to do this?"
      },
      {
        "speaker": "Man",
        "text": "You'll need to fill out an online request form from our Web site. After you put in all your information and submit the form, you'll receive weekly e-mail updates."
      }
    ]
  },

  {
    testId: 5,
    setId: "p3-t5-s6",
    contextType: "B4. 문의 / 안내",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t5-q47",
        text: "What city department does the man work in?",
        classification: "DETAIL",

        options: {
          A: "Parks and Recreation",
          B: "Water Management",
          C: "Transportation",
          D: "Education"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q48",
        text: "Why is the woman calling?",
        classification: "WHY_REASON",

        options: {
          A: "To complain about a fee",
          B: "To reserve a picnic area",
          C: "To report a broken light",
          D: "To ask for an application"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q49",
        text: "What will the man do for the woman?",
        classification: "DETAIL",

        options: {
          A: "Send a form",
          B: "Arrange an inspection",
          C: "Give her a map",
          D: "Make a payment"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "City Parks and Recreation. How may I help you?"
      },
      {
        speaker: "W-Am",
        text: "Hi, I'm calling from Milliken Pharmaceuticals. I'd like to reserve the outdoor picnic area in Brookside Park for an employee event on June third."
      },
      {
        speaker: "M-Au",
        text: "OK... let me see if that area is available then. Yes, it's free. To finish the reservation, you'll have to complete some paperwork."
      },
      {
        speaker: "W-Am",
        text: "Fine. Can you e-mail that to me?"
      },
      {
        speaker: "M-Au",
        text: "I can. I'll also need you to pay the reservation fee. You can send us a check or come here in person."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s7",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t5-q50",
        text: "What product is the woman talking about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Mobile phones",
          B: "Calculators",
          C: "Laptops",
          D: "Headphones"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t5-q51",
        text: "What does the woman suggest doing?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Launching a new website",
          B: "Hiring temporary workers",
          C: "Offering a discount",
          D: "Conducting a survey"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q52",
        text: "What information will the man provide this afternoon?",
        classification: "DETAIL",

        options: {
          A: "A budget",
          B: "An inventory count",
          C: "A work schedule",
          D: "A client list"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Rohan, I have a question about the production of our new model KT17 wireless headphones. I just reviewed the quarterly sales report. They're selling even better than we expected."
      },
      {
        speaker: "M-Au",
        text: "Yeah, I've heard consumer demand is increasing for those."
      },
      {
        speaker: "W-Am",
        text: "That's what I wanted to discuss. Do you think we'll need to hire some temporary workers for the factory floor? I'm concerned that we won't be able keep up with the demand over the holidays."
      },
      {
        speaker: "M-Au",
        text: "We do have a lot of existing inventory ready to ship, so we may not need to hire more people. I'll get an exact count of how many KT17 headphones are available for shipment and let you know this afternoon."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s8",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t5-q53",
        text: "What project are the speakers working on?",
        classification: "DETAIL",

        options: {
          A: "A news article",
          B: "A training session",
          C: "An advertising campaign",
          D: "A research experiment"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t5-q54",
        text: "What problem does the man mention?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "He has a scheduling conflict.",
          B: "He missed a presentation.",
          C: "Some data is unavailable.",
          D: "There are errors in a report."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q55",
        text: "What will the man do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Make a phone call",
          B: "Share some images",
          C: "Change a password",
          D: "Edit a document"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Miss Chaudry, I'm glad I caught you before you left for the day. About our meeting tomorrow..."
      },
      {
        speaker: "W-Am",
        text: "Yes, it's in the afternoon, right? We have to go over your designs for the new advertising campaign for Softwell Shoes."
      },
      {
        speaker: "M-Au",
        text: "I'm sorry, but unfortunately I need to reschedule. I forgot that I have a doctor's appointment."
      },
      {
        speaker: "W-Am",
        text: "Hmm. Since we're presenting our ideas to the Softwell representative next week, we should discuss them soon. Are you free in the morning instead? At ten o'clock?"
      },
      {
        speaker: "M-Au",
        text: "Yes, that works."
      },
      {
        speaker: "W-Am",
        text: "OK, great. Oh, and could you post the images in the shared folder? I'd like to look at them in advance."
      },
      {
        speaker: "M-Au",
        text: "Sure. I'll take care of that now."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s9",
    contextType: "A5. 교육 / 트레이닝",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t5-q56",
        text: "Where does the conversation most likely take place?",
        classification: "WHO_LOC",

        options: {
          A: "At a hotel",
          B: "At a flower farm",
          C: "At a clothing factory",
          D: "At a ferry station"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t5-q57",
        text: "What did the man have a problem with this morning?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "An identification badge",
          B: "A parking pass",
          C: "A time card",
          D: "A uniform"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q58",
        text: "What will the speakers most likely do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Fill out some forms",
          B: "Tour a facility",
          C: "Watch a video",
          D: "Practice a skill"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Welcome, everyone, to your second day of training to be an industrial fabric worker. You did a great job running the sewing machines yesterday. Before we get started, do you have any questions?"
      },
      {
        speaker: "M-Au",
        text: "This isn't about the training, but... this morning, my security badge didn't work. The guard had to let me into the factory."
      },
      {
        speaker: "W-Am",
        text: "OK, I'll follow up with you about that later. Any other questions?"
      },
      {
        speaker: "W-Br",
        text: "Miss Park? Yesterday you showed us how to make a castle knot on the machine. Could we practice that?"
      },
      {
        speaker: "W-Am",
        text: "Of course. Let's practice that knot—it's essential to sewing almost all shirts. Turn on your sewing machines."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s10",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t5-q59",
        text: "What field do the speakers most likely work in?",
        classification: "DETAIL",

        options: {
          A: "Education",
          B: "Finance",
          C: "Law",
          D: "Medicine"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t5-q60",
        text: "What does the woman mean when she says, \"I've presented at that conference before\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "She has a lot of professional experience.",
          B: "She dislikes giving presentations.",
          C: "She understands the man's situation.",
          D: "She has completed a requirement."
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t5-q61",
        text: "What do the speakers agree to do?",
        classification: "DETAIL",

        options: {
          A: "Temporarily close an office",
          B: "Postpone hiring an employee",
          C: "Work on a presentation together",
          D: "Contact some clients"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Hi Dolores, I know we were supposed to review applications for a medical assistant today, but I'm still working on my presentation for the international surgeons' conference next week."
      },
      {
        speaker: "W-Am",
        text: "No problem. I've presented at that conference before. You'll need to be prepared."
      },
      {
        speaker: "M-Au",
        text: "So... should we reschedule for next week?"
      },
      {
        speaker: "W-Am",
        text: "Actually, why don't we just postpone hiring someone until next month?"
      },
      {
        speaker: "M-Au",
        text: "That would work better for me. But don't we need someone sooner?"
      },
      {
        speaker: "W-Am",
        text: "No. Jerome just told me he could stay until we find his replacement."
      }
    ]
  },
  {
    testId: 5,
    setId: "p3-t5-s11",
    contextType: "B2. 주문 / 배송",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t5-q62",
        text: "Look at the graphic. Which dish pattern is the man interested in?",
        classification: "GRAPHIC",

        options: {
          A: "#4058",
          B: "#4062",
          C: "#4073",
          D: "#4081"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q63",
        text: "According to the man, what will happen in May?",
        classification: "DETAIL",

        options: {
          A: "A store will take inventory.",
          B: "A new restaurant will open.",
          C: "A product line will launch.",
          D: "A factory will move to a new location."
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q64",
        text: "What problem does the woman mention?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Some shipping fees will increase.",
          B: "Some items will become unavailable.",
          C: "Some items were damaged during shipping.",
          D: "Some catalogs contain inaccurate information."
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Thanks for calling Rose Mound Pottery. How can I help you?"
      },
      {
        speaker: "M-Au",
        text: "I'm interested in ordering some dishes that I saw in your catalog for my new restaurant. They're the ones with the large star in the middle and smaller ones around the edge."
      },
      {
        speaker: "W-Am",
        text: "Yes, I know the ones you mean. Did you notice that pattern's a limited edition?"
      },
      {
        speaker: "M-Au",
        text: "Oh no. I hope they're still available. The grand opening for my restaurant is in May."
      },
      {
        speaker: "W-Am",
        text: "Yes, they're still in stock. But I know that pattern will be discontinued at the end of the year. They'll be hard to replace after that."
      },
      {
        speaker: "M-Au",
        text: "I'm glad you told me. Then I'll order extra ones now."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_05/Part_03/p3_q62.png"
  },
  {
    testId: 5,
    setId: "p3-t5-s12",
    contextType: "C3. 일정 변경 / 취소",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t5-q65",
        text: "What type of business is the woman calling?",
        classification: "DETAIL",

        options: {
          A: "A railway company",
          B: "A bus company",
          C: "An airline",
          D: "A ferry service"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q66",
        text: "Look at the graphic. What number will be updated?",
        classification: "GRAPHIC",

        options: {
          A: "3",
          B: "22",
          C: "11",
          D: "14"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t5-q67",
        text: "What will the man most likely do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Collect some money",
          B: "Check a seat assignment",
          C: "Make an announcement",
          D: "Send an e-mail"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Taggert Railways. How may I help you?"
      },
      {
        speaker: "W-Am",
        text: "Good morning. I have a question about a reservation for a trip to San Francisco. The confirmation code is 0146H."
      },
      {
        speaker: "M-Au",
        text: "OK, let me look it up. I see you have three tickets."
      },
      {
        speaker: "W-Am",
        text: "That's right. I was wondering if there's a train leaving a day earlier, but at the same time."
      },
      {
        speaker: "M-Au",
        text: "Let me check... Yes there is, and the tickets are the same price."
      },
      {
        speaker: "W-Am",
        text: "Perfect. Then I'd like to make that change."
      },
      {
        speaker: "M-Au",
        text: "OK. Should I use the e-mail associated with your original reservation to send you the new information?"
      },
      {
        speaker: "W-Am",
        text: "Yes, please."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_05/Part_03/p3_q65.png"
  },
  {
    testId: 5,
    setId: "p3-t5-s13",
    contextType: "D1. 사무기기 고장",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t5-q68",
        text: "What does the man ask the woman for?",
        classification: "DETAIL",

        options: {
          A: "Some plastic ties",
          B: "Some computer cables",
          C: "An Internet password",
          D: "A storage room key"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t5-q69",
        text: "What is the man doing tomorrow?",
        classification: "DETAIL",

        options: {
          A: "Inspecting a factory",
          B: "Upgrading a company database",
          C: "Leading a tour",
          D: "Going on a business trip"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t5-q70",
        text: "Look at the graphic. Which brand did the man buy?",
        classification: "GRAPHIC",

        options: {
          A: "Beep It",
          B: "Filez",
          C: "Loc Pro",
          D: "XMarks"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Margaret, do you have any plastic zip ties? We used some to tie cables together when we installed the servers last week."
      },
      {
        speaker: "W-Am",
        text: "Sure, they're on my desk. Need help with anything?"
      },
      {
        speaker: "M-Au",
        text: "No, I just need them to fasten some electronic trackers to my luggage. I'm flying to Shanghai tomorrow for a week to meet the new clients, and I want to be able to keep track of my suitcases while I'm traveling."
      },
      {
        speaker: "W-Am",
        text: "I need one of those. I misplace my keys all the time. How'd you decide which one to buy?"
      },
      {
        speaker: "M-Au",
        text: "The most important feature for me is battery life, so I bought the one with the longest-lasting battery."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_05/Part_03/p3_q68.png"
  },
  {
    testId: 6,
    setId: "p3-t6-s1",
    contextType: "B2. 주문 / 배송",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t6-q32",
        text: "What kind of business does the man own?",
        classification: "DETAIL",

        options: {
          A: "A laundry service",
          B: "A cosmetics company",
          C: "A public relations firm",
          D: "A beverage manufacturer"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t6-q33",
        text: "What does the man want to know?",
        classification: "DETAIL",

        options: {
          A: "Who to contact about a purchase",
          B: "Where to send some documents",
          C: "When a delivery will arrive",
          D: "How to use a product"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q34",
        text: "What does the woman ask the man to provide?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "An order number",
          B: "A return mailing address",
          C: "A signed contract",
          D: "An online payment"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "You've reached the customer service department of Handel's Label Company."
      },
      {
        speaker: "M-Cn",
        text: "My name's Taro Nakamura. I'm the owner of a small cosmetics company, and we recently started manufacturing a lip moisturizer. We placed a large rush order with you last week. We were supposed to get the labels yesterday, but they haven't come yet."
      },
      {
        speaker: "W-Br",
        text: "Sorry for the delay, Mr. Nakamura. What is your order number?"
      },
      {
        speaker: "M-Cn",
        text: "It's BX856."
      },
      {
        speaker: "W-Br",
        text: "There's a note here that we're having issues with transportation due to the construction on roads in your area. But your order will be delivered this afternoon."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s2",
    contextType: "B4. 문의 / 안내",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t6-q35",
        text: "Where most likely are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "On a bus",
          B: "On a train",
          C: "On an airplane",
          D: "On a boat"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q36",
        text: "What type of entertainment are the speakers discussing?",
        classification: "WHAT_WHICH",

        options: {
          A: "Music",
          B: "Games",
          C: "Movies",
          D: "Books"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t6-q37",
        text: "What does the woman say is convenient?",
        classification: "DETAIL",

        options: {
          A: "Being able to download an item",
          B: "Taking a direct route",
          C: "Having reclining seats",
          D: "Selecting meal options online"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Jerome, did you look at the options for in-flight entertainment? One of the options is e-books!"
      },
      {
        speaker: "M-Cn",
        text: "Oh, really? Are there any good books listed?"
      },
      {
        speaker: "W-Am",
        text: "Yes, actually. There are quite a few best sellers... and you can read them right on the screen in front of your seat."
      },
      {
        speaker: "M-Cn",
        text: "Interesting. But this is a short flight; what happens when we land and I haven't finished the book?"
      },
      {
        speaker: "W-Am",
        text: "Apparently, if you provide your e-mail address, the airline will send you a link so you can download the book to your personal electronic device. That's so convenient!"
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s3",
    contextType: "B4. 문의 / 안내",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t6-q38",
        text: "What industry does the woman most likely work in?",
        classification: "DETAIL",

        options: {
          A: "Landscaping",
          B: "Health care",
          C: "Event planning",
          D: "Agriculture"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t6-q39",
        text: "What does the man say he is concerned about?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Cost",
          B: "Variety",
          C: "Service dates",
          D: "Location"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t6-q40",
        text: "What will the speakers do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Look at a slideshow",
          B: "Have a meal",
          C: "Discuss an estimate",
          D: "Go on a tour"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Thanks for inviting me to visit. As I said on the phone, I'm looking for a local farm to supply vegetables for my restaurant."
      },
      {
        speaker: "W-Am",
        text: "Sure. You can sample some of our seasonal produce when I show you around today."
      },
      {
        speaker: "M-Au",
        text: "Great. I'm concerned about variety, though. How wide is your selection of vegetables?"
      },
      {
        speaker: "W-Am",
        text: "Well... we are constrained by what can be grown here in season. Let's tour the property now. I'll show you what we grow."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s4",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t6-q41",
        text: "What product are the speakers discussing?",
        classification: "WHAT_WHICH",

        options: {
          A: "Cameras",
          B: "Fitness trackers",
          C: "Wireless speakers",
          D: "Mobile phones"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t6-q42",
        text: "What complaint did customers have about the product?",
        classification: "DETAIL",

        options: {
          A: "It was unavailable in stores.",
          B: "The price was too high.",
          C: "The battery life was short.",
          D: "Some features were difficult to use."
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q43",
        text: "What does the man suggest doing?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Revising a budget",
          B: "Postponing a product launch",
          C: "Visiting a manufacturing plant",
          D: "Creating a good marketing campaign"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Hi, Elise. Did you see the feedback from the focus group about our company's latest fitness trackers?"
      },
      {
        speaker: "W-Br",
        text: "No, did the customers like the new features that were added?"
      },
      {
        speaker: "M-Cn",
        text: "Overall they did. They liked the fact that the new tracker is water resistant and can be worn while swimming. But there were complaints about the battery life."
      },
      {
        speaker: "W-Br",
        text: "Yes, I was sure customers would complain about that. The battery life on the older model was seven days, and this one is only five."
      },
      {
        speaker: "M-Cn",
        text: "Right. Then we need to create good marketing materials for this new tracker that emphasize the improved features. This will help us to sell the new product."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s5",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t6-q44",
        text: "What is the topic of the conversation?",
        classification: "DETAIL",

        options: {
          A: "Recruiting staff",
          B: "Marketing a product",
          C: "Repairing a vehicle",
          D: "Booking a tour"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t6-q45",
        text: "Where does the man say he used to work?",
        classification: "WHO_LOC",

        options: {
          A: "At a driving school",
          B: "At an automobile factory",
          C: "At a hotel",
          D: "At an airport"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q46",
        text: "Who will the speakers meet with next?",
        classification: "ACTION_NEXT",

        options: {
          A: "A real estate agent",
          B: "A delivery person",
          C: "Lawyers",
          D: "Insurance agents"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "We're making progress setting up our tour bus company, but finding the right drivers will be very important."
      },
      {
        speaker: "W-Br",
        text: "You're right. Should we use a recruitment agency?"
      },
      {
        speaker: "M-Au",
        text: "We could, but I was thinking... you know I used to work at the Blue Eagle Hotel?"
      },
      {
        speaker: "W-Br",
        text: "Yes."
      },
      {
        speaker: "M-Au",
        text: "Well, the hotel had a lot of airport shuttle bus drivers. I have their contact info."
      },
      {
        speaker: "W-Am",
        text: "Great. Maybe they'll come work for us. Why don't you reach out to them?"
      },
      {
        speaker: "M-Au",
        text: "I will, but after our meeting with the insurance company. Remember they'll be here in twenty minutes. I hope we can negotiate a good package to insure our drivers."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s6",
    contextType: "B1. 불만 / 문제 제기",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t6-q47",
        text: "What problem does the woman have?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "She lost her keys.",
          B: "Her phone screen has cracked.",
          C: "She injured her finger.",
          D: "Her phone is malfunctioning."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t6-q48",
        text: "What did the woman pay extra for?",
        classification: "DETAIL",

        options: {
          A: "An extended warranty",
          B: "Twenty-four-hour assistance",
          C: "Express service",
          D: "A personalized design"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t6-q49",
        text: "What does the man suggest the woman do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Fill out a refund request",
          B: "Call another store",
          C: "Look at some accessories",
          D: "Change a pass code"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "I bought this phone here a few months ago, and the fingerprint recognition feature has stopped working."
      },
      {
        speaker: "M-Cn",
        text: "You can still unlock your phone with your pass code, but it doesn't recognize your fingerprint anymore, correct?"
      },
      {
        speaker: "W-Br",
        text: "That's right. If it makes a difference, I paid extra for the extended warranty."
      },
      {
        speaker: "M-Cn",
        text: "That's good. I can replace it if I can't figure out how to fix it. Give me a few minutes while I check. And feel free to look at our accessories while you're waiting."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s7",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t6-q50",
        text: "Who is the man?",
        classification: "WHO_LOC",

        options: {
          A: "A software designer",
          B: "A landscape architect",
          C: "A factory supervisor",
          D: "A furniture store clerk"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q51",
        text: "What reason does the woman give for making a change?",
        classification: "WHY_REASON",

        options: {
          A: "The business hours would be more convenient.",
          B: "The quality of materials would be better.",
          C: "A discount is being offered.",
          D: "Fewer workers would be needed."
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t6-q52",
        text: "What does the man ask the woman to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Visit a work site",
          B: "Send a contract",
          C: "Make a counteroffer",
          D: "Request some samples"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "I got your message, Rita."
      },
      {
        speaker: "W-Br",
        text: "Since you're the factory manager, I wanted to run something by you. I think we should consider changing our lumber supplier. Ebson Lumber Mill sells very high-quality wood that would be perfect for the wood flooring we produce."
      },
      {
        speaker: "M-Au",
        text: "What's the difference in cost?"
      },
      {
        speaker: "W-Br",
        text: "Actually, none. The mill is much closer to our factory, so the higher price of the wood would be canceled out by the lower shipping costs. And we'd have a higher-quality product."
      },
      {
        speaker: "M-Au",
        text: "Can you ask the mill to send us some samples? I'd like to see them."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s8",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t6-q53",
        text: "What are the speakers preparing for?",
        classification: "DETAIL",

        options: {
          A: "A client visit",
          B: "An employee orientation",
          C: "A trade show",
          D: "A fund-raising event"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q54",
        text: "What does the woman say she needs to do?",
        classification: "DETAIL",

        options: {
          A: "Send some instructions",
          B: "Make a reservation",
          C: "Order some badges",
          D: "Write a speech"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t6-q55",
        text: "Why does the woman say, \"The office supply store has a sale\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To extend an invitation",
          B: "To make a correction",
          C: "To express satisfaction",
          D: "To explain a decision"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Miguel, do you have a minute to chat about the upcoming trade show in Los Angeles?"
      },
      {
        speaker: "M-Cn",
        text: "Sure, what's up?"
      },
      {
        speaker: "W-Br",
        text: "All I have left to do is to send specific instructions to the event organizers about setting up our booth."
      },
      {
        speaker: "M-Cn",
        text: "OK, I'm nearly ready too, but I still need to print those extra business cards we talked about. I know you said the print shop is having a sale this week, so I'll head over there after work."
      },
      {
        speaker: "W-Br",
        text: "The office supply store has a sale."
      },
      {
        speaker: "M-Cn",
        text: "Ahh... thanks. Good thing I mentioned it!"
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s9",
    contextType: "A5. 교육 / 트레이닝",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t6-q56",
        text: "Which department do the speakers most likely work in?",
        classification: "DETAIL",

        options: {
          A: "Human Resources",
          B: "Shipping",
          C: "Information Technology",
          D: "Sales"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t6-q57",
        text: "Why are the women surprised?",
        classification: "WHY_REASON",

        options: {
          A: "An event was canceled.",
          B: "A coworker retired on short notice.",
          C: "Some business hours were changed.",
          D: "Some equipment arrived early."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t6-q58",
        text: "What complaint does the man have about a previous training?",
        classification: "DETAIL",

        options: {
          A: "It was not offered to all workers.",
          B: "It was not detailed enough.",
          C: "It did not include lunch.",
          D: "It was not held during work hours."
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Have you heard about the new robots that'll help us out organizing packages? They just arrived."
      },
      {
        speaker: "W-Br",
        text: "Oh, yes... the robots to help us sort the shipments. Wait—that's a surprise. I wasn't expecting them until the end of the month!"
      },
      {
        speaker: "W-Am",
        text: "That's what I thought, too! They must have moved up the date so we can start using them sooner."
      },
      {
        speaker: "W-Br",
        text: "And that means we'll probably get trained on how to use them next week. Remember when they trained us on the new scanners last year?"
      },
      {
        speaker: "M-Au",
        text: "Yes, but we didn't get very much detailed information about how to use the scanners. It was very general."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s10",
    contextType: "B4. 문의 / 안내",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t6-q59",
        text: "Why does the woman want to move out of her current apartment?",
        classification: "WHY_REASON",

        options: {
          A: "It is far from her workplace.",
          B: "It is too small.",
          C: "It is in a noisy area.",
          D: "It is too expensive."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t6-q60",
        text: "What does the man mean when he says, \"I should be able to lease that unit pretty quickly\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "A rental payment will likely be reduced.",
          B: "Investing in a property would be profitable.",
          C: "Some renovations will not take long.",
          D: "An apartment has a modern layout."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t6-q61",
        text: "What will the woman most likely do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Post an advertisement",
          B: "Complete a form",
          C: "Order some supplies",
          D: "Provide a reference"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hi, Mr. Rashad. I just stopped by to let you know I won't be renewing my lease. I'm going to rent an apartment that's closer to my job... I'm tired of driving so far to work."
      },
      {
        speaker: "M-Au",
        text: "I'm sorry you're leaving—you're an excellent tenant. When will you be moving out?"
      },
      {
        speaker: "W-Am",
        text: "The middle of next month. The contract requires that I pay rent for the full month, though, right?"
      },
      {
        speaker: "M-Au",
        text: "Well, I should be able to lease that unit pretty quickly. I'll let you know what happens."
      },
      {
        speaker: "W-Am",
        text: "All right. Thanks."
      },
      {
        speaker: "M-Au",
        text: "Oh, and, there's a form you'll need to fill out to make your notice official. I have it right here..."
      }
    ]
  },
  {
    testId: 6,
    setId: "p3-t6-s11",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t6-q62",
        text: "Why does the man ask the woman to work an extra shift?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "The store needs cleaning.",
          B: "A sale will happen soon.",
          C: "A shipment is arriving.",
          D: "A coworker has an injury."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t6-q63",
        text: "Look at the graphic. Which book is needed for an upcoming event?",
        classification: "GRAPHIC",

        options: {
          A: "Cooking with Kids",
          B: "Delicious Dinners",
          C: "Easy Meals at Home",
          D: "Extraordinary Desserts"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q64",
        text: "Why does the man expect an event to be crowded?",
        classification: "WHY_REASON",

        options: {
          A: "It is on a holiday weekend.",
          B: "It was advertised on television.",
          C: "An author is well-known.",
          D: "Free food will be served."
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Hi, Geeta, this is Ming. Sorry to call you on your day off, but I need someone to fill in for Stefan tomorrow at the bookstore. He injured his ankle playing basketball."
      },
      {
        speaker: "W-Am",
        text: "Sure, I can take Stefan's shift. Happy to help out."
      },
      {
        speaker: "M-Cn",
        text: "Thanks! Also, I have another favor to ask."
      },
      {
        speaker: "W-Am",
        text: "Of course. What is it?"
      },
      {
        speaker: "M-Cn",
        text: "Well, I was checking our cookbook inventory. We only have seven copies of the book we need for the author event later this month. I'm worried seven won't be enough."
      },
      {
        speaker: "W-Am",
        text: "I see. I can definitely order more."
      },
      {
        speaker: "M-Cn",
        text: "Thanks! I think the author's going to draw a big crowd. She's pretty well-known and was recently on TV."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q62.png"
  },
  {
    testId: 6,
    setId: "p3-t6-s12",
    contextType: "B4. 문의 / 안내",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t6-q65",
        text: "What did the East Lake Band recently do?",
        classification: "DETAIL",

        options: {
          A: "They won a music award.",
          B: "They went on a national tour.",
          C: "They released a new recording.",
          D: "They added a new member to the group."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t6-q66",
        text: "Look at the graphic. Where do the speakers plan to sit?",
        classification: "GRAPHIC",

        options: {
          A: "In Section 1",
          B: "In Section 2",
          C: "In Section 3",
          D: "In Section 4"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q67",
        text: "What does the man offer to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Pick up some tickets",
          B: "Provide transportation",
          C: "Bring some umbrellas",
          D: "Make a dinner reservation"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Hi, Yuri. Did you hear the East Lake Band is going to play a concert in town?"
      },
      {
        speaker: "M-Au",
        text: "Yes! And now they have a great new guitarist. Simone Travers recently started playing with them."
      },
      {
        speaker: "W-Br",
        text: "Five of us from the marketing department plan to go together. Would you like to join us?"
      },
      {
        speaker: "M-Au",
        text: "That sounds like fun. Where are you going to sit?"
      },
      {
        speaker: "W-Br",
        text: "We thought about getting tickets for outdoor seating, but that'd be a problem if it rains. Would the balcony be OK with you?"
      },
      {
        speaker: "M-Au",
        text: "Sure. And I'd be happy to drive. My car has room for everyone."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q65.png"
  },
  {
    testId: 6,
    setId: "p3-t6-s13",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t6-q68",
        text: "What does the man plan to do during his meeting?",
        classification: "ACTION_NEXT",

        options: {
          A: "Resolve a security issue",
          B: "Review a travel policy",
          C: "Conduct some job interviews",
          D: "Compare some software packages"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t6-q69",
        text: "Look at the graphic. Which one of the woman's meetings will be changed?",
        classification: "GRAPHIC",

        options: {
          A: "Budget Meeting",
          B: "Training Meeting",
          C: "Team Meeting",
          D: "Contract Meeting"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t6-q70",
        text: "What does the woman say she would like to improve?",
        classification: "DETAIL",

        options: {
          A: "Her technical knowledge",
          B: "Her organizational skills",
          C: "A training manual",
          D: "A presentation"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Natalia, I have a favor to ask. I have an important video call with the London office on Monday. I'll be interviewing some job candidates there."
      },
      {
        speaker: "W-Br",
        text: "OK. How can I help?"
      },
      {
        speaker: "M-Cn",
        text: "Well, I want to use Meeting Room B. And due to the different international time zones, I need the morning slot. I saw that you have that time booked already."
      },
      {
        speaker: "W-Br",
        text: "OK. I understand. In that case, I'll move my meeting to the afternoon instead. And that's actually good because it'll give me extra time to improve the presentation I'm preparing."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q68.png"
  },
  {
    testId: 7,
    setId: "p3-t7-s1",
    contextType: "B4. 문의 / 안내",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t7-q32",
        text: "Where most likely are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "At a fitness center",
          B: "At a doctor's office",
          C: "At a pharmacy",
          D: "At a bank"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q33",
        text: "What did the woman do in advance?",
        classification: "DETAIL",

        options: {
          A: "She checked some business hours.",
          B: "She made a list of questions.",
          C: "She paid for a service online.",
          D: "She completed some forms."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t7-q34",
        text: "What does the woman say she will do?",
        classification: "DETAIL",

        options: {
          A: "Get her coat",
          B: "Return to a parking garage",
          C: "Look through a magazine",
          D: "Connect to the Internet"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hi, my name is Min Zhou. I'm here for my ten o'clock appointment."
      },
      {
        speaker: "M-Au",
        text: "Hmm... with Dr. Farooq, yes, I see. It looks like this is your first visit here, so I'll give you some paperwork to fill out."
      },
      {
        speaker: "W-Am",
        text: "Actually, I got an e-mail about that ahead of time and filled everything out online. You should already have it."
      },
      {
        speaker: "M-Au",
        text: "Perfect, thank you. In that case, you can take a seat, and the doctor will be with you shortly."
      },
      {
        speaker: "W-Am",
        text: "Oh... I just realized... I forgot some X-rays in my car. I'll quickly run back to the parking garage."
      },
      {
        speaker: "M-Au",
        text: "OK, no problem."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s2",
    contextType: "B4. 문의 / 안내",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t7-q35",
        text: "Where most likely are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "At a farm",
          B: "At a restaurant",
          C: "At a grocery store",
          D: "At a catering company"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q36",
        text: "What does the woman say will happen soon?",
        classification: "DETAIL",

        options: {
          A: "Some friends will join her.",
          B: "She will apply for a job.",
          C: "She will pay her bill.",
          D: "An anniversary will be celebrated."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t7-q37",
        text: "What does the man imply when he says, \"They're selling quickly\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "An item may be unavailable soon.",
          B: "An item is not expensive.",
          C: "A delivery should be made immediately.",
          D: "Some help will be needed."
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Welcome to Mandy's. Would you prefer to dine out on the patio or indoors?"
      },
      {
        speaker: "W-Am",
        text: "The patio, please."
      },
      {
        speaker: "M-Au",
        text: "OK. Follow me."
      },
      {
        speaker: "W-Am",
        text: "Oh... Do you think I could get a bigger table? Two of my friends will be joining me in a few minutes."
      },
      {
        speaker: "M-Au",
        text: "Of course. While you wait for your friends, take a look at our menu. Today's specials are maple waffles and a strawberry-mango smoothie."
      },
      {
        speaker: "W-Am",
        text: "They both sound great."
      },
      {
        speaker: "M-Au",
        text: "Just so you know, everyone likes the waffles. They're selling quickly."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s3",
    contextType: "B1. 불만 / 문제 제기",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t7-q38",
        text: "Where does the man most likely work?",
        classification: "WHO_LOC",

        options: {
          A: "At a ferry terminal",
          B: "At a bus depot",
          C: "At an airport",
          D: "At a train station"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t7-q39",
        text: "What problem does the woman have?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Her colleague is late.",
          B: "Her suitcase is broken.",
          C: "A security line is long.",
          D: "She lost her ticket."
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q40",
        text: "What will the man borrow from one of his coworkers?",
        classification: "DETAIL",

        options: {
          A: "A pen",
          B: "A key",
          C: "A jacket",
          D: "A mobile phone"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Do you need help finding your gate?"
      },
      {
        speaker: "W-Am",
        text: "No—my flight takes off from gate C-11. But I do need some help—my suitcase just broke!"
      },
      {
        speaker: "M-Au",
        text: "Oh no! I'm so sorry to hear that."
      },
      {
        speaker: "W-Am",
        text: "Do you happen to have any tape that I could use to temporarily patch it up?"
      },
      {
        speaker: "M-Au",
        text: "We do have some packing tape in our storage closet. I'll go get the key to it from another gate attendant."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s4",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t7-q41",
        text: "Where do the women work?",
        classification: "WHO_LOC",

        options: {
          A: "At a construction company",
          B: "At an automotive factory",
          C: "At a chemical plant",
          D: "At an interior design firm"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t7-q42",
        text: "What is the man's job?",
        classification: "DETAIL",

        options: {
          A: "Warehouse manager",
          B: "Computer engineer",
          C: "Sales representative",
          D: "Building inspector"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t7-q43",
        text: "What does Insook plan to do in the afternoon?",
        classification: "ACTION_NEXT",

        options: {
          A: "Finalize a contract",
          B: "Watch a demonstration",
          C: "Visit a property",
          D: "Meet with potential investors"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Insook, I have to say, the Builders Trade Show has been extremely interesting. I'm glad that our boss decided to send us this year."
      },
      {
        speaker: "W-Br",
        text: "Our construction business is going to benefit a lot from all this helpful information. Oh, let's look at this booth about textile concrete."
      },
      {
        speaker: "M-Au",
        text: "Hi! I can answer any questions you have. I'm Yang Liu, and I'm part of the sales team at Innovative Construction Materials."
      },
      {
        speaker: "W-Br",
        text: "What is textile concrete? Never heard of it."
      },
      {
        speaker: "M-Au",
        text: "Well, it's lighter, less expensive to make, and much stronger than regular reinforced concrete. We're having a product demonstration this afternoon."
      },
      {
        speaker: "W-Am",
        text: "I have a conference call at three, but Insook, you should attend."
      },
      {
        speaker: "W-Br",
        text: "OK, I will!"
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s5",
    contextType: "B4. 문의 / 안내",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t7-q44",
        text: "Why is the man calling?",
        classification: "WHY_REASON",

        options: {
          A: "To hire a moving truck",
          B: "To schedule a job interview",
          C: "To make a payment",
          D: "To ask about renting an apartment"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t7-q45",
        text: "What does the woman suggest the man do soon?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Create an online account",
          B: "Schedule an appointment",
          C: "Take some measurements",
          D: "Review a contract"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q46",
        text: "What does the man say he will do?",
        classification: "DETAIL",

        options: {
          A: "Call back next week",
          B: "Write a report",
          C: "Use another agency",
          D: "Contact some references"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Freemont Real Estate. This is So-Hee. How can I help you?"
      },
      {
        speaker: "M-Au",
        text: "Hi, I'm moving to Freemont next month and am looking to rent an apartment. I'd really like to live on the waterfront. Would your agency be able to help me?"
      },
      {
        speaker: "W-Am",
        text: "Absolutely. There's a beautiful new building right on the water where we've found apartments for a few clients recently. They're filling up fast, though, so I'd suggest setting up an appointment with me as soon as you can."
      },
      {
        speaker: "M-Au",
        text: "I'd like to, but I don't know my schedule just yet. I'll give you a call back within the next week to set up a tour."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s6",
    contextType: "D1. 사무기기 고장",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t7-q47",
        text: "Why was the man late to work?",
        classification: "WHY_REASON",

        options: {
          A: "He was stuck in traffic.",
          B: "He missed a train.",
          C: "He had a doctor's appointment.",
          D: "He woke up late."
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t7-q48",
        text: "What is scheduled to be delivered today?",
        classification: "DETAIL",

        options: {
          A: "Company uniforms",
          B: "Desktop computers",
          C: "Cleaning supplies",
          D: "Informational brochures"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q49",
        text: "What business will the man call?",
        classification: "DETAIL",

        options: {
          A: "A plumbing service",
          B: "A catering company",
          C: "An automotive repair company",
          D: "An electronics recycling center"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Good morning, Ms. Zhang. Sorry I'm late to work—traffic was really slow this morning. Everyone's driving carefully because of the rain."
      },
      {
        speaker: "W-Am",
        text: "No problem, Richard. The store's been pretty quiet today. I just hope the stormy weather doesn't delay the delivery truck!"
      },
      {
        speaker: "M-Au",
        text: "Are we expecting a delivery?"
      },
      {
        speaker: "W-Am",
        text: "I'm replacing the two desktop computers in our office. The new ones are supposed to arrive today. In fact, I was going to ask you to help me set them up."
      },
      {
        speaker: "M-Au",
        text: "I'd be happy to. By the way, what are you doing with the old computers? I know of an electronics recycling center. They even pick up!"
      },
      {
        speaker: "W-Am",
        text: "Wonderful! Could you give them a call?"
      },
      {
        speaker: "M-Au",
        text: "Sure."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s7",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t7-q50",
        text: "Who most likely is the woman?",
        classification: "WHO_LOC",

        options: {
          A: "A client",
          B: "A supervisor",
          C: "An intern",
          D: "A vendor"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q51",
        text: "What is a benefit of a new material?",
        classification: "DETAIL",

        options: {
          A: "It is strong.",
          B: "It is lightweight.",
          C: "It is warm.",
          D: "It is soft."
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t7-q52",
        text: "What will the speakers do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Contact a colleague",
          B: "Plan a celebration",
          C: "Look at some samples",
          D: "Review a document"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Good morning, Hiroshi and Carlos. I'd like to talk to both of you about your current project."
      },
      {
        speaker: "M-Au",
        text: "Sure, Ms. Park. Right now, we're designing the denim line: jeans, of course, but also some jackets."
      },
      {
        speaker: "W-Am",
        text: "That's why I wanted to talk to you. The product management team has actually decided to use a new fabric for this line. It's a cotton and wool blend."
      },
      {
        speaker: "M-Cn",
        text: "Really! That's interesting. Hmm... the wool should increase the warmth of our denim items, which is good."
      },
      {
        speaker: "M-Au",
        text: "You're right. But... I'm worried about whether this change will affect our deadlines."
      },
      {
        speaker: "W-Am",
        text: "I'm going to review the new project plan with you now—I have it right here."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s8",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t7-q53",
        text: "What type of event are the speakers discussing?",
        classification: "WHAT_WHICH",

        options: {
          A: "A holiday party",
          B: "A conference",
          C: "A grand opening",
          D: "A job fair"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q54",
        text: "What does the woman say attendees will receive?",
        classification: "DETAIL",

        options: {
          A: "A discounted rate",
          B: "A raffle ticket",
          C: "Free transportation",
          D: "A city map"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t7-q55",
        text: "What do the speakers need to do soon?",
        classification: "DETAIL",

        options: {
          A: "Write a short speech",
          B: "Submit a budget report",
          C: "Notify some employees",
          D: "Sign a contract"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "I just received the proposed contract from the Westerly Hotel for hosting our conference there. I just need your approval on it."
      },
      {
        speaker: "M-Au",
        text: "We used that hotel for last year's conference and got good feedback from most people who went."
      },
      {
        speaker: "W-Am",
        text: "Right, and the contract includes the room block as well, so our attendees will receive a discounted price on their hotel rooms."
      },
      {
        speaker: "M-Au",
        text: "OK. If you could leave the contract on my desk, I'll take a look a little later."
      },
      {
        speaker: "W-Am",
        text: "Thanks. We'll need to sign the agreement by the end of the week."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s9",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t7-q56",
        text: "Who most likely is the man?",
        classification: "WHO_LOC",

        options: {
          A: "An advertising executive",
          B: "A factory manager",
          C: "A customer service representative",
          D: "A product designer"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t7-q57",
        text: "What does the woman imply when she says, \"Our clients are interested in environmentally friendly products\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "She is frustrated with her clients.",
          B: "She is surprised by some feedback.",
          C: "She approves of the man's idea.",
          D: "She thinks the man is unfamiliar with a topic."
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t7-q58",
        text: "What does the man say will take place on Friday?",
        classification: "DETAIL",

        options: {
          A: "An awards ceremony",
          B: "A managers' meeting",
          C: "A safety inspection",
          D: "A training class"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Hi, Sam. Can you give me an update on the phone case your team's designing for the Parker SI16 mobile phone?"
      },
      {
        speaker: "M-Au",
        text: "Sure. You said to experiment, so we tried something new: a case that's environmentally friendly. It's made of 100 percent recycled materials. What do you think?"
      },
      {
        speaker: "W-Am",
        text: "Our clients are interested in environmentally friendly products."
      },
      {
        speaker: "M-Au",
        text: "Good. We hope to have some designs ready to present at the managers' meeting that's happening on Friday."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s10",
    contextType: "B4. 문의 / 안내",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t7-q59",
        text: "Who is the man?",
        classification: "WHO_LOC",

        options: {
          A: "An art gallery owner",
          B: "A store manager",
          C: "A hair stylist",
          D: "A real estate agent"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q60",
        text: "What does the woman say happened last week?",
        classification: "DETAIL",

        options: {
          A: "She visited some relatives.",
          B: "She received a raise.",
          C: "She gave a presentation.",
          D: "She purchased a building."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t7-q61",
        text: "What does the man recommend doing?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Postponing a project",
          B: "Using a mobile phone application",
          C: "Creating some promotional flyers",
          D: "Ordering some name tags"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Welcome to Marston Paints. I'm the manager here. How can I help you today?"
      },
      {
        speaker: "W-Am",
        text: "Hi. Last week I bought an office building nearby, and I'm planning to have all the interior walls repainted."
      },
      {
        speaker: "M-Au",
        text: "Welcome to the neighborhood! Have you decided on a color for your walls?"
      },
      {
        speaker: "W-Am",
        text: "Not yet. I was hoping you would have some samples?"
      },
      {
        speaker: "M-Au",
        text: "Sure. You know, we also have a mobile phone application that you might find useful."
      },
      {
        speaker: "W-Am",
        text: "How so?"
      },
      {
        speaker: "M-Au",
        text: "It'll help you visualize what your office will look like with different-colored walls. Just take a picture of the space and upload it to the app. You'll be prompted to enter different color codes to see what it would look like."
      }
    ]
  },
  {
    testId: 7,
    setId: "p3-t7-s11",
    contextType: "D2. IT / 시스템 오류",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t7-q62",
        text: "What problem are the speakers mainly discussing?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "An event venue is unavailable.",
          B: "A project deadline has passed.",
          C: "A document contains spelling errors.",
          D: "A video file is not working."
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t7-q63",
        text: "Look at the graphic. Whose e-mail does the woman mention?",
        classification: "GRAPHIC",

        options: {
          A: "Claudine Li's",
          B: "Elise Choi's",
          C: "Anya Lundly's",
          D: "Madoka Ito's"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q64",
        text: "What event will happen this weekend?",
        classification: "DETAIL",

        options: {
          A: "A local election",
          B: "A corporate fund-raiser",
          C: "A city festival",
          D: "A sports competition"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Simone, I know you wanted me to add music to the video you uploaded. But when I went to work on it, the video file wouldn't open. I wonder if there's something wrong with it."
      },
      {
        speaker: "W-Am",
        text: "You mean the one for the Riverton City promotional video? It's odd that it's not working. I got an e-mail earlier about that video. I'm about to answer it, so I'll ask her to send another copy of the file."
      },
      {
        speaker: "M-Au",
        text: "Thanks. We have to finish the video by Friday. The annual Riverton City Cultural Festival is this weekend, and they're planning to debut it there."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_07/Part_03/p3_q62.png"
  },
  {
    testId: 7,
    setId: "p3-t7-s12",
    contextType: "B2. 주문 / 배송",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t7-q65",
        text: "What does the man say the store has recently done?",
        classification: "DETAIL",

        options: {
          A: "Replaced some equipment",
          B: "Updated a company logo",
          C: "Installed a security system",
          D: "Painted some shelving units"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q66",
        text: "Look at the graphic. Which item will the store order?",
        classification: "GRAPHIC",

        options: {
          A: "Item 231",
          B: "Item 498",
          C: "Item 540",
          D: "Item 762"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t7-q67",
        text: "What does the man say he will do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Print a receipt",
          B: "Stock some shelves",
          C: "Finalize a schedule",
          D: "Find a credit card"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Mei Ting, have you ordered the new shopping bags for our store yet? Since we've recently updated our logo, the bags should have our new logo on them."
      },
      {
        speaker: "W-Am",
        text: "Let's look at our options online... We want the same type of bags we use now, right—the large plastic bags?"
      },
      {
        speaker: "M-Au",
        text: "What about switching to large paper bags? It's easier to see our logo on the paper bags, so it'd be a better way to promote our store."
      },
      {
        speaker: "W-Am",
        text: "Good point. I'll order the large ones, then."
      },
      {
        speaker: "M-Au",
        text: "And while you're doing that, I'll stock the displays. The shelves are looking a little empty."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_07/Part_03/p3_q65.png"
  },
  {
    testId: 7,
    setId: "p3-t7-s13",
    contextType: "B4. 문의 / 안내",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t7-q68",
        text: "Who most likely are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "Lawyers",
          B: "Bakers",
          C: "Accountants",
          D: "Doctors"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t7-q69",
        text: "Look at the graphic. Which building does the man say he likes?",
        classification: "GRAPHIC",

        options: {
          A: "Building 1",
          B: "Building 2",
          C: "Building 3",
          D: "Building 4"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t7-q70",
        text: "What does the woman ask the man to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "E-mail a real estate agent",
          B: "Make a lunch reservation",
          C: "Contact some colleagues",
          D: "Upload some photographs"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Hey, Anya... I sent you a map with several office buildings. I also attached some photos and the dimensions of the rooms. What do you think about one of these for our new law offices?"
      },
      {
        speaker: "W-Am",
        text: "Well, the one closest to the courthouse would be very convenient."
      },
      {
        speaker: "M-Au",
        text: "Actually, I think the one across the street from the library is better for our legal firm. It's still on the same street as the courthouse, and I like the layout more."
      },
      {
        speaker: "W-Am",
        text: "That sounds good. Can you call Emiko and Satoshi and see when they're free? I'd like them to go see the offices with us."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_07/Part_03/p3_q68.png"
  },
  {
    testId: 8,
    setId: "p3-t8-s1",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t8-q32",
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
        id: "p3-t8-q33",
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
        id: "p3-t8-q34",
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
      {
        speaker: "M-Cn",
        text: "Welcome to the Trellisville Museum of Art. How can I help you?"
      },
      {
        speaker: "W-Am",
        text: "I'd like an all-day pass, please."
      },
      {
        speaker: "M-Cn",
        text: "Sure. Just so you know, we've introduced resident and nonresident prices for the museum. Do you happen to be a resident of Trellisville?"
      },
      {
        speaker: "W-Am",
        text: "Yes, I've lived here for more than twenty years."
      },
      {
        speaker: "M-Cn",
        text: "Wonderful. All I need to see is a piece of ID with your address."
      },
      {
        speaker: "W-Am",
        text: "OK, here's my driver's license."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s2",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t8-q35",
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
        id: "p3-t8-q36",
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
        id: "p3-t8-q37",
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
      {
        speaker: "W-Br",
        text: "Hello, I'm calling from Dr. Park's office. This is a courtesy reminder that you have an annual health checkup on Friday at two thirty P.M."
      },
      {
        speaker: "M-Cn",
        text: "Oh, I completely forgot about that. But... uh... my car needs to be repaired, and I'm taking it to the mechanic on Friday. Could I reschedule for next week?"
      },
      {
        speaker: "W-Br",
        text: "Let's see... It looks like we have only one appointment available at ten A.M. next Wednesday."
      },
      {
        speaker: "M-Cn",
        text: "I'll take it."
      },
      {
        speaker: "W-Br",
        text: "OK. It's scheduled. When you come, I hope you'll enjoy our new waiting room. We've recently remodeled it to make it more comfortable."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s3",
    contextType: "B4. 문의 / 안내",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t8-q38",
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
        id: "p3-t8-q39",
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
        id: "p3-t8-q40",
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
      {
        speaker: "W-Am",
        text: "Excuse me, sir. Are you part of the road crew that's working here? I'm wondering why I can't turn on to this street."
      },
      {
        speaker: "M-Cn",
        text: "The street will be blocked off until five P.M. while we put in some charging stations for electric cars. Once they're installed, people will be able to charge their cars while they're parked here."
      },
      {
        speaker: "W-Am",
        text: "But I'm already late for a recording session, and this street has the closest parking spots to the music studio. Plus, I have to carry my guitars there."
      },
      {
        speaker: "M-Cn",
        text: "I'm sorry, but if you go to the next block, there are some open spots there."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s4",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t8-q41",
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
        id: "p3-t8-q42",
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
        id: "p3-t8-q43",
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
      {
        speaker: "M-Au",
        text: "Good morning, Ms. Osman. I arrived a little early, so I already swept the aisles and I'm in the process of restocking the frozen foods section. Is there anything else you need me to do to get the store ready for the day?"
      },
      {
        speaker: "W-Br",
        text: "Can you also open up the second cash register?"
      },
      {
        speaker: "M-Au",
        text: "Sure, I'll do that as soon as I finish restocking the frozen vegetables."
      },
      {
        speaker: "W-Br",
        text: "OK... Remember, though, we open at seven."
      },
      {
        speaker: "M-Au",
        text: "Got it. I just have a few boxes of vegetables left."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s5",
    contextType: "B4. 문의 / 안내",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t8-q44",
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
        id: "p3-t8-q45",
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
        id: "p3-t8-q46",
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
      {
        speaker: "M-Cn",
        text: "How'd the interview for the graphic designer position with Hackley Motors go?"
      },
      {
        speaker: "W-Am",
        text: "Very well! They called me back for a second interview."
      },
      {
        speaker: "M-Cn",
        text: "Wow, they must've really liked you."
      },
      {
        speaker: "W-Am",
        text: "I think so. But there's quite a bit of competition. A lot of qualified people are applying for this graphic designer position, so I really need to do well in the next round of interviews."
      },
      {
        speaker: "M-Cn",
        text: "I'm sure you'll do great. When's the second interview?"
      },
      {
        speaker: "W-Am",
        text: "Thursday. I'll be visiting the factory and they'll show me around."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s6",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t8-q47",
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
        id: "p3-t8-q48",
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
        id: "p3-t8-q49",
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
      {
        speaker: "W-Am",
        text: "Welcome to Sandelman's Rare Books. How can I help you?"
      },
      {
        speaker: "M-Au",
        text: "Hi, I have this first edition book that I'd like to know the value of. I called yesterday to confirm that you do book appraisals here..."
      },
      {
        speaker: "W-Am",
        text: "Yes, my colleague, Margaret, assesses the value of books."
      },
      {
        speaker: "W-Br",
        text: "Hi, I'm Margaret. I see that your book is in... fair condition. Where do you store it?"
      },
      {
        speaker: "M-Au",
        text: "I keep it on my bookcase at home."
      },
      {
        speaker: "W-Br",
        text: "I ask because it looks like it's got some sun damage. It's a good idea to use a plastic cover to protect a book like this from exposure to the sunlight. We have some near the entrance with the other maintenance products, if you're interested."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s7",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t8-q50",
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
        id: "p3-t8-q51",
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
        id: "p3-t8-q52",
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
      {
        speaker: "W-Br",
        text: "Hi. I'm here to pick up a package. I found this notice on my door indicating I missed a delivery."
      },
      {
        speaker: "M-Cn",
        text: "OK, let me check my computer. Hmm, apparently the postal carrier tried to deliver it three times, but no one was home to sign for it."
      },
      {
        speaker: "W-Br",
        text: "Oh no! I've been away on business the last two weeks. I just saw the notice yesterday."
      },
      {
        speaker: "M-Cn",
        text: "I'm sorry, but it's already been returned to the sender."
      },
      {
        speaker: "W-Br",
        text: "I understand. Is there any way to avoid this in the future?"
      },
      {
        speaker: "M-Cn",
        text: "I'd suggest downloading our mobile application. Then you can track packages and receive delivery notifications online."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s8",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t8-q53",
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
        id: "p3-t8-q54",
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
        id: "p3-t8-q55",
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
      {
        speaker: "M-Cn",
        text: "Great work, both of you, on the new visitor brochure for Silverton. The pictures you selected for it really highlight the town nicely."
      },
      {
        speaker: "W-Am",
        text: "Thanks. Now we can spend time focusing on other ways that our committee can promote tourism in Silverton. Priyanka and I have a suggestion."
      },
      {
        speaker: "W-Br",
        text: "Right. We think it'd be a good idea to offer walking tours of the city center as a way to teach visitors about our town's history. We could ask for volunteers to run the tours. I can post a notice about it around town."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s9",
    contextType: "B4. 문의 / 안내",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t8-q56",
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
        id: "p3-t8-q57",
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
        id: "p3-t8-q58",
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
      {
        speaker: "W-Am",
        text: "Enzo, have you looked at the latest production numbers for the Shimmer Bright moisturizing lotion?"
      },
      {
        speaker: "M-Cn",
        text: "Yes, our production is up by nearly twenty percent. And not only for the lotion, but also for some of the lip glosses and nail polishes."
      },
      {
        speaker: "W-Am",
        text: "That's great to hear! I was wondering how it was going since we upgraded the assembly line machinery."
      },
      {
        speaker: "M-Cn",
        text: "The new machinery has definitely sped up the manufacturing process."
      },
      {
        speaker: "W-Am",
        text: "I have a meeting tomorrow with the management team. Do you think you could prepare a status report that I could share at the meeting?"
      },
      {
        speaker: "M-Cn",
        text: "I'd be happy to."
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s10",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t8-q59",
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
        id: "p3-t8-q60",
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
        id: "p3-t8-q61",
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
      {
        speaker: "M-Au",
        text: "Hi Mary. I'm sorry I didn't make it to the biotech conference last week. I needed to finish an important project."
      },
      {
        speaker: "W-Br",
        text: "No problem. You know, I met a reporter at the conference.... She's really interested in our company's new medical device. She's going to interview me about it this week for a science magazine."
      },
      {
        speaker: "M-Au",
        text: "That'll make the marketing department happy. You should reach out to one of our coworkers in that department."
      },
      {
        speaker: "W-Br",
        text: "That's a good idea. I'll talk to Megumi Ito."
      },
      {
        speaker: "M-Au",
        text: "So how did your conference presentation go? I know you were worried about attendance. You said you probably prepared too many materials for a small crowd."
      },
      {
        speaker: "W-Br",
        text: "Actually, I ran out of handouts!"
      },
      {
        speaker: "M-Au",
        text: "Nice!"
      }
    ]
  },
  {
    testId: 8,
    setId: "p3-t8-s11",
    contextType: "B4. 문의 / 안내",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t8-q62",
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
        id: "p3-t8-q63",
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
        id: "p3-t8-q64",
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
      {
        speaker: "W-Am",
        text: "Hi, Alberto. I couldn't get us tickets next to each other, but we can ask the train conductor about switching our seats when we get on board."
      },
      {
        speaker: "M-Au",
        text: "Oh, good. That way we can prepare for our meeting this afternoon. These could be really important clients for us. If they sign this contract, it'll definitely expand our business in that region."
      },
      {
        speaker: "W-Am",
        text: "You're right. I'll ask right away if we can switch. Let's see... our train leaves at nine twenty-four. Why don't we head over to the platform now?"
      },
      {
        speaker: "M-Au",
        text: "Sounds good."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q62.png"
  },
  {
    testId: 8,
    setId: "p3-t8-s12",
    contextType: "C3. 일정 변경 / 취소",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t8-q65",
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
        id: "p3-t8-q66",
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
        id: "p3-t8-q67",
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
      {
        speaker: "M-Cn",
        text: "Hey, Lisa... I just talked to the property manager, and she's very happy with the new trees and flowers we planted."
      },
      {
        speaker: "W-Am",
        text: "Great! Does that mean we're done for the day?"
      },
      {
        speaker: "M-Cn",
        text: "Almost. We just have to water the new plants and pack up our tools. Can you do that, though? I need to head across town to the bank to make a deposit."
      },
      {
        speaker: "W-Am",
        text: "OK."
      },
      {
        speaker: "M-Cn",
        text: "Oh, and please put up our promotional sign. The property manager is fine with that. Can you put it up at the intersection of Hill Lane and Meadow Street?"
      },
      {
        speaker: "W-Am",
        text: "Sure, I'll do that."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q65.png"
  },
  {
    testId: 8,
    setId: "p3-t8-s13",
    contextType: "B4. 문의 / 안내",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t8-q68",
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
        id: "p3-t8-q69",
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
        id: "p3-t8-q70",
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
      {
        speaker: "M-Au",
        text: "This is customer service for the Portsville Times. How can I help you?"
      },
      {
        speaker: "W-Am",
        text: "Hi! I'm calling to subscribe to your paper. My best friend recommended it."
      },
      {
        speaker: "M-Au",
        text: "Well, please tell your friend that we appreciate her recommendation. Now, we have several options to choose from—are you interested in having the paper delivered to your house?"
      },
      {
        speaker: "W-Am",
        text: "No, that's not necessary. I prefer to read articles on my tablet computer."
      },
      {
        speaker: "M-Au",
        text: "All right, sounds like you just need online access, then. Our digital subscription is nine dollars a month."
      },
      {
        speaker: "W-Am",
        text: "That's perfect."
      },
      {
        speaker: "M-Au",
        text: "OK. I'll just need your credit card information to begin processing your subscription."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q68.png"
  },
  {
    testId: 9,
    setId: "p3-t9-s1",
    contextType: "B4. 문의 / 안내",
    questionRange: "32-34",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_32-34.mp3",
    questions: [
      {
        id: "p3-t9-q32",
        text: "Where does the man work?",
        classification: "WHO_LOC",

        options: {
          A: "At a department store",
          B: "At a bank",
          C: "At an electronics store",
          D: "At an apartment complex"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t9-q33",
        text: "Why is the woman calling?",
        classification: "WHY_REASON",

        options: {
          A: "To confirm a payment amount",
          B: "To schedule an appointment",
          C: "To ask for a replacement item",
          D: "To check on a delayed shipment"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q34",
        text: "What does the man ask for?",
        classification: "ASK_QUESTION",

        options: {
          A: "A confirmation number",
          B: "A location",
          C: "An event date",
          D: "A completed form"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Oakview Apartments. Chan-Ho speaking."
      },
      {
        speaker: "W-Am",
        text: "Good morning. I'm a resident here, and lost my key. It must have fallen off my key chain. I'll need a new one."
      },
      {
        speaker: "M-Cn",
        text: "I'm sorry to hear that. I have an extra key here in the management office. I'll send one of the maintenance workers over with it."
      },
      {
        speaker: "W-Am",
        text: "Thank you so much. I really appreciate it."
      },
      {
        speaker: "M-Cn",
        text: "No problem. Can you tell me which unit is yours?"
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s2",
    contextType: "B4. 문의 / 안내",
    questionRange: "35-37",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_35-37.mp3",
    questions: [
      {
        id: "p3-t9-q35",
        text: "Where does the conversation most likely take place?",
        classification: "WHO_LOC",

        options: {
          A: "At a museum",
          B: "At a library",
          C: "At a theater",
          D: "At an art school"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t9-q36",
        text: "Why is the man visiting?",
        classification: "WHY_REASON",

        options: {
          A: "To meet a friend",
          B: "To take some photographs",
          C: "To do research for a book",
          D: "To deliver a shipment"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q37",
        text: "Why does the woman suggest that the man hurry?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "An event will begin shortly.",
          B: "Closing time is approaching.",
          C: "A wait time is long.",
          D: "Seating is limited."
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Here's your admission ticket. It includes access to our seventeenth-century pottery exhibit-it just opened this weekend."
      },
      {
        speaker: "M-Au",
        text: "Thanks, I came here specifically to see that. I'm writing a book about European pottery, and there's a vase I want to take a closer look at."
      },
      {
        speaker: "W-Am",
        text: "Then you might also be interested in today's special lecture. We have an archaeologist here to talk about how pottery is dated. You'll have to hurry though. It starts in just a few minutes."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s3",
    contextType: "A5. 교육 / 트레이닝",
    questionRange: "38-40",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_38-40.mp3",
    questions: [
      {
        id: "p3-t9-q38",
        text: "Who is Chris Suzuki?",
        classification: "WHO_LOC",

        options: {
          A: "A shift manager",
          B: "An inspector",
          C: "An apprentice",
          D: "A new client"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q39",
        text: "Where is the conversation most likely taking place?",
        classification: "WHO_LOC",

        options: {
          A: "In a hardware store",
          B: "In a factory",
          C: "In a storage facility",
          D: "In a product showroom"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q40",
        text: "What will the woman probably do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Negotiate a contract with Chris",
          B: "Review scheduling procedures with Chris",
          C: "Introduce Chris to some colleagues",
          D: "Show Chris the cafeteria"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Hey, Pierre. This is Chris Suzuki. He's our new apprentice."
      },
      {
        speaker: "M-Cn",
        text: "Nice to meet you, Chris. So you're training to become a welder?"
      },
      {
        speaker: "M-Au",
        text: "Actually, a machinist. I'll spend part of my apprenticeship studying welding, and I'll also learn to read blueprints and operate machinery."
      },
      {
        speaker: "M-Cn",
        text: "Well, you came to the right place. There're plenty of experienced workers and opportunities for hands-on practice in this factory."
      },
      {
        speaker: "M-Au",
        text: "I'm excited to get started."
      },
      {
        speaker: "W-Br",
        text: "Well, we'll let you get back to work. I want Chris to meet a few more people before the shift ends."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s4",
    contextType: "A3. 인사 / 휴가 / 근무",
    questionRange: "41-43",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_41-43.mp3",
    questions: [
      {
        id: "p3-t9-q41",
        text: "What will most likely be celebrated on Friday?",
        classification: "DETAIL",

        options: {
          A: "A promotion",
          B: "A retirement",
          C: "A graduation",
          D: "A business deal"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q42",
        text: "What does the man offer to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Look for a receipt",
          B: "Send invitations",
          C: "Reserve a room",
          D: "Prepare a dessert"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t9-q43",
        text: "What does the woman say she is looking forward to?",
        classification: "DETAIL",

        options: {
          A: "Visiting her family",
          B: "Moving to a different city",
          C: "Traveling internationally",
          D: "Organizing a team"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Hi, Marisol. I got the invitation from Sunita about your party on Friday. I can't believe this is your last week here. You've had quite a career."
      },
      {
        speaker: "W-Am",
        text: "Thank you. It's been great."
      },
      {
        speaker: "M-Cn",
        text: "I'll definitely be at the party. What's your favorite dessert?"
      },
      {
        speaker: "W-Am",
        text: "Oh, I love cheesecake."
      },
      {
        speaker: "M-Cn",
        text: "OK, I have the perfect recipe. Well, this is exciting. So, what's next for you?"
      },
      {
        speaker: "W-Am",
        text: "I'm going overseas to Europe for a couple of weeks. I can't wait."
      },
      {
        speaker: "M-Cn",
        text: "Sounds amazing."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s5",
    contextType: "B1. 불만 / 문제 제기",
    questionRange: "44-46",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_44-46.mp3",
    questions: [
      {
        id: "p3-t9-q44",
        text: "What was the problem with the man's previous floor mat?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "It was not durable.",
          B: "It had a strong odor.",
          C: "It damaged the floor.",
          D: "It was too small."
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q45",
        text: "What does the woman invite the man to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "View images in a catalog",
          B: "Read about special features",
          C: "Watch a demonstration",
          D: "Open a package"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t9-q46",
        text: "According to the woman, why is a manufacturer proud of its floor mats?",
        classification: "WHY_REASON",

        options: {
          A: "They are easy to clean.",
          B: "They can be used on a variety of surfaces.",
          C: "They allow for free movement.",
          D: "They can be rolled or folded."
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Excuse me. I'm looking at these floor mats. My office chair scratches my hardwood floor, so I need something to protect it. I bought a mat somewhere else, but it had a strong plastic smell."
      },
      {
        speaker: "W-Am",
        text: "That shouldn't be a problem with our floor mats. You're welcome to take one out of the box to see for yourself."
      },
      {
        speaker: "M-Au",
        text: "Thanks. Is there a chair I can try it with? I want to make sure the wheels won't sink into it."
      },
      {
        speaker: "W-Am",
        text: "Sure. These mats have a patented easy-glide surface, meaning they're firm enough to let you freely maneuver around your work space in a rolling chair. It's something the manufacturer's particularly proud of."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s6",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "47-49",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_47-49.mp3",
    questions: [
      {
        id: "p3-t9-q47",
        text: "What industry do the speakers most likely work in?",
        classification: "DETAIL",

        options: {
          A: "Music",
          B: "Restaurant",
          C: "Film production",
          D: "Book publishing"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q48",
        text: "What does the man mean when he says, \"we just switched to a new software program\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "He needs to consult a user's manual.",
          B: "The quality of his work will improve.",
          C: "A task may take longer than expected.",
          D: "A training session should be organized."
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q49",
        text: "Why does the woman congratulate the man?",
        classification: "WHY_REASON",

        options: {
          A: "He won an award.",
          B: "He received a promotion.",
          C: "He will be leading a team.",
          D: "He developed some new software."
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Am",
        text: "Abdullah, have you edited the film footage for that frozen food commercial yet?"
      },
      {
        speaker: "M-Cn",
        text: "The video and music are done, but I'm still working on the dubbing to add the actors' voices in."
      },
      {
        speaker: "W-Am",
        text: "Can you have it finished by the end of the week? The client hoped to have it air on television next Monday."
      },
      {
        speaker: "M-Cn",
        text: "Well, we just switched to a new software program."
      },
      {
        speaker: "W-Am",
        text: "Hmm... OK. I'll ask the client if they'd be willing to move the deadline for us. By the way, congratulations. I heard that you recently won a best effects award in an industry competition."
      },
      {
        speaker: "M-Cn",
        text: "Oh, thanks. Yes, I worked hard on the entry I submitted, so I was happy to be selected."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s7",
    contextType: "B4. 문의 / 안내",
    questionRange: "50-52",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_50-52.mp3",
    questions: [
      {
        id: "p3-t9-q50",
        text: "What do the women want to do?",
        classification: "DETAIL",

        options: {
          A: "Rent a car",
          B: "Buy ferry tickets",
          C: "Take a city tour",
          D: "Book a hotel"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q51",
        text: "What does the man say was recently introduced?",
        classification: "DETAIL",

        options: {
          A: "A customer loyalty program",
          B: "An online feedback form",
          C: "A cashless payment system",
          D: "A renovated waiting area"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q52",
        text: "What does the man suggest the women do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Purchase some postcards",
          B: "Visit a historic site",
          C: "Call a taxi service",
          D: "Download a mobile application"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Hello. Welcome to New York Ferry Service. How can I help you two?"
      },
      {
        speaker: "W-Br",
        text: "Hi. We're trying to catch the next ferry to the city."
      },
      {
        speaker: "W-Am",
        text: "Yeah, how much are one-way commuter tickets?"
      },
      {
        speaker: "M-Au",
        text: "OK. It's ten dollars per person. Have you heard of our new payment option?"
      },
      {
        speaker: "W-Br",
        text: "No. What is it?"
      },
      {
        speaker: "M-Au",
        text: "Well, we just introduced a payment system that allows you to pay for your tickets right from your smartphone. No cash is needed."
      },
      {
        speaker: "W-Am",
        text: "That sounds great."
      },
      {
        speaker: "M-Au",
        text: "It definitely is! I suggest you both download our app so you can use this method in the future."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s8",
    contextType: "B4. 문의 / 안내",
    questionRange: "53-55",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_53-55.mp3",
    questions: [
      {
        id: "p3-t9-q53",
        text: "Where are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "At a fund-raiser",
          B: "At a trade show",
          C: "At a job fair",
          D: "At a store opening"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q54",
        text: "What kind of products does the man's company make?",
        classification: "DETAIL",

        options: {
          A: "Jewelry",
          B: "Handbags",
          C: "Floor rugs",
          D: "Picture frames"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t9-q55",
        text: "What does the man suggest doing?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Leaving a business card",
          B: "Registering online",
          C: "Placing an order",
          D: "Taking a catalog"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Hans Jones Jewelry? Hmm, I don't remember seeing your booth at this trade show before. Can you tell me about your company?"
      },
      {
        speaker: "M-Cn",
        text: "Sure. We're a relatively new company, and we're just starting to visit trade shows. We specialize in creating affordable jewelry made with high-quality materials."
      },
      {
        speaker: "W-Br",
        text: "Your necklaces are beautiful. I'd love to sell them at my fashion boutiques. Do you make any earrings or bracelets?"
      },
      {
        speaker: "M-Cn",
        text: "Yes, I just didn't have room to display them here. But take one of our catalogs. It has pictures of our entire collection."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s9",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "56-58",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_56-58.mp3",
    questions: [
      {
        id: "p3-t9-q56",
        text: "Who most likely are the speakers?",
        classification: "WHO_LOC",

        options: {
          A: "News reporters",
          B: "Travel agents",
          C: "Bus drivers",
          D: "City officials"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t9-q57",
        text: "Why is the man concerned?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "He forgot to make a phone call.",
          B: "He might miss a deadline.",
          C: "A contract requires a signature.",
          D: "A colleague is late for work."
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q58",
        text: "Why does the woman say, \"they're hosting a big press conference at noon\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To suggest attending an event",
          B: "To inform the man about a schedule change",
          C: "To complain about a decision",
          D: "To ask the man for a ride"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Hi, Carlos. I have a question about the news story you're working on-the one about the local bus system. Did you get a quote from someone at the transit agency?"
      },
      {
        speaker: "M-Au",
        text: "No, I haven't been able to contact anyone there yet. And our deadline to get this story on tonight's news is five P.M. I'm concerned we'll miss it if they don't respond soon."
      },
      {
        speaker: "W-Br",
        text: "Well, I just heard they're hosting a big press conference at noon."
      },
      {
        speaker: "M-Au",
        text: "What a great idea-I'll leave now."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s10",
    contextType: "A2. 프로젝트 / 업무 진행",
    questionRange: "59-61",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_59-61.mp3",
    questions: [
      {
        id: "p3-t9-q59",
        text: "Where do the speakers most likely work?",
        classification: "WHO_LOC",

        options: {
          A: "At a real estate agency",
          B: "At a florist shop",
          C: "At a construction company",
          D: "At an interior design firm"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q60",
        text: "What do the speakers agree to do?",
        classification: "DETAIL",

        options: {
          A: "Promote some products on a Web site",
          B: "Send e-mails to previous customers",
          C: "Leave brochures in a building lobby",
          D: "Put up signs near a highway"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t9-q61",
        text: "Who does the man say he will contact?",
        classification: "WHO_LOC",

        options: {
          A: "An administrative assistant",
          B: "An Internet provider",
          C: "A photographer",
          D: "An accountant"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "M-Au",
        text: "Tomoko, our sales of fresh flowers have always been strong, but to increase business, I think we should try to sell more indoor potted plants. I'm sure we could find customers in local office buildings."
      },
      {
        speaker: "W-Br",
        text: "Not just offices. People working from home would be interested, too. Why don't we start promoting the idea by featuring some plants on our Web site?"
      },
      {
        speaker: "M-Au",
        text: "OK, let's do that. I know a photographer who specializes in product pictures. I'll get in touch and see when she's available."
      }
    ]
  },
  {
    testId: 9,
    setId: "p3-t9-s11",
    contextType: "A1. 회의 / 일정 조정",
    questionRange: "62-64",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_62-64.mp3",
    questions: [
      {
        id: "p3-t9-q62",
        text: "What is the woman planning?",
        classification: "DETAIL",

        options: {
          A: "A product launch",
          B: "A charity event",
          C: "A retirement party",
          D: "A factory inspection"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q63",
        text: "Look at the graphic. Which room will the woman most likely reserve?",
        classification: "GRAPHIC",

        options: {
          A: "The Arroyo Room",
          B: "The Salinas Room",
          C: "The Reyes Room",
          D: "The Miramar Room"
        },
        correctAnswer: "B"
      },
      {
        id: "p3-t9-q64",
        text: "What does the man say he will provide?",
        classification: "DETAIL",

        options: {
          A: "Some measurements",
          B: "Some menu options",
          C: "Proof of insurance",
          D: "A list of musicians"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Hello, this is the Vega Event Center. How can I help you?"
      },
      {
        speaker: "W-Br",
        text: "Hi. I work for Thomson Manufacturing Company, and we're planning a charity auction."
      },
      {
        speaker: "M-Cn",
        text: "Great, we've definitely hosted those before. How many guests do you anticipate?"
      },
      {
        speaker: "W-Br",
        text: "Well, we want to invite 250 guests. Do you have an event space that would accommodate us?"
      },
      {
        speaker: "M-Cn",
        text: "Oh, yes. One of our banquet rooms fits between 200 and 300 people."
      },
      {
        speaker: "W-Br",
        text: "Excellent. We'd also like to have a musical act perform during the auction. Can you recommend some bands?"
      },
      {
        speaker: "M-Cn",
        text: "Absolutely. I'll send you a list of groups that we regularly hire."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q62.png"
  },
  {
    testId: 9,
    setId: "p3-t9-s12",
    contextType: "B4. 문의 / 안내",
    questionRange: "65-67",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_65-67.mp3",
    questions: [
      {
        id: "p3-t9-q65",
        text: "Who most likely is the woman?",
        classification: "WHO_LOC",

        options: {
          A: "A commercial pilot",
          B: "A regional manager",
          C: "A travel agent",
          D: "A news reporter"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t9-q66",
        text: "Look at the graphic. Which airport does the man point out?",
        classification: "GRAPHIC",

        options: {
          A: "Smithville Airport",
          B: "Greenview Airport",
          C: "Leonard Airport",
          D: "Allenville Airport"
        },
        correctAnswer: "D"
      },
      {
        id: "p3-t9-q67",
        text: "What does the man recommend?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Adjusting travel plans",
          B: "Changing a delivery time",
          C: "Finding discounted tickets",
          D: "Hiring additional agents"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "W-Br",
        text: "Joining me for tonight's news broadcast is aviation expert Dmitry Petrov."
      },
      {
        speaker: "M-Au",
        text: "Thanks for having me."
      },
      {
        speaker: "W-Br",
        text: "Airports around the country are seeing more and more flight delays. What might be causing this trend?"
      },
      {
        speaker: "M-Au",
        text: "Air travel has been steadily increasing. More travelers and flights cause airport congestion-and delays."
      },
      {
        speaker: "W-Br",
        text: "Is this trend consistent across airports?"
      },
      {
        speaker: "M-Au",
        text: "Actually, no. Look at this graph. Some see average delays of around twenty minutes, but some like this airport here, can be over forty."
      },
      {
        speaker: "W-Br",
        text: "What would you tell travelers to do?"
      },
      {
        speaker: "M-Au",
        "text": "If possible, try changing your plans to avoid cities known for delays, and if you can, shift your travel to off-peak times."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q65.png"
  },
  {
    testId: 9,
    setId: "p3-t9-s13",
    contextType: "B2. 주문 / 배송",
    questionRange: "68-70",
    audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_68-70.mp3",
    questions: [
      {
        id: "p3-t9-q68",
        text: "What event is taking place next month?",
        classification: "ACTION_NEXT",

        options: {
          A: "A concert",
          B: "A fund-raiser",
          C: "An anniversary celebration",
          D: "A community festival"
        },
        correctAnswer: "C"
      },
      {
        id: "p3-t9-q69",
        text: "Look at the graphic. How much will the selected item cost?",
        classification: "GRAPHIC",

        options: {
          A: "$5.00",
          B: "$6.00",
          C: "$7.00",
          D: "$8.00"
        },
        correctAnswer: "A"
      },
      {
        id: "p3-t9-q70",
        text: "What will the man do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Revise a design",
          B: "Search a Web site",
          C: "Book a venue",
          D: "Place an order"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "M-Cn",
        text: "Helen, remember we discussed doing something special for our bakery's anniversary next month?"
      },
      {
        speaker: "W-Am",
        text: "Yes, we talked about having a souvenir item with our logo on it."
      },
      {
        speaker: "M-Cn",
        text: "Right. Here are four options I came up with."
      },
      {
        speaker: "W-Am",
        text: "Let's see... I think the short-sleeved shirt with our business logo on the front will have the widest appeal, since it'll be hot in the summer. It will really help advertise our store too."
      },
      {
        speaker: "M-Cn",
        text: "OK. I'll go ahead and order those now."
      }
    ],
    image: "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q68.png"
  }
  ,
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
