import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="top-bar">
        <ul className="navbar-menu">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Portfolio</li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="mobile-drawer">
          <ul className="nav-list">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
            <li className="nav-item"><a href="#">Services</a></li>
            <li className="nav-item"><a href="#">Portfolio</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
