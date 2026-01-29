
import os
import re

output_dir = 'src/data/toeic/reading/part7'
files = [f for f in os.listdir(output_dir) if f.startswith('test') and f.endswith('.ts')]

for file_name in sorted(files):
    file_path = os.path.join(output_dir, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple check for structural integrity of questions in each set
    # A set looks like { id: ..., questions: [...] }
    # We want to find if any set {} block lacks "questions:"
    
    # Let's use a more robust approach: find all sets and check if they contain "questions"
    # Find start of "sets: ["
    sets_start = content.find('sets: [')
    if sets_start == -1:
        print(f"ERROR: No 'sets' found in {file_name}")
        continue
    
    potential_sets = content[sets_start:]
    # Split by actual set boundaries if possible, or just count occurrences
    # Each set starts with { and has an id starting with "p7-t"
    sets = re.findall(r'\{\s*id:\s*"p7-t[^"]+"', potential_sets)
    
    # Extract each set block and check for "questions"
    # This is slightly complex due to nesting. Let's try to find blocks by bracket balancing.
    
    current_pos = sets_start + content[sets_start:].find('[') + 1
    stack = ['[']
    set_blocks = []
    start_of_set = -1
    
    while stack and current_pos < len(content):
        char = content[current_pos]
        if char == '{':
            if len(stack) == 1: # Start of a set object
                start_of_set = current_pos
            stack.append('{')
        elif char == '}':
            if stack:
                top = stack.pop()
                if len(stack) == 1 and start_of_set != -1: # End of a set object
                    set_blocks.append(content[start_of_set:current_pos+1])
                    start_of_set = -1
        elif char == '[':
            stack.append('[')
        elif char == ']':
            if stack:
                top = stack.pop()
                if not stack:
                    break
        current_pos += 1

    for i, block in enumerate(set_blocks):
        if '"questions":' not in block and 'questions:' not in block:
            print(f"MISSING questions in {file_name}, set index {i}")
            # print("DEBUG BLOCK:", block[:100])
