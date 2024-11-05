// Hero section: This is the large banner at the top of the page
// that should feature a high-quality image or video that represents the company's brand.
// The hero section should also include a brief overview of the company and its mission statement.
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-[url('/field.avif')] flex items-start justify-center">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center backdrop-blur-[2px]"></div>

      <div className="container ">
        <div className="relative flex flex-col items-start lg:items-center top-24 lg:top-36 z-10 ">
          <h1 className="text-6xl tracking-wide mx-5 lg:text-7xl font-bold text-color1">
            Cultivating Sustainable Growth
          </h1>
          <h2 className="text-2xl tracking-wide mx-5 lg:text-4xl font-semibold mt-3 text-color1 ">
            Delivering fresh, organic produce from farm to table.
          </h2>
          <button className="flex items-center gap-2 bg-color4 font-bold rounded-full px-5 py-2 mx-5 mt-5 shadow-lg lg:text-lg text-color1 hover:bg-color1 hover:text-color3 hover:scale-105">
            <Link href="#products">Explore Our Products</Link>
            <Image
              src="/leaf.png"
              alt="leaf icon"
              width={1000}
              height={1000}
              className="w-[15px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
