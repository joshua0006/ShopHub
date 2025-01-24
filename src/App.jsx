import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/utils/ScrollToTop";
import { useState } from "react";
import ThankYou from "./pages/ThankYou";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  const showAddToCartAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <CartProvider value={{ showAddToCartAlert }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
      </Router>
      {showAlert && (
        <div className="alert-container">Item added to cart successfully!</div>
      )}
    </CartProvider>
  );
}
