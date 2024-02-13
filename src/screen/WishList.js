import WishProduct from "../component/WishProduct";
import "../style/WishList.css";
import {
  AllProductsContext,
  CartCountContext,
  CartItemsContext,
  WishListItemsContext,
} from "../component/Context";
import { useContext, useState } from "react";
const WishList = () => {
  const [wishListItems, setWishListItems] = useContext(WishListItemsContext);
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [cartCount, setCartCount] = useContext(CartCountContext);
  const [allProducts, setAllProducts] = useContext(AllProductsContext);
  const deleteFromWishlist = (index, name) => {
    setWishListItems(
      wishListItems.filter((item, i) => {
        if (index !== i) {
          return item;
        }
      })
    );
    setAllProducts(
      allProducts.map((item) => {
        if (item.name === name) {
          item.isLiked = false;
          return item;
        } else {
          return item;
        }
      })
    );
  };
  const addToCart = (item, index) => {
    setCartItems((prev) => {
      return [
        ...prev,
        {
          image: item.image,
          name: item.name,
          price: item.price,
          qty: 1,
        },
      ];
    });
    setCartCount((prev) => {
      return prev + 1;
    });
    deleteFromWishlist(index);
    setAllProducts(
      allProducts.map((product) => {
        if (product.name === item.name) {
          product.isLiked = false;
          return product;
        } else {
          return product;
        }
      })
    );
  };
  return (
    <div className="total-wishlist-section">
      <div className="wishlist-mid-section">
        <h2>My Wishlist</h2>
        {wishListItems.length > 0 ? (
          <div className="wishlist-product-section">
            {wishListItems.map((item, index) => {
              return (
                <WishProduct
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  addToCart={() => {
                    addToCart(item, index);
                  }}
                  deleteFromWishlist={() => {
                    deleteFromWishlist(index, item.name);
                  }}
                />
              );
            })}
          </div>
        ) : (
          <p>There is no item</p>
        )}
      </div>
    </div>
  );
};
export default WishList;
