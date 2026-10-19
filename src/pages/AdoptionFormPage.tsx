import { FormEvent, useState } from "react"
import { Link } from "react-router"
import Brand from "../components/Brand"
import { Icon } from "../components/Icons"

const inputClass =
  "mt-2 h-12 w-full rounded-2xl border border-[#4c3d8f]/15 bg-[#fffaf4] px-4 text-sm font-semibold text-[#40327f] outline-none transition placeholder:text-[#a29baa] focus:border-[#7663dd] focus:ring-4 focus:ring-[#7663dd]/10"

export default function AdoptionFormPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf4] px-5 py-8 text-[#352a57] sm:px-8 sm:py-12">
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#e9e2ff] blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-[#f2dfcd] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-8 flex items-center justify-between">
          <Brand />
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-extrabold text-[#6854c6] hover:text-[#40327f]"
          >
            <span className="rotate-180">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
            Voltar para início
          </Link>
        </header>

        <div className="overflow-hidden rounded-[32px] border border-[#4c3d8f]/10 bg-white shadow-[0_24px_70px_rgba(71,54,128,0.12)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="relative overflow-hidden bg-[#8f7be8] p-8 text-white sm:p-10">
              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]">
                  Formulário de interesse
                </span>
                <h1 className="font-display mt-6 text-4xl leading-tight font-bold tracking-[-0.04em]">
                  Vamos encontrar seu novo melhor amigo?
                </h1>
                <p className="mt-4 leading-7 text-white/80">
                  Conte um pouco sobre você. Leva menos de 3 minutos e nos ajuda
                  a fazer uma conexão cheia de carinho.
                </p>
                <div className="mt-10 space-y-5 text-sm font-bold">
                  {[
                    "Seus dados ficam protegidos",
                    "Entraremos em contato por WhatsApp",
                    "Sem compromisso ou cobrança",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#fffaf4] text-[#6854c6]">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <Icon
                name="heart"
                filled
                className="absolute -bottom-12 -right-10 h-56 w-56 rotate-[-12deg] text-white/10"
              />
            </aside>

            <section className="p-6 sm:p-10">
              {submitted ? (
                <div
                  className="flex min-h-[560px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-[#e9e2ff] text-[#6854c6]">
                    <Icon name="check" className="h-9 w-9" />
                  </span>
                  <h2 className="font-display mt-6 text-3xl font-bold text-[#40327f]">
                    Formulário enviado!
                  </h2>
                  <p className="mt-3 max-w-sm leading-7 text-[#756d83]">
                    Recebemos suas informações. Nossa equipe entrará em contato
                    em breve para conversar sobre a adoção.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link
                      to="/"
                      className="rounded-full border border-[#40327f]/15 px-6 py-3 text-sm font-extrabold text-[#40327f]"
                    >
                      Voltar ao início
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full bg-[#40327f] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#7663dd]"
                    >
                      Enviar outra resposta
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#7663dd]">
                      Seus dados
                    </p>
                    <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[#40327f]">
                      Fale um pouco sobre você
                    </h2>
                    <p className="mt-2 text-sm text-[#81798d]">
                      Todos os campos são importantes para conhecermos seu
                      perfil.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                      <label className="text-sm font-extrabold text-[#554d67] sm:col-span-2">
                        Nome completo
                        <input
                          className={inputClass}
                          name="name"
                          placeholder="Como podemos te chamar?"
                          required
                        />
                      </label>
                      <label className="text-sm font-extrabold text-[#554d67]">
                        E-mail
                        <input
                          className={inputClass}
                          type="email"
                          name="email"
                          placeholder="voce@email.com"
                          required
                        />
                      </label>
                      <label className="text-sm font-extrabold text-[#554d67]">
                        WhatsApp
                        <input
                          className={inputClass}
                          type="tel"
                          name="phone"
                          placeholder="(00) 00000-0000"
                          required
                        />
                      </label>
                      <label className="text-sm font-extrabold text-[#554d67]">
                        Cidade
                        <input
                          className={inputClass}
                          name="city"
                          placeholder="Sua cidade"
                          required
                        />
                      </label>
                      <label className="text-sm font-extrabold text-[#554d67]">
                        Quero adotar
                        <select className={inputClass} name="pet" required>
                          <option value="">Selecione</option>
                          <option value="dog">Um cachorro</option>
                          <option value="cat">Um gato</option>
                          <option value="either">
                            Estou aberto(a) aos dois
                          </option>
                        </select>
                      </label>
                      <label className="text-sm font-extrabold text-[#554d67] sm:col-span-2">
                        Por que você quer adotar?
                        <textarea
                          className={`${inputClass} h-28 resize-none py-3`}
                          name="message"
                          placeholder="Conte brevemente sobre sua motivação e rotina..."
                          required
                        />
                      </label>
                    </div>
                    <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#756d83]">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 accent-[#7663dd]"
                      />
                      Concordo em receber contato da equipe Aumigo sobre o
                      processo de adoção.
                    </label>
                    <button
                      type="submit"
                      className="mt-7 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#7663dd] px-6 text-sm font-extrabold text-white shadow-[0_7px_0_#4d3b9b] transition hover:-translate-y-0.5 hover:bg-[#6854c6] active:translate-y-1 active:shadow-none"
                    >
                      Enviar formulário
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </form>
                </>
              )}
            </section>
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-semibold text-[#8a8396]">
          Aumigo • Conectando pessoas e animais com responsabilidade
        </p>
      </div>
    </main>
  )
}
