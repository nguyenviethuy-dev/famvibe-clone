import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Review {
  id: number
  image: string
  name: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    image: "https://s3.evgcloud.net/xboostproductreviews/40278524065/20241128/75e5b9e1-f7b2-4579-b641-933f183102ab.jpg",
    name: "Bengfort Shelli",
    rating: 5,
    text: "Absolutely beautiful. Got it framed and hung for everyone to see. I love it !!!",
  },
  {
    id: 2,
    image: "https://s3.evgcloud.net/xboostproductreviews/40278524065/20241127/0d6aa033-a7a2-4c3e-a7cd-5d1775fa65fc.jpg",
    name: "Rios Nidya D",
    rating: 5,
    text: "This item was purchased as a Christmas gift for my daughter -in-law, son and family! Their names start with the letter 'A'. Loved...",
  },
  {
    id: 3,
    image: "https://s3.evgcloud.net/xboostproductreviews/40278524065/20241123/839a4215-23ea-4d48-8772-f9a46a3503cc.jpg",
    name: "Athorn Carolynn",
    rating: 5,
    text: "Absolutely lovely...exactly as I ordered.would definitely recommend",
  },
  {
    id: 4,
    image: "https://s3.evgcloud.net/xboostproductreviews/40278524065/20241122/e4ae1b23-3564-4f62-b55a-eb21080ab978.jpg",
    name: "Curnutte Kelly",
    rating: 5,
    text: "Paps will love this gift on Christmas Day.",
  },
  {
    id: 5,
    image: "https://s3.evgcloud.net/xboostproductreviews/40278524065/20240930/9678e95b-3b7f-470c-8e39-2f5ac556214a.jpg",
    name: "John Smith",
    rating: 5,
    text: "Perfect gift for the family!",
  },
  {
    id: 6,
    image: "https://s3.evgcloud.net/xboostproductreviews/40278524065/20240930/9678e95b-3b7f-470c-8e39-2f5ac556214a.jpg",
    name: "Jane Doe",
    rating: 5,
    text: "Beautiful craftsmanship and quick delivery!",
  },
]

export default function CustomerReviews() {
  const [startIndex, setStartIndex] = useState(0)
  const [focusedId, setFocusedId] = useState<number | null>(null)

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(reviews.length - 4, prev + 1))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Happy Customers</h2>
        <a href="#" className="text-red-600 hover:text-red-700">
          See All
        </a>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          {reviews.slice(startIndex, startIndex + 4).map((review) => (
            <div
              key={review.id}
              className="min-w-[calc(25%-1.25rem)] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setFocusedId(review.id)}
              onMouseLeave={() => setFocusedId(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={`Review by ${review.name}`}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-300",
                    focusedId === review.id && "scale-110",
                  )}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5 transition-transform duration-300",
                        focusedId === review.id && "scale-110",
                        "text-yellow-400 fill-yellow-400",
                      )}
                    />
                  ))}
                </div>
              </div>
              <div
                className={cn(
                  "p-4 transition-transform duration-300",
                  focusedId === review.id && "transform scale-105",
                )}
              >
                <h3 className="font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center",
            "hover:bg-gray-50 transition-colors duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={startIndex >= reviews.length - 4}
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center",
            "hover:bg-gray-50 transition-colors duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
