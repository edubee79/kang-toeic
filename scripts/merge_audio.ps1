$baseDir = "c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\public\audio\ETS_TOEIC_3\Test_09"
$output = "c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\public\audio\mock\half_9a_full.mp3"

$files = @(
    # Part 1
    "TEST 09_PART 1_1.mp3",
    "TEST 09_PART 1_3.mp3",
    "TEST 09_PART 1_5.mp3",
    
    # Part 2
    "TEST 09_PART 2_7.mp3",
    "TEST 09_PART 2_8.mp3",
    "TEST 09_PART 2_9.mp3",
    "TEST 09_PART 2_11.mp3",
    "TEST 09_PART 2_13.mp3",
    "TEST 09_PART 2_15.mp3",
    "TEST 09_PART 2_17.mp3",
    "TEST 09_PART 2_19.mp3",
    "TEST 09_PART 2_21.mp3",
    "TEST 09_PART 2_23.mp3",
    "TEST 09_PART 2_25.mp3",
    "TEST 09_PART 2_27.mp3",
    "TEST 09_PART 2_29.mp3",
    "TEST 09_PART 2_31.mp3",
    
    # Part 3
    "TEST 09_PART 3_32-34.mp3",
    "TEST 09_PART 3_38-40.mp3",
    "TEST 09_PART 3_44-46.mp3",
    "TEST 09_PART 3_50-52.mp3",
    "TEST 09_PART 3_56-58.mp3",
    "TEST 09_PART 3_62-64.mp3",
    
    # Part 4
    "TEST 09_PART 4_71-73.mp3",
    "TEST 09_PART 4_77-79.mp3",
    "TEST 09_PART 4_83-85.mp3",
    "TEST 09_PART 4_89-91.mp3",
    "TEST 09_PART 4_95-97.mp3"
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

Write-Host "Merging files..."
cmd /c $cmd
Write-Host "Done! Output: $output"
