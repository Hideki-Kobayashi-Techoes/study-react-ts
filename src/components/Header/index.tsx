import Link from "next/link";

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"},
  {href: "/counter", label: "Counter"},
  {href: "/input", label: "Input"},
  {href: "/loading", label: "Loading"},
]

export function Header() {
  return (
    <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href} className="hover:underline hover:underline-offset-4">
              {item.label}
            </Link>
          )
        })}
    </header>
  );
}
