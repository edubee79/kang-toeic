import os

file_path = 'src/data/toeic/reading/part5/tests.ts'
snippet_path = 'test_11_snippet.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open(snippet_path, 'r', encoding='utf-8') as f:
    snippet = f.read()

# Snippet starts with ",\n{" if I remember correctly or just ","
# Let's clean it up if it has a leading comma and we are inserting it.
# Actually, the previous version had line 1 as ",".
# Let's find the LAST ']' that is followed by ';' on the next lines.
# In tests.ts:
# 7586: ]
# 7587:     ;
# 7588: // Helper ...

target_line = -1
for i in range(len(lines)-1, -1, -1):
    if lines[i].strip() == ']' and i < len(lines)-1 and ';' in lines[i+1]:
        target_line = i
        break

if target_line != -1:
    # Insert snippet before the closing bracket
    # snippet might have leading/trailing newlines
    new_lines = lines[:target_line] + [snippet + "\n"] + lines[target_line:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Successfully inserted Test 11 at line {target_line+1}")
else:
    print("Could not find insertion point.")
