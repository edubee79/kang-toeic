import { Part3Set } from './types';

export const test6Data: Part3Set[] = [
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s1",
        contextType: "B2. 주문 / 배송",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_32-34.mp3",
        questions: [
            {
                id: "v3-p3-t06-q32",
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
                id: "v3-p3-t06-q33",
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
                id: "v3-p3-t06-q34",
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
            { speaker: "W-Br", text: "You've reached the customer service department of Handel's Label Company." },
            { speaker: "M-Cn", text: "My name's Taro Nakamura. I'm the owner of a small cosmetics company, and we recently started manufacturing a lip moisturizer. We placed a large rush order with you last week. We were supposed to get the labels yesterday, but they haven't come yet." },
            { speaker: "W-Br", text: "Sorry for the delay, Mr. Nakamura. What is your order number?" },
            { speaker: "M-Cn", text: "It's BX856." },
            { speaker: "W-Br", text: "There's a note here that we're having issues with transportation due to the construction on roads in your area. But your order will be delivered this afternoon." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s2",
        contextType: "B4. 문의 / 안내",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t06-q35",
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
                id: "v3-p3-t06-q36",
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
                id: "v3-p3-t06-q37",
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
            { speaker: "W-Am", text: "Jerome, did you look at the options for in-flight entertainment? One of the options is e-books!" },
            { speaker: "M-Cn", text: "Oh, really? Are there any good books listed?" },
            { speaker: "W-Am", text: "Yes, actually. There are quite a few best sellers... and you can read them right on the screen in front of your seat." },
            { speaker: "M-Cn", text: "Interesting. But this is a short flight; what happens when we land and I haven't finished the book?" },
            { speaker: "W-Am", text: "Apparently, if you provide your e-mail address, the airline will send you a link so you can download the book to your personal electronic device. That's so convenient!" }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s3",
        contextType: "B4. 문의 / 안내",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t06-q38",
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
                id: "v3-p3-t06-q39",
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
                id: "v3-p3-t06-q40",
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
            { speaker: "M-Au", text: "Thanks for inviting me to visit. As I said on the phone, I'm looking for a local farm to supply vegetables for my restaurant." },
            { speaker: "W-Am", text: "Sure. You can sample some of our seasonal produce when I show you around today." },
            { speaker: "M-Au", text: "Great. I'm concerned about variety, though. How wide is your selection of vegetables?" },
            { speaker: "W-Am", text: "Well... we are constrained by what can be grown here in season. Let's tour the property now. I'll show you what we grow." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s4",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t06-q41",
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
                id: "v3-p3-t06-q42",
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
                id: "v3-p3-t06-q43",
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
            { speaker: "M-Cn", text: "Hi, Elise. Did you see the feedback from the focus group about our company's latest fitness trackers?" },
            { speaker: "W-Br", text: "No, did the customers like the new features that were added?" },
            { speaker: "M-Cn", text: "Overall they did. They liked the fact that the new tracker is water resistant and can be worn while swimming. But there were complaints about the battery life." },
            { speaker: "W-Br", text: "Yes, I was sure customers would complain about that. The battery life on the older model was seven days, and this one is only five." },
            { speaker: "M-Cn", text: "Right. Then we need to create good marketing materials for this new tracker that emphasize the improved features. This will help us to sell the new product." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s5",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t06-q44",
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
                id: "v3-p3-t06-q45",
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
                id: "v3-p3-t06-q46",
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
            { speaker: "W-Am", text: "We're making progress setting up our tour bus company, but finding the right drivers will be very important." },
            { speaker: "W-Br", text: "You're right. Should we use a recruitment agency?" },
            { speaker: "M-Au", text: "We could, but I was thinking... you know I used to work at the Blue Eagle Hotel?" },
            { speaker: "W-Br", text: "Yes." },
            { speaker: "M-Au", text: "Well, the hotel had a lot of airport shuttle bus drivers. I have their contact info." },
            { speaker: "W-Am", text: "Great. Maybe they'll come work for us. Why don't you reach out to them?" },
            { speaker: "M-Au", text: "I will, but after our meeting with the insurance company. Remember they'll be here in twenty minutes. I hope we can negotiate a good package to insure our drivers." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s6",
        contextType: "B1. 불만 / 문제 제기",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t06-q47",
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
                id: "v3-p3-t06-q48",
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
                id: "v3-p3-t06-q49",
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
            { speaker: "W-Br", text: "I bought this phone here a few months ago, and the fingerprint recognition feature has stopped working." },
            { speaker: "M-Cn", text: "You can still unlock your phone with your pass code, but it doesn't recognize your fingerprint anymore, correct?" },
            { speaker: "W-Br", text: "That's right. If it makes a difference, I paid extra for the extended warranty." },
            { speaker: "M-Cn", text: "That's good. I can replace it if I can't figure out how to fix it. Give me a few minutes while I check. And feel free to look at our accessories while you're waiting." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s7",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t06-q50",
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
                id: "v3-p3-t06-q51",
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
                id: "v3-p3-t06-q52",
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
            { speaker: "M-Au", text: "I got your message, Rita." },
            { speaker: "W-Br", text: "Since you're the factory manager, I wanted to run something by you. I think we should consider changing our lumber supplier. Ebson Lumber Mill sells very high-quality wood that would be perfect for the wood flooring we produce." },
            { speaker: "M-Au", text: "What's the difference in cost?" },
            { speaker: "W-Br", text: "Actually, none. The mill is much closer to our factory, so the higher price of the wood would be canceled out by the lower shipping costs. And we'd have a higher-quality product." },
            { speaker: "M-Au", text: "Can you ask the mill to send us some samples? I'd like to see them." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s8",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t06-q53",
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
                id: "v3-p3-t06-q54",
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
                id: "v3-p3-t06-q55",
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
            { speaker: "W-Br", text: "Miguel, do you have a minute to chat about the upcoming trade show in Los Angeles?" },
            { speaker: "M-Cn", text: "Sure, what's up?" },
            { speaker: "W-Br", text: "All I have left to do is to send specific instructions to the event organizers about setting up our booth." },
            { speaker: "M-Cn", text: "OK, I'm nearly ready too, but I still need to print those extra business cards we talked about. I know you said the print shop is having a sale this week, so I'll head over there after work." },
            { speaker: "W-Br", text: "The office supply store has a sale." },
            { speaker: "M-Cn", text: "Ahh... thanks. Good thing I mentioned it!" }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s9",
        contextType: "A5. 교육 / 트레이닝",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t06-q56",
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
                id: "v3-p3-t06-q57",
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
                id: "v3-p3-t06-q58",
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
            { speaker: "M-Au", text: "Have you heard about the new robots that'll help us out organizing packages? They just arrived." },
            { speaker: "W-Br", text: "Oh, yes... the robots to help us sort the shipments. Wait—that's a surprise. I wasn't expecting them until the end of the month!" },
            { speaker: "W-Am", text: "That's what I thought, too! They must have moved up the date so we can start using them sooner." },
            { speaker: "W-Br", text: "And that means we'll probably get trained on how to use them next week. Remember when they trained us on the new scanners last year?" },
            { speaker: "M-Au", text: "Yes, but we didn't get very much detailed information about how to use the scanners. It was very general." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s10",
        contextType: "B4. 문의 / 안내",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t06-q59",
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
                id: "v3-p3-t06-q60",
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
                id: "v3-p3-t06-q61",
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
            { speaker: "W-Am", text: "Hi, Mr. Rashad. I just stopped by to let you know I won't be renewing my lease. I'm going to rent an apartment that's closer to my job... I'm tired of driving so far to work." },
            { speaker: "M-Au", text: "I'm sorry you're leaving—you're an excellent tenant. When will you be moving out?" },
            { speaker: "W-Am", text: "The middle of next month. The contract requires that I pay rent for the full month, though, right?" },
            { speaker: "M-Au", text: "Well, I should be able to lease that unit pretty quickly. I'll let you know what happens." },
            { speaker: "W-Am", text: "All right. Thanks." },
            { speaker: "M-Au", text: "Oh, and, there's a form you'll need to fill out to make your notice official. I have it right here..." }
        ]
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s11",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_62-64.mp3",
        questions: [
            {
                id: "v3-p3-t06-q62",
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
                id: "v3-p3-t06-q63",
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
                id: "v3-p3-t06-q64",
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
            { speaker: "M-Cn", text: "Hi, Geeta, this is Ming. Sorry to call you on your day off, but I need someone to fill in for Stefan tomorrow at the bookstore. He injured his ankle playing basketball." },
            { speaker: "W-Am", text: "Sure, I can take Stefan's shift. Happy to help out." },
            { speaker: "M-Cn", text: "Thanks! Also, I have another favor to ask." },
            { speaker: "W-Am", text: "Of course. What is it?" },
            { speaker: "M-Cn", text: "Well, I was checking our cookbook inventory. We only have seven copies of the book we need for the author event later this month. I'm worried seven won't be enough." },
            { speaker: "W-Am", text: "I see. I can definitely order more." },
            { speaker: "M-Cn", text: "Thanks! I think the author's going to draw a big crowd. She's pretty well-known and was recently on TV." }
        ],
        image: "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q62.png"
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s12",
        contextType: "B4. 문의 / 안내",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_65-67.mp3",
        questions: [
            {
                id: "v3-p3-t06-q65",
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
                id: "v3-p3-t06-q66",
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
                id: "v3-p3-t06-q67",
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
            { speaker: "W-Br", text: "Hi, Yuri. Did you hear the East Lake Band is going to play a concert in town?" },
            { speaker: "M-Au", text: "Yes! And now they have a great new guitarist. Simone Travers recently started playing with them." },
            { speaker: "W-Br", text: "Five of us from the marketing department plan to go together. Would you like to join us?" },
            { speaker: "M-Au", text: "That sounds like fun. Where are you going to sit?" },
            { speaker: "W-Br", text: "We thought about getting tickets for outdoor seating, but that'd be a problem if it rains. Would the balcony be OK with you?" },
            { speaker: "M-Au", text: "Sure. And I'd be happy to drive. My car has room for everyone." }
        ],
        image: "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q65.png"
    },
    {
        testId: 6,
        vol: 3,
        setId: "v3-p3-t06-s13",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_3/Test_06/TEST 06_PART 3_68-70.mp3",
        questions: [
            {
                id: "v3-p3-t06-q68",
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
                id: "v3-p3-t06-q69",
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
                id: "v3-p3-t06-q70",
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
            { speaker: "M-Cn", text: "Natalia, I have a favor to ask. I have an important video call with the London office on Monday. I'll be interviewing some job candidates there." },
            { speaker: "W-Br", text: "OK. How can I help?" },
            { speaker: "M-Cn", text: "Well, I want to use Meeting Room B. And due to the different international time zones, I need the morning slot. I saw that you have that time booked already." },
            { speaker: "W-Br", text: "OK. I understand. In that case, I'll move my meeting to the afternoon instead. And that's actually good because it'll give me extra time to improve the presentation I'm preparing." }
        ],
        image: "/images/ETS_TOEIC_3/Test_06/Part_03/p3_q68.png"
    }
];
