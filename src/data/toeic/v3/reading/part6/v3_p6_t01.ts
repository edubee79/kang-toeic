import { Part6TestSet } from './types';

export const test1Data: Part6TestSet = {
        "testId": 1,
        "vol": 3,
        "title": "Test 1",
        "passages": [
            {
                "setId": "v3-p6-t1-p1",
                "contextType": "P2",
                "docType": "notice",
                "guidance": "Questions 131-134 refer to the following notice.",
                "content": "NOTICE\n\nTo continue providing the highest level of ___131___ to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ___132___ this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.\n\nWe ___133___ for any inconvenience this might cause. ___134___.\n\nDenville Property Management Partners",
                "translation": "공지\n\n기업 임차인들에게 최고 수준의 서비스를 지속적으로 제공하기 위해, 이번 주말인 5월 13일과 5월 14일에 남쪽 로비 화장실 유지보수 작업을 진행할 예정입니다. 이 기간 동안 화장실 사용이 중단되오니, 임차인 여러분과 방문객들께서는 북쪽 로비의 시설을 이용해 주시기 바랍니다.\n\n불편을 끼쳐 드려 죄송합니다. 문의 사항이나 의견은 관리 사무소로 연락해 주시기 바랍니다.\n\nDenville 부동산 관리 파트너스",
                "questions": [
                    {
                        "id": "v3-p6-t1-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "serve",
                            "B": "served",
                            "C": "server",
                            "D": "service"
                        },
                        "correctAnswer": "D",
                        "explanation": "전치사 of의 목적어 역할을 하는 명직 자리인데, 빈칸 앞에 한정사가 없으므로 복수명사 또는 불가산명사가 와야 합니다. 문맥상 '최고 수준의 서비스'를 제공한다는 의미가 자연스러우므로 불가산명사인 (D) service가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t1-q132",
                        "questionNo": 132,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "Along",
                            "B": "During",
                            "C": "Without",
                            "D": "Between"
                        },
                        "correctAnswer": "B",
                        "explanation": "빈칸 뒤의 this time은 앞 문장의 '이번 주말'을 가리킵니다. 기간을 나타내는 명사구와 어울려 '~ 동안'이라는 의미를 만드는 전치사 (B) During이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t1-q133",
                        "questionNo": 133,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "apologize",
                            "B": "organize",
                            "C": "realize",
                            "D": "recognize"
                        },
                        "correctAnswer": "A",
                        "explanation": "불편함(for any inconvenience)에 대해 취하는 적절한 동사를 찾는 문제입니다. '사과하다'라는 뜻의 자동사 (A) apologize가 문맥상 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t1-q134",
                        "questionNo": 134,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "If you would like to join our property management team, call us today.",
                            "B": "Thank you for your patience while the main lobby is being painted.",
                            "C": "Please do not attempt to access the north lobby on these days.",
                            "D": "Questions or comments may be directed to the Management Office."
                        },
                        "correctAnswer": "D",
                        "explanation": "불편에 대한 사과 후 공지를 마무리하는 문장으로, 문의처를 안내하는 (D)가 가장 자연스럽습니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t1-p2",
                "contextType": "P3",
                "docType": "review",
                "guidance": "Questions 135-138 refer to the following customer review.",
                "content": "I recently received a last-minute invitation to a formal dinner. I bought a suit and needed it tailored as ___135___ as possible. A friend suggested that I use Antonio's Tailoring Shop in downtown Auckland. When I met Antonio, he gave me his full attention ___136___ his shop was busy. He took the time to listen to me and carefully noted all my measurements. He then explained all the tailoring costs up front and assured me that he could have my suit ready in three days, but he had it done in two! ___137___.\n\nAntonio has run his shop for over 30 years, and his experience really shows. He is a ___138___ tailor. I highly recommend him.\n\nJim Kestren, Auckland",
                "translation": "저는 최근에 정찬 모임에 갑작스러운 초대를 받았습니다. 정장을 한 벌 샀고 그것을 가능한 한 빨리 수선해야 했습니다. 친구 한 명이 오클랜드 시내에 있는 안토니오 재단사를 추천해 주었습니다. 안토니오 씨를 만났을 때, 그의 가게가 바빴음에도 불구하고 그는 저에게 온전히 집중해 주었습니다. 그는 시간을 내어 제 말을 경청하고 모든 치수를 꼼꼼히 기록했습니다. 그러고 나서 모든 수선 비용을 미리 설명해 주었고, 3일 안에 정장을 준비해 줄 수 있다고 확신시켜 주었지만, 이틀 만에 수선을 끝내 주었습니다! 수선된 정장도 저에게 완력하게 잘 맞았습니다.\n\n안토니오 씨는 30년 넘게 가게를 운영해 왔으며, 그의 경험이 정말 돋보였습니다. 그는 정말 훌륭한 재단사입니다. 그를 강력히 추천합니다.",
                "questions": [
                    {
                        "id": "v3-p6-t1-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "quickly",
                            "B": "quicken",
                            "C": "quickest",
                            "D": "quickness"
                        },
                        "correctAnswer": "A",
                        "explanation": "as ~ as possible 사이에서 분사 tailored를 수식하는 부사 자리입니다. 원급 부사인 (A) quickly가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t1-q136",
                        "questionNo": 136,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "as far as",
                            "B": "even though",
                            "C": "such as",
                            "D": "whether"
                        },
                        "correctAnswer": "B",
                        "explanation": "가게가 바쁜 상황과 고객에게 집중하는 상황은 상반되므로, 양보의 접속사인 (B) even though가 적절합니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t1-q137",
                        "questionNo": 137,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Of course, the shop is busiest on Saturdays.",
                            "B": "The suit fits me perfectly too.",
                            "C": "I made another purchase.",
                            "D": "He used to sell shirts."
                        },
                        "correctAnswer": "B",
                        "explanation": "앞 문장에서 빠른 수선 완료에 대해 언급했고, 전체적으로 안토니오 씨의 실력을 칭찬하고 있으므로 수선 결과가 만족스러웠음을 나타내는 (B)가 정답입니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t1-q138",
                        "questionNo": 138,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "former",
                            "B": "temporary",
                            "C": "superb",
                            "D": "best"
                        },
                        "correctAnswer": "C",
                        "explanation": "강력 추천한다는 내용과 어울리는 칭찬의 형용사인 (C) superb(최상의, 훌륭한)가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "v3-p6-t1-p3",
                "contextType": "P1",
                "docType": "letter",
                "guidance": "Questions 139-142 refer to the following letter.",
                "content": "Dear Director Yoshida,\n\nThank you for your school's interest in visiting our farm next month. Please note that children must be at least six years old to visit and tour the farm. ___139___. I have enclosed a list of the ___140___ activities available for our young visitors. Two of these ___141___ must be scheduled in advance. They are a cheese-making class and an introduction to beekeeping. Both are very popular with our visitors.\n\nPlease let ___142___ know your selection by early next week. I look forward to welcoming your group soon!\n\nSincerely,\n\nAnnabel Romero, Coordinator\nMerrytree Family Farm",
                "translation": "요시다 교장 선생님께,\n\n다음 달에 저희 농장을 방문하는 것에 관심을 가져주셔서 감사합니다. 농장을 방문하고 견학하려면 아이들이 최소 6세 이상이어야 한다는 점을 유의해 주시기 바랍니다. 이 방침에는 예외가 없습니다. 어린 방문객들이 이용할 수 있는 교육적인 활동 목록을 동봉했습니다. 이 행사들 중 두 가지는 미리 일정을 잡아야 합니다. 치즈 만들기 수업과 양봉 입문 수업입니다. 두 수업 모두 방문객들에게 인기가 많습니다.\n\n다음 주 초까지 선택하신 사항을 저에게 알려주시기 바랍니다. 곧 여러분을 모실 수 있기를 기대합니다!\n\nAnnabel Romero 드림",
                "questions": [
                    {
                        "id": "v3-p6-t1-q139",
                        "questionNo": 139,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "In the event of bad weather, the animals will be inside.",
                            "B": "There are no exceptions to this policy.",
                            "C": "Ones younger than that can find much to enjoy.",
                            "D": "This fee includes lunch and a small souvenir."
                        },
                        "correctAnswer": "B",
                        "explanation": "앞 문장에서 언급한 연령 제한 방침을 강조하는 (B)가 가장 자연스럽습니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t1-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "legal",
                            "B": "artistic",
                            "C": "athletic",
                            "D": "educational"
                        },
                        "correctAnswer": "D",
                        "explanation": "뒤에 언급된 치즈 만들기, 양봉 입문 등의 활동 성격을 대변하는 형용사인 (D) educational이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t1-q141",
                        "questionNo": 141,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "events",
                            "B": "plays",
                            "C": "treatments",
                            "D": "trips"
                        },
                        "correctAnswer": "A",
                        "explanation": "앞서 언급된 activities를 대신할 수 있는 명사인 (A) events가 적절합니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t1-q142",
                        "questionNo": 142,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "they",
                            "B": "me",
                            "C": "her",
                            "D": "one"
                        },
                        "correctAnswer": "B",
                        "explanation": "말하는 화자 본인에게 알려달라는 내용이므로 목적격 대명사 (B) me가 정답입니다.",
                        "classification": "p6g"
                    }
                ]
            },
            {
                "setId": "v3-p6-t1-p4",
                "contextType": "P4",
                "docType": "email",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "To: Lakshmi Aiyar\nFrom: info@healthonity.com\nDate: February 8\nSubject: Healthonity Dental\n\nDear Ms. Aiyar,\n\nWe, the dental health professionals of the Healthonity Dental Center, are ___143___ to introduce our just-opened practice. We aim to provide access to the largest team of dental specialists in the region. On our Web site, you can see a comprehensive list of the procedures we offer. ___144___. The members of our practice share a passion for helping people maintain beautiful and healthy smiles.\n\nContact our center today at 305-555-0121 ___145___ an initial evaluation. All first-time ___146___ will benefit from a 50 percent discount on the cost through the end of the month.\n\nSincerely,\n\nThe Team at Healthonity Dental Center",
                "translation": "Lakshmi Aiyar 씨께,\n\n저희 Healthonity 치과 센터의 전문가들은 새로 문을 연 병원을 소개하게 되어 자랑스럽게 생각합니다. 저희는 이 지역 최대 규모의 전문 의료진 서비스를 제공하고자 합니다. 저희 웹사이트에서 제공되는 모든 시술 목록을 확인하실 수 있습니다. 여기에는 일반 시술과 미용 시술이 포함됩니다. 저희 직원들은 환자들이 아름답고 건강한 미소를 유지할 수 있도록 돕는 일에 열정을 쏟고 있습니다.\n\n초기 검진 예약을 하시려면 오늘 305-555-0121로 연락해 주십시오. 모든 신규 환자들은 이달 말까지 비용의 50% 할인을 받으실 수 있습니다.\n\nHealthonity 치과 센터 팀 드림",
                "questions": [
                    {
                        "id": "v3-p6-t1-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "prouder",
                            "B": "proudly",
                            "C": "pride",
                            "D": "proud"
                        },
                        "correctAnswer": "D",
                        "explanation": "be동사 are 뒤에서 주어를 보충 설명하는 형용사 보어 자리입니다. (D) proud가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t1-q144",
                        "questionNo": 144,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "They include general and cosmetic procedures.",
                            "B": "We have relocated from neighboring Hillsborough.",
                            "C": "The Web site is a creation of A to Z Host Builders.",
                            "D": "Several of them are surprisingly expensive."
                        },
                        "correctAnswer": "A",
                        "explanation": "앞 문장에서 언급한 '시술 목록(list of the procedures)'에 대한 구체적인 예시를 설명하는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t1-q145",
                        "questionNo": 145,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "scheduled",
                            "B": "to schedule",
                            "C": "scheduling",
                            "D": "being scheduled"
                        },
                        "correctAnswer": "B",
                        "explanation": "연락하는 목적(~하기 위해)을 나타내는 to부정사의 부사적 용법 자리입니다. (B) to schedule이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t1-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": {
                            "A": "shoppers",
                            "B": "residents",
                            "C": "patients",
                            "D": "tenants"
                        },
                        "correctAnswer": "C",
                        "explanation": "치과에서 할인을 받는 대상을 지칭하는 명사로 (C) patients(환자들)가 문맥상 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            }
        ]
    };
