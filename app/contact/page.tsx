"use client"
import { ArrowRight, Heart, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { toast } from "sonner"

function SparkleBadge({ className }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-oat-yellow text-black font-black text-sm shadow-[4px_4px_0px_#000] ${className ?? ""}`}
    >
      <Sparkles className='size-4' />
      Kontakt z energią
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className='w-full flex-1 flex flex-col items-center overflow-hidden py-10 md:py-16'>
      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 text-center relative overflow-hidden'>
        <div className='absolute -top-8 left-4 w-40 h-40 rounded-full bg-oat-blue/10 blur-3xl -z-10' />
        <div className='absolute top-10 right-8 w-24 h-24 rounded-full bg-oat-pink/20 blur-2xl -z-10' />

        <SparkleBadge className='mx-auto mb-6' />

        <h1 className='font-heading text-5xl sm:text-6xl md:text-7xl font-black text-black leading-tight tracking-tight max-w-4xl mx-auto'>
          Masz pytanie? <br />{" "}
          <span className='relative inline-block'>
            Napisz do nas
            <span className='absolute -bottom-3 left-0 w-full h-2 bg-oat-yellow neo-border rounded-full -z-10' />
          </span>
        </h1>

        <p className='mt-6 text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed'>
          Jesteśmy tutaj, żeby pomóc. Zapytania o produkty, zamówienia, smak czy
          ekologię — odpowiadamy szybko i z wyczuciem.
        </p>
      </section>

      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8'>
        <div className='relative bg-white neo-border rounded-[2.5rem] shadow-[12px_12px_0px_#000] overflow-hidden'>
          <div className='absolute top-0 left-0 w-24 h-24 rounded-full bg-oat-yellow/30 blur-2xl -z-10' />
          <div className='absolute bottom-0 right-0 w-28 h-28 rounded-full bg-oat-blue/20 blur-2xl -z-10' />

          <div className='p-8 md:p-10'>
            <div className='inline-flex items-center gap-2 bg-oat-pink text-white rounded-full px-4 py-2 text-sm font-black mb-6 shadow-[3px_3px_0px_#000]'>
              <Heart className='size-4' />
              Odpisujemy w 24h
            </div>

            <h2 className='font-heading text-3xl md:text-4xl font-black text-black leading-tight'>
              Szybka wiadomość <br /> bez pustych słów.
            </h2>

            <p className='mt-4 text-sm md:text-base text-neutral-700 leading-relaxed max-w-2xl'>
              Wypełnij formularz, a nasz zespół odpowie tak, jakby to była
              rozmowa przy kawie. Pisz śmiało o smakach, dostawie i pomysłach na
              nowe produkty.
            </p>

            <form
              className='mt-10 grid gap-5'
              onSubmit={(e) => {
                e.preventDefault()
                toast.success("Wiadomość wysłana!")
                e.currentTarget.reset()
              }}
            >
              <label className='flex flex-col gap-2 text-sm font-semibold text-neutral-800'>
                Twoje imię
                <input
                  type='text'
                  name='name'
                  placeholder='Kasia'
                  className='bg-oat-cream border-[3px] border-black rounded-3xl px-5 py-4 outline-none text-sm font-medium'
                />
              </label>

              <label className='flex flex-col gap-2 text-sm font-semibold text-neutral-800'>
                E-mail
                <input
                  type='email'
                  name='email'
                  placeholder='kontakt@przyklad.com'
                  className='bg-oat-cream border-[3px] border-black rounded-3xl px-5 py-4 outline-none text-sm font-medium'
                />
              </label>

              <label className='flex flex-col gap-2 text-sm font-semibold text-neutral-800'>
                Wiadomość
                <textarea
                  name='message'
                  rows={6}
                  placeholder='Opisz, w czym możemy pomóc...'
                  className='bg-oat-cream border-[3px] border-black rounded-3xl px-5 py-4 outline-none text-sm font-medium resize-none'
                />
              </label>

              <button
                type='submit'
                className='w-full inline-flex items-center justify-center gap-3 rounded-3xl bg-black text-white px-6 py-4 text-base font-black uppercase tracking-wide shadow-[5px_5px_0px_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
              >
                Wyślij wiadomość
                <ArrowRight className='size-4' />
              </button>
            </form>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='bg-oat-blue/10 neo-border rounded-[2rem] p-8 shadow-[8px_8px_0px_#000] overflow-hidden relative'>
            <div className='absolute top-6 right-6 w-20 h-20 rounded-full bg-oat-yellow/30 blur-2xl -z-10' />
            <div className='inline-flex items-center gap-3 bg-white neo-border-sm rounded-full px-4 py-2 text-sm font-black text-black shadow-[3px_3px_0px_#000] mb-6'>
              <Sparkles className='size-4 text-oat-blue' />
              Jesteśmy o krok od Ciebie
            </div>
            <h3 className='font-heading text-3xl font-black text-black leading-tight'>
              Kontaktuj się tam, gdzie jest najwygodniej.
            </h3>
            <p className='mt-4 text-sm md:text-base text-neutral-700 leading-relaxed'>
              Nasz zespół odpowiada na maile, telefony i wiadomości w mediach
              społecznościowych. Wybierz kanał, który lubisz najbardziej.
            </p>

            <div className='mt-8 grid gap-4'>
              <div className='flex items-start gap-4 bg-white neo-border rounded-3xl p-5 shadow-[4px_4px_0px_#000]'>
                <div className='size-12 rounded-3xl bg-oat-yellow flex items-center justify-center text-black shadow-[3px_3px_0px_#000]'>
                  <Mail className='size-5' />
                </div>
                <div>
                  <p className='font-bold text-sm uppercase tracking-[0.2em] text-neutral-600'>
                    E-mail
                  </p>
                  <p className='mt-2 font-black text-base'>
                    kontakt@owsianepaliwo.pl
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 bg-white neo-border rounded-3xl p-5 shadow-[4px_4px_0px_#000]'>
                <div className='size-12 rounded-3xl bg-oat-green flex items-center justify-center text-white shadow-[3px_3px_0px_#000]'>
                  <Phone className='size-5' />
                </div>
                <div>
                  <p className='font-bold text-sm uppercase tracking-[0.2em] text-neutral-600'>
                    Telefon
                  </p>
                  <p className='mt-2 font-black text-base'>+48 123 456 789</p>
                </div>
              </div>

              <div className='flex items-start gap-4 bg-white neo-border rounded-3xl p-5 shadow-[4px_4px_0px_#000]'>
                <div className='size-12 rounded-3xl bg-oat-pink flex items-center justify-center text-white shadow-[3px_3px_0px_#000]'>
                  <MapPin className='size-5' />
                </div>
                <div>
                  <p className='font-bold text-sm uppercase tracking-[0.2em] text-neutral-600'>
                    Adres
                  </p>
                  <p className='mt-2 font-black text-base'>
                    Ul. Owsiana 12, 78-100 Kołobrzeg
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {[
              {
                title: "Szybka pomoc",
                desc: "Odpowiadamy średnio w 24 godziny. Twój czas jest dla nas ważny.",
                accent: "bg-oat-yellow",
              },
              {
                title: "Zmiany smaków",
                desc: "Masz pomysł na nowy wariant? Chętnie usłyszymy Twoją opinię.",
                accent: "bg-oat-blue",
              },
            ].map((item) => (
              <div
                key={item.title}
                className='bg-white neo-border rounded-3xl p-6 shadow-[5px_5px_0px_#000] relative overflow-hidden'
              >
                <div
                  className={`absolute top-4 right-4 w-14 h-14 rounded-full ${item.accent} opacity-40`}
                />
                <p className='font-heading text-lg font-black text-black mb-3'>
                  {item.title}
                </p>
                <p className='text-sm text-neutral-700 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='w-full max-w-7xl mx-auto px-4 md:px-6 mt-12'>
        <div className='bg-oat-green neo-border rounded-[3rem] p-10 md:p-14 shadow-[15px_15px_0px_#000] overflow-hidden relative'>
          <div className='absolute top-0 left-0 w-32 h-32 rounded-full bg-white/30 blur-2xl -z-10' />
          <div className='absolute bottom-8 right-8 w-28 h-28 rounded-full bg-oat-yellow/20 blur-2xl -z-10' />

          <div className='flex flex-col md:flex-row items-start gap-6 md:gap-10'>
            <div className='flex-1 text-white'>
              <p className='text-sm uppercase tracking-[0.3em] font-black mb-4'>
                Poznaj lepszy kontakt
              </p>
              <h2 className='font-heading text-4xl md:text-5xl font-black leading-tight'>
                Rozmowa, która smakuje jak dobre mleko owsiane.
              </h2>
            </div>
            <div className='inline-flex items-center gap-3 bg-white text-black rounded-full px-5 py-3 font-black shadow-[4px_4px_0px_#000]'>
              <Heart className='size-5 text-oat-pink' />
              Jesteśmy tu dla Ciebie każdego dnia
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
