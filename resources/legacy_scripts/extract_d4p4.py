import pandas as pd
import json

try:
    df = pd.read_csv('hackers_vocab_final.csv')
    # Day 4, No. 137 ~ 168 (32 words)
    words = df[(df['Day']==4) & (df['No']>=137) & (df['No']<=168)][['No', 'Word', 'Meaning']].to_dict(orient='records')
    
    with open('d4p4_list.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print(f"Extracted {len(words)} words for Day 4 Part 4.")
except Exception as e:
    print(f"Error: {e}")
