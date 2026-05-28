"use client"

import React, { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { testimonialsData } from "@/data/testimonials-data"

// Ozdobne niebieskie kreski (Doodles) po lewej stronie tytułu
function TitleDoodles() {
  return (
    <div className='absolute -left-8 md:-left-12 -top-5 hidden sm:flex flex-col gap-1 -rotate-12deg animate-wiggle'>
      <span className='w-1.5 h-4.5 bg-oat-blue rounded-full block' />
      <span className='w-1.5 h-4.5 bg-oat-blue rounded-full block rotate-25deg' />
      <span className='w-1.5 h-4.5 bg-oat-blue rounded-full block -rotate-35deg' />
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  review: string
  rating: number
  initials: string
  motto: string
  index: number
}

function TestimonialCard({
  name,
  review,
  rating,
  initials,
  motto,
  index,
}: TestimonialCardProps) {
  // Trzy neobrutalistyczne zestawy kolorów z obrazka
  const cardStyles = [
    {
      bg: "#F3CE56", // Ciepły żółty (oat-yellow)
      avatarBg: "#FFC72C", // Jaśniejszy żółty do kontrastu
      avatarText: "text-black",
      dotsColor: "rgba(0, 0, 0, 0.05)",
    },
    {
      bg: "#FA8272", // Koralowa truskawka
      avatarBg: "#E05E4E", // Ciemniejszy koral
      avatarText: "text-white",
      dotsColor: "rgba(255, 255, 255, 0.12)",
    },
    {
      bg: "#8EA7E9", // Pastelowy niebieski
      avatarBg: "#6F88CC", // Ciemniejszy niebieski
      avatarText: "text-white",
      dotsColor: "rgba(255, 255, 255, 0.15)",
    },
  ]

  const style = cardStyles[index % cardStyles.length]

  return (
    <div
      style={{
        backgroundColor: style.bg,
        backgroundImage: `radial-gradient(${style.dotsColor} 2px, transparent 2px)`,
        backgroundSize: "16px 16px",
      }}
      className='relative rounded-[32px] border-3 border-black shadow-[6px_6px_0px_#000] p-6 pt-9 flex flex-col justify-between overflow-visible min-h-[250px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]'
    >
      {/* ── NAKŁADAJĄCY SIĘ AWATAR I NAZWISKO ── */}
      <div className='absolute -top-6 left-6 z-10 flex items-center'>
        {/* Koło z inicjałami */}
        <div
          style={{ backgroundColor: style.avatarBg }}
          className={`w-12 h-12 rounded-full border-3 border-black flex items-center justify-center font-heading font-black text-sm md:text-base shadow-[2px_2px_0px_#000] z-20 ${style.avatarText}`}
        >
          {initials}
        </div>
        {/* Plakietka z imieniem i mottem */}
        <div
          style={{ backgroundColor: style.bg }}
          className='h-12 -ml-4 pl-6 pr-5 border-3 border-black rounded-full flex flex-col justify-center shadow-[2px_2px_0px_#000] z-10'
        >
          <span className='font-heading font-black text-sm md:text-base text-black leading-none whitespace-nowrap'>
            {name}
          </span>
          <span className='text-[9px] md:text-[10px] font-bold text-neutral-800 mt-0.5 leading-none whitespace-nowrap'>
            {motto}
          </span>
        </div>
      </div>

      {/* ── GWIAZDKI (OCENA) ── */}
      <div className='flex gap-0.5 mt-2'>
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < rating
          return (
            <Star
              key={i}
              className={`size-6 stroke-[2.5] text-black ${isFilled ? "fill-black" : "fill-white"}`}
            />
          )
        })}
      </div>

      {/* ── TREŚĆ OPINII ── */}
      <p className='text-sm sm:text-base font-bold text-black text-left leading-relaxed mt-4 flex-1'>
        &quot;{review}&quot;
      </p>
    </div>
  )
}

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Wykrywanie liczby widocznych kart w zależności od szerokości ekranu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalItems = testimonialsData.length
  const maxStartIndex = Math.max(0, totalItems - itemsPerView)

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setStartIndex((prev) => (prev === 0 ? maxStartIndex : prev - 1))
  }

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1))
  }

  // Obsługa swipe/przeciągania na mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center overflow-visible z-20'>
      {/* ── GŁÓWNY KONTENER CHMURY ── */}
      <div className='relative w-full neo-border-lg rounded-[48px] bg-oat-cream p-8 py-16 md:p-12 md:py-20 shadow-[8px_8px_0px_#000] overflow-visible'>
        {/* Dekoracyjne krawędzie chmury (humps) dla neobrutalistycznego efektu 3D */}
        <div className='absolute -top-18px left-[15%] w-16 h-10 bg-oat-cream border-t-4.5 border-black rounded-t-full -z-10' />
        <div className='absolute -top-28px left-[35%] w-24 h-16 bg-oat-cream border-t-4.5 border-black rounded-t-full -z-10' />
        <div className='absolute -top-24px left-[60%] w-20 h-14 bg-oat-cream border-t-4.5 border-black rounded-t-full -z-10' />

        <div className='absolute -bottom-18px left-[20%] w-16 h-10 bg-oat-cream border-b-4.5 border-black rounded-b-full -z-10' />
        <div className='absolute -bottom-28px left-[45%] w-28 h-18 bg-oat-cream border-b-4.5 border-black rounded-b-full -z-10' />
        <div className='absolute -bottom-20px left-[75%] w-20 h-12 bg-oat-cream border-b-4.5 border-black rounded-b-full -z-10' />

        {/* ── PLAKIETKA BADGE (Testimonials / Opinie) NA GÓRZE ── */}
        <div className='absolute -top-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-primary neo-border rounded-xl px-6 py-2 shadow-[3.5px_3.5px_0px_#000] z-20 hover:scale-105 transition-transform duration-200'>
          <span className='font-heading font-black text-xs md:text-sm uppercase tracking-widest text-black'>
            Opinie
          </span>
        </div>

        {/* ── NAGŁÓWEK ── */}
        <div className='flex flex-col items-center mb-16 relative z-10'>
          <div className='relative inline-flex items-center justify-center'>
            <TitleDoodles />
            <h2 className='font-heading text-4xl sm:text-5xl md:text-[54px] font-black text-black tracking-tight drop-shadow-[1px_1px_0px_#fff]'>
              Co mówią nasi klienci
            </h2>
          </div>
        </div>

        {/* ── KARUZELA KART ── */}
        <div
          className='relative z-10 w-full overflow-hidden px-1 md:px-2 pt-10 pb-4'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className='flex transition-transform duration-500 ease-out gap-6'
            style={{
              transform: `translateX(${
                itemsPerView === 1
                  ? `calc(-1 * ${startIndex} * (100% + 24px))`
                  : itemsPerView === 2
                    ? `calc(-1 * ${startIndex} * (50% + 12px))`
                    : `calc(-1 * ${startIndex} * (33.333% + 8px))`
              })`,
            }}
          >
            {testimonialsData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  width:
                    itemsPerView === 1
                      ? "100%"
                      : itemsPerView === 2
                        ? "calc(50% - 12px)"
                        : "calc(33.333% - 16px)",
                }}
                className='shrink-0 overflow-visible py-4'
              >
                <TestimonialCard
                  name={item.name}
                  review={item.review}
                  rating={item.rating}
                  initials={item.initials}
                  motto={item.motto}
                  index={idx}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── NAWIGACJA (PRZYCISKI <- I -> NA DOLE CHMURY) ── */}
        <div className='absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-4 z-40 pointer-events-auto'>
          <button
            onClick={(e) => handlePrev(e)}
            aria-label='Poprzednia opinia'
            className='neo-btn bg-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-neutral-100 transition-colors shrink-0 pointer-events-auto'
          >
            <ArrowLeft className='size-6 stroke-3' />
          </button>
          <button
            onClick={(e) => handleNext(e)}
            aria-label='Następna opinia'
            className='neo-btn bg-primary rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-[#FFD34E] transition-colors shrink-0 pointer-events-auto'
          >
            <ArrowRight className='size-6 stroke-3' />
          </button>
        </div>
      </div>
    </section>
  )
}
