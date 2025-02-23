import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-dvh flex-col md:items-center md:justify-center"
    >
      <div className="container flex items-center justify-center">
        <div className="w-full p-5 md:w-[900px]">
          <h1 className="text-3xl font-bold text-gray-900 md:text-center md:text-4xl">
            About Me
          </h1>

          <p className="mt-5 text-lg text-gray-700 md:mt-10 md:text-justify md:text-xl">
            I&apos;m a junior full-stack web developer with experience building
            websites and web apps, such as a blog site, company profile, event
            ticketing platform, and job board app. I enjoy working with
            technologies like JavaScript, TypeScript, React.js, Next.js,
            Node.js, Express.js, and PostgreSQL.
          </p>

          <p className="mt-5 text-lg text-gray-700 md:text-justify md:text-xl">
            Before transitioning into web development, I worked in supply chain
            and research project, where I developed skills in team
            collaboration, operations management, and process optimization.
            These experiences have shaped my approach to development,
            emphasizing efficiency, clear communication, and problem-solving.
          </p>

          <p className="mt-5 text-lg text-gray-700 md:text-justify md:text-xl">
            I studied Agricultural Engineering at Universitas Padjadjaran, where
            I also gained leadership experience as a Lecture Assisstant, Project
            Officer, and Research Assistant. Currently, I&apos;m enhancing my
            development skills at Purwadhika Digital Technology School, focusing
            on building secure, scalable, and maintainable web applications.
          </p>

          <p className="mt-5 text-lg text-gray-700 md:text-justify md:text-xl">
            I enjoy continuous learning and solving real-world problems through
            web development. I&apos;m committed to maintaining high standards of
            ethics and professionalism in my work. I&apos;m looking for a
            full-time role, contract, or internship where I can apply my skills,
            grow as a web developer, and contribute to a team, be part of
            projects that make a positive impact. I&apos;m eager to discuss new
            opportunities, collaborations, or share ideas.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center md:mt-10">
        <Link
          href={"#project"}
          className="text-lg font-medium tracking-wide text-green-700 hover:translate-y-1"
        >
          See my works
        </Link>
        <FaAnglesDown className="mt-1.5 size-5 animate-bounce text-green-700" />
      </div>
    </section>
  );
}
