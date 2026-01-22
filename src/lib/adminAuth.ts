export const ADMIN_USERNAMES = [
    'admin',
    'kangs',
    'teacher'
];

export function isAdmin(username: string | undefined | null): boolean {
    if (!username) return false;
    // Case insensitive check
    return ADMIN_USERNAMES.includes(username.toLowerCase());
}
