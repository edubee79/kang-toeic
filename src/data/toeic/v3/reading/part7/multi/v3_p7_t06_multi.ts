import { PracticeSet } from '../types';

export const test6MultiData: PracticeSet[] = [
    {
        id: 'v3-p7-t06-multi-set11',
        setType: 'Double',
        vol: 3,
        questionRange: '176-180',
        passages: [
            {
                id: 'v3-p7-t06-multi-set11-p1',
                contextType: 'P4',
                docType: 'REVIEW',
                header: {
                    title: 'Calbo Cuts',
                    rating: 3
                },
                content: [
                    'My visit to Calbo Cuts as a first-time customer was disappointing. When I arrived, the sign on the door said "Walk-ins welcome," but the receptionist bluntly told me that I would need to wait about an hour for my haircut, even though only one other customer was in the shop and three stylists were there. The quality of the work was fine; the haircut was fairly priced at just $15, and I was happy with my standard men\'s cut. The stylist, though, cut my hair without saying a word. I understand that not everyone likes to make small talk, but I found my stylist\'s total silence to be rude. When she finished my haircut, she removed the haircutting cape without even offering to blow-dry my hair.',
                    '— Martin Silver, Bishopville'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set11-p2',
                contextType: 'P1_CORR',
                docType: 'LETTER',
                header: {
                    sender_address: ['Calbo Cuts', '678 Seventh Street', 'Lamar, South Carolina 29069'],
                    recipient_address: ['Martin Silver', '51 Oak Street', 'Bishopville, South Carolina 29010'],
                    date: 'September 22',
                    from: 'Jenna Makowski\nOwner, Calbo Cuts'
                },
                content: [
                    'Dear Mr. Silver,',
                    'Thank you for taking the time to leave us a review. We always try to provide the best service available. If you feel that any of our staff were unaccommodating or unprofessional, then I would like to hear more details regarding your complaint. Feel free to call me directly at 803-555-0110.',
                    'At Calbo Cuts, we are serious about earning your continued business. I would be happy to schedule an appointment for you for a haircut and blow-dry with Marissa Lopez, as I believe she can provide you with the haircut experience you are looking for. In addition, on your next visit to Calbo Cuts, we would like to offer you a complimentary bottle of our all-natural shampoo, one of our best-selling products. We hope you will come back to Calbo Cuts in the future whenever you need a trim.',
                    'Best regards,',
                    'Jenna Makowski'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t06-multi-set11-q1',
                questionNo: 176,
                text: 'According to the review, what is suggested about Mr. Silver?',
                options: {
                    A: 'He was late for an appointment.',
                    B: 'He did not ask for a standard haircut.',
                    C: 'He has been to Calbo Cuts only once.',
                    D: 'He did not see a sign on the door.'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: '후기에 따르면, 실버 씨에 대해 암시된 것은?\n(A) 예약 시간에 늦었다.\n(B) 일반 이발을 요청하지 않았다.\n(C) 칼보 컷을 딱 한 번 방문했다.\n(D) 문에 있는 표지판을 보지 못했다.',
                explanation: '후기의 첫 문장에서 칼보 컷 첫 방문이 실망스러웠다(My visit to Calbo Cuts as a first-time customer was disappointing)고 평가한 후, 접수원(the receptionist bluntly told me)과 스타일리스트(I found my stylist’s total silence to be rude ~ she removed the haircutting cape without even offering to blow-dry my hair)의 응대 태도에 대해 불만을 표했다. 따라서 (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set11-q2',
                questionNo: 177,
                text: 'What aspect of his experience at Calbo Cuts disappointed Mr. Silver?',
                options: {
                    A: 'The price',
                    B: 'The location',
                    C: 'The shop hours',
                    D: 'The customer service'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '칼보 컷의 어떤 점이 실버 씨를 실망하게 했는가?\n(A) 가격\n(B) 위치\n(C) 영업시간\n(D) 고객 서비스',
                explanation: '후기의 첫 문장에서 칼보 컷 첫 방문이 실망스러웠다(My visit to Calbo Cuts as a first-time customer was disappointing)고 평가한 후, 접수원(the receptionist bluntly told me)과 스타일리스트(I found my stylist’s total silence to be rude ~ she removed the haircutting cape without even offering to blow-dry my hair)의 응대 태도에 대해 불만을 표했다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set11-q3',
                questionNo: 178,
                text: 'Why did Ms. Makowski suggest that Mr. Silver contact her?',
                options: {
                    A: 'To change an appointment',
                    B: 'To provide additional details',
                    C: 'To arrange a personal meeting',
                    D: 'To update contact information'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '마코브스키 씨는 왜 실버 씨가 자신에게 연락해야 한다고 제안했는가?\n(A) 예약 변경을 위해\n(B) 세부 사항을 추가로 제공하기 위해\n(C) 개인적인 만남을 주선하기 위해\n(D) 연락처를 업데이트하기 위해',
                explanation: '편지의 첫 번째 단락에서 마코브스키 씨는 실버 씨의 불만사항에 대해 더 자세히 듣고 싶다(I would like to hear more details regarding your complaint)고 했다. 즉, 불만에 대한 세부 사항을 추가로 제공해 달라는 요청으로 볼 수 있으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set11-q4',
                questionNo: 179,
                text: 'What is suggested about Ms. Lopez?',
                options: {
                    A: 'She takes a full hour to give a haircut.',
                    B: 'She does not accept walk-in customers.',
                    C: 'She is now the most popular stylist.',
                    D: 'She enjoys talking to customers.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '로페즈 씨에 대해 암시된 것은?\n(A) 한 시간을 꼬박 들여 이발을 한다.\n(B) 예약하지 않은 고객을 받지 않는다.\n(C) 현재 가장 인기 있는 스타일리스트다.\n(D) 고객에게 이야기하는 것을 좋아한다.',
                explanation: '마코브스키 씨는 편지의 두 번째 단락에서 로페즈 씨와의 이발 및 드라이 예약을 잡아주고 싶다(I would be happy to schedule an appointment for you for a haircut and blow-dry with Marissa Lopez)고 제안한 후, 실버 씨가 기대하는 이발 경험을 그녀가 제공해 줄 수 있을 것(she can provide you with the haircut experience you are looking for)이라고 덧붙였다. 실버 씨가 쓴 후기의 후반부를 보면, 모든 사람이 잡담을 좋아하는 것은 아니지만 자신을 맡은 스타일리스트가 말 한마디 하지 않는 것이 무례해 보였다(not everyone likes to make small talk, but I found my stylist’s total silence to be rude)고 쓰여 있다. 따라서 실버 씨에게 추천된 로페즈 씨가 고객과 이야기하는 것을 좋아한다고 추론할 수 있으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set11-q5',
                questionNo: 180,
                text: 'What will Mr. Silver receive for free on his next visit to Calbo Cuts?',
                options: {
                    A: 'A bottle of shampoo',
                    B: 'A haircut',
                    C: 'A blow-dry',
                    D: 'A new product'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '실버 씨는 다음 번 칼보 컷 방문 시 무엇을 무료로 얻겠는가?\n(A) 샴푸 한 병\n(B) 이발\n(C) 드라이\n(D) 신제품',
                explanation: '편지의 두 번째 단락에서 실버 씨가 다음 번에 칼보 컷을 방문할 때 천연 샴푸 한 병을 무료로 제공하겠다(on your next visit to Calbo Cuts, we would like to offer you a complimentary bottle of our all-natural shampoo)고 했으므로, (A)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t06-multi-set12',
        setType: 'Double',
        vol: 3,
        questionRange: '181-185',
        passages: [
            {
                id: 'v3-p7-t06-multi-set12-p1',
                contextType: 'P3_MEDI',
                docType: 'ARTICLE',
                header: {
                    headline: 'Business Happenings',
                    author: 'Harriet Mellors',
                    date: 'LONDON (1 April)'
                },
                content: [
                    'It is often hard for managers or team leaders to learn the best way to give feedback to employees and colleagues. Samia Bishara\'s new book, *Facts on Feedback* (Fox Mill Press), offers advice on this subject. Ms. Bishara is an expert consultant on company management problems and solutions. She advises managers to give facts and reactions, rather than advice and criticism.',
                    'Ms. Bishara will be speaking at Stonecliff Bookstore on Monday, 6 April at 2:00 P.M. For more details, visit www.stonecliff.co.uk.'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set12-p2',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Oscar Burton <oburton@harstonindustries.com.hk>',
                    from: 'Mi-Sook Pan <mpan@harstonindustries.kr>',
                    subject: 'Suggestion',
                    date: '10 April'
                },
                content: [
                    'Hello Oscar,',
                    'I understand that we have not yet booked all of the workshop leaders for our upcoming professional development program at the Onyx Hotel. I was in London a few days ago working on the Phillips account. While there, on 6 April, I had a chance to meet Samia Bishara and hear her speak on the topic of her new book, *Facts on Feedback*. I believe she would be an excellent choice to lead one of our workshops. I will gather further details about Ms. Bishara\'s background and availability and send that to you shortly. I look forward to joining you during Thursday\'s teleconference planning meeting.',
                    'Sincerely,',
                    'Mi-Sook Pan'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t06-multi-set12-q1',
                questionNo: 181,
                text: 'In the article, the word "hard" in paragraph 1, line 1, is closest in meaning to',
                options: {
                    A: 'durable',
                    B: 'difficult',
                    C: 'solid',
                    D: 'true'
                },
                correctAnswer: 'B',
                classification: 'P7_VOCABULARY',
                translation: '기사의 첫 번째 단락, 첫 번째 줄에 쓰인 "hard"와 의미가 가장 가까운 단어는?\n(A) 내구성이 있는\n(B) 어려운\n(C) 견고한\n(D) 사실인',
                explanation: '‘hard’를 포함한 부분은 ‘피드백을 주는 최선의 방법을 배우는 건 종종 어려운 일이다(It is often hard ~ to learn the best way to give feedback)’라는 의미로 해석되는데, 여기서 hard는 ‘어려운’이라는 뜻으로 쓰였다. 따라서 (B) difficult가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set12-q2',
                questionNo: 182,
                text: 'What is a purpose of the article?',
                options: {
                    A: 'To announce an upcoming event',
                    B: 'To report on a new book publisher',
                    C: 'To advertise a consultant\'s services',
                    D: 'To promote a new bookstore'
                },
                correctAnswer: 'A',
                classification: 'P7_PURPOSE',
                translation: '기사를 쓴 목적 중 하나는?\n(A) 곧 있을 행사를 알리기 위해\n(B) 새로운 출판사에 관해 보고하기 위해\n(C) 상담가의 서비스를 광고하기 위해\n(D) 새 서점을 홍보하기 위해',
                explanation: '기사의 첫 번째 단락에서는 비샤라 씨의 새 저서(Samia Bishara’s new book, Facts on Feedback)를 소개했고, 두 번째 단락에서는 비샤라 씨가 4월 6일에 스톤클리프 서점에서 강연을 할 예정(Ms. Bishara will be speaking at Stonecliff Bookstore on ~ 6 April)이라고 했다. 따라서 기사의 목적 중 하나가 곧 있을 행사를 알리기 위함이라고 볼 수 있으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set12-q3',
                questionNo: 183,
                text: 'What is suggested about Ms. Pan in the e-mail?',
                options: {
                    A: 'She has returned from a business trip.',
                    B: 'She is interested in writing a book.',
                    C: 'She is not able to attend an event.',
                    D: 'She plans to move to London.'
                },
                correctAnswer: 'A',
                classification: 'P7_INFERENCE',
                translation: '이메일에서 판 씨에 대해 암시된 것은?\n(A) 출장에서 돌아왔다.\n(B) 책 집필에 관심이 있다.\n(C) 행사에 참석할 수 없다.\n(D) 런던으로 이사할 계획이다.',
                explanation: '이메일의 초반부에서 판 씨가 며칠 전 필립스 사 업무를 보며 런던에 있었다(I was in London a few days ago working on the Phillips account)고 했으므로, 판 씨가 출장에서 돌아왔다고 추론할 수 있다. 따라서 (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set12-q4',
                questionNo: 184,
                text: 'Where did Ms. Pan most likely meet Ms. Bishara?',
                options: {
                    A: 'At a hotel',
                    B: 'At a planning meeting',
                    C: 'At an accounting office',
                    D: 'At a bookstore'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '판 씨는 비샤라 씨를 어디서 만났겠는가?\n(A) 호텔\n(B) 기획 회의\n(C) 회계사무소\n(D) 서점',
                explanation: '이메일의 초반부에서 판 씨는 4월 6일에 비샤라 씨를 만나 새 저서를 주제로 한 강연을 들을 수 있었다(on 6 April, I had a chance to meet Samia Bishara and hear her speak on the topic of her new book)고 했다. 기사의 두 번째 단락을 보면, 비샤라 씨가 4월 6일에 스톤클리프 서점에서 강연을 할 예정(Ms. Bishara will be speaking at Stonecliff Bookstore on Monday, 6 April)이라고 되어 있으므로, 판 씨가 비샤라 씨를 서점에서 만났다고 추론할 수 있다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set12-q5',
                questionNo: 185,
                text: 'What does Ms. Pan plan to give to Mr. Burton?',
                options: {
                    A: 'A budget proposal',
                    B: 'A conference program',
                    C: 'Some information about a business consultant',
                    D: 'Documents related to the Phillips account'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '판 씨는 버튼 씨에게 무엇을 줄 계획인가?\n(A) 예산 제안서\n(B) 회의 프로그램\n(C) 사업 상담가에 대한 정보\n(D) 필립스 고객에 관한 문서',
                explanation: '이메일의 후반부에서 비샤라 씨의 경력과 시간이 되는지 여부에 대해 정보를 더 모아서 보내겠다(I will gather further details about Ms. Bishara’s background and availability and send that to you)고 했다. 기사의 첫 번째 단락에서 비샤라 씨가 회사 경영 문제 및 해결책 관련 전문 상담가라고 되어 있으므로, (C)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t06-multi-set13',
        setType: 'Triple',
        vol: 3,
        questionRange: '186-190',
        passages: [
            {
                id: 'v3-p7-t06-multi-set13-p1',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    from: 'Michal Zezula <m.zezula@gerlach-kozey.com.au>',
                    to: 'Dang Thi Lien <dtlien@hermiston.com.au>',
                    date: 'Thursday, 21 September, 1:44 P.M.',
                    subject: 'Conference dinner'
                },
                content: [
                    'Dear Ms. Lien,',
                    'I am looking forward to meeting you at the Business Leadership Conference in Sydney next month. I am delighted that you will be part of our panel, and I am looking forward to hearing you discuss your paper on local government initiatives.',
                    'As the panel chair, I am organizing a dinner for all the speakers immediately following the panel. Since you are locally based, perhaps you have insights about the places listed on the conference Web site? I am leaning towards Victoria Grill because it overlooks the harbor, but I would like to hear your opinion. Any place that can accommodate a large group would be especially desirable. I would visit these myself, but I am not arriving in Sydney until the day of our panel. I am hoping to make all arrangements by 1 October.',
                    'Best wishes,',
                    'Michal Zezula'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set13-p2',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.blcsydney.com.au/thingstodo',
                    navItems: ['Schedule', 'Accommodations', 'Map', 'Contacts', 'Things to Do']
                },
                content: [
                    '**Restaurant Recommendations**',
                    'All of these restaurants are located within walking distance of the conference site. Given the anticipated activity, reservations are recommended, especially for large groups.',
                    '• **Bombay Palace**: Contemporary Indian cuisine. Large menu with several vegetarian options. Price: Moderate.',
                    '• **Victoria Grill**: Innovative Australian cooking. Located on the top floor of the Hesiod Building, overlooking the spectacular Sydney Harbor. Price: Expensive.',
                    '• **Amir\'s Kitchen**: Lebanese cuisine with a modern flair. Private rooms available; ideal for parties and group events. Price: Inexpensive.'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set13-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    from: 'Dang Thi Lien <dtlien@hermiston.com.au>',
                    to: 'Michal Zezula <m.zezula@gerlach-kozey.com.au>',
                    date: 'Friday, 22 September, 10:02 A.M.',
                    subject: 'RE: Conference dinner'
                },
                content: [
                    'Dear Mr. Zezula,',
                    'I am looking forward to meeting you as well. As far as the recommended restaurants, I have been to the three listed on the Web site. They all have good food and a pleasant ambience. Victoria Grill is somewhat pricey and in fact would require a taxi ride from the conference site. In my opinion, Bombay Palace is likely the best for a group of our size. It is located right next to my office building. If you like, I could stop by after work and inquire about a dinner reservation at Bombay Palace on 6 October.',
                    'Sincerely,',
                    'Dang Thi Lien'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t06-multi-set13-q1',
                questionNo: 186,
                text: 'What is the purpose of the first e-mail?',
                options: {
                    A: 'To request advice about an event',
                    B: 'To give information about tourist sites',
                    C: 'To propose a topic for a paper',
                    D: 'To invite business leaders to a conference'
                },
                correctAnswer: 'A',
                classification: 'P7_PURPOSE',
                translation: '첫 번째 이메일을 쓴 목적은?\n(A) 행사에 대한 조언을 요청하려고\n(B) 관광 명소에 대한 정보를 주려고\n(C) 논문 주제를 제안하려고\n(D) 업체 대표들을 회의에 초청하려고',
                explanation: '첫 번째 이메일의 두 번째 단락에서 리엔 씨가 회의 장소 인근에 근거지를 두고 있으니 회의 웹사이트에 열거된 식당에 대해 잘 알고 있을 것 같다(Since you are locally based, perhaps you have insights about the places listed on the conference Web site)며 장소를 결정하기 전에 의견을 듣고 싶다(I would like to hear your opinion)고 했다. 따라서 리엔 씨에게 행사 관련 식사 장소에 대한 조언을 구하고자 이메일을 썼다고 볼 수 있으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set13-q2',
                questionNo: 187,
                text: 'What is Ms. Lien\'s role in the conference?',
                options: {
                    A: 'Chairing a panel',
                    B: 'Giving a presentation',
                    C: 'Contacting catering companies',
                    D: 'Staffing an information desk'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '회의에서 리엔 씨의 역할은?\n(A) 토론단 의장직 맡기\n(B) 발표하기\n(C) 케이터링 업체에 연락하기\n(D) 안내 데스크에서 일하기',
                explanation: '첫 번째 이메일의 첫 단락을 보면, 리엔 씨가 비즈니스 리더십 회의에서 토론단의 일원(you will be part of our panel)으로서 지방 자치 정부 계획 관련 논문에 대한 이야기를 할 것(discuss your paper on local government initiatives)임을 알 수 있다. 따라서 (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set13-q3',
                questionNo: 188,
                text: 'Why is Mr. Zezula interested in dining at Victoria Grill?',
                options: {
                    A: 'It offers vegetarian options.',
                    B: 'It offers private rooms.',
                    C: 'It is open relatively late.',
                    D: 'It has an attractive view.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '제줄라 씨가 빅토리아 그릴에서 식사하고 싶어 하는 이유는?\n(A) 채식 식단을 제공한다.\n(B) 개별실을 제공한다.\n(C) 비교적 늦게 문을 연다.\n(D) 멋진 전망을 갖추고 있다.',
                explanation: '첫 번째 이메일의 두 번째 단락을 보면, 제줄라 씨는 빅토리아 그릴로 마음이 기울고 있다(I am leaning towards Victoria Grill)고 한 후, 항구가 내려다보인다(it overlooks the harbor)는 이유를 덧붙였다. 따라서 멋진 전망 때문에 그곳에서 식사하길 원한다고 볼 수 있으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set13-q4',
                questionNo: 189,
                text: 'When is the panel scheduled to take place?',
                options: {
                    A: 'On September 21',
                    B: 'On September 22',
                    C: 'On October 1',
                    D: 'On October 6'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '토론은 언제 이뤄질 예정인가?\n(A) 9월 21일\n(B) 9월 22일\n(C) 10월 1일\n(D) 10월 6일',
                explanation: '첫 번째 이메일의 두 번째 단락에서 제줄라 씨가 토론회 직후에 모든 연사들을 위한 저녁 식사를 준비하고 있다(I am organizing a dinner for all the speakers immediately following the panel)고 했으므로, 토론회와 저녁 식사가 같은 날 진행될 예정임을 알 수 있다. 두 번째 이메일의 후반부를 보면, 리엔 씨는 제줄라 씨가 원하면 10월 6일 봄베이 팰리스 저녁 식사 예약에 대해 자신이 문의해 볼 수 있다(If you like, I could ~ inquire about a dinner reservation at Bombay Palace on 6 October)고 회신했다. 즉, 10월 6일에 토론회 및 저녁 식사 일정이 잡혀 있는 것이므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set13-q5',
                questionNo: 190,
                text: 'What information on the conference Web site does Ms. Lien think is inaccurate?',
                options: {
                    A: 'Bombay Palace\'s ability to host large groups',
                    B: 'Victoria Grill\'s distance from the conference site',
                    C: 'The price of food at the restaurants',
                    D: 'The need to make dinner reservations'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '리엔 씨는 회의 웹사이트의 어떤 정보가 잘못됐다고 생각하는가?\n(A) 봄베이 팰리스의 대규모 단체 접객 가능 여부\n(B) 회의장에서 빅토리아 그릴까지의 거리\n(C) 음식점의 요리 가격\n(D) 저녁 식사 예약 필요성',
                explanation: '웹페이지의 초반부를 보면 음식점 세 곳 모두 회의장에서 걸어서 갈 수 있는 거리에 있다(All of these restaurants are located within walking distance of the conference site)고 되어 있다. 하지만 두 번째 이메일의 중반부에서 리엔 씨가 세 곳 중 빅토리아 그릴은 회의장에서 택시를 타고 가야 한다(Victoria Grill ~ would require a taxi ride from the conference site)고 했으므로, (B)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t06-multi-set14',
        setType: 'Triple',
        vol: 3,
        questionRange: '191-195',
        passages: [
            {
                id: 'v3-p7-t06-multi-set14-p1',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    from: 'amartin@netforceevents.com',
                    to: 'mpresser@gerenukofficedesign.com',
                    date: 'September 3',
                    subject: 'Chairs (Item #10405)'
                },
                content: [
                    'Dear Mr. Presser,',
                    'As a result of our company\'s expansion last spring, we moved into a larger facility and needed new furniture. At that time we ordered 22 office chairs from Gerenuk Office Design (Item #10405—Blue). Within two months, many of the chairs were broken and unusable. We were initially happy with the replacement chairs that you delivered free of charge, but some of those have now broken as well.',
                    'I am hereby requesting that you replace all 22 with chairs from your new Executive line (Item #10612) at no extra charge—assuming that they are better quality. These are comparable in price to the original model we purchased. If you are unable to do this, we will be forced to look elsewhere for our furnishing needs.',
                    'Alexandra Martin, Office Administrator\nNetforce Events'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set14-p2',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.hansons-office.com/ergonomic-task-chair',
                    navItems: ['Home', 'Products', 'Customer Help', 'About Us']
                },
                content: [
                    '**HANSON’S: YOUR ONE-STOP SHOP FOR OFFICE SUPPLIES**',
                    '**Ergonomic Task Chair**',
                    'The Ergonomic Task Chair is our best-selling swivel model. It is specially designed to promote good posture and avoid discomfort, and therefore it is perfect for those long workdays at the office. Best of all, it is built to last and comes with a lifetime warranty. The model is available in four attractive colors.',
                    '$159 per unit',
                    '• Black, Item Code 429BL\n• Blue, Item Code 469BB\n• Green, Item Code 490GN\n• Red, Item Code 459RD'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set14-p3',
                contextType: 'P5_FORM',
                docType: 'TABLE',
                header: {
                    title: 'HANSON’S: YOUR ONE-STOP SHOP FOR OFFICE SUPPLIES',
                    subtitle: 'INVOICE',
                    date: 'September 10'
                },
                content: [
                    '**Client**: Netforce Events\n**Address**: 342 Collard Boulevard, Hampton, ME'
                ],
                table_data: {
                    headers: ['Item', 'Quantity', 'Unit Price', 'Total'],
                    rows: [
                        ['Ergonomic Task Chair,\nItem 490GN', '22', '$159.00', '$3,498.00']
                    ],
                    summary: 'Subtotal $3,498.00 | Discount for first-time customers -$159.00 | Total $3,339.00'
                },
                footer: 'Please contact customerhelp@hansons-office.com if you have any questions.'
            }
        ],
        questions: [
            {
                id: 'v3-p7-t06-multi-set14-q1',
                questionNo: 191,
                text: 'What is true about Netforce Events?',
                options: {
                    A: 'It recently moved into another building.',
                    B: 'It manufactures furniture.',
                    C: 'It has just opened a new store.',
                    D: 'It was founded last spring.'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '넷포스 이벤츠에 대해 사실인 것은?\n(A) 최근 다른 건물로 이전했다.\n(B) 가구를 제조한다.\n(C) 새 매장을 막 열었다.\n(D) 지난봄에 창립됐다.',
                explanation: '이메일의 초반부를 보면 지난봄에 회사가 확장되면서 더 큰 시설로 이전했다(As a result of our company’s expansion last spring, we moved into a larger facility)고 했으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set14-q2',
                questionNo: 192,
                text: 'What is the purpose of the e-mail?',
                options: {
                    A: 'To complain about available chair colors',
                    B: 'To request that some chairs be repaired',
                    C: 'To place an office stationery order',
                    D: 'To ask that some furniture be replaced'
                },
                correctAnswer: 'D',
                classification: 'P7_PURPOSE',
                translation: '이메일을 쓴 목적은?\n(A) 가능한 의자 색상에 대해 불만을 제기하려고\n(B) 의자 일부의 수리를 요청하려고\n(C) 사무용 문구 주문을 넣으려고\n(D) 가구의 교체를 요청하려고',
                explanation: '마틴 씨는 이메일을 통해 구매한 지 얼마 되지 않아 자꾸 고장 나는 의자 22개를 추가 비용 없이 새 모델로 교체해 줄 것을 요청(I am hereby requesting that you replace all 22 with chairs from your new Executive line ~ at no extra charge)하고 있다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set14-q3',
                questionNo: 193,
                text: 'What is stated about the Ergonomic Task Chair?',
                options: {
                    A: 'It is reasonably priced.',
                    B: 'It is a popular model.',
                    C: 'It comes with a limited warranty.',
                    D: 'It is made from a washable fabric.'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '인체공학 업무용 의자에 대해 명시된 것은?\n(A) 가격이 적당하다.\n(B) 인기 있는 모델이다.\n(C) 한정 품질 보증서가 주어진다.\n(D) 물빨래가 가능한 직물로 만들어졌다.',
                explanation: '웹페이지의 초반부를 보면 인체공학적 업무용 의자가 가장 잘 팔리는 회전식 모델(The Ergonomic Task Chair is our best-selling swivel model)이라고 했으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set14-q4',
                questionNo: 194,
                text: 'What is implied about Gerenuk Office Design?',
                options: {
                    A: 'It offers a discount for first-time customers.',
                    B: 'It did not agree to Ms. Martin\'s request.',
                    C: 'Its Executive chairs sell out quickly.',
                    D: 'It is under new management.'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '게레누크 오피스 디자인에 대해 암시된 것은?\n(A) 최초 고객에게 할인을 제공한다.\n(B) 마틴 씨의 요청에 동의하지 않았다.\n(C) 경영진 의자가 빠르게 품절된다.\n(D) 새 경영진 체제 하에 있다.',
                explanation: '마틴 씨는 이메일의 마지막 부분에서 추가 비용 없는 모델 교체가 불가능하다면 필요한 가구를 다른 곳에서 알아보겠다(If you are unable to do this, we will be forced to look elsewhere)고 했다. 하지만 세 번째 지문인 청구서를 보면 마틴 씨의 회사인 넷포스 이벤츠가 게레누크 사가 아닌 핸슨 사(HANSON’S)에서 이전에 주문했던 것과 같은 수의 의자를 주문한 것을 확인할 수 있다. 따라서 게레누크 오피스 디자인에서 마틴 씨의 요청을 거절했음을 추론할 수 있으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set14-q5',
                questionNo: 195,
                text: 'What color are the chairs Netforce Events ordered from Hanson\'s?',
                options: {
                    A: 'Black',
                    B: 'Blue',
                    C: 'Green',
                    D: 'Red'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '넷포스 이벤츠가 Hanson\'s에서 주문한 의자 색상은?\n(A) 검은색\n(B) 파란색\n(C) 녹색\n(D) 빨간색',
                explanation: '세 번째 지문인 청구서를 보면 제품 490GN(Item 490GN)을 주문했음을 알 수 있다. 두 번째 지문인 웹페이지에서 490GN은 녹색(Green, Item Code 490GN)임을 확인할 수 있으므로, (C)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t06-multi-set15',
        setType: 'Triple',
        vol: 3,
        questionRange: '196-200',
        passages: [
            {
                id: 'v3-p7-t06-multi-set15-p1',
                contextType: 'P2_OFFI',
                docType: 'NOTICE',
                header: {
                    title: 'KLOOF PHOTOGRAPHY EVENT'
                },
                content: [
                    'On 21 November, all Kloof employees are invited to a celebration to commemorate our first five years in business. Please attend our company picnic featuring a traditional braai as well as live music and competitive games. The company will provide meats fresh off the grill prepared in the traditional braai style. Beverages will also be provided. In exchange, we ask that attendees either plan to bring a side dish to share or volunteer to join the setup crew. To make the event run smoothly, we will need at least two people to help with setup.',
                    'Our gathering will convene from 1 to 8 P.M. on the patio of our headquarters building. If you plan to attend, please open the sign-up sheet saved on the company drive and indicate there how you will contribute. Employees are welcome to bring a guest, so long as they indicate their intention to do so. Any questions may be directed to our events coordinator, Noxolo Nwosu, at nwnwosu@kloofphoto.sa.'
                ]
            },
            {
                id: 'v3-p7-t06-multi-set15-p2',
                contextType: 'P5_FORM',
                docType: 'TABLE',
                header: {
                    title: 'Kloof Photography Sign-Up Sheet'
                },
                content: [],
                table_data: {
                    headers: ['Name', 'Side dish', 'Bringing a guest?'],
                    rows: [
                        ['Mason Kivundu', 'sweet corn', 'No'],
                        ['Clara Singh', 'potato salad', 'Yes'],
                        ['Karl Williams', 'garlic bread', 'Yes'],
                        ['Said Diallo', 'jollof rice', 'Yes'],
                        ['Sekou Lombard', '—', 'Yes'],
                        ['Patricia Williamson', 'drinks', 'Yes']
                    ]
                }
            },
            {
                id: 'v3-p7-t06-multi-set15-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    from: 'Dawyd Johnson',
                    to: 'Noxolo Nwosu',
                    subject: 'Kloof summer event',
                    date: '3 November'
                },
                content: [
                    'Dear Ms. Nwosu,',
                    'Thank you for organizing the upcoming event. Several of my Kloof colleagues have been discussing the dishes they intend to bring. However, since I have just arrived in South Africa, the culture surrounding a braai picnic is quite new to me. Also, I am not much of a cook, but I do want to contribute to the success of the picnic. Please let me know what would be most helpful.',
                    'Sincerely,',
                    'Dawyd Johnson'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t06-multi-set15-q1',
                questionNo: 196,
                text: 'What is the reason for the event?',
                options: {
                    A: 'To promote a product',
                    B: 'To celebrate a store opening',
                    C: 'To welcome a new company president',
                    D: 'To mark a company anniversary'
                },
                correctAnswer: 'D',
                classification: 'P7_PURPOSE',
                translation: '행사의 목적은?\n(A) 제품을 홍보하려고\n(B) 매장 개점을 축하하려고\n(C) 회사 신임 회장을 환영하려고\n(D) 회사 창립 기념일을 기념하려고',
                explanation: '공지의 첫 번째 단락에서 영업 5주년을 기념하기 위한 축하 행사에 클루프 전 직원을 초대한다(all Kloof employees are invited to a celebration to commemorate our first five years in business)고 했으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set15-q2',
                questionNo: 197,
                text: 'According to the notice, where will the event be held?',
                options: {
                    A: 'At a park',
                    B: 'Near an office building',
                    C: 'At a retail store',
                    D: 'On a sports field'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '공지에 따르면, 행사는 어디서 열릴 것인가?\n(A) 공원에서\n(B) 사무용 건물 근처\n(C) 소매점에서\n(D) 경기장에서',
                explanation: '공지의 두 번째 단락에서 모임은 본사 건물 테라스에서 있을 것(Our gathering will convene ~ on the patio of our headquarters building)이라고 했으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set15-q3',
                questionNo: 198,
                text: 'Based on the information on the chart, what mistake did Ms. Williamson make?',
                options: {
                    A: 'She did not sign up to bring anything.',
                    B: 'She did not confirm her intention to attend.',
                    C: 'She plans to bring something that the company will provide.',
                    D: 'She intends to bring more guests than are permitted.'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '도표의 정보에 따르면 윌리엄슨 씨는 어떤 실수를 했는가?\n(A) 가져올 음식을 신청하지 않았다.\n(B) 참석 의사를 확정하지 않았다.\n(C) 회사에서 제공하는 것을 본인도 가져올 계획이다.\n(D) 허용된 인원보다 많은 손님을 데려오려 한다.',
                explanation: '도표에서 윌리엄슨 씨가 곁들임 음식(Side dish)으로 음료(drinks)를 적었다는 사실을 확인할 수 있다. 하지만 공지의 첫 번째 단락에서 음료는 제공된다(Beverages will also be provided)고 했으므로, 회사에서 제공하는 음식을 본인도 가져가려고 계획한 것이 실수라고 볼 수 있다. 따라서 (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set14-q4',
                questionNo: 199,
                text: 'What will Ms. Nwosu most likely encourage Mr. Johnson to do?',
                options: {
                    A: 'Help with setting up',
                    B: 'Bring some meat',
                    C: 'Assist with grilling',
                    D: 'Lead one of the games'
                },
                correctAnswer: 'A',
                classification: 'P7_LINK',
                translation: '누수 씨는 존슨 씨에게 무엇을 하라고 권하겠는가?\n(A) 준비 돕기\n(B) 고기 가져오기\n(C) 굽는 것 돕기\n(D) 경기 진행하기',
                explanation: '이메일의 후반부에서 존슨 씨는 자신이 요리를 그다지 잘하진 못하지만 성공적인 야유회를 위해 힘을 보태고 싶다(I am not much of a cook, but I do want to contribute to the success of the picnic)고 한 후, 가장 도움이 되는 일을 알려달라(Please let me know what would be most helpful)고 누수 씨에게 요청했다. 공지의 첫 번째 단락을 보면, 참석자들이 함께 나눠 먹을 곁들임 음식을 가져오거나 장소 준비팀에 자원해주길 바란다(attendees either plan to bring a side dish to share or volunteer to join the setup crew)고 되어 있다. 따라서 누수 씨가 존슨 씨에게 장소 준비 돕는 일을 제안할 것이라고 추론할 수 있으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t06-multi-set15-q5',
                questionNo: 200,
                text: 'What does the e-mail suggest about Mr. Johnson?',
                options: {
                    A: 'He is not a beginner photographer.',
                    B: 'He enjoys cooking.',
                    C: 'He is not from South Africa.',
                    D: 'He prefers indoor events.'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '이메일에서 존슨 씨에 대해 암시된 것은?\n(A) 신청 사진작가가 아니다.\n(B) 요리를 즐겨 한다.\n(C) 남아프리카공화국 출신이 아니다.\n(D) 실내 행사를 선호한다.',
                explanation: '이메일의 중반부에서 존슨 씨는 자신이 남아프리카공화국에 이제 막 도착해서 바비큐 야유회 관련 문화가 상당히 생소하다(since I have just arrived in South Africa, the culture surrounding a braai picnic is quite new to me)고 했다. 따라서 남아프리카공화국 출신이 아니라고 추론할 수 있으므로, (C)가 정답이다.'
            }
        ]
    }
];
