// Products or services: This section should highlight the company's products or services.
// It should include brief descriptions of each product or service,
// as well as calls to action that encourage visitors to learn more.
import { getProducts } from "@/libs/product";
import { IProduct } from "@/types/product";
import Image from "next/image";

export default async function ProductsSection() {
  const product: IProduct[] = await getProducts();

  return (
    <div className="bg-color4 py-36">
      <div className="container mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold text-color1 text-center mb-10">
          Our Products & Services
        </h1>
        <div className="flex flex-col  lg:flex-wrap lg:flex-row justify-center items-center mx-5 my-5 gap-10">
          <div className="card group">
            <Image
              src="/microgreen.jpg"
              alt="microgreen image"
              width={1000}
              height={1000}
              className="object-cover h-72 lg:group-hover:scale-105"
            />
            <div className="card-title">Microgreens</div>
            <button className="card-button">
              Discover the Power of Microgreens
            </button>
          </div>

          <div className="card group">
            <Image
              src="/lettuce.jpg"
              alt="lettuce image"
              width={1000}
              height={1000}
              className="object-cover h-72 lg:group-hover:scale-105"
            />
            <div className="card-title">Hydroponic Lettuce</div>
            <button className="card-button">
              Explore Our Hydroponic Solutions
            </button>
          </div>

          <div className="card group">
            <Image
              src="/vegetables2.jpg"
              alt="vegetables image"
              width={1000}
              height={1000}
              className="object-cover h-72 lg:group-hover:scale-105"
            />
            <div className="card-title">Fresh Vegetables</div>
            <button className="card-button">
              Discover Our Fresh Produce Offerings
            </button>
          </div>

          <div className="card group">
            <Image
              src="/brown-rice.jpg"
              alt="brown rice image"
              width={1000}
              height={1000}
              className="object-cover h-72 lg:group-hover:scale-105"
            />
            <div className="card-title">Organic Brown Rice</div>
            <button className="card-button">
              Learn About Our Organic Grains
            </button>
          </div>

          <div className="card group">
            <Image
              src="/gedong-gincu.jpg"
              alt="gedong gincu mango image"
              width={1000}
              height={1000}
              className="object-cover h-72 lg:group-hover:scale-105"
            />
            <div className="card-title">Gedong Gincu Mango</div>
            <button className="card-button">
              Taste the Gedong Gincu Difference
            </button>
          </div>

          <div className="card group">
            <Image
              src="/hydroponic.webp"
              alt="hydroponic image"
              width={1000}
              height={1000}
              className="object-cover h-72 grup lg:group-hover:scale-105"
            />
            <div className="card-title">Hydroponic Installation</div>
            <button className="card-button">
              Learn About Our Installation Process
            </button>
          </div>
        </div>

        <div>
          {product.map((item, index) => {
            return <div key={index}>{item.fields.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
