import "./ExploreCategories.css";

const ExploreCategories = () => {
  const categories = [
    { name: "Mobiles", icon: "📱" },
    { name: "Electronics", icon: "💻" },
    { name: "Fashion", icon: "👕" },
    { name: "Beauty", icon: "💄" },
    { name: "Home & Kitchen", icon: "🏠" },
    { name: "Grocery", icon: "🛒" },
  ];

  return (
    <section className="explore-categories">
      <h2>Explore Categories</h2>

      <p>Explore our wide range of categories and find everything you need.</p>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <div className="category-icon">{category.icon}</div>

            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategories;
