
import * as fs from 'fs';
import * as dotenv from 'dotenv';

try {
    if (!fs.existsSync('.env.local')) {
        console.error("❌ Error: .env.local file NOT found!");
        process.exit(1);
    }

    const envConfig = dotenv.parse(fs.readFileSync('.env.local'));

    console.log("\n🔍 .env.local Analysis:");
    console.log("------------------------");

    const keys = Object.keys(envConfig);
    if (keys.length === 0) {
        console.log("⚠️  File exists but is empty/unparsable.");
    } else {
        console.log(`✅ Found ${keys.length} variables:`);
        keys.forEach(key => {
            const val = envConfig[key];
            const displayVal = val.length > 10 ? `${val.substring(0, 4)}...${val.substring(val.length - 4)}` : "***";
            console.log(`   - [${key}] = "${displayVal}"`);
        });
    }

    if (!envConfig.GEMINI_API_KEY) {
        console.log("\n❌ 'GEMINI_API_KEY' variable is MISSING.");
        console.log("   (Check for typos, spaces, or lower/upper case)");
    } else {
        console.log("\n✅ 'GEMINI_API_KEY' matches! Script should work.");
    }

} catch (err: any) {
    console.error("Critical Error:", err.message);
}
