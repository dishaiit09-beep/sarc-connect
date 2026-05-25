const portfolios = [
  {
    title: "ASMP",
    tag: "Mentorship",
    text: "Manages the allocation of 300+ mentors with 500+ mentees and leads events like Nail the Prep, Shadow Program, Break the Ice, Group Mentoring and Transverse Mentoring.",
  },
  {
    title: "Events",
    tag: "Alumni Interaction",
    text: "Acts as a bridge between IIT Bombay’s alumni network and students through Alumination, Trailblazers, UPSC Talks, UG Orientation, reunions and class song.",
  },
  {
    title: "Operations",
    tag: "Execution",
    text: "Handles on-ground execution through budget planning, permissions, logistics, finances and coordination for events like Alumination, Innovation Expo and SAM.",
  },
  {
    title: "HDA",
    tag: "Hostel & Department Affairs",
    text: "Leads initiatives like PMP, Core Talks, MI/GD, ILP, Hostalgia and Exam Series to support mentorship, academics, career guidance and alumni engagement.",
  },
  {
    title: "Media & PR",
    tag: "Communication",
    text: "Manages SARC’s social media, publicity strategies, alumni interviews, Seekout and The Knowledge Tree newsletter for student and alumni outreach.",
  },
  {
    title: "Design",
    tag: "Visual Identity",
    text: "Creates branding, posters, invites, event videos, brochures, handbooks, websites, portals, hoodies and T-shirts to publicise SARC initiatives creatively.",
  },
  {
    title: "Web",
    tag: "Digital Platforms",
    text: "Builds SARC portals and websites, including platforms for ASMP, Alumination, PMP, ILP, Seekout and Yearbook.",
  },
  {
    title: "Marketing",
    tag: "Outreach & Sponsors",
    text: "Crafts campaigns, outreach strategies and sponsorship communication to increase engagement and support the scale and impact of SARC events.",
  },
];

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-media">
          <img
            src="/assets/web-image.png"
            alt="SARC Connect dashboard background"
            className="hero-background-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-left">
          <p className="eyebrow">Student Alumni Relations Cell · IIT Bombay</p>

          <h1>
            A digital bridge between
            <span> students and alumni.</span>
          </h1>

          <p>
            SARC Connect is a React-based frontend concept inspired by SARC’s
            real student-alumni ecosystem. It brings mentorship, events, media
            stories and web initiatives into one clean interactive experience.
          </p>

          <div className="hero-buttons">
            <a href="/events" className="primary-btn">
              Explore Events
            </a>

            <a href="/impact" className="secondary-btn">
              View Impact
            </a>
          </div>
        </div>

        <div className="command-centre">
          <div className="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">
            <p className="terminal-line">SARC Connect Overview</p>

            <h2>Your gateway to SARC</h2>

            <p>
              Explore portfolios, initiatives, mentorship opportunities and
              alumni-student experiences through one organized digital platform.
            </p>

            <div className="status-grid">
              <div>
                <strong>08</strong>
                <span>Portfolios</span>
              </div>

              <div>
                <strong>300+</strong>
                <span>Mentors</span>
              </div>

              <div>
                <strong>500+</strong>
                <span>Mentees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">All Portfolios</p>

          <h2>Explore the complete SARC ecosystem.</h2>

          <p>
            Each portfolio contributes to a different layer of student-alumni
            engagement — from mentorship and events to design, outreach and
            digital platforms.
          </p>
        </div>

        <div className="module-grid full-portfolio-grid">
          {portfolios.map((portfolio) => (
            <article className="module-card portfolio-card" key={portfolio.title}>
              <div className="portfolio-card-top">
                <span>{portfolio.title}</span>
                <small>{portfolio.tag}</small>
              </div>

              <p>{portfolio.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;