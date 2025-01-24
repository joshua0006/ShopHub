import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/animations";
import { categories } from "../data/products";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-primary relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />

      <div className="container relative py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Shop by Category
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're
            looking for. Each category is carefully curated to ensure the best
            shopping experience.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              className="group relative"
            >
              <Link
                to={`/products?category=${encodeURIComponent(
                  category.name.toLowerCase()
                )}`}
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-blue-900/30 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {category.name}
                      </h2>
                      <p className="text-blue-100 text-sm line-clamp-2 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-blue-300 text-sm font-medium group-hover:text-white transition-colors">
                        <span>Browse Products</span>
                        <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </main>
  );
}
