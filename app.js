// AURA FASHION APPLICATION LOGIC

// 1. PRODUCTS COLLECTION
const PRODUCTS = [
  {
    id: "dress_summer",
    name: "Aura Blossom Floral Summer Dress",
    category: "dress",
    price: 129.00,
    priceStr: "$129.00",
    rating: 4.8,
    image: "assets/clothes/dress_summer.png",
    tags: ["Floral", "Cotton", "Daywear"],
    description: "A breezy, vibrant floral summer dress crafted from organic long-staple cotton. Featuring a sweet-heart neckline and a flowing A-line midi skirt, it's perfect for warm days and coastal escapes."
  },
  {
    id: "dress_gown",
    name: "Crimson Serenade Evening Gown",
    category: "dress",
    price: 349.00,
    priceStr: "$349.00",
    rating: 4.9,
    image: "assets/clothes/dress_gown.png",
    tags: ["Luxury", "Silk", "Evening"],
    description: "An elegant floor-length red evening gown draped in premium mulberry silk. Embellished with an asymmetrical shoulder structure and a elegant side slit, it commands attention at any gala."
  },
  {
    id: "dress_suit",
    name: "Naval Command Blazer & Trousers Set",
    category: "suit",
    price: 289.00,
    priceStr: "$289.00",
    rating: 4.7,
    image: "assets/clothes/dress_suit.png",
    tags: ["Tailored", "Navy", "Formal"],
    description: "Double-breasted navy blazer paired with high-waisted wide-leg trousers. Made from breathable virgin wool blend, presenting a striking balance between power and effortless style."
  },
  {
    id: "dress_cocktail",
    name: "Midnight Velvet Cocktail Dress",
    category: "dress",
    price: 189.00,
    priceStr: "$189.00",
    rating: 4.9,
    image: "assets/clothes/dress_cocktail.png",
    tags: ["Velvet", "Chic", "Night out"],
    description: "A timeless, body-hugging little black cocktail dress crafted in luxurious midnight velvet. Features a delicate off-shoulder neckline and subtle side ruching for a flattering silhouette."
  },
  {
    id: "dress_jumpsuit",
    name: "Sage Linen Versatile Jumpsuit",
    category: "jumpsuit",
    price: 159.00,
    priceStr: "$159.00",
    rating: 4.6,
    image: "assets/clothes/dress_jumpsuit.png",
    tags: ["Linen", "Minimalist", "Relaxed"],
    description: "Relaxed utility jumpsuit in a beautiful washed sage tone. Crafted from pure Belgian linen, featuring an adjustable belt tie and utility pockets, taking you from day to night effortlessly."
  }
];

// 2. AUTO-ALIGN CONFIGURATION FOR STANDARD MODELS
// These values define the default coordinate mapping to auto-fit clothes on Emily (female) and Marcus (male)
const AUTO_ALIGN_DATA = {
  female: {
    dress_summer: { x: 4, y: 15, scale: 130, rotate: 0 },
    dress_gown: { x: 5, y: 35, scale: 140, rotate: 0 },
    dress_suit: { x: 2, y: 22, scale: 132, rotate: 0 },
    dress_cocktail: { x: 3, y: 10, scale: 128, rotate: 0 },
    dress_jumpsuit: { x: 4, y: 20, scale: 132, rotate: 0 }
  },
  male: {
    dress_suit: { x: 0, y: 20, scale: 148, rotate: 0 },
    dress_jumpsuit: { x: 0, y: 20, scale: 145, rotate: 0 },
    // Female clothes on male mannequin fallback
    dress_summer: { x: 0, y: 20, scale: 140, rotate: 0 },
    dress_gown: { x: 0, y: 30, scale: 145, rotate: 0 },
    dress_cocktail: { x: 0, y: 15, scale: 138, rotate: 0 }
  }
};

// 3. AI STYLIST KNOWLEDGE BASE
const STYLIST_INTELLIGENCE = {
  // Occasions data
  occasions: {
    wedding: {
      title: "Wedding Guest Styling",
      suitability: {
        dress_summer: { score: 92, verdict: "Beautifully Festive", summary: "A delightful choice for afternoon, garden, or semi-formal weddings. The floral prints radiate joy, and the lightweight fabric allows for comfortable dancing." },
        dress_gown: { score: 75, verdict: "Slightly Dramatic", summary: "Perfect for high-end black-tie evening weddings. However, for traditional daytime weddings, ensure the deep crimson tone doesn't overshadow the bridal color rules." },
        dress_suit: { score: 85, verdict: "Chic & Modern", summary: "A highly sophisticated modern wedding guest style. Soften the structured navy look with feminine jewelry and gold accessories for a stylish cocktail style." },
        dress_cocktail: { score: 80, verdict: "Elegant Nighttime Choice", summary: "Excellent for an evening reception. If the wedding is daytime, a black dress might feel too dark; pair with brightly colored accessories to light it up." },
        dress_jumpsuit: { score: 88, verdict: "Effortlessly Glamorous", summary: "An excellent smart-casual wedding option. The sage green is seasonally versatile and looks outstanding with strappy nude block heels and gold accents." }
      },
      layering: "A tailored light cream blazer draped over the shoulders or an embroidered pashmina shawl.",
      footwear: "Neutral block heels or metallic strappy stiletto sandals. Avoid wedges.",
      accessories: "A pearl clutch bag and statement gold statement drop earrings.",
      rules: "Do not wear white or solid cream. Dress respectfully; avoid excessively revealing details unless stated in the theme."
    },
    gala: {
      title: "Gala & Black Tie Styling",
      suitability: {
        dress_summer: { score: 35, verdict: "Too Casual", summary: "This daytime floral cotton dress does not meet the formal dress code requirements of a black-tie gala. It will look overly informal." },
        dress_gown: { score: 98, verdict: "Gala Masterpiece", summary: "Absolute perfection. The sweeping length, luxurious silk drape, and striking red tone embody classic high-fashion gala glamour. A showstopper." },
        dress_suit: { score: 90, verdict: "Avant-Garde Elegance", summary: "A brilliant alternative to traditional gowns. Ensure the suit is meticulously ironed, and styling is ultra-glam (sleek bun, bold red lip, diamond chokers)." },
        dress_cocktail: { score: 85, verdict: "Elegant & Safe", summary: "A solid option, though some black-tie galas strictly request floor-length outfits. Style this with luxurious crystals to elevate the cocktail length." },
        dress_jumpsuit: { score: 65, verdict: "Under-dressed", summary: "Linen fabric is historically too casual for galas. The outfit structure is lovely, but the linen textile lacks the formal sheen required for black tie." }
      },
      layering: "A plush faux-fur stole, a velvet wrap, or a structured evening cape.",
      footwear: "High-shine metallic stilettos or sleek designer pointed pump heels.",
      accessories: "A shimmering crystal box clutch and statement chandelier earrings.",
      rules: "Black tie calls for formal opulence. Keep fabrics premium (silk, velvet, satin) and avoid casual footwear."
    },
    beach: {
      title: "Beach & Resort Styling",
      suitability: {
        dress_summer: { score: 98, verdict: "Tropical Paradise", summary: "Sensational! The breathable cotton and bright florals harmonize beautifully with sea breezes and sandy coastlines. Comfortable, chic, and organic." },
        dress_gown: { score: 20, verdict: "Impassable & Heavy", summary: "The heavy floor-length silk gown will sweep the sand and absorb humidity rapidly. It is extremely impractical for a beach setting." },
        dress_suit: { score: 45, verdict: "Overly Stiff", summary: "Too corporate and restrictive for the beach. If you must wear a suit, ditch the blazer and wear trousers rolled up with a linen top." },
        dress_cocktail: { score: 50, verdict: "A Bit Stark", summary: "Velvet fabric is too warm and heavy for beach climates. The black tone absorbs heat, making it uncomfortable." },
        dress_jumpsuit: { score: 94, verdict: "Resort Elite", summary: "Outstanding comfort and style. Pure linen excels in tropical heat, and the earthy sage tone blends perfectly with seaside nature." }
      },
      layering: "A wide-brim woven straw hat or a lightweight linen overshirt left unbuttoned.",
      footwear: "Tan leather slides, woven raffia wedges, or stylish metallic flat sandals.",
      accessories: "A structured straw tote bag, polarized tortoiseshell sunglasses, and layered shell bracelets.",
      rules: "Prioritize breathable natural fibers. Steer clear of high heels which sink into the sand; opt for flat soles or wedges."
    },
    date: {
      title: "Romantic Date Night Styling",
      suitability: {
        dress_summer: { score: 82, verdict: "Sweet & Casual", summary: "Very cute and approachable, perfect for a casual park date, daytime cafe meet-up, or seaside dinner. Gives a warm, friendly impression." },
        dress_gown: { score: 60, verdict: "Slightly Intimidating", summary: "Unless you are heading to a Michelin-star opera night, this full-length gown will feel too formal for a typical restaurant date." },
        dress_suit: { score: 88, verdict: "Sultry & Confident", summary: "Oozes confidence and high-fashion allure. Wear the blazer buttoned up with a delicate lace camisole peeking through, and style with strappy heels." },
        dress_cocktail: { score: 96, verdict: "Classic Romance", summary: "The ultimate date-night choice. Velvet has an inviting texture, and the off-shoulder neckline frames the collarbones beautifully. Captivating and romantic." },
        dress_jumpsuit: { score: 80, verdict: "Chic & Effortless", summary: "A great laid-back date outfit. Gives a very cool, modern, and effortless vibe. Dress it up with heels and drop earrings for a polished touch." }
      },
      layering: "A classic distressed leather biker jacket or a draped cashmere cardigan.",
      footwear: "Strappy mid-height heels or elegant suede ankle boots.",
      accessories: "A delicate chain shoulder bag, minimalist gold pendant necklace, and soft perfume.",
      rules: "Balance comfort with allure. Choose one focal point (like shoulders or legs) and keep the rest of the outfit relaxed."
    },
    brunch: {
      title: "Sunday Brunch & Daytime Social",
      suitability: {
        dress_summer: { score: 95, verdict: "Effortless Brunch Chic", summary: "Excellent. Bright, floral, and airy—exactly what a sunny weekend brunch demands. Fits matching floral garden scenery flawlessly." },
        dress_gown: { score: 15, verdict: "Extremely Overdressed", summary: "Wearing a silk evening gown to a brunch spot will look completely out of place. Keep this in your wardrobe for after-dark galas." },
        dress_suit: { score: 70, verdict: "A Bit Corporate", summary: "Can feel a bit too business-like for a relaxed Sunday. Soften the look by wearing a casual graphic tee underneath and leaving the blazer open." },
        dress_cocktail: { score: 65, verdict: "Too Night-centric", summary: "Velvet textures and off-shoulder black silhouettes are intended for evening wear. It will look a bit heavy under bright morning sun." },
        dress_jumpsuit: { score: 96, verdict: "Brunch Perfection", summary: "Flawless choice. Sage linen is light, fresh, and modern. You look polished yet completely comfortable for a long, lazy mimosa brunch." }
      },
      layering: "A cropped denim jacket or an oversized cream knit cardigan.",
      footwear: "Clean white leather sneakers, leather mules, or espadrilles.",
      accessories: "A woven bucket bag, cat-eye sunglasses, and simple gold hoops.",
      rules: "Keep fabrics light and layouts comfortable. Natural makeup and relaxed hairstyles pair best with daytime socials."
    },
    party: {
      title: "Clubbing & Cocktail Party Styling",
      suitability: {
        dress_summer: { score: 68, verdict: "A Bit Sweet", summary: "A little too wholesome for a high-energy nightclub or formal cocktail bar. It can work for a backyard birthday pool party, though." },
        dress_gown: { score: 70, verdict: "Too Restrictive", summary: "Looks magnificent but is hard to move in. The floor-sweeping silk trail risks getting stepped on or stained on crowded dancefloors." },
        dress_suit: { score: 86, verdict: "Bold Fashion Statement", summary: "Incredibly stylish. Select a brightly colored crop top or lace corset underneath to transform this suit from office-wear to nightlife glamour." },
        dress_cocktail: { score: 98, verdict: "Cocktail Queen", summary: "Outstanding! Velvet fabric catches party lights beautifully, and the short cocktail hemline is tailor-made for dancing. Sleek, classic, and glamorous." },
        dress_jumpsuit: { score: 75, verdict: "A Bit Understated", summary: "Very comfortable, but linen doesn't reflect party lights. Elevate the look with metallic belts, shiny platform heels, and heavy glitter makeup." }
      },
      layering: "A cropped sequin blazer, a leather jacket, or a sheer silk duster coat.",
      footwear: "High-heeled boots, platform sandals, or statement metallic heels.",
      accessories: "A rhinestone clutch, reflective jewelry, and dramatic winged eyeliner.",
      rules: "Embrace shine, texture, and drama. Ensure you can move easily and stay cool under hot venue lights."
    },
    office: {
      title: "Office & Professional Presentation",
      suitability: {
        dress_summer: { score: 55, verdict: "Too Casual", summary: "The sundress shoulder straps and bright floral cotton material are generally too informal for standard corporate offices. Requires a blazer to layer over it." },
        dress_gown: { score: 10, verdict: "Inappropriate", summary: "A red silk evening gown with shoulder cutouts and floor-length drape is entirely inappropriate for a business meeting. Save it for the red carpet." },
        dress_suit: { score: 98, verdict: "The Executive Standard", summary: "Perfection. The tailored navy structure radiates competence, respect, and class. Excellent fit for client meetings, interviews, or board presentations." },
        dress_cocktail: { score: 40, verdict: "Too Evening-centric", summary: "The off-shoulder velvet drape is designed for cocktails, not computers. It is far too revealing and heavy for a professional workplace." },
        dress_jumpsuit: { score: 85, verdict: "Business Casual", summary: "Very stylish for creative or smart-casual office spaces. Tie the belt structured, keep buttons modest, and style with a smart blazer." }
      },
      layering: "A tailored structured blazer or a classic double-breasted trench coat.",
      footwear: "Leather loafers, pointed-toe flats, or modest leather block heel pumps.",
      accessories: "A structured laptop tote bag, a classic leather strap watch, and minimal stud earrings.",
      rules: "Keep necklines modest and hemlines neat. Steer clear of sequins, sheer fabrics, or loud beach-style prints."
    }
  }
};

