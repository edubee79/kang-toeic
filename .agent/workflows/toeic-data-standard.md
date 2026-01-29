---
description: TOEIC 데이터 분류 및 표준화 절대 원칙 (AI 헌법 V7.1 - 초정밀 무결성 명세서)
---

# 📜 TOEIC 데이터 표준화 준수 헌법 (V7.1 - TOTAL ENCYCLOPEDIA)

본 문서는 프로젝트 내 **Part 1부터 Part 7까지 모든 데이터**의 물리적 필드명을 전수 조사하여 확정한 최종 명세이다. AI는 데이터 생성/수정 시 이 구조를 1%의 오차도 없이 준수해야 한다.

---

## 1. 🌐 전 글로벌 공통 필드 (Global Standard Fields)

| 필드명 | 정의 | 준수 사항 |
| :--- | :--- | :--- |
| **`id`** | 식별자 | 문제(`p5-t1-q101`) 또는 요소(`p7-t10-s1-p1`)의 유일 키. |
| **`testId`** | 회차 | `1` ~ `10` 정수. |
| **`questionNo`** | 문항 번호 | 실제 시험 번호 (`1` ~ `200`). |
| **`correctAnswer`**| 정답 | `"A"`, `"B"`, `"C"`, `"D"` (P2는 C까지). |
| **`classification`**| 분류 코드 | `toeic-standards.ts` 내 159종의 표준 ID만 허용. |
| **`text`** | 발문/본문 | 문제의 질문 내용 또는 RC 빈칸 문장. |

---

## 🏗️ 2. 파트별 상세 데이터 모델 (Part-Specific Models)

### 🧩 [Part 1: Photographs]
- **Set Level**: `testId`, `questions: []`
- **Question Level**:
    - `id`: `q1` ~ `q6`
    - `correctAnswer`: `"A"` | `"B"` | `"C"` | `"D"`
    - `image`: `/images/lc/part1/test[T]/q[N].png`
    - `audio`: `/audio/lc/part1/test[T]/[N].mp3`
    - `scripts`: `[{ option: "A", text: "...", translation: "..." }]` (4개 옵션 모두 포함)

### 🧩 [Part 2: Question-Response]
- **Set Level**: `part2Data: { [testId]: Question[] }`
- **Question Level**:
    - `id`: `p2-t[T]-q[N]`
    - `questionNo`: `7` ~ `31`
    - `testId`: `number`
    - `script`: 질문 발화문
    - `options`: `string[]` (예: `["Opt A", "Opt B", "Opt C"]`)
    - `correctAnswer`: `"A"` | `"B"` | `"C"`
    - `classification`: (Legacy: `questionType`) 표준 코드로 매핑 필수.

### 🧩 [Part 3 & 4: Short Conversations/Talks]
- **Set Level (`Part3Set`, `Part4Set`)**:
    - `testId`: `number`
    - `setId`: `p3-t[T]-s[S]` 형식
    - `questionRange`: `"32-34"` 형식
    - `audio`: `/audio/lc/part[3|4]/test[T]/[Range].mp3`
    - `image?`: 그래픽 문제용 이미지 경로
    - `script`: `[{ speaker: "Man", text: "..." }]` 배열 또는 `string`
    - `contextType`: 상황 코드 (예: `A1`)
    - `translation?`: 스크립트 전체 번역
- **Question Level**:
    - `id`, `text`, `correctAnswer`, `classification`
    - `options`: `{"A": "..", "B": "..", "C": "..", "D": ".."}`
    - `translation`: 질문 번역
    - `translation_A~D`: 선택지별 번역 (필수)

### 🧩 [Part 5: Incomplete Sentences]
- **Set Level**: `testId`, `questions: []`
- **Question Level**:
    - `id`, `questionNo`, `text` (빈칸 `_____` 포함)
    - `options`: `{"A": "..", "B": "..", "C": "..", "D": ".."}`
    - `correctAnswer`, `classification`, `explanation`, `translation`

### 🧩 [Part 6: Text Completion]
- **Set Level**: `testId`, `passages: []`
- **Passage Level (Set 역할)**:
    - `setId`: `p6-t[T]-p[P]`
    - `contextType`, `docType`, `guidance` (`Questions 131-134 refer to...`)
    - `content`: 지문 텍스트 (빈칸 `___131___` 형식)
    - `translation`: 지문 전체 번역
    - `questions: Question[]`
- **Question Level**:
    - `id`, `questionNo`, `text` (`"Select the best answer."`)
    - `options`, `correctAnswer`, `explanation`, `classification`

### 🧩 [Part 7: Reading Comprehension]
- **테스트 파일 관리**: `src/data/rc_part7_test[T].ts` (T: 1~10)
- **중앙 집중식 인터페이스**: 모든 테스트 파일은 반드시 `src/data/rc_part7_types.ts`의 `PracticeSet` 인터페이스를 명시적으로 임포트하여 사용해야 한다.
- **Set Level (`PracticeSet`)**:
    - `id`: `p7-t[T]-set[S]` 형식 (예: `p7-t1-set11`)
    - `setType`: `"Double"` | `"Triple"` (복합 지문 규격)
    - `questionRange`: `"176-180"` 형식
    - `passages: PracticePassage[]`
    - `questions: PracticeQuestion[]`
- **Passage Level (`PracticePassage`)**:
    - `id`: `p7-t[T]-s[S]-p[P]` 형식 (예: `p7-t1-s11-p1`)
    - `contextType`: 짧은 형식의 8대 그룹 태그 (`P1`~`P8`)만 데이터 파일에 기록. (표준 ID 매핑은 `toeic-standards.ts` 참조)
    - `docType`: `EMAIL`, `ARTICLE`, `WEB_PAGE`, `ADVERTISEMENT`, `MEMO`, `REVIEW`, `SCHEDULE`, `FORM`, `POLICY`, `RESERVATION` 등 대문자 스네이크 케이스 준수.
    - `title?`, `content`, `translation?`
- **Question Level (`PracticeQuestion`)**:
    - `id`: `p7-t[T]-q[Q]` 형식 (예: `p7-t1-q176`)
    - `questionNo`: 실제 시험 번호 (`176`~`200`)
    - `text`: 질문 발문
    - `options`: `{"A": "..", "B": "..", "C": "..", "D": ".."}` (객체 형식 필수)
    - `correctAnswer`: `"A"` | `"B"` | `"C"` | `"D"`
    - `classification`: `P7_DETAIL`, `P7_PURPOSE`, `P7_INFERENCE`, `P7_NEGATIVE`, `P7_VOCABULARY`, `P7_LINK` 등 `toeic-standards.ts`에 정의된 코드 필수 사용.
    - `explanation?`, `translation?`

---

## 📅 3. 정적 에셋 경로 정석 (Asset Path Canonical)

- **Images**: `/images/[lc|rc]/part[N]/test[T]/[filename].[png|jpg]`
- **Audio**: `/audio/[lc|rc]/part[N]/test[T]/[filename].mp3`

---
**이 문서는 프로젝트의 모든 파트를 전수 조사하여 작성된 최후의 성전이며, 이 규격을 벗어나는 모든 데이터는 '오류'로 간주한다.**
