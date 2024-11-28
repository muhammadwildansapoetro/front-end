import Link from "next/link";
import About from "./about";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-dvh w-screen flex items-center justify-center"
    >
      <div className="container">
        <div className="flex flex-col m-5">
          <div className="text-4xl font-bold lg:text-7xl lg:text-center text-slate-800">
            Hello, I'm{" "}
            <span>
              <Link
                href={"#about"}
                className="hover:text-blue-700 hover:text-[73px]"
              >
                Muhammad Wildan
              </Link>
            </span>
            .
          </div>

          <div className="text-2xl mt-2 font-medium lg:text-4xl lg:text-center lg:mx-72 text-slate-700">
            A full-stack web developer, based in Bandung - Indonesia.
          </div>

          <div className="text-xl mt-4 lg:text-3xl lg:text-center lg:mx-80 text-slate-600">
            Eager to contribute to impactful projects, I&apos;m dedicated to
            learning, creating, and collaborating to craft meaningful web
            experiences.
          </div>

          <div className="flex lg:justify-center mt-5 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:justify-center items-start lg:items-center">
              <Link
                href={"#project"}
                type="button"
                className="text-white bg-blue-700 border border-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2 shadow-md shadow-blue-300"
              >
                Let&apos;s Collaborate
              </Link>

              <Link
                href={"#project"}
                type="button"
                className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2 shadow-md shadow-blue-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
