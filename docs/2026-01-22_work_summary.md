# 2026-01-22 작업 내역

## 목표
**"나의 목표 상세 현황" 통일 작업**
- Student Dashboard, Weakness Dashboard, Admin 학생 상세 페이지의 목표 현황 표시를 통일
- Weakness Dashboard의 상세 표시 방식을 기준으로 사용
- 목표 설정 기능 통합

---

## 완료된 작업

### 1. Weakness Dashboard 테스트 모드 활성화
**파일**: `src/app/weakness/dashboard/page.tsx`

- `TEST_MODE` 상수 추가하여 Firestore 없이 목업 데이터로 테스트 가능
- Part 2, Part 5 유형별 복습 과제 목업 생성
- 과제 URL 형식 수정: `/homework/partX/custom?assignmentId=test`

### 2. Part 2/5 커스텀 페이지 결과 저장 수정
**파일**: 
- `src/app/homework/part2/custom/page.tsx`
- `src/app/homework/part5/custom/page.tsx`

**변경 사항**:
- `type` 필드를 `'part2_custom'` → `'part2'`, `'part5_custom'` → `'part5'`로 변경
- `mode: 'type_review'` 필드 추가 (일반 테스트와 구분)
- `incorrectQuestions` 배열 추가 (약점 분석 호환성)

### 3. Admin 학생 상세 페이지 - 목표 상세 현황 통일
**파일**: `src/app/admin/results/[studentId]/page.tsx`

**추가된 기능**:
- `WeaknessService` import 및 `weaknessReport` state 추가
- `fetchStudentData`에서 `WeaknessService.analyzeUserWeakness()` 호출
- "목표 상세 현황 보기" 모달 내용을 Weakness Dashboard 스타일로 교체
  - 목표/평균/최근 점수 표시
  - LC/RC 파트별 상세 비교
  - Gap 표시 (목표 대비 부족/초과)

### 4. Admin 학생 상세 페이지 - 취약점 분석 통일
**파일**: `src/app/admin/results/[studentId]/page.tsx`

**변경 사항**:
- 기존 `getWeaknessAnalysis()` 기반 UI 제거
- Weakness Dashboard의 AI 정밀 분석 섹션으로 교체
  - AI 분석 메시지 표시
  - 3회 이상 반복된 취약 유형 태그
  - 오답 유형 비중 Bar Chart (recharts)
- `recharts` import 추가: `BarChart, Bar, XAxis, ResponsiveContainer, Cell`

### 5. Student Dashboard - 목표 수정 기능 통합
**파일**: `src/app/student/dashboard/page.tsx`

**추가된 State**:
```typescript
const [isEditingTarget, setIsEditingTarget] = useState(false);
const [editTotalScore, setEditTotalScore] = useState(850);
const [editTargetLC, setEditTargetLC] = useState(450);
const [editTargetRC, setEditTargetRC] = useState(400);
const [editPartTargets, setEditPartTargets] = useState({...});
```

**추가된 함수**:
- `handleEditTarget()` - 편집 모드 진입
- `handleSaveTarget()` - Firestore 저장
- `handleAutoAllocate()` - AI 자동 배분 로직

**UI 변경**:
- "나의 목표 상세 현황" 카드에 편집 모드 통합
- "목표 수정하기" 버튼 클릭 시 같은 카드 내에서 편집 UI 표시
- 편집 모드: 총점/LC/RC 입력, AI 자동 배분 버튼, 파트별 목표 입력
- "나의 목표 달성도" 카드는 Weakness Dashboard 버전으로 교체 (진행률 바 포함)

---

## 데이터 소스 통일

모든 페이지가 이제 **동일한 데이터 소스** 사용:

```typescript
const weaknessReport = await WeaknessService.analyzeUserWeakness(userId);
```

**weaknessReport 구조**:
```typescript
{
  targetScore: number,
  targetLCScore: number,
  targetRCScore: number,
  targetStats: {
    [part]: {
      target: number,    // 목표 점수
      average: number,   // 평균 점수
      latest: number,    // 최근 점수
      gap: number        // latest - target
    }
  },
  analysisMessage: string,
  weakestTags: Array<{tag, label, incorrect}>
}
```

---

## 현재 상태

### ✅ 완료
1. Weakness Dashboard - 테스트 모드 및 목표 현황 표시
2. Part 2/5 커스텀 페이지 - 결과 저장 형식 수정
3. Admin 페이지 - 목표 상세 현황 통일
4. Admin 페이지 - 취약점 분석 통일
5. Student Dashboard - 목표 수정 기능 통합

### ⏸️ 보류
1. Part 1-7 일반 테스트 페이지 전수조사
   - `type` 필드 및 `incorrectQuestions` 배열 누락 확인 필요
   - 약점 분석 호환성 확보 필요

---

## 주요 이슈 및 해결

### 이슈 1: "목표 수정하기" 버튼 작동 안 함
**원인**: `TargetSettingSection` 컴포넌트가 페이지에 없어서 스크롤 대상 없음
**해결**: 편집 기능을 "나의 목표 상세 현황" 카드 내부에 통합

### 이슈 2: "나의 목표 상세 현황" 중복
**원인**: Weakness Dashboard 스타일 카드와 `TargetSettingSection` 컴포넌트가 별도 존재
**해결**: 두 기능을 하나의 카드로 통합 (조건부 렌더링)

### 이슈 3: "나의 목표 달성도" 카드 복원
**원인**: 중복으로 오인하여 제거
**해결**: Weakness Dashboard의 상세 버전으로 복원 (진행률 바 포함)

---

## 파일 변경 목록

### 수정된 파일
1. `src/app/weakness/dashboard/page.tsx`
2. `src/app/homework/part2/custom/page.tsx`
3. `src/app/homework/part5/custom/page.tsx`
4. `src/app/admin/results/[studentId]/page.tsx`
5. `src/app/student/dashboard/page.tsx`

---

**작성일**: 2026-01-22
