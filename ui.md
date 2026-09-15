# UI Spec — Situs Presentasi Sidang TA
**"Rancang Bangun Sistem Informasi Rapor Digital Berbasis Website di SMK Nangkaleah"**

Dokumen ini adalah brief desain + spesifikasi teknis untuk agent coding (Antigravity).
Tujuannya: mencegah agent mengarang konten (halusinasi) dan mencegah UI generic/"AI slop".

**Aturan #1 — sumber kebenaran**: semua angka, nama diagram, nama tabel, dan kutipan di
bagian *Bank Konten* di bawah adalah **fakta final**, diambil langsung dari naskah TA.
Agent DILARANG mengubah, membulatkan, atau mengarang angka baru. Jika sebuah slide
butuh data yang tidak ada di bank konten ini, agent harus berhenti dan bertanya ke user,
bukan menebak.

---

## 1. Konsep & Prinsip Desain

Ini bukan "template pitch deck SaaS". Subjeknya adalah **dokumen akademik resmi yang
didigitalkan** — rapor sekolah, tanda tangan basah kepala sekolah, buku nilai guru,
papan tulis kelas. Arah visual diambil dari dunia itu, bukan dari dashboard startup.

**Motif naratif yang mengikat seluruh slide**: perjalanan dari *manual & rawan salah*
menuju *digital & tervalidasi*. Ini dipetakan langsung ke warna (lihat token warna):
merah tinta koreksi guru → emas stempel/tanda tangan sah kepala sekolah. Jangan pakai
motif ini di semua slide sekaligus — simpan momen emas (gold) untuk 2–3 titik klimaks
saja (functional suitability 100%, security 100% setelah perbaikan, kesimpulan).

**Larangan eksplisit (baca ini sebelum ngoding):**
- ❌ Background hitam pekat `#000000` polos + satu aksen hijau neon/vermillion. Ini pola
  default AI yang paling gampang ketahuan. Background harus hitam **kehijauan-gelap ala
  papan tulis kelas** (lihat token warna), bukan hitam generik.
- ❌ Card seragam dengan border-radius sama semua + shadow abu-abu lembut generik.
- ❌ Label ALL CAPS dengan letter-spacing lebar di atas setiap heading ("eyebrow label").
- ❌ Angka urutan dekoratif (01 / 02 / 03) di konten yang bukan urutan asli. **Kecuali**:
  tahapan Waterfall (memang 4 tahap berurutan), langkah pengujian keamanan (memang
  berurutan), dan nomor halaman/slide (memang berurutan) — itu semua boleh pakai angka.
- ❌ Font monospace dipakai sebagai label kecil dekoratif. Monospace di spek ini **hanya**
  untuk angka data asli (skor SUS, persentase, nilai tabel) — karena kontennya memang
  data tabular, bukan gaya-gayaan.
- ❌ Tanda panah "→" ditempel di akhir teks tombol/link secara reflexive.
- ❌ Semua section fade-in + slide-up saat load. Animasi hanya boleh terjadi saat
  **berpindah slide** (morph) dan saat **interaksi user** (klik/hover elemen tertentu),
  bukan animasi ambient di semua elemen.
- ❌ Gradient dekoratif tanpa makna (radial glow ungu-biru di background hero).

---

## 2. Design Tokens

### 2.1 Warna

| Token | Hex | Peran |
|---|---|---|
| `--bg` | `#0A0F0C` | Latar utama — hitam kehijauan gelap, seperti papan tulis kelas malam hari. INI adalah "hitam" yang diminta user — jangan diganti flat black. |
| `--bg-raised` | `#10160F` | Panel/kartu yang sedikit terangkat dari background (beda ~2–3% lightness saja, jangan kontras keras). |
| `--chalk` | `#F3F0E4` | Warna teks utama — putih kapur hangat, bukan putih murni `#FFFFFF`. |
| `--chalk-dim` | `#9BA398` | Teks sekunder / caption — abu kehijauan seperti debu kapur. |
| `--ink-red` | `#B8493C` | Aksen "masalah/manual/sebelum" — merah tinta koreksi guru. Dipakai di slide latar belakang, dan status "before" pada perbandingan security 75%. |
| `--seal-gold` | `#C9A227` | Aksen "solusi/tervalidasi/sesudah" — warna stempel & tanda tangan digital kepala sekolah. Dipakai HEMAT, hanya di titik klimaks (100% functional, 100% security setelah perbaikan, kesimpulan). |
| `--rule` | `rgba(243,240,228,0.12)` | Garis pembatas/hairline, seperti garis buku tulis bergaris. |

