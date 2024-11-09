import HeroSection from "@/components/homepage/heroSection";
import OverviewSection from "@/components/homepage/overviewSection";
import ProductsSection from "@/components/homepage/productsSection";
import TestimonialsSection from "@/components/homepage/testimonialsSection";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <section id="overview">
          <OverviewSection />
        </section>
        <section id="products" className="w-full">
          <ProductsSection />
        </section>
        <TestimonialsSection />
      </div>
    </div>
  );
}
