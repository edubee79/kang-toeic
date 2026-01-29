
import os
import re

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all sets
    sets = re.findall(r'id:\s*"(p7-t\d+-set\d+)"', content)
    for set_id in sets:
        # Find the block for this set (from this ID to the next ID or end of sets array)
        start_idx = content.find(f'id: "{set_id}"')
        next_set_match = re.search(r'id:\s*"(p7-t\d+-set\d+)"', content[start_idx + 10:])
        if next_set_match:
            end_idx = start_idx + 10 + next_set_match.start()
        else:
            end_idx = content.find(']', start_idx)
            
        set_content = content[start_idx:end_idx]
        
        # Check for questions
        if 'questions:' not in set_content:
            print(f"ERROR: {os.path.basename(file_path)} set {set_id} is missing 'questions' property")
        else:
            # Check if questions array is empty
            if 'questions: []' in set_content:
                print(f"WARNING: {os.path.basename(file_path)} set {set_id} has empty 'questions' array")
            
            # Check each question within the set for 'options'
            q_matches = re.findall(r'id:\s*"(p7-t\d+-q\d+)"', set_content)
            for q_id in q_matches:
                q_start = set_content.find(f'id: "{q_id}"')
                next_q_match = re.search(r'id:\s*"(p7-t\d+-q\d+)"', set_content[q_start + 10:])
                if next_q_match:
                    q_end = q_start + 10 + next_q_match.start()
                else:
                    q_end = set_content.find('}', q_start + 10) # Simple end check
                
                q_content = set_content[q_start:q_end]
                if 'options:' not in q_content:
                    print(f"ERROR: {os.path.basename(file_path)} question {q_id} is missing 'options' property")

directory = 'src/data/toeic/reading/part7'
for filename in os.listdir(directory):
    if filename.startswith('test') and filename.endswith('.ts') and filename != 'tests.ts' and filename != 'types.ts':
        check_file(os.path.join(directory, filename))
