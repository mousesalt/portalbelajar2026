# Portal Belajar — GitHub Pages

Proyek ini menggabungkan landing page dan halaman mata pelajaran untuk Portal Belajar DKV. HTML, CSS, dan JavaScript dipisahkan supaya mudah dirawat.

## Struktur

```text
.
├── index.html
├── assets/css/landing.css
└── mapel/
    ├── informatika-x/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    ├── informatika-xii/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    └── desain-media-interaktif-xii/
        ├── index.html
        ├── style.css
        └── app.js
```

## Informatika Kelas XII DKV

Halaman Informatika XII disusun dengan navigasi **bulan di bagian atas** dan **daftar minggu di panel kiri**, mengikuti contoh tampilan yang diberikan. Pembagian materi mengikuti susunan Bab 1–6 pada buku *Informatika untuk SMA/MA Kelas XII* (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, 2022):

- Juli: Bab 1 — Informatika Sekarang dan Masa Depan (Minggu 1–3)
- Agustus: Bab 2 — Sistem Komputer (Minggu 4–7)
- September: Bab 3 — Berpikir Komputasional dan Algoritma Pemrograman (Minggu 8–11)
- Oktober: Bab 4 — Jaringan Komputer dan Internet (Minggu 12–16)
- November: Bab 5 — Dampak Sosial Informatika (Minggu 17–20)
- Desember: Bab 6 — Praktik Lintas Bidang (Minggu 21–24)

Setiap modul memuat ringkasan, tujuan pembelajaran, konsep inti, aktivitas, produk/bukti belajar, referensi halaman cetak buku, dan kuis pemahaman. Modul merupakan ringkasan dan rancangan aktivitas pembelajaran, bukan reproduksi penuh buku. Catatan: berkas PDF yang diunggah berakhir pada halaman cetak 122, sedangkan daftar isi mencantumkan materi lanjutan mulai halaman 123. Karena itu, modul yang merujuk halaman setelah 122 mengikuti struktur daftar isi dan aktivitas pendamping yang dirancang guru; isi rinci bagian yang belum terlampir belum bisa diverifikasi terhadap halaman aslinya.

## Publikasi di GitHub Pages

1. Unduh dan ekstrak ZIP proyek.
2. Unggah seluruh isi folder proyek ke root repository GitHub; `index.html` harus berada langsung di root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. URL proyek biasanya `https://USERNAME.github.io/NAMA-REPOSITORY/`.

## Catatan

- Semua tautan landing page mengarah ke halaman di dalam proyek.
- Kuis mata pelajaran berjalan di browser. Paket ini belum menyimpan nilai ke database/akun siswa dan belum menyediakan rekap nilai terpusat.
- Untuk pengujian lokal, jalankan server statis dari root proyek, misalnya dengan Live Server di Visual Studio Code.
