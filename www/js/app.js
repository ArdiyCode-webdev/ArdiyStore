// ===== DATA =====
const USERS = [
  { nickname: 'ardiy', password: 'ardiy123' },
  { nickname: 'admin', password: 'admin123' },
  { nickname: 'user', password: 'user123' },
];

const CITIES_DATA = [
  { emoji: '🏙️', name: 'Jakarta', count: 18 },
  { emoji: '🌊', name: 'Surabaya', count: 14 },
  { emoji: '🏔️', name: 'Bandung', count: 12 },
  { emoji: '🌴', name: 'Bali', count: 11 },
  { emoji: '🎭', name: 'Yogyakarta', count: 9 },
  { emoji: '🌿', name: 'Medan', count: 8 },
  { emoji: '🐠', name: 'Makassar', count: 7 },
  { emoji: '🏛️', name: 'Semarang', count: 6 },
  { emoji: '🎋', name: 'Malang', count: 5 },
  { emoji: '⛵', name: 'Lombok', count: 5 },
  { emoji: '🏯', name: 'Solo', count: 4 },
  { emoji: '🌺', name: 'Manado', count: 4 },
];

const PRODUCT_IMAGES = {
  fashion: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&q=80',
    'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80',
    'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&q=80',
  ],
  elektronik: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
    'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80',
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80',
  ],
  kuliner: [
    'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    'https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=400&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80',
  ],
  kecantikan: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80',
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80',
    'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=80',
    'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=400&q=80',
  ],
  olahraga: [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&q=80',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80',
    'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&q=80',
    'https://images.unsplash.com/photo-1556906781-9a412961d28c?w=400&q=80',
    'https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=400&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    'https://images.unsplash.com/photo-1544216717-3bbf52512659?w=400&q=80',
  ],
  rumah: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&q=80',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  ],
  otomotif: [
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
    'https://images.unsplash.com/photo-1506015391300-4802dc74cb6b?w=400&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    'https://images.unsplash.com/photo-1558980664-1db506751c6c?w=400&q=80',
    'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=400&q=80',
    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&q=80',
    'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=400&q=80',
  ],
};

const PRODUCT_DESCRIPTIONS = [
  'Produk premium berkualitas tinggi yang dirancang untuk memenuhi kebutuhan gaya hidup modern Anda dengan desain elegan dan bahan terbaik.',
  'Hadir dengan kualitas terjamin dan harga yang kompetitif, produk ini menjadi pilihan utama jutaan pelanggan setia ArdiyStore.',
  'Dibuat dari bahan pilihan dengan standar kualitas internasional, memberikan kenyamanan dan ketahanan yang luar biasa.',
  'Desain inovatif dengan teknologi terkini, sempurna untuk mendukung aktivitas sehari-hari Anda.',
  'Produk unggulan dari koleksi terbaru ArdiyStore, menggabungkan fungsi dan estetika dalam satu paket yang sempurna.',
  'Kualitas premium dengan harga yang terjangkau, menjadikan setiap pembelian sebagai investasi terbaik untuk Anda.',
];

