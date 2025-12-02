# Vercel Deploy Script (PowerShell)
# Bu script token ile otomatik deploy yapar

Write-Host "🚀 Ataberk Doğan - Vercel Deploy Script" -ForegroundColor Cyan
Write-Host ""

# Token kontrolü
if (-not $env:VERCEL_TOKEN) {
    Write-Host "❌ VERCEL_TOKEN bulunamadı!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Token ayarlamak için:" -ForegroundColor Yellow
    Write-Host '  $env:VERCEL_TOKEN="your_token_here"' -ForegroundColor White
    Write-Host ""
    Write-Host "Token oluşturmak için: https://vercel.com/account/tokens" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Token bulundu" -ForegroundColor Green
Write-Host ""

# Build
Write-Host "📦 Build başlatılıyor..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build başarısız!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build başarılı" -ForegroundColor Green
Write-Host ""

# Deploy
Write-Host "🚀 Deploy başlatılıyor..." -ForegroundColor Cyan
vercel --prod --yes --token $env:VERCEL_TOKEN

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deploy başarılı!" -ForegroundColor Green
    Write-Host "🌐 Site: https://ataberkdogan.vercel.app" -ForegroundColor Cyan
} else {
    Write-Host "❌ Deploy başarısız!" -ForegroundColor Red
    exit 1
}
