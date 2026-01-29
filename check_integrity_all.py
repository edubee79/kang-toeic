
import os
import re

output_dir = 'src/data/toeic/reading/part7'
files = [f for f in os.listdir(output_dir) if f.startswith('test') and not f.startswith('tests') and f.endswith('.ts')]

for file_name in sorted(files, key=lambda x: int(re.search(r'\d+', x).group())):
    file_path = os.path.join(output_dir, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if this file contains other test data
    matches = re.findall(r'testId:\s*(\d+)', content)
    unique_ids = set(matches)
    if len(unique_ids) > 1:
        print(f"ERROR: {file_name} contains multiple test IDs: {unique_ids}")
    
    # Check if sets are nested
    # A simple check: does any set contain another set?
    if re.search(r'sets:\s*\[.*sets:\s*\[', content, re.DOTALL):
        print(f"ERROR: {file_name} has nested 'sets' arrays")
