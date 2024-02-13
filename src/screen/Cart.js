import { useContext, useEffect, useState } from "react";
import CartProduct from "../component/CartProduct";
import "../style/Cart.css";
import { CartCountContext, CartItemsContext } from "../component/Context";
import toast from "react-hot-toast";
const Cart = () => {
  const [cartCount, setCartCount] = useContext(CartCountContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let count = 0;
    let qtyCount = 0;
    cartItems.forEach((item) => {
      count = count + item.price * item.qty;
      qtyCount = qtyCount + Number(item.qty);
    });
    console.log(qtyCount, count);
    setCartCount(qtyCount);
    setTotalAmount(count);
  }, [cartItems]);
  const checkOut = () => {
    setCartItems([]);
    setCartCount(0);
    toast.success("Your order has been succesfully done");
  };
  return (
    <div className="total-cart-section">
      <div className="cart-mid-section">
        <div className="cart-left-section">
          <div className="cart-heading">
            <h1>Shopping Cart</h1>
            <p>{cartCount} items</p>
          </div>
          {cartItems.length > 0 ? (
            <div className="all-cart-items">
              <CartProduct />
            </div>
          ) : (
            <p className="empty-cart">Your cart is empty!</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-right-section">
            <div className="cart-total">
              <div className="total-amount-section">
                <p>Subtotal ({cartCount} items)</p>
                <p>$ {totalAmount.toFixed(2)}</p>
              </div>
              <div className="shipping-cost-section">
                <p>Shipping Costs</p>
                <p className="charge">{totalAmount > 50 ? "Free" : "$ 50"}</p>
              </div>
            </div>
            <div className="checkout-section">
              <div className="final-amount">
                <p>Total</p>
                <h3>
                  ${" "}
                  {totalAmount > 50
                    ? totalAmount.toFixed(2)
                    : (totalAmount + 50).toFixed(2)}
                </h3>
              </div>
              <button onClick={checkOut}>CHECKOUT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
