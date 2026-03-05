# LC Volume 3 검증 보고서 (출판사 정답 vs 소스코드)
일시: 2026-03-01 19:46:00

## [작업 현황 일람]
- [x] Test 01: **수정완료** (Q90 정답 수정 완료)
- [x] Test 02: **검사완료** (지문/선택지 텍스트 미세 불일치 확인)
- [x] Test 03: **검사완료** (지문/선택지 텍스트 미세 불일치 확인)
- [x] Test 04: **수정완료** (Q46 정답 수정 및 Q98-100 문제/스크립트 전체 교체 완료)
- [x] Test 05: **수정완료** (Part 1, 2, 4 검증 완료. Part 3 (Q47-70)은 잘못된 플레이스홀더 세트를 공식 콘텐츠(스크립트, 문제, 선택지)로 교체하기 위해 전체 데이터 개편을 거쳤습니다.)
- [ ] Test 06: 대기 (데이터 누락 상태)
- [ ] Test 07: 대기
- [ ] Test 08: 대기
- [ ] Test 09: 대기
- [ ] Test 10: 대기

---

## [상세 검증 결과 기록 - 복구본]

### Test_01 - ❌ 오류 발견 (1건)
- Q090: [Publisher] B vs [Source] A (수정 완료)

### Test_04 - ❌ 오류 발견 (전면 불일치 포함)
- Q046: [Publisher] B vs [Source] C
- Q099: [Publisher] B vs [Source] C
- Q100: [Publisher] C vs [Source] A
- **참고**: Part 3, 4 전체 스크립트 및 문제가 이미지와 다른 가짜 데이터로 확인됨. (교조 작업 필수)

### Test_05 - ❌ 오류 발견 (4건)
- Q048: [Publisher] D vs [Source] B
- Q049: [Publisher] C vs [Source] A
- Q050: [Publisher] A vs [Source] D
- Q052: [Publisher] D vs [Source] B

### Test_07 - ❌ 오류 발견 (9건)
- Q071: [Publisher] C vs [Source] A
- Q072: [Publisher] D vs [Source] C
- Q073: [Publisher] B vs [Source] D
- Q074: [Publisher] B vs [Source] C
- Q076: [Publisher] A vs [Source] B
- Q077: [Publisher] B vs [Source] A
- Q093: [Publisher] D vs [Source] A
- Q094: [Publisher] A vs [Source] D
- Q100: [Publisher] A vs [Source] D

### Test_08 - ❌ 오류 발견 (3건)
- Q022: [Publisher] B vs [Source] C
- Q072: [Publisher] D vs [Source] B
- Q073: [Publisher] B vs [Source] D

### Test_10 - ❌ 오류 발견 (17건)
- Q071: [Publisher] B vs [Source] A
- Q073: [Publisher] C vs [Source] A
- Q075: [Publisher] B vs [Source] C
- Q077: [Publisher] A vs [Source] B
- Q078: [Publisher] D vs [Source] B
- Q079: [Publisher] C vs [Source] D
- Q080: [Publisher] B vs [Source] A
- Q081: [Publisher] D vs [Source] B
- Q082: [Publisher] A vs [Source] D
- Q083: [Publisher] B vs [Source] A
- Q084: [Publisher] D vs [Source] A
- Q085: [Publisher] C vs [Source] A
- Q086: [Publisher] A vs [Source] B
- Q087: [Publisher] B vs [Source] C
- Q089: [Publisher] D vs [Source] A
- Q091: [Publisher] C vs [Source] B
- Q092: [Publisher] B vs [Source] C

---

---

## [순차적 작업 계획 (User Defined)]

1. **검사 필요 문제 확인**: 각 Test별로 검사가 필요한 문항(불일치/데이터 의심)을 먼저 확인.
2. **이미지 대조 및 수정**: `toeic-data`의 이미지와 문제/보기를 대조하여 다를 경우 수정 + 정답은 출판사 정답으로 수정.
3. **수정 내역 통보**: 수정한 상세 부분에 대해 사용자에게 보고.
4. **다음 테스트 진행**: 위 단계 완료 후 사용자의 지시에 따라 다음 테스트로 이동 (05 -> 10 순차).

---

