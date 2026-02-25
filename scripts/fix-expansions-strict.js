const fs = require('fs');
const path = './src/data/vocabulary_final.json';
const words = JSON.parse(fs.readFileSync(path, 'utf8'));

// 1. Manually curated high-quality TOEIC mappings (Replacing existing ones)
const transformationMap = {
    "apply": ["application (지원서)", "applicable (적용 가능한)", "applicant (지원자)"],
    "experience": ["experienced (능숙한)", "inexperience (미숙)"],
    "position": ["open position (공석)", "fill a position (직을 채우다)", "hold a position (직책을 맡다)"],
    "professional": ["professionalism (전문성)", "professionally (전문적으로)"],
    "applicant": ["apply (지원하다)", "application (지원서)"],
    "interview": ["interviewer (면접관)", "interviewee (피면접자)"],
    "offer": ["job offer (일자리 제안)", "accept an offer (제안 수락)"],
    "join": ["join the company (입사하다)", "joint venture (합작 투자)"],
    "hire": ["hiring process (채용 과정)", "new hire (신입 사원)"],
    "qualified": ["qualification (자격)", "qualify (자격을 얻다)", "highly qualified (매우 유능한)"],
    "candidate": ["potential candidate (잠재적 후보자)", "successful candidate (합격자)"],
    "resume": ["submit a resume (이력서를 내다)", "screen resumes (이력서를 검열하다)"],
    "reference": ["refer (참조하다)", "recommendation (추천)", "reference letter (추천서)"],
    "achievement": ["achieve (성취하다)", "outstanding achievement (뛰어난 업적)"],
    "dedicated": ["dedication (헌신)", "dedicate (헌신하다)", "be dedicated to (~에 헌신하다)"],
    "requirement": ["require (요구하다)", "meet requirements (요건을 충족하다)"],
    "compliance": ["comply (준수하다)", "in compliance with (~을 준수하여)"],
    "additional": ["add (추가하다)", "addition (추가물)", "additionally (게다가)"],
    "submit": ["submission (제출)", "submissive (복종하는)"],
    "upcoming": ["forthcoming (다가오는)", "upcoming event (다가오는 행사)"],
    "present": ["presentation (발표)", "representative (대표자)"],
    "issue": ["address an issue (문제를 해결하다)", "security issue (보안 문제)"],
    "period": ["periodic (주기적인)", "periodically (주기적으로)"],
    "condition": ["conditional (조건부의)", "terms and conditions (약관)"],
    "performance": ["perform (수행하다)", "perform high (높은 성과를 내다)"],
    "employee": ["employer (고용주)", "employment (고용)", "unemployment (실업)"],
    "management": ["manage (관리하다)", "managerial (관리의)"],
    "intention": ["intentional (의도적인)", "intentionally (의도적으로)"],
    "access": ["accessible (접근 가능한)", "accessibility (접근성)", "gain access to (~에 접근 권한을 얻다)"],
    "violate": ["violation (위반)", "violator (위반자)"],
    "procrastinate": ["procrastination (미루는 버릇)", "put off (미루다)"]
};

const fixedWords = words.map(item => {
    const wordKey = item.word.toLowerCase().trim();

    // IF MANUAL MAPPING EXISTS: Use it EXCLUSIVELY to ensure 100% quality
    if (transformationMap[wordKey]) {
        return {
            ...item,
            similar: transformationMap[wordKey]
        };
    }

    // IF NO MANUAL MAPPING: Apply strict AI cleaning
    const base = wordKey;
    const refinedSimilar = item.similar.filter(s => {
        const sLower = s.toLowerCase().trim();

        // Rule 1: Must NOT be the same as the target word
        if (sLower === base) return false;

        // Rule 2: Root match (Word Family) - Shares first 4 letters and is longer
        if (sLower.startsWith(base.substring(0, 4)) && sLower.length > base.length) return true;

        // Rule 3: Valid Collocation - Must CONTAIN the target word and have at least one space
        // (Split by '(' to check only the English part for spaces)
        const engPart = sLower.split('(')[0].trim();
        if (engPart.includes(' ') && engPart.includes(base)) return true;

        return false;
    });

    // Add basic POS logic as fallback if refined list is empty
    if (refinedSimilar.length === 0) {
        if (base.endsWith('tion')) {
            const verb = base.replace(/tion$/, '');
            if (verb.length > 3) refinedSimilar.push(`${verb} (동사형)`);
        }
    }

    return {
        ...item,
        similar: [...new Set(refinedSimilar)]
    };
});

fs.writeFileSync(path, JSON.stringify(fixedWords, null, 2));
console.log(`Successfully updated ${fixedWords.length} words with strict rules.`);
