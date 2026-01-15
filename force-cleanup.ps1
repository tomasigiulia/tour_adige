# Force cleanup and create new branch
Set-Location "d:\Immagini e video\Giulia_immagini_video\drone\tour_virtuale"

Write-Host "Cleaning up rebase state..." -ForegroundColor Yellow

# Force remove rebase state
$gitDir = ".git"
Remove-Item "$gitDir\rebase-merge" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$gitDir\REBASE_HEAD" -Force -ErrorAction SilentlyContinue  
Remove-Item "$gitDir\MERGE_MSG" -Force -ErrorAction SilentlyContinue
Remove-Item "$gitDir\AUTO_MERGE" -Force -ErrorAction SilentlyContinue

Write-Host "State cleaned. Checking current branch..." -ForegroundColor Green

# Reset to the commit before rebase
git reset --hard HEAD 2>&1 | Out-Null

# Pull latest changes
Write-Host "Pulling latest changes..." -ForegroundColor Yellow
git pull origin optimize/coordinates-hardcoded 2>&1 | Out-Null

# Create new branch with enhanced zoom features
$branchName = "feature/enhanced-zoom-system"
Write-Host "Creating new branch: $branchName" -ForegroundColor Cyan
git checkout -b $branchName

Write-Host "`nBranch created successfully!" -ForegroundColor Green
Write-Host "Current status:" -ForegroundColor Yellow
git status
