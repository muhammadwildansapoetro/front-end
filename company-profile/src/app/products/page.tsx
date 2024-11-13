import { getProducts } from "@/libs/product";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const product: IProduct[] = await getProducts();

  return (
    <div className="">
      <div className="relative w-full h-[200px] lg:h-[350px]">
        <Image
          src={"/wheat.jpg"}
          alt="wheat image"
          priority
          quality={75} // Keep this for reduced file size without noticeable quality loss
          fill // Enables responsive resizing
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Serve different image sizes based on viewport width
          className="object-cover"
          loading="eager" // Prioritize this image load for LCP
        />
      </div>

      <div className="container mx-auto">
        <h1 className="font-semibold text-2xl lg:text-4xl text-center mb-5 text-slate-800 mt-24 lg:mt-64">
          Our Products
        </h1>
        <h2 className="text-3xl lg:text-6xl font-bold text-color1 text-center mb-5">
          Growing Quality, Cultivating Trust
        </h2>
        <p className="text-center text-lg lg:text-xl mx-5 lg:mx-52 mb-10 lg:mb-10 text-slate-800">
          At <span className="font-bold">FarmLink</span> Indonesia, we are
          dedicated to providing top-quality agricultural products and
          innovative solutions that support sustainable growth. From fresh
          produce to cutting-edge hydroponic systems, our offerings are crafted
          to meet the needs of today&apos;s modern agriculture. Explore our
          range of products and services, designed to empower farmers and enrich
          communities.
        </p>

        <div className="flex flex-col items-center">
          {product.map((item, index) => {
            return (
              <div key={index}>
                <h1 className="font-semibold text-xl lg:text-2xl text-center mb-2 border-t border-slate-300 pt-10">
                  {item.fields.name}
                </h1>
                <h2 className="font-bold text-2xl lg:text-3xl text-color1 text-center">
                  {item.fields.tagline}
                </h2>
                <Image
                  src={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.name}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="object-cover h-[400px] lg:h-[300px] mt-5 rounded-xl"
                />
                <div className="flex justify-center mt-5 mb-10 gap-10">
                  <Link
                    href={`/product/${item.fields.slug}`}
                    className="lg:text-lg font-semibold rounded-full bg-color4 lg:hover:bg-[#f0bb03] shadow-lg px-4 py-1"
                  >
                    Product Details
                  </Link>
                  <Link
                    href={"https://wa.me/6282240955597"}
                    target="_blank"
                    className="lg:text-lg  font-semibold rounded-full border border-slate-800 lg:hover:border-color4 text-slate-800 lg:hover:bg-color4 shadow-lg px-4 py-1"
                  >
                    Order
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
