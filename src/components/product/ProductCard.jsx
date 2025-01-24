import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const rating = Math.floor(Math.random() * 2) + 4; // Random rating between 4-5

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.id}`} className="block group relative">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Tag */}
          <div className="mb-3">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              ({Math.floor(Math.random() * 50) + 50})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.discount && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="text-xs  text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 mb-4 truncate">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleQuickAdd}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors
              flex items-center justify-center gap-2 font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-black/10 transition-all duration-300" />
    </Link>
  );
}
