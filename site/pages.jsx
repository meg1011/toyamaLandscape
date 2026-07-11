// ──────────────────────────────────────────────────────────────────
// PHOTOS / ABOUT / NOTE / CONTACT
// ──────────────────────────────────────────────────────────────────

/* ─── PHOTOS ───────────────────────────────────────────────────── */
const ALL_PHOTOS = [
  {file:"ADS1065.jpg",season:"秋",location:"田園",detail:"富山県氷見市"},
  {file:"ADS_0543.jpg",season:"夏",location:"稲葉山の風車",detail:"富山県氷見市"},
  {file:"ADS_0565.jpg",season:"秋",location:"宇奈月温泉駅",detail:"富山県黒部市"},
  {file:"ADS_0993_富山市神通峡片路峡.jpg",season:"秋",location:"神通峡片路峡",detail:"富山県富山市"},
  {file:"ADS_1596_161202-03.jpg",season:"冬",location:"立山連峰",detail:"富山県富山市"},
  {file:"BDS_2462.jpg",season:"夏",location:"新湊の内川",detail:"富山県射水市"},
  {file:"BDS_2500.jpg",season:"冬",location:"雨晴海岸",detail:"富山県高岡市"},
  {file:"DSC_0504.jpg",season:"春",location:"田園",detail:"富山県富山市"},
  {file:"DSC_1129.jpg",season:"秋",location:"八尾の町並み",detail:"富山県富山市"},
  {file:"DSC_2603.jpg",season:"冬",location:"雪山",detail:"富山県富山市"},
  {file:"DSC_2737.jpg",season:"春",location:"立山連峰",detail:"富山県富山市"},
  {file:"DSC_2903.jpg",season:"春",location:"白鳥と立山連峰",detail:"富山県富山市"},
  {file:"DSC_2934.jpg",season:"冬",location:"立山",detail:"富山県富山市"},
  {file:"DSC_4267.jpg",season:"夏",location:"海王丸パーク",detail:"富山県射水市"},
  {file:"DSC_4298 2.jpg",season:"春",location:"雨晴海岸",detail:"富山県高岡市"},
  {file:"DSC_4435.jpg",season:"春",location:"富山駅と路面電車",detail:"富山県富山市"},
  {file:"DSC_4954.jpg",season:"春",location:"田園",detail:"富山県富山市"},
  {file:"DSC_5024.jpg",season:"春",location:"室堂平",detail:"富山県立山町"},
  {file:"DSC_5078.jpg",season:"春",location:"雪の大谷",detail:"富山県立山町"},
  {file:"DSC_5225.jpg",season:"春",location:"みくりが池",detail:"富山県立山町"},
  {file:"MSC_1502.jpg",season:"冬",location:"富山空港",detail:"富山県富山市"},
  {file:"MSC_2052.jpg",season:"冬",location:"電車（高山線）",detail:"富山県富山市"},
  {file:"Z62_8807.jpg",season:"夏",location:"田園",detail:"富山県富山市"},
  {file:"Z62_9348.jpg",season:"夏",location:"富山市街",detail:"富山県富山市"},
  {file:"Z62_9443.jpg",season:"夏",location:"田園",detail:"富山県富山市"},
  {file:"Z62_9462.jpg",season:"夏",location:"ひまわり畑",detail:"富山県富山市"},
  {file:"Z62_9898.jpg",season:"夏",location:"蓮池",detail:"富山県富山市"},
  {file:"Z62_9904.jpg",season:"夏",location:"神通川と立山連峰",detail:"富山県富山市"},
  {file:"_ADS0003_富山市夏の立山連邦.jpg",season:"夏",location:"立山連峰",detail:"富山県富山市"},
  {file:"_ADS0517.jpg",season:"秋",location:"田園と電車（高山線）",detail:"富山県富山市"},
  {file:"_ADS0702_富山市富山駅の夜.jpg",season:"夏",location:"富山駅",detail:"富山県富山市"},
  {file:"_ADS0704_富山市環水公園.jpg",season:"夏",location:"環水公園",detail:"富山県富山市"},
  {file:"_ADS0774_富山市富山駅の夜.jpg",season:"夏",location:"富山駅の路面電車",detail:"富山県富山市"},
  {file:"_ADS1044.jpg",season:"春",location:"城ヶ崎",detail:"富山県氷見市"},
  {file:"_ADS1069.jpg",season:"春",location:"阿尾漁港",detail:"富山県氷見市"},
  {file:"_ADS1304.jpg",season:"夏",location:"気多神社",detail:"富山県高岡市"},
  {file:"_ADS1496.jpg",season:"夏",location:"比美乃江大橋",detail:"富山県氷見市"},
  {file:"_ADS1534_1.jpg",season:"夏",location:"海王丸パーク",detail:"富山県射水市"},
  {file:"_ADS1799_立山町みくりが池.jpg",season:"夏",location:"みくりが池",detail:"富山県立山町"},
  {file:"_ADS2129_立山町アルペンルート..jpg",season:"夏",location:"立山アルペンルート",detail:"富山県立山町"},
  {file:"_ADS2238_立山町アルペンルート黒部ダム.jpg",season:"夏",location:"黒部ダム",detail:"富山県立山町"},
  {file:"_ADS2265_立山町アルペンルート黒部ダム.jpg",season:"夏",location:"黒部ダム",detail:"富山県立山町"},
  {file:"_ADS2876_富山市夕暮れの立山.jpg",season:"夏",location:"立山連峰",detail:"富山県富山市"},
  {file:"_BDS0152.jpg",season:"春",location:"富山駅と路面電車",detail:"富山県富山市"},
  {file:"_BDS0234_160823-31.jpg",season:"夏",location:"杉沢の沢すぎ",detail:"富山県朝日町"},
  {file:"_BDS0241_富山市護国神社の桜.jpg",season:"春",location:"護国神社",detail:"富山県富山市"},
  {file:"_BDS0260_富山市護国神社の桜.jpg",season:"春",location:"護国神社",detail:"富山県富山市"},
  {file:"_BDS0273.jpg",season:"春",location:"磯部堤の桜",detail:"富山県富山市"},
  {file:"_BDS0398_富山市富山城の桜.jpg",season:"春",location:"富山城",detail:"富山県富山市"},
  {file:"_BDS0526_富山市松川べりの桜.jpg",season:"春",location:"松川べりと路面電車",detail:"富山県富山市"},
  {file:"_BDS0545_富山市松川べりの桜.jpg",season:"春",location:"松川べり",detail:"富山県富山市"},
  {file:"_BDS0828_朝日町舟川べり.jpg",season:"春",location:"舟川べり",detail:"富山県朝日町"},
  {file:"_BDS0862.jpg",season:"夏",location:"新湊大橋",detail:"富山県射水市"},
  {file:"_BDS0872_朝日町舟川べり.jpg",season:"春",location:"舟川べり",detail:"富山県朝日町"},
  {file:"_BDS1005.jpg",season:"夏",location:"新湊の内川",detail:"富山県射水市"},
  {file:"_BDS1062.jpg",season:"夏",location:"電車（万葉線）",detail:"富山県射水市"},
  {file:"_BDS1163_富山市呉羽山公園・都市緑化植物園.jpg",season:"春",location:"呉羽山公園",detail:"富山県富山市"},
  {file:"_BDS1205.jpg",season:"夏",location:"電車（氷見線）",detail:"富山県氷見市"},
  {file:"_BDS1332_富山市富山城.jpg",season:"夏",location:"富山城",detail:"富山県富山市"},
  {file:"_BDS1422_富山県中新川郡立山町_立山駅.jpg",season:"秋",location:"立山駅",detail:"富山県立山町"},
  {file:"_BDS1448_富山市本宮砂防堰堤.jpg",season:"秋",location:"本宮砂防堰堤",detail:"富山県富山市"},
  {file:"_BDS1573.jpg",season:"夏",location:"日本海",detail:"富山県氷見市"},
  {file:"_BDS1581.jpg",season:"夏",location:"氷見漁港",detail:"富山県氷見市"},
  {file:"_BDS1587.jpg",season:"夏",location:"電車（氷見線）",detail:"富山県氷見市"},
  {file:"_BDS1594.jpg",season:"夏",location:"日本海",detail:"富山県氷見市"},
  {file:"_BDS1745.jpg",season:"夏",location:"となみ夢の平",detail:"富山県砺波市"},
  {file:"_BDS1778.jpg",season:"夏",location:"小牧ダム",detail:"富山県砺波市"},
  {file:"_BDS1874.jpg",season:"夏",location:"庄川峡遊覧船",detail:"富山県砺波市"},
  {file:"_BDS1942_1.jpg",season:"夏",location:"砺波平野",detail:"富山県砺波市"},
  {file:"_BDS1987.jpg",season:"秋",location:"黒部トロッコ電車",detail:"富山県黒部市"},
  {file:"_BDS2087.jpg",season:"秋",location:"黒部トロッコ電車",detail:"富山県黒部市"},
  {file:"_BDS2211_黒部市宇奈月町愛本橋.jpg",season:"秋",location:"愛本橋",detail:"富山県黒部市宇奈月町"},
  {file:"_BDS2447_160823-31.jpg",season:"夏",location:"電車（高山線）",detail:"富山県富山市"},
  {file:"_BDS2521_富山市富山城.jpg",season:"夏",location:"富山城",detail:"富山県富山市"},
  {file:"_BDS2824_1.jpg",season:"秋",location:"田園",detail:"富山県富山市"},
  {file:"_BDS2941_1_160823-31.jpg",season:"夏",location:"砺波平野",detail:"富山県砺波市"},
  {file:"_BDS2968.jpg",season:"夏",location:"田園",detail:"富山県南砺市"},
  {file:"_BDS2986.jpg",season:"夏",location:"相倉合掌造り",detail:"富山県南砺市"},
  {file:"_BDS3158.jpg",season:"夏",location:"桜ヶ池",detail:"富山県南砺市"},
  {file:"_BDS3168.jpg",season:"夏",location:"桜ヶ池",detail:"富山県南砺市"},
  {file:"_BDS3432_富山市富山駅ロータリー.jpg",season:"夏",location:"富山駅",detail:"富山県富山市"},
  {file:"_BDS3518_富山市市電.jpg",season:"夏",location:"富山駅と路面電車",detail:"富山県富山市"},
  {file:"_CDS4420.jpg",season:"春",location:"電車（高山線）",detail:"富山県富山市"},
  {file:"_CDS4461.jpg",season:"秋",location:"田園",detail:"富山県富山市"},
  {file:"_DSC3463.jpg",season:"冬",location:"田園",detail:"富山県富山市"},
  {file:"ADS_0775.JPG",season:"秋",location:"宇奈月ダム",detail:"富山県黒部市"},
  {file:"BDS_1137.jpg",season:"夏",location:"麦畑",detail:"富山県富山市"},
  {file:"DSC_1287.jpg",season:"冬",location:"大長谷川",detail:"富山県富山市"},
  {file:"DSC_4250.jpg",season:"春",location:"海王丸パーク",detail:"富山県射水市"},
  {file:"DSC_4254.jpg",season:"春",location:"海王丸パーク",detail:"富山県射水市"},
  {file:"DSC_5265.jpg",season:"春",location:"海王丸パーク",detail:"富山県射水市"},
  {file:"DSC_5364.jpg",season:"春",location:"新湊大橋と立山連峰",detail:"富山県射水市"},
  {file:"DSC_5365.jpg",season:"夏",location:"環水公園",detail:"富山県富山市"},
  {file:"_ADS0553.jpg",season:"夏",location:"八尾の町並み",detail:"富山県富山市"},
  {file:"_ADS2480_160823-31.JPG",season:"夏",location:"室堂平",detail:"富山県立山町"},
  {file:"_ADS2515_160823-31.JPG",season:"夏",location:"室堂平",detail:"富山県立山町"},
  {file:"_BDS1124.JPG",season:"秋",location:"本宮砂防堰堤",detail:"富山県富山市"},
  {file:"_BDS1571.jpg",season:"夏",location:"氷見漁港",detail:"富山県氷見市"},
  {file:"_BDS1833.JPG",season:"夏",location:"庄川峡遊覧船",detail:"富山県砺波市"},
  {file:"_BDS2710_1_160823-31.JPG",season:"夏",location:"岩瀬運河",detail:"富山県富山市"},
  {file:"_BDS2785_160823-31.JPG",season:"夏",location:"岩瀬浜",detail:"富山県富山市"},
  {file:"_DSC0460.jpg",season:"夏",location:"虹",detail:"富山県富山市"},
];

