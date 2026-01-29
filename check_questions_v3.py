
import os
import re

output_dir = 'src/data/toeic/reading/part7'
files = [f for f in os.listdir(output_dir) if f.startswith('test') and not f.startswith('tests') and f.endswith('.ts')]

for file_name in sorted(files, key=lambda x: int(re.search(r'\d+', x).group())):
    file_path = os.path.join(output_dir, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all set IDs
    set_matches = list(re.finditer(r'id:\s*"p7-t\d+-s(et)?\d+"', content))
    
    for i in range(len(set_matches)):
        start = set_matches[i].start()
        # Find the next set or the end of the sets array (usually ] before the end)
        end = set_matches[i+1].start() if i+1 < len(set_matches) else content.rfind(']')
        
        block = content[start:end]
        if 'questions:' not in block and '"questions":' not in block:
            print(f"ERROR: {file_name}, set ID {set_matches[i].group()} is missing 'questions'")
