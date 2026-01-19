
export interface Part4Question {
  id: string;
  text: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
}

export interface Part4Set {
  testId: number;
  setId: string;
  questionRange: string;
  audio: string;
  image?: string;
  questions: Part4Question[];
  script?: { speaker: string; text: string }[] | string;
}

export const part4Data: Part4Set[] = [
  {
    "testId": 1,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "What kind of business is the speaker most likely calling?",
        "options": [
          {
            "label": "A",
            "text": "A hair salon"
          },
          {
            "label": "B",
            "text": "An insurance company"
          },
          {
            "label": "C",
            "text": "A car dealership"
          },
          {
            "label": "D",
            "text": "An eye doctor's office"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q72",
        "text": "What does the speaker say about her appointment?",
        "options": [
          {
            "label": "A",
            "text": "It is too far away."
          },
          {
            "label": "B",
            "text": "It needs to be rescheduled."
          },
          {
            "label": "C",
            "text": "It is too expensive."
          },
          {
            "label": "D",
            "text": "It should be with a different person."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q73",
        "text": "What is the speaker interested in learning more about?",
        "options": [
          {
            "label": "A",
            "text": "Payment methods"
          },
          {
            "label": "B",
            "text": "Delivery options"
          },
          {
            "label": "C",
            "text": "A warranty"
          },
          {
            "label": "D",
            "text": "A job opening"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Hello, this is Karen Smith. I have an appointment with Dr. Miller for my annual eye exam on Tuesday. Unfortunately, I won't be able to make it. If possible, I'd like to reschedule for later in the week. If Dr. Miller is available in the afternoon, that would work better for me. I also wanted to ask about your warranty for eyeglasses. What exactly does the warranty cover? Thank you, and please call me back at 555-0110."
  },
  {
    "testId": 1,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "What is being advertised?",
        "options": [
          {
            "label": "A",
            "text": "A factory tour"
          },
          {
            "label": "B",
            "text": "A baking competition"
          },
          {
            "label": "C",
            "text": "A grand opening"
          },
          {
            "label": "D",
            "text": "An art show"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q75",
        "text": "What will participants receive?",
        "options": [
          {
            "label": "A",
            "text": "A poster"
          },
          {
            "label": "B",
            "text": "A promotional mug"
          },
          {
            "label": "C",
            "text": "A company T-shirt"
          },
          {
            "label": "D",
            "text": "A photograph"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q76",
        "text": "What can the listeners do on a Web site?",
        "options": [
          {
            "label": "A",
            "text": "Find a recipe"
          },
          {
            "label": "B",
            "text": "Fill out an entry form"
          },
          {
            "label": "C",
            "text": "View a product list"
          },
          {
            "label": "D",
            "text": "Download a coupon"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Curious about how chocolate is made? Then come visit us at Bodin's Chocolate Factory! You'll have a great time. We offer guided tours every Saturday and Sunday at our factory, located directly across from Appleton Shopping Center. During your two-hour visit, you'll observe the creation and packaging of Bodin's products. And each visitor will get their picture taken with Cheery, our adorable chocolate mascot, to take home as a souvenir. Right now, with the coupon available on our Web site, you can bring in a group of twelve or more people for half the price. Download yours today!"
  },
  {
    "testId": 1,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "Where does the announcement take place?",
        "options": [
          {
            "label": "A",
            "text": "At a sports arena"
          },
          {
            "label": "B",
            "text": "At a concert hall"
          },
          {
            "label": "C",
            "text": "At an art museum"
          },
          {
            "label": "D",
            "text": "At a movie theater"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q78",
        "text": "Why does the speaker apologize?",
        "options": [
          {
            "label": "A",
            "text": "A presenter has been delayed."
          },
          {
            "label": "B",
            "text": "Some lights have gone out."
          },
          {
            "label": "C",
            "text": "A sound system is broken."
          },
          {
            "label": "D",
            "text": "A construction project is noisy."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q79",
        "text": "What does the speaker offer the listeners?",
        "options": [
          {
            "label": "A",
            "text": "A promotional item"
          },
          {
            "label": "B",
            "text": "A parking voucher"
          },
          {
            "label": "C",
            "text": "Discounted snacks"
          },
          {
            "label": "D",
            "text": "Free tickets"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Attention, everyone. Unfortunately, we've had to stop the movie. As you've probably noticed, we're having technical difficulties with the audio. I'm very sorry about this-we take our sound quality seriously and want you to know we'll have technicians here as soon as possible to resolve this issue. As you exit, please stop by the customer service desk in the lobby to pick up two free tickets for your next movie. Again, my apologies for the inconvenience."
  },
  {
    "testId": 1,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "What event is taking place?",
        "options": [
          {
            "label": "A",
            "text": "A technology conference"
          },
          {
            "label": "B",
            "text": "A product demonstration"
          },
          {
            "label": "C",
            "text": "A company fund-raiser"
          },
          {
            "label": "D",
            "text": "A training workshop"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q81",
        "text": "Why does the speaker say, \"And over 300 people are here\"?",
        "options": [
          {
            "label": "A",
            "text": "To propose moving to a larger venue"
          },
          {
            "label": "B",
            "text": "To indicate that some advertising was successful"
          },
          {
            "label": "C",
            "text": "To emphasize the importance of working quickly"
          },
          {
            "label": "D",
            "text": "To suggest more volunteers are needed"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q82",
        "text": "What does the speaker ask the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Provide feedback"
          },
          {
            "label": "B",
            "text": "Silence mobile phones"
          },
          {
            "label": "C",
            "text": "Review an event program"
          },
          {
            "label": "D",
            "text": "Enjoy some refreshments"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Welcome to Branson Tech's second annual conference on computer security. We decided to try something different to publicize the event this year. We advertised primarily through social media rather than by e-mail newsletters or on company Web sites. And over 300 people are here! The first presentations will begin in fifteen minutes. The talks will take place in different rooms throughout the building, so please be sure to check your programs for the list of topics, speakers, and locations."
  },
  {
    "testId": 1,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "What is the purpose of the plan?",
        "options": [
          {
            "label": "A",
            "text": "To support local businesses"
          },
          {
            "label": "B",
            "text": "To promote tourism"
          },
          {
            "label": "C",
            "text": "To decrease traffic"
          },
          {
            "label": "D",
            "text": "To reduce government spending"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q84",
        "text": "Who does the speaker say will receive a discount?",
        "options": [
          {
            "label": "A",
            "text": "Commuters"
          },
          {
            "label": "B",
            "text": "Senior citizens"
          },
          {
            "label": "C",
            "text": "Students"
          },
          {
            "label": "D",
            "text": "City officials"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q85",
        "text": "What will happen after three months?",
        "options": [
          {
            "label": "A",
            "text": "A survey will be distributed."
          },
          {
            "label": "B",
            "text": "A new director will take over."
          },
          {
            "label": "C",
            "text": "A bus line will be added."
          },
          {
            "label": "D",
            "text": "A program evaluation will take place."
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Welcome, everyone. On behalf of the Department of Transportation, I'd like to announce a new experimental program to reduce traffic in Greenville. Beginning in January, there will be a ten-dollar fee for each car that enters the city. There will, however, be a lower fee for people who commute to Greenville for work. They will be asked to pay five dollars rather than ten dollars. These charges are aimed at deterring drivers from coming into this very crowded area. The program will be in effect for three months. After that, we will determine if the program has decreased traffic congestion enough to continue it permanently."
  },
  {
    "testId": 1,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "What event is the speaker discussing?",
        "options": [
          {
            "label": "A",
            "text": "A sports competition"
          },
          {
            "label": "B",
            "text": "A music festival"
          },
          {
            "label": "C",
            "text": "A cooking demonstration"
          },
          {
            "label": "D",
            "text": "A historical play"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q87",
        "text": "Why does the speaker say, \"tickets are almost sold out\"?",
        "options": [
          {
            "label": "A",
            "text": "To encourage the listeners to enter a contest"
          },
          {
            "label": "B",
            "text": "To suggest that the listeners arrive early"
          },
          {
            "label": "C",
            "text": "To complain that an event space is too small"
          },
          {
            "label": "D",
            "text": "To praise the results of a marketing plan"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q88",
        "text": "What will happen tomorrow morning?",
        "options": [
          {
            "label": "A",
            "text": "A new venue will open."
          },
          {
            "label": "B",
            "text": "A prize winner will be announced."
          },
          {
            "label": "C",
            "text": "An interview will take place."
          },
          {
            "label": "D",
            "text": "A video will be filmed."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Thanks for tuning in to Music Today on Radio 49. First, a reminder that the Classical Music Festival is this weekend. Radio 49 is giving listeners a chance to win a pair of tickets by entering a contest. And tickets are almost sold out. Just go to our Web site and tell us what you enjoy most on our station, and we'll pick a winner at random. This year is the tenth anniversary of the event, which was founded by a famous classical musician, Umesh Gupta. On tomorrow morning's program, Mr. Gupta will be here for an interview about the history of the festival. Be sure to join us for that."
  },
  {
    "testId": 1,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What type of business does the speaker work for?",
        "options": [
          {
            "label": "A",
            "text": "A computer company"
          },
          {
            "label": "B",
            "text": "A construction firm"
          },
          {
            "label": "C",
            "text": "A furniture manufacturer"
          },
          {
            "label": "D",
            "text": "An office-supply distributor"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q90",
        "text": "What does the speaker say is an advantage of the new material?",
        "options": [
          {
            "label": "A",
            "text": "It is inexpensive."
          },
          {
            "label": "B",
            "text": "It is durable."
          },
          {
            "label": "C",
            "text": "It is lightweight."
          },
          {
            "label": "D",
            "text": "It comes in many colors."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q91",
        "text": "What will the listeners do next?",
        "options": [
          {
            "label": "A",
            "text": "Sign up for a mailing list"
          },
          {
            "label": "B",
            "text": "Watch an instructional video"
          },
          {
            "label": "C",
            "text": "Enter a contest"
          },
          {
            "label": "D",
            "text": "Look at a sample"
          }
        ],
        "correctAnswer": "UNKNOWN"
      }
    ],
    "script": "Thank you for visiting our booth here at the trade fair. We're so excited to show you our new patio furniture. You're probably familiar with our wooden outdoor tables and chairs, and we want you to know that we've expanded that line to include plastic furniture. This furniture is very durable. It can withstand any kind of weather- and it needs no maintenance. I'm going to hand out a sample of the plastic material we use. Please pass it around after you've had a chance to look at it."
  },
  {
    "testId": 1,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "Which department does the speaker work in?",
        "options": [
          {
            "label": "A",
            "text": "Product Development"
          },
          {
            "label": "B",
            "text": "Human Resources"
          },
          {
            "label": "C",
            "text": "Legal"
          },
          {
            "label": "D",
            "text": "Accounting"
          }
        ],
        "correctAnswer": "UNKNOWN"
      },
      {
        "id": "q93",
        "text": "Why does the speaker say, \"there is a need for a skilled software engineer\"?",
        "options": [
          {
            "label": "A",
            "text": "To recommend an employee sign up for more training"
          },
          {
            "label": "B",
            "text": "To indicate that a project deadline will be extended"
          },
          {
            "label": "C",
            "text": "To approve a request to transfer"
          },
          {
            "label": "D",
            "text": "To suggest consulting with an expert"
          }
        ],
        "correctAnswer": "UNKNOWN"
      },
      {
        "id": "q94",
        "text": "What does the speaker want to discuss with the listener?",
        "options": [
          {
            "label": "A",
            "text": "Some sales results"
          },
          {
            "label": "B",
            "text": "Some client feedback"
          },
          {
            "label": "C",
            "text": "An office renovation"
          },
          {
            "label": "D",
            "text": "A work schedule"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "This is Noriko, the human resources supervisor here in Albin. I'm calling about your request to transfer to our branch in Flowertown. I know your commute is difficult, and it takes you over an hour to drive to this office. So I've contacted the manager at that location, and there is a position to transfer you permanently. I now have forms that you'll need to fill out, though, to complete the request. Now we need to talk about your work schedule to decide when you'll start at the new location. Please call me back."
  },
  {
    "testId": 1,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_95-97.mp3",
    "image": "/images/ETS_TOEIC_3/Test_01/Part_04/p4_q95.png",
    "questions": [
      {
        "id": "q95",
        "text": "Why are guests invited on the speaker's radio show?",
        "options": [
          {
            "label": "A",
            "text": "To discuss their businesses"
          },
          {
            "label": "B",
            "text": "To talk about local history"
          },
          {
            "label": "C",
            "text": "To teach communication skills"
          },
          {
            "label": "D",
            "text": "To offer travel tips"
          }
        ],
        "correctAnswer": "UNKNOWN"
      },
      {
        "id": "q96",
        "text": "What can the listeners do on a Web site?",
        "options": [
          {
            "label": "A",
            "text": "View photos of famous guests"
          },
          {
            "label": "B",
            "text": "Sign up for a special service"
          },
          {
            "label": "C",
            "text": "Read about upcoming programs"
          },
          {
            "label": "D",
            "text": "Listen to previous episodes"
          }
        ],
        "correctAnswer": "UNKNOWN"
      },
      {
        "id": "q97",
        "text": "Look at the graphic. Which day is this episode being aired?",
        "options": [
          {
            "label": "A",
            "text": "Tuesday"
          },
          {
            "label": "B",
            "text": "Wednesday"
          },
          {
            "label": "C",
            "text": "Thursday"
          },
          {
            "label": "D",
            "text": "Friday"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "You're listening to Making My Company with Mark Sullivan. In each episode I invite entrepreneurs from around the world to talk about how they built their successful businesses. In celebration of our radio show's ten-year anniversary, our Web site now has all of our previously aired episodes. You can access them with the click of a button. You can even download them onto mobile devices to listen to on the go! OK, now, I welcome Haru Nakamura to the show. Ms. Nakamura is excited to be here today."
  },
  {
    "testId": 1,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_98-100.mp3",
    "image": "/images/ETS_TOEIC_3/Test_01/Part_04/p4_q98.png",
    "questions": [
      {
        "id": "q98",
        "text": "Look at the graphic. Where will the scarves and ties be displayed?",
        "options": [
          {
            "label": "A",
            "text": "On Shelf 1"
          },
          {
            "label": "B",
            "text": "On Shelf 2"
          },
          {
            "label": "C",
            "text": "On Shelf 3"
          },
          {
            "label": "D",
            "text": "On Shelf 4"
          }
        ],
        "correctAnswer": "UNKNOWN"
      },
      {
        "id": "q99",
        "text": "What should be displayed near the cash registers?",
        "options": [
          {
            "label": "A",
            "text": "Coupons"
          },
          {
            "label": "B",
            "text": "Hats"
          },
          {
            "label": "C",
            "text": "Gloves"
          },
          {
            "label": "D",
            "text": "Socks"
          }
        ],
        "correctAnswer": "UNKNOWN"
      },
      {
        "id": "q100",
        "text": "What should the listener expect to receive in an e-mail?",
        "options": [
          {
            "label": "A",
            "text": "A payment schedule"
          },
          {
            "label": "B",
            "text": "Photographs"
          },
          {
            "label": "C",
            "text": "Shipping information"
          },
          {
            "label": "D",
            "text": "Display measurements"
          }
        ],
        "correctAnswer": "UNKNOWN"
      }
    ],
    "script": "It's Akira, calling from the district manager's office. The visual merchandising team wants to make a slight change to the fall display standards that we sent you yesterday. They want to move the shirts with the vertical stripes-hang them instead of having them displayed on the shelf. We'll display some colorful accessories there instead, like scarves and ties. Also, hang all the socks on gridwall panels by the cash registers. Those sell best when people can grab them when they walk up to pay. The thicker, cold-weather socks will be shipped to you soon. You'll get an e-mail confirmation with the details when they're sent."
  }
  ,
  {
    "testId": 2,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "What did Starbright Corporation recently do?",
        "options": [
          {
            "label": "A",
            "text": "It changed its company logo."
          },
          {
            "label": "B",
            "text": "It opened a new factory."
          },
          {
            "label": "C",
            "text": "It conducted a financial audit."
          },
          {
            "label": "D",
            "text": "It upgraded a product line."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q72",
        "text": "What type of product does Starbright Corporation make?",
        "options": [
          {
            "label": "A",
            "text": "Footwear"
          },
          {
            "label": "B",
            "text": "Cosmetics"
          },
          {
            "label": "C",
            "text": "Housewares"
          },
          {
            "label": "D",
            "text": "Electronics"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q73",
        "text": "What is available online?",
        "options": [
          {
            "label": "A",
            "text": "An application"
          },
          {
            "label": "B",
            "text": "A schedule"
          },
          {
            "label": "C",
            "text": "A video interview"
          },
          {
            "label": "D",
            "text": "A virtual tour"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "You're listening to radio station WKXL. Turning to local business updates, Monday marked the grand opening of Starbright Corporation's new factory. Starbright Corporation is a leading manufacturer of boots, athletic shoes, and sandals. So far, the new factory has created 800 jobs in our community, with positions ranging from assembly line workers to department managers. To hear more about the company, please visit our radio station's Web site, where my video interview with Starbright's president has been posted.",
    "image": "/images/ETS_TOEIC_3/Test_02/Part_04/p4_q71.png"
  },
  {
    "testId": 2,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "What event is taking place?",
        "options": [
          {
            "label": "A",
            "text": "An orientation session"
          },
          {
            "label": "B",
            "text": "A gallery opening"
          },
          {
            "label": "C",
            "text": "An awards ceremony"
          },
          {
            "label": "D",
            "text": "A retirement party"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q75",
        "text": "What type of business does Mustafa Perez work for?",
        "options": [
          {
            "label": "A",
            "text": "An advertising agency"
          },
          {
            "label": "B",
            "text": "An art gallery"
          },
          {
            "label": "C",
            "text": "A newspaper publisher"
          },
          {
            "label": "D",
            "text": "A camera shop"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q76",
        "text": "What has the speaker created for the event?",
        "options": [
          {
            "label": "A",
            "text": "A slideshow"
          },
          {
            "label": "B",
            "text": "A T-shirt design"
          },
          {
            "label": "C",
            "text": "A Web site"
          },
          {
            "label": "D",
            "text": "A brochure"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Thank you all for coming to this celebration. I know I speak for everyone here at the newspaper when I say that I'm sad to see Mustafa Perez retire next week. For the past 30 years, he's been the photographer we've all relied on to capture photos that illustrate our news articles. To honor his career, I've made a slideshow of some of the most impressive photos that Mustafa has taken. Please look at the screen at the front of the room.",
    "image": "/images/ETS_TOEIC_3/Test_02/Part_04/p4_q74.png"
  },
  {
    "testId": 2,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "What does the speaker's company produce?",
        "options": [
          {
            "label": "A",
            "text": "Medications"
          },
          {
            "label": "B",
            "text": "Textbooks"
          },
          {
            "label": "C",
            "text": "Exercise clothing"
          },
          {
            "label": "D",
            "text": "Construction materials"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q78",
        "text": "What are the listeners reminded to do?",
        "options": [
          {
            "label": "A",
            "text": "Recruit some staff"
          },
          {
            "label": "B",
            "text": "Enter some data"
          },
          {
            "label": "C",
            "text": "Attend some training sessions"
          },
          {
            "label": "D",
            "text": "Turn on a fan"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q79",
        "text": "What can be found online?",
        "options": [
          {
            "label": "A",
            "text": "A product database"
          },
          {
            "label": "B",
            "text": "An employee directory"
          },
          {
            "label": "C",
            "text": "A handbook"
          },
          {
            "label": "D",
            "text": "A contract"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "The last point on our agenda is about maintaining a safe environment while making the medications we sell here at Tamarah Pharmaceuticals. If you're working in any of the laboratories, please make sure to turn on the room's exhaust fan. It's especially important to keep the area well ventilated when working with some of the chemicals we use in our medications. We'd like to maintain our excellent safety record, so thank you in advance. The safety procedure handbook is on our internal company Web site if you need more information.",
    "image": "/images/ETS_TOEIC_3/Test_02/Part_04/p4_q77.png"
  },
  {
    "testId": 2,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "What will the speaker do at a park?",
        "options": [
          {
            "label": "A",
            "text": "Watch a performance"
          },
          {
            "label": "B",
            "text": "Sell fruit"
          },
          {
            "label": "C",
            "text": "Plant trees"
          },
          {
            "label": "D",
            "text": "Take photographs"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q81",
        "text": "Why does the speaker say, \"but it's supposed to be cloudy all day\"?",
        "options": [
          {
            "label": "A",
            "text": "To ask for help"
          },
          {
            "label": "B",
            "text": "To express frustration"
          },
          {
            "label": "C",
            "text": "To reject the listener's suggestion"
          },
          {
            "label": "D",
            "text": "To reassure the listener"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q82",
        "text": "What does the speaker remind the listener to do?",
        "options": [
          {
            "label": "A",
            "text": "Register for a competition"
          },
          {
            "label": "B",
            "text": "Purchase some supplies"
          },
          {
            "label": "C",
            "text": "Prepare a shipment"
          },
          {
            "label": "D",
            "text": "Speak to a customer"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Hi, Aisha. I'm here at the park for the farmers' market-I just set out the blueberries and strawberries that I'll be selling this morning. Everything's ready to go... Though I did accidentally forget to bring the tent that we use to shade the fruit. I know you're concerned about the fruit sitting out in the sun, but it's supposed to be cloudy all day. Anyways, the real reason I called was to remind you to register us for the annual farmers' association competition. I think we have a pretty good chance of winning the award for our strawberries."
  },
  {
    "testId": 2,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "Where is the announcement being made?",
        "options": [
          {
            "label": "A",
            "text": "At a technology firm"
          },
          {
            "label": "B",
            "text": "At a repair shop"
          },
          {
            "label": "C",
            "text": "At a factory"
          },
          {
            "label": "D",
            "text": "At a law office"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q84",
        "text": "Where should the listeners go at the end of their shifts?",
        "options": [
          {
            "label": "A",
            "text": "To the company cafeteria"
          },
          {
            "label": "B",
            "text": "To the receptionist's desk"
          },
          {
            "label": "C",
            "text": "To the locker room"
          },
          {
            "label": "D",
            "text": "To the parking area"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q85",
        "text": "What will happen tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Some office furniture will be delivered."
          },
          {
            "label": "B",
            "text": "New board members will be elected."
          },
          {
            "label": "C",
            "text": "A city official will conduct an inspection."
          },
          {
            "label": "D",
            "text": "Some time-reporting software will be fixed."
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Attention, Home Furniture factory employees. The software program we use for clocking in and out isn't working. This means you cannot enter your hours electronically. Instead, when your shift's over, please write your start and end time on the form that's on the receptionist's desk. The form already includes your name and the machine you operate. I know this is a hassle, but it's only temporary-the time-reporting software will be working when you get to the factory tomorrow morning."
  },
  {
    "testId": 2,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Where do the listeners work?",
        "options": [
          {
            "label": "A",
            "text": "At an employment agency"
          },
          {
            "label": "B",
            "text": "At a sports arena"
          },
          {
            "label": "C",
            "text": "At a conference center"
          },
          {
            "label": "D",
            "text": "At a medical clinic"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q87",
        "text": "What does the speaker imply when she says, \"Ms. Jenkins has retired\"?",
        "options": [
          {
            "label": "A",
            "text": "A role needs to be filled."
          },
          {
            "label": "B",
            "text": "An e-mail will not be answered."
          },
          {
            "label": "C",
            "text": "A marketing strategy should be revised."
          },
          {
            "label": "D",
            "text": "A process will be less efficient."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q88",
        "text": "What will the listeners most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Check a schedule"
          },
          {
            "label": "B",
            "text": "Complete a registration form"
          },
          {
            "label": "C",
            "text": "Eat a meal"
          },
          {
            "label": "D",
            "text": "Brainstorm some ideas"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "The final item on our agenda is the annual community health fair. As in previous years, our clinic will have a booth at the fair, where one of our nurses will be available to answer questions and give presentations about maintaining a healthy lifestyle. In the past, Mary Jenkins has always managed our booth, but, as you may know, Ms. Jenkins has retired. I want to tell you that working at the fair is a great way to give back to the community, so feel free to get in touch with me. OK, let's end there. As promised, I brought in soup and sandwiches for everyone-the food's in the break room."
  },
  {
    "testId": 2,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What is scheduled for Friday?",
        "options": [
          {
            "label": "A",
            "text": "A job fair"
          },
          {
            "label": "B",
            "text": "A wellness workshop"
          },
          {
            "label": "C",
            "text": "A client meeting"
          },
          {
            "label": "D",
            "text": "An employee luncheon"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q90",
        "text": "Why does the speaker say, \"the advertising business is very competitive\"?",
        "options": [
          {
            "label": "A",
            "text": "To explain a decision to retire"
          },
          {
            "label": "B",
            "text": "To justify an employee's promotion"
          },
          {
            "label": "C",
            "text": "To question the listener's abilities"
          },
          {
            "label": "D",
            "text": "To express confidence in an approach"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q91",
        "text": "What does the speaker say about Isabel?",
        "options": [
          {
            "label": "A",
            "text": "She has recently joined the company."
          },
          {
            "label": "B",
            "text": "She can recommend some activities."
          },
          {
            "label": "C",
            "text": "She will approve expense reports."
          },
          {
            "label": "D",
            "text": "She used to work on the NVC Industries account."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "Good morning, Martina. I'm calling about our biggest client, NVC Industries. A couple things... First, thank you for sending me your slides for the advertising pitch you'll be delivering to them at the meeting on Friday. I know you expressed some hesitation about your particular approach... you have concerns that it might be a bit too bold. Well, always remember that the advertising business is very competitive. Second, Isabel can make some recommendations about what to do while you're in Barcelona for the meeting with NVC Industries. Make sure you see her before you travel there."
  },
  {
    "testId": 2,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "What type of business does the speaker most likely work for?",
        "options": [
          {
            "label": "A",
            "text": "A television studio"
          },
          {
            "label": "B",
            "text": "A hardware store"
          },
          {
            "label": "C",
            "text": "A publishing company"
          },
          {
            "label": "D",
            "text": "A grocery store"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q93",
        "text": "What is the speaker concerned about?",
        "options": [
          {
            "label": "A",
            "text": "A business has lost customers."
          },
          {
            "label": "B",
            "text": "An advertising plan has not been effective."
          },
          {
            "label": "C",
            "text": "A stockroom is overcrowded."
          },
          {
            "label": "D",
            "text": "A Web site is not working."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q94",
        "text": "What does the speaker plan to do?",
        "options": [
          {
            "label": "A",
            "text": "Transfer to another location"
          },
          {
            "label": "B",
            "text": "Offer discounts online"
          },
          {
            "label": "C",
            "text": "Hire more employees"
          },
          {
            "label": "D",
            "text": "Add videos to a Web site"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Hi, everyone. Now, our goal has been to encourage our customers to try out the line of health drinks and energy bars we've recently started stocking at our store locations. And to do this, we've been sending out weekly newsletters by e-mail to our customers. Unfortunately, our analytics show that only ten percent of those e-mails are even opened. So, I'd like to try another strategy. I'd like to put together a team to create some videos about our groceries, and we can pick a few to post to our Web site. Maybe some with testimonials from satisfied customers? Anyway, please send me an e-mail if you're interested in helping with this project."
  },
  {
    "testId": 2,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A car salesperson"
          },
          {
            "label": "B",
            "text": "An auto mechanic"
          },
          {
            "label": "C",
            "text": "A car rental agent"
          },
          {
            "label": "D",
            "text": "A vehicle inspector"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which fee must be paid in cash?",
        "options": [
          {
            "label": "A",
            "text": "Filing"
          },
          {
            "label": "B",
            "text": "Contract processing"
          },
          {
            "label": "C",
            "text": "Vehicle title"
          },
          {
            "label": "D",
            "text": "Vehicle registration"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q97",
        "text": "What service does the speaker remind the listener about?",
        "options": [
          {
            "label": "A",
            "text": "Shuttle service"
          },
          {
            "label": "B",
            "text": "Maintenance reminders"
          },
          {
            "label": "C",
            "text": "Free car washes"
          },
          {
            "label": "D",
            "text": "Replacement keys"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Hello, Mr. Harris. This is Nadia calling. I've been getting the paperwork ready for the vehicle you're purchasing from us. When you come over to the dealership to pick up your car, you'll need to pay several fees. Please remember that the one hundred dollar fee must be paid in cash. The other fees can be paid with your credit card. The car title will take a few days to process, and then will be mailed to your home address. And don't forget to take advantage of our free monthly car wash-just use the service code provided on your contract."
  },
  {
    "testId": 2,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A jazz singer"
          },
          {
            "label": "B",
            "text": "A music teacher"
          },
          {
            "label": "C",
            "text": "A shop manager"
          },
          {
            "label": "D",
            "text": "A radio host"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q99",
        "text": "What event will take place in September?",
        "options": [
          {
            "label": "A",
            "text": "A music festival"
          },
          {
            "label": "B",
            "text": "A press conference"
          },
          {
            "label": "C",
            "text": "A charity dinner"
          },
          {
            "label": "D",
            "text": "A talent contest"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q100",
        "text": "Look at the graphic. Which type of instrument does the speaker focus on?",
        "options": [
          {
            "label": "A",
            "text": "Keyboards"
          },
          {
            "label": "B",
            "text": "Pianos"
          },
          {
            "label": "C",
            "text": "Drums"
          },
          {
            "label": "D",
            "text": "Guitars"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "At this staff meeting, I'd like to talk about some changes we'll be implementing here at Helgen's Music Shop. First, to attract more customers, we're going to host a small talent contest in September. I've recruited several local musicians to be the judges. Second, take a look at this chart from our annual sales report. Now, I'm not worried about the drums. But look at this instrument-we only sell twenty of them per year. That isn't very many, and they take a lot of time and effort to maintain. So, after careful consideration, I've decided we're going to stop selling them."
  }
  ,
  {
    "testId": 3,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "What did Starbright Corporation recently do?",
        "options": [
          {
            "label": "A",
            "text": "It changed its company logo."
          },
          {
            "label": "B",
            "text": "It opened a new factory."
          },
          {
            "label": "C",
            "text": "It conducted a financial audit."
          },
          {
            "label": "D",
            "text": "It upgraded a product line."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q72",
        "text": "What type of product does Starbright Corporation make?",
        "options": [
          {
            "label": "A",
            "text": "Footwear"
          },
          {
            "label": "B",
            "text": "Cosmetics"
          },
          {
            "label": "C",
            "text": "Housewares"
          },
          {
            "label": "D",
            "text": "Electronics"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q73",
        "text": "What is available online?",
        "options": [
          {
            "label": "A",
            "text": "An application"
          },
          {
            "label": "B",
            "text": "A schedule"
          },
          {
            "label": "C",
            "text": "A video interview"
          },
          {
            "label": "D",
            "text": "A virtual tour"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "You're listening to radio station WKXL. Turning to local business updates, Monday marked the grand opening of Starbright Corporation's new factory. Starbright Corporation is a leading manufacturer of boots, athletic shoes, and sandals. So far, the new factory has created 800 jobs in our community, with positions ranging from assembly line workers to department managers. To hear more about the company, please visit our radio station's Web site, where my video interview with Starbright's president has been posted.",
    "image": "/images/ETS_TOEIC_3/Test_03/Part_04/p4_q71.png"
  },
  {
    "testId": 3,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "What event is taking place?",
        "options": [
          {
            "label": "A",
            "text": "An orientation session"
          },
          {
            "label": "B",
            "text": "A gallery opening"
          },
          {
            "label": "C",
            "text": "An awards ceremony"
          },
          {
            "label": "D",
            "text": "A retirement party"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q75",
        "text": "What type of business does Mustafa Perez work for?",
        "options": [
          {
            "label": "A",
            "text": "An advertising agency"
          },
          {
            "label": "B",
            "text": "An art gallery"
          },
          {
            "label": "C",
            "text": "A newspaper publisher"
          },
          {
            "label": "D",
            "text": "A camera shop"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q76",
        "text": "What has the speaker created for the event?",
        "options": [
          {
            "label": "A",
            "text": "A slideshow"
          },
          {
            "label": "B",
            "text": "A T-shirt design"
          },
          {
            "label": "C",
            "text": "A Web site"
          },
          {
            "label": "D",
            "text": "A brochure"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Thank you all for coming to this celebration. I know I speak for everyone here at the newspaper when I say that I'm sad to see Mustafa Perez retire next week. For the past 30 years, he's been the photographer we've all relied on to capture photos that illustrate our news articles. To honor his career, I've made a slideshow of some of the most impressive photos that Mustafa has taken. Please look at the screen at the front of the room.",
    "image": "/images/ETS_TOEIC_3/Test_03/Part_04/p4_q74.png"
  },
  {
    "testId": 3,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "What does the speaker's company produce?",
        "options": [
          {
            "label": "A",
            "text": "Medications"
          },
          {
            "label": "B",
            "text": "Textbooks"
          },
          {
            "label": "C",
            "text": "Exercise clothing"
          },
          {
            "label": "D",
            "text": "Construction materials"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q78",
        "text": "What are the listeners reminded to do?",
        "options": [
          {
            "label": "A",
            "text": "Recruit some staff"
          },
          {
            "label": "B",
            "text": "Enter some data"
          },
          {
            "label": "C",
            "text": "Attend some training sessions"
          },
          {
            "label": "D",
            "text": "Turn on a fan"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q79",
        "text": "What can be found online?",
        "options": [
          {
            "label": "A",
            "text": "A product database"
          },
          {
            "label": "B",
            "text": "An employee directory"
          },
          {
            "label": "C",
            "text": "A handbook"
          },
          {
            "label": "D",
            "text": "A contract"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "The last point on our agenda is about maintaining a safe environment while making the medications we sell here at Tamarah Pharmaceuticals. If you're working in any of the laboratories, please make sure to turn on the room's exhaust fan. It's especially important to keep the area well ventilated when working with some of the chemicals we use in our medications. We'd like to maintain our excellent safety record, so thank you in advance. The safety procedure handbook is on our internal company Web site if you need more information.",
    "image": "/images/ETS_TOEIC_3/Test_03/Part_04/p4_q77.png"
  },
  {
    "testId": 3,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "What will the speaker do at a park?",
        "options": [
          {
            "label": "A",
            "text": "Watch a performance"
          },
          {
            "label": "B",
            "text": "Sell fruit"
          },
          {
            "label": "C",
            "text": "Plant trees"
          },
          {
            "label": "D",
            "text": "Take photographs"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q81",
        "text": "Why does the speaker say, \"but it's supposed to be cloudy all day\"?",
        "options": [
          {
            "label": "A",
            "text": "To ask for help"
          },
          {
            "label": "B",
            "text": "To express frustration"
          },
          {
            "label": "C",
            "text": "To reject the listener's suggestion"
          },
          {
            "label": "D",
            "text": "To reassure the listener"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q82",
        "text": "What does the speaker remind the listener to do?",
        "options": [
          {
            "label": "A",
            "text": "Register for a competition"
          },
          {
            "label": "B",
            "text": "Purchase some supplies"
          },
          {
            "label": "C",
            "text": "Prepare a shipment"
          },
          {
            "label": "D",
            "text": "Speak to a customer"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Hi, Aisha. I'm here at the park for the farmers' market-I just set out the blueberries and strawberries that I'll be selling this morning. Everything's ready to go... Though I did accidentally forget to bring the tent that we use to shade the fruit. I know you're concerned about the fruit sitting out in the sun, but it's supposed to be cloudy all day. Anyways, the real reason I called was to remind you to register us for the annual farmers' association competition. I think we have a pretty good chance of winning the award for our strawberries."
  },
  {
    "testId": 3,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "Where is the announcement being made?",
        "options": [
          {
            "label": "A",
            "text": "At a technology firm"
          },
          {
            "label": "B",
            "text": "At a repair shop"
          },
          {
            "label": "C",
            "text": "At a factory"
          },
          {
            "label": "D",
            "text": "At a law office"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q84",
        "text": "Where should the listeners go at the end of their shifts?",
        "options": [
          {
            "label": "A",
            "text": "To the company cafeteria"
          },
          {
            "label": "B",
            "text": "To the receptionist's desk"
          },
          {
            "label": "C",
            "text": "To the locker room"
          },
          {
            "label": "D",
            "text": "To the parking area"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q85",
        "text": "What will happen tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Some office furniture will be delivered."
          },
          {
            "label": "B",
            "text": "New board members will be elected."
          },
          {
            "label": "C",
            "text": "A city official will conduct an inspection."
          },
          {
            "label": "D",
            "text": "Some time-reporting software will be fixed."
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Attention, Home Furniture factory employees. The software program we use for clocking in and out isn't working. This means you cannot enter your hours electronically. Instead, when your shift's over, please write your start and end time on the form that's on the receptionist's desk. The form already includes your name and the machine you operate. I know this is a hassle, but it's only temporary-the time-reporting software will be working when you get to the factory tomorrow morning."
  },
  {
    "testId": 3,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Where do the listeners work?",
        "options": [
          {
            "label": "A",
            "text": "At an employment agency"
          },
          {
            "label": "B",
            "text": "At a sports arena"
          },
          {
            "label": "C",
            "text": "At a conference center"
          },
          {
            "label": "D",
            "text": "At a medical clinic"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q87",
        "text": "What does the speaker imply when she says, \"Ms. Jenkins has retired\"?",
        "options": [
          {
            "label": "A",
            "text": "A role needs to be filled."
          },
          {
            "label": "B",
            "text": "An e-mail will not be answered."
          },
          {
            "label": "C",
            "text": "A marketing strategy should be revised."
          },
          {
            "label": "D",
            "text": "A process will be less efficient."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q88",
        "text": "What will the listeners most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Check a schedule"
          },
          {
            "label": "B",
            "text": "Complete a registration form"
          },
          {
            "label": "C",
            "text": "Eat a meal"
          },
          {
            "label": "D",
            "text": "Brainstorm some ideas"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "The final item on our agenda is the annual community health fair. As in previous years, our clinic will have a booth at the fair, where one of our nurses will be available to answer questions and give presentations about maintaining a healthy lifestyle. In the past, Mary Jenkins has always managed our booth, but, as you may know, Ms. Jenkins has retired. I want to tell you that working at the fair is a great way to give back to the community, so feel free to get in touch with me. OK, let's end there. As promised, I brought in soup and sandwiches for everyone-the food's in the break room."
  },
  {
    "testId": 3,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What is scheduled for Friday?",
        "options": [
          {
            "label": "A",
            "text": "A job fair"
          },
          {
            "label": "B",
            "text": "A wellness workshop"
          },
          {
            "label": "C",
            "text": "A client meeting"
          },
          {
            "label": "D",
            "text": "An employee luncheon"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q90",
        "text": "Why does the speaker say, \"the advertising business is very competitive\"?",
        "options": [
          {
            "label": "A",
            "text": "To explain a decision to retire"
          },
          {
            "label": "B",
            "text": "To justify an employee's promotion"
          },
          {
            "label": "C",
            "text": "To question the listener's abilities"
          },
          {
            "label": "D",
            "text": "To express confidence in an approach"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q91",
        "text": "What does the speaker say about Isabel?",
        "options": [
          {
            "label": "A",
            "text": "She has recently joined the company."
          },
          {
            "label": "B",
            "text": "She can recommend some activities."
          },
          {
            "label": "C",
            "text": "She will approve expense reports."
          },
          {
            "label": "D",
            "text": "She used to work on the NVC Industries account."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "Good morning, Martina. I'm calling about our biggest client, NVC Industries. A couple things... First, thank you for sending me your slides for the advertising pitch you'll be delivering to them at the meeting on Friday. I know you expressed some hesitation about your particular approach... you have concerns that it might be a bit too bold. Well, always remember that the advertising business is very competitive. Second, Isabel can make some recommendations about what to do while you're in Barcelona for the meeting with NVC Industries. Make sure you see her before you travel there."
  },
  {
    "testId": 3,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "What type of business does the speaker most likely work for?",
        "options": [
          {
            "label": "A",
            "text": "A television studio"
          },
          {
            "label": "B",
            "text": "A hardware store"
          },
          {
            "label": "C",
            "text": "A publishing company"
          },
          {
            "label": "D",
            "text": "A grocery store"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q93",
        "text": "What is the speaker concerned about?",
        "options": [
          {
            "label": "A",
            "text": "A business has lost customers."
          },
          {
            "label": "B",
            "text": "An advertising plan has not been effective."
          },
          {
            "label": "C",
            "text": "A stockroom is overcrowded."
          },
          {
            "label": "D",
            "text": "A Web site is not working."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q94",
        "text": "What does the speaker plan to do?",
        "options": [
          {
            "label": "A",
            "text": "Transfer to another location"
          },
          {
            "label": "B",
            "text": "Offer discounts online"
          },
          {
            "label": "C",
            "text": "Hire more employees"
          },
          {
            "label": "D",
            "text": "Add videos to a Web site"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Hi, everyone. Now, our goal has been to encourage our customers to try out the line of health drinks and energy bars we've recently started stocking at our store locations. And to do this, we've been sending out weekly newsletters by e-mail to our customers. Unfortunately, our analytics show that only ten percent of those e-mails are even opened. So, I'd like to try another strategy. I'd like to put together a team to create some videos about our groceries, and we can pick a few to post to our Web site. Maybe some with testimonials from satisfied customers? Anyway, please send me an e-mail if you're interested in helping with this project."
  },
  {
    "testId": 3,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A car salesperson"
          },
          {
            "label": "B",
            "text": "An auto mechanic"
          },
          {
            "label": "C",
            "text": "A car rental agent"
          },
          {
            "label": "D",
            "text": "A vehicle inspector"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which fee must be paid in cash?",
        "options": [
          {
            "label": "A",
            "text": "Filing"
          },
          {
            "label": "B",
            "text": "Contract processing"
          },
          {
            "label": "C",
            "text": "Vehicle title"
          },
          {
            "label": "D",
            "text": "Vehicle registration"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q97",
        "text": "What service does the speaker remind the listener about?",
        "options": [
          {
            "label": "A",
            "text": "Shuttle service"
          },
          {
            "label": "B",
            "text": "Maintenance reminders"
          },
          {
            "label": "C",
            "text": "Free car washes"
          },
          {
            "label": "D",
            "text": "Replacement keys"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Hello, Mr. Harris. This is Nadia calling. I've been getting the paperwork ready for the vehicle you're purchasing from us. When you come over to the dealership to pick up your car, you'll need to pay several fees. Please remember that the one hundred dollar fee must be paid in cash. The other fees can be paid with your credit card. The car title will take a few days to process, and then will be mailed to your home address. And don't forget to take advantage of our free monthly car wash-just use the service code provided on your contract."
  },
  {
    "testId": 3,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A jazz singer"
          },
          {
            "label": "B",
            "text": "A music teacher"
          },
          {
            "label": "C",
            "text": "A shop manager"
          },
          {
            "label": "D",
            "text": "A radio host"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q99",
        "text": "What event will take place in September?",
        "options": [
          {
            "label": "A",
            "text": "A music festival"
          },
          {
            "label": "B",
            "text": "A press conference"
          },
          {
            "label": "C",
            "text": "A charity dinner"
          },
          {
            "label": "D",
            "text": "A talent contest"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q100",
        "text": "Look at the graphic. Which type of instrument does the speaker focus on?",
        "options": [
          {
            "label": "A",
            "text": "Keyboards"
          },
          {
            "label": "B",
            "text": "Pianos"
          },
          {
            "label": "C",
            "text": "Drums"
          },
          {
            "label": "D",
            "text": "Guitars"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "At this staff meeting, I'd like to talk about some changes we'll be implementing here at Helgen's Music Shop. First, to attract more customers, we're going to host a small talent contest in September. I've recruited several local musicians to be the judges. Second, take a look at this chart from our annual sales report. Now, I'm not worried about the drums. But look at this instrument-we only sell twenty of them per year. That isn't very many, and they take a lot of time and effort to maintain. So, after careful consideration, I've decided we're going to stop selling them."
  },
  {
    "testId": 3,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "Where is the announcement most likely being made?",
        "options": [
          {
            "label": "A",
            "text": "At a train station"
          },
          {
            "label": "B",
            "text": "At a bus station"
          },
          {
            "label": "C",
            "text": "At an airport"
          },
          {
            "label": "D",
            "text": "At a ferry terminal"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q72",
        "text": "Why is a change being made?",
        "options": [
          {
            "label": "A",
            "text": "It will improve traffic flow."
          },
          {
            "label": "B",
            "text": "It will keep prices low."
          },
          {
            "label": "C",
            "text": "It will increase energy efficiency."
          },
          {
            "label": "D",
            "text": "It will save staff time."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q73",
        "text": "What does the speaker recommend?",
        "options": [
          {
            "label": "A",
            "text": "Filling out a survey"
          },
          {
            "label": "B",
            "text": "Printing some tickets"
          },
          {
            "label": "C",
            "text": "Checking online for updates"
          },
          {
            "label": "D",
            "text": "Allowing extra time"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Attention, passengers. On Monday, some of our major bus routes will begin departing from another part of the station. All buses to Freeport, Johnstown, and Grant City will be leaving from gates 300 through 305 on the west side of the building. This change will help us to improve traffic flow. Since the new gates are a ten-minute walk from the ticket counter, we recommend allowing yourself extra time to walk there."
  },
  {
    "testId": 3,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "What event is taking place?",
        "options": [
          {
            "label": "A",
            "text": "A grand opening"
          },
          {
            "label": "B",
            "text": "A focus group"
          },
          {
            "label": "C",
            "text": "A food festival"
          },
          {
            "label": "D",
            "text": "A sales workshop"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q75",
        "text": "What does the speaker say is distinct about a coffee blend?",
        "options": [
          {
            "label": "A",
            "text": "It is locally sourced."
          },
          {
            "label": "B",
            "text": "It is available in glass bottles."
          },
          {
            "label": "C",
            "text": "It comes in several different flavors."
          },
          {
            "label": "D",
            "text": "It contains a lot of caffeine."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q76",
        "text": "What is the speaker offering customers?",
        "options": [
          {
            "label": "A",
            "text": "Free delivery"
          },
          {
            "label": "B",
            "text": "Two-day shipping"
          },
          {
            "label": "C",
            "text": "A full refund"
          },
          {
            "label": "D",
            "text": "A discount"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Welcome! Thank you for attending the grand opening of my new coffee shop. We're featuring our very own signature coffee blend. This coffee is distinct from all other blends on the market, because it has more caffeine than any other coffee, thanks to our roasting process. It's not all about caffeine though—this coffee still has a rich, nutty flavor. I'm so confident of my new coffee, that if any customers believe that it's not the strongest they've ever had, I'm offering a 100 percent money-back guarantee. Enjoy!"
  },
  {
    "testId": 3,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "How does each tour begin?",
        "options": [
          {
            "label": "A",
            "text": "Refreshments are served."
          },
          {
            "label": "B",
            "text": "Safety equipment is explained."
          },
          {
            "label": "C",
            "text": "A video is shown."
          },
          {
            "label": "D",
            "text": "Maps are distributed."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q78",
        "text": "What kind of gift do participants receive?",
        "options": [
          {
            "label": "A",
            "text": "A discount coupon"
          },
          {
            "label": "B",
            "text": "A bag of snacks"
          },
          {
            "label": "C",
            "text": "A T-shirt"
          },
          {
            "label": "D",
            "text": "A postcard"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q79",
        "text": "What does the speaker warn the listeners about?",
        "options": [
          {
            "label": "A",
            "text": "How to pay for food"
          },
          {
            "label": "B",
            "text": "What clothes to wear"
          },
          {
            "label": "C",
            "text": "Where to park"
          },
          {
            "label": "D",
            "text": "Which days to visit"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "If you're looking for a unique experience for the whole family, why not try a tour of Baxter's Snack Food Factory? Each tour begins with a video about the history of Baxter's. Then, unlike most factory tours, we actually take you out on the factory floor. At the end of the tour, everyone receives a free bag of our delicious snacks. Tours are available every weekday, but if you want to see our production in action, be sure to come and visit us from Monday to Wednesday. We can't guarantee production will be running on Thursdays and Fridays!"
  },
  {
    "testId": 3,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "Where does the speaker work?",
        "options": [
          {
            "label": "A",
            "text": "At an architecture firm"
          },
          {
            "label": "B",
            "text": "At an accounting firm"
          },
          {
            "label": "C",
            "text": "At a roofing company"
          },
          {
            "label": "D",
            "text": "At an auto repair shop"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q81",
        "text": "Why does the speaker say, \"an official estimate includes parts and labor\"?",
        "options": [
          {
            "label": "A",
            "text": "To compare her company to another one"
          },
          {
            "label": "B",
            "text": "To correct a colleague's mistake"
          },
          {
            "label": "C",
            "text": "To complain about an expense"
          },
          {
            "label": "D",
            "text": "To ask for help with a project"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q82",
        "text": "What does the speaker offer to do this afternoon?",
        "options": [
          {
            "label": "A",
            "text": "Visit the listener's home"
          },
          {
            "label": "B",
            "text": "Update the listener's contact information"
          },
          {
            "label": "C",
            "text": "Consult a financial advisor"
          },
          {
            "label": "D",
            "text": "Post a job announcement"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Hello, this is Anna Messina from Messina Roofing, and I'm calling about the new roof for your house that you're remodeling. I've learned that when our representative, John, visited you last week, he only talked to you about the cost of the shingles and other materials. But an official estimate includes parts and labor. It's important that we discuss this soon. I'll be in your area this afternoon and could stop by if that's convenient for you. Please let me know when you have a chance."
  },
  {
    "testId": 3,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "What is the broadcast about?",
        "options": [
          {
            "label": "A",
            "text": "Financing your company"
          },
          {
            "label": "B",
            "text": "Using social media"
          },
          {
            "label": "C",
            "text": "Recruiting staff"
          },
          {
            "label": "D",
            "text": "Getting a business license"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q84",
        "text": "What will the speaker help the listeners with today?",
        "options": [
          {
            "label": "A",
            "text": "Choosing a service"
          },
          {
            "label": "B",
            "text": "Lowering costs"
          },
          {
            "label": "C",
            "text": "Analyzing feedback"
          },
          {
            "label": "D",
            "text": "Setting goals"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q85",
        "text": "What will most likely happen next?",
        "options": [
          {
            "label": "A",
            "text": "The speaker will conduct an interview."
          },
          {
            "label": "B",
            "text": "The speaker will give a weather update."
          },
          {
            "label": "C",
            "text": "An advertisement will play."
          },
          {
            "label": "D",
            "text": "A contest winner will be announced."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Good evening, and welcome to the program. Today we're discussing using social media to promote your business. As you know, there are many challenges in this area. In fact, setting goals for your company's use of social media is one of the most difficult, so that's what I'm going to help you with today. I'll show you how creating goals based on your company's specific clientele will make it easier to adjust your social media presence. So, how do you do this? Joining me now in the studio is Li Zhao, the founder of the company Spacetime Services. I'll be speaking with Li about how she approached this task."
  },
  {
    "testId": 3,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Potential investors"
          },
          {
            "label": "B",
            "text": "Marketing specialists"
          },
          {
            "label": "C",
            "text": "Quality control inspectors"
          },
          {
            "label": "D",
            "text": "Product designers"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q87",
        "text": "According to the speaker, what is the company going to change?",
        "options": [
          {
            "label": "A",
            "text": "The material it uses"
          },
          {
            "label": "B",
            "text": "The financing it makes available"
          },
          {
            "label": "C",
            "text": "The maintenance schedule for its equipment"
          },
          {
            "label": "D",
            "text": "The publisher for its catalog"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q88",
        "text": "Why does the speaker say, \"but I use these products\"?",
        "options": [
          {
            "label": "A",
            "text": "To reject an offer"
          },
          {
            "label": "B",
            "text": "To correct an advertisement"
          },
          {
            "label": "C",
            "text": "To provide reassurance"
          },
          {
            "label": "D",
            "text": "To explain a decision"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Hi, everyone. I've got some big news. Our company has decided to move in an interesting direction, and it's going to affect us here in the marketing department. As you know, we've had great success getting stores to carry our line of fine cotton bedding, such as sheets and blankets. Now the company has decided to switch to using bamboo cloth for these products. The fabric is soft and durable and also environmentally sustainable. Our job, of course, is to maintain and expand our markets for this new bedding. Now, you may be worried that customers won't be happy with this change, but I use these products. Let's look at some samples now."
  },
  {
    "testId": 3,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "Where is the talk taking place?",
        "options": [
          {
            "label": "A",
            "text": "At an awards ceremony"
          },
          {
            "label": "B",
            "text": "At an exhibit opening"
          },
          {
            "label": "C",
            "text": "At a club meeting"
          },
          {
            "label": "D",
            "text": "At a national park tour"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q90",
        "text": "What did Kentaro Nakamura recently do?",
        "options": [
          {
            "label": "A",
            "text": "He published a book."
          },
          {
            "label": "B",
            "text": "He started a conservation society."
          },
          {
            "label": "C",
            "text": "He won a photography contest."
          },
          {
            "label": "D",
            "text": "He conducted a research project."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q91",
        "text": "What are the listeners invited to do after the event?",
        "options": [
          {
            "label": "A",
            "text": "Enjoy some refreshments"
          },
          {
            "label": "B",
            "text": "Sign up to volunteer"
          },
          {
            "label": "C",
            "text": "Purchase some souvenirs"
          },
          {
            "label": "D",
            "text": "Take some maps"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Thanks for coming to this month's meeting of the Emery Bird Watching Club. I'm very excited to welcome our guest speaker, author Kentaro Nakamura. He recently led a project in the Canadian wilderness where he spent six months researching bird migration patterns. In his lecture tonight, he'll talk about the dangers of light pollution to migrating birds and what we can do to help. After the presentation, please join us in the library for some drinks and treats."
  },
  {
    "testId": 3,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "What type of work do the listeners most likely do?",
        "options": [
          {
            "label": "A",
            "text": "Architectural planning"
          },
          {
            "label": "B",
            "text": "Software design"
          },
          {
            "label": "C",
            "text": "Therapy"
          },
          {
            "label": "D",
            "text": "Sales"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q93",
        "text": "What does the speaker thank the listeners for?",
        "options": [
          {
            "label": "A",
            "text": "Finalizing a business contract"
          },
          {
            "label": "B",
            "text": "Preparing a presentation"
          },
          {
            "label": "C",
            "text": "Sharing some ideas"
          },
          {
            "label": "D",
            "text": "Meeting with some clients"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q94",
        "text": "Why does the speaker say, \"we have a limited number of computers available\"?",
        "options": [
          {
            "label": "A",
            "text": "To warn the listeners about a maintenance issue"
          },
          {
            "label": "B",
            "text": "To encourage the listeners to sign up quickly"
          },
          {
            "label": "C",
            "text": "To suggest that the listeners buy a device"
          },
          {
            "label": "D",
            "text": "To remind the listeners about budget cuts"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "I'm glad to see everyone here for today's monthly team meeting. I'm quite impressed with the number of sales this team has finalized this month. Everyone met their quota—so congratulations! I read through your responses to the online questionnaire I posted. Thanks for sharing your ideas about professional development. Many people suggested improving our ability to create more-attractive slide presentations. I agree this'll be useful when you meet with prospective clients, so I'd like to accommodate that request with an on-site training. A sign-up sheet has been posted in the employee break room. Just a heads-up that we have a limited number of computers available."
  },
  {
    "testId": 3,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "What will take place this Friday?",
        "options": [
          {
            "label": "A",
            "text": "An industry award ceremony"
          },
          {
            "label": "B",
            "text": "A fund-raising dinner"
          },
          {
            "label": "C",
            "text": "A company anniversary event"
          },
          {
            "label": "D",
            "text": "A holiday celebration"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Where does the speaker want some audio equipment?",
        "options": [
          {
            "label": "A",
            "text": "Next to table 1"
          },
          {
            "label": "B",
            "text": "Next to table 2"
          },
          {
            "label": "C",
            "text": "Next to table 3"
          },
          {
            "label": "D",
            "text": "Next to table 4"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q97",
        "text": "What has the speaker shipped to the hotel?",
        "options": [
          {
            "label": "A",
            "text": "Some tablecloths"
          },
          {
            "label": "B",
            "text": "Some vases"
          },
          {
            "label": "C",
            "text": "Some aprons"
          },
          {
            "label": "D",
            "text": "Some glasses"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "Hello. This is Megumi from Fellmetric Limited. I'm calling about our company's anniversary dinner scheduled for this Friday at your hotel. We need audio equipment set up for the event host. Looking at the dining room layout, I think it's best to set it up next to the table by the window that is farthest away from the buffet. One last thing—I've shipped a box of our company's branded vases to the hotel. There should be enough for all the flower arrangements. Thanks."
  },
  {
    "testId": 3,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Event planners"
          },
          {
            "label": "B",
            "text": "Fashion designers"
          },
          {
            "label": "C",
            "text": "Sales analysts"
          },
          {
            "label": "D",
            "text": "Store managers"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q99",
        "text": "Look at the graphic. Which topic does the speaker start the workshop with?",
        "options": [
          {
            "label": "A",
            "text": "Topic 1"
          },
          {
            "label": "B",
            "text": "Topic 2"
          },
          {
            "label": "C",
            "text": "Topic 3"
          },
          {
            "label": "D",
            "text": "Topic 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q100",
        "text": "What does the speaker say the listeners will do next?",
        "options": [
          {
            "label": "A",
            "text": "Introduce themselves"
          },
          {
            "label": "B",
            "text": "Discuss some pictures"
          },
          {
            "label": "C",
            "text": "Practice doing interviews"
          },
          {
            "label": "D",
            "text": "Try out some software"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "Here are the topics we're going to cover in today's workshop on effective store management. I know interviewing is listed first on your agenda, but let's start with something more fun—setting up displays at your clothing stores. Displays are important because they have the biggest impact on how your store looks during business hours. From signage to lighting, there are many factors to consider. I'm going to show some photographs of displays, and let's see if we can identify which are the most effective, and why."
  },
  {
    "testId": 4,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "Who are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Residents in an apartment building"
          },
          {
            "label": "B",
            "text": "Employees in an office building"
          },
          {
            "label": "C",
            "text": "Visitors to a historical site"
          },
          {
            "label": "D",
            "text": "Guests in a hotel"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q72",
        "text": "What service does the speaker say will be unavailable?",
        "options": [
          {
            "label": "A",
            "text": "Telephone"
          },
          {
            "label": "B",
            "text": "Electric"
          },
          {
            "label": "C",
            "text": "Water"
          },
          {
            "label": "D",
            "text": "Natural gas"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q73",
        "text": "According to the speaker, why should the listeners go online?",
        "options": [
          {
            "label": "A",
            "text": "To download software"
          },
          {
            "label": "B",
            "text": "To check for status updates"
          },
          {
            "label": "C",
            "text": "To register a complaint"
          },
          {
            "label": "D",
            "text": "To view a price list"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Am: Hello, Fairview Apartment residents. This is your property manager. Due to repairs to the main water line along Chasman Boulevard, water service to all units at Fairview will be temporarily shut off on July fifteenth. I estimate that regular service will resume fully by five o'clock, though I recommend checking the building's social media page periodically. There'll be updates posted about possible delays. Thank you in advance for your patience and understanding."
  },
  {
    "testId": 4,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "Where does the announcement most likely take place?",
        "options": [
          {
            "label": "A",
            "text": "At a train station"
          },
          {
            "label": "B",
            "text": "At a convention center"
          },
          {
            "label": "C",
            "text": "At a restaurant"
          },
          {
            "label": "D",
            "text": "At an outdoor market"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q75",
        "text": "According to the speaker, what should customers be told?",
        "options": [
          {
            "label": "A",
            "text": "The Wi-Fi is not working."
          },
          {
            "label": "B",
            "text": "A room is closed for renovations."
          },
          {
            "label": "C",
            "text": "A schedule has been changed."
          },
          {
            "label": "D",
            "text": "An item is unavailable."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q76",
        "text": "What does the speaker encourage the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Work together"
          },
          {
            "label": "B",
            "text": "Arrive early"
          },
          {
            "label": "C",
            "text": "Take extra shifts"
          },
          {
            "label": "D",
            "text": "Greet customers"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Br: Before we begin tonight's dinner shift, I have some announcements. Our grilled tuna dish was so popular last night that we actually sold out of it for the rest of the weekend. Please let diners know that it's not available. Also, we'll be dividing up the servers this evening-half of you will be working in the main dining room, and the rest of you will be in the special-events room for a private party. It's going to be a busy evening, so I encourage you to help each other provide great service for our customers."
  },
  {
    "testId": 4,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Building contractors"
          },
          {
            "label": "B",
            "text": "Potential investors"
          },
          {
            "label": "C",
            "text": "Fashion models"
          },
          {
            "label": "D",
            "text": "News reporters"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q78",
        "text": "What type of clothing does the company sell?",
        "options": [
          {
            "label": "A",
            "text": "Swimwear"
          },
          {
            "label": "B",
            "text": "Hats"
          },
          {
            "label": "C",
            "text": "Business suits"
          },
          {
            "label": "D",
            "text": "Athletic shoes"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q79",
        "text": "What does the speaker's company hope to purchase?",
        "options": [
          {
            "label": "A",
            "text": "A new software program"
          },
          {
            "label": "B",
            "text": "A larger storage facility"
          },
          {
            "label": "C",
            "text": "Some delivery trucks"
          },
          {
            "label": "D",
            "text": "Some manufacturing equipment"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Am: Good morning! I really appreciate this opportunity to talk to you about investing in our company. After hearing my presentation, you'll see that our latest product is a worthwhile investment. Cygni Fashions has been selling business suits for more than 30 years. Last summer, when the weather was unusually hot, we decided to design suits that would be comfortable to wear when it's hot outside. People who wear these suits remain cool, regardless of the temperature. Now, these suits have become so popular that we cannot keep up with the demand. With your investment, we'll be able to purchase some advanced machinery that would allow us to triple our production."
  },
  {
    "testId": 4,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "What industry do the listeners most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Construction"
          },
          {
            "label": "B",
            "text": "Retail"
          },
          {
            "label": "C",
            "text": "Energy"
          },
          {
            "label": "D",
            "text": "Broadcast"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q81",
        "text": "What does the speaker imply when he says, “But there is a lot of paperwork to fill out”?",
        "options": [
          {
            "label": "A",
            "text": "The listeners may have to work overtime."
          },
          {
            "label": "B",
            "text": "The listeners will not begin work immediately."
          },
          {
            "label": "C",
            "text": "A permit will be difficult to obtain."
          },
          {
            "label": "D",
            "text": "Additional help is needed for a project."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q82",
        "text": "What will the speaker do next?",
        "options": [
          {
            "label": "A",
            "text": "Take some photographs"
          },
          {
            "label": "B",
            "text": "Look at a model home"
          },
          {
            "label": "C",
            "text": "Collect some viewer feedback"
          },
          {
            "label": "D",
            "text": "Go to the cafeteria"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn: I'm Thomas Ortiz, head of Human Resources here at Hamilton Power. On behalf of the company, I want to welcome you all to your new jobs. As you know, this is our most advanced power plant, and we provide electricity to over a half-million homes. I'm sure you're all eager to go to your workstations. But there is a lot of paperwork to fill out. I'll be going over it with you in a moment But first, I'd like to take your pictures for your ID badges. They'll be ready for you after lunch."
  },
  {
    "testId": 4,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "According to the speaker, what event will be held tonight?",
        "options": [
          {
            "label": "A",
            "text": "An anniversary party"
          },
          {
            "label": "B",
            "text": "A press conference"
          },
          {
            "label": "C",
            "text": "A board meeting"
          },
          {
            "label": "D",
            "text": "A product launch"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q84",
        "text": "Why does the speaker say, “I'll be driving to Holtsville from the office”?",
        "options": [
          {
            "label": "A",
            "text": "To correct a mistake"
          },
          {
            "label": "B",
            "text": "To provide an excuse"
          },
          {
            "label": "C",
            "text": "To make an offer"
          },
          {
            "label": "D",
            "text": "To request directions"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q85",
        "text": "What does the speaker say he needs to pick up?",
        "options": [
          {
            "label": "A",
            "text": "Some promotional materials"
          },
          {
            "label": "B",
            "text": "Some refreshments"
          },
          {
            "label": "C",
            "text": "Customer surveys"
          },
          {
            "label": "D",
            "text": "Event programs"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Au: Hi, Mario. I'm calling about tonight. I know you plan to be at the product launch in Holtsville to announce the release of our new smartphone. You mentioned that you're taking the red subway line to that event. Well, I just found out that the subway line is closed unexpectedly for repairs. So, I wanted to let you know, I'll be driving to Holtsville from the office. Now, I have to make one stop on the way. I have to pick up the promotional materials that'll be handed out to attendees-those phone cases with our company logo. But there's plenty of time to pick the cases up and still make it to the product launch before it starts."
  },
  {
    "testId": 4,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Which department does the speaker most likely work for?",
        "options": [
          {
            "label": "A",
            "text": "Product Development"
          },
          {
            "label": "B",
            "text": "Research"
          },
          {
            "label": "C",
            "text": "Engineering"
          },
          {
            "label": "D",
            "text": "Information Technology"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q87",
        "text": "What does the speaker say recently happened?",
        "options": [
          {
            "label": "A",
            "text": "Some certification classes began."
          },
          {
            "label": "B",
            "text": "Name badges were handed out."
          },
          {
            "label": "C",
            "text": "A virus infected some computers."
          },
          {
            "label": "D",
            "text": "A manager retired."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q88",
        "text": "What does the speaker ask the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Sign an attendance sheet"
          },
          {
            "label": "B",
            "text": "Open a software program"
          },
          {
            "label": "C",
            "text": "Submit some photos"
          },
          {
            "label": "D",
            "text": "View a slideshow"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "M-Cn: Welcome to this computer security workshop, hosted by the IT Department. This workshop is intended to be interactive, so please ask questions at any time. We scheduled the workshop because several employees' computers have recently become infected with a virus, and they had to be fixed. OK, so the first thing I'm going to show you is how to update your security software. Please open the program by clicking on the icon on the right-hand side of your computer screen."
  },
  {
    "testId": 4,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "Where do the listeners most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a software development company"
          },
          {
            "label": "B",
            "text": "At a book publishing company"
          },
          {
            "label": "C",
            "text": "At a graphic design firm"
          },
          {
            "label": "D",
            "text": "At a news Web site"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q90",
        "text": "What is the speaker concerned about?",
        "options": [
          {
            "label": "A",
            "text": "Addressing a customer complaint"
          },
          {
            "label": "B",
            "text": "Keeping up with competitors"
          },
          {
            "label": "C",
            "text": "Exceeding an annual budget"
          },
          {
            "label": "D",
            "text": "Improving employee productivity"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q91",
        "text": "What does the speaker imply when he says, “we have technology interns starting next week”?",
        "options": [
          {
            "label": "A",
            "text": "A task must be finished soon."
          },
          {
            "label": "B",
            "text": "An assignment should be delayed."
          },
          {
            "label": "C",
            "text": "Volunteers are needed to greet interns."
          },
          {
            "label": "D",
            "text": "Interns can assist with a new project."
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Au: OK, let's get started-there's a lot to cover! First, I want to thank the Web design team for joining this weekly check-in of our editorial staff and reporters. An online organization like ours relies heavily on the support of its design and technical staff. Today I'd like to discuss adding a section to the site that features our most popular news stories. Many other news sites already have a popular stories section. I'm concerned that we're not keeping up with them, and it could affect our readership. Now, I realize you're all busy, but I don't think this will involve too much work. Plus, remember, we have technology interns starting next week."
  },
  {
    "testId": 4,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "Where is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "At a public library"
          },
          {
            "label": "B",
            "text": "At a history museum"
          },
          {
            "label": "C",
            "text": "At a community center"
          },
          {
            "label": "D",
            "text": "At a sports arena"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q93",
        "text": "What will happen next week?",
        "options": [
          {
            "label": "A",
            "text": "A new exhibit will be set up."
          },
          {
            "label": "B",
            "text": "A fund-raiser will take place."
          },
          {
            "label": "C",
            "text": "A local election will be held."
          },
          {
            "label": "D",
            "text": "A construction project will begin."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q94",
        "text": "What are visitors encouraged to do?",
        "options": [
          {
            "label": "A",
            "text": "Park on a side street"
          },
          {
            "label": "B",
            "text": "Wear ear protection"
          },
          {
            "label": "C",
            "text": "Donate money"
          },
          {
            "label": "D",
            "text": "Take photographs"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "M-Cn: Hello. This is Jie Liu, reporting live from the Benton Public Library. Starting next week, the library will be undergoing major renovations. A new section will be added to the east side of this building. The addition will include a larger children's section and a computer lab. The library will be open during the renovations, though you may want to bring earplugs to wear. Susan Anderson, the head librarian, warns that the construction will be noisy. And now, back to the studio."
  },
  {
    "testId": 4,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "Where is the announcement being made?",
        "options": [
          {
            "label": "A",
            "text": "At a supermarket"
          },
          {
            "label": "B",
            "text": "At a clothing store"
          },
          {
            "label": "C",
            "text": "At an office supply store"
          },
          {
            "label": "D",
            "text": "At a home garden center"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which lane is the express lane?",
        "options": [
          {
            "label": "A",
            "text": "Lane 1"
          },
          {
            "label": "B",
            "text": "Lane 2"
          },
          {
            "label": "C",
            "text": "Lane 3"
          },
          {
            "label": "D",
            "text": "Lane 4"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q97",
        "text": "According to the speaker, what can the listeners receive assistance with?",
        "options": [
          {
            "label": "A",
            "text": "Checking a price"
          },
          {
            "label": "B",
            "text": "Moving large items"
          },
          {
            "label": "C",
            "text": "Getting a refund"
          },
          {
            "label": "D",
            "text": "Locating some merchandise"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Br: Attention shoppers! Thanks for coming to Link Office Superstore's annual sale. We offer the best prices in town on office supplies, desks, and chairs. There are a lot of people here for our special deals today, so lines for the cashiers are rather long. To help speed up the checkout process, please use the express lane located near the exit if you're buying five items or fewer. Also, if you're purchasing a large item and need help moving it, just let one of the employees know and they'll help you bring the item to your vehicle."
  },
  {
    "testId": 4,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A musician"
          },
          {
            "label": "B",
            "text": "An actor"
          },
          {
            "label": "C",
            "text": "A writing instructor"
          },
          {
            "label": "D",
            "text": "An art teacher"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q99",
        "text": "What are the listeners asked to do?",
        "options": [
          {
            "label": "A",
            "text": "Arrive early"
          },
          {
            "label": "B",
            "text": "Help clean an area"
          },
          {
            "label": "C",
            "text": "Silence mobile phones"
          },
          {
            "label": "D",
            "text": "Provide feedback"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q100",
        "text": "Look at the graphic. On which date will there be a special guest?",
        "options": [
          {
            "label": "A",
            "text": "June 7"
          },
          {
            "label": "B",
            "text": "June 9"
          },
          {
            "label": "C",
            "text": "June 13"
          },
          {
            "label": "D",
            "text": "June 15"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Cn: Thanks for coming to today's painting class at the Lightdale Community Center. I hope you enjoyed learning some of the techniques I showed you. If you could collect your brushes and paints and leave them right here on this table, it'll make my cleanup easier. And before you go, I want to remind everyone about the other great events here at the center. There's a copy of the schedule at the door. I recommend the Mystery Book Club meeting, because there will be a special guest that night-the author Gerard Messina will be reading from his latest novel."
  },
  {
    "testId": 5,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "What is most likely being advertised?",
        "options": [
          {
            "label": "A",
            "text": "A convention center"
          },
          {
            "label": "B",
            "text": "A restaurant"
          },
          {
            "label": "C",
            "text": "A supermarket"
          },
          {
            "label": "D",
            "text": "A shipping company"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q72",
        "text": "What is the business famous for?",
        "options": [
          {
            "label": "A",
            "text": "Its prices"
          },
          {
            "label": "B",
            "text": "Its location"
          },
          {
            "label": "C",
            "text": "Its history"
          },
          {
            "label": "D",
            "text": "Its staff"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q73",
        "text": "What does the speaker say is on a Web site?",
        "options": [
          {
            "label": "A",
            "text": "Some catering options"
          },
          {
            "label": "B",
            "text": "Some driving directions"
          },
          {
            "label": "C",
            "text": "Current discounts"
          },
          {
            "label": "D",
            "text": "Business hours"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Are you looking for a location to host your next company event? Well, look no further than Mirelli's. 71 With our delicious food and private dining rooms, Mirelli's is the perfect place for everything from small to large business gatherings. But that's not the only reason to choose Mirelli's. 72 We're famous for our friendly waitstaff. They are always ready to help! Planning to hold an event with food at your office? No problem—we'll bring the food to you. 73 You can view our catering packages on our Web site."
  },
  {
    "testId": 5,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Product developers"
          },
          {
            "label": "B",
            "text": "Investment bankers"
          },
          {
            "label": "C",
            "text": "Book publishers"
          },
          {
            "label": "D",
            "text": "Building contractors"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q75",
        "text": "What does the speaker say is favorable about a contract?",
        "options": [
          {
            "label": "A",
            "text": "There is 24-hour service call availability."
          },
          {
            "label": "B",
            "text": "There is an extended warranty."
          },
          {
            "label": "C",
            "text": "There is an immediate payment."
          },
          {
            "label": "D",
            "text": "There is a low interest rate."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q76",
        "text": "What does the speaker imply when he says, \"I'll send you the document later\"?",
        "options": [
          {
            "label": "A",
            "text": "He is having computer problems."
          },
          {
            "label": "B",
            "text": "He wants the listeners' opinions."
          },
          {
            "label": "C",
            "text": "He has missed a deadline."
          },
          {
            "label": "D",
            "text": "He is almost finished with some work."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "74 I have an update about the video game you've been working hard to develop. As you know, we'll be partnering with a video game publishing company to get our product on the market. 75 I just received their initial contract. And I'm pleased to say, the terms they are proposing are quite favorable—we're promised a payment as soon as we sign on. 76 Our legal team wants to make sure the programmers are happy before they negotiate some other provisions in the contract. I'll send you the document later."
  },
  {
    "testId": 5,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "Where is the tour taking place?",
        "options": [
          {
            "label": "A",
            "text": "At an art gallery"
          },
          {
            "label": "B",
            "text": "At a construction site"
          },
          {
            "label": "C",
            "text": "At a solar-panel factory"
          },
          {
            "label": "D",
            "text": "At a car-part warehouse"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q78",
        "text": "What does the speaker remind the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Wear protective hats"
          },
          {
            "label": "B",
            "text": "Follow posted signs"
          },
          {
            "label": "C",
            "text": "Stay together as a group"
          },
          {
            "label": "D",
            "text": "Store personal belongings"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q79",
        "text": "What will the listeners see first on the tour?",
        "options": [
          {
            "label": "A",
            "text": "A map of the grounds"
          },
          {
            "label": "B",
            "text": "An informational video"
          },
          {
            "label": "C",
            "text": "Some product models"
          },
          {
            "label": "D",
            "text": "Some historic photographs"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "77 Thank you for joining me on this tour of our solar panel manufacturing plant. Here at Nature's Solar Energy, Incorporated, we believe our customers should have the chance to see the production of the solar panels that power their homes and businesses. Before we begin, I want to remind you about our main safety rule. 78 Make sure you wear the hard hats we provided and keep them on at all times. OK, 79 our first stop will be in the showroom. I'll show you the latest models of our solar panels so you understand exactly how they work."
  },
  {
    "testId": 5,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "What is the focus of the episode?",
        "options": [
          {
            "label": "A",
            "text": "Improving training programs"
          },
          {
            "label": "B",
            "text": "Changing careers"
          },
          {
            "label": "C",
            "text": "Designing Web sites"
          },
          {
            "label": "D",
            "text": "Increasing sales"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q81",
        "text": "What does the speaker say is important?",
        "options": [
          {
            "label": "A",
            "text": "Complying with industry regulations"
          },
          {
            "label": "B",
            "text": "Emphasizing transferable skills"
          },
          {
            "label": "C",
            "text": "Offering promotional discounts"
          },
          {
            "label": "D",
            "text": "Attending networking events"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q82",
        "text": "Who is So-Hee Chung?",
        "options": [
          {
            "label": "A",
            "text": "A company executive"
          },
          {
            "label": "B",
            "text": "A government official"
          },
          {
            "label": "C",
            "text": "A news reporter"
          },
          {
            "label": "D",
            "text": "A financial analyst"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Thanks for tuning in to Business World! 80 On today's episode, we'll be taking a deep dive into the topic of making a career change. Transitioning to a new industry can be challenging. 81 It's important to highlight any transferable skills you have to offer. What abilities do you currently possess that could be useful in a new role, and how can you promote them on professional networking sites? To help us explore this, 82 So-Hee Chung, chief executive officer of the popular job search app, Zantage, is joining us in the studio today. Welcome, So-Hee."
  },
  {
    "testId": 5,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "What is the message mainly about?",
        "options": [
          {
            "label": "A",
            "text": "Scheduling auditions"
          },
          {
            "label": "B",
            "text": "Purchasing tickets"
          },
          {
            "label": "C",
            "text": "Designing a set"
          },
          {
            "label": "D",
            "text": "Revising a script"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q84",
        "text": "Why does the speaker say, \"we have a large team\"?",
        "options": [
          {
            "label": "A",
            "text": "To make a complaint"
          },
          {
            "label": "B",
            "text": "To provide reassurance"
          },
          {
            "label": "C",
            "text": "To express surprise"
          },
          {
            "label": "D",
            "text": "To refuse an offer"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q85",
        "text": "Why is the speaker unable to meet tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Her car needs repairs."
          },
          {
            "label": "B",
            "text": "She is moving to a new apartment."
          },
          {
            "label": "C",
            "text": "She is going hiking."
          },
          {
            "label": "D",
            "text": "She is visiting family."
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "Hello, 83 this is Adriana Ortiz... set designer from the Summer Theater. We met last week. 83 Since you're directing the new play we're featuring, I'd like to get together to discuss some ideas I have. I've read the script and started sketching possible backgrounds we could use. 84 You mentioned being concerned about the short amount of time we have for creating a set. Well, we have a large team. And there are lots of props in storage. 85 I'm going out of town to see some relatives tomorrow, but if you're free to meet this weekend, my schedule's flexible then."
  },
  {
    "testId": 5,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Board members"
          },
          {
            "label": "B",
            "text": "Government officials"
          },
          {
            "label": "C",
            "text": "Clients"
          },
          {
            "label": "D",
            "text": "Interns"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q87",
        "text": "What did the listeners receive?",
        "options": [
          {
            "label": "A",
            "text": "An event ticket"
          },
          {
            "label": "B",
            "text": "An information packet"
          },
          {
            "label": "C",
            "text": "A project invoice"
          },
          {
            "label": "D",
            "text": "An annual report"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q88",
        "text": "According to the speaker, what will the listeners do in an hour?",
        "options": [
          {
            "label": "A",
            "text": "Have lunch"
          },
          {
            "label": "B",
            "text": "Join a conference call"
          },
          {
            "label": "C",
            "text": "Get security badges"
          },
          {
            "label": "D",
            "text": "Take a building tour"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Welcome to Cornerway Industries. 86 I'm Sunita Yadav, Coordinator of the Internship Program. I'm sure you'll find your summer experience here rewarding! Before we begin the first training session, we have to take care of some administrative matters. 87 As you entered the room, you received a packet of documents. It includes information about logging into your e-mail and submitting time sheets. I'll briefly go over those procedures now. Then, 88 in an hour, you'll head to the security office to get identification badges. You'll need those to enter and exit the building."
  },
  {
    "testId": 5,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What did the speaker do last month?",
        "options": [
          {
            "label": "A",
            "text": "She relocated to another building."
          },
          {
            "label": "B",
            "text": "She hired additional employees."
          },
          {
            "label": "C",
            "text": "She organized a luncheon."
          },
          {
            "label": "D",
            "text": "She attended a conference."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q90",
        "text": "What do some customers have trouble locating?",
        "options": [
          {
            "label": "A",
            "text": "Delivery schedules"
          },
          {
            "label": "B",
            "text": "Password requirements"
          },
          {
            "label": "C",
            "text": "Contact information"
          },
          {
            "label": "D",
            "text": "Account archives"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q91",
        "text": "What will the speaker do next?",
        "options": [
          {
            "label": "A",
            "text": "Give a demonstration"
          },
          {
            "label": "B",
            "text": "Introduce a guest"
          },
          {
            "label": "C",
            "text": "Distribute some documents"
          },
          {
            "label": "D",
            "text": "Hand out some awards"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "89 Last month, I went to a conference that allowed me the opportunity to meet other small business owners from the region and have discussions with them. A number of helpful ideas were exchanged. For example, 90 several speakers pointed out that it can be difficult for customers to navigate corporate Web sites, especially when looking for information like a phone number they can call when they need service. I've asked the IT department to redesign our Web site to make it more navigable. 91 If you'll look up here, I'll demonstrate the new layout that'll go live in a few weeks."
  },
  {
    "testId": 5,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "Who is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A real-estate developer"
          },
          {
            "label": "B",
            "text": "A city official"
          },
          {
            "label": "C",
            "text": "A history professor"
          },
          {
            "label": "D",
            "text": "A television reporter"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q93",
        "text": "What happened last year in Madison?",
        "options": [
          {
            "label": "A",
            "text": "An international hotel convention was held."
          },
          {
            "label": "B",
            "text": "A national sports event was hosted."
          },
          {
            "label": "C",
            "text": "A documentary movie was filmed."
          },
          {
            "label": "D",
            "text": "A historic landmark was named."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q94",
        "text": "Why does the speaker say, \"Those roads weren't designed for traffic\"?",
        "options": [
          {
            "label": "A",
            "text": "To make a complaint"
          },
          {
            "label": "B",
            "text": "To show surprise"
          },
          {
            "label": "C",
            "text": "To express concern"
          },
          {
            "label": "D",
            "text": "To offer an apology"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Thank you all for coming to this town hall meeting. 92 I'm the mayor of Madison, and the first topic on our agenda is tourism. 93 We're all very excited that the documentary about our historic town center, which was filmed here last year, is a box office success! My office has already received hundreds of inquiries from travel agencies around the world asking about hotel capacity and tour buses—good news for local businesses. However, 94 some people are wondering about the damage that the influx of tourists on their streets may cause. And they do have a point. Those roads weren't designed for traffic."
  },
  {
    "testId": 5,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "According to the speaker, what will happen this Friday?",
        "options": [
          {
            "label": "A",
            "text": "A delivery will arrive."
          },
          {
            "label": "B",
            "text": "A holiday sale will begin."
          },
          {
            "label": "C",
            "text": "An employee will retire."
          },
          {
            "label": "D",
            "text": "An author will visit."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which aisle does the speaker direct the listeners to?",
        "options": [
          {
            "label": "A",
            "text": "Aisle 1"
          },
          {
            "label": "B",
            "text": "Aisle 2"
          },
          {
            "label": "C",
            "text": "Aisle 3"
          },
          {
            "label": "D",
            "text": "Aisle 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q97",
        "text": "What can the listeners win?",
        "options": [
          {
            "label": "A",
            "text": "A gift card"
          },
          {
            "label": "B",
            "text": "A book"
          },
          {
            "label": "C",
            "text": "A free membership"
          },
          {
            "label": "D",
            "text": "A calendar"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "Attention, book lovers! The Regal Reader bookstore is excited to announce the beginning of its summer author series. 95 Join us this Friday when renowned author Karima Samir will visit the store to read from her books, sign copies, and chat with customers. 96 Stop by our history aisle to find her latest book about fascinating North Africa. And 97 make sure you enter our annual drawing while you're here to win a five-dollar gift card for our café! Use it to purchase any of our freshly brewed coffees or homemade pastries."
  },
  {
    "testId": 5,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Where does the speaker most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a boat dock"
          },
          {
            "label": "B",
            "text": "At an auto repair shop"
          },
          {
            "label": "C",
            "text": "At a warehouse"
          },
          {
            "label": "D",
            "text": "At a job training school"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q99",
        "text": "What will the speaker's department be doing at the end of the month?",
        "options": [
          {
            "label": "A",
            "text": "Fixing some equipment"
          },
          {
            "label": "B",
            "text": "Attending a trade show"
          },
          {
            "label": "C",
            "text": "Interviewing job candidates"
          },
          {
            "label": "D",
            "text": "Preparing a large order"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q100",
        "text": "Look at the graphic. Which session does the man request to attend?",
        "options": [
          {
            "label": "A",
            "text": "January 14"
          },
          {
            "label": "B",
            "text": "January 23"
          },
          {
            "label": "C",
            "text": "January 26"
          },
          {
            "label": "D",
            "text": "January 31"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "Hello Ms. Kapoor. My name's Mark Giordano. 98 I'm a forklift operator in the Shipping Department. I'm calling because I'm supposed to complete the training session on refueling equipment, but I need to change my date. I signed up for the session on January twenty-third, but 99 our department just received notice that a large order will ship out at the end of the month. I'll have a lot of work to do earlier in the day all month, so 100 I can only attend the session that starts at three P.M. Could you reschedule me? Please let me know."
  },
  {
    "testId": 6,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "Why has the Movie Night event been rescheduled?",
        "options": [
          {
            "label": "A",
            "text": "A projector is not available."
          },
          {
            "label": "B",
            "text": "A nearby road is being repaired."
          },
          {
            "label": "C",
            "text": "The space is double booked."
          },
          {
            "label": "D",
            "text": "The event organizer is ill."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q72",
        "text": "When will the event be held?",
        "options": [
          {
            "label": "A",
            "text": "Tomorrow"
          },
          {
            "label": "B",
            "text": "This weekend"
          },
          {
            "label": "C",
            "text": "In two weeks"
          },
          {
            "label": "D",
            "text": "In one month"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q73",
        "text": "How can the listener request a refund?",
        "options": [
          {
            "label": "A",
            "text": "By mailing a ticket"
          },
          {
            "label": "B",
            "text": "By visiting an office"
          },
          {
            "label": "C",
            "text": "By completing an online form"
          },
          {
            "label": "D",
            "text": "By making a phone call"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br Hello. This is the Chesterfield Community Center. 71 We're calling to inform you about a change to our Movie Night event, originally planned for this Tuesday. Unfortunately, another event had been booked at the community center for the same day. As a result, 72 Movie Night has been rescheduled for this upcoming weekend, at nine P.M. on Saturday. If you're no longer able to attend, we're happy to refund your ticket. 73 You can request this refund by calling our office at 555-0126."
  },
  {
    "testId": 6,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A park ranger"
          },
          {
            "label": "B",
            "text": "A travel agent"
          },
          {
            "label": "C",
            "text": "A landscaper"
          },
          {
            "label": "D",
            "text": "A building inspector"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q75",
        "text": "What are the listeners asked to check for?",
        "options": [
          {
            "label": "A",
            "text": "Expired identification cards"
          },
          {
            "label": "B",
            "text": "Local construction regulations"
          },
          {
            "label": "C",
            "text": "Hazardous outdoor conditions"
          },
          {
            "label": "D",
            "text": "Sudden price increases"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q76",
        "text": "What does the speaker distribute?",
        "options": [
          {
            "label": "A",
            "text": "Maps"
          },
          {
            "label": "B",
            "text": "Uniforms"
          },
          {
            "label": "C",
            "text": "Visitor passes"
          },
          {
            "label": "D",
            "text": "Employee handbooks"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Am 74 Welcome to Canyon River National Park. I'm Marisol, and I'll be training you in your new role as park rangers. Each of you will be assigned one area of the park. Your duties will vary, but 75 one task you need to complete every day is to check your assigned area for hazardous conditions. For example, if you come across any fallen branches blocking the trails or roadways, you need to report them right away. Now-before I show you the grounds, 76 let me give you your uniforms. Please make sure that you wear them at all times on the premises."
  },
  {
    "testId": 6,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "Who is the speaker addressing?",
        "options": [
          {
            "label": "A",
            "text": "Potential investors"
          },
          {
            "label": "B",
            "text": "Tourists"
          },
          {
            "label": "C",
            "text": "Staff members"
          },
          {
            "label": "D",
            "text": "Job applicants"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q78",
        "text": "Why does the speaker say, \"This is only a trial period\"?",
        "options": [
          {
            "label": "A",
            "text": "To correct a colleague's statement"
          },
          {
            "label": "B",
            "text": "To apologize for a meeting conflict"
          },
          {
            "label": "C",
            "text": "To express surprise about a policy"
          },
          {
            "label": "D",
            "text": "To encourage the listeners to remain productive"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q79",
        "text": "What will the speaker do later?",
        "options": [
          {
            "label": "A",
            "text": "Send a document"
          },
          {
            "label": "B",
            "text": "Make a phone call"
          },
          {
            "label": "C",
            "text": "Leave for a business trip"
          },
          {
            "label": "D",
            "text": "Introduce some managers"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Au Hi, everyone. 77 I'm excited to announce that we're going to try out a change to our work arrangements. Staff will be able to work from home one day a week. Whenever you do work from home, you must be reachable by phone and e-mail during our business hours. Now, I know many of you have asked for this change for a long time. 78 You should know that Human Resources will be monitoring productivity to determine whether these new work arrangements are a good idea. This is only a trial period. 79 I'll be sending you a policy document that will explain everything in detail. Check your e-mail later today."
  },
  {
    "testId": 6,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "According to the speaker, what is causing traffic?",
        "options": [
          {
            "label": "A",
            "text": "Some bad weather"
          },
          {
            "label": "B",
            "text": "Some construction projects"
          },
          {
            "label": "C",
            "text": "A sporting event"
          },
          {
            "label": "D",
            "text": "A city festival"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q81",
        "text": "Why should the listeners call the radio station?",
        "options": [
          {
            "label": "A",
            "text": "To ask a question"
          },
          {
            "label": "B",
            "text": "To request a song"
          },
          {
            "label": "C",
            "text": "To win some tickets"
          },
          {
            "label": "D",
            "text": "To sign up as a volunteer"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q82",
        "text": "What does the speaker say will be broadcast later?",
        "options": [
          {
            "label": "A",
            "text": "An interview"
          },
          {
            "label": "B",
            "text": "A political debate"
          },
          {
            "label": "C",
            "text": "A comedy show"
          },
          {
            "label": "D",
            "text": "A concert"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn Welcome to the KXS Radio afternoon update. 80 The traffic is heavy this afternoon because of the season's opening game at the baseball stadium. But the good news is, 81 we're giving away tickets to next week's game! Call our radio station for a chance to win. The sixth caller will win the tickets! And 82 after today's game, we will have an exclusive interview with the coach of our city's baseball team. Stay tuned!"
  },
  {
    "testId": 6,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "What is the talk mainly about?",
        "options": [
          {
            "label": "A",
            "text": "A business opening"
          },
          {
            "label": "B",
            "text": "A company anniversary"
          },
          {
            "label": "C",
            "text": "A new advertising service"
          },
          {
            "label": "D",
            "text": "A renovation project"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q84",
        "text": "What does the speaker mean when she says, \"several local business leaders will be here tonight\"?",
        "options": [
          {
            "label": "A",
            "text": "Extra staff is needed."
          },
          {
            "label": "B",
            "text": "An event will be televised."
          },
          {
            "label": "C",
            "text": "A larger venue should be reserved."
          },
          {
            "label": "D",
            "text": "Employees should provide good service."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q85",
        "text": "What does the speaker ask some of the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Arrive early"
          },
          {
            "label": "B",
            "text": "Check a schedule"
          },
          {
            "label": "C",
            "text": "Hand out some surveys"
          },
          {
            "label": "D",
            "text": "Consult a manager about problems"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Br Good evening, everyone. 83 Tonight's event is very important for our restaurant. To prepare for our official grand opening next week, we've invited people from neighboring businesses here. 84 This is a great opportunity to get some feedback on our service and menu. Remember, several local business leaders will be here tonight. As you know, word-of-mouth recommendations are our best advertising tool. Hosts, 85 I'd like you to distribute surveys to guests after their meals. Any feedback they have for us will help make this restaurant a success."
  },
  {
    "testId": 6,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Why does the speaker say, \"I couldn't find a later flight\"?",
        "options": [
          {
            "label": "A",
            "text": "To refuse an invitation"
          },
          {
            "label": "B",
            "text": "To apologize for an inconvenience"
          },
          {
            "label": "C",
            "text": "To suggest canceling a trip"
          },
          {
            "label": "D",
            "text": "To ask for help"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q87",
        "text": "Who most likely is Adriana Lopez?",
        "options": [
          {
            "label": "A",
            "text": "A repair technician"
          },
          {
            "label": "B",
            "text": "An airline pilot"
          },
          {
            "label": "C",
            "text": "An administrative assistant"
          },
          {
            "label": "D",
            "text": "A city official"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q88",
        "text": "What does the speaker say the listener will receive?",
        "options": [
          {
            "label": "A",
            "text": "A client file"
          },
          {
            "label": "B",
            "text": "A list of restaurants"
          },
          {
            "label": "C",
            "text": "Some log-in credentials"
          },
          {
            "label": "D",
            "text": "Some promotional materials"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Au Hi, Madoka. I'm calling you about some details of your trip to London next week. 86 Your flight is on Monday morning at... uh... four A.M. I couldn't find a later flight. 87 Adriana Lopez from the London office will meet you at the airport. She's my counterpart over there. Adriana will assist with your local itinerary and has already booked your hotel. Oh, and one last thing... since this is your first trip since joining our company, 88 you'll soon be receiving log-in credentials for a travel expense tracking application. You can download the app on your phone and load your receipts onto it."
  },
  {
    "testId": 6,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What is the topic of the seminar?",
        "options": [
          {
            "label": "A",
            "text": "Choosing an advertising strategy"
          },
          {
            "label": "B",
            "text": "Finding investors"
          },
          {
            "label": "C",
            "text": "Leading focus groups"
          },
          {
            "label": "D",
            "text": "Creating a budget"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q90",
        "text": "What does the speaker recommend the listeners do first?",
        "options": [
          {
            "label": "A",
            "text": "Get employee input"
          },
          {
            "label": "B",
            "text": "Hire a consultant"
          },
          {
            "label": "C",
            "text": "Revise a plan"
          },
          {
            "label": "D",
            "text": "Make a list"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q91",
        "text": "What will most likely happen next?",
        "options": [
          {
            "label": "A",
            "text": "A video will be shown."
          },
          {
            "label": "B",
            "text": "Information packets will be distributed."
          },
          {
            "label": "C",
            "text": "Some questions will be answered."
          },
          {
            "label": "D",
            "text": "There will be a lunch break."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Cn 89 Welcome to this seminar, which focuses on one of the most challenging aspects of starting a new business-locating investors. Without start-up funds, your business may never get off the ground. 90 As a first step, I suggest compiling a list of firms that specialize in investing in your industry. But there's much more to know, of course. Maryam Farooq, founder of multiple information technology companies, has been particularly good at securing investment funding. 91 She's here to answer questions and break down how she did it."
  },
  {
    "testId": 6,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "What is the purpose of the meeting?",
        "options": [
          {
            "label": "A",
            "text": "To celebrate a recent contract"
          },
          {
            "label": "B",
            "text": "To explain a new sales strategy"
          },
          {
            "label": "C",
            "text": "To introduce a new employee"
          },
          {
            "label": "D",
            "text": "To address employee concerns"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q93",
        "text": "What is causing a delay?",
        "options": [
          {
            "label": "A",
            "text": "A computer is being set up."
          },
          {
            "label": "B",
            "text": "A microphone stopped working."
          },
          {
            "label": "C",
            "text": "Some additional chairs are needed."
          },
          {
            "label": "D",
            "text": "The speaker misplaced some notes."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q94",
        "text": "What are the listeners encouraged to sign up for?",
        "options": [
          {
            "label": "A",
            "text": "A staff feedback session"
          },
          {
            "label": "B",
            "text": "A conference presentation"
          },
          {
            "label": "C",
            "text": "A health initiative"
          },
          {
            "label": "D",
            "text": "A mentoring program"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br Today's sales meeting is packed to capacity, and for good reason. 92 Gerard has delivered on his promise to craft a new strategy that'll enable us to broaden our market share in the Scandinavian region. As you'll soon see, his four-step approach is going to be critical to increasing our sales. 93 Looks like he'll need a few minutes to get his computer up and running. So while we wait, 94 let me remind you about the mentoring program that management is implementing. It provides an opportunity to guide our new employees during their transitional period. 94 We need seasoned staff to participate as mentors, so be sure to sign up!"
  },
  {
    "testId": 6,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "What type of event will take place on Friday?",
        "options": [
          {
            "label": "A",
            "text": "A retirement party"
          },
          {
            "label": "B",
            "text": "A graduation celebration"
          },
          {
            "label": "C",
            "text": "A cooking competition"
          },
          {
            "label": "D",
            "text": "An award ceremony"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which discount will be applied?",
        "options": [
          {
            "label": "A",
            "text": "10%"
          },
          {
            "label": "B",
            "text": "15%"
          },
          {
            "label": "C",
            "text": "20%"
          },
          {
            "label": "D",
            "text": "25%"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q97",
        "text": "What does the speaker ask the listener?",
        "options": [
          {
            "label": "A",
            "text": "Who will decorate a space"
          },
          {
            "label": "B",
            "text": "What type of gift will be purchased"
          },
          {
            "label": "C",
            "text": "If an event should be rescheduled"
          },
          {
            "label": "D",
            "text": "If an order has been placed"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Am Hey, Hassan. It's Emiko. 95I'm calling about the retirement party we're planning for Dmitry next Friday. Everyone from the accounting department is coming plus a few from sales, so 96 we'll have a total of ten people. I made the reservation at the barbecue restaurant and even found a coupon that'll save us a lot of money since we have such a big group. Uh... 97 did you place the cake order with the bakery yet? Dmitry said he loves strawberry cake, and I want his retirement party to be perfect."
  },
  {
    "testId": 6,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Look at the graphic. Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "William Schmidt"
          },
          {
            "label": "B",
            "text": "Paul Cohen"
          },
          {
            "label": "C",
            "text": "Jung-Soo Park"
          },
          {
            "label": "D",
            "text": "Santiago Reyes"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q99",
        "text": "According to the speaker, what is different about a program this year?",
        "options": [
          {
            "label": "A",
            "text": "A list of organizations is longer."
          },
          {
            "label": "B",
            "text": "A deadline has been extended."
          },
          {
            "label": "C",
            "text": "More employees are assigned to help."
          },
          {
            "label": "D",
            "text": "An operating budget has been increased."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q100",
        "text": "What will the speaker make available to the listeners?",
        "options": [
          {
            "label": "A",
            "text": "A research report"
          },
          {
            "label": "B",
            "text": "A training video"
          },
          {
            "label": "C",
            "text": "A magazine article"
          },
          {
            "label": "D",
            "text": "A corporate calendar"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Cn 98I want to talk about our company's charitable giving program. As you know, employees can make a donation to an approved organization, and the company will match that amount. 99This year, we've expanded our list of approved organizations from 15 to 25. We've selected organizations in the community that will benefit the most from our contributions. And 100 our company has been recognized for its philanthropy. In fact, it was featured last month in an article in the magazine Business Effect. I'll post a link to that on our Web site after this meeting."
  },
  {
    "testId": 7,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "Why is the speaker calling?",
        "options": [
          {
            "label": "A",
            "text": "To explain a schedule change"
          },
          {
            "label": "B",
            "text": "To discuss an upcoming conference"
          },
          {
            "label": "C",
            "text": "To request approval for an expense"
          },
          {
            "label": "D",
            "text": "To confirm an e-mail address"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q72",
        "text": "What does the speaker say about a job candidate?",
        "options": [
          {
            "label": "A",
            "text": "He requires additional training."
          },
          {
            "label": "B",
            "text": "He has good references."
          },
          {
            "label": "C",
            "text": "He speaks several languages."
          },
          {
            "label": "D",
            "text": "He does not live in the area."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q73",
        "text": "What did the speaker send in an e-mail?",
        "options": [
          {
            "label": "A",
            "text": "A résumé"
          },
          {
            "label": "B",
            "text": "A cost estimate"
          },
          {
            "label": "C",
            "text": "A meeting agenda"
          },
          {
            "label": "D",
            "text": "A tour itinerary"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Am Hi, Kavi. This is Anna. I just got off the phone with a candidate for the strategy director position. 71 I'd like to bring him in for an interview, but I want to check with you about the cost. Will you approve travel expenses for him to come here? 72 He doesn't live locally-he'd be flying in from Chicago. I'd like to make these arrangements quickly, if possible. 73I just e-mailed you a cost estimate. Can you let me know what you think?"
  },
  {
    "testId": 7,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "Where are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "In an airport"
          },
          {
            "label": "B",
            "text": "On a train"
          },
          {
            "label": "C",
            "text": "At a theater"
          },
          {
            "label": "D",
            "text": "On a ferry"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q75",
        "text": "What are the listeners with e-tickets asked to do?",
        "options": [
          {
            "label": "A",
            "text": "Check their seat numbers"
          },
          {
            "label": "B",
            "text": "Increase their screen's brightness"
          },
          {
            "label": "C",
            "text": "Come to the front of the line"
          },
          {
            "label": "D",
            "text": "Download a mobile application"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q76",
        "text": "Why does the speaker say, \"you shouldn’t leave any belongings on the seat next to you\"?",
        "options": [
          {
            "label": "A",
            "text": "To ask the listeners to clear space"
          },
          {
            "label": "B",
            "text": "To remind the listeners about forgotten items"
          },
          {
            "label": "C",
            "text": "To explain safety regulations"
          },
          {
            "label": "D",
            "text": "To clarify the checked baggage policy"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Au 74 Attention, passengers. The conductor will soon make his way through the train to check tickets. Please have them ready. 75 If you have an e-ticket on your smartphone, please make sure you set your screen brightness to high. The conductor will be using an electronic scanner to read the tickets, and the scanner won't be able to read your ticket code if the light on your phone's screen is too low. Also, 76this is a fully booked train, so you shouldn't leave any belongings on the seat next to you."
  },
  {
    "testId": 7,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "Why is the speaker calling?",
        "options": [
          {
            "label": "A",
            "text": "To reschedule an inspection"
          },
          {
            "label": "B",
            "text": "To request a demonstration"
          },
          {
            "label": "C",
            "text": "To book a vacation package"
          },
          {
            "label": "D",
            "text": "To change an order"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q78",
        "text": "What has the speaker’s company recently done?",
        "options": [
          {
            "label": "A",
            "text": "It changed its hours of operation."
          },
          {
            "label": "B",
            "text": "It hired additional staff."
          },
          {
            "label": "C",
            "text": "It moved to a new location."
          },
          {
            "label": "D",
            "text": "It started a health program."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q79",
        "text": "What does the speaker encourage the listener to do?",
        "options": [
          {
            "label": "A",
            "text": "Display some products"
          },
          {
            "label": "B",
            "text": "Offer some coupons"
          },
          {
            "label": "C",
            "text": "Create a handbook"
          },
          {
            "label": "D",
            "text": "Expedite a delivery"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Br Hello, my name's Darya, and 77I heard a radio advertisement about your bicycle shop. It said that you offer bicycle repair demonstrations. Would you consider doing that at a corporate health fair? 78 My company recently launched a new health initiative, and one thing we'd like to do is encourage employees to cycle to work. We'd provide you with a booth, and you'd bring the bike and tools. 79I also encourage you to bring some cycling accessories-such as helmets and water bottles-to display."
  },
  {
    "testId": 7,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "Where do the listeners most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a health food store"
          },
          {
            "label": "B",
            "text": "At a restaurant"
          },
          {
            "label": "C",
            "text": "At a spice factory"
          },
          {
            "label": "D",
            "text": "At a vegetable farm"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q81",
        "text": "What are the listeners preparing for today?",
        "options": [
          {
            "label": "A",
            "text": "A seasonal sale"
          },
          {
            "label": "B",
            "text": "A cooking class"
          },
          {
            "label": "C",
            "text": "A baking contest"
          },
          {
            "label": "D",
            "text": "A grand opening"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q82",
        "text": "Who is Ingrid Vogel?",
        "options": [
          {
            "label": "A",
            "text": "A newspaper journalist"
          },
          {
            "label": "B",
            "text": "A health inspector"
          },
          {
            "label": "C",
            "text": "A famous chef"
          },
          {
            "label": "D",
            "text": "An interior decorator"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn 80 So, this meeting is for everyone-cooks, servers, hosts, cleaners-because we all need to work together as a team. Today is an important day. So, first of all, 81 thank you all for coming in extra early to help prepare for our grand opening. I appreciate it. Second thing I'd like to mention: 82 tomorrow, a journalist from the local newspaper-her name is Ingrid Vogel-has made a reservation for six o'clock. Ms. Vogel will be writing an article about her experience here and rating the food we serve, so take good care of her. A positive review in the paper will definitely be good for future business."
  },
  {
    "testId": 7,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "Where is the tour taking place?",
        "options": [
          {
            "label": "A",
            "text": "At an art museum"
          },
          {
            "label": "B",
            "text": "At a pottery workshop"
          },
          {
            "label": "C",
            "text": "At a clothing design studio"
          },
          {
            "label": "D",
            "text": "At a glass factory"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q84",
        "text": "Why does the speaker say, \"we ship to customers all over the world\"?",
        "options": [
          {
            "label": "A",
            "text": "To reassure the listeners about a service"
          },
          {
            "label": "B",
            "text": "To explain why a storage area is large"
          },
          {
            "label": "C",
            "text": "To emphasize the popularity of some products"
          },
          {
            "label": "D",
            "text": "To make a suggestion for a gift"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q85",
        "text": "What does the speaker say is available to the listeners?",
        "options": [
          {
            "label": "A",
            "text": "An event calendar"
          },
          {
            "label": "B",
            "text": "A discount on a purchase"
          },
          {
            "label": "C",
            "text": "A subscription to a newsletter"
          },
          {
            "label": "D",
            "text": "Entry in a prize drawing"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Br 83 Welcome to this tour of Jenson Manufacturing. Our town is known for the glasswork that has been produced for centuries by the many factories here. In fact, decorative glass is still the town's main source of income. 84 While products from all the factories are known locally, we ship to customers all over the world. Today, you'll see our skilled artisans at work and learn about the history of their craft. After the tour, you may want to visit our gift shop, where you'll find many of the items produced here. 85 Be sure to hold on to your tour ticket. It qualifies you for ten percent off anything you buy today."
  },
  {
    "testId": 7,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "What is the purpose of the speaker’s organization?",
        "options": [
          {
            "label": "A",
            "text": "To advise businesses about mergers"
          },
          {
            "label": "B",
            "text": "To arrange travel for executives"
          },
          {
            "label": "C",
            "text": "To share resources with new business owners"
          },
          {
            "label": "D",
            "text": "To recruit volunteers for a research study"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q87",
        "text": "What did the listeners do on March 15?",
        "options": [
          {
            "label": "A",
            "text": "They signed some documents."
          },
          {
            "label": "B",
            "text": "They purchased some materials."
          },
          {
            "label": "C",
            "text": "They downloaded some software."
          },
          {
            "label": "D",
            "text": "They wrote some proposals."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q88",
        "text": "What will the listeners do in a few minutes?",
        "options": [
          {
            "label": "A",
            "text": "Congratulate a colleague"
          },
          {
            "label": "B",
            "text": "Vote on a policy change"
          },
          {
            "label": "C",
            "text": "Create an advertisement"
          },
          {
            "label": "D",
            "text": "Meet with mentors"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Am Welcome back, everyone. On behalf of the city's business development council, I'm pleased you could attend today's workshop for small business start-ups. Again, 86the council exists with the sole purpose of getting you the resources that you need to successfully launch your new business. So, this is the second workshop in a three-part series. 87 During our initial session on March fifteenth, you worked on constructing a careful and detailed business proposal. Those proposals you submitted were a good start. Today, 88 we're fortunate to have a number of seasoned business mentors who've volunteered their time to assist you with strategies for securing financing. In a few minutes, you'll meet with them in small groups."
  },
  {
    "testId": 7,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What does the speaker say is a top priority?",
        "options": [
          {
            "label": "A",
            "text": "Increasing product sales"
          },
          {
            "label": "B",
            "text": "Keeping quality employees"
          },
          {
            "label": "C",
            "text": "Improving worker efficiency"
          },
          {
            "label": "D",
            "text": "Lowering manufacturing costs"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q90",
        "text": "Who is Helen Liu?",
        "options": [
          {
            "label": "A",
            "text": "A company spokesperson"
          },
          {
            "label": "B",
            "text": "A human resources consultant"
          },
          {
            "label": "C",
            "text": "A digital marketing expert"
          },
          {
            "label": "D",
            "text": "A course instructor"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q91",
        "text": "Why does the speaker say, \"this affects all of us\"?",
        "options": [
          {
            "label": "A",
            "text": "To encourage participation"
          },
          {
            "label": "B",
            "text": "To congratulate a team"
          },
          {
            "label": "C",
            "text": "To discourage future errors"
          },
          {
            "label": "D",
            "text": "To apologize for a delay"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Au Now let's talk about our new initiative. 89 Retaining quality personnel is now a top priority for our company. We're hoping that competitive salaries and benefits packages will help us recruit and keep talented staff. So, 90 we recently brought in Helen Liu. Helen is a human resources consultant who'll spend the next few months helping us restructure our compensation program. 91 Currently, she's requesting staff feedback about pay and benefits. To that end, she's created a questionnaire that will be sent out later today. I know everyone's busy right now, but this affects all of us."
  },
  {
    "testId": 7,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "What is the purpose of the talk?",
        "options": [
          {
            "label": "A",
            "text": "To demonstrate a work process"
          },
          {
            "label": "B",
            "text": "To choose a job applicant"
          },
          {
            "label": "C",
            "text": "To present a marketing plan"
          },
          {
            "label": "D",
            "text": "To review some sales reports"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q93",
        "text": "What does the speaker say about the company’s current customers?",
        "options": [
          {
            "label": "A",
            "text": "They are unhappy with a service."
          },
          {
            "label": "B",
            "text": "They live mainly in cities."
          },
          {
            "label": "C",
            "text": "Many of them work in technology."
          },
          {
            "label": "D",
            "text": "Many of them are young."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q94",
        "text": "What feature of Soft-Palm 51 does the speaker emphasize?",
        "options": [
          {
            "label": "A",
            "text": "It is easy to carry."
          },
          {
            "label": "B",
            "text": "It is less expensive than expected."
          },
          {
            "label": "C",
            "text": "It is energy efficient."
          },
          {
            "label": "D",
            "text": "It is faster than previous models."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn 92I'm here from Tarmo Advertising to present the new marketing campaign my team and I propose for your electronic tablet device, Soft-Palm 51. 93 Let me begin with a recommendation, that you target a slightly older, more sophisticated age segment than you have in the past. Your products are already popular among younger customers, and Soft-Palm 51 is an opportunity to expand your brand to midcareer professionals. 94 With its compact, light design, Soft-Palm 51 has the portability that business travelers need. This is the key selling point."
  },
  {
    "testId": 7,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "What is causing a delay?",
        "options": [
          {
            "label": "A",
            "text": "A holiday parade"
          },
          {
            "label": "B",
            "text": "A broken traffic light"
          },
          {
            "label": "C",
            "text": "An icy road"
          },
          {
            "label": "D",
            "text": "A fallen tree"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q96",
        "text": "What does the speaker advise the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Take an alternate route home"
          },
          {
            "label": "B",
            "text": "Take public transportation"
          },
          {
            "label": "C",
            "text": "Drive carefully"
          },
          {
            "label": "D",
            "text": "Postpone travel"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q97",
        "text": "Look at the graphic. When will a sporting event take place?",
        "options": [
          {
            "label": "A",
            "text": "On Monday"
          },
          {
            "label": "B",
            "text": "On Tuesday"
          },
          {
            "label": "C",
            "text": "On Wednesday"
          },
          {
            "label": "D",
            "text": "On Thursday"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Am This is the six o'clock update from NCK News with Patricia Sullivan. First, the traffic report: 95 a traffic light on Samson Road isn't working, and it's causing a lengthy delay. A maintenance crew is currently fixing the light, so repairs are expected to be done within the hour. Until then, 96 taking an alternate route home is advisable. Next in weather: right now it's rainy and cold. 97 Tomorrow's weather will be excellent; we're expecting a sunny day with no chance of rain. And that's good, because our local football team plays tomorrow at noon. Stay tuned for the seven o'clock update."
  },
  {
    "testId": 7,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Librarians"
          },
          {
            "label": "B",
            "text": "Engineers"
          },
          {
            "label": "C",
            "text": "Politicians"
          },
          {
            "label": "D",
            "text": "Biologists"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q99",
        "text": "Look at the graphic. Which lecturer is the speaker excited to hear?",
        "options": [
          {
            "label": "A",
            "text": "Jung-Hoon Kim"
          },
          {
            "label": "B",
            "text": "Mei Na Zhang"
          },
          {
            "label": "C",
            "text": "Maryam Alaoui"
          },
          {
            "label": "D",
            "text": "Isamu Nakamura"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q100",
        "text": "What will the listeners most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Vote for a board member"
          },
          {
            "label": "B",
            "text": "Share a meal"
          },
          {
            "label": "C",
            "text": "Participate in a workshop"
          },
          {
            "label": "D",
            "text": "Pay membership fees"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Br 98 Welcome to our quarterly meeting. There's a lot of engineering business to discuss. The first item is our Fall Lecture Series, which will start next month. We have an excellent lineup this year. 99 I'm especially excited about our October speaker, who will be talking about bridge design and materials. OK, the next item on the agenda is elections. 100 We need to choose a new board member, so Luisa is passing around ballots now."
  },
  {
    "testId": 8,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "Where does the speaker work?",
        "options": [
          {
            "label": "A",
            "text": "At a roofing company"
          },
          {
            "label": "B",
            "text": "At a catering company"
          },
          {
            "label": "C",
            "text": "At a community park headquarters"
          },
          {
            "label": "D",
            "text": "At an interior-design firm"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q72",
        "text": "What information was incorrect?",
        "options": [
          {
            "label": "A",
            "text": "An order number"
          },
          {
            "label": "B",
            "text": "A file name"
          },
          {
            "label": "C",
            "text": "An address"
          },
          {
            "label": "D",
            "text": "A price"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q73",
        "text": "Why does the speaker recommend placing an order soon?",
        "options": [
          {
            "label": "A",
            "text": "A material is in high demand."
          },
          {
            "label": "B",
            "text": "The rainy season is coming."
          },
          {
            "label": "C",
            "text": "Some new fees will be introduced."
          },
          {
            "label": "D",
            "text": "A permit is about to expire."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "M-Au Hi, 71 this is Alexi from Petrov Roofing Company. I just heard back from my supplier. Unfortunately, 72 the estimate I gave you yesterday for the new roof shingles was a little low. The ones you chose are actually 39 dollars per bundle. That's more than what I quoted. So, I just wanted to get your approval for this new price before I put in the order. And 73I recommend that we order soon, since the rainy season's only a month away. Once the rain starts, it'll take more time to install the new roof."
  },
  {
    "testId": 8,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "Who are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Artists"
          },
          {
            "label": "B",
            "text": "Journalists"
          },
          {
            "label": "C",
            "text": "Real estate agents"
          },
          {
            "label": "D",
            "text": "Sales representatives"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q75",
        "text": "What does the speaker say the listeners should learn to do?",
        "options": [
          {
            "label": "A",
            "text": "Manage their time"
          },
          {
            "label": "B",
            "text": "Negotiate prices"
          },
          {
            "label": "C",
            "text": "Give memorable presentations"
          },
          {
            "label": "D",
            "text": "Create effective advertisements"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q76",
        "text": "What does the speaker mention about Insook Lee?",
        "options": [
          {
            "label": "A",
            "text": "She has won an award."
          },
          {
            "label": "B",
            "text": "She is on a lecture tour."
          },
          {
            "label": "C",
            "text": "She hosts a popular podcast."
          },
          {
            "label": "D",
            "text": "She recently started a company."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Am 74 Thanks for attending today's seminar for new real estate agents. As people just joining the industry, 75 it's very important that you learn how to create a memorable property advertisement. The way you describe a house or apartment can determine how quickly the property sells. I've invited a guest speaker to discuss this very point. 76 Insook Lee has recently won our county's agent of the year award, and she attributes her success in large part to the fact that she has mastered the art of writing a great description. Insook, welcome, and thank you for joining us today."
  },
  {
    "testId": 8,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "What happened last January?",
        "options": [
          {
            "label": "A",
            "text": "There was an election."
          },
          {
            "label": "B",
            "text": "There was a snowstorm."
          },
          {
            "label": "C",
            "text": "A shopping mall opened."
          },
          {
            "label": "D",
            "text": "A bridge was closed."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q78",
        "text": "Why have some citizens complained?",
        "options": [
          {
            "label": "A",
            "text": "A toll has increased."
          },
          {
            "label": "B",
            "text": "Traffic lights are badly timed."
          },
          {
            "label": "C",
            "text": "There is not enough parking."
          },
          {
            "label": "D",
            "text": "The roads are in poor condition."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q79",
        "text": "Who has been invited to attend a city council meeting?",
        "options": [
          {
            "label": "A",
            "text": "Engineers"
          },
          {
            "label": "B",
            "text": "Educators"
          },
          {
            "label": "C",
            "text": "Finance experts"
          },
          {
            "label": "D",
            "text": "Business owners"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn In local news, town officials are ready to take action on the untimely degradation of some of our town's main roads. Since 77 the Bellville shopping mall opened last January, there has been significantly more traffic on the streets leading to the mall. 78 City officials have received numerous complaints from citizens about large cracks and potholes in the roads, which can be damaging to cars. 79 The city council has invited a few concrete engineers to their next meeting, which will be open to the public. The engineers will share their expertise on the options available for upgrading our roads, and the city council will vote on a budget for the project."
  },
  {
    "testId": 8,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "What is the purpose of an equipment update?",
        "options": [
          {
            "label": "A",
            "text": "To promote healthy lifestyles"
          },
          {
            "label": "B",
            "text": "To protect consumer privacy"
          },
          {
            "label": "C",
            "text": "To comply with safety standards"
          },
          {
            "label": "D",
            "text": "To increase energy efficiency"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q81",
        "text": "What are the listeners warned about?",
        "options": [
          {
            "label": "A",
            "text": "Price increases"
          },
          {
            "label": "B",
            "text": "Service interruptions"
          },
          {
            "label": "C",
            "text": "Loud noises"
          },
          {
            "label": "D",
            "text": "Increased traffic"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q82",
        "text": "What are some listeners encouraged to do?",
        "options": [
          {
            "label": "A",
            "text": "Sign up early for a service"
          },
          {
            "label": "B",
            "text": "Use a community space"
          },
          {
            "label": "C",
            "text": "Attend an information session"
          },
          {
            "label": "D",
            "text": "Take public transportation"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Br Thank you for coming to this short meeting for all residents of Atrium Apartment Complex. 80 Our power provider, Crewdson Energy Company, will be updating the electrical equipment in all units starting next week. This update is to improve the energy efficiency in our buildings. 81 Please be warned that there will be intermittent power failures while work is being done. 82 If you work from home and need alternate space to work during power failures, you're free to use the apartment complex clubhouse. We'll make sure there's power there at all times."
  },
  {
    "testId": 8,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "Who is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A sports coach"
          },
          {
            "label": "B",
            "text": "A computer programmer"
          },
          {
            "label": "C",
            "text": "A company executive"
          },
          {
            "label": "D",
            "text": "A sales representative"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q84",
        "text": "What is the speaker mainly discussing?",
        "options": [
          {
            "label": "A",
            "text": "An upcoming retirement"
          },
          {
            "label": "B",
            "text": "A corporate fund-raiser"
          },
          {
            "label": "C",
            "text": "An innovative product"
          },
          {
            "label": "D",
            "text": "An annual dinner"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q85",
        "text": "Why does the speaker say, \"There are a lot of talented people in this group\"?",
        "options": [
          {
            "label": "A",
            "text": "To question a management policy"
          },
          {
            "label": "B",
            "text": "To suggest a group size be decreased"
          },
          {
            "label": "C",
            "text": "To reassure the listeners about a decision"
          },
          {
            "label": "D",
            "text": "To express appreciation for an award"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Am Hello. 83 As your senior vice president of Product Development, it has been a privilege leading this team over the past several decades. As you may have heard, 84I will be ending my time with the company next month. Now, 85 when I shared this news with a few of you individually, there were some concerns about the future of the team under new leadership. Frankly, that surprised me. I mean, look around the room. There are a lot of talented people in this group. In fact, I should take this opportunity to thank you all for our collective success."
  },
  {
    "testId": 8,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Who is the man most likely calling?",
        "options": [
          {
            "label": "A",
            "text": "A police officer"
          },
          {
            "label": "B",
            "text": "A customer"
          },
          {
            "label": "C",
            "text": "A mechanic"
          },
          {
            "label": "D",
            "text": "A supervisor"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q87",
        "text": "What will take place tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "A store sale"
          },
          {
            "label": "B",
            "text": "A road closure"
          },
          {
            "label": "C",
            "text": "A farmers market"
          },
          {
            "label": "D",
            "text": "A musical performance"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q88",
        "text": "What does the speaker mean when he says, \"there are three cars parked there now\"?",
        "options": [
          {
            "label": "A",
            "text": "An event is not popular."
          },
          {
            "label": "B",
            "text": "A task cannot be completed."
          },
          {
            "label": "C",
            "text": "A parking fee has been paid."
          },
          {
            "label": "D",
            "text": "A delivery will be delayed."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "M-Cn Hello, Ms. Schulz. 86 This is Yuri Federov, calling from our downtown store. I was just going over the checklist that you gave us. 87 We've already done most of the things you've asked us to do in preparation for our outdoor sale, but there's a bit of a problem. 87, 88 You wanted us to rope off the parking spaces in front of the shop after we closed today so we can set up tables there tomorrow morning. Well, it's eight fifteen, and there are three cars parked there now. Please give me a call back as soon as you can."
  },
  {
    "testId": 8,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What change does the speaker announce?",
        "options": [
          {
            "label": "A",
            "text": "Departments will be reorganized."
          },
          {
            "label": "B",
            "text": "New technicians will be hired."
          },
          {
            "label": "C",
            "text": "An additional warehouse will open."
          },
          {
            "label": "D",
            "text": "An automated system will be used."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q90",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Accountants"
          },
          {
            "label": "B",
            "text": "Warehouse stockers"
          },
          {
            "label": "C",
            "text": "Human resources managers"
          },
          {
            "label": "D",
            "text": "Customer service representatives"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q91",
        "text": "What does the speaker ask the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Update service numbers"
          },
          {
            "label": "B",
            "text": "Submit salary requirements"
          },
          {
            "label": "C",
            "text": "Keep a record of complaints"
          },
          {
            "label": "D",
            "text": "Post some shipping schedules"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Br 89,90 We'll be rolling out some changes starting next week. When customers call the service number, they'll be prompted to say which department they're trying to reach, and then voice-recognition software will direct their call automatically. I'm sure most of you have experiences of your own calling customer-service hotlines that utilize this kind of system. Usually, it works, but it can be frustrating when it doesn't. 90,91 Some customers might be upset with you if they were unable to reach the right department quickly. If this happens to you, please summarize the exchange in writing. I'll give the feedback to the programmers so they can make improvements to the program accordingly."
  },
  {
    "testId": 8,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "What is the speaker promoting?",
        "options": [
          {
            "label": "A",
            "text": "Audio equipment"
          },
          {
            "label": "B",
            "text": "Cleaning tools"
          },
          {
            "label": "C",
            "text": "A security device"
          },
          {
            "label": "D",
            "text": "A software program"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q93",
        "text": "What industry do the listeners most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Transportation"
          },
          {
            "label": "B",
            "text": "Manufacturing"
          },
          {
            "label": "C",
            "text": "Banking"
          },
          {
            "label": "D",
            "text": "Health care"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q94",
        "text": "What does the speaker mean when he says, \"the manual's just fifteen pages long\"?",
        "options": [
          {
            "label": "A",
            "text": "The listeners should read the manual now."
          },
          {
            "label": "B",
            "text": "A manual would be inexpensive to print."
          },
          {
            "label": "C",
            "text": "A product is not ready to be released."
          },
          {
            "label": "D",
            "text": "A product is easy to use."
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Cn Welcome to the booth for Pondrew Technologies. I hope you're enjoying today's trade show. 92 Let me tell you about the software we released last month. 93 It's designed to make your factory's production cycle more efficient. How? Well, as you know, if a machine in an assembly line malfunctions, it can trigger significant downtime. Pondrew's software continuously gathers and processes data from each machine, so issues can be diagnosed faster. Yes, 94 there are other software programs on the market that perform similar tasks, but they're complicated and require hours of training. Consider this about Pondrew's: the manual's just fifteen pages long."
  },
  {
    "testId": 8,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "What is the speaker's company planning to purchase?",
        "options": [
          {
            "label": "A",
            "text": "A 3-D printer"
          },
          {
            "label": "B",
            "text": "A large-screen television"
          },
          {
            "label": "C",
            "text": "Some new laptops"
          },
          {
            "label": "D",
            "text": "Some adjustable desks"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q96",
        "text": "Why has the company decided to make the purchase?",
        "options": [
          {
            "label": "A",
            "text": "More employees were hired."
          },
          {
            "label": "B",
            "text": "A vendor increased its prices."
          },
          {
            "label": "C",
            "text": "A store went out of business."
          },
          {
            "label": "D",
            "text": "Some software was out-of-date."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q97",
        "text": "Look at the graphic. Where will Jerome move to?",
        "options": [
          {
            "label": "A",
            "text": "Office 1"
          },
          {
            "label": "B",
            "text": "Office 2"
          },
          {
            "label": "C",
            "text": "Office 3"
          },
          {
            "label": "D",
            "text": "Office 4"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Am I have an announcement for the team. 95 We'll be making a big purchase-a top-of-the-line 3-D printer. 96 We've been outsourcing the work to a printing company, but it recently doubled its prices. We think it's time to have our own in-house printer. The only issue is size-the only space big enough for the new machine is the office next to the reception area, so we'll be rearranging our work space. 97 Jerome, I'm sorry, but you'll have to move. We hope you won't mind using the office in the corner across from the conference room."
  },
  {
    "testId": 8,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Where does the speaker most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a factory"
          },
          {
            "label": "B",
            "text": "At an architecture firm"
          },
          {
            "label": "C",
            "text": "At a landscaping service"
          },
          {
            "label": "D",
            "text": "At a government inspection office"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q99",
        "text": "Look at the graphic. Which number does the speaker want to change?",
        "options": [
          {
            "label": "A",
            "text": "20"
          },
          {
            "label": "B",
            "text": "12"
          },
          {
            "label": "C",
            "text": "8"
          },
          {
            "label": "D",
            "text": "15"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q100",
        "text": "What information would the speaker like added to a list?",
        "options": [
          {
            "label": "A",
            "text": "His home address"
          },
          {
            "label": "B",
            "text": "His office location"
          },
          {
            "label": "C",
            "text": "His telephone number"
          },
          {
            "label": "D",
            "text": "His e-mail address"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Au Hi, Amy! 98 This is Paul Baxter from the manufacturing team. Listen, 99I made a mistake in the order form I left on your desk earlier today. I actually only need ten pairs of safety goggles for my team on the assembly floor. Hopefully, you get this message before you submit the order. Oh, and by the way-100 when you place the order, could you add my e-mail address to the notification list, so I know when everything's scheduled to arrive? It's paul.baxter@allymanufacturing.com. Thanks."
  },
  {
    "testId": 9,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "What does the company sell?",
        "options": [
          {
            "label": "A",
            "text": "Racing bicycles"
          },
          {
            "label": "B",
            "text": "Motorcycle parts"
          },
          {
            "label": "C",
            "text": "Camping equipment"
          },
          {
            "label": "D",
            "text": "Electric cars"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q72",
        "text": "What does the speaker emphasize about the products?",
        "options": [
          {
            "label": "A",
            "text": "They are safe for the environment."
          },
          {
            "label": "B",
            "text": "They come with an extended warranty."
          },
          {
            "label": "C",
            "text": "They can be used with a mobile application."
          },
          {
            "label": "D",
            "text": "They are designed for all weather conditions."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q73",
        "text": "What ends on Sunday?",
        "options": [
          {
            "label": "A",
            "text": "A contest"
          },
          {
            "label": "B",
            "text": "A festival"
          },
          {
            "label": "C",
            "text": "A factory tour"
          },
          {
            "label": "D",
            "text": "A special offer"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br: Are you looking to buy a new car, but you're also concerned about the environment? Then there's no better place to shop than at Henry's Car Dealership! Unlike other dealerships, we only sell electric cars. That means our vehicles produce zero direct emissions, which specifically helps improve air quality. And we have a limited-time offer for you. If you buy a car by Sunday, you will get a year of free car washes!"
  },
  {
    "testId": 9,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "What does the business make?",
        "options": [
          {
            "label": "A",
            "text": "Ice cream"
          },
          {
            "label": "B",
            "text": "Beverages"
          },
          {
            "label": "C",
            "text": "Candy"
          },
          {
            "label": "D",
            "text": "Pretzels"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q75",
        "text": "What does the speaker say the business is known for?",
        "options": [
          {
            "label": "A",
            "text": "Its high-quality ingredients"
          },
          {
            "label": "B",
            "text": "Its clever packaging"
          },
          {
            "label": "C",
            "text": "Its unique flavors"
          },
          {
            "label": "D",
            "text": "Its handmade products"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q76",
        "text": "What does the speaker ask the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Leave their personal items in a locker"
          },
          {
            "label": "B",
            "text": "Turn in their tickets"
          },
          {
            "label": "C",
            "text": "Divide into smaller groups"
          },
          {
            "label": "D",
            "text": "Put on some protective clothing"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn: Welcome to Soo-Min's Factory. I'm delighted to give you a tour of our facility. Today, you'll see how we manufacture some of the world's favorite candies. Unlike many candy factories, we still make our products by hand, just like we've been doing since the factory opened over 50 years ago. It's what we're known for. Now before we go in, you'll need to leave your belongings in the lockers behind me. We need to maintain a clean environment inside the factory, so it's very important that you don't take anything in with you."
  },
  {
    "testId": 9,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "What is the speaker mainly discussing?",
        "options": [
          {
            "label": "A",
            "text": "An upcoming conference"
          },
          {
            "label": "B",
            "text": "A vacation policy"
          },
          {
            "label": "C",
            "text": "Some new software"
          },
          {
            "label": "D",
            "text": "Some new equipment"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q78",
        "text": "What does the speaker tell the listeners to take note of?",
        "options": [
          {
            "label": "A",
            "text": "Some travel arrangements will be made online."
          },
          {
            "label": "B",
            "text": "Some log-on information will remain the same."
          },
          {
            "label": "C",
            "text": "A training session will be rescheduled."
          },
          {
            "label": "D",
            "text": "A security policy will be enforced."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q79",
        "text": "What should the listeners do tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Confirm their work schedules"
          },
          {
            "label": "B",
            "text": "Prepare a presentation"
          },
          {
            "label": "C",
            "text": "Park in a different location"
          },
          {
            "label": "D",
            "text": "Dress professionally"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br: First on the staff meeting agenda is the new time-tracking software we're implementing. All employees will start using it to record their hours beginning next month. Because it's very different from our previous software, everyone will receive access to an online training session. Note that you'll use the same log-on name and password as you used on the old system. OK, next. Remember that a photographer will be here tomorrow to take pictures for the company Web site. Please wear professional attire."
  },
  {
    "testId": 9,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "Where does Ms. Thompson work?",
        "options": [
          {
            "label": "A",
            "text": "At an art supply store"
          },
          {
            "label": "B",
            "text": "At a museum"
          },
          {
            "label": "C",
            "text": "At a photography studio"
          },
          {
            "label": "D",
            "text": "At a library"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q81",
        "text": "According to the speaker, what special talent does Ms. Thompson have?",
        "options": [
          {
            "label": "A",
            "text": "Raising money"
          },
          {
            "label": "B",
            "text": "Painting landscapes"
          },
          {
            "label": "C",
            "text": "Negotiating contracts"
          },
          {
            "label": "D",
            "text": "Taking photographs"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q82",
        "text": "What does Ms. Thompson plan to do after she retires?",
        "options": [
          {
            "label": "A",
            "text": "Restore paintings"
          },
          {
            "label": "B",
            "text": "Volunteer as a consultant"
          },
          {
            "label": "C",
            "text": "Relocate to France"
          },
          {
            "label": "D",
            "text": "Become an author"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Au: Welcome back to Artist Hour on Freetown Public Radio. With me here in the studio is Carol Thompson, the longtime director of the Freetown Art Museum. Ms. Thompson has just announced that she'll be retiring at the end of the year, so she joins us today to talk about her career and future plans. As we'll discuss later, she has always had a particular talent for fund-raising. Over her 30-year career, she has raised a total of five million dollars for art restoration projects across the country. Ms. Thompson plans to write children's books about well-known artists when she retires. The first will be based on the life of French painter Claude Monet."
  },
  {
    "testId": 9,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Journalists"
          },
          {
            "label": "B",
            "text": "Editors"
          },
          {
            "label": "C",
            "text": "Photographers"
          },
          {
            "label": "D",
            "text": "Salespeople"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q84",
        "text": "According to the speaker, what will the listeners receive in an e-mail?",
        "options": [
          {
            "label": "A",
            "text": "A book title"
          },
          {
            "label": "B",
            "text": "A concert ticket"
          },
          {
            "label": "C",
            "text": "A restaurant name"
          },
          {
            "label": "D",
            "text": "An account number"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q85",
        "text": "Why does the speaker say, \"thousands of people will buy this issue\"?",
        "options": [
          {
            "label": "A",
            "text": "To reassure the listeners"
          },
          {
            "label": "B",
            "text": "To correct a misunderstanding"
          },
          {
            "label": "C",
            "text": "To express surprise about a decision"
          },
          {
            "label": "D",
            "text": "To emphasize the importance of a task"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Am: OK, everyone. I want to talk about your new writing assignments. As you know, the special restaurant issue of our magazine is coming out in May. But we still have quite a few restaurants we haven't reviewed yet. So, I've assigned a different restaurant to each reporter—you can check your e-mail to find out which one you'll be reviewing. This might seem like a fun assignment, but remember, thousands of people will buy this issue."
  },
  {
    "testId": 9,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Where are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "In a community center"
          },
          {
            "label": "B",
            "text": "In a medical clinic"
          },
          {
            "label": "C",
            "text": "In a university classroom"
          },
          {
            "label": "D",
            "text": "In a government office"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q87",
        "text": "Why does the speaker say, \"many eye problems are easily treated\"?",
        "options": [
          {
            "label": "A",
            "text": "To indicate that a health fair is unnecessary"
          },
          {
            "label": "B",
            "text": "To suggest hiring additional staff"
          },
          {
            "label": "C",
            "text": "To encourage the listeners to get tested"
          },
          {
            "label": "D",
            "text": "To correct a statistical error"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q88",
        "text": "What will the listeners do next?",
        "options": [
          {
            "label": "A",
            "text": "Pick up some nutritional information"
          },
          {
            "label": "B",
            "text": "Sign up for an appointment"
          },
          {
            "label": "C",
            "text": "Listen to a presentation"
          },
          {
            "label": "D",
            "text": "Watch a product demonstration"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Br: Welcome, everyone, to the Pine City Community Center. I'm Dr. Garcia, and I'm here at the community center today for the annual wellness fair. We'll be doing free vision exams all day. If you don't have time today, we'll be offering the exams at our clinic for the rest of the month. Just remember, many eye problems are easily treated. OK, so first on our agenda at nine o'clock A.M., eye specialist Dr. Yan Zhou will give a presentation in the auditorium about maintaining good eye health. Let's head over there now."
  },
  {
    "testId": 9,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What is the talk mainly about?",
        "options": [
          {
            "label": "A",
            "text": "Cleaning a carpet"
          },
          {
            "label": "B",
            "text": "Installing a carpet"
          },
          {
            "label": "C",
            "text": "Designing a carpet"
          },
          {
            "label": "D",
            "text": "Choosing a carpet"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q90",
        "text": "What does the speaker say about wool carpets?",
        "options": [
          {
            "label": "A",
            "text": "They are difficult to find."
          },
          {
            "label": "B",
            "text": "They are expensive."
          },
          {
            "label": "C",
            "text": "They are hard to clean."
          },
          {
            "label": "D",
            "text": "They are durable."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q91",
        "text": "What does the speaker say his company provides?",
        "options": [
          {
            "label": "A",
            "text": "A free in-store consultation"
          },
          {
            "label": "B",
            "text": "A children's play area"
          },
          {
            "label": "C",
            "text": "Flooring design samples"
          },
          {
            "label": "D",
            "text": "One-year warranties"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Cn: Hi, I'm Takumi from Logan's Flooring. Thanks for watching this video. Carpets come in various designs and materials, and selecting one can be overwhelming. Today, I'll be sharing a few tips that'll make that process easier. First, consider where you're going to put the carpet. For example, if you're carpeting a children's playroom, you probably don't want to select a wool carpet, since they're difficult to clean. Second, we recommend making sure your carpet is protected under our warranty in case of damage. At Logan's Flooring, we provide one-year warranties on all our carpets! Be sure to subscribe to this video channel for free weekly tips and ideas."
  },
  {
    "testId": 9,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "Why does the speaker thank the listener?",
        "options": [
          {
            "label": "A",
            "text": "For renewing a magazine subscription"
          },
          {
            "label": "B",
            "text": "For inspecting a medical facility"
          },
          {
            "label": "C",
            "text": "For writing an article"
          },
          {
            "label": "D",
            "text": "For giving a demonstration"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q93",
        "text": "What does the speaker imply when she says, \"this is just one of our many products\"?",
        "options": [
          {
            "label": "A",
            "text": "A company is prepared for more competition."
          },
          {
            "label": "B",
            "text": "A company also sells less expensive products."
          },
          {
            "label": "C",
            "text": "A team will need to work more quickly."
          },
          {
            "label": "D",
            "text": "A supervisor will be impressed by some work."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q94",
        "text": "Why does the speaker ask the listener to call back?",
        "options": [
          {
            "label": "A",
            "text": "To provide an address"
          },
          {
            "label": "B",
            "text": "To confirm a deadline"
          },
          {
            "label": "C",
            "text": "To place an order"
          },
          {
            "label": "D",
            "text": "To arrange a meeting"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br: Hi. This is Barbara Chen, head of public relations at Springfield Solutions. I'm calling to thank you for your magazine article about our company. In it, you praised our newest software, Ubex, writing that it helps factories run more efficiently. But you also emphasized how expensive the software is. While Ubex is costly, let me point out that this is just one of our many products. I'd appreciate the chance to discuss the full range of our software choices, to give you a balanced view of the company. Please call me back and let me know if you'd be available to meet."
  },
  {
    "testId": 9,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A tour guide"
          },
          {
            "label": "B",
            "text": "A city official"
          },
          {
            "label": "C",
            "text": "A photographer"
          },
          {
            "label": "D",
            "text": "A landscape artist"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which picnic area does the speaker recommend?",
        "options": [
          {
            "label": "A",
            "text": "Picnic Area 1"
          },
          {
            "label": "B",
            "text": "Picnic Area 2"
          },
          {
            "label": "C",
            "text": "Picnic Area 3"
          },
          {
            "label": "D",
            "text": "Picnic Area 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q97",
        "text": "Why are some volunteers needed?",
        "options": [
          {
            "label": "A",
            "text": "To maintain a garden"
          },
          {
            "label": "B",
            "text": "To hand out water bottles"
          },
          {
            "label": "C",
            "text": "To organize park events"
          },
          {
            "label": "D",
            "text": "To provide free tours"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Am: Welcome to the grand opening of Oakfield Public Park! My fellow city council members and I are glad that everyone could join us. There are many fun activities for residents to enjoy here. See the beautiful Elm Fountain, which has a special fountain show every hour. There are also several picnic areas throughout the park. But I suggest the one between Dogwood Pond and the children's playground. It offers fantastic views of our city's skyline. Finally, for any gardeners among us, the Oakfield Parks Department needs volunteers to help care for the community garden. If you're interested, please visit the city government Web site."
  },
  {
    "testId": 9,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Where do the listeners most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a supermarket"
          },
          {
            "label": "B",
            "text": "At a hospital"
          },
          {
            "label": "C",
            "text": "At a community center"
          },
          {
            "label": "D",
            "text": "At a fitness club"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q99",
        "text": "What does the speaker say is his goal?",
        "options": [
          {
            "label": "A",
            "text": "To attract qualified job candidates"
          },
          {
            "label": "B",
            "text": "To reduce costs"
          },
          {
            "label": "C",
            "text": "To boost membership sales"
          },
          {
            "label": "D",
            "text": "To encourage healthy eating habits"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q100",
        "text": "Look at the graphic. On which days can the speaker change his schedule?",
        "options": [
          {
            "label": "A",
            "text": "Mondays"
          },
          {
            "label": "B",
            "text": "Wednesdays"
          },
          {
            "label": "C",
            "text": "Thursdays"
          },
          {
            "label": "D",
            "text": "Saturdays"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn: Since the hospital hired me, I've been working on making the meals we serve our patients more nutritious. But I want to promote healthy eating habits among our staff as well, because health-care professionals with healthy diets are more likely to teach their patients to make similar choices. With that goal, I'd like to schedule our first nutrition class at a time that's available to as many people as possible, so I'm asking that you complete this short survey. I do have some flexibility in the afternoons so I could move the afternoon session during the week to a later time if necessary. The weekend session cannot be moved."
  },
  {
    "testId": 10,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "71",
        "text": "What kind of product did the speaker order?",
        "options": [
          {
            "label": "A",
            "text": "Printer ink"
          },
          {
            "label": "B",
            "text": "Eyeglasses"
          },
          {
            "label": "C",
            "text": "Picture frames"
          },
          {
            "label": "D",
            "text": "Furniture"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "72",
        "text": "What problem does the speaker mention?",
        "options": [
          {
            "label": "A",
            "text": "A package was not received."
          },
          {
            "label": "B",
            "text": "An invoice is missing."
          },
          {
            "label": "C",
            "text": "A product is the wrong color."
          },
          {
            "label": "D",
            "text": "A Web site is down."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "73",
        "text": "What does the speaker ask about?",
        "options": [
          {
            "label": "A",
            "text": "A refund policy"
          },
          {
            "label": "B",
            "text": "A delivery fee"
          },
          {
            "label": "C",
            "text": "A shipping time"
          },
          {
            "label": "D",
            "text": "A mailing address"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Au Hello, 71I recently ordered a pair of reading glasses from your Web site. 72I chose blue frames, but when the package arrived, the glasses had black frames instead. I'm going to send these back to you now to be exchanged for the correct color. But 73I wanted to ask how long it'll take for the blue pair to arrive. The original shipment took about three weeks, and I'd like to get the replacement sooner. My number's 555-0156. Thanks."
  },
  {
    "testId": 10,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "74",
        "text": "What award is being announced?",
        "options": [
          {
            "label": "A",
            "text": "Best design"
          },
          {
            "label": "B",
            "text": "Top salesperson"
          },
          {
            "label": "C",
            "text": "Employee of the month"
          },
          {
            "label": "D",
            "text": "Excellence in research"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "75",
        "text": "According to the speaker, what will the winner receive?",
        "options": [
          {
            "label": "A",
            "text": "A commemorative plaque"
          },
          {
            "label": "B",
            "text": "A parking space"
          },
          {
            "label": "C",
            "text": "A gift certificate"
          },
          {
            "label": "D",
            "text": "A recognition dinner"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "76",
        "text": "What does the speaker say will be published on a Web site?",
        "options": [
          {
            "label": "A",
            "text": "A photograph"
          },
          {
            "label": "B",
            "text": "A biography"
          },
          {
            "label": "C",
            "text": "Professional accomplishments"
          },
          {
            "label": "D",
            "text": "Company event details"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Am Good afternoon, everyone. As you know, 74it's time to announce our newest employee of the month, and it goes to Haru Watanabe. Congratulations! Haru did outstanding work this month securing the Thompson Limited account. He also volunteers in the community. 75As our winner, Haru will receive a preferred parking space right outside the building for the next 30 days. Haru, please come up here to have your picture taken. 76Like all our employees of the month, your photo will be featured on the company Web site."
  },
  {
    "testId": 10,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "77",
        "text": "What kind of product does the speaker's company sell?",
        "options": [
          {
            "label": "A",
            "text": "Bicycles"
          },
          {
            "label": "B",
            "text": "Tools"
          },
          {
            "label": "C",
            "text": "Cars"
          },
          {
            "label": "D",
            "text": "Toys"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "78",
        "text": "What will the listeners do next?",
        "options": [
          {
            "label": "A",
            "text": "Watch a video"
          },
          {
            "label": "B",
            "text": "Vote on a policy"
          },
          {
            "label": "C",
            "text": "Inspect a brochure"
          },
          {
            "label": "D",
            "text": "Tour a facility"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "79",
        "text": "What does the speaker mean when he says, \"I come in at eight\"?",
        "options": [
          {
            "label": "A",
            "text": "He is very busy this week."
          },
          {
            "label": "B",
            "text": "A store usually opens early."
          },
          {
            "label": "C",
            "text": "The listeners should arrive at that time."
          },
          {
            "label": "D",
            "text": "The listeners should prepare a shipment."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Cn Hi, everyone! My name is Sanjeep Gupta. 77We're excited to have so many new people working at our bicycle stores. During the week, you will learn how to repair bicycles and scooters for our customers. 78Before we begin your training, I'm going to show you around this model facility, which has been built to simulate the repair shop in the back of every one of our stores. Oh—79a couple of you asked about your schedule this week. I'll be overseeing your work, and I come in at eight."
  },
  {
    "testId": 10,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "80",
        "text": "What does the speaker mainly discuss?",
        "options": [
          {
            "label": "A",
            "text": "Offering training opportunities"
          },
          {
            "label": "B",
            "text": "Changing product packaging"
          },
          {
            "label": "C",
            "text": "Updating safety regulations"
          },
          {
            "label": "D",
            "text": "Revising an advertising strategy"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "81",
        "text": "What did the company do last month?",
        "options": [
          {
            "label": "A",
            "text": "It expanded its social media presence."
          },
          {
            "label": "B",
            "text": "It agreed to organize a conference."
          },
          {
            "label": "C",
            "text": "It published a training manual."
          },
          {
            "label": "D",
            "text": "It hired an outside consultant."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "82",
        "text": "What should interested listeners do?",
        "options": [
          {
            "label": "A",
            "text": "Contact their managers"
          },
          {
            "label": "B",
            "text": "Recruit some volunteers"
          },
          {
            "label": "C",
            "text": "Answer a survey"
          },
          {
            "label": "D",
            "text": "Watch a video"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Au 80A new report shows that customers prefer sustainable packaging in the products they buy. In order to expand our customer base, we've decided to look into using biodegradable packaging for the personal care products we make. 81Just last month, we hired a packaging consultant to develop environmentally friendly packaging for our products. Now we need to set up a committee to oversee the project. 82If you're interested in participating, contact your manager by the end of the week."
  },
  {
    "testId": 10,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "83",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Engineers"
          },
          {
            "label": "B",
            "text": "Dentists"
          },
          {
            "label": "C",
            "text": "Educators"
          },
          {
            "label": "D",
            "text": "Architects"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "84",
        "text": "Why does the speaker say, \"I'll be at the booth in the lobby until noon\"?",
        "options": [
          {
            "label": "A",
            "text": "To request volunteers for the afternoon"
          },
          {
            "label": "B",
            "text": "To explain that a booth location has changed"
          },
          {
            "label": "C",
            "text": "To apologize for a scheduling conflict"
          },
          {
            "label": "D",
            "text": "To indicate availability to answer questions"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "85",
        "text": "What does the speaker say will happen tonight?",
        "options": [
          {
            "label": "A",
            "text": "A book signing"
          },
          {
            "label": "B",
            "text": "A photo shoot"
          },
          {
            "label": "C",
            "text": "A dinner reception"
          },
          {
            "label": "D",
            "text": "An award ceremony"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Br 83Thank you all for attending the thirtieth annual Dental Healthcare Conference. We have six sessions planned on the latest advances in tooth restoration. As a reminder, 84if you'd like to receive continuing education credit for attending the conference, you'll have to complete additional paperwork. Some of you may want to hear more details about that. I'll be at the booth in the lobby until noon. And finally, just a reminder that 85you are all invited to attend a dinner reception tonight starting right after the last presentation session."
  },
  {
    "testId": 10,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "86",
        "text": "What is Geeta Prasad's profession?",
        "options": [
          {
            "label": "A",
            "text": "Research scientist"
          },
          {
            "label": "B",
            "text": "Medical doctor"
          },
          {
            "label": "C",
            "text": "University professor"
          },
          {
            "label": "D",
            "text": "Government official"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "87",
        "text": "According to the speaker, what are some data used for?",
        "options": [
          {
            "label": "A",
            "text": "To evaluate a budget"
          },
          {
            "label": "B",
            "text": "To design new products"
          },
          {
            "label": "C",
            "text": "To make hiring decisions"
          },
          {
            "label": "D",
            "text": "To develop an exercise program"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "88",
        "text": "Why should the listeners visit a Web site?",
        "options": [
          {
            "label": "A",
            "text": "To download a manual"
          },
          {
            "label": "B",
            "text": "To read a report"
          },
          {
            "label": "C",
            "text": "To register for a study"
          },
          {
            "label": "D",
            "text": "To provide some feedback"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Am Welcome to this episode of our radio show, Research Now. On every show we talk to a different scientist about their work. 86Today's guest is Geeta Prasad. She's a scientist at McMillan Shoe Manufacturers. Her job is to research how people move their feet when they exercise. 87She then provides that data to the design team, who use it to design new shoes. In fact, 88her team is looking for participants to take part in their next study. To sign up, visit McMillan Shoe Manufacturers' Web site."
  },
  {
    "testId": 10,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "89",
        "text": "Where do the listeners most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a home appliance store"
          },
          {
            "label": "B",
            "text": "At a hardware store"
          },
          {
            "label": "C",
            "text": "At a shipping company"
          },
          {
            "label": "D",
            "text": "At a furniture store"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "90",
        "text": "According to the speaker, what has caused a problem?",
        "options": [
          {
            "label": "A",
            "text": "Low-quality merchandise"
          },
          {
            "label": "B",
            "text": "Competition from other businesses"
          },
          {
            "label": "C",
            "text": "Increased rental costs"
          },
          {
            "label": "D",
            "text": "Poor customer service"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "91",
        "text": "What will happen next month?",
        "options": [
          {
            "label": "A",
            "text": "A focus group will be assembled."
          },
          {
            "label": "B",
            "text": "A customer loyalty program will be introduced."
          },
          {
            "label": "C",
            "text": "Some employees will receive training."
          },
          {
            "label": "D",
            "text": "New advertisements will be designed."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "M-Cn Thanks for attending this management meeting. As you know, 89despite our strategy of positioning ourselves as a seller of high-quality furniture, 90we've been losing business to several secondhand stores selling used furniture in the area. There's one thing that we can start doing that many other furniture stores aren't: offering free assembly. By developing cross-functional delivery teams, we'll be able to gain a competitive edge. So 91next month, all of our delivery teams will attend sessions where they'll learn how to assemble our products in customers' homes."
  },
  {
    "testId": 10,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "92",
        "text": "Where is the speech being given?",
        "options": [
          {
            "label": "A",
            "text": "At a training session"
          },
          {
            "label": "B",
            "text": "At a press conference"
          },
          {
            "label": "C",
            "text": "At a job fair"
          },
          {
            "label": "D",
            "text": "At a store grand opening"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "93",
        "text": "Why does the speaker apologize?",
        "options": [
          {
            "label": "A",
            "text": "Some repair work has caused delays."
          },
          {
            "label": "B",
            "text": "Some employees have been transferred."
          },
          {
            "label": "C",
            "text": "Some materials have not arrived."
          },
          {
            "label": "D",
            "text": "Some businesses have been temporarily closed."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "94",
        "text": "What does the speaker mean when she says, \"the tracks and trains are not city property\"?",
        "options": [
          {
            "label": "A",
            "text": "She did not follow a recommendation."
          },
          {
            "label": "B",
            "text": "She is not responsible for a problem."
          },
          {
            "label": "C",
            "text": "Some directions were misleading."
          },
          {
            "label": "D",
            "text": "A contract contained errors."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Br Hello everyone. 92Thanks for coming to this press conference. On behalf of the City of Sommerville, 93I want to sincerely apologize to all community members affected by this week's train delays. My department has received reports of delays averaging an hour at peak periods. 93It has become clear that the ongoing track and wire repair work has become far too disruptive for city commuters. 94With this week's unacceptable delays in mind, my department, the city transportation office, is negotiating with the contractor, National Rail. That's the company that owns the tracks and runs the trains for Sommerville. To be clear, the tracks and trains are not city property. OK, now I can take some questions."
  },
  {
    "testId": 10,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "95",
        "text": "Look at the graphic. Which hairstyle does the speaker recommend?",
        "options": [
          {
            "label": "A",
            "text": "Style 1"
          },
          {
            "label": "B",
            "text": "Style 2"
          },
          {
            "label": "C",
            "text": "Style 3"
          },
          {
            "label": "D",
            "text": "Style 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "96",
        "text": "What does the speaker say is included in the price?",
        "options": [
          {
            "label": "A",
            "text": "A comb"
          },
          {
            "label": "B",
            "text": "A beverage"
          },
          {
            "label": "C",
            "text": "Blow-drying"
          },
          {
            "label": "D",
            "text": "Hair care instructions"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "97",
        "text": "What does the speaker say happened yesterday?",
        "options": [
          {
            "label": "A",
            "text": "A photo shoot was held."
          },
          {
            "label": "B",
            "text": "A popular product arrived."
          },
          {
            "label": "C",
            "text": "A new hairstylist was hired."
          },
          {
            "label": "D",
            "text": "A product demonstration was conducted."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "W-Am Hi, Susan. It's Maria. You asked me to suggest a new hairstyle for your appointment tomorrow. 95I'd recommend something cut all the way up to your chin. I think that a style like this would give you a very professional look. I'll show you the picture from my hairstyle catalog when you come in. 96If you'd like me to blow-dry your hair during your appointment, that's included in the price. Oh, and by the way, 97yesterday we got a shipment in of the Hydro Five hair moisturizer that always sells out. I know you like to use it, so I thought you might want to know."
  },
  {
    "testId": 10,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "98",
        "text": "According to the speaker, what did the company do last week?",
        "options": [
          {
            "label": "A",
            "text": "It installed software to monitor machines."
          },
          {
            "label": "B",
            "text": "It added a new machine to an assembly line."
          },
          {
            "label": "C",
            "text": "It hired some expert technicians."
          },
          {
            "label": "D",
            "text": "It reorganized a production team."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "99",
        "text": "Look at the graphic. Which machine will a technician look at?",
        "options": [
          {
            "label": "A",
            "text": "Machine 1"
          },
          {
            "label": "B",
            "text": "Machine 2"
          },
          {
            "label": "C",
            "text": "Machine 3"
          },
          {
            "label": "D",
            "text": "Machine 4"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "100",
        "text": "What does the company hope to do next quarter?",
        "options": [
          {
            "label": "A",
            "text": "Update their logo"
          },
          {
            "label": "B",
            "text": "Meet their production targets"
          },
          {
            "label": "C",
            "text": "Purchase similar technologies"
          },
          {
            "label": "D",
            "text": "Begin replacing outdated computers"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": "M-Cn 98Our first topic is an update on the data analytic software we installed last week to identify problems with our plastic molding machines. As I'm sure you're aware, 100we've missed our production targets for the last two quarters. That means we're spending too much time assembling our products. As you can see on this chart, 99the data show that one of our machines is running a very slow production cycle at an average of six minutes, twenty-two seconds per cycle. We've already flagged it for repair by a technician. By next week, that machine should be at normal output. 100We're very optimistic about the impact the new analytic software will have on next quarter's targets."
  },

  {
    "testId": 9,
    "setId": "set_71_73",
    "questionRange": "71-73",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_71-73.mp3",
    "questions": [
      {
        "id": "q71",
        "text": "What does the company sell?",
        "options": [
          {
            "label": "A",
            "text": "Racing bicycles"
          },
          {
            "label": "B",
            "text": "Motorcycle parts"
          },
          {
            "label": "C",
            "text": "Camping equipment"
          },
          {
            "label": "D",
            "text": "Electric cars"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q72",
        "text": "What does the speaker emphasize about the products?",
        "options": [
          {
            "label": "A",
            "text": "They are safe for the environment."
          },
          {
            "label": "B",
            "text": "They come with an extended warranty."
          },
          {
            "label": "C",
            "text": "They can be used with a mobile application."
          },
          {
            "label": "D",
            "text": "They are designed for all weather conditions."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q73",
        "text": "What ends on Sunday?",
        "options": [
          {
            "label": "A",
            "text": "A contest"
          },
          {
            "label": "B",
            "text": "A festival"
          },
          {
            "label": "C",
            "text": "A factory tour"
          },
          {
            "label": "D",
            "text": "A special offer"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br: Are you looking to buy a new car, but you're also concerned about the environment? Then there's no better place to shop than at Henry's Car Dealership! Unlike other dealerships, we only sell electric cars. That means our vehicles produce zero direct emissions, which specifically helps improve air quality. And we have a limited-time offer for you. If you buy a car by Sunday, you will get a year of free car washes!"
  },
  {
    "testId": 9,
    "setId": "set_74_76",
    "questionRange": "74-76",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_74-76.mp3",
    "questions": [
      {
        "id": "q74",
        "text": "What does the business make?",
        "options": [
          {
            "label": "A",
            "text": "Ice cream"
          },
          {
            "label": "B",
            "text": "Beverages"
          },
          {
            "label": "C",
            "text": "Candy"
          },
          {
            "label": "D",
            "text": "Pretzels"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q75",
        "text": "What does the speaker say the business is known for?",
        "options": [
          {
            "label": "A",
            "text": "Its high-quality ingredients"
          },
          {
            "label": "B",
            "text": "Its clever packaging"
          },
          {
            "label": "C",
            "text": "Its unique flavors"
          },
          {
            "label": "D",
            "text": "Its handmade products"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q76",
        "text": "What does the speaker ask the listeners to do?",
        "options": [
          {
            "label": "A",
            "text": "Leave their personal items in a locker"
          },
          {
            "label": "B",
            "text": "Turn in their tickets"
          },
          {
            "label": "C",
            "text": "Divide into smaller groups"
          },
          {
            "label": "D",
            "text": "Put on some protective clothing"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn: Welcome to Soo-Min's Factory. I'm delighted to give you a tour of our facility. Today, you'll see how we manufacture some of the world's favorite candies. Unlike many candy factories, we still make our products by hand, just like we've been doing since the factory opened over 50 years ago. It's what we're known for. Now before we go in, you'll need to leave your belongings in the lockers behind me. We need to maintain a clean environment inside the factory, so it's very important that you don't take anything in with you."
  },
  {
    "testId": 9,
    "setId": "set_77_79",
    "questionRange": "77-79",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_77-79.mp3",
    "questions": [
      {
        "id": "q77",
        "text": "What is the speaker mainly discussing?",
        "options": [
          {
            "label": "A",
            "text": "An upcoming conference"
          },
          {
            "label": "B",
            "text": "A vacation policy"
          },
          {
            "label": "C",
            "text": "Some new software"
          },
          {
            "label": "D",
            "text": "Some new equipment"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q78",
        "text": "What does the speaker tell the listeners to take note of?",
        "options": [
          {
            "label": "A",
            "text": "Some travel arrangements will be made online."
          },
          {
            "label": "B",
            "text": "Some log-on information will remain the same."
          },
          {
            "label": "C",
            "text": "A training session will be rescheduled."
          },
          {
            "label": "D",
            "text": "A security policy will be enforced."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q79",
        "text": "What should the listeners do tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Confirm their work schedules"
          },
          {
            "label": "B",
            "text": "Prepare a presentation"
          },
          {
            "label": "C",
            "text": "Park in a different location"
          },
          {
            "label": "D",
            "text": "Dress professionally"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br: First on the staff meeting agenda is the new time-tracking software we're implementing. All employees will start using it to record their hours beginning next month. Because it's very different from our previous software, everyone will receive access to an online training session. Note that you'll use the same log-on name and password as you used on the old system. OK, next. Remember that a photographer will be here tomorrow to take pictures for the company Web site. Please wear professional attire."
  },
  {
    "testId": 9,
    "setId": "set_80_82",
    "questionRange": "80-82",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_80-82.mp3",
    "questions": [
      {
        "id": "q80",
        "text": "Where does Ms. Thompson work?",
        "options": [
          {
            "label": "A",
            "text": "At an art supply store"
          },
          {
            "label": "B",
            "text": "At a museum"
          },
          {
            "label": "C",
            "text": "At a photography studio"
          },
          {
            "label": "D",
            "text": "At a library"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q81",
        "text": "According to the speaker, what special talent does Ms. Thompson have?",
        "options": [
          {
            "label": "A",
            "text": "Raising money"
          },
          {
            "label": "B",
            "text": "Painting landscapes"
          },
          {
            "label": "C",
            "text": "Negotiating contracts"
          },
          {
            "label": "D",
            "text": "Taking photographs"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q82",
        "text": "What does Ms. Thompson plan to do after she retires?",
        "options": [
          {
            "label": "A",
            "text": "Restore paintings"
          },
          {
            "label": "B",
            "text": "Volunteer as a consultant"
          },
          {
            "label": "C",
            "text": "Relocate to France"
          },
          {
            "label": "D",
            "text": "Become an author"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Au: Welcome back to Artist Hour on Freetown Public Radio. With me here in the studio is Carol Thompson, the longtime director of the Freetown Art Museum. Ms. Thompson has just announced that she'll be retiring at the end of the year, so she joins us today to talk about her career and future plans. As we'll discuss later, she has always had a particular talent for fund-raising. Over her 30-year career, she has raised a total of five million dollars for art restoration projects across the country. Ms. Thompson plans to write children's books about well-known artists when she retires. The first will be based on the life of French painter Claude Monet."
  },
  {
    "testId": 9,
    "setId": "set_83_85",
    "questionRange": "83-85",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_83-85.mp3",
    "questions": [
      {
        "id": "q83",
        "text": "Who most likely are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "Journalists"
          },
          {
            "label": "B",
            "text": "Editors"
          },
          {
            "label": "C",
            "text": "Photographers"
          },
          {
            "label": "D",
            "text": "Salespeople"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q84",
        "text": "According to the speaker, what will the listeners receive in an e-mail?",
        "options": [
          {
            "label": "A",
            "text": "A book title"
          },
          {
            "label": "B",
            "text": "A concert ticket"
          },
          {
            "label": "C",
            "text": "A restaurant name"
          },
          {
            "label": "D",
            "text": "An account number"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q85",
        "text": "Why does the speaker say, \"thousands of people will buy this issue\"?",
        "options": [
          {
            "label": "A",
            "text": "To reassure the listeners"
          },
          {
            "label": "B",
            "text": "To correct a misunderstanding"
          },
          {
            "label": "C",
            "text": "To express surprise about a decision"
          },
          {
            "label": "D",
            "text": "To emphasize the importance of a task"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Am: OK, everyone. I want to talk about your new writing assignments. As you know, the special restaurant issue of our magazine is coming out in May. But we still have quite a few restaurants we haven't reviewed yet. So, I've assigned a different restaurant to each reporter—you can check your e-mail to find out which one you'll be reviewing. This might seem like a fun assignment, but remember, thousands of people will buy this issue."
  },
  {
    "testId": 9,
    "setId": "set_86_88",
    "questionRange": "86-88",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_86-88.mp3",
    "questions": [
      {
        "id": "q86",
        "text": "Where are the listeners?",
        "options": [
          {
            "label": "A",
            "text": "In a community center"
          },
          {
            "label": "B",
            "text": "In a medical clinic"
          },
          {
            "label": "C",
            "text": "In a university classroom"
          },
          {
            "label": "D",
            "text": "In a government office"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q87",
        "text": "Why does the speaker say, \"many eye problems are easily treated\"?",
        "options": [
          {
            "label": "A",
            "text": "To indicate that a health fair is unnecessary"
          },
          {
            "label": "B",
            "text": "To suggest hiring additional staff"
          },
          {
            "label": "C",
            "text": "To encourage the listeners to get tested"
          },
          {
            "label": "D",
            "text": "To correct a statistical error"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q88",
        "text": "What will the listeners do next?",
        "options": [
          {
            "label": "A",
            "text": "Pick up some nutritional information"
          },
          {
            "label": "B",
            "text": "Sign up for an appointment"
          },
          {
            "label": "C",
            "text": "Listen to a presentation"
          },
          {
            "label": "D",
            "text": "Watch a product demonstration"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": "W-Br: Welcome, everyone, to the Pine City Community Center. I'm Dr. Garcia, and I'm here at the community center today for the annual wellness fair. We'll be doing free vision exams all day. If you don't have time today, we'll be offering the exams at our clinic for the rest of the month. Just remember, many eye problems are easily treated. OK, so first on our agenda at nine o'clock A.M., eye specialist Dr. Yan Zhou will give a presentation in the auditorium about maintaining good eye health. Let's head over there now."
  },
  {
    "testId": 9,
    "setId": "set_89_91",
    "questionRange": "89-91",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_89-91.mp3",
    "questions": [
      {
        "id": "q89",
        "text": "What is the talk mainly about?",
        "options": [
          {
            "label": "A",
            "text": "Cleaning a carpet"
          },
          {
            "label": "B",
            "text": "Installing a carpet"
          },
          {
            "label": "C",
            "text": "Designing a carpet"
          },
          {
            "label": "D",
            "text": "Choosing a carpet"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q90",
        "text": "What does the speaker say about wool carpets?",
        "options": [
          {
            "label": "A",
            "text": "They are difficult to find."
          },
          {
            "label": "B",
            "text": "They are expensive."
          },
          {
            "label": "C",
            "text": "They are hard to clean."
          },
          {
            "label": "D",
            "text": "They are durable."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q91",
        "text": "What does the speaker say his company provides?",
        "options": [
          {
            "label": "A",
            "text": "A free in-store consultation"
          },
          {
            "label": "B",
            "text": "A children's play area"
          },
          {
            "label": "C",
            "text": "Flooring design samples"
          },
          {
            "label": "D",
            "text": "One-year warranties"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "M-Cn: Hi, I'm Takumi from Logan's Flooring. Thanks for watching this video. Carpets come in various designs and materials, and selecting one can be overwhelming. Today, I'll be sharing a few tips that'll make that process easier. First, consider where you're going to put the carpet. For example, if you're carpeting a children's playroom, you probably don't want to select a wool carpet, since they're difficult to clean. Second, we recommend making sure your carpet is protected under our warranty in case of damage. At Logan's Flooring, we provide one-year warranties on all our carpets! Be sure to subscribe to this video channel for free weekly tips and ideas."
  },
  {
    "testId": 9,
    "setId": "set_92_94",
    "questionRange": "92-94",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_92-94.mp3",
    "questions": [
      {
        "id": "q92",
        "text": "Why does the speaker thank the listener?",
        "options": [
          {
            "label": "A",
            "text": "For renewing a magazine subscription"
          },
          {
            "label": "B",
            "text": "For inspecting a medical facility"
          },
          {
            "label": "C",
            "text": "For writing an article"
          },
          {
            "label": "D",
            "text": "For giving a demonstration"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q93",
        "text": "What does the speaker imply when she says, \"this is just one of our many products\"?",
        "options": [
          {
            "label": "A",
            "text": "A company is prepared for more competition."
          },
          {
            "label": "B",
            "text": "A company also sells less expensive products."
          },
          {
            "label": "C",
            "text": "A team will need to work more quickly."
          },
          {
            "label": "D",
            "text": "A supervisor will be impressed by some work."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q94",
        "text": "Why does the speaker ask the listener to call back?",
        "options": [
          {
            "label": "A",
            "text": "To provide an address"
          },
          {
            "label": "B",
            "text": "To confirm a deadline"
          },
          {
            "label": "C",
            "text": "To place an order"
          },
          {
            "label": "D",
            "text": "To arrange a meeting"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": "W-Br: Hi. This is Barbara Chen, head of public relations at Springfield Solutions. I'm calling to thank you for your magazine article about our company. In it, you praised our newest software, Ubex, writing that it helps factories run more efficiently. But you also emphasized how expensive the software is. While Ubex is costly, let me point out that this is just one of our many products. I'd appreciate the chance to discuss the full range of our software choices, to give you a balanced view of the company. Please call me back and let me know if you'd be available to meet."
  },
  {
    "testId": 9,
    "setId": "set_95_97",
    "questionRange": "95-97",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_95-97.mp3",
    "questions": [
      {
        "id": "q95",
        "text": "Who most likely is the speaker?",
        "options": [
          {
            "label": "A",
            "text": "A tour guide"
          },
          {
            "label": "B",
            "text": "A city official"
          },
          {
            "label": "C",
            "text": "A photographer"
          },
          {
            "label": "D",
            "text": "A landscape artist"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q96",
        "text": "Look at the graphic. Which picnic area does the speaker recommend?",
        "options": [
          {
            "label": "A",
            "text": "Picnic Area 1"
          },
          {
            "label": "B",
            "text": "Picnic Area 2"
          },
          {
            "label": "C",
            "text": "Picnic Area 3"
          },
          {
            "label": "D",
            "text": "Picnic Area 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q97",
        "text": "Why are some volunteers needed?",
        "options": [
          {
            "label": "A",
            "text": "To maintain a garden"
          },
          {
            "label": "B",
            "text": "To hand out water bottles"
          },
          {
            "label": "C",
            "text": "To organize park events"
          },
          {
            "label": "D",
            "text": "To provide free tours"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "W-Am: Welcome to the grand opening of Oakfield Public Park! My fellow city council members and I are glad that everyone could join us. There are many fun activities for residents to enjoy here. See the beautiful Elm Fountain, which has a special fountain show every hour. There are also several picnic areas throughout the park. But I suggest the one between Dogwood Pond and the children's playground. It offers fantastic views of our city's skyline. Finally, for any gardeners among us, the Oakfield Parks Department needs volunteers to help care for the community garden. If you're interested, please visit the city government Web site.",
    "image": "/images/ETS_TOEIC_3/Test_09/Part_04/p4_q95.png"
  },
  {
    "testId": 9,
    "setId": "set_98_100",
    "questionRange": "98-100",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 4_98-100.mp3",
    "questions": [
      {
        "id": "q98",
        "text": "Where do the listeners most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a supermarket"
          },
          {
            "label": "B",
            "text": "At a hospital"
          },
          {
            "label": "C",
            "text": "At a community center"
          },
          {
            "label": "D",
            "text": "At a fitness club"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q99",
        "text": "What does the speaker say is his goal?",
        "options": [
          {
            "label": "A",
            "text": "To attract qualified job candidates"
          },
          {
            "label": "B",
            "text": "To reduce costs"
          },
          {
            "label": "C",
            "text": "To boost membership sales"
          },
          {
            "label": "D",
            "text": "To encourage healthy eating habits"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q100",
        "text": "Look at the graphic. On which days can the speaker change his schedule?",
        "options": [
          {
            "label": "A",
            "text": "Mondays"
          },
          {
            "label": "B",
            "text": "Wednesdays"
          },
          {
            "label": "C",
            "text": "Thursdays"
          },
          {
            "label": "D",
            "text": "Saturdays"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": "M-Cn: Since the hospital hired me, I've been working on making the meals we serve our patients more nutritious. But I want to promote healthy eating habits among our staff as well, because health-care professionals with healthy diets are more likely to teach their patients to make similar choices. With that goal, I'd like to schedule our first nutrition class at a time that's available to as many people as possible, so I'm asking that you complete this short survey. I do have some flexibility in the afternoons so I could move the afternoon session during the week to a later time if necessary. The weekend session cannot be moved.",
    "image": "/images/ETS_TOEIC_3/Test_09/Part_04/p4_q98.png"
  }
];
