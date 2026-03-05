import { PracticeSet } from '../types';

export const test7MultiData: PracticeSet[] = [
    {
        id: 'v3-p7-t07-multi-set11',
        setType: 'Double',
        vol: 3,
        questionRange: '176-180',
        passages: [
            {
                id: 'v3-p7-t07-multi-set11-p1',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'https://www.zoliorentals.ca'
                },
                content: [
                    'Zolio Rentals Ltd. has a large inventory of heavy machines and construction tools available for hourly or daily rental. No matter what your task is, we likely have what you need to tackle it. We have more than 50 locations throughout Canada, with limited delivery available in some locations. If you require assistance, please call us at 604-555-0129 or e-mail us at info@zoliorentals.ca.',
                    'Search:\nMachine for trench digging'
                ],
                table_data: {
                    headers: ['', '45-cm trencher', '60-cm trencher'],
                    rows: [
                        ['4-hour rental', '$166', '$194'],
                        ['24-hour rental', '$237', '$275']
                    ]
                }
            },
            {
                id: 'v3-p7-t07-multi-set11-p2',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Sharla Stanton <sharla@stantonacres.ca>',
                    from: 'Ralph Fitzpatrick <rfitzpatrick@fitzgreenways.ca>',
                    date: '6 April',
                    subject: 'Trencher machine'
                },
                content: [
                    'Hi Sharla,',
                    'You had mentioned the other day that you anticipate needing to dig an irrigation trench on your property, just as I do. I wanted to let you know that I did some searching on the Zolio Rentals Web site, and I have decided that tomorrow I am going to rent the smallest trencher that is available. I will need the machine only for a couple of hours, but since the closest rental location is 45 minutes away in Durham, and it will take time to load it onto my truck both for the trip home and back to Durham again, I have decided to rent the machine for a full day.',
                    'Would you want to use the machine while I have it? If so, we can coordinate our schedules, and I can bring it to you after I finish. Then I can return the trencher to Zolio Rentals the next morning. I will gladly cover the entire rental fee. It is my way of returning the favour for your help with my lawn mower last autumn. Please let me know.',
                    'Regards,',
                    'Ralph'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t07-multi-set11-q1',
                questionNo: 176,
                text: 'What does the Web page state about Zolio Rentals?',
                options: {
                    A: 'It is expanding its inventory.',
                    B: 'It is training new customer-service associates.',
                    C: 'It can deliver equipment to certain areas.',
                    D: 'It recently opened branch locations.'
                },
                correctAnswer: 'C',
                classification: 'P7_DETAIL',
                translation: '웹페이지에서 졸리오 렌탈에 대해 무엇이라고 설명하는가?\n(A) 물픔 목록을 확장하고 있다.\n(B) 새로운 고객 서비스 담당자들을 교육시키고 있다.\n(C) 특정 지역에 장비를 배송해 줄 수 있다.\n(D) 최근 지점들을 열었다.',
                explanation: '웹페이지의 세 번째 문장에서 일부 매장에서는 제한적으로 배송도 가능하다(with limited delivery available in some locations)고 했으므로, (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set11-q2',
                questionNo: 177,
                text: 'Why did Mr. Fitzpatrick send the e-mail?',
                options: {
                    A: 'To make an offer of assistance',
                    B: 'To apologize for an oversight',
                    C: 'To ask for feedback on a product',
                    D: 'To postpone a project'
                },
                correctAnswer: 'A',
                classification: 'P7_PURPOSE',
                translation: '피츠패트릭 씨가 이메일을 쓴 이유는?\n(A) 도움을 제공하려고\n(B) 실수에 대해 사과하려고\n(C) 제품에 관한 피드백을 요청하려고\n(D) 프로젝트를 연기하려고',
                explanation: '이메일의 첫 번째 단락에서 피츠패트릭 씨는 도랑 파는 기계를 대여했다고 한 후, 두 번째 단락에서 살라 씨가 원한다면 사용 후 가져다 줄 수 있다(Would you want to use the machine while I have it? If so, we can coordinate our schedules, and I can bring it to you after I finish)고 했다. 따라서 도움을 제공하고자 쓴 이메일임을 알 수 있으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set11-q3',
                questionNo: 178,
                text: 'In the e-mail, the word "cover" in paragraph 2, line 3, is closest in meaning to',
                options: {
                    A: 'report on',
                    B: 'protect',
                    C: 'conceal',
                    D: 'pay for'
                },
                correctAnswer: 'D',
                classification: 'P7_VOCABULARY',
                translation: '이메일의 두 번째 단락, 세 번째 줄에 쓰인 "cover"와 의미가 가장 가까운 단어는?\n(A) ~에 대해 보고하다\n(B) 보호하다\n(C) 숨기다\n(D) ~의 값을 지불하다',
                explanation: '"cover"가 포함된 부분은 \'대여료 전액을 부담하겠다\'라는 의미로 해석되는데, 여기서 cover는 \'요금 등을 부담하다\'라는 뜻으로 쓰였다. 따라서 \'~의 값을 지불하다\'라는 의미의 (D) pay for가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set11-q4',
                questionNo: 179,
                text: 'What does the e-mail suggest about Mr. Fitzpatrick?',
                options: {
                    A: 'His family is planning to relocate to Durham.',
                    B: 'He worked as an irrigation consultant for many years.',
                    C: 'He regularly rents equipment from Zolio Rentals.',
                    D: 'His property is close to Ms. Stanton\'s property.'
                },
                correctAnswer: 'D',
                classification: 'P7_INFERENCE',
                translation: '이메일에서 피츠패트릭 씨에 대해 암시된 것은?\n(A) 그의 가족은 더럼으로 이주할 계획이다.\n(B) 수년간 관개 자문위원으로 일했다.\n(C) 졸리오 렌탈에서 정기적으로 장비를 대여한다.\n(D) 그의 소유지는 스탠턴 씨의 소유지와 가깝다.',
                explanation: '이메일의 두 번째 단락에서 피츠패트릭 씨는 살라 씨에게 기계를 빌려주겠다고 한 후, 그 다음날 아침에 본인이 졸리오 렌탈에 반납할 수 있다(Then I can return the trencher to Zolio Rentals the next morning)고 했다. 하루 안에 두 명 모두 기계를 사용한 후 다음날 아침에 반납이 가능할 정도로 두 사람의 토지가 가깝다고 추론할 수 있으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set11-q5',
                questionNo: 180,
                text: 'How much will Mr. Fitzpatrick most likely spend at Zolio Rentals?',
                options: {
                    A: '$166',
                    B: '$194',
                    C: '$237',
                    D: '$275'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '피츠패트릭 씨는 졸리오 렌탈에 얼마를 지불하겠는가?\n(A) 166달러\n(B) 194달러\n(C) 237달러\n(D) 275달러',
                explanation: '이메일의 첫 번째 단락에서 피츠패트릭 씨는 가장 작은 트렌처(the smallest trencher that is available)를 대여하겠다고 했고, 같은 단락 마지막 부분에서 전일 대여(rent the machine for a full day)하기로 결정했다고 했다. 웹페이지의 표를 보면 가장 작은 45cm 트렌처의 24시간 대여료는 237달러이므로, (C)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t07-multi-set12',
        setType: 'Double',
        vol: 3,
        questionRange: '181-185',
        passages: [
            {
                id: 'v3-p7-t07-multi-set12-p1',
                contextType: 'P3_MEDI',
                docType: 'ARTICLE',
                header: {
                    headline: 'Welinaras Corporation to Move R&D Division',
                    date: 'PUNE (12 March)'
                },
                content: [
                    'Welinaras Corporation, the health technology company headquartered in Pune, announced today that its Research and Development (R&D) Division will be based in Mumbai effective 1 May. "Mumbai has the business climate, facilities, and creative talent we need to help push our production forward," said Mr. Ram Jadhav, who became the company\'s third president last month. Currently, the company has offices in two other Indian cities, namely New Delhi and Hyderabad.',
                    'Welinaras Corporation is the manufacturer of high-quality technological equipment. Its product that is most in demand and, thus, profitable, is called Vigilant. Invented by Mr. Jadhav, and available across India, the device is intended for people with health problems. A key feature is its ability to regularly gather and update data about the patient\'s condition, information that might be crucial in emergencies.'
                ]
            },
            {
                id: 'v3-p7-t07-multi-set12-p2',
                contextType: 'P4',
                docType: 'ADVERTISEMENT',
                header: {
                    title: 'Welinaras Corporation',
                    subtitle: 'Job title: Senior Research and Development Engineer\nListing date: 23 March\nApply by: 25 April'
                },
                content: [
                    'Responsible for designing and testing wearable health-monitoring devices.',
                    'EDUCATION AND SKILLS:',
                    '• Graduate degree in biomedical engineering',
                    '• Minimum of five years\' experience developing medical devices and conducting clinical trials',
                    '• Minimum of three years\' experience in managing research teams',
                    '• Excellent written and oral communication skills',
                    '• Ability to work collaboratively in a global, multicultural environment',
                    'Candidate must attend a preliminary training course on 25 May, prior to starting work on 8 June.'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t07-multi-set12-q1',
                questionNo: 181,
                text: 'What is stated about Mr. Jadhav?',
                options: {
                    A: 'He created one of the company\'s products.',
                    B: 'He is the founder of Welinaras Corporation.',
                    C: 'He used to be in charge of the R&D Division.',
                    D: 'He has been company president for three years.'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '자다브 씨에 대해 알 수 있는 것은?\n(A) 회사 제품 중 하나를 만들었다.\n(B) 웰리나라스 기업의 창립자다.\n(C) 연구개발 부문의 책임자였다.\n(D) 3년간 회사의 회장이었다.',
                explanation: '기사의 두 번째 단락에서 수요가 가장 높아 수익성 있는 제품이 \'비질런트\'(Its product that is most in demand and, thus, profitable, is called Vigilant)라고 했는데, 바로 다음 문장에서 이것은 자다브 씨가 발명한(Invented by Mr. Jadhav) 장비라고 했다. 따라서 자다브 씨가 회사 제품인 비질런트를 발명했음을 알 수 있으므로, (A)가 정답이다. 참고로, 자다브 씨는 지난달에 3대 회장(the company\'s third president)이 된 것이므로, (B)와 (D)는 명백한 오답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set12-q2',
                questionNo: 182,
                text: 'What is indicated about Vigilant?',
                options: {
                    A: 'It is sold internationally.',
                    B: 'It collects information.',
                    C: 'It is inexpensive.',
                    D: 'It is a new product.'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '비질런트에 대해 알 수 있는 것은?\n(A) 해외에 판매된다.\n(B) 정보를 수집한다.\n(C) 값이 저렴하다.\n(D) 신제품이다.',
                explanation: '기사의 두 번째 단락 후반부에서 비질런트의 주요 기능은 응급 상황 시 중요할 수 있는 정보인 환자의 상태 관련 데이터를 정기적으로 수집하고 업데이트하는 것(A key feature is its ability to regularly gather and update data about the patient\'s condition, information that might be crucial in emergencies)이라고 했다. 따라서 (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set12-q3',
                questionNo: 183,
                text: 'Where will the chosen candidate most likely work?',
                options: {
                    A: 'In Pune',
                    B: 'In Mumbai',
                    C: 'In New Delhi',
                    D: 'In Hyderabad'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '선발된 지원자는 어디에서 일하겠는가?\n(A) 푸네\n(B) 뭄바이\n(C) 뉴델리\n(D) 하이데라바드',
                explanation: '채용공고에서 모집하는 직책은 연구개발 수석 엔지니어(Senior Research and Development Engineer)이며 5월 25일에 교육을 받고 6월 8일부터 근무를 시작하게 된다. 기사의 첫 번째 단락을 보면, 웰리나라스 기업이 연구개발(R&D) 부서를 5월 1일부로 뭄바이로 옮길 예정이라고 되어 있다. 따라서 새로 선발된 연구개발 수석 엔지니어는 뭄바이에서 근무하게 될 것이라 추론할 수 있으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set12-q4',
                questionNo: 184,
                text: 'When is the application deadline?',
                options: {
                    A: 'In March',
                    B: 'In April',
                    C: 'In May',
                    D: 'In June'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '지원 마감 기한은 언제인가?\n(A) 3월\n(B) 4월\n(C) 5월\n(D) 6월',
                explanation: '채용공고의 소제목 부분을 보면 4월 25일까지 지원하라(Apply by: 25 April)고 되어 있으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set12-q5',
                questionNo: 185,
                text: 'What is one requirement of the position? ',
                options: {
                    A: 'Having published scholarly articles',
                    B: 'Having provided medical care',
                    C: 'Having managerial experience',
                    D: 'Having worked abroad'
                },
                correctAnswer: 'C',
                classification: 'P7_DETAIL',
                translation: '해당 직책의 요건은?\n(A) 학술 기사 발표 경력\n(B) 의료 제공 경력\n(C) 관리 경력\n(D) 해외 근무 경력',
                explanation: '채용공고에서 최소 3년의 연구팀 관리 경력(Minimum of three years\' experience in managing research teams)이 필요하다고 명시되어 있으므로, 보기 중에서는 (C)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t07-multi-set13',
        setType: 'Triple',
        vol: 3,
        questionRange: '186-190',
        passages: [
            {
                id: 'v3-p7-t07-multi-set13-p1',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'All Library Members',
                    from: 'Ada County Library',
                    date: 'March 20',
                    subject: 'Upcoming lectures',
                    attachment: 'Spring_schedule'
                },
                content: [
                    'Dear Ada County Library members:',
                    'Our long-awaited spring lecture schedule has been finalized. We expect an excellent turnout for these lectures. A highlight is a presentation on Arabic poetry translation, presented by a lecturer who will make her first visit to Ada County Library.',
                    'Access to library events is always free and is on a first-come, first-served basis, so please plan accordingly, especially for events in our two smallest venues, the Helms Room, which seats 35, and the Avery Room, which has only 20 computer stations.'
                ]
            },
            {
                id: 'v3-p7-t07-multi-set13-p2',
                contextType: 'P4',
                docType: 'TABLE',
                header: {
                    title: 'Ada County Library Spring Lecture Schedule'
                },
                content: [],
                table_data: {
                    headers: ['Featured Topic', 'Guest Lecturer', 'Date and Time', 'Location'],
                    rows: [
                        ['Idaho Literature', 'Yvonne Briggs', 'April 10, 4-6 P.M.', 'Helms Room'],
                        ['Arabic Poetry Translation', 'Carole Elgin', 'April 17, 3-5 P.M.', 'Stokes Room'],
                        ['Effective Résumé Design', 'Marc D’Angelo', 'April 24, 3-5 P.M.', 'Avery Room'],
                        ['History of the Dictionary', 'Jax Morrison', 'May 8, 4-6 P.M.', 'Stokes Room'],
                        ['Philosophical Nonfiction', 'Darla Weiss', 'May 15, 3-5 P.M.', 'Fredricks Room'],
                        ['Programming as a Skill', 'Alissa Reynolds', 'May 22, 4-6 P.M.', 'Avery Room']
                    ]
                }
            },
            {
                id: 'v3-p7-t07-multi-set13-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Mary Carlton <mcarlton@adacountylibrary.org>',
                    from: 'Jax Morrison <jmorrison@bookpress.com>',
                    date: 'April 3',
                    subject: 'Scheduled library event'
                },
                content: [
                    'Dear Ms. Carlton,',
                    'I am writing to let you know that my planned event at the library on May 8 will need to be rescheduled, as I will be away for business that week. I have already prepared some exciting materials that I think library patrons will really enjoy, so I am still interested in giving the lecture. It is currently scheduled to take place in the Stokes Room, which is the perfect size for the crowd I hope to draw. It also has all the necessary technology for my lecture, so I would still like to use that room.',
                    'I apologize for the inconvenience of needing to reschedule, but I appreciate your help in getting this event rebooked, as I am excited to present my topic.',
                    'Best,',
                    'Jax Morrison'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t07-multi-set13-q1',
                questionNo: 186,
                text: 'What venue seats only twenty people?',
                options: {
                    A: 'The Helms Room',
                    B: 'The Stokes Room',
                    C: 'The Avery Room',
                    D: 'The Fredricks Room'
                },
                correctAnswer: 'C',
                classification: 'P7_DETAIL',
                translation: '20명만 앉을 수 있는 장소는?\n(A) 헬름스 룸\n(B) 스토크스 룸\n(C) 에이버리 룸\n(D) 프레드릭스 룸',
                explanation: '첫 번째 이메일의 두 번째 단락 후반부에서 에이버리 룸에는 컴퓨터 스테이션이 20개밖에 없다(the Avery Room, which has only 20 computer stations)고 명시했으므로, (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set13-q2',
                questionNo: 187,
                text: 'Who is highlighted as a new speaker at Ada County Library?',
                options: {
                    A: 'Ms. Briggs',
                    B: 'Ms. Elgin',
                    C: 'Ms. Weiss',
                    D: 'Ms. Reynolds'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '에이다 카운티 도서관에서의 새로운 연사로 강조된 사람은?\n(A) 브릭스 씨\n(B) 엘긴 씨\n(C) 와이스 씨\n(D) 레이놀즈 씨',
                explanation: '첫 번째 이메일의 첫 번째 단락 후반부에서 가장 흥미로운 부분은 아랍어 시 번역에 관한 발표로, 에이다 카운티 도서관을 처음 방문하는 강사가 발표한다(A highlight is a presentation on Arabic poetry translation, presented by a lecturer who will make her first visit to Ada County Library)고 했다. 일정표에 따르면 아랍어 시 번역을 발표하는 강사는 캐롤 엘긴 씨이므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set13-q3',
                questionNo: 188,
                text: 'What most likely is Ms. Carlton\'s job?',
                options: {
                    A: 'University lecturer',
                    B: 'Computer programmer',
                    C: 'Event coordinator',
                    D: 'Travel agent'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: '칼튼 씨의 직업은 무엇이겠는가?\n(A) 대학 강사\n(B) 컴퓨터 프로그래머\n(C) 행사 담당자\n(D) 여행사 직원',
                explanation: '두 번째 이메일의 첫 단락에서 모리슨 씨는 칼튼 씨에게 사정을 설명하며 도서관 행사 중 자신의 강의 시간을 변경되어야 한다(my planned event at the library ~ will need to be rescheduled)고 했다. 이후 두 번째 단락에서 발표를 꼭 하고 싶다며 다시 예약해달라고 부탁(I appreciate your help in getting this event rebooked, as I am excited to present my topic)하고 있으므로, 칼튼 씨가 도서관 행사 담당자라고 추론할 수 있다. 따라서 (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set13-q4',
                questionNo: 189,
                text: 'What event will need to be rescheduled?',
                options: {
                    A: 'Idaho Literature',
                    B: 'History of the Dictionary',
                    C: 'Philosophical Nonfiction',
                    D: 'Programming as a Skill'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '어떤 행사의 일정을 변경해야 하는가?\n(A) 아이다호 문학\n(B) 사전의 역사\n(C) 철학 관련 논픽션\n(D) 프로그래밍 역량',
                explanation: '두 번째 이메일의 첫 단락에서 모리슨 씨는 5월 8일 도서관에서 계획된 행사(my planned event at the library on May 8 will need to be rescheduled)고 했다. 일정표에 따르면 5월 8일에 예정된 강의의 주제는 \'사전의 역사\'이므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set13-q5',
                questionNo: 190,
                text: 'What is indicated about Mr. Morrison?',
                options: {
                    A: 'He has not yet begun to prepare for his lecture.',
                    B: 'He will visit the library on May 8.',
                    C: 'He is not required to travel for his job.',
                    D: 'He plans to utilize technology in his presentation.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '모리슨 씨에 대해 알 수 있는 것은?\n(A) 강의 준비를 아직 시작하지 않았다.\n(B) 5월 8일에 도서관을 방문할 예정이다.\n(C) 출장을 갈 필요가 없다.\n(D) 발표 시 장비를 사용할 계획이다.',
                explanation: '두 번째 이메일의 첫 단락 후반부에서 모리슨 씨는 기존에 강의하기로 예정되었던 스토크스 룸에 자신이 필요한 장비가 모두 갖춰져 있어서(It also has all the necessary technology for my lecture) 일정을 변경하더라도 이 방을 사용하고 싶다고 했다. 따라서 모리슨 씨가 장비를 사용할 예정임을 알 수 있으므로, (D)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t07-multi-set14',
        setType: 'Triple',
        vol: 3,
        questionRange: '191-195',
        passages: [
            {
                id: 'v3-p7-t07-multi-set14-p1',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.crfoundation.org/volunteer',
                    title: 'River Advocates'
                },
                content: [
                    'The Central River Foundation coordinates water-monitoring operations at various sites along the Central River and its tributaries. The foundation would like to train individuals in area communities to conduct periodic water-quality tests.',
                    'If interested in becoming a river advocate, contact us at www.crfoundation.org.',
                    'Requirements:',
                    '▶ Reliable transportation is essential; we work in relatively remote areas.',
                    '▶ Attention to detail and the ability to take precise measurements',
                    '▶ Availability to conduct testing at least once every four weeks to detect any changes in water quality'
                ]
            },
            {
                id: 'v3-p7-t07-multi-set14-p2',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Janis Gutierrez, Mitch Gregory, Mary Connors, Ross Howard',
                    from: 'Clare Schroeder <cschroeder@crfoundation.org>',
                    date: 'May 5',
                    subject: 'Training'
                },
                content: [
                    'Thank you for your interest in participating as a river advocate for the Central River Foundation.',
                    'A training session has been scheduled at Clifford Park on Saturday, May 8, from 9:00 A.M. to 12 noon. During the training you will practice using the sample kits and be introduced to your mentors. You will leave with your first assignments and a certificate of completion. Then your mentor will accompany you on your first one-hour assignment. This will prepare you to work independently afterwards.',
                    'Although we will be training at Clifford Park, you will usually be working at other sites. Please see your individual testing sites below.'
                ],
                table_data: {
                    headers: ['Water Testing Site', 'Volunteer'],
                    rows: [
                        ['Sutton Bridge', 'Janis Gutierrez'],
                        ['Bradford Bend', 'Mitch Gregory'],
                        ['Alderwick Cove', 'Mary Connors'],
                        ['Tanner Park', 'Ross Howard']
                    ]
                },
                footer: 'I look forward to seeing you all on Saturday!\nClare Schroeder'
            },
            {
                id: 'v3-p7-t07-multi-set14-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Susan Lim',
                    from: 'Mary Connors',
                    date: 'May 13',
                    subject: 'Site visit'
                },
                content: [
                    'Hi Susan,',
                    'I\'m supposed to complete my first water testing on May 20. Are you available to meet me there to help me do it correctly? I\'m available any time between 3:00 P.M. and 6:00 P.M. I looked up the site online, and it looks like we will have to park about half a kilometer away from the river and then walk to the site. Ms. Schroeder mentioned that it will add about 30 minutes to our trip.',
                    'Also, do you have an extra water-testing kit? It looks like mine is missing a few pieces. Can we use one of yours until I can get my supplies replaced?',
                    'Thanks,',
                    'Mary'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t07-multi-set14-q1',
                questionNo: 191,
                text: 'What are the volunteer river advocates responsible for?',
                options: {
                    A: 'Monitoring changes in water quality',
                    B: 'Promoting water conservation practices',
                    C: 'Keeping the riverbanks clean',
                    D: 'Leading educational tours of rivers and creeks'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '강 보호 운동 자원봉사자들에게 어떤 책임이 있는가?\n(A) 수질 변화 감시\n(B) 물 보호 관행 홍보\n(C) 강둑을 청결하게 유지\n(D) 강과 시내 견학 주관',
                explanation: '웹페이지 하단을 보면 강 보호 운동가의 요건이 나와 있는데, 세 번째 항목에서 그들이 수질 변화를 감지하는 일(to detect any changes in water quality)을 한다는 것을 알 수 있다. 따라서 (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set14-q2',
                questionNo: 192,
                text: 'What is implied about the recipients of the first e-mail?',
                options: {
                    A: 'They will be sharing a vehicle.',
                    B: 'They have helped to recruit volunteers.',
                    C: 'They have committed to being available once a month.',
                    D: 'They will enter records into a computer system.'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: '첫 번째 이메일 수신자들에 대해 암시된 것은?\n(A) 차량을 공유할 예정이다.\n(B) 자원봉사자들을 모집하는 데 도움을 주었다.\n(C) 한 달에 1회 시간을 낼 것을 약속했다.\n(D) 컴퓨터 시스템에 기록을 입력할 것이다.',
                explanation: '첫 번째 이메일의 첫 단락을 보면 이메일의 수신자들이 센트럴강 재단의 강 보호 운동가(a river advocate for the Central River Foundation)로 활동할 예정임을 알 수 있다. 웹페이지 하단에 나온 요건 중 세 번째 항목에 따르면, 강 보호 운동가는 수질 변화 감지를 위해 최소 4주에 1회 검사할 수 있어야 한다(Availability to conduct testing at least once every four weeks to detect any changes in water quality)고 되어 있다. 따라서 이메일의 수신자들이 여기에 동의했다고 추론할 수 있으므로, (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set14-q3',
                questionNo: 193,
                text: 'What does the first e-mail indicate about the training?',
                options: {
                    A: 'It will be held at the Central River Foundation building.',
                    B: 'It will take place in the morning.',
                    C: 'It will last for one hour.',
                    D: 'It will take place at multiple sites.'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '첫 번째 이메일에서 교육에 대해 명시된 것은?\n(A) 센트럴강 재단 건물에서 개최될 것이다.\n(B) 오전에 개최될 것이다.\n(C) 한 시간 동안 계속될 것이다.\n(D) 여러 장소에서 열릴 것이다.',
                explanation: '첫 번째 이메일의 두 번째 단락에서 교육 시간은 5월 8일 토요일 오전 9시부터 정오까지로 예정되어 있다(A training session has been scheduled at Clifford Park on Saturday, May 8, from 9:00 A.M. to 12 noon)고 했으므로, 교육이 오전 중에 이루어짐을 알 수 있다. 따라서 (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set14-q4',
                questionNo: 194,
                text: 'Where will Ms. Lim most likely meet Ms. Connors?',
                options: {
                    A: 'At Sutton Bridge',
                    B: 'At Bradford Bend',
                    C: 'At Alderwick Cove',
                    D: 'At Tanner Park'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '림 씨는 어디에서 코너스 씨를 만나겠는가?\n(A) 서튼 브리지\n(B) 브래드포드 벤드\n(C) 앨더윅 코브\n(D) 태너 파크',
                explanation: '두 번째 이메일의 첫 번째 단락에서 코너스 씨는 림 씨에게 자신이 5월 20일에 첫 수질 검사를 완료하도록 되어 있는데(I\'m supposed to complete my first water testing on May 20), 거기에서 만나 도와줄 수 있는지(Are you available to meet me there to help me do it correctly?) 물었다. 첫 번째 이메일의 표에 따르면, 코너스 씨가 수질 검사를 해야 하는 장소는 앨더윅 코브이므로, (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set14-q5',
                questionNo: 195,
                text: 'In the second e-mail, what does Ms. Connors ask Ms. Lim to do?',
                options: {
                    A: 'Give her a ride',
                    B: 'Contact Ms. Schroeder',
                    C: 'Arrive 30 minutes early',
                    D: 'Bring a water-testing kit'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '두 번째 이메일에서 코너스 씨는 림 씨에게 무엇을 해 달라고 요청하는가?\n(A) 차에 태워 주기\n(B) 슈뢰더 씨에게 연락하기\n(C) 30분 일찍 출발하기\n(D) 수질 검사 키트 가져오기',
                explanation: '두 번째 이메일의 두 번째 단락에서 코너스 씨는 림 씨에게 수질 시험 키트 여분이 있는지 물은 후, 림 씨 것 중 하나를 써도 되는지(do you have an extra water-testing kit? ~ Can we use one of yours ~?) 물었다. 즉, 림 씨의 수질 시험 키트를 가져와 달라고 요청한 것이므로, (D)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t07-multi-set15',
        setType: 'Triple',
        vol: 3,
        questionRange: '196-200',
        passages: [
            {
                id: 'v3-p7-t07-multi-set15-p1',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Kristof Szasz <kszasz@budaceramics.com>',
                    from: 'Anouk Ayala <aayala@ayala.net>',
                    date: 'January 25',
                    subject: 'Solar power options'
                },
                content: [
                    'Dear Mr. Szasz:',
                    'Thank you for your recent e-mail requesting recommendations for solar power options for your ceramics company. Before I make a recommendation for which company would best serve your needs, could you answer these questions?',
                    '1. How flexible is your budget for solar panel purchase and installation?',
                    '2. What is your time frame? The government plans to provide financial incentives toward the cost of installing solar power that will take effect in about two years.',
                    '3. What is the configuration of your property? If you have the space, you could choose to install solar panels in a parking area or on the ground. The first choice consists of canopies over your parking lot, while the second choice is great for large, unused areas.',
                    '4. What kind of roof do you have? A flat roof is not ideal. Neither is a roof that has a lot of equipment on it, as there is not enough room for large solar panels.',
                    '5. Are you planning on expanding your business in the future?',
                    'I look forward to hearing back from you soon.',
                    'Anouk Ayala'
                ]
            },
            {
                id: 'v3-p7-t07-multi-set15-p2',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Anouk Ayala <aayala@ayala.net>',
                    from: 'Kristof Szasz <kszasz@budaceramics.com>',
                    date: 'January 27',
                    subject: 'RE: Solar power options'
                },
                content: [
                    'Dear Ms. Ayala:',
                    'Our company headquarters is located outside of the capital city. The ceramics factory occupies approximately one-half of our property. To ensure sufficient cooling, much of the roof space is taken up by industrial-sized air-conditioning units and venting silos for our ovens. The rest of our property contains a sizeable parking lot, because there is no public transportation in the area, and our 150 employees must drive to work.',
                    'The solar power business we choose should be well established. We have an inflexible deadline for our current project, so I am willing to sacrifice money to get the panels installed as soon as possible. I hope these answers help you with your recommendation.',
                    'Kristof Szasz'
                ]
            },
            {
                id: 'v3-p7-t07-multi-set15-p3',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.solarinsider.com'
                },
                content: [
                    'Based on a recent customer survey, these four solar power companies in the capital city area are rated the most successful.'
                ],
                table_data: {
                    headers: ['Company', 'Specialty', 'Comments'],
                    rows: [
                        ['AKX Solar', 'Rooftop', 'Very low cost; a very stable company'],
                        ['Sun365', 'All types', 'Superior quality; very thorough; but a bit slow'],
                        ['Beranek Systems', 'Parking areas', 'Fast turnaround; but quite expensive'],
                        ['Plutosolar', 'Ground installation', 'Cannot begin until March']
                    ]
                }
            }
        ],
        questions: [
            {
                id: 'v3-p7-t07-multi-set15-q1',
                questionNo: 196,
                text: 'What most likely is Ms. Ayala\'s job?',
                options: {
                    A: 'Technical consultant',
                    B: 'Factory supervisor',
                    C: 'Magazine writer',
                    D: 'Maintenance worker'
                },
                correctAnswer: 'A',
                classification: 'P7_INFERENCE',
                translation: '아얄라 씨의 직업은 무엇이겠는가?\n(A) 기술 자문위원\n(B) 공장 감독관\n(C) 잡지 기자\n(D) 유지보수 인부',
                explanation: '첫 번째 이메일의 첫 단락을 보면, 자즈 씨가 자신의 도자기 회사를 위한 태양열 발전 옵션을 추천해달라고 아얄라 씨에게 요청했음(your recent e-mail requesting recommendations for solar power options for your ceramics company)을 알 수 있다. 아얄라 씨는 어느 업체가 자즈 씨의 요구에 부합할 지 추천하기에 앞서(Before I make a recommendation for which company would best serve your needs) 몇 가지 질문을 하며 이에 답해 달라고 요청하고 있으므로, 그녀가 기술 관련 자문위원이라고 추론할 수 있다. 따라서 (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set15-q2',
                questionNo: 197,
                text: 'What does Ms. Ayala indicate about solar power?',
                options: {
                    A: 'Many government buildings are equipped with solar panels.',
                    B: 'Solar businesses overseas are growing extremely fast.',
                    C: 'Rooftop panels provide the most energy efficiency.',
                    D: 'Delaying installation of solar panels for two years would lower costs.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '아얄라 씨가 태양열 발전에 대해 명시한 것은?\n(A) 많은 정부 건물들이 태양 전지판을 갖추고 있다.\n(B) 해외 태양열 업체들은 매우 빠르게 성장하고 있다.\n(C) 지붕 전지판은 가장 높은 에너지 효율성을 제공한다.\n(D) 태양 전지판 설치를 2년간 미루면 비용을 낮출 수 있다.',
                explanation: '첫 번째 이메일의 2번 질문에서 아얄라 씨는 정부에서 2년 후에 태양열 발전 설치 시 재정적인 혜택을 제공할 계획(The government plans to provide financial incentives toward the cost of installing solar power that will take effect in about two years)이라고 설명했다. 따라서 2년 후에 태양열 전지판을 설치하면 정부의 보조금을 받아 비용을 절감할 수 있으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set15-q3',
                questionNo: 198,
                text: 'Which of Ms. Ayala\'s questions does Mr. Szasz fail to answer?',
                options: {
                    A: 'Number 1',
                    B: 'Number 3',
                    C: 'Number 4',
                    D: 'Number 5'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '자즈 씨는 아얄라 씨의 어떤 질문에 답변하지 못했는가?\n(A) 1번\n(B) 3번\n(C) 4번\n(D) 5번',
                explanation: '두 번째 이메일은 자즈 씨가 아얄라 씨의 질문에 답장한 내용이다. 첫 번째 단락에서 도자기 공장이 구내의 절반 정도를 차지하고(The ceramics factory occupies approximately one-half of our property) 나머지 부분에는 큰 주차장이 있다(The rest of our property contains a sizeable parking lot)고 한 것은 3번 질문에 대한 답변이고, 지붕 공간의 대부분은 산업용 크기의 에어컨과 오븐을 위한 통기 구조물이 차지하고 있다(much of the roof space is taken up by industrial-sized air-conditioning units and venting silos for our ovens)고 설명한 것은 4번 질문에 대한 답변이다. 그리고 두 번째 단락에서 기한을 융통성 있게 조절할 수 없으니(inflexible deadline) 비용을 희생해서라도 최대한 빨리 패널을 설치했으면 한다(I am willing to sacrifice money to get the panels installed as soon as possible)고 했는데, 이는 1번 및 2번 질문에 대한 답변으로 볼 수 있다. 사업 확장 가능성을 묻는 5번 질문에는 답하지 않았으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set15-q4',
                questionNo: 199,
                text: 'According to the second e-mail, what is suggested about the ceramics factory?',
                options: {
                    A: 'It is situated far from the road.',
                    B: 'It requires extensive cooling.',
                    C: 'It is located on a public transportation route.',
                    D: 'It recently moved to the capital city area.'
                },
                correctAnswer: 'B',
                classification: 'P7_INFERENCE',
                translation: '두 번째 이메일에 따르면, 도자기 공장에 대해 암시된 것은?\n(A) 도로에서 먼 곳에 있다.\n(B) 광범위한 냉각이 필요하다.\n(C) 대중교통 노선상에 위치해 있다.\n(D) 최근 수도권 지역으로 이전했다.',
                explanation: '두 번째 이메일의 첫 단락에서 충분한 냉각을 보장하기 위해 공장 지붕 공간의 대부분에 산업용 크기의 에어컨 및 오븐을 위한 통기 구조물이 있다(To ensure sufficient cooling, much of the roof space is taken up by industrial-sized air-conditioning units and venting silos for our ovens)고 했다. 따라서 공장에 광범위한 냉각이 필요하다고 추론할 수 있으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t07-multi-set15-q5',
                questionNo: 200,
                text: 'What company will Ms. Ayala most likely recommend?',
                options: {
                    A: 'AKX Solar',
                    B: 'Sun365',
                    C: 'Beranek Systems',
                    D: 'Plutosolar'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '아얄라 씨는 어떤 업체를 추천하겠는가?\n(A) AKX Solar\n(B) Sun365\n(C) Beranek Systems\n(D) Plutosolar',
                explanation: '자즈 씨의 답변을 종합하면, 도자기 공장의 지붕에는 이미 장비가 많아 전지판을 설치할 공간이 부족하고 대신 큰 주차장을 갖추고 있으므로, 주차장에 전지판을 설치하는 것이 적합하다. 또한 그는 비용이 더 들더라도 최대한 빨리 패널을 설치하길 원한다. 웹페이지의 표를 보면 \'베라넥 시스템즈\'가 주차장 설치 전문(Parking areas)이며 작업 완료 시간이 빠르다(Fast turnaround)고 나와 있으므로, (C)가 정답이다.'
            }
        ]
    }
];
