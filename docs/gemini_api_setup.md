# 🤖 Gemini API 설정 및 자동화 스크립트 사용법

이 가이드는 **Google Gemini AI**를 사용하여 PDF 캡처 이미지를 **자동으로 JSON 데이터로 변환**하는 방법을 설명합니다.

## 1단계: API 키 발급 받기 (무료)
1.  **Google AI Studio** 접속: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2.  로그인 (구글 계정)
3.  **[Create API Key]** 버튼 클릭
4.  생성된 키 복사 (예: `AIzaSyD...`)

## 2단계: 프로젝트에 키 등록하기
1.  VS Code에서 `C:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next` 폴더를 봅니다.
2.  `.env.local` 파일을 엽니다. (없으면 만드세요)
3.  맨 아래에 다음 줄을 추가합니다.
    ```env
    GEMINI_API_KEY=복사한_키_붙여넣기
    ```
    *(주의: `AIza...` 부분에 따옴표 없어도 됩니다. 공백 없이 붙여넣으세요.)*

## 3단계: 이미지 준비
1.  PDF 문제집에서 **Part 1 문제 한 페이지**를 캡처합니다.
2.  이미지 파일을 저장합니다.
    *   예시 경로: `C:\Users\user\Desktop\test_image.png`
    *   (바탕화면에 두면 편합니다)

## 4단계: 스크립트 실행 (마법의 시간 🪄)
VS Code 터미널(`Ctrl + J`)을 열고 아래 명령어를 입력합니다.

```bash
# 기본 사용법
npx tsx scripts/process-part1-gemini.ts "이미지_파일_경로"

# 예시 (바탕화면의 apple.png 파일 처리)
npx tsx scripts/process-part1-gemini.ts "C:\Users\user\Desktop\apple.png"
```

## 5단계: 결과 확인
터미널에 **초록색 글씨**로 JSON 데이터가 출력됩니다.
이 데이터를 복사해서 `resources/questions/part1/set1.json` 등의 파일에 붙여넣으면 끝입니다.

---

### 💡 팁
*   이미지가 깨끗할수록 인식률이 좋습니다.
*   스크립트는 `gemini-pro-vision` 모델을 사용하여 이미지를 분석합니다.
*   한 번에 여러 장을 처리하고 싶다면, 반복문을 돌리는 스크립트로 업그레이드하면 됩니다. (요청하시면 만들어 드립니다!)
