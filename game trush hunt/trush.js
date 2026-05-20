
/* ══ DATA ══ */
const ITEMS = [
  {id:'pb', ico:'🍶', nm:'Botol Plastik',   cat:'Plastik',    xp:80,  c:25,  co2:'0.3kg'},
  {id:'ps', ico:'🛍️', nm:'Kantong Plastik', cat:'Plastik',    xp:60,  c:20,  co2:'0.2kg'},
  {id:'can',ico:'🥫', nm:'Kaleng',          cat:'Logam',      xp:90,  c:30,  co2:'0.4kg'},
  {id:'pap',ico:'📰', nm:'Kertas',          cat:'Kertas',     xp:50,  c:15,  co2:'0.1kg'},
  {id:'bat',ico:'🔋', nm:'Baterai Bekas',   cat:'Berbahaya',  xp:200, c:65,  co2:'1.2kg'},
  {id:'gl', ico:'🍾', nm:'Botol Kaca',      cat:'Kaca',       xp:150, c:50,  co2:'0.6kg'},
  {id:'ele',ico:'📱', nm:'E-Waste',         cat:'Elektronik', xp:400, c:130, co2:'2.5kg'},
];

const PINS = [
  // Denpasar
  {lat:-8.6500,lng:115.2167,red:true, ti:0,loc:'Denpasar'},
  {lat:-8.6650,lng:115.2300,red:true, ti:2,loc:'Denpasar'},
  {lat:-8.6420,lng:115.2080,red:false,ti:1,loc:'Denpasar'},
  // Kuta
  {lat:-8.7183,lng:115.1685,red:true, ti:3,loc:'Kuta'},
  {lat:-8.7300,lng:115.1750,red:false,ti:0,loc:'Kuta'},
  // Sanur
  {lat:-8.6900,lng:115.2600,red:true, ti:0,loc:'Sanur'},
  {lat:-8.7050,lng:115.2650,red:false,ti:1,loc:'Sanur'},
  // Ubud
  {lat:-8.5069,lng:115.2625,red:true, ti:5,loc:'Ubud'},
  {lat:-8.5200,lng:115.2700,red:true, ti:4,loc:'Ubud'},
  // Gianyar
  {lat:-8.5350,lng:115.3300,red:true, ti:6,loc:'Gianyar'},
  // Klungkung
  {lat:-8.5400,lng:115.4050,red:false,ti:2,loc:'Klungkung'},
  // Singaraja
  {lat:-8.1120,lng:115.0880,red:true, ti:2,loc:'Singaraja'},
  // Tabanan
  {lat:-8.5400,lng:115.1250,red:true, ti:1,loc:'Tabanan'},
  // Seminyak
  {lat:-8.6900,lng:115.1580,red:true, ti:0,loc:'Seminyak'},
  // Canggu
  {lat:-8.6478,lng:115.1382,red:false,ti:3,loc:'Canggu'},
  // Jimbaran
  {lat:-8.7900,lng:115.1650,red:true, ti:4,loc:'Jimbaran'},
];

const SHOP = {
  tops:[
    {i:'🧥',p:50,nm:'Jaket Merah'},{i:'🥋',p:45,nm:'Hoodie Hitam'},{i:'🦺',p:40,nm:'Vest Abu'},
    {i:'👔',p:35,nm:'Kemeja Flanel'},{i:'👕',p:25,nm:'Kaos Biru'},{i:'🩱',p:20,nm:'Singlet Putih'},
  ],
  pants:[
    {i:'👖',p:40,nm:'Jeans Biru'},{i:'🩳',p:30,nm:'Celana Pendek'},{i:'🩲',p:20,nm:'Celana Dalam'},
    {i:'👗',p:45,nm:'Rok Hitam'},{i:'🩴',p:15,nm:'Sandal Jepit'},{i:'🧣',p:25,nm:'Syal Rajut'},
  ],
  accs:[
    {i:'🕶️',p:35,nm:'Kacamata Hitam'},{i:'🎩',p:50,nm:'Topi Fedora'},{i:'👟',p:45,nm:'Sneakers'},
    {i:'🧢',p:25,nm:'Topi Cap'},{i:'💍',p:60,nm:'Cincin Emas'},{i:'⌚',p:55,nm:'Jam Tangan'},
  ],
};

const BADGES = [
  {n:1,ico:'🌱',nm:'Pemula Hijau',d:'Laporan pertama'},
  {n:5,ico:'📸',nm:'Fotografer',d:'5 laporan'},
  {n:10,ico:'🥇',nm:'Hunter Pro',d:'10 laporan'},
  {n:20,ico:'💎',nm:'Elite',d:'20 laporan'},
];

/* ══ AI SCAN DATA ══ */
const AI_ITEMS = [
  {ico:'🍶',label:'Botol Plastik',type:'Plastik PET',danger:'🟡 Sedang',acc:'94%',bonus:15,
   attrs:[{n:'Bahaya',v:72,c:'#FF5252'},{n:'Daur Ulang',v:90,c:'#69F0AE'},{n:'Frekuensi',v:85,c:'#40C4FF'}],
   tips:'Cuci botol plastik sebelum dibuang, pisahkan tutup dari badan botol untuk memudahkan proses daur ulang.'},
  {ico:'🛍️',label:'Kantong Plastik',type:'Plastik LDPE',danger:'🔴 Tinggi',acc:'88%',bonus:12,
   attrs:[{n:'Bahaya',v:85,c:'#FF5252'},{n:'Daur Ulang',v:55,c:'#69F0AE'},{n:'Frekuensi',v:92,c:'#40C4FF'}],
   tips:'Hindari membuang ke selokan. Bawa ke drop-point pengumpul plastik terdekat atau gunakan kembali.'},
  {ico:'🥫',label:'Kaleng Bekas',type:'Logam Aluminium',danger:'🟢 Rendah',acc:'97%',bonus:20,
   attrs:[{n:'Bahaya',v:30,c:'#FF5252'},{n:'Daur Ulang',v:98,c:'#69F0AE'},{n:'Frekuensi',v:68,c:'#40C4FF'}],
   tips:'Ratakan kaleng sebelum dibuang agar menghemat ruang dan mempermudah pengangkutan ke pabrik daur ulang.'},
  {ico:'📦',label:'Kardus/Karton',type:'Kertas Daur Ulang',danger:'🟢 Rendah',acc:'91%',bonus:10,
   attrs:[{n:'Bahaya',v:15,c:'#FF5252'},{n:'Daur Ulang',v:95,c:'#69F0AE'},{n:'Frekuensi',v:75,c:'#40C4FF'}],
   tips:'Lipat kardus agar ringkas. Pisahkan dari sampah basah, karena kardus basah tidak bisa didaur ulang.'},
  {ico:'🔋',label:'Baterai Bekas',type:'B3 / Berbahaya',danger:'🔴 Tinggi',acc:'99%',bonus:30,
   attrs:[{n:'Bahaya',v:96,c:'#FF5252'},{n:'Daur Ulang',v:40,c:'#69F0AE'},{n:'Frekuensi',v:45,c:'#40C4FF'}],
   tips:'Jangan buang ke tempat sampah biasa! Bawa ke drop-point B3 di supermarket atau service center terdekat.'},
  {ico:'🍾',label:'Botol Kaca',type:'Kaca Bening',danger:'🔴 Tinggi',acc:'96%',bonus:18,
   attrs:[{n:'Bahaya',v:78,c:'#FF5252'},{n:'Daur Ulang',v:100,c:'#69F0AE'},{n:'Frekuensi',v:55,c:'#40C4FF'}],
   tips:'Jangan pecahkan. Bungkus dengan koran jika pecah. Kaca dapat didaur ulang tanpa batas kualitasnya.'},
];

/* ══ NOTIF DATA ══ */
let NOTIFS = [
  {id:1,type:'social', ico:'❤️', icoBg:'#FFE8E8',title:'SiPungut menyukai postinganmu',     sub:'Foto laporan Denpasar kamu mendapat ❤️',          time:'2 menit lalu',unread:true},
  {id:2,type:'reward', ico:'🏆', icoBg:'#FFF8E0',title:'Badge baru terbuka!',               sub:'Hunter Pro — kamu sudah 10 laporan. Luar biasa!', time:'1 jam lalu',  unread:true},
  {id:3,type:'social', ico:'👥', icoBg:'#EDE8FF',title:'CleanQueen mengikutimu',            sub:'Sekarang CleanQueen mengikuti profilmu',           time:'3 jam lalu',  unread:true},
  {id:4,type:'event',  ico:'⚡', icoBg:'#FFF0D8',title:'Event Weekend Kuta — Aktif!',       sub:'2× poin untuk semua laporan sampah di Kuta',      time:'5 jam lalu',  unread:false},
  {id:5,type:'social', ico:'💬', icoBg:'#E8F8FF',title:'TrashNoMore berkomentar',           sub:'"Mantap bro, ikut juga dong besok di Singaraja!"', time:'8 jam lalu',  unread:false},
  {id:6,type:'reward', ico:'🔥', icoBg:'#FFE8D8',title:'Streak 7 hari! Bonus didapat',      sub:'+25🪙 bonus koin streak mingguan telah ditambahkan',time:'Kemarin',     unread:false},
];

