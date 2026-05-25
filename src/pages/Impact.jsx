import Carousel from "../components/Carousel";
import PathFinder from "../components/PathFinder";

const stats = [
  { number: "300+", label: "Mentors" },
  { number: "500+", label: "Mentees" },
  { number: "08", label: "Portfolios" },
];

function Impact() {
  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">Impact & Experience</p>

        <h1>Building a living bridge between students and alumni.</h1>

        <p>
          SARC’s strength lies in making alumni guidance accessible, personal
          and memorable through mentorship, events and digital platforms.
        </p>
      </section>

      <Carousel />

      <section className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <PathFinder />
    </main>
  );
}

export default Impact;