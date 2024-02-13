import { IoMdSearch } from "react-icons/io";
import Product from "../component/Products";
import "../style/Shop.css";
import { useContext, useEffect, useState } from "react";
import { AllProductsContext, WishListItemsContext } from "../component/Context";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const [allProducts, setAllProducts] = useContext(AllProductsContext);
  const [wishListItems, setWishListItems] = useContext(WishListItemsContext);

  const [product, setProduct] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const wishHandler = (image, name, price, isLiked) => {
    setAllProducts(
      allProducts.map((item) => {
        if (item.name === name) {
          item.isLiked = !isLiked;
          return item;
        } else {
          return item;
        }
      })
    );
    if (isLiked === true) {
      setWishListItems(
        wishListItems.filter((item) => {
          if (item.name !== name) {
            return item;
          }
        })
      );
    } else {
      setWishListItems((prev) => {
        return [...prev, { image: image, name: name, price: price }];
      });
    }
  };
  const searchHandler = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value !== "") {
      console.log(value);
      setProduct(
        allProducts.filter((item) => {
          if (item.name.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
        })
      );
    } else {
      setProduct(allProducts);
    }
  }, [value, allProducts]);
  const productDetails = (id) => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <div className="total-shop-section">
      <div className="shop-search">
        <IoMdSearch className="search" />
        <input placeholder="Search" onChange={searchHandler} value={value} />
      </div>
      <div className="shop-product-section">
        {product.map((item) => {
          return (
            <Product
              productDetails={() => {
                productDetails(item.id);
              }}
              image={item.image}
              name={item.name}
              price={item.price}
              isLiked={item.isLiked}
              wishHandler={() => {
                wishHandler(item.image, item.name, item.price, item.isLiked);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
