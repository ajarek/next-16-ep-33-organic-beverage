"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Sparkle/Gwiazdka neobrutalistyczna
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='#FFC72C'
      className={`size-5 stroke-black stroke-[2.5] drop-shadow-[1.5px_1.5px_0px_#000000] ${className ?? ""}`}
    >
      <path d='M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z' />
    </svg>
  )
}

// Ozdobna gwiazda wieloramienna w tle
function StarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 100 100' className={className} fill='currentColor'>
      <path d='M50 0 L54 32 L82 18 L62 42 L96 50 L62 58 L82 82 L54 68 L50 100 L46 68 L18 82 L38 58 L4 50 L38 42 L18 18 L46 32 Z' />
    </svg>
  )
}

interface FlavorCardProps {
  title: string
  subtext: string
  imageSrc: string
  bgColor: string
  btnBgColor: string
  textColorClass: string
  subtextColorClass: string
  btnTextColorClass: string
  hasCircleBlob?: boolean
}

function FlavorCard({
  title,
  subtext,
  imageSrc,
  bgColor,
  btnBgColor,
  textColorClass,
  subtextColorClass,
  btnTextColorClass,
  hasCircleBlob = true,
}: FlavorCardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push("/sklep")}
      style={{ backgroundColor: bgColor }}
      className='group relative rounded-[32px] border-3 border-black shadow-[6px_6px_0px_#000] p-6 pb-0 flex flex-col justify-between overflow-hidden h-[460px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[9px_9px_0px_#000]'
    >
      {/* NAGŁÓWEK KARTY */}
      <div className='flex flex-col text-left z-10'>
        <h3
          className={`font-heading font-black text-3xl md:text-[34px] tracking-tight mb-2 ${textColorClass}`}
        >
          {title}
        </h3>
        <p
          className={`text-sm font-bold leading-snug max-w-[90%] ${subtextColorClass}`}
        >
          {subtext}
        </p>
      </div>

      {/* GRAFIKA PRODUKTU I KOŁO W TLE */}
      <div className='relative flex-1 w-full flex items-center justify-center min-h-[190px] z-10'>
        {/* Okrągły blob w tle (żółty/kremowy) */}
        {hasCircleBlob && (
          <div className='absolute top-[15%] right-[10%] w-[130px] h-[130px] rounded-full bg-[#FFE89E] opacity-75 -z-10 group-hover:scale-110 transition-transform duration-500' />
        )}

        {/* Obrazek smaku */}
        <div className='relative w-full h-[250px] md:h-[170px] select-none group-hover:scale-108 transition-transform duration-500'>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className='object-contain p-2'
            sizes='(max-width: 640px) 100vw, 25vw'
          />
        </div>
      </div>

      {/* DOLNY PRZYCISK "Spróbuj Teraz" */}
      <div
        style={{ backgroundColor: btnBgColor }}
        className={`w-[calc(100%+3rem)] -mx-6 mt-auto border-t-3 border-black text-center py-4 font-heading font-black text-lg select-none uppercase tracking-wide transition-all duration-300 group-hover:bg-black group-hover:text-white ${btnTextColorClass}`}
      >
        Spróbuj Teraz
      </div>
    </div>
  )
}

