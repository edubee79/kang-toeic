# Firestore Schema Design - Vocabulary System

## Collections Structure

### 1. vocabularies
**Purpose**: 전체 단어 데이터베이스 (4,800개 단어)

**Document ID Format**: `day{day}_part{part}_no{no}`
- Example: `day1_part1_no1`, `day30_part4_no168`

**Fields**:
```typescript
interface VocabularyWord {
  id: string;                    // Document ID와 동일
  word: string;                  // 영단어 (예: "accomplish")
  meaning: string;               // 한글 뜻 (예: "성취하다, 완수하다")
  example: string;               // 영어 예문
  exampleKo: string;             // 한글 예문
  targetScore: 650 | 800 | 900;  // 목표 점수
  difficulty: 'basic' | 'intermediate' | 'advanced';  // 난이도
  day: number;                   // Day (1-30)
  part: number;                  // Part (1-4)
  no: number;                    // 번호 (1-168)
  pronunciation?: string;        // 발음 (추후 추가)
  createdAt: Timestamp;
}
```

**Index**:
- `targetScore` (for filtering by score)
- `day` + `part` (composite, for day/part queries)

---

### 2. users
**Purpose**: 사용자 기본 정보

**Document ID**: Firebase Auth UID

**Fields**:
```typescript
interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'student' | 'instructor' | 'admin';
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
}
```

---

### 3. userVocabulary
**Purpose**: 학생별 어휘 학습 프로필

**Document ID**: `{userId}`

**Fields**:
```typescript
interface UserVocabularyProfile {
  userId: string;
  targetScore: 650 | 800 | 900;     // 목표 점수
  assignedWords: string[];          // 할당된 단어 ID 목록
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

**Subcollection**: `srsCards/{wordId}`
```typescript
interface SRSCard {
  wordId: string;
  easeFactor: number;               // 난이도 계수 (기본 2.5)
  interval: number;                 // 다음 복습까지 일수
  repetitions: number;              // 연속 정답 횟수
  nextReview: Timestamp;            // 다음 복습 날짜
  lastReviewed: Timestamp;          // 마지막 복습 날짜
  status: 'new' | 'learning' | 'review' | 'mastered';
}
```

---

### 4. wordStatus
**Purpose**: 학생별 단어 학습 상태 (빠른 조회용)

**Document ID**: `{userId}_{wordId}`

**Fields**:
```typescript
interface WordStatus {
  userId: string;
  wordId: string;
  status: 'known' | 'learning' | 'mastered';
  lastReviewed: Timestamp;
  reviewCount: number;
  correctCount: number;             // 정답 횟수
  incorrectCount: number;           // 오답 횟수
}
```

**Index**:
- `userId` + `status` (composite)

---

### 5. learningSessions
**Purpose**: 학습 세션 기록 (차수별 학습)

**Document ID**: Auto-generated

**Fields**:
```typescript
interface LearningSession {
  sessionId: string;
  userId: string;
  sessionNumber: number;            // 차수 (1, 2, 3, ...)
  date: Timestamp;
  newWords: string[];               // 오늘 배운 단어 ID
  reviewWords: string[];            // 복습 단어 ID (이전 차수 오답)
  testResults: TestResult[];
  passRate: number;                 // 합격률 (0.0 - 1.0)
  passed: boolean;                  // 합격 여부
  completedAt?: Timestamp;
}

interface TestResult {
  wordId: string;
  correct: boolean;
  timeSpent: number;                // 소요 시간 (초)
  selectedAnswer?: number;          // 선택한 답 (0-3)
}
```

**Index**:
- `userId` + `date` (composite)
- `userId` + `sessionNumber` (composite)

---

### 6. quizQuestions (Optional)
**Purpose**: 생성된 퀴즈 문제 캐싱 (성능 최적화)

**Document ID**: `{wordId}`

**Fields**:
```typescript
interface QuizQuestion {
  wordId: string;
  question: string;                 // 단어
  options: string[];                // 4개 선택지 (뜻)
  correctAnswer: number;            // 정답 인덱스 (0-3)
  difficulty: string;
  generatedAt: Timestamp;
}
```

---

## Security Rules (초안)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // vocabularies: 모두 읽기 가능, 관리자만 쓰기
    match /vocabularies/{wordId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // userVocabulary: 본인 것만 읽기/쓰기
    match /userVocabulary/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /srsCards/{wordId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    // wordStatus: 본인 것만 읽기/쓰기
    match /wordStatus/{statusId} {
      allow read, write: if request.auth != null && 
                            statusId.matches('^' + request.auth.uid + '_.*');
    }
    
    // learningSessions: 본인 것만 읽기/쓰기, 강사는 모두 읽기
    match /learningSessions/{sessionId} {
      allow read: if request.auth != null && (
        resource.data.userId == request.auth.uid ||
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['instructor', 'admin']
      );
      allow write: if request.auth != null && resource.data.userId == request.auth.uid;
    }
  }
}
```

---

## Migration Strategy

### Phase 1: Vocabularies Collection
1. `resources/day*.json` 파일 읽기
2. Batch write (500개씩)
3. Document ID: `day{day}_part{part}_no{no}`

### Phase 2: Initial User Setup
1. 테스트 사용자 생성
2. `userVocabulary` 문서 생성
3. 목표 점수에 따라 `assignedWords` 할당

### Phase 3: Validation
1. 총 단어 수 확인 (4,800개)
2. targetScore 분포 확인
3. 샘플 쿼리 테스트

---

**Next Steps**:
1. Firebase 프로젝트에 이 스키마 적용
2. Security Rules 배포
3. Migration script 작성
