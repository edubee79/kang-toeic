# 01. 데이터 구조 및 용어 표준 (Data Structure Standard)

본 문서는 프로젝트 전체 데이터의 물리적 규격과 필드명을 규정하는 **최상위 원칙**입니다.

## 🏗️ 1. 글로벌 공통 필드 (Global Standard Fields)

| 필드명 | 정의 | 데이터 타입 | 비고 |
| :--- | :--- | :--- | :--- |
| **`id`** | 식별자 | `string` | 유일 키 (예: `p7-t1-q147`) |
| **`testId`** | 회차 | `number` | 1 ~ 10 정수 |
| **`questionNo`** | 실제 문항 번호 | `number` | 1 ~ 200 |
| **`correctAnswer`** | 정답 | `string` | "A", "B", "C", "D" (P2는 C까지) |
| **`classification`** | 문항 분류 코드 | `string` | `02_SYMBOL_CODEBOOK`의 기호 사용 |
| **`text`** | 질문 발문 | `string` | 마크다운 미포함 권장 |
| **`options`** | 선택지 세트 | `object` | `{"A": "..", "B": "..", ...}` |

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
- **Set Level**: `testId`, `questions: []`
- **Question Level**: 
    - `id`, `questionNo`, `text` (Audio contents)
    - `options`: `{ "A": "..", "B": "..", "C": ".." }` (3 options only)
    - `correctAnswer`, `classification` (ex: `Who`, `Where`)
    - `translation`, `explanation` (Optional)

### [Part 3: Conversations] / [Part 4: Short Talks]
- **Set Level (Set)**: 
    - `setId`, `testId`, `questionRange` (ex: "32-34")
    - `contextType` (ex: `PURPOSE`, `DETAIL` - 코드북 참조)
    - `audio` (경로), `image` (Part 3 그래픽 문항인 경우)
    - `questions: []`
    - `script`: `[{ "speaker": "Woman", "text": ".." }, ...]` (배열 권장)
    - `translation`: 한글 번역 전문
- **Question Level**: 
    - `id`, `questionNo`, `text`, `options` (A/B/C/D)
    - `correctAnswer`, `classification` (지문 분류와 동일하거나 문항 기호 사용)

### [Part 5: Incomplete Sentences]
- **Set Level**: `testId`, `questions: []`
- **Question Level**: `id`, `questionNo`, `text`, `options`, `correctAnswer`, `classification`, `explanation`, `translation`

### [Part 6: Text Completion]
- **Set Level**: `testId`, `passages: []`
- **Passage Level**: `setId`, `contextType` (기호), `content`, `questions: []`
- **Question Level**: `id`, `questionNo`, `text`, `options`, `correctAnswer`, `classification`

### [Part 7: Reading Comprehension]
- **Set Level**: `id`, `setType` ("Single"|"Double"|"Triple"), `questionRange`, `passages: []`, `questions: []`
- **Passage Level**: `id`, **`contextType`** (분류), **`docType`** (UI), `content` (Markdown), `translation`
- **Question Level**: `id`, `questionNo`, `text`, `options`, `correctAnswer`, `classification`, `explanation`, `translation`

## 📂 4. 파일 저장 및 에셋 경로
- **데이터**: `src/data/toeic/reading/part[N]/test[T].ts`
- **이미지**: `/images/[lc|rc]/part[N]/test[T]/[filename].jpg`
- **오디오**: `/audio/[lc|rc]/part[N]/test[T]/[filename].mp3`

---

## 🚨 5. 데이터 검증 및 무결성 원칙 (Verification & Integrity)

데이터를 표준화하거나 지문 내용을 확인 및 수정할 때는 반드시 **`05_EXTRACTION_WORKFLOW.md` (데이터 추출 및 이식 워크플로우)**에 정의된 이미지 기반 검증 절차를 엄격히 준수해야 합니다. 텍스트 데이터의 자의적 판단은 금지되며, 모든 수정 사항은 원본 이미지와의 대조를 필수 전제로 합니다.
