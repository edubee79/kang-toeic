import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);
async function list() {
    try {
        const result = await genAI.getGenerativeModel({ model: "gemini-1.5-pro" }).generateContent("test");
        console.log("gemini-1.5-pro is working");
    } catch (e: any) {
        console.error("Error with gemini-1.5-pro:", e.message);
    }
}
list();
