const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function list() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(JSON.stringify(data, null, 2));
}
list();
