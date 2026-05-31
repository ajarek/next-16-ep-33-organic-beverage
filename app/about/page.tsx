"use client"

import { useRouter } from "next/navigation"
import {
  Leaf,
  Heart,
  Zap,
  ArrowRight,
  Sprout,
  FlaskConical,
  Users,
  Globe,
  Star,
} from "lucide-react"
import Image from "next/image"

// ── HELPERS ──────────────────────────────────────────────────────────────────

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

function StarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 100 100' className={className} fill='currentColor'>
      <path d='M50 0 L54 32 L82 18 L62 42 L96 50 L62 58 L82 82 L54 68 L50 100 L46 68 L18 82 L38 58 L4 50 L38 42 L18 18 L46 32 Z' />
    </svg>
  )
}

// ── DANE ─────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2019",
    title: "Narodziny pomysłu",
    desc: "W małej kuchni w Kołobrzegu Kasia i Marek postanowili stworzyć mleko owsiane, które naprawdę smakuje.",
    color: "bg-oat-yellow",
    icon: "💡",
  },
  {
    year: "2020",
    title: "Pierwsze 100 litrów",
    desc: "Ręcznie wytwarzane partie, testowane przez przyjaciół i rodzinę. Truskawka okazała się hitem.",
    color: "bg-[#9FD8F4]",
    icon: "🧪",
  },
  {
    year: "2021",
    title: "Sklep internetowy",
    desc: "Sprzedaż ruszyła online. W pierwszym miesiącu zamówień było więcej, niż byliśmy w stanie wyprodukować!",
    color: "bg-[#8DC99A]",
    icon: "🚀",
  },
  {
    year: "2022",
    title: "Certyfikat BIO",
    desc: "Uzyskaliśmy certyfikat ekologiczny. 100% surowców pochodzi od lokalnych, polskich rolników.",
    color: "bg-oat-pink",
    icon: "🌿",
  },
  {
    year: "2023",
    title: "Nowe smaki",
    desc: "Debiut Matchy i Czekolady. Ponad 50 000 zadowolonych klientów w Polsce i za granicą.",
    color: "bg-[#F3CE56]",
    icon: "🎉",
  },
  {
    year: "2024+",
    title: "Przyszłość",
    desc: "Nowe smaki, nowe rynki i jeszcze mniejszy ślad węglowy. Owsiany ruch dopiero się rozkręca!",
    color: "bg-black",
    icon: "🌍",
    dark: true,
  },
]

const values = [
  {
    icon: Leaf,
    title: "100% Bio",
    desc: "Każde ziarno owsa pochodzi od certyfikowanych polskich rolników. Bez pestycydów, bez kompromisów.",
    bg: "bg-[#E1F3D8]",
    accent: "bg-oat-green",
    iconColor: "text-white",
  },
  {
    icon: FlaskConical,
    title: "Czyste składniki",
    desc: "Owies, woda, szczypta soli. Zero E-numerów, zero zagęstników. Czytasz skład i rozumiesz każde słowo.",
    bg: "bg-[#9FD8F4]/40",
    accent: "bg-oat-blue",
    iconColor: "text-white",
  },
  {
    icon: Zap,
    title: "Pełen energii",
    desc: "Naturalny błonnik beta-glukan daje długotrwałe uczucie sytości i stabilizuje poziom cukru we krwi.",
    bg: "bg-oat-yellow/30",
    accent: "bg-oat-yellow",
    iconColor: "text-black",
  },
  {
    icon: Globe,
    title: "Planeta przede wszystkim",
    desc: "1L OwsianePaliwo to 80% mniej wody i 70% mniej emisji CO₂ niż mleko krowie. Bo klimat nas wszystkich dotyczy.",
    bg: "bg-[#F3CE56]/30",
    accent: "bg-oat-pink",
    iconColor: "text-white",
  },
]

const team = [
  {
    name: "Kasia Wróbel",
    role: "CEO & Założycielka",
    emoji: "👩‍🍳",
    bg: "bg-oat-yellow",
    quote: "Owsianka zmieniła moje życie. Chciałam, żeby zmieniła też twoje.",
  },
  {
    name: "Marek Jabłoński",
    role: "CTO & Head of Flavor",
    emoji: "👨‍🔬",
    bg: "bg-[#9FD8F4]",
    quote:
      "Każdy nowy smak to 3 miesiące eksperymentów. Efekt zawsze wart jest czekania.",
  },
  {
    name: "Zuza Kowalczyk",
    role: "Head of Sustainability",
    emoji: "🌿",
    bg: "bg-[#E1F3D8]",
    quote: "Nasz cel: zerowy ślad węglowy do 2030. Jesteśmy na dobrej drodze.",
  },
  {
    name: "Bartek Nowicki",
    role: "Community Manager",
    emoji: "🤝",
    bg: "bg-oat-pink/40",
    quote:
      "Nasza społeczność to 50 000 świadomych konsumentów. I rośniemy każdego dnia.",
  },
]

