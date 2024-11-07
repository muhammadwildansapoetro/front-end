import BlogSection from "@/app/homepage/blogSection";
import HeroSection from "@/app/homepage/heroSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <BlogSection />
    </div>
  );
}
