import { Part6TestSet } from './types';

export const test08Data: Part6TestSet = {
    testId: 8,
    vol: 4,
    title: "Test 8",
    passages: [
        {
            setId: "v4-p6-t08-p1",
            contextType: "P3",
            docType: "e-mail",
            guidance: "Questions 131-134 refer to the following e-mail.",
            content: "To: mnandy@gmantcs.com\nFrom: jblaire@blaireaccounting.ca\nRe: AUTOMATIC REPLY\nDate: 9 January, 10:34 AM\n\nHello, and thank you for contacting Blaire Accounting. I will be out of the office until 31 January.\n\nI will respond to your message when I ___131___. If you need ___132___ assistance, please contact Susan Lewis, my administrative assistant, at slewis@blaireaccounting.ca. You can ___133___ call her directly at 416-555-0193. ___134___.\n\nJean Blaire, President",
            translation: "수신: mnandy@gmantcs.com\n발신: jblaire@blaireaccounting.ca\n회신: 자동 응답\n날짜: 1월 9일, 오전 10시 34분\n\n안녕하세요, 블레어 회계에 연락 주셔서 감사합니다. 저는 1월 31일까지 사무실에 없을 예정입니다.\n\n제가 131 돌아오면 메시지에 답변해 드리겠습니다. 132 즉각적인 도움이 필요하시면 저의 행정 비서인 수잔 루이스에게 slewis@blaireaccounting.ca로 연락하십시오. 133 또한 그녀에게 416-555-0193으로 직접 전화하셔도 됩니다. 134 루이스 씨는 평일 오전 9시부터 오후 5시까지 사무실에 있습니다.\n\n장 블레어, 사장",
            questions: [
                {
                    id: "v4-p6-t08-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "recover",
                        B: "return",
                        C: "begin",
                        D: "finish"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 앞 문장에서 1월 31일까지 사무실에 없을 예정(I will be out of the office until 31 January)이라고 했으므로, 문맥상 '(사무실에) 돌아왔을 때 답변하겠다'라는 내용이 되어야 자연스럽다. 따라서 '돌아오다'라는 뜻의 (B) return이 정답이다. (A) recover는 '회복하다', (C) begin은 '시작하다', (D) finish는 '끝내다'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t08-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "immediate",
                        B: "immediately",
                        C: "immediacy",
                        D: "immediacies"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸에는 명사 assistance를 수식하는 형용사 또는 assistance와 복합명사를 이루는 명사가 들어가야 한다. 문맥상 '즉각적인 도움'이라는 내용이 되어야 자연스러우므로 형용사 (A) immediate(즉각적인)가 정답이다. 명사 (C) immediacy와 (D) immediacies는 '즉각성'을 의미하기 때문에 assistance와 복합명사를 이루기에 문맥상 적절하지 않고, (B) immediately는 부사이므로 명사 수식에 적합하지 않다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t08-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "also",
                        B: "lightly",
                        C: "similarly",
                        D: "again"
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에서 도움이 필요할 경우 수잔 루이스에게 연락하라(contact Susan Lewis)며 이메일 주소를 알려 주었는데, 빈칸 뒤에 수잔에게 연락할 수 있는 방법으로 전화번호를 추가적으로 알려 주고 있다. 따라서 비슷한 내용을 추가할 때 쓰는 '또한'이라는 부사 (A) also가 정답이다. (B) lightly는 '가볍게', (C) similarly는 '비슷하게', (D) again은 '다시'라는 의미이다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t08-q134",
                    questionNo: 134,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Ms. Blaire will be back in the office earlier than expected.",
                        B: "Please come and see us if you ever find yourself in Toronto.",
                        C: "It is essential to hire a competent payroll and tax accountant.",
                        D: "Ms. Lewis is in the office on weekdays from 9 A.M. to 5 P.M."
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 앞에서 도움이 필요할 경우 수잔 루이스에게 연락하라(contact Susan Lewis)며 연락처를 알려 주고 있다. 앞 내용에서 비상시 연락할 수 있는 직원의 연락처를 알려 주었으므로, 이 직원에게 연락이 가능한 시간을 안내하는 내용이 연결되어야 자연스럽다. 따라서 루이스 씨의 근무 시간을 언급하고 있는 (D)가 정답이다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t08-p2",
            contextType: "P2",
            docType: "notice",
            guidance: "Questions 135-138 refer to the following notice.",
            content: "Attention customers of Metro Coffee:\n\nWe are excited to announce that we ___135___ a second Metro Coffee store! As you know, we recently expanded our offerings to include baked goods as well as coffee. As a result, our ___136___ has increased significantly. To keep up with demand, we decided that a second store was necessary.\n\n___137___. Our new space is substantially ___138___ but offers the same wide selection of items. Make sure to stop by and check out our new location today!",
            translation: "메트로 커피 고객님께 알립니다:\n\n두 번째 메트로 커피 매장을 135 열었다는 소식을 발표하게 되어 기쁩니다! 아시다시피, 최근에 커피뿐 아니라 제과 제품까지 포함시켜 판매 제품을 확대했습니다. 그 결과, 136 사업이 상당히 커졌습니다. 수요를 따라잡기 위해, 저희는 두 번째 매장이 필요하다고 결정했습니다.\n\n137 그 매장은 사적지에서 2마일 떨어진 곳에 위치해 있습니다. 새로운 공간은 상당히 138 더 크지만, 기존과 동일한 다양한 상품을 제공합니다. 오늘 꼭 들르셔서 저희의 새로운 매장을 확인하세요!",
            questions: [
                {
                    id: "v4-p6-t08-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "will open",
                        B: "can open",
                        C: "are opening",
                        D: "have opened"
                    },
                    correctAnswer: "D",
                    explanation: "마지막 문장에서 꼭 새 매장을 방문하고 확인하라(stop by and check out our new location today)고 권유하고 있으므로 새로운 매장이 이미 영업 중이라는 것을 알 수 있다. 따라서 두 번째 매장을 연 것은 이미 완료된 일이므로 현재완료 시제인 (D) have opened가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t08-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "debt",
                        B: "payroll",
                        C: "business",
                        D: "investment"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞에서 최근에 판매 제품의 종류를 확대했다(we recently expanded our offerings)고 했고, 빈칸이 있는 문장은 '그 결과(As a result)'로 초래된 일을 언급하는 내용이 되어야 한다. 또한 빈칸 뒤에서 수요를 따라잡기 위해 두 번째 매장이 필요하다고 결정했다(decided that a second store was necessary)며 사업 규모가 확대되었음을 시사하고 있으므로, 빈칸이 있는 문장은 '사업이 커졌다'라는 의미가 되어야 적절하다. 따라서 '사업, 영업'을 뜻하는 (C) business가 정답이다. (A) debt는 '빚', (B) payroll은 '급여', (D) investment는 '투자'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t08-q137",
                    questionNo: 137,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Metro Coffee has been a part of the community for nine years.",
                        B: "We roast our coffee beans right here on-site.",
                        C: "Many people enjoy eating a pastry while drinking a cup of coffee.",
                        D: "It is located two miles away in the historic district."
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 앞에서 두 번째 매장이 필요하다고 결정했다(we decided that a second store was necessary)고 했고, 빈칸 뒤에서 새로운 공간(Our new space) 즉, 두 번째 매장의 특징을 설명하고 있다. 따라서 빈칸에는 새로운 매장에 대한 내용이 들어가야 연결이 자연스러우므로 새 매장의 위치를 설명하는 (D)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t08-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "large",
                        B: "larger",
                        C: "largely",
                        D: "largest"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸은 주어 Our new space를 보충 설명하는 자리로, 형용사가 들어가야 한다. 문맥상 기존 매장과 새로운 매장을 비교하는 내용이고, 비교급을 강조하는 부사인 'substantially(상당히)'의 수식을 받고 있으므로 비교급 형용사 (B) larger가 정답이다. (A) large는 원급 형용사, (C) largely(주로)는 부사, (D) largest는 최상급 형용사이므로 빈칸에 들어갈 수 없다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t08-p3",
            contextType: "P3",
            docType: "memo",
            guidance: "Questions 139-142 refer to the following memo.",
            content: "To: All Ferrese Hotel Employees\nFrom: Sergio Prieto, Hotel Manager\nDate: Monday, July 4\nSubject: Global Shipping Partners Conference\n\nThe Ferrese Hotel will be hosting the Global Shipping Partners Conference next week, from Tuesday to Sunday. ___139___, management expects to see many more customers in the hotel's restaurants and gift shops. ___140___. I will be hiring temporary staff to ensure that ___141___ can meet these increased demands. Please take the time to help them learn our ___142___ when they are here. Doing so will ensure that all operations run smoothly while the conference is taking place.",
            translation: "수신: 페레스 호텔 전 직원\n발신: 세르지오 프리에토, 호텔 관리자\n날짜: 7월 4일 월요일\n제목: 글로벌 배송 협력사 콘퍼런스\n\n페레스 호텔은 다음 주 화요일부터 일요일까지 글로벌 배송 협력사 콘퍼런스를 개최할 예정입니다. 139 따라서 경영진은 호텔 레스토랑과 기념품점에서 더 많은 고객을 볼 수 있을 것으로 기대하고 있습니다. 140 비즈니스 센터 또한 평소보다 더 바쁠 것입니다. 141 우리가 이러한 수요 증가를 충족시킬 수 있도록 임시 직원을 채용할 예정입니다. 그들이 이곳에 있을 때 우리의 142 일상 업무를 배울 수 있도록 시간을 내어 도와주십시오. 그렇게 하면 콘퍼런스가 열리는 동안 모든 운영이 순조롭게 진행될 것입니다.",
            questions: [
                {
                    id: "v4-p6-t08-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "If not",
                        B: "After all",
                        C: "Therefore",
                        D: "In the meantime"
                    },
                    correctAnswer: "C",
                    explanation: "앞 문장에서 호텔에서 다음 주에 콘퍼런스를 개최한다(will be hosting the Global ~ Conference next week)고 했고, 뒤 문장에서는 일부 호텔 시설에 더 많은 고객이 올 것으로 기대한다(expects to see many more customers ~ gift shops)고 했다. 두 문장이 행사가 열리므로 손님이 늘 것이라는 인과 관계를 나타내고 있으므로 '그러므로, 따라서'를 뜻하는 (C) Therefore가 정답이다. (A) If not은 '그렇지 않으면', (B) After all은 '결국', (D) In the meantime은 '그동안에'라는 의미이다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t08-q140",
                    questionNo: 140,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "Restaurant renovations are almost completed.",
                        B: "Conference registration forms have been posted online.",
                        C: "Applications will be reviewed later this week.",
                        D: "The business center will also be busier than usual."
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 앞에서 호텔에서 다음 주에 콘퍼런스를 개최해 레스토랑과 선물 가게에 더 많은 고객이 올 것으로 기대한다고 했으므로, 사람이 많을 것으로 예상되는 시설에 대한 내용이 연결되면 자연스럽다. 따라서 비즈니스 센터 상황을 언급하고 있는 (D)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t08-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "it",
                        B: "we",
                        C: "both",
                        D: "something"
                    },
                    correctAnswer: "B",
                    explanation: "해당 글은 호텔 관리자가 호텔 전 직원들에게 보내는 회람이며, 빈칸은 can meet의 주어 자리로 호텔의 전 직원들이 해야 할 업무를 언급하고 있으므로 자신을 포함한 함께 일하는 호텔 직원 모두를 지칭하는 주격 인칭대명사 (B) we가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t08-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "lines",
                        B: "steps",
                        C: "names",
                        D: "routines"
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에서 호텔의 수요 증가를 충족시킬 수 있도록 임시 직원을 채용할 예정(will be hiring temporary staff)이라고 했으므로, 빈칸에는 호텔 업무와 관련해 그들(임시 직원)이 배워야 하는 것이 들어가야 적절하다. 따라서 '일상 업무, 규칙적으로 하는 일'을 뜻하는 (D) routines가 정답이다. (A)의 line은 '줄', (B)의 step은 '단계', (C)의 name은 '이름'이라는 의미이다.",
                    classification: "p6v"
                }
            ]
        },
        {
            setId: "v4-p6-t08-p4",
            contextType: "P2",
            docType: "article",
            guidance: "Questions 143-146 refer to the following article.",
            content: "DALLAS (July 28)—Zura Technology Solutions (ZTS) announced today that it has completed the ___143___ of an office building located at 425 Van Kirk Street here in Dallas. The building, most recently the headquarters of Brickhall Insurance, will serve as ZTS's ___144___ base of operations. The company's relocation from Fort Worth is expected to be complete by the end of the calendar year. ___145___. \"Our decision to acquire the building reflects ZTS's ongoing commitment to the Dallas area and will enable us to better serve our customers, business partners, and stakeholders,\" said Gloria Rubirosa, ZTS's CEO. \"From our new home in Dallas, we ___146___ to work hard to meet the needs of each and every one of our customers around the world.\"",
            translation: "댈러스 (7월 28일) — 주라 테크놀로지 솔루션스(ZTS)는 오늘 이곳 댈러스의 밴 커크 가 425에 위치한 사무실 건물 143 매입을 완료했다고 발표했다. 가장 최근에 브릭홀 보험의 본사였던 이 건물은 ZTS의 144 주요 사업 거점 역할을 할 예정이다. 포트워스로부터의 회사 이전은 올해 말까지 완료될 것으로 예상된다. 145 ZTS의 지도부는 이번 이전을 전략적인 것으로 보고 있다. \"우리의 건물 인수 결정은 댈러스 지역에 대한 ZTS의 지속적인 노력을 반영하는 것이며, 우리가 고객, 사업 파트너 및 주주들에게 더 나은 서비스를 제공할 수 있도록 해 줄 것입니다.\"라고 ZTS의 최고 경영자인 글로리아 루비로사는 말했다. \"댈러스의 새로운 본거지에서 전 세계에 있는 고객 한 분 한 분의 요구를 충족시키기 위해 146 계속해서 열심히 일할 것입니다.\"",
            questions: [
                {
                    id: "v4-p6-t08-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "construction",
                        B: "cleaning",
                        C: "inspection",
                        D: "purchase"
                    },
                    correctAnswer: "D",
                    explanation: "뒤 문장에서 브릭홀 보험의 본사였던 이 건물(The building, most recently the headquarters of Brickhall Insurance)은 ZTS의 사업 거점(base of operations) 역할을 할 예정이라고 했고, 후반부에서 ZTS의 최고 경영자가 건물 인수(acquire the building) 결정을 언급하고 있다. 따라서 빈칸이 있는 문장은 ZTS가 '건물 매입을 완료했다'라는 내용이 되어야 하므로 '매입'을 뜻하는 (D) purchase가 정답이다. (A) construction은 '건설', (B) cleaning은 '청소', (C) inspection은 '점검'이라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t08-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "voluntary",
                        B: "primary",
                        C: "short-term",
                        D: "occasional"
                    },
                    correctAnswer: "B",
                    explanation: "앞에서 ZTS가 건물을 매입했다고 했으며, 뒤에서 건물을 인수한 것은 해당 지역에 대한 지속적 노력을 반영(reflects ZTS's ongoing commitment)하며 이 새로운 본거지(home)에서 전 세계의 고객을 위해 계속해서 열심히 일할 것이라고 했다. 따라서 이 건들은 '주요한 사업 거점'으로서 역할을 할 것이라는 내용이 되어야 자연스러우므로 '주요한, 기본적인'을 뜻하는 (B) primary가 정답이다. (A) voluntary는 '자발적인', (C) short-term은 '단기', (D) occasional은 '가끔의'라는 의미이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t08-q145",
                    questionNo: 145,
                    text: "Select the best sentence to complete the text.",
                    options: {
                        A: "ZTS's leadership team sees the move as strategic.",
                        B: "For example, it provides a range of services to small businesses.",
                        C: "There are only a few available sites in the Main Street District.",
                        D: "Over 15,000 people are employed by ZTS worldwide."
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 앞은 회사 이전이 올해 말까지 완료될 것이라며 회사 이전 일정을 안내하고 있고, 빈칸 뒤에서는 회사 이전의 이유 및 의의에 대한 경영진의 언급을 인용하고 있다. 따라서 빈칸에도 회사 이전에 대한 설명이 들어가야 내용이 일관성 있게 연결되므로, 회사 이전에 관한 ZTS 지도부의 견해를 간략하게 제시하고 있는 (A)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t08-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "continued",
                        B: "continuing",
                        C: "would have continued",
                        D: "will continue"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸은 주어 we의 동사 자리이다. 앞에서 댈러스로의 회사 이전이 올해 말까지 완료될 것이라고 했으므로 빈칸이 있는 댈러스의 새로운 본거지로 이전을 완료한 뒤 앞으로의 계획을 제시하는 내용임을 알 수 있다. 따라서 미래 시제 (D) will continue가 정답이다. (A) continued는 과거형, (C) would have continued는 가정법 과거완료형이고, (B) continuing은 동명사/현재분사로 품사상 답이 될 수 없다.",
                    classification: "p6g"
                }
            ]
        }
    ]
};
