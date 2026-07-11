// ── Site App ─────────────────────────────────────────────────────

function JournalPage() {
  const posts = [
    { tag:"撮影記", title:"舟川べりの桜並木 — 朝日町の春", excerpt:"富山県朝日町を流れる舟川沿いの桜並木。チューリップとのコラボレーションが美しい春の風景。", date:"2024.04" },
    { tag:"撮影記", title:"室堂平の雪景色 — 立山の春", excerpt:"残雪の立山・室堂平。雪の大谷の迫力ある景色と、みくりが池に映る立山連峰。", date:"2024.05" },
    { tag:"撮影記", title:"雨晴海岸から望む立山連峰", excerpt:"冬晴れの日、雨晴海岸から3000m級の立山連峰を望む。海越しの絶景は富山ならでは。", date:"2024.01" },
    { tag:"近況", title:"黒部トロッコ電車で秋の渓谷へ", excerpt:"黒部峡谷を走るトロッコ電車。紅葉の季節、渓谷の色彩は目を見張るほどに鮮やかです。", date:"2023.10" },
    { tag:"近況", title:"砺波平野のチューリップ畑", excerpt:"砺波平野に広がるチューリップ畑。春の富山を彩る色とりどりの花々を撮影しました。", date:"2023.04" },
    { tag:"撮影記", title:"新湊の内川 — 運河の町並み", excerpt:"射水市新湊の内川沿いに並ぶ古い町並みと漁船。懐かしい風景が残る運河の街。", date:"2023.07" },
  ];

  return (
    <main className="page-enter" data-screen-label="JOURNAL">
      <div className="shell">
        <div className="page-head" style={{paddingBottom:'40px'}}>
          <p style={{fontFamily:'"Inter",sans-serif',fontSize:'11px',letterSpacing:'.32em',color:'rgba(255,255,255,.35)',margin:'0 0 18px',textTransform:'uppercase'}}>Megumi Matsuda</p>
          <h1 style={{fontFamily:'"Inter",sans-serif',fontWeight:300,fontSize:'clamp(24px,2.8vw,34px)',letterSpacing:'.16em',color:'#fff',margin:'0 0 20px',textTransform:'uppercase'}}>Journal</h1>
          <div style={{width:'40px',height:'1px',background:'rgba(255,255,255,.25)',marginBottom:'20px'}} />
          <p style={{fontFamily:'"Noto Sans JP",sans-serif',fontSize:'13px',lineHeight:2,letterSpacing:'.06em',color:'rgba(255,255,255,.5)',margin:0}}>
            撮影記や富山の風景にまつわる記事をお届けします。
          </p>
        </div>
        <div className="note-grid" style={{marginBottom:80}}>
          {posts.map((post, i) => (
            <div className="pinned-item" key={i}>
              <span className="tag">{post.tag}</span>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <span className="pinned-item__date-out">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="page-enter" data-screen-label="CONTACT">
      <div className="shell">
        <div className="page-head" style={{paddingBottom:'20px'}}>
          <p style={{fontFamily:'"Inter",sans-serif',fontSize:'11px',letterSpacing:'.32em',color:'rgba(255,255,255,.35)',margin:'0 0 18px',textTransform:'uppercase'}}>Megumi Matsuda</p>
          <h1 style={{fontFamily:'"Inter",sans-serif',fontWeight:300,fontSize:'clamp(24px,2.8vw,34px)',letterSpacing:'.16em',color:'#fff',margin:'0 0 20px',textTransform:'uppercase'}}>Contact</h1>
          <div style={{width:'40px',height:'1px',background:'rgba(255,255,255,.25)',marginBottom:'20px'}} />
          <p style={{fontFamily:'"Noto Sans JP",sans-serif',fontSize:'13px',lineHeight:2,letterSpacing:'.06em',color:'rgba(255,255,255,.5)',margin:0}}>
            撮影依頼・作品購入・メディア掲載などお気軽にご連絡ください。
          </p>
        </div>
        <div className="contact-form">
          <label>お名前</label>
          <input type="text" placeholder="山田 太郎" />
          <label>メールアドレス</label>
          <input type="email" placeholder="example@email.com" />
          <label>件名</label>
          <input type="text" placeholder="撮影依頼について" />
          <label>メッセージ</label>
          <textarea placeholder="メッセージをご記入ください。" />
          <button className="submit-btn">送信する</button>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

function App() {
  const [page, setPage] = React.useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':    return <HomePage setPage={setPage} />;
      case 'photos':  return <PhotosPage />;
      case 'about':   return <AboutPage />;
      case 'journal': return <JournalPage />;
      case 'contact': return <ContactPage />;
      default:        return <HomePage setPage={setPage} />;
    }
  };

  React.useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <>
      <SiteNav page={page} setPage={setPage} />
      {renderPage()}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
