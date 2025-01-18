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
    <main className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8">
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
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
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
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  categoryFilter === category.name
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
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
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              No products found
            </h2>
            <p className="text-gray-500 mb-8">
              We couldn't find any products in this category.
            </p>
            <Link
              to="/products"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
