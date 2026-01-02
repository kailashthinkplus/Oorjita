import { useEffect, useRef } from "react";
import "./StatsParallax.css";

const stats = [
  {
    value: 48,
    suffix: "+",
    label: "completed\nprojects",
  },
  {
    value: 52,
    suffix: "+",
    label: "projects in\ndevelopment",
  },
  {
    value: 2.3,
    suffix: "b+",
    label: "total projects\ncost",
  },
  {
    value: 18,
    suffix: "m+",
    label: "square feet of\nproperty",
  },
];

export default function StatsParallax() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLSpanElement;
          const end = Number(el.dataset.value);
          let current = 0;
          const step = end / 60;

          const interval = setInterval(() => {
            current += step;

            if (current >= end) {
              el.textContent = end.toString();
              clearInterval(interval);
            } else {
              el.textContent =
                end % 1 === 0
                  ? Math.floor(current).toString()
                  : current.toFixed(1);
            }
          }, 16);

          observer.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-parallax">
      <div className="stats-overlay" />

      <div className="stats-inner">
        {stats.map((item, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-dot" />
            <span className="stat-line" />

            <div className="stat-content">
              <h3>
                <span
                  data-value={item.value}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                >
                  0
                </span>
                <span className="stat-suffix">{item.suffix}</span>
              </h3>

              <p>
                {item.label.split("\n").map((t, idx) => (
                  <span key={idx}>
                    {t}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
