# Force cleanup of git rebase state
$rebasePath = "d:\Immagini e video\Giulia_immagini_video\drone\tour_virtuale\.git\rebase-merge"
$gitDir = "d:\Immagini e video\Giulia_immagini_video\drone\tour_virtuale\.git"

if (Test-Path $rebasePath) {
    Remove-Item -Path $rebasePath -Recurse -Force
    Write-Host "Rebase state cleaned"
}

# Remove rebase-related files
@('REBASE_HEAD', 'MERGE_MSG', 'AUTO_MERGE') | ForEach-Object {
    $file = Join-Path $gitDir $_
    if (Test-Path $file) {
        Remove-Item -Path $file -Force
    }
}

Write-Host "Cleanup complete"
