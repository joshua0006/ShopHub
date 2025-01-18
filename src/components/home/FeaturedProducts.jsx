import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { products } from "../../data/products";
import { Flame } from "lucide-react";

export default function FeaturedProducts() {
  // Get 4 random products for featured section
  const featuredProducts = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((product) => ({
      ...product,
      discount: Math.floor(Math.random() * 30) + 20, // Random discount between 20-50%
    }));

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Flame className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Hot Deals</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Featured Products
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Don't miss out on these amazing deals! Limited time offers on our
            best-selling products.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} className="group">
              <Link
                to={`/products/${product.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Discount Badge */}
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    -{product.discount}%
                  </div>

                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      $
                      {(product.price * (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.price}
                    </span>
                    <span className="ml-auto text-secondary text-sm font-medium">
                      Save $
                      {(product.price * (product.discount / 100)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="px-6 pb-6">
                  <div className="bg-primary/10 text-primary rounded-lg py-2 text-center text-sm font-medium group-hover:bg-primary group-hover:text-white transition-colors">
                    View Deal
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors font-medium"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
