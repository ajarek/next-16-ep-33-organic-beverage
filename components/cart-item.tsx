import React from 'react'
import type {Product} from '@/types/typeProduct'
const CartItem = ({ item }: { item: Product }) => {
  return (
    <div className="flex items-center gap-4">
        <p>{item.name}</p>
        <p>{item.quantity}</p>
        <p>{item.price}</p> 
    </div>
  )
}

export default CartItem