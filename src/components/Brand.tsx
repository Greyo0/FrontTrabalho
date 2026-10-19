import { Link } from "react-router"
import { Icon } from "./Icons"

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5"
      aria-label="Aumigo início"
    >
      <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#7663dd] text-white shadow-[0_5px_0_#4d3b9b]">
        <Icon name="heart" className="h-5 w-5" filled />
      </span>
      <span
        className={`font-display text-2xl font-bold tracking-[-0.04em] ${
          light ? "text-white" : "text-[#40327f]"
        }`}
      >
        aumigo
      </span>
    </Link>
  )
}
