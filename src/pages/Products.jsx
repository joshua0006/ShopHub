import ProductCard from "../components/product/ProductCard";
import { products, categories } from "../data/products";
import { useSearchParams, Link } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = decodeURIComponent(searchParams.get("category") || "");
  const categoryFilter = categories.find(
    (cat) => cat.name.toLowerCase() === urlCategory?.toLowerCase()
  )?.name;

  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-primary relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/40 to-transparent" />

      <div className="container relative py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
            {categoryFilter ? categoryFilter : "All Products"}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                const newSearchParams = new URLSearchParams();
                setSearchParams(newSearchParams);
              }}
              className={`px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
                !categoryFilter
                  ? "bg-white text-blue-900 shadow-lg shadow-blue-500/25"
                  : "bg-blue-800/30 hover:bg-blue-700/40 text-white backdrop-blur-sm border border-white/20 hover:border-white/40"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  const newSearchParams = new URLSearchParams();
                  newSearchParams.set(
                    "category",
                    encodeURIComponent(category.name.toLowerCase())
                  );
                  setSearchParams(newSearchParams);
                }}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  categoryFilter === category.name
                    ? "bg-white text-blue-900 shadow-lg shadow-blue-500/25"
                    : "bg-blue-800/30 hover:bg-blue-700/40 text-white backdrop-blur-sm border border-white/20 hover:border-white/40"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              No products found
            </h2>
            <p className="text-blue-100 mb-8">
              We couldn't find any products in this category.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </main>
  );
}
