import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);
async function list() {
    try {
        console.log("Listing models...");
        // In the Web SDK / Node SDK, there isn't a direct listModels call without the administrative client
        // But we can try a few known ones
        const models = ["gemini-2.0-flash-exp", "gemini-1.5-flash", "gemini-1.5-pro"];
        for (const m of models) {
            try {
                const model = genAI.getGenerativeModel({ model: m });
                await model.generateContent("hi");
                console.log(`✅ ${m} is available`);
            } catch (e: any) {
                console.log(`❌ ${m} error: ${e.message}`);
            }
        }
    } catch (e: any) {
        console.error(e.message);
    }
}
list();
