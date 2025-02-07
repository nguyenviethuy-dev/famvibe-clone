// "use client"

// import { createContext, useContext, useReducer, useEffect } from "react"
// import type { Product } from "@/layouts/data/type/product"

// interface CartItem extends Product {
//   addedAt: number
//   quantity: number
// }

// interface CartState {
//   items: CartItem[]
// }

// type CartAction =
//   | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
//   | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
//   | { type: "REMOVE_ITEM"; payload: number }
//   | { type: "CLEAR_CART" }

// const CartContext = createContext<{
//   state: CartState
//   dispatch: React.Dispatch<CartAction>
// } | null>(null)

// const cartReducer = (state: CartState, action: CartAction): CartState => {
//   console.log('Cart Action:', action.type, action.type !== "CLEAR_CART" ? action.payload : null)
//   console.log('Previous State:', state)

//   let newState: CartState
  
//   switch (action.type) {
//     case "ADD_ITEM": {
//       const existingItemIndex = state.items.findIndex(
//         item => item.id === action.payload.product.id
//       )

//       if (existingItemIndex > -1) {
//         // Update quantity if item exists
//         const newItems = [...state.items]
//         newItems[existingItemIndex] = {
//           ...newItems[existingItemIndex],
//           quantity: newItems[existingItemIndex].quantity + action.payload.quantity
//         }
//         newState = { ...state, items: newItems }
//       } else {
//         // Add new item if it doesn't exist
//         newState = {
//           ...state,
//           items: [...state.items, { 
//             ...action.payload.product, 
//             addedAt: Date.now(),
//             quantity: action.payload.quantity 
//         }],
//       }
//       }
//         return newState
//       }
//     case "UPDATE_QUANTITY": {
//       newState = {
//         ...state,
//         items: state.items.map(item =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       }
//       break
//     }
//     case "REMOVE_ITEM": {
//       newState = {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       }
//       break
//     }
//     case "CLEAR_CART": {
//       newState = {
//         ...state,
//         items: [],
//       }
//       break
//     }
//     default:
//       newState = state
//   }

//   console.log('New State:', newState)
//   return newState
// }

// // Initialize with localStorage if available
// const initializeState = (): CartState => {
//   if (typeof window !== 'undefined') {
//     const savedCart = localStorage.getItem('cart')
//     if (savedCart) {
//       try {
//         return JSON.parse(savedCart)
//       } catch (e) {
//         console.error('Error parsing cart from localStorage:', e)
//       }
//     }
//   }
//   return { items: [] }
// }

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [state, dispatch] = useReducer(cartReducer, null, initializeState)

//   // Save to localStorage when state changes
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cart', JSON.stringify(state))
//     }
//   }, [state])

//   // Check for expired items every minute
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = Date.now()
//       state.items.forEach((item) => {
//         if (now - item.addedAt > 10 * 60 * 1000) {
//           dispatch({ type: "REMOVE_ITEM", payload: item.id })
//         }
//       })
//     }, 60000)

//     return () => clearInterval(interval)
//   }, [state.items])

//   console.log('CartProvider State:', state)

//   return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }

import { createContext, useContext, useReducer, useEffect } from "react"
import type { Product } from "@/layouts/data/type/product"

interface CartItem extends Product {
  addedAt: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  console.log("Cart Action:", action.type, action.type !== "CLEAR_CART" ? action.payload : null)
  console.log("Previous State:", state)

  let newState: CartState

  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.product.id)

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const newItems = [...state.items]
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + action.payload.quantity,
        }
        return { ...state, items: newItems }
      } else {
        // Add new item if it doesn't exist
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...action.payload.product,
              addedAt: Date.now(),
              quantity: action.payload.quantity,
            },
          ],
        }
      }
    }
    case "UPDATE_QUANTITY":
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }
      break
    case "REMOVE_ITEM":
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
      break
    case "CLEAR_CART":
      newState = {
        ...state,
        items: [],
      }
      break
    default:
      newState = state
  }

  console.log("New State:", newState)
  return newState
}

// Initialize with localStorage if available
const initializeState = (): CartState => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        return JSON.parse(savedCart)
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e)
      }
    }
  }
  return { items: [] }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, null, initializeState)

  // Save to localStorage when state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state))
    }
  }, [state])

  // Check for expired items every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      state.items.forEach((item) => {
        if (now - item.addedAt > 10 * 60 * 1000) {
          dispatch({ type: "REMOVE_ITEM", payload: item.id })
        }
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [state.items])

  console.log("CartProvider State:", state)

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}