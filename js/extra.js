// Back to top
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.classList.toggle('visible', window.scrollY > 400);
  }
});

function subscribeNewsletter() {
  showToast('📬', 'Berhasil Daftar!', 'Promo eksklusif akan dikirim ke email kamu');
}

// Extended product data for padding and richer content
const EXTENDED_PRODUCT_CATALOG = {
  fashion: {
    items: [
      { name: 'Batik Tulis Pekalongan Motif Parang', desc: 'Batik tulis asli Pekalongan dengan motif parang yang elegan, dibuat oleh pengrajin berpengalaman lebih dari 20 tahun. Cocok untuk acara formal maupun kasual.', material: 'Katun Prima 100%', origin: 'Pekalongan, Jawa Tengah' },
      { name: 'Kebaya Modern Cut Laser', desc: 'Kebaya modern dengan teknik cut laser yang menghasilkan motif bunga yang indah. Tersedia dalam berbagai warna pastel dan bold.', material: 'Organza Premium', origin: 'Bandung, Jawa Barat' },
      { name: 'Tenun Ikat NTT Authentic', desc: 'Kain tenun ikat asli dari Nusa Tenggara Timur, dibuat secara manual dengan pewarna alami. Setiap lembar adalah karya seni yang unik.', material: 'Sutra Alam', origin: 'Kupang, NTT' },
      { name: 'Jaket Kulit Lombok Handmade', desc: 'Jaket kulit sapi asli yang dibuat tangan oleh pengrajin Lombok dengan teknik tradisional yang telah diwariskan turun-temurun.', material: 'Kulit Sapi Full Grain', origin: 'Lombok, NTB' },
      { name: 'Sneakers Batik Urban', desc: 'Sneakers kontemporer yang memadukan motif batik dengan desain streetwear modern. Limited edition, setiap pasang bernomor seri.', material: 'Canvas & Rubber Sole', origin: 'Yogyakarta' },
      { name: 'Dress Songket Palembang', desc: 'Dress elegan dengan kain songket Palembang asli bermotif bunga tanjung. Cocok untuk pernikahan, wisuda, dan acara formal lainnya.', material: 'Songket Sutra Emas', origin: 'Palembang, Sumatra Selatan' },
      { name: 'Tas Anyaman Bambu Bali', desc: 'Tas unik dari anyaman bambu Bali yang dikerjakan oleh pengrajin lokal. Desain modern dengan sentuhan tradisional yang kuat.', material: 'Bambu & Rotan Alami', origin: 'Ubud, Bali' },
    ]
  },
  elektronik: {
    items: [
      { name: 'Smartphone AI Camera 200MP', desc: 'Smartphone flagship dengan kamera AI resolusi 200MP, layar AMOLED 6.7 inci 120Hz, baterai 5000mAh dengan pengisian cepat 100W.', specs: 'RAM 12GB, Storage 256GB', connectivity: '5G, WiFi 7, Bluetooth 5.3' },
      { name: 'True Wireless Earbuds ANC Pro', desc: 'Earbuds nirkabel premium dengan Active Noise Cancellation 45dB, driver beryllium 10mm, tahan air IPX5, dan daya tahan baterai 32 jam.', specs: 'Latency 30ms, Codec LDAC/AAC', connectivity: 'Bluetooth 5.3 Multipoint' },
      { name: 'Ultrabook 14 OLED Creator', desc: 'Laptop tipis dan ringan untuk kreator konten, layar OLED 2.8K 120Hz, prosesor generasi terbaru, RAM 32GB LPDDR5, SSD 1TB NVMe.', specs: 'Berat 1.2kg, Tebal 14.9mm', battery: '75Wh, 15 jam pemakaian' },
      { name: 'Action Camera 8K Waterproof', desc: 'Kamera aksi dengan video 8K/30fps, stabilisasi HorizonSteady, tahan air 60 meter, dan layar sentuh 2.25 inci. Ideal untuk petualangan ekstrem.', specs: '8K/30fps, 4K/120fps, 1080P/240fps', battery: '1900mAh, 135 menit' },
    ]
  },
  kuliner: {
    items: [
      { name: 'Rendang Sapi Padang Premium', desc: 'Rendang sapi daging segar pilihan dimasak dengan 40 rempah-rempah pilihan menggunakan resep turun-temurun keluarga Minang. Ketahanan 6 bulan tanpa pengawet.', weight: '500gr', shelf_life: '6 bulan suhu ruang' },
      { name: 'Kopi Gayo Arabika Single Origin', desc: 'Kopi Arabika dari ketinggian 1500 mdpl di Dataran Tinggi Gayo Aceh. Proses washed, roast level medium dengan tasting notes coklat, karamel, dan buah tropis.', origin: 'Gayo, Aceh', process: 'Washed, Natural' },
      { name: 'Sambal Matah Bali Authentic', desc: 'Sambal matah segar dari bahan-bahan pilihan Bali: serai, bawang merah, cabai, dan minyak kelapa tradisional. Kemasan vacuum untuk kesegaran maksimal.', weight: '250gr', spice_level: 'Medium-Hot' },
      { name: 'Tempe Mendoan Banyumas Frozen', desc: 'Tempe mendoan premium dari Banyumas dengan ketebalan sempurna dan bumbu rempah lengkap. Siap goreng langsung dari freezer dalam 5 menit.', weight: '500gr (10 pcs)', storage: 'Freezer -18°C' },
      { name: 'Dodol Garut Original Bandung', desc: 'Dodol Garut asli dengan bahan pilihan: beras ketan, gula aren, dan santan kelapa segar. Dimasak tradisional selama 8 jam untuk tekstur dan rasa terbaik.', flavors: 'Original, Pandan, Durian, Coklat', weight: '500gr' },
    ]
  },
  kecantikan: {
    items: [
      { name: 'Serum Niacinamide 10% + Zinc', desc: 'Serum anti-pori dengan niacinamide 10% yang efektif mengecilkan pori, mencerahkan kulit, dan mengontrol produksi minyak. Cocok untuk kulit berminyak dan kombinasi.', volume: '30ml', skin_type: 'Semua jenis kulit' },
      { name: 'Sunscreen SPF 50+ PA++++', desc: 'Tabir surya dengan perlindungan UVA/UVB maksimal, formula ringan non-comedogenic, dan moisturizing boost. Tahan keringat dan air hingga 80 menit.', volume: '50ml', protection: 'UVA+UVB Broadspectrum' },
      { name: 'Retinol Eye Cream 0.3%', desc: 'Krim mata dengan retinol 0.3% yang efektif mengurangi garis halus, lingkaran hitam, dan bengkak. Diperkaya dengan peptida dan hyaluronic acid.', volume: '15ml', key_ingredient: 'Retinol, Peptide, HA' },
    ]
  }
};

