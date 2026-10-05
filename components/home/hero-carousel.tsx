"use client";

// components/home/hero-carousel.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  id: number;
  image: string;
  alt: string;
};

const slides: Slide[] = [
  { id: 1, image: "/banner-1.png", alt: "Слайс за 149 рублей" },
  { id: 2, image: "/banner-2.png", alt: "Fibo yellow" },
  { id: 3, image: "/banner-3.png", alt: "Fibo dark" },
  { id: 4, image: "/banner-1.png", alt: "Слайс за 149 рублей" },
];

export function HeroCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const visibleSlides = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => {
      return slides[(startIndex + i) % slides.length];
    });
  }, [startIndex]);

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 1) % slides.length);
  };

  const variants = {
    enter: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? 40 : -40,
      scale: 0.985,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? -40 : 40,
      scale: 0.985,
    }),
  };

  return (
    <section className="px-4 pt-6 pb-8 sm:pt-8">
      <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,145,77,0.18),rgba(255,255,255,0.03)_45%,rgba(255,122,24,0.08))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb347]/25 bg-[#ff9f1a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffd38a]">
            <Sparkles className="h-4 w-4" />
            Новый бренд
          </div>

          <h1 className="mt-6 max-w-[680px] text-4xl font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl xl:text-7xl">
            Slice Lab.
            <span className="block text-[#ffd38a]">Горячая пицца без скучных решений.</span>
          </h1>

          <p className="mt-5 max-w-[560px] text-base leading-7 text-white/68 sm:text-lg">
            Полностью обновлённый сайт, быстрый каталог и авторские вкусы: от
            трюфельной пепперони до острых миксов для вечера с друзьями.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#12121a] transition hover:-translate-y-0.5 hover:bg-[#fff0d5]"
            >
              Смотреть меню
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#promotions"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-[#ffb347]/35 hover:bg-[#ffb347]/10"
            >
              Забрать комбо
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "15+", label: "авторских рецептов" },
              { value: "32 мин", label: "средняя доставка" },
              { value: "4.9", label: "оценка гостей" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/8 bg-black/20 p-4"
              >
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="mt-1 text-sm text-white/48">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visibleSlides.map((slide, index) => {
              const isSide = index === 0 || index === 3;

              return (
                <motion.div
                  key={`${slide.id}-${startIndex}-${index}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className={`relative shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 ${
                    index === 1 || index === 2 ? "h-[220px] w-[320px]" : "h-[220px] w-[220px]"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority
                  />

                  {isSide && (
                    <div className="pointer-events-none absolute inset-0 z-10 bg-black/35" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="hidden gap-5 lg:grid">
          <div className="grid items-center gap-4 xl:grid-cols-[220px_1fr_220px]">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Предыдущий слайд"
              className="order-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:border-[#ffb347]/40 hover:bg-[#ffb347]/12 xl:order-1"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="order-1 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/62 xl:order-2">
              <Star className="h-4 w-4 text-[#ffd38a]" />
              Сезонный акцент: острые, сливочные и дымные вкусы
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Следующий слайд"
              className="order-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:border-[#ffb347]/40 hover:bg-[#ffb347]/12"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden items-center grid-cols-[180px_1fr_1fr_180px] gap-4 lg:grid">
          {visibleSlides.map((slide, index) => {
            const isSide = index === 0 || index === 3;

            return (
              <div
                key={`wrapper-${index}`}
                className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] ${
                  isSide ? "h-[360px]" : "h-[460px]"
                }`}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${slide.id}-${startIndex}-${index}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      priority
                    />

                    {isSide && (
                      <>
                        <div className="pointer-events-none absolute inset-0 z-10 bg-black/45" />
                      </>
                    )}
                    <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffd38a]">
                        Slice drop 0{index + 1}
                      </div>
                      <div className="mt-2 text-lg font-black text-white">
                        {slide.alt}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}