import pandas as pd
df = pd.read_csv('resources/hackers_vocab_final.csv')
part1 = df[(df['Day'] == 29) & (df['No'] >= 1) & (df['No'] <= 40)][['No', 'Word', 'Meaning']]
with open('temp_d29_p1_words.txt', 'w', encoding='utf-8') as f:
    f.write(part1.to_string(index=False))
