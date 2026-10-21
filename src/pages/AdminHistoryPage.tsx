import { useMemo, useState } from "react"
import { Icon } from "../components/Icons"

const requests = [
  {
    id: 1,
    name: "Mariana Costa",
    email: "mariana@email.com",
    phone: "(11) 98765-4321",
    city: "São Paulo, SP",
    interest: "Amora",
    date: "18 out. 2026",
    status: "Novo",
    message: "Quero adotar porque tenho espaço e tempo para oferecer carinho e cuidado. Estou preparado para assumir essa responsabilidade.",
  },
  {
    id: 2,
    name: "Rafael Martins",
    email: "rafael@email.com",
    phone: "(19) 99821-7634",
    city: "Campinas, SP",
    interest: "Bento",
    date: "17 out. 2026",
    status: "Em contato",
    message: "Sempre gostei de animais e quero oferecer um lar seguro, com passeios, atenção e acompanhamento veterinário.",
  },
  {
    id: 3,
    name: "Ana Clara Silva",
    email: "anaclara@email.com",
    phone: "(15) 99143-2208",
    city: "Sorocaba, SP",
    interest: "Luna",
    date: "15 out. 2026",
    status: "Concluído",
    message: "Quero dar uma vida confortável e cheia de carinho para um animal que precise de uma família.",
  },
  {
    id: 4,
    name: "Felipe Souza",
    email: "felipe@email.com",
    phone: "(11) 97734-9088",
    city: "São Paulo, SP",
    interest: "Cachorro",
    date: "12 out. 2026",
    status: "Em contato",
    message: "Minha família está de acordo com a adoção e temos rotina para cuidar de um cachorro com responsabilidade.",
  },
]