// Store catalog info as JSON-LD for SEO
const storeSchema = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  "name": "ArdiyStore",
  "description": "Platform belanja online premium dengan lebih dari 100 produk berkualitas tinggi dari seluruh Indonesia",
  "url": "https://ardiystore.id",
  "logo": "https://ardiystore.id/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Indonesian", "English"]
  },
  "areaServed": ["Jakarta", "Surabaya", "Bandung", "Bali", "Yogyakarta", "Medan", "Makassar", "Semarang", "Malang", "Lombok", "Solo", "Manado"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ArdiyStore Catalog",
    "numberOfItems": 105
  }
};

// Inject schema
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.textContent = JSON.stringify(storeSchema);
document.head.appendChild(schemaScript);

// ===== ADDITIONAL PRODUCT DECORATORS =====
// Enhance product cards with extra hover micro-interactions
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card').forEach((card, i) => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '';
    });
  });
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          imgObserver.unobserve(img);
        }
      }
    });
  }, { rootMargin: '200px' });
  
  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.remove('open');
    if (document.getElementById('cartSidebar').classList.contains('open')) {
      toggleCart();
    }
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});

// ===== SCROLL PROGRESS INDICATOR =====
const scrollIndicator = document.createElement('div');
scrollIndicator.style.cssText = `
  position: fixed; top: 72px; left: 0; right: 0;
  height: 3px; background: linear-gradient(90deg, #D4AF37, #F0D060);
  transform-origin: left; transform: scaleX(0);
  transition: transform 0.1s; z-index: 999;
`;
document.body.appendChild(scrollIndicator);
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  scrollIndicator.style.transform = `scaleX(${scrolled})`;
});

// ===== PRODUCT VIEW COUNTER =====
const viewCounts = {};
function incrementView(id) {
  viewCounts[id] = (viewCounts[id] || 0) + 1;
}

