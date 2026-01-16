import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const set = searchParams.get('set') || '1';

    // Path to resources/questions/part1/setX.json
    // Assumes resources is at project root
    const jsonPath = path.join(process.cwd(), 'resources', 'questions', 'part1', `set${set}.json`);

    if (!fs.existsSync(jsonPath)) {
        return NextResponse.json({ error: 'Data not found', path: jsonPath }, { status: 404 });
    }

    try {
        const fileContent = fs.readFileSync(jsonPath, 'utf8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to parse JSON' }, { status: 500 });
    }
}
