param(
    [string]$SourceDirectory = "assets/mapy",
    [string]$OutputDirectory = "assets/mapy/responsive",
    [int[]]$Widths = @(480, 960, 1600),
    [switch]$Force
)

$ErrorActionPreference = "Stop"
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$sourceRoot = (Resolve-Path (Join-Path $repoRoot $SourceDirectory)).Path
$outputRoot = Join-Path $repoRoot $OutputDirectory
$ffmpeg = Get-Command ffmpeg -ErrorAction Stop

New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null
Add-Type -AssemblyName System.Drawing

$manifest = [ordered]@{}
$extensions = @(".jpg", ".jpeg", ".png")
$sourceFiles = Get-ChildItem -LiteralPath $sourceRoot -File | Where-Object {
    $extensions -contains $_.Extension.ToLowerInvariant()
}

foreach ($sourceFile in $sourceFiles) {
    $image = [System.Drawing.Image]::FromFile($sourceFile.FullName)
    try {
        $sourceWidth = $image.Width
        $sourceHeight = $image.Height
    }
    finally {
        $image.Dispose()
    }

    $variants = @()
    foreach ($width in ($Widths | Sort-Object -Unique)) {
        if ($width -gt $sourceWidth) {
            continue
        }

        $targetName = "{0}-{1}.webp" -f $sourceFile.BaseName, $width
        $targetPath = Join-Path $outputRoot $targetName

        if ($Force -or -not (Test-Path -LiteralPath $targetPath)) {
            $ffmpegArgs = @(
                "-hide_banner", "-loglevel", "error", "-y",
                "-i", $sourceFile.FullName,
                "-vf", "scale=${width}:-2:flags=lanczos",
                "-c:v", "libwebp", "-quality", "78", "-compression_level", "6",
                $targetPath
            )
            & $ffmpeg.Source @ffmpegArgs

            if ($LASTEXITCODE -ne 0) {
                throw "ffmpeg failed for $($sourceFile.Name) at ${width}px"
            }
        }

        $variants += [ordered]@{
            width = $width
            path = (Join-Path $OutputDirectory $targetName).Replace("\", "/")
        }
    }

    if ($variants.Count -gt 0) {
        $manifest[$sourceFile.Name] = [ordered]@{
            width = $sourceWidth
            height = $sourceHeight
            variants = $variants
        }
    }
}

$manifestPath = Join-Path $outputRoot "manifest.json"
$manifest | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $manifestPath -Encoding utf8
Write-Host "Generated responsive variants for $($manifest.Count) images."
Write-Host "Manifest: $manifestPath"
