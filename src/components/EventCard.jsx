function EventCard({ title, category, description, highlight, alumniRole }) {
  return (
    <article className="event-card">
      <div className="event-category">{category}</div>

      <h3>{title}</h3>

      <p className="event-description">{description}</p>

      <div className="event-meta">
        <div>
          <span>Student Value</span>
          <strong>{highlight}</strong>
        </div>

        <div>
          <span>Alumni Role</span>
          <strong>{alumniRole}</strong>
        </div>
      </div>
    </article>
  );
}

export default EventCard;