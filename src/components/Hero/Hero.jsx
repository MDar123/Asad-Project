// src/components/Hero.js
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="centered-content">
        <div className="hero-text">
          <p className="hero-heading">Always Follow Your Dreams</p>
          <p className="hero-subheading">
            Unleash your potential with us. Explore opportunities, learn, and
            grow every day.
          </p>
        </div>
        <div className="button-group" style={{display:"flex",justifyContent:"center"}}>
          <button className="hero-button primary-button">Register</button>
          <button className="hero-button secondary-button">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
