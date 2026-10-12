'use strict';

const MONTHS = [
  {
    "key": "juli",
    "label": "Juli",
    "range": "M1–M3"
  },
  {
    "key": "agustus",
    "label": "Agustus",
    "range": "M4–M7"
  },
  {
    "key": "september",
    "label": "September",
    "range": "M8–M11"
  },
  {
    "key": "oktober",
    "label": "Oktober",
    "range": "M12–M16"
  },
  {
    "key": "november",
    "label": "November",
    "range": "M17–M20"
  },
  {
    "key": "desember",
    "label": "Desember",
    "range": "M21–M24"
  }
];
const WEEKS = [
  {
    "id": "w1",
    "month": "juli",
    "number": 1,
    "weekLabel": "Minggu 1 (13–19 Juli)",
    "dates": "13–19 Juli 2026",
    "chapter": "Bab 1 · Informatika Sekarang dan Masa Depan",
    "pages": "hlm. 4–10",
    "title": "Informatika dan Literasi Digital",
    "summary": "Mengenal peran Informatika dalam kehidupan sehari-hari dan memahami bahwa kecakapan digital mencakup keterampilan, budaya, etika, serta keamanan digital.",
    "goals": [
      "Menjelaskan peran Informatika dalam kehidupan sehari-hari.",
      "Membedakan kecakapan bermedia digital, budaya digital, etika digital, dan keamanan digital.",
      "Menentukan kebiasaan aman dan bertanggung jawab saat menggunakan layanan digital."
    ],
    "concepts": [
      "Informatika mempelajari pengolahan data dan informasi dengan bantuan sistem komputasi.",
      "Literasi digital bukan hanya kemampuan menggunakan perangkat, tetapi juga kemampuan memahami informasi, berperilaku etis, dan menjaga keamanan.",
      "Jejak digital dan informasi pribadi perlu dikelola secara bijaksana."
    ],
    "activity": [
      "Audit kebiasaan digital: layanan yang digunakan untuk belajar, berbagi file, dan berkomunikasi.",
      "Diskusikan contoh perilaku aman dan tidak aman ketika mengikuti pertemuan daring atau mengirim karya digital.",
      "Susun 5 aturan kelas untuk menjaga etika, privasi, dan keamanan digital."
    ],
    "output": "Daftar aturan atau infografis mini tentang literasi digital untuk siswa DKV.",
    "quiz": {
      "question": "Manakah contoh penerapan etika digital yang tepat?",
      "options": [
        "Menyebarkan tangkapan layar percakapan pribadi tanpa izin",
        "Memeriksa informasi dan menghormati privasi orang lain",
        "Menggunakan kata sandi yang sama untuk semua akun",
        "Mengunggah karya orang lain seolah-olah milik sendiri"
      ],
      "correct": 1,
      "explanation": "Etika digital mencakup sikap bertanggung jawab, menghormati privasi, dan tidak menyalahgunakan karya maupun informasi orang lain."
    }
  },
  {
    "id": "w2",
    "month": "juli",
    "number": 2,
    "weekLabel": "Minggu 2 (20–26 Juli)",
    "dates": "20–26 Juli 2026",
    "chapter": "Bab 1 · Informatika Sekarang dan Masa Depan",
    "pages": "hlm. 11–13",
    "title": "Revolusi Industri 4.0 dan Internet of Things",
    "summary": "Mengkaji perubahan teknologi pada Revolusi Industri 4.0 dan konsep Internet of Things (IoT), yaitu keterhubungan perangkat melalui jaringan untuk bertukar data dan menjalankan fungsi tertentu.",
    "goals": [
      "Mengidentifikasi contoh penerapan teknologi pada Revolusi Industri 4.0.",
      "Menjelaskan peran sensor, aktuator, perangkat, dan jaringan dalam IoT.",
      "Menganalisis manfaat serta risiko penggunaan perangkat yang saling terhubung."
    ],
    "concepts": [
      "Revolusi Industri 4.0 berkaitan dengan pemanfaatan teknologi digital, otomasi, data, dan konektivitas.",
      "IoT memungkinkan perangkat mengumpulkan atau bertukar data melalui jaringan.",
      "Penerapan IoT perlu mempertimbangkan keandalan perangkat, privasi, dan keamanan."
    ],
    "activity": [
      "Pilih satu contoh IoT di rumah, sekolah, atau studio kreatif.",
      "Buat diagram sederhana yang menunjukkan perangkat, sensor, jaringan, data, dan tindakan yang dihasilkan.",
      "Catat satu manfaat dan satu risiko dari sistem tersebut."
    ],
    "output": "Diagram alur IoT beserta analisis manfaat dan risikonya.",
    "quiz": {
      "question": "Unsur yang paling menggambarkan Internet of Things adalah …",
      "options": [
        "Perangkat bekerja tanpa mengumpulkan data apa pun",
        "Perangkat terhubung dan dapat bertukar data melalui jaringan",
        "Semua pekerjaan dilakukan secara manual",
        "Komputer hanya digunakan untuk mengetik dokumen"
      ],
      "correct": 1,
      "explanation": "IoT menghubungkan perangkat dengan sensor atau komponen lain melalui jaringan agar data dapat dikumpulkan dan dipertukarkan."
    }
  },
  {
    "id": "w3",
    "month": "juli",
    "number": 3,
    "weekLabel": "Minggu 3 (27 Juli–2 Agustus)",
    "dates": "27 Juli–2 Agustus 2026",
    "chapter": "Bab 1 · Informatika Sekarang dan Masa Depan",
    "pages": "hlm. 14–22",
    "title": "Big Data, Artificial Intelligence, dan Cloud Computing",
    "summary": "Mengenali penggunaan data berukuran besar, kecerdasan artifisial, dan komputasi awan beserta peluang, keterbatasan, dan tanggung jawab penggunaannya.",
    "goals": [
      "Menjelaskan peran Big Data dalam analisis dan pengambilan keputusan.",
      "Memberi contoh pemanfaatan Artificial Intelligence (AI) secara kritis.",
      "Membedakan layanan cloud berdasarkan fungsi umumnya."
    ],
    "concepts": [
      "Big Data membantu mengolah kumpulan data besar untuk menemukan pola dan mendukung keputusan.",
      "AI dapat membantu tugas tertentu, tetapi hasilnya tetap perlu diperiksa manusia.",
      "Cloud computing menyediakan layanan komputasi, aplikasi, atau penyimpanan melalui jaringan; buku mengenalkan model SaaS, IaaS, dan PaaS."
    ],
    "activity": [
      "Pilih satu contoh AI atau layanan cloud yang relevan untuk kegiatan DKV.",
      "Buat tabel berisi fungsi, data yang digunakan, manfaat, risiko, dan hal yang perlu diperiksa.",
      "Presentasikan rekomendasi penggunaan yang bertanggung jawab."
    ],
    "output": "Tabel analisis teknologi digital untuk kebutuhan pembelajaran atau produksi DKV.",
    "quiz": {
      "question": "Pernyataan yang paling tepat tentang cloud computing adalah …",
      "options": [
        "Layanan komputasi yang hanya bisa digunakan tanpa jaringan",
        "Pemanfaatan layanan komputasi melalui jaringan, misalnya aplikasi atau penyimpanan",
        "Teknik mengganti seluruh keputusan manusia dengan mesin",
        "Cara menyimpan data hanya di atas kertas"
      ],
      "correct": 1,
      "explanation": "Cloud computing memungkinkan penggunaan sumber daya dan layanan komputasi melalui jaringan, sesuai jenis layanan dan hak aksesnya."
    }
  },
  {
    "id": "w4",
    "month": "agustus",
    "number": 4,
    "weekLabel": "Minggu 4 (3–9 Agustus)",
    "dates": "3–9 Agustus 2026",
    "chapter": "Bab 2 · Sistem Komputer",
    "pages": "hlm. 23–28",
    "title": "Sistem Komputer dan Single Board Computer",
    "summary": "Memahami sistem komputer dan mengenali Single Board Computer (SBC), termasuk perbandingannya dengan komputer pribadi, control board, dan smartphone sebagaimana dibahas dalam buku.",
    "goals": [
      "Mengidentifikasi komponen dan fungsi umum sistem komputer.",
      "Menjelaskan karakteristik Single Board Computer.",
      "Membandingkan beberapa jenis perangkat berdasarkan fungsi dan komponennya."
    ],
    "concepts": [
      "SBC mengintegrasikan komponen komputasi dalam satu papan sirkuit.",
      "Jenis perangkat memiliki karakteristik, kemampuan I/O, penyimpanan, dan konektivitas yang berbeda.",
      "Pemilihan perangkat sebaiknya disesuaikan dengan kebutuhan proyek."
    ],
    "activity": [
      "Amati gambar atau spesifikasi perangkat SBC yang tersedia.",
      "Buat tabel perbandingan SBC, PC, smartphone, dan control board berdasarkan fungsi, port, dan penggunaan.",
      "Pilih perangkat paling sesuai untuk sebuah proyek interaktif sederhana dan jelaskan alasannya."
    ],
    "output": "Tabel perbandingan perangkat komputer dan rekomendasi penggunaannya.",
    "quiz": {
      "question": "Ciri umum Single Board Computer (SBC) adalah …",
      "options": [
        "Semua komponennya harus berada pada beberapa komputer terpisah",
        "Komponen utama komputasinya terintegrasi pada satu papan",
        "Hanya dapat dipakai untuk menampilkan gambar cetak",
        "Tidak mempunyai komponen input atau output"
      ],
      "correct": 1,
      "explanation": "SBC mengintegrasikan komponen-komponen penting komputer pada satu papan sirkuit."
    }
  },
  {
    "id": "w5",
    "month": "agustus",
    "number": 5,
    "weekLabel": "Minggu 5 (10–16 Agustus)",
    "dates": "10–16 Agustus 2026",
    "chapter": "Bab 2 · Sistem Komputer",
    "pages": "hlm. 27–32",
    "title": "Single Board Controller dan Pengenalan Arduino",
    "summary": "Membedakan komputer papan tunggal dan pengendali papan tunggal serta mengenali Arduino sebagai platform untuk membuat sistem yang membaca masukan dan mengendalikan keluaran.",
    "goals": [
      "Menjelaskan fungsi single board controller.",
      "Mengenali peran papan Arduino dalam proyek kendali.",
      "Memahami langkah awal menyiapkan lingkungan kerja Arduino IDE."
    ],
    "concepts": [
      "Single board controller umumnya menggunakan mikrokontroler untuk membaca input dan mengendalikan output.",
      "Arduino dapat digunakan untuk mengolah data sensor dan mengendalikan komponen seperti LED atau motor.",
      "IDE menyediakan lingkungan untuk menulis, memeriksa, dan mengunggah program."
    ],
    "activity": [
      "Identifikasi bagian utama papan Arduino pada gambar atau perangkat yang tersedia.",
      "Amati tampilan Arduino IDE dan catat fungsi menu yang diperlukan untuk membuka, memeriksa, dan mengunggah sketch.",
      "Buat diagram input–proses–output untuk proyek kendali sederhana."
    ],
    "output": "Diagram blok proyek Arduino dan catatan fungsi komponen utama.",
    "quiz": {
      "question": "Fungsi utama single board controller pada sebuah proyek adalah …",
      "options": [
        "Mengendalikan perangkat berdasarkan program dan sinyal input",
        "Menggantikan fungsi seluruh jaringan internet",
        "Mencetak dokumen tanpa perangkat lain",
        "Menyimpan seluruh file multimedia tanpa batas"
      ],
      "correct": 0,
      "explanation": "Pengendali membaca input, memprosesnya sesuai program, lalu mengatur output atau aktuator."
    }
  },
  {
    "id": "w6",
    "month": "agustus",
    "number": 6,
    "weekLabel": "Minggu 6 (17–23 Agustus)",
    "dates": "17–23 Agustus 2026",
    "chapter": "Bab 2 · Sistem Komputer",
    "pages": "hlm. 33–36",
    "title": "Komponen Pendukung, Input/Output, dan Sensor",
    "summary": "Mengenali komponen pendukung rangkaian Arduino seperti breadboard, baterai, LED, resistor, kabel jumper, perangkat I/O, dan modul sensor.",
    "goals": [
      "Menjelaskan fungsi komponen dasar rangkaian.",
      "Membedakan perangkat input dan output.",
      "Menghubungkan pemilihan komponen dengan tujuan proyek."
    ],
    "concepts": [
      "Breadboard membantu merangkai prototipe tanpa menyolder.",
      "Resistor digunakan untuk membatasi arus pada rangkaian sesuai rancangan.",
      "Sensor memberikan masukan, sedangkan perangkat output atau aktuator memberi respons."
    ],
    "activity": [
      "Rancang diagram rangkaian LED sederhana dengan resistor, papan pengendali, sumber daya, dan kabel penghubung.",
      "Buat daftar komponen yang dibutuhkan untuk proyek dengan sensor cahaya atau sensor suhu.",
      "Jelaskan alur input–proses–output pada rancangan tersebut."
    ],
    "output": "Diagram rangkaian dan daftar komponen beserta fungsinya.",
    "quiz": {
      "question": "Apa fungsi resistor dalam rangkaian LED?",
      "options": [
        "Membatasi arus agar LED dan rangkaian lebih terlindungi",
        "Mengubah semua input analog menjadi gambar",
        "Menghubungkan perangkat ke media sosial",
        "Menyimpan program secara daring"
      ],
      "correct": 0,
      "explanation": "Resistor dipilih sesuai kebutuhan rangkaian untuk membatasi arus; nilainya harus diperhitungkan dengan benar."
    }
  },
  {
    "id": "w7",
    "month": "agustus",
    "number": 7,
    "weekLabel": "Minggu 7 (24–30 Agustus)",
    "dates": "24–30 Agustus 2026",
    "chapter": "Bab 2 · Sistem Komputer",
    "pages": "hlm. 37–48",
    "title": "Simulator Arduino dan Asesmen Sistem Komputer",
    "summary": "Menggunakan simulator untuk mempelajari rangkaian dan program sebelum mencoba perangkat fisik, kemudian merangkum pemahaman Bab 2.",
    "goals": [
      "Mengenali alternatif simulator Arduino yang dicantumkan dalam buku.",
      "Menjelaskan manfaat simulasi sebelum perakitan fisik.",
      "Menguji dan memperbaiki rancangan berdasarkan hasil simulasi."
    ],
    "concepts": [
      "Buku memperkenalkan beberapa simulator, termasuk Tinkercad Circuits, Wokwi, dan UnoArduSim.",
      "Simulasi membantu menguji logika rangkaian dan program tanpa selalu membutuhkan komponen fisik.",
      "Hasil simulasi tetap perlu ditafsirkan dan dibandingkan dengan kondisi perangkat nyata."
    ],
    "activity": [
      "Pilih simulator yang dapat diakses dan buat simulasi LED menyala atau berkedip sesuai fasilitasnya.",
      "Uji perubahan program dan catat perbedaan hasil.",
      "Simpan tangkapan layar rangkaian dan tuliskan simpulan pengujian."
    ],
    "output": "Tangkapan layar simulasi beserta catatan hasil pengujian.",
    "quiz": {
      "question": "Keuntungan utama memakai simulator Arduino adalah …",
      "options": [
        "Menghilangkan kebutuhan memahami rangkaian",
        "Menguji rancangan secara virtual sebelum atau tanpa merakit perangkat fisik",
        "Menjamin tidak akan ada kesalahan pada semua perangkat nyata",
        "Menggantikan dokumentasi proyek"
      ],
      "correct": 1,
      "explanation": "Simulator memungkinkan siswa menguji ide dan logika lebih awal, walaupun tidak selalu merepresentasikan semua kondisi perangkat nyata."
    }
  },
  {
    "id": "w8",
    "month": "september",
    "number": 8,
    "weekLabel": "Minggu 8 (31 Agustus–6 September)",
    "dates": "31 Agustus–6 September 2026",
    "chapter": "Bab 3 · Berpikir Komputasional dan Algoritma Pemrograman",
    "pages": "hlm. 49–58",
    "title": "Berpikir Komputasional dan Algoritma",
    "summary": "Menyusun cara penyelesaian masalah secara sistematis sebelum menulis program atau membangun solusi digital.",
    "goals": [
      "Menjelaskan tujuan berpikir komputasional.",
      "Menguraikan masalah menjadi bagian yang lebih kecil.",
      "Menuliskan urutan langkah penyelesaian yang jelas."
    ],
    "concepts": [
      "Berpikir komputasional membantu menyusun solusi yang dapat dijelaskan dan diuji.",
      "Masalah dapat diurai menjadi bagian kecil, pola dapat dikenali, dan detail yang relevan dapat difokuskan.",
      "Algoritma merupakan urutan langkah yang terstruktur untuk mencapai hasil tertentu."
    ],
    "activity": [
      "Pilih masalah sederhana dalam pengelolaan aset DKV, misalnya menamai atau menemukan file desain.",
      "Uraikan masalah menjadi langkah-langkah kecil dan susun algoritma dalam bentuk daftar atau diagram alir.",
      "Minta teman menelusuri algoritma untuk menemukan langkah yang kurang jelas."
    ],
    "output": "Algoritma atau diagram alir penyelesaian masalah yang dipilih.",
    "quiz": {
      "question": "Tujuan utama berpikir komputasional adalah …",
      "options": [
        "Membuat masalah tampak lebih rumit",
        "Menyusun pendekatan pemecahan masalah secara sistematis",
        "Menghindari pengujian solusi",
        "Menggantikan seluruh proses berpikir manusia"
      ],
      "correct": 1,
      "explanation": "Berpikir komputasional menyediakan pendekatan sistematis untuk menganalisis masalah dan merancang solusi."
    }
  },
  {
    "id": "w9",
    "month": "september",
    "number": 9,
    "weekLabel": "Minggu 9 (7–13 September)",
    "dates": "7–13 September 2026",
    "chapter": "Bab 3 · Berpikir Komputasional dan Algoritma Pemrograman",
    "pages": "hlm. 59–64",
    "title": "Aktivitas Pencarian, Logika, dan Analisis",
    "summary": "Mempraktikkan pendekatan berpikir komputasional melalui aktivitas aturan pencarian, penalaran logis, dan analisis masalah.",
    "goals": [
      "Menerapkan langkah pencarian secara runtut.",
      "Memeriksa hubungan logis antara kondisi dan hasil.",
      "Menyampaikan alasan pemilihan solusi."
    ],
    "concepts": [
      "Masalah pencarian lebih mudah diselesaikan jika kriteria dan urutan pemeriksaan jelas.",
      "Penalaran logis menghubungkan kondisi dengan kesimpulan.",
      "Analisis membantu membandingkan alternatif dan memeriksa apakah solusi memenuhi kebutuhan."
    ],
    "activity": [
      "Buat aturan pencarian aset dengan nama, jenis berkas, atau tanggal modifikasi.",
      "Susun beberapa kondisi logis untuk memfilter hasil pencarian.",
      "Uji aturan menggunakan contoh data dan perbaiki jika hasilnya tidak sesuai."
    ],
    "output": "Aturan pencarian beserta contoh data uji dan hasil analisis.",
    "quiz": {
      "question": "Langkah yang baik sebelum menjalankan pencarian data adalah …",
      "options": [
        "Menentukan kata kunci atau kriteria pencarian",
        "Menghapus semua data yang belum dibuka",
        "Memilih hasil secara acak",
        "Mengabaikan format dan struktur data"
      ],
      "correct": 0,
      "explanation": "Kriteria yang jelas membuat pencarian lebih terarah dan memudahkan pemeriksaan hasil."
    }
  },
  {
    "id": "w10",
    "month": "september",
    "number": 10,
    "weekLabel": "Minggu 10 (14–20 September)",
    "dates": "14–20 September 2026",
    "chapter": "Bab 3 · Berpikir Komputasional dan Algoritma Pemrograman",
    "pages": "hlm. 65–72",
    "title": "Struktur Program Arduino dan Sintaks",
    "summary": "Mengenali struktur sketch Arduino dan aturan penulisan program, termasuk tanda titik koma, kurung kurawal, direktif, variabel, dan operator.",
    "goals": [
      "Mengidentifikasi bagian utama sketch Arduino.",
      "Mengenali kegunaan tanda sintaks dan direktif yang dicontohkan dalam buku.",
      "Menjelaskan penggunaan variabel dan operator dalam program sederhana."
    ],
    "concepts": [
      "Struktur program Arduino menggunakan fungsi seperti setup() dan loop().",
      "Titik koma dan kurung kurawal membantu menentukan batas pernyataan serta blok kode.",
      "Variabel menyimpan nilai, sedangkan operator melakukan operasi matematis, perbandingan, logika, atau operasi lain sesuai jenisnya."
    ],
    "activity": [
      "Baca sketch contoh dan tandai setup(), loop(), deklarasi variabel, serta bagian yang memerlukan tanda baca sintaks.",
      "Periksa program pada IDE atau simulator dan catat pesan kesalahan yang muncul.",
      "Perbaiki kesalahan sintaks yang dapat diidentifikasi."
    ],
    "output": "Anotasi struktur sketch beserta daftar perbaikan kesalahan sintaks.",
    "quiz": {
      "question": "Fungsi setup() pada sketch Arduino umumnya dijalankan …",
      "options": [
        "Berulang terus selama program berjalan",
        "Satu kali saat program mulai dijalankan atau papan di-reset",
        "Hanya ketika sensor cahaya aktif",
        "Setelah setiap karakter diketik"
      ],
      "correct": 1,
      "explanation": "setup() digunakan untuk inisialisasi dan dijalankan satu kali saat program mulai atau setelah reset; loop() kemudian berulang."
    }
  },
  {
    "id": "w11",
    "month": "september",
    "number": 11,
    "weekLabel": "Minggu 11 (21–27 September)",
    "dates": "21–27 September 2026",
    "chapter": "Bab 3 · Berpikir Komputasional dan Algoritma Pemrograman",
    "pages": "hlm. 72–86",
    "title": "Serial, I/O, Percabangan, Perulangan, dan Array",
    "summary": "Menghubungkan konsep program dengan pembacaan dan pengendalian pin, keputusan bersyarat, perulangan, array, serta penggunaan library.",
    "goals": [
      "Mengenali fungsi dasar komunikasi Serial dan konstanta umum.",
      "Membedakan input, output digital, dan pembacaan/keluaran analog sesuai perangkat.",
      "Membuat algoritma sederhana yang menggunakan kondisi atau perulangan."
    ],
    "concepts": [
      "Serial Monitor membantu menampilkan atau memantau data selama pengujian.",
      "pinMode(), digitalRead(), digitalWrite(), analogRead(), dan analogWrite() digunakan sesuai kebutuhan pin dan papan yang dipakai.",
      "if/else memilih tindakan berdasarkan kondisi; perulangan mengulang instruksi; array mengelompokkan sejumlah nilai; library menyediakan fungsi pendukung."
    ],
    "activity": [
      "Tulis pseudocode sistem yang menyalakan indikator ketika nilai masukan memenuhi kondisi tertentu.",
      "Tandai input, proses, kondisi, dan output pada algoritma.",
      "Jika simulator/perangkat tersedia, uji dengan beberapa nilai masukan dan catat hasilnya."
    ],
    "output": "Pseudocode dan tabel uji untuk sistem input–proses–output sederhana.",
    "quiz": {
      "question": "Konstruksi if/else digunakan untuk …",
      "options": [
        "Menyimpan semua data dalam satu file gambar",
        "Memilih tindakan berdasarkan terpenuhi atau tidaknya kondisi",
        "Menghubungkan komputer ke router secara fisik",
        "Menghapus kebutuhan akan algoritma"
      ],
      "correct": 1,
      "explanation": "Percabangan if/else memungkinkan program memilih jalur tindakan berdasarkan hasil evaluasi kondisi."
    }
  },
  {
    "id": "w12",
    "month": "oktober",
    "number": 12,
    "weekLabel": "Minggu 12 (28 September–4 Oktober)",
    "dates": "28 September–4 Oktober 2026",
    "chapter": "Bab 4 · Jaringan Komputer dan Internet",
    "pages": "hlm. 87–93",
    "title": "Dasar Jaringan Komputer dan Klasifikasinya",
    "summary": "Memahami manfaat jaringan komputer serta mengenali klasifikasi dan jenis jaringan berdasarkan cakupan atau karakteristik yang dibahas dalam buku.",
    "goals": [
      "Menjelaskan manfaat jaringan komputer.",
      "Mengenali beberapa jenis jaringan berdasarkan cakupan.",
      "Menghubungkan kebutuhan komunikasi data dengan pilihan jaringan."
    ],
    "concepts": [
      "Jaringan memungkinkan perangkat berbagi data dan sumber daya.",
      "Jenis jaringan dibedakan berdasarkan cakupan dan kebutuhan penggunaan.",
      "Perancangan jaringan memperhatikan lokasi, jumlah perangkat, kebutuhan layanan, serta keamanan."
    ],
    "activity": [
      "Petakan perangkat komputer, printer, access point, dan server pada lingkungan laboratorium.",
      "Tentukan apakah kebutuhan komunikasi bersifat lokal atau memerlukan koneksi ke jaringan yang lebih luas.",
      "Buat sketsa jaringan sederhana dan tuliskan manfaatnya."
    ],
    "output": "Sketsa jaringan sederhana untuk laboratorium atau studio DKV.",
    "quiz": {
      "question": "Jaringan yang menghubungkan perangkat dalam area terbatas seperti laboratorium sekolah umumnya disebut …",
      "options": [
        "LAN",
        "WAN global",
        "Jaringan satelit antarbenua",
        "Jaringan tanpa perangkat penghubung"
      ],
      "correct": 0,
      "explanation": "LAN (Local Area Network) lazim digunakan untuk menghubungkan perangkat pada area terbatas, seperti ruangan, gedung, atau lingkungan sekolah."
    }
  },
  {
    "id": "w13",
    "month": "oktober",
    "number": 13,
    "weekLabel": "Minggu 13 (5–11 Oktober)",
    "dates": "5–11 Oktober 2026",
    "chapter": "Bab 4 · Jaringan Komputer dan Internet",
    "pages": "hlm. 94–99",
    "title": "Topologi Jaringan",
    "summary": "Mempelajari cara perangkat disusun dan dihubungkan dalam jaringan serta dampak pilihan topologi terhadap pengelolaan dan ketahanan jaringan.",
    "goals": [
      "Mengenali bentuk topologi yang dipelajari dalam materi jaringan.",
      "Membaca dan membuat diagram topologi.",
      "Memilih topologi sesuai kebutuhan ruang dan perangkat."
    ],
    "concepts": [
      "Topologi menggambarkan hubungan atau susunan koneksi antarperangkat.",
      "Topologi yang berbeda memiliki kebutuhan kabel, perangkat, biaya, dan karakteristik gangguan yang berbeda.",
      "Diagram topologi membantu teknisi merencanakan dan menelusuri masalah koneksi."
    ],
    "activity": [
      "Gambarkan topologi jaringan laboratorium dengan router, switch, access point, dan komputer.",
      "Tandai koneksi kabel dan koneksi nirkabel pada diagram.",
      "Jelaskan alasan pemilihan susunan tersebut serta satu potensi titik gangguan."
    ],
    "output": "Diagram topologi berlabel disertai alasan pemilihan.",
    "quiz": {
      "question": "Pada topologi star, perangkat-perangkat ujung umumnya terhubung melalui …",
      "options": [
        "Satu perangkat pusat seperti switch",
        "Satu kabel melingkar tanpa titik pusat",
        "Tidak ada jalur komunikasi",
        "Sambungan langsung ke setiap jaringan di dunia"
      ],
      "correct": 0,
      "explanation": "Topologi star memakai perangkat pusat, umumnya switch atau hub, untuk menghubungkan perangkat-perangkat ujung."
    }
  },
  {
    "id": "w14",
    "month": "oktober",
    "number": 14,
    "weekLabel": "Minggu 14 (12–18 Oktober)",
    "dates": "12–18 Oktober 2026",
    "chapter": "Bab 4 · Jaringan Komputer dan Internet",
    "pages": "hlm. 97–103",
    "title": "Aspek Teknis, Model OSI, dan TCP/IP",
    "summary": "Memahami model berlapis untuk menjelaskan komunikasi jaringan dan membandingkan model OSI dengan model TCP/IP yang digunakan dalam jaringan komputer.",
    "goals": [
      "Menjelaskan tujuan model jaringan berlapis.",
      "Mengenali fungsi umum lapisan pada model OSI.",
      "Membandingkan pengelompokan lapisan OSI dan TCP/IP."
    ],
    "concepts": [
      "Model OSI membantu membagi proses komunikasi jaringan menjadi lapisan dengan tanggung jawab berbeda.",
      "Model TCP/IP mengelompokkan fungsi komunikasi yang digunakan dalam jaringan berbasis Internet.",
      "Model berlapis membantu pembelajaran, dokumentasi, dan penelusuran gangguan."
    ],
    "activity": [
      "Pilih satu aktivitas, misalnya membuka halaman web.",
      "Buat tabel yang menghubungkan langkah komunikasi dengan fungsi lapisan jaringan secara umum.",
      "Tuliskan perbedaan cara OSI dan TCP/IP mengelompokkan fungsi tersebut."
    ],
    "output": "Tabel perbandingan OSI dan TCP/IP dengan contoh komunikasi web.",
    "quiz": {
      "question": "Manfaat utama model OSI dan TCP/IP dalam pembelajaran jaringan adalah …",
      "options": [
        "Membuat semua perangkat selalu memiliki kecepatan sama",
        "Membantu memahami fungsi komunikasi jaringan secara terstruktur",
        "Menghilangkan kebutuhan alamat jaringan",
        "Menggantikan semua perangkat keras jaringan"
      ],
      "correct": 1,
      "explanation": "Model berlapis membantu menjelaskan fungsi dan hubungan bagian-bagian dalam proses komunikasi jaringan."
    }
  },
  {
    "id": "w15",
    "month": "oktober",
    "number": 15,
    "weekLabel": "Minggu 15 (19–25 Oktober)",
    "dates": "19–25 Oktober 2026",
    "chapter": "Bab 4 · Jaringan Komputer dan Internet",
    "pages": "hlm. 104–117",
    "title": "Perangkat Jaringan dan Mekanisme Pertukaran Data",
    "summary": "Mengenali perangkat keras dan perangkat lunak jaringan, media transmisi, serta mode komunikasi data yang memengaruhi pertukaran informasi.",
    "goals": [
      "Membedakan fungsi perangkat jaringan yang umum.",
      "Mengenali media transmisi kabel dan nirkabel.",
      "Membedakan simplex, half-duplex, dan full-duplex."
    ],
    "concepts": [
      "Perangkat jaringan bekerja bersama untuk meneruskan, menghubungkan, atau mengelola komunikasi.",
      "Media transmisi dapat berupa kabel atau nirkabel; pemilihan media dipengaruhi kebutuhan dan lingkungan.",
      "Mode komunikasi menjelaskan arah dan kemampuan pengiriman data pada waktu tertentu."
    ],
    "activity": [
      "Buat tabel fungsi router, switch, access point, kartu jaringan, dan media kabel.",
      "Bandingkan penggunaan kabel Ethernet dan Wi-Fi untuk laboratorium.",
      "Berikan contoh penggunaan yang sesuai untuk mode simplex, half-duplex, dan full-duplex."
    ],
    "output": "Tabel perangkat/media transmisi dan contoh mode komunikasi data.",
    "quiz": {
      "question": "Mode komunikasi yang memungkinkan kedua sisi mengirim dan menerima data secara bersamaan disebut …",
      "options": [
        "Simplex",
        "Half-duplex",
        "Full-duplex",
        "Offline-only"
      ],
      "correct": 2,
      "explanation": "Full-duplex memungkinkan komunikasi dua arah secara bersamaan."
    }
  },
  {
    "id": "w16",
    "month": "oktober",
    "number": 16,
    "weekLabel": "Minggu 16 (26 Oktober–1 November)",
    "dates": "26 Oktober–1 November 2026",
    "chapter": "Bab 4 · Jaringan Komputer dan Internet",
    "pages": "hlm. 118–138",
    "title": "Keamanan Siber, Database, dan Kontrol Akses",
    "summary": "Mempelajari manfaat keamanan siber, jenis ancaman dan cara pencegahannya, serta dasar pengelolaan database, keamanan jaringan, dan pengaturan akses.",
    "goals": [
      "Mengidentifikasi contoh ancaman dan serangan siber.",
      "Menjelaskan kebiasaan pencegahan risiko keamanan digital.",
      "Merancang pengaturan akses dan perlindungan data sederhana."
    ],
    "concepts": [
      "Keamanan siber mencakup upaya melindungi sistem, jaringan, dan data dari gangguan atau penyalahgunaan.",
      "Pengelolaan data perlu memperhatikan akurasi, hak akses, dan keamanan database.",
      "Kata sandi kuat, autentikasi tambahan, pembaruan, pencadangan, dan pembatasan hak akses merupakan contoh praktik perlindungan."
    ],
    "activity": [
      "Buat daftar aset digital pada lab atau studio: akun, file karya, komputer, jaringan, dan database.",
      "Identifikasi risiko, dampak, serta tindakan pencegahan untuk tiap aset.",
      "Susun rancangan peran pengguna dengan hak akses minimum yang diperlukan."
    ],
    "output": "Matriks risiko dan rancangan kontrol akses sederhana.",
    "quiz": {
      "question": "Prinsip kontrol akses yang baik adalah …",
      "options": [
        "Semua akun diberi hak administrator",
        "Setiap pengguna diberi hak sesuai tugas dan kebutuhan",
        "Satu kata sandi dibagikan ke seluruh kelas",
        "Akses database tidak perlu dicatat"
      ],
      "correct": 1,
      "explanation": "Hak akses perlu dibatasi sesuai peran dan kebutuhan agar risiko perubahan atau kebocoran data berkurang."
    }
  },
  {
    "id": "w17",
    "month": "november",
    "number": 17,
    "weekLabel": "Minggu 17 (2–8 November)",
    "dates": "2–8 November 2026",
    "chapter": "Bab 5 · Dampak Sosial Informatika",
    "pages": "hlm. 139–148",
    "title": "Platform, Fitur, dan Manfaat Media Sosial",
    "summary": "Mengenali berbagai platform dan fitur media sosial serta menilai bagaimana teknologi digital digunakan untuk komunikasi, berbagi karya, dan membangun jejaring.",
    "goals": [
      "Membedakan jenis platform dan fitur media sosial.",
      "Menjelaskan manfaat positif media sosial.",
      "Memilih platform berdasarkan tujuan komunikasi atau publikasi karya."
    ],
    "concepts": [
      "Platform media sosial menyediakan cara berbeda untuk berbagi teks, gambar, video, siaran, atau membangun komunitas.",
      "Fitur perlu dipilih berdasarkan audiens, tujuan, dan bentuk konten.",
      "Kreator perlu memperhatikan atribusi, privasi, dan hak penggunaan materi."
    ],
    "activity": [
      "Pilih dua platform yang dapat digunakan untuk portofolio DKV atau publikasi kegiatan sekolah.",
      "Bandingkan format konten, audiens, fitur, manfaat, dan risikonya.",
      "Tentukan platform yang paling sesuai untuk satu tujuan komunikasi."
    ],
    "output": "Tabel perbandingan platform dan rancangan tujuan publikasi karya.",
    "quiz": {
      "question": "Sebelum memilih platform media sosial untuk publikasi karya, hal yang paling tepat dipertimbangkan adalah …",
      "options": [
        "Hanya jumlah warna pada logo platform",
        "Tujuan publikasi, audiens, format konten, dan risiko privasi",
        "Keinginan menyalin semua konten orang lain",
        "Jumlah akun yang bisa dibuat dengan kata sandi sama"
      ],
      "correct": 1,
      "explanation": "Platform sebaiknya dipilih berdasarkan tujuan, sasaran audiens, format konten, serta pertimbangan keamanan dan etika."
    }
  },
  {
    "id": "w18",
    "month": "november",
    "number": 18,
    "weekLabel": "Minggu 18 (9–15 November)",
    "dates": "9–15 November 2026",
    "chapter": "Bab 5 · Dampak Sosial Informatika",
    "pages": "hlm. 148–156",
    "title": "Dampak Positif, Dampak Negatif, dan Etika Bermedia Sosial",
    "summary": "Menganalisis manfaat dan risiko media sosial serta menyusun panduan penggunaan yang bijak, kreatif, dan bertanggung jawab.",
    "goals": [
      "Menganalisis dampak positif dan negatif penggunaan media sosial.",
      "Mengenali risiko informasi palsu, perundungan, dan pelanggaran privasi.",
      "Menyusun pedoman berbagi konten dengan bijak."
    ],
    "concepts": [
      "Media sosial dapat mendukung kreativitas, komunikasi, dan kolaborasi, tetapi juga dapat menyebarkan informasi menyesatkan atau perilaku merugikan.",
      "Konteks, sumber, dan izin publikasi perlu diperiksa sebelum suatu konten dibagikan.",
      "Kreativitas digital harus disertai tanggung jawab sosial dan penghormatan terhadap orang lain."
    ],
    "activity": [
      "Analisis satu skenario media sosial yang disediakan guru tanpa menyertakan data pribadi.",
      "Tentukan manfaat, risiko, pihak terdampak, dan tindakan yang tepat.",
      "Buat daftar periksa sebelum mengunggah atau membagikan konten."
    ],
    "output": "Checklist etika bermedia sosial atau poster kampanye digital bijak.",
    "quiz": {
      "question": "Sebelum membagikan informasi yang mengejutkan di media sosial, sebaiknya kita …",
      "options": [
        "Langsung membagikannya agar menjadi yang pertama",
        "Memeriksa sumber dan konteks informasi terlebih dahulu",
        "Menghapus nama sumber supaya lebih singkat",
        "Mengubah judul agar lebih sensasional"
      ],
      "correct": 1,
      "explanation": "Memeriksa sumber dan konteks membantu mencegah penyebaran informasi keliru atau menyesatkan."
    }
  },
  {
    "id": "w19",
    "month": "november",
    "number": 19,
    "weekLabel": "Minggu 19 (16–22 November)",
    "dates": "16–22 November 2026",
    "chapter": "Bab 5 · Dampak Sosial Informatika",
    "pages": "hlm. 157–162",
    "title": "Informatika dalam Pendidikan dan Ekonomi",
    "summary": "Mengkaji manfaat dan dampak negatif informatika dalam pendidikan serta kegiatan ekonomi, termasuk pembelajaran digital dan promosi produk atau jasa.",
    "goals": [
      "Menjelaskan contoh manfaat teknologi digital dalam pendidikan.",
      "Menganalisis peluang dan risiko ekonomi digital.",
      "Menerapkan pertimbangan etika dan keamanan dalam aktivitas daring."
    ],
    "concepts": [
      "Teknologi dapat memperluas akses bahan belajar dan mendukung kolaborasi.",
      "Dalam ekonomi, media digital dapat membantu promosi, transaksi, dan komunikasi dengan pelanggan.",
      "Risiko yang perlu diperhatikan antara lain penipuan, privasi, ketergantungan, dan informasi yang tidak akurat."
    ],
    "activity": [
      "Buat studi kasus promosi produk kreatif DKV melalui kanal digital.",
      "Petakan manfaat untuk penjual/pembeli dan risiko yang perlu dikelola.",
      "Usulkan praktik transparan saat menampilkan harga, informasi produk, dan materi promosi."
    ],
    "output": "Analisis singkat peluang dan risiko ekonomi digital untuk produk kreatif.",
    "quiz": {
      "question": "Contoh manfaat informatika di bidang ekonomi adalah …",
      "options": [
        "Memperluas promosi dan komunikasi produk melalui kanal digital",
        "Menghilangkan kebutuhan memastikan kebenaran informasi produk",
        "Menjamin semua transaksi bebas risiko",
        "Mendorong penggunaan data pribadi tanpa izin"
      ],
      "correct": 0,
      "explanation": "Kanal digital dapat membantu pemasaran dan komunikasi, tetapi pengguna tetap perlu mengelola risiko dan menyampaikan informasi yang benar."
    }
  },
  {
    "id": "w20",
    "month": "november",
    "number": 20,
    "weekLabel": "Minggu 20 (23–29 November)",
    "dates": "23–29 November 2026",
    "chapter": "Bab 5 · Dampak Sosial Informatika",
    "pages": "hlm. 163–170",
    "title": "UU ITE dan Tanggung Jawab Digital",
    "summary": "Membaca pembahasan buku mengenai ketentuan UU ITE yang dirujuk pada edisi tersebut dan menghubungkannya dengan perilaku digital yang bertanggung jawab.",
    "goals": [
      "Mengenali kelompok isu hukum digital yang dibahas pada bagian buku.",
      "Menganalisis skenario komunikasi digital dengan mempertimbangkan dampak bagi pihak lain.",
      "Menentukan respons yang aman, etis, dan tidak memperbesar risiko."
    ],
    "concepts": [
      "Bagian buku menyoroti Pasal 27, Pasal 28, dan Pasal 29 pada konteks perilaku di ruang digital.",
      "Unggahan, pesan, atau distribusi konten dapat berdampak pada orang lain dan memiliki konsekuensi.",
      "Untuk menangani kasus nyata, rujuk naskah peraturan resmi dan ketentuan terbaru; ringkasan buku merupakan bahan belajar, bukan nasihat hukum."
    ],
    "activity": [
      "Diskusikan skenario fiktif tentang penghinaan, informasi bohong/menyesatkan, atau ancaman digital.",
      "Identifikasi risiko bagi korban, pelaku, dan komunitas; jangan mencantumkan identitas nyata.",
      "Susun langkah respons: hentikan penyebaran, simpan bukti dengan aman, laporkan melalui jalur tepat, dan minta bantuan orang dewasa/pihak berwenang bila diperlukan."
    ],
    "output": "Lembar analisis skenario dan langkah respons digital yang bertanggung jawab.",
    "quiz": {
      "question": "Saat menerima unggahan yang berisi ancaman terhadap seseorang, tindakan yang lebih bertanggung jawab adalah …",
      "options": [
        "Menyebarkannya ke grup lain untuk hiburan",
        "Membalas dengan ancaman yang lebih keras",
        "Tidak memperluas penyebaran, menyimpan bukti secara aman, dan melaporkannya melalui jalur tepat",
        "Mengunggah data pribadi pihak terkait"
      ],
      "correct": 2,
      "explanation": "Respons yang aman menghindari penyebaran tambahan, menjaga bukti, dan melaporkan ancaman melalui saluran yang sesuai."
    }
  },
  {
    "id": "w21",
    "month": "desember",
    "number": 21,
    "weekLabel": "Minggu 21 (30 November–6 Desember)",
    "dates": "30 November–6 Desember 2026",
    "chapter": "Bab 6 · Praktik Lintas Bidang",
    "pages": "hlm. 171–180",
    "title": "Menentukan Tema dan Subtema Proyek",
    "summary": "Memulai praktik lintas bidang dengan memilih masalah yang relevan, menentukan tema/subtema, dan mengaitkan kontribusi Informatika dengan bidang lain.",
    "goals": [
      "Menentukan masalah yang dapat ditangani melalui proyek lintas bidang.",
      "Merumuskan tema dan subtema proyek yang spesifik.",
      "Menghubungkan rancangan teknis, komunikasi visual, dan manfaat bagi pengguna."
    ],
    "concepts": [
      "Proyek lintas bidang menggabungkan pengetahuan dan keterampilan untuk menyelesaikan masalah nyata.",
      "Buku mencantumkan contoh tema terkait lingkungan dan pengelolaan sampah, termasuk daur ulang dan tempat sampah pintar.",
      "Tema yang baik memiliki sasaran, kebutuhan pengguna, dan hasil yang dapat diuji."
    ],
    "activity": [
      "Pilih masalah di lingkungan sekolah atau masyarakat, misalnya pengurangan sampah atau penyampaian informasi layanan.",
      "Tentukan calon pengguna, kebutuhan, tema/subtema, dan keluaran proyek.",
      "Diskusikan kontribusi Informatika dan DKV: misalnya sistem sederhana, infografis, identitas visual, atau media kampanye."
    ],
    "output": "Proposal awal satu halaman berisi masalah, sasaran, tema/subtema, dan ide solusi.",
    "quiz": {
      "question": "Tema proyek lintas bidang yang baik seharusnya …",
      "options": [
        "Dipilih tanpa mempertimbangkan masalah atau pengguna",
        "Berangkat dari masalah/kebutuhan yang jelas dan dapat ditangani",
        "Hanya berisi dekorasi tanpa tujuan",
        "Tidak memiliki hasil yang bisa diperiksa"
      ],
      "correct": 1,
      "explanation": "Tema proyek perlu memiliki masalah atau kebutuhan yang jelas agar tujuan, proses, dan hasilnya bisa dirancang dan dievaluasi."
    }
  },
  {
    "id": "w22",
    "month": "desember",
    "number": 22,
    "weekLabel": "Minggu 22 (7–13 Desember)",
    "dates": "7–13 Desember 2026",
    "chapter": "Bab 6 · Praktik Lintas Bidang",
    "pages": "hlm. 181–188",
    "title": "Tujuan, Perencanaan, Pembagian Peran, dan Alat",
    "summary": "Menyusun rencana kerja yang realistis, pembagian peran, jadwal, kebutuhan alat, dan kriteria keberhasilan sebelum proyek dilaksanakan.",
    "goals": [
      "Merumuskan tujuan dan manfaat proyek.",
      "Membagi peran kerja dan menyusun jadwal.",
      "Mencatat sumber daya, alat, risiko, dan kriteria keberhasilan."
    ],
    "concepts": [
      "Perencanaan menjelaskan aktivitas, penanggung jawab, waktu, dan kebutuhan sumber daya.",
      "Pembagian peran membantu tim bekerja terkoordinasi.",
      "Kriteria keberhasilan disusun agar hasil proyek dapat diuji secara lebih objektif."
    ],
    "activity": [
      "Buat daftar tugas dari awal hingga akhir proyek.",
      "Tetapkan anggota penanggung jawab, tenggat, alat/bahan, dan ketergantungan antartugas.",
      "Susun kriteria uji dan rencana cadangan jika terjadi kendala."
    ],
    "output": "Tabel rencana kerja proyek dengan peran, jadwal, kebutuhan alat, dan kriteria uji.",
    "quiz": {
      "question": "Informasi penting yang perlu ada dalam rencana kerja tim adalah …",
      "options": [
        "Hanya nama ketua tim",
        "Tugas, penanggung jawab, waktu, dan kebutuhan sumber daya",
        "Hanya warna latar laporan",
        "Daftar hasil yang belum pernah diuji tanpa jadwal"
      ],
      "correct": 1,
      "explanation": "Rencana kerja yang baik memperjelas apa yang dikerjakan, siapa yang bertanggung jawab, kapan dilakukan, dan sumber daya yang diperlukan."
    }
  },
  {
    "id": "w23",
    "month": "desember",
    "number": 23,
    "weekLabel": "Minggu 23 (14–20 Desember)",
    "dates": "14–20 Desember 2026",
    "chapter": "Bab 6 · Praktik Lintas Bidang",
    "pages": "hlm. 183–191",
    "title": "Pelaksanaan, Jurnal, Pengujian, dan Laporan Proyek",
    "summary": "Melaksanakan proyek sesuai rencana, mencatat proses dan kendala dalam jurnal, menguji hasil, lalu menyiapkan laporan yang bisa ditelusuri.",
    "goals": [
      "Melaksanakan tugas sesuai pembagian peran.",
      "Mendokumentasikan keputusan, perubahan, dan hasil pengujian.",
      "Menyusun laporan yang menghubungkan tujuan, proses, dan hasil."
    ],
    "concepts": [
      "Jurnal kelompok membantu merekam aktivitas dan perkembangan proyek.",
      "Pengujian harus dibandingkan dengan kriteria keberhasilan yang disepakati.",
      "Laporan menjelaskan masalah, rancangan, proses, hasil, kendala, dan perbaikan."
    ],
    "activity": [
      "Kerjakan bagian proyek dan catat tanggal, kegiatan, hasil, serta kendala pada jurnal.",
      "Uji hasil menggunakan kriteria yang sudah disusun dan simpan bukti yang relevan.",
      "Mulai laporan dengan struktur masalah, tujuan, rancangan, proses, hasil, dan evaluasi."
    ],
    "output": "Jurnal aktivitas terbaru, bukti pengujian, dan draf laporan proyek.",
    "quiz": {
      "question": "Jurnal aktivitas proyek berguna terutama untuk …",
      "options": [
        "Merekam proses, keputusan, kendala, dan perkembangan proyek",
        "Menggantikan seluruh hasil produk",
        "Menyembunyikan perubahan dari anggota tim",
        "Menilai proyek hanya berdasarkan tampilan akhir"
      ],
      "correct": 0,
      "explanation": "Jurnal membantu mendokumentasikan proses sehingga perkembangan, keputusan, dan kendala dapat ditelusuri."
    }
  },
  {
    "id": "w24",
    "month": "desember",
    "number": 24,
    "weekLabel": "Minggu 24 (21–31 Desember)",
    "dates": "21–31 Desember 2026 · Penutupan semester",
    "chapter": "Bab 6 · Praktik Lintas Bidang",
    "pages": "hlm. 192–198",
    "title": "Presentasi, Asesmen, dan Refleksi Proyek",
    "summary": "Menyajikan hasil proyek, menerima umpan balik, menilai kontribusi tim maupun individu, dan merefleksikan proses serta hasil pembelajaran.",
    "goals": [
      "Mengomunikasikan masalah, solusi, proses, dan hasil proyek.",
      "Menggunakan kriteria asesmen untuk meninjau kualitas hasil.",
      "Menyusun refleksi tentang kontribusi, tantangan, dan perbaikan berikutnya."
    ],
    "concepts": [
      "Presentasi menjelaskan tujuan, rancangan, hasil, bukti pengujian, dan manfaat proyek.",
      "Asesmen dapat memuat penilaian kelompok, pribadi, dan teman satu kelompok.",
      "Refleksi membantu mengenali hal yang berhasil, kendala, serta rencana perbaikan."
    ],
    "activity": [
      "Siapkan presentasi dan demonstrasi produk/prototipe.",
      "Lakukan penilaian diri dan teman berdasarkan rubrik atau kriteria yang disepakati.",
      "Tuliskan refleksi individu: kontribusi, pengetahuan yang diperoleh, tantangan, dan satu perbaikan yang akan dilakukan."
    ],
    "output": "Presentasi akhir, laporan final, hasil asesmen, dan refleksi individu/kelompok.",
    "quiz": {
      "question": "Tujuan utama refleksi setelah proyek adalah …",
      "options": [
        "Mencari kesalahan orang lain tanpa solusi",
        "Meninjau proses dan hasil untuk mengenali pembelajaran serta perbaikan berikutnya",
        "Menghapus catatan aktivitas",
        "Mengganti seluruh kriteria penilaian setelah melihat nilai"
      ],
      "correct": 1,
      "explanation": "Refleksi meninjau proses dan hasil agar siswa memahami pembelajaran, kontribusi, tantangan, serta langkah perbaikan."
    }
  }
];

