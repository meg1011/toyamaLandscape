// ── Shared: Nav + Footer ─────────────────────────────────────────

function SiteNav({
  page,
  setPage
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = [{
    key: 'home',
    label: 'Home'
  }, {
    key: 'photos',
    label: 'Photos'
  }, {
    key: 'about',
    label: 'About'
  }, {
    key: 'journal',
    label: 'Journal'
  }, {
    key: 'contact',
    label: 'Contact'
  }];
  const handleNav = key => {
    setPage(key);
    setMenuOpen(false);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "site-nav__brand",
    onClick: () => handleNav('home')
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-nav__brand-main"
  }, "富山風景写真"), /*#__PURE__*/React.createElement("span", {
    className: "site-nav__brand-sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-accent"
  }, "Toyama"), " landscape photography | ", /*#__PURE__*/React.createElement("span", {
    className: "brand-accent"
  }, "Megumi Matsuda"))), /*#__PURE__*/React.createElement("button", {
    className: 'nav-hamburger' + (menuOpen ? ' is-open' : ''),
    onClick: () => setMenuOpen(o => !o),
    "aria-label": "メニュー"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("ul", {
    className: 'site-nav__links' + (menuOpen ? ' is-open' : '')
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.key
  }, /*#__PURE__*/React.createElement("button", {
    className: page === l.key ? 'is-active' : '',
    onClick: () => handleNav(l.key)
  }, l.label)))));
}
function SiteFooter({
  setPage
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer-brand"
  }, /*#__PURE__*/React.createElement("p", {
    className: "site-footer-brand__main"
  }, "富山風景写真"), /*#__PURE__*/React.createElement("p", {
    className: "site-footer-brand__sub"
  }, "Toyama Landscape photography | Megumi Matsuda")), /*#__PURE__*/React.createElement("nav", {
    className: "site-footer-nav"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage && setPage('home')
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage && setPage('photos')
  }, "Photos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage && setPage('about')
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage && setPage('journal')
  }, "Journal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage && setPage('contact')
  }, "Contact")))))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("p", null, "© Megumi Matsuda. All Rights Reserved.\u3000Privacy Policy ／ Terms of Use"))));
}
// ── Home Page ────────────────────────────────────────────────────

const FEATURED = ["DSC_5364.jpg", "DSC_5078.jpg", "_BDS2087.jpg", "Z62_9904.jpg", "_BDS1987.jpg", "BDS_2500.JPG"];
const NOTE_POSTS = [{
  tag: "撮影記",
  title: "舟川べりの桜並木 — 朝日町の春",
  excerpt: "富山県朝日町を流れる舟川沿いの桜並木。チューリップとのコラボレーションが美しい春の風景。",
  date: "2024.04"
}, {
  tag: "撮影記",
  title: "室堂平の雪景色 — 立山の春",
  excerpt: "残雪の立山・室堂平。雪の大谷の迫力ある景色と、みくりが池に映る立山連峰。",
  date: "2024.05"
}, {
  tag: "撮影記",
  title: "雨晴海岸から望む立山連峰",
  excerpt: "冬晴れの日、雨晴海岸から3000m級の立山連峰を望む。海越しの絶景は富山ならでは。",
  date: "2024.01"
}];
const HERO_SLIDES = ['DSC_5364.jpg', 'Z62_9898.jpg', '_BDS1874.JPG', '_BDS1987.jpg', 'DSC_2603.jpg'];
function HomePage({
  setPage
}) {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setSlide(i => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, HERO_SLIDES.map((f, i) => /*#__PURE__*/React.createElement("img", {
    key: f,
    className: 'hero__img hero__slide' + (i === slide ? ' is-active' : ''),
    src: 'photos/thumbs/' + encodeURIComponent(f),
    alt: "富山の風景",
    loading: i === 0 ? 'eager' : 'lazy'
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__dots"
  }, HERO_SLIDES.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: 'hero__dot' + (i === slide ? ' is-active' : ''),
    onClick: () => setSlide(i)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "home-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section__text"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-section__title"
  }, "海と山に囲まれた富山"), /*#__PURE__*/React.createElement("p", {
    className: "home-section__body"
  }, "日本海に面し、3,000m級の立山連峰を背に持つ富山県。", /*#__PURE__*/React.createElement("br", null), "海と山、ふたつの自然が県内に共存する、恵まれた環境にあります。", /*#__PURE__*/React.createElement("br", null), "海の幸、山の幸、そして雪解け水が育む実り。", /*#__PURE__*/React.createElement("br", null), "豊かな自然とともにある暮らしが、ここにはあります。", /*#__PURE__*/React.createElement("br", null), "そこで生まれた風景を、レンズを通してお届けします。"), /*#__PURE__*/React.createElement("button", {
    className: "btn-square",
    onClick: () => setPage('photos')
  }, "ギャラリーを見る →")), /*#__PURE__*/React.createElement("div", {
    className: "home-section__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: 'photos/thumbs/' + encodeURIComponent('DSC_5364.jpg'),
    alt: "富山の風景",
    loading: "lazy"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "home-section home-section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: 'photos/thumbs/' + encodeURIComponent('DSC_2015.jpg'),
    alt: "写真家について",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "home-section__text"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "home-section__title"
  }, "写真家について"), /*#__PURE__*/React.createElement("p", {
    className: "home-section__body"
  }, "生まれ育った富山を離れて気づいた、", /*#__PURE__*/React.createElement("br", null), "この土地の風景の豊かさ。", /*#__PURE__*/React.createElement("br", null), "日常の中に溶け込んでいた海と山の美しさが、", /*#__PURE__*/React.createElement("br", null), "離れることで、はじめて見えてきました。", /*#__PURE__*/React.createElement("br", null), "その気づきをカメラに収め、伝え続けています。"), /*#__PURE__*/React.createElement("button", {
    className: "btn-square",
    onClick: () => setPage('about')
  }, "詳しく見る →"))))), /*#__PURE__*/React.createElement("section", {
    className: "contact-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("h2", null, "Contact"), /*#__PURE__*/React.createElement("p", null, "撮影依頼・作品購入・メディア掲載など", /*#__PURE__*/React.createElement("br", null), "お気軽にお問い合わせください。"), /*#__PURE__*/React.createElement("button", {
    className: "btn-outline",
    onClick: () => setPage('contact')
  }, "お問い合わせ"))), /*#__PURE__*/React.createElement(SiteFooter, {
    setPage: setPage
  }));
}
// ── About Page ───────────────────────────────────────────────────

