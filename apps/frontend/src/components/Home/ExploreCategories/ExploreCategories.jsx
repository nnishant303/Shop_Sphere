import {
  FiSmartphone,
  FiMonitor,
  FiShoppingBag,
  FiHeart,
  FiHome,
  FiShoppingCart,
} from "react-icons/fi";

import "./ExploreCategories.css";

const ExploreCategories = () => {
  const categories = [
    {
      name: "Mobiles",
      icon: FiSmartphone,
    },
    {
      name: "Electronics",
      icon: FiMonitor,
    },
    {
      name: "Fashion",
      icon: FiShoppingBag,
    },
    {
      name: "Beauty",
      icon: FiHeart,
    },
    {
      name: "Home & Kitchen",
      icon: FiHome,
    },
    {
      name: "Grocery",
      icon: FiShoppingCart,
    },
  ];

  return (
    <section className="explore-categories">
      <h2>Explore Categories</h2>

      <p>Explore our wide range of categories and find everything you need.</p>

      <div className="category-grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div className="category-card" key={category.name}>
              <div className="category-icon">
                <Icon />
              </div>

              <h3>{category.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreCategories;