/* ══ COMMENTS DATA ══ */
const COMMENTS_DATA = {
  'A':{postAv:'🧑‍🦱',postAvBg:'linear-gradient(135deg,#8D6E63,#5D4037)',postNm:'SiPungut',postTxt:'Denpasar hari ini kotor juga yaa....',count:61,
    comments:[
      {id:1,av:'😊',avBg:'linear-gradient(135deg,#42A5F5,#1565C0)',nm:'BaliClean',txt:'Udah dilaporin belum ke dinas kebersihan?',time:'2 j',likes:8,liked:false},
      {id:2,av:'🌿',avBg:'linear-gradient(135deg,#66BB6A,#2E7D32)',nm:'EcoWarrior',txt:'Sama nih deket rumah gw, sampahnya numpuk 😤',time:'3 j',likes:14,liked:false},
      {id:3,av:'🔥',avBg:'linear-gradient(135deg,#FF7043,#BF360C)',nm:'HunterPro',txt:'Ayo bareng-bareng beresin! Siapa yang mau join?',time:'4 j',likes:22,liked:true},
      {id:4,av:'🦋',avBg:'linear-gradient(135deg,#AB47BC,#6A1B9A)',nm:'PutriDenpasar',txt:'Kasian banget ya lingkungannya 🙏',time:'5 j',likes:31,liked:false},
    ]},
  'B':{postAv:'👩‍🦳',postAvBg:'linear-gradient(135deg,#F44336,#B71C1C)',postNm:'CleanQueen',postTxt:'Udah bersih-bersih belum hari ini??...',count:148,
    comments:[
      {id:1,av:'💪',avBg:'linear-gradient(135deg,#26A69A,#00695C)',nm:'GreenHero',txt:'Keren banget CleanQueen! Inspiratif 👏',time:'1 j',likes:42,liked:false},
      {id:2,av:'🌊',avBg:'linear-gradient(135deg,#29B6F6,#01579B)',nm:'OceanSaver',txt:'Kalau di pantai juga butuh relawan nih!',time:'2 j',likes:18,liked:true},
      {id:3,av:'🏆',avBg:'linear-gradient(135deg,#FFC107,#FF6F00)',nm:'ChampionBali',txt:'Respect banget! Tetap semangat bersihin Bali 💚',time:'3 j',likes:56,liked:false},
    ]},
  'C':{postAv:'😎',postAvBg:'linear-gradient(135deg,#FF5722,#BF360C)',postNm:'TrashNoMore',postTxt:'Temen-temen Singaraja yukk merapat...',count:68,
    comments:[
      {id:1,av:'🎯',avBg:'linear-gradient(135deg,#EC407A,#880E4F)',nm:'SingarajaGirl',txt:'Siap hadir jam 7! Bawa sapu sendiri ya?',time:'1 j',likes:12,liked:true},
      {id:2,av:'🌺',avBg:'linear-gradient(135deg,#F06292,#AD1457)',nm:'BungaSingaraja',txt:'Aku ajak temen-temen sekolah juga boleh kan?',time:'2 j',likes:9,liked:false},
      {id:3,av:'🤝',avBg:'linear-gradient(135deg,#78909C,#37474F)',nm:'Komunitas_Bali',txt:'Kita dari komunitas Bersih Bersama juga ikutan 💪',time:'4 j',likes:27,liked:false},
    ]},
};

/* ══ STATE ══ */
const G = {
  coins:255, xp:125, lap:56, bersih:15, combo:1, photos:0,
  clearedPins: new Set(), stream: null,
  pendingItem: null, pendingLoc: 'Denpasar',
  shopSel: {cat:'tops',idx:0,price:50}, _rwd: null,
  streak: 7, checkedToday: false,
  doneDays: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
  calYear: 2026, calMonth: 2,
  weeklyLaps: [3,5,2,4,6,1,3],
  notifFilter: 'all',
  notifFrom: 'home',
  activePostId: 'A',
  playerName: 'Ady Hunter',
  playerAv: '🧑‍🌿',
  cmtDone: 0,
  visitedShop: false,
};

/* ══ ROUTER ══ */
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById('s-'+id);
  if(el) el.classList.add('active');
  if(id==='home'){
    // Init or refresh map after screen is visible
    setTimeout(buildMap, 50);
    setTimeout(buildMap, 300);
  }
}
function recenterMap(){
  if(!gameMap) return;
  gameMap.flyTo([playerLat,playerLng],14,{duration:1.2,animate:true});
  toast('🧭 Peta dipusatkan ke posisimu');
}
function navTap(el, tab){
  document.querySelectorAll('.nv').forEach(n=>n.classList.remove('on'));
  el.classList.add('on');
  if(tab==='rank') go('rank');
  else if(tab==='toko'){ renderShop('tops'); go('toko'); }
  else if(tab==='profil') go('profil');
  else go('home');
}

/* ══════════════════════════════════════
   🗺️ LEAFLET REAL MAP
══════════════════════════════════════ */
let gameMap = null;
let leafletMarkers = [];
let playerMarker = null;
let playerLat = -8.6500, playerLng = 115.2167;

function initGameMap(){ buildMap(); }
function initOrRefreshMap(){ buildMap(); }


