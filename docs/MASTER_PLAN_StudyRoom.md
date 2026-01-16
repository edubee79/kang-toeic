# Kang's TOEIC - 나의 학습방 시스템 개선 계획

## 📋 개요

**목표**: 학생 맞춤형 목표 설정 및 진도 관리 시스템 구축  
**핵심 기능**: 목표 점수 설정, RC/LC 분배, 파트별 목표, 숙제 관리, 순위 시스템

---

## 🎯 1. 목표 점수 설정 시스템

### 1.1 UI 구조
```
┌─────────────────────────────────────────┐
│  나의 학습방 (김형진 학생)               │
│  목표 점수: [800점 ▼]  [수정]          │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │ 강사 추천 목표                      │ │
│  │ RC: 350점  LC: 450점               │ │
│  │                                     │ │
│  │ 필요 정답 개수                      │ │
│  │ RC: 75/100  LC: 85/100             │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### 1.2 점수 분배 로직

#### 기본 원칙
- **LC 점수 = RC 점수 + 50점** (강사 추천)
- 총점에서 RC/LC 비율 자동 계산

#### 계산 공식
```typescript
interface ScoreTarget {
  total: number;          // 총 목표 점수 (800)
  rc: number;            // RC 목표 (350)
  lc: number;            // LC 목표 (450)
  rcQuestions: number;   // RC 필요 정답 수 (75/100)
  lcQuestions: number;   // LC 필요 정답 수 (85/100)
}

const calculateScoreDistribution = (totalTarget: number): ScoreTarget => {
  // LC = RC + 50 조건 하에서 계산
  // total = RC + LC = RC + (RC + 50) = 2*RC + 50
  const rc = Math.round((totalTarget - 50) / 2);
  const lc = totalTarget - rc;
  
  // 점수별 필요 정답 수 (TOEIC 점수 분포표 기준)
  const rcQuestions = getRequiredCorrectAnswers(rc, 'RC');
  const lcQuestions = getRequiredCorrectAnswers(lc, 'LC');
  
  return { total: totalTarget, rc, lc, rcQuestions, lcQuestions };
};
```

### 1.3 TOEIC 점수 분포표

#### RC (100문제)
| 점수 | 필요 정답 수 | 정답률 |
|------|-------------|--------|
| 200 | 35 | 35% |
| 250 | 50 | 50% |
| 300 | 62 | 62% |
| 350 | 75 | 75% |
| 400 | 85 | 85% |
| 450 | 92 | 92% |
| 495 | 98 | 98% |

#### LC (100문제)
| 점수 | 필요 정답 수 | 정답률 |
|------|-------------|--------|
| 250 | 40 | 40% |
| 300 | 55 | 55% |
| 350 | 68 | 68% |
| 400 | 78 | 78% |
| 450 | 85 | 85% |
| 495 | 95 | 95% |

```typescript
// 점수 분포표 데이터
const SCORE_DISTRIBUTION = {
  RC: [
    { score: 200, correct: 35 },
    { score: 250, correct: 50 },
    { score: 300, correct: 62 },
    { score: 350, correct: 75 },
    { score: 400, correct: 85 },
    { score: 450, correct: 92 },
    { score: 495, correct: 98 }
  ],
  LC: [
    { score: 250, correct: 40 },
    { score: 300, correct: 55 },
    { score: 350, correct: 68 },
    { score: 400, correct: 78 },
    { score: 450, correct: 85 },
    { score: 495, correct: 95 }
  ]
};

