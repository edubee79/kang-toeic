# [초안] 깡쌤토익 V4 범용 모의고사 생성기 (Universal Mock Test Generator) 구축 기획서

## 1. 기획 배경 및 목표 (Background & Objectives)
- **현재의 한계:** 모의고사 시스템(`MockTestRunner`)이 특정 회차(testId 9, 10)에 종속된 하드코딩 컴포넌트(`MockTest_LC_Set9.tsx` 등)로 분리되어 있어, 새로운 모의고사나 조합형 문제 세트를 추가하려면 개발자가 수동으로 파일과 UI 코드를 복제/수정해야 함.
- **최종 목표:** 아름답게 구축된 선생님의 명품 시험장 UI(전체화면, 타이머, 페이지네이션 뷰어)를 단 1픽셀도 손상시키지 않고 그대로 **[범용 탬플릿화]** 함.
- **기대 효과:** 코딩 작업 0%로, 관리자(선생님)가 원본 V4 파트별 데이터(Vol 4 Test 1~10)를 마우스로 자유롭게 믹스 앤 매치(Mix & Match)하여 무한대의 새로운 "맞춤형 모의고사"를 즉시 찍어낼 수 있음.

---

## 2. 발전된 시스템 설계도 (Architecture)

### (AS-IS) 낡은 하드코딩 방식
1. 모의고사 9번 진입 → `page.tsx`가 무식하게 `MockTest_LC_Set9` 컴포넌트 강제 호출
2. 데이터 파일과 UI 코드가 1:1로 엉겨 붙어있어 재활용 불가능.

### (TO-BE) 레고 조립형(Generator) 방식
새로운 모의고사는 더 이상 `.tsx` 컴포넌트로 만들지 않습니다. 가벼운 "조합 설계도(JSON)"로만 존재합니다.

**[예시: 관리자가 생성한 "기출 변형 모의고사 100회" 설계도]**
```json
{
  "testId": 100,
  "title": "깡쌤 특제 기출 혼합 모의고사 (불렙)",
  "volInfo": {
    "part1": { "volume": "v4", "testNo": 10 },
    "part2": { "volume": "v4", "testNo": 8 },
    "part3": { "volume": "v4", "testNo": 5 },
    "part4": { "volume": "v4", "testNo": 5 },
    "part5": { "volume": "p5_hard", "testNo": 12 }, // 어제 리뷰한 고난도 셋
    "part6": { "volume": "v4", "testNo": 3 },
    "part7": { "volume": "v4", "testNo": 1 }
  }
}
```
학생이 접속하면 **단일 범용 엔진(`UniversalMockTestEngine.tsx`)**이 설계도를 읽고 7개 퍼즐을 실시간으로 가져와 하나로 이어 붙여 화면에 뿌립니다.

---

## 3. 개발 마스터플랜 전략 (3-Phase)

### 🚀 Phase 1: 범용 렌더링 컴포넌트 복제 및 의존성 분리 (UI 보존 수술)
- **목표:** 기존 `MockTest_LC_Set9.tsx`, `MockTest_RC_Set9.tsx`의 코드를 분석한 결과, UI 렌더링 로직(페이지네이션, 타임라인, CSS)이 데이터 구조(배열) 자체에 종속되어 있으나 완벽한 비율로 짜여 있어 변경 없이 재활용 가능함을 확인.
- **실행 Step 1-1 (컴포넌트 복제):** 원본 코드(`Set9`, `Set10`)는 만일의 롤백을 위해 100% 보존. 대신 내용을 그대로 복사하여 `Universal_LC_Runner.tsx`, `Universal_RC_Runner.tsx` 신규 생성.
- **실행 Step 1-2 (의존성 절단 - Props 주입):** 새 컴포넌트 상단에 고정되어 있던 `import { test9Part5... }` 구문을 삭제하고, 컴포넌트 외부에서 통째로 데이터를 꽂아줄 수 있도록 `interface Props { data: { p5, p6, p7s, p7m } }` 통로 개설.
- **실행 Step 1-3 (내부 변수 치환):** 컴포넌트 내부의 모든 고정 레퍼런스(예: `test9Part5[idx]`)를 주입받은 `data.p5[idx]`로 일괄 치환(Replace). **레이아웃 관련 픽셀이나 CSS는 단 한 줄도 건드리지 않음 (UI 완벽 보존).**

