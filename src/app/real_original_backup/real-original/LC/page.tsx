"use client";

import React, { useState } from "react";
import OMRPanel from "../components/OMRPanel";

export default function LC_ExamTemplate() {
    const [currentSpread, setCurrentSpread] = useState(0);
    const [started, setStarted] = useState(false);

    const startTest = () => {
        const doc = document.documentElement;
        if (doc.requestFullscreen) {
            doc.requestFullscreen().catch((err) => console.log(err));
        }
        setStarted(true);
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

    const totalSpreads = 6; // Spreads 0-5

    const renderPart3Page12Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                {/* Left Column: 6 questions */}
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ}. What is the conversation mainly about?</span>
                            <div className="options">
                                <label className="opt"> (A) A new policy</label>
                                <label className="opt"> (B) A project deadline</label>
                                <label className="opt"> (C) A staffing change</label>
                                <label className="opt"> (D) A budget proposal</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 1}. What does the man suggest?</span>
                            <div className="options">
                                <label className="opt"> (A) Hiring more staff</label>
                                <label className="opt"> (B) Extending a deadline</label>
                                <label className="opt"> (C) Reducing costs</label>
                                <label className="opt"> (D) Updating software</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 2}. What will the woman do next?</span>
                            <div className="options">
                                <label className="opt"> (A) Schedule a meeting</label>
                                <label className="opt"> (B) Review a document</label>
                                <label className="opt"> (C) Call a client</label>
                                <label className="opt"> (D) Send an email</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 3}. Where do the speakers work?</span>
                            <div className="options">
                                <label className="opt"> (A) At a bank</label>
                                <label className="opt"> (B) At a hospital</label>
                                <label className="opt"> (C) At a design firm</label>
                                <label className="opt"> (D) At a library</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 4}. What problem is mentioned?</span>
                            <div className="options">
                                <label className="opt"> (A) A computer error</label>
                                <label className="opt"> (B) A missing file</label>
                                <label className="opt"> (C) A scheduling conflict</label>
                                <label className="opt"> (D) A broken machine</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 5}. What does the man offer to do?</span>
                            <div className="options">
                                <label className="opt"> (A) Fix a device</label>
                                <label className="opt"> (B) Check a schedule</label>
                                <label className="opt"> (C) Order a replacement</label>
                                <label className="opt"> (D) Provide instructions</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: 6 questions */}
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 6}. Who is the woman talking to?</span>
                            <div className="options">
                                <label className="opt"> (A) A coworker</label>
                                <label className="opt"> (B) A client</label>
                                <label className="opt"> (C) A manager</label>
                                <label className="opt"> (D) A technician</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 7}. What is the topic of the discussion?</span>
                            <div className="options">
                                <label className="opt"> (A) A marketing campaign</label>
                                <label className="opt"> (B) A product launch</label>
                                <label className="opt"> (C) office renovations</label>
                                <label className="opt"> (D) Employee training</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 8}. What did the man do yesterday?</span>
                            <div className="options">
                                <label className="opt"> (A) Submitted a report</label>
                                <label className="opt"> (B) Met with a supplier</label>
                                <label className="opt"> (C) Attended a conference</label>
                                <label className="opt"> (D) Conducted a survey</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 9}. What does the woman ask for?</span>
                            <div className="options">
                                <label className="opt"> (A) A refund</label>
                                <label className="opt"> (B) A receipt</label>
                                <label className="opt"> (C) A discount</label>
                                <label className="opt"> (D) A warranty</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 10}. What does the man explain?</span>
                            <div className="options">
                                <label className="opt"> (A) A store policy</label>
                                <label className="opt"> (B) A product feature</label>
                                <label className="opt"> (C) A service fee</label>
                                <label className="opt"> (D) A delivery schedule</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 11}. What will the woman do next?</span>
                            <div className="options">
                                <label className="opt"> (A) Speak to a manager</label>
                                <label className="opt"> (B) Fill out a form</label>
                                <label className="opt"> (C) Return an item</label>
                                <label className="opt"> (D) Make a payment</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '10px', color: '#666' }}>
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderPart3Page9Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                {/* Left Column: 6 questions (2 sets) */}
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ}. What are the speakers discussing?</span>
                            <div className="options">
                                <label className="opt"> (A) A travel itinerary</label>
                                <label className="opt"> (B) A hotel reservation</label>
                                <label className="opt"> (C) A flight cancellation</label>
                                <label className="opt"> (D) A car rental</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 1}. What does the man imply when he says "The weather might be bad"?</span>
                            <div className="options">
                                <label className="opt"> (A) He wants to stay indoors</label>
                                <label className="opt"> (B) They should leave early</label>
                                <label className="opt"> (C) An event might be postponed</label>
                                <label className="opt"> (D) They need different clothes</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 2}. What does the woman suggest?</span>
                            <div className="options">
                                <label className="opt"> (A) Taking a train</label>
                                <label className="opt"> (B) Checking online</label>
                                <label className="opt"> (C) Calling an agent</label>
                                <label className="opt"> (D) Booking a different date</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 3}. What is the man concerned about?</span>
                            <div className="options">
                                <label className="opt"> (A) The cost of a service</label>
                                <label className="opt"> (B) The quality of a product</label>
                                <label className="opt"> (C) The location of a venue</label>
                                <label className="opt"> (D) The duration of a meeting</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 4}. What does the woman say she will do?</span>
                            <div className="options">
                                <label className="opt"> (A) Provide a detailed estimate</label>
                                <label className="opt"> (B) Offer a discount</label>
                                <label className="opt"> (C) Guarantee a result</label>
                                <label className="opt"> (D) Recommend another option</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 5}. What does the man ask for?</span>
                            <div className="options">
                                <label className="opt"> (A) A reference list</label>
                                <label className="opt"> (B) A sample of work</label>
                                <label className="opt"> (C) A written contract</label>
                                <label className="opt"> (D) An extended warranty</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: Graphic + 3 questions (1 set) */}
                <div className="sub-col">
                    <div style={{ border: '2px solid #666', height: '325px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Graphic for Questions {startQ + 6}-{startQ + 8}]
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 6}. Look at the graphic. Which option does the man choose?</span>
                            <div className="options">
                                <label className="opt"> (A) Option 1</label>
                                <label className="opt"> (B) Option 2</label>
                                <label className="opt"> (C) Option 3</label>
                                <label className="opt"> (D) Option 4</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 7}. What is the benefit of the chosen option?</span>
                            <div className="options">
                                <label className="opt"> (A) It is the cheapest</label>
                                <label className="opt"> (B) It is the fastest</label>
                                <label className="opt"> (C) It includes insurance</label>
                                <label className="opt"> (D) It has higher quality</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 8}. What will the speakers do next?</span>
                            <div className="options">
                                <label className="opt"> (A) Sign a contract</label>
                                <label className="opt"> (B) Make a payment</label>
                                <label className="opt"> (C) Schedule an appointment</label>
                                <label className="opt"> (D) Confirm the details</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '10px', color: '#666' }}>
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderPart3Page6Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                {/* Left Column: Graphic + 3 questions */}
                <div className="sub-col">
                    <div style={{ border: '2px solid #666', height: '338px', background: '#f5f5f5', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Graphic for Questions {startQ}-{startQ + 2}]
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ}. Look at the graphic. What is the woman asking about?</span>
                            <div className="options">
                                <label className="opt"> (A) Item A</label>
                                <label className="opt"> (B) Item B</label>
                                <label className="opt"> (C) Item C</label>
                                <label className="opt"> (D) Item D</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 1}. What does the man mention about the item?</span>
                            <div className="options">
                                <label className="opt"> (A) It is currently unavailable</label>
                                <label className="opt"> (B) It is on sale</label>
                                <label className="opt"> (C) It comes in different colors</label>
                                <label className="opt"> (D) It is being discontinued</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 2}. What does the woman decide to do?</span>
                            <div className="options">
                                <label className="opt"> (A) Place an order</label>
                                <label className="opt"> (B) Wait for a restock</label>
                                <label className="opt"> (C) Choose a different item</label>
                                <label className="opt"> (D) Visit another store</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: Graphic + 3 questions */}
                <div className="sub-col">
                    <div style={{ border: '2px solid #666', height: '338px', background: '#f5f5f5', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Graphic for Questions {startQ + 3}-{startQ + 5}]
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 3}. Look at the graphic. Where will the man go next?</span>
                            <div className="options">
                                <label className="opt"> (A) Location 1</label>
                                <label className="opt"> (B) Location 2</label>
                                <label className="opt"> (C) Location 3</label>
                                <label className="opt"> (D) Location 4</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 4}. What is the purpose of the man's visit?</span>
                            <div className="options">
                                <label className="opt"> (A) To attend a meeting</label>
                                <label className="opt"> (B) To make a delivery</label>
                                <label className="opt"> (C) To inspect a site</label>
                                <label className="opt"> (D) To pick up a package</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 5}. What does the woman remind the man to do?</span>
                            <div className="options">
                                <label className="opt"> (A) Wear safety gear</label>
                                <label className="opt"> (B) Sign in at reception</label>
                                <label className="opt"> (C) Bring his ID badge</label>
                                <label className="opt"> (D) Call when he arrives</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '10px', color: '#666' }}>
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderPart4StartPage12Q = (startQ: number) => (
        <div className="page">
            <div className="directions-box">
                <div className="directions-title">PART 4</div>
                <strong>Directions:</strong> You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet. The talks will not be printed in your test book and will be spoken only one time.
            </div>
            <div className="page-row-content">
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ}. What is the talk mainly about?</span>
                            <div className="options">
                                <label className="opt">(A) A business merger</label>
                                <label className="opt">(B) A new product</label>
                                <label className="opt">(C) A retirement party</label>
                                <label className="opt">(D) A training session</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 1}. Who is the speaker addressing?</span>
                            <div className="options">
                                <label className="opt">(A) Sales representatives</label>
                                <label className="opt">(B) New employees</label>
                                <label className="opt">(C) Board members</label>
                                <label className="opt">(D) Factory workers</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 2}. What will happen next?</span>
                            <div className="options">
                                <label className="opt">(A) A video will be shown</label>
                                <label className="opt">(B) Lunch will be served</label>
                                <label className="opt">(C) A tour will begin</label>
                                <label className="opt">(D) Questions will be answered</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 3}. What problem does the speaker mention?</span>
                            <div className="options">
                                <label className="opt">(A) Low sales figures</label>
                                <label className="opt">(B) Technical difficulties</label>
                                <label className="opt">(C) Staff shortages</label>
                                <label className="opt">(D) Budget cuts</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 4}. What solution is proposed?</span>
                            <div className="options">
                                <label className="opt">(A) Hiring consultants</label>
                                <label className="opt">(B) Upgrading equipment</label>
                                <label className="opt">(C) Reducing hours</label>
                                <label className="opt">(D) Increasing prices</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 5}. When will the change take effect?</span>
                            <div className="options">
                                <label className="opt">(A) Immediately</label>
                                <label className="opt">(B) Next week</label>
                                <label className="opt">(C) Next month</label>
                                <label className="opt">(D) Next year</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 6}. What implies the listeners should do?</span>
                            <div className="options">
                                <label className="opt">(A) Sign a document</label>
                                <label className="opt">(B) Visit a website</label>
                                <label className="opt">(C) Call a number</label>
                                <label className="opt">(D) Attend a meeting</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 7}. What feature is highlighted?</span>
                            <div className="options">
                                <label className="opt">(A) Durability</label>
                                <label className="opt">(B) Portability</label>
                                <label className="opt">(C) Affordability</label>
                                <label className="opt">(D) Speed</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 8}. How can listeners get more information?</span>
                            <div className="options">
                                <label className="opt">(A) By reading a brochure</label>
                                <label className="opt">(B) By asking a clerk</label>
                                <label className="opt">(C) By watching a demo</label>
                                <label className="opt">(D) By sending an email</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 9}. What is the destination of the tour?</span>
                            <div className="options">
                                <label className="opt">(A) A historical site</label>
                                <label className="opt">(B) A factory</label>
                                <label className="opt">(C) A museum</label>
                                <label className="opt">(D) A park</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 10}. What should participants bring?</span>
                            <div className="options">
                                <label className="opt">(A) Identification</label>
                                <label className="opt">(B) Lunch</label>
                                <label className="opt">(C) Comfortable shoes</label>
                                <label className="opt">(D) A camera</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 11}. What time will the group return?</span>
                            <div className="options">
                                <label className="opt">(A) At 3:00 PM</label>
                                <label className="opt">(B) At 4:00 PM</label>
                                <label className="opt">(C) At 5:00 PM</label>
                                <label className="opt">(D) At 6:00 PM</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '10px', color: '#666' }}>
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderPart4Page12Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ}. What is the main topic of the report?</span>
                            <div className="options">
                                <label className="opt">(A) Market trends</label>
                                <label className="opt">(B) Customer satisfaction</label>
                                <label className="opt">(C) Production costs</label>
                                <label className="opt">(D) Employee benefits</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 1}. What does the speaker recommend?</span>
                            <div className="options">
                                <label className="opt">(A) Expanding to new markets</label>
                                <label className="opt">(B) Cutting expenses</label>
                                <label className="opt">(C) Hiring more staff</label>
                                <label className="opt">(D) Improving quality control</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 2}. According to the speaker, what is the biggest challenge?</span>
                            <div className="options">
                                <label className="opt">(A) Competition</label>
                                <label className="opt">(B) Regulation</label>
                                <label className="opt">(C) Supply chain issues</label>
                                <label className="opt">(D) Labor shortage</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 3}. Who is the broadcast for?</span>
                            <div className="options">
                                <label className="opt">(A) Commuters</label>
                                <label className="opt">(B) Investors</label>
                                <label className="opt">(C) Students</label>
                                <label className="opt">(D) Tourists</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 4}. What will happen on Monday?</span>
                            <div className="options">
                                <label className="opt">(A) A road closure</label>
                                <label className="opt">(B) A new bus route</label>
                                <label className="opt">(C) A fare increase</label>
                                <label className="opt">(D) A station opening</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 5}. What are listeners advised to do?</span>
                            <div className="options">
                                <label className="opt">(A) Leave early</label>
                                <label className="opt">(B) Use alternative transport</label>
                                <label className="opt">(C) Buy tickets online</label>
                                <label className="opt">(D) Check the weather</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-col">
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 6}. What kind of event is this?</span>
                            <div className="options">
                                <label className="opt">(A) An award ceremony</label>
                                <label className="opt">(B) A charity fundraiser</label>
                                <label className="opt">(C) A retirement dinner</label>
                                <label className="opt">(D) A product launch</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 7}. Who is the guest speaker?</span>
                            <div className="options">
                                <label className="opt">(A) A famous actor</label>
                                <label className="opt">(B) A successful entrepreneur</label>
                                <label className="opt">(C) A local politician</label>
                                <label className="opt">(D) A renowned scientist</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 8}. What will guests receive?</span>
                            <div className="options">
                                <label className="opt">(A) A gift bag</label>
                                <label className="opt">(B) A signed book</label>
                                <label className="opt">(C) A discount voucher</label>
                                <label className="opt">(D) A certificate</label>
                            </div>
                        </div>
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 9}. What is the purpose of the call?</span>
                            <div className="options">
                                <label className="opt">(A) To schedule an interview</label>
                                <label className="opt">(B) To confirm a reservation</label>
                                <label className="opt">(C) To request a refund</label>
                                <label className="opt">(D) To offer a job</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 10}. What happened to the application?</span>
                            <div className="options">
                                <label className="opt">(A) It was lost</label>
                                <label className="opt">(B) It was approved</label>
                                <label className="opt">(C) It was rejected</label>
                                <label className="opt">(D) It is being reviewed</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 11}. When should the listener call back?</span>
                            <div className="options">
                                <label className="opt">(A) Tomorrow morning</label>
                                <label className="opt">(B) Next week</label>
                                <label className="opt">(C) After 5 PM</label>
                                <label className="opt">(D) On Monday</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '10px', color: '#666' }}>
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderPart4Page6Q = (startQ: number) => (
        <div className="page">
            <div className="page-row-content">
                {/* Left Column: Graphic + 3 questions */}
                <div className="sub-col">
                    <div style={{ border: '2px solid #666', height: '338px', background: '#f5f5f5', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Graphic for Questions {startQ}-{startQ + 2}]
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ}. Look at the graphic. Which flight is delayed?</span>
                            <div className="options">
                                <label className="opt">(A) Flight 101</label>
                                <label className="opt">(B) Flight 202</label>
                                <label className="opt">(C) Flight 303</label>
                                <label className="opt">(D) Flight 404</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 1}. What is the reason for the delay?</span>
                            <div className="options">
                                <label className="opt">(A) Bad weather</label>
                                <label className="opt">(B) Mechanical issues</label>
                                <label className="opt">(C) Crew scheduling</label>
                                <label className="opt">(D) Air traffic control</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 2}. What should passengers do?</span>
                            <div className="options">
                                <label className="opt">(A) Wait at the gate</label>
                                <label className="opt">(B) Go to the service desk</label>
                                <label className="opt">(C) Collect their luggage</label>
                                <label className="opt">(D) Call the airline</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: Graphic + 3 questions */}
                <div className="sub-col">
                    <div style={{ border: '2px solid #666', height: '338px', background: '#f5f5f5', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Graphic for Questions {startQ + 3}-{startQ + 5}]
                    </div>
                    <div className="question-set">
                        <div className="q-item">
                            <span className="q-text">{startQ + 3}. Look at the graphic. Which area is closed?</span>
                            <div className="options">
                                <label className="opt">(A) The main lobby</label>
                                <label className="opt">(B) The parking lot</label>
                                <label className="opt">(C) The cafetaria</label>
                                <label className="opt">(D) The conference room</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 4}. How long will the closure last?</span>
                            <div className="options">
                                <label className="opt">(A) One hour</label>
                                <label className="opt">(B) One day</label>
                                <label className="opt">(C) One week</label>
                                <label className="opt">(D) One month</label>
                            </div>
                        </div>
                        <div className="q-item">
                            <span className="q-text">{startQ + 5}. Where should employees park?</span>
                            <div className="options">
                                <label className="opt">(A) In Lot A</label>
                                <label className="opt">(B) In Lot B</label>
                                <label className="opt">(C) On the street</label>
                                <label className="opt">(D) At the mall</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '10px', color: '#666' }}>
                GO ON TO THE NEXT PAGE
            </div>
        </div>
    );

    const renderSpread = () => {
        // Spread 0: Part 1 Directions + Q1-2
        if (currentSpread === 0) {
            return (
                <>
                    <div className="page">
                        <div className="directions-box">
                            <div className="directions-title">LISTENING TEST</div>
                            In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part. You must mark your answers on the separate answer sheet. Do not write your answers in your test book.

                            <div className="directions-part">PART 1</div>
                            <strong>Directions:</strong> For each question in this part, you will hear four statements about a picture in your test book. When you hear the statements, you must select the one statement that best describes what you see in the picture. Then find the number of the question on your answer sheet and mark your answer. The statements will not be printed in your test book and will be spoken only one time.
                            <br /><br />

                            {/* Example Image */}
                            <div style={{ textAlign: 'center', margin: '15px 0' }}>
                                <div style={{
                                    width: '60%',
                                    margin: '0 auto',
                                    aspectRatio: '4/3',
                                    maxHeight: '200px',
                                    background: '#e0e0e0',
                                    border: '2px solid #999',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '13px',
                                    color: '#666'
                                }}>
                                    [Example Photo: Two people sitting at a table in an office setting]
                                </div>
                            </div>

                            <br />
                            Statement (C), "They're sitting at a table," is the best description of the picture, so you should select answer (C) and mark it on your answer sheet.
                        </div>
                    </div>
                    <div className="page">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', paddingTop: '20px' }}>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.</div>
                                <div style={{ border: '2px solid #666', width: '15cm', height: '9cm', background: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    [Photo 1]
                                </div>
                            </div>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.</div>
                                <div style={{ border: '2px solid #666', width: '15cm', height: '9cm', background: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    [Photo 2]
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        // Spread 1: Q3-4 + Q5-6
        else if (currentSpread === 1) {
            return (
                <>
                    <div className="page">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', paddingTop: '20px' }}>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.</div>
                                <div style={{ border: '2px solid #666', width: '15cm', height: '9cm', background: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    [Photo 3]
                                </div>
                            </div>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>4.</div>
                                <div style={{ border: '2px solid #666', width: '15cm', height: '9cm', background: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    [Photo 4]
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', paddingTop: '20px' }}>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>5.</div>
                                <div style={{ border: '2px solid #666', width: '15cm', height: '9cm', background: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    [Photo 5]
                                </div>
                            </div>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.</div>
                                <div style={{ border: '2px solid #666', width: '15cm', height: '9cm', background: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    [Photo 6]
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        // Spread 2: Part 2 + Part 3 Start (Q32-43)
        else if (currentSpread === 2) {
            return (
                <>
                    <div className="page">
                        <div className="directions-box">
                            <div className="directions-title">PART 2</div>
                            <strong>Directions:</strong> You will hear a question or statement and three responses spoken in English. They will not be printed in your test book and will be spoken only one time. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.
                        </div>
                        <div className="page-row-content">
                            <div className="sub-col">
                                {Array.from({ length: 13 }, (_, i) => (
                                    <div key={i} style={{ marginBottom: '15px', fontSize: '15px', paddingLeft: '30px' }}>
                                        {i + 7}. Mark your answer on your answer sheet.
                                    </div>
                                ))}
                            </div>
                            <div className="sub-col">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <div key={i} style={{ marginBottom: '15px', fontSize: '15px', paddingLeft: '30px' }}>
                                        {i + 20}. Mark your answer on your answer sheet.
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Part 3 Start: 12 Questions (Q32-43) - Using renderPart3Page12Q manually here */}
                    {renderPart3Page12Q(32)}
                </>
            );
        }

        // Spread 3: Part 3 Q44-55 (12q) and Q56-64 (9q + graphic)
        else if (currentSpread === 3) {
            return (
                <>
                    {renderPart3Page12Q(44)}
                    {renderPart3Page9Q(56)}
                </>
            );
        }

        // Spread 4: Part 3 Q65-70 (Left) and Part 4 Start Q71-82 (Right)
        else if (currentSpread === 4) {
            return (
                <>
                    {renderPart3Page6Q(65)}
                    {renderPart4StartPage12Q(71)}
                </>
            );
        }
        // Spread 5: Part 4 Q83-94 (Left) and Q95-100 (Right)
        else if (currentSpread === 5) {
            return (
                <>
                    {renderPart4Page12Q(83)}
                    {renderPart4Page6Q(95)}
                </>
            );
        }

        // Placeholder spreads
        else {
            return (
                <>
                    <div className="page">
                        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            Spread {currentSpread + 1} - Left Page
                        </div>
                    </div>
                    <div className="page">
                        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            Spread {currentSpread + 1} - Right Page
                        </div>
                    </div>
                </>
            );
        }
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
                    color: black; /* Visibility Fix */
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

                /* --- EXAM TYPOGRAPHY (PART 3/4) --- */
                .question-set { 
                    margin-bottom: 18px; 
                    padding-bottom: 18px;
                    border-bottom: 1px solid #ccc;
                    break-inside: avoid; 
                }
                .question-set:last-child { border-bottom: none; }
                
                .q-item { margin-bottom: 12px; }
                
                .q-text { 
                    font-weight: bold; font-size: 15.5px; margin-bottom: 3px; display: block; 
                    line-height: 1.2;
                }
                
                .options { font-size: 14.5px; }
                
                .opt { 
                    display: block; 
                    margin-bottom: 2px;
                    cursor: pointer; 
                    padding: 0 4px; 
                    margin-left: -4px;
                    line-height: 1.25;
                }
                .opt:hover { background: #eef; }
            `}</style>

            {!started && (
                <div className="intro">
                    <h1 style={{ fontSize: '45px' }}>TOEIC FULL EXAM</h1>
                    <p style={{ color: '#888' }}>Complete Test (200 Questions)</p>
                    <button className="start-btn" onClick={startTest}>START EXAM</button>
                </div>
            )}

            {started && (
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
                        <div className="footer-left">TOEIC Full Exam</div>
                        <div className="footer-center">
                            <button className="nav-btn" onClick={prevSpread} disabled={currentSpread === 0}>
                                PREVIOUS
                            </button>
                            <span style={{ color: 'white', padding: '0 20px' }}>
                                Spread {currentSpread + 1} / {totalSpreads}
                            </span>
                            <button className="nav-btn" onClick={nextSpread} disabled={currentSpread === totalSpreads - 1} style={{ background: '#007bff', borderColor: '#007bff' }}>
                                NEXT
                            </button>
                        </div>
                        <div className="footer-right" id="timer">120:00</div>
                    </div>
                </div>
            )}
        </>
    );
}
