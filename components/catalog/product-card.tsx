// components/catalog/product-card.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group mx-auto flex w-full max-w-[280px] flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#ffb347]/25 hover:bg-white/[0.06]">
      <div className="relative mx-auto flex h-[190px] w-full items-center justify-center overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(255,179,71,0.18),rgba(255,255,255,0.02)_60%)]">
        <Image
          src={`/${product.image}`}
          alt={product.name}
          fill
          sizes="220px"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.05]"
        />

        {product.isNew && (
          <div className="absolute right-4 top-4 rounded-full bg-[#ff6a3d] px-3 py-1 text-[10px] font-extrabold leading-none tracking-[0.12em] text-white shadow-sm">
            NEW
          </div>
        )}
      </div>

      <div className="mt-5 flex min-h-[162px] flex-col">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffb347]">
          {product.category ?? "pizza"}
        </div>
        <h3 className="mt-2 max-w-[210px] text-[22px] font-black leading-[1.02] text-white">
          {product.name}
        </h3>

        <p className="mt-3 max-w-[220px] text-[13px] leading-[1.55] text-white/56">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="whitespace-nowrap text-lg font-black leading-none text-[#fff0c9]">
            от {product.price} ₽
          </span>

          <Button className="h-10 rounded-full bg-white px-5 text-xs font-bold leading-none text-[#12121a] shadow-none transition hover:bg-[#fff0d5]">
            В корзину
          </Button>
        </div>
      </div>
    </article>
  );
}