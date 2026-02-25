import { part3RealTests } from './toeic/listening/part3/tests';

export { type Part3Set, type Part3Question } from './toeic/listening/part3/tests';
export { part3RealTests };

export const getPart3QuestionByUniqueId = (uniqueId: string): { question: Part3Question, set: Part3Set } | null => {
  // Format: p3-t1-q32 or P3_T1_32 (legacy) or v3-p3-t01-q32 (new)
  const match = uniqueId.match(/(?:v\d+-)?p3[_-]t(\d+)[_-]q?(\d+)/i);
  if (!match) return null;

  const testId = parseInt(match[1]);
  const questionNoStr = match[2];

  // Try both legacy and new ID formats
  const legacyQuestionId = `p3-t${testId}-q${questionNoStr}`;
  const newQuestionId = `v3-p3-t${testId.toString().padStart(2, '0')}-q${questionNoStr}`;

  // Find the set containing this question
  for (const test of part3RealTests) {
    if (test.testId === testId) {
      for (const set of test.questions) {
        const question = set.questions.find(q =>
          q.id === legacyQuestionId ||
          q.id === newQuestionId ||
          q.id.toLowerCase() === `p3-t${testId}-q${parseInt(questionNoStr)}`
        );
        if (question) {
          return { question, set };
        }
      }
    }
  }
  return null;
};
