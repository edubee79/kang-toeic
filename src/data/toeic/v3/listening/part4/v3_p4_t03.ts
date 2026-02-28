import { Part4Set } from './types';

export const test3Data: Part4Set[] = [
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s1",
    questionRange: "71-73",
    contextType: "A1 (announcement_general)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_71-73.mp3",
    questions: [
      {
        id: "v3-p4-t3-q71",
        text: "Where is the announcement most likely being made?",
        classification: "WHO_LOC",

        options: {
          A: "At a train station",
          B: "At a bus station",
          C: "At an airport",
          D: "At a ferry terminal"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t3-q72",
        text: "Why is a change being made?",
        classification: "WHY_REASON",

        options: {
          A: "It will improve traffic flow.",
          B: "It will keep prices low.",
          C: "It will increase energy efficiency.",
          D: "It will save staff time."
        },
        correctAnswer: "A"
      },
      {
        id: "v3-p4-t3-q73",
        text: "What does the speaker recommend?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Filling out a survey",
          B: "Printing some tickets",
          C: "Checking online for updates",
          D: "Allowing extra time"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Attention, passengers. On Monday, some of our major bus routes will begin departing from another part of the station. All buses to Freeport, Johnstown, and Grant City will be leaving from gates 300 through 305 on the west side of the building. This change will help us to improve traffic flow. Since the new gates are a ten-minute walk from the ticket counter, we recommend allowing yourself extra time to walk there."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s2",
    questionRange: "74-76",
    contextType: "A1 (announcement_general)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_74-76.mp3",
    questions: [
      {
        id: "v3-p4-t3-q74",
        text: "What event is taking place?",
        classification: "DETAIL",

        options: {
          A: "A grand opening",
          B: "A focus group",
          C: "A food festival",
          D: "A sales workshop"
        },
        correctAnswer: "A"
      },
      {
        id: "v3-p4-t3-q75",
        text: "What does the speaker say is distinct about a coffee blend?",
        classification: "DETAIL",

        options: {
          A: "It is locally sourced.",
          B: "It is available in glass bottles.",
          C: "It comes in several different flavors.",
          D: "It contains a lot of caffeine."
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t3-q76",
        text: "What is the speaker offering customers?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Free delivery",
          B: "Two-day shipping",
          C: "A full refund",
          D: "A discount"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Welcome! Thank you for attending the grand opening of my new coffee shop. We're featuring our very own signature coffee blend. This coffee is distinct from all other blends on the market, because it has more caffeine than any other coffee, thanks to our roasting process. It's not all about caffeine though—this coffee still has a rich, nutty flavor. I'm so confident of my new coffee, that if any customers believe that it's not the strongest they've ever had, I'm offering a 100 percent money-back guarantee. Enjoy!"
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s3",
    questionRange: "77-79",
    contextType: "A1 (announcement_general)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_77-79.mp3",
    questions: [
      {
        id: "v3-p4-t3-q77",
        text: "How does each tour begin?",
        classification: "HOW_METHOD",

        options: {
          A: "Refreshments are served.",
          B: "Safety equipment is explained.",
          C: "A video is shown.",
          D: "Maps are distributed."
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t3-q78",
        text: "What kind of gift do participants receive?",
        classification: "DETAIL",

        options: {
          A: "A discount coupon",
          B: "A bag of snacks",
          C: "A T-shirt",
          D: "A postcard"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t3-q79",
        text: "What does the speaker warn the listeners about?",
        classification: "WHAT_WHICH",

        options: {
          A: "How to pay for food",
          B: "What clothes to wear",
          C: "Where to park",
          D: "Which days to visit"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "If you're looking for a unique experience for the whole family, why not try a tour of Baxter's Snack Food Factory? Each tour begins with a video about the history of Baxter's. Then, unlike most factory tours, we actually take you out on the factory floor. At the end of the tour, everyone receives a free bag of our delicious snacks. Tours are available every weekday, but if you want to see our production in action, be sure to come and visit us from Monday to Wednesday. We can't guarantee production will be running on Thursdays and Fridays!"
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s4",
    questionRange: "80-82",
    contextType: "G1_message",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_80-82.mp3",
    questions: [
      {
        id: "v3-p4-t3-q80",
        text: "Where does the speaker work?",
        classification: "WHO_LOC",

        options: {
          A: "At an architecture firm",
          B: "At an accounting firm",
          C: "At a roofing company",
          D: "At an auto repair shop"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t3-q81",
        text: "Why does the speaker say, \"an official estimate includes parts and labor\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To compare her company to another one",
          B: "To correct a colleague's mistake",
          C: "To complain about an expense",
          D: "To ask for help with a project"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t3-q82",
        text: "What does the speaker offer to do this afternoon?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Visit the listener's home",
          B: "Update the listener's contact information",
          C: "Consult a financial advisor",
          D: "Post a job announcement"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hello, this is Anna Messina from Messina Roofing, and I'm calling about the new roof for your house that you're remodeling. I've learned that when our representative, John, visited you last week, he only talked to you about the cost of the shingles and other materials. But an official estimate includes parts and labor. It's important that we discuss this soon. I'll be in your area this afternoon and could stop by if that's convenient for you. Please let me know when you have a chance."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s5",
    questionRange: "83-85",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_83-85.mp3",
    questions: [
      {
        id: "v3-p4-t3-q83",
        text: "What is the broadcast about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Financing your company",
          B: "Using social media",
          C: "Recruiting staff",
          D: "Getting a business license"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t3-q84",
        text: "What will the speaker help the listeners with today?",
        classification: "DETAIL",

        options: {
          A: "Choosing a service",
          B: "Lowering costs",
          C: "Analyzing feedback",
          D: "Setting goals"
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t3-q85",
        text: "What will most likely happen next?",
        classification: "ACTION_NEXT",

        options: {
          A: "The speaker will conduct an interview.",
          B: "The speaker will give a weather update.",
          C: "An advertisement will play.",
          D: "A contest winner will be announced."
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Good evening, and welcome to the program. Today we're discussing using social media to promote your business. As you know, there are many challenges in this area. In fact, setting goals for your company's use of social media is one of the most difficult, so that's what I'm going to help you with today. I'll show you how creating goals based on your company's specific clientele will make it easier to adjust your social media presence. So, how do you do this? Joining me now in the studio is Li Zhao, the founder of the company Spacetime Services. I'll be speaking with Li about how she approached this task."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s6",
    questionRange: "86-88",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_86-88.mp3",
    questions: [
      {
        id: "v3-p4-t3-q86",
        text: "Who most likely are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Potential investors",
          B: "Marketing specialists",
          C: "Quality control inspectors",
          D: "Product designers"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t3-q87",
        text: "According to the speaker, what is the company going to change?",
        classification: "DETAIL",

        options: {
          A: "The material it uses",
          B: "The financing it makes available",
          C: "The maintenance schedule for its equipment",
          D: "The publisher for its catalog"
        },
        correctAnswer: "A"
      },
      {
        id: "v3-p4-t3-q88",
        text: "Why does the speaker say, \"but I use these products\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To reject an offer",
          B: "To correct an advertisement",
          C: "To provide reassurance",
          D: "To explain a decision"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hi, everyone. I've got some big news. Our company has decided to move in an interesting direction, and it's going to affect us here in the marketing department. As you know, we've had great success getting stores to carry our line of fine cotton bedding, such as sheets and blankets. Now the company has decided to switch to using bamboo cloth for these products. The fabric is soft and durable and also environmentally sustainable. Our job, of course, is to maintain and expand our markets for this new bedding. Now, you may be worried that customers won't be happy with this change, but I use these products. Let's look at some samples now."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s7",
    questionRange: "89-91",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_89-91.mp3",
    questions: [
      {
        id: "v3-p4-t3-q89",
        text: "Where is the talk taking place?",
        classification: "WHO_LOC",

        options: {
          A: "At an awards ceremony",
          B: "At an exhibit opening",
          C: "At a club meeting",
          D: "At a national park tour"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t3-q90",
        text: "What did Kentaro Nakamura recently do?",
        classification: "DETAIL",

        options: {
          A: "He published a book.",
          B: "He started a conservation society.",
          C: "He won a photography contest.",
          D: "He conducted a research project."
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t3-q91",
        text: "What are the listeners invited to do after the event?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Enjoy some refreshments",
          B: "Sign up to volunteer",
          C: "Purchase some souvenirs",
          D: "Take some maps"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thanks for coming to this month's meeting of the Emery Bird Watching Club. I'm very excited to welcome our guest speaker, author Kentaro Nakamura. He recently led a project in the Canadian wilderness where he spent six months researching bird migration patterns. In his lecture tonight, he'll talk about the dangers of light pollution to migrating birds and what we can do to help. After the presentation, please join us in the library for some drinks and treats."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s8",
    questionRange: "92-94",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_92-94.mp3",
    questions: [
      {
        id: "v3-p4-t3-q92",
        text: "What type of work do the listeners most likely do?",
        classification: "DETAIL",

        options: {
          A: "Architectural planning",
          B: "Software design",
          C: "Therapy",
          D: "Sales"
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t3-q93",
        text: "What does the speaker thank the listeners for?",
        classification: "DETAIL",

        options: {
          A: "Finalizing a business contract",
          B: "Preparing a presentation",
          C: "Sharing some ideas",
          D: "Meeting with some clients"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t3-q94",
        text: "Why does the speaker say, \"we have a limited number of computers available\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To warn the listeners about a maintenance issue",
          B: "To encourage the listeners to sign up quickly",
          C: "To suggest that the listeners buy a device",
          D: "To remind the listeners about budget cuts"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "I'm glad to see everyone here for today's monthly team meeting. I'm quite impressed with the number of sales this team has finalized this month. Everyone met their quota—so congratulations! I read through your responses to the online questionnaire I posted. Thanks for sharing your ideas about professional development. Many people suggested improving our ability to create more-attractive slide presentations. I agree this'll be useful when you meet with prospective clients, so I'd like to accommodate that request with an on-site training. A sign-up sheet has been posted in the employee break room. Just a heads-up that we have a limited number of computers available."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s9",
    questionRange: "95-97",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_95-97.mp3",
    image: "/images/ETS_TOEIC_3/Test_03/Part_04/p4_q95.png",
    questions: [
      {
        id: "v3-p4-t3-q95",
        text: "What will take place this Friday?",
        classification: "DETAIL",

        options: {
          A: "An industry award ceremony",
          B: "A fund-raising dinner",
          C: "A company anniversary event",
          D: "A holiday celebration"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t3-q96",
        text: "Look at the graphic. Where does the speaker want some audio equipment?",
        classification: "GRAPHIC",

        options: {
          A: "Next to table 1",
          B: "Next to table 2",
          C: "Next to table 3",
          D: "Next to table 4"
        },
        correctAnswer: "A"
      },
      {
        id: "v3-p4-t3-q97",
        text: "What has the speaker shipped to the hotel?",
        classification: "DETAIL",

        options: {
          A: "Some tablecloths",
          B: "Some vases",
          C: "Some aprons",
          D: "Some glasses"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hello. This is Megumi from Fellmetric Limited. I'm calling about our company's anniversary dinner scheduled for this Friday at your hotel. We need audio equipment set up for the event host. Looking at the dining room layout, I think it's best to set it up next to the table by the window that is farthest away from the buffet. One last thing—I've shipped a box of our company's branded vases to the hotel. There should be enough for all the flower arrangements. Thanks."
      }
    ]
  },
  {
    testId: 3,
    vol: 3,
    setId: "v3-p4-t3-s10",
    questionRange: "98-100",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_98-100.mp3",
    image: "/images/ETS_TOEIC_3/Test_03/Part_04/p4_q98.png",
    questions: [
      {
        id: "v3-p4-t3-q98",
        text: "Who most likely are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Event planners",
          B: "Fashion designers",
          C: "Sales analysts",
          D: "Store managers"
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t3-q99",
        text: "Look at the graphic. Which topic does the speaker start the workshop with?",
        classification: "GRAPHIC",

        options: {
          A: "Topic 1",
          B: "Topic 2",
          C: "Topic 3",
          D: "Topic 4"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t3-q100",
        text: "What does the speaker say the listeners will do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Introduce themselves",
          B: "Discuss some pictures",
          C: "Practice doing interviews",
          D: "Try out some software"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Here are the topics we're going to cover in today's workshop on effective store management. I know interviewing is listed first on your agenda, but let's start with something more fun—setting up displays at your clothing stores. Displays are important because they have the biggest impact on how your store looks during business hours. From signage to lighting, there are many factors to consider. I'm going to show some photographs of displays, and let's see if we can identify which are the most effective, and why."
      }
    ]
  }
];

