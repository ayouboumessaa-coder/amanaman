@echo off
chcp 65001 >nul
title AMAN - أمان | المنصة الوطنية للحماية والمساندة
echo ===================================================
echo     AMAN - أمان | المنصة الوطنية للحماية والمساندة
echo ===================================================
echo.
echo جاري فحص بيئة التشغيل وتحديث النظام...
where node >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] تم العثور على Node.js - جاري تشغيل خادم أمان الآمن على http://localhost:3000...
    start "" /b node server.js
    timeout /t 2 >nul
    start http://localhost:3000/#home
) else (
    echo [INFO] جاري فتح تطبيق أمان مباشرة في المتصفح...
    start index.html
)
echo.
echo تم تشغيل تطبيق أمان بنجاح.
pause
