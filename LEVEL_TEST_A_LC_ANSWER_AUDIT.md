# 레벨 테스트 (하프테스트 A세트) LC 정답 감사 보고서

본 문서는 현재 시스템 코드(`src/data/mock/half_set9_a.ts` 및 원본 데이터 파일들)에 설정되어 있는 **레벨 테스트 A세트(실전 9회차 기반)의 LC 파트별 정답**을 전수 조사하여 기록한 것입니다.

---

## **Part 1 (6문제 중 3문제 선택)**
- **대상 문항**: 원본 9회차의 1, 3, 5번
- **이미지 세트**: `ETS_TOEIC_3/Test_09/Part_01`

| 번호 | 코드상 ID | 현재 설정된 정답 | 사용자의 정답 (일치 여부) | 비고 |
|:---:|:---|:---:|:---|:---|
| **1** | p1_t9_q1 | **A** | **C** (불일치) | 사용자님 의견: C가 정답 |
| **2 (원본3)** | p1_t9_q3 | **B** | **B** (일치) | |
| **3 (원본5)** | p1_t9_q5 | **A** | **D** (불일치) | 사용자님 의견: D가 정답 |

---

## **Part 2 (25문제 중 14문제 선택)**
- **대상 문항**: 원본 9회차의 7, 8, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31번
- **정답 매핑**: `correct` 인덱스 (0:A, 1:B, 2:C)

| 번호 | 원본 ID | 스크립트 내용 (요약) | 현재 설정된 정답 |
|:---:|:---:|:---|:---:|
| 1 | 7 | Why is this restaurant so popular? | **C** |
| 2 | 8 | When does the park close? | **C** |
| 3 | 9 | Which house did Ms. Lopez move into? | **C** |
| 4 | 11 | Who's responsible for ordering equipment? | **C** |
| 5 | 13 | This document needs a signature... | **B** |
| 6 | 15 | You must be the new sales director, right? | **A** |
| 7 | 17 | When should I return your book? | **A** |
| 8 | 19 | I'll be late to the luncheon... | **A** |
| 9 | 21 | Should we replace the insulation... | **C** |
| 10 | 23 | Hasn't Alan seen the doctor yet? | **B** |
| 11 | 25 | Don't you want to come with us... | **A** |
| 12 | 27 | Who supplies your copy paper? | **B** |
| 13 | 29 | Let me look into renting a storage unit... | **B** |
| 14 | 31 | Would you like a beverage... | **A** |

---

## **Part 3 (39문제 중 18문제 선택)**
- **대상 세트**: 원본 9회차의 0, 2, 4, 6, 8, 10번 세트 (인덱스 기준)

| 세트 | 문항 번호 | 주제 | 현재 설정된 정답 |
|:---:|:---:|:---|:---:|
| **Set 0** | 32-34 | Oakview Apartments (Key loss) | **D, C, B** |
| **Set 2** | 38-40 | New apprentice (Machinist) | **C, B, C** |
| **Set 4** | 44-46 | Floor mats (Hardwood protection) | **B, D, C** |
| **Set 6** | 50-52 | Ferry service (Mobile payment) | **B, C, D** |
| **Set 8** | 56-58 | News story Carlos (Bus system) | **A, B, A** |
| **Set 10** | 62-64 | Charity event (Room reservation) | **B, B, A** |

---

## **Part 4 (30문제 중 15문제 선택)**
- **대상 세트**: 원본 9회차의 0, 2, 4, 6, 8번 세트 (인덱스 기준)

| 세트 | 문항 번호 | 주제 | 현재 설정된 정답 |
|:---:|:---:|:---|:---:|
| **Set 0** | 71-73 | Henry's Car Dealership (Electric cars) | **D, A, D** |
| **Set 2** | 77-79 | Staff meeting (New software) | **C, B, D** |
| **Set 4** | 83-85 | Writing assignments (Magazine issue) | **A, C, D** |
| **Set 6** | 89-91 | Logan's Flooring (Carpet choice) | **D, C, D** |
| **Set 8** | 95-97 | Oakfield Public Park (Grand opening) | **B, C, A** |

---

### **분석 결과 요약**
현재 시스템은 위 표에 기재된 정답을 기준으로 채점을 수행하고 있습니다.
사용자님께서 지적하신 **Part 1의 1번과 5번은 명백히 실제 정답과 다르게 입력**되어 있으며, 다른 파트(Part 3, 4 등) 역시 정답이 밀려있거나 잘못된 데이터가 포함되어 있을 가능성이 높습니다.
