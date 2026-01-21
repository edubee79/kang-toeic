# TOEIC 문제 유형 분류 (Pattern Classification)

본 문서는 TOEIC 학습 시스템의 각 파트별 문제 분류 기준(Pattern ID)을 정리한 문서입니다.

## 📝 용어 정의 (Term Definitions)

분석 시스템에서 사용하는 데이터 필드의 의미는 다음과 같습니다.

1. **Context Type (지문 상황 유형)**: 지문(대화/담화) 전체의 배경이나 상황을 정의합니다. (Part 3, 4 적용)
   - 예: "A1. 회의 / 일정 조정", "B2. 주문 / 배송" 등
2. **Question Type (문제 유형)**: 개별 문제가 묻는 의도나 방식을 정의합니다. (Part 2, 3, 4 적용)
   - 예: "DETAIL", "ACTION_NEXT", "WHO_LOC" 등
3. **Classification (문항 분류)**: 문항의 핵심 지식 포인트나 문법/어휘적 성격을 정의합니다. (Part 5, 6, 7 적용)
   - 예: "P5_PR_CASE", "P6_GRAMMAR", "P7_PURPOSE" 등

---

## � 파트별 태그 적용 요약표 (Summary Table)

작업 시 데이터 필드에 입력해야 할 태그 체계 요약입니다.

| 파트 | 분류 레벨 | 태그 종류 (Field) | 주요 태그 예시 | 분석 포인트 |
| :--- | :--- | :--- | :--- | :--- |
| **Part 2** | 문항별 | **Question Type** | Who, When, Why, YesNo, Indirect 등 | 의문사 파악 및 우회 응답 대응력 |
| **Part 3** | 지문별 | **Context Type** | **A~D 시리즈** (A1. 회의, B2. 배송 등) | 대화 상황(배경) 인지 능력 |
| | 문항별 | **Question Type** | DETAIL, ACTION_NEXT, WHY_REASON 등 | 구체적 정보 및 발화 의도 파악 |
| **Part 4** | 지문별 | **Context Type** | **A~F 시리즈** (A2. 일정변경, D1. 광고 등) | 1인 담화 상황(상업/공공) 인지 |
| | 문항별 | **Question Type** | DETAIL, WHO_LOC, WHY_REASON 등 | 핵심 근거 및 장소/대상 추론 |
| **Part 5** | 문항별 | **Classification** | P5_VB_TENSE, P5_POS_ADJ, P5_VOC_NOUN 등 | 문법 지식 포인트 및 어휘력 |
| **Part 6** | 지문별 | **Passage Type** | P1_EMAIL, P2_NOTICE, P4_WEB 등 | 문맥 파악 및 지문 종류별 독해 |
| | 문항별 | **Classification** | P6_GRAMMAR, P6_VOCABULARY, P6_SENTENCE 등 | 글의 흐름과 문장 삽입 능력 |
| **Part 7** | 지문별 | **Passage Type** | P1_EMAIL, P3_ARTICLE, P5_RECEIPT, P7_TEXT 등 | 정보 검색 속도 및 연계 지문 독해 |
| | 문항별 | **Classification** | P7_PURPOSE, P7_INFERENCE, P7_INSERTION 등 | 문제 의도(목적/추론/불일치) 분석 |

---

## �💡 Part 3 & 4의 데이터 구조 특징

Part 3와 Part 4의 개별 문항은 **두 가지 정보**를 동시에 가집니다.

- **Set 레벨 (Context Type)**: 하나의 지문(3문제 묶음)이 가지는 대표 상황.
- **Question 레벨 (Question Type)**: 그 지문에 딸린 3개의 문제가 각각 무엇을 묻는지에 대한 유형.

---

## Part 2 질의응답 (Question Type)
- **Who**: 누가 (인물, 직책, 부서)
- **When**: 언제 (시간, 날짜, 기간)
- **Where**: 어디서 (장소, 위치, 방향)
- **Why**: 왜 (이유, 목적)
- **How**: 어떻게 (방법, 상태, 수량, 가격)
- **What**: 무엇 (구체적 정보)
- **YesNo**: 일반 의문문
- **Choice**: 선택 의문문
- **Statement**: 평서문
- **Tag**: 부가 의문문
- **Negative**: 부정 의문문
- **Indirect**: 간접 의문문

---

## Part 3 (Conversation)
대화 지문의 상황(Context)과 개별 문제의 유형에 따라 분류됩니다.

### Part 3 지문 상황 유형 (Context Type)

#### A. 회사 내부 업무
- **A1**: 회의 / 일정 조정
- **A2**: 프로젝트 / 업무 진행
- **A3**: 인사 / 휴가 / 근무
- **A4**: 재무 / 비용 / 승인
- **A5**: 교육 / 트레이닝

#### B. 고객 / 외부 응대
- **B1**: 불만 / 문제 제기
- **B2**: 주문 / 배송
- **B3**: 환불 / 교환
- **B4**: 문의 / 안내

#### C. 여행 / 예약
- **C1**: 항공 / 교통
- **C2**: 호텔 / 숙박
- **C3**: 일정 변경 / 취소

#### D. 시설 / 시스템 문제
- **D1**: 사무기기 고장
- **D2**: IT / 시스템 오류
- **D3**: 건물 / 시설 유지보수

