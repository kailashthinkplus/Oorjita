import "./Testimonials.css";

const testimonials = [
  {
    text:
      "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    name: "John McConnor",
    role: "Senior Marketing Manager",
    avatar: "/assets/oorjita/h2_testimonial-img2.jpg",
  },
  {
    text:
      "Your team were great to work with on our basement remodel! I will definitely be working with them for future projects!",
    name: "Floyd Miles",
    role: "Bond Projects Coordinator",
    avatar: "/assets/oorjita/h2_testimonial-img3.jpg",
  },
  {
    text:
      "I asked to have the area rebuilt and they were very prompt! Mud and texture came out great! Would highly recommend!",
    name: "Esther Howard",
    role: "Assistant Project Manager",
    avatar: "/assets/oorjita/h2_testimonial-img1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        {/* LEFT — SCROLL */}
        <div className="testimonials-left">
          <span className="testimonials-pill">TESTIMONIALS</span>

          <h2>
            Happy users
            <br />
            feedback
          </h2>

          <div className="testimonials-scroll">
            {testimonials.map((item, i) => (
              <div className="testimonial-item" key={i}>
                <p className="testimonial-text">“{item.text}”</p>

                <div className="testimonial-user">
                  <img src={item.avatar} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — STICKY */}
        <div className="testimonials-right">
          <div className="testimonial-image">
            <img src="/assets/oorjita/h3_img-7.jpg" alt="" />

            <div className="testimonial-rating">
              <span className="rating-score">4.9</span>

              <div className="rating-avatars">
                <img src="/assets/oorjita/h2_testimonial-img1.jpg" alt="" />
                <img src="/assets/oorjita/h2_testimonial-img2.jpg" alt="" />
                <img src="/assets/oorjita/h2_testimonial-img3.jpg" alt="" />
              </div>

              <span className="rating-text">2k+ satisfied customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
