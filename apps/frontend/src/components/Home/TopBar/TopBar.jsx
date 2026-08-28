import "./TopBar.css";

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span>Free delivery on orders above ₹799 </span>
      </div>
      <div className="top-bar-right">
        <span>Sell with us </span>

        <span>Help</span>
      </div>
    </div>
  );
};

export default Topbar;
