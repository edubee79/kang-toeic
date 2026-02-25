import { part4RealTests } from './toeic/listening/part4/tests';

export { type Part4Set, type Part4Question } from './toeic/listening/part4/tests';
export { part4RealTests as part4Data };

export const getPart4QuestionByUniqueId = (uniqueId: string): { question: Part4Question, set: Part4Set } | null => {
  // Format: p4-t1-q71 or P4_T1_71 (legacy) or v3-p4-t01-q71 (new)
  const match = uniqueId.match(/(?:v\d+-)?p4[_-]t(\d+)[_-]q?(\d+)/i);
  if (!match) return null;

  const testId = parseInt(match[1]);
  const questionNoStr = match[2];

  // Try both legacy and new ID formats
  const legacyQuestionId = `p4-t${testId}-q${questionNoStr}`;
  const newQuestionId = `v3-p4-t${testId.toString().padStart(2, '0')}-q${questionNoStr}`;

  // Find the set containing this question
  for (const test of part4RealTests) {
    if (test.testId === testId) {
      for (const set of test.questions) {
        const question = set.questions.find(q =>
          q.id === legacyQuestionId ||
          q.id === newQuestionId ||
          q.id.toLowerCase() === `p4-t${testId}-q${parseInt(questionNoStr)}`
        );
        if (question) {
          return { question, set };
        }
      }
    }
  }
  return null;
};
