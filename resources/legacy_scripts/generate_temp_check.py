import pandas as pd
import json

try:
    df = pd.read_csv('hackers_vocab_final.csv')
    words = df[(df['Day']==2) & (df['No']>=41) & (df['No']<=68)][['No', 'Word', 'Meaning']].to_dict(orient='records')
    
    with open('temp_d2p2_words.json', 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print("Temp file created successfully.")
except Exception as e:
    print(f"Error: {e}")
