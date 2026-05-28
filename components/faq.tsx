"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { faqData } from "@/data/questions-data"

// Ozdobna trójramienna niebieska gwiazdka/kreska po lewej stronie tytułu
function TitleDoodles() {
  return (
    <div className='absolute -left-9 md:-left-12 -top-5 hidden sm:flex flex-col gap-1 -rotate-12deg animate-wiggle'>
      <span className='w-1.5 h-4.5 bg-oat-blue rounded-full block' />
      <span className='w-1.5 h-4.5 bg-oat-blue rounded-full block rotate-25deg' />
      <span className='w-1.5 h-4.5 bg-oat-blue rounded-full block -rotate-35deg' />
    </div>
  )
}

// Autorska neobrutalistyczna grafika wektorowa "FAQ" z realistyczną pinezką
function FAQVectorGraphic() {
  return (
    <div className='relative w-full max-w-[340px] md:max-w-[400px] flex items-center justify-center p-4 hover:scale-102 transition-transform duration-300 ease-out'>
      <svg
        viewBox='0 0 420 320'
        className='w-full h-auto drop-shadow-xl select-none overflow-visible'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          {/* Gradient dla napisu FAQ (klasyczny komiksowy niebieski) */}
          <linearGradient id='faqGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#60A5FA' />
            <stop offset='100%' stopColor='#2563EB' />
          </linearGradient>

          {/* Gradiant do metalowego korpusu pinezki */}
          <linearGradient id='pinBody' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E2E8F0' />
            <stop offset='25%' stopColor='#CBD5E1' />
            <stop offset='50%' stopColor='#94A3B8' />
            <stop offset='85%' stopColor='#475569' />
            <stop offset='100%' stopColor='#1E293B' />
          </linearGradient>

          {/* Gradient do główki pinezki */}
          <linearGradient id='pinCap' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#F8FAFC' />
            <stop offset='30%' stopColor='#CBD5E1' />
            <stop offset='70%' stopColor='#64748B' />
            <stop offset='100%' stopColor='#334155' />
          </linearGradient>

          {/* Błysk światła na pinezce */}
          <radialGradient id='pinHighlight' cx='30%' cy='30%' r='60%'>
            <stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.8' />
            <stop offset='50%' stopColor='#CBD5E1' stopOpacity='0.3' />
            <stop offset='100%' stopColor='#475569' stopOpacity='0' />
          </radialGradient>
        </defs>

        {/* 1. GRUBY CZARNY CIEŃ POD CAŁOŚCIĄ */}
        <g
          transform='translate(14, 14)'
          fill='#000000'
          stroke='#000000'
          strokeWidth='12'
          strokeLinejoin='round'
        >
          {/* Litera F */}
          <path
            transform='rotate(-6 105 165)'
            d='M65 90 C85 85, 120 85, 140 90 C150 93, 155 105, 145 115 C138 122, 128 122, 120 122 L105 122 L105 145 C115 145, 125 143, 135 147 C142 150, 145 160, 138 168 C132 175, 122 175, 112 175 L105 175 L105 240 C105 255, 75 255, 75 240 L75 110 C75 98, 60 98, 65 90 Z'
          />

          {/* Litera A */}
          <path
            transform='rotate(3 220 157)'
            fillRule='evenodd'
            d='M150 240 C140 230, 160 170, 175 130 C185 105, 205 75, 220 75 C235 75, 255 105, 265 130 C280 170, 300 230, 290 240 C282 248, 268 245, 260 235 C255 228, 250 215, 245 200 L195 200 C190 215, 185 228, 180 235 C172 245, 158 248, 150 240 Z M220 110 C213 130, 207 150, 202 170 L238 170 C233 150, 227 130, 220 110 Z'
          />

          {/* Litera Q */}
          <path
            transform='rotate(8 305 160)'
            fillRule='evenodd'
            d='M305 90 C340 90, 370 115, 370 160 C370 205, 340 230, 305 230 C295 230, 287 226, 280 220 C272 235, 260 248, 245 255 C235 260, 230 250, 238 242 C248 232, 256 220, 260 210 C248 198, 240 180, 240 160 C240 115, 270 90, 305 90 Z M305 125 C288 125, 275 138, 275 160 C275 182, 288 195, 305 195 C322 195, 335 182, 335 160 C335 138, 322 125, 305 125 Z'
          />
        </g>

        {/* 2. GRUBA BIAŁA PODKŁADKA DLA KONTURU */}
        <g
          fill='#FFFFFF'
          stroke='#FFFFFF'
          strokeWidth='16'
          strokeLinejoin='round'
        >
          {/* Litera F */}
          <path
            transform='rotate(-6 105 165)'
            d='M65 90 C85 85, 120 85, 140 90 C150 93, 155 105, 145 115 C138 122, 128 122, 120 122 L105 122 L105 145 C115 145, 125 143, 135 147 C142 150, 145 160, 138 168 C132 175, 122 175, 112 175 L105 175 L105 240 C105 255, 75 255, 75 240 L75 110 C75 98, 60 98, 65 90 Z'
          />

          {/* Litera A */}
          <path
            transform='rotate(3 220 157)'
            fillRule='evenodd'
            d='M150 240 C140 230, 160 170, 175 130 C185 105, 205 75, 220 75 C235 75, 255 105, 265 130 C280 170, 300 230, 290 240 C282 248, 268 245, 260 235 C255 228, 250 215, 245 200 L195 200 C190 215, 185 228, 180 235 C172 245, 158 248, 150 240 Z M220 110 C213 130, 207 150, 202 170 L238 170 C233 150, 227 130, 220 110 Z'
          />

          {/* Litera Q */}
          <path
            transform='rotate(8 305 160)'
            fillRule='evenodd'
            d='M305 90 C340 90, 370 115, 370 160 C370 205, 340 230, 305 230 C295 230, 287 226, 280 220 C272 235, 260 248, 245 255 C235 260, 230 250, 238 242 C248 232, 256 220, 260 210 C248 198, 240 180, 240 160 C240 115, 270 90, 305 90 Z M305 125 C288 125, 275 138, 275 160 C275 182, 288 195, 305 195 C322 195, 335 182, 335 160 C335 138, 322 125, 305 125 Z'
          />
        </g>

        {/* 3. OBRYSY I DETALE PĘDZLA */}
        <g
          fill='none'
          stroke='#000000'
          strokeWidth='6.5'
          strokeLinejoin='round'
        >
          {/* Litera F */}
          <path
            transform='rotate(-6 105 165)'
            d='M65 90 C85 85, 120 85, 140 90 C150 93, 155 105, 145 115 C138 122, 128 122, 120 122 L105 122 L105 145 C115 145, 125 143, 135 147 C142 150, 145 160, 138 168 C132 175, 122 175, 112 175 L105 175 L105 240 C105 255, 75 255, 75 240 L75 110 C75 98, 60 98, 65 90 Z'
          />

          {/* Litera A */}
          <path
            transform='rotate(3 220 157)'
            fillRule='evenodd'
            d='M150 240 C140 230, 160 170, 175 130 C185 105, 205 75, 220 75 C235 75, 255 105, 265 130 C280 170, 300 230, 290 240 C282 248, 268 245, 260 235 C255 228, 250 215, 245 200 L195 200 C190 215, 185 228, 180 235 C172 245, 158 248, 150 240 Z M220 110 C213 130, 207 150, 202 170 L238 170 C233 150, 227 130, 220 110 Z'
          />

          {/* Litera Q */}
          <path
            transform='rotate(8 305 160)'
            fillRule='evenodd'
            d='M305 90 C340 90, 370 115, 370 160 C370 205, 340 230, 305 230 C295 230, 287 226, 280 220 C272 235, 260 248, 245 255 C235 260, 230 250, 238 242 C248 232, 256 220, 260 210 C248 198, 240 180, 240 160 C240 115, 270 90, 305 90 Z M305 125 C288 125, 275 138, 275 160 C275 182, 288 195, 305 195 C322 195, 335 182, 335 160 C335 138, 322 125, 305 125 Z'
          />
        </g>

        {/* 4. WYPEŁNIENIE KOLOREM Z GRADIENTEM */}
        <g fill='url(#faqGrad)'>
          {/* Litera F */}
          <path
            transform='rotate(-6 105 165)'
            d='M65 90 C85 85, 120 85, 140 90 C150 93, 155 105, 145 115 C138 122, 128 122, 120 122 L105 122 L105 145 C115 145, 125 143, 135 147 C142 150, 145 160, 138 168 C132 175, 122 175, 112 175 L105 175 L105 240 C105 255, 75 255, 75 240 L75 110 C75 98, 60 98, 65 90 Z'
          />

          {/* Litera A */}
          <path
            transform='rotate(3 220 157)'
            fillRule='evenodd'
            d='M150 240 C140 230, 160 170, 175 130 C185 105, 205 75, 220 75 C235 75, 255 105, 265 130 C280 170, 300 230, 290 240 C282 248, 268 245, 260 235 C255 228, 250 215, 245 200 L195 200 C190 215, 185 228, 180 235 C172 245, 158 248, 150 240 Z M220 110 C213 130, 207 150, 202 170 L238 170 C233 150, 227 130, 220 110 Z'
          />

          {/* Litera Q */}
          <path
            transform='rotate(8 305 160)'
            fillRule='evenodd'
            d='M305 90 C340 90, 370 115, 370 160 C370 205, 340 230, 305 230 C295 230, 287 226, 280 220 C272 235, 260 248, 245 255 C235 260, 230 250, 238 242 C248 232, 256 220, 260 210 C248 198, 240 180, 240 160 C240 115, 270 90, 305 90 Z M305 125 C288 125, 275 138, 275 160 C275 182, 288 195, 305 195 C322 195, 335 182, 335 160 C335 138, 322 125, 305 125 Z'
          />
        </g>

        {/* 5. TRÓJWYMIAROWA PINEZKA (Metalowy pushpin) PRZYPINAJĄCA GRAFIKĘ */}
        <g className='animate-float-slow'>
          {/* Cień pod pinezką */}
          <ellipse
            cx='196'
            cy='115'
            rx='14'
            ry='4'
            fill='#000000'
            opacity='0.35'
          />

          {/* Igła wbijająca się w literę */}
          <path
            d='M192 105 L192 118 C192 121, 196 121, 196 118 L196 105 Z'
            fill='#94A3B8'
            stroke='#000000'
            strokeWidth='2.5'
          />

          {/* Metalowa podkładka u podstawy pinezki */}
          <ellipse
            cx='194'
            cy='103'
            rx='10'
            ry='3.5'
            fill='#475569'
            stroke='#000000'
            strokeWidth='2.5'
          />

          {/* Główny korpus plastikowo-metalowy */}
          <path
            d='M184 65 C184 65, 181 92, 185 101 C187 104, 201 104, 203 101 C207 92, 204 65, 204 65 Z'
            fill='url(#pinBody)'
            stroke='#000000'
            strokeWidth='2.5'
          />

          {/* Blask na korpusie */}
          <path
            d='M187 66 L188 98 C188 98, 193 100, 193 94 L192 66 Z'
            fill='url(#pinHighlight)'
            opacity='0.6'
          />

          {/* Kołnierz (Pierścień) */}
          <path
            d='M182 63 C182 63, 178 72, 184 75 C188 77, 200 77, 204 75 C210 72, 206 63, 206 63 Z'
            fill='url(#pinCap)'
            stroke='#000000'
            strokeWidth='2.5'
          />

          {/* Płaski łebek na samej górze */}
          <ellipse
            cx='194'
            cy='62'
            rx='15'
            ry='7.5'
            fill='url(#pinCap)'
            stroke='#000000'
            strokeWidth='2.5'
          />
          {/* Odbłysk światła na łebku */}
          <ellipse
            cx='191'
            cy='60'
            rx='9'
            ry='4'
            fill='#FFFFFF'
            opacity='0.65'
          />
        </g>
      </svg>
    </div>
  )
}

