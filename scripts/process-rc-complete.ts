import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

interface Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
}

interface Part6Set {
    setId: string;
    passage: string;
    questions: Question[];
}

interface Part7Set {
    setId: string;
    passages: string[];  // Can be 1 or 2 passages
    questions: Question[];
}

interface Solution {
    id: string;
    answer: string;
    type: string;
    explanation: string;
    translation: string;
    vocabulary: string;
}

interface MergedData {
    [key: string]: {
        id: string;
        question: string;
        options: { label: string; text: string }[];
        passage?: string;      // For Part 6
        passages?: string[];   // For Part 7
        setId?: string;
        answer?: string;
        type?: string;
        explanation?: string;
        translation?: string;
        vocabulary?: string;
    };
}

function fileToGenerativePart(imagePath: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
            mimeType,
        },
    };
}

async function processQuestionImage(imagePath: string): Promise<any> {
    console.log(`📸 문제지 처리 중: ${path.basename(imagePath)}`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
이 TOEIC RC 문제지 이미지를 분석해서 JSON으로 추출해줘.

출력 형식:

IF PART 5:
{
  "part": "5",
  "questions": [
    {
      "id": "q101",
      "text": "문제 텍스트 (------ 빈칸 포함)",
      "options": [
        { "label": "A", "text": "..." },
        { "label": "B", "text": "..." },
        { "label": "C", "text": "..." },
        { "label": "D", "text": "..." }
      ]
    }
  ]
}

IF PART 6:
{
  "part": "6",
  "sets": [
    {
      "setId": "set_131_134",
      "passage": "전체 지문 텍스트 (------ 빈칸 포함)",
      "questions": [
        {
          "id": "q131",
          "text": "문제 텍스트",
          "options": [...]
        }
      ]
    }
  ]
}

IF PART 7:
{
  "part": "7",
  "sets": [
    {
      "setId": "set_147_148",
      "passages": ["첫 번째 지문 전체 텍스트"],  // 단일 지문
      "questions": [...]
    },
    {
      "setId": "set_186_190",
      "passages": ["첫 번째 지문", "두 번째 지문"],  // 이중 지문
      "questions": [...]
    }
  ]
}

중요:
1. 빈칸은 ------ 로 표시
2. 지문(passage/passages)을 반드시 포함
3. 모든 텍스트 정확히 추출
4. ONLY valid JSON 출력
`;

    try {
        const imagePart = fileToGenerativePart(imagePath, "image/jpeg");
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();
        const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const parsed = JSON.parse(jsonStr);

        if (parsed.part === "5") {
            console.log(`   ✅ Part 5: ${parsed.questions?.length || 0}개 문제 추출`);
        } else if (parsed.part === "6") {
            console.log(`   ✅ Part 6: ${parsed.sets?.length || 0}개 세트 추출`);
        } else if (parsed.part === "7") {
            console.log(`   ✅ Part 7: ${parsed.sets?.length || 0}개 세트 추출`);
        }

        return parsed;
    } catch (error: any) {
        console.error(`   ❌ 에러: ${error.message}`);
        return null;
    }
}

async function processSolutionImage(imagePath: string): Promise<Solution[]> {
    console.log(`📘 해설지 처리 중: ${path.basename(imagePath)}`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
이 TOEIC RC 해설지 이미지를 분석해서 JSON으로 추출해줘.

출력 형식:
{
  "solutions": [
    {
      "id": "q101",
      "answer": "A",
      "type": "전치사 어휘",
      "explanation": "해설 텍스트...",
      "translation": "번역 텍스트...",
      "vocabulary": "어휘 정보..."
    }
  ]
}

중요:
1. 파란색 박스의 "문제 유형" 정확히 추출
2. 정답 (A, B, C, D)
3. 해설 (한글)
4. 번역 (한글)
5. 어휘 (한글)
6. ONLY valid JSON 출력
`;

    try {
        const imagePart = fileToGenerativePart(imagePath, "image/jpeg");
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();
        const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const parsed = JSON.parse(jsonStr);

        console.log(`   ✅ ${parsed.solutions?.length || 0}개 해설 추출 완료`);
        return parsed.solutions || [];
    } catch (error: any) {
        console.error(`   ❌ 에러: ${error.message}`);
        return [];
    }
}

async function processRCTest() {
    const baseDir = path.join(process.cwd(), "toeic-data", "ETS정기기출3탄", "RC", "1회");
    const questionDir = path.join(baseDir, "문제");
    const solutionDir = path.join(baseDir, "해설");

    console.log("🚀 RC 1회 전체 처리 시작 (지문 포함)\n");
    console.log("=".repeat(80));

    // 1. 문제지 처리
    console.log("\n📚 STEP 1: 문제지 처리 (지문 포함)\n");
    const questionFiles = fs.readdirSync(questionDir)
        .filter(f => f.endsWith(".jpg"))
        .sort();

    const allPart5Questions: Question[] = [];
    const allPart6Sets: Part6Set[] = [];
    const allPart7Sets: Part7Set[] = [];

    for (const file of questionFiles) {
        const result = await processQuestionImage(path.join(questionDir, file));

        if (result) {
            if (result.part === "5") {
                allPart5Questions.push(...(result.questions || []));
            } else if (result.part === "6") {
                allPart6Sets.push(...(result.sets || []));
            } else if (result.part === "7") {
                allPart7Sets.push(...(result.sets || []));
            }
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
    }

    console.log(`\n✅ Part 5: ${allPart5Questions.length}개 문제`);
    console.log(`✅ Part 6: ${allPart6Sets.length}개 세트`);
    console.log(`✅ Part 7: ${allPart7Sets.length}개 세트`);

    // 2. 해설지 처리
    console.log("\n" + "=".repeat(80));
    console.log("\n📖 STEP 2: 해설지 처리\n");
    const solutionFiles = fs.readdirSync(solutionDir)
        .filter(f => f.endsWith(".jpg"))
        .sort();

    const allSolutions: Solution[] = [];
    for (const file of solutionFiles) {
        const solutions = await processSolutionImage(path.join(solutionDir, file));
        allSolutions.push(...solutions);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
    }

    console.log(`\n✅ 총 ${allSolutions.length}개 해설 추출 완료`);

    // 3. 데이터 병합
    console.log("\n" + "=".repeat(80));
    console.log("\n🔗 STEP 3: 데이터 병합\n");

    const merged: MergedData = {};

    // Part 5 문제 추가
    allPart5Questions.forEach(q => {
        merged[q.id] = {
            id: q.id,
            question: q.text,
            options: q.options
        };
    });

    // Part 6 세트 추가 (지문 포함)
    allPart6Sets.forEach(set => {
        set.questions.forEach(q => {
            merged[q.id] = {
                id: q.id,
                question: q.text,
                options: q.options,
                passage: set.passage,  // 지문 추가!
                setId: set.setId
            };
        });
    });

    // Part 7 세트 추가 (지문 포함)
    allPart7Sets.forEach(set => {
        set.questions.forEach(q => {
            merged[q.id] = {
                id: q.id,
                question: q.text,
                options: q.options,
                passages: set.passages,  // 지문 추가!
                setId: set.setId
            };
        });
    });

    // 해설 데이터 병합
    allSolutions.forEach(s => {
        if (merged[s.id]) {
            merged[s.id].answer = s.answer;
            merged[s.id].type = s.type;
            merged[s.id].explanation = s.explanation;
            merged[s.id].translation = s.translation;
            merged[s.id].vocabulary = s.vocabulary;
        }
    });

    // 4. 결과 저장
    const outputPath = path.join(baseDir, "rc_1회_complete_v2.json");
    fs.writeFileSync(outputPath, JSON.stringify(merged, null, 2), "utf-8");

    console.log("✅ 데이터 병합 완료");
    console.log(`   - 총 문제: ${Object.keys(merged).length}개`);
    console.log(`   - Part 6 지문 포함: ${Object.values(merged).filter(v => v.passage).length}개`);
    console.log(`   - Part 7 지문 포함: ${Object.values(merged).filter(v => v.passages).length}개`);
    console.log(`   - 정답 포함: ${Object.values(merged).filter(v => v.answer).length}개`);

    console.log("\n" + "=".repeat(80));
    console.log(`\n💾 결과 저장: ${outputPath}`);
    console.log("\n🎉 RC 1회 처리 완료 (지문 포함)!");
}

processRCTest();
