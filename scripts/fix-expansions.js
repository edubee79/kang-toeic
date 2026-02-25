const fs = require('fs');

const vocabularyPath = './src/data/vocabulary_final.json';
const words = JSON.parse(fs.readFileSync(vocabularyPath, 'utf8'));

// TOEIC Specific Transformation Rules
// 1. Word Family (POS)
// 2. Core Collocations
// 3. True Confusables (Strategic)

const transformationMap = {
    // Sample high-impact TOEIC words
    "apply": ["application (지원서)", "applicable (적용 가능한)", "applicant (지원자)"],
    "experience": ["experienced (능숙한)", "inexperience (미숙)"],
    "position": ["open position (공석)", "fill a position (직을 채우다)"],
    "professional": ["professionalism (전문성)", "professionally (전문적으로)"],
    "applicant": ["apply (지원하다)", "application (지원서)"],
    "interview": ["interviewer (면접관)", "interviewee (피면접자)"],
    "offer": ["job offer (일자리 제안)", "accept an offer (제안 수락)"],
    "join": ["join the company (입사하다)", "joint venture (합작 투자)"],
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
    "procrastinate": ["procrastination (미루는 버릇)", "put off (미루다)"],
    "profitable": ["profit (이익)", "profitability (수익성)", "generate profit (이익을 창출하다)"],
    "considerable": ["considerably (상당히)", "considerate (사려 깊은) [혼동 주의]"],
    "reliable": ["reliability (신뢰성)", "rely on (~에 의존하다)"],
    "effective": ["effectively (효과적으로)", "effectiveness (유효성)", "take effect (효력이 발생하다)"],
    "significant": ["significantly (항당히)", "significance (중요성)"],
    "maintenance": ["maintain (유지하다)", "maintenance fee (유지비)"],
    "registration": ["register (등록하다)", "enrollment (등록)"],
    "financial": ["finance (재정)", "financially (재정적으로)"],
    "invest": ["investment (투자)", "investor (투자자)"],
    "strategy": ["strategic (전략적인)", "strategically (전략적으로)"],
    "production": ["produce (생산하다)", "product (제품)", "productivity (생산성)"],
    "benefit": ["beneficial (이로운)", "beneficiary (수혜자)"],
    "response": ["respond (응답하다)", "responsive (즉각 반응하는)"],
    "proposal": ["propose (제안하다)", "proposition (제의)"],
    "agreement": ["agree (동의하다)", "agreeable (쾌활한, 동의할 만한)"],
    "contract": ["contractor (계약자)", "contractual (계약상의)", "draw up a contract (계약서를 작성하다)"],
    "expand": ["expansion (확장)", "expansive (광범위한)"],
    "notify": ["notification (통지)", "notice (공지)"],
    "confirm": ["confirmation (확인)", "confirmed (확정된)"],
    "regulation": ["regulate (규제하다)", "regulatory (규제의)"],
    "implement": ["implementation (실행)", "carry out (수행하다)"],
    "deadline": ["meet the deadline (마감을 맞추다)", "miss the deadline (마감을 놓치다)"],
    "feedback": ["constructive feedback (건설적인 피드백)", "provide feedback (피드백을 주다)"],
    "budget": ["budgetary (예산의)", "within budget (예산 범위 내에서)"],
    "salary": ["salary increase (급여 인상)", "competitive salary (경쟁력 있는 급여)"],
    "promotion": ["promote (승진시키다, 홍보하다)", "promotional (홍보의)"],
    "temporary": ["temporarily (일시적으로)", "permanent (영구적인) [반의어]"],
    "approval": ["approve (승인하다)", "get approval (승인을 받다)"],
    "assessment": ["assess (평가하다)", "self-assessment (자기 평가)"],
    "conduct": ["conduct an interview (면접을 실시하다)", "conduct research (연구를 수행하다)"],
    "distributed": ["distribution (유통)", "distributor (유통업자)"],
    "facility": ["facilitate (용이하게 하다)", "facilities (시설물)"],
    "inspection": ["inspect (검사하다)", "inspector (검사관)"],
    "inventory": ["take inventory (재고 조사를 하다)", "inventory level (재고 수준)"],
    "logistics": ["logistical (물류의)", "supply chain (공급망)"],
    "marketing": ["marketable (시장성이 있는)", "market share (시장 점유율)"],
    "negotiation": ["negotiate (협상하다)", "negotiable (협상 가능한)"],
    "objective": ["object (물체, 반대하다)", "objectively (객관적으로)"],
    "permission": ["permit (허가하다)", "permissible (허용되는)"],
    "policy": ["policy maker (정책 입안자)", "company policy (회사 정책)"],
    "procedure": ["procedural (절차상의)", "standard procedure (표준 절차)"],
    "reception": ["receive (받다)", "receipt (영수증)", "receptionist (접수원)"],
    "replacement": ["replace (대체하다)", "replaceable (대체 가능한)"],
    "revenue": ["generate revenue (수익을 창출하다)", "annual revenue (연간 수익)"],
    "supervisor": ["supervise (감독하다)", "supervision (감독)"],
    "warranty": ["under warranty (보증 기간 내인)", "extended warranty (연장 보증)"]
    // ... more will be added by the script's logic if missing
};

function fixSimilar(item) {
    const word = item.word.toLowerCase();

    // 1. Check if we have a hardcoded strategic mapping
    if (transformationMap[word]) {
        return transformationMap[word];
    }

    // 2. Logic-based POS expansion if no manual map exists
    const similar = [];
    const base = item.word;

    // Simple heuristic for common suffixes
    if (base.endsWith('tion') || base.endsWith('sion')) {
        const verb = base.replace(/tion$|sion$/, '');
        if (verb.length > 3) similar.push(`${verb} (동사형)`);
    } else if (base.endsWith('ment')) {
        const verb = base.replace(/ment$/, '');
        similar.push(`${verb} (동사형)`);
    } else if (base.endsWith('able') || base.endsWith('ible')) {
        const noun = base.replace(/able$|ible$/, 'ability');
        similar.push(`${noun} (명사형)`);
    } else if (base.endsWith('ly')) {
        const adj = base.replace(/ly$/, '');
        similar.push(`${adj} (형용사형)`);
    }

    // Remove if the AI generated something truly messy (short length match like tension/intention)
    // We filter out original expansion if it looks like a "confusable" but isn't useful
    const cleaned = item.similar.filter(s => {
        const sLower = s.toLowerCase();
        // Keep if it shares a root (prefix 4 chars)
        if (sLower.startsWith(word.substring(0, 4))) return true;
        // Keep if it's a known collocation (contains space)
        if (s.includes(' ')) return true;
        return false;
    });

    // Merge manual logic and cleaned existing ones
    const finalSet = [...new Set([...cleaned, ...similar])];

    // Fallback: If empty, at least provide a POS or Collocation hint
    if (finalSet.length === 0) {
        // Return original but only if it's not a known bad one
        return item.similar;
    }

    return finalSet;
}

const fixedWords = words.map(item => {
    return {
        ...item,
        similar: fixSimilar(item)
    };
});

fs.writeFileSync(vocabularyPath, JSON.stringify(fixedWords, null, 2));
console.log('Successfully updated Expansion fields for all words.');
