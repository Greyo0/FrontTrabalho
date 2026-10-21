import { FormEvent, useState } from "react"
import { Icon } from "../components/Icons"

type Animal = {
  id: number
  name: string
  species: string
  sex: string
  age: string
  size: string
  city: string
  state: string
  available: boolean
  image: string
}

const initialAnimals: Animal[] = [
  {
    id: 1,
    name: "Amora",
    species: "Cachorro",
    sex: "Fêmea",
    age: "2 anos",
    size: "Médio",
    city: "São Paulo",
    state: "SP",
    available: true,
    image:
      "https://images.unsplash.com/photo-1724367281416-cf18867ad712?crop=faces&fit=crop&fm=jpg&q=80&w=240&h=240",
  },
  {
    id: 2,
    name: "Luna",
    species: "Gato",
    sex: "Fêmea",
    age: "8 meses",
    size: "Pequeno",
    city: "Sorocaba",
    state: "SP",
    available: true,
    image:
      "https://images.unsplash.com/photo-1594387992816-65f5d74c1de0?crop=faces&fit=crop&fm=jpg&q=80&w=240&h=240",
  },
  {
    id: 3,
    name: "Bento",
    species: "Cachorro",
    sex: "Macho",
    age: "1 ano",
    size: "Pequeno",
    city: "Campinas",
    state: "SP",
    available: false,
    image:
      "https://images.unsplash.com/photo-1724367236214-e4f50691c27c?crop=faces&fit=crop&fm=jpg&q=80&w=240&h=240",
  },
]

const inputClass =
  "mt-2 h-12 w-full rounded-2xl border border-[#4c3d8f]/12 bg-[#fffaf4] px-4 text-sm font-bold text-[#40327f] outline-none transition placeholder:font-semibold placeholder:text-[#a19aaa] focus:border-[#7663dd] focus:ring-4 focus:ring-[#7663dd]/10"

