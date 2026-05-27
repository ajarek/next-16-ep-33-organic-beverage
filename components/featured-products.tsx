"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { products } from "@/data/products"
import { useRouter } from "next/navigation"

// Only first 6 products
const featuredProducts = products.slice(0, 6)

// Card background colors cycling through the app's palette
const cardBgs = [
  "#FCF3DB", // warm cream
  "#FFC72C", // oat-yellow (active/featured)
  "#E8F4FD", // light blue
  "#E1F3D8", // light green
  "#FDE8F4", // light pink
  "#F0EEFF", // light lavender
]

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

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragDeltaX = useRef(0)
  const router = useRouter()
  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + featuredProducts.length) % featuredProducts.length,
    )
  const next = () => setActiveIndex((i) => (i + 1) % featuredProducts.length)
  // Touch / mouse drag support
  const onDragStart = (clientX: number) => {
    setIsDragging(true)
    dragStartX.current = clientX
    dragDeltaX.current = 0
  }
  const onDragMove = (clientX: number) => {
    if (!isDragging) return
    dragDeltaX.current = clientX - dragStartX.current
  }
  const onDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragDeltaX.current < -60) next()
    else if (dragDeltaX.current > 60) prev()
  }

  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 py-12 md:py-20 overflow-hidden'>
      {/* ── SECTION HEADER ── */}
      <div className='flex flex-col items-center text-center mb-10 md:mb-14'>
        {/* Badge */}
        <div className='inline-flex items-center gap-1.5 bg-oat-yellow neo-border rounded-full px-5 py-1.5 shadow-[3px_3px_0px_#000] mb-4'>
          <SparkleIcon className='size-3.5' />
          <span className='font-heading font-bold text-sm uppercase tracking-widest text-black'>
            Nasza kolekcja
          </span>
        </div>

        {/* Title */}
        <div className='flex items-center gap-3'>
          {/* Decorative doodle ticks */}
          <span className='hidden sm:flex flex-col gap-1 -rotate-12 opacity-80'>
            <span className='w-1.5 h-5 bg-oat-blue rounded-full block' />
            <span className='w-1.5 h-5 bg-oat-blue rounded-full block rotate-20deg' />
          </span>

          <h2 className='font-heading text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight'>
            Polecane produkty
          </h2>
        </div>
      </div>

      {/* ── CAROUSEL TRACK ── */}
      <div
        className='relative flex items-center justify-center select-none'
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
      >
        {/* Left arrow */}
        <button
          id='featured-prev-btn'
          onClick={prev}
          aria-label='Poprzedni produkt'
          className='absolute left-0 z-30 neo-btn bg-white rounded-full size-11 flex items-center justify-center cursor-pointer hover:bg-oat-yellow transition-colors shrink-0'
        >
          <ChevronLeft className='size-5 stroke-3' />
        </button>

        {/* Cards */}
        <div className='flex items-center justify-center gap-4 sm:gap-6 w-full px-14'>
          {featuredProducts.map((product, idx) => {
            const offset =
              (idx - activeIndex + featuredProducts.length) %
              featuredProducts.length
            // Only render: active (0), neighbours (-1 = last, +1 = next), and partial peek
            const normalizedOffset =
              offset > featuredProducts.length / 2
                ? offset - featuredProducts.length
                : offset
            const isActive = normalizedOffset === 0
            const isAdjacent = Math.abs(normalizedOffset) === 1
            const isFar = Math.abs(normalizedOffset) >= 2

            const bg = cardBgs[idx % cardBgs.length]

            return (
              <div
                key={product.id}
                onClick={() => !isActive && setActiveIndex(idx)}
                className={[
                  "relative shrink-0 rounded-3xl neo-border transition-all duration-500 overflow-hidden cursor-pointer group",
                  isActive
                    ? "z-20 scale-105 shadow-[8px_8px_0px_#000] w-[240px] sm:w-[260px]"
                    : isAdjacent
                      ? "z-10 scale-95 opacity-90 shadow-[5px_5px_0px_#000] w-[210px] sm:w-[230px]"
                      : isFar
                        ? "z-0 scale-[0.85] opacity-50 shadow-[3px_3px_0px_#000] w-[180px] sm:w-[200px] hidden sm:block"
                        : "",
                  isFar && Math.abs(normalizedOffset) >= 3 ? "none !important" : "",
                ].join(" ")}
                style={{ backgroundColor: bg }}
              >
                {/* Image area */}
                <div
                  className={[
                    "relative w-full overflow-hidden flex items-end justify-center",
                    isActive
                      ? "h-[280px]"
                      : isAdjacent
                        ? "h-[240px]"
                        : "h-[200px]",
                  ].join(" ")}
                  style={{
                    background: `radial-gradient(ellipse at 50% 40%, ${bg} 30%, ${bg}cc 100%)`,
                  }}
                >
                  {/* Decorative circle behind product */}
                  <div
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 pointer-events-none'
                    style={{
                      width: "65%",
                      aspectRatio: "1",
                      backgroundColor: isActive ? "#FFC72C" : "#00000015",
                      filter: "blur(20px)",
                    }}
                  />

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='object-contain group-hover:scale-105 transition-transform duration-500 p-4'
                    sizes='(max-width: 640px) 240px, 280px'
                  />

                  {/* Rating badge — top left */}
                  <div className='absolute top-3 left-3 flex items-center gap-1 bg-white neo-border rounded-full px-2.5 py-1 shadow-[2px_2px_0px_#000] z-10'>
                    <Star className='size-3.5 fill-oat-yellow text-oat-yellow' />
                    <span className='font-black text-xs text-black'>4.9</span>
                  </div>
                </div>

                {/* Card body */}
                <div className='p-4 bg-white border-t-[3px] border-black'>
                  {/* Price top-right on active */}
                  {isActive && (
                    <div className='flex items-start justify-between mb-1'>
                      <div />
                      <span className='font-heading font-black text-2xl text-black'>
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <p className='font-black text-lg leading-tight text-black line-clamp-1'>
                    {product.name}
                  </p>
                  <p className='text-xs text-neutral-500 font-medium mt-0.5 line-clamp-1'>
                    {product.description}
                  </p>

                  {/* Bottom row */}
                  <div className='mt-3 flex items-center justify-between gap-2'>
                    {isActive ? (
                      // Active card: full "Add to cart" button
                      <button
                        id={`add-to-cart-${product.id}`}
                        className='neo-btn-yellow flex-1 rounded-xl flex items-center justify-center gap-2 py-2.5 text-sm font-black cursor-pointer'
                        onClick={() => router.push(`/cart`)}

                      >
                        <ShoppingCart className='size-4 stroke-[2.5]' />
                        Dodaj do koszyka
                      </button>
                    ) : (
                      // Adjacent cards: price + icon button
                      <>
                        <span className='font-heading font-black text-xl text-black'>
                          ${product.price.toFixed(2)}
                        </span>
                        <button
                          id={`add-to-cart-small-${product.id}`}
                          aria-label='Dodaj do koszyka'
                          className='neo-btn bg-white rounded-full size-9 flex items-center justify-center cursor-pointer hover:bg-oat-yellow transition-colors'
                        >
                          <ShoppingCart className='size-4 stroke-[2.5]' />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right arrow */}
        <button
          id='featured-next-btn'
          onClick={next}
          aria-label='Następny produkt'
          className='absolute right-0 z-30 neo-btn bg-oat-yellow rounded-full size-11 flex items-center justify-center cursor-pointer hover:bg-white transition-colors shrink-0'
        >
          <ChevronRight className='size-5 stroke-3' />
        </button>
      </div>

      {/* ── DOT INDICATORS ── */}
      <div className='flex justify-center gap-2 mt-8'>
        {featuredProducts.map((_, idx) => (
          <button
            key={idx}
            id={`featured-dot-${idx}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Produkt ${idx + 1}`}
            className={[
              "rounded-full neo-border transition-all duration-300 cursor-pointer",
              activeIndex === idx
                ? "w-6 h-3 bg-oat-yellow shadow-[2px_2px_0px_#000]"
                : "w-3 h-3 bg-white hover:bg-neutral-100",
            ].join(" ")}
          />
        ))}
      </div>

      {/* ── DECORATIVE SPARKLES ── */}
      <SparkleIcon className='absolute top-10 left-8 animate-wiggle opacity-60 hidden md:block' />
      <SparkleIcon className='absolute bottom-16 right-12 animate-float opacity-60 hidden md:block size-6' />
    </section>
  )
}
