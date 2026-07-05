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
    image: './lastAssignment/beer1.png' // 各商品の画像パスを指定
  },
  { 
    id: 'beer2', 
    name: 'クラフトハウス・ラガー', 
    price: 680, 
    category: 'beer',
    image: './lastAssignment/beer2.png'
  },
  { 
    id: 'beer3', 
    name: 'スモーキー・スタウト', 
    price: 850, 
    category: 'beer',
    image: './lastAssignment/beer3.png'
  },
  { 
    id: 'beer5', 
    name: 'オーロラ・ペールエール', 
    price: 820, 
    category: 'beer',
    image: './lastAssignment/beer5.png'
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
  if (!menuGrid) return;

  menuGrid.innerHTML = '';

  // 現在選択されているカテゴリーの商品だけを絞り込む
  const filteredProducts = products.filter(product => product.category === currentCategory);

  if (filteredProducts.length === 0) {
    menuGrid.innerHTML = `<div style="grid-column: span 3; text-align: center; font-size: 24px; color: #7A7A7A; margin-top: 40px;">商品がありません。</div>`;
    // ★商品がない場合でもボタンの表示制御を行いたいので、下に続くボタン制御処理へ進めるために return はここではなく後にずらすか、ここでも制御を入れます。
  }

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
            <span class="tax">(税込 ¥${taxIncluded.toLocaleString()})</span>
          </div>
        </div>
        <div class="frame-order-button">
          <button class="order-button" onclick="openProductModal('${product.id}')">注文リストに入れる</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });

  // ★ 追加：左右の矢印ボタンの表示・非表示コントロール
  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');

  if (nextBtn && beforeBtn) {
    if (currentCategory === 'beer') {
      // beerの時はnext-btnのみ表示
      nextBtn.style.display = 'flex';
      beforeBtn.style.display = 'none';
    } else if (currentCategory === 'drink') {
      // drinkの時はbefore-btnのみ表示
      nextBtn.style.display = 'none';
      beforeBtn.style.display = 'flex';
    } else if (currentCategory === '') {
      // 画面外クリックなどでアクティブが解除されている時は両方隠す（お好みで）
      nextBtn.style.display = 'none';
      beforeBtn.style.display = 'none';
    } else {
      // それ以外（main, snacks, fresh, sweets）は両方表示
      nextBtn.style.display = 'flex';
      beforeBtn.style.display = 'flex';
    }
  }
}


/**
 * ==========================================
 * 4. カート操作・自動計算機能
 * ==========================================
 */
function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push({ ...product, quantity: 1 });
    }
  }
  updateCartDisplay();
}

// カート内の数量をプラスマイナスする（ボタン用）
function changeQuantity(productId, amount) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  // 現在の個数が1、かつマイナスボタン（-1）が押された場合は確認ダイアログを表示
  if (item.quantity === 1 && amount === -1) {
    const confirmDelete = confirm(`注文リストから「${item.name}」を削除しますか？`);
    if (!confirmDelete) {
      return; // キャンセルされたら処理を中断
    }
  }

  // 数量の増減処理
  item.quantity += amount;

  // 数量が0以下になったらカートから完全に消去
  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }

  // 表示と金額を更新
  updateCartDisplay();
}

