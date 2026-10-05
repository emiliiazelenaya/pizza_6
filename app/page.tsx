// app/page.tsx

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { NewItems } from "@/components/home/new-items";
import { CatalogSection } from "@/components/home/catalog-section";
import { PromotionsSection } from "@/components/home/promotions-section";
import { DeliverySection } from "@/components/home/delivery-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070b] text-white">
      <Header />
      <HeroCarousel />
      <NewItems />
      <CatalogSection />
      <PromotionsSection />
      <DeliverySection />
      <Footer />
    </main>
  );
}