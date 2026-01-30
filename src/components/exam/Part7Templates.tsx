import React from 'react';
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------
export type DocType = 'email' | 'letter' | 'notice' | 'memo' | 'article' | 'advertisement' | 'form' | 'text_message' | 'online_chat' | 'web_page' | 'table';

export interface BaseDocProps {
    content: string[]; // Paragraphs
    className?: string;
}

export interface EmailProps extends BaseDocProps {
    header?: {
        from?: string;
        to?: string;
        date?: string;
        subject?: string;
    };
}

export interface LetterProps extends BaseDocProps {
    header?: {
        date?: string;
        recipient_address?: string[];
    };
}

export interface NoticeProps extends BaseDocProps {
    header: {
        title: string;
        subtitle?: string;
    };
}

export interface ArticleProps extends BaseDocProps {
    header: {
        headline: string;
        sub_headline?: string;
        author?: string;
        date?: string;
    };
}

export interface AdvertisementProps extends BaseDocProps {
    header: {
        title: string;
        tagline?: string;
    };
    footer?: string; // e.g., "Visit us at..." or "Call 555-0199"
}

export interface TextChainProps {
    messages: {
        sender: string;
        time: string;
        text: string;
        is_me?: boolean;
    }[];
    className?: string;
}

export interface WebPageProps extends BaseDocProps {
    header?: {
        url?: string;
        navItems?: string[];
    };
}


export interface TableProps extends BaseDocProps {
    header: {
        title: string;
        date?: string;
    };
    table_data: {
        headers: string[];
        rows: string[][];
        summary?: string; // e.g., "Total: $500"
    };
}

// ----------------------------------------------------------------------------
// Components
// ----------------------------------------------------------------------------

/**
 * 1. Email Template (ETS Style)
 * Mimics the classic ETS printed email look.
 */
export const EmailTemplate: React.FC<EmailProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-[13px] text-gray-900 border-[2px] border-solid border-black p-0 bg-white shadow-md overflow-hidden", className)}>
            {/* Top Bar - Window Style */}
            <div className="bg-[#e1e1e1] border-b-[2px] border-black px-3 h-7 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white border border-gray-400" />
                    <span className="text-[11px] font-bold text-gray-700 italic">*E-mail*</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-4 h-[1px] bg-gray-600" />
                    <div className="w-4 h-3 border border-gray-600" />
                </div>
            </div>

            {/* Header Fields - Organized List */}
            <div className="p-3 bg-white border-b border-gray-200">
                <div className="grid grid-cols-[70px_1fr] gap-x-2 gap-y-1">
                    <span className="text-gray-500 font-medium">To:</span>
                    <span className="text-black font-semibold border-b border-gray-100">{header?.to}</span>
                    <span className="text-gray-500 font-medium">From:</span>
                    <span className="text-black font-semibold border-b border-gray-100">{header?.from}</span>
                    <span className="text-gray-500 font-medium">Date:</span>
                    <span className="text-black font-semibold border-b border-gray-100">{header?.date}</span>
                    <span className="text-gray-500 font-medium">Subject:</span>
                    <span className="text-black font-bold border-b border-gray-100">{header?.subject}</span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 pt-5 leading-relaxed text-[14px] text-justify whitespace-pre-wrap min-h-[150px]">
                {content.join('\n\n')}
            </div>
        </div>
    );
};

/**
 * 2. Letter Template
 * Serif font, traditional layout with date/address at top right or left.
 */
export const LetterTemplate: React.FC<LetterProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-serif text-sm text-gray-900 p-6 bg-white border border-gray-200 shadow-sm", className)}>
            {header && (
                <div className="mb-6 text-gray-800">
                    {header.date && <p className="mb-4">{header.date}</p>}
                    {header.recipient_address && (
                        <div className="space-y-0.5">
                            {header.recipient_address.map((line, i) => <p key={i}>{line}</p>)}
                        </div>
                    )}
                </div>
            )}
            <div className="space-y-3 leading-relaxed text-justify">
                {content.map((para, i) => <p key={i}>{para}</p>)}
            </div>
        </div>
    );
};

/**
 * 3. Notice / Memo Template
 * Bold centered title, often sans-serif. Used for internal announcements.
 */
