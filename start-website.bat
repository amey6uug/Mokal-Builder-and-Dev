@echo off
REM Mokal Builder - Auto Start Script
REM Double-click this file to start the website

cd /d "c:\Users\core3\OneDrive\Attachments\mokal builder"

echo.
echo ======================================
echo   MOKAL BUILDER - STARTING WEBSITE
echo ======================================
echo.

echo Starting server on http://localhost:8080...
echo.

REM Start node server
start "Mokal Builder Server" node server.js

REM Wait for server to start
timeout /t 2 /nobreak

REM Open website in default browser
echo Opening website in browser...
start http://localhost:8080

echo.
echo ✓ Website is loading!
echo.
echo Keep this window open while using the website.
echo Close the server window to stop.
echo.
pause
