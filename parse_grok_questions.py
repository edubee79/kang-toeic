import re
import json

raw_text = r"""
1. Noun Patterns (n1-n5)
The finance department requires a detailed ______ of all expenses before approving the budget.
(A) summarize (B) summary (C) summarizing (D) summarizes
______ employee must complete the online training module by the end of the quarter.
(A) All (B) Most (C) Few (D) Every
The project manager requested significant ______ to the original timeline due to delays.
(A) extend (B) extension (C) extending (D) extensions
Our team is preparing the annual sales ______ report for the board meeting next week.
(A) analyze (B) analysis (C) analyst (D) analytical
The supplier sent the shipment ______ dates to confirm delivery schedules.
(A) expire (B) expiration (C) expired (D) expiring
______ for the marketing position should submit resumes by Friday.
(A) Applications (B) Applying (C) Applicants (D) Applies
The company's ______ policy allows flexible working hours for staff.
(A) employ (B) employment (C) employs (D) employed
______ of the new software features were tested during the trial period.
(A) Open (B) Openness (C) Openings (D) Opened
Please attach the ______ form to your reimbursement request.
(A) claim (B) claims (C) claiming (D) claimed
______ feedback from clients helped improve our customer service.
(A) Valuable (B) Value (C) Values (D) Valuing

2. Pronoun Patterns (p1-p6)
The IT team assisted ______ in setting up the remote access system.
(A) we (B) us (C) our (D) ours
Among the three proposals, two were rejected, while ______ was approved with minor changes.
(A) one another (B) each other (C) the other (D) other
This quarter's revenue figures are similar to ______ from the previous year.
(A) this (B) that (C) those (D) them
______ who attend the webinar will receive a certificate of participation.
(A) They (B) Anyone (C) Those (D) Every
The director handled the negotiation ______ after the team left.
(A) him (B) his (C) himself (D) he
Employees should resolve disputes among ______ before escalating to HR.
(A) them (B) their (C) themselves (D) theirs
Completing the report on ______ time is crucial for the deadline.
(A) your (B) yours (C) yourself (D) your own
The consultant developed a strategy based on ______ expertise in the field.
(A) her (B) hers (C) herself (D) she
The merger details are confidential between ______ and the partner firm.
(A) we (B) us (C) our (D) ours
______ option seems viable, but we need more data to decide.
(A) Either (B) Both (C) Neither (D) Each

3. Adjective Patterns (a1-a6)
The new office printer comes with a wireless ______ feature for easy connectivity.
(A) connect (B) connection (C) connective (D) connectable
All documents are now ______ for download on the company portal.
(A) availability (B) available (C) avail (D) availably
The CEO was ______ with the team's innovative approach to the project.
(A) satisfy (B) satisfaction (C) satisfied (D) satisfactory
______ managers support the proposal for increased training funds.
(A) Much (B) Many (C) Little (D) Few
Applicants must be ______ for the visa sponsorship program.
(A) eligible (B) eligibility (C) eligibly (D) eligibility
The conference room is located ______ to the main entrance.
(A) close (B) closely (C) closing (D) closed
Thanks to the ______ marketing strategy, sales increased significantly.
(A) effective (B) effectively (C) effectiveness (D) effect
Customer reviews are overwhelmingly ______ about the new product line.
(A) positive (B) positively (C) positiveness (D) positives
The report includes a comprehensive ______ analysis of market trends.
(A) detail (B) detailed (C) detailing (D) details
The budget is ______ sufficient for the upcoming fiscal year.
(A) barely (B) bare (C) bareness (D) bares

4. Adverb Patterns (av1-av3)
The meeting will be held ______ online due to travel restrictions.
(A) complete (B) completely (C) completion (D) completes
The software can be updated automatically or ______ by the user.
(A) manual (B) manually (C) manuals (D) manualness
The team worked ______ to meet the tight deadline.
(A) diligent (B) diligently (C) diligence (D) diligents
Sales have increased ______ over the past quarter.
(A) significant (B) significantly (C) significance (D) signifies
______ , the project was completed ahead of schedule.
(A) Surprise (B) Surprisingly (C) Surprised (D) Surprises
The report was submitted ______ before the board meeting.
(A) short (B) shortly (C) shortness (D) shorts
The policy applies ______ to all employees.
(A) equal (B) equally (C) equality (D) equals
______ speaking, the proposal needs more revisions.
(A) Frank (B) Frankly (C) Frankness (D) Franks
The event was ______ successful despite the weather.
(A) relative (B) relatively (C) relative (D) relatives
______ , we expect revenue growth next year.
(A) Optimistic (B) Optimistically (C) Optimism (D) Optimists

5. Verb Patterns (v1-v8)
The committee ______ the new policy during the last session.
(A) approve (B) approves (C) approved (D) approving
The package ______ to the client yesterday afternoon.
(A) deliver (B) delivered (C) was delivered (D) has delivered
Payment is expected ______ by the end of the month.
(A) to make (B) made (C) to be made (D) making
The manager often ______ team performance in weekly reviews.
(A) evaluate (B) evaluates (C) evaluated (D) has evaluated
The board insists that the report ______ on time.
(A) submit (B) submits (C) submitted (D) be submitted
To access the database, ______ your credentials first.
(A) enter (B) entering (C) entered (D) enters
The shipment ______ at the warehouse this morning.
(A) arrive (B) arrived (C) was arrived (D) has arrived
The director persuaded the team ______ the deadline.
(A) meet (B) to meet (C) meeting (D) met
The budget ______ by the finance team last week.
(A) prepare (B) prepared (C) was prepared (D) has prepared
All staff are required ______ the safety briefing.
(A) attend (B) to attend (C) attending (D) attended

6. Infinitive Patterns (i1-i6)
The goal is ______ customer satisfaction through better service.
(A) improve (B) to improve (C) improving (D) improved
We have a plan ______ the office space for efficiency.
(A) redesign (B) to redesign (C) redesigning (D) redesigned
Employees are encouraged ______ remotely to reduce commuting.
(A) work (B) to work (C) working (D) worked
The supervisor prefers ______ emails rather than calls.
(A) send (B) to send (C) sending (D) sent
Managers must decide ______ to approve the budget increase.
(A) whether (B) what (C) which (D) why
The company arranged ______ the interns to visit the factory.
(A) for (B) to (C) of (D) its
The policy allows staff ______ flexible hours.
(A) choose (B) to choose (C) choosing (D) chose
There is a need ______ sustainability in operations.
(A) promote (B) to promote (C) promoting (D) promoted
To avoid errors, ______ the guidelines carefully.
(A) follow (B) to follow (C) following (D) followed
The team plans ______ the conference online.
(A) host (B) to host (C) hosting (D) hosted

7. Gerund Patterns (g1-g5)
______ the invoice is necessary before processing payment.
(A) Verify (B) Verifying (C) Verification (D) Verified
The focus is on ______ quality control in production.
(A) enhance (B) enhancement (C) enhancing (D) enhanced
______ the market trends requires constant monitoring.
(A) Analyze (B) Analysis (C) Analyzing (D) Analyzed
The director considered ______ the contract renewal.
(A) delay (B) to delay (C) delaying (D) delayed
Spend time ______ feedback from clients.
(A) collect (B) collecting (C) to collect (D) collected
______ security measures is a top priority.
(A) Implement (B) Implementation (C) Implementing (D) Implemented
The report aims at ______ revenue growth strategies.
(A) outline (B) outline (C) outlining (D) outlined
______ can be adjusted based on performance.
(A) Bonus (B) Bonuses (C) Bonusing (D) To bonus
The policy prohibits ______ confidential information.
(A) share (B) to share (C) sharing (D) shared
Focus on ______ team collaboration for better results.
(A) foster (B) fostering (C) to foster (D) fostered

8. Participle Patterns (pa1-pa5)
The ______ deadline caused stress for the team.
(A) approach (B) approaching (C) approached (D) approaches
We accept applications ______ relevant experience.
(A) show (B) showing (C) showed (D) to show
The clients seemed ______ with the presentation.
(A) impress (B) impressive (C) impressed (D) impression
______ in the city center, the office is convenient.
(A) Locate (B) Located (C) Locating (D) Locates
As ______ in the email, the meeting is postponed.
(A) state (B) stated (C) stating (D) states
The updated software has features ______ usability.
(A) improve (B) improved (C) improving (D) improves
Documents ______ signatures will be rejected.
(A) lack (B) lacking (C) lacked (D) lacks
The manager made the staff ______ motivated.
(A) feel (B) feeling (C) felt (D) feels
______ rapidly, the company expanded overseas.
(A) Grow (B) Grown (C) Growing (D) Grows
As ______ previously, submit the form by Friday.
(A) mention (B) mentioned (C) mentioning (D) mentions

9. Noun Clause Patterns (nc1-nc5)
______ the survey shows is a rise in employee satisfaction.
(A) That (B) What (C) While (D) Although
The key question is ______ to expand the product line.
(A) if (B) whether (C) what (D) so
The manual explains ______ to operate the equipment safely.
(A) how (B) where (C) which (D) what
______ submits the best proposal will win the contract.
(A) Who (B) Whoever (C) Whenever (D) Whomever
There is debate about ______ to implement the new policy.
(A) whether (B) that (C) if (D) what
______ matters most is meeting the client's expectations.
(A) That (B) What (C) While (D) Although
We need to determine ______ the shipment arrived on time.
(A) if (B) whether (C) what (D) so

10. Adjective Clause Patterns (ac1-ac6)
The vendor ______ supplies our raw materials has updated its pricing policy.
(A) who (B) which (C) what (D) whose
The audit report, ______ was released last week, highlights compliance issues.
(A) which (B) what (C) who (D) that
The committee consists of ten members, most of ______ have international experience.
(A) that (B) who (C) whom (D) them
The webinar during ______ experts discussed innovation drew a large audience.
(A) what (B) which (C) where (D) whose
The compliance guidelines ______ outlined in the handbook must be followed.
(A) our (B) we (C) ours (D) us
Proceed to the reception area ______ a staff member will assist you.
(A) what (B) that (C) which (D) where
The merger partner ______ terms are still under negotiation requires approval.
(A) who (B) which (C) what (D) whose
The training session, ______ focused on digital tools, was highly rated.
(A) which (B) what (C) who (D) that
The team includes five specialists, all of ______ are certified in sustainability.
(A) that (B) who (C) whom (D) them
The conference at ______ industry leaders spoke was held virtually.
(A) what (B) which (C) where (D) whose

11. Conjunction Patterns (c1-c5)
The manager reviewed the invoice, approved it, and ______ the payment immediately.
(A) process (B) to process (C) processed (D) processing
The seminar not only covered marketing strategies but ______ leadership skills.
(A) also teach (B) also taught (C) also teaching (D) also teaches
The shipment will arrive ______ the warehouse is fully operational.
(A) because (B) as soon as (C) so (D) although
______ the high demand, production capacity remains limited.
(A) Whether (B) Although (C) Despite (D) Nevertheless
Turn off devices when ______ in meetings to avoid distractions.
(A) participate (B) participating (C) participated (D) participates
The report analyzes data, identifies trends, and ______ recommendations for improvement.
(A) provide (B) to provide (C) provided (D) providing
Remote work is efficient because it saves time and ______ costs.
(A) reduce (B) reduces (C) reducing (D) reduced
Submit the application ______ you meet all requirements.
(A) because (B) as soon as (C) so (D) if
______ rising expenses, the budget was approved without changes.
(A) Whether (B) Although (C) Despite (D) Nevertheless
Keep records updated while ______ client interactions for accuracy.
(A) handle (B) handling (C) handled (D) handles

12. Preposition Patterns (pr1-pr5)
The contract was signed ______ the end of the negotiation session.
(A) in (B) at (C) on (D) to
The event was canceled ______ technical difficulties.
(A) although (B) despite (C) because (D) due to
The team is in charge of ______ the annual audit.
(A) conduct (B) conduction (C) conducted (D) conducting
The company relies ______ reliable vendors for supplies.
(A) in (B) on (C) over (D) to
The project is in collaboration ______ local partners.
(A) cooperate (B) cooperating (C) cooperated (D) cooperation
Submit applications ______ the HR department by email.
(A) in (B) at (C) on (D) to
Profits increased ______ market expansion efforts.
(A) although (B) despite (C) because (D) due to
Focus on ______ compliance standards in operations.
(A) maintain (B) maintenance (C) maintained (D) maintaining
The firm specializes ______ sustainable energy solutions.
(A) in (B) on (C) over (D) to
The deal was made in partnership ______ a global firm.
(A) collaborate (B) collaborating (C) collaborated (D) collaboration

13. Comparison Patterns (com1-com4)
The new software is as efficient ______ the previous version.
(A) then (B) most (C) well (D) as
This vendor is the most reliable ______ in the industry.
(A) supply (B) supplier (C) supplies (D) supplied
We need a ______ faster delivery process to compete.
(A) just (B) very (C) much (D) quite
The webinar was our most successful event ______ date.
(A) good (B) better (C) best (D) well
Costs are lower ______ expected due to negotiations.
(A) then (B) than (C) most (D) as
The audit found fewer errors ______ last year's review.
(A) reliable (B) more reliable (C) most reliable (D) reliably
Sales grew ______ more than anticipated this quarter.
(A) just (B) very (C) much (D) quite
This proposal is the strongest ______ submitted so far.
(A) good (B) better (C) best (D) well
The team performed as well ______ the competitors.
(A) then (B) most (C) well (D) as
Innovation is more important ______ ever in this market.
(A) then (B) than (C) most (D) as

14. Subjunctive Patterns (s1-s2)
If the merger had succeeded, profits ______ higher now.
(A) were (B) had been (C) would be (D) will be
______ the vendor delay shipment, contact support immediately.
(A) If (B) Unless (C) And (D) Should
The board recommends that the policy ______ revised soon.
(A) revise (B) revises (C) revised (D) be revised
Had the audit been thorough, issues ______ detected earlier.
(A) were (B) had been (C) would have been (D) will be
______ you have questions, email the coordinator.
(A) If (B) Unless (C) And (D) Should
The manager insists that all staff ______ the training.
(A) attend (B) attends (C) attended (D) be attended
If compliance had been stricter, fines ______ avoided.
(A) were (B) had been (C) would have been (D) will be
______ the team need assistance, schedule a meeting.
(A) If (B) Unless (C) And (D) Should
It is essential that the report ______ accurate data.
(A) include (B) includes (C) included (D) be included
Were the budget approved, projects ______ launched sooner.
(A) were (B) had been (C) would be (D) will be

15. Inversion Patterns (inv1-inv5)
______ the client request changes, revise the contract promptly.
(A) If (B) Unless (C) And (D) Should
______ does the director approve such large expenditures.
(A) Ever (B) Although (C) Rarely (D) Even
______ is the agenda for the quarterly review meeting.
(A) Attachment (B) Attached (C) Attaching (D) Attaches
Only after approval will the funds ______ released.
(A) consider (B) considers (C) considering (D) be considered
The vendor delayed shipment, and ______ did the competitor.
(A) same (B) either (C) so (D) rather
______ the audit reveal discrepancies, notify management.
(A) If (B) Unless (C) And (D) Should
______ has the team achieved such high productivity.
(A) Ever (B) Although (C) Rarely (D) Even
______ are the details of the sustainability initiative.
(A) Attachment (B) Attached (C) Attaching (D) Attaches
Only if compliant will the application ______ processed.
(A) consider (B) considers (C) considering (D) be considered
The webinar was engaging, and ______ was the follow-up session.
(A) same (B) either (C) so (D) rather
"""

