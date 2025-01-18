import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/animations";
import { categories } from "../data/products";

export default function Categories() {
  return (
    <main className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Shop by Category
        </motion.h1>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={fadeInUp}>
              <Link
                to={`/products?category=${encodeURIComponent(
                  category.name.toLowerCase()
                )}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
