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
        <p className="text-center text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <main className="py-12">
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => {
            setShowNotification(false);
            setNotificationMessage("");
          }}
        />
      )}
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition group-hover:-translate-x-1" />
          Back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="sticky top-24">
            <ImageCarousel images={product.images || [product.image]} />
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500">USD</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
                Category: {product.category}
              </div>
              <div className="mt-8 border rounded-xl overflow-hidden">
                <button
                  onClick={() => setShowSpecs(!showSpecs)}
                  className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium">Product Specifications</span>
                  {showSpecs ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {showSpecs && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-6">
                        {Object.entries(specifications).map(
                          ([title, specs]) => (
                            <div key={title}>
                              <h3 className="font-medium text-gray-900 mb-3">
                                {title}
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {specs.map((spec) => (
                                  <div
                                    key={spec.label}
                                    className="flex items-start gap-2"
                                  >
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                      <span className="block text-sm font-medium">
                                        {spec.label}
                                      </span>
                                      <span className="text-sm text-gray-600">
                                        {spec.value}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => {
                  addToCart(product);
                  setNotificationMessage(`${product.name} added to cart!`);
                  setShowNotification(true);
                }}
                className="w-full bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts currentProduct={product} products={products} />
      </div>
    </main>
  );
}