const monthTabs = document.getElementById('month-tabs');
const weekSidebar = document.getElementById('week-sidebar');
const monthWeekRange = document.getElementById('month-week-range');
const contentArea = document.getElementById('content-area');
let activeMonth = 'juli';
let activeWeekId = 'w1';

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined && text !== null) element.textContent = text;
  return element;
}

function renderMonthTabs() {
  monthTabs.replaceChildren();
  MONTHS.forEach((month) => {
    const button = makeElement('button', 'month-btn');
    button.type = 'button';
    button.dataset.month = month.key;
    button.setAttribute('aria-pressed', String(month.key === activeMonth));
    if (month.key === activeMonth) button.classList.add('active');
    button.append(makeElement('span', '', month.label));
    button.append(makeElement('small', '', month.range));
    button.addEventListener('click', () => selectMonth(month.key));
    monthTabs.append(button);
  });
}

function selectMonth(monthKey) {
  if (!MONTHS.some((month) => month.key === monthKey)) return;
  activeMonth = monthKey;
  const monthWeeks = WEEKS.filter((week) => week.month === monthKey);
  if (!monthWeeks.some((week) => week.id === activeWeekId)) {
    activeWeekId = monthWeeks[0].id;
  }
  renderMonthTabs();
  renderWeekSidebar();
  renderLesson();
}