const getRequiredCorrectAnswers = (targetScore: number, section: 'RC' | 'LC'): number => {
  const distribution = SCORE_DISTRIBUTION[section];
  
  // 선형 보간법으로 중간 점수 계산
  for (let i = 0; i < distribution.length - 1; i++) {
    if (targetScore >= distribution[i].score && targetScore <= distribution[i + 1].score) {
      const ratio = (targetScore - distribution[i].score) / 
                    (distribution[i + 1].score - distribution[i].score);
      return Math.round(
        distribution[i].correct + 
        ratio * (distribution[i + 1].correct - distribution[i].correct)
      );
    }
  }
  
  return distribution[distribution.length - 1].correct;
};
```

---

## 🎨 2. 목표 수정 시스템

### 2.1 수정 UI
```
┌─────────────────────────────────────────┐
│  목표 점수 수정                          │
│                                          │
│  총 목표: 800점                          │
│                                          │
│  RC 목표: [350 ▼]  (필요: 75/100)      │
│  LC 목표: [450 ▼]  (필요: 85/100)      │
│                                          │
│  ⚠️ RC + LC = 800점이어야 합니다         │
│                                          │
│  [취소]  [저장]                          │
└─────────────────────────────────────────┘
```

### 2.2 검증 로직
```typescript
const validateScoreEdit = (rc: number, lc: number, total: number): boolean => {
  // 1. 합계 검증
  if (rc + lc !== total) {
    alert('RC + LC 점수의 합이 총 목표 점수와 일치해야 합니다.');
    return false;
  }
  
  // 2. 범위 검증
  if (rc < 10 || rc > 495 || lc < 5 || lc > 495) {
    alert('점수는 유효한 범위 내에 있어야 합니다.');
    return false;
  }
  
  return true;
};
```

---

## 📊 3. 파트별 목표 설정

### 3.1 UI 구조
```
┌─────────────────────────────────────────┐
│  파트별 목표 설정                        │
│                                          │
│  LC (총 85/100 필요)                    │
│  ├─ Part 1: [5/6]   ✓                  │
│  ├─ Part 2: [20/25] ✓                  │
│  ├─ Part 3: [30/39] ✓                  │
│  └─ Part 4: [30/30] ✓                  │
│  합계: 85/100 ✅                         │
│                                          │
│  RC (총 75/100 필요)                    │
│  ├─ Part 5: [25/30] ✓                  │
│  ├─ Part 6: [12/16] ✓                  │
│  └─ Part 7: [38/54] ✓                  │
│  합계: 75/100 ✅                         │
│                                          │
│  [저장]                                  │
└─────────────────────────────────────────┘
```

### 3.2 데이터 구조
```typescript
interface PartTarget {
  part: 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'P7';
  targetCorrect: number;   // 목표 정답 수
  totalQuestions: number;  // 총 문제 수
}