function useCanvasFallback(){
  if(!gameMap) return;
  // Remove existing tile layer
  gameMap.eachLayer(l=>{ if(l instanceof L.TileLayer) gameMap.removeLayer(l); });

  // Create a canvas-based background using SVG overlay
  const svgStyle = `
    .leaflet-container { background: #a8d5e8 !important; }
  `; 
  const styleEl = document.createElement('style');
  styleEl.textContent = svgStyle;
  document.head.appendChild(styleEl);

  // Add SVG overlay for Bali island shape
  const baliSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#a8d5e8"/>
    <path d="M60,180 Q80,140 120,120 Q160,100 200,95 Q240,90 280,100 Q320,110 350,130 Q375,150 380,175 Q382,200 370,220 Q350,245 320,255 Q280,268 240,270 Q200,272 160,265 Q120,255 90,240 Q65,225 60,180Z" fill="#c8e6a0" stroke="#a0c870" stroke-width="1.5"/>
    <text x="200" y="185" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#5a8040" font-weight="bold">Bali</text>
    <text x="200" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ab0cc" font-style="italic">Laut Bali</text>
    <text x="200" y="285" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ab0cc" font-style="italic">Samudra Hindia</text>
    <circle cx="220" cy="195" r="3" fill="#e05050"/><text x="228" y="199" font-size="9" fill="#444" font-family="sans-serif">Denpasar</text>
    <circle cx="195" cy="205" r="2" fill="#888"/><text x="165" y="213" font-size="8" fill="#444" font-family="sans-serif">Kuta</text>
    <circle cx="232" cy="200" r="2" fill="#888"/><text x="238" y="204" font-size="8" fill="#444" font-family="sans-serif">Sanur</text>
    <circle cx="225" cy="170" r="2" fill="#5a8040"/><text x="231" y="174" font-size="8" fill="#444" font-family="sans-serif">Ubud</text>
  </svg>`;
  const svgUrl = 'data:image/svg+xml;base64,' + btoa(baliSvg);
  const bounds = [[-9.0, 114.5], [-8.0, 115.8]];
  L.imageOverlay(svgUrl, bounds, {opacity:1, zIndex:1}).addTo(gameMap);
  toast('🗺️ Mode peta offline aktif');
}

function buildMap(){
  if(gameMap){ gameMap.invalidateSize(true); return; }
  if(typeof L === 'undefined'){
    window._onLeafletReady = buildMap;
    return;
  }
  window._onLeafletReady = null;

  const container = document.getElementById('game-map');
  if(!container) return;

  // CRITICAL: need real pixel dimensions before Leaflet init
  const rect = container.getBoundingClientRect();
  if(rect.width < 50 || rect.height < 50){
    setTimeout(buildMap, 200);
    return;
  }

  gameMap = L.map('game-map', {
    center: [-8.65, 115.22],
    zoom: 12,
    zoomControl: false,
    attributionControl: false,
    fadeAnimation: false,
  });

  // Try multiple tile providers in order
  const tileProviders = [
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
  ];

  let tileLayerObj = null;
  let providerIdx = 0;

  function tryTileProvider(idx){
    if(idx >= tileProviders.length) return;
    if(tileLayerObj) gameMap.removeLayer(tileLayerObj);
    tileLayerObj = L.tileLayer(tileProviders[idx], {
      maxZoom: 19, minZoom: 9,
      subdomains: idx===0?'abc':idx===2?'abcd':'a',
      crossOrigin: true,
    });
    tileLayerObj.addTo(gameMap);
    // Check if tiles loaded after 3s
    let tileLoaded = false;
    tileLayerObj.on('tileload', ()=>{ tileLoaded=true; });
    setTimeout(()=>{
      if(!tileLoaded && idx+1 < tileProviders.length){
        console.log('Trying next tile provider:', tileProviders[idx+1]);
        tryTileProvider(idx+1);
      }
    }, 3000);
  }
  tryTileProvider(0);

  // Apply game tint
  setInterval(()=>{
    const tp = document.querySelector('#game-map .leaflet-tile-pane');
    if(tp && !tp._tinted){ tp.style.filter='saturate(1.2) brightness(0.9) hue-rotate(5deg)'; tp._tinted=true; }
  }, 500);

  // Canvas fallback: if no tiles load after 5s, draw a simple canvas map
  setTimeout(()=>{
    const tiles = document.querySelectorAll('#game-map .leaflet-tile');
    const loaded = [...tiles].filter(t=>t.complete && t.naturalWidth>0);
    if(loaded.length === 0){
      console.log('No tiles loaded, using canvas fallback');
      useCanvasFallback();
    }
  }, 5000);

  renderPins();
  addPlayerMarker();
  addZoneCircles();

  // Click on map
  gameMap.on('click', e=>{
    const {lat, lng} = e.latlng;
    playerLat=lat; playerLng=lng;
    if(playerMarker) playerMarker.setLatLng([lat,lng]);
    updateLocChip(lat,lng);
    let nearest=null, nearestDist=999;
    PINS.forEach((p,i)=>{
      const d=Math.sqrt((p.lat-lat)**2+(p.lng-lng)**2);
      if(d<nearestDist){nearestDist=d;nearest={p,i};}
    });
    if(nearest && nearestDist<0.015){
      const {p,i}=nearest;
      if(!G.clearedPins.has(i)) pinTap(i,ITEMS[p.ti],false,p.loc);
    }
  });

  // Real GPS
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      playerLat=pos.coords.latitude;
      playerLng=pos.coords.longitude;
      if(playerMarker) playerMarker.setLatLng([playerLat,playerLng]);
      gameMap.panTo([playerLat,playerLng]);
      updateLocChip(playerLat,playerLng);
    },()=>{},{enableHighAccuracy:true,timeout:8000});
  }

  // Multiple invalidateSize to handle opacity transition
  [100,300,600,1200].forEach(t=>setTimeout(()=>gameMap.invalidateSize(true),t));
}

function applyMapTint(){
  const tp = document.querySelector('#game-map .leaflet-tile-pane');
  if(tp) tp.style.filter='saturate(1.2) brightness(0.93) hue-rotate(6deg)';
}

function addPlayerMarker(){
  if(!gameMap) return;
  const icon = L.divIcon({
    className:'',
    html:`<div class="player-marker" style="position:relative;width:52px;height:52px">
      <div class="player-marker-ring"></div>
      <div class="player-marker-head" id="player-av-ico">${G.playerAv||'😎'}</div>
    </div>`,
    iconSize:[52,52],
    iconAnchor:[26,26],
  });
  playerMarker = L.marker([playerLat,playerLng],{icon,zIndexOffset:1000}).addTo(gameMap);
}

function renderPins(){
  if(!gameMap){initGameMap();return;}
  // Remove old markers
  leafletMarkers.forEach(m=>gameMap.removeLayer(m));
  leafletMarkers=[];

  PINS.forEach((p,i)=>{
    const t=ITEMS[p.ti];
    const done=G.clearedPins.has(i);
    const cls = done?'green':(p.red?'red':'green');
    const ico = done?'✅':t.ico;
    const delay = i*0.06;

    const icon = L.divIcon({
      className:'',
      html:`<div class="game-pin" style="animation-delay:${delay}s">
        <div class="game-pin-head ${cls}" style="position:relative">
          <span style="font-size:20px;line-height:1">${ico}</span>
          ${!done?`<div class="game-pin-pulse ${cls}"></div>`:''}
        </div>
        <div class="game-pin-tail ${cls}"></div>
        <div class="game-pin-shadow"></div>
      </div>`,
      iconSize:[44,58],
      iconAnchor:[22,58],
      popupAnchor:[0,-58],
    });

    const marker = L.marker([p.lat,p.lng],{icon}).addTo(gameMap);

    // Custom popup with game styling
    const popupHtml = done
      ? `<div style="font-family:'Nunito',sans-serif;text-align:center;padding:4px 2px">
          <div style="font-size:24px">✅</div>
          <div style="font-size:12px;font-weight:800;color:#27A648">Area Bersih!</div>
          <div style="font-size:10px;color:#888;margin-top:2px">${p.loc}</div>
        </div>`
      : `<div style="font-family:'Nunito',sans-serif;text-align:center;padding:4px 2px;min-width:120px">
          <div style="font-size:28px">${t.ico}</div>
          <div style="font-size:13px;font-weight:900;color:#1A1030;margin-top:2px">${t.nm}</div>
          <div style="font-size:10px;color:#888;margin-top:1px">📍 ${p.loc}</div>
          <div style="display:flex;justify-content:center;gap:8px;margin-top:6px">
            <span style="background:#FFF8E0;border-radius:8px;padding:2px 7px;font-size:10px;font-weight:800;color:#B8860B">+${t.c}🪙</span>
            <span style="background:#E8F5E9;border-radius:8px;padding:2px 7px;font-size:10px;font-weight:800;color:#27A648">+${t.xp}XP</span>
          </div>
          <button onclick="closePinPopup(${i})" style="margin-top:8px;width:100%;padding:7px;background:linear-gradient(135deg,#CC2929,#EF5350);border:none;border-radius:10px;font-family:'Fredoka One',cursive;font-size:13px;color:#fff;cursor:pointer">Ambil Foto 📷</button>
        </div>`;

    marker.bindPopup(popupHtml,{
      closeButton:false,
      className:'game-popup',
      maxWidth:160,
      offset:[0,-10],
    });

    marker.on('click',()=>{
      if(done){toast('✅ Area ini sudah bersih!');return;}
      marker.openPopup();
      G.pendingItem=t; G.pendingLoc=p.loc;
    });

    leafletMarkers.push(marker);
  });
}

function closePinPopup(i){
  leafletMarkers[i] && leafletMarkers[i].closePopup();
  setTimeout(()=>goCam('camera'),200);
}

function addZoneCircles(){
  // Hotzone circles (semi-transparent)
  const zones=[
    {lat:-8.650,lng:115.217,r:800,color:'#EF5350'},
    {lat:-8.718,lng:115.168,r:600,color:'#FF8C00'},
    {lat:-8.507,lng:115.262,r:500,color:'#9C27B0'},
  ];
  zones.forEach(z=>{
    L.circle([z.lat,z.lng],{
      radius:z.r,
      color:z.color,
      fillColor:z.color,
      fillOpacity:0.07,
      weight:1.5,
      opacity:0.3,
      dashArray:'6 4',
    }).addTo(gameMap);
  });
}

function updateLocChip(lat,lng){
  const nearby = PINS.find(p=>Math.sqrt((p.lat-lat)**2+(p.lng-lng)**2)<0.05);
  const locTxt = document.getElementById('loc-txt');
  if(locTxt) locTxt.textContent = nearby?nearby.loc:'Bali';
}

function flyToPin(idx){
  if(!gameMap||!PINS[idx]) return;
  gameMap.flyTo([PINS[idx].lat,PINS[idx].lng],15,{duration:1.2});
  setTimeout(()=>leafletMarkers[idx]&&leafletMarkers[idx].openPopup(),1300);
}
function pinTap(i,t,done,loc){
  if(done){toast('✅ Area ini sudah bersih!');return;}
  G.pendingItem=t; G.pendingLoc=loc;
  toast(`${t.ico} ${t.nm} ditemukan di ${loc}!`);
  setTimeout(()=>goCam('camera'),650);
}

/* ══ CAMERA ══ */
function goCam(screen){
  go(screen);
  startCam(screen==='camera'?'vid-el':'vid-el2');
}
async function startCam(vidId){
  try{
    const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});
    G.stream=s;
    const v=document.getElementById(vidId);
    v.srcObject=s; v.style.display='block';
    const fk=document.getElementById(vidId==='vid-el'?'cam-fake1':'cam-fake2');
    if(fk) fk.style.display='none';
  }catch(e){}
}
function stopCam(){
  if(G.stream){G.stream.getTracks().forEach(t=>t.stop());G.stream=null;}
  ['vid-el','vid-el2'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});
  ['cam-fake1','cam-fake2'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='block';});
}
function flashFx(){
  const fl=document.createElement('div');
  fl.style.cssText='position:fixed;inset:0;background:#fff;z-index:999;pointer-events:none;transition:opacity .35s';
  document.body.appendChild(fl);
  setTimeout(()=>{fl.style.opacity='0';setTimeout(()=>fl.remove(),360);},30);
}
function shoot(type){
  flashFx(); stopCam();
  if(type==='trash'){
    document.getElementById('up-img').src='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%238B7350"/><text x="200" y="130" text-anchor="middle" font-size="56">🗑️</text><text x="200" y="195" text-anchor="middle" font-size="14" fill="rgba(255,255,255,.6)">Foto Sampah</text></svg>');
    setTimeout(()=>go('upload'),300);
  } else {
    setTimeout(()=>{const ok=Math.random()>.18;go(ok?'clean-ok':'clean-rejected');},300);
  }
}

/* ══ PHOTO FLOW ══ */
function submitPhoto(){startAiScan();}

/* ══════════════════════════════════════
   🤖 AI SCAN
══════════════════════════════════════ */
function startAiScan(){
  go('ai-scan');
  const item = AI_ITEMS[Math.floor(Math.random()*AI_ITEMS.length)];
  let prog = 0;
  const progEl    = document.getElementById('ai-prog');
  const statusEl  = document.getElementById('ai-status');
  const subEl     = document.getElementById('ai-substatus');
  const centerEl  = document.getElementById('ai-center-ico');
  const resultIco = document.getElementById('ai-result-ico');
  const cardsEl   = document.getElementById('ai-cards');

  progEl.style.width='0%'; statusEl.textContent='Menganalisis...';
  subEl.textContent='AI sedang memproses gambar kamu';
  centerEl.style.display='flex'; resultIco.style.display='none'; cardsEl.style.display='none';

  const steps=[
    {at:18,txt:'Mendeteksi objek...',sub:'Mencari pola & kontur'},
    {at:38,txt:'Mengklasifikasi material...',sub:'Mencocokkan database sampah'},
    {at:62,txt:'Menghitung bahaya...',sub:'Cek kategori & risiko lingkungan'},
    {at:82,txt:'Finalisasi laporan...',sub:'Menyiapkan rekomendasi daur ulang'},
  ];
  let lastStep=-1;

  const timer = setInterval(()=>{
    prog = Math.min(prog+(Math.random()*3+1.5),100);
    progEl.style.width=prog+'%';
    steps.forEach((s,si)=>{if(prog>=s.at&&si>lastStep){statusEl.textContent=s.txt;subEl.textContent=s.sub;lastStep=si;}});
    if(prog>=100){
      clearInterval(timer);
      // Show result
      statusEl.textContent='✅ Terdeteksi!';
      subEl.textContent='Analisis selesai — '+item.acc+' akurasi';
      centerEl.style.display='none';
      resultIco.style.display='flex';
      document.getElementById('ai-item-ico').textContent=item.ico;
      document.getElementById('ai-item-label').textContent=item.label;
      document.getElementById('ai-type-val').textContent=item.type;
      document.getElementById('ai-danger-val').textContent=item.danger;
      document.getElementById('ai-acc-val').textContent=item.acc;
      document.getElementById('ai-bonus-txt').textContent='+'+item.bonus+' koin bonus otomatis!';
      document.getElementById('ai-tips-txt').textContent=item.tips;
      // Render attribute bars
      const barsEl=document.getElementById('ai-attr-bars');
      barsEl.innerHTML=item.attrs.map(a=>`
        <div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,.6);margin-bottom:3px"><span>${a.n}</span><span>${a.v}%</span></div>
          <div style="background:rgba(255,255,255,.1);border-radius:4px;height:7px;overflow:hidden">
            <div class="ai-attr-bar" style="width:0%;background:${a.c}" data-w="${a.v}"></div>
          </div>
        </div>`).join('');
      cardsEl.style.display='block';
      setTimeout(()=>{
        document.querySelectorAll('.ai-attr-bar').forEach(b=>b.style.width=b.getAttribute('data-w')+'%');
      },120);
      toast('🤖 '+item.label+' terdeteksi! +'+item.bonus+'🪙 bonus masuk dompet');
      G.coins+=item.bonus; updateUI();
    }
  },55);
}
function aiProceed(){
  G.photos++;
  go(Math.random()>.18?'action-choice':'rejected');
}

/* ══ ACTION / REPORT ══ */
function doReport_base(){
  const t=G.pendingItem||ITEMS[0];
  G.lap++; G.combo=Math.min(G.combo+1,9);
  clearPin(); go('report-ok');
  setTimeout(()=>showReward(t,5),500);
}
function finishReport(){updateUI();renderPins();go('home');particles();toast('🎉 Laporan berhasil dikirim!');}
function finishClean_base(){
  const t=G.pendingItem||ITEMS[0];
  G.bersih++; G.lap++; G.combo=Math.min(G.combo+1,9);
  clearPin(); showReward(t,15);
  updateUI(); renderPins(); go('home');
  setTimeout(()=>particles(),300);
}
function clearPin(){
  const avail=PINS.map((_,i)=>i).filter(i=>!G.clearedPins.has(i));
  if(avail.length) G.clearedPins.add(avail[Math.floor(Math.random()*avail.length)]);
}

/* ══ REWARD ══ */
function showReward(t,bonus){
  const ca=(t.c||25)+(bonus||0);
  const badge=BADGES.find(b=>b.n===G.lap)||null;
  G.coins+=ca; G.xp+=t.xp;
  document.getElementById('rw-ico').textContent=t.ico;
  document.getElementById('rw-title').textContent=t.nm.toUpperCase()+(bonus>=15?' DIBERSIHKAN!':(bonus>=5?' DILAPORKAN!':' DIKUMPULKAN!'));
  document.getElementById('rw-sub').textContent=t.cat+' • '+G.pendingLoc;
  document.getElementById('rw-amt').textContent='+'+ca;
  document.getElementById('rw-xp').textContent='+'+t.xp;
  document.getElementById('rw-area').textContent=G.pendingLoc;
  document.getElementById('rw-co2').textContent=t.co2;
  document.getElementById('rw-combo').textContent='x'+G.combo;
  const br=document.getElementById('rw-badge');
  if(badge){document.getElementById('rw-badge-ico').textContent=badge.ico;document.getElementById('rw-badge-nm').textContent=badge.nm;document.getElementById('rw-badge-d').textContent=badge.d;br.style.display='flex';}
  else br.style.display='none';
  confettiFx(); G._rwd=t;
  document.getElementById('rw-overlay').classList.add('open');
  updateUI();
}
function claimRwd(){document.getElementById('rw-overlay').classList.remove('open');G._rwd=null;particles();toast('✅ Reward diklaim!');}

/* ══ DAILY QUEST ══ */
function toggleDQ(){const p=document.getElementById('dq-popup'),bg=document.getElementById('dq-bg');const on=!p.classList.contains('open');p.classList.toggle('open',on);bg.classList.toggle('open',on);}
function closeDQ(){document.getElementById('dq-popup').classList.remove('open');document.getElementById('dq-bg').classList.remove('open');}

/* ══════════════════════════════════════
   🔥 STREAK
══════════════════════════════════════ */
function openStreak(){renderStreakScreen();go('streak');}

function renderStreakScreen(){
  document.getElementById('streak-count').textContent=G.streak;
  document.getElementById('st-streak').textContent=G.streak;

  // Milestones
  const MILESTONES=[{n:3,ico:'🔥',lbl:'3 hari',coins:'+10🪙'},{n:7,ico:'💫',lbl:'7 hari',coins:'+25🪙'},{n:14,ico:'⚡',lbl:'14 hari',coins:'+60🪙'},{n:30,ico:'👑',lbl:'30 hari',coins:'+150🪙'}];
  const mEl=document.getElementById('streak-milestones');
  if(mEl) mEl.innerHTML=MILESTONES.map(ms=>{
    const achieved=G.streak>=ms.n, isCurrent=G.streak>=ms.n&&(MILESTONES.find(m2=>m2.n>ms.n&&G.streak>=m2.n)==null||ms.n===30);
    return `<div style="background:rgba(255,255,255,${achieved?'.28':'.14'});border:2px solid ${achieved?'#FFD700':'transparent'};border-radius:10px;padding:6px 10px;text-align:center;position:relative">
      ${achieved?'<div style="position:absolute;top:-5px;right:-5px;background:#FFD700;border-radius:50%;width:14px;height:14px;font-size:8px;display:flex;align-items:center;justify-content:center">✓</div>':''}
      <div style="font-size:16px">${ms.ico}</div>
      <div style="font-size:10px;color:${achieved?'#FFD700':'rgba(255,255,255,.8)'};font-weight:900">${ms.lbl}</div>
      <div style="font-size:9px;color:#FFD700">${ms.coins}</div>
    </div>`;
  }).join('');

  // Weekly Sen–Min
  const DAYS=['Sen','Sel','Rab','Kam','Jum','Sab','Min'];
  const weekly=document.getElementById('streak-weekly');
  const todayDow=(new Date().getDay()+6)%7; // Mon=0
  weekly.innerHTML='';
  DAYS.forEach((d,i)=>{
    const done=i<G.streak&&i<=todayDow;
    const isToday=i===todayDow;
    weekly.innerHTML+=`<div style="display:flex;flex-direction:column;align-items:center;gap:3px">
      <div style="width:36px;height:36px;border-radius:10px;background:${done?'linear-gradient(135deg,#FF8C00,#FF5500)':'#F5F5F5'};border:2px solid ${isToday?'#FF4500':'transparent'};display:flex;align-items:center;justify-content:center;font-size:18px">${done?'✅':'⬜'}</div>
      <div style="font-size:10px;font-weight:800;color:${done?'#FF8C00':'#BBB'}">${d}</div>
    </div>`;
  });

  // Monthly calendar
  renderCalendar();

  // Weekly activity bars
  const barsEl=document.getElementById('streak-weekly-bars');
  const maxV=Math.max(...G.weeklyLaps,1);
  barsEl.innerHTML=G.weeklyLaps.map((v,i)=>{
    const h=Math.round((v/maxV)*64)+4;
    const isT=i===todayDow;
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:2px;height:100%">
      <div style="font-size:9px;font-weight:800;color:${isT?'#FF8C00':'#AAA'}">${v}</div>
      <div style="width:100%;border-radius:6px 6px 0 0;background:${isT?'#FF8C00':'#FFD4B2'};height:${h}px"></div>
    </div>`;
  }).join('');

  // Checkin button
  const btn=document.getElementById('checkin-btn');
  if(G.checkedToday){
    btn.textContent='✅ Sudah Check-in Hari Ini!';
    btn.style.background='#CCC';
    btn.style.boxShadow='none';
    btn.disabled=true;
  } else {
    btn.textContent='🔥 Check-in Hari Ini! +20🪙';
    btn.style.background='linear-gradient(135deg,#FF8C00,#FF5500)';
    btn.style.boxShadow='0 6px 22px rgba(255,140,0,.4)';
    btn.disabled=false;
  }
}

