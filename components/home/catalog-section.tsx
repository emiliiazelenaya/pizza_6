"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "@/components/catalog/product-card";
import { PaginationControls } from "@/components/catalog/pagination-controls";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
};

type ProductsResponse = {
  items: Product[];
  currentPage: number;
  totalPages: number;
  totalProducts: number;
};

export function CatalogSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const fetchProducts = async (page: number) => {
    try {
      setIsLoading(true);

      const response = await fetch(`/api/products?page=${page}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Не удалось загрузить товары");
      }

      const data: ProductsResponse = await response.json();

      setProducts(data.items);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    setDirection(page > currentPage ? "right" : "left");
    fetchProducts(page);
  };

  return (
    <section
      id="catalog"
      className="relative overflow-hidden px-4 pt-8 pb-10"
    >
      <div className="pointer-events-none absolute left-[-190px] top-[60px] hidden opacity-25 blur-[1px] xl:block">
        <Image
          src="/menu-boy.png"
          alt="Декоративный персонаж"
          width={140}
          height={420}
          className="h-auto w-[400px]"
        />
      </div>

      <div className="mx-auto max-w-[1240px] px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb347]">
              Main menu
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Каталог Slice Lab
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-white/58">
            Большие пиццы, острые позиции и привычная классика в более свежем
            оформлении. Каталог остался живым и по-прежнему грузится постранично.
          </p>
        </div>

        {isLoading ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="mx-auto h-[360px] w-full max-w-[280px] animate-pulse rounded-[28px] bg-white/8"
              />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction === "right" ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction === "right" ? -40 : 40,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {totalPages > 1 && (
          <div className="mt-10">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}