// ===== GENERATE 105 PRODUCTS =====
function generateProducts() {
  const categories = ['fashion', 'elektronik', 'kuliner', 'kecantikan', 'olahraga', 'rumah', 'otomotif'];
  const cities = ['Jakarta', 'Surabaya', 'Bandung', 'Bali', 'Yogyakarta', 'Medan', 'Makassar', 'Semarang', 'Malang', 'Lombok', 'Solo', 'Manado'];
  const badges = ['new', 'hot', 'sale', null, null, null];

  const productNames = {
    fashion: [
      'Kemeja Batik Premium', 'Dress Batik Modern', 'Jaket Kulit Asli', 'Sneakers Limited Edition',
      'Tas Kulit Handmade', 'Sandal Ukir Bali', 'Kebaya Modern', 'Kaos Distro Eksklusif',
      'Celana Jeans Slim Fit', 'Topi Rajut Artisan', 'Syal Sutra Mewah', 'Sepatu Formal Premium',
      'Rok Batik Kontemporer', 'Jaket Denim Vintage', 'Baju Tenun NTT',
    ],
    elektronik: [
      'Smartphone Gaming Pro', 'Earbuds Wireless Elite', 'Laptop Ultrabook Tipis', 'Smartwatch Fitness',
      'Kamera Mirrorless HD', 'Power Bank 20000mAh', 'Speaker Bluetooth Waterproof', 'Drone Mini FPV',
      'Tab Android 10"', 'Keyboard Mekanikal RGB', 'Mouse Gaming Wireless', 'Webcam 4K Ultra',
      'SSD External 1TB', 'Router WiFi 6 AX', 'Headphone Noise Cancel',
    ],
    kuliner: [
      'Kopi Arabika Toraja', 'Sambal Matah Bali Premium', 'Rendang Daging Sapi', 'Keripik Tempe Crispy',
      'Dodol Garut Original', 'Kecap Manis Jawa', 'Mie Aceh Instant', 'Abon Ikan Tuna',
      'Cokelat Kakao Sulawesi', 'Teh Pucuk Gunung', 'Pisang Keju Roll', 'Bakpia Pathok Asli',
      'Sirup Markisa Manado', 'Kerupuk Udang Sidoarjo', 'Emping Melinjo Banten',
    ],
    kecantikan: [
      'Serum Vitamin C Brightening', 'Sunscreen SPF 50+', 'Lipstik Velvet Matte', 'Toner Hyaluronic Acid',
      'Masker Wajah Charcoal', 'Body Lotion Whitening', 'Parfum Floral Elegan', 'Foundation Full Coverage',
      'Pelembab Aloe Vera Organic', 'Eye Cream Anti-Aging', 'Blush On Natural Glow', 'BB Cream Multifungsi',
      'Micellar Water Cleansing', 'Hair Serum Argan Oil', 'Lip Balm Madu Alami',
    ],
    olahraga: [
      'Sepatu Running Pro X', 'Jersey Futsal Dryfit', 'Tas Gym Multifungsi', 'Barbel Set 20kg',
      'Yoga Mat Premium 6mm', 'Raket Badminton Carbon', 'Bola Basket Grip Pro', 'Gloves Tinju Muay Thai',
      'Sepeda Lipat Urban', 'Helm Sepeda Safety', 'Treadmill Mini Portable', 'Jump Rope Speed Steel',
      'Knee Support Sport', 'Bottle Tumbler Protein', 'Resistance Band Set',
    ],
    rumah: [
      'Sofa Minimalis Modern', 'Lampu LED Dekoratif', 'Tanaman Hias Monstera', 'Set Peralatan Dapur',
      'Bantal Memory Foam', 'Gorden Blackout Premium', 'Rak Dinding Kayu Jati', 'Cermin Dekoratif Gold',
      'Meja Kerja Ergonomis', 'Kursi Gaming Lumbar', 'Aromaterapi Diffuser', 'Karpet Motif Batik',
      'Tempat Tidur Lipat', 'Lemari Pakaian Sliding', 'Air Purifier HEPA Filter',
    ],
    otomotif: [
      'Helm Full Face SNI', 'Sarung Tangan Balap', 'Cover Motor Waterproof', 'Parfum Mobil Luxury',
      'Kamera Dashcam 4K', 'Charger Mobil USB-C', 'Wax Polish Premium', 'Aksesori Interior LED',
      'Aki Motor Maintenance Free', 'Knalpot Racing Titanium', 'Oli Motor Full Synthetic', 'Ban Tubeless Racing',
      'Sticker Carbon Fiber', 'GPS Tracker Kendaraan', 'Tool Kit Motor Lengkap',
    ],
  };

  const products = [];
  let id = 1;

  categories.forEach(cat => {
    const names = productNames[cat];
    const imgs = PRODUCT_IMAGES[cat];
    const count = cat === 'fashion' ? 16 : cat === 'elektronik' ? 16 : 11;

    for (let i = 0; i < count && id <= 105; i++) {
      const basePrice = Math.floor(Math.random() * 800000) + 50000;
      const discounted = Math.random() > 0.5;
      const finalPrice = discounted ? Math.floor(basePrice * 0.7) : basePrice;
      const rating = (3.5 + Math.random() * 1.5).toFixed(1);
      const reviewCount = Math.floor(Math.random() * 900) + 50;

      products.push({
        id: id++,
        name: names[i % names.length] + (i >= names.length ? ` ${Math.ceil((i - names.length + 1) / names.length) + 1}` : ''),
        category: cat,
        city: cities[Math.floor(Math.random() * cities.length)],
        price: finalPrice,
        originalPrice: discounted ? basePrice : null,
        image: imgs[i % imgs.length],
        badge: badges[Math.floor(Math.random() * badges.length)],
        rating: parseFloat(rating),
        reviews: reviewCount,
        description: PRODUCT_DESCRIPTIONS[Math.floor(Math.random() * PRODUCT_DESCRIPTIONS.length)],
      });
    }
  });

  return products;
}

