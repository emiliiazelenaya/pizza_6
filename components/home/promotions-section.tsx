// components/home/promotions-section.tsx

import Image from "next/image";
import Link from "next/link";

const promoCards = [
  { id: 1, image: "/promo-small.png", alt: "Набор на двоих", title: "2 пиццы + напиток", tag: "-20%" },
  { id: 2, image: "/promo-small.png", alt: "Острый вечер", title: "Spicy combo", tag: "Hit" },
  { id: 3, image: "/promo-small.png", alt: "Обеденный сет", title: "Lunch lab", tag: "до 16:00" },
  { id: 4, image: "/promo-small.png", alt: "Большая компания", title: "Party box", tag: "4-6 гостей" },
];

export function PromotionsSection() {
  return (
    <section
      id="promotions"
      className="relative overflow-hidden px-4 pt-10 pb-12"
    >
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb347]">
            Combo zone
          </div>
          <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.04em] text-white sm:text-6xl">
            Готовые <span className="text-[#ffd38a]">комбо</span> и выгодные сеты
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          <Link
            href="#catalog"
            className="group relative block min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
          >
            <Image
              src="/promo-small.png"
              alt="Большое комбо"
              fill
              sizes="543px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="inline-flex rounded-full border border-[#ffb347]/25 bg-[#ff9f1a]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#ffd38a]">
                Сет недели
              </div>
              <h3 className="mt-4 max-w-md text-3xl font-black tracking-[-0.03em] text-white">
                Три пиццы и два соуса для шумного вечера
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                Удобный формат для компании: меньше выбора, больше удовольствия и
                заметная скидка на общий чек.
              </p>
            </div>
          </Link>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {promoCards.map((card) => (
              <Link
                key={card.id}
                href="#catalog"
                className="group relative block h-[198px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="257px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffd38a]">
                    {card.tag}
                  </div>
                  <div className="mt-3 text-lg font-black text-white">{card.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#catalog"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#12121a] transition hover:-translate-y-0.5 hover:bg-[#fff0d5]"
          >
            Все комбо и акции
          </Link>
        </div>
      </div>


      <div className="pointer-events-none absolute -right-[90px] -bottom-[20px] hidden opacity-35 xl:block">
        <Image
          src="/promo-girl.png"
          alt="Декоративный персонаж"
          width={500}
          height={500}
          className="h-auto w-[300px]"
        />
      </div>
    </section>
  );
}