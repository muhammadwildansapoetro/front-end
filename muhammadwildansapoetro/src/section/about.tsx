function About() {
  return (
    <section id="about" className="pt-36 pb-36 bg-darker">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-20 mb-10 lg:w-1/2 lg:px-24 lg:mb-0">
            <h1 className="font-bold text-accent text-2xl mb-5">About Me</h1>

            <p className="text-silver">
              My name is Muhammad Wildan Sapoetro. I'm a web developer from
              Indonesia with a background in agricultural engineering. I have
              three years of experience working in the supply chain field.
            </p>
          </div>

          <div className="w-full px-20 lg:w-1/2 lg:px-24">
            <h1 className="font-bold text-accent text-2xl mb-5">Contact Me</h1>
            <p className="text-silver mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              consequuntur laborum distinctio alias commodi nesciunt praesentium
              quasi ratione ipsam sint.
            </p>

            <div className="flex items-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammadwildansapoetro/"
                target="_blank"
                className="text-silver border-2 rounded-full px-4 hover:bg-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
