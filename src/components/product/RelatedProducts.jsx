import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ currentProduct, products }) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-8">
          Related Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
