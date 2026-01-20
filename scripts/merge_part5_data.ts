
import * as fs from 'fs';
import * as path from 'path';

const retaggedPath = path.join(process.cwd(), 'retagged_part5_all.json');
const poolPath = path.join(process.cwd(), 'ai_generated_part5_pool.json');

const retagged = fs.existsSync(retaggedPath) ? JSON.parse(fs.readFileSync(retaggedPath, 'utf8')) : [];
const pool = fs.existsSync(poolPath) ? JSON.parse(fs.readFileSync(poolPath, 'utf8')) : [];

const combined = [...retagged, ...pool];

fs.writeFileSync('final_part5_database.json', JSON.stringify(combined, null, 2));

console.log(`✅ Combined Database Created: final_part5_database.json`);
console.log(`- Legacy: ${retagged.length}`);
console.log(`- AI Pool: ${pool.length}`);
console.log(`- Total: ${combined.length}`);
