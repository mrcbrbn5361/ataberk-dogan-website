@echo off
REM Vercel Deploy Script (CMD)
REM Bu script token ile otomatik deploy yapar

echo.
echo ================================
echo Ataberk Dogan - Vercel Deploy
echo ================================
echo.

REM Token kontrolu
if "%VERCEL_TOKEN%"=="" (
    echo [ERROR] VERCEL_TOKEN bulunamadi!
    echo.
    echo Token ayarlamak icin:
    echo   set VERCEL_TOKEN=your_token_here
    echo.
    echo Token olusturmak icin: https://vercel.com/account/tokens
    exit /b 1
)

echo [OK] Token bulundu
echo.

REM Build
echo [BUILD] Build baslatiliyor...
call npm run build

if errorlevel 1 (
    echo [ERROR] Build basarisiz!
    exit /b 1
)

echo [OK] Build basarili
echo.

REM Deploy
echo [DEPLOY] Deploy baslatiliyor...
call vercel --prod --yes --token %VERCEL_TOKEN%

if errorlevel 1 (
    echo [ERROR] Deploy basarisiz!
    exit /b 1
)

echo.
echo [OK] Deploy basarili!
echo [INFO] Site: https://ataberkdogan.vercel.app
echo.
