// App.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Navbar";
import Slider from "./Home";
import AboutUs from "./AboutUs";
import Products from "./Products";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Cart from "./Cart";
import LoginPage from "./LoginPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;

    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const navigateTo = (page) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  const handleBackToPreviousPage = () => {
    if (previousPage) {
      setCurrentPage(previousPage);
    }
  };

  const clearCart = () => {
    setCartItems([]); // Clear cart
  };

  return (
    <>
      {currentPage !== "cart" && currentPage !== "login" && (
        <MyNavbar cartCount={cartItems.length} navigateTo={navigateTo} />
      )}

      {currentPage === "home" && (
        <>
          <section id="home">
            <Slider />
          </section>
          <section id="aboutus">
            <AboutUs />
          </section>
          <section id="products">
            <Products onAddToCart={handleAddToCart} />
          </section>
          <section id="contactus">
            <ContactUs />
          </section>
          <Footer />
        </>
      )}

      {currentPage === "cart" && (
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          navigateTo={navigateTo}
          onBackToHome={handleBackToPreviousPage}
        />
      )}

      {currentPage === "login" && (
        <LoginPage
          onBackToHome={() => navigateTo("home")}
          onClearCart={clearCart} // Pass the clear cart function
        />
      )}
    </>
  );
}

export default App;































