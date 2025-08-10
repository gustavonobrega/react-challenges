import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Loader2 } from "lucide-react";

import ProductCard from "./product-card";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

const URL = "https://dummyjson.com/products?select=title,price,thumbnail";
const LIMIT = 10;

export default function LoadMoreData() {
  const [data, setData] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const skip = page * LIMIT - LIMIT;

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}&limit=${LIMIT}&skip=${skip}`);

        if (!res.ok) {
          throw new Error(`HTTP Error! status: ${res.status}`);
        }

        const { products, ...pageInfos }: ProductsResponse = await res.json();

        // handling strict mode double rendering during development
        setData((prev) =>
          prev?.products[0].id === products[0].id
            ? { ...pageInfos, products }
            : {
                ...pageInfos,
                products: [...(prev?.products ?? []), ...products],
              }
        );
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Unexpected error occurred...";
        setError(errorMsg);
        console.log(errorMsg);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [skip]);

  function handleLoadMoreProducts() {
    setSearchParams({ page: String(page + 1) });
  }

  if (!data && isLoading) {
    return (
      <div className="min-h-svh grid place-content-center">
        <Loader2 className="animate-spin text-gray-600" size={60} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-svh text-center px-6 py-12">
        <h2 className="text-3xl text-gray-600">Something went wrong, please try again.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-svh max-w-5xl space-y-6 mx-auto px-6 py-6">
      <div className="h-full grid gap-6 grid-cols-[repeat(auto-fill,_minmax(min(200px,_100%),_1fr))]">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        {data && data.total >= page * LIMIT && (
          <button
            className="py-2 px-4 bg-zinc-800 font-semibold rounded text-white enabled:cursor-pointer enabled:hover:opacity-90 disabled:"
            disabled={isLoading}
            onClick={handleLoadMoreProducts}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}
