import { useState } from "react"
import { Link, NavLink, Outlet, useNavigate } from "react-router"
import { CHAVE_SESSAO_ADMIN } from "./ProtecaoAdmin"
import Brand from "./Brand"
import { Icon } from "./Icons"

const navigation = [
  { to: "/admin", label: "Cadastro de animais", icon: "paw", end: true },
  {
    to: "/admin/historico",
    label: "Adotantes",
    icon: "history",
    end: false,
  },
] as const

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navegar = useNavigate()
  function sair() {
    sessionStorage.removeItem(CHAVE_SESSAO_ADMIN)
    navegar("/admin/login", { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#f7f3fb] text-[#352a57] lg:grid lg:grid-cols-[280px_1fr]">
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-[#241b4d]/35 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col overflow-hidden bg-[#40327f] px-5 py-7 text-white transition-transform lg:sticky lg:top-0 lg:h-screen ${
          menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Brand light />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <Icon name="x" />
          </button>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="px-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/45">
            Administração
          </p>
          <nav className="mt-3 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-extrabold transition ${
                    isActive
                      ? "bg-white text-[#40327f] shadow-[0_8px_24px_rgba(24,15,70,0.16)]"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon name={item.icon} className="h-5 w-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <button type="button" onClick={sair} className="mt-auto mb-4 rounded-2xl border border-white/20 px-4 py-3 text-left text-sm font-extrabold text-white hover:bg-white/10">Sair da administração →</button>
        <div className="rounded-3xl bg-white/10 p-5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#8f7be8]">
            <Icon name="heart" className="h-5 w-5" filled />
          </span>
          <p className="font-display mt-4 text-lg font-bold">
            Cuidar também é organizar.
          </p>
          <p className="mt-2 text-xs leading-5 text-white/60">
            Mantenha os perfis e pedidos de adoção sempre atualizados.
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-[#dcd4ff] hover:text-white"
          >
            Ver site público
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-[#4c3d8f]/10 bg-[#f7f3fb]/90 px-5 backdrop-blur sm:px-8 lg:hidden">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#40327f] shadow-sm"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Icon name="menu" />
          </button>
          <span className="text-sm font-extrabold text-[#40327f]">
            Aumigo Administração
          </span>
        </header>
        <main className="mx-auto max-w-[1500px] p-5 sm:p-8 lg:p-10 xl:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
