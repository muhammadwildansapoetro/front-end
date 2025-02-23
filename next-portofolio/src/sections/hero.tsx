import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-dvh items-center justify-center border"
    >
      <div className="flex w-full items-center justify-center p-5 lg:w-[1100px]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-center lg:text-6xl">
            Hello, <br className="lg:hidden" /> I&apos;m{" "}
            <span>
              <Link href={"#about"} className="hover:text-green-600">
                Muhammad Wildan
              </Link>
            </span>
            .
          </h1>

          <h2 className="mt-1 text-xl font-medium text-gray-600 lg:text-center lg:text-4xl">
            A full-stack web developer, <br className="lg:hidden" />
            based in Bandung - Indonesia.
          </h2>

          <p className="mt-3 text-lg text-gray-500 lg:px-20 lg:text-center lg:text-2xl">
            Eager to contribute to impactful projects, I&apos;m dedicated to
            learning, creating, and collaborating to craft meaningful web
            experiences.
          </p>

          <div className="mt-5 flex lg:mt-10 lg:justify-center">
            <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-center lg:gap-5">
              <Link
                href={"#contact"}
                type="button"
                className="rounded-lg border-2 border-green-700 bg-white px-4 py-2 text-center text-green-700 transition-all duration-300 ease-in-out hover:bg-green-700 hover:text-white lg:w-fit lg:text-lg"
              >
                Let&apos;s Collaborate
              </Link>
              <Link
                href={"#project"}
                type="button"
                className="rounded-lg border-2 border-green-700 bg-green-700 px-4 py-2 text-center text-white transition-all duration-300 ease-in-out hover:bg-green-800 hover:text-white lg:w-fit lg:text-lg"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
