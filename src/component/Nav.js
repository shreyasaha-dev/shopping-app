import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import "../style/Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  const cartHandler = () => {
    navigate("/cart");
  };
  const wishListHandler = () => {
    navigate("/wishlist");
  };
  return (
    <div className="total-nav-section">
      <div className="nav-left-section">
        <h2>COZA STORE</h2>
        <div className="nav-mid-section">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/shop">
            Shop
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="nav-icon-section">
        <span onClick={cartHandler}>
          <FaShoppingCart />
        </span>
        <span onClick={wishListHandler}>
          <FaRegHeart />
        </span>
      </div>
    </div>
  );
};
export default Nav;
