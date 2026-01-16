'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, query, where, getDocs, addDoc, Timestamp, orderBy } from 'firebase/firestore'; // Added orderBy
import { db } from '@/lib/firebase';
import { hashPassword, validatePassword } from '@/lib/password';
// import { getUniversities, University } from '@/services/admin-service'; // Removed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Loader2, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        userId: '',
        userName: '',
        userClass: '650반', // Default fallback
        universityId: '',
        password: '',
        confirmPassword: ''
    });
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [universities, setUniversities] = useState<{ id: string, name: string }[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Classes
                const qClass = query(collection(db, "Classes"), orderBy("name"));
                const classSnapshot = await getDocs(qClass);
                const classList: { name: string }[] = [];
                classSnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.name) classList.push({ name: data.name });
                });
                if (classList.length > 0) {
                    setClasses(classList);
                    setFormData(prev => ({ ...prev, userClass: classList[0].name }));
                } else {
                    setClasses([{ name: '650반' }, { name: '750반' }, { name: '850반' }]);
                }

                // Fetch Universities
                const qUniv = query(collection(db, "Universities"), orderBy("name"));
                const univSnapshot = await getDocs(qUniv);
                const univList: { id: string, name: string }[] = [];
                univSnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.name) univList.push({ id: doc.id, name: data.name });
                });

                if (univList.length > 0) {
                    setUniversities(univList);
                } else {
                    // Fallback
                    setUniversities([
                        { id: '1', name: '영남대학교' },
                        { id: '2', name: '계명대학교' },
                        { id: '3', name: '대구대학교' }
                    ]);
                }

            } catch (error) {
                console.error("Error fetching form data:", error);
                setClasses([{ name: '650반' }, { name: '750반' }, { name: '850반' }]);
                setUniversities([
                    { id: '1', name: '영남대학교' },
                    { id: '2', name: '계명대학교' },
                    { id: '3', name: '대구대학교' }
                ]);
            }
        };

        fetchData();
    }, []);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError('');
    };

    const validateForm = (): boolean => {
        if (!formData.username || !formData.email || !formData.password ||
            !formData.confirmPassword || !formData.universityId || !formData.userId || !formData.userName) {
            setError('모든 필드를 입력해주세요.');
            return false;
        }

        if (!/^[a-zA-Z0-9]{4,20}$/.test(formData.username)) {
            setError('아이디는 영문과 숫자만 사용하여 4-20자로 입력해주세요.');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError('올바른 이메일 주소를 입력해주세요.');
            return false;
        }

        const passwordValidation = validatePassword(formData.password);
        if (!passwordValidation.valid) {
            setError(passwordValidation.message || '비밀번호가 유효하지 않습니다.');
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return false;
        }

        return true;
    };

    const checkDuplicates = async (): Promise<boolean> => {
        const usernameQuery = query(
            collection(db, "Winter_Users"),
            where("username", "==", formData.username)
        );
        const usernameSnapshot = await getDocs(usernameQuery);
        if (!usernameSnapshot.empty) {
            setError('이미 사용 중인 아이디입니다.');
            return false;
        }

        const emailQuery = query(
            collection(db, "Winter_Users"),
            where("email", "==", formData.email)
        );
        const emailSnapshot = await getDocs(emailQuery);
        if (!emailSnapshot.empty) {
            setError('이미 사용 중인 이메일입니다.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            if (!validateForm()) {
                setIsLoading(false);
                return;
            }

            const isUnique = await checkDuplicates();
            if (!isUnique) {
                setIsLoading(false);
                return;
            }

            const hashedPassword = await hashPassword(formData.password);
            const selectedUniversity = universities.find(u => u.id === formData.universityId);

            if (!selectedUniversity) {
                setError('대학교를 선택해주세요.');
                setIsLoading(false);
                return;
            }

            await addDoc(collection(db, "Winter_Users"), {
                username: formData.username,
                email: formData.email,
                password: hashedPassword,
                userId: formData.userId,
                userName: formData.userName,
                universityId: formData.universityId,
                universityName: selectedUniversity.name,
                status: 'pending',
                registeredAt: Timestamp.now(),
            });

            setSuccess(true);
            setTimeout(() => router.push('/login'), 3000);

        } catch (error) {
            console.error("Signup error:", error);
            setError('회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
                <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-white shadow-2xl">
                    <CardContent className="pt-10 pb-10 text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-black text-white">회원가입 완료!</h2>
                        <p className="text-slate-400 leading-relaxed">
                            가입 신청이 완료되었습니다.<br />
                            관리자 승인 후 로그인하실 수 있습니다.<br />
                            <span className="text-xs text-slate-500 mt-2 block">잠시 후 로그인 페이지로 이동합니다...</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-white shadow-2xl">
                <CardHeader className="space-y-4 text-center pb-8 border-b border-slate-800/50">
                    <div className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 rounded-full mb-4"></div>
                    <CardTitle className="text-3xl font-black italic tracking-tighter">회원가입</CardTitle>
                    <CardDescription className="text-slate-400 font-medium">
                        깡쌤토익 특강 신청
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                아이디
                            </label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="영문, 숫자 4-20자"
                                value={formData.username || ''}
                                onChange={(e) => handleChange('username', e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                이메일
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@email.com"
                                value={formData.email || ''}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                비밀번호
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="영문, 숫자 포함 8자 이상"
                                value={formData.password || ''}
                                onChange={(e) => handleChange('password', e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                비밀번호 확인
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="비밀번호 재입력"
                                value={formData.confirmPassword || ''}
                                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="university" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                대학교
                            </label>
                            <select
                                id="university"
                                value={formData.universityId || ''}
                                onChange={(e) => handleChange('universityId', e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-md h-12 text-lg font-bold px-3 text-white"
                                required
                            >
                                <option value="">대학교를 선택하세요</option>
                                {universities.map((university) => (
                                    <option key={university.id} value={university.id}>
                                        {university.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="userClass" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                클래스
                            </label>
                            <select
                                id="userClass"
                                name="userClass"
                                value={formData.userClass || ''}
                                onChange={(e) => handleChange('userClass', e.target.value)}
                                className="w-full h-12 bg-slate-950 border border-slate-800 rounded-md px-3 text-white font-bold focus:border-indigo-500 focus:outline-none appearance-none"
                                required
                            >
                                <option value="">클래스를 선택하세요</option>
                                {classes.map((cls) => (
                                    <option key={cls.name} value={cls.name}>{cls.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="userId" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                학번
                            </label>
                            <Input
                                id="userId"
                                type="text"
                                placeholder="20240123"
                                value={formData.userId || ''}
                                onChange={(e) => handleChange('userId', e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="userName" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                이름
                            </label>
                            <Input
                                id="userName"
                                type="text"
                                placeholder="홍길동"
                                value={formData.userName || ''}
                                onChange={(e) => handleChange('userName', e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-center gap-3 text-rose-400 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg shadow-lg shadow-indigo-900/50 mt-6"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    처리 중...
                                </>
                            ) : (
                                "가입 신청"
                            )}
                        </Button>

                        <div className="text-center pt-4">
                            <Link href="/login" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors font-bold">
                                이미 계정이 있으신가요? 로그인
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
