import os
import re

file_path = 'src/data/toeic/reading/part5/tests.ts'
snippet_path = 'test_12_snippet.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

with open(snippet_path, 'r', encoding='utf-8') as f:
    snippet = f.read()

# Marker for the VERY end of the part5TestData array
# It should be a ] then possibly a newline/space, then a ; then possibly a newline/space, then "// Helper"
pattern = r'\]\s*;\s*// Helper'
match = re.search(pattern, content)

if match:
    pos = match.start()
    new_content = content[:pos] + snippet + "\n" + content[pos:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated tests.ts with Test 12.")
else:
    print("Could not find the final closing bracket for part5TestData.")
