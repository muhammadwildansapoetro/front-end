// Hero section: This is the large banner at the top of the page
// that should feature a high-quality image or video that represents the company's brand.
// The hero section should also include a brief overview of the company and its mission statement.
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      <Image
        alt="field image"
        src={"/field.avif"}
        quality={100}
        fill
        style={{
          objectFit: "cover",
        }}
        className="relative w-full h-screen flex items-start justify-center blur-[2px]"
      />
      <div className="container mx-auto">
        <div className="relative flex flex-col items-start lg:items-center top-24 lg:top-28">
          <h1 className="text-6xl tracking-wide mx-5 lg:text-7xl font-bold text-color1">
            Cultivating a Sustainable Future
          </h1>
          <h2 className="text-2xl tracking-wide mx-5 lg:text-4xl lg:text-center font-semibold mt-3 text-color1 ">
            Empowering Sustainable Agriculture Through Innovation
          </h2>
          <p className="hidden text-gray-700 lg:block text-center text-xl mt-3 leading-relaxed">
            At
            <span className="font-bold text-color1"> FarmLink</span>, we
            understand that
            <span className="font-bold text-color1">
              {" "}
              sustainable agriculture
            </span>{" "}
            is essential to overcoming today&apos;s global challenges
            <br />
            —climate change, food security, and population growth.
          </p>
          <div className="flex items-center gap-2 bg-color4 rounded-full px-6 py-3 shadow-lg mt-5 mx-5 hover:bg-[#f0bb03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color1 lg:hover:cursor-pointer">
            <Link
              href="#products"
              className="text-slate-800 font-semibold text-lg lg:text-xl tracking-wider"
            >
              Explore Our Products
            </Link>
            <Image
              src="/leaf.png"
              alt="leaf icon"
              width={1000}
              height={1000}
              className="w-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
