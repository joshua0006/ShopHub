import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { getProductById, products } from "../data/products";
import ImageCarousel from "../components/product/ImageCarousel";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Notification from "../components/ui/Notification";
import RelatedProducts from "../components/product/RelatedProducts";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showSpecs, setShowSpecs] = useState(true);

  const specifications = {
    "Product Details": [
      { label: "Brand", value: "ShopHub" },
      { label: "Model", value: product?.name },
      { label: "Category", value: product?.category },
      { label: "Condition", value: "New" },
    ],
    "Technical Specs": [
      { label: "Material", value: "Premium Quality" },
      { label: "Warranty", value: "1 Year" },
      { label: "Origin", value: "Imported" },
      { label: "SKU", value: `SH-${product?.id}` },
    ],
  };

  if (!product) {
    return (
      <div className="container py-12">
        <p className="text-center text-gray-100">Product not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-500 to-blue-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />

      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => {
            setShowNotification(false);
            setNotificationMessage("");
          }}
        />
      )}

      <div className="container relative py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-100 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition group-hover:-translate-x-1" />
          Back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="sticky top-24">
            <ImageCarousel images={product.images || [product.image]} />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-white">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-blue-300">
                    ${product.price}
                  </span>
                  <span className="text-sm text-blue-200">USD</span>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-blue-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-blue-100 border border-white/10">
                Category: {product.category}
              </div>
              <div className="mt-8 border rounded-xl overflow-hidden">
                <div className="w-full px-4 py-3 bg-gray-50">
                  <span className="font-medium text-blue-700">
                    Product Specifications
                  </span>
                </div>
                <div className="p-4 space-y-6">
                  {Object.entries(specifications).map(([title, specs]) => (
                    <div key={title}>
                      <h3 className="font-medium text-gray-100 mb-3">
                        {title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="flex items-start gap-2"
                          >
                            <Check className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                            <div>
                              <span className="block text-sm font-medium text-slate-200">
                                {spec.label}
                              </span>
                              <span className="text-sm text-gray-300">
                                {spec.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  addToCart(product);
                  setNotificationMessage(`${product.name} added to cart!`);
                  setShowNotification(true);
                }}
                className="w-full bg-white text-blue-900 py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts currentProduct={product} products={products} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </main>
  );
}