Tidak ada warna lain di luar tabel ini. Jangan menambah biru/ungu/hijau neon untuk "variasi".

### 2.2 Tipografi

Dua keluarga font, tiga peran:

1. **Display — `Fraunces`** (Google Fonts, optical size besar, weight 400–600, sedikit
   condensed untuk judul besar). Dipakai HANYA untuk judul slide dan angka hero besar.
   Terasa seperti judul dokumen resmi/ijazah, bukan judul aplikasi SaaS.
2. **Body — `IBM Plex Sans`**. Dipakai untuk paragraf, deskripsi, nama aktor, label UI.
3. **Data — `IBM Plex Mono`**. Dipakai HANYA untuk: angka skor (72,12 / 100% / 3,90),
   isi tabel, potongan nama tabel database (`users`, `siswa`, `rapor_wali_kelas`), dan
   nomor halaman slide. Plex Mono dan Plex Sans satu keluarga besar (IBM Plex) — sengaja
   dipasangkan biar konsisten, bukan Inter/Helvetica default.

Skala tipe (rem, base 16px):
`--fs-hero: 5.5rem` (angka statistik besar) · `--fs-h1: 3.25rem` (judul slide) ·
`--fs-h2: 1.75rem` (sub judul) · `--fs-body: 1.125rem` · `--fs-caption: 0.875rem` ·
`--fs-data: 1rem` (Plex Mono).

Line-length body maksimal ~68 karakter. Line-height body 1.55.

### 2.3 Layout

- Setiap slide = 1 section `100dvh`, full-bleed, tidak ada scroll di dalam slide
  (kecuali slide tabel panjang — beri scroll internal dengan indikator halus).
- Grid asimetris 12 kolom, umumnya split **5/7** atau **4/8** (teks di kiri lebih
  sempit, visual/data di kanan lebih lebar) — meniru layout buku/dokumen dua kolom,
  BUKAN kartu-kartu simetris ala dashboard.
- Alignment: **left-aligned** sebagai default (ala halaman dokumen). Center-align
  hanya untuk slide Cover, slide Penutup, dan momen angka hero tunggal.
- Margin luar generous: minimal `6vw` kiri-kanan di desktop, `6vh` atas-bawah.
- Border-radius: **0px** di sebagian besar elemen (dokumen tidak punya sudut
  membulat). Pengecualian sengaja: elemen "stempel/seal" boleh bulat sempurna
  (radius 50%) karena memang meniru bentuk stempel fisik — ini satu-satunya radius
  di seluruh situs, dan itu justru yang membuatnya terasa disengaja.
- Hairline `1px solid var(--rule)` untuk memisahkan blok, bukan shadow.

Wireframe dasar (contoh slide dua-kolom):
```
┌──────────────────────────────────────────────────────┐
│  06vh                                                 │
│  ┌───────────┐         ┌────────────────────────────┐│
│  │ label kecil│        │                            ││
│  │ (Plex Mono)│        │      visual / diagram /     ││
│  │            │        │      tabel / angka hero      ││
│  │  Judul     │        │                            ││
│  │  (Fraunces)│        │                            ││
│  │            │        │                            ││
│  │  paragraf  │        │                            ││
│  │  pendek    │        │                            ││
│  └───────────┘         └────────────────────────────┘│
│                                          03 / 19  ← nomor halaman, Plex Mono, pojok kanan bawah
└──────────────────────────────────────────────────────┘
```

### 2.4 Motion — hanya dua jenis animasi

1. **Morph antar-slide** (lihat bagian 3) — satu-satunya animasi besar di situs.
2. **Micro-interaction on hover/click** — misal nomor pada nav dot membesar 4% saat
   di-hover, garis progress mengisi. Durasi 150–200ms, tidak lebih.

