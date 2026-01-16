# 어휘 학습 시스템 구현 로드맵 (Week 1-6)

## 📋 현재 상황 분석

### ✅ 이미 완료된 것
- **Day 1-30 단어 데이터** (JSON 형식, 120개 파일)
  - 각 파일: `day`, `no`, `word`, `meaning`, `targetScore`, `exampleEn`, `exampleKo`
  - 총 약 4,800개 단어 (Day 30 × 4 Parts × ~40 words)
  - 목표 점수별 분류 완료 (650/800/900)

### 🔧 필요한 작업
1. **데이터 마이그레이션**: JSON → Firestore
2. **3단계 학습 시스템** 구현
3. **SRS 알고리즘** 통합
4. **UI/UX** 개발

---

## 🎯 구현 전략 (6주 계획)

### Week 1-2: 데이터 & 인프라 (Foundation)

#### Week 1: Firebase 설정 & 데이터 마이그레이션
**목표**: Firestore에 4,800개 단어 업로드 완료

**작업 항목**:
- [ ] Firebase 프로젝트 설정 확인
- [ ] Firestore 스키마 구현
  ```typescript
  vocabularies/{wordId}
    - word, meaning, targetScore, example, etc.
  
  userVocabulary/{userId}
    - targetScore, assignedWords[], srsCards{}
  
  learningSessions/{sessionId}
    - sessionNumber, newWords[], reviewWords[], testResults[]
  ```
- [ ] 마이그레이션 스크립트 작성
  - `resources/*.json` → Firestore batch upload
  - Word ID 생성 규칙: `day{day}_part{part}_no{no}`
- [ ] 데이터 검증 (4,800개 단어 확인)

#### Week 2: 기본 UI 프레임워크
**목표**: 학생 대시보드 + 단어 카드 UI

**작업 항목**:
- [ ] 학생 프로필 설정 페이지
  - 목표 점수 선택 (650/800/900)
  - 단어 자동 할당
- [ ] 단어 카드 컴포넌트
  - 앞면: 영단어
  - 뒷면: 발음 + 뜻 + 예문
  - 3D Flip 애니메이션
- [ ] 진도율 대시보드
  - 아는 단어 / 학습 중 / 완료 통계

---

### Week 3-4: 3단계 학습 프로세스 (Core Features)

#### Week 3: Phase 1 & 2 (분류 + 암기)
**목표**: 단어 분류 및 반복 학습 기능

**Phase 1: 초기 분류**
- [ ] 2단계 확인 프로세스
  1. "알아요" 버튼 → 카드 뒤집기
  2. "진짜 알아요 (Skip)" / "몰라요" 선택
- [ ] 상태 관리: `known` / `learning`

**Phase 2: 반복 학습**
- [ ] 무작위 섞기 (Fisher-Yates)
- [ ] "외웠어요" / "다시 볼게요" 버튼
- [ ] 모르는 단어 풀 관리

#### Week 4: Phase 3 (테스트)
**목표**: 4지선다형 테스트 + 3초 타이머

**작업 항목**:
- [ ] 문제 생성 로직
  - Phase 2 학습 단어의 50% 출제
  - 오답 3개 자동 생성 (유사 난이도)
- [ ] 3초 타이머 UI
  - 프로그레스 바
  - 자동 오답 처리
- [ ] 합격/불합격 판정
  - 기본 80% (강사 조정 가능)
  - 합격 → `mastered`, 불합격 → Phase 2 재학습

---

### Week 5: 차수별 복습 시스템 (Advanced)

**목표**: 30%/70% 복습 비율 구현

**작업 항목**:
- [ ] 학습 세션 관리
  - sessionNumber 추적
  - 이전 차수 오답 수집
- [ ] 복습 단어 선정 로직
  - 이전 차수 틀린 단어: 30%
  - 오늘 배운 단어: 70%
- [ ] 복습 진행률 UI

---

### Week 6: SRS 통합 (Scientific Learning)

**목표**: SM-2 알고리즘 적용 + 복습 일정 자동화

**작업 항목**:
- [ ] SM-2 알고리즘 구현
  ```typescript
  interface SRSCard {
    easeFactor: 2.5,  // 초기값
    interval: 1,      // 다음 복습까지 일수
    repetitions: 0,   // 연속 정답 횟수
    nextReview: Timestamp
  }
  ```
- [ ] 복습 일정 계산
  - 정답: 간격 증가 (1일 → 6일 → 점진적 증가)
  - 오답: 처음부터 (1일)
- [ ] "오늘의 복습" 섹션
  - 복습 대상 단어 자동 표시
  - 복습 완료 시 다음 일정 계산
- [ ] SRS 대시보드
  - 장기 기억 단어 수
  - 복습 성공률 그래프

---

## 🛠️ 기술 스택 확인

### 현재 프로젝트 (kangs-toeic-next)
- ✅ Next.js 16.1.1
- ✅ React 19.2.3
- ✅ TypeScript
- ✅ Firebase 12.7.0
- ✅ Radix UI (Dialog, Progress, Tabs 등)

### 추가 필요 라이브러리
- [ ] `date-fns` (SRS 날짜 계산)
- [ ] `zustand` or `jotai` (클라이언트 상태 관리, 선택사항)

---

## 📊 데이터 마이그레이션 전략

### 현재 JSON 구조
```json
{
  "day": 1,
  "no": 1,
  "word": "accomplish",
  "meaning": "성취하다, 완수하다",
  "targetScore": 650,
  "exampleEn": "The team accomplished...",
  "exampleKo": "팀은 ... 달성했습니다."
}
```

### Firestore 변환
```typescript
// Collection: vocabularies
{
  id: "day1_part1_no1",
  word: "accomplish",
  pronunciation: "", // 추가 필요 (TTS API 또는 수동)
  meaning: "성취하다, 완수하다",
  example: "The team accomplished...",
  exampleKo: "팀은 ... 달성했습니다.",
  targetScore: 650,
  difficulty: "basic", // 650→basic, 800→intermediate, 900→advanced
  day: 1,
  part: 1,
  no: 1
}
```

---

## 🚀 즉시 시작 가능한 작업 (Week 1, Day 1)

### 오늘 할 일
1. **Firebase 프로젝트 확인**
   - `.env.local`에 Firebase config 확인
   - Firestore 활성화 확인

2. **Firestore 스키마 설계 문서 작성**
   - Collection 구조 확정
   - Security Rules 초안

3. **마이그레이션 스크립트 작성 시작**
   - `scripts/migrate-vocabulary.ts` 생성
   - Day 1 Part 1 테스트 업로드

---

**다음 단계**: Firebase 설정 확인 후 마이그레이션 스크립트 작성 시작
