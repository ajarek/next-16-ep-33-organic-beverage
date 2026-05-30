"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

type CartSummaryProps = {
  checkoutHref?: string
}

const CartSummary = ({ checkoutHref }: CartSummaryProps) => {
  const { total, items } = useCartStore()
  const totalPrice = total()
  const shipping = totalPrice > 100 ? 0 : 15
  const finalTotal = totalPrice + shipping

  if (items.length === 0) return null

  return (
    <div className="bg-white neo-border neo-shadow p-6 sticky top-24">
      <h2 className="font-heading font-black text-2xl mb-6 flex items-center gap-2">
        <ShoppingBag className="w-6 h-6" />
        Podsumowanie
      </h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-black/10">
          <span className="font-medium text-muted-foreground">Wartość produktów</span>
          <span className="font-bold">{totalPrice.toFixed(2)} zł</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b-2 border-dashed border-black/10">
          <span className="font-medium text-muted-foreground">Dostawa</span>
          <span className="font-bold">
            {shipping === 0 ? (
              <span className="text-oat-green">Gratis!</span>
            ) : (
              `${shipping.toFixed(2)} zł`
            )}
          </span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-muted-foreground italic">
            Darmowa dostawa od 100 zł! Brakuje Ci {(100 - totalPrice).toFixed(2)} zł.
          </p>
        )}
        <div className="flex justify-between items-center pt-2">
          <span className="font-heading font-black text-xl">Razem</span>
          <span className="font-heading font-black text-2xl text-oat-blue">
            {finalTotal.toFixed(2)} zł
          </span>
        </div>
      </div>

      {checkoutHref ? (
        <Link
          href={checkoutHref}
          className="w-full neo-btn-yellow py-4 flex items-center justify-center gap-2 text-lg uppercase tracking-wider group cursor-pointer text-center"
        >
          Przejdź do kasy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <button
          type="button"
          className="w-full neo-btn-yellow py-4 flex items-center justify-center gap-2 text-lg uppercase tracking-wider group cursor-pointer"
        >
          Przejdź do kasy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      )}

      <p className="text-center text-xs mt-4 text-muted-foreground font-medium">
        Najniższa cena w ciągu ostatnich 30 dni: {totalPrice.toFixed(2)} zł
      </p>
    </div>
  )
}

export default CartSummary
