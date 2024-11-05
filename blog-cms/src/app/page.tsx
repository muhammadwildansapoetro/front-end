import Blog from "@/components/section/blog";
import Hero from "@/components/section/hero";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Blog />
    </div>
  );
}
