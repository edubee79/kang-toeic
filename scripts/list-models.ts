
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("NO KEY FOUND");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function list() {
    try {
        // Using a basic model to get the manager reference isn't straightforward in V3 SDK?
        // Actually, the SDK doesn't have a direct 'listModels' method on the instance easily.
        // We have to use the fetch/REST approach if the SDK doesn't expose it cleanly, 
        // OR just try to access the model list correctly.
        // GoogleGenerativeAI class doesn't seem to have listModels.

        // Let's try to infer from a simple test call or use REST.
        console.log("Checking available models via REST API...");

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();

        if (data.models) {
            console.log("\n✅ AVAILABLE MODELS:");
            data.models.forEach((m: any) => {
                if (m.name.includes("gemini")) {
                    console.log(` - ${m.name.replace('models/', '')}`);
                }
            });
        } else {
            console.error("❌ Error listing models:", JSON.stringify(data, null, 2));
        }
    } catch (e: any) {
        console.error("Error:", e.message);
    }
}
list();
