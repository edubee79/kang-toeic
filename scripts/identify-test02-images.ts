
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function fileToGenerativePart(path: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const imagePaths = [
        "C:/Users/user/.gemini/antigravity/brain/89204576-7162-4226-938f-fe6f0117133b/uploaded_image_0_1768391116705.png",
        "C:/Users/user/.gemini/antigravity/brain/89204576-7162-4226-938f-fe6f0117133b/uploaded_image_1_1768391116705.png",
        "C:/Users/user/.gemini/antigravity/brain/89204576-7162-4226-938f-fe6f0117133b/uploaded_image_2_1768391116705.png",
        "C:/Users/user/.gemini/antigravity/brain/89204576-7162-4226-938f-fe6f0117133b/uploaded_image_3_1768391116705.png",
        "C:/Users/user/.gemini/antigravity/brain/89204576-7162-4226-938f-fe6f0117133b/uploaded_image_4_1768391116705.png",
        "C:/Users/user/.gemini/antigravity/brain/89204576-7162-4226-938f-fe6f0117133b/uploaded_image_1768391119954.png"
    ];

    const pdfPath = "LC3-1.pdf";

    const prompt = `
    Identify which question number each of these images corresponds to in the "ETS TOEIC 3 Test 2" (LC Section).
    The images are from Part 1, Part 3 (Graphic questions), and Part 4 (Graphic questions).
    
    Return a JSON object:
    {
      "results": [
        { "index": 0, "questionNumber": number, "part": number },
        ...
      ]
    }
    
    Order of images in request:
    0: Kitchen/Cooking scene
    1: Road sign HARTSVILLE EXITS
    2: Recycling bins (Glass, Plastic, etc)
    3: Invitation draft (August 10)
    4: List of Fees (Filing, Contract, etc)
    5: Pie Chart (Instruments)
  `;

    // We only send the images to identify their content, and we assume the AI knows ETS TOEIC 3 content Or we provide the PDF context if possible.
    // Actually, Gemini knows TOEIC content well.

    const parts = imagePaths.map(path => fileToGenerativePart(path, "image/png"));
    parts.push(fileToGenerativePart(pdfPath, "application/pdf")); // Providing the PDF as context for accurate mapping

    const result = await model.generateContent([prompt, ...parts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();
