# Naskah & Script Penjelasan Presentasi Sidang TA
**"Rancang Bangun Sistem Informasi Rapor Digital Berbasis Website di SMK Nangkaleah Menggunakan Metode Waterfall dan ISO/IEC 25010:2023"**

**Penyaji:** Ayi Muhamad Nasrulloh (NIM 10222058)  
**Program Studi:** Informatika — Sekolah Tinggi Teknologi Cipasung (2026)  
**Estimasi Durasi Presentasi Utama:** 12 – 15 Menit  

---

> [!TIP]
> **Petunjuk Penggunaan Script:**
> - Kalimat dalam cetak tebal & tanda petik **"..."** adalah **kalimat lisan yang diucapkan ke Dewan Penguji**.
> - Tanda `[Pindah Slide]` menandakan momen Anda menekan panah kanan / spasi untuk berpindah slide.
> - Tanda `[Sorot Visual]` menandakan momen Anda mengarahkan pandangan/pointer ke angka hero, grafik, atau diagram di layar.

---

## 🟢 BAGIAN I: PEMBUKAAN & PENDAHULUAN (Slide 0 – Slide 4)

### 📌 Slide 0 — Cover (Durasi: ~1 Menit)
*Visual: Judul besar Fraunces, Nama Penyaji, NIM, & Logo Kampus.*

> **"Assalamu’alaikum Warahmatullahi Wabarakatuh.**  
> Selamat pagi/siang yang saya hormati Bapak/Ibu Dewan Penguji dan Dosen Pembimbing.  
> 
> Perkenankan saya, **Ayi Muhamad Nasrulloh**, NIM **10222058**, dari Program Studi Informatika Sekolah Tinggi Teknologi Cipasung. Pada hari ini saya akan memaparkan hasil penelitian skripsi saya yang berjudul: **'Rancang Bangun Sistem Informasi Rapor Digital Berbasis Website di SMK Nangkaleah Menggunakan Metode Waterfall dan ISO/IEC 25010:2023'**.  
> 
> Mari kita mulai masuk ke latar belakang mendasar yang melandasi lahirnya penelitian ini."

`[Pindah Slide -> Slide 1]`

---

### 📌 Slide 1 — Latar Belakang Masalah (Durasi: ~1.5 Menit)
*Visual: Layout 5/7, Aksen Merah Tinta, Kutipan Kaprog PPLG Sandi Supriadi.*

> **"Bapak/Ibu Dewan Penguji,**  
> Berdasarkan observasi langsung di lapangan, pengelolaan nilai dan penerbitan rapor di SMK Nangkaleah selama ini masih berjalan sepenuhnya secara manual menggunakan aplikasi Microsoft Excel serta serah terima berkas fisik.  
> 
> Proses ini memicu kendala operasional yang sangat krusial:
> 1. **Guru Mata Pelajaran** menghabiskan waktu 1 hingga 2 hari penuh hanya untuk memverifikasi rumus dan mengolah nilai.
> 2. **Wali Kelas** membutuhkan waktu hingga **berminggu-minggu** untuk mengumpulkan dan menggabungkan puluhan file Excel dari berbagai guru mapel.
> 3. **Orang Tua dan Siswa** tidak memiliki akses langsung secara real-time untuk memantau perkembangan nilai, karena rapor eksklusif dibagikan dalam bentuk cetak fisik.
> 
> Sebagaimana ditegaskan oleh Kaprog PPLG SMK Nangkaleah, Bapak Sandi Supriadi: *'Risiko file corrupt sangat tinggi karena pertukaran data nilai masih mengandalkan flashdisk antar guru mapel dan wali kelas.'*  
> Berangkat dari permasalahan faktual tersebut, digitalisasi rapor secara terpusat menjadi kebutuhan mendesak sekolah."

`[Pindah Slide -> Slide 2]`

---

### 📌 Slide 2 — Perumusan Masalah (Durasi: ~1 Menit)
*Visual: List 3 Poin Rumusan Masalah Berurutan.*

> **"Dari fenomena tersebut, saya merumuskan 3 masalah utama penelitian:**  
> 1. *Pertama:* Bagaimana merancang dan membangun sistem informasi rapor digital berbasis website menggunakan metode Waterfall untuk menghentikan alur pengolahan manual dan risiko hilangnya data akibat pertukaran fisik?  
> 2. *Kedua:* Bagaimana merancang fitur notifikasi WhatsApp yang dapat dikirimkan secara privat per siswa dengan satu kali klik oleh wali kelas?  
> 3. *Ketiga:* Bagaimana menguji tingkat kualitas, keamanan, dan kelayakan sistem berdasarkan standar kualitas internasional ISO/IEC 25010:2023?"

