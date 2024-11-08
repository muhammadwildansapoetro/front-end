import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-96">
      <div className="container mx-auto">
        <div className="mx-5 lg:mx-52 lg:text-center">
          <h1 className="font-semibold text-2xl text-slate-500 lg:text-3xl">
            Agri-Tech Blog
          </h1>
          <h2 className="font-bold text-6xl lg:text-7xl text-slate-800">
            Where Tech Meets the Fields
          </h2>
          <h3 className="font-semibold text-xl lg:text-2xl mt-3 text-slate-500">
            Bridging agriculture with technology, we bring you the latest on
            agri-tech innovations, coding solutions for modern farming, and
            insights for a more efficient, sustainable world.
          </h3>
          <button className="rounded-full px-6 py-3 bg-teal-500 text-white font-bold mt-5 hover:bg-teal-600 lg:hover:scale-105">
            <Link href={"#blog"}>Start Reading</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
