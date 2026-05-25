import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <img
          src="/assets/sarc-logo.png"
          alt="SARC IIT Bombay Logo"
          className="brand-logo"
        />

        <div>
          <h2>SARC Connect</h2>
          <p>IIT Bombay</p>
        </div>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/impact">Impact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;