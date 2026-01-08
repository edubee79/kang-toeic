export interface VocaWord {
    id: number;
    en: string;
    ko: string;
    exampleEn?: string;
    exampleKo?: string;
}

export const vocaData: { [key: number]: VocaWord[] } = {
    1: [
        { id: 1, en: "contract", ko: "계약(서), 수축하다", exampleEn: "sign a contract", exampleKo: "계약서에 서명하다" },
        { id: 2, en: "proposal", ko: "제안(서)", exampleEn: "submit a proposal", exampleKo: "제안서를 제출하다" },
        { id: 3, en: "negotiation", ko: "협상", exampleEn: "enter into negotiations", exampleKo: "협상에 들어가다" },
        { id: 4, en: "agreement", ko: "합의, 계약, 동의", exampleEn: "reach an agreement", exampleKo: "합의에 도달하다" },
        { id: 5, en: "client", ko: "고객, 의뢰인", exampleEn: "meet with a client", exampleKo: "고객을 만나다" },
        { id: 6, en: "representative", ko: "대표자, 직원", exampleEn: "a sales representative", exampleKo: "영업 사원" },
        { id: 7, en: "inspect", ko: "점검하다, 검사하다", exampleEn: "inspect the facility", exampleKo: "시설을 점검하다" },
        { id: 8, en: "investigate", ko: "조사하다", exampleEn: "investigate the cause", exampleKo: "원인을 조사하다" },
        { id: 9, en: "notify", ko: "통지하다, 알리다", exampleEn: "notify the manager", exampleKo: "매니저에게 알리다" },
        { id: 10, en: "approval", ko: "승인", exampleEn: "get approval", exampleKo: "승인을 받다" },
        { id: 11, en: "distribution", ko: "분배, 배급, 유통", exampleEn: "distribution center", exampleKo: "물류 센터" },
        { id: 12, en: "manufacturer", ko: "제조업체", exampleEn: "car manufacturer", exampleKo: "자동차 제조업체" },
        { id: 13, en: "provide", ko: "제공하다", exampleEn: "provide information", exampleKo: "정보를 제공하다" },
        { id: 14, en: "promotion", ko: "승진, 홍보", exampleEn: "get a promotion", exampleKo: "승진하다" },
        { id: 15, en: "competitor", ko: "경쟁업체", exampleEn: "major competitor", exampleKo: "주요 경쟁업체" },
        { id: 16, en: "expand", ko: "확장하다", exampleEn: "expand the business", exampleKo: "사업을 확장하다" },
        { id: 17, en: "merge", ko: "합병하다", exampleEn: "merge with a company", exampleKo: "회사와 합병하다" },
        { id: 18, en: "annual", ko: "매년의, 연례의", exampleEn: "annual meeting", exampleKo: "연례 회의" },
        { id: 19, en: "profit", ko: "이익, 수익", exampleEn: "net profit", exampleKo: "순이익" },
        { id: 20, en: "demand", ko: "수요, 요구하다", exampleEn: "high demand", exampleKo: "높은 수요" }
    ],
    // ... placeholders for other days
};
