
import json
from collections import Counter

def final_audit():
    try:
        with open("src/data/vocabulary_final.json", "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error: Could not load data file. {e}")
        return

    # 1. ID Uniqueness Check
    ids = [d.get("id") for d in data]
    id_counts = Counter(ids)
    duplicates = {id: count for id, count in id_counts.items() if count > 1}

    # 2. Daily Slot Distribution
    day_counts = Counter([d.get("day") for d in data])
    
    # 3. Enhanced Data Coverage (Sinagong Data)
    sina_words = [d for d in data if d.get("usageNote") or (d.get("collocations") and len(d.get("collocations")) > 0)]
    
    print("=== [Voca System Final Audit Report] ===")
    print(f"Total Combined Words: {len(data)}")
    print(f"Enhanced (Sinagong) Words: {len(sina_words)}")
    print("-" * 40)
    
    if duplicates:
        print("❌ DUPLICATE IDs FOUND:")
        for id, count in duplicates.items():
            print(f"  - {id}: {count} occurrences")
    else:
        print("✅ All IDs are unique.")

    print("-" * 40)
    print("📅 DAILY SLOT DISTRIBUTION (Goal: ~80 words/day)")
    print(f"{'Day':<5} | {'Count':<6} | {'Status'}")
    print("-" * 25)
    
    perfect_days = 0
    for day in range(1, 21):
        count = day_counts.get(day, 0)
        status = "OK" if 75 <= count <= 85 else "!!"
        if status == "OK": perfect_days += 1
        print(f"{day:<5} | {count:<6} | {status}")
    
    print("-" * 40)
    print(f"Summary: {perfect_days}/20 days are within the ideal 75-85 slot range.")
    print("Audit Complete.")

if __name__ == "__main__":
    final_audit()
