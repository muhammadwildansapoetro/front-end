// Company overview: This section should provide a more detailed overview of the company,
// its history, its team, and its culture.

import Image from "next/image";

export default function OverviewSection() {
  return (
    <div className="py-36 lg:mx-40">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center mx-5 lg:justify-between">
          <div className="lg:w-1/2 mb-5 lg:mb-0 lg:px-5">
            <h1 className="font-bold text-2xl lg:text-4xl mb-5 text-color1">
              Introduction to FarmLink Indonesia
            </h1>
            <p className="text-justify lg:text-xl leading-relaxed lg:leading-relaxed">
              Founded in 2021 by Teguh Laksono, a graduate of agricultural
              engineering, FarmLink Indonesia has become a trusted provider of
              fresh, locally grown produce. Based in Indramayu, we specialize in
              hydroponic lettuce, organic brown rice, and the prized Gedong
              Gincu mango native to the region. Catering to restaurants, cafes,
              and small businesses (UMKM), we offer premium kitchen essentials
              and locally sourced fruits and vegetables, ensuring the highest
              standards of quality and sustainability.
            </p>
          </div>

          <div className="flex justify-center lg:w-1/2 lg:px-5">
            <Image
              src="/vegetables.jpg"
              alt="vegetables image"
              width={10000}
              height={10000}
              className="lg:w-[600px] shadow-lg rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-20 justify-center items-center mx-5 lg:justify-between lg:flex-row-reverse">
          <div className="lg:w-1/2 lg:px-10 mb-5 lg:mb-0">
            <h1 className="font-bold text-2xl mb-5 lg:text-4xl text-color1">
              Our Journey and Dedication
            </h1>
            <p className="text-justify lg:text-xl leading-relaxed lg:leading-relaxed">
              Our journey began with the vision of our founder, Teguh Laksono,
              who, armed with a background in agricultural engineering, sought
              to blend modern farming technology with sustainable practices.
              Since 2021, we have grown into a dedicated team passionate about
              improving food quality and supporting local farmers. With
              expertise in agriculture, technology, and environmental
              stewardship, we ensure our products meet the highest standards,
              while prioritizing sustainability and community welfare.
            </p>
          </div>

          <div className="flex justify-center lg:w-1/2 lg:px-5">
            <Image
              src="/farmers.jpg"
              alt="farmers image"
              width={10000}
              height={10000}
              className="lg:w-[700px] rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-20 items-center mx-5 lg:justify-between">
          <div className="lg:w-1/2 mb-5 lg:mb-0 lg:px-5">
            <h1 className="font-bold text-2xl lg:text-4xl mb-5 text-color1">
              Our Culture and Values
            </h1>
            <p className="text-justify lg:text-xl leading-relaxed lg:leading-relaxed">
              At FarmLink Indonesia, our culture is rooted in innovation,
              sustainability, and collaboration. We work closely with our
              partners, farmers, and stakeholders to foster growth, resilience,
              and adaptability in the face of evolving challenges in the
              agricultural industry. Our mission is to deliver fresh, nutritious
              produce that contributes to the health and well-being of our
              customers, while preserving Indonesia&apos;s agricultural heritage
              for future generations.
            </p>
          </div>

          <div className="flex justify-center lg:w-1/2  lg:px-5">
            <Image
              src="/green-corn-plant.jpg"
              alt="green corn plant image"
              width={10000}
              height={10000}
              className="lg:w-[700px] shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
