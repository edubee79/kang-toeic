import { Part4Set } from '../../../listening_types';

export const test1: Part4Set[] = [
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
];
