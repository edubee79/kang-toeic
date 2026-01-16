import pandas as pd
import json
import os

df = pd.read_csv('hackers_vocab_final.csv')

perfect = []
partial = []
failed = []

for day in range(1, 31):
    day_data = df[df['Day'] == day]
    all_match = True
    
    for part_num, part_name, start, end in [
        (1, 'headword', 1, 40),
        (2, 'basic', 41, 68),
        (3, 'intermediate', 69, 136),
        (4, 'advanced', 137, 168)
    ]:
        filename = f'day{day}_{part_num}_{part_name}.json'
        
        if not os.path.exists(filename):
            all_match = False
            continue
        
        with open(filename, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
        
        csv_part = day_data[(day_data['No'] >= start) & (day_data['No'] <= end)]
        
        if len(csv_part) != len(json_data):
            all_match = False
            continue
        
        for i, (idx, csv_row) in enumerate(csv_part.iterrows()):
            if i < len(json_data):
                if csv_row['Word'].lower().strip() != json_data[i]['word'].lower().strip():
                    all_match = False
                    break
        
        if not all_match:
            break
    
    if all_match:
        perfect.append(day)
    else:
        failed.append(day)

print("완벽 일치:", perfect)
print("불일치:", failed)
