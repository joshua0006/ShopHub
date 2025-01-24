import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Notification({ message, onClose }) {
  if (!message) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Hide after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 60 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-2"
      >
        <CheckCircle className="w-5 h-5 text-green-500" />
        <p className="text-gray-700">{message}</p>
      </motion.div>
    </AnimatePresence>
  );
}
