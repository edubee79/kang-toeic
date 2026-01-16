# 📘 Master Data Strategy: Universal Router Pipeline

## 1. 🎯 The "Zero Manual Sorting" Philosophy (핵심 철학)
1.  **No Manual Sorting**: 사용자는 PDF를 페이지별로 잘라서(Split) **하나의 폴더**에 몽땅 집어넣는다. (Part 1, 5, 7 섞여 있어도 상관없음)
2.  **AI Auto-Routing**: 스크립트가 각 페이지를 보고 **"이건 Part 5다", "이건 Part 1이다"** 판단하여 스스로 처리 방식을 결정한다.
3.  **Unified Output**: 모든 데이터는 표준화된 JSON 포맷으로 떨어진다.

---

## 2. 📂 Universal Directory Structure (표준 폴더 구조)
가장 단순한 구조를 지향합니다.

```text
raw_data/
├── book_ets_1000/
│   ├── test01/
│   │   ├── pages/            # [Input] 문제지 전체 페이지 (001.jpg ~ 050.jpg)
│   │   └── solutions/        # [Input] 해설지 전체 페이지 (sol_001.jpg ...)
│   └── _output/              # [Output] 
│       ├── extracted_data.json  # 통합 추출 결과
│       └── crops/               # Part 1, Part 7 도표 등 크롭된 이미지들
```

---

## 3. � The Universal Router (자동 분류 및 추출기)
`scripts/process-universal.ts`가 수행할 로직:

### Step 1: Identification (판별)
*   이미지를 보고 파트 식별:
    *   **Part 1**: 큰 사진 1~2장 + (A)(B)(C)(D) 마킹 란
    *   **Part 2**: Mark your answer on your answer sheet 문구
    *   **Part 3/4**: Questions 32-34... 형태의 지문
    *   **Part 5**: 101. [빈칸] 문제 유형
    *   **Part 6/7**: 긴 지문 + 딸린 문제들

### Step 2: Adaptive Extraction (가변 추출)
| Detected Part | Action | Output Fields |
| :--- | :--- | :--- |
| **Part 1** | **Crop Photo** + Extract Text | `imagePath` (cropped), `options` (if any) |
| **Part 2** | Extract Question No. (Audio based) | `id` only (Content comes from Solution Book) |
| **Part 3/4** | Extract **Text Cluster** + **Crop Graphic** | `contextText`, `questions`, `graphicImage` |
| **Part 5** | Extract **Text Questions** | `questionText`, `options` |
| **Part 6/7** | Extract **Passage + Questions** | `passageText`, `questions` |

---

## 4. 🏷️ Universal Classification Taxonomy (표준 유형 분류표)
모든 문제는 추출 후 이 분류 체계에 따라 태깅됩니다.

### 🟡 Part 1 (Photographs)
| Code | Meaning |
| :--- | :--- |
| `P1_ONE_PERSON` | 1인 등장 |
| `P1_MULTI_PEOPLE` | 2인 이상 |
| `P1_OBJECTS` | 사물/풍경 |

### 🔵 Part 3/4 (LC)
| Code | Meaning |
| :--- | :--- |
| `LC_GIST` | 주제/목적 |
| `LC_DETAIL` | 세부 정보 |
| `LC_INFERENCE` | 화자 의도/추론 |
| `LC_GRAPHIC` | 시각 정보 연계 |

### 🟣 Part 5/6 (Grammar/Vocab)
| Code | Meaning |
| :--- | :--- |
| `G_POS` | 품사 자리 (명사/형용사 등) |
| `G_VERB` | 동사 (수/태/시제) |
| `G_CONJ` | 전치사/접속사 |
| `V_NOUN` / `V_VERB` | 어휘(명/동/형/부) |

### 🟠 Part 7 (Reading)
| Code | Meaning |
| :--- | :--- |
| `RC_DETAIL` | 세부 내용 찾기 |
| `RC_INFERENCE` | 암시/추론 |
| `RC_NOT_TRUE` | True/Not True |
| `RC_SYNONYM` | 동의어 찾기 |

---

## 5. ✅ Action Plan (Next Step)
**승인해주시면 다음 순서로 바로 구현합니다:**
1.  **`src/types/toeic-schema.ts`**: 전체 파트를 아우르는 통합 인터페이스 정의.
2.  **`scripts/process-universal.ts`**: "Router(파트 판별기)" 로직 강화 + 파트별 추출기 통합.
3.  **전체 폴더 넣고 돌리기**: 선생님이 갖고 계신 폴더(혼합) 그대로 넣고 테스트.
