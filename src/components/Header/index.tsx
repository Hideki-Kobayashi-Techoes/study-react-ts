import { NAV_ITEMS } from "@/lib/nav_items";
import Link from "next/link";

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
