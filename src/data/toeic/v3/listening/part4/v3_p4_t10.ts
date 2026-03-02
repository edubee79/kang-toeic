import { Part4Set } from './types';

export const test10Data: Part4Set[] = [
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s1",
    questionRange: "71-73",
    contextType: "G1_message. 음성메시지",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_71-73.mp3",
    questions: [
      {
        id: "v3-p4-t10-q71",
        text: "What kind of product did the speaker order?",
        options: {
          A: "Printer ink",
          B: "Eyeglasses",
          C: "Picture frames",
          D: "Furniture"
        },
        correctAnswer: "B",
        classification: "WHO_LOC"
      },
      {
        id: "v3-p4-t10-q72",
        text: "What problem does the speaker mention?",
        options: {
          A: "A package was not received.",
          B: "An invoice is missing.",
          C: "A product is the wrong color.",
          D: "A Web site is down."
        },
        correctAnswer: "C",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q73",
        text: "What does the speaker ask about?",
        options: {
          A: "A refund policy",
          B: "A delivery fee",
          C: "A shipping time",
          D: "A mailing address"
        },
        correctAnswer: "C",
        classification: "DETAIL"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Au Hello, I recently ordered a pair of reading glasses from your Web site. I chose blue frames, but when the package arrived, the glasses had black frames instead. I’m going to send these back to you now to be exchanged for the correct color. But I wanted to ask how long it’ll take for the blue pair to arrive. The original shipment took about three weeks, and I’d like to get the replacement sooner. My number’s 555-0156. Thanks."
      }
    ],
    translation: "안녕하세요, 최근에 웹사이트에서 독서용 안경을 주문했어요. 파란색 안경테를 골랐는데, 택배가 도착해서 보니 안경이 검은색 테였어요. 그쪽으로 반품할 테니 정확한 색으로 교환해 주세요. 그런데 파란색 안경이 도착하는 데 얼마나 걸릴지 궁금해요. 원래 배송은 3주 정도 걸렸는데, 빨리 대체품을 받고 싶어서요. 제 번호는 555-0156입니다. 고마워요."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s2",
    questionRange: "74-76",
    contextType: "A1_announcement. 일반공지",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_74-76.mp3",
    questions: [
      {
        id: "v3-p4-t10-q74",
        text: "What award is being announced?",
        options: {
          A: "Best design",
          B: "Top salesperson",
          C: "Employee of the month",
          D: "Excellence in research"
        },
        correctAnswer: "C",
        classification: "WHAT_WHICH"
      },
      {
        id: "v3-p4-t10-q75",
        text: "According to the speaker, what will the winner receive?",
        options: {
          A: "A commemorative plaque",
          B: "A parking space",
          C: "A gift certificate",
          D: "A recognition dinner"
        },
        correctAnswer: "B",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q76",
        text: "What does the speaker say will be published on a Web site?",
        options: {
          A: "A photograph",
          B: "A biography",
          C: "Professional accomplishments",
          D: "Company event details"
        },
        correctAnswer: "A",
        classification: "DETAIL"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Am Good afternoon, everyone. As you know, it’s time to announce our newest employee of the month, and it goes to Haru Watanabe. Congratulations! Haru did outstanding work this month securing the Thompson Limited account. He also volunteers in the community. As our winner, Haru will receive a preferred parking space right outside the building for the next 30 days. Haru, please come up here to have your picture taken. Like all our employees of the month, your photo will be featured on the company Web site."
      }
    ],
    translation: "안녕하세요, 여러분. 아시겠지만 이달의 사원을 새로 발표할 때가 됐군요. 상은 와타나베 하루 씨에게 돌아갑니다. 축하합니다! 하루 씨는 이번 달에 톰슨 사를 거래처로 확보하는 데 혁혁한 공을 세웠죠. 지역 사회에서 자원봉사도 하고요. 수상자로서 하루 씨는 앞으로 30일 동안 건물 바로 바깥에 선호하는 주차 공간을 받게 됩니다. 하루 씨, 여기 와서 사진 찍으세요. 다른 이달의 직원들과 마찬가지로, 하루 씨 사진도 회사 웹사이트에 실립니다."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s3",
    questionRange: "77-79",
    contextType: "B3_company. 사내교육",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_77-79.mp3",
    questions: [
      {
        id: "v3-p4-t10-q77",
        text: "What kind of product does the speaker’s company sell?",
        options: {
          A: "Bicycles",
          B: "Tools",
          C: "Cars",
          D: "Toys"
        },
        correctAnswer: "A",
        classification: "WHO_LOC"
      },
      {
        id: "v3-p4-t10-q78",
        text: "What will the listeners do next?",
        options: {
          A: "Watch a video",
          B: "Vote on a policy",
          C: "Inspect a brochure",
          D: "Tour a facility"
        },
        correctAnswer: "D",
        classification: "ACTION_NEXT"
      },
      {
        id: "v3-p4-t10-q79",
        text: "What does the speaker mean when he says, “I come in at eight”?",
        options: {
          A: "He is very busy this week.",
          B: "A store usually opens early.",
          C: "The listeners should arrive at that time.",
          D: "The listeners should prepare a shipment."
        },
        correctAnswer: "C",
        classification: "IMPLY_MEANING"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn Hi, everyone! My name is Sanjeep Gupta. We’re excited to have so many new people working at our bicycle stores. During the week, you will learn how to repair bicycles and scooters for our customers. Before we begin your training, I’m going to show you around this model facility, which has been built to simulate the repair shop in the back of every one of our stores. Oh—a couple of you asked about your schedule this week. I’ll be overseeing your work, and I come in at eight."
      }
    ],
    translation: "안녕하세요, 여러분! 제 이름은 산지프 굽타입니다. 우리 자전거 가게에서 새로운 분들이 많이 일하게 돼서 기쁩니다. 주중에는 고객을 위한 자전거와 스쿠터 수리법을 배우게 됩니다. 교육을 시작하기 전에 이 견본 시설을 보여드릴게요. 우리 매장마다 뒤쪽에 수리점이 있는데 그걸 본떠 만든 시설이죠. 아, 두 분이 이번 주 일정에 대해 물어보셨는데요. 제가 여러분 작업을 감독하는데 8시에 들어옵니다."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s4",
    questionRange: "80-82",
    contextType: "B1_company. 현황보고",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_80-82.mp3",
    questions: [
      {
        id: "v3-p4-t10-q80",
        text: "What does the speaker mainly discuss?",
        options: {
          A: "Offering training opportunities",
          B: "Changing product packaging",
          C: "Updating safety regulations",
          D: "Revising an advertising strategy"
        },
        correctAnswer: "B",
        classification: "WHAT_WHICH"
      },
      {
        id: "v3-p4-t10-q81",
        text: "What did the company do last month?",
        options: {
          A: "It expanded its social media presence.",
          B: "It agreed to organize a conference.",
          C: "It published a training manual.",
          D: "It hired an outside consultant."
        },
        correctAnswer: "D",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q82",
        text: "What should interested listeners do?",
        options: {
          A: "Contact their managers",
          B: "Recruit some volunteers",
          C: "Answer a survey",
          D: "Watch a video"
        },
        correctAnswer: "A",
        classification: "ACTION_NEXT"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Au A new report shows that customers prefer sustainable packaging in the products they buy. In order to expand our customer base, we’ve decided to look into using biodegradable packaging for the personal care products we make. Just last month, we hired a packaging consultant to develop environmentally friendly packaging for our products. Now we need to set up a committee to oversee the project. If you’re interested in participating, contact your manager by the end of the week."
      }
    ],
    translation: "새로운 보고서를 보면 고객들은 구매하는 제품에서 지속 가능한 포장을 선호합니다. 고객층을 넓히기 위해 우리가 만드는 개인 생활용품에 생분해성 포장을 사용하는 방안을 검토하기로 했습니다. 바로 지난달, 우리 제품에 쓸 환경친화적 포장을 개발하기 위해 포장 컨설턴트를 고용했습니다. 이제 프로젝트를 감독할 위원회를 설치해야 하는데요. 참여에 관심이 있으면 주말까지 여러분의 관리자에게 연락하세요."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s5",
    questionRange: "83-85",
    contextType: "A1_announcement. 일반공지",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_83-85.mp3",
    questions: [
      {
        id: "v3-p4-t10-q83",
        text: "Who most likely are the listeners?",
        options: {
          A: "Engineers",
          B: "Dentists",
          C: "Educators",
          D: "Architects"
        },
        correctAnswer: "B",
        classification: "WHO_LOC"
      },
      {
        id: "v3-p4-t10-q84",
        text: "Why does the speaker say, “I’ll be at the booth in the lobby until noon”?",
        options: {
          A: "To request volunteers for the afternoon",
          B: "To explain that a booth location has changed",
          C: "To apologize for a scheduling conflict",
          D: "To indicate availability to answer questions"
        },
        correctAnswer: "D",
        classification: "IMPLY_MEANING"
      },
      {
        id: "v3-p4-t10-q85",
        text: "What does the speaker say will happen tonight?",
        options: {
          A: "A book signing",
          B: "A photo shoot",
          C: "A dinner reception",
          D: "An award ceremony"
        },
        correctAnswer: "C",
        classification: "DETAIL"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Br Thank you all for attending the thirtieth annual Dental Healthcare Conference. We have six sessions planned on the latest advances in tooth restoration. As a reminder, if you’d like to receive continuing education credit for attending the conference, you’ll have to complete additional paperwork. Some of you may want to hear more details about that. I’ll be at the booth in the lobby until noon. And finally, just a reminder that you are all invited to attend a dinner reception tonight starting right after the last presentation session."
      }
    ],
    translation: "제 30회 연례 구강 보건 회의에 참석해 주셔서 감사합니다. 치아 복원의 최근 발전에 대해 6개의 세션을 계획했습니다. 다시 말씀드리지만 회의 참석으로 평생 교육 이수 학점을 받으려면 추가 서류 작업을 완료해야 합니다. 여러분 중 몇 분은 더 자세히 듣고 싶으실 텐데요. 제가 정오까지 로비에 있는 부스에 있을 겁니다. 마지막으로 알려 드립니다. 마지막 발표회 직후에 시작되는 오늘 저녁 만찬 환영회에 모두 참석해 주세요."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s6",
    questionRange: "86-88",
    contextType: "F2_community. 지역공지",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_86-88.mp3",
    questions: [
      {
        id: "v3-p4-t10-q86",
        text: "What is Geeta Prasad’s profession?",
        options: {
          A: "Research scientist",
          B: "Medical doctor",
          C: "University professor",
          D: "Government official"
        },
        correctAnswer: "A",
        classification: "WHO_LOC"
      },
      {
        id: "v3-p4-t10-q87",
        text: "According to the speaker, what are some data used for?",
        options: {
          A: "To evaluate a budget",
          B: "To design new products",
          C: "To make hiring decisions",
          D: "To develop an exercise program"
        },
        correctAnswer: "B",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q88",
        text: "Why should the listeners visit a Web site?",
        options: {
          A: "To download a manual",
          B: "To find a report",
          C: "To register for a study",
          D: "To provide some feedback"
        },
        correctAnswer: "C",
        classification: "WHY_REASON"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Am Welcome to this episode of our radio show, Research Now. On every show we talk to a different scientist about their work. Today’s guest is Geeta Prasad. She’s a scientist at McMillan Shoe Manufacturers. Her job is to research how people move their feet when they exercise. She then provides that data to the design team, who use it to design new shoes. In fact, her team is looking for participants to take part in their next study. To sign up, visit McMillan Shoe Manufacturers’ Web site."
      }
    ],
    translation: "라디오 쇼 <리서치 나우> 이번 회차에 오신 것을 환영합니다. 매 회마다 다른 과학자와 함께 그분들의 연구에 관해 이야기하고 있는데요. 오늘 초대 손님은 지타 프라사드 씨로, 맥밀런 신발 제조사의 과학자입니다. 프라사드 씨가 하는 일은 사람들이 운동할 때 발을 어떻게 움직이는지 연구하는 것입니다. 그런 다음 데이터를 디자인팀에 제공하면 디자인팀이 이 데이터를 활용해 새로운 신발을 디자인합니다. 실은 프라사드 팀에서 다음 연구에 참여할 참가자를 찾고 있습니다. 신청하시려면 맥밀런 신발 제조사 웹사이트를 방문하세요."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s7",
    questionRange: "89-91",
    contextType: "B1_company. 현황보고",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_89-91.mp3",
    questions: [
      {
        id: "v3-p4-t10-q89",
        text: "Where do the listeners most likely work?",
        options: {
          A: "At a home appliance store",
          B: "At a hardware store",
          C: "At a shipping company",
          D: "At a furniture store"
        },
        correctAnswer: "D",
        classification: "WHO_LOC"
      },
      {
        id: "v3-p4-t10-q90",
        text: "According to the speaker, what has caused a problem?",
        options: {
          A: "Low-quality merchandise",
          B: "Competition from other businesses",
          C: "Increased rental costs",
          D: "Poor customer service"
        },
        correctAnswer: "B",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q91",
        text: "What will happen next month?",
        options: {
          A: "A focus group will be assembled.",
          B: "A customer loyalty program will be introduced.",
          C: "Some employees will receive training.",
          D: "New advertisements will be designed."
        },
        correctAnswer: "C",
        classification: "DETAIL"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn Thanks for attending this management meeting. As you know, despite our strategy of positioning ourselves as a seller of high-quality furniture, we’ve been losing business to several secondhand stores selling used furniture in the area. There’s one thing that we can start doing that many other furniture stores aren’t: offering free assembly. By developing cross-functional delivery teams, we’ll be able to gain a competitive edge. So next month, all of our delivery teams will attend sessions where they’ll learn how to assemble our products in customers’ homes."
      }
    ],
    translation: "이번 경영진 회의에 참석해 주셔서 감사합니다. 아시다시피, 고급 가구 판매업체로 입지를 다진다는 전략에도 불구하고, 지역에서 중고 가구를 파는 몇몇 중고품 매장에 밀려 거래를 놓치고 있습니다. 우리가 시작할 수 있는 일이 한 가지 있습니다. 다른 다수 가구점은 하지 않고 있는데 요, 바로 무료 조립을 제공하는 겁니다. 다기능 배송 팀을 만들면 경쟁 우위를 점할 수 있습니다. 따라서 다음 달에는 모든 배송 팀이 고객의 집에서 제품을 조립하는 방법에 대해 배우는 세션에 참석하게 됩니다."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s8",
    questionRange: "92-94",
    contextType: "F2_community. 지역공지",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_92-94.mp3",
    questions: [
      {
        id: "v3-p4-t10-q92",
        text: "Where is the speech being given?",
        options: {
          A: "At a training session",
          B: "At a press conference",
          C: "At a job fair",
          D: "At a store grand opening"
        },
        correctAnswer: "B",
        classification: "WHO_LOC"
      },
      {
        id: "v3-p4-t10-q93",
        text: "Why does the speaker apologize?",
        options: {
          A: "Some repair work has caused delays.",
          B: "Some employees have been transferred.",
          C: "Some materials have not arrived.",
          D: "Some businesses have been temporarily closed."
        },
        correctAnswer: "A",
        classification: "WHY_REASON"
      },
      {
        id: "v3-p4-t10-q94",
        text: "What does the speaker mean when she says, “the tracks and trains are not city property”?",
        options: {
          A: "She did not follow a recommendation.",
          B: "She is not responsible for a problem.",
          C: "Some directions were misleading.",
          D: "A contract contained errors."
        },
        correctAnswer: "B",
        classification: "IMPLY_MEANING"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Br Hello everyone. Thanks for coming to this press conference. On behalf of the City of Sommerville, I want to sincerely apologize to all community members affected by this week’s train delays. My department has received reports of delays averaging an hour at peak periods. It has become clear that the ongoing track and wire repair work has become far too disruptive for city commuters. With this week’s unacceptable delays in mind, my department, the city transportation office, is negotiating with the contractor, National Rail. That’s the company that owns the tracks and runs the trains for Sommerville. To be clear, the tracks and trains are not city property. OK, now I can take some questions."
      }
    ],
    translation: "안녕하세요, 여러분. 이번 기자 회견에 와 주셔서 감사합니다. 서머빌 시를 대표해 이번 주 기차 연착으로 피해를 입은 모든 지역 주민께 진심으로 사과드립니다. 우리 부서는 가장 혼잡한 시간에 평균 한 시간씩 지연된다는 보고를 받았습니다. 현재 진행 중인 선로와 전선 보수 공사가 시 통근자들에게 너무 지장을 많이 준다는 게 분명해졌습니다. 이번 주에 발생한 용납할 수 없는 지연을 염두에 두고, 제 담당 부서인 시 교통국이 계약사인 내셔널 레일과 협상하고 있습니다. 선로를 소유하고 서머빌행 기차를 운영하는 회사입니다. 분명히 말하지만 선로와 기차는 시 소유가 아니며 외부 계약업체인 내셔널 레일 소유임을 밝혀 열차 지연에 대한 책임 소재를 명확히 하려는 의도입니다. 자, 이제 몇 가지 질문을 받겠습니다."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s9",
    questionRange: "95-97",
    contextType: "G1_message. 음성메시지",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_95-97.mp3",
    image: "/images/ETS_TOEIC_3/Test_10/Part_04/p4_q95.png",
    questions: [
      {
        id: "v3-p4-t10-q95",
        text: "Look at the graphic. Which hairstyle does the speaker recommend?",
        options: {
          A: "Style 1",
          B: "Style 2",
          C: "Style 3",
          D: "Style 4"
        },
        correctAnswer: "C",
        classification: "GRAPHIC"
      },
      {
        id: "v3-p4-t10-q96",
        text: "What does the speaker say is included in the price?",
        options: {
          A: "A comb",
          B: "A beverage",
          C: "Blow-drying",
          D: "Hair care instructions"
        },
        correctAnswer: "C",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q97",
        text: "What does the speaker say happened yesterday?",
        options: {
          A: "A photo shoot was held.",
          B: "A popular product arrived.",
          C: "A new hairstylist was hired.",
          D: "A product demonstration was conducted."
        },
        correctAnswer: "B",
        classification: "DETAIL"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "W-Am Hi, Susan. It’s Maria. You asked me to suggest a new hairstyle for your appointment tomorrow. I’d recommend something cut all the way up to your chin. I think that a style like this would give you a very professional look. I’ll show you the picture from my hairstyle catalog when you come in. If you’d like me to blow-dry your hair during your appointment, that’s included in the price. Oh, and by the way, yesterday we got a shipment in of the Hydro Five hair moisturizer that always sells out. I know you like to use it, so I thought you might want to know."
      }
    ],
    translation: "안녕하세요, 수잔. 마리아예요. 내일 약속을 위해 새로운 헤어스타일을 제안해 달라고 요청하셨죠. 턱선까지 자른 머리를 추천해 드리고 싶어요. 이런 스타일은 아주 전문가다운 느낌을 줄 거라고 생각해요. 오시면 제 헤어스타일 카탈로그에 있는 사진을 보여 드릴게요. 예약 시간에 드라이를 받고 싶으시면 요금에 포함돼 있어요. 아, 그런데 어제 모발 보습제인 하이드로 파이브가 입고됐는데 늘 품절되는 제품이죠. 이 제품을 잘 쓰시니까 알고 싶으실 것 같아서요."
  },
  {
    testId: 10,
    vol: 3,
    setId: "v3-p4-t10-s10",
    questionRange: "98-100",
    contextType: "B1_company. 현황보고",
    audio: "/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 4_98-100.mp3",
    image: "/images/ETS_TOEIC_3/Test_10/Part_04/p4_q98.png",
    questions: [
      {
        id: "v3-p4-t10-q98",
        text: "According to the speaker, what did the company do last week?",
        options: {
          A: "It installed software to monitor machines.",
          B: "It added a new machine to an assembly line.",
          C: "It hired some expert technicians.",
          D: "It reorganized a production team."
        },
        correctAnswer: "A",
        classification: "DETAIL"
      },
      {
        id: "v3-p4-t10-q99",
        text: "Look at the graphic. Which machine will a technician look at?",
        options: {
          A: "Machine 1",
          B: "Machine 2",
          C: "Machine 3",
          D: "Machine 4"
        },
        correctAnswer: "B",
        classification: "GRAPHIC"
      },
      {
        id: "v3-p4-t10-q100",
        text: "What does the company hope to do next quarter?",
        options: {
          A: "Update their logo",
          B: "Meet their production targets",
          C: "Purchase similar technologies",
          D: "Begin replacing outdated computers"
        },
        correctAnswer: "B",
        classification: "ACTION_NEXT"
      }
    ],
    script: [
      {
        speaker: "Speaker",
        text: "M-Cn Our first topic is an update on the data analytic software we installed last week to identify problems with our plastic molding machines. As I’m sure you’re aware, we’ve missed our production targets for the last two quarters. That means we’re spending too much time assembling our products. As you can see on this chart, the data show that one of our machines is running a very slow production cycle at an average of six minutes, twenty-two seconds per cycle. We’ve already flagged it for repair by a technician. By next week, that machine should be at normal output. We’re very optimistic about the impact the new analytic software will have on next quarter’s targets."
      }
    ],
    translation: "첫 번째 주제는 우리 플라스틱 성형 기계의 문제를 파악하기 위해 지난주에 설치한 데이터 분석 소프트웨어에 관한 소식입니다. 아시겠지만, 지난 2분기 동안 생산 목표를 달성하지 못했는데요. 그러니까 제품을 조립하는 데 너무 시간을 많이 소비하고 있다는 말이죠. 이 도표에서 볼 수 있듯, 데이터를 보면 기계 한 대가 주기당 평균 6분 22초로 매우 느리게 돌아가고 있습니다. 기술자가 수리할 수 있도록 벌써 표시해 두었습니다. 다음 주면 기계는 정상 생산 상태가 될 겁니다. 새로운 분석 소프트웨어가 다음 분기 목표에 미칠 영향에 대해 아주 낙관하고 있습니다."
  }
];
