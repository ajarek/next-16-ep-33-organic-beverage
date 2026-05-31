"use client"

import React, { useState, useMemo, useEffect, Suspense } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Search, ShoppingCart, Star, X } from "lucide-react"
import { products } from "@/data/products-data"
import { Product } from "@/types/typeProduct"
import { useCartStore } from "@/store/cartStore"
import { toast } from "sonner"

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc"

const CATEGORIES = ["Wszystkie", "Owsiane", "Migdałowe", "Kokosowe", "Barista"]

const CARD_BGS = [
  "#FCF3DB",
  "#E8F4FD",
  "#E1F3D8",
  "#FDE8F4",
  "#F0EEFF",
]

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='#FFC72C'
    className={`size-5 stroke-black stroke-[2.5] drop-shadow-[1px_1px_0px_#000000] ${className ?? ""}`}
  >
    <path d='M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z' />
  </svg>
)

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addItemToCart } = useCartStore()
  const bg = CARD_BGS[index % CARD_BGS.length]

  return (
    <div
      className='group relative bg-white neo-border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#000]'
      style={{ borderColor: "#000" }}
    >

      <div
        className='relative h-64 w-full flex items-center justify-center p-6 overflow-hidden'
        style={{ backgroundColor: bg }}
      >

        <div className='absolute inset-0 flex items-center justify-center opacity-20'>
          <div className='w-48 h-48 rounded-full bg-white blur-3xl' />
        </div>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-contain p-8 group-hover:scale-110 transition-transform duration-500'
          sizes='(max-width: 768px) 100vw, 33vw'
        />

        <div className='absolute top-4 left-4 flex items-center gap-1 bg-white neo-border-sm px-2 py-0.5 rounded-full shadow-[2px_2px_0px_#000] text-xs font-black'>
          <Star className='size-3 fill-oat-yellow text-oat-yellow' />
          4.9
        </div>

        <div className='absolute top-4 right-4 bg-oat-yellow neo-border-sm px-3 py-1 rounded-xl shadow-[3px_3px_0px_#000] text-sm font-black'>
          {product.price.toFixed(2)} zł
        </div>
      </div>

      <div className='p-5 flex flex-col gap-2'>
        <h3 className='font-black text-xl leading-tight group-hover:text-oat-blue transition-colors'>
          {product.name}
        </h3>

        <div className='relative h-10'>
             <p className='text-sm text-neutral-600 font-medium line-clamp-2 transition-all duration-300 group-hover:line-clamp-none group-hover:absolute group-hover:z-50 group-hover:bg-white group-hover:neo-border group-hover:p-3 group-hover:rounded-xl group-hover:shadow-[4px_4px_0px_#000] group-hover:w-full group-hover:-mt-1'>
                {product.description}
            </p>
        </div>

        <button
          onClick={() => {
            addItemToCart(product)
            toast.success(`Dodano ${product.name} do koszyka!`)
          }}
          className='mt-4 w-full neo-btn-yellow py-3 rounded-2xl flex items-center justify-center gap-2 text-sm font-black cursor-pointer'
        >
          <ShoppingCart className='size-4 stroke-3' />
          DODAJ DO KOSZYKA
        </button>
      </div>
    </div>
  )
}

