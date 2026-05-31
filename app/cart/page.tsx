"use client"

import CartItem from "@/components/cart-item"
import CartSummary from "@/components/cart-summary"
import { useCartStore } from "@/store/cartStore"
import { ShoppingBasket, ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='#FFC72C'
      className={`size-5 stroke-black stroke-[2.5] drop-shadow-[1px_1px_0px_#000000] ${className ?? ""}`}
    >
      <path d='M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z' />
    </svg>
  )
}

const CartPage = () => {
  const { items } = useCartStore()
  const shouldShowCart = items.length > 0

  return (
    <div className='min-h-[80vh] w-full py-12 md:py-20 container mx-auto px-4'>
      <div className='flex flex-col items-center text-center mb-12'>
        <div className='inline-flex items-center gap-1.5 bg-oat-yellow neo-border rounded-full px-5 py-1.5 shadow-[3px_3px_0px_#000] mb-4'>
          <SparkleIcon className='size-3.5' />
          <span className='font-heading font-bold text-sm uppercase tracking-widest text-black'>
            Twoje zamówienie
          </span>
        </div>

        <h1 className='font-heading text-4xl md:text-6xl font-black text-black tracking-tight mb-4'>
          Twój Koszyk
        </h1>

        {items.length > 0 && (
          <Link
            href='/shop'
            className='flex items-center gap-2 font-bold text-muted-foreground hover:text-black transition-colors group'
          >
            <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
            Kontynuuj zakupy
          </Link>
        )}
      </div>

      {shouldShowCart ? (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
          <div className='lg:col-span-2 flex flex-col gap-6'>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className='lg:col-span-1'>
            <CartSummary checkoutHref='/cart/checkout' />
          </div>
        </div>
      ) : (
        <div className='max-w-2xl mx-auto text-center py-20 bg-white neo-border neo-shadow-lg flex flex-col items-center px-6'>
          <div className='w-24 h-24 bg-oat-yellow neo-border-lg rounded-full flex items-center justify-center mb-8 rotate-12'>
            <ShoppingBasket className='w-12 h-12 text-black' />
          </div>
          <h2 className='font-heading text-3xl font-black mb-4'>
            Twój koszyk jest pusty!
          </h2>
          <p className='text-muted-foreground text-lg font-medium mb-10 max-w-md'>
            Wygląda na to, że nie dodałeś jeszcze żadnego napoju. Nasze roślinne
            baristy czekają na Ciebie!
          </p>
          <Link
            href='/shop'
            className='neo-btn-blue px-10 py-4 text-xl uppercase tracking-wider flex items-center gap-3'
          >
            <ShoppingCart className='w-6 h-6' />
            Przejdź do sklepu
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartPage
