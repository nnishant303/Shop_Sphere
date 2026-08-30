import { FiCheckCircle, FiShield, FiTruck, FiRotateCcw } from "react-icons/fi";

import "./TrustFeatures.css";

const TrustFeatures = () => {
  const features = [
    {
      icon: FiCheckCircle,
      title: "Genuine Products",
      description: "Sourced directly from trusted brands",
      color: "#22a06b",
    },
    {
      icon: FiShield,
      title: "Secure Payments",
      description: "100% protected transactions",
      color: "#2878e8",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Express shipping across India",
      color: "#f28c28",
    },
    {
      icon: FiRotateCcw,
      title: "Easy Returns",
      description: "7-day hassle-free returns",
      color: "#7b61d9",
    },
  ];

  return (
    <section className="trust-features">
      <div className="trust-features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div className="trust-feature" key={feature.title}>
              <div
                className="trust-feature-icon"
                style={{ color: feature.color }}
              >
                <Icon />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustFeatures;
