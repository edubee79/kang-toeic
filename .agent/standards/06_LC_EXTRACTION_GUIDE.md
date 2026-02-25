# 06. LC 파트 3/4 정밀 추출 가이드 (LC Extraction Guide)

본 문서는 **Volume 4**를 포함한 LC 데이터 추출 시 발생할 수 있는 데이터 불일치 및 할루시네이션을 방지하고, 100% 정합성을 유지하기 위한 실전 지침입니다.

---

## 🏗️ 1. 데이터 구조 표준 (Data Structure)

기존 Volume 3의 구조와 100% 동일하게 유지해야 합니다.

### **Part 3 데이터 형식 (`Part3Set[]`)**
- **setId**: `v4-p3-t{TestId}-s{SetNum}` (예: `v4-p3-t01-s1`)
- **contextType**: `03_LC_CRITERIA.md`에 정의된 상황별 코드 (예: `A1. 회의 / 일정 조정`)
- **questions**: 3-4개 문항이 한 세트.
    - `id`: `v4-p3-t{TestId}-q{QuestionNum}`
    - `classification`: 문항 유형 (예: `WHO_LOC`, `DETAIL`)
- **script**: 화자와 대사 본문 (`{ speaker: "Man", text: "..." }`)
- **audio**: `public/audio` 경로 (`/audio/ETS_TOEIC_4/Test_01/TEST 01_PART 3_32-34.mp3`)
- **image**: 그래픽 문제인 경우만 포함 (`/images/ETS_TOEIC_4/Test_01/Part_03/v4_p3_t01_q62.png`)

---

## 📂 2. 리소스 매핑 (Resource Paths)

작업 시 아래 경로의 파일들을 '재료'로 사용합니다.

### **A. 이미지 소스 (Source Data)**
- **문제 지문/보기**: `toeic-data/ETS정기기출4탄/문제/LC/{회}/part3/*.jpg`
- **해설/스크립트**: `toeic-data/ETS정기기출4탄/해설/LC/{회}/*.jpg`

### **B. 정식 배포 리소스 (Public Assets)**
- **음원 파일**: `public/audio/ETS_TOEIC_4/Test_{회}/` (파일명 형식: `TEST 01_PART 3_32-34.mp3`)
- **그래픽 이미지**: `public/images/ETS_TOEIC_4/Test_{회}/Part_03/` (파일명 형식: `v4_p3_t01_q62.png`)

---

## 🔄 3. 추출 및 검증 워크플로우 (Workflow)

1.  **시각 대조 (Side-by-Side Review)**:
    - `toeic-data`의 **문제 이미지**를 보고 질문과 보기를 추출합니다.
    - `toeic-data`의 **해설 이미지**를 보고 스크립트와 정답을 추출합니다.
    - 두 데이터를 대조하여 모순이 없는지 확인합니다.

2.  **문항 태깅**:
    - `03_LC_CRITERIA.md`에 따라 `contextType` 및 `classification`을 정확히 부여합니다.

3.  **오디오 파일명 매칭**:
    - `public/audio` 폴더를 실제로 뒤져서 해당 문항 범위(예: 32-34)에 맞는 파일명이 존재하는지 확인 후 경로를 기입합니다.

4.  **타입 무결성**:
    - `Part3Set` 또는 `Part4Set` 배열 형식에 맞게 리턴합니다.

---

## ✅ 4. 최종 체크리스트 (Accuracy Checklist)

- [ ] **대조 확인**: 문제 이미지의 텍스트와 추출된 텍스트가 100% 일치하는가?
- [ ] **화자 구분**: 스크립트에서 남성(Man), 여성(Woman) 구분이 정확한가?
- [ ] **오디오 경로**: 해당 오디오 파일이 실제로 `public/audio`에 존재하는가?
- [ ] **그래픽 링크**: "Look at the graphic" 문제의 경우 이미지 경로가 올바르게 연결되었는가?
- [ ] **정답 검증**: 해설지의 정답과 코드 내 `correctAnswer`가 일치하는가?

---

**주의**: 이 가이드를 무시하고 "그럴듯한" 데이터를 생성하는 경우 즉시 작업을 중단하고 폐기합니다.
