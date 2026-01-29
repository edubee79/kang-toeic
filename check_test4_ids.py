
import re

with open('src/data/toeic/reading/part7/test4.ts', 'r', encoding='utf-8') as f:
    content = f.read()

ids = re.findall(r'id:\s*"p7-t4-set\d+"', content)
print("Found IDs:", ids)

from collections import Counter
counts = Counter(ids)
for id, count in counts.items():
    if count > 1:
        print(f"DUPLICATE ID: {id} appears {count} times")
