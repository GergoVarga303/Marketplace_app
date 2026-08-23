import { Product } from "../lib/definitions";
import Image from 'next/image';
export default function Card({product}: {product: Product}){
    return(
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow">
          <div className=" relative h-2/3 bg-gray-300">
          <Image src = {product.image_url} alt ="" fill sizes="(max-width: 767px) 100vw, (max-width: 1200px) calc((100vw - 3rem) / 3), 368px" className="object-cover"/>
          </div>
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