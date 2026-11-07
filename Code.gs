/**
 * Backend RSVP & ucapan untuk undangan digital.
 * Cara pasang:
 * 1. Buat Google Sheet baru, beri nama misalnya "RSVP Rina & Dimas".
 * 2. Menu Ekstensi → Apps Script, hapus isi bawaan, tempel seluruh kode ini, simpan.
 * 3. Klik Terapkan (Deploy) → Deployment baru → jenis "Aplikasi web".
 *    Jalankan sebagai: Saya. Yang memiliki akses: Siapa saja. Klik Terapkan dan izinkan aksesnya.
 * 4. Salin URL aplikasi web (berakhiran /exec), tempel ke CONFIG.endpoint di index.html.
 */
const SHEET = 'RSVP';
const HEAD = ['Waktu', 'Nama', 'Kehadiran', 'Jumlah', 'Ucapan', 'Link tamu'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) { sh = ss.insertSheet(SHEET); sh.appendRow(HEAD); sh.setFrozenRows(1); }
  return sh;
}

function doPost(e) {
  const d = JSON.parse(e.postData.contents || '{}');
  const clean = (v, n) => String(v || '').slice(0, n);
  sheet_().appendRow([new Date(), clean(d.nama, 60), clean(d.hadir, 20), clean(d.jumlah, 3), clean(d.ucapan, 400), clean(d.tamu, 60)]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  const data = rows.map(r => ({ waktu: r[0], nama: r[1], hadir: r[2], ucapan: r[4] }));
  return ContentService.createTextOutput(JSON.stringify({ data })).setMimeType(ContentService.MimeType.JSON);
}