Tidak ada animasi on-scroll, tidak ada parallax, tidak ada partikel background.
Hormati `prefers-reduced-motion`: jika aktif, morph diganti cross-fade sederhana 200ms.

---

## 3. Transisi Morph (efek seperti PowerPoint Morph)

**Gunakan native browser View Transitions API** sebagai mekanisme utama. Ini API
resmi CSS/JS (`document.startViewTransition`), BUKAN library eksternal yang perlu
diinstal — jangan mengarang nama library "morph.js" yang tidak ada.

### 3.1 Cara kerja yang wajib diikuti

- Setiap elemen yang ingin "morph" (posisi/ukuran/warna berubah mulus antar slide)
  diberi `view-transition-name` unik via CSS, dan nama itu **hanya boleh dipasang
  pada elemen yang sedang aktif ditampilkan** (assign dinamis, dilepas saat elemen
  tidak lagi di slide aktif — kalau tidak, akan error "duplicate view-transition-name").
- Navigasi slide dibungkus:
```js
function goToSlide(nextIndex) {
  if (!document.startViewTransition) {
    renderSlide(nextIndex); // fallback: instant, tetap fungsional
    return;
  }
  document.startViewTransition(() => {
    renderSlide(nextIndex);
  });
}
```
- CSS transisi custom (jangan pakai default browser yang terlalu cepat/kaku):
```css
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 550ms;
  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
}
```
- Jika stack proyek adalah **React**, alternatif/pelengkap yang boleh dipakai:
  Framer Motion `layoutId` (shared layout animation) — beri `layoutId` sama pada
  elemen yang morph antar slide, bungkus dengan `<AnimatePresence>`. Jangan
  gunakan dua sistem morph sekaligus (View Transitions DAN Framer layoutId) di
  elemen yang sama — pilih satu, konsisten di seluruh situs.

### 3.2 Elemen apa saja yang morph (daftar wajib, bukan opsional)

Morph harus terasa **bermakna**, bukan sekadar efek. Berikut pasangan elemen yang
harus punya `view-transition-name`/`layoutId` sama antar slide bersebelahan:

- **Judul running**: judul besar di satu slide (Fraunces, `--fs-h1`) mengecil dan
  berpindah jadi label kecil di pojok kiri-atas slide berikutnya (`--fs-caption`,
  Plex Mono). Ini elemen morph paling sering dipakai — beri nama transisi
  `view-transition-name: slide-title`.
- **Angka hero → baris tabel**: contoh nyata — angka `100%` besar di slide
  "Functional Suitability" morph menjadi salah satu baris di tabel rekap 4 aspek
  pengujian (slide 16). Nama: `view-transition-name: stat-functional`.
  Lakukan hal sama untuk `72,12` (usability), `100%` (security setelah perbaikan),
  `3,90` (portability) — keempatnya morph ke baris masing-masing di tabel rekap.
- **Ikon aktor**: pada slide Use Case, lima persegi/lingkaran nama aktor
  (TU, Guru Mapel, Wali Kelas, Kepala Sekolah, Siswa) — posisi & ukurannya morph
  saat berpindah ke slide implementasi (jadi label role di atas screenshot dashboard
  masing-masing).
- **Stempel emas**: elemen bulat kecil (satu-satunya elemen `border-radius: 50%`
  di situs ini) muncul pertama kali kecil di slide "Approve & Tanda Tangan Digital",
  lalu morph membesar jadi elemen dekoratif tunggal di slide Kesimpulan.

Elemen yang **tidak perlu** morph (biarkan cross-fade biasa): body paragraph,
caption, nav dots. Jangan beri semua elemen `view-transition-name` — itu bikin
morph terasa berisik dan justru generic.

### 3.3 Navigasi

- Klik kanan/kiri layar (dua zona invisible selebar 15vw di tepi) atau panah
  keyboard (←/→, juga spasi untuk maju) untuk pindah slide.
