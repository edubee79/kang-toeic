
function renderPart3QuestionSet(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    return (
        <div key={set.setId} className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-xs font-bold text-slate-600 inline-block">
                Questions {set.questionRange}
            </div>
            <div className="space-y-6">
                {set.questions.map((q: any) => (
                    <div key={q.id} className="space-y-2">
                        <div className="flex gap-2 text-sm">
                            <span className="font-bold text-slate-700">{q.id.replace('q', '')}.</span>
                            <span className="font-medium text-slate-800 leading-tight">{q.text}</span>
                        </div>
                        <div className="pl-6 space-y-1">
                            {q.options.map((opt: any) => (
                                <label key={opt.label} className="flex items-start gap-2 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[9px] font-bold mt-0.5 transition-colors ${answers[q.id] === opt.label ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-300 group-hover:border-indigo-400'}`}>
                                        {opt.label}
                                    </div>
                                    <input
                                        type="radio"
                                        name={q.id}
                                        value={opt.label}
                                        checked={answers[q.id] === opt.label}
                                        onChange={() => onAnswer(q.id, opt.label)}
                                        className="hidden"
                                    />
                                    <span className={`text-xs transition-colors ${answers[q.id] === opt.label ? 'text-indigo-700 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>{opt.text}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Append this helper function at the end of the file or before the closing brace of the module if possible.
// Since I cannot append directly to the end easily with 'replace_file_content' without knowing the exact last lines,
// I will insert it before the last closing brace of the file.
