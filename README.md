# Sistem-Blog-Sederhana-dengan-Node.js-dan-Express

## Fitur

* Mendaftarkan pengguna baru dengan kata sandi yang di-hash
* Autentikasi pengguna melalui login
* Menyimpan data pengguna dalam file JSON
* Menangani permintaan dan respons dalam format JSON

## Persyaratan

* Node.js (v12 atau lebih tinggi)
* NPM (v6 atau lebih tinggi)

## Setup

1. **Kloning repositori:**

<pre><div dir="auto"><div dir="auto">bash</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>git clone 
cd</code></div></div></pre>

2. **Instal dependensi:**
   bash
   Salin kode
   npm install
3. **runing**
   bash
   npm run api



## API Endpoints

### 1. **GET `/users`** - Mendapatkan semua pengguna

**Deskripsi:**

* Rute ini mengambil daftar pengguna yang telah terdaftar.

**Permintaan:**

* Metode: `GET`
* URL: `/users`

**Respons:**

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "data": [ /* Daftar pengguna */ ],
   "metadata": "halaman awal"
}
</code></div></div></pre>