function AboutPage({
  setPage
}) {
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter",
    "data-screen-label": "ABOUT"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head",
    style: {
      paddingBottom: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: '11px',
      letterSpacing: '.32em',
      color: 'rgba(255,255,255,.35)',
      margin: '0 0 18px',
      textTransform: 'uppercase'
    }
  }, "Photographer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontWeight: 300,
      fontSize: 'clamp(24px,2.8vw,34px)',
      letterSpacing: '.16em',
      color: '#fff',
      margin: '0 0 20px',
      textTransform: 'uppercase'
    }
  }, "About"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '1px',
      background: 'rgba(255,255,255,.25)',
      marginBottom: '0',
      marginInline: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "about-photo",
    src: 'photos/' + encodeURIComponent('DSC_2015.jpg'),
    alt: "松田恵美"
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("h2", null, "松田 恵美"), /*#__PURE__*/React.createElement("p", null, "東京を拠点に活動するフォトグラファー。 プロフォトグラファー歴約16年。"), /*#__PURE__*/React.createElement("p", null, "四季折々の富山の風景を中心に、立山連峰、海岸線、 里山、町並みなど富山の多彩な表情を撮り続けています。"), /*#__PURE__*/React.createElement("p", null, "春の桜並木、夏の緑鮮やかな田園、秋の紅葉、 そして冬の雪景色と立山連峰—— 富山の美しさを世界に伝えることをテーマに活動しています。"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      color: 'rgba(255,255,255,.4)',
      textTransform: 'uppercase'
    }
  }, "活動拠点"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Shippori Mincho",serif',
      fontSize: 15,
      letterSpacing: '.1em'
    }
  }, "東京・富山")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderTop: '1px solid rgba(255,255,255,.1)',
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      color: 'rgba(255,255,255,.4)',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Other Activities"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://hitoandhito.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Shippori Mincho",serif',
      fontSize: 16,
      letterSpacing: '.1em',
      color: '#fff'
    }
  }, "いち日写真館"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: 11,
      letterSpacing: '.12em',
      color: 'var(--accent)'
    }
  }, "hitoandhito.com")), /*#__PURE__*/React.createElement("a", {
    href: "https://biz.hitoandhito.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Shippori Mincho",serif',
      fontSize: 16,
      letterSpacing: '.1em',
      color: '#fff'
    }
  }, "ビジネスフォトのhito&hito"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: 11,
      letterSpacing: '.12em',
      color: 'var(--accent)'
    }
  }, "biz.hitoandhito.com"))))))), /*#__PURE__*/React.createElement(SiteFooter, {
    setPage: setPage
  }));
}
// ──────────────────────────────────────────────────────────────────
// PHOTOS / ABOUT / NOTE / CONTACT
// ──────────────────────────────────────────────────────────────────