export default function AdminAnimalsPage() {
  const [animals, setAnimals] = useState(initialAnimals)
  const [notice, setNotice] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name"))
    const image = String(data.get("image"))

    setAnimals((current) => [
      {
        id: Date.now(),
        name,
        species: String(data.get("species")),
        sex: String(data.get("sex")),
        age: String(data.get("age")),
        size: String(data.get("size")),
        city: String(data.get("city")),
        state: String(data.get("state")).toUpperCase(),
        available: data.get("available") === "true",
        image:
          image ||
          "https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=faces&fit=crop&fm=jpg&q=80&w=240&h=240",
      },
      ...current,
    ])
    form.reset()
    setNotice(`${name} foi adicionado à listagem.`)
    window.setTimeout(() => setNotice(""), 3500)
  }

  function removeAnimal(animal: Animal) {
    if (window.confirm(`Remover ${animal.name} da listagem?`)) {
      setAnimals((current) => current.filter((item) => item.id !== animal.id))
      setNotice(`${animal.name} foi removido da listagem.`)
      window.setTimeout(() => setNotice(""), 3500)
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7663dd]">
            Painel administrativo
          </p>
          <h1 className="font-display mt-2 text-3xl font-bold tracking-[-0.035em] text-[#40327f] sm:text-4xl">
            Cadastro de animais
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#81798d]">
            Cadastre novos aumigos e acompanhe quem está disponível para adoção.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="rounded-2xl border border-[#4c3d8f]/10 bg-white px-4 py-3">
            <p className="text-xs font-bold text-[#8a8396]">Cadastrados</p>
            <p className="font-display text-2xl font-bold text-[#40327f]">
              {animals.length}
            </p>
          </div>
          <div className="rounded-2xl bg-[#e9e2ff] px-4 py-3">
            <p className="text-xs font-bold text-[#7663dd]">Disponíveis</p>
            <p className="font-display text-2xl font-bold text-[#40327f]">
              {animals.filter((animal) => animal.available).length}
            </p>
          </div>
        </div>
      </div>

      {notice && (
        <div
          role="status"
          className="mt-6 flex items-center gap-3 rounded-2xl border border-[#7663dd]/15 bg-[#eee9ff] px-4 py-3 text-sm font-bold text-[#5846b0]"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#7663dd] text-white">
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          {notice}
        </div>
      )}

      <section className="mt-8 rounded-[28px] border border-[#4c3d8f]/10 bg-white p-5 shadow-[0_18px_50px_rgba(71,54,128,0.07)] sm:p-7">
        <div className="flex items-center gap-3 border-b border-[#4c3d8f]/10 pb-5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e9e2ff] text-[#6854c6]">
            <Icon name="plus" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-[#40327f]">
              Novo animal
            </h2>
            <p className="text-xs font-semibold text-[#8a8396]">
              Preencha os dados que aparecerão no site
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid gap-x-4 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
            <label className="text-sm font-extrabold text-[#554d67] xl:col-span-2">
              Nome do animal
              <input
                className={inputClass}
                name="name"
                placeholder="Ex.: Amora"
                required
              />
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Espécie
              <select className={inputClass} name="species" required>
                <option value="">Selecione</option>
                <option>Cachorro</option>
                <option>Gato</option>
              </select>
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Sexo
              <select className={inputClass} name="sex" required>
                <option value="">Selecione</option>
                <option>Fêmea</option>
                <option>Macho</option>
              </select>
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Idade
              <input
                className={inputClass}
                name="age"
                placeholder="Ex.: 2 anos"
                required
              />
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Porte
              <select className={inputClass} name="size" required>
                <option value="">Selecione</option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </select>
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Características
              <input
                className={inputClass}
                name="traits"
                placeholder="Dócil e brincalhão"
                required
              />
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Vacinas
              <input
                className={inputClass}
                name="vaccines"
                placeholder="Em dia"
                required
              />
            </label>
            <label className="text-sm font-extrabold text-[#554d67] xl:col-span-2">
              Cidade
              <input
                className={inputClass}
                name="city"
                placeholder="Cidade"
                required
              />
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              UF
              <input
                className={inputClass}
                name="state"
                maxLength={2}
                placeholder="SP"
                required
              />
            </label>
            <label className="text-sm font-extrabold text-[#554d67]">
              Disponível?
              <select className={inputClass} name="available" required>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </label>
            <label className="text-sm font-extrabold text-[#554d67] md:col-span-2 xl:col-span-4">
              URL da imagem do animal
              <input
                className={inputClass}
                type="url"
                name="image"
                placeholder="https://... (opcional)"
              />
            </label>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#7663dd] px-6 text-sm font-extrabold text-white shadow-[0_6px_0_#4d3b9b] transition hover:-translate-y-0.5 hover:bg-[#6854c6] active:translate-y-1 active:shadow-none"
            >
              <Icon name="plus" className="h-4 w-4" />
              Cadastrar animal
            </button>
          </div>
        </form>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#40327f]">
              Animais cadastrados
            </h2>
            <p className="mt-1 text-sm text-[#8a8396]">
              Gerencie os perfis visíveis na vitrine
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#4c3d8f]/10 bg-white shadow-[0_18px_50px_rgba(71,54,128,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f3eff9] text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#81798d]">
                  <th className="px-6 py-4">Animal</th>
                  <th className="px-4 py-4">Espécie</th>
                  <th className="px-4 py-4">Perfil</th>
                  <th className="px-4 py-4">Localização</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4c3d8f]/8">
                {animals.map((animal) => (
                  <tr key={animal.id} className="hover:bg-[#fffaf4]/80">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={animal.image}
                          alt=""
                          className="h-12 w-12 rounded-2xl object-cover"
                        />
                        <span className="font-display font-bold text-[#40327f]">
                          {animal.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-bold text-[#5f576f]">
                      {animal.species}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#746c80]">
                      {animal.sex} • {animal.age} • {animal.size}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#746c80]">
                      {animal.city}, {animal.state}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-extrabold ${
                          animal.available
                            ? "bg-[#e4f5eb] text-[#28764a]"
                            : "bg-[#f0edf4] text-[#746c80]"
                        }`}
                      >
                        {animal.available ? "Disponível" : "Indisponível"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => removeAnimal(animal)}
                        className="inline-grid h-10 w-10 place-items-center rounded-xl text-[#a74d62] transition hover:bg-[#fdecef]"
                        aria-label={`Excluir ${animal.name}`}
                      >
                        <Icon name="trash" className="h-4.5 w-4.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {animals.length === 0 && (
            <div className="px-6 py-14 text-center text-sm font-bold text-[#8a8396]">
              Nenhum animal cadastrado.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
