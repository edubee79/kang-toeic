# 📚 ETS TOEIC 3 데이터 및 에셋 관리 가이드

이 문서는 프로젝트의 데이터 추출, 이미지/오디오 에셋 정리, 그리고 서비스 통합을 위한 **표준 가이드**입니다. 다음 세션에서도 일관성을 유지하기 위해 이 규칙을 반드시 준수해야 합니다.

---

## 1. 📁 디렉토리 구조 및 폴더명 표준화

모든 숙제 테스크는 `src/app/homework/` 하위의 간결한 폴더명을 사용합니다.

*   **Part 1**: `/homework/part1` (기존 shadowing-part1)
*   **Part 2**: `/homework/part2` (기존 part2-practice)
*   **Part 3**: `/homework/part3` (기존 shadowing-part3)
*   **Part 4**: `/homework/part4` (기존 shadowing-part4)
*   **Voca**: `/homework/voca`

---

## 2. 🖼️ 이미지 에셋 관리 (Graphics)

그래픽 문제가 포함된 Part 1, 3, 4의 이미지는 다음 경로와 명명 규칙을 따릅니다.

### 📍 저장 경로
`public/images/ETS_TOEIC_3/Test_XX/Part_XX/`
(예: `Test_01`, `Part_03`)

### 🏷️ 파일명 규칙
*   **Part 1**: `p1_q01.png`, `p1_q02.png` ... `p1_q06.png`
*   **Part 3 (Graphics)**: `p3_q62.png`, `p3_q65.png`, `p3_q68.png`
*   **Part 4 (Graphics)**: `p4_q95.png`, `p4_q98.png`

> [!IMPORTANT]
> **패딩 규칙**: 한 자리 숫자 앞에는 반드시 `0`을 붙입니다 (예: q1 ❌ -> q01 ✅).

---

## 3. 🎵 오디오 에셋 관리

오디오 파일은 테스트 회차별로 구분하여 관리합니다.

### 📍 저장 경로
`public/audio/ETS_TOEIC_3/Test_XX/`

### 🏷️ 파일 구성
*   **Part 3/4**: 개별 세트별 분할 파일 (예: `TEST 01_PART 4_71-73.mp3`)
*   **Part 2**: 문항별 분할 파일 (예: `Test_01-07.mp3`)

---

## 4. 📄 JSON 데이터 구조 (`src/data/*.ts`)

### 공통 인터페이스 (Interface)
데이터 파일 상단에 정의된 `PartXSet`, `PartXQuestion` 타입을 준수합니다.

### 주요 필드 설명
*   `testId`: 숫자 형식 (1, 2, 3...)
*   `setId`: 문자열 형식 (예: `"set_71_73"`)
*   `questionRange`: 표시용 문자열 (예: `"71-73"`)
*   `image`: 그래픽 문제인 경우만 이미지 경로 포함 (예: `"/images/ETS_TOEIC_3/Test_01/Part_04/p4_q95.png"`)
*   `correctAnswer`: 대문자 한 글자 (A, B, C, D)

---

## 5. 🛠️ 데이터 추출 프로세스 (Workflow)

데이터가 없는 새로운 회차(Test)를 추가할 때의 표준 순서입니다.

1.  **이미지 수집**: 해설지/문제지에서 필요한 이미지(Part 1 전체, Part 3/4 그래픽)를 캡처합니다.
2.  **이미지 식별**: `Gemini Vision API` 등을 활용하여 이미지와 문항 번호를 매칭합니다. (기존 `scripts/identify-test02-images.ts` 참고)
3.  **JSON 생성**: 
    *   문제지 PDF에서 질문과 보기를 추출합니다.
    *   해설지 PDF에서 스크립트와 정답을 추출합니다.
4.  **파일 배포**: 이미지와 오디오를 `public` 폴더에, JSON 데이터를 `src/data`에 배치합니다.

---

## ⚠️ 주의사항
*   **Next.js Link**: 소문자 경로(`part1`, `part2`...)를 사용하세요.
*   **데이터 정합성**: 정답(`correctAnswer`)이 누락되거나 `UNKNOWN`으로 남지 않도록 해설지를 꼭 대조하세요.
*   **스크립트 포맷**: 대화문(Part 3)은 배열 형태의 객체(`{ speaker, text }`) 또는 한 줄의 문자열로 처리 가능하되 가독성을 위해 객체 방식을 권장합니다.
