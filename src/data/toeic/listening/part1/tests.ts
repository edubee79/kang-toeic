export interface Part1Question {
    id: string;
    image: string; // URL or local path
    audio: string; // URL or local path
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    script?: {
        A: string;
        B: string;
        C: string;
        D: string;
        translation_A?: string;
        translation_B?: string;
        translation_C?: string;
        translation_D?: string;
    };
}

export interface Part1TestSet {
    testId: number;
    title: string;
    questions: Part1Question[];
}

export const part1RealTests: Part1TestSet[] = [
    {
        testId: 1,
        title: "Test 1",
        questions: [
            {
                id: "p1_t1_q1",
                image: "/images/ETS_TOEIC_3/Test_01/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_01/TEST%2001_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "He's parking a truck.",
                    B: "He's lifting some furniture.",
                    C: "He's starting an engine.",
                    D: "He's driving a car.",
                    translation_A: "남자가 트럭을 주차하고 있다.",
                    translation_B: "남자가 가구를 들고 있다.",
                    translation_C: "남자가 엔진을 시동걸고 있다.",
                    translation_D: "남자가 차를 몰고 있다."
                }
            },
            {
                id: "p1_t1_q2",
                image: "/images/ETS_TOEIC_3/Test_01/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_01/TEST%2001_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some curtains have been closed.",
                    B: "Some jackets have been laid on a chair.",
                    C: "Some people are gathered around a desk.",
                    D: "Someone is turning on a lamp.",
                    translation_A: "커튼이 닫혀 있다.",
                    translation_B: "재킷들이 의자에 놓여 있다.",
                    translation_C: "몇몇 사람들이 책상에 모여 있다.",
                    translation_D: "누군가가 램프를 켜고 있다."
                }
            },
            {
                id: "p1_t1_q3",
                image: "/images/ETS_TOEIC_3/Test_01/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_01/TEST%2001_PART%201_3.mp3",
                correctAnswer: "C",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "One of the women is reaching into her bag.",
                    B: "The women are waiting in a line.",
                    C: "The man is loading up a group.",
                    D: "The man is opening a cash register.",
                    translation_A: "여자들 중 한 명이 가방 안에 손을 넣고 있다.",
                    translation_B: "여자들이 줄을 서서 기다리고 있다.",
                    translation_C: "남자가 금전 등록기를 열고 있다.",
                    translation_D: "남자가 그룹을 태우고 있다."
                }
            },
            {
                id: "p1_t1_q4",
                image: "/images/ETS_TOEIC_3/Test_01/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_01/TEST%2001_PART%201_4.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The man is bending over a bicycle.",
                    B: "A wheel has been propped against a stack of bricks.",
                    C: "The man is collecting some pieces of wood.",
                    D: "A handrail is being installed.",
                    translation_A: "남자가 자전거 위로 몸을 굽히고 있다.",
                    translation_B: "바퀴가 벽돌 더미에 기대어 놓였다.",
                    translation_C: "남자가 나무 조각들을 모으고 있다.",
                    translation_D: "난간이 설치되고 있다."
                }
            },
            {
                id: "p1_t1_q5",
                image: "/images/ETS_TOEIC_3/Test_01/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_01/TEST%2001_PART%201_5.mp3",
                correctAnswer: "D",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "An armchair has been placed under a window.",
                    B: "Some reading materials have fallen on the floor.",
                    C: "Some flowers are being watered.",
                    D: "Some picture frames are hanging on a wall.",
                    translation_A: "안락 의자가 창문 아래에 놓여 있다.",
                    translation_B: "종이 뭉치들이 바닥에 떨어져 있다.",
                    translation_C: "꽃에 물이 뿌려지고 있다.",
                    translation_D: "액자들이 벽에 걸려 있다."
                }
            },
            {
                id: "p1_t1_q6",
                image: "/images/ETS_TOEIC_3/Test_01/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_01/TEST%2001_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's adjusting the height of an umbrella.",
                    B: "She's inspecting the tires on a vending cart.",
                    C: "There's a mobile food stand on a walkway.",
                    D: "She's cooking utensils on the ground.",
                    translation_A: "여자가 파라솔 높이를 조절하고 있다.",
                    translation_B: "그녀가 판매 카트의 타이어를 점검하고 있다.",
                    translation_C: "보도에 이동식 음식 가판대가 있다.",
                    translation_D: "여자가 조리 기구들이 바닥에 있다."
                }
            }
        ]
    },
    {
        testId: 2,
        title: "Test 2",
        questions: [
            {
                id: "p1_t2_q1",
                image: "/images/ETS_TOEIC_3/Test_02/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_02/TEST%2002_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "He's folding some clothes.",
                    B: "He's looking into a laundry cart.",
                    C: "He's removing some clothes from hangers.",
                    D: "He's standing in front of a washing machine.",
                    translation_A: "남자가 옷을 개고 있다.",
                    translation_B: "남자가 세탁물 통을 들여다보고 있다.",
                    translation_C: "남자가 옷걸이에서 옷을 꺼내고 있다.",
                    translation_D: "남자가 세탁기 앞에 서 있다."
                }
            },
            {
                id: "p1_t2_q2",
                image: "/images/ETS_TOEIC_3/Test_02/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_02/TEST%2002_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The man is leaning against a doorway.",
                    B: "The man is opening up a package.",
                    C: "One of the women is plugging in a printer.",
                    D: "One of the women is wearing glasses.",
                    translation_A: "남자가 출입구에 기대어 있다.",
                    translation_B: "남자가 꾸러미를 풀고 있다.",
                    translation_C: "여성 중 한 명이 프린터를 꽂고 있다.",
                    translation_D: "여성 중 한 명이 안경을 쓰고 있다."
                }
            },
            {
                id: "p1_t2_q3",
                image: "/images/ETS_TOEIC_3/Test_02/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_02/TEST%2002_PART%201_3.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She is attaching price tags to some merchandise.",
                    B: "She is piling up some boxes.",
                    C: "She is holding up some fruit.",
                    D: "She is throwing away a plastic bag.",
                    translation_A: "여성이 가격표를 붙이고 있다.",
                    translation_B: "여자가 상자를 쌓고 있다.",
                    translation_C: "여자가 과일을 들고 있다.",
                    translation_D: "여자가 비닐봉투를 버리고 있다."
                }
            },
            {
                id: "p1_t2_q4",
                image: "/images/ETS_TOEIC_3/Test_02/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_02/TEST%2002_PART%201_4.mp3",
                correctAnswer: "C",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A jacket has been placed on the ground.",
                    B: "A man is watering some flowers.",
                    C: "A garden has been planted outside of a building.",
                    D: "A man is putting some tools in a toolbox.",
                    translation_A: "재킷이 땅에 놓여 있다.",
                    translation_B: "남자가 꽃에 물을 주고 있다.",
                    translation_C: "건물 밖에 정원이 심겨져 있다.",
                    translation_D: "남자가 공구 상자에 공구를 넣고 있다."
                }
            },
            {
                id: "p1_t2_q5",
                image: "/images/ETS_TOEIC_3/Test_02/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_02/TEST%2002_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some chairs are stacked in the corner.",
                    B: "Some light fixtures are mounted on the walls.",
                    C: "Some tables are covered with tablecloths.",
                    D: "Some furniture is on display in a window.",
                    translation_A: "의자들이 구석에 쌓여 있다.",
                    translation_B: "조명 기구들이 벽에 설치되어 있다.",
                    translation_C: "식탁보가 식탁보 위에 덮여 있다.",
                    translation_D: "가구들이 진열장에 진열되어 있다."
                }
            },
            {
                id: "p1_t2_q6",
                image: "/images/ETS_TOEIC_3/Test_02/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_02/TEST%2002_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "One of the employees is walking with an empty tray.",
                    B: "One of the employees is taping signs to a board.",
                    C: "One of the employees is carrying a pair of scissors.",
                    D: "One of the employees is hanging an apron on a hook.",
                    translation_A: "직원들 중 한 명이 빈 쟁반을 들고 걸어가고 있다.",
                    translation_B: "직원들 중 한 명이 게시판에 표지판을 테이프로 붙이고 있다.",
                    translation_C: "직원들 중 한 명이 가위를 들고 있다.",
                    translation_D: "직원들 중 한 명이 앞치마를 고리에 걸고 있다."
                }
            }
        ]
    },
    {
        testId: 3,
        title: "Test 3",
        questions: [
            {
                id: "p1_t3_q1",
                image: "/images/ETS_TOEIC_3/Test_03/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_03/TEST%2003_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "He's leaning over a container.",
                    B: "He's digging in a garden.",
                    C: "He's removing some floor tiles.",
                    D: "He's trimming some trees.",
                    translation_A: "남자가 용기를 기울이고 있다.",
                    translation_B: "남자가 정원을 파고 있다.",
                    translation_C: "남자가 바닥 타일을 제거하고 있다.",
                    translation_D: "남자가 가지를 치고 있다."
                }
            },
            {
                id: "p1_t3_q2",
                image: "/images/ETS_TOEIC_3/Test_03/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_03/TEST%2003_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A customer is picking up some clothing at a dry cleaner's.",
                    B: "A customer is trying on a jacket.",
                    C: "A customer is handing a worker some cash.",
                    D: "A worker is typing on a computer.",
                    translation_A: "손님이 세탁소에서 옷을 찾고 있다.",
                    translation_B: "손님이 재킷을 입어보고 있다.",
                    translation_C: "손님이 직원에게 현금을 건내고 있다.",
                    translation_D: "직원이 컴퓨터로 타자를 치고 있다."
                }
            },
            {
                id: "p1_t3_q3",
                image: "/images/ETS_TOEIC_3/Test_03/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_03/TEST%2003_PART%201_3.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's paying for her meal.",
                    B: "She's pouring a beverage.",
                    C: "She's facing a refrigerated display case.",
                    D: "She's ordering her lunch from a server.",
                    translation_A: "여자가 식사를 계산하고 있다.",
                    translation_B: "여자가 음료를 따르고 있다.",
                    translation_C: "여자가 냉장 진열장을 마주보고 있다.",
                    translation_D: "여자가 서버에게 점심을 주문하고 있다."
                }
            },
            {
                id: "p1_t3_q4",
                image: "/images/ETS_TOEIC_3/Test_03/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_03/TEST%2003_PART%201_4.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "He's putting vegetables into a bag.",
                    B: "He's setting up a tent.",
                    C: "The rear door of a van are open.",
                    D: "Some boxes have been stored inside a vehicle.",
                    translation_A: "남자가 봉투에 야채를 넣고 있다.",
                    translation_B: "남자가 텐트를 치고 있다.",
                    translation_C: "승합차 뒷문이 열려 있다.",
                    translation_D: "상자들이 차 안에 보관되어 있다."
                }
            },
            {
                id: "p1_t3_q5",
                image: "/images/ETS_TOEIC_3/Test_03/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_03/TEST%2003_PART%201_5.mp3",
                correctAnswer: "B",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The speaker is positioned next to a podium.",
                    B: "The man is drawing a graph on a presentation board.",
                    C: "One of the women is watching a video.",
                    D: "One of the women is adjusting her glasses.",
                    translation_A: "강연대가 연단 옆에 위치해 있다.",
                    translation_B: "남자가 발표용 보드에 그래프를 그리고 있다.",
                    translation_C: "여자들 중 한 명이 동영상을 보고 있다.",
                    translation_D: "여자들 중 한 명이 안경을 고쳐 쓰고 있다."
                }
            },
            {
                id: "p1_t3_q6",
                image: "/images/ETS_TOEIC_3/Test_03/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_03/TEST%2003_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some chairs have been arranged on a balcony.",
                    B: "A clock has been propped up on a shelf.",
                    C: "Some plants have been laid out on a bench.",
                    D: "A light fixture is hanging above a dining area.",
                    translation_A: "의자들이 발코니에 정돈되어 있다.",
                    translation_B: "시계가 선반 위에 받쳐져 있다.",
                    translation_C: "화분 몇 개가 벤치 위에 놓여 있다.",
                    translation_D: "조명이 식탁 공간 위에 걸려 있다."
                }
            }
        ]
    },
    {
        testId: 4,
        title: "Test 4",
        questions: [
            {
                id: "p1_t4_q1",
                image: "/images/ETS_TOEIC_3/Test_04/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_04/TEST%2004_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's kneeling in front of a chalkboard.",
                    B: "She's sweeping a tile floor.",
                    C: "She's signing a receipt.",
                    D: "She's clearing off a countertop.",
                    translation_A: "여자가 칠판 앞에 무릎을 꿇고 있다.",
                    translation_B: "여자가 타일 바닥을 쓸고 있다.",
                    translation_C: "여자가 영수증에 서명하고 있다.",
                    translation_D: "여자가 조리대를 치우고 있다."
                }
            },
            {
                id: "p1_t4_q2",
                image: "/images/ETS_TOEIC_3/Test_04/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_04/TEST%2004_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A man is polishing the floor.",
                    B: "A man is unzipping a suitcase.",
                    C: "A man is picking up a cushion.",
                    D: "A man is drinking from a bottle.",
                    translation_A: "남자가 바닥을 닦고 있다.",
                    translation_B: "남자가 여행 가방을 지퍼를 열고 있다.",
                    translation_C: "남자가 쿠션을 줍고 있다.",
                    translation_D: "남자가 병으로 마시고 있다."
                }
            },
            {
                id: "p1_t4_q3",
                image: "/images/ETS_TOEIC_3/Test_04/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_04/TEST%2004_PART%201_3.mp3",
                correctAnswer: "B",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "An announcer is setting down a microphone.",
                    B: "Some workers are constructing a platform.",
                    C: "There are some performers on a stage.",
                    D: "Some musicians are unpacking their equipment.",
                    translation_A: "아나운서가 마이크를 내려놓고 있다.",
                    translation_B: "몇몇 사람들이 발판을 만들고 있다.",
                    translation_C: "무대 위에 몇몇 공연자들이 있다.",
                    translation_D: "몇몇 음악가들이 장비를 꺼내고 있다."
                }
            },
            {
                id: "p1_t4_q4",
                image: "/images/ETS_TOEIC_3/Test_04/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_04/TEST%2004_PART%201_4.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The woman is hanging up some posters.",
                    B: "The women is writing on a document.",
                    C: "A laptop is being put away.",
                    D: "A flowerpot is being stored on a shelf.",
                    translation_A: "여자가 포스터를 걸고 있다.",
                    translation_B: "여자가 서류에 글을 쓰고 있다.",
                    translation_C: "랩탑이 치워지고 있다.",
                    translation_D: "화분이 선반에 보관되고 있다."
                }
            },
            {
                id: "p1_t4_q5",
                image: "/images/ETS_TOEIC_3/Test_04/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_04/TEST%2004_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The presenter is closing a window.",
                    B: "The audience is standing behind a podium.",
                    C: "The audience is seated in a circle.",
                    D: "The audience is seated.",
                    translation_A: "발표자가 창을 닫고 있다.",
                    translation_B: "청중이 연단 뒤에 서 있다.",
                    translation_C: "청중이 둥글게 앉아 있다.",
                    translation_D: "청중이 앉아 있다."
                }
            },
            {
                id: "p1_t4_q6",
                image: "/images/ETS_TOEIC_3/Test_04/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_04/TEST%2004_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some passengers are waiting on the walkway.",
                    B: "Some bicycles are mounted on a bus.",
                    C: "A bus is being driven down a road.",
                    D: "A garage door has been opened.",
                    translation_A: "몇몇 승객들이 보도에서 기다리고 있다.",
                    translation_B: "몇몇 자전거들이 버스에 탑재되어 있다.",
                    translation_C: "버스가 도로를 따라 운행되고 있다.",
                    translation_D: "차고 문이 열려 있다."
                }
            }
        ]
    },
    {
        testId: 5,
        title: "Test 5",
        questions: [
            {
                id: "p1_t5_q1",
                image: "/images/ETS_TOEIC_3/Test_05/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_05/TEST%2005_PART%201_1.mp3",
                correctAnswer: "D",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The people are watching a presentation.",
                    B: "Some books are being placed on a cart.",
                    C: "The people are kneeling in front of a shelf.",
                    D: "The people are visiting a library.",
                    translation_A: "사람들이 발표를 보고 있다.",
                    translation_B: "책들이 카트에 놓여지고 있다.",
                    translation_C: "사람들이 선반 앞에 무릎을 꿇고 있다.",
                    translation_D: "사람들이 도서관을 방문하고 있다."
                }
            },
            {
                id: "p1_t5_q2",
                image: "/images/ETS_TOEIC_3/Test_05/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_05/TEST%2005_PART%201_2.mp3",
                correctAnswer: "C",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The women are facing each other.",
                    B: "The women are walking together.",
                    C: "One of the women is removing an item from her purse.",
                    D: "One of the women is drinking from a coffee cup.",
                    translation_A: "여자들이 서로 마주보고 있다.",
                    translation_B: "여자들이 함께 걷고 있다.",
                    translation_C: "여자들 중 한 명이 핸드백에서 물건을 꺼내고 있다.",
                    translation_D: "여자들 중 한 명이 커피잔으로 마시고 있다."
                }
            },
            {
                id: "p1_t5_q3",
                image: "/images/ETS_TOEIC_3/Test_05/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_05/TEST%2005_PART%201_3.mp3",
                correctAnswer: "C",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "One of the men is emptying out a plastic bag.",
                    B: "They're waiting in line at a checkout counter.",
                    C: "One of the men is pointing at some flowers.",
                    D: "They're selecting some fruits and vegetables.",
                    translation_A: "남자들 중 한 명이 비닐봉투를 비우고 있다.",
                    translation_B: "사람들이 계산대에서 줄을 서서 기다리고 있다.",
                    translation_C: "남자들 중 한 명이 꽃들을 가리키고 있다.",
                    translation_D: "사람들이 과일과 채소를 고르고 있다."
                }
            },
            {
                id: "p1_t5_q4",
                image: "/images/ETS_TOEIC_3/Test_05/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_05/TEST%2005_PART%201_4.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some plants have been arranged in a row.",
                    B: "The woman is leaning against a windowsill.",
                    C: "Some cabinets have been opened at a workstation.",
                    D: "The woman is reading a billboard.",
                    translation_A: "식물들이 일렬로 배열되어 있다.",
                    translation_B: "여자가 창틀에 기대어 있다.",
                    translation_C: "캐비닛이 열려 있다.",
                    translation_D: "여자가 광고판을 읽고 있다."
                }
            },
            {
                id: "p1_t5_q5",
                image: "/images/ETS_TOEIC_3/Test_05/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_05/TEST%2005_PART%201_5.mp3",
                correctAnswer: "D",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A house overlooks a fishing pier.",
                    B: "Ducks are swimming in a lake.",
                    C: "A bridge crosses over a river.",
                    D: "Some trees border a pond.",
                    translation_A: "주택이 낚시터에 내려다보인다.",
                    translation_B: "오리들이 호수에서 헤엄치고 있다.",
                    translation_C: "다리가 강 위를 가로지르고 있다.",
                    translation_D: "나무들이 연못에 접해 있다."
                }
            },
            {
                id: "p1_t5_q6",
                image: "/images/ETS_TOEIC_3/Test_05/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_05/TEST%2005_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "One of the women is picking up a suitcase.",
                    B: "Her arm.",
                    C: "One of the women is holding a notebook under her arm.",
                    D: "One of the women is standing in the doorway.",
                    translation_A: "여자들 중 한 명이 여행 가방을 들고 있다.",
                    translation_B: "팔.",
                    translation_C: "여자들 중 한 명이 팔에 책을 끼고 있다.",
                    translation_D: "여자들 중 한 명이 문틀에 서 있다."
                }
            }
        ]
    },
    {
        testId: 6,
        title: "Test 6",
        questions: [
            {
                id: "p1_t6_q1",
                image: "/images/ETS_TOEIC_3/Test_06/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_06/TEST%2006_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's looking out a window.",
                    B: "She's taking an item out of a refrigerator.",
                    C: "She's grabbing a handful of carrots.",
                    D: "She's putting some items in a bag.",
                    translation_A: "여자가 창밖을 내다보고 있다.",
                    translation_B: "여자가 냉장고에서 물건을 꺼내고 있다.",
                    translation_C: "여자가 당근을 한 웅큼 움켜쥐고 있다.",
                    translation_D: "여자가 가방에 물건들을 넣고 있다."
                }
            },
            {
                id: "p1_t6_q2",
                image: "/images/ETS_TOEIC_3/Test_06/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_06/TEST%2006_PART%201_2.mp3",
                correctAnswer: "D",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "One of the women is tying her shoe.",
                    B: "One of the women is wearing a hat.",
                    C: "One of the women is standing near a park bench.",
                    D: "One of the women is carrying a computer up some stairs.",
                    translation_A: "여자들 중 한 명이 신발끈을 묶고 있다.",
                    translation_B: "여자들 중 한 명이 모자를 쓰고 있다.",
                    translation_C: "여자들 중 한 명이 공원 벤치 근처에 서 있다.",
                    translation_D: "여자들 중 한 명이 컴퓨터를 들고 계단을 오르고 있다."
                }
            },
            {
                id: "p1_t6_q3",
                image: "/images/ETS_TOEIC_3/Test_06/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_06/TEST%2006_PART%201_3.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The man is setting a clock.",
                    B: "The man is reaching for a box.",
                    C: "The man is posting some information.",
                    D: "The man is handing some food to the woman.",
                    translation_A: "남자가 시계를 맞추고 있다.",
                    translation_B: "남자가 상자를 잡으려고 하고 있다.",
                    translation_C: "남자가 정보를 게시하고 있다.",
                    translation_D: "남자가 여자에게 음식을 건네고 있다."
                }
            },
            {
                id: "p1_t6_q4",
                image: "/images/ETS_TOEIC_3/Test_06/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_06/TEST%2006_PART%201_4.mp3",
                correctAnswer: "D",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "He's twisting some wires.",
                    B: "He's pruning a bush next to a building.",
                    C: "He's lifting a block.",
                    D: "He's spreading cement with a shovel.",
                    translation_A: "남자가 전선을 꼬고 있다.",
                    translation_B: "남자가 건물 옆에 있는 관목 가지를 치고 있다.",
                    translation_C: "남자가 블록을 들어올리고 있다.",
                    translation_D: "남자가 삽으로 시멘트를 펴고 있다."
                }
            },
            {
                id: "p1_t6_q5",
                image: "/images/ETS_TOEIC_3/Test_06/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_06/TEST%2006_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The women are facing a desk.",
                    B: "One of the women is holding a jacket.",
                    C: "A drawer has been left open.",
                    D: "Some folders have been placed on top of a file cabinet.",
                    translation_A: "여자들이 책상을 마주보고 있다.",
                    translation_B: "여자들 중 한 명이 재킷을 들고 있다.",
                    translation_C: "서랍이 열려 있다.",
                    translation_D: "폴더들이 캐비넷 위에 놓여 있다."
                }
            },
            {
                id: "p1_t6_q6",
                image: "/images/ETS_TOEIC_3/Test_06/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_06/TEST%2006_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some cups have been emptied.",
                    B: "A fruit basket has been emptied.",
                    C: "Some coffee has spilled on the counter.",
                    D: "Some cups are being filled with water.",
                    translation_A: "컵들이 비워져 있다.",
                    translation_B: "과일 바구니가 비워져 있다.",
                    translation_C: "커피가 조리대 위에 엎질러져 있다.",
                    translation_D: "컵들이 물로 채워지고 있다."
                }
            }
        ]
    },
    {
        testId: 7,
        title: "Test 7",
        questions: [
            {
                id: "p1_t7_q1",
                image: "/images/ETS_TOEIC_3/Test_07/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_07/TEST%2007_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's plugging in a fan.",
                    B: "She's packing up some equipment.",
                    C: "She's bending down to tie her shoe.",
                    D: "She's entering a storeroom.",
                    translation_A: "여자가 선풍기에 플러그를 꽂고 있다.",
                    translation_B: "여자가 장비를 챙기고 있다.",
                    translation_C: "여자가 신발 끈을 묶으려고 숙이고 있다.",
                    translation_D: "여자가 창고로 들어가고 있다."
                }
            },
            {
                id: "p1_t7_q2",
                image: "/images/ETS_TOEIC_3/Test_07/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_07/TEST%2007_PART%201_2.mp3",
                correctAnswer: "B",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "They're carrying trays of food.",
                    B: "They're walking into a building.",
                    C: "They're approaching a sign in a parking area.",
                    D: "They're opening the doors of a vehicle.",
                    translation_A: "사람들이 음식 쟁반을 나르고 있다.",
                    translation_B: "사람들이 건물 안으로 걸어가고 있다.",
                    translation_C: "사람들이 주차 구역의 표지판에 다가가고 있다.",
                    translation_D: "사람들이 차량의 문을 열고 있다."
                }
            },
            {
                id: "p1_t7_q3",
                image: "/images/ETS_TOEIC_3/Test_07/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_07/TEST%2007_PART%201_3.mp3",
                correctAnswer: "B",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "They're carrying a ladder.",
                    B: "They're putting away some rope.",
                    C: "They're installing a roof on a house.",
                    D: "They're organizing boxes of materials.",
                    translation_A: "사람들이 사다리를 나르고 있다.",
                    translation_B: "사람들이 밧줄을 치우고 있다.",
                    translation_C: "사람들이 지붕을 시공하고 있다.",
                    translation_D: "사람들이 자재 상자를 정리하고 있다."
                }
            },
            {
                id: "p1_t7_q4",
                image: "/images/ETS_TOEIC_3/Test_07/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_07/TEST%2007_PART%201_4.mp3",
                correctAnswer: "C",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A stool has been set in a corner.",
                    B: "A woman is reaching for a light switch.",
                    C: "Some binders have been lined up on a shelf.",
                    D: "A woman is connecting a monitor to a keyboard.",
                    translation_A: "스툴이 모퉁이에 놓여져 있다.",
                    translation_B: "여자가 전등 스위치로 손을 뻗고 있다.",
                    translation_C: "바인더들이 선반에 정렬되어 있다.",
                    translation_D: "여자가 모니터를 키보드에 연결하고 있다."
                }
            },
            {
                id: "p1_t7_q5",
                image: "/images/ETS_TOEIC_3/Test_07/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_07/TEST%2007_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some pillows have been placed on a bed.",
                    B: "Some lamps are hanging from the ceiling.",
                    C: "Some bed linens are piled on the floor.",
                    D: "Some chairs are next to a nightstand.",
                    translation_A: "베개들이 침대에 놓여 있다.",
                    translation_B: "램프들이 천장에서 매달려 있다.",
                    translation_C: "침대 시트가 바닥에 쌓여 있다.",
                    translation_D: "의자들이 탁자 옆에 있다."
                }
            },
            {
                id: "p1_t7_q6",
                image: "/images/ETS_TOEIC_3/Test_07/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_07/TEST%2007_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "There are some passengers boarding a boat.",
                    B: "There's a deck overlooking a lake.",
                    C: "A motorboat is passing under a bridge.",
                    D: "Some people are diving off a pier.",
                    translation_A: "승객들이 배에 타고 있다.",
                    translation_B: "데크가 호수를 내려다보고 있다.",
                    translation_C: "모터보트가 다리 밑으로 지나가고 있다.",
                    translation_D: "몇몇 사람들이 부두에서 다이빙하고 있다."
                }
            }
        ]
    },
    {
        testId: 8,
        title: "Test 8",
        questions: [
            {
                id: "p1_t8_q1",
                image: "/images/ETS_TOEIC_3/Test_08/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_08/TEST%2008_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The people are decorating a wall.",
                    B: "The man is using a napkin.",
                    C: "One of the women is serving food.",
                    D: "The people are looking at some menus.",
                    translation_A: "사람들이 벽을 장식하고 있다.",
                    translation_B: "남자가 냅킨을 사용하고 있다.",
                    translation_C: "여자들 중 한 명이 음식을 옮겨주고 있다.",
                    translation_D: "사람들이 메뉴를 보고 있다."
                }
            },
            {
                id: "p1_t8_q2",
                image: "/images/ETS_TOEIC_3/Test_08/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_08/TEST%2008_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The woman is standing on a stool.",
                    B: "The woman is replacing a lightbulb.",
                    C: "The woman is installing a bookshelf.",
                    D: "The woman is climbing a staircase.",
                    translation_A: "여자가 의자 위에 서있다.",
                    translation_B: "여자가 전구를 교체하고 있다.",
                    translation_C: "여자가 책장을 설치하고 있다.",
                    translation_D: "여자가 계단을 오르고 있다."
                }
            },
            {
                id: "p1_t8_q3",
                image: "/images/ETS_TOEIC_3/Test_08/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_08/TEST%2008_PART%201_3.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some people are planting some trees.",
                    B: "Some people are strolling on a path.",
                    C: "Some people are getting on a train.",
                    D: "Some people are jogging on a beach.",
                    translation_A: "사람들이 나무를 심고 있다.",
                    translation_B: "사람들이 산책로를 걷고 있다.",
                    translation_C: "사람들이 기차를 타고 있다.",
                    translation_D: "사람들이 해변에서 조깅을 하고 있다."
                }
            },
            {
                id: "p1_t8_q4",
                image: "/images/ETS_TOEIC_3/Test_08/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_08/TEST%2008_PART%201_4.mp3",
                correctAnswer: "C",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The men are facing each other.",
                    B: "The men are crossing a street.",
                    C: "The men have stopped on a walkway.",
                    D: "The men have left their suitcases open.",
                    translation_A: "사람들이 서로 마주보고 있다.",
                    translation_B: "사람들이 길을 건너고 있다.",
                    translation_C: "사람들이 보도에 멈춰 서있다.",
                    translation_D: "사람들이 여행 가방을 열어 놓고 있다."
                }
            },
            {
                id: "p1_t8_q5",
                image: "/images/ETS_TOEIC_3/Test_08/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_08/TEST%2008_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some leaves have been swept into a pile.",
                    B: "Some furniture has been stacked near a fence.",
                    C: "An umbrella has fallen on the ground.",
                    D: "A bicycle has been chained to a pole.",
                    translation_A: "나뭇잎이 더미로 쓸려 있다.",
                    translation_B: "가구가 울타리 근처에 쌓여 있다.",
                    translation_C: "우산이 땅에 떨어져 있다.",
                    translation_D: "자전거가 기둥에 묶여 있다."
                }
            },
            {
                id: "p1_t8_q6",
                image: "/images/ETS_TOEIC_3/Test_08/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_08/TEST%2008_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A man is walking into a garden area.",
                    B: "The entrance to a building has been blocked by boxes.",
                    C: "Some notices have been posted to a bulletin board.",
                    D: "One of the women is refilling a copy machine with paper.",
                    translation_A: "남자가 정원으로 걸어 들어가고 있다.",
                    translation_B: "건물 입구가 상자들로 막혀 있다.",
                    translation_C: "공고문들이 게시판에 붙어 있다.",
                    translation_D: "여자들 중 한 명이 복사기에 종이를 다시 채우고 있다."
                }
            }
        ]
    },
    {
        testId: 9,
        title: "Test 9",
        questions: [
            {
                id: "p1_t9_q1",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "He's untying a cloth apron.",
                    B: "He's setting a plastic bin on a shelf.",
                    C: "He's using a knife to slice some food.",
                    D: "He's putting some groceries in a drawer.",
                    translation_A: "남자가 앞치마를 풀고 있다.",
                    translation_B: "남자가 선반에 플라스틱 통을 놓고 있다.",
                    translation_C: "남자가 칼로 음식을 썰고 있다.",
                    translation_D: "남자가 식료품을 서랍에 넣고 있다."
                }
            },
            {
                id: "p1_t9_q2",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's fixing her sunglasses.",
                    B: "She's sitting on a bench.",
                    C: "She's reaching into a handbag.",
                    D: "She's talking on the phone.",
                    translation_A: "여자가 선글라스를 매만지고 있다.",
                    translation_B: "여자가 벤치에 앉아 있다.",
                    translation_C: "여자가 핸드백에 손을 넣고 있다.",
                    translation_D: "여자가 통화를 하고 있다."
                }
            },
            {
                id: "p1_t9_q3",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_3.mp3",
                correctAnswer: "B",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "One of the women is leaning over a trash can.",
                    B: "One of the women is looking at a post on a bulletin board.",
                    C: "One of the women is standing next to an entrance.",
                    D: "One of the women is counting money from a machine.",
                    translation_A: "여자들 중 한 명이 쓰레기통 위로 몸을 숙이고 있다.",
                    translation_B: "여자들 중 한 명이 게시판에 있는 게시물을 보고 있다.",
                    translation_C: "여자들 중 한 명이 입구 옆에 서 있다.",
                    translation_D: "여자들 중 한 명이 기계에서 돈을 세고 있다."
                }
            },
            {
                id: "p1_t9_q4",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_4.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A car has been parked beside a building.",
                    B: "A door has been propped open.",
                    C: "There's a sign posted on a fence.",
                    D: "Some plants have been arranged in a row.",
                    translation_A: "차가 건물 옆에 주차되어 있다.",
                    translation_B: "문이 열려 받쳐져 있다.",
                    translation_C: "울타리에 표지판이 붙어 있다.",
                    translation_D: "화초 몇 개가 일렬로 배열되어 있다."
                }
            },
            {
                id: "p1_t9_q5",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Some light fixtures are being installed.",
                    B: "A display case is being wiped.",
                    C: "A server is distributing menus.",
                    D: "A server is taking an order.",
                    translation_A: "조명 설비가 설치되고 있다.",
                    translation_B: "진열장을 닦고 있다.",
                    translation_C: "종업원이 메뉴를 나눠주고 있다.",
                    translation_D: "종업원이 주문을 받고 있다."
                }
            },
            {
                id: "p1_t9_q6",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A vehicle is covered in snow.",
                    B: "Some equipment is leaning against a truck.",
                    C: "He's driving a vehicle through some snow.",
                    D: "He's closing the back of a truck.",
                    translation_A: "차량이 눈으로 덮여 있다.",
                    translation_B: "장비 몇 개가 트럭에 기대어 있다.",
                    translation_C: "남자가 눈밭을 뚫고 차를 몰고 있다.",
                    translation_D: "남자가 트럭 뒷부분을 닫고 있다."
                }
            }
        ]
    },
    {
        testId: 10,
        title: "Test 10",
        questions: [
            {
                id: "p1_t10_q1",
                image: "/images/ETS_TOEIC_3/Test_10/Part_01/p1_q01.png",
                audio: "/audio/ETS_TOEIC_3/Test_10/TEST%2010_PART%201_1.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A man is organizing a display of fruit.",
                    B: "A man is getting some food from a cafeteria.",
                    C: "A man is cooking a meal in a kitchen.",
                    D: "A man is standing behind a cash register.",
                    translation_A: "남자가 과일들을 진열하고 있다.",
                    translation_B: "남자가 카페테리아에서 음식을 가져가고 있다.",
                    translation_C: "남자가 주방에서 요리를 하고 있다.",
                    translation_D: "남자가 계산대 뒤에 서 있다."
                }
            },
            {
                id: "p1_t10_q2",
                image: "/images/ETS_TOEIC_3/Test_10/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_10/TEST%2010_PART%201_2.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "The man is pointing at a location on a map.",
                    B: "The man is talking on a mobile phone.",
                    C: "The woman is taping a sign to the wall.",
                    D: "The woman is taking a pen from a drawer.",
                    translation_A: "남자가 지도 위치를 가리키고 있다.",
                    translation_B: "남자가 핸드폰으로 통화하고 있다.",
                    translation_C: "여자가 벽에 표지판을 붙이고 있다.",
                    translation_D: "여자가 서랍에서 펜을 꺼내고 있다."
                }
            },
            {
                id: "p1_t10_q3",
                image: "/images/ETS_TOEIC_3/Test_10/Part_01/p1_q03.png",
                audio: "/audio/ETS_TOEIC_3/Test_10/TEST%2010_PART%201_3.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "She's walking toward a trash bin.",
                    B: "She has set a basket on a lawn.",
                    C: "She has a rolled mat under her arm.",
                    D: "She's unpacking a picnic lunch near a tree.",
                    translation_A: "여자가 쓰레기통을 향해 걷고 있다.",
                    translation_B: "여자가 잔디밭에 바구니를 놓았다.",
                    translation_C: "여자가 매트를 팔에 끼고 있다.",
                    translation_D: "여자가 나무 근처에서 소풍 도시락을 풀고 있다."
                }
            },
            {
                id: "p1_t10_q4",
                image: "/images/ETS_TOEIC_3/Test_10/Part_01/p1_q04.png",
                audio: "/audio/ETS_TOEIC_3/Test_10/TEST%2010_PART%201_4.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A man is staring out a window.",
                    B: "A woman is reaching into her bag.",
                    C: "Some people are holding coffee cups.",
                    D: "Some people are waiting in line.",
                    translation_A: "남자가 창밖을 응시하고 있다.",
                    translation_B: "여자가 가방 안에 손을 넣고 있다.",
                    translation_C: "사람들이 커피잔을 들고 있다.",
                    translation_D: "사람들이 줄을 서서 기다리고 있다."
                }
            },
            {
                id: "p1_t10_q5",
                image: "/images/ETS_TOEIC_3/Test_10/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_10/TEST%2010_PART%201_5.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "Sets of utensils have been arranged on napkins.",
                    B: "Containers have been placed on chairs.",
                    C: "A tablecloth is being removed.",
                    D: "There is a stack of books next to some plates.",
                    translation_A: "식기 세트들이 냅킨 위에 정돈되어 있다.",
                    translation_B: "용기들이 의자에 놓여져 있다.",
                    translation_C: "식탁보가 치워지고 있다.",
                    translation_D: "접시 옆에 책들이 쌓여 있다."
                }
            },
            {
                id: "p1_t10_q6",
                image: "/images/ETS_TOEIC_3/Test_10/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_10/TEST%2010_PART%201_6.mp3",
                correctAnswer: "A",
                options: {
                    A: "(A)",
                    B: "(B)",
                    C: "(C)",
                    D: "(D)"
                },
                script: {
                    A: "A box is being loaded onto a truck.",
                    B: "Some people are inspecting the contents of a box.",
                    C: "Some boxes have been piled on a desk.",
                    D: "One of the people is lifting a box.",
                    translation_A: "상자가 트럭에 실리고 있다.",
                    translation_B: "사람들이 상자의 내용물을 검사하고 있다.",
                    translation_C: "책상 위에 상자들이 쌓여 있다.",
                    translation_D: "사람이 상자를 들어 올리고 있다."
                }
            }
        ]
    }
];