interface StudentGoal {
  userId: string;
  totalTarget: number;     // 총 목표 점수
  rcTarget: number;        // RC 목표 점수
  lcTarget: number;        // LC 목표 점수
  rcCorrectNeeded: number; // RC 필요 정답 수
  lcCorrectNeeded: number; // LC 필요 정답 수
  partTargets: PartTarget[]; // 파트별 목표
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 3.3 검증 로직
```typescript
const validatePartTargets = (
  partTargets: PartTarget[], 
  section: 'LC' | 'RC',
  requiredTotal: number
): boolean => {
  const sum = partTargets
    .filter(p => section === 'LC' ? p.part.startsWith('P1-4') : p.part.startsWith('P5-7'))
    .reduce((acc, p) => acc + p.targetCorrect, 0);
  
  if (sum !== requiredTotal) {
    alert(`${section} 파트별 목표의 합이 ${requiredTotal}개와 일치해야 합니다.`);
    return false;
  }
  
  // 각 파트의 목표가 총 문제 수를 초과하지 않는지 확인
  for (const target of partTargets) {
    if (target.targetCorrect > target.totalQuestions) {
      alert(`${target.part}의 목표가 총 문제 수(${target.totalQuestions})를 초과합니다.`);
      return false;
    }
  }
  
  return true;
};
```

---

## 📈 4. 목표 달성도 표시

### 4.1 UI 구조
```
┌─────────────────────────────────────────┐
│  나의 목표 달성도                        │
│                                          │
│  현재 점수: 720점 (레벨테스트)          │
│  목표 점수: 800점                        │
│  진행률: 90% ████████████░░░            │
│                                          │
│  RC: 320/350 (91%) ████████████░        │
│  LC: 400/450 (89%) ███████████░         │
│                                          │
│  파트별 달성률                           │
│  Part 1: 5/5   (100%) ████████████      │
│  Part 2: 18/20 (90%)  █████████░        │
│  Part 3: 27/30 (90%)  █████████░        │
│  Part 4: 25/30 (83%)  ████████░░        │
│  Part 5: 23/25 (92%)  █████████░        │
│  Part 6: 10/12 (83%)  ████████░░        │
│  Part 7: 32/38 (84%)  ████████░░        │
└─────────────────────────────────────────┘
```

### 4.2 점수 계산 로직

#### 현재 점수 반영
```typescript
interface StudentProgress {
  userId: string;
  currentScore: number;      // 현재 총점
  currentRC: number;         // 현재 RC 점수
  currentLC: number;         // 현재 LC 점수
  levelTestScore: number;    // 레벨테스트 점수
  partScores: {
    [key: string]: {
      correct: number;       // 맞은 문제 수
      total: number;         // 푼 문제 수
      accuracy: number;      // 정답률
    }
  };
  lastUpdated: Timestamp;
}
```

#### 점수 업데이트 로직
```typescript
const updateStudentScore = async (
  userId: string, 
  partResults: { part: string; correct: number; total: number }[]
) => {
  // 1. 파트별 정답률 계산
  const partScores = {};
  for (const result of partResults) {
    partScores[result.part] = {
      correct: result.correct,
      total: result.total,
      accuracy: result.correct / result.total
    };
  }
  
  // 2. RC/LC 점수 추정
  const rcCorrect = ['P5', 'P6', 'P7']
    .reduce((sum, p) => sum + (partScores[p]?.correct || 0), 0);
  const lcCorrect = ['P1', 'P2', 'P3', 'P4']
    .reduce((sum, p) => sum + (partScores[p]?.correct || 0), 0);
  
  const currentRC = estimateScore(rcCorrect, 'RC');
  const currentLC = estimateScore(lcCorrect, 'LC');
  
  // 3. Firestore 업데이트
  await updateDoc(doc(db, 'studentProgress', userId), {
    currentScore: currentRC + currentLC,
    currentRC,
    currentLC,
    partScores,
    lastUpdated: serverTimestamp()
  });
};

const estimateScore = (correctCount: number, section: 'RC' | 'LC'): number => {
  const distribution = SCORE_DISTRIBUTION[section];
  
  // 역 보간법으로 점수 추정
  for (let i = 0; i < distribution.length - 1; i++) {
    if (correctCount >= distribution[i].correct && 
        correctCount <= distribution[i + 1].correct) {
      const ratio = (correctCount - distribution[i].correct) / 
                    (distribution[i + 1].correct - distribution[i].correct);
      return Math.round(
        distribution[i].score + 
        ratio * (distribution[i + 1].score - distribution[i].score)
      );
    }
  }
  
  return distribution[distribution.length - 1].score;
};
```

---

## 📝 5. 숙제 관리 시스템

### 5.0 과제 유형 구분

#### 📌 2가지 과제 유형
1. **그날의 과제** (공통 과제)
   - 강사가 반 전체에 출제
   - 모든 학생이 동일한 과제 수행
   
2. **AI 취약점 분석 개인별 과제** 🤖
   - 학생별 오답 데이터 분석
   - 유사 유형 문제 자동 생성
   - 강사가 선택 시 자동 생성

### 5.1 강사 - 숙제 출제 페이지

#### UI 구조
```
┌─────────────────────────────────────────┐
│  숙제 출제                               │
│                                          │
│  반 선택: [Winter Camp 800반 ▼]        │
│                                          │
│  과제 유형 선택:                         │
│  ○ 그날의 과제 (공통)                   │
│  ○ AI 개인별 과제 (취약점 분석) 🤖     │
│                                          │
│  ─────────────────────────────────────  │
│                                          │
│  [그날의 과제 선택 시]                   │
│  과제 유형:                              │
│  ┌─────────────────────────────────┐   │
│  │ [단어장]  [문법미션]  [Part 1]   │   │
│  │ [Part 2]  [Part 3]  [Part 4]    │   │
│  │ [Part 5]  [Part 6]  [Part 7]    │   │
│  └─────────────────────────────────┘   │
│                                          │
│  세부 진도: [Day 5 - 경제 어휘 ▼]      │
│  마감일: [2026-01-15 23:59]            │
│                                          │
│  [출제하기]                              │
│                                          │
│  ─────────────────────────────────────  │
│                                          │
│  [AI 개인별 과제 선택 시]                │
│  분석 대상 과제:                         │
│  ┌─────────────────────────────────┐   │
│  │ ☑ 2026-01-10 Part 5 Unit 3      │   │
│  │ ☑ 2026-01-09 Part 7 지문독해    │   │
│  │ ☑ 2026-01-08 문법 미션 Day 2    │   │
│  └─────────────────────────────────┘   │
│                                          │
│  문제 수: [10문제 ▼]                    │
│  마감일: [2026-01-15 23:59]            │
│                                          │
│  📊 미리보기:                            │
│  • 김형진: Part 5 동사형태 7문제       │
│  • 이지은: Part 7 추론 8문제           │
│  • 박민수: 문법 시제 6문제             │
│                                          │
│  [AI 과제 생성하기] 🤖                  │
└─────────────────────────────────────────┘
```

### 5.2 AI 취약점 분석 시스템 🤖

#### 5.2.1 오답 데이터 분석
```typescript
interface WrongAnswer {
  studentId: string;
  homeworkId: string;
  questionId: string;
  questionType: string;      // 문법 유형 (예: "동사형태", "시제", "전치사")
  partType: string;          // Part 5, 6, 7 등
  selectedAnswer: string;
  correctAnswer: string;
  timestamp: Timestamp;
}

interface WeaknessAnalysis {
  studentId: string;
  weakTypes: {
    type: string;            // 문법 유형
    count: number;           // 틀린 횟수
    accuracy: number;        // 정답률
    lastWrong: Timestamp;    // 마지막으로 틀린 시간
  }[];
  recommendedQuestions: number; // 추천 문제 수
}
```

#### 5.2.2 취약점 분석 로직
```typescript
const analyzeWeakness = async (
  studentId: string, 
  homeworkIds: string[]
): Promise<WeaknessAnalysis> => {
  // 1. 선택된 과제들의 오답 데이터 가져오기
  const wrongAnswers = await getWrongAnswers(studentId, homeworkIds);
  
  // 2. 유형별 분류 및 집계
  const typeStats = {};
  for (const wrong of wrongAnswers) {
    const type = wrong.questionType;
    if (!typeStats[type]) {
      typeStats[type] = { count: 0, total: 0, lastWrong: wrong.timestamp };
    }
    typeStats[type].count += 1;
    typeStats[type].total += 1;
    if (wrong.timestamp > typeStats[type].lastWrong) {
      typeStats[type].lastWrong = wrong.timestamp;
    }
  }
  
  // 3. 정답률 계산 (전체 문제 대비)
  const totalQuestions = await getTotalQuestions(studentId, homeworkIds);
  for (const type in typeStats) {
    const typeTotal = totalQuestions[type] || typeStats[type].count;
    typeStats[type].accuracy = 
      ((typeTotal - typeStats[type].count) / typeTotal) * 100;
  }
  
  // 4. 취약 유형 정렬 (틀린 횟수 많은 순)
  const weakTypes = Object.entries(typeStats)
    .map(([type, stats]) => ({
      type,
      count: stats.count,
      accuracy: stats.accuracy,
      lastWrong: stats.lastWrong
    }))
    .sort((a, b) => b.count - a.count);
  
  // 5. 추천 문제 수 계산
  const recommendedQuestions = Math.min(
    weakTypes.reduce((sum, w) => sum + Math.ceil(w.count * 0.5), 0),
    20  // 최대 20문제
  );
  
  return {
    studentId,
    weakTypes,
    recommendedQuestions
  };
};
```

#### 5.2.3 유사 문제 생성
```typescript
const generatePersonalizedHomework = async (
  studentId: string,
  analysis: WeaknessAnalysis,
  questionCount: number
) => {
  const questions = [];
  
  // 1. 취약 유형별 문제 수 배분
  const distribution = distributeQuestions(analysis.weakTypes, questionCount);
  
  // 2. 각 유형별로 문제 선택
  for (const [type, count] of Object.entries(distribution)) {
    // 문제 은행에서 해당 유형의 문제 가져오기
    const availableQuestions = await getQuestionsByType(type);
    
    // 이미 푼 문제 제외
    const solvedQuestions = await getSolvedQuestions(studentId);
    const newQuestions = availableQuestions.filter(
      q => !solvedQuestions.includes(q.id)
    );
    
    // 무작위로 선택
    const selected = shuffleArray(newQuestions).slice(0, count);
    questions.push(...selected);
  }
  
  return questions;
};

const distributeQuestions = (
  weakTypes: { type: string; count: number }[],
  total: number
): Record<string, number> => {
  const distribution = {};
  const totalWrong = weakTypes.reduce((sum, w) => sum + w.count, 0);
  
  for (const weak of weakTypes) {
    // 비율에 따라 문제 수 배분
    const ratio = weak.count / totalWrong;
    distribution[weak.type] = Math.max(1, Math.round(total * ratio));
  }
  
  return distribution;
};
```

### 5.3 학생 - 나의 학습방 (오늘의 과제)

#### UI 구조
```
┌─────────────────────────────────────────┐
│  오늘의 과제 (3개)                       │
│                                          │
│  📋 그날의 과제 (1개)                    │
│  ┌─────────────────────────────────┐   │
│  │ 📚 단어장 - Day 5 경제 어휘      │   │
│  │ 마감: 2026-01-15 23:59          │   │
│  │ [시작하기]                       │   │
│  └─────────────────────────────────┘   │
│                                          │
│  🤖 나만의 맞춤 과제 (2개)              │
│  ┌─────────────────────────────────┐   │
│  │ 🎯 취약점 집중 훈련 #1           │   │
│  │ Part 5 동사형태 7문제           │   │
│  │ 마감: 2026-01-15 23:59          │   │
│  │ [시작하기]                       │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 🎯 취약점 집중 훈련 #2           │   │
│  │ Part 7 추론 문제 8문제          │   │
│  │ 마감: 2026-01-16 23:59          │   │
│  │ [시작하기]                       │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 5.4 데이터 구조 (업데이트)

```typescript
interface Homework {
  id: string;
  classId: string;
  className: string;
  type: 'common' | 'personalized';  // 공통 or 개인별
  
