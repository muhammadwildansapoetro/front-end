import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-36 lg:pt-60 pb-96">
      <div className="container mx-auto">
        <div className="mx-5 lg:mx-36 lg:text-center">
          <h1 className="font-semibold text-xl text-slate-500 lg:text-2xl hidden lg:block">
            Hi, I am Muhammad Wildan Sapoetro and welcome to my blog.
          </h1>
          <h1 className="font-semibold text-xl text-slate-500 lg:text-2xl lg:hidden block">
            Hi, I am Wildan and welcome to my blog.
          </h1>
          <h2 className="font-bold text-5xl lg:text-7xl text-slate-800">
            Agriculture, Programming, and Persib.
          </h2>
          <h3 className="font-semibold text-xl lg:text-2xl mt-3 text-slate-500">
            This blog is a journey through my thoughts on sustainable
            agriculture, coding projects, and the stories of my favorite
            football team, Persib. Dive in and lets explore these fields
            together.
          </h3>
          <button className="rounded-full px-6 py-3 bg-black text-white font-bold mt-5 lg:hover:bg-opacity-70 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-teal-500">
            <Link href={"#blog"}>Start Reading</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
