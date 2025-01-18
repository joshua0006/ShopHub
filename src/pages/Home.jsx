import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import { products } from "../data/products";

export default function Home() {
  // Get first 4 products as featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
    </main>
  );
}
