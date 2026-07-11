// ── About Page ───────────────────────────────────────────────────

function AboutPage() {
  return (
    <main className="page-enter" data-screen-label="ABOUT">
      <div className="shell">
        <div className="about-wrap">
          <div>
            <img
              className="about-photo"
              src={'photos/thumbs/' + encodeURIComponent('_ADS2876_富山市夕暮れの立山.jpg')}
              alt="松田恵美"
            />
          </div>
          <div className="about-text">
            <div className="page-head" style={{paddingTop:80,paddingBottom:40}}>
              <p style={{fontFamily:'"Inter",sans-serif',fontSize:'11px',letterSpacing:'.32em',color:'rgba(255,255,255,.35)',margin:'0 0 18px',textTransform:'uppercase'}}>Photographer</p>
              <h1 style={{fontFamily:'"Inter",sans-serif',fontWeight:300,fontSize:'clamp(24px,2.8vw,34px)',letterSpacing:'.16em',color:'#fff',margin:'0 0 20px',textTransform:'uppercase'}}>About</h1>
              <div style={{width:'40px',height:'1px',background:'rgba(255,255,255,.25)',marginBottom:'32px'}} />
            </div>
            <h2>松田 恵美</h2>
            <p>
              富山を拠点に活動するフォトグラファー。
              フォトグラファー歴約16年。
            </p>
            <p>
              四季折々の富山の風景を中心に、立山連峰、海岸線、
              里山、町並みなど富山の多彩な表情を撮り続けています。
            </p>
            <p>
              春の桜並木、夏の緑鮮やかな田園、秋の紅葉、
              そして冬の雪景色と立山連峰——
              富山の美しさを世界に伝えることをテーマに活動しています。
            </p>
            <p style={{marginTop:32}}>
              <span style={{fontSize:11,letterSpacing:'.2em',color:'rgba(255,255,255,.4)',textTransform:'uppercase'}}>
                活動拠点
              </span><br />
              <span style={{fontFamily:'"Shippori Mincho",serif',fontSize:15,letterSpacing:'.1em'}}>
                東京・富山
              </span>
            </p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
