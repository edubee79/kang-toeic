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
                    translation_A: "?⑥옄媛 ?몃윮??二쇱감?섍퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 媛援щ? ?ㅺ퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 ?붿쭊???쒕룞嫄멸퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 李⑤? 紐곌퀬 ?덈떎."
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
                    translation_A: "而ㅽ듉???ロ? ?덈떎.",
                    translation_B: "?ы궥?ㅼ씠 ?섏옄???볦뿬 ?덈떎.",
                    translation_C: "紐뉖챺 ?щ엺?ㅼ씠 梨낆긽??紐⑥뿬 ?덈떎.",
                    translation_D: "?꾧뎔媛媛 ?⑦봽瑜?耳쒓퀬 ?덈떎."
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
                    translation_A: "?ъ옄??以???紐낆씠 媛諛??덉뿉 ?먯쓣 ?ｊ퀬 ?덈떎.",
                    translation_B: "?ъ옄?ㅼ씠 以꾩쓣 ?쒖꽌 湲곕떎由ш퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 湲덉쟾 ?깅줉湲곕? ?닿퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 洹몃９???쒖슦怨??덈떎."
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
                    translation_A: "?⑥옄媛 ?먯쟾嫄??꾨줈 紐몄쓣 援쏀엳怨??덈떎.",
                    translation_B: "諛뷀닿? 踰쎈룎 ?붾???湲곕????볦???",
                    translation_C: "?⑥옄媛 ?섎Т 議곌컖?ㅼ쓣 紐⑥쑝怨??덈떎.",
                    translation_D: "?쒓컙???ㅼ튂?섍퀬 ?덈떎."
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
                    translation_A: "?덈씫 ?섏옄媛 李쎈Ц ?꾨옒???볦뿬 ?덈떎.",
                    translation_B: "醫낆씠 萸됱튂?ㅼ씠 諛붾떏???⑥뼱???덈떎.",
                    translation_C: "苑껋뿉 臾쇱씠 肉뚮젮吏怨??덈떎.",
                    translation_D: "?≪옄?ㅼ씠 踰쎌뿉 嫄몃젮 ?덈떎."
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
                    translation_A: "?ъ옄媛 ?뚮씪???믪씠瑜?議곗젅?섍퀬 ?덈떎.",
                    translation_B: "洹몃?媛 ?먮ℓ 移댄듃????댁뼱瑜??먭??섍퀬 ?덈떎.",
                    translation_C: "蹂대룄???대룞???뚯떇 媛?먮?媛 ?덈떎.",
                    translation_D: "?ъ옄媛 議곕━ 湲곌뎄?ㅼ씠 諛붾떏???덈떎."
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
                    translation_A: "?⑥옄媛 ?룹쓣 媛쒓퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 ?명긽臾??듭쓣 ?ㅼ뿬?ㅻ낫怨??덈떎.",
                    translation_C: "?⑥옄媛 ?룰구?댁뿉???룹쓣 爰쇰궡怨??덈떎.",
                    translation_D: "?⑥옄媛 ?명긽湲??욎뿉 ???덈떎."
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
                    translation_A: "?⑥옄媛 異쒖엯援ъ뿉 湲곕????덈떎.",
                    translation_B: "?⑥옄媛 袁몃윭誘몃? ?怨??덈떎.",
                    translation_C: "?ъ꽦 以???紐낆씠 ?꾨┛?곕? 苑귢퀬 ?덈떎.",
                    translation_D: "?ъ꽦 以???紐낆씠 ?덇꼍???곌퀬 ?덈떎."
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
                    translation_A: "?ъ꽦??媛寃⑺몴瑜?遺숈씠怨??덈떎.",
                    translation_B: "?ъ옄媛 ?곸옄瑜??볤퀬 ?덈떎.",
                    translation_C: "?ъ옄媛 怨쇱씪???ㅺ퀬 ?덈떎.",
                    translation_D: "?ъ옄媛 鍮꾨땺遊됲닾瑜?踰꾨━怨??덈떎."
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
                    translation_A: "?ы궥???낆뿉 ?볦뿬 ?덈떎.",
                    translation_B: "?⑥옄媛 苑껋뿉 臾쇱쓣 二쇨퀬 ?덈떎.",
                    translation_C: "嫄대Ъ 諛뽰뿉 ?뺤썝???ш꺼???덈떎.",
                    translation_D: "?⑥옄媛 怨듦뎄 ?곸옄??怨듦뎄瑜??ｊ퀬 ?덈떎."
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
                    translation_A: "?섏옄?ㅼ씠 援ъ꽍???볦뿬 ?덈떎.",
                    translation_B: "議곕챸 湲곌뎄?ㅼ씠 踰쎌뿉 ?ㅼ튂?섏뼱 ?덈떎.",
                    translation_C: "?앺긽蹂닿? ?앺긽蹂??꾩뿉 ??뿬 ?덈떎.",
                    translation_D: "媛援щ뱾??吏꾩뿴?μ뿉 吏꾩뿴?섏뼱 ?덈떎."
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
                    translation_A: "吏곸썝??以???紐낆씠 鍮??곷컲???ㅺ퀬 嫄몄뼱媛怨??덈떎.",
                    translation_B: "吏곸썝??以???紐낆씠 寃뚯떆?먯뿉 ?쒖??먯쓣 ?뚯씠?꾨줈 遺숈씠怨??덈떎.",
                    translation_C: "吏곸썝??以???紐낆씠 媛?꾨? ?ㅺ퀬 ?덈떎.",
                    translation_D: "吏곸썝??以???紐낆씠 ?욎튂留덈? 怨좊━??嫄멸퀬 ?덈떎."
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
                    translation_A: "?⑥옄媛 ?⑷린瑜?湲곗슱?닿퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 ?뺤썝???뚭퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 諛붾떏 ??쇱쓣 ?쒓굅?섍퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 媛吏瑜?移섍퀬 ?덈떎."
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
                    translation_A: "?먮떂???명긽?뚯뿉???룹쓣 李얘퀬 ?덈떎.",
                    translation_B: "?먮떂???ы궥???낆뼱蹂닿퀬 ?덈떎.",
                    translation_C: "?먮떂??吏곸썝?먭쾶 ?꾧툑??嫄대궡怨??덈떎.",
                    translation_D: "吏곸썝??而댄벂?곕줈 ??먮? 移섍퀬 ?덈떎."
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
                    translation_A: "?ъ옄媛 ?앹궗瑜?怨꾩궛?섍퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 ?뚮즺瑜??곕Ⅴ怨??덈떎.",
                    translation_C: "?ъ옄媛 ?됱옣 吏꾩뿴?μ쓣 留덉＜蹂닿퀬 ?덈떎.",
                    translation_D: "?ъ옄媛 ?쒕쾭?먭쾶 ?먯떖??二쇰Ц?섍퀬 ?덈떎."
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
                    translation_A: "?⑥옄媛 遊됲닾???쇱콈瑜??ｊ퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 ?먰듃瑜?移섍퀬 ?덈떎.",
                    translation_C: "?뱁빀李??룸Ц???대젮 ?덈떎.",
                    translation_D: "?곸옄?ㅼ씠 李??덉뿉 蹂닿??섏뼱 ?덈떎."
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
                    translation_A: "媛뺤뿰?媛 ?곕떒 ?놁뿉 ?꾩튂???덈떎.",
                    translation_B: "?⑥옄媛 諛쒗몴??蹂대뱶??洹몃옒?꾨? 洹몃━怨??덈떎.",
                    translation_C: "?ъ옄??以???紐낆씠 ?숈쁺?곸쓣 蹂닿퀬 ?덈떎.",
                    translation_D: "?ъ옄??以???紐낆씠 ?덇꼍??怨좎퀜 ?곌퀬 ?덈떎."
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
                    translation_A: "?섏옄?ㅼ씠 諛쒖퐫?덉뿉 ?뺣룉?섏뼱 ?덈떎.",
                    translation_B: "?쒓퀎媛 ?좊컲 ?꾩뿉 諛쏆퀜???덈떎.",
                    translation_C: "?붾텇 紐?媛쒓? 踰ㅼ튂 ?꾩뿉 ?볦뿬 ?덈떎.",
                    translation_D: "議곕챸???앺긽 怨듦컙 ?꾩뿉 嫄몃젮 ?덈떎."
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
                    translation_A: "?ъ옄媛 移좏뙋 ?욎뿉 臾대쫷??轅뉕퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 ???諛붾떏???멸퀬 ?덈떎.",
                    translation_C: "?ъ옄媛 ?곸닔利앹뿉 ?쒕챸?섍퀬 ?덈떎.",
                    translation_D: "?ъ옄媛 議곕━?瑜?移섏슦怨??덈떎."
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
                    translation_A: "?⑥옄媛 諛붾떏????퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 ?ы뻾 媛諛⑹쓣 吏?쇰? ?닿퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 荑좎뀡??以띻퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 蹂묒쑝濡?留덉떆怨??덈떎."
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
                    translation_A: "?꾨굹?댁꽌媛 留덉씠?щ? ?대젮?볤퀬 ?덈떎.",
                    translation_B: "紐뉖챺 ?щ엺?ㅼ씠 諛쒗뙋??留뚮뱾怨??덈떎.",
                    translation_C: "臾대? ?꾩뿉 紐뉖챺 怨듭뿰?먮뱾???덈떎.",
                    translation_D: "紐뉖챺 ?뚯븙媛?ㅼ씠 ?λ퉬瑜?爰쇰궡怨??덈떎."
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
                    translation_A: "?ъ옄媛 ?ъ뒪?곕? 嫄멸퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 ?쒕쪟??湲???곌퀬 ?덈떎.",
                    translation_C: "?⑺깙??移섏썙吏怨??덈떎.",
                    translation_D: "?붾텇???좊컲??蹂닿??섍퀬 ?덈떎."
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
                    translation_A: "諛쒗몴?먭? 李쎌쓣 ?リ퀬 ?덈떎.",
                    translation_B: "泥?쨷???곕떒 ?ㅼ뿉 ???덈떎.",
                    translation_C: "泥?쨷???κ?寃??됱븘 ?덈떎.",
                    translation_D: "泥?쨷???됱븘 ?덈떎."
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
                    translation_A: "紐뉖챺 ?밴컼?ㅼ씠 蹂대룄?먯꽌 湲곕떎由ш퀬 ?덈떎.",
                    translation_B: "紐뉖챺 ?먯쟾嫄곕뱾??踰꾩뒪???묒옱?섏뼱 ?덈떎.",
                    translation_C: "踰꾩뒪媛 ?꾨줈瑜??곕씪 ?댄뻾?섍퀬 ?덈떎.",
                    translation_D: "李④퀬 臾몄씠 ?대젮 ?덈떎."
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
                    translation_A: "?щ엺?ㅼ씠 諛쒗몴瑜?蹂닿퀬 ?덈떎.",
                    translation_B: "梨낅뱾??移댄듃???볦뿬吏怨??덈떎.",
                    translation_C: "?щ엺?ㅼ씠 ?좊컲 ?욎뿉 臾대쫷??轅뉕퀬 ?덈떎.",
                    translation_D: "?щ엺?ㅼ씠 ?꾩꽌愿??諛⑸Ц?섍퀬 ?덈떎."
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
                    translation_A: "?ъ옄?ㅼ씠 ?쒕줈 留덉＜蹂닿퀬 ?덈떎.",
                    translation_B: "?ъ옄?ㅼ씠 ?④퍡 嫄룰퀬 ?덈떎.",
                    translation_C: "?ъ옄??以???紐낆씠 ?몃뱶諛깆뿉??臾쇨굔??爰쇰궡怨??덈떎.",
                    translation_D: "?ъ옄??以???紐낆씠 而ㅽ뵾?붿쑝濡?留덉떆怨??덈떎."
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
                    translation_A: "?⑥옄??以???紐낆씠 鍮꾨땺遊됲닾瑜?鍮꾩슦怨??덈떎.",
                    translation_B: "?щ엺?ㅼ씠 怨꾩궛??먯꽌 以꾩쓣 ?쒖꽌 湲곕떎由ш퀬 ?덈떎.",
                    translation_C: "?⑥옄??以???紐낆씠 苑껊뱾??媛由ы궎怨??덈떎.",
                    translation_D: "?щ엺?ㅼ씠 怨쇱씪怨?梨꾩냼瑜?怨좊Ⅴ怨??덈떎."
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
                    translation_A: "?앸Ъ?ㅼ씠 ?쇰젹濡?諛곗뿴?섏뼱 ?덈떎.",
                    translation_B: "?ъ옄媛 李쏀???湲곕????덈떎.",
                    translation_C: "罹먮퉬?쏆씠 ?대젮 ?덈떎.",
                    translation_D: "?ъ옄媛 愿묎퀬?먯쓣 ?쎄퀬 ?덈떎."
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
                    translation_A: "二쇳깮???싳떆?곗뿉 ?대젮?ㅻ낫?몃떎.",
                    translation_B: "?ㅻ━?ㅼ씠 ?몄닔?먯꽌 ?ㅼ뾼移섍퀬 ?덈떎.",
                    translation_C: "?ㅻ━媛 媛??꾨? 媛濡쒖?瑜닿퀬 ?덈떎.",
                    translation_D: "?섎Т?ㅼ씠 ?곕せ???묓빐 ?덈떎."
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
                    translation_A: "?ъ옄??以???紐낆씠 ?ы뻾 媛諛⑹쓣 ?ㅺ퀬 ?덈떎.",
                    translation_B: "??",
                    translation_C: "?ъ옄??以???紐낆씠 ?붿뿉 梨낆쓣 ?쇨퀬 ?덈떎.",
                    translation_D: "?ъ옄??以???紐낆씠 臾명??????덈떎."
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
                    translation_A: "?ъ옄媛 李쎈컰???대떎蹂닿퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 ?됱옣怨좎뿉??臾쇨굔??爰쇰궡怨??덈떎.",
                    translation_C: "?ъ옄媛 ?밴렐?????낇겮 ?耳쒖쪖怨??덈떎.",
                    translation_D: "?ъ옄媛 媛諛⑹뿉 臾쇨굔?ㅼ쓣 ?ｊ퀬 ?덈떎."
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
                    translation_A: "?ъ옄??以???紐낆씠 ?좊컻?덉쓣 臾띔퀬 ?덈떎.",
                    translation_B: "?ъ옄??以???紐낆씠 紐⑥옄瑜??곌퀬 ?덈떎.",
                    translation_C: "?ъ옄??以???紐낆씠 怨듭썝 踰ㅼ튂 洹쇱쿂?????덈떎.",
                    translation_D: "?ъ옄??以???紐낆씠 而댄벂?곕? ?ㅺ퀬 怨꾨떒???ㅻⅤ怨??덈떎."
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
                    translation_A: "?⑥옄媛 ?쒓퀎瑜?留욎텛怨??덈떎.",
                    translation_B: "?⑥옄媛 ?곸옄瑜??≪쑝?ㅺ퀬 ?섍퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 ?뺣낫瑜?寃뚯떆?섍퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 ?ъ옄?먭쾶 ?뚯떇??嫄대꽕怨??덈떎."
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
                    translation_A: "?⑥옄媛 ?꾩꽑??瑗ш퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 嫄대Ъ ?놁뿉 ?덈뒗 愿紐?媛吏瑜?移섍퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 釉붾줉???ㅼ뼱?щ━怨??덈떎.",
                    translation_D: "?⑥옄媛 ?쎌쑝濡??쒕찘?몃? ?닿퀬 ?덈떎."
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
                    translation_A: "?ъ옄?ㅼ씠 梨낆긽??留덉＜蹂닿퀬 ?덈떎.",
                    translation_B: "?ъ옄??以???紐낆씠 ?ы궥???ㅺ퀬 ?덈떎.",
                    translation_C: "?쒕엻???대젮 ?덈떎.",
                    translation_D: "?대뜑?ㅼ씠 罹먮퉬???꾩뿉 ?볦뿬 ?덈떎."
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
                    translation_A: "而듬뱾??鍮꾩썙???덈떎.",
                    translation_B: "怨쇱씪 諛붽뎄?덇? 鍮꾩썙???덈떎.",
                    translation_C: "而ㅽ뵾媛 議곕━? ?꾩뿉 ?롮쭏?ъ졇 ?덈떎.",
                    translation_D: "而듬뱾??臾쇰줈 梨꾩썙吏怨??덈떎."
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
                    translation_A: "?ъ옄媛 ?좏뭾湲곗뿉 ?뚮윭洹몃? 苑귢퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 ?λ퉬瑜?梨숆린怨??덈떎.",
                    translation_C: "?ъ옄媛 ?좊컻 ?덉쓣 臾띠쑝?ㅺ퀬 ?숈씠怨??덈떎.",
                    translation_D: "?ъ옄媛 李쎄퀬濡??ㅼ뼱媛怨??덈떎."
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
                    translation_A: "?щ엺?ㅼ씠 ?뚯떇 ?곷컲???섎Ⅴ怨??덈떎.",
                    translation_B: "?щ엺?ㅼ씠 嫄대Ъ ?덉쑝濡?嫄몄뼱媛怨??덈떎.",
                    translation_C: "?щ엺?ㅼ씠 二쇱감 援ъ뿭???쒖??먯뿉 ?ㅺ?媛怨??덈떎.",
                    translation_D: "?щ엺?ㅼ씠 李⑤웾??臾몄쓣 ?닿퀬 ?덈떎."
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
                    translation_A: "?щ엺?ㅼ씠 ?щ떎由щ? ?섎Ⅴ怨??덈떎.",
                    translation_B: "?щ엺?ㅼ씠 諛㏃쨪??移섏슦怨??덈떎.",
                    translation_C: "?щ엺?ㅼ씠 吏遺뺤쓣 ?쒓났?섍퀬 ?덈떎.",
                    translation_D: "?щ엺?ㅼ씠 ?먯옱 ?곸옄瑜??뺣━?섍퀬 ?덈떎."
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
                    translation_A: "?ㅽ댋??紐⑦뎮?댁뿉 ?볦뿬???덈떎.",
                    translation_B: "?ъ옄媛 ?꾨벑 ?ㅼ쐞移섎줈 ?먯쓣 六쀪퀬 ?덈떎.",
                    translation_C: "諛붿씤?붾뱾???좊컲???뺣젹?섏뼱 ?덈떎.",
                    translation_D: "?ъ옄媛 紐⑤땲?곕? ?ㅻ낫?쒖뿉 ?곌껐?섍퀬 ?덈떎."
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
                    translation_A: "踰좉컻?ㅼ씠 移⑤????볦뿬 ?덈떎.",
                    translation_B: "?⑦봽?ㅼ씠 泥쒖옣?먯꽌 留ㅻ떖???덈떎.",
                    translation_C: "移⑤? ?쒗듃媛 諛붾떏???볦뿬 ?덈떎.",
                    translation_D: "?섏옄?ㅼ씠 ?곸옄 ?놁뿉 ?덈떎."
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
                    translation_A: "?밴컼?ㅼ씠 諛곗뿉 ?怨??덈떎.",
                    translation_B: "?고겕媛 ?몄닔瑜??대젮?ㅻ낫怨??덈떎.",
                    translation_C: "紐⑦꽣蹂댄듃媛 ?ㅻ━ 諛묒쑝濡?吏?섍?怨??덈떎.",
                    translation_D: "紐뉖챺 ?щ엺?ㅼ씠 遺?먯뿉???ㅼ씠鍮숉븯怨??덈떎."
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
                    translation_A: "?щ엺?ㅼ씠 踰쎌쓣 ?μ떇?섍퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 ?낇궓???ъ슜?섍퀬 ?덈떎.",
                    translation_C: "?ъ옄??以???紐낆씠 ?뚯떇????꺼二쇨퀬 ?덈떎.",
                    translation_D: "?щ엺?ㅼ씠 硫붾돱瑜?蹂닿퀬 ?덈떎."
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
                    translation_A: "?ъ옄媛 ?섏옄 ?꾩뿉 ?쒖엳??",
                    translation_B: "?ъ옄媛 ?꾧뎄瑜?援먯껜?섍퀬 ?덈떎.",
                    translation_C: "?ъ옄媛 梨낆옣???ㅼ튂?섍퀬 ?덈떎.",
                    translation_D: "?ъ옄媛 怨꾨떒???ㅻⅤ怨??덈떎."
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
                    translation_A: "?щ엺?ㅼ씠 ?섎Т瑜??ш퀬 ?덈떎.",
                    translation_B: "?щ엺?ㅼ씠 ?곗콉濡쒕? 嫄룰퀬 ?덈떎.",
                    translation_C: "?щ엺?ㅼ씠 湲곗감瑜??怨??덈떎.",
                    translation_D: "?щ엺?ㅼ씠 ?대??먯꽌 議곌퉭???섍퀬 ?덈떎."
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
                    translation_A: "?щ엺?ㅼ씠 ?쒕줈 留덉＜蹂닿퀬 ?덈떎.",
                    translation_B: "?щ엺?ㅼ씠 湲몄쓣 嫄대꼫怨??덈떎.",
                    translation_C: "?щ엺?ㅼ씠 蹂대룄??硫덉떠 ?쒖엳??",
                    translation_D: "?щ엺?ㅼ씠 ?ы뻾 媛諛⑹쓣 ?댁뼱 ?볤퀬 ?덈떎."
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
                    translation_A: "?섎춪?롮씠 ?붾?濡??몃젮 ?덈떎.",
                    translation_B: "媛援ш? ?명?由?洹쇱쿂???볦뿬 ?덈떎.",
                    translation_C: "?곗궛???낆뿉 ?⑥뼱???덈떎.",
                    translation_D: "?먯쟾嫄곌? 湲곕뫁??臾띠뿬 ?덈떎."
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
                    translation_A: "?⑥옄媛 ?뺤썝?쇰줈 嫄몄뼱 ?ㅼ뼱媛怨??덈떎.",
                    translation_B: "嫄대Ъ ?낃뎄媛 ?곸옄?ㅻ줈 留됲? ?덈떎.",
                    translation_C: "怨듦퀬臾몃뱾??寃뚯떆?먯뿉 遺숈뼱 ?덈떎.",
                    translation_D: "?ъ옄??以???紐낆씠 蹂듭궗湲곗뿉 醫낆씠瑜??ㅼ떆 梨꾩슦怨??덈떎."
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
                correctAnswer: "C",
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
                    translation_A: "?⑥옄媛 ?욎튂留덈? ?怨??덈떎.",
                    translation_B: "?⑥옄媛 ?좊컲???뚮씪?ㅽ떛 ?듭쓣 ?볤퀬 ?덈떎.",
                    translation_C: "?⑥옄媛 移쇰줈 ?뚯떇???곌퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 ?앸즺?덉쓣 ?쒕엻???ｊ퀬 ?덈떎."
                }
            },
            {
                id: "p1_t9_q2",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q02.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_2.mp3",
                correctAnswer: "D",
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
                    translation_A: "?ъ옄媛 ?좉??쇱뒪瑜?留ㅻ쭔吏怨??덈떎.",
                    translation_B: "?ъ옄媛 踰ㅼ튂???됱븘 ?덈떎.",
                    translation_C: "?ъ옄媛 ?몃뱶諛깆뿉 ?먯쓣 ?ｊ퀬 ?덈떎.",
                    translation_D: "?ъ옄媛 ?듯솕瑜??섍퀬 ?덈떎."
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
                    translation_A: "?ъ옄??以???紐낆씠 ?곕젅湲고넻 ?꾨줈 紐몄쓣 ?숈씠怨??덈떎.",
                    translation_B: "?ъ옄??以???紐낆씠 寃뚯떆?먯뿉 ?덈뒗 寃뚯떆臾쇱쓣 蹂닿퀬 ?덈떎.",
                    translation_C: "?ъ옄??以???紐낆씠 ?낃뎄 ?놁뿉 ???덈떎.",
                    translation_D: "?ъ옄??以???紐낆씠 湲곌퀎?먯꽌 ?덉쓣 ?멸퀬 ?덈떎."
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
                    translation_A: "李④? 嫄대Ъ ?놁뿉 二쇱감?섏뼱 ?덈떎.",
                    translation_B: "臾몄씠 ?대젮 諛쏆퀜???덈떎.",
                    translation_C: "?명?由ъ뿉 ?쒖??먯씠 遺숈뼱 ?덈떎.",
                    translation_D: "?붿큹 紐?媛쒓? ?쇰젹濡?諛곗뿴?섏뼱 ?덈떎."
                }
            },
            {
                id: "p1_t9_q5",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q05.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_5.mp3",
                correctAnswer: "D",
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
                    translation_A: "議곕챸 ?ㅻ퉬媛 ?ㅼ튂?섍퀬 ?덈떎.",
                    translation_B: "吏꾩뿴?μ쓣 ??퀬 ?덈떎.",
                    translation_C: "醫낆뾽?먯씠 硫붾돱瑜??섎닠二쇨퀬 ?덈떎.",
                    translation_D: "醫낆뾽?먯씠 二쇰Ц??諛쏄퀬 ?덈떎."
                }
            },
            {
                id: "p1_t9_q6",
                image: "/images/ETS_TOEIC_3/Test_09/Part_01/p1_q06.png",
                audio: "/audio/ETS_TOEIC_3/Test_09/TEST%2009_PART%201_6.mp3",
                correctAnswer: "B",
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
                    translation_A: "李⑤웾???덉쑝濡???뿬 ?덈떎.",
                    translation_B: "?λ퉬 紐?媛쒓? ?몃윮??湲곕????덈떎.",
                    translation_C: "?⑥옄媛 ?덈강???リ퀬 李⑤? 紐곌퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 ?몃윮 ?룸?遺꾩쓣 ?リ퀬 ?덈떎."
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
                    translation_A: "?⑥옄媛 怨쇱씪?ㅼ쓣 吏꾩뿴?섍퀬 ?덈떎.",
                    translation_B: "?⑥옄媛 移댄럹?뚮━?꾩뿉???뚯떇??媛?멸?怨??덈떎.",
                    translation_C: "?⑥옄媛 二쇰갑?먯꽌 ?붾━瑜??섍퀬 ?덈떎.",
                    translation_D: "?⑥옄媛 怨꾩궛? ?ㅼ뿉 ???덈떎."
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
                    translation_A: "?⑥옄媛 吏???꾩튂瑜?媛由ы궎怨??덈떎.",
                    translation_B: "?⑥옄媛 ?몃뱶?곗쑝濡??듯솕?섍퀬 ?덈떎.",
                    translation_C: "?ъ옄媛 踰쎌뿉 ?쒖??먯쓣 遺숈씠怨??덈떎.",
                    translation_D: "?ъ옄媛 ?쒕엻?먯꽌 ?쒖쓣 爰쇰궡怨??덈떎."
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
                    translation_A: "?ъ옄媛 ?곕젅湲고넻???ν빐 嫄룰퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 ?붾뵒諛?뿉 諛붽뎄?덈? ?볦븯??",
                    translation_C: "?ъ옄媛 留ㅽ듃瑜??붿뿉 ?쇨퀬 ?덈떎.",
                    translation_D: "?ъ옄媛 ?섎Т 洹쇱쿂?먯꽌 ?뚰뭾 ?꾩떆?쎌쓣 ?怨??덈떎."
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
                    translation_A: "?⑥옄媛 李쎈컰???묒떆?섍퀬 ?덈떎.",
                    translation_B: "?ъ옄媛 媛諛??덉뿉 ?먯쓣 ?ｊ퀬 ?덈떎.",
                    translation_C: "?щ엺?ㅼ씠 而ㅽ뵾?붿쓣 ?ㅺ퀬 ?덈떎.",
                    translation_D: "?щ엺?ㅼ씠 以꾩쓣 ?쒖꽌 湲곕떎由ш퀬 ?덈떎."
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
                    translation_A: "?앷린 ?명듃?ㅼ씠 ?낇궓 ?꾩뿉 ?뺣룉?섏뼱 ?덈떎.",
                    translation_B: "?⑷린?ㅼ씠 ?섏옄???볦뿬???덈떎.",
                    translation_C: "?앺긽蹂닿? 移섏썙吏怨??덈떎.",
                    translation_D: "?묒떆 ?놁뿉 梨낅뱾???볦뿬 ?덈떎."
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
                    translation_A: "?곸옄媛 ?몃윮???ㅻ━怨??덈떎.",
                    translation_B: "?щ엺?ㅼ씠 ?곸옄???댁슜臾쇱쓣 寃?ы븯怨??덈떎.",
                    translation_C: "梨낆긽 ?꾩뿉 ?곸옄?ㅼ씠 ?볦뿬 ?덈떎.",
                    translation_D: "?щ엺???곸옄瑜??ㅼ뼱 ?щ━怨??덈떎."
                }
            }
        ]
    }
];