/* ─── PHOTOS ───────────────────────────────────────────────────── */
const ALL_PHOTOS = [{
  file: "ADS1065.jpg",
  season: "秋",
  location: "田園",
  detail: "富山県氷見市"
}, {
  file: "ADS_0543.jpg",
  season: "夏",
  location: "稲葉山の風車",
  detail: "富山県氷見市"
}, {
  file: "ADS_0565.jpg",
  season: "秋",
  location: "宇奈月温泉駅",
  detail: "富山県黒部市"
}, {
  file: "ADS_0993_富山市神通峡片路峡.JPG",
  season: "秋",
  location: "神通峡片路峡",
  detail: "富山県富山市"
}, {
  file: "ADS_1596_161202-03.jpg",
  season: "冬",
  location: "立山連峰",
  detail: "富山県富山市"
}, {
  file: "BDS_2462.jpg",
  season: "夏",
  location: "新湊の内川",
  detail: "富山県射水市"
}, {
  file: "BDS_2500.JPG",
  season: "冬",
  location: "雨晴海岸",
  detail: "富山県高岡市"
}, {
  file: "DSC_0504.jpg",
  season: "春",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "DSC_1129.jpg",
  season: "秋",
  location: "八尾の町並み",
  detail: "富山県富山市"
}, {
  file: "DSC_2603.jpg",
  season: "冬",
  location: "雪山",
  detail: "富山県富山市"
}, {
  file: "DSC_2737.jpg",
  season: "春",
  location: "立山連峰",
  detail: "富山県富山市"
}, {
  file: "DSC_2903.jpg",
  season: "春",
  location: "白鳥と立山連峰",
  detail: "富山県富山市"
}, {
  file: "DSC_2934.jpg",
  season: "冬",
  location: "立山",
  detail: "富山県富山市"
}, {
  file: "DSC_4267.jpg",
  season: "夏",
  location: "海王丸パーク",
  detail: "富山県射水市"
}, {
  file: "DSC_4298 2.jpg",
  season: "春",
  location: "雨晴海岸",
  detail: "富山県高岡市"
}, {
  file: "DSC_4435.jpg",
  season: "春",
  location: "富山駅と路面電車",
  detail: "富山県富山市"
}, {
  file: "DSC_4954.jpg",
  season: "春",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "DSC_5024.jpg",
  season: "春",
  location: "室堂平",
  detail: "富山県立山町"
}, {
  file: "DSC_5078.jpg",
  season: "春",
  location: "雪の大谷",
  detail: "富山県立山町"
}, {
  file: "DSC_5225.jpg",
  season: "春",
  location: "みくりが池",
  detail: "富山県立山町"
}, {
  file: "MSC_1502.jpg",
  season: "冬",
  location: "富山空港",
  detail: "富山県富山市"
}, {
  file: "MSC_2052.jpg",
  season: "冬",
  location: "電車（高山線）",
  detail: "富山県富山市"
}, {
  file: "Z62_8807.jpg",
  season: "夏",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "Z62_9348.jpg",
  season: "夏",
  location: "富山市街",
  detail: "富山県富山市"
}, {
  file: "Z62_9443.jpg",
  season: "夏",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "Z62_9462.jpg",
  season: "夏",
  location: "ひまわり畑",
  detail: "富山県富山市"
}, {
  file: "Z62_9898.jpg",
  season: "夏",
  location: "蓮池",
  detail: "富山県富山市"
}, {
  file: "Z62_9904.jpg",
  season: "夏",
  location: "神通川と立山連峰",
  detail: "富山県富山市"
}, {
  file: "_ADS0003_富山市夏の立山連邦.jpg",
  season: "夏",
  location: "立山連峰",
  detail: "富山県富山市"
}, {
  file: "_ADS0517.jpg",
  season: "秋",
  location: "田園と電車（高山線）",
  detail: "富山県富山市"
}, {
  file: "_ADS0702_富山市富山駅の夜.JPG",
  season: "夏",
  location: "富山駅",
  detail: "富山県富山市"
}, {
  file: "_ADS0704_富山市環水公園.jpg",
  season: "夏",
  location: "環水公園",
  detail: "富山県富山市"
}, {
  file: "_ADS0774_富山市富山駅の夜.jpg",
  season: "夏",
  location: "富山駅の路面電車",
  detail: "富山県富山市"
}, {
  file: "_ADS1044.jpg",
  season: "春",
  location: "城ヶ崎",
  detail: "富山県氷見市"
}, {
  file: "_ADS1069.jpg",
  season: "春",
  location: "阿尾漁港",
  detail: "富山県氷見市"
}, {
  file: "_ADS1304.JPG",
  season: "夏",
  location: "気多神社",
  detail: "富山県高岡市"
}, {
  file: "_ADS1496.JPG",
  season: "夏",
  location: "比美乃江大橋",
  detail: "富山県氷見市"
}, {
  file: "_ADS1534_1.JPG",
  season: "夏",
  location: "海王丸パーク",
  detail: "富山県射水市"
}, {
  file: "_ADS1799_立山町みくりが池.JPG",
  season: "夏",
  location: "みくりが池",
  detail: "富山県立山町"
}, {
  file: "_ADS2129_立山町アルペンルート..JPG",
  season: "夏",
  location: "立山アルペンルート",
  detail: "富山県立山町"
}, {
  file: "_ADS2238_立山町アルペンルート黒部ダム.JPG",
  season: "夏",
  location: "黒部ダム",
  detail: "富山県立山町"
}, {
  file: "_ADS2265_立山町アルペンルート黒部ダム.JPG",
  season: "夏",
  location: "黒部ダム",
  detail: "富山県立山町"
}, {
  file: "_ADS2876_富山市夕暮れの立山.JPG",
  season: "夏",
  location: "立山連峰",
  detail: "富山県富山市"
}, {
  file: "_BDS0152.jpg",
  season: "春",
  location: "富山駅と路面電車",
  detail: "富山県富山市"
}, {
  file: "_BDS0234_160823-31.jpg",
  season: "夏",
  location: "杉沢の沢すぎ",
  detail: "富山県朝日町"
}, {
  file: "_BDS0241_富山市護国神社の桜.jpg",
  season: "春",
  location: "護国神社",
  detail: "富山県富山市"
}, {
  file: "_BDS0260_富山市護国神社の桜.jpg",
  season: "春",
  location: "護国神社",
  detail: "富山県富山市"
}, {
  file: "_BDS0273.jpg",
  season: "春",
  location: "磯部堤の桜",
  detail: "富山県富山市"
}, {
  file: "_BDS0398_富山市富山城の桜.jpg",
  season: "春",
  location: "富山城",
  detail: "富山県富山市"
}, {
  file: "_BDS0526_富山市松川べりの桜.JPG",
  season: "春",
  location: "松川べりと路面電車",
  detail: "富山県富山市"
}, {
  file: "_BDS0545_富山市松川べりの桜.jpg",
  season: "春",
  location: "松川べり",
  detail: "富山県富山市"
}, {
  file: "_BDS0828_朝日町舟川べり.jpg",
  season: "春",
  location: "舟川べり",
  detail: "富山県朝日町"
}, {
  file: "_BDS0862.JPG",
  season: "夏",
  location: "新湊大橋",
  detail: "富山県射水市"
}, {
  file: "_BDS0872_朝日町舟川べり.jpg",
  season: "春",
  location: "舟川べり",
  detail: "富山県朝日町"
}, {
  file: "_BDS1005.JPG",
  season: "夏",
  location: "新湊の内川",
  detail: "富山県射水市"
}, {
  file: "_BDS1062.JPG",
  season: "夏",
  location: "電車（万葉線）",
  detail: "富山県射水市"
}, {
  file: "_BDS1163_富山市呉羽山公園・都市緑化植物園.jpg",
  season: "春",
  location: "呉羽山公園",
  detail: "富山県富山市"
}, {
  file: "_BDS1205.JPG",
  season: "夏",
  location: "電車（氷見線）",
  detail: "富山県氷見市"
}, {
  file: "_BDS1332_富山市富山城.JPG",
  season: "夏",
  location: "富山城",
  detail: "富山県富山市"
}, {
  file: "_BDS1422_富山県中新川郡立山町_立山駅.jpg",
  season: "秋",
  location: "立山駅",
  detail: "富山県立山町"
}, {
  file: "_BDS1448_富山市本宮砂防堰堤.jpg",
  season: "秋",
  location: "本宮砂防堰堤",
  detail: "富山県富山市"
}, {
  file: "_BDS1573.JPG",
  season: "夏",
  location: "日本海",
  detail: "富山県氷見市"
}, {
  file: "_BDS1581.jpg",
  season: "夏",
  location: "氷見漁港",
  detail: "富山県氷見市"
}, {
  file: "_BDS1587.jpg",
  season: "夏",
  location: "電車（氷見線）",
  detail: "富山県氷見市"
}, {
  file: "_BDS1594.JPG",
  season: "夏",
  location: "日本海",
  detail: "富山県氷見市"
}, {
  file: "_BDS1745.JPG",
  season: "夏",
  location: "となみ夢の平",
  detail: "富山県砺波市"
}, {
  file: "_BDS1778.JPG",
  season: "夏",
  location: "小牧ダム",
  detail: "富山県砺波市"
}, {
  file: "_BDS1874.JPG",
  season: "夏",
  location: "庄川峡遊覧船",
  detail: "富山県砺波市"
}, {
  file: "_BDS1942_1.JPG",
  season: "夏",
  location: "砺波平野",
  detail: "富山県砺波市"
}, {
  file: "_BDS1987.jpg",
  season: "秋",
  location: "黒部トロッコ電車",
  detail: "富山県黒部市"
}, {
  file: "_BDS2087.jpg",
  season: "秋",
  location: "黒部トロッコ電車",
  detail: "富山県黒部市"
}, {
  file: "_BDS2211_黒部市宇奈月町愛本橋.jpg",
  season: "秋",
  location: "愛本橋",
  detail: "富山県黒部市宇奈月町"
}, {
  file: "_BDS2447_160823-31.jpg",
  season: "夏",
  location: "電車（高山線）",
  detail: "富山県富山市"
}, {
  file: "_BDS2521_富山市富山城.JPG",
  season: "夏",
  location: "富山城",
  detail: "富山県富山市"
}, {
  file: "_BDS2824_1.JPG",
  season: "秋",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "_BDS2941_1_160823-31.jpg",
  season: "夏",
  location: "砺波平野",
  detail: "富山県砺波市"
}, {
  file: "_BDS2968.JPG",
  season: "夏",
  location: "田園",
  detail: "富山県南砺市"
}, {
  file: "_BDS2986.JPG",
  season: "夏",
  location: "相倉合掌造り",
  detail: "富山県南砺市"
}, {
  file: "_BDS3158.JPG",
  season: "夏",
  location: "桜ヶ池",
  detail: "富山県南砺市"
}, {
  file: "_BDS3168.JPG",
  season: "夏",
  location: "桜ヶ池",
  detail: "富山県南砺市"
}, {
  file: "_BDS3432_富山市富山駅ロータリー.JPG",
  season: "夏",
  location: "富山駅",
  detail: "富山県富山市"
}, {
  file: "_BDS3518_富山市市電.JPG",
  season: "夏",
  location: "富山駅と路面電車",
  detail: "富山県富山市"
}, {
  file: "_CDS4420.jpg",
  season: "春",
  location: "電車（高山線）",
  detail: "富山県富山市"
}, {
  file: "_CDS4461.jpg",
  season: "秋",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "_DSC3463.jpg",
  season: "冬",
  location: "田園",
  detail: "富山県富山市"
}, {
  file: "ADS_0775.JPG",
  season: "秋",
  location: "宇奈月ダム",
  detail: "富山県黒部市"
}, {
  file: "BDS_1137.jpg",
  season: "夏",
  location: "麦畑",
  detail: "富山県富山市"
}, {
  file: "DSC_1287.jpg",
  season: "冬",
  location: "大長谷川",
  detail: "富山県富山市"
}, {
  file: "DSC_4250.jpg",
  season: "春",
  location: "海王丸パーク",
  detail: "富山県射水市"
}, {
  file: "DSC_4254.jpg",
  season: "春",
  location: "海王丸パーク",
  detail: "富山県射水市"
}, {
  file: "DSC_5265.jpg",
  season: "春",
  location: "海王丸パーク",
  detail: "富山県射水市"
}, {
  file: "DSC_5364.jpg",
  season: "春",
  location: "新湊大橋と立山連峰",
  detail: "富山県射水市"
}, {
  file: "DSC_5365.jpg",
  season: "夏",
  location: "環水公園",
  detail: "富山県富山市"
}, {
  file: "_ADS0553.jpg",
  season: "夏",
  location: "八尾の町並み",
  detail: "富山県富山市"
}, {
  file: "_ADS2480_160823-31.JPG",
  season: "夏",
  location: "室堂平",
  detail: "富山県立山町"
}, {
  file: "_ADS2515_160823-31.JPG",
  season: "夏",
  location: "室堂平",
  detail: "富山県立山町"
}, {
  file: "_BDS1124.JPG",
  season: "秋",
  location: "本宮砂防堰堤",
  detail: "富山県富山市"
}, {
  file: "_BDS1571.jpg",
  season: "夏",
  location: "氷見漁港",
  detail: "富山県氷見市"
}, {
  file: "_BDS1833.JPG",
  season: "夏",
  location: "庄川峡遊覧船",
  detail: "富山県砺波市"
}, {
  file: "_BDS2710_1_160823-31.JPG",
  season: "夏",
  location: "岩瀬運河",
  detail: "富山県富山市"
}, {
  file: "_BDS2785_160823-31.JPG",
  season: "夏",
  location: "岩瀬浜",
  detail: "富山県富山市"
}, {
  file: "_DSC0460.jpg",
  season: "夏",
  location: "虹",
  detail: "富山県富山市"
}];
const SEASON_EN = {
  '春': 'Spring',
  '夏': 'Summer',
  '秋': 'Autumn',
  '冬': 'Winter'
};
function PhotosPage() {
  const cats = ['すべて', '春', '夏', '秋', '冬'];
  const [active, setActive] = React.useState('すべて');
  const [lightbox, setLightbox] = React.useState(null);
  const [lbIdx, setLbIdx] = React.useState(0);
  const SEASON_ORDER = {
    '春': 0,
    '夏': 1,
    '秋': 2,
    '冬': 3,
    '': 4
  };
  const isSakura = p => p.file.includes('桜') || p.location.includes('桜') || p.location.includes('舟川べり') || p.location.includes('松川べり') || p.location.includes('磯部堤');
  const filtered = (active === 'すべて' ? [...ALL_PHOTOS] : ALL_PHOTOS.filter(p => p.season === active)).sort((a, b) => {
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
      if (e.key === 'ArrowLeft') setLbIdx(i => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);
  function openLightbox(photo, idx) {
    setLightbox(photo);
    setLbIdx(idx);
  }
  const lbPhoto = lightbox ? filtered[lbIdx] : null;
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter",
    "data-screen-label": "PHOTOS"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photos-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head",
    style: {
      paddingBottom: '40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: '11px',
      letterSpacing: '.32em',
      color: 'rgba(255,255,255,.35)',
      margin: '0 0 18px',
      textTransform: 'uppercase'
    }
  }, "Toyama Landscape"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontWeight: 300,
      fontSize: 'clamp(24px,2.8vw,34px)',
      letterSpacing: '.16em',
      color: '#fff',
      margin: '0 0 20px',
      textTransform: 'uppercase'
    }
  }, "Photos"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '1px',
      background: 'rgba(255,255,255,.25)',
      marginBottom: '20px',
      marginInline: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Noto Sans JP",sans-serif',
      fontSize: '13px',
      lineHeight: 2,
      letterSpacing: '.06em',
      color: 'rgba(255,255,255,.5)',
      margin: 0
    }
  }, "四季折々の富山で出会った風景。季節で絞り込んでご覧いただけます。")), /*#__PURE__*/React.createElement("div", {
    className: "filters",
    style: {
      justifyContent: 'center'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: 'chip' + (active === c ? ' is-on' : ''),
    onClick: () => setActive(c)
  }, c, c !== 'すべて' && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 10,
      opacity: .5
    }
  }, ALL_PHOTOS.filter(p => p.season === c).length)))))), /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery"
  }, filtered.map((photo, i) => /*#__PURE__*/React.createElement("div", {
    className: "gallery__item",
    key: photo.file,
    onClick: () => openLightbox(photo, i),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery__frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: 'photos/thumbs/' + encodeURIComponent(photo.file),
    alt: photo.location || photo.season,
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("b", null, photo.location || ' '), /*#__PURE__*/React.createElement("span", null, photo.season, "  /  ", SEASON_EN[photo.season])))))), lightbox && /*#__PURE__*/React.createElement("div", {
    className: "lb-overlay",
    onClick: () => setLightbox(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.92)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: '92vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: 'photos/' + encodeURIComponent(lbPhoto.file),
    alt: "",
    draggable: false,
    onContextMenu: e => e.preventDefault(),
    style: {
      maxWidth: '88vw',
      maxHeight: '76vh',
      objectFit: 'contain',
      display: 'block',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onContextMenu: e => e.preventDefault(),
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      cursor: 'default'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      left: 28,
      zIndex: 2,
      fontFamily: '"Shippori Mincho",serif',
      fontSize: 22,
      letterSpacing: '.14em',
      color: 'rgba(255,255,255,.82)',
      pointerEvents: 'none',
      userSelect: 'none'
    }
  }, "© Megumi Matsuda")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, lbPhoto.detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Noto Sans JP",sans-serif',
      fontSize: 12,
      letterSpacing: '.14em',
      color: 'rgba(255,255,255,.5)'
    }
  }, lbPhoto.detail), lbPhoto.location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Shippori Mincho",serif',
      fontSize: 22,
      letterSpacing: '.12em',
      color: '#fff',
      lineHeight: 1.2
    }
  }, lbPhoto.location)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: 11,
      letterSpacing: '.2em',
      color: 'rgba(255,255,255,.38)',
      whiteSpace: 'nowrap',
      paddingBottom: 2
    }
  }, lbPhoto.season && SEASON_EN[lbPhoto.season] ? lbPhoto.season + '  ·  ' : '', lbIdx + 1, " / ", filtered.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setLbIdx(i => Math.max(i - 1, 0));
    },
    disabled: lbIdx === 0,
    style: {
      background: 'none',
      border: '1px solid rgba(255,255,255,.3)',
      color: '#fff',
      padding: '8px 24px',
      cursor: 'pointer',
      fontFamily: '"Inter",sans-serif',
      letterSpacing: '.12em',
      fontSize: 12,
      opacity: lbIdx === 0 ? .3 : 1
    }
  }, "←"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setLightbox(null);
    },
    style: {
      background: 'none',
      border: '1px solid rgba(255,255,255,.3)',
      color: '#fff',
      padding: '8px 24px',
      cursor: 'pointer',
      fontFamily: '"Inter",sans-serif',
      letterSpacing: '.12em',
      fontSize: 12
    }
  }, "CLOSE"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setLbIdx(i => Math.min(i + 1, filtered.length - 1));
    },
    disabled: lbIdx === filtered.length - 1,
    style: {
      background: 'none',
      border: '1px solid rgba(255,255,255,.3)',
      color: '#fff',
      padding: '8px 24px',
      cursor: 'pointer',
      fontFamily: '"Inter",sans-serif',
      letterSpacing: '.12em',
      fontSize: 12,
      opacity: lbIdx === filtered.length - 1 ? .3 : 1
    }
  }, "→")))));
}
// ── Site App ─────────────────────────────────────────────────────

