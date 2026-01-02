import "./Marquee.css";

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-viewport">
        <div className="marquee-track">
          {/* LOOP SET */}
          <div className="marquee-item">
            <img src="/assets/oorjita/h3_bg-video.jpg" />
            <span>Professional services</span>
          </div>

          <div className="marquee-item">
            <img src="/assets/oorjita/h3_img-3.jpg" />
            <span>Absolute security</span>
          </div>

          <div className="marquee-item">
            <img src="/assets/oorjita/h3_img-4.jpg" />
            <span>Humanitarian community</span>
          </div>

          {/* DUPLICATE FOR SMOOTH LOOP */}
          <div className="marquee-item">
            <img src="/assets/oorjita/h3_bg-video.jpg" />
            <span>Professional services</span>
          </div>

          <div className="marquee-item">
            <img src="/assets/oorjita/h3_img-3.jpg" />
            <span>Absolute security</span>
          </div>

          <div className="marquee-item">
            <img src="/assets/oorjita/h3_img-4.jpg" />
            <span>Humanitarian community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
