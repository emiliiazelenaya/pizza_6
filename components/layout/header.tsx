import Link from "next/link";
import { Flame, MapPin, PhoneCall } from "lucide-react";

const navItems = [
  { label: "Новинки", href: "#new" },
  { label: "Каталог", href: "#catalog" },
  { label: "Комбо", href: "#promotions" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#footer" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090dcc]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] via-[#ff7a18] to-[#ff4d4d] shadow-[0_14px_30px_rgba(255,122,24,0.3)]">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-black uppercase tracking-[0.24em] text-white">
                  Slice Lab
                </div>
                <div className="text-sm font-medium text-white/55">
                  Fire baked pizza studio
                </div>
              </div>
            </Link>

            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 md:flex md:items-center md:gap-3">
              <MapPin className="h-4 w-4 text-[#ffb347]" />
              Москва
              <span className="h-1 w-1 rounded-full bg-[#ff7a18]" />
              32-38 минут
              <span className="h-1 w-1 rounded-full bg-[#ff7a18]" />
              4.9 рейтинг
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+74993918449"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ffb347]/25 bg-[#ff9f1a]/12 px-5 py-3 text-sm font-bold text-[#ffd38a] transition hover:border-[#ffb347]/55 hover:bg-[#ff9f1a]/18"
            >
              <PhoneCall className="h-4 w-4" />
              8 499 391-84-49
            </a>
            <button
              type="button"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#12121a] transition hover:-translate-y-0.5 hover:bg-[#fff0d5]"
            >
              Собрать заказ
            </button>
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/72">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 transition hover:border-[#ffb347]/30 hover:bg-[#ffb347]/10 hover:text-[#ffe1b0]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}