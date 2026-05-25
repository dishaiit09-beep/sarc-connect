import { useState } from "react";

const recommendations = {
  mentorship: {
    title: "ASMP + Trailblazers",
    text: "Explore mentorship-led initiatives where alumni guide students through career paths, internships and personal growth.",
  },
  exposure: {
    title: "Shadow Program + Alumni Meets",
    text: "Explore exposure-based initiatives where students understand real professional environments through alumni interaction.",
  },
  storytelling: {
    title: "Media & PR + Sips with SARC",
    text: "Explore storytelling initiatives where alumni journeys are turned into campaigns, podcasts and student-friendly narratives.",
  },
  web: {
    title: "Web Portfolio + SARC Digital Platforms",
    text: "Explore the Web portfolio where digital products, portals and websites make SARC initiatives accessible and scalable.",
  },
};

function PathFinder() {
  const [year, setYear] = useState("First Year");
  const [interest, setInterest] = useState("mentorship");

  const result = recommendations[interest];

  return (
    <section className="pathfinder">
      <div className="pathfinder-copy">
        <p className="eyebrow">Mahabonus Interactive Layer</p>

        <h2>Find your SARC path.</h2>

        <p>
          A quick matching tool that recommends a SARC direction based on a
          student’s year and interest. It uses React state to update the result
          instantly.
        </p>
      </div>

      <div className="pathfinder-panel">
        <div className="input-row">
          <label htmlFor="student-year">Year</label>

          <select
            id="student-year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
            <option>Fourth Year</option>
          </select>
        </div>

        <div className="input-row">
          <label htmlFor="student-interest">Interest</label>

          <select
            id="student-interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            <option value="mentorship">Mentorship</option>
            <option value="exposure">Career Exposure</option>
            <option value="storytelling">Storytelling / Media</option>
            <option value="web">Web / Product</option>
          </select>
        </div>

        <div className="recommendation-card">
          <span>Recommended for {year}</span>
          <h3>{result.title}</h3>
          <p>{result.text}</p>
        </div>
      </div>
    </section>
  );
}

export default PathFinder;