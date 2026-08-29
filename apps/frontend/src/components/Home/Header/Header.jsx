import "./Header.css";
import "../../../../src/index.css";
import {
  FiMapPin,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
const Header = () => {
  return (
    <header>
      <div className="h-left">
        <h1>Shop Sphere</h1>
        <p>
          <FiMapPin /> Deliver to │ Mumbai 400001
        </p>
      </div>

      <div className="h-middle">
        Search for electronics, fashion, and more... │ <FiSearch />
      </div>

      <div className="h-right">
        <p>Become a Seller</p>
        <span>
          <FiHeart /> Wishlist
        </span>
        <span>
          <FiShoppingCart /> Cart
        </span>
        <span>
          {" "}
          <FiUser /> Account
        </span>
      </div>
    </header>
  );
};

export default Header;