const MONTH_NAMES=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
function renderCalendar(){
  const y=G.calYear, m=G.calMonth;
  document.getElementById('cal-month-label').textContent=MONTH_NAMES[m]+' '+y;
  const firstDay=new Date(y,m,1).getDay();
  const totalDays=new Date(y,m+1,0).getDate();
  const today=new Date();
  const todayNum=(today.getFullYear()===y&&today.getMonth()===m)?today.getDate():-1;
  const grid=document.getElementById('cal-grid');
  grid.innerHTML='';
  for(let i=0;i<firstDay;i++){const em=document.createElement('div');em.style.height='36px';grid.appendChild(em);}
  for(let d=1;d<=totalDays;d++){
    const cell=document.createElement('div');
    const isDone=G.doneDays.includes(d)&&(d<todayNum||(d===todayNum));
    const isToday=d===todayNum;
    const isFuture=d>todayNum&&todayNum!==-1;
    cell.className='cal-day'+(isDone?' done':'')+(isToday?' today':'')+(isFuture?' future':'');
    cell.innerHTML=d+(isDone?'<div class="fire-dot">🔥</div>':'');
    cell.onclick=()=>{if(!isFuture)toast('📅 '+d+' '+MONTH_NAMES[m]);};
    grid.appendChild(cell);
  }
}
function streakPrevMonth(){G.calMonth--;if(G.calMonth<0){G.calMonth=11;G.calYear--;}renderCalendar();}
function streakNextMonth(){G.calMonth++;if(G.calMonth>11){G.calMonth=0;G.calYear++;}renderCalendar();}