export const NoticeTemplate: React.FC<NoticeProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-sm text-gray-900 border-[2px] border-black p-0 bg-white shadow-md", className)}>
            <div className="bg-gray-100 border-b-[2px] border-black p-4 text-center">
                <h2 className="text-xl font-extrabold uppercase tracking-widest text-black">{header.title}</h2>
                {header.subtitle && <p className="text-sm font-bold text-gray-600 mt-1">{header.subtitle}</p>}
            </div>
            <div className="p-6 space-y-4 leading-relaxed text-[14px] text-justify">
                {content.map((para, i) => <p key={i}>{para}</p>)}
            </div>
        </div>
    );
};

/**
 * 4. Article Template
 * Newspaper style. Headline, byline, dual columns usually (but here we just use block for simplicity unless requested).
 */
export const ArticleTemplate: React.FC<ArticleProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-serif text-sm text-gray-900 p-0 bg-transparent", className)}>
            <div className="border-b-2 border-black pb-2 mb-4">
                <h1 className="text-2xl font-bold leading-tight mb-2 font-sans">{header.headline}</h1>
                {header.sub_headline && <h3 className="text-lg italic text-gray-700 mb-2">{header.sub_headline}</h3>}
                <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest mt-3">
                    {header.author && <span>{header.author}</span>}
                    {header.date && <span>{header.date}</span>}
                </div>
            </div>
            <div className="space-y-3 leading-relaxed text-justify columns-1 sm:columns-2 gap-6">
                {content.map((para, i) => <p key={i} className="mb-3 break-inside-avoid">{para}</p>)}
            </div>
        </div>
    );
};

/**
 * 5. Advertisement Template
 * Flashy, centered text, borders, maybe bullet points.
 */
export const AdvertisementTemplate: React.FC<AdvertisementProps> = ({ header, content, footer, className }) => {
    return (
        <div className={cn("font-sans text-sm text-gray-900 border border-dashed border-gray-400 p-6 bg-gray-50", className)}>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-blue-900 uppercase">{header.title}</h2>
                {header.tagline && <p className="text-base font-medium text-blue-700 mt-2">{header.tagline}</p>}
            </div>
            <div className="space-y-4 text-center">
                {content.map((para, i) => <p key={i} className="font-medium">{para}</p>)}
            </div>
            {footer && (
                <div className="mt-6 pt-4 border-t border-gray-300 text-center font-bold text-sm text-gray-600">
                    {footer}
                </div>
            )}
        </div>
    );
};

/**
 * 6. Text Message Template (ETS Smartphone Style)
 * Mimics a smartphone screen with unified white message boxes.
 */
