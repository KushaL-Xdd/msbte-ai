Write-Host "🚀 Creating MSBTE AI Project Structure..." -ForegroundColor Cyan

# =========================
# FOLDERS
# =========================

$folders = @(
"app/(auth)/login",
"app/(auth)/register",
"app/dashboard",
"app/ai",
"app/notes",
"app/papers",
"app/quiz",
"app/planner",
"app/profile",
"app/settings",
"app/admin",

"components/ui",
"components/common",
"components/layout",
"components/navigation",
"components/landing",
"components/dashboard",
"components/chat",
"components/cards",
"components/profile",
"components/notes",
"components/quiz",
"components/planner",

"lib",
"lib/constants",
"lib/config",
"lib/utils",

"hooks",
"types",

"services",
"services/ai",
"services/supabase",

"providers",

"data",
"data/subjects",
"data/notes",
"data/papers",

"public/images",
"public/icons",
"public/logos",

"styles",

"supabase",

"config"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

# =========================
# FILES
# =========================

$files = @(

"components/landing/navbar.tsx",
"components/landing/hero.tsx",
"components/landing/features.tsx",
"components/landing/subjects.tsx",
"components/landing/footer.tsx",

"components/layout/sidebar.tsx",
"components/layout/topbar.tsx",

"components/dashboard/progress-card.tsx",
"components/dashboard/stats-card.tsx",

"components/chat/chat-box.tsx",

"components/profile/profile-card.tsx",

"components/notes/note-card.tsx",

"components/quiz/quiz-card.tsx",

"components/planner/planner-card.tsx",

"lib/constants/theme.ts",

"lib/config/site.ts",

"services/ai/index.ts",

"services/supabase/client.ts",

"providers/theme-provider.tsx",

"types/index.ts",

"hooks/use-theme.ts",

"styles/globals.css"
)

foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file | Out-Null
    }
}

Write-Host ""
Write-Host "✅ MSBTE AI Project Structure Created Successfully!" -ForegroundColor Green
Write-Host ""