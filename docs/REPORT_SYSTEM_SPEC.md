# 📊 Half Test Reporting System Detailed Spec (Stage 4)

## 1. 개요
실제 강사의 1:1 컨설팅을 받는 듯한 경험을 제공하기 위해, 단순 점수 산출을 넘어선 '행동 분석형 리포트'를 지향함.

## 2. 핵심 섹션 구성 (UI/UX)

### A. Score Hero (상단)
- **Overall Score**: 990점 만점 환산 점수.
- **Percentile Graphic**: 내 점수가 상위 몇 %인지 시각화 (Mock Data 기반).
- **Correct Rate Circle**: LC/RC 각각의 정답률을 원형 차트로 표시.

### B. Speed Matrix (중단 - 핵심)
- **Part-by-Part Speed Meter**: 
  - P5, P6, P7(S), P7(M) 목표 시간 vs 실제 시간 대조.
  - 'Optimal Zone'을 설정하여 내 바늘이 어디에 위치하는지 표시.
- **Bottleneck Analysis**: 가장 시간을 많이 낭비한 '병목 구간'을 자동으로 콕 찍어줌.

### C. Weakness Tags (하단 좌측)
- **Top 3 Weaknesses**: 알고리즘이 분석한 3대 약점 (e.g., 연계지문 정보찾기, 문법-전치사, 시간관리 부실).
- **Skill Level**: 5가지 핵심 역량(속도, 정확도, 어휘, 문법, 추론)에 대한 Radar Chart.

### D. Master's Prescription (하단 우측)
- **Personalized Coaching**: 깡쌤의 말투를 적용한 개인별 솔루션 제공.
- **Next Step Guide**: 다음에 풀어야 할 추천 모의고사 회차 제시.

## 3. 기술적 알고리즘
1. **Speed Density**: (소요 시간 / 문항 수)를 계산하여 각 파트의 밀도 분석.
2. **Efficiency Score**: (정답률 / 시간 점수)를 결합하여 공부 효율성 지수 산출.
3. **Logic Map**: P7 Multi-passage에서 틀렸을 경우 '추론력 부족' 가중치 부여.

---
*Created by Antigravity for Kang's Toeic System*