  // 공통 과제
  category?: 'vocabulary' | 'grammar' | 'part1' | ... | 'part7';
  title?: string;
  content?: string;
  
  // 개인별 과제
  sourceHomeworkIds?: string[];     // 분석 대상 과제 ID
  weaknessAnalysis?: {
    studentId: string;
    weakTypes: string[];
    questionCount: number;
  }[];
  
  dueDate: Timestamp;
  createdAt: Timestamp;
  createdBy: string;
}

interface PersonalizedHomework {
  id: string;
  homeworkId: string;              // 원본 과제 ID
  studentId: string;
  questions: {
    questionId: string;
    questionType: string;
    difficulty: number;
  }[];
  generatedAt: Timestamp;
}
```

### 5.5 강사 - 숙제 결과 확인 (업데이트)

#### UI 구조
```
┌─────────────────────────────────────────┐
│  숙제 결과 확인                          │
│                                          │
│  반 선택: [Winter Camp 800반 ▼]        │
│                                          │
│  필터: [전체 ▼] [그날의 과제] [AI 과제] │
│                                          │
│  과제 이력                               │
│  ┌─────────────────────────────────┐   │
│  │ 📋 2026-01-15  단어장 Day 5      │   │
│  │ 제출: 15/20명  평균: 85점       │   │
│  │ [상세보기]                       │   │
│  ├─────────────────────────────────┤   │
│  │ 🤖 2026-01-15  AI 취약점 훈련    │   │
│  │ 제출: 18/20명  평균: 78점       │   │
│  │ 개선율: +12% ↑                  │   │
│  │ [상세보기]                       │   │
│  ├─────────────────────────────────┤   │
│  │ 📋 2026-01-14  Part 5 Unit 3     │   │
│  │ 제출: 18/20명  평균: 78점       │   │
│  │ [상세보기]                       │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

#### AI 과제 상세 분석
```
┌─────────────────────────────────────────┐
│  AI 취약점 훈련 결과 분석                │
│                                          │
│  📊 전체 통계                            │
│  • 평균 점수: 78점                       │
│  • 평균 개선율: +12%                     │
│  • 완료율: 90% (18/20명)                │
│                                          │
│  🎯 유형별 개선도                        │
│  ┌─────────────────────────────────┐   │
│  │ 동사형태: 65% → 82% (+17%) ↑    │   │
│  │ 시제: 70% → 78% (+8%) ↑         │   │
│  │ 전치사: 55% → 68% (+13%) ↑      │   │
│  └─────────────────────────────────┘   │
│                                          │
│  👥 학생별 결과                          │
│  ┌─────────────────────────────────┐   │
│  │ 김형진: 85점 (개선율 +15%)      │   │
│  │ 이지은: 92점 (개선율 +20%)      │   │
│  │ 박민수: 68점 (개선율 +5%)       │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## ✅ 6. 구현 우선순위 (업데이트)

### Phase 1: 목표 설정 시스템 (1주)
- [ ] 목표 점수 입력 UI
- [ ] RC/LC 자동 분배 로직
- [ ] 필요 정답 수 계산
- [ ] 파트별 목표 설정 UI
- [ ] 검증 로직

### Phase 2: 진도 관리 시스템 (1주)
- [ ] 현재 점수 계산 로직
- [ ] 목표 달성도 UI
- [ ] 파트별 진행률 표시
- [ ] 실시간 업데이트

### Phase 3: 숙제 관리 시스템 (3주) ⭐ 확장
**3.1 그날의 과제 (공통)** (1주)
- [ ] 강사 숙제 출제 페이지
- [ ] 학생 과제 표시
- [ ] 숙제 제출 기능
- [ ] 자동 채점 시스템

**3.2 AI 개인별 과제** (2주) 🤖
- [ ] 오답 데이터 수집 시스템
- [ ] 취약점 분석 알고리즘
- [ ] 유사 문제 생성 로직
- [ ] 개인별 과제 자동 생성
- [ ] 개선율 추적 시스템
- [ ] AI 과제 결과 분석 대시보드

### Phase 4: 순위 시스템 (1주)
- [ ] 순위 계산 로직
- [ ] 반별 순위 표시
- [ ] 과목별 순위 표시
- [ ] 실시간 업데이트

---

## 🎯 예상 개발 기간 (업데이트)

**총 6주**
- Phase 1: 1주
- Phase 2: 1주
- Phase 3: 3주 (AI 기능 추가로 1주 증가)
- Phase 4: 1주

---

**최종 평가**: ✅ **모든 기능 실현 가능, AI 취약점 분석은 혁신적인 기능!**

**다음 단계**: 목표 설정 시스템부터 순차적으로 개발

---

## 🏆 6. 순위 시스템

### 6.1 나의 학습방 순위 표시

#### UI 구조
```
┌─────────────────────────────────────────┐
│  나의 학습방 (김형진 학생)               │
│                                          │
│  🏆 나의 순위                            │
│  ┌─────────────────────────────────┐   │
│  │ 반 전체 순위: 3위 / 20명         │   │
│  │                                  │   │
│  │ 과목별 순위:                     │   │
│  │ • 단어장: 2위 (평균 92점)        │   │
│  │ • 문법: 5위 (평균 85점)          │   │
│  │ • Part 5: 1위 (평균 95점) 🥇    │   │
│  │ • Part 7: 4위 (평균 88점)        │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 6.2 순위 계산 로직

```typescript
interface StudentRanking {
  userId: string;
  studentName: string;
  classId: string;
  overallRank: number;       // 반 전체 순위
  overallScore: number;      // 평균 점수
  subjectRanks: {
    [subject: string]: {
      rank: number;
      avgScore: number;
    }
  };
  lastUpdated: Timestamp;
}

const calculateRankings = async (classId: string) => {
  // 1. 해당 반의 모든 학생 숙제 결과 가져오기
  const submissions = await getHomeworkSubmissions(classId);
  
  // 2. 학생별 평균 점수 계산
  const studentScores = {};
  for (const sub of submissions) {
    if (!studentScores[sub.studentId]) {
      studentScores[sub.studentId] = {
        total: 0,
        count: 0,
        subjects: {}
      };
    }
    
    studentScores[sub.studentId].total += sub.score;
    studentScores[sub.studentId].count += 1;
    
    // 과목별 점수
    const subject = sub.homeworkType;
    if (!studentScores[sub.studentId].subjects[subject]) {
      studentScores[sub.studentId].subjects[subject] = { total: 0, count: 0 };
    }
    studentScores[sub.studentId].subjects[subject].total += sub.score;
    studentScores[sub.studentId].subjects[subject].count += 1;
  }
  
  // 3. 전체 순위 계산
  const students = Object.entries(studentScores)
    .map(([userId, data]) => ({
      userId,
      avgScore: data.total / data.count
    }))
    .sort((a, b) => b.avgScore - a.avgScore);
  
  // 4. 과목별 순위 계산
  const rankings = students.map((student, index) => {
    const subjectRanks = {};
    
    for (const [subject, data] of Object.entries(studentScores[student.userId].subjects)) {
      const subjectAvg = data.total / data.count;
      
      // 해당 과목의 모든 학생 점수 가져오기
      const subjectScores = Object.entries(studentScores)
        .filter(([_, s]) => s.subjects[subject])
        .map(([userId, s]) => ({
          userId,
          avgScore: s.subjects[subject].total / s.subjects[subject].count
        }))
        .sort((a, b) => b.avgScore - a.avgScore);
      
      const rank = subjectScores.findIndex(s => s.userId === student.userId) + 1;
      
      subjectRanks[subject] = {
        rank,
        avgScore: subjectAvg
      };
    }
    
    return {
      userId: student.userId,
      overallRank: index + 1,
      overallScore: student.avgScore,
      subjectRanks
    };
  });
  
  // 5. Firestore에 저장
  for (const ranking of rankings) {
    await setDoc(doc(db, 'rankings', `${classId}_${ranking.userId}`), {
      ...ranking,
      classId,
      lastUpdated: serverTimestamp()
    });
  }
};
```

---

## 📊 7. 데이터베이스 스키마

### 7.1 Firestore 컬렉션 구조
```
studentGoals/
  ├── {userId}
  │   ├── totalTarget: number
  │   ├── rcTarget: number
  │   ├── lcTarget: number
  │   ├── rcCorrectNeeded: number
  │   ├── lcCorrectNeeded: number
  │   ├── partTargets: array
  │   └── updatedAt: Timestamp

studentProgress/
  ├── {userId}
  │   ├── currentScore: number
  │   ├── currentRC: number
  │   ├── currentLC: number
  │   ├── levelTestScore: number
  │   ├── partScores: object
  │   └── lastUpdated: Timestamp

homeworks/
  ├── {homeworkId}
  │   ├── classId: string
  │   ├── className: string
  │   ├── type: string
  │   ├── title: string
  │   ├── content: string
  │   ├── dueDate: Timestamp
  │   └── createdAt: Timestamp

homeworkSubmissions/
  ├── {submissionId}
  │   ├── homeworkId: string
  │   ├── studentId: string
  │   ├── score: number
  │   ├── correctCount: number
  │   ├── totalCount: number
  │   └── submittedAt: Timestamp

rankings/
  ├── {classId}_{userId}
  │   ├── userId: string
  │   ├── classId: string
  │   ├── overallRank: number
  │   ├── overallScore: number
  │   ├── subjectRanks: object
  │   └── lastUpdated: Timestamp
```

---

## ✅ 8. 구현 우선순위

### Phase 1: 목표 설정 시스템 (1주)
- [ ] 목표 점수 입력 UI
- [ ] RC/LC 자동 분배 로직
- [ ] 필요 정답 수 계산
- [ ] 파트별 목표 설정 UI
- [ ] 검증 로직

### Phase 2: 진도 관리 시스템 (1주)
- [ ] 현재 점수 계산 로직
- [ ] 목표 달성도 UI
- [ ] 파트별 진행률 표시
- [ ] 실시간 업데이트

### Phase 3: 숙제 관리 시스템 (2주)
- [ ] 강사 숙제 출제 페이지
- [ ] 학생 과제 표시 (나의 학습방)
- [ ] 숙제 제출 기능
- [ ] 자동 채점 시스템
- [ ] 결과 확인 페이지

### Phase 4: 순위 시스템 (1주)
- [ ] 순위 계산 로직
- [ ] 반별 순위 표시
- [ ] 과목별 순위 표시
- [ ] 실시간 업데이트

---

## 🎯 예상 개발 기간

**총 5주**
- Phase 1: 1주
- Phase 2: 1주
- Phase 3: 2주
- Phase 4: 1주

---

**최종 평가**: ✅ **모든 기능 실현 가능**

**다음 단계**: 목표 설정 시스템부터 순차적으로 개발
