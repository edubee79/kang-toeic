
import re

with open('src/data/toeic/reading/part7/test4.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'id: "p7-t4-set' in line:
        print(f"Line {i+1}: {line.strip()}")
