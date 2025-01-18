import { motion } from "framer-motion";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const saleProducts = products.slice(0, 3).map((product) => ({
    ...product,
    discount: Math.floor(Math.random() * 30) + 20,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % saleProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
      {saleProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            x: currentIndex === index ? 0 : 100,
            pointerEvents: currentIndex === index ? "auto" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Link to={`/products/${product.id}`} className="block h-full">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
              -{product.discount}% OFF
            </div>
            <div className="h-3/5 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent absolute inset-0 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-xl mb-2">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-white">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-300 line-through">
                  ${product.price}
                </span>
              </div>
              <div className="flex items-center text-white gap-2 text-sm group">
                Shop Now{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {saleProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
