import type { IProduct } from ".";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="">
      <div className="mb-2 bg-zinc-100 rounded">
        <img className="w-full block object-cover" src={product.thumbnail} alt={product.title} />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">{product.title}</h3>
        <span className="font-semibold text-gray-500 text-sm">${product.price}</span>
      </div>
    </article>
  );
}
