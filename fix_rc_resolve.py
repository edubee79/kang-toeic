import os
import re

directories = [
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part5-real\test\[vol]\[testId]\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part6\test\[vol]\[testId]\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part7\single-passage\[vol]\[testId]\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part7\double-passage\[vol]\[testId]\page.tsx'
]

def fix_rc_file(path):
    if not os.path.exists(path):
        print(f"Not found: {path}")
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add states: reSolveMode, originalAnswers, reviewScore
    # We look for: const [isQuickReview, setIsQuickReview] = useState(false);
    state_anchor = "const [isQuickReview, setIsQuickReview] = useState(false);"
    state_injection = """const [isQuickReview, setIsQuickReview] = useState(false);
    const [reSolveMode, setReSolveMode] = useState(false);
    const [originalAnswers, setOriginalAnswers] = useState<Record<string, string>>({});
    const [reviewScore, setReviewScore] = useState<number>(0);"""
    
    if "const [reSolveMode" not in content and state_anchor in content:
        content = content.replace(state_anchor, state_injection)
        print("States injected.")

    # 2. Modify finishTest
    # We look for finishTest = async () => { ... }
    # Inside, we need to populate originalAnswers on first finish, and handle reSolveMode scoring on second finish.
    finish_anchor = "const finishTest = async () => {"
    finish_injection = """const finishTest = async () => {
        if (reSolveMode) {
            // Calculate reviewScore
            let rScore = 0;
            const targetQuestions = allQuestions.filter(q => originalAnswers[q.id] !== q.correctAnswer);
            targetQuestions.forEach(q => {
                if (selectedAnswers[q.id] === q.correctAnswer) rScore++;
            });
            setReviewScore(rScore);
            setShowCompletion(true);
            return;
        }"""
    if "if (reSolveMode) {" not in content and finish_anchor in content:
        content = content.replace(finish_anchor, finish_injection)

    # In finishTest, save originalAnswers:
    original_answers_save = """        setShowCompletion(true);
        setOriginalAnswers({...selectedAnswers});"""
    if "setOriginalAnswers" not in content and "setShowCompletion(true);" in content:
        # there are multiple setShowCompletion. Let's do it right after `setHistory(newHist);`
        hist_anchor = "setHistory(newHist);"
        if hist_anchor in content:
            content = content.replace(hist_anchor, hist_anchor + "\n        setOriginalAnswers({...selectedAnswers});")

    # 3. Update '틀린문제 다시풀기' button to use reSolveMode instead of reviewMode+!isQuickReview
    bt1_pattern = r'setReviewMode\(true\);\s*setIsQuickReview\(false\);\s*setSelectedAnswers\({}\);'
    bt1_repl = 'setReSolveMode(true);\n                                    setSelectedAnswers({});'
    content = re.sub(bt1_pattern, bt1_repl, content)

    # 4. Update the Completion UI for ReSolveMode/ReviewMode
    # Find:
    # if (showCompletion) {
    #     if (reviewMode || reSolveMode) {
    # Replace history.lastScore with reviewScore if it's reSolveMode.
    ui_pattern = r'<span className="text-6xl font-black text-white leading-none">\{history\.lastScore\}</span>'
    ui_repl = '<span className="text-6xl font-black text-white leading-none">{reSolveMode ? reviewScore : history.lastScore}</span>'
    content = re.sub(ui_pattern, ui_repl, content)

    # 5. Make sure "틀린문제 정답확인" from inside ReSolveMode uses 'originalAnswers' to filter, 
    # OR we just let it use selectedAnswers (which works because in ReSolveMode, selectedAnswers = their retake answers).
    # Wait, in the second completion screen (after reSolveMode), clicking '틀린문제 정답보기' should do:
    # setReviewMode(true); setIsQuickReview(true);
    # And since ReSolveMode is already true, it will show the passages.
    
    # 6. For the "틀린문제 정답확인", since `reSolveMode` is now true but `reviewMode` is false 
    # (actually wait, '틀린문제 정답확인' should keep `reSolveMode` true? No, in ReSolve screen, clicking "정답확인" does:)
    # setReviewMode(true); setIsQuickReview(true);
    # So both `reviewMode` and `reSolveMode` will be true. That's fine!

    # 7. One problem: `allQuestions` is not defined in Part 5. In Part 5 it's `testSet.questions`. 
    # Let's fix the `finish_injection` to use the correct array per file.
    
    if 'part5-real' in path:
        content = content.replace('allQuestions.filter', 'testSet.questions.filter')
        content = content.replace('allQuestions', 'testSet.questions')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

for p in directories:
    fix_rc_file(p)
