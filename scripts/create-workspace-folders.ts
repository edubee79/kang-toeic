import * as fs from "fs";
import * as path from "path";

const baseDir = path.join(process.cwd(), "toeic-data", "ETS정기기출3탄");

console.log("📂 워크스페이스 내 폴더 구조 생성 시작...\n");

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

    console.log(`✅ LC ${i}회 폴더 생성 완료`);
}

// 루트 README 생성
const rootReadme = `# ETS 정기기출 3탄 데이터 폴더

## 📂 위치
\`${baseDir}\`

## 📂 폴더 구조
\`\`\`
ETS정기기출3탄\\
├── RC\\
│   ├── 1회\\
│   │   ├── 문제\\      ← RC 문제지 이미지 넣기
│   │   └── 해설\\      ← RC 해설지 이미지 넣기
│   ├── 2회\\
│   ...
│   └── 10회\\
└── LC\\
    ├── 1회\\
    │   ├── 문제\\      ← LC 문제지 이미지 넣기
    │   ├── 해설\\      ← LC 해설지 이미지 넣기
    │   └── 음원\\      ← LC 음원 파일 넣기
    ├── 2회\\
    ...
    └── 10회\\
\`\`\`

## 🚀 사용 방법

### 1단계: 이미지 준비
1. PDF를 이미지로 변환 (JPG 또는 PNG)
2. 각 회차의 해당 폴더에 넣기

### 2단계: 자동 처리
\`\`\`bash
# RC 1회 처리
npx tsx scripts/process-test.ts RC 1

# LC 1회 처리
npx tsx scripts/process-test.ts LC 1

# 전체 처리
npx tsx scripts/process-all.ts
\`\`\`

## 📊 예상 처리 시간
- RC 1회분: 약 5-10분
- LC 1회분: 약 10-15분
- 전체 10회분: 약 2-3시간 (자동)
`;

fs.writeFileSync(path.join(baseDir, "README.md"), rootReadme, "utf-8");

console.log("\n✅ 폴더 구조 생성 완료!");
console.log(`\n📂 생성된 폴더: ${baseDir}`);
console.log("\n📋 다음 단계:");
console.log("   1. 각 회차 폴더에 이미지 파일 넣기");
console.log("   2. npx tsx scripts/process-test.ts RC 1 실행");
