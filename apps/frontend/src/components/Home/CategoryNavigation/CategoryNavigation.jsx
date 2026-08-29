import "../../../../src/index.css";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <nav className="category-navigation">
      <div className="category-container">
        <a href="/" className="active">
          Home
        </a>

        <a href="/electronics">Electronics</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/fashion">Fashion</a>
        <a href="/beauty">Beauty</a>
        <a href="/home-kitchen">Home & Kitchen</a>
        <a href="/appliances">Appliances</a>
        <a href="/grocery">Grocery</a>
        <a href="/sports">Sports</a>
      </div>
    </nav>
  );
};

export default CategoryNavigation;
