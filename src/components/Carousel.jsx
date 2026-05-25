import { useState } from "react";

const slides = [
  {
    number: "01",
    title: "Mentorship that feels personal",
    text: "SARC helps students connect with alumni who can guide them through careers, internships, academics and institute life.",
  },
  {
    number: "02",
    title: "Stories beyond resumes",
    text: "Through initiatives like Sips with SARC, alumni journeys become more human, relatable and inspiring for students.",
  },
  {
    number: "03",
    title: "Events that build legacy",
    text: "From Alumination to Trailblazers, SARC creates spaces where conversations turn into long-term student-alumni bonds.",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const showNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const showPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="carousel">
      <button
        className="carousel-button"
        type="button"
        onClick={showPreviousSlide}
        aria-label="Previous impact slide"
      >
        ←
      </button>

      <div className="carousel-card">
        <span>{slide.number}</span>
        <h2>{slide.title}</h2>
        <p>{slide.text}</p>
      </div>

      <button
        className="carousel-button"
        type="button"
        onClick={showNextSlide}
        aria-label="Next impact slide"
      >
        →
      </button>
    </section>
  );
}

export default Carousel;