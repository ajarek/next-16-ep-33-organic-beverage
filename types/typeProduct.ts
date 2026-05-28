export interface Product {
  id: string|number
  name: string
  description: string
  image: string
  price: number
  quantity: number
}

export interface CartItem extends Product {
  quantity: number
}
