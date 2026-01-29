
import os
import re

output_dir = 'src/data/toeic/reading/part7'
files = [f for f in os.listdir(output_dir) if f.startswith('test') and f.endswith('.ts')]

for file_name in sorted(files, key=lambda x: int(re.search(r'\d+', x).group())):
    file_path = os.path.join(output_dir, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for "questions:" in fiecare set
    # A set is between { and } in the sets: [ ... ] array.
    
    # Let's use a more detailed check
    # Find the sets array content
    match = re.search(r'sets:\s*\[(.*)\]', content, re.DOTALL)
    if not match:
        print(f"{file_name}: No sets array found")
        continue
    
    sets_content = match.group(1)
    # Split into individual sets. This is tricky but let's try matching { id: ... }
    sets = re.split(r'\{\s*id:', sets_content)[1:] # Skip first empty split
    
    for i, s in enumerate(sets):
        if 'questions:' not in s and '"questions":' not in s:
            print(f"ERROR: {file_name} set {i+1} is missing 'questions' property")
            # Print the start of the set to identify it
            print("Set start:", s[:100].strip())
