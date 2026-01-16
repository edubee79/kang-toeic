import React from 'react';
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------
export type DocType = 'email' | 'letter' | 'notice' | 'memo' | 'article' | 'advertisement' | 'form' | 'text_chain' | 'table';

export interface BaseDocProps {
    content: string[]; // Paragraphs
    className?: string;
}

export interface EmailProps extends BaseDocProps {
    header: {
        from: string;
        to: string;
        date: string;
        subject: string;
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
        is_me?: boolean; // If true, align right
    }[];
    className?: string;
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
 * 1. Email Template
 * Sans-serif, grey header block with heavy borders. Standard corporate look.
 */
export const EmailTemplate: React.FC<EmailProps> = ({ header, content, className }) => {
    return (
        <div className={cn("font-sans text-sm text-gray-900 border border-gray-400 p-5 bg-white", className)}>
            <div className="border-b border-gray-400 pb-3 mb-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                <span className="font-bold text-gray-800">To:</span> <span>{header.to}</span>
                <span className="font-bold text-gray-800">From:</span> <span>{header.from}</span>
                <span className="font-bold text-gray-800">Date:</span> <span>{header.date}</span>
                <span className="font-bold text-gray-800">Subject:</span> <span>{header.subject}</span>
            </div>
            <div className="space-y-3 leading-relaxed text-justify">
                {content.map((para, i) => <p key={i}>{para}</p>)}
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
        <div className={cn("font-sans text-sm text-gray-900 border-2 border-black p-5 bg-white", className)}>
            <div className="text-center mb-5">
                <h2 className="text-xl font-extrabold uppercase tracking-wide">{header.title}</h2>
                {header.subtitle && <p className="text-sm font-bold text-gray-600 mt-1">{header.subtitle}</p>}
            </div>
            <div className="space-y-3 leading-relaxed text-justify">
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
 * 6. Text Message Chain (Discussion)
 * Modern chat bubble style.
 */
export const TextChainTemplate: React.FC<TextChainProps> = ({ messages, className }) => {
    return (
        <div className={cn("bg-gray-100 p-4 rounded-lg space-y-4 font-sans text-sm border border-gray-200", className)}>
            {messages.map((msg, i) => {
                const isMe = msg.is_me;
                return (
                    <div key={i} className={cn("flex flex-col", isMe ? "items-end" : "items-start")}>
                        <div className="flex items-baseline gap-2 mb-1 px-1">
                            <span className="font-bold text-xs text-gray-700">{msg.sender}</span>
                            <span className="text-[10px] text-gray-500">{msg.time}</span>
                        </div>
                        <div className={cn(
                            "max-w-[80%] px-3 py-2 rounded-xl shadow-sm leading-snug",
                            isMe ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-gray-900 rounded-tl-none border border-gray-200"
                        )}>
                            {msg.text}
                        </div>
                    </div>
                )
            })}
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
interface DocumentRendererProps {
    doc: any; // Dynamic JSON object based on schema
}

export const DocumentRenderer: React.FC<DocumentRendererProps> = ({ doc }) => {
    if (!doc) return null;

    switch (doc.type) {
        case 'email':
            return <EmailTemplate header={doc.header} content={doc.content} />;
        case 'letter':
            return <LetterTemplate header={doc.header} content={doc.content} />;
        case 'notice':
        case 'memo':
            return <NoticeTemplate header={doc.header} content={doc.content} />;
        case 'article':
            return <ArticleTemplate header={doc.header} content={doc.content} />;
        case 'advertisement':
            return <AdvertisementTemplate header={doc.header} content={doc.content} footer={doc.footer} />;
        case 'text_chain':
            return <TextChainTemplate messages={doc.messages} />;
        case 'table':
        case 'form':
            // Safety check: if parser didn't extract structured table data, fall back to simple Notice view
            if (doc.table_data) {
                return <TableTemplate header={doc.header} content={doc.content} table_data={doc.table_data} />;
            } else {
                return <NoticeTemplate header={doc.header} content={doc.content} />;
            }
        default:
            return (
                <div className="p-4 border border-red-300 bg-red-50 text-red-600 rounded">
                    Unknown Document Type: {doc.type}
                </div>
            );
    }
};