export default function AdminHistoryPage() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("Todos")
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredRequests = useMemo(
    () =>
      requests.filter(
        (request) =>
          (filter === "Todos" || request.status === filter) &&
          [request.name, request.email, request.interest].some((value) =>
            value.toLowerCase().includes(query.toLowerCase()),
          ),
      ),
    [filter, query],
  )

  return (
    <div>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7663dd]">
          Painel administrativo
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold tracking-[-0.035em] text-[#40327f] sm:text-4xl">
          Adotantes
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#81798d]">
          Consulte as pessoas que preencheram o formulário e acompanhe cada
          solicitação.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["users", "Total de pedidos", "24", "bg-[#e9e2ff] text-[#6854c6]"],
          ["spark", "Novos esta semana", "08", "bg-[#fff0dd] text-[#b36624]"],
          ["heart", "Adoções concluídas", "12", "bg-[#e4f5eb] text-[#28764a]"],
        ].map(([icon, label, value, color]) => (
          <article
            key={label}
            className="flex items-center gap-4 rounded-[24px] border border-[#4c3d8f]/10 bg-white p-5"
          >
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${color}`}
            >
              <Icon
                name={icon as "users" | "spark" | "heart"}
                className="h-5 w-5"
                filled={icon === "heart"}
              />
            </span>
            <div>
              <p className="text-xs font-bold text-[#8a8396]">{label}</p>
              <p className="font-display mt-1 text-2xl font-bold text-[#40327f]">
                {value}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8 overflow-hidden rounded-[28px] border border-[#4c3d8f]/10 bg-white shadow-[0_18px_50px_rgba(71,54,128,0.06)]">
        <div className="flex flex-col gap-4 border-b border-[#4c3d8f]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#40327f]">
              Solicitações recebidas
            </h2>
            <p className="mt-1 text-xs font-semibold text-[#8a8396]">
              Dados enviados pelo formulário de adoção
            </p>
          </div>
          <label className="flex h-11 w-full items-center gap-2 rounded-2xl border border-[#4c3d8f]/12 bg-[#fffaf4] px-4 sm:max-w-xs">
            <Icon name="search" className="h-4 w-4 text-[#8b78eb]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#40327f] outline-none placeholder:text-[#a19aaa]"
              placeholder="Buscar nome, e-mail ou pet"
              aria-label="Buscar solicitações"
            />
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto px-5 py-4 sm:px-6">
          {["Todos", "Novo", "Em contato", "Concluído"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-extrabold transition ${
                filter === item
                  ? "bg-[#40327f] text-white"
                  : "bg-[#f3eff9] text-[#746c80] hover:bg-[#e9e2ff]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead>
              <tr className="bg-[#f3eff9] text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#81798d]">
                <th className="px-6 py-4">Candidato</th>
                <th className="px-4 py-4">Contato</th>
                <th className="px-4 py-4">Cidade</th>
                <th className="px-4 py-4">Interesse</th>
                <th className="px-4 py-4">Data</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#4c3d8f]/8">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-[#fffaf4]/80">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e9e2ff] font-display text-sm font-bold text-[#6854c6]">
                        {request.name
                          .split(" ")
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(expandedId === request.id ? null : request.id)
                        }
                        aria-expanded={expandedId === request.id}
                        className="text-left font-bold text-[#40327f] hover:text-[#7663dd] hover:underline"
                      >
                        {request.name}
                        <span className="ml-2 inline-block text-xs text-[#8a8396]">
                          {expandedId === request.id ? "−" : "+"}
                        </span>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <p className="text-sm font-semibold text-[#5f576f]">
                      {request.email}
                    </p>
                    <p className="mt-1 text-xs text-[#8a8396]">
                      {request.phone}
                    </p>
                  </td>
                  <td className="px-4 py-5 text-sm text-[#746c80]">
                    {request.city}
                  </td>
                  <td className="px-4 py-5 text-sm font-bold text-[#6854c6]">
                    {request.interest}
                  </td>
                  <td className="px-4 py-5 text-sm text-[#746c80]">
                    {request.date}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-extrabold ${
                        request.status === "Novo"
                          ? "bg-[#eee9ff] text-[#6854c6]"
                          : request.status === "Concluído"
                            ? "bg-[#e4f5eb] text-[#28764a]"
                            : "bg-[#fff0dd] text-[#a85f22]"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
                {expandedId === request.id && (
                  <tr key={`${request.id}-details`}>
                    <td colSpan={6} className="px-6 pb-6">
                      <div className="rounded-2xl border border-[#8f7be8]/20 bg-[#fffaf4] p-5 sm:p-6">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <h3 className="font-display text-lg font-bold text-[#40327f]">
                            Ficha do adotante
                          </h3>
                          <button
                            type="button"
                            onClick={() => setExpandedId(null)}
                            className="rounded-full px-3 py-1 text-xs font-bold text-[#6854c6] hover:bg-[#e9e2ff]"
                          >
                            Fechar
                          </button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#8a8396]">Nome completo</p>
                            <p className="mt-1 text-sm font-semibold text-[#40327f]">{request.name}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#8a8396]">E-mail</p>
                            <p className="mt-1 text-sm font-semibold text-[#40327f]">{request.email}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#8a8396]">WhatsApp</p>
                            <p className="mt-1 text-sm font-semibold text-[#40327f]">{request.phone}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#8a8396]">Cidade</p>
                            <p className="mt-1 text-sm font-semibold text-[#40327f]">{request.city}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#8a8396]">Interesse</p>
                            <p className="mt-1 text-sm font-semibold text-[#40327f]">{request.interest}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#8a8396]">Data da solicitação</p>
                            <p className="mt-1 text-sm font-semibold text-[#40327f]">{request.date}</p>
                          </div>
                        </div>
                        <div className="mt-5 rounded-xl border border-[#4c3d8f]/10 bg-white p-4">
                          <p className="text-xs font-extrabold uppercase tracking-wide text-[#7663dd]">
                            Por que você quer adotar?
                          </p>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#5f576f]">
                            {request.message}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              ))}
            </tbody>
          </table>
        </div>
        {filteredRequests.length === 0 && (
          <div className="px-6 py-14 text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#f3eff9] text-[#8b78eb]">
              <Icon name="search" />
            </span>
            <p className="mt-3 text-sm font-bold text-[#746c80]">
              Nenhuma solicitação encontrada.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
