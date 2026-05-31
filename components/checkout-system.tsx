"use client"

import { type FormEvent, useState } from "react"
import { useCartStore } from "@/store/cartStore"
import {
  CheckCircle2,
  CreditCard,
  PackageOpen,
  Sparkles,
  Truck,
} from "lucide-react"

const paymentOptions = [
  { id: "cash", label: "Płatność przy odbiorze" },
  { id: "card", label: "Karta / Apple Pay" },
  { id: "blik", label: "BLIK" },
]

const CheckoutSystem = () => {
  const { total, removeAllFromCart } = useCartStore()
  const totalPrice = total()
  const shipping = totalPrice > 100 ? 0 : 15
  const orderTotal = totalPrice + shipping

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [notes, setNotes] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("cash")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [orderId, setOrderId] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !email || !phone || !address) {
      setError("Proszę uzupełnić wszystkie wymagane pola.")
      return
    }

    setError("")
    setOrderId(`OAT-${Date.now().toString().slice(-6)}`)
    setSubmitted(true)
    removeAllFromCart()
  }

  return (
    <div className='mt-10 bg-white neo-border neo-shadow p-6'>
      <div className='flex items-start justify-between gap-4 mb-8'>
        <div>
          <div className='inline-flex items-center gap-2 bg-oat-cream neo-border-sm px-3 py-1 rounded-full mb-3'>
            <Sparkles className='w-4 h-4 text-oat-yellow' />
            <span className='text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground'>
              Kasa Baristy
            </span>
          </div>
          <h2 className='font-heading text-3xl font-black tracking-tight'>
            Finalizuj zielone zamówienie
          </h2>
          <p className='text-muted-foreground mt-2 max-w-xl'>
            Podaj dane, wybierz metodę płatności i pozwól nam przygotować świeżo
            zaparzone napoje organiczne prosto do Twoich rąk.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className='bg-oat-cream neo-border p-6 rounded-[1rem]'>
          <div className='flex items-center gap-3 mb-5'>
            <span className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-oat-green text-white'>
              <CheckCircle2 className='w-6 h-6' />
            </span>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground'>
                Zamówienie złożone
              </p>
              <h3 className='font-heading text-2xl font-black'>
                Dziękujemy, {name.split(" ")[0] || "Gościu"}!
              </h3>
            </div>
          </div>

          <p className='text-muted-foreground mb-4'>
            Twoje zamówienie <span className='font-bold'>{orderId}</span>{" "}
            zostało przyjęte do realizacji.
          </p>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='bg-white neo-border-sm p-4'>
              <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2'>
                Suma
              </p>
              <p className='font-heading text-3xl font-black text-oat-blue'>
                {orderTotal.toFixed(2)} zł
              </p>
              <p className='text-sm text-muted-foreground mt-2'>
                Płatność:{" "}
                {
                  paymentOptions.find((method) => method.id === paymentMethod)
                    ?.label
                }
              </p>
            </div>
            <div className='bg-white neo-border-sm p-4'>
              <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2'>
                Dostawa
              </p>
              <p className='text-lg font-bold'>
                {shipping === 0 ? "Gratis" : `${shipping.toFixed(2)} zł`}
              </p>
              <p className='text-sm text-muted-foreground mt-2'>
                Wyprawka w ekologicznej torbie dołączona gratis.
              </p>
            </div>
          </div>

          <div className='mt-6 rounded-lg bg-oat-blue/10 border border-black p-4 text-sm text-muted-foreground'>
            <p className='font-semibold mb-2'>Wskazówka baristy</p>
            <p>
              Czekamy na Ciebie z najlepszymi roślinnymi napojami. Twoje
              zamówienie jest już w drodze do przygotowania — spokojnie, wciąż
              parzymy je dla Ciebie na świeżo.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
            <label className='block'>
              <span className='text-sm font-semibold'>Imię i nazwisko</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='w-full mt-2 rounded-lg border-2 border-black/80 bg-oat-cream px-4 py-3 text-base font-medium outline-none focus:border-oat-blue'
                placeholder='Jan Zielony'
              />
            </label>
            <label className='block'>
              <span className='text-sm font-semibold'>Adres e-mail</span>
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='w-full mt-2 rounded-lg border-2 border-black/80 bg-oat-cream px-4 py-3 text-base font-medium outline-none focus:border-oat-blue'
                placeholder='jan@example.com'
              />
            </label>
          </div>

          <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
            <label className='block'>
              <span className='text-sm font-semibold'>Numer telefonu</span>
              <input
                type='tel'
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className='w-full mt-2 rounded-lg border-2 border-black/80 bg-oat-cream px-4 py-3 text-base font-medium outline-none focus:border-oat-blue'
                placeholder='+48 600 700 800'
              />
            </label>
            <label className='block'>
              <span className='text-sm font-semibold'>Adres dostawy</span>
              <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                className='w-full mt-2 rounded-lg border-2 border-black/80 bg-oat-cream px-4 py-3 text-base font-medium outline-none focus:border-oat-blue'
                placeholder='Ulica, numer, kod pocztowy'
              />
            </label>
          </div>

          <label className='block'>
            <span className='text-sm font-semibold'>Uwagi do zamówienia</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className='w-full mt-2 min-h-30 rounded-lg border-2 border-black/80 bg-oat-cream px-4 py-3 text-base font-medium outline-none focus:border-oat-blue'
              placeholder='Napisz jeśli chcesz ekstra mleko roślinne, mniejsze opakowanie lub kubek na wynos'
            />
          </label>

          <div className='rounded-2xl border-2 border-black p-4 bg-oat-cream'>
            <div className='mb-3 text-sm uppercase tracking-[0.25em] font-bold text-muted-foreground'>
              Metoda płatności
            </div>
            <div className='grid gap-3 sm:grid-cols-3'>
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  type='button'
                  onClick={() => setPaymentMethod(option.id)}
                  className={`rounded-2xl border-2 px-4 py-3 text-left transition ${
                    paymentMethod === option.id
                      ? "border-black bg-black text-white"
                      : "border-black/50 bg-white text-black"
                  }`}
                >
                  <span className='font-bold block mb-1'>{option.label}</span>
                  <span className='text-xs text-muted-foreground'>
                    Szybkie i bezpieczne rozliczenie.
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <div className='bg-white neo-border-sm p-4'>
              <div className='flex items-center justify-between mb-3'>
                <span className='font-medium text-muted-foreground'>
                  Wartość koszyka
                </span>
                <span className='font-bold'>{totalPrice.toFixed(2)} zł</span>
              </div>
              <div className='flex items-center justify-between mb-3'>
                <span className='font-medium text-muted-foreground'>
                  Dostawa
                </span>
                <span className='font-bold'>
                  {shipping === 0 ? "Gratis" : `${shipping.toFixed(2)} zł`}
                </span>
              </div>
              <div className='flex items-center justify-between pt-3 border-t-2 border-dashed border-black/20'>
                <span className='font-heading font-black'>Do zapłaty</span>
                <span className='font-heading font-black text-2xl text-oat-blue'>
                  {orderTotal.toFixed(2)} zł
                </span>
              </div>
            </div>

            {error ? (
              <div className='rounded-xl border-2 border-destructive/70 bg-destructive/10 p-4 text-sm text-destructive'>
                {error}
              </div>
            ) : null}

            <button
              type='submit'
              className='w-full neo-btn-yellow py-4 text-lg uppercase tracking-wider flex items-center justify-center gap-3'
            >
              <CreditCard className='w-5 h-5' />
              Zapłać i zamów
            </button>
          </div>
        </form>
      )}

      <div className='mt-8 grid gap-3 sm:grid-cols-2'>
        <div className='rounded-2xl border-2 border-black/50 bg-oat-cream p-4'>
          <div className='flex items-center gap-2 mb-2'>
            <Truck className='w-4 h-4 text-oat-blue' />
            <span className='text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground'>
              Dostawa
            </span>
          </div>
          <p className='text-sm'>
            Ekologiczna dostawa do domu lub odbiór osobisty w wybranym punkcie.
            Paczka spakowana z miłością do natury.
          </p>
        </div>

        <div className='rounded-2xl border-2 border-black/50 bg-oat-cream p-4'>
          <div className='flex items-center gap-2 mb-2'>
            <PackageOpen className='w-4 h-4 text-oat-green' />
            <span className='text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground'>
              Prezenty
            </span>
          </div>
          <p className='text-sm'>
            Przy zamówieniu powyżej 100 zł dorzucamy extra herbatkę
            niespodziankę. Złap smak natury z każdym łykiem.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSystem
