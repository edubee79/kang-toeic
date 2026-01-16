import { Timestamp } from 'firebase/firestore';

export interface University {
    id: string;
    name: string;
    createdAt?: any;
}

export interface User {
    id?: string; // Firestore Document ID
    // 기본 정보
    username: string;        // 아이디 (로그인용, 고유값)
    email: string;           // 이메일 주소
    password: string;        // 해시된 비밀번호

    // 학생 정보
    userId: string;          // 학번
    userName: string;        // 이름
    universityId: string;    // universities 컬렉션 참조
    universityName: string;  // 대학명 (비정규화)
    userClass?: string;      // 수강반

    // 학습 데이터
    passedVocaDays?: number[];

    // 승인 관리
    status: 'pending' | 'approved' | 'rejected';
    registeredAt: Timestamp;
    approvedAt?: Timestamp;
    approvedBy?: string;
    rejectedAt?: Timestamp;
    rejectedBy?: string;
    rejectionReason?: string;
}

export type UserStatus = User['status'];