export default function FAQ() {
  // Domyślnie otwarte jest pierwsze pytanie (indeks 0), tak jak na obrazie
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center overflow-visible z-20'>
      {/* ── PLAKIETKA BADGE "Masz pytania?" NA GÓRZE ── */}
      <div className='inline-flex items-center gap-1.5 bg-oat-yellow neo-border rounded-xl px-5 py-2 shadow-[3.5px_3.5px_0px_#000] mb-6 hover:scale-105 transition-transform duration-200 cursor-default select-none'>
        <span className='font-heading font-black text-xs md:text-sm uppercase tracking-widest text-black'>
          Masz pytania?
        </span>
      </div>

      {/* ── NAGŁÓWEK Z DOODLE'EM ── */}
      <div className='flex flex-col items-center mb-16 relative z-10'>
        <div className='relative inline-flex items-center justify-center'>
          <TitleDoodles />
          <h2 className='font-heading text-4xl sm:text-5xl md:text-[54px] font-black text-black tracking-tight drop-shadow-[1px_1px_0px_#fff]'>
            Często Zadawane Pytania
          </h2>
        </div>
      </div>

      {/* ── DWUKOLUMNOWY RESPONSIVNY UKŁAD NEOPROFESJONALNY ── */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto text-left relative z-10'>
        {/* Kolumna lewa: Autorska grafika FAQ z pinezką */}
        <div className='lg:col-span-5 flex justify-center items-center w-full'>
          <FAQVectorGraphic />
        </div>

        {/* Kolumna prawa: Harmonijka (Accordion) */}
        <div className='lg:col-span-7 flex flex-col gap-5 w-full'>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={index}
                className='bg-[#FAF8F5] rounded-3xl border-3 border-black shadow-[4.5px_4.5px_0px_#000] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] overflow-hidden'
              >
                {/* Belka z pytaniem */}
                <button
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className='w-full flex items-center justify-between gap-4 text-left font-heading font-black text-lg md:text-[20px] text-black cursor-pointer group focus:outline-none'
                >
                  <span className='leading-snug transition-colors duration-200 group-hover:text-neutral-800'>
                    {item.question}
                  </span>

                  {/* Przycisk Plus / Minus z animacją */}
                  <div
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full border-3 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] transition-all duration-300 ${
                      isOpen
                        ? "bg-oat-yellow rotate-180"
                        : "bg-white group-hover:scale-105 active:translate-y-0.5"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className='size-5 stroke-3 text-black' />
                    ) : (
                      <Plus className='size-5 stroke-3 text-black' />
                    )}
                  </div>
                </button>

                {/* Rozwijana treść z płynną animacją Grid CSS */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className='overflow-hidden'>
                    <p className='pt-4 text-sm sm:text-base font-medium text-neutral-700 leading-relaxed border-t-2 border-dashed border-black/10 mt-4'>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
