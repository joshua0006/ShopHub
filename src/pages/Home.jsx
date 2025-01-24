import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import { products } from "../data/products";

export default function Home() {
  // Get first 4 products as featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-50/50">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />
        <FeaturedProducts products={featuredProducts} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </div>
  );
}
