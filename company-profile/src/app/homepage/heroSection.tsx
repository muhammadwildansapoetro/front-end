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
        <div className="relative flex flex-col items-start lg:items-center top-24 lg:top-28 z-10 ">
          <h1 className="text-6xl tracking-wide mx-5 lg:text-7xl font-bold text-color1">
            Cultivating a Sustainable Future
          </h1>
          <h2 className="text-2xl tracking-wide mx-5 lg:text-4xl font-semibold mt-3 text-color1 ">
            Empowering Sustainable Agriculture Through Innovation.
          </h2>
          <p className="hidden font-semibold text-gray-500 lg:block text-center text-lg mx-72 mt-3 leading-relaxed">
            At
            <span className="font-bold text-gray-700"> FarmLink</span>, we
            understand that
            <span className="font-bold text-gray-700">
              {" "}
              sustainable agriculture
            </span>{" "}
            is essential to overcoming today’s global challenges—climate change,
            food security, and population growth. Through advanced technology
            and{" "}
            <span className="font-bold text-gray-700">
              eco-friendly practices
            </span>
            , we're redefining agriculture to increase productivity and reduce
            environmental impact.
          </p>
          <button className="flex items-center gap-2 bg-color4 font-bold rounded-full px-5 py-2 mx-5 shadow-lg lg:text-lg mt-5 text-color1 hover:bg-color1 hover:text-color3 hover:scale-105">
            <Link href="#products">Explore Our Services</Link>
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
