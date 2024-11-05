import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaReact } from "react-icons/fa";
import Icons from "./icons";

export default function Hero() {
  return (
    <div className="container mx-auto border border-transparent">
      <div className="flex justify-start mx-5 lg:justify-center">
        <Image
          src="/photo-wildan.jpeg"
          width={1000}
          height={1000}
          alt="Foto Wildan"
          className="w-[200px] border border-slate-400 rounded-full shadow-lg"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center mx-5 lg:mx-80 border border-transparent">
        <div className="flex flex-col lg:items-center border border-transparent">
          <div className="flex items-center gap-3 text-2xl lg:text-4xl lg:text-center font-bold text-slate-600 border border-transparent">
            <div>Hello, I'm Muhammad Wildan.</div>
            <Link
              href="https://www.linkedin.com/in/muhammadwildansapoetro/"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-110 hover:text-[#0e76a8]" />
            </Link>
          </div>

          <div className="flex flex-col justify-start lg:justify-center lg:items-center lg:mx-5">
            <div className="font-bold text-4xl lg:text-6xl lg:text-center mb-5 text-slate-800 border border-transparent">
              Crafting Simple, Effective
              <span className="text-5xl lg:text-7xl text-teal-500">
                {" "}
                Web Solutions
              </span>
              .
            </div>

            <Icons />
          </div>

          <div className="flex flex-col  lg:text-center text-slate-600 text-lg lg:text-xl my-5 border border-transparent">
            <div>
              Eager to contribute in impactful projects while growing my web
              development expertise.
            </div>
            <div>
              Learning and developing every day to create user-centered,
              accessible websites.
            </div>
          </div>

          <button className="flex items-center gap-2 text-xl w-fit border px-5 py-1 rounded-full bg-teal-500 hover:bg-teal-600 hover:scale-105 ">
            <Link href="#project" className="font-bold text-white">
              See Our Project
            </Link>
            <Image
              src="/right-arrow.png"
              alt="right arrow"
              width={100}
              height={100}
              className="w-[15px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
