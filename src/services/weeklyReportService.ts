import { db } from "@/lib/firebase-admin";
import { AuditEngineService } from "@/services/auditEngineService";
import { QuestionAssembler } from "@/lib/ai-tutor/questionAssembler";
import { TOEIC_TAG_REGISTRY } from "@/types/toeic-standards";

export interface ReportGenerationResult {
    success: boolean;
    userId: string;
    studentName: string;
    error?: string;
}

export const WeeklyReportService = {
    /**
     * Generates a complete weekly report and homework for a single user.
     */
    async generateReportForUser(userId: string, studentName: string, stats: any, goals: any, weakestTags: any[]): Promise<ReportGenerationResult> {
        try {
            console.log('[WeeklyReport] Step 1: AuditEngine 시작');
            // 1. Run Audit Engine
            const auditResult = await AuditEngineService.calculateWeeklyAudit(userId, stats, goals);
            console.log('[WeeklyReport] Step 1: AuditEngine 완료');

            // 2. Tag mapping (targetPartList 기준 필터, 타겟 없으면 빈 배열 허용)
            const targetPartList = [auditResult.targets.lc?.part, auditResult.targets.rc?.part].filter(Boolean);

            const mappedWeakestTags = (weakestTags || []).map((t: any) => {
                const baseTag = (t.tag || '').split(' ')[0].split('(')[0].trim();
                const registryEntry = (TOEIC_TAG_REGISTRY as any)[baseTag] || (TOEIC_TAG_REGISTRY as any)[t.tag];
                const rawLabel = registryEntry ? registryEntry.label : t.label;
                const cleaned = (rawLabel || '').replace(/^[A-Z]\d[\d\w]*[\.\s\-:]+/i, '').replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim();
                const finalLabel = cleaned || rawLabel || t.tag;

                let part = t.part;
                const p2Tags = ['Who', 'When', 'Where', 'Why', 'How', 'What', 'YesNo', 'Choice', 'Statement', 'Tag', 'Negative', 'Indirect'];
                if (p2Tags.includes(baseTag)) part = 'p2';
                return { tag: t.tag, label: finalLabel, incorrectCount: t.incorrectCount || t.incorrect || 0, part: part };
            }).filter((t: any) => targetPartList.length > 0 ? targetPartList.includes(t.part) : true);

            const tagsByPart: Record<string, any[]> = {};
            mappedWeakestTags.forEach((t: any) => {
                const p = t.part || '기타';
                if (!tagsByPart[p]) tagsByPart[p] = [];
                tagsByPart[p].push({ 유형명: t.label, 오답수: t.incorrectCount });
            });

            console.log('[WeeklyReport] Step 3: QuestionAssembler 시작');
            // 3. ✅ 과제 먼저 조립 (이후 AI 프롬프트에 주입하기 위해)
            const curriculum = await QuestionAssembler.assembleWeeklyCurriculum({
                userId,
                studentName: studentName || '학생',
                estScore: goals.currentEst || 0,
                weakestTags: mappedWeakestTags.slice(0, 4),
                weakestParts: targetPartList as string[],
                probeParts: auditResult.probes
            });
            const validCurriculum = curriculum.filter((a: any) => a !== null && a !== undefined);
            console.log('[WeeklyReport] Step 3: QuestionAssembler 완료. 과제수:', validCurriculum.length);

            // 4. AI 프롬프트 생성 (실제 과제 목록 포함)
            const prompt = this.buildPrompt(auditResult, tagsByPart, targetPartList, validCurriculum);

            // 5. AI 호출
            const apiKey = process.env.GEMINI_API_KEY;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

            console.log('[WeeklyReport] Step 5: Gemini API 호출 시작, prompt 길이:', prompt.length);
            const aiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            const aiData = await aiResponse.json();

            let aiText = "";
            if (aiData.candidates?.[0]?.content?.parts?.[0]?.text) {
                aiText = aiData.candidates[0].content.parts[0].text;
                console.log('[WeeklyReport] Gemini 호출 성공');
            } else {
                const errorDetail = aiData.error ? `${aiData.error.message} (${aiData.error.status})` : JSON.stringify(aiData);
                aiText = `## ⚠️ AI 분석 중 오류 발생\n\nAI가 리포트를 생성하는 과정에서 오류가 발생했습니다.\n\n**에러 상세:**\n\`\`\`json\n${errorDetail.slice(0, 300)}\n\`\`\`\n\n잠시 후 다시 시도해주세요.`;
                console.error('[WeeklyReport] Gemini 호출 실패:', errorDetail);
            }

            // 6. 과제 목록 append
            const assignmentList = validCurriculum.map((a: any) => `- ${a.title}`).join('\n');
            const finalAiText = aiText + `\n\n---\n\n## 📋 이번 주 과제 목록\n\n${assignmentList}\n\n*위 과제는 AI 분석을 바탕으로 자동 생성되었습니다.*`;

            // 7. DB 저장
            const batch = db.batch();
            const assignmentsRef = db.collection('Assignments');
            const oldAiSnap = await assignmentsRef.where('targetStudentId', '==', userId).where('isAiGenerated', '==', true).get();
            oldAiSnap.docs.forEach(doc => batch.delete(doc.ref));

            validCurriculum.forEach((assignment: any) => {
                const newDocRef = assignmentsRef.doc();

                // Replace placeholder with actual document ID if present
                if (assignment.homeworkUrl && assignment.homeworkUrl.includes('{assignmentId}')) {
                    assignment.homeworkUrl = assignment.homeworkUrl.replace('{assignmentId}', newDocRef.id);
                }

                batch.set(newDocRef, this._sanitize(assignment));
            });

            const userRef = db.collection('Winter_Users').doc(userId);
            const reportData = {
                latestWeeklyReport: {
                    content: finalAiText,
                    createdAt: new Date().toISOString(),
                    statsSummarized: {
                        totalSolved: auditResult.effort.solved || 0,
                        prediction: goals.currentEst || 0,
                        partAccuracies: Object.fromEntries(
                            Object.entries(stats.parts || {}).map(([p, s]: [string, any]) =>
                                [p, Math.round(s.solved > 0 ? (s.correct / s.solved) * 100 : 0)]
                            )
                        )
                    }
                }
            };
            batch.set(userRef, this._sanitize(reportData), { merge: true });
            await batch.commit();

            return { success: true, userId, studentName };

        } catch (error: any) {
            console.error(`Error in generateReportForUser for ${userId}:`, error);
            return { success: false, userId, studentName, error: error.message };
        }
    },

    buildPrompt(auditResult: any, tagsByPart: any, targetPartList: string[], curriculum: any[] = []) {
        const buildPartMission = (target: any, area: string) => {
            if (!target) return null; // 목표 달성 시 아예 배제하여 언급 금지
            const cur = target.currentItems ?? target.currentAccuracy;
            const tgt = target.targetItems ?? target.targetAccuracy;
            return `${area} [${target.part.toUpperCase()}] — 최근 실전 정답: ${cur}문항 (달성률 ${target.currentAccuracy}%) | 최종 목표: ${tgt}문항 | 차주 우선 목표: ${target.suggestedIncreaseItems}문항 추가 달성 (+${target.scoreImpact}점 기여 예상)`;
        };

        const missions = [
            buildPartMission(auditResult.targets.lc, 'LC 공략 파트'),
            buildPartMission(auditResult.targets.rc, 'RC 공략 파트')
        ].filter(Boolean).map(m => `   - ${m}`).join('\n');

        // 실제 과제 목록 요약
        const homeworkSummary = curriculum.length > 0
            ? curriculum.map((a: any) => `  - Day ${a.dayOffset}: ${a.title}`).join('\n')
            : '  (과제 데이터 로딩 실패)';

        return `
당신은 20년 경력의 베테랑 토익 전문가 '강쌤'입니다.
서버에서 수학적으로 계산된 **[사전 분석 데이터(Audit Data)]**를 바탕으로 주간 리포트를 작성하십시오.

**[절대 원칙]**
1. **데이터 조작 엄금**: 아래 수치를 100% 그대로 인용하십시오. 임의로 점수나 파트를 바꾸지 마십시오.
2. **추측 금지**: 제공된 데이터에 없는 내용은 작성하지 마십시오.
3. **어조**: 전문가답게 담백하고 현실적으로 (하십시오체 사용)

### 📊 [사전 분석 데이터]
1. **성적 추이**: [${auditResult.trend.status}] (지난 리포트 대비 ${auditResult.trend.value >= 0 ? '+' : ''}${auditResult.trend.value}점)
2. **성실도**: [${auditResult.effort.grade}] (주 ${auditResult.effort.days}일 / 총 ${auditResult.effort.solved}문항 / 약 ${auditResult.effort.time}분)
3. **파트별 공략 미션** (아래 나열된 파트, 즉 **진짜 약점**에 대해서만 진단과 목표를 작성하고 다른 영역은 일절 언급하지 마십시오.):
${missions}
4. **차주 목표 점수**: ${auditResult.nextWeekScoreGoal}점
5. **오답 유형 상세**:
${JSON.stringify(tagsByPart, null, 2)}

### 📚 [이번 주 실제 배정 과제 목록]
(아래 과제를 [\uc8fc간 처방] 에서 구체적으로 인용하십시오)
${homeworkSummary}

### [리포트 작성 가이드 (5-Stage)]
아래 순서와 제목을 정확히 따르십시오. 각 섹션 2~4문장.

1. **[종합 판정]**: 성적 추이(${auditResult.trend.status})와 성실도(${auditResult.effort.grade})를 결합하여 이번 주 학습을 냉정하게 평가하십시오.
2. **[약점 진단]**: 3번 항목에서 지적된 LC/RC 타겟 파트가 왜 가장 심각한 약점인지 이유를 진단하십시오. 오답 유형 데이터를 인용할 때는 어색한 시스템 태그 이름 그대로 쓰지 말고, 문맥을 살려 자연스러운 현상(예: '행사 세부 일정 파악 부족')으로 번역하여 서술하십시오. 오답 태그가 없을 경우에도 "미학습"이라는 터무니없는 단어를 쓰지 말고, 현 상황(목표 대비 부족)을 지적하십시오.
3. **[성장 제언]**: 발견된 가장 큰 갭(약점)을 어떤 방식과 마인드로 훈련하여 복구할 것인지 실질적인 학습 조언만 작성하십시오.
4. **[차주 목표]**: 위 "3. 파트별 공략 미션"과 "5. 차주 목표 점수" 값 외의 수치는 절대로 창작하지 마십시오. 두 공략 미션을 그대로 나열하고 예상 점수 상승분만 강조하십시오.
5. **[주간 처방]**: 위 과제 목록 [Day 1~6]의 리스트 형식 나열을 전면 금지합니다. 오직 배정된 과제들의 '학습 명칭'들을 자연스럽게 활용하여, 이번 주의 드릴(Drill)과 테스트 연습 전략을 요약하십시오. (예: "초반에는 [Part X 취약 유형 분석 훈련]으로 파훼하고, 후반에는 주어진 [취약 파트 실전 테스트]로 점검하십시오.") '하프 모의고사' 등 주어지지 않은 임의의 고유명사 창작을 절대 금지합니다.
`;
    },

    /**
     * Helper to ensure data is a plain JavaScript object for Firestore Admin
     */
    _sanitize(data: any): any {
        return JSON.parse(JSON.stringify(data, (key, value) =>
            value === undefined ? null : value
        ));
    }
};
