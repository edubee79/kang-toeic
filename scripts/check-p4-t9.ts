
import { part4Data } from './src/data/part4';

const t9Data = part4Data.filter(p => p.testId === 9);
console.log('Test 9 Part 4 Sets:', t9Data.length);
t9Data.forEach((set, i) => {
    console.log(`Set ${i}: ${set.setId}, range: ${set.questionRange}, image: ${set.image}`);
});
