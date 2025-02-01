import { getBlogBySlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogBySlug(params.slug);

  return (
    <main className="flex w-full flex-col p-5 sm:mx-auto sm:w-[1000px] sm:p-10">
      <div>
        <Link
          href={"/"}
          className="rounded-md border border-teal-600 px-2 py-1 font-bold text-teal-600 hover:bg-teal-600 hover:text-white"
        >
          Home
        </Link>
      </div>

      <h1 className="mt-5 text-2xl font-bold lg:text-3xl">{blog.title}</h1>

      <div className="mt-2 font-medium text-teal-600">
        Category: {blog.category}
      </div>

      <div className="mt-5 overflow-hidden rounded-lg">
        <Image
          src={`${blog.image}`}
          alt="image"
          width={500}
          height={500}
          className="aspect-video object-cover lg:w-full"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="mt-5"
      />

      <p className="mt-5 text-gray-500">Created by {blog.user.username}</p>
    </main>
  );
}
