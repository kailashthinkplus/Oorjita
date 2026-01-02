import "./Blogs.css";

const blogs = [
  {
    category: "Social Media",
    title: "Biophilic Architecture: Nature in Design",
    date: "Mar 18, 2025",
    image: "/assets/oorjita/blog_5.jpg",
  },
  {
    category: "Company",
    title: "Luxury Meets Minimalism in Homes",
    date: "Mar 18, 2025",
    image: "/assets/oorjita/blog_8.jpg",
  },
  {
    category: "Tips & Tricks",
    title: "Smart Homes: The Future of Living",
    date: "Mar 18, 2025",
    image: "/assets/oorjita/blog_7.jpg",
  },
];

export default function Blogs() {
  return (
    <section className="blogs">
      {/* HEADER */}
      <div className="blogs-header">
        <div>
          <span className="blogs-pill">ES & INSIGHTS</span>
          <h2>
            Discover inspiration
            <br />
            and trends
          </h2>
        </div>

        <a className="blogs-viewall">
          View All Posts <span className="cta-icon">↗</span>
        </a>
      </div>

      {/* GRID */}
      <div className="blogs-grid">
        {blogs.map((blog, i) => (
          <article className="blog-card" key={i}>
            <div className="blog-image">
              <img src={blog.image} alt="" />
            </div>

            <div className="blog-meta">
              <span className="blog-category">{blog.category}</span>
              <span className="blog-date">{blog.date}</span>
            </div>

            <h3 className="blog-title">{blog.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
