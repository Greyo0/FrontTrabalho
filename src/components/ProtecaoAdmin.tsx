import { Navigate, Outlet, useLocation } from "react-router"

// Apenas demonstração: a autenticação real deve ser validada no servidor.
export const CHAVE_SESSAO_ADMIN = "aumigo_admin_demo"

export default function ProtecaoAdmin() {
  const localizacao = useLocation()
  const autenticado = sessionStorage.getItem(CHAVE_SESSAO_ADMIN) === "autenticado"
  return autenticado ? <Outlet /> : <Navigate to="/admin/login" replace state={{ origem: localizacao.pathname }} />
}
