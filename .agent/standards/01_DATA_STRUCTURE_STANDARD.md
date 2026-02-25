# 01. 데이터 구조 및 용어 표준 (Data Structure Standard)

본 문서는 프로젝트 전체 데이터의 물리적 규격과 필드명을 규정하는 **최상위 원칙**입니다.

> **[2026-02-20 개정]** Vol 구조(v3, v4...) 도입에 따른 실제 코드 현황을 반영하여 파일 경로, 필드명, vol 필드 등을 업데이트함.

## 🏗️ 1. 글로벌 공통 필드 (Global Standard Fields)

| 필드명 | 정의 | 데이터 타입 | 비고 |
| :--- | :--- | :--- | :--- |
| **`id`** | 식별자 | `string` | 유일 키 (예: `v3-p1-t9-q1`) |
| **`testId`** | 원본 회차 | `number` | 원본 문제집 기준 회차 (1~10) |
| **`vol`** | 볼륨(시리즈) 번호 | `number` | 문제집 시리즈 번호 (예: `3` = 기출 3탄). Set Level 필드. |
| **`questionNo`** | 문항 번호 | `number` | *(선택 필드)* 실제 시험지 번호 (1~200). Part 2는 생략 가능. |
| **`correctAnswer`** | 정답 | `string` | "A", "B", "C", "D" |
| **`classification`** | 분류 코드 | `string` | `02_SYMBOL_CODEBOOK`의 코드 사용. **Part 2는 하위 호환을 위해 `questionType` 필드명 사용 (코드값은 동일 적용).** |
| **`text`** | 질문 내용 | `string` | 발화문(LC) 또는 질문 텍스트(RC) |
| **`options`** | 선택지 | `object` | `{"A": "..", "B": "..", ...}` |

### 🔍 ID 명명 규칙 (ID Convention)
모든 문항 ID는 다음의 계층 구조를 엄격히 준수한다:
`v{Volume}-{Part}-t{Test}-q{Question}`
- **`v`**: Volume (문제집 권수. 예: `v3` = 기출문제집 3탄)
- **`p`**: Part (파트. 예: `p1`)
- **`t`**: Test (회차. 예: `t9` = 원본 9회)
- **`q`**: Question (문항 번호. 예: `q1`)
- **legacy**: 기존 데이터(v3)의 경우 시스템 호환성을 위해 `v3-`가 생략된 형태를 유지할 수 있으나, 신규 데이터(v4~)는 반드시 접두어를 포함한다.

## 🧩 2. 지문 및 레이아웃 관련 주요 필드 (Passage Specialized)

분석용 데이터와 시각용 인자를 엄격히 분리한다.

| 필드명 | 역할 | 표준 값 | 비고 |
| :--- | :--- | :--- | :--- |
| **`contextType`** | **내부 분석용** | `P1_CORR`, `P3_MEDI` 등 | 오답 리포트 집계 시 사용 (기호집 참조) |
| **`docType`** | **UI 렌더링용** | `EMAIL`, `ARTICLE`, `CHAT_MESSAGE` | 프론트엔드 레이아웃 결정 인자 |
| **`content`** | 지문 본문 | `string` | Markdown 지원 (04_가이드 참조) |
| **`translation`** | 지문 번역 | `string` | 한국어 번역 |

## 🏗️ 3. 파트별 데이터 모델 (Part-Specific Interfaces)

### [Part 1: Photographs]
- **Set Level**: `testId`, `questions: []`
- **Question Level**: 
    - `id`, `questionNo`, `image`, `audio`
    - `correctAnswer`, `classification` (ex: `P1_HUMA`)
    - `options`: `{ "A": "(A)", "B": "(B)", "C": "(C)", "D": "(D)" }`
    - `script`: `{ "A": "..", "B": "..", "C": "..", "D": "..", "translation_A": "..", ... }`

### [Part 2: Question-Response]
- **Set Level**: `testId`, `vol`, `title`, `questions: []`
- **Question Level**: 
    - `id`, `text` (Audio contents)
    - `options`: `{ "A": "..", "B": "..", "C": ".." }` (3 options only)
    - `correctAnswer`
    - **`questionType`**: 분류 코드 (`02_SYMBOL_CODEBOOK` Part 2 기호 사용. 필드명은 하위 호환성으로 `questionType` 유지)
    - `questionNo` *(선택)*: 실제 시험지 문항 번호
    - `translation`, `explanation` *(선택)*

