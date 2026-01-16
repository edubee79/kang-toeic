# 📚 TOEIC 데이터 추출 가이드 (ETS 기출 등)

ETS 문제집을 코딩 가능한 데이터(JSON)로 변환하는 가장 효율적인 방법을 정리했습니다.
단순 OCR(글자 인식)만 하면 후처리가 너무 힘듭니다. **LLM(ChatGPT, Claude 등)을 활용해 한 번에 JSON으로 뽑아내는 것이 핵심**입니다.

---

## 🛠️ 준비물
1.  **스캔 앱**: **vFlat** (스마트폰 앱) 추천. 책의 곡면을 보정해서 평평하게 찍어줍니다.
2.  **변환 도구**: **ChatGPT (GPT-4o)** 또는 **Claude 3.5 Sonnet** (이미지 인식 및 JSON 변환 능력이 탁월함).
3.  **이미지 편집**: 윈도우 캡처 도구 (그림/도표 잘라내기용).

---

### ⚡ 작업 워크플로우 (중요: PDF 파일 업로드 ❌ -> 캡처 이미지 업로드 ⭕)

**"PDF 파일을 그냥 올리면" 망합니다.** (텍스트가 깨지거나 할루시네이션 발생)
**"화면을 캡처해서 이미지로 올리면" 정확합니다.** (AI가 사람처럼 눈으로 보고 판단함)

### 1단계: 준비
-   PC 화면 **왼쪽**에 PDF 뷰어 (문제집/해설집)를 띄웁니다.
-   PC 화면 **오른쪽**에 **Gemini / ChatGPT / Claude** 창을 띄웁니다.

### 2단계: 이미지로 먹이기 (핵심)
1.  **이미지 캡처**: `Win + Shift + S`로 문제 부분을 **그림**처럼 캡처합니다.
2.  **붙여넣기**: 채팅창에 `Ctrl + V`로 이미지를 붙여넣습니다.
3.  **명령**: "이거 텍스트랑 정답 JSON으로 뽑아줘" (매직 프롬프트 사용)

---

## 🪄 매직 프롬프트 (Part별)

### 🧩 Part 1 (사진 묘사)
*필요: 해설집 사진 (스크립트 및 정답 나온 부분)*

```text
이 이미지는 TOEIC Part 1 해설지야. 
아래 JSON 형식에 맞춰서 텍스트를 추출해줘.
이미지 파일명은 나중에 캡처해서 넣을 거라 `p1_q1.jpg` 식으로 규칙적으로 지어줘.

[Target JSON Format]
[
  {
    "id": "LC_P1_001",
    "part": 1,
    "imageName": "LC_P1_001.jpg", 
    "correctAnswer": "A", 
    "scripts": [
       { "option": "A", "text": "He is holding a pen.", "translation": "그는 펜을 잡고 있다." },
       { "option": "B", "text": "...", "translation": "..." }
    ]
  }
]
```

### 🧩 Part 2 (질의 응답)
*필요: 해설집 사진*

```text
이 이미지는 TOEIC Part 2 해설지야. 
질문(Question)과 답변(Response A, B, C)을 아래 JSON 포맷으로 깔끔하게 정리해줘.

[Target JSON Format]
[
  {
    "id": "LC_P2_007",
    "part": 2,
    "question": "Where is the meeting room?",
    "translation": "회의실이 어디인가요?",
    "correctAnswer": "B",
    "options": [
      { "label": "A", "text": "It's at 2 o'clock.", "translation": "2시입니다." },
      { "label": "B", "text": "Down the hall.", "translation": "복도 끝에요." },
      { "label": "C", "text": "Room 501.", "translation": "501호요." }
    ]
  }
]
```

### 🧩 Part 3 / 4 (대화/담화)
*필요: 문제집(질문 세트) + 해설집(스크립트) 사진 동시 입력*

```text
이미지 1(문제 세트)과 이미지 2(스크립트)를 보고 하나로 합쳐줘.
하나의 대화(Context)에 3개의 문제(Questions)가 딸린 구조야.

[Target JSON Format]
{
  "setId": "LC_P3_S01",
  "part": 3,
  "scriptType": "dialogue", // or monologue for Part 4
  "dialogues": [
    { "speaker": "M", "text": "Hi, I'm calling about...", "translation": "안녕하세요..." },
    { "speaker": "W", "text": "Sure, let me check.", "translation": "네 확인해볼게요." }
  ],
  "questions": [
    {
      "questionText": "Why is the man calling?",
      "options": ["To order food", "To book a room", "To complain", "To ask a location"],
      "correctAnswer": "B"
    },
    { ... question 2 ... },
    { ... question 3 ... }
  ]
}
```

---

## 🎨 3단계: 이미지 잘라내기 (Cropping)
-   **Part 1**: 문제집의 사진 부분만 캡처 -> `public/images/lc/part1/LC_P1_001.jpg` 저장.
-   **Part 3/4/7**: 도표나 그래프가 있는 경우만 캡처 -> `public/images/lc/part3/LC_P3_S01_img.jpg` 저장.

## 🔊 4단계: 음원 (Audio)
-   우선 갖고 계신 ETS MP3 파일 전체를 `public/audio/lc/` 폴더에 넣습니다.
-   나중에 **Audacity** 같은 툴로 문제별로 자르거나, 웹앱에서 `startTime`, `endTime`을 지정해서 재생하는 방식을 쓸 수 있습니다. (초반엔 통파일 재생 + 시간 지정 방식 추천)