function selectWeek(weekId) {
  const target = WEEKS.find((week) => week.id === weekId);
  if (!target) return;
  activeMonth = target.month;
  activeWeekId = target.id;
  renderMonthTabs();
  renderWeekSidebar();
  renderLesson();
}

function renderWeekSidebar() {
  const month = MONTHS.find((item) => item.key === activeMonth);
  const monthWeeks = WEEKS.filter((week) => week.month === activeMonth);
  monthWeekRange.textContent = month ? month.range : '';
  weekSidebar.replaceChildren();

  monthWeeks.forEach((week) => {
    const button = makeElement('button', 'week-btn');
    button.type = 'button';
    button.dataset.week = week.id;
    button.setAttribute('aria-current', week.id === activeWeekId ? 'page' : 'false');
    if (week.id === activeWeekId) button.classList.add('active');
    button.append(makeElement('span', 'week-number', `MODUL ${String(week.number).padStart(2, '0')}`));
    button.append(makeElement('span', '', week.weekLabel));
    button.addEventListener('click', () => selectWeek(week.id));
    weekSidebar.append(button);
  });
}

function makeList(items, ordered = false) {
  const list = document.createElement(ordered ? 'ol' : 'ul');
  items.forEach((item) => list.append(makeElement('li', '', item)));
  return list;
}

