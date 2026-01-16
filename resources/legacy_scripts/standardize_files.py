import os
import shutil
import glob

# Pattern for legacy files: day*_1_headword.json, day*_2_basic.json, etc.
patterns = [
    "day*_1_headword.json",
    "day*_2_basic.json",
    "day*_3_intermediate.json",
    "day*_4_advanced.json",
    "day*_full.json"
]

target_dir = "legacy_data"
if not os.path.exists(target_dir):
    os.makedirs(target_dir)

moved_count = 0
for pattern in patterns:
    files = glob.glob(pattern)
    for f in files:
        try:
            shutil.move(f, os.path.join(target_dir, f))
            print(f"Moved {f} to {target_dir}")
            moved_count += 1
        except Exception as e:
            print(f"Error moving {f}: {e}")

print(f"Total {moved_count} legacy files moved.")

# Verify remaining files for Day 1-5
print("\n--- Verifying Day 1-5 Files ---")
missing = []
for d in range(1, 6):
    for p in range(1, 5):
        fname = f"day{d}_part{p}.json"
        if not os.path.exists(fname):
            missing.append(fname)
        else:
            print(f"✅ {fname} exists.")

if missing:
    print(f"❌ Missing files: {missing}")
else:
    print("✅ All Day 1-5 files follow the 'dayX_partY.json' standard.")