const ShopContent = () => {
  const searchParams = useSearchParams()
  const searchParam = searchParams.get("search")

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Wszystkie")
  const [sortBy, setSortBy] = useState<SortOption>("featured")

  useEffect(() => {
    if (searchParam) {
      setSearchQuery(searchParam)
    }
  }, [searchParam])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (activeCategory !== "Wszystkie") {
      result = result.filter((p) => {
        const lowerName = p.name.toLowerCase()
        const lowerDesc = p.description.toLowerCase()

        if (activeCategory === "Owsiane") return lowerName.includes("owies") || lowerDesc.includes("owsiany") || lowerName.includes("oatly")
        if (activeCategory === "Migdałowe") return lowerName.includes("migdał") || lowerDesc.includes("almond")
        if (activeCategory === "Kokosowe") return lowerName.includes("kokos") || lowerDesc.includes("kokosowy")
        if (activeCategory === "Barista") return lowerName.includes("barista")
        return true
      })
    }

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price)
    if (sortBy === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name))

    return result
  }, [searchQuery, activeCategory, sortBy])

  return (
    <main className='min-h-screen pt-24 pb-20'>
      <div className='max-w-7xl mx-auto px-4'>

        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div className='space-y-2'>
            <div className='inline-flex items-center gap-2 bg-oat-blue/10 text-oat-blue neo-border-sm border-oat-blue px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_rgba(59,130,246,1)]'>
              <SparkleIcon className='size-3 stroke-oat-blue fill-oat-blue' />
              Sklep Organic
            </div>
            <h1 className='text-5xl md:text-7xl font-black text-black tracking-tight'>
              Wybierz swoje <span className='text-oat-yellow underline decoration-[6px] underline-offset-8'>paliwo</span>
            </h1>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <div className='relative group'>
              <input
                type='text'
                placeholder='Szukaj produktów...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full sm:w-64 neo-border px-5 py-3 pl-12 rounded-2xl bg-white focus:outline-none focus:ring-0 focus:shadow-[6px_6px_0px_#000] transition-all'
              />
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400 group-focus-within:text-black transition-colors' />
              {searchQuery && (
                <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black cursor-pointer"
                >
                    <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 mb-12 items-start lg:items-center justify-between'>

          <div className='flex flex-wrap gap-2'>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2.5 rounded-xl font-black text-sm transition-all duration-200 cursor-pointer
                  ${activeCategory === cat
                    ? "bg-black text-white neo-shadow-sm -translate-x-1 -translate-y-1"
                    : "bg-white text-black neo-border hover:bg-neutral-50"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className='flex items-center gap-3 w-full sm:w-auto'>
            <span className='text-sm font-bold text-neutral-500 hidden sm:block'>Sortuj według:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className='flex-1 sm:flex-none neo-border bg-white px-4 py-2.5 rounded-xl font-black text-sm cursor-pointer outline-none focus:shadow-[4px_4px_0px_#000] transition-all appearance-none pr-10 relative'
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
            >
              <option value='featured'>Polecane</option>
              <option value='price-asc'>Cena: rosnąco</option>
              <option value='price-desc'>Cena: malejąco</option>
              <option value='name-asc'>Nazwa: A-Z</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-20 bg-white/50 neo-border border-dashed rounded-3xl'>
            <div className='bg-neutral-100 p-6 rounded-full mb-6'>
                <Search className='size-12 text-neutral-400' />
            </div>
            <h3 className='text-2xl font-black mb-2'>Nie znaleźliśmy produktów</h3>
            <p className='text-neutral-500 font-medium mb-6'>Spróbuj zmienić filtry lub wyszukiwaną frazę.</p>
            <button
                onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("Wszystkie")
                    setSortBy("featured")
                }}
                className='neo-btn px-8 py-3 rounded-2xl cursor-pointer'
            >
                Resetuj wszystkie filtry
            </button>
          </div>
        )}

        <div className='mt-24 relative overflow-hidden bg-oat-green neo-border p-12 rounded-[3rem] shadow-[15px_15px_0px_#000]'>
            <div className='relative z-10 max-w-2xl'>
                <h2 className='text-4xl md:text-5xl font-black text-white mb-4'>Chcesz więcej?</h2>
                <p className='text-white/90 text-lg font-bold mb-8'>Zapisz się do naszego newslettera i odbierz 10% rabatu na pierwsze zakupy!</p>
                <form className='flex flex-col sm:flex-row gap-4' onSubmit={(e)=>{
                  e.preventDefault();
                  toast.success('Dziękujemy za subskrypcje')
                  // @ts-ignore
                  e.target.reset();
                  }}>
                    <input
                        type="email"
                        placeholder="Twój email..."
                        className="flex-1 bg-white neo-border px-6 py-4 rounded-2xl outline-none focus:shadow-[5px_5px_0px_rgba(0,0,0,0.5)] transition-all"
                    />
                    <button className="neo-btn-white px-8 py-4 rounded-2xl whitespace-nowrap cursor-pointer">
                        ZAPISZ MNIE!
                    </button>
                </form>
            </div>

            <div className='absolute -right-20 -bottom-20 rotate-12 opacity-20 pointer-events-none'>
                <SparkleIcon className='size-64 fill-white stroke-none' />
            </div>
            <div className='absolute top-10 right-20 animate-float opacity-10 pointer-events-none'>
                <ShoppingCart className='size-32 text-white stroke-4' />
            </div>
        </div>
      </div>
    </main>
  )
}

const Shop = () => {
  return (
    <Suspense fallback={<div>Ładowanie sklepu...</div>}>
      <ShopContent />
    </Suspense>
  )
}

export default Shop
