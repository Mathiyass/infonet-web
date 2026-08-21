/**
 * Infonet / SellX Core eCommerce Engine
 * Real High-Resolution Studio Photography & Interactive eCommerce Suite
 */

// ==========================================
// 1. HIGH-DEFINITION REAL PRODUCT DATABASE
// ==========================================
const REAL_PRODUCTS_DB = [
    {
        id: 'p-101',
        title: 'ASUS ROG Strix SCAR 18 i9-14900HX 32GB RAM 1TB SSD RTX 4080 240Hz Nebula',
        category: 'gaming-laptops',
        brand: 'asus',
        price: 'Rs. 895,000.00',
        oldPrice: 'Rs. 940,000.00',
        numericPrice: 895000,
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 42,
        inStock: true,
        badge: 'Hot',
        specs: ['Intel Core i9-14900HX 24-Core', 'NVIDIA GeForce RTX 4080 12GB 175W', '32GB DDR5 5600MHz RAM', '18" QHD+ 240Hz 3ms DCI-P3 100%']
    },
    {
        id: 'p-102',
        title: 'Apple MacBook Pro 16" M3 Max 36GB Unified Memory 1TB SSD Space Black',
        category: 'laptops',
        brand: 'apple',
        price: 'Rs. 950,000.00',
        oldPrice: null,
        numericPrice: 950000,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 36,
        inStock: true,
        badge: 'New',
        specs: ['Apple M3 Max 14-Core CPU / 30-Core GPU', '36GB Unified Memory', '1TB Superfast NVMe SSD', '16.2" Liquid Retina XDR 120Hz']
    },
    {
        id: 'p-103',
        title: 'Dell XPS 15 9530 Intel Core i7-13700H 32GB RAM 1TB SSD RTX 4060 OLED Touch',
        category: 'laptops',
        brand: 'dell',
        price: 'Rs. 450,000.00',
        oldPrice: 'Rs. 480,000.00',
        numericPrice: 450000,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=85',
        rating: 4.8,
        reviewsCount: 28,
        inStock: true,
        badge: 'Sale',
        specs: ['Intel Core i7-13700H 14-Core', 'NVIDIA RTX 4060 8GB GDDR6', '32GB DDR5 4800MHz', '15.6" 3.5K OLED InfinityEdge Touch']
    },
    {
        id: 'p-104',
        title: 'Lenovo ThinkPad X1 Carbon Gen 11 Intel Core i7 16GB RAM 512GB SSD Ultrabook',
        category: 'laptops',
        brand: 'lenovo',
        price: 'Rs. 280,000.00',
        oldPrice: null,
        numericPrice: 280000,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=85',
        rating: 4.7,
        reviewsCount: 19,
        inStock: true,
        badge: 'Fixed',
        specs: ['Intel Core i7-1365U vPro', '16GB LPDDR5 RAM', '512GB PCIe Gen4 Performance SSD', '14.0" WUXGA Low Power IPS Carbon Fiber']
    },
    {
        id: 'p-105',
        title: 'NVIDIA GeForce RTX 4090 24GB GDDR6X ROG Strix OC Edition Graphics Card',
        category: 'components',
        brand: 'nvidia',
        price: 'Rs. 685,000.00',
        oldPrice: 'Rs. 720,000.00',
        numericPrice: 685000,
        image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 54,
        inStock: true,
        badge: 'Hot',
        specs: ['24GB GDDR6X 384-Bit Memory', '16,384 CUDA Cores / 2640 MHz Boost', 'Diecast Shroud & Axial-Tech Fans', 'PCIe 4.0 & 4K/8K HDR Ready']
    },
    {
        id: 'p-106',
        title: 'Custom Water-Cooled Intel Core i9-14900KS RTX 4090 64GB DDR5 Gaming Rig',
        category: 'desktop',
        brand: 'intel',
        price: 'Rs. 1,250,000.00',
        oldPrice: 'Rs. 1,320,000.00',
        numericPrice: 1250000,
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 23,
        inStock: true,
        badge: 'Custom',
        specs: ['Intel Core i9-14900KS 6.2GHz', 'Hardline Custom Watercooling Loop', 'NVIDIA GeForce RTX 4090 24GB', '64GB Corsair Dominator Titanium DDR5']
    },
    {
        id: 'p-107',
        title: 'ASUS ROG Swift PG32UCDM 32" 4K QD-OLED 240Hz 0.03ms HDR Gaming Monitor',
        category: 'monitors',
        brand: 'asus',
        price: 'Rs. 365,000.00',
        oldPrice: null,
        numericPrice: 365000,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 31,
        inStock: true,
        badge: 'OLED',
        specs: ['32-inch 4K UHD QD-OLED (3840x2160)', '240Hz Ultra-High Refresh Rate', '0.03ms Ultra-Low Response Time', 'G-Sync Compatible & HDR1000']
    },
    {
        id: 'p-108',
        title: 'Corsair Virtuoso RGB Wireless XT High-Fidelity Spatial Audio Gaming Headset',
        category: 'accessories',
        brand: 'corsair',
        price: 'Rs. 48,500.00',
        oldPrice: 'Rs. 54,000.00',
        numericPrice: 48500,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=85',
        rating: 4.9,
        reviewsCount: 65,
        inStock: true,
        badge: 'Wireless',
        specs: ['Simultaneous Wireless & Bluetooth', '50mm High-Density Neodymium Drivers', 'Dolby Atmos Spatial Audio', 'Broadcast-Grade Detachable Microphone']
    },
    {
        id: 'p-109',
        title: 'Custom GMMK Pro 75% Mechanical RGB Keyboard Lubed Hot-Swap Switches',
        category: 'accessories',
        brand: 'glorious',
        price: 'Rs. 42,900.00',
        oldPrice: null,
        numericPrice: 42900,
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 48,
        inStock: true,
        badge: 'Hot-Swap',
        specs: ['CNC Aluminum Gasket-Mounted Frame', 'Lubed Gateron Oil King Linear Switches', 'Rotary Encoder Knob & Per-Key RGB', 'PBT Dye-Sub Custom Keycaps']
    },
    {
        id: 'p-110',
        title: 'Intel Core i9-14900K 24 Cores up to 6.0 GHz Unlocked Desktop Processor',
        category: 'components',
        brand: 'intel',
        price: 'Rs. 210,000.00',
        oldPrice: null,
        numericPrice: 210000,
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=85',
        rating: 5,
        reviewsCount: 39,
        inStock: true,
        badge: 'Fixed',
        specs: ['24 Cores (8 P-cores + 16 E-cores)', '32 Threads up to 6.0 GHz Max Turbo', 'LGA 1700 Socket Compatibility', 'Intel UHD Graphics 770 Integrated']
    }
];

