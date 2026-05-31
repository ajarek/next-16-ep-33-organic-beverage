const RECIPES = [
  {
    title: "Klasyczne mleko owsiane",
    ingredients: [
      "1 szklanka płatków owsianych górskich",
      "3–4 szklanki zimnej wody",
      "szczypta soli",
    ],
    instructions: "Zblenduj 20–30 s, przecedź przez gazę lub sitko.",
    accent: "bg-[#FFF8E7]",
  },
  {
    title: "Mleko owsiane waniliowe",
    ingredients: [
      "1 szklanka płatków owsianych",
      "3 szklanki wody",
      "½ łyżeczki ekstraktu waniliowego",
      "1–2 daktyle lub łyżeczka syropu klonowego",
    ],
    instructions: "Zblenduj, przecedź, schłódź.",
    accent: "bg-[#EDF2FF]",
  },
  {
    title: "Mleko owsiane kakaowe",
    ingredients: [
      "1 szklanka płatków owsianych",
      "3 szklanki wody",
      "1 łyżka kakao",
      "1–2 daktyle",
    ],
    instructions: "Zblenduj krótko, dokładnie przecedź.",
    accent: "bg-[#F8E7FF]",
  },
  {
    title: "Mleko owsiane do kawy",
    ingredients: [
      "1 szklanka płatków owsianych",
      "2½ szklanki wody",
      "1 łyżeczka oleju rzepakowego lub kokosowego",
      "szczypta soli",
    ],
    instructions: "Idealne do spieniania, blenduj krótko.",
    accent: "bg-[#E8F8F0]",
  },
  {
    title: "Mleko owsiane cynamonowe",
    ingredients: [
      "1 szklanka płatków owsianych",
      "3 szklanki wody",
      "½ łyżeczki cynamonu",
      "1 daktyl lub miód",
    ],
    instructions: "Zblenduj i przecedź.",
    accent: "bg-[#FFF4E3]",
  },
]

export default function RecipesPage() {
  return (
    <main className='w-full flex-1 flex flex-col items-center py-10 md:py-16'>
      <section className='w-full max-w-7xl px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <div className='inline-flex items-center gap-2 bg-oat-yellow neo-border rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] text-sm font-black uppercase tracking-[0.3em] text-black mx-auto'>
            PRZEPISY
          </div>
          <h1 className='mt-8 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black'>
            5 prostych przepisów na
            <span className='block text-oat-blue'>mleko owsiane</span>
          </h1>
          <p className='mt-6 max-w-3xl mx-auto text-base md:text-lg text-neutral-700 leading-relaxed'>
            Przygotuj aksamitne, domowe mleko owsiane z prostych składników.
            Każdy przepis jest szybki, certyfikowany smakiem i idealny na ok. 1
            litr.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {RECIPES.map((recipe, index) => (
            <article
              key={recipe.title}
              className={`group rounded-[2rem] border-2 border-black bg-white p-6 shadow-[8px_8px_0px_#000] transition-transform duration-300 hover:-translate-y-1 ${recipe.accent}`}
            >
              <div className='mb-4 inline-flex items-center gap-3 rounded-full bg-black text-white px-4 py-2 text-xs font-black tracking-[0.2em] uppercase shadow-[3px_3px_0px_#000]'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-oat-yellow text-black'>
                  {index + 1}
                </span>
                {recipe.title}
              </div>

              <div className='space-y-4'>
                <div>
                  <p className='mb-3 text-sm uppercase font-black text-neutral-900 tracking-[0.18em]'>
                    Składniki
                  </p>
                  <ul className='space-y-2 pl-5 text-sm leading-6 text-neutral-700 list-disc'>
                    {recipe.ingredients.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className='mb-3 text-sm uppercase font-black text-neutral-900 tracking-[0.18em]'>
                    Sposób przygotowania
                  </p>
                  <p className='text-sm leading-7 text-neutral-700'>
                    {recipe.instructions}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className='mt-14 grid gap-6 lg:grid-cols-[1.4fr_0.8fr] items-start'>
          <div className='rounded-[2rem] border-2 border-black bg-oat-cream p-8 shadow-[8px_8px_0px_#000]'>
            <div className='inline-flex items-center gap-3 rounded-full bg-oat-blue text-white px-4 py-2 text-sm font-black uppercase tracking-[0.2em] shadow-[3px_3px_0px_#000]'>
              Wskazówki
            </div>
            <h2 className='mt-6 text-3xl sm:text-4xl font-black text-black tracking-tight'>
              Jak uzyskać najgładsze mleko owsiane
            </h2>
            <div className='mt-6 space-y-4 text-neutral-700 text-base leading-7'>
              <p>
                Używaj zimnej wody i blenduj krótko, żeby mleko nie było
                śluzowate.
              </p>
              <p>Przechowuj w lodówce do 3 dni, przed użyciem wstrząśnij.</p>
              <p className='font-semibold'>
                Opcjonalnie: do smaku możesz dodać odrobinę ekstraktu
                waniliowego, cynamonu lub syropu klonowego.
              </p>
            </div>
          </div>

          <aside className='rounded-[2rem] border-2 border-black bg-white p-8 shadow-[8px_8px_0px_#000]'>
            <div className='rounded-3xl bg-oat-yellow px-4 py-3 text-black font-black uppercase tracking-[0.2em] text-sm text-center shadow-[3px_3px_0px_#000]'>
              Szybki poradnik
            </div>
            <div className='mt-6 space-y-4 text-neutral-700 text-sm leading-7'>
              <div className='rounded-3xl bg-[#E8F5FF] p-4 neo-border-sm'>
                <p className='font-black text-black'>Blenduj krótko</p>
                <p>Im krócej, tym mniej śluzowato. 20–30 sekund wystarczy.</p>
              </div>
              <div className='rounded-3xl bg-[#E8F8F0] p-4 neo-border-sm'>
                <p className='font-black text-black'>Przecedź dokładnie</p>
                <p>Gazę, sitko lub torebkę do mleka roślinnego.</p>
              </div>
              <div className='rounded-3xl bg-[#FFF4E3] p-4 neo-border-sm'>
                <p className='font-black text-black'>Schłódź przed podaniem</p>
                <p>Najlepszy smak i tekstura po kilku godzinach w lodówce.</p>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  )
}
