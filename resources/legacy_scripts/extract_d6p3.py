import pandas as pd
import json

try:
    df = pd.read_csv('hackers_vocab_final.csv')
    # Day 6, No. 69 ~ 136 (68 words)
    # Target Score: 800 (Intermediate)
    words = df[(df['Day']==6) & (df['No']>=69) & (df['No']<=136)][['No', 'Word', 'Meaning', 'Target_Score']].to_dict(orient='records')
    
    with open('d6p3_list.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print(f"Extracted {len(words)} words for Day 6 Part 3.")
except Exception as e:
    print(f"Error: {e}")
