# 📄 Part 1 실전 모드 (Exam Mode) 상세 설계서

## 1. 기술적 의사결정 (OCR 전략)
**Q: Google Cloud Vision OCR은 어떤가요?**
**A: 추천하지 않습니다.** (비효율적)

| 비교 | Google Cloud Vision OCR | LLM (ChatGPT/Claude) Vision |
| :--- | :--- | :--- |
| **장점** | 텍스트 위치(좌표)를 정확히 줌 | **문맥**을 이해하고 구조화해 줌 |
| **단점** | 단순 글자만 줌. "이게 A번 보기다"라는 걸 코드로 다 짜야 함. | 가끔 오타가 있을 수 있음 (검수 필요) |
| **결론** | 개발자가 일일이 파싱 로직을 짜야 하므로 개발 시간이 2배로 듭니다. | **프롬프트 한 방에 JSON이 나오므로 압도적으로 빠릅니다.** |

=> **제안**: 
1. **프로토타입 (오늘)**: 빠르고 쉬운 **LLM Vision (이미지 직접 업로드)** 방식을 씁니다. (6문제 정도는 충분함)
2. **대량 생산 (나중)**: 정확도가 중요하다면 **[Google OCR (텍스트 추출) -> LLM (JSON 구조화)]** 하이브리드 방식을 씁니다.

---

## 2. 데이터 구조 (Data Schema)
Part 1은 "사진 1장 + 들려주는 보기 4개 + 정답" 구조입니다.

### 파일 저장 위치
- **JSON 데이터**: `/resources/questions/part1/set01.json`
- **이미지**: `/public/images/lc/part1/set01/q01.jpg`
- **오디오**: `/public/audio/lc/part1/set01.mp3` (세트 전체 통파일 권장)

### JSON 포맷
```json
{
  "setId": "LC_P1_SET01",
  "title": "Part 1 Practice Test 01",
  "audioBase": "/audio/lc/part1/set01.mp3",
  "questions": [
    {
      "id": "q1",
      "image": "/images/lc/part1/set01/q01.jpg",
      "audioRange": { "start": 15, "end": 28 }, // 통파일 내 재생 구간 (초 단위)
      "correctAnswer": "A",
      "scripts": [
        { "option": "A", "text": "He is holding a document.", "translation": "그는 문서를 잡고 있다." },
        { "option": "B", "text": "The office is empty.", "translation": "사무실이 비어 있다." },
        { "option": "C", "text": "...", "translation": "..." },
        { "option": "D", "text": "...", "translation": "..." }
      ]
    }
  ]
}
```

---

## 3. UI/UX 흐름 (Flow)

### 3-1. 진입 화면 (Entry)
- 메뉴: `Homework > Part 1`
- 탭 구분: **[쉐도잉 학습]** vs **[실전 문제 풀이]**
- **실전 탭** 클릭 시: "Set 01", "Set 02"... 리스트 표시 (생성된 JSON 파일 기준)

### 3-2. 문제 풀이 화면 (Exam UI)
- **레이아웃**: 
  - **좌측**: 거대한 문제 이미지 (확대 가능)
  - **우측**: 
    - 오디오 플레이어 (구간 반복, 0.8x/1.0x 배속)
    - OMR 카드 (ⓐ ⓑ ⓒ ⓓ 버튼)
    - [정답 확인] 버튼 (초기엔 숨김)

- **동작 방식**:
  1. 페이지 진입 시 오디오 자동 재생 (해당 문제 구간만)
  2. 사용자가 정답(예: A) 클릭
  3. **즉시 피드백**:
     - 정답이면: 🟢 초록색 표시 + "딩동댕" 효과음 + 1초 뒤 다음 문제로 자동 이동
     - 오답이면: 🔴 빨간색 표시 + "땡" 효과음 + 스크립트(해설) 자동 펼침 + 오디오 재재생
  
---

## 4. 개발 마일스톤 (Schedule)

### 1일차 (오늘): 뼈대 구축
- [ ] `mock_set01.json` (가짜 데이터) 1개 생성
- [ ] UI 레이아웃 구현 (이미지+오디오+OMR 배치)
- [ ] 오디오 구간 재생 로직 구현 (`Audio` API 활용)

### 2일차: 로직 완성
- [ ] 정답/오답 판독 로직
- [ ] 점수 계산 및 결과 화면
- [ ] 탭 메뉴(쉐도잉/실전) 분리 작업

### 3일차: 데이터 연동
- [ ] 실제 PDF 기반 데이터 1세트 추출 및 적용