// ==========================================
// 2. STATE & STORAGE MANAGEMENT
// ==========================================
const STORE_KEY_CART = 'infonet_cart_items';
const STORE_KEY_WISHLIST = 'infonet_wishlist_items';

function getStoredCart() {
    try {
        return JSON.parse(localStorage.getItem(STORE_KEY_CART)) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(STORE_KEY_CART, JSON.stringify(cart));
    updateGlobalCartBadges();
}

function getStoredWishlist() {
    try {
        return JSON.parse(localStorage.getItem(STORE_KEY_WISHLIST)) || [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    localStorage.setItem(STORE_KEY_WISHLIST, JSON.stringify(list));
    updateGlobalWishlistBadges();
}

function updateGlobalCartBadges() {
    const cart = getStoredCart();
    const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    document.querySelectorAll('#cartBadge, .cart-badge-count').forEach(el => {
        el.textContent = count;
        el.classList.add('bump');
        setTimeout(() => el.classList.remove('bump'), 300);
    });
}

function updateGlobalWishlistBadges() {
    const list = getStoredWishlist();
    document.querySelectorAll('#wishlistBadge, .wishlist-badge-count').forEach(el => {
        el.textContent = list.length;
    });
}

// ==========================================
// 3. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s forwards';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3200);
}

// ==========================================
// 4. CART & WISHLIST ACTIONS
// ==========================================
function addToCart(product) {
    const cart = getStoredCart();
    const existing = cart.find(item => item.id === product.id || item.title === product.title);
    
    if (existing) {
        existing.quantity = (existing.quantity || 1) + (product.quantity || 1);
    } else {
        cart.push({
            id: product.id || 'p_' + Date.now(),
            title: product.title,
            price: product.price,
            numericPrice: product.numericPrice || parseInt((product.price || '').replace(/[^0-9]/g, '')) || 0,
            image: product.image,
            category: product.category || 'Hardware',
            quantity: product.quantity || 1
        });
    }

    saveCart(cart);
    showToast(`Added "${product.title.substring(0, 30)}..." to cart!`);
}

function toggleWishlist(product) {
    let list = getStoredWishlist();
    const idx = list.findIndex(item => item.id === product.id || item.title === product.title);
    if (idx >= 0) {
        list.splice(idx, 1);
        showToast(`Removed from Wishlist.`, 'fa-regular fa-heart');
    } else {
        list.push(product);
        showToast(`Saved to your Wishlist!`, 'fa-solid fa-heart');
    }
    saveWishlist(list);
}

function removeFromCart(index) {
    const cart = getStoredCart();
    if (index >= 0 && index < cart.length) {
        const removed = cart.splice(index, 1)[0];
        saveCart(cart);
        showToast(`Removed "${removed.title}" from cart.`, 'fa-solid fa-trash-can');
        renderCartPage();
    }
}

function updateCartQty(index, newQty) {
    const cart = getStoredCart();
    if (cart[index]) {
        cart[index].quantity = Math.max(1, newQty);
        saveCart(cart);
        renderCartPage();
    }
}

// ==========================================
// 5. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
    const product = REAL_PRODUCTS_DB.find(p => p.id === productId) || REAL_PRODUCTS_DB[0];
    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quickViewModal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close-btn" onclick="document.getElementById('quickViewModal').classList.remove('open')">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
                <div style="background: #ffffff; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #f1f5f9; overflow: hidden;">
                    <img src="${product.image}" alt="${product.title}" style="max-height: 280px; width: 100%; object-fit: cover; border-radius: 6px; margin: 0 auto;">
                </div>
                <div>
                    <span style="font-size: 0.78rem; font-weight: 800; color: var(--primary-red); text-transform: uppercase;">Official Genuine Hardware</span>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin: 6px 0 10px 0; color: var(--text-dark); line-height: 1.35;">${product.title}</h3>
                    <div style="display: flex; align-items: baseline; margin-bottom: 15px;">
                        <span style="font-size: 1.45rem; font-weight: 650; color: #0f172a; font-family: var(--font-heading);">${product.price}</span>
                        ${product.oldPrice ? `<span style="font-size: 0.95rem; color: var(--text-light); text-decoration: line-through; margin-left: 10px; font-weight: 400;">${product.oldPrice}</span>` : ''}
                    </div>
                    <ul style="margin-bottom: 20px; font-size: 0.86rem; color: #475569; display: flex; flex-direction: column; gap: 6px;">
                        ${product.specs ? product.specs.map(s => `<li><i class="fa-solid fa-check" style="color: var(--primary-red); margin-right: 6px;"></i> ${s}</li>`).join('') : ''}
                    </ul>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn-action-primary" style="flex: 1;" onclick="addToCart(REAL_PRODUCTS_DB.find(p=>p.id==='${product.id}')); document.getElementById('quickViewModal').classList.remove('open');">
                            <i class="fa-solid fa-cart-plus"></i> Add To Cart
                        </button>
                        <a href="product.html" class="btn-action-secondary" style="padding: 12px 18px;">Full Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('open');
}

// ==========================================
// 6. INSTANT LIVE SEARCH AUTO-SUGGEST
// ==========================================
function initSearchAutoSuggest() {
    const searchInputs = document.querySelectorAll('#searchInput');
    searchInputs.forEach(input => {
        const wrapper = input.closest('.search-box');
        if (!wrapper) return;
        
        let dropdown = wrapper.parentElement.querySelector('.search-suggest-dropdown');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'search-suggest-dropdown';
            wrapper.parentElement.appendChild(dropdown);
        }

        input.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                dropdown.style.display = 'none';
                return;
            }

            const matches = REAL_PRODUCTS_DB.filter(p => 
                p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)
            ).slice(0, 5);

            if (matches.length === 0) {
                dropdown.innerHTML = `<div style="padding: 15px; text-align: center; color: #94a3b8; font-size: 0.88rem;">No matching hardware or laptops found</div>`;
                dropdown.style.display = 'block';
                return;
            }

            dropdown.innerHTML = matches.map(p => `
                <div class="search-suggest-item" onclick="openQuickView('${p.id}')">
                    <img src="${p.image}" alt="${p.title}" class="search-suggest-img">
                    <div class="search-suggest-info">
                        <h5>${p.title}</h5>
                        <span>${p.price}</span>
                    </div>
                </div>
            `).join('');
            dropdown.style.display = 'block';
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.parentElement.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    });
}

