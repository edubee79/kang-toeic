$start = 6
$end = 10

for ($i = $start; $i -le $end; $i++) {
    Write-Host "----------------------------------------"
    Write-Host "Starting extraction for Test $i"
    Write-Host "----------------------------------------"
    
    npx tsx scripts/process-part4-complete.ts $i
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error processing Test $i. Stopping."
        break
    }
    
    if ($i -lt $end) {
        Write-Host "Waiting 10 seconds before next test..."
        Start-Sleep -Seconds 10
    }
}

Write-Host "Batch processing complete."
