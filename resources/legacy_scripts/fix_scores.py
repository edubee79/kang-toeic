import json
import os

target_files = [
    'day1_part1.json', 'day1_part2.json', 'day1_part3.json',
    'day2_part1.json', 'day2_part2.json', 'day2_part3.json'
]

def fix_and_validate():
    print("Starting JSON Fix & Validate Process...")
    
    for filename in target_files:
        if not os.path.exists(filename):
            continue
            
        # 1. Read
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        modified = False
        
        # 2. Fix Scores Logic
        for item in data:
            no = item['no']
            current_score = item['targetScore']
            new_score = current_score
            
            # User Rule:
            # 1-68: 650
            # 69-136: 800
            # 137-168: 900
            
            if 1 <= no <= 68:
                new_score = 650
            elif 69 <= no <= 136:
                new_score = 800
            elif 137 <= no <= 168:
                new_score = 900
                
            if current_score != new_score:
                item['targetScore'] = new_score
                modified = True
                
        # 3. Save if modified
        if modified:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"🔧 Fixed scores in {filename}")
        else:
            print(f"  No changes needed for {filename}")

    # 4. Final Validation
    print("\n--- Final Validation Results ---")
    all_pass = True
    for filename in target_files:
        if not os.path.exists(filename): continue
        
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        file_errors = 0
        for item in data:
            no = item['no']
            score = item['targetScore']
            
            expected = 0
            if 1 <= no <= 68: expected = 650
            elif 69 <= no <= 136: expected = 800
            elif 137 <= no <= 168: expected = 900
            
            if score != expected:
                print(f"❌ Error in {filename}: No {no} is {score}, expected {expected}")
                file_errors += 1
                all_pass = False
        
        if file_errors == 0:
            print(f"✅ {filename}: Verified")

if __name__ == "__main__":
    fix_and_validate()
