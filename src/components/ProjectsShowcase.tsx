import { useState } from "react";
import "./ProjectsShowcase.css";

const projects = [
  {
    title: "Mixed-Use Development",
    location: "New York, NY",
    image: "/assets/oorjita/project_13.jpg",
  },
  {
    title: "Greenview Apartments",
    image: "/assets/oorjita/project_12.jpg",
  },
  {
    title: "Premier Office Tower",
    image: "/assets/oorjita/project_11.jpg",
  },
  {
    title: "Urban Heights Residence",
    image: "/assets/oorjita/project_10.jpg",
  },
  {
    title: "Apartment Building",
    image: "/assets/oorjita/project_9.jpg",
  },
  {
    title: "Commercial & Residential Building",
    image: "/assets/oorjita/project_8.jpg",
  },
];

export default function ProjectsShowcase() {
  // ✅ SINGLE SOURCE OF TRUTH FOR ACTIVE CARD
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleCardClick(index: number) {
    // toggle behavior
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="projects">
      {/* HEADER */}
      <div className="projects-header">
        <div>
          <span className="projects-pill">• SELECTED PROJECTS</span>
          <h2>
            Discover luxury living
            <br />
            at an affordable price
          </h2>
        </div>

        <a className="projects-viewall">
          View All Projects <span>↗</span>
        </a>
      </div>

      {/* TRACK */}
      <div className="projects-track">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`project-card ${
              activeIndex === i ? "is-active" : ""
            }`}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => handleCardClick(i)} // ✅ MOBILE TAP SUPPORT
          >
            {/* OVERLAY */}
            <div className="project-overlay" />

            {/* TITLES */}
            <h3 className="project-title project-title--vertical">
              {project.title}
            </h3>

            <h3 className="project-title project-title--horizontal">
              {project.title}
            </h3>

            {/* DETAILS */}
            <div className="project-details">
              {project.location && (
                <span className="project-location">
                  {project.location}
                </span>
              )}

              <a className="project-cta">
                Explore Project <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
