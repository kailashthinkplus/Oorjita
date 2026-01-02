import "./WhatMakesUsDifferent.css";

export default function WhatMakesUsDifferent() {
  return (
    <section className="what-different">
      <div className="what-different-container">
        {/* LEFT COLUMN — FIXED */}
        <div className="what-different-left">
          <div className="what-different-image">
            <img
              src="/assets/oorjita/h3_img-6.jpg"
              alt="What makes us different"
            />
          </div>

          <span className="what-different-pill">COMMITMENT</span>

          <h2 className="what-different-title">
            What makes us <br />
            different
          </h2>

<a className="what-different-cta">
  <span className="cta-text">Learn More</span>
  <span className="cta-icon">↗</span>
</a>

        </div>

        {/* RIGHT COLUMN — SCROLLABLE */}
        <div className="what-different-right">
          {/* ITEM 01 */}
          <div className="what-different-item">
            <div className="what-different-icon">
              <img src="/assets/oorjita/icons/thumb.svg" alt="" />
            </div>
            <h3>Corporate Responsibility</h3>
            <p>
              Our goal is zero incidents and our lost time frequency rate is
              industry leading.
            </p>
          </div>

          {/* ITEM 02 */}
          <div className="what-different-item">
            <div className="what-different-icon">
              <img src="/assets/oorjita/icons/team.svg" alt="" />
            </div>
            <h3>Experts with Team Spirit</h3>
            <p>
              We work with both investors and developers to create landmarks that
              make an impact.
            </p>
          </div>

          {/* ITEM 03 */}
          <div className="what-different-item">
            <div className="what-different-icon">
              <img src="/assets/oorjita/icons/shield.svg" alt="" />
            </div>
            <h3>Security & Compliance</h3>
            <p>
              Our multi-skilled team provides innovative, forward-thinking
              solutions.
            </p>
          </div>

          {/* ITEM 04 */}
          <div className="what-different-item">
            <div className="what-different-icon">
              <img src="/assets/oorjita/icons/diversity.svg" alt="" />
            </div>
            <h3>Diversity, Equity & Inclusion</h3>
            <p>
              We maintain this by ensuring transparency and professional conduct
              in every aspect.
            </p>
          </div>

          {/* ITEM 05 */}
          <div className="what-different-item">
            <div className="what-different-icon">
              <img src="/assets/oorjita/icons/warranty.svg" alt="" />
            </div>
            <h3>Construction and Fixture Warranty</h3>
            <p>
              Our multi-skilled team provides innovative, forward-thinking
              solutions.
            </p>
          </div>

          {/* ITEM 06 */}
          <div className="what-different-item">
            <div className="what-different-icon">
              <img src="/assets/oorjita/icons/settings.svg" alt="" />
            </div>
            <h3>Easy Customisation Process</h3>
            <p>
              We maintain this by ensuring transparency and professional conduct
              in every aspect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
