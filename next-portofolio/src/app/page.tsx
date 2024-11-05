import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero/hero";
import Project from "@/components/project/project";

export default function Home() {
  return (
    <div>
      <section id="hero" className="pt-36 pb-36">
        <Hero />
      </section>
      <section id="about" className=" pt-36 pb-36 bg-slate-800 text-white">
        <About />
      </section>
      <section id="project" className="pt-36 pb-36">
        <Project />
      </section>
      <section id="contact" className="pt-36 pb-36">
        <Contact />
      </section>
    </div>
  );
}
