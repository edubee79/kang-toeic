import pandas as pd
import json

try:
    df = pd.read_csv('hackers_vocab_final.csv')
    words = df[(df['Day']==2) & (df['No']>=41) & (df['No']<=68)][['No', 'Word', 'Meaning']].to_dict(orient='records')
    
    with open('d2p2_list.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print(f"Extracted {len(words)} words for Day 2 Part 2.")
except Exception as e:
    print(f"Error: {e}")
