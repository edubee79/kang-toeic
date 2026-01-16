import pandas as pd
df = pd.read_csv('resources/hackers_vocab_final.csv')
part3 = df[(df['Day'] == 28) & (df['No'] >= 69) & (df['No'] <= 136)][['No', 'Word', 'Meaning']]
with open('temp_d28_p3_words.txt', 'w', encoding='utf-8') as f:
    f.write(part3.to_string(index=False))
