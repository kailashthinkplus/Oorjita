import "./LeadershipTeam.css";

const team = [
  {
    name: "Johan Sanford",
    role: "EXECUTIVE ASSISTANT",
    image: "/assets/oorjita/team-4.jpg",
  },
  {
    name: "Floyd Miles",
    role: "DIRECTOR OF ARCHITECTURE",
    image: "/assets/oorjita/team-3.jpg",
    featured: true,
  },
  {
    name: "Leslie Alexander",
    role: "DEVELOPMENT MANAGER",
    image: "/assets/oorjita/team-2.jpg",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="leadership">
      <h2 className="leadership-title">
        Global executive
        <br />
        leadership
      </h2>

      <div className="leadership-grid">
        {team.map((member, i) => (
          <div
            key={i}
            className={`leader-card ${
              member.featured ? "is-featured" : ""
            }`}
          >
            <img src={member.image} alt={member.name} />

            <span className="leader-action">↗</span>

            <div className="leader-info">
              <span className="leader-role">{member.role}</span>
              <h3>{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
