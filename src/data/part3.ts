
export interface Part3Question {
  id: string;
  text: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
}

export interface Part3Set {
  testId: number;
  setId: string;
  questionRange: string;
  audio: string;
  image?: string;
  questions: Part3Question[];
  script?: { speaker: string; text: string }[] | string;
  hasScript?: boolean;
}

export const part3Data: Part3Set[] = [
  {
    "setId": "set_32_34",
    "questionRange": "32-34",
    "questions": [
      {
        "id": "q32",
        "text": "What is the woman preparing for?",
        "options": [
          {
            "label": "A",
            "text": "A move to a new city"
          },
          {
            "label": "B",
            "text": "A business trip"
          },
          {
            "label": "C",
            "text": "A building tour"
          },
          {
            "label": "D",
            "text": "A meeting with visiting colleagues"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q33",
        "text": "Who most likely is the man?",
        "options": [
          {
            "label": "A",
            "text": "An accountant"
          },
          {
            "label": "B",
            "text": "An administrative assistant"
          },
          {
            "label": "C",
            "text": "A marketing director"
          },
          {
            "label": "D",
            "text": "A company president"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q34",
        "text": "What does the woman want to pick up on Friday morning?",
        "options": [
          {
            "label": "A",
            "text": "A building map"
          },
          {
            "label": "B",
            "text": "A room key"
          },
          {
            "label": "C",
            "text": "An ID card"
          },
          {
            "label": "D",
            "text": "A parking pass"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Hi, it's Martina from Accounting. I'd like to reserve the main conference room for a meeting I'll be leading on Friday with colleagues from our New York office."
      },
      {
        "speaker": "Man",
        "text": "Sure, that shouldn't be a problem. What time is the meeting?"
      },
      {
        "speaker": "Woman",
        "text": "It's from nine to eleven A.Μ."
      },
      {
        "speaker": "Man",
        "text": "OK-I'll block off that time slot for you. Do you need any special equipment besides a laptop and projector?"
      },
      {
        "speaker": "Woman",
        "text": "No, but I'll need the key so I can go in a little early and set up. Can I pick that up on Friday morning?"
      },
      {
        "speaker": "Man",
        "text": "Absolutely."
      }
    ],
    "hasScript": true,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_32-34.mp3"
  },
  {
    "setId": "set_35_37",
    "questionRange": "35-37",
    "questions": [
      {
        "id": "q35",
        "text": "What task is the man responsible for?",
        "options": [
          {
            "label": "A",
            "text": "Writing a budget"
          },
          {
            "label": "B",
            "text": "Reviewing job applications"
          },
          {
            "label": "C",
            "text": "Organizing a company newsletter"
          },
          {
            "label": "D",
            "text": "Updating an employee handbook"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q36",
        "text": "What does the woman want to do next year?",
        "options": [
          {
            "label": "A",
            "text": "Organize a trade show"
          },
          {
            "label": "B",
            "text": "Open a new store"
          },
          {
            "label": "C",
            "text": "Redesign a product catalog"
          },
          {
            "label": "D",
            "text": "Hire some team members"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q37",
        "text": "What does the man ask the woman to do?",
        "options": [
          {
            "label": "A",
            "text": "Order some business cards"
          },
          {
            "label": "B",
            "text": "Write a press release"
          },
          {
            "label": "C",
            "text": "Provide some additional details"
          },
          {
            "label": "D",
            "text": "Set up a meeting time"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Satoshi, have you already started working on the budget for next year?"
      },
      {
        "speaker": "Man",
        "text": "Not yet... but I do plan to start it in the next day or so."
      },
      {
        "speaker": "Woman",
        "text": "OK, perfect. I'd like to add some new engineers to my team next year if we can afford it. I thought one might be enough, but I realized we'll probably need three to handle our company's new contracts."
      },
      {
        "speaker": "Man",
        "text": "No problem. I can include that in the budget. I'll just need the details about the positions, including the job titles and expected salaries. Could you send that to me?"
      }
    ],
    "hasScript": true,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_35-37.mp3"
  },
  {
    "setId": "set_38_40",
    "questionRange": "38-40",
    "questions": [
      {
        "id": "q38",
        "text": "What does the woman need a suit for?",
        "options": [
          {
            "label": "A",
            "text": "A job interview"
          },
          {
            "label": "B",
            "text": "A fashion show"
          },
          {
            "label": "C",
            "text": "A family celebration"
          },
          {
            "label": "D",
            "text": "A television appearance"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q39",
        "text": "What does the woman dislike about a suit on display?",
        "options": [
          {
            "label": "A",
            "text": "The fabric"
          },
          {
            "label": "B",
            "text": "The price"
          },
          {
            "label": "C",
            "text": "The style"
          },
          {
            "label": "D",
            "text": "The color"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q40",
        "text": "What does the man say that the price includes?",
        "options": [
          {
            "label": "A",
            "text": "Some accessories"
          },
          {
            "label": "B",
            "text": "Alterations"
          },
          {
            "label": "C",
            "text": "Sales tax"
          },
          {
            "label": "D",
            "text": "Delivery"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Welcome to Business Suit Outlet. How can I help you?"
      },
      {
        "speaker": "Woman",
        "text": "Hello. I'm interviewing for a job next week, and I wanted to buy a new suit."
      },
      {
        "speaker": "Man",
        "text": "Congratulations! Do you have anything particular in mind?"
      },
      {
        "speaker": "Woman",
        "text": "Well, there's one in your display window that looks nice. But I don't really like the color..."
      },
      {
        "speaker": "Man",
        "text": "That one only comes in black. But we do have suits in other colors that are fashionable and appropriate for business."
      },
      {
        "speaker": "Woman",
        "text": "OK. I can only spend 150 dollars, and I'd like a style similar to the one in the window."
      },
      {
        "speaker": "Man",
        "text": "Let me show you some suits in that price range. By the way, any alterations needed for the suit are included in the price."
      }
    ],
    "hasScript": true,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_38-40.mp3"
  },
  {
    "setId": "set_41_43",
    "questionRange": "41-43",
    "questions": [
      {
        "id": "q41",
        "text": "What kind of a business does the man most likely work for?",
        "options": [
          {
            "label": "A",
            "text": "A legal consulting firm"
          },
          {
            "label": "B",
            "text": "An architecture firm"
          },
          {
            "label": "C",
            "text": "A film production company"
          },
          {
            "label": "D",
            "text": "A book publishing company"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q42",
        "text": "What does the woman say she is concerned about?",
        "options": [
          {
            "label": "A",
            "text": "The length of a project"
          },
          {
            "label": "B",
            "text": "The cost of an order"
          },
          {
            "label": "C",
            "text": "The opinion of the public"
          },
          {
            "label": "D",
            "text": "The skills of some workers"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q43",
        "text": "What does the woman agree to let the man do?",
        "options": [
          {
            "label": "A",
            "text": "Submit an application"
          },
          {
            "label": "B",
            "text": "Speak at a meeting"
          },
          {
            "label": "C",
            "text": "Review some books"
          },
          {
            "label": "D",
            "text": "Measure a space"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Ellenville Public Library. How can I help you?"
      },
      {
        "speaker": "Man",
        "text": "Hi, I'm calling from the company Grover and James. We're interested in filming a scene for a movie in the lobby of the library. Its historic architecture is just what we're looking for."
      },
      {
        "speaker": "Woman",
        "text": "Well... we actually had a film shoot in our library last year. And the thing is... they said it would take one day and it ended up taking three. I'm concerned that will happen again."
      },
      {
        "speaker": "Man",
        "text": "I understand, but this is a very short scene."
      },
      {
        "speaker": "Woman",
        "text": "Well, we have a board meeting here next week. I could give you ten minutes at the beginning to give us the details."
      }
    ],
    "hasScript": true,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_41-43.mp3"
  },
  {
    "setId": "set_44_46",
    "questionRange": "44-46",
    "questions": [
      {
        "id": "q44",
        "text": "Who most likely is Axel Schmidt?",
        "options": [
          {
            "label": "A",
            "text": "A store manager"
          },
          {
            "label": "B",
            "text": "A construction worker"
          },
          {
            "label": "C",
            "text": "A journalist"
          },
          {
            "label": "D",
            "text": "An artist"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q45",
        "text": "What renovation does the woman mention?",
        "options": [
          {
            "label": "A",
            "text": "Some walls are being painted."
          },
          {
            "label": "B",
            "text": "Some floors are being replaced."
          },
          {
            "label": "C",
            "text": "Some windows are being installed."
          },
          {
            "label": "D",
            "text": "Some light fixtures are being repaired."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q46",
        "text": "What does the woman encourage the man to do?",
        "options": [
          {
            "label": "A",
            "text": "Visit a gift shop"
          },
          {
            "label": "B",
            "text": "Send a package"
          },
          {
            "label": "C",
            "text": "Wait for a bus"
          },
          {
            "label": "D",
            "text": "Take a photograph"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Excuse me, I'm looking for Axel Schmidt's painting titled The Tulips."
      },
      {
        "speaker": "Woman",
        "text": "Unfortunately, his paintings aren't on display. But it's just temporary-we're putting new flooring in that gallery. If you come back in a couple of weeks, the floors will be done, and you can see all of Schmidt's artwork."
      },
      {
        "speaker": "Man",
        "text": "Oh, that's too bad. I really wanted to see that painting."
      },
      {
        "speaker": "Woman",
        "text": "I'm sorry about that. But we sell items featuring that painting in the gift shop. You could buy a souvenir so you could enjoy The Tulips every day!"
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_44-46.mp3"
  },
  {
    "setId": "set_47_49",
    "questionRange": "47-49",
    "questions": [
      {
        "id": "q47",
        "text": "What does the speakers' company most likely sell?",
        "options": [
          {
            "label": "A",
            "text": "Electronics"
          },
          {
            "label": "B",
            "text": "Clothing"
          },
          {
            "label": "C",
            "text": "Food"
          },
          {
            "label": "D",
            "text": "Automobiles"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q48",
        "text": "Why is the woman surprised?",
        "options": [
          {
            "label": "A",
            "text": "Some software is expensive."
          },
          {
            "label": "B",
            "text": "A color is very bright."
          },
          {
            "label": "C",
            "text": "The man has completed a report."
          },
          {
            "label": "D",
            "text": "The man bought a new car."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q49",
        "text": "Why does the woman say, \"The slides are available on our company intranet\"?",
        "options": [
          {
            "label": "A",
            "text": "To request assistance reviewing a document"
          },
          {
            "label": "B",
            "text": "To recommend using a document as a reference"
          },
          {
            "label": "C",
            "text": "To report that a task has been completed"
          },
          {
            "label": "D",
            "text": "To indicate that a file is in the wrong location"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Hey, Dmitry. Are you still working on your sales report? Collecting all the data from the car dealerships in my region is taking me such a long time. Especially because this year management wants additional information on vehicle purchases, like model and color..."
      },
      {
        "speaker": "Man",
        "text": "Are you using the sales computation software? That's what I used for my report, and it worked really well."
      },
      {
        "speaker": "Woman",
        "text": "Oh-you already finished it?"
      },
      {
        "speaker": "Man",
        "text": "Well-I'm done collecting and analyzing the data, but I'm having trouble with the presentation. We didn't get any guidelines for that."
      },
      {
        "speaker": "Woman",
        "text": "Remember Julie's presentation last year? It was very impressive. The slides are available on our company intranet."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_47-49.mp3"
  },
  {
    "setId": "set_50_52",
    "questionRange": "50-52",
    "questions": [
      {
        "id": "q50",
        "text": "According to the woman, what will happen at the end of November?",
        "options": [
          {
            "label": "A",
            "text": "An executive will visit."
          },
          {
            "label": "B",
            "text": "An employee will retire."
          },
          {
            "label": "C",
            "text": "A product will be released."
          },
          {
            "label": "D",
            "text": "A study will be completed."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q51",
        "text": "What does the man want to know?",
        "options": [
          {
            "label": "A",
            "text": "Where he would be working"
          },
          {
            "label": "B",
            "text": "When he would be starting a job"
          },
          {
            "label": "C",
            "text": "How to get to an office building"
          },
          {
            "label": "D",
            "text": "Why an event time has changed"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q52",
        "text": "What does the woman say the company will pay for?",
        "options": [
          {
            "label": "A",
            "text": "A work vehicle"
          },
          {
            "label": "B",
            "text": "A private office"
          },
          {
            "label": "C",
            "text": "Moving expenses"
          },
          {
            "label": "D",
            "text": "Visitors' meals"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Thanks for coming in, Omar. You might've heard that Rosa Garcia is retiring at the end of November. This means her position as director of information security in Singapore will be vacant. I'd like to know if you'd be interested."
      },
      {
        "speaker": "Man",
        "text": "Oh! That would be a promotion for me. Well, hmm. I'll need a little time to think about it and talk it over with my family. I do have a question. When would I start the position?"
      },
      {
        "speaker": "Woman",
        "text": "The first week of December ideally. We'd pay for all your moving expenses, of course. If you decide to accept the offer."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_50-52.mp3"
  },
  {
    "setId": "set_53_55",
    "questionRange": "53-55",
    "questions": [
      {
        "id": "q53",
        "text": "What industry do the speakers work in?",
        "options": [
          {
            "label": "A",
            "text": "Manufacturing"
          },
          {
            "label": "B",
            "text": "Agriculture"
          },
          {
            "label": "C",
            "text": "Transportation"
          },
          {
            "label": "D",
            "text": "Construction"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q54",
        "text": "What does the woman say a project will do for a city?",
        "options": [
          {
            "label": "A",
            "text": "Increase tourism"
          },
          {
            "label": "B",
            "text": "Generate electricity"
          },
          {
            "label": "C",
            "text": "Preserve natural resources"
          },
          {
            "label": "D",
            "text": "Improve property values"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q55",
        "text": "What does Gerhard say needs to be done?",
        "options": [
          {
            "label": "A",
            "text": "Permits need to be approved."
          },
          {
            "label": "B",
            "text": "Employees need to be trained."
          },
          {
            "label": "C",
            "text": "Materials need to be ordered."
          },
          {
            "label": "D",
            "text": "Inspections need to be made."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Maryam, did you hear that our construction company won the bid to build the river dam next to Burton City?"
      },
      {
        "speaker": "Woman",
        "text": "I did! This is such a major project for us...the dam's expected to produce enough electricity to power all of Burton."
      },
      {
        "speaker": "Man",
        "text": "Right. Say, do you know when construction will begin?"
      },
      {
        "speaker": "Woman",
        "text": "I don't, but here comes the project manager now. He may have a better idea... Gerhard, are there any updates on the dam construction?"
      },
      {
        "speaker": "Man",
        "text": "Well, we're going to have to wait until all the permits are approved. It'll be a while before anything else can happen."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_53-55.mp3"
  },
  {
    "setId": "set_56_58",
    "questionRange": "56-58",
    "questions": [
      {
        "id": "q56",
        "text": "What does the woman imply when she says, \"I don't have much to do\"?",
        "options": [
          {
            "label": "A",
            "text": "She has time to help."
          },
          {
            "label": "B",
            "text": "She plans to leave work early."
          },
          {
            "label": "C",
            "text": "Her computer is not working."
          },
          {
            "label": "D",
            "text": "She has not received an assignment."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q57",
        "text": "What does the man notice about some medication?",
        "options": [
          {
            "label": "A",
            "text": "It needs to be refrigerated."
          },
          {
            "label": "B",
            "text": "It has expired."
          },
          {
            "label": "C",
            "text": "The dosage has changed."
          },
          {
            "label": "D",
            "text": "The supply is limited."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q58",
        "text": "What does the man suggest doing in the future?",
        "options": [
          {
            "label": "A",
            "text": "Installing some shelves"
          },
          {
            "label": "B",
            "text": "Confirming with a doctor"
          },
          {
            "label": "C",
            "text": "Increasing an order amount"
          },
          {
            "label": "D",
            "text": "Recommending a different medication"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "I have a question about a customer's prescription-he's... oh, I'm sorry. I see you're busy."
      },
      {
        "speaker": "Woman",
        "text": "I don't have much to do."
      },
      {
        "speaker": "Man",
        "text": "His doctor prescribed a 30-day supply of this allergy medication, but I noticed we only have enough on the shelf for fifteen days."
      },
      {
        "speaker": "Woman",
        "text": "Our weekly delivery arrives early tomorrow morning. Go ahead and give him the fifteen, and ask him to please come back for the rest. It's allergy season, so we're selling a lot of that medicine."
      },
      {
        "speaker": "Man",
        "text": "Then maybe we should increase the number of bottles in our next order from the distributor."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_56-58.mp3"
  },
  {
    "setId": "set_59_61",
    "questionRange": "59-61",
    "questions": [
      {
        "id": "q59",
        "text": "Who most likely is the woman?",
        "options": [
          {
            "label": "A",
            "text": "A travel agent"
          },
          {
            "label": "B",
            "text": "A bank teller"
          },
          {
            "label": "C",
            "text": "A lawyer"
          },
          {
            "label": "D",
            "text": "A mail-room worker"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q60",
        "text": "What kind of document are the speakers discussing?",
        "options": [
          {
            "label": "A",
            "text": "A user agreement"
          },
          {
            "label": "B",
            "text": "An employment contract"
          },
          {
            "label": "C",
            "text": "A list of travel expenses"
          },
          {
            "label": "D",
            "text": "An insurance certificate"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q61",
        "text": "Why must the document be revised by the end of the month?",
        "options": [
          {
            "label": "A",
            "text": "To be included in a personnel file"
          },
          {
            "label": "B",
            "text": "To use in a merger negotiation"
          },
          {
            "label": "C",
            "text": "To meet a production deadline"
          },
          {
            "label": "D",
            "text": "To avoid paying a fine"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Good morning, Ms. Davis. We've received comments from your legal team on the terms and agreements for the travel rewards credit card that we issued."
      },
      {
        "speaker": "Man",
        "text": "Could you explain the revisions we need to make to be in compliance with the law?"
      },
      {
        "speaker": "Woman",
        "text": "Sure. The problem with the agreement is this: it doesn't disclose to users that if a card isn't used for a year, the account will be suspended."
      },
      {
        "speaker": "Man",
        "text": "Oh, that's an oversight on our part. We're glad you caught that."
      },
      {
        "speaker": "Woman",
        "text": "We don't want to be fined by banking regulators, so all cardholders will need to be notified by the end of the month."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_59-61.mp3"
  },
  {
    "setId": "set_62_64",
    "questionRange": "62-64",
    "questions": [
      {
        "id": "q62",
        "text": "Look at the graphic. How much did the man's company charge for its service?",
        "options": [
          {
            "label": "A",
            "text": "$4,456"
          },
          {
            "label": "B",
            "text": "$1,300"
          },
          {
            "label": "C",
            "text": "$10,200"
          },
          {
            "label": "D",
            "text": "$400"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q63",
        "text": "Why does the man apologize?",
        "options": [
          {
            "label": "A",
            "text": "Business hours have changed."
          },
          {
            "label": "B",
            "text": "A price was wrong."
          },
          {
            "label": "C",
            "text": "Some staff arrived late."
          },
          {
            "label": "D",
            "text": "A request could not be fulfilled."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q64",
        "text": "What does the woman like about a venue?",
        "options": [
          {
            "label": "A",
            "text": "It has a nice view."
          },
          {
            "label": "B",
            "text": "It is conveniently located."
          },
          {
            "label": "C",
            "text": "It is tastefully decorated."
          },
          {
            "label": "D",
            "text": "It can host large events."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Ms. Giordano, it looks like the last of the wedding guests have left. My staff's going to start packing up our dishes and loading the van."
      },
      {
        "speaker": "Woman",
        "text": "That's fine, thank you. The food was delicious. My son and his new wife were very happy with your service."
      },
      {
        "speaker": "Man",
        "text": "I'm glad you enjoyed it. And, again, I'm sorry that some of our waitstaff were late arriving. They said they drove right past the turnoff."
      },
      {
        "speaker": "Woman",
        "text": "I understand. The venue is difficult to see from the road. I really like this location, though, with its view of the mountains from the gardens in the back."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_62-64.mp3",
    "image": "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q62.png"
  },
  {
    "setId": "set_65_67",
    "questionRange": "65-67",
    "questions": [
      {
        "id": "q65",
        "text": "Why is the man surprised?",
        "options": [
          {
            "label": "A",
            "text": "A popular band is coming to town."
          },
          {
            "label": "B",
            "text": "The woman plays a musical instrument."
          },
          {
            "label": "C",
            "text": "The woman was able to get concert tickets."
          },
          {
            "label": "D",
            "text": "Some musicians scheduled a second concert."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. In which section does the woman have seats?",
        "options": [
          {
            "label": "A",
            "text": "Section 1"
          },
          {
            "label": "B",
            "text": "Section 2"
          },
          {
            "label": "C",
            "text": "Section 3"
          },
          {
            "label": "D",
            "text": "Section 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q67",
        "text": "What is the woman doing this weekend?",
        "options": [
          {
            "label": "A",
            "text": "Practicing with her band"
          },
          {
            "label": "B",
            "text": "Entering a radio contest"
          },
          {
            "label": "C",
            "text": "Moving to Boston"
          },
          {
            "label": "D",
            "text": "Attending a party"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Hey, Thomas? You like concerts. Any chance you're interested in the local band showcase this weekend? I have two tickets that I don't need."
      },
      {
        "speaker": "Man",
        "text": "You got tickets to that? That's surprising! I heard that they sold out in just a few days."
      },
      {
        "speaker": "Woman",
        "text": "They did, but I actually won these in a radio contest. That's why I'm giving them away instead of selling them. Good seats, too. Right in the middle, close to the stage."
      },
      {
        "speaker": "Man",
        "text": "Sure, I'll take them. Thanks! Why can't you go?"
      },
      {
        "speaker": "Woman",
        "text": "This weekend is my parents' anniversary. My sisters and I are planning a party for them at their home in Boston."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_65-67.mp3",
    "image": "/images/ETS_TOEIC_3/Test_01/Part_03/p3_q68.png"
  },
  {
    "setId": "set_68_70",
    "questionRange": "68-70",
    "questions": [
      {
        "id": "q68",
        "text": "Who most likely is the man?",
        "options": [
          {
            "label": "A",
            "text": "A maintenance worker"
          },
          {
            "label": "B",
            "text": "A property manager"
          },
          {
            "label": "C",
            "text": "A real estate agent"
          },
          {
            "label": "D",
            "text": "A bank employee"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. Which name needs to be changed?",
        "options": [
          {
            "label": "A",
            "text": "Tanaka"
          },
          {
            "label": "B",
            "text": "Zhao"
          },
          {
            "label": "C",
            "text": "Mukherjee"
          },
          {
            "label": "D",
            "text": "Tremblay"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q70",
        "text": "What does the woman say she is going to do tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Fill out a registration form"
          },
          {
            "label": "B",
            "text": "Meet with some neighbors"
          },
          {
            "label": "C",
            "text": "Order some furniture"
          },
          {
            "label": "D",
            "text": "Make a payment"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Hello. Bellevue Apartments Management Office. Can I help you?"
      },
      {
        "speaker": "Woman",
        "text": "Hi. I'm Azusa Suzuki. I'm a new tenant here, and I live in 2A."
      },
      {
        "speaker": "Man",
        "text": "How's everything in your apartment so far?"
      },
      {
        "speaker": "Woman",
        "text": "Very good. One thing, though... When can you put my name on the building directory? It still says the previous tenant's name."
      },
      {
        "speaker": "Man",
        "text": "No problem. I can send someone over now. Unit 2A, you said?"
      },
      {
        "speaker": "Woman",
        "text": "Yes. And, I'll be stopping by your office tomorrow with my February rent check."
      },
      {
        "speaker": "Man",
        "text": "OK. See you then."
      }
    ],
    "hasScript": false,
    "testId": 1,
    "audio": "/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_68-70.mp3",
    "image": "/images/part3/q65-70.jpg"
  }
  ,
  {
    "testId": 2,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "Why does the man want to buy Ms. Jefferson some flowers?",
        "options": [
          {
            "label": "A",
            "text": "She was promoted."
          },
          {
            "label": "B",
            "text": "She won an award."
          },
          {
            "label": "C",
            "text": "She is moving."
          },
          {
            "label": "D",
            "text": "She is retiring."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q33",
        "text": "According to the woman, where is Greenwood Flower Shop?",
        "options": [
          {
            "label": "A",
            "text": "In a shopping mall"
          },
          {
            "label": "B",
            "text": "In a train station"
          },
          {
            "label": "C",
            "text": "Next to a café"
          },
          {
            "label": "D",
            "text": "Across from the library"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q34",
        "text": "What does the man say he will do before he leaves the office?",
        "options": [
          {
            "label": "A",
            "text": "Fill out a time sheet"
          },
          {
            "label": "B",
            "text": "Send an e-mail"
          },
          {
            "label": "C",
            "text": "Finish a budget proposal"
          },
          {
            "label": "D",
            "text": "Arrange a meeting"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hi, Anusha. This afternoon I'll be meeting with our financial consultant, Ms. Jefferson, for the last time. Since she's retiring next week, I wanted to get her some flowers. Do you know a good florist?"
      },
      {
        "speaker": "W-Br",
        "text": "The place I like best is called Greenwood Flower Shop. It's located just inside the train station, on the right-hand side."
      },
      {
        "speaker": "M-Au",
        "text": "Thanks. I just need to finalize this budget proposal, and then I'll head over to the station."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "What did the man just do?",
        "options": [
          {
            "label": "A",
            "text": "He upgraded a flight."
          },
          {
            "label": "B",
            "text": "He arranged for a rental car."
          },
          {
            "label": "C",
            "text": "He prepared some presentation slides."
          },
          {
            "label": "D",
            "text": "He made a hotel reservation."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q36",
        "text": "What does the man remind the woman to do?",
        "options": [
          {
            "label": "A",
            "text": "Save her receipts"
          },
          {
            "label": "B",
            "text": "Bring her ID badge"
          },
          {
            "label": "C",
            "text": "Sign a form"
          },
          {
            "label": "D",
            "text": "Arrive early"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q37",
        "text": "What does the woman ask the man about?",
        "options": [
          {
            "label": "A",
            "text": "A bank"
          },
          {
            "label": "B",
            "text": "A post office"
          },
          {
            "label": "C",
            "text": "A restaurant"
          },
          {
            "label": "D",
            "text": "A conference center"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Ms. Weber, I've just booked the accommodations for your trip to Melbourne next week. I found you a hotel within a mile of the conference center."
      },
      {
        "speaker": "W-Am",
        "text": "That's great! Thank you for arranging that."
      },
      {
        "speaker": "M-Au",
        "text": "No problem. And remember to keep your receipts—you'll need them to get reimbursed."
      },
      {
        "speaker": "W-Am",
        "text": "OK, I'll do that. Oh, and does the hotel have a restaurant on-site? I'll be working in the hotel a lot, so it'd be convenient if I could eat there."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "What industry do the speakers most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Television"
          },
          {
            "label": "B",
            "text": "Fashion"
          },
          {
            "label": "C",
            "text": "Home furnishings"
          },
          {
            "label": "D",
            "text": "Advertising"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q39",
        "text": "What does the man suggest doing?",
        "options": [
          {
            "label": "A",
            "text": "Providing tours of a facility"
          },
          {
            "label": "B",
            "text": "Opening a branch office"
          },
          {
            "label": "C",
            "text": "Designing special fabric"
          },
          {
            "label": "D",
            "text": "Installing brighter lights"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q40",
        "text": "What is the woman concerned about?",
        "options": [
          {
            "label": "A",
            "text": "A plan would be time-consuming."
          },
          {
            "label": "B",
            "text": "A color is too bright."
          },
          {
            "label": "C",
            "text": "Some sales figures have declined."
          },
          {
            "label": "D",
            "text": "Some supplies will be expensive."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Antonio, I'd like your input about how we can make our spring athletic clothing line more original."
      },
      {
        "speaker": "M-Cn",
        "text": "How about designing some geometric patterns that we can have printed onto our fabric? That would set our clothing apart from other brands that use muted, solid colors."
      },
      {
        "speaker": "W-Br",
        "text": "I like that idea, but I'm worried it would add a step or two to our production schedule. We have several hard deadlines coming up soon. Let's try designing one patterned fabric for this season's line. If everything goes smoothly, we can do more next season."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "What problem is being discussed?",
        "options": [
          {
            "label": "A",
            "text": "A company manual contains some errors."
          },
          {
            "label": "B",
            "text": "A shipment was not delivered on time."
          },
          {
            "label": "C",
            "text": "Some materials are missing from a cabinet."
          },
          {
            "label": "D",
            "text": "An e-mail system is not functioning properly."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q42",
        "text": "Who most likely is the man?",
        "options": [
          {
            "label": "A",
            "text": "A computer technician"
          },
          {
            "label": "B",
            "text": "A security guard"
          },
          {
            "label": "C",
            "text": "A warehouse manager"
          },
          {
            "label": "D",
            "text": "A sales representative"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q43",
        "text": "What are the women most likely planning to do next?",
        "options": [
          {
            "label": "A",
            "text": "Sign a contract"
          },
          {
            "label": "B",
            "text": "Attend a training"
          },
          {
            "label": "C",
            "text": "Go to the airport"
          },
          {
            "label": "D",
            "text": "Revise a presentation"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hi Yoon-Ho. Do you have a minute? Anita and I need your assistance with our e-mails."
      },
      {
        "speaker": "M-Au",
        "text": "Sure. How can I help?"
      },
      {
        "speaker": "W-Br",
        "text": "The system seems to be running very slow. We've been experiencing long delays in receiving e-mails, right Anita?"
      },
      {
        "speaker": "W-Am",
        "text": "Yes. Since we have deadlines that are very time sensitive, can you look into this right away?"
      },
      {
        "speaker": "M-Au",
        "text": "You know, several people have already called us at the IT Department about it this morning—it's our top priority now."
      },
      {
        "speaker": "W-Am",
        "text": "Thanks. We're on our way to catch a flight now, but could you please call us when it's all taken care of?"
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "Where does the woman work?",
        "options": [
          {
            "label": "A",
            "text": "At an amusement park"
          },
          {
            "label": "B",
            "text": "At a fitness center"
          },
          {
            "label": "C",
            "text": "At a bicycle-tour company"
          },
          {
            "label": "D",
            "text": "At an automobile dealership"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q45",
        "text": "Why is the man unable to make a reservation for next Thursday?",
        "options": [
          {
            "label": "A",
            "text": "A calendar is fully booked."
          },
          {
            "label": "B",
            "text": "An employee is on vacation."
          },
          {
            "label": "C",
            "text": "Some roads will be closed."
          },
          {
            "label": "D",
            "text": "Some equipment will be replaced."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q46",
        "text": "What will the man most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Pick up a brochure"
          },
          {
            "label": "B",
            "text": "Make a down payment"
          },
          {
            "label": "C",
            "text": "Provide a membership number"
          },
          {
            "label": "D",
            "text": "Write a customer review"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Paniz Outdoor Tours. Can I help you?"
      },
      {
        "speaker": "M-Cn",
        "text": "I'm from Alderman Associates, and I'm calling to book a cycling tour of the city for my colleagues and me. There are eight of us, and we'd like to go next Thursday."
      },
      {
        "speaker": "W-Br",
        "text": "I'm sorry—we'll be closed next Thursday. We're replacing all of our bikes, and it'll take a few days to get them ready to ride."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, we work nearby, so we could go another time."
      },
      {
        "speaker": "W-Br",
        "text": "Great. So, what about the following Monday—June third?"
      },
      {
        "speaker": "M-Cn",
        "text": "That works. We have a membership with you already, so you should have all of our information on file."
      },
      {
        "speaker": "W-Br",
        "text": "In that case, just tell me your membership number, and I'll make the reservation."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "Who is the man?",
        "options": [
          {
            "label": "A",
            "text": "A news reporter"
          },
          {
            "label": "B",
            "text": "A photographer"
          },
          {
            "label": "C",
            "text": "A fashion designer"
          },
          {
            "label": "D",
            "text": "A translator"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q48",
        "text": "Why does the woman say, \"The issue is already being printed\"?",
        "options": [
          {
            "label": "A",
            "text": "To apologize for an error"
          },
          {
            "label": "B",
            "text": "To provide reassurance"
          },
          {
            "label": "C",
            "text": "To indicate a schedule change"
          },
          {
            "label": "D",
            "text": "To decline an offer"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q49",
        "text": "What does the woman ask the man to do?",
        "options": [
          {
            "label": "A",
            "text": "Come in for an interview"
          },
          {
            "label": "B",
            "text": "Appear in a feature story"
          },
          {
            "label": "C",
            "text": "Travel for an assignment"
          },
          {
            "label": "D",
            "text": "Post some information online"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Ms. Khan, this is James Wilson, one of the freelance photographers for your magazine. I'm calling about the September issue."
      },
      {
        "speaker": "W-Am",
        "text": "Right. I know we're using some of your photos for the special spread about homes in San Francisco."
      },
      {
        "speaker": "M-Cn",
        "text": "Yes. But I have a few more shots I took this weekend when there was a beautiful sunset. Would you be interested in looking at those?"
      },
      {
        "speaker": "W-Am",
        "text": "The issue is already being printed."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, I see. Sorry to bother you, then."
      },
      {
        "speaker": "W-Am",
        "text": "Actually, I'm glad you called. We're opening a position for assistant photo editor, and I wonder if you can come in for an interview. I think you'd be great for the job."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "What kind of business do the speakers most likely work for?",
        "options": [
          {
            "label": "A",
            "text": "An automobile manufacturer"
          },
          {
            "label": "B",
            "text": "An insurance company"
          },
          {
            "label": "C",
            "text": "A county hospital"
          },
          {
            "label": "D",
            "text": "A construction firm"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q51",
        "text": "What problem do the women mention?",
        "options": [
          {
            "label": "A",
            "text": "A building site did not pass an inspection."
          },
          {
            "label": "B",
            "text": "A vehicle needs to be repaired."
          },
          {
            "label": "C",
            "text": "Potential clients have not made a decision."
          },
          {
            "label": "D",
            "text": "Some vendors are making late deliveries."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q52",
        "text": "What does the man recommend?",
        "options": [
          {
            "label": "A",
            "text": "Offering a discount"
          },
          {
            "label": "B",
            "text": "Changing suppliers"
          },
          {
            "label": "C",
            "text": "Forming a committee"
          },
          {
            "label": "D",
            "text": "Closing a branch"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Emiko and Susan—could you give me an update on the negotiations with the city to purchase insurance through our company?"
      },
      {
        "speaker": "W-Am",
        "text": "Well, the city officials expressed interest in buying insurance for all of their emergency vehicles, including ambulances, through us. I sent them a quote, but unfortunately I'm still waiting to hear back."
      },
      {
        "speaker": "W-Br",
        "text": "I've been working on the account with the city parks department, and I have the same problem. They haven't committed yet, either."
      },
      {
        "speaker": "M-Au",
        "text": "Hmm, we could offer them a reduced first-year rate. That might motivate them to make a final decision quickly."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "What has the woman volunteered to do?",
        "options": [
          {
            "label": "A",
            "text": "Try out some new products"
          },
          {
            "label": "B",
            "text": "Purchase beverages for a luncheon"
          },
          {
            "label": "C",
            "text": "Lead a workshop session"
          },
          {
            "label": "D",
            "text": "Organize a hiring event"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q54",
        "text": "What does the man ask the woman to sign?",
        "options": [
          {
            "label": "A",
            "text": "An employee contract"
          },
          {
            "label": "B",
            "text": "An attendance sheet"
          },
          {
            "label": "C",
            "text": "A participant agreement"
          },
          {
            "label": "D",
            "text": "A service estimate"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q55",
        "text": "What will the woman most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Set up her computer"
          },
          {
            "label": "B",
            "text": "Go to another room"
          },
          {
            "label": "C",
            "text": "Have some lunch"
          },
          {
            "label": "D",
            "text": "Make a phone call"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Ms. Moreau, thank you for volunteering to participate in this product testing session."
      },
      {
        "speaker": "W-Am",
        "text": "It sounds interesting. So I'll be testing out some new designs for drinking mugs?"
      },
      {
        "speaker": "M-Cn",
        "text": "Exactly. We want to test if our mugs are easier to drink from than traditional mugs. Before we begin, could you please sign this agreement form? It states that we can use your comments in our marketing campaign."
      },
      {
        "speaker": "W-Am",
        "text": "Sure. But I have one question... Do you have different beverages available? I don't drink coffee."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, definitely—you'll have several to choose from. OK, now let's go join the other participants. Please follow me to Room B."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Where most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "At a hair salon"
          },
          {
            "label": "B",
            "text": "At a catering hall"
          },
          {
            "label": "C",
            "text": "At a laundry service"
          },
          {
            "label": "D",
            "text": "At an energy company"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q57",
        "text": "Why does the woman say, \"they don't have as many clients, though\"?",
        "options": [
          {
            "label": "A",
            "text": "To express pride in her company's growth"
          },
          {
            "label": "B",
            "text": "To explain why an expense is so high"
          },
          {
            "label": "C",
            "text": "To suggest that a strategy should continue"
          },
          {
            "label": "D",
            "text": "To question the accuracy of a client list"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q58",
        "text": "What will happen later today?",
        "options": [
          {
            "label": "A",
            "text": "Some supplies will be delivered."
          },
          {
            "label": "B",
            "text": "An inspection will be conducted."
          },
          {
            "label": "C",
            "text": "An employee meeting will be held."
          },
          {
            "label": "D",
            "text": "An expense report will be submitted."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi Irina, are you all finished styling your client's hair?"
      },
      {
        "speaker": "W-Br",
        "text": "Yes, I cut and blow dried it. She's all set. Now I'm going to sweep the floor and wash some towels."
      },
      {
        "speaker": "M-Cn",
        "text": "Thanks. I wanted to mention something... It seems we're all using too much electricity every month. I'd like us all to start thinking of ways to reduce that expense."
      },
      {
        "speaker": "W-Br",
        "text": "Oh? I didn't realize that was an issue."
      },
      {
        "speaker": "M-Cn",
        "text": "Well, the other salons I own spend about half of what this location does every month."
      },
      {
        "speaker": "W-Br",
        "text": "Hmm... they don't have as many clients, though."
      },
      {
        "speaker": "M-Cn",
        "text": "True, but I still think we all need to make changes nonetheless. We'll discuss it further at the employee meeting later today."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Which industry do the speakers most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Tourism"
          },
          {
            "label": "B",
            "text": "Agriculture"
          },
          {
            "label": "C",
            "text": "Education"
          },
          {
            "label": "D",
            "text": "Engineering"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q60",
        "text": "What does the man say he is concerned about?",
        "options": [
          {
            "label": "A",
            "text": "Expenses"
          },
          {
            "label": "B",
            "text": "Safety"
          },
          {
            "label": "C",
            "text": "Competition"
          },
          {
            "label": "D",
            "text": "Space"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q61",
        "text": "What does the man agree to do?",
        "options": [
          {
            "label": "A",
            "text": "Apply for some funding"
          },
          {
            "label": "B",
            "text": "Do some research"
          },
          {
            "label": "C",
            "text": "Organize a business trip"
          },
          {
            "label": "D",
            "text": "Assemble a work crew"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Thanks for meeting with me today, Diego. Our firm's been contracted by a ferry company to design a hydrogen-powered boat. They're hoping to cut down on their carbon emissions with a boat that runs on clean energy."
      },
      {
        "speaker": "M-Cn",
        "text": "Hmm. A hydrogen power source is going to need a lot of space. Since ferries usually transport cars, I'm concerned about where we'd place the hydrogen source."
      },
      {
        "speaker": "W-Am",
        "text": "Actually this ferry would give tours. So it won't be carrying vehicles, just passengers."
      },
      {
        "speaker": "M-Cn",
        "text": "Then maybe we could store the hydrogen on the deck?"
      },
      {
        "speaker": "W-Am",
        "text": "Possibly. Could you research that before we meet with the ferry company?"
      },
      {
        "speaker": "M-Cn",
        "text": "Absolutely."
      }
    ]
  },
  {
    "testId": 2,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "What does the woman remind the man about?",
        "options": [
          {
            "label": "A",
            "text": "She used to live in the area."
          },
          {
            "label": "B",
            "text": "She needs to stop at a store."
          },
          {
            "label": "C",
            "text": "She attended a seminar last year."
          },
          {
            "label": "D",
            "text": "She has just bought a new car."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Which exit will the speakers take?",
        "options": [
          {
            "label": "A",
            "text": "Maple Road"
          },
          {
            "label": "B",
            "text": "Carter Lane"
          },
          {
            "label": "C",
            "text": "Berk Street"
          },
          {
            "label": "D",
            "text": "High Road"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q64",
        "text": "What will the man ask his coworkers to do?",
        "options": [
          {
            "label": "A",
            "text": "Cancel a reservation"
          },
          {
            "label": "B",
            "text": "Save some seats"
          },
          {
            "label": "C",
            "text": "Sign in at an event"
          },
          {
            "label": "D",
            "text": "Print some materials"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Dolores, thanks again for offering to drive to the technology seminar. I'm not very familiar with the city of Hartsville."
      },
      {
        "speaker": "W-Am",
        "text": "It's no problem. I grew up in downtown Hartsville, remember? I know the area well."
      },
      {
        "speaker": "M-Au",
        "text": "Oh—that's right. Does it take long to get to the conference center from here? I know it's on Carter Lane."
      },
      {
        "speaker": "W-Am",
        "text": "Well, usually not—but the traffic report earlier said that the exit to Carter Lane is closed for repairs. We'll have to take exit eight. It'll take us about twenty minutes longer to get there."
      },
      {
        "speaker": "M-Au",
        "text": "Well, in that case, I'd better call our coworkers and ask them to save us some seats."
      },
      {
        "speaker": "W-Am",
        "text": "Good idea!"
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q62.png"
  },
  {
    "testId": 2,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "Where does the conversation most likely take place?",
        "options": [
          {
            "label": "A",
            "text": "At a hotel"
          },
          {
            "label": "B",
            "text": "At an accounting firm"
          },
          {
            "label": "C",
            "text": "At a doctor's office"
          },
          {
            "label": "D",
            "text": "At a school"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. Which bin will the man use?",
        "options": [
          {
            "label": "A",
            "text": "Bin 1"
          },
          {
            "label": "B",
            "text": "Bin 2"
          },
          {
            "label": "C",
            "text": "Bin 3"
          },
          {
            "label": "D",
            "text": "Bin 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q67",
        "text": "What does the woman suggest?",
        "options": [
          {
            "label": "A",
            "text": "Using a cart"
          },
          {
            "label": "B",
            "text": "Waiting for a confirmation"
          },
          {
            "label": "C",
            "text": "Giving an assignment to a colleague"
          },
          {
            "label": "D",
            "text": "Rescheduling an appointment with a client"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Good work helping the office go paperless, Kentaro. You've scanned and shredded everything that had any personal student data, correct?"
      },
      {
        "speaker": "M-Au",
        "text": "Yes, so now we can get rid of the rest of these old documents—class schedules, information sheets to parents—all of it can be recycled. The bins are out back, right?"
      },
      {
        "speaker": "W-Br",
        "text": "That's right, behind the gym. But don't try to carry all these boxes; they're too heavy. I brought a cart over from the maintenance closet for you to use."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q65.png"
  },
  {
    "testId": 2,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "What type of event are the speakers organizing?",
        "options": [
          {
            "label": "A",
            "text": "An award ceremony"
          },
          {
            "label": "B",
            "text": "A grand-opening celebration"
          },
          {
            "label": "C",
            "text": "A foreign official's reception"
          },
          {
            "label": "D",
            "text": "A fund-raiser"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. What time does the man think the music should begin?",
        "options": [
          {
            "label": "A",
            "text": "At 5:00 P.M."
          },
          {
            "label": "B",
            "text": "At 6:00 P.M."
          },
          {
            "label": "C",
            "text": "At 7:00 P.M."
          },
          {
            "label": "D",
            "text": "At 8:00 P.M."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q70",
        "text": "What information does the man suggest adding to the invitation?",
        "options": [
          {
            "label": "A",
            "text": "The name of a sponsor"
          },
          {
            "label": "B",
            "text": "The location of a concert hall"
          },
          {
            "label": "C",
            "text": "A Web site address"
          },
          {
            "label": "D",
            "text": "A list of performers"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Riccardo, could you take a look at this invitation? It's a draft I put together for our upcoming fund-raiser. Your feedback would be helpful."
      },
      {
        "speaker": "M-Au",
        "text": "Sure. Hmm... It looks good, but we should have the live music start at the same time as dinner. Otherwise, there'll be very little time for the band to perform."
      },
      {
        "speaker": "W-Am",
        "text": "You're right. Anything else?"
      },
      {
        "speaker": "M-Au",
        "text": "Let's add a line at the bottom with the name of our organization, since we're sponsoring the event."
      },
      {
        "speaker": "W-Am",
        "text": "OK, that's an easy addition."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 3,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "Why is the woman seeking a temporary position?",
        "options": [
          {
            "label": "A",
            "text": "To become familiar with local opportunities"
          },
          {
            "label": "B",
            "text": "To gain experience in a new field"
          },
          {
            "label": "C",
            "text": "To have more scheduling flexibility"
          },
          {
            "label": "D",
            "text": "To focus on a specific project"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q33",
        "text": "What skill does the woman have?",
        "options": [
          {
            "label": "A",
            "text": "Accounting"
          },
          {
            "label": "B",
            "text": "Event organizing"
          },
          {
            "label": "C",
            "text": "Team management"
          },
          {
            "label": "D",
            "text": "Computer programming"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q34",
        "text": "Why does the man tell the woman to come in on Wednesday?",
        "options": [
          {
            "label": "A",
            "text": "To complete some paperwork"
          },
          {
            "label": "B",
            "text": "To visit a job site"
          },
          {
            "label": "C",
            "text": "To fill out a survey"
          },
          {
            "label": "D",
            "text": "To present a certificate"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Thank you for registering with the Zimmerman Staffing Agency, Ms. Vogel. Why are you interested in finding a temporary position?"
      },
      {
        "speaker": "W-Br",
        "text": "Well, I moved here recently, so I thought your agency would be a good place to find out about local companies. I don't have a business network here yet."
      },
      {
        "speaker": "M-Cn",
        "text": "I see. Your résumé says you have computer programming experience. That skill's in high demand."
      },
      {
        "speaker": "W-Br",
        "text": "Yes, I did programming for five years at my last job, so I'm very comfortable with it."
      },
      {
        "speaker": "M-Cn",
        "text": "Excellent. We should be able to place you with an employer shortly. As part of the process though, please come in on Wednesday to complete your paperwork."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "Why does the man ask Rosa to go to Montreal?",
        "options": [
          {
            "label": "A",
            "text": "To meet with a client"
          },
          {
            "label": "B",
            "text": "To attend a trade show"
          },
          {
            "label": "C",
            "text": "To train for a position"
          },
          {
            "label": "D",
            "text": "To oversee a construction project"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q36",
        "text": "What does the woman ask permission to do?",
        "options": [
          {
            "label": "A",
            "text": "Take a coworker"
          },
          {
            "label": "B",
            "text": "Change a flight"
          },
          {
            "label": "C",
            "text": "Postpone a deadline"
          },
          {
            "label": "D",
            "text": "Increase an advertising budget"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q37",
        "text": "What will the man most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Prepare some sales data"
          },
          {
            "label": "B",
            "text": "Order some business cards"
          },
          {
            "label": "C",
            "text": "Make a phone call"
          },
          {
            "label": "D",
            "text": "Go to lunch"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hi, Rosa. I'd like you to attend the annual technology trade show in Montreal. A lot of other electronics companies will be there to showcase their latest products."
      },
      {
        "speaker": "W-Am",
        "text": "That's great! I appreciate the opportunity. Can I choose someone from my team to take with me? That way we'll be able to visit more presentations."
      },
      {
        "speaker": "M-Au",
        "text": "Yes, that's a good idea. I'd recommend asking Taro to come with you. Why don't I call him to see if he can come to my office now and discuss it with us."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "Who is the man?",
        "options": [
          {
            "label": "A",
            "text": "A lawyer"
          },
          {
            "label": "B",
            "text": "An electrician"
          },
          {
            "label": "C",
            "text": "A dentist"
          },
          {
            "label": "D",
            "text": "A banker"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q39",
        "text": "Why does the man apologize?",
        "options": [
          {
            "label": "A",
            "text": "Some documents are missing."
          },
          {
            "label": "B",
            "text": "Some equipment is not working."
          },
          {
            "label": "C",
            "text": "An assistant is late."
          },
          {
            "label": "D",
            "text": "A policy was not explained."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q40",
        "text": "Why is Ms. Yamamoto asked to fill out a form?",
        "options": [
          {
            "label": "A",
            "text": "To update her contact information"
          },
          {
            "label": "B",
            "text": "To set up a payment plan"
          },
          {
            "label": "C",
            "text": "To request some records"
          },
          {
            "label": "D",
            "text": "To opt for paperless statements"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Well, Ms. Yamamoto, your x-rays look good. Your teeth and gums are healthy. We'll do a cleaning at your next appointment."
      },
      {
        "speaker": "W-Am",
        "text": "Thank you, but I... I thought I was going to get my teeth cleaned today. I made an appointment for x-rays and a cleaning."
      },
      {
        "speaker": "M-Au",
        "text": "I'm... sorry. Whoever scheduled your appointment must not've explained our policy. For new patients, the first visit is an inspection and x-rays."
      },
      {
        "speaker": "W-Am",
        "text": "I see. OK."
      },
      {
        "speaker": "M-Au",
        "text": "Ms. Yamamoto, please schedule a cleaning for Ms. Patterson."
      },
      {
        "speaker": "W-Br",
        "text": "Of course, I will. Before I do that, I see in your file that we don't have your records from your previous dentist. Would you please fill out this form so we can request them?"
      },
      {
        "speaker": "W-Am",
        "text": "Am sure."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "Who will the woman give a presentation to?",
        "options": [
          {
            "label": "A",
            "text": "New employees"
          },
          {
            "label": "B",
            "text": "Government officials"
          },
          {
            "label": "C",
            "text": "Potential investors"
          },
          {
            "label": "D",
            "text": "Board members"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q42",
        "text": "What does the woman ask the man about?",
        "options": [
          {
            "label": "A",
            "text": "Adjusting a microphone"
          },
          {
            "label": "B",
            "text": "Turning on a monitor"
          },
          {
            "label": "C",
            "text": "Connecting a speaker"
          },
          {
            "label": "D",
            "text": "Using a camera"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q43",
        "text": "What will the man do next?",
        "options": [
          {
            "label": "A",
            "text": "Check a manual"
          },
          {
            "label": "B",
            "text": "Give a demonstration"
          },
          {
            "label": "C",
            "text": "Ask a colleague for help"
          },
          {
            "label": "D",
            "text": "Look for a tool"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi, I'm from the IT department. You wanted help setting up for a teleconference? I can answer any questions you have about the equipment."
      },
      {
        "speaker": "W-Br",
        "text": "Thanks. This is an important meeting. We're looking to finance a new project, and I'm going to present to some people we hope will become investors."
      },
      {
        "speaker": "M-Cn",
        "text": "Well, we'll make sure the technology will work smoothly."
      },
      {
        "speaker": "W-Br",
        "text": "This camera will automatically move to focus on whoever is speaking, right?"
      },
      {
        "speaker": "M-Cn",
        "text": "Yes."
      },
      {
        "speaker": "W-Br",
        "text": "But there will also be times that I want to control the camera manually. Can I do that?"
      },
      {
        "speaker": "M-Cn",
        "text": "Sure, you can do that on the control panel. Let me demonstrate how it works."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "What is the man concerned about?",
        "options": [
          {
            "label": "A",
            "text": "Venue availability"
          },
          {
            "label": "B",
            "text": "Product efficiency"
          },
          {
            "label": "C",
            "text": "A project budget"
          },
          {
            "label": "D",
            "text": "A guest list"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q45",
        "text": "Who is Stefan Vogel?",
        "options": [
          {
            "label": "A",
            "text": "A furniture designer"
          },
          {
            "label": "B",
            "text": "A photographer"
          },
          {
            "label": "C",
            "text": "An accountant"
          },
          {
            "label": "D",
            "text": "An event planner"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q46",
        "text": "What will the speakers do this afternoon?",
        "options": [
          {
            "label": "A",
            "text": "Review some plans"
          },
          {
            "label": "B",
            "text": "Consult with a graphic designer"
          },
          {
            "label": "C",
            "text": "Choose some colors"
          },
          {
            "label": "D",
            "text": "Survey other team members"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Ms. Gupta, do you think you could divert a little more money to the spring catalog?"
      },
      {
        "speaker": "W-Am",
        "text": "Isn't your budget the same as last season's?"
      },
      {
        "speaker": "M-Au",
        "text": "It turns out the cost of photography will be higher this time. Our spring footwear collection has lots of new colors and designs, and some old ones are being discontinued. About half of the photos from last season need to be replaced."
      },
      {
        "speaker": "W-Am",
        "text": "Oh, I didn't realize that."
      },
      {
        "speaker": "M-Au",
        "text": "We could try to find another photographer, but Stefan Vogel always does such a good job."
      },
      {
        "speaker": "W-Am",
        "text": "And we should keep him. Let's look at the plans for the catalog this afternoon and see what revisions can be made."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "Where do the speakers work?",
        "options": [
          {
            "label": "A",
            "text": "At a hardware store"
          },
          {
            "label": "B",
            "text": "At a construction site"
          },
          {
            "label": "C",
            "text": "At a factory"
          },
          {
            "label": "D",
            "text": "At a hotel"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q48",
        "text": "What does the man mean when he says, \"And the rooms are so close together\"?",
        "options": [
          {
            "label": "A",
            "text": "Some renovations will be finished quickly."
          },
          {
            "label": "B",
            "text": "A work schedule will be revised."
          },
          {
            "label": "C",
            "text": "Noise levels will be a problem."
          },
          {
            "label": "D",
            "text": "An architect should be consulted."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q49",
        "text": "What does the woman hope to do before June?",
        "options": [
          {
            "label": "A",
            "text": "Take inventory"
          },
          {
            "label": "B",
            "text": "Order new uniforms"
          },
          {
            "label": "C",
            "text": "Test out some technology"
          },
          {
            "label": "D",
            "text": "Prepare for an inspection"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Did you hear about the smart screens that'll be installed in the guest rooms?"
      },
      {
        "speaker": "W-Am",
        "text": "I did. They're supposed to make it easier for guests to control the temperature in their rooms, schedule wake-up calls, order room service... things like that. And installation should only take an hour in each hotel room."
      },
      {
        "speaker": "M-Cn",
        "text": "But they're going to be using power tools. And the rooms are so close together."
      },
      {
        "speaker": "W-Am",
        "text": "The guest rooms are mostly soundproof. I just hope we have time to test the screens out before our busy season in June. I don't want to deal with complaints about them not working."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "What type of product are the speakers discussing?",
        "options": [
          {
            "label": "A",
            "text": "Pencils"
          },
          {
            "label": "B",
            "text": "Backpacks"
          },
          {
            "label": "C",
            "text": "Sneakers"
          },
          {
            "label": "D",
            "text": "Folders"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q51",
        "text": "What is the woman frustrated by?",
        "options": [
          {
            "label": "A",
            "text": "Some customers wrote a negative review."
          },
          {
            "label": "B",
            "text": "Some equipment is malfunctioning."
          },
          {
            "label": "C",
            "text": "Some team members are unavailable."
          },
          {
            "label": "D",
            "text": "Some packages have not arrived."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q52",
        "text": "Why does the man say, \"The school year is starting in three months\"?",
        "options": [
          {
            "label": "A",
            "text": "To request some time off from work"
          },
          {
            "label": "B",
            "text": "To correct an error in a schedule"
          },
          {
            "label": "C",
            "text": "To express interest in an assignment"
          },
          {
            "label": "D",
            "text": "To emphasize the need for urgency"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hi, Mei Ting. Do you have any updates on how the designs are coming along for our new line of school backpacks? The factory will need those to begin production."
      },
      {
        "speaker": "W-Br",
        "text": "I'm a bit frustrated, honestly. The design team originally planned to meet this week to make final decisions about pocket sizes for the backpacks, but... Irina's been at the School Supply Convention all week and Samir's out on vacation."
      },
      {
        "speaker": "M-Au",
        "text": "So, what are you planning to do? The school year is starting in three months."
      },
      {
        "speaker": "W-Br",
        "text": "I was hoping to get some advice from you, actually... since you used to lead the design team."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "What does the women's company sell?",
        "options": [
          {
            "label": "A",
            "text": "Construction vehicles"
          },
          {
            "label": "B",
            "text": "Power tools"
          },
          {
            "label": "C",
            "text": "Wood products"
          },
          {
            "label": "D",
            "text": "Home appliances"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q54",
        "text": "Why is the man visiting the company?",
        "options": [
          {
            "label": "A",
            "text": "To interview for a job"
          },
          {
            "label": "B",
            "text": "To revise a contract"
          },
          {
            "label": "C",
            "text": "To investigate a problem"
          },
          {
            "label": "D",
            "text": "To make a complaint"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q55",
        "text": "What does the man ask the women to do?",
        "options": [
          {
            "label": "A",
            "text": "Lead him to a specific location"
          },
          {
            "label": "B",
            "text": "Provide him a discounted service"
          },
          {
            "label": "C",
            "text": "Demonstrate a technical procedure"
          },
          {
            "label": "D",
            "text": "Explain a company policy"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hello, I'm George from McKinnie Environmental Engineering."
      },
      {
        "speaker": "W-Am",
        "text": "Hi, thanks for coming. As you can see, we manage a large forest here. We provide lumber, plywood, and fiberboard for the construction and furniture industries. These trees are our business."
      },
      {
        "speaker": "M-Au",
        "text": "And lately you've been noticing a problem?"
      },
      {
        "speaker": "W-Br",
        "text": "Yes, several acres of pine on the other end of our property... the needles are all brown. They look really unhealthy. But we can't figure out what's wrong."
      },
      {
        "speaker": "M-Au",
        "text": "I'll try to determine the cause. Might be a nutrient deficiency. First, I'll conduct some soil tests. Can you show me to the site? I'll follow you in my truck."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "What is the woman renovating?",
        "options": [
          {
            "label": "A",
            "text": "A kitchen"
          },
          {
            "label": "B",
            "text": "A swimming pool"
          },
          {
            "label": "C",
            "text": "A bathroom"
          },
          {
            "label": "D",
            "text": "A garden"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q57",
        "text": "What service does the man's company provide?",
        "options": [
          {
            "label": "A",
            "text": "Landscaping"
          },
          {
            "label": "B",
            "text": "Waste removal"
          },
          {
            "label": "C",
            "text": "Safety inspections"
          },
          {
            "label": "D",
            "text": "Concrete mixing"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q58",
        "text": "According to the man, how is a cost determined?",
        "options": [
          {
            "label": "A",
            "text": "By number of workers"
          },
          {
            "label": "B",
            "text": "By project duration"
          },
          {
            "label": "C",
            "text": "By weight"
          },
          {
            "label": "D",
            "text": "By area"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "How can I help you?"
      },
      {
        "speaker": "W-Br",
        "text": "Hello. I'm doing some renovating at home. I'll be replacing all the pipes, the sink, and the bathtub in my bathroom. The pipes are lead, and the other fixtures are cast iron. They're all very heavy."
      },
      {
        "speaker": "M-Cn",
        "text": "That's no problem. We'll bring a dumpster out to your home, you fill it up with scrap, and then we'll come remove it when you're ready."
      },
      {
        "speaker": "W-Br",
        "text": "OK. So, is payment determined by the number of days I keep the dumpster?"
      },
      {
        "speaker": "M-Cn",
        "text": "No, we'll weigh it before and after and charge you accordingly. Here's a list of charges by kilogram."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Where does the woman work?",
        "options": [
          {
            "label": "A",
            "text": "At a museum"
          },
          {
            "label": "B",
            "text": "At a movie theater"
          },
          {
            "label": "C",
            "text": "At a newspaper office"
          },
          {
            "label": "D",
            "text": "At a photography studio"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q60",
        "text": "Who does the woman say she has hired?",
        "options": [
          {
            "label": "A",
            "text": "An engineer"
          },
          {
            "label": "B",
            "text": "A musician"
          },
          {
            "label": "C",
            "text": "An interpreter"
          },
          {
            "label": "D",
            "text": "A scientist"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q61",
        "text": "What problem does the man mention?",
        "options": [
          {
            "label": "A",
            "text": "Traffic noise"
          },
          {
            "label": "B",
            "text": "Late deliveries"
          },
          {
            "label": "C",
            "text": "Uncomfortable seating"
          },
          {
            "label": "D",
            "text": "Inadequate lighting"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Finley Science Museum. Can I help you?"
      },
      {
        "speaker": "M-Cn",
        "text": "Hi, I'm calling about the asteroid lecture at your planetarium this Friday. I represent a group of people with hearing impairments who'll be attending the lecture."
      },
      {
        "speaker": "W-Am",
        "text": "Oh, yes. I've already been notified, and I've hired a sign-language interpreter. Your group has reserved seats on the right side of the theater, so they'll have a direct view of her."
      },
      {
        "speaker": "M-Cn",
        "text": "Great, thank you. One more thing—at similar events, there've been problems with the venue being too dark. Could you make sure there's a spotlight on the interpreter?"
      },
      {
        "speaker": "W-Am",
        "text": "Absolutely—I'll be happy to arrange that."
      }
    ]
  },
  {
    "testId": 3,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "Why is the woman calling?",
        "options": [
          {
            "label": "A",
            "text": "To compliment a staff member"
          },
          {
            "label": "B",
            "text": "To schedule an appointment"
          },
          {
            "label": "C",
            "text": "To criticize a policy"
          },
          {
            "label": "D",
            "text": "To check on an assignment"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Which drawer will the man probably check next?",
        "options": [
          {
            "label": "A",
            "text": "Drawer 1"
          },
          {
            "label": "B",
            "text": "Drawer 2"
          },
          {
            "label": "C",
            "text": "Drawer 3"
          },
          {
            "label": "D",
            "text": "Drawer 4"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q64",
        "text": "What does the man say about some processes?",
        "options": [
          {
            "label": "A",
            "text": "They are described in a training program."
          },
          {
            "label": "B",
            "text": "They take too long to complete."
          },
          {
            "label": "C",
            "text": "They meet regulations."
          },
          {
            "label": "D",
            "text": "They are easy to learn."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hi, Hiroshi, it's Natalia. I know you're in the middle of completing the internal audit of our company's manufacturing processes, and I just wanted to know how that's going."
      },
      {
        "speaker": "M-Au",
        "text": "Almost done. It all looks good so far. There was one thing... I can't find the retired work instructions, you know, the old paper copies."
      },
      {
        "speaker": "W-Br",
        "text": "The old work instructions are all in the green filing cabinet in the office. The drawers are labeled."
      },
      {
        "speaker": "M-Au",
        "text": "OK, great... The new industry regulations are pretty strict, but, like I said, the processes that I've checked so far are all in compliance."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_03/Part_03/p3_q62.png"
  },
  {
    "testId": 3,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "Where do the speakers work?",
        "options": [
          {
            "label": "A",
            "text": "At a restaurant"
          },
          {
            "label": "B",
            "text": "At a hotel"
          },
          {
            "label": "C",
            "text": "At a travel agency"
          },
          {
            "label": "D",
            "text": "At a marketing firm"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. How much extra money will the man receive in his next paycheck?",
        "options": [
          {
            "label": "A",
            "text": "$400"
          },
          {
            "label": "B",
            "text": "$300"
          },
          {
            "label": "C",
            "text": "$200"
          },
          {
            "label": "D",
            "text": "$100"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q67",
        "text": "What does the man say he will do with the extra money?",
        "options": [
          {
            "label": "A",
            "text": "Fix his car"
          },
          {
            "label": "B",
            "text": "Give it to his parents"
          },
          {
            "label": "C",
            "text": "Put it in the bank"
          },
          {
            "label": "D",
            "text": "Buy a new phone"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hassan, thanks for your help motivating the other servers to collect surveys from customers. We collected over four hundred responses. The owners are going to use the feedback to make some changes to the menu and the table settings."
      },
      {
        "speaker": "M-Au",
        "text": "Your incentive of a bonus certainly helped persuade all the servers. I collected 63, and I know I'm looking forward to having a little extra in my paycheck."
      },
      {
        "speaker": "W-Am",
        "text": "Any plans for how you're going to spend it?"
      },
      {
        "speaker": "M-Au",
        "text": "Actually, my phone is really old, and I've been wanting to upgrade it. The extra cash will help with that."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_03/Part_03/p3_q65.png"
  },
  {
    "testId": 3,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_03/TEST 03_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "What is the woman planning a celebration for?",
        "options": [
          {
            "label": "A",
            "text": "A business merger"
          },
          {
            "label": "B",
            "text": "A colleague's promotion"
          },
          {
            "label": "C",
            "text": "A product launch"
          },
          {
            "label": "D",
            "text": "A company anniversary"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. Which day is the man attending a music festival?",
        "options": [
          {
            "label": "A",
            "text": "On Thursday"
          },
          {
            "label": "B",
            "text": "On Friday"
          },
          {
            "label": "C",
            "text": "On Saturday"
          },
          {
            "label": "D",
            "text": "On Sunday"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q70",
        "text": "What does the woman say she will do next?",
        "options": [
          {
            "label": "A",
            "text": "Purchase a gift"
          },
          {
            "label": "B",
            "text": "Decorate a room"
          },
          {
            "label": "C",
            "text": "Make a reservation"
          },
          {
            "label": "D",
            "text": "Send an invitation"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Satoshi, I'm planning a staff party to celebrate Lena's promotion to director of marketing."
      },
      {
        "speaker": "M-Cn",
        "text": "That's a great idea. When are you thinking of having the party?"
      },
      {
        "speaker": "W-Am",
        "text": "Most people said they'd be available around five on March twenty-second. Does that work for you?"
      },
      {
        "speaker": "M-Cn",
        "text": "Well, I have tickets to a music festival that night, but the festival doesn't start until seven on the twenty-second, so I can come for a little while."
      },
      {
        "speaker": "W-Am",
        "text": "Great! I'll make a reservation at the new restaurant on Baker Street right away. I know Lena has been wanting to try it."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_03/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 4,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "What is the woman preparing for?",
        "options": [
          {
            "label": "A",
            "text": "A holiday raffle"
          },
          {
            "label": "B",
            "text": "A grand opening"
          },
          {
            "label": "C",
            "text": "A retirement party"
          },
          {
            "label": "D",
            "text": "A charity event"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q33",
        "text": "What does the man say he can do?",
        "options": [
          {
            "label": "A",
            "text": "Rush an order"
          },
          {
            "label": "B",
            "text": "Apply a discount"
          },
          {
            "label": "C",
            "text": "Include some free samples"
          },
          {
            "label": "D",
            "text": "Set up a product display"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q34",
        "text": "What does the woman ask about?",
        "options": [
          {
            "label": "A",
            "text": "Payment methods"
          },
          {
            "label": "B",
            "text": "Store hours"
          },
          {
            "label": "C",
            "text": "Return policies"
          },
          {
            "label": "D",
            "text": "Color options"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hello, you've reached Custom Gifts. How can I help you?"
      },
      {
        "speaker": "W-Br",
        "text": "I'd like to order 200 mugs with my café's logo. We're doing some promotional giveaways for the grand opening of our second location, so I'll need them by next Friday."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, that's soon. But I can make this an express order so we'll make that deadline. It'll cost a bit extra. And you'll have to e-mail us your logo."
      },
      {
        "speaker": "W-Br",
        "text": "OK, that's fine. Can you tell me what color mugs are available? I'd like to give customers a choice."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "What most likely is the woman's profession?",
        "options": [
          {
            "label": "A",
            "text": "Sound engineer"
          },
          {
            "label": "B",
            "text": "Travel agent"
          },
          {
            "label": "C",
            "text": "Actor"
          },
          {
            "label": "D",
            "text": "Musician"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q36",
        "text": "Why is the man calling?",
        "options": [
          {
            "label": "A",
            "text": "To ask the woman for a favor"
          },
          {
            "label": "B",
            "text": "To offer the woman a job"
          },
          {
            "label": "C",
            "text": "To purchase some tickets"
          },
          {
            "label": "D",
            "text": "To recommend a colleague"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q37",
        "text": "According to the woman, what might cause a problem?",
        "options": [
          {
            "label": "A",
            "text": "A billing error"
          },
          {
            "label": "B",
            "text": "A schedule conflict"
          },
          {
            "label": "C",
            "text": "A visa requirement"
          },
          {
            "label": "D",
            "text": "A mechanical failure"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hi, Paloma?"
      },
      {
        "speaker": "W-Br",
        "text": "Yes, this is Paloma."
      },
      {
        "speaker": "M-Au",
        "text": "Hi, it's Takumi Sato, from the International Orchestra."
      },
      {
        "speaker": "W-Br",
        "text": "It's good to hear from you, Mr. Sato."
      },
      {
        "speaker": "M-Au",
        "text": "The committee and I listened to the recordings you gave us. Your performances at the Galveston Festival were fantastic."
      },
      {
        "speaker": "W-Br",
        "text": "Oh, I'm glad you liked them."
      },
      {
        "speaker": "M-Au",
        "text": "We also enjoyed your interview. We've decided to offer you the position."
      },
      {
        "speaker": "W-Br",
        "text": "That's wonderful! There's one thing I should let you know about, though. I saw that rehearsals for the next season begin in July, but I'll be traveling in Japan during the first week of July. Will that be a problem?"
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "What kind of event is taking place?",
        "options": [
          {
            "label": "A",
            "text": "A trade show"
          },
          {
            "label": "B",
            "text": "A job fair"
          },
          {
            "label": "C",
            "text": "A fund-raiser"
          },
          {
            "label": "D",
            "text": "A grand opening"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q39",
        "text": "According to the man, what did a client request?",
        "options": [
          {
            "label": "A",
            "text": "Projection equipment"
          },
          {
            "label": "B",
            "text": "Vegetarian meals"
          },
          {
            "label": "C",
            "text": "Additional parking"
          },
          {
            "label": "D",
            "text": "An earlier start time"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q40",
        "text": "What will Fatima do next?",
        "options": [
          {
            "label": "A",
            "text": "Locate some keys"
          },
          {
            "label": "B",
            "text": "Process a payment"
          },
          {
            "label": "C",
            "text": "Make a phone call"
          },
          {
            "label": "D",
            "text": "Check some seating arrangements"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi, Emiko and Fatima. Thanks for coming in early to set up for this evening's event. This is the first time JMA Technologies is hosting their annual fund-raiser here, and I think it'll really increase our hotel's visibility."
      },
      {
        "speaker": "W-Br",
        "text": "Of course. What do you need?"
      },
      {
        "speaker": "M-Cn",
        "text": "Well, JMA has a new AV equipment request. Initially, they wanted only a podium and microphone, but now they'd also like a projector and a screen."
      },
      {
        "speaker": "W-Br",
        "text": "I can set that up now."
      },
      {
        "speaker": "M-Cn",
        "text": "Thanks, Emiko. Fatima, while she's working on that, can you make sure the place settings on the tables are all in order?"
      },
      {
        "speaker": "W-Am",
        "text": "Sure–let me get the seating chart layout so I can check each table against it."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "Where is the conversation most likely taking place?",
        "options": [
          {
            "label": "A",
            "text": "At a vegetable farm"
          },
          {
            "label": "B",
            "text": "At an electronics store"
          },
          {
            "label": "C",
            "text": "At a motorcycle repair shop"
          },
          {
            "label": "D",
            "text": "At a grocery store"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q42",
        "text": "What does the woman ask the man to do?",
        "options": [
          {
            "label": "A",
            "text": "Describe a phone"
          },
          {
            "label": "B",
            "text": "Show a receipt"
          },
          {
            "label": "C",
            "text": "Contact a manufacturer"
          },
          {
            "label": "D",
            "text": "Speak to a mechanic"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q43",
        "text": "What information does the woman give the man?",
        "options": [
          {
            "label": "A",
            "text": "The price of an item"
          },
          {
            "label": "B",
            "text": "The name of a supervisor"
          },
          {
            "label": "C",
            "text": "The location of a product"
          },
          {
            "label": "D",
            "text": "The size of an order"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi, I think I lost my mobile phone while I was shopping here yesterday. The last time I remember using it was in the frozen food aisle. Has anyone turned in a phone?"
      },
      {
        "speaker": "W-Br",
        "text": "Let me check. What does it look like?"
      },
      {
        "speaker": "M-Cn",
        "text": "It has a green protector case with a picture of a motorcycle on the back."
      },
      {
        "speaker": "W-Br",
        "text": "Ah, here it is."
      },
      {
        "speaker": "M-Cn",
        "text": "Thank you so much. Oh. How much are these canned peaches? I forgot to buy them when I was here yesterday."
      },
      {
        "speaker": "W-Br",
        "text": "They're two dollars."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "What field do the speakers most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Accounting"
          },
          {
            "label": "B",
            "text": "Engineering"
          },
          {
            "label": "C",
            "text": "Education"
          },
          {
            "label": "D",
            "text": "Agriculture"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q45",
        "text": "Why does the man say, \"It won't take that long\"?",
        "options": [
          {
            "label": "A",
            "text": "To request the woman's permission"
          },
          {
            "label": "B",
            "text": "To convince the woman to meet"
          },
          {
            "label": "C",
            "text": "To decline an invitation"
          },
          {
            "label": "D",
            "text": "To express surprise about a decision"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q46",
        "text": "What does the woman say she will do after work?",
        "options": [
          {
            "label": "A",
            "text": "Pack for a business trip"
          },
          {
            "label": "B",
            "text": "Go to a dental appointment"
          },
          {
            "label": "C",
            "text": "Pick up a food order"
          },
          {
            "label": "D",
            "text": "Attend a retirement party"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hey, Omar. I know we'd planned to meet today to review résumés for the open junior accountant position, but I'm just swamped."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, what's going on?"
      },
      {
        "speaker": "W-Br",
        "text": "Well, you know I have to finish the quarterly tax filings for two of my top clients... so could we review the résumés tomorrow?"
      },
      {
        "speaker": "M-Cn",
        "text": "It won't take that long. I've already gone through them and separated out the candidates with the accounting experience we're looking for. We just need to decide who to interview."
      },
      {
        "speaker": "W-Br",
        "text": "OK. But I'll have to leave right at five o'clock, because I have a dentist appointment after work."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "According to the woman, what do the results of a survey indicate about a company?",
        "options": [
          {
            "label": "A",
            "text": "It should create an employee award."
          },
          {
            "label": "B",
            "text": "It should provide free transportation."
          },
          {
            "label": "C",
            "text": "Its employees are happy with a training program."
          },
          {
            "label": "D",
            "text": "Its employees are concerned about the environment."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q48",
        "text": "What does the man say he did recently?",
        "options": [
          {
            "label": "A",
            "text": "He accepted a job offer."
          },
          {
            "label": "B",
            "text": "He read an article."
          },
          {
            "label": "C",
            "text": "He downloaded a schedule."
          },
          {
            "label": "D",
            "text": "He met a sales goal."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q49",
        "text": "What does the woman suggest?",
        "options": [
          {
            "label": "A",
            "text": "Hiring a consultant"
          },
          {
            "label": "B",
            "text": "Changing a venue"
          },
          {
            "label": "C",
            "text": "Modifying a production process"
          },
          {
            "label": "D",
            "text": "Recruiting volunteers"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Irina, do you have the results from our latest employee satisfaction survey?"
      },
      {
        "speaker": "W-Br",
        "text": "Yes, and based on the comments, the majority of our employees want us to make the company more environmentally friendly. Apparently, they feel that we don't do enough to promote recycling efforts."
      },
      {
        "speaker": "M-Cn",
        "text": "Hmm, that reminds me about an article I read recently. It said that eco-friendly companies tend to have higher employee satisfaction rates."
      },
      {
        "speaker": "W-Br",
        "text": "In that case, why don't we bring in an outside consultant? We can hire someone who's an expert on finding ways to promote sustainability."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "What type of event did the woman attend?",
        "options": [
          {
            "label": "A",
            "text": "A theater performance"
          },
          {
            "label": "B",
            "text": "A grand opening"
          },
          {
            "label": "C",
            "text": "A professional conference"
          },
          {
            "label": "D",
            "text": "A retirement party"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q51",
        "text": "What does the woman imply when she says, \"That'll be quite challenging\"?",
        "options": [
          {
            "label": "A",
            "text": "She wants to apply for a new position."
          },
          {
            "label": "B",
            "text": "She does not think she can meet a deadline."
          },
          {
            "label": "C",
            "text": "She will need additional funding for a project."
          },
          {
            "label": "D",
            "text": "She admires a colleague's plan."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q52",
        "text": "What does the woman say she will do now?",
        "options": [
          {
            "label": "A",
            "text": "Speak with her assistant"
          },
          {
            "label": "B",
            "text": "Print out her résumé"
          },
          {
            "label": "C",
            "text": "Order some food"
          },
          {
            "label": "D",
            "text": "Make travel arrangements"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Sofia, how was the graphic design conference in Sacramento?"
      },
      {
        "speaker": "W-Am",
        "text": "Very good. I especially enjoyed the sessions on customer service. I think it'll help me serve our clients better."
      },
      {
        "speaker": "M-Au",
        "text": "Great! By the way, have you seen the latest expense report for our design department?"
      },
      {
        "speaker": "W-Am",
        "text": "Not yet. Why?"
      },
      {
        "speaker": "M-Au",
        "text": "We've already exceeded our quarterly budget. We really need to restrict our spending now. So I'm asking everyone to come up with ideas for cutting our department's expenses. Could you write up some ideas by two o'clock today?"
      },
      {
        "speaker": "W-Am",
        "text": "That'll be quite challenging."
      },
      {
        "speaker": "M-Au",
        "text": "I know you just got back, but this is important."
      },
      {
        "speaker": "W-Am",
        "text": "OK. I'll talk to my assistant and have her clear my schedule for the rest of the morning."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "Why is the man calling the Springfield Community Center?",
        "options": [
          {
            "label": "A",
            "text": "He is looking for a backpack."
          },
          {
            "label": "B",
            "text": "He is researching a historical place."
          },
          {
            "label": "C",
            "text": "He is asking about a meeting space."
          },
          {
            "label": "D",
            "text": "He is interested in joining a club."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q54",
        "text": "What does the woman warn the man about?",
        "options": [
          {
            "label": "A",
            "text": "A busy time of the month"
          },
          {
            "label": "B",
            "text": "An early store closing"
          },
          {
            "label": "C",
            "text": "The cost of an event"
          },
          {
            "label": "D",
            "text": "A missing document"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q55",
        "text": "What does the man ask about using?",
        "options": [
          {
            "label": "A",
            "text": "A library"
          },
          {
            "label": "B",
            "text": "A message board"
          },
          {
            "label": "C",
            "text": "A mobile phone"
          },
          {
            "label": "D",
            "text": "A projector"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "This is Springfield Community Center. How can I help you?"
      },
      {
        "speaker": "M-Au",
        "text": "Hi, I'm with the local historical club. We're looking for a place for our monthly meetings."
      },
      {
        "speaker": "W-Br",
        "text": "OK. We have a few rooms that community organizations can reserve. When are your meetings held?"
      },
      {
        "speaker": "M-Au",
        "text": "The first Saturday of each month."
      },
      {
        "speaker": "W-Br",
        "text": "Oh, that's a very popular time. You'll have to reserve the space well in advance."
      },
      {
        "speaker": "M-Au",
        "text": "No problem. I'll do that. Also, I saw that you have a message board at the front of the building. Can groups use it to advertise their events?"
      },
      {
        "speaker": "W-Br",
        "text": "Yes. Notices can be posted a week in advance."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Who most likely is the woman?",
        "options": [
          {
            "label": "A",
            "text": "A cafeteria manager"
          },
          {
            "label": "B",
            "text": "A hotel receptionist"
          },
          {
            "label": "C",
            "text": "A laboratory technician"
          },
          {
            "label": "D",
            "text": "An interior designer"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q57",
        "text": "Why will the woman visit the man's business this afternoon?",
        "options": [
          {
            "label": "A",
            "text": "To perform an inspection"
          },
          {
            "label": "B",
            "text": "To select a product"
          },
          {
            "label": "C",
            "text": "To learn a new skill"
          },
          {
            "label": "D",
            "text": "To interview for a job"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q58",
        "text": "What does the man recommend that the woman bring?",
        "options": [
          {
            "label": "A",
            "text": "Some measurements"
          },
          {
            "label": "B",
            "text": "Some photographs"
          },
          {
            "label": "C",
            "text": "A handbook"
          },
          {
            "label": "D",
            "text": "A business card"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hi, I'm calling because I'm redesigning a hotel lobby for a client, and I'd like the reception countertop to be made of stone."
      },
      {
        "speaker": "M-Cn",
        "text": "We have slabs of granite and marble here in our showroom. You can stop by and choose the one you want."
      },
      {
        "speaker": "W-Am",
        "text": "Great–I'll be there this afternoon. Also... how long will it take before the countertop's installed?"
      },
      {
        "speaker": "M-Cn",
        "text": "For a basic rectangular shape, it takes a week to cut it to size, polish it, and install it. If you have the exact length and width, we can get started as soon as you make your selection."
      },
      {
        "speaker": "W-Am",
        "text": "I'll bring the dimensions."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Who most likely are the program participants?",
        "options": [
          {
            "label": "A",
            "text": "Sales recruiters"
          },
          {
            "label": "B",
            "text": "Prospective clients"
          },
          {
            "label": "C",
            "text": "Building inspectors"
          },
          {
            "label": "D",
            "text": "Management trainees"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q60",
        "text": "What does the man ask about?",
        "options": [
          {
            "label": "A",
            "text": "An office location"
          },
          {
            "label": "B",
            "text": "A budget amount"
          },
          {
            "label": "C",
            "text": "A length of time"
          },
          {
            "label": "D",
            "text": "A list of attendees"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q61",
        "text": "How should the participants communicate a request?",
        "options": [
          {
            "label": "A",
            "text": "By making a phone call"
          },
          {
            "label": "B",
            "text": "By speaking with Ms. Park"
          },
          {
            "label": "C",
            "text": "By sending an e-mail"
          },
          {
            "label": "D",
            "text": "By filling out a form"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Congratulations! As top employees at NGR Industries, you've been selected for our Future Leaders Program. In this program, you'll be rotating through jobs in each division to learn everything about our company. Now my colleague, Ms. Park, will continue."
      },
      {
        "speaker": "W-Br",
        "text": "Thanks, Margaret. This rotational program is critical to becoming a successful manager here. Oh... there's a question in the back?"
      },
      {
        "speaker": "M-Cn",
        "text": "Yes, thank you, Ms. Park. I was wondering how long we'll spend in each department."
      },
      {
        "speaker": "W-Br",
        "text": "You'll work in one department for about two months and then move to another area. Preferences for first assignments will be taken into consideration. You may indicate your preference on the form in front of you."
      }
    ]
  },
  {
    "testId": 4,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "What kind of products does the woman's store sell?",
        "options": [
          {
            "label": "A",
            "text": "Kitchen appliances"
          },
          {
            "label": "B",
            "text": "Sporting goods"
          },
          {
            "label": "C",
            "text": "Luggage"
          },
          {
            "label": "D",
            "text": "Bathroom furnishings"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Which model will the man buy?",
        "options": [
          {
            "label": "A",
            "text": "Country"
          },
          {
            "label": "B",
            "text": "Classic"
          },
          {
            "label": "C",
            "text": "Premier"
          },
          {
            "label": "D",
            "text": "Deluxe"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q64",
        "text": "What is the man concerned about?",
        "options": [
          {
            "label": "A",
            "text": "A price"
          },
          {
            "label": "B",
            "text": "A warranty"
          },
          {
            "label": "C",
            "text": "The installation"
          },
          {
            "label": "D",
            "text": "The quality"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Welcome to Smith's Sports Equipment and More. How may I help you?"
      },
      {
        "speaker": "M-Au",
        "text": "Hi, uh, my brother and I often go biking in the mountains, and I'd like to buy an exterior bike rack for my car."
      },
      {
        "speaker": "W-Br",
        "text": "I can help you with that. We have several sizes available. What carrying capacity do you need?"
      },
      {
        "speaker": "M-Au",
        "text": "Something small... one that can carry up to two bikes, but no more."
      },
      {
        "speaker": "W-Br",
        "text": "Here's a list of our models. We have just what you need."
      },
      {
        "speaker": "M-Au",
        "text": "OK. Is it difficult to attach to the car? I hope it's not too complicated."
      },
      {
        "speaker": "W-Br",
        "text": "Don't worry. It comes with detailed, step-by-step instructions to install it."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_04/Part_03/p3_q62.png"
  },
  {
    "testId": 4,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "What type of business is the woman calling?",
        "options": [
          {
            "label": "A",
            "text": "A catering company"
          },
          {
            "label": "B",
            "text": "A laundry service"
          },
          {
            "label": "C",
            "text": "A flower shop"
          },
          {
            "label": "D",
            "text": "A furniture store"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q66",
        "text": "What does the man say his company is known for?",
        "options": [
          {
            "label": "A",
            "text": "Its prices"
          },
          {
            "label": "B",
            "text": "Its locations"
          },
          {
            "label": "C",
            "text": "Its reliability"
          },
          {
            "label": "D",
            "text": "Its products"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q67",
        "text": "Look at the graphic. What time will the delivery be made?",
        "options": [
          {
            "label": "A",
            "text": "6:00 A.M."
          },
          {
            "label": "B",
            "text": "7:00 A.M."
          },
          {
            "label": "C",
            "text": "8:00 A.M."
          },
          {
            "label": "D",
            "text": "9:00 A.M."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hello. This is Vogel's Laundry Service."
      },
      {
        "speaker": "W-Br",
        "text": "Hi. I'm calling from the Happy Stay Hotel on Forbes Avenue. We're looking for an outside service to wash the hotel's bedding and towels, and I've heard good things about you."
      },
      {
        "speaker": "M-Au",
        "text": "I'm glad to hear that. Our customers will tell you that we're very trustworthy—we're known for our reliable service."
      },
      {
        "speaker": "W-Br",
        "text": "So... what time would you be delivering our clean linens each day?"
      },
      {
        "speaker": "M-Au",
        "text": "It depends on the location. If you take a look at the online delivery map, you'll see that you're in Zone 2."
      },
      {
        "speaker": "W-Br",
        "text": "Oh, I see it now. That would work. The housekeeping staff doesn't start until nine o'clock, so that gives us plenty of time."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_04/Part_03/p3_q65.png"
  },
  {
    "testId": 4,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_04/TEST 04_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "Why does the man want to change an appointment?",
        "options": [
          {
            "label": "A",
            "text": "His car broke down."
          },
          {
            "label": "B",
            "text": "He has to attend a meeting."
          },
          {
            "label": "C",
            "text": "He has a family event."
          },
          {
            "label": "D",
            "text": "He has to wait for a delivery."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. Who will the man see on Friday?",
        "options": [
          {
            "label": "A",
            "text": "Dr. Fontana"
          },
          {
            "label": "B",
            "text": "Dr. Miller"
          },
          {
            "label": "C",
            "text": "Dr. Smith"
          },
          {
            "label": "D",
            "text": "Dr. Yang"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q70",
        "text": "What will the man most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Answer some questions"
          },
          {
            "label": "B",
            "text": "Visit a Web site"
          },
          {
            "label": "C",
            "text": "Make a payment"
          },
          {
            "label": "D",
            "text": "Drive to an office"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hello, Midtown Health Clinic."
      },
      {
        "speaker": "M-Au",
        "text": "Hi. I have an appointment scheduled with Dr. Miller for two o'clock on Wednesday, but I need to change it. I have an important client meeting I need to attend."
      },
      {
        "speaker": "W-Am",
        "text": "OK. What time would you be able to come in?"
      },
      {
        "speaker": "M-Au",
        "text": "Well, I get out of work at five o'clock, so any time after that is fine."
      },
      {
        "speaker": "W-Am",
        "text": "Dr. Miller doesn't have anything past four o'clock this week. But there's an opening at five thirty on Friday with a different doctor?"
      },
      {
        "speaker": "M-Au",
        "text": "OK, that's fine."
      },
      {
        "speaker": "W-Am",
        "text": "Great. Let me ask you a few questions to be sure that none of your information has changed."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_04/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 5,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "Who most likely is the man?",
        "options": [
          {
            "label": "A",
            "text": "A photographer"
          },
          {
            "label": "B",
            "text": "A journalist"
          },
          {
            "label": "C",
            "text": "A florist"
          },
          {
            "label": "D",
            "text": "A caterer"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q33",
        "text": "What is the man concerned about?",
        "options": [
          {
            "label": "A",
            "text": "Contacting his assistant"
          },
          {
            "label": "B",
            "text": "Locating a conference room"
          },
          {
            "label": "C",
            "text": "Moving some equipment"
          },
          {
            "label": "D",
            "text": "Printing a document"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q34",
        "text": "What does the woman give the man?",
        "options": [
          {
            "label": "A",
            "text": "Some keys"
          },
          {
            "label": "B",
            "text": "A parking pass"
          },
          {
            "label": "C",
            "text": "A mobile phone charger"
          },
          {
            "label": "D",
            "text": "A cart"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Hi! Welcome to Gonzalez and Partners."
      },
      {
        "speaker": "Man",
        "text": "Hi, I'm from Federov Portraits. I'm here to take the staff photos for the firm's Web site."
      },
      {
        "speaker": "Woman",
        "text": "Oh, great—we've reserved a conference room down the hall for the photo shoot."
      },
      {
        "speaker": "Man",
        "text": "Thank you. There's just one thing... I have some heavy lighting equipment to bring in from my truck, and the only free parking space was several rows back. Do you have a cart I can use or"
      },
      {
        "speaker": "Woman",
        "text": "I don't, but take this parking pass. You can use it to park in the VIP spot right by the front door."
      },
      {
        "speaker": "Man",
        "text": "Thanks, I'll do that now."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "What will be constructed at an airport?",
        "options": [
          {
            "label": "A",
            "text": "A runway"
          },
          {
            "label": "B",
            "text": "A parking area"
          },
          {
            "label": "C",
            "text": "A storage facility"
          },
          {
            "label": "D",
            "text": "A fueling station"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q36",
        "text": "What is the residents' biggest concern?",
        "options": [
          {
            "label": "A",
            "text": "Money"
          },
          {
            "label": "B",
            "text": "Safety"
          },
          {
            "label": "C",
            "text": "Noise"
          },
          {
            "label": "D",
            "text": "Traffic"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q37",
        "text": "Why has a new meeting location been chosen?",
        "options": [
          {
            "label": "A",
            "text": "It is available on the weekend."
          },
          {
            "label": "B",
            "text": "It is closer to public transportation."
          },
          {
            "label": "C",
            "text": "It provides more space."
          },
          {
            "label": "D",
            "text": "It costs less to rent."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Hi, Barbara and Nancy. Now that our design's been selected for the new parking area at the airport, we can move forward to the next step. Barbara, do you have any updates?"
      },
      {
        "speaker": "Woman 1",
        "text": "Yes, so now we need to consider residents in the surrounding neighborhoods. A preliminary survey showed their biggest concern is the potential increase in traffic."
      },
      {
        "speaker": "Man",
        "text": "Nancy, do we have a meeting set up at city hall for residents to discuss those concerns with us?"
      },
      {
        "speaker": "Woman 2",
        "text": "Yes, on October second, but in a new location. The room at city hall was too small for this purpose, so it'll be held at the high school auditorium instead."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "Who most likely is the woman?",
        "options": [
          {
            "label": "A",
            "text": "An event organizer"
          },
          {
            "label": "B",
            "text": "A marketing consultant"
          },
          {
            "label": "C",
            "text": "A department manager"
          },
          {
            "label": "D",
            "text": "A travel agent"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q39",
        "text": "What did the man order for the woman?",
        "options": [
          {
            "label": "A",
            "text": "A computer tablet"
          },
          {
            "label": "B",
            "text": "A credit card"
          },
          {
            "label": "C",
            "text": "Some furniture"
          },
          {
            "label": "D",
            "text": "Some office supplies"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q40",
        "text": "What does the man suggest the woman do?",
        "options": [
          {
            "label": "A",
            "text": "Save receipts"
          },
          {
            "label": "B",
            "text": "Return a handbook"
          },
          {
            "label": "C",
            "text": "E-mail a client"
          },
          {
            "label": "D",
            "text": "Consult with a supervisor"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Thanks for coming to see me, Helen. How are things going in your new position?"
      },
      {
        "speaker": "Woman",
        "text": "Great, Taro—thanks for asking. The management training that Human Resources provided was very helpful."
      },
      {
        "speaker": "Man",
        "text": "Good. Since you're now part of the management team, I requested a corporate credit card for you. It just came in—here it is."
      },
      {
        "speaker": "Woman",
        "text": "Thanks. I should use this for small day-to-day expenses in my department, like office supplies, right?"
      },
      {
        "speaker": "Man",
        "text": "Correct. By the way, for bigger expenses, like when you're traveling to a conference, you'll need to fill out an expense form when you return. So it's a good idea to save all your receipts."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "What will the man do next week?",
        "options": [
          {
            "label": "A",
            "text": "Meet with some customers"
          },
          {
            "label": "B",
            "text": "Attend a conference"
          },
          {
            "label": "C",
            "text": "Go on vacation"
          },
          {
            "label": "D",
            "text": "Move to another city"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q42",
        "text": "What does the man want the woman to recommend?",
        "options": [
          {
            "label": "A",
            "text": "City tours"
          },
          {
            "label": "B",
            "text": "Transportation services"
          },
          {
            "label": "C",
            "text": "Hotels"
          },
          {
            "label": "D",
            "text": "Restaurants"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q43",
        "text": "What does the man say he will do next?",
        "options": [
          {
            "label": "A",
            "text": "Look up an address"
          },
          {
            "label": "B",
            "text": "Check a bus route"
          },
          {
            "label": "C",
            "text": "Pack some equipment"
          },
          {
            "label": "D",
            "text": "Activate a credit card"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Hey, Martina. I'm going to a conference in Los Angeles next week."
      },
      {
        "speaker": "Woman",
        "text": "Oh, that's where I'm from!"
      },
      {
        "speaker": "Man",
        "text": "That's why I mentioned it. I'll probably be too busy with the conference to see any sights, but at least I can eat some good food while I'm there. I was hoping you could recommend some restaurants to try."
      },
      {
        "speaker": "Woman",
        "text": "Of course! Do you know where your hotel is located? That way I can recommend places that are nearby."
      },
      {
        "speaker": "Man",
        "text": "I don't remember. But the address must be in the confirmation e-mail from the hotel. Let me pull it up right now."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "What does the woman want to discuss?",
        "options": [
          {
            "label": "A",
            "text": "Job candidates"
          },
          {
            "label": "B",
            "text": "Vendor selections"
          },
          {
            "label": "C",
            "text": "Customer survey results"
          },
          {
            "label": "D",
            "text": "Computer system updates"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q45",
        "text": "Why does the man say, \"The report's only half a page long\"?",
        "options": [
          {
            "label": "A",
            "text": "To confirm some details"
          },
          {
            "label": "B",
            "text": "To express disappointment"
          },
          {
            "label": "C",
            "text": "To ask for another assignment"
          },
          {
            "label": "D",
            "text": "To refuse an offer"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q46",
        "text": "What does the woman remind the man about?",
        "options": [
          {
            "label": "A",
            "text": "Checking a social media account"
          },
          {
            "label": "B",
            "text": "Unpacking some equipment"
          },
          {
            "label": "C",
            "text": "Making a reservation"
          },
          {
            "label": "D",
            "text": "Going to a print shop"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "I wanted to talk about the results from the online customer questionnaires we sent out last week. I know you've been exceptionally busy, Mario, but have you had a chance to look at the data?"
      },
      {
        "speaker": "Man",
        "text": "Yes. In fact, I just finished the report. I'll present it to the sales department later today."
      },
      {
        "speaker": "Woman",
        "text": "Already? Fantastic! Did you want me to look it over before the meeting?"
      },
      {
        "speaker": "Man",
        "text": "The report's only half a page long."
      },
      {
        "speaker": "Woman",
        "text": "Ah, OK... Oh, I wanted to remind you to book us a table at your cousin's restaurant. The sales team wants to go there after the meeting tomorrow."
      },
      {
        "speaker": "Man",
        "text": "Sure, I'll do that now."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "What city department does the man work in?",
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
    "testId": 5,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "What did the woman recently review?",
        "options": [
          {
            "label": "A",
            "text": "A sales report"
          },
          {
            "label": "B",
            "text": "An assembly line"
          },
          {
            "label": "C",
            "text": "Some online brochures"
          },
          {
            "label": "D",
            "text": "Some assembly directions"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q51",
        "text": "What does the woman ask the man about?",
        "options": [
          {
            "label": "A",
            "text": "Packaging additional shipments"
          },
          {
            "label": "B",
            "text": "Hiring temporary employees"
          },
          {
            "label": "C",
            "text": "Changing a deadline"
          },
          {
            "label": "D",
            "text": "Sending a press release"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q52",
        "text": "What information will the man provide this afternoon?",
        "options": [
          {
            "label": "A",
            "text": "Overtime schedules"
          },
          {
            "label": "B",
            "text": "Design improvements"
          },
          {
            "label": "C",
            "text": "Production costs"
          },
          {
            "label": "D",
            "text": "Inventory status"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Rohan, I have a question about the production of our new model KT17 wireless headphones. I just reviewed the quarterly sales report. They're selling even better than we expected."
      },
      {
        "speaker": "Man",
        "text": "Yeah, I've heard consumer demand is increasing for those."
      },
      {
        "speaker": "Woman",
        "text": "That's what I wanted to discuss. Do you think we'll need to hire some temporary workers for the factory floor? I'm concerned that we won't be able keep up with the demand over the holidays."
      },
      {
        "speaker": "Man",
        "text": "We do have a lot of existing inventory ready to ship, so we may not need to hire more people. I'll get an exact count of how many KT17 headphones are available for shipment and let you know this afternoon."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "What project are the speakers working on?",
        "options": [
          {
            "label": "A",
            "text": "A news article"
          },
          {
            "label": "B",
            "text": "A training session"
          },
          {
            "label": "C",
            "text": "An advertising campaign"
          },
          {
            "label": "D",
            "text": "A research experiment"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q54",
        "text": "What problem does the man mention?",
        "options": [
          {
            "label": "A",
            "text": "He has a scheduling conflict."
          },
          {
            "label": "B",
            "text": "He missed a presentation."
          },
          {
            "label": "C",
            "text": "Some data is unavailable."
          },
          {
            "label": "D",
            "text": "There are errors in a report."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q55",
        "text": "What will the man do next?",
        "options": [
          {
            "label": "A",
            "text": "Make a phone call"
          },
          {
            "label": "B",
            "text": "Share some images"
          },
          {
            "label": "C",
            "text": "Change a password"
          },
          {
            "label": "D",
            "text": "Edit a document"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Miss Chaudry, I'm glad I caught you before you left for the day. About our meeting tomorrow..."
      },
      {
        "speaker": "Woman",
        "text": "Yes, it's in the afternoon, right? We have to go over your designs for the new advertising campaign for Softwell Shoes."
      },
      {
        "speaker": "Man",
        "text": "I'm sorry, but unfortunately I need to reschedule. I forgot that I have a doctor's appointment."
      },
      {
        "speaker": "Woman",
        "text": "Hmm. Since we're presenting our ideas to the Softwell representative next week, we should discuss them soon. Are you free in the morning instead? At ten o'clock?"
      },
      {
        "speaker": "Man",
        "text": "Yes, that works."
      },
      {
        "speaker": "Woman",
        "text": "OK, great. Oh, and could you post the images in the shared folder? I'd like to look at them in advance."
      },
      {
        "speaker": "Man",
        "text": "Sure. I'll take care of that now."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Where does the conversation most likely take place?",
        "options": [
          {
            "label": "A",
            "text": "At a hotel"
          },
          {
            "label": "B",
            "text": "At a flower farm"
          },
          {
            "label": "C",
            "text": "At a clothing factory"
          },
          {
            "label": "D",
            "text": "At a ferry station"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q57",
        "text": "What did the man have a problem with this morning?",
        "options": [
          {
            "label": "A",
            "text": "An identification badge"
          },
          {
            "label": "B",
            "text": "A parking pass"
          },
          {
            "label": "C",
            "text": "A time card"
          },
          {
            "label": "D",
            "text": "A uniform"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q58",
        "text": "What will the speakers most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Fill out some forms"
          },
          {
            "label": "B",
            "text": "Tour a facility"
          },
          {
            "label": "C",
            "text": "Watch a video"
          },
          {
            "label": "D",
            "text": "Practice a skill"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Woman 1",
        "text": "Welcome, everyone, to your second day of training to be an industrial fabric worker. You did a great job running the sewing machines yesterday. Before we get started, do you have any questions?"
      },
      {
        "speaker": "Man",
        "text": "This isn't about the training, but... this morning, my security badge didn't work. The guard had to let me into the factory."
      },
      {
        "speaker": "Woman 1",
        "text": "OK, I'll follow up with you about that later. Any other questions?"
      },
      {
        "speaker": "Woman 2",
        "text": "Miss Park? Yesterday you showed us how to make a castle knot on the machine. Could we practice that?"
      },
      {
        "speaker": "Woman 1",
        "text": "Of course. Let's practice that knot—it's essential to sewing almost all shirts. Turn on your sewing machines."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "What field do the speakers most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Education"
          },
          {
            "label": "B",
            "text": "Finance"
          },
          {
            "label": "C",
            "text": "Law"
          },
          {
            "label": "D",
            "text": "Medicine"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q60",
        "text": "What does the woman mean when she says, \"I've presented at that conference before\"?",
        "options": [
          {
            "label": "A",
            "text": "She has a lot of professional experience."
          },
          {
            "label": "B",
            "text": "She dislikes giving presentations."
          },
          {
            "label": "C",
            "text": "She understands the man's situation."
          },
          {
            "label": "D",
            "text": "She has completed a requirement."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q61",
        "text": "What do the speakers agree to do?",
        "options": [
          {
            "label": "A",
            "text": "Temporarily close an office"
          },
          {
            "label": "B",
            "text": "Postpone hiring an employee"
          },
          {
            "label": "C",
            "text": "Work on a presentation together"
          },
          {
            "label": "D",
            "text": "Contact some clients"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Hi Dolores, I know we were supposed to review applications for a medical assistant today, but I'm still working on my presentation for the international surgeons' conference next week."
      },
      {
        "speaker": "Woman",
        "text": "No problem. I've presented at that conference before. You'll need to be prepared."
      },
      {
        "speaker": "Man",
        "text": "So... should we reschedule for next week?"
      },
      {
        "speaker": "Woman",
        "text": "Actually, why don't we just postpone hiring someone until next month?"
      },
      {
        "speaker": "Man",
        "text": "That would work better for me. But don't we need someone sooner?"
      },
      {
        "speaker": "Woman",
        "text": "No. Jerome just told me he could stay until we find his replacement."
      }
    ]
  },
  {
    "testId": 5,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "Look at the graphic. Which dish pattern is the man interested in?",
        "options": [
          {
            "label": "A",
            "text": "#4058"
          },
          {
            "label": "B",
            "text": "#4062"
          },
          {
            "label": "C",
            "text": "#4073"
          },
          {
            "label": "D",
            "text": "#4081"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q63",
        "text": "According to the man, what will happen in May?",
        "options": [
          {
            "label": "A",
            "text": "A store will take inventory."
          },
          {
            "label": "B",
            "text": "A new restaurant will open."
          },
          {
            "label": "C",
            "text": "A product line will launch."
          },
          {
            "label": "D",
            "text": "A factory will move to a new location."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q64",
        "text": "What problem does the woman mention?",
        "options": [
          {
            "label": "A",
            "text": "Some shipping fees will increase."
          },
          {
            "label": "B",
            "text": "Some items will become unavailable."
          },
          {
            "label": "C",
            "text": "Some items were damaged during shipping."
          },
          {
            "label": "D",
            "text": "Some catalogs contain inaccurate information."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Thanks for calling Rose Mound Pottery. How can I help you?"
      },
      {
        "speaker": "Man",
        "text": "I'm interested in ordering some dishes that I saw in your catalog for my new restaurant. They're the ones with the large star in the middle and smaller ones around the edge."
      },
      {
        "speaker": "Woman",
        "text": "Yes, I know the ones you mean. Did you notice that pattern's a limited edition?"
      },
      {
        "speaker": "Man",
        "text": "Oh no. I hope they're still available. The grand opening for my restaurant is in May."
      },
      {
        "speaker": "Woman",
        "text": "Yes, they're still in stock. But I know that pattern will be discontinued at the end of the year. They'll be hard to replace after that."
      },
      {
        "speaker": "Man",
        "text": "I'm glad you told me. Then I'll order extra ones now."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_05/Part_03/p3_q62.png"
  },
  {
    "testId": 5,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "What type of business is the woman calling?",
        "options": [
          {
            "label": "A",
            "text": "A railway company"
          },
          {
            "label": "B",
            "text": "A bus company"
          },
          {
            "label": "C",
            "text": "An airline"
          },
          {
            "label": "D",
            "text": "A ferry service"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. What number will be updated?",
        "options": [
          {
            "label": "A",
            "text": "3"
          },
          {
            "label": "B",
            "text": "22"
          },
          {
            "label": "C",
            "text": "11"
          },
          {
            "label": "D",
            "text": "14"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q67",
        "text": "What will the man most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Collect some money"
          },
          {
            "label": "B",
            "text": "Check a seat assignment"
          },
          {
            "label": "C",
            "text": "Make an announcement"
          },
          {
            "label": "D",
            "text": "Send an e-mail"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Taggert Railways. How may I help you?"
      },
      {
        "speaker": "Woman",
        "text": "Good morning. I have a question about a reservation for a trip to San Francisco. The confirmation code is 0146H."
      },
      {
        "speaker": "Man",
        "text": "OK, let me look it up. I see you have three tickets."
      },
      {
        "speaker": "Woman",
        "text": "That's right. I was wondering if there's a train leaving a day earlier, but at the same time."
      },
      {
        "speaker": "Man",
        "text": "Let me check... Yes there is, and the tickets are the same price."
      },
      {
        "speaker": "Woman",
        "text": "Perfect. Then I'd like to make that change."
      },
      {
        "speaker": "Man",
        "text": "OK. Should I use the e-mail associated with your original reservation to send you the new information?"
      },
      {
        "speaker": "Woman",
        "text": "Yes, please."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_05/Part_03/p3_q65.png"
  },
  {
    "testId": 5,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_05/TEST 05_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "What does the man ask the woman for?",
        "options": [
          {
            "label": "A",
            "text": "Some plastic ties"
          },
          {
            "label": "B",
            "text": "Some computer cables"
          },
          {
            "label": "C",
            "text": "An Internet password"
          },
          {
            "label": "D",
            "text": "A storage room key"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q69",
        "text": "What is the man doing tomorrow?",
        "options": [
          {
            "label": "A",
            "text": "Inspecting a factory"
          },
          {
            "label": "B",
            "text": "Upgrading a company database"
          },
          {
            "label": "C",
            "text": "Leading a tour"
          },
          {
            "label": "D",
            "text": "Going on a business trip"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q70",
        "text": "Look at the graphic. Which brand did the man buy?",
        "options": [
          {
            "label": "A",
            "text": "Beep It"
          },
          {
            "label": "B",
            "text": "Filez"
          },
          {
            "label": "C",
            "text": "Loc Pro"
          },
          {
            "label": "D",
            "text": "XMarks"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Margaret, do you have any plastic zip ties? We used some to tie cables together when we installed the servers last week."
      },
      {
        "speaker": "Woman",
        "text": "Sure, they're on my desk. Need help with anything?"
      },
      {
        "speaker": "Man",
        "text": "No, I just need them to fasten some electronic trackers to my luggage. I'm flying to Shanghai tomorrow for a week to meet the new clients, and I want to be able to keep track of my suitcases while I'm traveling."
      },
      {
        "speaker": "Woman",
        "text": "I need one of those. I misplace my keys all the time. How'd you decide which one to buy?"
      },
      {
        "speaker": "Man",
        "text": "The most important feature for me is battery life, so I bought the one with the longest-lasting battery."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_05/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 6,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "What kind of business does the man own?",
        "options": [
          {
            "label": "A",
            "text": "A laundry service"
          },
          {
            "label": "B",
            "text": "A cosmetics company"
          },
          {
            "label": "C",
            "text": "A public relations firm"
          },
          {
            "label": "D",
            "text": "A beverage manufacturer"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q33",
        "text": "What does the man want to know?",
        "options": [
          {
            "label": "A",
            "text": "Who to contact about a purchase"
          },
          {
            "label": "B",
            "text": "Where to send some documents"
          },
          {
            "label": "C",
            "text": "When a delivery will arrive"
          },
          {
            "label": "D",
            "text": "How to use a product"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q34",
        "text": "What does the woman ask the man to provide?",
        "options": [
          {
            "label": "A",
            "text": "An order number"
          },
          {
            "label": "B",
            "text": "A return mailing address"
          },
          {
            "label": "C",
            "text": "A signed contract"
          },
          {
            "label": "D",
            "text": "An online payment"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "You've reached the customer service department of Handel's Label Company."
      },
      {
        "speaker": "M-Cn",
        "text": "My name's Taro Nakamura. I'm the owner of a small cosmetics company, and we recently started manufacturing a lip moisturizer. We placed a large rush order with you last week. We were supposed to get the labels yesterday, but they haven't come yet."
      },
      {
        "speaker": "W-Br",
        "text": "Sorry for the delay, Mr. Nakamura. What is your order number?"
      },
      {
        "speaker": "M-Cn",
        "text": "It's BX856."
      },
      {
        "speaker": "W-Br",
        "text": "There's a note here that we're having issues with transportation due to the construction on roads in your area. But your order will be delivered this afternoon."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "Where most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "On a bus"
          },
          {
            "label": "B",
            "text": "On a train"
          },
          {
            "label": "C",
            "text": "On an airplane"
          },
          {
            "label": "D",
            "text": "On a boat"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q36",
        "text": "What type of entertainment are the speakers discussing?",
        "options": [
          {
            "label": "A",
            "text": "Music"
          },
          {
            "label": "B",
            "text": "Games"
          },
          {
            "label": "C",
            "text": "Movies"
          },
          {
            "label": "D",
            "text": "Books"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q37",
        "text": "What does the woman say is convenient?",
        "options": [
          {
            "label": "A",
            "text": "Being able to download an item"
          },
          {
            "label": "B",
            "text": "Taking a direct route"
          },
          {
            "label": "C",
            "text": "Having reclining seats"
          },
          {
            "label": "D",
            "text": "Selecting meal options online"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Jerome, did you look at the options for in-flight entertainment? One of the options is e-books!"
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, really? Are there any good books listed?"
      },
      {
        "speaker": "W-Am",
        "text": "Yes, actually. There are quite a few best sellers... and you can read them right on the screen in front of your seat."
      },
      {
        "speaker": "M-Cn",
        "text": "Interesting. But this is a short flight; what happens when we land and I haven't finished the book?"
      },
      {
        "speaker": "W-Am",
        "text": "Apparently, if you provide your e-mail address, the airline will send you a link so you can download the book to your personal electronic device. That's so convenient!"
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "What industry does the woman most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Landscaping"
          },
          {
            "label": "B",
            "text": "Health care"
          },
          {
            "label": "C",
            "text": "Event planning"
          },
          {
            "label": "D",
            "text": "Agriculture"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q39",
        "text": "What does the man say he is concerned about?",
        "options": [
          {
            "label": "A",
            "text": "Cost"
          },
          {
            "label": "B",
            "text": "Variety"
          },
          {
            "label": "C",
            "text": "Service dates"
          },
          {
            "label": "D",
            "text": "Location"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q40",
        "text": "What will the speakers do next?",
        "options": [
          {
            "label": "A",
            "text": "Look at a slideshow"
          },
          {
            "label": "B",
            "text": "Have a meal"
          },
          {
            "label": "C",
            "text": "Discuss an estimate"
          },
          {
            "label": "D",
            "text": "Go on a tour"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Thanks for inviting me to visit. As I said on the phone, I'm looking for a local farm to supply vegetables for my restaurant."
      },
      {
        "speaker": "W-Am",
        "text": "Sure. You can sample some of our seasonal produce when I show you around today."
      },
      {
        "speaker": "M-Au",
        "text": "Great. I'm concerned about variety, though. How wide is your selection of vegetables?"
      },
      {
        "speaker": "W-Am",
        "text": "Well... we are constrained by what can be grown here in season. Let's tour the property now. I'll show you what we grow."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "What product are the speakers discussing?",
        "options": [
          {
            "label": "A",
            "text": "Cameras"
          },
          {
            "label": "B",
            "text": "Fitness trackers"
          },
          {
            "label": "C",
            "text": "Wireless speakers"
          },
          {
            "label": "D",
            "text": "Mobile phones"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q42",
        "text": "What complaint did customers have about the product?",
        "options": [
          {
            "label": "A",
            "text": "It was unavailable in stores."
          },
          {
            "label": "B",
            "text": "The price was too high."
          },
          {
            "label": "C",
            "text": "The battery life was short."
          },
          {
            "label": "D",
            "text": "Some features were difficult to use."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q43",
        "text": "What does the man suggest doing?",
        "options": [
          {
            "label": "A",
            "text": "Revising a budget"
          },
          {
            "label": "B",
            "text": "Postponing a product launch"
          },
          {
            "label": "C",
            "text": "Visiting a manufacturing plant"
          },
          {
            "label": "D",
            "text": "Creating a good marketing campaign"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi, Elise. Did you see the feedback from the focus group about our company's latest fitness trackers?"
      },
      {
        "speaker": "W-Br",
        "text": "No, did the customers like the new features that were added?"
      },
      {
        "speaker": "M-Cn",
        "text": "Overall they did. They liked the fact that the new tracker is water resistant and can be worn while swimming. But there were complaints about the battery life."
      },
      {
        "speaker": "W-Br",
        "text": "Yes, I was sure customers would complain about that. The battery life on the older model was seven days, and this one is only five."
      },
      {
        "speaker": "M-Cn",
        "text": "Right. Then we need to create good marketing materials for this new tracker that emphasize the improved features. This will help us to sell the new product."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "What is the topic of the conversation?",
        "options": [
          {
            "label": "A",
            "text": "Recruiting staff"
          },
          {
            "label": "B",
            "text": "Marketing a product"
          },
          {
            "label": "C",
            "text": "Repairing a vehicle"
          },
          {
            "label": "D",
            "text": "Booking a tour"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q45",
        "text": "Where does the man say he used to work?",
        "options": [
          {
            "label": "A",
            "text": "At a driving school"
          },
          {
            "label": "B",
            "text": "At an automobile factory"
          },
          {
            "label": "C",
            "text": "At a hotel"
          },
          {
            "label": "D",
            "text": "At an airport"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q46",
        "text": "Who will the speakers meet with next?",
        "options": [
          {
            "label": "A",
            "text": "A real estate agent"
          },
          {
            "label": "B",
            "text": "A delivery person"
          },
          {
            "label": "C",
            "text": "Lawyers"
          },
          {
            "label": "D",
            "text": "Insurance agents"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "We're making progress setting up our tour bus company, but finding the right drivers will be very important."
      },
      {
        "speaker": "W-Br",
        "text": "You're right. Should we use a recruitment agency?"
      },
      {
        "speaker": "M-Au",
        "text": "We could, but I was thinking... you know I used to work at the Blue Eagle Hotel?"
      },
      {
        "speaker": "W-Br",
        "text": "Yes."
      },
      {
        "speaker": "M-Au",
        "text": "Well, the hotel had a lot of airport shuttle bus drivers. I have their contact info."
      },
      {
        "speaker": "W-Am",
        "text": "Great. Maybe they'll come work for us. Why don't you reach out to them?"
      },
      {
        "speaker": "M-Au",
        "text": "I will, but after our meeting with the insurance company. Remember they'll be here in twenty minutes. I hope we can negotiate a good package to insure our drivers."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "What problem does the woman have?",
        "options": [
          {
            "label": "A",
            "text": "She lost her keys."
          },
          {
            "label": "B",
            "text": "Her phone screen has cracked."
          },
          {
            "label": "C",
            "text": "She injured her finger."
          },
          {
            "label": "D",
            "text": "Her phone is malfunctioning."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q48",
        "text": "What did the woman pay extra for?",
        "options": [
          {
            "label": "A",
            "text": "An extended warranty"
          },
          {
            "label": "B",
            "text": "Twenty-four-hour assistance"
          },
          {
            "label": "C",
            "text": "Express service"
          },
          {
            "label": "D",
            "text": "A personalized design"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q49",
        "text": "What does the man suggest the woman do?",
        "options": [
          {
            "label": "A",
            "text": "Fill out a refund request"
          },
          {
            "label": "B",
            "text": "Call another store"
          },
          {
            "label": "C",
            "text": "Look at some accessories"
          },
          {
            "label": "D",
            "text": "Change a pass code"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "I bought this phone here a few months ago, and the fingerprint recognition feature has stopped working."
      },
      {
        "speaker": "M-Cn",
        "text": "You can still unlock your phone with your pass code, but it doesn't recognize your fingerprint anymore, correct?"
      },
      {
        "speaker": "W-Br",
        "text": "That's right. If it makes a difference, I paid extra for the extended warranty."
      },
      {
        "speaker": "M-Cn",
        "text": "That's good. I can replace it if I can't figure out how to fix it. Give me a few minutes while I check. And feel free to look at our accessories while you're waiting."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "Who is the man?",
        "options": [
          {
            "label": "A",
            "text": "A software designer"
          },
          {
            "label": "B",
            "text": "A landscape architect"
          },
          {
            "label": "C",
            "text": "A factory supervisor"
          },
          {
            "label": "D",
            "text": "A furniture store clerk"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q51",
        "text": "What reason does the woman give for making a change?",
        "options": [
          {
            "label": "A",
            "text": "The business hours would be more convenient."
          },
          {
            "label": "B",
            "text": "The quality of materials would be better."
          },
          {
            "label": "C",
            "text": "A discount is being offered."
          },
          {
            "label": "D",
            "text": "Fewer workers would be needed."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q52",
        "text": "What does the man ask the woman to do?",
        "options": [
          {
            "label": "A",
            "text": "Visit a work site"
          },
          {
            "label": "B",
            "text": "Send a contract"
          },
          {
            "label": "C",
            "text": "Make a counteroffer"
          },
          {
            "label": "D",
            "text": "Request some samples"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "I got your message, Rita."
      },
      {
        "speaker": "W-Br",
        "text": "Since you're the factory manager, I wanted to run something by you. I think we should consider changing our lumber supplier. Ebson Lumber Mill sells very high-quality wood that would be perfect for the wood flooring we produce."
      },
      {
        "speaker": "M-Au",
        "text": "What's the difference in cost?"
      },
      {
        "speaker": "W-Br",
        "text": "Actually, none. The mill is much closer to our factory, so the higher price of the wood would be canceled out by the lower shipping costs. And we'd have a higher-quality product."
      },
      {
        "speaker": "M-Au",
        "text": "Can you ask the mill to send us some samples? I'd like to see them."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "What are the speakers preparing for?",
        "options": [
          {
            "label": "A",
            "text": "A client visit"
          },
          {
            "label": "B",
            "text": "An employee orientation"
          },
          {
            "label": "C",
            "text": "A trade show"
          },
          {
            "label": "D",
            "text": "A fund-raising event"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q54",
        "text": "What does the woman say she needs to do?",
        "options": [
          {
            "label": "A",
            "text": "Send some instructions"
          },
          {
            "label": "B",
            "text": "Make a reservation"
          },
          {
            "label": "C",
            "text": "Order some badges"
          },
          {
            "label": "D",
            "text": "Write a speech"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q55",
        "text": "Why does the woman say, \"The office supply store has a sale\"?",
        "options": [
          {
            "label": "A",
            "text": "To extend an invitation"
          },
          {
            "label": "B",
            "text": "To make a correction"
          },
          {
            "label": "C",
            "text": "To express satisfaction"
          },
          {
            "label": "D",
            "text": "To explain a decision"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Miguel, do you have a minute to chat about the upcoming trade show in Los Angeles?"
      },
      {
        "speaker": "M-Cn",
        "text": "Sure, what's up?"
      },
      {
        "speaker": "W-Br",
        "text": "All I have left to do is to send specific instructions to the event organizers about setting up our booth."
      },
      {
        "speaker": "M-Cn",
        "text": "OK, I'm nearly ready too, but I still need to print those extra business cards we talked about. I know you said the print shop is having a sale this week, so I'll head over there after work."
      },
      {
        "speaker": "W-Br",
        "text": "The office supply store has a sale."
      },
      {
        "speaker": "M-Cn",
        "text": "Ahh... thanks. Good thing I mentioned it!"
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Which department do the speakers most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Human Resources"
          },
          {
            "label": "B",
            "text": "Shipping"
          },
          {
            "label": "C",
            "text": "Information Technology"
          },
          {
            "label": "D",
            "text": "Sales"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q57",
        "text": "Why are the women surprised?",
        "options": [
          {
            "label": "A",
            "text": "An event was canceled."
          },
          {
            "label": "B",
            "text": "A coworker retired on short notice."
          },
          {
            "label": "C",
            "text": "Some business hours were changed."
          },
          {
            "label": "D",
            "text": "Some equipment arrived early."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q58",
        "text": "What complaint does the man have about a previous training?",
        "options": [
          {
            "label": "A",
            "text": "It was not offered to all workers."
          },
          {
            "label": "B",
            "text": "It was not detailed enough."
          },
          {
            "label": "C",
            "text": "It did not include lunch."
          },
          {
            "label": "D",
            "text": "It was not held during work hours."
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Have you heard about the new robots that'll help us out organizing packages? They just arrived."
      },
      {
        "speaker": "W-Br",
        "text": "Oh, yes... the robots to help us sort the shipments. Wait—that's a surprise. I wasn't expecting them until the end of the month!"
      },
      {
        "speaker": "W-Am",
        "text": "That's what I thought, too! They must have moved up the date so we can start using them sooner."
      },
      {
        "speaker": "W-Br",
        "text": "And that means we'll probably get trained on how to use them next week. Remember when they trained us on the new scanners last year?"
      },
      {
        "speaker": "M-Au",
        "text": "Yes, but we didn't get very much detailed information about how to use the scanners. It was very general."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Why does the woman want to move out of her current apartment?",
        "options": [
          {
            "label": "A",
            "text": "It is far from her workplace."
          },
          {
            "label": "B",
            "text": "It is too small."
          },
          {
            "label": "C",
            "text": "It is in a noisy area."
          },
          {
            "label": "D",
            "text": "It is too expensive."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q60",
        "text": "What does the man mean when he says, \"I should be able to lease that unit pretty quickly\"?",
        "options": [
          {
            "label": "A",
            "text": "A rental payment will likely be reduced."
          },
          {
            "label": "B",
            "text": "Investing in a property would be profitable."
          },
          {
            "label": "C",
            "text": "Some renovations will not take long."
          },
          {
            "label": "D",
            "text": "An apartment has a modern layout."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q61",
        "text": "What will the woman most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Post an advertisement"
          },
          {
            "label": "B",
            "text": "Complete a form"
          },
          {
            "label": "C",
            "text": "Order some supplies"
          },
          {
            "label": "D",
            "text": "Provide a reference"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hi, Mr. Rashad. I just stopped by to let you know I won't be renewing my lease. I'm going to rent an apartment that's closer to my job... I'm tired of driving so far to work."
      },
      {
        "speaker": "M-Au",
        "text": "I'm sorry you're leaving—you're an excellent tenant. When will you be moving out?"
      },
      {
        "speaker": "W-Am",
        "text": "The middle of next month. The contract requires that I pay rent for the full month, though, right?"
      },
      {
        "speaker": "M-Au",
        "text": "Well, I should be able to lease that unit pretty quickly. I'll let you know what happens."
      },
      {
        "speaker": "W-Am",
        "text": "All right. Thanks."
      },
      {
        "speaker": "M-Au",
        "text": "Oh, and, there's a form you'll need to fill out to make your notice official. I have it right here..."
      }
    ]
  },
  {
    "testId": 6,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "Why does the man ask the woman to work an extra shift?",
        "options": [
          {
            "label": "A",
            "text": "The store needs cleaning."
          },
          {
            "label": "B",
            "text": "A sale will happen soon."
          },
          {
            "label": "C",
            "text": "A shipment is arriving."
          },
          {
            "label": "D",
            "text": "A coworker has an injury."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Which book is needed for an upcoming event?",
        "options": [
          {
            "label": "A",
            "text": "Cooking with Kids"
          },
          {
            "label": "B",
            "text": "Delicious Dinners"
          },
          {
            "label": "C",
            "text": "Easy Meals at Home"
          },
          {
            "label": "D",
            "text": "Extraordinary Desserts"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q64",
        "text": "Why does the man expect an event to be crowded?",
        "options": [
          {
            "label": "A",
            "text": "It is on a holiday weekend."
          },
          {
            "label": "B",
            "text": "It was advertised on television."
          },
          {
            "label": "C",
            "text": "An author is well-known."
          },
          {
            "label": "D",
            "text": "Free food will be served."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi, Geeta, this is Ming. Sorry to call you on your day off, but I need someone to fill in for Stefan tomorrow at the bookstore. He injured his ankle playing basketball."
      },
      {
        "speaker": "W-Am",
        "text": "Sure, I can take Stefan's shift. Happy to help out."
      },
      {
        "speaker": "M-Cn",
        "text": "Thanks! Also, I have another favor to ask."
      },
      {
        "speaker": "W-Am",
        "text": "Of course. What is it?"
      },
      {
        "speaker": "M-Cn",
        "text": "Well, I was checking our cookbook inventory. We only have seven copies of the book we need for the author event later this month. I'm worried seven won't be enough."
      },
      {
        "speaker": "W-Am",
        "text": "I see. I can definitely order more."
      },
      {
        "speaker": "M-Cn",
        "text": "Thanks! I think the author's going to draw a big crowd. She's pretty well-known and was recently on TV."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q62.png"
  },
  {
    "testId": 6,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "What did the East Lake Band recently do?",
        "options": [
          {
            "label": "A",
            "text": "They won a music award."
          },
          {
            "label": "B",
            "text": "They went on a national tour."
          },
          {
            "label": "C",
            "text": "They released a new recording."
          },
          {
            "label": "D",
            "text": "They added a new member to the group."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. Where do the speakers plan to sit?",
        "options": [
          {
            "label": "A",
            "text": "In Section 1"
          },
          {
            "label": "B",
            "text": "In Section 2"
          },
          {
            "label": "C",
            "text": "In Section 3"
          },
          {
            "label": "D",
            "text": "In Section 4"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q67",
        "text": "What does the man offer to do?",
        "options": [
          {
            "label": "A",
            "text": "Pick up some tickets"
          },
          {
            "label": "B",
            "text": "Provide transportation"
          },
          {
            "label": "C",
            "text": "Bring some umbrellas"
          },
          {
            "label": "D",
            "text": "Make a dinner reservation"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hi, Yuri. Did you hear the East Lake Band is going to play a concert in town?"
      },
      {
        "speaker": "M-Au",
        "text": "Yes! And now they have a great new guitarist. Simone Travers recently started playing with them."
      },
      {
        "speaker": "W-Br",
        "text": "Five of us from the marketing department plan to go together. Would you like to join us?"
      },
      {
        "speaker": "M-Au",
        "text": "That sounds like fun. Where are you going to sit?"
      },
      {
        "speaker": "W-Br",
        "text": "We thought about getting tickets for outdoor seating, but that'd be a problem if it rains. Would the balcony be OK with you?"
      },
      {
        "speaker": "M-Au",
        "text": "Sure. And I'd be happy to drive. My car has room for everyone."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q65.png"
  },
  {
    "testId": 6,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "What does the man plan to do during his meeting?",
        "options": [
          {
            "label": "A",
            "text": "Resolve a security issue"
          },
          {
            "label": "B",
            "text": "Review a travel policy"
          },
          {
            "label": "C",
            "text": "Conduct some job interviews"
          },
          {
            "label": "D",
            "text": "Compare some software packages"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. Which one of the woman's meetings will be changed?",
        "options": [
          {
            "label": "A",
            "text": "Budget Meeting"
          },
          {
            "label": "B",
            "text": "Training Meeting"
          },
          {
            "label": "C",
            "text": "Team Meeting"
          },
          {
            "label": "D",
            "text": "Contract Meeting"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q70",
        "text": "What does the woman say she would like to improve?",
        "options": [
          {
            "label": "A",
            "text": "Her technical knowledge"
          },
          {
            "label": "B",
            "text": "Her organizational skills"
          },
          {
            "label": "C",
            "text": "A training manual"
          },
          {
            "label": "D",
            "text": "A presentation"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Natalia, I have a favor to ask. I have an important video call with the London office on Monday. I'll be interviewing some job candidates there."
      },
      {
        "speaker": "W-Br",
        "text": "OK. How can I help?"
      },
      {
        "speaker": "M-Cn",
        "text": "Well, I want to use Meeting Room B. And due to the different international time zones, I need the morning slot. I saw that you have that time booked already."
      },
      {
        "speaker": "W-Br",
        "text": "OK. I understand. In that case, I'll move my meeting to the afternoon instead. And that's actually good because it'll give me extra time to improve the presentation I'm preparing."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 7,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "Where most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "At a fitness center"
          },
          {
            "label": "B",
            "text": "At a doctor's office"
          },
          {
            "label": "C",
            "text": "At a pharmacy"
          },
          {
            "label": "D",
            "text": "At a bank"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q33",
        "text": "What did the woman do in advance?",
        "options": [
          {
            "label": "A",
            "text": "She checked some business hours."
          },
          {
            "label": "B",
            "text": "She made a list of questions."
          },
          {
            "label": "C",
            "text": "She paid for a service online."
          },
          {
            "label": "D",
            "text": "She completed some forms."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q34",
        "text": "What does the woman say she will do?",
        "options": [
          {
            "label": "A",
            "text": "Get her coat"
          },
          {
            "label": "B",
            "text": "Return to a parking garage"
          },
          {
            "label": "C",
            "text": "Look through a magazine"
          },
          {
            "label": "D",
            "text": "Connect to the Internet"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Hi, my name is Min Zhou. I'm here for my ten o'clock appointment."
      },
      {
        "speaker": "Man",
        "text": "Hmm... with Dr. Farooq, yes, I see. It looks like this is your first visit here, so I'll give you some paperwork to fill out."
      },
      {
        "speaker": "Woman",
        "text": "Actually, I got an e-mail about that ahead of time and filled everything out online. You should already have it."
      },
      {
        "speaker": "Man",
        "text": "Perfect, thank you. In that case, you can take a seat, and the doctor will be with you shortly."
      },
      {
        "speaker": "Woman",
        "text": "Oh... I just realized... I forgot some X-rays in my car. I'll quickly run back to the parking garage."
      },
      {
        "speaker": "Man",
        "text": "OK, no problem."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "Where most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "At a farm"
          },
          {
            "label": "B",
            "text": "At a restaurant"
          },
          {
            "label": "C",
            "text": "At a grocery store"
          },
          {
            "label": "D",
            "text": "At a catering company"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q36",
        "text": "What does the woman say will happen soon?",
        "options": [
          {
            "label": "A",
            "text": "Some friends will join her."
          },
          {
            "label": "B",
            "text": "She will apply for a job."
          },
          {
            "label": "C",
            "text": "She will pay her bill."
          },
          {
            "label": "D",
            "text": "An anniversary will be celebrated."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q37",
        "text": "What does the man imply when he says, \"They're selling quickly\"?",
        "options": [
          {
            "label": "A",
            "text": "An item may be unavailable soon."
          },
          {
            "label": "B",
            "text": "An item is not expensive."
          },
          {
            "label": "C",
            "text": "A delivery should be made immediately."
          },
          {
            "label": "D",
            "text": "Some help will be needed."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Welcome to Mandy's. Would you prefer to dine out on the patio or indoors?"
      },
      {
        "speaker": "Woman",
        "text": "The patio, please."
      },
      {
        "speaker": "Man",
        "text": "OK. Follow me."
      },
      {
        "speaker": "Woman",
        "text": "Oh... Do you think I could get a bigger table? Two of my friends will be joining me in a few minutes."
      },
      {
        "speaker": "Man",
        "text": "Of course. While you wait for your friends, take a look at our menu. Today's specials are maple waffles and a strawberry-mango smoothie."
      },
      {
        "speaker": "Woman",
        "text": "They both sound great."
      },
      {
        "speaker": "Man",
        "text": "Just so you know, everyone likes the waffles. They're selling quickly."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "Where does the man most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a ferry terminal"
          },
          {
            "label": "B",
            "text": "At a bus depot"
          },
          {
            "label": "C",
            "text": "At an airport"
          },
          {
            "label": "D",
            "text": "At a train station"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q39",
        "text": "What problem does the woman have?",
        "options": [
          {
            "label": "A",
            "text": "Her colleague is late."
          },
          {
            "label": "B",
            "text": "Her suitcase is broken."
          },
          {
            "label": "C",
            "text": "A security line is long."
          },
          {
            "label": "D",
            "text": "She lost her ticket."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q40",
        "text": "What will the man borrow from one of his coworkers?",
        "options": [
          {
            "label": "A",
            "text": "A pen"
          },
          {
            "label": "B",
            "text": "A key"
          },
          {
            "label": "C",
            "text": "A jacket"
          },
          {
            "label": "D",
            "text": "A mobile phone"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Do you need help finding your gate?"
      },
      {
        "speaker": "Woman",
        "text": "No—my flight takes off from gate C-11. But I do need some help—my suitcase just broke!"
      },
      {
        "speaker": "Man",
        "text": "Oh no! I'm so sorry to hear that."
      },
      {
        "speaker": "Woman",
        "text": "Do you happen to have any tape that I could use to temporarily patch it up?"
      },
      {
        "speaker": "Man",
        "text": "We do have some packing tape in our storage closet. I'll go get the key to it from another gate attendant."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "Where do the women work?",
        "options": [
          {
            "label": "A",
            "text": "At a construction company"
          },
          {
            "label": "B",
            "text": "At an automotive factory"
          },
          {
            "label": "C",
            "text": "At a chemical plant"
          },
          {
            "label": "D",
            "text": "At an interior design firm"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q42",
        "text": "What is the man's job?",
        "options": [
          {
            "label": "A",
            "text": "Warehouse manager"
          },
          {
            "label": "B",
            "text": "Computer engineer"
          },
          {
            "label": "C",
            "text": "Sales representative"
          },
          {
            "label": "D",
            "text": "Building inspector"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q43",
        "text": "What does Insook plan to do in the afternoon?",
        "options": [
          {
            "label": "A",
            "text": "Finalize a contract"
          },
          {
            "label": "B",
            "text": "Watch a demonstration"
          },
          {
            "label": "C",
            "text": "Visit a property"
          },
          {
            "label": "D",
            "text": "Meet with potential investors"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman 1",
        "text": "Insook, I have to say, the Builders Trade Show has been extremely interesting. I'm glad that our boss decided to send us this year."
      },
      {
        "speaker": "Woman 2",
        "text": "Our construction business is going to benefit a lot from all this helpful information. Oh, let's look at this booth about textile concrete."
      },
      {
        "speaker": "Man",
        "text": "Hi! I can answer any questions you have. I'm Yang Liu, and I'm part of the sales team at Innovative Construction Materials."
      },
      {
        "speaker": "Woman 2",
        "text": "What is textile concrete? Never heard of it."
      },
      {
        "speaker": "Man",
        "text": "Well, it's lighter, less expensive to make, and much stronger than regular reinforced concrete. We're having a product demonstration this afternoon."
      },
      {
        "speaker": "Woman 1",
        "text": "I have a conference call at three, but Insook, you should attend."
      },
      {
        "speaker": "Woman 2",
        "text": "OK, I will!"
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "Why is the man calling?",
        "options": [
          {
            "label": "A",
            "text": "To hire a moving truck"
          },
          {
            "label": "B",
            "text": "To schedule a job interview"
          },
          {
            "label": "C",
            "text": "To make a payment"
          },
          {
            "label": "D",
            "text": "To ask about renting an apartment"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q45",
        "text": "What does the woman suggest the man do soon?",
        "options": [
          {
            "label": "A",
            "text": "Create an online account"
          },
          {
            "label": "B",
            "text": "Schedule an appointment"
          },
          {
            "label": "C",
            "text": "Take some measurements"
          },
          {
            "label": "D",
            "text": "Review a contract"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q46",
        "text": "What does the man say he will do?",
        "options": [
          {
            "label": "A",
            "text": "Call back next week"
          },
          {
            "label": "B",
            "text": "Write a report"
          },
          {
            "label": "C",
            "text": "Use another agency"
          },
          {
            "label": "D",
            "text": "Contact some references"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Freemont Real Estate. This is So-Hee. How can I help you?"
      },
      {
        "speaker": "Man",
        "text": "Hi, I'm moving to Freemont next month and am looking to rent an apartment. I'd really like to live on the waterfront. Would your agency be able to help me?"
      },
      {
        "speaker": "Woman",
        "text": "Absolutely. There's a beautiful new building right on the water where we've found apartments for a few clients recently. They're filling up fast, though, so I'd suggest setting up an appointment with me as soon as you can."
      },
      {
        "speaker": "Man",
        "text": "I'd like to, but I don't know my schedule just yet. I'll give you a call back within the next week to set up a tour."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "Why was the man late to work?",
        "options": [
          {
            "label": "A",
            "text": "He was stuck in traffic."
          },
          {
            "label": "B",
            "text": "He missed a train."
          },
          {
            "label": "C",
            "text": "He had a doctor's appointment."
          },
          {
            "label": "D",
            "text": "He woke up late."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q48",
        "text": "What is scheduled to be delivered today?",
        "options": [
          {
            "label": "A",
            "text": "Company uniforms"
          },
          {
            "label": "B",
            "text": "Desktop computers"
          },
          {
            "label": "C",
            "text": "Cleaning supplies"
          },
          {
            "label": "D",
            "text": "Informational brochures"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q49",
        "text": "What business will the man call?",
        "options": [
          {
            "label": "A",
            "text": "A plumbing service"
          },
          {
            "label": "B",
            "text": "A catering company"
          },
          {
            "label": "C",
            "text": "An automotive repair company"
          },
          {
            "label": "D",
            "text": "An electronics recycling center"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Good morning, Ms. Zhang. Sorry I'm late to work—traffic was really slow this morning. Everyone's driving carefully because of the rain."
      },
      {
        "speaker": "Woman",
        "text": "No problem, Richard. The store's been pretty quiet today. I just hope the stormy weather doesn't delay the delivery truck!"
      },
      {
        "speaker": "Man",
        "text": "Are we expecting a delivery?"
      },
      {
        "speaker": "Woman",
        "text": "I'm replacing the two desktop computers in our office. The new ones are supposed to arrive today. In fact, I was going to ask you to help me set them up."
      },
      {
        "speaker": "Man",
        "text": "I'd be happy to. By the way, what are you doing with the old computers? I know of an electronics recycling center. They even pick up!"
      },
      {
        "speaker": "Woman",
        "text": "Wonderful! Could you give them a call?"
      },
      {
        "speaker": "Man",
        "text": "Sure."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "Who most likely is the woman?",
        "options": [
          {
            "label": "A",
            "text": "A client"
          },
          {
            "label": "B",
            "text": "A supervisor"
          },
          {
            "label": "C",
            "text": "An intern"
          },
          {
            "label": "D",
            "text": "A vendor"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q51",
        "text": "What is a benefit of a new material?",
        "options": [
          {
            "label": "A",
            "text": "It is strong."
          },
          {
            "label": "B",
            "text": "It is lightweight."
          },
          {
            "label": "C",
            "text": "It is warm."
          },
          {
            "label": "D",
            "text": "It is soft."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q52",
        "text": "What will the speakers do next?",
        "options": [
          {
            "label": "A",
            "text": "Contact a colleague"
          },
          {
            "label": "B",
            "text": "Plan a celebration"
          },
          {
            "label": "C",
            "text": "Look at some samples"
          },
          {
            "label": "D",
            "text": "Review a document"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Good morning, Hiroshi and Carlos. I'd like to talk to both of you about your current project."
      },
      {
        "speaker": "Man 1",
        "text": "Sure, Ms. Park. Right now, we're designing the denim line: jeans, of course, but also some jackets."
      },
      {
        "speaker": "Woman",
        "text": "That's why I wanted to talk to you. The product management team has actually decided to use a new fabric for this line. It's a cotton and wool blend."
      },
      {
        "speaker": "Man 2",
        "text": "Really! That's interesting. Hmm... the wool should increase the warmth of our denim items, which is good."
      },
      {
        "speaker": "Man 1",
        "text": "You're right. But... I'm worried about whether this change will affect our deadlines."
      },
      {
        "speaker": "Woman",
        "text": "I'm going to review the new project plan with you now—I have it right here."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "What type of event are the speakers discussing?",
        "options": [
          {
            "label": "A",
            "text": "A holiday party"
          },
          {
            "label": "B",
            "text": "A conference"
          },
          {
            "label": "C",
            "text": "A grand opening"
          },
          {
            "label": "D",
            "text": "A job fair"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q54",
        "text": "What does the woman say attendees will receive?",
        "options": [
          {
            "label": "A",
            "text": "A discounted rate"
          },
          {
            "label": "B",
            "text": "A raffle ticket"
          },
          {
            "label": "C",
            "text": "Free transportation"
          },
          {
            "label": "D",
            "text": "A city map"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q55",
        "text": "What do the speakers need to do soon?",
        "options": [
          {
            "label": "A",
            "text": "Write a short speech"
          },
          {
            "label": "B",
            "text": "Submit a budget report"
          },
          {
            "label": "C",
            "text": "Notify some employees"
          },
          {
            "label": "D",
            "text": "Sign a contract"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "I just received the proposed contract from the Westerly Hotel for hosting our conference there. I just need your approval on it."
      },
      {
        "speaker": "Man",
        "text": "We used that hotel for last year's conference and got good feedback from most people who went."
      },
      {
        "speaker": "Woman",
        "text": "Right, and the contract includes the room block as well, so our attendees will receive a discounted price on their hotel rooms."
      },
      {
        "speaker": "Man",
        "text": "OK. If you could leave the contract on my desk, I'll take a look a little later."
      },
      {
        "speaker": "Woman",
        "text": "Thanks. We'll need to sign the agreement by the end of the week."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Who most likely is the man?",
        "options": [
          {
            "label": "A",
            "text": "An advertising executive"
          },
          {
            "label": "B",
            "text": "A factory manager"
          },
          {
            "label": "C",
            "text": "A customer service representative"
          },
          {
            "label": "D",
            "text": "A product designer"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q57",
        "text": "What does the woman imply when she says, \"Our clients are interested in environmentally friendly products\"?",
        "options": [
          {
            "label": "A",
            "text": "She is frustrated with her clients."
          },
          {
            "label": "B",
            "text": "She is surprised by some feedback."
          },
          {
            "label": "C",
            "text": "She approves of the man's idea."
          },
          {
            "label": "D",
            "text": "She thinks the man is unfamiliar with a topic."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q58",
        "text": "What does the man say will take place on Friday?",
        "options": [
          {
            "label": "A",
            "text": "An awards ceremony"
          },
          {
            "label": "B",
            "text": "A managers' meeting"
          },
          {
            "label": "C",
            "text": "A safety inspection"
          },
          {
            "label": "D",
            "text": "A training class"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Woman",
        "text": "Hi, Sam. Can you give me an update on the phone case your team's designing for the Parker SI16 mobile phone?"
      },
      {
        "speaker": "Man",
        "text": "Sure. You said to experiment, so we tried something new: a case that's environmentally friendly. It's made of 100 percent recycled materials. What do you think?"
      },
      {
        "speaker": "Woman",
        "text": "Our clients are interested in environmentally friendly products."
      },
      {
        "speaker": "Man",
        "text": "Good. We hope to have some designs ready to present at the managers' meeting that's happening on Friday."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Who is the man?",
        "options": [
          {
            "label": "A",
            "text": "An art gallery owner"
          },
          {
            "label": "B",
            "text": "A store manager"
          },
          {
            "label": "C",
            "text": "A hair stylist"
          },
          {
            "label": "D",
            "text": "A real estate agent"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q60",
        "text": "What does the woman say happened last week?",
        "options": [
          {
            "label": "A",
            "text": "She visited some relatives."
          },
          {
            "label": "B",
            "text": "She received a raise."
          },
          {
            "label": "C",
            "text": "She gave a presentation."
          },
          {
            "label": "D",
            "text": "She purchased a building."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q61",
        "text": "What does the man recommend doing?",
        "options": [
          {
            "label": "A",
            "text": "Postponing a project"
          },
          {
            "label": "B",
            "text": "Using a mobile phone application"
          },
          {
            "label": "C",
            "text": "Creating some promotional flyers"
          },
          {
            "label": "D",
            "text": "Ordering some name tags"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Welcome to Marston Paints. I'm the manager here. How can I help you today?"
      },
      {
        "speaker": "Woman",
        "text": "Hi. Last week I bought an office building nearby, and I'm planning to have all the interior walls repainted."
      },
      {
        "speaker": "Man",
        "text": "Welcome to the neighborhood! Have you decided on a color for your walls?"
      },
      {
        "speaker": "Woman",
        "text": "Not yet. I was hoping you would have some samples?"
      },
      {
        "speaker": "Man",
        "text": "Sure. You know, we also have a mobile phone application that you might find useful."
      },
      {
        "speaker": "Woman",
        "text": "How so?"
      },
      {
        "speaker": "Man",
        "text": "It'll help you visualize what your office will look like with different-colored walls. Just take a picture of the space and upload it to the app. You'll be prompted to enter different color codes to see what it would look like."
      }
    ]
  },
  {
    "testId": 7,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "What problem are the speakers mainly discussing?",
        "options": [
          {
            "label": "A",
            "text": "An event venue is unavailable."
          },
          {
            "label": "B",
            "text": "A project deadline has passed."
          },
          {
            "label": "C",
            "text": "A document contains spelling errors."
          },
          {
            "label": "D",
            "text": "A video file is not working."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Whose e-mail does the woman mention?",
        "options": [
          {
            "label": "A",
            "text": "Claudine Li's"
          },
          {
            "label": "B",
            "text": "Elise Choi's"
          },
          {
            "label": "C",
            "text": "Anya Lundly's"
          },
          {
            "label": "D",
            "text": "Madoka Ito's"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q64",
        "text": "What event will happen this weekend?",
        "options": [
          {
            "label": "A",
            "text": "A local election"
          },
          {
            "label": "B",
            "text": "A corporate fund-raiser"
          },
          {
            "label": "C",
            "text": "A city festival"
          },
          {
            "label": "D",
            "text": "A sports competition"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Simone, I know you wanted me to add music to the video you uploaded. But when I went to work on it, the video file wouldn't open. I wonder if there's something wrong with it."
      },
      {
        "speaker": "Woman",
        "text": "You mean the one for the Riverton City promotional video? It's odd that it's not working. I got an e-mail earlier about that video. I'm about to answer it, so I'll ask her to send another copy of the file."
      },
      {
        "speaker": "Man",
        "text": "Thanks. We have to finish the video by Friday. The annual Riverton City Cultural Festival is this weekend, and they're planning to debut it there."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_07/Part_03/p3_q62.png"
  },
  {
    "testId": 7,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "What does the man say the store has recently done?",
        "options": [
          {
            "label": "A",
            "text": "Replaced some equipment"
          },
          {
            "label": "B",
            "text": "Updated a company logo"
          },
          {
            "label": "C",
            "text": "Installed a security system"
          },
          {
            "label": "D",
            "text": "Painted some shelving units"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. Which item will the store order?",
        "options": [
          {
            "label": "A",
            "text": "Item 231"
          },
          {
            "label": "B",
            "text": "Item 498"
          },
          {
            "label": "C",
            "text": "Item 540"
          },
          {
            "label": "D",
            "text": "Item 762"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q67",
        "text": "What does the man say he will do next?",
        "options": [
          {
            "label": "A",
            "text": "Print a receipt"
          },
          {
            "label": "B",
            "text": "Stock some shelves"
          },
          {
            "label": "C",
            "text": "Finalize a schedule"
          },
          {
            "label": "D",
            "text": "Find a credit card"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Mei Ting, have you ordered the new shopping bags for our store yet? Since we've recently updated our logo, the bags should have our new logo on them."
      },
      {
        "speaker": "Woman",
        "text": "Let's look at our options online... We want the same type of bags we use now, right—the large plastic bags?"
      },
      {
        "speaker": "Man",
        "text": "What about switching to large paper bags? It's easier to see our logo on the paper bags, so it'd be a better way to promote our store."
      },
      {
        "speaker": "Woman",
        "text": "Good point. I'll order the large ones, then."
      },
      {
        "speaker": "Man",
        "text": "And while you're doing that, I'll stock the displays. The shelves are looking a little empty."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_07/Part_03/p3_q65.png"
  },
  {
    "testId": 7,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_07/TEST 07_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "Who most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "Lawyers"
          },
          {
            "label": "B",
            "text": "Bakers"
          },
          {
            "label": "C",
            "text": "Accountants"
          },
          {
            "label": "D",
            "text": "Doctors"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. Which building does the man say he likes?",
        "options": [
          {
            "label": "A",
            "text": "Building 1"
          },
          {
            "label": "B",
            "text": "Building 2"
          },
          {
            "label": "C",
            "text": "Building 3"
          },
          {
            "label": "D",
            "text": "Building 4"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q70",
        "text": "What does the woman ask the man to do?",
        "options": [
          {
            "label": "A",
            "text": "E-mail a real estate agent"
          },
          {
            "label": "B",
            "text": "Make a lunch reservation"
          },
          {
            "label": "C",
            "text": "Contact some colleagues"
          },
          {
            "label": "D",
            "text": "Upload some photographs"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "Man",
        "text": "Hey, Anya... I sent you a map with several office buildings. I also attached some photos and the dimensions of the rooms. What do you think about one of these for our new law offices?"
      },
      {
        "speaker": "Woman",
        "text": "Well, the one closest to the courthouse would be very convenient."
      },
      {
        "speaker": "Man",
        "text": "Actually, I think the one across the street from the library is better for our legal firm. It's still on the same street as the courthouse, and I like the layout more."
      },
      {
        "speaker": "Woman",
        "text": "That sounds good. Can you call Emiko and Satoshi and see when they're free? I'd like them to go see the offices with us."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_07/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 8,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "Where are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "At a museum"
          },
          {
            "label": "B",
            "text": "At a public library"
          },
          {
            "label": "C",
            "text": "At an art supply shop"
          },
          {
            "label": "D",
            "text": "At a botanical garden"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q33",
        "text": "What type of pass does the woman qualify for?",
        "options": [
          {
            "label": "A",
            "text": "Student"
          },
          {
            "label": "B",
            "text": "Local resident"
          },
          {
            "label": "C",
            "text": "Senior citizen"
          },
          {
            "label": "D",
            "text": "Tour group"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q34",
        "text": "What will the man check?",
        "options": [
          {
            "label": "A",
            "text": "A ticket"
          },
          {
            "label": "B",
            "text": "A receipt"
          },
          {
            "label": "C",
            "text": "An event schedule"
          },
          {
            "label": "D",
            "text": "An identification card"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Welcome to the Trellisville Museum of Art. How can I help you?"
      },
      {
        "speaker": "W-Am",
        "text": "I'd like an all-day pass, please."
      },
      {
        "speaker": "M-Cn",
        "text": "Sure. Just so you know, we've introduced resident and nonresident prices for the museum. Do you happen to be a resident of Trellisville?"
      },
      {
        "speaker": "W-Am",
        "text": "Yes, I've lived here for more than twenty years."
      },
      {
        "speaker": "M-Cn",
        "text": "Wonderful. All I need to see is a piece of ID with your address."
      },
      {
        "speaker": "W-Am",
        "text": "OK, here's my driver's license."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "What type of business does the woman work for?",
        "options": [
          {
            "label": "A",
            "text": "A construction company"
          },
          {
            "label": "B",
            "text": "A real estate agency"
          },
          {
            "label": "C",
            "text": "A law firm"
          },
          {
            "label": "D",
            "text": "A medical office"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q36",
        "text": "What does the man ask the woman to do?",
        "options": [
          {
            "label": "A",
            "text": "Reschedule an appointment"
          },
          {
            "label": "B",
            "text": "Forward a telephone call"
          },
          {
            "label": "C",
            "text": "Send an invoice"
          },
          {
            "label": "D",
            "text": "Provide a refund"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q37",
        "text": "What does the woman say a business has recently done?",
        "options": [
          {
            "label": "A",
            "text": "It has updated a payment system."
          },
          {
            "label": "B",
            "text": "It has purchased new equipment."
          },
          {
            "label": "C",
            "text": "It has renovated a room."
          },
          {
            "label": "D",
            "text": "It has hired temporary staff."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hello, I'm calling from Dr. Park's office. This is a courtesy reminder that you have an annual health checkup on Friday at two thirty P.M."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, I completely forgot about that. But... uh... my car needs to be repaired, and I'm taking it to the mechanic on Friday. Could I reschedule for next week?"
      },
      {
        "speaker": "W-Br",
        "text": "Let's see... It looks like we have only one appointment available at ten A.M. next Wednesday."
      },
      {
        "speaker": "M-Cn",
        "text": "I'll take it."
      },
      {
        "speaker": "W-Br",
        "text": "OK. It's scheduled. When you come, I hope you'll enjoy our new waiting room. We've recently remodeled it to make it more comfortable."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "Why is a street blocked off?",
        "options": [
          {
            "label": "A",
            "text": "A tree is being removed."
          },
          {
            "label": "B",
            "text": "A car is being towed."
          },
          {
            "label": "C",
            "text": "Some charging stations are being installed."
          },
          {
            "label": "D",
            "text": "Some holes are being filled."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q39",
        "text": "What most likely is the woman's profession?",
        "options": [
          {
            "label": "A",
            "text": "Auto mechanic"
          },
          {
            "label": "B",
            "text": "Musician"
          },
          {
            "label": "C",
            "text": "Park ranger"
          },
          {
            "label": "D",
            "text": "Teacher"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q40",
        "text": "What does the man suggest the woman do?",
        "options": [
          {
            "label": "A",
            "text": "Purchase an electric car"
          },
          {
            "label": "B",
            "text": "File a complaint"
          },
          {
            "label": "C",
            "text": "Postpone a meeting"
          },
          {
            "label": "D",
            "text": "Drive to another location"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Excuse me, sir. Are you part of the road crew that's working here? I'm wondering why I can't turn on to this street."
      },
      {
        "speaker": "M-Cn",
        "text": "The street will be blocked off until five P.M. while we put in some charging stations for electric cars. Once they're installed, people will be able to charge their cars while they're parked here."
      },
      {
        "speaker": "W-Am",
        "text": "But I'm already late for a recording session, and this street has the closest parking spots to the music studio. Plus, I have to carry my guitars there."
      },
      {
        "speaker": "M-Cn",
        "text": "I'm sorry, but if you go to the next block, there are some open spots there."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "Where do the speakers work?",
        "options": [
          {
            "label": "A",
            "text": "At a grocery store"
          },
          {
            "label": "B",
            "text": "At a cooking school"
          },
          {
            "label": "C",
            "text": "At a restaurant"
          },
          {
            "label": "D",
            "text": "At a food-processing plant"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q42",
        "text": "What does the woman ask the man to do?",
        "options": [
          {
            "label": "A",
            "text": "Make some deliveries"
          },
          {
            "label": "B",
            "text": "Open a cash register"
          },
          {
            "label": "C",
            "text": "Label some products"
          },
          {
            "label": "D",
            "text": "Clean some machinery"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q43",
        "text": "What does the woman imply when she says, \"we open at seven\"?",
        "options": [
          {
            "label": "A",
            "text": "The man must work quickly."
          },
          {
            "label": "B",
            "text": "The man should take a break."
          },
          {
            "label": "C",
            "text": "The man unlocked the doors too early."
          },
          {
            "label": "D",
            "text": "The man is mistaken about a schedule."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Good morning, Ms. Osman. I arrived a little early, so I already swept the aisles and I'm in the process of restocking the frozen foods section. Is there anything else you need me to do to get the store ready for the day?"
      },
      {
        "speaker": "W-Br",
        "text": "Can you also open up the second cash register?"
      },
      {
        "speaker": "M-Au",
        "text": "Sure, I'll do that as soon as I finish restocking the frozen vegetables."
      },
      {
        "speaker": "W-Br",
        "text": "OK... Remember, though, we open at seven."
      },
      {
        "speaker": "M-Au",
        "text": "Got it. I just have a few boxes of vegetables left."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "Who most likely is the woman?",
        "options": [
          {
            "label": "A",
            "text": "A graphic designer"
          },
          {
            "label": "B",
            "text": "A sales person"
          },
          {
            "label": "C",
            "text": "An auto mechanic"
          },
          {
            "label": "D",
            "text": "A human resources executive"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q45",
        "text": "Why is the woman worried she might not be offered a job?",
        "options": [
          {
            "label": "A",
            "text": "She missed an application deadline."
          },
          {
            "label": "B",
            "text": "She has limited experience."
          },
          {
            "label": "C",
            "text": "She is competing with other qualified candidates."
          },
          {
            "label": "D",
            "text": "She did not perform well in a telephone interview."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q46",
        "text": "What does the woman say she will do on Thursday?",
        "options": [
          {
            "label": "A",
            "text": "Call a recruiter"
          },
          {
            "label": "B",
            "text": "Tour a factory"
          },
          {
            "label": "C",
            "text": "Sign a contract"
          },
          {
            "label": "D",
            "text": "Update a résumé"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "How'd the interview for the graphic designer position with Hackley Motors go?"
      },
      {
        "speaker": "W-Am",
        "text": "Very well! They called me back for a second interview."
      },
      {
        "speaker": "M-Cn",
        "text": "Wow, they must've really liked you."
      },
      {
        "speaker": "W-Am",
        "text": "I think so. But there's quite a bit of competition. A lot of qualified people are applying for this graphic designer position, so I really need to do well in the next round of interviews."
      },
      {
        "speaker": "M-Cn",
        "text": "I'm sure you'll do great. When's the second interview?"
      },
      {
        "speaker": "W-Am",
        "text": "Thursday. I'll be visiting the factory and they'll show me around."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "Where does the conversation take place?",
        "options": [
          {
            "label": "A",
            "text": "At a bookshop"
          },
          {
            "label": "B",
            "text": "At a supermarket"
          },
          {
            "label": "C",
            "text": "At a furniture store"
          },
          {
            "label": "D",
            "text": "At a craft store"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q48",
        "text": "What is the purpose of the man's visit?",
        "options": [
          {
            "label": "A",
            "text": "To have an item appraised"
          },
          {
            "label": "B",
            "text": "To film a commercial"
          },
          {
            "label": "C",
            "text": "To deliver some supplies"
          },
          {
            "label": "D",
            "text": "To conduct some repairs"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q49",
        "text": "According to Margaret, what can be found by the entrance?",
        "options": [
          {
            "label": "A",
            "text": "A shopping basket"
          },
          {
            "label": "B",
            "text": "A brochure"
          },
          {
            "label": "C",
            "text": "A light switch"
          },
          {
            "label": "D",
            "text": "A plastic cover"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Welcome to Sandelman's Rare Books. How can I help you?"
      },
      {
        "speaker": "M-Au",
        "text": "Hi, I have this first edition book that I'd like to know the value of. I called yesterday to confirm that you do book appraisals here..."
      },
      {
        "speaker": "W-Am",
        "text": "Yes, my colleague, Margaret, assesses the value of books."
      },
      {
        "speaker": "W-Br",
        "text": "Hi, I'm Margaret. I see that your book is in... fair condition. Where do you store it?"
      },
      {
        "speaker": "M-Au",
        "text": "I keep it on my bookcase at home."
      },
      {
        "speaker": "W-Br",
        "text": "I ask because it looks like it's got some sun damage. It's a good idea to use a plastic cover to protect a book like this from exposure to the sunlight. We have some near the entrance with the other maintenance products, if you're interested."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "Where does the man most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a hotel"
          },
          {
            "label": "B",
            "text": "At a post office"
          },
          {
            "label": "C",
            "text": "At a travel agency"
          },
          {
            "label": "D",
            "text": "At an office supply store"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q51",
        "text": "Why was the woman unavailable for two weeks?",
        "options": [
          {
            "label": "A",
            "text": "She was on vacation."
          },
          {
            "label": "B",
            "text": "She was moving to a new location."
          },
          {
            "label": "C",
            "text": "She was traveling for business."
          },
          {
            "label": "D",
            "text": "She was without phone service."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q52",
        "text": "What does the man recommend doing?",
        "options": [
          {
            "label": "A",
            "text": "Filing a complaint"
          },
          {
            "label": "B",
            "text": "Visiting another location"
          },
          {
            "label": "C",
            "text": "Making reservations online"
          },
          {
            "label": "D",
            "text": "Downloading a mobile application"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hi. I'm here to pick up a package. I found this notice on my door indicating I missed a delivery."
      },
      {
        "speaker": "M-Cn",
        "text": "OK, let me check my computer. Hmm, apparently the postal carrier tried to deliver it three times, but no one was home to sign for it."
      },
      {
        "speaker": "W-Br",
        "text": "Oh no! I've been away on business the last two weeks. I just saw the notice yesterday."
      },
      {
        "speaker": "M-Cn",
        "text": "I'm sorry, but it's already been returned to the sender."
      },
      {
        "speaker": "W-Br",
        "text": "I understand. Is there any way to avoid this in the future?"
      },
      {
        "speaker": "M-Cn",
        "text": "I'd suggest downloading our mobile application. Then you can track packages and receive delivery notifications online."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "According to the speakers, what has recently been completed?",
        "options": [
          {
            "label": "A",
            "text": "A map"
          },
          {
            "label": "B",
            "text": "A brochure"
          },
          {
            "label": "C",
            "text": "A hiking trail"
          },
          {
            "label": "D",
            "text": "A memorial statue"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q54",
        "text": "What do the women suggest doing?",
        "options": [
          {
            "label": "A",
            "text": "Expanding parking areas"
          },
          {
            "label": "B",
            "text": "Organizing an art festival"
          },
          {
            "label": "C",
            "text": "Changing a bus route"
          },
          {
            "label": "D",
            "text": "Offering walking tours"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q55",
        "text": "Why will Priyanka post a public notice?",
        "options": [
          {
            "label": "A",
            "text": "To identify ticket sale locations"
          },
          {
            "label": "B",
            "text": "To encourage people to vote"
          },
          {
            "label": "C",
            "text": "To request volunteers"
          },
          {
            "label": "D",
            "text": "To announce some winners"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Great work, both of you, on the new visitor brochure for Silverton. The pictures you selected for it really highlight the town nicely."
      },
      {
        "speaker": "W-Am",
        "text": "Thanks. Now we can spend time focusing on other ways that our committee can promote tourism in Silverton. Priyanka and I have a suggestion."
      },
      {
        "speaker": "W-Br",
        "text": "Right. We think it'd be a good idea to offer walking tours of the city center as a way to teach visitors about our town's history. We could ask for volunteers to run the tours. I can post a notice about it around town."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Where do the speakers most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a cosmetics company"
          },
          {
            "label": "B",
            "text": "At a home appliance outlet"
          },
          {
            "label": "C",
            "text": "At an art supply store"
          },
          {
            "label": "D",
            "text": "At a textile factory"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q57",
        "text": "What does the man say about some new machinery?",
        "options": [
          {
            "label": "A",
            "text": "It requires very little maintenance."
          },
          {
            "label": "B",
            "text": "It is easy to learn how to use."
          },
          {
            "label": "C",
            "text": "It has made a process faster."
          },
          {
            "label": "D",
            "text": "It has not been installed yet."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q58",
        "text": "What does the woman ask the man to prepare?",
        "options": [
          {
            "label": "A",
            "text": "A price list"
          },
          {
            "label": "B",
            "text": "A meeting invitation"
          },
          {
            "label": "C",
            "text": "A handbook"
          },
          {
            "label": "D",
            "text": "A report"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Enzo, have you looked at the latest production numbers for the Shimmer Bright moisturizing lotion?"
      },
      {
        "speaker": "M-Cn",
        "text": "Yes, our production is up by nearly twenty percent. And not only for the lotion, but also for some of the lip glosses and nail polishes."
      },
      {
        "speaker": "W-Am",
        "text": "That's great to hear! I was wondering how it was going since we upgraded the assembly line machinery."
      },
      {
        "speaker": "M-Cn",
        "text": "The new machinery has definitely sped up the manufacturing process."
      },
      {
        "speaker": "W-Am",
        "text": "I have a meeting tomorrow with the management team. Do you think you could prepare a status report that I could share at the meeting?"
      },
      {
        "speaker": "M-Cn",
        "text": "I'd be happy to."
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Why did the man miss a conference?",
        "options": [
          {
            "label": "A",
            "text": "His plane was delayed."
          },
          {
            "label": "B",
            "text": "He was busy with a project."
          },
          {
            "label": "C",
            "text": "He was not feeling well."
          },
          {
            "label": "D",
            "text": "He missed a registration deadline."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q60",
        "text": "What does the man recommend the woman do?",
        "options": [
          {
            "label": "A",
            "text": "Edit a press release"
          },
          {
            "label": "B",
            "text": "Consult with a coworker"
          },
          {
            "label": "C",
            "text": "Hire a marketing expert"
          },
          {
            "label": "D",
            "text": "Review a departmental budget"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q61",
        "text": "What does the woman mean when she says, \"I ran out of handouts\"?",
        "options": [
          {
            "label": "A",
            "text": "She was unprepared for a presentation."
          },
          {
            "label": "B",
            "text": "A coworker made an error."
          },
          {
            "label": "C",
            "text": "A presentation was well attended."
          },
          {
            "label": "D",
            "text": "Some information can only be found online."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hi Mary. I'm sorry I didn't make it to the biotech conference last week. I needed to finish an important project."
      },
      {
        "speaker": "W-Br",
        "text": "No problem. You know, I met a reporter at the conference.... She's really interested in our company's new medical device. She's going to interview me about it this week for a science magazine."
      },
      {
        "speaker": "M-Au",
        "text": "That'll make the marketing department happy. You should reach out to one of our coworkers in that department."
      },
      {
        "speaker": "W-Br",
        "text": "That's a good idea. I'll talk to Megumi Ito."
      },
      {
        "speaker": "M-Au",
        "text": "So how did your conference presentation go? I know you were worried about attendance. You said you probably prepared too many materials for a small crowd."
      },
      {
        "speaker": "W-Br",
        "text": "Actually, I ran out of handouts!"
      },
      {
        "speaker": "M-Au",
        "text": "Nice!"
      }
    ]
  },
  {
    "testId": 8,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "What will the speakers ask about?",
        "options": [
          {
            "label": "A",
            "text": "A refund"
          },
          {
            "label": "B",
            "text": "A seat change"
          },
          {
            "label": "C",
            "text": "Food options"
          },
          {
            "label": "D",
            "text": "Internet access"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q63",
        "text": "What do the speakers want to prepare for?",
        "options": [
          {
            "label": "A",
            "text": "An employee interview"
          },
          {
            "label": "B",
            "text": "A meeting with potential clients"
          },
          {
            "label": "C",
            "text": "An annual safety inspection"
          },
          {
            "label": "D",
            "text": "A product-testing session"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q64",
        "text": "Look at the graphic. What platform will speakers go to?",
        "options": [
          {
            "label": "A",
            "text": "Platform 3"
          },
          {
            "label": "B",
            "text": "Platform 9"
          },
          {
            "label": "C",
            "text": "Platform 12"
          },
          {
            "label": "D",
            "text": "Platform 17"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hi, Alberto. I couldn't get us tickets next to each other, but we can ask the train conductor about switching our seats when we get on board."
      },
      {
        "speaker": "M-Au",
        "text": "Oh, good. That way we can prepare for our meeting this afternoon. These could be really important clients for us. If they sign this contract, it'll definitely expand our business in that region."
      },
      {
        "speaker": "W-Am",
        "text": "You're right. I'll ask right away if we can switch. Let's see... our train leaves at nine twenty-four. Why don't we head over to the platform now?"
      },
      {
        "speaker": "M-Au",
        "text": "Sounds good."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q62.png"
  },
  {
    "testId": 8,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "Who most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "Landscapers"
          },
          {
            "label": "B",
            "text": "Photographers"
          },
          {
            "label": "C",
            "text": "Architects"
          },
          {
            "label": "D",
            "text": "Real estate agents"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q66",
        "text": "What will the man do after he leaves?",
        "options": [
          {
            "label": "A",
            "text": "Have a vehicle repaired"
          },
          {
            "label": "B",
            "text": "E-mail a contract"
          },
          {
            "label": "C",
            "text": "Return some equipment"
          },
          {
            "label": "D",
            "text": "Go to a bank"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q67",
        "text": "Look at the graphic. Where will the woman put up a sign?",
        "options": [
          {
            "label": "A",
            "text": "At location A"
          },
          {
            "label": "B",
            "text": "At location B"
          },
          {
            "label": "C",
            "text": "At location C"
          },
          {
            "label": "D",
            "text": "At location D"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hey, Lisa... I just talked to the property manager, and she's very happy with the new trees and flowers we planted."
      },
      {
        "speaker": "W-Am",
        "text": "Great! Does that mean we're done for the day?"
      },
      {
        "speaker": "M-Cn",
        "text": "Almost. We just have to water the new plants and pack up our tools. Can you do that, though? I need to head across town to the bank to make a deposit."
      },
      {
        "speaker": "W-Am",
        "text": "OK."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, and please put up our promotional sign. The property manager is fine with that. Can you put it up at the intersection of Hill Lane and Meadow Street?"
      },
      {
        "speaker": "W-Am",
        "text": "Sure, I'll do that."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q65.png"
  },
  {
    "testId": 8,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_08/TEST 08_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "Who recommended that the woman subscribe to the Portsville Times?",
        "options": [
          {
            "label": "A",
            "text": "A professor"
          },
          {
            "label": "B",
            "text": "A friend"
          },
          {
            "label": "C",
            "text": "A colleague"
          },
          {
            "label": "D",
            "text": "A relative"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. Which subscription option does the man recommend?",
        "options": [
          {
            "label": "A",
            "text": "Option 1"
          },
          {
            "label": "B",
            "text": "Option 2"
          },
          {
            "label": "C",
            "text": "Option 3"
          },
          {
            "label": "D",
            "text": "Option 4"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q70",
        "text": "What will the man most likely do next?",
        "options": [
          {
            "label": "A",
            "text": "Confirm an address"
          },
          {
            "label": "B",
            "text": "Choose a password"
          },
          {
            "label": "C",
            "text": "Provide a discount code"
          },
          {
            "label": "D",
            "text": "Process a payment"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "This is customer service for the Portsville Times. How can I help you?"
      },
      {
        "speaker": "W-Am",
        "text": "Hi! I'm calling to subscribe to your paper. My best friend recommended it."
      },
      {
        "speaker": "M-Au",
        "text": "Well, please tell your friend that we appreciate her recommendation. Now, we have several options to choose from—are you interested in having the paper delivered to your house?"
      },
      {
        "speaker": "W-Am",
        "text": "No, that's not necessary. I prefer to read articles on my tablet computer."
      },
      {
        "speaker": "M-Au",
        "text": "All right, sounds like you just need online access, then. Our digital subscription is nine dollars a month."
      },
      {
        "speaker": "W-Am",
        "text": "That's perfect."
      },
      {
        "speaker": "M-Au",
        "text": "OK. I'll just need your credit card information to begin processing your subscription."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_08/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 9,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "Where does the man work?",
        "options": [
          {
            "label": "A",
            "text": "At a department store"
          },
          {
            "label": "B",
            "text": "At a bank"
          },
          {
            "label": "C",
            "text": "At an electronics store"
          },
          {
            "label": "D",
            "text": "At an apartment complex"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q33",
        "text": "Why is the woman calling?",
        "options": [
          {
            "label": "A",
            "text": "To confirm a payment amount"
          },
          {
            "label": "B",
            "text": "To schedule an appointment"
          },
          {
            "label": "C",
            "text": "To ask for a replacement item"
          },
          {
            "label": "D",
            "text": "To check on a delayed shipment"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q34",
        "text": "What does the man ask for?",
        "options": [
          {
            "label": "A",
            "text": "A confirmation number"
          },
          {
            "label": "B",
            "text": "A location"
          },
          {
            "label": "C",
            "text": "An event date"
          },
          {
            "label": "D",
            "text": "A completed form"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Oakview Apartments. Chan-Ho speaking."
      },
      {
        "speaker": "W-Am",
        "text": "Good morning. I'm a resident here, and lost my key. It must have fallen off my key chain. I'll need a new one."
      },
      {
        "speaker": "M-Cn",
        "text": "I'm sorry to hear that. I have an extra key here in the management office. I'll send one of the maintenance workers over with it."
      },
      {
        "speaker": "W-Am",
        "text": "Thank you so much. I really appreciate it."
      },
      {
        "speaker": "M-Cn",
        "text": "No problem. Can you tell me which unit is yours?"
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "Where does the conversation most likely take place?",
        "options": [
          {
            "label": "A",
            "text": "At a museum"
          },
          {
            "label": "B",
            "text": "At a library"
          },
          {
            "label": "C",
            "text": "At a theater"
          },
          {
            "label": "D",
            "text": "At an art school"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q36",
        "text": "Why is the man visiting?",
        "options": [
          {
            "label": "A",
            "text": "To meet a friend"
          },
          {
            "label": "B",
            "text": "To take some photographs"
          },
          {
            "label": "C",
            "text": "To do research for a book"
          },
          {
            "label": "D",
            "text": "To deliver a shipment"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q37",
        "text": "Why does the woman suggest that the man hurry?",
        "options": [
          {
            "label": "A",
            "text": "An event will begin shortly."
          },
          {
            "label": "B",
            "text": "Closing time is approaching."
          },
          {
            "label": "C",
            "text": "A wait time is long."
          },
          {
            "label": "D",
            "text": "Seating is limited."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Here's your admission ticket. It includes access to our seventeenth-century pottery exhibit-it just opened this weekend."
      },
      {
        "speaker": "M-Au",
        "text": "Thanks, I came here specifically to see that. I'm writing a book about European pottery, and there's a vase I want to take a closer look at."
      },
      {
        "speaker": "W-Am",
        "text": "Then you might also be interested in today's special lecture. We have an archaeologist here to talk about how pottery is dated. You'll have to hurry though. It starts in just a few minutes."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "Who is Chris Suzuki?",
        "options": [
          {
            "label": "A",
            "text": "A shift manager"
          },
          {
            "label": "B",
            "text": "An inspector"
          },
          {
            "label": "C",
            "text": "An apprentice"
          },
          {
            "label": "D",
            "text": "A new client"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q39",
        "text": "Where is the conversation most likely taking place?",
        "options": [
          {
            "label": "A",
            "text": "In a hardware store"
          },
          {
            "label": "B",
            "text": "In a factory"
          },
          {
            "label": "C",
            "text": "In a storage facility"
          },
          {
            "label": "D",
            "text": "In a product showroom"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q40",
        "text": "What will the woman probably do next?",
        "options": [
          {
            "label": "A",
            "text": "Negotiate a contract with Chris"
          },
          {
            "label": "B",
            "text": "Review scheduling procedures with Chris"
          },
          {
            "label": "C",
            "text": "Introduce Chris to some colleagues"
          },
          {
            "label": "D",
            "text": "Show Chris the cafeteria"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hey, Pierre. This is Chris Suzuki. He's our new apprentice."
      },
      {
        "speaker": "M-Cn",
        "text": "Nice to meet you, Chris. So you're training to become a welder?"
      },
      {
        "speaker": "M-Au",
        "text": "Actually, a machinist. I'll spend part of my apprenticeship studying welding, and I'll also learn to read blueprints and operate machinery."
      },
      {
        "speaker": "M-Cn",
        "text": "Well, you came to the right place. There're plenty of experienced workers and opportunities for hands-on practice in this factory."
      },
      {
        "speaker": "M-Au",
        "text": "I'm excited to get started."
      },
      {
        "speaker": "W-Br",
        "text": "Well, we'll let you get back to work. I want Chris to meet a few more people before the shift ends."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "What will most likely be celebrated on Friday?",
        "options": [
          {
            "label": "A",
            "text": "A promotion"
          },
          {
            "label": "B",
            "text": "A retirement"
          },
          {
            "label": "C",
            "text": "A graduation"
          },
          {
            "label": "D",
            "text": "A business deal"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q42",
        "text": "What does the man offer to do?",
        "options": [
          {
            "label": "A",
            "text": "Look for a receipt"
          },
          {
            "label": "B",
            "text": "Send invitations"
          },
          {
            "label": "C",
            "text": "Reserve a room"
          },
          {
            "label": "D",
            "text": "Prepare a dessert"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q43",
        "text": "What does the woman say she is looking forward to?",
        "options": [
          {
            "label": "A",
            "text": "Visiting her family"
          },
          {
            "label": "B",
            "text": "Moving to a different city"
          },
          {
            "label": "C",
            "text": "Traveling internationally"
          },
          {
            "label": "D",
            "text": "Organizing a team"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hi, Marisol. I got the invitation from Sunita about your party on Friday. I can't believe this is your last week here. You've had quite a career."
      },
      {
        "speaker": "W-Am",
        "text": "Thank you. It's been great."
      },
      {
        "speaker": "M-Cn",
        "text": "I'll definitely be at the party. What's your favorite dessert?"
      },
      {
        "speaker": "W-Am",
        "text": "Oh, I love cheesecake."
      },
      {
        "speaker": "M-Cn",
        "text": "OK, I have the perfect recipe. Well, this is exciting. So, what's next for you?"
      },
      {
        "speaker": "W-Am",
        "text": "I'm going overseas to Europe for a couple of weeks. I can't wait."
      },
      {
        "speaker": "M-Cn",
        "text": "Sounds amazing."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "What was the problem with the man's previous floor mat?",
        "options": [
          {
            "label": "A",
            "text": "It was not durable."
          },
          {
            "label": "B",
            "text": "It had a strong odor."
          },
          {
            "label": "C",
            "text": "It damaged the floor."
          },
          {
            "label": "D",
            "text": "It was too small."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q45",
        "text": "What does the woman invite the man to do?",
        "options": [
          {
            "label": "A",
            "text": "View images in a catalog"
          },
          {
            "label": "B",
            "text": "Read about special features"
          },
          {
            "label": "C",
            "text": "Watch a demonstration"
          },
          {
            "label": "D",
            "text": "Open a package"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q46",
        "text": "According to the woman, why is a manufacturer proud of its floor mats?",
        "options": [
          {
            "label": "A",
            "text": "They are easy to clean."
          },
          {
            "label": "B",
            "text": "They can be used on a variety of surfaces."
          },
          {
            "label": "C",
            "text": "They allow for free movement."
          },
          {
            "label": "D",
            "text": "They can be rolled or folded."
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Excuse me. I'm looking at these floor mats. My office chair scratches my hardwood floor, so I need something to protect it. I bought a mat somewhere else, but it had a strong plastic smell."
      },
      {
        "speaker": "W-Am",
        "text": "That shouldn't be a problem with our floor mats. You're welcome to take one out of the box to see for yourself."
      },
      {
        "speaker": "M-Au",
        "text": "Thanks. Is there a chair I can try it with? I want to make sure the wheels won't sink into it."
      },
      {
        "speaker": "W-Am",
        "text": "Sure. These mats have a patented easy-glide surface, meaning they're firm enough to let you freely maneuver around your work space in a rolling chair. It's something the manufacturer's particularly proud of."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "What industry do the speakers most likely work in?",
        "options": [
          {
            "label": "A",
            "text": "Music"
          },
          {
            "label": "B",
            "text": "Restaurant"
          },
          {
            "label": "C",
            "text": "Film production"
          },
          {
            "label": "D",
            "text": "Book publishing"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q48",
        "text": "What does the man mean when he says, \"we just switched to a new software program\"?",
        "options": [
          {
            "label": "A",
            "text": "He needs to consult a user's manual."
          },
          {
            "label": "B",
            "text": "The quality of his work will improve."
          },
          {
            "label": "C",
            "text": "A task may take longer than expected."
          },
          {
            "label": "D",
            "text": "A training session should be organized."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q49",
        "text": "Why does the woman congratulate the man?",
        "options": [
          {
            "label": "A",
            "text": "He won an award."
          },
          {
            "label": "B",
            "text": "He received a promotion."
          },
          {
            "label": "C",
            "text": "He will be leading a team."
          },
          {
            "label": "D",
            "text": "He developed some new software."
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Abdullah, have you edited the film footage for that frozen food commercial yet?"
      },
      {
        "speaker": "M-Cn",
        "text": "The video and music are done, but I'm still working on the dubbing to add the actors' voices in."
      },
      {
        "speaker": "W-Am",
        "text": "Can you have it finished by the end of the week? The client hoped to have it air on television next Monday."
      },
      {
        "speaker": "M-Cn",
        "text": "Well, we just switched to a new software program."
      },
      {
        "speaker": "W-Am",
        "text": "Hmm... OK. I'll ask the client if they'd be willing to move the deadline for us. By the way, congratulations. I heard that you recently won a best effects award in an industry competition."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, thanks. Yes, I worked hard on the entry I submitted, so I was happy to be selected."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "What do the women want to do?",
        "options": [
          {
            "label": "A",
            "text": "Rent a car"
          },
          {
            "label": "B",
            "text": "Buy ferry tickets"
          },
          {
            "label": "C",
            "text": "Take a city tour"
          },
          {
            "label": "D",
            "text": "Book a hotel"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q51",
        "text": "What does the man say was recently introduced?",
        "options": [
          {
            "label": "A",
            "text": "A customer loyalty program"
          },
          {
            "label": "B",
            "text": "An online feedback form"
          },
          {
            "label": "C",
            "text": "A cashless payment system"
          },
          {
            "label": "D",
            "text": "A renovated waiting area"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q52",
        "text": "What does the man suggest the women do?",
        "options": [
          {
            "label": "A",
            "text": "Purchase some postcards"
          },
          {
            "label": "B",
            "text": "Visit a historic site"
          },
          {
            "label": "C",
            "text": "Call a taxi service"
          },
          {
            "label": "D",
            "text": "Download a mobile application"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Hello. Welcome to New York Ferry Service. How can I help you two?"
      },
      {
        "speaker": "W-Br",
        "text": "Hi. We're trying to catch the next ferry to the city."
      },
      {
        "speaker": "W-Am",
        "text": "Yeah, how much are one-way commuter tickets?"
      },
      {
        "speaker": "M-Au",
        "text": "OK. It's ten dollars per person. Have you heard of our new payment option?"
      },
      {
        "speaker": "W-Br",
        "text": "No. What is it?"
      },
      {
        "speaker": "M-Au",
        "text": "Well, we just introduced a payment system that allows you to pay for your tickets right from your smartphone. No cash is needed."
      },
      {
        "speaker": "W-Am",
        "text": "That sounds great."
      },
      {
        "speaker": "M-Au",
        "text": "It definitely is! I suggest you both download our app so you can use this method in the future."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "Where are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "At a fund-raiser"
          },
          {
            "label": "B",
            "text": "At a trade show"
          },
          {
            "label": "C",
            "text": "At a job fair"
          },
          {
            "label": "D",
            "text": "At a store opening"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q54",
        "text": "What kind of products does the man's company make?",
        "options": [
          {
            "label": "A",
            "text": "Jewelry"
          },
          {
            "label": "B",
            "text": "Handbags"
          },
          {
            "label": "C",
            "text": "Floor rugs"
          },
          {
            "label": "D",
            "text": "Picture frames"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q55",
        "text": "What does the man suggest doing?",
        "options": [
          {
            "label": "A",
            "text": "Leaving a business card"
          },
          {
            "label": "B",
            "text": "Registering online"
          },
          {
            "label": "C",
            "text": "Placing an order"
          },
          {
            "label": "D",
            "text": "Taking a catalog"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hans Jones Jewelry? Hmm, I don't remember seeing your booth at this trade show before. Can you tell me about your company?"
      },
      {
        "speaker": "M-Cn",
        "text": "Sure. We're a relatively new company, and we're just starting to visit trade shows. We specialize in creating affordable jewelry made with high-quality materials."
      },
      {
        "speaker": "W-Br",
        "text": "Your necklaces are beautiful. I'd love to sell them at my fashion boutiques. Do you make any earrings or bracelets?"
      },
      {
        "speaker": "M-Cn",
        "text": "Yes, I just didn't have room to display them here. But take one of our catalogs. It has pictures of our entire collection."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Who most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "News reporters"
          },
          {
            "label": "B",
            "text": "Travel agents"
          },
          {
            "label": "C",
            "text": "Bus drivers"
          },
          {
            "label": "D",
            "text": "City officials"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q57",
        "text": "Why is the man concerned?",
        "options": [
          {
            "label": "A",
            "text": "He forgot to make a phone call."
          },
          {
            "label": "B",
            "text": "He might miss a deadline."
          },
          {
            "label": "C",
            "text": "A contract requires a signature."
          },
          {
            "label": "D",
            "text": "A colleague is late for work."
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q58",
        "text": "Why does the woman say, \"they're hosting a big press conference at noon\"?",
        "options": [
          {
            "label": "A",
            "text": "To suggest attending an event"
          },
          {
            "label": "B",
            "text": "To inform the man about a schedule change"
          },
          {
            "label": "C",
            "text": "To complain about a decision"
          },
          {
            "label": "D",
            "text": "To ask the man for a ride"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hi, Carlos. I have a question about the news story you're working on-the one about the local bus system. Did you get a quote from someone at the transit agency?"
      },
      {
        "speaker": "M-Au",
        "text": "No, I haven't been able to contact anyone there yet. And our deadline to get this story on tonight's news is five P.M. I'm concerned we'll miss it if they don't respond soon."
      },
      {
        "speaker": "W-Br",
        "text": "Well, I just heard they're hosting a big press conference at noon."
      },
      {
        "speaker": "M-Au",
        "text": "What a great idea-I'll leave now."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Where do the speakers most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a real estate agency"
          },
          {
            "label": "B",
            "text": "At a florist shop"
          },
          {
            "label": "C",
            "text": "At a construction company"
          },
          {
            "label": "D",
            "text": "At an interior design firm"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q60",
        "text": "What do the speakers agree to do?",
        "options": [
          {
            "label": "A",
            "text": "Promote some products on a Web site"
          },
          {
            "label": "B",
            "text": "Send e-mails to previous customers"
          },
          {
            "label": "C",
            "text": "Leave brochures in a building lobby"
          },
          {
            "label": "D",
            "text": "Put up signs near a highway"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q61",
        "text": "Who does the man say he will contact?",
        "options": [
          {
            "label": "A",
            "text": "An administrative assistant"
          },
          {
            "label": "B",
            "text": "An Internet provider"
          },
          {
            "label": "C",
            "text": "A photographer"
          },
          {
            "label": "D",
            "text": "An accountant"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Tomoko, our sales of fresh flowers have always been strong, but to increase business, I think we should try to sell more indoor potted plants. I'm sure we could find customers in local office buildings."
      },
      {
        "speaker": "W-Br",
        "text": "Not just offices. People working from home would be interested, too. Why don't we start promoting the idea by featuring some plants on our Web site?"
      },
      {
        "speaker": "M-Au",
        "text": "OK, let's do that. I know a photographer who specializes in product pictures. I'll get in touch and see when she's available."
      }
    ]
  },
  {
    "testId": 9,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "What is the woman planning?",
        "options": [
          {
            "label": "A",
            "text": "A product launch"
          },
          {
            "label": "B",
            "text": "A charity event"
          },
          {
            "label": "C",
            "text": "A retirement party"
          },
          {
            "label": "D",
            "text": "A factory inspection"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Which room will the woman most likely reserve?",
        "options": [
          {
            "label": "A",
            "text": "The Arroyo Room"
          },
          {
            "label": "B",
            "text": "The Salinas Room"
          },
          {
            "label": "C",
            "text": "The Reyes Room"
          },
          {
            "label": "D",
            "text": "The Miramar Room"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q64",
        "text": "What does the man say he will provide?",
        "options": [
          {
            "label": "A",
            "text": "Some measurements"
          },
          {
            "label": "B",
            "text": "Some menu options"
          },
          {
            "label": "C",
            "text": "Proof of insurance"
          },
          {
            "label": "D",
            "text": "A list of musicians"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Hello, this is the Vega Event Center. How can I help you?"
      },
      {
        "speaker": "W-Br",
        "text": "Hi. I work for Thomson Manufacturing Company, and we're planning a charity auction."
      },
      {
        "speaker": "M-Cn",
        "text": "Great, we've definitely hosted those before. How many guests do you anticipate?"
      },
      {
        "speaker": "W-Br",
        "text": "Well, we want to invite 250 guests. Do you have an event space that would accommodate us?"
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, yes. One of our banquet rooms fits between 200 and 300 people."
      },
      {
        "speaker": "W-Br",
        "text": "Excellent. We'd also like to have a musical act perform during the auction. Can you recommend some bands?"
      },
      {
        "speaker": "M-Cn",
        "text": "Absolutely. I'll send you a list of groups that we regularly hire."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q62.png"
  },
  {
    "testId": 9,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "Who most likely is the woman?",
        "options": [
          {
            "label": "A",
            "text": "A commercial pilot"
          },
          {
            "label": "B",
            "text": "A regional manager"
          },
          {
            "label": "C",
            "text": "A travel agent"
          },
          {
            "label": "D",
            "text": "A news reporter"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. Which airport does the man point out?",
        "options": [
          {
            "label": "A",
            "text": "Smithville Airport"
          },
          {
            "label": "B",
            "text": "Greenview Airport"
          },
          {
            "label": "C",
            "text": "Leonard Airport"
          },
          {
            "label": "D",
            "text": "Allenville Airport"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q67",
        "text": "What does the man recommend?",
        "options": [
          {
            "label": "A",
            "text": "Adjusting travel plans"
          },
          {
            "label": "B",
            "text": "Changing a delivery time"
          },
          {
            "label": "C",
            "text": "Finding discounted tickets"
          },
          {
            "label": "D",
            "text": "Hiring additional agents"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Joining me for tonight's news broadcast is aviation expert Dmitry Petrov."
      },
      {
        "speaker": "M-Au",
        "text": "Thanks for having me."
      },
      {
        "speaker": "W-Br",
        "text": "Airports around the country are seeing more and more flight delays. What might be causing this trend?"
      },
      {
        "speaker": "M-Au",
        "text": "Air travel has been steadily increasing. More travelers and flights cause airport congestion-and delays."
      },
      {
        "speaker": "W-Br",
        "text": "Is this trend consistent across airports?"
      },
      {
        "speaker": "M-Au",
        "text": "Actually, no. Look at this graph. Some see average delays of around twenty minutes, but some like this airport here, can be over forty."
      },
      {
        "speaker": "W-Br",
        "text": "What would you tell travelers to do?"
      },
      {
        "speaker": "M-Au",
        "text": "If possible, try changing your plans to avoid cities known for delays, and if you can, shift your travel to off-peak times."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q65.png"
  },
  {
    "testId": 9,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "What event is taking place next month?",
        "options": [
          {
            "label": "A",
            "text": "A concert"
          },
          {
            "label": "B",
            "text": "A fund-raiser"
          },
          {
            "label": "C",
            "text": "An anniversary celebration"
          },
          {
            "label": "D",
            "text": "A community festival"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q69",
        "text": "Look at the graphic. How much will the selected item cost?",
        "options": [
          {
            "label": "A",
            "text": "$5.00"
          },
          {
            "label": "B",
            "text": "$6.00"
          },
          {
            "label": "C",
            "text": "$7.00"
          },
          {
            "label": "D",
            "text": "$8.00"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q70",
        "text": "What will the man do next?",
        "options": [
          {
            "label": "A",
            "text": "Revise a design"
          },
          {
            "label": "B",
            "text": "Search a Web site"
          },
          {
            "label": "C",
            "text": "Book a venue"
          },
          {
            "label": "D",
            "text": "Place an order"
          }
        ],
        "correctAnswer": "D"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Helen, remember we discussed doing something special for our bakery's anniversary next month?"
      },
      {
        "speaker": "W-Am",
        "text": "Yes, we talked about having a souvenir item with our logo on it."
      },
      {
        "speaker": "M-Cn",
        "text": "Right. Here are four options I came up with."
      },
      {
        "speaker": "W-Am",
        "text": "Let's see... I think the short-sleeved shirt with our business logo on the front will have the widest appeal, since it'll be hot in the summer. It will really help advertise our store too."
      },
      {
        "speaker": "M-Cn",
        "text": "OK. I'll go ahead and order those now."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q68.png"
  }
  ,
  {
    "testId": 10,
    "setId": "set_32_34",
    "questionRange": "32-34",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_32-34.mp3",
    "questions": [
      {
        "id": "q32",
        "text": "What is the conversation mainly about?",
        "options": [
          {
            "label": "A",
            "text": "A product launch"
          },
          {
            "label": "B",
            "text": "A grand opening"
          },
          {
            "label": "C",
            "text": "Some investment options"
          },
          {
            "label": "D",
            "text": "Some travel plans"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q33",
        "text": "Why has the man been busy?",
        "options": [
          {
            "label": "A",
            "text": "He has been working on a presentation."
          },
          {
            "label": "B",
            "text": "He has just returned from a family vacation."
          },
          {
            "label": "C",
            "text": "He is organizing a conference."
          },
          {
            "label": "D",
            "text": "He has been assigned a new client account."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q34",
        "text": "What does the woman suggest that the man do soon?",
        "options": [
          {
            "label": "A",
            "text": "Make a reservation"
          },
          {
            "label": "B",
            "text": "Review some sales data"
          },
          {
            "label": "C",
            "text": "Use a voucher before it expires"
          },
          {
            "label": "D",
            "text": "Speak with an adviser"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Jung-Soo, are you ready for your conference in Greenville Shores?"
      },
      {
        "speaker": "M-Cn",
        "text": "Yes, I'm leaving tomorrow morning."
      },
      {
        "speaker": "W-Am",
        "text": "That's a great city. Are you doing any sightseeing before the conference?"
      },
      {
        "speaker": "M-Cn",
        "text": "Actually, I've been so busy finishing my presentation that I haven't looked at what there is to do."
      },
      {
        "speaker": "W-Am",
        "text": "Last time, I did a walking tour of the historic district."
      },
      {
        "speaker": "M-Cn",
        "text": "That sounds interesting."
      },
      {
        "speaker": "W-Am",
        "text": "It was! I used Greenville Guides-I can pass on their Web site. Just don't wait too long before booking-slots fill up quickly."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_35_37",
    "questionRange": "35-37",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_35-37.mp3",
    "questions": [
      {
        "id": "q35",
        "text": "Where is the conversation taking place?",
        "options": [
          {
            "label": "A",
            "text": "At a bakery"
          },
          {
            "label": "B",
            "text": "At an employment agency"
          },
          {
            "label": "C",
            "text": "At a farmers market"
          },
          {
            "label": "D",
            "text": "At a restaurant"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q36",
        "text": "What does the woman ask about?",
        "options": [
          {
            "label": "A",
            "text": "An upcoming event"
          },
          {
            "label": "B",
            "text": "A project deadline"
          },
          {
            "label": "C",
            "text": "A delivery service"
          },
          {
            "label": "D",
            "text": "A job opening"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q37",
        "text": "What does the man remind the woman to do?",
        "options": [
          {
            "label": "A",
            "text": "Register on a Web site"
          },
          {
            "label": "B",
            "text": "Send a document"
          },
          {
            "label": "C",
            "text": "Update a budget"
          },
          {
            "label": "D",
            "text": "Change an address"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Welcome to Patterson Bakery. How can I help you?"
      },
      {
        "speaker": "W-Am",
        "text": "Actually, I noticed the sign in your window advertising a temporary job for a baker."
      },
      {
        "speaker": "M-Au",
        "text": "Right-we always need extra help during the summer months because many employees go on vacation."
      },
      {
        "speaker": "W-Am",
        "text": "I see. How can I apply?"
      },
      {
        "speaker": "M-Au",
        "text": "Let me get you an application form. You can fill out the form here if you'd like. Just remember to e-mail us your résumé later."
      },
      {
        "speaker": "W-Am",
        "text": "All right, thanks!"
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_38_40",
    "questionRange": "38-40",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_38-40.mp3",
    "questions": [
      {
        "id": "q38",
        "text": "Where do the women work?",
        "options": [
          {
            "label": "A",
            "text": "At a bookstore"
          },
          {
            "label": "B",
            "text": "At a computer store"
          },
          {
            "label": "C",
            "text": "At a food market"
          },
          {
            "label": "D",
            "text": "At a publishing company"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q39",
        "text": "What are the women worried about?",
        "options": [
          {
            "label": "A",
            "text": "Opening a branch office"
          },
          {
            "label": "B",
            "text": "Competing with online stores"
          },
          {
            "label": "C",
            "text": "Finding a new supplier"
          },
          {
            "label": "D",
            "text": "Hiring enough delivery drivers"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q40",
        "text": "What does the man recommend?",
        "options": [
          {
            "label": "A",
            "text": "Advertising online"
          },
          {
            "label": "B",
            "text": "Attending a trade show"
          },
          {
            "label": "C",
            "text": "Adding food service"
          },
          {
            "label": "D",
            "text": "Offering a home repair service"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Thank you for hiring me as a business consultant. What sort of advice are you looking for? I know your bookstore is already well-known in the community."
      },
      {
        "speaker": "W-Am",
        "text": "But a lot of people are shopping online these days, and we're worried about our ability to compete."
      },
      {
        "speaker": "W-Br",
        "text": "Yes, we think that's why fewer people are coming into the bookstore these days."
      },
      {
        "speaker": "M-Cn",
        "text": "I see. Have you considered making a significant change to the store-like adding a café?"
      },
      {
        "speaker": "W-Am",
        "text": "Interesting. We probably have enough space in the back of the store for that."
      },
      {
        "speaker": "M-Cn",
        "text": "That way customers could come in to browse and have a cup of coffee."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_41_43",
    "questionRange": "41-43",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_41-43.mp3",
    "questions": [
      {
        "id": "q41",
        "text": "What kind of products do the speakers sell?",
        "options": [
          {
            "label": "A",
            "text": "Cleaning products"
          },
          {
            "label": "B",
            "text": "Car accessories"
          },
          {
            "label": "C",
            "text": "Kitchen tools"
          },
          {
            "label": "D",
            "text": "Garden supplies"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q42",
        "text": "What does the woman mean when she says, \"He's probably waiting outside\"?",
        "options": [
          {
            "label": "A",
            "text": "A customer needs help immediately."
          },
          {
            "label": "B",
            "text": "A manager wants to discuss a complaint."
          },
          {
            "label": "C",
            "text": "A store is unusually crowded."
          },
          {
            "label": "D",
            "text": "Some instructions were confusing."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q43",
        "text": "What do the staff sometimes forget to do?",
        "options": [
          {
            "label": "A",
            "text": "Restock inventory"
          },
          {
            "label": "B",
            "text": "Sign receipts"
          },
          {
            "label": "C",
            "text": "Hand out flyers"
          },
          {
            "label": "D",
            "text": "Mention an upcoming sale"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hey, Taro. A customer just bought five bags of our Super Boost potting soil. Could you carry them to his car for him?"
      },
      {
        "speaker": "M-Cn",
        "text": "Can I finish organizing the flower seeds on this display first? I'll be done in a minute."
      },
      {
        "speaker": "W-Am",
        "text": "He's probably waiting outside. I told him to pull his car up by the entrance."
      },
      {
        "speaker": "M-Cn",
        "text": "Oh, OK. And he already paid, right?"
      },
      {
        "speaker": "W-Am",
        "text": "Yes. Just be sure to sign your initials on his receipt once you're done. It's something we keep forgetting to do."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_44_46",
    "questionRange": "44-46",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_44-46.mp3",
    "questions": [
      {
        "id": "q44",
        "text": "Who most likely are the men?",
        "options": [
          {
            "label": "A",
            "text": "Teachers"
          },
          {
            "label": "B",
            "text": "Bakers"
          },
          {
            "label": "C",
            "text": "Electricians"
          },
          {
            "label": "D",
            "text": "Doctors"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q45",
        "text": "Why are the men frustrated?",
        "options": [
          {
            "label": "A",
            "text": "Some work will have to be redone."
          },
          {
            "label": "B",
            "text": "Some tools have been misplaced."
          },
          {
            "label": "C",
            "text": "Some staff members are unavailable."
          },
          {
            "label": "D",
            "text": "Some supplies have run out."
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q46",
        "text": "What does the woman want the men to review?",
        "options": [
          {
            "label": "A",
            "text": "A revised budget"
          },
          {
            "label": "B",
            "text": "A meeting agenda"
          },
          {
            "label": "C",
            "text": "Some design plans"
          },
          {
            "label": "D",
            "text": "Some contract terms"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hi, Paul and Mark. Uh, you've already installed the electrical wiring in the new classrooms on the west end of the building, right?"
      },
      {
        "speaker": "M-Cn",
        "text": "Yes, we're almost finished. Is there a problem?"
      },
      {
        "speaker": "W-Am",
        "text": "Well... there's just a last-minute change. The school district has decided that each classroom should have a projector mounted on the ceiling."
      },
      {
        "speaker": "M-Au",
        "text": "That's really frustrating. We'll have to redo some of the connections so that we can run wiring through the ceilings."
      },
      {
        "speaker": "M-Cn",
        "text": "That's going to take more time. Maybe another week or so."
      },
      {
        "speaker": "W-Am",
        "text": "That's OK. Here are the new blueprints for the classroom design. I'd like you to look them over and let me know if you have any questions."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_47_49",
    "questionRange": "47-49",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_47-49.mp3",
    "questions": [
      {
        "id": "q47",
        "text": "What does the man want to do?",
        "options": [
          {
            "label": "A",
            "text": "Renovate a building"
          },
          {
            "label": "B",
            "text": "Create a community garden"
          },
          {
            "label": "C",
            "text": "Install some new road signs"
          },
          {
            "label": "D",
            "text": "Move a business to a new location"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q48",
        "text": "What problem does the woman mention about a project?",
        "options": [
          {
            "label": "A",
            "text": "It will be noisy."
          },
          {
            "label": "B",
            "text": "It will be expensive."
          },
          {
            "label": "C",
            "text": "Finding available space may be difficult."
          },
          {
            "label": "D",
            "text": "The approval process may take a long time."
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q49",
        "text": "What does the woman suggest the man do?",
        "options": [
          {
            "label": "A",
            "text": "Apply for a loan"
          },
          {
            "label": "B",
            "text": "Check a city map"
          },
          {
            "label": "C",
            "text": "Collect some signatures"
          },
          {
            "label": "D",
            "text": "Post an announcement online"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Thanks for agreeing to meet with me, Mayor Jackson. I wanted to discuss the possibility of creating a community garden in my neighborhood. It would be a space where we could grow flowers and vegetables."
      },
      {
        "speaker": "W-Br",
        "text": "Great idea. But finding a place for it could be a problem."
      },
      {
        "speaker": "M-Cn",
        "text": "Not necessarily. There's a vacant lot on the corner of Main Street and Linwood Avenue. It's city property, and it's been empty for years."
      },
      {
        "speaker": "W-Br",
        "text": "Well, you'll need to have the city council approve a request like that. I suggest you start a neighborhood petition. If you get enough signatures, you can bring it to the city council."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_50_52",
    "questionRange": "50-52",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_50-52.mp3",
    "questions": [
      {
        "id": "q50",
        "text": "What industry does the woman work in?",
        "options": [
          {
            "label": "A",
            "text": "Finance"
          },
          {
            "label": "B",
            "text": "Farming"
          },
          {
            "label": "C",
            "text": "Advertising"
          },
          {
            "label": "D",
            "text": "Hospitality"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q51",
        "text": "What did the woman do recently?",
        "options": [
          {
            "label": "A",
            "text": "She received an award."
          },
          {
            "label": "B",
            "text": "She opened a new business."
          },
          {
            "label": "C",
            "text": "She invented a new product."
          },
          {
            "label": "D",
            "text": "She published a book."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q52",
        "text": "What will the woman most likely discuss next?",
        "options": [
          {
            "label": "A",
            "text": "Choosing an appropriate software program"
          },
          {
            "label": "B",
            "text": "Preparing for a job interview"
          },
          {
            "label": "C",
            "text": "Deciding on a program of study"
          },
          {
            "label": "D",
            "text": "Improving networking skills"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "It's been great speaking with you on our radio program today. I'm sure our listeners enjoyed hearing about your career in finance."
      },
      {
        "speaker": "W-Br",
        "text": "Thanks for having me! I especially enjoyed sharing passages from the book I recently published, Choosing the Right Finance Career."
      },
      {
        "speaker": "M-Au",
        "text": "I'm glad you did. Actually, a listener just sent in one more question for you. Let's see... Isabel from Rhode Island would like to know your tips for choosing the right finance degree program. Any advice?"
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_53_55",
    "questionRange": "53-55",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_53-55.mp3",
    "questions": [
      {
        "id": "q53",
        "text": "What kind of business do the speakers most likely own?",
        "options": [
          {
            "label": "A",
            "text": "An architecture studio"
          },
          {
            "label": "B",
            "text": "A restaurant"
          },
          {
            "label": "C",
            "text": "A real estate agency"
          },
          {
            "label": "D",
            "text": "An accounting firm"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q54",
        "text": "What does the man want to order?",
        "options": [
          {
            "label": "A",
            "text": "Furniture"
          },
          {
            "label": "B",
            "text": "Office supplies"
          },
          {
            "label": "C",
            "text": "Food"
          },
          {
            "label": "D",
            "text": "Lighting fixtures"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q55",
        "text": "Why does the woman say, \"I just checked the account balance an hour ago\"?",
        "options": [
          {
            "label": "A",
            "text": "To offer an excuse"
          },
          {
            "label": "B",
            "text": "To make a complaint"
          },
          {
            "label": "C",
            "text": "To provide reassurance"
          },
          {
            "label": "D",
            "text": "To express surprise"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "M-Cn",
        "text": "Priyanka, are you looking forward to the new restaurant opening next month?"
      },
      {
        "speaker": "W-Br",
        "text": "Definitely. It's about time we opened a second location."
      },
      {
        "speaker": "M-Cn",
        "text": "Yes! I was looking at the layout again, and I think we should order three more sets of tables and benches for the outdoor patio."
      },
      {
        "speaker": "W-Br",
        "text": "Good idea."
      },
      {
        "speaker": "M-Cn",
        "text": "But I'm worried about placing the order right away. I know our bank account was used for payroll earlier today, so we may not have enough funds in that account to cover the costs."
      },
      {
        "speaker": "W-Br",
        "text": "I just checked the account balance an hour ago."
      },
      {
        "speaker": "M-Cn",
        "text": "OK, I'll go ahead and place the order."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_56_58",
    "questionRange": "56-58",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_56-58.mp3",
    "questions": [
      {
        "id": "q56",
        "text": "Who most likely is the man?",
        "options": [
          {
            "label": "A",
            "text": "The woman's former landlord"
          },
          {
            "label": "B",
            "text": "The woman's professor"
          },
          {
            "label": "C",
            "text": "The woman's relative"
          },
          {
            "label": "D",
            "text": "The woman's previous employer"
          }
        ],
        "correctAnswer": "A"
      },
      {
        "id": "q57",
        "text": "What does the woman say she will do soon?",
        "options": [
          {
            "label": "A",
            "text": "Return to her parents' house"
          },
          {
            "label": "B",
            "text": "Apply for a job"
          },
          {
            "label": "C",
            "text": "Pick up her belongings"
          },
          {
            "label": "D",
            "text": "Begin coursework at school"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q58",
        "text": "What does the woman ask for?",
        "options": [
          {
            "label": "A",
            "text": "A house key"
          },
          {
            "label": "B",
            "text": "A copy of a certificate"
          },
          {
            "label": "C",
            "text": "A reference letter"
          },
          {
            "label": "D",
            "text": "A colleague's e-mail address"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Br",
        "text": "Hello, Gerard. This is Patricia Santos calling."
      },
      {
        "speaker": "M-Au",
        "text": "Patricia! I haven't talked to you since your lease ended last year. How are you?"
      },
      {
        "speaker": "W-Br",
        "text": "I'm doing well, thanks. I've been staying with my parents in London, but I'm about to start trade school in Glasgow."
      },
      {
        "speaker": "M-Au",
        "text": "Oh, congratulations!"
      },
      {
        "speaker": "W-Br",
        "text": "Actually, that's why I'm calling-I found a new apartment that I'd like, and the rental application requires a letter from a previous landlord. Could you write that for me?"
      },
      {
        "speaker": "M-Au",
        "text": "Yes, of course. What should I say?"
      },
      {
        "speaker": "W-Br",
        "text": "It can be short-just say that I'm a quiet, clean tenant who paid rent on time."
      },
      {
        "speaker": "M-Au",
        "text": "No problem. Just text me the contact information."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_59_61",
    "questionRange": "59-61",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_59-61.mp3",
    "questions": [
      {
        "id": "q59",
        "text": "Where most likely are the speakers?",
        "options": [
          {
            "label": "A",
            "text": "In a government office"
          },
          {
            "label": "B",
            "text": "In a television studio"
          },
          {
            "label": "C",
            "text": "At a bus terminal"
          },
          {
            "label": "D",
            "text": "At a construction site"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q60",
        "text": "What does the man mention about the Lansing Bridge?",
        "options": [
          {
            "label": "A",
            "text": "There is a lot of traffic on it today."
          },
          {
            "label": "B",
            "text": "There is a beautiful view from it."
          },
          {
            "label": "C",
            "text": "It now has a walkway."
          },
          {
            "label": "D",
            "text": "It is temporarily closed."
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q61",
        "text": "How can the listeners find out more information?",
        "options": [
          {
            "label": "A",
            "text": "By visiting an information desk"
          },
          {
            "label": "B",
            "text": "By requesting a brochure"
          },
          {
            "label": "C",
            "text": "By checking a Web site"
          },
          {
            "label": "D",
            "text": "By calling a help line"
          }
        ],
        "correctAnswer": "C"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Thank you for listening to Channel Three news this morning. It's time to go to Hao Nan with our traffic report."
      },
      {
        "speaker": "M-Au",
        "text": "Thanks, Sameera. While most commuters are seeing a fairly smooth ride this morning, crews have begun repairs to the Lansing Bridge, and it's closed to all traffic. Drivers can take a detour on Canal Road."
      },
      {
        "speaker": "W-Am",
        "text": "And when is construction expected to be completed?"
      },
      {
        "speaker": "M-Au",
        "text": "It's scheduled to wrap up by November seventh. Head to our Web site at NewsThree.com to learn more about the progress of the repairs."
      }
    ]
  },
  {
    "testId": 10,
    "setId": "set_62_64",
    "questionRange": "62-64",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_62-64.mp3",
    "questions": [
      {
        "id": "q62",
        "text": "Why is the man calling?",
        "options": [
          {
            "label": "A",
            "text": "To confirm he will teach a class"
          },
          {
            "label": "B",
            "text": "To complain about a recent class"
          },
          {
            "label": "C",
            "text": "To inquire about class supplies"
          },
          {
            "label": "D",
            "text": "To request directions to a community center"
          }
        ],
        "correctAnswer": "C"
      },
      {
        "id": "q63",
        "text": "Look at the graphic. Which class are the speakers discussing?",
        "options": [
          {
            "label": "A",
            "text": "Knitting"
          },
          {
            "label": "B",
            "text": "Painting"
          },
          {
            "label": "C",
            "text": "Sculpture"
          },
          {
            "label": "D",
            "text": "Drawing"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q64",
        "text": "What does the man plan to do in Chicago?",
        "options": [
          {
            "label": "A",
            "text": "Go to a graduation ceremony"
          },
          {
            "label": "B",
            "text": "Attend a wedding"
          },
          {
            "label": "C",
            "text": "Complete a certification"
          },
          {
            "label": "D",
            "text": "See an art exhibit"
          }
        ],
        "correctAnswer": "B"
      }
    ],
    "script": [
      {
        "speaker": "W-Am",
        "text": "Hello, Elmbrook Community Center."
      },
      {
        "speaker": "M-Cn",
        "text": "Hi, I'll be attending the class that starts on Friday this week, and I'm wondering what to bring. Details weren't listed in the class description."
      },
      {
        "speaker": "W-Am",
        "text": "Oh, the materials are always provided. But please note that classes don't start until next week."
      },
      {
        "speaker": "M-Cn",
        "text": "Really? I'll be in Chicago next week-my son's getting married. I'm afraid I'm going to have to miss the first class, then."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_10/Part_03/p3_q62.png"
  },
  {
    "testId": 10,
    "setId": "set_65_67",
    "questionRange": "65-67",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_65-67.mp3",
    "questions": [
      {
        "id": "q65",
        "text": "Where do the speakers most likely work?",
        "options": [
          {
            "label": "A",
            "text": "At a car rental service"
          },
          {
            "label": "B",
            "text": "At a market research firm"
          },
          {
            "label": "C",
            "text": "At an electronics store"
          },
          {
            "label": "D",
            "text": "At a trucking company"
          }
        ],
        "correctAnswer": "D"
      },
      {
        "id": "q66",
        "text": "Look at the graphic. Where do the speakers plan to start advertising job openings?",
        "options": [
          {
            "label": "A",
            "text": "On job-related search engines"
          },
          {
            "label": "B",
            "text": "On social media sites"
          },
          {
            "label": "C",
            "text": "On company Web sites"
          },
          {
            "label": "D",
            "text": "In online newspapers"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q67",
        "text": "What does the man say he will do later today?",
        "options": [
          {
            "label": "A",
            "text": "Propose a budget adjustment"
          },
          {
            "label": "B",
            "text": "Attend a training session"
          },
          {
            "label": "C",
            "text": "Write a letter of recommendation"
          },
          {
            "label": "D",
            "text": "Approve a timeline"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "Thanks for attending this planning meeting. As I explained in my e-mail, since the company's expanding its fleet of trucks, we need to figure out how to recruit more truck drivers. Any ideas?"
      },
      {
        "speaker": "W-Am",
        "text": "I did some research. This graph shows where people most frequently search for jobs online."
      },
      {
        "speaker": "M-Au",
        "text": "Hmm, eighty-four percent use job search engines, so it's good we already post our job openings on those. But, look at the next-highest category. At sixty-six percent, it'd be worth investing in."
      },
      {
        "speaker": "W-Am",
        "text": "I thought so, too. We'd need to increase our recruitment budget, though."
      },
      {
        "speaker": "M-Au",
        "text": "I'm meeting with the rest of the management team later today. I'll mention our need for extra funds."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_10/Part_03/p3_q65.png"
  },
  {
    "testId": 10,
    "setId": "set_68_70",
    "questionRange": "68-70",
    "audio": "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 3_68-70.mp3",
    "questions": [
      {
        "id": "q68",
        "text": "What is the woman having difficulty deciding on?",
        "options": [
          {
            "label": "A",
            "text": "A color"
          },
          {
            "label": "B",
            "text": "A fabric"
          },
          {
            "label": "C",
            "text": "Storage capacity"
          },
          {
            "label": "D",
            "text": "Strap placement"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q69",
        "text": "Why was the company's logo redesigned?",
        "options": [
          {
            "label": "A",
            "text": "To reflect design trends"
          },
          {
            "label": "B",
            "text": "To celebrate an anniversary"
          },
          {
            "label": "C",
            "text": "To appeal to a wider audience"
          },
          {
            "label": "D",
            "text": "To avoid a copyright problem"
          }
        ],
        "correctAnswer": "B"
      },
      {
        "id": "q70",
        "text": "Look at the graphic. Where will the company's logo be placed?",
        "options": [
          {
            "label": "A",
            "text": "Location 1"
          },
          {
            "label": "B",
            "text": "Location 2"
          },
          {
            "label": "C",
            "text": "Location 3"
          },
          {
            "label": "D",
            "text": "Location 4"
          }
        ],
        "correctAnswer": "A"
      }
    ],
    "script": [
      {
        "speaker": "M-Au",
        "text": "The design for next season's backpack looks nice! What materials will you use?"
      },
      {
        "speaker": "W-Br",
        "text": "Well, polyester for the body of the bag, but it's hard to decide what to use for the straps. Any suggestions?"
      },
      {
        "speaker": "M-Au",
        "text": "How about cotton canvas?"
      },
      {
        "speaker": "W-Br",
        "text": "Hmm. Yes, OK. That would create an interesting texture contrast. Perfect!"
      },
      {
        "speaker": "M-Au",
        "text": "By the way, remember how we commissioned an artist to redesign our logo in honor of our company's fifty years in business? Well, the new logo is ready. Where would you like it to go?"
      },
      {
        "speaker": "W-Br",
        "text": "Last year the logo went on the left side pocket. But for this model I'd like to do something different, so put it on the top flap."
      },
      {
        "speaker": "M-Au",
        "text": "No problem."
      }
    ],
    "image": "/images/ETS_TOEIC_3/Test_10/Part_03/p3_q68.png"
  }
];
