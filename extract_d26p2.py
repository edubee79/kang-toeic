import pandas as pd
df = pd.read_csv('resources/hackers_vocab_final.csv')
part2 = df[(df['Day'] == 26) & (df['No'] >= 41) & (df['No'] <= 68)][['No', 'Word', 'Meaning']]
with open('temp_d26_p2_words.txt', 'w', encoding='utf-8') as f:
    f.write(part2.to_string(index=False))
