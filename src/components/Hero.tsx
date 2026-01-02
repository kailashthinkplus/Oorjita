import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          {/* LEFT IMAGE */}
          <div className="hero-image" />

          {/* RIGHT CONTENT */}
          <div className="hero-content">
            <h1>
              A new <br />
              standard of <br />
              excellence
            </h1>

            <p>
              The largest privately held real estate investors and managers in
              the world.
            </p>

            <div className="hero-actions">
              <div className="hero-button">
                <span className="hero-button-text">View All Services</span>
                <span className="hero-button-icon">↗</span>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hero-stat-circle">40</div>
              <span className="hero-stat-divider"></span>

              <div className="hero-stat-text">
                <strong>years</strong>
                <br />
                of experiences
              </div>

              <div className="hero-watch">Watch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
