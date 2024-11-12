// Products or services: This section should highlight the company's products or services.
// It should include brief descriptions of each product or service,
// as well as calls to action that encourage visitors to learn more.
import { getProducts } from "@/libs/product";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsSection() {
  const product: IProduct[] = await getProducts();

  return (
    <div className="bg-color4 lg:py-36 py-20">
      <div className="container mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold text-slate-800 text-center mb-3 lg:mb-6">
          Our Products & Services
        </h1>

        <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 text-center mb-10 lg:mb-6">
          Sustainable Solutions for Modern Agriculture
        </h2>

        <p className="mx-5 mb-16 text-center text-lg lg:text-xl lg:mx-36 hidden lg:block">
          <span className="font-bold">FarmLink</span> Indonesia stands at the
          forefront of agriculture, combining tradition with technology to offer
          products and services that meet the evolving demands of our customers.
          From farm-to-table produce to advanced agricultural consultancy, we
          strive to enrich every harvest and every relationship with quality and
          care
        </p>

        <div className="flex flex-col lg:flex-wrap lg:flex-row justify-center items-center lg:mx-10 gap-10">
          {product.map((item, index) => {
            return (
              <div key={index} className="card group">
                <div className="relative overflow-hidden">
                  <Image
                    src={`https:${item.fields.image.fields.file.url}`}
                    alt={item.fields.name}
                    width={1000}
                    height={1000}
                    className="object-cover lg:group-hover:scale-105 h-[300px]"
                  />
                </div>

                <h1 className="text-center font-bold text-2xl lg:text-3xl mt-4 text-slate-800">
                  {item.fields.name}
                </h1>

                <p className="text-center font-semibold text-xl lg:text-2xl mt-2 text-slate">
                  {item.fields.tagline}
                </p>

                <div className="flex mx-auto mt-7 lg:mt-5 gap-5">
                  <Link
                    href={`/product/${item.fields.slug}`}
                    className="text-lg font-semibold rounded-full bg-color4 lg:hover:bg-[#f0bb03] shadow-lg px-4 py-1"
                  >
                    Product Details
                  </Link>
                  <Link
                    href={"https://wa.me/6282240955597"}
                    target="_blank"
                    className="text-lg  font-semibold rounded-full border border-slate-800 lg:hover:border-color4 text-slate-800 lg:hover:bg-color4 shadow-lg px-4 py-1"
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
