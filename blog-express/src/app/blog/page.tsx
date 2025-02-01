import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogList() {
  const blogs: IBlog[] = await getBlogs();

  return (
    <main className="mb-20 mt-10 flex w-screen lg:justify-center">
      <div className="container mx-auto">
        <div className="mx-5 mb-10 text-center">
          <h1 className="text-3xl font-bold text-teal-600 lg:text-5xl">
            Ngariung Blog
          </h1>
          <p className="mt-2 text-lg font-medium lg:text-xl">
            Sharing Knowledge and Insights on Agriculture, Technology, and
            Football
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="mx-5 mt-5 text-center text-lg">
            No blog posts yet, please write a blog post{" "}
            <span className="text-teal-600 underline underline-offset-2">
              <Link href={"/blog/create"}>here</Link>
            </span>
          </div>
        ) : (
          <div className="mx-auto grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="mx-auto max-w-[450px] rounded-lg border border-gray-200 shadow-lg"
                >
                  <div className="justify-start lg:flex lg:flex-col">
                    <div className="roundedn-tl-lg overflow-hidden rounded-tr-lg">
                      <Link href={`/blog/${blog.slug}`}>
                        <Image
                          src={`${blog.image}`}
                          alt="Blog content image"
                          height={500}
                          width={500}
                          className="aspect-video object-cover hover:scale-105 lg:aspect-square"
                        />
                      </Link>
                    </div>

                    <div className="p-2">
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
        )}
      </div>
    </main>
  );
}
