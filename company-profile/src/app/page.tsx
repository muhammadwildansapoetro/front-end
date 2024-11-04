import HeroSection from "@/components/home-page/heroSection";
import OverviewSection from "@/components/home-page/overviewSection";
import ProductsSection from "@/components/home-page/productsSection";
import TestimonialsSection from "@/components/home-page/testimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center border rounded-lg shadow-lg">
        <HeroSection />
        <OverviewSection />
        <section id="products">
          <ProductsSection />
        </section>
        <TestimonialsSection />
      </div>
    </div>
  );
}
