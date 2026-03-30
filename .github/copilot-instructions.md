# AI Copilot Instructions for TOEIC Learning Platform

## Project Overview
**깡쌤토익(Kang's TOEIC)**: A comprehensive Next.js-based TOEIC learning platform with AI-powered diagnosis, mock tests, homework systems, and personalized learning analytics. The platform serves Korean students with data-driven difficulty tracking and adaptive learning paths.

**Tech Stack**: Next.js 16, React 19, TypeScript, Firebase (Firestore + Auth), Tailwind CSS, Radix UI, Gemini AI API

---

## 🏗️ Critical Architecture Patterns

### Data Organization: Volume-Based Multi-Version System
- **V3 & V4 coexist** in production: Legacy data uses v3 (basic extraction), new data uses v4 (enhanced quality)
- **Mandatory ID Convention**: `v{Volume}-{Part}-t{Test}-q{Question}` (e.g., `v4-p2-t01-q07`)
- **File Structure**: Data lives in `src/data/toeic/v{N}/listening|reading/part{X}/` with `.ts` files
- **Volume Context**: Volume = problem set series (e.g., v3 = "기출문제집 3탄"). Always include vol number when querying/creating data

### Multi-Modal Question Structure
The same 7 parts demand 3 **incompatible option formats**:
- **Part 1–2 (LC)**: `options: {"A": "text", "B": "text", ...}` (string object)
- **Part 3–7 (conversation/RC)**: `options: {"A": {...}, "B": {...}, ...}` (nested object with label+text)
- **Field naming inconsistency**: LC Part 2 uses `questionType` (not `classification`) for backward compatibility
- **Code example**: Check `src/data/toeic/v4/listening/part2/v4_p2_t01.ts` and `src/data/toeic/v4/reading/part5/v4_p5_t01.ts` to see the contrast

### Answer Storage Standard
Firestore collection `Manager_Results` stores all answer submissions with 11 mandatory fields:
```
studentId, student, className, timestamp, testIndex, mode, type, unit, score, total, incorrectQuestions
```
- **`testIndex`**: Integer (1–20), NOT the file name. Critical for averaging calculations
- **`mode`**: "real" (actual test) | "drill" (practice) | "type_review" (weakness)
- **Double Support Pattern**: Code uses `item.correctAnswer || item.answer` to survive data migration
- **Recency Rule**: When calculating `_cur` (current score), always use **most recent submission by timestamp**, not by testIndex

---

## 📊 Data Standards & Glossary

### Master Reference Documents (Priority Order)
1. **`.agent/standards/01_DATA_STRUCTURE_STANDARD.md`**: Field definitions, ID conventions, global schema
2. **`.agent/standards/02_SYMBOL_CODEBOOK.md`**: 159 classification codes (e.g., `P1_HUMA`, `P2_INDIRECT`, `P3_A1`)
3. **`.agent/standards/03_LC_CRITERIA.md`** & **`.agent/standards/03_RC_CRITERIA.md`**: Logic rules for assigning codes
4. **`.agent/standards/04_LAYOUT_RENDERING_GUIDE.md`**: UI rendering (`docType`, markdown table syntax)

### Key Terminology
- **`correctAnswer`**: Standardized as "A"/"B"/"C"/"D" (Part 2 uses only A/B/C)
- **`classification`** (RC) vs **`questionType`** (LC): Same semantic role, different field names
- **`contextType`**: Internal analysis category (used in weakness reports, NOT visible to students)
- **`docType`**: UI rendering hint (EMAIL, ARTICLE, CHAT_MESSAGE, etc.)
- **Indirect (우회적 답변)**: Part 2 high-difficulty pattern where answer is contextually correct but not direct (e.g., "I'll check on that" instead of "yes/no"). **Highest priority in classification logic**

---

## 🔄 Critical Developer Workflows

### Data Extraction & Creation Pipeline
1. **Source Identification**: PDF (problem/answer key) → Image → Gemini Vision API
2. **Question Extraction**: Use `scripts/process-part{X}-gemini.ts` (Part 1) or `scripts/process-rc-universal.ts` (RC)
3. **Validation Checklist**:
   - All 6 questions per Part 1 present
   - Options/scripts match correct count (Part 2 = 3, others = 4)
   - Audio paths exist in `/public/audio/` or API
   - No duplicate/missing IDs
   - Classification codes match codebook

### Running Tests & Builds
```bash
npm run dev          # Next.js dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
npm run migrate      # Run data migration script (tsx)
```

### Key Scripts Location
- **Part 1 extraction**: `scripts/process-part1-gemini.ts`
- **RC bulk processing**: `scripts/process-rc-universal.ts`
- **Data audit/validation**: `check_questions.py`, `check_integrity_all.py`
- **Image verification**: `scripts/audit-part1-images.ts`

---

## 🚀 Component Architecture Patterns

### Mock Test System (Universal Runner Pattern)
- **Old Pattern** (deprecated): Hardcoded components like `MockTest_LC_Set9`
- **New Pattern** (v4): `Universal_LC_Runner` & `Universal_RC_Runner` accept dynamic data props
- **Data Injection**: Mock tests dynamically fetch data from `src/data/toeic/v{N}/` based on URL params
- **Reference**: `src/app/mock-test/full/[testId]/page.tsx`

### AI Tutor & Weakness Analysis
- **Entry Point**: `/api/ai-tutor/mock-diagnosis` (POST)
- **Logic**: Queries student's past attempts, passes through Gemini API, returns markdown report
- **Output Format**: Strictly non-technical (NO internal tags like `p1`, `nc1`, `wrongTags` in user-facing text)
- **File**: `src/app/api/ai-tutor/mock-diagnosis/route.ts`

### Learning Dashboard
- **Goal Tracking**: User model stores `p{N}_goal`, `p{N}_cur`, `p{N}_avg` (e.g., `p1_goal: 6`, `p2_cur: 28`)
- **Calculation Engine**: Score = (Listening × 5) + 10, Reading = (Correct × 5) - 10
- **Recency Rule**: Always fetch most recent `mode: "real"` submission by timestamp to populate `_cur`

---

## 🛡️ Project-Specific Rules & Constraints

### Data Integrity Rules (From `.agent/rules/rule1.md`)
1. **Standardization Mandatory**: Before modifying data in `src/data/`, ALWAYS check `.agent/standards/01~03` for compliance
2. **No Self-Modification**: If standard conflicts with existing data, STOP and report to user (don't auto-fix)
3. **Double Support Pattern**: Code must handle both `correctAnswer` and `answer` field names during transitions
4. **Classification Priority**: Part 2's `Indirect` type must be evaluated before generic types

### Communication & Execution Rules
- Tasks ending with `?` are **questions** → Answer only via text, NO code execution
- Tasks with imperative verbs ("해봐", "수정해") → Execute tools after proposing changes
- Complex logic changes → Propose architecture first, then implement after approval

### File Organization Standards
- **Source Code**: `src/{app,lib,components,services,types}`
- **Data Files**: `src/data/toeic/v{N}/{listening,reading}/part{X}/` (all `.ts`)
- **Agent Standards**: `.agent/standards/` (reference docs, not code)
- **Scripts**: `scripts/` (one-off extraction/validation utilities)
- **Public Assets**: `/public/audio/`, `/public/images/` (organized by test/part)

---

## 📈 Common Implementation Patterns

### Pattern 1: Conditional Option Rendering
```typescript
// Part 1-2: Direct access by letter
const optionText = question.options["A"];

// Part 3-7: Navigate nested structure
const optionContent = question.options["A"]?.text;
```

### Pattern 2: Classification Assignment
```typescript
// First, check for Indirect (Part 2 only)
if (isPart2Question && soundsLikeIndirectResponse(answer)) {
  classification = "Indirect";
}
// Then generic type matching
else if (startsWithWho(text)) classification = "Who";
else if (temporalKeywords.test(text)) classification = "When";
```

### Pattern 3: Firestore Score Query
```typescript
// Get most recent real-mode submission
const q = query(
  collection(db, "Manager_Results"),
  where("studentId", "==", uid),
  where("mode", "==", "real"),
  orderBy("timestamp", "desc"),
  limit(1)
);
```

---

## 🔍 Debugging & Investigation Workflow

### For Data Issues
1. Check if volume prefix exists in ID (`v4-p2-t01-q07` format)
2. Verify file location: `src/data/toeic/v{N}/listening|reading/part{X}/`
3. Cross-reference classification code against `02_SYMBOL_CODEBOOK.md`
4. Run: `check_questions.py` (validates Part X schema)

### For Scoring/Analytics Issues
1. Check `Manager_Results` Firestore collection for correct fields
2. Verify `timestamp` (NOT testIndex) is used for recency
3. Ensure formula: LC = (sum × 5) + 10, RC = (sum × 5) − 10
4. Look for double-field support: `item.correctAnswer || item.answer`

### For UI/Component Issues
1. Verify `options` structure matches Part range (string vs. nested object)
2. Check data injection point in URL/props (mock test runner)
3. Inspect browser console for missing audio paths
4. Ensure component accepts universal `MockTestLCDataStructure` or `MockTestRCDataStructure`

---

## 🚦 Before Starting Any Data Work

**Mandatory Checklist**:
- [ ] Read `.agent/standards/01_DATA_STRUCTURE_STANDARD.md` for schema
- [ ] Cross-reference `.agent/standards/02_SYMBOL_CODEBOOK.md` for classification codes
- [ ] Check target vol (v3 vs. v4) - they use different ID prefixes
- [ ] Validate new data against `check_questions.py` before commit
- [ ] Test mock test render with dynamic data injection

---

## 🔗 Key Reference Files
- Architecture Overview: `current_project.md`
- AI Tutor Plans: `AI_DIAGNOSIS_PLAN.md`, `AI_UTILIZATION_PLAN.md`
- Mock Test Design: `docs/MOCK_TEST_PLAN.md`
- Data Standards: `.agent/standards/` (01–05 hierarchy)

---

**Last Updated**: 2026-03-19 | **Owner**: Antigravity AI Assistant
