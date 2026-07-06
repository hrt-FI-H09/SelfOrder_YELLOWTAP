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
<button class="order-button" onclick="triggerSpecialAnimation('${product.id}'); event.stopPropagation();">注文リストに入れる</button>      </div>
    `;
    menuGrid.appendChild(card);
  });

// 左右の矢印ボタンの表示・非表示コントロール
  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');

  if (nextBtn && beforeBtn) {
    // header.tab-bar の中にある「.tab-btn」クラスを持つ要素だけを配列にする
const tabButtons = Array.from(document.querySelectorAll('header.tab-bar button'));
const currentActiveBtn = document.querySelector('header.tab-bar button.active');
const currentIndex = tabButtons.indexOf(currentActiveBtn);

if (currentIndex === -1) {
  nextBtn.style.setProperty('display', 'flex', 'important');
  beforeBtn.style.setProperty('display', 'flex', 'important');
} else {
  // 0番目（TOP）または 1番目（Beer）のときは左矢印を隠す（運用に合わせて調整してください）
  // ここでは、一番左（TOP、インデックス0）のときだけ左矢印を隠す設定にします
  if (currentIndex === 0) {
    beforeBtn.style.setProperty('display', 'none', 'important');
  } else {
    beforeBtn.style.setProperty('display', 'flex', 'important');
  }

  if (currentIndex === tabButtons.length - 1) {
    nextBtn.style.setProperty('display', 'none', 'important');
  } else {
    nextBtn.style.setProperty('display', 'flex', 'important');
  }
}
  }
}

function triggerSpecialAnimation(productId) {
  const presentationContainer = document.getElementById('specialPresentation');
  if (!presentationContainer) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const taxIncluded = Math.floor(product.price * 1.1);

  // ★個数を1にリセット
  modalQuantity = 1; 

  presentationContainer.style.display = 'flex';

  presentationContainer.innerHTML = `
    <div class="special-wrapper">
      <div class="presentation-left-image" onclick="event.stopPropagation();">
        <img src="${product.clipingImage || product.image}" alt="${product.name}" onerror="this.src='./lastAssignment/default.png'">
      </div>
      <div class="presentation-right-content" onclick="event.stopPropagation();">
        <div style="white-space: nowrap; padding-left: 100px;">
          <div style="font-size: 36px; font-weight: bold; color: #000; margin-bottom: 10px;">${product.name}</div>
          <div style="font-size: 32px; color: #333;">
            <span>¥${product.price.toLocaleString()}</span>
            <span style="font-size: 16px;">(税込)</span>
          </div>
        </div>
        
<div class="frame-order-button" style="width: 100%; display: flex; justify-content: flex-end; align-items: center; gap: 20px; margin-top: auto;">
  
  <!-- 💡 style属性の先頭に pointer-events: auto; を追加し、全体でクリックを確実に有効化します -->
  <div style="pointer-events: auto; display: flex; align-items: center; height: 60px; background: #fff; border: 2px solid #7A7A7A; border-radius: 8px; overflow: hidden;">
    
    <!-- 💡 cursor: pointer; が確実に効くように再指定 -->
    <button type="button" style="width: 50px; height: 100%; background: #F0F0F0; border: none; font-size: 28px; font-weight: bold; cursor: pointer; display: block;" onclick="changeModalQuantity(-1, event)">-</button>
    
    <div id="modalQtyText" style="width: 60px; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; border-left: 2px solid #7A7A7A; border-right: 2px solid #7A7A7A;">1</div>
    
    <button type="button" style="width: 50px; height: 100%; background: #F0F0F0; border: none; font-size: 28px; font-weight: bold; cursor: pointer; display: block;" onclick="changeModalQuantity(1, event)">+</button>
  </div>

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
    playFlyToCartAnimation(event);
  }
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
let modalQuantity = 1; // カウンター用の変数をここで安全に宣言

// 個数を増減させる関数（openProductModal の外側に定義）
function changeModalQuantity(amount, event) {
  if (event) {
    event.stopPropagation(); // 親要素のクリックイベントと競合するのを防ぐ
    event.preventDefault();
  }

  const targetQuantity = modalQuantity + amount;

  if (targetQuantity < 1) {
    return; // 1未満には減らさない
  }

  if (targetQuantity > 10) {
    alert('一度に選択できる数量は10個までです。それ以上の個数は、再度カートに入れてご注文ください。');
    return;
  }

  modalQuantity = targetQuantity;
  const qtyTextElement = document.getElementById('modalQtyText');
  if (qtyTextElement) {
    qtyTextElement.textContent = modalQuantity;
  }
}

