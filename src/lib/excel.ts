import * as XLSX from 'xlsx';
import { Part5Question, Part6Passage, Part6Question } from '@/types/toeic';

export interface ExcelRow {
    schoolName: string;
    userId: string;      // 학번
    userName: string;    // 이름
}

// Part 5 Excel Row Interface
interface Part5Row {
    Unit: string;
    Question_No: number;
    Question: string;
    Option_A: string;
    Option_B: string;
    Option_C: string;
    Option_D: string;
    Answer: string;
    Type_Tag?: string;
    Explanation?: string;
}

// Part 6 Excel Row Interface
interface Part6Row {
    Passage_ID: string;
    Doc_Type: string;
    Passage_Content: string;
    Question_No: number;
    Question_Instruction: string;
    Option_A: string;
    Option_B: string;
    Option_C: string;
    Option_D: string;
    Answer: string;
    Type_Tag?: string;
}

/**
 * Parse Excel file and extract student data
 * Expected columns: 학교명 | 학번 | 이름
 */
export async function parseExcelFile(file: File): Promise<ExcelRow[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = XLSX.read(data, { type: 'binary' });

                // Get first sheet
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                // Convert to JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];

                // Skip header row and parse data
                const rows: ExcelRow[] = [];
                for (let i = 1; i < jsonData.length; i++) {
                    const row = jsonData[i];
                    if (row.length >= 3 && row[0] && row[1] && row[2]) {
                        rows.push({
                            schoolName: String(row[0]).trim(),
                            userId: String(row[1]).trim(),
                            userName: String(row[2]).trim(),
                        });
                    }
                }

                resolve(rows);
            } catch (error) {
                reject(new Error('엑셀 파일 파싱 중 오류가 발생했습니다.'));
            }
        };

        reader.onerror = () => {
            reject(new Error('파일을 읽을 수 없습니다.'));
        };

        reader.readAsBinaryString(file);
    });
}

/**
 * Validate Excel data format
 */
export function validateExcelData(rows: ExcelRow[]): { valid: boolean; message?: string } {
    if (rows.length === 0) {
        return { valid: false, message: '엑셀 파일에 데이터가 없습니다.' };
    }

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (!row.schoolName || !row.userId || !row.userName) {
            return {
                valid: false,
                message: `${i + 2}번째 행에 누락된 데이터가 있습니다. (학교명, 학번, 이름 모두 필요)`
            };
        }
    }

    return { valid: true };
}

/**
 * Parse Part 5 Excel/CSV
 */
export async function parsePart5Excel(file: File): Promise<Part5Question[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet) as Part5Row[];

                const questions: Part5Question[] = jsonData.map((row) => ({
                    type: 'Part5',
                    unit: row.Unit || 'Unknown',
                    questionNumber: Number(row.Question_No),
                    question: row.Question,
                    options: [
                        String(row.Option_A || ''),
                        String(row.Option_B || ''),
                        String(row.Option_C || ''),
                        String(row.Option_D || '')
                    ],
                    answer: String(row.Answer || '').toLowerCase(),
                    tags: row.Type_Tag ? row.Type_Tag.split(',').map(t => t.trim()) : [],
                    explanation: row.Explanation
                }));

                resolve(questions);
            } catch (error) {
                reject(new Error('Part 5 엑셀 파싱 실패'));
            }
        };
        reader.readAsBinaryString(file);
    });
}

/**
 * Parse Part 6 Excel/CSV (Grouping by Passage_ID)
 */
export async function parsePart6Excel(file: File): Promise<Part6Passage[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet) as Part6Row[];

                const passageMap = new Map<string, Part6Passage>();

                jsonData.forEach((row) => {
                    const pid = row.Passage_ID;
                    if (!pid) return;

                    // Initialize passage if not exists
                    if (!passageMap.has(pid)) {
                        passageMap.set(pid, {
                            type: 'Part6',
                            passageId: pid,
                            docType: row.Doc_Type || 'Text',
                            content: row.Passage_Content || '', // Assuming first row has content
                            questions: []
                        });
                    }

                    // For subsequent rows of same passage, content might be empty or repeated.
                    // We trust the first occurrence or non-empty one.
                    const existingPassage = passageMap.get(pid)!;
                    if (!existingPassage.content && row.Passage_Content) {
                        existingPassage.content = row.Passage_Content;
                    }

                    // Add question
                    if (row.Question_No) {
                        const question: Part6Question = {
                            questionNumber: Number(row.Question_No),
                            instruction: row.Question_Instruction,
                            options: [
                                String(row.Option_A || ''),
                                String(row.Option_B || ''),
                                String(row.Option_C || ''),
                                String(row.Option_D || '')
                            ],
                            answer: String(row.Answer || '').toLowerCase(),
                            tags: row.Type_Tag ? row.Type_Tag.split(',').map(t => t.trim()) : []
                        };
                        existingPassage.questions.push(question);
                    }
                });

                resolve(Array.from(passageMap.values()));
            } catch (error) {
                reject(new Error('Part 6 엑셀 파싱 실패'));
            }
        };
        reader.readAsBinaryString(file);
    });
}
