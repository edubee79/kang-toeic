import { MockTestLCDataStructure } from '@/components/exam/mock/Universal_LC_Runner';
import { MockTestRCDataStructure } from '@/components/exam/mock/Universal_RC_Runner';

export interface FrankenSchema {
    p1: string; // e.g. 'v4_p1_t01'
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7s: string; // single
    p7m: string; // multi
    audioUrl?: string; // e.g. "/audio/mock/test1.mp3"
}

export async function buildUniversalMockTest(schema: FrankenSchema): Promise<{
    lc: MockTestLCDataStructure;
    rc: MockTestRCDataStructure;
    truthMap: Record<string, string>; // NEW: The real-time generated correct answers map
    rawCombined: any;
}> {

    // Dynamic Imports that support both V3 and V4
    const v1 = schema.p1.split('_')[0];
    const v2 = schema.p2.split('_')[0];
    const v3 = schema.p3.split('_')[0];
    const v4 = schema.p4.split('_')[0];
    const v5 = schema.p5.split('_')[0];
    const v6 = schema.p6.split('_')[0];
    const v7s = schema.p7s.split('_')[0];
    const v7m = schema.p7m.split('_')[0];

    const m1 = await import(`@/data/toeic/${v1}/listening/part1/${schema.p1}`);
    const m2 = await import(`@/data/toeic/${v2}/listening/part2/${schema.p2}`);
    const m3 = await import(`@/data/toeic/${v3}/listening/part3/${schema.p3}`);
    const m4 = await import(`@/data/toeic/${v4}/listening/part4/${schema.p4}`);

    const m5 = await import(`@/data/toeic/${v5}/reading/part5/${schema.p5}`);
    const m6 = await import(`@/data/toeic/${v6}/reading/part6/${schema.p6}`);
    const m7s = await import(`@/data/toeic/${v7s}/reading/part7/single/${schema.p7s}`);
    const m7m = await import(`@/data/toeic/${v7m}/reading/part7/multi/${schema.p7m}`);

    // Extract raw payload (usually exported as 'test1Data', 'test2Data', etc.)
    // We just take the first export dynamically.
    const rawP1 = Object.values(m1)[0] as any;
    const rawP2 = Object.values(m2)[0] as any;
    const rawP3 = Object.values(m3)[0] as any;
    const rawP4 = Object.values(m4)[0] as any;
    const rawP5 = Object.values(m5)[0] as any;
    const rawP6 = Object.values(m6)[0] as any;
    const rawP7s = Object.values(m7s)[0] as any;
    const rawP7m = Object.values(m7m)[0] as any;

    const p1_raw = Array.isArray(rawP1) ? rawP1 : (rawP1?.questions || []);
    const p2_raw = Array.isArray(rawP2) ? rawP2 : (rawP2?.questions || []);
    const p3_raw = Array.isArray(rawP3) ? rawP3 : (rawP3?.questions || []);
    const p4_raw = Array.isArray(rawP4) ? rawP4 : (rawP4?.questions || []);
    const p5_raw = Array.isArray(rawP5) ? rawP5 : (rawP5?.questions || []);
    const p6_raw = Array.isArray(rawP6) ? rawP6 : (rawP6?.passages || []);

    // P7 usually has .sets or similar
    const p7s_raw = Array.isArray(rawP7s) ? rawP7s : (rawP7s?.sets || rawP7s?.passages || []);
    const p7m_raw = Array.isArray(rawP7m) ? rawP7m : (rawP7m?.sets || rawP7m?.passages || []);

    // ==========================================
    // NORMALIZATION (Replicating set9_data.ts rules)
    // ==========================================

    const p1 = p1_raw.map((q: any) => {
        const qNum = String(q.id).split('-q')[1] || String(q.id).split('-').pop() || "0";
        return {
            ...q,
            id: `p1-univ-q${qNum}`,
            options: ['A', 'B', 'C', 'D']
        };
    });

    const p2 = p2_raw.map((q: any) => {
        const qNum = String(q.id).split('-q')[1] || String(q.id).split('-').pop() || "0";
        return {
            ...q,
            id: `p2-univ-q${qNum}`,
            options: ['A', 'B', 'C']
        };
    });

    const p3 = p3_raw.map((s: any) => ({
        ...s,
        questions: s.questions.map((q: any) => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p3-univ-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Array.isArray(q.options)
                ? q.options
                : Object.entries(q.options || {}).map(([label, text]) => `(${label}) ${text}`)
        }))
    }));

    const p4 = p4_raw.map((s: any) => ({
        ...s,
        questions: s.questions.map((q: any) => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p4-univ-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Array.isArray(q.options)
                ? q.options
                : Object.entries(q.options || {}).map(([label, text]) => `(${label}) ${text}`)
        }))
    }));

    const p5 = p5_raw.map((q: any) => ({
        ...q,
        id: q.id.includes('-q') ? q.id : `p5-univ-q${String(q.id).replace(/[^\d]/g, '')}`,
        options: Array.isArray(q.options)
            ? q.options
            : Object.entries(q.options || {}).map(([label, text]) => `(${label}) ${text}`)
    }));

    const p6 = p6_raw.map((p: any) => {
        const qIds = p.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
        const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";
        return {
            ...p,
            questionRange: range,
            questions: p.questions.map((q: any) => ({
                ...q,
                id: q.id.includes('-q') ? q.id : `p6-univ-q${String(q.id).replace(/[^\d]/g, '')}`,
                options: Array.isArray(q.options)
                    ? q.options
                    : Object.entries(q.options || {}).map(([label, text]) => `(${label}) ${text}`)
            }))
        };
    });

    const p7s = p7s_raw.map((s: any) => {
        const qIds = s.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
        const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";
        return {
            ...s,
            questionRange: range,
            questions: s.questions.map((q: any) => ({
                ...q,
                id: q.id.includes('-q') ? q.id : `p7-univ-q${String(q.id).replace(/[^\d]/g, '')}`,
                options: Array.isArray(q.options)
                    ? q.options
                    : Object.entries(q.options || {}).map(([label, text]) => `(${label}) ${text}`)
            }))
        };
    });

    const p7m = p7m_raw.map((s: any) => {
        const qIds = s.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
        const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";
        return {
            ...s,
            questionRange: range,
            questions: s.questions.map((q: any) => ({
                ...q,
                id: q.id.includes('-q') ? q.id : `p7-univ-q${String(q.id).replace(/[^\d]/g, '')}`,
                options: Array.isArray(q.options)
                    ? q.options
                    : Object.entries(q.options || {}).map(([label, text]) => `(${label}) ${text}`)
            }))
        };
    });

    // ==========================================
    // EXTRACT TRUTH MAP (Correct Answers)
    // ==========================================
    const truthMap: Record<string, string> = {};

    p1.forEach((q: any) => truthMap[q.id] = q.correctAnswer);
    p2.forEach((q: any) => truthMap[q.id] = q.correctAnswer);
    p3.forEach((set: any) => set.questions.forEach((q: any) => truthMap[q.id] = q.correctAnswer));
    p4.forEach((set: any) => set.questions.forEach((q: any) => truthMap[q.id] = q.correctAnswer));
    p5.forEach((q: any) => truthMap[q.id] = q.correctAnswer);
    p6.forEach((set: any) => set.questions.forEach((q: any) => truthMap[q.id] = q.correctAnswer));
    p7s.forEach((set: any) => set.questions.forEach((q: any) => truthMap[q.id] = q.correctAnswer));
    p7m.forEach((set: any) => set.questions.forEach((q: any) => truthMap[q.id] = q.correctAnswer || q.answer));

    const t1 = schema.p1.match(/_t(\d+)/)?.[1].padStart(2, '0') || '01';
    const t2 = schema.p2.match(/_t(\d+)/)?.[1].padStart(2, '0') || '01';
    const t3 = schema.p3.match(/_t(\d+)/)?.[1].padStart(2, '0') || '01';
    const t4 = schema.p4.match(/_t(\d+)/)?.[1].padStart(2, '0') || '01';

    const audioUrls = [
        `/audio/mock/parts/${v1}/t${t1}/p1.mp3`,
        `/audio/mock/parts/${v2}/t${t2}/p2.mp3`,
        `/audio/mock/parts/${v3}/t${t3}/p3.mp3`,
        `/audio/mock/parts/${v4}/t${t4}/p4.mp3`
    ];

    return {
        lc: {
            p1,
            p2,
            p3,
            p4,
            audioUrl: schema.audioUrl || "/audio/mock/test1.mp3",
            audioUrls
        },
        rc: {
            p5,
            p6,
            p7s,
            p7m
        },
        truthMap,
        rawCombined: {
            p1_raw, p2_raw, p3_raw, p4_raw, p5_raw, p6_raw, p7s_raw, p7m_raw
        }
    };
}
