import { Part3Set, Part3Question } from './listening_types';
import { test1 } from './toeic/listening/part3/test1';
import { test2 } from './toeic/listening/part3/test2';
import { test3 } from './toeic/listening/part3/test3';
import { test4 } from './toeic/listening/part3/test4';
import { test5 } from './toeic/listening/part3/test5';
import { test6 } from './toeic/listening/part3/test6';
import { test7 } from './toeic/listening/part3/test7';
import { test8 } from './toeic/listening/part3/test8';
import { test9 } from './toeic/listening/part3/test9';
import { test10 } from './toeic/listening/part3/test10';

export { type Part3Set, type Part3Question };

export const part3RealTests: Part3Set[] = [
  ...test1,
  ...test2,
  ...test3,
  ...test4,
  ...test5,
  ...test6,
  ...test7,
  ...test8,
  ...test9,
  ...test10
];

export const getPart3QuestionByUniqueId = (uniqueId: string): { question: Part3Question, set: Part3Set } | null => {
  // Format: p3-t1-q32 or P3_T1_32
  const match = uniqueId.match(/p3[_-]t(\d+)[_-]q?(\d+)/i);
  if (!match) return null;

  const testId = parseInt(match[1]);
  const questionNoStr = match[2];
  const questionId = `p3-t${testId}-q${questionNoStr}`;

  // Find the set containing this question
  for (const set of part3RealTests) {
    if (set.testId === testId) {
      const question = set.questions.find(q => q.id === questionId || q.id.toLowerCase() === `p3-t${testId}-q${parseInt(questionNoStr)}`);
      if (question) {
        return { question, set };
      }
    }
  }
  return null;
};
