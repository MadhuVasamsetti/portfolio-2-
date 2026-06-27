import "../styles/timeline.css";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech (CSE)",
    description:
      "Started Computer Science Engineering and explored programming fundamentals.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Learned HTML, CSS, JavaScript and React. Built multiple frontend projects.",
  },
  {
    year: "2025",
    title: "Full Stack MERN Developer",
    description:
      "Built Hospital Management System, LMS, CMS, Weather App and Portfolio using MERN.",
  },
  {
    year: "2025",
    title: "Python & AWS",
    description:
      "Completed HackerRank Python Certification and started learning AWS Cloud.",
  },
];

function Timeline() {
  return (
    <section id="timeline" className="timeline">

      <div className="container">

        <p className="section-tag">MY JOURNEY</p>

        <h2 className="section-title">
          Learning <span>Timeline</span>
        </h2>

        <div className="timeline-wrapper">

          {timeline.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Timeline;