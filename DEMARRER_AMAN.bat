@echo off
chcp 65001 > nul
title AMAN - المنصة الوطنية المغربية (Master Edition)
color 0F
cls
echo ==============================================================================
echo        AMAN (أمان) - النسخة الموحدة الشاملة لجميع الميزات (Master Edition)
echo        Plateforme Nationale Marocaine de Prévention des Violences
echo ==============================================================================
echo.
echo [1/2] جاري تشغيل خادم أمان المحلي (Node.js + Native SQLite)...
start "AMAN Local Server" /min cmd /c "node server.js"
timeout /t 2 /nobreak > nul
echo [2/2] جاري فتح المنصة تلقائياً في المتصفح...
start http://localhost:3000
echo.
echo ------------------------------------------------------------------------------
echo المنصة تعمل الآن بنجاح على: http://localhost:3000
echo - جميع الميزات مفعلة: SOS، مستشارك الذكي، وضع المكفوفات، لغة الإشارة، مجتمع أمان.
echo - التثبيت مدعوم PWA لجميع الأجهزة (Android, iOS Safari, PC, Mac).
echo - التمويه السريع متوفر بالضغط المزدوج على زر Escape.
echo ------------------------------------------------------------------------------
echo.
pause
