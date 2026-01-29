
import re

with open('src/data/toeic/reading/part7/tests.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all test starts
test_regex = re.compile(r'testId:\s*(\d+)')
matches = list(test_regex.finditer(content))

# Selection strategy:
# Test 1-3: First match
# Test 4: First match (and we will clean its internal sets)
# Test 5-10: LAST match (these are at the end of the file and hopefully un-nested)

selected_matches = {}

# Tests 1, 2, 3, 4
for tid in [1, 2, 3, 4]:
    for m in matches:
        if int(m.group(1)) == tid:
            selected_matches[tid] = m
            break

# Tests 5, 6, 7, 8, 9, 10
for tid in [5, 6, 7, 8, 9, 10]:
    for m in reversed(matches):
        if int(m.group(1)) == tid:
            selected_matches[tid] = m
            break

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

extracted_tests = {}
for tid in sorted(selected_matches.keys()):
    m = selected_matches[tid]
    brace_pos = content.rfind('{', 0, m.start())
    raw_content = extract_balanced(content, brace_pos)
    
    # If this is Test 1-4, it might still contain nested testIds. 
    # We should strip anything after the sets array closing if it's too long?
    # Actually, if the sets array is closed correctly, extract_balanced should handle it.
    # But wait, if Test 4 was nested in Test 3, Test 3's balanced closing would include it.
    
    # To fix this, let's also stop if we see "testId: " for a DIFFERENT testId at a higher level.
    # But the bracket balancer is more reliable if the brackets are ok.
    
    extracted_tests[tid] = raw_content.strip()

# Reconstruction
header_match = re.search(r'export const part7TestData: Part7Test\[\] = \[', content)
header = content[:header_match.end()]

new_content = header + "\n"
for tid in range(1, 11):
    if tid in extracted_tests:
        new_content += "    " + extracted_tests[tid]
        if tid < 10:
            new_content += ",\n"

new_content += "\n];"

with open('src/data/toeic/reading/part7/tests.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Flattened 10 tests.")
