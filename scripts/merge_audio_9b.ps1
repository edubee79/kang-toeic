$baseDir = "c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\public\audio\ETS_TOEIC_3\Test_09"
$output = "c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\public\audio\mock\half_9b_full.mp3"

$files = @(
    # Part 1: 2, 4, 6
    "TEST 09_PART 1_2.mp3",
    "TEST 09_PART 1_4.mp3",
    "TEST 09_PART 1_6.mp3",
    
    # Part 2: 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30 (11 IDs)
    "TEST 09_PART 2_10.mp3",
    "TEST 09_PART 2_12.mp3",
    "TEST 09_PART 2_14.mp3",
    "TEST 09_PART 2_16.mp3",
    "TEST 09_PART 2_18.mp3",
    "TEST 09_PART 2_20.mp3",
    "TEST 09_PART 2_22.mp3",
    "TEST 09_PART 2_24.mp3",
    "TEST 09_PART 2_26.mp3",
    "TEST 09_PART 2_28.mp3",
    "TEST 09_PART 2_30.mp3",
    
    # Part 3: Indices 1, 3, 5, 7, 9, 11, 12
    "TEST 09_PART 3_35-37.mp3",
    "TEST 09_PART 3_41-43.mp3",
    "TEST 09_PART 3_47-49.mp3",
    "TEST 09_PART 3_53-55.mp3",
    "TEST 09_PART 3_59-61.mp3",
    "TEST 09_PART 3_65-67.mp3",
    "TEST 09_PART 3_68-70.mp3",
    
    # Part 4: Indices 1, 3, 5, 7, 9
    "TEST 09_PART 4_74-76.mp3",
    "TEST 09_PART 4_80-82.mp3",
    "TEST 09_PART 4_86-88.mp3",
    "TEST 09_PART 4_92-94.mp3",
    "TEST 09_PART 4_98-100.mp3"
)

$cmd = "copy /b "
for ($i=0; $i -lt $files.Count; $i++) {
    $filePath = Join-Path $baseDir $files[$i]
    $cmd += "`"$filePath`""
    if ($i -lt $files.Count - 1) {
        $cmd += " + "
    }
}
$cmd += " `"$output`""

Write-Host "Merging files for 9B..."
cmd /c $cmd
Write-Host "Done! Output: $output"
