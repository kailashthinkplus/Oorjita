import "./Impact.css";

export default function Impact() {
  return (
    <section className="impact">
      {/* HEADER */}
      <div className="impact-header">
        <span className="impact-pill">• WHO WE ARE</span>
        <h2>
          We developed landmark <br />
          real estate projects
        </h2>
      </div>

      {/* GRID */}
      <div className="impact-grid">
        {/* CARD 01 */}
        <div className="impact-card dark">
          <span className="impact-index">01.</span>
          <hr />

          <div className="impact-body">
            <h3 className="impact-header2">What we do</h3>
            <p>
              We maintain this by ensuring transparency and professional conduct
              in every aspect.
            </p>

            <a className="impact-link cta-impact-white">Our Solutions</a>
          </div>

          <span className="impact-arrow dark">↗</span>
        </div>

        {/* CARD 02 */}
        <div className="impact-card highlight">
          <span className="impact-index">02.</span>
          <hr />

          <div className="impact-body">
            <h3>Our impact</h3>
            <p>
              We work with both investors and developers to create landmarks that
              make an impact.
            </p>

            <a className="impact-link">See Projects</a>
          </div>

          <div className="impact-image bottom-left impact-top270" />
          <span className="impact-arrow highlight">↗</span>
        </div>

        {/* CARD 03 */}
        <div className="impact-card image-bg">
          <span className="impact-index">03.</span>
          <hr />

          <div className="impact-overlay" />

          <div className="impact-body">
            <h3 className="impact-header2">Core values</h3>
            <p>
              To empower businesses with cutting-edge web solutions that enhance
              their digital presence and drive growth.
            </p>

            <a className="impact-link cta-impact-white">Discover More</a>
          </div>

          <span className="impact-arrow image">↗</span>
        </div>
      </div>
    </section>
  );
}
