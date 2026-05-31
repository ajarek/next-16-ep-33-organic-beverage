"use client"

import type { Product } from "@/types/typeProduct"
import Image from "next/image"
import { Plus, Minus, Trash2 } from "lucide-react"
import { useCartStore } from "@/store/cartStore"

const CartItem = ({ item }: { item: Product }) => {
  const { increment, decrement, removeItemFromCart } = useCartStore()

  return (
    <div className='group relative bg-white neo-border neo-shadow p-4 flex flex-col sm:flex-row items-center gap-6 transition-all hover:-translate-x-2px hover:-translate-y-2px hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
      <div className='relative w-32 h-32 sm:w-24 sm:h-24 shrink-0 bg-oat-cream neo-border-sm overflow-hidden'>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-contain p-2 group-hover:scale-110 transition-transform duration-300'
        />
      </div>

      <div className='grow text-center sm:text-left'>
        <h3 className='font-heading font-black text-xl mb-1'>{item.name}</h3>
        <p className='text-muted-foreground font-medium'>
          {item.price.toFixed(2)} zł / szt.
        </p>
      </div>

      <div className='flex items-center gap-3 bg-oat-cream neo-border-sm p-1'>
        <button
          onClick={() => decrement(item.id)}
          className='p-1 hover:bg-oat-yellow transition-colors rounded cursor-pointer'
          aria-label='Zmniejsz ilość'
        >
          <Minus className='w-4 h-4' />
        </button>
        <span className='w-8 text-center font-bold text-lg'>
          {item.quantity}
        </span>
        <button
          onClick={() => increment(item.id)}
          className='p-1 hover:bg-oat-yellow transition-colors rounded cursor-pointer'
          aria-label='Zwiększ ilość'
        >
          <Plus className='w-4 h-4' />
        </button>
      </div>

      <div className='flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end'>
        <div className='text-right'>
          <p className='font-black text-xl'>
            {(item.price * (item.quantity ?? 1)).toFixed(2)} zł
          </p>
        </div>
        <button
          onClick={() => removeItemFromCart(item.id)}
          className='p-2 bg-destructive text-destructive-foreground neo-border-sm hover:bg-red-600 transition-colors cursor-pointer'
          aria-label='Usuń z koszyka'
        >
          <Trash2 className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}

export default CartItem
