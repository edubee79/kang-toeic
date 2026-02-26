import { Part6TestSet } from './types';

export const test01Data: Part6TestSet = {
    testId: 1,
    vol: 4,
    title: "Test 1",
    passages: [
        {
            setId: "v4-p6-t01-p1",
            contextType: "P2",
            docType: "announcement",
            guidance: "Questions 131-134 refer to the following announcement.",
            content: "Come to the Maxley Heights Center for Horticulture and learn how to create a beautiful, eco-friendly garden for your home or business. ___131___. We will teach you how to plant a rain garden, which is simply a shallow sunken garden ___132___ a special soil mix to filter pollutants from rainwater flowing from nearby roads and rooftops. These gardens can be landscaped with native plants and flowers. ___133___, rain gardens are always beneficial to the local environment. Among other things, ___134___ improve drainage and protect rivers and streams.\n\nTo register, visit www.maxley-horticulture.org.",
            translation: "맥슬리 하이츠 원예 센터에 오셔서 여러분의 가정이나 사업체를 위해 아름답고 친환경적인 정원을 만드는 방법을 배우세요. 131 다음 주 토요일 오후 4시에 일반인을 위한 무료 워크숍을 개최합니다. 빗물 정원을 조성하는 방법을 가르쳐 드릴 예정이며, 빗물 정원은 인근 도로와 지붕에서 흘러오는 빗물로부터 오염 물질을 걸러내기 위해 특별한 토양 혼합물을 132 사용하는 얕은 침상원입니다. 이 정원들은 토종 식물과 꽃으로 조경을 할 수 있습니다. 133 무엇보다도, 빗물 정원은 항상 지역 환경에 이롭습니다. 특히, 134 그것들은 배수를 개선하고 강과 하천을 보호합니다.\n\n등록하시려면, www.maxley-horticulture.org를 방문하세요.",
            questions: [
                {
                    id: "v4-p6-t01-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "Children of all ages will enjoy the new exhibits.",
                        B: "Learn about rainfall patterns across the region.",
                        C: "Build a set of simple patio furniture with easy-to-acquire materials.",
                        D: "Next Saturday at 4 P.M., we are hosting a free workshop for the public."
                    },
                    correctAnswer: "D",
                    explanation: "원예 센터에서 정원 만드는 법을 배우라는 앞 문장과 빗물 정원 조성법을 가르쳐 줄 것이라는 뒤 문장 사이에는 무료 워크숍 개최를 안내하는 (D)가 들어가는 것이 가장 자연스럽습니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t01-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "to use",
                        B: "used to",
                        C: "by using",
                        D: "that uses"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 뒤에 목적어(a special soil mix)가 있고 빈칸 앞의 명사구(a shallow sunken garden)를 수식하는 구조이므로, 주격 관계대명사+동사 형태인 (D) that uses가 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t01-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "Best of all",
                        B: "For example",
                        C: "In any event",
                        D: "As a matter of fact"
                    },
                    correctAnswer: "A",
                    explanation: "빗물 정원의 여러 장점 중 '무엇보다도' 환경에 이롭다는 점을 강조하며 결론짓는 맥락이므로 (A) Best of all이 적절합니다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t01-q134",
                    questionNo: 134,
                    text: "Select the best answer.",
                    options: {
                        A: "we",
                        B: "they",
                        C: "both",
                        D: "yours"
                    },
                    correctAnswer: "B",
                    explanation: "동사 improve의 주어 자리이며, 앞 문장에 언급된 rain gardens를 지칭하므로 복수 대명사 (B) they가 정답입니다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t01-p2",
            contextType: "P1",
            docType: "letter",
            guidance: "Questions 135-138 refer to the following letter.",
            content: "31 July\n\nAkwasi Dombo\nFourth Avenue\nGA 105\nAccra, Ghana\n\nDear Mr. Dombo,\n\nThank you for your ___135___ support in helping me to plan the opening gala for Tokyo's fashion week. The event was a huge success, and I was honored to work with you. I know that our attendees follow your work closely, and they loved the designs you contributed for this event. Your designs received a lot of ___136___ on social media. Shows like this will keep Tokyo on the map as a premier fashion centre. ___137___. I realize that the multiple delays made the planning no easy task. The auction ___138___ our Young Designers Award program is coming up soon and I look forward to working with you on that as well.\n\nSincerely,\n\nAsahi Ishioka\nDirector, Japanese Guild of Fashion Designers",
            translation: "7월 31일\n아콰시 돔보,\n도쿄 패션 위크의 오프닝 갈라를 기획할 수 있도록 도와주신 135 어마어마한 지원에 감사드립니다. 행사는 대성공이었고, 함께 일할 수 있어서 영광이었습니다. 저희 참석자들이 귀하의 작품을 면밀히 주시하며, 이 행사를 위해 제작된 디자인을 매우 좋아했다는 것을 알고 있습니다. 귀하의 디자인은 소셜 미디어에서 많은 136 관심(주목)을 받았습니다. 이와 같은 쇼는 도쿄를 지도상에서 최고의 패션 중심지로 유지시켜 줄 것입니다. 137 행사를 기획하는 데 보여 주신 융통성에도 감사드립니다. 여러 번의 지연으로 기획 작업이 쉽지 않았다는 점을 알고 있습니다. 젊은 디자이너 시상 프로그램에 138 도움이 될 경매가 곧 다가오니, 귀하와 그 일도 함께 할 수 있기를 기대합니다.\n\n아사히 이시오카\n이사, 일본 패션 디자이너 협회",
            questions: [
                {
                    id: "v4-p6-t01-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "amazed",
                        B: "amazement",
                        C: "amazing",
                        D: "amazingly"
                    },
                    correctAnswer: "C",
                    explanation: "소유격(your)과 명사(support) 사이에서 명사를 수식하는 형용사 자리입니다. '놀라운, 대단한'이라는 감정을 유발하는 의미이므로 현재분사 형태인 (C) amazing이 적절합니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t01-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "attention",
                        B: "proposals",
                        C: "innovation",
                        D: "criticism"
                    },
                    correctAnswer: "A",
                    explanation: "소셜 미디어에서 디자인이 많은 '관심/주목'을 받았다는 내용이 문맥상 자연스러우므로 (A) attention이 정답입니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t01-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "Several other events have gone surprisingly well.",
                        B: "Thank you also for your flexibility in planning the event.",
                        C: "Please stop by our office the next time you are in the city.",
                        D: "Tokyo is a top tourism destination for many reasons."
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 뒤 문장에서 여러 번의 지연으로 기획이 쉽지 않았음을 언급하고 있으므로, 그러한 상황에서의 '융통성'에 감사한다는 내용인 (B)가 가장 적절합니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t01-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "will benefit",
                        B: "to benefit",
                        C: "has benefited",
                        D: "benefits"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 앞의 명사 The auction을 수식하며 뒤의 명사구(our Young Designers Award program)를 목적으로 취하는 구조이므로, 형용사적 용법의 to부정사 (B) to benefit이 정답입니다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t01-p3",
            contextType: "P1",
            docType: "email",
            guidance: "Questions 139-142 refer to the following e-mail.",
            content: "From: Patron Services <patronservices@menachinlibrary.org>\nTo: Edgar Hughes <hughese98@villachesta.com>\nSubject: Card expiration date approaching\nDate: December 3\n\nDear Mr. Hughes,\n\nPlease be advised that your Mena Chin Library card will expire one month from today.\n\n___139___ must be renewed if you intend to keep your membership for the coming year. ___140___. This can be done at the information desk at any branch location.\n\n___141___ you decide to close your account, no action is necessary. Failure to complete your renewal by the ___142___ date will result in the expiration of your library privileges.\n\nIf you have any questions about this notice, or about general library services, you may reply directly to this e-mail.\n\nSincerely,\n\nPatron Services",
            translation: "발신: 고객 서비스 <patronservices@menachinlibrary.org>\n수신: 에드거 휴즈 <hughese98@villachesta.com>\n제목: 카드 만료 날짜가 다가옴\n날짜: 12월 3일\n\n휴즈 씨께,\n\n귀하의 메나 친 도서관 카드가 오늘로부터 한 달 뒤 만료될 예정임을 알려드립니다.\n\n139 그것은 내년에도 회원 자격을 유지하시려면 갱신되어야 합니다. 140 카드가 만료되기 최소 일주일 전에 갱신이 완료되어야 합니다. 이는 전 지점의 안내 데스크에서 처리하실 수 있습니다.\n\n계정을 종료하기로 141 결정하신다면 아무런 조치도 필요하지 않습니다. 142 명시된 날짜까지 갱신을 완료하지 못하면 도서관 권한이 만료됩니다.\n\n본 통지 또는 전반적인 도서관 서비스에 관해 문의사항이 있으시면 이 이메일에 바로 회신하시면 됩니다.\n\n고객 서비스",
            questions: [
                {
                    id: "v4-p6-t01-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "It",
                        B: "You",
                        C: "Our",
                        D: "Each"
                    },
                    correctAnswer: "A",
                    explanation: "동사 must be renewed의 주어 자리이며, 앞 문장의 library card를 지칭하므로 단수 대명사 (A) It이 적절합니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t01-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "To sign up for a card, visit your local library branch.",
                        B: "For questions about library membership, please visit our Web site.",
                        C: "Renewal must be completed at least one week before your card expires.",
                        D: "You may opt out of this program at any time."
                    },
                    correctAnswer: "C",
                    explanation: "앞문장에서 카드 갱신 필요성을 언급하고 뒷문장에서 안내 데스크 처리가 가능하다고 했으므로, 갱신 완료 시점에 대한 구체적 안내인 (C)가 흐름상 가장 자연스럽습니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t01-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "Also",
                        B: "Should",
                        C: "Because",
                        D: "Although"
                    },
                    correctAnswer: "B",
                    explanation: "가정법 if절에서 if가 생략되면 조동사 should가 주어 앞으로 도치되는 구조입니다. (Should you decide = If you should decide)",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t01-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "specifically",
                        B: "specifics",
                        C: "specified",
                        D: "specificity"
                    },
                    correctAnswer: "C",
                    explanation: "명사 date를 수식하는 형용사 자리이며, '명시된' 날짜라는 수동의 의미이므로 과거분사 (C) specified가 적절합니다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t01-p4",
            contextType: "P2",
            docType: "letter",
            guidance: "Questions 143-146 refer to the following letter.",
            content: "April 7\n\nNaomi Burwell\n43 Waymire Road\nSouth Portland, ME 04109\n\nDear Ms. Burwell,\n\nI am Omar Ridha, the manager of Droplight Studio. ___143___. We offer a full range of photography services for real estate professionals like you. We take pride in composing interior and exterior shots that make a property look its best. Droplight Studio spares no effort in ___144___ superior digital images. ___145___, our professional-grade equipment, lighting, and staging techniques allow us to highlight the best features of a property. And once the photo shoot is over, every image ___146___ expert editing. All these services come standard in every package.\n\nPlease visit our Web site to view our work as well as our pricing and scheduling information. We are happy to work with you to customize orders.\n\nSincerely,\n\nOmar Ridha, Droplight Studio",
            translation: "4월 7일\n\n나오미 버웰 씨께,\n\n저는 드롭라이트 스튜디오의 매니저 오마르 리다입니다. 143 귀하께 저희 업체를 소개해 드리고 싶습니다. 저희는 귀하와 같은 부동산 전문가를 위해 모든 범위의 사진 서비스를 제공합니다. 건물을 최상의 상태로 보이게 해주는 실내외 사진을 구성하는 것에 자부심을 가지고 있습니다. 드롭라이트 스튜디오는 우수한 디지털 이미지를 144 만들기 위한 노력을 아끼지 않습니다. 145 실제로, 전문가급 장비, 조명 및 연출 기술을 통해 건물의 최고의 특징들을 강조할 수 있습니다. 그리고 사진 촬영이 끝나면 모든 이미지는 전문가의 편집을 146 받습니다. 이 모든 서비스는 모든 패키지에 기본으로 제공됩니다.\n\n저희 웹사이트를 방문하셔서 작업물과 가격 및 일정 정보를 확인해 보십시오. 귀하와 작업하며 기꺼이 주문에 맞춰 드리겠습니다.\n\n오마르 리다, 드롭라이트 스튜디오",
            questions: [
                {
                    id: "v4-p6-t01-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "I would like to introduce you to our business.",
                        B: "Great photographs can make your property stand out.",
                        C: "We are looking forward to your visit.",
                        D: "It was the first studio of its kind to open in this area."
                    },
                    correctAnswer: "A",
                    explanation: "자신을 스케줄 매니저라고 소개한 뒤, 부동산 관련 사진 서비스를 제공한다는 설명이 이어지므로 업체를 소개하겠다는 (A)가 도입부로 가장 적절합니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t01-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "researching",
                        B: "creating",
                        C: "purchasing",
                        D: "displaying"
                    },
                    correctAnswer: "B",
                    explanation: "디지털 이미지를 '만들어내는' 데 노력을 아끼지 않는다는 의미가 자연스러우므로 (B) creating이 정답입니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t01-q145",
                    questionNo: 145,
                    text: "Select the best answer.",
                    options: {
                        A: "If not",
                        B: "By comparison",
                        C: "Otherwise",
                        D: "Indeed"
                    },
                    correctAnswer: "D",
                    explanation: "앞서 언급한 노력을 구체적인 장비와 기술을 통해 뒷받침하며 강조하고 있으므로 '정말로, 실로'라는 의미의 접속부사 (D) Indeed가 적절합니다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t01-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "receives",
                        B: "is receiving",
                        C: "had received",
                        D: "had to receive"
                    },
                    correctAnswer: "A",
                    explanation: "전체 패키지 서비스에 포함된 일반적인 사실을 설명하고 있으므로 현재 시제 (A) receives가 정답입니다.",
                    classification: "p6g"
                }
            ]
        }
    ]
};