pattern_mapping = {
    1: ["n1", "n2", "n1", "n3", "n3", "n4", "n1", "n5", "n1", "voc1"],
    2: ["p1", "p2", "p3", "p3", "p4", "p4", "p1", "p1", "p1", "p3"],
    3: ["a1", "a2", "a3", "a4", "a5", "a1", "a1", "a2", "a1", "av1"],
    4: ["av1"] * 10,
    5: ["v4", "v2", "v2", "v1", "v5", "v1", "v7", "i1", "v2", "v8"],
    6: ["i1", "i1", "i1", "g1", "nc3", "i6", "i1", "i1", "v6", "i1"],
    7: ["g1", "g1", "g1", "g1", "g1", "g1", "g1", "n1", "g1", "g1"],
    8: ["pa1", "pa4", "pa3", "pa5", "pa5", "pa4", "pa4", "v6", "pa5", "pa5"],
    9: ["nc1", "nc2", "nc3", "nc4", "nc2", "nc1", "nc2"],
    10: ["ac1", "ac1", "ac3", "ac4", "ac1", "ac6", "ac1", "ac1", "ac3", "ac1"],
    11: ["c1", "c1", "c3", "c3", "c1", "c1", "v1", "c3", "c3", "g1"],
    12: ["pr1", "pr1", "g1", "pr1", "n1", "pr1", "pr1", "g1", "pr1", "n1"],
    13: ["com1", "n1", "com3", "com4", "com1", "com1", "com3", "com4", "com1", "com1"],
    14: ["s1", "inv1", "v5", "s1", "inv1", "v5", "s1", "inv1", "v5", "s1"],
    15: ["inv1", "inv2", "inv3", "v2", "inv5", "inv1", "inv2", "inv3", "v2", "inv5"]
}

