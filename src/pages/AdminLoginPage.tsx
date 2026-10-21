import { useState, type FormEvent } from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router"
import Brand from "../components/Brand"
import { CHAVE_SESSAO_ADMIN } from "../components/ProtecaoAdmin"

export default function AdminLoginPage() {
  const navegar = useNavigate()
  const localizacao = useLocation()
  const [usuario, definirUsuario] = useState("")
  const [senha, definirSenha] = useState("")
  const [mostrarSenha, definirMostrarSenha] = useState(false)
  const [erro, definirErro] = useState("")
  const origem = (localizacao.state as { origem?: string } | null)?.origem
  const destino = origem?.startsWith("/admin/") && origem !== "/admin/login" ? origem : "/admin"

  if (sessionStorage.getItem(CHAVE_SESSAO_ADMIN) === "autenticado") {
    return <Navigate to="/admin" replace />
  }

  function entrar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    definirErro("")
    // Credenciais exclusivamente para demonstração local. NÃO usar em produção.
    if (usuario.trim() === "admin@aumigo.com" && senha === "AumigoDemo2026!") {
      sessionStorage.setItem(CHAVE_SESSAO_ADMIN, "autenticado")
      navegar(destino, { replace: true })
    } else {
      definirErro("E-mail ou senha incorretos. Confira os dados e tente novamente.")
    }
  }

  return (
    <div className="min-h-screen bg-[#fffaf4] px-5 py-10 text-[#40327f] sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Brand />
        <div className="mt-10 grid overflow-hidden rounded-[36px] bg-white shadow-[0_20px_70px_rgba(64,50,127,0.12)] md:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#40327f] p-9 text-white sm:p-12">
            <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#e4dcff]">Espaço administrativo</span>
            <h1 className="font-display mt-7 text-4xl font-bold leading-tight sm:text-5xl">Todo cuidado começa com carinho. 💜</h1>
            <p className="mt-5 text-base leading-7 text-white/75">Organize os perfis dos animais, acompanhe os adotantes e ajude cada aumigo a encontrar um lar.</p>
            <div className="mt-12 rounded-3xl bg-white/10 p-5 text-sm leading-6 text-white/85">🐾 Um lugar especial para quem transforma vidas.</div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#eee9ff] text-3xl">🔐</div>
            <h2 className="font-display text-3xl font-bold">Boas-vindas de volta!</h2>
            <p className="mt-2 text-sm text-[#81769c]">Entre com seus dados para acessar o painel.</p>
            <form className="mt-8 space-y-5" onSubmit={entrar}>
              <div><label htmlFor="email-admin" className="mb-2 block text-sm font-extrabold">E-mail</label><input id="email-admin" type="email" autoComplete="username" required value={usuario} onChange={evento => definirUsuario(evento.target.value)} placeholder="seu@email.com" className="w-full rounded-2xl border border-[#ded7ef] bg-[#faf8ff] px-4 py-3.5 outline-none focus:border-[#7663dd] focus:ring-2 focus:ring-[#7663dd]/20" /></div>
              <div><label htmlFor="senha-admin" className="mb-2 block text-sm font-extrabold">Senha</label><div className="relative"><input id="senha-admin" type={mostrarSenha ? "text" : "password"} autoComplete="current-password" required value={senha} onChange={evento => definirSenha(evento.target.value)} placeholder="Digite sua senha" className="w-full rounded-2xl border border-[#ded7ef] bg-[#faf8ff] px-4 py-3.5 pr-20 outline-none focus:border-[#7663dd] focus:ring-2 focus:ring-[#7663dd]/20" /><button type="button" onClick={() => definirMostrarSenha(!mostrarSenha)} className="absolute inset-y-0 right-4 text-xs font-extrabold text-[#7663dd]">{mostrarSenha ? "Ocultar" : "Mostrar"}</button></div></div>
              {erro && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{erro}</p>}
              <button type="submit" className="w-full rounded-2xl bg-[#7663dd] px-5 py-4 font-extrabold text-white shadow-[0_5px_0_#4d3b9b] transition hover:bg-[#6552c9] active:translate-y-1 active:shadow-none">Entrar no painel →</button>
            </form>
            <p className="mt-6 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900"><strong>Modo demonstração:</strong> admin@aumigo.com / AumigoDemo2026! — não utilize estas credenciais em produção.</p>
            <Link to="/" className="mt-7 text-center text-sm font-extrabold text-[#7663dd] hover:underline">← Voltar ao site</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
