import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

function fileToGenerativePart(imagePath: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
            mimeType,
        },
    };
}

async function testSolutionExtraction() {
    const testImagePath = path.join(
        process.cwd(),
        "toeic-data",
        "ETS정기기출3탄",
        "RC",
        "1회",
        "해설",
        "RC3_해설1_2.jpg"
    );

    console.log("🔍 테스트 해설지:", testImagePath);
    console.log("📸 이미지 읽기 중...\n");

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
        const imagePart = fileToGenerativePart(testImagePath, "image/jpeg");
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();

        console.log("📄 Gemini 응답:\n");
        console.log(text);
        console.log("\n" + "=".repeat(80) + "\n");

        // JSON 파싱 시도
        const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const parsed = JSON.parse(jsonStr);

        console.log("✅ JSON 파싱 성공!\n");
        console.log("📊 추출 결과:");
        console.log(`   - 해설 수: ${parsed.solutions?.length || 0}`);

        if (parsed.solutions && parsed.solutions.length > 0) {
            console.log("\n📝 첫 번째 해설:");
            const first = parsed.solutions[0];
            console.log(`   ID: ${first.id}`);
            console.log(`   정답: ${first.answer}`);
            console.log(`   유형: ${first.type}`);
            console.log(`   해설: ${first.explanation?.substring(0, 50)}...`);
        }

        // 결과 저장
        const outputPath = path.join(process.cwd(), "test_solution_result.json");
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2), "utf-8");
        console.log(`\n💾 결과 저장: ${outputPath}`);

    } catch (error: any) {
        console.error("❌ 에러 발생:", error.message);
    }
}

testSolutionExtraction();
