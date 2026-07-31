import React from 'react';
import './App.css';

function App() {
  const products = [
    {
      id: 'A',
      name: 'Bolu Emprit',
      price: 'Rp 6.500 / pack',
      desc: 'Kue tradisional dengan tekstur renyah dan lumer di mulut. Dibuat menggunakan resep warisan yang diproses higienis tanpa pengawet buatan, sangat cocok untuk teman santai minum teh atau kopi.',
      img: '/boluemprit.png',
      badge: 'Tanpa Pengawet'
    },
    {
      id: 'B',
      name: 'Osar Asir',
      price: 'Rp 13.000 / pack',
      desc: 'Camilan manis nan gurih khas usaha rumahan. Memiliki rasa manis yang pas dan tekstur yang sangat nikmat, menjadi pilihan favorit keluarga untuk dinikmati kapan saja.',
      img: '/osarasir.png',
      badge: '100% Halal'
    },
    {
      id: 'C',
      name: 'Peyek',
      price: 'Rp 12.500 / pack',
      desc: 'Peyek renyah bertabur bumbu rempah pilihan yang kaya cita rasa. Diproduksi fresh setiap hari untuk menjaga krispi dan kelezatannya sampai ke tangan Anda.',
      img: '/peyek.png',
      badge: 'Fresh Setiap Hari'
    },
    {
      id: 'D',
      name: 'Widaran',
      price: 'Rp 12.500 / pack',
      desc: 'Camilan klasik yang gurih dan renyah di setiap gigitan. Dibuat dengan bahan-bahan alami berkualitas tinggi, menjadikannya camilan yang aman dan bikin nagih.',
      img: '/widaran.png', // <-- DIBERSIHKAN: Sudah ditambah garis miring (/)
      badge: 'Rasa Autentik'
    },
    {
      id: 'E',
      name: 'Kripik Tempe',
      price: 'Rp 11.000 / pack',
      desc: 'Olahan tempe pilihan yang diiris tipis dan digoreng hingga renyah sempurna dengan baluran bumbu rempah spesial. Bebas dari pengawet dan kaya nutrisi.',
      img: '/keripiktempe.png',
      badge: 'Bahan Alami'
    }
  ];

  return (
    <div className="app-container">
      {/* Background Elemen Lingkaran Putih/Warna Abstrak */}
      <div className="abstract-bg-shapes"></div>
      <div className="floating-circle-extra"></div>

      {/* HEADER SECTION */}
      <header className="hero-header">
        <div className="header-badge">✨ Welcome to Bolu Emprit 3D</div>
        <h1 className="main-title">Bolu Emprit 3D</h1>
        <p className="subtitle">Sentuhan Tradisi dengan Gaya dan Cita Rasa yang Modern</p>
        
        {/* INFO LEGALITAS / PIRT & KEUNGGULAN UTAMA */}
        <div className="legal-badges-container">
          <span className="legal-badge">📜 P-IRT No. 2.06.3308.02.2536-25</span>
          <span className="legal-badge">🏡 Diproduksi Rumahan (Home Industry)</span>
          <span className="legal-badge">🌿 100% Bahan Alami Tanpa Pengawet</span>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="card about-card">
          <h2>Kisah & Sejarah Kami</h2>
          <p>
            Berawal dari usaha rumahan yang sederhana, <strong>Bolu Emprit 3D</strong> didirikan dengan semangat untuk melestarikan kuliner tradisional dan memperkenalkannya kepada generasi muda. Melalui kreativitas tanpa batas, kami terus berinovasi mengembangkan berbagai produk berkualitas tinggi yang disesuaikan dengan selera modern masa kini.
          </p>
          <p>
            Kami selalu berkomitmen untuk menggunakan bahan-bahan pilihan terbaik tanpa zat pengawet buatan, serta menjaga kebersihan proses produksi demi menghadirkan produk yang aman, lezat, dan berkelas bagi seluruh pelanggan setia kami.
          </p>
          
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <h4>Terdaftar P-IRT</h4>
              <p>Higienis & Legalitas Resmi</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👩‍🍳</span>
              <h4>Homemade</h4>
              <p>Dimasak fresh setiap hari</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚫</span>
              <h4>Tanpa Pengawet</h4>
              <p>Aman untuk seluruh keluarga</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">
        <h2 className="section-title">Koleksi Produk Kami</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="card product-card">
              <div className="product-image-wrapper">
                <img 
                  src={process.env.PUBLIC_URL + product.img} 
                  alt={product.name} 
                  className="product-image" 
                />
                <span className="product-tag">{product.price}</span>
                <span className="product-badge-overlay">{product.badge}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CONTACT SECTION */}
      <footer className="footer-section">
        <div className="card footer-card">
          <h2>Informasi Pemesanan & Kontak</h2>
          
          <p className="address-text">
            📍 <strong>Alamat Produksi:</strong> Diri, Salaman, Kec. Salaman, Kabupaten Magelang, Jawa Tengah 56162
          </p>

          {/* CATATAN / INFORMASI KETENTUAN PEMESANAN */}
          <div className="order-notes-box">
            <h4>📌 Catatan Ketentuan Harga & Pemesanan:</h4>
            <ul>
              <li>
                <strong>Pemesanan Khusus & Grosir:</strong> Kami melayani pemesanan skala besar (grosir), kemasan ball, ataupun *custom request* dengan penawaran harga khusus.
              </li>
              <li>
                <strong>Penyesuaian Harga:</strong> Harga produk yang tertera dapat berubah sewaktu-waktu mengikuti ketersediaan bahan baku.
              </li>
              <li>
                <strong>Konfirmasi Ketersediaan:</strong> Untuk memastikan ketersediaan stok produk terbaru serta mendapatkan rincian harga sesuai jumlah pesanan Anda, mohon menghubungi layanan pelanggan kami.
              </li>
            </ul>
          </div>

          <a 
            href="https://wa.me/6288221525781?text=Halo%20Bolu%20Emprit%203D,%20saya%20ingin%20bertanya%20mengenai%20ketersediaan%20stok%20dan%20penawaran%20harga%20produk." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn"
          >
            💬 Hubungi Layanan WhatsApp (0882-2152-5781)
          </a>

          <p className="copyright">© 2026 Bolu Emprit 3D. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;