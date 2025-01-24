import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinkClasses = ({ isActive }) =>
    `transition ${
      isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 supports-[backdrop-filter]:bg-white/60">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            ShopHub
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/categories"
              className="text-gray-600 hover:text-primary transition-colors relative group"
            >
              Categories
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-primary transition-colors relative group"
            >
              Products
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-primary transition-colors hover:bg-gray-100/80 rounded-full"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