const stats = [
  { value: "50 000+", label: "Zadowolonych klientów", icon: "😊" },
  { value: "4", label: "Kultowe smaki", icon: "🥛" },
  { value: "80%", label: "Mniej wody niż mleko krowie", icon: "💧" },
  { value: "100%", label: "Polskie owsiane źródła", icon: "🌾" },
]

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function AboutUsPage() {
  const router = useRouter()

  return (
    <div className='w-full flex-1 flex flex-col items-center overflow-hidden'>
      {/* ═══════════════════════════════════════════════════════════ HERO */}
      <section className='relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col items-center text-center overflow-hidden'>
        {/* Dekoracyjne gwiazdki w tle */}
        <StarDoodle className='absolute top-8 left-[4%] w-20 h-20 text-[#EADEC6] opacity-40 -z-10 animate-float pointer-events-none hidden lg:block' />
        <StarDoodle className='absolute bottom-12 right-[6%] w-28 h-28 text-[#EADEC6] opacity-30 -z-10 animate-float-slow pointer-events-none hidden lg:block' />

        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-oat-yellow neo-border rounded-xl px-5 py-2 shadow-[3.5px_3.5px_0px_#000] mb-8 hover:scale-105 transition-transform duration-200'>
          <Heart className='size-4 fill-black stroke-black' />
          <span className='font-heading font-black text-xs md:text-sm uppercase tracking-widest text-black'>
            Nasza Historia
          </span>
        </div>

        {/* Heading */}
        <h1 className='font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black tracking-tight leading-none max-w-4xl'>
          Robimy mleko
          <br />
          <span className='relative inline-block mt-2'>
            owsiane
            <span className='absolute -bottom-2 left-0 w-full h-1.5 bg-oat-yellow neo-border rounded-full -z-10' />
          </span>{" "}
          <span className='text-oat-yellow drop-shadow-[2px_2px_0px_#000]'>
            z pasją.
          </span>
        </h1>

        <p className='mt-8 text-lg md:text-xl font-medium text-neutral-700 leading-relaxed max-w-2xl'>
          Jesteśmy małą ekipą z Kołobrzegu, która wierzy, że dobre jedzenie i
          poszanowanie planety idą w parze. Owies, woda i odrobina szaleństwa —
          to cały nasz sekret.
        </p>

        {/* Floating stickers */}
        <div className='absolute top-[15%] right-[8%] bg-white neo-border rounded-2xl px-4 py-2.5 shadow-[3px_3px_0px_#000] rotate-6 z-10 animate-float text-sm font-black hidden md:flex items-center gap-1.5'>
          <Sprout className='size-4 text-oat-green' /> Made in Poland 🇵🇱
        </div>
        <div className='absolute bottom-[10%] left-[6%] bg-oat-yellow neo-border rounded-2xl px-4 py-2.5 shadow-[3px_3px_0px_#000] -rotate-3 z-10 animate-float-slow text-sm font-black hidden md:flex items-center gap-1.5'>
          <Star className='size-4 fill-black stroke-none' /> 100% Bio
        </div>

        {/* Sparkle decorations */}
        <div className='mt-10 flex gap-6 items-center'>
          <SparkleIcon className='animate-float' />
          <SparkleIcon className='animate-wiggle' />
          <SparkleIcon className='animate-float-slow' />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ HERO IMAGE COLLAGE */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 pb-20'>
        <div className='relative grid grid-cols-1 md:grid-cols-3 gap-5'>
          {/* Duże zdjęcie po lewej */}
          <div className='md:col-span-2 relative rounded-3xl overflow-hidden neo-border shadow-[6px_6px_0px_#000] aspect-ratio-16/9 group'>
            <Image
              src='/ekipa.png'
              alt='Przygotowanie mleka owsianego'
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-700'
              sizes='(max-width: 768px) 100vw, 66vw'
              priority
            />
            {/* Overlay label */}
            <div className='absolute bottom-4 left-4 bg-oat-yellow neo-border rounded-2xl px-5 py-2.5 shadow-[3px_3px_0px_#000] font-black text-sm text-black'>
              ☕ Robimy to z miłością
            </div>
          </div>

          {/* Małe zdjęcia po prawej */}
          <div className='flex flex-col gap-5'>
            <div className='relative rounded-3xl overflow-hidden neo-border shadow-[6px_6px_0px_#000] aspect-square group'>
              <Image
                src='https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
                alt='Ziarna owsa'
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-700'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <div className='relative rounded-3xl overflow-hidden neo-border shadow-[6px_6px_0px_#000] aspect-square group bg-[#7BE193] flex items-center justify-center'>
              <div className='text-center p-6'>
                <p className='font-heading text-5xl font-black text-black'>
                  2019
                </p>
                <p className='font-bold text-sm text-black/70 mt-1'>
                  Rok założenia
                </p>
                <SparkleIcon className='mx-auto mt-3 animate-wiggle' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ STATS BAR */}
      <section className='w-full bg-black border-y border-black py-10 mb-8'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className='flex flex-col items-center text-center group'
              >
                <span className='text-4xl mb-2 group-hover:scale-125 transition-transform duration-300'>
                  {stat.icon}
                </span>
                <p className='font-heading text-3xl md:text-4xl font-black text-oat-yellow drop-shadow-[2px_2px_0px_rgba(255,199,44,0.3)]'>
                  {stat.value}
                </p>
                <p className='text-xs md:text-sm font-semibold text-neutral-400 mt-1 max-w-120px'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ VALUES */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20'>
        {/* Section header */}
        <div className='flex flex-col items-center text-center mb-14'>
          <div className='inline-flex items-center gap-2 bg-[#9FD8F4] neo-border rounded-xl px-5 py-2 shadow-[3px_3px_0px_#000] mb-6'>
            <Leaf className='size-4 stroke-[2.5] text-black' />
            <span className='font-heading font-black text-xs uppercase tracking-widest text-black'>
              Nasze Wartości
            </span>
          </div>
          <h2 className='font-heading text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight'>
            Wierzymy w trzy rzeczy
          </h2>
          <p className='mt-4 text-lg font-medium text-neutral-600 max-w-xl'>
            Smak, natura i uczciwy skład. Żadnych kompromisów, żadnych skrótów.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className={`${v.bg} neo-border rounded-3xl p-7 shadow-[5px_5px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div
                  className={`${v.accent} neo-border rounded-2xl p-3 w-fit shadow-[3px_3px_0px_#000] mb-4 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <Icon className={`size-6 stroke-[2.5] ${v.iconColor}`} />
                </div>
                <h3 className='font-heading text-2xl font-black text-black mb-2'>
                  {v.title}
                </h3>
                <p className='text-sm md:text-base font-medium text-neutral-700 leading-relaxed'>
                  {v.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ TIMELINE */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-14'>
          <div className='inline-flex items-center gap-2 bg-oat-pink neo-border rounded-xl px-5 py-2 shadow-[3px_3px_0px_#000] mb-6'>
            <Zap className='size-4 stroke-[2.5] text-white' />
            <span className='font-heading font-black text-xs uppercase tracking-widest text-white'>
              Nasza Droga
            </span>
          </div>
          <h2 className='font-heading text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight'>
            Od kuchni do{" "}
            <span className='text-oat-yellow drop-shadow-[2px_2px_0px_#000]'>
              Polski
            </span>
          </h2>
        </div>

        {/* Timeline grid */}
        <div className='relative'>
          {/* Vertical line (desktop) */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2 rounded-full' />

          <div className='flex flex-col gap-8 md:gap-0'>
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                  >
                    <div
                      className={`${item.color} neo-border rounded-2xl p-6 shadow-[5px_5px_0px_#000] hover:shadow-[7px_7px_0px_#000] hover:-translate-y-1 transition-all duration-300 inline-block w-full`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}
                      >
                        <span className='text-2xl'>{item.icon}</span>
                        <span
                          className={`font-heading text-xl font-black ${item.dark ? "text-oat-yellow" : "text-black"}`}
                        >
                          {item.year}
                        </span>
                      </div>
                      <h3
                        className={`font-heading text-xl font-black mb-1 ${item.dark ? "text-white" : "text-black"}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm font-medium leading-relaxed ${item.dark ? "text-neutral-300" : "text-neutral-700"}`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className='hidden md:flex items-center justify-center w-10 shrink-0 z-10'>
                    <div
                      className={`${item.color} neo-border rounded-full size-10 flex items-center justify-center shadow-[3px_3px_0px_#000] font-black text-lg`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className='flex-1 hidden md:block' />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ ZESPÓŁ */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-14'>
          <div className='inline-flex items-center gap-2 bg-[#E1F3D8] neo-border rounded-xl px-5 py-2 shadow-[3px_3px_0px_#000] mb-6'>
            <Users className='size-4 stroke-[2.5] text-black' />
            <span className='font-heading font-black text-xs uppercase tracking-widest text-black'>
              Nasz Zespół
            </span>
          </div>
          <h2 className='font-heading text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight'>
            Ludzie za smakiem
          </h2>
          <p className='mt-4 text-lg font-medium text-neutral-600 max-w-xl'>
            Mała, ale szalona ekipa, która każdego dnia wstaje z myślą o tym,
            jak ulepszyć Twoje mleko owsiane.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {team.map((member) => (
            <div
              key={member.name}
              className='group flex flex-col neo-border rounded-3xl overflow-hidden shadow-[5px_5px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-2 transition-all duration-300'
            >
              {/* Avatar */}
              <div
                className={`${member.bg} flex items-center justify-center py-10 text-7xl border-b-[3px] border-black group-hover:scale-105 transition-transform duration-500 origin-bottom`}
              >
                {member.emoji}
              </div>
              {/* Info */}
              <div className='bg-white p-5 flex flex-col flex-1'>
                <p className='font-heading text-lg font-black text-black'>
                  {member.name}
                </p>
                <p className='text-xs font-bold text-neutral-500 uppercase tracking-wide mb-3'>
                  {member.role}
                </p>
                <p className='text-sm font-medium text-neutral-600 leading-relaxed italic flex-1'>
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ ECO COMMITMENT VISUAL BLOCK */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16'>
        <div className='relative bg-[#E1F3D8] neo-border-lg rounded-[40px] overflow-hidden p-8 md:p-14 shadow-[8px_8px_0px_#000]'>
          {/* Background doodles */}
          <StarDoodle className='absolute top-4 right-8 w-16 h-16 text-oat-green/20 pointer-events-none' />
          <StarDoodle className='absolute bottom-6 left-6 w-24 h-24 text-oat-green/10 pointer-events-none' />

          <div className='relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
            {/* Text */}
            <div className='flex-1 text-left'>
              <div className='inline-flex items-center gap-2 bg-oat-green neo-border rounded-xl px-4 py-1.5 shadow-[3px_3px_0px_#000] mb-6'>
                <Leaf className='size-4 stroke-[2.5] text-white' />
                <span className='font-heading font-black text-xs uppercase tracking-widest text-white'>
                  Ekologia
                </span>
              </div>
              <h2 className='font-heading text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5'>
                Planeta jest naszym
                <br />
                <span className='text-oat-green drop-shadow-[1px_1px_0px_#000]'>
                  najważniejszym składnikiem
                </span>
              </h2>
              <p className='text-base md:text-lg font-medium text-neutral-700 leading-relaxed max-w-lg mb-8'>
                Każda butelka OwsianePaliwo to świadomy wybór dla planety.
                Opakowania z recyclingu, lokalni dostawcy i dążenie do zerowej
                emisji CO₂ do 2030 roku.
              </p>
              <div className='flex flex-wrap gap-4'>
                <div className='bg-white neo-border rounded-2xl px-5 py-3 shadow-[3px_3px_0px_#000] text-center'>
                  <p className='font-heading text-3xl font-black text-oat-green'>
                    80%
                  </p>
                  <p className='text-xs font-bold text-neutral-600'>
                    mniej wody
                  </p>
                </div>
                <div className='bg-white neo-border rounded-2xl px-5 py-3 shadow-[3px_3px_0px_#000] text-center'>
                  <p className='font-heading text-3xl font-black text-oat-green'>
                    70%
                  </p>
                  <p className='text-xs font-bold text-neutral-600'>
                    mniej CO₂
                  </p>
                </div>
                <div className='bg-white neo-border rounded-2xl px-5 py-3 shadow-[3px_3px_0px_#000] text-center'>
                  <p className='font-heading text-3xl font-black text-oat-green'>
                    100%
                  </p>
                  <p className='text-xs font-bold text-neutral-600'>
                    polskie owsiane źródła
                  </p>
                </div>
              </div>
            </div>

            {/* Visual: stacked eco cards */}
            <div className='relative w-full max-w-sm shrink-0 h-72 flex items-center justify-center'>
              <div className='absolute top-0 left-[10%] bg-oat-yellow neo-border rounded-3xl p-5 shadow-[5px_5px_0px_#000] -rotate-6deg w-52 text-center'>
                <span className='text-4xl'>🌾</span>
                <p className='font-heading font-black text-sm mt-2 text-black'>
                  Polskie owsiane pola
                </p>
              </div>
              <div className='absolute bottom-0 right-[10%] bg-[#9FD8F4] neo-border rounded-3xl p-5 shadow-[5px_5px_0px_#000] rotate-[5deg] w-52 text-center z-10'>
                <span className='text-4xl'>♻️</span>
                <p className='font-heading font-black text-sm mt-2 text-black'>
                  Opakowania z recyklingu
                </p>
              </div>
              <div className='relative z-20 bg-white neo-border rounded-3xl p-5 shadow-[6px_6px_0px_#000] w-52 text-center'>
                <span className='text-4xl'>🌍</span>
                <p className='font-heading font-black text-sm mt-2 text-black'>
                  Zero emisji do 2030
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ MANIFEST */}
      <section className='w-full bg-oat-yellow border-y border-black py-16 md:py-24 my-8'>
        <div className='max-w-4xl mx-auto px-4 md:px-6 text-center'>
          <p className='font-heading text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight'>
            &ldquo;Bez ściemy.
            <br />
            Bez dróg na skróty.
            <br />
            <span className='relative inline-block'>
              Po prostu owsiane paliwo.
              <span className='absolute -bottom-2 left-0 w-full h-1.5 bg-black rounded-full' />
            </span>
            &rdquo;
          </p>
          <p className='mt-10 text-lg font-bold text-black/70'>
            — Kasia Wróbel, CEO & Założycielka OwsianePaliwo
          </p>
          <div className='mt-6 flex justify-center gap-4'>
            <SparkleIcon className='animate-float size-6' />
            <SparkleIcon className='animate-wiggle size-7' />
            <SparkleIcon className='animate-float-slow size-6' />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ CTA */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* CTA 1: Sklep */}
          <button
            id='about-us-cta-shop'
            onClick={() => router.push("/shop")}
            className='group relative bg-black neo-border rounded-3xl p-8 md:p-10 shadow-[6px_6px_0px_0px_#FFC72C] hover:shadow-[10px_10px_0px_0px_#FFC72C] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0px_0px_#FFC72C] transition-all duration-300 text-left overflow-hidden cursor-pointer'
          >
            <StarDoodle className='absolute -top-4 -right-4 w-28 h-28 text-oat-yellow/10 pointer-events-none' />
            <div className='bg-oat-yellow neo-border rounded-2xl p-3 w-fit shadow-[3px_3px_0px_#FFC72C] mb-5 group-hover:rotate-12 transition-transform duration-300'>
              <Zap className='size-7 stroke-[2.5] text-black' />
            </div>
            <h3 className='font-heading text-3xl md:text-4xl font-black text-oat-yellow mb-3'>
              Spróbuj teraz
            </h3>
            <p className='text-base font-medium text-neutral-400 mb-6'>
              4 kultowe smaki czekają na Ciebie. Darmowa dostawa od 99 zł.
            </p>
            <div className='inline-flex items-center gap-2 font-black text-oat-yellow group-hover:gap-4 transition-all duration-300'>
              Przejdź do sklepu <ArrowRight className='size-5 stroke-[2.5]' />
            </div>
          </button>

          {/* CTA 2: Kontakt */}
          <button
            id='about-us-cta-contact'
            onClick={() => router.push("/contact")}
            className='group relative bg-oat-yellow neo-border rounded-3xl p-8 md:p-10 shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0px_#000] transition-all duration-300 text-left overflow-hidden cursor-pointer'
          >
            <StarDoodle className='absolute -top-4 -right-4 w-28 h-28 text-black/5 pointer-events-none' />
            <div className='bg-black neo-border rounded-2xl p-3 w-fit shadow-[3px_3px_0px_#000] mb-5 group-hover:rotate-12 transition-transform duration-300'>
              <Heart className='size-7 stroke-[2.5] fill-oat-yellow text-oat-yellow' />
            </div>
            <h3 className='font-heading text-3xl md:text-4xl font-black text-black mb-3'>
              Napisz do nas
            </h3>
            <p className='text-base font-medium text-black/70 mb-6'>
              Masz pytanie, pomysł na smak albo po prostu chcesz pogadać o
              owsie?
            </p>
            <div className='inline-flex items-center gap-2 font-black text-black group-hover:gap-4 transition-all duration-300'>
              Skontaktuj się <ArrowRight className='size-5 stroke-[2.5]' />
            </div>
          </button>
        </div>
      </section>
    </div>
  )
}
