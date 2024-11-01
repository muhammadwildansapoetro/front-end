import About from "@/components/about";
import Hero from "@/components/hero";
import Project from "@/components/project";

export default function Home() {
  return (
    <div>
      <section id="hero" className="pt-36 pb-36">
        <Hero />
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
    </div>
  );
}