### [Part 3: Conversations] / [Part 4: Short Talks]
- **Set Level (Set)**: 
    - `setId`, `testId`, `vol`, `questionRange` (ex: "32-34")
    - `contextType`: `02_SYMBOL_CODEBOOK` 기호 사용. **허용 형식**: `"A1"` 또는 `"A1. 회의 / 일정 조정"` (코드 뒤 한글 레이블 추가 허용)
    - `audio` (경로), `image` *(선택, Part 3 그래픽 문항인 경우)*
    - `script`: `[{ "speaker": "Woman", "text": ".." }, ...]` (배열 형식)
    - `translation` *(선택)*: LC 파트 특성상 한글 번역 생략 가능
    - `questions: []`
- **Question Level**: 
    - `id`, `text`, `options` (A/B/C/D)
    - `correctAnswer`, `classification` (`02_SYMBOL_CODEBOOK` Part 3/4 문항 기호 사용)
    - ※ `questionNo` **생략**: 문항 번호는 `id`(예: `q32`)와 Set Level의 `questionRange`에 내포되어 있으므로 중복 기재 불필요

### [Part 5: Incomplete Sentences]
- **Set Level**: `testId`, `vol`, `title`, `questions: []`
- **Question Level**: `id`, `questionNo`, `text`, `options`, `correctAnswer`, `classification`, `explanation`, `translation`
    - **`testId`, `vol`** → Question Level에도 중복 기재. AI 약점 분석 엔진이 `classification` 기준으로 문항을 필터링할 때 상위 Set 역추적 없이 **직접 접근(Denormalization)** 가능하도록 의도적 배치.

### [Part 6: Text Completion]
- **Set Level**: `testId`, `passages: []`
- **Passage Level**: `setId`, `contextType` (기호), `content`, `questions: []`
- **Question Level**: `id`, `questionNo`, `text`, `options`, `correctAnswer`, `classification`

### [Part 7: Reading Comprehension]
- **Set Level**: `id`, `setType` ("Single"|"Double"|"Triple"), `questionRange`, `passages: []`, `questions: []`
- **Passage Level**: `id`, **`contextType`** (분류), **`docType`** (UI), `content` (Markdown), `translation`
- **Question Level**: `id`, `questionNo`, `text`, `options`, `correctAnswer`, `classification`, `explanation`, `translation`

## 📂 4. 파일 저장 및 에셋 경로 (Storage & Asset Paths)

> **[2026-02-20 개정]** Vol 구조 도입 이후의 경로 규칙.

- **데이터 (LC)**: `src/data/toeic/v[N]/listening/part[P]/v[N]_p[P]_t[TT].ts`
- **데이터 (RC)**: `src/data/toeic/v[N]/reading/part[P]/v[N]_p[P]_t[TT].ts`
- **중앙 레지스트리**: `src/data/toeic/listening/part[P]/tests.ts` (또는 reading)
- **이미지**: `/images/ETS_TOEIC_[N]/Test_[T]/Part_[P]/[filename].jpg`
- **오디오**: `/audio/ETS_TOEIC_[N]/Test_[T]/Part_[P]/[filename].mp3`
- **원본 소스 이미지**: `toeic-data/ETS정기기출[N]탄/해설/LC(or RC)/[T]회/`
---
*참고: [N]=시리즈 번호(3, 4...), [T]=회차(1~10), [TT]=2자리 회차(01~10), [P]=파트(1~7)*

## 🚨 5. 데이터 검증 및 무결성 원칙 (Verification & Integrity)

데이터를 표준화하거나 지문 내용을 확인 및 수정할 때는 반드시 **`05_EXTRACTION_WORKFLOW.md` (데이터 추출 및 이식 워크플로우)**에 정의된 이미지 기반 검증 절차를 엄격히 준수해야 합니다. 텍스트 데이터의 자의적 판단은 금지되며, 모든 수정 사항은 원본 이미지와의 대조를 필수 전제로 합니다.
