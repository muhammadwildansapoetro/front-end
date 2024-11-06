import HeroSection from "@/app/homepage/heroSection";
import OverviewSection from "@/app/homepage/overviewSection";
import ServicesSection from "@/app/homepage/servicesSection";
import TestimonialsSection from "@/app/homepage/testimonialsSection";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <section id="overview">
          <OverviewSection />
        </section>
        <section id="services" className="w-full">
          <ServicesSection />
        </section>
        <TestimonialsSection />
      </div>
    </div>
  );
}
