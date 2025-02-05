import Image from "next/image"
import { StarIcon } from "lucide-react"

interface ProductCardProps {
  title: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  imageUrl: string
}

export default function ProductCard({ title, price, originalPrice, rating, reviews, imageUrl }: ProductCardProps) {
  return (
    <div className="rounded-lg p-4">
      {/* Image wrapper with hover effect */}
      <div className="relative overflow-hidden rounded-lg mb-4 group">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Product details - these stay static */}
      <div className="space-y-2">
        <h3 className="text-sm text-gray-700 line-clamp-2">{title}</h3>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
          <span className="ml-2 text-sm text-gray-500">({reviews})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">{price}</span>
          <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
        </div>
      </div>
    </div>
  )
}

