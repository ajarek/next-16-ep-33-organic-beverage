"use client"

import CheckoutSystem from "@/components/checkout-system"
import { useCartStore } from "@/store/cartStore"
import { ArrowLeft, ShoppingBasket } from "lucide-react"
import Link from "next/link"

const CheckoutPage = () => {
  const { items } = useCartStore()

  return (
    <div className="min-h-[80vh] w-full py-12 md:py-20 container mx-auto px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-oat-yellow neo-border rounded-full px-5 py-1.5 shadow-[3px_3px_0px_#000] mb-4">
          <span className="font-heading font-bold text-sm uppercase tracking-widest text-black">
            Kasa baristy
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl font-black text-black tracking-tight mb-4">
          Finalizacja zamówienia
        </h1>

        <Link href="/cart" className="flex items-center gap-2 font-bold text-muted-foreground hover:text-black transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Powrót do koszyka
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="max-w-2xl mx-auto text-center py-20 bg-white neo-border neo-shadow-lg flex flex-col items-center px-6">
          <div className="w-24 h-24 bg-oat-yellow neo-border-lg rounded-full flex items-center justify-center mb-8 rotate-12">
            <ShoppingBasket className="w-12 h-12 text-black" />
          </div>
          <h2 className="font-heading text-3xl font-black mb-4">Brak produktów w koszyku</h2>
          <p className="text-muted-foreground text-lg font-medium mb-10 max-w-md">
            Dodaj napoje do koszyka, aby przejść do kasy. Nasze roślinne przysmaki czekają!
          </p>
          <Link href="/shop" className="neo-btn-blue px-10 py-4 text-xl uppercase tracking-wider flex items-center gap-3">
            Przejdź do sklep
          </Link>
        </div>
      ) : (
        <CheckoutSystem />
      )}
    </div>
  )
}

export default CheckoutPage
