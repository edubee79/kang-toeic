# ETS 정기기출 3탄 데이터 폴더

## 📂 위치
`C:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\toeic-data\ETS정기기출3탄`

## 📂 폴더 구조
```
ETS정기기출3탄\
├── RC\
│   ├── 1회\
│   │   ├── 문제\      ← RC 문제지 이미지 넣기
│   │   └── 해설\      ← RC 해설지 이미지 넣기
│   ├── 2회\
│   ...
│   └── 10회\
└── LC\
    ├── 1회\
    │   ├── 문제\      ← LC 문제지 이미지 넣기
    │   ├── 해설\      ← LC 해설지 이미지 넣기
    │   └── 음원\      ← LC 음원 파일 넣기
    ├── 2회\
    ...
    └── 10회\
```

## 🚀 사용 방법

### 1단계: 이미지 준비
1. PDF를 이미지로 변환 (JPG 또는 PNG)
2. 각 회차의 해당 폴더에 넣기

### 2단계: 자동 처리
```bash
# RC 1회 처리
npx tsx scripts/process-test.ts RC 1

# LC 1회 처리
npx tsx scripts/process-test.ts LC 1

# 전체 처리
npx tsx scripts/process-all.ts
```

## 📊 예상 처리 시간
- RC 1회분: 약 5-10분
- LC 1회분: 약 10-15분
- 전체 10회분: 약 2-3시간 (자동)
