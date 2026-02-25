# TOEIC 데이터 통합 및 이관 마스터 플랜 (V3/V4 Migration Master Plan)

## 1. 개요 (Overview)
현재 파트별, 회차별로 기출 3탄과 4탄이 혼재되어 있는 데이터 구조를 **시리즈별(Volume) 계층 구조**로 재배치합니다. 이를 통해 데이터 무결성을 확보하고 AI 진단 및 모의고사 자동 생성 시스템의 기반을 마련합니다.

## 2. 현황 분석 및 분류 (Current Inventory)
각 파트별 물리적 데이터의 출처를 다음과 같이 분류합니다.

| 분류 | 구분 | 현재 파일 (Current) | 실제 출처 (Source) | 목표 번호 (Global No.) |
| :--- | :--- | :--- | :--- | :--- |
| **LC** | **Part 1** | Test 01 ~ 10 | 기출 3탄 (1~10회) | **01 ~ 10** |
| **LC** | **Part 2** | Test 01 ~ 05 | **기출 4탄 (1~5회)** | **11 ~ 15** |
| **LC** | **Part 2** | Test 06 ~ 10 | **기출 3탄 (6~10회)** | **06 ~ 10** |
| **LC** | **Part 3** | Test 01 ~ 10 | 기출 3탄 (1~10회) | **01 ~ 10** |
| **LC** | **Part 4** | Test 01 ~ 10 | 기출 3탄 (1~10회) | **01 ~ 10** |
| **RC** | **Part 5** | Test 01 ~ 10 | 기출 4탄 (1~10회) | **11 ~ 20** |
| **RC** | **Part 6** | Test 01 ~ 10 | 기출 3탄 (1~10회) | **01 ~ 10** |
| **RC** | **Part 6** | Test 11 | **기출 4탄 (10회)** | **20** |
| **RC** | **Part 7** | Test 01 ~ 10 | 기출 4탄 (1~10회) | **11 ~ 20** |

## 3. 목표 아키텍처 (Target Architecture)
표준 문서(`01_DATA_STRUCTURE_STANDARD.md`)에 따라 다음과 같이 시리즈별로 격리된 구조를 가집니다.

```text
src/data/toeic/
  ├── v3/ 
  │   ├── listening/ [part1, part2, part3, part4]
  │   └── reading/ [part5, part6, part7]
  └── v4/ 
       ├── listening/ [part1, part2, part3, part4]
       └── reading/ [part5, part6, part7]
```

## 4. 이관 공정 단계 (Migration Phases)

### [Phase 1] 서비스 레이어 구축 (Service Layer)
- 컴포넌트가 파일 경로를 직접 알지 못하도록 `MockDataService`를 선제적으로 구현합니다.
- 데이터 로딩 로직을 중앙 집중화하여 경로 이동 시의 충격을 완화합니다.

### [Phase 2] 데이터 분류 및 물리적 이관 (Categorization & Move)
- **LC Part 2 (Pilot)**: 
  - `part2/tests.ts`에 거대하게 묶여있던 데이터를 회차별 독립 파일로 분산.
  - **V3 그룹**: 원본 06~10번 데이터는 `v3/listening/part2/v3_p2_t06~10.ts` 생성.
  - **V4 그룹**: 원본 01~05번 데이터는 `v4/listening/part2/v4_p2_t01~05.ts` 생성.
  - 이때 ID 정규화(`v{N}-p2-t{Y}-q{Z}`) 및 `vol` 필드 주입을 동시에 수행.
- **RC Part 5**: 원본 `test1~10`을 `v4/reading/part5/v4_p5_t01~10.ts`로 이관.

### [Phase 3] 참조 경로 일괄 수정 (Refactoring)
- 프로젝트 전체의 `import` 구문을 기계적으로 검색하여 수정.
- **경로 구조**: `src/data/toeic/v{N}/[listening|reading]/part{X}/`
- **파일명**: `v{N}_p{X}_t{Y}.ts` (예: `v4_p5_t01.ts`) 
- **문항 ID**: `v{N}-p{X}-t{Y}-q{Z}` (예: `v4-p5-t01-q101`)
- **볼륨 태깅**: 모든 테스트 데이터 객체에 `vol: number` 필드 필수 주입.
- **변수명 규격**: `test{Y}Data` (기존 함수의 호환성 유지)
- **특수 데이터**: 특정 회차가 아닌 큐레이션/고난도 데이터는 별도 폴더(`curated/`)로 격리하여 명명 충돌 방지.
- **데이터 분리**: **[신규]** 파트 2와 같이 하나의 파일로 관리되던 데이터를 회차별 독립 파일(`testN.ts`)로 분리합니다.

### [Phase 4] ID 및 메타데이터 정규화
- **ID 변경**: 모든 문제 ID를 `v{N}-p{X}-t{Y}-q{Z}` 형식으로 변경(예: `v4-p5-t01-q101`).

### [Phase 5] 검증 및 레거시 정리 (Verification)
- `npm run build`를 통한 참조 오류 전수 검사.
- 점수 엔진 및 리뷰 페이지의 정상 작동 여부 시뮬레이션.
- 임시로 남겨둔 '이정표(Re-export)' 파일 제거.

## 5. 리스크 관리 (Risk Management)
- **데이터 손실**: 작업 전 Git Commit 필수.
- **히스토리 유실**: 기존 ID를 사용하는 DB 데이터(학생 성적 등)가 있을 경우, 신규 ID 체계와의 매핑 테이블을 유지하거나 하위 호환 로직을 점수 엔진에 포함합니다.

---
## 📊 현재 구현 상태 (Implementation Status)

| 파트 | 범위 | 상태 | 비고 |
| :--- | :--- | :--- | :--- |
| **LC P1** | 01 ~ 10 (v3) | ⏳ Executing | **회차별 파일 분리 및 ID 정규화 진행 중** |
| **LC P2** | 06~10(v3), 11~15(v4) | ✅ Done | **회차별 파일 분리 및 ID 정규화 완료** |
| **LC P3** | 01 ~ 10 (v3) | ⏳ Executing | **회차별 파일 분리 및 ID 정규화 진행 중** |
| **LC P4** | 01 ~ 10 (v3) | 💤 Pending | 작업 대기 |
| **RC P5** | 11 ~ 20 (v4) | ✅ Done | **v4_p5_t01~10 개별 파일 생성 및 ID 정규화 완료** |
| **RC P6** | 01~10(v3), 20(v4) | 💤 Pending | 작업 대기 |
| **RC P7** | 11 ~ 20 (v4) | 💤 Pending | 작업 대기 |

---
## ❓ 추가 확인 사항 (Open Questions)
- (완료) P2 회차 번호: 신형 체계(11~15) 적용 확정.
- (완료) P3, P4 출처: 기출 3탄 확정.
