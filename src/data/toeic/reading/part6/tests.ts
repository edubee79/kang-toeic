export interface Part6Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: RCP6Tag;
}

export interface Part6Passage {
    id: string;
    guidance?: string;
    type: RCPassageGroupTag | string;
    docType?: string;
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
        "title": "Test 1",
        "passages": [
            {
                "id": "p6-t1-p1",
                "type": "P2_OFFI",
                "docType": "NOTICE",
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
                        "explanation": "전치사 of의 목적어 역할을 하는 명사 자리인데, 전치사 of와 빈칸 사이에 한정사가 없으므로, 빈칸에는 복수명사 또는 불가산명사가 와야 한다. 문맥상 '최고 수준의 서비스'를 제공한다는 의미가 자연스러우므로 불가산명사 (D) service가 정답이다.",
                        "classification": "P6_GRAMMAR"
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
                        "explanation": "빈칸의 목적어 역할을 하는 this time은 앞 문장에 언급된 '이번 주말인 5월 13일과 5월 14일'을 대신한다. 따라서 빈칸에는 기간 명사와 어울려 쓰이는 전치사가 들어가야 하므로, '~ 동안'이라는 의미의 (B) During이 정답이다. 참고로, (D) Between은 'between A and B' 구조로 쓰여 '(특정 시점) 사이에'라는 뜻을 나타낼 수 있다.",
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
                        "explanation": "불편함을 야기한 것(for any inconvenience)에 대해 회사에서 취하는 행위를 나타내는 동사가 들어가야 한다. 따라서 '사과하다'라는 의미의 (A) apologize가 정답이다. 참고로, (C) realize와 (D) recognize는 타동사로 구조상으로도 빈칸에 들어갈 수 없다.",
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
                        "explanation": "빈칸 앞 문장에서 보수 공사로 인한 불편에 대해 사과(We apologize for any inconvenience this might cause)했으므로, 빈칸에는 보수 공사와 관련된 추가 설명 또는 공지를 마무리하는 문장이 들어가야 자연스럽다. 따라서 문의사항이나 의견(Questions or comments)을 보낼 곳을 언급한 (D)가 정답이다. 참고로, 첫 번째 단락에서 공사 장소는 남쪽 로비 화장실(the south lobby restrooms)이라고 밝혔고, 임차인 및 방문객이 북쪽 로비 시설을 대신 이용해야 한다(tenants and their guests should instead use the facilities in the north lobby)고 했으므로, (B)와 (C)는 정답이 될 수 없다.",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t1-p2",
                "type": "P3_MEDI",
                "docType": "ARTICLE",
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
                        "explanation": "as와 as possible 사이에서 과거분사 tailored를 수식하는 원급 부사 자리이다. 따라서 (A) quickly가 정답이다. (B) quicken(재촉하다)은 동사, (C) quickest는 최상급 형용사/부사, (D) quickness(빠름)는 명사로 구조상 빈칸에 들어갈 수 없다.",
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
                        "explanation": "두 개의 완전한 절을 이어주는 접속사 자리로, 보기에서 (A) as far as와 (B) even though 중 하나를 선택해야 한다. 매장이 바쁜(his shop was busy) 와중에 집중해서 응대하는 것(he gave me his full attention)은 예상 밖의 상황이라고 볼 수 있으므로, 양보/대조의 부사절 접속사 (B) even though(비록 ~일지라도)가 정답이다. (D) whether는 or (not)과 결합해야만 부사절 접속사로 쓰일 수 있고, (C) such as는 전치사이므로 빈칸에 들어기 절을 이끌 수 없다.",
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
                        "explanation": "빈칸 앞 문장에서는 안토니오 씨가 수선 작업을 빠르게 완료한 것(He ~ assured me that he could have my suit ready in three days, but he had it done in two!)에 대해 칭찬했고, 뒤 문단에서는 안토니오 씨의 경력 및 능력을 언급하며 그를 추천했다. 따라서 빈칸에도 안토니오 씨를 칭찬하는 내용이나 추천하는 이유가 들어가야 자연스러우므로, 수선이 완벽하게 되었다는 것을 말해주는 (B)가 정답이다.",
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
                        "explanation": "뒤에서 안토니오 씨를 강력 추천한다(I highly recommend him)고 했으므로, 추천할 만한 재단사(tailor)의 특징을 묘사하는 형용사가 필요하다. 따라서 '최상의, 대단히 훌륭한'이라는 의미의 (C) superb가 정답이다. (D) best는 형용사 good의 최상급 표현으로 빈칸에 들어가려면 앞에 정관사 the가 와야 한다.",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t1-p3",
                "type": "P1_CORR",
                "docType": "LETTER",
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
                        "explanation": "빈칸 앞 문장에서는 농장 방문 및 견학이 허용되는 최소 연령(children must be at least six years old to visit and tour the farm)을, 뒤 문장에서는 어린 방문객들이 참여할만한 활동 목록(a list of the ~ activities available for our young visitors)을 언급했다. 따라서 빈칸에는 나이 제한이나 농장 방문에 관한 설명이 들어가야 자연스러우므로, 최소 연령 관련 방침의 예외 유무를 밝힌 (B)가 정답이다.",
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
                        "explanation": "activities를 수식하는 형용사 자리로, 어린 방문객들이 참여할만한(available for our young visitors) 활동의 성격을 나타내는 단어가 들어가야 한다. 뒤에서 치즈 만들기 수업(a cheese-making class)과 양봉 입문(an introduction to beekeeping)을 예시로 들고 있으므로, 교육용 활동임을 알 수 있다. 따라서 '교육의, 교육적인'이라는 의미의 (D) educational이 정답이다.",
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
                        "explanation": "these _______가 앞에서 언급된 어린 방문객들을 위한 활동(activities)을 가리키므로, activities와 유사한 단어가 빈칸에 들어가야 한다. 따라서 '행사'라는 의미의 (A) events가 정답이다.",
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
                        "explanation": "let + 목적어 + 목적격 보어(know your selection) 구조에서 let의 목적어 역할을 하는 자리이다. 최종 선택 사항을 자신에게 알려달라고 요청하는 내용이므로, (B) me가 정답이다.",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t1-p4",
                "type": "P4_MARK",
                "docType": "EMAIL",
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
                        "explanation": "be동사 are와 결합해 주어 We를 보충 설명하는 보어 자리로, to introduce our just-opened practice의 수식을 받는다. '소개하게 되어 기쁘다'라는 내용이 되어야 자연스러우므로, 형용사인 (D) proud(자랑스러워하는, 기뻐하는)가 정답이다. (A) prouder는 비교급 형용사로 앞에 couldn't be(더할 나위 없이 ~하다)가 쓰이거나 문맥상 비교 대상이 있어야 한다. (C) pride는 명사로 주격 보어 역할을 할 수는 있지만 We와 동격 관계를 이루지 않으므로 빈칸에 적절하지 않다. (B) proudly는 부사로 품사상 빈칸에 들어갈 수 없다.",
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
                        "explanation": "빈칸 앞 문장에서는 병원에서 제공하는 시술 목록 확인 방법을 안내(On our Web site, you can see a comprehensive list of the procedures we offer)했고, 뒤 문장에서는 시술을 통해 사람들을 도와주고자 하는 병원 직원들의 사명(The members of our practice share a passion for helping people ~ smiles)을 언급했다. 따라서 시술의 예시를 든 (A)가 빈칸에 들어가야 가장 자연스럽다. 참고로, 여기서 They는 the procedures we offer를 가리킨다. 일종의 광고성 이메일인데 시술 비용이 상당히 비싸다며 부정적인 측면을 시사하는 것은 적절치 않으므로 (D)는 정답이 될 수 없다.",
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
                        "explanation": "빈칸 앞에는 완전한 영문(Contact our center today at 305-555-0121)이, 뒤에는 명사구 an initial evaluation이 왔으므로, 빈칸에는 an initial evaluation을 목적어로 취하면서 앞에 온 영문을 수식할 수 있는 준동사가 들어가야 한다. 최초 검진 일정을 잡는 것은 병원에 연락하는 목적이라고 볼 수 있다. 따라서 '일정을 잡기 위해'라는 의미로 부사적 역할을 하는 to부정사 (B) to schedule이 정답이다.",
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
                        "explanation": "동사 will benefit의 주어 역할을 하는 명사 자리로, All first-time의 수식을 받는다. 문맥상 병원 검진 예약을 하고 할인 혜택을 받는 대상이 빈칸에 들어가야 하므로, '환자'라는 의미의 (C) patients가 정답이다.",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            }
        ]
    },
    {
        "testId": 2,
        "title": "Test 2",
        "passages": [
            {
                "id": "p6-t2-p1",
                "type": "P2_OFFI",
                "docType": "MEMO",
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
                        "explanation": "주어인 the game을 적절히 묘사하는 형용사를 선택해야 한다. 앞 문장에서 고객 시험 테스트 결과 비디오 게임 출시를 연기하기(to postpone the launch)로 결정했다고 했으므로, 빈칸을 포함한 부분은 부정적인 결과를 나타내어 문맥상 자연스럽다. 따라서 less와 함께 '덜 매력적인, 덜 흥미로운'이라는 의미를 완성하는 (C) appealing이 정답이다.",
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
                        "explanation": "동사구 will introduce의 목적어 역할을 하는 명사 자리로, 빈칸을 수식하는 several과 수가 일치하는 복수명사가 들어가야 한다. 따라서 (D) modifications(수정, 변경)가 정답이다. (B) modifies는 동사, (C) modifying은 동명사/현재분사로 품사상 빈칸에 들어갈 수 없다.",
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
                        "explanation": "빈칸 앞 문장에서 게임 개발팀이 몇 가지 수정을 시도할 예정(the game development team will introduce several modifications)이라고 했고, 뒤에서는 이 작업이 성공적일 경우를 가정하고 있다. 따라서 빈칸에도 수정 작업과 관련된 내용이 들어가야 자연스러우므로, 수정 후 결과를 알아보는 단계, 즉 추가 테스트 단계를 언급한 (A)가 정답이다.",
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
                        "explanation": "전치사 by의 목적어 역할을 하는 next January와 February는 게임 출시(launch) 일정으로 제시된 선택 사항이다. 따라서 '또는, 혹은'이라는 의미의 등위접속사 (B) or가 정답이다.",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p2",
                "type": "P1_CORR",
                "docType": "EMAIL",
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
                        "explanation": "빈칸 뒤 명사구 your query를 목적어로 취하는 전치사 자리이다. 문의 사항(query)은 기술 부서에 연락하는 사유이므로, '~와 함께, ~를 가지고'라는 의미의 (D) with가 정답이다.",
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
                        "explanation": "빈칸 앞 문장에서 연락 주어 감사하다(Thank you for contacting our technical department)고 했는데, 뒤에서는 원격 지원 중 전화가 끊어졌다(our call got disconnected)며 함께 알고 있는 문제를 언급했다. 따라서 '아시다시피'라는 의미의 (D) As you know가 정답이다. 앞서 한 말을 바꿔 말하거나, 이유에 따른 결과를 설명하거나, 예시를 든 것이 아니므로 (A), (B), (C)는 오답이다.",
                        "classification": "P6_CONNECTIVE"
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
                        "explanation": "빈칸 앞 문장에서 전화가 끊어졌다(our call got disconnected)는 문제점을 언급했는데, 뒤 문장에서 인과관계를 연결해 주는 Therefore로 시작한 후, 가급적 빨리 전화를 달라(please call us at your earliest convenience)고 요청하고 있다. 따라서 빈칸에는 직접 전화하지 않고 린 씨에게 전화를 요청하는 사유가 들어가야 자연스러우므로, (B)가 정답이다.",
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
                        "explanation": "빈칸은 'helping + 목적어(you) + 목적격 보어'의 구조에서 you의 행위를 보충 설명하는 목적격 보어에 해당하며, your computer를 목적어로 취한다. 준사역동사 help는 to부정사 또는 원형부정사(동사원형)를 목적격 보어로 취하므로, (A) restore가 정답이다.",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t2-p3",
                "type": "P4_MARK",
                "docType": "WEB PAGE",
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
                        "explanation": "This special _______은 앞서 언급된 파격 할인(at huge discounts on wholesale orders)을 가리킨다. 따라서 빈칸에도 유사한 의미의 명사가 들어가야 자연스러우므로, '할인 (혜택)'이라는 뜻으로 쓰일 수 있는 (B) offer가 정답이다.",
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
                        "explanation": "빈칸은 전치사구 of lacquered walnut wood와 함께 콤마 뒤에 오는 절을 수식한다. 따라서 빈칸에는 부사 역할을 할 수 있는 to부정사나 분사가 들어갈 수 있는데, 타동사 make 뒤에 of가 오려면 수동태로 쓰여야 하므로, 과거분사 (A) Made가 정답이다. Be made of는 '~로 만들어지다'라는 뜻을 나타내며, 분사구문으로 쓰일 경우 Being made of에서 Being은 보통 생략된다.",
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
                        "explanation": "앞 문장에서 옷걸이(these hangers)의 장점(not only durable, but also safe for the environment)을 언급했는데, 빈칸을 포함한 문장에서도 또 다른 장점(strong enough to hold up to ten pounds)을 추가로 기술하고 있다. 따라서 빈칸에는 these hangers를 대신하는 대명사가 들어가야 하므로, (B) They가 정답이다.",
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
                        "explanation": "빈칸 앞 문장에서는 고객이 주문 시 지불해야 하는 보증금(all orders require a 20 percent deposit)을, 뒤 문장에서는 어퍼컷에서 부담하는 배송비와 보험료(Uppercut will cover all shipping and insurance costs)를 언급했다. 따라서 빈칸에도 주문 관련 비용에 대한 설명이 들어가야 자연스러우므로, 잔금 지불 시점을 안내한 (D)가 정답이다. deposit과 연관된 단어인 balance가 결정적인 힌트가 된다.",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t2-p4",
                "type": "P1_CORR",
                "docType": "EMAIL",
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
                        "explanation": "수신자인 쿠마르 씨의 이메일 주소로 미루어 보아, 앞 문장에서 언급된 박스터 미술용품점(Baxter Art Supplies)이 그녀의 가게임을 알 수 있다. 따라서 미술용품점을 가리키는 단어가 빈칸에 들어가야 하므로, (C) store가 정답이다.",
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
                        "explanation": "주어인 I를 보충 설명하는 주격 보어 자리로, 문맥상 사람이 느끼는 감정을 나타내는 형용사가 들어가야 자연스럽다. 따라서 과거분사 (C) thrilled(신이 난, 흥분된)가 정답이다. (A) thrilling은 감정을 유발하는 대상(a thrilling experience)을 묘사할 때 쓰인다.",
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
                        "explanation": "빈칸 앞 문장에서는 자신이 역할에 잘 맞는 이유(I would be well suited for this role because I am both enthusiastic and friendly)를, 빈칸 뒤에서는 역할과 관련된 자신의 경험(I have led successful workshops ~)을 언급했다. 즉, 본인이 업무에 적합한 이유를 추가적으로 설명한 것이므로, '게다가, 또한'이라는 의미의 (A) In addition이 정답이다.",
                        "classification": "P6_CONNECTIVE"
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
                        "explanation": "빈칸 앞 문장에서는 이력서를 첨부했다(I have attached a copy of my résumé)고 했는데, 뒤 문장에서는 지원서와 작품을 검토해 보고(after you have reviewed my application and work) 연락을 주면 좋겠다고 했다. 따라서 앞 문장에서는 언급되지 않았던 작품(work)과 관련된 내용이 빈칸에 들어가야 하므로, 작품 견본을 볼 수 있는 방법을 설명한 (B)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            }
        ]
    },
    {
        "testId": 3,
        "title": "Test 3",
        "passages": [
            {
                "id": "p6-t3-p1",
                "type": "P2_OFFI",
                "docType": "INFORMATION",
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
                        "explanation": "빈칸은 명사 packaging을 목적어로 취해 앞에 온 절(Our quality-control team carefully inspects all products)을 수식하는 전치사 자리이다. 제품 검수(inspects all products)는 포장(packaging) 전에 이루어지는 것이므로, '~전에, ~에 앞서'라는 의미의 (C) prior to가 정답이다. (A) in case는 뒤에 절이 와야 하고, (B) as much as는 '~만큼 많이', (D) in keeping with는 '~와 일치하여'라는 뜻으로 빈칸에 적절하지 않다.",
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
                        "explanation": "빈칸 앞 문장에서 고객 만족 보장을 위해 모든 제품을 꼼꼼하게 검수하고 있다(Our quality-control team carefully inspects all products ~ to ensure customer satisfaction)고 했고, 뒤 문장에서는 '그렇지 못한 경우 편리하게 교환 또는 환불이 가능하다(If not, we make exchanges or returns easy. )'라고 했다. 따라서 빈칸에도 제품에 대한 고객 만족도와 관련된 내용이 들어가야 자연스러우므로, (A)가 정답이다. 참고로, 뒤 문장의 If not은 '만족하지 못했을 경우(if you are not entirely pleased with your purchase)'를 나타낸다.",
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
                        "explanation": "주어 Your exchange의 동사 자리로, 보기에서 (A) will be processed, (B) was processed, (C) is processing 중 하나를 선택해야 한다. 교환(exchange)은 처리되는 대상이며, 회사에 연락할 시 이루어질 조치이므로, 수동태 미래시제인 (A) will be processed가 정답이다.",
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
                        "explanation": "명사구 the return shipping fee를 목적어로 취하는 전치사 자리로, 환불 배송비(the return shipping fee)와 환불되는 금액(refunds)의 관계를 나타내는 단어가 들어가야 한다. 따라서 '~를 제외한, ~을 뺀'이라는 의미의 (D) minus가 정답이다. (A) aboard는 '탑승한'이라는 뜻이다.",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t3-p2",
                "type": "P2_OFFI",
                "docType": "NOTICE",
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
                        "explanation": "빈칸이 한정사 All과 명사 information 사이에 있으므로, 빈칸에는 information을 수식하는 형용사 또는 information과 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '현재 계정에 있는 정보'라는 내용이 되어야 자연스러우므로, '기존의, 현재의'라는 뜻의 현재분사형 형용사 (D) existing이 정답이다.",
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
                        "explanation": "계정에 로그인 하려는 시도들(attempting to log in to their accounts) 때 어려움을 겪을지도 모른다는 내용이 되어야 자연스럽다. 따라서 절에서 축약된 분사구문과 쓰일 수 있는 (A) when(~할 때)이 정답이다. (B) plus는 전치사로 쓰여 빈칸에 들어갈 수 있지만, 어려움을 겪는 것과 로그인을 시도하는 것은 유사한 내용이 아니므로 문맥상 적절하지 않다. attempting이 명사 difficulty를 수식해주는 현재분사가 아니므로 부사인 (C) already는 빈칸에 들어갈 수 없다. 소유격 관계대명사 (D) whose 다음에는 '명사 + 동사'가 와야 한다.",
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
                        "explanation": "앞 문장에서 새 소프트웨어로 전환 시 일부 정보가 손실될(some information may be lost) 가능성이 있다는 문제점을 언급했고, 빈칸 뒤에서는 중요한 이메일 파일은 가급적 빨리 백업하라(be sure to back up any critical e-mail files as soon as possible)며 당부했다. 즉 앞서 설명한 문제점이 백업을 하라고 당부하는 이유가 되므로, '그러므로'라는 의미의 (D) For this reason이 정답이다.",
                        "classification": "P6_CONNECTIVE"
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
                        "explanation": "빈칸 앞 문장에서 소프트웨어 전환 시 일부 정보가 손실될 가능성이 있으니 중요한 이메일 파일은 가급적 빨리 백업해 두라고 당부했고, 뒤 문장에서는 다음 주에 새로운 소프트웨어 관련 교육 일정이 잡힐 예정(A training session will be scheduled next week)이라며 다른 일정을 언급했다. 따라서 빈칸에는 이메일 백업이나 새 소프트웨어 관련 내용이 들어가야 하는데, 보기 중에서 새 소프트웨어 관련 도움(assistance with this)을 받을 수 있는 부서를 안내한 (C)가 가장 적절하다. 새 소프트웨어가 곧 설치될 예정이므로 (A), (B)는 적절하지 않으며, 설치를 스스로 완료해야 할 경우가 앞에서 언급된 바 없으므로 (D)도 정답이 될 수 없다.",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            },
            {
                "id": "p6-t3-p3",
                "type": "P1_CORR",
                "docType": "EMAIL",
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
                        "explanation": "빈칸이 이메일의 첫 문장이고, 뒤에서는 바르가스 씨의 채용 소식을 전하고 싶다고(I just want to let you know that ~) 쓰고 있다. 따라서 빈칸에는 수신인들에게 전하는 인사말이 들어가야 자연스러우므로, 안부와 hope that all are well을 전하는 (D)가 정답이다. 이 메일의 수신인 모두가 새로 채용된 사람들은 아니므로 (C)는 적절하지 않다.",
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
                        "explanation": "that절의 주어 Sofia Vargas의 동사 자리이다. 바르가스 씨는 채용되는 대상이며, 두 번째 단락에서 그녀가 오늘 아침에 근무를 시작한다(Ms. Vargas started her employment with us this morning)고 했으므로, 채용이 이미 이루어졌음을 알 수 있다. 따라서 현재완료 수동태 동사인 (C) has been hired가 정답이다.",
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
                        "explanation": "전치사 in의 목적어 역할을 하는 자리로, 형용사 fiscal과 어울려 쓰이는 명사를 선택해야 한다. 경력(background)은 특정 업계나 분야에서 쌓는 것이므로, fiscal과 함께 '재정 관리 (분야)'라는 의미를 완성하는 (D) management(관리, 운영)가 정답이다. (C) running도 '운영, 경영'이라는 뜻으로 쓰일 수 있지만, 분야가 아닌 운영되는 방식이나 행위를 가리키며 smooth(순조로운), day-to-day(그날그날의)와 같은 형용사와 어울려 쓰인다.",
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
                        "explanation": "명령문의 동사 introduce의 목적어 역할을 하는 자리이다. 바르가스 씨에게 소개할 대상은 명령문의 생략된 주어인 you와 동일한 사람이 되어야 자연스럽다. 따라서 2인칭 재귀대명사 (A) yourself가 정답이다.",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t3-p4",
                "type": "P4_MARK",
                "docType": "ADVERTISEMENT",
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
                        "explanation": "후원의 주체로 나열된 the JAMTO와 the hotels and businesses 를 적절히 연결해 주는 전치사를 선택해야 한다. 따라서 '~와 함께, ~에 덧붙여'라는 의미의 (D) along with가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "전단 전반에서 현재시제를 사용하여 신규 프로그램에 대해 설명한 후, 빈칸이 포함된 문장에서 이 프로그램의 이용을 권장하고 있다. 즉, 글 을 쓰는 동시에 초대하는 행위를 하고 있으므로, 빈칸에도 현재시제가 쓰여야 자연스럽다. 따라서 (A) invite가 정답이다. (C) may invite 는 가능성을 시사하므로, 실제로 초대하는 표현으로는 적절하지 않다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "문장의 주어인 attractions를 적절히 묘사하는 형용사를 선택해야 한 다. 동사 include 뒤에 나열된 다양한 명소가 무료 입장권 제공 프로 그램을 통해 방문할 수 있는 곳이라고 볼 수 있다. 따라서 빈칸에 포함 된 부분은 '참여하는 명소' 또는 '이용 가능한 명소'라는 의미가 되어야 자연스러우므로, (D) Participating이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞에서 입장권을 받는 방법(To obtain your pass, visit our Web site ~ or stop by any JAMTO office) 및 유효인원(One pass is valid for up to five people)에 대해 안내했으므로, 빈칸 에는 입장권과 관련된 추가 설명이나 전체 내용을 마무리하는 문장 이 들어가야 자연스럽다. 따라서 보기 중 입장권의 유효기간을 언급한 (B)가 정답이다. 첫 번째 단락에서 무료 입장(free entry)임을 밝혔 으므로, 지불 방법을 언급한 (D)는 정답이 될 수 없다.",
                        "classification": "P6_SENTENCE_INSERTION",
                    }
                ]
            }
        ]
    },
    {
        "testId": 4,
        "title": "Test 4",
        "passages": [
            {
                "id": "p6-t4-p1",
                "type": "P2_OFFI",
                "docType": "EMAIL",
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
                        "explanation": "빈칸은 주어 we의 동사 자리로, technical difficulties를 목적어로 취한다. 뒷부분에서 모바일 앱의 기술적 문제가 시작된 시점이 7월 14일(The trouble started on 14 July)이며 편지를 쓴 시점(7월 15일)을 기준으로 24시간 이내에 해결이 될 것이라고 했으므로, 아직 문제를 겪고 있음을 알 수 있다. 따라서 현재진행형 동사 (D) are experiencing이 정답이다. (C) had experienced는 과거에 이미 완료된 일을 나타내므로 빈칸에 적절하지 않고, to부정사인 (A) to experience와 동명사/현재분사인 (B) experiencing은 본동사 자리에 들어갈 수 없다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞 문장에서 모바일 앱 상에서 기술적 문제를 겪고 있다(we are experiencing technical difficulties with our mobile app)고 했고, 뒤 문장에서도 해당 문제에 대해 설명하고 있다. 따라서 빈칸에도 이와 관련된 내용이 들어가야 자연스러우므로, 문제를 처리 중이라고 한 (A)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION",
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
                        "explanation": "빈칸은 기간을 나타내는 명사구 the next twenty-four hours를 목적으로 취하는 전치사 자리이다. 따라서 '24시간 이내에'라는 의미를 완성하는 (B) within이 정답이다. (C) as long as는 '~만큼 긴'이라는 뜻으로 문맥상 어색하며, (A) if는 부사절 접속사, (D) above all은 접속부사로 품사상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞 문장에서는 모바일 앱이 제대로 작동할 시점(We expect the app to be up and running within the next twenty-four hours)을, 뒤 문장에서는 그때까지의 대인(banking transactions can be done at any of our branch locations, also working)을 언급하고 있다. 따라서 '그동안에'라는 의미의 (C) In the meantime이 정답이다.",
                        "classification": "P6_CONNECTIVE",
                    }
                ]
            },
            {
                "id": "p6-t4-p2",
                "type": "P6_RULE",
                "docType": "INFORMATION",
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
                        "explanation": "as를 전치사로 볼 경우 명사가, 접속사로 볼 경우에는 부사절에서 축약된 과거분사가 빈칸에 들어갈 수 있다. 'function as 명사는 '~로서 기능/역할을 하다', 'function as 과거분사는 '~된 대로 작동하다'라는 뜻을 나타내는데, 문맥상 제품이 광고된 대로 작동될 것이라는 내용이 되어야 자연스러우므로 (B) advertised가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞 문장에서 구입일자로부터 최소 1년간(for at least one year from date of purchase) 제품이 광고된 대로 작동될 것을 보장한다고 했고, 뒤 문장에서는 적용 대상에 대해 설명하고 있다. 따라서 빈칸에도 이와 관련된 내용이 들어가야 자연스러우므로, 특정 제품은 해당 보장 기간이 연장될 수 있다고 한 (A)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION",
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
                        "explanation": "빈칸은 동사 applies의 주어 역할을 하는 명사 자리로, 제품에 적용될 만한 것들 중 앞서 언급된 보장 기간과 관련된 단어가 들어가야 한다. 따라서 '품질보증서'라는 의미의 (D) warranty가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸은 명사 packaging을 수식하는 자리이므로, 형용사 (B) original(원래의)이 정답이다. (A) originally는 부사로 품사상 빈칸에 들어갈 수 없고, (C) origin과 (D) originality는 둘 다 명사로 packaging과 복합명사를 이룰 수 없으므로 오답이다.",
                        "classification": "P6_GRAMMAR",
                    }
                ]
            },
            {
                "id": "p6-t4-p3",
                "type": "P2_OFFI",
                "docType": "NOTICE",
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
                        "explanation": "빈칸은 주어 the refrigerated and frozen-food sections의 동사 자리이다. schedule은 '일정을 잡다. 예정에 넣다'라는 의미이므로, 여기서 수동태로 쓰여야 한다. 따라서 '~할 예정이다'라는 내용을 완성하는 (D) are scheduled가 정답이다. 참고로, schedule은 주로 「be scheduled for 명사」, 「be scheduled to부정사」의 수동태 구조로 쓰인다. (A) schedules는 주어와 수가 일치하지 않으며 능동태이므로 빈칸에 들어갈 수 없고, to부정사인 (B) to be scheduled와 동명사/현재분사인 (C) scheduling은 본동사 역할을 할 수 없다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞 문장에서는 식품 코너에 공사가 예정되어 있다(the refrigerated and frozen-food sections ~ are scheduled to be under construction)고 했고, 뒤 문장에서는 공사로 인해 해당 코너의 식품 이용이 불가능하다(food from these areas will be unavailable)고 안내하고 있다. 따라서 '그러므로'라는 뜻으로 인과 관계를 나타내는 (B) Therefore가 정답이다.",
                        "classification": "P6_CONNECTIVE",
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
                        "explanation": "복수 가산명사 days와 결합하여 '며칠'이라는 의미를 완성하는 형용사가 필요하므로, (A) few가 정답이다. 참고로, (C) less는 불가산명사와 쓰인다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 뒤 문장에서 '이 행사(At this event)'의 구체적인 내용이 언급되고 있으므로, 빈칸에는 특정 행사가 열린다고 공지하는 내용이 들어가야 자연스럽다. 따라서 특별 기념 행사가 열릴 예정이라고 한 (D)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION",
                    }
                ]
            },
            {
                "id": "p6-t4-p4",
                "type": "P3_MEDI",
                "docType": "ARTICLE",
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
                        "explanation": "Showcase를 가리키는 this offering과 어울리는 형용사를 선택해야 한다. 앞 문장에서 '연례(annual) 식물 공개 행사'라고 했으므로, 빈칸에도 annual과 유사한 의미의 단어가 들어가야 한다. 따라서 (D) yearly가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 이러한 프로젝트 중 상당수가 일반적인 문제들을 알아내고자 고안된 고객 설문조사에서 기인한다(Many of these efforts result from customer surveys designed to gain an understanding of common challenges)고 했고, 뒤 문장에서는 가뭄에 강한 품종(drought-hardy breeds)의 개발을 일례로 듣고 있다. 따라서 빈칸에는 해당 프로젝트와 관련된 내용이 들어가야 자연스러우므로, (C)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION",
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
                        "explanation": "빈칸은 전치사 in의 목적어 역할을 하는 명사 자리로, 지역을 의미하는 (A) region 혹은 (B) regions 중 하나를 선택해야 한다. 가산명사는 앞에 한정사가 붙지 않을 경우 복수형으로 쓰여야 하므로, (B) regions가 정답이 된다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸은 동사 might also be interested의 주어 역할을 하는 자리이다. 새로운 장미 나무에 관심을 가질 사람은 앞부분에 나온 사막 지역들의 정원사들(Gardeners)이므로, 이들을 대신할 수 있는 (D) they가 정답이다.",
                        "classification": "P6_VOCABULARY",
                    }
                ]
            }
        ]
    },
    {
        "testId": 5,
        "title": "Test 5",
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
                        "explanation": "주어인 초기 판매량(initial sales)과 목적어인 회사의 기대치(the company's expectations)의 관계를 나타내는 동사가 필요하다. 따라서 '뛰어넘다. 능가하다'라는 의미의 타동사 (B) surpassed가 정답이다. exceed one's expectations라고 표현할 수 있다는 것도 알아두자.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "정관사 the와 명사 sales 사이에서 sales를 수식하는 형용사 자리이다. 예상을 뛰어넘는 판매량, 즉 판매 결과에 대해 평가하는 단어가 들어가야 자연스러우므로, '인상적인'이라는 의미의 (C) impressive가 정답이다. 현재분사 (B) impressing은 '감동시키는', 과거분사 (D) impressed는 '감동받은'이라는 뜻이므로 sales를 수식하기에 적절하지 않다. (A) impress는 동사로 품사상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "인상적인 판매량의 요인(factors)으로 빈칸 앞 문장에서는 태블릿의 고품질 케이스(the tablet's high-quality case)를, 뒤 문장에서는 화면 밝기 자동 조정 기능(an adaptive screen brightness feature)을 언급했다. 따라서 빈칸에는 케이스에 대해 부연 설명을 하거나 또 다른 성공 요인을 제시하는 문장이 들어가야 자연스러우므로, (D)가 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "해당 문장은 앞서 언급된 화면 자동 밝기 조정 기능(an adaptive screen brightness feature)에 대해 추가로 설명하고 있다. 화면 자동 밝기 조정 기능이란 환경에 따라 화면 밝기가 변하는 것을 말하는데, 안구 보호를 위해 어두운 곳에서는 어두워지고 밝은 곳에서는 밝아지는 기능이다. 빈칸이 포함된 부분(less-than-ideal conditions)은 그 기능이 자동으로 실행되는 특정 환경을 나타내고 있으므로, 밝기(brightness)와 관련된 명사가 빈칸에 들어가야 한다. 따라서 '조명, 밝기'라는 의미의 (A) lighting이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "앞 문장에서 정기 서버 관리가 이번 주말에 실시될 예정(will be performed)이라고 했고, 서버가 다운되는 시기(from 11 P.M. on Saturday, June 6, to 7 A.M. on Sunday, June 7)가 이메일 날짜(Date: June 1)를 기준으로 미래임을 알 수 있다. 따라서 빈칸에도 미래 시제가 쓰여야 자연스러우므로, (C) will be가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸이 목적어로 취하는 this time은 앞 문장에서 언급된 서버 다운 시간(eight hours from 11 P.M. on Saturday to 7 A.M. on Sunday, June 7)을 가리킨다. 빈칸 뒤에서 웹사이트 접속 및 이메일 전송이 중단될 거라고 안내했는데, 이는 서버가 다운되는 동안 발생할 일이라고 볼 수 있다. 따라서 '~ 동안'이라는 의미로 기간을 나타내는 (A) During이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서는 서버 다운 시 제한 및 중단되는 것(access to the Web site will be restricted, and e-mail delivery will be paused)을 안내했는데, 뒤 문장에서는 서버가 복구되고 나면(Once the server is back up) 해야 할 일을 당부했다. 따라서 빈칸에는 추가로 제한되는 기능이나 웹사이트의 재개와 관련된 문장이 들어가야 자연스러우므로, 재개 시점을 안내한 (C)가 정답이다. 작업은 주말에 진행되며 이메일 전송이 중단된다고 했으므로 (A)와 (D)는 명백한 오답이다. 또한 웹사이트 이용이 불가능할 거라고 안내하다가 프로그래머들이 열심히 작업할 거라고 설명하는 것은 어색하므로, (B)는 정답이 될 수 없다. 앞뒤에 나온 단서(7 AM. on Sunday~Sunday",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "뒤 문장에서 점검 후 새롭게 추가되거나 개선될 도구(These include a new scheduler and a more user-friendly search tool)를 나열했는데, 여기서 These는 the ------- features를 가리킨다. 따라서 빈칸에는 추가 및 개선될 기능과 어울리는 단어가 들어가야 하므로, '업데이트된, 최신인'이라는 의미의 (B) updated가 정답이다.",
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
                        "explanation": "앞 문장에서 두 가지의 주요 비용이 있다(There are two main kinds of costs)고 한 후, 주요 비용 중 하나(one kind)로 변동 비용(Variable costs)을 제시했다. 빈칸이 수식하는 비용은 고정된 것으로 간주된다(are considered fixed)고 했으므로, 앞서 언급된 변동 비용과는 반대되는 개념임을 알 수 있다. 따라서 '다른'이라는 의미의 (C) Other가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "다른 대안을 선택하는 것(choosing some alternative option)과 어떤 특정한 일을 하기로 결정하는 것(you make a decision to do one specific thing)은 양자택일의 대상이므로, '~ 대신'이라는 의미의 (C) rather than이 정답이다. 참고로, rather than은 상관접속사처럼 쓰여 뒤에 동사원형이 올 수도 있다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸의 주어인 this는 앞 문장의 Careful consideration of potential opportunity costs를 가리킨다. 앞에서 잠재적 기회 비용을 고려하는 게 중요하다고 했으므로, 해당 문장은 이 과정을 거친 후 의사 결정을 하라고 권장하는 내용이 되어야 자연스럽다. 즉, 이 과정이 의사 결정에 영향을 주어야 한다는 취지이므로, (B) influence(영향을 미치다)가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞에서 세 가지 소기업 비용(Small Business Costs)을 설명했고, 뒤 문장에서는 더 완전한 이해를 위해서는 면허를 소지한 회계사에게 자문을 구하라(You should consult a licensed accountant for a more complete understanding)고 조언했다. 따라서 빈칸에는 회계사에게 자문을 구해 배울만한 비용 관련 언급이 들어가야 자연스러우므로, (D)가 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "주격 관계대명사 that이 이끄는 절에서 be동사 was와 함께 동사구를 이루는 자리이다. 뒤에 전치사 by가 있으므로 선행사인 a",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "앞 문장에서 매장에 다양한 물건이 있다고 했고, 뒤 문장에서는 고객들이 신상품을 보러 종종 들르고 싶어 한다(Patrons like to stop in often to see what is new)고 했다. 따라서 해당 문장은 고객의 주기적인 방문을 유도하기 위해 신상품을 계속 업데이트한다는 맥락이 되어야 한다. 즉, 물품 목록이 자주 바뀐다는 내용이 되어야 자연스러우므로, '자주, 빈번하게'라는 의미의 (D) frequently가 정답이다. 자동사 change는 변화 속도(rapidly, gradually 등), 빈도(frequently, often 등), 정도(dramatically, completely 등)를 나타내는 부사와 자주 쓰인다는 것도 알아두면 좋다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서는 지역 내 첫 번째 몰런 매장(This is the first Morlon in the local area)이라며 신규 매장의 의의를 설명했고, 뒤 문장에서는 개업(A grand opening)과 관련된 일정을 안내했다. 따라서 빈칸에도 몰런 매장과 관련된 내용이 들어가야 자연스러우므로, 전국에 있는 매장의 개수를 언급한 (A)가 정답이다. 수익(Profits), 경쟁사(competitor), 신규 매장 공간의 이전 임대 업체(Binkley's Market)에 대한 내용은 문맥상 어색하다.",
                        "classification": "P6_SENTENCE_INSERTION",
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
                        "explanation": "A grand opening ~ discount coupons까지가 주어, will be held가 동사인 문징이다. 구조상 빈칸에는 opening과 복합영사를 이루어 주어 역할을 하는 명사나 featuring을 수식하는 부사가 들어갈 수 있다. 따라서 보기 중 명사인 (D) celebration(축하 행사)이 정답이다. grand opening celebration은 '개업 축하 행사'라는 의미가 되며, 분사구 featuring 이하의 수식을 받는다. (A) celebrates와 (C) celebrate는 동사, (B) celebrating은 동명사/현재분사로 구조상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_GRAMMAR",
                    }
                ]
            }
        ]
    },
    {
        "testId": 6,
        "title": "Test 6",
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
                        "explanation": "체를 나타내는 사람 명사가 필요하므로, '직원들'이라는 뜻의 복수명사인 (C) representatives가 정답이다. (A) represents는 동사, (B) representative는 형용사/단수명사로 구조상 빈칸에 들어갈 수 없고, (D) representations는 '묘사, 대의권, 항의'라는 의미로 적절하지 않다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서는 식당 점검이 시행된(An inspection of your restaurant was conducted) 일정(16 September) 및 주체(representatives of the Department of Health and Safety)를, 뒤 문장에서는 점검의 목적(The purpose of the inspection)을 설명했다. 따라서 빈칸에도 점검과 관련된 보건안전부의 설명이 들어가야 자연스러우므로, 시행 빈도를 언급한 (A)가 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "명사 permits를 수식하는 자리로, 최신 상태(up-to-date)로 유지해야 하는 허가증의 유형을 나타내는 형용사가 들어가야 한다. 따라서 '필수의, 필연적인'이라는 의미의 (D) necessary가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "동사구 are being followed를 수식하는 부사 자리이다. 뒤 문장에서 식당 측에서 취해야 할 추가 조치는 없다(no further action is required on your part)고 했으므로, 해당 부분은 모든 규정이 적절히 지켜지고 있다는 내용이 되어야 자연스럽다. 따라서 '홈족스럽게, 만족스럽게'라는 의미의 (B) satisfactorily가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸이 완전한 절(We are delighted)과 대명사 you 사이에 있으므로, you를 목적어로 취하면서 형용사 delighted를 수식하는 준동사가 들어가야 한다. 따라서 부사적 용법으로 감정(delighted)의 원인을 나타내는 to부정사 (D) to welcome이 정답이다. (A) welcome은 동사/형용사/명사, (B) welcomed는 과거동사/과거분사, (C) will welcome은 미래시제 동사로 구조상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞 문장에서는 고객의 대량 주문이 처리 중(Your wholesale order is being processed)이라고 했고, 뒤에서는 주문한 물건의 재고 여부(in stock) 및 도착 예정 시기(within ten days) 등을 안내했다. 따라서 빈칸에도 고객의 주문과 관련된 내용이 들어가야 자연스러우므로, 주문에 대해 감사를 전한 (B)가 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "앞 문장에서는 주문한 물건 대부분이 현재 재고가 있으며 10일 이내에 도착할 예정(Most of your order is currently in stock and will arrive within ten days)이라고 했는데, 빈칸 뒤에서는 장미향 양초는 재고 부족으로 주문이 밀려 있다(the rose-scented candles are on back order)고 했다. 따라서 빈칸에는 상반되는 상황을 연결하는 접속부사가 들어가야 자연스러우므로, '하지만, 그러나'라는 의미의 (A) However가 정답이다.",
                        "classification": "P6_CONJUNCTION",
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
                        "explanation": "order를 수식하는 형용사 자리로, 신규 고객(as a new customer)이 한 주문의 특징을 나타내는 단어가 필요하다. 따라서 '처음의, 초기의'라는 의미의 (C) initial이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "명사구 government statistics를 목적어로 취하는 전치사 자리로, (C) according to와 (D) instead of 중 하나를 선택해야 한다. 정부 통계는 고용 증가(employment rose) 소식의 출처이므로, '~에 따르면'이라는 의미의 (C) according to가 정답이 된다. 참고로, release는 타동사로서 목적어가 필요하며, 통계는 발표되는 대상이므로 released는 동사가 아닌 government statistics를 수식하는 과거분사로 봐야 한다. (A) because와 (B) whereas는 부사절 접속사로 뒤에 절이 와야 한다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "앞 문장에서 가장 큰 증가를 보인 곳은 새롭게 9천 개의 일자리가 창출된 소매 부문(The biggest increase was in the retail sector)이라고 했고, 해당 문장에서는 8천 4백 개가 늘어난 서비스 부문, 그 뒤에서는 4천 2백 개가 증가한 부문들을 언급했다. 즉, 서비스 부문은 전체에서 2위를 차지한 것이므로, came in과 함께 '두 번째를 차지했다. 2위로 들어왔다'라는 의미를 완성하는 (B) second가 정답이다. 참고로, 여기서 came in은 구동사, second는 부사로 볼 수 있으며, in 없이 came second라고 해도 무방하다. 또한 come in handy(유용하다) 등 비격식체에서는 형용사와도 쓰일 수 있으니 고정된 표현으로 알아두도록 하자.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞에서는 부문(sector)별 일자리 수 변화를, 뒤 문장에서는 화제를 전환하여 회사 규모(company size)별 채용 인원수를 설명했다. 따라서 빈칸에는 앞에서 언급된 부문별 일자리 수와 관련된 내용이 이어져야 자연스러우므로, 성장이 제자리인 분야(agriculture)를 밝힌 (C)가 정답이다.",
                        "classification": "P6_LOGICAL_FLOW",
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
                        "explanation": "주어 we와 목적어 it 사이의 동사 자리로, 보기에서 현재동사인 (A) expect와 과거동사인 (C) expected 중 하나를 선택해야 한다. 대명사 it이 현재시제 remains를 포함한 절(The job market remains robust)을 대신하고, 빈칸을 포함한 절이 이러한 상태가 지속될 거라고 예측하고 있으므로, 현재시제인 (A) expect가 정답이 된다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "동사 enjoy와 명사 security 사이에 있으므로, 빈칸에는 enjoy의 목적어 역할을 하는 동명사, security를 수식하는 형용사/분사, 또는 security와 복합명사를 이루는 명사가 들어갈 수 있다. 지문 인식 스(a fingerprint identification scan)을 통해 고객이 누릴 수 있는 것은 '향상된 보안'이므로, 과거분사 (B) enhanced가 정답이 된다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞뒤 문장에서 고객(Customers), 즉 사용자(users)를 위한 모바일 앱(mobile application)의 기능을 설명하고 있으므로, 빈칸에는 추가 설명을 덧붙일 때 쓰이는 접속부사가 들어가야 자연스럽다. 따라서 '게다가, 아울러'라는 의미의 (A) Additionally가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서는 개인에게 모바일 앱 업데이트와 같은 변화들이 버거울 지도 모른다(Changes can prove to be challenging for individuals)고 했는데, 뒤 문장에서는 도움이 필요한 경우(should you ever need assistance) 연락을 달라며 대안을 제시했다. 따라서 이러한 사실(=고객의 어려움)을 잘 알고 있다며 이해를 표현한 (C)가 빈칸에 들어가야 가장 자연스럽다. 참고로, 여기서 this fact는 앞 문장 전체를 가리킨다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "명사 assistance와 any of the features of our app을 적절히 연결해 주는 전치사를 선택해야 한다. 앱의 기능'은 도움이 필요한 부분이므로, '~에 대해서, ~에 있어서'라는 뜻으로 쓰일 수 있는 (D) with가 정답이다. 참고로, assistance는 전치사 with(도움이 필요한 부분)나 in(도움이 필요한 행위)과 함께 자주 쓰인다.",
                        "classification": "P6_VOCABULARY",
                    }
                ]
            }
        ]
    },
    {
        "testId": 7,
        "title": "Test 7",
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
                        "explanation": "빈칸 앞 문장에서는 글을 이메일로 보내달라고 했고, 뒤 문장에서는 '이 날짜' 이후 수신된 제출물은 고려 대상이 될 수 없다 (any submissions received after this date cannot be considered)고 했다. 따라서 빈칸에 제출 마감 기한이 언제인지 언급되어야 하므로, (A)가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 추가 인센티브 제도는 올해를 사상 최대 판매를 기록한 해로 만들기 위해(to help make this our greatest sales year ever) 고안된 것이라고 했으므로, 빈칸에도 이러한 취지와 관련된 내용이 이어져야 문맥상 자연스럽다. 따라서 해당 목표를 달성할 수 있으리라 확신한다고 말한 (B)가 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "빈칸은 동사 will be provided의 주어 역할을 하는 명사 자리이다. 앞서 언급된 인센티브 제도에 대해 더 자세한 내용을 알려주겠다고 하는 것이 가장 자연스러우므로, '세부 내용'이라는 의미의 (B) details 가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "앞 문장에서는 며칠 후 더 자세한 내용을 알려주겠다(More details will be provided in the next few days)고 했고, 빈칸 뒤에서는 그때까지 질문이 있을 경우 문의할 곳(if you have any questions about this program, contact the Human Resources Department)을 제시하고 있다. 따라서 '그동안에'라는 의미의 (D) In the meantime이 빈칸에 들어가야 자연스럽다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸은 that accountants gain의 수식을 받는 자리로, 회계사들이 획득한 것을 나타낸다. 따라서 (B) skills(역량, 기술)가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "앞 문장에서는 회계사들의 역량이 재무 이외의 분야에서 채용하고자 하는 이들에게도 수요가 높다(The financial service skills that accountants gain are in demand even by those seeking to hire for positions outside of finance)고 했고, 빈칸 뒤에서는 많은 전문 회계사들이 다른 역할을 맡으라는 권유를 받고 있다(many professional accountants have been persuaded to take on other roles)고 했다. 뒤 문장이 필연적인 결과를 나타내므로, (D) Consequently(따라서)가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸은 완전한 절(it is useful in your new profession)을 이끌어 동사 explain의 목적어 역할을 한다. 문맥상 그것(it=your background in accounting)이 새 직업에 어떻게 유용한지에 대해 글을 써달라는 내용이 되어야 자연스러우며, 완전한 절을 이끄는 명사절 접속사가 필요하다. 따라서 (C) how가 정답이다. 참고로, (A) what, (B) whose, (D) which가 의문형용사로서 명사절 접속사 역할을 할 경우, 바로 뒤에는 대명사가 아닌 일반 명사가 와야 한다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "제출 마감 기한은 10월 15일입니다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "빈칸은 to increase의 목적어 자리로, 장 씨가 증대시키고자 한 것을 나타낸다. 뒤에서 효과적인 광고 방법에 대한 조언을 받아 고객층이 늘었다고 했으므로, 장 씨가 매출을 증대시킬 방법을 모색한 것임을 알 수 있다. 따라서 (C) sales가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "give의 목적어 자리로, 한번 시도(a try)를 해볼 만한 대상이 들어가야 한다. 문맥상 상담원이 '고객의 소리'라는 접근법(approach, method)을 시도해보라고 했다는 내용이 되어야 자연스러우므로, (B) it이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "he가 주어, determined가 동사, 명사절인 what potential customers are concerned about when shopping for office supplies가 목적어인 완전한 문장이므로, 빈칸에는 문장 구성에 영향을 미치지 않는 부사가 들어가야 한다. 따라서 (A) exactly(정확히)가 정답이다. exactly는 종종 의문사와 결합해 이를 강조하는 역할을 한다(eg. exactly what/when/where), (B) exact는 형용사/동사, (C) exacting은 형용사/현재분사, (D) exactness는 명사로 구조상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 웹사이트 광고에 사람들의 솔직한 말을 인용했(he used candid quotes from the people ~ to create advertisements for his Web site)고 했고, 뒤에서는 '고객의 소리(VOC)'라는 이 방식 덕분에 고객층이 늘어났다고 했다. 따라서 빈칸에도 해당 방식과 관련된 내용이 들어가야 자연스러우므로, 다이렉트 이메일 광고에서도 그것들(=candid quotes from the people)을 활용했다고 한 (B)가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 언급된 무료 버스(free bus rides)의 이용 가능 기간을 설명한 문장이다. 따라서 '교통편, 차량'이라는 의미의 (C) Transportation이 빈칸에 들어가야 자연스럽다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸은 주어 Buses의 동사 자리로, the fairgrounds를 목적으로 취한다. 앞으로 열릴 지역 박람회에서 새롭게 제공되는 무료 버스의 출발 시간을 설명하는 문장인데, 바로 앞 문장에서 미래시제(will depart)가 쓰였으므로, 빈칸에도 미래시제가 들어가야 자연스럽다. 따라서 (A) will leave가 정답이다. (B) have left와 (D) left는 시제가 맞지 않으며, 동명사/현재분사인 (C) leaving은 본동사 자리에 들어갈 수 없으므로 오답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞 문장에서 16세 미만 어린이는 반드시 성인과 동행해야 한다(children under the age of 16 must be accompanied by an adult)며 버스 이용 시 주의할 사항을 고지했으므로, 빈칸에도 이와 비슷한 내용이 들어가야 문맥상 자연스럽다. 따라서 버스 내 음식이나 음료 섭취가 불가하다고 한 (D)가 정답이다.",
                        "classification": "P6_SENTENCEINSERTION",
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
                        "explanation": "앞에 나온 buses와 함께 동명사 providing의 목적어 역할을 하는 명사 자리이다. 후원사들이 박람회를 위해 버스와 함께 제공할 만한 것은 '기사들'이므로, (B) drivers가 정답이다. (D) drive도 명사로 쓰일 수 있지만, '자동차 여행, 충동, 추진력' 등을 뜻하므로 문맥상 어색하다.",
                        "classification": "P6_VOCABULARY",
                    }
                ]
            }
        ]
    },
    {
        "testId": 8,
        "title": "Test 8",
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
                        "explanation": "빈칸은 전치사 to의 목적어 역할을 하는 자리로, 고품질 식사가 배달되는(delivers ~ to) 장소를 나타낸다. 따라서 '현관, 집 앞'이라는 의미의 (A) doorstep이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "타동사 To start의 목적어 역할을 하는 동명사 자리이다. 보기 중에서 동명사 (B) using이 정답이다. 참고로, start는 동명사와 to부정사 모두를 목적어로 취할 수 있다. (A) usage와 (D) users는 명사, (C) usable은 형용사로 품사상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞에서는 온라인 식사 주문 배달 서비스인 다이닝 티켓의 이용 방법을 안내했고, 뒤 문장에서는 오늘 바로 다이닝 티켓을 이용해 보라고 권했다. 따라서 빈칸에도 서비스 이용 방법이 아주 쉽다는 것을 강조하는 (D) It's as easy as that이 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "전치사 from의 목적어 자리로, 정관사 the 및 전치사구 of your own home의 수식을 받는 명사 자리이다. 따라서 '편안함, 안락'이라는 의미의 (D) comfort가 정답이다. from/in the comfort of your (own) home은 '집에서 편안하게'라는 뜻의 고정 표현이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "동명사 selecting의 목적어 자리로, 선택되는 대상이 들어가야 한다. 따라서 '(종이를 쓰지 않는) 전자 청구서 옵션'이라는 의미를 완성하는 (D) option이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "전치사구 on August 20와 함께 쓰여 뒤 절을 수식하는 자리이다. 8월 20일부로/시작으로 내역서를 전자로 받게 된다는 내용이므로, 시작 시점을 나타내는 (C) Beginning이 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "조동사 may와 전치사구 사이의 본동사 자리로, 동사원형이 들어가야 한다. '전환하다, 되돌아가다'라는 의미의 (A) return이 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "앞서 설명한 청구서 발급 방식 외에 다른 사항은 변경되지 않았음을 알리는 (B) Nothing else about your billing process has changed가 문맥상 가장 적절하다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "앞 문장의 칭찬(outstanding work)과 뒤 문장의 부족함(room for growth)을 대조적으로 연결하므로 '그럼에도 불구하고'라는 의미의 (C) Nevertheless가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "동사 launching의 목적어이자 뒤에서 '학습 모듈'을 언급하고 있으므로 '교육, 훈련'이라는 의미의 (C) training이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "has 뒤에서 현재완료 시제를 구성하며 목적어(our needs)를 취하는 능동태여야 하므로 (A) analyzed가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "학습 모듈의 시작 일정을 곧 알려주겠다고 한 (B) I will let you know the dates soon이 흐름상 가장 자연스럽다.",
                        "classification": "P6_SENTENCE",
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
                        "explanation": "명사 merger를 수식하는 형용사 자리로, '다가오는, 곧 있을'이라는 의미의 (B) upcoming이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "예정된 합병 관련 회의에 직접 참석하도록 권하는 (A) Please plan to attend this meeting in person이 정답이다.",
                        "classification": "P6_SENTENCE",
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
                        "correctAnswer": "C",
                        "explanation": "뒤에서 수식을 받는 대명사 자리로, '질문이 있는 사람은 누구든지'라는 의미의 (C) Anyone이 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "충분한 질의 시간을 제공하기 위해 다른 안건을 미루자는 제안의 근거를 나타내는 (B) For this reason이 정답이다.",
                        "classification": "P6_CONNECTIVES",
                    }
                ]
            }
        ]
    },
    {
        "testId": 9,
        "title": "Test 9",
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
                        "explanation": "앞 문장에서 폴버그 시립 도서관이 월례 이사회를 개최한다(The Fallberg City Library will hold its monthly board meeting)고 했으므로, 이 회의와 관련해 지역사회 일원에게 권장할 만한 행위가 빈칸에 들어가야 한다. 따라서 ‘(회의 등에) 참석하다’라는 의미의 (B) attend가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸이 포함된 부분은 문장 중간에 삽입되어 앞에 나온 사물명사 agenda를 보충 설명하는 역할을 한다. 따라서 '주격 관계대명사 +be동사로 구성된 (C) which is가 정답이다. 참고로, (B) being을 현재분사로 본다고 하더라도, '의사 일정을 웹사이트에서 볼 수 있다는 것은 부가적인 정보일 뿐, '일정에 설명회가 포함된 것'과는 관계가 없기 때문에 분사구문이 성립될 수 없다. (D) what can be는 앞에 선행사가 올 수 없으므로 오답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞뒤로 프로젝트 매니저인 안드레 카잘이 회의에서 할 일(share design concepts for the building, lead a discussion about how construction should be funded)을 열거하고 있다. 따라서 내용을 덧붙일 때 쓰이는 접속부사가 필요하므로, '게다가, 아울러'라는 의미의 (A) In addition이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 대중의 의견을 듣는 시간이 마련될 것(There will be a period for public comment)이라고 했으므로, 이에 대해 부연 설명을 하거나 공지를 마무리하는 문장이 이어져야 자연스럽다. 따라서 그때 참석자들이 의견을 제시할 수 있다고 한 (D)가 정답이다. 참고로, 여기서 at that time은 앞 문장의 a period for public comment를 가리킨다.",
                        "classification": "P6_READING_COMPREHENSION",
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
                        "explanation": "빈칸 앞 문장에서는 팀워크의 이점(Teamwork not only improves productivity but also leads to increased satisfaction for customers and employees)을 설명했고, 빈칸 뒤에서는 매장 내 개선 계획과 팀워크 조성 훈련을 결합하려고 한다(we will be combining a team-building exercise with an in-store improvement plan)며 팀워크를 강화할 계획을 발표했다. 즉, 계획을 실행하기 위해 팀워크의 이점을 명분으로 내세운 것이므로, '그러한 이유로'라는 의미의 (A) For that reason이 빈칸에 들어가야 자연스럽다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸은 완전한 절(products can be displayed)을 이끌어 장소 명사인 spaces를 수식하는 역할을 한다. 따라서 관계부사 (D) where이 정답이다. 참고로, (A) for는 접속사로 쓰일 경우 이유를 나타내며 앞에 콤마가 와야 한다. (B) that이 빈칸에 들어가려면 that이 이끄는 완전한 절과 앞에 나오는 명사가 동격 관계가 되어야 하는데, 해당 문장에서는 성립되지 않는다. 복합관계대명사인 (C) whatever(~하는 것은 무엇이든지, 어떤 ~일지라도)는 명사절을 이끌어 문장의 주어/목적어 역할을 하거나 부사절을 이끌어 콤마 앞에 오는 주절을 수식한다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸은 주어 Associates의 동사 자리이다. 만일 the task가 동사의 직접목적어라고 한다면 이 뒤에 수령 대상(전치사 to+사람)이 와야 하는데, 여기서는 task를 수식하는 to부정사가 왔다. 따라서 주어인 영업 사원들이 특정 임무를 받는 대상이라고 보는 것이 타당하므로, 보기에서 수동태인 (B) were given과 (D) will be given 중 하나를 선택해야 한다. 해당 임무는 앞으로 있을 활동에서 주어지는 것이므로, 미래시제인 (D) will be given이 정답이 된다. give는 4형식 동사로 쓰일 경우 뒤에 간접목적어 및 직접목적어가 순서대로 오는데, 수동태로 바뀌면서 간접목적어가 주어 자리에 가면 직접목적어는 동사 뒤에 그대로 남겨져 해당 문장과 같은 구조가 된다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 영업사원들에게 팀별로 서로 협력하여 선반을 조립하는 임무가 주어질 것(Associates will be given the task to work cooperatively in teams to assemble them)이라고 했고, 뒤 문장에서는 해당 작업이 완료된 후(When it is completed) 하게 될 일을 나열했다. 따라서 빈칸에도 조립을 위한 협력 작업과 관련된 내용이 들어가야 자연스러우므로, 작업 소요 시간을 예상한 (B)가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "뒤 문장에서 배관을 넣는 데 1시간 정도 소요된다(It should take about an hour to put in the line)고 했으므로, 가스관(a gas line)이 설치될 예정이라고 보는 것이 타당하다. 따라서 (B) install이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "주격 인칭대명사 We의 동사 자리로, 전치사구 on Monday, 10 August의 수식을 받는다. 이메일을 보낸 날짜(Date: 4 August)를 기준으로 8월 10일은 미래이며, 앞 문장에서도 미래시제(will be able to)가 쓰였으므로, (D) will send가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "앞 문장에서 작업 예정일에 배관을 넣는 데 1시간 정도 소요될 것(It should take about an hour to put in the line)이라고 했으므로, 빈칸에는 해당 작업에 대한 추가 내용이 들어가야 자연스럽다. 따라서 순서상 설치 이후 가능한 일을 설명한 (A)가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "첫 번째 단락에서 8월 10일 월요일 오전 10시에서 11시 사이에 작업을 수행할 수 있도록 번즈 씨를 보낼 예정(We will send Bradley Burns~ to do this on Monday, 10 August, between 10:00 A.M. and 11:00 A.M.)이라고 했으므로, 취소(cancel)할 만한 대상은 예정된 작업이라고 볼 수 있다. 따라서 '약속, 예약'이라는 의미의 (D) appointment가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸의 목적어 역할을 하는 to maintain our standing as an industry leader와 어울리는 동사를 선택해야 한다. 업계 선두라는 지위를 유지하는 것은 업체가 추구하는 목표라고 볼 수 있으므로, '추구하다, ~하려고 하다'라는 의미의 (A) seek가 정답이다. (D) remember는 to부정사와 쓰일 경우 '~할 것을 기억하다'라는 뜻을 나타내므로 빈칸에 적절치 않다. (B) imply(암시하다)와 (C) predict(예측하다)는 to부정사를 목적어로 취하지 않으므로, 구조상으로도 불가능하다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞에서는 올해 시험하기 시작한 신규 프로그램이 기대를 넘어섰다(The initiative exceeded our expectations)고 했고, 뒤에서는 모든 매장 관리자들에게 관련 내용을 안내하고 대중에게 해당 프로그램을 발표하겠다고 했다. 따라서 빈칸에도 해당 프로그램과 관련된 내용이 들어가야 자연스러우므로, 시험 성공에 따른(Thus) 결정을 밝힌 (B)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION",
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
                        "explanation": "빈칸은 명사 instructions를 수식하는 형용사 자리로, 문맥상 '상세한(=상세히 설명된) 지시사항'이라는 내용이 되어야 자연스럽다. 따라서 (C) detailed가 정답이다. 현재분사로 쓰일 수 있는 (D) detailing은 영사를 뒤에서 수식해야 하며, 목적어를 취해야 한다. 참고로, send는 4형식 동사로 쓰일 경우 뒤에 간접목적어 및 직접목적어가 순서대로 오는데, 수동태로 바뀌면서 간접목적어가 주어 자리에 가면 직접목적어는 동사 뒤에 그대로 남겨져 해당 문장과 같은 구조가 된다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞뒤로 신규 프로그램의 확장과 관련된 11월 일정(all store managers will be sent detailed instructions ~ we will be announcing the program to the public)을 안내하고 있다. 따라서 연관 있는 내용을 덧붙일 때 쓰이는 접속부사가 빈칸에 들어가야 자연스러우므로, '게다가, 또한'이라는 의미의 (B) Additionally가 정답이다.",
                        "classification": "P6_ADVERB",
                    }
                ]
            }
        ]
    },
    {
        "testId": 10,
        "title": "Test 10",
        "passages": [
            {
                "id": "p6-t10-p1",
                "type": "NOTICE",
                "guidance": "Questions 131-134 refer to the following notice.",
                "content": "Hemel Bookstore is seeking temporary store associates ___131___ the upcoming holiday season. Duties will include greeting customers and answering questions. ___132___. In addition, associates will shelve, clean, and organize merchandise. We want to hire friendly and ___133___ candidates. To apply, please fill out an online job application at www.hemelbookstore.com/application. The ___134___ is October 21.",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "about"
                            },
                            {
                                "label": "B",
                                "text": "on"
                            },
                            {
                                "label": "C",
                                "text": "to"
                            },
                            {
                                "label": "D",
                                "text": "for"
                            }
                        ],
                        "correctAnswer": "D",
                        "explanation": "다가오는 휴가 시즌(the upcoming holiday season)은 임시직 매장 직원을 구하는 이유이므로, '~을 위해'라는 의미의 (D) for가 정답이다.",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "132",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "The job also involves processing sales transactions."
                            },
                            {
                                "label": "B",
                                "text": "We stay open until midnight during the holidays."
                            },
                            {
                                "label": "C",
                                "text": "Our bookstore carries art supplies as well."
                            },
                            {
                                "label": "D",
                                "text": "The cafe is on the first floor of the store."
                            }
                        ],
                        "correctAnswer": "A",
                        "explanation": "빈칸 앞뒤 문장에서 임시직 매장 직원의 직무(greeting customers and answering questions/shelve, clean, and organize merchandise)를 설명하고 있으므로, 빈칸에도 관련 업무에 대한 내용이 들어가야 자연스럽다. 따라서 (A)가 정답이다.",
                        "classification": "P6_SENTENCE"
                    },
                    {
                        "id": "133",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "energetic"
                            },
                            {
                                "label": "B",
                                "text": "energy"
                            },
                            {
                                "label": "C",
                                "text": "energize"
                            },
                            {
                                "label": "D",
                                "text": "energizer"
                            }
                        ],
                        "correctAnswer": "A",
                        "explanation": "형용사 friendly와 함께 명사 candidates를 수식하는 형용사 자리이므로, (A) energetic(활동적인, 활기찬)이 정답이다. (B) energy와 (D) energizer는 명사, (C) energize는 동사로 품사상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "134",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "celebration"
                            },
                            {
                                "label": "B",
                                "text": "release"
                            },
                            {
                                "label": "C",
                                "text": "deadline"
                            },
                            {
                                "label": "D",
                                "text": "meeting"
                            }
                        ],
                        "correctAnswer": "C",
                        "explanation": "앞 문장에서 일자리에 지원하고 싶으면 온라인 구직 지원서를 작성하라(To apply, please fill out an online job application)고 했으므로, 해당 문장의 10월 21일은 지원 일정과 관련된 날짜라고 보아야 한다. 따라서 '기한'이라는 의미의 (C) deadline이 빈칸에 들어가야 자연스럽다.",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t10-p2",
                "type": "ARTICLE",
                "guidance": "Questions 135-138 refer to the following article.",
                "content": "Fishing Village to Become Bustling Port\n\nDODOMA (14 April)—The unassuming town of Kikole, on the Tanzanian coast, is set to become a fully equipped port after an increase in ___135___ in the region. The government has recently designated the area as a business district. This ___136___ attract new businesses and further spur economic growth. One firm, Marina International Shipping, has already announced plans to open a hub there. ___137___. \n\nA number of government officials have recently expressed opposition to the plan. ___138___, with the needed finances already secured, it seems certain that the project will move forward.",
                "questions": [
                    {
                        "id": "135",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "security"
                            },
                            {
                                "label": "B",
                                "text": "tourism"
                            },
                            {
                                "label": "C",
                                "text": "investment"
                            },
                            {
                                "label": "D",
                                "text": "fishing"
                            }
                        ],
                        "correctAnswer": "D",
                        "explanation": "빈칸이 포함된 부분은 소박한 마음이 각종 시설을 갖춘 항구가 되는 데(The unassuming town ~ is set to become a fully equipped port) 영향을 미친 요인을 나타낸다. 뒤 문장에서 정부가 최근 이 지역을 업무지구로 지정했다(The government has recently designated the area as a business district)고 했으므로, 경제와 관련된 부분의 증가(increase)로 인한 것임을 알 수 있다. 따라서 '투자'라는 의미의 (C) investment가 정답이다. 참고로, 마지막 문장에서 필요 자금이 이미 확보된 게 있다(with the needed finances already secured)고 했으므로 투자가 증가했음을 한번 더 확인할 수 있다.",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "136",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "is meant to"
                            },
                            {
                                "label": "B",
                                "text": "means to"
                            },
                            {
                                "label": "C",
                                "text": "meaning to"
                            },
                            {
                                "label": "D",
                                "text": "is meant for"
                            }
                        ],
                        "correctAnswer": "B",
                        "explanation": "주어 This와 동사 attract의 수가 일치하지 않으므로, 빈칸이 This의 동사 자리임을 알 수 있다. 따라서 빈칸에는 This와 수가 일치하면서 attract와 to부정사를 이루는 to가 포함된 본동사가 들어가야 한다. 앞 문장 전체를 대신하는 This는 신규 업체들을 유치하고 경제 성장에 박차를 가하기 위해 '의도된 것이므로, 수동태 동사인 (A) is meant to가 정답이 된다. (B) means to는 능동태로 '~할 셈이다'라는 뜻을 나타내므로 적절하지 않고, 준동사인 (C) meaning to와 for가 포함된 (D) is meant for는 구조상 빈칸에 들어갈 수 없다.",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "137",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Some believe it would be better to make improvements to other ports."
                            },
                            {
                                "label": "B",
                                "text": "The Tanzanian government has promised to fund the new port."
                            },
                            {
                                "label": "C",
                                "text": "Developers hope to complete Kikole’s transformation within ten years."
                            },
                            {
                                "label": "D",
                                "text": "This would be the shipping company’s first major presence in East Africa."
                            }
                        ],
                        "correctAnswer": "D",
                        "explanation": "앞 문장에서 마리나 인터내셔널 해운이라는 회사가 키콜레 항구에 거점을 열 계획을 발표했다(One firm, Marina International Shipping, has already announced plans to open a hub there)고 했으므로, 빈칸에는 유사한 사례나 이 회사와 관련된 내용이 들어가야 자연스럽다. 따라서 회사가 항구에 거점을 연 의의를 설명한 (D)가 정답이다.",
                        "classification": "P6_SENTENCE"
                    },
                    {
                        "id": "138",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Nonetheless"
                            },
                            {
                                "label": "B",
                                "text": "Therefore"
                            },
                            {
                                "label": "C",
                                "text": "In case"
                            },
                            {
                                "label": "D",
                                "text": "Equally as"
                            }
                        ],
                        "correctAnswer": "A",
                        "explanation": "빈칸 앞 문장에서는 많은 공무원들이 최근 해당 계획에 반대 의사를 표시했다(A number of government officials have recently expressed opposition to the plan)고 했는데, 빈칸 뒤에서는 프로젝트가 추진될 것이 확실해 보인다(with the needed finances already secured, it seems certain that the project will move forward)며 대조되는 결과를 예측했다. 따라서 '그렇기는 하지만, 그렇더라도'라는 의미의 (A) Nonetheless가 정답이다. 참고로, (C) In case는 접속사, (D) Equally as는 부사에 접속사/전치사가 결합한 형태이므로 구조상으로도 빈칸에 들어갈 수 없다.",
                        "classification": "P6_VOCABULARY"
                    }
                ]
            },
            {
                "id": "p6-t10-p3",
                "type": "ADVERTISEMENT",
                "guidance": "Questions 139-142 refer to the following advertisement.",
                "content": "Mark your calendars for this year's Family Fun Fair at Delray! Join us from June 20 to June 26 for seven days of summer fun. You will find not only fantastic food, rides, and games, ___139___ exciting shows for all ages. And make sure not to miss our newest ___140___. The Crazy Cowboy Train is a thrilling journey through the Wild West!\n\nThis year's shows include the Bicycle Circus, the Dinosaur Show, and Walter the Magician. Please note that all basic admission ticket holders will need to pay additional fees to gain entrance to shows. ___141___. We also ___142___ a VIP Family Fun pass for $95. This pass provides free admission to all shows plus unlimited free amusement rides.",
                "questions": [
                    {
                        "id": "139",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "if only"
                            },
                            {
                                "label": "B",
                                "text": "or else"
                            },
                            {
                                "label": "C",
                                "text": "so that"
                            },
                            {
                                "label": "D",
                                "text": "but also"
                            }
                        ],
                        "correctAnswer": "D",
                        "explanation": "not only와 함께 상관접속사를 이루어 두 명사구 fantastic food, rides, and games와 exciting shows를 연결하는 자리이다. 따라서 (D) but also가 정답이다. 'not only A but (also) B'는 'A뿐만 아니라 B도'라는 의미로 쓰인다.",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "140",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "shop"
                            },
                            {
                                "label": "B",
                                "text": "member"
                            },
                            {
                                "label": "C",
                                "text": "attraction"
                            },
                            {
                                "label": "D",
                                "text": "refreshment"
                            }
                        ],
                        "correctAnswer": "C",
                        "explanation": "빈칸은 패밀리 유원지 축제에서 놓치지 말아야(not to miss) 할 대상으로, 바로 뒤 문장에 나오는 크레이지 카우보이 기차를 가리킨다. 따라서 '명물'이라는 의미의 (C) attraction이 정답이다.",
                        "classification": "P6_VOCABULARY"
                    },
                    {
                        "id": "141",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "There are over twenty different food vendors at the fair."
                            },
                            {
                                "label": "B",
                                "text": "There is an age requirement for most rides at the fair."
                            },
                            {
                                "label": "C",
                                "text": "Refer to the entertainment schedule for show times and prices."
                            },
                            {
                                "label": "D",
                                "text": "Visit our Web site to see whether you are eligible."
                            }
                        ],
                        "correctAnswer": "C",
                        "explanation": "해당 단락은 축제에서 열리는 공연과 관련된 내용을 설명하고 있다. 바로 앞 문장에서 기본 입장권 소지자는 공연 입장을 위해 추가 요금을 지불해야 한다(all basic admission ticket holders will need to pay additional fees to gain entrance to shows)며 입장료에 대해 언급했으므로, 공연 시간 및 가격 확인 방법을 안내한 (C)가 빈칸에 들어가야 자연스럽다.",
                        "classification": "P6_SENTENCE_INSERTION"
                    },
                    {
                        "id": "142",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "offer"
                            },
                            {
                                "label": "B",
                                "text": "offered"
                            },
                            {
                                "label": "C",
                                "text": "were offering"
                            },
                            {
                                "label": "D",
                                "text": "will be offered"
                            }
                        ],
                        "correctAnswer": "A",
                        "explanation": "주어 We의 동사 자리로, 명사구 a VIP Family Fun pass를 목적으로 취한다. 따라서 능동태 동사 중 하나를 선택해야 하는데, 표에 대한 일반적인 사항을 설명하는 문장이므로 현재 동사인 (A) offer가 정답이 된다.",
                        "classification": "P6_GRAMMAR"
                    }
                ]
            },
            {
                "id": "p6-t10-p4",
                "type": "LETTER",
                "guidance": "Questions 143-146 refer to the following letter.",
                "content": "Brightman Heating and Cooling\n16 Primrose Way\nSydney NSW 2146\n(02) 5550 8899\nwww.brightmanheatingandcooling.com.au\n\n15 May\n\nAlia Bajpa\n422 Hudson St.\nSydney NSW 2000\n\nDear Ms. Bajpa:\n\nWe have some important news to share with you. We ___143___ to retire and close the company after 40 years in the business. ___144___, we want to make sure that you do not experience any disruption to your service. For that reason, we have arranged for Kondo's Heating and Air to begin providing service to you effective on 1 June. I'm certain you will be pleased with ___145___ service.\n\nKondo's is a wonderful company with experienced, highly skilled technicians. ___146___. If you have any questions, please do not hesitate to call.\n\nSincerely,\nNathaniel and Constance Brightman",
                "questions": [
                    {
                        "id": "143",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "decide"
                            },
                            {
                                "label": "B",
                                "text": "were deciding"
                            },
                            {
                                "label": "C",
                                "text": "could decide"
                            },
                            {
                                "label": "D",
                                "text": "have decided"
                            }
                        ],
                        "correctAnswer": "D",
                        "explanation": "앞 문장에서 바즈파 씨에게 알릴 중요한 소식이 있다(We have some important news to share with you)고 했으므로, 업계에서 철수하기로 한 것(to retire and close the company)이 이미 결정된 사항임을 알 수 있다. 따라서 현재완료시제 동시인 (D) have decided가 정답이다.",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "144",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Similarly"
                            },
                            {
                                "label": "B",
                                "text": "However"
                            },
                            {
                                "label": "C",
                                "text": "In general"
                            },
                            {
                                "label": "D",
                                "text": "At that time"
                            }
                        ],
                        "correctAnswer": "B",
                        "explanation": "빈칸 앞 문장에서 회사를 닫기로 결정했다(We have decided to ~ close the company)고 했는데, 뒤 문장에서는 서비스 중단을 겪지 않도록 하겠다(make sure that you do not experience any disruption to your service)며 결정과는 상반되는 조치를 언급했다. 따라서 '그러나, 하지만'이라는 의미의 (B) However이 정답이다.",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "145",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "our"
                            },
                            {
                                "label": "B",
                                "text": "their"
                            },
                            {
                                "label": "C",
                                "text": "whose"
                            },
                            {
                                "label": "D",
                                "text": "his"
                            }
                        ],
                        "correctAnswer": "B",
                        "explanation": "앞 문장에서 콘도 난방 공조가 6월 1일부터 서비스 제공을 시작할 수 있도록 처리했다(we have arranged for Kondo's Heating and Air to begin providing service to you effective on 1 June)고 했으므로, 빈칸에는 콘도 난방 공조를 가리키는 소유격 대명사가 들어가야 한다. 회사는 3인칭 단수 it, 혹은 복수 대명사 they로 대신할 수",
                        "classification": "P6_GRAMMAR"
                    },
                    {
                        "id": "146",
                        "text": "Select the best answer.",
                        "options": [
                            {
                                "label": "A",
                                "text": "Building a strong customer base can take years."
                            },
                            {
                                "label": "B",
                                "text": "We will be holding a grand reopening event."
                            },
                            {
                                "label": "C",
                                "text": "You should be receiving a letter from them soon."
                            },
                            {
                                "label": "D",
                                "text": "Many jobs in heating and air-conditioning are available."
                            }
                        ],
                        "correctAnswer": "C",
                        "explanation": "빈칸 앞 부분에서 콘도 난방 공조가 바즈파 씨에게 서비스 제공을 시작할 수 있도록 처리했다(we have arranged for Kondo's Heating and Air to begin providing service to you)고 한 후, 회사에 대한 설명을 덧붙이며 바즈파 씨를 안심시켰다. 뒤 문장에서는 문의사항이 있으면 언제든 전화하라(If you have any questions, please do not hesitate to call)고 했으므로, 빈칸에도 콘도 난방 공조를 주선해준 것과 관련된 내용이 들어가야 자연스럽다. 따라서 그 쪽에서 곧 편지를 받을 거라고 한 (C)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION"
                    }
                ]
            }
        ]
    },
    {
        "testId": 20,
        "title": "Test 20",
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
                        "explanation": "Full Korean explanation text in a single line",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸이 포함된 부분은 문장 중간에 삽입되어 앞에 나온 사물명사 agenda를 보충 설명하는 역할을 한다. 따라서 '주격 관계대명사 +be동사로 구성된 (C) which is가 정답이다. 참고로, (B) being을 현재분사로 본다고 하더라도, '의사 일정을 웹사이트에서 볼 수 있다는 것은 부가적인 정보일 뿐, '일정에 설명회가 포함된 것'과는 관계가 없기 때문에 분사구문이 성립될 수 없다. (D) what can be는 앞에 선행사가 올 수 없으므로 오답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸 앞뒤로 프로젝트 매니저인 안드레 카잘이 회의에서 할 일(share design concepts for the building, lead a discussion about how construction should be funded)을 열거하고 있다. 따라서 내용을 덧붙일 때 쓰이는 접속부사가 필요하므로, '게다가, 아울러'라는 의미의 (A) In addition이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 대중의 의견을 듣는 시간이 마련될 것(There will be a period for public comment)이라고 했으므로, 이에 대해 부연 설명을 하거나 공지를 마무리하는 문장이 이어져야 자연스럽다. 따라서 그때 참석자들이 의견을 제시할 수 있다고 한 (D)가 정답이다. 참고로, 여기서 at that time은 앞 문장의 a period for public comment를 가리킨다.",
                        "classification": "P6_READING_COMPREHENSION",
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
                        "explanation": "빈칸 앞 문장에서는 팀워크의 이점(Teamwork not only improves productivity but also leads to increased satisfaction for customers and employees)을 설명했고, 빈칸 뒤에서는 매장 내 개선 계획과 팀워크 조성 훈련을 결합하려고 한다(we will be combining a team-building exercise with an in-store improvement plan)며 팀워크를 강화할 계획을 발표했다. 즉, 계획을 실행하기 위해 팀워크의 이점을 명분으로 내세운 것이므로, '그러한 이유로'라는 의미의 (A) For that reason이 빈칸에 들어가야 자연스럽다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸은 완전한 절(products can be displayed)을 이끌어 장소 명사인 spaces를 수식하는 역할을 한다. 따라서 관계부사 (D) where이 정답이다. 참고로, (A) for는 접속사로 쓰일 경우 이유를 나타내며 앞에 콤마가 와야 한다. (B) that이 빈칸에 들어가려면 that이 이끄는 완전한 절과 앞에 나오는 명사가 동격 관계가 되어야 하는데, 해당 문장에서는 성립되지 않는다. 복합관계대명사인 (C) whatever(~하는 것은 무엇이든지, 어떤 ~일지라도)는 명사절을 이끌어 문장의 주어/목적어 역할을 하거나 부사절을 이끌어 콤마 앞에 오는 주절을 수식한다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "빈칸은 주어 Associates의 동사 자리이다. 만일 the task가 동사의 직접목적어라고 한다면 이 뒤에 수령 대상(전치사 to+사람)이 와야 하는데, 여기서는 task를 수식하는 to부정사가 왔다. 따라서 주어인 영업 사원들이 특정 임무를 받는 대상이라고 보는 것이 타당하므로, 보기에서 수동태인 (B) were given과 (D) will be given 중 하나를 선택해야 한다. 해당 임무는 앞으로 있을 활동에서 주어지는 것이므로, 미래시제인 (D) will be given이 정답이 된다. give는 4형식 동사로 쓰일 경우 뒤에 간접목적어 및 직접목적어가 순서대로 오는데, 수동태로 바뀌면서 간접목적어가 주어 자리에 가면 직접목적어는 동사 뒤에 그대로 남겨져 해당 문장과 같은 구조가 된다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞 문장에서 영업사원들에게 팀별로 서로 협력하여 선반을 조립하는 임무가 주어질 것(Associates will be given the task to work cooperatively in teams to assemble them)이라고 했고, 뒤 문장에서는 해당 작업이 완료된 후(When it is completed) 하게 될 일을 나열했다. 따라서 빈칸에도 조립을 위한 협력 작업과 관련된 내용이 들어가야 자연스러우므로, 작업 소요 시간을 예상한 (B)가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "뒤 문장에서 배관을 넣는 데 1시간 정도 소요된다(It should take about an hour to put in the line)고 했으므로, 가스관(a gas line)이 설치될 예정이라고 보는 것이 타당하다. 따라서 (B) install이 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "주격 인칭대명사 We의 동사 자리로, 전치사구 on Monday, 10 August의 수식을 받는다. 이메일을 보낸 날짜(Date: 4 August)를 기준으로 8월 10일은 미래이며, 앞 문장에서도 미래시제(will be able to)가 쓰였으므로, (D) will send가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "앞 문장에서 작업 예정일에 배관을 넣는 데 1시간 정도 소요될 것(It should take about an hour to put in the line)이라고 했으므로, 빈칸에는 해당 작업에 대한 추가 내용이 들어가야 자연스럽다. 따라서 순서상 설치 이후 가능한 일을 설명한 (A)가 정답이다.",
                        "classification": "P6_GRAMMAR",
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
                        "explanation": "첫 번째 단락에서 8월 10일 월요일 오전 10시에서 11시 사이에 작업을 수행할 수 있도록 번즈 씨를 보낼 예정(We will send Bradley Burns~ to do this on Monday, 10 August, between 10:00 A.M. and 11:00 A.M.)이라고 했으므로, 취소(cancel)할 만한 대상은 예정된 작업이라고 볼 수 있다. 따라서 '약속, 예약'이라는 의미의 (D) appointment가 정답이다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸의 목적어 역할을 하는 to maintain our standing as an industry leader와 어울리는 동사를 선택해야 한다. 업계 선두라는 지위를 유지하는 것은 업체가 추구하는 목표라고 볼 수 있으므로, '추구하다, ~하려고 하다'라는 의미의 (A) seek가 정답이다. (D) remember는 to부정사와 쓰일 경우 '~할 것을 기억하다'라는 뜻을 나타내므로 빈칸에 적절치 않다. (B) imply(암시하다)와 (C) predict(예측하다)는 to부정사를 목적어로 취하지 않으므로, 구조상으로도 불가능하다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞에서는 올해 시험하기 시작한 신규 프로그램이 기대를 넘어섰다(The initiative exceeded our expectations)고 했고, 뒤에서는 모든 매장 관리자들에게 관련 내용을 안내하고 대중에게 해당 프로그램을 발표하겠다고 했다. 따라서 빈칸에도 해당 프로그램과 관련된 내용이 들어가야 자연스러우므로, 시험 성공에 따른(Thus) 결정을 밝힌 (B)가 정답이다.",
                        "classification": "P6_SENTENCE_INSERTION",
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
                        "explanation": "빈칸은 명사 instructions를 수식하는 형용사 자리로, 문맥상 '상세한(=상세히 설명된) 지시사항'이라는 내용이 되어야 자연스럽다. 따라서 (C) detailed가 정답이다. 현재분사로 쓰일 수 있는 (D) detailing은 영사를 뒤에서 수식해야 하며, 목적어를 취해야 한다. 참고로, send는 4형식 동사로 쓰일 경우 뒤에 간접목적어 및 직접목적어가 순서대로 오는데, 수동태로 바뀌면서 간접목적어가 주어 자리에 가면 직접목적어는 동사 뒤에 그대로 남겨져 해당 문장과 같은 구조가 된다.",
                        "classification": "P6_VOCABULARY",
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
                        "explanation": "빈칸 앞뒤로 신규 프로그램의 확장과 관련된 11월 일정(all store managers will be sent detailed instructions ~ we will be announcing the program to the public)을 안내하고 있다. 따라서 연관 있는 내용을 덧붙일 때 쓰이는 접속부사가 빈칸에 들어가야 자연스러우므로, '게다가, 또한'이라는 의미의 (B) Additionally가 정답이다.",
                        "classification": "P6_ADVERB",
                    }
                ]
            }
        ]
    }
];
