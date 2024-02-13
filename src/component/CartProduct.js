import { RxCrossCircled } from "react-icons/rx";
import "../style/CartProduct.css";
import { useContext, useState } from "react";
import { CartCountContext, CartItemsContext } from "./Context";
const CartProduct = () => {
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [cartCount, setCartCount] = useContext(CartCountContext);
  const [qtyValue, setQtyValue] = useState([1, 2, 3]);
  const selectHandler = (item, e) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.qty = e.target.value;
          return cartItem;
        } else {
          return cartItem;
        }
      })
    );
  };
  const cartDeleteHandler = (i) => {
    setCartItems(
      cartItems.filter((item, index) => {
        if (index !== i) {
          return item;
        }
      })
    );
    setCartCount((prev) => {
      return prev - 1;
    });
  };
  return cartItems.map((item, i) => {
    return (
      <div className="cart-product">
        <img src={item.image} alt="" />
        <div className="cart-product-details">
          <h3>{item.name}</h3>

          <label>Qty:</label>
          <select
            onChange={(e) => {
              selectHandler(item, e);
            }}
            value={item.qty}
          >
            {qtyValue.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div className="cart-amount-section">
          <p>$ {item.price}</p>
          <button
            onClick={() => {
              cartDeleteHandler(i);
            }}
          >
            <RxCrossCircled />
          </button>
        </div>
      </div>
    );
  });
};

export default CartProduct;
