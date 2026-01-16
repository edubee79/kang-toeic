import * as fs from "fs";
import * as path from "path";

const baseDir = "C:\\toeic-data\\ETS정기기출3탄";

console.log("📂 폴더 구조 생성 시작...\n");

// 기본 디렉토리 생성
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
}

// RC 10회분 폴더 생성
for (let i = 1; i <= 10; i++) {
    const testDir = path.join(baseDir, "RC", `${i}회`);

    // 문제지 폴더
    const questionDir = path.join(testDir, "문제");
    fs.mkdirSync(questionDir, { recursive: true });

    // 해설지 폴더
    const solutionDir = path.join(testDir, "해설");
    fs.mkdirSync(solutionDir, { recursive: true });

    // README 생성
    const readme = `# RC ${i}회 이미지 업로드 가이드

## 📂 폴더 구조
- 문제\\ : RC 문제지 이미지 (Part 5, 6, 7)
- 해설\\ : RC 해설지 이미지

## 📸 이미지 파일 명명 규칙

### 문제지 (문제 폴더)
\`\`\`
문제_001.jpg  (Part 5 시작)
문제_002.jpg
문제_003.jpg  (Part 6 시작)
문제_004.jpg
문제_005.jpg  (Part 7 시작)
...
문제_015.jpg  (Part 7 끝)
\`\`\`

### 해설지 (해설 폴더)
\`\`\`
해설_001.jpg  (Part 5 해설 시작)
해설_002.jpg
해설_003.jpg  (Part 6 해설)
해설_004.jpg
해설_005.jpg  (Part 7 해설 시작)
...
해설_015.jpg  (Part 7 해설 끝)
\`\`\`

## ✅ 준비 완료 후
이미지 파일을 모두 넣으신 후:
\`\`\`bash
npx tsx scripts/process-all-books.ts "C:\\toeic-data\\ETS정기기출3탄\\RC\\${i}회"
\`\`\`

## 📊 자동 생성될 파일
- extracted_data.json : 추출된 모든 데이터
- part5.json : Part 5 문제 (30문제)
- part6.json : Part 6 문제 (16문제)
- part7.json : Part 7 문제 (54문제)
`;

    fs.writeFileSync(path.join(testDir, "README.md"), readme, "utf-8");
    console.log(`✅ RC ${i}회 폴더 생성 완료`);
}

// LC 10회분 폴더 생성
for (let i = 1; i <= 10; i++) {
    const testDir = path.join(baseDir, "LC", `${i}회`);

    // 문제지 폴더
    const questionDir = path.join(testDir, "문제");
    fs.mkdirSync(questionDir, { recursive: true });

    // 해설지 폴더
    const solutionDir = path.join(testDir, "해설");
    fs.mkdirSync(solutionDir, { recursive: true });

    // 음원 폴더
    const audioDir = path.join(testDir, "음원");
    fs.mkdirSync(audioDir, { recursive: true });

    // README 생성
    const readme = `# LC ${i}회 이미지 업로드 가이드

## 📂 폴더 구조
- 문제\\ : LC 문제지 이미지 (Part 1, 2, 3, 4)
- 해설\\ : LC 해설지 이미지
- 음원\\ : LC 음원 파일 (MP3)

## 📸 이미지 파일 명명 규칙

### 문제지 (문제 폴더)
\`\`\`
문제_001.jpg  (Part 1 시작 - 사진 6장)
문제_002.jpg
문제_003.jpg  (Part 2 시작 - Directions)
문제_004.jpg  (Part 3 시작 - 대화문 + 문제)
문제_005.jpg
...
문제_015.jpg  (Part 4 끝)
\`\`\`

### 해설지 (해설 폴더)
\`\`\`
해설_001.jpg  (Part 1 해설)
해설_002.jpg  (Part 2 해설)
해설_003.jpg  (Part 3 해설)
...
해설_010.jpg  (Part 4 해설 끝)
\`\`\`

### 음원 (음원 폴더)
\`\`\`
LC_전체.mp3  (전체 음원 파일)
\`\`\`
또는 파트별 분리:
\`\`\`
Part1.mp3
Part2.mp3
Part3.mp3
Part4.mp3
\`\`\`

## ✅ 준비 완료 후
이미지 파일을 모두 넣으신 후:
\`\`\`bash
npx tsx scripts/process-all-books.ts "C:\\toeic-data\\ETS정기기출3탄\\LC\\${i}회"
\`\`\`

## 📊 자동 생성될 파일
- extracted_data.json : 추출된 모든 데이터
- part1.json : Part 1 문제 (6문제 + 사진)
- part2.json : Part 2 문제 (25문제)
- part3.json : Part 3 문제 (39문제)
- part4.json : Part 4 문제 (30문제)
`;

    fs.writeFileSync(path.join(testDir, "README.md"), readme, "utf-8");
    console.log(`✅ LC ${i}회 폴더 생성 완료`);
}

// 루트 README 생성
const rootReadme = `# ETS 정기기출 3탄 데이터 폴더

## 📂 폴더 구조
\`\`\`
ETS정기기출3탄\\
├── RC\\
│   ├── 1회\\
│   │   ├── 문제\\      ← RC 문제지 이미지 넣기
│   │   ├── 해설\\      ← RC 해설지 이미지 넣기
│   │   └── README.md
│   ├── 2회\\
│   ...
│   └── 10회\\
└── LC\\
    ├── 1회\\
    │   ├── 문제\\      ← LC 문제지 이미지 넣기
    │   ├── 해설\\      ← LC 해설지 이미지 넣기
    │   ├── 음원\\      ← LC 음원 파일 넣기
    │   └── README.md
    ├── 2회\\
    ...
    └── 10회\\
\`\`\`

## 🚀 사용 방법

### 1단계: 이미지 준비
1. PDF를 이미지로 변환 (JPG 또는 PNG)
2. 각 회차의 해당 폴더에 넣기
   - RC: 문제 폴더, 해설 폴더
   - LC: 문제 폴더, 해설 폴더, 음원 폴더

### 2단계: 자동 처리
\`\`\`bash
# 전체 처리 (RC + LC 10회분 모두)
npx tsx scripts/process-all-books.ts "C:\\toeic-data\\ETS정기기출3탄"

# 특정 회차만 처리
npx tsx scripts/process-all-books.ts "C:\\toeic-data\\ETS정기기출3탄\\RC\\1회"
\`\`\`

### 3단계: 결과 확인
각 회차 폴더에 자동 생성된 JSON 파일 확인

## 📊 예상 처리 시간
- RC 1회분: 약 5-10분
- LC 1회분: 약 10-15분
- 전체 10회분: 약 2-3시간 (자동)

## ⚠️ 주의사항
1. 이미지 파일은 **고해상도** 권장 (최소 1200px 이상)
2. 파일명은 **순서대로** 번호 매기기 (001, 002, ...)
3. 음원 파일은 **MP3 형식** 권장
4. 처리 중 에러 발생 시 로그 확인

## 📝 각 회차별 상세 가이드
각 회차 폴더의 README.md 참고
`;

fs.writeFileSync(path.join(baseDir, "README.md"), rootReadme, "utf-8");

console.log("\n✅ 폴더 구조 생성 완료!");
console.log(`\n📂 생성된 폴더: ${baseDir}`);
console.log("\n📋 다음 단계:");
console.log("   1. 각 회차 폴더에 이미지 파일 넣기");
console.log("   2. npx tsx scripts/process-all-books.ts 실행");
console.log("\n📖 자세한 가이드는 각 폴더의 README.md 참고");
