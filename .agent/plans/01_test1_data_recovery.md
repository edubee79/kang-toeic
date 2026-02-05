# 📋 [Plan 01] Test 1 Part 7 데이터 전수 교정 및 복구

## 1. 개요
`test1.ts` (RC 1회 Part 7) 데이터의 텍스트 오타, 분류 코드 오류, 그리고 UI 렌더링 중단 이슈(setType 누락 등)를 전수 조사하여 복구한다.

## 2. 작업 상세
- **구간**: 147번 ~ 200번 (현재 175번까지 1차 대조 완료)
- **핵심 미션**:
    1.  **원칙 적용**: 질문에 `inferred/suggested/implied`가 없는 `most likely` 문제는 `P7_DETAIL`로 강제 하향 조정.
    2.  **데이터 복구**: 모든 세트에 `setType: "Single"` (또는 Double/Triple) 누락 여부 확인하여 버튼 실종 문제 방지.
    3.  **오소리(Typo) 제거**: 이미지 원본(`toeic-data` 폴더)과 1:1 대조하여 이메일 주소, 마침표, 줄바꿈 정정.

## 3. 남은 작업 (176번 이후)
- [ ] Set 11 (Q176-180) Double Passage 대조
- [ ] Set 12 (Q181-185) Double Passage 대조
- [ ] Set 13 (Q186-190) Triple Passage 대조
- [ ] Set 14 (Q191-195) Triple Passage 대조
- [ ] Set 15 (Q196-200) Triple Passage 대조

## 4. 완료 조건
- 모든 `classification`이 `Classification Criteria`에 부합해야 함.
- 모든 지문의 `type`과 `docType`이 이원화되어 기재되어야 함.
- 브라우저에서 200번까지 막힘없이 '다음' 버튼으로 이동 가능해야 함.
