// ── Shared: Nav + Footer ─────────────────────────────────────────

function SiteNav({ page, setPage }) {
  const links = [
    { key: 'home',    label: 'Home' },
    { key: 'photos',  label: 'Photos' },
    { key: 'about',   label: 'About' },
    { key: 'journal', label: 'Journal' },
    { key: 'contact', label: 'Contact' },
  ];
  return (
    <nav className="site-nav">
      <button className="site-nav__brand" onClick={() => setPage('home')}>
        Megumi Matsuda
      </button>
      <ul className="site-nav__links">
        {links.map(l => (
          <li key={l.key}>
            <button
              className={page === l.key ? 'is-active' : ''}
              onClick={() => setPage(l.key)}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="shell">
        <div className="site-footer">
          <p>© {new Date().getFullYear()} Megumi Matsuda. All rights reserved.</p>
          <p style={{fontFamily:'"Shippori Mincho",serif',letterSpacing:'.14em'}}>富山風景写真</p>
        </div>
      </div>
    </footer>
  );
}
