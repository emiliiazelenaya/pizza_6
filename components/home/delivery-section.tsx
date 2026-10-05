// components/home/delivery-section.tsx

import {
  CreditCard,
  ReceiptText,
  MonitorCheck,
  Truck,
} from "lucide-react";

const deliveryCards = [
  {
    id: 1,
    icon: CreditCard,
    title: "Оплата онлайн",
    text: "Быстрая оплата картой или при получении без сложных шагов.",
  },
  {
    id: 2,
    icon: ReceiptText,
    title: "Честный состав",
    text: "Показываем ингредиенты, чтобы выбор был простым и понятным.",
  },
  {
    id: 3,
    icon: MonitorCheck,
    title: "Статус заказа",
    text: "Заказ собирается по шагам, а сайт остаётся лёгким и быстрым.",
  },
  {
    id: 4,
    icon: Truck,
    title: "Тёплая доставка",
    text: "Работаем по близким зонам, чтобы пицца приехала горячей.",
  },
];

export function DeliverySection() {
  return (
    <section id="delivery" className="px-4 pt-10 pb-14">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb347]">
            Delivery flow
          </div>
          <h2 className="mt-3 pb-2 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Оплата и доставка
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/58">
            Финальный блок теперь тоже в стиле бренда: карточки стали чище, а карта
            и контакты встроены в общую тёмную подачу.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {deliveryCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                className="relative rounded-[28px] border border-white/10 bg-white/[0.04] px-6 pt-8 pb-6 transition hover:-translate-y-1 hover:border-[#ffb347]/25 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff9f1a]/12">
                  <Icon className="h-6 w-6 stroke-[1.8] text-[#ffb347]" />
                </div>

                <h3 className="mt-5 text-lg font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {card.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-[1120px] gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb347]">
              Contact point
            </div>
            <div className="mt-4 text-2xl font-black text-white">
              Привозим быстро, отвечаем сразу
            </div>
            <p className="mt-4 text-sm leading-6 text-white/62">
              Закажите по телефону или соберите заказ прямо с лендинга. Новый дизайн
              делает акценты понятнее и лучше ведёт к действию.
            </p>
            <a
              href="tel:+74993918449"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#12121a] transition hover:bg-[#fff0d5]"
            >
              8 499 391-84-49
            </a>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=55.690797,37.611128&z=16&output=embed"
            width="100%"
            height="325"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[325px] w-full grayscale-[0.2] invert-[0.92] hue-rotate-180"
          />
          </div>
        </div>
      </div>
    </section>
  );
}