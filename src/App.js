import React from 'react';
import './App.css';

function App() {
  // Data produk disederhanakan menjadi Produk A, B, C, D dengan deskripsi ~400 karakter
  const products = [
    {
      id: 'A',
      name: 'Produk A',
      desc: 'Temukan keunikan dan kualitas terbaik dari Produk A yang dirancang khusus untuk memenuhi kebutuhan harian Anda. Kami menggunakan bahan-bahan pilihan berkualitas tinggi yang diproses secara higienis untuk menjamin kepuasan Anda dalam setiap pemakaian. Dengan desain yang elegan dan fungsional, produk ini tidak hanya memberikan manfaat optimal tetapi juga menambah nilai estetika dalam aktivitas Anda sehari-hari.',
      img: 'produk_1.jpg'
    },
    {
      id: 'B',
      name: 'Produk B',
      desc: 'Produk B hadir sebagai solusi inovatif yang menggabungkan kepraktisan dengan hasil yang maksimal. Dibuat dengan standar kualitas ketat dan dedikasi penuh, produk ini menawarkan performa handal yang dapat Anda andalkan kapan saja. Nikmati pengalaman berbeda yang lebih memuaskan bersama Produk B, pilihan cerdas bagi Anda yang mengutamakan efisiensi dan kualitas tanpa kompromi dalam kehidupan.',
      img: 'produk_2.jpg'
    },
    {
      id: 'C',
      name: 'Produk C',
      desc: 'Hadirkan kesempurnaan baru dalam rutinitas Anda dengan menggunakan Produk C. Setiap detail dari produk ini dirancang dengan penuh ketelitian untuk memastikan Anda mendapatkan pengalaman terbaik yang tidak terlupakan. Produk C sangat cocok untuk melengkapi berbagai momen spesial Anda, memberikan kenyamanan ekstra, serta menjadi andalan baru keluarga yang terbukti aman dan berkualitas tinggi.',
      img: 'produk_3.jpg'
    },
    {
      id: 'D',
      name: 'Produk D',
      desc: 'Produk D merupakan mahakarya terbaru kami yang dipersembahkan khusus untuk Anda yang mencari keistimewaan sejati. Memadukan estetika modern dengan fungsi yang luar biasa, produk ini siap mempermudah hari-hari Anda dengan cara yang menyenangkan. Jadikan Produk D sebagai bagian dari gaya hidup modern Anda dan rasakan sendiri perbedaan kualitas nyata yang kami tawarkan dalam setiap detailnya.',
      img: 'produk_4.jpg'
    }
  ];

  return (
    <div className="app-container">
      {/* HEADER SECTION */}
      <header className="hero-header">
        <div className="header-badge">✨ Welcome to Bolu Emprit 3D</div>
        <h1 className="main-title">Bolu Emprit 3D</h1>
        <p className="subtitle">Sentuhan Tradisi dengan Gaya dan Cita Rasa yang Modern</p>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="card about-card">
          <h2>Kisah & Sejarah Kami</h2>
          <p>
            Berawal dari usaha rumahan yang sederhana, <strong>Bolu Emprit 3D</strong> didirikan dengan semangat untuk melestarikan kuliner tradisional dan memperkenalkannya kepada generasi muda. Melalui kreativitas tanpa batas, kami terus berinovasi mengembangkan berbagai produk berkualitas tinggi yang disesuaikan dengan selera modern masa kini.
          </p>
          <p>
            Kami selalu berkomitmen untuk menggunakan bahan-bahan pilihan terbaik dan menjaga kebersihan proses produksi demi menghadirkan produk yang aman, lezat, dan berkelas bagi seluruh pelanggan setia kami.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">
        <h2 className="section-title">Koleksi Produk Kami</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="card product-card">
              <div className="product-image-wrapper">
                <img src={product.img} alt={product.name} className="product-image" />
                <span className="product-tag">{product.name}</span>
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
          <h2>Kontak & Alamat</h2>
          <p className="address-text">
            📍 <strong>Alamat:</strong> Jl. Estetika Cerah No. 45, Blok G-Z, Kota Kreatif, Indonesia
          </p>
          
          <a 
            href="https://wa.me/6285713334967?text=Halo%20Bolu%20Emprit%203D,%20saya%20tertarik%20untuk%20tanya-tanya%20produk!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn"
          >
            💬 Chat via WhatsApp (0857-1333-4967)
          </a>
          <p className="copyright">© 2026 Bolu Emprit 3D. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;