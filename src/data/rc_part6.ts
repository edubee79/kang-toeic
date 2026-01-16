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
    guidance?: string;
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "ADVERTISEMENT" | "ANNOUNCEMENT" | "INTRODUCTION" | "WEB PAGE" | "PRESS RELEASE" | "INFORMATION" | "INSTRUCTIONS" | "POLICY";
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
        "testId": 1,
        "title": "ETS TOEIC Vol 4 - Test 1",
        "passages": [
            {
                "id": "p6-t1-p1",
                "type": "ARTICLE",
                "guidance": "Questions 131-134 refer to the following announcement.",
                "content": "Come to the Maxley Heights Center for Horticulture and learn how to create a beautiful, eco-friendly garden for your home or business. [131] We will teach you how to plant a rain garden, which is simply a shallow sunken garden [132] a special soil mix to filter pollutants from rainwater flowing from nearby roads and rooftops. These gardens can be landscaped with native plants and flowers. [133] rain gardens are always beneficial to the local environment. Among other things, [134] improve drainage and protect rivers and streams.\n\nTo register, visit www.maxley-horticulture.org.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Refer to the marked sentence in the passage.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Children of all ages will enjoy the new exhibits."
                            },
                            {
                                "label": "B",
                                "text": "Learn about rainfall patterns across the region."
                            },
                            {
                                "label": "C",
                                "text": "Build a set of simple patio furniture with easy-to-acquire materials."
                            },
                            {
                                "label": "D",
                                "text": "Next Saturday at 4 P.M., we are hosting a free workshop for the public."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "to use"
                            },
                            {
                                "label": "B",
                                "text": "used to"
                            },
                            {
                                "label": "C",
                                "text": "by using"
                            },
                            {
                                "label": "D",
                                "text": "that uses"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Best of all"
                            },
                            {
                                "label": "B",
                                "text": "For example"
                            },
                            {
                                "label": "C",
                                "text": "In any event"
                            },
                            {
                                "label": "D",
                                "text": "As a matter of fact"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "we"
                            },
                            {
                                "label": "B",
                                "text": "they"
                            },
                            {
                                "label": "C",
                                "text": "both"
                            },
                            {
                                "label": "D",
                                "text": "yours"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t1-p2",
                "type": "LETTER",
                "guidance": "Questions 135-138 refer to the following letter.",
                "content": "31 July\nAkwasi Dombo\nFourth Avenue\nGA 105\nAccra, Ghana\n\nDear Mr. Dombo,\n\nThank you for your support in helping me to plan the opening gala for Tokyo's fashion week. The event was a huge success, and I was honored to work with you. I know that our attendees follow your work closely, and they loved the designs you contributed for this event.\n\nYour designs received a lot of  on social media. Shows like this will keep Tokyo on the map as a premier fashion centre. I realize that the multiple delays made the planning no easy task. The auction our Young Designers Award program is coming up soon and I look forward to working with you on that as well.\n\nSincerely,\nAsahi Ishioka\nDirector, Japanese Guild of Fashion Designers",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "amazed"
                            },
                            {
                                "label": "B",
                                "text": "amazement"
                            },
                            {
                                "label": "C",
                                "text": "amazing"
                            },
                            {
                                "label": "D",
                                "text": "amazingly"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "attention"
                            },
                            {
                                "label": "B",
                                "text": "proposals"
                            },
                            {
                                "label": "C",
                                "text": "innovation"
                            },
                            {
                                "label": "D",
                                "text": "criticism"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Refer to the marked sentence in the passage.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Several other events have gone surprisingly well."
                            },
                            {
                                "label": "B",
                                "text": "Thank you also for your flexibility in planning the event."
                            },
                            {
                                "label": "C",
                                "text": "Please stop by our office the next time you are in the city."
                            },
                            {
                                "label": "D",
                                "text": "Tokyo is a top tourism destination for many reasons."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "will benefit"
                            },
                            {
                                "label": "B",
                                "text": "to benefit"
                            },
                            {
                                "label": "C",
                                "text": "has benefited"
                            },
                            {
                                "label": "D",
                                "text": "benefits"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t1-p3",
                "type": "EMAIL",
                "guidance": "Questions 139-142 refer to the following e-mail.",
                "content": "*E-mail*\nFrom: Patron Services <patronservices@menachinlibrary.org>\nTo: Edgar Hughes <hughese98@villachesta.com>\nSubject: Card expiration date approaching\nDate: December 3\n\nDear Mr. Hughes,\n\nPlease be advised that your Mena Chin Library card will expire one month from today.\n\nIt must be renewed if you intend to keep your membership for the coming year.[139]\nThis can be done at the information desk at any branch location.[140]\nAlthough you decide to close your account, no action is necessary. Failure to complete your renewal by the date will result in the expiration of your library privileges.[141] [142]\n\nIf you have any questions about this notice, or about general library services, you may reply directly to this e-mail.\n\nSincerely,\nPatron Services",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "It"
                            },
                            {
                                "label": "B",
                                "text": "You"
                            },
                            {
                                "label": "C",
                                "text": "Our"
                            },
                            {
                                "label": "D",
                                "text": "Each"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "140",
                        "text": "Refer to the marked sentence in the passage.",
                        "options": [
                            {
                                "label": "A",
                                "text": "To sign up for a card, visit your local"
                            },
                            {
                                "label": "B",
                                "text": "For questions about library membership,"
                            },
                            {
                                "label": "C",
                                "text": "Renewal must be completed at least one"
                            },
                            {
                                "label": "D",
                                "text": "You may opt out of this program at any"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Also"
                            },
                            {
                                "label": "B",
                                "text": "Should"
                            },
                            {
                                "label": "C",
                                "text": "Because"
                            },
                            {
                                "label": "D",
                                "text": "Although"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "specifically"
                            },
                            {
                                "label": "B",
                                "text": "specifics"
                            },
                            {
                                "label": "C",
                                "text": "specified"
                            },
                            {
                                "label": "D",
                                "text": "specificity"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t1-p4",
                "type": "LETTER",
                "guidance": "Questions 143-146 refer to the following letter.",
                "content": "April 7\nNaomi Burwell\n43 Waymire Road\nSouth Portland, ME 04109\n\nDear Ms. Burwell,\n\nI am Omar Ridha, the manager of Droplight Studio. [143] We offer a full range of photography services for real estate professionals like you. We take pride in composing interior and exterior shots that make a property look its best. Droplight Studio spares no effort in superior digital images. [144], our professional-grade equipment, lighting, and staging techniques allow us to highlight the best features of a property. And once the photo shoot is over, every image expert editing. [146] All these services come standard in every package.\n\nSincerely,\nOmar Ridha, Droplight Studio",
                "questions": [
                    {
                        "id": "143",
                        "text": "Refer to the marked sentence in the passage.",
                        "options": [
                            {
                                "label": "A",
                                "text": "I would like to introduce you to our business."
                            },
                            {
                                "label": "B",
                                "text": "Great photographs can make your property stand out."
                            },
                            {
                                "label": "C",
                                "text": "We are looking forward to your visit."
                            },
                            {
                                "label": "D",
                                "text": "It was the first studio of its kind to open in this area."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "researching"
                            },
                            {
                                "label": "B",
                                "text": "creating"
                            },
                            {
                                "label": "C",
                                "text": "purchasing"
                            },
                            {
                                "label": "D",
                                "text": "displaying"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "If not"
                            },
                            {
                                "label": "B",
                                "text": "By comparison"
                            },
                            {
                                "label": "C",
                                "text": "Otherwise"
                            },
                            {
                                "label": "D",
                                "text": "Indeed"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "receives"
                            },
                            {
                                "label": "B",
                                "text": "is receiving"
                            },
                            {
                                "label": "C",
                                "text": "had received"
                            },
                            {
                                "label": "D",
                                "text": "had to receive"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            }
        ]
    },
    {
        "testId": 2,
        "title": "ETS TOEIC Vol 4 - Test 2",
        "passages": [
            {
                "id": "p6-t2-p1",
                "type": "EMAIL",
                "guidance": "Questions 131-134 refer to the following email.",
                "content": "To: Myung-Hee Hahn\nFrom: Dellwyn Home Store\nDate: January 15\nSubject: Order update\nDear Ms. Hahn,\n\nYour [131] order of a red oak dining table and six matching chairs arrived at our store this morning.\n\nWe would now like to arrange for the delivery of the [132]. Please call us at 517-555-0188 and ask [133] to Coleman Cobb, our delivery manager. [134]\n\nCustomer Service, Dellwyn Home Store",
                "questions": [
                    {
                        "id": "131",
                        "text": "(A) specially\n(B) specialize\n(C) special\n(D) specializing",
                        "options": [
                            {
                                "label": "A",
                                "text": "specially"
                            },
                            {
                                "label": "B",
                                "text": "specialize"
                            },
                            {
                                "label": "C",
                                "text": "special"
                            },
                            {
                                "label": "D",
                                "text": "specializing"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "(A) furniture\n(B) appliances\n(C) refund\n(D) tools",
                        "options": [
                            {
                                "label": "A",
                                "text": "furniture"
                            },
                            {
                                "label": "B",
                                "text": "appliances"
                            },
                            {
                                "label": "C",
                                "text": "refund"
                            },
                            {
                                "label": "D",
                                "text": "tools"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "(A) speak\n(B) spoken\n(C) is speaking\n(D) to speak",
                        "options": [
                            {
                                "label": "A",
                                "text": "speak"
                            },
                            {
                                "label": "B",
                                "text": "spoken"
                            },
                            {
                                "label": "C",
                                "text": "is speaking"
                            },
                            {
                                "label": "D",
                                "text": "to speak"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "134",
                        "text": "(A) He can schedule a convenient time.\n(B) He began working here yesterday.\n(C) He can meet you at 11:00 A.м.\n(D) He recently moved to Dellwyn.",
                        "options": [
                            {
                                "label": "A",
                                "text": "He can schedule a convenient time."
                            },
                            {
                                "label": "B",
                                "text": "He began working here yesterday."
                            },
                            {
                                "label": "C",
                                "text": "He can meet you at 11:00 A.м."
                            },
                            {
                                "label": "D",
                                "text": "He recently moved to Dellwyn."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p2",
                "type": "ADVERTISEMENT",
                "guidance": "Questions 135-138 refer to the following advertisement.",
                "content": "Keep Cool Service Contractors can bring you peace of mind. As part of an annual contract, we will service your air-conditioning system, ensuring your [135] and comfort. This includes inspecting the system, making repairs as needed, and professionally cleaning your air ducts. [136], if necessary, we can replace your old air-conditioning system with a new, cost-efficient one.\n\nOur workers are highly qualified licensed technicians who stay up-to-date with ongoing training. [137], We promise you fair prices and professional work, [138] by our Keep Cool guarantee.\n\nCall 1-868-555-0129 for a free quote today.",
                "questions": [
                    {
                        "id": "135",
                        "text": "------ and comfort.",
                        "options": [
                            {
                                "label": "A",
                                "text": "safe"
                            },
                            {
                                "label": "B",
                                "text": "safely"
                            },
                            {
                                "label": "C",
                                "text": "safest"
                            },
                            {
                                "label": "D",
                                "text": "safety"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": ", if necessary, we can replace your old air-conditioning system with a new, cost-efficient one.",
                        "options": [
                            {
                                "label": "A",
                                "text": "On one hand"
                            },
                            {
                                "label": "B",
                                "text": "Nonetheless"
                            },
                            {
                                "label": "C",
                                "text": "Furthermore"
                            },
                            {
                                "label": "D",
                                "text": "And yet"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "We promise you fair prices and professional work,",
                        "options": [
                            {
                                "label": "A",
                                "text": "Take advantage of dozens of useful online tools."
                            },
                            {
                                "label": "B",
                                "text": "Moreover, the air conditioner you chose is very popular."
                            },
                            {
                                "label": "C",
                                "text": "Plus, they are friendly, clean, and knowledgeable."
                            },
                            {
                                "label": "D",
                                "text": "Thank you for visiting our contractor showroom."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "138",
                        "text": "by our Keep Cool guarantee.",
                        "options": [
                            {
                                "label": "A",
                                "text": "backed"
                            },
                            {
                                "label": "B",
                                "text": "backs"
                            },
                            {
                                "label": "C",
                                "text": "backing"
                            },
                            {
                                "label": "D",
                                "text": "back"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p3",
                "type": "EMAIL",
                "guidance": "Questions 139-142 refer to the following email.",
                "content": "To: All Customers\nFrom: asquires@lightidea.com\nDate: March 6\nSubject: Information\nDear Light Idea Customers,\n\nLight Idea is enacting a price increase on select energy-efficient products, effective April 17.\nSpecific product pricing will [139]. Please contact your sales representative for details and questions.\n\nThe last date for ordering at current prices is April 16. All orders after this date will follow the new price list [140]. Customers will be able to find this on our Web site [141].\n\nWe will continue to provide quality products and service to our valued customers. Thank you for your business [142].\n\nSincerely,\nArvin Squires\nHead of Sales, Light Idea",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "agree"
                            },
                            {
                                "label": "B",
                                "text": "vary"
                            },
                            {
                                "label": "C",
                                "text": "wait"
                            },
                            {
                                "label": "D",
                                "text": "decline"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "receiving"
                            },
                            {
                                "label": "B",
                                "text": "having received"
                            },
                            {
                                "label": "C",
                                "text": "received"
                            },
                            {
                                "label": "D",
                                "text": "will be received"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "The updated price list will be available on March 20."
                            },
                            {
                                "label": "B",
                                "text": "We apologize for this inconvenience."
                            },
                            {
                                "label": "C",
                                "text": "Your orders will be shipped after April 17."
                            },
                            {
                                "label": "D",
                                "text": "We are increasing prices because of rising costs."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "exceptionally"
                            },
                            {
                                "label": "B",
                                "text": "exception"
                            },
                            {
                                "label": "C",
                                "text": "exceptional"
                            },
                            {
                                "label": "D",
                                "text": "exceptionalism"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following email.",
                "content": "To: Jang-Ho Kwon <jkwon@newart.nz>\nFrom: Kenneth Okim <k.okim@okimjewelry.nz>\nSubject: Good news\nDate: 30 August\nDear Jang-Ho,\n\nThank you for the shipment last month of 80 units of your jewelry pieces. I am happy to report that they have been selling very well in my shop. My [143] love the colourful designs as well as the quality of your workmanship.\n\nI would like to increase the number of units I order from you. Would you be able to [145] my order for the September shipment?\n\nFinally, I would like to discuss the possibility of featuring your work exclusively in my store. I believe that I could reach your target audience best and that the agreement would serve [146] both very well. I look forward to hearing from you.\n\nBest regards,\nKenneth Okim\nOkim Jewelry",
                "questions": [
                    {
                        "id": "143",
                        "text": "Which of the following best completes the sentence?",
                        "options": [
                            {
                                "label": "A",
                                "text": "patients"
                            },
                            {
                                "label": "B",
                                "text": "students"
                            },
                            {
                                "label": "C",
                                "text": "customers"
                            },
                            {
                                "label": "D",
                                "text": "teammates"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Which of the following best completes the sentence?",
                        "options": [
                            {
                                "label": "A",
                                "text": "If you need more time, please let me"
                            },
                            {
                                "label": "B",
                                "text": "Unfortunately, I do not have adequate"
                            },
                            {
                                "label": "C",
                                "text": "I would like to show you some of my"
                            },
                            {
                                "label": "D",
                                "text": "The reasonable prices also make"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "Which of the following best completes the sentence?",
                        "options": [
                            {
                                "label": "A",
                                "text": "include"
                            },
                            {
                                "label": "B",
                                "text": "double"
                            },
                            {
                                "label": "C",
                                "text": "repeat"
                            },
                            {
                                "label": "D",
                                "text": "insure"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Which of the following best completes the sentence?",
                        "options": [
                            {
                                "label": "A",
                                "text": "us"
                            },
                            {
                                "label": "B",
                                "text": "you"
                            },
                            {
                                "label": "C",
                                "text": "we"
                            },
                            {
                                "label": "D",
                                "text": "these"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            }
        ]
    },
    {
        "testId": 3,
        "title": "ETS TOEIC Vol 4 - Test 3",
        "passages": [
            {
                "id": "p6-t3-p1",
                "type": "EMAIL",
                "guidance": "Questions 131-134 refer to the following email.",
                "content": "To: All Staff\nFrom: Yoreli Costa\nDate: February 15\nSubject: Florence Shawn\nHi Everyone,\n\nI have news to share about a ------- [131] in the human resources department. After nearly twenty\nyears with Cometti Creative, Florence Shawn has decided to retire from the position of director of\nhuman resources.\n\nOur current senior manager of human resources, Makoto Ichise, will replace Ms. Shawn when\nshe retires. Ms. Shawn ------- Mr. Ichise since he joined the company five years ago.\n[132]\n\nMs. Shawn's ------- day will be February 22. A retirement party will be held for her on that day\n[133]\nat 4:00 P.M. in the Terey Lobby. -------.\n[134]\n\nBest,\nYoreli Costa\nDirector of Operations, Cometti Creative",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "difference"
                            },
                            {
                                "label": "B",
                                "text": "strategy"
                            },
                            {
                                "label": "C",
                                "text": "change"
                            },
                            {
                                "label": "D",
                                "text": "practice"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "mentors"
                            },
                            {
                                "label": "B",
                                "text": "is mentoring"
                            },
                            {
                                "label": "C",
                                "text": "will mentor"
                            },
                            {
                                "label": "D",
                                "text": "has been mentoring"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "last"
                            },
                            {
                                "label": "B",
                                "text": "original"
                            },
                            {
                                "label": "C",
                                "text": "flexible"
                            },
                            {
                                "label": "D",
                                "text": "alternate"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Cometti Creative will hire a replacement"
                            },
                            {
                                "label": "B",
                                "text": "We hope that you can all attend to wish"
                            },
                            {
                                "label": "C",
                                "text": "Ms. Shawn was the first director of human"
                            },
                            {
                                "label": "D",
                                "text": "The first project will be the creation of a"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t3-p2",
                "type": "ADVERTISEMENT",
                "guidance": "Questions 135-138 refer to the following advertisement.",
                "title": "Lovitt Real Estate",
                "content": "Lovitt Real Estate\nHelping Manitoba Families Find their Dream Homes\n\nManuel Lovitt, [135] of Lovitt Real Estate, has been selling real estate for over 17 years. Mr. Lovitt and his award-winning team [136] in homes for families in the Winnipeg, Brandon, and Dauphin areas. They know about the schools, parks, services, transportation, and activities that enhance family life in the area where you want to reside. [137].\n\nContact Lovitt Real Estate today and let the team guide you [138] the home of your dreams.\n\nThey will listen to your needs, negotiate on your behalf, and get you the best home for your hard-earned money.\n\nCall 431-555-0168 to speak to an agent or visit www.lovittrealestate.ca for more information.",
                "questions": [
                    {
                        "id": "135",
                        "text": "135. (A) own\n(B) owned\n(C) owner\n(D) owning",
                        "options": [
                            {
                                "label": "A",
                                "text": "own"
                            },
                            {
                                "label": "B",
                                "text": "owned"
                            },
                            {
                                "label": "C",
                                "text": "owner"
                            },
                            {
                                "label": "D",
                                "text": "owning"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "136. (A) practice\n(B) specialize\n(C) report\n(D) purchase",
                        "options": [
                            {
                                "label": "A",
                                "text": "practice"
                            },
                            {
                                "label": "B",
                                "text": "specialize"
                            },
                            {
                                "label": "C",
                                "text": "report"
                            },
                            {
                                "label": "D",
                                "text": "purchase"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "137. (A) They can arrange transportation for your\nlocal elementary school.\n(B) That is because they live in the\ncommunities they serve.\n(C) They will be closed for the summer but\nwill be back soon.\n(D) Therefore, they can help you with all\nyour banking needs.",
                        "options": [
                            {
                                "label": "A",
                                "text": "They can arrange transportation for your"
                            },
                            {
                                "label": "B",
                                "text": "That is because they live in the"
                            },
                            {
                                "label": "C",
                                "text": "They will be closed for the summer but"
                            },
                            {
                                "label": "D",
                                "text": "Therefore, they can help you with all"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "138",
                        "text": "138. (A) toward\n(B) fixing\n(C) because\n(D) along",
                        "options": [
                            {
                                "label": "A",
                                "text": "toward"
                            },
                            {
                                "label": "B",
                                "text": "fixing"
                            },
                            {
                                "label": "C",
                                "text": "because"
                            },
                            {
                                "label": "D",
                                "text": "along"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t3-p3",
                "type": "ARTICLE",
                "guidance": "Questions 139-142 refer to the following article.",
                "content": "Welcome to \"Distributing Your Savings.\" This slide [139] is the third of a twelve-segment educational series called \"Preparing for Retirement.\"\n\nThis series provides only [140] advice. It should not replace the guidance of your investment planner. The series has been developed as background material to help you ask key questions when [141] with your investment planner. We hope you find this information helpful.\n\nSwainson-Gray Investments [142]",
                "questions": [
                    {
                        "id": "139",
                        "text": "(A) presenting\n(B) presents\n(C) presentation\n(D) presented",
                        "options": [
                            {
                                "label": "A",
                                "text": "presenting"
                            },
                            {
                                "label": "B",
                                "text": "presents"
                            },
                            {
                                "label": "C",
                                "text": "presentation"
                            },
                            {
                                "label": "D",
                                "text": "presented"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "140",
                        "text": "(A) You are encouraged to visit our office\nfor a free portfolio review.\n(B) The series is designed to help you\nmake informed financial decisions.\n(C) Please fill out the paperwork before\nyour appointment.\n(D) Your responses will help us serve you\nbetter in the future.",
                        "options": [
                            {
                                "label": "A",
                                "text": "You are encouraged to visit our office"
                            },
                            {
                                "label": "B",
                                "text": "The series is designed to help you"
                            },
                            {
                                "label": "C",
                                "text": "Please fill out the paperwork before"
                            },
                            {
                                "label": "D",
                                "text": "Your responses will help us serve you"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "(A) regional\n(B) expensive\n(C) supplemental\n(D) playful",
                        "options": [
                            {
                                "label": "A",
                                "text": "regional"
                            },
                            {
                                "label": "B",
                                "text": "expensive"
                            },
                            {
                                "label": "C",
                                "text": "supplemental"
                            },
                            {
                                "label": "D",
                                "text": "playful"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "142",
                        "text": "(A) consulting\n(B) prescribing\n(C) listing\n(D) following",
                        "options": [
                            {
                                "label": "A",
                                "text": "consulting"
                            },
                            {
                                "label": "B",
                                "text": "prescribing"
                            },
                            {
                                "label": "C",
                                "text": "listing"
                            },
                            {
                                "label": "D",
                                "text": "following"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t3-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following email.",
                "content": "To: Dana Paulwell\nFrom: Silas Laveau\nDate: August 22\nSubject: My input\nAttachment: Article\nDear Dr. Paulwell,\n\nThis message is in response to yesterday's staff meeting, particularly the discussion on how certain aspects of the clinic may affect our work and mission. [143]\n\nCurrently, the vending machines in the hall outside our waiting room are stocked with sugary and salty products such as soft drinks and chips. As a health care provider, we [144] beverages and snacks that show our commitment to wellness. [145] , our mission is focused on good health.\n\nI have attached an article about actions that medical centers like ours are taking to improve their hospitality stations. I hope you find it [146] It details some easy and cost-effective changes we could consider.\n\nKind regards,\nSilas Laveau",
                "questions": [
                    {
                        "id": "143",
                        "text": "(A) I thought it went on longer than was\nnecessary.\n(B) I wish we had been informed about it\nsooner.\n(C) I would like to make a suggestion on\nthis topic.\n(D) I would be honored to lead a\nfollow-up session.",
                        "options": [
                            {
                                "label": "A",
                                "text": "I thought it went on longer than was"
                            },
                            {
                                "label": "B",
                                "text": "I wish we had been informed about it"
                            },
                            {
                                "label": "C",
                                "text": "I would like to make a suggestion on"
                            },
                            {
                                "label": "D",
                                "text": "I would be honored to lead a"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "(A) will offer\n(B) have offered\n(C) were offering\n(D) should be offering",
                        "options": [
                            {
                                "label": "A",
                                "text": "will offer"
                            },
                            {
                                "label": "B",
                                "text": "have offered"
                            },
                            {
                                "label": "C",
                                "text": "were offering"
                            },
                            {
                                "label": "D",
                                "text": "should be offering"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "(A) After all\n(B) By the way\n(C) In the meantime\n(D) On the other hand",
                        "options": [
                            {
                                "label": "A",
                                "text": "After all"
                            },
                            {
                                "label": "B",
                                "text": "By the way"
                            },
                            {
                                "label": "C",
                                "text": "In the meantime"
                            },
                            {
                                "label": "D",
                                "text": "On the other hand"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "(A) useful\n(B) eventful\n(C) profitable\n(D) comfortable",
                        "options": [
                            {
                                "label": "A",
                                "text": "useful"
                            },
                            {
                                "label": "B",
                                "text": "eventful"
                            },
                            {
                                "label": "C",
                                "text": "profitable"
                            },
                            {
                                "label": "D",
                                "text": "comfortable"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            }
        ]
    },
    {
        "testId": 5,
        "title": "ETS TOEIC Vol 4 - Test 5",
        "passages": [
            {
                "id": "p6-t5-p1",
                "type": "ARTICLE",
                "guidance": "Questions 131-134 refer to the following article.",
                "title": "Grocery Chain to Host Event",
                "content": "LEIGHTON (October 8)-Ohale Foods, one of the region's largest supermarket chains, is seeking to fill almost 100 open positions. For that reason, the company is holding a [131] event on October 20. Job opportunities exist at all fourteen of Ohale's current stores. [132] Ohale is seeking employees for its new Westside location, which is still under construction. [133] .\n\nThose who [134] the event should bring copies of their résumé to the Grand Ballroom of the Palace Suites Hotel between 10 A.M. and 7 P.M. No appointment is required.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "manufacturing"
                            },
                            {
                                "label": "B",
                                "text": "hiring"
                            },
                            {
                                "label": "C",
                                "text": "political"
                            },
                            {
                                "label": "D",
                                "text": "sporting"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "If not"
                            },
                            {
                                "label": "B",
                                "text": "After all"
                            },
                            {
                                "label": "C",
                                "text": "Additionally"
                            },
                            {
                                "label": "D",
                                "text": "For example"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "133",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Its grand opening is scheduled for mid-November."
                            },
                            {
                                "label": "B",
                                "text": "Most applicants had prior experience."
                            },
                            {
                                "label": "C",
                                "text": "Its appointment of Linda Okumu as its CEO has surprised analysts."
                            },
                            {
                                "label": "D",
                                "text": "Local competitors cannot match its prices."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "attending"
                            },
                            {
                                "label": "B",
                                "text": "to attend"
                            },
                            {
                                "label": "C",
                                "text": "attended"
                            },
                            {
                                "label": "D",
                                "text": "are attending"
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t5-p2",
                "type": "INSTRUCTIONS",
                "guidance": "Questions 135-138 refer to the following instructions.",
                "content": "Thank you for your purchase of an Ajaz Water Filter Pitcher. It is a wonderful solution for water that tastes great! To improve the effectiveness of the Ajaz Water Filter Pitcher, we [135] priming the filter before the first use.\n\nThen screw the filter clockwise into the lid of the pitcher until it fits [136] .\n\nAs you use the pitcher, remember that [137] water flow is a signal that the filter is becoming clogged and will need to be replaced soon. [138]",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "tried"
                            },
                            {
                                "label": "B",
                                "text": "recommend"
                            },
                            {
                                "label": "C",
                                "text": "consider"
                            },
                            {
                                "label": "D",
                                "text": "started"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Our filtration system will be redesigned within the next year."
                            },
                            {
                                "label": "B",
                                "text": "Water use may be reduced by running your dishwasher less frequently."
                            },
                            {
                                "label": "C",
                                "text": "To do this, run cool tap water through the filter for three minutes."
                            },
                            {
                                "label": "D",
                                "text": "There are 150 liters of water in the main storage tank at all times."
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "extremely"
                            },
                            {
                                "label": "B",
                                "text": "highly"
                            },
                            {
                                "label": "C",
                                "text": "tightly"
                            },
                            {
                                "label": "D",
                                "text": "steadily"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "diminished"
                            },
                            {
                                "label": "B",
                                "text": "diminishes"
                            },
                            {
                                "label": "C",
                                "text": "diminish"
                            },
                            {
                                "label": "D",
                                "text": "diminishable"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t5-p3",
                "type": "POLICY",
                "guidance": "Questions 139-142 refer to the following policy.",
                "title": "Returning merchandise",
                "content": "Abney Home Products is committed to providing outstanding service, and we guarantee the [139] of all the products in our catalog. If you are not satisfied with a purchase, call our customer service line at 339-555-0177 to request a return authorization code. The service agent [140] you for the invoice number from the package insert. [141] Please be aware that Abney Home Products is not [142] for postage on merchandise returns.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "condition"
                            },
                            {
                                "label": "B",
                                "text": "object"
                            },
                            {
                                "label": "C",
                                "text": "explanation"
                            },
                            {
                                "label": "D",
                                "text": "preview"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "asked"
                            },
                            {
                                "label": "B",
                                "text": "is asking"
                            },
                            {
                                "label": "C",
                                "text": "has asked"
                            },
                            {
                                "label": "D",
                                "text": "will ask"
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Our employees have software training and are skilled at resolving problems."
                            },
                            {
                                "label": "B",
                                "text": "To cancel a furniture delivery, please call within 24 hours of ordering."
                            },
                            {
                                "label": "C",
                                "text": "When you send back the product, be sure to include the authorization code."
                            },
                            {
                                "label": "D",
                                "text": "The catalog has sections for kitchen goods, lighting, appliances, and more."
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "responsibly"
                            },
                            {
                                "label": "B",
                                "text": "responsible"
                            },
                            {
                                "label": "C",
                                "text": "responsibility"
                            },
                            {
                                "label": "D",
                                "text": "responsibleness"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t5-p4",
                "type": "MEMO",
                "guidance": "Questions 143-146 refer to the following memo.",
                "content": "To: All Employees\nFrom: Marina Papantonio, Safety Liaison\nDate: November 12\nSubject: Safety Training\n\nIt is time once again for our annual safety training workshop. This year, training will focus on digital safety measures, like avoiding scams and protecting against cyberattacks. Our technology experts already have installed new programs throughout our company's information system to reduce risk. [143] , we all need to understand how the programs work and what to do when a problem arises.\n\nTo accommodate [144] , several workshops will be conducted throughout the upcoming week.\n\nYou can register for any one of these [145] on our company's intranet page. Just click on the link for \"Safety Training.\" [146] . If you are unable to take part in any of the scheduled workshops for any reason, you must inform your supervisor.",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "If so"
                            },
                            {
                                "label": "B",
                                "text": "However"
                            },
                            {
                                "label": "C",
                                "text": "Otherwise"
                            },
                            {
                                "label": "D",
                                "text": "In that case"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "itself"
                            },
                            {
                                "label": "B",
                                "text": "his"
                            },
                            {
                                "label": "C",
                                "text": "whose"
                            },
                            {
                                "label": "D",
                                "text": "everyone"
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "sessions"
                            },
                            {
                                "label": "B",
                                "text": "positions"
                            },
                            {
                                "label": "C",
                                "text": "conferences"
                            },
                            {
                                "label": "D",
                                "text": "competitions"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Cyberattacks are on the rise."
                            },
                            {
                                "label": "B",
                                "text": "The training is held each summer."
                            },
                            {
                                "label": "C",
                                "text": "Please make every effort to sign up."
                            },
                            {
                                "label": "D",
                                "text": "Last year's program was canceled."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },
    {
        "testId": 6,
        "title": "ETS TOEIC Vol 4 - Test 6",
        "passages": [
            {
                "id": "p6-t6-p1",
                "type": "ADVERTISEMENT",
                "guidance": "Questions 131-134 refer to the following advertisement.",
                "title": "Estella Guitar Lessons: Play with the Best",
                "content": "Whether you play acoustic guitar electric, taking lessons with an Estella Guitar teacher is the best way to improve your ability. [131] With years of experience crafting playing techniques, qualified instructors can tailor lessons to focus on the skills you want to fine-tune. [132] Receive a customized learning plan to set goals and overcome the challenges that cause many players to get discouraged. An Estella Guitar teacher will help boost your confidence.\n\n[133] At Estella Guitar, we believe that playing music is a way of expressing yourself. , we will help you go beyond the familiar chords and riffs to develop your own identity as a musician. [134] Ready to get started? Visit www.estellaguitar.com/lessons to get matched with the right instructor for you!",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "is"
                            },
                            {
                                "label": "B",
                                "text": "or"
                            },
                            {
                                "label": "C",
                                "text": "likely"
                            },
                            {
                                "label": "D",
                                "text": "from"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "our"
                            },
                            {
                                "label": "B",
                                "text": "ourselves"
                            },
                            {
                                "label": "C",
                                "text": "ours"
                            },
                            {
                                "label": "D",
                                "text": "us"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "133",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Contact a technician for questions about repairs."
                            },
                            {
                                "label": "B",
                                "text": "A high-quality instrument will help you to perform at your best."
                            },
                            {
                                "label": "C",
                                "text": "The best resource for you as a learner is an expert to guide your progress."
                            },
                            {
                                "label": "D",
                                "text": "It took them several years to master their instruments."
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "So far"
                            },
                            {
                                "label": "B",
                                "text": "With that in mind"
                            },
                            {
                                "label": "C",
                                "text": "On a different note"
                            },
                            {
                                "label": "D",
                                "text": "At that point"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t6-p2",
                "type": "POLICY",
                "guidance": "Questions 135-138 refer to the following policy.",
                "content": "In-home delivery takes approximately one week after an order is shipped from our warehouse.\n\nThe actual time may vary based on the location of your and your availability for accepting the item. [135] Vernico Furniture will work with a carrier an appointment that is convenient for you.\n\n[136] Typical hours are Monday through Friday between 8 A.M. and 5 р.м., evening appointments can often be arranged. [137] Upon arrival at your home, the item will be placed in the location you desire. Assembly is included as well.\n\n[138]",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "garden"
                            },
                            {
                                "label": "B",
                                "text": "records"
                            },
                            {
                                "label": "C",
                                "text": "residence"
                            },
                            {
                                "label": "D",
                                "text": "organization"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "to schedule"
                            },
                            {
                                "label": "B",
                                "text": "is scheduling"
                            },
                            {
                                "label": "C",
                                "text": "as a schedule"
                            },
                            {
                                "label": "D",
                                "text": "that scheduled"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "if so"
                            },
                            {
                                "label": "B",
                                "text": "when"
                            },
                            {
                                "label": "C",
                                "text": "though"
                            },
                            {
                                "label": "D",
                                "text": "in the meantime"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "When buying a home, location is extremely important."
                            },
                            {
                                "label": "B",
                                "text": "Refinishing furniture is a form of art."
                            },
                            {
                                "label": "C",
                                "text": "Furnished apartments can be found online."
                            },
                            {
                                "label": "D",
                                "text": "All packing materials will be removed."
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t6-p3",
                "type": "EMAIL",
                "guidance": "Questions 139-142 refer to the following e-mail.",
                "content": "From: Leena Montoya <Imontoya@academemedia.com>\nTo: Thao Pham <thaopham@amail.com>\nSubject: Subscription\nDate: April 17\n\nDear Mr. Pham, Your subscription to Medical Innovations Quarterly has been canceled.\n\nwill no longer receive the print edition.\n\n[139] May 1, you [140]\n\nWe hope that you will consider once again becoming a of our publications. Academe Media publishes many high-quality scientific journals in addition to Medical Innovations Quarterly. [141] Should you wish to subscribe to one by May 31, we can offer you a two-year subscription at the annual rate. Visit www.academemedia.com/shop and enter the code DOUBLE checkout.\n\n[142]\n\nIf you have any feedback that could help us improve our products or services, please call me directly at 212-555-0122.\n\nSincerely, Leena Montoya Customer Service Manager, Academe Media",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Thank you for your timely order."
                            },
                            {
                                "label": "B",
                                "text": "We have processed your request."
                            },
                            {
                                "label": "C",
                                "text": "This is a payment reminder."
                            },
                            {
                                "label": "D",
                                "text": "Please contact us to update your information."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Starts"
                            },
                            {
                                "label": "B",
                                "text": "Started"
                            },
                            {
                                "label": "C",
                                "text": "Starter"
                            },
                            {
                                "label": "D",
                                "text": "Starting"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "distributor"
                            },
                            {
                                "label": "B",
                                "text": "producer"
                            },
                            {
                                "label": "C",
                                "text": "reader"
                            },
                            {
                                "label": "D",
                                "text": "teacher"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "until"
                            },
                            {
                                "label": "B",
                                "text": "upon"
                            },
                            {
                                "label": "C",
                                "text": "without"
                            },
                            {
                                "label": "D",
                                "text": "next"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t6-p4",
                "type": "INFORMATION",
                "guidance": "Questions 143-146 refer to the following information.",
                "content": "In a commercial kitchen, all refrigerators are required to have a thermometer that from 0°F (-18°C) to 220°F (104°C). [143] To prevent the growth of bacteria, refrigerated foods must be stored at 41°F (5°C) or below. The head chef is responsible for checking these thermometers throughout the day to ensure that the kitchen is in compliance at all times.\n\nAlso important to consider is . [144] Thermometers should always be located in the warmest spot in the refrigerator. This location is also appropriate because it allows the thermometer to be easily as soon as the door is opened.\n\n[145] [146]",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "ranges"
                            },
                            {
                                "label": "B",
                                "text": "ranger"
                            },
                            {
                                "label": "C",
                                "text": "ranged"
                            },
                            {
                                "label": "D",
                                "text": "ranging"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "size"
                            },
                            {
                                "label": "B",
                                "text": "safety"
                            },
                            {
                                "label": "C",
                                "text": "reliability"
                            },
                            {
                                "label": "D",
                                "text": "placement"
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Remove them carefully."
                            },
                            {
                                "label": "B",
                                "text": "This is typically inside the door."
                            },
                            {
                                "label": "C",
                                "text": "It should be kept cool at all times."
                            },
                            {
                                "label": "D",
                                "text": "They can also be purchased in bulk."
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "sold"
                            },
                            {
                                "label": "B",
                                "text": "seen"
                            },
                            {
                                "label": "C",
                                "text": "repaired"
                            },
                            {
                                "label": "D",
                                "text": "removed"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },
    {
        "testId": 7,
        "title": "ETS TOEIC Vol 4 - Test 7",
        "passages": [
            {
                "id": "p6-t7-p1",
                "type": "EMAIL",
                "guidance": "Questions 131-134 refer to the following e-mail.",
                "title": "...",
                "content": "From: Naomi Richter <naomirichter@mailcurrent.com>\nTo: Watanu Sakamoto <wsakamoto@RHNimports.com>\nDate: 23 November\nSubject: Follow-up\n\nAttachment: Logistics coordinator description Dear Ms. Richter, Thank you for coming to our office to interview for the assistant import manager position last week. We were impressed with your credentials and enthusiasm. we are moving ahead [131] with another candidate, we would like to offer you a different position that just became available:\n\nlogistics coordinator.\n\nThe attached document contains the detailed job description and pay rate. This [132] has not yet been posted publicly. If you are [133] please let me know by the end of this week.\n\n[134]\n\nSincerely, Watanu Sakamoto Human Resource Manager, RHN Imports",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Rather"
                            },
                            {
                                "label": "B",
                                "text": "Although"
                            },
                            {
                                "label": "C",
                                "text": "Similarly"
                            },
                            {
                                "label": "D",
                                "text": "Consequently"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "There are several other internal applicants."
                            },
                            {
                                "label": "B",
                                "text": "Unfortunately, the position is no longer available."
                            },
                            {
                                "label": "C",
                                "text": "My assistant will schedule your second interview."
                            },
                            {
                                "label": "D",
                                "text": "Your experience and skill set make you a great fit."
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "133",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "opportunity"
                            },
                            {
                                "label": "B",
                                "text": "authorization"
                            },
                            {
                                "label": "C",
                                "text": "application"
                            },
                            {
                                "label": "D",
                                "text": "capacity"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "interest"
                            },
                            {
                                "label": "B",
                                "text": "interests"
                            },
                            {
                                "label": "C",
                                "text": "interested"
                            },
                            {
                                "label": "D",
                                "text": "interesting"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t7-p2",
                "type": "NOTICE",
                "guidance": "Questions 135-138 refer to the following notice.",
                "title": "...",
                "content": "The Oakville Horticulture Club [135] a plant sale on Saturday, 9 September. The sale will be held from 9:00 A.M. to 4:00P.M. at the Oakville Community Centre at 478 Hill Avenue. There will be great deals on hanging baskets, grasses, and herbs. [136] We [137] have a delicious selection of fruits and vegetables available for purchase. Enjoy live talks and demonstrations [138] the day. For more information, visit the Oakville Horticulture Web site:\n\nwww.oakvillehorticultureclub.co.uk/events.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "host"
                            },
                            {
                                "label": "B",
                                "text": "hosted"
                            },
                            {
                                "label": "C",
                                "text": "is hosting"
                            },
                            {
                                "label": "D",
                                "text": "has hosted"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Come early to get the best selection."
                            },
                            {
                                "label": "B",
                                "text": "Plants help make your home beautiful."
                            },
                            {
                                "label": "C",
                                "text": "Join the club for a discount on local garden tours."
                            },
                            {
                                "label": "D",
                                "text": "The community center was just renovated."
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "later"
                            },
                            {
                                "label": "B",
                                "text": "also"
                            },
                            {
                                "label": "C",
                                "text": "nearly"
                            },
                            {
                                "label": "D",
                                "text": "merely"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "within"
                            },
                            {
                                "label": "B",
                                "text": "forward"
                            },
                            {
                                "label": "C",
                                "text": "following"
                            },
                            {
                                "label": "D",
                                "text": "throughout"
                            }
                        ],
                        "correctAnswer": "Although",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t7-p3",
                "type": "LETTER",
                "guidance": "Questions 139-142 refer to the following letter.",
                "title": "...",
                "content": "July 2 Dear Mr. Arakaki:\n\nI am writing to inform you of scheduled road maintenance on Briggs Avenue. Beginning on July 15, Briggs Avenue [139] reduced to one lane from Elm Street to Bay Road. [140] Although your [141] is not located in this section of Briggs Avenue, traffic on most of the street will move more slowly than usual while work is being performed. You may consider advising your employees to take alternate routes to work during this time. The project is expected to be completed on or before October 22. Thank you for your cooperation and assistance.\n\nSincerely, Amalia Villalobos Director of Transportation Enclosure",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "was"
                            },
                            {
                                "label": "B",
                                "text": "will be"
                            },
                            {
                                "label": "C",
                                "text": "can be"
                            },
                            {
                                "label": "D",
                                "text": "has been"
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Briggs Avenue is only two miles away."
                            },
                            {
                                "label": "B",
                                "text": "The event will take place on Elm Street."
                            },
                            {
                                "label": "C",
                                "text": "Please refer to the enclosed map of the affected area."
                            },
                            {
                                "label": "D",
                                "text": "However, all city services will close during this time."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "mailbox"
                            },
                            {
                                "label": "B",
                                "text": "school"
                            },
                            {
                                "label": "C",
                                "text": "signage"
                            },
                            {
                                "label": "D",
                                "text": "business"
                            }
                        ],
                        "correctAnswer": "opportunity",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "fortunately"
                            },
                            {
                                "label": "B",
                                "text": "instead"
                            },
                            {
                                "label": "C",
                                "text": "likewise"
                            },
                            {
                                "label": "D",
                                "text": "therefore"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t7-p4",
                "type": "ARTICLE",
                "guidance": "Questions 143-146 refer to the following article.",
                "title": "Franklin Planetarium to Move Downtown",
                "content": "(June 3)-After 48 years in its present location on Mayfield's south side, the Franklin Planetarium is moving to a new home. Construction is underway on the downtown facility, part of a complex that includes the new Natural History Museum. Both [143] are expected to open to the public next September.\n\nThe current planetarium's main attraction is a 300-seat theater, where visitors can view projections of stars and planets on the dome above. [144] a larger theater, the new planetarium will feature an upgraded digital projection system. [145] Visitors will be able [146] the night sky more clearly and explore other planets and galaxies through new, interactive displays.",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "trails"
                            },
                            {
                                "label": "B",
                                "text": "buildings"
                            },
                            {
                                "label": "C",
                                "text": "campuses"
                            },
                            {
                                "label": "D",
                                "text": "performances"
                            }
                        ],
                        "correctAnswer": "interested",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "In addition to"
                            },
                            {
                                "label": "B",
                                "text": "In particular"
                            },
                            {
                                "label": "C",
                                "text": "In agreement with"
                            },
                            {
                                "label": "D",
                                "text": "For instance"
                            }
                        ],
                        "correctAnswer": "is hosting",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "There are currently three other museums in the Mayfield area."
                            },
                            {
                                "label": "B",
                                "text": "Attendance at the planetarium has been up in recent years."
                            },
                            {
                                "label": "C",
                                "text": "Planning for the new planetarium began five years ago."
                            },
                            {
                                "label": "D",
                                "text": "There will be room for three short-term exhibits as well."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "to see"
                            },
                            {
                                "label": "B",
                                "text": "will see"
                            },
                            {
                                "label": "C",
                                "text": "who saw"
                            },
                            {
                                "label": "D",
                                "text": "by seeing"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },
    {
        "testId": 8,
        "title": "ETS TOEIC Vol 4 - Test 8",
        "passages": [
            {
                "id": "p6-t8-p1",
                "type": "EMAIL",
                "guidance": "Questions 131-134 refer to the following e-mail.",
                "title": "...",
                "content": "From: mnandy@gmantcs.com\nTo: jblaire@blaireaccounting.ca\nSubject: RE: AUTOMATIC REPLY\nDate: 9 January, 10:34 AM\n\nHello, and thank you for contacting Blaire Accounting. I will be out of the office until 31 January. I will respond to your message when I [131]. If you need [132] assistance, please contact Susan Lewis, my administrative assistant, at slewis@blaireaccounting.ca. You can [133] call her directly at 416-555-0193. [134].\n\nJean Blaire, President",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "recover"
                            },
                            {
                                "label": "B",
                                "text": "return"
                            },
                            {
                                "label": "C",
                                "text": "begin"
                            },
                            {
                                "label": "D",
                                "text": "finish"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "immediate"
                            },
                            {
                                "label": "B",
                                "text": "immediately"
                            },
                            {
                                "label": "C",
                                "text": "immediacy"
                            },
                            {
                                "label": "D",
                                "text": "immediacies"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "133",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "also"
                            },
                            {
                                "label": "B",
                                "text": "lightly"
                            },
                            {
                                "label": "C",
                                "text": "similarly"
                            },
                            {
                                "label": "D",
                                "text": "again"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Ms. Blaire will be back in the office earlier than expected."
                            },
                            {
                                "label": "B",
                                "text": "Please come and see us if you ever find yourself in Toronto."
                            },
                            {
                                "label": "C",
                                "text": "It is essential to hire a competent payroll and tax accountant."
                            },
                            {
                                "label": "D",
                                "text": "Ms. Lewis is in the office on weekdays from 9 A.M. to 5 P.M."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t8-p2",
                "type": "NOTICE",
                "guidance": "Questions 135-138 refer to the following notice.",
                "title": "Attention customers of Metro Coffee:",
                "content": "We are excited to announce that we [135] a second Metro Coffee store! As you know, we recently expanded our offerings to include baked goods as well as coffee. As a result, our [136] has increased significantly. To keep up with demand, we decided that a second store was necessary.\n\nOur new space is substantially [137] but offers the same wide selection of items. Make sure to stop by and check out our new location today!\n\n[138]",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "will open"
                            },
                            {
                                "label": "B",
                                "text": "can open"
                            },
                            {
                                "label": "C",
                                "text": "are opening"
                            },
                            {
                                "label": "D",
                                "text": "have opened"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "debt"
                            },
                            {
                                "label": "B",
                                "text": "payroll"
                            },
                            {
                                "label": "C",
                                "text": "business"
                            },
                            {
                                "label": "D",
                                "text": "investment"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Metro Coffee has been a part of the community for nine years."
                            },
                            {
                                "label": "B",
                                "text": "We roast our coffee beans right here on-site."
                            },
                            {
                                "label": "C",
                                "text": "Many people enjoy eating a pastry while drinking a cup of coffee."
                            },
                            {
                                "label": "D",
                                "text": "It is located two miles away in the historic district."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "large"
                            },
                            {
                                "label": "B",
                                "text": "larger"
                            },
                            {
                                "label": "C",
                                "text": "largely"
                            },
                            {
                                "label": "D",
                                "text": "largest"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t8-p3",
                "type": "MEMO",
                "guidance": "Questions 139-142 refer to the following memo.",
                "title": "...",
                "content": "To: All Ferrese Hotel Employees\nFrom: Sergio Prieto, Hotel Manager\nDate: Monday, July 4\nSubject: Global Shipping Partners Conference\n\nThe Ferrese Hotel will be hosting the Global Shipping Partners Conference next week, from Tuesday to Sunday. [139], management expects to see many more customers in the hotel's restaurants and gift shops. [140]. I will be hiring temporary staff to ensure that [141] can meet these increased demands. Please take the time to help them learn our [142] when they are here. Doing so will ensure that all operations run smoothly while the conference is taking place.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "If not"
                            },
                            {
                                "label": "B",
                                "text": "After all"
                            },
                            {
                                "label": "C",
                                "text": "Therefore"
                            },
                            {
                                "label": "D",
                                "text": "In the meantime"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Restaurant renovations are almost completed."
                            },
                            {
                                "label": "B",
                                "text": "Conference registration forms have been posted online."
                            },
                            {
                                "label": "C",
                                "text": "Applications will be reviewed later this week."
                            },
                            {
                                "label": "D",
                                "text": "The business center will also be busier than usual."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "it"
                            },
                            {
                                "label": "B",
                                "text": "we"
                            },
                            {
                                "label": "C",
                                "text": "both"
                            },
                            {
                                "label": "D",
                                "text": "something"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "lines"
                            },
                            {
                                "label": "B",
                                "text": "steps"
                            },
                            {
                                "label": "C",
                                "text": "names"
                            },
                            {
                                "label": "D",
                                "text": "routines"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t8-p4",
                "type": "ARTICLE",
                "guidance": "Questions 143-146 refer to the following article.",
                "title": "...",
                "content": "DALLAS (July 28)—Zura Technology Solutions (ZTS) announced today that it has completed the [143] of an office building located at 425 Van Kirk Street here in Dallas. The building, most recently the headquarters of Brickhall Insurance, will serve as ZTS's [144] base of operations. The company's relocation from Fort Worth is expected to be complete by the end of the calendar year. [145]. \"Our decision to acquire the building reflects ZTS's ongoing commitment to the Dallas area and will enable us to better serve our customers, business partners, and stakeholders,\" said Gloria Rubirosa, ZTS's CEO. \"From our new home in Dallas, we [146] to work hard to meet the needs of each and every one of our customers around the world.”",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "construction"
                            },
                            {
                                "label": "B",
                                "text": "cleaning"
                            },
                            {
                                "label": "C",
                                "text": "inspection"
                            },
                            {
                                "label": "D",
                                "text": "purchase"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "voluntary"
                            },
                            {
                                "label": "B",
                                "text": "primary"
                            },
                            {
                                "label": "C",
                                "text": "short-term"
                            },
                            {
                                "label": "D",
                                "text": "occasional"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "ZTS's leadership team sees the move as strategic."
                            },
                            {
                                "label": "B",
                                "text": "For example, it provides a range of services to small businesses."
                            },
                            {
                                "label": "C",
                                "text": "There are only a few available sites in the Main Street District."
                            },
                            {
                                "label": "D",
                                "text": "Over 15,000 people are employed by ZTS worldwide."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "continued"
                            },
                            {
                                "label": "B",
                                "text": "continuing"
                            },
                            {
                                "label": "C",
                                "text": "would have continued"
                            },
                            {
                                "label": "D",
                                "text": "will continue"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },
    {
        "testId": 9,
        "title": "ETS TOEIC Vol 4 - Test 9",
        "passages": [
            {
                "id": "p6-t9-p1",
                "type": "ANNOUNCEMENT",
                "guidance": "Questions 131-134 refer to the following notice.",
                "title": "Sky Air First Pass",
                "content": "Thank you for flying Sky Air First with ------. We hope you enjoy your flight.\n\n131.\n\nYou can take advantage of our best prices on future flights ------ purchasing a Sky Air First Pass.\n\n132.\n\nFor a ------ annual fee, you will get special discounts, seat upgrades, and the use of our exclusive 133.\n\ntravelers' lounge. ------. Ask your flight attendant for more information and an application.\n\n134.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "them"
                            },
                            {
                                "label": "B",
                                "text": "theirs"
                            },
                            {
                                "label": "C",
                                "text": "us"
                            },
                            {
                                "label": "D",
                                "text": "ours"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "at"
                            },
                            {
                                "label": "B",
                                "text": "on"
                            },
                            {
                                "label": "C",
                                "text": "by"
                            },
                            {
                                "label": "D",
                                "text": "to"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "133",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "lowers"
                            },
                            {
                                "label": "B",
                                "text": "low"
                            },
                            {
                                "label": "C",
                                "text": "lowly"
                            },
                            {
                                "label": "D",
                                "text": "lowest"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "We hope you will fly Sky Air First again."
                            },
                            {
                                "label": "B",
                                "text": "You will also get priority boarding."
                            },
                            {
                                "label": "C",
                                "text": "Please find your seat immediately."
                            },
                            {
                                "label": "D",
                                "text": "The flight delay will be minimal."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t9-p2",
                "type": "ARTICLE",
                "guidance": "Questions 135-138 refer to the following article.",
                "title": "CJOK Radio Show Welcomes New Staff",
                "content": "QUEENSVILLE (7 July) —Local radio station CJOK announced Katherine Dees as the new producer of the popular show Out and About in Queensville. Ms. Dees is now ------ for 135.\n\ncoordinating schedules, booking guests for the show, and managing media relations.\n\n------, the station hired sound editor Virginia Thacker and production assistant Reggie Dietrich 136.\n\nto support Ms. Dees in her new role.\n\n137.\n\nOut and About in Queensville, which has been airing for 30 years, is performed live weekly from September to May in the Orpheum Theater in downtown Queensville. The show ------ musical guests, writers, and storytellers for an hour of weekly programming.\n\n138.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "responsive"
                            },
                            {
                                "label": "B",
                                "text": "responsibly"
                            },
                            {
                                "label": "C",
                                "text": "responding"
                            },
                            {
                                "label": "D",
                                "text": "responsible"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Even so"
                            },
                            {
                                "label": "B",
                                "text": "In fact"
                            },
                            {
                                "label": "C",
                                "text": "For example"
                            },
                            {
                                "label": "D",
                                "text": "In addition"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "CJOK was founded 60 years ago."
                            },
                            {
                                "label": "B",
                                "text": "These recent hires follow the retirement of producer Ed Evans."
                            },
                            {
                                "label": "C",
                                "text": "Ms. Dees was born and raised in Cedarburg."
                            },
                            {
                                "label": "D",
                                "text": "CJOK has more than one popular show in its lineup."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "gives"
                            },
                            {
                                "label": "B",
                                "text": "marks"
                            },
                            {
                                "label": "C",
                                "text": "features"
                            },
                            {
                                "label": "D",
                                "text": "holds"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t9-p3",
                "type": "EMAIL",
                "guidance": "Questions 139-142 refer to the following e-mail.",
                "title": "...",
                "content": "To: Sandra Barga <sbarga97@hjmail.ca>\nFrom: Artie Romanche <service@northwestbags.ca>\nDate: 12 July\nSubject: Order number 71280\n\nDear Ms. Barga:\n\nWe received your recent order asking for your name to be stitched on a Klamath Kool handbag.\n\nWe are, ------, eager to complete your order. Unfortunately, our seamstress who fulfills 139.\n\npersonalisation requirements will be on leave for the next three days. We wanted to let you know that her ------ will cause a delay in shipping your bag.\n\n140.\n\nFor the wait, we would like to offer you a 10 percent discount on your current order. Or, if 141.\n\nyou prefer, you can opt for free personalisation on your next order. ------. At Northwest Bags, 142.\n\nwe strive for 100 percent customer satisfaction!\n\nSincerely, Artie Romanche Customer Service Representative, Northwest Bags",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "still"
                            },
                            {
                                "label": "B",
                                "text": "besides"
                            },
                            {
                                "label": "C",
                                "text": "of course"
                            },
                            {
                                "label": "D",
                                "text": "nevertheless"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "absence"
                            },
                            {
                                "label": "B",
                                "text": "arrival"
                            },
                            {
                                "label": "C",
                                "text": "request"
                            },
                            {
                                "label": "D",
                                "text": "investigation"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Compensated"
                            },
                            {
                                "label": "B",
                                "text": "To compensate"
                            },
                            {
                                "label": "C",
                                "text": "For compensating"
                            },
                            {
                                "label": "D",
                                "text": "It is compensation"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "The choice is yours."
                            },
                            {
                                "label": "B",
                                "text": "We appreciate your review."
                            },
                            {
                                "label": "C",
                                "text": "The bag will look great with your initials on it."
                            },
                            {
                                "label": "D",
                                "text": "We are the only local retailer offering custom services."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t9-p4",
                "type": "ARTICLE",
                "guidance": "Questions 143-146 refer to the following article.",
                "title": "Sehelec Announces Wind-Solar Hybrid Project",
                "content": "MUMBAI (15 March)-Sehelec Ltd. announced it will begin construction on a 500-megawatt wind-solar hybrid power outside of Bangalore, India. ------. Sehelec expects to begin 143.\n\noperations within 24 months, and it will sell the power to Indian energy giant Novaseon Industries.\n\n144.\n\n\"Our contract with Novaseon to provide power moves us closer to our long-term corporate 145.\n\ngoal,\" said Sumit Varma, CEO of Sehelec. \"Our objective is to achieve a capacity of 20 gigawatts within five years. Doing so will make us one of India's largest green power companies. And that, in turn, will help the country its carbon-reduction target.\" 146.",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "plant"
                            },
                            {
                                "label": "B",
                                "text": "planter"
                            },
                            {
                                "label": "C",
                                "text": "planting"
                            },
                            {
                                "label": "D",
                                "text": "planted"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Windy conditions can cause damage to tall buildings."
                            },
                            {
                                "label": "B",
                                "text": "The facility will consist of a mix of solar panels and wind turbines."
                            },
                            {
                                "label": "C",
                                "text": "Electric vehicles have fewer emissions than other vehicles have."
                            },
                            {
                                "label": "D",
                                "text": "The pace of upgrades to India's power grid slowed slightly this year."
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "renew"
                            },
                            {
                                "label": "B",
                                "text": "renewers"
                            },
                            {
                                "label": "C",
                                "text": "renewable"
                            },
                            {
                                "label": "D",
                                "text": "to renew"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "understand"
                            },
                            {
                                "label": "B",
                                "text": "explain"
                            },
                            {
                                "label": "C",
                                "text": "block"
                            },
                            {
                                "label": "D",
                                "text": "reach"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },
    {
        "testId": 10,
        "title": "ETS TOEIC Vol 4 - Test 10",
        "passages": [
            {
                "id": "p6-t10-p1",
                "type": "ARTICLE",
                "guidance": "Questions 131-134 refer to the following article.",
                "title": "Kray Villa Museum To Celebrate Grand Opening",
                "content": "DEERFIELD (May 2)—The official opening of the Kray Villa Museum will take place on May 29 at 10 A.M. To mark the occasion, various festivities will be held throughout the day. Visit www.krayvillamuseum.org for details.\n\nThe museum is housed in the imposing structure was home to the once-influential Kray family beginning in the late 1800s. Having laid abandoned for the last 30 years, the property was purchased 2 years ago by the Deerfield Historical Society. Subsequently, the gardens were restored to appear as they did when the first generation of Krays moved into the villa.\n\n, furnishings of the kind most likely used by the family are on display.\n\nDuring the museum's opening festivities, a live band music that was popular in the late nineteenth century.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best sentence for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "This year's celebrations are part of a weeklong national campaign."
                            },
                            {
                                "label": "B",
                                "text": "Results of the survey will be presented at 6:00 P.M."
                            },
                            {
                                "label": "C",
                                "text": "Programs will be distributed at the next meeting."
                            },
                            {
                                "label": "D",
                                "text": "Admission is free, but a donation is suggested."
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "such"
                            },
                            {
                                "label": "B",
                                "text": "that"
                            },
                            {
                                "label": "C",
                                "text": "what"
                            },
                            {
                                "label": "D",
                                "text": "all"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "133",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Conversely"
                            },
                            {
                                "label": "B",
                                "text": "Additionally"
                            },
                            {
                                "label": "C",
                                "text": "In the meantime"
                            },
                            {
                                "label": "D",
                                "text": "To this end"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "will perform"
                            },
                            {
                                "label": "B",
                                "text": "had to perform"
                            },
                            {
                                "label": "C",
                                "text": "was performing"
                            },
                            {
                                "label": "D",
                                "text": "could have performed"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t10-p2",
                "type": "EMAIL",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "title": "...",
                "content": "To: All employees\nFrom: Cecil Radu, Information Technology Manager\nDate: April 8\n\nRe: Network alert We are experiencing some problems with our local network. Some of the affected services include the company Web site and the payroll database. We have also received information network data becoming corrupted and files not saving properly. Therefore, to ensure that you do not lose any work, please avoid using the network this morning while my team addresses these . We anticipate that the systems will be fully functional by this afternoon.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "internalizing"
                            },
                            {
                                "label": "B",
                                "text": "internalize"
                            },
                            {
                                "label": "C",
                                "text": "internally"
                            },
                            {
                                "label": "D",
                                "text": "internal"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "as"
                            },
                            {
                                "label": "B",
                                "text": "in"
                            },
                            {
                                "label": "C",
                                "text": "about"
                            },
                            {
                                "label": "D",
                                "text": "with"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "issues"
                            },
                            {
                                "label": "B",
                                "text": "clients"
                            },
                            {
                                "label": "C",
                                "text": "articles"
                            },
                            {
                                "label": "D",
                                "text": "proposals"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "The network server will be expensive."
                            },
                            {
                                "label": "B",
                                "text": "Your computer may be corrupted."
                            },
                            {
                                "label": "C",
                                "text": "Thank you for your patience."
                            },
                            {
                                "label": "D",
                                "text": "Contact the IT help desk."
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t10-p3",
                "type": "NOTICE",
                "guidance": "Questions 139-142 refer to the following notice.",
                "title": "...",
                "content": "April 2 Dear TP&G Customer, Takoradi Power & Gas (TP&G) is committed to providing every customer with dependable electricity service. To this end, we need to make some improvements to our A maintenance crew will be upgrading transformers in your neighbourhood on or about 22 April, beginning at 10 A.M. , we will need to shut off the electricity to residences in your area from approximately 10 A.M. to 1 P.M. on that day. We hope that by this notice, any disruptions caused by the planned outage will be minimized.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "office"
                            },
                            {
                                "label": "B",
                                "text": "system"
                            },
                            {
                                "label": "C",
                                "text": "vehicles"
                            },
                            {
                                "label": "D",
                                "text": "records"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "If not"
                            },
                            {
                                "label": "B",
                                "text": "Nonetheless"
                            },
                            {
                                "label": "C",
                                "text": "Unfortunately"
                            },
                            {
                                "label": "D",
                                "text": "On the other hand"
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "We apologize for the temporary inconvenience."
                            },
                            {
                                "label": "B",
                                "text": "We respond to most service requests within 24 hours."
                            },
                            {
                                "label": "C",
                                "text": "Other companies specialize in lighting installations."
                            },
                            {
                                "label": "D",
                                "text": "Here are some tips for reducing your energy bill."
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "sent"
                            },
                            {
                                "label": "B",
                                "text": "to send"
                            },
                            {
                                "label": "C",
                                "text": "will send"
                            },
                            {
                                "label": "D",
                                "text": "sending"
                            }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t10-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "title": "...",
                "content": "To: hanna.kalita@netmail.co.uk\nFrom: patientoutreach@ebmp.co.uk\nDate: 12 June\nSubject: Invitation to patient portal\n\nDear Ms. Kalita, East Burberry Medical Practice has recently rolled out its patient portal, Burmed Connect. This service to help you manage your healthcare at your convenience. You are invited to create an account to access the portal. Once enrolled, you will be able to book appointments with our doctors as well as view your medical records and request prescriptions. , you can use Burmed Connect to send messages to your doctor. Only you and your doctor will be able to see any messages exchanged between the two of you.\n\nTo create an account, start by going to www.eastburberrymedicalpractice/patient-portal.co.uk. If you experience any difficulties with the process, please call 20 5550 0169.\n\nSincerely, Emma Richardson, Patient Outreach Coordinator",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "has been intended"
                            },
                            {
                                "label": "B",
                                "text": "will be intended"
                            },
                            {
                                "label": "C",
                                "text": "was intended"
                            },
                            {
                                "label": "D",
                                "text": "is intended"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Furthermore"
                            },
                            {
                                "label": "B",
                                "text": "Instead"
                            },
                            {
                                "label": "C",
                                "text": "However"
                            },
                            {
                                "label": "D",
                                "text": "Otherwise"
                            }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Our previous portal will no longer be updated."
                            },
                            {
                                "label": "B",
                                "text": "The health app can be downloaded from our Web site."
                            },
                            {
                                "label": "C",
                                "text": "Protecting your privacy is a responsibility we take seriously."
                            },
                            {
                                "label": "D",
                                "text": "You will be locked out of your account after a third failed attempt."
                            }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best word or phrase for the blank.",
                        "options": [
                            {
                                "label": "A",
                                "text": "selection"
                            },
                            {
                                "label": "B",
                                "text": "registration"
                            },
                            {
                                "label": "C",
                                "text": "invention"
                            },
                            {
                                "label": "D",
                                "text": "deletion"
                            }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    }
];