`[Pindah Slide -> Slide 3]`

---

### 📌 Slide 3 — Tujuan Penelitian (Durasi: ~1 Menit)
*Visual: Visual Pairing 3 Kartu Target Solusi.*

> **"Sejalan dengan rumusan masalah tersebut, tujuan penelitian ini adalah:**  
> 1. Menghasilkan Sistem Informasi Rapor Digital berbasis website yang mengotomatisasi pengolahan nilai secara terpusat dan terintegrasi.  
> 2. Menghasilkan fitur notifikasi WhatsApp privat per siswa via tombol `Send Notif` untuk mempermudah wali kelas menyapa orang tua siswa.  
> 3. Mengevaluasi kelayakan kualitas sistem secara terukur berdasarkan 4 karakteristik ISO/IEC 25010:2023."

`[Pindah Slide -> Slide 4]`

---

### 📌 Slide 4 — Batasan Masalah (Durasi: ~1 Menit)
*Visual: 5 Poin Batasan Penelitian.*

> **"Agar penelitian ini tetap terfokus, saya menetapkan 5 batasan utama:**  
> - Sistem dikembangkan berbasis web untuk fungsi input, olah, simpan, dan sajikan.  
> - Notifikasi WhatsApp dikirimkan secara **manual per siswa (privat & individual)**, bukan broadcast serentak satu kelas.  
> - Evaluasi kualitas dibatasi pada 4 aspek ISO 25010: *Functional Suitability, Usability, Security,* dan *Portability*.  
> - Hak akses mencakup 5 peran: Tata Usaha (TU), Guru Mapel, Wali Kelas, Kepala Sekolah, dan Siswa/Ortu.  
> - Siklus SDLC Waterfall pada penelitian ini dilaksanakan **hingga tahap Testing (pengujian)** dan tidak sampai pada tahap pemeliharaan (maintenance)."

`[Pindah Slide -> Slide 5]`

---

## 🟡 BAGIAN II: METODOLOGI PENELITIAN & PERANCANGAN (Slide 5 – Slide 10)

### 📌 Slide 5 — Metodologi Waterfall (Durasi: ~1.5 Menit)
*Visual: Diagram Air Terjun Stepped Cascade (Blueprint).*

> **"Metodologi pengembangan yang saya gunakan adalah model Waterfall.**  
> Alur pengembangan dilakukan sekuensial melalui 4 fase utama:
> 1. **Requirement Analysis:** Melakukan observasi dan *in-depth interview* dengan pihak manajemen dan staf pengajar SMK Nangkaleah.  
> 2. **System Design:** Menyusun pemodelan UML, skema database ERD 9 entitas, serta rancangan wireframe antarmuka.  
> 3. **Implementation:** Menulis kode program *front-end* React JavaScript, mengonfigurasi *back-end* Supabase (PostgreSQL & Row Level Security), serta ekspor dokumen jsPDF.  
> 4. **Testing:** Melakukan pengujian komprehensif ISO/IEC 25010:2023 sebagai titik akhir siklus penelitian."

`[Pindah Slide -> Slide 6]`

---

### 📌 Slide 6 — Standar Kualitas ISO/IEC 25010:2023 (Durasi: ~1 Menit)
*Visual: Grid 4 Kartu Karakteristik ISO 25010.*

> **"Untuk menjamin kualitas sistem, pengujian dilakukan berbasis standar ISO/IEC 25010:2023 pada 4 karakteristik:**  
> - **Functional Suitability:** Diuji via Black Box Testing untuk mengukur kesesuaian 7 fitur utama.  
> - **Usability:** Diukur menggunakan instrumen kuesioner baku *System Usability Scale (SUS)* kepada 66 responden.  
> - **Security:** Diuji ketahannannya menggunakan OWASP ZAP DAST scan + pengujian manual kebijakan *Row Level Security (RLS)*.  
> - **Portability:** Diuji responsivitas dan fungsionalitasnya pada 5 kombinasi perangkat dan browser."

`[Pindah Slide -> Slide 7]`

---

### 📌 Slide 7 — Analisis Kebutuhan Sistem (Durasi: ~1 Menit)
*Visual: Tabel Dua Kolom (Fungsional vs Non-Fungsional).*

> **"Hasil analisis kebutuhan memetakan:**  
> 7 Kebutuhan Fungsional utama, meliputi: Hak Akses Berjenjang 5 Role, Modul Input Nilai, Kalkulasi Otomatis, Pemantauan Real-Time Wali Kelas, Koreksi Data, Akses Evaluasi Online Siswa, dan Cetak Rapor PDF.  
> Serta 4 Kebutuhan Non-Fungsional yang menekankan pada efisiensi waktu kerja, keamanan data terpusat, dan kemudahan penggunaan antarmuka."

