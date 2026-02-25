const fs = require('fs');
const path = require('path');

async function enrichDay21() {
    const finalPath = path.join(process.cwd(), 'src/data/vocabulary_final.json');
    let data = JSON.parse(fs.readFileSync(finalPath, 'utf8'));

    // Expert knowledge mapping for Day 21 (Part 5 focused)
    const enrichmentMap = {
        "exchange": {
            "exampleTip": "exchange A for B (A를 B로 교체하다) 구문에서 전치사 for를 묻는 문제 출제.",
            "collocations": ["exchange the item for a larger size", "currency exchange"],
            "grammarPoint": "교환 대상 앞에는 전치사 for를 사용한다는 점이 파트 5의 핵심 포인트입니다."
        },
        "afford": {
            "exampleTip": "조동사 can/be able to와 함께 쓰여 '~할 여유가 있다'는 의미로 출제.",
            "grammarPoint": "afford는 목적어로 to부정사를 취하는 동사입니다. afford + to do 형태를 반드시 기억하세요."
        },
        "expensive": {
            "exampleTip": "price는 high/low로 수식하고, item은 expensive/cheap으로 수식하는 형용사 짝꿍 문제 유의.",
            "synonyms": ["costly (형) 비싼", "pricey (형) 값비싼"],
            "derivatives": ["expense (명) 비용, 지출"]
        },
        "withdraw": {
            "exampleTip": "withdraw from (~로부터 인출하다/물러나다) 전치사 from과의 결합 유의.",
            "collocations": ["withdraw money from the ATM", "withdraw from the race"],
            "derivatives": ["withdrawal (명) 인출, 철회"],
            "grammarPoint": "'인출하다' 외에도 '계획이나 약속을 철회하다'라는 뜻으로 파트 7에 등장합니다."
        },
        "investment": {
            "collocations": ["make an investment", "foreign investment"],
            "derivatives": ["invest (동) 투자하다", "investor (명) 투자자"],
            "grammarPoint": "make an investment in (~에 투자하다)처럼 명사 investment 뒤에 전치사 in이 오는지 묻는 문제 출제."
        },
        "approve": {
            "exampleTip": "approve the request (타동사) 또는 approve of (~을 찬성하다, 자동사) 구조 유의.",
            "derivatives": ["approval (명) 승인, 인가", "approved (형) 승인된"],
            "grammarPoint": "파트 5에서는 주로 명사형인 approval이 obtain approval, seek approval 같은 결합으로 정답이 됩니다."
        },
        "deduct": {
            "exampleTip": "deduct A from B (B에서 A를 공제하다) 구조에서 전치사 from 유의.",
            "derivatives": ["deduction (명) 공제(액)"],
            "grammarPoint": "tax deduction(소득 공제)은 복합명사로 자주 출제되니 덩어리로 외워두세요."
        }
    };

    // Update only Day 21 items
    data = data.map(item => {
        if (item.day === 21) {
            const wordLower = item.word.toLowerCase();
            const extra = enrichmentMap[wordLower];
            if (extra) {
                return { ...item, ...extra };
            }
        }
        return item;
    });

    fs.writeFileSync(finalPath, JSON.stringify(data, null, 2));
    console.log("✅ Day 21 Enriched with Part 5 surgical tips.");
}

enrichDay21();
