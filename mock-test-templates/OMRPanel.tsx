"use client";

import React from "react";

// Extracted from User's "PDF Viewer" code
// .omr-panel { width: 10%; ... }
// .omr-row { margin-bottom: 8px; ... }

export default function OMRPanel() {
    // Generate numbers 1 to 200
    const questions = Array.from({ length: 200 }, (_, i) => i + 1);

    return (
        <div className="omr-panel">
            <style jsx>{`
                .omr-panel {
                    width: 100%; /* Parent controls width (10%) */
                    height: 100%;
                    background: #ffffff;
                    border-left: 1px solid #ccc;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 15px 0;
                }
                .omr-row {
                    margin-bottom: 8px;
                    font-size: 13px;
                    font-weight: bold;
                    color: #444;
                    display: flex;
                    align-items: center;
                }
                .omr-row input {
                    margin: 0 2px;
                    cursor: pointer;
                }
                .omr-num {
                    display: inline-block;
                    width: 30px;
                    text-align: right;
                    margin-right: 5px;
                }
            `}</style>

            <b style={{ marginBottom: '15px', borderBottom: '2px solid #333', width: '80%', textAlign: 'center', paddingBottom: '5px', display: 'block' }}>
                OMR
            </b>

            {questions.map((qNum) => (
                <div key={qNum} className="omr-row">
                    <span className="omr-num">{String(qNum).padStart(3, '0')}</span>
                    <input type="radio" name={`q${qNum}`} />
                    <input type="radio" name={`q${qNum}`} />
                    <input type="radio" name={`q${qNum}`} />
                    <input type="radio" name={`q${qNum}`} />
                </div>
            ))}
        </div>
    );
}
