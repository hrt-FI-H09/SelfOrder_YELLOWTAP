/**
 * ==========================================
 * 1. 商品データベース（画像パス付き）
 * ==========================================
 */
const products = [
  { 
    id: 'beer1', 
    name: 'ハニーエール・ハイドアウト', 
    price: 780, 
    category: 'beer',
    image: './lastAssignment/beer1.png',
    clipingImage: './lastAssignment/beer1_cliping.png'
  },
  { 
    id: 'beer2', 
    name: 'クラフトハウス・ラガー', 
    price: 680, 
    category: 'beer',
    image: './lastAssignment/beer2.png',
    clipingImage: './lastAssignment/beer2_cliping.png'
  },
  { 
    id: 'beer3', 
    name: 'スモーキー・スタウト', 
    price: 850, 
    category: 'beer',
    image: './lastAssignment/beer3.png',
    clipingImage: './lastAssignment/beer3_cliping.png'
  },
  { 
    id: 'beer5', 
    name: 'オーロラ・ペールエール', 
    price: 820, 
    category: 'beer',
    image: './lastAssignment/beer5.png',
    clipingImage: './lastAssignment/beer5_cliping.png'
  }
];

/**
 * ==========================================
 * 2. 状態管理
 * ==========================================
 */
let cart = []; 
let currentCategory = 'beer'; // 初期表示はビールカテゴリー

/**
 * ==========================================
 * 3. メニューの自動生成・表示機能
 * ==========================================
 */
function displayMenus() {
  const menuGrid = document.getElementById('menuGrid');
  const presentationContainer = document.getElementById('specialPresentation');
  
  if (!menuGrid) return;

  menuGrid.innerHTML = '';
  if (presentationContainer) presentationContainer.innerHTML = '';

  const filteredProducts = products.filter(product => product.category === currentCategory);

  if (filteredProducts.length === 0) {
    menuGrid.innerHTML = `<div style="grid-column: span 3; text-align: center; font-size: 24px; color: #7A7A7A; margin-top: 40px;">商品がありません。</div>`;
    return;
  }

  // 1. 通常メニューカードをすべて通常通りグリッドに描画
  filteredProducts.forEach(product => {
    const taxIncluded = Math.floor(product.price * 1.1);
    const card = document.createElement('div');
    card.className = 'menu-card';
    
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='./lastAssignment/default.png'">
      </div>
      <div class="content-footer">
        <div class="text-group">
          <div class="product-name">${product.name}</div>
          <div class="price-box">
            <span class="price">¥${product.price.toLocaleString()}</span>
            <span class="tax">(税込)</span>
          </div>
        </div>
        <div class="frame-order-button">
          <button class="order-button" onclick="triggerSpecialAnimation('${product.id}'); event.stopPropagation();">注文リストに入れる</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });

  // 左右の矢印ボタンの表示・非表示コントロール
  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');

  if (nextBtn && beforeBtn) {
    if (currentCategory === 'beer') {
      nextBtn.style.display = 'flex';
      beforeBtn.style.display = 'none';
    } else if (currentCategory === 'drink') {
      nextBtn.style.display = 'none';
      beforeBtn.style.display = 'flex';
    } else {
      nextBtn.style.display = 'flex';
      beforeBtn.style.display = 'flex';
    }
  }
}

function triggerSpecialAnimation(productId) {
  const presentationContainer = document.getElementById('specialPresentation');
  if (!presentationContainer) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const taxIncluded = Math.floor(product.price * 1.1);

  presentationContainer.style.display = 'flex';

  presentationContainer.innerHTML = `
    <div class="special-wrapper">
      <div class="presentation-left-image" onclick="event.stopPropagation();">
<img src="${product.clipingImage || product.image}" alt="${product.name}" onerror="this.src='./lastAssignment/default.png'">      </div>
      <div class="presentation-right-content" onclick="event.stopPropagation();">
        <div style="white-space: nowrap; padding-left: 100px;">
          <div style="font-size: 36px; font-weight: bold; color: #000; margin-bottom: 10px;">${product.name}</div>
          <div style="font-size: 32px; color: #333;">
            <span>¥${product.price.toLocaleString()}</span>
            <span style="font-size: 16px;">(税込)</span>
          </div>
        </div>
        <div class="frame-order-button" style="width: 100%; display: flex; justify-content: flex-end; margin-top: auto;">
          <button class="order-button" style="width: 240px; height: 60px; font-size: 1.5rem; font-weight: bold;" onclick="addDirectFromAnimation('${product.id}', event)">
            注文リストに入れる
          </button>
        </div>
      </div>
    </div>
  `;

  presentationContainer.onclick = function(event) {
    if (event.target === presentationContainer) {
      closeSpecialPresentation();
    }
  };
}

function addDirectFromAnimation(productId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  updateCartDisplay();
  
  closeSpecialPresentation();
}