`[Pindah Slide -> Slide 8]`

---

### 📌 Slide 8 — Perancangan Aktor & Use Case (Durasi: ~1 Menit)
*Visual: Grid 5 Aktor (TU, Guru Mapel, Wali Kelas, Kepsek, Siswa).*

> **"Sistem ini merancang pembagian wewenang yang tegas untuk 5 aktor:**  
> - **TU:** Berwenang mengelola data master siswa, kelas, mapel, akun, jadwal, dan absensi harian.  
> - **Guru Mapel:** Menginput komponen nilai (Harian, PTS, PAS) dan melakukan koreksi nilai.  
> - **Wali Kelas:** Memantau leger nilai real-time, menginput catatan perkembangan, merekap, serta menerbitkan rapor.  
> - **Kepala Sekolah:** Berwenang melakukan **Approve & Tanda Tangan Digital Rapor** serta melihat statistik akademik.  
> - **Siswa & Ortu:** Mengakses rapor online dan mengunduh berkas PDF resmi."

`[Pindah Slide -> Slide 9]`

---

### 📌 Slide 9 — Perancangan ERD (Durasi: ~1.5 Menit)
*Visual: Tampilan Gambar High-Res dbdiagram.io ERD Schema (9 Tabel).*

> **"Struktur penyimpanan data dirancang dalam bentuk Entity Relationship Diagram (ERD) berbasis PostgreSQL yang terdiri dari 9 tabel relasional.**  
> `siswa` menjadi entitas sentral yang terhubung ke tabel `users` untuk akun login, tabel `kelas`, tabel `nilai`, tabel `absensi`, serta tabel `rapor_wali_kelas`.  
> Tabel `guru_mapel` bertindak sebagai tabel *pivot* penugasan mengajar, dan tabel `log_aktivitas` merekam seluruh jejak tindakan pengguna sebagai *audit trail* sistem."

`[Pindah Slide -> Slide 10]`

---

### 📌 Slide 10 — Implementasi Stack & Wireframe (Durasi: ~1 Menit)
*Visual: Stack List + Grid Mockup 4 Halaman.*

> **"Implementasi sistem menggunakan arsitektur modern:**  
> *Front-end* dibangun dengan **React JavaScript** untuk menghadirkan antarmuka dinamis. *Back-end* memanfaatkan **Supabase** berbasis PostgreSQL yang menyediakan autentikasi terintegrasi, API otomatis, dan kebijakan keamanan data Row Level Security. Sedangkan pencetakan dokumen rapor diolah menggunakan **jsPDF**."

`[Pindah Slide -> Slide 11]`

---

### 📌 Slide 11 — Fitur Unggulan Notifikasi WhatsApp (Durasi: ~1 Menit)
*Visual: Highlight Fitur WhatsApp API.*

> **"Inilah salah satu fitur unggulan pada sistem yang dibangun:**  
> Wali kelas dapat mengirimkan notifikasi pemberitahuan nilai rapor langsung ke WhatsApp nomor orang tua murid hanya dengan **satu kali klik tombol 'Send Notif'** pada baris data siswa.  
> Fitur ini didesain privat per individu, sehingga menjaga kerahasiaan nilai siswa dan sangat efektif bagi wali murid yang mayoritas berdomisili di luar daerah."

`[Pindah Slide -> Slide 12]`

---

## 🔴 BAGIAN III: HASIL PENGUJIAN & PEMBAHASAN (Slide 12 – Slide 16)

### 📌 Slide 12 — Pengujian Functional Suitability (Durasi: ~1 Menit)
*Visual: Hero Number 100% Emas.*

> **"Bapak/Ibu Penguji, masuk pada bagian hasil pengujian.**  
> Pengujian aspek **Functional Suitability** dilakukan menggunakan Black Box Testing terhadap seluruh 7 kebutuhan fungsional dengan 5 teknik pengujian.  
> Hasilnya memperoleh angka **Functional Suitability Rate 100% (7/7 Test Case Valid)**, yang mengonfirmasi bahwa seluruh fungsi berjalan secara lengkap, presisi, dan sesuai alur kerja sekolah."

`[Pindah Slide -> Slide 13]`

---

### 📌 Slide 13 — Pengujian Usability / SUS (Durasi: ~1.5 Menit)
*Visual: Hero Number 72,12 + Bar Chart Kuesioner per Role.*

