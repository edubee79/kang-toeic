import { Part6TestSet } from './types';

export const test7Data: Part6TestSet = {
        "testId": 7,
        "vol": 3,
        "title": "Test 7",
        "passages": [
            {
                "setId": "v3-p6-t7-p1",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 131-134 refer to the following e-mail.",
                "content": "To: All employees <staff@TFF.com>\nFrom: Walter C. Handy <wchandy@TFF.com>\nSubject: Sales Incentive Program\nDate: 15 November\n\nDear TFF Sales Team,\n\nI am writing to introduce you to a new, double-incentive program for the fourth quarter of this year! In addition to our standard cash bonus plan, sales associates will now have the opportunity ___131___ tickets to concerts, sporting events, and theater performances. This extra incentive is designed to help make this our greatest sales year ever. ___132___.\n\nMore ___133___ will be provided in the next few days. ___134___, if you have any questions about this program, contact the Human Resources Department.\n\nTo our continued success,\n\nWalter C. Handy, CEO",
                "translation": "수신: 모든 직원 <staff@TFF.com>\n발신: Walter C. Handy <wchandy@TFF.com>\n제목: 판매 장려 프로그램\n날짜: 11월 15일\n\nTFF 영업팀 여러분께,\n\n올해 4분기를 위한 새로운 이중 장려 프로그램을 소개해 드리고자 합니다! 기존의 현금 보너스 계획뿐만 아니라, 영업 직원들은 이제 콘서트, 스포츠 경기, 연극 공연 티켓을 얻을 수 있는 기회를 갖게 될 것입니다. 이 추가 인센티브는 올해를 역대 최고의 영업 실적의 해로 만드는 데 도움이 되도록 고안되었습니다. 저는 우리가 이 목표를 달성할 수 있다고 확신합니다.\n\n더 자세한 사항은 며칠 내에 제공될 것입니다. 그동안 이 프로그램에 대해 질문이 있으시면 인사부로 문의하시기 바랍니다.\n\n지속적인 성공을 기원하며,\n\nCEO Walter C. Handy 드림",
                "questions": [
                    {
                        "id": "v3-p6-t7-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": { "A": "to earn", "B": "earning", "C": "earner", "D": "having earned" },
                        "correctAnswer": "A",
                        "explanation": "opportunity를 수식하여 '~할 기회'를 나타내는 to부정사 (A) to earn이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t7-q132",
                        "questionNo": 132,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The fiscal year ends in October.",
                            "B": "I am confident that we can achieve this goal.",
                            "C": "Attendance at the event is mandatory.",
                            "D": "TFF is looking to renovate its offices next year."
                        },
                        "correctAnswer": "B",
                        "explanation": "앞 문장에서 언급한 목표 달성에 대한 자신감을 표현하는 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t7-q133",
                        "questionNo": 133,
                        "text": "Select the best answer.",
                        "options": { "A": "supplies", "B": "details", "C": "products", "D": "receipts" },
                        "correctAnswer": "B",
                        "explanation": "앞서 언급된 프로그램에 대한 '세부 사항'을 더 알려준다는 의미이므로 (B) details가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t7-q134",
                        "questionNo": 134,
                        "text": "Select the best answer.",
                        "options": { "A": "Similarly", "B": "Therefore", "C": "Above all", "D": "In the meantime" },
                        "correctAnswer": "D",
                        "explanation": "상세 정보가 제공되기 전까지의 기간을 뜻하는 '그동안에'라는 의미의 (D) In the meantime이 정답입니다.",
                        "classification": "p6c"
                    }
                ]
            },
            {
                "setId": "v3-p6-t7-p2",
                "contextType": "P8",
                "docType": "information",
                "guidance": "Questions 135-138 refer to the following information.",
                "content": "Accountarium: The quarterly magazine for accountants\n\nCall for Submissions\n\nOur fourth and final edition of the year will include a feature on accountants who have made a career shift. The financial service ___135___ that accountants gain are in demand even by those seeking to hire for positions outside of finance. ___136___, many professional accountants have been persuaded to take on other roles.\n\nIf you have made such a change in careers, we would like to hear about it. In no more than 800 words, describe your background in accounting and explain ___137___ it is useful in your new profession. Send this as an attachment to features@accountarium.com. ___138___. We regret that any submissions received after this date cannot be considered.",
                "translation": "Accountarium: 회계사를 위한 분기별 잡지\n\n원고 모집\n\n올해의 네 번째이자 마지막 호에는 전직을 한 회계사들에 대한 기사가 실릴 예정입니다. 회계사들이 얻는 금융 서비스 기술은 재무 이외의 분야에서 채용하려는 사람들에게도 수요가 있습니다. 결과적으로, 많은 전문 회계사들이 다른 역할을 맡도록 설득되었습니다.\n\n만약 귀하가 그러한 경력 변화를 겪으셨다면, 그 이야기를 듣고 싶습니다. 800단어 이내로 귀하의 회계 배경을 설명하고, 그것이 귀하의 새 직업에서 어떻게 유용한지 설명해 주십시오. features@accountarium.com으로 첨부 파일로 보내주십시오. 원고 마감일은 10월 15일입니다. 이 날짜 이후에 접수된 제출물은 고려될 수 없음을 양해 부탁드립니다.",
                "questions": [
                    {
                        "id": "v3-p6-t7-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": { "A": "industry", "B": "skills", "C": "needs", "D": "fields" },
                        "correctAnswer": "B",
                        "explanation": "회계사들이 얻어서 타 분야에서도 쓰이는 '기술(역량)'을 뜻하므로 (B) skills가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t7-q136",
                        "questionNo": 136,
                        "text": "Select the best answer.",
                        "options": { "A": "Nevertheless", "B": "Once again", "C": "In addition", "D": "Consequently" },
                        "correctAnswer": "D",
                        "explanation": "회계사의 기술이 타 분야에서도 인기가 많아 '결과적으로' 전직 권유를 많이 받는다는 인과관계를 나타내므로 (D) Consequently가 정답입니다.",
                        "classification": "p6c"
                    },
                    {
                        "id": "v3-p6-t7-q137",
                        "questionNo": 137,
                        "text": "Select the best answer.",
                        "options": { "A": "what", "B": "whose", "C": "how", "D": "which" },
                        "correctAnswer": "C",
                        "explanation": "회계 배경이 새 직업에서 '어떻게' 유용한지를 설명하라는 의미이므로 의무분사 (C) how가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t7-q138",
                        "questionNo": 138,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The deadline for submissions is October 15.",
                            "B": "We hire accountants at all stages of their careers.",
                            "C": "This credential is widely recognized.",
                            "D": "We thank you for your response received today."
                        },
                        "correctAnswer": "A",
                        "explanation": "뒷문장에서 언급된 특정 날짜를 구체적으로 밝히는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t7-p3",
                "contextType": "P3",
                "docType": "article",
                "guidance": "Questions 139-142 refer to the following testimonial.",
                "content": "For months, Yi Zhang, owner of Zhang Office Supplies, had been searching for a way to increase ___139___. Then, by sheer chance, he heard about an approach called Voice of the Customer (VOC). \"When I called Hsing Market Research I was really intrigued as the method was presented to me. The representative I spoke with convinced me to give ___140___ it a try.\" Mr. Zhang learned that VOC uses market research as an aid to designing targeted advertisements. Using the method, he first determined ___141___ what potential customers are concerned about and what they want when shopping for office supplies. Then he used candid quotes from the people who participated in his market research to create advertisements for his Web site. ___142___. \"Thanks to VOC,\" he says, smiling, \"my customer base has expanded like never before.\"",
                "translation": "수개월 동안 Zhang Office Supplies의 소유주인 Yi Zhang은 매출을 늘릴 방법을 찾고 있었습니다. 그러다 우연히 '고객의 소리(VOC)'라고 불리는 접근 방식에 대해 듣게 되었습니다. \"Hsing Market Research에 전화를 걸었을 때 그 방식이 소개되는 것을 보고 정말 매료되었습니다. 상담원은 제가 그것을 한번 시도해 보도록 설득했습니다.\" Zhang 씨는 VOC가 맞춤형 광고 설계를 돕기 위해 시장 조사를 활용한다는 것을 알게 되었습니다. 이 방식을 사용하여, 그는 먼저 잠재 고객들이 사무용품을 쇼핑할 때 정확히 무엇을 고민하고 무엇을 원하는지 알아냈습니다. 그런 다음 그는 시장 조사에 참여한 사람들의 솔직한 인용구를 사용하여 웹사이트 광고를 만들었습니다. 그는 또한 다이렉트 이메일 캠페인에도 그것들을 활용했습니다. \"VOC 덕분에,\" 그는 미소 지으며 말합니다. \"제 고객 기반이 그 어느 때보다 확장되었습니다.\"",
                "questions": [
                    {
                        "id": "v3-p6-t7-q139",
                        "questionNo": 139,
                        "text": "Select the best answer.",
                        "options": { "A": "production", "B": "capacity", "C": "sales", "D": "wages" },
                        "correctAnswer": "C",
                        "explanation": "비즈니스 소유주로서 증대시키고자 하는 목표는 '매출'이므로 (C) sales가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t7-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": { "A": "anyone", "B": "it", "C": "mine", "D": "those" },
                        "correctAnswer": "B",
                        "explanation": "give it a try(한번 시도해 보다) 구문을 구성하며 앞서 언급된 '방식'을 지칭하는 대명사 (B) it이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t7-q141",
                        "questionNo": 141,
                        "text": "Select the best answer.",
                        "options": { "A": "exactly", "B": "exact", "C": "exacting", "D": "exactness" },
                        "correctAnswer": "A",
                        "explanation": "의문사절 앞에서 '정확히' 무엇인지를 강조하는 부사 (A) exactly가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t7-q142",
                        "questionNo": 142,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "He has been in business for eleven years.",
                            "B": "He also used them in direct e-mail campaigns.",
                            "C": "He also owns a local supermarket.",
                            "D": "He plans to move to a smaller building."
                        },
                        "correctAnswer": "B",
                        "explanation": "웹사이트 광고 외에 추가로 활용한 사례를 언급하는 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t7-p1",
                "contextType": "P8",
                "docType": "notice",
                "guidance": "Questions 143-146 refer to the following notice.",
                "content": "To help reduce traffic congestion and make parking easier, Newgrange Township will provide free bus rides to and from this year's Newgrange County Fair. ___143___ will be available from Friday, June 5, to Sunday, June 7. Planned pickup locations include the Rhinesberg Elementary School on Route 38 and the Newgrange Municipal Building on Main Street.\n\nBuses going to the fair will depart from these locations hourly from 8 A.M. to 5 P.M. Buses ___144___ the fairgrounds on the half hour, from 8:30 A.M. to 7:30 P.M. Please note that children under the age of 16 must be accompanied by an adult. ___145___. \n\nThe Newgrange County Fair Committee thanks our generous sponsors for providing buses and ___146___ this year. We hope you will join us at the Newgrange County Fair!",
                "translation": "교통 혼잡을 줄이고 주차를 더 쉽게 하기 위해, Newgrange Township은 올해 Newgrange County Fair를 오가는 무료 버스를 제공할 것입니다. 교통편은 6월 5일 금요일부터 6월 7일 일요일까지 이용 가능합니다. 계획된 픽업 장소로는 38번 도로의 Rhinesberg 초등학교와 Main Street의 Newgrange 시청 건물이 포함됩니다.\n\n박람회장으로 가는 버스는 오전 8시부터 오후 5시까지 매시 정각에 해당 장소에서 출발합니다. 박람회장에서 돌아오는 버스는 오전 8시 30분부터 오후 7시 30분까지 매시 30분에 출발합니다. 16세 미만의 어린이는 반드시 성인과 동행해야 함을 유의하시기 바랍니다. 버스 내에서는 음식물이나 음료 섭취가 금지됩니다. \n\nNewgrange County Fair 위원회는 올해 버스와 운전사들을 지원해 주신 후원사 여러분께 감사드립니다. Newgrange County Fair에서 뵙기를 바랍니다!",
                "questions": [
                    {
                        "id": "v3-p6-t7-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": { "A": "Refreshments", "B": "Information", "C": "Transportation", "D": "Entertainment" },
                        "correctAnswer": "C",
                        "explanation": "무료 버스 서비스라는 맥락에서 '교통편'을 뜻하는 (C) Transportation이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t7-q144",
                        "questionNo": 144,
                        "text": "Select the best answer.",
                        "options": { "A": "will leave", "B": "have left", "C": "leaving", "D": "left" },
                        "correctAnswer": "A",
                        "explanation": "앞 문장과 대구를 이루며 미래의 일정을 설명하므로 미래 시제 (A) will leave가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t7-q145",
                        "questionNo": 145,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Thank you for coming to this year's auto show.",
                            "B": "There will be an increase in the cost of the service.",
                            "C": "We hope you enjoyed your stay at the hotel.",
                            "D": "No food or drinks are permitted on the buses."
                        },
                        "correctAnswer": "D",
                        "explanation": "버스 이용 시 준수해야 할 주의 사항을 추가로 안내하는 (D)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t7-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": { "A": "driven", "B": "drivers", "C": "drivable", "D": "drive" },
                        "correctAnswer": "B",
                        "explanation": "버스와 함께 제공되는 인적 자원인 '운전사들'을 뜻하므로 명사 (B) drivers가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            }
        ]
    };
