"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Smile, Star, Heart } from "lucide-react";

// Komponent 4-ramiennej neobrutalistycznej gwiazdy (Sparkle)
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#FFC72C"
      className={`size-6 stroke-black stroke-[2.5] drop-shadow-[2px_2px_0px_#000000] ${className}`}
    >
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between overflow-hidden">
      
      {/* ----------------- LEWA KOLUMNA (TEKST I AKCJE) ----------------- */}
      <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-10">
        
        {/* Playful blue doodles / tick marks at top left of heading */}
        <div className="relative mb-2 flex gap-1 animate-bounce">
          <span className="w-2 h-6 bg-oat-blue rounded-full -rotate-30deg"></span>
          <span className="w-2 h-6 bg-oat-blue rounded-full rotate-15deg"></span>
          <span className="w-2 h-6 bg-oat-blue rounded-full -rotate-45deg"></span>
        </div>

        {/* NAGŁÓWEK */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.05] select-none">
          Napędź Swój Dzień <br />
          <span className="relative inline-block mt-2">
            w Lepszy Sposób
            {/* Wyrazista fala/linia pod tekstem */}
            <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-oat-yellow neo-border rounded-full -z-10"></span>
          </span>
        </h1>

        {/* OPIS */}
        <p className="mt-8 text-lg md:text-xl font-medium text-neutral-800 leading-relaxed max-w-lg">
          Czyste składniki, wyraziste smaki — stworzone dla ludzi, którzy chcą wycisnąć więcej z każdego łyka.
        </p>

        {/* Przerywana ramka informacyjna z gwiazdką (No Nonsense card) */}
        <div className="mt-8 w-full max-w-md bg-[#FFFDF0] rounded-2xl border-2 border-dashed border-black/40 p-5 relative shadow-[2px_2px_0px_rgba(0,0,0,0.05)] hover:border-black transition-all">
          <p className="font-bold text-sm md:text-base text-neutral-700 leading-snug">
            Bez ściemy. Bez dróg na skróty. <br />
            <span className="text-black font-extrabold">Po prostu aksamitna, roślinna pyszność.</span>
          </p>
          {/* Żółta gwiazdka jako naklejka na ramce */}
          <div className="absolute -top-4 -right-4 bg-oat-yellow p-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] rotate-15deg animate-wiggle">
            <Star className="size-5 fill-black stroke-black stroke-width-2" />
          </div>
        </div>

        {/* PRZYCISKI AKCJI */}
        <div className="mt-10 flex flex-wrap gap-4 items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 neo-btn bg-oat-yellow text-black text-lg font-black rounded-xl flex items-center justify-center gap-2 group cursor-pointer">
            Kup Teraz
            <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform stroke-width-3" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 neo-btn bg-white text-black text-lg font-black rounded-xl flex items-center justify-center gap-2 group cursor-pointer hover:bg-neutral-50">
            Poznaj Smaki
            <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform stroke-width-3" />
          </button>
        </div>

        {/* Dodatkowe małe gwiazdki w tle */}
        <div className="mt-8 hidden sm:flex gap-6 items-center">
          <SparkleIcon className="animate-float" />
          <SparkleIcon className="animate-float-slow delay-300" />
          <SparkleIcon className="animate-wiggle" />
        </div>
      </div>

      {/* ----------------- PRAWA KOLUMNA (ESTETYCZNA KOMPOZYCJA NEOPRU) ----------------- */}
      <div className="w-full lg:w-[52%] relative min-h-[580px] flex items-center justify-center pt-8 lg:pt-0">
        
        {/* TŁO KART - DUŻE ZAKRĘCONE KÓŁKA / GRUPE ELEMENTY Ozdobne */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-40">
          <div className="w-[450px] h-[450px] rounded-full border-4 border-dashed border-black/15 animate-spin duration-[40s]"></div>
        </div>

        {/* ==================== KARTA 1: DZIEWCZYNA PIJĄCA NAPÓJ (TOP-LEFT) ==================== */}
        <div className="absolute top-[20px] left-[5%] md:left-[10%] w-[250px] md:w-[280px] bg-[#9FD8F4] neo-border rounded-3xl overflow-hidden shadow-[6px_6px_0px_#000] rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 group z-30">
          <div className="relative h-[220px] w-full bg-white border-b-3 border-black overflow-hidden">
            {/* Realistyczny lifestyle image dziewczyny */}
            <Image
              src="https://www.shutterstock.com/image-photo/image-mature-woman-30s-making-260nw-1299308533.jpg"
              alt="Dziewczyna pijąca Oatfuel"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="280px"
              priority
            />
          </div>
          <div className="p-4 bg-white text-black font-extrabold text-center text-sm md:text-base border-t border-black">
            Smak pełen uśmiechu! 😊
          </div>
        </div>

        {/* NAKLEJKA DO KARTY 1: "Takie kremowe..." (Dymek tekstowy) */}
        <div className="absolute top-[-30px] left-[15%] bg-white neo-border rounded-2xl px-4 py-2 shadow-[3px_3px_0px_#000] rotate-6deg z-40 animate-float text-xs md:text-sm font-black flex items-center gap-1.5 whitespace-nowrap">
          <span>Takie kremowe, tak dobre!</span>
          <Heart className="size-4 fill-oat-blue text-oat-blue" />
        </div>

        {/* ZIELONA UŚMIECHNIĘTA BUŹKA NAKLEJKA NEXT TO CARD 1 */}
        <div className="absolute top-[160px] left-[0%] md:left-[5%] bg-[#7BE193] neo-border rounded-full size-12 flex items-center justify-center shadow-[3px_3px_0px_#000] rotate-15deg z-40 animate-wiggle">
          <Smile className="size-7 stroke-[2.5] text-black" />
        </div>


        {/* ==================== KARTA 2: WANILIOWE OATMILK / MOCKUP (BOTTOM-LEFT/CENTER) ==================== */}
        <div className="absolute bottom-[20px] left-[15%] md:left-[20%] w-[190px] md:w-[220px] bg-[#FFF8E7] neo-border rounded-3xl overflow-hidden shadow-[6px_6px_0px_#000] -rotate-3deg hover:rotate-0 hover:scale-105 transition-all duration-300 group z-40">
          
          {/* EFEKT MOCKUPU OPAKOWANIA W STYLU NEOPRU (HTML/CSS) */}
          <div className="h-[210px] w-full bg-[#FCF3DB] relative border-b-3 border-black p-4 flex flex-col justify-between overflow-hidden">
            
            {/* Wzorek w tle */}
            <div className="absolute top-0 right-0 w-20 h-full bg-oat-yellow/15 skew-x-12 origin-top-right"></div>
            
            {/* Napis pionowy OATFUEL */}
            <div className="absolute top-8 right-3 font-heading font-black text-3xl tracking-tighter text-black/10 select-none rotate-90 origin-right">
              OwsianePaliwo
            </div>

            {/* Wanilia i logo */}
            <div className="flex justify-between items-start z-10">
              <span className="px-2 py-0.5 bg-white border border-black rounded-full text-[9px] font-black shadow-[1px_1px_0px_#000]">
                100% BIO
              </span>
              <SparkleIcon className="size-4" />
            </div>

            {/* Pudełko grafika dłoni z unsplash */}
            <div className="relative w-full h-[110px] border-2 border-black rounded-xl overflow-hidden bg-white shadow-[2px_2px_0px_#000]">
              <Image 
                src="https://images.unsplash.com/photo-1612117568851-c6f49f8f0e87?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Aksamitne mleko owsiane" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform" 
                sizes="220px"
              />
            </div>

            {/* Podpis na dole opakowania */}
            <div className="flex justify-between items-center z-10 mt-1">
              <span className="text-[10px] font-black uppercase text-black">Aksamitna Wanilia</span>
              <span className="text-[9px] font-bold text-neutral-600">1 LITR</span>
            </div>
          </div>
          
          <div className="p-3 bg-white text-black font-extrabold text-xs text-center border-t border-black uppercase tracking-wider">
            Wanilia 🍦
          </div>
        </div>

        {/* NIEBIESKA NAKLEJKA KWIAT DO KARTY 2: "Made for Real Life" */}
        <div className="absolute bottom-[20px] left-[5%] md:left-[10%] bg-oat-blue text-white neo-border rounded-full p-4 size-24 flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_#000] rotate-[-15deg] z-50 animate-float text-[10px] font-black leading-tight uppercase cursor-pointer">
          <Heart className="size-4 fill-white mb-1 animate-pulse" />
          <span>Stworzone</span>
          <span>Do Życia</span>
        </div>


        {/* ==================== KARTA 3: PARA NA SCHODACH (BOTTOM-RIGHT) ==================== */}
        <div className="absolute bottom-[40px] right-[5%] w-[240px] md:w-[260px] bg-[#E1F3D8] neo-border rounded-3xl overflow-hidden shadow-[6px_6px_0px_#000] -rotate-2deg hover:rotate-0 hover:scale-105 transition-all duration-300 group z-30">
          <div className="relative h-[200px] w-full bg-white border-b-3 border-black overflow-hidden">
            <Image
              src="https://holycrap.com/wp-content/uploads/2023/10/HolyCrapOatmealLifetstyleCranberryChocolateChip_2000x.webp"
              alt="Para pijąca napój na schodach"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="260px"
            />
          </div>
          <div className="p-3 bg-white text-black font-extrabold text-center text-xs md:text-sm border-t border-black">
            Lepsze chwile we dwoje! 🥛
          </div>
        </div>

        {/* NAKLEJKA DO KARTY 3: "Mój nowy nawyk!" (Dymek żółty) */}
        <div className="absolute bottom-[-15px] right-[10%] bg-oat-yellow neo-border rounded-2xl px-4 py-2.5 shadow-[3px_3px_0px_#000] rotate-[8deg] z-40 animate-float-slow text-xs font-black text-black">
          Mój nowy nawyk! 🔥
        </div>


        {/* ==================== KARTA 4: CZEKOLADOWE OATMILK (FAR RIGHT / TOP-RIGHT) ==================== */}
        <div className="absolute top-[40px] right-[2%] w-[180px] bg-[#6F4E37] neo-border rounded-3xl overflow-hidden shadow-[6px_6px_0px_#000] rotate-[5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 group z-20 hidden md:block">
          
          <div className="h-[210px] w-full bg-[#523A28] relative p-4 flex flex-col justify-between overflow-hidden">
            
            {/* Ciemnoczekoladowy splash w tle */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            
            {/* Czekolada baner na topie */}
            <div className="flex justify-between items-start z-10">
              <span className="px-2 py-0.5 bg-oat-pink text-white border border-black rounded-full text-[9px] font-black shadow-[1.5px_1.5px_0px_#000]">
                NOWOŚĆ!
              </span>
              <SparkleIcon className="size-4" />
            </div>

            {/* Zdjęcie czekolady z unsplash */}
            <div className="relative w-full h-[115px] border-2 border-black rounded-xl overflow-hidden bg-white shadow-[2px_2px_0px_#000]">
              <Image 
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" 
                alt="Ziarna kakao i czekolada" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform" 
                sizes="180px"
              />
            </div>

            {/* Podpis na dole */}
            <div className="flex justify-between items-center z-10 text-white mt-1">
              <span className="text-[10px] font-black uppercase">Kakao & Czekolada</span>
              <span className="text-[9px] font-bold text-neutral-300">1 LITR</span>
            </div>
          </div>
          
          <div className="p-3 bg-white text-black font-extrabold text-xs text-center border-t border-black uppercase">
            Czekolada 🍫
          </div>
        </div>

        {/* Floating Sparks wokół kompozycji */}
        <SparkleIcon className="absolute top-[30%] right-[32%] animate-bounce size-5 z-40" />
        <SparkleIcon className="absolute bottom-[20%] left-[45%] animate-wiggle size-6 z-40" />
        <SparkleIcon className="absolute top-[10%] left-[40%] animate-float size-5 z-40" />
        
        {/* Ozdobna strzałka skierowana na produkt */}
        <div className="absolute bottom-[35%] left-[6%] z-40 animate-float hidden md:block">
          <svg className="size-10 fill-black stroke-none rotate-20deg" viewBox="0 0 24 24">
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" />
          </svg>
        </div>

      </div>
    </section>
  );
}
