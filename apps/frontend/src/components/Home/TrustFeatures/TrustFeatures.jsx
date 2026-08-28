import "./TrustFeatures.css";

const TrustFeatures = () => {
  const features = [
    {
      icon: "✓",
      title: "Genuine Products",
      description: "Sourced directly from trusted brands",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description: "100% protected transactions",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Express shipping across India",
    },
    {
      icon: "↩",
      title: "Easy Returns",
      description: "7-day hassle-free returns",
    },
  ];

  return (
    <section className="trust-features">
      <div className="trust-features-grid">
        {features.map((feature) => (
          <div className="trust-feature" key={feature.title}>
            <div className="trust-feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustFeatures;