const SEASON_EN = { '春':'Spring', '夏':'Summer', '秋':'Autumn', '冬':'Winter' };

function PhotosPage() {
  const cats = ['すべて', '春', '夏', '秋', '冬'];
  const [active, setActive] = React.useState('すべて');
  const [lightbox, setLightbox] = React.useState(null);
  const [lbIdx, setLbIdx] = React.useState(0);

  const SEASON_ORDER = {'春':0,'夏':1,'秋':2,'冬':3,'':4};
  const isSakura = (p) =>
    p.file.includes('桜') || p.location.includes('桜') ||
    p.location.includes('舟川べり') || p.location.includes('松川べり') ||
    p.location.includes('磯部堤');
  const filtered = (active === 'すべて'
    ? [...ALL_PHOTOS]
    : ALL_PHOTOS.filter(p => p.season === active))
    .sort((a, b) => {
      const sa = SEASON_ORDER[a.season] ?? 4;
      const sb = SEASON_ORDER[b.season] ?? 4;
      if (sa !== sb) return sa - sb;
      if (a.season === '春' && b.season === '春') return isSakura(a) ? -1 : isSakura(b) ? 1 : 0;
      return 0;
    });

  React.useEffect(() => {
    function onKey(e) {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLbIdx(i => Math.min(i + 1, filtered.length - 1));
      if (e.key === 'ArrowLeft')  setLbIdx(i => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  function openLightbox(photo, idx) {
    setLightbox(photo);
    setLbIdx(idx);
  }

  const lbPhoto = lightbox ? filtered[lbIdx] : null;

  return (
    <main className="page-enter" data-screen-label="PHOTOS">
      <div className="photos-intro">
        <div className="shell">
          <div className="page-head" style={{paddingBottom:'40px'}}>
            <p style={{fontFamily:'"Inter",sans-serif',fontSize:'11px',letterSpacing:'.32em',color:'rgba(255,255,255,.35)',margin:'0 0 18px',textTransform:'uppercase'}}>Toyama Landscape</p>
            <h1 style={{fontFamily:'"Inter",sans-serif',fontWeight:300,fontSize:'clamp(24px,2.8vw,34px)',letterSpacing:'.16em',color:'#fff',margin:'0 0 20px',textTransform:'uppercase'}}>Photos</h1>
            <div style={{width:'40px',height:'1px',background:'rgba(255,255,255,.25)',marginBottom:'20px'}} />
            <p style={{fontFamily:'"Noto Sans JP",sans-serif',fontSize:'13px',lineHeight:2,letterSpacing:'.06em',color:'rgba(255,255,255,.5)',margin:0}}>
              四季折々の富山で出会った風景。季節で絞り込んでご覧いただけます。
            </p>
          </div>
          <div className="filters">
            {cats.map(c => (
              <button key={c}
                className={'chip' + (active === c ? ' is-on' : '')}
                onClick={() => setActive(c)}>
                {c}
                {c !== 'すべて' && (
                  <span style={{marginLeft:6,fontSize:10,opacity:.5}}>
                    {ALL_PHOTOS.filter(p => p.season === c).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="gallery">
          {filtered.map((photo, i) => (
            <div className="gallery__item" key={photo.file}
              onClick={() => openLightbox(photo, i)}
              style={{cursor:'pointer'}}>
              <div className="gallery__frame">
                <img src={'photos/thumbs/' + encodeURIComponent(photo.file)}
                  alt={photo.location || photo.season}
                  loading="lazy" decoding="async" />
              </div>
              <div className="meta">
                <b>{photo.location || ' '}</b>
                <span>{photo.season}  /  {SEASON_EN[photo.season]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lb-overlay" onClick={() => setLightbox(null)}
          style={{position:'fixed',inset:0,background:'rgba(0,0,0,.92)',zIndex:1000,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'24px'}}>
          <div onClick={e => e.stopPropagation()} style={{maxWidth:'92vw',display:'flex',flexDirection:'column',alignItems:'center',gap:0}}>
            <div style={{position:'relative',display:'inline-block'}}>
              <img src={'photos/' + encodeURIComponent(lbPhoto.file)} alt=""
                draggable={false}
                onContextMenu={e => e.preventDefault()}
                style={{maxWidth:'88vw',maxHeight:'76vh',objectFit:'contain',display:'block',userSelect:'none',WebkitUserSelect:'none'}} />
              <div onContextMenu={e => e.preventDefault()} style={{position:'absolute',inset:0,zIndex:1,cursor:'default'}} />
              <div style={{
                position:'absolute',bottom:24,left:28,zIndex:2,
                fontFamily:'"Shippori Mincho",serif',fontSize:22,letterSpacing:'.14em',
                color:'rgba(255,255,255,.82)',pointerEvents:'none',userSelect:'none',
              }}>© Megumi Matsuda</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',width:'100%',marginTop:16}}>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                {lbPhoto.detail && <span style={{fontFamily:'"Noto Sans JP",sans-serif',fontSize:12,letterSpacing:'.14em',color:'rgba(255,255,255,.5)'}}>{lbPhoto.detail}</span>}
                {lbPhoto.location && <span style={{fontFamily:'"Shippori Mincho",serif',fontSize:22,letterSpacing:'.12em',color:'#fff',lineHeight:1.2}}>{lbPhoto.location}</span>}
              </div>
              <span style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.2em',color:'rgba(255,255,255,.38)',whiteSpace:'nowrap',paddingBottom:2}}>
                {lbPhoto.season && SEASON_EN[lbPhoto.season] ? lbPhoto.season + '  ·  ' : ''}{lbIdx + 1} / {filtered.length}
              </span>
            </div>
            <div style={{display:'flex',gap:32,marginTop:24}}>
              <button onClick={e=>{e.stopPropagation();setLbIdx(i=>Math.max(i-1,0))}}
                disabled={lbIdx===0}
                style={{background:'none',border:'1px solid rgba(255,255,255,.3)',color:'#fff',padding:'8px 24px',cursor:'pointer',fontFamily:'"Inter",sans-serif',letterSpacing:'.12em',fontSize:12,opacity:lbIdx===0?.3:1}}>←</button>
              <button onClick={e=>{e.stopPropagation();setLightbox(null)}}
                style={{background:'none',border:'1px solid rgba(255,255,255,.3)',color:'#fff',padding:'8px 24px',cursor:'pointer',fontFamily:'"Inter",sans-serif',letterSpacing:'.12em',fontSize:12}}>CLOSE</button>
              <button onClick={e=>{e.stopPropagation();setLbIdx(i=>Math.min(i+1,filtered.length-1))}}
                disabled={lbIdx===filtered.length-1}
                style={{background:'none',border:'1px solid rgba(255,255,255,.3)',color:'#fff',padding:'8px 24px',cursor:'pointer',fontFamily:'"Inter",sans-serif',letterSpacing:'.12em',fontSize:12,opacity:lbIdx===filtered.length-1?.3:1}}>→</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
