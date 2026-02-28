import { Part3Set } from './types';

export const test9Data: Part3Set[] = [
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s1",
        contextType: "B4. 일반문의",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_32-34.mp3",
        questions: [
            {
                id: "v3-p3-t09-q32",
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
                id: "v3-p3-t09-q33",
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
                id: "v3-p3-t09-q34",
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
            { speaker: "M-Cn", text: "Oakview Apartments. Chan-Ho speaking." },
            { speaker: "W-Am", text: "Good morning. I'm a resident here, and lost my key. It must have fallen off my key chain. I'll need a new one." },
            { speaker: "M-Cn", text: "I'm sorry to hear that. I have an extra key here in the management office. I'll send one of the maintenance workers over with it." },
            { speaker: "W-Am", text: "Thank you so much. I really appreciate it." },
            { speaker: "M-Cn", text: "No problem. Can you tell me which unit is yours?" }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s2",
        contextType: "B4. 일반문의",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_35-37.mp3",
        questions: [
            {
                id: "v3-p3-t09-q35",
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
                id: "v3-p3-t09-q36",
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
                id: "v3-p3-t09-q37",
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
            { speaker: "W-Am", text: "Here's your admission ticket. It includes access to our seventeenth-century pottery exhibit-it just opened this weekend." },
            { speaker: "M-Au", text: "Thanks, I came here specifically to see that. I'm writing a book about European pottery, and there's a vase I want to take a closer look at." },
            { speaker: "W-Am", text: "Then you might also be interested in today's special lecture. We have an archaeologist here to talk about how pottery is dated. You'll have to hurry though. It starts in just a few minutes." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s3",
        contextType: "A5. 교육 / 트레이닝",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_38-40.mp3",
        questions: [
            {
                id: "v3-p3-t09-q38",
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
                id: "v3-p3-t09-q39",
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
                id: "v3-p3-t09-q40",
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
            { speaker: "W-Br", text: "Hey, Pierre. This is Chris Suzuki. He's our new apprentice." },
            { speaker: "M-Cn", text: "Nice to meet you, Chris. So you're training to become a welder?" },
            { speaker: "M-Au", text: "Actually, a machinist. I'll spend part of my apprenticeship studying welding, and I'll also learn to read blueprints and operate machinery." },
            { speaker: "M-Cn", text: "Well, you came to the right place. There're plenty of experienced workers and opportunities for hands-on practice in this factory." },
            { speaker: "M-Au", text: "I'm excited to get started." },
            { speaker: "W-Br", text: "Well, we'll let you get back to work. I want Chris to meet a few more people before the shift ends." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s4",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_41-43.mp3",
        questions: [
            {
                id: "v3-p3-t09-q41",
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
                id: "v3-p3-t09-q42",
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
                id: "v3-p3-t09-q43",
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
            { speaker: "M-Cn", text: "Hi, Marisol. I got the invitation from Sunita about your party on Friday. I can't believe this is your last week here. You've had quite a career." },
            { speaker: "W-Am", text: "Thank you. It's been great." },
            { speaker: "M-Cn", text: "I'll definitely be at the party. What's your favorite dessert?" },
            { speaker: "W-Am", text: "Oh, I love cheesecake." },
            { speaker: "M-Cn", text: "OK, I have the perfect recipe. Well, this is exciting. So, what's next for you?" },
            { speaker: "W-Am", text: "I'm going overseas to Europe for a couple of weeks. I can't wait." },
            { speaker: "M-Cn", text: "Sounds amazing." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s5",
        contextType: "B1. 불만 / 문제 제기",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_44-46.mp3",
        questions: [
            {
                id: "v3-p3-t09-q44",
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
                id: "v3-p3-t09-q45",
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
                id: "v3-p3-t09-q46",
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
            { speaker: "M-Au", text: "Excuse me. I'm looking at these floor mats. My office chair scratches my hardwood floor, so I need something to protect it. I bought a mat somewhere else, but it had a strong plastic smell." },
            { speaker: "W-Am", text: "That shouldn't be a problem with our floor mats. You're welcome to take one out of the box to see for yourself." },
            { speaker: "M-Au", text: "Thanks. Is there a chair I can try it with? I want to make sure the wheels won't sink into it." },
            { speaker: "W-Am", text: "Sure. These mats have a patented easy-glide surface, meaning they're firm enough to let you freely maneuver around your work space in a rolling chair. It's something the manufacturer's particularly proud of." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s6",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_47-49.mp3",
        questions: [
            {
                id: "v3-p3-t09-q47",
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
                id: "v3-p3-t09-q48",
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
                id: "v3-p3-t09-q49",
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
            { speaker: "W-Am", text: "Abdullah, have you edited the film footage for that frozen food commercial yet?" },
            { speaker: "M-Cn", text: "The video and music are done, but I'm still working on the dubbing to add the actors' voices in." },
            { speaker: "W-Am", text: "Can you have it finished by the end of the week? The client hoped to have it air on television next Monday." },
            { speaker: "M-Cn", text: "Well, we just switched to a new software program." },
            { speaker: "W-Am", text: "Hmm... OK. I'll ask the client if they'd be willing to move the deadline for us. By the way, congratulations. I heard that you recently won a best effects award in an industry competition." },
            { speaker: "M-Cn", text: "Oh, thanks. Yes, I worked hard on the entry I submitted, so I was happy to be selected." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s7",
        contextType: "B4. 일반문의",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_50-52.mp3",
        questions: [
            {
                id: "v3-p3-t09-q50",
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
                id: "v3-p3-t09-q51",
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
                id: "v3-p3-t09-q52",
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
            { speaker: "M-Au", text: "Hello. Welcome to New York Ferry Service. How can I help you two?" },
            { speaker: "W-Br", text: "Hi. We're trying to catch the next ferry to the city." },
            { speaker: "W-Am", text: "Yeah, how much are one-way commuter tickets?" },
            { speaker: "M-Au", text: "OK. It's ten dollars per person. Have you heard of our new payment option?" },
            { speaker: "W-Br", text: "No. What is it?" },
            { speaker: "M-Au", text: "Well, we just introduced a payment system that allows you to pay for your tickets right from your smartphone. No cash is needed." },
            { speaker: "W-Am", text: "That sounds great." },
            { speaker: "M-Au", text: "It definitely is! I suggest you both download our app so you can use this method in the future." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s8",
        contextType: "B4. 일반문의",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_53-55.mp3",
        questions: [
            {
                id: "v3-p3-t09-q53",
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
                id: "v3-p3-t09-q54",
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
                id: "v3-p3-t09-q55",
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
            { speaker: "W-Br", text: "Hans Jones Jewelry? Hmm, I don't remember seeing your booth at this trade show before. Can you tell me about your company?" },
            { speaker: "M-Cn", text: "Sure. We're a relatively new company, and we're just starting to visit trade shows. We specialize in creating affordable jewelry made with high-quality materials." },
            { speaker: "W-Br", text: "Your necklaces are beautiful. I'd love to sell them at my fashion boutiques. Do you make any earrings or bracelets?" },
            { speaker: "M-Cn", text: "Yes, I just didn't have room to display them here. But take one of our catalogs. It has pictures of our entire collection." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s9",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_56-58.mp3",
        questions: [
            {
                id: "v3-p3-t09-q56",
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
                id: "v3-p3-t09-q57",
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
                id: "v3-p3-t09-q58",
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
            { speaker: "W-Br", text: "Hi, Carlos. I have a question about the news story you're working on-the one about the local bus system. Did you get a quote from someone at the transit agency?" },
            { speaker: "M-Au", text: "No, I haven't been able to contact anyone there yet. And our deadline to get this story on tonight's news is five P.M. I'm concerned we'll miss it if they don't respond soon." },
            { speaker: "W-Br", text: "Well, I just heard they're hosting a big press conference at noon." },
            { speaker: "M-Au", text: "What a great idea-I'll leave now." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_59-61.mp3",
        questions: [
            {
                id: "v3-p3-t09-q59",
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
                id: "v3-p3-t09-q60",
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
                id: "v3-p3-t09-q61",
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
            { speaker: "M-Au", text: "Tomoko, our sales of fresh flowers have always been strong, but to increase business, I think we should try to sell more indoor potted plants. I'm sure we could find customers in local office buildings." },
            { speaker: "W-Br", text: "Not just offices. People working from home would be interested, too. Why don't we start promoting the idea by featuring some plants on our Web site?" },
            { speaker: "M-Au", text: "OK, let's do that. I know a photographer who specializes in product pictures. I'll get in touch and see when she's available." }
        ]
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s11",
        contextType: "A1. 회의 / 일정 조정",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_62-64.mp3",
        questions: [
            {
                id: "v3-p3-t09-q62",
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
                id: "v3-p3-t09-q63",
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
                id: "v3-p3-t09-q64",
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
            { speaker: "M-Cn", text: "Hello, this is the Vega Event Center. How can I help you?" },
            { speaker: "W-Br", text: "Hi. I work for Thomson Manufacturing Company, and we're planning a charity auction." },
            { speaker: "M-Cn", text: "Great, we've definitely hosted those before. How many guests do you anticipate?" },
            { speaker: "W-Br", text: "Well, we want to invite 250 guests. Do you have an event space that would accommodate us?" },
            { speaker: "M-Cn", text: "Oh, yes. One of our banquet rooms fits between 200 and 300 people." },
            { speaker: "W-Br", text: "Excellent. We'd also like to have a musical act perform during the auction. Can you recommend some bands?" },
            { speaker: "M-Cn", text: "Absolutely. I'll send you a list of groups that we regularly hire." }
        ],
        image: "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q62.png"
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s12",
        contextType: "B4. 일반문의",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_65-67.mp3",
        questions: [
            {
                id: "v3-p3-t09-q65",
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
                id: "v3-p3-t09-q66",
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
                id: "v3-p3-t09-q67",
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
            { speaker: "W-Br", text: "Joining me for tonight's news broadcast is aviation expert Dmitry Petrov." },
            { speaker: "M-Au", text: "Thanks for having me." },
            { speaker: "W-Br", text: "Airports around the country are seeing more and more flight delays. What might be causing this trend?" },
            { speaker: "M-Au", text: "Air travel has been steadily increasing. More travelers and flights cause airport congestion-and delays." },
            { speaker: "W-Br", text: "Is this trend consistent across airports?" },
            { speaker: "M-Au", text: "Actually, no. Look at this graph. Some see average delays of around twenty minutes, but some like this airport here, can be over forty." },
            { speaker: "W-Br", text: "What would you tell travelers to do?" },
            { speaker: "M-Au", text: "If possible, try changing your plans to avoid cities known for delays, and if you can, shift your travel to off-peak times." }
        ],
        image: "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q65.png"
    },
    {
        testId: 9,
        vol: 3,
        setId: "v3-p3-t09-s13",
        contextType: "B2. 주문 / 배송",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 3_68-70.mp3",
        questions: [
            {
                id: "v3-p3-t09-q68",
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
                id: "v3-p3-t09-q69",
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
                id: "v3-p3-t09-q70",
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
            { speaker: "M-Cn", text: "Helen, remember we discussed doing something special for our bakery's anniversary next month?" },
            { speaker: "W-Am", text: "Yes, we talked about having a souvenir item with our logo on it." },
            { speaker: "M-Cn", text: "Right. Here are four options I came up with." },
            { speaker: "W-Am", text: "Let's see... I think the short-sleeved shirt with our business logo on the front will have the widest appeal, since it'll be hot in the summer. It will really help advertise our store too." },
            { speaker: "M-Cn", text: "OK. I'll go ahead and order those now." }
        ],
        image: "/images/ETS_TOEIC_3/Test_09/Part_03/p3_q68.png"
    }
];
