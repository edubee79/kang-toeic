import { Part6TestSet } from './types';

export const test04Data: Part6TestSet = {
    testId: 4,
    vol: 4,
    title: "Test 4",
    passages: [
        {
            setId: "v4-p6-t04-p1",
            contextType: "P2",
            docType: "notice",
            guidance: "Questions 131-134 refer to the following notice.",
            content: "D-Zine Pop\n\nD-Zine Pop is your source for information about the latest ___131___ in the world of fashion. What started as a social media experiment ___132___ into a content platform with subscribers in seventeen countries worldwide. We are constantly adding features to improve our user experience and share what apparel and clothing accessories are popular right now. We also make periodic updates to our terms of service. Subscribers' ___133___ access to content is contingent upon consenting to these terms; therefore, we encourage you to review and accept them at dzinepop.com/privacy. Contact our customer service team at support@dzinepop.com if you have any questions. ___134___.",
            translation: "디-자인 팝\n\n디-자인 팝은 패션계의 최신 131 트렌드에 대한 정보를 제공하는 원천입니다. 소셜 미디어 실험으로 시작했던 것이 전 세계 17개국에 구독자를 보유한 콘텐츠 플랫폼으로 132 발전했습니다. 우리는 사용자 경험을 개선하고 현재 인기 있는 의류 및 액세서리를 공유하기 위해 끊임없이 게시물을 추가하고 있습니다. 또한 서비스 약관을 주기적으로 업데이트합니다. 구독자의 133 지속적인 콘텐츠 이용은 이들 약관의 동의 여부에 달려 있으므로 dzinepop.com/privacy에서 이를 검토하고 동의할 것을 권장합니다. 문의사항이 있으시면 support@dzinepop.com에서 고객 서비스팀에 연락하십시오. 134 담당자들이 하루 24시간 여러분을 도와드립니다.",
            questions: [
                {
                    id: "v4-p6-t04-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "controversies",
                        B: "consumers",
                        C: "trends",
                        D: "versions"
                    },
                    correctAnswer: "C",
                    explanation: "뒤에서 현재 인기 있는 의류 및 액세서리를 공유(share what apparel ~ are popular right now)하기 위해 게시물을 추가하고 있다고 했으므로 디-자인 팝은 패션계의 '최신(latest) 트렌드'에 대한 정보를 제공한다는 내용이 되어야 한다. 따라서 '동향, 유행'을 뜻하는 (C) trends가 정답이다. (A)의 controversy는 '논란', (B)의 consumer는 '소비자', (D)의 version은 '버전, ~판'이라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t04-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "evolving",
                        B: "evolution",
                        C: "will be evolving",
                        D: "has evolved"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 주어 역할을 하는 명사절 What started as a social media experiment의 동사 자리이므로 동사인 (C) will be evolving과 (D) has evolved 중에서 선택해야 한다. 앞뒤 문장에서 디-자인 팝의 현재 상황에 대해 설명하고 있으므로, 빈칸이 있는 문장은 '소셜 미디어 실험으로 시작했던(started) 것이 세계적인 콘텐츠 플랫폼으로 발전해 왔다'며 과거부터 현재까지의 변화 과정을 언급하는 내용이 되어야 자연스럽다. 따라서 현재완료 시제인 (D) has evolved가 정답이다. (A) evolving은 동명사/현재분사, (B) evolution은 명사이므로 동사 자리에 들어갈 수 없다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t04-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "continue",
                        B: "continued",
                        C: "continuation",
                        D: "continues"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸에는 소유격 Subscribers'와 명사 access 사이에서 명사 access를 수식하는 형용사 또는 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '구독자의 지속적인 이용'이라는 내용이 되어야 하므로 '지속적인'이라는 뜻의 형용사 (B) continued가 정답이다. (A) continue와 (D) continues는 동사이므로 빈칸에 들어갈 수 없고, (C) continuation은 '연속(되는 것)'이라는 뜻의 명사로 access와 복합명사를 이루기에 의미상 어색하므로 오답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t04-q134",
                    questionNo: 134,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Representatives are available 24 hours a day to assist you.",
                        B: "The changes made to our user privacy policy are no longer effective.",
                        C: "Fresh content is accessible through phone and desktop apps.",
                        D: "We are no longer offering a discounted rate if you renew your subscription."
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 앞에서 문의사항이 있으면 서비스팀에 연락하라(Contact our customer service team ~ if you have any questions)고 했으므로, 빈칸에는 고객 서비스팀의 지원 방식을 설명하는 내용이 들어가야 연결이 자연스럽다. 저희 공인 기술자가 휴대폰을 새것으로 교체해 주는 데 드는 시간과 비용을 절약해 드립니다. 따라서 담당자들이 고객 지원을 위해 하루 24시간 대기 중임을 설명하고 있는 (A)가 정답이다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t04-p2",
            contextType: "P2",
            docType: "advertisement",
            guidance: "Questions 135-138 refer to the following advertisement.",
            content: "Rescue your device with Phone Tune-Up\n\nIs your smartphone screen scratched or cracked? ___135___? Do your apps freeze or crash? The experts at Phone Tune-Up can help! We use nothing but the best quality parts to ___136___ your mobile phone. Let our certified technicians save you the time and expense involved in replacing your phone with a new one. When we are ___137___, you will think your old phone is brand new. To make an appointment, call 604-555-0198 or visit www.phonetuneup.com. Same-day service is often available ___138___ needed parts are in stock.",
            translation: "폰 튠-업으로 단말기를 복구하세요.\n\n스마트폰 화면에 흠집이나 금이 갔나요? 135 배터리를 충전하는 데 하루 종일 걸리나요? 앱이 멈추거나 작동이 안 되나요? 폰 튠-업의 전문가들이 도울 수 있습니다! 저희는 여러분의 휴대폰을 136 수리하기 위해 최고 품질의 부품만을 사용합니다. 저희 공인 기술자가 휴대폰을 새것으로 교체하는 데 드는 시간과 비용을 절약해 드립니다. 작업이 137 완료되면 오랜된 휴대폰이 새것처럼 느껴질 것입니다. 예약하시려면 604-555-0198로 전화하시거나 www.phonetuneup.com을 방문하세요. 필요한 부품이 재고가 138 있다면 종종 당일 서비스가 가능합니다.",
            questions: [
                {
                    id: "v4-p6-t04-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "Does your printer need frequent ink refills?",
                        B: "Does it take all day for your battery to recharge?",
                        C: "Do you want to complete a short survey?",
                        D: "Do you pay too much for your data plan?"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 앞에는 스마트폰 화면에 흠집이나 금이 갔는지(Is your smartphone screen scratched or cracked?)를 묻고 있고, 빈칸 뒤에는 앱이 멈추거나 작동이 안 되는지(Do your apps freeze or crash?)를 묻고 있으므로 빈칸에는 휴대폰의 오작동이나 사용하는 데 있어 불편한 점에 대한 내용이 들어가야 일관성 있는 문맥을 완성할 수 있다. 따라서 배터리 충전이 오래 걸리는지를 묻고 있는 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t04-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "remove",
                        B: "borrow",
                        C: "examine",
                        D: "repair"
                    },
                    correctAnswer: "D",
                    explanation: "앞에서 질문 형식으로 언급한 휴대폰의 기능상 문제점들을 폰 튠-업의 전문가들이 도울 수 있다고 한 것으로 보아, 문맥상 '휴대폰을 수리하기 위해 최고 품질의 부품만 사용한다'는 내용이 되어야 자연스럽다. 따라서 '수리하다'를 의미하는 (D) repair가 정답이다. (A) remove는 '제거하다', (B) borrow는 '빌리다', (C) examine은 '검사하다'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t04-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "trained",
                        B: "available",
                        C: "done",
                        D: "dismissed"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸은 be동사 뒤 자리로 보기의 과거분사나 형용사 모두 답이 될 수 있으므로 문맥상 적합한 단어를 골라야 한다. 앞 문장에서 휴대폰 수리 서비스를 언급하며 우리 기술자들이 휴대폰 교체에 느는 시간과 비용을 절약해 드린다고 했으므로, '기술자들이 (작업을) 완료하면 오래된 휴대폰이 새것처럼 느껴질 것'이라는 내용이 되어야 자연스럽다. 따라서 '다 끝난, 완료된'을 뜻하는 (C) done이 정답이다. (A) trained는 '훈련받은', (B) available은 '이용할 수 있는', (D) dismissed는 '해고된'이라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t04-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "whose",
                        B: "must",
                        C: "if",
                        D: "of"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 뒤 주어 needed parts와 동사 are를 갖춘 완전한 절을 빈칸 앞의 절에 연결하여 '필요한 부품이 재고로 있다면 당일 서비스도 가능하다'는 내용이 되어야 하므로 '~이라면'을 뜻하는 부사절 접속사 (C) if 가 정답이다. 절을 연결하는 자리이므로 조동사 (B) must와 전치사 (D) of는 품사상 빈칸에 들어갈 수 없고, (A) whose는 관계대명사로 쓰일 경우 앞에 선행사가 필요하다.",
                    classification: "p6c"
                }
            ]
        },
        {
            setId: "v4-p6-t04-p3",
            contextType: "P2",
            docType: "press release",
            guidance: "Questions 139-142 refer to the following press release.",
            content: "FOR IMMEDIATE RELEASE\n\nSACRAMENTO (July 28)—The Sacramento-based supermarket chain Hsing Market announced today that it is opening a branch ___139___ in San Jose in October. It will occupy the building that once housed the Watson Office Superstore located at 1539 West Oak Street, which closed last year.\n\nHsing Market CEO Alice Tran said, \"We are very excited to ___140___ open a store in San Jose. ___141___. When the Watson building became available, we jumped on the opportunity to move in.\"\n\nAs a neighborhood grocery store, Hsing Market prides itself on hiring applicants from the local community. Approximately 75 percent of all employees live within two miles of the store where they ___142___.",
            translation: "즉시 배포용\n\n새크라멘토(7월 28일) — 새크라멘토에 본사를 둔 슈퍼마켓 체인 싱 마켓이 10월에 산 호세에 139 지점을 연다고 오늘 발표했다. 지점은 작년에 폐업한 왓슨 오피스 슈퍼스토어가 있던 웨스트 오크 가 1539의 건물에 입주할 예정이다.\n\n싱 마켓의 최고 경영자 앨리스 트랜은 \"140 마침내 산 호세에 매장을 열게 되어 매우 기쁩니다. 141 우리는 꽤 오랜 시간 그 도시를 주시하고 있었습니다. 왓슨 건물이 이용 가능해졌을 때, 우리는 입주할 기회에 뛰어들었습니다.\"라고 말했다.\n\n지역 식료품점으로서 싱 마켓은 지역 사회에서 지원자를 채용하는 것에 자부심을 느낀다. 약 75퍼센트의 직원들이 142 근무하는 매장에서 2마일 이내에 거주한다.",
            questions: [
                {
                    id: "v4-p6-t04-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "location",
                        B: "locate",
                        C: "to locate",
                        D: "locating"
                    },
                    correctAnswer: "A",
                    explanation: "동사 is opening의 목적어 자리로 빈칸 앞 명사 branch와 함께 '지점, 장소, 부지'라는 의미의 (A) location이 정답이다. 문장에 이미 동사가 있으므로 동사 (B) locate는 들어갈 수 없고, to부정사 (C) to locate와 현재분사 (D) locating은 명사 branch를 뒤에서 수식하는 역할로 쓰이기 위해서는 뒤에 타동사 loacte의 목적어가 와야 하므로 답이 될 수 없다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t04-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "finally",
                        B: "instead",
                        C: "likewise",
                        D: "suddenly"
                    },
                    correctAnswer: "A",
                    explanation: "해당 빈칸 뒤 문장에서 꽤 오랜 시간 그 도시를 주시하고 있었고 건물이 이용 가능해졌을 때 입주할 기회에 뛰어들었다고 한 것으로 보아 '마침내 매장을 열게 되어 기쁘다'는 내용이 되어야 적절하다. 따라서 '마침내'라는 뜻의 (A) finally가 정답이다. (B) instead는 '대신에', (C) likewise는 '마찬가지로', (D) suddenly는 '갑자기'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t04-q141",
                    questionNo: 141,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "The store features a variety of fresh and prepared foods.",
                        B: "We hope that you will be able to join us at our grand-opening celebration.",
                        C: "We have had our eyes on the city for quite some time.",
                        D: "Our corporate headquarters will be renovated soon."
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞에서 마침내 산 호세에 매장을 얻게 되어 기쁘다고 했고 빈칸 뒤에서 왓슨 건물이 이용 가능해졌을 때 입주 기회에 뛰어들었다(When the Watson building became available, we jumped on the opportunity to move in)고 했으므로, 빈칸에는 산 호세 지역에 매장을 물색하는 데 기울인 노력이나 시간을 강조하는 내용이 들어가야 자연스럽다. 따라서 저희 꽤 오랜 시간 그 도시를 주시하고 있었다고 언급하는 (C)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t04-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "save",
                        B: "work",
                        C: "shop",
                        D: "register"
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 싱 마켓은 지역 사회에서 지원자를 채용한다고 했으므로, 직원들이 '근무하는 매장에서' 2마일 이내에 거주하고 있다는 내용이 되어야 한다. 따라서 '근무하다'는 뜻의 (B) work가 정답이다. (A) save는 '절약하다', (C) shop은 '쇼핑하다', (D) register는 '등록하다'라는 의미이다.",
                    classification: "p6v"
                }
            ]
        },
        {
            setId: "v4-p6-t04-p4",
            contextType: "P3",
            docType: "web page",
            guidance: "Questions 143-146 refer to the following Web page information.",
            content: "About Leafi Cloth\n\nTropick Textiles recently expanded the ___143___ of fabrics available on the market. In its quest to introduce environmentally friendly alternatives to cotton and other traditional fibers, the company ___144___ a new fiber made from materials that are typically discarded. Tropick Textiles takes banana and pineapple leaves and combines them with bamboo fibers to create Leafi Cloth. The plants' leaves are ordinarily disposed of ___145___ the fruit is harvested. Tropick Textiles' process prevents many leaves from entering a landfill, converting them instead into usable material. ___146___.",
            translation: "리피 직물에 대하여\n\n트로픽 텍스타일스는 최근 시장에서 구할 수 있는 직물의 143 범위를 확대했습니다. 면과 기타 전통 섬유에 대한 친환경적 대안으로 새로운 섬유를 개발했다고 한 뒤, 버려지는 바나나와 파인애플 잎을 사용 가능한 재료로 바꾼다고 언급하며 개발한 섬유의 특징과 공정을 설명하고 있다. 따라서 빈칸에는 이 공정으로 만들어진 직물에 대한 결론적인 언급, 즉 개발한 직물이 면직물의 적절한 대용품이라고 언급한 (A)가 정답이다. 145 나면 이 식물의 잎들은 보통 버려집니다. 트로픽 텍스타일스의 공정은 많은 잎들이 쓰레기 매립지로 들어가는 것을 막고, 대신 그것들을 사용 가능한 재료로 바꿉니다. 146 그 결과로 만들어진 내구성 있는 직물은 면직물의 적절한 대용품입니다.",
            questions: [
                {
                    id: "v4-p6-t04-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "range",
                        B: "expense",
                        C: "strength",
                        D: "appearance"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 뒤 문장에서 회사에서 면과 기타 전통 섬유들에 대한 대안을 도입하고자 새로운 섬유를 개발했다고 했으므로 '직물의 범위'를 확대했다'는 내용이 되어야 적절하다. 따라서 '범위'를 뜻하는 (A) range가 정답이다. (B) expense는 '비용', (C) strength는 '강도', (D) appearance는 '외모'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t04-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "are developed",
                        B: "has developed",
                        C: "will develop",
                        D: "to develop"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸은 주어인 the company인 절의 동사 자리이므로 (D) to develop은 품사상 들어갈 수 없고, (A) are developed는 단수 주어와 수 일치가 되지 않는다. 앞 문장에서 트로픽 텍스타일스가 직물의 범위를 확대했다고 현재완료 시제(has expanded)로 설명하고 있으므로, 직물 범위를 확대시킨 일에 대한 부연 설명인 친환경적인 대안으로 새로운 섬유를 개발했다는 것 또한 이미 완료된 일임을 알 수 있다. 따라서 현재완료 시제인 (B) has developed가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t04-q145",
                    questionNo: 145,
                    text: "Select the best answer.",
                    options: {
                        A: "now",
                        B: "thus",
                        C: "even",
                        D: "once"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 완전한 두 개의 절을 연결해 주는 접속사 자리이다. 따라서 '일단 ~하면'이라는 의미의 부사절 접속사인 (D) once가 정답이다. (A) now와 (B) thus는 부사, (C) even은 형용사/부사이므로 절을 이끌 수 없다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t04-q146",
                    questionNo: 146,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "The resulting durable fabric is a suitable substitute for cotton cloth.",
                        B: "Inquiries regarding Leafi Cloth were directed to the sales department.",
                        C: "Tropick Textiles will celebrate its one-hundredth anniversary this year.",
                        D: "Manufacturing costs have been increasing for Tropick Textiles lately.",
                    },
                    correctAnswer: "A",
                    explanation: "앞에서 면과 기타 전통 섬유에 대한 친환경적 대안으로 새로운 섬유를 개발했다고 한 뒤, 버려지는 바나나와 파인애플 잎을 사용 가능한 재료로 바꾼다고 언급하며 개발한 섬유의 특징과 공정을 설명하고 있다. 따라서 빈칸에는 이 공정으로 만들어진 직물에 대한 결론적인 언급, 즉 개발한 직물이 면직물의 적절한 대용품이라고 언급한 (A)가 정답이다.",
                    classification: "p6s"
                }
            ]
        }
    ]
};
