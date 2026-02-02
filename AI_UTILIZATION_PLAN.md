# 🤖 깡쌤토익 AI 맞춤 학습 클리닉 (KANGS-AI-CLINIC) 전략 명세서

본 문서는 강쌤토익의 핵심 AI 엔진인 'AI 주간 정밀 분석'과 '동적 학습 처방전' 시스템의 논리적 구조와 구현 계획을 정의합니다. 단순히 일회성 분석에 그치지 않고, 학습자의 과거 성과를 기억하고 성장을 추적하는 **'순환형 피드백 루프(Feedback Loop)'** 구축을 목표로 합니다.

---

## 1. 시스템 핵심 철학
- **Continuous Memory (지속적 기억):** AI는 지난주에 무엇을 처방했는지, 학생이 그것을 얼마나 잘 수행했는지 기억해야 한다.
- **Logical Alignment (논리적 정합성):** AI의 진단 결과와 사용자에게 제시되는 숙제(처방전)는 데이터적으로 완벽히 일치해야 한다.
- **Data-Driven Prescription (데이터 기반 처방):** 감이 아닌 실제 오답 태그(Classification)와 목표 점수 대비 격차(Gap)를 근거로 우선순위 전략을 세운다.

---

## 2. 데이터 선순환 구조 (5-Step Loop)

### [Step 1] AI 정밀 진단 (Analysis & Diagnosis)
- **Input:** 최근 1주일간의 `Manager_Results` (태그별 오답 데이터) + **과거 리포트 기록**.
- **Output:** 마크다운 형식의 리포트 + **구조화된 처방 코드(JSON)**.
- **Storage:** `User_Reports` 컬렉션에 영구 저장하여 휘발성을 방지.

### [Step 2] 동적 처방 발행 (Dynamic Prescription)
- **UI:** 대시보드 처방전 섹션이 DB의 처방 코드를 읽어서 실시간 렌더링.
- **Logic:** 
  - 관리자 지정 숙제 유무 확인.
  - 숙제 부재 시, AI가 지정한 `focusTag`와 `targetPart`에 맞는 클리닉 버튼 생성.

### [Step 3] 통합 클리닉 런너 (Integrated Clinic Runner)
- **기능:** 파트별 가변 템플릿을 지원하는 통합 문제 풀이 페이지.
- **구성:**
  - **단일 문항형 (P2, P5):** 텍스트 기반 4지선다형.
  - **지문/오디오형 (P3, P4):** 상황 설명 + 오디오 + 3문항 세트 구성.
  - **독해형 (P6, P7):** 50:50 분할 레이아웃 (지문 vs 문제).

### [Step 4] 결과 기록 (Logging)
- **Storage:** `Manager_Results`에 저장.
- **Metadata:** `mode: 'clinic'`, `focusTag: '[태그명]'` 필드 추가.
- **Effect:** 일반 숙제 성적과 구분하여 AI가 클리닉의 효과를 별도로 측정 가능하게 함.

### [Step 5] 피드백 및 업데이트 (Feedback & Growth)
- **Next Cycle:** 다음번 AI 분석 시, "지난 처방의 수행 여부와 성적"을 컨텍스트로 주입.
- **UI:** 대시보드의 '파트별 학습 우선순위(Gap)' 수치가 즉시 보정됨.

---

## 3. 기술적 상세 계획

### 3.1 Firestore DB 설계
#### `User_Reports` (New Collection)
```typescript
{
  userId: string;
  reportText: string;    // 마크다운 리포트 본문
  timestamp: Date;
  prescription: {        // AI가 생성한 JSON 처방전
    part: string;        // 예: "p5"
    focusTags: string[]; // 예: ["participle", "tense"]
    quantity: number;    // 예: 10
    status: "pending" | "completed";
    resultScore?: number;
  }
}
```

### 3.2 AI 프롬프트 가이드 (Brain Logic)
- **Rule 1:** 반드시 `toeic-standards.ts`에 정의된 표준 태그만 사용할 것.
- **Rule 2:** 리포트 서두에는 반드시 지난번 처방 미션의 성공 여부를 언급할 것.
- **Rule 3:** 마지막에 반드시 처방전 데이터를 특정 형식(`JSON BLOCK`)으로 포함할 것.

### 3.3 파트별 클리닉 구현 전략
- **Part 2, 5:** 단일 문항 대량 추출 방식 (Random Sampling by Tag).
- **Part 3, 4, 6, 7:** 지문(Passage/Set) 단위 추출 방식. 태그가 일치하는 지문을 찾아 세트 전체를 바인딩.

---

## 4. 로드맵 (Roadmap)
1. **[Phase 1] 저장 시스템 구축:** AI 결과 파일의 DB 저장 및 '중단된 부분부터 다시 보기' 기능.
2. **[Phase 2] P2/P5 클리닉 오픈:** 태그 기반 단일 문항 추출 및 풀이 엔진 구현.
3. **[Phase 3] 피드백 루프 완성:** 과거 성적을 인지하는 AI 프롬프트 고도화.
4. **[Phase 4] 전 파트 확장:** 지문 기반 파트(P3, 4, 7) 템플릿 추가 및 통합 런너 완성.

---
**기록일:** 2026-02-02
**작성자:** 강쌤토익 AI 시스템 설계팀
