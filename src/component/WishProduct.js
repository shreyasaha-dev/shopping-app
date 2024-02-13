import { RxCross2 } from "react-icons/rx";
import "../style/WishProduct.css";

const WishProduct = ({ name, image, price, deleteFromWishlist, addToCart }) => {
  return (
    <div className="wish-product">
      <button className="cross-icon" onClick={deleteFromWishlist}>
        <RxCross2 />
      </button>
      <img src={image} alt="" />
      <p>{name}</p>
      <h5>$ {price}</h5>
      <button className="add-cart" onClick={addToCart}>
        ADD TO CART
      </button>
    </div>
  );
};
export default WishProduct;
