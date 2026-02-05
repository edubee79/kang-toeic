
export interface Part4Question {
  id: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
  classification?: string;
}

export interface Part4Set {
  testId: number;
  setId: string;
  questionRange: string;
  audio: string;
  image?: string;
  questions: Part4Question[];
  script?: { speaker: string; text: string }[] | string;
  contextType?: string;
}

export const part4Data: Part4Set[] = [
  {
    testId: 1,
    setId: "p4-t1-s1",
    questionRange: "71-73",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_71-73.mp3",
    questions: [
      {
        id: "p4-t1-q71",
        text: "What kind of business is the speaker most likely calling?",
        classification: "DETAIL",

        options: {
          A: "A hair salon",
          B: "An insurance company",
          C: "A car dealership",
          D: "An eye doctor's office"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t1-q72",
        text: "What does the speaker say about her appointment?",
        classification: "DETAIL",

        options: {
          A: "It is too far away.",
          B: "It needs to be rescheduled.",
          C: "It is too expensive.",
          D: "It should be with a different person."
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t1-q73",
        text: "What is the speaker interested in learning more about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Payment methods",
          B: "Delivery options",
          C: "A warranty",
          D: "A job opening"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hello, this is Karen Smith. I have an appointment with Dr. Miller for my annual eye exam on Tuesday. Unfortunately, I won't be able to make it. If possible, I'd like to reschedule for later in the week. If Dr. Miller is available in the afternoon, that would work better for me. I also wanted to ask about your warranty for eyeglasses. What exactly does the warranty cover? Thank you, and please call me back at 555-0110."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s2",
    questionRange: "74-76",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_74-76.mp3",
    questions: [
      {
        id: "p4-t1-q74",
        text: "What is being advertised?",
        classification: "DETAIL",

        options: {
          A: "A factory tour",
          B: "A baking competition",
          C: "A grand opening",
          D: "An art show"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q75",
        text: "What will participants receive?",
        classification: "DETAIL",

        options: {
          A: "A poster",
          B: "A promotional mug",
          C: "A company T-shirt",
          D: "A photograph"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t1-q76",
        text: "What can the listeners do on a Web site?",
        classification: "DETAIL",

        options: {
          A: "Find a recipe",
          B: "Fill out an entry form",
          C: "View a product list",
          D: "Download a coupon"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Curious about how chocolate is made? Then come visit us at Bodin's Chocolate Factory! You'll have a great time. We offer guided tours every Saturday and Sunday at our factory, located directly across from Appleton Shopping Center. During your two-hour visit, you'll observe the creation and packaging of Bodin's products. And each visitor will get their picture taken with Cheery, our adorable chocolate mascot, to take home as a souvenir. Right now, with the coupon available on our Web site, you can bring in a group of twelve or more people for half the price. Download yours today!"
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s3",
    questionRange: "77-79",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_77-79.mp3",
    questions: [
      {
        id: "p4-t1-q77",
        text: "Where does the announcement take place?",
        classification: "WHO_LOC",

        options: {
          A: "At a sports arena",
          B: "At a concert hall",
          C: "At an art museum",
          D: "At a movie theater"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t1-q78",
        text: "Why does the speaker apologize?",
        classification: "WHY_REASON",

        options: {
          A: "A presenter has been delayed.",
          B: "Some lights have gone out.",
          C: "A sound system is broken.",
          D: "A construction project is noisy."
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t1-q79",
        text: "What does the speaker offer the listeners?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "A promotional item",
          B: "A parking voucher",
          C: "Discounted snacks",
          D: "Free tickets"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Attention, everyone. Unfortunately, we've had to stop the movie. As you've probably noticed, we're having technical difficulties with the audio. I'm very sorry about this-we take our sound quality seriously and want you to know we'll have technicians here as soon as possible to resolve this issue. As you exit, please stop by the customer service desk in the lobby to pick up two free tickets for your next movie. Again, my apologies for the inconvenience."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s4",
    questionRange: "80-82",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_80-82.mp3",
    questions: [
      {
        id: "p4-t1-q80",
        text: "What event is taking place?",
        classification: "DETAIL",

        options: {
          A: "A technology conference",
          B: "A product demonstration",
          C: "A company fund-raiser",
          D: "A training workshop"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q81",
        text: "Why does the speaker say, \"And over 300 people are here\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To propose moving to a larger venue",
          B: "To indicate that some advertising was successful",
          C: "To emphasize the importance of working quickly",
          D: "To suggest more volunteers are needed"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t1-q82",
        text: "What does the speaker ask the listeners to do?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "Provide feedback",
          B: "Silence mobile phones",
          C: "Review an event program",
          D: "Enjoy some refreshments"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Welcome to Branson Tech's second annual conference on computer security. We decided to try something different to publicize the event this year. We advertised primarily through social media rather than by e-mail newsletters or on company Web sites. And over 300 people are here! The first presentations will begin in fifteen minutes. The talks will take place in different rooms throughout the building, so please be sure to check your programs for the list of topics, speakers, and locations."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s5",
    questionRange: "83-85",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_83-85.mp3",
    questions: [
      {
        id: "p4-t1-q83",
        text: "What is the purpose of the plan?",
        classification: "WHAT_WHICH",

        options: {
          A: "To support local businesses",
          B: "To promote tourism",
          C: "To decrease traffic",
          D: "To reduce government spending"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t1-q84",
        text: "Who does the speaker say will receive a discount?",
        classification: "WHO_LOC",

        options: {
          A: "Commuters",
          B: "Senior citizens",
          C: "Students",
          D: "City officials"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q85",
        text: "What will happen after three months?",
        classification: "DETAIL",

        options: {
          A: "A survey will be distributed.",
          B: "A new director will take over.",
          C: "A bus line will be added.",
          D: "A program evaluation will take place."
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Welcome, everyone. On behalf of the Department of Transportation, I'd like to announce a new experimental program to reduce traffic in Greenville. Beginning in January, there will be a ten-dollar fee for each car that enters the city. There will, however, be a lower fee for people who commute to Greenville for work. They will be asked to pay five dollars rather than ten dollars. These charges are aimed at deterring drivers from coming into this very crowded area. The program will be in effect for three months. After that, we will determine if the program has decreased traffic congestion enough to continue it permanently."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s6",
    questionRange: "86-88",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_86-88.mp3",
    questions: [
      {
        id: "p4-t1-q86",
        text: "What event is the speaker discussing?",
        classification: "WHAT_WHICH",

        options: {
          A: "A sports competition",
          B: "A music festival",
          C: "A cooking demonstration",
          D: "A historical play"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t1-q87",
        text: "Why does the speaker say, \"tickets are almost sold out\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To encourage the listeners to enter a contest",
          B: "To suggest that the listeners arrive early",
          C: "To complain that an event space is too small",
          D: "To praise the results of a marketing plan"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q88",
        text: "What will happen tomorrow morning?",
        classification: "DETAIL",

        options: {
          A: "A new venue will open.",
          B: "A prize winner will be announced.",
          C: "An interview will take place.",
          D: "A video will be filmed."
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thanks for tuning in to Music Today on Radio 49. First, a reminder that the Classical Music Festival is this weekend. Radio 49 is giving listeners a chance to win a pair of tickets by entering a contest. And tickets are almost sold out. Just go to our Web site and tell us what you enjoy most on our station, and we'll pick a winner at random. This year is the tenth anniversary of the event, which was founded by a famous classical musician, Umesh Gupta. On tomorrow morning's program, Mr. Gupta will be here for an interview about the history of the festival. Be sure to join us for that."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s7",
    questionRange: "89-91",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_89-91.mp3",
    questions: [
      {
        id: "p4-t1-q89",
        text: "What type of business does the speaker work for?",
        classification: "DETAIL",

        options: {
          A: "A computer company",
          B: "A construction firm",
          C: "A furniture manufacturer",
          D: "An office-supply distributor"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t1-q90",
        text: "What does the speaker say is an advantage of the new material?",
        classification: "DETAIL",

        options: {
          A: "It is inexpensive.",
          B: "It is durable.",
          C: "It is lightweight.",
          D: "It comes in many colors."
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q91",
        text: "What will the listeners do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Sign up for a mailing list",
          B: "Watch an instructional video",
          C: "Enter a contest",
          D: "Look at a sample"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thank you for visiting our booth here at the trade fair. We're so excited to show you our new patio furniture. You're probably familiar with our wooden outdoor tables and chairs, and we want you to know that we've expanded that line to include plastic furniture. This furniture is very durable. It can withstand any kind of weather- and it needs no maintenance. I'm going to hand out a sample of the plastic material we use. Please pass it around after you've had a chance to look at it."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s8",
    questionRange: "92-94",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_92-94.mp3",
    questions: [
      {
        id: "p4-t1-q92",
        text: "Which department does the speaker work in?",
        classification: "DETAIL",

        options: {
          A: "Product Development",
          B: "Human Resources",
          C: "Legal",
          D: "Accounting"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t1-q93",
        text: "Why does the speaker say, \"there is a position to transfer you permanently\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To recommend an employee sign up for more training",
          B: "To indicate that a project deadline will be extended",
          C: "To approve a request to transfer",
          D: "To suggest consulting with an expert"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t1-q94",
        text: "What does the speaker want to discuss with the listener?",
        classification: "DETAIL",

        options: {
          A: "Some sales results",
          B: "Some client feedback",
          C: "An office renovation",
          D: "A work schedule"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "This is Noriko, the human resources supervisor here in Albin. I'm calling about your request to transfer to our branch in Flowertown. I know your commute is difficult, and it takes you over an hour to drive to this office. So I've contacted the manager at that location, and there is a position to transfer you permanently. I now have forms that you'll need to fill out, though, to complete the request. Now we need to talk about your work schedule to decide when you'll start at the new location. Please call me back."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s9",
    questionRange: "95-97",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_95-97.mp3",
    image: "/images/ETS_TOEIC_3/Test_01/Part_04/p4_q95.png",
    questions: [
      {
        id: "p4-t1-q95",
        text: "Why are guests invited on the speaker's radio show?",
        classification: "OFFER_SUGGEST",

        options: {
          A: "To discuss their businesses",
          B: "To talk about local history",
          C: "To teach communication skills",
          D: "To offer travel tips"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q96",
        text: "What can the listeners do on a Web site?",
        classification: "DETAIL",

        options: {
          A: "View photos of famous guests",
          B: "Sign up for a special service",
          C: "Read about upcoming programs",
          D: "Listen to previous episodes"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t1-q97",
        text: "Look at the graphic. Which day is this episode being aired?",
        classification: "GRAPHIC",

        options: {
          A: "Tuesday",
          B: "Wednesday",
          C: "Thursday",
          D: "Friday"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "You're listening to Making My Company with Mark Sullivan. In each episode I invite entrepreneurs from around the world to talk about how they built their successful businesses. In celebration of our radio show's ten-year anniversary, our Web site now has all of our previously aired episodes. You can access them with the click of a button. You can even download them onto mobile devices to listen to on the go! OK, now, I welcome Haru Nakamura to the show. Ms. Nakamura is excited to be here today."
      }
    ]
  },
  {
    testId: 1,
    setId: "p4-t1-s10",
    questionRange: "98-100",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_98-100.mp3",
    image: "/images/ETS_TOEIC_3/Test_01/Part_04/p4_q98.png",
    questions: [
      {
        id: "p4-t1-q98",
        text: "Look at the graphic. Where will the scarves and ties be displayed?",
        classification: "GRAPHIC",

        options: {
          A: "On Shelf 1",
          B: "On Shelf 2",
          C: "On Shelf 3",
          D: "On Shelf 4"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t1-q99",
        text: "What should be displayed near the cash registers?",
        classification: "DETAIL",

        options: {
          A: "Coupons",
          B: "Hats",
          C: "Gloves",
          D: "Socks"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t1-q100",
        text: "What should the listener expect to receive in an e-mail?",
        classification: "DETAIL",

        options: {
          A: "A payment schedule",
          B: "Photographs",
          C: "Shipping information",
          D: "Display measurements"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "It's Akira, calling from the district manager's office. The visual merchandising team wants to make a slight change to the fall display standards that we sent you yesterday. They want to move the shirts with the vertical stripes-hang them instead of having them displayed on the shelf. We'll display some colorful accessories there instead, like scarves and ties. Also, hang all the socks on gridwall panels by the cash registers. Those sell best when people can grab them when they walk up to pay. The thicker, cold-weather socks will be shipped to you soon. You'll get an e-mail confirmation with the details when they're sent."
      }
    ]
  }
  ,
  {
    testId: 2,
    setId: "p4-t2-s1",
    questionRange: "71-73",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_71-73.mp3",
    image: "/images/ETS_TOEIC_3/Test_02/Part_04/p4_q71.png",
    questions: [
      {
        id: "p4-t2-q71",
        text: "What did Starbright Corporation recently do?",
        classification: "DETAIL",

        options: {
          A: "It changed its company logo.",
          B: "It opened a new factory.",
          C: "It conducted a financial audit.",
          D: "It upgraded a product line."
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t2-q72",
        text: "What type of product does Starbright Corporation make?",
        classification: "DETAIL",

        options: {
          A: "Footwear",
          B: "Cosmetics",
          C: "Housewares",
          D: "Electronics"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t2-q73",
        text: "What is available online?",
        classification: "DETAIL",

        options: {
          A: "An application",
          B: "A schedule",
          C: "A video interview",
          D: "A virtual tour"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "You're listening to radio station WKXL. Turning to local business updates, Monday marked the grand opening of Starbright Corporation's new factory. Starbright Corporation is a leading manufacturer of boots, athletic shoes, and sandals. So far, the new factory has created 800 jobs in our community, with positions ranging from assembly line workers to department managers. To hear more about the company, please visit our radio station's Web site, where my video interview with Starbright's president has been posted."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s2",
    questionRange: "74-76",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_74-76.mp3",
    image: "/images/ETS_TOEIC_3/Test_02/Part_04/p4_q74.png",
    questions: [
      {
        id: "p4-t2-q74",
        text: "What event is taking place?",
        classification: "DETAIL",

        options: {
          A: "An orientation session",
          B: "A gallery opening",
          C: "An awards ceremony",
          D: "A retirement party"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q75",
        text: "What type of business does Mustafa Perez work for?",
        classification: "DETAIL",

        options: {
          A: "An advertising agency",
          B: "An art gallery",
          C: "A newspaper publisher",
          D: "A camera shop"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t2-q76",
        text: "What has the speaker created for the event?",
        classification: "DETAIL",

        options: {
          A: "A slideshow",
          B: "A T-shirt design",
          C: "A Web site",
          D: "A brochure"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Thank you all for coming to this celebration. I know I speak for everyone here at the newspaper when I say that I'm sad to see Mustafa Perez retire next week. For the past 30 years, he's been the photographer we've all relied on to capture photos that illustrate our news articles. To honor his career, I've made a slideshow of some of the most impressive photos that Mustafa has taken. Please look at the screen at the front of the room."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s3",
    questionRange: "77-79",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_77-79.mp3",
    image: "/images/ETS_TOEIC_3/Test_02/Part_04/p4_q77.png",
    questions: [
      {
        id: "p4-t2-q77",
        text: "What does the speaker's company produce?",
        classification: "DETAIL",

        options: {
          A: "Medications",
          B: "Textbooks",
          C: "Exercise clothing",
          D: "Construction materials"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t2-q78",
        text: "What are the listeners reminded to do?",
        classification: "DETAIL",

        options: {
          A: "Recruit some staff",
          B: "Enter some data",
          C: "Attend some training sessions",
          D: "Turn on a fan"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q79",
        text: "What can be found online?",
        classification: "DETAIL",

        options: {
          A: "A product database",
          B: "An employee directory",
          C: "A handbook",
          D: "A contract"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "The last point on our agenda is about maintaining a safe environment while making the medications we sell here at Tamarah Pharmaceuticals. If you're working in any of the laboratories, please make sure to turn on the room's exhaust fan. It's especially important to keep the area well ventilated when working with some of the chemicals we use in our medications. We'd like to maintain our excellent safety record, so thank you in advance. The safety procedure handbook is on our internal company Web site if you need more information."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s4",
    questionRange: "80-82",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_80-82.mp3",
    questions: [
      {
        id: "p4-t2-q80",
        text: "What will the speaker do at a park?",
        classification: "DETAIL",

        options: {
          A: "Watch a performance",
          B: "Sell fruit",
          C: "Plant trees",
          D: "Take photographs"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t2-q81",
        text: "Why does the speaker say, \"but it's supposed to be cloudy all day\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To ask for help",
          B: "To express frustration",
          C: "To reject the listener's suggestion",
          D: "To reassure the listener"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q82",
        text: "What does the speaker remind the listener to do?",
        classification: "DETAIL",

        options: {
          A: "Register for a competition",
          B: "Purchase some supplies",
          C: "Prepare a shipment",
          D: "Speak to a customer"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hi, Aisha. I'm here at the park for the farmers' market-I just set out the blueberries and strawberries that I'll be selling this morning. Everything's ready to go... Though I did accidentally forget to bring the tent that we use to shade the fruit. I know you're concerned about the fruit sitting out in the sun, but it's supposed to be cloudy all day. Anyways, the real reason I called was to remind you to register us for the annual farmers' association competition. I think we have a pretty good chance of winning the award for our strawberries."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s5",
    questionRange: "83-85",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_83-85.mp3",
    questions: [
      {
        id: "p4-t2-q83",
        text: "Where is the announcement being made?",
        classification: "WHO_LOC",

        options: {
          A: "At a technology firm",
          B: "At a repair shop",
          C: "At a factory",
          D: "At a law office"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t2-q84",
        text: "Where should the listeners go at the end of their shifts?",
        classification: "WHO_LOC",

        options: {
          A: "To the company cafeteria",
          B: "To the receptionist's desk",
          C: "To the locker room",
          D: "To the parking area"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t2-q85",
        text: "What will happen tomorrow?",
        classification: "DETAIL",

        options: {
          A: "Some office furniture will be delivered.",
          B: "New board members will be elected.",
          C: "A city official will conduct an inspection.",
          D: "Some time-reporting software will be fixed."
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Attention, Home Furniture factory employees. The software program we use for clocking in and out isn't working. This means you cannot enter your hours electronically. Instead, when your shift's over, please write your start and end time on the form that's on the receptionist's desk. The form already includes your name and the machine you operate. I know this is a hassle, but it's only temporary-the time-reporting software will be working when you get to the factory tomorrow morning."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s6",
    questionRange: "86-88",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_86-88.mp3",
    questions: [
      {
        id: "p4-t2-q86",
        text: "Where do the listeners work?",
        classification: "WHO_LOC",

        options: {
          A: "At an employment agency",
          B: "At a sports arena",
          C: "At a conference center",
          D: "At a medical clinic"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q87",
        text: "What does the speaker imply when she says, \"Ms. Jenkins has retired\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "A role needs to be filled.",
          B: "An e-mail will not be answered.",
          C: "A marketing strategy should be revised.",
          D: "A process will be less efficient."
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t2-q88",
        text: "What will the listeners most likely do next?",
        classification: "ACTION_NEXT",

        options: {
          A: "Check a schedule",
          B: "Complete a registration form",
          C: "Eat a meal",
          D: "Brainstorm some ideas"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "The final item on our agenda is the annual community health fair. As in previous years, our clinic will have a booth at the fair, where one of our nurses will be available to answer questions and give presentations about maintaining a healthy lifestyle. In the past, Mary Jenkins has always managed our booth, but, as you may know, Ms. Jenkins has retired. I want to tell you that working at the fair is a great way to give back to the community, so feel free to get in touch with me. OK, let's end there. As promised, I brought in soup and sandwiches for everyone-the food's in the break room."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s7",
    questionRange: "89-91",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_89-91.mp3",
    questions: [
      {
        id: "p4-t2-q89",
        text: "What is scheduled for Friday?",
        classification: "DETAIL",

        options: {
          A: "A job fair",
          B: "A wellness workshop",
          C: "A client meeting",
          D: "An employee luncheon"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t2-q90",
        text: "Why does the speaker say, \"the advertising business is very competitive\"?",
        classification: "IMPLY_MEANING",

        options: {
          A: "To explain a decision to retire",
          B: "To justify an employee's promotion",
          C: "To question the listener's abilities",
          D: "To express confidence in an approach"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q91",
        text: "What does the speaker say about Isabel?",
        classification: "DETAIL",

        options: {
          A: "She has recently joined the company.",
          B: "She can recommend some activities.",
          C: "She will approve expense reports.",
          D: "She used to work on the NVC Industries account."
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Good morning, Martina. I'm calling about our biggest client, NVC Industries. A couple things... First, thank you for sending me your slides for the advertising pitch you'll be delivering to them at the meeting on Friday. I know you expressed some hesitation about your particular approach... you have concerns that it might be a bit too bold. Well, always remember that the advertising business is very competitive. Second, Isabel can make some recommendations about what to do while you're in Barcelona for the meeting with NVC Industries. Make sure you see her before you travel there."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s8",
    questionRange: "92-94",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_92-94.mp3",
    questions: [
      {
        id: "p4-t2-q92",
        text: "What type of business does the speaker most likely work for?",
        classification: "DETAIL",

        options: {
          A: "A television studio",
          B: "A hardware store",
          C: "A publishing company",
          D: "A grocery store"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q93",
        text: "What is the speaker concerned about?",
        classification: "PROBLEM_CONCERN",

        options: {
          A: "A business has lost customers.",
          B: "An advertising plan has not been effective.",
          C: "A stockroom is overcrowded.",
          D: "A Web site is not working."
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t2-q94",
        text: "What does the speaker plan to do?",
        classification: "ACTION_NEXT",

        options: {
          A: "Transfer to another location",
          B: "Offer discounts online",
          C: "Hire more employees",
          D: "Add videos to a Web site"
        },
        correctAnswer: "D"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hi, everyone. Now, our goal has been to encourage our customers to try out the line of health drinks and energy bars we've recently started stocking at our store locations. And to do this, we've been sending out weekly newsletters by e-mail to our customers. Unfortunately, our analytics show that only ten percent of those e-mails are even opened. So, I'd like to try another strategy. I'd like to put together a team to create some videos about our groceries, and we can pick a few to post to our Web site. Maybe some with testimonials from satisfied customers? Anyway, please send me an e-mail if you're interested in helping with this project."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s9",
    questionRange: "95-97",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_95-97.mp3",
    questions: [
      {
        id: "p4-t2-q95",
        text: "Who most likely is the speaker?",
        classification: "WHO_LOC",

        options: {
          A: "A car salesperson",
          B: "An auto mechanic",
          C: "A car rental agent",
          D: "A vehicle inspector"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t2-q96",
        text: "Look at the graphic. Which fee must be paid in cash?",
        classification: "GRAPHIC",

        options: {
          A: "Filing",
          B: "Contract processing",
          C: "Vehicle title",
          D: "Vehicle registration"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q97",
        text: "What service does the speaker remind the listener about?",
        classification: "WHAT_WHICH",

        options: {
          A: "Shuttle service",
          B: "Maintenance reminders",
          C: "Free car washes",
          D: "Replacement keys"
        },
        correctAnswer: "C"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "Hello, Mr. Harris. This is Nadia calling. I've been getting the paperwork ready for the vehicle you're purchasing from us. When you come over to the dealership to pick up your car, you'll need to pay several fees. Please remember that the one hundred dollar fee must be paid in cash. The other fees can be paid with your credit card. The car title will take a few days to process, and then will be mailed to your home address. And don't forget to take advantage of our free monthly car wash-just use the service code provided on your contract."
      }
    ]
  },
  {
    testId: 2,
    setId: "p4-t2-s10",
    questionRange: "98-100",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_98-100.mp3",
    questions: [
      {
        id: "p4-t2-q98",
        text: "Who most likely is the speaker?",
        classification: "WHO_LOC",

        options: {
          A: "A jazz singer",
          B: "A music teacher",
          C: "A shop manager",
          D: "A radio host"
        },
        correctAnswer: "C"
      },
      {
        id: "p4-t2-q99",
        text: "What event will take place in September?",
        classification: "DETAIL",

        options: {
          A: "A music festival",
          B: "A press conference",
          C: "A charity dinner",
          D: "A talent contest"
        },
        correctAnswer: "D"
      },
      {
        id: "p4-t2-q100",
        text: "Look at the graphic. Which type of instrument does the speaker focus on?",
        classification: "GRAPHIC",

        options: {
          A: "Keyboards",
          B: "Pianos",
          C: "Drums",
          D: "Guitars"
        },
        correctAnswer: "B"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "At this staff meeting, I'd like to talk about some changes we'll be implementing here at Helgen's Music Shop. First, to attract more customers, we're going to host a small talent contest in September. I've recruited several local musicians to be the judges. Second, take a look at this chart from our annual sales report. Now, I'm not worried about the drums. But look at this instrument-we only sell twenty of them per year. That isn't very many, and they take a lot of time and effort to maintain. So, after careful consideration, I've decided we're going to stop selling them."
      }
    ]
  }
  ,
  {
    testId: 3,
    setId: "p4-t3-s1",
    questionRange: "71-73",
    contextType: "A1 (announcement_general)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_71-73.mp3",
    questions: [
      {
        id: "p4-t3-q71",
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
        id: "p4-t3-q72",
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
        id: "p4-t3-q73",
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
    setId: "p4-t3-s2",
    questionRange: "74-76",
    contextType: "A1 (announcement_general)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_74-76.mp3",
    questions: [
      {
        id: "p4-t3-q74",
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
        id: "p4-t3-q75",
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
        id: "p4-t3-q76",
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
    setId: "p4-t3-s3",
    questionRange: "77-79",
    contextType: "A1 (announcement_general)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_77-79.mp3",
    questions: [
      {
        id: "p4-t3-q77",
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
        id: "p4-t3-q78",
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
        id: "p4-t3-q79",
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
    setId: "p4-t3-s4",
    questionRange: "80-82",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_80-82.mp3",
    questions: [
      {
        id: "p4-t3-q80",
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
        id: "p4-t3-q81",
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
        id: "p4-t3-q82",
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
    setId: "p4-t3-s5",
    questionRange: "83-85",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_83-85.mp3",
    questions: [
      {
        id: "p4-t3-q83",
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
        id: "p4-t3-q84",
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
        id: "p4-t3-q85",
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
    setId: "p4-t3-s6",
    questionRange: "86-88",
    contextType: "B2 (company_management_message)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_86-88.mp3",
    questions: [
      {
        id: "p4-t3-q86",
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
        id: "p4-t3-q87",
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
        id: "p4-t3-q88",
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
    setId: "p4-t3-s7",
    questionRange: "89-91",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_89-91.mp3",
    questions: [
      {
        id: "p4-t3-q89",
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
        id: "p4-t3-q90",
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
        id: "p4-t3-q91",
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
    setId: "p4-t3-s8",
    questionRange: "92-94",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_92-94.mp3",
    questions: [
      {
        id: "p4-t3-q92",
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
        id: "p4-t3-q93",
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
        id: "p4-t3-q94",
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
    setId: "p4-t3-s9",
    questionRange: "95-97",
    contextType: "F1 (event_information)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_95-97.mp3",
    questions: [
      {
        id: "p4-t3-q95",
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
        id: "p4-t3-q96",
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
        id: "p4-t3-q97",
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
    setId: "p4-t3-s10",
    questionRange: "98-100",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_98-100.mp3",
    questions: [
      {
        id: "p4-t3-q98",
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
        id: "p4-t3-q99",
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
        id: "p4-t3-q100",
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
  ,
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
    questions: [
      {
        id: "p4-t4-q98",
        text: "Who are the listeners?",
        classification: "WHO_LOC",

        options: {
          A: "Park board members",
          B: "City officials",
          C: "Research scientists",
          D: "Commercial developers"
        },
        correctAnswer: "B"
      },
      {
        id: "p4-t4-q99",
        text: "Look at the graphic. What does the speaker discuss?",
        classification: "GRAPHIC",

        options: {
          A: "Building 1",
          B: "Building 2",
          C: "Building 3",
          D: "Building 4"
        },
        correctAnswer: "A"
      },
      {
        id: "p4-t4-q100",
        text: "What will the speaker give to the listeners?",
        classification: "DETAIL",

        options: {
          A: "A budget",
          B: "A schedule",
          C: "An invoice",
          D: "A contract"
        },
        correctAnswer: "A"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Am: Hi, I'm Pearl Darcus, lead architect for the city's new park project. I'm happy to know that the mayor's office has approved the plans. But there have been some changes. Originally we were going to build a cafe next to the parking lot. But we've since found a new site that offers a better view of the river. Now, if you look at the map, you can see where the playground is. We're going to put the cafe in the building directly across from the playground. I know this change will cost more money, so I've created a breakdown of the expenses for you to review."
      }
    ]
  },
  {
    testId: 5,
    setId: "p4-t5-s1",
    questionRange: "71-73",
    contextType: "A2 (advertisement)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_71-73.mp3",
    questions: [
      {
        id: "p4-t5-q71",
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
        id: "p4-t5-q72",
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
        id: "p4-t5-q73",
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
    setId: "p4-t5-s2",
    questionRange: "74-76",
    contextType: "B1 (internal_meeting)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_74-76.mp3",
    questions: [
      {
        id: "p4-t5-q74",
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
        id: "p4-t5-q75",
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
        id: "p4-t5-q76",
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
    setId: "p4-t5-s3",
    questionRange: "77-79",
    contextType: "G1 (tour_introduction)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_77-79.mp3",
    questions: [
      {
        id: "p4-t5-q77",
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
        id: "p4-t5-q78",
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
        id: "p4-t5-q79",
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
    setId: "p4-t5-s4",
    questionRange: "80-82",
    contextType: "F2 (media_broadcast)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_80-82.mp3",
    questions: [
      {
        id: "p4-t5-q80",
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
        id: "p4-t5-q81",
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
        id: "p4-t5-q82",
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
    setId: "p4-t5-s5",
    questionRange: "83-85",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_83-85.mp3",
    questions: [
      {
        id: "p4-t5-q83",
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
        id: "p4-t5-q84",
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
        id: "p4-t5-q85",
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
    setId: "p4-t5-s6",
    questionRange: "86-88",
    contextType: "B3 (company_training)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_86-88.mp3",
    questions: [
      {
        id: "p4-t5-q86",
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
        id: "p4-t5-q87",
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
        id: "p4-t5-q88",
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
    setId: "p4-t5-s7",
    questionRange: "89-91",
    contextType: "B1 (internal_meeting)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_89-91.mp3",
    questions: [
      {
        id: "p4-t5-q89",
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
        id: "p4-t5-q90",
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
        id: "p4-t5-q91",
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
    setId: "p4-t5-s8",
    questionRange: "92-94",
    contextType: "E2 (public_speech)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_92-94.mp3",
    questions: [
      {
        id: "p4-t5-q92",
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
        id: "p4-t5-q93",
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
        id: "p4-t5-q94",
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
    setId: "p4-t5-s9",
    questionRange: "95-97",
    contextType: "A1 (announcement)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_95-97.mp3",
    questions: [
      {
        id: "p4-t5-q95",
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
        id: "p4-t5-q96",
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
        id: "p4-t5-q97",
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
    setId: "p4-t5-s10",
    questionRange: "98-100",
    contextType: "D2 (voice_message)",
    audio: "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_98-100.mp3",
    questions: [
      {
        id: "p4-t5-q98",
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
        id: "p4-t5-q99",
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
        id: "p4-t5-q100",
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
  },
  {
    "testId": 6,
    "setId": "p4-t6-s1",
    "questionRange": "71-73",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "p4-t6-q71",
        "questionType": "WHY_REASON",
        "text": "Why has the Movie Night event been rescheduled?",
        "options": {
          "A": "A projector is not available.",
          "B": "A nearby road is being repaired.",
          "C": "The space is double booked.",
          "D": "The event organizer is ill."
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q72",
        "questionType": "WHEN_TIME",
        "text": "When will the event be held?",
        "options": {
          "A": "Tomorrow",
          "B": "This weekend",
          "C": "In two weeks",
          "D": "In one month"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t6-q73",
        "questionType": "HOW_METHOD",
        "text": "How can the listener request a refund?",
        "options": {
          "A": "By mailing a ticket",
          "B": "By visiting an office",
          "C": "By completing an online form",
          "D": "By making a phone call"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "Hello. This is the Chesterfield Community Center. We're calling to inform you about a change to our Movie Night event, originally planned for this Tuesday. Unfortunately, another event had been booked at the community center for the same day. As a result, Movie Night has been rescheduled for this upcoming weekend, at nine P.M. on Saturday. If you're no longer able to attend, we're happy to refund your ticket. You can request this refund by calling our office at 555-0126."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s2",
    "questionRange": "74-76",
    "contextType": "B3 (company_training)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "p4-t6-q74",
        "questionType": "WHO_LOC",
        "text": "Who most likely is the speaker?",
        "options": {
          "A": "A park ranger",
          "B": "A travel agent",
          "C": "A landscaper",
          "D": "A building inspector"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t6-q75",
        "questionType": "DETAIL",
        "text": "What are the listeners asked to check for?",
        "options": {
          "A": "Expired identification cards",
          "B": "Local construction regulations",
          "C": "Hazardous outdoor conditions",
          "D": "Sudden price increases"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q76",
        "questionType": "DETAIL",
        "text": "What does the speaker distribute?",
        "options": {
          "A": "Maps",
          "B": "Uniforms",
          "C": "Visitor passes",
          "D": "Employee handbooks"
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "Welcome to Canyon River National Park. I'm Marisol, and I'll be training you in your new role as park rangers. Each of you will be assigned one area of the park. Your duties will vary, but one task you need to complete every day is to check your assigned area for hazardous conditions. For example, if you come across any fallen branches blocking the trails or roadways, you need to report them right away. Now-before I show you the grounds, let me give you your uniforms. Please make sure that you wear them at all times on the premises."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s3",
    "questionRange": "77-79",
    "contextType": "B2 (company_management_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "p4-t6-q77",
        "questionType": "WHO_LOC",
        "text": "Who is the speaker addressing?",
        "options": {
          "A": "Potential investors",
          "B": "Tourists",
          "C": "Staff members",
          "D": "Job applicants"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q78",
        "questionType": "IMPLY_MEANING",
        "text": "Why does the speaker say, \"This is only a trial period\"?",
        "options": {
          "A": "To correct a colleague's statement",
          "B": "To apologize for a meeting conflict",
          "C": "To express surprise about a policy",
          "D": "To encourage the listeners to remain productive"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t6-q79",
        "questionType": "ACTION_NEXT",
        "text": "What will the speaker do later?",
        "options": {
          "A": "Send a document",
          "B": "Make a phone call",
          "C": "Leave for a business trip",
          "D": "Introduce some managers"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "Hi, everyone. I'm excited to announce that we're going to try out a change to our work arrangements. Staff will be able to work from home one day a week. Whenever you do work from home, you must be reachable by phone and e-mail during our business hours. Now, I know many of you have asked for this change for a long time. You should know that Human Resources will be monitoring productivity to determine whether these new work arrangements are a good idea. This is only a trial period. I'll be sending you a policy document that will explain everything in detail. Check your e-mail later today."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s4",
    "questionRange": "80-82",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "p4-t6-q80",
        "questionType": "WHY_REASON",
        "text": "According to the speaker, what is causing traffic?",
        "options": {
          "A": "Some bad weather",
          "B": "Some construction projects",
          "C": "A sporting event",
          "D": "A city festival"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q81",
        "questionType": "WHY_REASON",
        "text": "Why should the listeners call the radio station?",
        "options": {
          "A": "To ask a question",
          "B": "To request a song",
          "C": "To win some tickets",
          "D": "To sign up as a volunteer"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q82",
        "questionType": "DETAIL",
        "text": "What does the speaker say will be broadcast later?",
        "options": {
          "A": "An interview",
          "B": "A political debate",
          "C": "A comedy show",
          "D": "A concert"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Welcome to the KXS Radio afternoon update. The traffic is heavy this afternoon because of the season's opening game at the baseball stadium. But the good news is, we're giving away tickets to next week's game! Call our radio station for a chance to win. The sixth caller will win the tickets! And after today's game, we will have an exclusive interview with the coach of our city's baseball team. Stay tuned!"
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s5",
    "questionRange": "83-85",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "p4-t6-q83",
        "questionType": "TOPIC_PURPOSE",
        "text": "What is the talk mainly about?",
        "options": {
          "A": "A business opening",
          "B": "A company anniversary",
          "C": "A new advertising service",
          "D": "A renovation project"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t6-q84",
        "questionType": "IMPLY_MEANING",
        "text": "What does the speaker mean when she says, \"several local business leaders will be here tonight\"?",
        "options": {
          "A": "Extra staff is needed.",
          "B": "An event will be televised.",
          "C": "A larger venue should be reserved.",
          "D": "Employees should provide good service."
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t6-q85",
        "questionType": "ACTION_NEXT",
        "text": "What does the speaker ask some of the listeners to do?",
        "options": {
          "A": "Arrive early",
          "B": "Check a schedule",
          "C": "Hand out some surveys",
          "D": "Consult a manager about problems"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Good evening, everyone. Tonight's event is very important for our restaurant. To prepare for our official grand opening next week, we've invited people from neighboring businesses here. This is a great opportunity to get some feedback on our service and menu. Remember, several local business leaders will be here tonight. As you know, word-of-mouth recommendations are our best advertising tool. Hosts, I'd like you to distribute surveys to guests after their meals. Any feedback they have for us will help make this restaurant a success."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s6",
    "questionRange": "86-88",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "p4-t6-q86",
        "questionType": "IMPLY_MEANING",
        "text": "Why does the speaker say, \"I couldn't find a later flight\"?",
        "options": {
          "A": "To refuse an invitation",
          "B": "To apologize for an inconvenience",
          "C": "To suggest canceling a trip",
          "D": "To ask for help"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t6-q87",
        "questionType": "WHO_LOC",
        "text": "Who most likely is Adriana Lopez?",
        "options": {
          "A": "A repair technician",
          "B": "An airline pilot",
          "C": "An administrative assistant",
          "D": "A city official"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q88",
        "questionType": "ACTION_NEXT",
        "text": "What does the speaker say the listener will receive?",
        "options": {
          "A": "A client file",
          "B": "A list of restaurants",
          "C": "Some log-in credentials",
          "D": "Some promotional materials"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au Hi, Madoka. I'm calling you about some details of your trip to London next week. Your flight is on Monday morning at... uh... four A.M. I couldn't find a later flight. Adriana Lopez from the London office will meet you at the airport. She's my counterpart over there. Adriana will assist with your local itinerary and has already booked your hotel. Oh, and one last thing... since this is your first trip since joining our company, you'll soon be receiving log-in credentials for a travel expense tracking application. You can download the app on your phone and load your receipts onto it."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s7",
    "questionRange": "89-91",
    "contextType": "B3 (company_training)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "p4-t6-q89",
        "questionType": "TOPIC_PURPOSE",
        "text": "What is the topic of the seminar?",
        "options": {
          "A": "Choosing an advertising strategy",
          "B": "Finding investors",
          "C": "Leading focus groups",
          "D": "Creating a budget"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t6-q90",
        "questionType": "DETAIL",
        "text": "What does the speaker recommend the listeners do first?",
        "options": {
          "A": "Get employee input",
          "B": "Hire a consultant",
          "C": "Revise a plan",
          "D": "Make a list"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t6-q91",
        "questionType": "ACTION_NEXT",
        "text": "What will most likely happen next?",
        "options": {
          "A": "A video will be shown.",
          "B": "Information packets will be distributed.",
          "C": "Some questions will be answered.",
          "D": "There will be a lunch break."
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Welcome to this seminar, which focuses on one of the most challenging aspects of starting a new business-locating investors. Without start-up funds, your business may never get off the ground. As a first step, I suggest compiling a list of firms that specialize in investing in your industry. But there's much more to know, of course. Maryam Farooq, founder of multiple information technology companies, has been particularly good at securing investment funding. She's here to answer questions and break down how she did it."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s8",
    "questionRange": "92-94",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "p4-t6-q92",
        "questionType": "TOPIC_PURPOSE",
        "text": "What is the purpose of the meeting?",
        "options": {
          "A": "To celebrate a recent contract",
          "B": "To explain a new sales strategy",
          "C": "To introduce a new employee",
          "D": "To address employee concerns"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t6-q93",
        "questionType": "IMPLY_MEANING",
        "text": "What is causing a delay?",
        "options": {
          "A": "A computer is being set up.",
          "B": "A microphone stopped working.",
          "C": "Some additional chairs are needed.",
          "D": "The speaker misplaced some notes."
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t6-q94",
        "questionType": "ACTION_NEXT",
        "text": "What are the listeners encouraged to sign up for?",
        "options": {
          "A": "A staff feedback session",
          "B": "A conference presentation",
          "C": "A health initiative",
          "D": "A mentoring program"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Today's sales meeting is packed to capacity, and for good reason. Gerard has delivered on his promise to craft a new strategy that'll enable us to broaden our market share in the Scandinavian region. As you'll soon see, his four-step approach is going to be critical to increasing our sales. Looks like he'll need a few minutes to get his computer up and running. So while we wait, let me remind you about the mentoring program that management is implementing. It provides an opportunity to guide our new employees during their transitional period. We need seasoned staff to participate as mentors, so be sure to sign up!"
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s9",
    "questionRange": "95-97",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "p4-t6-q95",
        "questionType": "DETAIL",
        "text": "What type of event will take place on Friday?",
        "options": {
          "A": "A retirement party",
          "B": "A graduation celebration",
          "C": "A cooking competition",
          "D": "An award ceremony"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t6-q96",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which discount will be applied?",
        "options": {
          "A": "10%",
          "B": "15%",
          "C": "20%",
          "D": "25%"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t6-q97",
        "questionType": "ACTION_NEXT",
        "text": "What does the speaker ask the listener?",
        "options": {
          "A": "Who will decorate a space",
          "B": "What type of gift will be purchased",
          "C": "If an event should be rescheduled",
          "D": "If an order has been placed"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Hey, Hassan. It's Emiko. I'm calling about the retirement party we're planning for Dmitry next Friday. Everyone from the accounting department is coming plus a few from sales, so we'll have a total of ten people. I made the reservation at the barbecue restaurant and even found a coupon that'll save us a lot of money since we have such a big group. Uh... did you place the cake order with the bakery yet? Dmitry said he loves strawberry cake, and I want his retirement party to be perfect."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "p4-t6-s10",
    "questionRange": "98-100",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "p4-t6-q98",
        "questionType": "WHO_LOC",
        "text": "Look at the graphic. Who most likely is the speaker?",
        "options": {
          "A": "William Schmidt",
          "B": "Paul Cohen",
          "C": "Jung-Soo Park",
          "D": "Santiago Reyes"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t6-q99",
        "questionType": "DETAIL",
        "text": "According to the speaker, what is different about a program this year?",
        "options": {
          "A": "A list of organizations is longer.",
          "B": "A deadline has been extended.",
          "C": "More employees are assigned to help.",
          "D": "An operating budget has been increased."
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t6-q100",
        "questionType": "GRAPHIC",
        "text": "What will the speaker make available to the listeners?",
        "options": {
          "A": "A research report",
          "B": "A training video",
          "C": "A magazine article",
          "D": "A corporate calendar"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn I want to talk about our company's charitable giving program. As you know, employees can make a donation to an approved organization, and the company will match that amount. This year, we've expanded our list of approved organizations from 15 to 25. We've selected organizations in the community that will benefit the most from our contributions. And our company has been recognized for its philanthropy. In fact, it was featured last month in an article in the magazine Business Effect. I'll post a link to that on our Web site after this meeting."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s1",
    "questionRange": "71-73",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "p4-t7-q71",
        "questionType": "WHY_REASON",
        "text": "Why is the speaker calling?",
        "options": {
          "A": "To explain a schedule change",
          "B": "To discuss an upcoming conference",
          "C": "To request approval for an expense",
          "D": "To confirm an e-mail address"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t7-q72",
        "questionType": "WHAT_WHICH",
        "text": "What has the speaker agreed to do?",
        "options": {
          "A": "Complete a design project",
          "B": "Write a press release",
          "C": "Give an opening speech",
          "D": "Revise a budget"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t7-q73",
        "questionType": "ACTION_NEXT",
        "text": "What will the speaker send the listener?",
        "options": {
          "A": "A draft of a speech",
          "B": "A contract",
          "C": "A business card",
          "D": "An updated itinerary"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Hi, Antonio. This is Yukiko from the public relations department. I'm calling about the schedule for next week's tech conference. There's been a change I wanted to make you aware of because I know you're making travel arrangements for our executive team. They've updated the program for Tuesday morning. I've agreed to deliver the conference's opening address, so now we'll need to arrive at the event center by eight-thirty. I'll e-mail you the new itinerary for the trip right away. Thanks."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s2",
    "questionRange": "74-76",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "p4-t7-q74",
        "questionType": "WHO_LOC",
        "text": "Who is the speaker?",
        "options": {
          "A": "A restaurant owner",
          "B": "A corporate accountant",
          "C": "A grocery store manager",
          "D": "An agricultural scientist"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t7-q75",
        "questionType": "DETAIL",
        "text": "What does the speaker dislike about some vegetables?",
        "options": {
          "A": "They are too expensive.",
          "B": "They are not fresh.",
          "C": "They are out of stock.",
          "D": "They are not locally grown."
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q76",
        "questionType": "ACTION_NEXT",
        "text": "What does the speaker plan to do next week?",
        "options": {
          "A": "Review some resumes",
          "B": "Visit a farm",
          "C": "Purchase some new equipment",
          "D": "Inspect a kitchen"
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au Good morning. I called this meeting to discuss the feedback we've received from our grocery store customers recently. We've had a lot of complaints about our vegetable selection. We've been buying our produce from a large industrial farm. The problem is that the vegetables are harvested before they're ripe so they can survive the two-day truck ride to our store. By the time they get here, they're not very fresh. I found a local organic farm that I'd like to start buying from. I'm going there next week to check it out. I'll take some pictures and bring them back to show you."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s3",
    "questionRange": "77-79",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "p4-t7-q77",
        "questionType": "WHAT_WHICH",
        "text": "What type of business does the listener own?",
        "options": {
          "A": "A bicycle repair shop",
          "B": "A flower shop",
          "C": "A health club",
          "D": "A delivery service"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t7-q78",
        "questionType": "WHY_REASON",
        "text": "Why does the speaker's company want to hire the listener?",
        "options": {
          "A": "To fix a heating system",
          "B": "To host a corporate event",
          "C": "To train some employees",
          "D": "To participate in a fair"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t7-q79",
        "questionType": "DETAIL",
        "text": "What is the listener asked to bring?",
        "options": {
          "A": "Display some products",
          "B": "Offer some coupons",
          "C": "Create a handbook",
          "D": "Expedite a delivery"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Hello, my name's Darya, and I heard a radio advertisement about your bicycle shop. It said that you offer bicycle repair demonstrations. Would you consider doing that at a corporate health fair? My company recently launched a new health initiative, and one thing we'd like to do is encourage employees to cycle to work. We'd provide you with a booth, and you'd bring the bike and tools. I also encourage you to bring some cycling accessories-such as helmets and water bottles-to display."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s4",
    "questionRange": "80-82",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "p4-t7-q80",
        "questionType": "WHO_LOC",
        "text": "Where do the listeners most likely work?",
        "options": {
          "A": "At a health food store",
          "B": "At a restaurant",
          "C": "At a spice factory",
          "D": "At a vegetable farm"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q81",
        "questionType": "DETAIL",
        "text": "What are the listeners preparing for today?",
        "options": {
          "A": "A seasonal sale",
          "B": "A cooking class",
          "C": "A baking contest",
          "D": "A grand opening"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t7-q82",
        "questionType": "WHO_LOC",
        "text": "Who is Ingrid Vogel?",
        "options": {
          "A": "A newspaper journalist",
          "B": "A health inspector",
          "C": "A famous chef",
          "D": "An interior decorator"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn So, this meeting is for everyone-cooks, servers, hosts, cleaners-because we all need to work together as a team. Today is an important day. So, first of all, thank you all for coming in extra early to help prepare for our grand opening. I appreciate it. Second thing I'd like to mention: tomorrow, a journalist from the local newspaper-her name is Ingrid Vogel-has made a reservation for six o'clock. Ms. Vogel will be writing an article about her experience here and rating the food we serve, so take good care of her. A positive review in the paper will definitely be good for future business."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s5",
    "questionRange": "83-85",
    "contextType": "B2 (company_management_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "p4-t7-q83",
        "questionType": "WHO_LOC",
        "text": "Where is the tour taking place?",
        "options": {
          "A": "At an art museum",
          "B": "At a pottery workshop",
          "C": "At a clothing design studio",
          "D": "At a glass factory"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t7-q84",
        "questionType": "DETAIL",
        "text": "Why does the speaker say, \"we ship to customers all over the world\"?",
        "options": {
          "A": "To reassure the listeners about a service",
          "B": "To explain why a storage area is large",
          "C": "To emphasize the popularity of some products",
          "D": "To make a suggestion for a gift"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t7-q85",
        "questionType": "IMPLY_MEANING",
        "text": "What does the speaker say is available to the listeners?",
        "options": {
          "A": "An event calendar",
          "B": "A discount on a purchase",
          "C": "A subscription to a newsletter",
          "D": "Entry in a prize drawing"
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Welcome to this tour of Jenson Manufacturing. Our town is known for the glasswork that has been produced for centuries by the many factories here. In fact, decorative glass is still the town's main source of income. While products from all the factories are known locally, we ship to customers all over the world. Today, you'll see our skilled artisans at work and learn about the history of their craft. After the tour, you may want to visit our gift shop, where you'll find many of the items produced here. Be sure to hold on to your tour ticket. It qualifies you for ten percent off anything you buy today."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s6",
    "questionRange": "86-88",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "p4-t7-q86",
        "questionType": "WHO_LOC",
        "text": "What is the purpose of the speaker’s organization?",
        "options": {
          "A": "To advise businesses about mergers",
          "B": "To arrange travel for executives",
          "C": "To share resources with new business owners",
          "D": "To recruit volunteers for a research study"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t7-q87",
        "questionType": "IMPLY_MEANING",
        "text": "What did the listeners do on March 15?",
        "options": {
          "A": "They signed some documents.",
          "B": "They purchased some materials.",
          "C": "They downloaded some software.",
          "D": "They wrote some proposals."
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t7-q88",
        "questionType": "ACTION_NEXT",
        "text": "What will the listeners do in a few minutes?",
        "options": {
          "A": "Congratulate a colleague",
          "B": "Vote on a policy change",
          "C": "Create an advertisement",
          "D": "Meet with mentors"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Welcome back, everyone. On behalf of the city's business development council, I'm pleased you could attend today's workshop for small business start-ups. Again, the council exists with the sole purpose of getting you the resources that you need to successfully launch your new business. So, this is the second workshop in a three-part series. During our initial session on March fifteenth, you worked on constructing a careful and detailed business proposal. Those proposals you submitted were a good start. Today, we're fortunate to have a number of seasoned business mentors who've volunteered their time to assist you with strategies for securing financing. In a few minutes, you'll meet with them in small groups."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s7",
    "questionRange": "89-91",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "p4-t7-q89",
        "questionType": "WHAT_WHICH",
        "text": "What does the speaker say is a top priority?",
        "options": {
          "A": "Increasing product sales",
          "B": "Keeping quality employees",
          "C": "Improving worker efficiency",
          "D": "Lowering manufacturing costs"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q90",
        "questionType": "DETAIL",
        "text": "Who is Helen Liu?",
        "options": {
          "A": "A company spokesperson",
          "B": "A human resources consultant",
          "C": "A digital marketing expert",
          "D": "A course instructor"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q91",
        "questionType": "DETAIL",
        "text": "Why does the speaker say, \"this affects all of us\"?",
        "options": {
          "A": "To encourage participation",
          "B": "To congratulate a team",
          "C": "To discourage future errors",
          "D": "To apologize for a delay"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au Now let's talk about our new initiative. Retaining quality personnel is now a top priority for our company. We're hoping that competitive salaries and benefits packages will help us recruit and keep talented staff. So, we recently brought in Helen Liu. Helen is a human resources consultant who'll spend the next few months helping us restructure our compensation program. Currently, she's requesting staff feedback about pay and benefits. To that end, she's created a questionnaire that will be sent out later today. I know everyone's busy right now, but this affects all of us."
      }
    ]
  },

  {
    "testId": 7,
    "setId": "p4-t7-s8",
    "questionRange": "92-94",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "p4-t7-q92",
        "questionType": "TOPIC_PURPOSE",
        "text": "What is the purpose of the meeting?",
        "options": {
          "A": "To request an increase in funding",
          "B": "To delegate some tasks",
          "C": "To plan a celebration",
          "D": "To introduce a new colleague"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t7-q93",
        "questionType": "DETAIL",
        "text": "Who is Robert?",
        "options": {
          "A": "A client",
          "B": "A project manager",
          "C": "An accountant",
          "D": "A graphic designer"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t7-q94",
        "questionType": "ACTION_NEXT",
        "text": "What does the speaker ask for help with?",
        "options": {
          "A": "Creating a schedule",
          "B": "Setting up equipment",
          "C": "Moving some furniture",
          "D": "Selecting a menu"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Okay, everyone, I've asked you to meet me in the conference room because I have some exciting news. We've just finalized a contract with a new client-Robert from the Peterson Agency just signed the paperwork this morning! This is our largest account yet, and it's a huge step forward for our advertising firm. Robert's agreed to let us design all the print and digital advertising for his company's new product launch. So, we're going to organize a small party on Friday to celebrate. I'd like a few of you to help me choose the food for the party, so please let me know if you're interested."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s9",
    "questionRange": "95-97",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "p4-t7-q95",
        "questionType": "WHY_REASON",
        "text": "According to the speaker, what is causing a traffic delay?",
        "options": {
          "A": "Road construction",
          "B": "A malfunctioning signal",
          "C": "An accident",
          "D": "A sporting event"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q96",
        "questionType": "DETAIL",
        "text": "What does the speaker suggest listeners do?",
        "options": {
          "A": "Take an alternate route",
          "B": "Take public transportation",
          "C": "Drive carefully",
          "D": "Postpone travel"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t7-q97",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. When will a sporting event take place?",
        "options": {
          "A": "On Monday",
          "B": "On Tuesday",
          "C": "On Wednesday",
          "D": "On Thursday"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am This is the six o'clock update from NCK News with Patricia Sullivan. First, the traffic report: a traffic light on Samson Road isn't working, and it's causing a lengthy delay. A maintenance crew is currently fixing the light, so repairs are expected to be done within the hour. Until then, taking an alternate route home is advisable. Next in weather: right now it's rainy and cold. Tomorrow's weather will be excellent; we're expecting a sunny day with no chance of rain. And that's good, because our local football team plays tomorrow at noon. Stay tuned for the seven o'clock update."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "p4-t7-s10",
    "questionRange": "98-100",
    "contextType": "B3 (company_training)",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "p4-t7-q98",
        "questionType": "WHO_LOC",
        "text": "Who most likely are the listeners?",
        "options": {
          "A": "Librarians",
          "B": "Engineers",
          "C": "Politicians",
          "D": "Biologists"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q99",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which lecturer is the speaker excited to hear?",
        "options": {
          "A": "Jung-Hoon Kim",
          "B": "Mei Na Zhang",
          "C": "Maryam Alaoui",
          "D": "Isamu Nakamura"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t7-q100",
        "questionType": "ACTION_NEXT",
        "text": "What will the listeners most likely do next?",
        "options": {
          "A": "Submit a proposal",
          "B": "Sign up for a seminar",
          "C": "Read an article",
          "D": "Go to lunch"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au Good morning. Welcome to the thirty-fifth annual Civil Engineering Conference. We have many interesting seminars on the schedule for the next three days. I'm especially looking forward to the lecture on bridge safety and maintenance. The presenter is a leader in the field and always gives fascinating talks. Now, before we get started with the first presentation, we'll take a break for lunch. The cafeteria is located downstairs. Enjoy the food, and we'll see you back here in one hour."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s1",
    "questionRange": "71-73",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "p4-t8-q71",
        "questionType": "WHO_LOC",
        "text": "Who most likely is the speaker?",
        "options": {
          "A": "A roofing expert",
          "B": "A landscape designer",
          "C": "A health inspector",
          "D": "A flooring manufacturer"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t8-q72",
        "questionType": "WHAT_WHICH",
        "text": "What is the problem?",
        "options": {
          "A": "A deadline has passed.",
          "B": "A material is more expensive.",
          "C": "A machine is broken.",
          "D": "Some measurements are incorrect."
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t8-q73",
        "questionType": "WHY_REASON",
        "text": "Why does the speaker recommend acting soon?",
        "options": {
          "A": "To accommodate a schedule change",
          "B": "To take advantage of a sale",
          "C": "To train a new employee",
          "D": "To avoid a seasonal delay"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "H-Au Hi, this is Alexi from Petrov Roofing Company. I just heard back from my supplier. Unfortunately, the estimate I gave you yesterday for the new roof shingles was a little low. The ones you chose are actually 39 dollars per bundle. That's more than what I quoted. So, I just wanted to get your approval for this new price before I put in the order. And I recommend that we order soon, since the rainy season's only a month away. Once the rain starts, it'll take more time to install the new roof."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s2",
    "questionRange": "74-76",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "p4-t8-q74",
        "questionType": "WHO_LOC",
        "text": "Who are the listeners?",
        "options": {
          "A": "Artists",
          "B": "Journalists",
          "C": "Real estate agents",
          "D": "Sales representatives"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t8-q75",
        "questionType": "DETAIL",
        "text": "What does the speaker say the listeners should learn to do?",
        "options": {
          "A": "Manage their time",
          "B": "Negotiate prices",
          "C": "Give memorable presentations",
          "D": "Create effective advertisements"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q76",
        "questionType": "DETAIL",
        "text": "What does the speaker mention about Insook Lee?",
        "options": {
          "A": "She has won an award.",
          "B": "She is on a lecture tour.",
          "C": "She hosts a popular podcast.",
          "D": "She recently started a company."
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Thanks for attending today's seminar for new real estate agents. As people just joining the industry, it's very important that you learn how to create a memorable property advertisement. The way you describe a house or apartment can determine how quickly the property sells. I've invited a guest speaker to discuss this very point. Insook Lee has recently won our county's agent of the year award, and she attributes her success in large part to the fact that she has mastered the art of writing a great description. Insook, welcome, and thank you for joining us today."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s3",
    "questionRange": "77-79",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "p4-t8-q77",
        "questionType": "DETAIL",
        "text": "What happened last January?",
        "options": {
          "A": "There was an election.",
          "B": "There was a snowstorm.",
          "C": "A shopping mall opened.",
          "D": "A bridge was closed."
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t8-q78",
        "questionType": "WHY_REASON",
        "text": "Why have some citizens complained?",
        "options": {
          "A": "A toll has increased.",
          "B": "Traffic lights are badly timed.",
          "C": "There is not enough parking.",
          "D": "The roads are in poor condition."
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q79",
        "questionType": "WHO_LOC",
        "text": "Who has been invited to attend a city council meeting?",
        "options": {
          "A": "Engineers",
          "B": "Educators",
          "C": "Finance experts",
          "D": "Business owners"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn In local news, town officials are ready to take action on the untimely degradation of some of our town's main roads. Since the Bellville shopping mall opened last January, there has been significantly more traffic on the streets leading to the mall. City officials have received numerous complaints from citizens about large cracks and potholes in the roads, which can be damaging to cars. The city council has invited a few concrete engineers to their next meeting, which will be open to the public. The engineers will share their expertise on the options available for upgrading our roads, and the city council will vote on a budget for the project."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s4",
    "questionRange": "80-82",
    "contextType": "A1 (announcement)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "p4-t8-q80",
        "questionType": "DETAIL",
        "text": "What is the purpose of an equipment update?",
        "options": {
          "A": "To promote healthy lifestyles",
          "B": "To protect consumer privacy",
          "C": "To comply with safety standards",
          "D": "To increase energy efficiency"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q81",
        "questionType": "DETAIL",
        "text": "What are the listeners warned about?",
        "options": {
          "A": "Price increases",
          "B": "Service interruptions",
          "C": "Loud noises",
          "D": "Increased traffic"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t8-q82",
        "questionType": "ACTION_NEXT",
        "text": "What are some listeners encouraged to do?",
        "options": {
          "A": "Sign up early for a service",
          "B": "Use a community space",
          "C": "Attend an information session",
          "D": "Take public transportation"
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Thank you for coming to this short meeting for all residents of Atrium Apartment Complex. Our power provider, Crewdson Energy Company, will be updating the electrical equipment in all units starting next week. This update is to improve the energy efficiency in our buildings. Please be warned that there will be intermittent power failures while work is being done. If you work from home and need alternate space to work during power failures, you're free to use the apartment complex clubhouse. We'll make sure there's power there at all times."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s5",
    "questionRange": "83-85",
    "contextType": "A1 (announcement)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "p4-t8-q83",
        "questionType": "WHO_LOC",
        "text": "Who is the speaker?",
        "options": {
          "A": "A sports coach",
          "B": "A computer programmer",
          "C": "A company executive",
          "D": "A sales representative"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t8-q84",
        "questionType": "DETAIL",
        "text": "What is the speaker mainly discussing?",
        "options": {
          "A": "An upcoming retirement",
          "B": "A corporate fund-raiser",
          "C": "An innovative product",
          "D": "An annual dinner"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t8-q85",
        "questionType": "IMPLY_MEANING",
        "text": "Why does the speaker say, \"There are a lot of talented people in this group\"?",
        "options": {
          "A": "To question a management policy",
          "B": "To suggest a group size be decreased",
          "C": "To reassure the listeners about a decision",
          "D": "To express appreciation for an award"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Hello. As your senior vice president of Product Development, it has been a privilege leading this team over the past several decades. As you may have heard, I will be ending my time with the company next month. Now, when I shared this news with a few of you individually, there were some concerns about the future of the team under new leadership. Frankly, that surprised me. I mean, look around the room. There are a lot of talented people in this group. In fact, I should take this opportunity to thank you all for our collective success."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s6",
    "questionRange": "86-88",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "p4-t8-q86",
        "questionType": "WHO_LOC",
        "text": "Who is the man most likely calling?",
        "options": {
          "A": "A police officer",
          "B": "A customer",
          "C": "A mechanic",
          "D": "A supervisor"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q87",
        "questionType": "DETAIL",
        "text": "What will take place tomorrow?",
        "options": {
          "A": "A store sale",
          "B": "A road closure",
          "C": "A farmers market",
          "D": "A musical performance"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t8-q88",
        "questionType": "DETAIL",
        "text": "What does the speaker mean when he says, \"there are three cars parked there now\"?",
        "options": {
          "A": "An event is not popular.",
          "B": "A task cannot be completed.",
          "C": "A parking fee has been paid.",
          "D": "A delivery will be delayed."
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Hello, Ms. Schulz. This is Yuri Federov, calling from our downtown store. I was just going over the checklist that you gave us. We've already done most of the things you've asked us to do in preparation for our outdoor sale, but there's a bit of a problem. You wanted us to rope off the parking spaces in front of the shop after we closed today so we can set up tables there tomorrow morning. Well, it's eight fifteen, and there are three cars parked there now. Please give me a call back as soon as you can."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s7",
    "questionRange": "89-91",
    "contextType": "A1 (announcement)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "p4-t8-q89",
        "questionType": "WHAT_WHICH",
        "text": "What change does the speaker announce?",
        "options": {
          "A": "Departments will be reorganized.",
          "B": "New technicians will be hired.",
          "C": "An additional warehouse will open.",
          "D": "An automated system will be used."
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q90",
        "questionType": "WHO_LOC",
        "text": "Who most likely are the listeners?",
        "options": {
          "A": "Accountants",
          "B": "Warehouse stockers",
          "C": "Human resources managers",
          "D": "Customer service representatives"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q91",
        "questionType": "DETAIL",
        "text": "What does the speaker ask the listeners to do?",
        "options": {
          "A": "Update service numbers",
          "B": "Submit salary requirements",
          "C": "Keep a record of complaints",
          "D": "Post some shipping schedules"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br We'll be rolling out some changes starting next week. When customers call the service number, they'll be prompted to say which department they're trying to reach, and then voice-recognition software will direct their call automatically. I'm sure most of you have experiences of your own calling customer-service hotlines that utilize this kind of system. Usually, it works, but it can be frustrating when it doesn't. Some customers might be upset with you if they were unable to reach the right department quickly. If this happens to you, please summarize the exchange in writing. I'll give the feedback to the programmers so they can make improvements to the program accordingly."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s8",
    "questionRange": "92-94",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "p4-t8-q92",
        "questionType": "WHY_REASON",
        "text": "What is the speaker promoting?",
        "options": {
          "A": "Audio equipment",
          "B": "Cleaning tools",
          "C": "A security device",
          "D": "A software program"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t8-q93",
        "questionType": "IMPLY_MEANING",
        "text": "What industry do the listeners most likely work in?",
        "options": {
          "A": "Transportation",
          "B": "Manufacturing",
          "C": "Banking",
          "D": "Health care"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t8-q94",
        "questionType": "WHY_REASON",
        "text": "What does the speaker mean when he says, \"the manual's just fifteen pages long\"?",
        "options": {
          "A": "The listeners should read the manual now.",
          "B": "A manual would be inexpensive to print.",
          "C": "A product is not ready to be released.",
          "D": "A product is easy to use."
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Welcome to the booth for Pondrew Technologies. I hope you're enjoying today's trade show. Let me tell you about the software we released last month. It's designed to make your factory's production cycle more efficient. How? Well, as you know, if a machine in an assembly line malfunctions, it can trigger significant downtime. Pondrew's software continuously gathers and processes data from each machine, so issues can be diagnosed faster. Yes, there are other software programs on the market that perform similar tasks, but they're complicated and require hours of training. Consider this about Pondrew's: the manual's just fifteen pages long."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s9",
    "questionRange": "95-97",
    "contextType": "A1 (announcement)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "p4-t8-q95",
        "questionType": "WHO_LOC",
        "text": "What is the speaker's company planning to purchase?",
        "options": {
          "A": "A 3-D printer",
          "B": "A large-screen television",
          "C": "Some new laptops",
          "D": "Some adjustable desks"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t8-q96",
        "questionType": "WHY_REASON",
        "text": "Why has the company decided to make the purchase?",
        "options": {
          "A": "More employees were hired.",
          "B": "A vendor increased its prices.",
          "C": "A store went out of business.",
          "D": "Some software was out-of-date."
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t8-q97",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Where will Jerome move to?",
        "options": {
          "A": "Office 1",
          "B": "Office 2",
          "C": "Office 3",
          "D": "Office 4"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am I have an announcement for the team. We'll be making a big purchase-a top-of-the-line 3-D printer. We've been outsourcing the work to a printing company, but it recently doubled its prices. We think it's time to have our own in-house printer. The only issue is size-the only space big enough for the new machine is the office next to the reception area, so we'll be rearranging our work space. Jerome, I'm sorry, but you'll have to move. We hope you won't mind using the office in the corner across from the conference room."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "p4-t8-s10",
    "questionRange": "98-100",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "p4-t8-q98",
        "questionType": "WHO_LOC",
        "text": "Where does the speaker most likely work?",
        "options": {
          "A": "At a factory",
          "B": "At an architecture firm",
          "C": "At a landscaping service",
          "D": "At a government inspection office"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t8-q99",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which number does the speaker want to change?",
        "options": {
          "A": "20",
          "B": "12",
          "C": "8",
          "D": "15"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t8-q100",
        "questionType": "DETAIL",
        "text": "What information would the speaker like added to a list?",
        "options": {
          "A": "His home address",
          "B": "His office location",
          "C": "His telephone number",
          "D": "His e-mail address"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au Hi, Amy! This is Paul Baxter from the manufacturing team. Listen, I made a mistake in the order form I left on your desk earlier today. I actually only need ten pairs of safety goggles for my team on the assembly floor. Hopefully, you get this message before you submit the order. Oh, and by the way-when you place the order, could you add my e-mail address to the notification list, so I know when everything's scheduled to arrive? It's paul.baxter@allymanufacturing.com. Thanks."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s1",
    "questionRange": "71-73",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "p4-t9-q71",
        "questionType": "WHAT_WHICH",
        "text": "What does the company sell?",
        "options": {
          "A": "Racing bicycles",
          "B": "Motorcycle parts",
          "C": "Camping equipment",
          "D": "Electric cars"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t9-q72",
        "questionType": "DETAIL",
        "text": "What does the speaker emphasize about the products?",
        "options": {
          "A": "They are safe for the environment.",
          "B": "They come with an extended warranty.",
          "C": "They can be used with a mobile application.",
          "D": "They are designed for all weather conditions."
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t9-q73",
        "questionType": "DETAIL",
        "text": "What ends on Sunday?",
        "options": {
          "A": "A contest",
          "B": "A festival",
          "C": "A factory tour",
          "D": "A special offer"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Are you looking to buy a new car, but you're also concerned about the environment? Then there's no better place to shop than at Henry's Car Dealership! Unlike other dealerships, we only sell electric cars. That means our vehicles produce zero direct emissions, which specifically helps improve air quality. And we have a limited-time offer for you. If you buy a car by Sunday, you will get a year of free car washes!"
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s2",
    "questionRange": "74-76",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "p4-t9-q74",
        "questionType": "DETAIL",
        "text": "What does the business make?",
        "options": {
          "A": "Ice cream",
          "B": "Beverages",
          "C": "Candy",
          "D": "Pretzels"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q75",
        "questionType": "DETAIL",
        "text": "What does the speaker say the business is known for?",
        "options": {
          "A": "Its high-quality ingredients",
          "B": "Its clever packaging",
          "C": "Its unique flavors",
          "D": "Its handmade products"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t9-q76",
        "questionType": "ACTION_NEXT",
        "text": "What does the speaker ask the listeners to do?",
        "options": {
          "A": "Leave their personal items in a locker",
          "B": "Turn in their tickets",
          "C": "Divide into smaller groups",
          "D": "Put on some protective clothing"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Welcome to Soo-Min's Factory. I'm delighted to give you a tour of our facility. Today, you'll see how we manufacture some of the world's favorite candies. Unlike many candy factories, we still make our products by hand, just like we've been doing since the factory opened over 50 years ago. It's what we're known for. Now before we go in, you'll need to leave your belongings in the lockers behind me. We need to maintain a clean environment inside the factory, so it's very important that you don't take anything in with you."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s3",
    "questionRange": "77-79",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "p4-t9-q77",
        "questionType": "TOPIC_PURPOSE",
        "text": "What is the speaker mainly discussing?",
        "options": {
          "A": "An upcoming conference",
          "B": "A vacation policy",
          "C": "Some new software",
          "D": "Some new equipment"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q78",
        "questionType": "DETAIL",
        "text": "What does the speaker tell the listeners to take note of?",
        "options": {
          "A": "Some travel arrangements will be made online.",
          "B": "Some log-on information will remain the same.",
          "C": "A training session will be rescheduled.",
          "D": "A security policy will be enforced."
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t9-q79",
        "questionType": "DETAIL",
        "text": "What should the listeners do tomorrow?",
        "options": {
          "A": "Confirm their work schedules",
          "B": "Prepare a presentation",
          "C": "Park in a different location",
          "D": "Dress professionally"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br First on the staff meeting agenda is the new time-tracking software we're implementing. All employees will start using it to record their hours beginning next month. Because it's very different from our previous software, everyone will receive access to an online training session. Note that you'll use the same log-on name and password as you used on the old system. OK, next. Remember that a photographer will be here tomorrow to take pictures for the company Web site. Please wear professional attire."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s4",
    "questionRange": "80-82",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "p4-t9-q80",
        "questionType": "WHO_LOC",
        "text": "Where does Ms. Thompson work?",
        "options": {
          "A": "At an art supply store",
          "B": "At a museum",
          "C": "At a photography studio",
          "D": "At a library"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t9-q81",
        "questionType": "DETAIL",
        "text": "According to the speaker, what special talent does Ms. Thompson have?",
        "options": {
          "A": "Raising money",
          "B": "Painting landscapes",
          "C": "Negotiating contracts",
          "D": "Taking photographs"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t9-q82",
        "questionType": "DETAIL",
        "text": "What does Ms. Thompson plan to do after she retires?",
        "options": {
          "A": "Restore paintings",
          "B": "Volunteer as a consultant",
          "C": "Relocate to France",
          "D": "Become an author"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au: Welcome back to Artist Hour on Freetown Public Radio. With me here in the studio is Carol Thompson, the longtime director of the Freetown Art Museum. Ms. Thompson has just announced that she'll be retiring at the end of the year, so she joins us today to talk about her career and future plans. As we'll discuss later, she has always had a particular talent for fund-raising. Over her 30-year career, she has raised a total of five million dollars for art restoration projects across the country. Ms. Thompson plans to write children's books about well-known artists when she retires. The first will be based on the life of French painter Claude Monet."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s5",
    "questionRange": "83-85",
    "contextType": "B2 (company_management_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "p4-t9-q83",
        "questionType": "WHO_LOC",
        "text": "Who most likely are the listeners?",
        "options": {
          "A": "Journalists",
          "B": "Editors",
          "C": "Photographers",
          "D": "Salespeople"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t9-q84",
        "questionType": "DETAIL",
        "text": "According to the speaker, what will the listeners receive in an e-mail?",
        "options": {
          "A": "A book title",
          "B": "A concert ticket",
          "C": "A restaurant name",
          "D": "An account number"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q85",
        "questionType": "IMPLY_MEANING",
        "text": "Why does the speaker say, \"thousands of people will buy this issue\"?",
        "options": {
          "A": "To reassure the listeners",
          "B": "To correct a misunderstanding",
          "C": "To express surprise about a decision",
          "D": "To emphasize the importance of a task"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am: OK, everyone. I want to talk about your new writing assignments. As you know, the special restaurant issue of our magazine is coming out in May. But we still have quite a few restaurants we haven't reviewed yet. So, I've assigned a different restaurant to each reporter—you can check your e-mail to find out which one you'll be reviewing. This might seem like a fun assignment, but remember, thousands of people will buy this issue."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s6",
    "questionRange": "86-88",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "p4-t9-q86",
        "questionType": "WHO_LOC",
        "text": "Where are the listeners?",
        "options": {
          "A": "In a community center",
          "B": "In a medical clinic",
          "C": "In a university classroom",
          "D": "In a government office"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t9-q87",
        "questionType": "IMPLY_MEANING",
        "text": "Why does the speaker say, \"many eye problems are easily treated\"?",
        "options": {
          "A": "To indicate that a health fair is unnecessary",
          "B": "To suggest hiring additional staff",
          "C": "To encourage the listeners to get tested",
          "D": "To correct a statistical error"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q88",
        "questionType": "ACTION_NEXT",
        "text": "What will the listeners do next?",
        "options": {
          "A": "Pick up some nutritional information",
          "B": "Sign up for an appointment",
          "C": "Listen to a presentation",
          "D": "Watch a product demonstration"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br: Welcome, everyone, to the Pine City Community Center. I'm Dr. Garcia, and I'm here at the community center today for the annual wellness fair. We'll be doing free vision exams all day. If you don't have time today, we'll be offering the exams at our clinic for the rest of the month. Just remember, many eye problems are easily treated. OK, so first on our agenda at nine o'clock A.M., eye specialist Dr. Yan Zhou will give a presentation in the auditorium about maintaining good eye health. Let's head over there now."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s7",
    "questionRange": "89-91",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "p4-t9-q89",
        "questionType": "TOPIC_PURPOSE",
        "text": "What is the talk mainly about?",
        "options": {
          "A": "Cleaning a carpet",
          "B": "Installing a carpet",
          "C": "Designing a carpet",
          "D": "Choosing a carpet"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t9-q90",
        "questionType": "DETAIL",
        "text": "What does the speaker say about wool carpets?",
        "options": {
          "A": "They are difficult to find.",
          "B": "They are expensive.",
          "C": "They are hard to clean.",
          "D": "They are durable."
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q91",
        "questionType": "DETAIL",
        "text": "What does the speaker say his company provides?",
        "options": {
          "A": "A free in-store consultation",
          "B": "A children's play area",
          "C": "Flooring design samples",
          "D": "One-year warranties"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn: Hi, I'm Takumi from Logan's Flooring. Thanks for watching this video. Carpets come in various designs and materials, and selecting one can be overwhelming. Today, I'll be sharing a few tips that'll make that process easier. First, consider where you're going to put the carpet. For example, if you're carpeting a children's playroom, you probably don't want to select a wool carpet, since they're difficult to clean. Second, we recommend making sure your carpet is protected under our warranty in case of damage. At Logan's Flooring, we provide one-year warranties on all our carpets! Be sure to subscribe to this video channel for free weekly tips and ideas."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s8",
    "questionRange": "92-94",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "p4-t9-q92",
        "questionType": "WHY_REASON",
        "text": "Why does the speaker thank the listener?",
        "options": {
          "A": "For renewing a magazine subscription",
          "B": "For inspecting a medical facility",
          "C": "For writing an article",
          "D": "For giving a demonstration"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q93",
        "questionType": "IMPLY_MEANING",
        "text": "What does the speaker imply when she says, \"this is just one of our many products\"?",
        "options": {
          "A": "A company is prepared for more competition.",
          "B": "A company also sells less expensive products.",
          "C": "A team will need to work more quickly.",
          "D": "A supervisor will be impressed by some work."
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t9-q94",
        "questionType": "WHY_REASON",
        "text": "Why does the speaker ask the listener to call back?",
        "options": {
          "A": "To provide an address",
          "B": "To confirm a deadline",
          "C": "To place an order",
          "D": "To arrange a meeting"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br: Hi. This is Barbara Chen, head of public relations at Springfield Solutions. I'm calling to thank you for your magazine article about our company. In it, you praised our newest software, Ubex, writing that it helps factories run more efficiently. But you also emphasized how expensive the software is. While Ubex is costly, let me point out that this is just one of our many products. I'd appreciate the chance to discuss the full range of our software choices, to give you a balanced view of the company. Please call me back and let me know if you'd be available to meet."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s9",
    "questionRange": "95-97",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_95-97.mp3",
    "image": "/images/ETS_TOEIC_3/Test_09/Part_04/p4_q95.png",
    "questions": [
      {
        "id": "p4-t9-q95",
        "questionType": "WHO_LOC",
        "text": "Who most likely is the speaker?",
        "options": {
          "A": "A tour guide",
          "B": "A city official",
          "C": "A photographer",
          "D": "A landscape artist"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t9-q96",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which picnic area does the speaker recommend?",
        "options": {
          "A": "Picnic Area 1",
          "B": "Picnic Area 2",
          "C": "Picnic Area 3",
          "D": "Picnic Area 4"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q97",
        "questionType": "WHY_REASON",
        "text": "Why are some volunteers needed?",
        "options": {
          "A": "To maintain a garden",
          "B": "To hand out water bottles",
          "C": "To organize park events",
          "D": "To provide free tours"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am: Welcome to the grand opening of Oakfield Public Park! My fellow city council members and I are glad that everyone could join us. There are many fun activities for residents to enjoy here. See the beautiful Elm Fountain, which has a special fountain show every hour. There are also several picnic areas throughout the park. But I suggest the one between Dogwood Pond and the children's playground. It offers fantastic views of our city's skyline. Finally, for any gardeners among us, the Oakfield Parks Department needs volunteers to help care for the community garden. If you're interested, please visit the city government Web site."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "p4-t9-s10",
    "questionRange": "98-100",
    "contextType": "B3 (company_training)",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_98-100.mp3",
    "image": "/images/ETS_TOEIC_3/Test_09/Part_04/p4_q98.png",
    "questions": [
      {
        "id": "p4-t9-q98",
        "questionType": "WHO_LOC",
        "text": "Where do the listeners most likely work?",
        "options": {
          "A": "At a supermarket",
          "B": "At a hospital",
          "C": "At a community center",
          "D": "At a fitness club"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t9-q99",
        "questionType": "DETAIL",
        "text": "What does the speaker say is his goal?",
        "options": {
          "A": "To attract qualified job candidates",
          "B": "To minimize scheduling errors",
          "C": "To lower energy costs",
          "D": "To prevent sports injuries"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t9-q100",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which room will have the temperature lowered?",
        "options": {
          "A": "Cafeteria",
          "B": "Meeting Room",
          "C": "Waiting Room",
          "D": "Gymnasium"
        },
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au: Good morning. This is James from the Facilities Department. I'd like to tell you about a change here at the hospital. I've been asked by the hospital director to find ways to reduce our heating bill this winter. My goal is to lower our costs by 15 percent. To do this, I've decided to lower the temperature in the gymnasium on the first floor by three degrees. It won't affect the patients, because there are no patient rooms in that area."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s1",
    "questionRange": "71-73",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "p4-t10-q71",
        "questionType": "WHAT_WHICH",
        "text": "What kind of product did the speaker order?",
        "options": {
          "A": "Printer ink",
          "B": "Eyeglasses",
          "C": "Picture frames",
          "D": "Furniture"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q72",
        "questionType": "DETAIL",
        "text": "What problem does the speaker mention?",
        "options": {
          "A": "A package was not received.",
          "B": "An invoice is missing.",
          "C": "A product is the wrong color.",
          "D": "A Web site is down."
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t10-q73",
        "questionType": "DETAIL",
        "text": "What does the speaker ask about?",
        "options": {
          "A": "A refund policy",
          "B": "A delivery fee",
          "C": "A shipping time",
          "D": "A mailing address"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au Hello, I recently ordered a pair of reading glasses from your Web site. I chose blue frames, but when the package arrived, the glasses had black frames instead. I'm going to send these back to you now to be exchanged for the correct color. But I wanted to ask how long it'll take for the blue pair to arrive. The original shipment took about three weeks, and I'd like to get the replacement sooner. My number's 555-0156. Thanks."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s2",
    "questionRange": "74-76",
    "contextType": "A1 (announcement)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "p4-t10-q74",
        "questionType": "WHAT_WHICH",
        "text": "What award is being announced?",
        "options": {
          "A": "Best design",
          "B": "Top salesperson",
          "C": "Employee of the month",
          "D": "Excellence in research"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t10-q75",
        "questionType": "DETAIL",
        "text": "According to the speaker, what will the winner receive?",
        "options": {
          "A": "A commemorative plaque",
          "B": "A parking space",
          "C": "A gift certificate",
          "D": "A recognition dinner"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q76",
        "questionType": "DETAIL",
        "text": "What does the speaker say will be published on a Web site?",
        "options": {
          "A": "A photograph",
          "B": "A biography",
          "C": "Professional accomplishments",
          "D": "Company event details"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Good afternoon, everyone. As you know, it's time to announce our newest employee of the month, and it goes to Haru Watanabe. Congratulations! Haru did outstanding work this month securing the Thompson Limited account. He also volunteers in the community. As our winner, Haru will receive a preferred parking space right outside the building for the next 30 days. Haru, please come up here to have your picture taken. Like all our employees of the month, your photo will be featured on the company Web site."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s3",
    "questionRange": "77-79",
    "contextType": "B3 (company_training)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "p4-t10-q77",
        "questionType": "WHAT_WHICH",
        "text": "What kind of product does the speaker's company sell?",
        "options": {
          "A": "Bicycles",
          "B": "Tools",
          "C": "Cars",
          "D": "Toys"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t10-q78",
        "questionType": "DETAIL",
        "text": "What will the listeners do next?",
        "options": {
          "A": "Watch a video",
          "B": "Vote on a policy",
          "C": "Inspect a brochure",
          "D": "Tour a facility"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t10-q79",
        "questionType": "IMPLY_MEANING",
        "text": "What does the speaker mean when he says, \"I come in at eight\"?",
        "options": {
          "A": "He is very busy this week.",
          "B": "A store usually opens early.",
          "C": "The listeners should arrive at that time.",
          "D": "The listeners should prepare a shipment."
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Hi, everyone! My name is Sanjeep Gupta. We're excited to have so many new people working at our bicycle stores. During the week, you will learn how to repair bicycles and scooters for our customers. Before we begin your training, I'm going to show you around this model facility, which has been built to simulate the repair shop in the back of every one of our stores. Oh—a couple of you asked about your schedule this week. I'll be overseeing your work, and I come in at eight."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s4",
    "questionRange": "80-82",
    "contextType": "B2 (company_management_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "p4-t10-q80",
        "questionType": "WHAT_WHICH",
        "text": "What does the speaker mainly discuss?",
        "options": {
          "A": "Offering training opportunities",
          "B": "Changing product packaging",
          "C": "Updating safety regulations",
          "D": "Revising an advertising strategy"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q81",
        "questionType": "DETAIL",
        "text": "What did the company do last month?",
        "options": {
          "A": "It expanded its social media presence.",
          "B": "It agreed to organize a conference.",
          "C": "It published a training manual.",
          "D": "It hired an outside consultant."
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t10-q82",
        "questionType": "ACTION_NEXT",
        "text": "What should interested listeners do?",
        "options": {
          "A": "Contact their managers",
          "B": "Recruit some volunteers",
          "C": "Answer a survey",
          "D": "Watch a video"
        },
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Au A new report shows that customers prefer sustainable packaging in the products they buy. In order to expand our customer base, we've decided to look into using biodegradable packaging for the personal care products we make. Just last month, we hired a packaging consultant to develop environmentally friendly packaging for our products. Now we need to set up a committee to oversee the project. If you're interested in participating, contact your manager by the end of the week."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s5",
    "questionRange": "83-85",
    "contextType": "F1 (event_information)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "p4-t10-q83",
        "questionType": "WHO_LOC",
        "text": "Who most likely are the listeners?",
        "options": {
          "A": "Engineers",
          "B": "Dentists",
          "C": "Educators",
          "D": "Architects"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t10-q84",
        "questionType": "IMPLY_MEANING",
        "text": "Why does the speaker say, \"I'll be at the booth in the lobby until noon\"?",
        "options": {
          "A": "To request volunteers for the afternoon",
          "B": "To explain that a booth location has changed",
          "C": "To apologize for a scheduling conflict",
          "D": "To indicate availability to answer questions"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t10-q85",
        "questionType": "DETAIL",
        "text": "What does the speaker say will happen tonight?",
        "options": {
          "A": "A book signing",
          "B": "A photo shoot",
          "C": "A dinner reception",
          "D": "An award ceremony"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Thank you all for attending the thirtieth annual Dental Healthcare Conference. We have six sessions planned on the latest advances in tooth restoration. As a reminder, if you'd like to receive continuing education credit for attending the conference, you'll have to complete additional paperwork. Some of you may want to hear more details about that. I'll be at the booth in the lobby until noon. And finally, just a reminder that you are all invited to attend a dinner reception tonight starting right after the last presentation session."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s6",
    "questionRange": "86-88",
    "contextType": "F2 (media_broadcast)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "p4-t10-q86",
        "questionType": "WHO_LOC",
        "text": "What is Geeta Prasad's profession?",
        "options": {
          "A": "Research scientist",
          "B": "Medical doctor",
          "C": "University professor",
          "D": "Government official"
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t10-q87",
        "questionType": "DETAIL",
        "text": "According to the speaker, what are some data used for?",
        "options": {
          "A": "To evaluate a budget",
          "B": "To design new products",
          "C": "To make hiring decisions",
          "D": "To develop an exercise program"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q88",
        "questionType": "WHY_REASON",
        "text": "Why should the listeners visit a Web site?",
        "options": {
          "A": "To download a manual",
          "B": "To read a report",
          "C": "To register for a study",
          "D": "To provide some feedback"
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Welcome to this episode of our radio show, Research Now. On every show we talk to a different scientist about their work. Today's guest is Geeta Prasad. She's a scientist at McMillan Shoe Manufacturers. Her job is to research how people move their feet when they exercise. She then provides that data to the design team, who use it to design new shoes. In fact, her team is looking for participants to take part in their next study. To sign up, visit McMillan Shoe Manufacturers' Web site."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s7",
    "questionRange": "89-91",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "p4-t10-q89",
        "questionType": "WHO_LOC",
        "text": "Where do the listeners most likely work?",
        "options": {
          "A": "At a home appliance store",
          "B": "At a hardware store",
          "C": "At a shipping company",
          "D": "At a furniture store"
        },
        "correctAnswer": "D"
      },
      {
        "id": "p4-t10-q90",
        "questionType": "WHY_REASON",
        "text": "According to the speaker, what has caused a problem?",
        "options": {
          "A": "Low-quality merchandise",
          "B": "Competition from other businesses",
          "C": "Increased rental costs",
          "D": "Poor customer service"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q91",
        "questionType": "DETAIL",
        "text": "What will happen next month?",
        "options": {
          "A": "A focus group will be assembled.",
          "B": "A customer loyalty program will be introduced.",
          "C": "Some employees will receive training.",
          "D": "New advertisements will be designed."
        },
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Thanks for attending this management meeting. As you know, despite our strategy of positioning ourselves as a seller of high-quality furniture, we've been losing business to several secondhand stores selling used furniture in the area. There's one thing that we can start doing that many other furniture stores aren't: offering free assembly. By developing cross-functional delivery teams, we'll be able to gain a competitive edge. So next month, all of our delivery teams will attend sessions where they'll learn how to assemble our products in customers' homes."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s8",
    "questionRange": "92-94",
    "contextType": "A1 (announcement)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "p4-t10-q92",
        "questionType": "WHO_LOC",
        "text": "Where is the speech being given?",
        "options": {
          "A": "At a training session",
          "B": "At a press conference",
          "C": "At a job fair",
          "D": "At a store grand opening"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q93",
        "questionType": "WHY_REASON",
        "text": "Why does the speaker apologize?",
        "options": {
          "A": "Some repair work has caused delays.",
          "B": "Some employees have been transferred.",
          "C": "Some materials have not arrived.",
          "D": "Some businesses have been temporarily closed."
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t10-q94",
        "questionType": "IMPLY_MEANING",
        "text": "What does the speaker mean when she says, \"the tracks and trains are not city property\"?",
        "options": {
          "A": "She did not follow a recommendation.",
          "B": "She is not responsible for a problem.",
          "C": "Some directions were misleading.",
          "D": "A contract contained errors."
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Br Hello everyone. Thanks for coming to this press conference. On behalf of the City of Sommerville, I want to sincerely apologize to all community members affected by this week's train delays. My department has received reports of delays averaging an hour at peak periods. It has become clear that the ongoing track and wire repair work has become far too disruptive for city commuters. With this week's unacceptable delays in mind, my department, the city transportation office, is negotiating with the contractor, National Rail. That's the company that owns the tracks and runs the trains for Sommerville. To be clear, the tracks and trains are not city property. OK, now I can take some questions."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s9",
    "questionRange": "95-97",
    "contextType": "D2 (voice_message)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "p4-t10-q95",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which hairstyle does the speaker recommend?",
        "options": {
          "A": "Style 1",
          "B": "Style 2",
          "C": "Style 3",
          "D": "Style 4"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t10-q96",
        "questionType": "DETAIL",
        "text": "What does the speaker say is included in the price?",
        "options": {
          "A": "A comb",
          "B": "A beverage",
          "C": "Blow-drying",
          "D": "Hair care instructions"
        },
        "correctAnswer": "C"
      },
      {
        "id": "p4-t10-q97",
        "questionType": "DETAIL",
        "text": "What does the speaker say happened yesterday?",
        "options": {
          "A": "A photo shoot was held.",
          "B": "A popular product arrived.",
          "C": "A new hairstylist was hired.",
          "D": "A product demonstration was conducted."
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "W-Am Hi, Susan. It's Maria. You asked me to suggest a new hairstyle for your appointment tomorrow. I'd recommend something cut all the way up to your chin. I think that a style like this would give you a very professional look. I'll show you the picture from my hairstyle catalog when you come in. If you'd like me to blow-dry your hair during your appointment, that's included in the price. Oh, and by the way, yesterday we got a shipment in of the Hydro Five hair moisturizer that always sells out. I know you like to use it, so I thought you might want to know."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "p4-t10-s10",
    "questionRange": "98-100",
    "contextType": "B1 (internal_meeting)",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "p4-t10-q98",
        "questionType": "DETAIL",
        "text": "According to the speaker, what did the company do last week?",
        "options": {
          "A": "It installed software to monitor machines.",
          "B": "It added a new machine to an assembly line.",
          "C": "It hired some expert technicians.",
          "D": "It reorganized a production team."
        },
        "correctAnswer": "A"
      },
      {
        "id": "p4-t10-q99",
        "questionType": "GRAPHIC",
        "text": "Look at the graphic. Which machine will a technician look at?",
        "options": {
          "A": "Machine 1",
          "B": "Machine 2",
          "C": "Machine 3",
          "D": "Machine 4"
        },
        "correctAnswer": "B"
      },
      {
        "id": "p4-t10-q100",
        "questionType": "DETAIL",
        "text": "What does the company hope to do next quarter?",
        "options": {
          "A": "Update their logo",
          "B": "Meet their production targets",
          "C": "Purchase similar technologies",
          "D": "Begin replacing outdated computers"
        },
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Speaker",
        "text": "M-Cn Our first topic is an update on the data analytic software we installed last week to identify problems with our plastic molding machines. As I'm sure you're aware, we've missed our production targets for the last two quarters. That means we're spending too much time assembling our products. As you can see on this chart, the data show that one of our machines is running a very slow production cycle at an average of six minutes, twenty-two seconds per cycle. We've already flagged it for repair by a technician. By next week, that machine should be at normal output. We're very optimistic about the impact the new analytic software will have on next quarter's targets."
      }
    ]
  }
];

export const getPart4QuestionByUniqueId = (uniqueId: string): { question: Part4Question, set: Part4Set } | null => {
  // Format: p4-t1-q71 or P4_T1_71
  const match = uniqueId.match(/p4[_-]t(\d+)[_-]q?(\d+)/i);
  if (!match) return null;

  const testId = parseInt(match[1]);
  const questionNoStr = match[2];
  const questionId = `p4-t${testId}-q${questionNoStr}`;

  // Find the set containing this question
  for (const set of part4Data) {
    if (set.testId === testId) {
      const question = set.questions.find(q => q.id === questionId || q.id.toLowerCase() === `p4-t${testId}-q${parseInt(questionNoStr)}`);
      if (question) {
        return { question, set };
      }
    }
  }
  return null;
};