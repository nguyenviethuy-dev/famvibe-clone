"use client"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { products } from "@/layouts/data/products"
import type { Product } from "@/layouts/data/type/product"

export function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (term.length > 0) {
      const results = products.filter((product) => {
        const searchableFields = [
          product.name,
          product.productType,
          ...(product.occasions || []),
          ...(product.giftFor || []),
          ...(product.colors || []),
          product.size,
        ]

        const matchesSearch = searchableFields.some(
          (field) => field && field.toLowerCase().includes(term.toLowerCase()),
        )

        const matchesPrice = matchPriceSearch(term, product.price, product.originalPrice)
        const matchesRating = matchRatingSearch(term, product.rating)
        const matchesSalePercent = matchSalePercentSearch(term, product.salePercent)

        return matchesSearch || matchesPrice || matchesRating || matchesSalePercent
      })
      setSearchResults(results)
      setIsDropdownOpen(true)
    } else {
      setSearchResults([])
      setIsDropdownOpen(false)
    }
  }

  const matchPriceSearch = (term: string, price: number, originalPrice?: number): boolean => {
    const numericValue = Number.parseFloat(term.replace(/[^0-9.]/g, ""))
    if (isNaN(numericValue)) return false

    if (term.includes("under") || term.startsWith("$")) {
      return price <= numericValue
    } else if (term.includes("over")) {
      return price >= numericValue
    } else if (term.includes("sale") && originalPrice) {
      return price < originalPrice
    }
    return false
  }

  const matchRatingSearch = (term: string, rating?: number): boolean => {
    if (!rating) return false
    const ratingMatch = term.match(/(\d+(\.\d+)?)\s*star/)
    if (ratingMatch) {
      const searchRating = Number.parseFloat(ratingMatch[1])
      return rating >= searchRating
    }
    return false
  }

  const matchSalePercentSearch = (term: string, salePercent?: number): boolean => {
    if (!salePercent) return false
    const saleMatch = term.match(/(\d+)%\s*off/)
    if (saleMatch) {
      const searchSalePercent = Number.parseInt(saleMatch[1])
      return salePercent >= searchSalePercent
    }
    return false
  }

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`)
    setIsDropdownOpen(false)
    setSearchTerm("")
  }

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-2.5 text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {isDropdownOpen && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg max-h-96 overflow-y-auto">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="p-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="flex items-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    ${product.price}
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 ml-2">${product.originalPrice}</span>
                    )}
                  </p>
                  {product.rating && (
                    <p className="text-xs text-yellow-500">{"★".repeat(Math.round(product.rating))}</p>
                  )}
                  {product.productType && <p className="text-xs text-gray-500">{product.productType}</p>}
                  {product.salePercent && <p className="text-xs text-red-500">{product.salePercent}% off</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

