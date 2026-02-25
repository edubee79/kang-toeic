# Debugging Isolation Log
Objective: Identify the source of `RangeError: Invalid count value: -8` during build.

## Strategy
Isolate potential problem areas by renaming directories (e.g., `folder` -> `_folder`) to exclude them from Next.js build/routing.

## Status Legend
- [ ] Pending
- [x] Isolated (Renamed/Excluded)
- [o] Restored (Fixed/Verified)
- [!] Error Found Here

## Isolation Steps

### Step 1: Mock Test Pages
- [ ] **Action**: Rename `src/app/mock-test` to `src/app/_mock-test`
- [ ] **Build Result**: (To be recorded)

### Step 2: Part 4 Homework
- [ ] **Action**: Rename `src/app/homework/part4` to `src/app/homework/_part4`
- [ ] **Build Result**: (To be recorded)

### Step 3: Part 3 Homework
- [ ] **Action**: Rename `src/app/homework/part3` to `src/app/homework/_part3`
- [ ] **Build Result**: (To be recorded)

### Step 4: Part 2 Homework
- [ ] **Action**: Rename `src/app/homework/part2` to `src/app/homework/_part2`
- [ ] **Build Result**: (To be recorded)

### Step 5: Part 1 Homework
- [ ] **Action**: Rename `src/app/homework/part1-real` to `src/app/homework/_part1-real`
- [ ] **Build Result**: (To be recorded)

---
## Findings & Analysis
(Record specific error messages or findings here)
