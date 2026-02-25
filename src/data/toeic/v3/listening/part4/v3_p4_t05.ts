import { Part4Set } from './types';

export const test5Data: Part4Set[] = [
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s1",
    questionRange: "71-73",
    contextType: "A2 (advertisement)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_71-73.mp3",
    questions: [
      {
        id: "v3-p4-t5-q71",
        text: "What is most likely being advertised?",
        classification: "DETAIL",

        options: {
          A: "A convention center",
          B: "A restaurant",
          C: "A supermarket",
          D: "A shipping company"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t5-q72",
        text: "What is the business famous for?",
        classification: "DETAIL",

        options: {
          A: "Its prices",
          B: "Its location",
          C: "Its history",
          D: "Its staff"
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t5-q73",
        text: "What does the speaker say is on a Web site?",
        classification: "DETAIL",

        options: {
          A: "Some catering options",
          B: "Some driving directions",
          C: "Current discounts",
          D: "Business hours"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Are you looking for a location to host your next company event? Well, look no further than Mirelli's. With our delicious food and private dining rooms, Mirelli's is the perfect place for everything from small to large business gatherings. But that's not the only reason to choose Mirelli's. We're famous for our friendly waitstaff. They are always ready to help! Planning to hold an event with food at your office? No problem—we'll bring the food to you. You can view our catering packages on our Web site."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s2",
    questionRange: "74-76",
    contextType: "B1 (internal_meeting)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_74-76.mp3",
    questions: [
      {
        id: "v3-p4-t5-q74",
        text: "Who most likely are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Product developers",
          B: "Investment bankers",
          C: "Book publishers",
          D: "Building contractors"
        },
        correctAnswer: "A"
      },
      {
        id: "v3-p4-t5-q75",
        text: "What does the speaker say is favorable about a contract?",
        classification: "DETAIL",

        options: {
          A: "There is 24-hour service call availability.",
          B: "There is an extended warranty.",
          C: "There is an immediate payment.",
          D: "There is a low interest rate."
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q76",
        text: "What does the speaker imply when he says, \"I'll send you the document later\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "He is having computer problems.",
          B: "He wants the listeners' opinions.",
          C: "He has missed a deadline.",
          D: "He is almost finished with some work."
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "I have an update about the video game you've been working hard to develop. As you know, we'll be partnering with a video game publishing company to get our product on the market. I just received their initial contract. And I'm pleased to say, the terms they are proposing are quite favorable—we're promised a payment as soon as we sign on. Our legal team wants to make sure the programmers are happy before they negotiate some other provisions in the contract. I'll send you the document later."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s3",
    questionRange: "77-79",
    contextType: "G1 (tour_introduction)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_77-79.mp3",
    questions: [
      {
        id: "v3-p4-t5-q77",
        text: "Where is the tour taking place?",
        classification: "WHO_LOC",

        options: {
          A: "At an art gallery",
          B: "At a construction site",
          C: "At a solar-panel factory",
          D: "At a car-part warehouse"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q78",
        text: "What does the speaker remind the listeners to do?",
        classification: "DETAIL",

        options: {
          A: "Wear protective hats",
          B: "Follow posted signs",
          C: "Stay together as a group",
          D: "Store personal belongings"
        },
        correctAnswer: "A"
      },
      {
        id: "v3-p4-t5-q79",
        text: "What will the listeners see first on the tour?",
        classification: "DETAIL",

        options: {
          A: "A map of the grounds",
          B: "An informational video",
          C: "Some product models",
          D: "Some historic photographs"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thank you for joining me on this tour of our solar panel manufacturing plant. Here at Nature's Solar Energy, Incorporated, we believe our customers should have the chance to see the production of the solar panels that power their homes and businesses. Before we begin, I want to remind you about our main safety rule. Make sure you wear the hard hats we provided and keep them on at all times. OK, our first stop will be in the showroom. I'll show you the latest models of our solar panels so you understand exactly how they work."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s4",
    questionRange: "80-82",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_80-82.mp3",
    questions: [
      {
        id: "v3-p4-t5-q80",
        text: "What is the focus of the episode?",
        classification: "DETAIL",

        options: {
          A: "Improving training programs",
          B: "Changing careers",
          C: "Designing Web sites",
          D: "Increasing sales"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t5-q81",
        text: "What does the speaker say is important?",
        classification: "DETAIL",

        options: {
          A: "Complying with industry regulations",
          B: "Emphasizing transferable skills",
          C: "Offering promotional discounts",
          D: "Attending networking events"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t5-q82",
        text: "Who is So-Hee Chung?",
        classification: "WHO_LOC",

        options: {
          A: "A company executive",
          B: "A government official",
          C: "A news reporter",
          D: "A financial analyst"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thanks for tuning in to Business World! On today's episode, we'll be taking a deep dive into the topic of making a career change. Transitioning to a new industry can be challenging. It's important to highlight any transferable skills you have to offer. What abilities do you currently possess that could be useful in a new role, and how can you promote them on professional networking sites? To help us explore this, So-Hee Chung, chief executive officer of the popular job search app, Zantage, is joining us in the studio today. Welcome, So-Hee."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s5",
    questionRange: "83-85",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_83-85.mp3",
    questions: [
      {
        id: "v3-p4-t5-q83",
        text: "What is the message mainly about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Scheduling auditions",
          B: "Purchasing tickets",
          C: "Designing a set",
          D: "Revising a script"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q84",
        text: "Why does the speaker say, \"we have a large team\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To make a complaint",
          B: "To provide reassurance",
          C: "To express surprise",
          D: "To refuse an offer"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t5-q85",
        text: "Why is the speaker unable to meet tomorrow?",
        classification: "WHY_REASON",

        options: {
          A: "Her car needs repairs.",
          B: "She is moving to a new apartment.",
          C: "She is going hiking.",
          D: "She is visiting family."
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hello, this is Adriana Ortiz, set designer from the Summer Theater. We met last week. Since you're directing the new play we're featuring, I'd like to get together to discuss some ideas I have. I've read the script and started sketching possible backgrounds we could use. You mentioned being concerned about the short amount of time we have for creating a set. Well, we have a large team. And there are lots of props in storage. I'm going out of town to see some relatives tomorrow, but if you're free to meet this weekend, my schedule's flexible then."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s6",
    questionRange: "86-88",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_86-88.mp3",
    questions: [
      {
        id: "v3-p4-t5-q86",
        text: "Who most likely are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Board members",
          B: "Government officials",
          C: "Clients",
          D: "Interns"
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t5-q87",
        text: "What did the listeners receive?",
        classification: "DETAIL",

        options: {
          A: "An event ticket",
          B: "An information packet",
          C: "A project invoice",
          D: "An annual report"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t5-q88",
        text: "According to the speaker, what will the listeners do in an hour?",
        classification: "DETAIL",

        options: {
          A: "Have lunch",
          B: "Join a conference call",
          C: "Get security badges",
          D: "Take a building tour"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Welcome to Cornerway Industries. I'm Sunita Yadav, Coordinator of the Internship Program. I'm sure you'll find your summer experience here rewarding! Before we begin the first training session, we have to take care of some administrative matters. As you entered the room, you received a packet of documents. It includes information about logging into your e-mail and submitting time sheets. I'll briefly go over those procedures now. Then, in an hour, you'll head to the security office to get identification badges. You'll need those to enter and exit the building."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s7",
    questionRange: "89-91",
    contextType: "B1 (internal_meeting)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_89-91.mp3",
    questions: [
      {
        id: "v3-p4-t5-q89",
        text: "What did the speaker do last month?",
        classification: "DETAIL",

        options: {
          A: "She relocated to another building.",
          B: "She hired additional employees.",
          C: "She organized a luncheon.",
          D: "She attended a conference."
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t5-q90",
        text: "What do some customers have trouble locating?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "Delivery schedules",
          B: "Password requirements",
          C: "Contact information",
          D: "Account archives"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q91",
        text: "What will the speaker do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Give a demonstration",
          B: "Introduce a guest",
          C: "Distribute some documents",
          D: "Hand out some awards"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Last month, I went to a conference that allowed me the opportunity to meet other small business owners from the region and have discussions with them. A number of helpful ideas were exchanged. For example, several speakers pointed out that it can be difficult for customers to navigate corporate Web sites, especially when looking for information like a phone number they can call when they need service. I've asked the IT department to redesign our Web site to make it more navigable. If you'll look up here, I'll demonstrate the new layout that'll go live in a few weeks."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s8",
    questionRange: "92-94",
    contextType: "E2 (public_speech)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_92-94.mp3",
    questions: [
      {
        id: "v3-p4-t5-q92",
        text: "Who is the speaker?",
        classification: "WHO_LOC",

        options: {
          A: "A real-estate developer",
          B: "A city official",
          C: "A history professor",
          D: "A television reporter"
        },
        correctAnswer: "B"
      },
      {
        id: "v3-p4-t5-q93",
        text: "What happened last year in Madison?",
        classification: "DETAIL",

        options: {
          A: "An international hotel convention was held.",
          B: "A national sports event was hosted.",
          C: "A documentary movie was filmed.",
          D: "A historic landmark was named."
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q94",
        text: "Why does the speaker say, \"Those roads weren't designed for traffic\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To make a complaint",
          B: "To show surprise",
          C: "To express concern",
          D: "To offer an apology"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thank you all for coming to this town hall meeting. I'm the mayor of Madison, and the first topic on our agenda is tourism. We're all very excited that the documentary about our historic town center, which was filmed here last year, is a box office success! My office has already received hundreds of inquiries from travel agencies around the world asking about hotel capacity and tour buses—good news for local businesses. However, some people are wondering about the damage that the influx of tourists on their streets may cause. And they do have a point. Those roads weren't designed for traffic."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s9",
    questionRange: "95-97",
    contextType: "A1 (announcement)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_95-97.mp3",
    image: "/images/ETS_TOEIC_3/Test_05/Part_04/p4_q95.png",
    questions: [
      {
        id: "v3-p4-t5-q95",
        text: "According to the speaker, what will happen this Friday?",
        classification: "DETAIL",

        options: {
          A: "A delivery will arrive.",
          B: "A holiday sale will begin.",
          C: "An employee will retire.",
          D: "An author will visit."
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t5-q96",
        text: "Look at the graphic. Which aisle does the speaker direct the listeners to?",
        classification: "GRAPHIC",

        options: {
          A: "Aisle 1",
          B: "Aisle 2",
          C: "Aisle 3",
          D: "Aisle 4"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q97",
        text: "What can the listeners win?",
        classification: "DETAIL",

        options: {
          A: "A gift card",
          B: "A book",
          C: "A free membership",
          D: "A calendar"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Attention, book lovers! The Regal Reader bookstore is excited to announce the beginning of its summer author series. Join us this Friday when renowned author Karima Samir will visit the store to read from her books, sign copies, and chat with customers. Stop by our history aisle to find her latest book about fascinating North Africa. And make sure you enter our annual drawing while you're here to win a five-dollar gift card for our café! Use it to purchase any of our freshly brewed coffees or homemade pastries."
      }
    ]
  },
  {
    testId: 5,
    vol: 3,
    setId: "v3-p4-t5-s10",
    questionRange: "98-100",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_98-100.mp3",
    image: "/images/ETS_TOEIC_3/Test_05/Part_04/p4_q98.png",
    questions: [
      {
        id: "v3-p4-t5-q98",
        text: "Where does the speaker most likely work?",
        classification: "WHO_LOC",

        options: {
          A: "At a boat dock",
          B: "At an auto repair shop",
          C: "At a warehouse",
          D: "At a job training school"
        },
        correctAnswer: "C"
      },
      {
        id: "v3-p4-t5-q99",
        text: "What will the speaker's department be doing at the end of the month?",
        classification: "DETAIL",

        options: {
          A: "Fixing some equipment",
          B: "Attending a trade show",
          C: "Interviewing job candidates",
          D: "Preparing a large order"
        },
        correctAnswer: "D"
      },
      {
        id: "v3-p4-t5-q100",
        text: "Look at the graphic. Which session does the man request to attend?",
        classification: "GRAPHIC",

        options: {
          A: "January 14",
          B: "January 23",
          C: "January 26",
          D: "January 31"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hello Ms. Kapoor. My name's Mark Giordano. I'm a forklift operator in the Shipping Department. I'm calling because I'm supposed to complete the training session on refueling equipment, but I need to change my date. I signed up for the session on January twenty-third, but our department just received notice that a large order will ship out at the end of the month. I'll have a lot of work to do earlier in the day all month, so I can only attend the session that starts at three P.M. Could you reschedule me? Please let me know."
      }
    ]
  }
];