function closeSpecialPresentation() {
  const presentationContainer = document.getElementById('specialPresentation');
  if (presentationContainer) {
    presentationContainer.style.display = 'none';
    presentationContainer.innerHTML = '';
  }
}
/**
 * ==========================================
 * 4. カート操作・自動計算機能
 * ==========================================
 */
function changeQuantity(productId, amount) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  if (item.quantity === 1 && amount === -1) {
    const isConfirmed = confirm('この商品を注文リストから削除しますか？');
    if (!isConfirmed) {
      return;
    }
  }

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const totalPriceContainer = document.getElementById('totalPrice');
  
  if (!cartItemsContainer || !totalPriceContainer) return;

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    
    itemElement.innerHTML = `
      <div class="item-name">${item.name}</div>
      <div class="quantity-control">
        <button class="qty-btn btn-minus" onclick="changeQuantity('${item.id}', -1); event.stopPropagation();">-</button>
        <div class="qty-text">${item.quantity}</div>
        <button class="qty-btn" onclick="changeQuantity('${item.id}', 1); event.stopPropagation();">+</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemElement);
  });

  totalPriceContainer.textContent = `￥${total.toLocaleString()}`;
}

/**
 * ==========================================
 * 5. モーダル画面制御
 * ==========================================
 */
let currentModalProduct = null;

function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalContent) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;

  // ⑥ モーダル内の各要素サイズをさらに拡大
  modalContent.innerHTML = `
    <div style="text-align: center; font-size: 32px; font-weight: bold; margin-top: 25px; color: #000; line-height: 1.4;">
      ${product.name}
    </div>
    <div style="width: 200px; height: 200px; margin: 25px auto; background: #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.src='./lastAssignment/default.png'">
    </div>
    <p style="text-align: center; color: #CC4700; margin-top: 15px; font-size: 28px; font-weight: 800;">
      価格：￥${product.price.toLocaleString()}
    </p>
    
    <div style="display: flex; justify-content: center; margin-top: 35px; width: 100%;">
      <button class="order-button" style="width: 260px; height: 60px; font-size: 1.5rem; font-weight: bold;" onclick="confirmAddToCart(event)">
        注文リストに入れる
      </button>
    </div>
  `;

  modal.style.display = 'flex';
}

function confirmAddToCart(event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  if (!currentModalProduct) return;

  const existingItem = cart.find(item => item.id === currentModalProduct.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: currentModalProduct.id,
      name: currentModalProduct.name,
      price: currentModalProduct.price,
      quantity: 1
    });
  }

  updateCartDisplay();
  closeModal(); 

  const presentationContainer = document.getElementById('specialPresentation');
  if (presentationContainer) presentationContainer.innerHTML = '';
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'none';
  }
  currentModalProduct = null;
}

/**
 * ==========================================
 * 6. イベントリスナーと初期化
 * ==========================================
 */
document.addEventListener('DOMContentLoaded', () => {
  displayMenus();
  setupTabEvents();
});

function setupTabEvents() {
  const tabButtons = document.querySelectorAll('header.tab-bar button.tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category');
      if (category) {
        currentCategory = category;
        displayMenus(); 
      }
    });
  });

  // 右矢印ボタン
  const nextBtn = document.querySelector('.nav-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const tabButtonsArray = Array.from(tabButtons);
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      let nextIndex = currentIndex + 1;
      if (currentIndex === -1 || nextIndex >= tabButtonsArray.length) {
        nextIndex = 0;
      }

      const nextButton = tabButtonsArray[nextIndex];
      if (nextButton) {
        nextButton.click();
      }
    });
  }

  // 左矢印ボタン
  const beforeBtn = document.querySelector('.nav-before-btn');
  if (beforeBtn) {
    beforeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const tabButtonsArray = Array.from(tabButtons);
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      let prevIndex = currentIndex - 1;
      if (currentIndex === -1 || prevIndex < 0) {
        prevIndex = tabButtonsArray.length - 1; 
      }

      const prevButton = tabButtonsArray[prevIndex];
      if (prevButton) {
        prevButton.click();
      }
    });
  }

  document.addEventListener('click', (event) => {

  });
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById('productModal');
  if (event.target === modal) {
    closeModal();
  }
});

const container = document.getElementById('specialPresentation');
container.addEventListener('click', (e) => {
  if (e.target === container) {
    closeSpecialPresentation();
  }
});

// 画面が読み込まれたら注文確定ボタンにイベントを設定する
document.addEventListener('DOMContentLoaded', () => {
  const confirmOrderBtn = document.querySelector('.confirm-order-btn');
  
  if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('注文リストに商品がありません。');
        return;
      }

      const isConfirmed = confirm('注文を確定しますか？');
      
      if (isConfirmed) {
        alert('注文が確定しました！');
        
        cart = [];
        updateCartDisplay();
      }
    });
  }
});