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
                "type": "NOTICE",
                "guidance": "Questions 131-134 refer to the following notice.",
                "content": "NOTICE\n\nTo continue providing the highest level of ___131___ to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ___132___ this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.\n\nWe ___133___ for any inconvenience this might cause. ___134___.\n\nDenville Property Management Partners",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "serve" },
                            { "label": "B", "text": "served" },
                            { "label": "C", "text": "server" },
                            { "label": "D", "text": "service" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Along" },
                            { "label": "B", "text": "During" },
                            { "label": "C", "text": "Without" },
                            { "label": "D", "text": "Between" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "apologize" },
                            { "label": "B", "text": "organize" },
                            { "label": "C", "text": "realize" },
                            { "label": "D", "text": "recognize" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "If you would like to join our property management team, call us today." },
                            { "label": "B", "text": "Thank you for your patience while the main lobby is being painted." },
                            { "label": "C", "text": "Please do not attempt to access the north lobby on these days." },
                            { "label": "D", "text": "Questions or comments may be directed to the Management Office." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t1-p2",
                "type": "ARTICLE",
                "guidance": "Questions 135-138 refer to the following customer review.",
                "content": "I recently received a last-minute invitation to a formal dinner. I bought a suit and needed it tailored as ___135___ as possible. A friend suggested that I use Antonio's Tailoring Shop in downtown Auckland. When I met Antonio, he gave me his full attention ___136___ his shop was busy. He took the time to listen to me and carefully noted all my measurements. He then explained all the tailoring costs up front and assured me that he could have my suit ready in three days, but he had it done in two! ___137___.\n\nAntonio has run his shop for over 30 years, and his experience really shows. He is a ___138___ tailor. I highly recommend him.\n\nJim Kestren, Auckland",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "quickly" },
                            { "label": "B", "text": "quicken" },
                            { "label": "C", "text": "quickest" },
                            { "label": "D", "text": "quickness" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "as far as" },
                            { "label": "B", "text": "even though" },
                            { "label": "C", "text": "such as" },
                            { "label": "D", "text": "whether" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Of course, the shop is busiest on Saturdays." },
                            { "label": "B", "text": "The suit fits me perfectly too." },
                            { "label": "C", "text": "I made another purchase." },
                            { "label": "D", "text": "He used to sell shirts." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "former" },
                            { "label": "B", "text": "temporary" },
                            { "label": "C", "text": "superb" },
                            { "label": "D", "text": "best" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t1-p3",
                "type": "LETTER",
                "guidance": "Questions 139-142 refer to the following letter.",
                "content": "Dear Director Yoshida,\n\nThank you for your school's interest in visiting our farm next month. Please note that children must be at least six years old to visit and tour the farm. ___139___. I have enclosed a list of the ___140___ activities available for our young visitors. Two of these ___141___ must be scheduled in advance. They are a cheese-making class and an introduction to beekeeping. Both are very popular with our visitors.\n\nPlease let ___142___ know your selection by early next week. I look forward to welcoming your group soon!\n\nSincerely,\n\nAnnabel Romero, Coordinator\nMerrytree Family Farm",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "In the event of bad weather, the animals will be inside." },
                            { "label": "B", "text": "There are no exceptions to this policy." },
                            { "label": "C", "text": "Ones younger than that can find much to enjoy." },
                            { "label": "D", "text": "This fee includes lunch and a small souvenir." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "legal" },
                            { "label": "B", "text": "artistic" },
                            { "label": "C", "text": "athletic" },
                            { "label": "D", "text": "educational" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "events" },
                            { "label": "B", "text": "plays" },
                            { "label": "C", "text": "treatments" },
                            { "label": "D", "text": "trips" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "they" },
                            { "label": "B", "text": "me" },
                            { "label": "C", "text": "her" },
                            { "label": "D", "text": "one" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t1-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "To: Lakshmi Aiyar\nFrom: info@healthonity.com\nDate: February 8\nSubject: Healthonity Dental\n\nDear Ms. Aiyar,\n\nWe, the dental health professionals of the Healthonity Dental Center, are ___143___ to introduce our just-opened practice. We aim to provide access to the largest team of dental specialists in the region. On our Web site, you can see a comprehensive list of the procedures we offer. ___144___. The members of our practice share a passion for helping people maintain beautiful and healthy smiles.\n\nContact our center today at 305-555-0121 ___145___ an initial evaluation. All first-time ___146___ will benefit from a 50 percent discount on the cost through the end of the month.\n\nSincerely,\n\nThe Team at Healthonity Dental Center",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "prouder" },
                            { "label": "B", "text": "proudly" },
                            { "label": "C", "text": "pride" },
                            { "label": "D", "text": "proud" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "They include general and cosmetic procedures." },
                            { "label": "B", "text": "We have relocated from neighboring Hillsborough." },
                            { "label": "C", "text": "The Web site is a creation of A to Z Host Builders." },
                            { "label": "D", "text": "Several of them are surprisingly expensive." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "scheduled" },
                            { "label": "B", "text": "to schedule" },
                            { "label": "C", "text": "scheduling" },
                            { "label": "D", "text": "being scheduled" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "shoppers" },
                            { "label": "B", "text": "residents" },
                            { "label": "C", "text": "patients" },
                            { "label": "D", "text": "tenants" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
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
                "type": "MEMO",
                "guidance": "Questions 131-134 refer to the following memo.",
                "content": "To: All staff\nFrom: Bernard Villalobos, Vice President of Product Development\nDate: August 27\nSubject: Alzeret game (Product #DS8192)\n\nDue to the results from our trial customer testing, we have decided to postpone the launch of the Alzeret video game. Customer surveys indicated that the game was less ___131___ than we anticipated. Over the next few months, the game development team will introduce several ___132___ to make the product more attractive. ___133___. If the changes are successful, we hope to launch the game by next January ___134___ February.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "expensive" },
                            { "label": "B", "text": "repetitive" },
                            { "label": "C", "text": "appealing" },
                            { "label": "D", "text": "surprising" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "modification" },
                            { "label": "B", "text": "modifies" },
                            { "label": "C", "text": "modifying" },
                            { "label": "D", "text": "modifications" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "At that point, more tests will be conducted." },
                            { "label": "B", "text": "The launch will be our biggest of the year." },
                            { "label": "C", "text": "However, the surveys are not reliable." },
                            { "label": "D", "text": "Team members must each sign the form." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "since" },
                            { "label": "B", "text": "or" },
                            { "label": "C", "text": "if" },
                            { "label": "D", "text": "later" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p2",
                "type": "EMAIL",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: Eva Linn, Lunchtalk Industries\nFrom: Technical Services\nDate: January 15\nSubject: Technical query\n\nDear Ms. Linn,\n\nThank you for contacting our technical department ___135___ your query. ___136___, our call got disconnected when we were trying to reboot your system from our remote location. ___137___. Therefore, please call us at your earliest convenience and refer to conversation ID #TECH12-2020A to complete the system repair. We have prioritized your inquiry and look forward to helping you ___138___ your computer to its full capabilities.\n\nSincerely,\n\nArthur Feldt\nTechnical Service Facilitator",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "until" },
                            { "label": "B", "text": "besides" },
                            { "label": "C", "text": "into" },
                            { "label": "D", "text": "with" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "In other words" },
                            { "label": "B", "text": "For this reason" },
                            { "label": "C", "text": "For example" },
                            { "label": "D", "text": "As you know" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "We invite you to visit one of our computer repair centers in your area." },
                            { "label": "B", "text": "Unfortunately, we do not have a phone number at which we can reach you." },
                            { "label": "C", "text": "Thank you again for being one of our priority customers." },
                            { "label": "D", "text": "Please submit your check for the service fee promptly." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "restore" },
                            { "label": "B", "text": "restoring" },
                            { "label": "C", "text": "restored" },
                            { "label": "D", "text": "restoration" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p3",
                "type": "WEB PAGE",
                "guidance": "Questions 139-142 refer to the following Web page.",
                "content": "For a limited time, the Uppercut Clothing Hanger Company is selling its highest quality hangers at huge discounts on wholesale orders. This special ___139___ is perfect for hotels, retailers, or anywhere hangers are used extensively. ___140___ of lacquered walnut wood, these hangers are not only durable, but also safe for the environment. ___141___ are strong enough to hold up to ten pounds. To order, visit www.uppercuthangerco.ca. Note that all orders require a 20 percent deposit. ___142___, Uppercut will cover all shipping and insurance costs.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "clothing" },
                            { "label": "B", "text": "offer" },
                            { "label": "C", "text": "decoration" },
                            { "label": "D", "text": "performance" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Made" },
                            { "label": "B", "text": "Making" },
                            { "label": "C", "text": "To make" },
                            { "label": "D", "text": "They made" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Both" },
                            { "label": "B", "text": "They" },
                            { "label": "C", "text": "Fewer" },
                            { "label": "D", "text": "Theirs" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "142",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Our products make great gifts." },
                            { "label": "B", "text": "While sturdy, wooden hangers are also heavy." },
                            { "label": "C", "text": "Quality hangers are a great investment." },
                            { "label": "D", "text": "The balance is due when the shipment is received." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t2-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "From: mcrane@doodlemail.com\nTo: jkumar@baxterartsupplies.com\nDate: October 14\nSubject: Application\nAttachment: Résumé\n\nDear Ms. Kumar,\n\nI am writing in response to the advertisement posted in the window of Baxter Art Supplies. As a frequent visitor to your ___143___, I have found it an invaluable source of inspiration over the years. I would be ___144___ to display my artwork. I would also enjoy running workshops to help inspire your customers.\n\nI believe I would be well suited for this role because I am both enthusiastic and friendly. ___145___, I have led successful workshops at various locations in the area. I have attached a copy of my résumé, which includes more details about these workshops. ___146___. I look forward to hearing from you after you have reviewed my application and work.\n\nKind regards,\n\nMelania Crane",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "school" },
                            { "label": "B", "text": "house" },
                            { "label": "C", "text": "store" },
                            { "label": "D", "text": "museum" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "thrilling" },
                            { "label": "B", "text": "thrill" },
                            { "label": "C", "text": "thrilled" },
                            { "label": "D", "text": "thrills" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "In addition" },
                            { "label": "B", "text": "However" },
                            { "label": "C", "text": "In general" },
                            { "label": "D", "text": "Similarly" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "I enjoyed the painting workshop last week." },
                            { "label": "B", "text": "Samples of my art can be found at www.mcrane.com." },
                            { "label": "C", "text": "I just started working with watercolors." },
                            { "label": "D", "text": "For a price list, please contact me at 347-555-0101." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
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
                "type": "INFORMATION",
                "guidance": "Questions 131-134 refer to the following information.",
                "content": "Thank you for shopping with Danforth Fashions online. Our quality-control team carefully inspects all products ___131___ packaging to ensure customer satisfaction. ___132___. If not, we make exchanges or returns easy. Simply contact us at service@danforthfashions.com if you need a different size, color, or pattern—or if you are dissatisfied for any reason. Your exchange ___133___ right away. To return an item for a refund, use the prepaid return shipping label included with your order and send it back to us in its original packaging unused and undamaged. We issue refunds to the original method of payment, ___134___ the return shipping fee.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "in case" },
                            { "label": "B", "text": "as much as" },
                            { "label": "C", "text": "prior to" },
                            { "label": "D", "text": "in keeping with" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "We hope you are entirely pleased with your purchase." },
                            { "label": "B", "text": "We expect to be redesigning our Web site this summer." },
                            { "label": "C", "text": "We value all of our loyal customers." },
                            { "label": "D", "text": "We noticed that your billing address has changed." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "will be processed" },
                            { "label": "B", "text": "was processed" },
                            { "label": "C", "text": "is processing" },
                            { "label": "D", "text": "to be processing" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "past" },
                            { "label": "B", "text": "above" },
                            { "label": "C", "text": "aboard" },
                            { "label": "D", "text": "minus" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t3-p2",
                "type": "NOTICE",
                "guidance": "Questions 135-138 refer to the following notice.",
                "content": "Attention, Alden-Agner Industries Employees:\n\nPlease remember that the switch to our new e-mail software will begin at 11:00 P.M. on Sunday, May 2. All ___135___ information in your account, including contacts and calendar events, will be moved to the new system by 4:00 A.M. on Monday, May 3. Though we are working diligently to anticipate and provide solutions for all potential issues, some employees may experience difficulty ___136___ attempting to log in to their accounts after the switch. In addition, there is a remote possibility that some information may be lost. ___137___. be sure to back up any critical e-mail files as soon as possible. ___138___. A training session will be scheduled next week to familiarize employees with key functions of the new software.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "existed" },
                            { "label": "B", "text": "existence" },
                            { "label": "C", "text": "to exist" },
                            { "label": "D", "text": "existing" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "when" },
                            { "label": "B", "text": "plus" },
                            { "label": "C", "text": "already" },
                            { "label": "D", "text": "whose" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Previously" },
                            { "label": "B", "text": "Otherwise" },
                            { "label": "C", "text": "Even so" },
                            { "label": "D", "text": "For this reason" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The new software will be ordered this week." },
                            { "label": "B", "text": "The current system will be reactivated in June." },
                            { "label": "C", "text": "If you need assistance with this, please contact the IT department." },
                            { "label": "D", "text": "In that case, you must complete the installation yourself." }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t3-p3",
                "type": "EMAIL",
                "guidance": "Questions 139-142 refer to the following e-mail.",
                "content": "From: Hong Truong <htruong@jansenwebbfoundation.ca>\nSent: Friday, 16 November\nTo: Staff, Friends, and Stakeholders\nSubject: JWF's new budget director\n\nTo the JWF team and our community partners:\n\n___139___. I just want to let you know that Sofia Vargas ___140___ as the Jansen-Webb Foundation's new budget director. Ms. Vargas has a strong background in fiscal ___141___ within the nonprofit sector.\n\nMs. Vargas brings with her a wealth of experience in organizational finance, including most recently at The Lawton Children's Centre in Winnipeg. Ms. Vargas started her employment with us this morning, so please stop in and introduce ___142___ to her.\n\nBest,\n\nHong Truong\nCEO, Jansen-Webb Foundation",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "This is a request to be prompt." },
                            { "label": "B", "text": "Thanks for the generous contribution." },
                            { "label": "C", "text": "All are welcome here." },
                            { "label": "D", "text": "I hope that all are well." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "is hiring" },
                            { "label": "B", "text": "will be hired" },
                            { "label": "C", "text": "has been hired" },
                            { "label": "D", "text": "is being hired" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "referral" },
                            { "label": "B", "text": "administrator" },
                            { "label": "C", "text": "running" },
                            { "label": "D", "text": "management" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "yourself" },
                            { "label": "B", "text": "him" },
                            { "label": "C", "text": "them" },
                            { "label": "D", "text": "ourselves" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t3-p4",
                "type": "ADVERTISEMENT",
                "guidance": "Questions 143-146 refer to the following flyer.",
                "content": "Jamaica National Tourist Organization Offers Free Cultural Passes\n\nThe Jamaica National Tourist Organization (JAMTO) announces an exciting new program that provides free entry to a variety of cultural attractions. The program is sponsored by the JAMTO ___143___ the hotels and businesses listed on the back of this flyer. Together we ___144___ you to take advantage of some of the finest cultural and educational experiences that Jamaica has to offer. ___145___ attractions include the Caribbean National Gardens, Montego Bay Potters Gallery, Jamaican Music Experience, and many others.\n\nTo obtain your pass, visit our Web site at www.jamto.org/freepass or stop by any JAMTO office. One pass is valid for up to five people. ___146___.",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "despite" },
                            { "label": "B", "text": "instead of" },
                            { "label": "C", "text": "except for" },
                            { "label": "D", "text": "along with" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "invite" },
                            { "label": "B", "text": "invited" },
                            { "label": "C", "text": "may invite" },
                            { "label": "D", "text": "were inviting" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Early" },
                            { "label": "B", "text": "Past" },
                            { "label": "C", "text": "Affordable" },
                            { "label": "D", "text": "Participating" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "146",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Thank you for your order." },
                            { "label": "B", "text": "It can be used for three days." },
                            { "label": "C", "text": "The bus runs only on weekdays." },
                            { "label": "D", "text": "All major credit cards are accepted." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            }
        ]
    },
    {
        "testId": 4,
        "title": "ETS TOEIC Vol 4 - Test 4",
        "passages": [
            {
                "id": "p6-t4-p1",
                "type": "EMAIL",
                "guidance": "Questions 131-134 refer to the following e-mail.",
                "content": "To: Multiple Recipients\nFrom: Gold Star Bank <information@goldstarbank.co.in>\nSubject: Gold Star Bank App\nDate: 15 July\n\nDear Customer:\n\nHere at Gold Star Bank, we take our customers and their needs seriously. As some of you know, we ___131___ technical difficulties with our mobile app. ___132___. The trouble started on 14 July when our system went down because of a software bug. We expect the app to be up and running ___133___ the next twenty-four hours. ___134___ banking transactions can be done at any of our branch locations, and our automated cash machines are also working.\n\nWe apologize for any inconvenience.\n\nSincerely,\n\nRavi Chadda\nVice President of Customer Relations",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "to experience" },
                            { "label": "B", "text": "experiencing" },
                            { "label": "C", "text": "had experienced" },
                            { "label": "D", "text": "are experiencing" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Our engineers are working on this problem now." },
                            { "label": "B", "text": "The new app is easy to use, and it is available for free." },
                            { "label": "C", "text": "We have several openings for customer service representatives." },
                            { "label": "D", "text": "We are announcing the opening of a new Gold Star Bank location." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "if" },
                            { "label": "B", "text": "within" },
                            { "label": "C", "text": "as long as" },
                            { "label": "D", "text": "above all" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "134",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Unusually" },
                            { "label": "B", "text": "Eventually" },
                            { "label": "C", "text": "In the meantime" },
                            { "label": "D", "text": "As an example" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t4-p2",
                "type": "INFORMATION",
                "guidance": "Questions 135-138 refer to the following information.",
                "content": "Bethenie Industries guarantees that its products will function as ___135___ for at least one year from date of purchase. ___136___. This ___137___ applies only to products sold at Bethenie Industries stores and other licensed distributors. Products that are found to be defective may be shipped to our address for repair or exchange. Please note that products that are being returned because of damage should be shipped back to us, whenever possible, in their ___138___ packaging.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "advertising" },
                            { "label": "B", "text": "advertised" },
                            { "label": "C", "text": "advertisement" },
                            { "label": "D", "text": "advertises" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "For certain products this period may be extended." },
                            { "label": "B", "text": "Bethenie Industries stores are located in three countries." },
                            { "label": "C", "text": "An electronic receipt was generated at that time." },
                            { "label": "D", "text": "Product samples are available in stores." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "agenda" },
                            { "label": "B", "text": "sale" },
                            { "label": "C", "text": "requirement" },
                            { "label": "D", "text": "warranty" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "originally" },
                            { "label": "B", "text": "original" },
                            { "label": "C", "text": "origin" },
                            { "label": "D", "text": "originality" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t4-p3",
                "type": "NOTICE",
                "guidance": "Questions 139-142 refer to the following notice.",
                "content": "Healthy Foods Market has planned some exciting renovations in the coming weeks. During this time the store will remain open, but certain departments will be temporarily unavailable. Beginning on August 3, the refrigerated and frozen-food sections of the store ___139___ to be under construction. ___140___ food from these areas will be unavailable while work is being completed. Remodeling should be finished by August 9. Store managers are confident that the ___141___ days of inconvenience will be well worth it.\n\n___142___. At this event, there will be complimentary samples of some new food choices, including an expanded selection of nutritious, ready-to-eat lunch and dinner meals.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "schedules" },
                            { "label": "B", "text": "to be scheduled" },
                            { "label": "C", "text": "scheduling" },
                            { "label": "D", "text": "are scheduled" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "However" },
                            { "label": "B", "text": "Therefore" },
                            { "label": "C", "text": "Besides" },
                            { "label": "D", "text": "Likewise" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "few" },
                            { "label": "B", "text": "no" },
                            { "label": "C", "text": "less" },
                            { "label": "D", "text": "small" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The store must close for three days." },
                            { "label": "B", "text": "Customers must park in the recently added parking area." },
                            { "label": "C", "text": "Ice-cream products will be available during the remodeling." },
                            { "label": "D", "text": "A special celebration will take place on August 12." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t4-p4",
                "type": "ARTICLE",
                "guidance": "Questions 143-146 refer to the following article.",
                "content": "VANCOUVER (3 February)—Poalesco unveiled its annual Plant Showcase today. According to Poalesco spokesman Nacio Roja, this ___143___ offering highlights the company's latest efforts in botanical research. Many of these efforts result from customer surveys designed to gain an understanding of common challenges. ___144___. This year, the company's specialized nurseries have turned out drought-hardy breeds, such as the Goldtone Apple Tree. These varietals can withstand extended dry conditions without sustaining damage. \"Gardeners in desert ___145___ will appreciate the Goldtones in particular,\" noted Roja. \"And ___146___ might also be interested in our new Q7 rose bushes, which thrive in a similar climate.\"",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "daily" },
                            { "label": "B", "text": "weekly" },
                            { "label": "C", "text": "monthly" },
                            { "label": "D", "text": "yearly" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The company seeks out the most profitable sectors in agriculture." },
                            { "label": "B", "text": "The company interviews researchers from across the world." },
                            { "label": "C", "text": "The research and development team then works to develop varietals that address these difficulties." },
                            { "label": "D", "text": "Their extensive research produces some of the most flavorful plants on the market." }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "region" },
                            { "label": "B", "text": "regions" },
                            { "label": "C", "text": "regional" },
                            { "label": "D", "text": "regionally" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "he" },
                            { "label": "B", "text": "she" },
                            { "label": "C", "text": "we" },
                            { "label": "D", "text": "they" }
                        ],
                        "correctAnswer": "D",
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
                "content": "COPENHAGEN (25 May)—Odense Media announced today that initial sales of the latest version of its tablet, Virtusonic, have ___131___ the company's expectations. Company spokesperson Kerstin Vestergaard attributes the ___132___ sales to a number of factors. First, there is the tablet's high-quality case. ___133___. In addition, the Virtusonic has an adaptive screen brightness feature. This allows it to adjust automatically to less-than-ideal ___134___ conditions. Vestergaard believes that these characteristics make the Virtusonic a must-have for consumers.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "based" },
                            { "label": "B", "text": "surpassed" },
                            { "label": "C", "text": "invested" },
                            { "label": "D", "text": "progressed" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "progress" },
                            { "label": "B", "text": "impressing" },
                            { "label": "C", "text": "impressive" },
                            { "label": "D", "text": "impressed" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Customers must consider what the tablet will be used for." },
                            { "label": "B", "text": "The Virtusonic will be available in other colors next month." },
                            { "label": "C", "text": "Check stores for the best deals on the new device." },
                            { "label": "D", "text": "The protective shell ensures the durability of the device." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "lighting" },
                            { "label": "B", "text": "noise" },
                            { "label": "C", "text": "temperature" },
                            { "label": "D", "text": "wind" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t5-p2",
                "type": "MEMO",
                "guidance": "Questions 135-138 refer to the following memo.",
                "content": "To: All employees\nFrom: Marcus Sindhu, IT Director\nDate: June 1\nSubject: Web site maintenance\n\nPlease note that routine maintenance of the server will be performed this weekend, affecting the content of our company Web site. The server ___135___ down for approximately eight hours from 11 P.M. on Saturday, June 6, to 7 A.M. on Sunday, June 7. ___136___ this time, access to the Web site will be restricted, and e-mail delivery will be paused. ___137___. Once the server is back up, please take some time to explore the ___138___ features on the Web site. These include a new scheduler and a more user-friendly search tool.\n\nYour patience is greatly appreciated. Please direct any questions to me.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "is" },
                            { "label": "B", "text": "was" },
                            { "label": "C", "text": "will be" },
                            { "label": "D", "text": "had been" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "During" },
                            { "label": "B", "text": "Despite" },
                            { "label": "C", "text": "Following" },
                            { "label": "D", "text": "Prior to" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The work will be done during business hours." },
                            { "label": "B", "text": "A team of seven programmers will be hard at work." },
                            { "label": "C", "text": "All Web site operations will resume on Sunday morning." },
                            { "label": "D", "text": "Feel free to check your e-mail as needed." }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "safety" },
                            { "label": "B", "text": "updated" },
                            { "label": "C", "text": "portable" },
                            { "label": "D", "text": "temporary" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t5-p3",
                "type": "ARTICLE",
                "guidance": "Questions 139-142 refer to the following article.",
                "content": "Small Business Costs: An Overview for Beginners\n\nThere are two main kinds of costs. Variable costs are one kind; they include staff wages or the cost of supplies. ___139___ costs are considered fixed. These include such things as rent payments and property taxes.\n\nA third kind of cost is called an opportunity cost. You incur an opportunity cost whenever you make a decision to do one specific thing ___140___ choosing some alternative option. This cost refers to the lost opportunities you could have benefited from had you made a different choice. Careful consideration of potential opportunity costs is important. Ideally this should ___141___ decision making.\n\n___142___. You should consult a licensed accountant for a more complete understanding.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Any" },
                            { "label": "B", "text": "Both" },
                            { "label": "C", "text": "Other" },
                            { "label": "D", "text": "Those" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "except for" },
                            { "label": "B", "text": "just as" },
                            { "label": "C", "text": "rather than" },
                            { "label": "D", "text": "only if" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "eliminate" },
                            { "label": "B", "text": "influence" },
                            { "label": "C", "text": "replace" },
                            { "label": "D", "text": "automate" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "142",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The number of employees is continuing to fluctuate." },
                            { "label": "B", "text": "A sales manager controls employee commissions." },
                            { "label": "C", "text": "The business used to have a larger inventory." },
                            { "label": "D", "text": "There are other types of business costs as well." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t5-p4",
                "type": "ARTICLE",
                "guidance": "Questions 143-146 refer to the following article.",
                "content": "Morlon Home Goods Set to Open\n\nTISDALE (2 April)—Morlon Home Goods will open this Friday in a 130 square meter space on Waverly Road that was formerly ___143___ by Binkley's Market. The store features home décor items, such as lamps, wall art, and small furniture from around the globe, all at affordable prices. \"Morlon has a great variety of attractive items for the modern home. Our inventory changes ___144___. Patrons like to stop in often to see what is new,\" said Naoko Sasaki, the chain's marketing director. This is the first Morlon in the local area. ___145___. A grand opening ___146___ featuring free food, giveaways, and discount coupons will be held on Saturday, 13 April from 10:00 A.M. to 6:00 P.M.",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "occupation" },
                            { "label": "B", "text": "occupied" },
                            { "label": "C", "text": "occupy" },
                            { "label": "D", "text": "occupying" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "elsewhere" },
                            { "label": "B", "text": "afterward" },
                            { "label": "C", "text": "properly" },
                            { "label": "D", "text": "frequently" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The company has fourteen other stores around the country." },
                            { "label": "B", "text": "Profits increased 25 percent since last quarter." },
                            { "label": "C", "text": "Morlon's biggest competitor is Country Home." },
                            { "label": "D", "text": "Binkley's Market went out of business earlier this year." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "celebrates" },
                            { "label": "B", "text": "celebrating" },
                            { "label": "C", "text": "celebrate" },
                            { "label": "D", "text": "celebration" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
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
                "type": "LETTER",
                "guidance": "Questions 131-134 refer to the following letter.",
                "content": "9 October\n\nEva Archer, Owner\nArcher Café\n40 Thorpe Street\nPort Fairy VIC 3284\n\nDear Ms. Archer:\n\nAn inspection of your restaurant was conducted on 16 September by ___131___ of the Department of Health and Safety. ___132___. The purpose of the inspection was to confirm that your business is in compliance with all local regulations and that all ___133___ permits are up-to-date. The Department has determined that all regulations are being followed ___134___. Therefore, no further action is required on your part.\n\nSincerely,\n\nOliver Wu\nDepartment of Health and Safety",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "represents" },
                            { "label": "B", "text": "representative" },
                            { "label": "C", "text": "representatives" },
                            { "label": "D", "text": "representations" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Such visits are conducted once a year." },
                            { "label": "B", "text": "The restaurant will be closed for inspection." },
                            { "label": "C", "text": "Regulations are posted on our Web site." },
                            { "label": "D", "text": "The department opens at 9:00 A.M." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "meaningful" },
                            { "label": "B", "text": "fortunate" },
                            { "label": "C", "text": "persistent" },
                            { "label": "D", "text": "necessary" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "potentially" },
                            { "label": "B", "text": "satisfactorily" },
                            { "label": "C", "text": "inconsistently" },
                            { "label": "D", "text": "temporarily" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t6-p2",
                "type": "EMAIL",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: Certain Boutique <info@certainboutique.co.uk>\nFrom: Premium Thai Candles <orders@prethaican.com>\nDate: October 28\nSubject: Order status\n\nDear Customer,\n\nWe are delighted ___135___ you as a customer of Premium Thai Candles. Your wholesale order for 40 boxes of candles is being processed. ___136___.\n\nMost of your order is currently in stock and will arrive in the United Kingdom within ten days.\n\n___137___, please be advised that the rose-scented candles are on back order. They will be available three weeks from now, and we will ship them as soon as possible.\n\nWe sincerely hope that you are happy with your ___138___ order as a new customer of Premium Thai Candles.\n\nBest,\n\nSamaraya Sharma",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "welcome" },
                            { "label": "B", "text": "welcomed" },
                            { "label": "C", "text": "will welcome" },
                            { "label": "D", "text": "to welcome" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Save now on this limited-time offer." },
                            { "label": "B", "text": "Thank you for the purchase." },
                            { "label": "C", "text": "We have other boxes, too." },
                            { "label": "D", "text": "Our Web site is now available." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "However" },
                            { "label": "B", "text": "Given that" },
                            { "label": "C", "text": "As you can imagine" },
                            { "label": "D", "text": "At that point" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "proper" },
                            { "label": "B", "text": "usual" },
                            { "label": "C", "text": "initial" },
                            { "label": "D", "text": "rapid" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t6-p3",
                "type": "ARTICLE",
                "guidance": "Questions 139-142 refer to the following article.",
                "content": "GREENWAY (December 15)—The country's employment rose by over 40,000 jobs during October and November, ___139___ government statistics just released. The biggest increase was in the retail sector, with 9,000 new jobs created. The service sector came in ___140___ in overall activity with 8,400 added jobs. Professional and business services gained jobs as well. Health services and education each saw strong gains with 4,200 jobs. ___141___. By company size, medium-sized businesses of 50 to 499 employees hired the most workers. Large businesses of 500 or more employees hired 12,000 workers. \"The job market remains robust, and we ___142___ it to continue,\" said economist Keisha Hou.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "because" },
                            { "label": "B", "text": "whereas" },
                            { "label": "C", "text": "according to" },
                            { "label": "D", "text": "instead of" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "last" },
                            { "label": "B", "text": "second" },
                            { "label": "C", "text": "primary" },
                            { "label": "D", "text": "best" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Utilities stocks rose about 5 percent on average." },
                            { "label": "B", "text": "However, a new car manufacturing plant will open next month." },
                            { "label": "C", "text": "The only sector with zero growth was agriculture." },
                            { "label": "D", "text": "College enrollment increased by only 4 percent." }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "expect" },
                            { "label": "B", "text": "expecting" },
                            { "label": "C", "text": "expected" },
                            { "label": "D", "text": "expectant" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t6-p4",
                "type": "NOTICE",
                "guidance": "Questions 143-146 refer to the following notice.",
                "content": "Loffler Mobile Banking\n\nIn the coming weeks, Loffler Bank will be making upgrades to its mobile application to provide a more secure and user-friendly experience. Customers will now be able to view all their Loffler accounts simultaneously and enjoy ___143___ security through a fingerprint identification scan. ___144___, users may now customize their online dashboard to track their expenses and budgets.\n\nChanges can prove to be challenging for individuals, particularly in light of rapid technological advancement. ___145___. Therefore, should you ever need assistance ___146___ any of the features of our app, call us at 555-0133 or visit us online at www.lofflerbank.com/faq.",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "enhance" },
                            { "label": "B", "text": "enhanced" },
                            { "label": "C", "text": "enhancing" },
                            { "label": "D", "text": "enhancement" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Additionally" },
                            { "label": "B", "text": "Consequently" },
                            { "label": "C", "text": "Ultimately" },
                            { "label": "D", "text": "Conversely" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The new security measures aim to fix this problem." },
                            { "label": "B", "text": "We will be monitoring this development closely." },
                            { "label": "C", "text": "Our team members are well aware of this fact." },
                            { "label": "D", "text": "We sincerely apologize for this mistake." }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "over" },
                            { "label": "B", "text": "for" },
                            { "label": "C", "text": "by" },
                            { "label": "D", "text": "with" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
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
                "content": "To: All employees <staff@TFF.com>\nFrom: Walter C. Handy <wchandy@TFF.com>\nSubject: Sales Incentive Program\nDate: 15 November\n\nDear TFF Sales Team,\n\nI am writing to introduce you to a new, double-incentive program for the fourth quarter of this year! In addition to our standard cash bonus plan, sales associates will now have the opportunity ___131___ tickets to concerts, sporting events, and theater performances. This extra incentive is designed to help make this our greatest sales year ever. ___132___.\n\nMore ___133___ will be provided in the next few days. ___134___, if you have any questions about this program, contact the Human Resources Department.\n\nTo our continued success,\n\nWalter C. Handy, CEO",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "to earn" },
                            { "label": "B", "text": "earning" },
                            { "label": "C", "text": "earner" },
                            { "label": "D", "text": "having earned" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "132",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The fiscal year ends in October." },
                            { "label": "B", "text": "I am confident that we can achieve this goal." },
                            { "label": "C", "text": "Attendance at the event is mandatory." },
                            { "label": "D", "text": "TFF is looking to renovate its offices next year." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "supplies" },
                            { "label": "B", "text": "details" },
                            { "label": "C", "text": "products" },
                            { "label": "D", "text": "receipts" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Similarly" },
                            { "label": "B", "text": "Therefore" },
                            { "label": "C", "text": "Above all" },
                            { "label": "D", "text": "In the meantime" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t7-p2",
                "type": "INFORMATION",
                "guidance": "Questions 135-138 refer to the following information.",
                "content": "Accountarium: The quarterly magazine for accountants\n\nCall for Submissions\n\nOur fourth and final edition of the year will include a feature on accountants who have made a career shift. The financial service ___135___ that accountants gain are in demand even by those seeking to hire for positions outside of finance. ___136___, many professional accountants have been persuaded to take on other roles.\n\nIf you have made such a change in careers, we would like to hear about it. In no more than 800 words, describe your background in accounting and explain ___137___ it is useful in your new profession. Send this as an attachment to features@accountarium.com. ___138___. We regret that any submissions received after this date cannot be considered.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "industry" },
                            { "label": "B", "text": "skills" },
                            { "label": "C", "text": "needs" },
                            { "label": "D", "text": "fields" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Nevertheless" },
                            { "label": "B", "text": "Once again" },
                            { "label": "C", "text": "In addition" },
                            { "label": "D", "text": "Consequently" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "what" },
                            { "label": "B", "text": "whose" },
                            { "label": "C", "text": "how" },
                            { "label": "D", "text": "which" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "138",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The deadline for submissions is October 15." },
                            { "label": "B", "text": "We hire accountants at all stages of their careers." },
                            { "label": "C", "text": "This credential is widely recognized." },
                            { "label": "D", "text": "We thank you for your response received today." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t7-p3",
                "type": "ARTICLE",
                "guidance": "Questions 139-142 refer to the following testimonial.",
                "content": "For months, Yi Zhang, owner of Zhang Office Supplies, had been searching for a way to increase ___139___. Then, by sheer chance, he heard about an approach called Voice of the Customer (VOC). \"When I called Hsing Market Research I was really intrigued as the method was presented to me. The representative I spoke with convinced me to give ___140___ it a try.\" Mr. Zhang learned that VOC uses market research as an aid to designing targeted advertisements. Using the method, he first determined ___141___ what potential customers are concerned about and what they want when shopping for office supplies. Then he used candid quotes from the people who participated in his market research to create advertisements for his Web site. ___142___. \"Thanks to VOC,\" he says, smiling, \"my customer base has expanded like never before.\"",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "production" },
                            { "label": "B", "text": "capacity" },
                            { "label": "C", "text": "sales" },
                            { "label": "D", "text": "wages" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "anyone" },
                            { "label": "B", "text": "it" },
                            { "label": "C", "text": "mine" },
                            { "label": "D", "text": "those" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "exactly" },
                            { "label": "B", "text": "exact" },
                            { "label": "C", "text": "exacting" },
                            { "label": "D", "text": "exactness" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "142",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "He has been in business for eleven years." },
                            { "label": "B", "text": "He also used them in direct e-mail campaigns." },
                            { "label": "C", "text": "He also owns a local supermarket." },
                            { "label": "D", "text": "He plans to move to a smaller building." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t7-p4",
                "type": "NOTICE",
                "guidance": "Questions 143-146 refer to the following notice.",
                "content": "To help reduce traffic congestion and make parking easier, Newgrange Township will provide free bus rides to and from this year's Newgrange County Fair. ___143___ will be available from Friday, June 5, to Sunday, June 7. Planned pickup locations include the Rhinesberg Elementary School on Route 38 and the Newgrange Municipal Building on Main Street.\n\nBuses going to the fair will depart from these locations hourly from 8 A.M. to 5 P.M. Buses ___144___ the fairgrounds on the half hour, from 8:30 A.M. to 7:30 P.M. Please note that children under the age of 16 must be accompanied by an adult. ___145___. \n\nThe Newgrange County Fair Committee thanks our generous sponsors for providing buses and ___146___ this year. We hope you will join us at the Newgrange County Fair!",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Refreshments" },
                            { "label": "B", "text": "Information" },
                            { "label": "C", "text": "Transportation" },
                            { "label": "D", "text": "Entertainment" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "will leave" },
                            { "label": "B", "text": "have left" },
                            { "label": "C", "text": "leaving" },
                            { "label": "D", "text": "left" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Thank you for coming to this year's auto show." },
                            { "label": "B", "text": "There will be an increase in the cost of the service." },
                            { "label": "C", "text": "We hope you enjoyed your stay at the hotel." },
                            { "label": "D", "text": "No food or drinks are permitted on the buses." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "driven" },
                            { "label": "B", "text": "drivers" },
                            { "label": "C", "text": "drivable" },
                            { "label": "D", "text": "drive" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
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
                "type": "INFORMATION",
                "guidance": "Questions 131-134 refer to the following information.",
                "content": "Welcome to Dining-Ticket, the online service that delivers high-quality, delicious meals to your ___131___. To start ___132___ Dining-Ticket, simply enter your location to view your local delivery options. Next, filter the information by your desired price range, cuisine type, or by the restaurant name. Then, track your order as it is transported by a Dining-Ticket delivery person. ___133___. To enjoy your favorite restaurant fare from the ___134___ of your own home, try Dining-Ticket today!",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "doorstep" },
                            { "label": "B", "text": "station" },
                            { "label": "C", "text": "program" },
                            { "label": "D", "text": "market" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "usage" },
                            { "label": "B", "text": "using" },
                            { "label": "C", "text": "usable" },
                            { "label": "D", "text": "users" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Additional delivery staff are being recruited now." },
                            { "label": "B", "text": "Your order will be ready for in-store pickup within one hour." },
                            { "label": "C", "text": "Our training is thorough and fast." },
                            { "label": "D", "text": "It's as easy as that." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "comforted" },
                            { "label": "B", "text": "comforting" },
                            { "label": "C", "text": "comfortable" },
                            { "label": "D", "text": "comfort" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t8-p2",
                "type": "EMAIL",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: Rashida Willis <rwillis@pintaur.net>\nFrom: Customer Accounts <accounts@stauntonnaturalgas.com>\nDate: August 4\nSubject: Paperless billing\n\nDear Ms. Willis,\n\nThank you for selecting the paperless billing ___135___ for your Staunton Natural Gas account. ___136___ on August 20, you will receive your monthly statement electronically. To ensure receipt of your bill, please add our e-mail address to your list of contacts. At any time you may ___137___ to traditional paper billing by selecting it in your account settings.\n\n___138___. Your bill will still be due on the first of each month.\n\nSincerely,\n\nStaunton Natural Gas",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "value" },
                            { "label": "B", "text": "degree" },
                            { "label": "C", "text": "project" },
                            { "label": "D", "text": "option" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Until" },
                            { "label": "B", "text": "Only" },
                            { "label": "C", "text": "Beginning" },
                            { "label": "D", "text": "Even" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "return" },
                            { "label": "B", "text": "returnable" },
                            { "label": "C", "text": "to return" },
                            { "label": "D", "text": "returning" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "138",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "The account balance is now overdue." },
                            { "label": "B", "text": "Nothing else about your billing process has changed." },
                            { "label": "C", "text": "A company representative will contact you soon." },
                            { "label": "D", "text": "The account will be closed on the final day of the month." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t8-p3",
                "type": "MEMO",
                "guidance": "Questions 139-142 refer to the following memo.",
                "content": "To: Red Division Sales Team Members\nFrom: Matias Gama, Director\nSubject: Information\nDate: 22 November\nAttachment: Third-quarter results\n\nLet me commend all of you on your outstanding work this past quarter! See for yourselves in the attached report, which provides all the details. ___139___, there's always room for growth. That's why we're launching a new ___140___ program. It will be provided by an outside agency that has carefully ___141___ our needs. Although the learning modules will be offered across the organization, they are scheduled to begin in our division. ___142___. In the meantime, please carry on with your good work.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Similarly" },
                            { "label": "B", "text": "In that case" },
                            { "label": "C", "text": "Nevertheless" },
                            { "label": "D", "text": "Even if" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "radio" },
                            { "label": "B", "text": "exercise" },
                            { "label": "C", "text": "training" },
                            { "label": "D", "text": "benefits" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "analyzed" },
                            { "label": "B", "text": "analyzing" },
                            { "label": "C", "text": "to analyze" },
                            { "label": "D", "text": "been analyzed" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "142",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "This was our best quarter ever!" },
                            { "label": "B", "text": "I will let you know the dates soon." },
                            { "label": "C", "text": "Our clients are very pleased as well." },
                            { "label": "D", "text": "Registration is now full." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t8-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "From: Joanna Markian\nTo: All management staff\nSubject: Meeting with Adacorp leadership\nDate: 11 January\n\nDear Credulux colleagues,\n\nPlease be advised that our Wednesday Board of Directors meeting will focus on the ___143___ company merger with Adacorp Ltd. We will be joined by Adacorp's CEO and several managers as well as members of both companies' legal teams. ___144___.\n\nThe purpose of this meeting is to clarify the timeline of the merger process. ___145___ with questions for our Board of Directors will be given ample time to ask them. ___146___, I would like to request that all nonurgent agenda items be saved for our management team meeting in early February.\n\nSincerely,\n\nJoanna Markian",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "selected" },
                            { "label": "B", "text": "upcoming" },
                            { "label": "C", "text": "occasional" },
                            { "label": "D", "text": "assorted" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Please plan to attend this meeting in person." },
                            { "label": "B", "text": "Interns will report on their experience at Adacorp." },
                            { "label": "C", "text": "Instead, we will extend the meeting by one hour." },
                            { "label": "D", "text": "You will soon be notified of the new law." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Each other" },
                            { "label": "B", "text": "Yours" },
                            { "label": "C", "text": "Anyone" },
                            { "label": "D", "text": "Whoever" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "On the contrary" },
                            { "label": "B", "text": "For this reason" },
                            { "label": "C", "text": "Soon after" },
                            { "label": "D", "text": "For example" }
                        ],
                        "correctAnswer": "B",
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
                "type": "NOTICE",
                "guidance": "Questions 131-134 refer to the following notice.",
                "content": "Notice of Public Meeting\n\nThe Fallberg City Library will hold its monthly board meeting on August 19 at 6 P.M. Members of the community are encouraged to ___131___. The agenda, ___132___ available on the library's Web site, includes an information session about the proposed library building on the city's east side. Project Manager Andre Cazal will share design concepts for the building. ___133___, he will lead a discussion about how construction should be funded. There will be a period for public comment following the regular agenda items. ___134___.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "write" },
                            { "label": "B", "text": "attend" },
                            { "label": "C", "text": "donate" },
                            { "label": "D", "text": "volunteer" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "be" },
                            { "label": "B", "text": "being" },
                            { "label": "C", "text": "which is" },
                            { "label": "D", "text": "what can be" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "In addition" },
                            { "label": "B", "text": "As a result" },
                            { "label": "C", "text": "As mentioned" },
                            { "label": "D", "text": "In the meantime" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "New board members will be appointed in September." },
                            { "label": "B", "text": "The main branch will remain closed until further notice." },
                            { "label": "C", "text": "The project was canceled due to a lack of public funding." },
                            { "label": "D", "text": "Attendees will have an opportunity to share feedback at that time." }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t9-p2",
                "type": "EMAIL",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: All Sales Associates\nFrom: Dean Verdoorn\nDate: June 27\nSubject: Store improvement\n\nIt is very important to us at V and J Camping Supplies that we work together as a unit. Teamwork not only improves productivity but also leads to increased satisfaction for customers and employees. ___135___, we will be combining a team-building exercise with an in-store improvement plan that we believe will make employees, management, and customers happy.\n\nWe will be redesigning the walls in our stores to look like trees with hollow spaces ___136___ products can be displayed. These outdoor-themed shelves are actually easy-to-assemble modular wall units. Associates ___137___ the task to work cooperatively in teams to assemble them. ___138___. When it is completed, we will stock the shelves and have a fun grand reopening event for customers.\n\nMore information will be forthcoming.\n\nDean Verdoorn\nBuildings Director",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "For that reason" },
                            { "label": "B", "text": "For instance" },
                            { "label": "C", "text": "Unfortunately" },
                            { "label": "D", "text": "On the other hand" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "for" },
                            { "label": "B", "text": "that" },
                            { "label": "C", "text": "whatever" },
                            { "label": "D", "text": "where" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "are giving" },
                            { "label": "B", "text": "were given" },
                            { "label": "C", "text": "have to give" },
                            { "label": "D", "text": "will be given" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "138",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Customers have been informed." },
                            { "label": "B", "text": "This project should take one day." },
                            { "label": "C", "text": "An announcement will be made soon." },
                            { "label": "D", "text": "These units are available in several colors." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t9-p3",
                "type": "EMAIL",
                "guidance": "Questions 139-142 refer to the following e-mail.",
                "content": "To: Donald Haroway <dharoway@indomail.co.nz>\nFrom: Fix-It Plumbing\nDate: 4 August\nSubject: Service request\n\nMr. Haroway,\n\nThis e-mail serves as confirmation that Fix-It Plumbing will be able to ___139___ a gas line at your residence at 458 Heron Street. We ___140___ Bradley Burns, a certified and licensed master plumber, to do this on Monday, 10 August, between 10:00 A.M. and 11:00 A.M. It should take about an hour to put in the line. ___141___.\n\nShould you need to cancel the ___142___, please contact us right away. This is a particularly busy time of year, and our schedules are quite full.\n\nElna Dlamini\nFix-It Plumbing",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "fill" },
                            { "label": "B", "text": "install" },
                            { "label": "C", "text": "inspect" },
                            { "label": "D", "text": "examine" }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "would have sent" },
                            { "label": "B", "text": "were sending" },
                            { "label": "C", "text": "sent" },
                            { "label": "D", "text": "will send" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "141",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Then your gas stove will be ready to use." },
                            { "label": "B", "text": "Mr. Evans worked in your area last week." },
                            { "label": "C", "text": "Please call us by 9:30 A.M. the day before." },
                            { "label": "D", "text": "We do this job better than our competitors." }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "subscription" },
                            { "label": "B", "text": "membership" },
                            { "label": "C", "text": "celebration" },
                            { "label": "D", "text": "appointment" }
                        ],
                        "correctAnswer": "D",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t9-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "To: Store Managers\nFrom: Alain Mareau\nDate: 4 October\nSubject: Recycling Initiative\n\nHello All,\n\nAs one of Australia's top electronics retailers, we always ___143___ to maintain our standing as an industry leader. Earlier this year we began testing a new program that allowed our customers to bring their used electronic devices to our stores for recycling. In exchange they received discounts on their purchases. The initiative exceeded our expectations. ___144___.\n\nIn late November, all store managers will be sent ___145___ instructions on how to collect items and send them to our recycling partner. ___146___, we will be announcing the program to the public via social media and print ads beginning in mid-November.\n\nPlease anticipate further updates and instructions on this exciting initiative.\n\nSincerely,\n\nAlain Mareau\nVice President, Product Development",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "seek" },
                            { "label": "B", "text": "imply" },
                            { "label": "C", "text": "predict" },
                            { "label": "D", "text": "remember" }
                        ],
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "144",
                        "text": "Select the best sentence to complete the text.",
                        "options": [
                            { "label": "A", "text": "Electronics recycling is helpful for the environment." },
                            { "label": "B", "text": "Thus we are expanding this program to all our locations later this year." },
                            { "label": "C", "text": "Several customers had unfortunately failed to retain their receipts." },
                            { "label": "D", "text": "Businesses across the country already recycle many materials." }
                        ],
                        "correctAnswer": "B",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "detail" },
                            { "label": "B", "text": "details" },
                            { "label": "C", "text": "detailed" },
                            { "label": "D", "text": "detailing" }
                        ],
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "Instead" },
                            { "label": "B", "text": "Additionally" },
                            { "label": "C", "text": "However" },
                            { "label": "D", "text": "For example" }
                        ],
                        "correctAnswer": "B",
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
                "content": "Kray Villa Museum To Celebrate Grand Opening\\n\\nDEERFIELD (May 2)—The official opening of the Kray Villa Museum will take place on May 29 at 10 A.M. To mark the occasion, various festivities will be held throughout the day. ___131___. Visit www.krayvillamuseum.org for details.\\n\\nThe museum is housed in the imposing structure ___132___ was home to the once-influential Kray family beginning in the late 1800s. Having laid abandoned for the last 30 years, the property was purchased 2 years ago by the Deerfield Historical Society. Subsequently, the gardens were restored to appear as they did when the first generation of Krays moved into the villa.\\n\\n___133___, furnishings of the kind most likely used by the family are on display.\\n\\nDuring the museum's opening festivities, a live band ___134___ music that was popular in the late nineteenth century.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best sentence to complete the text.",
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
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
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
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
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
                        "text": "Select the best answer.",
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
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t10-p2",
                "type": "EMAIL",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: All employees\\nFrom: Cecil Radu, Information Technology Manager\\nDate: April 8\\nRe: Network alert\\n\\nWe are experiencing some problems with our local network. Some of the affected services include the ___135___ company Web site and the payroll database. We have also received information ___136___ network data becoming corrupted and files not saving properly. Therefore, to ensure that you do not lose any work, please avoid using the network this morning while my team addresses these ___137___. We anticipate that the systems will be fully functional by this afternoon. ___138___.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
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
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
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
                        "correctAnswer": "C",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
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
                        "text": "Select the best sentence to complete the text.",
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
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t10-p3",
                "type": "NOTICE",
                "guidance": "Questions 139-142 refer to the following notice.",
                "content": "April 2\\n\\nDear TP&G Customer,\\n\\nTakoradi Power & Gas (TP&G) is committed to providing every customer with dependable electricity service. To this end, we need to make some improvements to our ___139___. A maintenance crew will be upgrading transformers in your neighbourhood on or about 22 April, beginning at 10 A.M. ___140___, we will need to shut off the electricity to residences in your area from approximately 10 A.M. to 1 P.M. on that day. ___141___. We hope that by ___142___ this notice, any disruptions caused by the planned outage will be minimized.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
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
                        "text": "Select the best answer.",
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
                        "correctAnswer": "C",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best sentence to complete the text.",
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
                        "correctAnswer": "A",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
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
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t10-p4",
                "type": "EMAIL",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "To: hanna.kalita@netmail.co.uk\\nFrom: patientoutreach@ebmp.co.uk\\nDate: 12 June\\nSubject: Invitation to patient portal\\n\\nDear Ms. Kalita,\\n\\nEast Burberry Medical Practice has recently rolled out its patient portal, Burmed Connect. This service ___143___ to help you manage your healthcare at your convenience. You are invited to create an account to access the portal. Once enrolled, you will be able to book appointments with our doctors as well as view your medical records and request prescriptions. ___144___, you can use Burmed Connect to send messages to your doctor. Only you and your doctor will be able to see any messages exchanged between the two of you. ___145___.\\n\\nTo create an account, start by going to www.eastburberrymedicalpractice/patient-portal.co.uk. If you experience any difficulties with the ___146___ process, please call 20 5550 0169.\\n\\nSincerely,\\n\\nEmma Richardson, Patient Outreach Coordinator",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
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
                        "correctAnswer": "D",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
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
                        "correctAnswer": "A",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "145",
                        "text": "Select the best sentence to complete the text.",
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
                        "correctAnswer": "C",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
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
                        "correctAnswer": "B",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    }
];
