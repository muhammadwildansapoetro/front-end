import BlogSection from "@/components/homepage/blogSection";
import HeroSection from "@/components/homepage/heroSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <BlogSection />
    </div>
  );
}
