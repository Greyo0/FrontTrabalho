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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])
