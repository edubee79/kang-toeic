# Part 6 Extraction Strategy & Analysis Notebook

This document records the iterative process of defining a robust extraction strategy for TOEIC Part 6 (Text Completion). The goal is to establish a "Perfect Prompting Rule" set that can be applied to future Part 6 and Part 7 tasks.

## 1. V13: "Surgical Extraction" (Pilot)
**Goal**: Solve the "Header Merging" issue where dates and salutations were seamlessly blended into the first paragraph of the text.
**Method**: 
- Extract one passage at a time.
- Request decomposed JSON with specific fields: `date_line`, `salutation`, `paragraphs`, `closing`.
- Enforce explicit `[ID]` marker placement.

**Outcome**:
- ✅ **Success**: Headers were successfully separated from the body text.
- ❌ **Failure**: 
    - Paragraphs were fragmented. AI treated every line break in the PDF as a new paragraph (e.g., "must be renewed" becoming a standalone paragraph).
    - Markers were sometimes drifted to the end of sentences.

## 2. V14: "Precision Layout" (Zone-Based Joining)
**Goal**: Solve the "Fragmented Paragraph" issue from V13.
**Method**:
- **Zone Structure**: Defined "Header Zone" (preserve lines) vs "Body Zone" (join lines).
- **Line Joining Rule**: "Join consecutive lines into a single string UNTIL a visible blank line appears."
- **Explicit newline preservation**: Double newlines for blank lines.

**Outcome**:
- ✅ **Success**: Body paragraphs became unified and readable (no more fragments).
- ✅ **Success**: Email headers (From/To) were preserved.
- ❌ **Failure (Critical)**:
    - **Missing Data**: In Letter types (Passage 4), the recipient's address was completely omitted.
    - **Missing Marker**: Question [145] was deleted during the line joining process because it lay on a boundary.
    - **Root Cause**: The "Header Zone" definition was too loose. AI didn't consider "Address" as part of the header. The "Join" rule was too aggressive, smoothing over markers as noise.

## 3. V14.1: "Document-Type Aware Layout" (Current)
**Goal**: Fix the "Missing Address" and "Missing Marker" issues by introducing document-type specific rules.
**Hypothesis**: Layout rules must be adaptive based on the document type (Letter vs. Email vs. Article).

**Proposed Rules**:
1.  **Classification First**: AI must identify the document type (Letter, Email, Article).
2.  **Type-Specific Header Logic**:
    *   **If Letter**: "Extract ALL text between Date and Salutation as header lines." (Captures Address)
    *   **If Email**: "Extract From/To/Date/Subject as distinct header lines."
3.  **Immutable Markers**: "Markers like [145] are critical tokens. Never remove them during line joining."
4.  **Strict Linearity**: "Follow the visual flow top-to-bottom. Do not skip any text block."

**Next Step**:
- Apply V14.1 logic to Test 1, Passage 4 (The broken Letter).
- Verify if the Address and [145] are restored.
