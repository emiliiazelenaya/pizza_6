// components/home/new-items.tsx

import Image from "next/image";
import Link from "next/link";
import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function NewItems() {
  const newProducts = await db
    .select()
    .from(products)
    .where(eq(products.isNew, true))
    .orderBy(desc(products.id))
    .limit(4);

  return (
    <section id="new" className="px-4 pt-6 pb-8">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb347]">
              Fresh drop
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Новинки недели
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/58">
            Первые позиции, которые гости замечают в обновлённом меню. Быстро,
            ярко и с акцентом на вкус.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {newProducts.map((product) => (
            <Link
              key={product.id}
              href="#catalog"
              className="group flex items-center rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-[#ffb347]/25 hover:bg-white/[0.06]"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-black/20">
                <Image
                  src={`/${product.image}`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="ml-4 min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffb347]">
                  New
                </div>
                <h3 className="mt-1 truncate text-base font-black leading-[1.1] text-white">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-extrabold leading-none text-[#ffd38a]">
                  от {product.price} ₽
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}