import pandas as pd
import json

try:
    df = pd.read_csv('hackers_vocab_final.csv')
    # Day 5, No. 1 ~ 40 (40 words)
    words = df[(df['Day']==5) & (df['No']>=1) & (df['No']<=40)][['No', 'Word', 'Meaning']].to_dict(orient='records')
    
    with open('d5p1_list.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print(f"Extracted {len(words)} words for Day 5 Part 1.")
except Exception as e:
    print(f"Error: {e}")
