
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Star, ChevronLeft, Plus, Minus } from "lucide-react"
import { Button } from "../components/ui/button"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "@/components/ui/Label"
import { products } from "@/layouts/data/products"
import type { Product } from "@/layouts/data/type/product"
import { useCart } from "@/layouts/cart-product/contexts/cart-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [error, setError] = useState<string>("")
  const { dispatch } = useCart()

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
  const colors = product?.colors || []

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id))
    if (!foundProduct) {
      navigate("/404")
    } else {
      setProduct(foundProduct)
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0])
      }
    }
  }, [id, navigate])

  const handleNextImage = () => {
    if (product) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (product.image1 ? 3 : 2))
    }
  }

  const handlePrevImage = () => {
    if (product) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (product.image1 ? 3 : 2)) % (product.image1 ? 3 : 2))
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size")
      return
    }
    if (colors.length > 0 && !selectedColor) {
      setError("Please select a color")
      return
    }

    if (product) {
      const productWithOptions = {
        ...product,
        selectedSize,
        selectedColor,
      }
      dispatch({
        type: "ADD_ITEM",
        payload: {
          product: productWithOptions,
          quantity,
        },
      })
      navigate("/cart")
    }
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    )
  }

  const images = [product.image, product.image1].filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button onClick={handleBackClick} className="mb-4 flex items-center gap-2 opacity-10 border-current">
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 rotate-180" />
                </button>
              </>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square relative overflow-hidden rounded-lg border hover:border-primary transition-colors ${
                  index === currentImageIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < (product.rating ?? 0) ? "fill-primary" : "fill-muted stroke-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold">${product.price}</div>
            {product.originalPrice && (
              <div className="text-muted-foreground line-through">${product.originalPrice}</div>
            )}
          </div>

          {error && (
            <Alert>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            {/* Size Selection */}
            <div className="space-y-2">
              <Label htmlFor="size-selection">Size</Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <Label
                    key={size}
                    htmlFor={`size-${size}`}
                    className={`border cursor-pointer rounded-md p-2 flex items-center justify-center gap-2 transition-all duration-200 hover:border-primary ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                    {size}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {/* Color Selection */}
            {colors.length > 0 && (
              <div className="space-y-2">
                <Label htmlFor="color-selection">Color</Label>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                >
                  {colors.map((color) => (
                    <Label
                      key={color}
                      htmlFor={`color-${color}`}
                      className={`border cursor-pointer rounded-md p-2 flex items-center gap-2 transition-all duration-200 hover:border-primary ${
                        selectedColor === color
                          ? "bg-primary text-primary-foreground border-primary"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
                      <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: color.toLowerCase() }} />
                      {color}
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  className="h-10 w-10 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="h-10 w-10 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>

          {/* Product Details */}
          <div className="prose prose-sm">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <ul className="list-disc pl-4 space-y-1">
              {product.productType && <li>Type: {product.productType}</li>}
              {product.occasions && <li>Perfect for: {product.occasions.join(", ")}</li>}
              {product.giftFor && <li>Ideal gift for: {product.giftFor.join(", ")}</li>}
              {product.description && <li>{product.description}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

