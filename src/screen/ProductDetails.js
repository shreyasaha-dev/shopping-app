import { useParams } from "react-router-dom";
import "../style/ProductDetails.css";
import { useContext } from "react";
import {
  AllProductsContext,
  CartCountContext,
  CartItemsContext,
} from "../component/Context";
import toast from "react-hot-toast";
const ProductDetails = () => {
  const params = useParams();
  const [allProducts, setAllProducts] = useContext(AllProductsContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [cartCount, setCartCount] = useContext(CartCountContext);

  const addToCart = () => {
    // cartItems.forEach((item) => {
    //   if (item.name === allProducts[params.id].name) {
    //     alert("This product is already in your cart");
    //     return;
    //   }
    // });

    const isAlreadyExist = cartItems.some(
      (item) => item.name === allProducts[params.id].name
    );
    if (isAlreadyExist) {
      return toast.error("This product is already in your cart");
    }
    toast.success("This product is succesfully added to your cart!");
    setCartItems((prev) => {
      return [
        ...prev,
        {
          image: allProducts[params.id].image,
          name: allProducts[params.id].name,
          price: allProducts[params.id].price,
          qty: 1,
        },
      ];
    });
    setCartCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="product-details">
      <div className="details-mid-section">
        <img src={allProducts[params.id].image} alt="" />
        <div className="details-right-section">
          <div className="details-right-mid-section">
            <h3>{allProducts[params.id].name}</h3>
            <h1>$ {allProducts[params.id].price}</h1>
            <p>{allProducts[params.id].description}</p>
            <button onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