const PRODUCTS = generateProducts();
let cart = [];
let currentFilter = 'all';
let currentSearch = '';
let currentModalProduct = null;

// ===== FORMAT PRICE =====
function formatPrice(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

// ===== RENDER STARS =====
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star${i > Math.round(rating) ? ' empty' : ''}">★</span>`;
  }
  return html;
}

// ===== RENDER PRODUCTS =====
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');

  // Remove old cards
  Array.from(grid.querySelectorAll('.product-card')).forEach(c => c.remove());

  if (list.length === 0) {
    noResults.classList.add('show');
    return;
  }
  noResults.classList.remove('show');

  list.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${(idx % 20) * 40}ms`;
    card.dataset.category = p.category;
    card.dataset.id = p.id;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80'">
        ${p.badge ? `<div class="product-badge ${p.badge}">${p.badge === 'new' ? '✨ Baru' : p.badge === 'hot' ? '🔥 Hot' : '💸 Sale'}</div>` : ''}
        <div class="product-wishlist" onclick="toggleWishlist(this, event)">🤍</div>
        <div class="product-quick-add" onclick="addToCartById(${p.id}, event)">+ Keranjang</div>
      </div>
      <div class="product-info">
        <div class="product-city">📍 ${p.city}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
        <div class="product-rating">
          ${renderStars(p.rating)}
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${p.originalPrice ? `<div class="price-original">${formatPrice(p.originalPrice)}</div>` : ''}
            <div class="price-current">${formatPrice(p.price)}</div>
          </div>
          <div class="product-add-btn" onclick="addToCartById(${p.id}, event)">+</div>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-add-btn') && !e.target.closest('.product-wishlist') && !e.target.closest('.product-quick-add')) {
        openModal(p);
      }
    });

    grid.appendChild(card);
  });
}

// ===== FILTER / SEARCH =====
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const catMatch = currentFilter === 'all' || p.category === currentFilter;
    const searchMatch = !currentSearch || p.name.toLowerCase().includes(currentSearch.toLowerCase()) || p.city.toLowerCase().includes(currentSearch.toLowerCase());
    return catMatch && searchMatch;
  });
}

function filterProducts(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(getFilteredProducts());
}

function searchProducts(val) {
  currentSearch = val;
  renderProducts(getFilteredProducts());
}

// ===== CART =====
function addToCartById(id, e) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCart();
  showToast('✅', 'Ditambahkan!', `${p.name} masuk keranjang`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCart();
}

function updateCart() {
  document.getElementById('cartCount').textContent = cart.reduce((s, x) => s + x.qty, 0);
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div class="cart-empty-text">Keranjang masih kosong</div></div>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name} ${item.qty > 1 ? `x${item.qty}` : ''}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartSidebar').classList.toggle('open');
}

function checkout() {
  if (cart.length === 0) {
    showToast('⚠️', 'Keranjang Kosong', 'Tambahkan produk terlebih dahulu');
    return;
  }
  cart = [];
  updateCart();
  toggleCart();
  showToast('🎉', 'Pesanan Berhasil!', 'Terima kasih telah berbelanja di ArdiyStore');
}

// ===== WISHLIST =====
function toggleWishlist(el, e) {
  e.stopPropagation();
  el.classList.toggle('active');
  el.textContent = el.classList.contains('active') ? '❤️' : '🤍';
}

// ===== MODAL =====
function openModal(p) {
  currentModalProduct = p;
  document.getElementById('modalImg').src = p.image;
  document.getElementById('modalCat').textContent = p.category.toUpperCase();
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalCity').textContent = '📍 ' + p.city;
  document.getElementById('modalDesc').textContent = p.description;
  document.getElementById('modalPrice').textContent = formatPrice(p.price);
  document.getElementById('modalAddBtn').onclick = () => {
    addToCartById(p.id, null);
    closeModal();
  };
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
  if (!e || e.target.id === 'modalOverlay') {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

// ===== TOAST =====
function showToast(icon, title, desc) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-text"><div class="toast-title">${title}</div><div class="toast-desc">${desc}</div></div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== LOGIN =====
function doLogin() {
  const nick = document.getElementById('nicknameInput').value.trim();
  const pass = document.getElementById('passwordInput').value;
  const errorEl = document.getElementById('loginError');

  const user = USERS.find(u => u.nickname.toLowerCase() === nick.toLowerCase() && u.password === pass);
  if (!user) {
    errorEl.classList.add('show');
    document.getElementById('passwordInput').value = '';
    return;
  }
  errorEl.classList.remove('show');
  document.getElementById('userBadgeName').textContent = user.nickname;
  document.getElementById('loginOverlay').classList.add('hidden');
  document.getElementById('mainApp').classList.add('visible');
  showToast('🎉', `Selamat datang, ${user.nickname}!`, 'Nikmati pengalaman belanja terbaik di ArdiyStore');
}

function doLogout() {
  document.getElementById('loginOverlay').classList.remove('hidden');
  document.getElementById('mainApp').classList.remove('visible');
  document.getElementById('nicknameInput').value = '';
  document.getElementById('passwordInput').value = '';
  cart = [];
  updateCart();
}

// ===== TOGGLE PASSWORD =====
document.getElementById('togglePw').addEventListener('click', function () {
  const inp = document.getElementById('passwordInput');
  inp.type = inp.type === 'password' ? 'text' : 'password';
  this.textContent = inp.type === 'password' ? '👁️' : '🙈';
});

// Allow Enter key on login
document.getElementById('passwordInput').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
document.getElementById('nicknameInput').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('passwordInput').focus(); });

// ===== RENDER CITIES =====
function renderCities() {
  const grid = document.getElementById('citiesGrid');
  CITIES_DATA.forEach(c => {
    const card = document.createElement('div');
    card.className = 'city-card';
    card.innerHTML = `
      <div class="city-emoji">${c.emoji}</div>
      <div class="city-name">${c.name}</div>
      <div class="city-count">${c.count} produk</div>
    `;
    card.addEventListener('click', () => {
      currentFilter = 'all';
      currentSearch = c.name;
      document.getElementById('searchInput').value = c.name;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn').classList.add('active');
      renderProducts(getFilteredProducts());
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    grid.appendChild(card);
  });
}

// ===== RENDER MARQUEE =====
function renderMarquee() {
  const items = [
    'FREE ONGKIR', 'PROMO HARI INI', 'DISKON 50%', 'PRODUK BARU', 'GARANSI RESMI',
    'PENGIRIMAN CEPAT', 'BAYAR DI TEMPAT', 'RETURN POLICY', 'MEMBER REWARD', 'FLASH SALE',
    'ARDIYSTORE', 'KUALITAS PREMIUM', 'HARGA TERBAIK', 'BELANJA AMAN', '50K PELANGGAN',
  ];
  const doubled = [...items, ...items];
  const track = document.getElementById('marqueeTrack');
  doubled.forEach(item => {
    track.innerHTML += `<div class="marquee-item">${item}<span class="marquee-dot"></span></div>`;
  });
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const h = document.getElementById('mainHeader');
  if (h) {
    h.style.background = window.scrollY > 80 ? 'rgba(10,10,15,0.98)' : 'rgba(10,10,15,0.85)';
  }
});

// ===== INIT =====
renderCities();
renderMarquee();
renderProducts(PRODUCTS);
