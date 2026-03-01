import { PracticeSet } from '../../v4/reading/part7/multi/types';

export const test3MultiData: PracticeSet[] = [
    // Questions 176-180: Article and E-mail (Double)
    {
        id: "v3-p7-t3-multi-set1",
        vol: 3,
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "v3-p7-t3-m1-p1",
                contextType: "P3_MEDI",
                docType: "ARTICLE",
                title: "Nolan Electronics to Expand in Germany",
                content: `MUNICH—Nolan Electronics, a leading provider of high-tech manufacturing equipment, announced today that it would be opening a new facility in Munich, Germany. The office, which is expected to be fully operational by January, will serve as the company's European headquarters. It will focus on providing technical support and sales services to its growing customer base in the region. CEO Sarah Nolan stated, "Munich is a vibrant city with a strong tradition of industrial excellence, making it the perfect location for our expansion into Europe."`,
                translation: `뮌헨 — 하이테크 제조 장비의 선두 공급업체인 놀란 일렉트로닉스(Nolan Electronics)는 오늘 독일 뮌헨에 새로운 시설을 열 것이라고 발표했습니다. 1월까지 본격적으로 가동될 예정인 이 사무소는 회사의 유럽 본사 역할을 하게 될 것입니다. 이 사무소는 이 지역의 성장하는 고객층에게 기술 지원 및 판매 서비스를 제공하는 데 집중할 것입니다. CEO 사라 놀란은 "뮌헨은 산업적 우수성의 전통이 강한 활기찬 도시로, 유럽 확장을 위한 완벽한 장소입니다"라고 말했습니다.`
            },
            {
                id: "v3-p7-t3-m1-p2",
                contextType: "P1_CORR",
                docType: "EMAIL",
                title: "E-Mail Message",
                content: `Date: October 12
From: Lucas Schmidt, Human Resources Manager
To: All Staff
Subject: New Opportunity in Munich

As many of you may have heard, Nolan Electronics will be opening a new office in Munich early next year. We are currently looking for experienced staff members who are interested in relocating to Germany to help launch the new facility. Positions are available in technical support, sales, and administration. Relocation assistance will be provided for those who are selected. If you are interested, please submit an application through the internal portal by October 25. An informational meeting will be held in the main conference room on October 15 at 2:00 P.M.`,
                translation: `날짜: 10월 12일
발신: 루카스 슈미트, 인사부 매니저
수신: 전 직원
제목: 뮌헨에서의 새로운 기회

여러분 중 많은 분이 들으셨겠지만, 놀란 일렉트로닉스는 내년 초 뮌헨에 새 사무소를 열 예정입니다. 저희는 현재 새 시설의 출범을 돕기 위해 독일로의 이전을 희망하는 경험 많은 직원을 찾고 있습니다. 기술 지원, 영업, 행정 분야에서 채용이 가능합니다. 선정된 분들께는 이전 지원이 제공될 것입니다. 관심이 있으신 분은 10월 25일까지 내부 포털을 통해 신청서를 제출해 주시기 바랍니다. 정보 회의가 10월 15일 오후 2시에 메인 회의실에서 열릴 예정입니다.`
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q176",
                questionNo: 176,
                text: "What is the main topic of the article?",
                classification: "P7_PURPOSE",
                options: {
                    "A": "A merger between two companies",
                    "B": "The opening of a new office",
                    "C": "A decline in high-tech sales",
                    "D": "The retirement of a CEO"
                },
                correctAnswer: "B",
                translation: "기사의 주요 주제는 무엇인가?",
                explanation: "기사 첫 문장에서 놀란 일렉트로닉스가 독일 뮌헨에 새로운 시설을 열 것이라고 발표했으므로, (B)가 정답이다."
            },
            {
                id: "v3-p7-t3-q177",
                questionNo: 177,
                text: "What is indicated about Munich?",
                classification: "P7_DETAIL",
                options: {
                    "A": "It is the largest city in Germany.",
                    "B": "It has a history of industrial excellence.",
                    "C": "It is the location of Nolan Electronics' current headquarters.",
                    "D": "It has a higher cost of living than other cities."
                },
                correctAnswer: "B",
                translation: "뮌헨에 대해 알 수 있는 것은?",
                explanation: "기사 마지막 부분에서 CEO 사라 놀란이 뮌헨은 산업적 우수성의 전통이 강한 도시(strong tradition of industrial excellence)라고 언급했으므로, (B)가 정답이다."
            },
            {
                id: "v3-p7-t3-q178",
                questionNo: 178,
                text: "What does the e-mail ask interested staff to do?",
                classification: "P7_DETAIL",
                options: {
                    "A": "Attend a meeting on October 25",
                    "B": "Contact the CEO directly",
                    "C": "Relocate to Germany immediately",
                    "D": "Apply through an internal portal"
                },
                correctAnswer: "D",
                translation: "이메일에서 관심 있는 직원에게 무엇을 하라고 요청하는가?",
                explanation: "이메일 두 번째 단락에서 관심 있는 분은 내부 포털을 통해 신청서를 제출해 달라(submit an application through the internal portal)고 했으므로, (D)가 정답이다."
            },
            {
                id: "v3-p7-t3-q179",
                questionNo: 179,
                text: "In what area are positions NOT specifically mentioned as being available in Munich?",
                classification: "P7_LINK",
                options: {
                    "A": "Technical support",
                    "B": "Sales",
                    "C": "Manufacturing",
                    "D": "Administration"
                },
                correctAnswer: "C",
                translation: "뮌헨 사무소에서 채용이 가능한 분야로 언급되지 않은 것은?",
                explanation: "기사에서 회사가 제조 장비 공급업체(provider of high-tech manufacturing equipment)라고 했지만, 뮌헨 사무소는 기술 지원 및 판매 서비스에 집중할 것(focus on providing technical support and sales services)이라고 했다. 이메일에서도 기술 지원, 영업, 행정 분야(technical support, sales, and administration)에서 채용이 가능하다고 언급했으므로, 제조(Manufacturing) 분야는 언급되지 않았다. 따라서 (C)가 정답이다."
            },
            {
                id: "v3-p7-t3-q180",
                questionNo: 180,
                text: "When will the informational meeting take place?",
                classification: "P7_DETAIL",
                options: {
                    "A": "October 12",
                    "B": "October 15",
                    "C": "October 25",
                    "D": "January 1"
                },
                correctAnswer: "B",
                translation: "정보 회의는 언제 열리는가?",
                explanation: "이메일 마지막 문장에서 정보 회의가 10월 15일 오후 2시에 열릴 예정(meeting will be held ... on October 15 at 2:00 P.M.)이라고 했으므로, (B)가 정답이다."
            }
        ]
    },
    // Questions 181-185: Announcement and E-mail (Double)
    {
        id: "v3-p7-t3-multi-set2",
        vol: 3,
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "v3-p7-t3-m2-p1",
                contextType: "P4_MARK",
                docType: "ANNOUNCEMENT",
                title: "New Security Procedures at Oakwood Plaza",
                content: `Starting November 1, all tenants and visitors at Oakwood Plaza will be required to follow new security procedures. All visitors must check in at the reception desk in the main lobby and provide a valid form of identification. They will be issued a temporary visitor badge, which must be worn at all times while in the building. Tenants will be required to use their new electronic key cards to access the elevators and the parking garage. If your company has not yet received its new key cards, please contact the building management office immediately.`,
                translation: `오크우드 플라자의 새로운 보안 절차
11월 1일부터 오크우드 플라자의 모든 입주자 및 방문객은 새로운 보안 절차를 따라야 합니다. 모든 방문객은 메인 로비의 안내 데스크에서 체크인을 하고 유효한 신분증을 제시해야 합니다. 방문객에게는 임시 방문객 배지가 발급되며, 건물 내에 있는 동안 항상 패용해야 합니다. 입주자는 엘리베이터와 주차장에 출입하기 위해 새로운 전자 키카드를 사용해야 합니다. 귀사가 아직 새 키카드를 받지 못했다면 즉시 건물 관리 사무소에 연락해 주시기 바랍니다.`
            },
            {
                id: "v3-p7-t3-m2-p2",
                contextType: "P1_CORR",
                docType: "EMAIL",
                title: "Update on New Key Cards",
                content: `To: Oakwood Plaza Tenants
From: Jennifer Lopez, Building Management
Subject: Update on New Key Cards

Dear Tenants,
Further to our announcement regarding the new security procedures starting November 1, we would like to provide an update on the distribution of the electronic key cards. Most companies have already collected their cards. However, if your staff members still need their cards, we will be holding a final distribution session in the basement community room on October 28 from 9:00 A.M. to 5:00 P.M. Please ensure that a representative from your company brings a list of all current employees to verify the number of cards required.`,
                translation: `수신: 오크우드 플라자 입주자
발신: 제니퍼 로페즈, 건물 관리부
제목: 새 키카드에 대한 최신 정보

입주자 여러분께,
11월 1일부터 시작되는 새로운 보안 절차에 대한 공지 이후, 전자 키카드 배포와 관련된 최신 정보를 알려드리고자 합니다. 대부분의 회사가 이미 카드를 수령했습니다. 하지만 직원이 여전히 카드가 필요하다면, 10월 28일 오전 9시부터 오후 5시까지 지하 커뮤니비 룸에서 마지막 배포 세션을 열 예정입니다. 귀사의 담당자가 필요한 카드 수량을 확인하기 위해 현재 모든 직원의 명단을 지참하도록 해 주십시오.`
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q181",
                questionNo: 181,
                text: "Why was the announcement issued?",
                classification: "P7_PURPOSE",
                options: {
                    "A": "To introduce new building staff",
                    "B": "To announce a change in security measures",
                    "C": "To inform tenants about building repairs",
                    "D": "To advertise available office space"
                },
                correctAnswer: "B",
                translation: "공고문이 발행된 이유는 무엇인가?",
                explanation: "공고문 첫 문장에서 오크우드 플라자의 새로운 보안 절차를 따라야 한다고 했으므로, 보안 조치의 변경을 알리기 위한 것임을 알 수 있다. 따라서 (B)가 정답이다."
            },
            {
                id: "v3-p7-t3-q182",
                questionNo: 182,
                text: "What are visitors required to do?",
                classification: "P7_DETAIL",
                options: {
                    "A": "Present identification at the reception desk",
                    "B": "Use electronic key cards to access elevators",
                    "C": "Park in a designated visitor lot",
                    "D": "Register for a permanent security badge"
                },
                correctAnswer: "A",
                translation: "방문객들은 무엇을 해야 하는가?",
                explanation: "공고문에서 모든 방문객은 안내 데스크에서 체크인을 하고 유효한 신분증을 제시해야 한다(provide a valid form of identification)고 했으므로, (A)가 정답이다."
            },
            {
                id: "v3-p7-t3-q183",
                questionNo: 183,
                text: "What should a company do if it has not yet received its key cards?",
                classification: "P7_LINK",
                options: {
                    "A": "Visit the building management office immediately",
                    "B": "Email Jennifer Lopez for assistance",
                    "C": "Send a representative to the distribution session on October 28",
                    "D": "Wait until November 1 for delivery"
                },
                correctAnswer: "C",
                translation: "키카드를 아직 받지 못한 회사는 무엇을 해야 하는가?",
                explanation: "공고문에서는 관리 사무소에 즉시 연락하라고 했으나, 이메일에서 아직 카드가 필요한 경우 10월 28일에 열리는 마지막 배포 세션에 오라고 안내하고 있다. 따라서 (C)가 정답이다."
            },
            {
                id: "v3-p7-t3-q184",
                questionNo: 184,
                text: "What must a company representative bring to the distribution session?",
                classification: "P7_DETAIL",
                options: {
                    "A": "A signed lease agreement",
                    "B": "A list of employees",
                    "C": "Old key cards for exchange",
                    "D": "A valid driver's license"
                },
                correctAnswer: "B",
                translation: "회사 담당자가 배포 세션에 무엇을 가져와야 하는가?",
                explanation: "이메일 마지막 문장에서 카드 수량 확인을 위해 현재 모든 직원의 명단(list of all current employees)을 지참하라고 했으므로, (B)가 정답이다."
            },
            {
                id: "v3-p7-t3-q185",
                questionNo: 185,
                text: "When will the new security procedures go into effect?",
                classification: "P7_DETAIL",
                options: {
                    "A": "October 28",
                    "B": "November 1",
                    "C": "December 1",
                    "D": "January 1"
                },
                correctAnswer: "B",
                translation: "새로운 보안 절차는 언제부터 시행되는가?",
                explanation: "공고문과 이메일 모두에서 새로운 보안 절차가 11월 1일부터 시작된다고 했으므로, (B)가 정답이다."
            }
        ]
    },
    // Questions 186-190: Letter, Information, and E-mail (Triple)
    {
        id: "v3-p7-t3-multi-set3",
        vol: 3,
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t3-m3-p1",
                contextType: "P1_CORR",
                docType: "LETTER",
                content: `Date: August 15
From: Roberto Silva, City Manager
To: Maria Garcia

Dear Ms. Garcia,
Thank you for your inquiry regarding the use of the Green Valley Community Center for your upcoming neighborhood association meeting. I am pleased to inform you that the center is available on the evening of September 12. However, please be aware that all users of the community center must adhere to the rules and regulations established by the city. I have enclosed a copy of the rules for your reference. If you agree to these terms, please sign and return the attached agreement along with the required deposit by August 25.`,
                translation: `날짜: 8월 15일
발신: 로베르토 실바, 시 관리인
수신: 마리아 가르시아

가르시아 씨께,
다가오는 지역 협의회 회의를 위해 그린 밸리 커뮤니티 센터를 사용하는 것에 대한 문의에 감사드립니다. 9월 12일 저녁에 센터 사용이 가능하다는 것을 알려드리게 되어 기쁩니다. 하지만 커뮤니티 센터의 모든 사용자는 시에서 정한 규칙과 규정을 준수해야 한다는 점을 유의해 주십시오. 참고하실 수 있도록 규칙 사본을 동봉했습니다. 이 약관에 동의하신다면, 서명된 합의서를 필요한 보증금과 함께 8월 25일까지 보내주시기 바랍니다.`
            },
            {
                id: "v3-p7-t3-m3-p2",
                contextType: "P2_MARK",
                docType: "INFORMATION",
                title: "Green Valley Community Center Rules",
                content: `1. The community center is available for use from 8:00 A.M. to 10:00 P.M. daily.
2. All meetings and events must be scheduled at least two weeks in advance.
3. Users are responsible for cleaning the facility and removing all trash after their event.
4. Food and beverages are allowed, but alcoholic drinks are strictly prohibited.
5. A non-refundable deposit is required at the time of booking.
6. Noise levels must be kept to a minimum out of respect for the surrounding neighborhood.`,
                translation: `그린 밸리 커뮤니티 센터 규칙
1. 커뮤니티 센터는 매일 오전 8시부터 오후 10시까지 사용할 수 있습니다.
2. 모든 회의와 행사는 최소 2주 전에 예약해야 합니다.
3. 사용자는 행사 종료 후 시설 청소 및 모든 쓰레기 제거에 대한 책임이 있습니다.
4. 음식과 음료는 허용되지만, 알코올 음료는 엄격히 금지됩니다.
5. 예약 시 환불 불가능한 보증금이 필요합니다.
6. 주변 이웃을 존중하여 소음 수준을 최소한으로 유지해야 합니다.`
            },
            {
                id: "v3-p7-t3-m3-p3",
                contextType: "P1_CORR",
                docType: "EMAIL",
                title: "Community Center Agreement",
                content: `To: Roberto Silva
From: Maria Garcia
Date: August 20
Subject: Community Center Agreement

Dear Mr. Silva,
Thank you for your letter. I have reviewed the rules for the Green Valley Community Center and agree to the terms. I have attached the signed agreement as requested. I would also like to confirm that we will be serving light refreshments, including sandwiches and sodas, at our meeting on September 12. As for the deposit, I will be dropping off a check at your office tomorrow morning.`,
                translation: `수신: 로베르토 실바
발신: 마리아 가르시아
날짜: 8월 20일
제목: 커뮤니티 센터 합의서

실바 씨께,
편지에 감사드립니다. 그린 밸리 커뮤니티 센터의 규칙을 검토했으며 약관에 동의합니다. 요청하신 대로 서명된 합의서를 첨부했습니다. 또한 9월 12일 회의에서 샌드위치와 탄산음료를 포함한 가벼운 다과를 제공할 것임을 확인해 드리고자 합니다. 보증금에 대해서는 내일 아침 귀하의 사무실로 수표를 가져다 드릴 것입니다.`
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q186",
                questionNo: 186,
                text: "What is the purpose of the letter?",
                classification: "P7_PURPOSE",
                options: {
                    "A": "To invite Ms. Garcia to a city council meeting",
                    "B": "To confirm the availability of a community center",
                    "C": "To announce a new neighborhood association",
                    "D": "To request a refund for a cancelled event"
                },
                correctAnswer: "B",
                translation: "편지의 목적은 무엇인가?",
                explanation: "편지에서 커뮤니티 센터 사용 문의에 답변하며 9월 12일에 사용 가능하다는 것을 알려주고 있으므로, (B)가 정답이다."
            },
            {
                id: "v3-p7-t3-q187",
                questionNo: 187,
                text: "When must the signed agreement be returned?",
                classification: "P7_DETAIL",
                options: {
                    "A": "August 15",
                    "B": "August 20",
                    "C": "August 25",
                    "D": "September 12"
                },
                correctAnswer: "C",
                translation: "서명된 합의서는 언제까지 제출해야 하는가?",
                explanation: "편지 마지막 부분에서 서명된 합의서를 보증금과 함께 8월 25일까지 제출해 달라고 했으므로, (C)가 정답이다."
            },
            {
                id: "v3-p7-t3-q188",
                questionNo: 188,
                text: "What is NOT allowed at the community center?",
                classification: "P7_DETAIL",
                options: {
                    "A": "Sandwiches",
                    "B": "Sodas",
                    "C": "Alcoholic beverages",
                    "D": "Evening meetings"
                },
                correctAnswer: "C",
                translation: "커뮤니티 센터에서 허용되지 않는 것은?",
                explanation: "규칙 4번에서 알코올 음료는 엄격히 금지된다(alcoholic drinks are strictly prohibited)고 했으므로, (C)가 정답이다."
            },
            {
                id: "v3-p7-t3-q189",
                questionNo: 189,
                text: "What will Ms. Garcia probably do tomorrow?",
                classification: "P7_LINK",
                options: {
                    "A": "Sign the agreement",
                    "B": "Clean the community center",
                    "C": "Pay a deposit",
                    "D": "Host a meeting"
                },
                correctAnswer: "C",
                translation: "가르시아 씨는 내일 무엇을 할 것인가?",
                explanation: "이메일 마지막 문장에서 보증금 수표를 내일 아침 사무실로 가져다 주겠다(dropping off a check ... tomorrow morning)고 했으므로, 보증금을 지불할 것임을 알 수 있다. 따라서 (C)가 정답이다."
            },
            {
                id: "v3-p7-t3-q190",
                questionNo: 190,
                text: "What rule is Ms. Garcia's meeting most likely following by being held on September 12?",
                classification: "P7_LINK",
                options: {
                    "A": "Rule 1",
                    "B": "Rule 2",
                    "C": "Rule 3",
                    "D": "Rule 4"
                },
                correctAnswer: "B",
                translation: "가르시아 씨가 9월 12일에 회의를 여는 것은 어떤 규칙을 따르는 것인가?",
                explanation: "규칙 2번에서 최소 2주 전에 예약해야 한다고 했는데, 가르시아 씨가 문의하고 합의하는 시점이 8월 중순(15~20일)이고 회의는 9월 12일이므로 2주 이전의 조건을 충족한다. 따라서 (B)가 정답이다."
            }
        ]
    }
];