- Indikator posisi: `03 / 19` pojok kanan-bawah, Plex Mono, `--chalk-dim`. Ini
  numbering yang sah dipakai karena memang representasi urutan asli.
- Progress bar tipis (2px) di tepi bawah viewport, warna `--seal-gold`, lebar
  proporsional ke posisi slide — satu-satunya progress indicator, jangan tambah dots.

---

## 4. Struktur Slide & Bank Konten (WAJIB — jangan mengarang di luar ini)

Total **19 slide**. Untuk setiap slide: judul, isi wajib, dan tipe layout.
Kalau perlu memangkas jadi lebih pendek, gabungkan slide yang ditandai *(boleh
digabung)* — jangan menghapus data, hanya padatkan penyajian.

**Slide 0 — Cover**
Layout: center-align (pengecualian dari default left-align).
- Judul: "Rancang Bangun Sistem Informasi Rapor Digital Berbasis Website di SMK
  Nangkaleah Menggunakan Metode Waterfall dan ISO/IEC 25010:2023"
- Sub: Proposal/Skripsi — Ayi Muhamad Nasrulloh — 10222058
- Sub: Program Studi Informatika, Sekolah Tinggi Teknologi Cipasung, 2026

**Slide 1 — Latar Belakang (masalah)**
Layout 5/7, aksen `--ink-red`.
- Poin: pengelolaan rapor SMK Nangkaleah masih manual pakai Microsoft Excel dan
  serah terima dokumen fisik.
- Dampak: human error perhitungan, proses lama, risiko hilang/rusak data.
- Guru mapel butuh 1–2 hari verifikasi nilai; wali kelas butuh berminggu-minggu
  menggabungkan data.
- Orang tua belum punya akses langsung memantau nilai anak; rapor hanya bentuk cetak.
- Kutipan pendek (paraphrase, bukan verbatim panjang) dari wawancara Kaprog PPLG
  Sandi Supriadi: risiko file corrupt karena pertukaran data via flashdisk.

**Slide 2 — Rumusan Masalah** *(boleh digabung dengan slide 3)*
Layout 5/7, 3 poin bernomor (sah, karena memang daftar rumusan masalah berurutan):
1. Bagaimana merancang sistem rapor digital berbasis website menggunakan Waterfall?
2. Bagaimana merancang fitur notifikasi WhatsApp per siswa dengan satu klik?
3. Bagaimana menguji kualitas sistem dengan ISO/IEC 25010:2023?

**Slide 3 — Tujuan Penelitian**
3 poin sejajar dengan rumusan masalah slide 2 (gunakan visual pairing, mis. garis
penghubung tipis) — bukan diulang sebagai teks biasa.

**Slide 4 — Batasan Masalah** *(boleh digabung ke slide 3)*
5 poin ringkas: fokus web (input–olah–simpan–sajikan), notifikasi WA manual per
siswa (bukan broadcast), 4 aspek ISO 25010 saja, 4 role pengguna (TU/Guru
Mapel/Wali Kelas/Siswa), Waterfall berhenti di tahap testing (tanpa maintenance).

**Slide 5 — Metodologi: Waterfall**
Layout diagram horizontal 4 tahap berurutan (angka 1–4 SAH dipakai di sini):
Requirement Analysis → Design (UML + ERD + Wireframe) → Implementation (React +
Supabase/PostgreSQL) → Testing (ISO/IEC 25010:2023). Catatan kecil: penelitian
berhenti di tahap Testing, tidak sampai Maintenance.

**Slide 6 — Metodologi: ISO/IEC 25010:2023**
4 kartu sejajar (bukan kartu generic — beri tiap kartu identitas: ikon garis
sederhana + satu kalimat definisi):
- Functional Suitability — kesesuaian fungsi dengan kebutuhan.
- Usability — kemudahan dipahami & digunakan (diukur pakai SUS).
- Security — perlindungan data (diuji pakai OWASP ZAP + manual RLS testing).
- Portability — kemampuan adaptasi lintas perangkat/browser.

