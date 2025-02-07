
import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FilterSidebar, { type FilterState } from "@/components/fillter-sitebar/fillter-sitebar"
import { products } from "@/layouts/data/products"
import { Skeleton } from "@/components/ui/skeleton"
import type { Product } from "@/layouts/data/type/product"

const ProductPage: React.FC = () => {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState("trending")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isLoading, setIsLoading] = useState(false)
  const productsPerPage = 12

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`)
  }

  const handleFilterChange = useCallback(
    async (filters: FilterState) => {
      setIsLoading(true)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      let filtered = products

      if (filters.giftFor.length > 0) {
        filtered = filtered.filter((product) => product.giftFor?.some((gift) => filters.giftFor.includes(gift)))
      }

      if (filters.productType.length > 0) {
        filtered = filtered.filter((product) => filters.productType.includes(product.productType || ""))
      }

      if (filters.occasions.length > 0) {
        filtered = filtered.filter((product) =>
          product.occasions?.some((occasion) => filters.occasions.includes(occasion)),
        )
      }

      if (filters.colors.length > 0) {
        filtered = filtered.filter((product) => product.colors?.some((color) => filters.colors.includes(color)))
      }

      if (filters.priceRanges.length > 0) {
        filtered = filtered.filter((product) => {
          if (filters.priceRanges.includes("under25") && product.price <= 25) return true
          if (filters.priceRanges.includes("above25") && product.price > 25) return true
          return false
        })
      }

      switch (sortBy) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price)
          break
        case "price-high":
          filtered.sort((a, b) => b.price - a.price)
          break
        case "newest":
          filtered.sort((a, b) => b.id - a.id)
          break
        default:
          // trending - keep original order
          break
      }

      setFilteredProducts(filtered)
      setCurrentPage(1)
      setIsLoading(false)
    },
    [sortBy],
  )

  // Calculate product counts
  const productCounts = {
    giftFor: {} as Record<string, number>,
    productType: {} as Record<string, number>,
    occasions: {} as Record<string, number>,
    colors: {} as Record<string, number>,
    price: {
      under25: products.filter((p) => p.price <= 25).length,
      above25: products.filter((p) => p.price > 25).length,
    },
  }

  products.forEach((product) => {
    product.giftFor?.forEach((gift) => {
      productCounts.giftFor[gift] = (productCounts.giftFor[gift] || 0) + 1
    })

    if (product.productType) {
      productCounts.productType[product.productType] = (productCounts.productType[product.productType] || 0) + 1
    }

    product.occasions?.forEach((occasion) => {
      productCounts.occasions[occasion] = (productCounts.occasions[occasion] || 0) + 1
    })

    product.colors?.forEach((color) => {
      productCounts.colors[color] = (productCounts.colors[color] || 0) + 1
    })
  })

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  useEffect(() => {
    handleFilterChange({
      giftFor: [],
      productType: [],
      occasions: [],
      colors: [],
      priceRanges: [],
    })
  }, [handleFilterChange])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:hidden mb-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FilterSidebar onFilterChange={handleFilterChange} productCounts={productCounts} />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg">{filteredProducts.length} products</span>
            <div className="hidden lg:block">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {isLoading
              ? // Loading skeletons
                [...Array(productsPerPage)].map((_, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <Skeleton className="w-full aspect-square mb-4" />
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                ))
              : currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-4 group cursor-pointer hover:border-primary transition-colors"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={product.image1 || "/placeholder.svg"}
                        alt={`${product.name} hover image`}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                    {product.rating && (
                      <div className="flex items-center gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < (product.rating ?? 0) ? "fill-primary" : "fill-muted stroke-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.salePercent && <span className="text-sm text-red-500">Sale {product.salePercent}%</span>}
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                className="w-10 h-10 p-0"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