function doCheckIn_base(){
  if(G.checkedToday){toast('✅ Sudah check-in hari ini!');return;}
  G.checkedToday=true; G.streak++;
  G.coins+=20; updateUI(); particles();
  const today=new Date().getDate();
  if(!G.doneDays.includes(today)) G.doneDays.push(today);
  toast('🔥 Check-in berhasil! +20🪙 Streak: '+G.streak+' hari!');
  renderStreakScreen();
}

/* ══════════════════════════════════════
   📊 STATISTIK
══════════════════════════════════════ */
const TRASH_TYPES=[
  {label:'Plastik',pct:42,color:'#5C6BC0',icon:'🛍️'},
  {label:'Organik',pct:28,color:'#43A047',icon:'🌿'},
  {label:'Logam',pct:18,color:'#FF8C00',icon:'🥫'},
  {label:'Kertas',pct:8, color:'#E53935',icon:'📰'},
  {label:'B3',    pct:4, color:'#9C27B0',icon:'⚠️'},
];
const WEEKLY_LAPS=[2,5,3,8,4,6,3];
const DAY_LABELS=['Sen','Sel','Rab','Kam','Jum','Sab','Min'];

function openStats(){renderStats();go('stats');}
function renderStats(){
  document.getElementById('st-lap').textContent=G.lap;
  document.getElementById('st-bersih').textContent=G.bersih;
  document.getElementById('st-streak').textContent=G.streak;
  document.getElementById('st-co2').textContent=(G.lap*0.26).toFixed(1);

  // Bar chart
  const maxV=Math.max(...WEEKLY_LAPS);
  const bc=document.getElementById('st-barchart'), bl=document.getElementById('st-barlabels');
  bc.innerHTML=''; bl.innerHTML='';
  WEEKLY_LAPS.forEach((v,i)=>{
    const h=Math.round((v/maxV)*100);
    const isToday=i===5;
    bc.innerHTML+=`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;position:relative">
      <div style="font-size:10px;font-weight:800;color:#5B4FD8;position:absolute;top:-16px">${v}</div>
      <div style="width:100%;border-radius:6px 6px 0 0;background:${isToday?'#3B2B9C':'#C5C0E8'};height:${h}px;transition:height .8s ease;min-height:5px"></div>
    </div>`;
    bl.innerHTML+=`<div style="flex:1;text-align:center;font-size:10px;font-weight:700;color:${isToday?'#3B2B9C':'#AAA'}">${DAY_LABELS[i]}</div>`;
  });

  // Donut
  const svg=document.getElementById('st-donut');
  const cx=55,cy=55,r=38,inner=22;
  const total=TRASH_TYPES.reduce((a,t)=>a+t.pct,0);
  let startA=-Math.PI/2, paths='';
  TRASH_TYPES.forEach((t,i)=>{
    const angle=(t.pct/total)*Math.PI*2;
    const endA=startA+angle;
    const x1=cx+r*Math.cos(startA),y1=cy+r*Math.sin(startA);
    const x2=cx+r*Math.cos(endA),y2=cy+r*Math.sin(endA);
    const xi1=cx+inner*Math.cos(startA),yi1=cy+inner*Math.sin(startA);
    const xi2=cx+inner*Math.cos(endA),yi2=cy+inner*Math.sin(endA);
    const lg=angle>Math.PI?1:0;
    paths+=`<path d="M${xi1} ${yi1} L${x1} ${y1} A${r} ${r} 0 ${lg} 1 ${x2} ${y2} L${xi2} ${yi2} A${inner} ${inner} 0 ${lg} 0 ${xi1} ${yi1}Z" fill="${t.color}"/>`;
    startA=endA;
  });
  paths+=`<circle cx="${cx}" cy="${cy}" r="${inner}" fill="white"/><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="11" font-weight="900" fill="#1A1030">${total}%</text>`;
  svg.innerHTML=paths;

  const leg=document.getElementById('st-legend');
  leg.innerHTML=TRASH_TYPES.map(t=>`
    <div style="display:flex;align-items:center;gap:7px">
      <div style="width:10px;height:10px;border-radius:3px;background:${t.color};flex-shrink:0"></div>
      <span style="font-size:12px;font-weight:700;color:#333;flex:1">${t.icon} ${t.label}</span>
      <span style="font-size:12px;font-weight:900;color:#5B4FD8">${t.pct}%</span>
    </div>`).join('');
}

