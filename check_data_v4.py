
import os
import re

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if the whole test object has 'sets'
    if 'sets: [' not in content:
        print(f"ERROR: {os.path.basename(file_path)} is missing 'sets' array")
        return

    # Find all set definitions. We look for 'id:' within the 'sets' array.
    # We'll split the content by 'id: "p7-t' to find individual sets.
    parts = re.split(r'\{\s*id:\s*"p7-t\d+-set\d+"', content)
    # The first part is the header, subsequent parts are sets.
    for i, part in enumerate(parts[1:], 1):
        if 'questions:' not in part:
            print(f"ERROR: {os.path.basename(file_path)} set {i} is missing 'questions' property")
        else:
            # Check if questions array is empty
            if re.search(r'questions:\s*\[\s*\]', part):
                print(f"WARNING: {os.path.basename(file_path)} set {i} has empty 'questions' array")

directory = 'src/data/toeic/reading/part7'
for filename in os.listdir(directory):
    if filename.startswith('test') and filename.endswith('.ts') and filename != 'tests.ts' and filename != 'types.ts':
        check_file(os.path.join(directory, filename))
