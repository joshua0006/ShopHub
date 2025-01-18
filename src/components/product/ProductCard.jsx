import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";

export default function ProductCard({ product }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Link
        to={`/products/${product.id}`}
        className="group bg-white rounded-xl overflow-hidden block hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
      >
        <div className="aspect-square overflow-hidden bg-gray-50 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="w-full mt-4 bg-primary text-white py-2 rounded hover:bg-primary/90 transition text-center">
            View Details
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
