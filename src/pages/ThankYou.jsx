import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Github,
  Linkedin,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ThankYou() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 50); // Updates every 50ms

      return () => clearInterval(interval);
    }
  }, [loading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-primary flex items-center justify-center">
        <div className="space-y-4 text-center flex flex-col items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
          />
          <p className="text-white text-lg animate-pulse">
            Processing your order...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative py-20 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="w-20 h-20 mx-auto mb-8 text-green-400"
        >
          <CheckCircle className="w-full h-full" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          This is a demo site showcasing modern web development techniques using
          React, Tailwind CSS, and Framer Motion.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="max-w-lg mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
        >
          <div className="bg-blue-900/30 p-4">
            <p className="text-blue-100 text-sm text-center mb-4">
              Estimated delivery: 3-5 business days
            </p>

            {/* Loading Progress Bar */}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.1,
                  ease: "linear",
                }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.p
              className="text-blue-200 text-xs mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Processing: {progress}%
            </motion.p>
          </div>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-6">
              Order Status
            </h2>
            <div className="flex justify-between items-start relative">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium text-sm">
                  Order Confirmed
                </p>
                <p className="text-blue-200 text-xs text-center">
                  Your order has been received
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center animate-pulse mb-2">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium text-sm">Processing</p>
                <p className="text-blue-200 text-xs text-center">
                  We're preparing your order
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-300/30 flex items-center justify-center mb-2">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium text-sm">
                  Ready for Delivery
                </p>
                <p className="text-blue-200 text-xs text-center">
                  Coming your way soon
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-lg mx-auto mb-12"
        >
          <h2 className="text-lg font-semibold text-white mb-4">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-blue-100">
            <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              React
            </div>
            <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              Tailwind CSS
            </div>
            <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              Framer Motion
            </div>
            <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              React Router
            </div>
            <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              Context API
            </div>
            <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              Canvas Confetti
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-x-4">
          <a
            href="https://www.linkedin.com/in/albert-joshua-magnase-4597b2280/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition"
          >
            <Linkedin className="w-5 h-5" />
            Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </main>
  );
}
