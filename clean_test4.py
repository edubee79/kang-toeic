
with open('src/data/toeic/reading/part7/test4.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = lines[0:98] + lines[195:696] + ['    };\n']
# lines[0:98] is lines 1 to 98
# lines[195:696] is lines 196 to 696 (line 696 is '                ]')

with open('src/data/toeic/reading/part7/test4.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_content)
