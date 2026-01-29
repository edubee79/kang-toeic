import { PracticeSet } from './rc_part7_types';

export const rcPart7Test8: PracticeSet[] = [
    // Questions 176-180: Double Passage (Table of Contents + Book Review)
    {
        id: "p7-t8-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t8-s11-p1",
                contextType: "P5",
                docType: "TABLE_OF_CONTENTS",
                title: "Leadership: Essays on Being a Great Leader",
                content: `Skymill Publishing\nJoan Cristophe, Senior Editor\n\nTable of Contents\n\nIntroduction (ii)\n\nBeyond the Meeting Agenda: Leadership in Action (2)\nFrancisca Conde\n\nLeadership Lessons from Local Business (34)\nXiaofeng Li\n\nThink Small...Details Matter (51)\nRon Blake\n\nLow-Tech Managers in Business (83)\nT. Walker Prince\n\nFuture Leadership Models (119)\nRoderick Muller`
            },
            {
                id: "p7-t8-s11-p2",
                contextType: "P4",
                docType: "REVIEW",
                title: "Book Review: Leadership: Essays on Being a Great Leader",
                content: `As a businessperson, I am glad there is a publisher whose sole focus is on business. Skymill Publishing's latest book is a great one for leaders in all industries. Joan Cristophe has sought out some of the world's best minds to write essays for this book that will provide readers with some unique perspectives. In her own introduction, she argues that there is a greater need than ever before for more effective leaders in business.\n\nCristophe expertly arranges the essays in this collection so that the voices of each author complement one another. The essay by Xiaofeng Li is the perfect example of this. It is strategically sandwiched between Francisca Conde's essay on leadership in action and Ron Blake's essay on focusing on the details. Roderick Muller's essay is the sole disappointment. Surprisingly little new information or insight is offered on its pages, and the writing style is rather flat. Besides that, the collection is excellent, and readers with an interest in leadership in many different situations will find useful nuggets of wisdom and vision within.`
            }
        ],
        questions: [
            {
                id: "p7-t8-q176",
                questionNo: 176,
                text: "According to the table of contents, who is Ms. Cristophe?",
                options: {
                    "A": "The owner of Skymill Publishing",
                    "B": "A book editor",
                    "C": "A local business person",
                    "D": "An industry leader"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "목차(지문 1) 상단에 Joan Cristophe는 'Senior Editor'로 직함이 명시되어 있습니다."
            },
            {
                id: "p7-t8-q177",
                questionNo: 177,
                text: "What is indicated about Skymill Publishing?",
                options: {
                    "A": "It recently won an award.",
                    "B": "It specializes in business books.",
                    "C": "It is currently hiring.",
                    "D": "It is releasing its first book."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "리뷰(지문 2)의 첫 문장에서 '비즈니스에만 전념하는 출판사(publisher whose sole focus is on business)'라고 언급되었습니다."
            },
            {
                id: "p7-t8-q178",
                questionNo: 178,
                text: "According to the book review, what is the topic of the book introduction?",
                options: {
                    "A": "The current need for strong business leadership",
                    "B": "Learning from famous business leaders",
                    "C": "Popular training programs in corporations",
                    "D": "Process improvements that work"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "리뷰 첫 번째 단락 끝에서 도입부(introduction)가 '그 어느 때보다 효과적인 비즈니스 리더에 대한 필요성이 커졌다'고 주장한다고 설명합니다."
            },
            {
                id: "p7-t8-q179",
                questionNo: 179,
                text: "In the book review, the word \"sole\" in paragraph 2, line 5, is closest in meaning to",
                options: {
                    "A": "underlying",
                    "B": "entire",
                    "C": "only",
                    "D": "usual"
                },
                correctAnswer: "C",
                classification: "P7_VOCABULARY",
                explanation: "본문에서 뮬러의 에세이가 '유일한(sole)' 실망점이라고 언급했으므로 'only'와 의미가 가장 가깝습니다."
            },
            {
                id: "p7-t8-q180",
                questionNo: 180,
                text: "On what page does the essay with notably minimal new information begin?",
                options: {
                    "A": "Page 34",
                    "B": "Page 51",
                    "C": "Page 83",
                    "D": "Page 119"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "리뷰에서 Roderick Muller의 에세이가 새로운 정보가 거의 없어 실망스럽다고 했으므로, 목차에서 Roderick Muller의 글이 시작되는 119페이지를 선택해야 합니다."
            }
        ]
    },
    // Questions 181-185: Double Passage (Policy + E-mail)
    {
        id: "p7-t8-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t8-s12-p1",
                contextType: "P6",
                docType: "POLICY",
                title: "Tanyalog Industries Policy 4-02",
                content: `The cafeteria (3rd floor) is open to all employees and guests from 8:00 A.M. to 2:30 P.M. Food from the cafeteria may be eaten there or brought on trays to the following conference rooms: Chestnut Room (1st floor), Burnside Room (2nd floor), Smith Room (3rd floor), and Danville Room (4th floor).\n\nUsing the rooms at lunchtime does not require a reservation. However, please do not enter the room if it is already occupied by staff members for a business meeting. The room schedule is displayed on a digital panel by the door of each conference room.\n\nAll food items and trash must be removed from the conference room after use. Bins are located directly outside each of the conference rooms.\n\nNo food or drink is allowed in the Essex Room (3rd floor) or the Martinelli Room (4th floor).`
            },
            {
                id: "p7-t8-s12-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Eugene Lasich\nTo: All Expansion Committee Members\nSubject: Tanyalog Industries Expansion Meeting\nDate: September 10\n\nCommittee Members,\n\nPlease join me for the first meeting of the Expansion Committee on Monday, September 17. All attendees should arrive at the Martinelli Room at 10:00 A.M. Then, at 12:00 P.M., we will break for lunch and you can visit the cafeteria to receive a complimentary meal. Just show your visitor's badge at Window 4. All committee members should bring their trays to the conference room on the third floor right beside the cafeteria, where we will continue our meeting from 12:45 P.M. until 4:00 P.M.\n\nThank you. We look forward to your input at the meeting.\n\nEugene Lasich, Expansion Committee Chair\nTanyalog Industries`
            }
        ],
        questions: [
            {
                id: "p7-t8-q181",
                questionNo: 181,
                text: "According to the policy, what is shown on a digital panel?",
                options: {
                    "A": "The agenda for an upcoming meeting",
                    "B": "Rules for meeting room use",
                    "C": "Details about a room's availability",
                    "D": "Instructions for room devices"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "정책 지문(지문 1)에서 '방 일정(room schedule)이 각 회의실 문의 디지털 패널에 표시된다'고 했습니다. 이는 방의 사용 가능 여부를 의미합니다."
            },
            {
                id: "p7-t8-q182",
                questionNo: 182,
                text: "What are conference room users asked to do before leaving a room?",
                options: {
                    "A": "Sign the attendance sheet",
                    "B": "Close the door",
                    "C": "Turn off the lights",
                    "D": "Clean up the space"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "정책 지문에서 '모든 음식물과 쓰레기는 사용 후 회의실에서 치워야 한다(removed from the conference room)'고 했으므로 공간을 정리하는 것이 요구됩니다."
            },
            {
                id: "p7-t8-q183",
                questionNo: 183,
                text: "In the e-mail, the word \"complimentary\" in paragraph 1, line 4, is closest in meaning to",
                options: {
                    "A": "free",
                    "B": "healthy",
                    "C": "favorable",
                    "D": "balanced"
                },
                correctAnswer: "A",
                classification: "P7_VOCABULARY",
                explanation: "'complimentary'는 서비스나 제품이 '무료로(free)' 제공됨을 의미합니다."
            },
            {
                id: "p7-t8-q184",
                questionNo: 184,
                text: "What should committee members do at Window 4?",
                options: {
                    "A": "Collect meeting materials",
                    "B": "Show proof of identification",
                    "C": "Submit their food orders",
                    "D": "Return their used trays"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "이메일에서 '4번 창구(Window 4)에서 방문자 배지(visitor's badge)를 제시하라'고 했습니다. 배지를 보여주는 행위는 본인 확인(identification) 절차입니다."
            },
            {
                id: "p7-t8-q185",
                questionNo: 185,
                text: "Where will committee members most likely be at 1:00 P.M.?",
                options: {
                    "A": "In the cafeteria",
                    "B": "In the Smith Room",
                    "C": "In the Essex Room",
                    "D": "In the Martinelli Room"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "이메일에서 12:45 P.M.부터 4:00 P.M.까지 '카페테리아 바로 옆 3층 회의실'에서 회의를 한다고 했습니다. 지문 1의 정책을 보면 카페테리아는 3층에 있고, 식사가 가능한 3층 회의실은 'Smith Room'입니다. (Essex Room은 식사가 금지됨)"
            }
        ]
    },
    // Questions 186-190: Triple Passage (Article + E-mail + E-mail)
    {
        id: "p7-t8-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t8-s13-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Hiking Permits to Be Required for Upton Parks",
                content: `UPTON (January 8)—Starting on May 25, hikers will be required to obtain a permit for each day they hike on certain trails in Upton parks. The designated trails include some of the most popular hiking spots in the area. The permits are free of charge and require only that hikers register online at www.uptonparks.org or at any Upton Parks Department office.\n\nThe move is part of an effort to reduce foot traffic on the most used trails. Regina Faroni, a local hiker, expressed concern that she might not be able to get permits for spontaneous, weather-dependent hikes. However, she admits it would reduce the number of hikers on certain trails.\n—EJ Harjo, Upton Digest`
            },
            {
                id: "p7-t8-s13-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Arlo Gomes <arlog@uptonhikingclub.org>\nTo: Upton Parks Department <info@uptonparks.org>\nSubject: Hiking permits\nDate: January 22\n\nTo Whom It May Concern,\n\nI read in the Upton Digest that hikers soon will be required to register for permits. As the organizer of the Upton Hiking Club (17-20 members), I'm concerned about how this affects our group hikes. Is there a list of trails requiring permits? Will the number of permits vary? Also, we often take unplanned hikes on the spur of the moment and worry this requirement will prevent that.\n\nRegards,\nArlo Gomes`
            },
            {
                id: "p7-t8-s13-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Upton Parks Department <info@uptonparks.org>\nTo: Arlo Gomes\nSubject: RE: Hiking permits\nDate: January 23\n\nHello, Mr. Gomes,\n\nI've attached a draft list of the twelve trails requiring permits and their daily limits. Permits can be reserved up to two weeks in advance. For most trails, the limit is substantially higher than your club's typical group size. Same-day permits can also be obtained. To stay updated on policy changes, please sign up for our weekly newsletter on our website.\n\nJenny Grieb, Public Relations`
            }
        ],
        questions: [
            {
                id: "p7-t8-q186",
                questionNo: 186,
                text: "According to the article, why will permits be required for some trails?",
                options: {
                    "A": "To raise money to maintain the parks",
                    "B": "To encourage visitors to explore park activities other than hiking",
                    "C": "To ensure the trails are not too crowded",
                    "D": "To determine which trails are most frequently used"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "기사(지문 1)에서 '가장 많이 이용되는 트레일의 보행자 교통량을 줄이기 위한 노력(reduce foot traffic)'의 일환이라고 했으므로 혼잡 방지가 목적입니다."
            },
            {
                id: "p7-t8-q187",
                questionNo: 187,
                text: "Why did Mr. Gomes contact the Upton Parks Department?",
                options: {
                    "A": "To request information",
                    "B": "To obtain trail maps",
                    "C": "To apply for a group permit",
                    "D": "To discuss membership options"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "Gomes 씨는 이메일(지문 2)에서 새로운 허가제 정책이 클럽 활동에 어떤 영향을 미칠지 '더 자세한 정보(more details)'를 요청하기 위해 연락했습니다."
            },
            {
                id: "p7-t8-q188",
                questionNo: 188,
                text: "What concern does Mr. Gomes share with the Upton Digest reader?",
                options: {
                    "A": "Too many trails will require permits.",
                    "B": "Last-minute permits may not be available.",
                    "C": "It is expensive to get a hiking permit.",
                    "D": "Overnight permits will be for groups only."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "기사(지문 1)의 Faroni 씨는 즉흥적인(spontaneous) 하이킹을 못 할까 봐 걱정했고, Gomes 씨(지문 2) 역시 '즉흥적으로(spur of the moment)' 떠나는 하이킹에 제약이 생길 것을 우려했습니다."
            },
            {
                id: "p7-t8-q189",
                questionNo: 189,
                text: "How many permits will likely be offered for most trails?",
                options: {
                    "A": "Fewer than twelve",
                    "B": "Twelve to seventeen",
                    "C": "Eighteen to twenty",
                    "D": "More than twenty"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "지문 2에서 클럽 인원이 17~20명이라고 했고, 지문 3에서 허가증 발급 한도가 클럽 인원보다 '상당히 더 높다(substantially higher)'고 했으므로 20명 이상임을 알 수 있습니다."
            },
            {
                id: "p7-t8-q190",
                questionNo: 190,
                text: "According to the second e-mail, what does the newsletter provide?",
                options: {
                    "A": "Articles written by the Upton Hiking Club",
                    "B": "Details about trail conditions",
                    "C": "Information about policy changes",
                    "D": "Access to additional permits"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "Jenny Grieb의 이메일(지문 3) 끝부분에서 뉴스레터를 신청하면 '정책 변경 사항에 대한 사전 공지(advance notice of any updates to our policies)'를 받을 수 있다고 안내합니다."
            }
        ]
    },
    // Questions 191-195: Triple Passage (Reservation + E-mail + E-mail)
    {
        id: "p7-t8-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t8-s14-p1",
                contextType: "P5",
                docType: "RESERVATION",
                title: "Your Move Vehicle Rental Company",
                content: `Reservation Number: 15288242\nPickup Location: 2833 Centennial Rd., Muncie, IN 47303\nDate and Time: October 31, 10:00 A.M.\nDrop-off Location: Same as pickup\nVehicle Description: 5-meter moving van\n\nIf you need to change your reservation, you can do so via your online account until three days before your scheduled pickup. After that, contact reservations@yourmove.com. Include your reservation number in the subject.`
            },
            {
                id: "p7-t8-s14-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: reservations@yourmove.com\nFrom: selina_os@chestnutmail.com\nDate: October 29\nSubject: Reservation 15288242\n\nHello,\n\nI reserved a moving van online for $150. I mistakenly listed the same location for both pickup and drop-off. I'd like a drop-off location closer to Cumberland. Can you help me update this?\n\nSincerely,\nSelina Osman`
            },
            {
                id: "p7-t8-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: selina_os@chestnutmail.com\nFrom: reservations@yourmove.com\nDate: October 30\nSubject: RE: Reservation 15288242\n\nDear Ms. Osman,\n\nWe have an office outside Indianapolis, ten minutes from Cumberland. Dropping off there means 90km of driving from Muncie. Updated estimate:\n\n- Rental (van/1 day): $39.99\n- Cart: $6.99\n- Furniture pads (12): $9.99\n- Distance ($1.05/km x 90km): $94.50\n- Insurance: $19.99\n**Total: $171.46 (plus taxes)**\n\nYour card will be charged for equipment now, and the final price adjusted upon return.`
            }
        ],
        questions: [
            {
                id: "p7-t8-q191",
                questionNo: 191,
                text: "When will a vehicle be rented?",
                options: {
                    "A": "On October 28",
                    "B": "On October 29",
                    "C": "On October 30",
                    "D": "On October 31"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "예약서(지문 1)에 픽업 날짜가 명확하게 'October 31'로 기재되어 있습니다."
            },
            {
                id: "p7-t8-q192",
                questionNo: 192,
                text: "What can be concluded about Ms. Osman?",
                options: {
                    "A": "She has used the same rental company previously.",
                    "B": "She has been planning a move for a long time.",
                    "C": "She did not read the rental agreement carefully.",
                    "D": "She was unable to change her reservation online."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "지문 1에 따르면 '픽업 3일 전(10월 28일)'까지만 온라인 수정이 가능합니다. Osman 씨는 10월 29일에 이메일을 보냈으므로 온라인상에서 직접 수정할 수 없는 시점이어서 수동으로 문의한 것입니다."
            },
            {
                id: "p7-t8-q193",
                questionNo: 193,
                text: "Who is Mr. Muhn?",
                options: {
                    "A": "A furniture mover",
                    "B": "A vehicle insurance agent",
                    "C": "A reservation agent",
                    "D": "A storage facility manager"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "Alistair Muhn은 'reservations@yourmove.com' 주소로 고객의 예약 변경 요청에 답변하고 있으므로 예약 담당자임을 알 수 있습니다."
            },
            {
                id: "p7-t8-q194",
                questionNo: 194,
                text: "What is indicated about a furniture cart?",
                options: {
                    "A": "It costs $6.99 per day to rent.",
                    "B": "It does not have to be returned.",
                    "C": "It folds up for easy transport.",
                    "D": "It is part of a set."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "지문 3의 비용 항목 중 'Rental: wheeled furniture cart | $6.99'라고 명시되어 있습니다."
            },
            {
                id: "p7-t8-q195",
                questionNo: 195,
                text: "What is true about the new cost estimate?",
                options: {
                    "A": "It is higher than the original estimate.",
                    "B": "It must be paid in full immediately.",
                    "C": "It includes the cost of fuel.",
                    "D": "It expires in three days."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "Osman 씨의 이메일(지문 2)에서 원래 견적이 $150였다고 했고, 변경 후 받은 새 견적(지문 3)은 $171.46이므로 비용이 더 높아졌습니다."
            }
        ]
    },
    // Questions 196-200: Triple Passage (E-mail + E-mail + Web Page)
    {
        id: "p7-t8-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t8-s15-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Soon-Yee Kim\nFrom: Frank Zubiri, HR Senior Director\nDate: February 12\nSubject: Welcome\n\nDear Ms. Kim, Welcome to Jacobi Technologies! Your first day is Monday, February 28, at 9 A.M. (Green Building, Naperville). Your supervisor, Sophia Holland, will guide you. Schedule:\n1. Contract signing & ID badge (Green Building)\n2. Assign cubicle (4th floor, Yellow Building)\n3. Luncheon (Yellow Building conference room)\n4. Campus tour (Look for separate email)`
            },
            {
                id: "p7-t8-s15-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: New Hires\nFrom: Toru Hada\nDate: February 15\nSubject: Campus Tour\n\nTour dates are February 21, 28, March 7, and 14. Reply with your name and start date. Tours start at 3:00 P.M. (Blue Building lobby). Locations: labs, sustainable power plant, and amenities.`
            },
            {
                id: "p7-t8-s15-p3",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `https://www.jacobitechnologies.com/about\n\nJacobi Technologies (Naperville/Providence) specializes in microprocessors. Our 900-acre Naperville campus features 10 Earth-friendly buildings and a waste-to-energy plant. Amenities for workers include two cafés, a gym, outdoor basketball/tennis courts, and a childcare center.`
            }
        ],
        questions: [
            {
                id: "p7-t8-q196",
                questionNo: 196,
                text: "According to the first e-mail, what is one thing that Ms. Kim will do on her first day at work?",
                options: {
                    "A": "Learn to use some company software",
                    "B": "Watch a video for new hires",
                    "C": "Eat a meal with her team",
                    "D": "Receive a laptop computer"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "지문 1의 신입사원 일정 중 3번에 '팀원들과의 오찬(luncheon with members of your team)'이 명시되어 있습니다."
            },
            {
                id: "p7-t8-q197",
                questionNo: 197,
                text: "Who most likely is Mr. Hada?",
                options: {
                    "A": "A human resources staff member",
                    "B": "A sales team leader",
                    "C": "A technology expert",
                    "D": "A café worker"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "Toru Hada 씨는 신입 사원 투어 일정을 관리하고 온보딩(onboarding) 과정에 대한 안내를 하고 있으므로 인사팀 직원임을 알 수 있습니다."
            },
            {
                id: "p7-t8-q198",
                questionNo: 198,
                text: "Where will Ms. Kim most likely be at 3 P.M. on February 28?",
                options: {
                    "A": "In her cubicle in the Yellow Building",
                    "B": "In the lobby of the Blue Building",
                    "C": "In the Yellow Building conference room",
                    "D": "In Ms. Holland's office"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "Kim 씨의 첫 출근일이 2월 28일이므로, 지문 2의 안내에 따라 2월 28일 오후 3시 캠퍼스 투어의 집결지인 'Blue Building 로비'에 있을 것입니다."
            },
            {
                id: "p7-t8-q199",
                questionNo: 199,
                text: "What is suggested about guided tours at Jacobi Technologies?",
                options: {
                    "A": "They are open to both employees and nonemployees.",
                    "B": "They stop at both indoor sites and outdoor sites.",
                    "C": "They last approximately two hours.",
                    "D": "They include a brief talk by a researcher."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "지문 2에서 투어 중 편의시설(amenities)을 방문한다고 했고, 지문 3에서 해당 편의시설 중에 실외(outdoor) 운동장들과 실내 시설들이 모두 언급되어 있으므로 투어 코스에 실내외 장소가 모두 포함됨을 알 수 있습니다."
            },
            {
                id: "p7-t8-q200",
                questionNo: 200,
                text: "According to the Web page, what is true about Jacobi Technologies?",
                options: {
                    "A": "It will soon open a childcare facility.",
                    "B": "It acquired the Naperville property ten years ago.",
                    "C": "It charges employees a fee to use the company gym.",
                    "D": "It operates more than one campus."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문 3에 따르면 회사는 Naperville(일리노이)과 Providence(로드아일랜드) 두 곳에 거점과 직원을 두고 운영하고 있습니다."
            }
        ]
    }
];
