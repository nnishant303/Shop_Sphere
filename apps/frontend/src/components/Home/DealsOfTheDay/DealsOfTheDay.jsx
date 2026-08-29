import { FiArrowRight, FiStar } from "react-icons/fi";
import "./DealsOfTheDay.css";

const DealsOfTheDay = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      price: 1299,
      originalPrice: 2499,
      discount: "48% OFF",
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.3,
      price: 1799,
      originalPrice: 3499,
      discount: "49% OFF",
    },
    {
      id: 3,
      name: "Running Shoes",
      image:
        "https://media.istockphoto.com/id/2157281297/photo/white-sneake-on-a-gray-gradi%C3%ABnt-background-sport-concept-mens-fashion-sport-shoe-air-sneakers.jpg?s=2048x2048&w=is&k=20&c=5CirVcpOMpNNRbhGlMMOSSxp2J2F2mcpTOfXK-8ZfMo=",
      rating: 4.6,
      price: 999,
      originalPrice: 1999,
      discount: "50% OFF",
    },
    {
      id: 4,
      name: "Backpack",
      image:
        "https://images.unsplash.com/photo-1621624959365-071359461b94?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.4,
      price: 799,
      originalPrice: 1499,
      discount: "47% OFF",
    },
  ];

  return (
    <section className="deals-of-the-day">
      <div className="deals-header">
        <div>
          <h2>Deals of the Day</h2>
          <p>Grab the best deals before they're gone!</p>
        </div>

        <button type="button" className="view-all-btn">
          <span>View All</span>
          <FiArrowRight />
        </button>
      </div>

      <div className="deals-grid">
        {products.map((product) => (
          <div className="deal-card" key={product.id}>
            <div className="deal-image">
              <img src={product.image} alt={product.name} />

              <span className="discount-badge">{product.discount}</span>
            </div>

            <div className="deal-info">
              <h3>{product.name}</h3>

              <div
                className="rating"
                aria-label={`Rating ${product.rating} out of 5`}
              >
                <FiStar className="rating-icon" />
                <span>{product.rating}</span>
              </div>

              <div className="price-section">
                <span className="deal-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="original-price">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <button type="button" className="shop-deal-btn">
                <span>Shop Now</span>
                <FiArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
