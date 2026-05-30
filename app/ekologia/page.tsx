import Link from "next/link";
import { ArrowRight, Droplet, Globe, Leaf, Recycle, Sprout, Sparkles } from "lucide-react";

export default function EcologyPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden pb-16">
      <section className="relative w-full max-w-7xl mx-auto px-4 py-10 md:px-6 md:py-16">
        <div className="absolute left-4 top-10 w-28 h-28 rounded-full bg-oat-blue/20 blur-3xl" />
        <div className="absolute right-8 top-36 w-40 h-40 rounded-full bg-oat-green/20 blur-3xl" />
        <div className="absolute left-1/2 top-2/3 w-60 h-60 -translate-x-1/2 rounded-full bg-oat-yellow/15 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-oat-yellow px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-black neo-border shadow-[4px_4px_0px_#000] w-fit">
              Ekologia
            </span>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight text-black max-w-3xl">
              Ekologia to nie jest opcja. <br />
              To smak, który zmienia świat.
            </h1>

            <p className="text-lg md:text-xl text-neutral-700 max-w-2xl leading-relaxed">
              Tworzymy mleko owsiane z myślą o planecie, ludziach i przyszłości. Każde opakowanie jest zaprojektowane tak, by zostawić za sobą mniej śladu, a więcej uśmiechów.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/sklep"
                className="neo-btn bg-oat-yellow text-black rounded-xl px-7 py-4 font-black inline-flex items-center gap-2 hover:bg-[#f8c308]"
              >
                Zobacz kolekcję
                <ArrowRight className="size-4 stroke-3" />
              </Link>
              <Link
                href="/o-nas"
                className="neo-btn bg-white text-black rounded-xl px-7 py-4 font-black inline-flex items-center gap-2 hover:bg-neutral-100"
              >
                Nasza historia
                <ArrowRight className="size-4 stroke-3" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-oat-green/10" />
            <div className="absolute -right-7 top-12 w-24 h-24 rounded-full bg-oat-blue/20 blur-2xl" />
            <div className="relative flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#E7F9EE] p-5 border-3 border-black neo-border flex flex-col gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-oat-green text-white">
                    <Leaf className="size-5 stroke-2" />
                  </span>
                  <p className="font-black text-base">100% BIO</p>
                  <p className="text-sm text-neutral-700 leading-snug">Wszystkie składniki pochodzą z certyfikowanych, polskich gospodarstw.</p>
                </div>
                <div className="rounded-3xl bg-[#EFF6FF] p-5 border-3 border-black neo-border flex flex-col gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-oat-blue text-white">
                    <Globe className="size-5 stroke-2" />
                  </span>
                  <p className="font-black text-base">Ślad węglowy</p>
                  <p className="text-sm text-neutral-700 leading-snug">Produkcja generuje nawet 70% mniej emisji niż mleko krowie.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#FFF8E7] p-5 border-3 border-black neo-border flex flex-col gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-oat-yellow text-black">
                    <Recycle className="size-5 stroke-2" />
                  </span>
                  <p className="font-black text-base">Opakowanie</p>
                  <p className="text-sm text-neutral-700 leading-snug">Karton po naszych napojach łatwo wraca do obiegu lub trafia na kompost.</p>
                </div>
                <div className="rounded-3xl bg-[#E1F3D8] p-5 border-3 border-black neo-border flex flex-col gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-oat-green text-white">
                    <Sprout className="size-5 stroke-2" />
                  </span>
                  <p className="font-black text-base">Lokalne źródła</p>
                  <p className="text-sm text-neutral-700 leading-snug">Owies i dodatki pochodzą z sąsiednich pól — krótsza droga, świeższy produkt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-oat-cream py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <div className="rounded-[2.5rem] border-4 border-black bg-white p-10 shadow-[8px_8px_0px_#000] relative overflow-hidden">
            <div className="absolute -top-8 right-6 w-24 h-24 rounded-full bg-oat-pink/15 blur-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-oat-yellow text-black neo-border shadow-[3px_3px_0px_#000]">
                <Sparkles className="size-6" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] font-black text-neutral-700">Co robimy inaczej</p>
                <p className="text-2xl font-black text-black">Ekologia zaklęta w każdym detalu</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Roślinna receptura",
                  desc: "Żadnych sztucznych emulgatorów, żadnych kompromisów. Tylko owies, woda i naturalne ekstrakty.",
                  icon: "Droplet",
                },
                {
                  title: "Czas przywrócić naturę",
                  desc: "Nasze procesy oszczędzają wodę i energię. Dbamy o planetę już od pierwszego łyka.",
                  icon: "Globe",
                },
                {
                  title: "Opakowania, które mają sens",
                  desc: "Karton, szkło i papier — minimalizm zamiast plastiku, styl zamiast kompromisu.",
                  icon: "Recycle",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start border-2 border-black/10 rounded-3xl bg-[#FAFAF5] p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-oat-blue text-white">
                    {item.icon === "Droplet" ? <Droplet className="size-5 stroke-2" /> : item.icon === "Globe" ? <Globe className="size-5 stroke-2" /> : <Recycle className="size-5 stroke-2" />}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-black text-black">{item.title}</h3>
                    <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border-4 border-black bg-oat-cream p-10 shadow-[8px_8px_0px_#000] overflow-hidden">
            <div className="absolute left-4 top-4 w-20 h-20 rounded-full bg-oat-green/20 blur-3xl" />
            <div className="relative flex flex-col gap-8">
              <div className="space-y-3">
                <span className="text-sm uppercase tracking-[0.25em] text-neutral-700 font-black">Certyfikaty i standardy</span>
                <p className="text-3xl md:text-4xl font-black text-black max-w-xl">
                  Razem kreujemy <span className="text-oat-green">zdrowszy</span> i <span className="text-oat-blue">czystszy</span> rytm dnia.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: "80%", label: "mniej wody niż mleko krowie" },
                  { value: "0%", label: "sztucznych barwników" },
                  { value: "100%", label: "biodegradowalnych kartonów" },
                  { value: "Polska", label: "lokalni rolnicy" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border-2 border-black bg-white p-6 flex flex-col gap-3">
                    <span className="text-4xl font-black text-black">{stat.value}</span>
                    <p className="text-sm text-neutral-700 leading-snug uppercase tracking-widest font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-700 max-w-lg leading-relaxed">
                  Chcesz poczuć, jak smakuje odpowiedzialność? Nasze ekologiczne butelki i kartony to zaproszenie do lepszej codzienności.
                </p>
                <Link
                  href="/sklep"
                  className="neo-btn bg-oat-blue text-white rounded-xl px-6 py-4 font-black inline-flex items-center gap-2 hover:bg-[#2563eb]"
                >
                  Kup teraz
                  <ArrowRight className="size-4 stroke-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
