"use client";

import React, { useState } from "react";

export default function StandardBase() {
    const [started, setStarted] = useState(false);

    const startTest = () => {
        const doc = document.documentElement;
        if (doc.requestFullscreen) {
            doc.requestFullscreen().catch((err) => console.log(err));
        }
        setStarted(true);
    };

    return (
        <>
            <style jsx global>{`
                /* 기본 설정: 화면 꽉 채우기 */
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { background-color: #1a1a1a; font-family: "Times New Roman", serif; overflow: hidden; }

                /* 인트로 화면 */
                .intro { 
                    position: fixed; inset: 0; background: #111; color: white; 
                    display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000; 
                }
                .start-btn { 
                    padding: 25px 80px; font-size: 28px; cursor: pointer; background: #007bff; 
                    color: white; border: none; border-radius: 5px; margin-top: 20px; font-weight: bold; 
                }

                /* 상단 상태바 */
                .status-bar { 
                    position: fixed; top: 0; width: 100%; height: 35px; background: #000; 
                    color: #ffd700; display: flex; align-items: center; justify-content: space-between; 
                    padding: 0 20px; font-size: 13px; z-index: 500; border-bottom: 1px solid #333; 
                }

                /* 모니터를 양옆으로 가르는 전체 컨테이너 */
                .spread-container {
                    display: flex; width: 100vw; height: calc(100vh - 85px); /* 하단바 50 + 상단 35 = 85 */
                    margin-top: 35px; background: #444; /* 중앙 구분선 대비색 */
                }

                /* 왼쪽/오른쪽 페이지 */
                .page {
                    flex: 1; background: white; padding: 40px 45px; overflow-y: auto;
                    display: grid; grid-template-columns: 1fr 1fr; /* 페이지 내 2단 분할 */
                    column-gap: 35px; align-content: start; border: 1px solid #ccc;
                }

                /* 페이지 머리말 */
                .page-header { 
                    grid-column: span 2; border-bottom: 2px solid #000; 
                    margin-bottom: 20px; padding-bottom: 5px; font-weight: bold; 
                    display: flex; justify-content: space-between; font-size: 18px;
                }

                /* 문제 세트 (Part 3 특유의 배치) */
                .question-set { margin-bottom: 35px; }
                .instruction { font-style: italic; font-size: 14px; margin-bottom: 12px; color: #222; font-weight: bold; }
                .q-item { margin-bottom: 18px; }
                .q-text { font-weight: bold; font-size: 15.5px; margin-bottom: 6px; display: block; }
                
                /* 선택지 레이아웃 */
                .options { font-size: 14.5px; }
                .opt { display: flex; align-items: flex-start; margin-bottom: 4px; cursor: pointer; padding: 2px; }
                .opt:hover { background: #f0f0f0; border-radius: 3px; }
                .opt input { margin-right: 10px; margin-top: 3px; cursor: pointer; }

                /* 하단 컨트롤 바 */
                .footer { 
                    position: fixed; bottom: 0; width: 100%; height: 50px; background: #111; 
                    display: flex; justify-content: center; align-items: center; gap: 50px; 
                }
                .nav-btn { padding: 8px 40px; background: #333; color: white; border: 1px solid #555; cursor: pointer; }
                .nav-btn:hover { background: #555; }
            `}</style>

            {!started && (
                <div className="intro">
                    <h1 style={{ fontSize: '45px' }}>TOEIC ACTUAL TEST 01</h1>
                    <p style={{ color: '#888' }}>LISTENING TEST - PART 3 (Questions 32-70)</p>
                    <button className="start-btn" onClick={startTest}>START TEST</button>
                </div>
            )}

            {started && (
                <>
                    <div className="status-bar">
                        <span>PART 3 - Conversations</span>
                        <span id="timer">45:00</span>
                    </div>

                    <div className="spread-container">

                        <div className="page">
                            <div className="page-header"><span>TEST 1</span><span>24</span></div>

                            <div className="question-set">
                                <p className="instruction">Questions 32-34 refer to the following conversation.</p>
                                <div className="q-item">
                                    <span className="q-text">32. Where most likely are the speakers?</span>
                                    <div className="options">
                                        <label className="opt"><input type="radio" name="q32" /> (A) At a pharmacy</label>
                                        <label className="opt"><input type="radio" name="q32" /> (B) At a bank</label>
                                        <label className="opt"><input type="radio" name="q32" /> (C) At a fitness center</label>
                                        <label className="opt"><input type="radio" name="q32" /> (D) At a medical clinic</label>
                                    </div>
                                </div>
                                <div className="q-item">
                                    <span className="q-text">33. What does the man say will happen in July?</span>
                                    <div className="options">
                                        <label className="opt"><input type="radio" name="q33" /> (A) A renovation will begin</label>
                                        <label className="opt"><input type="radio" name="q33" /> (B) A new branch will open</label>
                                        <label className="opt"><input type="radio" name="q33" /> (C) A contract will expire</label>
                                        <label className="opt"><input type="radio" name="q33" /> (D) A price increase will take effect</label>
                                    </div>
                                </div>
                                <div className="q-item">
                                    <span className="q-text">34. What does the man agree to do?</span>
                                    <div className="options">
                                        <label className="opt"><input type="radio" name="q34" /> (A) Submit a payment</label>
                                        <label className="opt"><input type="radio" name="q34" /> (B) Update a schedule</label>
                                        <label className="opt"><input type="radio" name="q34" /> (C) Sign a document</label>
                                        <label className="opt"><input type="radio" name="q34" /> (D) Provide a reference</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page">
                            <div className="page-header"><span>TEST 1</span><span>25</span></div>
                            <div style={{ gridColumn: 'span 2', textAlign: 'center', paddingTop: '100px', color: '#bbb', fontStyle: 'italic' }}>
                                <h2>RIGHT PAGE (44-55)</h2>
                                <p>동일한 방식으로 4세트의 문제를 추가할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <button className="nav-btn">PREVIOUS PAGE</button>
                        <button className="nav-btn" style={{ background: '#007bff', borderColor: '#007bff' }}>NEXT PAGE</button>
                    </div>
                </>
            )}
        </>
    );
}
