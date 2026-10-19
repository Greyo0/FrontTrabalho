import { FormEvent, useMemo, useState } from "react"
import { Link } from "react-router"
import Brand from "../components/Brand"
import { Icon } from "../components/Icons"

const pets = [
  {
    id: 1,
    name: "Amora",
    kind: "Cachorros",
    detail: "Fêmea • 2 anos • Porte M",
    city: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1654053286388-f0aeca664cd2?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
  },
  {
    id: 2,
    name: "Bento",
    kind: "Cachorros",
    detail: "Macho • 1 ano • Porte P",
    city: "Campinas, SP",
    image:
      "https://images.unsplash.com/photo-1653356162236-47659138ba90?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
  },
  {
    id: 3,
    name: "Luna",
    kind: "Gatos",
    detail: "Fêmea • 8 meses • Porte P",
    city: "Sorocaba, SP",
    image:
      "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
  },
  {
    id: 4,
    name: "Chico",
    kind: "Gatos",
    detail: "Macho • 3 anos • Porte M",
    city: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1629491569394-e56b6a44ece8?crop=faces&fit=crop&fm=jpg&q=85&w=900&h=1050",
  },
]

export default function HomePage() {
  const [filter, setFilter] = useState("Todos")
  const [query, setQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])

  const visiblePets = useMemo(
    () =>
      pets.filter(
        (pet) =>
          (filter === "Todos" || pet.kind === filter) &&
          (pet.name.toLowerCase().includes(query.toLowerCase()) ||
            pet.city.toLowerCase().includes(query.toLowerCase())),
      ),
    [filter, query],
  )

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    document.querySelector("#animais")?.scrollIntoView({ behavior: "smooth" })
  }

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favorite) => favorite !== id)
        : [...current, id],
    )
  }

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#352a57]">
      <header className="border-b border-[#4c3d8f]/10 bg-[#fffaf4]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
            <a href="#animais" className="hover:text-[#7663dd]">
              Conheça os pets
            </a>
            <a href="#como-funciona" className="hover:text-[#7663dd]">
              Como funciona
            </a>
          </nav>
          <Link
            to="/adotar"
            className="rounded-full bg-[#40327f] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#7663dd]"
          >
            Quero adotar
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#e6ddff] blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7663dd]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#6854c6]">
                <Icon name="spark" className="h-4 w-4" />
                Uma conexão para a vida
              </div>
              <h1 className="font-display max-w-xl text-5xl leading-[0.98] font-bold tracking-[-0.055em] text-[#3d307a] sm:text-7xl">
                Tem um amor esperando{" "}
                <span className="text-[#8b78eb]">por você.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-[#665e79]">
                Encontre seu novo melhor amigo e transforme duas vidas com um
                gesto de carinho.
              </p>
              <form
                onSubmit={handleSearch}
                className="mt-8 flex max-w-xl flex-col gap-2 rounded-3xl bg-white p-2 shadow-[0_16px_45px_rgba(71,54,128,0.12)] sm:flex-row"
              >
                <label className="flex flex-1 items-center gap-3 px-4 py-2">
                  <Icon name="search" className="h-5 w-5 text-[#8b78eb]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none"
                    placeholder="Nome ou cidade"
                    aria-label="Buscar por nome ou cidade"
                  />
                </label>
                <button className="rounded-2xl bg-[#7663dd] px-6 py-3.5 text-sm font-extrabold text-white hover:bg-[#614fc1]">
                  Encontrar um amigo
                </button>
              </form>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -right-8 -top-7 h-32 w-32 rounded-full bg-[#f5b66f]" />
              <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#9a89f0]" />
              <div className="relative overflow-hidden rounded-[42px] bg-[#9b89ef] p-3 shadow-[0_30px_70px_rgba(65,48,122,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1573435567032-ff5982925350?crop=faces&fit=crop&fm=jpg&q=88&w=1200&h=1000"
                  alt="Cachorro e gato juntos"
                  className="h-[430px] w-full rounded-[32px] object-cover sm:h-[520px]"
                />
                <div className="absolute bottom-8 left-8 rounded-3xl bg-[#fffaf4]/95 p-4 shadow-lg">
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
        </section>

        <section id="animais" className="bg-[#8f7be8] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f3dfc8]">
                  Prontos para te conhecer
                </p>
                <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  Conheça alguns aumigos
                </h2>
              </div>
              <div className="flex self-start rounded-full bg-[#725fc9] p-1.5">
                {["Todos", "Cachorros", "Gatos"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2.5 text-sm font-extrabold ${
                      filter === item
                        ? "bg-[#fffaf4] text-[#4c3d8f]"
                        : "text-white"
                    }`}
                  >
                    {item}
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
                  <div className="relative h-72 overflow-hidden bg-[#eee8ff]">
                    <img
                      src={pet.image}
                      alt={`${pet.name}, disponível para adoção`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={() => toggleFavorite(pet.id)}
                      className={`absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full shadow-lg ${
                        favorites.includes(pet.id)
                          ? "bg-[#7663dd] text-white"
                          : "bg-white text-[#7663dd]"
                      }`}
                      aria-label={`Favoritar ${pet.name}`}
                    >
                      <Icon name="heart" filled={favorites.includes(pet.id)} />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-bold text-[#40327f]">
                      {pet.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-[#777083]">
                      {pet.detail}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[#4c3d8f]/10 pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-[#746c80]">
                        <Icon name="pin" className="h-4 w-4 text-[#8b78eb]" />
                        {pet.city}
                      </span>
                      <Link
                        to="/adotar"
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#40327f] text-white"
                        aria-label={`Tenho interesse em ${pet.name}`}
                      >
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7663dd]">
                Simples e seguro
              </p>
              <h2 className="font-display mt-3 text-4xl font-bold text-[#40327f]">
                Seu novo amigo está a 3 passos
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [
                  "search",
                  "Encontre",
                  "Conheça animais que combinam com a sua rotina.",
                ],
                [
                  "heart",
                  "Conecte-se",
                  "Preencha o formulário e converse com o protetor.",
                ],
                [
                  "shield",
                  "Adote",
                  "Finalize o processo responsável e comece uma história.",
                ],
              ].map(([icon, title, text], index) => (
                <article
                  key={title}
                  className="rounded-[28px] border border-[#4c3d8f]/10 bg-white p-7"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e9e2ff] text-[#6854c6]">
                    <Icon name={icon as "search" | "heart" | "shield"} />
                  </span>
                  <p className="mt-6 text-xs font-extrabold text-[#8b78eb]">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-[#40327f]">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#756d83]">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/adotar"
                className="inline-flex items-center gap-2 rounded-full bg-[#40327f] px-7 py-3.5 text-sm font-extrabold text-white hover:bg-[#7663dd]"
              >
                Preencher formulário
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#352a57] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Brand light />
          <p className="text-center text-xs font-semibold text-white/60">
            Conectando pessoas e animais com responsabilidade.
          </p>
        </div>
      </footer>
    </div>
  )
}
