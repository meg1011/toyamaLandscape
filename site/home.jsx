// ── Home Page ────────────────────────────────────────────────────

const FEATURED = [
  "_BDS0828_朝日町舟川べり.jpg",
  "DSC_5078.jpg",
  "_BDS2986.jpg",
  "Z62_9904.jpg",
  "_BDS1987.jpg",
  "BDS_2500.jpg",
];

const NOTE_POSTS = [
  {
    tag: "撮影記",
    title: "舟川べりの桜並木 — 朝日町の春",
    excerpt: "富山県朝日町を流れる舟川沿いの桜並木。チューリップとのコラボレーションが美しい春の風景。",
    date: "2024.04",
  },
  {
    tag: "撮影記",
    title: "室堂平の雪景色 — 立山の春",
    excerpt: "残雪の立山・室堂平。雪の大谷の迫力ある景色と、みくりが池に映る立山連峰。",
    date: "2024.05",
  },
  {
    tag: "撮影記",
    title: "雨晴海岸から望む立山連峰",
    excerpt: "冬晴れの日、雨晴海岸から3000m級の立山連峰を望む。海越しの絶景は富山ならでは。",
    date: "2024.01",
  },
];

function HomePage({ setPage }) {
  return (
    <main>
      {/* Hero */}
      <div className="hero">
        <img
          className="hero__img"
          src={'photos/thumbs/' + encodeURIComponent('_BDS0828_朝日町舟川べり.jpg')}
          alt="富山の風景"
          loading="eager"
        />
        <div className="hero__overlay" />
        <div className="hero__copy">
          <p className="hero__eyebrow">Toyama Landscape Photography</p>
          <h1 className="hero__title">四季の富山を<br />切り取る</h1>
          <p className="hero__subtitle">
            富山の豊かな自然と人々の暮らしを<br />
            フォトグラファー松田恵美がお届けします。
          </p>
        </div>
      </div>

      {/* Featured */}
      <section className="section" style={{background:'#0d0d0d'}}>
        <div className="shell">
          <p className="section__label">Featured Works</p>
          <h2 className="section__title">Selected Photos</h2>
          <div className="feat-grid">
            {FEATURED.map(f => (
              <div className="feat-grid__item" key={f} onClick={() => setPage('photos')}>
                <img
                  src={'photos/thumbs/' + encodeURIComponent(f)}
                  alt=""
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:40}}>
            <button className="btn-outline" onClick={() => setPage('photos')}>
              View All Photos
            </button>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="note-section">
        <div className="shell">
          <p className="section__label">Journal</p>
          <h2 className="section__title">撮影記・近況</h2>
          <div className="note-grid">
            {NOTE_POSTS.map((post, i) => (
              <div className="pinned-item" key={i}>
                <span className="tag">{post.tag}</span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <span className="pinned-item__date-out">{post.date}</span>
              </div>
            ))}
          </div>
          <div className="note-cta">
            <button className="note-cta__btn" onClick={() => setPage('journal')}>
              すべての記事を見る
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-band">
        <div className="shell">
          <h2>Contact</h2>
          <p>
            撮影依頼・作品購入・メディア掲載など<br />
            お気軽にお問い合わせください。
          </p>
          <button className="btn-outline" onClick={() => setPage('contact')}>
            お問い合わせ
          </button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
