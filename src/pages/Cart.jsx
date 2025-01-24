import { useCart } from "../context/CartContext";
import { Trash2, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, slideInLeft } from "../utils/animations";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-primary relative">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />

        <div className="container relative py-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Shopping Cart</h1>
          <div className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-blue-100 text-lg mb-8">Your cart is empty</p>
            <Link
              to="/products"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-primary relative">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />

      <div className="container relative py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-white"
        >
          Shopping Cart
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-4"
          >
            {cart.map((item) => (
              <motion.div
                key={item.id}
                variants={slideInLeft}
                className="flex gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-blue-200">${item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 bg-blue-900/50 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-blue-800/50 rounded transition text-blue-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-blue-800/50 rounded transition text-blue-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 text-red-300 hover:bg-red-500/20 rounded transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="font-semibold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 h-fit">
            <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-blue-100">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-blue-100">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-white/20 pt-2 mt-2">
                <div className="flex justify-between font-bold text-white">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link to="/thank-you">
              <button className="w-full bg-white text-blue-900 py-3 rounded-lg hover:bg-blue-50 transition">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </main>
  );
}
