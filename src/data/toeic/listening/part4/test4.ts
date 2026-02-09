import { Part4Set } from '../../../listening_types';

export const test4: Part4Set[] = [
  {
    testId: 4,
    setId: "p4-t4-s1",
    questionRange: "71-73",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_71-73.mp3",
    questions: [
      {
        id: "p4-t4-q71",
        text: "Who are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Residents in an apartment building",
          B: "Employees in an office building",
          C: "Visitors to a historical site",
          D: "Guests in a hotel"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t4-q72",
        text: "What service does the speaker say will be unavailable?",
        classification: "DETAIL",

        options: {
          A: "Telephone",
          B: "Electric",
          C: "Water",
          D: "Natural gas"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q73",
        text: "According to the speaker, why should the listeners go online?",
        classification: "WHY_REASON",

        options: {
          A: "To download software",
          B: "To check for status updates",
          C: "To register a complaint",
          D: "To view a price list"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Am: Hello, Fairview Apartment residents. This is your property manager. Due to repairs to the main water line along Chasman Boulevard, water service to all units at Fairview will be temporarily shut off on July fifteenth. I estimate that regular service will resume fully by five o'clock, though I recommend checking the building's social media page periodically. There'll be updates posted about possible delays. Thank you in advance for your patience and understanding."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s2",
    questionRange: "74-76",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_74-76.mp3",
    questions: [
      {
        id: "p4-t4-q74",
        text: "Where does the announcement most likely take place?",
        classification: "WHO_LOC",

        options: {
          A: "At a train station",
          B: "At a convention center",
          C: "At a restaurant",
          D: "At an outdoor market"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q75",
        text: "According to the speaker, what should customers be told?",
        classification: "DETAIL",

        options: {
          A: "The Wi-Fi is not working.",
          B: "A room is closed for renovations.",
          C: "A schedule has been changed.",
          D: "An item is unavailable."
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q76",
        text: "What does the speaker encourage the listeners to do?",
        classification: "DETAIL",

        options: {
          A: "Work together",
          B: "Arrive early",
          C: "Take extra shifts",
          D: "Greet customers"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Br: Before we begin tonight's dinner shift, I have some announcements. Our grilled tuna dish was so popular last night that we actually sold out of it for the rest of the weekend. Please let diners know that it's not available. Also, we'll be dividing up the servers this evening-half of you will be working in the main dining room, and the rest of you will be in the special-events room for a private party. It's going to be a busy evening, so I encourage you to help each other provide great service for our customers."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s3",
    questionRange: "77-79",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_77-79.mp3",
    questions: [
      {
        id: "p4-t4-q77",
        text: "Who most likely are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Building contractors",
          B: "Potential investors",
          C: "Fashion models",
          D: "News reporters"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t4-q78",
        text: "What type of clothing does the company sell?",
        classification: "DETAIL",

        options: {
          A: "Swimwear",
          B: "Hats",
          C: "Business suits",
          D: "Athletic shoes"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q79",
        text: "What does the speaker's company hope to purchase?",
        classification: "DETAIL",

        options: {
          A: "A new software program",
          B: "A larger storage facility",
          C: "Some delivery trucks",
          D: "Some manufacturing equipment"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Am: Good morning! I really appreciate this opportunity to talk to you about investing in our company. After hearing my presentation, you'll see that our latest product is a worthwhile investment. Cygni Fashions has been selling business suits for more than 30 years. Last summer, when the weather was unusually hot, we decided to design suits that would be comfortable to wear when it's hot outside. People who wear these suits remain cool, regardless of the temperature. Now, these suits have become so popular that we cannot keep up with the demand. With your investment, we'll be able to purchase some advanced machinery that would allow us to triple our production."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s4",
    questionRange: "80-82",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_80-82.mp3",
    questions: [
      {
        id: "p4-t4-q80",
        text: "What industry do the listeners most likely work in?",
        classification: "DETAIL",

        options: {
          A: "Construction",
          B: "Retail",
          C: "Energy",
          D: "Broadcast"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q81",
        text: "What does the speaker imply when he says, “But there is a lot of paperwork to fill out”?",
        classification: "WHEN_TIME",

        options: {
          A: "The listeners may have to work overtime.",
          B: "The listeners will not begin work immediately.",
          C: "A permit will be difficult to obtain.",
          D: "Additional help is needed for a project."
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t4-q82",
        text: "What will the speaker do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Take some photographs",
          B: "Look at a model home",
          C: "Collect some viewer feedback",
          D: "Go to the cafeteria"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn: I'm Thomas Ortiz, head of Human Resources here at Hamilton Power. On behalf of the company, I want to welcome you all to your new jobs. As you know, this is our most advanced power plant, and we provide electricity to over a half-million homes. I'm sure you're all eager to go to your workstations. But there is a lot of paperwork to fill out. I'll be going over it with you in a moment But first, I'd like to take your pictures for your ID badges. They'll be ready for you after lunch."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s5",
    questionRange: "83-85",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_83-85.mp3",
    questions: [
      {
        id: "p4-t4-q83",
        text: "According to the speaker, what event will be held tonight?",
        classification: "DETAIL",

        options: {
          A: "An anniversary party",
          B: "A press conference",
          C: "A board meeting",
          D: "A product launch"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q84",
        text: "Why does the speaker say, “I’ll be driving to Holtsville from the office”?",
        classification: "WHY_REASON",

        options: {
          A: "To correct a mistake",
          B: "To provide an excuse",
          C: "To make an offer",
          D: "To request directions"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q85",
        text: "What does the speaker say he needs to pick up?",
        classification: "DETAIL",

        options: {
          A: "Some promotional materials",
          B: "Some refreshments",
          C: "Customer surveys",
          D: "Event programs"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Au: Hi, Mario. I'm calling about tonight. I know you plan to be at the product launch in Holtsville to announce the release of our new smartphone. You mentioned that you're taking the red subway line to that event. Well, I just found out that the subway line is closed unexpectedly for repairs. So, I wanted to let you know, I'll be driving to Holtsville from the office. Now, I have to make one stop on the way. I have to pick up the promotional materials that'll be handed out to attendees-those phone cases with our company logo. But there's plenty of time to pick the cases up and still make it to the product launch before it starts."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s6",
    questionRange: "86-88",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_86-88.mp3",
    questions: [
      {
        id: "p4-t4-q86",
        text: "Which department does the speaker most likely work for?",
        classification: "DETAIL",

        options: {
          A: "Product Development",
          B: "Research",
          C: "Engineering",
          D: "Information Technology"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q87",
        text: "What does the speaker say recently happened?",
        classification: "DETAIL",

        options: {
          A: "Some certification classes began.",
          B: "Name badges were handed out.",
          C: "A virus infected some computers.",
          D: "A manager retired."
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q88",
        text: "What does the speaker ask the listeners to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Sign an attendance sheet",
          B: "Open a software program",
          C: "Submit some photos",
          D: "View a slideshow"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn: Welcome to this computer security workshop, hosted by the IT Department. This workshop is intended to be interactive, so please ask questions at any time. We scheduled the workshop because several employees' computers have recently become infected with a virus, and they had to be fixed. OK, so the first thing I'm going to show you is how to update your security software. Please open the program by clicking on the icon on the right-hand side of your computer screen."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s7",
    questionRange: "89-91",
    contextType: "B1 (internal_meeting)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_89-91.mp3",
    questions: [
      {
        id: "p4-t4-q89",
        text: "Where do the listeners most likely work?",
        classification: "WHO_LOC",

        options: {
          A: "At a software development company",
          B: "At a book publishing company",
          C: "At a graphic design firm",
          D: "At a news Web site"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q90",
        text: "What is the speaker concerned about?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Addressing a customer complaint",
          B: "Keeping up with competitors",
          C: "Exceeding an annual budget",
          D: "Improving employee productivity"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t4-q91",
        text: "What does the speaker imply when he says, “we have technology interns starting next week”?",
        classification: "ACTION_NEXT",

        options: {
          A: "A task must be finished soon.",
          B: "An assignment should be delayed.",
          C: "Volunteers are needed to greet interns.",
          D: "Interns can assist with a new project."
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Au: OK, let's get started-there's a lot to cover! First, I want to thank the Web design team for joining this weekly check-in of our editorial staff and reporters. An online organization like ours relies heavily on the support of its design and technical staff. Today I'd like to discuss adding a section to the site that features our most popular news stories. Many other news sites already have a popular stories section. I'm concerned that we're not keeping up with them, and it could affect our readership. Now, I realize you're all busy, but I don't think this will involve too much work. Plus, remember, we have technology interns starting next week."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s8",
    questionRange: "92-94",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_92-94.mp3",
    questions: [
      {
        id: "p4-t4-q92",
        text: "Where is the speaker?",
        classification: "WHO_LOC",

        options: {
          A: "At a public library",
          B: "At a history museum",
          C: "At a community center",
          D: "At a sports arena"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t4-q93",
        text: "What will happen next week?",
        classification: "ACTION_NEXT",

        options: {
          A: "A new exhibit will be set up.",
          B: "A fund-raiser will take place.",
          C: "A local election will be held.",
          D: "A construction project will begin."
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q94",
        text: "What are visitors encouraged to do?",
        classification: "DETAIL",

        options: {
          A: "Park on a side street",
          B: "Wear ear protection",
          C: "Donate money",
          D: "Take photographs"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn: Hello. This is Jie Liu, reporting live from the Benton Public Library. Starting next week, the library will be undergoing major renovations. A new section will be added to the east side of this building. The addition will include a larger children's section and a computer lab. The library will be open during the renovations, though you may want to bring earplugs to wear. Susan Anderson, the head librarian, warns that the construction will be noisy. And now, back to the studio."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s9",
    questionRange: "95-97",
    contextType: "A1 (announcement)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_95-97.mp3",
    image: "/images/ETS_TOEIC_3/Test_04/Part_04/p4_q95.png",
    questions: [
      {
        id: "p4-t4-q95",
        text: "Where is the announcement being made?",
        classification: "WHO_LOC",

        options: {
          A: "At a supermarket",
          B: "At a clothing store",
          C: "At an office supply store",
          D: "At a home garden center"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q96",
        text: "Look at the graphic. Which lane is the express lane?",
        classification: "GRAPHIC",

        options: {
          A: "Lane 1",
          B: "Lane 2",
          C: "Lane 3",
          D: "Lane 4"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q97",
        text: "According to the speaker, what can the listeners receive assistance with?",
        classification: "DETAIL",

        options: {
          A: "Checking a price",
          B: "Moving large items",
          C: "Applying for a credit card",
          D: "Locating a vehicle"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Au: Good morning, shoppers. Thanks for shopping at Bigton Office Supply. We'd like to apologize for the noise. We're in the process of replacing the shelving in aisle 2. To get to the printer cartridges in that aisle, please ask for assistance from one of our store clerks in the red vests. They'll be happy to move the ladders and get the product you need. Finally, we're accepting only cash in express lane 4. If you're paying with a credit card, please go to lanes 1, 2, or 3. Thanks."
      }
    ]
  },
  {
    testId: 4,
    setId: "p4-t4-s10",
    questionRange: "98-100",
    contextType: "B1 (internal_meeting)",
    audio: "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_98-100.mp3",
    image: "/images/ETS_TOEIC_3/Test_04/Part_04/p4_q98.png",
    questions: [
      {
        id: "p4-t4-q98",
        text: "Who is the speaker?",
        classification: "WHO_LOC",

        options: {
          A: "A structural engineer",
          B: "A journalist",
          C: "A tour guide",
          D: "A city official"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t4-q99",
        text: "Why is a building special?",
        classification: "DETAIL",

        options: {
          A: "It was constructed in a short time.",
          B: "It has a technologically advanced security system.",
          C: "It has environmentally friendly features.",
          D: "It was designed by a famous architect."
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t4-q100",
        text: "Look at the graphic. Which floor of the building is not open yet?",
        classification: "GRAPHIC",

        options: {
          A: "Floor 4",
          B: "Floor 3",
          C: "Floor 2",
          D: "Floor 1"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn: Welcome to the new Conference Center. I'm the mayor, and I'm delighted to give you a tour of this building. As you can see from the diagram, the building has four floors. The first floor has a food court. The second floor is a recreation center. The third floor has offices. And the fourth floor, the Conference Center, is not open yet. We're still working on it. Now, what makes this building special is that it has many environmentally friendly features. For example, the building uses solar panels for energy. Let me show you around."
      }
    ]
  }
];
