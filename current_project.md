# 🎯 강TOEIC 프로젝트: 단계적 데이터 안정화 및 분석 정밀화 플랜

> **현재 당면 과제**: 데이터 오염 및 용어 불일치로 인한 '나의 학습방' 수치 부정확성 해소
> **전략적 기조**: 현재 운영 중인 수업(내일 개강)에 지장을 주지 않는 범위 내에서의 '정밀 타격' 수선

---

## 📅 [Phase 1] 3주 집중 안정화 (현재 ~ 수업 종료 시점)

**목표**: '나의 학습방' 내 목표 설정, 달성률, AI 취약점 분석의 100% 신뢰도 확보

### 1. 실전 문제(Actual Test) 데이터 정비
*   **정답 필드**: `correctAnswer` (전 파트 공통 표준: "A", "B", "C" 알파벳 방식)
*   **유형 분류**: RC(`classification`), LC(`questionType`) 필드 유지 및 표준 코드 적용
*   **지문 및 본문**: RC는 `content`, LC는 `script`(본문 및 P12 질문)로 명칭 구분
*   **복습 데이터**: LC Part 1, 2의 `options` 내에 **발화 스크립트** 반드시 포함

### 2. '나의 학습방' 로직 결함 수정
*   **목표/성적 키**: `p[N]_goal` (목표), `p[N]_cur` (최근) 체계로 전환하여 데이터 성격 명확화
*   **점수 엔진**: UI별 산재된 환산 공식 통합 및 하프/풀세트 비중 자동 조절

---

## 📘 [Master Schema] 파트별 필수 데이터 명항 및 저장 규격

모든 파트는 데이터 소스(.ts)와 결과 저장(Firestore) 시 아래 항목을 **반드시** 누덕 없이 포함해야 한다.

### 1. 파트별 데이터 소스 규격 (Input Data)
| 파트 | 필수 필드 (Mandatory Fields) | 비고 |
| :--- | :--- | :--- |
| **Common** | **`id`** (고유ID), **`testId`** (회차), **`questionNo`** (전시번호) | 모든 데이터의 3대 필수 좌표 |
| **Part 1** | `id`, `questionNo`, `testId`, `image`, `questionType`, `options` (script 포함), `correctAnswer` | `p1` |
| **Part 2** | `id`, `questionNo`, `testId`, `script` (질문), `questionType`, `options` (script 리스트), `correctAnswer` | `p2` |
| **Part 3, 4** | **지문레벨**: `testId`, `setId`, `script`, `contextType`, `questions` (배열)<br>**문항레벨**: `id`, `questionNo`, `text`, `questionType`, `options`, `correctAnswer` | `p3`, `p4` |
| **Part 5** | `id`, `questionNo`, `testId`, `text` (빈칸포함), `classification`, `options`, `correctAnswer`, `explanation` | `p5` |
| **Part 6, 7** | **지문레벨**: `testId`, `setId`, `content`, `contextType`, `questions` (배열)<br>**문항레벨**: `id`, `questionNo`, `text`, `classification`, `options`, `correctAnswer` | `p6`, `p7s`, `p7d` |

### 2. 결과 저장 공식 규격 (Firestore: Manager_Results)
모든 제출 함수는 아래 11개 필드를 **공통 표준**으로 저장한다.

1.  **`studentId`**: 사용자 고유 UID
2.  **`student`**: 사용자 이름 (username)
3.  **`className`**: 소속 반 명칭
4.  **`timestamp`**: `serverTimestamp()` (최신성 판단의 절대 기준)
5.  **`testIndex`**: **(핵심)** 회차 번호 (정수 1~20)
6.  **`mode`**: `real` (실전) / `drill` (연습) / `type_review` (약점)
7.  **`type`**: 파트 구분 코드 (`p1` ~ `p7f`)
8.  **`unit`**: 표시용 명칭 (예: "Test 1 Part 5")
9.  **`score`**: 맞힌 정답 개수 (정수)
10. **`total`**: 해당 회차의 총 문항 수 (정수)
11. **`incorrectQuestions`**: 틀린 문제 상세 (ID, 태그 포함)

### 3. 용어 사전 (Glossary) - 확장판

