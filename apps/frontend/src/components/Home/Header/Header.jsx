import "./Header.css";
import "../../../../src/index.css";
const Header = () => {
  return (
    <header>
      <div className="h-left">
        <h1>Shop Sphere</h1>
        <p>📍 Deliver to │ Mumbai 400001</p>
      </div>

      <div className="h-middle">
        Search for electronics, fashion, and more... │ 🔍
      </div>

      <div className="h-right">
        <p>Become a Seller</p>
        <span>♡ Wishlist</span>
        <span>🛒 Cart</span>
        <span>👤 Account</span>
      </div>
    </header>
  );
};

export default Header;
