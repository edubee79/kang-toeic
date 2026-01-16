import pandas as pd
df = pd.read_csv('resources/hackers_vocab_final.csv')
part4 = df[(df['Day'] == 29) & (df['No'] >= 137) & (df['No'] <= 168)][['No', 'Word', 'Meaning']]
with open('temp_d29_p4_words.txt', 'w', encoding='utf-8') as f:
    f.write(part4.to_string(index=False))
