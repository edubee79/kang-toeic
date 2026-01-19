# Part 7 지문 데이터 추출 및 양식 적용 가이드

이 문서는 깡쌤토익(Kangs TOEIC) 애플리케이션의 Part 7 (RC) 문제 데이터를 추출하고, 애플리케이션에 올바르게 통합 및 양식을 적용하는 과정을 설명합니다.

## 1. 개요
Part 7은 단일 지문(Single Passage), 이중 지문(Double Passage), 삼중 지문(Triple Passage)으로 구성됩니다. 원본 데이터는 주로 이미지 파일(JPG/PDF) 형태이며, 이를 텍스트로 추출(OCR)하여 TypeScript 데이터 파일로 변환해야 합니다. 최근 업데이트를 통해 **Markdown(마크다운)** 문법을 지원하게 되어, 표(Table)나 강조 구문을 원본과 유사하게 표현할 수 있습니다.

## 2. 작업 워크플로우

### 2.1 데이터 소스 확인
*   **문제 이미지**: `toeic-data/ETS정기기출4탄/문제/RC/[회차]/part7/[유형]/` 경로에 위치합니다.
*   **정답/해설 이미지**: `toeic-data/ETS정기기출4탄/해설/RC/[회차]/` 경로에 위치합니다.
*   **파일명 규칙**: 보통 `RC4_6_10_합치기_XXX.jpg` 형태이며, 연속된 번호로 문제 세트가 이어집니다.

### 2.2 텍스트 추출 (OCR)
이미지에서 텍스트를 추출하기 위해 OCR 도구를 사용합니다 (Google Lens, Naver Clova OCR, 또는 LLM의 Vision 기능).

1.  **Passage (지문)**: 지문의 제목, 날짜, 발신자/수신자 정보, 본문 내용을 추출합니다.
    *   *Tip*: 표(Table)가 있는 경우, 텍스트로 추출하되 행/열 구조를 유지해야 합니다.
2.  **Questions (문제)**: 문제 지문과 4지 선다(A, B, C, D) 보기를 추출합니다.
3.  **Answer Key (정답)**: 해설 이미지에서 해당 문제 번호의 정답(A/B/C/D)을 확인합니다.

### 2.3 데이터 구조화 (Code Generation)
추출한 데이터를 `src/data/rc_part7_test[회차].ts` 파일로 변환합니다. `PracticeSet` 인터페이스를 따릅니다.

```typescript
import { PracticeSet } from './rc_part7_practice';

export const rcPart7Test10: PracticeSet[] = [
    {
        id: 'test10-186-190',
        type: 'Triple', // Double 또는 Single
        passages: [
            {
                id: 'p186-1',
                type: 'SALES REPORT',
                title: 'Report Title',
                content: `Markdown Content...` // 여기에 마크다운 적용
            },
            // ... 추가 지문
        ],
        questions: [
            {
                id: '186',
                text: 'Question text?',
                options: ['(A) Option 1', '(B) Option 2', ...],
                answer: 'C'
            },
            // ... 추가 문제
        ]
    }
];
```

## 3. 양식 적용 (Markdown Styling)

`src/app/homework/part7/practice/page.tsx`에는 `react-markdown`과 `remark-gfm`이 적용되어 있어, 지문(`content`)에 마크다운 문법을 사용할 수 있습니다.

### 3.1 표 (Table) 적용
가장 중요한 기능입니다. Sales Report, Schedule 등 표 데이터를 표현할 때 사용합니다.

**작성 예시 (TypeScript 파일 내):**
```typescript
content: `Flavor | Percent
---|---
Chocolate | 22
Vanilla | 18
Strawberry | 11`
```
*   **주의**: 헤더와 데이터 사이에 `---|---` 구분선이 반드시 있어야 합니다.
*   양 끝의 파이프(`|`)는 생략 가능하지만, 가독성을 위해 사용하는 것을 권장합니다 (`| Flavor | Percent |`).

### 3.2 기타 스타일
*   **굵게 (Bold)**: `**Text**` -> **Text**
*   **기울임 (Italic)**: `*Text*` -> *Text*
*   **리스트 (List)**:
    ```markdown
    - Item 1
    - Item 2
    ```
*   **인용/들여쓰기**: `> Indented text`

### 3.3 다단 레이아웃 (Multi-column Layout) - 신문 기사 스타일
애플리케이션(`page.tsx`)에서 다음 타입의 지문은 자동으로 **2단 레이아웃(Two Columns)**과 **중앙 구분선(Divider)**이 적용됩니다. 데이터 파일에서 별도의 설정은 필요 없으며, `type`만 정확히 지정하면 됩니다.

*   **적용 대상**: `ARTICLE`, `NEWSLETTER`, `REPORT`
*   **특징**:
    *   PC 화면(`md` 이상): 2단으로 나뉘며 중앙에 회색 실선 표시.
    *   모바일 화면: 1단으로 표시.
    *   제목(Title)은 상단 전체 너비를 차지하고 본문만 나뉩니다.

## 4. 시스템 연동
데이터 파일을 생성한 후, 애플리케이션에서 로드할 수 있도록 등록해야 합니다.

1.  **Lobby Page**: `src/app/homework/part7-double/page.tsx` (PC 전용 로비)
    *   `availableTests` 배열에 세트 추가.
