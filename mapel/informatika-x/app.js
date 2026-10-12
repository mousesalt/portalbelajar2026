// Database of weekly modules
    const curriculumData = {
        juli: [
            {
                id: "w1",
                weekLabel: "Minggu 1 (13-19 Juli)",
                title: "Minggu 1: Struktur Data Dasar & Logika Aset Desain",
                summary: "Fokus minggu ini adalah membedakan jenis struktur data dasar dan bagaimana konsep ini diimplementasikan untuk mengorganisasikan aset visual DKV.",
                rabu: {
                    title: "A. Pengenalan Berpikir Komputasional & Struktur Data Dasar",
                    content: `
                        <p>Berpikir Komputasional (BK) merupakan fondasi utama pembelajaran Informatika Fase E. Kita mempelajari bagaimana memecahkan masalah besar secara sistematis. Struktur data adalah cara menyimpan dan mengatur data dalam komputer agar dapat digunakan secara efektif.</p>
                        <p><strong>Struktur Data dasar yang penting dipelajari:</strong></p>
                        <ul>
                            <li><strong>List (Daftar):</strong> Kumpulan data sejenis yang tersusun berurutan (misal: Daftar aset logo klien).</li>
                            <li><strong>Queue (Antrean - FIFO: First In, First Out):</strong> Elemen yang masuk pertama akan keluar pertama (misal: Antrean rendering file video di server render).</li>
                            <li><strong>Stack (Tumpukan - LIFO: Layer terakhir di atas, First Out):</strong> Elemen terakhir yang masuk akan keluar pertama (misal: Tumpukan layer desain di Adobe Photoshop atau fitur 'Undo' Ctrl+Z).</li>
                        </ul>
                        <div class="highlight-box">
                            <strong>Berpikir Komputasional (Dekomposisi):</strong> Proses mendekomposisi sebuah file desain poster besar menjadi komponen latar belakang, teks, ilustrasi, dan logo agar mudah dikelola secara terpisah.
                        </div>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pemetaan Struktur Aset & Layer Desain",
                    content: `
                        <p><strong>LKPD-01: Organisasi File Desain Berbasis Struktur Data Stack</strong></p>
                        <p><strong>Tujuan:</strong> Siswa mampu merancang susunan layer desain secara efisien menggunakan prinsip LIFO (Stack).</p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka software pengolah gambar (Photoshop / Canva / Figma) di komputer Lab.</li>
                            <li>Buat dokumen baru dan buatlah sebuah desain poster promosi sederhana.</li>
                            <li>Buat minimal 5 layer yang berbeda (Background, Shape Ornamen, Gambar Ilustrasi, Judul Teks, dan Logo).</li>
                            <li>Susun layer tersebut secara berjenjang. Amati bagaimana layer paling atas menghalangi layer di bawahnya (LIFO).</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas & Kriteria Pengumpulan:</strong> Ekspor hasil screenshot struktur panel layer (bukan gambar posternya) dan kumpulkan ke Google Classroom. Kriteria penilaian: Kerapian penamaan layer dan keefektifan urutan tumpukan.
                        </div>
                    `
                },
                quiz: {
                    question: "Struktur data manakah yang menerapkan prinsip FIFO (First In First Out)?",
                    options: ["A. Stack (Tumpukan)", "B. Queue (Antrean)", "C. Binary Tree"],
                    correct: "B",
                    explanation: "Benar! Queue (Antrean) menggunakan prinsip FIFO, di mana data yang pertama kali masuk akan diproses dan keluar pertama kali."
                }
            },
            {
                id: "w2",
                weekLabel: "Minggu 2 (20-26 Juli)",
                title: "Minggu 2: Algoritma Pencarian (Searching) dalam File Repositori",
                summary: "Belajar memahami perbedaan algoritma pencarian biner dan berurutan untuk mencari aset grafis.",
                rabu: {
                    title: "A. Konsep Sequential Search & Binary Search",
                    content: `
                        <p>Algoritma pencarian adalah metode untuk menemukan data tertentu di dalam kumpulan data yang besar. Bagi desainer DKV yang memiliki ribuan file aset gambar, pencarian yang efisien sangatlah krusial.</p>
                        <ul>
                            <li><strong>Sequential Search (Pencarian Berurutan):</strong> Memeriksa setiap elemen data dari awal hingga akhir satu per satu. Cocok untuk data yang tidak terurut.</li>
                            <li><strong>Binary Search (Pencarian Biner):</strong> Membagi data menjadi dua bagian secara berulang pada data yang sudah terurut. Jauh lebih cepat untuk kumpulan data besar.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pencarian Aset Visual Berdasarkan Kriteria terurut",
                    content: `
                        <p><strong>LKPD-02: Simulasi Penelusuran File Portofolio</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka folder koleksi aset gambar di komputer Lab yang disediakan guru.</li>
                            <li>Praktikkan pencarian file menggunakan fitur 'Search' bawaan Windows File Explorer dengan menambahkan variabel filter (seperti *.png, datemodified, size:>10MB).</li>
                            <li>Bandingkan waktu pencarian jika file terorganisir dengan rapi vs file yang berantakan.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Tulis analisis singkat di lembar kerja mengenai efisiensi waktu pencarian dengan filter lanjutan di File Explorer.
                        </div>
                    `
                },
                quiz: {
                    question: "Algoritma pencarian manakah yang mensyaratkan data harus diurutkan terlebih dahulu?",
                    options: ["A. Sequential Search", "B. Binary Search", "C. Random Search"],
                    correct: "B",
                    explanation: "Tepat sekali! Binary search mewajibkan data diurutkan terlebih dahulu agar dapat membelah rentang pencarian menjadi dua bagian secara akurat."
                }
            },
            {
                id: "w3",
                weekLabel: "Minggu 3 (27 Juli-2 Agst)",
                title: "Minggu 3: Algoritma Pengurutan (Sorting) Aset Digital",
                summary: "Mempelajari logika di balik pengurutan data menggunakan Bubble Sort dan Insertion Sort.",
                rabu: {
                    title: "A. Konsep Bubble Sort & Insertion Sort",
                    content: `
                        <p>Pengurutan (Sorting) adalah proses menyusun data berdasarkan urutan tertentu (kecil ke besar / sebaliknya). Dua algoritma standar di Fase E adalah:</p>
                        <ul>
                            <li><strong>Bubble Sort:</strong> Membandingkan dua elemen yang bersebelahan secara berulang-ulang dan menukarnya jika urutannya salah, hingga seluruh data terurut.</li>
                            <li><strong>Insertion Sort:</strong> Mengambil elemen satu per satu lalu menyisipkannya ke posisi yang tepat pada bagian data yang sudah terurut.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Mengurutkan Metadata Portofolio Desain",
                    content: `
                        <p><strong>LKPD-03: Simulasi Pengurutan File Desain secara Unplugged & Spreadsheet</strong></p>
                        <p><strong>Langkah Kerja:</strong></p>
                        <ol>
                            <li>Gunakan Google Sheets di komputer lab. Masukkan data 10 nama file gambar beserta ukurannya (KB) secara acak.</li>
                            <li>Terapkan pengurutan (Sort) otomatis berdasarkan ukuran file.</li>
                            <li>Tuliskan langkah-langkah logika manual seolah-olah Anda mengurutkannya menggunakan metode Bubble Sort.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kumpulkan link file spreadsheet Anda dan tulis deskripsi langkah logika penukaran data (bubble sort) di kolom komentar Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Metode pengurutan yang membandingkan dua elemen berdampingan dan menukarnya terus-menerus disebut...",
                    options: ["A. Bubble Sort", "B. Insertion Sort", "C. Selection Sort"],
                    correct: "A",
                    explanation: "Benar! Bubble sort membandingkan nilai berpasangan dan menukarnya secara bertahap seolah-olah nilai tersebut mengapung ke atas."
                }
            }
        ],
        agustus: [
            {
                id: "w4",
                weekLabel: "Minggu 4 (3-9 Agustus)",
                title: "Minggu 4: Arsitektur Von Neumann & Sistem Input-Process-Output",
                summary: "Memahami bagaimana workstation komputer DKV memproses data grafis.",
                rabu: {
                    title: "A. Model Komputer Von Neumann & Siklus IPO",
                    content: `
                        <p>Sistem komputer bekerja berdasarkan arsitektur Von Neumann yang menjalankan mekanisme Input-Process-Output (I-P-O):</p>
                        <ul>
                            <li><strong>Input Device:</strong> Pen tablet, mouse, keyboard, scanner, kamera digital.</li>
                            <li><strong>Process & Storage (CPU & RAM):</strong> Otak komputer yang mengeksekusi instruksi desain dan menyimpan aset sementara saat rendering.</li>
                            <li><strong>Output Device:</strong> Monitor beresolusi tinggi, printer warna, projector.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Analisis Spesifikasi Hardware untuk Grafis",
                    content: `
                        <p><strong>LKPD-04: Audit Spesifikasi Komputer Desain Grafis</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Di komputer Lab, jalankan perintah 'dxdiag' pada Windows Search Run.</li>
                            <li>Catat jenis processor (CPU), kapasitas RAM, dan kartu grafis (GPU) yang digunakan.</li>
                            <li>Hubungkan spesifikasi tersebut dengan kecepatan rendering atau pembuatan aset visual.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Susun laporan spesifikasi komputer ideal untuk desainer DKV dalam format dokumen teks, kumpulkan di Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Manakah perangkat di bawah ini yang bertindak sebagai Input Device khusus dalam industri DKV?",
                    options: ["A. Pen Tablet / Drawing Monitor", "B. Printer Laserjet", "C. RAM (Random Access Memory)"],
                    correct: "A",
                    explanation: "Benar! Pen tablet menerima input koordinat pen sentuh desainer dan mengirimkannya ke komputer untuk diproses menjadi gambar digital."
                }
            },
            {
                id: "w5",
                weekLabel: "Minggu 5 (10-16 Agustus)",
                title: "Minggu 5: Sistem Operasi & Multitasking Software Desain",
                summary: "Memahami peran OS dalam membagi resource memori saat membuka aplikasi desain yang berat.",
                rabu: {
                    title: "A. Peran Sistem Operasi (Operating System)",
                    content: `
                        <p>Sistem Operasi (seperti Windows, macOS, Linux) berfungsi sebagai jembatan antara hardware dan software aplikasi.</p>
                        <p><strong>Fungsi utama OS meliputi:</strong></p>
                        <ul>
                            <li><strong>Manajemen Memori:</strong> Mengatur RAM agar tidak kehabisan memori saat desainer membuka software berat.</li>
                            <li><strong>Manajemen Proses (Multitasking):</strong> Membagi kinerja CPU secara adil (Round Robin) agar aplikasi tidak hang.</li>
                            <li><strong>Manajemen File (Utility):</strong> Menyediakan sistem direktori folder yang rapi untuk menyimpan file.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Monitoring Resource RAM & CPU via Task Manager",
                    content: `
                        <p><strong>LKPD-05: Analisis Beban Memori Aplikasi Grafis</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka Windows Task Manager (Ctrl+Shift+Esc).</li>
                            <li>Buka software desain (seperti Adobe Photoshop / CorelDraw) dan amati lonjakan penggunaan RAM dan CPU.</li>
                            <li>Lakukan ekspor/render file berukuran besar dan analisis grafik performa di Task Manager.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kumpulkan screenshot Task Manager saat proses render aktif, berikan ulasan tertulis analisis penggunaan memori RAM di komputer lab Anda.
                        </div>
                    `
                },
                quiz: {
                    question: "Komponen sistem operasi yang bertanggung jawab langsung untuk berinteraksi dengan kernel hardware komputer disebut...",
                    options: ["A. User Interface (UI)", "B. Device Driver / Kernel Interface", "C. File System"],
                    correct: "B",
                    explanation: "Tepat! Device Driver bertindak sebagai penerjemah antara kernel sistem operasi dan komponen fisik perangkat keras seperti printer atau pen tablet."
                }
            },
            {
                id: "w6",
                weekLabel: "Minggu 6 (17-23 Agustus)",
                title: "Minggu 6: Jaringan Komputer Lokal (LAN) di Studio Desain",
                summary: "Mempelajari konsep konektivitas nirkabel dan kabel untuk mentransfer aset digital.",
                rabu: {
                    title: "A. Konsep Dasar Jaringan Lokal & Internet",
                    content: `
                        <p>Desainer DKV bekerja secara kolaboratif dalam sebuah studio. Untuk berbagi file mentah desain yang berukuran gigabyte, diperlukan jaringan komputer lokal (LAN) yang cepat.</p>
                        <ul>
                            <li><strong>Koneksi Kabel (Ethernet/LAN):</strong> Memiliki kecepatan transfer stabil, sangat direkomendasikan untuk memindahkan aset video besar.</li>
                            <li><strong>Koneksi Nirkabel (Wi-Fi):</strong> Fleksibel namun rentan interferensi.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pengujian Konektivitas & Sharing Folder",
                    content: `
                        <p><strong>LKPD-06: File Sharing di Jaringan Lab Komputer</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka Command Prompt (CMD), uji koneksi ke IP komputer sebelah Anda menggunakan perintah 'ping'.</li>
                            <li>Buat folder bersama (Shared Folder) di Windows File Explorer Anda.</li>
                            <li>Mintalah teman sebaya Anda mengakses dan mengunduh file gambar portofolio dari folder bersama Anda.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Tulis laporan singkat berisi alamat IP komputer Anda dan nama komputer teman yang berhasil terhubung dengan folder Anda.
                        </div>
                    `
                },
                quiz: {
                    question: "Utilitas Command Line (CLI) apa yang digunakan untuk menguji latensi dan keterhubungan koneksi ke IP perangkat lain?",
                    options: ["A. ipconfig", "B. ping", "C. tracert"],
                    correct: "B",
                    explanation: "Benar! Perintah 'ping' mengirimkan paket ICMP echo request untuk memastikan koneksi ke server atau komputer tujuan aktif."
                }
            },
            {
                id: "w7",
                weekLabel: "Minggu 7 (24-30 Agustus)",
                title: "Minggu 7: Keamanan Siber Akun Kreatif & Perlindungan HAKI",
                summary: "Mempelajari pengamanan akun portofolio online menggunakan 2FA dan manajemen kata sandi.",
                rabu: {
                    title: "A. Ancaman Keamanan Siber & Metode Pengamanan",
                    content: `
                        <p>Sebagai praktisi DKV, aset digital Anda adalah uang. Kehilangan akses ke akun Behance, Dribbble, atau email bisnis akibat peretasan bisa menghancurkan karir.</p>
                        <p><strong>Langkah krusial pengamanan akun:</strong></p>
                        <ul>
                            <li><strong>Kata Sandi yang Kuat:</strong> Kombinasi simbol, angka, huruf besar dan kecil.</li>
                            <li><strong>Two-Factor Authentication (2FA):</strong> Autentikasi dua langkah menggunakan aplikasi authenticator (Google Authenticator) atau SMS OTP.</li>
                            <li><strong>Password Manager:</strong> Penyimpanan sandi terenkripsi (seperti Bitwarden).</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pengaturan 2FA & Simulasi Phishing",
                    content: `
                        <p><strong>LKPD-07: Audit Keamanan Akun Portofolio & Setup 2FA</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan website Bitwarden / Password Strength Checker untuk menguji kekuatan kata sandi Anda.</li>
                            <li>Lakukan setup Google Authenticator pada akun Google pribadi Anda atau akun simulasi yang disediakan guru.</li>
                            <li>Analisis contoh-contoh email phishing yang sering menargetkan desainer pemula.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Unggah laporan singkat berisi daftar tindakan pencegahan peretasan akun yang telah Anda terapkan di komputer Anda.
                        </div>
                    `
                },
                quiz: {
                    question: "Manakah faktor kedua yang paling aman dalam sistem autentikasi 2FA?",
                    options: ["A. Kode SMS OTP", "B. Aplikasi Authenticator (Google Authenticator/FreeOTP)", "C. Kata sandi tambahan"],
                    correct: "B",
                    explanation: "Benar! Aplikasi Authenticator menghasilkan kode verifikasi secara offline berbasis waktu (TOTP), jauh lebih aman dari sadapan SMS OTP."
                }
            }
        ],
        september: [
            {
                id: "w8",
                weekLabel: "Minggu 8 (31 Agst-6 Sept)",
                title: "Minggu 8: Pengumpulan & Pembersihan Data (Cleansing)",
                summary: "Mempelajari cara menyaring dan mengolah data kotor riset pasar desain.",
                rabu: {
                    title: "A. Pengolahan Data & Pembersihan Data (Data Cleansing)",
                    content: `
                        <p>Sebelum mendesain sebuah produk (seperti kemasan makanan), desainer DKV harus melakukan riset selera pasar. Data yang dikumpulkan dari survei seringkali "kotor" (entri ganda, data kosong, atau salah ketik).</p>
                        <p><strong>Data Cleansing:</strong> Proses membersihkan data tidak valid agar keputusan desain tidak mengalami kesalahan fatal yang merugikan (GIGO - Garbage In Garbage Out).</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Data Cleansing Menggunakan Google Sheets",
                    content: `
                        <p><strong>LKPD-08: Pembersihan Data Hasil Riset Pasar</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Unduh file dataset riset pasar (format .csv) yang disediakan guru di Lab.</li>
                            <li>Buka menggunakan Microsoft Excel atau Google Sheets.</li>
                            <li>Terapkan filter untuk mencari entri nama ganda (Duplicate) dan hapus baris kosong (Data Cleansing).</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kumpulkan file spreadsheet hasil pembersihan data Anda ke folder kumpul tugas Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Apakah dampak utama dari konsep GIGO (Garbage In Garbage Out) pada pengolahan data riset?",
                    options: ["A. Data menjadi sangat aman", "B. Analisis data menghasilkan informasi yang salah/keliru untuk pengambilan keputusan", "C. Kecepatan memproses data meningkat"],
                    correct: "B",
                    explanation: "Tepat! GIGO berarti jika data masukan yang dimasukkan salah/sampah, maka kesimpulan/informasi keluaran yang dihasilkan juga akan salah."
                }
            },
            {
                id: "w9",
                weekLabel: "Minggu 9 (7-13 Sept)",
                title: "Minggu 9: Validasi Data Isian Formulir Jasa Desain",
                summary: "Mempelajari logika validasi format data untuk mencegah data eror di sisi sistem.",
                rabu: {
                    title: "A. Konsep Validasi vs Verifikasi Data",
                    content: `
                        <p>To avoid garbage data entering our systems, we must apply programmatic validation:</p>
                        <ul>
                            <li><strong>Validasi Data:</strong> Memastikan data yang diinput pengguna sesuai dengan format ketentuan (misalnya: Tanggal lahir harus dalam format DD-MM-YYYY, email harus memakai karakter @).</li>
                            <li><strong>Verifikasi Data:</strong> Cek faktanya untuk memastikan kebenaran data (misal: Cek portofolio asli vs portofolio tiruan).</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Membuat Formulir Validasi Sederhana",
                    content: `
                        <p><strong>LKPD-09: Desain & Logika Validasi Form Input Layanan Desain</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan formulir online (Google Forms / Jotform).</li>
                            <li>Buat form pemesanan desain logo dengan validasi khusus (misal: kolom No HP hanya menerima angka, kolom email harus berformat email valid).</li>
                            <li>Uji coba form tersebut dengan memasukkan input yang salah untuk menguji keandalan sistem penyaringan.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kirimkan kartu tautan Google Form yang sudah terpasang aturan validasi isian tersebut ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Proses memastikan data yang diketikkan diisi sesuai format aturan yang ditentukan disebut...",
                    options: ["A. Data Cleansing", "B. Validasi Data", "C. Verifikasi Data"],
                    correct: "B",
                    explanation: "Tepat! Validasi data mengecek kepatuhan format isian sebelum data tersebut disimpan ke dalam database."
                }
            },
            {
                id: "w10",
                weekLabel: "Minggu 10 (14-20 Sept)",
                title: "Minggu 10: Visualisasi Data ke Infografis Kreatif",
                summary: "Menyajikan hasil riset pengumpulan data ke dalam bagan grafis yang estetis.",
                rabu: {
                    title: "A. Representasi Data Visual",
                    content: `
                        <p>Data mentah berupa angka sulit dipahami klien. Tugas utama lulusan DKV di bidang Analisis Data adalah menerjemahkan data mentah menjadi representasi grafis (Visualisasi Data):</p>
                        <ul>
                            <li><strong>Bagan Batang / Bar Chart:</strong> Menunjukkan perbandingan kategori data.</li>
                            <li><strong>Diagram Lingkaran / Pie Chart:</strong> Menunjukkan distribusi persentase proporsi.</li>
                            <li><strong>Infografis Dashboard:</strong> Menggabungkan beberapa visualisasi data agar memudahkan klien mengambil keputusan promosi secara cepat.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Membuat Infografis Statistik Hasil Riset",
                    content: `
                        <p><strong>LKPD-10: Perancangan Infografis di Canva</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan data riset selera kemasan produk yang sudah bersih pada Minggu 8.</li>
                            <li>Buka Canva di browser lab, buat lembar kerja infografis.</li>
                            <li>Ubah angka tabel menjadi bentuk grafik visual yang menarik, tambahkan elemen desain grafis pendukung (ikon, warna harmonis).</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Ekspor hasil rancangan infografis menjadi file JPG/PDF beresolusi tinggi, kumpulkan di Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Diagram mana yang paling cocok untuk menampilkan kontribusi persentase dari sebuah variabel utuh?",
                    options: ["A. Line Chart (Grafik Garis)", "B. Pie Chart (Diagram Lingkaran)", "C. Scatter Plot"],
                    correct: "B",
                    explanation: "Tepat! Pie Chart membagi lingkaran utuh menjadi beberapa juring untuk menggambarkan proporsi persentase yang jelas."
                }
            },
            {
                id: "w11",
                weekLabel: "Minggu 11 (21-27 Sept)",
                title: "Minggu 11: Literasi Informasi & Teknik Membaca Lateral",
                summary: "Melatih penalaran kritis mendeteksi manipulasi gambar dan disinformasi visual siber.",
                rabu: {
                    title: "A. Era Disinformasi Visual & Membaca Lateral",
                    content: `
                        <p>Di era kecerdasan buatan (AI), manipulasi gambar (hoaks visual / deepfake) merajalela. Desainer DKV bertanggung jawab menjaga kredibilitas informasi.</p>
                        <ul>
                            <li><strong>Membaca Lateral (Lateral Reading):</strong> Strategi mengecek kebenaran informasi dengan cara keluar sejenak dari situs yang sedang dibaca untuk mencari pembanding dari situs periksa fakta yang kredibel.</li>
                            <li><strong>Ekosistem Periksa Fakta:</strong> Situs kolaboratif seperti cekfakta.com atau turnbackhoax.id.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Melacak Manipulasi Gambar (Reverse Image Search)",
                    content: `
                        <p><strong>LKPD-11: Uji Validitas Keaslian Gambar Digital</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan browser lab, buka situs Google Images atau TinEye.</li>
                            <li>Unggah file gambar viral yang mencurigakan (disediakan guru) ke fitur Reverse Image Search.</li>
                            <li>Lacak sumber orisinal gambar, tanggal publikasi pertama, dan bandingkan konteks beritanya menggunakan teknik membaca lateral.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Tulis laporan cek fakta singkat (memuat klaim, link penelusuran balik gambar, dan kesimpulan keaslian gambar), unggah dalam format PDF ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Bagaimanakah cara kerja strategi membaca lateral saat menemukan berita mencurigakan di situs web?",
                    options: [
                        "A. Membaca situs tersebut berulang kali dari atas ke bawah secara detail",
                        "B. Membuka tab browser baru untuk mencari kebenaran berita tersebut di situs periksa fakta lain yang terpercaya",
                        "C. Langsung mempercayainya jika tampilannya terlihat profesional"
                    ],
                    correct: "B",
                    explanation: "Benar! Membaca lateral berarti memverifikasi informasi secara paralel dengan mengecek ke berbagai sumber luar, bukan hanya terpaku pada satu situs."
                }
            }
        ],
        oktober: [
            {
                id: "w12",
                weekLabel: "Minggu 12 (28 Sept-4 Okt)",
                title: "Minggu 12: Evaluasi Tengah Semester (UTS) & Debugging Layout",
                summary: "Sesi ujian evaluasi penguasaan materi konseptual & perbaikan portofolio desain.",
                rabu: {
                    title: "A. Sesi Evaluasi Teori Portofolio (UTS)",
                    content: `
                        <p>Hari Rabu ini dialokasikan penuh untuk pengerjaan ujian tertulis online mengenai konsep dasar Berpikir Komputasional, Arsitektur Sistem Komputer, Jaringan, dan Analisis Data Kreatif yang telah dipelajari.</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Debugging File & Penyempurnaan Estetika (Refinement)",
                    content: `
                        <p><strong>Sesi Lab Ujian Praktik: Refinement Desain Portofolio</strong></p>
                        <p>Siswa diberikan waktu 4 JP penuh untuk merapikan link file portfolio, melakukan kompresi ukuran file gambar yang terlalu besar agar memenuhi standar performa web, dan menguji layout di berbagai resolusi layar monitor komputer lab.</p>
                        <div class="assignment-box">
                            <strong>Tugas UTS:</strong> Kumpulkan folder ZIP portofolio digital yang sudah rapi dan terkompresi secara optimal ke Google Classroom paling lambat hari Kamis pukul 17.00 WIB.
                        </div>
                    `
                },
                quiz: {
                    question: "Proses mencari, menemukan, dan memperbaiki kesalahan sistem atau galat pada berkas proyek digital disebut...",
                    options: ["A. Refinement", "B. Debugging", "C. Deployment"],
                    correct: "B",
                    explanation: "Tepat! Debugging adalah istilah teknis untuk melacak dan membuang galat (bug) agar proyek berjalan tanpa hambatan."
                }
            },
            {
                id: "w13",
                weekLabel: "Minggu 13 (5-11 Oktober)",
                title: "Minggu 13: Pengantar Creative Coding - Variabel & Tipe Data",
                summary: "Memasuki dunia pemrograman visual interaktif dengan pemahaman variabel dan tipe data.",
                rabu: {
                    title: "A. Logika Pemrograman & Sintaksis Dasar",
                    content: `
                        <p>Creative Coding adalah seni memadukan pemrograman dengan visual desain grafis. Di Fase E, kita mulai belajar menulis algoritma program sederhana menggunakan pseudocode yang dekat dengan bahasa pemrograman riil (seperti JavaScript atau Python):</p>
                        <ul>
                            <li><strong>Variabel:</strong> Wadah penyimpanan memori internal sementara untuk menampung nilai (misal: let warnaDesain = '#FF0000').</li>
                            <li><strong>Tipe Data:</strong> Jenis nilai data yang diolah program (String, Number, Boolean).</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Eksperimen Kode di Konsol Browser Lab",
                    content: `
                        <p><strong>LKPD-12: Menulis Variabel Pemrograman Visual Pertama</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka browser Google Chrome di Lab, tekan F12 lalu klik tab 'Console'.</li>
                            <li>Ketik kode deklarasi variabel dasar (seperti let namaDesainer = 'Budi'; let jumlahAset = 15;).</li>
                            <li>Gunakan perintah 'console.log()' untuk mencetak dan menampilkan nilai variabel ke layar.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Salin teks baris kode script konsol Anda dan lampirkan ke dalam Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Manakah tipe data yang tepat digunakan untuk menampung status tombol aktif atau nonaktif?",
                    options: ["A. String", "B. Number", "C. Boolean (True/False)"],
                    correct: "C",
                    explanation: "Benar! Tipe data Boolean hanya memiliki dua kemungkinan nilai (True atau False), sangat ideal untuk mendeteksi kondisi biner seperti tombol aktif/tidak."
                }
            },
            {
                id: "w14",
                weekLabel: "Minggu 14 (12-18 Oktober)",
                title: "Minggu 14: Logika Percabangan (If-Else) pada Interaksi Tombol",
                summary: "Mempelajari logika pengambilan keputusan program berdasarkan interaksi kursor pengguna.",
                rabu: {
                    title: "A. Struktur Kendali Percabangan (Kondisional)",
                    content: `
                        <p>Program interaktif harus responsif. Logika percabangan (If-Else) memungkinkan komputer mengeksekusi blok kode yang berbeda berdasarkan aksi dari pengguna:</p>
                        <ul>
                            <li><strong>Sintaksis If:</strong> 'Jika kondisi terpenuhi (Benar), jalankan aksi A'.</li>
                            <li><strong>Sintaksis Else:</strong> 'Jika kondisi tidak terpenuhi (Salah), jalankan aksi B'.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Coding Interaksi Tombol UI/UX",
                    content: `
                        <p><strong>LKPD-13: Membuat Script Logika Tombol Portfolio</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan platfrom editor code online (seperti Codepen.io).</li>
                            <li>Tulis script logika sederhana (seperti if hover == true { warnaTombol = 'biru' } else { warnaTombol = 'abu-abu' }).</li>
                            <li>Uji coba jalankan program dan amati perubahan warna tombol saat dilewati mouse.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kumpulkan link tautan hasil koding Codepen Anda ke penugasan Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Operator perbandingan manakah yang digunakan untuk memeriksa apakah dua nilai sama dalam pemrograman?",
                    options: ["A. =", "B. ==", "C. !="],
                    correct: "B",
                    explanation: "Tepat! Tanda tunggal (=) digunakan untuk pengisian nilai (assignment), sedangkan tanda ganda (==) digunakan untuk membandingkan kesamaan nilai."
                }
            },
            {
                id: "w15",
                weekLabel: "Minggu 15 (19-25 Oktober)",
                title: "Minggu 15: Otomatisasi Desain Grafis dengan Perulangan (Loops)",
                summary: "Mempelajari cara menggunakan perulangan (loops) untuk merender pola seni generatif.",
                rabu: {
                    title: "A. Konsep Perulangan (Loops - For & While)",
                    content: `
                        <p>Dalam DKV, kita sering membuat pola dekorasi geometris yang berulang (misal: ornamen batik digital / latar belakang mosaik). Menggambar manual ratusan kotak sangat melelahkan.</p>
                        <p><strong>Loops (Perulangan):</strong> Instruksi program untuk menjalankan blok kode tertentu secara berulang selama kondisi batas terpenuhi. Mempersingkat ribuan baris kode menjadi beberapa baris saja.</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Coding Pola Geometris Berulang",
                    content: `
                        <p><strong>LKPD-14: Merender Pola Seni Generatif Menggunakan JavaScript Loop</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka editor code online (p5.js web editor atau Codepen).</li>
                            <li>Gunakan fungsi perulangan 'for loop' untuk membuat 50 baris lingkaran berwarna-warni secara otomatis pada koordinat horizontal.</li>
                            <li>Ubah parameter batas perulangan untuk memperbanyak atau mengurangi jumlah objek lingkaran.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Salin hasil koding script perulangan for Anda dan upload hasil ekspor gambar pola seni generatif tersebut di Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Struktur loop manakah yang paling ideal digunakan jika jumlah pengulangan sudah diketahui secara pasti sejak awal?",
                    options: ["A. While Loop", "B. For Loop", "C. Do-While Loop"],
                    correct: "B",
                    explanation: "Benar! 'For loop' sangat cocok digunakan saat jumlah iterasi sudah diketahui secara pasti (misalnya dari indeks 1 sampai 100)."
                }
            },
            {
                id: "w16",
                weekLabel: "Minggu 16 (26 Okt-1 Nov)",
                title: "Minggu 16: Pengelolaan Galeri Gambar dengan Struktur Data Array",
                summary: "Mempelajari cara mengorganisasikan koleksi alamat file portofolio ke dalam Array.",
                rabu: {
                    title: "A. Penggunaan Array untuk Kumpulan Data Sejenis",
                    content: `
                        <p><strong>Array (Larik):</strong> Struktur data yang digunakan untuk menyimpan kumpulan nilai data sejenis dalam satu variabel berindeks.</p>
                        <p>Dalam aplikasi portofolio digital, semua nama file gambar atau URL gambar disimpan di dalam sebuah Array agar aplikasi dapat menampilkan dan menggeser gambar (slider) secara teratur lewat kontrol indeks.</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Coding Slider Gambar Portofolio",
                    content: `
                        <p><strong>LKPD-15: Pembuatan Slideshow Portofolio Berbasis Array</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan template file HTML/CSS/JS slider sederhana yang disediakan guru.</li>
                            <li>Tuliskan kumpulan nama file gambar Anda ke dalam array gambar (misal: let galeri = ['gambar1.png', 'gambar2.png', 'gambar3.png']).</li>
                            <li>Tambahkan event klik tombol agar indeks array bergeser maju/mundur saat ditekan.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Simpan file latihan tersebut, jalankan pengujian di browser lab, lalu unggah link folder proyek koding Anda di Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Jika dideklarasikan let daftarKarya = ['logo.png', 'poster.png', 'banner.png'], manakah file yang berada di indeks ke-0?",
                    options: ["A. logo.png", "B. poster.png", "C. banner.png"],
                    correct: "A",
                    explanation: "Tepat! Indeks struktur data Array dalam bahasa pemrograman modern selalu dimulai dari angka 0, sehingga elemen pertama berada di indeks 0."
                }
            }
        ],
        november: [
            {
                id: "w17",
                weekLabel: "Minggu 17 (2-8 November)",
                title: "Minggu 17: Integrasi Dokumen & Desain Laporan Kerja Kreatif",
                summary: "Menyusun dokumen proposal portofolio multimedia interaktif yang rapi dan terstruktur.",
                rabu: {
                    title: "A. Teknik Integrasi Konten Aplikasi Perkantoran",
                    content: `
                        <p>Lulusan DKV harus mampu menyusun proposal penawaran harga desain yang terlihat profesional secara sistematis.</p>
                        <p><strong>Integrasi Konten TIK:</strong> Menggabungkan tabel perhitungan harga dari spreadsheet ke dalam dokumen proposal, serta membuat presentasi pitching klien yang interaktif.</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Membuat Proposal Quotation Desain",
                    content: `
                        <p><strong>LKPD-16: Penyusunan Laporan Penawaran Proyek di MS Word/Google Docs</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka Google Docs/MS Word. Buatlah draf proposal penawaran jasa desain logo untuk klien.</li>
                            <li>Impor bagan grafik riset dari Google Sheets yang telah dibuat di bulan September.</li>
                            <li>Gunakan fitur Mail Merge untuk mengirimkan surat penawaran otomatis ke 5 nama alamat klien yang berbeda secara otomatis.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kirimkan file dokumen proposal penawaran penulisan surat otomatis tersebut ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Fitur pada pengolah kata yang digunakan untuk membuat dokumen/surat massal dengan data penerima dari spreadsheet secara dinamis disebut...",
                    options: ["A. Page Break", "B. Mail Merge", "C. Track Changes"],
                    correct: "B",
                    explanation: "Tepat! Mail Merge menggabungkan draf surat utama dengan daftar database penerima dari file lembar kerja secara massal dan efisien."
                }
            },
            {
                id: "w18",
                weekLabel: "Minggu 18 (9-15 November)",
                title: "Minggu 18: Etika Hak Cipta (HAKI) & Lisensi Creative Commons",
                summary: "Memahami regulasi perlindungan hukum hasil karya cipta desainer.",
                rabu: {
                    title: "A. Regulasi HAKI di Indonesia & Lisensi Bebas",
                    content: `
                        <p>Sebagai desainer, Anda harus mematuhi UU Hak Cipta No 28 Tahun 2014 untuk melindungi karya orisinal Anda dan menghindari penjiplakan ilegal karya orang lain.</p>
                        <ul>
                            <li><strong>HAKI (Hak atas Kekayaan Intelektual):</strong> Perlindungan hukum otomatis (deklaratif) begitu karya diwujudkan dalam bentuk nyata.</li>
                            <li><strong>Creative Commons License (CCL):</strong> Lisensi alternatif yang memudahkan pembagian aset digital secara legal dengan aturan atribusi tertentu.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Menyusun Lembar Atribusi & Pencarian Lisensi CCL",
                    content: `
                        <p><strong>LKPD-17: Audit Lisensi Aset Pendukung Desain</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Carilah 3 aset pendukung desain (foto, font, lagu latar) di internet berlisensi Creative Commons.</li>
                            <li>Identifikasi jenis lisensi CCL yang disyaratkan (misal: CC-BY, CC-NC, CC-ND).</li>
                            <li>Buat lembar dokumen Atribusi Kredit secara jujur dan letakkan di dalam file portofolio Anda.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Upload lembar daftar atribusi sumber aset berlisensi tersebut dalam format PDF ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Jenis lisensi Creative Commons manakah yang melarang aset desain digunakan untuk tujuan komersial/bisnis?",
                    options: ["A. CC-BY (Attribution)", "B. CC-NC (Non-Commercial)", "C. CC-ND (No-Derivatives)"],
                    correct: "B",
                    explanation: "Benar! CC-NC (Non-Commercial) melarang keras penggunaan aset tersebut untuk tujuan mendulang keuntungan atau komersial."
                }
            },
            {
                id: "w19",
                weekLabel: "Minggu 19 (16-22 November)",
                title: "Minggu 19: Digitalisasi Budaya Indonesia Melalui Karya DKV",
                summary: "Mempelajari peran digitalisasi untuk melestarikan kebudayaan lokal.",
                rabu: {
                    title: "A. Konsep Digitalisasi Budaya Nusantara",
                    content: `
                        <p>Informatika berperan besar sebagai medium pelestarian budaya. Kita mempelajari bagaimana mendigitalisasi motif tradisional Indonesia (seperti ragam hias batik, ukiran Toraja, dsb.) ke dalam format aset digital vektor yang presisi.</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pembuatan Vektor Batik Nusantara",
                    content: `
                        <p><strong>LKPD-18: Menggambar Ulang Ragam Hias Tradisional Lokal</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Gunakan software desain vektor (Adobe Illustrator / CorelDraw / Inkscape) di lab.</li>
                            <li>Impor foto ornamen ukiran atau batik daerah setempat yang disediakan guru.</li>
                            <li>Lakukan teknik 'Pen Tool Tracing' untuk membuat pola digital vektor yang rapi, simetris, dan bersih.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Ekspor hasil tracing vektor Anda dalam format SVG (Scalable Vector Graphics), upload ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Format file gambar manakah yang berbasis koordinat matematika sehingga tidak pecah saat diperbesar?",
                    options: ["A. JPEG (Raster)", "B. SVG (Vector)", "C. GIF"],
                    correct: "B",
                    explanation: "Benar! SVG adalah format grafik vektor berbasis XML yang tetap mempertahankan kejernihan garis visual pada ukuran resolusi layar manapun."
                }
            },
            {
                id: "w20",
                weekLabel: "Minggu 20 (23-29 November)",
                title: "Minggu 20: Kolaborasi Dunia Maya & Media Diseminasi Konten",
                summary: "Mempelajari teknik berkolaborasi jarak jauh dalam proyek kerja kelompok tim DKV.",
                rabu: {
                    title: "A. Kolaborasi Virtual & Sistem Penyimpanan Cloud",
                    content: `
                        <p>Industri DKV saat ini beroperasi secara global. Kolaborasi jarak jauh (Remote Working) membutuhkan pemanfaatan platform virtual:</p>
                        <ul>
                            <li><strong>Cloud Storage (Penyimpanan Awan):</strong> Berbagi file real-time menggunakan Google Drive atau Dropbox.</li>
                            <li><strong>Version Control Basics:</strong> Memahami pelacakan revisi file agar tidak menimpa pekerjaan rekan setim (v1, v2, final).</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Setup Folder Kerja Bersama di Google Drive",
                    content: `
                        <p><strong>LKPD-19: Simulasi Pengelolaan Aset Tim Kolaboratif</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Bentuk kelompok kerja desain beranggotakan 3 orang.</li>
                            <li>Gunakan Google Drive, buat 1 folder utama proyek kelompok. Atur hak akses folder agar bisa diedit oleh seluruh anggota kelompok.</li>
                            <li>Buat subfolder: /Aset_Mentah, /Draf_Revisi, /File_Final untuk manajemen aset terstruktur.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Kumpulkan screenshot struktur folder Google Drive kelompok Anda beserta link folder publiknya ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Aktivitas menyebarluaskan gagasan atau karya digital ke ruang publik virtual secara luas disebut...",
                    options: ["A. Data Cleansing", "B. Diseminasi Konten", "C. Debugging"],
                    correct: "B",
                    explanation: "Tepat! Diseminasi konten adalah proses penyebarluasan karya digital agar dapat dinikmati dan diakses oleh masyarakat umum."
                }
            }
        ],
        desember: [
            {
                id: "w21",
                weekLabel: "Minggu 21 (30 Nov-6 Des)",
                title: "Minggu 21: Perencanaan Proyek PLB (Praktik Lintas Bidang)",
                summary: "Memulai proyek kolaboratif pemecahan masalah nyata menggunakan rekayasa produk digital.",
                rabu: {
                    title: "A. Konsep Praktik Lintas Bidang (PLB)",
                    content: `
                        <p>Praktik Lintas Bidang (PLB) melatih siswa memecahkan masalah nyata di lingkungan sekitar dengan memanfaatkan ilmu informatika dan keterampilan visual DKV secara holistik.</p>
                        <p><strong>Tahapan Perencanaan Proyek PLB:</strong></p>
                        <ol>
                            <li>Mengidentifikasi masalah riil (misal: kurangnya media informasi edukasi sampah sekolah).</li>
                            <li>Menentukan solusi (membuat e-katalog visual / e-poster interaktif).</li>
                            <li>Menyusun pembagian peran tim pengembang.</li>
                        </ol>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pembuatan Proposal Proyek PLB",
                    content: `
                        <p><strong>LKPD-20: Penyusunan Lembar Perencanaan Proyek Tim</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Bersama tim Anda, diskusikan masalah lingkungan sekolah yang ingin dipecahkan.</li>
                            <li>Tuliskan rencana pengerjaan, pembagian tugas (siapa mendesain, siapa menyusun data, siapa memprogram/uji), dan jadwal tenggat waktu.</li>
                            <li>Gunakan Canva untuk menyusun draf proposal proyek yang estetis.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Unggah file dokumen proposal perencanaan proyek PLB kelompok Anda ke kumpul tugas Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Tahap awal terstruktur dalam proses rekayasa produk sebelum melangkah ke tahap desain visual adalah...",
                    options: ["A. Pengembangan (Development)", "B. Perencanaan (Planning / Analysis)", "C. Peluncuran (Deployment)"],
                    correct: "B",
                    explanation: "Tepat! Siklus rekayasa selalu diawali dengan perencanaan dan analisis kebutuhan sistem agar arah pengerjaan proyek terarah dengan baik."
                }
            },
            {
                id: "w22",
                weekLabel: "Minggu 22 (7-13 Des)",
                title: "Minggu 22: Perakitan Aset Digital (Creative Assembly PLB)",
                summary: "Sesi lab intensif merakit seluruh aset gambar, teks, dan program menjadi satu produk terpadu.",
                rabu: {
                    title: "A. Integrasi Antar Elemen Informatika",
                    content: `
                        <p>Pada sesi teori Rabu ini, kita fokus mengkaji bagaimana integrasi aset multimedia, logika pemrograman, dan data yang terkumpul dapat disatukan dalam layout interaktif agar ramah bagi pengguna akhir (User Experience).</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Koding Intensif & Perakitan Portofolio Kelompok",
                    content: `
                        <p><strong>LKPD-21: Perakitan Komponen Media Interaktif Kelompok</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Buka folder penyimpanan cloud kelompok Anda di komputer lab.</li>
                            <li>Satukan semua aset gambar vektor, teks narasi riset, dan logika script interaktif JavaScript yang sudah diuji ke dalam satu halaman template e-katalog visual.</li>
                            <li>Pastikan tata letak desain mematuhi prinsip proporsi keselarasan UI/UX yang ergonomis.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas:</strong> Pastikan seluruh file proyek diletakkan pada folder bersama dan kirimkan laporan kemajuan pengerjaan proyek tim Anda ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Prinsip antarmuka yang mengutamakan keselarasan warna, bentuk elemen, dan tipografi agar tidak membingungkan mata pengguna disebut...",
                    options: ["A. Proportion (Proporsi)", "B. Harmony (Keselarasan)", "C. Contrast"],
                    correct: "B",
                    explanation: "Benar! Harmony (Keselarasan) menjamin elemen visual saling melengkapi dan selaras di semua halaman produk media."
                }
            },
            {
                id: "w23",
                weekLabel: "Minggu 23 (14-20 Des)",
                title: "Minggu 23: Pengujian Fungsionalitas & Deployment Web",
                summary: "Menguji kelancaran interaksi tombol navigasi menggunakan metode Black-Box Testing dan mempublikasikannya secara online.",
                rabu: {
                    title: "A. Metode Pengujian Black-Box & Publikasi Server",
                    content: `
                        <p>Sebelum produk digital diserahkan ke klien, wajib melalui uji kelayakan:</p>
                        <ul>
                            <li><strong>Black-Box Testing:</strong> Pengujian fungsionalitas tombol navigasi dan form input dari sisi pengguna luar tanpa harus mengoreksi jeroan kode programnya.</li>
                            <li><strong>Deployment (Peluncuran):</strong> Mengunggah berkas portofolio ke server hosting agar dapat diakses dari manapun di seluruh dunia menggunakan jaringan internet.</li>
                        </ul>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Pengujian Silang & Deploy Portofolio Online",
                    content: `
                        <p><strong>LKPD-22: Sesi Pengujian Black-Box & Publikasi Proyek Akhir</strong></p>
                        <p><strong>Instruksi Praktik:</strong></p>
                        <ol>
                            <li>Lakukan pengujian silang: uji coba portofolio milik kelompok lain secara objektif.</li>
                            <li>Isi tabel laporan 'Bug Log' jika Anda menemukan tombol navigasi mati atau gambar yang gagal dimuat.</li>
                            <li>Unggah folder web portofolio final kelompok Anda ke platform hosting gratis (seperti GitHub Pages atau Netlify) hingga mendapatkan alamat URL web online yang aktif.</li>
                        </ol>
                        <div class="assignment-box">
                            <strong>Tugas & Kriteria Penilaian:</strong> Kumpulkan file draf laporan pengujian kelompok Anda beserta alamat tautan URL website online yang aktif ke Google Classroom.
                        </div>
                    `
                },
                quiz: {
                    question: "Uji fungsionalitas program dengan cara menekan langsung tombol di layar tanpa menganalisis baris kode disebut...",
                    options: ["A. White-Box Testing", "B. Black-Box Testing", "C. Unit Testing"],
                    correct: "B",
                    explanation: "Tepat! Black-box testing fokus menguji masukan dan keluaran antarmuka visual apakah sudah berjalan sesuai harapan desainer."
                }
            },
            {
                id: "w24",
                weekLabel: "Minggu 24 (21-27 Des)",
                title: "Minggu 24: UAS - Gelar Karya (Exhibition) & Refleksi Akhir Semester",
                summary: "Pameran hasil karya portofolio digital kolaboratif tim X DKV dan sesi refleksi pencapaian belajar.",
                rabu: {
                    title: "A. Persiapan Presentasi & Gelar Karya (Exhibition)",
                    content: `
                        <p>Selamat! Anda telah mencapai akhir semester. Hari Rabu ini dialokasikan penuh untuk mempersiapkan materi pitching presentasi proyek PLB kelompok di depan kelas.</p>
                    `
                },
                kamis: {
                    title: "B. Praktik Lab: Sesi Presentasi Hasil Karya Portofolio DKV Online (UAS)",
                    content: `
                        <p><strong>Sesi Penilaian Uji Unjuk Kerja Akhir Semester Ganjil</strong></p>
                        <p>Setiap kelompok mempresentasikan website portofolio digitalnya yang sudah online di projector lab komputer, memamerkan hasil pengumpulan data visual, rancangan flowchart, dan kode interaktif JavaScript yang dibuat.</p>
                        <div class="assignment-box">
                            <strong>Lembar Refleksi Akhir:</strong> Isi kuesioner evaluasi diri mengenai kompetensi informatika yang paling Anda kuasai dan hal-hal yang perlu ditingkatkan untuk semester depan.
                        </div>
                    `
                },
                quiz: {
                    question: "Siklus akhir terstruktur dari proses rekayasa produk setelah peluncuran awal guna memperbaiki bug berdasarkan umpan balik pengguna disebut...",
                    options: ["A. Planning", "B. Refinement (Penyempurnaan)", "C. Analysis"],
                    correct: "B",
                    explanation: "Benar! Refinement adalah proses berulang yang dilakukan untuk memperbaharui fitur produk demi kepuasan pengguna akhir."
                }
            }
        ]
    };

    function switchMonth(evt, monthKey) {
        // Toggle Month Active Tab Button
        const monthButtons = document.querySelectorAll(".month-btn");
        monthButtons.forEach(btn => btn.classList.remove("active"));
        evt.currentTarget.classList.add("active");

        // Populate Week Sidebar
        const weekSidebar = document.getElementById("week-sidebar");
        weekSidebar.innerHTML = "";

        const weeks = curriculumData[monthKey];
        weeks.forEach((week, index) => {
            const btn = document.createElement("button");
            btn.className = "week-btn";
            if (index === 0) btn.className += " active";
            btn.innerText = week.weekLabel;
            btn.onclick = (e) => switchWeek(e, monthKey, index);
            weekSidebar.appendChild(btn);
        });

        // Trigger loading the first week of this month
        loadWeekContent(monthKey, 0);
    }

    function switchWeek(evt, monthKey, weekIndex) {
        const weekButtons = document.querySelectorAll(".week-btn");
        weekButtons.forEach(btn => btn.classList.remove("active"));
        evt.currentTarget.classList.add("active");

        loadWeekContent(monthKey, weekIndex);
    }

    function loadWeekContent(monthKey, weekIndex) {
        const week = curriculumData[monthKey][weekIndex];
        const contentArea = document.getElementById("content-area");
        
        contentArea.innerHTML = `
            <div class="week-content active">
                <h2> ${week.title}</h2>
                <p>${week.summary}</p>
                
                <div class="day-grid">
                    <!-- Wednesday Card -->
                    <div class="day-card wednesday">
                        <div>
                            <span class="badge-day">Kelas Teori (4 JP)</span>
                            <h3> ${week.rabu.title}</h3>
                            ${week.rabu.content}
                        </div>
                    </div>

                    <!-- Thursday Card -->
                    <div class="day-card thursday">
                        <div>
                            <span class="badge-day">Praktik Lab (4 JP)</span>
                            <h3> ${week.kamis.title}</h3>
                            ${week.kamis.content}
                        </div>
                    </div>
                </div>

                <!-- Weekly Quiz -->
                <div class="quiz-section">
                    <h4> Kuis Cepat Pemahaman Mandiri</h4>
                    <div class="question">${week.quiz.question}</div>
                    <ul class="options-list">
                        ${week.quiz.options.map((opt, i) => {
                            const letter = opt.substring(0, 1);
                            return `
                                <li>
                                    <label class="option-label">
                                        <input type="radio" name="wq" value="\${letter}"> \${opt}
                                    </label>
                                </li>
                            `;
                        }).join("")}
                    </ul>
                    <button class="btn" onclick="checkWeekQuiz('\${week.quiz.correct}', '\${escapeHtml(week.quiz.explanation)}')">Kirim Jawaban</button>
                    <div id="quiz-feedback" class="feedback"></div>
                </div>
            </div>
        `;
    }

    function escapeHtml(text) {
        return text.replace(/'/g, "\'");
    }

    function checkWeekQuiz(correctVal, explanationText) {
        const selected = document.querySelector('input[name="wq"]:checked');
        const feedback = document.getElementById("quiz-feedback");

        if (!selected) {
            feedback.innerHTML = "Harap pilih salah satu opsi jawaban terlebih dahulu!";
            feedback.className = "feedback incorrect";
            return;
        }

        if (selected.value === correctVal) {
            feedback.innerHTML = "✔ " + explanationText;
            feedback.className = "feedback correct";
        } else {
            feedback.innerHTML = "✘ Jawaban Anda kurang tepat. Silakan baca ulang materi teori atau praktik di atas!";
            feedback.className = "feedback incorrect";
        }
    }

    // Initialize with Juli
    document.addEventListener("DOMContentLoaded", () => {
        const firstMonthBtn = document.querySelector(".month-btn");
        if (firstMonthBtn) {
            const event = { currentTarget: firstMonthBtn };
            switchMonth(event, 'juli');
        }
    });
