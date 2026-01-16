# Firebase 프로젝트 설정 가이드

## 1. Firebase 프로젝트 생성

### Step 1: Firebase Console 접속
1. https://console.firebase.google.com/ 접속
2. "프로젝트 추가" 클릭

### Step 2: 프로젝트 생성
1. **프로젝트 이름**: `kangs-toeic` (또는 원하는 이름)
2. **Google Analytics**: 선택 사항 (권장: 사용)
3. **프로젝트 생성** 클릭

---

## 2. Firestore Database 설정

### Step 1: Firestore 활성화
1. 왼쪽 메뉴 → **빌드** → **Firestore Database**
2. **데이터베이스 만들기** 클릭

### Step 2: 보안 규칙 선택
- **프로덕션 모드로 시작** 선택 (나중에 규칙 수정)
- 위치: `asia-northeast3` (서울) 선택
- **사용 설정** 클릭

---

## 3. Firebase Authentication 설정

### Step 1: Authentication 활성화
1. 왼쪽 메뉴 → **빌드** → **Authentication**
2. **시작하기** 클릭

### Step 2: 로그인 방법 설정
1. **Sign-in method** 탭
2. **이메일/비밀번호** 사용 설정
3. (선택) **Google** 로그인도 사용 설정

---

## 4. Web App 등록

### Step 1: 앱 추가
1. 프로젝트 개요 → **웹 앱 추가** (</> 아이콘)
2. **앱 닉네임**: `kangs-toeic-web`
3. **Firebase Hosting 설정**: 체크 (선택사항)
4. **앱 등록** 클릭

### Step 2: Firebase Config 복사
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "kangs-toeic.firebaseapp.com",
  projectId: "kangs-toeic",
  storageBucket: "kangs-toeic.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## 5. 환경변수 설정

### `.env.local` 파일 생성
프로젝트 루트에 `.env.local` 파일 생성:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=kangs-toeic.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=kangs-toeic
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=kangs-toeic.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

⚠️ **주의**: `.env.local`은 `.gitignore`에 포함되어 있어야 합니다 (이미 포함됨)

---

## 6. Firestore Security Rules 배포

### Firebase Console에서 설정
1. **Firestore Database** → **규칙** 탭
2. 아래 규칙 복사/붙여넣기:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // vocabularies: 인증된 사용자 모두 읽기, 관리자만 쓰기
    match /vocabularies/{wordId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // userVocabulary: 본인 것만 읽기/쓰기
    match /userVocabulary/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /srsCards/{wordId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    // wordStatus: 본인 것만 읽기/쓰기
    match /wordStatus/{statusId} {
      allow read, write: if request.auth != null && 
                            statusId.matches('^' + request.auth.uid + '_.*');
    }
    
    // learningSessions: 본인 것만 읽기/쓰기, 강사는 모두 읽기
    match /learningSessions/{sessionId} {
      allow read: if request.auth != null && (
        resource.data.userId == request.auth.uid ||
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['instructor', 'admin']
      );
      allow write: if request.auth != null && resource.data.userId == request.auth.uid;
    }
    
    // users: 본인 것만 읽기/쓰기
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. **게시** 클릭

---

## 7. 마이그레이션 스크립트 실행 준비

### Step 1: 필요한 패키지 확인
```bash
npm install firebase
npm install -D tsx  # TypeScript 실행용
```

### Step 2: package.json에 스크립트 추가
```json
{
  "scripts": {
    "migrate": "tsx scripts/migrate-vocabulary.ts"
  }
}
```

### Step 3: 마이그레이션 실행
```bash
npm run migrate
```

---

## 8. 검증

### Firestore Console에서 확인
1. **Firestore Database** → **데이터** 탭
2. `vocabularies` 컬렉션 확인
3. 총 문서 수: ~4,800개 확인

### 샘플 쿼리 테스트
```typescript
// 650점 단어만 가져오기
const q = query(
  collection(db, 'vocabularies'),
  where('targetScore', '==', 650)
);
```

---

## 완료 체크리스트

- [ ] Firebase 프로젝트 생성
- [ ] Firestore Database 활성화
- [ ] Authentication 설정
- [ ] Web App 등록
- [ ] `.env.local` 파일 생성
- [ ] Security Rules 배포
- [ ] 마이그레이션 스크립트 실행
- [ ] 데이터 검증 완료

---

**다음 단계**: 마이그레이션 완료 후 Week 2 (UI 개발) 시작