// 注文リスト（カート）の表示を更新する関数
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const totalPriceContainer = document.getElementById('totalPrice');
  
  if (!cartItemsContainer || !totalPriceContainer) return;

  // 一旦中身を空にする
  cartItemsContainer.innerHTML = '';
  let total = 0;

  // カート内のアイテムをループ処理で描画
  cart.forEach(item => {
    total += item.price * item.quantity;

    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    
    // 商品名と個数ステッパーの構造（フォントサイズ24px用）
    itemElement.innerHTML = `
      <div class="item-name">${item.name}</div>
      <div class="quantity-control">
        <button class="qty-btn btn-minus" onclick="changeQuantity('${item.id}', -1)">-</button>
        <div class="qty-text">${item.quantity}</div>
        <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemElement);
  });

  // 合計金額の更新
  totalPriceContainer.textContent = `￥${total.toLocaleString()}`;
}

/**
 * ==========================================
 * 5. 初期化イベント
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

  // 右矢印ボタン（.nav-next-btn）の処理
  const nextBtn = document.querySelector('.nav-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const tabButtonsArray = Array.from(tabButtons);
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      let nextIndex = currentIndex + 1;
      if (currentIndex === -1 || nextIndex >= tabButtonsArray.length) {
        nextIndex = 0; // 最後まで行ったら最初に戻る
      }

      const nextButton = tabButtonsArray[nextIndex];
      if (nextButton) {
        nextButton.click();
      }
    });
  }

  // ★左矢印ボタン（.nav-before-btn）の処理を追加
  const beforeBtn = document.querySelector('.nav-before-btn');
  if (beforeBtn) {
    beforeBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // 画面クリックイベントへの連動をガード
      
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const tabButtonsArray = Array.from(tabButtons);
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      // 前のタブのインデックスを計算する
      let prevIndex = currentIndex - 1;
      
      // もし現在アクティブなタブがない、または最初のタブ（Beer）だった場合は、最後のタブ（Drink）に回る
      if (currentIndex === -1 || prevIndex < 0) {
        prevIndex = tabButtonsArray.length - 1; 
      }

      const prevButton = tabButtonsArray[prevIndex];
      if (prevButton) {
        prevButton.click(); // 前のタブのクリックイベントを強制実行
      }
    });
  }

  // 画面クリックで解除する処理（既存のもの）
  document.addEventListener('click', (event) => {
    const tabBar = document.querySelector('header.tab-bar');
    const menuGrid = document.getElementById('menuGrid');
    const sidebarRight = document.querySelector('.sidebar-right');

    if (
      (tabBar && tabBar.contains(event.target)) || 
      (menuGrid && menuGrid.contains(event.target)) || 
      (sidebarRight && sidebarRight.contains(event.target))
    ) {
      return; 
    }

    tabButtons.forEach(btn => btn.classList.remove('active'));
    currentCategory = '';
    displayMenus(); 
  });
}
// モーダルを開く関数（商品データを引数として受け取る想定）
function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalContent) return;

  // テスト用：本来は商品IDなどから商品情報を引っ張ってきます
  // ここでは一旦シンプルな正方形カードの中身テキストを注入
  modalContent.innerHTML = `
    <div style="text-align: center; font-size: 24px; font-weight: bold; margin-top: 40px;">
      商品詳細
    </div>
    <p style="text-align: center; color: #7A7A7A; margin-top: 20px; font-size: 18px;">
      ここに商品の説明文や画像が入ります。
    </p>
  `;

  // モーダルを表示（Flexboxで中央揃えに）
  modal.style.display = 'flex';
}

// モーダルを閉じる関数
function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 背景（オーバーレイ）をタップしても閉じられるようにする設定
window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// 現在モーダルで開いている商品のデータを一時保存する変数
let currentModalProduct = null;

// 1. カードのボタンを押したとき：モーダルを開く
function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalContent) return;

  // 商品リスト（既存の products 配列など）から該当する商品を検索
  // ※お使いの商品データ保持形式（配列名など）に合わせて適宜変更してください
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // 現在の商品情報を保存
  currentModalProduct = product;

  // モーダルの正方形カード内を構築（ここに「注文リストに入れる」ボタンを設置）
  modalContent.innerHTML = `
    <div style="text-align: center; font-size: 24px; font-weight: bold; margin-top: 40px;">
      ${product.name}
    </div>
    <p style="text-align: center; color: #7A7A7A; margin-top: 20px; font-size: 18px;">
      価格：￥${product.price.toLocaleString()}
    </p>
    
    <div style="display: flex; justify-content: center; margin-top: 60px;">
      <button class="order-button" onclick="confirmAddToCart()">
        注文リストに入れる
      </button>
    </div>
  `;

  modal.style.display = 'flex';
}

// 2. モーダル内のボタンを押したとき：実際にリスト（カート）へ入れる
function confirmAddToCart() {
  if (!currentModalProduct) return;

  // 既存のカート追加ロジック（addToCart関数など）を実行
  // ここでは一般的な配列カートへの追加処理の例を記載します
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

  // 注文リストの表示と金額を更新（前回作成した関数）
  updateCartDisplay();

  // カートに入れたら自動的にモーダルを閉じる
  closeModal();
}

// 3. モーダルを閉じる関数
function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'none';
    currentModalProduct = null; // データをクリア
  }
}