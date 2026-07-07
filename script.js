/**
 * ==========================================
 * 1. 商品データベース（画像パス付き）
 * ==========================================
 */
const products = [
  { 
    id: 'beer1', 
    name: 'クラフトハウス・ラガー', 
    price: 780, 
    category: 'beer',
    image: './lastAssignment/beer1.png',
    clipingImage: './lastAssignment/beer1_cliping.png',
    description: 'まずはこれ！喉ごし抜群で、どんなおつまみにも絶対に合う当店のハウスラガー。すっきりクリーンな味わいと、キリッとした爽快感が爽やかに突き抜けます。',
    alcohol: 5.0,
    dryAndSweet: 15,
    recommendations: ['snack4', 'snack6']
  },
  { 
    id: 'beer2', 
    name: 'ハニーエール・ハイドアウト', 
    price: 680, 
    category: 'beer',
    image: './lastAssignment/beer2.png',
    clipingImage: './lastAssignment/beer2_cliping.png',
    description: 'ほんのり香る天然蜂蜜のまろやかな甘みと、シトラスホップのジューシーな香りが絶妙にマッチ。苦味が少なくてとってもフルーティーな、当店自慢の1杯です。',
    alcohol: 5.5,
    dryAndSweet: 75,
    recommendations: ['snack5', 'snack11']
  },
  { 
    id: 'beer3', 
    name: 'ミッドナイト・コーヒーススタウト', 
    price: 850, 
    category: 'beer',
    image: './lastAssignment/beer3.png',
    clipingImage: './lastAssignment/beer3_cliping.png',
    description: '深煎りコーヒー豆の香ばしい香りと、チョコレートモルトの甘くほろ苦い味わいが絶妙に絡み合う、濃厚でリッチなスタウト。夜のひとときにぴったりの1杯です。',
    alcohol: 6.5,
    dryAndSweet: 60,
    recommendations: ['snack12', 'sweet1']
  },
  { 
    id: 'beer5', 
    name: 'オーロラ・ネオ・ボトル', 
    price: 820, 
    category: 'beer',
    image: './lastAssignment/beer5.png',
    clipingImage: './lastAssignment/beer5_cliping.png',
    description: '鮮やかなオーロラのような色合いと、トロピカルフルーツの香りが特徴のニューエイジIPA。苦味は控えめで、フルーティーな甘みと爽やかな酸味が口いっぱいに広がります。',
    alcohol: 4.5,
    dryAndSweet: 85,
    recommendations: ['snack5', 'snack6']
  },
  {
    id: 'snack1',
    name: '無限キャベツ',
    price: 480,
    category: 'snacks',
    image: './lastAssignment/snack1.png',
    clipingImage: './lastAssignment/snack1-rected.png',
    description: 'ごま油の香ばしさと塩昆布の旨味で箸が止まらない美味しさ。お酒の合間のリフレッシュにも最適です。',
  },
  {
    id: 'snack2',
    name: '枝豆',
    price: 420,
    category: 'snacks',
    image: './lastAssignment/snack2.png',
    clipingImage: './lastAssignment/snack2-rected.png',
    description: '大粒の枝豆を絶妙な塩加減で茹で上げました。ビールが進む、居酒屋に欠かせない定番おつまみです。',
  },
  {
    id: 'snack3',
    name: 'キャロット・ラペ',
    price: 480,
    category: 'snacks',
    image: './lastAssignment/snack3.png',
    clipingImage: './lastAssignment/snack3-rected.png',
    description: 'シャキシャキのニンジを爽やかな酸味のマリネ液で和えました。クミンがほんのり香る上品な味わいです。',
  },
  {
    id: 'snack4',
    name: '唐揚げ',
    price: 680,
    category: 'snacks',
    image: './lastAssignment/snack4.png',
    clipingImage: './lastAssignment/snack4-rected.png',
    description: '外はサクッと中はジューシーに仕上げた自慢の唐揚げ。特製醤油ダレがしっかり染み込んだ王道の味です。',
  },
  {
    id: 'snack5',
    name: 'ソーセージの盛り合わせ',
    price: 980,
    category: 'snacks',
    image: './lastAssignment/snack5.png',
    clipingImage: './lastAssignment/snack5-rected.png',
    description: 'パリッと弾ける食感と肉汁が楽しめる数種類のソーセージ。ハーブやピリ辛など多彩な味を楽しめます。',
  },
  {
    id: 'snack6',
    name: 'チェダーフライドポテト',
    price: 650,
    category: 'snacks',
    image: './lastAssignment/snack6.png',
    clipingImage: './lastAssignment/snack6-rected.png',
    description: '揚げたてサクサクのポテトに濃厚なチェダーチーズソースをたっぷり。コクのあるビールと相性抜群です。',
  },
  {
    id: 'snack7',
    name: 'エビチリ',
    price: 850,
    category: 'snacks',
    image: './lastAssignment/snack7.png',
    clipingImage: './lastAssignment/snack7-rected.png',
    description: 'プリプリのエビを程よい辛みと甘みのある特製チリソースで。ピリッとした刺激が食欲をそそる一品です。',
  },
  {
    id: 'snack8',
    name: 'エビマヨ',
    price: 850,
    category: 'snacks',
    image: './lastAssignment/snack8.png',
    clipingImage: './lastAssignment/snack8-rected.png',
    description: 'サクッと揚げたエビにコクのある特製マヨネーズソースを絡めました。まろやかな酸味が口に広がります。',
  },
  {
    id: 'snack9',
    name: 'ゴルゴンゾーラと胡桃のピザ',
    price: 1280,
    category: 'snacks',
    image: './lastAssignment/snack9.png',
    clipingImage: './lastAssignment/snack9-rected.png',
    description: '独特な風味の青カビチーズと香ばしい胡桃のピザ。お好みで蜂蜜をかけると甘みと塩気が絶妙にマッチします。',
  },
  {
    id: 'snack10',
    name: '塩辛',
    price: 450,
    category: 'snacks',
    image: './lastAssignment/snack10.png',
    clipingImage: './lastAssignment/snack10-rected.png',
    description: 'イカの旨味と濃厚なワタのコクが凝縮された一品。コク深い味わいが、お酒の風味をより一層引き立てます。',
  },
  {
    id: 'snack11',
    name: '燻製チーズ',
    price: 580,
    category: 'snacks',
    image: './lastAssignment/snack11.png',
    clipingImage: './lastAssignment/snack11-rected.png',
    description: '桜のチップでじっくり燻した香り高いチーズ。口の中に広がる濃厚なコクとスモーキーな風味が絶品です。',
  },
  {
    id: 'snack12',
    name: 'ローストナッツ',
    price: 500,
    category: 'snacks',
    image: './lastAssignment/snack12.png',
    clipingImage: './lastAssignment/snack12-rected.png',
    description: '香ばしく煎り上げた数種類のナッツ。カリッとした食感と程よい塩気が、様々なお酒と相性抜群です。',
  },
  {
    id: 'sweet1',
    name: 'ガトーショコラ',
    price: 600,
    category: 'sweets',
    image: './lastAssignment/sweet1.png',
    clipingImage: './lastAssignment/sweet1-rected.png',
    description: 'カカオの風味をガツンと感じる濃厚な味わい。しっとりとした食感で、お酒の締めにもぴったりな贅沢デザート。',
  },
  {
    id: 'sweet2',
    name: 'キャラメルプリン',
    price: 550,
    category: 'sweets',
    image: './lastAssignment/sweet2.png',
    clipingImage: './lastAssignment/sweet2-rected.png',
    description: 'ほろ苦い自家製キャラメルソースをたっぷりかけた、なめらか食感のこだわり濃厚プリンです。'
  },
  {
    id: 'sweet3',
    name: 'バニラアイス',
    price: 400,
    category: 'sweets',
    image: './lastAssignment/sweet3.png',
    clipingImage: './lastAssignment/sweet3-rected.png',
    description: 'バニラビーンズが豊かに香る王道のアイスクリーム。食後の口の中をさっぱりと癒やしてくれます。',
  },
  {
    id: 'drink1',
    name: 'ウーロン茶',
    price: 380,
    category: 'drink',
    image: './lastAssignment/drink1.png',
    clipingImage: './lastAssignment/drink1-rected.png',
    description: 'お口の中をさっぱりとさせてくれる定番のソフトドリンク。食事の合間のリフレッシュにどうぞ。',
  },
  {
    id: 'drink2',
    name: 'オレンジジュース 100%',
    price: 420,
    category: 'drink',
    image: './lastAssignment/drink2.png',
    clipingImage: './lastAssignment/drink2-rected.png',
    description: '果汁100%のジューシーでみずみずしい味わい。程よい甘みと酸味のバランスが抜群な一杯です。'
  },
  {
    id: 'drink3',
    name: 'コカ・コーラ',
    price: 420,
    category: 'drink',
    image: './lastAssignment/drink3.png',
    clipingImage: './lastAssignment/drink3-rected.png',
    description: '炭酸の強い刺激と独特の爽快感がたまらない王道ドリンク。揚げ物やお肉料理との相性が抜群です。',
  },
  {
    id: 'drink4',
    name: 'ジンジャーエール（甘口）',
    price: 420,
    category: 'drink',
    image: './lastAssignment/drink4.png',
    clipingImage: './lastAssignment/drink4-rected.png',
    description: 'すっきりとした甘さと、心地よい炭酸のハジける喉越しが楽しめる、世代を問わず大人気の定番炭酸です。',
  },
  {
    id: 'drink5',
    name: 'グレープフルーツジュース 100%',
    price: 420,
    category: 'drink',
    image: './lastAssignment/drink5.png',
    clipingImage: './lastAssignment/drink5-rected.png',
    description: 'グレープフルーツ特有のほろ苦さと、シャープな酸味が広がる一杯。お口をすっきりとリセットします。',
  }
];

