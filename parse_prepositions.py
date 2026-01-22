import re
import json

raw_text = r"""
중급 (700점대) 전치사 문제 30문항

1.
After reviewing the feedback collected from participants following last quarter’s workshop, the training coordinator adjusted the session format
___ employee preferences identified in the survey.

(A) according to
(B) because
(C) despite
(D) during

2.
All maintenance requests submitted by tenants will be processed
___ the order in which they are received, unless an urgent safety issue is reported.

(A) in
(B) by
(C) with
(D) during

3.
The accounting department requires that all invoices be submitted
___ five business days after the service has been completed to avoid delays in payment.

(A) within
(B) by
(C) during
(D) until

4.
Due to an unexpected increase in material costs earlier this year, the company adjusted its pricing strategy
___ maintain profitability without reducing product quality.

(A) for
(B) to
(C) with
(D) in

5.
Employees are advised to save their work frequently
___ the possibility of temporary system disruptions during the scheduled software upgrade.

(A) because
(B) due to
(C) although
(D) while

6.
The marketing campaign was launched nationwide
___ extensive market research conducted over a six-month period.

(A) following
(B) during
(C) until
(D) by

7.
All visitors must check in at the reception desk
___ arrival and present a valid form of identification.

(A) at
(B) on
(C) by
(D) during

8.
The revised policy applies to all employees
___ those working on short-term contractual assignments.

(A) including
(B) except
(C) despite
(D) without

9.
The conference room will remain unavailable
___ further notice due to ongoing renovation work.

(A) until
(B) during
(C) by
(D) within

10.
The final report was prepared
___ consultation with multiple department heads to ensure accuracy and consistency.

(A) in
(B) with
(C) by
(D) during

11.
Customer support representatives must respond to inquiries
___ 24 hours, regardless of the communication channel used.

(A) within
(B) by
(C) during
(D) until

12.
The project timeline was extended
___ delays caused by supply chain disruptions earlier this month.

(A) because
(B) because of
(C) although
(D) so

13.
Employees are eligible for performance bonuses
___ compliance with the company’s evaluation criteria.

(A) in accordance with
(B) because
(C) despite
(D) during

14.
The shipment was delivered on time
___ severe weather conditions that affected several regional distribution centers.

(A) despite
(B) because of
(C) due
(D) during

15.
The training materials are accessible online
___ employees who are unable to attend the in-person sessions.

(A) for
(B) to
(C) with
(D) by

16.
The updated software version was released
___ address several security vulnerabilities identified during internal testing.

(A) for
(B) to
(C) with
(D) in

17.
All candidates must submit their applications
___ the deadline stated in the job posting.

(A) by
(B) until
(C) during
(D) within

18.
The manager approved the request
___ a detailed explanation provided by the project team.

(A) based on
(B) because
(C) despite
(D) during

19.
The company issued a public apology
___ customer complaints regarding billing errors.

(A) in response to
(B) because
(C) during
(D) although

20.
The meeting agenda was distributed in advance
___ allow participants sufficient time to prepare.

(A) to
(B) for
(C) with
(D) in

21.
Employees should refrain from sharing confidential information
___ authorization from their supervisors.

(A) without
(B) except
(C) despite
(D) during

22.
The survey results varied significantly
___ departments, reflecting differences in workload and responsibilities.

(A) among
(B) between
(C) within
(D) during

23.
The office will be closed
___ national holidays observed by the company.

(A) on
(B) at
(C) during
(D) by

24.
The new policy was implemented
___ the recommendation of external legal advisors.

(A) at
(B) by
(C) with
(D) for

25.
The equipment must be inspected regularly
___ ensure compliance with safety regulations.

(A) to
(B) for
(C) with
(D) in

26.
The company relocated its headquarters
___ closer proximity to key business partners.

(A) for
(B) to
(C) with
(D) by

27.
The revised contract includes additional clauses
___ protect the interests of both parties.

(A) to
(B) for
(C) with
(D) in

28.
Employees may request flexible working hours
___ approval from their department managers.

(A) with
(B) by
(C) during
(D) without

29.
The annual budget was finalized
___ careful consideration of projected expenses.

(A) after
(B) during
(C) until
(D) by

30.
The orientation session will provide new hires
___ an overview of company policies and procedures.

(A) with
(B) to
(C) for
(D) by

31.
After evaluating several potential vendors and reviewing their long-term service agreements, the procurement team selected a supplier
___ its ability to meet both quality standards and delivery deadlines.

(A) based on
(B) because
(C) due
(D) during

32.
The company postponed the product launch
___ concerns raised by regulatory authorities regarding labeling requirements.

(A) because of
(B) because
(C) although
(D) so

33.
All financial statements must be prepared
___ generally accepted accounting principles to ensure regulatory compliance.

(A) in accordance with
(B) because
(C) despite
(D) during

34.
The executive committee approved the merger
___ the potential risks identified during the initial assessment phase.

(A) despite
(B) because of
(C) due
(D) during

35.
The revised workflow was introduced
___ an effort to streamline operations and reduce processing time.

(A) in
(B) for
(C) to
(D) with

36.
Customer data is stored securely
___ prevent unauthorized access and ensure confidentiality.

(A) to
(B) for
(C) with
(D) in

37.
The consultant submitted a comprehensive report
___ several months of data analysis and on-site observations.

(A) following
(B) during
(C) until
(D) by

38.
The policy revision applies to all departments
___ those operating under independent regional regulations.

(A) except for
(B) despite
(C) including
(D) without

39.
The training session was rescheduled
___ accommodate employees who were unable to attend the original date.

(A) to
(B) for
(C) with
(D) in

40.
The organization responded promptly
___ media inquiries regarding the recent restructuring announcement.

(A) to
(B) for
(C) with
(D) by

41.
The final decision was made
___ consultation with legal counsel and senior management.

(A) after
(B) during
(C) until
(D) by

42.
The software update was deployed company-wide
___ minimize disruptions to daily operations.

(A) to
(B) for
(C) with
(D) in

43.
The audit revealed discrepancies
___ multiple financial records maintained across different departments.

(A) among
(B) between
(C) within
(D) during

44.
The company refrained from issuing a statement
___ complete information was available.

(A) until
(B) by
(C) during
(D) within

45.
Employees are required to complete annual training sessions
___ compliance with industry safety standards.

(A) in
(B) for
(C) with
(D) to

46.
The project proceeded as scheduled
___ minor technical issues encountered during the initial phase.

(A) despite
(B) because of
(C) due
(D) during

47.
The report was distributed internally
___ senior managers and department heads only.

(A) among
(B) between
(C) within
(D) during

48.
The relocation decision was made
___ careful evaluation of long-term operational costs.

(A) after
(B) during
(C) until
(D) by

49.
The company implemented stricter security protocols
___ recent incidents involving data breaches.

(A) in response to
(B) because
(C) although
(D) so

50.
The contract remains valid
___ termination is requested by either party in writing.

(A) until
(B) by
(C) during
(D) within

51.
The marketing team adjusted its strategy
___ feedback received from focus group participants.

(A) based on
(B) because
(C) despite
(D) during

52.
The company operates facilities
___ multiple countries across the Asia-Pacific region.

(A) in
(B) at
(C) on
(D) by

53.
The proposal was revised
___ address concerns raised during the board meeting.

(A) to
(B) for
(C) with
(D) in

54.
The office renovation was completed
___ schedule and within the approved budget.

(A) on
(B) at
(C) during
(D) by

55.
The agreement was signed
___ mutual consent of both parties involved.

(A) with
(B) by
(C) for
(D) to

56.
Employees must log their working hours accurately
___ payroll processing requirements.

(A) in accordance with
(B) because
(C) despite
(D) during

57.
The company expanded its services
___ meet increasing customer demand in urban areas.

(A) to
(B) for
(C) with
(D) in

58.
The internal memo was circulated
___ inform staff of upcoming organizational changes.

(A) to
(B) for
(C) with
(D) in

59.
The conference was canceled
___ unforeseen circumstances beyond the organizers’ control.

(A) due to
(B) because
(C) although
(D) during

60.
The system will undergo maintenance
___ the weekend to minimize disruptions to regular business operations.

(A) during
(B) by
(C) until
(D) within
"""