function renderQuiz(quiz, weekId) {
  const section = makeElement('section', 'quiz-card');
  section.setAttribute('aria-labelledby', `quiz-title-${weekId}`);
  const heading = makeElement('h3', 'quiz-heading', '✦ Kuis Pemahaman');
  heading.id = `quiz-title-${weekId}`;
  section.append(heading);
  section.append(makeElement('p', 'quiz-question', quiz.question));

  const form = document.createElement('form');
  const options = makeElement('div', 'quiz-options');
  quiz.options.forEach((option, index) => {
    const label = makeElement('label', 'quiz-option');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `answer-${weekId}`;
    input.value = String(index);
    input.required = true;
    label.append(input, makeElement('span', '', option));
    options.append(label);
  });
  form.append(options);

  const actions = makeElement('div', 'quiz-actions');
  const submit = makeElement('button', 'btn', 'Periksa Jawaban');
  submit.type = 'submit';
  actions.append(submit);
  form.append(actions);

  const feedback = makeElement('div', 'quiz-feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const checked = form.querySelector('input[type="radio"]:checked');
    if (!checked) return;
    const isCorrect = Number(checked.value) === quiz.correct;
    feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = `${isCorrect ? 'Benar. ' : 'Belum tepat. '}${quiz.explanation}`;
    form.querySelectorAll('input[type="radio"]').forEach((input) => { input.disabled = true; });
    submit.disabled = true;
    submit.textContent = 'Sudah Dijawab';
  });
  section.append(form, feedback);
  return section;
}

