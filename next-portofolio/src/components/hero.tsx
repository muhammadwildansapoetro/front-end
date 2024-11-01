import Link from "next/link";

export default function Hero() {
  return (
    <div className="container border border-slate-500">
      <div className="flex flex-wrap justify-center items-center mx-10 p-5 border border-slate-500">
        <div className="border border-transparent">
          <img
            src="/photo-wildan.jpeg"
            alt="Foto Wildan"
            className="w-[200px] border rounded-full"
          />
        </div>

        <div className="flex flex-col p-5 border border-transparent">
          <div className="text-3xl lg:text-6xl border border-transparent">
            Hello, I'm Muhammad Wildan.
          </div>

          <div className="flex justify-start">
            <div className="text-xl lg:text-3xl mt-1 border border-transparent">
              Creating Accessible and User-Friendly Web{" "}
              <span className="text-teal-500">Solutions</span>.
            </div>
          </div>

          <div className="text-md lg:text-xl mt-5 border border-transparent">
            Eager to contribute in impactful projects while growing my web
            development expertise. <br /> Learning and developing every day to
            create user-centered, accessible websites.
          </div>

          <div className="text-xl mt-5 w-fit border px-3 py-1 rounded-full bg-teal-500 hover:bg-teal-600 text-white">
            <Link href="#project">See My Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
