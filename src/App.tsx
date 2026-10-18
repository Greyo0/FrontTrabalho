import { FormEvent, useMemo, useState } from "react"

type IconName = "arrow" | "check" | "heart" | "menu" | "pin" | "search" | "shield" | "spark" | "user" | "x"

function Icon({
  name,
  className = "h-5 w-5",
  filled = false,
}: {
  name: IconName
  className?: string
  filled?: boolean
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 17h16" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.4 3.7L7 8.2l3.6 1.5L12 13.5l1.4-3.8L17 8.2l-3.6-1.5L12 3Z" />
        <path d="m5 15-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8L5 15Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const pets = [
  {
    id: 1,
    name: "Amora",
    kind: "Cachorros",
    detail: "Fêmea • 2 anos • Porte M",
    city: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1654053286388-f0aeca664cd2?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
    color: "#e9e2ff",
  },
  {
    id: 2,
    name: "Bento",
    kind: "Cachorros",
    detail: "Macho • 1 ano • Porte P",
    city: "Campinas, SP",
    image:
      "https://images.unsplash.com/photo-1653356162236-47659138ba90?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
    color: "#f7e9da",
  },
  {
    id: 3,
    name: "Luna",
    kind: "Gatos",
    detail: "Fêmea • 8 meses • Porte P",
    city: "Sorocaba, SP",
    image:
      "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
    color: "#ded5ff",
  },
  {
    id: 4,
    name: "Chico",
    kind: "Gatos",
    detail: "Macho • 3 anos • Porte M",
    city: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1629491569394-e56b6a44ece8?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
    color: "#f5e7d7",
  },
]

const filters = ["Todos", "Cachorros", "Gatos"]

export default function App() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [query, setQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [menuOpen, setMenuOpen] = useState(false)

  const visiblePets = useMemo(
    () =>
      pets.filter(
        (pet) =>
          (activeFilter === "Todos" || pet.kind === activeFilter) &&
          (pet.name.toLowerCase().includes(query.toLowerCase()) ||
            pet.city.toLowerCase().includes(query.toLowerCase())),
      ),
    [activeFilter, query],
  )

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    document.querySelector("#pets")?.scrollIntoView({ behavior: "smooth" })
  }

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favorite) => favorite !== id)
        : [...current, id],
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf4] text-[#352a57]">
      <header className="relative z-50 border-b border-[#4c3d8f]/10 bg-[#fffaf4]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#"
            className="flex items-center gap-2.5"
            aria-label="Aumigo início"
          >
            <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#7663dd] text-white shadow-[0_6px_0_#4d3b9b]">
              <Icon name="heart" className="h-5 w-5" filled />
            </span>
            <span className="font-display text-[1.55rem] font-bold tracking-[-0.04em] text-[#40327f]">
              aumigo
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
            <a className="transition-colors hover:text-[#7663dd]" href="#pets">
              Quero adotar
            </a>
            <a
              className="transition-colors hover:text-[#7663dd]"
              href="#como-funciona"
            >
              Como funciona
            </a>
            <a className="transition-colors hover:text-[#7663dd]" href="#sobre">
              Sobre nós
            </a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-[#4c3d8f]/15 transition hover:border-[#7663dd] hover:bg-white"
              aria-label={`${favorites.length} animais favoritos`}
            >
              <Icon name="heart" className="h-5 w-5" />
            </button>
            <button className="flex h-11 items-center gap-2 rounded-full bg-[#40327f] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#5545a2]">
              <Icon name="user" className="h-4 w-4" />
              Entrar
            </button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-[#eee8ff] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute inset-x-4 top-[74px] flex flex-col gap-1 rounded-3xl bg-white p-3 text-sm font-bold shadow-xl lg:hidden">
            {[
              ["Quero adotar", "#pets"],
              ["Como funciona", "#como-funciona"],
              ["Sobre nós", "#sobre"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 hover:bg-[#eee8ff]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="relative">
          <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-[#e6ddff] blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7663dd]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#6854c6] shadow-sm">
                <Icon name="spark" className="h-4 w-4" />
                Uma conexão para a vida
              </div>
              <h1 className="font-display max-w-xl text-[3.35rem] leading-[0.98] font-bold tracking-[-0.055em] text-[#3d307a] sm:text-7xl">
                Tem um amor esperando{" "}
                <span className="relative inline-block text-[#8b78eb]">
                  por você.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 270 15"
                    fill="none"
                  >
                    <path
                      d="M3 11C70 2 180 2 267 9"
                      stroke="#f1a85b"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-8 text-[#665e79]">
                Encontre seu novo melhor amigo e transforme duas vidas com um
                gesto de carinho.
              </p>

              <form
                onSubmit={handleSearch}
                className="mt-8 flex max-w-xl flex-col gap-2 rounded-[24px] bg-white p-2 shadow-[0_16px_45px_rgba(71,54,128,0.12)] sm:flex-row"
              >
                <label className="flex min-w-0 flex-1 items-center gap-3 px-4 py-2">
                  <Icon
                    name="search"
                    className="h-5 w-5 shrink-0 text-[#8b78eb]"
                  />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-[#9a93a7]"
                    placeholder="Nome ou cidade"
                    aria-label="Buscar por nome ou cidade"
                  />
                </label>
                <button className="rounded-[18px] bg-[#7663dd] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#614fc1]">
                  Encontrar um amigo
                </button>
              </form>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[#6e6680]">
                <span className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#dff2df] text-[#438448]">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  Adoção responsável
                </span>
                <span className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#dff2df] text-[#438448]">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  100% gratuito
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[660px]">
              <div className="absolute -right-8 -top-7 h-32 w-32 rounded-full bg-[#f5b66f]" />
              <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#9a89f0]" />
              <div className="relative overflow-hidden rounded-[42px] bg-[#9b89ef] p-3 shadow-[0_30px_70px_rgba(65,48,122,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1573435567032-ff5982925350?crop=faces&fit=crop&fm=jpg&q=88&w=1200&h=1000"
                  alt="Cachorro e gato juntos"
                  className="h-[430px] w-full rounded-[32px] object-cover sm:h-[540px]"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-[22px] bg-[#fffaf4]/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:w-[275px]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eee8ff] text-[#6c58ce]">
                      <Icon name="heart" className="h-5 w-5" filled />
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-[#40327f]">
                        +2.480 finais felizes
                      </p>
                      <p className="text-xs font-semibold text-[#756d83]">
                        e muitas histórias começando
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-10 grid h-16 w-16 rotate-6 place-items-center rounded-2xl bg-[#fffaf4] text-[#7663dd] shadow-xl sm:-right-7">
                <Icon name="spark" className="h-8 w-8" />
              </div>
            </div>
          </div>
        </section>

        <section id="pets" className="bg-[#8f7be8] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f3dfc8]">
                  Prontos para te conhecer
                </p>
                <h2 className="font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  Conheça alguns aumigos
                </h2>
              </div>
              <div className="flex rounded-full bg-[#725fc9] p-1.5">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2.5 text-sm font-extrabold transition ${
                      activeFilter === filter
                        ? "bg-[#fffaf4] text-[#4c3d8f]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visiblePets.map((pet) => (
                <article
                  key={pet.id}
                  className="group overflow-hidden rounded-[28px] bg-[#fffaf4] text-[#352a57] shadow-[0_18px_0_rgba(61,48,122,0.15)]"
                >
                  <div
                    className="relative h-72 overflow-hidden"
                    style={{ background: pet.color }}
                  >
                    <img
                      src={pet.image}
                      alt={`${pet.name}, disponível para adoção`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={() => toggleFavorite(pet.id)}
                      className={`absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full shadow-lg transition ${
                        favorites.includes(pet.id)
                          ? "bg-[#7663dd] text-white"
                          : "bg-white text-[#7663dd] hover:scale-105"
                      }`}
                      aria-label={`Favoritar ${pet.name}`}
                    >
                      <Icon
                        name="heart"
                        className="h-5 w-5"
                        filled={favorites.includes(pet.id)}
                      />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#40327f]">
                          {pet.name}
                        </h3>
                        <p className="mt-1 text-xs font-bold text-[#777083]">
                          {pet.detail}
                        </p>
                      </div>
                      <span className="rounded-full bg-[#eee8ff] px-2.5 py-1 text-[10px] font-extrabold uppercase text-[#6854c6]">
                        Vacinado
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-[#4c3d8f]/10 pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-[#746c80]">
                        <Icon name="pin" className="h-4 w-4 text-[#8b78eb]" />
                        {pet.city}
                      </span>
                      <button
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#40327f] text-white transition group-hover:bg-[#7663dd]"
                        aria-label={`Ver perfil de ${pet.name}`}
                      >
                        <Icon name="arrow" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visiblePets.length === 0 && (
              <div className="mt-10 rounded-3xl bg-white/10 p-10 text-center font-bold">
                Nenhum aumigo encontrado. Tente buscar por outro nome ou cidade.
              </div>
            )}

            <div className="mt-12 text-center">
              <button className="rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-extrabold transition hover:bg-white hover:text-[#4c3d8f]">
                Ver todos os animais
              </button>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-[#fffaf4] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#7663dd]">
                Simples, seguro e cheio de afeto
              </p>
              <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-[#40327f] sm:text-5xl">
                Seu novo amigo está a 3 passos
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: "search" as IconName,
                  title: "Encontre",
                  text: "Use os filtros e conheça os animais que combinam com a sua rotina.",
                },
                {
                  number: "02",
                  icon: "heart" as IconName,
                  title: "Conecte-se",
                  text: "Converse com o protetor e descubra tudo sobre o seu futuro amigo.",
                },
                {
                  number: "03",
                  icon: "shield" as IconName,
                  title: "Adote",
                  text: "Passe pelo processo responsável e dê início a uma linda história.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-[30px] border border-[#4c3d8f]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="absolute right-6 top-5 font-display text-5xl font-bold text-[#eee8ff]">
                    {step.number}
                  </span>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e9e2ff] text-[#6854c6]">
                    <Icon
                      name={step.icon}
                      className="h-6 w-6"
                      filled={step.icon === "heart"}
                    />
                  </div>
                  <h3 className="font-display mt-7 text-2xl font-bold text-[#40327f]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#756d83]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#f2dfcd]">
            <div className="grid items-center lg:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?crop=faces&fit=crop&fm=jpg&q=85&w=1100&h=800"
                alt="Cachorro e gato descansando juntos"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7663dd]">
                  Uma rede que cuida
                </p>
                <h2 className="font-display mt-4 text-4xl font-bold tracking-[-0.04em] text-[#40327f]">
                  Adoção muda o mundo de quem adota também.
                </h2>
                <p className="mt-5 leading-8 text-[#675f73]">
                  Conectamos protetores responsáveis a famílias prontas para
                  amar. Cada perfil é verificado para que a jornada seja segura
                  do primeiro contato ao primeiro carinho.
                </p>
                <a
                  href="#pets"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#40327f] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#7663dd]"
                >
                  Quero fazer parte
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#352a57] px-5 py-10 text-[#fffaf4] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#8f7be8]">
              <Icon name="heart" className="h-4 w-4" filled />
            </span>
            <span className="font-display text-xl font-bold">aumigo</span>
          </div>
          <p className="text-center text-xs font-semibold text-white/60">
            Feito para aproximar histórias, lares e muitos rabinhos felizes.
          </p>
          <p className="text-xs font-semibold text-white/60">© 2025 Aumigo</p>
        </div>
      </footer>
    </div>
  )
}