// ==========================================
// 7. HERO SLIDER AUTO-ROTATION
// ==========================================
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-main-banner');
    if (!heroSlider) return;

    const slides = [
        {
            img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&auto=format&fit=crop&q=85',
            title: 'FLAGSHIP GAMING RIGS',
            tag: 'Next-Gen Power'
        },
        {
            img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1400&auto=format&fit=crop&q=85',
            title: 'ASUS ROG STRIX 2026',
            tag: 'RTX 40 Series'
        },
        {
            img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&auto=format&fit=crop&q=85',
            title: 'APPLE MACBOOK PRO M3',
            tag: 'Pro Studio Power'
        }
    ];

    let currentIdx = 0;
    const dots = document.querySelectorAll('.hero-slider-dot');
    const mainImg = heroSlider.querySelector('img');

    function switchSlide(idx) {
        if (!mainImg) return;
        currentIdx = idx;
        mainImg.style.opacity = '0.3';
        mainImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
            mainImg.src = slides[currentIdx].img;
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'scale(1)';
        }, 250);

        dots.forEach((d, i) => {
            d.classList.toggle('active', i === currentIdx);
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => switchSlide(idx));
    });

    setInterval(() => {
        currentIdx = (currentIdx + 1) % slides.length;
        switchSlide(currentIdx);
    }, 6000);
}

