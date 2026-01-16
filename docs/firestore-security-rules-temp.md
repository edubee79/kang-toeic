# Firestore Security Rules - 임시 (마이그레이션용)

## ⚠️ 경고: 마이그레이션 완료 후 반드시 안전한 규칙으로 변경하세요!

### 임시 규칙 (마이그레이션용)
Firebase Console → Firestore Database → 규칙 탭에서 아래 규칙으로 교체:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // 임시: 모든 접근 허용
    }
  }
}
```

**게시** 버튼 클릭!

---

## 마이그레이션 완료 후 적용할 안전한 규칙

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
