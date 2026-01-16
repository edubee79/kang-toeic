export interface Part6Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: string;
}

export interface Part6Passage {
    id: string;
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "ADVERTISEMENT" | "INTRODUCTION" | "WEB PAGE" | "PRESS RELEASE" | "INFORMATION" | "INSTRUCTIONS" | "POLICY";
    title?: string;
    content: string;
    questions: Part6Question[];
    translation?: string;
}

export interface Part6TestSet {
    testId: number;
    title: string;
    passages: Part6Passage[];
}

export const part6TestData: Part6TestSet[] = [
    {
        testId: 2,
        title: "ETS TOEIC Vol 4 - Test 2",
        passages: [
            {
                id: "p6-t2-p1",
                type: "EMAIL",
                title: "Order update",
                content: `To: Myung-Hee Hahn
From: Dellwyn Home Store
Date: January 15
Subject: Order update

Dear Ms. Hahn,

Your order of a red oak dining table and six matching chairs arrived at our store this morning.
[131]. We would now like to arrange for the delivery of the [132]. Please call us at 517-555-0188 and
ask ---- to Coleman Cobb, our delivery manager.
[133].
[134].

Customer Service, Dellwyn Home Store`,
                questions: [
                    {
                        id: "131",
                        text: "Which sentence best fits in position 131?",
                        options: [
                            { label: "A", text: "specially" },
                            { label: "B", text: "specialize" },
                            { label: "C", text: "special" },
                            { label: "D", text: "specializing" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "132",
                        text: "What is the best word for position 132?",
                        options: [
                            { label: "A", text: "furniture" },
                            { label: "B", text: "appliances" },
                            { label: "C", text: "refund" },
                            { label: "D", text: "tools" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "133",
                        text: "What is the best word for position 133?",
                        options: [
                            { label: "A", text: "speak" },
                            { label: "B", text: "spoken" },
                            { label: "C", text: "is speaking" },
                            { label: "D", text: "to speak" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "134",
                        text: "Which sentence best fits in position 134?",
                        options: [
                            { label: "A", text: "He can schedule a convenient time." },
                            { label: "B", text: "He began working here yesterday." },
                            { label: "C", text: "He can meet you at 11:00 A.м." },
                            { label: "D", text: "He recently moved to Dellwyn." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t2-p2",
                type: "ADVERTISEMENT",
                content: `Keep Cool Service Contractors:
67 Main Road, Edinburgh Village
Chaguanas, Trinidad and Tobago

Keep Cool Service Contractors can bring you peace of mind. As part of an annual contract, we will
service your air-conditioning system, ensuring your [135]. and comfort. This includes inspecting
the system, making repairs as needed, and professionally cleaning your air ducts. [136]. , if
necessary, we can replace your old air-conditioning system with a new, cost-efficient one.

Our workers are highly qualified licensed technicians who stay up-to-date with ongoing training.
[137]. We promise you fair prices and professional work, [138]. by our Keep Cool guarantee.
Call 1-868-555-0129 for a free quote today.`,
                questions: [
                    {
                        id: "135",
                        text: "What is the best word for position 135?",
                        options: [
                            { label: "A", text: "safe" },
                            { label: "B", text: "safely" },
                            { label: "C", text: "safest" },
                            { label: "D", text: "safety" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "136",
                        text: "Which sentence best fits in position 136?",
                        options: [
                            { label: "A", text: "On one hand" },
                            { label: "B", text: "Nonetheless" },
                            { label: "C", text: "Furthermore" },
                            { label: "D", text: "And yet" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "137",
                        text: "Which sentence best fits in position 137?",
                        options: [
                            { label: "A", text: "Take advantage of dozens of useful online tools." },
                            { label: "B", text: "Moreover, the air conditioner you chose is very popular." },
                            { label: "C", text: "Plus, they are friendly, clean, and knowledgeable." },
                            { label: "D", text: "Thank you for visiting our contractor showroom." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "138",
                        text: "What is the best word for position 138?",
                        options: [
                            { label: "A", text: "backed" },
                            { label: "B", text: "backs" },
                            { label: "C", text: "backing" },
                            { label: "D", text: "back" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t2-p3",
                type: "EMAIL",
                title: "Information",
                content: `To: All Customers
From: asquires@lightidea.com
Date: March 6
Subject: Information

Dear Light Idea Customers,

Light Idea is enacting a price increase on select energy-efficient products, effective April 17.
Specific product pricing will [139]. Please contact your sales representative for details and
questions.

The last date for ordering at current prices is April 16. All orders [140]. after this date will follow the
new price list. [141]. Customers will be able to find this on our Web site.

We will continue to provide quality products and [142]. service to our valued customers. Thank you
for your business.

Sincerely,
Arvin Squires
Head of Sales, Light Idea`,
                questions: [
                    {
                        id: "139",
                        text: "What is the best word for position 139?",
                        options: [
                            { label: "A", text: "agree" },
                            { label: "B", text: "vary" },
                            { label: "C", text: "wait" },
                            { label: "D", text: "decline" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "What is the best word for position 140?",
                        options: [
                            { label: "A", text: "receiving" },
                            { label: "B", text: "having received" },
                            { label: "C", text: "received" },
                            { label: "D", text: "will be received" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "141",
                        text: "Which sentence best fits in position 141?",
                        options: [
                            { label: "A", text: "The updated price list will be available on March 20." },
                            { label: "B", text: "We apologize for this inconvenience." },
                            { label: "C", text: "Your orders will be shipped after April 17." },
                            { label: "D", text: "We are increasing prices because of rising costs." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "142",
                        text: "What is the best word for position 142?",
                        options: [
                            { label: "A", text: "exceptionally" },
                            { label: "B", text: "exception" },
                            { label: "C", text: "exceptional" },
                            { label: "D", text: "exceptionalism" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t2-p4",
                type: "EMAIL",
                title: "Good news",
                content: `To: Jang-Ho Kwon <jkwon@newart.nz>
From: Kenneth Okim <k.okim@okimjewelry.nz>
Subject: Good news
Date: 30 August

Dear Jang-Ho,

Thank you for the shipment last month of 80 units of your jewelry pieces. I am happy to report
that they have been selling very well in my shop. My [143]. love the colourful designs as well as
the quality of your workmanship.

[144]. I would like to increase the number of units I order from you. Would you be able to
[145]. my order for the September shipment?

Finally, I would like to discuss the possibility of featuring your work exclusively in my store. I
believe that I could reach your target audience best and that the agreement would serve
[146]. both very well. I look forward to hearing from you.

Best regards,
Kenneth Okim
Okim Jewelry`,
                questions: [
                    {
                        id: "143",
                        text: "What is the best word for position 143?",
                        options: [
                            { label: "A", text: "patients" },
                            { label: "B", text: "students" },
                            { label: "C", text: "customers" },
                            { label: "D", text: "teammates" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "144",
                        text: "Which sentence best fits in position 144?",
                        options: [
                            { label: "A", text: "If you need more time, please let me know." },
                            { label: "B", text: "Unfortunately, I do not have adequate shelf space at this time." },
                            { label: "C", text: "I would like to show you some of my own designs." },
                            { label: "D", text: "The reasonable prices also make your pieces a great value." }
                        ],
                        correctAnswer: "D",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "145",
                        text: "What is the best word for position 145?",
                        options: [
                            { label: "A", text: "include" },
                            { label: "B", text: "double" },
                            { label: "C", text: "repeat" },
                            { label: "D", text: "insure" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "146",
                        text: "What is the best word for position 146?",
                        options: [
                            { label: "A", text: "us" },
                            { label: "B", text: "you" },
                            { label: "C", text: "we" },
                            { label: "D", text: "these" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    }
                ]
            }
        ]
    },

    {
        testId: 3,
        title: "ETS TOEIC Vol 4 - Test 3",
        passages: [
            {
                id: "p6-t3-p1",
                type: "EMAIL",
                title: "Florence Shawn",
                content: `Hi Everyone,

I have news to share about a [131] in the human resources department. After nearly twenty
years with Cometti Creative, Florence Shawn has decided to retire from the position of director of
human resources.

Our current senior manager of human resources, Makoto Ichise, will replace Ms. Shawn when
she retires. Ms. Shawn [132] Mr. Ichise since he joined the company five years ago.

Ms. Shawn's [133] day will be February 22. A retirement party will be held for her on that day
at 4:00 P.M. in the Terey Lobby. [134]

Best,
Yoreli Costa
Director of Operations, Cometti Creative`,
                questions: [
                    {
                        id: "131",
                        text: "question text",
                        options: [
                            { label: "A", text: "difference" },
                            { label: "B", text: "strategy" },
                            { label: "C", text: "change" },
                            { label: "D", text: "practice" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "132",
                        text: "question text",
                        options: [
                            { label: "A", text: "mentors" },
                            { label: "B", text: "is mentoring" },
                            { label: "C", text: "will mentor" },
                            { label: "D", text: "has been mentoring" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "133",
                        text: "question text",
                        options: [
                            { label: "A", text: "last" },
                            { label: "B", text: "original" },
                            { label: "C", text: "flexible" },
                            { label: "D", text: "alternate" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "134",
                        text: "question text",
                        options: [
                            { label: "A", text: "Cometti Creative will hire a replacement soon." },
                            { label: "B", text: "We hope that you can all attend to wish her well." },
                            { label: "C", text: "Ms. Shawn was the first director of human resources at Cometti Creative." },
                            { label: "D", text: "The first project will be the creation of a talent development program." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t3-p2",
                type: "ADVERTISEMENT",
                title: "Helping Manitoba Families Find their Dream Homes",
                content: `Manuel Lovitt, [135] of Lovitt Real Estate, has been selling real estate for over 17 years. Mr. Lovitt
and his award-winning team [136] in homes for families in the Winnipeg, Brandon, and Dauphin
areas. They know about the schools, parks, services, transportation, and activities that enhance
family life in the area where you want to reside. [137]

Contact Lovitt Real Estate today and let the team guide you [138] the home of your dreams.
They will listen to your needs, negotiate on your behalf, and get you the best home for your
hard-earned money.

Call 431-555-0168 to speak to an agent or visit www.lovittrealestate.ca for more information.`,
                questions: [
                    {
                        id: "135",
                        text: "question text",
                        options: [
                            { label: "A", text: "own" },
                            { label: "B", text: "owned" },
                            { label: "C", text: "owner" },
                            { label: "D", text: "owning" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "136",
                        text: "question text",
                        options: [
                            { label: "A", text: "practice" },
                            { label: "B", text: "specialize" },
                            { label: "C", text: "report" },
                            { label: "D", text: "purchase" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "137",
                        text: "question text",
                        options: [
                            { label: "A", text: "They can arrange transportation for your local elementary school." },
                            { label: "B", text: "That is because they live in the communities they serve." },
                            { label: "C", text: "They will be closed for the summer but will be back soon." },
                            { label: "D", text: "Therefore, they can help you with all your banking needs." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "138",
                        text: "question text",
                        options: [
                            { label: "A", text: "toward" },
                            { label: "B", text: "fixing" },
                            { label: "C", text: "because" },
                            { label: "D", text: "along" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t3-p3",
                type: "INTRODUCTION",
                content: `Welcome to "Distributing Your Savings." This slide [139] is the third of a twelve-segment
educational series called "Preparing for Retirement." [140]

This series provides only [141] advice. It should not replace the guidance of your investment
planner. The series has been developed as background material to help you ask key questions
when [142] with your investment planner. We hope you find this information helpful.

Swainson-Gray Investments`,
                questions: [
                    {
                        id: "139",
                        text: "question text",
                        options: [
                            { label: "A", text: "presenting" },
                            { label: "B", text: "presents" },
                            { label: "C", text: "presentation" },
                            { label: "D", text: "presented" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "question text",
                        options: [
                            { label: "A", text: "You are encouraged to visit our office for a free portfolio review." },
                            { label: "B", text: "The series is designed to help you make informed financial decisions." },
                            { label: "C", text: "Please fill out the paperwork before your appointment." },
                            { label: "D", text: "Your responses will help us serve you better in the future." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "141",
                        text: "question text",
                        options: [
                            { label: "A", text: "regional" },
                            { label: "B", text: "expensive" },
                            { label: "C", text: "supplemental" },
                            { label: "D", text: "playful" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "142",
                        text: "question text",
                        options: [
                            { label: "A", text: "consulting" },
                            { label: "B", text: "prescribing" },
                            { label: "C", text: "listing" },
                            { label: "D", text: "following" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t3-p4",
                type: "EMAIL",
                title: "My input",
                content: `Dear Dr. Paulwell,

This message is in response to yesterday's staff meeting, particularly the discussion on how
certain aspects of the clinic may affect our work and mission. [143]

Currently, the vending machines in the hall outside our waiting room are stocked with sugary
and salty products such as soft drinks and chips. As a health care provider, we [144]
beverages and snacks that show our commitment to wellness. [145] , our mission is focused
on good health.

I have attached an article about actions that medical centers like ours are taking to improve
their hospitality stations. I hope you find it [146] . It details some easy and cost-effective
changes we could consider.

Kind regards,
Silas Laveau`,
                questions: [
                    {
                        id: "143",
                        text: "question text",
                        options: [
                            { label: "A", text: "I thought it went on longer than was necessary." },
                            { label: "B", text: "I wish we had been informed about it sooner." },
                            { label: "C", text: "I would like to make a suggestion on this topic." },
                            { label: "D", text: "I would be honored to lead a follow-up session." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "144",
                        text: "question text",
                        options: [
                            { label: "A", text: "will offer" },
                            { label: "B", text: "have offered" },
                            { label: "C", text: "were offering" },
                            { label: "D", text: "should be offering" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "145",
                        text: "question text",
                        options: [
                            { label: "A", text: "After all" },
                            { label: "B", text: "By the way" },
                            { label: "C", text: "In the meantime" },
                            { label: "D", text: "On the other hand" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "146",
                        text: "question text",
                        options: [
                            { label: "A", text: "useful" },
                            { label: "B", text: "eventful" },
                            { label: "C", text: "profitable" },
                            { label: "D", text: "comfortable" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },

    {
        testId: 4,
        title: "ETS TOEIC Vol 4 - Test 4",
        passages: [
            {
                id: "p6-t4-p1",
                type: "NOTICE",
                title: "D-Zine Pop",
                content: `D-Zine Pop is your source for information about the latest [131] in the world of fashion. What
started as a social media experiment [132] into a content platform with subscribers in seventeen
countries worldwide. We are constantly adding features to improve our user experience and share
what apparel and clothing accessories are popular right now. We also make periodic updates to
our terms of service. Subscribers' [133] access to content is contingent upon consenting to these
terms; therefore, we encourage you to review and accept them at dzinepop.com/privacy. Contact
our customer service team at support@dzinepop.com if you have any questions. [134]`,
                questions: [
                    {
                        id: "131",
                        text: "",
                        options: [
                            { label: "A", text: "controversies" },
                            { label: "B", text: "consumers" },
                            { label: "C", text: "trends" },
                            { label: "D", text: "versions" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "132",
                        text: "",
                        options: [
                            { label: "A", text: "evolving" },
                            { label: "B", text: "evolution" },
                            { label: "C", text: "will be evolving" },
                            { label: "D", text: "has evolved" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "133",
                        text: "",
                        options: [
                            { label: "A", text: "continue" },
                            { label: "B", text: "continued" },
                            { label: "C", text: "continuation" },
                            { label: "D", text: "continues" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "134",
                        text: "",
                        options: [
                            { label: "A", text: "Representatives are available 24 hours a day\nto assist you." },
                            { label: "B", text: "The changes made to our user privacy policy\nare no longer effective." },
                            { label: "C", text: "Fresh content is accessible through phone and\ndesktop apps." },
                            { label: "D", text: "We are no longer offering a discounted rate if\nyou renew your subscription." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t4-p2",
                type: "ADVERTISEMENT",
                title: "Rescue your device with Phone Tune-Up",
                content: `Is your smartphone screen scratched or cracked? [135] ? Do your apps freeze or crash? The
experts at Phone Tune-Up can help! We use nothing but the best quality parts to [136] your
mobile phone. Let our certified technicians save you the time and expense involved in replacing
your phone with a new one. When we are [137], you will think your old phone is brand new. To
make an appointment, call 604-555-0198 or visit www.phonetuneup.com. Same-day service is
often available [138] needed parts are in stock.`,
                questions: [
                    {
                        id: "135",
                        text: "",
                        options: [
                            { label: "A", text: "Does your printer need frequent ink\nrefills?" },
                            { label: "B", text: "Does it take all day for your battery to\nrecharge?" },
                            { label: "C", text: "Do you want to complete a short\nsurvey?" },
                            { label: "D", text: "Do you pay too much for your data\nplan?" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "136",
                        text: "",
                        options: [
                            { label: "A", text: "remove" },
                            { label: "B", text: "borrow" },
                            { label: "C", text: "examine" },
                            { label: "D", text: "repair" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "137",
                        text: "",
                        options: [
                            { label: "A", text: "trained" },
                            { label: "B", text: "available" },
                            { label: "C", text: "done" },
                            { label: "D", text: "dismissed" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "138",
                        text: "",
                        options: [
                            { label: "A", text: "whose" },
                            { label: "B", text: "must" },
                            { label: "C", text: "if" },
                            { label: "D", text: "of" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t4-p3",
                type: "PRESS RELEASE",
                title: "FOR IMMEDIATE RELEASE",
                content: `SACRAMENTO (July 28)—The Sacramento-based supermarket chain Hsing Market announced
today that it is opening a branch [139] in San Jose in October. It will occupy the building that
once housed the Watson Office Superstore located at 1539 West Oak Street, which closed last
year.

Hsing Market CEO Alice Tran said, "We are very excited to [140] open a store in San Jose.
[141] When the Watson building became available, we jumped on the opportunity to move in."

As a neighborhood grocery store, Hsing Market prides itself on hiring applicants from the local
community. Approximately 75 percent of all employees live within two miles of the store where
they [142]`,
                questions: [
                    {
                        id: "139",
                        text: "",
                        options: [
                            { label: "A", text: "location" },
                            { label: "B", text: "locate" },
                            { label: "C", text: "to locate" },
                            { label: "D", text: "locating" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "",
                        options: [
                            { label: "A", text: "finally" },
                            { label: "B", text: "instead" },
                            { label: "C", text: "likewise" },
                            { label: "D", text: "suddenly" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "141",
                        text: "",
                        options: [
                            { label: "A", text: "The store features a variety of\nfresh and prepared foods." },
                            { label: "B", text: "We hope that you will be able to\njoin us at our grand-opening\ncelebration." },
                            { label: "C", text: "We have had our eyes on the\ncity for quite some time." },
                            { label: "D", text: "Our corporate headquarters will\nbe renovated soon." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "142",
                        text: "",
                        options: [
                            { label: "A", text: "save" },
                            { label: "B", text: "work" },
                            { label: "C", text: "shop" },
                            { label: "D", text: "register" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t4-p4",
                type: "WEB PAGE",
                title: "About Leafi Cloth",
                content: `Tropick Textiles recently expanded the [143] of fabrics available on the market. In its quest to
introduce environmentally friendly alternatives to cotton and other traditional fibers, the company
[144] a new fiber made from materials that are typically discarded. Tropick Textiles takes banana
and pineapple leaves and combines them with bamboo fibers to create Leafi Cloth. The plants'
leaves are ordinarily disposed of [145] the fruit is harvested. Tropick Textiles' process prevents
many leaves from entering a landfill, converting them instead into usable material. [146]`,
                questions: [
                    {
                        id: "143",
                        text: "",
                        options: [
                            { label: "A", text: "range" },
                            { label: "B", text: "expense" },
                            { label: "C", text: "strength" },
                            { label: "D", text: "appearance" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "144",
                        text: "",
                        options: [
                            { label: "A", text: "are developed" },
                            { label: "B", text: "has developed" },
                            { label: "C", text: "will develop" },
                            { label: "D", text: "to develop" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "145",
                        text: "",
                        options: [
                            { label: "A", text: "now" },
                            { label: "B", text: "thus" },
                            { label: "C", text: "even" },
                            { label: "D", text: "once" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "146",
                        text: "",
                        options: [
                            { label: "A", text: "The resulting durable fabric is a suitable\nsubstitute for cotton cloth." },
                            { label: "B", text: "Inquiries regarding Leafi Cloth were\ndirected to the sales department." },
                            { label: "C", text: "Tropick Textiles will celebrate its\none-hundredth anniversary this year." },
                            { label: "D", text: "Manufacturing costs have been\nincreasing for Tropick Textiles lately." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            }
        ]
    },

    {
        testId: 5,
        title: "ETS TOEIC Vol 4 - Test 5",
        passages: [
            {
                id: "p6-t5-p1",
                type: "ARTICLE",
                title: "Grocery Chain to Host Event",
                content: `LEIGHTON (October 8)-Ohale Foods, one of the region's largest supermarket chains, is seeking
to fill almost 100 open positions. For that reason, the company is holding a [131] event on October
20. Job opportunities exist at all fourteen of Ohale's current stores. [132] Ohale is seeking
employees for its new Westside location, which is still under construction. [133].
Those who [134] the event should bring copies of their résumé to the Grand Ballroom of the
Palace Suites Hotel between 10 A.M. and 7 P.M. No appointment is required.`,
                questions: [
                    {
                        id: "131",
                        text: "",
                        options: [
                            { label: "A", text: "manufacturing" },
                            { label: "B", text: "hiring" },
                            { label: "C", text: "political" },
                            { label: "D", text: "sporting" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "132",
                        text: "",
                        options: [
                            { label: "A", text: "If not" },
                            { label: "B", text: "After all" },
                            { label: "C", text: "Additionally" },
                            { label: "D", text: "For example" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "133",
                        text: "",
                        options: [
                            { label: "A", text: "Its grand opening is scheduled for\nmid-November." },
                            { label: "B", text: "Most applicants had prior experience." },
                            { label: "C", text: "Its appointment of Linda Okumu as\nits CEO has surprised analysts." },
                            { label: "D", text: "Local competitors cannot match its\nprices." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "134",
                        text: "",
                        options: [
                            { label: "A", text: "attending" },
                            { label: "B", text: "to attend" },
                            { label: "C", text: "attended" },
                            { label: "D", text: "are attending" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t5-p2",
                type: "INSTRUCTIONS",
                content: `Thank you for your purchase of an Ajaz Water Filter Pitcher. It is a wonderful solution for water that
tastes great! To improve the effectiveness of the Ajaz Water Filter Pitcher, we [135] priming the
filter before the first use. [136] Then screw the filter clockwise into the lid of the pitcher until it fits
[137]. As you use the pitcher, remember that [138] water flow is a signal that the filter is becoming
clogged and will need to be replaced soon.`,
                questions: [
                    {
                        id: "135",
                        text: "",
                        options: [
                            { label: "A", text: "tried" },
                            { label: "B", text: "recommend" },
                            { label: "C", text: "consider" },
                            { label: "D", text: "started" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "136",
                        text: "",
                        options: [
                            { label: "A", text: "Our filtration system will be\nredesigned within the next year." },
                            { label: "B", text: "Water use may be reduced by\nrunning your dishwasher less\nfrequently." },
                            { label: "C", text: "To do this, run cool tap water through\nthe filter for three minutes." },
                            { label: "D", text: "There are 150 liters of water in the\nmain storage tank at all times." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "137",
                        text: "",
                        options: [
                            { label: "A", text: "extremely" },
                            { label: "B", text: "highly" },
                            { label: "C", text: "tightly" },
                            { label: "D", text: "steadily" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "138",
                        text: "",
                        options: [
                            { label: "A", text: "diminished" },
                            { label: "B", text: "diminishes" },
                            { label: "C", text: "diminish" },
                            { label: "D", text: "diminishable" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t5-p3",
                type: "POLICY",
                title: "Returning merchandise",
                content: `Abney Home Products is committed to providing outstanding service, and we guarantee the
[139] of all the products in our catalog. If you are not satisfied with a purchase, call our customer
service line at 339-555-0177 to request a return authorization code. The service agent
[140] you for the invoice number from the package insert. [141] Please be aware that Abney
Home Products is not [142] for postage on merchandise returns.`,
                questions: [
                    {
                        id: "139",
                        text: "",
                        options: [
                            { label: "A", text: "condition" },
                            { label: "B", text: "object" },
                            { label: "C", text: "explanation" },
                            { label: "D", text: "preview" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "",
                        options: [
                            { label: "A", text: "asked" },
                            { label: "B", text: "is asking" },
                            { label: "C", text: "has asked" },
                            { label: "D", text: "will ask" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "141",
                        text: "",
                        options: [
                            { label: "A", text: "Our employees have software training\nand are skilled at resolving problems." },
                            { label: "B", text: "To cancel a furniture delivery, please call\nwithin 24 hours of ordering." },
                            { label: "C", text: "When you send back the product, be\nsure to include the authorization code." },
                            { label: "D", text: "The catalog has sections for kitchen\ngoods, lighting, appliances, and more." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "142",
                        text: "",
                        options: [
                            { label: "A", text: "responsibly" },
                            { label: "B", text: "responsible" },
                            { label: "C", text: "responsibility" },
                            { label: "D", text: "responsibleness" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t5-p4",
                type: "MEMO",
                title: "Safety Training",
                content: `To: All Employees
From: Marina Papantonio, Safety Liaison
Date: November 12
Subject: Safety Training

It is time once again for our annual safety training workshop. This year, training will focus on
digital safety measures, like avoiding scams and protecting against cyberattacks. Our technology
experts already have installed new programs throughout our company's information system to
reduce risk. [143] , we all need to understand how the programs work and what to do when a
problem arises.

To accommodate [144] , several workshops will be conducted throughout the upcoming week.
You can register for any one of these [145] on our company's intranet page. Just click on the link
for "Safety Training."

[146] . If you are unable to take part in any of the scheduled workshops for any reason, you must
inform your supervisor.`,
                questions: [
                    {
                        id: "143",
                        text: "",
                        options: [
                            { label: "A", text: "If so" },
                            { label: "B", text: "However" },
                            { label: "C", text: "Otherwise" },
                            { label: "D", text: "In that case" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "144",
                        text: "",
                        options: [
                            { label: "A", text: "itself" },
                            { label: "B", text: "his" },
                            { label: "C", text: "whose" },
                            { label: "D", text: "everyone" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "145",
                        text: "",
                        options: [
                            { label: "A", text: "sessions" },
                            { label: "B", text: "positions" },
                            { label: "C", text: "conferences" },
                            { label: "D", text: "competitions" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "146",
                        text: "",
                        options: [
                            { label: "A", text: "Cyberattacks are on the rise." },
                            { label: "B", text: "The training is held each summer." },
                            { label: "C", text: "Please make every effort to sign up." },
                            { label: "D", text: "Last year's program was canceled." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            }
        ]
    },

    {
        testId: 6,
        title: "ETS TOEIC Vol 4 - Test 6",
        passages: [
            {
                id: "p6-t6-p1",
                type: "ADVERTISEMENT",
                title: "Estella Guitar Lessons: Play with the Best",
                content: `Whether you play acoustic guitar ------ electric, taking lessons with an Estella Guitar teacher is the
best way to improve your ability. With years of experience crafting playing techniques, ______
qualified instructors can tailor lessons to focus on the skills you want to fine-tune. Receive a
customized learning plan to set goals and overcome the challenges that cause many players to
get discouraged. ______ An Estella Guitar teacher will help boost your confidence.

At Estella Guitar, we believe that playing music is a way of expressing yourself. ______ we will help
you go beyond the familiar chords and riffs to develop your own identity as a musician. Ready to
get started? Visit www.estellaguitar.com/lessons to get matched with the right instructor for you!
[131]
[132]
[133]
[134]`,
                questions: [
                    {
                        id: "131",
                        text: " ",
                        options: [
                            { label: "A", text: "is" },
                            { label: "B", text: "or" },
                            { label: "C", text: "likely" },
                            { label: "D", text: "from" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "132",
                        text: " ",
                        options: [
                            { label: "A", text: "our" },
                            { label: "B", text: "ourselves" },
                            { label: "C", text: "ours" },
                            { label: "D", text: "us" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "133",
                        text: " ",
                        options: [
                            { label: "A", text: "Contact a technician for questions about repairs." },
                            { label: "B", text: "A high-quality instrument will help you to perform at your best." },
                            { label: "C", text: "The best resource for you as a learner is an expert to guide your progress." },
                            { label: "D", text: "It took them several years to master their instruments." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "134",
                        text: " ",
                        options: [
                            { label: "A", text: "So far" },
                            { label: "B", text: "With that in mind" },
                            { label: "C", text: "On a different note" },
                            { label: "D", text: "At that point" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t6-p2",
                type: "POLICY",
                content: `In-home delivery takes approximately one week after an order is shipped from our warehouse.
The actual time may vary based on the location of your ______ and your availability for accepting the
item. Vernico Furniture will work with a carrier ______ an appointment that is convenient for you.
Typical hours are Monday through Friday between 8 A.M. and 5 р.м., ______ evening appointments
can often be arranged. Upon arrival at your home, the item will be placed in the location you
desire. ______ Assembly is included as well.
[135]
[136]
[137]
[138]`,
                questions: [
                    {
                        id: "135",
                        text: " ",
                        options: [
                            { label: "A", text: "garden" },
                            { label: "B", text: "records" },
                            { label: "C", text: "residence" },
                            { label: "D", text: "organization" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "136",
                        text: " ",
                        options: [
                            { label: "A", text: "to schedule" },
                            { label: "B", text: "is scheduling" },
                            { label: "C", text: "as a schedule" },
                            { label: "D", text: "that scheduled" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "137",
                        text: " ",
                        options: [
                            { label: "A", text: "if so" },
                            { label: "B", text: "when" },
                            { label: "C", text: "though" },
                            { label: "D", text: "in the meantime" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "138",
                        text: " ",
                        options: [
                            { label: "A", text: "When buying a home, location is extremely important." },
                            { label: "B", text: "Refinishing furniture is a form of art." },
                            { label: "C", text: "Furnished apartments can be found online." },
                            { label: "D", text: "All packing materials will be removed." }
                        ],
                        correctAnswer: "D",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t6-p3",
                type: "EMAIL",
                title: "Subscription",
                content: `To: Thao Pham <thaopham@amail.com>
From: Leena Montoya <Imontoya@academemedia.com>
Date: April 17
Subject: Subscription

Dear Mr. Pham,

______ Your subscription to Medical Innovations Quarterly has been canceled. ______ May 1, you
will no longer receive the print edition.

We hope that you will consider once again becoming a ______ of our publications. Academe Media
publishes many high-quality scientific journals in addition to Medical Innovations Quarterly. Should
you wish to subscribe to one by May 31, we can offer you a two-year subscription at the annual
rate. Visit www.academemedia.com/shop and enter the code DOUBLE ______ checkout.

If you have any feedback that could help us improve our products or services, please call me
directly at 212-555-0122.

Sincerely,

Leena Montoya
Customer Service Manager, Academe Media
[139]
[140]
[141]
[142]`,
                questions: [
                    {
                        id: "139",
                        text: " ",
                        options: [
                            { label: "A", text: "Thank you for your timely order." },
                            { label: "B", text: "We have processed your request." },
                            { label: "C", text: "This is a payment reminder." },
                            { label: "D", text: "Please contact us to update your information." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "140",
                        text: " ",
                        options: [
                            { label: "A", text: "Starts" },
                            { label: "B", text: "Started" },
                            { label: "C", text: "Starter" },
                            { label: "D", text: "Starting" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "141",
                        text: " ",
                        options: [
                            { label: "A", text: "distributor" },
                            { label: "B", text: "producer" },
                            { label: "C", text: "reader" },
                            { label: "D", text: "teacher" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "142",
                        text: " ",
                        options: [
                            { label: "A", text: "until" },
                            { label: "B", text: "upon" },
                            { label: "C", text: "without" },
                            { label: "D", text: "next" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t6-p4",
                type: "INFORMATION",
                content: `In a commercial kitchen, all refrigerators are required to have a thermometer that ______ from
0°F (-18°C) to 220°F (104°C). To prevent the growth of bacteria, refrigerated foods must be
stored at 41°F (5°C) or below. The head chef is responsible for checking these thermometers
throughout the day to ensure that the kitchen is in compliance at all times.

Also important to consider is ______. Thermometers should always be located in the warmest
spot in the refrigerator. ______. This location is also appropriate because it allows the
thermometer to be easily ______ as soon as the door is opened.
[143]
[144]
[145]
[146]`,
                questions: [
                    {
                        id: "143",
                        text: " ",
                        options: [
                            { label: "A", text: "ranges" },
                            { label: "B", text: "ranger" },
                            { label: "C", text: "ranged" },
                            { label: "D", text: "ranging" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "144",
                        text: " ",
                        options: [
                            { label: "A", text: "size" },
                            { label: "B", text: "safety" },
                            { label: "C", text: "reliability" },
                            { label: "D", text: "placement" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "145",
                        text: " ",
                        options: [
                            { label: "A", text: "Remove them carefully." },
                            { label: "B", text: "This is typically inside the door." },
                            { label: "C", text: "It should be kept cool at all times." },
                            { label: "D", text: "They can also be purchased in bulk." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "146",
                        text: " ",
                        options: [
                            { label: "A", text: "sold" },
                            { label: "B", text: "seen" },
                            { label: "C", text: "repaired" },
                            { label: "D", text: "removed" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    }
                ]
            }
        ]
    },

    {
        testId: 7,
        title: "ETS TOEIC Vol 4 - Test 7",
        passages: [
            {
                id: "p6-t7-p1",
                type: "EMAIL",
                title: "Follow-up",
                content: `To: Naomi Richter <naomirichter@mailcurrent.com>
From: Watanu Sakamoto <wsakamoto@RHNimports.com>
Date: 23 November
Subject: Follow-up
Attachment: Logistics coordinator description

Dear Ms. Richter,

Thank you for coming to our office to interview for the assistant import manager position last
week. We were impressed with your credentials and enthusiasm. [131] we are moving ahead
with another candidate, we would like to offer you a different position that just became available:
logistics coordinator.

[132] The attached document contains the detailed job description and pay rate. This [133] has not yet been posted publicly. If you are [134] please let me know by the end of this week.

Sincerely,
Watanu Sakamoto
Human Resource Manager, RHN Imports`,
                questions: [
                    {
                        id: "131",
                        text: " ",
                        options: [
                            { label: "A", text: "Rather" },
                            { label: "B", text: "Although" },
                            { label: "C", text: "Similarly" },
                            { label: "D", text: "Consequently" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "132",
                        text: " ",
                        options: [
                            { label: "A", text: "There are several other internal applicants." },
                            { label: "B", text: "Unfortunately, the position is no longer available." },
                            { label: "C", text: "My assistant will schedule your second interview." },
                            { label: "D", text: "Your experience and skill set make you a great fit." }
                        ],
                        correctAnswer: "D",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "133",
                        text: " ",
                        options: [
                            { label: "A", text: "opportunity" },
                            { label: "B", text: "authorization" },
                            { label: "C", text: "application" },
                            { label: "D", text: "capacity" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "134",
                        text: " ",
                        options: [
                            { label: "A", text: "interest" },
                            { label: "B", text: "interests" },
                            { label: "C", text: "interested" },
                            { label: "D", text: "interesting" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t7-p2",
                type: "NOTICE",
                content: `The Oakville Horticulture Club [135] a plant sale on Saturday, 9 September. The sale will be held
from 9:00 A.M. to 4:00P.M. at the Oakville Community Centre at 478 Hill Avenue. There will be
great deals on hanging baskets, grasses, and herbs. [136] We [137] have a delicious selection
of fruits and vegetables available for purchase. Enjoy live talks and demonstrations
[138] the day. For more information, visit the Oakville Horticulture Web site:
www.oakvillehorticultureclub.co.uk/events.`,
                questions: [
                    {
                        id: "135",
                        text: " ",
                        options: [
                            { label: "A", text: "host" },
                            { label: "B", text: "hosted" },
                            { label: "C", text: "is hosting" },
                            { label: "D", text: "has hosted" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "136",
                        text: " ",
                        options: [
                            { label: "A", text: "Come early to get the best selection." },
                            { label: "B", text: "Plants help make your home beautiful." },
                            { label: "C", text: "Join the club for a discount on local garden tours." },
                            { label: "D", text: "The community center was just renovated." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "137",
                        text: " ",
                        options: [
                            { label: "A", text: "later" },
                            { label: "B", text: "also" },
                            { label: "C", text: "nearly" },
                            { label: "D", text: "merely" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "138",
                        text: " ",
                        options: [
                            { label: "A", text: "within" },
                            { label: "B", text: "forward" },
                            { label: "C", text: "following" },
                            { label: "D", text: "throughout" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t7-p3",
                type: "LETTER",
                content: `July 2

Dear Mr. Arakaki:

I am writing to inform you of scheduled road maintenance on Briggs Avenue. Beginning on
July 15, Briggs Avenue [139] reduced to one lane from Elm Street to Bay Road. [140] Although
your [141] is not located in this section of Briggs Avenue, traffic on most of the street will move
more slowly than usual while work is being performed. You may [142] consider advising your
employees to take alternate routes to work during this time. The project is expected to be
completed on or before October 22. Thank you for your cooperation and assistance.

Sincerely,

Amalia Villalobos
Director of Transportation
Enclosure`,
                questions: [
                    {
                        id: "139",
                        text: " ",
                        options: [
                            { label: "A", text: "was" },
                            { label: "B", text: "will be" },
                            { label: "C", text: "can be" },
                            { label: "D", text: "has been" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "140",
                        text: " ",
                        options: [
                            { label: "A", text: "Briggs Avenue is only two miles away." },
                            { label: "B", text: "The event will take place on Elm Street." },
                            { label: "C", text: "Please refer to the enclosed map of the affected area." },
                            { label: "D", text: "However, all city services will close during this time." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "141",
                        text: " ",
                        options: [
                            { label: "A", text: "mailbox" },
                            { label: "B", text: "school" },
                            { label: "C", text: "signage" },
                            { label: "D", text: "business" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "142",
                        text: " ",
                        options: [
                            { label: "A", text: "fortunately" },
                            { label: "B", text: "instead" },
                            { label: "C", text: "likewise" },
                            { label: "D", text: "therefore" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t7-p4",
                type: "ARTICLE",
                title: "Franklin Planetarium to Move Downtown",
                content: `(June 3)-After 48 years in its present location on Mayfield's south side, the Franklin Planetarium
is moving to a new home. Construction is underway on the downtown facility, part of a complex
that includes the new Natural History Museum. Both [143] are expected to open to the public next
September.

The current planetarium's main attraction is a 300-seat theater, where visitors can view
projections of stars and planets on the dome above. [144] a larger theater, the new planetarium
will feature an upgraded digital projection system. [145] Visitors will be able [146] the night sky
more clearly and explore other planets and galaxies through new, interactive displays.`,
                questions: [
                    {
                        id: "143",
                        text: " ",
                        options: [
                            { label: "A", text: "trails" },
                            { label: "B", text: "buildings" },
                            { label: "C", text: "campuses" },
                            { label: "D", text: "performances" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "144",
                        text: " ",
                        options: [
                            { label: "A", text: "In addition to" },
                            { label: "B", text: "In particular" },
                            { label: "C", text: "In agreement with" },
                            { label: "D", text: "For instance" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "145",
                        text: " ",
                        options: [
                            { label: "A", text: "There are currently three other museums in the Mayfield area." },
                            { label: "B", text: "Attendance at the planetarium has been up in recent years." },
                            { label: "C", text: "Planning for the new planetarium began five years ago." },
                            { label: "D", text: "There will be room for three short-term exhibits as well." }
                        ],
                        correctAnswer: "D",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "146",
                        text: " ",
                        options: [
                            { label: "A", text: "to see" },
                            { label: "B", text: "will see" },
                            { label: "C", text: "who saw" },
                            { label: "D", text: "by seeing" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    }
                ]
            }
        ]
    },

    {
        testId: 8,
        title: "ETS TOEIC Vol 4 - Test 8",
        passages: [
            {
                id: "p6-t8-p1",
                type: "EMAIL",
                title: "AUTOMATIC REPLY",
                content: `To: mnandy@gmantcs.com
From: jblaire@blaireaccounting.ca
Re: AUTOMATIC REPLY
Date: 9 January, 10:34 AM

Hello, and thank you for contacting Blaire Accounting. I will be out of the office until 31 January.
I will respond to your message when I [131]. If you need [132] assistance, please contact Susan
Lewis, my administrative assistant, at slewis@blaireaccounting.ca. You can [133] call her directly
at 416-555-0193.
[134]
Jean Blaire, President`,
                questions: [
                    {
                        id: "131",
                        text: "(A) recover\n(B) return\n(C) begin\n(D) finish",
                        options: [
                            { label: "A", text: "recover" },
                            { label: "B", text: "return" },
                            { label: "C", text: "begin" },
                            { label: "D", text: "finish" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "132",
                        text: "(A) immediate\n(B) immediately\n(C) immediacy\n(D) immediacies",
                        options: [
                            { label: "A", text: "immediate" },
                            { label: "B", text: "immediately" },
                            { label: "C", text: "immediacy" },
                            { label: "D", text: "immediacies" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "133",
                        text: "(A) also\n(B) lightly\n(C) similarly\n(D) again",
                        options: [
                            { label: "A", text: "also" },
                            { label: "B", text: "lightly" },
                            { label: "C", text: "similarly" },
                            { label: "D", text: "again" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "134",
                        text: "(A) Ms. Blaire will be back in the office\nearlier than expected.\n(B) Please come and see us if you ever\nfind yourself in Toronto.\n(C) It is essential to hire a competent\npayroll and tax accountant.\n(D) Ms. Lewis is in the office on weekdays\nfrom 9 A.M. to 5 P.M.",
                        options: [
                            { label: "A", text: "Ms. Blaire will be back in the office\nearlier than expected." },
                            { label: "B", text: "Please come and see us if you ever\nfind yourself in Toronto." },
                            { label: "C", text: "It is essential to hire a competent\npayroll and tax accountant." },
                            { label: "D", text: "Ms. Lewis is in the office on weekdays\nfrom 9 A.M. to 5 P.M." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t8-p2",
                type: "NOTICE",
                title: "Attention customers of Metro Coffee:",
                content: `We are excited to announce that we [135] a second Metro Coffee store! As you know, we recently
expanded our offerings to include baked goods as well as coffee. As a result, our [136] has
increased significantly. To keep up with demand, we decided that a second store was necessary.
[137] Our new space is substantially [138] but offers the same wide selection of items. Make
sure to stop by and check out our new location today!`,
                questions: [
                    {
                        id: "135",
                        text: "(A) will open\n(B) can open\n(C) are opening\n(D) have opened",
                        options: [
                            { label: "A", text: "will open" },
                            { label: "B", text: "can open" },
                            { label: "C", text: "are opening" },
                            { label: "D", text: "have opened" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "136",
                        text: "(A) debt\n(B) payroll\n(C) business\n(D) investment",
                        options: [
                            { label: "A", text: "debt" },
                            { label: "B", text: "payroll" },
                            { label: "C", text: "business" },
                            { label: "D", text: "investment" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "137",
                        text: "(A) Metro Coffee has been a part of the\ncommunity for nine years.\n(B) We roast our coffee beans right here\non-site.\n(C) Many people enjoy eating a pastry\nwhile drinking a cup of coffee.\n(D) It is located two miles away in the\nhistoric district.",
                        options: [
                            { label: "A", text: "Metro Coffee has been a part of the\ncommunity for nine years." },
                            { label: "B", text: "We roast our coffee beans right here\non-site." },
                            { label: "C", text: "Many people enjoy eating a pastry\nwhile drinking a cup of coffee." },
                            { label: "D", text: "It is located two miles away in the\nhistoric district." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "138",
                        text: "(A) large\n(B) larger\n(C) largely\n(D) largest",
                        options: [
                            { label: "A", text: "large" },
                            { label: "B", text: "larger" },
                            { label: "C", text: "largely" },
                            { label: "D", text: "largest" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t8-p3",
                type: "MEMO",
                title: "Global Shipping Partners Conference",
                content: `To: All Ferrese Hotel Employees
From: Sergio Prieto, Hotel Manager
Date: Monday, July 4
Subject: Global Shipping Partners Conference

The Ferrese Hotel will be hosting the Global Shipping Partners Conference next week, from
Tuesday to Sunday. [139], management expects to see many more customers in the hotel's
restaurants and gift shops. [140]. I will be hiring temporary staff to ensure that [141] can meet
these increased demands. Please take the time to help them learn our  when they are
here. Doing so will ensure that all operations run smoothly while the conference is taking place.
[142]`,
                questions: [
                    {
                        id: "139",
                        text: "(A) If not\n(B) After all\n(C) Therefore\n(D) In the meantime",
                        options: [
                            { label: "A", text: "If not" },
                            { label: "B", text: "After all" },
                            { label: "C", text: "Therefore" },
                            { label: "D", text: "In the meantime" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "(A) Restaurant renovations are almost\ncompleted.\n(B) Conference registration forms have\nbeen posted online.\n(C) Applications will be reviewed later\nthis week.\n(D) The business center will also be\nbusier than usual.",
                        options: [
                            { label: "A", text: "Restaurant renovations are almost\ncompleted." },
                            { label: "B", text: "Conference registration forms have\nbeen posted online." },
                            { label: "C", text: "Applications will be reviewed later\nthis week." },
                            { label: "D", text: "The business center will also be\nbusier than usual." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "141",
                        text: "(A) it\n(B) we\n(C) both\n(D) something",
                        options: [
                            { label: "A", text: "it" },
                            { label: "B", text: "we" },
                            { label: "C", text: "both" },
                            { label: "D", text: "something" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "142",
                        text: "(A) lines\n(B) steps\n(C) names\n(D) routines",
                        options: [
                            { label: "A", text: "lines" },
                            { label: "B", text: "steps" },
                            { label: "C", text: "names" },
                            { label: "D", text: "routines" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t8-p4",
                type: "ARTICLE",
                content: `DALLAS (July 28)—Zura Technology Solutions (ZTS) announced today that it has completed the
[143] of an office building located at 425 Van Kirk Street here in Dallas. The building, most
recently the headquarters of Brickhall Insurance, will serve as ZTS's [144] base of operations.
The company's relocation from Fort Worth is expected to be complete by the end of the calendar
year. [145] "Our decision to acquire the building reflects ZTS's ongoing commitment to the
Dallas area and will enable us to better serve our customers, business partners, and
stakeholders," said Gloria Rubirosa, ZTS's CEO. "From our new home in Dallas, we
[146] to work hard to meet the needs of each and every one of our customers around the world.”`,
                questions: [
                    {
                        id: "143",
                        text: "(A) construction\n(B) cleaning\n(C) inspection\n(D) purchase",
                        options: [
                            { label: "A", text: "construction" },
                            { label: "B", text: "cleaning" },
                            { label: "C", text: "inspection" },
                            { label: "D", text: "purchase" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "144",
                        text: "(A) voluntary\n(B) primary\n(C) short-term\n(D) occasional",
                        options: [
                            { label: "A", text: "voluntary" },
                            { label: "B", text: "primary" },
                            { label: "C", text: "short-term" },
                            { label: "D", text: "occasional" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "145",
                        text: "(A) ZTS's leadership team sees the\nmove as strategic.\n(B) For example, it provides a range of\nservices to small businesses.\n(C) There are only a few available sites in\nthe Main Street District.\n(D) Over 15,000 people are employed by\nZTS worldwide.",
                        options: [
                            { label: "A", text: "ZTS's leadership team sees the\nmove as strategic." },
                            { label: "B", text: "For example, it provides a range of\nservices to small businesses." },
                            { label: "C", text: "There are only a few available sites in\nthe Main Street District." },
                            { label: "D", text: "Over 15,000 people are employed by\nZTS worldwide." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "146",
                        text: "(A) continued\n(B) continuing\n(C) would have continued\n(D) will continue",
                        options: [
                            { label: "A", text: "continued" },
                            { label: "B", text: "continuing" },
                            { label: "C", text: "would have continued" },
                            { label: "D", text: "will continue" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },

    {
        testId: 9,
        title: "ETS TOEIC Vol 4 - Test 9",
        passages: [
            {
                id: "p6-t9-p1",
                type: "NOTICE",
                title: "Sky Air First Pass",
                content: `Thank you for flying Sky Air First with [131]. We hope you enjoy your flight.
You can take advantage of our best prices on future flights purchasing a Sky Air First Pass.
[132]
For a annual fee, you will get special discounts, seat upgrades, and the use of our exclusive
[133] travelers' lounge. [134] Ask your flight attendant for more information and an application.`,
                questions: [
                    {
                        id: "131",
                        text: "",
                        options: [
                            { label: "A", text: "them" },
                            { label: "B", text: "theirs" },
                            { label: "C", text: "us" },
                            { label: "D", text: "ours" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "132",
                        text: "",
                        options: [
                            { label: "A", text: "at" },
                            { label: "B", text: "on" },
                            { label: "C", text: "by" },
                            { label: "D", text: "to" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "133",
                        text: "",
                        options: [
                            { label: "A", text: "lowers" },
                            { label: "B", text: "low" },
                            { label: "C", text: "lowly" },
                            { label: "D", text: "lowest" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "134",
                        text: "",
                        options: [
                            { label: "A", text: "We hope you will fly Sky Air First again." },
                            { label: "B", text: "You will also get priority boarding." },
                            { label: "C", text: "Please find your seat immediately." },
                            { label: "D", text: "The flight delay will be minimal." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t9-p2",
                type: "ARTICLE",
                title: "CJOK Radio Show Welcomes New Staff",
                content: `QUEENSVILLE (7 July) —Local radio station CJOK announced Katherine Dees as the new
producer of the popular show Out and About in Queensville. Ms. Dees is now
[135] for
coordinating schedules, booking guests for the show, and managing media relations.
 , the station hired sound editor Virginia Thacker and production assistant Reggie Dietrich
[136]
to support Ms. Dees in her new role. [137]
Out and About in Queensville, which has been airing for 30 years, is performed live weekly
from September to May in the Orpheum Theater in downtown Queensville. The show
musical guests, writers, and storytellers for an hour of weekly programming.
[138]`,
                questions: [
                    {
                        id: "135",
                        text: "",
                        options: [
                            { label: "A", text: "responsive" },
                            { label: "B", text: "responsibly" },
                            { label: "C", text: "responding" },
                            { label: "D", text: "responsible" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "136",
                        text: "",
                        options: [
                            { label: "A", text: "Even so" },
                            { label: "B", text: "In fact" },
                            { label: "C", text: "For example" },
                            { label: "D", text: "In addition" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "137",
                        text: "",
                        options: [
                            { label: "A", text: "CJOK was founded 60 years ago." },
                            { label: "B", text: "These recent hires follow the retirement\nof producer Ed Evans." },
                            { label: "C", text: "Ms. Dees was born and raised in\nCedarburg." },
                            { label: "D", text: "CJOK has more than one popular show\nin its lineup." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "138",
                        text: "",
                        options: [
                            { label: "A", text: "gives" },
                            { label: "B", text: "marks" },
                            { label: "C", text: "features" },
                            { label: "D", text: "holds" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    }
                ]
            },
            {
                id: "p6-t9-p3",
                type: "EMAIL",
                title: "Order number 71280",
                content: `To: Sandra Barga <sbarga97@hjmail.ca>
From: Artie Romanche <service@northwestbags.ca>
Date: 12 July
Subject: Order number 71280

Dear Ms. Barga:

We received your recent order asking for your name to be stitched on a Klamath Kool handbag.

We are, [139] eager to complete your order. Unfortunately, our seamstress who fulfills
personalisation requirements will be on leave for the next three days. We wanted to let you know
that her will cause a delay in shipping your bag.
[140]
For the wait, we would like to offer you a 10 percent discount on your current order. Or, if
[141]
you prefer, you can opt for free personalisation on your next order. . At Northwest Bags,
[142]
we strive for 100 percent customer satisfaction!

Sincerely,
Artie Romanche
Customer Service Representative, Northwest Bags`,
                questions: [
                    {
                        id: "139",
                        text: "",
                        options: [
                            { label: "A", text: "still" },
                            { label: "B", text: "besides" },
                            { label: "C", text: "of course" },
                            { label: "D", text: "nevertheless" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "",
                        options: [
                            { label: "A", text: "absence" },
                            { label: "B", text: "arrival" },
                            { label: "C", text: "request" },
                            { label: "D", text: "investigation" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "141",
                        text: "",
                        options: [
                            { label: "A", text: "Compensated" },
                            { label: "B", text: "To compensate" },
                            { label: "C", text: "For compensating" },
                            { label: "D", text: "It is compensation" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "142",
                        text: "",
                        options: [
                            { label: "A", text: "The choice is yours." },
                            { label: "B", text: "We appreciate your review." },
                            { label: "C", text: "The bag will look great with your initials\non it." },
                            { label: "D", text: "We are the only local retailer offering\ncustom services." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t9-p4",
                type: "ARTICLE",
                title: "Sehelec Announces Wind-Solar Hybrid Project",
                content: `MUMBAI (15 March)-Sehelec Ltd. announced it will begin construction on a 500-megawatt
wind-solar hybrid power outside of Bangalore, India. Sehelec expects to begin
[143] [144]
operations within 24 months, and it will sell the power to Indian energy giant Novaseon Industries.
"Our contract with Novaseon to provide power moves us closer to our long-term corporate
[145]
goal," said Sumit Varma, CEO of Sehelec. "Our objective is to achieve a capacity of 20 gigawatts
within five years. Doing so will make us one of India's largest green power companies. And that,
in turn, will help the country its carbon-reduction target."
[146]`,
                questions: [
                    {
                        id: "143",
                        text: "",
                        options: [
                            { label: "A", text: "plant" },
                            { label: "B", text: "planter" },
                            { label: "C", text: "planting" },
                            { label: "D", text: "planted" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "144",
                        text: "",
                        options: [
                            { label: "A", text: "Windy conditions can cause damage to\ntall buildings." },
                            { label: "B", text: "The facility will consist of a mix of solar\npanels and wind turbines." },
                            { label: "C", text: "Electric vehicles have fewer emissions\nthan other vehicles have." },
                            { label: "D", text: "The pace of upgrades to India's power\ngrid slowed slightly this year." }
                        ],
                        correctAnswer: "B",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "145",
                        text: "",
                        options: [
                            { label: "A", text: "renew" },
                            { label: "B", text: "renewers" },
                            { label: "C", text: "renewable" },
                            { label: "D", text: "to renew" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "146",
                        text: "",
                        options: [
                            { label: "A", text: "understand" },
                            { label: "B", text: "explain" },
                            { label: "C", text: "block" },
                            { label: "D", text: "reach" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },

    {
        testId: 10,
        title: "ETS TOEIC Vol 4 - Test 10",
        passages: [
            {
                id: "p6-t10-p1",
                type: "ARTICLE",
                title: "Kray Villa Museum To Celebrate Grand Opening",
                content: `DEERFIELD (May 2)—The official opening of the Kray Villa Museum will take place on May 29 at
10 A.M. To mark the occasion, various festivities will be held throughout the day. Visit
[131].
www.krayvillamuseum.org for details.

The museum is housed in the imposing structure [132]. was home to the once-influential Kray
family beginning in the late 1800s. Having laid abandoned for the last 30 years, the property was
purchased 2 years ago by the Deerfield Historical Society. Subsequently, the gardens were
restored to appear as they did when the first generation of Krays moved into the villa.
[133]. , furnishings of the kind most likely used by the family are on display.

During the museum's opening festivities, a live band [134]. music that was popular in the late
nineteenth century.`,
                questions: [
                    {
                        id: "131",
                        text: "(A) This year's celebrations are part of a\nweeklong national campaign.\n(B) Results of the survey will be presented at\n6:00 Ρ.Μ.\n(C) Programs will be distributed at the next\nmeeting.\n(D) Admission is free, but a donation is\nsuggested.",
                        options: [
                            { label: "A", text: "This year's celebrations are part of a\nweeklong national campaign." },
                            { label: "B", text: "Results of the survey will be presented at\n6:00 Ρ.Μ." },
                            { label: "C", text: "Programs will be distributed at the next\nmeeting." },
                            { label: "D", text: "Admission is free, but a donation is\nsuggested." }
                        ],
                        correctAnswer: "D",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "132",
                        text: "(A) such\n(B) that\n(C) what\n(D) all",
                        options: [
                            { label: "A", text: "such" },
                            { label: "B", text: "that" },
                            { label: "C", text: "what" },
                            { label: "D", text: "all" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "133",
                        text: "(A) Conversely\n(B) Additionally\n(C) In the meantime\n(D) To this end",
                        options: [
                            { label: "A", text: "Conversely" },
                            { label: "B", text: "Additionally" },
                            { label: "C", text: "In the meantime" },
                            { label: "D", text: "To this end" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "134",
                        text: "(A) will perform\n(B) had to perform\n(C) was performing\n(D) could have performed",
                        options: [
                            { label: "A", text: "will perform" },
                            { label: "B", text: "had to perform" },
                            { label: "C", text: "was performing" },
                            { label: "D", text: "could have performed" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t10-p2",
                type: "EMAIL",
                title: "Network alert",
                content: `To: All employees
From: Cecil Radu, Information Technology Manager
Date: April 8
Re: Network alert

We are experiencing some problems with our local network. Some of the affected services
include the [135]. company Web site and the payroll database. We have also received
information network data becoming corrupted and files not saving properly. Therefore, to
ensure that you do not lose any work, please avoid using the network this morning while my
[136].
team addresses these [137]. We anticipate that the systems will be fully functional by this
afternoon. [138].`,
                questions: [
                    {
                        id: "135",
                        text: "(A) internalizing\n(B) internalize\n(C) internally\n(D) internal",
                        options: [
                            { label: "A", text: "internalizing" },
                            { label: "B", text: "internalize" },
                            { label: "C", text: "internally" },
                            { label: "D", text: "internal" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "136",
                        text: "(A) as\n(B) in\n(C) about\n(D) with",
                        options: [
                            { label: "A", text: "as" },
                            { label: "B", text: "in" },
                            { label: "C", text: "about" },
                            { label: "D", text: "with" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "137",
                        text: "(A) issues\n(B) clients\n(C) articles\n(D) proposals",
                        options: [
                            { label: "A", text: "issues" },
                            { label: "B", text: "clients" },
                            { label: "C", text: "articles" },
                            { label: "D", text: "proposals" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "138",
                        text: "(A) The network server will be expensive.\n(B) Your computer may be corrupted.\n(C) Thank you for your patience.\n(D) Contact the IT help desk.",
                        options: [
                            { label: "A", text: "The network server will be expensive." },
                            { label: "B", text: "Your computer may be corrupted." },
                            { label: "C", text: "Thank you for your patience." },
                            { label: "D", text: "Contact the IT help desk." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    }
                ]
            },
            {
                id: "p6-t10-p3",
                type: "NOTICE",
                content: `April 2

Dear TP&G Customer,

Takoradi Power & Gas (TP&G) is committed to providing every customer with dependable
electricity service. To this end, we need to make some improvements to our A maintenance
[139].
crew will be upgrading transformers in your neighbourhood on or about 22 April, beginning at
10 Α.Μ. [140]. , we will need to shut off the electricity to residences in your area from approximately
10 Α.Μ. to 1 P.M. on that day. We hope that by [141]. this notice, any disruptions caused by
the planned outage will be minimized.
[142].`,
                questions: [
                    {
                        id: "139",
                        text: "(A) office\n(B) system\n(C) vehicles\n(D) records",
                        options: [
                            { label: "A", text: "office" },
                            { label: "B", text: "system" },
                            { label: "C", text: "vehicles" },
                            { label: "D", text: "records" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "140",
                        text: "(A) If not\n(B) Nonetheless\n(C) Unfortunately\n(D) On the other hand",
                        options: [
                            { label: "A", text: "If not" },
                            { label: "B", text: "Nonetheless" },
                            { label: "C", text: "Unfortunately" },
                            { label: "D", text: "On the other hand" }
                        ],
                        correctAnswer: "C",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "141",
                        text: "(A) We apologize for the temporary\ninconvenience.\n(B) We respond to most service requests\nwithin 24 hours.\n(C) Other companies specialize in lighting\ninstallations.\n(D) Here are some tips for reducing your\nenergy bill.",
                        options: [
                            { label: "A", text: "We apologize for the temporary\ninconvenience." },
                            { label: "B", text: "We respond to most service requests\nwithin 24 hours." },
                            { label: "C", text: "Other companies specialize in lighting\ninstallations." },
                            { label: "D", text: "Here are some tips for reducing your\nenergy bill." }
                        ],
                        correctAnswer: "A",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "142",
                        text: "(A) sent\n(B) to send\n(C) will send\n(D) sending",
                        options: [
                            { label: "A", text: "sent" },
                            { label: "B", text: "to send" },
                            { label: "C", text: "will send" },
                            { label: "D", text: "sending" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    }
                ]
            },
            {
                id: "p6-t10-p4",
                type: "EMAIL",
                title: "Invitation to patient portal",
                content: `To: hanna.kalita@netmail.co.uk
From: patientoutreach@ebmp.co.uk
Date: 12 June
Subject: Invitation to patient portal

Dear Ms. Kalita,

East Burberry Medical Practice has recently rolled out its patient portal, Burmed Connect. This
service [143]. to help you manage your healthcare at your convenience. You are invited to create
an account to access the portal. Once enrolled, you will be able to book appointments with our
doctors as well as view your medical records and request prescriptions. [144]. , you can use
Burmed Connect to send messages to your doctor. Only you and your doctor will be able to see
any messages exchanged between the two of you.
[145].

To create an account, start by going to www.eastburberrymedicalpractice/patient-portal.co.uk. If
you experience any difficulties with the process, please call 20 5550 0169.
[146].

Sincerely,
Emma Richardson, Patient Outreach Coordinator`,
                questions: [
                    {
                        id: "143",
                        text: "(A) has been intended\n(B) will be intended\n(C) was intended\n(D) is intended",
                        options: [
                            { label: "A", text: "has been intended" },
                            { label: "B", text: "will be intended" },
                            { label: "C", text: "was intended" },
                            { label: "D", text: "is intended" }
                        ],
                        correctAnswer: "D",
                        classification: "P6_GRAMMAR"
                    },
                    {
                        id: "144",
                        text: "(A) Furthermore\n(B) Instead\n(C) However\n(D) Otherwise",
                        options: [
                            { label: "A", text: "Furthermore" },
                            { label: "B", text: "Instead" },
                            { label: "C", text: "However" },
                            { label: "D", text: "Otherwise" }
                        ],
                        correctAnswer: "A",
                        classification: "P6_VOCABULARY"
                    },
                    {
                        id: "145",
                        text: "(A) Our previous portal will no longer be\nupdated.\n(B) The health app can be downloaded from\nour Web site.\n(C) Protecting your privacy is a responsibility\nwe take seriously.\n(D) You will be locked out of your account\nafter a third failed attempt.",
                        options: [
                            { label: "A", text: "Our previous portal will no longer be\nupdated." },
                            { label: "B", text: "The health app can be downloaded from\nour Web site." },
                            { label: "C", text: "Protecting your privacy is a responsibility\nwe take seriously." },
                            { label: "D", text: "You will be locked out of your account\nafter a third failed attempt." }
                        ],
                        correctAnswer: "C",
                        classification: "P6_SENTENCE_INSERT"
                    },
                    {
                        id: "146",
                        text: "(A) selection\n(B) registration\n(C) invention\n(D) deletion",
                        options: [
                            { label: "A", text: "selection" },
                            { label: "B", text: "registration" },
                            { label: "C", text: "invention" },
                            { label: "D", text: "deletion" }
                        ],
                        correctAnswer: "B",
                        classification: "P6_VOCABULARY"
                    }
                ]
            }
        ]
    }
];