/* ══════════════════════════════════════
   🔔 NOTIFIKASI
══════════════════════════════════════ */
function openNotif(from){G.notifFrom=from||'home';renderNotifs();go('notif');}
function renderNotifs(){
  const unread=NOTIFS.filter(n=>n.unread).length;
  const hdr=document.getElementById('notif-badge-hdr');
  hdr.textContent=unread>0?unread+' baru':'Semua dibaca';
  hdr.style.background=unread>0?'#FF4444':'#AAA';
  updateNotifBadges(unread);

  const filtered=G.notifFilter==='all'?NOTIFS:NOTIFS.filter(n=>n.type===G.notifFilter);
  const list=document.getElementById('notif-list');
  if(!list) return;
  if(filtered.length===0){list.innerHTML='<div style="text-align:center;padding:48px 16px;color:#BBB;font-weight:700">Tidak ada notifikasi</div>';return;}
  list.innerHTML=filtered.map(n=>`
    <div class="notif-item${n.unread?' unread':''}" id="notif-${n.id}" onclick="readNotif(${n.id})">
      <div class="notif-ico" style="background:${n.icoBg}">${n.ico}</div>
      <div class="notif-body">
        <div class="notif-title">${n.unread?'<span style="display:inline-block;width:7px;height:7px;background:#FF4444;border-radius:50%;margin-right:5px;vertical-align:middle"></span>':''}${n.title}</div>
        <div class="notif-sub">${n.sub}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      <button onclick="event.stopPropagation();dismissNotif(${n.id})" style="background:none;border:none;font-size:18px;color:#CCC;cursor:pointer;padding:2px;flex-shrink:0">×</button>
    </div>`).join('');

  // Auto mark-as-read after 1.5s
  setTimeout(()=>{NOTIFS.forEach(n=>n.unread=false);updateNotifBadges(0);if(hdr)hdr.textContent='Semua dibaca',hdr.style.background='#AAA';},1500);
}
function updateNotifBadges(n){
  const hp=document.getElementById('home-notif-badge');
  const pp=document.getElementById('pf-notif-badge');
  if(hp){hp.textContent=n;hp.style.display=n>0?'':'none';}
  if(pp){pp.textContent=n;pp.style.display=n>0?'':'none';}
}
function readNotif(id){NOTIFS.find(n=>n.id===id&&(n.unread=false));renderNotifs();}
function filterNotifs(btn,filter){
  G.notifFilter=filter;
  document.querySelectorAll('.notif-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderNotifs();
}
function dismissNotif(id){NOTIFS=NOTIFS.filter(n=>n.id!==id);renderNotifs();toast('🗑️ Notifikasi dihapus');}
function clearAllNotifs(){NOTIFS=[];renderNotifs();toast('✅ Semua notifikasi dihapus');}

/* ══════════════════════════════════════
   💬 KOMENTAR
══════════════════════════════════════ */
function openComments(postId){
  G.activePostId=postId||'A';
  const data=COMMENTS_DATA[G.activePostId];
  if(!data) return;
  document.getElementById('cmt-post-av').textContent=data.postAv;
  document.getElementById('cmt-post-av').style.background=data.postAvBg;
  document.getElementById('cmt-post-nm').textContent=data.postNm;
  document.getElementById('cmt-post-txt').textContent=data.postTxt;
  document.getElementById('cmt-count-hdr').textContent=data.count+' komentar';
  renderComments(G.activePostId);
  go('comments');
}
function renderComments(postId){
  const data=COMMENTS_DATA[postId];
  if(!data) return;
  const list=document.getElementById('cmt-list');
  list.innerHTML=data.comments.map(c=>`
    <div class="cmt-item" id="cm-${postId}-${c.id}">
      <div class="cmt-av" style="background:${c.avBg}">${c.av}</div>
      <div class="cmt-bubble">
        <div class="cmt-nm">${c.nm}</div>
        <div class="cmt-txt">${c.txt}</div>
        <div class="cmt-meta">
          <span>${c.time}</span>
          <button class="cmt-like-btn${c.liked?' liked':''}" onclick="toggleCmtLike('${postId}',${c.id})" id="cml-${postId}-${c.id}">${c.liked?'❤️':'🤍'} ${c.likes}</button>
          <button class="cmt-like-btn" onclick="toast('↩️ Balas segera hadir!')">Balas</button>
        </div>
      </div>
    </div>`).join('');
}
function toggleCmtLike(postId,cmtId){
  const cmt=COMMENTS_DATA[postId].comments.find(c=>c.id===cmtId);
  if(!cmt) return;
  cmt.liked=!cmt.liked; cmt.likes+=cmt.liked?1:-1;
  const btn=document.getElementById('cml-'+postId+'-'+cmtId);
  if(btn){btn.innerHTML=(cmt.liked?'❤️':'🤍')+' '+cmt.likes;btn.className='cmt-like-btn'+(cmt.liked?' liked':'');}
}
function submitComment(){
  const inp=document.getElementById('cmt-input');
  const txt=(inp.textContent||inp.innerText||'').trim();
  if(!txt){toast('✏️ Tulis komentar dulu!');return;}
  const data=COMMENTS_DATA[G.activePostId];
  const newCmt={id:Date.now(),av:'🧑',avBg:'linear-gradient(135deg,#43A047,#1B5E20)',nm:'Ady Hunter',txt,time:'Baru saja',likes:0,liked:false};
  data.comments.unshift(newCmt); data.count++;
  document.getElementById('cmt-count-hdr').textContent=data.count+' komentar';
  inp.textContent='';
  renderComments(G.activePostId); particles(); toast('✅ Komentar dikirim!');
  G.cmtDone=(G.cmtDone||0)+1; renderQuest();
  showInAppPopup('💬','#F3E5F5','Komentar terkirim!','Quest forum kamu bertambah! '+Math.min(G.cmtDone,2)+'/2');
}

/* ══ FORUM ══ */
function renderForum(){
  const L=document.getElementById('fm-list');
  if(!L) return;
  const posts=[
    {id:'A',av:'🧑‍🦱',bg:'linear-gradient(135deg,#8D6E63,#5D4037)',nm:'SiPungut',time:'3 jam lalu',
     txt:'Denpasar hari ini kotor juga yaa.... Banyak banget sampah di pinggir jalan! 😤',lk:263,cm:61,sh:12,re:1634},
    {id:'B',av:'👩‍🦳',bg:'linear-gradient(135deg,#F44336,#B71C1C)',nm:'CleanQueen',time:'16 jam lalu',
     txt:'Udah bersih-bersih belum hari ini?? Yuk semangat menjaga lingkungan Bali kita! 💚♻️',lk:1562,cm:148,sh:50,re:3594},
    {id:'C',av:'😎',bg:'linear-gradient(135deg,#FF5722,#BF360C)',nm:'TrashNoMore',time:'20 jam lalu',
     txt:'Temen-temen Singaraja yukk merapat, kita ada agenda bersih-bersih bareng nih di sekitaran taman kota. Yuk kumpul jam 7 pagi di depan Taman Kota!! 🌿♻️',lk:561,cm:68,sh:10,re:1684},
  ];
  L.innerHTML=posts.map(p=>`
    <div class="post-card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:48px;height:48px;border-radius:50%;background:${p.bg};display:flex;align-items:center;justify-content:center;font-size:25px;flex-shrink:0;box-shadow:0 3px 12px rgba(0,0,0,.18)">${p.av}</div>
        <div style="flex:1"><div style="font-size:15px;font-weight:900;color:#1A1030">${p.nm}</div><div style="font-size:11px;color:#B8B0CC;margin-top:2px">${p.time}</div></div>
        <button id="fol${p.id}" data-following="0" onclick="fmFollowBtn(this,'${p.nm}')" style="border:1.8px solid #8B6FE8;border-radius:22px;padding:7px 17px;font-size:12px;font-weight:800;color:#6B4FD0;background:transparent;cursor:pointer;white-space:nowrap">Ikuti</button>
      </div>
      <div style="font-size:14px;color:#3A3050;margin-bottom:12px;line-height:1.62">${p.txt}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;border-top:1.5px solid #F0ECF8;padding-top:11px">
        <button id="lk${p.id}" data-n="${p.lk}" data-on="0" onclick="fmLikeBtn(this)" style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700;color:#E04040;background:none;border:none;cursor:pointer;padding:5px 9px;border-radius:10px">
          <svg width="19" height="19" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E04040"/></svg>
          <span class="lk-count">${p.lk.toLocaleString('id-ID')}</span>
        </button>
        <button onclick="openComments('${p.id}')" style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700;color:#9898B8;background:none;border:none;cursor:pointer;padding:5px 9px;border-radius:10px">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#9898B8"/></svg>${p.cm}
        </button>
        <button onclick="toast('📤 Link disalin!')" style="display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700;color:#9898B8;background:none;border:none;cursor:pointer;padding:5px 9px;border-radius:10px">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#9898B8"/></svg>${p.sh}
        </button>
        <div style="display:flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:#C8C0D8;padding:5px 6px">
          <svg width="17" height="17" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="#C8C0D8"/></svg>${p.re.toLocaleString('id-ID')}
        </div>
      </div>
    </div>`).join('');
}
function fmLikeBtn(btn){
  const on=btn.getAttribute('data-on')==='1', base=parseInt(btn.getAttribute('data-n'),10), now=!on;
  btn.setAttribute('data-on',now?'1':'0');
  const span=btn.querySelector('.lk-count');
  if(span) span.textContent=(now?base+1:base).toLocaleString('id-ID');
  const path=btn.querySelector('svg path');
  if(path) path.setAttribute('fill',now?'#E04040':'#CCC0D8');
  toast(now?'❤️ Disukai!':'🤍 Batal suka');
}
function fmFollowBtn(btn,nm){
  const now=btn.getAttribute('data-following')!=='1';
  btn.setAttribute('data-following',now?'1':'0');
  btn.textContent=now?'Mengikuti':'Ikuti';
  btn.style.background=now?'#3B2B9C':'transparent';
  btn.style.color=now?'#fff':'#6B4FD0';
  btn.style.borderColor=now?'#3B2B9C':'#8B6FE8';
  toast(now?'✅ Mengikuti '+nm:'Berhenti mengikuti '+nm);
}
function fmNav(btn,tab){
  document.querySelectorAll('.fm-nb-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(tab==='profil'){setTimeout(()=>go('profil'),120);return;}
  if(tab==='home'){setTimeout(()=>go('home'),120);return;}
  if(tab==='pesan') toast('✉️ Pesan segera hadir!');
  if(tab==='suka') toast('❤️ Postingan favorit kamu');
}

/* ══ TOKO ══ */
let curShop={cat:'tops',idx:0,price:50};
function renderShop_base(cat){
  const data=SHOP[cat]; curShop={cat,idx:0,price:data[0].p};
  const g=document.getElementById('tk-grid'); g.innerHTML='';
  data.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText=`background:${i===0?'#EEEAFF':'#F8F8F8'};border:3px solid ${i===0?'#4A38B5':'transparent'};border-radius:14px;padding:13px 6px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;transition:all .18s;text-align:center`;
    d.innerHTML=`<span style="font-size:38px;line-height:1">${item.i}</span><div style="display:flex;align-items:center;gap:3px;font-size:12px;font-weight:800;color:#333"><div style="width:16px;height:16px;background:linear-gradient(135deg,#FFD700,#FFA000);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:7px">🪙</div>${item.p}</div>`;
    d.onclick=()=>{
      document.querySelectorAll('#tk-grid>div').forEach((x,xi)=>{x.style.background=xi===i?'#EEEAFF':'#F8F8F8';x.style.borderColor=xi===i?'#4A38B5':'transparent';});
      curShop={cat,idx:i,price:item.p};
      document.getElementById('buy-price').textContent=item.p;
    };
    g.appendChild(d);
  });
  document.getElementById('buy-price').textContent=data[0].p;
}
function tkTab(el,cat){
  document.querySelectorAll('.tk-tab-btn').forEach(t=>{t.style.background='#F5F5F5';t.style.borderColor='transparent';});
  el.style.background='#E8E4FF'; el.style.borderColor='#4A38B5';
  renderShop(cat);
}
function buyItem(){
  const p=curShop.price||50;
  if(G.coins<p){toast('🪙 Koin tidak cukup!');return;}
  G.coins-=p; updateUI(); particles(); toast(`✅ Item berhasil dibeli! -${p} 🪙`);
}