function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalContent) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  modalQuantity = 1; // モーダルを開いたときは常に1個にリセット

  // ⑥ モーダル内の各要素サイズをさらに拡大（ボタンの左側にカウンターを追加）
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
    
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 35px; width: 100%;">
      
      <!-- ボタンの左側に＋ーの個数選択カウンターを設置 -->
      <div style="display: flex; align-items: center; height: 60px; background: #fff; border: 2px solid #7A7A7A; border-radius: 8px; overflow: hidden;">
        <button type="button" style="width: 50px; height: 100%; background: #F0F0F0; border: none; font-size: 28px; font-weight: bold; cursor: pointer;" onclick="changeModalQuantity(-1)">-</button>
        <div id="modalQtyText" style="width: 60px; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; border-left: 2px solid #7A7A7A; border-right: 2px solid #7A7A7A;">1</div>
        <button type="button" style="width: 50px; height: 100%; background: #F0F0F0; border: none; font-size: 28px; font-weight: bold; cursor: pointer;" onclick="changeModalQuantity(1)">+</button>
      </div>

      <button class="order-button" style="width: 260px; height: 60px; font-size: 1.5rem; font-weight: bold; margin: 0;" onclick="confirmAddToCart(event)">
        注文リストに入れる
      </button>
    </div>
  `;

  modal.style.display = 'flex';
}
function confirmAddToCart(event) {
  if (event) {
    playFlyToCartAnimation(event);
  }

  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  if (!currentModalProduct) return;

  const existingItem = cart.find(item => item.id === currentModalProduct.id);

  if (existingItem) {
    // 固定で +1 していた部分を選択された数量分（modalQuantity）加算に変更
    existingItem.quantity += modalQuantity;
  } else {
    cart.push({
      id: currentModalProduct.id,
      name: currentModalProduct.name,
      price: currentModalProduct.price,
      quantity: modalQuantity // 選択された数量で新規追加
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
  // 1. まず最初にタブにイベントを設定する
  setupTabEvents();
  
  // 2. その後、最初のメニューを描画する（これで初期タブのactiveを検知して矢印が正しく判定されます）
  displayMenus();
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
        // タブが切り替わったら、メニューの再描画と同時に矢印の表示・非表示も再計算させる
        displayMenus(); 
      }
    });
  });

  // 右矢印ボタン
  const nextBtn = document.querySelector('.nav-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const tabButtonsArray = Array.from(tabButtons);
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      let nextIndex = currentIndex + 1;
      if (currentIndex === -1 || nextIndex >= tabButtonsArray.length) {
        return; // 一番右にいるときは何もしない（矢印も消えているはず）
      }

      const nextButton = tabButtonsArray[nextIndex];
      if (nextButton) {
        nextButton.click(); // 次のタブを擬似クリック（中で displayMenus が走ります）
      }
    });
  }

  // 左矢印ボタン
  const beforeBtn = document.querySelector('.nav-before-btn');
  if (beforeBtn) {
    beforeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const tabButtonsArray = Array.from(tabButtons);
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      let prevIndex = currentIndex - 1;
      if (currentIndex === -1 || prevIndex < 0) {
        return; // 一番左にいるときは何もしない（矢印も消えているはず）
      }

      const prevButton = tabButtonsArray[prevIndex];
      if (prevButton) {
        prevButton.click(); // 前のタブを擬似クリック（中で displayMenus が走ります）
      }
    });
  }
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById('productModal');
  if (event.target === modal) {
    closeModal();
  }
});

const container = document.getElementById('specialPresentation');
if (container) {
  container.addEventListener('click', (e) => {
    if (e.target === container) {
      closeSpecialPresentation();
    }
  });
}

// 注文確定ボタンのイベント
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

/**
 * ==========================================
 * 注文ボタンからカートへ飛ぶアニメーション演出
 * ==========================================
 */
function playFlyToCartAnimation(event) {
  // クリックされたボタン、またはイベントの発生元を取得
  const button = event.currentTarget || event.target;
  if (!button) return;

  // 1. 出発点（ボタン）の画面上の位置を取得
  const btnRect = button.getBoundingClientRect();
  
  // 2. 到着点（注文リストのカートアイコン、またはカートコンテナ）の位置を取得
  const cartTarget = document.getElementById('cartItems') || document.querySelector('.cart-icon');
  if (!cartTarget) return;
  const cartRect = cartTarget.getBoundingClientRect();

  // 3. 飛ばす正方形の要素を動的に作成
  const square = document.createElement('div');
  square.className = 'flying-square';

  // 4. 初期位置をボタンの中央付近に設定
  square.style.left = `${btnRect.left + btnRect.width / 2 - 5}px`;
  square.style.top = `${btnRect.top + btnRect.height / 2 - 5}px`;

  // 画面（body）に一旦追加
  document.body.appendChild(square);

  // 5. ブラウザの描画を1フレーム待ってから、目的地へ移動（transitionを発動させる）
  requestAnimationFrame(() => {
    // 到着点（カートの中央付近）の座標を計算
    square.style.left = `${cartRect.left + cartRect.width / 2 - 5}px`;
    square.style.top = `${cartRect.top + cartRect.height / 2 - 5}px`;
    
    // 途中で小さく消えていくエフェクト（お好みで調整してください）
    square.style.transform = 'scale(0.3)';
    square.style.opacity = '0';
  });

  // 6. アニメーションが終わったら（0.6秒後）要素を完全に削除
  setTimeout(() => {
    square.remove();
  }, 600);
}

// モーダル内の数量をプラスマイナスする関数
function changeModalQuantity(amount) {
  const targetQuantity = modalQuantity + amount;

  if (targetQuantity < 1) {
    // 最小値は1（何もしない）
    return;
  }

  if (targetQuantity > 10) {
    // 10個を超えようとした場合にアラートを出す
    alert('一度に選択できる数量は10個までです。それ以上の個数は、再度カートに入れてご注文ください。');
    return;
  }

  // 範囲内であれば数量を更新して画面に反映
  modalQuantity = targetQuantity;
  const qtyTextElement = document.getElementById('modalQtyText');
  if (qtyTextElement) {
    qtyTextElement.textContent = modalQuantity;
  }
}