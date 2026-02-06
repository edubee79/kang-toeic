import { Part4Set, Part4Question } from './listening_types';
import { test1 } from './toeic/listening/part4/test1';
import { test2 } from './toeic/listening/part4/test2';
import { test3 } from './toeic/listening/part4/test3';
import { test4 } from './toeic/listening/part4/test4';
import { test5 } from './toeic/listening/part4/test5';
import { test6 } from './toeic/listening/part4/test6';
import { test7 } from './toeic/listening/part4/test7';
import { test8 } from './toeic/listening/part4/test8';
import { test9 } from './toeic/listening/part4/test9';
import { test10 } from './toeic/listening/part4/test10';

export { type Part4Set, type Part4Question };

export const part4Data: Part4Set[] = [
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

export const getPart4QuestionByUniqueId = (uniqueId: string): { question: Part4Question, set: Part4Set } | null => {
  // Format: p4-t1-q71 or P4_T1_71
  const match = uniqueId.match(/p4[_-]t(\d+)[_-]q?(\d+)/i);
  if (!match) return null;

  const testId = parseInt(match[1]);
  const questionNoStr = match[2];
  const questionId = `p4-t${testId}-q${questionNoStr}`;

  // Find the set containing this question
  for (const set of part4Data) {
    if (set.testId === testId) {
      const question = set.questions.find(q => q.id === questionId || q.id.toLowerCase() === `p4-t${testId}-q${parseInt(questionNoStr)}`);
      if (question) {
        return { question, set };
      }
    }
  }
  return null;
};