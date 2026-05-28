"use client"

import CartItem from "@/components/cart-item"
import { useCartStore } from "@/store/cartStore"

const CartPage = () => {
    const { items } = useCartStore()
    return (
        <div className="min-h-screen w-full flex-1 flex flex-col justify-start items-center py-6 md:py-12 container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Twój Koszyk</h1>
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                {/* <div className="md:col-span-1">
                    <CartSummary />
                </div> */}
            </div>
            
        </div>
    )
}

export default CartPage