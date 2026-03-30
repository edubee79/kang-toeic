import os
import re

directories = [
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part7\page.tsx'
]

for path in directories:
    if not os.path.exists(path):
        print(f"File not found: {path}")
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'(\)\s*:\s*(?:completions\[[^\]]+\]|completion)\?\.completed\s*\?\s*\(\s*)<CheckCircle[^>]+>(\s*\)\s*:\s*\()'
    
    def repl(m):
        prefix = m.group(1)
        check_circle = m.group(0)[len(prefix):len(m.group(0))-len(m.group(2))]
        suffix = m.group(2)
        
        if 'indigo' in check_circle:
            play_color = 'text-slate-600 group-hover:text-indigo-400'
        elif 'sky' in check_circle:
            play_color = 'text-slate-600 group-hover:text-sky-400'
        elif 'blue' in check_circle:
            play_color = 'text-slate-600 group-hover:text-blue-400'
        else:
            play_color = 'text-slate-600 group-hover:text-emerald-400'
            
        return f'{prefix}<>\n                                                        {check_circle}\n                                                        <PlayCircle className="w-4 h-4 md:w-5 md:h-5 {play_color} transition-colors ml-1 md:ml-2" />\n                                                    </>{suffix}'

    new_content = re.sub(pattern, repl, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {path}")
    else:
        print(f"No match or already updated: {path}")
