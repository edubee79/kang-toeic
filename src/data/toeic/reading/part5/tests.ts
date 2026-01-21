export interface Part5TestQuestion {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: string; // e.g. G_POS, V_NOUN, etc.
    testId?: number;
    audio?: string;
}

export interface Part5TestSet {
    testId: number;
    title: string;
    questions: Part5TestQuestion[];
}

export const part5TestData: Part5TestSet[] = [
    {
        "testId": 1,
        "title": "Part 5 Real Test 1",
        "questions": [
            {
                "id": "q101",
                "text": "Former Sendai Company CEO Ken Nakata spoke about _____ career experiences.",
                "options": [
                    {
                        "label": "A",
                        "text": "he"
                    },
                    {
                        "label": "B",
                        "text": "his"
                    },
                    {
                        "label": "C",
                        "text": "him"
                    },
                    {
                        "label": "D",
                        "text": "himself"
                    }
                ],
                "classification": "P5_PR_CASE",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "센다이 회사의 전 최고 경영자인 켄 나카타가 자신의 경력에 대해 말했다.",
                "explanation": "빈칸에는 뒤에 온 복합명사 career experiences를 수식하는 인칭대명사가 들어가야 한다. 따라서 명사 앞에 쓰여 한정사 역할을 할 수 있는 소유격 인칭대명사 (B) his가 정답이다."
            },
            {
                "id": "q102",
                "text": "Passengers who will be taking a _____ domestic flight should go to Terminal A.",
                "options": [
                    {
                        "label": "A",
                        "text": "connectivity"
                    },
                    {
                        "label": "B",
                        "text": "connects"
                    },
                    {
                        "label": "C",
                        "text": "connect"
                    },
                    {
                        "label": "D",
                        "text": "connecting"
                    }
                ],
                "classification": "P5_POS_ADJ",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "국내선 연결편을 이용하실 승객께서는 A 터미널로 가시기 바랍니다.",
                "explanation": "빈칸 앞에는 부정관사, 뒤에는 「형용사+명사」로 이루어져 '국내선 항공편'을 뜻하는 명사구 domestic flight가 있으므로, 빈칸에는 명사 flight를 수식하는 형용사가 들어가 '연결하는 국내선 항공편'이라는 의미가 되어야 적절하다. 따라서 '연결하는'이라는 의미를 나타내며 형용사 역할을 하는 현재분사 (D) connecting이 정답이다. (A) connectivity는 명사, (B) connects와 (C) connect는 동사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q103",
                "text": "Fresh and _____ apple-cider donuts are available at Oakcrest Orchard's retail shop for £6 per dozen.",
                "options": [
                    {
                        "label": "A",
                        "text": "eaten"
                    },
                    {
                        "label": "B",
                        "text": "open"
                    },
                    {
                        "label": "C",
                        "text": "tasty"
                    },
                    {
                        "label": "D",
                        "text": "free"
                    }
                ],
                "classification": "P5_VOC_ADJ",
                "testId": 1,
                "correctAnswer": "C",
                "translation": "오크레스트 과수원의 소매점에서 신선하고 맛있는 사과 사이다 도넛을 12개당 6파운드에 구입할 수 있다.",
                "explanation": "복합명사 apple-cider donuts를 수식하여 '신선하고 맛있는 사과 사이다 도넛'이라는 의미가 되어야 적절하므로 '맛있는'을 뜻하는 (C) tasty가 정답이다. (A) eaten은 '먹은', (B) open은 '열린', (D) free는 '무료의; 자유로운'이라는 의미이다."
            },
            {
                "id": "q104",
                "text": "Zahn Flooring has the widest selection of _____ in the United Kingdom.",
                "options": [
                    {
                        "label": "A",
                        "text": "paints"
                    },
                    {
                        "label": "B",
                        "text": "tiles"
                    },
                    {
                        "label": "C",
                        "text": "furniture"
                    },
                    {
                        "label": "D",
                        "text": "curtains"
                    }
                ],
                "classification": "P5_VOC_NOUN",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "잔 플로어링은 영국에서 가장 다양한 종류의 타일을 보유하고 있다.",
                "explanation": "Zahn Flooring에서 보유하고 있는 품목으로 적절한 명사를 골라야 한다. 상호에 '바닥재'를 뜻하는 Flooring이 들어가 있는 것으로 보아 바닥재 제품을 판매하는 곳임을 알 수 있으므로 바닥재에 속하는 '타일'이 들어가야 가장 적절하다. 따라서 (B) tiles가 정답이다. (A)의 paint(페인트), (C) furniture(가구), (D)의 curtain(커튼)은 flooring 매장이 가장 다양한 종류를 보유할 품목으로 어울리지 않는다."
            },
            {
                "id": "q105",
                "text": "One responsibility of the IT department is to ensure that the company is using _____ software.",
                "options": [
                    {
                        "label": "A",
                        "text": "update"
                    },
                    {
                        "label": "B",
                        "text": "updating"
                    },
                    {
                        "label": "C",
                        "text": "updates"
                    },
                    {
                        "label": "D",
                        "text": "updated"
                    }
                ],
                "classification": "P5_POS_ADJ",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "IT 부서의 한 가지 책임은 회사가 업데이트된 소프트웨어를 사용하도록 보장하는 것이다.",
                "explanation": "빈칸에는 명사 software를 수식하는 형용사 또는 software와 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '업데이트된 소프트웨어'라는 내용이 되어야 자연스러우므로, '업데이트된'이라는 수동의 의미를 나타내어 형용사 역할을 하는 과거분사 (D) updated가 정답이다. update가 명사로 쓰인 경우, (A) update와 (C) updates는 software와 복합명사를 이루기에 적절하지 않고, software는 update의 주체가 아닌 대상이므로 능동의 의미를 나타내는 현재분사 (B) updating은 답이 될 수 없다."
            },
            {
                "id": "q106",
                "text": "It is wise to check a company's dress code _____ visiting its head office.",
                "options": [
                    {
                        "label": "A",
                        "text": "so"
                    },
                    {
                        "label": "B",
                        "text": "how"
                    },
                    {
                        "label": "C",
                        "text": "like"
                    },
                    {
                        "label": "D",
                        "text": "before"
                    }
                ],
                "classification": "P5_PREP_PHRA",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "본사를 방문하기 전에 회사의 복장 규정을 확인하는 것이 현명하다.",
                "explanation": "빈칸은 가주어 It, 진주어 to check its head office인 문장에서 동사 check와 목적어 a company's dress code 뒤에 visiting its head office를 연결해 주는 자리이다. visiting과 함께 쓰여 '방문하기 전에'라는 내용이 되어야 자연스러우므로 (D) before가 정답이다. before -ing(~하기 전에)와 after -ing(~한 후에)는 빈출 표현이니 암기해 두자."
            },
            {
                "id": "q107",
                "text": "Wexler Store's management team expects that employees will _____ support any new hires.",
                "options": [
                    {
                        "label": "A",
                        "text": "enthusiastically"
                    },
                    {
                        "label": "B",
                        "text": "enthusiasm"
                    },
                    {
                        "label": "C",
                        "text": "enthusiastic"
                    },
                    {
                        "label": "D",
                        "text": "enthused"
                    }
                ],
                "classification": "P5_POS_ADV",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "웩슬러 스토어의 경영진은 직원들이 모든 신입 사원을 열심히 지원할 것으로 기대한다.",
                "explanation": "빈칸이 조동사 will과 동사원형 support 사이에 있으므로 동사를 수식하는 부사 자리이다. 따라서 '매우 열심히, 열광적으로'를 뜻하는 부사 (A) enthusiastically가 정답이다. (B) enthusiasm은 명사, (C) enthusiastic은 형용사, (D) enthused는 동사/과거분사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q108",
                "text": "Wheel alignments and brake system _____ are part of our vehicle service plan.",
                "options": [
                    {
                        "label": "A",
                        "text": "inspects"
                    },
                    {
                        "label": "B",
                        "text": "inspector"
                    },
                    {
                        "label": "C",
                        "text": "inspected"
                    },
                    {
                        "label": "D",
                        "text": "inspections"
                    }
                ],
                "classification": "P5_POS_NOUN",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "휠 얼라인먼트와 브레이크 시스템 검사는 당사 차량 서비스 제도의 일부입니다.",
                "explanation": "빈칸은 동사 are의 주어 자리로, and 앞의 복합명사 Wheel alignments와 대등하게 연결되면서 빈칸 앞의 brake system과 함께 복합명사를 만들 수 있는 명사가 들어가야 한다. '휠 얼라인먼트와 브레이크 시스템 검사는 서비스의 일부'라는 내용이 되어야 자연스러우므로 '검사'를 뜻하는 (D) inspections가 정답이다. '조사관'을 뜻하는 (B) inspector는 가산 단수명사로, 한정사 an, the 등이 필요하므로 오답이다."
            },
            {
                "id": "q109",
                "text": "Registration for the Marketing Coalition Conference is now open _____ September 30.",
                "options": [
                    {
                        "label": "A",
                        "text": "until"
                    },
                    {
                        "label": "B",
                        "text": "into"
                    },
                    {
                        "label": "C",
                        "text": "yet"
                    },
                    {
                        "label": "D",
                        "text": "while"
                    }
                ],
                "classification": "P5_PREP_PHRA",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "마케팅 연합 콘퍼런스의 등록은 현재 9월 30일까지 가능합니다.",
                "explanation": "빈칸 앞에 Registration ~ Conference가 주어, is가 동사, open이 보어인 완전한 절이 있고 뒤에 명사구 September 30가 있으므로 빈칸은 전치사 자리이다. 빈칸 뒤에 시점을 나타내는 명사구가 왔고, '9월 30일까지 등록이 가능하다'라는 의미가 되어야 자연스러우므로 '~까지'를 뜻하는 전치사 (A) until이 정답이다. (B) into는 전치사이지만 '~ 안으로'라는 의미이고, (C) yet은 부사/접속사, (D) while은 접속사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q110",
                "text": "Growth in the home entertainment industry has been _____ this quarter.",
                "options": [
                    {
                        "label": "A",
                        "text": "separate"
                    },
                    {
                        "label": "B",
                        "text": "limited"
                    },
                    {
                        "label": "C",
                        "text": "willing"
                    },
                    {
                        "label": "D",
                        "text": "assorted"
                    }
                ],
                "classification": "P5_VOC_ADJ",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "이번 분기에는 홈 엔터테인먼트 산업의 성장이 제한적이었다.",
                "explanation": "be동사 has been 뒤에 들어가 주어 Growth를 보충 설명하기에 적절한 형용사가 필요하다. 문맥상 '성장이 제한적이었다'라는 내용이 되어야 적절하므로 '제한된'을 뜻하는 (B) limited가 정답이다. (A) separate는 '분리된', (C) willing은 '자발적인', (D) assorted는 '여러 가지의'라는 의미이다."
            },
            {
                "id": "q111",
                "text": "Hawson Furniture will be making _____ on the east side of town on Thursday.",
                "options": [
                    {
                        "label": "A",
                        "text": "deliveries"
                    },
                    {
                        "label": "B",
                        "text": "delivered"
                    },
                    {
                        "label": "C",
                        "text": "deliver"
                    },
                    {
                        "label": "D",
                        "text": "deliverable"
                    }
                ],
                "classification": "P5_POS_NOUN",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "호손 가구는 목요일에 시내 동쪽에서 배달을 할 예정이다.",
                "explanation": "빈칸은 동사 will be making의 목적어 명사 자리로, make와 함께 '배달하다'라는 의미를 완성하는 명사 (A) deliveries가 정답이다. (B) delivered는 동사/과거분사, (C) deliver는 동사이고, 형용사나 명사로 쓰이는 (D) deliverable은 명사인 경우 가산 단수명사로 앞에 한정사 없이 쓸 수 없으므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q112",
                "text": "The Marlton City Council does not have the authority to _____ parking on city streets.",
                "options": [
                    {
                        "label": "A",
                        "text": "drive"
                    },
                    {
                        "label": "B",
                        "text": "prohibit"
                    },
                    {
                        "label": "C",
                        "text": "bother"
                    },
                    {
                        "label": "D",
                        "text": "travel"
                    }
                ],
                "classification": "P5_VOC_VERB",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "말튼 시 의회는 시내 도로에 주차하는 것을 금지할 권한이 없다.",
                "explanation": "명사 authority를 수식하는 to부정사 자리에 들어갈 동사 어휘를 고르는 문제이다. parking을 목적어로 취해 '주차를 금지할 권한'이라는 의미가 되어야 자연스러우므로 '금지하다'를 뜻하는 (B) prohibit이 정답이다. (A) drive는 '운전하다', (C) bother는 '귀찮게 하다', (D) travel은 '여행하다'라는 의미이다."
            },
            {
                "id": "q113",
                "text": "Project Earth Group is _____ for ways to reduce transport-related greenhouse gas emissions.",
                "options": [
                    {
                        "label": "A",
                        "text": "looking"
                    },
                    {
                        "label": "B",
                        "text": "seeing"
                    },
                    {
                        "label": "C",
                        "text": "driving"
                    },
                    {
                        "label": "D",
                        "text": "leaning"
                    }
                ],
                "classification": "P5_VOC_VERB",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "프로젝트 어스 그룹은 운송 관련 온실가스 배출을 줄일 방법을 찾고 있다.",
                "explanation": "빈칸 뒤에 목적어가 없고, 전치사 for가 있으므로 for와 자연스럽게 연결될 수 있는 자동사가 들어가야 한다. 문맥상 '방법을 찾고 있다'라는 의미가 되어야 자연스러우므로 for와 함께 쓰여 '~을 찾다'라는 의미를 나타내는 동사 Look의 현재분사형 (A) looking이 정답이다."
            },
            {
                "id": "q114",
                "text": "Our skilled tailors are happy to design a custom-made suit that fits your style and budget _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "perfect"
                    },
                    {
                        "label": "B",
                        "text": "perfects"
                    },
                    {
                        "label": "C",
                        "text": "perfectly"
                    },
                    {
                        "label": "D",
                        "text": "perfection"
                    }
                ],
                "classification": "P5_POS_ADV",
                "testId": 1,
                "correctAnswer": "C",
                "translation": "당사의 숙련된 재단사들이 귀하의 스타일과 예산에 완벽하게 맞는 맞춤 정장을 디자인할 수 있어서 기쁩니다.",
                "explanation": "빈칸은 명사구 a custom-made suit를 수식하는 관계사절에 속해 있고, 앞에 온 동사 fits를 수식하는 부사 자리이므로 (C) perfectly가 정답이다. (A) perfect는 형용사/동사, (B) perfects는 동사, (D) perfection은 명사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q115",
                "text": "Project manager Hannah Chung has proved to be very _____ with completing company projects.",
                "options": [
                    {
                        "label": "A",
                        "text": "helpfulness"
                    },
                    {
                        "label": "B",
                        "text": "help"
                    },
                    {
                        "label": "C",
                        "text": "helpfully"
                    },
                    {
                        "label": "D",
                        "text": "helpful"
                    }
                ],
                "classification": "P5_POS_ADJ",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "프로젝트 매니저 한나 정이 회사 프로젝트를 완수하는 데 매우 도움이 된 것으로 드러났다.",
                "explanation": "빈칸에는 동사 has proved의 목적어 역할을 하는 to부정사 to be 뒤에 오기에 적절한 품사를 골라야 한다. to부정사의 동사가 2형식 동사 be이고 앞에 부사 very가 있으므로, 빈칸은 be동사의 보어 역할을 하면서 부사의 수식을 받을 수 있는 형용사 자리이다. 따라서 '도움이 되는'을 뜻하는 형용사 (D) helpful이 정답이다. (A) helpfulness는 명사, (B) help는 동사/명사, (C) helpfully는 부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q116",
                "text": "Lehua Vacation Club members will receive double points _____ the month of August at participating hotels.",
                "options": [
                    {
                        "label": "A",
                        "text": "onto"
                    },
                    {
                        "label": "B",
                        "text": "above"
                    },
                    {
                        "label": "C",
                        "text": "during"
                    },
                    {
                        "label": "D",
                        "text": "between"
                    }
                ],
                "classification": "P5_PREP_PHRA",
                "testId": 1,
                "correctAnswer": "C",
                "translation": "레후아 베케이션 클럽 회원들은 제휴 호텔에서 8월 한 달 동안 두 배의 포인트를 받게 될 것입니다.",
                "explanation": "빈칸 뒤에 기간을 나타내는 명사구 the month of August가 있고, 문맥상 '8월 한 달 동안'이라는 의미가 되어야 자연스러우므로 '~ 동안'을 뜻하는 (C) during이 정답이다. (A) onto는 '~ 위로', (B) above는 '~보다 위에', (D) between은 between A and B 형태로 쓰여 '(특정 시점) 사이에'라는 의미를 나타낸다."
            },
            {
                "id": "q117",
                "text": "The costumes were not received _____ enough to be used in the first dress rehearsal.",
                "options": [
                    {
                        "label": "A",
                        "text": "far"
                    },
                    {
                        "label": "B",
                        "text": "very"
                    },
                    {
                        "label": "C",
                        "text": "almost"
                    },
                    {
                        "label": "D",
                        "text": "soon"
                    }
                ],
                "classification": "P5_VOC_ADV",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "첫 드레스 리허설에 사용될 만큼 빨리 의상을 받지 못했다.",
                "explanation": "빈칸에는 동사구 were not received를 수식하면서, 뒤에 나온 '~할 만큼 (충분히)'를 뜻하는 「enough+to부정사」 구문의 수식을 받는 적절한 부사가 들어가야 한다. 문맥상 '첫 리허설에 사용될 만큼 빨리 받지 못했다'라는 내용이 되어야 적절하므로 '곧, 빨리'를 뜻하는 부사 (D) soon이 정답이다. (A) far는 '멀리', (B) very는 '매우', (C) almost는 '거의'라는 의미이다."
            },
            {
                "id": "q118",
                "text": "As a former publicist for several renowned orchestras, Mr. Wu would excel in the role of event _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "organized"
                    },
                    {
                        "label": "B",
                        "text": "organizer"
                    },
                    {
                        "label": "C",
                        "text": "organizes"
                    },
                    {
                        "label": "D",
                        "text": "organizational"
                    }
                ],
                "classification": "P5_POS_NOUN",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "몇몇 유명 오케스트라의 홍보 담당자였던 우 씨는 행사 주최자 역할에 뛰어날 것이다.",
                "explanation": "빈칸은 앞의 명사 event와 함께 쓰여 전치사 of의 목적어 역할을 하는 명사 자리로, '행사 주최자'라는 의미의 복합명사를 만들 수 있는 '주최자, 조직자'라는 뜻의 (B) organizer가 정답이다. (A) organized는 동사/과거분사, (C) organizes는 동사, (D) organizational은 형용사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q119",
                "text": "The northbound lane on Davis Street will be _____ closed because of the city's bridge reinforcement project.",
                "options": [
                    {
                        "label": "A",
                        "text": "temporarily"
                    },
                    {
                        "label": "B",
                        "text": "competitively"
                    },
                    {
                        "label": "C",
                        "text": "recently"
                    },
                    {
                        "label": "D",
                        "text": "collectively"
                    }
                ],
                "classification": "P5_VOC_ADV",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "데이비스 가의 북행 차선은 시의 교량 보강 프로젝트로 인해 일시적으로 폐쇄될 예정이다.",
                "explanation": "동사구 will be closed를 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '공사로 인해 차선이 일시적으로 폐쇄된다'라는 내용이 되어야 자연스러우므로 '일시적으로'를 뜻하는 (A) temporarily가 정답이다. (B) competitively는 '경쟁적으로', (D) collectively는 '전체적으로'라는 의미로 문맥상 적절하지 않고, (C) recently(최근에)는 주로 현재완료 시제와 함께 쓰이며 미래 시제와 어울리지 않는다."
            },
            {
                "id": "q120",
                "text": "Airline representatives must handle a wide range of passenger issues, _____ missed connections to lost luggage.",
                "options": [
                    {
                        "label": "A",
                        "text": "from"
                    },
                    {
                        "label": "B",
                        "text": "under"
                    },
                    {
                        "label": "C",
                        "text": "on"
                    },
                    {
                        "label": "D",
                        "text": "against"
                    }
                ],
                "classification": "P5_PREP_PHRA",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "항공사 직원은 놓친 연결편부터 분실 수하물에 이르기까지 다양한 승객 문제를 처리해야 한다.",
                "explanation": "빈칸 뒤 전치사구 to lost luggage와 함께 from A to B 구문을 이루어 '놓친 연결편부터 분실 수하물에 이르기까지'라는 의미가 되어야 자연스러우므로 (A) from이 정답이다."
            },
            {
                "id": "q121",
                "text": "The meeting notes were _____ deleted, but Mr. Hahm was able to recreate them from memory.",
                "options": [
                    {
                        "label": "A",
                        "text": "accident"
                    },
                    {
                        "label": "B",
                        "text": "accidental"
                    },
                    {
                        "label": "C",
                        "text": "accidents"
                    },
                    {
                        "label": "D",
                        "text": "accidentally"
                    }
                ],
                "classification": "P5_POS_ADV",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "회의록이 실수로 삭제되었지만, 함 씨는 기억을 더듬어 그것들을 되살릴 수 있었다.",
                "explanation": "동사구 were deleted를 수식하는 부사 자리이므로 (D) accidentally(실수로, 우연히)가 정답이다. (A) accident와 (C) accidents는 명사, (B) accidental은 형용사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q122",
                "text": "The current issue of Farming Scene magazine predicts that the price of corn will rise 5 percent over the _____ year.",
                "options": [
                    {
                        "label": "A",
                        "text": "next"
                    },
                    {
                        "label": "B",
                        "text": "with"
                    },
                    {
                        "label": "C",
                        "text": "which"
                    },
                    {
                        "label": "D",
                        "text": "now"
                    }
                ],
                "classification": "P5_POS_ADJ",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "<파밍 씬> 잡지의 이번 호에서는 옥수수 가격이 내년에 5퍼센트 오를 것으로 예측한다.",
                "explanation": "빈칸 앞에 정관사 the가 있고, 뒤에 명사 year가 있으므로 빈칸은 명사를 수식하는 형용사 자리이다. 따라서 '다음의'를 뜻하는 형용사 (A) next가 정답이다. (B) with는 전치사, (C) which는 관계대명사/의문사, (D) now는 부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q123",
                "text": "Anyone who still _____ to take the fire safety training should do so before the end of the month.",
                "options": [
                    {
                        "label": "A",
                        "text": "needing"
                    },
                    {
                        "label": "B",
                        "text": "needs"
                    },
                    {
                        "label": "C",
                        "text": "has needed"
                    },
                    {
                        "label": "D",
                        "text": "were needing"
                    }
                ],
                "classification": "P5_V_AGREE",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "아직 소방 안전 교육을 받아야 하는 사람은 이달 말까지 받아야 한다.",
                "explanation": "빈칸은 선행사 Anyone을 수식하는 관계사절(who still ~ safety training)의 동사 자리이다. 관계사절의 동사는 선행사에 수를 일치시키는데, 선행사가 Anyone이므로 단수동사가 들어가야 한다. 또한 의무사항에 해당되는 사람의 조건을 설명하는 내용이므로 현재 시제를 써야 한다. 따라서 (B) needs가 정답이다. (A) needing은 현재분사/동명사이므로 품사상 답이 될 수 없고, (C) has needed는 시제가 맞지 않으며, (D) were needing은 Anyone과 수가 일치하지 않으므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q124",
                "text": "Emerging technologies have _____ begun to transform the shipping industry in ways that were once unimaginable.",
                "options": [
                    {
                        "label": "A",
                        "text": "already"
                    },
                    {
                        "label": "B",
                        "text": "exactly"
                    },
                    {
                        "label": "C",
                        "text": "hardly"
                    },
                    {
                        "label": "D",
                        "text": "closely"
                    }
                ],
                "classification": "P5_VOC_ADV",
                "testId": 1,
                "correctAnswer": "A",
                "translation": "신생 기술은 한때는 상상조차 할 수 없던 방식으로 해운 산업을 이미 탈바꿈하기 시작했다.",
                "explanation": "동사구 have begun을 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '신생 기술이 업계를 이미 탈바꿈하기 시작했다'라는 내용이 되어야 자연스러우므로 '이미, 벌써'라는 뜻의 (A) already가 정답이다. (B) exactly는 '정확히', (C) hardly는 '거의 ~않다', (D) closely는 '면밀히'라는 의미이다."
            },
            {
                "id": "q125",
                "text": "The company handbook outlines the high _____ that employees are expected to meet every day.",
                "options": [
                    {
                        "label": "A",
                        "text": "experts"
                    },
                    {
                        "label": "B",
                        "text": "accounts"
                    },
                    {
                        "label": "C",
                        "text": "recommendations"
                    },
                    {
                        "label": "D",
                        "text": "standards"
                    }
                ],
                "classification": "P5_VOC_NOUN",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "회사 안내서에는 직원들이 매일 충족해야 하는 높은 기준들이 설명되어 있다.",
                "explanation": "형용사 high와 관계사절(that employees ~ to meet every day)의 수식을 받기에 어울리는 명사를 고르면 된다. '직원들이 매일 충족해야 하는 높은 기준'이라는 내용이 되어야 자연스러우므로 '기준'을 뜻하는 (D) standards가 정답이다. (A)의 expert는 '전문가', (B)의 account는 '계좌, (-s) 회계', (C)의 recommendation는 '추천'이라는 의미이다."
            },
            {
                "id": "q126",
                "text": "Because _____ of the board members have scheduling conflicts, the board meeting will be moved to a date when all can attend.",
                "options": [
                    {
                        "label": "A",
                        "text": "any"
                    },
                    {
                        "label": "B",
                        "text": "everybody"
                    },
                    {
                        "label": "C",
                        "text": "those"
                    },
                    {
                        "label": "D",
                        "text": "some"
                    }
                ],
                "classification": "P5_PR_CASE",
                "testId": 1,
                "correctAnswer": "D",
                "translation": "이사진 중 일부가 중복되는 일정이 있어서 이사회 회의는 전원 참석 가능한 날짜로 변경될 것입니다.",
                "explanation": "빈칸은 부사절 접속사 because가 이끄는 절에서 복수동사 have의 주어 자리로 복수대명사가 필요하고, 문맥상 '이사진 중 일부가 중복되는 일정이 있다'라는 내용이 되어야 자연스러우므로 '일부, 몇몇'을 뜻하는 (D) some이 정답이다. (A) any는 긍정문에서 '누구든지'를 뜻하므로 문맥에 어울리지 않고, (B) everybody는 단수동사와 쓰이므로 답이 될 수 없다. 지시대명사 (C) those는 앞서 언급된 복수명사를 반복해서 사용하는 것을 피하기 위해 쓰이므로 적절하지 않다."
            },
            {
                "id": "q127",
                "text": "The project _____ the collaboration of several teams across the company.",
                "options": [
                    {
                        "label": "A",
                        "text": "passed"
                    },
                    {
                        "label": "B",
                        "text": "decided"
                    },
                    {
                        "label": "C",
                        "text": "required"
                    },
                    {
                        "label": "D",
                        "text": "performed"
                    }
                ],
                "classification": "P5_VOC_VERB",
                "testId": 1,
                "correctAnswer": "C",
                "translation": "그 프로젝트는 회사 전체에 걸쳐 여러 팀의 협업을 필요로 했다.",
                "explanation": "주어 The project의 동사 자리로, '프로젝트는 협업을 필요로 했다'라는 의미가 되어야 적절하므로 '필요로 하다, 요구하다'라는 의미의 동사 require의 과거형 (C) required가 정답이다. (A)의 pass는 '통과하다', (B)의 decide는 '결정하다', (D)의 perform은 '수행하다'라는 의미이다."
            },
            {
                "id": "q128",
                "text": "We cannot send the store's coupon booklet to the printers until it _____ by Ms. Jeon.",
                "options": [
                    {
                        "label": "A",
                        "text": "is approving"
                    },
                    {
                        "label": "B",
                        "text": "approves"
                    },
                    {
                        "label": "C",
                        "text": "has been approved"
                    },
                    {
                        "label": "D",
                        "text": "will be approved"
                    }
                ],
                "classification": "P5_V_VOICE",
                "testId": 1,
                "correctAnswer": "C",
                "translation": "전 씨의 승인을 받기 전까지는 매장 쿠폰 책자를 인쇄소에 보낼 수 없다.",
                "explanation": "부사절 접속사 until이 이끄는 절의 동사 자리로, 뒤에 목적어가 아닌 전치사 by가 이끄는 전치사구가 왔으므로 수동태가 들어가야 한다. 따라서 능동태인 (A) is approving과 (B) approves는 빈칸에 들어갈 수 없다. 또한 until(~까지)은 시간 부사절을 이끄는 접속사로, 시간 부사절에서는 현재 시제 또는 현재완료 시제가 미래 시제 또는 미래 완료 시제를 대신하므로 미래 시제 (D) will be approved는 답이 될 수 없다. 따라서 (C) has been approved가 정답이다."
            },
            {
                "id": "q129",
                "text": "_____ the closure of Verdigold Transport Services, we are looking for a new shipping company.",
                "options": [
                    {
                        "label": "A",
                        "text": "In spite of"
                    },
                    {
                        "label": "B",
                        "text": "Just as"
                    },
                    {
                        "label": "C",
                        "text": "In light of"
                    },
                    {
                        "label": "D",
                        "text": "According to"
                    }
                ],
                "classification": "P5_PREP_PHRA",
                "testId": 1,
                "correctAnswer": "C",
                "translation": "버디골드 운송 서비스의 폐업을 고려하여, 우리는 새로운 운송 회사를 찾고 있다.",
                "explanation": "'기존 운송 회사의 폐업을 고려해 새 회사를 찾고 있다'라는 내용이 되어야 적절하므로 '~을 고려하여'라는 뜻의 (C) In light of가 정답이다. (A) In spite of는 '~에도 불구하고', (B) Just as는 '마치 ~처럼', (D) According to는 '~에 따르면'이라는 의미이다."
            },
            {
                "id": "q130",
                "text": "The _____ information provided by Uniss Bank's brochure helps applicants understand the terms of their loans.",
                "options": [
                    {
                        "label": "A",
                        "text": "arbitrary"
                    },
                    {
                        "label": "B",
                        "text": "supplemental"
                    },
                    {
                        "label": "C",
                        "text": "superfluous"
                    },
                    {
                        "label": "D",
                        "text": "potential"
                    }
                ],
                "classification": "P5_VOC_ADJ",
                "testId": 1,
                "correctAnswer": "B",
                "translation": "유니스 은행의 안내 책자에 제공되는 추가 정보는 신청자가 대출 조건을 이해하는 데 도움이 된다.",
                "explanation": "해설 안내 책자에 제공되는 정보의 특성을 나타내는 형용사가 들어가야 한다. 신청자가 대출 조건을 이해하는 데 도움이 되는(helps applicants understand the terms of their loans) 정보여야 하므로 '추가의, 보충의'라는 뜻의 (B) supplemental이 정답이다. (A) arbitrary는 '임의적인', (C) superfluous는 '불필요한', (D) potential은 '잠재적인'이라는 의미이다."
            }
        ]
    },
    {
        "testId": 2,
        "title": "Part 5 Real Test 2",
        "questions": [
            {
                "id": "q101",
                "text": "Before operating your handheld device, please _____ the enclosed cable to charge it.",
                "options": [
                    {
                        "label": "A",
                        "text": "plan"
                    },
                    {
                        "label": "B",
                        "text": "remain"
                    },
                    {
                        "label": "C",
                        "text": "use"
                    },
                    {
                        "label": "D",
                        "text": "finish"
                    }
                ],
                "classification": "V_VERB",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "휴대용 장치를 작동하기 전에 동봉된 케이블을 사용하여 충전하십시오.",
                "explanation": "빈칸은 주어가 없는 명령문에서 the enclosed cable을 목적어로 취하는 타동사 자리로, 그것(=your handheld device)을 충전하기 위해 '동봉된 케이블을 사용하라'는 내용이 되어야 하므로 '사용하다'라는 의미의 동사 (C) use가 정답이다. (A) plan은 '계획하다', (D) finish는 '끝내다'라는 의미로 문맥상 어울리지 않고, (B) remain은 '~인 채로 있다'라는 의미의 자동사로 목적어를 취하지 않는다."
            },
            {
                "id": "q102",
                "text": "Safile's new external hard drive can _____ store up to one terabyte of data.",
                "options": [
                    {
                        "label": "A",
                        "text": "secure"
                    },
                    {
                        "label": "B",
                        "text": "security"
                    },
                    {
                        "label": "C",
                        "text": "securely"
                    },
                    {
                        "label": "D",
                        "text": "secured"
                    }
                ],
                "classification": "G_ADV",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "사파일의 새로운 외장 하드 드라이브는 최대 1테라바이트의 데이터를 안전하게 저장할 수 있다.",
                "explanation": "조동사 can과 동사원형 store 사이에서 동사를 수식하는 부사 자리이므로, '안전하게'라는 의미의 부사 (C) securely가 정답이다. (A) secure는 형용사/동사, (B) security는 명사, (D) secured는 과거분사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q103",
                "text": "Mr. Peterson will travel _____ the Tokyo office for the annual meeting.",
                "options": [
                    {
                        "label": "A",
                        "text": "to"
                    },
                    {
                        "label": "B",
                        "text": "through"
                    },
                    {
                        "label": "C",
                        "text": "in"
                    },
                    {
                        "label": "D",
                        "text": "over"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "피터슨 씨는 연례 회의를 위해 도쿄 사무소로 출장을 갈 예정이다.",
                "explanation": "빈칸 앞에 이동을 의미하는 동사 travel이, 뒤에 장소를 나타내는 명사 the Tokyo office가 있다. '도쿄 사무소로 출장을 간다'는 내용이 되어야 적절하므로, 이동 방향을 나타내어 '~로[에]'를 뜻하는 전치사 (A) to가 정답이다."
            },
            {
                "id": "q104",
                "text": "Yong-Soo Cosmetics will not charge for items on back order until _____ have left our warehouse.",
                "options": [
                    {
                        "label": "A",
                        "text": "them"
                    },
                    {
                        "label": "B",
                        "text": "they"
                    },
                    {
                        "label": "C",
                        "text": "themselves"
                    },
                    {
                        "label": "D",
                        "text": "their"
                    }
                ],
                "classification": "G_POS",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "용수 화장품은 이월 주문품에 대해 상품이 창고에서 출고될 때까지 대금을 청구하지 않을 것입니다.",
                "explanation": "빈칸은 접속사 until이 이끄는 부사절에서 동사 have left의 주어 역할을 하는 자리이므로, 주격 대명사인 (B) they가 정답이다. (A) them과 (C) themselves는 목적어 역할을 하고, (D) their는 소유격으로 뒤에 명사가 있어야 하므로 답이 되지 않는다."
            },
            {
                "id": "q105",
                "text": "Our premium day tour takes visitors to historic sites _____ the Aprico River.",
                "options": [
                    {
                        "label": "A",
                        "text": "onto"
                    },
                    {
                        "label": "B",
                        "text": "since"
                    },
                    {
                        "label": "C",
                        "text": "inside"
                    },
                    {
                        "label": "D",
                        "text": "along"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "자사의 프리미엄 데이 투어는 방문객들을 아프리코 강변을 따라 있는 유적지로 안내합니다.",
                "explanation": "빈칸 뒤 명사구 the Aprico River와 함께 historic sites를 수식하는 적절한 전치사를 고르는 문제이다. '아프리코 강변을 따라 있는 유적지'라는 문맥이므로 '~을 따라'라는 의미의 전치사 (D) along이 정답이다. (A) onto는 '~ (위)로', (B) since는 '~ 이후로', (C) inside는 '~ 안에'라는 의미로 문맥상 부적절하다."
            },
            {
                "id": "q106",
                "text": "Eighty percent of drivers surveyed said they would consider buying a vehicle that runs on _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "electricity"
                    },
                    {
                        "label": "B",
                        "text": "electrically"
                    },
                    {
                        "label": "C",
                        "text": "electricians"
                    },
                    {
                        "label": "D",
                        "text": "electrify"
                    }
                ],
                "classification": "G_POS",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "설문에 응한 운전자의 80퍼센트가 전기로 움직이는 차량 구입을 고려하겠다고 말했다.",
                "explanation": "빈칸은 수단을 나타내는 전치사 on의 목적어 자리이므로 명사가 들어가야 한다. 명사 보기인 (A) electricity(전기)와 (C) electricians (전기 기사) 중에서 자동차를 움직이게 하는 동력이 될 수 있는 단어가 필요하므로 (A) electricity가 정답이다. (B) electrically는 부사, (D) electrify는 동사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q107",
                "text": "Xinzhe Zu has _____ Petrin Engineering as the vice president of operations.",
                "options": [
                    {
                        "label": "A",
                        "text": "attached"
                    },
                    {
                        "label": "B",
                        "text": "resigned"
                    },
                    {
                        "label": "C",
                        "text": "joined"
                    },
                    {
                        "label": "D",
                        "text": "combined"
                    }
                ],
                "classification": "V_VERB",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "신저 주는 페트린 엔지니어링에 운영 부사장으로 입사했다.",
                "explanation": "Petrin Engineering을 목적어로 취하는 타동사 자리로, 빈칸 앞 조동사 has와 함께 '부사장으로 회사에 입사했다'는 내용이 되어야 자연스러우므로 동사 join (입사[가입]하다)의 과거분사형 (C) joined가 정답이다. (A)의 attach는 '첨부하다', (B)의 resign은 '(직·지위를) 사직하다', (D) combine은 '결합하다'라는 의미이다."
            },
            {
                "id": "q108",
                "text": "Next month, Barder House Books will be holding _____ third author's hour in Cleveland.",
                "options": [
                    {
                        "label": "A",
                        "text": "it"
                    },
                    {
                        "label": "B",
                        "text": "itself"
                    },
                    {
                        "label": "C",
                        "text": "its own"
                    },
                    {
                        "label": "D",
                        "text": "its"
                    }
                ],
                "classification": "G_POS",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "다음 달에 바더 하우스 북스는 클리블랜드에서 세 번째 작가의 시간을 주최할 예정이다.",
                "explanation": "명사구 third author's hour를 한정 수식하는 자리이다. 앞에서 명사구를 수식할 수 있는 인칭대명사는 소유격이고, 문맥상 '그것(=Barder House Books)의 세 번째 작가의 시간'이 적절하므로 (D) its가 정답이다. (C) its own에서 own은 소유격 뒤에서 소유 관계를 강조하는 형용사이므로 문맥상 답이 되기에 부적절하다."
            },
            {
                "id": "q109",
                "text": "Chester's Tiles _____ expanded to a second location in Turnington.",
                "options": [
                    {
                        "label": "A",
                        "text": "severely"
                    },
                    {
                        "label": "B",
                        "text": "usually"
                    },
                    {
                        "label": "C",
                        "text": "recently"
                    },
                    {
                        "label": "D",
                        "text": "exactly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "체스터스 타일스는 최근 터닝턴에 두 번째 지점으로 확장했다.",
                "explanation": "동사 expanded를 수식하여 '최근 두 번째 지점으로 확장했다'는 내용이 되어야 자연스러우므로 '최근에'를 뜻하는 (C) recently가 정답이다. (A) severely는 '혹독하게', (B) usually는 '보통', (D) exactly는 '정확하게'의 의미이다."
            },
            {
                "id": "q110",
                "text": "Tabrino's has _____ increased the number of almonds in the Nut Medley snack pack.",
                "options": [
                    {
                        "label": "A",
                        "text": "significant"
                    },
                    {
                        "label": "B",
                        "text": "significance"
                    },
                    {
                        "label": "C",
                        "text": "signifies"
                    },
                    {
                        "label": "D",
                        "text": "significantly"
                    }
                ],
                "classification": "G_ADV",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "타브리노스는 넛 메들리 스낵팩의 아몬드 수를 크게 늘렸다.",
                "explanation": "빈칸은 동사구 has increased를 수식하는 부사 자리이므로 '크게, 상당히'를 의미하는 (D) significantly가 정답이다. (A) significant는 형용사, (B) significance는 명사, (C) signifies는 동사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q111",
                "text": "_____ she travels, Jacintha Flores collects samples of local fabrics and patterns.",
                "options": [
                    {
                        "label": "A",
                        "text": "Wherever"
                    },
                    {
                        "label": "B",
                        "text": "In addition to"
                    },
                    {
                        "label": "C",
                        "text": "Either"
                    },
                    {
                        "label": "D",
                        "text": "In contrast to"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "저신다 플로레스는 여행하는 곳 어디에서나 현지 직물과 패턴 견본을 수집한다.",
                "explanation": "빈칸 뒤에 주어 she와 동사 travels를 갖춘 완전한 절이 왔으므로 부사절 접속사가 들어가야 한다. 따라서 '어디에서나, 어디든지'를 뜻하는 부사절 접속사 (A) Wherever가 정답이다. (B) In addition to와 (D) In contrast to는 전치사로 뒤에 명사(구)가 나와야 하고, (C) Either는 or와 함께 쓰이는 상관접속사로 답이 되지 않는다."
            },
            {
                "id": "q112",
                "text": "Most picture _____ at Glowing Photo Lab go on sale at 3:00 P.M. today.",
                "options": [
                    {
                        "label": "A",
                        "text": "framer"
                    },
                    {
                        "label": "B",
                        "text": "framing"
                    },
                    {
                        "label": "C",
                        "text": "framed"
                    },
                    {
                        "label": "D",
                        "text": "frames"
                    }
                ],
                "classification": "G_VERB",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "글로잉 포토 랩의 사진 액자 대부분이 오늘 오후 3시에 할인 판매된다.",
                "explanation": "문장의 동사가 복수동사 go이므로, 빈칸에는 picture와 복합명사를 이루어 주어 역할을 하는 복수명사가 들어가야 한다. 따라서 정답은 '액자, 틀'을 뜻하는 복수명사인 (D) frames이다. (A) framer(액자 세공사)와 (B) framing(구성)은 단수명사, (C) framed는 동사/과거분사이므로 답이 될 수 없다."
            },
            {
                "id": "q113",
                "text": "All students in the business management class hold _____ college degrees.",
                "options": [
                    {
                        "label": "A",
                        "text": "late"
                    },
                    {
                        "label": "B",
                        "text": "developed"
                    },
                    {
                        "label": "C",
                        "text": "advanced"
                    },
                    {
                        "label": "D",
                        "text": "elated"
                    }
                ],
                "classification": "G_ADJ",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "경영학 수업의 학생들은 모두 고급 대학 학위를 소지하고 있다.",
                "explanation": "경영학 수업 학생들의 학위(college degrees) 수준을 나타내는 형용사가 필요하다. 따라서 일반 학사보다 높은 석박사 등의 고급 학위를 나타내도록 '고급의, 상급의'라는 뜻의 형용사 (C) advanced가 정답이다. (A) late는 '늦은', (B) developed는 '발달한', (D) elated는 '의기양양한'이라는 의미로 문맥상 어울리지 않는다."
            },
            {
                "id": "q114",
                "text": "We hired Noah Wan of Shengyao Accounting Ltd. _____ our company's financial assets.",
                "options": [
                    {
                        "label": "A",
                        "text": "to evaluate"
                    },
                    {
                        "label": "B",
                        "text": "to be evaluated"
                    },
                    {
                        "label": "C",
                        "text": "will be evaluated"
                    },
                    {
                        "label": "D",
                        "text": "evaluate"
                    }
                ],
                "classification": "G_VERB",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "우리는 우리 회사의 금융 자산을 평가하기 위해 성야오 회계법인의 노아 완을 고용했다.",
                "explanation": "빈칸 앞에 완전한 절(We hired Noah Wan of Shengyao Accounting Ltd.)이 있고 뒤에 명사구가 있으므로, 빈칸에는 뒤에 나온 명사구 our company's financial assets를 목적어로 취하면서 앞에 나온 완전한 절을 수식할 수 있는 준동사가 들어가야 한다. 따라서 능동형 to부정사 (A) to evaluate가 정답이다. 수동형 (B) to be evaluated는 목적어를 취할 수 없고, (C) will be evaluated와 (D) evaluate는 동사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q115",
                "text": "Ms. Charisse is taking on a new account _____ she finishes the Morrison project.",
                "options": [
                    {
                        "label": "A",
                        "text": "with"
                    },
                    {
                        "label": "B",
                        "text": "going"
                    },
                    {
                        "label": "C",
                        "text": "after"
                    },
                    {
                        "label": "D",
                        "text": "between"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "차리스 씨는 모리슨 프로젝트를 마무리한 뒤 새로운 고객을 맡을 예정이다.",
                "explanation": "빈칸은 두 개의 완전한 절을 이어주는 접속사 자리이다. 따라서 보기 중에 유일한 접속사로 '~한 뒤에'라는 의미를 나타내는 (C) after가 정답이다. (A) with와 (D) between은 전치사, (B) going은 현재분사이므로 절을 연결할 수 없다."
            },
            {
                "id": "q116",
                "text": "Cormet Motors' profits are _____ this year than last year.",
                "options": [
                    {
                        "label": "A",
                        "text": "higher"
                    },
                    {
                        "label": "B",
                        "text": "high"
                    },
                    {
                        "label": "C",
                        "text": "highly"
                    },
                    {
                        "label": "D",
                        "text": "highest"
                    }
                ],
                "classification": "G_ADJ",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "올해 코멧 모터스의 수익은 작년보다 높다.",
                "explanation": "빈칸은 주어 Cormet Motors' profits를 보충 설명하는 주격 보어 자리이고, 뒤에 than과 함께 this year와 last year가 비교되고 있으므로 비교급 형용사 (A) higher가 정답이다. (B) high는 원급 형용사, (C) highly는 부사, (D) highest는 최상급 형용사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q117",
                "text": "In its _____ advertising campaign, Jaymor Tools demonstrates how reliable its products are.",
                "options": [
                    {
                        "label": "A",
                        "text": "current"
                    },
                    {
                        "label": "B",
                        "text": "relative"
                    },
                    {
                        "label": "C",
                        "text": "spacious"
                    },
                    {
                        "label": "D",
                        "text": "collected"
                    }
                ],
                "classification": "G_ADJ",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "현재 광고 캠페인에서 제이머 툴스는 자사 제품이 얼마나 믿을 만한지를 보여 준다.",
                "explanation": "빈칸 뒤의 명사구 advertising campaign을 수식하기에 적절한 형용사를 고르는 문제이다, 빈칸 뒤 절에서 현재 시제로 광고 내용을 설명하고 있으므로 '현재 (진행 중인) 광고 캠페인에서'라는 의미가 되어야 가장 적절하므로, '현재의'라는 뜻의 형용사 (A) current가 정답이다. (B) relative는 '상대적인', (C) spacious는 '널찍한', (D) collected는 '수집된'이라는 의미이다."
            },
            {
                "id": "q118",
                "text": "Remember to submit receipts for reimbursement _____ returning from a business trip.",
                "options": [
                    {
                        "label": "A",
                        "text": "such as"
                    },
                    {
                        "label": "B",
                        "text": "when"
                    },
                    {
                        "label": "C",
                        "text": "then"
                    },
                    {
                        "label": "D",
                        "text": "within"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "출장에서 돌아오면 환급을 위해 잊지 말고 영수증을 제출하십시오.",
                "explanation": "빈칸 앞에 동사 Remember와 목적어 to submit receipts for reimbursement를 갖춘 명령문 형태의 완전한 절이 있으므로, returning from a business trip은 분사구문 또는 동명사구로 볼 수 있다. 문맥상 '출장에서 돌아오면 영수증을 제출하라'는 내용이 적절하므로 분사구문을 이끄는 부사절 접속사 (B) when(~하면, ~할 때)이 정답이다. returning을 동명사로 볼 경우, 전치사도 빈칸에 들어갈 수 있지만 (A) such as(~와 같은)와 (D) within(~ 이내에)은 문맥상 적절하지 않다. 부사 (C) then(그리고 나서) 또한 분사 returning을 수식하기에 적절하지 않다."
            },
            {
                "id": "q119",
                "text": "Patrons will be able to access Westside Library's _____ acquired collection of books on Tuesday.",
                "options": [
                    {
                        "label": "A",
                        "text": "instantly"
                    },
                    {
                        "label": "B",
                        "text": "newly"
                    },
                    {
                        "label": "C",
                        "text": "early"
                    },
                    {
                        "label": "D",
                        "text": "naturally"
                    }
                ],
                "classification": "G_ADV",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "이용객들은 화요일에 웨스트사이드 도서관에 새로 입수된 장서를 이용할 수 있을 것입니다.",
                "explanation": "빈칸 뒤 형용사 acquired를 수식하기에 적절한 부사를 고르는 문제이다. 앞으로 이용할 수 있게 될 도서관 장서에 관한 내용이므로 '새로 입수된 도서'라는 의미가 되어야 적절하다. 따라서 '새로, 최근에'라는 뜻의 (B) newly가 정답이다. (A) instantly는 '즉시', (C) early는 '일찍', (D) naturally는 '자연스럽게'라는 의미로 문맥상 적절하지 않다."
            },
            {
                "id": "q120",
                "text": "Please _____ any questions about time sheets to Tabitha Jones in the payroll department.",
                "options": [
                    {
                        "label": "A",
                        "text": "direction"
                    },
                    {
                        "label": "B",
                        "text": "directive"
                    },
                    {
                        "label": "C",
                        "text": "directed"
                    },
                    {
                        "label": "D",
                        "text": "direct"
                    }
                ],
                "classification": "G_VERB",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "근무 시간 기록표에 관한 모든 질문은 급여 지급 부서의 타비사 존스에게 보내 주십시오.",
                "explanation": "주어가 생략된 채 Please로 시작하는 명령문에서 동사가 보이지 않으므로 빈칸은 동사 자리이다. 따라서 동사원형 (D) direct(보내다)가 정답이다. 과거형 (C) directed는 명령문의 동사로 쓰일 수 없다."
            },
            {
                "id": "q121",
                "text": "Before signing a delivery _____, be sure to double-check that all the items ordered are in the shipment.",
                "options": [
                    {
                        "label": "A",
                        "text": "decision"
                    },
                    {
                        "label": "B",
                        "text": "announcement"
                    },
                    {
                        "label": "C",
                        "text": "receipt"
                    },
                    {
                        "label": "D",
                        "text": "limit"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "배송 영수증에 서명하기 전에, 주문한 모든 상품이 배송품에 포함되어 있는지 다시 확인해 주십시오.",
                "explanation": "동명사 signing의 목적어 역할을 하는 명사 자리로, 서명할(sign) 수 있는 대상인 동시에 빈칸 앞의 명사 delivery와 함께 자연스러운 복합명사를 만들 수 있어야 한다. '배송 영수증에 서명하기 전에 배송품을 다시 확인하라'는 내용이 적절하므로 '영수증'을 뜻하는 (C) receipt가 정답이다. (A) decision은 '결정', (B) announcement는 '발표, 고지', (D) limit는 '제한'의 의미이다."
            },
            {
                "id": "q122",
                "text": "Funds have been added to the budget for expenses _____ with the new building.",
                "options": [
                    {
                        "label": "A",
                        "text": "associated"
                    },
                    {
                        "label": "B",
                        "text": "association"
                    },
                    {
                        "label": "C",
                        "text": "associate"
                    },
                    {
                        "label": "D",
                        "text": "associates"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "신축 건물과 관련된 비용을 위해 자금이 예산에 추가되었다.",
                "explanation": "빈칸 앞에 완전한 절(Funds have been added for expenses)이 있으므로 빈칸에는 전치사구 with the new building과 함께 명사 expenses를 수식하는 말이 들어가야 한다. 비용은 신축 건물과 관련된 것이므로, 전치사 with와 함께 쓰여 '~와 관련된'이라는 수동의 의미를 나타내는 과거분사 (A) associated가 정답이다. '협회, 제휴'를 뜻하는 명사 (B) association은 빈칸 앞의 expenses와 복합명사를 이루기에 적절하지 않고, 문장에 이미 동사 have been added가 있으므로 동사 (C) associate와 (D) associates도 답이 되지 않는다. 참고로, associate는 형용사(제휴한)와 명사(동료)로도 쓰인다."
            },
            {
                "id": "q123",
                "text": "Ms. Bernard _____ that a deadline was approaching, so she requested some assistance.",
                "options": [
                    {
                        "label": "A",
                        "text": "noticed"
                    },
                    {
                        "label": "B",
                        "text": "obscured"
                    },
                    {
                        "label": "C",
                        "text": "withdrew"
                    },
                    {
                        "label": "D",
                        "text": "appeared"
                    }
                ],
                "classification": "V_VERB",
                "testId": 2,
                "correctAnswer": "A",
                "translation": "버나드 씨는 마감일이 다가오고 있다는 것을 알고서 지원을 요청했다.",
                "explanation": "빈칸 뒤 that절을 목적어로 취하는 동사 자리로, '마감일이 다가오고 있다는 것을 알았다'는 의미가 되어야 뒤에 이어지는 '그래서 도움을 요청했다'는 내용과 자연스럽게 연결된다. 따라서 동사 notice(알아차리다, 인지하다)의 과거형 (A) noticed가 정답이다. (B)의 obscure는 '모호하게 하다', (C)의 withdraw는 '철회하다', (D)의 appear는 '나타나다'라는 의미이다."
            },
            {
                "id": "q124",
                "text": "Mr. Moscowitz is _____ that Dr. Tanaka will agree to present the keynote speech at this year's conference.",
                "options": [
                    {
                        "label": "A",
                        "text": "hopes"
                    },
                    {
                        "label": "B",
                        "text": "hoped"
                    },
                    {
                        "label": "C",
                        "text": "hopeful"
                    },
                    {
                        "label": "D",
                        "text": "hopefully"
                    }
                ],
                "classification": "G_ADJ",
                "testId": 2,
                "correctAnswer": "C",
                "translation": "모스코비츠 씨는 타나카 박사가 올해 콘퍼런스에서 기조연설을 하는 데에 동의할 것으로 기대하고 있다.",
                "explanation": "빈칸은 be동사의 보어 자리로, 빈칸 뒤에 온 that절과 함께 쓸 수 있는 형용사가 와야 한다. 따라서 'that절의 내용을 기대한다'는 의미를 나타내는 형용사 (C) hopeful(기대하는)이 정답이다. (A) hopes는 동사, (D) hopefully는 부사이므로 품사상 빈칸에 들어갈 수 없다. 과거분사 (B) hoped는 be동사 뒤에 들어가면 수동태가 되므로 that절을 연결할 수 없고, 의미상으로도 적절하지 않다."
            },
            {
                "id": "q125",
                "text": "Two Australian companies are developing new smartphones, but it is unclear _____ phone will become available first.",
                "options": [
                    {
                        "label": "A",
                        "text": "if"
                    },
                    {
                        "label": "B",
                        "text": "which"
                    },
                    {
                        "label": "C",
                        "text": "before"
                    },
                    {
                        "label": "D",
                        "text": "because"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "오스트레일리아의 두 회사가 새로운 스마트폰을 개발하고 있지만, 어느 스마트폰이 먼저 출시될지는 불확실하다.",
                "explanation": "빈칸에는 가주어 it의 진주어 역할을 하는 명사절을 이끌 수 있는 단어가 들어가야 한다. 빈칸 뒤의 명사 phone을 수식하면서 명사절을 이끌어 '어느 스마트폰이 먼저 출시될지'라는 의미를 나타내는 의문형용사 (B) which가 정답이다. (A) if도 명사절 접속사로서 진주어 자리에 쓰일 수 있지만 명사 phone을 수식할 수 없으며, (C) before와 (D) because는 부사절 접속사이므로 답이 될 수 없다."
            },
            {
                "id": "q126",
                "text": "Corners Gym offers its members a free lesson in how to use _____ properly.",
                "options": [
                    {
                        "label": "A",
                        "text": "weighs"
                    },
                    {
                        "label": "B",
                        "text": "weights"
                    },
                    {
                        "label": "C",
                        "text": "weighty"
                    },
                    {
                        "label": "D",
                        "text": "weighed"
                    }
                ],
                "classification": "V_VERB",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "코너스 짐은 회원들에게 웨이트를 제대로 사용하는 법에 대한 무료 수업을 제공한다.",
                "explanation": "전치사 in의 목적어 역할을 하는 「how+to부정사」구문으로, 빈칸은 to부정사 to use의 목적어 역할을 하는 명사 자리이다. 따라서 '웨이트, 역기'를 뜻하는 명사 (B) weights가 정답이다. (A) weighs는 동사, (C) weighty는 형용사, (D) weighed는 동사/과거분사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q127",
                "text": "_____ the rules, overnight parking is not permitted at the clubhouse facility.",
                "options": [
                    {
                        "label": "A",
                        "text": "Prior to"
                    },
                    {
                        "label": "B",
                        "text": "Except for"
                    },
                    {
                        "label": "C",
                        "text": "Instead of"
                    },
                    {
                        "label": "D",
                        "text": "According to"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "규정에 따라 클럽하우스 시설에서는 야간 주차가 허용되지 않습니다.",
                "explanation": "뒤의 명사 the rules를 목적어로 취해 '규정에 따라 야간 주차가 허용되지 않는다'는 의미가 되어야 자연스러우므로 '~에 따라'를 뜻하는 (D) According to가 정답이다. (A) Prior to는 '~에 앞서', (B) Except for는 '~을 제외하고', (C) Instead of는 '~ 대신에'라는 의미이다."
            },
            {
                "id": "q128",
                "text": "Once everyone _____, we can begin the conference call.",
                "options": [
                    {
                        "label": "A",
                        "text": "arrived"
                    },
                    {
                        "label": "B",
                        "text": "is arriving"
                    },
                    {
                        "label": "C",
                        "text": "to arrive"
                    },
                    {
                        "label": "D",
                        "text": "has arrived"
                    }
                ],
                "classification": "G_VERB",
                "testId": 2,
                "correctAnswer": "D",
                "translation": "모두 도착하면 전화 회의를 시작할 수 있습니다.",
                "explanation": "Once가 이끄는 부사절의 주어 everyone 뒤에 동사가 없으므로 빈칸은 동사 자리이다. 주절에서 전화 회의를 시작할 수 있다(can begin)는 것으로 보아 미래의 일이고, 회의를 시작하는 미래의 특정 시점까지 완료될 일을 나타내야 하므로 미래완료 시제 will have arrived가 들어가야 하지만, Once가 '~하자마자, 일단 ~하면'이라는 뜻으로 시간 부사절을 이끌고 있으므로 미래완료 대신 현재완료 시제를 쓴다. 따라서 (D) has arrived가 정답이다. (B) is arriving도 시간 부사절에서 미래를 나타낼 수 있지만 완료의 의미가 아니므로 오답이다."
            },
            {
                "id": "q129",
                "text": "Each summer a motivational video that highlights the past year's _____ is shown to all company employees.",
                "options": [
                    {
                        "label": "A",
                        "text": "preferences"
                    },
                    {
                        "label": "B",
                        "text": "accomplishments"
                    },
                    {
                        "label": "C",
                        "text": "communications"
                    },
                    {
                        "label": "D",
                        "text": "uncertainties"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "매년 여름 지난 한 해의 성과를 강조하는 동기부여 영상이 회사의 전 직원에게 공개된다.",
                "explanation": "빈칸은 주어 a motivational video와 동사 is shown 사이에서 주어를 수식하는 관계사절의 동사 highlights의 목적어 자리이다. 동기부여 영상을 수식하는 내용이 되어야 하므로 '지난해의 성과를 강조한다'는 의미가 되어야 적절하다. 따라서 '성과, 업적'을 뜻하는 (B) accomplishments가 정답이다. (A)의 preference는 '선호(도)', (C)의 communication은 '의사소통', (D)의 uncertainty는 '불확실성'이라는 의미이다."
            },
            {
                "id": "q130",
                "text": "Employees who wish to attend the retirement dinner _____ Ms. Howell's 30 years of service should contact Mr. Lee.",
                "options": [
                    {
                        "label": "A",
                        "text": "honor"
                    },
                    {
                        "label": "B",
                        "text": "to honor"
                    },
                    {
                        "label": "C",
                        "text": "will honor"
                    },
                    {
                        "label": "D",
                        "text": "will be honored"
                    }
                ],
                "classification": "V_VERB",
                "testId": 2,
                "correctAnswer": "B",
                "translation": "하월 씨의 30년 근무를 기념하는 퇴직 만찬에 참석을 희망하는 직원은 이 씨에게 연락해 주시기 바랍니다.",
                "explanation": "주어 Employees와 동사 should contact 사이에서 주어를 수식하는 관계사절에 빈칸이 있다. 빈칸 앞에 완전한 절(who wish to attend the retirement dinner)이 있고 뒤에 명사구(Ms. Howell's 30 years of service)가 있으므로 빈칸에는 또 다른 동사가 들어갈 수 없다. 따라서 Ms. Howell's 30 years of service를 목적어로 취하면서 the retirement dinner를 수식하는 형용사적 역할의 to부정사 (B) to honor가 정답이다."
            }
        ]
    },
    {
        "testId": 3,
        "title": "Part 5 Real Test 3",
        "questions": [
            {
                "id": "q101",
                "text": "_____your order is being processed, please call customer service with any questions.",
                "options": [
                    {
                        "label": "A",
                        "text": "Still"
                    },
                    {
                        "label": "B",
                        "text": "Either"
                    },
                    {
                        "label": "C",
                        "text": "While"
                    },
                    {
                        "label": "D",
                        "text": "Also"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "주문이 처리되는 동안 문의사항이 있으면 고객 서비스로 전화 주십시오.",
                "explanation": "주어(your order)와 동사(is being processed)를 갖춘 완전한 절을 콤마 뒤 주절에 연결하는 자리이므로, 빈칸에는 부사절 접속사가 들어가야 한다. 따라서 '~하는 동안'이라는 의미의 접속사 (C) While이 정답이다. (A) Still, (D) Also는 부사, (B) Either는 or와 함께 쓰이는 상관접속사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q102",
                "text": "ABC Truck Supplies has the _____ selection of mufflers in the state.",
                "options": [
                    {
                        "label": "A",
                        "text": "natural"
                    },
                    {
                        "label": "B",
                        "text": "widest"
                    },
                    {
                        "label": "C",
                        "text": "overall"
                    },
                    {
                        "label": "D",
                        "text": "positive"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 3,
                "correctAnswer": "B",
                "translation": "ABC 트럭 서플라이즈는 주 전역에서 가장 다양한 소음기를 보유하고 있다.",
                "explanation": "'다양한, 엄선된'이라는 의미의 a selection of는 형용사 wide와 함께 '매우 다양한'의 뜻으로 자주 쓰인다. 따라서 빈칸 앞 정관사 the와 함께 wide의 최상급으로 '가장 다양한 소음기'라는 의미가 자연스러운 (B) widest가 정답이다. (A) natural은 '자연의', (C) overall은 '전반적인', (D) positive는 '긍정적인'이라는 의미로 문맥상 적절하지 않다."
            },
            {
                "id": "q103",
                "text": "Sharswood Landscaping has received dozens of five-star _____ for its work.",
                "options": [
                    {
                        "label": "A",
                        "text": "reviews"
                    },
                    {
                        "label": "B",
                        "text": "reviewer"
                    },
                    {
                        "label": "C",
                        "text": "reviewed"
                    },
                    {
                        "label": "D",
                        "text": "reviewing"
                    }
                ],
                "classification": "G_POS",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "샤스우드 조경은 작업에 대해 별 다섯 개짜리 평가 수십 개를 받았다.",
                "explanation": "전치사 of의 목적어 자리로 형용사 five-star(별 다섯 개짜리의)의 수식을 받아 '별 다섯 개짜리 평가'라는 의미가 되어야 하므로 '후기, 평가'라는 뜻의 명사 (A) reviews가 정답이다. 참고로, 빈칸 앞 dozens of는 '수십 개의'라는 의미로 뒤에 복수명사를 수식하기 때문에 명사 (B) reviewer(비평가, 검열자)는 문맥상 어울리지 않을 뿐 아니라 dozens of와 수 일치도 되지 않는다. (C) reviewed는 동사/과거분사, (D) reviewing은 동명사/현재분사로 구조상 빈칸에 적절하지 않다."
            },
            {
                "id": "q104",
                "text": "Dr. Cho will visit the Teledarr Lab during the annual open house, since _____ may not have another chance to see it.",
                "options": [
                    {
                        "label": "A",
                        "text": "hers"
                    },
                    {
                        "label": "B",
                        "text": "she"
                    },
                    {
                        "label": "C",
                        "text": "her"
                    },
                    {
                        "label": "D",
                        "text": "herself"
                    }
                ],
                "classification": "G_POS",
                "testId": 3,
                "correctAnswer": "B",
                "translation": "조 박사는 텔레데어 연구소를 볼 기회가 다시없을 수도 있기 때문에 일 년에 한번 있는 공개일 동안 연구소를 방문할 예정이다.",
                "explanation": "빈칸은 접속사 since가 이끄는 부사절의 주어 자리이므로 주격 인칭대명사 (B) she가 정답이다. 소유대명사인 (A) hers도 주어 자리에 들어갈 수 있지만, '그녀의 것'이라는 뜻으로 문맥상 적절하지 않고, (C) her는 목적격/소유격, (D) herself는 재귀대명사로 주어 자리에 들어갈 수 없으므로 오답이다."
            },
            {
                "id": "q105",
                "text": "Dorn Department Store decided to _____ its already large selection of housewares.",
                "options": [
                    {
                        "label": "A",
                        "text": "create"
                    },
                    {
                        "label": "B",
                        "text": "enforce"
                    },
                    {
                        "label": "C",
                        "text": "apply"
                    },
                    {
                        "label": "D",
                        "text": "expand"
                    }
                ],
                "classification": "V_VERB",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "돈 백화점은 이미 다양한 가정용품을 확대하기로 결정했다.",
                "explanation": "동사 decided의 목적어 역할을 하는 to부정사에 들어갈 적절한 동사 어휘를 고르는 문제이다. 문맥상 '이미 다양한 제품군을 확대하기로 결정했다'라는 내용이 되어야 적절하므로 '확대하다, 확장하다'라는 뜻의 (D) expand가 정답이다. (A) create는 '만들다', (B) enforce는 '시행하다', (C) apply는 '적용하다'라는 의미이다."
            },
            {
                "id": "q106",
                "text": "We _____ that you bring a portfolio of work samples to the interview.",
                "options": [
                    {
                        "label": "A",
                        "text": "was asking"
                    },
                    {
                        "label": "B",
                        "text": "having asked"
                    },
                    {
                        "label": "C",
                        "text": "ask"
                    },
                    {
                        "label": "D",
                        "text": "asks"
                    }
                ],
                "classification": "G_VERB",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "면접에 작업 샘플 포트폴리오를 지참해 주시기 바랍니다.",
                "explanation": "We가 주어, 빈칸 뒤 that절이 목적어인 문장에 동사가 필요하므로 빈칸은 동사 자리이다. 복수주어 We와 수 일치하는 복수동사가 와야 하므로 (C) ask가 정답이다. (A) was asking과 (D) asks는 3인칭 단수동사로 We와 수 일치되지 않고, (B) having asked는 동명사/현재분사로 문장의 동사 역할을 할 수 없다."
            },
            {
                "id": "q107",
                "text": "Members of the Bold Stone Farm Store receive _____ discounts on all purchases.",
                "options": [
                    {
                        "label": "A",
                        "text": "depth"
                    },
                    {
                        "label": "B",
                        "text": "deepen"
                    },
                    {
                        "label": "C",
                        "text": "deep"
                    },
                    {
                        "label": "D",
                        "text": "deeply"
                    }
                ],
                "classification": "G_POS",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "볼드스톤팜 스토어 회원은 모든 구매에 대해 큰 할인을 받는다.",
                "explanation": "빈칸은 동사 receive의 목적어 역할을 하는 명사 discounts를 수식하는 형용사 자리이다. 따라서 깊은'이라는 의미의 형용사 (C) deep이 정답이다. (A) depth는 명사, (B) deepen은 동사, (D) deeply는 부사이므로 답이 될 수 없다."
            },
            {
                "id": "q108",
                "text": "If your plans change, please contact us at least 24 hours before the time of your _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "reserved"
                    },
                    {
                        "label": "B",
                        "text": "reservation"
                    },
                    {
                        "label": "C",
                        "text": "reservable"
                    },
                    {
                        "label": "D",
                        "text": "reserve"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 3,
                "correctAnswer": "B",
                "translation": "계획이 변경될 경우, 적어도 예약 시간 24시간 전에 연락 주십시오.",
                "explanation": "전치사 of의 목적어 자리로, 소유격 뒤에는 명사가 와야 하고 '예약 시간 24시간 전에'라는 의미가 되어야 자연스럽다. 따라서 '예약'이라는 뜻의 명사 (B) reservation이 정답이다. (A) reserved는 동사/과거분사, (C) reservable은 형용사, (D) reserve는 동사이므로 빈칸에 들어갈 수 없다. 참고로 reserve는 명사로도 쓰이지만, '비축; 보호 구역'이라는 의미이므로 문맥에 어울리지 않는다."
            },
            {
                "id": "q109",
                "text": "Hold the tomato seedling gently by the stem in order to avoid harming _____ roots.",
                "options": [
                    {
                        "label": "A",
                        "text": "its"
                    },
                    {
                        "label": "B",
                        "text": "at"
                    },
                    {
                        "label": "C",
                        "text": "that"
                    },
                    {
                        "label": "D",
                        "text": "in"
                    }
                ],
                "classification": "G_POS",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "뿌리가 다치지 않게 토마토 묘목을 줄기 쪽으로 살며시 잡으세요.",
                "explanation": "빈칸은 동명사 harming의 목적어 역할을 하는 명사 roots를 수식하는 자리이다. 명사 앞에 쓰여 한정사 역할을 하고 문맥상으로도 '그것(the tomato seedling)의 뿌리'라는 내용이 적절하므로 소유격 인칭대명사 (A) its가 정답이다. (B) at과 (D) in은 전치사로 빈칸에 들어갈 수 없고, 지시형용사 (C) that은 복수명사와 쓸 수 없으므로 답이 되지 않는다."
            },
            {
                "id": "q110",
                "text": "At the registration table, be sure to collect your name tag _____ entering the conference.",
                "options": [
                    {
                        "label": "A",
                        "text": "very"
                    },
                    {
                        "label": "B",
                        "text": "often"
                    },
                    {
                        "label": "C",
                        "text": "always"
                    },
                    {
                        "label": "D",
                        "text": "before"
                    }
                ],
                "classification": "G_ADV",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "회의에 입장하기 전에 등록 테이블에서 반드시 이름표를 수령하세요.",
                "explanation": "빈칸은 뒤에 오는 entering the conference와 함께 앞에 있는 완전한 절(be sure to collect your name tag)을 수식하는 자리이다. entering과 함께 쓰여 '들어가기 전에'라는 의미를 나타내는 것이 적절하므로 (D) before가 정답이다. 부사인 (A) very, (B) often, (C) always 또한 구조상으로 가능해 보일 수 있으나, (A) very는 동사를 수식하지 않고, (B) often과 (C) always는 의미상 어색하므로 정답이 될 수 없다."
            },
            {
                "id": "q111",
                "text": "Maihama vehicles include an extended _____ to cover engine repairs.",
                "options": [
                    {
                        "label": "A",
                        "text": "record"
                    },
                    {
                        "label": "B",
                        "text": "operation"
                    },
                    {
                        "label": "C",
                        "text": "budget"
                    },
                    {
                        "label": "D",
                        "text": "warranty"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "마이하마 차량에는 엔진 수리를 보장하는 연장된 보증이 포함되어 있다.",
                "explanation": "문맥상 빈칸에 들어갈 명사는 마이하마 차량(Maihama vehicles)에 포함된 것으로, to부정사구 to cover engine repairs의 수식을 받아 '엔진 수리를 보장하는 보증'이라는 내용이 되어야 자연스럽다. 따라서 '보증'이라는 의미의 (D) warranty가 정답이다. (A) record는 '기록', (B) operation은 '작동; 운영', (C) budget은 '예산'이라는 의미로 문맥상 빈칸에 적절하지 않다."
            },
            {
                "id": "q112",
                "text": "The hotel's new Web site features an _____ collection of high-quality images.",
                "options": [
                    {
                        "label": "A",
                        "text": "absolute"
                    },
                    {
                        "label": "B",
                        "text": "efficient"
                    },
                    {
                        "label": "C",
                        "text": "impressive"
                    },
                    {
                        "label": "D",
                        "text": "undefeated"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "호텔의 새로운 웹사이트는 인상적인 고품질 이미지 컬렉션이 특징이다.",
                "explanation": "명사 collection을 수식하기에 적절한 형용사를 고르는 문제이다. collection이 고품질 이미지들로 구성되었다는 수식어구(of high-quality images)로 보아 문맥상 '고품질 이미지를 인상적으로 모아놓은 것'이라는 내용이 되어야 적절하므로 '인상적인'이라는 뜻의 (C) impressive가 정답이다. (A) absolute는 '절대적인', (B) efficient는 '효율적인', (D) undefeated는 '무패의'라는 의미이다."
            },
            {
                "id": "q113",
                "text": "On behalf of everyone at Uniontown Bank, we _____ thank you for your continued patronage.",
                "options": [
                    {
                        "label": "A",
                        "text": "deservedly"
                    },
                    {
                        "label": "B",
                        "text": "commonly"
                    },
                    {
                        "label": "C",
                        "text": "sincerely"
                    },
                    {
                        "label": "D",
                        "text": "perfectly"
                    }
                ],
                "classification": "G_ADV",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "유니언타운 은행의 모든 임직원을 대표하여, 귀하의 지속적인 이용에 진심으로 감사드립니다.",
                "explanation": "동사 thank를 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '지속적인 이용에 진심으로 감사드린다'는 내용이 되어야 자연스러우므로 '진심으로'라는 뜻의 (C) sincerely가 정답이다. (A) deservedly는 '마땅히', (B) commonly는 '흔히', (D) perfectly는 '완벽하게'라는 의미로 문맥상 어울리지 않는다."
            },
            {
                "id": "q114",
                "text": "Fragile equipment must be stored in a secure location so that nothing is _____ damaged.",
                "options": [
                    {
                        "label": "A",
                        "text": "accident"
                    },
                    {
                        "label": "B",
                        "text": "accidents"
                    },
                    {
                        "label": "C",
                        "text": "accidental"
                    },
                    {
                        "label": "D",
                        "text": "accidentally"
                    }
                ],
                "classification": "G_ADV",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "깨지기 쉬운 장비는 실수로 손상되지 않도록 안전한 장소에 보관되어야 한다.",
                "explanation": "빈칸은 be동사 is와 과거분사 damaged 사이에서 동사를 수식하는 부사 자리이다. 따라서 '우연히, 실수로'라는 뜻의 부사 (D) accidentally가 정답이다. (A) accident와 (B) accidents는 명사, (C) accidental은 형용사이므로 품사상 오답이다."
            },
            {
                "id": "q115",
                "text": "Ms. Sampson will not arrive at the convention _____ after our team's presentation.",
                "options": [
                    {
                        "label": "A",
                        "text": "until"
                    },
                    {
                        "label": "B",
                        "text": "lately"
                    },
                    {
                        "label": "C",
                        "text": "from"
                    },
                    {
                        "label": "D",
                        "text": "when"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "샘슨 씨는 우리 팀의 발표가 끝난 이후에야 컨벤션에 도착할 것이다.",
                "explanation": "문맥상 '우리 팀의 발표 이후에야 도착할 것이다', 즉 '우리 팀의 발표가 끝난 이후까지 도착하지 않을 것이다'라는 의미가 되어야 자연스럽다. 따라서 빈칸 뒤 after와 함께 '~ 이후까지'라는 의미를 나타내는 (A) until이 정답이다. until after(~ 이후까지), until before(~ 이전까지), from within(~ 안에서부터), from behind(~ 뒤에서부터) 등의 관용 표현을 알아 두자."
            },
            {
                "id": "q116",
                "text": "The community picnic will be held _____ the park behind the Seltzer Public Library.",
                "options": [
                    {
                        "label": "A",
                        "text": "in"
                    },
                    {
                        "label": "B",
                        "text": "all"
                    },
                    {
                        "label": "C",
                        "text": "for"
                    },
                    {
                        "label": "D",
                        "text": "here"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "지역 사회 피크닉은 셀처 공공 도서관 뒤에 있는 공원에서 열릴 예정이다.",
                "explanation": "명사구 the park를 목적어로 취하는 전치사 자리로, 보기에서 (A) in과 (C) for 중 하나를 선택해야 한다. the park가 장소를 나타내는 명사이고, 문맥상 '공원에서 열릴 것이다'라는 내용이 되어야 자연스러우므로 장소 명사와 함께 쓰여 '~에서'를 뜻하는 전치사 (A) in이 정답이다. (C) for(~을 위한)는 문맥상 어색하고, (B) all은 한정사/부사, (D) here는 부사이므로 빈칸에 적절하지 않다."
            },
            {
                "id": "q117",
                "text": "The new hires _____ for an orientation on May 10 at 9:00 Α.Μ.",
                "options": [
                    {
                        "label": "A",
                        "text": "to be gathering"
                    },
                    {
                        "label": "B",
                        "text": "will gather"
                    },
                    {
                        "label": "C",
                        "text": "gathering"
                    },
                    {
                        "label": "D",
                        "text": "to gather"
                    }
                ],
                "classification": "G_VERB",
                "testId": 3,
                "correctAnswer": "B",
                "translation": "신입 사원들은 5월 10일 오전 9시에 오리엔테이션을 위해 모일 예정이다.",
                "explanation": "빈칸은 주어 The new hires의 동사 자리이다. 따라서 문장에서 본동사 역할을 할 수 있는 (B) will gather가 정답이다. (A) to be gathering과 (D) to gather는 to부정사, (C) gathering은 명사/동명사/현재분사이므로 품사상 답이 될 수 없다."
            },
            {
                "id": "q118",
                "text": "When Mr. Young approached the desk, the receptionist _____ offered him a seat in the waiting room.",
                "options": [
                    {
                        "label": "A",
                        "text": "politely"
                    },
                    {
                        "label": "B",
                        "text": "polite"
                    },
                    {
                        "label": "C",
                        "text": "politeness"
                    },
                    {
                        "label": "D",
                        "text": "politest"
                    }
                ],
                "classification": "G_ADV",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "영 씨가 데스크로 다가가자 접수 담당자는 정중하게 대기실 자리를 권했다.",
                "explanation": "빈칸은 주어 the receptionist와 동사 offered 사이에서 동사를 수식하는 부사 자리이다. 따라서 '정중하게'를 뜻하는 부사 (A) politely가 정답이다. (B) polite는 형용사, (C) politeness는 명사, (D) politest는 형용사의 최상급이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q119",
                "text": "Members of the Marvale marketing team claimed that _____ was the best design for the new corporate logo.",
                "options": [
                    {
                        "label": "A",
                        "text": "they"
                    },
                    {
                        "label": "B",
                        "text": "them"
                    },
                    {
                        "label": "C",
                        "text": "theirs"
                    },
                    {
                        "label": "D",
                        "text": "their"
                    }
                ],
                "classification": "G_POS",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "마베일의 마케팅 팀원들은 그들의 것이 새로운 회사 로고를 위한 최고의 디자인이라고 주장했다.",
                "explanation": "빈칸은 주절의 동사 claimed의 목적어 역할을 하는 that절의 주어 자리이다. was는 단수동사이므로 복수주어인 (A) they는 답이 될 수 없고, 문맥상 '그들(Members of the Marvale marketing team)의 것'이라는 의미를 나타내는 소유대명사 (C) theirs가 정답이다."
            },
            {
                "id": "q120",
                "text": "The new Kitsuna video camera is currently on sale for $375, not _____ tax.",
                "options": [
                    {
                        "label": "A",
                        "text": "excepting"
                    },
                    {
                        "label": "B",
                        "text": "alongside"
                    },
                    {
                        "label": "C",
                        "text": "within"
                    },
                    {
                        "label": "D",
                        "text": "including"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "신형 키츠나 비디오카메라는 현재 세금을 포함하지 않고 375달러에 판매되고 있다.",
                "explanation": "문맥상 '세금을 포함하지 않고'라는 의미가 되어야 하는데 앞에 not이 있으므로 '~을 포함하여'라는 뜻의 전치사 (D) including이 정답이다. '~을 제외하고'라는 뜻의 (A) excepting은 not과 함께 '~도 예외 없이'를 의미하므로 문맥에 맞지 않다. (B) alongside는 '~와 나란히', (C) within은 '~ 이내에'라는 의미이다."
            },
            {
                "id": "q121",
                "text": "All associates are _____ to follow the standard operating procedures outlined in the handbook.",
                "options": [
                    {
                        "label": "A",
                        "text": "concerned"
                    },
                    {
                        "label": "B",
                        "text": "tended"
                    },
                    {
                        "label": "C",
                        "text": "maintained"
                    },
                    {
                        "label": "D",
                        "text": "expected"
                    }
                ],
                "classification": "G_VERB",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "모든 직원들은 안내서에 기술된 표준 운영 절차를 따라야 한다.",
                "explanation": "be동사 are와 to부정사 to follow 사이에서 과거분사 형태로 적절한 문맥을 완성하는 동사를 골라야 한다. '절차를 따라야 한다', 즉 '절차를 따를 것으로 기대된다'라는 의미가 되어야 하므로 'be expected to'의 형태로 쓰여 '~할 것으로 기대[예상]되다'를 의미하는 (D) expected가 정답이다. (A) concerned는 '우려하는'이라는 의미로 뒤에 주로 전치사 about이나 that절을 취하므로 빈칸에 적절하지 않고, (B)의 tend는 '경향이 있다'라는 뜻의 자동사로 수동태로 쓰이지 않으며, (C)의 maintain은 '유지하다'라는 뜻으로 문맥상 오답이다."
            },
            {
                "id": "q122",
                "text": "This month Framley Publishing House is embarking on its _____ expansion so far.",
                "options": [
                    {
                        "label": "A",
                        "text": "ambitiously"
                    },
                    {
                        "label": "B",
                        "text": "most ambitiously"
                    },
                    {
                        "label": "C",
                        "text": "ambition"
                    },
                    {
                        "label": "D",
                        "text": "most ambitious"
                    }
                ],
                "classification": "G_POS",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "이번 달 프램리 출판사는 지금까지 했던 것 중 가장 야심 찬 확장 사업을 착수할 것이다.",
                "explanation": "빈칸 앞에 소유격, 뒤에 명사 expansion이 있으므로 빈칸에는 명사를 수식하는 형용사나 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상으로 '가장 야심 찬 확장 사업'이라는 의미가 되어야 자연스러우므로 '야심 찬'이라는 뜻의 형용사 ambitious의 최상급 (D) most ambitious가 정답이다. 명사인 (C) ambition은 '야심'이라는 뜻으로 expansion과 복합명사를 이루지 않고, (A) ambitiously와 (B) most ambitiously는 부사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q123",
                "text": "After months of collaboration, Matricks Technology's software developers _____ released a top-quality product.",
                "options": [
                    {
                        "label": "A",
                        "text": "profoundly"
                    },
                    {
                        "label": "B",
                        "text": "overly"
                    },
                    {
                        "label": "C",
                        "text": "finally"
                    },
                    {
                        "label": "D",
                        "text": "intensely"
                    }
                ],
                "classification": "G_ADV",
                "testId": 3,
                "correctAnswer": "C",
                "translation": "몇 달간의 협업 끝에 매트릭스 테크놀로지의 소프트웨어 개발자들은 마침내 최고 품질의 제품을 출시했다.",
                "explanation": "빈칸 뒤의 동사 released를 수식하여 '마침내 출시했다'는 의미가 되어야 적절하므로 '마침내'라는 뜻의 (C) finally가 정답이다. (A) profoundly는 '깊이', (B) overly는 '지나치게', (D) intensely '몹시'라는 의미이다."
            },
            {
                "id": "q124",
                "text": "Tickets are valid for one-time access and do not allow for _____ into the venue.",
                "options": [
                    {
                        "label": "A",
                        "text": "duplication"
                    },
                    {
                        "label": "B",
                        "text": "reentry"
                    },
                    {
                        "label": "C",
                        "text": "permission"
                    },
                    {
                        "label": "D",
                        "text": "turnover"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 3,
                "correctAnswer": "B",
                "translation": "티켓으로는 1회 입장만 유효하며 행사장에는 재입장할 수 없습니다.",
                "explanation": "빈칸 뒤 장소를 나타내는 전치사구 into the venue가 있고 앞에서 티켓은 1회 입장에만 유효하다(Tickets are valid for one-time access)고 했으므로, '행사장에 재입장할 수 없다'라는 내용으로 연결되어야 자연스럽다. 따라서 '재입장'을 뜻하는 (B) reentry가 정답이다. (A) duplication은 '이중, 중복', (C) permission은 '허락', (D) turnover는 '(상품의) 회전율'이라는 의미로 문맥에 어울리지 않는다."
            },
            {
                "id": "q125",
                "text": "We hired Okafor Construction to do the renovation _____ it was not the lowest bidder on the project.",
                "options": [
                    {
                        "label": "A",
                        "text": "if only"
                    },
                    {
                        "label": "B",
                        "text": "alternatively"
                    },
                    {
                        "label": "C",
                        "text": "whereas"
                    },
                    {
                        "label": "D",
                        "text": "even though"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "우리는 오카포 건설이 프로젝트의 최저 입찰자가 아님에도 불구하고 보수 공사 담당 업체로 고용했다.",
                "explanation": "빈칸 뒤 완전한 절(it was not the lowest bidder on the project)을 이끄는 부사절 접속사 자리로 (A) if only, (C) whereas, (D) even though가 가능하다. 문맥상 '최저 입찰자가 아님에도 불구하고'라는 의미가 되어야 자연스러우므로 '~에도 불구하고, ~일지라도'를 뜻하는 (D) even though가 정답이다. (A) if only는 '~하면(좋을 텐데)'의 의미로 주로 가정법 시제와 쓰이고, (C) whereas는 '반면에'라는 뜻으로 의미상 적절하지 않으며, (B) alternatively는 부사이므로 품사상 오답이다."
            },
            {
                "id": "q126",
                "text": "The first _____ of the training will introduce staff to certain workplace responsibilities.",
                "options": [
                    {
                        "label": "A",
                        "text": "part"
                    },
                    {
                        "label": "B",
                        "text": "parted"
                    },
                    {
                        "label": "C",
                        "text": "parting"
                    },
                    {
                        "label": "D",
                        "text": "partial"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "교육의 첫 부분은 특정한 직장에서의 책무를 직원들에게 소개할 것이다.",
                "explanation": "빈칸은 동사 will introduce의 주어 자리로, 빈칸 앞에 관사 The와 형용사 first가 있으므로 명사가 와야 한다. 따라서 명사인 (A) part가 정답이다. (B) parted는 동사/과거분사, (D) partial은 형용사이므로 품사상 빈칸에 들어갈 수 없다. (C) parting은 동명사로 쓰일 경우 주어 자리에 들어갈 수 있지만 '갈라짐'을 의미하므로 답이 될 수 없다."
            },
            {
                "id": "q127",
                "text": "According to industry _____, Ghira Company plans to relocate its headquarters to Australia.",
                "options": [
                    {
                        "label": "A",
                        "text": "reported"
                    },
                    {
                        "label": "B",
                        "text": "reportedly"
                    },
                    {
                        "label": "C",
                        "text": "reporter"
                    },
                    {
                        "label": "D",
                        "text": "reports"
                    }
                ],
                "classification": "G_NOUN",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q128",
                "text": "Next month, the Kneath House will host an exhibition of _____ furniture and clothing from the eighteenth century.",
                "options": [
                    {
                        "label": "A",
                        "text": "authentic"
                    },
                    {
                        "label": "B",
                        "text": "authentically"
                    },
                    {
                        "label": "C",
                        "text": "authenticate"
                    },
                    {
                        "label": "D",
                        "text": "authenticity"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 3,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q129",
                "text": "PKTM's regional managers serve _____ the direction of the vice president.",
                "options": [
                    {
                        "label": "A",
                        "text": "among"
                    },
                    {
                        "label": "B",
                        "text": "under"
                    },
                    {
                        "label": "C",
                        "text": "behind"
                    },
                    {
                        "label": "D",
                        "text": "opposite"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "B",
                "translation": "PKTM의 지역 관리자들은 부사장의 지휘하에 근무한다.",
                "explanation": "빈칸 뒤의 명사구 the direction과 함께 '지휘[감독]하에'라는 의미를 나타내는 (B) under가 정답이다. (A) among은 '(셋 이상의) ~ 사이에'라는 의미로 복수명사가 뒤따라야 하므로 적절하지 않고, (C) behind는 '~ 뒤에', (D) opposite는 '~ 맞은편에'를 뜻하므로 문맥에 어울리지 않는다."
            },
            {
                "id": "q130",
                "text": "_____ a recent surge in demand, Vanita's Catering is hiring four additional servers.",
                "options": [
                    {
                        "label": "A",
                        "text": "Everywhere"
                    },
                    {
                        "label": "B",
                        "text": "Possibly"
                    },
                    {
                        "label": "C",
                        "text": "In total"
                    },
                    {
                        "label": "D",
                        "text": "Owing to"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 3,
                "correctAnswer": "D",
                "translation": "최근 수요 급증으로 인해 바니타 케이터링은 네 명의 서빙 종업원을 추가로 채용 중이다.",
                "explanation": "빈칸은 명사구 a recent surge in demand와 함께 콤마 뒤 완전한 절(Vanita's Catering is hiring ~ servers)을 수식하는 자리이므로 전치사가 들어가야 한다. 따라서 '~ 때문에'라는 의미의 전치사 (D) Owing to가 정답이다. (A) Everywhere는 대명사/부사, (B) Possibly와 (C) In total은 부사이므로 품사상 빈칸에 들어갈 수 없다."
            }
        ]
    },
    {
        "testId": 4,
        "title": "Part 5 Real Test 4",
        "questions": [
            {
                "id": "q101",
                "text": "Mr. Barrientos has worked at the company _____ six years.",
                "options": [
                    {
                        "label": "A",
                        "text": "for"
                    },
                    {
                        "label": "B",
                        "text": "since"
                    },
                    {
                        "label": "C",
                        "text": "with"
                    },
                    {
                        "label": "D",
                        "text": "lately"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "배리엔토스 씨는 회사에서 6년 동안 근무했다.",
                "explanation": "빈칸 앞에 Mr. Barrientos가 주어, has worked가 동사인 완전한 절이 있고 뒤에 명사구 six years가 있으므로 빈칸은 전치사 자리이다. six years가 기간을 나타내는 말이고, 문맥상 '6년 동안 일했다'라는 의미가 되어야 자연스러우므로 '~ 동안'을 뜻하는 (A) for가 정답이다. (B) since는 '~ 이후로'라는 뜻으로 과거 특정 시점을 나타내는 명사구를 목적어로 취하고, (C) with는 '~와 함께, ~을 가지고'라는 의미이다. (D) lately는 부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q102",
                "text": "The staff cafeteria stops _____ lunch at 2:00 Ρ.Μ.",
                "options": [
                    {
                        "label": "A",
                        "text": "taking"
                    },
                    {
                        "label": "B",
                        "text": "buying"
                    },
                    {
                        "label": "C",
                        "text": "serving"
                    },
                    {
                        "label": "D",
                        "text": "working"
                    }
                ],
                "classification": "V_VERB",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "직원 식당은 오후 2시에 점심 식사 제공을 마친다.",
                "explanation": "동사 stops의 목적어 자리에 들어갈 동명사 형태의 동사 어휘를 고르는 문제이다. lunch를 목적어로 취해 '점심 식사 제공을 멈추다'라는 내용이 되어야 자연스러우므로 '(식당 등에서 음식을) 제공하다'라는 뜻의 (C) serving이 정답이다. (A)의 take는 '가지고 가다', (B)의 buy는 '사다', (D)의 work는 '일하다; 효과가 있다'라는 의미이다."
            },
            {
                "id": "q103",
                "text": "The annual report will be ready after _____ make the necessary revisions.",
                "options": [
                    {
                        "label": "A",
                        "text": "I"
                    },
                    {
                        "label": "B",
                        "text": "me"
                    },
                    {
                        "label": "C",
                        "text": "myself"
                    },
                    {
                        "label": "D",
                        "text": "my"
                    }
                ],
                "classification": "G_POS",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "연례 보고서는 제가 필요한 수정을 한 뒤 준비될 것입니다.",
                "explanation": "빈칸은 after로 시작하는 부사절의 동사 make의 주어 자리이므로 인칭대명사 주격인 (A) I가 정답이다. 참고로, 재귀대명사 (C) myself는 주어 역할을 하지 않는다."
            },
            {
                "id": "q104",
                "text": "Mr. Louden was offered a full-time position at Fortelio Corporation _____ a division manager.",
                "options": [
                    {
                        "label": "A",
                        "text": "about"
                    },
                    {
                        "label": "B",
                        "text": "as"
                    },
                    {
                        "label": "C",
                        "text": "after"
                    },
                    {
                        "label": "D",
                        "text": "around"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "B",
                "translation": "루덴 씨는 포르텔리오 사에서 부서 관리자로 정규직을 제안받았다.",
                "explanation": "빈칸 뒤의 명사구 a division manager를 목적어로 취해 '부서 관리자로'라는 내용이 되어야 자연스러우므로 '~로(서)'를 뜻하는 (B) as가 정답이다."
            },
            {
                "id": "q105",
                "text": "Kennedy Sports will _____ its end-of-season sale through the month of January.",
                "options": [
                    {
                        "label": "A",
                        "text": "continuing"
                    },
                    {
                        "label": "B",
                        "text": "continued"
                    },
                    {
                        "label": "C",
                        "text": "continues"
                    },
                    {
                        "label": "D",
                        "text": "continue"
                    }
                ],
                "classification": "G_VERB",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "케네디 스포츠는 1월 한 달 내내 시즌 말 세일을 계속할 것이다.",
                "explanation": "조동사 will 뒤에는 동사원형이 와야 하므로 '계속하다'라는 뜻의 동사 원형 (D) continue가 정답이다."
            },
            {
                "id": "q106",
                "text": "Ms. Najjar is going to give a presentation _____ workplace regulations at noon.",
                "options": [
                    {
                        "label": "A",
                        "text": "near"
                    },
                    {
                        "label": "B",
                        "text": "to"
                    },
                    {
                        "label": "C",
                        "text": "past"
                    },
                    {
                        "label": "D",
                        "text": "on"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "나자르 씨는 정오에 직장 규정에 대해 발표할 예정이다.",
                "explanation": "빈칸 뒤의 명사구 workplace regulations를 목적어로 취해 '직장 규정에 대한 발표'라는 내용이 되어야 자연스러우므로 '~에 관하여'를 뜻하는 (D) on이 정답이다. (A) near(~ 가까이에), (B) to(~으로), (C) past(~을 지나서)는 장소나 위치를 나타내는 명사를 목적어로 취한다."
            },
            {
                "id": "q107",
                "text": "Mr. Telguld submitted the _____ surveys before the monthly board meeting.",
                "options": [
                    {
                        "label": "A",
                        "text": "completely"
                    },
                    {
                        "label": "B",
                        "text": "completed"
                    },
                    {
                        "label": "C",
                        "text": "completing"
                    },
                    {
                        "label": "D",
                        "text": "completes"
                    }
                ],
                "classification": "G_VERB",
                "testId": 4,
                "correctAnswer": "B",
                "translation": "텔걸드 씨는 월례 이사회 전에 완료된 설문 조사를 제출했다.",
                "explanation": "빈칸은 정관사 the와 명사 surveys 사이에서 명사를 수식하는 형용사 자리이므로 분사가 들어갈 수 있다. surveys는 완료를 하는 주체가 아닌 완료가 되는 대상이고, '완료된 설문 조사를 제출했다'라는 내용이 되어야 자연스러우므로 수동의 의미를 나타내어 형용사 역할을 하는 과거분사 (B) completed가 정답이다. (A) completely는 부사, (C) completing은 현재분사/동명사, (D) completes는 동사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q108",
                "text": "Travel funds are available to student presenters coming to the conference from a significant _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "location"
                    },
                    {
                        "label": "B",
                        "text": "amount"
                    },
                    {
                        "label": "C",
                        "text": "reason"
                    },
                    {
                        "label": "D",
                        "text": "distance"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "상당히 먼 곳에서 콘퍼런스에 참석하는 학생 발표자에게는 이동 경비가 제공된다.",
                "explanation": "'~에서'를 의미하는 전치사 from의 목적어 자리로, 문맥상 위치나 장소를 나타내는 명사가 들어가야 한다. 정도를 강조하는 형용사 significant(상당한; 중요한)의 수식을 받아 '상당히 먼 곳에서'라는 내용이 되어야 적절하므로 '먼 곳, 거리'를 뜻하는 (D) distance가 정답이다. (A) location은 '장소, 위치'라는 뜻으로 significant의 수식을 받으면 '중요한 장소'를 의미해 문맥상 적절하지 않다. (B) amount는 '양', (C) reason은 '이유'라는 의미이다."
            },
            {
                "id": "q109",
                "text": "Ms. Okada is _____ a new social media campaign at the request of our office manager.",
                "options": [
                    {
                        "label": "A",
                        "text": "organize"
                    },
                    {
                        "label": "B",
                        "text": "organized"
                    },
                    {
                        "label": "C",
                        "text": "organizing"
                    },
                    {
                        "label": "D",
                        "text": "organization"
                    }
                ],
                "classification": "G_POS",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "오카다 씨는 우리 사무실 관리자의 요청으로 새로운 소셜 미디어 캠페인을 기획하고 있습니다.",
                "explanation": "be동사 뒤에 빈칸이 있고, 빈칸 뒤에 a new social media campaign이라는 목적어가 있으므로 능동태를 만들 수 있는 현재분사 (C) organizing이 정답이다. 빈칸 앞에 is가 있으므로 동사원형 (A) organize는 들어갈 수 없고, be동사와 함께 수동태를 만드는 과거분사 (B) organized는 빈칸 뒤에 목적어를 취할 수 없다. 명사 (D) organization은 보어로 쓰이는 경우 be동사 뒤에 위치할 수 있지만 주어 Ms. Okada와 동격도 아니고, 빈칸 뒤의 명사구를 연결할 수도 없으므로 답이 될 수 없다."
            },
            {
                "id": "q110",
                "text": "The speaker will offer five tips for making wise purchasing _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "items"
                    },
                    {
                        "label": "B",
                        "text": "decisions"
                    },
                    {
                        "label": "C",
                        "text": "values"
                    },
                    {
                        "label": "D",
                        "text": "remedies"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 4,
                "correctAnswer": "B",
                "translation": "강연자는 현명한 구매 결정을 내리기 위한 5가지 조언을 제공할 것이다.",
                "explanation": "빈칸 앞의 purchasing과 함께 복합명사를 이루는 동시에 형용사 wise(현명한)의 수식을 받기에 적절한 명사를 골라야 한다. '현명한 구매 결정'이라는 의미가 되어야 자연스러우므로 '결정'을 뜻하는 (B) decisions가 정답이다. (A)의 item은 '품목', (C)의 value는 '가치'라는 뜻으로 형용사 wise와 의미상 수식 관계가 어울리지 않고, (D)의 remedy는 '치료법'을 뜻하므로 purchasing과 복합명사를 이루기에 어색하다."
            },
            {
                "id": "q111",
                "text": "Please log on to your online checking account _____ the next 30 days in order to keep it active.",
                "options": [
                    {
                        "label": "A",
                        "text": "within"
                    },
                    {
                        "label": "B",
                        "text": "how"
                    },
                    {
                        "label": "C",
                        "text": "whether"
                    },
                    {
                        "label": "D",
                        "text": "and"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "활성화 상태를 유지하시려면 30일 이내에 온라인 예금 계좌에 로그인하십시오.",
                "explanation": "빈칸 앞에 완전한 절(Please log on to your online checking account)이 있고 뒤에 명사구 the next 30 days가 있으므로 빈칸은 전치사 자리이다. 따라서 '~ 이내에'를 뜻하는 전치사 (A) within이 정답이다. (B) how는 의문사/관계부사, (C) whether는 명사절/부사절 접속사이므로 구조상 들어갈 수 없고, 등위접속사 (D) and는 명사구를 연결할 수는 있으나 의미상 적합하지 않다."
            },
            {
                "id": "q112",
                "text": "The Bradyville Inn _____ live jazz music in the dining area on Friday evenings.",
                "options": [
                    {
                        "label": "A",
                        "text": "features"
                    },
                    {
                        "label": "B",
                        "text": "marks"
                    },
                    {
                        "label": "C",
                        "text": "sounds"
                    },
                    {
                        "label": "D",
                        "text": "collects"
                    }
                ],
                "classification": "V_VERB",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "브래디빌 호텔은 금요일 저녁에 식사 공간에서 라이브 재즈 음악을 제공합니다.",
                "explanation": "빈칸 뒤의 명사구 live jazz music을 목적어로 취하여 '라이브 재즈 음악을 제공한다'라는 의미가 되어야 자연스러우므로 '~을 특징으로 삼다, 특별히 포함하다'라는 뜻의 동사 feature의 3인칭 단수형 (A) features가 정답이다. (B)의 mark는 '표시하다', (C)의 sound는 '소리가 나다, 울리다', (D)의 collect는 '모으다'라는 의미이다."
            },
            {
                "id": "q113",
                "text": "Leeann's Organic Fruit Spreads can be purchased _____ from the company's Web site.",
                "options": [
                    {
                        "label": "A",
                        "text": "direction"
                    },
                    {
                        "label": "B",
                        "text": "directly"
                    },
                    {
                        "label": "C",
                        "text": "directness"
                    },
                    {
                        "label": "D",
                        "text": "directed"
                    }
                ],
                "classification": "G_POS",
                "testId": 4,
                "correctAnswer": "B",
                "translation": "리안스 유기농 과일 스프레드는 회사 웹페이지에서 직접 구매할 수 있다.",
                "explanation": "빈칸이 없어도 완전한 절(Leeann's Organic Fruit Spreads can be purchased)과 전치사구(from ~ Web site)로 이루어진 문장으로 빈칸은 문장 구조에 영향을 주지 않는 부사 자리이다. 동사구 can be purchased를 수식하여 '직접 구매할 수 있다'라는 내용이 되어야 자연스러우므로 '직접, 곧장'을 뜻하는 부사 (B) directly가 정답이다. (A) direction과 (C) directness는 명사, (D) directed는 동사/과거분사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q114",
                "text": "_____ the event organizers' best efforts, they have been unable to attract enough volunteers this spring.",
                "options": [
                    {
                        "label": "A",
                        "text": "Behind"
                    },
                    {
                        "label": "B",
                        "text": "Versus"
                    },
                    {
                        "label": "C",
                        "text": "Among"
                    },
                    {
                        "label": "D",
                        "text": "Despite"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "행사 주최 측의 최선의 노력에도 불구하고, 그들은 올봄에 충분한 자원봉사자들을 모을 수 없었다.",
                "explanation": "빈칸 뒤의 명사구 the event organizers' best efforts를 목적어로 취하는 전치사 자리로, 행사 주최 측이 최선의 노력을 한 것(the event organizers' best efforts)과 충분한 자원봉사자들을 모을 수 없었던 것(unable to attract enough volunteers)은 상충되는 상황이므로 '~에도 불구하고'를 뜻하는 (D) Despite가 정답이다."
            },
            {
                "id": "q115",
                "text": "Mr. Perez _____ as an industrial engineer at Gaberly Logistics for almost twenty years.",
                "options": [
                    {
                        "label": "A",
                        "text": "employs"
                    },
                    {
                        "label": "B",
                        "text": "to be employed"
                    },
                    {
                        "label": "C",
                        "text": "is employing"
                    },
                    {
                        "label": "D",
                        "text": "has been employed"
                    }
                ],
                "classification": "G_VERB",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "페레즈 씨는 개벌리 로지스틱스에서 산업 엔지니어로 거의 20년간 근무해 오고 있다.",
                "explanation": "주어 Mr. Perez의 동사 자리로, 타동사인 employ(고용하다) 뒤에 목적어가 보이지 않으므로 수동태가 와야 한다. 따라서 (D) has been employed가 정답이다. to부정사구인 (B) to be employed는 품사상 빈칸에 들어갈 수 없고, (A) employs와 (C) is employing은 능동태이므로 뒤에 목적어가 필요하다."
            },
            {
                "id": "q116",
                "text": "Soon after Ms. Manilla was hired, the sales department's productivity began to increase _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "mainly"
                    },
                    {
                        "label": "B",
                        "text": "respectively"
                    },
                    {
                        "label": "C",
                        "text": "noticeably"
                    },
                    {
                        "label": "D",
                        "text": "closely"
                    }
                ],
                "classification": "V_ADV",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "마닐라 씨가 채용된 직후, 영업부의 생산성이 눈에 띄게 증가하기 시작했다.",
                "explanation": "동사 began의 목적어로 쓰인 to increase를 수식하여 '생산성이 눈에 띄게 증가하기 시작했다'는 의미가 되어야 적절하므로 '눈에 띄게'라는 뜻의 (C) noticeably가 정답이다. (A) mainly는 '주로', (B) respectively는 '각각', (D) closely는 '면밀히'라는 의미이다. 참고로, increase, rise, decrease 등의 증감 동사를 수식하는 부사로는 noticeably, significantly, dramatically 등이 자주 쓰인다."
            },
            {
                "id": "q117",
                "text": "Small businesses _____ participate in the Get Ahead program will receive marketing tools to help them attract customers.",
                "options": [
                    {
                        "label": "A",
                        "text": "that"
                    },
                    {
                        "label": "B",
                        "text": "they"
                    },
                    {
                        "label": "C",
                        "text": "what"
                    },
                    {
                        "label": "D",
                        "text": "whoever"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "겟 어헤드 프로그램에 참여하는 중소기업은 고객을 유치하는 데 도움이 되는 마케팅 툴을 제공받을 것이다.",
                "explanation": "빈칸 이하(participate in the Get Ahead program)는 주어 Small businesses와 동사 will receive 사이에서 주어를 수식하는 관계사절로, 빈칸 뒤에 동사가 나오므로 주격 관계대명사인 (A) that이 정답이다. 앞에 선행사가 있으므로 명사절 접속사 역할을 하는 (C) what과 (D) whoever는 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q118",
                "text": "Our copy editors will review the manuscript _____ will not return it until the end of next week.",
                "options": [
                    {
                        "label": "A",
                        "text": "or"
                    },
                    {
                        "label": "B",
                        "text": "once"
                    },
                    {
                        "label": "C",
                        "text": "either"
                    },
                    {
                        "label": "D",
                        "text": "but"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "우리 교열 담당자들이 원고를 검토하겠지만 다음 주 말까지는 원고를 돌려주지 않을 것이다.",
                "explanation": "빈칸에는 앞의 동사구 will review the manuscript와 뒤의 동사구 will not return it을 연결해 줄 등위접속사가 필요하다. '원고를 검토하겠지만 돌려주지 않을 것이다'는 내용이 되어야 자연스러우므로 대조를 나타내는 등위접속사 (D) but이 정답이다. 등위접속사 (A) or는 '또는'이라는 의미이고, (B) once는 부사/부사절 접속사이며, (C) either는 or와 함께 상관접속사 구문을 이끄므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q119",
                "text": "Mira Kumar was probably the _____ of all the interns at Kolbry Media last summer.",
                "options": [
                    {
                        "label": "A",
                        "text": "ambitious"
                    },
                    {
                        "label": "B",
                        "text": "most ambitious"
                    },
                    {
                        "label": "C",
                        "text": "ambitiously"
                    },
                    {
                        "label": "D",
                        "text": "more ambitiously"
                    }
                ],
                "classification": "G_POS",
                "testId": 4,
                "correctAnswer": "B",
                "translation": "미라 쿠마르는 아마 지난여름 콜브리 미디어의 모든 인턴들 중 가장 의욕적이었을 것이다.",
                "explanation": "정관사 the와 함께 최상급을 이루어 주어인 Mira Kumar를 보충 설명하는 주격 보어 자리이다. 따라서 최상급 형용사가 들어가야 하므로 (B) most ambitious(가장 의욕적인)가 정답이다. (A) ambitious는 원급 형용사, (C) ambitiously와 (D) more ambitiously는 부사로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q120",
                "text": "Orbin's Fish Company expanded to a total of 26 stores _____ its takeover of a rival chain.",
                "options": [
                    {
                        "label": "A",
                        "text": "whenever"
                    },
                    {
                        "label": "B",
                        "text": "toward"
                    },
                    {
                        "label": "C",
                        "text": "following"
                    },
                    {
                        "label": "D",
                        "text": "usually"
                    }
                ],
                "classification": "V_ADV",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "오빈스 피시 사는 경쟁 체인점을 인수한 후 총 26개 매장으로 확장했다.",
                "explanation": "빈칸 앞에 완전한 절(Orbin's Fish Company expanded ~ 26 stores)이 있고 뒤에 명사구 its takeover of a rival chain이 있으므로 빈칸은 전치사 자리이다. '경쟁 체인을 인수한 후 26개 매장으로 확장했다'는 의미가 되어야 자연스러우므로 (C) following(~ 후에)이 정답이다. 전치사 (B) toward는 '~을 향해서'라는 의미이므로 문맥상 어울리지 않고, (A) whenever는 복합관계부사, (D) usually는 부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q121",
                "text": "Ms. Cartwright told her team members that she wanted _____ to streamline the company's assembly process.",
                "options": [
                    {
                        "label": "A",
                        "text": "theirs"
                    },
                    {
                        "label": "B",
                        "text": "they"
                    },
                    {
                        "label": "C",
                        "text": "them"
                    },
                    {
                        "label": "D",
                        "text": "themselves"
                    }
                ],
                "classification": "G_POS",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "카트라이트 씨는 그녀의 팀원들에게 회사의 조립 공정을 간소화하길 원한다고 말했다.",
                "explanation": "빈칸은 타동사 wanted의 목적어 자리로, her team members를 받는 대명사가 필요하므로 목적격 인칭대명사 (C) them이 정답이다. 소유대명사 (A) theirs(그들의 것)는 앞에 가리키는 대상이 있어야 하고, 재귀대명사 (D) themselves는 동사 wanted의 주어인 she와 동일 인물이 아니므로 답이 될 수 없다."
            },
            {
                "id": "q122",
                "text": "Rupert's Food Service uses _____ technology to track all of its shipments.",
                "options": [
                    {
                        "label": "A",
                        "text": "strict"
                    },
                    {
                        "label": "B",
                        "text": "numerous"
                    },
                    {
                        "label": "C",
                        "text": "advanced"
                    },
                    {
                        "label": "D",
                        "text": "crowded"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "루퍼트 푸드 서비스는 고급 기술을 사용하여 모든 배송을 추적합니다.",
                "explanation": "빈칸에는 모든 배송을 추적하는 기술을 수식하기에 적절한 형용사가 들어가야 하므로 '고급의'라는 뜻의 (C) advanced가 정답이다. (A) strict는 '엄격한', (D) crowded는 '붐비는'이라는 뜻으로 technology를 수식하는 말로 어울리지 않고, (B) numerous는 '수많은'이라는 뜻으로 뒤에 복수명사가 와야 하므로 답이 될 수 없다."
            },
            {
                "id": "q123",
                "text": "Our app includes a _____ so that users can determine whether they are within their budget goals.",
                "options": [
                    {
                        "label": "A",
                        "text": "calculator"
                    },
                    {
                        "label": "B",
                        "text": "calculated"
                    },
                    {
                        "label": "C",
                        "text": "calculating"
                    },
                    {
                        "label": "D",
                        "text": "calculations"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "저희 앱에는 사용자가 예산 목표 내에 있는지 여부를 파악할 수 있도록 계산기가 포함되어 있습니다.",
                "explanation": "빈칸은 타동사 includes의 목적어 자리로, 앞에 부정관사 a가 있으므로 단수명사가 들어가야 한다. 따라서 '계산기'라는 뜻의 단수명사 (A) calculator가 정답이다. (B) calculated는 동사/과거분사, (C) calculating은 현재분사/동명사이므로 품사상 답이 될 수 없고, (D) calculations(계산)는 복수명사이므로 부정관사와 함께 쓸 수 없다."
            },
            {
                "id": "q124",
                "text": "To _____ that its facilities are cleaned every day, the Selboa Company has hired more janitors.",
                "options": [
                    {
                        "label": "A",
                        "text": "ensure"
                    },
                    {
                        "label": "B",
                        "text": "affect"
                    },
                    {
                        "label": "C",
                        "text": "provide"
                    },
                    {
                        "label": "D",
                        "text": "secure"
                    }
                ],
                "classification": "V_VERB",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "시설이 반드시 매일 청소될 수 있도록 셀보아 사는 더 많은 청소부들을 고용했다.",
                "explanation": "완전한 절(the Selboa Company has hired more janitors)를 수식하는 부사적 역할의 to부정사에 들어갈 동사 어휘를 고르는 문제이다. that절을 목적어로 취해 '반드시 시설이 매일 청소될 수 있도록 하기 위해'라는 내용이 되어야 자연스러우므로 '반드시 ~하게 하다'를 뜻하는 (A) ensure가 정답이다. (B) affect는 '영향을 미치다', (C) provide는 '제공하다', (D) secure는 '확보하다'라는 의미이다."
            },
            {
                "id": "q125",
                "text": "During his term as a legislator, Jeremy Moran _____ promoted public awareness of the need for infrastructure improvements.",
                "options": [
                    {
                        "label": "A",
                        "text": "act"
                    },
                    {
                        "label": "B",
                        "text": "action"
                    },
                    {
                        "label": "C",
                        "text": "active"
                    },
                    {
                        "label": "D",
                        "text": "actively"
                    }
                ],
                "classification": "G_POS",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "제레미 모란은 국회의원 임기 동안 사회 기반 시설 개선의 필요성에 대한 대중의 인식을 적극적으로 고취시켰다.",
                "explanation": "주어 Jeremy Moran과 동사 promoted 사이에서 동사를 수식하는 부사 자리이므로 '적극적으로'라는 뜻의 부사 (D) actively가 정답이다. (A) act는 동사/명사, (B) action은 명사, (C) active는 형용사로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q126",
                "text": "Pyxie Print's business is so new that we need to explain the full range of our services to _____ clients.",
                "options": [
                    {
                        "label": "A",
                        "text": "trained"
                    },
                    {
                        "label": "B",
                        "text": "potential"
                    },
                    {
                        "label": "C",
                        "text": "elected"
                    },
                    {
                        "label": "D",
                        "text": "paid"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 4,
                "correctAnswer": "B",
                "translation": "픽시 프린트의 사업은 매우 새로운 것이라서 잠재 고객들에게 서비스의 전 영역을 설명해야 한다.",
                "explanation": "명사 clients를 수식하여 '잠재 고객들'이라는 의미가 되어야 적합하므로 '잠재적인'을 뜻하는 (B) potential이 정답이다. (A) trained는 '훈련된', (C) elected는 '선출된', (D) paid는 '유급의'라는 의미이다."
            },
            {
                "id": "q127",
                "text": "Phone orders that are _____ to local stores by 11:00 A.M. are eligible for same-day pickup.",
                "options": [
                    {
                        "label": "A",
                        "text": "submitted"
                    },
                    {
                        "label": "B",
                        "text": "submission"
                    },
                    {
                        "label": "C",
                        "text": "submitting"
                    },
                    {
                        "label": "D",
                        "text": "submits"
                    }
                ],
                "classification": "G_VERB",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "오전 11시까지 지역 상점으로 접수된 전화 주문은 당일 픽업이 가능합니다.",
                "explanation": "주어인 Phone orders를 수식하는 관계사절에서 be동사 뒤에 들어갈 알맞은 형태를 고르는 문제이다. 빈칸 뒤에 목적어가 없고 전화 주문은 '접수되는' 대상이므로 수동의 의미를 나타내는 과거분사 (A) submitted가 정답이다. 명사 (B) submission은 주격 보어로서 be동사 뒤에 위치할 수 있지만 의미상 주어가 되는 선행사 Phone orders와 동격 관계가 아니므로 답이 될 수 없고, 능동/진행의 의미를 나타내는 현재분사 (C) submitting은 뒤에 목적어가 필요하며, 관계사절에 이미 동사 are가 있으므로 동사 (D) submits는 들어갈 수 없다."
            },
            {
                "id": "q128",
                "text": "An Oswald Hardware associate will _____ place an order for customers who need larger quantities than what is in stock.",
                "options": [
                    {
                        "label": "A",
                        "text": "slightly"
                    },
                    {
                        "label": "B",
                        "text": "wholly"
                    },
                    {
                        "label": "C",
                        "text": "busily"
                    },
                    {
                        "label": "D",
                        "text": "gladly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 4,
                "correctAnswer": "D",
                "translation": "오스왈드 하드웨어 직원은 재고로 있는 것보다 더 많은 수량이 필요한 고객을 위해 기꺼이 주문을 할 것입니다.",
                "explanation": "동사구 place an order를 수식하여 '기꺼이 주문을 할 것이다'는 의미가 되어야 자연스러우므로 '기꺼이'를 뜻하는 (D) gladly가 정답이다. (A) slightly는 '약간', (B) wholly는 '전적으로', (C) busily는 '바쁘게'라는 의미이다."
            },
            {
                "id": "q129",
                "text": "Mia Daushvili performed with the Bayhead Orchestra on Monday evening, _____ her virtuosic skills on the piccolo.",
                "options": [
                    {
                        "label": "A",
                        "text": "displays"
                    },
                    {
                        "label": "B",
                        "text": "had displayed"
                    },
                    {
                        "label": "C",
                        "text": "displaying"
                    },
                    {
                        "label": "D",
                        "text": "was displayed"
                    }
                ],
                "classification": "G_VERB",
                "testId": 4,
                "correctAnswer": "C",
                "translation": "미아 다우슈빌리는 월요일 저녁에 베이헤드 오케스트라와 함께 연주하며 피콜로의 거장다운 그녀의 기술을 펼쳤다.",
                "explanation": "콤마 앞에 완전한 절(Mia Daushvili performed ~ evening)이 있고, 빈칸 뒤에 목적어 역할을 하는 명사구 her virtuosic skills가 왔으므로 빈칸 이하는 분사구문이 되어야 한다. 문맥상 '오케스트라와 연주하며, 거장다운 기술을 펼쳤다'라는 의미가 되어야 자연스러우므로 능동의 의미를 나타내는 현재분사 (C) displaying이 정답이다. (A) displays는 명사/동사, (B) had displayed와 (D) was displayed는 동사로 빈칸에 들어갈 수 없다.."
            },
            {
                "id": "q130",
                "text": "When reviewing applicants for the clerk position, Ms. Ng will consider both education and _____ experience.",
                "options": [
                    {
                        "label": "A",
                        "text": "prior"
                    },
                    {
                        "label": "B",
                        "text": "quick"
                    },
                    {
                        "label": "C",
                        "text": "lean"
                    },
                    {
                        "label": "D",
                        "text": "calm"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 4,
                "correctAnswer": "A",
                "translation": "서기직 지원자를 검토할 때, 응 씨는 학력과 이전 경력 두 가지를 모두 고려할 것이다.",
                "explanation": "명사 experience를 수식하여 '이전 경력'이라는 의미가 되어야 적합하므로 '이전의'라는 뜻의 (A) prior가 정답이다. (B) quick은 '빠른', (C) lean은 '부족한, 마른', (D) calm은 '침착한'이라는 의미이다."
            }
        ]
    },
    {
        "testId": 5,
        "title": "Part 5 Real Test 5",
        "questions": [
            {
                "id": "q101",
                "text": "After upgrading to Pro Data Whiz, our clients began _____ problems with spreadsheets.",
                "options": [
                    {
                        "label": "A",
                        "text": "has"
                    },
                    {
                        "label": "B",
                        "text": "had"
                    },
                    {
                        "label": "C",
                        "text": "have"
                    },
                    {
                        "label": "D",
                        "text": "having"
                    }
                ],
                "classification": "G_VERB",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "프로 데이터 위즈로 업그레이드한 뒤, 고객들은 스프레드시트에 문제를 겪기 시작했다.",
                "explanation": "빈칸은 동사 began의 목적어 자리이므로 동명사인 (D) having이 정답이다. (A) has와 (C) have는 동사, (B) had는 동사/과거분사이므로 목적어 자리에 들어갈 수 없다."
            },
            {
                "id": "q102",
                "text": "Requests for additional days off are _____ by Ms. Chung in Human Resources.",
                "options": [
                    {
                        "label": "A",
                        "text": "approved"
                    },
                    {
                        "label": "B",
                        "text": "dropped"
                    },
                    {
                        "label": "C",
                        "text": "reached"
                    },
                    {
                        "label": "D",
                        "text": "reminded"
                    }
                ],
                "classification": "V_VERB",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "추가적인 휴가 요청은 인사부의 정 씨에 의해 승인된다.",
                "explanation": "해설 be동사 are와 함께 수동태를 이루는 과거분사 자리로, 문맥상 '요청이 정 씨에 의해 승인된다'라는 의미가 되어야 자연스러우므로 '승인하다'라는 뜻의 (A) approved가 정답이다. (B)의 drop은 '떨어뜨리다', (C)의 reach는 '도달하다', (D)의 remind는 '상기시키다'라는 뜻으로 문맥상 적절하지 않다."
            },
            {
                "id": "q103",
                "text": "The programmers have a list of changes _____ the next software update.",
                "options": [
                    {
                        "label": "A",
                        "text": "between"
                    },
                    {
                        "label": "B",
                        "text": "of"
                    },
                    {
                        "label": "C",
                        "text": "for"
                    },
                    {
                        "label": "D",
                        "text": "above"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "프로그래머들은 다음 소프트웨어 업데이트를 위한 변경사항 목록을 가지고 있다.",
                "explanation": "문맥상 '다음 소프트웨어 업데이트를 위한 변경사항 목록'이라는 의미가 되어야 적절하므로 '~을 위한'이라는 뜻으로 목적을 나타내는 (C) for가 정답이다. 참고로, (A) between은 '~ 사이에'라는 뜻으로 뒤에 'A and B' 또는 둘을 나타내는 복수명사가 와야 한다."
            },
            {
                "id": "q104",
                "text": "Let Farida Banquet Service _____ professional catering for your important corporate events.",
                "options": [
                    {
                        "label": "A",
                        "text": "providing"
                    },
                    {
                        "label": "B",
                        "text": "provide"
                    },
                    {
                        "label": "C",
                        "text": "provides"
                    },
                    {
                        "label": "D",
                        "text": "to provide"
                    }
                ],
                "classification": "G_VERB",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "파리다 연회 서비스가 귀사의 중요한 기업 행사에 전문적인 출장 요리를 제공하도록 해 주십시오.",
                "explanation": "해설 「let+목적어(Farida Banquet Service) + 목적격 보어」 구조에서 목적격 보어에 해당하는 자리로, 사역동사 let은 동사원형이나 과거분사를 목적격 보어로 취한다. 따라서 동사원형인 (B) provide가 정답이다. (A) providing은 동명사/현재분사, (C) provides는 동사, (D) to provide는 to부정사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q105",
                "text": "Using various innovative techniques, Boyd Industries has improved the _____ of its tiles.",
                "options": [
                    {
                        "label": "A",
                        "text": "closure"
                    },
                    {
                        "label": "B",
                        "text": "product"
                    },
                    {
                        "label": "C",
                        "text": "quality"
                    },
                    {
                        "label": "D",
                        "text": "method"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "다양한 혁신 기술을 이용하여 보이드 인더스트리스는 타일의 품질을 개선해 왔다.",
                "explanation": "해설 동사 has improved의 목적어 자리로, 문맥상 '타일의 품질을 개선해 왔다'라는 내용이 되어야 적절하다. 따라서 '품질'을 뜻하는 (C) quality가 정답이다. (A) closure는 '종료; 폐쇄', (B) product는 제품, (D) method는 '방법'이라는 의미이다."
            },
            {
                "id": "q106",
                "text": "_____ of all cosmetics are final, and refunds will not be given under any circumstances.",
                "options": [
                    {
                        "label": "A",
                        "text": "Sale"
                    },
                    {
                        "label": "B",
                        "text": "Sales"
                    },
                    {
                        "label": "C",
                        "text": "Sells"
                    },
                    {
                        "label": "D",
                        "text": "Selling"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "모든 화장품의 판매는 최종 판매이며, 어떠한 경우에도 환불되지 않습니다.",
                "explanation": "빈칸은 복수동사 are의 주어 자리이므로 복수명사가 들어가야 한다. 따라서 '판매'라는 뜻의 (B) Sales가 정답이다. (A) Sale은 단수명사이므로 단수동사와 쓰이고, (C) Sells는 동사이므로 품사상 빈칸에 들어갈 수 없다. (D) Selling은 동명사일 경우 주어 자리에 들어갈 수는 있지만 단수 취급되므로 복수동사 are의 주어가 될 수 없다."
            },
            {
                "id": "q107",
                "text": "If you have already submitted your response, no _____ action is required.",
                "options": [
                    {
                        "label": "A",
                        "text": "bright"
                    },
                    {
                        "label": "B",
                        "text": "further"
                    },
                    {
                        "label": "C",
                        "text": "previous"
                    },
                    {
                        "label": "D",
                        "text": "average"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "답변을 이미 제출한 경우 추가적인 조치는 필요하지 않습니다.",
                "explanation": "부정을 나타내는 한정사 no와 명사 action 사이에서 action을 수식하는 형용사 자리이다. 앞에 '이미 답변을 제출한 경우'라는 내용이 온 것으로 보아 '추가적인 조치는 필요 없다'라는 의미가 되어야 적절하므로 '추가의, 더 이상의'를 뜻하는 (B) further가 정답이다. (A) bright는 '밝은', (C) previous는 '이전의', (D) average는 '평균의'라는 의미로 문맥상 어울리지 않는다."
            },
            {
                "id": "q108",
                "text": "Ms. Sieglak stated that the app design was based on _____ own research.",
                "options": [
                    {
                        "label": "A",
                        "text": "she"
                    },
                    {
                        "label": "B",
                        "text": "hers"
                    },
                    {
                        "label": "C",
                        "text": "her"
                    },
                    {
                        "label": "D",
                        "text": "herself"
                    }
                ],
                "classification": "G_POS",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "시글락 씨는 앱 설계가 자신의 연구를 토대로 한 것이라고 말했다.",
                "explanation": "빈칸에는 뒤에 온 명사구 own research를 수식하는 말이 들어가야 한다. 따라서 명사 앞에 쓰여 한정사 역할을 하고, 형용사 own과 함께 소유 관계를 강조하는 소유격 인칭대명사인 (C) her가 정답이다."
            },
            {
                "id": "q109",
                "text": "_____ the organization has doubled its outreach efforts, it has yet to see an increase in new clients.",
                "options": [
                    {
                        "label": "A",
                        "text": "Until"
                    },
                    {
                        "label": "B",
                        "text": "Because"
                    },
                    {
                        "label": "C",
                        "text": "Although"
                    },
                    {
                        "label": "D",
                        "text": "Therefore"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "그 조직은 지원 활동을 두 배로 늘렸지만 아직 신규 고객의 증가는 보지 못했다.",
                "explanation": "뒤에 the organization이 주어, has doubled가 동사, its outreach efforts가 목적어인 완전한 절이 왔으므로, 빈칸에는 부사절 접속사가 들어가야 한다. 문맥상 '지원 활동을 두 배로 늘렸지만'이라는 내용이 되어야 자연스러우므로 '~이기는 하지만'이라는 뜻의 접속사 (C) Although가 정답이다. 부사절 접속사 (A) Until은 '~까지', (B) Because는 '~ 때문에'라는 뜻으로 문맥상 적절하지 않고, (D) Therefore는 '그러므로'라는 접속부사로 절을 연결할 수 없다."
            },
            {
                "id": "q110",
                "text": "Starting on October 8, _____ board of education meetings will be streamed live on the school district's Web site.",
                "options": [
                    {
                        "label": "A",
                        "text": "all"
                    },
                    {
                        "label": "B",
                        "text": "so"
                    },
                    {
                        "label": "C",
                        "text": "that"
                    },
                    {
                        "label": "D",
                        "text": "to"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "10월 8일부터 모든 교육 위원회 회의는 학군 웹사이트에서 생중계될 예정이다.",
                "explanation": "빈칸은 주어 역할을 하는 복합명사 board of education meetings를 수식하는 형용사 자리이다. meetings가 복수이므로 '모든'이라는 뜻으로 복수명사를 수식할 수 있는 (A) all이 정답이다. (B) so는 접속사/부사, (D) to는 전치사/to부정사이므로 품사상 답이 될 수 없고, (C) that은 형용사로 쓰일 경우 뒤에 단수명사가 와야 한다."
            },
            {
                "id": "q111",
                "text": "The hairstylists at Urbanite Salon have _____ experience working with a variety of hair products.",
                "options": [
                    {
                        "label": "A",
                        "text": "considers"
                    },
                    {
                        "label": "B",
                        "text": "considerable"
                    },
                    {
                        "label": "C",
                        "text": "considerate"
                    },
                    {
                        "label": "D",
                        "text": "considering"
                    }
                ],
                "classification": "G_POS",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "어바나이트 살롱의 미용사들은 다양한 헤어 제품을 다루는 데 많은 경험을 가지고 있다.",
                "explanation": "빈칸은 명사 experience를 수식하는 형용사 자리이다. '다양한 헤어 제품을 가지고 일한 많은 경험'이라는 의미가 되어야 하므로 '많은, 상당한'이라는 뜻의 (B) considerable이 정답이다. (A) considers는 동사이므로 품사상 답이 될 수 없고, (C) considerate은 '사려 깊은'을 뜻하는 형용사로 명사 experience와 어울리지 않으며, (D) considering은 현재분사일 경우 '고려하는'을 뜻하므로 문맥상 적절하지 않다."
            },
            {
                "id": "q112",
                "text": "Both candidates are _____ suitable for the assistant manager position.",
                "options": [
                    {
                        "label": "A",
                        "text": "permanently"
                    },
                    {
                        "label": "B",
                        "text": "promptly"
                    },
                    {
                        "label": "C",
                        "text": "equally"
                    },
                    {
                        "label": "D",
                        "text": "gradually"
                    }
                ],
                "classification": "V_ADV",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "두 후보자 모두 대리 직책에 동등하게 적합하다.",
                "explanation": "해설 형용사 suitable을 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '후보자 둘 다 동등하게 적합하다'라는 내용이 되어야 자연스러우므로 '동등하게, 똑같이'를 뜻하는 (C) equally가 정답이다. (A) permanently는 '영구적으로', (B) promptly는 '즉시', (D) gradually는 '점차적으로'라는 의미이다."
            },
            {
                "id": "q113",
                "text": "With the acquisition of Bloom Circuit, Wellstrom Hardware has _____ expanded its offerings and services.",
                "options": [
                    {
                        "label": "A",
                        "text": "greater"
                    },
                    {
                        "label": "B",
                        "text": "greatness"
                    },
                    {
                        "label": "C",
                        "text": "great"
                    },
                    {
                        "label": "D",
                        "text": "greatly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "블룸 서킷 인수를 통해 웰스트롬 하드웨어는 제품 및 서비스를 크게 확장했다.",
                "explanation": "빈칸은 동사구 has expanded를 수식하는 부사 자리로, 문맥상 '크게 확장했다'라는 의미가 되어야 하므로 '크게'를 뜻하는 부사 (D) greatly가 정답이다. (B) greatness는 명사로 품사상 빈칸에 들어갈 수 없고, 주로 형용사로 쓰이는 (A) greater와 (C) great는 부사로 쓰이기도 하지만 '아주 잘'이라는 뜻으로 보통 동사 뒤에 온다."
            },
            {
                "id": "q114",
                "text": "Please note that file names should not _____ capital letters or spaces.",
                "options": [
                    {
                        "label": "A",
                        "text": "differ"
                    },
                    {
                        "label": "B",
                        "text": "contain"
                    },
                    {
                        "label": "C",
                        "text": "match"
                    },
                    {
                        "label": "D",
                        "text": "pick"
                    }
                ],
                "classification": "V_VERB",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "파일 이름에는 대문자나 공백이 들어 있으면 안 된다는 점에 유의하십시오.",
                "explanation": "빈칸 뒤의 명사구 capital letters or spaces를 목적어로 취해 적절한 문맥을 만드는 동사를 골라야 한다. '대문자나 공백이 들어 있으면 안 된다'라는 내용이 되어야 하므로 '~이 들어 있다'라는 뜻의 (B) contain이 정답이다. (A) differ는 '다르다'라는 뜻의 자동사로 목적어를 취할 수 없으므로 빈칸에 들어갈 수 없고, (C) match는 '맞추다', (D) pick은 '고르다'라는 의미로 문맥상 적합하지 않다."
            },
            {
                "id": "q115",
                "text": "The Sun-Tech ceiling fan has received more than 15,000 five-star reviews from _____ customers.",
                "options": [
                    {
                        "label": "A",
                        "text": "satisfied"
                    },
                    {
                        "label": "B",
                        "text": "checked"
                    },
                    {
                        "label": "C",
                        "text": "adjusted"
                    },
                    {
                        "label": "D",
                        "text": "allowed"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "선-테크 천장 선풍기는 만족한 고객으로부터 별 5개 평가를 15,000개 이상 받았다.",
                "explanation": "빈칸 뒤의 명사 customers를 수식하여 적절한 문맥을 완성하는 형용사를 골라야 한다. 별 5개 평가를 15,000개 이상 받았다고 했으므로 '만족한 고객'이라는 의미가 되어야 적절하다. 따라서 '만족한'을 뜻하는 (A) satisfied가 정답이다. (B) checked는 '확인된', (C) adjusted는 '조정된', (D) allowed는 '허용된'이라는 의미이다."
            },
            {
                "id": "q116",
                "text": "Please _____ the Returns section of our Web site if you are unhappy with any part of your order.",
                "options": [
                    {
                        "label": "A",
                        "text": "visit"
                    },
                    {
                        "label": "B",
                        "text": "visits"
                    },
                    {
                        "label": "C",
                        "text": "visited"
                    },
                    {
                        "label": "D",
                        "text": "visiting"
                    }
                ],
                "classification": "G_VERB",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "주문 제품에 조금이라도 불만이 있으시면 당사 웹사이트의 반품 섹션을 방문하십시오.",
                "explanation": "Please로 시작하는 명령문의 동사 자리로 동사원형이 들어가야 한다. 따라서 (A) visit가 정답이다. (B) visits는 3인칭 단수주어와 쓰이는 동사의 현재형, (C) visited는 동사의 과거형/과거분사, (D) visiting은 동명사/현재분사이므로 답이 될 수 없다."
            },
            {
                "id": "q117",
                "text": "Ito Auto Group is offering excellent _____ on pre-owned vehicles this month.",
                "options": [
                    {
                        "label": "A",
                        "text": "trips"
                    },
                    {
                        "label": "B",
                        "text": "reasons"
                    },
                    {
                        "label": "C",
                        "text": "customs"
                    },
                    {
                        "label": "D",
                        "text": "deals"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "이토 자동차 그룹은 이번 달에 중고 차량에 대해 훌륭한 할인 혜택을 제공합니다.",
                "explanation": "빈칸에 들어갈 명사는 자동차 회사에서 중고 차량에 대해 제공하는 것이어야 하므로 앞의 형용사 excellent와 함께 '훌륭한 할인 혜택, 특가'라는 의미가 되어야 적합하다. 따라서 '할인 혜택, 특가'라는 뜻을 지닌 (D) deals가 정답이다. (A)의 trip은 '여행', (B)의 reason은 '이유', (C) customs는 '세관'이라는 의미로 자동차 회사가 중고 차량과 관련해 제공하는 것이 되기에는 부적절하다."
            },
            {
                "id": "q118",
                "text": "Product prices are influenced _____ such factors as consumer demand and retail competition.",
                "options": [
                    {
                        "label": "A",
                        "text": "by"
                    },
                    {
                        "label": "B",
                        "text": "under"
                    },
                    {
                        "label": "C",
                        "text": "those"
                    },
                    {
                        "label": "D",
                        "text": "nearly"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "제품 가격은 소비자 수요와 소매 경쟁과 같은 요인에 의해 영향을 받는다.",
                "explanation": "빈칸은 수동태로 쓰인 완전한 절(Product prices are influenced) 뒤에 명사구 such factors를 연결하는 전치사 자리이다. 문맥상 '그러한 요소들에 의해 영향을 받는다'는 의미가 되어야 하므로 '~에 의하여'라는 의미인 (A) by가 정답이다. (B) under는 '~ 아래'를 뜻하는 전치사/부사로 문맥상 어울리지 않고, (C) those는 지시대명사/지시형용사, (D) nearly는 '거의'라는 뜻의 부사이므로 품사상 답이 될 수 없다."
            },
            {
                "id": "q119",
                "text": "Monmouth Enterprises will be _____ prefabricated houses online starting on April 1.",
                "options": [
                    {
                        "label": "A",
                        "text": "predicting"
                    },
                    {
                        "label": "B",
                        "text": "passing"
                    },
                    {
                        "label": "C",
                        "text": "retaining"
                    },
                    {
                        "label": "D",
                        "text": "marketing"
                    }
                ],
                "classification": "V_VERB",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "몬머스 엔터프라이시스는 4월 1일부터 온라인으로 조립식 주택을 상품으로 판촉할 예정이다.",
                "explanation": "해설 be동사 뒤에 현재분사 형태로 들어가 빈칸 뒤의 명사구 prefabricated houses를 목적어로 취해 적절한 문맥을 완성하는 동사를 고르는 문제이다. '조립식 주택을 상품으로 판촉할 것이다'라는 내용이 되어야 자연스러우므로 ‘(상품을) 판촉하다, 마케팅하다'라는 뜻의 (D) marketing이 정답이다. (A)의 predict는 '예측하다', (B)의 pass는 '지나가다', (C)의 retain은 '유지하다'라는 뜻으로 문맥상 어울리지 않는다."
            },
            {
                "id": "q120",
                "text": "All employees should familiarize _____ with the company's policies and procedures.",
                "options": [
                    {
                        "label": "A",
                        "text": "their"
                    },
                    {
                        "label": "B",
                        "text": "them"
                    },
                    {
                        "label": "C",
                        "text": "theirs"
                    },
                    {
                        "label": "D",
                        "text": "themselves"
                    }
                ],
                "classification": "G_POS",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "모든 직원은 회사의 정책 및 절차를 익혀야 한다.",
                "explanation": "빈칸은 동사 should familiarize의 목적어 자리로, 목적어 자리에 들어갈 수 있는 목적격 인칭대명사 (B) them, 소유대명사 (C) theirs, 재귀대명사 (D) themselves 중 하나를 선택해야 한다. 모든 직원이 회사 정책 및 절차에 익숙하게 만들어야 하는 대상은 그들 자신이므로 주어 All employees를 가리키며 주어와 목적어가 동일할 경우 쓰이는 재귀대명사 (D) themselves가 정답이다."
            },
            {
                "id": "q121",
                "text": "Custom furniture orders require a 50 percent deposit _____ the time of the order.",
                "options": [
                    {
                        "label": "A",
                        "text": "as"
                    },
                    {
                        "label": "B",
                        "text": "off"
                    },
                    {
                        "label": "C",
                        "text": "into"
                    },
                    {
                        "label": "D",
                        "text": "at"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "맞춤 가구 주문에는 주문 시 50퍼센트의 보증금이 필요하다.",
                "explanation": "빈칸 뒤 시간을 나타내는 명사구 the time이 있고, 문맥상 '주문 시에'라는 의미가 되어야 하므로 '~에'를 뜻하는 시간의 전치사 (D) at이 정답이다. (A) as는 '~로서, ~같이', (B) off는 '~에서 떨어져서', (C) into는 '~ 속으로'를 뜻하므로 문맥상 적절하지 않다."
            },
            {
                "id": "q122",
                "text": "We are planning a _____ for the Klemner Corporation's twentieth anniversary.",
                "options": [
                    {
                        "label": "A",
                        "text": "celebration"
                    },
                    {
                        "label": "B",
                        "text": "celebrated"
                    },
                    {
                        "label": "C",
                        "text": "celebrity"
                    },
                    {
                        "label": "D",
                        "text": "celebrate"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "우리는 클렘너 사의 20주년 기념행사를 기획하고 있다.",
                "explanation": "해설 부정관사 a와 함께 동사 are planning의 목적어 역할을 하는 명사 자리로, 문맥상 '20주년 기념행사'라는 의미가 되어야 하므로 '기념행사'를 뜻하는 (A) celebration이 정답이다. (B) celebrated는 동사/과거분사, (D) celebrate는 동사로 품사상 빈칸에 들어갈 수 없고, 명사 (C) celebrity는 '유명 인사'라는 뜻으로 문맥상 적절하지 않다."
            },
            {
                "id": "q123",
                "text": "Though she lacks political experience, Ms. Diaz has been _____ impressive in her first term as mayor.",
                "options": [
                    {
                        "label": "A",
                        "text": "quite"
                    },
                    {
                        "label": "B",
                        "text": "soon"
                    },
                    {
                        "label": "C",
                        "text": "ever"
                    },
                    {
                        "label": "D",
                        "text": "next"
                    }
                ],
                "classification": "V_ADV",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "디아즈 씨는 비록 정치적 경험은 부족하지만 시장으로서의 첫 임기 중에는 꽤 강한 인상을 주었다.",
                "explanation": "해설 형용사 impressive를 수식하여 적절한 문맥을 만드는 부사를 고르는 문제이다. '꽤 강한 인상을 주었다'는 내용이 되어야 자연스러우므로 '꽤, 상당히'라는 의미의 (A) quite가 정답이다. (B) soon은 주로 미래 시제에서 사용되고, (C) ever는 '지금까지'라는 의미로 비교급, 최상급을 강조하는 데 쓰이며, (D) next는 '다음에'라는 의미이다."
            },
            {
                "id": "q124",
                "text": "The university library usually acquires _____ copies of best-selling books to meet students' demand.",
                "options": [
                    {
                        "label": "A",
                        "text": "multiply"
                    },
                    {
                        "label": "B",
                        "text": "multiple"
                    },
                    {
                        "label": "C",
                        "text": "multiples"
                    },
                    {
                        "label": "D",
                        "text": "multiplicity"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "대학 도서관은 보통 학생들의 수요를 맞추기 위해 베스트셀러 책을 여러 권 구입한다.",
                "explanation": "해설 빈칸에는 동사 acquires의 목적어인 명사 copies를 수식하는 형용사 또는 복합명사를 이루는 명사가 들어갈 수 있다. '베스트셀러 책 여러 권'이라는 의미가 되어야 하므로 '여러, 다수의'를 뜻하는 형용사 (B) multiple이 정답이다. (A) multiply는 '곱하다'라는 뜻의 동사이므로 품사상 답이 될 수 없고, (C) multiples는 '배수', (D) multiplicity는 '다양성'이라는 뜻의 명사로 copies와 복합명사를 만들지 않으므로 오답이다."
            },
            {
                "id": "q125",
                "text": "This year's conference tote bags were _____ donated by Etani Designs.",
                "options": [
                    {
                        "label": "A",
                        "text": "generous"
                    },
                    {
                        "label": "B",
                        "text": "generosity"
                    },
                    {
                        "label": "C",
                        "text": "generously"
                    },
                    {
                        "label": "D",
                        "text": "generosities"
                    }
                ],
                "classification": "V_ADV",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "올해 학회의 토트백은 에타니 디자인스가 후하게 기부해 주었다.",
                "explanation": "해설 동사구 were donated를 수식하는 부사 자리이므로 '후하게'라는 뜻의 부사 (C) generously가 정답이다. (A) generous는 형용사, (B) generosity와 (D) generosities는 명사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q126",
                "text": "We will be holding a _____ on Friday to honor the 30-year engineering career of Mr. Kuan.",
                "options": [
                    {
                        "label": "A",
                        "text": "record"
                    },
                    {
                        "label": "B",
                        "text": "share"
                    },
                    {
                        "label": "C",
                        "text": "reception"
                    },
                    {
                        "label": "D",
                        "text": "place"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "콴 씨의 30년간의 엔지니어링 경력을 기리기 위해 금요일에 축하연을 열 예정입니다.",
                "explanation": "해설 콴 씨의 30년 경력을 기리기 위한 것이라는 내용으로 보아 '축하연을 연다'라는 의미가 되어야 적절하다. 따라서 '축하연'을 뜻하는 (C) reception이 정답이다. (A) record는 '기록', (B) share는 '몫', (D) place는 '장소'를 뜻하므로 문맥상 어울리지 않는다."
            },
            {
                "id": "q127",
                "text": "Groove Background creates soothing playlists of instrumental music, _____ classical and jazz.",
                "options": [
                    {
                        "label": "A",
                        "text": "instead"
                    },
                    {
                        "label": "B",
                        "text": "including"
                    },
                    {
                        "label": "C",
                        "text": "in addition"
                    },
                    {
                        "label": "D",
                        "text": "indeed"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "그루브 백그라운드는 클래식과 재즈를 포함하는 편안한 기악곡 재생 목록을 만들어 준다.",
                "explanation": "해설 앞에 완전한 절(Groove Background creates ~ music)이 있으므로 빈칸 뒤 명사구 classical and jazz와 함께 수식어구를 이끄는 전치사 자리이다. 따라서 '~을 포함하여'라는 의미의 전치사 (B) including이 정답이다. (A) instead(대신에), (C) in addition (게다가), (D) indeed(사실)는 모두 부사로 품사상 답이 될 수 없다."
            },
            {
                "id": "q128",
                "text": "Members of the finance department _____ to Mr. Chua's lecture on risk avoidance.",
                "options": [
                    {
                        "label": "A",
                        "text": "to be invited"
                    },
                    {
                        "label": "B",
                        "text": "inviting"
                    },
                    {
                        "label": "C",
                        "text": "invite"
                    },
                    {
                        "label": "D",
                        "text": "are invited"
                    }
                ],
                "classification": "G_VERB",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "재무부서 직원들은 추아 씨의 리스크 방지에 대한 강의에 초대되었습니다.",
                "explanation": "해설 주어 Members of the finance department의 동사 자리로, 타동사인 invite(초대하다) 뒤에 목적어가 없고 전치사 to가 있으므로 수동태가 와야 한다. 따라서 (D) are invited가 정답이다. (A) to be invited는 to부정사, (B) inviting은 동명사/현재분사이므로 품사상 답이 될 수 없고, (C) invite는 능동형 동사이므로 뒤에 목적어가 필요하다."
            },
            {
                "id": "q129",
                "text": "The board of trustees debated for hours _____ the revised hiring policies.",
                "options": [
                    {
                        "label": "A",
                        "text": "during"
                    },
                    {
                        "label": "B",
                        "text": "above"
                    },
                    {
                        "label": "C",
                        "text": "over"
                    },
                    {
                        "label": "D",
                        "text": "across"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "이사회는 개정된 고용 정책을 놓고 몇 시간 동안 논의했다.",
                "explanation": "해설 빈칸 앞의 몇 시간 동안 논의했다는 내용으로 보아 빈칸 뒤의 the revised hiring policies는 토론의 주제로 연결되어야 자연스럽다. 따라서 '~에 대한, ~을 두고'라는 뜻의 전치사 (C) over가 정답이다. (A) during은 '~ 동안', (B) above는 '~보다 위에', (D) across는 '~을 가로질러'라는 의미로 문맥상 적절하지 않다."
            },
            {
                "id": "q130",
                "text": "The participants closely _____ the fitness instructor's movements tend to learn the proper technique more quickly.",
                "options": [
                    {
                        "label": "A",
                        "text": "imitate"
                    },
                    {
                        "label": "B",
                        "text": "imitations"
                    },
                    {
                        "label": "C",
                        "text": "imitative"
                    },
                    {
                        "label": "D",
                        "text": "imitating"
                    }
                ],
                "classification": "V_VERB",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "피트니스 강사의 동작을 유심히 따라 하는 참가자들은 적절한 기술을 더 빨리 익히는 경향이 있다.",
                "explanation": "The participants가 주어, tend가 동사인 문장이다. 따라서 빈칸에는 명사구 the fitness instructor's movements를 목적어로 취하면서 주어 The participants를 수식하는 준동사가 들어가야 하므로, '따라 하는, 모방하는'이라는 뜻의 현재분사 (D) imitating이 정답이다. (A) imitate는 동사, (B) imitations는 명사, (C) imitative는 형용사로 빈칸에 들어갈 수 없다."
            }
        ]
    },
    {
        "testId": 6,
        "title": "Part 5 Real Test 6",
        "questions": [
            {
                "id": "q101",
                "text": "The new policy allows employees to set _____ own working hours under certain conditions.",
                "options": [
                    {
                        "label": "A",
                        "text": "they"
                    },
                    {
                        "label": "B",
                        "text": "their"
                    },
                    {
                        "label": "C",
                        "text": "theirs"
                    },
                    {
                        "label": "D",
                        "text": "themselves"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "B",
                "translation": "새로운 정책은 직원들이 특정 조건 하에서 자신의 근무 시간을 정할 수 있도록 허용한다.",
                "explanation": "빈칸에는 to set의 목적어 역할을 하는 명사구 own working hours 를 수식하는 말이 필요하므로 소유격 인칭대명사 (B) their가 정답이다."
            },
            {
                "id": "q102",
                "text": "Based on last year's data, Paik Company increased its sales projections _____ the current year.",
                "options": [
                    {
                        "label": "A",
                        "text": "when"
                    },
                    {
                        "label": "B",
                        "text": "for"
                    },
                    {
                        "label": "C",
                        "text": "if"
                    },
                    {
                        "label": "D",
                        "text": "or"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "B",
                "translation": "백 회사는 작년 자료를 바탕으로 올해 매출 전망치를 상향 조정했다.",
                "explanation": "빈칸 앞에 완전한 절(Paik Company increased projections)이 있고 뒤에 명사구 the current year가 있으므로 빈칸은 전치사 자리이다. 문맥상 '올해에 대한 매출 전망치'라는 의미가 되어야 적절하므로 '~에 대한'이라는 뜻의 전치사 (B) for가 정답이다. (A) when, (C) if, (D) or는 접속사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q103",
                "text": "Harbison's Department Store interviews applicants _____ standard business hours.",
                "options": [
                    {
                        "label": "A",
                        "text": "among"
                    },
                    {
                        "label": "B",
                        "text": "beside"
                    },
                    {
                        "label": "C",
                        "text": "during"
                    },
                    {
                        "label": "D",
                        "text": "onto"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "하비슨스 백화점은 표준 영업시간에 지원자 면접을 본다.",
                "explanation": "빈칸 뒤에 기간을 나타내는 명사구 standard business hours가 있고, 문맥상 '표준 영업시간 동안에'라는 의미가 되어야 자연스러우므로 '~ 동안'을 뜻하는 (C) during이 정답이다. (A) among은 '~ 사이에', (B) beside는 '~ 옆에', (D) onto는 '~ 위로'라는 의미이다."
            },
            {
                "id": "q104",
                "text": "Takealong Industries' commercial propane heaters deliver more warmth to _____ areas.",
                "options": [
                    {
                        "label": "A",
                        "text": "wideness"
                    },
                    {
                        "label": "B",
                        "text": "widen"
                    },
                    {
                        "label": "C",
                        "text": "wider"
                    },
                    {
                        "label": "D",
                        "text": "widely"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "테이컬롱 인더스트리스의 상업용 프로판 히터는 더 넓은 공간에 더 많은 온기를 전달한다.",
                "explanation": "빈칸에는 전치사 to의 목적어인 명사 areas를 수식하는 형용사나 areas와 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '더 넓은 공간에 온기를 전달한다'라는 내용이 되어야 하므로 형용사 wide의 비교급인 (C) wider(더 넓은)가 정답이다. 명사 (A) wideness는 '넓이, 폭'을 의미하므로 areas와 복합명사를 이루기에 적절하지 않고, (B) widen은 동사, (D) widely는 부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q105",
                "text": "By switching to new project-management software, the editorial team has _____ improved its publication processes.",
                "options": [
                    {
                        "label": "A",
                        "text": "great"
                    },
                    {
                        "label": "B",
                        "text": "greatly"
                    },
                    {
                        "label": "C",
                        "text": "greater"
                    },
                    {
                        "label": "D",
                        "text": "greatest"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "B",
                "translation": "새로운 프로젝트 관리 소프트웨어로 전환함으로써 편집팀은 출판 과정을 크게 개선했다.",
                "explanation": "빈칸은 동사구 has improved를 수식하는 부사 자리이므로 '크게'라는 뜻의 부사 (B) greatly가 정답이다. 참고로, great는 주로 형용사로 쓰이지만 부사로 쓰이는 경우도 있는데, 이때는 '아주 잘'이라는 뜻으로 보통 동사 뒤에 쓰고 improve와 문맥상 어울리지 않으므로 답이 될 수 없다."
            },
            {
                "id": "q106",
                "text": "The search committee _____ three candidates for the chief executive position.",
                "options": [
                    {
                        "label": "A",
                        "text": "nominating"
                    },
                    {
                        "label": "B",
                        "text": "nomination"
                    },
                    {
                        "label": "C",
                        "text": "has nominated"
                    },
                    {
                        "label": "D",
                        "text": "has been nominated"
                    }
                ],
                "classification": "G_VERB",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "인사 위원회는 최고 경영자 자리에 세 명의 후보를 지명했다.",
                "explanation": "The search committee가 주어인 문장에 동사가 보이지 않으므로 빈칸은 동사 자리이다. 빈칸 뒤에 목적어 three candidates가 있으므로 능동태가 와야 한다. 따라서 (C) has nominated가 정답이다. (A) nominating은 현재분사/동명사, (B) nomination 명사, (D) has been nominated는 현재완료 수동태이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q107",
                "text": "_____ a two-month delay, new carpeting was installed in the east conference room.",
                "options": [
                    {
                        "label": "A",
                        "text": "Additionally"
                    },
                    {
                        "label": "B",
                        "text": "Although"
                    },
                    {
                        "label": "C",
                        "text": "After"
                    },
                    {
                        "label": "D",
                        "text": "Furthermore"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "두 달의 지연 끝에 동쪽 회의실에 새로운 카펫이 깔렸다.",
                "explanation": "명사구 a two-month delay를 목적어로 취하는 전치사 자리로, 문맥상 '두 달의 지연 이후에'라는 의미가 되어야 자연스러우므로 '~ 후에'라는 의미의 전치사 (C) After가 정답이다. (A) Additionally는 부사, (B) Although는 부사절 접속사, (D) Furthermore는 접속부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q108",
                "text": "To boost _____, the Makeup Artist Academy is offering a free starter kit to new students.",
                "options": [
                    {
                        "label": "A",
                        "text": "enroll"
                    },
                    {
                        "label": "B",
                        "text": "enrolled"
                    },
                    {
                        "label": "C",
                        "text": "enrolling"
                    },
                    {
                        "label": "D",
                        "text": "enrollment"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 6,
                "correctAnswer": "D",
                "translation": "메이크업 아티스트 아카데미는 등록을 늘리기 위해 신입생들에게 입문자용 무료 키트를 제공하고 있다.",
                "explanation": "빈칸은 to부정사구 to boost의 목적어 역할을 하는 명사 자리이므로 '등록'이라는 뜻의 명사 (D) enrollment가 정답이다. (A) enroll은 동사, (B) enrolled는 동사/과거분사이므로 품사상 답이 될 수 없고, (C) enrolling을 동명사로 볼 경우 구조상으로는 빈칸에 들어갈 수 있으나, 등록하는 행위를 나타내므로 의미상 boost의 목적어로 적절하지 않다."
            },
            {
                "id": "q109",
                "text": "Because Lectula Furniture Company _____ its delivery times, we were able to set a firm opening date for the new hotel.",
                "options": [
                    {
                        "label": "A",
                        "text": "guarantees"
                    },
                    {
                        "label": "B",
                        "text": "advises"
                    },
                    {
                        "label": "C",
                        "text": "requires"
                    },
                    {
                        "label": "D",
                        "text": "delays"
                    }
                ],
                "classification": "V_VERB",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "렉툴라 가구 회사가 배송 시간을 보장해 주기 때문에 우리는 새 호텔의 개관 날짜를 확정할 수 있었다.",
                "explanation": "문맥상 확실한 호텔 개관일을 확정할 수 있었던 이유가 와야 하므 로 '가구 회사가 배송 시간을 보장해 주기 때문에'라는 의미가 되어야 적절하다. 따라서 '보장하다'를 뜻하는 (A) guarantees가 정답이다. (B)의 advise는 '조언하다', (C)의 require는 '요구하다', (D)의 delay는 '연기하다'라는 의미이다."
            },
            {
                "id": "q110",
                "text": "The computer technician was very _____ but was not able to solve my problem.",
                "options": [
                    {
                        "label": "A",
                        "text": "friendly"
                    },
                    {
                        "label": "B",
                        "text": "neutral"
                    },
                    {
                        "label": "C",
                        "text": "possible"
                    },
                    {
                        "label": "D",
                        "text": "frequent"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "그 컴퓨터 기술자는 매우 친절했지만 나의 문제를 해결하지 못했다.",
                "explanation": "빈칸은 주어인 The computer technician을 보충 설명하는 주격 보어 자리로, '기술자'를 꾸미기에 적절한 형용사를 골라야 한다. 빈칸 뒤에 '그가 문제를 해결하지는 못했다'라는 절이 접속사 but으로 연결되었으므로 빈칸 앞은 상반되는 내용이 되어야 한다. 따라서 '친절한'이라는 뜻의 (A) friendly가 정답이다. (B) neutral은 '중립의', (C) possible은 '가능한', (D) frequent는 '빈번한'이라는 의미이다."
            },
            {
                "id": "q111",
                "text": "To make room for conference attendees, _____ visitors to the office building should use the rear parking area tomorrow.",
                "options": [
                    {
                        "label": "A",
                        "text": "regular"
                    },
                    {
                        "label": "B",
                        "text": "regularly"
                    },
                    {
                        "label": "C",
                        "text": "regularize"
                    },
                    {
                        "label": "D",
                        "text": "regularity"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "회의 참석자를 위한 공간을 마련하기 위해, 사무실 건물의 정기 방문객들은 내일 뒤쪽 주차장을 이용해야 한다.",
                "explanation": "빈칸에는 명사 visitors를 수식하는 형용사 또는 visitors와 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '정기적인 방문객들'이 되어야 자연스러우므로 형용사 (A) regular(정기적인)가 정답이다. (B) regularly는 부사, (C) regularize는 동사이고, 명사 (D) regularity는 '질서, 규칙적임'을 의미하기 때문에 visitors와 복합명사를 이루기에 적절하지 않으므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q112",
                "text": "Employees must wear their security badge in a way that is _____ visible when in the building.",
                "options": [
                    {
                        "label": "A",
                        "text": "clearly"
                    },
                    {
                        "label": "B",
                        "text": "recently"
                    },
                    {
                        "label": "C",
                        "text": "evenly"
                    },
                    {
                        "label": "D",
                        "text": "secretly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "직원들은 건물 내에 있을 때 분명히 알아볼 수 있는 방법으로 보안 배지를 착용해야 한다.",
                "explanation": "빈칸 뒤 형용사 visible을 수식하기에 적절한 부사를 고르는 문제이다. 문맥상 '분명히 알아볼 수 있는 방법'이라는 의미가 되어야 하므 로 '분명히'라는 뜻의 (A) clearly가 정답이다. (B) recently는 '최근에', (C) evenly는 '고르게', (D) secretly는 '비밀리에, 몰래'라는 의미이다."
            },
            {
                "id": "q113",
                "text": "Ms. Phon wanted to attend the gallery opening; _____, the inclement weather made that impossible.",
                "options": [
                    {
                        "label": "A",
                        "text": "therefore"
                    },
                    {
                        "label": "B",
                        "text": "following"
                    },
                    {
                        "label": "C",
                        "text": "however"
                    },
                    {
                        "label": "D",
                        "text": "for example"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "폰 씨는 갤러리 개관식에 참석하기를 원했지만 악천후로 인해 참석할 수 없었다.",
                "explanation": "빈칸 앞의 세미콜론이 두 개의 완전한 문장을 연결하고 있으므로 빈칸에는 두 문장을 자연스럽게 연결할 접속부사가 들어가야 한다. 개관식 참석을 원했다는 앞 문장과 악천후로 불가능했다는 뒤 문장이 상반된 내용이므로 역접 관계를 나타내는 (C) however가 정답이다. 접속부사(A) therefore는 '그러므로', (D) for example은 '예를 들어'이므로 문맥상 어울리지 않고, (B) following은 '~ 후에'라는 뜻의 전치사로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q114",
                "text": "Giving leadership tasks to warehouse package handlers often _____ them to work more productively.",
                "options": [
                    {
                        "label": "A",
                        "text": "adopts"
                    },
                    {
                        "label": "B",
                        "text": "reinforces"
                    },
                    {
                        "label": "C",
                        "text": "motivates"
                    },
                    {
                        "label": "D",
                        "text": "attracts"
                    }
                ],
                "classification": "V_VERB",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "창고 소포 담당자들에게 리더십 과제를 주는 것은 종종 그들이 더 생산적으로 작업하도록 동기를 부여해 준다.",
                "explanation": "빈칸 뒤 목적어 them 뒤로 목적격 보어 역할을 하는 to부정사가 있고, '그들이 더 생산적으로 작업하도록 동기를 부여해 준다'라는 내용이 되어야 적절하므로 '동기를 부여하다'라는 뜻의 (C) motivates가 정답이다. motivate는 「motivate+목적어 + to부정사의 5형식 구조로 '...이 ~하도록 동기를 부여하다'라는 의미를 나타낸다. (A)의 adopt는 '채택하다', (B)의 reinforce는 '강화하다', (D)의 attract는 '끌어들이다'라는 의미이다."
            },
            {
                "id": "q115",
                "text": "Kaybing Construction works _____ on large commercial projects in the Newfoundland area.",
                "options": [
                    {
                        "label": "A",
                        "text": "exclusively"
                    },
                    {
                        "label": "B",
                        "text": "exclusive"
                    },
                    {
                        "label": "C",
                        "text": "exclusivity"
                    },
                    {
                        "label": "D",
                        "text": "exclusives"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "케이빙 건설은 뉴펀들랜드 지역에서 대형 상업 프로젝트를 독점하고 있다.",
                "explanation": "works는 목적어가 필요 없는 자동사로, 빈칸이 없어도 완전한 절이 이루어지므로 빈칸에는 동사 works를 수식하는 부사가 들어가야 한다. 따라서 '독점적으로'라는 뜻의 부사 (A) exclusively가 정답이다. (B) exclusive는 형용사/명사, (C) exclusivity는 명사, (D) exclusives는 명사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q116",
                "text": "Carly Logan plans _____, so Alan Zill has volunteered to be the stamp club's next treasurer.",
                "options": [
                    {
                        "label": "A",
                        "text": "resigning"
                    },
                    {
                        "label": "B",
                        "text": "to resign"
                    },
                    {
                        "label": "C",
                        "text": "resigns"
                    },
                    {
                        "label": "D",
                        "text": "to have resigned"
                    }
                ],
                "classification": "G_VERB",
                "testId": 6,
                "correctAnswer": "B",
                "translation": "칼리 로건이 사임할 계획이어서 앨런 질은 우표 클럽의 다음 회계 담당자가 되기를 자청했다.",
                "explanation": "동사 plans는 to부정사를 목적어로 취하는 동사이므로 보기에서 (B) to resign과 (D) to have resigned 중 하나를 선택해야 한다. 동사 plan은 앞으로 할 일을 계획하는 것이므로 (B) to resign이 정답이다. (D) to have resigned는 완료 부정사로 주절의 시제인 현재 시제보다 앞선 과거 시제를 나타내므로 미래 계획의 의미를 지닌 plan의 목적어로 쓰일 수 없다. (A) resigning은 현재분사/동명사, (C) resigns는 동사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q117",
                "text": "Although the housing market slowed _____ the summer months, sales began to pick up again in the autumn.",
                "options": [
                    {
                        "label": "A",
                        "text": "apart"
                    },
                    {
                        "label": "B",
                        "text": "even"
                    },
                    {
                        "label": "C",
                        "text": "only"
                    },
                    {
                        "label": "D",
                        "text": "over"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "D",
                "translation": "여름 몇 달간 주택 시장이 주춤했지만 가을에 매매가 다시 살아나기 시작했다.",
                "explanation": "빈칸 앞에 부사절 접속사 Although가 이끄는 완전한 절(the housing market slowed)이 있고 뒤에 명사구 the summer months가 있으므로 빈칸에는 전치사가 들어가야 한다. 따라서 기간 명사와 함께 쓰여 '~ 동안'을 의미하는 전치사 (D) over가 정답이다. (A) apart는 형용사/부사, (B) even은 형용사/부사/동사, (C) only는 형용사/부사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q118",
                "text": "To remain fully functional, the exercise machines need to be cleaned _____",
                "options": [
                    {
                        "label": "A",
                        "text": "rather"
                    },
                    {
                        "label": "B",
                        "text": "almost"
                    },
                    {
                        "label": "C",
                        "text": "routinely"
                    },
                    {
                        "label": "D",
                        "text": "openly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "완전한 기능을 유지하려면 운동 기계를 정기적으로 청소해야 한다.",
                "explanation": "빈칸 앞의 be cleaned를 수식하여 '정기적으로 청소되어야 한다'라는 의미가 되어야 적절하므로 '정기적으로, 일상적으로'라는 뜻의 (C) routinely가 정답이다. (A) rather는 '다소', (B) almost는 '거의', (D) openly는 '공공연히'라는 의미이다."
            },
            {
                "id": "q119",
                "text": "The extended warranty is good for ten years or 100,000 miles, _____ comes first.",
                "options": [
                    {
                        "label": "A",
                        "text": "whoever"
                    },
                    {
                        "label": "B",
                        "text": "either"
                    },
                    {
                        "label": "C",
                        "text": "whichever"
                    },
                    {
                        "label": "D",
                        "text": "another"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "연장 보증은 10년 또는 10만 마일 중 먼저 도달하는 것에 적용됩니다.",
                "explanation": "빈칸 앞에 완전한 절(The extended warranty is good ~)이 있고, 빈칸 뒤에 동사가 있으므로 접속사가 필요하다. 문맥상 '(10년 과 10만 마일 중) 어느 것이 먼저 오든지'라는 의미가 되어야 자연스러우므로 '어느 쪽이든 ~한 것'이라는 뜻으로 주어 역할을 하면서 절을 연결할 수 있는 복합관계대명사 (C) whichever가 정답이다. 이 때, whichever는 부사절 접속사로 쓰여 콤마 앞의 주절을 수식하고 있다. 복합관계대명사 (A) whoever는 '누가 ~하든지'라는 의미로 문맥상 적절하지 않고, (B) either와 (D) another는 부정대명사/수량 형용사로, 접속사 역할을 할 수 없으므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q120",
                "text": "Atlantic Grocers must offer online shopping options or _____ losing customers to other supermarkets.",
                "options": [
                    {
                        "label": "A",
                        "text": "risk"
                    },
                    {
                        "label": "B",
                        "text": "protect"
                    },
                    {
                        "label": "C",
                        "text": "cancel"
                    },
                    {
                        "label": "D",
                        "text": "hold"
                    }
                ],
                "classification": "V_VERB",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "애틀랜틱 식료품점은 온라인 쇼핑 옵션을 제공해야 하고, 그렇지 않으면 다른 슈퍼마켓에 고객을 빼앗길 위험을 감수해야 한다.",
                "explanation": "온라인 쇼핑 옵션을 제공해야 하고 그렇지 않으면(or) '고객을 잃을 위험을 감수하다'라는 의미가 되어야 적절하므로 '위험을 감수하다'를 뜻하는 (A) risk가 정답이다. (B) protect는 '보호하다', (C) cancel은 '취소하다', (D) hold는 '개최하다, 잡다'라는 의미이다."
            },
            {
                "id": "q121",
                "text": "_____ client is assigned to a personal financial adviser to whom inquiries should be addressed.",
                "options": [
                    {
                        "label": "A",
                        "text": "Each"
                    },
                    {
                        "label": "B",
                        "text": "All"
                    },
                    {
                        "label": "C",
                        "text": "Some"
                    },
                    {
                        "label": "D",
                        "text": "Most"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "각 고객은 문의사항을 받게 되는 개인 재무 자문가에게 배정된다.",
                "explanation": "빈칸 뒤에 가산 단수명사인 client가 있으므로 (A) Each가 정답이다. (B) All, (C) Some, (D) Most는 뒤에 복수명사 또는 불가산명사가 와야 하므로 답이 될 수 없다."
            },
            {
                "id": "q122",
                "text": "Mr. Singh wants to form a _____ to explore some employee reward programs.",
                "options": [
                    {
                        "label": "A",
                        "text": "supervisor"
                    },
                    {
                        "label": "B",
                        "text": "suggestion"
                    },
                    {
                        "label": "C",
                        "text": "notification"
                    },
                    {
                        "label": "D",
                        "text": "committee"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 6,
                "correctAnswer": "D",
                "translation": "싱 씨는 몇몇 직원 보상 프로그램을 알아보기 위해 위원회를 구성하고자 한다.",
                "explanation": "to form(구성하다)의 목적어 자리에 들어가기에 적합한 명사를 골라야 하므로 구성할 수 있는 대상이어야 한다. 문맥상 '조사를 위한 위원회를 구성하기를 원한다'라는 내용이 되어야 자연스러우므로 '위원회'를 의미하는 (D) committee가 정답이다. (A) supervisor는 '관리자, 감독', (B) suggestion은 '제안, 의견', (C) notification은 '알림, 통지'라는 의미이다."
            },
            {
                "id": "q123",
                "text": "Please provide your phone number _____ the delivery driver needs to contact you.",
                "options": [
                    {
                        "label": "A",
                        "text": "whereas"
                    },
                    {
                        "label": "B",
                        "text": "despite"
                    },
                    {
                        "label": "C",
                        "text": "if not"
                    },
                    {
                        "label": "D",
                        "text": "in case"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "D",
                "translation": "배달 기사가 연락해야 할 경우에 대비해 전화번호를 알려주십시오.",
                "explanation": "빈칸 뒤에 the delivery driver가 주어, needs가 동사인 완전한 절이 왔으므로 부사절 접속사가 필요하고, 문맥상 '기사가 연락해야 할 경우에 대비하여'라는 내용이 되어야 하므로 '~한 경우에 대비해서'를 뜻하는 부사절 접속사 (D) in case가 정답이다. 부사절 접속사 (A) whereas는 '반면에', (C) if not은 '~이 아니라면'이라는 의미로 문맥상 적절하지 않고, (B) despite는 전치사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q124",
                "text": "_____ of Pondview Tower are required to make rent payments on or before the first day of every month.",
                "options": [
                    {
                        "label": "A",
                        "text": "Owners"
                    },
                    {
                        "label": "B",
                        "text": "Buyers"
                    },
                    {
                        "label": "C",
                        "text": "Tourists"
                    },
                    {
                        "label": "D",
                        "text": "Tenants"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 6,
                "correctAnswer": "D",
                "translation": "폰드뷰 타워의 세입자는 매월 1일 또는 그 전에 임대료를 지불해야 한다.",
                "explanation": "문맥상 빈칸에 들어갈 주어는 매달 임대료를 지불해야 하는 사람이므로 '세입자'를 뜻하는 (D) Tenants가 정답이다. (A)의 owner는 '주인, 소유자', (B)의 buyer는 '구매자', (C)의 tourist는 '관광객'이라는 의미이다."
            },
            {
                "id": "q125",
                "text": "Likoni Hospitality Group, one of Mombasa's largest employers, has a _____ impact on the local economy.",
                "options": [
                    {
                        "label": "A",
                        "text": "considerably"
                    },
                    {
                        "label": "B",
                        "text": "considerable"
                    },
                    {
                        "label": "C",
                        "text": "considering"
                    },
                    {
                        "label": "D",
                        "text": "consideration"
                    }
                ],
                "classification": "G_POS",
                "testId": 6,
                "correctAnswer": "B",
                "translation": "몸바사에서 가장 큰 회사 중 하나인 리코니 호스피탤리티 그룹은 지역 경제에 상당한 영향을 미친다.",
                "explanation": "빈칸에는 명사 impact를 수식하는 형용사 또는 impact와 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '상당한 영향을 미친다'라는 내용이 되어야 자연스러우므로 형용사 (B) considerable(상당한)이 정답이다. (A) considerably는 부사이므로 빈칸에 들어갈 수 없고, impact는 consider(고려하다)의 주체가 아니므로 능동의 의미를 나타내는 현재분사 (C) considering은 답이 될 수 없다. 명사 (D) consideration은 '고려'를 의미하기 때문에 impact와 복합명사를 이루기에 문맥상 적절하지 않다."
            },
            {
                "id": "q126",
                "text": "_____ best sellers, Booksters offers a wide selection of classics and biographies.",
                "options": [
                    {
                        "label": "A",
                        "text": "Besides"
                    },
                    {
                        "label": "B",
                        "text": "Somewhat"
                    },
                    {
                        "label": "C",
                        "text": "Whose"
                    },
                    {
                        "label": "D",
                        "text": "Becoming"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "베스트셀러 이외에도, 북스터스는 다양한 고전 문학과 전기를 제공한다.",
                "explanation": "빈칸은 명사구 best sellers를 목적어로 취하는 전치사 자리로, 문맥상 '베스트셀러 이외에도'라는 의미가 되어야 자연스럽다. 따라서 '~ 이외에도'라는 의미의 전치사 (A) Besides가 정답이다. (B) Somewhat은 부사/명사, (C) Whose는 관계대명사/의문사이고, 현재분사 (D) Becoming은 부사절의 주어가 주절의 주어 Booksters와 일치하지 않기 때문에 분사구문으로 쓰일 수 없으므로 정답이 될 수 없다."
            },
            {
                "id": "q127",
                "text": "New food regulations require all Dean's Burgers packaging to contain the notice that _____ undercooked meat can be harmful.",
                "options": [
                    {
                        "label": "A",
                        "text": "consumer"
                    },
                    {
                        "label": "B",
                        "text": "consumption"
                    },
                    {
                        "label": "C",
                        "text": "consumes"
                    },
                    {
                        "label": "D",
                        "text": "consuming"
                    }
                ],
                "classification": "G_VERB",
                "testId": 6,
                "correctAnswer": "D",
                "translation": "새로운 식품 규정은 모든 딘스 버거스 포장에 덜 익은 고기를 섭취하는 것이 해로울 수 있다는 공지문을 포함할 것을 요구한다.",
                "explanation": "빈칸은 that절의 동사 can be의 주어 자리이므로 명사나 동명사가 들어갈 수 있다. 빈칸 뒤에 목적어 undercooked meat가 있어 '덜 익은 고기를 먹는 것'이라는 내용이 되어야 하므로 동명사 (D) consuming이 정답이다. (A) consumer와 (B) consumption은 명사이므로 뒤에 목적어를 취할 수 없고, (C) consumes은 동사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q128",
                "text": "Each Genutria snack bar contains as much protein as two eggs, with none _____ the fat and cholesterol.",
                "options": [
                    {
                        "label": "A",
                        "text": "of"
                    },
                    {
                        "label": "B",
                        "text": "by"
                    },
                    {
                        "label": "C",
                        "text": "out"
                    },
                    {
                        "label": "D",
                        "text": "minus"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "각각의 제누트리아 스낵바에는 지방과 콜레스테롤 없이 달걀 두 개만큼의 단백질이 들어 있다.",
                "explanation": "빈칸 뒤의 명사구 the fat and cholesterol을 앞의 부정대명사 none에 연결하여 '지방과 콜레스테롤 중 아무것도 없이'라는 의미가 되어야 하므로 '~ 중, ~의'를 뜻하는 (A) of가 정답이다. (B) by는 '~에 의해, ~ 옆에', (C) out은 '~ 밖으로', (D) minus는 '~을 제외한[뺀]'이라는 의미이다."
            },
            {
                "id": "q129",
                "text": "Fisko eyeglass frames come in various _____, including round, square, and oval.",
                "options": [
                    {
                        "label": "A",
                        "text": "sights"
                    },
                    {
                        "label": "B",
                        "text": "methods"
                    },
                    {
                        "label": "C",
                        "text": "shapes"
                    },
                    {
                        "label": "D",
                        "text": "materials"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 6,
                "correctAnswer": "C",
                "translation": "피스코 안경테는 원형, 사각형, 타원형을 포함해 다양한 모양으로 제공된다.",
                "explanation": "형용사 various의 수식을 받는 명사 자리로, 뒤에 전치사 including 과 함께 '원형, 사각형, 타원형'이라는 모양의 예시가 언급된 것으로 보아 '안경테가 다양한 모양으로 제공된다'라는 내용이 되어야 자연스럽다. 따라서 '모양'을 뜻하는 (C) shapes가 정답이다. (A)의 sight는 '시력', (B)의 method는 '방법', (D)의 material는 '자재, 재료'라는 의미이다."
            },
            {
                "id": "q130",
                "text": "The CEO wants a greater portion of next year's budget _____ to research and development.",
                "options": [
                    {
                        "label": "A",
                        "text": "allocated"
                    },
                    {
                        "label": "B",
                        "text": "imprinted"
                    },
                    {
                        "label": "C",
                        "text": "economized"
                    },
                    {
                        "label": "D",
                        "text": "rationalized"
                    }
                ],
                "classification": "V_VERB",
                "testId": 6,
                "correctAnswer": "A",
                "translation": "CEO는 내년 예산의 더 많은 부분을 연구 개발에 할당하기를 원한다.",
                "explanation": "동사 wants의 목적격 보어 자리로, 목적어인 명사구 a greater portion of next year's budget을 보충 설명하기에 적절한 과거분사형의 동사 어휘를 고르는 문제이다. 빈칸 뒤에 '~에'라는 의미를 지닌 to와 함께 예산이 쓰일 사용처가 온 것이 주요 단서로, '예산이 연구 개발에 할당되기를 원한다'라는 내용이 되어야 자연스러우므로 '할당하다'라는 동사의 과거분사형 (A) allocated가 정답이다. (B)의 imprint는 '각인하다', (C)의 economize는 '절약하다', (D)의 rationalize는 '합리화하다'라는 의미이다."
            }
        ]
    },
    {
        "testId": 7,
        "title": "Part 5 Real Test 7",
        "questions": [
            {
                "id": "q101",
                "text": "Passengers must keep _____ boarding passes and luggage with them at all times.",
                "options": [
                    {
                        "label": "A",
                        "text": "their"
                    },
                    {
                        "label": "B",
                        "text": "his"
                    },
                    {
                        "label": "C",
                        "text": "my"
                    },
                    {
                        "label": "D",
                        "text": "our"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "승객들은 항상 그들의 탑승권과 수하물을 소지해야 합니다.",
                "explanation": "동사 must keep의 목적어인 명사구 boarding passes and luggage를 수식하는 자리이므로 소유격 인칭대명사가 들어가야 한다. 빈칸 앞에 주어로 쓰인 복수명사 Passengers를 대신해 '그들의 탑승권과 수하물'이라는 내용이 되어야 하므로 3인칭 복수 인칭대명사 (A) their가 정답이다."
            },
            {
                "id": "q102",
                "text": "The company's policy allows business travel by _____ train and airplane.",
                "options": [
                    {
                        "label": "A",
                        "text": "both"
                    },
                    {
                        "label": "B",
                        "text": "either"
                    },
                    {
                        "label": "C",
                        "text": "further"
                    },
                    {
                        "label": "D",
                        "text": "hardly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "회사의 정책은 출장으로 기차와 비행기를 모두 이용하는 것을 허용합니다.",
                "explanation": "빈칸 뒤 train과 airplane 사이에 and가 있으므로, and와 함께 상관 접속사 구문을 이루어 'A와 B 둘 다'라는 뜻을 완성하는 (A) both가 정답이다. (B) either는 or와 상관접속사를 이루어 'A 또는 B 둘 중 하나'를 뜻하고, (C) further는 '추가의'라는 의미의 형용사로 문맥상 적절하지 않으며, (D) hardly는 부사이므로 명사를 수식하는 자리에 들어갈 수 없다."
            },
            {
                "id": "q103",
                "text": "The production technicians are _____ for maintaining our factory equipment.",
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
                        "text": "responsibilities"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "B",
                "translation": "생산 기술자들은 공장 장비를 유지 관리할 책임을 맡고 있습니다.",
                "explanation": "빈칸은 be동사 뒤 주격 보어 자리이므로 형용사나 명사가 들어갈 수 있다. '장비를 관리할 책임을 맡고 있다'라는 내용이 되어야 하므로 전치사 for와 함께 '~을 책임지는, ~을 담당하는'을 뜻하는 형용사 (B) responsible이 정답이다. 주어인 technicians와 동격이 아니므로 '책임, 책무'를 뜻하는 명사 (C) responsibility와 (D) responsibilities는 답이 될 수 없으며, 부사인 (A) responsibly는 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q104",
                "text": "The team found Ms. Dietrich's advice on managing office staff to be especially _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "helpful"
                    },
                    {
                        "label": "B",
                        "text": "thankful"
                    },
                    {
                        "label": "C",
                        "text": "regular"
                    },
                    {
                        "label": "D",
                        "text": "extra"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "그 팀은 사무실 직원 관리에 관한 디트리히 씨의 조언이 특히 도움이 된다고 생각했습니다.",
                "explanation": "「주어(The team)+동사(found)+목적어 (Ms. Dietrich's advice)+목적격 보어(to be especially --_______)」 구조의 5형식 문장이다. 따라서 빈칸에는 to be의 보어 역할을 하며, 목적어인 '디트리히 씨의 조언(Ms. Dietrich's advice)'을 보충 설명하기에 적절한 형용사를 골라야 한다. '조언이 특히 도움이 된다'라는 내용이 되어야 자연스러우므로 '도움이 되는'이라는 의미의 (A) helpful이 정답이다. (B) thankful은 사람이 주체로 쓰여 '고맙게 여기는'이라는 의미를 나타내고, (C) regular는 '정기적인', (D) extra는 '추가의'라는 뜻으로 문맥에 적합하지 않다."
            },
            {
                "id": "q105",
                "text": "The film crew _____ in Namibia earlier this week to prepare for the promotional tourism campaign.",
                "options": [
                    {
                        "label": "A",
                        "text": "to arrive"
                    },
                    {
                        "label": "B",
                        "text": "having arrived"
                    },
                    {
                        "label": "C",
                        "text": "arrived"
                    },
                    {
                        "label": "D",
                        "text": "arriving"
                    }
                ],
                "classification": "G_VERB",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "촬영 팀은 홍보용 관광 캠페인을 준비하기 위해 이번 주 초에 나미비아에 도착했습니다.",
                "explanation": "The film crew가 주어인 문장에 동사가 보이지 않으므로 빈칸은 동사 자리이다. 따라서 정답은 (C) arrived이다. (A) to arrive는 to부정사, (B) having arrived와 (D) arriving은 동명사/분사이므로 동사 자리에 들어갈 수 없다."
            },
            {
                "id": "q106",
                "text": "The committee expects to be finished with the negotiations _____ 4:00 Ρ.Μ.",
                "options": [
                    {
                        "label": "A",
                        "text": "over"
                    },
                    {
                        "label": "B",
                        "text": "until"
                    },
                    {
                        "label": "C",
                        "text": "on"
                    },
                    {
                        "label": "D",
                        "text": "by"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 7,
                "correctAnswer": "D",
                "translation": "위원회는 협상이 오후 4시까지 끝날 것으로 예상합니다.",
                "explanation": "문맥상 '협상이 오후 4시까지 끝난다'는 의미가 되어야 적절하므로 특정 시점을 나타내는 표현과 함께 쓰여 '~까지'를 뜻하는 (D) by가 정답이다. 참고로, (B) until(~까지)은 어느 시점까지 계속되는 상태를 의미할 때 쓰이므로 '~까지 끝나다'와 같이 행위의 완료를 나타내는 문장에는 어울리지 않는다."
            },
            {
                "id": "q107",
                "text": "United Medical Board is an _____ panel of physicians that makes recommendations for hospital improvements.",
                "options": [
                    {
                        "label": "A",
                        "text": "expertise"
                    },
                    {
                        "label": "B",
                        "text": "expert"
                    },
                    {
                        "label": "C",
                        "text": "expertness"
                    },
                    {
                        "label": "D",
                        "text": "expertly"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "B",
                "translation": "유나이티드 메디컬 보드는 병원 개선을 위한 권고안을 제시하는 의사 전문가 위원단입니다.",
                "explanation": "앞에 부정관사 an, 뒤에 명사 panel이 있으므로 빈칸에는 panel을 수식하는 형용사나 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상으로 '전문가 패널'이라는 의미가 되어야 자연스러우므로 '전문가의'라는 뜻의 형용사 (B) expert가 정답이다. 명사인 (A) expertise(전문 지식)와 (C) expertness(숙달)는 panel과 복합명사를 이룰 수 없고, (D) expertly(능숙하게)는 부사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q108",
                "text": "Digital payments are _____ accepted at all Southern Coach bus stations.",
                "options": [
                    {
                        "label": "A",
                        "text": "tightly"
                    },
                    {
                        "label": "B",
                        "text": "far"
                    },
                    {
                        "label": "C",
                        "text": "after"
                    },
                    {
                        "label": "D",
                        "text": "now"
                    }
                ],
                "classification": "V_ADV",
                "testId": 7,
                "correctAnswer": "D",
                "translation": "이제 모든 서던 코치 버스 정류장에서 디지털 결제가 가능합니다.",
                "explanation": "빈칸 앞의 be동사 are가 현재 시제이고, 문맥상 '이제 디지털 결제가 가능하다'라는 의미가 되어야 적합하므로 '이제, 지금'을 뜻하는 (D) now가 정답이다."
            },
            {
                "id": "q109",
                "text": "The fund-raising event for the library was successful, _____ the author's reading was canceled.",
                "options": [
                    {
                        "label": "A",
                        "text": "seldom"
                    },
                    {
                        "label": "B",
                        "text": "though"
                    },
                    {
                        "label": "C",
                        "text": "rarely"
                    },
                    {
                        "label": "D",
                        "text": "secondly"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 7,
                "correctAnswer": "B",
                "translation": "작가의 낭독회는 취소되었지만 도서관을 위한 모금 행사는 성공적이었습니다.",
                "explanation": "빈칸 뒤 완전한 절(the author's reading was canceled)을 이끄는 접속사 자리이므로 '비록 ~이지만'이라는 뜻의 부사절 접속사 (B) though가 정답이다. (A) seldom, (C) rarely, (D) secondly 모두 부사이므로 오답이다."
            },
            {
                "id": "q110",
                "text": "Το _____ the status of your delivery, select the Track Order option in the drop-down menu.",
                "options": [
                    {
                        "label": "A",
                        "text": "place"
                    },
                    {
                        "label": "B",
                        "text": "want"
                    },
                    {
                        "label": "C",
                        "text": "check"
                    },
                    {
                        "label": "D",
                        "text": "look"
                    }
                ],
                "classification": "V_VERB",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "배송 상태를 확인하려면 드롭다운 메뉴에서 주문 추적 옵션을 선택하세요.",
                "explanation": "부사적 역할을 하는 to부정사의 to 뒤에 들어갈 동사 어휘를 고르는 문제이다. the status를 목적어로 취해 '배송 상태를 확인하기 위해'라는 내용이 되어야 하므로 '확인하다'라는 뜻의 타동사 (C) check가 정답이다. (A) place는 '배치하다', (B) want는 '원하다'라는 뜻으로 문맥상 어울리지 않고, (D) look은 자동사로 목적어를 취할 수 없다."
            },
            {
                "id": "q111",
                "text": "Our project-based mentoring approach enables executives with limited time _____ junior staff.",
                "options": [
                    {
                        "label": "A",
                        "text": "to counsel"
                    },
                    {
                        "label": "B",
                        "text": "should counsel"
                    },
                    {
                        "label": "C",
                        "text": "counseling"
                    },
                    {
                        "label": "D",
                        "text": "counseled"
                    }
                ],
                "classification": "G_VERB",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "우리의 프로젝트 기반 멘토링 접근법은 한정된 시간을 가진 임원들이 후배 직원들에게 상담을 제공할 수 있게 해 줍니다.",
                "explanation": "「enable+목적어(executives with limited time)+목적격 보어」의 5형식 문장 구조에서 목적격 보어에 해당하는 자리로, 뒤에 오는 명사구 junior staff를 목적어로 취한다. 5형식 동사 enable의 목적격 보어로는 to부정사가 와야 하므로 (A) to counsel이 정답이다. 본동사인 (B) should counsel, 동명사/현재분사인 (C) counseling, 동사/과거분사인 (D) counseled는 enable의 목적격 보어 자리에 들어갈 수 없다."
            },
            {
                "id": "q112",
                "text": "Mr. Yerkes is updating our quarterly sales _____ after receiving the final report from the Boston office.",
                "options": [
                    {
                        "label": "A",
                        "text": "measures"
                    },
                    {
                        "label": "B",
                        "text": "grounds"
                    },
                    {
                        "label": "C",
                        "text": "instructions"
                    },
                    {
                        "label": "D",
                        "text": "figures"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 7,
                "correctAnswer": "D",
                "translation": "여키스 씨는 보스턴 사무소로부터 최종 보고서를 받은 뒤 우리의 분기별 판매 수치를 업데이트하고 있습니다.",
                "explanation": "빈칸에는 sales와 함께 복합명사를 이루어 동사 is updating의 목적어 역할을 하는 단어가 들어가야 한다. 분기별로 업데이트할 대상으로 적절한 것은 판매 수치이므로 '수치'라는 뜻의 (D) figures가 정답이다. 참고로, (A)의 measure는 '조치', (B)의 ground는 '근거', (C)의 instruction은 '지시'라는 뜻으로 문맥상 적절하지 않다."
            },
            {
                "id": "q113",
                "text": "_____ up your desk with beautiful paper products from Norimi Stationery.",
                "options": [
                    {
                        "label": "A",
                        "text": "Brightens"
                    },
                    {
                        "label": "B",
                        "text": "Brighten"
                    },
                    {
                        "label": "C",
                        "text": "Brightened"
                    },
                    {
                        "label": "D",
                        "text": "Brightening"
                    }
                ],
                "classification": "V_VERB",
                "testId": 7,
                "correctAnswer": "B",
                "translation": "노리미 문구의 아름다운 종이 제품으로 여러분의 책상에 활기를 주세요.",
                "explanation": "문장에서 주어와 동사가 보이지 않으므로 빈칸은 주어 You가 생략된 명령문의 동사 자리이다. 따라서 동사원형인 (B) Brighten이 정답이다. (A) Brightens는 3인칭 단수동사, (C) Brightened는 동사/과거분사, (D) Brightening은 동명사/현재분사이므로 명령문의 동사 자리에 들어갈 수 없다."
            },
            {
                "id": "q114",
                "text": "Ultitemp, an application that allows users to _____ room temperature remotely, is currently available only in Asia.",
                "options": [
                    {
                        "label": "A",
                        "text": "control"
                    },
                    {
                        "label": "B",
                        "text": "impose"
                    },
                    {
                        "label": "C",
                        "text": "announce"
                    },
                    {
                        "label": "D",
                        "text": "encourage"
                    }
                ],
                "classification": "V_VERB",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "사용자가 실내 온도를 원격으로 조절할 수 있게 해 주는 애플리케이션 얼티템프는 현재 아시아에서만 이용 가능합니다.",
                "explanation": "동사 allows의 목적격 보어로 쓰인 to부정사의 to 뒤에 들어갈 동사 어휘를 고르는 문제이다. room temperature를 목적어로 취해 '사용자가 실내 온도를 원격으로 조절할 수 있게 해 준다'라는 의미가 되어야 하므로 '조절하다'라는 뜻의 (A) control이 정답이다. (B) impose는 '(세금 등을) 부과하다', (C) announce는 '발표하다', (D) encourage는 '장려하다'라는 의미이다."
            },
            {
                "id": "q115",
                "text": "_____ the cost of travel, the cost of attending the conference is reasonable.",
                "options": [
                    {
                        "label": "A",
                        "text": "Along"
                    },
                    {
                        "label": "B",
                        "text": "Even if"
                    },
                    {
                        "label": "C",
                        "text": "Aside from"
                    },
                    {
                        "label": "D",
                        "text": "Because"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "여행 경비를 제외하면 학회 참석 비용은 합리적입니다.",
                "explanation": "빈칸은 명사구 the cost of travel과 함께 콤마 뒤 완전한 절(the cost is reasonable)을 수식하는 자리이므로 전치사가 들어가야 한다. 또한 '이동 경비를 제외하면 비용이 합리적이다'라는 내용이 되어야 적절하므로 '~을 제외하고, ~외에는'을 뜻하는 전치사 (C) Aside from이 정답이다. (A) Along은 '~을 따라'라는 뜻의 위치 전치사로 의미상 부적절하고, '비록 ~일지라도'의 의미인 (B) Even if와 '~이기 때문에'라는 뜻의 (D) Because는 부사절 접속사로 뒤에 완전한 절이 와야 하므로 오답이다."
            },
            {
                "id": "q116",
                "text": "Customers are _____ anticipating the latest model pickup truck from Askio Automobiles.",
                "options": [
                    {
                        "label": "A",
                        "text": "eagerly"
                    },
                    {
                        "label": "B",
                        "text": "sharply"
                    },
                    {
                        "label": "C",
                        "text": "voluntarily"
                    },
                    {
                        "label": "D",
                        "text": "rapidly"
                    }
                ],
                "classification": "V_ADV",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "고객들은 아스키오 자동차의 최신 모델 픽업트럭을 간절히 기다리고 있습니다.",
                "explanation": "동사 are anticipating을 수식하여 '고객들이 간절히 기다리고 있다'는 의미가 되어야 자연스러우므로 '간절히'를 뜻하는 (A) eagerly가 정답이다. (B) sharply는 '날카롭게', (C) voluntarily는 '자발적으로', (D) rapidly는 '빠르게'라는 뜻으로 문맥상 어울리지 않는다."
            },
            {
                "id": "q117",
                "text": "Once you have Mr. Garcia's _____, please post the job listing to the usual Web sites.",
                "options": [
                    {
                        "label": "A",
                        "text": "approve"
                    },
                    {
                        "label": "B",
                        "text": "approves"
                    },
                    {
                        "label": "C",
                        "text": "approval"
                    },
                    {
                        "label": "D",
                        "text": "approving"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "가르시아 씨의 승인을 받는 대로 늘 이용하는 웹사이트들에 구인 목록을 게시해 주세요.",
                "explanation": "동사 have의 목적어 자리로, 빈칸은 소유격 Mr. Garcia's의 수식을 받는 명사 자리이다. 따라서 '승인'이라는 의미의 명사 (C) approval이 정답이다. (A) approve와 (B) approves는 동사이므로 품사상 빈칸에 들어갈 수 없고, (D) approving은 동명사로 쓰일 경우 명사 자리에는 가능하나 뒤에 목적어가 와야 하므로 답이 될 수 없다."
            },
            {
                "id": "q118",
                "text": "Dabby's Restaurant broadened its customer base by making _____ changes to its menu.",
                "options": [
                    {
                        "label": "A",
                        "text": "extensive"
                    },
                    {
                        "label": "B",
                        "text": "precious"
                    },
                    {
                        "label": "C",
                        "text": "commercial"
                    },
                    {
                        "label": "D",
                        "text": "accurate"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "다비 레스토랑은 메뉴에 광범위한 변화를 줌으로써 고객층을 넓혔습니다.",
                "explanation": "빈칸 앞에 '고객층을 넓혔다(broadened its customer base)'는 내용이 온 것으로 보아, 빈칸에는 이를 뒷받침하며 change를 수식하기에 알맞은 형용사가 들어가야 한다. '광범위한 변화'라는 의미가 되어야 적합하므로 '광범위한, 폭넓은'이라는 뜻의 (A) extensive가 정답이다. (B) precious는 '귀중한', (C) commercial은 '상업의', (D) accurate은 '정확한'이라는 의미이다."
            },
            {
                "id": "q119",
                "text": "The redesigned intersection _____ shortens the street-crossing distance for pedestrians, making it safer.",
                "options": [
                    {
                        "label": "A",
                        "text": "effectively"
                    },
                    {
                        "label": "B",
                        "text": "effects"
                    },
                    {
                        "label": "C",
                        "text": "effective"
                    },
                    {
                        "label": "D",
                        "text": "effected"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "재설계된 교차로는 보행자용 건널목 거리를 효과적으로 단축하여 더 안전합니다.",
                "explanation": "주어 The redesigned intersection과 동사 shortens 사이에서 동사를 수식하는 부사 자리이다. 따라서 '효과적으로'라는 뜻의 부사 (A) effectively가 정답이다. (B) effects는 동사/명사, (C) effective는 형용사, (D) effected는 동사/과거분사이므로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q120",
                "text": "Workshop attendees are asked to _____ from asking questions until the end of the formal presentation.",
                "options": [
                    {
                        "label": "A",
                        "text": "refrain"
                    },
                    {
                        "label": "B",
                        "text": "forbid"
                    },
                    {
                        "label": "C",
                        "text": "retreat"
                    },
                    {
                        "label": "D",
                        "text": "hesitate"
                    }
                ],
                "classification": "V_VERB",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "워크숍 참석자들은 공식 프레젠테이션이 끝날 때까지 질문을 자제해 달라는 요청을 받습니다.",
                "explanation": "「be asked + to부정사의 수동태 구문에서 to부정사의 to 뒤에 들어갈 동사 어휘를 고르는 문제로, 빈칸 뒤에 목적어가 없는 것으로 보아 전치사 from과 함께 쓸 수 있는 자동사를 골라야 한다. '질문을 자제해 줄 것을 요청받는다'는 내용이 되어야 자연스러우므로 전치사 from과 함께 쓰여 '~을 자제하다, ~을 삼가다'를 뜻하는 (A) refrain이 정답이다. (B) forbid(금하다)는 타동사로 뒤에 목적어가 필요하고, 자동사 (C) retreat(후퇴하다)와 (D) hesitate(망설이다)는 문맥상 어울리지 않으므로 답이 되지 않는다."
            },
            {
                "id": "q121",
                "text": "The Tamano Foundation accepts grant _____ related to a wide range of scientific research.",
                "options": [
                    {
                        "label": "A",
                        "text": "proposes"
                    },
                    {
                        "label": "B",
                        "text": "proposed"
                    },
                    {
                        "label": "C",
                        "text": "proposals"
                    },
                    {
                        "label": "D",
                        "text": "proposing"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "타마노 재단은 다양한 과학 연구와 관련된 보조금 제안을 접수합니다.",
                "explanation": "빈칸은 grant와 함께 복합명사를 이루어 동사 accepts의 목적어 역할을 하는 명사 자리로, '보조금 제안'이라는 복합명사를 만드는 '제안'이라는 뜻의 명사 (C) proposals가 정답이다. (A) proposes는 동사, (B) proposed는 동사/과거분사, (D) proposing은 동명사/현재분사이므로 빈칸에 적합하지 않다."
            },
            {
                "id": "q122",
                "text": "Gateway Electronics will cancel any orders that have not been picked up _____ five days.",
                "options": [
                    {
                        "label": "A",
                        "text": "about"
                    },
                    {
                        "label": "B",
                        "text": "during"
                    },
                    {
                        "label": "C",
                        "text": "within"
                    },
                    {
                        "label": "D",
                        "text": "from"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "게이트웨이 전자는 5일 이내에 찾아가지 않는 주문은 취소할 것입니다.",
                "explanation": "빈칸 뒤 기간을 나타내는 시간 표현 five days와 함께 '5일 이내에'라는 의미를 나타내야 적절하므로 (C) within이 정답이다. (B) during은 특정 기간을 나타내는 명사와 함께 쓰여 '~ 동안에'라는 의미를 나타내며, 바로 뒤에 숫자 표현이 오지 않으므로 오답이다."
            },
            {
                "id": "q123",
                "text": "_____ who arrives at the company parking garage after 10:00 A.M. must contact security for an access code.",
                "options": [
                    {
                        "label": "A",
                        "text": "Each"
                    },
                    {
                        "label": "B",
                        "text": "Those"
                    },
                    {
                        "label": "C",
                        "text": "Everything"
                    },
                    {
                        "label": "D",
                        "text": "Anyone"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "D",
                "translation": "오전 10시 이후 회사 주차장에 도착하는 사람은 누구나 출입 코드를 위해 보안실에 연락해야 합니다.",
                "explanation": "빈칸은 주격 관계대명사 who의 선행사 자리로, 사람을 나타내는 동시에 관계사절의 단수동사 arrives와 수 일치하는 대명사가 들어가야 한다. 따라서 '누구나[든지]'를 뜻하는 (D) Anyone이 정답이다. (A) Each는 관계사 who절의 수식을 받지 않고, (B) Those는 복수대명사이므로 관계사절에 복수동사 arrive가 쓰여야 하며, (C) Everything은 사물을 뜻하므로 사람 선행사를 수식하는 관계사 who 앞에 올 수 없다."
            },
            {
                "id": "q124",
                "text": "To get to the conference room, turn left _____ after passing the employee cafeteria.",
                "options": [
                    {
                        "label": "A",
                        "text": "immediately"
                    },
                    {
                        "label": "B",
                        "text": "recently"
                    },
                    {
                        "label": "C",
                        "text": "originally"
                    },
                    {
                        "label": "D",
                        "text": "lately"
                    }
                ],
                "classification": "V_ADV",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "회의실로 가려면 직원 식당을 지나자마자 바로 왼쪽으로 도세요.",
                "explanation": "빈칸 뒤 시간 전치사구 after passing the employee cafeteria와 함께 '직원 식당을 지나자마자'라는 의미가 되어야 자연스럽다. 따라서 시간 전치사 after나 before 앞에 쓰여 각각 '~한 직후', '~하기 직전'이라는 의미를 나타내는 '즉시'라는 뜻의 (A) immediately가 정답이다. (B) recently와 (D) lately는 '최근에'라는 뜻으로 주로 과거나 현재완료 동사를 수식하며, (C) originally는 '원래'라는 뜻으로 문맥상 어울리지 않는다."
            },
            {
                "id": "q125",
                "text": "The wellness _____ at Trayer Media Group directly led to greater employee satisfaction with the company.",
                "options": [
                    {
                        "label": "A",
                        "text": "initiate"
                    },
                    {
                        "label": "B",
                        "text": "initiator"
                    },
                    {
                        "label": "C",
                        "text": "initiated"
                    },
                    {
                        "label": "D",
                        "text": "initiative"
                    }
                ],
                "classification": "G_POS",
                "testId": 7,
                "correctAnswer": "D",
                "translation": "트레이어 미디어 그룹의 건강 관리 계획은 곧바로 회사에 대한 더 높은 직원 만족으로 이어졌습니다.",
                "explanation": "빈칸 앞의 wellness와 함께 복합명사를 이루어 동사 led의 주어 역할을 하는 명사 자리이다. 따라서 '계획, (사업) 활동'이라는 뜻의 명사 (D) initiative가 정답이다. (A) initiate는 동사, (C) initiated는 동사/과거분사로 품사상 빈칸에 들어갈 수 없고, (B) initiator는 '개시자'라는 뜻의 명사로 문맥상 어울리지 않는다."
            },
            {
                "id": "q126",
                "text": "We will keep producing our signature shoe designs _____ there is demand for them.",
                "options": [
                    {
                        "label": "A",
                        "text": "or else"
                    },
                    {
                        "label": "B",
                        "text": "as long as"
                    },
                    {
                        "label": "C",
                        "text": "as well as"
                    },
                    {
                        "label": "D",
                        "text": "in between"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 7,
                "correctAnswer": "B",
                "translation": "우리는 수요가 있는 한 우리의 대표 신발 디자인을 계속 생산할 것입니다.",
                "explanation": "빈칸 뒤 완전한 절(there is demand for them)을 이끌어 앞의 주절(We will keep ~ shoe designs)을 수식하는 부사절 접속사 자리이다. '수요가 있는 한'이라는 의미가 되어야 적절하므로 '~하는 한'이라는 의미의 부사절 접속사 (B) as long as가 정답이다. (A) or else는 '그렇지 않으면'이라는 뜻으로 주로 명령문 뒤에서 절을 연결할 때 쓰이고, (C) as well as는 '~에 더하여'라는 상관접속사이며, (D) in between은 '중간에'라는 뜻의 구전치사로 절을 연결할 수 없다."
            },
            {
                "id": "q127",
                "text": "Regular applications of fertilizer improve seedling health and _____ enhance the growth of leafy vegetables.",
                "options": [
                    {
                        "label": "A",
                        "text": "drama"
                    },
                    {
                        "label": "B",
                        "text": "dramatic"
                    },
                    {
                        "label": "C",
                        "text": "dramatically"
                    },
                    {
                        "label": "D",
                        "text": "dramatize"
                    }
                ],
                "classification": "V_ADV",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "정기적인 비료의 사용은 묘목의 건강을 증진시키고 잎이 많은 채소의 성장을 급격하게 향상시킵니다.",
                "explanation": "주어 Regular applications of fertilizer에 두 개의 동사구 improve ~와 enhance ~가 등위접속사 and로 연결된 문장으로, 빈칸은 두 번째 동사 enhance를 수식하는 부사 자리이다. 따라서 '급격하게, 극적으로'라는 뜻의 부사 (C) dramatically가 정답이다. (A) drama는 명사, (B) dramatic은 형용사, (D) dramatize는 동사로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q128",
                "text": "Wantner Manufacturing received this year's Top Employer Award in _____ of its people-centered workplace environment.",
                "options": [
                    {
                        "label": "A",
                        "text": "service"
                    },
                    {
                        "label": "B",
                        "text": "accordance"
                    },
                    {
                        "label": "C",
                        "text": "recognition"
                    },
                    {
                        "label": "D",
                        "text": "dedication"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 7,
                "correctAnswer": "C",
                "translation": "원트너 제조는 사람 중심의 직장 환경을 인정받아 올해 최고 고용주 상을 수상했습니다.",
                "explanation": "빈칸이 전치사 in과 of 사이에 있고, '사람 중심의 직장 환경을 인정받아 수상했다'라는 의미가 되어야 자연스러우므로 in recognition of의 형태로 쓰여 '~을 인정하여'를 뜻하는 (C) recognition(인정)이 정답이다. (B) accordance(일치, 부합)는 in accordance with의 형태로 '~에 따라서'라는 뜻으로 쓰이고, (D) dedication(헌신)은 뒤에 전치사 to와 어울려 쓰여 '~에 헌신'이라는 의미를 나타낸다."
            },
            {
                "id": "q129",
                "text": "The editor noted some _____ content and marked the text to be deleted.",
                "options": [
                    {
                        "label": "A",
                        "text": "repetition"
                    },
                    {
                        "label": "B",
                        "text": "repetitious"
                    },
                    {
                        "label": "C",
                        "text": "repetitiously"
                    },
                    {
                        "label": "D",
                        "text": "repetitiousness"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 7,
                "correctAnswer": "B",
                "translation": "편집자는 일부 반복되는 내용을 발견하고 삭제되어야 할 글에 표시해야 합니다.",
                "explanation": "빈칸 앞에 한정사 some, 뒤에 명사 content가 있으므로 명사를 수식하는 '반복되는'이라는 뜻의 형용사 (B) repetitious가 정답이다. (A) repetition과 (D) repetitiousness는 명사로 content와 복합명사를 만들기에 적절하지 않고, (C) repetitiously는 부사이므로 형용사 자리에 올 수 없다."
            },
            {
                "id": "q130",
                "text": "Bay City Zoo members get _____ access to members-only activities, such as after-hours guided tours.",
                "options": [
                    {
                        "label": "A",
                        "text": "exclusive"
                    },
                    {
                        "label": "B",
                        "text": "unknown"
                    },
                    {
                        "label": "C",
                        "text": "creative"
                    },
                    {
                        "label": "D",
                        "text": "previous"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 7,
                "correctAnswer": "A",
                "translation": "베이 시티 동물원 회원은 운영 시간 외 가이드 투어와 같은 회원 전용 활동을 독점 이용할 수 있습니다.",
                "explanation": "빈칸 뒤에 '회원 전용 활동(members-only activities)'이라는 내용이 온 것으로 보아, '독점적으로 이용할 수 있다'는 의미가 되어야 일관성 있는 문장을 완성할 수 있다. 따라서 '독점적인, 전용의'라는 뜻의 (A) exclusive가 정답이다. (B) unknown은 '알려지지 않은', (C) creative는 '창조적인', (D) previous는 '이전의'라는 의미이다."
            }
        ]
    },
    {
        "testId": 8,
        "title": "Part 5 Real Test 8",
        "questions": [
            {
                "id": "q101",
                "text": "The order is estimated to arrive _____ November 15.",
                "options": [
                    {
                        "label": "A",
                        "text": "by"
                    },
                    {
                        "label": "B",
                        "text": "until"
                    },
                    {
                        "label": "C",
                        "text": "at"
                    },
                    {
                        "label": "D",
                        "text": "down"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q102",
                "text": "Please make sure that _____ personal belongings are safely stored out of sight.",
                "options": [
                    {
                        "label": "A",
                        "text": "you"
                    },
                    {
                        "label": "B",
                        "text": "yourself"
                    },
                    {
                        "label": "C",
                        "text": "yours"
                    },
                    {
                        "label": "D",
                        "text": "your"
                    }
                ],
                "classification": "G_POS",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q103",
                "text": "Be sure to fold all the clothes _____ before placing them in bags for customers.",
                "options": [
                    {
                        "label": "A",
                        "text": "neatly"
                    },
                    {
                        "label": "B",
                        "text": "deeply"
                    },
                    {
                        "label": "C",
                        "text": "highly"
                    },
                    {
                        "label": "D",
                        "text": "surely"
                    }
                ],
                "classification": "V_ADV",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q104",
                "text": "Visitors should not take _____ while touring the restricted areas of the facility.",
                "options": [
                    {
                        "label": "A",
                        "text": "photographic"
                    },
                    {
                        "label": "B",
                        "text": "photographing"
                    },
                    {
                        "label": "C",
                        "text": "photographs"
                    },
                    {
                        "label": "D",
                        "text": "photographed"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q105",
                "text": "The new novel by mystery writer Meredith Delgado will be _____ in bookstores nationwide on July 9.",
                "options": [
                    {
                        "label": "A",
                        "text": "regular"
                    },
                    {
                        "label": "B",
                        "text": "available"
                    },
                    {
                        "label": "C",
                        "text": "convenient"
                    },
                    {
                        "label": "D",
                        "text": "completed"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q106",
                "text": "Cashiers should call for an _____ cashier when more than three customers are in line.",
                "options": [
                    {
                        "label": "A",
                        "text": "addition"
                    },
                    {
                        "label": "B",
                        "text": "additions"
                    },
                    {
                        "label": "C",
                        "text": "additional"
                    },
                    {
                        "label": "D",
                        "text": "additionally"
                    }
                ],
                "classification": "G_POS",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q107",
                "text": "Nga Ho, currently the sales manager for the southern division, will take on a new _____ within the Trang Media Group in February.",
                "options": [
                    {
                        "label": "A",
                        "text": "view"
                    },
                    {
                        "label": "B",
                        "text": "access"
                    },
                    {
                        "label": "C",
                        "text": "role"
                    },
                    {
                        "label": "D",
                        "text": "session"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            },
            {
                "id": "q108",
                "text": "To prevent the sauce from scorching while being heated, stir it _____ with a wooden spoon.",
                "options": [
                    {
                        "label": "A",
                        "text": "continues"
                    },
                    {
                        "label": "B",
                        "text": "continue"
                    },
                    {
                        "label": "C",
                        "text": "continuously"
                    },
                    {
                        "label": "D",
                        "text": "continuous"
                    }
                ],
                "classification": "V_ADV",
                "testId": 8,
                "correctAnswer": "A",
                "translation": "Translation unavailable.",
                "explanation": "Explanation unavailable."
            }
        ]
    },
    {
        "testId": 9,
        "title": "Part 5 Real Test 9",
        "questions": [
            {
                "id": "q101",
                "text": "Mr. Liu is known for negotiating employee disputes _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "calm"
                    },
                    {
                        "label": "B",
                        "text": "calmly"
                    },
                    {
                        "label": "C",
                        "text": "calmest"
                    },
                    {
                        "label": "D",
                        "text": "calmness"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "B",
                "translation": "류 씨는 직원들의 분쟁을 차분하게 조정하는 것으로 유명하다.",
                "explanation": "주어가 Mr. Liu, 동사가 is known인 완전한 문장에서 빈칸은 전치사 for의 목적어 역할을 하는 동명사 negotiating을 수식하는 부사 자리이므로 '차분하게'라는 의미인 부사 (B) calmly가 정답이다."
            },
            {
                "id": "q102",
                "text": "The city is accepting proposals for the redesign of Oshida Public Park _____ January 25.",
                "options": [
                    {
                        "label": "A",
                        "text": "when"
                    },
                    {
                        "label": "B",
                        "text": "until"
                    },
                    {
                        "label": "C",
                        "text": "a few"
                    },
                    {
                        "label": "D",
                        "text": "whether"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "B",
                "translation": "시는 1월 25일까지 오시다 공원의 재설계를 위한 기획안을 접수하고 있다.",
                "explanation": "빈칸은 시간 명사구 January 25를 목적어로 취하는 전치사 자리이므로, '~까지'라는 의미의 전치사 (B) until이 정답이다."
            },
            {
                "id": "q103",
                "text": "Sales _____ maintain client files and provide logistical support.",
                "options": [
                    {
                        "label": "A",
                        "text": "assists"
                    },
                    {
                        "label": "B",
                        "text": "assisted"
                    },
                    {
                        "label": "C",
                        "text": "assisting"
                    },
                    {
                        "label": "D",
                        "text": "assistants"
                    }
                ],
                "classification": "G_VERB",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "판매 보조원은 고객 파일을 관리하고 물류 지원을 제공한다.",
                "explanation": "동사 maintain과 provide의 주어 역할을 하는 명사 자리로, 빈칸 앞의 Sales와 함께 '판매 보조원'이라는 의미의 복합명사를 만들 수 있는 (D) assistants가 정답이다."
            },
            {
                "id": "q104",
                "text": "Tonight at Harbor Falls Library, writer Delroy Greene will be _____ stories from his childhood in Jamaica.",
                "options": [
                    {
                        "label": "A",
                        "text": "dividing"
                    },
                    {
                        "label": "B",
                        "text": "sharing"
                    },
                    {
                        "label": "C",
                        "text": "using"
                    },
                    {
                        "label": "D",
                        "text": "awarding"
                    }
                ],
                "classification": "V_VERB",
                "testId": 9,
                "correctAnswer": "B",
                "translation": "오늘 밤 하버 폴스 도서관에서 델로이 그린 작가는 자메이카에서의 어린 시절 이야기를 들려줄 예정이다.",
                "explanation": "작가가 출연하는 도서관 행사를 설명하는 문장이므로 문맥상 '작가가 어린 시절 이야기를 나눌 것'이라는 내용이 되어야 자연스럽다. 따라서 '(자신의 생각, 경험 등을) 말하다, 함께 나누다'라는 의미의 (B) sharing이 정답이다."
            },
            {
                "id": "q105",
                "text": "Mr. Kam has invited all staff members to attend _____ retirement party.",
                "options": [
                    {
                        "label": "A",
                        "text": "he"
                    },
                    {
                        "label": "B",
                        "text": "his"
                    },
                    {
                        "label": "C",
                        "text": "him"
                    },
                    {
                        "label": "D",
                        "text": "himself"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "B",
                "translation": "캠 씨는 그의 은퇴식에 직원 모두를 초대했다.",
                "explanation": "빈칸은 to부정사 to attend의 목적어로 쓰인 복합명사 retirement party를 수식하는 자리이다. 따라서 명사 앞에 쓰여 한정사 역할을 할 수 있는 소유격 인칭대명사 (B) his가 정답이다."
            },
            {
                "id": "q106",
                "text": "Stanley Point Theater in downtown Detroit will produce four plays and three _____ next season.",
                "options": [
                    {
                        "label": "A",
                        "text": "actors"
                    },
                    {
                        "label": "B",
                        "text": "audiences"
                    },
                    {
                        "label": "C",
                        "text": "tickets"
                    },
                    {
                        "label": "D",
                        "text": "musicals"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "디트로이트 시내에 있는 스탠리 포인트 극장은 다음 시즌에 연극 네 편과 뮤지컬 세 편을 제작할 예정이다.",
                "explanation": "빈칸은 four plays와 and로 연결되어 동사 will produce의 목적어 역할을 하는 명사 자리이므로 문맥상 '연극(plays)'처럼 극장에서 제작하는 공연의 종류가 와야 한다. 따라서 '뮤지컬'을 뜻하는 (D) musicals가 정답이다."
            },
            {
                "id": "q107",
                "text": "There is enough money _____ in the budget to cover travel expenses.",
                "options": [
                    {
                        "label": "A",
                        "text": "remains"
                    },
                    {
                        "label": "B",
                        "text": "remainder"
                    },
                    {
                        "label": "C",
                        "text": "remained"
                    },
                    {
                        "label": "D",
                        "text": "remaining"
                    }
                ],
                "classification": "G_VERB",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "여행 경비를 충당할 돈이 예산에 충분히 남아 있다.",
                "explanation": "빈칸 앞에 There is enough money라는 완전한 절이 있고, 빈칸부터 budget까지는 money를 수식하는 수식어구이다. 따라서 '남아 있는'이라는 의미로 명사 money를 뒤에서 수식할 수 있는 현재분사(D) remaining이 정답이다."
            },
            {
                "id": "q108",
                "text": "Romm Industries staff trained nine new associates who were hired _____ the same day.",
                "options": [
                    {
                        "label": "A",
                        "text": "as"
                    },
                    {
                        "label": "B",
                        "text": "into"
                    },
                    {
                        "label": "C",
                        "text": "on"
                    },
                    {
                        "label": "D",
                        "text": "once"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "C",
                "translation": "롬 인더스트리스 직원들은 같은 날 고용된 아홉 명의 새로운 직장 동료들을 교육했다.",
                "explanation": "빈칸은 명사구인 the same day를 목적어로 취하는 전치사 자리이다. 문맥상 '같은 날에'라는 내용이 되어야 자연스러우므로 날이나 날짜, 요일 앞에 쓰여 '~에'를 뜻하는 전치사 (C) on이 정답이다."
            },
            {
                "id": "q109",
                "text": "Taylor Kanagawa wrote several books on effective team management _____ his 40-year career at Sapp Publishers Ltd.",
                "options": [
                    {
                        "label": "A",
                        "text": "between"
                    },
                    {
                        "label": "B",
                        "text": "while"
                    },
                    {
                        "label": "C",
                        "text": "beside"
                    },
                    {
                        "label": "D",
                        "text": "during"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "테일러 카나가와는 샙 출판사에서 40년 근무하는 동안 효과적인 팀 운영에 관한 책을 여러 권 집필했다.",
                "explanation": "빈칸은 명사구 his 40-year career를 목적어로 취해 빈칸 앞의 완전한 절(Taylor Kanagawa wrote several books ~ management)을 수식하는 전치사 자리이다. his 40-year career가 기간을 나타내는 명사이고, 문맥상 '그가 40년 근무하는 동안'이라는 의미가 되어야 자연스러우므로 '~ 동안'을 뜻하는 (D) during이 정답이다."
            },
            {
                "id": "q110",
                "text": "The community clinic project is designed to improve health _____ in isolated areas.",
                "options": [
                    {
                        "label": "A",
                        "text": "outcomes"
                    },
                    {
                        "label": "B",
                        "text": "reasons"
                    },
                    {
                        "label": "C",
                        "text": "corrections"
                    },
                    {
                        "label": "D",
                        "text": "grades"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "지역 사회 진료 사업은 고립된 지역의 건강 상태를 향상시키기 위해 고안되었다.",
                "explanation": "to부정사 to improve의 목적어 역할을 하는 명사 자리로, 빈칸 앞의 명사 health와 함께 쓰여 '건강 상태[결과]'라는 의미의 복합명사를 만들 수 있는 '결과'라는 뜻의 (A) outcomes가 정답이다."
            },
            {
                "id": "q111",
                "text": "Jingshen Airlines announced that it will be hiring 200 _____ employees next year.",
                "options": [
                    {
                        "label": "A",
                        "text": "add"
                    },
                    {
                        "label": "B",
                        "text": "adding"
                    },
                    {
                        "label": "C",
                        "text": "additional"
                    },
                    {
                        "label": "D",
                        "text": "additionally"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "C",
                "translation": "징셴 항공은 내년에 200명의 추가 직원을 채용할 예정이라고 발표했다.",
                "explanation": "빈칸은 동사 will be hiring의 목적어 역할을 하는 명사 employees를 수식하는 형용사 자리이다. '200명의 추가 직원'이라는 의미가 되어야 자연스러우므로 '추가의'라는 뜻의 형용사 (C) additional이 정답이다."
            },
            {
                "id": "q112",
                "text": "The customer was impressed by how _____ Mr. Schmid operated the complicated machinery.",
                "options": [
                    {
                        "label": "A",
                        "text": "skillfully"
                    },
                    {
                        "label": "B",
                        "text": "primarily"
                    },
                    {
                        "label": "C",
                        "text": "obviously"
                    },
                    {
                        "label": "D",
                        "text": "richly"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "고객은 슈미드 씨가 복잡한 기계를 능숙하게 조작하는 것에 감탄했다.",
                "explanation": "의문부사 how가 이끄는 명사절에서 동사 operated를 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '기계를 능숙하게 조작하는 것에 감탄하다'라는 의미가 되어야 자연스러우므로 '능숙하게'라는 뜻의 (A) skillfully가 정답이다."
            },
            {
                "id": "q113",
                "text": "Staff are invited to participate in a _____ of social events during the first week of May.",
                "options": [
                    {
                        "label": "A",
                        "text": "series"
                    },
                    {
                        "label": "B",
                        "text": "status"
                    },
                    {
                        "label": "C",
                        "text": "theory"
                    },
                    {
                        "label": "D",
                        "text": "guest"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "직원들은 5월 첫째 주 동안 일련의 친목 행사에 참여하도록 초대받는다.",
                "explanation": "문맥상 '일련의 행사에 참여한다'는 내용이 되어야 자연스러우므로, 부정관사 a와 전치사 of와 함께 관용어구 a series of를 만드는 '일련, 연속'이라는 뜻의 (A) series가 정답이다."
            },
            {
                "id": "q114",
                "text": "The contract states that Solcus Corporation will be _____ for any costs resulting from work delays.",
                "options": [
                    {
                        "label": "A",
                        "text": "accountable"
                    },
                    {
                        "label": "B",
                        "text": "manageable"
                    },
                    {
                        "label": "C",
                        "text": "knowledgeable"
                    },
                    {
                        "label": "D",
                        "text": "flexible"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "계약서에는 솔커스 사가 업무 지연으로 인한 비용을 책임진다고 명시되어 있다.",
                "explanation": "빈칸은 that절의 주어 Solcus Corporation을 보충 설명하는 보어 자리로, 문맥상 '비용을 책임진다'는 내용이 되어야 자연스럽다. 따라서 빈칸 뒤의 전치사 for와 함께 쓰여 '~에 대해 책임이 있는'이라는 뜻을 나타내는 (A) accountable이 정답이다."
            },
            {
                "id": "q115",
                "text": "Author Minh Phan's latest novel was _____ influenced by Vietnamese folk stories.",
                "options": [
                    {
                        "label": "A",
                        "text": "heavy"
                    },
                    {
                        "label": "B",
                        "text": "heavily"
                    },
                    {
                        "label": "C",
                        "text": "heaviest"
                    },
                    {
                        "label": "D",
                        "text": "heavier"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "B",
                "translation": "민 판 작가의 최신 소설은 베트남 민간 설화의 영향을 많이 받았다.",
                "explanation": "동사구 was influenced를 수식하는 부사 자리이므로 '(정도 등이) 많이, 심하게'라는 뜻의 부사 (B) heavily가 정답이다."
            },
            {
                "id": "q116",
                "text": "Tourists are expected to flock to the Sorachi Discovery Museum when it opens _____ in Mikasa, Hokkaido.",
                "options": [
                    {
                        "label": "A",
                        "text": "soon"
                    },
                    {
                        "label": "B",
                        "text": "as"
                    },
                    {
                        "label": "C",
                        "text": "almost"
                    },
                    {
                        "label": "D",
                        "text": "initial"
                    }
                ],
                "classification": "V_ADV",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "홋카이도 미카사에 있는 소라치 디스커버리 박물관이 곧 개관하면 관광객들이 몰릴 것으로 예상된다.",
                "explanation": "빈칸은 주어 it과 자동사 opens로 이루어진 완전한 절 뒤에서 동사 opens를 수식하는 자리이므로 부사가 들어가야 한다. 문맥상 앞으로 일어날 일을 예상하는 것으로 '박물관이 곧 개관하면'이라는 내용이 되어야 하므로 '곧'이라는 뜻의 부사 (A) soon이 정답이다."
            },
            {
                "id": "q117",
                "text": "The factory floor is divided into four _____ sections: one for each stage of product assembly.",
                "options": [
                    {
                        "label": "A",
                        "text": "previous"
                    },
                    {
                        "label": "B",
                        "text": "eligible"
                    },
                    {
                        "label": "C",
                        "text": "distinct"
                    },
                    {
                        "label": "D",
                        "text": "installed"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 9,
                "correctAnswer": "C",
                "translation": "공장의 작업 현장은 제품 조립의 각 단계별로 네 개의 뚜렷이 다른 구역으로 나뉜다.",
                "explanation": "명사 sections를 수식하기에 적절한 형용사를 골라야 한다. 동사 is divided into와 함께 '네 개의 뚜렷이 다른 구역으로 나뉜다'는 내용이 되어야 자연스러우므로 '뚜렷이 다른, 별개의'라는 뜻의 (C) distinct가 정답이다."
            },
            {
                "id": "q118",
                "text": "Handouts for the afternoon seminar must be prepared _____ the lunch break.",
                "options": [
                    {
                        "label": "A",
                        "text": "down"
                    },
                    {
                        "label": "B",
                        "text": "beside"
                    },
                    {
                        "label": "C",
                        "text": "before"
                    },
                    {
                        "label": "D",
                        "text": "off"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "C",
                "translation": "오후 세미나를 위한 유인물은 점심시간 전에 준비되어야 한다.",
                "explanation": "빈칸 뒤에 시간을 나타내는 명사 the lunch break가 있고, 문맥상 '점심시간 전에 준비되어야 한다'라는 의미가 되어야 자연스러우므로 '~ 전에'를 뜻하는 전치사 (C) before가 정답이다."
            },
            {
                "id": "q119",
                "text": "Chat Mobile will determine, based on end-of-the-year sales numbers, _____ the company will open any additional stores.",
                "options": [
                    {
                        "label": "A",
                        "text": "whether"
                    },
                    {
                        "label": "B",
                        "text": "who"
                    },
                    {
                        "label": "C",
                        "text": "since"
                    },
                    {
                        "label": "D",
                        "text": "that"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "챗 모바일은 연말 매출액에 근거해 추가 점포를 열지 여부를 결정할 것이다.",
                "explanation": "빈칸에는 동사 will determine의 목적어 역할을 하는 명사절을 이끄는 접속사가 들어가야 한다. 빈칸 뒤에 완전한 절(the company will open ~ stores)이 있고, 문맥상 '추가 점포를 열지 말지를 결정할 것'이라는 내용이 되어야 하므로 '~인지 아닌지'라는 뜻의 명사절 접속사 (A) whether가 정답이다."
            },
            {
                "id": "q120",
                "text": "The red line will _____ only express stops from Finn Street to Boone Street on weekends.",
                "options": [
                    {
                        "label": "A",
                        "text": "made"
                    },
                    {
                        "label": "B",
                        "text": "makes"
                    },
                    {
                        "label": "C",
                        "text": "make"
                    },
                    {
                        "label": "D",
                        "text": "making"
                    }
                ],
                "classification": "G_VERB",
                "testId": 9,
                "correctAnswer": "C",
                "translation": "레드 라인은 주말에 핀 로에서 분 로까지 급행 정차만 할 것이다.",
                "explanation": "조동사 will 뒤에는 동사원형이 와야 하므로 (C) make가 정답이다."
            },
            {
                "id": "q121",
                "text": "The company's latest video game, Hunting for Treasure, has been praised _____ by reviewers.",
                "options": [
                    {
                        "label": "A",
                        "text": "enthusiastically"
                    },
                    {
                        "label": "B",
                        "text": "enthusiastic"
                    },
                    {
                        "label": "C",
                        "text": "enthusiasm"
                    },
                    {
                        "label": "D",
                        "text": "enthusiast"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "이 회사의 최신 비디오 게임인 <보물 사냥>은 평가단으로부터 열렬히 찬사를 받았다.",
                "explanation": "수동태로 쓰인 완전한 절(The company's latest video game ~ has been praised) 뒤에서 동사구 has been praised를 수식하는 자리이므로 부사가 들어가야 한다. 따라서 '열렬히, 열광적으로'라는 뜻의 부사 (A) enthusiastically가 정답이다."
            },
            {
                "id": "q122",
                "text": "During the off-season, the Great Mountain Amusement Park operates on _____ hours.",
                "options": [
                    {
                        "label": "A",
                        "text": "reduced"
                    },
                    {
                        "label": "B",
                        "text": "employed"
                    },
                    {
                        "label": "C",
                        "text": "slow"
                    },
                    {
                        "label": "D",
                        "text": "busy"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "그레이트 마운틴 놀이공원은 비수기 동안 단축된 시간으로 운영된다.",
                "explanation": "빈칸은 뒤의 명사 hours를 수식하는 형용사 자리로, '(비수기에는) 단축된 시간으로 운영된다'는 의미가 되어야 자연스러우므로 '단축된, 감소된'을 뜻하는 분사형 형용사 (A) reduced가 정답이다."
            },
            {
                "id": "q123",
                "text": "The construction project will _____ 30 residential units and 10 commercial spaces.",
                "options": [
                    {
                        "label": "A",
                        "text": "overall"
                    },
                    {
                        "label": "B",
                        "text": "first"
                    },
                    {
                        "label": "C",
                        "text": "about"
                    },
                    {
                        "label": "D",
                        "text": "include"
                    }
                ],
                "classification": "V_VERB",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "이 건설 사업은 주거용 30세대와 열 개의 상업용 공간을 포함한다.",
                "explanation": "조동사 will 뒤에는 동사원형이 와야 하고, 빈칸 뒤에 동사가 따로 보이지 않으므로 빈칸은 동사 자리이다. 따라서 보기 중 유일한 동사인 '포함하다'라는 뜻의 (D) include가 정답이다."
            },
            {
                "id": "q124",
                "text": "Ms. Pham's employment contract cannot be finalized _____ her starting salary is still being negotiated.",
                "options": [
                    {
                        "label": "A",
                        "text": "once"
                    },
                    {
                        "label": "B",
                        "text": "because"
                    },
                    {
                        "label": "C",
                        "text": "after"
                    },
                    {
                        "label": "D",
                        "text": "until"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "B",
                "translation": "팜 씨의 초봉이 아직 협상 중이기 때문에 고용 계약이 확정될 수 없다.",
                "explanation": "빈칸 앞뒤에 모두 주어와 동사를 갖춘 완전한 절이 왔으므로 빈칸에는 이 두 절을 연결시키는 부사절 접속사가 들어가야 한다. 문맥상 '초봉이 아직 협상 중이기 때문에'라는 내용이 되어야 자연스러우므로 '~ 때문에'라는 의미의 (B) because가 정답이다."
            },
            {
                "id": "q125",
                "text": "Office supplies are available in our resources cabinet for _____ who needs them.",
                "options": [
                    {
                        "label": "A",
                        "text": "anyone"
                    },
                    {
                        "label": "B",
                        "text": "whichever"
                    },
                    {
                        "label": "C",
                        "text": "such"
                    },
                    {
                        "label": "D",
                        "text": "more"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "사무용품이 필요한 사람은 누구나 우리의 물품 보관함에서 사무용품을 이용할 수 있습니다.",
                "explanation": "빈칸은 전치사 for의 목적어 역할을 하는 동시에 관계대명사 who의 선행사 역할을 하는 대명사 자리이다. 관계사절의 동사가 단수동사 needs이고, 사람을 선행사로 취하는 who의 선행사 자리이므로 단수이면서 사람을 나타내는 대명사가 들어가야 한다. 문맥상 '사무용품이 필요한 사람은 누구나'라는 의미가 되어야 하므로 '누구든지, 누구나'라는 뜻의 (A) anyone이 정답이다."
            },
            {
                "id": "q126",
                "text": "Through its network of local agents, new housing start-up Philocenia intends to _____ the rental sector.",
                "options": [
                    {
                        "label": "A",
                        "text": "exercise"
                    },
                    {
                        "label": "B",
                        "text": "indicate"
                    },
                    {
                        "label": "C",
                        "text": "participate"
                    },
                    {
                        "label": "D",
                        "text": "revolutionize"
                    }
                ],
                "classification": "V_VERB",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "신생 주택 공급 업체인 필로세니아는 지역 중개인 네트워크를 통해 임대업 부문에 혁신을 일으키고자 한다.",
                "explanation": "동사 intends의 목적어 역할을 하는 to부정사에 들어갈 적절한 동사 어휘를 고르는 문제이다. 문맥상 '임대업 부문에 혁신을 일으키고자 한다'는 의미가 되어야 자연스러우므로 '혁신을 일으키다'라는 뜻의 (D) revolutionize가 정답이다."
            },
            {
                "id": "q127",
                "text": "Rapid Books has the payroll solutions every company needs, allowing users _____ invoices in three easy steps.",
                "options": [
                    {
                        "label": "A",
                        "text": "sent"
                    },
                    {
                        "label": "B",
                        "text": "have sent"
                    },
                    {
                        "label": "C",
                        "text": "sending"
                    },
                    {
                        "label": "D",
                        "text": "to send"
                    }
                ],
                "classification": "G_VERB",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "래피드 북스는 모든 회사가 필요로 하는 급여 설루션을 갖추고 있어 사용자로 하여금 손쉬운 3단계로 청구서를 보낼 수 있게 해 준다.",
                "explanation": "빈칸은 분사구문을 이끄는 현재분사 allowing의 목적어인 users를 보충 설명하는 목적격 보어 자리이다. allow는 주로 to부정사를 목적격 보어로 취하는 5형식 동사이므로 (D) to send가 정답이다."
            },
            {
                "id": "q128",
                "text": "Epky Electronics will open eight additional retail stores _____ the next two years.",
                "options": [
                    {
                        "label": "A",
                        "text": "above"
                    },
                    {
                        "label": "B",
                        "text": "behind"
                    },
                    {
                        "label": "C",
                        "text": "about"
                    },
                    {
                        "label": "D",
                        "text": "within"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 9,
                "correctAnswer": "D",
                "translation": "엡키 전자는 향후 2년 안에 여덟 곳의 소매점을 추가로 열 예정이다.",
                "explanation": "빈칸 뒤에 기간을 나타내는 명사구 the next two years가 있고, 문맥상 '향후 2년 안에'라는 의미가 되어야 자연스러우므로 '~ 안에, ~ 이내에'를 뜻하는 기간의 전치사 (D) within이 정답이다."
            },
            {
                "id": "q129",
                "text": "The three-day workshop focuses on the public speaking _____ that are central to delivering memorable presentations.",
                "options": [
                    {
                        "label": "A",
                        "text": "strategies"
                    },
                    {
                        "label": "B",
                        "text": "strategized"
                    },
                    {
                        "label": "C",
                        "text": "strategically"
                    },
                    {
                        "label": "D",
                        "text": "strategic"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "3일간의 워크숍은 기억에 남을 만한 발표를 하는 데 핵심이 되는 대중 연설 전략에 초점을 둔다.",
                "explanation": "빈칸은 전치사 on의 목적어 역할을 하는 동시에 관계대명사 that의 선행사 역할을 하는 명사 자리이다. 따라서 빈칸 앞의 명사구 public speaking과 함께 '대중 연설 전략'이라는 의미의 복합명사를 만들 수 있는 '전략'이라는 뜻의 명사 (A) strategies가 정답이다."
            },
            {
                "id": "q130",
                "text": "Critics agree that the movie An Unusual Introduction _____ combines computer-generated images and live action.",
                "options": [
                    {
                        "label": "A",
                        "text": "seamlessly"
                    },
                    {
                        "label": "B",
                        "text": "collectively"
                    },
                    {
                        "label": "C",
                        "text": "factually"
                    },
                    {
                        "label": "D",
                        "text": "distantly"
                    }
                ],
                "classification": "G_POS",
                "testId": 9,
                "correctAnswer": "A",
                "translation": "비평가들은 영화 <색다른 소개>가 컴퓨터 생성 이미지와 라이브 액션을 매끄럽게 결합한다는 점에 동의한다.",
                "explanation": "동사 combines를 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. 문맥상 '컴퓨터 이미지와 라이브 액션을 매끄럽게 결합한다'는 의미가 되어야 자연스러우므로 '매끄럽게'라는 뜻의 (A) seamlessly가 정답이다."
            }
        ]
    },
    {
        "testId": 10,
        "title": "Part 5 Real Test 10",
        "questions": [
            {
                "id": "q101",
                "text": "According to the department head, _____ are ready to begin work on the Arborney Bridge project.",
                "options": [
                    {
                        "label": "A",
                        "text": "us"
                    },
                    {
                        "label": "B",
                        "text": "we"
                    },
                    {
                        "label": "C",
                        "text": "our"
                    },
                    {
                        "label": "D",
                        "text": "ours"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "부서장에 따르면, 우리는 아르보니교 프로젝트에 대한 작업을 시작할 준비가 되었다.",
                "explanation": "빈칸은 동사 are의 주어 자리이고, '우리는 준비가 되었다'는 의미가 되어야 하므로 주격 인칭대명사 (B) we가 정답이다. (D)의 소유대명사 ours도 주어로 쓰일 수 있지만 문맥상 적절하지 않다."
            },
            {
                "id": "q102",
                "text": "The policy prohibiting visitor access to the laboratory must be _____ followed.",
                "options": [
                    {
                        "label": "A",
                        "text": "strictly"
                    },
                    {
                        "label": "B",
                        "text": "bitterly"
                    },
                    {
                        "label": "C",
                        "text": "sizably"
                    },
                    {
                        "label": "D",
                        "text": "colorfully"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "방문자의 실험실 출입을 금지하는 방침은 엄격히 준수되어야 한다.",
                "explanation": "해설 동사구 must be followed를 수식하는 부사 자리로, 문맥상 '엄격히 준수되어야 한다'는 의미가 되어야 적절하다. 따라서 '엄격히'라는 뜻의 (A) strictly가 정답이다. (B) bitterly는 '몹시; 비통하게', (C) sizably는 '상당히 크게', (D) colorfully는 '다채롭게'라는 뜻이다."
            },
            {
                "id": "q103",
                "text": "Yoon-Hee Kim is the _____ graduate of Serrica University to lead a Fortune 500 company.",
                "options": [
                    {
                        "label": "A",
                        "text": "most"
                    },
                    {
                        "label": "B",
                        "text": "for"
                    },
                    {
                        "label": "C",
                        "text": "first"
                    },
                    {
                        "label": "D",
                        "text": "nearly"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "김윤희는 포천 500대 기업을 이끄는 첫 세리카 대학 졸업생이다.",
                "explanation": "빈칸 앞에 정관사 the, 뒤에 명사 graduate가 있으므로 명사를 수식하는 형용사 자리이다. 따라서 '첫 졸업생'이라는 의미를 완성하는 형용사 (C) first가 정답이다. (A) most는 형용사 many의 최상급으로 정관사 the와 함께 '가장 많은'이라는 의미를 나타내며 뒤에 가산 복수 명사 또는 불가산명사가 와야 한다. (B) for는 전치사, (D) nearly는 부사로 품사상 답이 될 수 없다."
            },
            {
                "id": "q104",
                "text": "Contact Frank Marilli in the IT department _____ you have any problems with the new database software.",
                "options": [
                    {
                        "label": "A",
                        "text": "and"
                    },
                    {
                        "label": "B",
                        "text": "then"
                    },
                    {
                        "label": "C",
                        "text": "but"
                    },
                    {
                        "label": "D",
                        "text": "if"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "만약 새로운 데이터베이스 소프트웨어에 문제가 있으면 IT 부서의 프랭크 마릴리에게 연락하십시오.",
                "explanation": "빈칸 앞 명령문과 뒤에 오는 완전한 절(you have any problems ~ software)을 연결하는 접속사 자리로, 등위접속사인 (A) and와 (C) but, 부사절 접속사인 (D) if가 빈칸에 들어갈 수 있다. 문맥상 '만약 문제가 있으면'이라는 내용이 되어야 하므로 '(만약) ~하면'이라는 뜻의 부사절 접속사 (D) if가 정답이다. 명령문 뒤에서 '그러면'을 뜻하는 (A) and와 대조적인 내용을 연결하는 (C) but은 문맥상 적합하지 않고, (B) then은 부사로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q105",
                "text": "A _____ efficiency expert will be visiting our work site in early November.",
                "options": [
                    {
                        "label": "A",
                        "text": "led"
                    },
                    {
                        "label": "B",
                        "text": "leader"
                    },
                    {
                        "label": "C",
                        "text": "leading"
                    },
                    {
                        "label": "D",
                        "text": "leads"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "선도적인 효율성 전문가가 11월 초에 우리 작업 현장을 방문할 예정이다.",
                "explanation": "빈칸 앞에 부정관사 a, 뒤에 복합명사 efficiency expert가 있으므로 명사를 수식하는 형용사 자리이다. 따라서 '선도하는, 일류의'라는 의미의 형용사 (C) leading이 정답이다. (A) led는 동사/과거분사, (B) leader는 명사, (D) leads는 동사/명사로 빈칸에 적합하지 않다."
            },
            {
                "id": "q106",
                "text": "At Gallant's Pet Store, customer _____ are accepted between 9:00 A.M. and 6:00 P.M.",
                "options": [
                    {
                        "label": "A",
                        "text": "behaviors"
                    },
                    {
                        "label": "B",
                        "text": "relations"
                    },
                    {
                        "label": "C",
                        "text": "orders"
                    },
                    {
                        "label": "D",
                        "text": "types"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "갤런츠 펫 스토어에서 고객 주문은 오전 9시부터 오후 6시 사이에 접수됩니다.",
                "explanation": "빈칸은 be동사 are의 주어 자리로, 앞의 customer와 함께 복합명사를 이루어 자연스러운 문맥을 만드는 명사를 골라야 한다. 매장에서 영업시간 내에 '고객 주문이 접수된다'는 내용이 되어야 적절하므로 '주문'을 의미하는 (C) orders가 정답이다. (A)의 behavior는 '행동', (B)의 relation은 '관계', (D)의 type은 '유형'이라는 뜻으로 customer와 복합명사를 이룰 수는 있으나 문맥상 어울리지 않는다."
            },
            {
                "id": "q107",
                "text": "The management at Carette Industries _____ values the work of the research team.",
                "options": [
                    {
                        "label": "A",
                        "text": "high"
                    },
                    {
                        "label": "B",
                        "text": "highly"
                    },
                    {
                        "label": "C",
                        "text": "highest"
                    },
                    {
                        "label": "D",
                        "text": "higher"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "카레트 인더스트리스의 경영진은 연구팀의 업무를 매우 중요하게 여긴다.",
                "explanation": "빈칸 뒤의 동사 values를 수식하여 '매우 중요하게 여기다'라는 의미가 되어야 적절하므로 '매우, 대단히'라는 뜻의 부사 (B) highly가 정답이다. (A) high, (C) highest, (D) higher가 부사로 쓰일 경우, 위치나 수치가 '높게, 높이'를 뜻하므로 동사 value를 수식하기에 문맥상 적절하지 않다."
            },
            {
                "id": "q108",
                "text": "Pentrexa Pharmacy is able to _____ most prescriptions within one business day.",
                "options": [
                    {
                        "label": "A",
                        "text": "care"
                    },
                    {
                        "label": "B",
                        "text": "earn"
                    },
                    {
                        "label": "C",
                        "text": "fill"
                    },
                    {
                        "label": "D",
                        "text": "lift"
                    }
                ],
                "classification": "V_VERB",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "펜트렉사 약국은 영업일 기준 1일 이내에 대부분의 처방약을 조제할 수 있습니다.",
                "explanation": "「be able+ to부정사」 구문의 to 뒤에 들어갈 동사 어휘를 고르는 문제이다. 빈칸 뒤의 most prescriptions와 함께 '대부분의 처방약을 조제할 수 있다'는 의미를 나타내야 자연스러우므로 '조제하다'라는 뜻의 (C) fill이 정답이다. (A) care는 '보살피다', (B) earn은 '(돈을) 벌다', (D) lift는 '들어올리다'의 의미로 문맥상 적절하지 않다."
            },
            {
                "id": "q109",
                "text": "The _____ of a parking structure for Huron General Hospital will begin on June 1.",
                "options": [
                    {
                        "label": "A",
                        "text": "construct"
                    },
                    {
                        "label": "B",
                        "text": "constructed"
                    },
                    {
                        "label": "C",
                        "text": "construction"
                    },
                    {
                        "label": "D",
                        "text": "constructs"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "휴론 종합병원의 주차 건물 공사는 6월 1일에 시작될 것이다.",
                "explanation": "해설 동사 will begin의 주어 자리로, 앞에 정관사 The가 있고 뒤에 전치사 of가 있으므로 빈칸에는 명사가 들어가야 한다. 따라서 '공사, 건설'이라는 뜻의 명사 (C) construction이 정답이다. 주로 동사로 쓰이는 (A) construct와 (D) constructs는 명사로도 쓰이지만 '(구조적인) 생각, 개념'이라는 의미이므로 문맥상 어울리지 않고, (B) constructed는 동사/과거분사이므로 품사상 답이 될 수 없다."
            },
            {
                "id": "q110",
                "text": "Some of the flower beds surrounding Dale Valley Lodge had to be replanted _____ the recent rainstorm.",
                "options": [
                    {
                        "label": "A",
                        "text": "after"
                    },
                    {
                        "label": "B",
                        "text": "among"
                    },
                    {
                        "label": "C",
                        "text": "opposite"
                    },
                    {
                        "label": "D",
                        "text": "beside"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "데일 밸리 로지를 둘러싼 화단의 일부는 최근의 폭우 이후에 다시 심어져야 했다.",
                "explanation": "the recent rainstorm을 목적어로 취하는 자리로, '최근의 폭우 이후에 화단이 다시 심어졌다'는 내용이 되어야 자연스러우므로 '~ 후에'를 뜻하는 (A) after가 정답이다. (B) among은 '~ 중에', (C) opposite은 '~ 건너편에', (D) beside는 '~ 옆에'라는 뜻이다."
            },
            {
                "id": "q111",
                "text": "Several water stations _____ along the route of next week's marathon.",
                "options": [
                    {
                        "label": "A",
                        "text": "being installed"
                    },
                    {
                        "label": "B",
                        "text": "will be installed"
                    },
                    {
                        "label": "C",
                        "text": "to install"
                    },
                    {
                        "label": "D",
                        "text": "installed"
                    }
                ],
                "classification": "G_VERB",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "다음 주에 있을 마라톤의 경로를 따라 여러 개의 급수대가 설치될 예정이다.",
                "explanation": "Several water stations가 주어인 문장에 동사가 보이지 않으므로 빈칸은 동사 자리이고, install은 타동사인데 빈칸 뒤에 목적어가 없으므로 수동태가 와야 한다. 따라서 정답은 (B) will be installed이다. 동사의 과거형인 (D) installed는 뒤에 목적어를 필요로 하는 능동태이므로 답이 될 수 없다."
            },
            {
                "id": "q112",
                "text": "The Crown Lagoon Hotel has 150 rooms, each with a _____ view of the city.",
                "options": [
                    {
                        "label": "A",
                        "text": "valid"
                    },
                    {
                        "label": "B",
                        "text": "recent"
                    },
                    {
                        "label": "C",
                        "text": "modern"
                    },
                    {
                        "label": "D",
                        "text": "scenic"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "크라운 라군 호텔은 각각 도시의 근사한 전망을 갖춘 150개의 객실을 보유하고 있다.",
                "explanation": "빈칸 뒤의 명사 view를 수식하여 '도시의 근사한 전망'이라는 의미가 되어야 자연스러우므로 '경치가 좋은'이라는 뜻의 (D) scenic이 정답이다. (A) valid는 '유효한', (B) recent는 '최근의', (C) modern은 '현대의'라는 뜻이다."
            },
            {
                "id": "q113",
                "text": "Overall, charitable donations rose last year, _____ specific dollar amounts are not yet available.",
                "options": [
                    {
                        "label": "A",
                        "text": "although"
                    },
                    {
                        "label": "B",
                        "text": "neither"
                    },
                    {
                        "label": "C",
                        "text": "whenever"
                    },
                    {
                        "label": "D",
                        "text": "so"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "전반적으로 지난해에 자선 기부는 증가했지만, 아직 구체적인 달러 금액은 공개되지 않았다.",
                "explanation": "빈칸 앞에 주어 charitable donations와 동사 rose를 갖춘 완전한 절이 있고, 뒤에 또 다른 완전한 절(specific dollar amounts are not yet available)이 왔으므로, 이들을 이어주는 접속사가 필요하다. 부사절 접속사인 (A) although와 (C) whenever, 등위접속사인 (D) so가 들어갈 수 있는데, 문맥상 '기부는 증가했지만, 금액은 공개되지 않았다'는 내용이 되어야 적절하므로 '비록 ~이지만'을 뜻하는 부사절 접속사 (A) although가 정답이다. (B) neither는 nor와 함께 neither A nor B(A도 아니고 B도 아닌)의 형태로 쓰여야 절을 연결할 수 있다."
            },
            {
                "id": "q114",
                "text": "We strongly advise you to back up the data stored on your electronic device _____ turning it in for repairs.",
                "options": [
                    {
                        "label": "A",
                        "text": "once"
                    },
                    {
                        "label": "B",
                        "text": "both"
                    },
                    {
                        "label": "C",
                        "text": "then"
                    },
                    {
                        "label": "D",
                        "text": "before"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "수리를 위해 맡기기 전에 전자 기기에 저장된 데이터를 백업할 것을 강력히 권고합니다.",
                "explanation": "빈칸은 뒤에 오는 turning it in과 함께 앞에 나온 완전한 절(We strongly advise you electronic device)을 수식하는 자리로, '맡기기 전에'라는 의미가 되어야 적절하므로 (D) before가 정답이다. (A) once는 부사(한 번)/접속사(일단 ~하면), (B) both는 한정사(둘다의)/대명사(둘다), (C) then은 부사(그 다음에)이므로 품사상 빈칸에 들어갈 수 없다. 참고로, before -ing(~하기 전에)와 after -ing(~한 후에)는 빈출 표현으로 암기해 두자."
            },
            {
                "id": "q115",
                "text": "Because Ms. Garcia enjoys creating charts and graphs, her supervisor _____ asks her to make materials for presentations.",
                "options": [
                    {
                        "label": "A",
                        "text": "frequent"
                    },
                    {
                        "label": "B",
                        "text": "frequents"
                    },
                    {
                        "label": "C",
                        "text": "frequenting"
                    },
                    {
                        "label": "D",
                        "text": "frequently"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "가르시아 씨가 도표와 그래프 만드는 것을 즐겨 하기 때문에 상사는 그녀에게 프레젠테이션 자료를 만들어 줄 것을 자주 요청한다.",
                "explanation": "빈칸은 주어 her supervisor와 동사 asks 사이에서 동사를 수식하는 부사 자리이다. 따라서 '자주, 빈번히'라는 뜻의 부사(D) frequently가 정답이다. (A) frequent는 형용사/동사, (B) frequents는 동사, (C) frequenting은 동명사/현재분사로 품사상 답이 될 수 없다."
            },
            {
                "id": "q116",
                "text": "Manufacturers of high-end products are dealing with excess _____ because consumers are buying fewer luxury items.",
                "options": [
                    {
                        "label": "A",
                        "text": "confidence"
                    },
                    {
                        "label": "B",
                        "text": "inventory"
                    },
                    {
                        "label": "C",
                        "text": "capacity"
                    },
                    {
                        "label": "D",
                        "text": "energy"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "소비자들이 사치품을 덜 구매함에 따라 고급 제품 제조업체들은 과잉 재고를 처리하고 있다.",
                "explanation": "소비자들이 물건을 덜 구매한다는 내용으로 보아 남는 제품을 처리해야 한다는 의미가 되어야 적절하므로, 빈칸 앞의 형용사 excess와 함께 '과잉 재고'라는 의미를 나타내는 명사 (B) inventory가 정답이다. (A) confidence는 '자신감', (C) capacity는 '수용력', (D) energy는 '활기, 에너지'라는 의미로 문맥상 적절하지 않다."
            },
            {
                "id": "q117",
                "text": "The Hayle Group, _____ consists of business consultants and lawyers, advocates for tax policy reforms.",
                "options": [
                    {
                        "label": "A",
                        "text": "themselves"
                    },
                    {
                        "label": "B",
                        "text": "someone"
                    },
                    {
                        "label": "C",
                        "text": "whoever"
                    },
                    {
                        "label": "D",
                        "text": "which"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "비즈니스 컨설턴트와 변호사로 구성된 헤일 그룹은 조세 정책 개혁을 지지한다.",
                "explanation": "빈칸이 있는 절은 문장의 주어이자 선행사인 The Hayle Group과 동사 advocates 사이에서 선행사를 보충 설명하는 관계사절로, 빈칸 뒤에 동사 consists가 있으므로 주격 관계대명사가 들어가야 한다. 따라서 (D) which가 정답이다. (A) themselves는 재귀대명사, (B) someone은 대명사, (C) whoever는 부사절/명사절을 이끄는 복합관계대명사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "q118",
                "text": "Daishi Asayama is one of three applicants being _____ to oversee the Kingston franchises.",
                "options": [
                    {
                        "label": "A",
                        "text": "decided"
                    },
                    {
                        "label": "B",
                        "text": "corrected"
                    },
                    {
                        "label": "C",
                        "text": "considered"
                    },
                    {
                        "label": "D",
                        "text": "practiced"
                    }
                ],
                "classification": "G_VERB",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "다이시 아사야마는 킹스턴 프랜차이즈를 감독하는 일에 고려되고 있는 세 명의 지원자 중 한 명이다.",
                "explanation": "명사 applicants를 뒤에서 수식하는 분사구 being p.p.의 과거분사 자리에 들어갈 알맞은 동사 어휘를 고르는 문제이다. 문맥상 '프랜차이즈를 감독할 것으로 고려되고 있는 지원자들'이라는 내용이 되어야 하므로 '고려하다'라는 뜻의 동사 consider의 과거분사형 (C) considered가 정답이다. (A)의 decide는 '결정하다', (B)의 correct는 '정정하다', (D)의 practice는 '실행하다'라는 뜻으로 문맥상 적합하지 않다."
            },
            {
                "id": "q119",
                "text": "The reviewer of Ms. Chen's book noted that her research was _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "impressed"
                    },
                    {
                        "label": "B",
                        "text": "impressive"
                    },
                    {
                        "label": "C",
                        "text": "impress"
                    },
                    {
                        "label": "D",
                        "text": "impression"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "첸씨 책의 평론가는 그녀의 연구가 인상적이었다고 언급했다.",
                "explanation": "빈칸은 be동사 뒤 주격 보어 자리이므로 형용사나 분사, 또는 명사가 들어갈 수 있다. '그녀의 연구가 인상적이었다'는 내용이 되어야 자연스러우므로 '인상적인'이라는 뜻의 형용사 (B) impressive가 정답이다. 형용사 (A) impressed는 '감명받은'이라는 뜻으로 사람의 감정을 설명하고, 동사 (C) impress는 주격 보어 자리에 들어갈 수 없으며, 명사 (D) impression은 주어 her research와 동격이 아니므로 답이 될 수 없다."
            },
            {
                "id": "q120",
                "text": "Mr. Pereira has worked in our legal department _____ his transfer to the Atlanta office ten years ago.",
                "options": [
                    {
                        "label": "A",
                        "text": "since"
                    },
                    {
                        "label": "B",
                        "text": "between"
                    },
                    {
                        "label": "C",
                        "text": "without"
                    },
                    {
                        "label": "D",
                        "text": "like"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "페레이라 씨는 10년 전 애틀랜타 사무실로 전근한 이래로 우리 법무 부서에서 근무해 왔다.",
                "explanation": "빈칸 뒤의 명사구 his transfer를 목적어로 취해 '전근한 이래로 법무 부서에서 근무해 왔다'는 내용이 되어야 자연스러우므로 '~ 이래로'를 뜻하는 (A) since가 정답이다. (B) between은 '~ 사이에', (C) without은 '~ 없이', (D) like는 '~처럼'이라는 뜻이다. 참고로, 전치사 since는 현재완료 시제와 자주 쓰인다."
            },
            {
                "id": "q121",
                "text": "Pennypack Markets soon plans to break ground on its largest _____ center in the area.",
                "options": [
                    {
                        "label": "A",
                        "text": "distributive"
                    },
                    {
                        "label": "B",
                        "text": "distribute"
                    },
                    {
                        "label": "C",
                        "text": "distributable"
                    },
                    {
                        "label": "D",
                        "text": "distribution"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "페니팩 마켓츠는 곧 이 지역에서 가장 큰 유통 센터를 착공할 계획이다.",
                "explanation": "빈칸은 앞의 its largest, 뒤의 center와 함께 전치사 on의 목적어 역할을 하는 명사구를 이루는 자리이다. 문맥상 '가장 큰 유통 센터'라는 의미가 되어야 자연스러운데 center의 용도, 목적을 나타내는 '유통[물류] 센터'는 복합명사로 나타내므로 (D) distribution(유통)이 정답이다. 형용사인 (A) distributive(분배의, 유통의)와 (C) distributable(분배 가능한)도 명사 앞에서 수식할 수 있지만 쓰임이 적절하지 않고, (B) distribute(유통시키다)는 동사이므로 품사상 답이 될 수 없다."
            },
            {
                "id": "q122",
                "text": "Ms. Miller _____ welcomed the speakers who will be leading the workshops.",
                "options": [
                    {
                        "label": "A",
                        "text": "accessibly"
                    },
                    {
                        "label": "B",
                        "text": "abundantly"
                    },
                    {
                        "label": "C",
                        "text": "briefly"
                    },
                    {
                        "label": "D",
                        "text": "momentarily"
                    }
                ],
                "classification": "V_ADV",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "밀러 씨는 워크숍을 이끌 발표자들을 짧게 환영했다.",
                "explanation": "빈칸 뒤의 동사 welcomed를 수식하여 '짧게[간단히] 환영했다'는 의미가 되어야 적절하므로 '짧게, 간단히'라는 뜻의 (C) briefly가 정답이다. (A) accessibly는 '접근하기 쉽게', (B) abundantly는 '풍부하게', (D) momentarily는 '곧, 순간적으로'라는 뜻이다. 참고로, briefly welcome은 자주 쓰이는 표현이므로 암기해 두자."
            },
            {
                "id": "q123",
                "text": "Mr. Nayar _____ the need for enhanced safety protocols long before the government issued a report on the topic.",
                "options": [
                    {
                        "label": "A",
                        "text": "stresses"
                    },
                    {
                        "label": "B",
                        "text": "stressing"
                    },
                    {
                        "label": "C",
                        "text": "will stress"
                    },
                    {
                        "label": "D",
                        "text": "had stressed"
                    }
                ],
                "classification": "G_VERB",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "나야르 씨는 정부가 해당 주제에 대한 보고서를 발표하기 훨씬 이전에 강화된 안전 규약의 필요성을 강조했다.",
                "explanation": "Mr. Nayar가 주어, the need가 목적어인 문장의 동사 자리이므로 (A), (C), (D) 중에서 선택해야 한다. before 부사절의 동사 issued가 과거 시제이고, 문맥상 정부가 과거에 보고서를 발표한 이전의 일을 나타내야 하므로 과거보다 앞선 일을 나타내는 과거완료 시제가 들어가야 한다. 따라서 (D) had stressed가 정답이다."
            },
            {
                "id": "q124",
                "text": "Angelia Financial recently announced _____ changes to its benefits package that were greeted enthusiastically by its staff.",
                "options": [
                    {
                        "label": "A",
                        "text": "judgmental"
                    },
                    {
                        "label": "B",
                        "text": "substantial"
                    },
                    {
                        "label": "C",
                        "text": "magnetic"
                    },
                    {
                        "label": "D",
                        "text": "chaotic"
                    }
                ],
                "classification": "V_ADJ",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "안젤리아 파이낸셜은 최근 복리 후생 제도에 직원들의 열렬한 환영을 받은 상당한 변화를 발표했다.",
                "explanation": "빈칸 뒤의 명사 changes를 수식하기에 적절한 형용사를 고르는 문제이다. 선행사 changes to its benefits package를 수식하는 관계사절이 직원들의 열렬한 환영을 받았다(that were greeted ~ by its staff)는 긍정적인 내용인 것으로 미루어 보아, '상당한 변화'라는 의미가 되어야 자연스러우므로 (B) substantial이 정답이다. (A) judgmental은 '비판적인', (C) magnetic은 '자성의; 매력 있는', (D) chaotic은 '혼란스러운'이라는 의미이다."
            },
            {
                "id": "q125",
                "text": "_____ poems written by Mike Hanover are included in the new edition of Merwyn's Anthology.",
                "options": [
                    {
                        "label": "A",
                        "text": "Whichever"
                    },
                    {
                        "label": "B",
                        "text": "Several"
                    },
                    {
                        "label": "C",
                        "text": "Something"
                    },
                    {
                        "label": "D",
                        "text": "None"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "B",
                "translation": "마이크 하노버가 쓴 몇몇 시들이 <머윈의 문집>의 개정판에 포함되어 있다.",
                "explanation": "빈칸은 poems가 주어, are included가 동사인 문장에서 주어인 poems를 수식하는 형용사 자리이다. 따라서 '몇몇의'라는 뜻의 형용사 (B) Several이 정답이다. (A) Whichever는 명사절/부사절을 이끄는 복합관계대명사이고, (C) Something과 (D) None은 대명사이므로 명사를 수식하는 자리에 올 수 없다."
            },
            {
                "id": "q126",
                "text": "For a list of local farms that supply food to restaurants, please _____ to the Hueland Farm Association Web site.",
                "options": [
                    {
                        "label": "A",
                        "text": "elect"
                    },
                    {
                        "label": "B",
                        "text": "adapt"
                    },
                    {
                        "label": "C",
                        "text": "present"
                    },
                    {
                        "label": "D",
                        "text": "refer"
                    }
                ],
                "classification": "V_VERB",
                "testId": 10,
                "correctAnswer": "D",
                "translation": "식당에 식품을 공급하는 지역 농장의 명단을 원하시면 휴랜드 농장 협회 웹사이트를 참조하십시오.",
                "explanation": "빈칸은 please로 시작하는 명령문의 동사 자리로, 뒤에 전치사 to가 있으므로 to와 함께 쓰이는 자동사가 들어가야 한다. 문맥상 '명단을 원하면 협회 웹사이트를 참조하라'는 의미가 되어야 하므로 전치사 to와 함께 '~을 참조하다'라는 뜻을 나타내는 (D) refer가 정답이다. 자동사로 쓰일 경우 (A) elect는 '선거하다', (C) present는 '(증상 등이) 나타나다'라는 뜻이고, 특히 (B) adapt는 '~에 적응하다'라는 뜻으로 전치사 to와 자주 쓰이지만 문맥상 적합하지 않다."
            },
            {
                "id": "q127",
                "text": "Samidu Communications is soliciting suggestions from its staff about ways of improving employee _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "produced"
                    },
                    {
                        "label": "B",
                        "text": "productive"
                    },
                    {
                        "label": "C",
                        "text": "productivity"
                    },
                    {
                        "label": "D",
                        "text": "productively"
                    }
                ],
                "classification": "G_POS",
                "testId": 10,
                "correctAnswer": "C",
                "translation": "사미두 커뮤니케이션즈는 직원 생산성을 향상시킬 방법에 대한 직원들의 제안을 수렴하고 있다.",
                "explanation": "전치사 of 뒤의 동명사 improving의 목적어 자리로, 빈칸 앞의 명사 employee와 함께 복합명사를 이루는 명사가 들어가야 적절하므로 (C) productivity가 정답이다. (A) produced는 동사/과거분사, (B) productive는 형용사, (D) productively는 부사이다. 참고로, employee는 가산 단수명사로 앞에 한정사 없이 쓸 수 없으므로 해당 문장에서 복합명사의 앞자리 명사임을 알 수 있다."
            },
            {
                "id": "q128",
                "text": "Mr. Ben-Moshe always reserves the banquet room at Saitomi's Kitchen _____ the sales team has a holiday event.",
                "options": [
                    {
                        "label": "A",
                        "text": "whenever"
                    },
                    {
                        "label": "B",
                        "text": "regarding"
                    },
                    {
                        "label": "C",
                        "text": "whether"
                    },
                    {
                        "label": "D",
                        "text": "besides"
                    }
                ],
                "classification": "G_CONJ",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "벤모셰 씨는 영업팀이 휴일 기념 행사를 할 때마다 항상 사이토미스키친에 연회장을 예약한다.",
                "explanation": "빈칸은 뒤에 오는 완전한 절(the sales team has a holiday event)을 이끌어 앞의 주절을 수식하는 부사절 접속사 자리로, 문맥상 '영업팀이 휴일 기념 행사를 할 때마다'라는 의미가 되어야 자연스럽다. 따라서 '~할 때마다'라는 뜻으로 부사절을 이끄는 복합관계부사 (A) whenever가 정답이다. (B) regarding(~에 관하여)과 (D) besides(~ 외에도)는 전치사이므로 절을 연결할 수 없고, (C) whether는 부사절 접속사로 쓰일 경우 보통 or와 함께 '~이든 아니든'이라는 의미를 나타내므로 문맥상 적절하지 않다."
            },
            {
                "id": "q129",
                "text": "Annika Dulin _____ the marketing department at Tollason Industries' planning meeting tomorrow.",
                "options": [
                    {
                        "label": "A",
                        "text": "will represent"
                    },
                    {
                        "label": "B",
                        "text": "had represented"
                    },
                    {
                        "label": "C",
                        "text": "to represent"
                    },
                    {
                        "label": "D",
                        "text": "be representing"
                    }
                ],
                "classification": "G_VERB",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "아니카 둘린은 내일 톨라슨 인더스트리스의 기획 회의에서 마케팅 부서를 대표할 예정이다.",
                "explanation": "Annika Dulin이 주어, the marketing department가 목적어인 문장의 동사 자리이다. 문장 끝에 미래를 나타내는 tomorrow가 있으므로 미래 시제를 나타내는 (A) will represent가 정답이다."
            },
            {
                "id": "q130",
                "text": "Do not post any statements about the company on social media without prior _____.",
                "options": [
                    {
                        "label": "A",
                        "text": "authorization"
                    },
                    {
                        "label": "B",
                        "text": "supplement"
                    },
                    {
                        "label": "C",
                        "text": "consequence"
                    },
                    {
                        "label": "D",
                        "text": "responsibility"
                    }
                ],
                "classification": "V_NOUN",
                "testId": 10,
                "correctAnswer": "A",
                "translation": "사전 승인 없이 소셜 미디어에 회사에 대한 어떠한 발언도 게시하지 마십시오.",
                "explanation": "문맥상 '사전 승인 없이'라는 내용이 되어야 자연스러우므로 '승인, 허가'라는 뜻의 (A) authorization이 정답이다. (B) supplement는 '보충', (C) consequence는 '결과', (D) responsibility는 '책임'이라는 뜻이다."
            }
        ]
    }
]
    ;
// Helper to find specific questions across all sets
export const getQuestionsByIds = (ids: string[]): Part5TestQuestion[] => {
    const allQuestions = part5TestData.flatMap(set => set.questions);
    // Create a map for O(1) lookup
    const questionMap = new Map(allQuestions.map(q => [q.id, q]));

    return ids.map(id => questionMap.get(id)).filter((q): q is Part5TestQuestion => !!q);
};

// Get all Part 5 questions from all tests
export const getAllPart5Questions = (): Part5TestQuestion[] => {
    return part5TestData.flatMap(set => set.questions);
};

// Find similar questions based on classification
export const findSimilarQuestions = (
    classification: string,
    excludeIds: string[],
    count: number = 3
): Part5TestQuestion[] => {
    const allQuestions = getAllPart5Questions();

    // Filter questions with same classification, excluding specified IDs
    const similarQuestions = allQuestions.filter(q =>
        q.classification === classification &&
        !excludeIds.includes(q.id)
    );

    // Shuffle and return requested count
    const shuffled = similarQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};
