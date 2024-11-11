import Image from "next/image";

export default function About() {
  return (
    <div className="py-36">
      <Image
        src={"/brown-field.jpg"}
        alt="brown field image"
        width={1000}
        height={1000}
        className="absolute top-0 w-full h-[200px] lg:h-[350px] object-cover"
      />
      <div className="container mx-auto mt-24 lg:mt-64">
        <h1 className="font-semibold text-2xl lg:text-4xl text-center mb-5 text-slate-800">
          About Us
        </h1>

        <h2 className="font-bold text-4xl lg:text-6xl text-center text-color1">
          FarmLink Indonesia
        </h2>

        <div className="flex flex-col justify-center items-center mx-5 lg:mx-80 mt-16">
          <div className="mb-10">
            <h1 className="font-bold mb-5 text-center text-2xl lg:text-3xl">
              Introduction
            </h1>
            <p className="leading-relaxed text-lg lg:text-xl lg:text-justify">
              Welcome to{" "}
              <span className="text-color1 font-bold">FarmLink </span>
              Indonesia, where sustainable farming meets innovation. Founded in
              2021 by{" "}
              <span className="text-color1 font-bold">Teguh Laksono</span>,
              we&apos;re an agricultural company based in Indramayu, West Java,
              Indonesia. Our mission is to provide fresh, nutritious, and
              high-quality produce to individuals and businesses, while
              promoting eco-friendly and sustainable practices that respect our
              environment and local farming communities.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="font-bold mb-5 text-center text-2xl lg:text-3xl">
              Our History
            </h1>
            <p className="leading-relaxed text-lg lg:text-xl lg:text-justify">
              <span className="text-color1 font-bold">FarmLink </span> Indonesia
              began as a vision by Teguh Laksono, a graduate of agricultural
              engineering with a passion for modernizing Indonesia&apos;s
              agricultural landscape. In 2021, he founded FarmLink to bridge
              traditional farming practices with the power of technology. From
              our initial days of experimenting with hydroponic systems,
              we&apos;ve grown rapidly and are proud to supply premium products
              including hydroponic lettuce, microgreens, fresh vegetables,
              organic brown rice, and Gedong Gincu mangoes. We also provide
              hydroponic installation services to empower others in adopting
              sustainable agriculture.
            </p>
            <p className="leading-relaxed text-lg lg:text-xl lg:text-justify mt-5">
              Our journey has been one of growth, innovation, and a steadfast
              commitment to quality. Each year, we strive to introduce new
              sustainable products and services, driven by our goal of being a
              leader in modern agriculture within Indonesia.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="font-bold mb-5 text-center text-2xl lg:text-3xl">
              Meet Our Team
            </h1>
            <p className="leading-relaxed text-lg lg:text-xl lg:text-justify">
              At <span className="text-color1 font-bold">FarmLink </span>
              Indonesia, we believe our team is our greatest asset. We&apos;re a
              group of passionate individuals, each bringing unique expertise to
              the table.
            </p>
            <h2 className="mt-3 font-semibold text-xl lg:text-2xl">
              Teguh Laksono &ndash; Founder & CEO
            </h2>
            <p className="mt-1 text-lg lg:text-xl">
              With a degree in agricultural engineering and a background in
              sustainable farming, Teguh leads FarmLink with a vision of modern,
              eco-friendly agriculture.
            </p>
            <h2 className="mt-3 font-semibold text-xl lg:text-2xl">
              Rina Widya &ndash; Head of Operations
            </h2>
            <p className="mt-1 text-lg lg:text-xl">
              Rina has over 10 years of experience in agricultural management
              and logistics. She ensures that our operations run smoothly,
              helping us deliver fresh produce to our clients on time.
            </p>

            <h2 className="mt-3 font-semibold text-xl lg:text-2xl">
              Andi Pratama &ndash; Lead Agronomist
            </h2>
            <p className="mt-1 text-lg lg:text-xl">
              A dedicated agronomist with a focus on soil health and crop yield
              optimization, Andi&apos;s expertise has been crucial in
              maintaining the high quality of our crops.
            </p>
            <h2 className="mt-3 font-semibold text-xl lg:text-2xl">
              Putri Hasanah &ndash; Marketing & Communications Manager
            </h2>
            <p className="mt-1 text-lg lg:text-xl">
              With a background in marketing and a passion for sustainability,
              Putri is responsible for promoting FarmLink&apos;s mission and
              connecting with our customers.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="font-bold mb-5 text-center text-2xl lg:text-3xl">
              Our Culture and Values
            </h1>
            <p className="mb-5 text-lg lg:text-xl">
              <span className="text-color1 font-bold">FarmLink </span> Indonesia
              is more than just a company—it&apos;s a community dedicated to
              sustainability, innovation, and integrity. Our culture emphasizes
              collaboration and creativity, and we&apos;re proud to be part of
              the growing movement towards environmentally responsible farming.
              We&apos;re a group of passionate individuals, each bringing unique
              expertise to the table.
            </p>
            <ul className="list-disc">
              <li className="text-lg lg:text-xl mb-5">
                <span className="font-bold">Sustainability</span>: We believe in
                farming practices that benefit both people and the planet. Our
                hydroponic systems and organic methods are designed to minimize
                environmental impact and promote long-term ecological health.
              </li>
              <li className="text-lg lg:text-xl mb-5">
                <span className="font-bold">Innovation</span>: At FarmLink,
                we&apos;re constantly exploring new ways to make agriculture
                more efficient, sustainable, and accessible. From hydroponic
                installations to microgreens production, our focus is on
                solutions that drive positive change.
              </li>
              <li className="text-lg lg:text-xl mb-5">
                <span className="font-bold">Community & Farmer Support</span>:
                Supporting local farmers and contributing to the Indramayu
                community are at the heart of everything we do. We work
                hand-in-hand with farmers, sharing knowledge and resources to
                uplift our agricultural ecosystem.
              </li>
              <li className="text-lg lg:text-xl ">
                <span className="font-bold">Quality & Integrity</span>: Every
                product we grow and every service we provide reflects our
                commitment to quality and transparency. We take pride in the
                relationships we build with our clients, ensuring they receive
                only the freshest, best-tasting produce.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