**Slide 7 — Kebutuhan Sistem**
Layout tabel dua kolom: Kebutuhan Fungsional (7 fitur: hak akses berjenjang, input
nilai, perhitungan otomatis, pemantauan real-time wali kelas, koreksi data, akses
hasil evaluasi untuk siswa/ortu, cetak rapor) vs Kebutuhan Non-Fungsional
(performa, keamanan data terpusat, portabilitas/responsif, usability).

**Slide 8 — Perancangan: Aktor & Use Case**
5 aktor (ini titik morph penting, lihat 3.2): TU (Tata Usaha), Guru Mata Pelajaran,
Guru Wali Kelas, Kepala Sekolah, Siswa. Untuk tiap aktor tampilkan 2–3 use case
representatif saja, contoh:
- TU: kelola data siswa/kelas/mapel, input absensi.
- Guru Mapel: input nilai (harian/PTS/PAS), koreksi nilai.
- Wali Kelas: pantau nilai real-time, rekap & validasi nilai, cetak rapor.
- Kepala Sekolah: approve & tanda tangan digital rapor, lihat statistik.
- Siswa: lihat rapor online, unduh PDF.

**Slide 9 — Perancangan: ERD (ringkas)**
9 entitas: `users`, `siswa`, `kelas`, `mapel`, `guru_mapel`, `nilai`, `absensi`,
`rapor_wali_kelas`, `log_aktivitas`. Tampilkan sebagai diagram node sederhana
(garis penghubung tipis, bukan diagram ERD lengkap dengan semua kolom) — cukup
tunjukkan `siswa` sebagai node pusat.

**Slide 10 — Implementasi**
Layout 4/8. Teks kiri: stack teknologi — Frontend: React (JavaScript). Backend:
Supabase (Backend-as-a-Service) dengan PostgreSQL, autentikasi, API otomatis.
Ekspor PDF: jsPDF. Kanan: grid screenshot mockup 4 halaman kunci (buat sebagai
mockup sederhana bergaya wireframe, JANGAN mengklaim screenshot asli kalau tidak
ada file gambar nyata yang di-upload) — Login, Input Nilai, Cetak Rapor, Dashboard
Wali Kelas.

**Slide 11 — Fitur Unggulan: Notifikasi WhatsApp**
Slide fokus satu fitur, layout center-ish. Penjelasan: tombol "Send Notif" di
setiap data siswa, dikirim manual per siswa (bukan broadcast) oleh wali kelas ke
orang tua/wali secara individual dan privat.

**Slide 12 — Pengujian: Functional Suitability**
Angka hero: **100%** (7/7 test case valid), warna `--seal-gold` (titik klimaks
pertama). Metode: Black Box Testing dengan 5 teknik — Equivalence Partitioning,
Boundary Value Analysis, Decision Table, State Transition, Scenario-Based Testing.
3 sub-karakteristik: Functional Completeness, Correctness, Appropriateness.

**Slide 13 — Pengujian: Usability (SUS)**
Angka hero: **72,12** — Grade **C+**, Acceptability **Acceptable**, NPS **Passive**.
66 responden (Siswa 48 · Guru Mapel 10 · Wali Kelas 6 · Kepala Sekolah 1 · TU 1).
Breakdown per role (tabel Plex Mono untuk angka):
Siswa 68,33 · Guru Mapel 83,00 · Wali Kelas 80,83 · Kepala Sekolah 82,50 · TU 82,50.

**Slide 14 — Pengujian: Security**
Layout before/after (dua kolom, kiri `--ink-red` "Sebelum", kanan `--seal-gold`
"Sesudah") — titik klimaks kedua motif merah→emas.
- Sebelum: Security Testing Pass Rate **75%** (3/4 skenario). Temuan: kebijakan RLS
  tabel `users` memakai `auth.role() = 'authenticated'` sehingga siswa bisa membaca
  109 baris data pengguna lain (celah Confidentiality).
- Sesudah perbaikan kebijakan Row Level Security: Pass Rate **100%** (4/4 skenario).
- Tools: OWASP ZAP (Passive Scan 15 alert risiko Low–Medium, Active Scan 0 alert
  baru dari 23 request) + manual API testing 4 skenario (IDOR, role bypass, akses
  tanpa token, enumerasi data pengguna).

