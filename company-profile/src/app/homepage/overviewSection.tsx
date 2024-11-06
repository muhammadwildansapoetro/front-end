// Company overview: This section should provide a more detailed overview of the company,
// its history, its team, and its culture.

import Image from "next/image";

export default function OverviewSection() {
  return (
    <div className="pt-36 pb-36 lg:mx-40">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center mx-5 lg:justify-between">
          <div className="lg:w-1/2 mb-5 lg:mb-0 lg:px-5">
            <h1 className="font-bold text-2xl lg:text-4xl mb-5 text-color1">
              Introduction to FarmLink Indonesia
            </h1>
            <p className="text-justify lg:text-xl leading-relaxed lg:leading-relaxed">
              Founded with a commitment to sustainability and quality, FarmLink
              Indonesia has become a trusted provider of fresh, locally grown
              produce. Specializing in hydroponic lettuce, organic brown rice,
              and the prized Gedong Gincu mango native to Indramayu, we cater to
              restaurants, cafes, and small businesses seeking premium kitchen
              essentials and locally sourced fruits and vegetables.
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
              Our journey began with a small team passionate about sustainable
              agriculture, and today, we remain dedicated to improving food
              quality and supporting the local farming community. Our team
              combines expertise in agriculture, technology, and environmental
              stewardship to ensure our products meet the highest standards.
            </p>
          </div>

          <div className="flex justify-center mt-5 lg:w-1/2 lg:px-5">
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
              At FarmLink Indonesia, our culture revolves around innovation,
              sustainability, and collaboration. We work closely with our
              partners and farmers, fostering growth and resilience in the face
              of evolving challenges in the food industry. Our mission is to
              deliver fresh, nutritious produce while preserving Indonesia’s
              agricultural heritage for future generations.
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
