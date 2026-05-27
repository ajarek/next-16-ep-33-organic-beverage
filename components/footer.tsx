"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Leaf,
  Sparkles,
} from "lucide-react";
import { CiTwitter, CiYoutube, CiFacebook   } from "react-icons/ci";
// Reusable sparkle icon matching the app's SparkleIcon style
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#FFC72C"
      className={`size-5 stroke-black stroke-2 drop-shadow-[1px_1px_0px_#000000] ${className}`}
    >
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Sklep", href: "/sklep" },
  { label: "Nasza Historia", href: "/o-nas" },
  { label: "Ekologia", href: "/ekologia" },
  { label: "Przepisy", href: "/przepisy" },
  { label: "Znajdź Sklep", href: "/sklepy" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Wysyłka i Zwroty", href: "/wysylka" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Polityka Prywatności", href: "/prywatnosc" },
  { label: "Regulamin", href: "/regulamin" },
];

const socialLinks = [
  {
    icon: CiFacebook ,
    href: "https://facebook.com",
    label: "Facebook",
    color: "bg-oat-pink",
  },
  {
    icon: CiTwitter,
    href: "https://twitter.com",
    label: "Twitter / X",
    color: "bg-oat-blue",
  },
  {
    icon: CiYoutube,
    href: "https://youtube.com",
    label: "YouTube",
    color: "bg-red-500",
  },
];

