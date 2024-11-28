import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Blog from "./blog/[slug]/page";
import Link from "next/link";

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="flex w-screen lg:justify-center">
      <div className="container">
        <h1 className="mx-5 mb-10 mt-10 text-2xl font-bold lg:text-center lg:text-4xl">
          Muhammadwildansapoetro - Blog
        </h1>
        <div className="mx-5 flex flex-col gap-10 border lg:mx-56">
          {data.map((blog, index) => {
            return (
              <div key={index}>
                <div className="lg:flex">
                  <Image
                    src={`${blog.image}`}
                    alt="Blog content image"
                    height={500}
                    width={500}
                    className="aspect-video rounded-xl object-cover lg:aspect-square lg:w-60"
                  />
                  <div className="flex items-center">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="hover:text- mt-1 text-xl font-medium underline-offset-1 hover:underline lg:ml-5 lg:text-2xl"
                    >
                      {blog.title}
                    </Link>
                    <p>{blog.createdAt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
