# Tegar Dimas — Backend Developer Portfolio

Portfolio profesional **Tegar Dimas** — rebuilt from scratch, dark & modern, deploy-ready untuk **Vercel**.

## Struktur
```
tegar-portfolio/
├── index.html            # Halaman utama (single page)
├── css/style.css         # Styling — plain CSS + variables (dark theme)
├── js/main.js            # Nav, typewriter, lightbox gallery, reveal
├── assets/
│   └── images/
│       ├── avatar.jpg    # Foto profil (dari GitHub)
│       └── projects/     # Screenshot proyek (11 file: work1-4, test1-4, up1-3)
├── vercel.json           # Clean URLs + cache header untuk assets
├── .gitignore
└── README.md
```

## Konten (dipertahankan dari situs lama)
- Nama & role: **Tegar Dimas — Backend Developer**
- Skill: API Development, Database Design, Auth, Server & Cloud, Microservices, Performance
- Pengalaman: Internship Web Developer @ Timedoor Indonesia (2024–2025)
- Pendidikan: S1 IT @ Institut Teknologi Bisnis Indonesia (2020–2025)
- Proyek: SchoolPedia (Backend), StoryTime (Backend), Marriage Card (Fullstack)
- Social: GitHub `tegardc`, LinkedIn `tegardimas`, Instagram `tegardimas__`
- CV download: Google Drive link (sama seperti situs lama)

## Fitur Baru (upgrade)
- 🎨 Rebuild total — dark theme profesional + aksen indigo/cyan, texture grain halus
- 💻 Terminal card di hero (developer vibe) + typewriter role
- 🖼️ Lightbox gallery per proyek (klik screenshot → navigasi panah/keyboard)
- 📱 Responsive penuh (HP, tablet, desktop)
- ⚡ Tanpa framework, tanpa jQuery — vanilla HTML/CSS/JS, loading cepat
- ♿ Aksesibilitas: skip link, aria labels, focus states, `prefers-reduced-motion`

## Jalankan Lokal
```bash
# cara paling simpel:
python -m http.server 8080
# atau pakai VSCode Live Server
```

## Deploy ke Vercel
1. Push repo ini ke GitHub/GitLab
2. Import di [vercel.com/new](https://vercel.com/new) — Vercel otomatis deteksi static site
3. Deploy. Selesai — tidak perlu env var / build command.

Atau via CLI: `npm i -g vercel && vercel`

## Catatan
- Email/telepon sengaja tidak dibuat-buat — kontak via LinkedIn/GitHub/Instagram (sesuai data asli)
- Ganti `assets/images/` dengan foto & screenshot terbaru kalau perlu
- Semua aset sudah lokal — nggak ada dependency eksternal selain Google Fonts
