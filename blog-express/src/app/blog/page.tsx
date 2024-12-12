import Avatar from "@/components/avatar";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogList() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="mb-20 mt-10 flex w-screen lg:justify-center">
      <div className="container mx-auto">
        <div className="mx-5 mb-10 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">Ngariung Blog</h1>
          <p className="mt-2 text-lg font-medium lg:text-xl">
            Gathering Ideas, Solving Problems Together
          </p>
          <div className="mt-5">
            <Link
              href={"/blog/create"}
              className="text-centar rounded-lg bg-black px-4 py-3 font-medium text-white"
            >
              Create a post
            </Link>
          </div>
        </div>

        <div className="mx-5 grid grid-cols-1 gap-5 lg:mx-40 lg:grid-cols-3">
          {data.map((blog, index) => {
            return (
              <div key={index}>
                <div className="w-full justify-start lg:flex lg:flex-col">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={`${blog.image}`}
                      alt="Blog content image"
                      height={500}
                      width={500}
                      className="aspect-video rounded-xl object-cover hover:scale-105 lg:aspect-square"
                    />
                  </div>

                  <div className="">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="hover:text- mt-1 text-lg font-medium underline-offset-1 hover:underline lg:text-xl"
                    >
                      {blog.title}
                    </Link>
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
