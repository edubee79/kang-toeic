import json
import os

# 검증 스크립트
errors_found = []
files_checked = 0

for day in range(14, 31):
    parts = [
        (1, 40, '1_headword', 650),
        (41, 68, '2_basic', 650),
        (69, 136, '3_intermediate', 800),
        (137, 168, '4_advanced', 900)
    ]
    
    for start, end, part_name, expected_score in parts:
        filename = f'day{day}_{part_name}.json'
        
        if not os.path.exists(filename):
            errors_found.append(f"❌ {filename} NOT FOUND")
            continue
        
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            files_checked += 1
            
            # 개수 확인
            expected_count = end - start + 1
            if len(data) != expected_count:
                errors_found.append(f"❌ {filename}: Expected {expected_count} words, got {len(data)}")
            
            # Target Score 확인
            for item in data:
                if item.get('targetScore') != expected_score:
                    errors_found.append(f"❌ {filename}: No.{item.get('no')} has wrong targetScore {item.get('targetScore')} (expected {expected_score})")
                    break
            
            # Day 번호 확인
            for item in data:
                if item.get('day') != day:
                    errors_found.append(f"❌ {filename}: Wrong day number {item.get('day')} (expected {day})")
                    break
                    
        except Exception as e:
            errors_found.append(f"❌ {filename}: Error - {str(e)}")

print(f"\n{'='*60}")
print(f"VALIDATION REPORT")
print(f"{'='*60}")
print(f"Files checked: {files_checked}")
print(f"Errors found: {len(errors_found)}")
print(f"{'='*60}\n")

if errors_found:
    print("ERRORS:")
    for error in errors_found[:20]:  # 처음 20개만 표시
        print(error)
    if len(errors_found) > 20:
        print(f"\n... and {len(errors_found) - 20} more errors")
else:
    print("✅ ALL FILES VALIDATED SUCCESSFULLY!")
    print(f"\nTotal: {files_checked} files")
    print("- Day 14-30 (17 days)")
    print("- 4 parts per day")
    print("- All targetScore values correct")
    print("- All file counts correct")
