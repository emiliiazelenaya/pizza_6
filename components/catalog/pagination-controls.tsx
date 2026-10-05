"use client";

// components/catalog/pagination-controls.tsx

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
          currentPage === 1
            ? "cursor-not-allowed border-white/10 bg-white/5 text-white/30"
            : "border-white/12 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-[#ffb347]/35 hover:bg-[#ffb347]/10 hover:text-[#ffe1b0]"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
        Назад
      </button>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                isActive
                  ? "bg-white text-neutral-900 shadow-md"
                  : "border border-white/12 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-[#ffb347]/35 hover:bg-[#ffb347]/10 hover:text-[#ffe1b0]"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
          currentPage === totalPages
            ? "cursor-not-allowed border-white/10 bg-white/5 text-white/30"
            : "border-white/12 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-[#ffb347]/35 hover:bg-[#ffb347]/10 hover:text-[#ffe1b0]"
        )}
      >
        Вперед
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}