cs# Mokal Builder - Auto Start Script
# This script starts the Node.js server and opens the website in your default browser

Write-Host "`n🚀 Starting Mokal Builder Website...`n" -ForegroundColor Cyan

# Navigate to project directory
Set-Location "c:\Users\core3\OneDrive\Attachments\mokal builder"

# Start the Node server in background
Write-Host "📡 Starting server on http://localhost:8080..." -ForegroundColor Yellow
$serverProcess = Start-Process node -ArgumentList "server.js" -PassThru -WindowStyle Minimized

# Wait for server to start
Start-Sleep -Seconds 2

# Check if server is running
$portCheck = netstat -ano | Select-String ":8080"
if ($portCheck) {
    Write-Host "✅ Server is running!" -ForegroundColor Green
    Write-Host "`n🌐 Opening website in browser...`n" -ForegroundColor Cyan
    
    # Open website in default browser
    Start-Process "http://localhost:8080"
    
    Write-Host "✨ Website loaded! Enjoy browsing.`n" -ForegroundColor Green
    Write-Host "📝 Server running in background. Press Ctrl+C in the server window to stop.`n" -ForegroundColor Gray
} else {
    Write-Host "❌ Error: Server failed to start on port 8080" -ForegroundColor Red
    Write-Host "`n💡 Try running: node server.js`n" -ForegroundColor Yellow
}