#### [식별자 및 데이터 구조]
*   **Hyphen ID (pX-tY-qZ)**: **[가장 권장되는 표준 고유 식별자]** DB 관리 및 결과 매칭용. (예: `p2-t1-q7`)
*   **`questionNo`**: **[전시용 문제 번호]** 학생 화면 및 음원 번호와 일치. (예: Part 2 시작은 `7`)
*   **`testId` / `testIndex`**: 실전 테스트 회차 (integer, 1~20). 데이터의 소속을 결정하는 기준값.
*   **`correctAnswer`**: **[전 파트 공통]** 정답 알파벳 (A/B/C/D). (Part 2는 "A"/"B"/"C" 대응)
*   **`options`**: **[공통 필드명]** 단, 내부 구조는 파트별로 다름.
    *   **P1, P2**: `string[]` (단순 발화문 리스트. 리뷰 UI에서 인덱스로 접근)
    *   **P3~P7**: `object` (라벨과 텍스트가 분리된 구조)
*   **`classification`**: (RC) 문법 및 독해 유형 분류 코드.
*   **`questionType`**: (LC) 유형 분류 코드. (Part 2: `Who`, `Where`, `When`, `Why`, `How`, `What`, `Yes/No`, `Choice`, `Statement`, `Indirect` 등)
*   **`contextType`**: (P3-P7 공통) 지문/대화의 상황, 장르, 글의 종류 대분류.
*   **`text`**: (Part 2, 5) 빈칸 포함 문장 또는 직접 발화문(질문/평서문).
*   **`script`**: (LC) 본문 전체. Part 1, 2는 `options` 내에 실제 들리는 스크립트가 포함됨.
*   **`content`**: (RC) 지문 전체 텍스트.
*   **`translation`**: `text` 또는 `script`에 대한 한국어 번역.
*   **`translation_A/B/C/D`**: 각 선택지(options)에 대한 개별 번역 필드.
*   **`partKey`**: (Standard) `p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7s`(단일), `p7d`(복합), `p7f`(전체 54문항).

#### [품질 기준 및 서비스]
*   **Instructor-Grade (강사급)**: 전문적이고 명확한 해설 및 토익 스타일 의역.
*   **Hyper-TOEIC (하이퍼 토익)**: 실제 시험 난이도와 비즈니스 정황을 반영한 고품질 데이터.
*   **Indirect (우회적 답변)**: Part 2에서 질문에 직접 답하지 않고 정황상 맞는 답을 하는 고난도 유형. (AI 분석 중점 대상)
*   **Distractor (오답 함정)**: 유사 발음(Homonyms), 관련 어휘, 동일 단어 반복 등 정답처럼 들리게 만드는 오답 구성 요소.
*   **`mode`**: 문제 풀이 모드 (`real`, `drill`, `type_review`).
*   **Weakness Analysis (약점 분석)**: 유형별 정답률에 기반한 AI 취약점 도출 기능.
*   **Goal Status (목표 상태)**: `_goal` 대비 `_cur` 성취도 추적.

---

## 🛠️ [Detail] 데이터 흐름 및 반영 규칙 (Revised)

### 1. 목표 설정 (Goal Setting)
*   **저장 위치**: `Winter_Users/{userId} -> partTargets`
*   **저장 필드 키**: `p[N]_goal` 형식 (예: `p1_goal`, `p7s_goal`)
*   **운영 계획**: 내일 첫 수업 시 학생들에게 신규 목표 설정을 유도하여 데이터 정합성 즉시 확보.

### 2. 성격별 데이터 필드 (Status Suffix)
*   **`_goal`**: 학생이 설정한 목표치 (정답 개수)
*   **`_cur`**: 해당 회차(`testIndex`)의 가장 최신 성적 (latest)
*   **`_avg`**: 해당 파트의 전체 누적 평균 성적 (average)

### 3. 성적 산출 (Current Score)
*   **산출 방식**: `Manager_Results`에서 `mode: 'real'` 인 데이터 중 **제출 시간(`timestamp`)이 가장 최근**인 것을 쿼리.
*   **원칙**: 회차(`testIndex`) 번호가 높고 낮음과 상관없이, 학생이 **가장 마지막에(마지막 날짜에) 푼 데이터**를 `_cur`로 간주함.

### 4. AI 점수 예측 (Prediction)
*   **공식**: 
    *   `LC_Score = (LC_Cur_Sum * 5) + 10`
    *   `RC_Score = (RC_Cur_Sum * 5) - 10`

---

## ⚠️ 리스크 통제 지침
*   **Double Support**: 코드상에서 `item.correctAnswer || item.answer` 형식을 유지하여 사이트 중단 방지.
*   **Logic Isolation**: 분석/계산 엔진 및 리뷰 UI는 파트별 `options` 구조 차이(배열 vs 객체)를 인지하고 조건별 브랜칭 처리하여 결함 방지.

---
**최종 업데이트**: 2026-01-25 (21:12)  
**작성자**: Antigravity AI Assistant
