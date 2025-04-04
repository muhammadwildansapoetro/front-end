import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <section
      id="project"
      className="flex min-h-dvh w-full justify-center border p-5 lg:p-10"
    >
      <div className="flex w-full max-w-[1000px] flex-col">
        <h1 className="mb-5 border-b border-gray-300 pb-5 text-3xl font-bold text-gray-900 lg:mb-10 lg:text-center lg:text-4xl">
          Projects
        </h1>
        <div className="flex flex-col lg:gap-10">
          {projects
            .sort((a, b) => b.id - a.id)
            .map((project) => {
              console.log("image:", project.image);
              return (
                <div
                  key={project.id}
                  className={`flex min-h-dvh flex-col-reverse gap-10 pt-5 lg:flex-row lg:border-t lg:border-gray-300 ${
                    project.id % 2 !== 0 && "lg:flex-row-reverse"
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
                  <div className="basis-1/2 border-t pt-5 lg:border-0 lg:pt-0">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-2xl font-medium text-gray-900 hover:text-green-700"
                    >
                      {project.title}
                    </Link>
                    <p className="mt-1 font-medium text-gray-500">
                      {project.date}
                    </p>
                    <p className="mt-3">{project.description}</p>
                    <div className="mt-3">
                      <p className="text-lg font-medium text-gray-900">
                        Features:
                      </p>
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
                      <p className="text-lg font-medium text-gray-900">
                        Tech Stack:
                      </p>
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
                        <p className="text-lg font-medium text-gray-900">
                          Team:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <ul className="list-disc">
                            {project.team.map((team, index) => (
                              <li key={index} className="mb-1 ml-4">
                                <Link
                                  href={team.linkedIn}
                                  target="_blank"
                                  className="text-gray-700 underline underline-offset-4 hover:text-green-700"
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
