import { useState } from "react";
import EventCard from "../components/EventCard";

const gallerySlides = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
];

const events = [
  {
    title: "SARCathon",
    category: "Competition",
    description:
      "A flagship challenge that brings students together through strategy, creativity and collaboration.",
    highlight: "Problem solving",
    alumniRole: "Judges and mentors",
  },
  {
    title: "Trailblazers",
    category: "Alumni Interaction",
    description:
      "A formal platform where students learn from alumni who have created impact in diverse fields.",
    highlight: "Career clarity",
    alumniRole: "Speakers",
  },
  {
    title: "Sips with SARC",
    category: "Podcast",
    description:
      "A conversational series that brings out the human side of alumni journeys beyond resumes.",
    highlight: "Relatable stories",
    alumniRole: "Podcast guests",
  },
  {
    title: "Shadow Program",
    category: "Exposure",
    description:
      "A real-world exposure initiative where students understand professional environments through alumni.",
    highlight: "Workplace insight",
    alumniRole: "Hosts and guides",
  },
  {
    title: "Alumination",
    category: "Flagship Fest",
    description:
      "A celebration of nostalgia, networking, belonging and long-term student-alumni engagement.",
    highlight: "Campus legacy",
    alumniRole: "Participants",
  },
  {
    title: "Nail the Prep",
    category: "Placement Support",
    description:
      "A preparation-focused initiative that helps students approach placements with direction and confidence.",
    highlight: "Interview readiness",
    alumniRole: "Mock interviewers",
  },
];

function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % gallerySlides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + gallerySlides.length) % gallerySlides.length
    );
  };

  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">SARC Initiatives</p>

        <h1>Events that turn conversations into connections.</h1>

        <p>
          Every initiative is designed to make alumni interaction more
          accessible, meaningful and memorable for students.
        </p>
      </section>

      <section className="events-reel-section premium-reel-section">
        <div className="events-reel-copy">
          <p className="eyebrow">Event Glimpse</p>

          <h2>SARC in motion.</h2>

          <p>
            From mentorship interactions to flagship events, SARC creates spaces
            where students and alumni connect beyond formal introductions.
          </p>

          <div className="reel-highlights">
            <div>
              <strong>Real</strong>
              <span>campus moments</span>
            </div>

            <div>
              <strong>Live</strong>
              <span>event energy</span>
            </div>

            <div>
              <strong>Alumni</strong>
              <span>interaction focus</span>
            </div>
          </div>
        </div>

        <div className="events-reel-frame">
          <video controls autoPlay muted loop playsInline>
            <source src="/assets/events-reel.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="events-image-carousel">
        <button
          className="events-image-arrow"
          type="button"
          onClick={previousSlide}
          aria-label="Previous event image"
        >
          ←
        </button>

        <div className="events-image-frame">
          <img src={gallerySlides[currentSlide]} alt="SARC event glimpse" />

          <div className="events-image-dots">
            {gallerySlides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                className={index === currentSlide ? "active-dot" : ""}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show event image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <button
          className="events-image-arrow"
          type="button"
          onClick={nextSlide}
          aria-label="Next event image"
        >
          →
        </button>
      </section>

      <section className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event.title}
            title={event.title}
            category={event.category}
            description={event.description}
            highlight={event.highlight}
            alumniRole={event.alumniRole}
          />
        ))}
      </section>
    </main>
  );
}

export default Events;