import { Part6TestSet } from './types';

export const test9Data: Part6TestSet = {
        "testId": 9,
        "vol": 3,
        "title": "Test 9",
        "passages": [
            {
                "setId": "v3-p6-t9-p1",
                "contextType": "P1",
                "docType": "notice",
                "guidance": "Questions 131-134 refer to the following notice.",
                "content": "Notice of Public Meeting\n\nThe Fallberg City Library will hold its monthly board meeting on August 19 at 6 P.M. Members of the community are encouraged to ___131___. The agenda, ___132___ available on the library's Web site, includes an information session about the proposed library building on the city's east side. Project Manager Andre Cazal will share design concepts for the building. ___133___, he will lead a discussion about how construction should be funded. There will be a period for public comment following the regular agenda items. ___134___.",
                "translation": "공청회 통지\n\n폴버그 시립 도서관은 8월 19일 오후 6시에 월례 이사회를 개최할 예정입니다. 지역 주민들의 참여를 권장합니다. 도서관 웹사이트에서 확인할 수 있는 의제에는 도시 동부 지역에 제안된 도서관 건물에 대한 정보 세션이 포함되어 있습니다. 프로젝트 매니저인 안드레 카잘이 건물의 디자인 컨셉을 공유할 예정입니다. 게다가, 그는 건설 자금 조달 방법에 대한 토론을 이끌 것입니다. 정규 의제 항목에 이어 일반 시민들의 의견을 듣는 시간이 있을 것입니다. 참석자들은 그 시간에 의견을 공유할 수 있는 기회를 갖게 될 것입니다.",
                "questions": [
                    {
                        "id": "v3-p6-t9-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": { "A": "write", "B": "attend", "C": "donate", "D": "volunteer" },
                        "correctAnswer": "B",
                        "explanation": "도서관 이사회를 개최한다는 맥락에서 지역 주민들에게 권장하는 행위는 '참석하다'이므로 (B) attend가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t9-q132",
                        "questionNo": 132,
                        "text": "Select the best answer.",
                        "options": { "A": "be", "B": "being", "C": "which is", "D": "what can be" },
                        "correctAnswer": "C",
                        "explanation": "선행사(agenda)를 수식하는 주격 관계대명사와 be동사 (C) which is가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t9-q133",
                        "questionNo": 133,
                        "text": "Select the best answer.",
                        "options": { "A": "In addition", "B": "As a result", "C": "As mentioned", "D": "In the meantime" },
                        "correctAnswer": "A",
                        "explanation": "앞서 언급한 디자인 컨셉 공유에 이어 추가적인 활동(자금 조달 토론)을 나열하므로 (A) In addition이 정답입니다.",
                        "classification": "p6c"
                    },
                    {
                        "id": "v3-p6-t9-q134",
                        "questionNo": 134,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "New board members will be appointed in September.",
                            "B": "The main branch will remain closed until further notice.",
                            "C": "The project was canceled due to a lack of public funding.",
                            "D": "Attendees will have an opportunity to share feedback at that time."
                        },
                        "correctAnswer": "D",
                        "explanation": "앞 문장의 '일반 시민 의견 수렴 시간'에 대한 구체적인 설명을 덧붙이는 (D)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t9-p2",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: All Sales Associates\nFrom: Dean Verdoorn\nDate: June 27\nSubject: Store improvement\n\nIt is very important to us at V and J Camping Supplies that we work together as a unit. Teamwork not only improves productivity but also leads to increased satisfaction for customers and employees. ___135___, we will be combining a team-building exercise with an in-store improvement plan that we believe will make employees, management, and customers happy.\n\nWe will be redesigning the walls in our stores to look like trees with hollow spaces ___136___ products can be displayed. These outdoor-themed shelves are actually easy-to-assemble modular wall units. Associates ___137___ the task to work cooperatively in teams to assemble them. ___138___. When it is completed, we will stock the shelves and have a fun grand reopening event for customers.\n\nMore information will be forthcoming.\n\nDean Verdoorn\nBuildings Director",
                "translation": "수신: 모든 영업 사원\n발신: Dean Verdoorn\n날짜: 6월 27일\n제목: 매장 개선\n\nV and J Camping Supplies의 팀원들이 하나로 뭉쳐 일하는 것은 매우 중요합니다. 팀워크는 생산성을 향상시킬 뿐만 아니라 고객과 직원의 만족도를 높여줍니다. 이러한 이유로, 우리는 직원, 경영진, 고객 모두를 행복하게 만들 것이라고 믿는 매장 개선 계획과 팀 빌딩 훈련을 결합할 예정입니다.\n\n우리는 매장 벽면을 제품을 진열할 수 있는 움푹 패인 공간이 있는 나무 모양으로 재설치할 것입니다. 이러한 야외 테마 선반은 사실 조립하기 쉬운 모듈형 벽면 유닛입니다. 영업 사원들은 팀을 이루어 협력적으로 이를 조립하는 임무를 받게 될 것입니다. 이 프로젝트는 하루 정도 소요될 예정입니다. 작업이 완료되면 선반을 채우고 고객들을 위한 즐거운 재개장 행사를 열 것입니다.\n\n추가 정보가 곧 제공될 것입니다.\n\nDean Verdoorn\n시설 이사",
                "questions": [
                    {
                        "id": "v3-p6-t9-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": { "A": "For that reason", "B": "For instance", "C": "Unfortunately", "D": "On the other hand" },
                        "correctAnswer": "A",
                        "explanation": "팀워크의 중요성을 언급한 앞 문장을 원인으로 하여 실행 계획을 설명하므로 '그러한 이유로'라는 의미의 (A) For that reason이 정답입니다.",
                        "classification": "p6c"
                    },
                    {
                        "id": "v3-p6-t9-q136",
                        "questionNo": 136,
                        "text": "Select the best answer.",
                        "options": { "A": "for", "B": "that", "C": "whatever", "D": "where" },
                        "correctAnswer": "D",
                        "explanation": "선행사(spaces)를 수식하며 뒤에 완전한 절을 이끄는 관계부사 (D) where이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t9-q137",
                        "questionNo": 137,
                        "text": "Select the best answer.",
                        "options": { "A": "are giving", "B": "were given", "C": "have to give", "D": "will be given" },
                        "correctAnswer": "D",
                        "explanation": "앞으로 있을 활동에 대해 임무가 '주어질' 것이라는 미래 시제 수동태 (D) will be given이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t9-q138",
                        "questionNo": 138,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Customers have been informed.",
                            "B": "This project should take one day.",
                            "C": "An announcement will be made soon.",
                            "D": "These units are available in several colors."
                        },
                        "correctAnswer": "B",
                        "explanation": "조립 작업에 대해 설명하는 맥락에서 작업 소요 시간을 나타내는 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t9-p3",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 139-142 refer to the following e-mail.",
                "content": "To: Donald Haroway <dharoway@indomail.co.nz>\nFrom: Fix-It Plumbing\nDate: 4 August\nSubject: Service request\n\nMr. Haroway,\n\nThis e-mail serves as confirmation that Fix-It Plumbing will be able to ___139___ a gas line at your residence at 458 Heron Street. We ___140___ Bradley Burns, a certified and licensed master plumber, to do this on Monday, 10 August, between 10:00 A.M. and 11:00 A.M. It should take about an hour to put in the line. ___141___.\n\nShould you need to cancel the ___142___, please contact us right away. This is a particularly busy time of year, and our schedules are quite full.\n\nElna Dlamini\nFix-It Plumbing",
                "translation": "수신: Donald Haroway <dharoway@indomail.co.nz>\n발신: Fix-It Plumbing\n날짜: 8월 4일\n제목: 서비스 요청\n\nHaroway 씨에게,\n\n이 이메일은 Fix-It Plumbing이 458 Heron Street에 있는 귀하의 자택에 가스 라인을 설치할 수 있음을 확인해 드리는 것입니다. 저희는 공인 및 면허를 보유한 마스터 배관공인 Bradley Burns를 8월 10일 월요일 오전 10시에서 11시 사이에 파견할 예정입니다. 배관을 설치하는 데 약 1시간 정도 소요될 것입니다. 그러면 가스레인지를 바로 사용하실 수 있을 것입니다.\n\n예약을 취소해야 하는 경우 즉시 저희에게 연락해 주십시오. 지금은 연중 특히 바쁜 시기라 일정이 상당히 꽉 차 있습니다.\n\nElna Dlamini\nFix-It Plumbing",
                "questions": [
                    {
                        "id": "v3-p6-t9-q139",
                        "questionNo": 139,
                        "text": "Select the best answer.",
                        "options": { "A": "fill", "B": "install", "C": "inspect", "D": "examine" },
                        "correctAnswer": "B",
                        "explanation": "가스 라인을 ‘설치하다’라는 의미의 (B) install이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t9-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": { "A": "would have sent", "B": "were sending", "C": "sent", "D": "will send" },
                        "correctAnswer": "D",
                        "explanation": "이메일을 보낸 날짜(8월 4일)보다 나중인 8월 10일의 일정이므로 미래 시제 (D) will send가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t9-q141",
                        "questionNo": 141,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Then your gas stove will be ready to use.",
                            "B": "Mr. Evans worked in your area last week.",
                            "C": "Please call us by 9:30 A.M. the day before.",
                            "D": "We do this job better than our competitors."
                        },
                        "correctAnswer": "A",
                        "explanation": "가스 배관 설치 완료 후의 상황을 설명하는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t9-q142",
                        "questionNo": 142,
                        "text": "Select the best answer.",
                        "options": { "A": "subscription", "B": "membership", "C": "celebration", "D": "appointment" },
                        "correctAnswer": "D",
                        "explanation": "서비스를 받기로 약속한 일정이므로 '예약, 약속'을 뜻하는 (D) appointment가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "v3-p6-t9-p4",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "To: Store Managers\nFrom: Alain Mareau\nDate: 4 October\nSubject: Recycling Initiative\n\nHello All,\n\nAs one of Australia's top electronics retailers, we always ___143___ to maintain our standing as an industry leader. Earlier this year we began testing a new program that allowed our customers to bring their used electronic devices to our stores for recycling. In exchange they received discounts on their purchases. The initiative exceeded our expectations. ___144___.\n\nIn late November, all store managers will be sent ___145___ instructions on how to collect items and send them to our recycling partner. ___146___, we will be announcing the program to the public via social media and print ads beginning in mid-November.\n\nPlease anticipate further updates and instructions on this exciting initiative.\n\nSincerely,\n\nAlain Mareau\nVice President, Product Development",
                "translation": "수신: 매장 관리자들\n발신: Alain Mareau\n날짜: 10월 4일\n제목: 재활용 캠페인\n\n안녕하세요 여러분,\n\n호주의 최고 가전 소매업체 중 하나로서, 우리는 항상 업계 리더로서의 입지를 유지하기 위해 노력합니다. 올해 초에 우리는 고객들이 중고 전자 기기를 우리 매장으로 가져와 재활용할 수 있게 하는 새로운 프로그램을 시범 운영하기 시작했습니다. 그 대가로 고객들은 구매 시 할인을 받았습니다. 이 캠페인은 우리의 기대를 뛰어넘었습니다. 이에 따라 우리는 올해 말까지 이 프로그램을 모든 지점으로 확대할 예정입니다.\n\n11월 말에 모든 매장 관리자들에게 품목 수집 및 재활용 파트너 업체로 발송하는 방법에 대한 상세한 지침이 발송될 것입니다. 또한, 우리는 11월 중순부터 SNS와 인쇄 광고를 통해 대중에게 이 프로그램을 발표할 예정입니다.\n\n이 흥미로운 캠페인에 대한 추가 업데이트와 지침을 기다려 주시기 바랍니다.\n\nAlain Mareau 드림\n제품 개발 부사장",
                "questions": [
                    {
                        "id": "v3-p6-t9-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": { "A": "seek", "B": "imply", "C": "predict", "D": "remember" },
                        "correctAnswer": "A",
                        "explanation": "업계 리더의 입지를 유지하려고 '노력하다, 추구하다'라는 의미의 (A) seek가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t9-q144",
                        "questionNo": 144,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Electronics recycling is helpful for the environment.",
                            "B": "Thus we are expanding this program to all our locations later this year.",
                            "C": "Several customers had unfortunately failed to retain their receipts.",
                            "D": "Businesses across the country already recycle many materials."
                        },
                        "correctAnswer": "B",
                        "explanation": "시범 운영 결과가 좋았으므로 전 지점 확대를 결정했다는 내용의 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t9-q145",
                        "questionNo": 145,
                        "text": "Select the best answer.",
                        "options": { "A": "detail", "B": "details", "C": "detailed", "D": "detailing" },
                        "correctAnswer": "C",
                        "explanation": "명사 instructions를 수식하여 '상세한'이라는 의미를 만드는 형용사 (C) detailed가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t9-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": { "A": "Instead", "B": "Additionally", "C": "However", "D": "For example" },
                        "correctAnswer": "B",
                        "explanation": "관리자에 대한 지침 전달 외에 대중 홍보 계획을 추가로 언급하므로 (B) Additionally가 정답입니다.",
                        "classification": "p6c"
                    }
                ]
            }
        ]
    };