/* ══ STARS ══ */
function initStars(){
  const bg=document.getElementById('stars-bg');
  for(let i=0;i<55;i++){
    const s=document.createElement('div'); s.className='star-dot';
    const sz=1+Math.random()*2;
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;animation-delay:${Math.random()*2}s;animation-duration:${1.5+Math.random()*2}s`;
    bg.appendChild(s);
  }
}

/* ══ UI UPDATE ══ */
function updateUI(){
  document.getElementById('coins-val').textContent=G.coins;
  document.getElementById('pf-coins').textContent=G.coins;
  document.getElementById('tk-coins').textContent=G.coins;
  document.getElementById('pf-lap').textContent=G.lap;
  document.getElementById('pf-bersih').textContent=G.bersih;
  const pct=Math.min(100,Math.round(G.xp/400*100));
  document.getElementById('pf-exp-bar').style.width=pct+'%';
  const sn=document.getElementById('pf-streak-num');
  if(sn) sn.textContent=G.streak;
  const nb=NOTIFS.filter(n=>n.unread).length;
  updateNotifBadges(nb);
  renderDQPopup();
}

/* ══ FX ══ */
function confettiFx(){
  const w=document.getElementById('conf-wrap'); w.innerHTML='';
  const cols=['#BBFF4B','#FFD700','#FF4D4D','#4DDFFF','#E040FB','#FFF','#FF9800','#4CAF50'];
  for(let i=0;i<28;i++){
    const d=document.createElement('div'); d.className='cf';
    d.style.left=Math.random()*100+'%';
    d.style.width=(4+Math.random()*9)+'px'; d.style.height=(4+Math.random()*9)+'px';
    d.style.background=cols[Math.floor(Math.random()*cols.length)];
    d.style.animationDuration=(.8+Math.random()*1.5)+'s';
    d.style.animationDelay=Math.random()*.6+'s';
    w.appendChild(d);
  }
}
function particles(){
  const em=['🌟','✨','💚','♻️','🎉','⭐','🪙','🍃','🌿'];
  for(let i=0;i<12;i++){
    setTimeout(()=>{
      const p=document.createElement('div'); p.className='prtcl';
      p.textContent=em[Math.floor(Math.random()*em.length)];
      p.style.left=window.innerWidth/2+'px'; p.style.top=window.innerHeight/2+'px';
      const a=Math.random()*Math.PI*2, dist=80+Math.random()*160;
      p.style.setProperty('--tx',Math.cos(a)*dist+'px');
      p.style.setProperty('--ty',Math.sin(a)*dist+'px');
      document.body.appendChild(p); setTimeout(()=>p.remove(),1350);
    },i*55);
  }
}
let _tst;
function toast(msg){
  const el=document.getElementById('toast-el');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(_tst); _tst=setTimeout(()=>el.classList.remove('show'),2700);
}

/* ══════════════════════════════════════
   🏅 BADGE COLLECTION
══════════════════════════════════════ */
const ALL_BADGES = {
  laporan:[
    {ico:'🌱',nm:'Pemula Hijau',   desc:'Laporan pertama',      req:1,  cat:'lap'},
    {ico:'📸',nm:'Fotografer',     desc:'5 laporan sampah',     req:5,  cat:'lap'},
    {ico:'🥇',nm:'Hunter Pro',     desc:'10 laporan sampah',    req:10, cat:'lap'},
    {ico:'💎',nm:'Elite Hunter',   desc:'20 laporan sampah',    req:20, cat:'lap'},
    {ico:'🚀',nm:'Legenda Bali',   desc:'50 laporan sampah',    req:50, cat:'lap'},
  ],
  streak:[
    {ico:'🔥',nm:'Mulai Streak',   desc:'3 hari berturut',      req:3,  cat:'str'},
    {ico:'💫',nm:'Streak Warrior', desc:'7 hari berturut',      req:7,  cat:'str'},
    {ico:'⚡',nm:'On Fire!',       desc:'14 hari berturut',     req:14, cat:'str'},
    {ico:'👑',nm:'Raja Streak',    desc:'30 hari berturut',     req:30, cat:'str'},
  ],
  lingkungan:[
    {ico:'🌿',nm:'Eco Starter',    desc:'Hemat 1kg CO₂',        req:4,  cat:'co2'},
    {ico:'🌳',nm:'Penjaga Pohon',  desc:'Hemat 5kg CO₂',        req:19, cat:'co2'},
    {ico:'🐠',nm:'Penyelamat Ikan',desc:'50 ikan diselamatkan',  req:50, cat:'lap'},
  ],
  spesial:[
    {ico:'⭐',nm:'Bintang Forum',   desc:'Post pertama di Forum', req:1, cat:'sp'},
    {ico:'🤖',nm:'AI Expert',       desc:'10× AI Scan dipakai',  req:10, cat:'sp'},
    {ico:'🛒',nm:'Shopper',         desc:'Beli item pertama di Toko', req:1, cat:'sp'},
  ],
};

function openBadges(){renderBadges();go('badges');}
function renderBadges(){
  const cats={laporan:'badge-grid-laporan',streak:'badge-grid-streak',lingkungan:'badge-grid-lingkungan',spesial:'badge-grid-spesial'};
  let earned=0, total=0;
  Object.entries(ALL_BADGES).forEach(([cat,list])=>{
    const el=document.getElementById(cats[cat]);
    if(!el) return;
    el.innerHTML=list.map(b=>{
      const got=checkBadgeEarned(b);
      if(got) earned++;
      total++;
      return `<div class="badge-card ${got?'earned':'locked'}" onclick="${got?`toast('${b.ico} ${b.nm} — ${b.desc}')`:`toast('🔒 Butuh: ${b.desc}')`}">
        ${got?'<div class="bc-check">✅</div>':''}
        <div class="bc-ico">${b.ico}</div>
        <div class="bc-nm">${b.nm}</div>
        <div class="bc-desc">${b.desc}</div>
      </div>`;
    }).join('');
  });
  const pct=Math.round(earned/total*100);
  const pb=document.getElementById('badge-prog-bar');
  if(pb) pb.style.width=pct+'%';
  const ct=document.getElementById('badge-count-txt');
  if(ct) ct.textContent=earned+' / '+total;
  const pe=document.getElementById('pf-badge-earned');
  if(pe) pe.textContent=earned;
}
function checkBadgeEarned(b){
  if(b.cat==='lap') return G.lap>=b.req;
  if(b.cat==='str') return G.streak>=b.req;
  if(b.cat==='co2') return (G.lap*0.26)>=b.req;
  if(b.cat==='sp')  return G[b.nm]>=b.req||false;
  return false;
}

/* ══════════════════════════════════════
   🎯 DAILY QUEST INTERAKTIF
══════════════════════════════════════ */
const QUESTS = [
  {id:'q1', ico:'📷', bg:'#E8F5E9', nm:'Laporkan 3 sampah',     total:3,  xp:40, coins:15, key:'lap'},
  {id:'q2', ico:'🧹', bg:'#E3F2FD', nm:'Bersihkan 1 sampah',    total:1,  xp:30, coins:10, key:'bersih'},
  {id:'q3', ico:'💬', bg:'#F3E5F5', nm:'Tulis 2 komentar forum', total:2,  xp:20, coins:8,  key:'cmtDone'},
  {id:'q4', ico:'🔥', bg:'#FFF3EE', nm:'Check-in streak hari ini',total:1, xp:25, coins:10, key:'checkedToday'},
  {id:'q5', ico:'🏪', bg:'#FFF8E0', nm:'Kunjungi toko',          total:1,  xp:15, coins:5,  key:'visitedShop'},
];

function openQuest(){renderQuest();go('quest');}
function getQuestProg(q){
  if(q.key==='lap') return Math.min(G.lap,q.total);
  if(q.key==='bersih') return Math.min(G.bersih,q.total);
  if(q.key==='checkedToday') return G.checkedToday?1:0;
  if(q.key==='cmtDone') return Math.min(G.cmtDone||0, q.total);
  if(q.key==='visitedShop') return G.visitedShop?1:0;
  return 0;
}
function renderQuest(){
  const list=document.getElementById('quest-list');
  if(!list) return;
  let totalXp=0, earnedXp=0;
  QUESTS.forEach(q=>{totalXp+=q.xp;});
  list.innerHTML=QUESTS.map(q=>{
    const prog=getQuestProg(q);
    const done=prog>=q.total;
    const pct=Math.min(100,Math.round(prog/q.total*100));
    if(done) earnedXp+=q.xp;
    return `<div class="dq-quest-row ${done?'done':''}" onclick="questTap('${q.id}')">
      <div class="dq-quest-ico" style="background:${q.bg}">${q.ico}</div>
      <div class="dq-quest-body">
        <div class="dq-quest-nm" style="color:${done?'#888':'#1A1030'}">${done?'<s>':''} ${q.nm} ${done?'</s>':''}</div>
        <div class="dq-quest-prog"><div class="dq-quest-pf" style="width:${pct}%"></div></div>
        <div class="dq-quest-done-lbl">${done?'✅ Selesai':''+prog+' / '+q.total}</div>
      </div>
      <div class="dq-quest-reward">+${q.xp} XP<br><span style="font-size:10px;color:#AAA">+${q.coins}🪙</span></div>
    </div>`;
  }).join('');
  const allDone=QUESTS.every(q=>getQuestProg(q)>=q.total);
  earnedXp = QUESTS.reduce((s,q)=>getQuestProg(q)>=q.total?s+q.xp:s,0);
  const xpEl=document.getElementById('quest-xp-earned');
  if(xpEl) xpEl.textContent=earnedXp+' / '+totalXp+' XP';
  const xpBar=document.getElementById('quest-xp-bar');
  if(xpBar) xpBar.style.width=Math.round(earnedXp/totalXp*100)+'%';
  const hint=document.getElementById('quest-chest-hint');
  if(hint) hint.textContent=allDone?'🎁 Chest tersedia! Klik untuk klaim':'Selesaikan semua → Chest 🎁 +50🪙';
  // Countdown timer
  const now=new Date(), midnight=new Date(now); midnight.setHours(24,0,0,0);
  const diff=Math.floor((midnight-now)/1000);
  const hh=String(Math.floor(diff/3600)).padStart(2,'0');
  const mm=String(Math.floor((diff%3600)/60)).padStart(2,'0');
  const ss=String(diff%60).padStart(2,'0');
  const rl=document.getElementById('quest-reset-lbl');
  if(rl) rl.textContent='Reset '+hh+':'+mm+':'+ss;
  // Update DQ popup mini list
  renderDQPopup();
}
function renderDQPopup(){
  const el=document.getElementById('dq-popup-list'); if(!el) return;
  el.innerHTML=QUESTS.slice(0,3).map(q=>{
    const prog=getQuestProg(q); const done=prog>=q.total;
    const pct=Math.min(100,Math.round(prog/q.total*100));
    return `<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid #F0EDF8">
      <span style="font-size:16px">${q.ico}</span>
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;color:${done?'#888':'#333'}">${q.nm}</div>
        <div style="height:4px;background:#EEE;border-radius:2px;margin-top:3px;overflow:hidden"><div style="width:${pct}%;height:100%;background:${done?'#27A648':'#3B2B9C'};border-radius:2px"></div></div>
      </div>
      <span style="font-size:10px;font-weight:800;color:${done?'#27A648':'#999'}">${done?'✅':prog+'/'+q.total}</span>
    </div>`;
  }).join('');
  const doneCount=QUESTS.filter(q=>getQuestProg(q)>=q.total).length;
  const fab=document.getElementById('dq-fab-lbl');
  if(fab) fab.textContent=doneCount+'/'+QUESTS.length+' Quest';
}
function questTap(id){
  const q=QUESTS.find(x=>x.id===id); if(!q) return;
  const done=getQuestProg(q)>=q.total;
  if(done){
    const allDone=QUESTS.every(x=>getQuestProg(x)>=x.total);
    if(allDone&&!G.chestClaimed){
      G.chestClaimed=true; G.coins+=50; G.xp+=30; updateUI(); particles();
      toast('🎁 Chest dibuka! +50🪙 +30XP');
      showInAppPopup('🎁','#FFF8E0','Chest Daily Quest!','+50🪙 +30XP berhasil diklaim');
    } else {
      toast('✅ Quest ini sudah selesai!');
    }
    return;
  }
  // Shortcuts
  if(q.key==='lap'){closeDQ();go('home');toast('📷 Foto sampah untuk selesaikan quest!');}
  else if(q.key==='bersih'){closeDQ();go('home');toast('🧹 Bersihkan sampah di peta!');}
  else if(q.key==='checkedToday'){closeDQ();openStreak();}
  else if(q.key==='visitedShop'){G.visitedShop=true;closeDQ();navTap(document.querySelector('.nv'),'toko');renderShop('tops');go('toko');renderQuest();}
  else if(q.key==='cmtDone'){closeDQ();go('forum');toast('💬 Tulis komentar di forum!');}
}
// Call renderQuest after comment submitted

/* ══════════════════════════════════════
   ✏️ EDIT PROFIL
══════════════════════════════════════ */
const AVATARS=['🧑‍🌿','🧑','👩','🧑‍🦱','👩‍🦳','😎','🦸','🧙','👩‍💻','🧑‍🚀','🌟','🐸'];
function openEditProfil(){
  renderAvatarGrid();
  document.getElementById('ep-name-input').value=G.playerName||'Ady Hunter';
  document.getElementById('ep-preview-nm').textContent=G.playerName||'Ady Hunter';
  const av=G.playerAv||'🧑‍🌿';
  document.getElementById('ep-preview-av').textContent=av;
  go('edit-profil');
}
function renderAvatarGrid(){
  const grid=document.getElementById('ep-avatar-grid'); if(!grid) return;
  const cur=G.playerAv||'🧑‍🌿';
  grid.innerHTML=AVATARS.map((av,i)=>`
    <div class="avatar-opt ${av===cur?'selected':''}" onclick="selectAvatar(this,'${av}')">${av}</div>
  `).join('');
  // char count
  const inp=document.getElementById('ep-name-input');
  if(inp){
    const cc=document.getElementById('ep-char-count');
    if(cc) cc.textContent=inp.value.length+' / 20 karakter';
    inp.oninput=function(){
      document.getElementById('ep-preview-nm').textContent=this.value||'—';
      if(cc) cc.textContent=this.value.length+' / 20 karakter';
    };
  }
}
function selectAvatar(el, av){
  document.querySelectorAll('.avatar-opt').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');
  G.playerAv=av;
  document.getElementById('ep-preview-av').textContent=av;
}
function saveProfile(){
  const nm=document.getElementById('ep-name-input').value.trim()||'Ady Hunter';
  G.playerName=nm; G.playerAv=G.playerAv||'🧑‍🌿';
  // Update all name/avatar spots
  document.querySelectorAll('#pf-nm-txt').forEach(el=>el.textContent=nm+' ');
  const scAv=document.getElementById('sc-av'); if(scAv) scAv.textContent=G.playerAv;
  const scNm=document.getElementById('sc-nm'); if(scNm) scNm.textContent=nm;
  // Update player marker on map
  const mapAv=document.getElementById('player-av-ico');
  if(mapAv) mapAv.textContent=G.playerAv;
  // Update ply-card on home
  const plyAv=document.querySelector('.ply-av');
  if(plyAv) plyAv.textContent=G.playerAv;
  const plyNm=document.querySelector('.ply-nm');
  if(plyNm) plyNm.textContent=nm;
  particles(); toast('✅ Profil berhasil disimpan!');
  showInAppPopup('✏️','#E8F5E9','Profil diperbarui!','Nama & avatar kamu sudah tersimpan');
  go('profil');
}

/* ══════════════════════════════════════
   📤 SHARE KARTU SKOR
══════════════════════════════════════ */
function openShare(){
  // Refresh stats on card
  document.getElementById('sc-av').textContent=G.playerAv||'🧑‍🌿';
  document.getElementById('sc-nm').textContent=G.playerName||'Ady Hunter';
  document.getElementById('sc-lap').textContent=G.lap;
  document.getElementById('sc-bersih').textContent=G.bersih;
  document.getElementById('sc-streak').textContent='🔥 '+G.streak;
  document.getElementById('sc-coins').textContent=G.coins;
  document.getElementById('sc-co2').textContent=(G.lap*0.26).toFixed(1)+' kg CO₂';
  go('share');
}
function doShare(platform){
  const nm=G.playerName||'Ady Hunter';
  const txt=`🗑️ TRASH HUNT BALI\n👤 ${nm} | Lv.10\n📋 Laporan: ${G.lap}\n🧹 Bersihan: ${G.bersih}\n🔥 Streak: ${G.streak} hari\n🪙 Koin: ${G.coins}\n🌿 CO₂ diselamatkan: ${(G.lap*0.26).toFixed(1)}kg\n\nAyo ikut menjaga Bali bareng! 💚`;
  if(platform==='wa'){
    const url='https://wa.me/?text='+encodeURIComponent(txt);
    window.open(url,'_blank');
    toast('💬 Membuka WhatsApp...');
  } else if(platform==='copy'){
    navigator.clipboard&&navigator.clipboard.writeText(txt).then(()=>toast('📋 Teks skor disalin!'));
    if(!navigator.clipboard) toast('📋 Teks skor disalin!');
  } else if(platform==='ig'){
    toast('📸 Fitur simpan foto segera hadir!');
  }
  particles();
}

/* ══════════════════════════════════════
   🔔 IN-APP NOTIFICATION POPUP
══════════════════════════════════════ */
let _inappTimer;
function showInAppPopup(ico, bg, title, sub){
  const p=document.getElementById('inapp-popup');
  const i=document.getElementById('inapp-ico');
  const t=document.getElementById('inapp-title');
  const s=document.getElementById('inapp-sub');
  if(!p) return;
  i.textContent=ico; i.style.background=bg;
  t.textContent=title; s.textContent=sub;
  p.classList.add('show');
  clearTimeout(_inappTimer);
  _inappTimer=setTimeout(()=>hideInAppPopup(),4500);
}
// Alias for new feature code
function showInappNotif(ico,bg,title,sub){showInAppPopup(ico,bg,title,sub);}
function closeInapp(){hideInAppPopup();}
function hideInAppPopup(){
  const p=document.getElementById('inapp-popup');
  if(p) p.classList.remove('show');
}
// Trigger in-app popup on certain events
function doReport(){
  doReport_base();
  setTimeout(()=>{
    G.cmtDone=(G.cmtDone||0); renderQuest();
    showInAppPopup('📋','#E8F5E9','Sampah dilaporkan!','Laporan berhasil dikirim. +5🪙 didapat!');
  },600);
}
function finishClean(){
  finishClean_base();
  setTimeout(()=>{
    renderQuest();
    showInAppPopup('🧹','#E3F2FD','Area dibersihkan!','Kerja bagus! +15🪙 telah masuk dompet.');
  },600);
}
// Trigger popup on checkin
function doCheckIn(){
  doCheckIn_base();
  setTimeout(()=>{
    renderQuest();
    showInAppPopup('🔥','#FFF3EE','Check-in berhasil!','Streak '+G.streak+' hari! +20🪙');
  },400);
}
// Trigger quest popup when shop visited
function renderShop(cat){
  renderShop_base(cat);
  if(!G.visitedShop){G.visitedShop=true; renderQuest();}
}

/* ══ INIT ══ */
setTimeout(()=>go('signin'),2500);
initStars();
renderForum();
renderShop('tops');
renderNotifs();
renderDQPopup();
// Build map right away - #s-home is always in DOM (display:block), just opacity:0
// Leaflet can init on a visible-dimensioned container even if opacity:0
// Map will be built when user navigates to home screen via go('home')
// This ensures container has real pixel dimensions when Leaflet initializes
// Demo in-app notif
setTimeout(()=>{
  showInappNotif('🔥','#FFF3EE','Streak 7 Hari!','+25🪙 bonus streak masuk dompetmu!');
},7000);
