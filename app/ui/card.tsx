import { Product } from "../lib/definitions";

export default function Card({product}: {product: Product}){
    return(
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow">
          <div className="h-2/3 bg-gray-300"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="mt-2 text-gray-600 text-sm">
              {product.description}
            </p>
            <p className="mt-2 text-gray-600">
              {product.price}
            </p>
          </div>
        </div>
    )
}