### Part 3 문제 유형 (Question Type)
- **DETAIL**: 구체적 정보 파악
- **WHO_LOC**: 화자 및 장소 추론
- **WHAT_WHICH**: 주제 및 목적 파악
- **WHEN_TIME**: 시점 및 기간 파악
- **WHY_REASON**: 이유 및 근거 파악
- **HOW_METHOD**: 수단 및 방법 파악
- **ACTION_NEXT**: 향후 행동 및 요청
- **IMPLY_MEANING**: 화자의 의도 파악 (따옴표 문제)
- **GRAPHIC**: 시각 자료 연계 문제

---

## Part 4 (Talk)
담화 지문의 상황(Context)과 개별 문제의 유형에 따라 분류됩니다.

### Part 4 지문 상황 유형 (Context Type)

#### A. 공지·안내 (Announcements & Notices)
- **A1 (announcement_general)**: 일반 공지, 변경 안내
- **A2 (announcement_schedule_change)**: 일정 변경, 연기, 취소
- **A3 (announcement_facility)**: 시설 이용, 폐쇄, 수리
- **A4 (announcement_policy)**: 규정, 정책, 절차 변경
- **A5 (announcement_emergency)**: 긴급, 안전, 경고
- 👉 *약점 포인트: 이유·대상·시점*

#### B. 회사·업무 내부 방송 (Internal Company Talk)
- **B1 (company_internal_update)**: 내부 현황 보고
- **B2 (company_management_message)**: 관리자 메시지
- **B3 (company_training)**: 교육·워크숍
- **B4 (company_procedure)**: 업무 절차 설명
- 👉 *약점 포인트: 누가 / 왜 / 무엇을 하라고?*

#### C. 안내·서비스 설명 (Service Information)
- **C1 (service_information)**: 서비스 사용법
- **C2 (customer_instruction)**: 고객 행동 지시
- **C3 (membership_benefits)**: 혜택·조건 설명
- **C4 (technical_support)**: 기술·시스템 안내
- 👉 *약점 포인트: 조건 / 제한 / 대상*

#### D. 광고·홍보 (Advertisements & Promotions)
- **D1 (advertisement_product)**: 제품 광고
- **D2 (advertisement_event)**: 행사·이벤트
- **D3 (advertisement_discount)**: 할인·프로모션
- **D4 (advertisement_service)**: 서비스 홍보
- 👉 *약점 포인트: 목적 / 혜택 / 행동 유도*

#### E. 교통·여행·시설 (Transportation & Public Info)
- **E1 (transportation_schedule)**: 교통 시간
- **E2 (transportation_delay)**: 지연·변경
- **E3 (travel_information)**: 여행 안내
- **E4 (facility_information)**: 공공시설 정보
- 👉 *약점 포인트: 시간 / 대체 수단 / 이유*

#### F. 이벤트·문화·지역 정보
- **F1 (event_information)**: 전시·공연
- **F2 (community_announcement)**: 지역 사회 공지
- **F3 (public_service)**: 공공 서비스

### Part 4 문제 유형 (Question Type)
- Part 3와 동일한 기준을 사용합니다. (DETAIL, WHO_LOC 등)

---

## Part 5 (Grammar & Vocabulary)
- **P5_PR_CASE**: 인칭대명사
- **P5_POS_ADJ / ADV / NOUN**: 품사 자리
- **P5_VB_TENSE / VOICE / CONCORD / FORM**: 동사 (시제, 태, 수일치, 준동사)
- **P5_CONJ_PREP / SUB / REL**: 연결어 (전치사, 접속사, 관계사)
- **P5_VOC_NOUN / VERB / ADJ / ADV**: 어휘

---

## Part 6 (Text Completion)
- **P6_GRAMMAR**: 문법
- **P6_VOCABULARY**: 어휘
- **P6_SENTENCE_INSERTION**: 문장 삽입

---

## Part 7 (Reading Comprehension)
- **P7_PURPOSE**: 목적
- **P7_DETAIL**: 세부 내용
- **P7_NEGATIVE**: 불일치 (NOT true)
- **P7_INFERENCE**: 추론
- **P7_VOCABULARY**: 동의어
- **P7_INSERTION**: 문장 삽입 위치
- **P7_GRAPHIC**: 시각 자료
- **P7_LOCATION**: 정보 위치

---

### RC Part 6 & 7 지문 종류 (Passage Type)

학생들이 어떤 종류의 글에서 오답이 발생하는지 분석하기 위해 아래와 같이 분류합니다.

#### P1. 서신 (Correspondence)
- **P1_EMAIL**: 이메일
- **P1_LETTER**: 편지

#### P2. 공적인 글 (Official Documents)
- **P2_NOTICE**: 공지 / 안내
- **P2_MEMO**: 메모 / 사내 메시지
- **P2_ANNOUNCEMENT**: 발표 / 성명서 (Press Release 포함)

#### P3. 정보 전달 (Informative / Media)
- **P3_ARTICLE**: 기사
- **P3_REPORT**: 보고서 / 리뷰

#### P4. 홍보 및 웹 (Marketing / Web)
- **P4_AD**: 광고 (Web Ad 포함)
- **P4_WEB**: 웹페이지 / 소개글

#### P5. 비즈니스 양식 (Forms & Records)
- **P5_FORM**: 양식 (설문, 지원서 등)
- **P5_RECEIPT**: 영수증 / 송장
- **P5_SCHEDULE**: 일정표 / 프로그램

#### P6. 규정 및 지침 (Rules & Instructions)
- **P6_POLICY**: 규정 / 방침
- **P6_INSTRUCTION**: 지침 / 매뉴얼

#### P7. 대화문 (Conversations)
- **P7_TEXT**: 문자 메시지 / 채팅 대화

#### P8. 도표 및 시각자료 (Graphics)
- **P8_CHART**: 도표 / 차트 / 그래프 / 이미지
