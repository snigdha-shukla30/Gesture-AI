# Script to update .env file with Supabase credentials
# Usage: .\update-env.ps1

Write-Host "Updating .env file with Supabase credentials..." -ForegroundColor Green

$supabaseUrl = Read-Host "Enter your Supabase URL"
$supabaseKey = Read-Host "Enter your Supabase Anon Key"

$envContent = @"
# Supabase Configuration
VITE_SUPABASE_URL=$supabaseUrl
VITE_SUPABASE_ANON_KEY=$supabaseKey
"@

$envContent | Out-File -FilePath ".env" -Encoding utf8 -Force

Write-Host "`.env file updated successfully!" -ForegroundColor Green
Write-Host "Please restart the dev server (npm run dev) for changes to take effect." -ForegroundColor Yellow