// ==========================================
// 8. RENDER CART & CHECKOUT PAGES
// ==========================================
function renderCartPage() {
    const tableBody = document.getElementById('cartTableBody');
    if (!tableBody) return;

    const cart = getStoredCart();
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartGrandTotal');

    if (cart.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: #64748b;">
                    <i class="fa-solid fa-cart-shopping" style="font-size: 2.5rem; margin-bottom: 12px; color: #cbd5e1;"></i>
                    <p style="font-size: 1rem; font-weight: 600;">Your shopping cart is currently empty.</p>
                    <a href="shop.html" class="btn-action-primary" style="display: inline-block; margin-top: 15px; padding: 10px 20px;">Browse Shop</a>
                </td>
            </tr>
        `;
        if (subtotalEl) subtotalEl.textContent = 'Rs. 0.00';
        if (totalEl) totalEl.textContent = 'Rs. 0.00';
        return;
    }

    let subtotal = 0;
    tableBody.innerHTML = cart.map((item, idx) => {
        const itemTotal = (item.numericPrice || 0) * (item.quantity || 1);
        subtotal += itemTotal;
        return `
            <tr>
                <td>
                    <div class="cart-product-cell">
                        <img src="${item.image}" alt="${item.title}" class="cart-product-img">
                        <div class="cart-product-name">${item.title}</div>
                    </div>
                </td>
                <td style="font-weight: 600; color: #0f172a;">Rs. ${(item.numericPrice || 0).toLocaleString()}.00</td>
                <td>
                    <div class="quantity-control" style="max-width: 110px;">
                        <button class="qty-btn" onclick="updateCartQty(${idx}, ${(item.quantity || 1) - 1})">-</button>
                        <input type="text" class="qty-input" value="${item.quantity || 1}" readonly>
                        <button class="qty-btn" onclick="updateCartQty(${idx}, ${(item.quantity || 1) + 1})">+</button>
                    </div>
                </td>
                <td style="font-weight: 650; color: #0f172a;">Rs. ${itemTotal.toLocaleString()}.00</td>
                <td>
                    <button class="btn-remove-item" onclick="removeFromCart(${idx})" title="Remove item">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}.00`;
    if (totalEl) totalEl.textContent = `Rs. ${subtotal.toLocaleString()}.00`;
}

function renderCheckoutSummary() {
    const listEl = document.getElementById('checkoutItemsList');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const totalEl = document.getElementById('checkoutTotal');
    if (!listEl) return;

    const cart = getStoredCart();
    let total = 0;

    if (cart.length === 0) {
        listEl.innerHTML = `<p style="color: #64748b; font-size: 0.88rem;">No items in cart.</p>`;
        return;
    }

    listEl.innerHTML = cart.map(item => {
        const itemTot = (item.numericPrice || 0) * (item.quantity || 1);
        total += itemTot;
        return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 0.88rem;">
                <div>
                    <strong style="color: #1e293b; font-weight: 600;">${item.title}</strong>
                    <div style="color: #64748b; font-size: 0.8rem;">Qty: ${item.quantity} &times; Rs. ${(item.numericPrice || 0).toLocaleString()}.00</div>
                </div>
                <strong style="color: #0f172a; font-weight: 600;">Rs. ${itemTot.toLocaleString()}.00</strong>
            </div>
        `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `Rs. ${total.toLocaleString()}.00`;
    if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}.00`;
}

function handleCheckout() {
    const cart = getStoredCart();
    if (cart.length === 0) {
        showToast('Your cart is empty! Add products before checking out.', 'fa-solid fa-circle-exclamation');
        return;
    }
    const orderId = '#SX-' + Math.floor(10000 + Math.random() * 90000);
    const orderIdEl = document.getElementById('modalOrderId');
    if (orderIdEl) orderIdEl.textContent = orderId;
    
    saveCart([]);
    const modal = document.getElementById('orderSuccessModal');
    if (modal) modal.classList.add('open');
}

// ==========================================
// 9. COUNTDOWN TIMER FOR FLASH DEALS
// ==========================================
function startCountdown() {
    let duration = 3 * 24 * 3600 + 14 * 3600 + 22 * 60 + 45;
    const daysEl = document.getElementById('dealDays');
    const hoursEl = document.getElementById('dealHours');
    const minsEl = document.getElementById('dealMinutes');
    const secsEl = document.getElementById('dealSeconds');
    if (!daysEl) return;

    setInterval(() => {
        if (duration > 0) duration--;
        const d = Math.floor(duration / 86400);
        const h = Math.floor((duration % 86400) / 3600);
        const m = Math.floor((duration % 3600) / 60);
        const s = duration % 60;

        daysEl.textContent = String(d).padStart(2, '0');
        hoursEl.textContent = String(h).padStart(2, '0');
        minsEl.textContent = String(m).padStart(2, '0');
        secsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
}

// ==========================================
// 11. CUSTOM PC BUILDER LOGIC & STATE
// ==========================================
const PC_BUILDER_PARTS = {
    cpu: [
        { name: 'Intel Core i9-14900K 24-Core 6.0GHz', price: 210000, wattage: 253, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&auto=format&fit=crop&q=85' },
        { name: 'AMD Ryzen 7 7800X3D 8-Core 3D V-Cache', price: 165000, wattage: 120, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&auto=format&fit=crop&q=85' },
        { name: 'Intel Core i7-14700K 20-Core 5.6GHz', price: 155000, wattage: 220, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&auto=format&fit=crop&q=85' }
    ],
    motherboard: [
        { name: 'ASUS ROG MAXIMUS Z790 DARK HERO', price: 185000, wattage: 50, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=85' },
        { name: 'MSI MAG B760 TOMAHAWK WIFI DDR5', price: 78000, wattage: 40, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=85' },
        { name: 'ASUS TUF GAMING X670E-PLUS WIFI', price: 120000, wattage: 45, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=85' }
    ],
    ram: [
        { name: 'Corsair Dominator Titanium 64GB (2x32GB) DDR5 6000MHz RGB', price: 89000, wattage: 15, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=200&auto=format&fit=crop&q=85' },
        { name: 'G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6400MHz', price: 48000, wattage: 10, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=200&auto=format&fit=crop&q=85' },
        { name: 'Corsair Vengeance RGB 32GB (2x16GB) DDR5 5600MHz', price: 38000, wattage: 10, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=200&auto=format&fit=crop&q=85' }
    ],
    gpu: [
        { name: 'ASUS ROG Strix GeForce RTX 4090 24GB OC Edition', price: 685000, wattage: 450, img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=200&auto=format&fit=crop&q=85' },
        { name: 'ASUS TUF Gaming GeForce RTX 4080 Super 16GB OC', price: 420000, wattage: 320, img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=200&auto=format&fit=crop&q=85' },
        { name: 'MSI GeForce RTX 4070 Ti Super 16GB Gaming X Slim', price: 310000, wattage: 285, img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=200&auto=format&fit=crop&q=85' }
    ],
    storage: [
        { name: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD (7450 MB/s)', price: 68000, wattage: 8, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&auto=format&fit=crop&q=85' },
        { name: 'Kingston KC3000 1TB PCIe 4.0 NVMe M.2 SSD (7000 MB/s)', price: 32000, wattage: 6, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&auto=format&fit=crop&q=85' },
        { name: 'Crucial T700 2TB PCIe 5.0 NVMe SSD (12,400 MB/s)', price: 95000, wattage: 12, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&auto=format&fit=crop&q=85' }
    ],
    psu: [
        { name: 'ASUS ROG Thor 1200W Platinum II OLED ATX 3.0', price: 115000, wattage: 0, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop&q=85' },
        { name: 'Corsair RM1000e 1000W 80+ Gold Fully Modular ATX 3.0', price: 72000, wattage: 0, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop&q=85' },
        { name: 'MSI MAG A850GL 850W 80+ Gold PCIe 5 Ready', price: 48000, wattage: 0, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop&q=85' }
    ],
    casing: [
        { name: 'Lian Li O11 Dynamic EVO RGB Dual-Chamber Black', price: 65000, wattage: 0, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop&q=85' },
        { name: 'NZXT H9 Flow Dual-Chamber Panoramic Tempered Glass', price: 58000, wattage: 0, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop&q=85' },
        { name: 'Corsair 4000D Airflow Tempered Glass Mid-Tower Case', price: 34000, wattage: 0, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop&q=85' }
    ]
};

let currentBuilderSelection = {};

function openComponentModal(categoryKey) {
    const modal = document.getElementById('componentModal');
    const title = document.getElementById('modalComponentTitle');
    const list = document.getElementById('modalComponentList');
    if (!modal || !list) return;

    const parts = PC_BUILDER_PARTS[categoryKey] || [];
    title.textContent = `Select ${categoryKey.toUpperCase()}`;

    list.innerHTML = parts.map(part => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${part.img}" alt="${part.name}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 6px;">
                <div>
                    <h5 style="margin: 0; font-size: 0.92rem; font-weight: 700; color: #1e293b;">${part.name}</h5>
                    <span style="font-size: 0.8rem; color: #64748b;">Estimated TDP: ${part.wattage}W</span>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <strong style="color: var(--primary-red); font-size: 1rem;">Rs. ${part.price.toLocaleString()}.00</strong>
                <button class="btn-action-primary" style="padding: 8px 16px; font-size: 0.85rem;" onclick="selectBuilderComponent('${categoryKey}', '${part.name.replace(/'/g, "\\'")}', ${part.price}, ${part.wattage})">
                    Select
                </button>
            </div>
        </div>
    `).join('');

    modal.classList.add('open');
}

