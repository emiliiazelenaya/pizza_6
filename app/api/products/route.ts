// app/api/products/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { count, desc } from "drizzle-orm";

const PRODUCTS_PER_PAGE = 12;

export async function GET(request: NextRequest) {
  try {
    const pageParam = request.nextUrl.searchParams.get("page");
    const currentPage = Math.max(1, Number(pageParam) || 1);

    const [totalResult] = await db.select({ total: count() }).from(products);

    const totalProducts = totalResult.total;
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

    const safePage =
      totalPages > 0 ? Math.min(currentPage, totalPages) : currentPage;

    const offset = (safePage - 1) * PRODUCTS_PER_PAGE;

    const items = await db
      .select()
      .from(products)
      .orderBy(desc(products.id))
      .limit(PRODUCTS_PER_PAGE)
      .offset(offset);

    return NextResponse.json({
      items,
      currentPage: safePage,
      totalPages,
      totalProducts,
    });
  } catch (error) {
    console.error("API /products error:", error);

    return NextResponse.json(
      { message: "Не удалось загрузить товары" },
      { status: 500 }
    );
  }
}