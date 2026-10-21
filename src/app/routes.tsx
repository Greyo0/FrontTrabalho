import { useEffect } from "react"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation,
} from "react-router"

function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <Outlet />
}

function RootHydrateFallback() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#fffaf4]">
      <div
        className="h-10 w-10 animate-pulse rounded-[14px] bg-[#7663dd] shadow-[0_5px_0_#4d3b9b]"
        role="status"
        aria-label="Carregando página"
      />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    HydrateFallback: RootHydrateFallback,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("../pages/HomePage")
          return { Component }
        },
      },
      {
        path: "adotar",
        lazy: async () => {
          const { default: Component } = await import(
            "../pages/AdoptionFormPage"
          )
          return { Component }
        },
      },
      {
        path: "admin",
        lazy: async () => {
          const { default: Component } = await import(
            "../components/AdminLayout"
          )
          return { Component }
        },
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Component } = await import(
                "../pages/AdminAnimalsPage"
              )
              return { Component }
            },
          },
          {
            path: "historico",
            lazy: async () => {
              const { default: Component } = await import(
                "../pages/AdminHistoryPage"
              )
              return { Component }
            },
          },
        ],
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])
