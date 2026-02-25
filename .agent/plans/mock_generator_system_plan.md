# 모의고사 자동 생성 및 레시피 시스템 구축 계획 (Mock Generator & Recipe System Plan)

## 1. 개요 (Overview)
기존의 하드코딩된 모의고사(Set9, Set10 등) 방식에서 탈피하여, 원본 데이터뱅크의 문항들을 파트별로 자유롭게 조합(Mix-and-Match)하여 새로운 회차를 무한정 생성할 수 있는 레시피 기반 아키텍처를 구축합니다.

## 2. 핵심 설계 원칙 (Core Principles)
- **Data Deduplication (중복 제거)**: 데이터를 복사하지 않고 원본 데이터 파일의 ID만 참조합니다.
- **Recipe Driven (레시피 기반)**: 모의고사의 구성을 "어떤 파트에 어떤 원본 회차를 쓸 것인가"에 대한 메타데이터(Recipe)로 관리합니다.
- **Traceability (추적 가능성)**: 학생의 모든 응시 기록은 어떤 원본 문항에서 파생되었는지 추적 가능하도록 설계합니다.

## 3. 주요 구성 요소 (Key Components)

### A. Mock Registry (매핑 데이터베이스)
- 각 모의고사 회차(Mock ID)별 소스 정보를 정의합니다.
  - 예: Mock Test 3 = { P1: Test 5, P2: Test 8, P5: Test 2, ... }

### B. Unitary Question Bank Service (데이터 공급자)
- 파트 번호와 원본 회차 번호를 입력받아 표준 규격의 문항 데이터를 반환하는 중앙 서비스를 구현합니다.

### C. Poly-Renderer Solution Framework (범용 리뷰어)
- 레시피 정보를 기반으로 오디오, 스크립트, 번역 데이터를 올바른 원본 경로에서 동적으로 가져와 렌더링하는 범용 `QuickSolution` 컴포넌트를 완성합니다.

## 4. 기대 효과 및 영향 분석 (Impact Analysis)

### A. 기존 시스템 재활용
- **점수 엔진 (Scoring Engine)**: 100% 재활용 가능합니다. 정답 데이터를 매칭하는 시점에 레시피 정보를 참조하도록 보완합니다.
- **리뷰 프레임워크**: 현재 개발된 `SolutionCard`, `SolutionSet`의 로직을 그대로 사용합니다.

### B. 유지보수 및 확장성
- **단일 지점 수정**: 원본 데이터(Original Tests) 하나만 수정하면 이를 사용하는 모든 모의고사에 동시 반영됩니다.
- **무한 생성**: 관리자가 코드 수정 없이 데이터 설정만으로 신규 모의고사를 무한히 찍어낼 수 있습니다.

## 5. 실행 단계 (Implementation Phases)

1. **[Phase 1] 원본 데이터 표준화**: 모든 파트(P1~P7) 원본 파일의 필드명(audio, translation, script)을 `01_DATA_STRUCTURE_STANDARD` 규격으로 정돈합니다.
2. **[Phase 2] 레시피 엔진 개발**: `mockRegistry.ts`를 정의하고 동적 데이터 공급 함수(`getMockDataByRecipe`)를 완성합니다.
3. **[Phase 3] 리뷰 페이지 리팩토링**: `QuickSolution` 페이지에서 하드코딩된 임포트(`Set9`, `Set10`)를 걷어내고 레시피 기반으로 전환합니다.
4. **[Phase 4] 관리자 생성기 UI (Long-term)**: 드롭다운 클릭만으로 새로운 모의고사를 생성하고 배포하는 대시보드 UI를 구축합니다.