// 4. MAIN APP STATE
const STATE = {
  activeModel: 'female',      // 'female', 'male', 'custom', or 'measurements'
  customPhotoSrc: null,      // base64 or URL of uploaded image
  currentProduct: null,      // active garment product object
  cart: [],                  // rack items list
  fitSettings: {
    x: 0,
    y: 0,
    scale: 100,
    rotate: 0,
    opacity: 100
  },
  fitMode: 'auto',           // 'auto' or 'manual'
  isDragging: false,
  dragStart: { x: 0, y: 0 },
  imagesCache: {},            // Preloaded images cache
  
  // New States
  tryonMode: '2d',           // '2d' or '3d'
  webcamStream: null,
  webcamVideo: null,
  isWebcamActive: false,
  isWebcamFrozen: false,
  frozenFrameData: null,
  cameraDeviceId: '',
  measurements: {
    gender: 'female',
    height: 165,
    chest: 90,
    waist: 70,
    hips: 95
  },
  three: {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    mannequin: null,
    garment: null
  }
};

// 5. DOM ELEMENTS
const DOM = {
  navShop: document.getElementById('btn-nav-shop'),
  navStylist: document.getElementById('btn-nav-stylist'),
  panelShop: document.getElementById('panel-shop'),
  panelFitroom: document.getElementById('panel-fitroom'),
  panelStylist: document.getElementById('panel-stylist'),
  productGrid: document.getElementById('product-grid'),
  searchInput: document.getElementById('search-input'),
  categoryBtns: document.querySelectorAll('.category-tabs .tab-btn'),
  
  canvas: document.getElementById('fitting-canvas'),
  fitting3DContainer: document.getElementById('fitting-3d-container'),
  cameraGuide: document.getElementById('camera-guide-overlay'),
  canvasLoader: document.getElementById('canvas-loader'),
  workspaceTip: document.getElementById('workspace-tip'),
  fittingStatusText: document.getElementById('fitting-status-text'),
  btnResetFit: document.getElementById('btn-reset-fit'),
  
  // 2D vs 3D Modes
  btnMode2D: document.getElementById('btn-mode-2d'),
  btnMode3D: document.getElementById('btn-mode-3d'),
  
  controlTabs: document.querySelectorAll('.tab-selectors .selector-tab'),
  panelModels: document.getElementById('panel-models'),
  panelUpload: document.getElementById('panel-upload'),
  panelMeasurements: document.getElementById('panel-measurements'),
  modelCards: document.querySelectorAll('.model-card'),
  
  // Upload and Camera sub-elements
  btnSubtabUpload: document.getElementById('btn-subtab-upload'),
  btnSubtabCamera: document.getElementById('btn-subtab-camera'),
  subpanelUpload: document.getElementById('subpanel-upload'),
  subpanelCamera: document.getElementById('subpanel-camera'),
  cameraSelect: document.getElementById('camera-select'),
  btnCameraToggle: document.getElementById('btn-camera-toggle'),
  btnCameraFreeze: document.getElementById('btn-camera-freeze'),
  webcamVideo: document.getElementById('webcam-video'),
  
  uploadZone: document.getElementById('upload-zone'),
  photoUploadInput: document.getElementById('photo-upload-input'),
  uploadStatusPanel: document.getElementById('upload-status-panel'),
  uploadedFileName: document.getElementById('uploaded-file-name'),
  btnClearUpload: document.getElementById('btn-clear-upload'),
  
  // Measurements controls
  genderTabBtns: document.querySelectorAll('.gender-tab-btn'),
  sliderMeasureHeight: document.getElementById('slider-measure-height'),
  sliderMeasureChest: document.getElementById('slider-measure-chest'),
  sliderMeasureWaist: document.getElementById('slider-measure-waist'),
  sliderMeasureHips: document.getElementById('slider-measure-hips'),
  valMeasureHeight: document.getElementById('val-measure-height'),
  valMeasureChest: document.getElementById('val-measure-chest'),
  valMeasureWaist: document.getElementById('val-measure-waist'),
  valMeasureHips: document.getElementById('val-measure-hips'),
  
  manualAdjustPanel: document.getElementById('manual-adjust-panel'),
  sliderPosY: document.getElementById('slider-pos-y'),
  sliderPosX: document.getElementById('slider-pos-x'),
  sliderScale: document.getElementById('slider-scale'),
  sliderRotate: document.getElementById('slider-rotate'),
  sliderOpacity: document.getElementById('slider-opacity'),
  
  valPosY: document.getElementById('val-pos-y'),
  valPosX: document.getElementById('val-pos-x'),
  valScale: document.getElementById('val-scale'),
  valRotate: document.getElementById('val-rotate'),
  valOpacity: document.getElementById('val-opacity'),
  
  btnZoomIn: document.getElementById('btn-zoom-in'),
  btnZoomOut: document.getElementById('btn-zoom-out'),
  btnRotateL: document.getElementById('btn-rotate-l'),
  btnRotateR: document.getElementById('btn-rotate-r'),
  
  // Fit advisor
  fitAdvisorPanel: document.getElementById('fit-advisor-panel'),
  valRecommendedSize: document.getElementById('val-recommended-size'),
  valFitScore: document.getElementById('val-fit-score'),
  compatibilityBar: document.getElementById('compatibility-bar'),
  fitAreasGrid: document.getElementById('fit-areas-grid'),
  
  occasionSelect: document.getElementById('occasion-select'),
  stylistResults: document.getElementById('stylist-results'),
  reportContainer: document.getElementById('report-container'),
  reportBadge: document.getElementById('report-badge'),
  reportTitle: document.getElementById('report-title'),
  reportScore: document.getElementById('report-score'),
  reportVerdict: document.getElementById('report-verdict'),
  reportSummary: document.getElementById('report-summary'),
  tipLayering: document.getElementById('tip-layering'),
  tipFootwear: document.getElementById('tip-footwear'),
  tipAccessories: document.getElementById('tip-accessories'),
  tipRules: document.getElementById('tip-rules'),
  
  chatInput: document.getElementById('chat-input'),
  btnChatSend: document.getElementById('btn-chat-send'),
  chatResponse: document.getElementById('chat-response'),
  chatResponseText: document.getElementById('chat-response-text'),
  
  cartModal: document.getElementById('cart-modal'),
  btnToggleCart: document.getElementById('btn-toggle-cart'),
  btnCloseCart: document.getElementById('btn-close-cart'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartSummarySection: document.getElementById('cart-summary-section'),
  cartTotal: document.getElementById('cart-total'),
  cartBadge: document.getElementById('cart-badge'),
  
  // Mobile Tab Navigation
  mobileTabBtns: document.querySelectorAll('.mobile-tab-nav .mobile-tab-btn')
};

// Canvas context
const ctx = DOM.canvas.getContext('2d');

// 6. APP INITIALIZATION
function init() {
  bindEvents();
  renderProducts(PRODUCTS);
  loadModelImage(); // Load initial female model
  
  // Set up default fit sliders values
  syncSliderLabels();
  
  // Set up default measurements labels
  syncMeasurementUI();
  
  // If on mobile viewport, initialize active tab
  if (window.innerWidth <= 1024) {
    switchTab('shop');
  }
}

// 7. EVENT BINDINGS
function bindEvents() {
  // Mobile Tab Navigation Events
  DOM.mobileTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      switchTab(target);
    });
  });

  // Search & Filters
  DOM.searchInput.addEventListener('input', handleSearch);
  DOM.categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      DOM.categoryBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      handleCategoryFilter(e.target.dataset.category);
    });
  });
  
  // Model Mannequin Selector
  DOM.modelCards.forEach(card => {
    card.addEventListener('click', (e) => {
      DOM.modelCards.forEach(c => c.classList.remove('active'));
      const activeCard = e.currentTarget;
      activeCard.classList.add('active');
      selectModel(activeCard.dataset.model);
    });
  });
  
  // 2D vs 3D Try-On Mode Selectors
  DOM.btnMode2D.addEventListener('click', () => {
    switchTryonMode('2d');
  });
  DOM.btnMode3D.addEventListener('click', () => {
    switchTryonMode('3d');
  });
  
  // Fitting Workspace Tabs (Models vs Upload vs Measurements)
  DOM.controlTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      DOM.controlTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      
      const targetTab = e.target.dataset.tab;
      
      // Hide all panels
      DOM.panelModels.classList.remove('active');
      DOM.panelUpload.classList.remove('active');
      DOM.panelMeasurements.classList.remove('active');
      
      if (targetTab === 'models') {
        DOM.panelModels.classList.add('active');
        if (STATE.isWebcamActive) stopWebcam();
        
        // Revert back to selected standard mannequin card
        const activeCard = document.querySelector('.model-card.active');
        if (activeCard) {
          selectModel(activeCard.dataset.model);
        }
      } else if (targetTab === 'upload') {
        DOM.panelUpload.classList.add('active');
        if (DOM.btnSubtabCamera.classList.contains('active')) {
          STATE.activeModel = 'custom';
          drawWorkspace();
          updateStatusText("Camera active. Start camera to try on dress live.");
        } else {
          if (STATE.customPhotoSrc) {
            selectModel('custom');
          } else {
            STATE.activeModel = 'custom';
            drawWorkspace();
            updateStatusText("Upload a photo to see virtual fitting");
          }
        }
      } else if (targetTab === 'measurements') {
        DOM.panelMeasurements.classList.add('active');
        if (STATE.isWebcamActive) stopWebcam();
        
        STATE.activeModel = 'measurements';
        updateStatusText("Personalized body measurements active.");
        drawWorkspace();
        runSizeAdvisor();
      }
    });
  });
  
  // Try It On Yourself Sub-tabs (Upload vs Camera)
  DOM.btnSubtabUpload.addEventListener('click', () => {
    DOM.btnSubtabUpload.classList.add('active');
    DOM.btnSubtabCamera.classList.remove('active');
    DOM.subpanelUpload.classList.add('active');
    DOM.subpanelCamera.classList.remove('active');
    
    if (STATE.isWebcamActive) stopWebcam();
    if (STATE.customPhotoSrc) {
      selectModel('custom');
    }
  });
  
  DOM.btnSubtabCamera.addEventListener('click', () => {
    DOM.btnSubtabUpload.classList.remove('active');
    DOM.btnSubtabCamera.classList.add('active');
    DOM.subpanelUpload.classList.remove('active');
    DOM.subpanelCamera.classList.add('active');
    
    STATE.activeModel = 'custom';
    updateStatusText("Camera ready. Click Start Camera to begin live feed.");
    drawWorkspace();
    listCameraDevices();
  });
  
  // Webcam Control Triggers
  DOM.btnCameraToggle.addEventListener('click', toggleWebcam);
  DOM.btnCameraFreeze.addEventListener('click', () => {
    if (STATE.isWebcamFrozen) {
      unfreezeCameraFrame();
    } else {
      freezeCameraFrame();
    }
  });
  DOM.cameraSelect.addEventListener('change', (e) => {
    STATE.cameraDeviceId = e.target.value;
    if (STATE.isWebcamActive) {
      stopWebcam();
      startWebcam();
    }
  });
  
  // Measurements Input Controls
  DOM.genderTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      DOM.genderTabBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      STATE.measurements.gender = e.currentTarget.dataset.gender;
      
      if (STATE.tryonMode === '3d') {
        build3DMannequin();
      } else if (STATE.activeModel === 'measurements') {
        drawWorkspace();
      }
      runSizeAdvisor();
    });
  });
  
  DOM.sliderMeasureHeight.addEventListener('input', (e) => {
    STATE.measurements.height = parseInt(e.target.value);
    DOM.valMeasureHeight.innerText = STATE.measurements.height + "cm";
    if (STATE.tryonMode === '3d') {
      build3DMannequin();
    } else if (STATE.activeModel === 'measurements') {
      drawWorkspace();
    }
    runSizeAdvisor();
  });
  
  DOM.sliderMeasureChest.addEventListener('input', (e) => {
    STATE.measurements.chest = parseInt(e.target.value);
    DOM.valMeasureChest.innerText = STATE.measurements.chest + "cm";
    if (STATE.tryonMode === '3d') {
      build3DMannequin();
    } else if (STATE.activeModel === 'measurements') {
      drawWorkspace();
    }
    runSizeAdvisor();
  });
  
  DOM.sliderMeasureWaist.addEventListener('input', (e) => {
    STATE.measurements.waist = parseInt(e.target.value);
    DOM.valMeasureWaist.innerText = STATE.measurements.waist + "cm";
    if (STATE.tryonMode === '3d') {
      build3DMannequin();
    } else if (STATE.activeModel === 'measurements') {
      drawWorkspace();
    }
    runSizeAdvisor();
  });
  
  DOM.sliderMeasureHips.addEventListener('input', (e) => {
    STATE.measurements.hips = parseInt(e.target.value);
    DOM.valMeasureHips.innerText = STATE.measurements.hips + "cm";
    if (STATE.tryonMode === '3d') {
      build3DMannequin();
    } else if (STATE.activeModel === 'measurements') {
      drawWorkspace();
    }
    runSizeAdvisor();
  });
  
  // Photo Upload drag and drop events
  DOM.uploadZone.addEventListener('click', () => {
    DOM.photoUploadInput.click();
  });
  DOM.photoUploadInput.addEventListener('change', handlePhotoUpload);
  
  DOM.uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    DOM.uploadZone.style.borderColor = 'var(--color-accent)';
  });
  DOM.uploadZone.addEventListener('dragleave', () => {
    DOM.uploadZone.style.borderColor = 'var(--border-glass)';
  });
  DOM.uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    DOM.uploadZone.style.borderColor = 'var(--border-glass)';
    if (e.dataTransfer.files.length > 0) {
      processPhotoFile(e.dataTransfer.files[0]);
    }
  });
  
  DOM.btnClearUpload.addEventListener('click', clearPhotoUpload);
  
  // Fit Adjustment Sliders
  DOM.sliderPosY.addEventListener('input', (e) => handleSliderChange('y', parseInt(e.target.value)));
  DOM.sliderPosX.addEventListener('input', (e) => handleSliderChange('x', parseInt(e.target.value)));
  DOM.sliderScale.addEventListener('input', (e) => handleSliderChange('scale', parseInt(e.target.value)));
  DOM.sliderRotate.addEventListener('input', (e) => handleSliderChange('rotate', parseInt(e.target.value)));
  DOM.sliderOpacity.addEventListener('input', (e) => handleSliderChange('opacity', parseInt(e.target.value)));
  
  // Canvas Quick Floating Control Buttons
  DOM.btnZoomIn.addEventListener('click', () => adjustFitMetric('scale', 5));
  DOM.btnZoomOut.addEventListener('click', () => adjustFitMetric('scale', -5));
  DOM.btnRotateL.addEventListener('click', () => adjustFitMetric('rotate', -3));
  DOM.btnRotateR.addEventListener('click', () => adjustFitMetric('rotate', 3));
  DOM.btnResetFit.addEventListener('click', resetFittingCoordinates);
  
  // Direct Canvas Drag Event Handlers
  DOM.canvas.addEventListener('mousedown', handleDragStart);
  DOM.canvas.addEventListener('mousemove', handleDragMove);
  window.addEventListener('mouseup', handleDragEnd);
  
  DOM.canvas.addEventListener('touchstart', handleDragStart, { passive: false });
  DOM.canvas.addEventListener('touchmove', handleDragMove, { passive: false });
  window.addEventListener('touchend', handleDragEnd);
  
  // AI Stylist Event triggers
  DOM.occasionSelect.addEventListener('change', generateStylistReport);
  DOM.btnChatSend.addEventListener('click', handleChatQuestion);
  DOM.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleChatQuestion();
  });
  
  // Cart/Styling Rack Modals
  DOM.btnToggleCart.addEventListener('click', toggleCartModal);
  DOM.btnCloseCart.addEventListener('click', toggleCartModal);
  DOM.cartModal.addEventListener('click', (e) => {
    if (e.target === DOM.cartModal) toggleCartModal();
  });
}

