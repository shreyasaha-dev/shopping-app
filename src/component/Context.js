import { createContext, useState } from "react";

const AllProductsContext = createContext();
const CartCountContext = createContext();
const WishListItemsContext = createContext();
const CartItemsContext = createContext();

const Context = ({ children }) => {
  const [allProducts, setAllProducts] = useState([
    {
      image:
        "https://i.pinimg.com/736x/4c/84/b0/4c84b0fbfdb5f1129f5a4c0b8bbf0403.jpg",
      name: "The Lamb Hoodies",
      price: 15,
      id: 0,
      description:
        "Pink Casual Collar Long Sleeve Fabric Cartoon,Letter Pullovers Embellished Slight Stretch Fall/Winter Women Clothing",
      isLiked: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/8e/d1/17/8ed11791934d57e0584b80a2f2920193.jpg",
      name: "Carolina Ladies Loose Hoodies",
      price: 12.37,
      id: 1,
      description:
        "Carolina Ladies Loose Waffle Cotton Loose Kangaroo Pocket HoodedStyle CasualFit LooseFabric CottonPattern",
      isLiked: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/39/80/21/398021d9ca8231d9d2be1b0563916f25.jpg",
      name: "Enola Color Plush Loose Trendy Coat",
      price: 21,
      id: 2,
      description: "Enola Color Plush Loose Trendy Coat casualfit box pattern",
      isLiked: false,
    },
    {
      image:
        "https://nobero.com/cdn/shop/files/mustard-yellow_798562c1-f228-44f7-82c0-0211fbcef35c.jpg?v=1694788263&width=360",
      name: "Oversized Sweatshirt",
      price: 11.2,
      id: 3,
      description:
        "Crew neck with an attached hoodAdjustable hood with drawcordA Oversized fit with long sleeves A spacious kangaroo pocket",
      isLiked: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/d6/b2/9f/d6b29f76289484b0fbef9498503c252d.jpg",
      name: "Carolinne Openwork Round Neck Knit Sweater",
      price: 33,
      id: 4,
      description:
        "Carolinne Openwork Round Neck Knit Sweater The Carolinne Openwork Round Neck Knit Sweate",
      isLiked: false,
    },
    {
      image:
        "https://www.snitch.co.in/cdn/shop/products/2_23c71d95-bd1e-46cf-a90c-c8dd474a5dcb_1800x1800.jpg?v=1606482048",
      name: "MAROON SOLID RIB-KNIT TURTLE NECK SWEATER",
      price: 15,
      id: 5,
      description:
        "Long-sleeved, turtleneck top in cotton jersey. Muscle Fit - a fit designed to showcase the body’s physique with narrow shoulders and tapered sleeves to create a flattering silhouette.",
      isLiked: false,
    },
    {
      image:
        "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/460948/item/ingoods_35_460948.jpg?width=494",
      name: "MEN'S SOUFFLE YARN LONG SLEEVE SWEATER",
      price: 48,
      id: 6,
      description:
        "Made with non-itch Souffle Yarn  Brushed for warmth and a lightweight feel Hand-washable Versatile half-zip design",
      isLiked: false,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230816/i6kd/64dcf500eebac147fcce867f/teamspirit_yellow_ribbed_zip-up_pullover.jpg",
      name: "Women's Sweaters & Cardigans",
      price: 13.44,
      id: 7,
      description: "Teamspirit Ribbed ZipUp Pullover",
      isLiked: false,
    },
    {
      image:
        "https://www.montecarlo.in/cdn/shop/products/1239146HN-1172-38_6.jpg?v=1700658714&width=1100",
      name: "High Neck Sweaters For Men",
      price: 47,
      id: 8,
      description: "Urban Tailor Multicolor Blue Aran Sweater",
      isLiked: false,
    },
  ]);
  const [wishListItems, setWishListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <AllProductsContext.Provider value={[allProducts, setAllProducts]}>
      <WishListItemsContext.Provider value={[wishListItems, setWishListItems]}>
        <CartItemsContext.Provider value={[cartItems, setCartItems]}>
          <CartCountContext.Provider value={[cartCount, setCartCount]}>
            {children}
          </CartCountContext.Provider>
        </CartItemsContext.Provider>
      </WishListItemsContext.Provider>
    </AllProductsContext.Provider>
  );
};
export default Context;
export {
  AllProductsContext,
  WishListItemsContext,
  CartItemsContext,
  CartCountContext,
};
