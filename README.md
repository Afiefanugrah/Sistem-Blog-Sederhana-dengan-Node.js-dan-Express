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
   ````bash
   git clone nama_repositori
   cd nama_repositori

2. **Instal dependensi:**
   ````bash
   npm install
3. **runing**
   Server akan berjalan di http://localhost:3300.
   ````bash
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
   "metadata": "users endpoint"
}
</code></div></div></pre>

### 2. **POST `/register`** - Menambahkan user

**Deskripsi:**

* Rute ini daftar pengguna baru.

**Permintaan:**

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "username": "string",
   "password": "string",
}
</code></div></div></pre>

**Respons:**

* Metode: `POST`
* URL: `/users/register`

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "data": [ /* Daftar pengguna */ ],
   "metadata": "login endpoint"
}
</code></div></div></pre>

### 3. **GET `/blog`**  - Mendapatkan semua blogs

**Deskripsi**

* Rute ini mengambil daftar blogs yang telah di masukan.

**permintaan**

* Metode: `GET`
* URL: `/blog`

**Respons**

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "data": [ /* Daftar blogs */ ],
   "metadata": "blogs endpoint"
}
</code></div></div></pre>

### 4. **POST `/posts`** - Menambahkan user

**Deskripsi:**

* Rute ini daftar pengguna baru.

**Permintaan:**

* Metode: `POST`
* URL: `/blog/posts`

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "username": "string",
   "password": "string",
}
</code></div></div></pre>

**Respons:**

* Metode: `POST`
* URL: `/users/register`

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "data": [ /* pengguna baru */ ],
   "metadata": "creat berita sukses"
}
</code></div></div></pre>

### 5. **POST `/posts/:id`**  - Mendapatkan semua blogs

**Deskripsi**

* Rute memasukan berita baru by user.

**permintaan**

* Metode: `POST`
* URL: `/blog/posts/:id`

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "title": "string",
   "content": "string",
}
</code></div></div></pre>

**Respons**

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "data": [ /* blogs new */ ],
   "metadata": "blog endpoint"
}
</code></div></div></pre>

### 5. **DELETE `/delete/:id`**  - Mendapatkan semua blogs

**Deskripsi**

* Rute memasukan berita baru by user.

**permintaan**

* Metode: `DELETE`
* URL: `/blog/delete/:id`

**Respons**

<pre><div dir="auto"><div dir="auto">json</div><div dir="auto"><div dir="auto"><div dir="auto"><span>Salin kode</span></div></div></div><div dir="ltr"><code>{
   "data": [ /* data delete*/ ],
   "metadata": "Delete by id suskses"
}
</code></div></div></pre>


