import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Parallax background */}
      <div className="footer-bg" />

      {/* Large ghost text */}
      <div className="footer-ghost">spaciaz</div>

      {/* CTA text */}
      <div className="footer-cta">
        <h2>Your dream<br />home awaits</h2>
        <p>
          Whether you're exploring our homes or envisioning something custom,
          we're here to bring your dream to life.
        </p>

        <button className="footer-cta-btn">
          Get Your<br />Free Quote
        </button>
      </div>

      {/* Footer card */}
      <div className="footer-card">
        <div className="footer-card-grid">
          <div className="footer-brand">
            <img
              src="/assets/oorjita/logo.svg"
              alt="Spaciaz"
              className="footer-logo"
            />
            <p>
              We are creators of transformative spaces that inspire, innovate,
              and endure.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>About Us</h4>
              <ul>
                <li>Why Choose Us</li>
                <li>Our Team</li>
                <li>Solutions</li>
                <li>Partners</li>
                <li>Core Values</li>
              </ul>
            </div>

            <div>
              <h4>Our Projects</h4>
              <ul>
                <li>News & Updates</li>
                <li>Terms & Conditions</li>
                <li>Support Center</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <a href="tel:+08412345688" className="footer-phone">
              +(084) 123 - 45688
            </a>
            <a href="mailto:spaciaz@example.com" className="footer-email">
              spaciaz@example.com
            </a>

            <div className="footer-social">
              Facebook · Instagram · Youtube · Twitter
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Spaciaz. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
