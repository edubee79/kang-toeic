
import re
import os

input_file = 'src/data/toeic/reading/part6/tests.ts'
output_dir = 'src/data/toeic/reading/part6'

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

test_regex = re.compile(r'"testId":\s*(\d+)')
matches = list(test_regex.finditer(content))

def extract_balanced(text, start_brace_pos):
    potential = text[start_brace_pos:]
    stack = []
    end = len(potential)
    for i, char in enumerate(potential):
        if char == '{':
            stack.append('{')
        elif char == '}':
            if stack:
                stack.pop()
                if not stack:
                    end = i + 1
                    break
        elif char == '[':
            stack.append('[')
        elif char == ']':
            if stack:
                stack.pop()
    return potential[:end]

seen_tids = set()
extracted_tests = []

for m in matches:
    tid = int(m.group(1))
    if tid in seen_tids:
        continue
    seen_tids.add(tid)
    
    brace_pos = content.rfind('{', 0, m.start())
    raw_content = extract_balanced(content, brace_pos)
    
    file_name = f'test{tid}.ts'
    file_path = os.path.join(output_dir, file_name)
    
    with open(file_path, 'w', encoding='utf-8') as out_f:
        out_f.write(f"import {{ Part6TestSet }} from './types';\n\n")
        out_f.write(f"export const test{tid}Data: Part6TestSet = {raw_content};\n")
    
    extracted_tests.append(tid)

with open(input_file, 'w', encoding='utf-8') as f:
    f.write(f"import {{ Part6TestSet }} from './types';\n")
    for tid in sorted(extracted_tests):
        f.write(f"import {{ test{tid}Data }} from './test{tid}';\n")
    
    f.write("\nexport const part6TestData: Part6TestSet[] = [\n")
    for tid in sorted(extracted_tests):
        f.write(f"    test{tid}Data,\n")
    f.write("];\n")

print(f"Successfully split and aggregated {len(extracted_tests)} Part 6 tests.")