// 8. RENDER PRODUCTS TO THE CATALOG GRID
function renderProducts(productsList) {
  DOM.productGrid.innerHTML = '';
  
  if (productsList.length === 0) {
    DOM.productGrid.innerHTML = '<div class="empty-results">No matches found in Aura Collection.</div>';
    return;
  }
  
  productsList.forEach(product => {
    const card = document.createElement('div');
    card.className = `product-card ${STATE.currentProduct && STATE.currentProduct.id === product.id ? 'trying-on' : ''}`;
    card.dataset.id = product.id;
    
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      </div>
      <div class="product-details">
        <span class="product-name" title="${product.name}">${product.name}</span>
        <div class="product-meta">
          <span class="product-price">${product.priceStr}</span>
          <div class="product-tags">
            <span class="tag-score">★ ${product.rating}</span>
          </div>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => tryOnProduct(product));
    DOM.productGrid.appendChild(card);
  });
}

// 9. EMULATOR & SPA ACTIONS
function switchTab(tabId) {
  // Update mobile bottom tab buttons active class
  DOM.mobileTabBtns.forEach(btn => {
    if (btn.dataset.target === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update panels active class
  const panels = [DOM.panelShop, DOM.panelFitroom, DOM.panelStylist];
  panels.forEach(panel => {
    if (panel.id === `panel-${tabId}`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  // Re-draw canvas workspace
  drawWorkspace();
}

// 10. SEARCH & FILTER LOGIC
function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const activeTab = document.querySelector('.category-tabs .tab-btn.active').dataset.category;
  
  filterCollection(query, activeTab);
}

function handleCategoryFilter(category) {
  const query = DOM.searchInput.value.toLowerCase();
  filterCollection(query, category);
}

function filterCollection(query, category) {
  const filtered = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(query) || 
                          product.tags.some(t => t.toLowerCase().includes(query)) ||
                          product.description.toLowerCase().includes(query);
    const matchesCategory = category === 'all' || product.category === category;
    
    return matchesSearch && matchesCategory;
  });
  renderProducts(filtered);
}

// 11. MODEL & PHOTO LOADING LOGIC
function selectModel(modelType) {
  STATE.activeModel = modelType;
  updateStatusText(`Switching mannequins...`);
  
  if (modelType === 'custom') {
    if (STATE.customPhotoSrc) {
      STATE.fitMode = 'manual';
      DOM.manualAdjustPanel.classList.remove('collapse');
      loadCustomPhoto();
    } else {
      updateStatusText("Upload a photo to see virtual fitting");
      drawWorkspace();
    }
  } else {
    // If standard model, check if we have custom alignments or fallback
    if (STATE.currentProduct) {
      applyAutoAlignment();
    } else {
      DOM.manualAdjustPanel.classList.add('collapse');
    }
    loadModelImage();
  }
}

function loadModelImage() {
  const modelPath = STATE.activeModel === 'female' ? 'assets/models/model_female.png' : 'assets/models/model_male.png';
  
  showLoader(true);
  
  preloadImage(modelPath, (img) => {
    STATE.imagesCache['model'] = img;
    showLoader(false);
    drawWorkspace();
    
    const name = STATE.activeModel === 'female' ? 'Emily (Classic Fit)' : 'Marcus (Athletic Fit)';
    updateStatusText(`Model active: ${name}`);
  });
}

function handlePhotoUpload(e) {
  if (e.target.files.length > 0) {
    processPhotoFile(e.target.files[0]);
  }
}

function processPhotoFile(file) {
  if (!file.type.startsWith('image/')) {
    alert("Please upload a valid image file.");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(event) {
    STATE.customPhotoSrc = event.target.result;
    
    // Update DOM Upload status
    DOM.uploadedFileName.innerText = file.name;
    DOM.uploadStatusPanel.classList.remove('hidden');
    DOM.uploadZone.classList.add('hidden');
    
    // Switch active view model to custom
    selectModel('custom');
  };
  reader.readAsDataURL(file);
}

function loadCustomPhoto() {
  showLoader(true);
  preloadImage(STATE.customPhotoSrc, (img) => {
    STATE.imagesCache['model'] = img;
    showLoader(false);
    
    // If auto fitting, shift garment to manual adjust because custom bodies vary
    STATE.fitMode = 'manual';
    DOM.manualAdjustPanel.classList.remove('collapse');
    
    // Center garment fitting settings on first custom upload
    if (STATE.fitSettings.x === 0 && STATE.fitSettings.y === 0) {
      STATE.fitSettings.x = 0;
      STATE.fitSettings.y = 50;
      STATE.fitSettings.scale = 120;
      syncSlidersFromState();
    }
    
    drawWorkspace();
    updateStatusText("User Photo active. Adjust garment fit manually.");
  });
}

function clearPhotoUpload() {
  STATE.customPhotoSrc = null;
  DOM.photoUploadInput.value = '';
  DOM.uploadStatusPanel.classList.add('hidden');
  DOM.uploadZone.classList.remove('remove');
  DOM.uploadZone.classList.remove('hidden');
  
  // Revert back to female model
  const modelsTabBtn = document.querySelector('.tab-selectors [data-tab="models"]');
  modelsTabBtn.click();
}

function simulateWebcamCapture() {
  showLoader(true);
  setTimeout(() => {
    // Generate simulated avatar silhouette
    const canvasTmp = document.createElement('canvas');
    canvasTmp.width = 600;
    canvasTmp.height = 750;
    const ctxTmp = canvasTmp.getContext('2d');
    
    // Draw background gradient
    const grad = ctxTmp.createLinearGradient(0,0,0,750);
    grad.addColorStop(0, '#13131c');
    grad.addColorStop(1, '#08080b');
    ctxTmp.fillStyle = grad;
    ctxTmp.fillRect(0,0,600,750);
    
    // Draw neon guide avatar head and torso
    ctxTmp.strokeStyle = 'rgba(197, 168, 128, 0.4)';
    ctxTmp.lineWidth = 3;
    ctxTmp.shadowColor = 'rgba(197, 168, 128, 0.6)';
    ctxTmp.shadowBlur = 15;
    
    // Head
    ctxTmp.beginPath();
    ctxTmp.arc(300, 200, 70, 0, Math.PI*2);
    ctxTmp.stroke();
    
    // Neck & Torso
    ctxTmp.beginPath();
    ctxTmp.moveTo(300, 270);
    ctxTmp.lineTo(300, 310);
    ctxTmp.lineTo(180, 380);
    ctxTmp.lineTo(190, 550);
    ctxTmp.moveTo(300, 310);
    ctxTmp.lineTo(420, 380);
    ctxTmp.lineTo(410, 550);
    ctxTmp.stroke();
    
    // Guide Line watermark
    ctxTmp.fillStyle = '#626675';
    ctxTmp.font = '14px Inter';
    ctxTmp.textAlign = 'center';
    ctxTmp.shadowBlur = 0;
    ctxTmp.fillText("WEBCAM SIMULATOR TARGET SILHOUETTE", 300, 100);
    
    STATE.customPhotoSrc = canvasTmp.toDataURL();
    
    // Update DOM Upload status
    DOM.uploadedFileName.innerText = "webcam_snap_" + Date.now().toString().slice(-4) + ".png";
    DOM.uploadStatusPanel.classList.remove('hidden');
    DOM.uploadZone.classList.add('hidden');
    
    selectModel('custom');
  }, 1000);
}

// 12. PRODUCT TRY ON IMPLEMENTATION
function tryOnProduct(product) {
  STATE.currentProduct = product;
  
  // Highlight card in grid
  document.querySelectorAll('.product-card').forEach(c => {
    c.classList.remove('trying-on');
    if (c.dataset.id === product.id) {
      c.classList.add('trying-on');
    }
  });
  
  updateStatusText(`Dressing up: ${product.name}...`);
  showLoader(true);
  
  preloadGarmentImage(product.image, (img) => {
    STATE.imagesCache['garment'] = img;
    showLoader(false);
    
    // Auto align if standard model. If custom model, keep manual settings.
    if (STATE.activeModel !== 'custom') {
      applyAutoAlignment();
    } else {
      STATE.fitMode = 'manual';
      DOM.manualAdjustPanel.classList.remove('collapse');
    }
    
    drawWorkspace();
    updateStatusText(`Virtual Try-on: ${product.name}`);
    
    // Fade out tip banner after a few seconds
    DOM.workspaceTip.classList.remove('fade-out');
    setTimeout(() => {
      DOM.workspaceTip.classList.add('fade-out');
    }, 4500);
    
    // If AI Stylist panel is active, refresh recommendations
    if (DOM.panelStylist.classList.contains('active')) {
      generateStylistReport();
    }
    
    // If in 3D mode, build 3D mesh for clothing
    if (STATE.tryonMode === '3d') {
      build3DGarment();
    }
    
    // Run size advisor comparison
    runSizeAdvisor();
    
    // Add shopping bag/rack add button to status panel
    addQuickActionToStatus();

    // Auto-switch to fitroom panel on mobile layout
    if (window.innerWidth <= 1024) {
      switchTab('fitroom');
    }
  });
}

function applyAutoAlignment() {
  const modelType = STATE.activeModel;
  
  if (modelType !== 'female' && modelType !== 'male') {
    // Safely apply manual alignment defaults for custom photos / measurements silhouettes
    STATE.fitSettings.x = 0;
    STATE.fitSettings.y = 20;
    STATE.fitSettings.scale = 120;
    STATE.fitSettings.rotate = 0;
    STATE.fitSettings.opacity = 100;
    STATE.fitMode = 'manual';
    
    DOM.manualAdjustPanel.classList.remove('collapse');
    syncSlidersFromState();
    return;
  }
  
  const garmentId = STATE.currentProduct.id;
  const align = AUTO_ALIGN_DATA[modelType][garmentId];
  if (align) {
    STATE.fitSettings.x = align.x;
    STATE.fitSettings.y = align.y;
    STATE.fitSettings.scale = align.scale;
    STATE.fitSettings.rotate = align.rotate;
    STATE.fitSettings.opacity = 100;
    STATE.fitMode = 'auto';
    
    DOM.manualAdjustPanel.classList.add('collapse');
  } else {
    // Suit/Jumpsuit fallbacks for male model, or non-aligned combos
    STATE.fitSettings.x = 0;
    STATE.fitSettings.y = 20;
    STATE.fitSettings.scale = 135;
    STATE.fitSettings.rotate = 0;
    STATE.fitSettings.opacity = 100;
    STATE.fitMode = 'manual';
    
    DOM.manualAdjustPanel.classList.remove('collapse');
  }
  
  syncSlidersFromState();
}

// Helper to add current garment to rack inside status text
function addQuickActionToStatus() {
  const statusContainer = DOM.fittingStatusText.parentElement;
  
  // Remove existing rack button if any
  const oldBtn = document.getElementById('btn-add-rack-quick');
  if (oldBtn) oldBtn.remove();
  
  const rackBtn = document.createElement('button');
  rackBtn.id = 'btn-add-rack-quick';
  rackBtn.style.cssText = `
    background: var(--color-accent-light);
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    font-size: 9px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;
    transition: var(--transition-smooth);
  `;
  rackBtn.innerText = "🛒 Add to Rack";
  
  rackBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(STATE.currentProduct);
  });
  
  statusContainer.appendChild(rackBtn);
}

// 13. CANVAS WORKSPACE DRAWER ENGINE
function drawWorkspace() {
  // Clear canvas
  ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);
  
  const modelImg = STATE.imagesCache['model'];
  const garmentImg = STATE.imagesCache['garment'];
  
  if (STATE.tryonMode === '3d') {
    return;
  }
  
  // A. Draw base background / feed
  if (STATE.isWebcamActive) {
    if (STATE.isWebcamFrozen && STATE.frozenFrameData) {
      ctx.drawImage(STATE.frozenFrameData, 0, 0, DOM.canvas.width, DOM.canvas.height);
    } else {
      // Mirror video feed for natural user experience
      ctx.save();
      ctx.translate(DOM.canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(DOM.webcamVideo, 0, 0, DOM.canvas.width, DOM.canvas.height);
      ctx.restore();
    }
  } else if (STATE.activeModel === 'measurements') {
    drawMeasurementsSilhouette();
  } else {
    // Draw base background color
    ctx.fillStyle = '#0f0f13';
    ctx.fillRect(0, 0, DOM.canvas.width, DOM.canvas.height);
    
    // Background grid lines (luxury scanner look)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 30;
    for (let x = 0; x < DOM.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, DOM.canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < DOM.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(DOM.canvas.width, y);
      ctx.stroke();
    }
    
    // B. Draw active model
    if (modelImg && STATE.activeModel !== 'custom') {
      const modelAspect = modelImg.width / modelImg.height;
      const canvasAspect = DOM.canvas.width / DOM.canvas.height;
      
      let drawW = DOM.canvas.width;
      let drawH = DOM.canvas.height;
      let dx = 0;
      let dy = 0;
      
      if (modelAspect > canvasAspect) {
        drawW = DOM.canvas.height * modelAspect;
        dx = (DOM.canvas.width - drawW) / 2;
      } else {
        drawH = DOM.canvas.width / modelAspect;
        dy = (DOM.canvas.height - drawH) / 2;
      }
      
      ctx.drawImage(modelImg, dx, dy, drawW, drawH);
    } else if (modelImg && STATE.activeModel === 'custom') {
      const modelAspect = modelImg.width / modelImg.height;
      const canvasAspect = DOM.canvas.width / DOM.canvas.height;
      
      let drawW = DOM.canvas.width;
      let drawH = DOM.canvas.height;
      let dx = 0;
      let dy = 0;
      
      if (modelAspect > canvasAspect) {
        drawW = DOM.canvas.height * modelAspect;
        dx = (DOM.canvas.width - drawW) / 2;
      } else {
        drawH = DOM.canvas.width / modelAspect;
        dy = (DOM.canvas.height - drawH) / 2;
      }
      ctx.drawImage(modelImg, dx, dy, drawW, drawH);
    } else {
      drawDummySilhouette();
    }
  }
  
  // C. Draw active garment overlay with natural blending
  if (STATE.currentProduct && garmentImg) {
    const { x, y, scale, rotate, opacity } = STATE.fitSettings;
    
    // Scale size multiplier based on custom measurements if in Measurements view
    let sizeMultiplier = 1.0;
    if (STATE.activeModel === 'measurements') {
      sizeMultiplier = (STATE.measurements.chest / 90) * (STATE.measurements.height / 165);
    }
    
    const baseWidth = DOM.canvas.width * 0.35;
    const baseHeight = baseWidth * (garmentImg.height / garmentImg.width);
    
    const finalWidth = baseWidth * (scale / 100) * sizeMultiplier;
    const finalHeight = baseHeight * (scale / 100) * sizeMultiplier;
    
    ctx.save();
    ctx.globalAlpha = opacity / 100;
    
    // Use multiply overlay blend mode only for model photo trials (to blend with skin folds).
    // Use regular overlay composite for live webcam or vector blueprint layouts to avoid dark staining.
    if (!STATE.isWebcamActive && STATE.activeModel !== 'measurements') {
      ctx.globalCompositeOperation = 'multiply';
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }
    
    // Translate origin to central offset position
    ctx.translate(DOM.canvas.width / 2 + x, DOM.canvas.height / 2 + y);
    
    // Apply rotation
    ctx.rotate((rotate * Math.PI) / 180);
    
    // Draw centering image offsets
    ctx.drawImage(garmentImg, -finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
    
    // Reset blend mode before drawing UI overlays (bounding box)
    ctx.globalCompositeOperation = 'source-over';
    
    // Draw interactive dashed bounding box overlay if in manual alignment mode
    if (STATE.fitMode === 'manual' && STATE.isDragging) {
      ctx.strokeStyle = '#c5a880';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(-finalWidth / 2 - 5, -finalHeight / 2 - 5, finalWidth + 10, finalHeight + 10);
      
      // Control corners handles
      ctx.fillStyle = '#c5a880';
      ctx.setLineDash([]);
      const size = 6;
      ctx.fillRect(-finalWidth / 2 - 5 - size/2, -finalHeight / 2 - 5 - size/2, size, size);
      ctx.fillRect(finalWidth / 2 + 5 - size/2, -finalHeight / 2 - 5 - size/2, size, size);
      ctx.fillRect(-finalWidth / 2 - 5 - size/2, finalHeight / 2 + 5 - size/2, size, size);
      ctx.fillRect(finalWidth / 2 + 5 - size/2, finalHeight / 2 + 5 - size/2, size, size);
    }
    
    ctx.restore();
  }
}

function drawDummySilhouette() {
  ctx.fillStyle = '#1c1c24';
  ctx.font = '14px Inter';
  ctx.textAlign = 'center';
  ctx.fillText("Select a mannequin or upload your photo", DOM.canvas.width / 2, DOM.canvas.height / 2);
}

function drawMeasurementsSilhouette() {
  ctx.fillStyle = '#0f0f13';
  ctx.fillRect(0, 0, DOM.canvas.width, DOM.canvas.height);
  
  // Draw guidelines grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
  ctx.lineWidth = 1;
  const gridSize = 30;
  for (let x = 0; x < DOM.canvas.width; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, DOM.canvas.height); ctx.stroke();
  }
  for (let y = 0; y < DOM.canvas.height; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(DOM.canvas.width, y); ctx.stroke();
  }
  
  // Draw glowing outline silhouette of body based on measurements
  const { gender, height, chest, waist, hips } = STATE.measurements;
  
  const scaleH = height / 165;
  const bustW = (chest / 100) * 80;
  const waistW = (waist / 100) * 80;
  const hipsW = (hips / 100) * 80;
  
  const centerX = DOM.canvas.width / 2;
  const centerY = DOM.canvas.height / 2;
  
  ctx.save();
  ctx.strokeStyle = 'rgba(197, 168, 128, 0.6)';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(197, 168, 128, 0.4)';
  ctx.shadowBlur = 10;
  
  // Head
  const headRadius = 45 * scaleH;
  const headY = centerY - 250 * scaleH;
  ctx.beginPath();
  ctx.arc(centerX, headY, headRadius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Torso Path
  ctx.beginPath();
  // Neck
  ctx.moveTo(centerX - 15 * scaleH, headY + headRadius);
  ctx.lineTo(centerX - 15 * scaleH, headY + headRadius + 20 * scaleH);
  // Shoulder Left
  ctx.lineTo(centerX - bustW - 10, headY + headRadius + 35 * scaleH);
  // Bust Left
  ctx.lineTo(centerX - bustW, centerY - 80 * scaleH);
  // Waist Left
  ctx.lineTo(centerX - waistW, centerY);
  // Hip Left
  ctx.lineTo(centerX - hipsW, centerY + 80 * scaleH);
  // Leg Outer Left
  ctx.lineTo(centerX - hipsW * 0.7, centerY + 280 * scaleH);
  // Leg Inner Left
  ctx.lineTo(centerX - 10, centerY + 280 * scaleH);
  // Crotch
  ctx.lineTo(centerX - 5, centerY + 110 * scaleH);
  ctx.lineTo(centerX + 5, centerY + 110 * scaleH);
  // Leg Inner Right
  ctx.lineTo(centerX + 10, centerY + 280 * scaleH);
  // Leg Outer Right
  ctx.lineTo(centerX + hipsW * 0.7, centerY + 280 * scaleH);
  // Hip Right
  ctx.lineTo(centerX + hipsW, centerY + 80 * scaleH);
  // Waist Right
  ctx.lineTo(centerX + waistW, centerY);
  // Bust Right
  ctx.lineTo(centerX + bustW, centerY - 80 * scaleH);
  // Shoulder Right
  ctx.lineTo(centerX + bustW + 10, headY + headRadius + 35 * scaleH);
  // Neck right
  ctx.lineTo(centerX + 15 * scaleH, headY + headRadius + 20 * scaleH);
  ctx.lineTo(centerX + 15 * scaleH, headY + headRadius);
  
  ctx.closePath();
  ctx.stroke();
  
  // Draw subtle glowing fill
  ctx.fillStyle = 'rgba(197, 168, 128, 0.03)';
  ctx.fill();
  
  // Draw text indicators
  ctx.fillStyle = '#626675';
  ctx.font = '10px Inter';
  ctx.textAlign = 'left';
  ctx.shadowBlur = 0;
  
  ctx.fillText(`Height: ${height}cm`, 20, 50);
  ctx.fillText(`Chest: ${chest}cm`, 20, 75);
  ctx.fillText(`Waist: ${waist}cm`, 20, 100);
  ctx.fillText(`Hips: ${hips}cm`, 20, 125);
  
  ctx.restore();
}

// 14. INTERACTIVE DRAG CALIBRATION LOGIC
function handleDragStart(e) {
  if (!STATE.currentProduct || STATE.fitMode !== 'manual') return;
  
  // Disable native scroll dragging
  e.preventDefault();
  
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  
  const canvasRect = DOM.canvas.getBoundingClientRect();
  const clickX = ((clientX - canvasRect.left) / canvasRect.width) * DOM.canvas.width;
  const clickY = ((clientY - canvasRect.top) / canvasRect.height) * DOM.canvas.height;
  
  // Calculate relative click coordinate offsets to current garment center
  const garmentCenterX = DOM.canvas.width / 2 + STATE.fitSettings.x;
  const garmentCenterY = DOM.canvas.height / 2 + STATE.fitSettings.y;
  
  // Determine distance
  const dx = clickX - garmentCenterX;
  const dy = clickY - garmentCenterY;
  const dist = Math.sqrt(dx*dx + dy*dy);
  
  // Check if click was approximately inside a 180px click target radius
  if (dist < 220) {
    STATE.isDragging = true;
    STATE.dragStart.x = clickX - STATE.fitSettings.x;
    STATE.dragStart.y = clickY - STATE.fitSettings.y;
    drawWorkspace();
  }
}

function handleDragMove(e) {
  if (!STATE.isDragging) return;
  e.preventDefault();
  
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  
  const canvasRect = DOM.canvas.getBoundingClientRect();
  const moveX = ((clientX - canvasRect.left) / canvasRect.width) * DOM.canvas.width;
  const moveY = ((clientY - canvasRect.top) / canvasRect.height) * DOM.canvas.height;
  
  STATE.fitSettings.x = Math.round(moveX - STATE.dragStart.x);
  STATE.fitSettings.y = Math.round(moveY - STATE.dragStart.y);
  
  // Cap position boundaries
  STATE.fitSettings.x = Math.max(-300, Math.min(300, STATE.fitSettings.x));
  STATE.fitSettings.y = Math.max(-300, Math.min(300, STATE.fitSettings.y));
  
  syncSlidersFromState();
  drawWorkspace();
}

function handleDragEnd() {
  if (STATE.isDragging) {
    STATE.isDragging = false;
    drawWorkspace();
  }
}

// Adjust fitting metric slider programmatically
function adjustFitMetric(type, delta) {
  if (!STATE.currentProduct) return;
  STATE.fitMode = 'manual';
  DOM.manualAdjustPanel.classList.remove('collapse');
  
  if (type === 'scale') {
    STATE.fitSettings.scale = Math.max(20, Math.min(250, STATE.fitSettings.scale + delta));
  } else if (type === 'rotate') {
    STATE.fitSettings.rotate = Math.max(-90, Math.min(90, STATE.fitSettings.rotate + delta));
  }
  
  syncSlidersFromState();
  drawWorkspace();
}

function handleSliderChange(metric, value) {
  STATE.fitSettings[metric] = value;
  syncSliderLabels();
  
  // If user touches sliders, lock fit mode to manual and keep slider panel visible
  if (STATE.fitMode !== 'manual') {
    STATE.fitMode = 'manual';
    DOM.manualAdjustPanel.classList.remove('collapse');
  }
  
  drawWorkspace();
}

function resetFittingCoordinates() {
  if (!STATE.currentProduct) return;
  
  if (STATE.activeModel !== 'custom') {
    applyAutoAlignment();
  } else {
    STATE.fitSettings.x = 0;
    STATE.fitSettings.y = 50;
    STATE.fitSettings.scale = 120;
    STATE.fitSettings.rotate = 0;
    STATE.fitSettings.opacity = 100;
    syncSlidersFromState();
  }
  
  drawWorkspace();
  updateStatusText("Mannequin fit coordinates reset.");
}

function syncSlidersFromState() {
  DOM.sliderPosY.value = STATE.fitSettings.y;
  DOM.sliderPosX.value = STATE.fitSettings.x;
  DOM.sliderScale.value = STATE.fitSettings.scale;
  DOM.sliderRotate.value = STATE.fitSettings.rotate;
  DOM.sliderOpacity.value = STATE.fitSettings.opacity;
  syncSliderLabels();
}

function syncSliderLabels() {
  DOM.valPosY.innerText = STATE.fitSettings.y + "px";
  DOM.valPosX.innerText = STATE.fitSettings.x + "px";
  DOM.valScale.innerText = STATE.fitSettings.scale + "%";
  DOM.valRotate.innerText = STATE.fitSettings.rotate + "°";
  DOM.valOpacity.innerText = STATE.fitSettings.opacity + "%";
}

// 15. AI OCCASION RECOMMENDATION SYSTEM
function generateStylistReport() {
  const occasion = DOM.occasionSelect.value;
  const product = STATE.currentProduct;
  
  if (!occasion) {
    // Occasion not chosen yet
    return;
  }
  
  // Switch to Stylist navigation tab on mobile view
  if (window.innerWidth <= 1024) {
    switchTab('stylist');
  }
  
  // Clear any old chatbot bubbles
  DOM.chatResponse.classList.add('hidden');
  DOM.chatInput.value = '';
  
  if (!product) {
    // Show empty state requesting dress selection
    DOM.stylistResults.classList.add('empty');
    DOM.stylistResults.querySelector('.stylist-empty-state').innerHTML = `
      <div class="stylist-icon">👗</div>
      <h4>Select a Garment First</h4>
      <p>Please browse the catalog and choose a garment to try on, then select an occasion to unlock the stylist's intelligence review.</p>
    `;
    return;
  }
  
  // Extract occasion and dress styling rules
  const database = STYLIST_INTELLIGENCE.occasions[occasion];
  const suitDetails = database.suitability[product.id];
  
  // Render report details
  DOM.stylistResults.classList.remove('empty');
  DOM.reportContainer.classList.remove('hidden');
  
  // Set Suitability Badge Theme
  DOM.reportBadge.innerText = suitDetails.verdict;
  DOM.reportBadge.className = 'badge-suitability';
  if (suitDetails.score >= 90) {
    DOM.reportBadge.classList.add('perfect');
  } else if (suitDetails.score >= 75) {
    DOM.reportBadge.classList.add('good');
  } else {
    DOM.reportBadge.classList.add('caution');
  }
  
  DOM.reportTitle.innerText = `${database.title}`;
  DOM.reportScore.innerText = `${suitDetails.score}%`;
  DOM.reportVerdict.innerText = getScoreFeedbackHeader(suitDetails.score);
  DOM.reportSummary.innerText = suitDetails.summary;
  
  DOM.tipLayering.innerText = database.layering;
  DOM.tipFootwear.innerText = database.footwear;
  DOM.tipAccessories.innerText = database.accessories;
  DOM.tipRules.innerText = database.rules;
}

function getScoreFeedbackHeader(score) {
  if (score >= 95) return "Sensational Match! (Highly Recommended)";
  if (score >= 90) return "Excellent Style Harmony";
  if (score >= 80) return "Fashionable & Appropriate";
  if (score >= 70) return "Acceptable (Elevate with Styling)";
  if (score >= 50) return "Styling Challenge Required";
  return "Stylist Red Flag - Dress Code Clash";
}

// Interactive Chatbot local rules engine
function handleChatQuestion() {
  const query = DOM.chatInput.value.trim().toLowerCase();
  if (!query) return;
  
  const product = STATE.currentProduct;
  const occasion = DOM.occasionSelect.value;
  
  if (!product || !occasion) {
    alert("Please select both a garment and an occasion before consulting the stylist.");
    return;
  }
  
  const rules = STYLIST_INTELLIGENCE.occasions[occasion];
  const dressName = product.name;
  let reply = "";
  
  // Context-aware rules match
  if (query.includes("sneaker") || query.includes("shoe") || query.includes("boot") || query.includes("heels")) {
    reply = `Regarding footwear for the ${dressName} at a ${rules.title}: ${rules.footwear} is highly recommended. Avoid styles that clash with the venue's overall dress code rules.`;
  } else if (query.includes("jacket") || query.includes("blazer") || query.includes("cardigan") || query.includes("coat") || query.includes("cold") || query.includes("weather")) {
    reply = `If the temperature drops at the event, I recommend: ${rules.layering}. This maintains structural shape while keeping you warm.`;
  } else if (query.includes("bag") || query.includes("purse") || query.includes("clutch") || query.includes("jewelry") || query.includes("earring") || query.includes("necklace") || query.includes("gold") || query.includes("silver")) {
    reply = `To accessorize the look: ${rules.accessories} are recommended. Keep items coordinated with the tones of the outfit.`;
  } else if (query.includes("rule") || query.includes("etiquette") || query.includes("avoid") || query.includes("should not")) {
    reply = `Critical guidelines: ${rules.rules}. Adhering to this ensures you blend perfectly into the event's social protocol.`;
  } else if (query.includes("color") || query.includes("match") || query.includes("shade")) {
    reply = `Since you selected the ${dressName}, balance is key. Nude, gold, or silver accents provide the best clean contrast. Let the outfit remain the focal point.`;
  } else {
    // General fallback answers
    reply = `Stylist Verdict: The ${dressName} rates ${rules.suitability[product.id].score}% for this event. Pair it with matching ${rules.footwear} and complete the look with a ${rules.layering} for optimal results.`;
  }
  
  // Render stylist bubble
  DOM.chatResponseText.innerText = reply;
  DOM.chatResponse.classList.remove('hidden');
}

// 16. CART / STYLING RACK MODAL LOGIC
function toggleCartModal() {
  DOM.cartModal.classList.toggle('hidden');
  renderCart();
}

function addToCart(product) {
  // Check if product is already in cart
  const exists = STATE.cart.some(item => item.id === product.id);
  
  if (exists) {
    alert(`${product.name} is already on your styling rack.`);
    return;
  }
  
  STATE.cart.push(product);
  updateCartBadge();
  alert(`${product.name} successfully added to your styling rack!`);
}

function removeFromCart(productId) {
  STATE.cart = STATE.cart.filter(item => item.id !== productId);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  DOM.cartBadge.innerText = STATE.cart.length;
}

function renderCart() {
  DOM.cartItemsContainer.innerHTML = '';
  
  if (STATE.cart.length === 0) {
    DOM.cartItemsContainer.innerHTML = '<p class="empty-cart">No items in your rack. Try on clothing in the fitting room to add them here.</p>';
    DOM.cartSummarySection.classList.add('hidden');
    return;
  }
  
  DOM.cartSummarySection.classList.remove('hidden');
  let total = 0;
  
  STATE.cart.forEach(item => {
    total += item.price;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-details">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">${item.priceStr}</span>
      </div>
      <button class="btn-remove-item" data-id="${item.id}">✕</button>
    `;
    
    row.querySelector('.btn-remove-item').addEventListener('click', (e) => {
      removeFromCart(e.target.dataset.id);
    });
    
    DOM.cartItemsContainer.appendChild(row);
  });
  
  DOM.cartTotal.innerText = `$${total.toFixed(2)}`;
}

// 17. PRELOADING IMAGES HELPER
function preloadImage(src, callback) {
  const img = new Image();
  img.onload = () => callback(img);
  img.onerror = () => {
    console.error("Failed to load image asset:", src);
    showLoader(false);
    updateStatusText("Error loading image asset.");
  };
  img.src = src;
}

// 17b. GARMENT IMAGE LOADER WITH BACKGROUND REMOVAL
// Loads the garment image and strips the white/light background to make it transparent,
// so it composites naturally over the model instead of appearing as a rectangular overlay.
function preloadGarmentImage(src, callback) {
  preloadImage(src, (rawImg) => {
    const cleaned = removeWhiteBackground(rawImg);
    callback(cleaned);
  });
}

// Removes white/light background from a garment product photo.
// Uses an offscreen canvas to read pixel data, converts near-white pixels to transparent,
// and applies soft edge feathering for a natural composite look.
function removeWhiteBackground(img) {
  const offCanvas = document.createElement('canvas');
  offCanvas.width = img.width;
  offCanvas.height = img.height;
  const offCtx = offCanvas.getContext('2d');
  offCtx.drawImage(img, 0, 0);
  
  const imageData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
  const data = imageData.data;
  
  // Determine the background color by sampling corner pixels.
  // If corners are bright/white, we treat that as the background.
  const corners = [
    0,                                                    // top-left
    (offCanvas.width - 1) * 4,                            // top-right
    (offCanvas.height - 1) * offCanvas.width * 4,         // bottom-left
    ((offCanvas.height - 1) * offCanvas.width + offCanvas.width - 1) * 4  // bottom-right
  ];
  
  let bgR = 0, bgG = 0, bgB = 0, cornerCount = 0;
  corners.forEach(idx => {
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    // Only count if pixel is light (likely background)
    if (r > 180 && g > 180 && b > 180) {
      bgR += r; bgG += g; bgB += b;
      cornerCount++;
    }
  });
  
  // If no light corners found, the image may already have a non-white background
  if (cornerCount === 0) {
    // Return the original image as-is
    return img;
  }
  
  bgR = Math.round(bgR / cornerCount);
  bgG = Math.round(bgG / cornerCount);
  bgB = Math.round(bgB / cornerCount);
  
  // Sensitivity threshold: how close a pixel needs to be to the background color
  // to be considered background. Higher = more aggressive removal.
  const threshold = 60;
  // Feather range: pixels within this distance from the threshold edge get partial transparency
  const featherRange = 30;
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2];
    
    // Calculate color distance from background
    const dist = Math.sqrt(
      (r - bgR) * (r - bgR) + 
      (g - bgG) * (g - bgG) + 
      (b - bgB) * (b - bgB)
    );
    
    if (dist < threshold) {
      // Pixel is very close to background color — make fully transparent
      data[i+3] = 0;
    } else if (dist < threshold + featherRange) {
      // Feather zone: gradual transparency for smooth edges
      const alpha = Math.round(((dist - threshold) / featherRange) * 255);
      data[i+3] = Math.min(data[i+3], alpha);
    }
    // else: keep pixel fully opaque (it's part of the garment)
  }
  
  offCtx.putImageData(imageData, 0, 0);
  
  // Return a new Image element from the processed canvas
  const resultImg = new Image();
  resultImg.src = offCanvas.toDataURL('image/png');
  return resultImg;
}

function showLoader(show) {
  if (show) {
    DOM.canvasLoader.classList.remove('hidden');
  } else {
    DOM.canvasLoader.classList.add('hidden');
  }
}

function updateStatusText(text) {
  DOM.fittingStatusText.innerText = text;
}

// 18. WEBCAM LIVE CAMERA ENGINE
function listCameraDevices() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    DOM.cameraSelect.innerHTML = '<option value="">Camera API unsupported</option>';
    return;
  }
  
  navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      const videoDevices = devices.filter(d => d.kind === 'videoinput');
      DOM.cameraSelect.innerHTML = '';
      
      if (videoDevices.length === 0) {
        DOM.cameraSelect.innerHTML = '<option value="">No cameras detected</option>';
        return;
      }
      
      videoDevices.forEach((device, index) => {
        const option = document.createElement('option');
        option.value = device.deviceId;
        option.text = device.label || `Camera ${index + 1}`;
        DOM.cameraSelect.appendChild(option);
      });
      
      if (!STATE.cameraDeviceId && videoDevices.length > 0) {
        STATE.cameraDeviceId = videoDevices[0].deviceId;
      }
    })
    .catch(err => {
      console.error("Error enumerating media devices:", err);
      DOM.cameraSelect.innerHTML = '<option value="">Camera access error</option>';
    });
}

function toggleWebcam() {
  if (STATE.isWebcamActive) {
    stopWebcam();
  } else {
    startWebcam();
  }
}

function startWebcam() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Webcam streams are not supported in this browser. Please use photo upload instead.");
    return;
  }
  
  showLoader(true);
  updateStatusText("Opening camera feed...");
  
  const constraints = {
    video: STATE.cameraDeviceId ? { deviceId: { exact: STATE.cameraDeviceId } } : true,
    audio: false
  };
  
  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      STATE.webcamStream = stream;
      DOM.webcamVideo.srcObject = stream;
      DOM.webcamVideo.play();
      
      DOM.webcamVideo.onloadedmetadata = () => {
        STATE.isWebcamActive = true;
        STATE.isWebcamFrozen = false;
        STATE.frozenFrameData = null;
        
        DOM.btnCameraToggle.innerText = "Stop Camera";
        DOM.btnCameraToggle.className = "camera-action-btn stop";
        DOM.btnCameraFreeze.classList.remove('hidden');
        DOM.btnCameraFreeze.innerText = "Freeze Frame";
        DOM.cameraGuide.classList.remove('hidden');
        
        showLoader(false);
        updateStatusText("Live Camera Try-on active");
        
        // Force manual adjustment settings for webcam alignment
        STATE.fitMode = 'manual';
        DOM.manualAdjustPanel.classList.remove('collapse');
        
        startAnimationLoop();
      };
    })
    .catch(err => {
      console.error("Webcam access error:", err);
      showLoader(false);
      updateStatusText("Failed to access camera.");
      alert("Could not access your camera. Please ensure permissions are granted and you are running on localhost or HTTPS.");
    });
}

function stopWebcam() {
  stopAnimationLoop();
  
  if (STATE.webcamStream) {
    STATE.webcamStream.getTracks().forEach(track => track.stop());
    STATE.webcamStream = null;
  }
  
  DOM.webcamVideo.srcObject = null;
  STATE.isWebcamActive = false;
  STATE.isWebcamFrozen = false;
  STATE.frozenFrameData = null;
  
  DOM.btnCameraToggle.innerText = "Start Camera";
  DOM.btnCameraToggle.className = "camera-action-btn start";
  DOM.btnCameraFreeze.classList.add('hidden');
  DOM.cameraGuide.classList.add('hidden');
  
  updateStatusText("Webcam stopped.");
  drawWorkspace();
}

function freezeCameraFrame() {
  if (!STATE.isWebcamActive || STATE.isWebcamFrozen) return;
  
  // Freeze frame by rendering the current video frame to a temporary canvas,
  // then converting to image data which is drawn on canvas in drawWorkspace.
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = DOM.canvas.width;
  tempCanvas.height = DOM.canvas.height;
  const tempCtx = tempCanvas.getContext('2d');
  
  // Capture mirrored frame to match live mirrored view
  tempCtx.translate(tempCanvas.width, 0);
  tempCtx.scale(-1, 1);
  tempCtx.drawImage(DOM.webcamVideo, 0, 0, tempCanvas.width, tempCanvas.height);
  
  const frozenImg = new Image();
  frozenImg.onload = () => {
    STATE.frozenFrameData = frozenImg;
    STATE.isWebcamFrozen = true;
    DOM.btnCameraFreeze.innerText = "Resume Camera Feed";
    updateStatusText("Webcam frame frozen. Adjust garment alignment.");
  };
  frozenImg.src = tempCanvas.toDataURL('image/png');
}

function unfreezeCameraFrame() {
  STATE.isWebcamFrozen = false;
  STATE.frozenFrameData = null;
  DOM.btnCameraFreeze.innerText = "Freeze Frame";
  updateStatusText("Live Camera Try-on active");
}

let animationFrameId = null;
function startAnimationLoop() {
  if (animationFrameId) return;
  function loop() {
    drawWorkspace();
    animationFrameId = requestAnimationFrame(loop);
  }
  animationFrameId = requestAnimationFrame(loop);
}

function stopAnimationLoop() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// 19. TRY-ON MODE CONTROLLER (2D VS 3D)
function switchTryonMode(mode) {
  if (STATE.tryonMode === mode) return;
  
  STATE.tryonMode = mode;
  
  if (mode === '3d') {
    // Stop webcam if it was active
    if (STATE.isWebcamActive) {
      stopWebcam();
    }
    
    // Switch active UI buttons
    DOM.btnMode2D.classList.remove('active');
    DOM.btnMode3D.classList.add('active');
    
    // Switch canvas visibility
    DOM.canvas.classList.add('hidden');
    DOM.fitting3DContainer.classList.remove('hidden');
    DOM.cameraGuide.classList.add('hidden');
    
    // Lock manual sliders out because Three.js uses OrbitControls
    DOM.manualAdjustPanel.classList.add('collapse');
    DOM.workspaceTip.innerHTML = "<span>💡 Left click + drag to rotate 3D mannequin, scroll to zoom, right click + drag to pan.</span>";
    DOM.workspaceTip.classList.remove('fade-out');
    
    updateStatusText("Initializing 3D Studio Mannequin...");
    
    // Set active tab to measurements for convenience
    const measTabBtn = document.querySelector('.tab-selectors [data-tab="measurements"]');
    if (measTabBtn) {
      measTabBtn.click();
    }
    
    // Launch Three.js Scene
    setTimeout(() => {
      init3D();
      if (STATE.three.scene) {
        build3DMannequin();
      }
      updateStatusText("3D Studio Try-on active.");
    }, 100);
    
  } else {
    // Switch active UI buttons
    DOM.btnMode2D.classList.add('active');
    DOM.btnMode3D.classList.remove('active');
    
    // Switch canvas visibility
    DOM.canvas.classList.remove('hidden');
    DOM.fitting3DContainer.classList.add('hidden');
    DOM.workspaceTip.innerHTML = "<span>💡 Drag or resize dress on canvas to adjust the fit.</span>";
    
    updateStatusText("2D Try-on active.");
    
    // Revert back to models tab
    const modelsTabBtn = document.querySelector('.tab-selectors [data-tab="models"]');
    if (modelsTabBtn) {
      modelsTabBtn.click();
    }
    
    drawWorkspace();
  }
}

// 20. CUSTOM MEASUREMENT UI UPDATES
function syncMeasurementUI() {
  DOM.sliderMeasureHeight.value = STATE.measurements.height;
  DOM.sliderMeasureChest.value = STATE.measurements.chest;
  DOM.sliderMeasureWaist.value = STATE.measurements.waist;
  DOM.sliderMeasureHips.value = STATE.measurements.hips;
  
  DOM.valMeasureHeight.innerText = STATE.measurements.height + "cm";
  DOM.valMeasureChest.innerText = STATE.measurements.chest + "cm";
  DOM.valMeasureWaist.innerText = STATE.measurements.waist + "cm";
  DOM.valMeasureHips.innerText = STATE.measurements.hips + "cm";
}

// 21. 3D STUDIO RENDER ENGINE (THREE.JS)
function init3D() {
  if (STATE.three.renderer) return; // already initialized
  
  const container = DOM.fitting3DContainer;
  const width = container.clientWidth || 600;
  const height = container.clientHeight || 750;
  
  // Scene Setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0a0a0c');
  
  // Camera Setup
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 1.2, 3.5);
  
  // Renderer Setup
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);
  
  // Controls Setup (Orbit rotation)
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 1.5;
  controls.maxDistance = 6.0;
  controls.maxPolarAngle = Math.PI / 2 + 0.1; // clamp floor boundary
  controls.target.set(0, 0.9, 0);
  
  // Lighting setup
  const ambientLight = new THREE.AmbientLight('#ffffff', 0.45);
  scene.add(ambientLight);
  
  const dirLight = new THREE.DirectionalLight('#ffffff', 0.8);
  dirLight.position.set(2, 4, 3);
  dirLight.castShadow = true;
  scene.add(dirLight);
  
  const rimLight = new THREE.DirectionalLight('#c5a880', 0.55);
  rimLight.position.set(-2, 2, -3);
  scene.add(rimLight);
  
  // Studio Grid Floor
  const gridHelper = new THREE.GridHelper(10, 20, '#c5a880', '#1b1b22');
  gridHelper.position.y = -0.2;
  scene.add(gridHelper);
  
  // Studio Cylinder Stage
  const stageGeo = new THREE.CylinderGeometry(0.8, 0.85, 0.05, 32);
  const stageMat = new THREE.MeshStandardMaterial({ color: '#131318', roughness: 0.6, metalness: 0.3 });
  const stage = new THREE.Mesh(stageGeo, stageMat);
  stage.position.y = -0.225;
  scene.add(stage);
  
  STATE.three.scene = scene;
  STATE.three.camera = camera;
  STATE.three.renderer = renderer;
  STATE.three.controls = controls;
  
  // Render Loop animate
  function animate3D() {
    requestAnimationFrame(animate3D);
    controls.update();
    renderer.render(scene, camera);
  }
  animate3D();
  
  // Resize Handler
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

function build3DMannequin() {
  const scene = STATE.three.scene;
  if (!scene) return;
  
  if (STATE.three.mannequin) {
    scene.remove(STATE.three.mannequin);
  }
  
  const group = new THREE.Group();
  group.name = "mannequin";
  
  // Glowing Glass / Holographic Material for premium luxury feel
  const material = new THREE.MeshPhysicalMaterial({
    color: '#c5a880',
    metalness: 0.1,
    roughness: 0.15,
    transmission: 0.65,
    thickness: 1.0,
    transparent: true,
    opacity: 0.6,
    side: THREE.DoubleSide
  });
  
  const scaleH = STATE.measurements.height / 165;
  const torsoGroup = new THREE.Group();
  torsoGroup.position.y = 0.5 * scaleH;
  
  // Parametric measurements calculation
  const chestRad = (STATE.measurements.chest / 2 / Math.PI) / 100 * 1.35;
  const waistRad = (STATE.measurements.waist / 2 / Math.PI) / 100 * 1.35;
  const hipsRad = (STATE.measurements.hips / 2 / Math.PI) / 100 * 1.35;
  
  // Head
  const headGeo = new THREE.SphereGeometry(0.11, 32, 32);
  const headMesh = new THREE.Mesh(headGeo, material);
  headMesh.position.y = 0.76;
  torsoGroup.add(headMesh);
  
  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.045, 0.05, 0.1, 16);
  const neckMesh = new THREE.Mesh(neckGeo, material);
  neckMesh.position.y = 0.63;
  torsoGroup.add(neckMesh);
  
  // Chest Cylinder
  const chestGeo = new THREE.CylinderGeometry(chestRad, chestRad, 0.25, 32);
  const chestMesh = new THREE.Mesh(chestGeo, material);
  chestMesh.position.y = 0.45;
  torsoGroup.add(chestMesh);
  
  // Waist Cylinder
  const waistGeo = new THREE.CylinderGeometry(chestRad, waistRad, 0.2, 32);
  const waistMesh = new THREE.Mesh(waistGeo, material);
  waistMesh.position.y = 0.23;
  torsoGroup.add(waistMesh);
  
  // Hips Cylinder
  const hipsGeo = new THREE.CylinderGeometry(waistRad, hipsRad, 0.25, 32);
  const hipsMesh = new THREE.Mesh(hipsGeo, material);
  hipsMesh.position.y = 0.01;
  torsoGroup.add(hipsMesh);
  
  // Shoulders joints
  const shoulderGeo = new THREE.SphereGeometry(0.045, 16, 16);
  const leftShoulder = new THREE.Mesh(shoulderGeo, material);
  leftShoulder.position.set(-chestRad - 0.02, 0.45, 0);
  const rightShoulder = leftShoulder.clone();
  rightShoulder.position.x = chestRad + 0.02;
  torsoGroup.add(leftShoulder);
  torsoGroup.add(rightShoulder);
  
  // Arms Cylinders
  const armGeo = new THREE.CylinderGeometry(0.03, 0.025, 0.52, 16);
  const leftArm = new THREE.Mesh(armGeo, material);
  leftArm.position.set(-chestRad - 0.06, 0.21, 0);
  leftArm.rotation.z = Math.PI / 12;
  const rightArm = leftArm.clone();
  rightArm.position.x = chestRad + 0.06;
  rightArm.rotation.z = -Math.PI / 12;
  torsoGroup.add(leftArm);
  torsoGroup.add(rightArm);
  
  // Legs Cylinders
  const legLen = 0.72 * scaleH;
  const legGeo = new THREE.CylinderGeometry(hipsRad * 0.4, hipsRad * 0.3, legLen, 16);
  
  const leftLeg = new THREE.Mesh(legGeo, material);
  leftLeg.position.set(-hipsRad * 0.45, -legLen / 2 - 0.1, 0);
  const rightLeg = leftLeg.clone();
  rightLeg.position.x = hipsRad * 0.45;
  torsoGroup.add(leftLeg);
  torsoGroup.add(rightLeg);
  
  group.add(torsoGroup);
  scene.add(group);
  STATE.three.mannequin = group;
  
  // Overlay parametric clothing mesh
  build3DGarment();
}

function build3DGarment() {
  const scene = STATE.three.scene;
  if (!scene || !STATE.currentProduct || !STATE.three.mannequin) return;
  
  const torsoGroup = STATE.three.mannequin.children[0];
  const oldGarment = torsoGroup.getObjectByName("garment");
  if (oldGarment) {
    torsoGroup.remove(oldGarment);
  }
  
  const garmentGroup = new THREE.Group();
  garmentGroup.name = "garment";
  
  const product = STATE.currentProduct;
  const scaleH = STATE.measurements.height / 165;
  const chestRad = (STATE.measurements.chest / 2 / Math.PI) / 100 * 1.35;
  const waistRad = (STATE.measurements.waist / 2 / Math.PI) / 100 * 1.35;
  const hipsRad = (STATE.measurements.hips / 2 / Math.PI) / 100 * 1.35;
  
  // Apply visual offset padding to avoid mesh clipping/z-fighting
  const gap = 0.016;
  const gChest = chestRad + gap;
  const gWaist = waistRad + gap;
  const gHips = hipsRad + gap;
  
  let garmentMaterial;
  
  if (product.id === "dress_summer") {
    // Summer dress: bright floral base
    garmentMaterial = new THREE.MeshStandardMaterial({
      color: '#f4cb50',
      roughness: 0.65,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    
    const upperGeo = new THREE.CylinderGeometry(gChest, gWaist, 0.25, 32, 1, true);
    const upperMesh = new THREE.Mesh(upperGeo, garmentMaterial);
    upperMesh.position.y = 0.35;
    garmentGroup.add(upperMesh);
    
    const skirtGeo = new THREE.CylinderGeometry(gWaist, gHips * 1.35, 0.45, 32, 1, true);
    const skirtMesh = new THREE.Mesh(skirtGeo, garmentMaterial);
    skirtMesh.position.y = 0.01;
    garmentGroup.add(skirtMesh);
    
    // Dress straps
    const strapGeo = new THREE.BoxGeometry(0.015, 0.18, 0.008);
    const leftStrap = new THREE.Mesh(strapGeo, garmentMaterial);
    leftStrap.position.set(-gChest * 0.6, 0.52, 0);
    const rightStrap = leftStrap.clone();
    rightStrap.position.x = gChest * 0.6;
    garmentGroup.add(leftStrap);
    garmentGroup.add(rightStrap);
    
  } else if (product.id === "dress_gown") {
    // Red Silk Evening Gown: high shine, floor length
    garmentMaterial = new THREE.MeshPhysicalMaterial({
      color: '#b11d24',
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 0.7,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide
    });
    
    const upperGeo = new THREE.CylinderGeometry(gChest, gWaist, 0.25, 32, 1, true);
    const upperMesh = new THREE.Mesh(upperGeo, garmentMaterial);
    upperMesh.position.y = 0.355;
    garmentGroup.add(upperMesh);
    
    const skirtGeo = new THREE.CylinderGeometry(gWaist, gHips * 1.12, 1.1, 32, 1, true);
    const skirtMesh = new THREE.Mesh(skirtGeo, garmentMaterial);
    skirtMesh.position.y = -0.315;
    garmentGroup.add(skirtMesh);
    
    // Asymmetric Shoulder strap
    const shoulderGeo = new THREE.CylinderGeometry(gChest * 0.95, gChest * 0.95, 0.06, 16, 1, true);
    const shoulderMesh = new THREE.Mesh(shoulderGeo, garmentMaterial);
    shoulderMesh.position.set(0, 0.47, 0);
    shoulderMesh.rotation.z = Math.PI / 11;
    garmentGroup.add(shoulderMesh);
    
  } else if (product.id === "dress_suit") {
    // Navy command suit: jacket + trousers
    garmentMaterial = new THREE.MeshStandardMaterial({
      color: '#1a2238',
      roughness: 0.75,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    
    const jacketGeo = new THREE.CylinderGeometry(gChest * 1.04, gWaist * 1.04, 0.44, 32, 1, false);
    const jacketMesh = new THREE.Mesh(jacketGeo, garmentMaterial);
    jacketMesh.position.y = 0.335;
    garmentGroup.add(jacketMesh);
    
    // Collar elements
    const lapelGeo = new THREE.BoxGeometry(0.04, 0.2, 0.02);
    const leftLapel = new THREE.Mesh(lapelGeo, garmentMaterial);
    leftLapel.position.set(-gChest * 0.4, 0.37, gChest * 0.85);
    leftLapel.rotation.z = -Math.PI / 8;
    leftLapel.rotation.y = Math.PI / 6;
    const rightLapel = leftLapel.clone();
    rightLapel.position.x = gChest * 0.4;
    rightLapel.rotation.z = Math.PI / 8;
    rightLapel.rotation.y = -Math.PI / 6;
    garmentGroup.add(leftLapel);
    garmentGroup.add(rightLapel);
    
    // Leg trousers
    const legLen = 0.72 * scaleH;
    const pantsGeo = new THREE.CylinderGeometry(hipsRad * 0.44, hipsRad * 0.34, legLen + 0.06, 16, 1, false);
    
    const leftPant = new THREE.Mesh(pantsGeo, garmentMaterial);
    leftPant.position.set(-hipsRad * 0.45, -legLen / 2 - 0.1, 0);
    const rightPant = leftPant.clone();
    rightPant.position.x = hipsRad * 0.45;
    
    garmentGroup.add(leftPant);
    garmentGroup.add(rightPant);
    
  } else if (product.id === "dress_cocktail") {
    // Velvet Cocktail: bodycon, black, short
    garmentMaterial = new THREE.MeshPhysicalMaterial({
      color: '#101012',
      roughness: 0.8,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    
    const bodyGeo = new THREE.CylinderGeometry(gChest, gWaist, 0.25, 32, 1, true);
    const bodyMesh = new THREE.Mesh(bodyGeo, garmentMaterial);
    bodyMesh.position.y = 0.355;
    garmentGroup.add(bodyMesh);
    
    const skirtGeo = new THREE.CylinderGeometry(gWaist, gHips * 1.05, 0.3, 32, 1, true);
    const skirtMesh = new THREE.Mesh(skirtGeo, garmentMaterial);
    skirtMesh.position.y = 0.085;
    garmentGroup.add(skirtMesh);
    
  } else if (product.id === "dress_jumpsuit") {
    // Sage green utility jumpsuit
    garmentMaterial = new THREE.MeshStandardMaterial({
      color: '#7e9080',
      roughness: 0.8,
      metalness: 0.08,
      side: THREE.DoubleSide
    });
    
    const torsoMeshGeo = new THREE.CylinderGeometry(gChest * 1.01, gWaist * 1.01, 0.44, 32, 1, false);
    const torsoMesh = new THREE.Mesh(torsoMeshGeo, garmentMaterial);
    torsoMesh.position.y = 0.335;
    garmentGroup.add(torsoMesh);
    
    const legLen = 0.72 * scaleH;
    const pantsGeo = new THREE.CylinderGeometry(hipsRad * 0.46, hipsRad * 0.36, legLen + 0.06, 16, 1, false);
    
    const leftPant = new THREE.Mesh(pantsGeo, garmentMaterial);
    leftPant.position.set(-hipsRad * 0.45, -legLen / 2 - 0.1, 0);
    const rightPant = leftPant.clone();
    rightPant.position.x = hipsRad * 0.45;
    
    garmentGroup.add(leftPant);
    garmentGroup.add(rightPant);
  }
  
  torsoGroup.add(garmentGroup);
}

// 22. SIZE ADVISOR & FIT ESTIMATOR ENGINE
const GARMENT_SIZES_CHART = {
  dress_summer: { XS: { chest: 80, waist: 62, hips: 86 }, S: { chest: 84, waist: 66, hips: 90 }, M: { chest: 90, waist: 72, hips: 96 }, L: { chest: 96, waist: 78, hips: 102 }, XL: { chest: 102, waist: 84, hips: 108 }, XXL: { chest: 108, waist: 90, hips: 114 } },
  dress_gown: { XS: { chest: 78, waist: 60, hips: 84 }, S: { chest: 82, waist: 64, hips: 88 }, M: { chest: 88, waist: 70, hips: 94 }, L: { chest: 94, waist: 76, hips: 100 }, XL: { chest: 100, waist: 82, hips: 106 }, XXL: { chest: 106, waist: 88, hips: 112 } },
  dress_suit: { XS: { chest: 82, waist: 64, hips: 88 }, S: { chest: 86, waist: 68, hips: 92 }, M: { chest: 92, waist: 74, hips: 98 }, L: { chest: 98, waist: 80, hips: 104 }, XL: { chest: 104, waist: 86, hips: 110 }, XXL: { chest: 110, waist: 92, hips: 116 } },
  dress_cocktail: { XS: { chest: 78, waist: 60, hips: 84 }, S: { chest: 82, waist: 64, hips: 88 }, M: { chest: 88, waist: 70, hips: 94 }, L: { chest: 94, waist: 76, hips: 100 }, XL: { chest: 100, waist: 82, hips: 106 }, XXL: { chest: 106, waist: 88, hips: 112 } },
  dress_jumpsuit: { XS: { chest: 82, waist: 64, hips: 88 }, S: { chest: 86, waist: 68, hips: 92 }, M: { chest: 92, waist: 74, hips: 98 }, L: { chest: 98, waist: 80, hips: 104 }, XL: { chest: 104, waist: 86, hips: 110 }, XXL: { chest: 110, waist: 92, hips: 116 } }
};

function runSizeAdvisor() {
  const product = STATE.currentProduct;
  if (!product) {
    DOM.fitAdvisorPanel.classList.add('collapse');
    return;
  }
  
  DOM.fitAdvisorPanel.classList.remove('collapse');
  
  const chest = STATE.measurements.chest;
  const waist = STATE.measurements.waist;
  const hips = STATE.measurements.hips;
  
  const chart = GARMENT_SIZES_CHART[product.id];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let bestSize = 'M';
  
  // Sizing recommendation logic (chooses the smallest size that isn't too tight)
  for (let i = 0; i < sizes.length; i++) {
    const sizeSpec = chart[sizes[i]];
    if (chest <= sizeSpec.chest + 3 && waist <= sizeSpec.waist + 3 && hips <= sizeSpec.hips + 3) {
      bestSize = sizes[i];
      break;
    }
    if (i === sizes.length - 1) {
      bestSize = 'XXL';
    }
  }
  
  const spec = chart[bestSize];
  const chestDiff = chest - spec.chest;
  const waistDiff = waist - spec.waist;
  const hipsDiff = hips - spec.hips;
  
  let chestStatus = "perfect", chestText = "Perfect Fit";
  let waistStatus = "perfect", waistText = "Perfect Fit";
  let hipsStatus = "perfect", hipsText = "Perfect Fit";
  
  let scorePenalties = 0;
  
  // Bust fit check
  if (chestDiff > 2) {
    chestStatus = "tight";
    chestText = `Tight (+${chestDiff}cm)`;
    scorePenalties += Math.min(25, chestDiff * 4);
  } else if (chestDiff < -4) {
    chestStatus = "loose";
    chestText = `Loose (${chestDiff}cm)`;
    scorePenalties += Math.min(15, Math.abs(chestDiff) * 2);
  }
  
  // Waist fit check
  if (waistDiff > 2) {
    waistStatus = "tight";
    waistText = `Tight (+${waistDiff}cm)`;
    scorePenalties += Math.min(30, waistDiff * 5);
  } else if (waistDiff < -4) {
    waistStatus = "loose";
    waistText = `Loose (${waistDiff}cm)`;
    scorePenalties += Math.min(15, Math.abs(waistDiff) * 2);
  }
  
  // Hips fit check
  if (hipsDiff > 3) {
    hipsStatus = "tight";
    hipsText = `Tight (+${hipsDiff}cm)`;
    scorePenalties += Math.min(25, hipsDiff * 3);
  } else if (hipsDiff < -5) {
    hipsStatus = "loose";
    hipsText = `Loose (${hipsDiff}cm)`;
    scorePenalties += Math.min(15, Math.abs(hipsDiff) * 1.5);
  }
  
  const fitScore = Math.max(10, Math.round(100 - scorePenalties));
  
  DOM.valRecommendedSize.innerText = bestSize;
  DOM.valFitScore.innerText = `${fitScore}%`;
  DOM.compatibilityBar.style.width = `${fitScore}%`;
  
  DOM.fitAreasGrid.innerHTML = `
    <div class="fit-area-card">
      <span class="fit-area-name">CHEST / BUST</span>
      <span class="fit-area-val">${chest} cm</span>
      <span class="fit-status ${chestStatus}">${chestText}</span>
    </div>
    <div class="fit-area-card">
      <span class="fit-area-name">WAIST</span>
      <span class="fit-area-val">${waist} cm</span>
      <span class="fit-status ${waistStatus}">${waistText}</span>
    </div>
    <div class="fit-area-card">
      <span class="fit-area-name">HIPS</span>
      <span class="fit-area-val">${hips} cm</span>
      <span class="fit-status ${hipsStatus}">${hipsText}</span>
    </div>
  `;
}

// Start the App
window.onload = init;
