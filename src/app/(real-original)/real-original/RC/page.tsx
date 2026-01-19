"use client";

import React, { useState } from "react";
import OMRPanel from "../components/OMRPanel";
import { part5Questions } from '../data/part5_data';
import { part6Sets } from '../data/part6_data';

// --- INTEFACES FOR FIREBASE DATA ---
interface ExamQuestion {
    id: string; // Firebase ID
    number: number;
    text: string;
    options: string[]; // ["(A) ...", "(B) ..."]
    answer?: string; // stored securely
}

// TODO: In the future, this component will accept a `questions` prop fetched from Firebase/Firestore.
// The hardcoded loops (Array.from) will be replaced by `questions.map()`.

const RC_ExamTemplate_Data: React.FC = () => {
    const [currentSpread, setCurrentSpread] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(75 * 60); // 75 minutes

    const startTest = () => {
        const doc = document.documentElement;
        if (doc.requestFullscreen) {
            doc.requestFullscreen().catch((err) => console.log(err));
        }
        setIsStarted(true);
    };

    const nextSpread = () => {
        if (currentSpread < totalSpreads - 1) {
            setCurrentSpread(currentSpread + 1);
        }
    };

    const prevSpread = () => {
        if (currentSpread > 0) {
            setCurrentSpread(currentSpread - 1);
        }
    };

    const totalSpreads = 14; // 14 Spreads total for RC (Part 5: 0-1, Part 6: 1-3, Part 7: 3-13)

    // --- PART 5 RENDERER ---
    const renderPart5StartPage8Q = (startQ: number) => (
        <div className="page">
            <div className="directions-box">
                <div className="directions-title">READING TEST</div>
                In the Reading test, you will read a variety of texts and answer several different types of reading comprehension questions. The entire Reading test will last 75 minutes. There are three parts, and directions are given for each part. You are encouraged to answer as many questions as possible within the time allowed.
                <br /><br />
                You must mark your answers on the separate answer sheet. Do not write your answers in your test book.

                <div className="directions-part" style={{ marginTop: '20px' }}>PART 5</div>
                <strong>Directions:</strong> A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C), or (D) on your answer sheet.
            </div>

            <div className="page-row-content">
                <div className="sub-col">
                    {part5Questions.slice(0, 4).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <span className="q-text">{q.text}</span>
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sub-col">
                    {part5Questions.slice(4, 8).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <span className="q-text">{q.text}</span>
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer">
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderPart5Page12Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                <div className="sub-col">
                    {part5Questions.slice(8, 14).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <span className="q-text">{q.text}</span>
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sub-col">
                    {part5Questions.slice(14, 20).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <span className="q-text">{q.text}</span>
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    // Generic Page with 10 Questions (for Q121-130)
    const renderPart5Page10Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                <div className="sub-col">
                    {part5Questions.slice(20, 25).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <span className="q-text">{q.text}</span>
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sub-col">
                    {part5Questions.slice(25, 30).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <span className="q-text">{q.text}</span>
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    // --- PART 6 RENDERER ---
    const renderPart6SetContent = (setIndex: number) => {
        const set = part6Sets[setIndex];
        if (!set) return null;

        return (
            <div className="page" key={set.id}>
                <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px', marginTop: '10px' }}>
                    {set.title}
                </div>

                <div
                    style={{ border: '1px solid #ddd', padding: '20px', background: '#fdfdfd', marginBottom: '20px', fontSize: '15px', lineHeight: '1.8' }}
                    dangerouslySetInnerHTML={{ __html: set.content }}
                />

                <div className="page-row-content">
                    <div className="sub-col">
                        {set.questions.slice(0, 2).map((q) => (
                            <div key={q.id} className="question-set">
                                <div className="q-item">
                                    <div className="q-num">{q.id}.</div>
                                    <div className="q-body">
                                        <div className="options">
                                            {q.options.map((opt, idx) => (
                                                <label key={idx} className="opt">{opt}</label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sub-col">
                        {set.questions.slice(2, 4).map((q) => (
                            <div key={q.id} className="question-set">
                                <div className="q-item">
                                    <div className="q-num">{q.id}.</div>
                                    <div className="q-body">
                                        <div className="options">
                                            {q.options.map((opt, idx) => (
                                                <label key={idx} className="opt">{opt}</label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderPart6StartPage = () => (
        <div className="page">
            <div className="directions-box">
                <div className="directions-title">PART 6</div>
                <strong>Directions:</strong> Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each question are given below the text. Select the best answer to complete the text. Then mark the letter (A), (B), (C), or (D) on your answer sheet.
            </div>

            <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                {part6Sets[0].title}
            </div>

            <div
                style={{ border: '1px solid #ddd', padding: '20px', background: '#fdfdfd', marginBottom: '20px', fontSize: '15px', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: part6Sets[0].content }}
            />

            <div className="page-row-content">
                <div className="sub-col">
                    {part6Sets[0].questions.slice(0, 2).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sub-col">
                    {part6Sets[0].questions.slice(2, 4).map((q) => (
                        <div key={q.id} className="question-set">
                            <div className="q-item">
                                <div className="q-num">{q.id}.</div>
                                <div className="q-body">
                                    <div className="options">
                                        {q.options.map((opt, idx) => (
                                            <label key={idx} className="opt">{opt}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // --- PART 7 HELPERS ---
    const renderPart7PassageContent = (type: 'chat' | 'email' | 'article' | 'form') => {
        return (
            <div style={{ border: '1px solid #ccc', padding: '15px', background: '#fff', marginBottom: '20px', borderRadius: '5px' }}>
                {type === 'chat' && (
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', maxWidth: '400px', margin: '0 auto' }}>
                        <div style={{ alignSelf: 'flex-start', background: '#eee', padding: '8px 12px', borderRadius: '15px', marginBottom: '5px', maxWidth: '80%' }}>
                            <strong>Sam (10:15 AM)</strong>: Hey, just checking on the status of the report.
                        </div>
                        <div style={{ alignSelf: 'flex-end', background: '#dcf8c6', padding: '8px 12px', borderRadius: '15px', marginBottom: '5px', maxWidth: '80%' }}>
                            <strong>You (10:17 AM)</strong>: Almost done! Sending it in 10 mins.
                        </div>
                    </div>
                )}
                {type === 'email' && (
                    <div style={{ fontSize: '14.5px', lineHeight: '1.4' }}>
                        <strong>To:</strong> All Staff<br />
                        <strong>From:</strong> Management<br />
                        <strong>Subject:</strong> Office Renovation<br /><br />
                        Please be advised that the main lobby will be closed for renovation starting next Monday. All employees should use the side entrance until further notice. We apologize for the inconvenience.
                    </div>
                )}
                {type === 'article' && (
                    <div style={{ fontSize: '14.5px', lineHeight: '1.4', columnCount: 2, gap: '20px' }}>
                        <strong>Local Business Expands</strong><br /><br />
                        TECHTOWN - Local software company SoftCore announced today that it plans to open two new offices in the region. CEO John Smith stated that the expansion is due to increased demand for their cloud services. "We are excited to grow our team and serve more clients," Smith said during the press conference held yesterday.
                    </div>
                )}
                {type === 'form' && (
                    <div style={{ fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre' }}>
                        [ FEEDBACK FORM ]<br /><br />
                        Name: _________________<br />
                        Date: _________________<br />
                        Comments:<br />
                        [ x ] Excellent<br />
                        [   ] Good<br />
                        [   ] Poor
                    </div>
                )}
            </div>
        );
    };

    const renderPart7QuestionsContent = (startQ: number, count: number) => {
        return (
            <div className="page-row-content" style={{ flexWrap: 'wrap', gap: '10px' }}>
                {/* 2 QUESTIONS: 50% - 50% */}
                {count === 2 && (
                    Array.from({ length: 2 }, (_, i) => (
                        <div key={i} className="" style={{ width: 'calc(50% - 10px)' }}>
                            <div className="question-set">
                                <div className="q-item">
                                    <div className="q-num">{startQ + i}.</div>
                                    <div className="q-body">
                                        <span className="q-text">Generic question for {startQ + i}?</span>
                                        <div className="options">
                                            <label className="opt">(A) Option A</label>
                                            <label className="opt">(B) Option B</label>
                                            <label className="opt">(C) Option C</label>
                                            <label className="opt">(D) Option D</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {/* 3 QUESTIONS: Left 2, Right 1 */}
                {count === 3 && (
                    <>
                        <div className="sub-col">
                            {Array.from({ length: 2 }, (_, i) => (
                                <div key={i} className="question-set">
                                    <div className="q-item">
                                        <div className="q-num">{startQ + i}.</div>
                                        <div className="q-body">
                                            <span className="q-text">Generic question {startQ + i}?</span>
                                            <div className="options">
                                                <label className="opt">(A) Option A</label>
                                                <label className="opt">(B) Option B</label>
                                                <label className="opt">(C) Option C</label>
                                                <label className="opt">(D) Option D</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sub-col">
                            <div className="question-set">
                                <div className="q-item">
                                    <div className="q-num">{startQ + 2}.</div>
                                    <div className="q-body">
                                        <span className="q-text">Generic question {startQ + 2}?</span>
                                        <div className="options">
                                            <label className="opt">(A) Option A</label>
                                            <label className="opt">(B) Option B</label>
                                            <label className="opt">(C) Option C</label>
                                            <label className="opt">(D) Option D</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* 4 QUESTIONS: Vertical Columns (2 Left, 2 Right) */}
                {count === 4 && (
                    <>
                        <div className="sub-col">
                            {Array.from({ length: 2 }, (_, i) => (
                                <div key={i} className="question-set">
                                    <div className="q-item">
                                        <div className="q-num">{startQ + i}.</div>
                                        <div className="q-body">
                                            <span className="q-text">Generic question {startQ + i}?</span>
                                            <div className="options">
                                                <label className="opt">(A) Option A</label>
                                                <label className="opt">(B) Option B</label>
                                                <label className="opt">(C) Option C</label>
                                                <label className="opt">(D) Option D</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sub-col">
                            {Array.from({ length: 2 }, (_, i) => (
                                <div key={i} className="question-set">
                                    <div className="q-item">
                                        <div className="q-num">{startQ + 2 + i}.</div>
                                        <div className="q-body">
                                            <span className="q-text">Generic question {startQ + 2 + i}?</span>
                                            <div className="options">
                                                <label className="opt">(A) Option A</label>
                                                <label className="opt">(B) Option B</label>
                                                <label className="opt">(C) Option C</label>
                                                <label className="opt">(D) Option D</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* 5 QUESTIONS: Vertical Columns (3 Left, 2 Right) */}
                {count === 5 && (
                    <>
                        <div className="sub-col">
                            {Array.from({ length: 3 }, (_, i) => (
                                <div key={i} className="question-set">
                                    <div className="q-item">
                                        <div className="q-num">{startQ + i}.</div>
                                        <div className="q-body">
                                            <span className="q-text">Generic question {startQ + i}?</span>
                                            <div className="options">
                                                <label className="opt">(A) Option A</label>
                                                <label className="opt">(B) Option B</label>
                                                <label className="opt">(C) Option C</label>
                                                <label className="opt">(D) Option D</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sub-col">
                            {Array.from({ length: 2 }, (_, i) => (
                                <div key={i} className="question-set">
                                    <div className="q-item">
                                        <div className="q-num">{startQ + 3 + i}.</div>
                                        <div className="q-body">
                                            <span className="q-text">Generic question {startQ + 3 + i}?</span>
                                            <div className="options">
                                                <label className="opt">(A) Option A</label>
                                                <label className="opt">(B) Option B</label>
                                                <label className="opt">(C) Option C</label>
                                                <label className="opt">(D) Option D</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        )
    }

    // --- PART 7 RENDERER ---
    const renderPart7Page = (startQ: number, count: number, type: 'chat' | 'email' | 'article' | 'form' = 'email', isStart: boolean = false) => {
        let titleText = "text";
        if (type === 'chat') titleText = "text message chain";
        else if (type === 'email') titleText = "e-mail";
        else if (type === 'article') titleText = "article";
        else if (type === 'form') titleText = "form";

        let endQ = startQ + count - 1;

        return (
            <div className="page">
                {isStart && (
                    <div className="directions-box">
                        <div className="directions-title">PART 7</div>
                        <strong>Directions:</strong> In this part you will read a selection of texts, such as magazine and newspaper articles, e-mails, and instant message chats. Each text or set of texts is followed by several questions. Select the best answer for each question and mark the letter (A), (B), (C), or (D) on your answer sheet.
                    </div>
                )}

                <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                    Questions {startQ}-{endQ} refer to the following {titleText}.
                </div>

                {renderPart7PassageContent(type)}
                {renderPart7QuestionsContent(startQ, count)}
            </div>
        );
    };




    const renderSpread = () => {
        // Spread 0: Part 5 Start (Q101-108) + (Q109-120)
        if (currentSpread === 0) {
            return (
                <>
                    {renderPart5StartPage8Q(101)}
                    {renderPart5Page12Q(109)}
                </>
            );
        }
        else if (currentSpread === 1) {
            // Spread 1: Part 5 (Q121-130) + Part 6 Start (Q131-134)
            return (
                <>
                    {renderPart5Page10Q(121)}
                    {renderPart6StartPage()}
                </>
            );
        }
        else if (currentSpread === 2) {
            // Spread 2: Part 6 (Q135-138) + Part 6 (Q139-142)
            return (
                <>
                    {renderPart6SetContent(1)}
                    {renderPart6SetContent(2)}
                </>
            );
        }
        else if (currentSpread === 3) {
            // Spread 3: Part 6 (Q143-146) + Part 7 Start (Q147-148)
            return (
                <>
                    {renderPart6SetContent(3)}
                    {renderPart7Page(147, 2, 'chat', true)}
                </>
            );
        }
        else if (currentSpread === 4) {
            return (
                <>
                    {renderPart7Page(149, 2, 'email')}
                    {renderPart7Page(151, 2, 'form')}
                </>
            );
        }
        else if (currentSpread === 5) {
            return (
                <>
                    {renderPart7Page(153, 2, 'article')}
                    {renderPart7Page(155, 3, 'email')}
                </>
            );
        }
        else if (currentSpread === 6) {
            return (
                <>
                    {renderPart7Page(158, 3, 'article')}
                    {renderPart7Page(161, 3, 'chat')}
                </>
            );
        }
        else if (currentSpread === 7) {
            return (
                <>
                    {renderPart7Page(164, 4, 'article')}
                    {renderPart7Page(168, 4, 'email')}
                </>
            );
        }
        else if (currentSpread === 8) {
            // Spread 8 (Q172-175): Full Spread Single Passage
            return (
                <>
                    <div className="page">
                        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                            Questions 172-175 refer to the following form.
                        </div>
                        {renderPart7PassageContent('form')}
                    </div>
                    <div className="page">
                        <div style={{ marginTop: '30px' }}>
                            {renderPart7QuestionsContent(172, 4)}
                        </div>
                    </div>
                </>
            );
        }
        else if (currentSpread === 9) {
            // Spread 9 (Q176-180): Double Passage 1
            return (
                <>
                    <div className="page">
                        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                            Questions 176-180 refer to the following e-mail and form.
                        </div>
                        {renderPart7PassageContent('email')}
                        {renderPart7PassageContent('form')}
                    </div>
                    <div className="page">
                        <div style={{ marginTop: '30px' }}>
                            {renderPart7QuestionsContent(176, 5)}
                        </div>
                    </div>
                </>
            );
        }
        else if (currentSpread === 10) {
            // Spread 10 (Q181-185): Double Passage 2
            return (
                <>
                    <div className="page">
                        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                            Questions 181-185 refer to the following article and e-mail.
                        </div>
                        {renderPart7PassageContent('article')}
                        {renderPart7PassageContent('email')}
                    </div>
                    <div className="page">
                        <div style={{ marginTop: '30px' }}>
                            {renderPart7QuestionsContent(181, 5)}
                        </div>
                    </div>
                </>
            );
        }
        else if (currentSpread === 11) {
            // Triple Passage 1 (Q186-190)
            return (
                <>
                    <div className="page">
                        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                            Questions 186-190 refer to the following e-mail, schedule, and article.
                        </div>
                        {renderPart7PassageContent('email')}
                        {renderPart7PassageContent('form')}
                    </div>
                    <div className="page">
                        <div style={{ marginBottom: '20px' }}>
                            {renderPart7PassageContent('article')}
                        </div>
                        <div>
                            {renderPart7QuestionsContent(186, 5)}
                        </div>
                    </div>
                </>
            );
        }
        else if (currentSpread === 12) {
            // Triple Passage 2 (Q191-195)
            return (
                <>
                    <div className="page">
                        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                            Questions 191-195 refer to the following notice, order form, and e-mail.
                        </div>
                        {renderPart7PassageContent('article')}
                        {renderPart7PassageContent('form')}
                    </div>
                    <div className="page">
                        <div style={{ marginBottom: '20px' }}>
                            {renderPart7PassageContent('email')}
                        </div>
                        <div>
                            {renderPart7QuestionsContent(191, 5)}
                        </div>
                    </div>
                </>
            );
        }
        else if (currentSpread === 13) {
            // Triple Passage 3 (Q196-200)
            return (
                <>
                    <div className="page">
                        <div style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14.5px' }}>
                            Questions 196-200 refer to the following memo, table, and email.
                        </div>
                        {renderPart7PassageContent('article')}
                        {renderPart7PassageContent('form')}
                    </div>
                    <div className="page">
                        <div style={{ marginBottom: '20px' }}>
                            {renderPart7PassageContent('email')}
                        </div>
                        <div>
                            {renderPart7QuestionsContent(196, 5)}
                        </div>
                    </div>
                </>
            );
        }
    };

    // --- TIMER LOGIC ---
    // timeLeft is already declared at the top

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isStarted && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isStarted, timeLeft]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <style jsx global>{`
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { background-color: #1a1a1a; font-family: "Times New Roman", serif; overflow: hidden; }

                .intro { 
                    position: fixed; inset: 0; background: #111; color: white; 
                    display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000; 
                }
                .start-btn { 
                    padding: 25px 80px; font-size: 28px; cursor: pointer; background: #007bff; 
                    color: white; border: none; border-radius: 5px; margin-top: 20px; font-weight: bold; 
                }

                .master-layout {
                    display: flex; width: 100vw; height: calc(100vh - 50px);
                }
                .spread-container {
                    display: flex; width: 90%; height: 100%; background: #444; 
                }
                .omr-wrapper {
                    width: 10%; height: 100%;
                }

                .page {
                    flex: 1; background: white; padding: 30px 40px; 
                    overflow-y: auto;
                    border-right: 1px solid #ccc;
                    display: flex;
                    flex-direction: column;
                    color: black; /* Core Fix: Ensure text is visible */
                }
                .page:last-child { border-right: none; }
                
                .page-row-content {
                    display: flex;
                    gap: 30px;
                    flex: 1;
                }
                
                .sub-col {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .directions-box {
                    border: 1px solid #000;
                    padding: 15px;
                    margin-bottom: 30px;
                    font-size: 14px;
                    line-height: 1.4;
                    width: 100%;
                }
                .directions-title {
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 5px;
                }

                .footer { 
                    position: fixed; bottom: 0; width: 100%; height: 50px; background: #000; 
                    display: flex; justify-content: space-between; align-items: center; 
                    padding: 0 30px; z-index: 500; font-size: 14px;
                }
                .footer-left { color: #ffd700; width: 200px; font-weight: bold; letter-spacing: 0.5px; }
                .footer-center { display: flex; gap: 20px; }
                .footer-right { color: #ffd700; width: 200px; text-align: right; font-family: monospace; font-size: 16px; font-weight: bold; }
                
                .nav-btn { padding: 8px 30px; background: #333; color: white; border: 1px solid #555; cursor: pointer; font-size: 13px; font-weight: bold; }
                .nav-btn:hover { background: #555; }
                .nav-btn:disabled { opacity: 0.5; cursor: not-allowed; }

                /* --- EXAM TYPOGRAPHY (RC) --- */
                .question-set { 
                    margin-bottom: 15px; 
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee; /* Lighter separator for Part 5 */
                    break-inside: avoid; 
                }
                .question-set:last-child { border-bottom: none; }
                
                .q-item { 
                    margin-bottom: 10px; 
                    display: flex;
                    align-items: flex-start; /* Ensure top alignment */
                }

                .q-num {
                     min-width: 34px; /* Tighter space for "101." */
                     font-weight: bold;
                     font-size: 15px;
                     line-height: 1.3; /* Match text line-height */
                }

                .q-body {
                    flex: 1;
                }
                
                .q-text { 
                    font-weight: normal; 
                    font-size: 15px; 
                    margin-bottom: 5px; /* Reduced margin */
                    display: block; 
                    line-height: 1.3;
                }
                
                .options { 
                    font-size: 14.5px; 
                    display: flex;
                    flex-direction: column;
                    gap: 1px; /* Tighter spacing */
                }
                
                .opt { 
                    display: flex;
                    align-items: flex-start; 
                    cursor: pointer; 
                    padding: 0 4px; /* Reduced vertical padding */
                    line-height: 1.3;
                }
                .opt:hover { background: #eef; }
            `}</style>

            {!isStarted && (
                <div className="intro">
                    <h1 style={{ fontSize: '45px' }}>RC SECTION (Part 5-7)</h1>
                    <p style={{ color: '#888' }}>Reading Comprehension</p>
                    <button className="start-btn" onClick={startTest}>START RC</button>
                </div>
            )}

            {isStarted && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, background: '#1a1a1a' }}>
                    <div className="master-layout">
                        <div className="spread-container">
                            {renderSpread()}
                        </div>

                        <div className="omr-wrapper">
                            <OMRPanel />
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-left">TEST 01</div>
                        <div className="footer-center">
                            <button className="nav-btn" onClick={prevSpread} disabled={currentSpread === 0}>PREVIOUS</button>
                            <span style={{ color: 'white', alignSelf: 'center' }}>SPREAD {currentSpread + 1} / {totalSpreads}</span>
                            <button className="nav-btn" onClick={nextSpread} disabled={currentSpread === totalSpreads - 1}>NEXT</button>
                        </div>
                        <div className="footer-right">
                            Time Remaining: {formatTime(timeLeft)}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RC_ExamTemplate_Data;
