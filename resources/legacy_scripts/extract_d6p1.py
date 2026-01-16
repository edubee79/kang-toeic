import pandas as pd
import json

try:
    df = pd.read_csv('hackers_vocab_final.csv')
    # Day 6, No. 1 ~ 40 (40 words)
    words = df[(df['Day']==6) & (df['No']>=1) & (df['No']<=40)][['No', 'Word', 'Meaning']].to_dict(orient='records')
    
    with open('d6p1_list.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print(f"Extracted {len(words)} words for Day 6 Part 1.")
except Exception as e:
    print(f"Error: {e}")