2.  **Practice Page**: `src/app/homework/part7/practice/page.tsx` (실제 풀이 화면)
    *   `testDataMap` 객체에 데이터 import 및 매핑.

## 5. 검증 (Verification)
1.  로컬 서버 실행 (`npm run dev`)
2.  브라우저에서 `http://localhost:3000/homework/part7/practice?test=[회차]` 접속
3.  지문이 올바르게 로드되는지 확인
4.  **특히 표(Table)가 깨지지 않고 스타일(border, background)이 적용되었는지 확인**

---

## 6. 향후 연구 및 확장 가능성

### 6.1 Part 6 (문맥상 빈칸 채우기) 적용 연구 결과 (2025.01)
Part 6는 지문 중간에 빈칸(`[131]`)이 뚫려 있는 유형입니다. 초기에는 마크다운 엔진 도입을 고려했으나, 다음과 같은 이유로 **현재 상태(Custom Text Parser)를 유지하기로 결정**했습니다.

*   **데이터 특성**: Part 6 데이터 전수 조사 결과, 마크다운의 핵심 기능인 표(Table)나 복잡한 서식이 필요한 지문이 발견되지 않음 (대부분 줄글).
*   **기존 기능 호환성**: 현재 구현된 빈칸 클릭 상호작용(`renderContentWithMarkers`)이 안정적으로 동작하며, 이를 마크다운 엔진(`ReactMarkdown`)으로 교체할 경우 구조적 복잡도가 증가함.
*   **결론**: 사용자의 결정에 따라 현재의 텍스트 렌더링 방식을 유지함. 단, 추후 다단 레이아웃 등이 필요해지면 `ReactMarkdown` 도입을 재검토할 수 있음.

### 6.2 복잡한 레이아웃 (Grid 등)
송장(Invoice)이나 복잡한 서식은 단순 마크다운 테이블로 어려울 수 있습니다. 이 경우:
1.  **HTML Table**: `rehype-raw`를 사용하여 HTML `<table>` 태그를 직접 data string에 포함.
2.  **Custom Components**: `react-markdown`의 `components` prop을 사용하여 특정 문법을 커스텀 컴포넌트로 대치.

### 6.3 이미지 지문
텍스트로 변환이 불가능한 그래프나 그림은 이미지 URL을 마크다운 이미지 문법(`![Alt](url)`)으로 삽입하여 처리 가능합니다. (`public/images/` 에 에셋 저장 필요)

---

## 7. 데이터 서식 표준화 가이드 (Standardization Guide)

앞으로의 데이터 추출 및 변환 작업 시, 일관된 사용자 경험을 위해 다음의 서식 규칙을 반드시 준수하십시오.

### 7.1 스케줄 및 일정표 (Schedule/Timetable)
시간, 일정, 장소 등의 정보가 나열된 경우 텍스트 나열 대신 **Markdown Table**을 사용합니다.
*   **헤더**: `Time`, `Event`, `Location`, `Presenter` 등 명확한 레이블 사용.
*   **날짜 구분**: 날짜별로 일정이 나뉜 경우, 날짜를 **Bold** 제목으로 표기하고 각 날짜마다 별도의 표를 생성하거나, 표 안에 `Date` 컬럼을 추가합니다.

**Example:**
```markdown
**Friday, May 15**
| Time | Event | Location |
|---|---|---|
| 10:00 A.M. | Opening Ceremony | Main Hall |
| 12:00 P.M. | Lunch Break | Cafeteria |
```

### 7.2 영수증 및 청구서 (Receipt/Invoice)
가격 정보가 포함된 문서는 가독성을 위해 반드시 **Table**로 변환합니다.
*   **필수 컬럼**: `Item` (품목), `Price` (단가), `Total` (합계). 필요 시 `Quantity`, `Description` 추가.
*   **합계 강조**: `Subtotal`, `Tax`, `Total` 등의 요약 행은 **Bold**(`**Value**`) 처리하여 강조합니다.

**Example:**
```markdown
| Item | Quantity | Price |
|---|---|---|
| Consultation Fee | 1 | $150.00 |
| **Total** | | **$150.00** |
```

### 7.3 설문지 및 양식 (Form/Survey)
사용자 입력 양식이나 정보 프로필은 **Table** 또는 **List**를 사용하여 구조화합니다.
*   **프로필/정보**: `Key-Value` 쌍은 `| Field | Detail |` 형태의 표 사용 권장.
*   **체크박스**: 설문 응답 표시는 `[ ]` (빈칸), `[x]` (체크됨) 문법을 사용합니다. 표 내부에서도 사용 가능합니다.

**Example:**
```markdown
| Field | Response |
|---|---|
| **Name** | John Doe |
| **Interested Events** | [x] Workshop <br> [ ] Seminar |
```

### 7.4 복잡한 다단 정보 (Complex Layouts)
인물 명부, 제품 사양서 등 가로로 긴 정보는 식별 가능한 헤더를 가진 **Table**로 정리합니다.
*   한 셀 내에 여러 줄의 정보가 들어갈 경우, 줄바꿈 태그(`<br/>`)를 사용하거나 문맥에 맞게 한 문장으로 이어 씁니다.
