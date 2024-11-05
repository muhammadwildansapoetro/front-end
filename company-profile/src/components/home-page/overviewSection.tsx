// Company overview: This section should provide a more detailed overview of the company,
// its history, its team, and its culture.

import Image from "next/image";

export default function OverviewSection() {
  return (
    <div className="pt-36 pb-36">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center mx-5 my-5 lg:mx-52">
          <Image
            src="/farming-illustration.jpg"
            alt="farming illustration"
            width={1000}
            height={1000}
            className="mb-5 lg:w-[500px]"
          />

          <h1 className="font-bold text-3xl mb-5">
            Growing Together for a Sustainable Future
          </h1>
          <h2 className="font-bold text-xl mb-5">
            At FarmLink Indonesia, we are dedicated to cultivating quality
            produce and fostering sustainable farming practices.
          </h2>
          <p className="text-justify">
            Founded in 2021, FarmLink Indonesia has become a trusted name in
            agriculture, known for delivering high-quality produce through
            sustainable methods. We believe in nurturing both the land and our
            communities, ensuring that every step of our process upholds the
            highest standards of quality and environmental care.
          </p>
        </div>

        <div className="flex flex-col items-center mx-5 my-5 lg:mx-52">
          <ul className="list-disc mt-5 leading-relaxed">
            <li>
              <span className="font-bold">Commitment to Sustainability</span>
              <br />
              Using eco-friendly techniques to protect the land for future
              generations.
            </li>
            <li>
              <span className="font-bold">Innovative Technology</span>
              <br />
              Incorporating advanced farming technologies to maximize efficiency
              and crop quality.
            </li>
            <li>
              <span className="font-bold">Quality Assurance</span>
              <br />
              Adhering to rigorous standards to deliver fresh, healthy, and
              reliable produce.
            </li>
            <li>
              <span className="font-bold">Community Engagement</span>
              <br />
              Working closely with local farmers and contributing to community
              growth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
