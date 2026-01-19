$baseSrc = "$PSScriptRoot\..\toeic-data\ETS정기기출3탄\음원"
$destDir = "$PSScriptRoot\..\public\audio\lc\part2"

# Ensure destination directory exists
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Loop through 1 to 10
1..10 | ForEach-Object {
    $testNum = $_
    $srcDirName = "${testNum}회"
    $srcPath = Join-Path $baseSrc $srcDirName
    
    # Format padding
    $testNumPad = $testNum.ToString("00")

    Write-Host "Processing $srcPath..."
    
    if (Test-Path -Path $srcPath) {
        Get-ChildItem -Path $srcPath -Filter "*PART 2*.mp3" | ForEach-Object {
            $fileName = $_.Name
            
            # Extract Question Number using Regex (e.g. TEST 01_PART 2_7.mp3)
            if ($fileName -match "PART 2_(\d+)\.mp3") {
                $qNum = $matches[1]
                $qNumInt = [int]$qNum
                $qNumPadStr = $qNumInt.ToString("00")
                
                $newFileName = "Test_${testNumPad}-${qNumPadStr}.mp3"
                $destFilePath = Join-Path $destDir $newFileName
                
                # Write-Host "Copying $fileName to $newFileName"
                Copy-Item -Path $_.FullName -Destination $destFilePath -Force
            }
        }
    } else {
        Write-Warning "Source directory not found: $srcPath"
    }
}

Write-Host "Copy complete."
