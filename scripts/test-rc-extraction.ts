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

async function testExtraction() {
    const testImagePath = path.join(
        process.cwd(),
        "toeic-data",
        "ETS정기기출3탄",
        "RC",
        "1회",
        "문제",
        "RC3-1_1.jpg"
    );

    console.log("🔍 테스트 이미지:", testImagePath);
    console.log("📸 이미지 읽기 중...\n");

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
이 TOEIC RC 문제지 이미지를 분석해서 JSON으로 추출해줘.

출력 형식:
{
  "part": "5" | "6" | "7",
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

중요:
1. 빈칸은 ------ 로 표시
2. 모든 텍스트 정확히 추출
3. ONLY valid JSON 출력
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
        console.log(`   - Part: ${parsed.part}`);
        console.log(`   - 문제 수: ${parsed.questions?.length || 0}`);

        if (parsed.questions && parsed.questions.length > 0) {
            console.log("\n📝 첫 번째 문제:");
            console.log(`   ID: ${parsed.questions[0].id}`);
            console.log(`   Text: ${parsed.questions[0].text}`);
            console.log(`   Options: ${parsed.questions[0].options?.length || 0}개`);
        }

        // 결과 저장
        const outputPath = path.join(process.cwd(), "test_extraction_result.json");
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2), "utf-8");
        console.log(`\n💾 결과 저장: ${outputPath}`);

    } catch (error: any) {
        console.error("❌ 에러 발생:", error.message);
        if (error.message.includes("JSON")) {
            console.error("\n원본 응답을 확인하세요.");
        }
    }
}

testExtraction();