export default function FlavorExplosion() {
  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 overflow-hidden text-center'>
      {/* ── FALISTA WSTĘGA W TLE ── */}
      <svg
        className='absolute inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden hidden md:block'
        viewBox='0 0 1440 800'
        preserveAspectRatio='none'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M-50,260 C250,140 550,340 850,160 C1150,-20 1350,220 1550,120 L1550,240 C1350,340 1150,100 850,280 C550,460 250,260 -50,380 Z'
          fill='#F5EAD4'
          opacity='0.6'
        />
        <path
          d='M-50,660 C350,560 650,730 950,580 C1250,430 1400,630 1550,530 L1550,630 C1400,730 1250,530 950,680 C650,830 350,660 -50,760 Z'
          fill='#F5EAD4'
          opacity='0.5'
        />
      </svg>

      {/* ── DEKORACYJNA GWIAZDA W TLE ── */}
      <StarDoodle className='absolute top-[8%] left-[4%] w-24 h-24 text-[#EADEC6] opacity-35 -z-10 animate-float pointer-events-none hidden lg:block' />

      {/* ── NAGŁÓWEK SEKCJI ── */}
      <div className='flex flex-col items-center mb-12 md:mb-16 relative z-10'>
        {/* Etykieta (Badge) */}
        <div className='inline-flex items-center gap-1.5 bg-oat-yellow neo-border rounded-xl px-5 py-1.5 shadow-[3.5px_3.5px_0px_#000] mb-6 hover:scale-105 transition-transform duration-200'>
          <SparkleIcon className='size-3.5' />
          <span className='font-heading font-black text-xs md:text-sm uppercase tracking-widest text-black'>
            Taste The Rainbow
          </span>
        </div>

        {/* Tytuł z niebieskimi kreskami ozdobnymi */}
        <div className='relative inline-flex items-center justify-center'>
          {/* Niebieskie kreski (Doodles) po lewej stronie tytułu */}
          <div className='absolute -left-10 md:-left-12 -top-6 hidden sm:flex flex-col gap-1 -rotate-12deg animate-wiggle'>
            <span className='w-1.5 h-5 bg-oat-blue rounded-full block' />
            <span className='w-1.5 h-5 bg-oat-blue rounded-full block rotate-25deg' />
            <span className='w-1.5 h-5 bg-oat-blue rounded-full block -rotate-35deg' />
          </div>

          <h2 className='font-heading text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight drop-shadow-[1px_1px_0px_#fff]'>
            Eksplozja Smaku
          </h2>
        </div>
      </div>

      {/* ── SIATKA KART SMAKÓW ── */}
      <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-4 px-2'>
        {/* KARTA CZEKOLADA */}
        <FlavorCard
          title='Czekolada'
          subtext='Aksamitne kakao połączone z najwyższej jakości owsem premium'
          imageSrc='/chocolate-flavor.png'
          bgColor='#7C654B'
          btnBgColor='#6C553C'
          textColorClass='text-white'
          subtextColorClass='text-neutral-200'
          btnTextColorClass='text-white'
          hasCircleBlob={false} // W oryginale czekolada nie ma wyraźnego żółtego koła, ale ładnie kontrastuje z brązem
        />

        {/* KARTA MATCHA */}
        <FlavorCard
          title='Matcha'
          subtext='Tradycyjna japońska zielona herbata premium o głębokim aromacie'
          imageSrc='/matcha-flavor.png'
          bgColor='#8DC99A'
          btnBgColor='#7EB98B'
          textColorClass='text-black'
          subtextColorClass='text-neutral-800'
          btnTextColorClass='text-black'
          hasCircleBlob={true}
        />

        {/* KARTA TRUSKAWKA */}
        <FlavorCard
          title='Truskawka'
          subtext='Prawdziwe, soczyste kawałki słodkich truskawek prosto z natury'
          imageSrc='/strawberry-flavor.png'
          bgColor='#FA8272'
          btnBgColor='#EB7262'
          textColorClass='text-white'
          subtextColorClass='text-neutral-100'
          btnTextColorClass='text-white'
          hasCircleBlob={true}
        />

        {/* KARTA WANILIA */}
        <FlavorCard
          title='Wanilia'
          subtext='Szlachetny ekstrakt z wyselekcjonowanych lasek wanilii z Madagaskaru'
          imageSrc='/vanilla-flavor.png'
          bgColor='#F3CE56'
          btnBgColor='#E2BE46'
          textColorClass='text-black'
          subtextColorClass='text-neutral-800'
          btnTextColorClass='text-black'
          hasCircleBlob={true}
        />
      </div>
    </section>
  )
}
