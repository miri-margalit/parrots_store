import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import MyContext from "../Context/Context";
import Checkout from "../Pages/Checkout";

const AppRoutes = () => {

  const { parrots, setParrots, cart, setCart } = useContext(MyContext);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/products"
        element={
          <Products
            parrots={parrots}
            setParrots={setParrots}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/result" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/checkout"
        element={<Checkout cart={cart} />}
      />

      <Route path="*" element={"404 page not found"} />
    </Routes>
  );
};

export default AppRoutes;
