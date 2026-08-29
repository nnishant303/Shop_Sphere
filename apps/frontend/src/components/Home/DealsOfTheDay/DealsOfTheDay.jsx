import "./DealsOfTheDay.css";

const DealsOfTheDay = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1652383919512-52a1a7f82122?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      price: 1299,
      originalPrice: 2499,
      discount: "48% OFF",
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.3,
      price: 1799,
      originalPrice: 3499,
      discount: "49% OFF",
    },
    {
      id: 3,
      name: "Running Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

        <button className="view-all-btn">View All →</button>
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

              <div className="rating">⭐ {product.rating}</div>

              <div className="price-section">
                <span className="deal-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="original-price">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <button className="shop-deal-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