> **"Pada aspek Usability, pengujian diukur menggunakan kuesioner baku System Usability Scale (SUS) kepada 66 responden.**  
> Hasil pengolahan data menghasilkan skor rata-rata SUS sebesar **72,12**.  
> Berdasarkan skala kriteria Sauro & Lewis, skor ini berada pada **Grade C+**, tingkat penerimaan **Acceptable (Dapat Diterima)**, dan predikat **Passive**.  
> Apabila dilihat pada grafik breakdown per peran di layar: Guru Mapel memberikan skor tertinggi sebesar **83,00**, sedangkan Siswa memberikan skor **68,33**."

`[Pindah Slide -> Slide 14]`

---

### 📌 Slide 14 — Pengujian Security & Perbaikan RLS (Durasi: ~1.5 Menit)
*Visual: Sebelum (75% Merah) vs Sesudah (100% Emas) + Indikator OWASP ZAP.*

> **"Pada aspek Security, pengujian memadukan OWASP ZAP DAST scan dan manual API Testing terhadap kebijakan Row Level Security (RLS).**  
> Pada pengujian awal, ditemukan 1 celah kerentanan otorisasi (SC-06) di mana kebijakan RLS tabel `users` mengizinkan akun peran Siswa membaca 109 baris data akun pengguna lain, sehingga *Security Testing Pass Rate* awal hanya **75%**.  
> 
> Saya langsung melakukan tindakan perbaikan (*hardening*) dengan memperbarui kebijakan RLS pada database Supabase. Setelah diperbaiki dan diuji ulang, seluruh skenario berhasil lolos dengan **Security Testing Pass Rate 100%**."

`[Pindah Slide -> Slide 15]`

---

### 📌 Slide 15 — Pengujian Portability (Durasi: ~1 Menit)
*Visual: Hero Number 3,90 + Device Meters 5 Perangkat.*

> **"Pada aspek Portability, pengujian teknis dijalankan pada 5 kombinasi perangkat dan peramban** (Chrome Desktop, Firefox, Edge, Chrome Android, dan Tablet).  
> Seluruh kombinasi terbukti mampu menampilkan antarmuka secara responsif **100% Normal** tanpa terjadi *layout overflow*. Hasil kuesioner pengguna mencatatkan skor rata-rata **3,90 (Kategori Baik)** pada skala 5.0."

`[Pindah Slide -> Slide 16]`

---

### 📌 Slide 16 — Rekapitulasi Hasil Pengujian ISO 25010 (Durasi: ~1.5 Menit)
*Visual: Tabel Rekapitulasi 4 Baris + Graphic Progress Bars.*

> **"Bapak/Ibu Penguji, slide ini merangkum seluruh hasil evaluasi kualitas sistem berbasis ISO/IEC 25010:2023:**  
> - **Functional Suitability:** $100\%$ (Sangat Layak)  
> - **Usability:** $72,12$ (Acceptable / Grade C+)  
> - **Security:** $100\%$ (Layak, meningkat dari $75\%$ pasca perbaikan RLS)  
> - **Portability:** $3,90$ (Baik)  
> 
> Rekapitulasi ini membuktikan secara kuantitatif bahwa Sistem Informasi Rapor Digital di SMK Nangkaleah memenuhi standar kualitas perangkat lunak dan layak diimplementasikan."

`[Pindah Slide -> Slide 17]`

---

## 🔵 BAGIAN IV: KESIMPULAN & PENUTUP (Slide 17 – Slide 18)

### 📌 Slide 17 — Kesimpulan (Durasi: ~1 Menit)
*Visual: 3 Poin Kesimpulan + Stempel Emas Besar Tervalidasi.*

> **"Sebagai kesimpulan akhir dari penelitian ini:**  
> 1. Sistem Informasi Rapor Digital berbasis website berhasil dirancang dan dibangun dengan metode Waterfall, mengotomatisasi pengolahan nilai serta menghilangkan risiko hilangnya dokumen fisik.  
> 2. Fitur notifikasi WhatsApp per siswa via tombol `Send Notif` berhasil diimplementasikan dengan $100\%$ kesesuaian fungsional.  
> 3. Pengujian standar kualitas ISO/IEC 25010:2023 membuktikan sistem teruji sangat layak dari aspek Fungsional ($100\%$), Kebergunaan ($72,12$), Keamanan ($100\%$), dan Portabilitas ($3,90$)."

`[Pindah Slide -> Slide 18]`

---

### 📌 Slide 18 — Saran & Penutup (Durasi: ~1 Menit)
*Visual: 4 Poin Saran + Ucapan Terima Kasih.*