### 🚀 Phase 2: 동적 데이터 공급 브릿지 구축 (Dynamic Fetching)
- **목표:** 학생이 "모의고사 100회차"를 클릭했을 때, 설계도(JSON)를 읽고 7개의 흩어진 V4 모듈 파일(`v4_p1_t*.ts`)들을 브라우저 메모리로 실시간 긁어오는 관문술통 구축.
- **실행 Step 2-1 (설계도 파서):** 설계도에 적힌 파트 1~7의 볼륨과 버전을 확인.
- **실행 Step 2-2 (Dynamic Import):** 해당 모듈들을 비동기로 불러와 하나의 거대한 `dataLayer` 객체로 포장한 뒤, 앞서 만든 `Universal_LC/RC_Runner` 컴포넌트의 Props에 주사(Injection).

### 🚀 Phase 3: 동적 채점 엔진(Scoring) 연동 보수 공사
- **현상황의 문제점:** 현재의 채점 로직(`scoring.ts`) 또한 `getCorrectAnswersForTest9()`처럼 하드코딩된 정답표를 불러오고 있음. 동적 조합형 모의고사는 고정된 정답표 파일이 없음.
- **실행 Step 3-1 (On-the-fly 정답표 추출):** 브릿지를 통해 조립된 200문항의 `dataLayer`에서, 실시간으로 각 문제의 `id`와 `correctAnswer`를 뽑아내어 일회용 동적 정답표(Truth Table)를 메모리상에 자동 생성.
- **실행 Step 3-2 (기존 채점기 연결):** 이 동적 정답표를 기존의 `calculateMockScore` 함수에 밀어 넣어, 완벽하게 채점되고 DB 오답노트에 기존과 똑같이 저장되게끔 파이프라인 정비.

### 🚀 Phase 4: 관리자 전용 '모의고사 레고 공장장' UI (Admin UI)
- **목표:** 관리자 페이지에 `[모의고사 자동 생성]` 대시보드 인터페이스 추가.
- **실행 Step:** 파트 1부터 파트 7까지 드롭다운 메뉴로 특정 회차를 쏙쏙 고르고, "모의고사 이름"을 적고 [생성] 버튼을 누르는 순간 DB에 설계도(JSON)가 등재됨. 이후 시스템 자동화 완비.

### 🚀 Phase 5: 영구 복습 시스템 연동 (Review System & Storage)
- **설계도 DB화:** 생성된 모의고사는 문제 전체가 통째로 복사되는 것이 아니라, Firebase `MockTestConfigs` 컬렉션에 `{ id: "gen_mock_3", p1: "v4_t1", p2: "v4_t3" ... }` 형태의 가벼운 '조합 설계도(레시피)' 문서 한 장으로 영구 저장됨.
- **간섭 없는 누적:** 관리자가 3회, 4회, 100회 모의고사를 계속 찍어내도 각각의 레시피 문서만 추가되므로 과거의 설계도(3회차)는 삭제되지 않고 영원히 보존됨.
- **동적 복습 렌더러(Viewer):** 학생이 3회차 복습 버튼을 누르면, 시스템이 `gen_mock_3` 레시피를 꺼내 원본 V4 부품 200개를 다시 조립하여(Re-assemble) 화면에 띄우고 그 위에 학생이 저장했던 오답표(`Manager_Results`)를 덧씌워 완벽한 오답 노트 기능을 수행함.

