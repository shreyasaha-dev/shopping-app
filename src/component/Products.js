import "../style/Product.css";
import { FaHeart } from "react-icons/fa";
const Product = ({
  image,
  name,
  price,
  wishHandler,
  productDetails,
  isLiked,
}) => {
  return (
    <div className="total-product">
      <div className="image" onClick={productDetails}>
        <img src={image} alt="" />
      </div>
      <div className="product-name">
        <p onClick={productDetails}>{name}</p>
        {isLiked === false ? (
          <span onClick={wishHandler}>
            <FaHeart className="heartIcon" />
          </span>
        ) : (
          <span onClick={wishHandler}>
            <FaHeart className="heartIcon" style={{ color: "red" }} />
          </span>
        )}
      </div>
      <p onClick={productDetails}>$ {price}</p>
    </div>
  );
};
export default Product;
