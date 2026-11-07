# Undangan Digital — Demo

Demo undangan pernikahan (data dan foto hanya contoh).

## Isi folder
- `index.html` — halaman undangan. Semua data yang perlu diganti ada di bagian teks HTML dan blok `CONFIG` di bawah file.
- `assets/foto/` — foto. Ganti dengan foto asli memakai nama file yang sama.
- `Code.gs` — kode Google Apps Script untuk menyimpan RSVP & ucapan ke Google Sheets.

## Link per tamu
Tambahkan `?to=Nama+Tamu` di belakang link, contoh:
`https://namaakun.github.io/undangan-demo/?to=Bapak+Budi`

## Musik
Taruh file `musik.mp3` di folder `assets/`, lalu isi `music: 'assets/musik.mp3'` di CONFIG.
Kalau dikosongkan, undangan memutar melodi kotak musik bawaan.
