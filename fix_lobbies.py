import os
import re

directories = [
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part1-real\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part3\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part4\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part5-real\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part6\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part7\single-passage\page.tsx',
    r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\app\homework\part7\double-passage\page.tsx'
]

for path in directories:
    if not os.path.exists(path):
        print(f"File not found: {path}")
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match the existing icon rendering logic inside the shrink-0 flex items-center
    # It usually looks like this:
    # {isLocked ? (
    #     <Lock className="w-3.5 h-3.5 md:w-5 md:h-5 text-slate-700" />
    # ) : completion?.completed ? (
    #     <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" /> // or text-indigo-500
    # ) : (
    #     <PlayCircle ... />
    # )}
    
    # We want to replace the completed CheckCircle with <CheckCircle /> AND <PlayCircle />
    # Let's find exactly how the ternary is structured for CheckCircle.
    
    pattern = r'(\)\s*:\s*(?:completions\[[^\]]+\]|completion)\?\.completed\s*\?\s*\(\s*)<CheckCircle[^>]+>(\s*\)\s*:\s*\()'
    
    def repl(m):
        prefix = m.group(1)
        check_circle = m.group(0)[len(prefix):len(m.group(0))-len(m.group(2))]
        suffix = m.group(2)
        
        # Determine color based on check_circle string
        if 'indigo' in check_circle:
            play_color = 'text-slate-600 group-hover:text-indigo-400'
        elif 'sky' in check_circle:
            play_color = 'text-slate-600 group-hover:text-sky-400'
        elif 'blue' in check_circle:
            play_color = 'text-slate-600 group-hover:text-blue-400'
        else:
            play_color = 'text-slate-600 group-hover:text-emerald-400'
            
        return f'{prefix}<>\n                                                {check_circle}\n                                                <PlayCircle className="w-5 h-5 md:w-7 md:h-7 {play_color} transition-colors ml-1 md:ml-2" />\n                                            </>{suffix}'

    new_content = re.sub(pattern, repl, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {path}")
    else:
        print(f"No match or already updated: {path}")
