export type IconName = "arrow" | "check" | "heart" | "history" | "menu" | "paw" | "pin" | "plus" | "search" | "shield" | "spark" | "trash" | "users" | "x"

export function Icon({
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
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5M12 7v5l3 2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    paw: (
      <>
        <path d="M11.7 16.2c-1.4-2.1-4.1-2.4-5.6-.5-1.7 2.1-.2 5.3 2.5 5.3 1.1 0 2-.5 2.7-1.3.4-.5 1.1-.5 1.5 0 .7.8 1.6 1.3 2.7 1.3 2.7 0 4.2-3.2 2.5-5.3-1.5-1.9-4.2-1.6-5.6.5a.4.4 0 0 1-.7 0Z" />
        <ellipse cx="7" cy="9" rx="2" ry="2.7" />
        <ellipse cx="17" cy="9" rx="2" ry="2.7" />
        <ellipse cx="11.8" cy="5.3" rx="2" ry="2.7" />
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
    plus: <path d="M12 5v14M5 12h14" />,
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
    trash: (
      <>
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v5M14 11v5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
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
