import "./AwardsMarquee.css";

const awards = [
  { title: "Best Residential Design", year: "2018" },
  { title: "Sustainable Design Award", year: "2020" },
  { title: "Top Commercial Design", year: "2020" },
  { title: "Property Manager of the Year", year: "2020" },
  { title: "Best Real Estate Consultant", year: "2020" },
  { title: "Residential Adviser of the Year", year: "2022" },
];

export default function AwardsMarquee() {
  return (
    <section className="awards">
      {/* HEADER */}
      <div className="awards-header">
        <span className="awards-pill">S · AWARDS</span>
        <h2>
          Recognitions
          <br />
          we got
        </h2>
        <p>
          We are a developer invested in our customers’ success and
          improving the communities we serve.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="awards-marquee">
        {/* ROW 1 → LEFT */}
        <div className="awards-row left">
          <div className="awards-track">
            {[...awards, ...awards].map((award, i) => (
              <AwardItem key={`top-${i}`} {...award} />
            ))}
          </div>
        </div>

        {/* ROW 2 → RIGHT */}
        <div className="awards-row right">
          <div className="awards-track">
            {[...awards, ...awards].map((award, i) => (
              <AwardItem key={`bottom-${i}`} {...award} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ITEM */
function AwardItem({
  title,
  year,
}: {
  title: string;
  year: string;
}) {
  return (
    <div className="award-item">
      <span className="award-icon">
        <img src="/assets/oorjita/icons/trophy.svg" alt="" />
      </span>
      <span className="award-title">{title}</span>
      <span className="award-year">{year}</span>
    </div>
  );
}
