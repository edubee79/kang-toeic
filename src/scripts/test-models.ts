const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // The SDK doesn't have a direct listModels, we usually use the REST API for that
    // But we can try a few common ones
    const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
    for (const m of models) {
        try {
            const model = genAI.getGenerativeModel({ model: m });
            const result = await model.generateContent("Hi");
            console.log(`✅ Model ${m} is available: ${result.response.text()}`);
        } catch (e) {
            console.log(`❌ Model ${m} failed: ${e.message}`);
        }
    }
}

listModels().catch(console.error);
