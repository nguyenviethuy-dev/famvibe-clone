"use client"

import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react"

interface Product {
  id: number
  title: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  imageUrl: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Personalized Family Crossword Art - Perfect Gift",
    price: "$24.99 USD",
    originalPrice: "$39.99 USD",
    rating: 4.5,
    reviews: 184,
    imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/36046-278882-primary-mockup.jpg?v=1728092598&width=240",
  },
  {
    id: 2,
    title: "Personalized Gift For Grandson On Their Birthday",
    price: "$19.99 USD",
    originalPrice: "$29.99 USD",
    rating: 4.5,
    reviews: 131,
    imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/m6_fed0cc41-9f8d-4f0d-93c2-d79db518bfb9.jpg?v=1728023755&width=240",
  },
  {
    id: 3,
    title: "Personalized Family Crossword Art Print",
    price: "$24.99 USD",
    originalPrice: "$39.99 USD",
    rating: 4.5,
    reviews: 165,
    imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/36314-280398-primary-mockup.jpg?v=1729267484&width=240",
  },
  {
    id: 4,
    title: "Personalized Baby 1st Christmas Custom",
    price: "$12.99 USD",
    originalPrice: "$25.99 USD",
    rating: 4.5,
    reviews: 80,
    imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/36103-279064-primary-mockup.jpg?v=1728275036&width=240",
  },
  {
    id: 5,
    title: "Custom Family Name Wall Art",
    price: "$29.99 USD",
    originalPrice: "$45.99 USD",
    rating: 4.5,
    reviews: 92,
    imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37792-291470-primary-mockup.jpg?v=1738549969&width=240",
  },
  {
    id: 6,
    title: "Personalized Christmas Ornament",
    price: "$15.99 USD",
    originalPrice: "$27.99 USD",
    rating: 4.5,
    reviews: 73,
    imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37810-291452-primary-mockup.jpg?v=1737706053&width=240",
  },
]

export default function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1)
      } else if (window.innerWidth < 768) {
        setVisibleProducts(2)
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(3)
      } else {
        setVisibleProducts(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const previousProducts = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const displayedProducts = [...Array(visibleProducts)].map(
    (_, index) => products[(startIndex + index) % products.length],
  )

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Product</h2>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="w-full flex-shrink-0 rounded-lg p-4 border border-gray-200 group shadow transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-gray-700 line-clamp-2">{product.title}</h3>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 rounded-full p-2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          onClick={previousProducts}
        >
          <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <button
          className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 rounded-full p-2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          onClick={nextProducts}
        >
          <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  )
}

