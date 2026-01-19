# TOEIC 데이터 폴더 구조 (회차별)

## 📁 폴더 구조

```
toeic-data/
├── ETS정기기출3탄/
│   ├── 1회/
│   │   ├── 문제/
│   │   │   ├── LC/
│   │   │   │   ├── part1_q01.jpg
│   │   │   │   ├── part3_q32.jpg
│   │   │   │   └── part4_q71.jpg
│   │   │   └── RC/
│   │   │       ├── part5_q101.jpg
│   │   │       ├── part6_q131.jpg
│   │   │       └── part7_q147.jpg
│   │   ├── 해설/
│   │   │   ├── LC해설_page1.jpg
│   │   │   ├── RC해설_page1.jpg
│   │   │   └── ...
│   │   └── 음원/
│   │       ├── Test_01-07.mp3
│   │       └── ...
│   ├── 2회/
│   │   ├── 문제/
│   │   ├── 해설/
│   │   └── 음원/
│   └── ... (10회까지)
│
└── ETS정기기출4탄/
    ├── 1회/
    │   ├── 문제/
    │   │   ├── LC/
    │   │   └── RC/
    │   ├── 해설/
    │   └── 음원/
    └── ... (10회까지)
```

## 📝 파일 네이밍 규칙

### LC (Listening Comprehension)

**문제 이미지:**
- Part 1: `part1_q01.jpg`, `part1_q02.jpg`, ... (Q1-6)
- Part 2: 이미지 없음
- Part 3: `part3_q32.jpg`, `part3_q33.jpg`, ... (Q32-70)
- Part 4: `part4_q71.jpg`, `part4_q72.jpg`, ... (Q71-100)

**음원:**
- 기존 파일명 그대로 사용
- `Test_01-07.mp3`, `Test_01-08.mp3`, ...

**해설:**
- `LC해설_page1.jpg`, `LC해설_page2.jpg`, ...
- 또는 자유롭게

### RC (Reading Comprehension)

**문제 이미지:**
- Part 5: `part5_q101.jpg`, `part5_q102.jpg`, ... (Q101-130)
- Part 6: `part6_q131.jpg`, `part6_q132.jpg`, ... (Q131-146)
- Part 7: `part7_q147.jpg`, `part7_q148.jpg`, ... (Q147-200)

**해설:**
- `RC해설_page1.jpg`, `RC해설_page2.jpg`, ...
- 또는 자유롭게

## 🎯 사용 방법

### 예시: 3탄 2회차 Part 6 추가하기

```
1. PDF → 이미지 변환
2. 저장 위치:
   toeic-data/ETS정기기출3탄/2회/문제/RC/
   
3. 파일명:
   - part6_q131.jpg (또는 page1.jpg)
   - part6_q132.jpg (또는 page2.jpg)
   - ...
```

### 예시: 4탄 1회차 음원 추가하기

```
1. 음원 파일 준비
2. 저장 위치:
   toeic-data/ETS정기기출4탄/1회/음원/
   
3. 파일명:
   - Test_01-07.mp3
   - Test_01-08.mp3
   - ...
```

## ✅ 장점

1. **자연스러움**: 원본 교재 구조와 동일
2. **간단함**: 파일을 파트별로 나눌 필요 없음
3. **해설 관리**: 회차별로 한 곳에 모음
4. **음원 관리**: 이미 회차별로 정리됨
5. **확장성**: 새 회차 추가 쉬움

## 📋 AI 작업 흐름

1. 사용자: 이미지를 `문제/LC/` 또는 `문제/RC/` 폴더에 저장
2. AI: 이미지 분석 후 TypeScript 데이터 생성
3. 결과: `src/data/toeic/reading/part6/tests.ts` 업데이트
