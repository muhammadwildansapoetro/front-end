// Company overview: This section should provide a more detailed overview of the company,
// its history, its team, and its culture.

import Image from "next/image";

export default function OverviewSection() {
  return (
    <div className="pt-36 pb-36">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center mx-5 lg:justify-between">
          <div className="lg:w-1/2 mb-5 lg:p-10">
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

          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/farming-illustration.jpg"
              alt="farming illustration"
              width={10000}
              height={10000}
              className="lg:w-[700px]"
            />
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div className="flex flex-wrap items-center mx-5 mt-5 lg:justify-between lg:flex-row-reverse ">
            <div className="lg:w-1/2 lg:p-10">
              <ul className="list-disc leading-relaxed">
                <li>
                  <span className="font-bold text-lg">
                    Commitment to Sustainability
                  </span>
                  <br />
                  Using eco-friendly techniques to protect the land for future
                  generations.
                </li>
                <br />
                <li>
                  <span className="font-bold text-lg">
                    Innovative Technology
                  </span>
                  <br />
                  Incorporating advanced farming technologies to maximize
                  efficiency and crop quality.
                </li>
                <br />

                <li>
                  <span className="font-bold text-lg">Quality Assurance</span>
                  <br />
                  Adhering to rigorous standards to deliver fresh, healthy, and
                  reliable produce.
                </li>
                <br />

                <li>
                  <span className="font-bold text-lg">
                    Community Engagement
                  </span>
                  <br />
                  Working closely with local farmers and contributing to
                  community growth.
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2  flex justify-center mt-5">
              <Image
                src="/farming-illustration.jpg"
                alt="farming illustration"
                width={10000}
                height={10000}
                className="mb-5 lg:w-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
