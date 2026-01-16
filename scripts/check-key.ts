
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function check() {
    const key = process.env.GEMINI_API_KEY;

    console.log("\n🔑 API Key Check Tool");
    console.log("---------------------");

    if (!key) {
        console.error("❌ Key NOT found in .env.local file.");
        console.log("Please add: GEMINI_API_KEY=AIzaSy...");
        return;
    }

    // Basic format check
    if (!key.startsWith("AIza")) {
        console.warn("⚠️ Warning: Your key does NOT start with 'AIza'. It might be invalid.");
        console.warn(`   Current value starts with: "${key.substring(0, 5)}..."`);
        console.warn("   (Check for leading spaces, dots, or quotes)");
    } else {
        console.log(`✅ Key format looks correct (Starts with ${key.substring(0, 6)}...)`);
    }

    // Live validation
    console.log("📡 Connecting to Google Gemini API...");
    try {
        const genAI = new GoogleGenerativeAI(key);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
        const result = await model.generateContent("Say 'OK'");
        const response = await result.response;
        const text = response.text();

        console.log("🎉 SUCCESS! The API Key is working perfectly.");
        console.log(`🤖 AI Response: "${text.trim()}"`);
    } catch (error: any) {
        console.error("❌ API Connection Failed!");
        console.error("Error Message:", error.message);
        console.log("Please check if the key is copied correctly.");
    }
}

check();
