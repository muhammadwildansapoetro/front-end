import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="pt-36 pb-96">
      <div className="container mx-auto">
        <div className="mx-5">
          <h1 className="font-semibold text-2xl mb-1 text-gray-500">
            Agri-Tech Blog
          </h1>
          <h2 className="font-bold text-6xl text-slate-800">
            Where Tech Meets the Fields
          </h2>
          <h3 className="font-semibold text-2xl mt-3 text-gray-500">
            Bridging agriculture with technology, we bring you the latest on
            agri-tech innovations, coding solutions for modern farming, and
            insights for a more efficient, sustainable world.
          </h3>
          <button className="rounded-full px-7 py-2 bg-teal-500 text-white font-bold mt-5 hover:bg-teal-600 hover:scale-105">
            <Link href={"#blog"}>Start Reading</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
