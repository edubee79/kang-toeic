# AI 취약점 분석 시스템 재설계 계획서

**작성일**: 2026-01-21  
**목적**: 기존 오답 중심 분석 → 목표 대비 성취도 갭 분석으로 전환  
**상태**: 📝 계획 단계 (다듬는 중)

---

## 📋 목차

1. [현재 시스템의 문제점](#1-현재-시스템의-문제점)
2. [새로운 기준점 정의](#2-새로운-기준점-정의)
3. [데이터 구조 설계](#3-데이터-구조-설계)
4. [분석 로직 설계](#4-분석-로직-설계)
5. [UI/UX 설계](#5-uiux-설계)
6. [보충 과제 생성 로직](#6-보충-과제-생성-로직)
7. [구현 계획](#7-구현-계획)

---

## 1. 현재 시스템의 문제점

### ❌ 기존 방식의 한계

```
현재 로직:
Manager_Results → incorrectQuestions 수집 → classification 집계 → 3회 이상 틀린 유형 = 취약점
```

**문제점**:
1. **오답만 집계** → 계속 약점만 강조
2. **목표 대비 성취도 무시** → 잘하는 파트도 틀리면 취약점으로 표시
3. **전체 목표 성적과의 연계 부족** → 학생이 설정한 목표와 무관하게 분석
4. **개선 방향 불명확** → "이 유형을 많이 틀렸다"만 알려줌

### 예시 시나리오

```
학생 A의 상황:
- 목표: Part 5 20개 정답
- 현재 평균: 18개 정답 (90% 달성)
- Part 5에서 2개 틀림 (동사형태 1개, 전치사 1개)

vs

- 목표: Part 7 Single 25개 정답  
- 현재 평균: 10개 정답 (40% 달성)
- Part 7에서 15개 틀림

기존 시스템: Part 5 동사형태를 취약점으로 표시 (3회 이상 틀림)
→ 실제로는 Part 7이 목표 대비 훨씬 더 심각한 상황!
```

---

## 2. 새로운 기준점 정의

### ✅ 목표 대비 갭 분석 (Goal-Gap Analysis)

**핵심 기준점**: **나의 학습방 > 나의 목표 상세 현황**

```
시스템 플로우:

1. 학생이 목표 수정하기 클릭
   ↓
2. 원하는 총점 입력 (예: 800점)
   ↓
3. AI 추천 또는 수동 설정으로 RC/LC 목표 배분
   ↓
4. 각 파트별 목표 정답 수 설정
   ↓
5. 실전 문제 회차 완료 시마다 자동 업데이트
   ↓
6. 목표 상세 현황 테이블 실시간 갱신
   - 왼쪽: 목표 정답 수
   - 중간: 평균 점수 (완료한 실전 회차 기준)
   - 오른쪽: 최근 점수 (마지막 완료 회차)
   ↓
7. 가장 부족한 파트 자동 추천
```

### 핵심 개념

| 항목 | 설명 | 데이터 소스 | 예시 |
|------|------|------------|------|
| **목표 (Target)** | 학생이 설정한 파트별 정답 목표 | `users.partTargets` | Part 5: 20개 |
| **평균 (Average)** | 완료한 실전 회차의 평균 정답 수 | `Manager_Results` (실전 회차만) | Part 5: 10개 |
| **최근 (Latest)** | 마지막 완료 회차의 정답 수 | `Manager_Results` (최신 1건) | Part 5: 12개 |
| **갭 (Gap)** | 목표 - 평균 | 계산값 | -10개 |
| **달성률 (Achievement)** | (평균 / 목표) × 100 | 계산값 | 50% |
| **취약 파트 (Weakest Part)** | 갭이 가장 큰 파트 | 분석 결과 | Part 5 (-10개, 50%) |

### 중요: 실전 회차 vs 기타 학습

- **실전 회차**: 파트별 1~10회차 완료 기준 → **목표 상세 현황 업데이트**
- **기타 학습**: 단어장, 문법 미션, 드릴 모드 → 목표 상세 현황에 반영 안 함
- **보충 과제 판정**: 일주일간 모든 학습 데이터 (실전 + 기타) 집계

---

## 3. 데이터 구조 설계

### 3.1 사용자 목표 데이터 (Firestore: `users` 컬렉션)

```typescript
interface UserGoals {
  userId: string;
  
  // 전체 목표
  targetScore: number;      // 총 목표 점수 (예: 800점)
  targetLC: number;         // LC 목표 (예: 450점)
  targetRC: number;         // RC 목표 (예: 350점)
  
  // 레벨 테스트 기준 점수
  levelTestScore: number;   // 레벨 테스트 총점
  levelTestLC: number;      // 레벨 테스트 LC 점수
  levelTestRC: number;      // 레벨 테스트 RC 점수
  levelTestDate: Timestamp; // 레벨 테스트 일자
  
  // 파트별 목표 (정답 개수 기준)
  partTargets: {
    p1: number;             // Part 1 목표 (예: 5개)
    p2: number;             // Part 2 목표 (예: 20개)
    p3: number;             // Part 3 목표 (예: 30개)
    p4: number;             // Part 4 목표 (예: 25개)
    p5: number;             // Part 5 목표 (예: 20개)
    p6: number;             // Part 6 목표 (예: 12개)
    p7_single: number;      // Part 7 Single 목표 (예: 25개)
    p7_double: number;      // Part 7 Double 목표 (예: 18개)
  };
  
  updatedAt: Timestamp;
}
```

### 3.2 파트별 성취도 데이터

```typescript
interface PartGoal {
  part: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7_single' | 'p7_double';
  
  targetScore: number;      // 목표 정답 수 (예: Part 5 → 20개)
  averageScore: number;     // 평균 점수 (완료한 실전 회차만)
  latestScore: number;      // 마지막 실전 회차 결과
  
  gap: number;              // 목표 대비 부족분 (targetScore - averageScore)
  gapPercentage: number;    // 목표 대비 달성률 (averageScore / targetScore * 100)
  
  completedTests: number;   // 완료한 실전 회차 수 (1~10회)
  testScores: number[];     // 각 회차별 점수 배열
}
```

### 3.3 취약점 분석 결과

```typescript
interface WeaknessAnalysisResult {
  userId: string;
  
  // 전체 목표 정보
  targetTotalScore: number;
  targetLC: number;
  targetRC: number;
  
  // 파트별 상세 현황
  partGoals: PartGoal[];
  
  // LC/RC 성취도
  lcAchievement: number;     // LC 전체 달성률 (%)
  rcAchievement: number;     // RC 전체 달성률 (%)
  
  // 가장 취약한 파트 (목표 대비 갭이 가장 큰 파트) - 실전 회차 기준
  weakestPart: {
    part: string;
    gap: number;                    // 목표 대비 부족분
    gapPercentage: number;          // 달성률
    reason: string;                 // 추천 이유 메시지
  };
  
  // 보충 과제 데이터 (금요일 일괄 생성용) - 전체 학습 데이터 기준
  supplementaryHomework: {
    scheduledDate: Date;            // 다음 금요일
    weeklyIncorrect: {              // 일주일간 틀린 문제 (모든 학습)
      part: string;
      classification: string;
      count: number;
    }[];
    recommendedTypes: {             // 3회 이상 틀린 유형
      classification: string;
      count: number;
      label: string;
    }[];
  };
  
  // 데이터 수집 기간
  actualTestDataPeriod: {         // 실전 회차 데이터 (전체 기간)
    start: Date;
    end: Date;
  };
  
  weeklyDataPeriod: {             // 보충 과제용 일주일 데이터
    start: Date;                  // 지난 금요일
    end: Date;                    // 이번 금요일
  };
  
  analyzedAt: Timestamp;
}
```

---

## 4. 분석 로직 설계

### 4.1 전체 플로우

```
1. 사용자 목표 가져오기 (users 컬렉션)
   ↓
2. 최근 1주일 학습 데이터 수집 (Manager_Results)
   ↓
3. 파트별 평균/최근 점수 계산
   ↓
4. 목표 대비 갭 계산 (각 파트)
   ↓
5. 가장 갭이 큰 파트 선정 (취약 파트)
   ↓
6. 취약 파트의 틀린 문제 수집 및 classification 분석
   ↓
7. LC/RC 전체 성취도 계산
   ↓
8. 결과 반환 (WeaknessAnalysisResult)
```

### 4.2 핵심 함수 설계

#### A. 메인 분석 함수

```typescript
const analyzeWeaknessWithGoalGap = async (
  userId: string
): Promise<WeaknessAnalysisResult> => {
  // 1. 사용자 목표 가져오기
  const userGoals = await getUserGoals(userId);
  
  // 2. 최근 1주일 데이터 수집
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const weeklyResults = await getWeeklyResults(userId, oneWeekAgo);
  
  // 3. 파트별 통계 계산
  const partStats = calculatePartStats(weeklyResults);
  
  // 4. 목표 대비 갭 계산
  const partGoals = calculatePartGoals(userGoals.partTargets, partStats);
  
  // 5. 가장 취약한 파트 찾기
  const weakestPart = findWeakestPart(partGoals, weeklyResults);
  
  // 6. LC/RC 성취도 계산
  const { lcAchievement, rcAchievement } = calculateSectionAchievement(partGoals);
  
  return {
    userId,
    targetTotalScore: userGoals.targetScore,
    targetLC: userGoals.targetLC,
    targetRC: userGoals.targetRC,
    partGoals,
    lcAchievement,
    rcAchievement,
    weakestPart,
    weeklyDataPeriod: {
      start: oneWeekAgo,
      end: new Date()
    },
    analyzedAt: new Date()
  };
};
```

#### B. 파트별 통계 계산

```typescript
const calculatePartStats = (results: any[]): Record<string, PartStat> => {
  const stats: Record<string, { scores: number[], latest: number, attempts: number }> = {};
  
  results.forEach((result, index) => {
    const partKey = mapToPartKey(result); // p1, p2, ... p7_double
    
    if (!stats[partKey]) {
      stats[partKey] = { scores: [], latest: 0, attempts: 0 };
    }
    
    const correctCount = calculateCorrectCount(result);
    stats[partKey].scores.push(correctCount);
    stats[partKey].attempts += 1;
    
    // 첫 번째 결과가 최신 (orderBy timestamp desc)
    if (index === 0 || stats[partKey].latest === 0) {
      stats[partKey].latest = correctCount;
    }
  });
  
  return stats;
};
```

#### C. 목표 대비 갭 계산

```typescript
const calculatePartGoals = (
  targets: Record<string, number>,
  stats: Record<string, PartStat>
): PartGoal[] => {
  const partGoals: PartGoal[] = [];
  
  for (const [partKey, target] of Object.entries(targets)) {
    const stat = stats[partKey] || { scores: [], latest: 0, attempts: 0 };
    
    const average = stat.scores.length > 0
      ? stat.scores.reduce((a, b) => a + b, 0) / stat.scores.length
      : 0;
    
    const gap = target - average;
    const gapPercentage = target > 0 ? (average / target) * 100 : 0;
    
    partGoals.push({
      part: partKey as any,
      targetScore: target,
      averageScore: Math.round(average * 10) / 10, // 소수점 1자리
      latestScore: stat.latest,
      gap: Math.round(gap * 10) / 10,
      gapPercentage: Math.round(gapPercentage),
      totalAttempts: stat.attempts
    });
  }
  
  return partGoals;
};
```

#### D. 가장 취약한 파트 찾기

```typescript
const findWeakestPart = (
  partGoals: PartGoal[],
  weeklyResults: any[]
): WeaknessAnalysisResult['weakestPart'] => {
  // 갭이 가장 큰 파트 찾기
  const sorted = [...partGoals].sort((a, b) => b.gap - a.gap);
  const weakest = sorted[0];
  
  if (!weakest || weakest.gap <= 0) {
    return {
      part: 'none',
      gap: 0,
      gapPercentage: 100,
      incorrectQuestions: [],
      topWeakClassifications: []
    };
  }
  
  // 해당 파트의 틀린 문제 수집
  const incorrectQuestions = weeklyResults
    .filter(r => mapToPartKey(r) === weakest.part)
    .flatMap(r => r.incorrectQuestions || [])
    .map(q => ({
      questionId: q.id || q.questionId,
      classification: q.classification || 'Unknown',
      timestamp: r.timestamp
    }));
  
  // classification 집계
  const classificationCounts: Record<string, number> = {};
  incorrectQuestions.forEach(q => {
    const cls = q.classification;
    if (cls !== 'Unknown') {
      classificationCounts[cls] = (classificationCounts[cls] || 0) + 1;
    }
  });
  
  // Top 3 취약 유형
  const topWeakClassifications = Object.entries(classificationCounts)
    .map(([cls, count]) => ({
      classification: cls,
      count,
      label: getClassificationLabel(cls)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
  
  return {
    part: weakest.part,
    gap: weakest.gap,
    gapPercentage: weakest.gapPercentage,
    incorrectQuestions,
    topWeakClassifications
  };
};
```

#### E. LC/RC 성취도 계산

```typescript
const calculateSectionAchievement = (partGoals: PartGoal[]) => {
  const lcParts = ['p1', 'p2', 'p3', 'p4'];
  const rcParts = ['p5', 'p6', 'p7_single', 'p7_double'];
  
  const calcAchievement = (parts: string[]) => {
    const filtered = partGoals.filter(p => parts.includes(p.part));
    const totalTarget = filtered.reduce((sum, p) => sum + p.targetScore, 0);
    const totalAverage = filtered.reduce((sum, p) => sum + p.averageScore, 0);
    return totalTarget > 0 ? Math.round((totalAverage / totalTarget) * 100) : 0;
  };
  
  return {
    lcAchievement: calcAchievement(lcParts),
    rcAchievement: calcAchievement(rcParts)
  };
};
```

---

## 5. UI/UX 설계

### 5.1 나의 목표 상세 현황 (메인 대시보드)

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 나의 목표 상세 현황                                          │
│                                                                  │
│  🎯 전체 목표: 800점 (LC 450 / RC 350)                          │
│  📅 분석 기간: 2026-01-14 ~ 2026-01-21 (최근 1주일)            │
│                                                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│  💙 LC 성취도: 85% ████████████████████░░░░                     │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Part │ 목표 │ 평균 │ 최근 │ 갭   │ 달성률 │ 시도 횟수 │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │ P1   │  5   │  5.0 │  6   │  0.0 │ 100% ✅│    8회    │    │
│  │ P2   │ 20   │ 18.0 │ 19   │ -2.0 │  90% ⚠️│   10회    │    │
│  │ P3   │ 30   │ 27.0 │ 28   │ -3.0 │  90% ⚠️│    7회    │    │
│  │ P4   │ 25   │ 22.0 │ 23   │ -3.0 │  88% ⚠️│    6회    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  💜 RC 성취도: 65% █████████████░░░░░░░░                        │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Part │ 목표 │ 평균 │ 최근 │ 갭   │ 달성률 │ 시도 횟수 │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │ P5   │ 20   │ 10.0 │ 12   │-10.0 │  50% 🔴│   12회    │ ← 가장 취약!
│  │ P6   │ 12   │  9.0 │ 10   │ -3.0 │  75% ⚠️│    5회    │    │
│  │ P7 S │ 25   │ 20.0 │ 21   │ -5.0 │  80% ⚠️│    8회    │    │
│  │ P7 D │ 18   │ 14.0 │ 15   │ -4.0 │  78% ⚠️│    4회    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│  🚨 AI 분석 결과                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 가장 취약한 파트: Part 5                                │    │
│  │ • 목표 대비: -10개 부족 (달성률 50%)                    │    │
│  │ • 1주일간 틀린 문제: 15개                               │    │
│  │                                                          │    │
│  │ 주요 취약 유형:                                          │    │
│  │ 1. 동사 형태 (v2) - 6회 오답                            │    │
│  │ 2. 품사 자리 (n1) - 4회 오답                            │    │
│  │ 3. 전치사 (pr) - 3회 오답                               │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [📝 Part 5 집중 보강 과제 생성하기] 🤖                        │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 색상 코드 및 아이콘

| 달성률 | 색상 | 아이콘 | 의미 |
|--------|------|--------|------|
| 90% 이상 | 초록색 (Green) | ✅ | 목표 달성 |
| 70% ~ 89% | 주황색 (Orange) | ⚠️ | 주의 필요 |
| 70% 미만 | 빨간색 (Red) | 🔴 | 집중 보강 필요 |

---

## 6. 보충 과제 생성 로직

### 6.1 과제 생성 플로우

```
1. 가장 취약한 파트 확인 (weakestPart)
   ↓
2. 해당 파트의 틀린 문제 classification 집계
   ↓
3. 가장 많이 틀린 유형 Top 3 선정
   ↓
4. 각 유형별로 문제 은행에서 문제 선택
   ↓
5. 총 10~20문제로 과제 구성
   ↓
6. Firestore에 과제 저장 (type: 'weakness_review')
```

### 6.2 함수 설계

```typescript
const generateSupplementaryHomework = async (
  userId: string,
  analysis: WeaknessAnalysisResult
) => {
  const weakPart = analysis.weakestPart;
  
  if (weakPart.part === 'none' || weakPart.gap <= 0) {
    throw new Error('취약한 파트가 없습니다. 모든 목표를 달성했습니다!');
  }
  
  // 1. 문제 수 결정 (갭의 50%, 최소 10개, 최대 20개)
  const questionCount = Math.min(20, Math.max(10, Math.ceil(weakPart.gap * 0.5)));
  
  // 2. 유형별 문제 배분
  const distribution = distributeQuestionsByClassification(
    weakPart.topWeakClassifications,
    questionCount
  );
  
  // 3. 문제 은행에서 선택
  const selectedQuestions = [];
  for (const [classification, count] of Object.entries(distribution)) {
    const questions = await getQuestionsByClassification(weakPart.part, classification);
    
    // 이미 푼 문제 제외
    const solvedIds = new Set(
      analysis.weeklyDataPeriod.start 
        ? await getSolvedQuestionIds(userId, weakPart.part)
        : []
    );
    
    const available = questions.filter(q => !solvedIds.has(q.id));
    const selected = shuffleArray(available).slice(0, count);
    selectedQuestions.push(...selected);
  }
  
  // 4. 과제 생성
  const homework = {
    studentId: userId,
    type: 'weakness_review',
    title: `${weakPart.part.toUpperCase()} 집중 보강 (목표 대비 -${weakPart.gap}개)`,
    description: `최근 1주일 분석 결과, ${weakPart.part.toUpperCase()}에서 목표 대비 ${weakPart.gap}개 부족합니다. 주요 취약 유형을 집중 훈련하세요.`,
    targetPart: weakPart.part,
    questions: selectedQuestions,
    dueDate: addDays(new Date(), 7),
    createdAt: new Date(),
    metadata: {
      analysisId: analysis.analyzedAt,
      gap: weakPart.gap,
      gapPercentage: weakPart.gapPercentage,
      topWeakClassifications: weakPart.topWeakClassifications
    }
  };
  
  await createHomework(homework);
  
  return homework;
};

const distributeQuestionsByClassification = (
  topClassifications: { classification: string; count: number }[],
  totalQuestions: number
): Record<string, number> => {
  const distribution: Record<string, number> = {};
  const totalWrong = topClassifications.reduce((sum, c) => sum + c.count, 0);
  
  topClassifications.forEach(cls => {
    const ratio = cls.count / totalWrong;
    distribution[cls.classification] = Math.max(1, Math.round(totalQuestions * ratio));
  });
  
  return distribution;
};
```

---

## 7. 구현 계획

### Phase 1: 데이터 수집 및 분석 로직 (1주)

- [ ] `getUserGoals` 함수 구현 (Firestore users 컬렉션)
- [ ] `getWeeklyResults` 함수 구현 (1주일 데이터 필터링)
- [ ] `calculatePartStats` 함수 구현
- [ ] `calculatePartGoals` 함수 구현
- [ ] `findWeakestPart` 함수 구현
- [ ] `calculateSectionAchievement` 함수 구현
- [ ] `analyzeWeaknessWithGoalGap` 메인 함수 통합
- [ ] 단위 테스트 작성

### Phase 2: UI 구현 (1주)

- [ ] 나의 목표 상세 현황 테이블 컴포넌트
- [ ] LC/RC 성취도 프로그레스 바
- [ ] 파트별 달성률 색상 코드 적용
- [ ] 가장 취약한 파트 하이라이트
- [ ] AI 분석 결과 카드
- [ ] 반응형 디자인 적용

### Phase 3: 보충 과제 생성 (1주)

- [ ] `generateSupplementaryHomework` 함수 구현
- [ ] `getQuestionsByClassification` 함수 구현
- [ ] `distributeQuestionsByClassification` 함수 구현
- [ ] 과제 생성 UI (버튼 및 모달)
- [ ] 과제 생성 후 알림 기능

### Phase 4: 기존 시스템 통합 및 마이그레이션 (1주)

- [ ] 기존 `weaknessService.ts` 대체
- [ ] 기존 `/weakness/dashboard` 페이지 업데이트
- [ ] 관리자 페이지 연동
- [ ] 데이터 마이그레이션 (필요 시)
- [ ] 전체 테스트 및 버그 수정

---

## 📝 다듬어야 할 부분 (TODO)

### 1. 데이터 수집 기간
- [ ] 1주일이 적절한가? (2주일, 1개월 옵션 고려)
- [ ] 데이터가 부족한 신규 학생 처리 방법

### 2. 목표 설정 방식
- [ ] 학생이 직접 설정? 강사가 설정?
- [ ] 목표 수정 주기 및 권한

### 3. 갭 계산 방식
- [ ] 평균 vs 최근 점수 중 어느 것을 기준으로?
- [ ] 시도 횟수가 적은 파트 처리 (가중치 적용?)

### 4. 보충 과제 난이도
- [ ] 틀린 문제와 동일한 난이도? 더 쉬운 문제?
- [ ] 문제 은행 부족 시 대응 방안

### 5. UI/UX 개선
- [ ] 모바일 최적화
- [ ] 그래프/차트 추가 (시계열 변화 추이)
- [ ] 학습 동기 부여 요소 (배지, 격려 메시지)

### 6. 성능 최적화
- [ ] 대량 데이터 처리 시 쿼리 최적화
- [ ] 캐싱 전략

---

## 📌 참고 사항

- 기존 `pattern_classification.md`의 분류 체계는 그대로 사용
- `Manager_Results` 컬렉션 구조는 변경하지 않음
- 기존 오답 분석 기능은 보조 지표로 활용 가능

---

**다음 단계**: 위 TODO 항목들을 검토하고 구체화한 후 Phase 1 구현 시작
