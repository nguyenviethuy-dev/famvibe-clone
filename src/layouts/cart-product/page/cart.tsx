
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
          dispatch({ type: "REMOVE_ITEM", payload: { id: item.id, size: item.selectedSize, color: item.selectedColor } })
        }
      })

      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(interval)
  }, [state.items, dispatch])

  useEffect(() => {
    console.log("Cart Page Mounted, Cart State:", state)
  }, [state])

  const updateQuantity = (itemId: number, delta: number, size?: string, color?: string) => {
    const item = state.items.find(
      (item) => item.id === itemId && item.selectedSize === size && item.selectedColor === color,
    )
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta)
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity: newQuantity, size, color },
      })
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
          src="https://static.vecteezy.com/system/resources/previews/035/239/041/non_2x/donation-box-with-clothes-food-and-toys-flat-illustration-vector.jpg"
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
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {cartTimeLeft > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
          Your cart will expire in {formatTime(cartTimeLeft)} minutes! Checkout now before your items sell out
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <Card key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full sm:w-[100px] h-[200px] sm:h-[100px] rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-sm text-muted-foreground mt-1">Size: {item.selectedSize}</p>
                      )}
                      {item.selectedColor && (
                        <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${item.price} USD</div>
                      {item.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">${item.originalPrice} USD</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <button
                      className="border rounded p-2"
                      onClick={() => updateQuantity(item.id, -1, item.selectedSize, item.selectedColor)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="border rounded p-2"
                      onClick={() => updateQuantity(item.id, 1, item.selectedSize, item.selectedColor)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: { id: item.id, size: item.selectedSize, color: item.selectedColor },
                        })
                      }
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
          <Card className="p-4 sm:p-6">
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
              <Button className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90 transition duration-300 transform hover:scale-105 active:scale-95 text-lg">
                Checkout now
              </Button>
              <Button className="w-full bg-[#ffc439] hover:bg-[#ffc439]/90 transition duration-300 transform hover:scale-105 active:scale-95">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                  alt="PayPal"
                  className="h-5"
                />
                <p className="px-2 text-base sm:text-lg">PayPal</p>
              </Button>
              <Button className="w-full bg-black hover:bg-black/90 transition duration-300 transform hover:scale-105 active:scale-95 active:bg-black/80">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png"
                  alt="Google Pay"
                  className="h-5"
                />
                <p className="px-2 text-base sm:text-lg">Google Pay</p>
              </Button>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <img
                  src="https://famvibe.com/cdn/shop/t/358/assets/trust-2.svg?v=63322071302514675171738572546"
                  alt="securyti check"
                  className="h-8"
                />
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold">
                  <img
                    src="https://famvibe.com/cdn/shop/t/358/assets/buyerprotectionblack.svg?v=106375279658734052501738572257"
                    alt="BUYER PROTECTION"
                  />
                </div>
                <ul className="text-sm space-y-2 mt-2">
                  <li className="flex items-center gap-2">✓ Full-refund of your purchase. No question asked.</li>
                  <li className="flex items-center gap-2">✓ Famvibe now offers free returns.</li>
                </ul>
              </div>
              <Button
                variant="link"
                className="w-full transition duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => navigate(-1)}
              >
                Continue Shopping
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

