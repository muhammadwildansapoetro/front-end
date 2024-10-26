import img from "../assets/webdev.png";

function Hero() {
  return (
    <section id="home" className="pt-32 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-10 lg:w-1/2 lg:pl-24 lg:px-0">
            <h1 className="text-2xl font-semibold text-darker md:text-3xl w-fit">
              Hi, my name is
              <span className="block font-bold text-accent text-4xl md:text-5xl lg:text-6xl">
                Muhammad Wildan.
              </span>
            </h1>

            <h2 className="text-xl font-bold text-dark mb-5 lg:text-2xl">
              I'm a Web Developer based in{" "}
              <span className="font-bold">Indonesia.</span>
            </h2>

            <p className="font-medium text-lg text-dark opacity-90 leading-relaxed mb-10 lg:text-xl">
              Dedicated to <span className="font-bold"> helping </span>{" "}
              businesses and individuals
              <br />
              <span className="font-bold"> solve </span>
              real-world problem.
              <br />
              Let's build something
              <span className="font-bold"> great </span> together.
            </p>

            <a
              href="#"
              className="text-base font-semibold text-white bg-accent py-3 px-5 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out lg:text-lg"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-20 lg:px-0 lg:pr-24 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src={img}
                alt="webdev logo"
                className="max-w-full mx-auto lg:w-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
