import pandas as pd
import json
import os

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

print("=" * 80)
print("TOEIC 어휘 데이터 전수조사 (Day 1-30)")
print("=" * 80)

results = []

for day in range(1, 31):
    day_data = df[df['Day'] == day].copy()
    
    print(f"\n{'='*80}")
    print(f"Day {day} 검증")
    print(f"{'='*80}")
    
    day_result = {
        'day': day,
        'csv_total': len(day_data),
        'parts': {}
    }
    
    all_match = True
    
    for part_num, part_name, start, end in [
        (1, 'headword', 1, 40),
        (2, 'basic', 41, 68),
        (3, 'intermediate', 69, 136),
        (4, 'advanced', 137, 168)
    ]:
        filename = f'day{day}_{part_num}_{part_name}.json'
        
        if not os.path.exists(filename):
            print(f"  {part_name:15s}: ❌ 파일 없음")
            day_result['parts'][part_name] = {'status': 'missing', 'mismatches': 0}
            all_match = False
            continue
        
        with open(filename, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
        
        csv_part = day_data[(day_data['No'] >= start) & (day_data['No'] <= end)]
        
        # 단어 수 확인
        if len(csv_part) != len(json_data):
            print(f"  {part_name:15s}: ❌ 단어 수 불일치 (CSV:{len(csv_part)} vs JSON:{len(json_data)})")
            day_result['parts'][part_name] = {'status': 'count_mismatch', 'mismatches': abs(len(csv_part) - len(json_data))}
            all_match = False
            continue
        
        # 단어 일치 확인
        mismatches = 0
        for i, (idx, csv_row) in enumerate(csv_part.iterrows()):
            if i < len(json_data):
                json_word = json_data[i]
                if csv_row['Word'].lower().strip() != json_word['word'].lower().strip():
                    mismatches += 1
        
        if mismatches > 0:
            print(f"  {part_name:15s}: ❌ 단어 불일치 {mismatches}/{len(csv_part)}개")
            day_result['parts'][part_name] = {'status': 'word_mismatch', 'mismatches': mismatches}
            all_match = False
        else:
            print(f"  {part_name:15s}: ✅ 완벽 일치 ({len(json_data)}개)")
            day_result['parts'][part_name] = {'status': 'perfect', 'mismatches': 0}
    
    day_result['all_match'] = all_match
    results.append(day_result)

# 최종 요약
print(f"\n\n{'='*80}")
print("최종 요약")
print(f"{'='*80}\n")

perfect_days = []
partial_days = []
failed_days = []

for r in results:
    if r['all_match']:
        perfect_days.append(r['day'])
    elif any(p['status'] == 'perfect' for p in r['parts'].values()):
        partial_days.append(r['day'])
    else:
        failed_days.append(r['day'])

print(f"✅ 완벽 일치: {len(perfect_days)}일")
if perfect_days:
    print(f"   Day {', '.join(map(str, perfect_days))}")

print(f"\n⚠️  부분 일치: {len(partial_days)}일")
if partial_days:
    print(f"   Day {', '.join(map(str, partial_days))}")

print(f"\n❌ 불일치/없음: {len(failed_days)}일")
if failed_days:
    print(f"   Day {', '.join(map(str, failed_days))}")

# 상세 불일치 정보
print(f"\n\n{'='*80}")
print("재작성 필요 Day 목록")
print(f"{'='*80}\n")

for r in results:
    if not r['all_match']:
        print(f"\nDay {r['day']}:")
        for part_name, part_info in r['parts'].items():
            if part_info['status'] != 'perfect':
                status_msg = {
                    'missing': '파일 없음',
                    'count_mismatch': f"단어 수 불일치 ({part_info['mismatches']}개)",
                    'word_mismatch': f"단어 불일치 ({part_info['mismatches']}개)"
                }.get(part_info['status'], '알 수 없는 오류')
                print(f"  - {part_name:15s}: {status_msg}")

print(f"\n{'='*80}")
print("검증 완료")
print(f"{'='*80}")