const legalLinks = [
  { label: "Prywatność", href: "/prywatnosc" },
  { label: "Regulamin", href: "/regulamin" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full relative z-10 mt-auto">
      {/* ---- NEWSLETTER BANNER ---- */}
      <div className="w-full bg-oat-yellow neo-border-lg border-b-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <div className="bg-black text-oat-yellow neo-border rounded-2xl p-3 shadow-[4px_4px_0px_#ffffff] shrink-0">
              <Leaf className="size-7 stroke-[2.5]" />
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-black text-black leading-tight">
                Bądź na bieżąco!
              </p>
              <p className="text-sm font-semibold text-black/70 mt-0.5">
                Nowości, przepisy i ekskluzywne promocje wprost na skrzynkę.
              </p>
            </div>
          </div>

          {/* Email form */}
          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-0 w-full md:w-auto max-w-md"
          >
            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-3.5 bg-black text-oat-yellow neo-border rounded-xl font-black text-sm shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                <Sparkles className="size-5" />
                Zapisano! Dziękujemy 🎉
              </div>
            ) : (
              <>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="twoj@email.com"
                  required
                  className="flex-1 px-5 py-3.5 bg-white text-black font-semibold text-sm border-[3px] border-r-0 border-black rounded-l-xl outline-none placeholder:text-neutral-400 focus:bg-oat-cream transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3.5 bg-black text-oat-yellow font-black text-sm border-[3px] border-black rounded-r-xl shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Zapisz się
                  <ArrowRight className="size-4 stroke-[2.5]" />
                </button>
              </>
            )}
          </form>

          {/* Floating sparkles (decorative) */}
          <SparkleIcon className="absolute top-4 right-[30%] animate-float opacity-60 hidden lg:block" />
          <SparkleIcon className="absolute bottom-3 right-[15%] animate-wiggle opacity-50 hidden lg:block" />
        </div>
      </div>

      {/* ---- MAIN FOOTER BODY ---- */}
      <div className="w-full bg-oat-cream neo-border-lg border-b-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* --- COLUMN 1: Brand --- */}
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="group inline-flex">
                <span className="font-heading text-3xl font-black tracking-tighter text-black group-hover:scale-105 transition-transform duration-200 select-none">
                  Owsiane
                  <span className="text-oat-yellow drop-shadow-[1.5px_1.5px_0px_#000000]">
                    Paliwo
                  </span>
                </span>
              </Link>

              {/* Tagline */}
              <p className="text-sm font-medium text-neutral-700 leading-relaxed max-w-[230px]">
                Zawsze patrz na życie przez pryzmat{" "}
                <span className="font-black text-black">OwsianePaliwo</span>. Premium
                roślinne mleko owsiane dla nowoczesnego stylu życia.
              </p>

              {/* Social icons */}
              <div className="flex gap-3 mt-1">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 ${color} text-white neo-border rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all duration-200`}
                  >
                    <Icon className="size-5 stroke-2" />
                  </Link>
                ))}
              </div>

              {/* Eco badge */}
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-2 bg-oat-green/15 border-2 border-oat-green/60 rounded-xl w-fit">
                <Leaf className="size-4 text-oat-green stroke-[2.5]" />
                <span className="text-xs font-black text-oat-green uppercase tracking-wide">
                  100% Wegańskie
                </span>
              </div>
            </div>

            {/* --- COLUMN 2: Quick Links --- */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-black text-black uppercase tracking-wide border-b-[3px] border-black pb-2">
                Szybkie Linki
              </h3>
              <nav className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-oat-yellow border border-black shrink-0 group-hover:scale-150 transition-transform duration-150" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* --- COLUMN 3: Support --- */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-black text-black uppercase tracking-wide border-b-[3px] border-black pb-2">
                Wsparcie
              </h3>
              <nav className="flex flex-col gap-2.5">
                {supportLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-oat-blue border border-black shrink-0 group-hover:scale-150 transition-transform duration-150" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* --- COLUMN 4: Contact --- */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-black text-black uppercase tracking-wide border-b-[3px] border-black pb-2">
                Kontakt
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm font-semibold text-neutral-700 hover:text-black transition-colors"
                >
                  <div className="mt-0.5 w-7 h-7 bg-oat-yellow neo-border rounded-lg flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] group-hover:shadow-[3px_3px_0px_#000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <MapPin className="size-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">
                    ul. Owsiana 12, Kołobrzeg,
                    <br />
                    78-100
                  </span>
                </a>

                <a
                  href="mailto:biuro@owsianepaliwo.pl"
                  className="group flex items-center gap-3 text-sm font-semibold text-neutral-700 hover:text-black transition-colors"
                >
                  <div className="w-7 h-7 bg-oat-blue neo-border rounded-lg flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] group-hover:shadow-[3px_3px_0px_#000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <Mail className="size-3.5 stroke-[2.5] text-white" />
                  </div>
                  czesc@owsianepaliwo.pl
                </a>

                <a
                  href="tel:+48573219230"
                  className="group flex items-center gap-3 text-sm font-semibold text-neutral-700 hover:text-black transition-colors"
                >
                  <div className="w-7 h-7 bg-oat-green neo-border rounded-lg flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000] group-hover:shadow-[3px_3px_0px_#000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <Phone className="size-3.5 stroke-[2.5] text-white" />
                  </div>
                  +48 123 456 789
                </a>
              </div>

              {/* Fun neo-card */}
              <div className="mt-3 bg-oat-yellow neo-border rounded-2xl p-4 shadow-[4px_4px_0px_#000] relative overflow-hidden">
                <SparkleIcon className="absolute top-2 right-2 size-4 animate-wiggle" />
                <p className="font-black text-sm text-black">
                  🌾 Ciekawostka dnia
                </p>
                <p className="text-xs font-medium text-black/80 mt-1 leading-snug">
                  Produkcja 1L mleka owsianego zużywa{" "}
                  <span className="font-black">80% mniej wody</span> niż
                  mleko krowie!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- BOTTOM BAR ---- */}
      <div className="w-full bg-black border-t-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-xs font-semibold text-neutral-400 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-oat-yellow font-black">OwsianePaliwo</span>. Wszelkie
            prawa zastrzeżone.
          </p>

          {/* Made with love */}
          <p className="text-xs font-semibold text-neutral-500 hidden md:block">
            Zrobione z ❤️ i płatkami owsianymi w Kołobrzegu
          </p>

          {/* Legal links */}
          <nav className="flex items-center gap-4">
            {legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold text-neutral-400 hover:text-oat-yellow transition-colors duration-150"
                >
                  {link.label}
                </Link>
                {idx < legalLinks.length - 1 && (
                  <span className="text-neutral-700 text-xs">·</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
