
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useCart } from "../contexts/cart-context"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Minus, Plus, ShieldCheck } from "lucide-react"

// export default function CartPage() {
//   const { state, dispatch } = useCart()
//   const navigate = useNavigate()
//   const [timeLeft, setTimeLeft] = useState<{ [key: number]: number }>({})

//   const [hasShippingProtection, setHasShippingProtection] = useState(true)

//   useEffect(() => {
//     // Initialize quantities
//     const initialQuantities: { [key: number]: number } = {}
//     state.items.forEach((item) => {
//       initialQuantities[item.id] = 1
//     })

//     const interval = setInterval(() => {
//       const now = Date.now()
//       const newTimeLeft: { [key: number]: number } = {}

//       state.items.forEach((item) => {
//         const timeRemaining = Math.max(0, 10 * 60 - Math.floor((now - item.addedAt) / 1000))
//         newTimeLeft[item.id] = timeRemaining

//         if (timeRemaining === 0) {
//           dispatch({ type: "REMOVE_ITEM", payload: item.id })
//         }
//       })

//       setTimeLeft(newTimeLeft)
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [state.items, dispatch])

//   useEffect(() => {
//     console.log("Cart Page Mounted, Cart State:", state)
//   }, [state])

//   const updateQuantity = (itemId: number, delta: number) => {
//     const item = state.items.find((item) => item.id === itemId)
//     if (item) {
//       const newQuantity = Math.max(1, item.quantity + delta)
//       dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity: newQuantity } })
//     }
//   }

//   const calculateSubtotal = () => {
//     return state.items.reduce((sum, item) => {
//       return sum + item.price * item.quantity
//     }, 0)
//   }

//   const calculateTotal = () => {
//     let total = calculateSubtotal()
//     if (hasShippingProtection) {
//       total += 2.99
//     }
//     return total
//   }

//   if (state.items.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[600px] px-4">
//         <img
//           src="data:image/jpeg;base64,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"
//           alt="Empty cart illustration"
//           className="w-[400px] h-[400px] mb-8 opacity-40"
//         />
//         <h2 className="text-2xl font-semibold text-center text-[#DC2626] mb-8">
//           Your cart is ready for you to begin filling it with gifts :)
//         </h2>
//         <Button onClick={() => navigate(-1)}>Continue Shopping</Button>
//       </div>
//     )
//   }

//   const earliestAddedAt = Math.min(...state.items.map((item) => item.addedAt))
//   const cartTimeLeft = Math.max(0, 10 * 60 - Math.floor((Date.now() - earliestAddedAt) / 1000))
//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60)
//     const remainingSeconds = seconds % 60
//     return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {cartTimeLeft > 0 && (
//         <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
//           Your cart will expire in {formatTime(cartTimeLeft)} minutes! Checkout now before your items sell out
//         </div>
//       )}

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2 space-y-6">
//           {/* Shipping Protection */}
//           {hasShippingProtection && (
//             <Card className="p-6">
//               <div className="flex gap-4">
//                 <div className="w-[100px] h-[100px] flex items-center justify-center">
//                   <ShieldCheck className="w-16 h-16 text-green-500" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-semibold">Shipping Protection</h3>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         Size: Protect your item from damage, loss, or theft during shipping
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <div className="font-semibold">$2.99 USD</div>
//                       <div className="text-sm text-muted-foreground line-through">$3.99 USD</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3 mt-4">
//                     <Button
//                       variant="destructive"
//                       size="sm"
//                       onClick={() => setHasShippingProtection(false)}
//                       className="ml-auto"
//                     >
//                       Remove
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           )}

