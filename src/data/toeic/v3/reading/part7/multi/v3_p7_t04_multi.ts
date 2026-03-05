import { PracticeSet } from '../types';

export const test4MultiData: PracticeSet[] = [
    {
        id: 'v3-p7-t4-multi-set11',
        setType: 'Double',
        vol: 3,
        questionRange: '176-180',
        passages: [
            {
                id: 'v3-p7-t4-multi-set11-p1',
                contextType: 'P1',
                docType: 'ADVERTISEMENT',
                header: {
                    title: 'Get Business Cards Custom Made by You'
                },
                content: [
                    'Loretti Printing Co. is proud to announce loretticardprint.com, our new online platform for creating customized business cards. While our customers can still place orders in person, as they\'ve done for nearly a decade, we now have a system that makes ordering business cards especially quick and easy. Choose from hundreds of easy-to-use templates, include your own text and images, and create professional-quality business cards within minutes.',
                    'We offer four different paper options:',
                    '| Type | Description | Minimum Order |\n| :--- | :--- | :--- |\n| Matte-M1 | Standard card stock, reduces glare | 50 cards |\n| Glossy-G4 | Shiny, enhances colors and details | 100 cards |\n| Textured-T3 | Unique grid-like pattern, interesting to the touch | 100 cards |\n| Metallic-M2 | Extra shiny, unique, captures one\'s attention | 200 cards |',
                    'Contact us before placing an online order if you\'d like us to send you a sample of each type of paper.'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set11-p2',
                contextType: 'P2',
                docType: 'EMAIL',
                header: {
                    to: 'hello@loretticardprint.com',
                    from: 'felix@thibaultautoworks.com',
                    date: 'Tuesday, May 22',
                    subject: 'Order 28191 - Follow-up',
                    attachment: 'Logo_autoworks'
                },
                content: [
                    'Thanks for pausing my order right away and explaining how to make the necessary changes. I\'m so glad I was able to get in touch before my business cards went off to print. It would have been such a shame to have printed 50 cards I can\'t use.',
                    'As I mentioned over the phone, I had accidentally uploaded an older version of my logo to the Web site. I\'ve since replaced it with the current one in the same file size, and I\'m hoping you can confirm that this change reflects the image I\'ve included here. If so, please go ahead and submit my order now.',
                    'Thank you.',
                    'Felix Thibault'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t4-multi-set11-q1',
                questionNo: 176,
                text: 'What is implied about Loretti Printing Co.?',
                options: {
                    A: 'It has a physical retail location.',
                    B: 'It is merging with a card company.',
                    C: 'It is seeking experienced designers.',
                    D: 'It has expanded its paper selection.'
                },
                correctAnswer: 'A',
                classification: 'P7_INFERENCE',
                translation: 'Loretti Printing Co.에 대해 암시된 것은?',
                explanation: '광고 초반부에서 "While our customers can still place orders in person(고객들이 여전히 직접 방문하여 주문할 수도 있지만)"이라고 했으므로, 오프라인 매장이 있음을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set11-q2',
                questionNo: 177,
                text: 'According to the advertisement, what can customers do on the company\'s Web site?',
                options: {
                    A: 'Give feedback about the company',
                    B: 'Design their own business cards',
                    C: 'Join a company mailing list',
                    D: 'Enter a code for a discount'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '광고에 따르면, 고객들은 회사 웹사이트에서 무엇을 할 수 있는가?',
                explanation: '웹사이트(loretticardprint.com)는 "our new online platform for creating customized business cards(개인 맞춤형 명함 제작을 위한 새 온라인 플랫폼)"라고 설명되어 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set11-q3',
                questionNo: 178,
                text: 'What type of card stock did Mr. Thibault most likely order?',
                options: {
                    A: 'Matte',
                    B: 'Glossy',
                    C: 'Textured',
                    D: 'Metallic'
                },
                correctAnswer: 'A',
                classification: 'P7_LINK',
                translation: 'Thibault 씨는 어떤 유형의 명함지를 주문했을 가능성이 가장 높은가?',
                explanation: '이메일 첫 번째 단락에서 "printed 50 cards I can\'t use(사용하지 못할 50장의 카드를 인쇄할 뻔했다)"고 언급했습니다. 광고의 표에서 최소 주문 수량이 50장인 용지는 Matte-M1뿐이므로 A가 정답입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set11-q4',
                questionNo: 179,
                text: 'Why did Mr. Thibault replace the logo on his order?',
                options: {
                    A: 'It was not aligned properly.',
                    B: 'It was an incorrect file size.',
                    C: 'It was for the wrong company.',
                    D: 'It was an outdated image.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: 'Thibault 씨가 주문서의 로고를 교체한 이유는?',
                explanation: '이메일 두 번째 단락에서 "accidentally uploaded an older version of my logo(실수로 이전 버전의 로고를 업로드했다)"고 했으므로, 시대에 뒤떨어진(outdated) 이미지인 D가 답입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set11-q5',
                questionNo: 180,
                text: 'In the e-mail, the word "reflects" in paragraph 2, line 3, is closest in meaning to',
                options: {
                    A: 'returns',
                    B: 'matches',
                    C: 'considers',
                    D: 'shines'
                },
                correctAnswer: 'B',
                classification: 'P7_VOCABULARY',
                translation: '이메일의 "reflects"와 의미상 가장 가까운 단어는?',
                explanation: '문맥상 "이 변경사항이 내가 동봉한 이미지와 일치하는지(matches) 확인해달라"는 의미입니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t4-multi-set12',
        setType: 'Double',
        vol: 3,
        questionRange: '181-185',
        passages: [
            {
                id: 'v3-p7-t4-multi-set12-p1',
                contextType: 'P1',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.greencityscreenwriters.org/workshopseries',
                    title: 'Green City Screenwriters\' Workshop'
                },
                content: [
                    'Green City Screenwriters\' Workshop (GCSW) provides aspiring and practicing screenwriters a place for interaction and exchange of ideas. For the last 25 years, GCSW has helped writers from all over the country develop creative projects.',
                    'Are you working on a movie script? Or do you have an idea for the next blockbuster film? Consider applying for the next series of classes at GCSW. We offer writing groups, staged readings, and seminars with guest speakers.',
                    '• The six class sessions begin on January 10 and are held every other Thursday.',
                    '• Each class meets from 7 P.M. to 9 P.M. at Green City Foundation for the Arts.',
                    '• Tuition is $500 in total and due by January 1.',
                    '• A limited amount of financial aid is available to those who qualify.',
                    '• Classes are capped at ten students.',
                    'TO APPLY:',
                    'Please send a 20-page writing sample (this can be from any genre of writing) and a 200-word autobiographical statement to apply@greencityscreenwriters.org. An instructor will respond to your inquiry if you are accepted.'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set12-p2',
                contextType: 'P2',
                docType: 'EMAIL',
                header: {
                    from: 'Joshua Hartzog <jzog.2@greencityscreenwriters.org>',
                    to: 'Terry Hampton <hampton100@webcentral.com>',
                    date: 'December 10',
                    subject: 'Upcoming screenwriting class series',
                    attachment: 'NSI form'
                },
                content: [
                    'Dear Mr. Hampton:',
                    'My name is Joshua Hartzog, and I am one of the instructors at Green City Screenwriters\' Workshop. I am pleased to inform you of your acceptance to our next series of classes. Our committee was impressed with your writing sample.',
                    'Here is a little about me: I have been a teacher at GCSW since it started. Additionally, I have written eight film scripts, including An Incredible Summer and Toast of the Town, both of which won National Writers\' Groups awards.',
                    'Please fill out the attached New Student Information form and return it to me either via e-mail or in person at the Green City Foundation for the Arts by January 1. I look forward to seeing you for our first class on January 10. Please pay attention to your inbox for your first assignment, which will be due by our first class meeting.',
                    'Thank you,',
                    'Joshua Hartzog'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t4-multi-set12-q1',
                questionNo: 181,
                text: 'According to the Web page, what is true regarding the series of screenwriting classes?',
                options: {
                    A: 'Morning classes are available.',
                    B: 'The deadline to apply is January 10.',
                    C: 'Class sizes are limited to ten students.',
                    D: 'Classes are held every weekday night.'
                },
                correctAnswer: 'C',
                classification: 'P7_DETAIL',
                translation: '웹페이지에 따르면, 시나리오 쓰기 강좌 시리즈에 대해 사실인 것은?',
                explanation: '웹페이지 하단에 "Classes are capped at ten students(수강생은 10명으로 제한된다)"고 명시되어 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set12-q2',
                questionNo: 182,
                text: 'What must be included with the application?',
                options: {
                    A: 'A deposit on the tuition fee',
                    B: 'A brief personal history',
                    C: 'A proof of residency form',
                    D: 'Two published screenplays'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '신청서에는 무엇이 포함되어야 하는가?',
                explanation: '신고 방법(TO APPLY) 섹션에서 "200-word autobiographical statement(200단어 분량의 자기소개서)"를 보내라고 했으므로 Brief personal history가 정답입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set12-q3',
                questionNo: 183,
                text: 'What is the purpose of Mr. Hartzog\'s e-mail?',
                options: {
                    A: 'To explain his numerous awards',
                    B: 'To outline the first class assignment',
                    C: 'To encourage a fellow writer to apply',
                    D: 'To respond to a student\'s application'
                },
                correctAnswer: 'D',
                classification: 'P7_MAIN_PURPOSE',
                translation: 'Hartzog 씨가 이메일을 쓴 목적은?',
                explanation: 'Hartzog 씨는 강사로서 신청자에게 "accepted to our next series of classes(다음 강좌 시리즈에 합격하셨음을 알려드리게 되어 기쁘다)"고 답신을 보낸 것입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set12-q4',
                questionNo: 184,
                text: 'What is indicated about Mr. Hartzog?',
                options: {
                    A: 'He heads the application committee.',
                    B: 'He has taught at GCSW for 25 years.',
                    C: 'Eight of his screenplays have won awards.',
                    D: 'Three of his screenplays take place in Green City.'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: 'Hartzog 씨에 대해 명시된 것은?',
                explanation: 'Hartzog 씨는 이메일에서 "GCSW가 시작된 이래로 교사로 일해왔다"고 했고, 웹페이지 상단에서 GCSW는 지난 25년 동안 작가들을 도와왔다고 했으므로, 그는 25년째 가르치고 있는 것입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set12-q5',
                questionNo: 185,
                text: 'What is Mr. Hampton asked to do?',
                options: {
                    A: 'Complete an attached form',
                    B: 'Send contact information',
                    C: 'Apply for financial aid',
                    D: 'Send a sample script'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: 'Hampton 씨는 무엇을 하라고 요청받았는가?',
                explanation: '이메일 세 번째 단락에서 "Please fill out the attached New Student Information form(첨부된 새 학생 정보 양식을 작성해달라)"고 요청했습니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t4-multi-set13',
        setType: 'Triple',
        vol: 3,
        questionRange: '186-190',
        passages: [
            {
                id: 'v3-p7-t4-multi-set13-p1',
                contextType: 'P1',
                docType: 'EMAIL',
                header: {
                    to: 'Jane McNally <jmcnally@aap.org.ie>',
                    from: 'Yoko Nara <ynara@insleyhotel.com.ie>',
                    date: '3 February',
                    subject: 'Vouchers'
                },
                content: [
                    'Hi, Ms. McNally.',
                    'The water heater servicing the kitchen at the hotel is broken. We cannot serve meals because there is no hot water for washing pots and dishes. Technicians are diligently working on this issue.',
                    'I am offering vouchers to all guests that can be used for breakfast or lunch at Sarah\'s Café next door. If there is no resolution by tomorrow, the evening\'s dinner will be moved to Maury\'s Restaurant. I have already discussed this with owner Maury Roebling, and he is preparing to welcome your professional group. Please accept my apologies for any inconvenience.',
                    'Thank you,',
                    'Yoko Nara'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set13-p2',
                contextType: 'P2',
                docType: 'REVIEW',
                header: {
                    title: '"The place was charming."',
                    rating: 4,
                    date: 'Stefan Nichols, 3 February'
                },
                content: [
                    'I enjoyed a soup and sandwich special at Sarah\'s Café this afternoon because I received a voucher from my hotel. I arrived just at noon and had to wait almost 25 minutes for a table. I would recommend visiting at a less busy time because the café is relatively small. Other than that, even if my meal had not been free, I would still recommend the café. The atmosphere is warm and inviting and their homemade soup is delicious.'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set13-p3',
                contextType: 'P3',
                docType: 'WEB_PAGE',
                header: {
                    url: 'https://www.app.org.ie/annualmeeting/schedule',
                    title: 'Association of Accounting Professionals Annual meeting—Scheduled events'
                },
                content: [
                    '**Association of Accounting Professionals**',
                    '**Annual meeting—Scheduled events**',
                    'Friday, 4 February',
                    '| Activity | Speaker/Details |\n| :--- | :--- |\n| **Guest speaker** 5:30 P.M., Room 213, Insley Hotel | Mr. Ian Bagley, chief financial officer at Colford International, will discuss "Old Concerns and Current Trends in the Accounting Profession." |\n| **Networking dinner** 7:00 P.M. Maury\'s Restaurant | Enjoy a gourmet dinner and relax with your colleagues at this popular eatery. |',
                    'Saturday, 5 February',
                    '| Activity | Description |\n| :--- | :--- |\n| **Job Fair** 11:00 A.M. to 5:00 P.M. | Looking for a new opportunity? The job fair is for you. Meet with representatives from companies around the region. Bring copies of your résumé. |\n| **Tour of Dublin** 1:00 P.M. to 4:00 P.M. | Visit some interesting sites in our host city. Wear comfortable shoes, as tour participants will cover approximately two miles. |'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t4-multi-set13-q1',
                questionNo: 186,
                text: 'Who most likely is Ms. McNally?',
                options: {
                    A: 'A receptionist',
                    B: 'A banquet chef',
                    C: 'An event organizer',
                    D: 'A café owner'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: 'McNally 씨는 누구이겠는가?',
                explanation: '이메일 첫 단락에서 호텔 직원인 Yoko Nara가 McNally 씨에게 단체 행사의 주최자임을 암시하며 불편 사항을 설명하는 것으로 보아, 이벤트 기획자(organizer)임을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set13-q2',
                questionNo: 187,
                text: 'What problem is described in the e-mail?',
                options: {
                    A: 'An event has been canceled.',
                    B: 'A hotel is closing.',
                    C: 'A repair bill was not paid on time.',
                    D: 'An industrial appliance is not working.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '이메일에서 설명된 문제는 무엇인가?',
                explanation: '이메일 첫 번째 단락에서 "The water heater servicing the kitchen at the hotel is broken(호텔 주방의 온수 장치가 고장 났다)"고 언급했습니다. 이는 산업용 기기의 고장을 의미합니다.'
            },
            {
                id: 'v3-p7-t4-multi-set13-q3',
                questionNo: 188,
                text: 'What can be concluded about Mr. Nichols?',
                options: {
                    A: 'He did not enjoy a meal.',
                    B: 'He arrived 25 minutes late for a luncheon.',
                    C: 'He is a guest at the Insley Hotel.',
                    D: 'He is a frequent customer at a restaurant.'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: 'Nichols 씨에 대해 결론내릴 수 있는 것은?',
                explanation: 'Stefan Nichols는 자신의 리뷰에서 "I received a voucher from my hotel(호텔에서 쿠폰을 받았다)"고 했습니다. 첫 번째 지문에서 Yoko Nara가 호텔 투숙객들에게 쿠폰을 준다고 했으므로, 그는 호텔 투숙객입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set13-q4',
                questionNo: 189,
                text: 'What does the event schedule indicate?',
                options: {
                    A: 'Tour participants will travel on foot.',
                    B: 'Entertainment will be provided in the lobby.',
                    C: 'Attendees must register for the job fair.',
                    D: 'All activities take place in the afternoon.'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '행사 일정표에 명시된 사실은?',
                explanation: '일정표의 Tour of Dublin 설명에 "tour participants will cover approximately two miles(도보로 약 2마일을 이동하게 될 것이다)"라는 표현이 있으므로 도보 이동을 의미합니다.'
            },
            {
                id: 'v3-p7-t4-multi-set13-q5',
                questionNo: 190,
                text: 'What is suggested about the networking dinner?',
                options: {
                    A: 'It will feature a talk by Mr. Bagley.',
                    B: 'It had to be postponed to a later time.',
                    C: 'It is intended for accounting students.',
                    D: 'It was moved from its original location.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '네트워킹 디너에 대해 암시된 것은?',
                explanation: '첫 번째 지문에서 "저녁 식사는 Maury\'s Restaurant로 옮겨질 것이다"라고 했고, 세 번째 지문의 일정표에도 저녁 식사 장소가 Maury\'s Restaurant로 명시되어 있습니다. 원래 호텔에서 식사해야 했으나 장소가 바뀌었음을 알 수 있습니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t4-multi-set14',
        setType: 'Triple',
        vol: 3,
        questionRange: '191-195',
        passages: [
            {
                id: 'v3-p7-t4-multi-set14-p1',
                contextType: 'P1',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.antiziointernational.com',
                    title: 'ANTIZIO International'
                },
                content: [
                    'Antizio International is a leading provider of designer ceramic, porcelain, and stone tile. Our products are suitable for both commercial and residential projects, and our mission is to be the best quality supplier in the region!',
                    'When you partner with Antizio International, you have access to the most respected brands in the industry. See our Products page for a list of our suppliers from all over the world.',
                    'This month\'s special: Ventana brand tiles',
                    '"Brittany" series ceramic tiles—Country red, violet, pink (15 percent off)',
                    'Taupe, tan, soft green (20 percent off)',
                    'Sale prices valid March 1–15'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set14-p2',
                contextType: 'P2',
                docType: 'EMAIL',
                header: {
                    to: 'Purchasing agents',
                    from: 'Antizio International',
                    date: 'March 24',
                    subject: 'Inventory update'
                },
                content: [
                    'Effective April 1, the following products will be discontinued.',
                    '| Manufacturer | Product line |\n| :--- | :--- |\n| Ventana | "Valentina"—all colors (entire line), "Brittany"—country red, violet, taupe |\n| Medoro | "Solidstone"—all colors, "Elementa"—black, gray |',
                    'Orders for these products cannot be accepted after April 1. Return of these products cannot be accepted after May 1.'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set14-p3',
                contextType: 'P3',
                docType: 'FORM',
                header: {
                    title: 'ANTIZIO International',
                    subtitle: '~~ Merchandise Return ~~'
                },
                content: [
                    'Please review our return policy before submitting this form. Returns must be made within 60 days of purchase and must be in original, unused condition.',
                    '**Return date:** May 12',
                    '**Customer name:** William Lin, WKL Contractors, Inc.',
                    '**Original invoice date:** March 20',
                    '**Item name:** Medoro brand-"Elementa" tile',
                    '**Color:** Gray',
                    '**Quantity:** 20 boxes **Price/box:** $70',
                    '**Reason for return:** Actual color does not match catalog image.',
                    '**Form of return requested:** [X] Refund [ ] Store credit'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t4-multi-set14-q1',
                questionNo: 191,
                text: 'In what industry does Antizio International do business?',
                options: {
                    A: 'Building materials',
                    B: 'Commercial advertising',
                    C: 'Computer manufacturing',
                    D: 'Fashion design'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: 'Antizio International은 어떤 업종에서 사업을 하는가?',
                explanation: '첫 번째 웹페이지 지문에서 "designer ceramic, porcelain, and stone tile"을 공급한다고 했으므로 건축 자재(Building materials) 분야입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set14-q2',
                questionNo: 192,
                text: 'What advantage does Antizio International offer to clients?',
                options: {
                    A: 'Its employees are bilingual.',
                    B: 'Its products have a good reputation.',
                    C: 'Its delivery fees are waived for frequent customers.',
                    D: 'Its payment plans are flexible.'
                },
                correctAnswer: 'B',
                classification: 'P7_INFERENCE',
                translation: 'Antizio International은 고객에게 어떤 이점을 제공하는가?',
                explanation: '웹페이지에서 "access to the most respected brands in the industry(업계에서 가장 평가가 좋은 브랜드들을 이용할 수 있다)"고 했으므로 품질 좋고 평판 좋은 제품을 제공함을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set14-q3',
                questionNo: 193,
                text: 'What color of the Brittany product line can be ordered after April 1 ?',
                options: {
                    A: 'Country red',
                    B: 'Violet',
                    C: 'Taupe',
                    D: 'Soft green'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '4월 1일 이후에도 Brittany 제품 라인의 어떤 색상을 주문할 수 있는가?',
                explanation: '두 번째 이메일 문서에서 4월 1일 자로 Brittany 라인의 Country red, violet, taupe 색상이 단종된다고 했습니다. 첫 번째 웹페이지를 보면 Brittany 시리즈와 함께 언급된 색상 중 Soft green은 단종 목록에 포함되어 있지 않으므로 4월 1일 이후에도 주문이 가능합니다.'
            },
            {
                id: 'v3-p7-t4-multi-set14-q4',
                questionNo: 194,
                text: 'Why is Mr. Lin returning merchandise?',
                options: {
                    A: 'He purchased more of the product than he needed.',
                    B: 'He is not pleased with the color of the product.',
                    C: 'The product sent to him was the wrong size.',
                    D: 'The product was damaged during shipping.'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: 'Lin 씨가 상품을 반품하는 이유는?',
                explanation: '반품 양식(세 번째 지문)의 사유(Reason for return) 섹션에 "Actual color does not match catalog image(실제 색상이 카탈로그 이미지와 맞지 않음)"라고 적혀 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set14-q5',
                questionNo: 195,
                text: 'Why will Mr. Lin\'s refund request most likely be rejected?',
                options: {
                    A: 'He bought an item that was custom designed.',
                    B: 'He failed to include proof of purchase.',
                    C: 'He returned a product after a deadline had expired.',
                    D: 'He forgot to ask for a return authorization number.'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: 'Lin 씨의 환불 요청이 거절될 가능성이 높은 이유는?',
                explanation: '신청서의 반품일은 5월 12일입니다. 하지만 두 번째 인벤토리 업데이트 이메일의 하단 공지에 따르면, 해당 단종 품목(Elementa-gray)의 반품은 "May 1(5월 1일)"까지만 가능하다고 되어 있습니다. 기한을 넘겼으므로 거절될 수 있습니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t4-multi-set15',
        setType: 'Triple',
        vol: 3,
        questionRange: '196-200',
        passages: [
            {
                id: 'v3-p7-t4-multi-set15-p1',
                contextType: 'P1',
                docType: 'EMAIL',
                header: {
                    to: 'All Staff',
                    from: 'Ronald Garrison',
                    date: 'April 20',
                    subject: 'Update'
                },
                content: [
                    'Dear Colleagues,',
                    'It\'s an exciting time here at Zikomo Solutions, and we have a lot to celebrate! Our company has shown tremendous growth over the past year. Just last month we exceeded our goals and conducted 25 customer service workshops for 18 different companies in the greater Groton area.',
                    'In response to our growth, we have added three new workshop presenters with significant customer service experience in their respective industries. Lisa Okoro will focus on the telemarketing industry. Caleb Patel will train those in fields related to medicine. And Alan Gorospe will specialize mainly in customer service for the technology industry. They will begin giving workshops during the first or second week of May. Please join me in welcoming these professionals to the Zikomo family.',
                    'Ronald Garrison',
                    'CEO, Zikomo Solutions'
                ]
            },
            {
                id: 'v3-p7-t4-multi-set15-p2',
                contextType: 'P2',
                docType: 'SCHEDULE',
                header: {
                    title: 'Zikomo Solutions',
                    subtitle: 'Tentative training schedule',
                    date: 'Week of May 2'
                },
                table_data: {
                    headers: ["Course Name", "Course Length", "Date", "Trainer", "Location"],
                    rows: [
                        ["Telephone Skills", "Half Day", "May 2", "Lisa Okoro", "Zikomo, Groton"],
                        ["Customer Service in a Digital World", "Full Day", "May 3", "Alan Gorospe", "Zikomo, Groton"],
                        ["Patient Relations for Hospital Professionals", "Full Day", "May 4", "To Be Determined", "Fitzer Medical Group, West Groton"],
                        ["Turn Tech Problems into Marketing Opportunities", "Half Day", "May 5", "Alan Gorospe", "Callipher Technologies, Fayetteville"]
                    ]
                },
                content: []
            },
            {
                id: 'v3-p7-t4-multi-set15-p3',
                contextType: 'P3',
                docType: 'EMAIL',
                header: {
                    to: 'Ronald Garrison <rgarrison@zikomosolutions.net>',
                    from: 'Jana Snyder <jsnyder@snyder.com>',
                    date: 'May 8',
                    subject: 'Recent workshops'
                },
                content: [
                    'Dear Mr. Garrison,',
                    'Several of my employees from Snyder Goods attended Zikomo training sessions on May 2 and 3. I wanted to provide feedback and ask a question. I think the half-day session could be extended to a full day, considering the interesting topic and skill of the excellent presenter. Conversely, the full day, while interesting, would be better condensed into a half day. Additionally, could you provide more parking options? Spaces for participants were full, and a number of our Snyder Goods employees had had to park in an expensive paid lot.',
                    'Sincerely,',
                    'Jana Snyder',
                    'Snyder Goods'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t4-multi-set15-q1',
                questionNo: 196,
                text: 'What is the purpose of the first e-mail?',
                options: {
                    A: 'To announce the hiring of new staff members',
                    B: 'To invite employees to a celebration',
                    C: 'To outline a plan for a company\'s growth',
                    D: 'To recognize high-performing employees'
                },
                correctAnswer: 'A',
                classification: 'P7_MAIN_PURPOSE',
                translation: '첫 번째 이메일의 목적은 무엇인가?',
                explanation: 'Ronald Garrison CEO가 쓴 이메일은 새로운 강사 3명(Lisa Okoro, Caleb Patel, Alan Gorospe)의 고용 소식을 알리고 이들을 환영해 달라는 것입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set15-q2',
                questionNo: 197,
                text: 'In what area does Zikomo Solutions specialize?',
                options: {
                    A: 'Computer manufacturing',
                    B: 'Accounting',
                    C: 'Transportation',
                    D: 'Customer service'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: 'Zikomo Solutions는 어떤 분야에 특화되어 있는가?',
                explanation: '첫 번째 지문에서 "conducted 25 customer service workshops"라고 지칭했으므로 고객 서비스(Customer service) 전문 회사임을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t4-multi-set15-q3',
                questionNo: 198,
                text: 'What does the schedule indicate about the workshops?',
                options: {
                    A: 'Several are held on the same day.',
                    B: 'Some are held at Zikomo\'s office.',
                    C: 'They typically last a full day.',
                    D: 'They are usually filled to capacity.'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '일정표에서 워크숍에 대해 알 수 있는 사실은?',
                explanation: '일정표를 보면 5월 2일과 3일에 열리는 강좌의 장소가 "Zikomo, Groton"으로 되어 있습니다. 이는 회사의 사무실에서 진행됨을 의미합니다.'
            },
            {
                id: 'v3-p7-t4-multi-set15-q4',
                questionNo: 199,
                text: 'Who is most qualified to lead the workshop on May 4?',
                options: {
                    A: 'Mr. Garrison',
                    B: 'Ms. Okoro',
                    C: 'Mr. Patel',
                    D: 'Mr. Gorospe'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '5월 4일에 워크숍을 진행하기에 가장 적합한 사람은?',
                explanation: '일정표에 따르면 5월 4일 강좌는 "Patient Relations for Hospital Professionals(병원 종사자를 위한 환자와의 관계)"입니다. 첫 번째 지문에서 Caleb Patel이 "medicine(의학)" 관련 분야를 담당한다고 했으므로 그가 적임자입니다.'
            },
            {
                id: 'v3-p7-t4-multi-set15-q5',
                questionNo: 200,
                text: 'What does Ms. Snyder suggest about her employees\' training experience?',
                options: {
                    A: 'The parking options were convenient.',
                    B: 'The May 2 session was too short.',
                    C: 'The topics were not interesting.',
                    D: 'The trainer arrived late.'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: 'Snyder 씨는 직원들의 교육 경험에 대해 무엇을 시사하는가?',
                explanation: 'Snyder 씨는 "I think the half-day session could be extended to a full day"라고 했는데, 그녀의 직원들이 참석한 세션 중 반일(half-day) 세션은 5월 2일 Lisa Okoro의 세션입니다. 따라서 2일 세션이 너무 짧았음을 시사합니다.'
            }
        ]
    }
];
