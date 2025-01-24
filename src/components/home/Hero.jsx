import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-center opacity-10" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="relative py-24 sm:py-32 lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <span className="text-blue-300 font-medium tracking-wide">
                  Welcome to ShopHub
                </span>
                <h1 className="text-5xl md:text-6xl font-bold mt-2 leading-tight text-white drop-shadow-lg">
                  Discover Amazing Products for Your Lifestyle
                </h1>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-xl text-blue-100 leading-relaxed drop-shadow"
              >
                Explore our curated collection of premium products. From
                cutting-edge electronics to trendy fashion, find everything you
                need in one place.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-lg font-medium group shadow-lg"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/categories"
                  className="bg-blue-800/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-blue-700/40 transition-all duration-300 flex items-center gap-2 text-lg font-medium border border-white/20 hover:border-white/40"
                >
                  Browse Categories
                </Link>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                <ShoppingBag className="w-8 h-8 text-blue-300 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Premium Quality
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    Carefully selected products that meet our high standards
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                <Truck className="w-8 h-8 text-blue-300 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Fast Delivery
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    Quick and reliable shipping to your doorstep
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-300 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Secure Shopping
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    Safe and secure payment processing
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden lg:block lg:col-span-2"
          >
            <HeroCarousel />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