### 🚀 Phase 6: 커스텀 전용 리포팅 및 분석 엔진 분리 개편 (Universal Reporting) [NEW]
- **목표:** 기존 고정형 모의고사 1/2회 분석기(`HalfTestService.ts`)와 커스텀/하프 모의고사 전용 분석기(`UniversalTestService.ts`)를 아키텍처 상 완전히 분리하여 향후 확장(커스텀 하프테스트 등)에 대비함.
- **실행 Step 6-1 (데이터 포맷팅 설계):** 기존에 UI 화면이 소비하고 있는 `HalfTestAnalysis` 인터페이스 구조(점수, partStats, rcTimeAnalysis 등)를 100% 동일하게 유지하여 화면단 수정 소요(Cost)를 0으로 만듦.
- **실행 Step 6-2 (새 분석기 구현):** `UniversalTestService.ts`를 신규 생성. 동적 채점표(`TruthMap` 혹은 응시 기록에 함께 저장한 문항별 데이터)를 바탕으로 틀린 문제의 '태그(분류)'를 실시간으로 집계하고 약점 진단 코칭 멘트를 생성하는 로직 작성. 
- **실행 Step 6-3 (라우팅 분기 연결):** `src/app/mock-test/full/[testId]/result/page.tsx` 내에서, 학생이 방금 친 시험이 정규 모의고사(test9/10)이면 기존 `HalfTestService`를 호출하고, 커스텀 모의고사면 방금 만든 `UniversalTestService`를 호출하도록 분기문(Branching)만 1줄 추가.

---

## 4. 리스크 및 보수적 예외 처리 계획
- **문제 발생 시 롤백 방어:** 기존 `testId: 9`, `10`은 원본 `Set9.tsx`, `Set10.tsx` 컴포넌트를 그대로 타도록 분기문(`if문`)을 유지. 
- **신규 엔진 테스트:** 테스트용 ID(`testId: 999`)를 하나 강제 할당하여, 오직 999번 클릭 시에만 `Universal Engine`이 돌도록 고립된 환경(Sandbox)에서 렌더링, 페이지네이션, 120분 타이머, 채점, Firebase 저장을 모두 검증(백테스트)한 후 본 서버로 상용화 배포.

---

## ⚓ 5. 개발자 앵커 (Developer Context Anchor)
*(경고: AI 에이전트가 기억을 잃었거나 작업 중 논리적 충돌이 발생했을 때, 최우선적으로 돌아와야 할 아키텍처 원칙표)*

1. **UI/UX 절대 보존의 법칙:** 기존 `MockTest_RC_Set9.tsx`의 렌더링 함수(`renderRCSpread`, `renderP5Question` 등)에 하드코딩된 레이아웃 로직(픽셀, 패딩, `Math.ceil()`)은 토익 웹뷰어의 마스터피스다. 새 범용 렌더러(`Universal_RC_Runner.tsx`)를 구축할 때 **CSS나 JSX 레이아웃은 단 1줄도 수정하지 마라.**
2. **의존성 주입(Dependency Injection) 원칙:** 렌더러 내부에 `import { test9Part5 ... }` 같은 고정 데이터 호출 방식을 모조리 뽑아내라. 렌더러는 오로지 부모(Page)로부터 `props: { data: { p5: [], p6: [], p7s: [], p7m: [] } }`만을 공급받아 뿌리는 철저한 **통뼈(Dumb Component)** 역할만 해야 한다.
3. **데이터 조달은 관문(Page)에서만:** 여러 V4 파일을 비동기(Dynamic)로 긁어모아서 거대한 `dataLayer` 객체 덩어리를 조립하는 역할은 최상단 컴포넌트(`page.tsx` 또는 커스텀 훅)가 100% 전담한다.
4. **채점표(Answers)의 동적 추출:** 고정된 채점표 파일에 의존하지 마라. 화면을 렌더링할 때 내려준 200문제 `dataLayer` 안에서 `id`와 `correctAnswer`를 On-the-fly로 추출하여 **1회용 가설 채점표**를 메모리상에 조립하고, 이 맵(Map)을 기존 `scoring.ts` 파이프라인에 주입하라. (DB의 기존 워크플로우를 절대 깨지 말 것)

---
**[결론]**
이 프로젝트는 "비효율적인 수동 복붙 코딩"의 고리를 끊고, 깡쌤토익을 **"레시피(JSON) 기반 무한 동력 모의고사 자동 생산 플랫폼"**으로 진화시키는 가장 정밀한 아키텍처 개복 수술이다. 단계별로 100% 고립 테스트를 완주한 뒤에만 다음 Step으로 전진한다.
