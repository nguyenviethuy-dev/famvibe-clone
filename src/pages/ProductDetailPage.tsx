
// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { Star, ChevronLeft } from "lucide-react" // Import ChevronLeft icon
// import { Button } from "@/components/ui/button"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/Label"
// import { products } from "@/layouts/data/products"
// import type { Product } from "@/layouts/data/type/product"

// const ProductDetailPage = () => {
//   const { id } = useParams<{ id: string }>()
//   const navigate = useNavigate()
//   const [product, setProduct] = useState<Product | null>(null)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   useEffect(() => {
//     const foundProduct = products.find((p) => p.id === Number(id))
//     if (!foundProduct) {
//       navigate("/404")
//     } else {
//       setProduct(foundProduct)
//     }
//   }, [id, navigate])

//   const handleNextImage = () => {
//     if (product) {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (product.image1 ? 3 : 2))
//     }
//   }

//   const handlePrevImage = () => {
//     if (product) {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex - 1 + (product.image1 ? 3 : 2)) % (product.image1 ? 3 : 2)
//       )
//     }
//   }

//   const handleBackClick = () => {
//     navigate(-1)
//   }

//   if (!product) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="animate-pulse">
//           <div className="h-96 bg-gray-200 rounded-lg mb-4"></div>
//           <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
//           <div className="h-4 bg-gray-200 rounded w-1/4"></div>
//         </div>
//       </div>
//     )
//   }

//   const images = [product.image, product.image1].filter(Boolean) // Collect non-null images

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Button onClick={handleBackClick} className="mb-4 flex items-center gap-2 opacity-10 border-current">
//         <ChevronLeft className="w-5 h-5" />
//       </Button>
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div className="space-y-4">
//           <div className="aspect-square relative overflow-hidden rounded-lg border">
//             <img
//               src={images[currentImageIndex] || "/placeholder.svg"}
//               alt={product.name}
//               className="object-cover w-full h-full"
//             />
//             {/* Navigation Buttons */}
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white">
//               <button
//                 onClick={handlePrevImage}
//                 className="bg-black bg-opacity-50 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//             </div>
//             <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white">
//               <button
//                 onClick={handleNextImage}
//                 className="bg-black bg-opacity-50 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`aspect-square relative overflow-hidden rounded-lg border cursor-pointer ${
//                   index === currentImageIndex ? "ring-2 ring-primary" : ""
//                 }`}
//                 onClick={() => setCurrentImageIndex(index)}
//               >
//                 <img
//                   src={image || "/placeholder.svg"}
//                   alt={`${product.name} alternate view`}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold">{product.name}</h1>
//             <div className="flex items-center gap-4 mt-2">
//               <div className="flex items-center gap-0.5">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`w-5 h-5 ${
//                       i < (product.rating ?? 0) ? "fill-primary" : "fill-muted stroke-muted-foreground"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-1">
//             <div className="text-3xl font-bold">${product.price}</div>
//             {product.originalPrice && (
//               <div className="text-muted-foreground line-through">${product.originalPrice}</div>
//             )}
//           </div>

//           <div className="space-y-4">
//             {product.colors && (
//               <div className="space-y-2">
//                 <Label htmlFor="color-selection">Color</Label>
//                 <RadioGroup defaultValue={product.colors[0]} className="flex gap-2">
//                   {product.colors.map((color) => (
//                     <Label
//                       key={color}
//                       htmlFor={`color-${color}`}
//                       className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
//                     >
//                       <RadioGroupItem value={color} id={`color-${color}`} />
//                       <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }} />
//                       {color}
//                     </Label>
//                   ))}
//                 </RadioGroup>
//               </div>
//             )}

//             <Button size="lg" className="w-full">
//               Add to Cart
//             </Button>
//           </div>

//           <div className="prose prose-sm">
//             <h3>Product Details</h3>
//             <ul>
//               {product.productType && <li>Type: {product.productType}</li>}
//               {product.occasions && <li>Perfect for: {product.occasions.join(", ")}</li>}
//               {product.giftFor && <li>Ideal gift for: {product.giftFor.join(", ")}</li>}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetailPage

"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Star, ChevronLeft, Plus, Minus } from "lucide-react"
import { Button } from "../components/ui/button"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "@/components/ui/Label"
import { products } from "@/layouts/data/products"
import type { Product } from "@/layouts/data/type/product"
import { useCart } from "@/layouts/cart-product/contexts/cart-context"

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id))
    if (!foundProduct) {
      navigate("/404")
    } else {
      setProduct(foundProduct)
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
    if (product) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          product,
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
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white">
              <button onClick={handlePrevImage} className="bg-black bg-opacity-50 p-2 rounded-full">
                &lt;
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white">
              <button onClick={handleNextImage} className="bg-black bg-opacity-50 p-2 rounded-full">
                &gt;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`aspect-square relative overflow-hidden rounded-lg border cursor-pointer ${
                  index === currentImageIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} alternate view`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
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
            <div className="text-3xl font-bold">${product.price}</div>
            {product.originalPrice && (
              <div className="text-muted-foreground line-through">${product.originalPrice}</div>
            )}
          </div>

          <div className="space-y-4">
            {product.colors && (
              <div className="space-y-2">
                <Label htmlFor="color-selection">Color</Label>
                <RadioGroup defaultValue={product.colors[0]} className="flex gap-2">
                  {product.colors.map((color) => (
                    <Label
                      key={color}
                      htmlFor={`color-${color}`}
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                    >
                      <RadioGroupItem value={color} id={`color-${color}`} />
                      <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }} />
                      {color}
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Add quantity controls */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center gap-3">
                <button className="border rounded p-2" onClick={() => handleQuantityChange(-1)}>
                  <Minus className="w-4 h-4" />
                </button>
                <span>{quantity}</span>
                <button className="border rounded p-2" onClick={() => handleQuantityChange(1)}>
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>

          <div className="prose prose-sm">
            <h3>Product Details</h3>
            <ul>
              {product.productType && <li>Type: {product.productType}</li>}
              {product.occasions && <li>Perfect for: {product.occasions.join(", ")}</li>}
              {product.giftFor && <li>Ideal gift for: {product.giftFor.join(", ")}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

