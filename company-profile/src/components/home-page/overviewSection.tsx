// Company overview: This section should provide a more detailed overview of the company,
// its history, its team, and its culture.

import Image from "next/image";

export default function OverviewSection() {
  return (
    <div className="pt-36 pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mx-5 my-5">
          <Image
            src="/farming-illustration.jpg"
            alt="farming illustration"
            width={1000}
            height={1000}
            className="mb-5"
          />

          <h1 className="font-bold text-3xl mb-5">
            Growing Together for a Sustainable Future
          </h1>
          <h2 className="font-bold text-2xl mb-5">
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
      </div>
    </div>
  );
}