**Slide 15 — Pengujian: Portability**
Angka hero: **3,90** (kategori **Baik**), skala 1,00–5,00. 5 kombinasi
browser/perangkat diuji (Chrome, Firefox, Edge desktop; Chrome Android; tablet)
seluruhnya responsif & fungsi normal. Skor tertinggi: Kepala Sekolah (4,33) & Wali
Kelas (4,22); terendah: Siswa (3,80).

**Slide 16 — Rekap Hasil Pengujian**
Tabel rekap 4 baris (titik morph — lihat 3.2, keempat angka hero dari slide 12–15
mendarat di sini):
| Aspek | Hasil | Kategori |
|---|---|---|
| Functional Suitability | 100% | Sangat Layak |
| Usability | 72,12 | Acceptable (C+) |
| Security | 75% → 100% | Layak (setelah perbaikan) |
| Portability | 3,90 | Baik |

**Slide 17 — Kesimpulan**
3 poin, sejajar dengan rumusan masalah (slide 2) — tutup lingkaran naratif. Elemen
stempel emas (lihat 3.2) mendarat besar di slide ini sebagai penutup visual.

**Slide 18 — Saran & Penutup**
4 poin saran ringkas (notifikasi broadcast per kelas, lanjut ke tahap maintenance,
tambah dashboard analitik, kembangkan versi mobile) + ucapan terima kasih/sesi
tanya jawab. Center-align.

---

## 5. Komponen & Detail Implementasi

- **Nav dot / progress**: hairline progress bar bawah, warna gold, TIDAK pakai
  bullet dots bertumpuk (itu default generic slide deck).
- **Tabel data** (slide 13, 15, 16): gunakan `<table>` semantik asli, bukan div
  yang di-styling jadi tabel. Angka rata kanan, Plex Mono, garis horizontal tipis
  antar baris (`--rule`), tanpa garis vertikal.
- **Diagram (Waterfall, Use Case, ERD)**: buat sebagai SVG/HTML+CSS garis tipis
  monokrom (`--chalk-dim` untuk garis, `--chalk` untuk label), bukan ikon flat
  berwarna-warni dari icon library generik. Aksen gold/red dipakai sangat hemat,
  hanya untuk menyorot satu elemen yang relevan di slide itu.
- **Kutipan wawancara** (slide 1): tampilkan sebagai blok kecil dengan garis
  vertikal kiri tipis (`--rule`) + nama & jabatan narasumber di bawah dalam Plex
  Mono kecil, bukan tanda kutip besar dekoratif.
- **Responsive**: breakpoint utama di 768px. Di layar sempit, layout 5/7 atau 4/8
  berubah jadi tumpuk vertikal (teks dulu, lalu visual), font hero mengecil ke
  `~3rem`, morph tetap jalan (View Transitions API bekerja di mobile Chrome/Safari
  terbaru; sediakan fallback cross-fade untuk browser yang belum dukung).
- **Aksesibilitas**: kontras `--chalk` di atas `--bg` harus lolos WCAG AA (cek,
  jangan asumsi). Semua slide bisa dinavigasi via keyboard. Fokus terlihat jelas
  (outline gold tipis, bukan default browser biru).

---

## 6. Checklist Sebelum Selesai (agent wajib cek satu-satu)

- [ ] Tidak ada angka di situs yang tidak ada di bagian 4 (Bank Konten).
- [ ] Background bukan `#000000` flat — pakai `--bg: #0A0F0C`.
- [ ] Hanya ada 1 elemen `border-radius: 50%` di seluruh situs (stempel gold).
- [ ] Tidak ada card seragam bershadow abu-abu generik.
- [ ] Tidak ada eyebrow label ALL CAPS dekoratif.
- [ ] Morph terjadi hanya di pasangan elemen yang terdaftar di bagian 3.2.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Warna merah (`--ink-red`) hanya muncul di konteks "masalah/manual/sebelum".
- [ ] Warna emas (`--seal-gold`) hanya muncul di ≤4 titik klimaks yang disebutkan.
- [ ] Font monospace hanya dipakai untuk data angka/tabel/nomor halaman, bukan label.
