# Tailwind Canonical Class Fixer
# Replaces legacy Tailwind class names with canonical (shorter) versions
# Based on Tailwind CSS v3/v4 deprecations

$patterns = @{
    # Flex utilities (deprecated in v3, removed in v4)
    'flex-shrink-0' = 'shrink-0'
    'flex-shrink' = 'shrink'
    'flex-grow-0' = 'grow-0'
    'flex-grow' = 'grow'
    
    # Text overflow (deprecated in v3)
    'overflow-ellipsis' = 'text-ellipsis'
    'overflow-clip' = 'text-clip'
    
    # Box decoration (deprecated in v3)
    'decoration-slice' = 'box-decoration-slice'
    'decoration-clone' = 'box-decoration-clone'
    
    # Transform utilities (deprecated in v3 - now auto-applied)
    # Note: 'transform' alone is handled separately due to context
    'transform-gpu' = 'transform-gpu'  # Still valid
    'transform-none' = 'transform-none'  # Still valid
    
    # Filter utilities (deprecated in v3 - now auto-applied)
    # 'filter' and 'backdrop-filter' are auto-applied when using filter utilities
    
    # Leading/Line-height arbitrary values to named values
    'leading-\[1\.5\]' = 'leading-normal'
    'leading-\[1\.25\]' = 'leading-tight'
    'leading-\[1\.375\]' = 'leading-snug'
    'leading-\[1\.625\]' = 'leading-relaxed'
    'leading-\[2\]' = 'leading-loose'
    'leading-\[1\]' = 'leading-none'
    
    # Shadow scale changes (v3 to v4)
    # Uncomment if migrating from v3 to v4:
    # 'shadow-sm' = 'shadow-xs'
    # 'shadow(?!-)' = 'shadow-sm'  # Only bare 'shadow'
    # 'shadow-md' = 'shadow-md'  # Same
    # 'shadow-lg' = 'shadow-lg'  # Same
    
    # Blur scale changes (v3 to v4)
    # Uncomment if migrating from v3 to v4:
    # 'blur-sm' = 'blur-xs'
    # 'blur(?!-)' = 'blur-sm'
    
    # Rounded scale changes (v3 to v4)
    # Uncomment if migrating from v3 to v4:
    # 'rounded-sm' = 'rounded-xs'
    # 'rounded(?!-)' = 'rounded-sm'
}

$files = Get-ChildItem -Recurse -Include *.tsx,*.ts,*.jsx,*.js -Path src

$totalFixes = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    foreach ($pattern in $patterns.Keys) {
        $replacement = $patterns[$pattern]
        
        # Skip if pattern equals replacement (no-op entries)
        if ($pattern -eq $replacement) { continue }
        
        # Use regex for patterns with special chars, simple replace otherwise
        if ($pattern -match '\\') {
            if ($content -match $pattern) {
                $content = $content -replace $pattern, $replacement
                $modified = $true
                Write-Host "Fixed: $($file.Name) - $pattern -> $replacement" -ForegroundColor Green
                $totalFixes++
            }
        } else {
            if ($content -match [regex]::Escape($pattern)) {
                $content = $content -replace [regex]::Escape($pattern), $replacement
                $modified = $true
                Write-Host "Fixed: $($file.Name) - $pattern -> $replacement" -ForegroundColor Green
                $totalFixes++
            }
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

Write-Host "`nTotal fixes applied: $totalFixes" -ForegroundColor Cyan

# Summary of what this script fixes:
Write-Host "`nCanonical replacements applied:" -ForegroundColor Yellow
Write-Host "  flex-shrink-0 -> shrink-0"
Write-Host "  flex-shrink -> shrink"
Write-Host "  flex-grow-0 -> grow-0"
Write-Host "  flex-grow -> grow"
Write-Host "  overflow-ellipsis -> text-ellipsis"
Write-Host "  overflow-clip -> text-clip"
Write-Host "  decoration-slice -> box-decoration-slice"
Write-Host "  decoration-clone -> box-decoration-clone"
Write-Host "  leading-[1.5] -> leading-normal"
Write-Host "  leading-[1.25] -> leading-tight"
Write-Host "  leading-[2] -> leading-loose"
