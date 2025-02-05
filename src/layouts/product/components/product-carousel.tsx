import { useState } from "react"
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

  //nút trước và nút tiếp theo
  const nextProducts = () => {
    setStartIndex((prevIndex) => {
      // Tính toán chỉ mục mới cho sản phẩm
      const newIndex = (prevIndex + 1) % products.length; // Quay lại đầu nếu đi hết danh sách
      return newIndex;
    });
  };
  
  const previousProducts = () => {
    setStartIndex((prevIndex) => {
      // Tính toán chỉ mục mới cho sản phẩm
      const newIndex = (prevIndex - 1 + products.length) % products.length; // Quay lại cuối nếu đi qua đầu
      return newIndex;
    });
  };
  
  //hiển thị sản phẩm
  const visibleProducts = [
    ...products.slice(startIndex),
    ...products.slice(0, startIndex)
  ].slice(0, 4);
  

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Best Selling</h2>

      <div className="relative">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <div key={product.id} className="rounded-lg p-4">
              <div className="relative overflow-hidden rounded-lg mb-4 group">
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

        {/* Navigation Buttons */}
        <button
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 rounded-full p-2"
          onClick={previousProducts}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 rounded-full p-2"
          onClick={nextProducts}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