function closeComponentModal() {
    const modal = document.getElementById('componentModal');
    if (modal) modal.classList.remove('open');
}

function selectBuilderComponent(categoryKey, name, price, wattage) {
    currentBuilderSelection[categoryKey] = { name, price, wattage };
    
    const labelEl = document.getElementById(`selected-${categoryKey}`);
    if (labelEl) {
        labelEl.innerHTML = `<strong style="color: #0f172a;">${name}</strong> — <span style="color: var(--primary-red); font-weight: 700;">Rs. ${price.toLocaleString()}.00</span>`;
    }

    closeComponentModal();
    updateBuilderTotals();
    showToast(`Added ${name} to your Custom Build!`);
}

function updateBuilderTotals() {
    let totalPrice = 0;
    let totalWattage = 0;

    Object.values(currentBuilderSelection).forEach(part => {
        totalPrice += part.price || 0;
        totalWattage += part.wattage || 0;
    });

    const priceEl = document.getElementById('builderTotalPrice');
    const wattEl = document.getElementById('estimatedWattage');

    if (priceEl) priceEl.textContent = `Rs. ${totalPrice.toLocaleString()}.00`;
    if (wattEl) wattEl.textContent = `${totalWattage} W`;
}

function resetBuilder() {
    currentBuilderSelection = {};
    Object.keys(PC_BUILDER_PARTS).forEach(k => {
        const el = document.getElementById(`selected-${k}`);
        if (el) el.textContent = 'Not Selected';
    });
    updateBuilderTotals();
    showToast('PC Builder selection reset.', 'fa-solid fa-rotate-left');
}