//           {/* Cart Items */}
//           {state.items.map((item) => (
//             <Card key={item.id} className="p-6">
//               <div className="flex gap-4">
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.name}
//                   className="w-[100px] h-[100px] rounded-lg object-cover"
//                 />
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-semibold">{item.name}</h3>
//                       {/* {item.size && <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>}
//                       {item.option && <p className="text-sm text-muted-foreground">Option: {item.option}</p>} */}
//                     </div>
//                     <div className="text-right">
//                       <div className="font-semibold">${item.price} USD</div>
//                       {item.originalPrice && (
//                         <div className="text-sm text-muted-foreground line-through">${item.originalPrice} USD</div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3 mt-4">
//                     <button className="border rounded p-2" onClick={() => updateQuantity(item.id, -1)}>
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button className="border rounded p-2" onClick={() => updateQuantity(item.id, 1)}>
//                       <Plus className="w-4 h-4" />
//                     </button>
//                     <Button
//                       variant="destructive"
//                       size="sm"
//                       onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
//                       className="ml-auto transition duration-300 transform hover:scale-105 active:scale-95"
//                     >
//                       Remove
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         <div className="space-y-6">
//           <Card className="p-6">
//             <h3 className="font-semibold mb-4">Order Summary</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${calculateSubtotal().toFixed(2)} USD</span>
//               </div>
//               {hasShippingProtection && (
//                 <div className="flex justify-between">
//                   <span>Shipping Protection</span>
//                   <span>$2.99 USD</span>
//                 </div>
//               )}
//               <hr className="my-4" />
//               <div className="flex justify-between font-semibold">
//                 <span>Total</span>
//                 <span>${calculateTotal().toFixed(2)} USD</span>
//               </div>
//             </div>
//             <div className="space-y-3 mt-6">
//               <Button className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90 transition duration-300 transform hover:scale-105 active:scale-95 text-lg">Checkout now</Button>
//               <Button className="w-full bg-[#ffc439] hover:bg-[#ffc439]/90 transition duration-300 transform hover:scale-105 active:scale-95">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-5" />
//               <p className="px-2 text-lg">PayPal</p>
//               </Button>
//               <Button className="w-full bg-black hover:bg-black/90 transition duration-300 transform hover:scale-105 active:scale-95 active:bg-black/80">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-5" />
//               <p className="px-2 text-lg">Google Pay</p>
//               </Button>
//             </div>
//             <div className="mt-6 space-y-4">
//               <div className="flex items-center justify-center gap-2">
//               <img src="https://famvibe.com/cdn/shop/t/358/assets/trust-2.svg?v=63322071302514675171738572546" alt="securyti check" className="h-8" />
//               </div>
//               <div className="border rounded-lg p-4">
//                 <div className="flex items-center gap-2 font-semibold">
//                 <img src="https://famvibe.com/cdn/shop/t/358/assets/buyerprotectionblack.svg?v=106375279658734052501738572257" alt="BUYER PROTECTION" />
//                 </div>
//                 <ul className="text-sm space-y-2 mt-2">
//                   <li className="flex items-center gap-2">✓ Full-refund of your purchase. No question asked.</li>
//                   <li className="flex items-center gap-2">✓ Famvibe now offers free returns.</li>
//                 </ul>
//               </div>
//               <Button variant="link" className="w-full transition duration-300 transform hover:scale-105 active:scale-95" onClick={() => navigate(-1)}>
//                 Continue Shopping
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus, ShieldCheck } from "lucide-react"

