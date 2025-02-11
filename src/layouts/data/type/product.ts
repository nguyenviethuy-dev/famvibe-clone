export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image?: string
  image1?: string
  rating?: number
  salePercent?: number
  productType?: string
  occasions?: string[]
  giftFor?: string[]
  colors?: string[]
  size?: string
  selectedSize?: string
  selectedColor?: string
  description?: string
}
