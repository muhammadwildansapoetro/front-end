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
    <div className="bg-color4 py-36">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl font-bold text-slate-800 text-center mb-20">
          Our Products & Services
        </h1>

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

                <h1 className="text-center font-bold text-2xl lg:text-3xl mt-3">
                  {item.fields.name}
                </h1>

                <p className="text-center font-semibold text-lg lg:text-xl mt-1">
                  {item.fields.tagline}
                </p>

                <div className="flex mx-auto mt-3 gap-5">
                  <Link
                    href={`/product/${item.fields.slug}`}
                    className="lg:text-lg font-semibold rounded-full bg-color4 lg:hover:bg-[#f0bb03] shadow-lg px-4 py-1"
                  >
                    Learn more
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