ans_list = [
    ["B", "D", "B", "B", "B", "C", "B", "C", "A", "A"], # 1
    ["B", "C", "C", "C", "C", "C", "A", "A", "B", "A"], # 2
    ["B", "B", "C", "B", "A", "A", "A", "A", "B", "A"], # 3
    ["B"] * 10, # 4
    ["C", "C", "C", "B", "D", "A", "B", "B", "C", "B"], # 5
    ["B", "B", "B", "C", "A", "A", "B", "B", "A", "B"], # 6
    ["B", "C", "C", "C", "B", "C", "C", "B", "C", "B"], # 7
    ["B", "B", "C", "B", "B", "C", "B", "A", "C", "B"], # 8
    ["B", "B", "A", "B", "A", "B", "B"], # 9 (7 items)
    ["A", "A", "C", "B", "B", "D", "D", "A", "C", "B"], # 10
    ["C", "B", "B", "C", "B", "A", "B", "D", "C", "B"], # 11
    ["B", "D", "D", "B", "D", "D", "D", "D", "A", "D"], # 12
    ["D", "B", "C", "D", "B", "B", "C", "C", "D", "B"], # 13
    ["C", "D", "D", "C", "D", "A", "C", "D", "A", "C"], # 14
    ["D", "C", "B", "D", "C", "D", "C", "B", "D", "C"]  # 15
]

