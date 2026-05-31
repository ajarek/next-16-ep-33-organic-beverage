"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, User, Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCartStore } from "@/store/cartStore"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const router = useRouter()
  const { items } = useCartStore()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchValue.trim())}`)
      setIsSearchOpen(false)
      setSearchValue("")
    }
  }

  const menuItems = [
    { label: "Sklep", href: "/shop" },
    { label: "O Nas", href: "/about" },
    { label: "Kontakt", href: "/contact" },
    { label: "Przepisy", href: "/recipes" },
    { label: "Ekologia", href: "/ecology" },
  ]

  return (
    <header className='w-full max-w-7xl mx-auto px-4 pt-6 md:px-6 md:pt-8 z-50 sticky top-0 bg-transparent'>
      {/* Główny kontener paska nawigacji */}
      <div className='w-full bg-background/80 backdrop-blur-sm neo-border rounded-full py-3 px-6 md:px-8 flex items-center justify-between shadow-[5px_5px_0px_0px_#000000] hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-300'>
        {/* LOGO */}
        <Link href='/' className='flex items-center gap-2 group'>
          <span className='font-heading text-2xl md:text-3xl font-black tracking-tighter text-black select-none group-hover:scale-105 transition-transform duration-200'>
            Owsiane
            <span className='text-oat-yellow drop-shadow-[1.5px_1.5px_0px_#000000]'>
              Paliwo
            </span>
          </span>
        </Link>

        {/* NAWIGACJA DESKTOP */}
        <nav className='hidden lg:flex items-center gap-8 font-semibold text-sm xl:text-base text-black'>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='relative py-1 group transition-colors duration-200 hover:text-yellow-600'
            >
              {item.label}
              {/* Animowane neobrutalistyczne podkreślenie */}
              <span className='absolute bottom-0 left-0 w-0 h-0.75 bg-black transition-all duration-200 group-hover:w-full'></span>
            </Link>
          ))}
        </nav>

        {/* PRZYCISKI AKCJI (PRAWA STRONA) */}
        <div className='flex items-center gap-2 md:gap-3'>
          {/* Przycisk Wyszukaj */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className='w-9 h-9 md:w-10 md:h-10 rounded-lg bg-oat-yellow text-black neo-border neo-shadow-sm hover:neo-shadow hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:neo-shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer'
            aria-label='Szukaj'
          >
            <Search className='size-4 md:size-5 stroke-[2.5]' />
          </button>

          {/* Przycisk Koszyka */}
          <Link
            href='/cart'
            className='relative w-9 h-9 md:w-10 md:h-10 rounded-lg bg-oat-yellow text-black neo-border neo-shadow-sm hover:neo-shadow hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:neo-shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer group'
          >
            <ShoppingCart className='size-4 md:size-5 stroke-[2.5]' />
            {/* Licznik w koszyku */}
            {cartCount > 0 && (
              <span className='absolute -top-1.5 -right-1.5 size-5 bg-oat-pink text-white rounded-full neo-border text-[10px] font-bold flex items-center justify-center shadow-[1px_1px_0px_#000] group-hover:scale-110 transition-transform'>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Przycisk Konta Użytkownika */}

          <Show when='signed-out'>
            <SignUpButton>
              <button
                className='w-9 h-9 md:w-10 md:h-10 rounded-lg bg-oat-yellow text-black neo-border neo-shadow-sm hover:neo-shadow hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:neo-shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer'
                aria-label='Zarejestruj się'
              >
                <User className='size-4 md:size-5 stroke-[2.5]' />
              </button>
            </SignUpButton>
          </Show>
          <Show when='signed-in'>
            <UserButton />
          </Show>
          {/* MENU MOBILNE (TRIGGER) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className='w-9 h-9 md:w-10 md:h-10 rounded-lg neo-border neo-shadow-sm hover:neo-shadow hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:neo-shadow-sm transition-all duration-200 flex lg:hidden items-center justify-center cursor-pointer'
                aria-label='Otwórz menu'
              >
                <Menu className='size-4 md:size-5 stroke-[2.5]' />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-70 sm:w-87.5 bg-primary border-l-[3.5px] border-black p-6 flex flex-col justify-between'
              showCloseButton={false}
            >
              <div className='flex flex-col gap-8'>
                <SheetHeader className='flex flex-row items-center justify-between p-0'>
                  <SheetTitle className='font-heading text-2xl font-black text-black'>
                    OAT<span className='text-oat-yellow'>FUEL</span>
                  </SheetTitle>
                  <SheetTrigger asChild>
                    <button className='p-2 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#000] active:translate-x-px active:translate-y-px transition-all'>
                      <X className='size-4 stroke-[2.5]' />
                    </button>
                  </SheetTrigger>
                </SheetHeader>

                <nav className='flex flex-col gap-4 font-bold text-lg text-black mt-4'>
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='flex items-center justify-between p-3 rounded-xl  border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-1 transition-transform'
                    >
                      <span>{item.label}</span>
                      <ArrowRight className='size-4 text-oat-yellow stroke-width-3' />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Dolna sekcja w menu mobilnym */}
              <div className='flex flex-col gap-4'>
                <div className='p-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000] text-center'>
                  <p className='font-bold text-sm mb-1 text-black'>
                    🔥 Promocja Dnia!
                  </p>
                  <p className='text-xs text-neutral-600'>
                    Kup 2 mleka owsiane, a 3. dostaniesz za pół ceny!
                  </p>
                </div>
                <Link
                  href='/shop'
                  className='w-full py-3 text-center rounded-xl bg-oat-yellow text-black border-2 border-black shadow-[4px_4px_0px_#000] font-black text-sm block active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000] transition-all'
                >
                  KUP TERAZ
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* PASEK WYSZUKIWANIA (ESTETYCZNY ROZWIJANY BANER) */}
      {isSearchOpen && (
        <form
          onSubmit={handleSearch}
          className='w-full max-w-xl mx-auto mt-4 px-4 py-3 bg-white neo-border rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-200'
        >
          <Search className='size-5 text-neutral-400 stroke-[2.5]' />
          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Czego dzisiaj szukasz? (np. mleko czekoladowe)'
            className='flex-1 bg-transparent border-none outline-none font-medium text-black placeholder-neutral-400 text-sm md:text-base'
            autoFocus
          />
          <Button
            type='button'
            onClick={() => {
              setIsSearchOpen(false)
              setSearchValue("")
            }}
            className='px-3 py-1 bg-muted hover:bg-muted/80 rounded-lg text-xs font-bold text-red-400 border border-muted'
          >
            x Zamknij
          </Button>
        </form>
      )}
    </header>
  )
}