function JournalPage({
  setPage
}) {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const API_URL = 'https://note.com/api/v2/creators/mm_photo/contents?kind=note&page=1';
    const PROXY = 'https://corsproxy.io/?' + encodeURIComponent(API_URL);
    fetch(PROXY).then(r => r.json()).then(json => {
      const items = (json?.data?.contents || []).slice(0, 6);
      setPosts(items.map(item => {
        const dateStr = item.publishAt || item.publish_at || '';
        let dateLabel = '';
        try {
          const d = new Date(dateStr);
          dateLabel = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
        } catch (e) {
          dateLabel = '';
        }
        return {
          title: item.name || item.title || '',
          link: item.noteUrl || item.note_url || `https://note.com/mm_photo/n/${item.key}`,
          date: dateLabel,
          thumb: item.eyecatch || item.eyecatchUrl || item.thumbnail_image_url || null,
          excerpt: (item.body || item.description || '').replace(/<[^>]+>/g, '').slice(0, 90)
        };
      }));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter",
    "data-screen-label": "JOURNAL"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head",
    style: {
      paddingBottom: '40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: '11px',
      letterSpacing: '.32em',
      color: 'rgba(255,255,255,.35)',
      margin: '0 0 18px',
      textTransform: 'uppercase'
    }
  }, "Writing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontWeight: 300,
      fontSize: 'clamp(24px,2.8vw,34px)',
      letterSpacing: '.16em',
      color: '#fff',
      margin: '0 0 20px',
      textTransform: 'uppercase'
    }
  }, "Journal"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '1px',
      background: 'rgba(255,255,255,.25)',
      marginBottom: '20px',
      marginInline: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Noto Sans JP",sans-serif',
      fontSize: '13px',
      lineHeight: 2,
      letterSpacing: '.06em',
      color: 'rgba(255,255,255,.5)',
      margin: 0
    }
  }, "写真には写らない記憶と風景を、言葉で残しています。")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://note.com/mm_photo",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-square",
    style: {
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "note を見にいく →")), posts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 80
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Shippori Mincho",serif',
      fontSize: 'clamp(16px,2vw,20px)',
      letterSpacing: '.14em',
      color: '#fff',
      marginBottom: 32
    }
  }, "最近の記事"), /*#__PURE__*/React.createElement("div", {
    className: "note-grid"
  }, posts.map((post, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: post.link,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: 'none',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, i === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 2,
      fontFamily: '"Inter",sans-serif',
      fontSize: '10px',
      letterSpacing: '.2em',
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "NEW"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: '11px',
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.4)',
      marginBottom: 10
    }
  }, post.date), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '10px',
      overflow: 'hidden',
      background: '#1a1a1a',
      aspectRatio: '16/9',
      marginBottom: 0
    }
  }, post.thumb ? /*#__PURE__*/React.createElement("img", {
    src: post.thumb,
    alt: post.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg,#5bb8c4 0%,#fff 55%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '16px 18px',
      borderRadius: '0 0 10px 10px',
      marginTop: '-2px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Noto Sans JP",sans-serif',
      fontSize: '13px',
      lineHeight: 1.7,
      letterSpacing: '.04em',
      color: '#111',
      fontWeight: 500,
      marginBottom: post.excerpt ? 8 : 0
    }
  }, post.title), post.excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Noto Sans JP",sans-serif',
      fontSize: '11px',
      lineHeight: 1.8,
      letterSpacing: '.03em',
      color: 'rgba(0,0,0,.5)',
      margin: 0
    }
  }, post.excerpt, "…"))))))), loading && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: '12px',
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.3)',
      marginBottom: 80
    }
  }, "Loading...")), /*#__PURE__*/React.createElement(SiteFooter, {
    setPage: setPage
  }));
}
function ContactPage({
  setPage
}) {
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter",
    "data-screen-label": "CONTACT"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head",
    style: {
      paddingBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontSize: '11px',
      letterSpacing: '.32em',
      color: 'rgba(255,255,255,.35)',
      margin: '0 0 18px',
      textTransform: 'uppercase'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Inter",sans-serif',
      fontWeight: 300,
      fontSize: 'clamp(24px,2.8vw,34px)',
      letterSpacing: '.16em',
      color: '#fff',
      margin: '0 0 20px',
      textTransform: 'uppercase'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '1px',
      background: 'rgba(255,255,255,.25)',
      marginBottom: '20px',
      marginInline: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Noto Sans JP",sans-serif',
      fontSize: '13px',
      lineHeight: 2,
      letterSpacing: '.06em',
      color: 'rgba(255,255,255,.5)',
      margin: 0
    }
  }, "撮影依頼・作品購入・メディア掲載などお気軽にご連絡ください。")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://docs.google.com/forms/d/e/1FAIpQLScpGfQq9eMo6-R6kCY9NvlpJhEohOwihoZ07Mn4020SKnoLSA/viewform?embedded=true",
    width: "100%",
    height: "1102",
    frameBorder: "0",
    marginHeight: "0",
    marginWidth: "0",
    style: {
      maxWidth: '640px',
      display: 'block',
      marginInline: 'auto',
      background: 'transparent',
      filter: 'invert(1) hue-rotate(180deg)'
    }
  }, "読み込んでいます…")))), /*#__PURE__*/React.createElement(SiteFooter, {
    setPage: setPage
  }));
}
function App() {
  const [page, setPage] = React.useState('home');
  const renderPage = () => {
    switch (page) {
      case 'home':
        return /*#__PURE__*/React.createElement(HomePage, {
          setPage: setPage
        });
      case 'photos':
        return /*#__PURE__*/React.createElement(PhotosPage, null);
      case 'about':
        return /*#__PURE__*/React.createElement(AboutPage, {
          setPage: setPage
        });
      case 'journal':
        return /*#__PURE__*/React.createElement(JournalPage, {
          setPage: setPage
        });
      case 'contact':
        return /*#__PURE__*/React.createElement(ContactPage, {
          setPage: setPage
        });
      default:
        return /*#__PURE__*/React.createElement(HomePage, {
          setPage: setPage
        });
    }
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    page: page,
    setPage: setPage
  }), renderPage());
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
