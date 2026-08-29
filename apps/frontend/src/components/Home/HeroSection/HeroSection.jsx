import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">✨ Exclusive Deals</span>

        <h1>
          Shop Exclusive.
          <br />
          Live Better.
        </h1>

        <p>
          Discover amazing products, great prices, and everything you need for
          your everyday life.
        </p>

        <button className="hero-button">Shop Now →</button>
      </div>
    </section>
  );
};

export default HeroSection;