export const TextMessageTemplate: React.FC<TextChainProps> = ({ messages, className }) => {
    return (
        <div className={cn("max-w-[400px] mx-auto border-[5px] border-gray-700 rounded-[2.5rem] p-1.5 bg-gray-700 shadow-xl", className)}>
            {/* Top Speaker / Notch */}
            <div className="h-5 w-24 bg-gray-700 mx-auto -mb-1 relative z-10 flex items-center justify-center">
                <div className="h-1.5 w-10 bg-gray-800 rounded-full"></div>
            </div>

            <div className="bg-[#cbd5e1] p-3 pt-6 rounded-[2rem] space-y-2 min-h-[350px]">
                {messages.map((msg, i) => (
                    <div key={i} className="bg-white border border-gray-400 rounded-2xl p-3 px-4 shadow-sm">
                        <div className="font-bold text-[13px] text-gray-900 mb-1">
                            {msg.sender} ({msg.time})
                        </div>
                        <div className="text-[13px] text-gray-800 leading-snug whitespace-pre-wrap">
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Home Indicator area */}
            <div className="h-8"></div>
        </div>
    );
};

/**
 * 7. Online Chat Template (ETS Web Chat Style)
 * Mimics a desktop web browser chat window with compact boxes.
 */
export const OnlineChatTemplate: React.FC<TextChainProps> = ({ messages, className }) => {
    return (
        <div className={cn("font-sans text-[13px] text-gray-900 border border-gray-400 rounded-lg overflow-hidden bg-white shadow-md", className)}>
            {/* Browser/Window Header */}
            <div className="bg-[#e2e8f0] border-b border-gray-400 p-2 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-4 text-[11px] font-bold text-gray-600 uppercase tracking-tighter">Online Chat / Discussion</span>
                </div>
                <div className="text-[10px] text-gray-400">🌐 Web-based</div>
            </div>

            {/* Chat Body with Silver Background like the image */}
            <div className="bg-[#cbd5e1] p-4 space-y-2 min-h-[300px]">
                {messages.map((msg, i) => (
                    <div key={i} className="bg-white border border-gray-300 rounded-xl p-3 px-4 shadow-sm max-w-[95%]">
                        <div className="flex justify-between items-baseline mb-1">
                            <span className="font-bold text-blue-900">{msg.sender}</span>
                            <span className="text-[10px] text-gray-500 font-medium">({msg.time})</span>
                        </div>
                        <div className="text-[13px] text-gray-800 leading-snug whitespace-pre-wrap">
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input area mockup */}
            <div className="bg-white border-t border-gray-300 p-2 px-4 text-gray-300 italic text-[11px]">
                Type a message...
            </div>
        </div>
    );
};

/**
 * 8. Web Page Template (Browser Style)
 */
export const WebPageTemplate: React.FC<WebPageProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-[13px] text-gray-900 border border-gray-400 rounded-t-md overflow-hidden bg-white shadow-md", className)}>
            {/* Browser Header */}
            <div className="bg-gray-200 border-b border-gray-400 p-2 flex items-center gap-3">
                <div className="flex gap-1.5 px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-300 rounded px-3 py-0.5 text-[11px] text-gray-500 flex items-center gap-2">
                    <span className="opacity-50">🔒</span> {header?.url || 'www.kangs-toeic.com'}
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex gap-4 text-[11px] font-bold text-gray-600 uppercase">
                {header?.navItems?.map((item, i) => (
                    <span key={i} className="hover:text-blue-600 cursor-pointer">{item}</span>
                )) || (
                        <><span>Home</span><span>About Us</span><span>Contact</span></>
                    )}
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-4 leading-relaxed text-justify">
                {content.map((para, i) => <p key={i}>{para}</p>)}
            </div>
        </div>
    );
};


/**
 * 7. Table Template (Schedule, Invoice, etc.)
 */
export const TableTemplate: React.FC<TableProps> = ({ header, content, table_data, className }) => {
    return (
        <div className={cn("font-sans text-sm text-gray-900 border border-gray-900 bg-white p-4", className)}>
            <div className="text-center mb-4">
                <h2 className="text-xl font-bold uppercase tracking-tight">{header.title}</h2>
                {header.date && <p className="text-sm text-gray-600 mt-1">{header.date}</p>}
            </div>

            {/* Optional intro text */}
            {content && content.length > 0 && (
                <div className="mb-4 space-y-2 text-justify">
                    {content.map((para, i) => <p key={i}>{para}</p>)}
                </div>
            )}

            {/* The Table */}
            <div className="overflow-hidden border border-gray-400">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-400">
                            {table_data.headers.map((h, i) => (
                                <th key={i} className="py-2 px-3 font-bold text-xs uppercase border-r border-gray-300 last:border-r-0">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table_data.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b border-gray-200 last:border-b-0">
                                {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="py-2 px-3 border-r border-gray-200 last:border-r-0 text-sm">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Summary/Footer (e.g. Total Price) */}
            {table_data.summary && (
                <div className="mt-3 text-right font-bold text-base bg-gray-50 p-2 border-t border-gray-300">
                    {table_data.summary}
                </div>
            )}
        </div>
    );
};


// ----------------------------------------------------------------------------
// Main Factory Component
// ----------------------------------------------------------------------------
export const DocumentRenderer: React.FC<DocumentRendererProps> = ({ doc }) => {
    if (!doc) return null;

    // --- Helper to map diverse titles/types to 9 standard templates ---
    const resolveDocType = (rawType: string): DocType => {
        const type = rawType?.toLowerCase() || '';

        if (type.includes('email')) return 'email';
        if (type.includes('letter') || type.includes('invitation')) return 'letter';
        if (type.includes('web') || type.includes('online portal') || type.includes('url') || type.includes('webinar')) return 'web_page';
        if (type.includes('text message') || type.includes('sms')) return 'text_message';
        if (type.includes('chat') || type.includes('discussion') || type.includes('text_chain')) return 'online_chat';
        if (type.includes('article')) return 'article'; // Only article gets the split layout
        if (type.includes('notice') || type.includes('announcement') || type.includes('memo') || type.includes('report') || type.includes('review') || type.includes('posting')) return 'notice';
        if (type.includes('advertisement') || type.includes('ad')) return 'advertisement';
        if (type.includes('form') || type.includes('receipt') || type.includes('invoice') || type.includes('table') || type.includes('survey')) return 'table';

        return 'notice';
    };

    // --- Helper to parse legacy string content ---
    let finalDoc = { ...doc };
    const resolvedType = resolveDocType(doc.type || doc.title || '');

    if (typeof doc.content === 'string') {
        const text = doc.content as string;

        if (resolvedType === 'email') {
            const lines = text.split('\n');
            const header: any = {};
            const contentLines: string[] = [];
            let headerDone = false;

            lines.forEach(line => {
                const trimmedLine = line.trim();
                if (!headerDone) {
                    const lowerLine = trimmedLine.toLowerCase();
                    if (lowerLine.startsWith('to:')) header.to = trimmedLine.substring(3).trim();
                    else if (lowerLine.startsWith('from:')) header.from = trimmedLine.substring(5).trim();
                    else if (lowerLine.startsWith('subject:')) header.subject = trimmedLine.substring(8).trim();
                    else if (lowerLine.startsWith('date:')) header.date = trimmedLine.substring(5).trim();
                    else if (trimmedLine === '') headerDone = true;
                    else headerDone = true;
                } else {
                    contentLines.push(line);
                }
            });
            finalDoc.header = { ...header, ...doc.header };
            finalDoc.content = [contentLines.join('\n').trim()];
        } else if (resolvedType === 'online_chat' || resolvedType === 'text_message') {
            const lines = text.split('\n').filter(l => l.trim() !== '');
            const messages: any[] = [];
            lines.forEach(line => {
                const match = line.match(/^([^[]+)\s\[([^\]]+)\]\n?(.*)/);
                if (match) {
                    messages.push({ sender: match[1].trim(), time: match[2].trim(), text: match[3].trim(), is_me: false });
                } else if (messages.length > 0) {
                    messages[messages.length - 1].text += '\n' + line;
                }
            });
            finalDoc.messages = messages;
        } else {
            finalDoc.content = [text];
        }
    }

    switch (resolvedType) {
        case 'email':
            return <EmailTemplate header={finalDoc.header} content={finalDoc.content} />;
        case 'letter':
            return <LetterTemplate header={finalDoc.header} content={finalDoc.content} />;
        case 'notice':
        case 'memo':
            return <NoticeTemplate header={finalDoc.header || { title: finalDoc.title || finalDoc.type }} content={finalDoc.content} />;
        case 'article':
            return <ArticleTemplate header={finalDoc.header || { headline: finalDoc.title || finalDoc.type }} content={finalDoc.content} />;
        case 'advertisement':
            return <AdvertisementTemplate header={finalDoc.header || { title: finalDoc.title || finalDoc.type }} content={finalDoc.content} footer={finalDoc.footer} />;
        case 'text_message':
            return <TextMessageTemplate messages={finalDoc.messages} />;
        case 'online_chat':
            return <OnlineChatTemplate messages={finalDoc.messages} />;
        case 'web_page':
            return <WebPageTemplate header={finalDoc.header} content={finalDoc.content} />;
        case 'table':
        case 'form':
            if (finalDoc.table_data) {
                return <TableTemplate header={finalDoc.header} content={finalDoc.content} table_data={finalDoc.table_data} />;
            } else {
                return <NoticeTemplate header={{ title: finalDoc.title || finalDoc.type }} content={finalDoc.content} />;
            }
        default:
            return <NoticeTemplate header={{ title: finalDoc.title || finalDoc.type }} content={finalDoc.content} />;
    }
};
