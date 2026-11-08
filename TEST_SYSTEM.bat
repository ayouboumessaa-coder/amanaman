@echo off
chcp 65001 > nul
title AMAN - اختبار المنصة
cls
echo جاري فحص الكود والاختبارات التلقائية...
node scripts/check-syntax.js
node scripts/test-integration.js
pause
