import React from 'react';
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
        columns?: number;
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

export interface ReviewProps extends BaseDocProps {
    header: {
        title: string;
        rating?: number;
        date?: string;
    };
}

export interface TableProps extends BaseDocProps {
    header: {
        title: string;
        titlePrefix?: string;
        date?: string;
        subtitle?: string;
    };
    table_data: {
        headers: string[];
        rows: string[][];
        summary?: string; // e.g., "Total: $500"
    };
}

export interface DocumentRendererProps {
    doc: {
        id: string;
        type: string;
        docType?: string;
        title?: string;
        header?: any;
        footer?: string;
        content: string | string[];
        table_data?: any;
        messages?: any[];
    };
}

// ----------------------------------------------------------------------------
// Components
// ----------------------------------------------------------------------------

/**
 * 1. Email Template (ETS Style)
 */
export const EmailTemplate: React.FC<EmailProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-[15px] text-gray-900 border-[2px] border-solid border-black p-0 bg-white shadow-lg overflow-hidden", className)}>
            <div className="bg-[#f3f4f6] border-b-[2px] border-black px-4 h-9 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border border-gray-400 shadow-inner" />
                    <span className="text-[12px] font-bold text-gray-700 italic tracking-wide">E-mail Message</span>
                </div>
                <div className="flex gap-1.5 opacity-60">
                    <div className="w-5 h-[2px] bg-gray-600 self-center" />
                    <div className="w-5 h-4 border-2 border-gray-600 rounded-sm" />
                </div>
            </div>
            <div className="p-3 bg-white border-b border-gray-300">
                <div className="grid grid-cols-[80px_1fr] gap-x-3 gap-y-1.5 text-black">
                    <span className="text-gray-500 font-bold text-[13px] uppercase self-center">To:</span>
                    <span className="text-black font-semibold border-b border-gray-100 flex items-center">{header?.to}</span>
                    <span className="text-gray-500 font-bold text-[13px] uppercase self-center">From:</span>
                    <span className="text-black font-semibold border-b border-gray-100 flex items-center">{header?.from}</span>
                    <span className="text-gray-500 font-bold text-[13px] uppercase self-center">Date:</span>
                    <span className="text-black font-semibold border-b border-gray-100 flex items-center">{header?.date}</span>
                    <span className="text-gray-500 font-bold text-[13px] uppercase self-center">Subject:</span>
                    <span className="text-black font-bold border-b border-gray-100 flex items-center">{header?.subject}</span>
                </div>
            </div>
            <div className="p-6 space-y-5 leading-relaxed text-black">
                {content.map((para, i) => (
                    <div key={i} className="prose prose-base max-w-none !text-black
                        prose-table:border-collapse prose-table:border prose-table:border-black 
                        prose-th:border prose-th:border-black prose-th:bg-gray-100 prose-th:p-2 prose-th:!text-black
                        prose-td:border prose-td:border-black prose-td:p-2 prose-td:!text-black">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * 2. Letter Template
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
            <div className="space-y-4 leading-relaxed text-black">
                {content.map((para, i) => (
                    <div key={i} className="prose prose-sm max-w-none !text-black
                        prose-table:border-collapse prose-table:border prose-table:border-black 
                        prose-th:border prose-th:border-black prose-th:bg-gray-100 prose-th:p-2 prose-th:!text-black
                        prose-td:border prose-td:border-black prose-td:p-2 prose-td:!text-black">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * 3. Notice / Memo Template
 */
export const NoticeTemplate: React.FC<NoticeProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-base text-gray-900 border-[2px] border-black p-0 bg-white shadow-lg", className)}>
            <div className="bg-gray-100 border-b-[2px] border-black px-4 py-3 text-center">
                <h2 className="text-xl font-black uppercase tracking-[0.2em] text-black underline underline-offset-4">{header.title}</h2>
                {header.subtitle && <p className="text-[14px] font-bold text-black mt-1.5">{header.subtitle}</p>}
            </div>
            <div className="p-6 space-y-4 leading-relaxed text-black">
                {content.map((para, i) => (
                    <div key={i} className="prose prose-base max-w-none text-black
                        prose-table:border-collapse prose-table:border prose-table:border-black 
                        prose-th:border prose-th:border-black prose-th:bg-gray-100 prose-th:p-2 prose-th:text-black
                        prose-td:border prose-td:border-black prose-td:p-2 prose-td:text-black">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * 4. Article Template
 */
export const ArticleTemplate: React.FC<ArticleProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-serif text-base text-gray-900 p-0 bg-transparent", className)}>
            <div className="border-b-4 border-black pb-2 mb-4">
                <h1 className="text-2xl font-black leading-tight mb-2 font-sans tracking-tight">{header.headline}</h1>
                {header.sub_headline && <h3 className="text-lg italic text-black mb-2 opacity-90">{header.sub_headline}</h3>}
                <div className="flex justify-between items-center text-[12px] font-black text-black uppercase tracking-widest mt-2 border-t border-gray-200 pt-1">
                    {header.author && <span>{header.author}</span>}
                    {header.date && <span>{header.date}</span>}
                </div>
            </div>
            <div className={cn(
                "gap-10 [column-fill:_balance] leading-relaxed text-justify antialiased text-black",
                header.columns === 1 ? "columns-1" : "columns-2"
            )}>
                {content.map((para, i) => (
                    <p key={i} className="mb-4 first:mt-0 text-black font-medium">{para}</p>
                ))}
            </div>
        </div>
    );
};

/**
 * 5. Advertisement Template
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
 * 6. Text Message Template
 */
export const TextMessageTemplate: React.FC<TextChainProps> = ({ messages, className }) => {
    return (
        <div className={cn("max-w-[400px] mx-auto border-[5px] border-gray-700 rounded-[2.5rem] p-1.5 bg-gray-700 shadow-xl", className)}>
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
            <div className="h-8"></div>
        </div>
    );
};

/**
 * 7. Online Chat Template
 */
export const OnlineChatTemplate: React.FC<TextChainProps> = ({ messages, className }) => {
    return (
        <div className={cn("font-sans text-[13px] text-gray-900 border border-gray-400 rounded-lg overflow-hidden bg-white shadow-md", className)}>
            <div className="bg-[#e2e8f0] border-b border-gray-400 p-2 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-4 text-[11px] font-bold text-gray-600 uppercase tracking-tighter">Online Chat / Discussion</span>
                </div>
                <div className="text-[10px] text-gray-400">🌐 Web-based</div>
            </div>
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
            <div className="bg-white border-t border-gray-300 p-2 px-4 text-gray-300 italic text-[11px]">
                Type a message...
            </div>
        </div>
    );
};

/**
 * 8. Web Page Template
 */
export const WebPageTemplate: React.FC<WebPageProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-[13px] text-gray-900 border border-gray-400 rounded-t-md overflow-hidden bg-white shadow-md", className)}>
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
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex gap-4 text-[11px] font-bold text-gray-600 uppercase">
                {header?.navItems?.map((item, i) => (
                    <span key={i} className="hover:text-blue-600 cursor-pointer">{item}</span>
                )) || (
                        <><span>Home</span><span>About Us</span><span>Contact</span></>
                    )}
            </div>
            <div className="p-6 space-y-4 leading-relaxed">
                {content.map((para, i) => (
                    <div key={i} className="prose prose-sm max-w-none 
                        prose-table:border-collapse prose-table:border prose-table:border-gray-300 
                        prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:p-2 
                        prose-td:border prose-td:border-gray-300 prose-td:p-2">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * 8.5 Review Template
 */
export const ReviewTemplate: React.FC<ReviewProps> = ({ header, content, className }) => {
    const hasRating = typeof header.rating === 'number';
    const stars = hasRating ? ("★".repeat(Math.min(5, Math.max(0, header.rating!))) + "☆".repeat(Math.max(0, 5 - header.rating!))) : "";
    return (
        <div className={cn("font-sans text-base text-gray-900 border-2 border-black bg-white shadow-lg", className)}>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg font-black text-black leading-tight italic">{header.title}</h2>
                {hasRating && (
                    <div className="flex items-center mt-2">
                        <span className="text-sm font-bold text-gray-700 mr-3 uppercase tracking-tight text-[13px]">Rating: {header.rating} stars</span>
                        <span className="text-xl text-yellow-500 tracking-widest leading-none">{stars}</span>
                    </div>
                )}
                {header.date && <p className="text-xs text-gray-500 mt-1 font-bold italic">{header.date}</p>}
            </div>
            <div className="p-6 space-y-4">
                {content.map((para, i) => (
                    <div key={i} className="prose prose-base max-w-none text-black prose-p:leading-relaxed">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * 9. Table Template
 */
export const TableTemplate: React.FC<TableProps> = ({ header, content, table_data, className }) => {
    return (
        <div className={cn("font-sans text-base text-gray-900 border-2 border-black bg-white shadow-xl flex flex-col", className)}>
            {/* Form Header Area (Top layout) */}
            <div className="p-4 bg-white">
                <div className="flex justify-between items-start mb-6 border-b border-gray-200 pb-2">
                    <div className="flex-1">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black leading-none mb-1">{header?.title || ''}</h2>
                        {header?.subtitle && <p className="text-sm text-gray-600 font-bold">{header.subtitle}</p>}
                        {header?.date && <p className="text-sm text-black font-bold mt-1">{header.date}</p>}
                    </div>
                    {header?.titlePrefix && (
                        <div className="text-right">
                            <span className="text-sm font-black text-white bg-black px-3 py-1 rounded-sm uppercase tracking-tighter">
                                {header.titlePrefix}
                            </span>
                        </div>
                    )}
                </div>

                {content && content.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                        {content.map((para, i) => (
                            <div key={i} className="prose prose-base max-w-none text-left
                                prose-p:my-0 prose-p:leading-snug
                                prose-table:border-collapse prose-table:border prose-table:border-black 
                                prose-th:border prose-th:border-black prose-th:bg-gray-100 prose-th:p-2 prose-th:text-[13px] prose-th:!text-black
                                prose-td:border prose-td:border-black prose-td:p-3 prose-td:text-[15px] prose-td:!text-black">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Data Table Area */}
            <div className="border-t-2 border-black">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-full">
                        <thead>
                            <tr className="bg-gray-100 border-b-2 border-black">
                                {table_data.headers.map((h, i) => (
                                    <th key={i} className="py-2.5 px-3 font-black text-[13px] uppercase border-r-2 border-black last:border-r-0 text-center whitespace-nowrap">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table_data.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-black last:border-b-0 hover:bg-gray-50 transition-colors">
                                    {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="py-3 px-4 border-r border-black last:border-r-0 text-[15px] leading-relaxed whitespace-pre-wrap text-black font-semibold">
                                            {typeof cell === 'string' ? (
                                                cell.split('<br>').map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        {i < cell.split('<br>').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))
                                            ) : cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer / Summary Area */}
            {table_data.summary && (
                <div className="p-4 bg-gray-100 border-t-2 border-black text-right">
                    <span className="inline-block text-lg font-black text-black tracking-tight self-center bg-white px-4 py-1.5 border-2 border-black rounded shadow-sm">
                        {table_data.summary}
                    </span>
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

    const resolveDocType = (rawType: string, rawDocType?: string): DocType => {
        // Priority 1: Explicitly assigned type (standardized value)
        const primaryType = (rawType || '').toLowerCase();
        if (primaryType === 'article') return 'article';
        if (primaryType === 'email') return 'email';
        if (primaryType === 'letter') return 'letter';
        if (primaryType === 'memo' || primaryType === 'notice') return 'notice';
        if (primaryType === 'advertisement') return 'advertisement';
        if (primaryType === 'review') return 'review';
        if (primaryType === 'table' || primaryType === 'form') return 'table';

        // Priority 2: Fallback to keyword matching in rawDocType or Title
        const type = (rawDocType || rawType || '').toLowerCase();
        if (type.includes('email')) return 'email';
        if (type.includes('letter') || type.includes('invitation')) return 'letter';
        if (type.includes('web') || type.includes('online portal') || type.includes('url') || type.includes('webinar')) return 'web_page';
        if (type.includes('text message') || type.includes('sms')) return 'text_message';
        if (type.includes('chat') || type.includes('discussion') || type.includes('text_chain')) return 'online_chat';
        if (type.includes('article')) return 'article';
        if (type.includes('review')) return 'review';
        if (type.includes('notice') || type.includes('announcement') || type.includes('memo') || type.includes('report') || type.includes('posting') || type.includes('schedule')) return 'notice';
        if (type.includes('advertisement') || type.includes('ad') || type.includes('brochure')) return 'advertisement';
        if (type.includes('form') || type.includes('receipt') || type.includes('invoice') || type.includes('table') || type.includes('survey') || type.includes('information') || type.includes('list')) return 'table';
        return 'notice';
    };

    // --- Helper to parse legacy string content ---
    let finalDoc = { ...doc };

    // IF table_data exists, FORCE it to be a table type regardless of what it's called
    const resolvedType = doc.table_data ? 'table' : resolveDocType(doc.type, doc.docType || doc.title);

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
    } else if (Array.isArray(doc.content)) {
        finalDoc.content = doc.content;
    } else {
        finalDoc.content = [];
    }

    switch (resolvedType) {
        case 'email':
            return <EmailTemplate header={finalDoc.header} content={finalDoc.content as string[]} />;
        case 'letter':
            return <LetterTemplate header={finalDoc.header} content={finalDoc.content as string[]} />;
        case 'notice':
        case 'memo':
            return <NoticeTemplate header={finalDoc.header || { title: finalDoc.title || finalDoc.type }} content={finalDoc.content as string[]} />;
        case 'article':
            return <ArticleTemplate header={finalDoc.header || { headline: finalDoc.title || finalDoc.type }} content={finalDoc.content as string[]} />;
        case 'advertisement':
            return <AdvertisementTemplate header={finalDoc.header || { title: finalDoc.title || finalDoc.type }} content={finalDoc.content as string[]} footer={finalDoc.footer} />;
        case 'review':
            return <ReviewTemplate header={finalDoc.header || { title: finalDoc.title || finalDoc.type, rating: 5 }} content={finalDoc.content as string[]} />;
        case 'text_message':
            return <TextMessageTemplate messages={finalDoc.messages || []} />;
        case 'online_chat':
            return <OnlineChatTemplate messages={finalDoc.messages || []} />;
        case 'web_page':
            return <WebPageTemplate header={finalDoc.header} content={finalDoc.content as string[]} />;
        case 'table':
        case 'form':
            if (finalDoc.table_data) {
                const safeHeader = finalDoc.header || { title: finalDoc.title || '' };
                return <TableTemplate header={safeHeader} content={finalDoc.content as string[]} table_data={finalDoc.table_data} />;
            } else {
                return <NoticeTemplate header={{ title: finalDoc.title || finalDoc.type }} content={finalDoc.content as string[]} />;
            }
        default:
            return <NoticeTemplate header={{ title: finalDoc.title || finalDoc.type }} content={finalDoc.content as string[]} />;
    }
};