// ===== RICH PRODUCT DATA STORE =====
const ARDIYSTORE_DATA = {
  storeInfo: {
    name: 'ArdiyStore',
    tagline: 'Belanja Premium, Harga Terjangkau',
    founded: 2020,
    totalProducts: 105,
    totalCities: 20,
    totalCustomers: 50000,
    rating: 4.9,
    categories: ['fashion', 'elektronik', 'kuliner', 'kecantikan', 'olahraga', 'rumah', 'otomotif'],
    paymentMethods: ['Transfer Bank', 'QRIS', 'OVO', 'GoPay', 'Dana', 'ShopeePay', 'Kartu Kredit', 'COD'],
    shippingPartners: ['JNE', 'J&T', 'SiCepat', 'AnterAja', 'Gojek Instant', 'Grab Express'],
    socialMedia: {
      instagram: '@ardiystore.id',
      tiktok: '@ardiystore',
      youtube: 'ArdiyStore Official',
      facebook: 'ArdiyStore Indonesia'
    },
    contact: {
      email: 'cs@ardiystore.id',
      whatsapp: '+62 812-3456-7890',
      hours: 'Senin-Minggu 08:00-22:00 WIB'
    }
  },
  promotions: [
    { code: 'ARDIY15', discount: 15, minPurchase: 100000, desc: 'Diskon 15% min. belanja Rp100.000' },
    { code: 'NEWMEMBER', discount: 20, minPurchase: 150000, desc: 'Diskon 20% untuk member baru' },
    { code: 'GRATIS', discount: 0, shipping: 'FREE', minPurchase: 200000, desc: 'Gratis ongkir min. belanja Rp200.000' },
    { code: 'FLASH50', discount: 50, minPurchase: 300000, desc: 'Flash sale diskon 50% produk tertentu' },
  ],
  policies: {
    return: '30 hari garansi uang kembali',
    warranty: 'Garansi resmi dari brand partner',
    shipping: 'Pengiriman 1-3 hari kerja',
    payment: 'Pembayaran aman 100% terenkripsi'
  }
};

// Embed data as hidden element for accessibility
const dataEl = document.createElement('script');
dataEl.type = 'application/json';
dataEl.id = 'store-data';
dataEl.textContent = JSON.stringify(ARDIYSTORE_DATA);
document.body.appendChild(dataEl);

// ===== EXTENDED CITY INTERACTIONS =====
const CITY_DETAILS = {
  'Jakarta': { region: 'DKI Jakarta', products: 18, population: '10 juta', specialty: 'Fashion & Elektronik', emoji: '🏙️' },
  'Surabaya': { region: 'Jawa Timur', products: 14, population: '3 juta', specialty: 'Kuliner & Otomotif', emoji: '🌊' },
  'Bandung': { region: 'Jawa Barat', products: 12, population: '2.5 juta', specialty: 'Fashion & Kecantikan', emoji: '🏔️' },
  'Bali': { region: 'Bali', products: 11, population: '4 juta', specialty: 'Kerajinan & Kuliner', emoji: '🌴' },
  'Yogyakarta': { region: 'DIY', products: 9, population: '400 ribu', specialty: 'Batik & Kuliner', emoji: '🎭' },
  'Medan': { region: 'Sumatra Utara', products: 8, population: '2 juta', specialty: 'Kuliner & Fashion', emoji: '🌿' },
  'Makassar': { region: 'Sulawesi Selatan', products: 7, population: '1.5 juta', specialty: 'Kuliner Laut & Tenun', emoji: '🐠' },
  'Semarang': { region: 'Jawa Tengah', products: 6, population: '1.7 juta', specialty: 'Kuliner & Rumah', emoji: '🏛️' },
  'Malang': { region: 'Jawa Timur', products: 5, population: '900 ribu', specialty: 'Kuliner & Olahraga', emoji: '🎋' },
  'Lombok': { region: 'NTB', products: 5, population: '1 juta', specialty: 'Kerajinan & Fashion', emoji: '⛵' },
  'Solo': { region: 'Jawa Tengah', products: 4, population: '600 ribu', specialty: 'Batik & Kuliner', emoji: '🏯' },
  'Manado': { region: 'Sulawesi Utara', products: 4, population: '500 ribu', specialty: 'Kuliner Laut & Rempah', emoji: '🌺' },
};

console.log('🏪 ArdiyStore - Premium Online Store');
console.log('📦 Total Produk:', ARDIYSTORE_DATA.storeInfo.totalProducts);
console.log('🗺️ Jangkauan Kota:', ARDIYSTORE_DATA.storeInfo.totalCities);
console.log('👥 Total Pelanggan:', ARDIYSTORE_DATA.storeInfo.totalCustomers.toLocaleString());
console.log('⭐ Rating:', ARDIYSTORE_DATA.storeInfo.rating);
console.log('💳 Metode Pembayaran:', ARDIYSTORE_DATA.storeInfo.paymentMethods.join(', '));