// Add Custom Build to Cart
const btnBuilderAddToCart = document.getElementById('btnBuilderAddToCart');
if (btnBuilderAddToCart) {
    btnBuilderAddToCart.addEventListener('click', () => {
        const keys = Object.keys(currentBuilderSelection);
        if (keys.length === 0) {
            showToast('Please choose at least one component to add your build to cart!', 'fa-solid fa-circle-exclamation');
            return;
        }
        let total = 0;
        let specsList = [];
        keys.forEach(k => {
            total += currentBuilderSelection[k].price;
            specsList.push(currentBuilderSelection[k].name);
        });

        addToCart({
            id: 'custom_build_' + Date.now(),
            title: `Custom Performance Gaming PC (${keys.length} Components)`,
            price: `Rs. ${total.toLocaleString()}.00`,
            numericPrice: total,
            image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=85',
            quantity: 1
        });
    });
}

// ==========================================
// 12. GLOBAL DOM READY INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateGlobalCartBadges();
    updateGlobalWishlistBadges();
    initSearchAutoSuggest();
    initHeroSlider();
    startCountdown();
    renderCartPage();
    renderCheckoutSummary();

    // Floating WhatsApp & Back-To-Top Widget Injection
    if (!document.querySelector('.floating-actions')) {
        const floatDiv = document.createElement('div');
        floatDiv.className = 'floating-actions';
        floatDiv.innerHTML = `
            <a href="https://wa.me/94776739339" target="_blank" rel="noopener" class="whatsapp-float-btn" title="Chat on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <div class="scroll-top-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" title="Back to Top">
                <i class="fa-solid fa-chevron-up"></i>
            </div>
        `;
        document.body.appendChild(floatDiv);
    }

    // Attach Click Handlers to all .btn-add-cart buttons
    document.querySelectorAll('.btn-add-cart').forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.product-card');
            if (card) {
                const title = card.querySelector('.product-title')?.innerText || 'Product';
                const price = card.querySelector('.new-price')?.innerText || 'Rs. 100,000.00';
                const img = card.querySelector('.product-img-wrapper img')?.src || '';
                addToCart({
                    id: 'prod_' + idx,
                    title: title,
                    price: price,
                    numericPrice: parseInt(price.replace(/[^0-9]/g, '')) || 100000,
                    image: img
                });
            }
        });
    });

    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    // Category Dropdown Toggle
    const catToggle = document.getElementById('categoryDropdownToggle');
    const catMenu = document.getElementById('headerCategoryDropdown');
    if (catToggle && catMenu) {
        catToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            catMenu.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (!catToggle.contains(e.target) && !catMenu.contains(e.target)) {
                catMenu.classList.remove('show');
            }
        });
    }

    // Category Tabs Switching on Product details
    document.querySelectorAll('.tab-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
});



/* ==========================================

/* ==========================================
   SWIPER PRODUCT GRIDS
   ========================================== */
function initProductSwipers() {
    const productSwipers = document.querySelectorAll('.product-grid-swiper');
    
    productSwipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initProductSwipers);

/* ==========================================
   MAKE PRODUCT IMAGE WRAPPERS CLICKABLE
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // We attach it to the body to handle dynamically loaded products (if any)
    document.body.addEventListener('click', (e) => {
        const wrapper = e.target.closest('.product-img-wrapper');
        if (!wrapper) return;
        
        // Ignore clicks on the action buttons (wishlist, quick view)
        if (e.target.closest('.product-card-actions')) return;
        
        const card = wrapper.closest('.product-card');
        if (card) {
            const link = card.querySelector('.product-title a');
            if (link && link.href) {
                window.location.href = link.href;
            }
        }
    });
    
    // Add pointer cursor to all wrappers for UX
    const addCursors = () => {
        document.querySelectorAll('.product-img-wrapper').forEach(w => {
            w.style.cursor = 'pointer';
        });
    };
    addCursors();
    
    // Re-apply cursors if swiper duplicates them or DOM changes
    const observer = new MutationObserver(addCursors);
    observer.observe(document.body, { childList: true, subtree: true });
});
