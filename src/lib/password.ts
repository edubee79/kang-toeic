import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

/**
 * Validate password strength
 * - At least 8 characters
 * - At least one letter and one number
 */
export function validatePassword(password: string): { valid: boolean; message?: string } {
    if (password.length < 8) {
        return { valid: false, message: '비밀번호는 최소 8자 이상이어야 합니다.' };
    }

    if (!/[A-Za-z]/.test(password)) {
        return { valid: false, message: '비밀번호는 최소 1개의 영문자를 포함해야 합니다.' };
    }

    if (!/[0-9]/.test(password)) {
        return { valid: false, message: '비밀번호는 최소 1개의 숫자를 포함해야 합니다.' };
    }

    return { valid: true };
}
