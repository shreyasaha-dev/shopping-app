import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Contact from "./screen/Contact";
import Shop from "./screen/Shop";
import Cart from "./screen/Cart";
import WishList from "./screen/WishList";
import ProductDetails from "./screen/ProductDetails";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
