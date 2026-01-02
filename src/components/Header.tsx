import "./Header.css";

export default function Header() {
  return (
    <header className="oorjita-header">
      <div className="oorjita-header-inner">
        {/* Logo */}
        <div className="oorjita-logo">
<img src="/assets/oorjita/logo.svg" alt="Spaciaz" />
        </div>

        {/* Navigation */}
        <nav className="oorjita-nav">
          <a href="#">Pages</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
        </nav>

        {/* Right actions */}
        <div className="oorjita-actions">
          <span className="call-us">
            Call us: <strong>+(084) 123 - 456 88</strong>
          </span>
          <button className="cta-btn">Get In Touch</button>
        </div>
      </div>
    </header>
  );
}
