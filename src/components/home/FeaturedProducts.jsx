import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  // Get 4 random products for featured section
  const featuredProducts = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((product) => ({
      ...product,
      discount: Math.floor(Math.random() * 30) + 20, // Random discount between 20-50%
    }));

  const handleImageError = (e) => {
    e.target.src = product.fallbackImage || FALLBACK_IMAGE;
  };

  return (
    <section className="relative py-24">
      <div className="container">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl" />

        {/* Header Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="text-blue-500 font-medium">
                  Featured Collection
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 drop-shadow-sm">
                Trending Products
              </h2>
              <p className="text-blue-600 text-lg">
                Discover our handpicked selection of premium products that are
                making waves in the market
              </p>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-xl
                text-blue-600 font-medium hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/10 hover:border-blue-500/30"
            >
              View All Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-sm">
              Stay Updated
            </h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter to receive updates about new products,
              special offers, and exclusive discounts.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                  placeholder:text-blue-200 text-white backdrop-blur-sm"
              />
              <button
                type="submit"
                className="bg-white text-blue-900 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
