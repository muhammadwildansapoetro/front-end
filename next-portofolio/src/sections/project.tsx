import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <section
      id="project"
      className="flex min-h-dvh justify-center border p-5 lg:p-10"
    >
      <div className="flex w-full flex-col md:w-[1000px]">
        <h1 className="border-b border-gray-300 pb-5 text-3xl font-bold text-gray-900 lg:text-center lg:text-4xl">
          Projects
        </h1>
        <div className="mt-5 flex flex-col lg:mt-10">
          {projects
            .sort((a, b) => b.id - a.id)
            .map((project) => {
              console.log("image:", project.image);
              return (
                <div
                  key={project.id}
                  className={`flex min-h-dvh flex-col-reverse gap-10 lg:flex-row ${
                    project.id % 2 === 0 && "lg:flex-row-reverse"
                  }`}
                >
                  <div className="basis-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt="project image"
                        width={500}
                        height={500}
                        unoptimized
                        className="w-full hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="mt-20 basis-1/2 lg:mt-0">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-2xl font-medium hover:text-green-700"
                    >
                      {project.title}
                    </Link>
                    <p className="mt-1 font-medium text-gray-500">
                      {project.date}
                    </p>
                    <p className="mt-3">{project.description}</p>
                    <div className="mt-3">
                      <p className="text-lg font-medium">Features:</p>
                      <ul className="list-disc">
                        {project.features.map((feature, index) => {
                          return (
                            <li key={index} className="ml-4">
                              {feature}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="mt-3">
                      <p className="text-lg font-medium">Tech Stack:</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.techStack.map((item, index) => {
                          return (
                            <p
                              key={index}
                              className="rounded-full border border-green-700 px-3 py-1.5 text-green-700"
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    {project.team.length > 0 && (
                      <div className="mt-3 flex flex-col gap-1">
                        <p className="text-lg font-medium">Team:</p>
                        <div className="flex flex-wrap gap-2">
                          <ul className="list-disc">
                            {project.team.map((team, index) => (
                              <li key={index} className="mb-1 ml-4">
                                <Link
                                  href={team.linkedIn}
                                  target="_blank"
                                  className="underline underline-offset-4 hover:text-green-700"
                                >
                                  {team.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