questions = []
sections = re.findall(r'(\d+)\.\s+[A-Za-z]+ Patterns.*?\n(.*?)(?=\n\d+\.\s+[A-Za-z]+ Patterns|$)', raw_text, re.DOTALL)

for s_idx, (num, content) in enumerate(sections):
    lines = [L.strip() for L in content.strip().split('\n') if L.strip()]
    q_ptr = 0
    ans_ptr = 0
    while q_ptr < len(lines):
        if '______' in lines[q_ptr]:
            q_text = lines[q_ptr]
            opt_line = lines[q_ptr+1]
            
            opts = re.findall(r'\(([A-D])\)\s+([^\(\)]+)', opt_line)
            options_dict = [{"label": label.upper(), "text": text.strip()} for label, text in opts]
            
            try:
                ans = ans_list[s_idx][ans_ptr]
                cls = pattern_mapping[s_idx+1][ans_ptr]
            except IndexError:
                # Handle unexpected number of questions
                q_ptr += 2
                continue
                
            questions.append({
                "part": 5,
                "text": q_text,
                "options": options_dict,
                "correctAnswer": ans,
                "classification": cls,
                "explanation": f"[AI 분석] 본 문제는 {cls} 유형을 측정합니다.",
                "source": "ai-grok",
                "createdAt": "2026-01-21T19:07:00.000Z"
            })
            ans_ptr += 1
            q_ptr += 2
        else:
            q_ptr += 1

with open('grok_part5_pool.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(questions)} Grok questions.")