/**
 * ==========================================
 * 2. 状態管理
 * ==========================================
 */
let cart = []; 
let currentCategory = 'beer'; // 初期表示はビールカテゴリー
let orderHistory = [];
let isCheckoutConfirmed = false; //会計確定のフラグ
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

  filteredProducts.forEach(product => {
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
<button class="order-button" onclick="triggerSpecialAnimation('${product.id}'); event.stopPropagation();">詳細を見る</button>      </div>
    `;
    menuGrid.appendChild(card);
  });

  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');

  if (nextBtn && beforeBtn) {
const tabButtons = Array.from(document.querySelectorAll('header.tab-bar button'));
const currentActiveBtn = document.querySelector('header.tab-bar button.active');
const currentIndex = tabButtons.indexOf(currentActiveBtn);

if (currentIndex === -1) {
  nextBtn.style.setProperty('display', 'flex', 'important');
  beforeBtn.style.setProperty('display', 'flex', 'important');
} else {

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

  modalQuantity = 1; 

  presentationContainer.style.display = 'flex';

// カテゴリーによって出力するHTMLを条件分岐
if (product.category === 'beer') {
  // ==========================================
  // 【1】ビールカテゴリーのときのレイアウト
  // ==========================================

  // おすすめ商品のHTMLを動的に生成
  let recommendHtml = '';
  if (product.recommendations && product.recommendations.length > 0) {
    product.recommendations.forEach(recId => {
      const recProduct = products.find(p => p.id === recId);
      if (recProduct) {
recommendHtml += `
  <div class="recommend-card" 
       style="background-image: url('${recProduct.clipingImage || recProduct.image}'); background-size: cover; background-position: center; background-repeat: no-repeat; display: flex; flex-direction: column; justify-content: flex-end; padding: 10px;"
       onclick="showSetMenuPanel('${recProduct.id}'); event.stopPropagation();">
    <div style="background: rgba(255, 255, 242, 0.9); padding: 6px; border-radius: 6px; border: 1px dashed #FFBE0B;">
      <div style="font-size: 13px; font-weight: 800; color: #333; white-space: normal; line-height: 1.2;">${recProduct.name}</div>
      <div style="font-size: 12px; font-weight: 800; color: #E35205; margin-top: 2px;">¥${recProduct.price.toLocaleString()}</div>
    </div>
  </div>
`;
      }
    });
  } else {
    recommendHtml = `
      <div class="recommend-card" style="display: flex; align-items: center; justify-content: center; color: #7A7A7A; font-size: 14px;"></div>
      <div class="recommend-card" style="display: flex; align-items: center; justify-content: center; color: #7A7A7A; font-size: 14px;"></div>
    `;
  }

  presentationContainer.innerHTML = `
    <div class="special-wrapper">
      <div class="presentation-left-image" onclick="event.stopPropagation();">
        <img src="${product.clipingImage || product.image}" alt="${product.name}" onerror="this.src='./lastAssignment/default.png'">
      </div>
      <div class="presentation-right-content" onclick="event.stopPropagation();">
        <div style="white-space: nowrap; padding-left: 100px; padding-right: 40px;">
          <div style="font-size: 32px; font-weight: bold; color: #000; margin-bottom: 10px; white-space: normal; word-break: break-all;">
           ${product.name}
          </div>
<div style="font-size: 32px; color: #E35205; font-weight: 800; font-family: inherit; margin-top: 15px;">
  <span>¥${product.price.toLocaleString()}</span>
  <span style="font-size: 16px; color: #7A7A7A; font-weight: normal;">(税込)</span>
</div>
          <div class="beer-specs">
            ${product.alcohol !== undefined ? `<span class="modal-product-alcohol">Alc. ${product.alcohol}%</span>` : ''}
            ${product.dryAndSweet !== undefined ? `
              <div class="taste-slider-container">
               <div class="taste-pointer-area">
                <div class="taste-pointer" style="left: ${product.dryAndSweet}%;">▼</div>
                </div>
                 <div class="taste-bar-wrapper">
                  <span class="taste-label left-label">辛口</span>
                  <div class="taste-line"></div>
                  <span class="taste-label right-label">甘口</span>
                </div>
              </div>
            ` : ''}
          </div>
          <div class="modal-product-description" style="white-space: normal; max-width: 500px;">
             ${product.description || ''}
          </div>
          
          <div class="recommend-title">おすすめのセットメニュー</div>
          
          <div class="recommend-menu">
            ${recommendHtml}
          </div>
       </div>
       
       <div class="frame-order-button" style="width: 100%; display: flex; justify-content: flex-end; align-items: center; gap: 20px; margin-top: auto;">
          <div style="pointer-events: auto; display: flex; align-items: center; height: 60px; background: #fff; border: 2px solid #7A7A7A; border-radius: 8px; overflow: hidden;">
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
}else {
  // ==========================================
  // 【2】ビール以外のカテゴリーのときのレイアウト
  // ==========================================
  presentationContainer.innerHTML = `
<div class="special-wrapper">
    <div class="presentation-left-image non-beer-image" onclick="event.stopPropagation();">
      <img class="clipping-mode-img" src="${product.clippingImage || product.image}" alt="${product.name}" onerror="this.src='./lastAssignment/default.png'">
    </div>
      
      <div class="presentation-right-content" onclick="event.stopPropagation();">
        <div style="white-space: nowrap; padding-left: 40px; padding-right: 40px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
          
          <div style="font-size: 32px; font-weight: bold; color: #000; margin-bottom: 10px; white-space: normal; word-break: break-all;">
            ${product.name}
          </div>
          <div style="font-size: 32px; color: #333; margin-top: 15px;">
            <span>¥${product.price.toLocaleString()}</span>
            <span style="font-size: 16px;">(税込)</span>
          </div>

          <div class="modal-product-description" style="white-space: normal; max-width: 500px; margin-top: 20px;">
            ${product.description || ''}
          </div>
          
          <div class="recommend-title">おすすめのセットメニュー</div>
          
          <div class="recommend-menu">
            <div class="recommend-card" style="background-image: url('${product.clippingImage || product.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="recommend-card" style="background-image: url('${product.clippingImage || product.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
          </div>
        </div>
        
        <div class="frame-order-button" style="width: 100%; display: flex; justify-content: flex-end; align-items: center; gap: 20px; margin-top: auto;">
          <div style="pointer-events: auto; display: flex; align-items: center; height: 60px; background: #fff; border: 2px solid #7A7A7A; border-radius: 8px; overflow: hidden;">
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
}
  presentationContainer.onclick = function(event) {
    if (event.target === presentationContainer) {
      closeSpecialPresentation();
    }
  };
}
function addDirectFromAnimation(productId, event) {
  if (isCheckoutConfirmed) {
    alert('すでにお会計が確定しているため、これ以上の追加注文はできません。');
    return;
  }
  if (event) {
    event.stopPropagation();
    event.preventDefault();
    playFlyToCartAnimation(event);
  }

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += modalQuantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: modalQuantity
    });
  }

  updateCartDisplay();
// ★ ここを修正：セットメニューのパネルが開いているときは、全体を閉じずに右パネルだけを消す
  const panel = document.getElementById('setMenuFloatPanel');
  if (panel) {
    // アニメーション付きで右パネルを片方だけ消し、ビールを元の位置に戻す
    panel.classList.remove('float-in-active');
    setTimeout(() => {
      panel.remove();
      const specialWrapper = document.querySelector('.special-wrapper');
      if (specialWrapper) {
        specialWrapper.classList.remove('slide-left-active');
      }
    }, 400);
  } else {
    // 通常の注文リスト追加時は、今まで通りモーダル全体を閉じる
    closeSpecialPresentation();
  }
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
let modalQuantity = 1;

// 個数を増減させる関数
function changeModalQuantity(amount, event) {
  if (event) {
    event.stopPropagation(); 
    event.preventDefault();
  }

  const targetQuantity = modalQuantity + amount;

  if (targetQuantity < 1) {
    return;
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

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalContent) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  modalQuantity = 1;

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
    
    <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 25px; width: 100%;">
      
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
  if (isCheckoutConfirmed) {
    alert('すでにお会計が確定しているため、これ以上の追加注文はできません。');
    return;
  }
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
  setupTabEvents();
  
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
        displayMenus(); 
      }
    });

// 1. サイドバーの「お会計」ボタンのクリックイベント
const checkBtn = document.querySelector('.btn-check');
if (checkBtn) {
  checkBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    showCheckoutSection(); // 会計確認画面への切り替え実行
  });
}

// 2. 既存の「他の通常タブが押されたときに隠す」処理を拡張し、会計画面用のID（checkoutWrapper）も非表示にするよう連動させます
const allCategoryTabsExtended = document.querySelectorAll('header.tab-bar button');
allCategoryTabsExtended.forEach(tab => {
  tab.addEventListener('click', () => {
    const menuWrapper = document.getElementById('menuGridWrapper');
    const historyWrapper = document.getElementById('historyGridWrapper');
    const serviceWrapper = document.getElementById('serviceGridWrapper');
    const checkoutWrapper = document.getElementById('checkoutGridWrapper');
    
    if (menuWrapper && historyWrapper && serviceWrapper && checkoutWrapper) {
      menuWrapper.style.display = 'block';
      historyWrapper.style.none = 'none';
      serviceWrapper.style.display = 'none';
      checkoutWrapper.style.display = 'none'; // 通常タブが押されたら会計確認を確実に隠す
    }
  });
});

const historyBtn = document.querySelector('.btn-history');
if (historyBtn) {
  historyBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    showOrderHistory();
  });
}

const normalTabs = document.querySelectorAll('header.tab-bar button');
normalTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const menuWrapper = document.getElementById('menuGridWrapper');
    const historyWrapper = document.getElementById('historyGridWrapper');
    if (menuWrapper && historyWrapper) {
      menuWrapper.style.display = 'block';
      historyWrapper.style.display = 'none';
    }
  });
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
        return;
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
      const tabButtonsArray = Array.from(tabButtons);
      const currentActiveBtn = document.querySelector('header.tab-bar button.tab-btn.active');
      const currentIndex = tabButtonsArray.indexOf(currentActiveBtn);

      let prevIndex = currentIndex - 1;
      if (currentIndex === -1 || prevIndex < 0) {
        return;
      }

      const prevButton = tabButtonsArray[prevIndex];
      if (prevButton) {
        prevButton.click();
      }
    });
  }

// サイドバー「サービス」ボタン
const serviceBtn = document.querySelector('.btn-service');
if (serviceBtn) {
  serviceBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    showServiceSection(); 
  });
}
const allCategoryTabs = document.querySelectorAll('header.tab-bar button');
allCategoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const menuWrapper = document.getElementById('menuGridWrapper');
    const historyWrapper = document.getElementById('historyGridWrapper');
    const serviceWrapper = document.getElementById('serviceGridWrapper');
    
    if (menuWrapper && historyWrapper && serviceWrapper) {
      menuWrapper.style.display = 'block';
      historyWrapper.style.display = 'none';
      serviceWrapper.style.display = 'none';
    }
  });
});
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
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const timeStr = `${hours}:${minutes}`;

      // カートの中身を履歴配列に移動（初期状態はすべて「調理中」とする）
      cart.forEach(item => {
        orderHistory.push({
          time: timeStr,
          status: 'cooking', // cooking = 調理中, delivered = お届け済
          name: item.name,
          quantity: item.quantity,
          price: item.price * item.quantity
        });
      });

      alert('注文が確定しました！');
      cart = [];
      updateCartDisplay();
      
      if (document.getElementById('historyGridWrapper').style.display === 'flex' || document.getElementById('historyGridWrapper').style.display === 'block') {
        showOrderHistory();
      }
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
  const button = event.currentTarget || event.target;
  if (!button) return;

  const btnRect = button.getBoundingClientRect();
  
  const cartTarget = document.getElementById('cartItems') || document.querySelector('.cart-icon');
  if (!cartTarget) return;
  const cartRect = cartTarget.getBoundingClientRect();

  const square = document.createElement('div');
  square.className = 'flying-square';

  square.textContent = `+${modalQuantity}`;

  square.style.left = `${btnRect.left + btnRect.width / 2 - 5}px`;
  square.style.top = `${btnRect.top + btnRect.height / 2 - 5}px`;

  document.body.appendChild(square);

  requestAnimationFrame(() => {
    square.style.left = `${cartRect.left + cartRect.width / 2 - 5}px`;
    square.style.top = `${cartRect.top + cartRect.height / 2 - 5}px`;
    
    square.style.transform = 'scale(0.3)';
    square.style.opacity = '0';
  });

  setTimeout(() => {
    square.remove();
  }, 600);
}

/**
 * ==========================================
 * ★新設：会計確認画面の表示と明細集計
 * ==========================================
 */
function showCheckoutSection() {
  const menuWrapper = document.getElementById('menuGridWrapper');
  const historyWrapper = document.getElementById('historyGridWrapper');
  const serviceWrapper = document.getElementById('serviceGridWrapper');
  const checkoutWrapper = document.getElementById('checkoutGridWrapper');
  
  if (!menuWrapper || !historyWrapper || !serviceWrapper || !checkoutWrapper) return;

  // 1. タブバーのアクティブクラスをすべて外す
  const tabButtons = document.querySelectorAll('header.tab-bar button');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  // 2. 左右のナビゲーション矢印を隠す
  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');
  if (nextBtn) nextBtn.style.setProperty('display', 'none', 'important');
  if (beforeBtn) beforeBtn.style.setProperty('display', 'none', 'important');

  // 3. 他の全ての画面を非表示にし、会計確認エリアを表示する
  menuWrapper.style.setProperty('display', 'none', 'important');
  historyWrapper.style.setProperty('display', 'none', 'important');
  serviceWrapper.style.setProperty('display', 'none', 'important');
  checkoutWrapper.style.setProperty('display', 'block', 'important');

  // 4. 明細テーブルの構築
  const tableBody = document.getElementById('checkoutTableBody');
  const totalPriceLabel = document.getElementById('checkoutTotalPrice');
  tableBody.innerHTML = '';
  
  if (orderHistory.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #7A7A7A; padding: 40px 0;">まだご注文がありません。</td></tr>`;
    totalPriceLabel.textContent = '¥0';
    return;
  }

  let grandTotal = 0;

  // 5. 履歴データ(orderHistory)をループして、同じ商品を合計してきれいに見せる（またはそのまま明細にする）
  // 運用の分かりやすさのため、今回は注文ごとの明細をそのまま並べます
  orderHistory.forEach(item => {
    grandTotal += item.price;
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td class="checkout-col-name">${item.name}</td>
      <td class="checkout-col-qty">${item.quantity}</td>
      <td class="checkout-col-subtotal">¥${item.price.toLocaleString()}</td>
    `;
    tableBody.appendChild(tr);
  });

  // 6. 支払合計金額カードに数値を反映
  totalPriceLabel.textContent = `¥${grandTotal.toLocaleString()}`;
}


function executeFinalCheckout() {
  if (orderHistory.length === 0) {
    alert('注文履歴がないため、お会計は行えません。');
    return;
  }

  const isConfirmed = confirm('お会計を確定してよろしいですか？\n※これ以上の追加注文はできなくなります。');
  if (isConfirmed) {
    cart = [];
    updateCartDisplay(); // カートの表示をゼロにリセット

    isCheckoutConfirmed = true;

    alert('お会計リクエストを送信しました。\n伝票を持ってレジまでお越しください。ご利用ありがとうございました！');
  }
}

/* ==========================================
 * 注文履歴画面
 * ==========================================
 */
function showOrderHistory() {
  const menuWrapper = document.getElementById('menuGridWrapper');
  const historyWrapper = document.getElementById('historyGridWrapper');
  
  // サービス画面のラッパー要素を取得
  const serviceWrapper = document.getElementById('serviceGridWrapper');
  
  const tableBody = document.getElementById('historyTableBody');
  const totalPriceLabel = document.getElementById('historyTotalPrice');
  
  if (!menuWrapper || !historyWrapper || !tableBody || !totalPriceLabel) return;

  // 1. タブバーのアクティブクラスをすべて外す
  const tabButtons = document.querySelectorAll('header.tab-bar button');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  // 2. 左右のナビゲーション矢印を隠す
  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');
  if (nextBtn) nextBtn.style.setProperty('display', 'none', 'important');
  if (beforeBtn) beforeBtn.style.setProperty('display', 'none', 'important');

  // 3. メニューとサービス画面を「両方とも非表示」にし、履歴エリアを表示する
  menuWrapper.style.setProperty('display', 'none', 'important');
  if (serviceWrapper) {
    serviceWrapper.style.setProperty('display', 'none', 'important');
  }
  historyWrapper.style.setProperty('display', 'block', 'important');

  // 4. テーブルの中身を一度リセット
  tableBody.innerHTML = '';
  let grandTotal = 0;

  if (orderHistory.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #7A7A7A; padding: 40px 0;">まだ注文履歴がありません。</td></tr>`;
    totalPriceLabel.textContent = '¥0';
    return;
  }

  // 5. 履歴配列をループしてテーブルの行を動生成
  orderHistory.forEach(item => {
    grandTotal += item.price;
    const tr = document.createElement('tr');
    
    const statusClass = item.status === 'cooking' ? 'cooking' : item.status === 'delivered' ? 'delivered' : 'unarrived';
    const statusText = item.status === 'cooking' ? '調理中' : item.status === 'delivered' ? 'お届け済' : '未到着';

    tr.innerHTML = `
      <td class="col-time">${item.time}</td>
      <td class="col-status"><span class="status-badge ${statusClass}">${statusText}</span></td>
      <td class="col-name">${item.name}</td>
      <td class="col-qty">${item.quantity}</td>
      <td class="col-price">¥${item.price.toLocaleString()}</td>
    `;
    tableBody.appendChild(tr);
  });

  // 6. 履歴の総合計金額を反映
  totalPriceLabel.textContent = `¥${grandTotal.toLocaleString()}`;
}

/**
 * ==========================================
 * サービス（アメニティ）画面の表示と個数制御ロジック
 * ==========================================
 */
function showServiceSection() {
  const menuWrapper = document.getElementById('menuGridWrapper');
  const historyWrapper = document.getElementById('historyGridWrapper');
  const serviceWrapper = document.getElementById('serviceGridWrapper');
  
  if (!menuWrapper || !historyWrapper || !serviceWrapper) return;

  const tabButtons = document.querySelectorAll('header.tab-bar button');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  const nextBtn = document.querySelector('.nav-next-btn');
  const beforeBtn = document.querySelector('.nav-before-btn');
  if (nextBtn) nextBtn.style.setProperty('display', 'none', 'important');
  if (beforeBtn) beforeBtn.style.setProperty('display', 'none', 'important');

  menuWrapper.style.display = 'none';
  historyWrapper.style.display = 'none';
  serviceWrapper.style.display = 'block';

  // 画面を開いたときは、すべてのアイテムの数量表示を「1」にリセットする
  const qtyTexts = document.querySelectorAll('.service-qty-text');
  qtyTexts.forEach(txt => txt.textContent = '1');
}

// 各サービスカード内のプラスマイナスボタンを動作させる関数
function changeServiceQuantity(idKey, amount, event) {
  if (event) {
    event.stopPropagation();
  }

  const qtyElement = document.getElementById(`serviceQty_${idKey}`);
  if (!qtyElement) return;

  let currentQty = parseInt(qtyElement.textContent, 10) || 1;
  let targetQty = currentQty + amount;

  // 1～10個の範囲で制御
  if (targetQty < 1) return;
  if (targetQty > 10) {
    alert('一度に選択できる数量は10個までです。');
    return;
  }

  qtyElement.textContent = targetQty;
}

function requestService(idKey, displayName) {
  if (isCheckoutConfirmed) {
    alert('すでにお会計が確定しているため、サービス要請は利用できません。');
    return;
  }
  const qtyElement = document.getElementById(`serviceQty_${idKey}`);
  if (!qtyElement) return;

  const selectedQty = parseInt(qtyElement.textContent, 10) || 1;

  const isConfirmed = confirm(`${displayName}を ${selectedQty}個 お持ちします。よろしいですか？`);

  if (isConfirmed) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}`;

    orderHistory.push({
      time: timeStr,
      status: 'unarrived',
      name: displayName,
      quantity: selectedQty,
      price: 0 
    });

    alert(`${displayName} × ${selectedQty}個 の注文を送信しました。しばらくお待ちください。`);
    
    const beerTab = document.querySelector('header.tab-bar button.tab-btn-beer');
    if (beerTab) {
      beerTab.click(); 
    }
  }
}
// ★追記：店員呼び出しボタンのクリックイベント
const callBtn = document.querySelector('.btn-call');
if (callBtn) {
  callBtn.addEventListener('click', (event) => {
    event.stopPropagation();

    const isConfirmed = confirm('店員を呼び出しますか？');

    if (isConfirmed) {
      alert('店員を呼び出しました。しばらくお待ちください。');
    }
  });
}

// セットメニューのミニカードを下からフロートインさせる関数
function showSetMenuPanel(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // 1. 元のビールモーダルに左スライド用のクラスを付与
  const specialWrapper = document.querySelector('.special-wrapper');
  if (specialWrapper) {
    specialWrapper.classList.add('slide-left-active');
  }

  // 2. すでにパネルが存在していれば一旦削除
  const existingPanel = document.getElementById('setMenuFloatPanel');
  if (existingPanel) {
    existingPanel.remove();
  }

  // 3. セットメニュー用のコンテナを生成
  const panel = document.createElement('div');
  panel.id = 'setMenuFloatPanel';
  panel.className = 'set-menu-float-panel';
  panel.onclick = function(e) { e.stopPropagation(); };

  // 4. 内部構造（画像とテキストをダイレクトに配置、画像参照を保証）
  panel.innerHTML = `
    <div class="set-menu-placeholder-card">
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 12px; color: #333; text-align: center; border-bottom: 2px dashed #FFBE0B; padding-bottom: 6px;">
        セットメニュー
      </div>
      
      <div class="set-menu-compact-thumb" style="background-image: url('${product.clipingImage || product.image}');"></div>
      <div class="set-menu-compact-info">
        <p class="set-menu-compact-name">${product.name}</p>
        <p class="set-menu-compact-price">¥${product.price.toLocaleString()} <span style="font-size: 11px; color: #7A7A7A;">(税込)</span></p>
      </div>

      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px; width: 100%;">
        <button class="order-button" style="width: 100%; height: 50px; font-size: 1.2rem; font-weight: bold;" 
                onclick="addDirectFromAnimation('${product.id}', event);">
          セットにこれを追加
        </button>
        <button type="button" style="width: 100%; height: 36px; background: #F0F0F0; border: 1px solid #7A7A7A; border-radius: 8px; font-size: 13px; font-weight: bold; cursor: pointer;" 
                onclick="document.getElementById('setMenuFloatPanel').classList.remove('float-in-active'); setTimeout(() => { document.getElementById('setMenuFloatPanel').remove(); document.querySelector('.special-wrapper').classList.remove('slide-left-active'); }, 400);">
          キャンセル
        </button>
      </div>
    </div>
  `;

  const presentationContainer = document.getElementById('specialPresentation');
  presentationContainer.appendChild(panel);

  setTimeout(() => {
    panel.classList.add('float-in-active');
  }, 50);
}