# Work Plan - Refining Re-solve Mode Logic across all TOEIC Parts

This plan addresses the issue where "Re-solve Mode" (Redo mode for incorrect questions) incorrectly presents all questions instead of only the incorrect ones. We will unify the logic across Parts 1-7 to ensure consistent behavior.

## Problem Analysis
- **Part 1 & 2**: State initialization for `originalAnswers` is sometimes inconsistent or missing.
- **Part 3 & 4**: The `activeSets` derivation logic fails to use `reviewSets` when `reSolveMode` is active.
- **Part 5**: (To be verified) but generally needs to ensure `originalAnswers` is used for filtering.
- **Part 6 & 7**: Rendering logic for questions within a passage/set does not respect `reSolveMode` filtering, showing all questions in the passage even if only one was incorrect.

## Proposed Changes

### 1. Part 1 Fixes (`src/app/homework/part1-real/test/[testId]/page.tsx`)
- Ensure `reSolveMode` initialization correctly sets `originalAnswers`.
- Verify `filteredQuestions` logic is robust.

### 2. Part 2 Fixes (`src/app/homework/part2/[testId]/page.tsx`)
- Add `setOriginalAnswers(mAnswers)` to the `fetchMockData` effect to ensure consistency with other parts.

### 3. Part 3 & 4 Fixes
- **Part 3** (`src/app/homework/part3/test/[testId]/page.tsx`): Update `activeSets` to `(reviewMode || reSolveMode) ? reviewSets : testSets`.
- **Part 4** (`src/app/homework/part4/test/[testId]/page.tsx`): Update `activeSets` to `(reviewMode || reSolveMode) ? reviewSets : testSets`.

### 4. Part 5 Fixes (`src/app/homework/part5-real/test/[testId]/page.tsx`)
- Verify and ensure `reSolveMode` correctly filters questions using `originalAnswers`.

### 5. Part 6 & 7 Fixes
- **Part 6** (`src/app/homework/part6/test/[testId]/page.tsx`):
    - Update the question rendering filter to include `reSolveMode`.
    - Ensure `activeQuestionId` defaults to the first incorrect question if available.
- **Part 7** (`src/app/homework/part7/test/[testId]/page.tsx`):
    - Update the question rendering filter to include `reSolveMode`.
    - Ensure `filteredSets` calculation is used consistently.

### 6. Verification
- Verify that only incorrect questions are displayed in `reSolveMode`.
- Verify that scoring at the end of `reSolveMode` is based on the filtered set of questions.
- Verify that moving between questions/sets works correctly within the filtered list.

## Execution Steps
1. [ ] Fix Part 1 and Part 2 initialization.
2. [ ] Fix Part 3 and Part 4 `activeSets` logic.
3. [ ] Fix Part 6 and Part 7 question filtering logic.
4. [ ] Verify Part 5 logic.
5. [ ] Final review and testing.
