import Link from "next/link";
import { Flame, Mail, MapPin, PhoneCall, Send } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    href: "#footer",
    label: "Social",
    icon: Send,
  },
  {
    id: 2,
    href: "mailto:hello@slicelab.ru",
    label: "Email",
    icon: Mail,
  },
  {
    id: 3,
    href: "tel:+74993918449",
    label: "Phone",
    icon: PhoneCall,
  },
];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden px-4 pt-6 pb-10">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="grid gap-8 rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] via-[#ff7a18] to-[#ff4d4d] shadow-[0_14px_30px_rgba(255,122,24,0.3)]">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-black uppercase tracking-[0.22em] text-white">
                  Slice Lab
                </div>
                <div className="text-sm text-white/55">
                  Авторская пицца для вечеров, встреч и быстрых заказов.
                </div>
              </div>
            </Link>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                <div className="text-sm text-white/45">График</div>
                <div className="mt-2 text-lg font-bold text-white">11:00 - 23:00</div>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                <div className="text-sm text-white/45">Среднее время</div>
                <div className="mt-2 text-lg font-bold text-white">32 минуты</div>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                <div className="text-sm text-white/45">Бесплатно от</div>
                <div className="mt-2 text-lg font-bold text-white">990 ₽</div>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 text-white/68">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#ffb347]" />
              <p className="max-w-xl text-sm leading-6">
                Москва, проспект Вернадского, 86В. Работаем по району и ближайшим
                зонам доставки, чтобы привозить пиццу горячей и хрустящей.
              </p>
            </div>

            <p className="mt-8 text-sm font-medium text-white/38">
              Все права защищены © 2026 Slice Lab
            </p>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-xl font-black uppercase tracking-[0.08em] text-white">
              На связи каждый день
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/62">
              Поможем подобрать вкус, собрать комбо на компанию и быстро оформить
              заказ без лишних кликов.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/78 transition hover:-translate-y-0.5 hover:border-[#ffb347]/35 hover:bg-[#ffb347]/10 hover:text-white"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </Link>
                );
              })}
            </div>

            <Link
              href="mailto:hello@slicelab.ru"
              className="mt-4 flex h-14 w-full items-center justify-center rounded-2xl bg-white px-6 text-sm font-bold text-[#101019] transition hover:-translate-y-0.5 hover:bg-[#fff0d5]"
            >
              Написать в Slice Lab
            </Link>

            <a
              href="tel:+74993918449"
              className="mt-8 inline-block text-3xl font-black tracking-[0.02em] text-[#ffd38a] transition hover:text-[#fff1cc]"
            >
              8 499 391-84-49
            </a>

            <div className="mt-5 rounded-[24px] border border-[#ffb347]/20 bg-[#ff9f1a]/8 p-5">
              <div className="text-sm font-semibold text-[#ffd38a]">
                Лаборатория вкуса
              </div>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Тонкое тесто, огонь каменной печи и фирменные соусы без скучной
                классики.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}