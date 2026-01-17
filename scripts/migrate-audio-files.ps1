# TOEIC 오디오 파일 자동 이동 스크립트
# 원본: toeic-data/ETS정기기출3탄/LC/*/음원/*.mp3
# 목적: public/toeic/listening/part*/ets-vol3/test*/audio/*.mp3

$sourceBase = "c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\toeic-data\ETS정기기출3탄\LC"
$destBase = "c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\public\toeic\listening"

# 파트별 문제 번호 범위
$partRanges = @{
    "part1" = @(1..6)
    "part2" = @(7..31)
    "part3" = @(32..70)
    "part4" = @(71..100)
}

# 1회~10회 처리
for ($test = 1; $test -le 10; $test++) {
    $testFolder = "${test}회"
    $sourcePath = Join-Path $sourceBase $testFolder "음원"
    
    Write-Host "Processing Test $test..." -ForegroundColor Cyan
    
    # 각 파트별로 처리
    foreach ($part in $partRanges.Keys) {
        $destFolder = Join-Path $destBase $part "ets-vol3" "test$('{0:D2}' -f $test)" "audio"
        
        # 폴더 생성
        if (-not (Test-Path $destFolder)) {
            New-Item -Path $destFolder -ItemType Directory -Force | Out-Null
        }
        
        # 해당 파트의 문제 번호 파일 복사
        foreach ($qNum in $partRanges[$part]) {
            $sourceFile = Join-Path $sourcePath "Test_$('{0:D2}' -f $test)-$('{0:D2}' -f $qNum).mp3"
            
            if (Test-Path $sourceFile) {
                $destFile = Join-Path $destFolder "$('{0:D2}' -f $qNum).mp3"
                Copy-Item -Path $sourceFile -Destination $destFile -Force
                Write-Host "  Copied: $part/test$('{0:D2}' -f $test)/audio/$('{0:D2}' -f $qNum).mp3" -ForegroundColor Green
            } else {
                Write-Host "  Missing: $sourceFile" -ForegroundColor Yellow
            }
        }
    }
}

Write-Host "`nAudio file migration completed!" -ForegroundColor Green
Write-Host "Total files processed: ~1000 files" -ForegroundColor Cyan