export default function CartPage() {
  const { state, dispatch } = useCart()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: number }>({})

  const [hasShippingProtection, setHasShippingProtection] = useState(true)

  useEffect(() => {
    // Initialize quantities
    const initialQuantities: { [key: number]: number } = {}
    state.items.forEach((item) => {
      initialQuantities[item.id] = 1
    })

    const interval = setInterval(() => {
      const now = Date.now()
      const newTimeLeft: { [key: number]: number } = {}

      state.items.forEach((item) => {
        const timeRemaining = Math.max(0, 10 * 60 - Math.floor((now - item.addedAt) / 1000))
        newTimeLeft[item.id] = timeRemaining

        if (timeRemaining === 0) {
          dispatch({ type: "REMOVE_ITEM", payload: item.id })
        }
      })

      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(interval)
  }, [state.items, dispatch])

  useEffect(() => {
    console.log("Cart Page Mounted, Cart State:", state)
  }, [state])

  const updateQuantity = (itemId: number, delta: number) => {
    const item = state.items.find((item) => item.id === itemId)
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta)
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity: newQuantity } })
    }
  }

  const calculateSubtotal = () => {
    return state.items.reduce((sum, item) => {
      return sum + item.price * item.quantity
    }, 0)
  }

  const calculateTotal = () => {
    let total = calculateSubtotal()
    if (hasShippingProtection) {
      total += 2.99
    }
    return total
  }

  if (state.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] px-4">
        <img
          src="data:image/jpeg;base64,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"
          alt="Empty cart illustration"
          className="w-[400px] h-[400px] mb-8 opacity-40"
        />
        <h2 className="text-2xl font-semibold text-center text-[#DC2626] mb-8">
          Your cart is ready for you to begin filling it with gifts :)
        </h2>
        <Button onClick={() => navigate(-1)}>Continue Shopping</Button>
      </div>
    )
  }

  const earliestAddedAt = Math.min(...state.items.map((item) => item.addedAt))
  const cartTimeLeft = Math.max(0, 10 * 60 - Math.floor((Date.now() - earliestAddedAt) / 1000))
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8"> {/* Update 1 */}
      {cartTimeLeft > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
          Your cart will expire in {formatTime(cartTimeLeft)} minutes! Checkout now before your items sell out
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Update 2 */}
        <div className="md:col-span-2 space-y-6">
          {/* Shipping Protection */}
          {hasShippingProtection && (
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <ShieldCheck className="w-16 h-16 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Shipping Protection</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: Protect your item from damage, loss, or theft during shipping
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$2.99 USD</div>
                      <div className="text-sm text-muted-foreground line-through">$3.99 USD</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setHasShippingProtection(false)}
                      className="ml-auto"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Cart Items */}
          {state.items.map((item) => (
            <Card key={item.id} className="p-4 sm:p-6"> {/* Update 3 */}
              <div className="flex flex-col sm:flex-row gap-4"> {/* Update 4 */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full sm:w-[100px] h-[200px] sm:h-[100px] rounded-lg object-cover" 
                  />
                  {/* Update 5 */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      {/* {item.size && <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>}
                      {item.option && <p className="text-sm text-muted-foreground">Option: {item.option}</p>} */}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${item.price} USD</div>
                      {item.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">${item.originalPrice} USD</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-4"> {/* Update 6 */}
                    <button className="border rounded p-2" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="border rounded p-2" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus className="w-4 h-4" />
                    </button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                      className="ml-auto transition duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="p-4 sm:p-6"> {/* Update 7 */}
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)} USD</span>
              </div>
              {hasShippingProtection && (
                <div className="flex justify-between">
                  <span>Shipping Protection</span>
                  <span>$2.99 USD</span>
                </div>
              )}
              <hr className="my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)} USD</span>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <Button className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90 transition duration-300 transform hover:scale-105 active:scale-95 text-lg">Checkout now</Button>
              <Button className="w-full bg-[#ffc439] hover:bg-[#ffc439]/90 transition duration-300 transform hover:scale-105 active:scale-95">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-5" />
                <p className="px-2 text-base sm:text-lg"> {/* Update 8 */} PayPal</p>
              </Button>
              <Button className="w-full bg-black hover:bg-black/90 transition duration-300 transform hover:scale-105 active:scale-95 active:bg-black/80">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-5" />
                <p className="px-2 text-base sm:text-lg"> {/* Update 9 */} Google Pay</p>
              </Button>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <img src="https://famvibe.com/cdn/shop/t/358/assets/trust-2.svg?v=63322071302514675171738572546" alt="securyti check" className="h-8" />
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold">
                  <img src="https://famvibe.com/cdn/shop/t/358/assets/buyerprotectionblack.svg?v=106375279658734052501738572257" alt="BUYER PROTECTION" />
                </div>
                <ul className="text-sm space-y-2 mt-2">
                  <li className="flex items-center gap-2">✓ Full-refund of your purchase. No question asked.</li>
                  <li className="flex items-center gap-2">✓ Famvibe now offers free returns.</li>
                </ul>
              </div>
              <Button variant="link" className="w-full transition duration-300 transform hover:scale-105 active:scale-95" onClick={() => navigate(-1)}>
                Continue Shopping
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