function renderLesson() {
  const week = WEEKS.find((item) => item.id === activeWeekId);
  if (!week) return;
  contentArea.setAttribute('aria-busy', 'true');
  contentArea.replaceChildren();

  const topLine = makeElement('div', 'lesson-topline');
  topLine.append(makeElement('span', 'lesson-badge', week.chapter));
  topLine.append(makeElement('span', 'page-badge', week.pages));
  contentArea.append(topLine);
  contentArea.append(makeElement('h2', 'lesson-title', week.title));
  contentArea.append(makeElement('div', 'lesson-dates', `Periode belajar: ${week.dates}`));
  contentArea.append(makeElement('p', 'lesson-summary', week.summary));

  const goals = makeElement('section', 'info-card goal-card');
  goals.append(makeElement('h3', '', 'Tujuan Pembelajaran'));
  goals.append(makeList(week.goals));
  contentArea.append(goals);

  const concepts = makeElement('section', 'info-card concept-card');
  concepts.append(makeElement('h3', '', 'Konsep Inti'));
  concepts.append(makeList(week.concepts));
  contentArea.append(concepts);

  const activity = makeElement('section', 'info-card activity-card');
  activity.append(makeElement('h3', '', 'Aktivitas Pembelajaran'));
  activity.append(makeList(week.activity, true));
  const output = makeElement('div', 'output-box');
  output.append(makeElement('strong', '', 'Produk / Bukti Belajar'));
  output.append(document.createTextNode(week.output));
  activity.append(output);
  contentArea.append(activity);

  contentArea.append(renderQuiz(week.quiz, week.id));

  const footer = makeElement('div', 'lesson-footer');
  footer.append(makeElement('span', '', `${week.chapter} · Referensi buku: ${week.pages}`));
  const nav = makeElement('div', 'lesson-nav');
  const currentIndex = WEEKS.findIndex((item) => item.id === week.id);
  const prev = makeElement('button', '', '← Minggu Sebelumnya');
  prev.type = 'button';
  prev.disabled = currentIndex <= 0;
  prev.addEventListener('click', () => { if (currentIndex > 0) selectWeek(WEEKS[currentIndex - 1].id); });
  const next = makeElement('button', '', 'Minggu Berikutnya →');
  next.type = 'button';
  next.disabled = currentIndex >= WEEKS.length - 1;
  next.addEventListener('click', () => { if (currentIndex < WEEKS.length - 1) selectWeek(WEEKS[currentIndex + 1].id); });
  nav.append(prev, next);
  footer.append(nav);
  contentArea.append(footer);
  contentArea.setAttribute('aria-busy', 'false');
}

renderMonthTabs();
renderWeekSidebar();
renderLesson();
