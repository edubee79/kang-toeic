/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: '/index.html',
                destination: '/',
            },
            {
                source: '/login.html',
                destination: '/login',
            },
            {
                source: '/admin.html',
                destination: '/admin/dashboard',
            },
            {
                source: '/homework.html',
                destination: '/homework/part5',
            },
            {
                source: '/Homework_Part5.html',
                destination: '/homework/part5',
            },
            {
                source: '/Part5_Lobby.html',
                destination: '/homework/part5',
            },
            {
                source: '/shadowing1.html',
                destination: '/homework/shadowing-part1',
            },
            {
                source: '/shadowing2.html',
                destination: '/homework/part2-practice',
            },
            {
                source: '/student-report.html',
                destination: '/report',
            },
            {
                source: '/Manager_Logs.html',
                destination: '/report',
            },
        ];
    },
};

// module.exports = withPWA(nextConfig);
module.exports = nextConfig;