ans_long = [
    "A", "A", "A", "B", "B", "A", "B", "B", "A", "A",
    "A", "B", "A", "A", "B", "B", "A", "A", "A", "A",
    "A", "A", "A", "A", "A", "B", "A", "A", "A", "A",
    "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
    "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
    "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"
]

def get_cls(idx):
    if idx + 1 in [3, 11, 28]: return "pr1"
    if idx + 1 in [5, 12, 14, 32, 46, 59]: return "pr2"
    if idx + 1 in [8, 38, 44, 50]: return "pr3"
    return "pr5"

questions = []
# Split by number.
items = re.split(r'\n\d+\.\n', raw_text)[1:]

for i, item in enumerate(items):
    lines = [L.strip() for L in item.strip().split('\n') if L.strip()]
    if not lines: continue
    
    # Options are at the end
    opt_lines = []
    q_lines = []
    for line in lines:
        if line.startswith('(A)') or line.startswith('(B)') or line.startswith('(C)') or line.startswith('(D)'):
            opt_lines.append(line)
        else:
            q_lines.append(line)
    
    q_text = " ".join(q_lines)
    all_opts = " ".join(opt_lines)
    
    opts = []
    for label in ['A', 'B', 'C', 'D']:
        match = re.search(fr'\({label}\)\s+(.*?)(?=\s+\([A-D]\)|$)', all_opts)
        if match:
            opts.append({"label": label, "text": match.group(1).strip()})
    
    ans = ans_long[i]
    cls = get_cls(i)
    diff = 700 if i < 30 else 850
    
    questions.append({
        "part": 5,
        "text": q_text,
        "options": opts,
        "correctAnswer": ans,
        "classification": cls,
        "difficulty": diff,
        "explanation": f"[AI 분석] 본 문제는 전치사 {cls} 유형을 측정합니다.",
        "source": "grok-preposition-master",
        "createdAt": "2026-01-21T19:15:00.000Z"
    })

with open('preposition_master_pool.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(questions)} preposition questions.")
