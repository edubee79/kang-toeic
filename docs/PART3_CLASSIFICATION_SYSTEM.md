# TOEIC Part 3 Classification System (분류 기준표)

이 문서는 Part 3 대화 스크립트의 `contextType`을 분류하기 위한 표준 가이드라인입니다. 대화의 주요 상황과 목적에 따라 다음과 같이 4개의 메인 카테고리와 세부 카테고리로 분류합니다.

## A. 업무 진행 및 회사 생활 (Business Operations)
*   **A1 Meeting / Schedule**: 회의 일정 잡기, 변경, 의제 논의 등
*   **A2 Project / Task Progress**: 프로젝트 진행 상황 공유, 업무 지시, 협업 논의
*   **A3 HR / Leave / Attendance**: 인사(채용/퇴직), 휴가, 출근/근태, 복지 등
*   **A4 Budget / Expense / Approval**: 예산 협의, 비용 청구, 결재 승인 과정
*   **A5 Training / Education**: 신입 사원 교육, 워크숍, 사내 교육 세션

## B. 고객 서비스 및 영업 (Customer Service / Sales)
*   **B1 Complaint / Problem**: 고객 불만 처리, 제품 결함, 서비스 오류 대응
*   **B2 Order / Delivery**: 주문 확인, 배송 상태 문의, 반품 및 교환
*   **B3 Sales / Marketing**: 영업 제안, 마케팅 캠페인 논의, 가격 협상
*   **B4 Inquiry / Information**: 제품/서비스 일반 문의, 영업 시간 확인, 정보 요청

## C. 여행 및 행사 (Travel / Events)
*   **C1 Booking / Reservation**: 호텔, 식당, 항공권 예약 및 확인
*   **C2 Transportation / Trip**: 출장 계획, 대중교통 이용, 교통 상황 보고
*   **C3 Schedule Change / Cancellation**: 여행/행사 일정 변경 또는 취소 안내
*   **C4 Event Planning / Hosting**: 컨퍼런스, 파티, 박람회 기획 및 운영

## D. 시설 및 사무실 관리 (Facilities / Workplace)
*   **D1 Office Equipment**: 복사기, 컴퓨터 등 사무기기 설치 및 수리
*   **D2 IT / System Error**: 소프트웨어 문제, 서버 오류, 비밀번호 재설정 등 IT 기술 지원
*   **D3 Building / Maintenance**: 건물 수리, 청소, 시설 점검, 리모델링

---

### **분류 적용 원칙**
1.  **가장 구체적인 상황 우선**: 대화가 여러 상황을 포함할 경우, 문제 해결이나 행동의 핵심 동기가 되는 코드를 선택합니다.
2.  **형식 유지**: `[코드] [세부 카테고리]` 형식을 유지합니다. (예: `B2 Order / Delivery`)
3.  **데이터 무결성**: 분석 시스템(`weaknessGenerator.ts`)에서 이 코드를 기반으로 약점 유형을 분석하므로, 정확한 코드 입력이 중요합니다.