> **"Adapun saran untuk pengembangan selanjutnya:**  
> 1. Mengembangkan fitur pengiriman notifikasi WhatsApp secara *broadcast* per kelas.  
> 2. Melanjutkan ke tahap *Maintenance* dan pemantauan keamanan berkala.  
> 3. Menambahkan dashboard analitik perkembangan akademik siswa jangka panjang.  
> 4. Mengembangkan aplikasi versi *mobile native*.  
> 
> Demikian pemaparan presentasi skripsi saya. Terima kasih banyak atas perhatian Bapak/Ibu Dewan Penguji. Waktu dan tempat selanjutnya saya kembalikan kepada Ketua Sidang untuk sesi tanya jawab."

---

## 🛡️ BAGIAN V: STRATEGI & SCRIPT MENJAWAB PERTANYAAN PENGUJI (BACKUP DECK B01–B10)

Jika Penguji meminta penjelasan teknis lebih dalam, **tekan tombol `B` pada keyboard** untuk membuka **Backup Deck Overlay**, lalu navigasikan ke slide yang sesuai:

### ❓ Pertanyaan 1: "Bagaimana cara kerja Row Level Security (RLS) di Supabase dan bagaimana Anda memperbaiki celah kerentanannya?"
> **Buka Backup Slide B06 (Row Level Security DDL)**  
> **Jawaban Anda:**  
> *"Terima kasih atas pertanyaannya Bapak/Ibu. Di Supabase, Row Level Security (RLS) bekerja di tingkatan database PostgreSQL. Pada awalnya, RLS tabel `users` memakai klausa `auth.role() = 'authenticated'`, yang artinya siapa pun yang memiliki token login sah (termasuk Siswa) bisa membaca seluruh baris data.  
> Perbaikannya saya ubah dengan klausa `id = auth.uid()`, sehingga query `SELECT` dari akun Siswa secara otomatis hanya mengembalikan 1 baris data miliknya sendiri. Sedangkan untuk peran TU dan Kepsek, saya buatkan pengecualian khusus menggunakan fungsi `SECURITY DEFINER` untuk menghindari infinite recursion."*

---

### ❓ Pertanyaan 2: "Bagaimana rumus perhitungan skor SUS dan kenapa skor kelompok siswa lebih rendah dari guru?"
> **Buka Backup Slide B04 (Rumus Perhitungan SUS)**  
> **Jawaban Anda:**  
> *"Skor SUS dihitung menggunakan rumus konversi Brooke (1996): nilai pernyataan positif ganjil dikurangi 1 $\sum(R_{\text{ganjil}} - 1)$, sedangkan nilai pernyataan negatif genap dihitung $5 - R_{\text{genap}}$. Seluruh nilai konversi dijumlahkan dan dikalikan $2,5$. Total skor 66 responden kami adalah $4.760$, sehingga rata-ratanya $72,12$.  
> Mengenai skor siswa yang berada di angka $68,33$ (lebih rendah dari guru $83,00$), hal ini disebabkan karena variasi perangkat pribadi siswa yang beragam serta keterbiasaan siswa dalam mengakses sistem berbasis peran yang masih baru bagi mereka."*

---

### ❓ Pertanyaan 3: "Bagaimana alur teknis notifikasi WhatsApp bekerja di sistem?"
> **Buka Backup Slide B07 (WhatsApp Notification Logic)**  
> **Jawaban Anda:**  
> *"Fitur notifikasi WA bekerja dengan memanfaatkan *event handler* tombol `Send Notif` di dashboard wali kelas. Ketika diklik, sistem mengambil data nomor telepon orang tua dan ringkasan nilai siswa dari database, lalu menyusun URL payload WhatsApp API privat `https://wa.me/{phone}?text={encoded_message}`. Hal ini memastikan pesan terkirim secara individual dan privat tanpa memerlukan server relay pihak ketiga yang berbiaya mahal."*

---

### ❓ Pertanyaan 4: "Mengapa pengujian keamanan Anda menggunakan OWASP ZAP dan apa hasilnya?"
> **Buka Backup Slide B08 (Detail OWASP ZAP Testing)**  
> **Jawaban Anda:**  
> *"OWASP ZAP digunakan untuk Dynamic Application Security Testing (DAST) dalam kondisi aplikasi berjalan. Pada *Passive Scan*, OWASP ZAP menemukan 15 alert berisiko Low-Medium yang seluruhnya merupakan rekomendasi *hardening* header HTTP (seperti Content Security Policy). Sedangkan pada *Active Scan* dengan 23 request serangan seperti XSS dan SQL Injection, tidak ditemukan alert baru (0 alerts), membuktikan sisi client aman dari injeksi script berbahaya."*
